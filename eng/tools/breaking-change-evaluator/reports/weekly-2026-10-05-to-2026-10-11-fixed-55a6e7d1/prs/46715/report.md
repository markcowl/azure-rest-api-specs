# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-46715:fb9c258f0c1ae9055592cfaf5ee356ee3475e1a3`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46715 — Add stable EdgeActions 2026-10-01 API](http<local-path>)
- **Author:** kestry
- **State:** closed (merged) at 2026-10-10T14:02:46Z
- **Base:** `main` at `91a08e9bdaa4370a0b50cae7ddbae209b77a6d0c`
- **Head:** `edgeactions-stable-2026-10-minimal` at `fb9c258f0c1ae9055592cfaf5ee356ee3475e1a3`
- **Changed TypeSpec files:** `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/edgeactionsbasemodels.tsp`, `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/main.tsp`

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](http<local-path>) (no detector timing emitted) |
| B | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](http<local-path>) (no detector timing emitted) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c5f763224c81830d-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/c5f763224c81830d-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-compile-runtime-failure-21423794d8210a17` | A, B | `compile-runtime-failure` | execution-failure | high | generated | 0 |

### issue-compile-runtime-failure-21423794d8210a17

- **Affected PRs:** #46715
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
  - `execution:execution-error-0` — specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-1` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')


## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

Both detectors reported zero non-error findings.

## Reproduce

**Shell:** powershell

### Check out the evaluator

```powershell
git clone 'http<local-path>' evaluator
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
git clone --filter=blob:none --no-checkout 'http<local-path>' target
git -C target fetch --no-tags origin 91a08e9bdaa4370a0b50cae7ddbae209b77a6d0c fb9c258f0c1ae9055592cfaf5ee356ee3475e1a3
git -C target checkout --detach fb9c258f0c1ae9055592cfaf5ee356ee3475e1a3
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'http<local-path>' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions

```powershell
Push-Location target
node $prepared.executable 'specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions' --base-ref 91a08e9bdaa4370a0b50cae7ddbae209b77a6d0c --phase same-version --json-output '../specification-cdn-resource-manager-Microsoft.Cdn-EdgeActions-phase-a.json' --markdown-output '../specification-cdn-resource-manager-Microsoft.Cdn-EdgeActions-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions' --base-ref 91a08e9bdaa4370a0b50cae7ddbae209b77a6d0c --json-output '../specification-cdn-resource-manager-Microsoft.Cdn-EdgeActions-phase-b-evidence.json' --markdown-output '../specification-cdn-resource-manager-Microsoft.Cdn-EdgeActions-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

