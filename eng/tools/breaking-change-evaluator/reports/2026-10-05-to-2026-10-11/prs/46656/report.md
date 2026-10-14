# Breaking-change evaluator

**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46656 — [HybridConnectivity] Fix .NET client names for GCP connector 2027-01-01](https://github.com/Azure/azure-rest-api-specs/pull/46656)
- **Author:** alexmahonic
- **State:** closed (merged) at 2026-10-07T21:09:32Z
- **Base:** `main` at `43cb1231045e1fd7d74e790f8fa2f17658e4c95f`
- **Head:** `alexmahonic-hybridconnectivity-ga-release-plan` at `eb99a478240f510098ea83ebf78fecbe1241f891`
- **Changed TypeSpec files:** `specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/HybridConnectivity/client.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | 0 |
| Informational OAD records | 0 |
| TypeSpec findings | 0 |
| Exact | 0 |
| Probable (review required) | 0 |
| Intentional Swagger-only | 0 |
| Missed equivalent | 0 |
| TypeSpec-only | 0 |
| Ambiguous | 0 |

**Exact OAD coverage:** N/A
**Review-inclusive OAD coverage:** N/A

### By phase

| Phase | Independent OAD execution | TypeSpec mode | Outcome | Comparable OAD | Informational OAD | TypeSpec findings | Exact | Probable | Intentional gap | Missed equivalent | TypeSpec-only | Exact OAD coverage | Review-inclusive OAD coverage |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | [Swagger Breaking Change run 36395423282](https://github.com/Azure/azure-rest-api-specs/actions/runs/36395423282) | `same-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 36395423411](https://github.com/Azure/azure-rest-api-specs/actions/runs/36395423411) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B | Breaking Change (Cross-Version) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 2720 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36395423282) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/40109812c9d86495-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 4388 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36395423411) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/40109812c9d86495-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/HybridConnectivity` | Phase A (`same-version`) | `2024-12-01` → `2024-12-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/40109812c9d86495-phase-a.md) |
| `specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/HybridConnectivity` | Phase A (`same-version`) | `2027-01-01` → `2027-01-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/40109812c9d86495-phase-a.md) |

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
git -C target fetch --no-tags origin 43cb1231045e1fd7d74e790f8fa2f17658e4c95f eb99a478240f510098ea83ebf78fecbe1241f891
git -C target checkout --detach eb99a478240f510098ea83ebf78fecbe1241f891
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/46656' --tool-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/HybridConnectivity

```powershell
Push-Location target
node $prepared.executable 'specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/HybridConnectivity' --base-ref 43cb1231045e1fd7d74e790f8fa2f17658e4c95f --phase same-version --json-output '../specification-hybridconnectivity-resource-manager-Microsoft.HybridConnectivity-HybridConnectivity-phase-a.json' --markdown-output '../specification-hybridconnectivity-resource-manager-Microsoft.HybridConnectivity-HybridConnectivity-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/HybridConnectivity' --base-ref 43cb1231045e1fd7d74e790f8fa2f17658e4c95f --json-output '../specification-hybridconnectivity-resource-manager-Microsoft.HybridConnectivity-HybridConnectivity-phase-b-evidence.json' --markdown-output '../specification-hybridconnectivity-resource-manager-Microsoft.HybridConnectivity-HybridConnectivity-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
