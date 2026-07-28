---
name: arm-spec-analyzer
license: MIT
metadata:
  version: "1.0.0"
description: "Discover Azure ARM (resource-manager) TypeSpec specs in an azure-rest-api-specs checkout and search for patterns across their generated OpenAPI (Swagger) documents. USE FOR: repo-wide audits/queries over ARM specs and their emitted OpenAPI (e.g. schema naming, extensions, api-version coverage, definition/property patterns). Provides a reusable Python analyzer plus the rules for correctly mapping tspconfig.yaml -> generated OpenAPI and grouping spec directories into services. DO NOT USE FOR: authoring/modifying .tsp files (use azure-typespec-author), SDK generation, or single-file lookups."
---

# ARM Spec Analyzer

Reusable methodology and tooling for **searching patterns across Azure Resource Manager
(ARM) TypeSpec specifications** and the OpenAPI (Swagger) documents they generate, in an
`Azure/azure-rest-api-specs` checkout.

Use this whenever a task is of the form: *"find/count/list all ARM specs whose generated
OpenAPI (of the latest api-version) matches some condition"* — e.g. dotted schema names,
missing extensions, a specific property shape, api-version coverage, etc.

## When to use

- Repo-wide audits or inventories over ARM specs and their emitted OpenAPI.
- Questions scoped to "the latest api-version of each ARM service".
- Any pattern query where correctly mapping `tspconfig.yaml` → generated OpenAPI and
  grouping nested spec dirs into one service matters.

Do **not** use for authoring/editing TypeSpec, SDK generation, or trivial single-file
lookups (use grep/glob directly).

## Prerequisites

- A local checkout of `Azure/azure-rest-api-specs`, ideally synced to `main`
  (`git fetch upstream main && git reset --hard upstream/main`, where `upstream` is the
  Azure remote — note some clones name the Azure remote `origin`).
- Python 3 with `pyyaml` (`pip install pyyaml`).

## Key domain rules (why a naive scan is wrong)

These are the non-obvious rules the analyzer encodes. Reuse them for any custom scan.

### 1. What is a spec

A **spec** is a directory tree with exactly one `tspconfig.yaml` and one or more `.tsp`
files in that directory or its subdirectories. See
`documentation/directory-structure.md`.

### 2. What makes a spec ARM (vs data-plane)

A spec is **ARM** if either:

- its `tspconfig.yaml` `linter.extends` includes
  `@azure-tools/typespec-azure-rulesets/resource-manager`, **or**
- the `tspconfig.yaml` lives under a directory named `resource-manager`.

The linter signal is the reliable superset — classify by the ruleset, not the path alone.

### 3. Grouping spec directories into a *service*

A `resource-manager/<RPNS>/<Service>` directory may contain **multiple nested spec
directories** (each with its own `tspconfig.yaml`). Treat them all as **one service**.
Example: `Microsoft.Network/Network/{Network,Vmss,common}` → one `Network` service; the
sub-dir named like the service (`Network/Network`) is the primary one.

Grouping key from a `tspconfig.yaml` path (relative to `specification/`):

- If the path contains `resource-manager`: key = everything up to and including the first
  directory under the `<RPNS>` (i.e. `<short>/resource-manager/<RPNS>/<Service>`).
- Otherwise (flat / `.Management` / other layout): key = `<short>/<firstDir>`.

Sibling `<Service>` directories directly under the `<RPNS>` (e.g.
`Microsoft.ContainerService/{aks,fleet}`) are **separate** services.

### 4. v2 layout takes precedence over `.Management`

During migration a service may exist in both the v2 `resource-manager/<RPNS>/<Service>`
layout and the older flat `.Management` layout. Prefer v2: if a flat service's generated
OpenAPI files land inside an existing v2 service directory, fold them into the v2 service
and drop the flat duplicate.

### 5. Mapping `tspconfig.yaml` → generated OpenAPI files

The `@azure-tools/typespec-autorest` emitter decides output location. Resolve tokens in
this order (do **not** assume outputs sit under the tspconfig dir):

1. `project-root` = the `tspconfig.yaml` directory.
2. top-level `output-dir` option (default `{project-root}`), substituting `{project-root}`.
3. `emitter-output-dir` (default `{project-root}`), substituting `{project-root}` and
   `{output-dir}` → this is the **base**.
4. `azure-resource-provider-folder` option (default `resource-manager`).
5. `output-file` (default `{version-status}/{version}/openapi.json`), substituting
   `{project-root}`, `{output-dir}`, `{emitter-output-dir}`, `{azure-resource-provider-folder}`,
   and turning `{version-status}`, `{version}`, `{service-name}`, and any other unknown
   token into a `*` glob. `output-file` may itself contain root tokens (e.g.
   `{emitter-output-dir}/...`, `{project-root}/...`) which make it absolute — join with the
   base using path-join semantics that respect an absolute right-hand side.

Because sibling specs can share one output directory and differ only by filename (e.g.
`ApplicationInsights/{Components,Favorites,...}` → `.../ApplicationInsights/stable/<v>/<name>_API.json`),
attribution must be **config-based (base + output-file)**, not nearest-ancestor. Grouping
into services makes intra-service over-matching harmless.

### 6. Which OpenAPI files count

- Only `.json` documents whose `info` section contains the **`x-typespec-generated`**
  extension are TypeSpec-generated OpenAPI docs.
- **Ignore** anything under an `examples/` directory (those are `x-ms-examples`, not specs).

### 7. "Latest version" semantics

Api-versions are date-based `YYYY-MM-DD[-preview]` folders under `stable/` or `preview/`.
For a service, take the **single newest api-version** across all its generated docs
(max by date; on a tie, `stable` > `preview`), and scan only the docs present at that
version. (An alternative — latest per individual doc — is available via `file_identity`;
pick per task.)

### 8. Schema names

In Swagger 2.0, schema names are the keys of the top-level `definitions` object (OpenAPI 3:
`components.schemas`). ARM specs emit Swagger 2.0.

## The tool

`arm_spec_analyzer.py` (in this skill folder) implements all of the above with a
**pluggable scan** function `scan(openapi_doc) -> list[matches]`.

Run the built-in dotted-schema-name scan:

```bash
pip install pyyaml
python .github/skills/arm-spec-analyzer/arm_spec_analyzer.py \
    <repo>/specification --out results.json
```

Output: count of ARM services discovered, services matching the scan, any superseded
`.Management` services, cross-service file-ownership dupes (should be 0), and a per-service
summary. `--out` writes structured JSON (`service`, `short`, `dir`, `num_configs`,
`latest`, `files:[{file,version,count}]`, `count`, `sample`).

### Writing a custom scan

Import and reuse the discovery/resolution machinery; only supply a predicate:

```python
from arm_spec_analyzer import analyze

def scan_missing_operations(doc):
    # return a truthy list of "matches" for docs that lack a top-level "paths"
    return [] if doc.get("paths") else ["no-paths"]

results, services, dupes, superseded = analyze("<repo>/specification",
                                               scan=scan_missing_operations)
```

Helpers available for scans: `schema_names(doc)`, `is_generated(doc)`,
`version_from_path(path)`, `parse_version(v)`, `file_identity(path)`,
`discover_services(spec_root)`, `resolve_output_globs(cfg_path, doc)`.

## Validation checklist (run after any analysis)

- `cross-service dupes == 0` (a generated file attributed to two services means the
  grouping/resolution is off).
- Spot-check a few matches against the raw JSON to confirm the predicate is correct.
- Confirm standalone services aren't silently zero-matching due to unresolved
  `output-file` tokens (`{emitter-output-dir}`, `{project-root}` inside `output-file`).
