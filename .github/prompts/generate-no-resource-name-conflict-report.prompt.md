---
mode: agent
---

Generate and publish a repository-wide TypeSpec ARM lint report for
`@azure-tools/typespec-azure-resource-manager/no-resource-name-conflict`. The report must be a
reproducible, dated snapshot comparable in completeness, traceability, and navigation to
[`Report_20261106`][reference-report].

This is an assessment task. Do not edit service TypeSpec, generated Swagger, SDK configuration, or
the central linter ruleset. Do not create remediation PRs. Use the custom
`typespec-arm-resource-data` emitter/report tool to resolve ARM resources and operations, then
correlate those records with diagnostics from the target rule.

## Inputs and defaults

Resolve every input before generation and record its final value in the report.

| Input | Default |
| --- | --- |
| Source repository | `Azure/azure-rest-api-specs` |
| Source ref | latest fetched `upstream/main` |
| Publication repository | the authenticated user's fork of `Azure/azure-rest-api-specs` |
| Rule code | `@azure-tools/typespec-azure-resource-manager/no-resource-name-conflict` |
| Rule short name | `no-resource-name-conflict` |
| Report ID | `Report_<UTC-yyyyMMdd>_no-resource-name-conflict` |
| Aggregate directory | `documentation/typespec-arm-resource-data/<REPORT_ID>` |
| Report branch | `users/<github-login>/arm-lint/report-<rule>-<source-sha8>-<UTC timestamp>` |
| Per-project timeout | 300 seconds |
| Concurrency | 4 |
| Publication mode | push the report branch to the user's fork; create no PR unless explicitly requested |

Use the exact source SHA after fetching; never report against a moving branch name. If the user
supplies a source ref, resolve it to a commit and use that commit consistently for compilation,
metadata, and source links.

## Pinned provenance

The report must distinguish the source snapshot, the installed compiler/library, the target rule,
and the custom report tool.

- Custom tool reference implementation:
  `markcowl/azure-rest-api-specs@59e16c42bb15e830d4c7cffc126a2ef2beae0b81`,
  under `eng/tools/typespec-arm-resource-data/`.
- Reference tool package:
  `@azure-tools/typespec-arm-resource-data-report@1.4.0`.
- Reference report source:
  `Azure/azure-rest-api-specs@25e6580ed12cabbca57863ab3c2b13b6657dfa0e`.
- The target rule's behavior was verified in
  `Azure/typespec-azure@6a4865808cd7429cdb1ae1758ecc6b24212f89c9`, but the report must use and
  record the ARM package actually installed by the assessed `pnpm-lock.yaml`. Do not silently run
  an unreleased checkout of the rule.
- Rule documentation:
  <https://azure.github.io/typespec-azure/docs/libraries/azure-resource-manager/rules/no-resource-name-conflict/>.

If the custom tool is already present in the source snapshot, use that tracked version and record
its commit and package version. Otherwise, materialize the tool from the pinned reference
implementation on the report branch. Bring over only the tool subtree and integrate it surgically
with the current workspace; do not overwrite current `eng/tools/package.json`,
`pnpm-workspace.yaml`, or `pnpm-lock.yaml` with historical copies. Treat any compatibility patch or
preview-package provenance from `Report_20261106` as historical unless the selected dependency
actually requires it.

## Rule semantics that the report must preserve

Read the installed rule implementation and tests before generating results. At minimum, verify and
document these semantics:

- Logical resource names are compared exactly and case-sensitively. `Widget` and `widget` do not
  conflict.
- The rule evaluates resolved ARM resources across all ARM service namespaces in one program.
- A group of `N` resources with one logical name normally produces `N - 1` diagnostics because the
  first occurrence establishes the name and each later occurrence is reported.
- The diagnostic target is the authored read operation, or the authored create/update operation
  when no read exists.
- Synthetic parents and internal library-only operations are excluded.
- The declaration view of independently versioned services is checked.
- Suppression is not an acceptable disposition. The report may inventory source suppressions, but
  it must not recommend suppressing this rule.

Do not infer violations from string search, model names, terminal path segments, or Legacy template
usage. A finding exists only when the rule reports it at the pinned source snapshot.

## Prerequisites and isolation

1. Confirm Git, GitHub CLI, mise, Node.js, and pnpm are available.
2. Use mise to provision and run Node.js 24 or later and pnpm `12.6.0`, matching the repository
   manifest unless the pinned source declares different requirements. Do not commit local mise
   configuration solely for this report.
3. Authenticate `gh` and verify:
   - `upstream` resolves to `Azure/azure-rest-api-specs`;
   - the push remote resolves to the authenticated user's fork;
   - the fork's parent is `Azure/azure-rest-api-specs`.
4. Fetch `upstream/main`, the user's fork, and the pinned custom-tool commit.
5. Create a new independent worktree or clone from the resolved source SHA. Preserve unrelated
   work; never clean, reset, or switch a shared dirty checkout.
6. Generate a unique report branch using the default pattern. Verify it does not exist locally or
   on the fork before creating it.
7. Record the initial heads of `upstream/main`, the fork's default branch, and the selected source
   ref so publication checks can prove none were changed.

Before any mutation, print and verify the absolute repository root, current branch, source SHA,
push remote URL, and intended report directory.

## Discovery scope

Use the custom tool's Git-backed discovery as the authoritative ARM project inventory:

- query tracked `specification/**/tspconfig.yaml`, `main.tsp`, and `client.tsp`;
- include roots matching `specification/<service>/resource-manager/**/tspconfig.yaml`;
- classify a project with `main.tsp` as `main-bearing`;
- classify a project with only `client.tsp` as legacy `client-only`;
- compile tracked `main.tsp` entrypoints directly;
- retain client-only projects as explicit skipped records rather than silently dropping them.

Also reconcile the inventory with the repository's configured TypeSpec validation inputs. Explain
any difference. The report is incomplete if a tracked ARM project is absent without a recorded
reason.

Do not treat zero-resource, skipped, timed-out, or failed projects as clean. Keep each category
separate.

## Generation workflow

### 1. Restore dependencies without changing the assessed toolchain

- Inspect the root `package.json`, `pnpm-workspace.yaml`, and `pnpm-lock.yaml`.
- Record the declared package manager, Node requirement, TypeSpec compiler version, ARM library
  version, ruleset version, and lockfile SHA-256.
- If dependencies are missing, run the repository's frozen-lockfile install through mise. If adding
  the pinned custom tool requires workspace integration, update manifests minimally, run `pnpm
  install`, and record both the original source lock hash and the report-branch lock hash.
- Do not upgrade the compiler, ARM library, or rulesets merely to obtain a result. If the installed
  ARM package lacks the rule, stop and report the provenance gap; do not substitute a different
  rule implementation without explicit approval.

### 2. Add structured target-rule capture to the custom tool

Reuse the custom tool's existing discovery, compiler-option resolution, worker isolation, timeout,
resume validation, source-link generation, deterministic sorting, hashing, checkpoint manifest,
and resource/operation CSV generation.

Extend it only as needed so each project records target-rule diagnostics in a deterministic
machine-readable file, preferably `diagnostics.json`, with:

- full diagnostic code, severity, and message;
- source file, one-based line and column, and immutable GitHub source URL;
- project root, entrypoint, and service;
- exact conflicting logical resource name;
- both resource instance paths parsed from the diagnostic message;
- correlation state: `matched`, `partial`, or `unmatched`;
- correlated resource keys, resource types, instance paths, resource-definition links, and
  authored operation links;
- a reason whenever correlation is partial or unmatched.

Enable the target rule explicitly for the analysis run while preserving normal compiler and ARM
library validation. Disable unrelated emitters. Do not change checked-in project `tspconfig.yaml`
files or the repository's central ruleset.

Add focused tests for target-rule filtering, deterministic diagnostic ordering, source links,
correlation, resume invalidation, and aggregate counts. Run the tool's formatter and complete
package check before repository-wide generation.

### 3. Generate the resolved resource snapshot

Run the custom tool for all discovered ARM projects with:

- the absolute repository root;
- the pinned source SHA as `--source-ref`;
- `--report-directory <REPORT_ID>`;
- the chosen timeout and concurrency;
- `--resume` only after the first checkpoint exists.

The run must attempt every selected project and write a checkpoint manifest even when some projects
fail. Do not restart from scratch for isolated failures; rerun selected projects with `--project`
or `--service`, then merge only compatible records using the tool's existing provenance checks.

### 4. Correlate diagnostics with resolved resources and operations

For each exact logical resource name reported by the rule:

1. Find every resolved resource record in that project with the same case-sensitive
   `resourceName`.
2. Preserve every distinct `resourceKey`, ARM type, and full `resourceInstancePath`.
3. Use `resourceDefinition` when available; otherwise fall back to the first authored read or
   create/update operation link.
4. Include all associated operations from `operations.csv`, grouped by operation kind.
5. Keep same-identity and distinct-identity collisions separate. Do not discard case-only ARM
   identity duplicates; exact logical-name equality is what this rule checks.
6. If the diagnostic names or paths cannot be matched to emitter rows, retain the diagnostic as an
   unmatched finding and explain why.

Deduplicate overlapping diagnostics by project, diagnostic source location, exact logical name,
and the ordered set of conflicting instance paths. Never deduplicate across projects.

### 5. Classify coverage

Every discovered project must end in exactly one category:

- succeeded with findings;
- succeeded clean;
- zero-resource;
- failed compilation;
- timed out;
- skipped client-only;
- blocked because the installed toolchain lacks the rule.

Preserve compiler diagnostics for failed and timed-out projects in `errors.md`. A nonzero process
exit caused by project failures is expected evidence, not permission to omit those projects.

## Required output schema

Write the dated output beneath
`documentation/typespec-arm-resource-data/<REPORT_ID>/`. Keep per-project output under
`<project-root>/<REPORT_ID>/`, matching the reference tool.

### Aggregate `manifest.json`

Use a versioned schema and include:

- repository, source SHA, source timestamp, generation timestamp, and report ID;
- source lockfile SHA-256 and report-branch lockfile SHA-256 when different;
- custom-tool source commit and package version;
- Node, pnpm, TypeSpec compiler, ARM library, and ruleset versions;
- target rule code, documentation URL, severity, enabled-by-default status, and rule source
  provenance;
- all project records and output hashes;
- totals for discovered, attempted, succeeded, clean, affected, zero-resource, failed, timed-out,
  skipped, and blocked projects;
- totals for diagnostics, deduplicated findings, affected logical names, correlated resource
  records, matched, partial, and unmatched diagnostics;
- per-project diagnostic groups and source links.

Do not hand-edit generated totals. Derive them from project records and assert the arithmetic in
tests.

### Aggregate `README.md`

Use these sections, in this order:

1. `# no-resource-name-conflict report`
2. `## Source, rule, and tool metadata`
3. `## Executive summary`
4. `## Coverage`
5. `## Findings by project`
6. `## Unmatched or partially matched diagnostics`
7. `## Failed and timed-out projects`
8. `## Zero-resource projects`
9. `## Skipped client-only projects`
10. `## Project directory`
11. `## Reproduction`
12. `## Limitations`

For every finding, show:

- a stable finding ID;
- project and immutable diagnostic source link;
- exact logical resource name and diagnostic text;
- every conflicting ARM type and instance path;
- resource-definition link or the best authored-operation fallback;
- associated read, create/update, update, delete, list, action, and unknown operations;
- correlation state and any caveat.

This report inventories violations only. Do not add speculative fixes or claim a source change was
validated.

### Per-project output

For successful projects, retain:

- `resources.csv`;
- `operations.csv`;
- `diagnostics.json`;
- `status.json`.

For failed projects, retain:

- `status.json`;
- `errors.md`.

Hash every output in `status.json` and the aggregate manifest. Use deterministic ordering and LF
line endings so a rerun at the same source and toolchain is byte-for-byte stable except for an
explicitly documented generation-time field.

## Validation gates

Do not publish until all applicable checks pass:

1. The custom tool's build, lint, format check, and tests.
2. A controlled fixture that proves the target rule emits a known conflict and the report
   correlates both resources.
3. A controlled clean fixture that produces no target-rule finding.
4. A full generation run or a resumed run with every discovered project accounted for.
5. Manifest arithmetic and unique project-root checks.
6. Every aggregate relative link resolves to a generated file.
7. Every GitHub source link contains the pinned source SHA, not `main`, `HEAD`, or the report branch.
8. Every output hash matches the file on disk.
9. A second generation at the same source and toolchain produces no substantive diff.
10. `git diff --check` passes.
11. The branch diff contains only the prompt-independent report tooling integration, report
    artifacts, and directly required lock/manifests. It contains no service-source changes.

If repository-wide generation has any failed, timed-out, skipped, or blocked project, the README
must state that coverage is incomplete and quantify the limitation. Do not describe the repository
as clean.

## Failure handling

- Continue past individual project failures and preserve their diagnostics.
- Retry timeouts once with a larger per-project timeout and the same source/tool provenance.
- Use targeted reruns plus `--resume`; never merge outputs from different source SHAs, lock hashes,
  tool versions, rule versions, or report IDs.
- If the custom tool itself fails before writing a checkpoint, fix the tool with tests, rerun its
  checks, and restart generation.
- If a diagnostic cannot be correlated, retain it as unmatched. Never drop it or invent resource
  metadata.
- If source files change during generation, stop, discard incompatible generated outputs, and
  restart from a newly pinned SHA.
- Never mark compilation failures as zero-resource or clean.

## Commit and publication

1. Review the final diff and verify the current branch still matches the generated unique branch.
2. Commit the reusable tool change separately from generated report artifacts when both exist.
3. Include the required trailer in every commit:

   ```text
   Co-authored-by: Copilot App <223556219+Copilot@users.noreply.github.com>
   ```

4. Push only with an explicit refspec to the authenticated user's fork:

   ```text
   git push <fork-remote> HEAD:refs/heads/<report-branch>
   ```

5. Create no pull request by default.
6. Verify the remote branch SHA equals the local commit and that upstream/protected branch heads
   are unchanged.
7. Report the source SHA, branch, commits, aggregate README and manifest URLs, totals, coverage
   limitations, exact validation commands/results, and any tool changes required to produce the
   report.

[reference-report]: https://github.com/markcowl/azure-rest-api-specs/blob/arm-resource-data-all-specs/documentation/typespec-arm-resource-data/Report_20261106/README.md
