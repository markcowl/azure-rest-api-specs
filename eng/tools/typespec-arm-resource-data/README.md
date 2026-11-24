# TypeSpec ARM resource data

Generates deterministic ARM resource and operation reports for Git-tracked resource-manager
TypeSpec projects. The tool compiles `main.tsp` directly with the repository's installed TypeSpec
compiler, disables configured emitters, and calls `resolveArmResources` from the installed ARM
library. The analysis mode explicitly enables
`@azure-tools/typespec-azure-resource-manager/no-resource-name-conflict`, captures only that
rule's diagnostics as findings, and correlates them with resolved resources and operations.

Project discovery is dynamic on every run. It queries Git for tracked
`specification/**/tspconfig.yaml` files, accepts resource-manager roots at any nesting depth, and
classifies each root from its current `main.tsp` and `client.tsp` entrypoints. There is no static
project inventory to update when projects are added, removed, or moved.

```console
node eng/tools/typespec-arm-resource-data/cmd/typespec-arm-resource-data.js --service network --resume
node eng/tools/typespec-arm-resource-data/cmd/typespec-arm-resource-data.js --project Microsoft.Compute/Compute/Compute --concurrency 2
node eng/tools/typespec-arm-resource-data/cmd/typespec-arm-resource-data.js --report-directory Report_20261105 --source-ref upstream/main --tool-source-commit HEAD
node eng/tools/typespec-arm-resource-data/cmd/typespec-arm-resource-data.js --report-directory Report_20261106 --source-ref upstream/main --arm-library-package-url https://pkg.pr.new/example.tgz --arm-library-package-version 0.74.0-pr.123.456 --arm-library-package-integrity sha512-AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA== --arm-library-package-sha256 0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef --arm-library-pr 123 --arm-library-pr-head-sha 0123456789abcdef0123456789abcdef01234567
```

Each selected project receives a `resource-data/` directory. Successful projects contain
`resources.csv`, `operations.csv`, `diagnostics.json`, and `status.json`. Failed projects contain
`status.json` and `errors.md`. Repository-wide `manifest.json` and `README.md` files are written under
`documentation/typespec-arm-resource-data/`.

Filters may be repeated. `--timeout` is in seconds; a timeout is retried once at twice the selected
limit. `--resume` validates the source commit, source and report lock hashes, tool version and source
commit, tracked project input hash, and output hashes before reusing a result.
All selected projects are attempted before the command returns a nonzero status for failures.
Targeted reruns merge compatible, unselected records from the existing manifest.
Use `--source-ref` when the report branch is ahead of the source revision so links and metadata are
pinned to that source Git ref instead of `HEAD`.
Use `--tool-source-commit` to record the exact commit containing the report implementation.

When overriding `@azure-tools/typespec-azure-resource-manager`, provide all
`--arm-library-package-*` and `--arm-library-pr*` options together. The manifest and project status
record the immutable package URL, version, integrity, SHA-256, PR number, and exact PR head commit;
`--resume` invalidates results when any provenance changes. Omitting these options preserves the
default installed-package behavior and metadata.

Use `--report-directory` to create an isolated snapshot. The value must be a single portable
directory name. For example, `Report_20261105` writes project reports beneath each project's
`Report_20261105/` directory and aggregate files beneath
`documentation/typespec-arm-resource-data/Report_20261105/`. Omitting the option preserves the
existing `resource-data/` project directories and top-level aggregate paths.

`diagnostics.json` contains the exact rule code, severity, message, immutable source location,
parsed logical resource name and conflicting paths, correlation state, all same-name resource
records, and their authored operations. Findings are never inferred from the CSV data. The
manifest and README preserve unmatched diagnostics, keep every coverage category separate, and
include non-suppressive remediation guidance without modifying service sources.
