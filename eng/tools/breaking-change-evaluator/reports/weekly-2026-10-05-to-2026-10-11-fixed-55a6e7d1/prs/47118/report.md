# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-47118:9bf4c61c8f1c7107798415cea38dea61979e950d`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
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
  error file-not-found: File C:<local-path>
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/5c965f57f5360abe-phase-a.md) |
| `specification/network/resource-manager/Microsoft.Network/Network` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (be97609d55160e8d06e2fcbba9ddefbf2ee89bf8): 1 error(s) found:
  error file-not-found: File C:<local-path>
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/5c965f57f5360abe-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-compile-runtime-failure-8dcd82510a15a05c` | A, B | `compile-runtime-failure` | execution-failure | high | generated | 0 |

### issue-compile-runtime-failure-8dcd82510a15a05c

- **Affected PRs:** #47118
- **Phases:** A, B
- **Finding IDs:** none
- **Category:** `compile-runtime-failure`
- **Conclusion:** execution-failure
- **Confidence:** high
- **Rationale:** One or more evaluator, compile, or analyzer executions failed.
- **Aggregate impact:** Preserves a partial or failed outcome instead of success-shaped metrics.
- **Suggested fix:** Resolve the recorded execution error and rerun the same immutable input.
- **Status:** generated
- **Evidence:**
  - `execution:execution-error-0` — specification/network/resource-manager/Microsoft.Network/Network: Analysis failed: Failed to compile the base revision (be97609d55160e8d06e2fcbba9ddefbf2ee89bf8): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (be97609d55160e8d06e2fcbba9ddefbf2ee89bf8): 1 error(s) found:
  error file-not-found: File C:<local-path>

  - `execution:execution-error-1` — Analysis failed: Failed to compile the base revision (be97609d55160e8d06e2fcbba9ddefbf2ee89bf8): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (be97609d55160e8d06e2fcbba9ddefbf2ee89bf8): 1 error(s) found:
  error file-not-found: File C:<local-path>


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
git -C evaluator checkout '42434df7da42a759156b2dac2beef5e3625ccf3b'
corepack pnpm --dir evaluator install --frozen-lockfile
```

### Prepare the immutable analyzer

```powershell
$prepared = node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js prepare --typespec-revision 55a6e7d122e36ab4120958211c41499d3bd79177 | ConvertFrom-Json
if ($prepared.artifactDigest -ne 'cdab5e43f1c9d9aed5d2a3ff9790964c07c202d40a6b320beb539fa1c5980820') { throw 'Prepared analyzer digest does not match the report' }
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
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47118' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
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
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (be97609d55160e8d06e2fcbba9ddefbf2ee89bf8): 1 error(s) found:
  error file-not-found: File C:<local-path>

