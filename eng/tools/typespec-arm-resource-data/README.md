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
```

Each selected project receives a `resource-data/` directory. Successful projects contain
`resources.csv`, `operations.csv`, and `status.json`. Failed projects contain `status.json` and
`errors.md`. Repository-wide `manifest.json` and `README.md` files are written under
`documentation/typespec-arm-resource-data/`.

Filters may be repeated. `--timeout` is in seconds. `--resume` validates the source commit, tool
version, lockfile hash, tracked project input hash, and output hashes before reusing a result.
All selected projects are attempted before the command returns a nonzero status for failures.
Targeted reruns merge compatible, unselected records from the existing manifest.
