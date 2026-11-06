# TypeSpec ARM resource data

Generates deterministic ARM resource and operation reports for Git-tracked resource-manager
TypeSpec projects. The tool compiles `main.tsp` directly with the repository's installed TypeSpec
compiler, disables configured emitters, and calls `resolveArmResources` from the installed ARM
library.

Project discovery is dynamic on every run. It queries Git for tracked
`specification/**/tspconfig.yaml` files, accepts resource-manager roots at any nesting depth, and
classifies each root from its current `main.tsp` and `client.tsp` entrypoints. There is no static
project inventory to update when projects are added, removed, or moved.

```console
node eng/tools/typespec-arm-resource-data/cmd/typespec-arm-resource-data.js --service network --resume
node eng/tools/typespec-arm-resource-data/cmd/typespec-arm-resource-data.js --project Microsoft.Compute/Compute/Compute --concurrency 2
node eng/tools/typespec-arm-resource-data/cmd/typespec-arm-resource-data.js --report-directory Report_20261105 --source-ref upstream/main
```

Each selected project receives a `resource-data/` directory. Successful projects contain
`resources.csv`, `operations.csv`, and `status.json`. Failed projects contain `status.json` and
`errors.md`. Repository-wide `manifest.json` and `README.md` files are written under
`documentation/typespec-arm-resource-data/`.

Filters may be repeated. `--timeout` is in seconds. `--resume` validates the source commit, tool
version, lockfile hash, tracked project input hash, and output hashes before reusing a result.
All selected projects are attempted before the command returns a nonzero status for failures.
Targeted reruns merge compatible, unselected records from the existing manifest.
Use `--source-ref` when the report branch is ahead of the source revision so links and metadata are
pinned to that source Git ref instead of `HEAD`.

Use `--report-directory` to create an isolated snapshot. The value must be a single portable
directory name. For example, `Report_20261105` writes project reports beneath each project's
`Report_20261105/` directory and aggregate files beneath
`documentation/typespec-arm-resource-data/Report_20261105/`. Omitting the option preserves the
existing `resource-data/` project directories and top-level aggregate paths.

Resource reports flag two independent issue categories. Existing `nameClash` columns continue to
distinguish case-only ARM identities from genuine same-name clashes. Status files, the manifest,
and the README group every same-name resource instance with deterministic direct source links. The
`duplicateResourceError` columns identify resolved resources with different resource names that
normalize to the same case-insensitive ARM instance path, including equivalent parameter segments.
The manifest and README summarize affected records, groups, and projects.
Each manifest/status group retains its normalized instance path and deterministically ordered
resource names, types, and direct source URLs. The README links every conflicting resource to its
definition, or to an associated read/create operation when the definition is unavailable.
