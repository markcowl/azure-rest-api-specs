# Breaking-change evaluator

**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47118 — [Network] Fix Java VMSS public IP API version selection](https://github.com/Azure/azure-rest-api-specs/pull/47118)
- **Author:** weidongxu-microsoft
- **State:** closed (merged) at 2026-10-08T05:43:48Z
- **Base:** `main` at `be97609d55160e8d06e2fcbba9ddefbf2ee89bf8`
- **Head:** `fix/network-java-vmss-public-ip-api-version` at `9bf4c61c8f1c7107798415cea38dea61979e950d`
- **Changed TypeSpec files:** `specification/network/resource-manager/Microsoft.Network/Network/client.tsp`

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37731634205) (no detector timing emitted) |
| B | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37731634253) (no detector timing emitted) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/network/resource-manager/Microsoft.Network/Network` | Phase A (`same-version`) | Analysis failed: Failed to compile the base revision (be97609d55160e8d06e2fcbba9ddefbf2ee89bf8): 1 error(s) found:
  error file-not-found: File <temp>/typespec-breaking-change-base-0GTtq6/specification/network/resource-manager/Microsoft.Network/Network/main.tsp not found.
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/5c965f57f5360abe-phase-a.md) |
| `specification/network/resource-manager/Microsoft.Network/Network` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (be97609d55160e8d06e2fcbba9ddefbf2ee89bf8): 1 error(s) found:
  error file-not-found: File <temp>/typespec-breaking-change-base-ikzLzV/specification/network/resource-manager/Microsoft.Network/Network/main.tsp not found.
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/5c965f57f5360abe-phase-b.md) |

## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

Both detectors reported zero non-error findings.

## Reproduce

**Shell:** powershell

### Check out the evaluator

```powershell
git clone 'https://github.com/markcowl/azure-rest-api-specs.git' evaluator
git -C evaluator checkout '0d458e940caf56cd5069ec16389524d2186c786f'
corepack pnpm --dir evaluator install --frozen-lockfile
```

### Prepare the immutable analyzer

```powershell
$prepared = node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js prepare --typespec-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0 | ConvertFrom-Json
if ($prepared.artifactDigest -ne '0ae9893ccdc9016ab4e0916f3f34f57959f0ce0eb4e445cfe91a04597eaa93d2') { throw 'Prepared analyzer digest does not match the report' }
```

### Check out the evaluated target

```powershell
git clone --filter=blob:none --no-checkout 'https://github.com/Azure/azure-rest-api-specs.git' target
git -C target fetch --no-tags origin be97609d55160e8d06e2fcbba9ddefbf2ee89bf8 9bf4c61c8f1c7107798415cea38dea61979e950d
git -C target checkout --detach 9bf4c61c8f1c7107798415cea38dea61979e950d
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47118' --tool-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/network/resource-manager/Microsoft.Network/Network

```powershell
Push-Location target
node $prepared.executable 'specification/network/resource-manager/Microsoft.Network/Network' --base-ref be97609d55160e8d06e2fcbba9ddefbf2ee89bf8 --phase same-version --json-output '../specification-network-resource-manager-Microsoft.Network-Network-phase-a.json' --markdown-output '../specification-network-resource-manager-Microsoft.Network-Network-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/network/resource-manager/Microsoft.Network/Network' --base-ref be97609d55160e8d06e2fcbba9ddefbf2ee89bf8 --json-output '../specification-network-resource-manager-Microsoft.Network-Network-phase-b-evidence.json' --markdown-output '../specification-network-resource-manager-Microsoft.Network-Network-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/network/resource-manager/Microsoft.Network/Network: Analysis failed: Failed to compile the base revision (be97609d55160e8d06e2fcbba9ddefbf2ee89bf8): 1 error(s) found:
  error file-not-found: File <temp>/typespec-breaking-change-base-0GTtq6/specification/network/resource-manager/Microsoft.Network/Network/main.tsp not found.
; Analysis failed: Failed to compile the base revision (be97609d55160e8d06e2fcbba9ddefbf2ee89bf8): 1 error(s) found:
  error file-not-found: File <temp>/typespec-breaking-change-base-ikzLzV/specification/network/resource-manager/Microsoft.Network/Network/main.tsp not found.

