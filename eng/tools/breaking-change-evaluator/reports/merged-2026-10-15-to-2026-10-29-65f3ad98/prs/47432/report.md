# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47432:14e7e47b97f7c6033ed89f2500bbad1e89bb8a95`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47432 — Management API - client tsp fix up for Microsoft.DurableTask](https://github.com/Azure/azure-rest-api-specs/pull/47432)
- **Author:** berndverst
- **State:** closed (merged) at 2026-10-20T01:53:36Z
- **Base:** `main` at `c783b6583b52feb7aa25fb192c30efb8adc4f29b`
- **Head:** `durabletask-dotnet-review-fixes` at `14e7e47b97f7c6033ed89f2500bbad1e89bb8a95`
- **Changed TypeSpec files:** `specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask/client.tsp`

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
| A | [Swagger Breaking Change run 39340000957](https://github.com/Azure/azure-rest-api-specs/actions/runs/39340000957) | `same-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 39340000904](https://github.com/Azure/azure-rest-api-specs/actions/runs/39340000904) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B | Breaking Change (Cross-Version) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

<a id="finding-review"></a>
## Finding review

Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.

<a id="finding-review-correlations"></a>
### Correlations

None.

<a id="finding-review-partial"></a>
### Partial correlations

None.

<a id="finding-review-oad-only"></a>
### OAD-only findings

None.

<a id="finding-review-typespec-only"></a>
### TypeSpec-only findings

None.

<a id="finding-review-ambiguous"></a>
### Ambiguous findings

None.

<a id="finding-review-errors"></a>
### Evidence and execution failures

None.

<a id="finding-review-intentional"></a>
### Intentional Swagger-only gaps

None.

<a id="finding-review-informational"></a>
### Informational OAD records

None.

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 3880 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39340000957) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/7c23914bec5d8d00-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 3440 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39340000904) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/7c23914bec5d8d00-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask` | Phase A (`same-version`) | `2024-10-01-preview` → `2024-10-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/7c23914bec5d8d00-phase-a.md) |
| `specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask` | Phase A (`same-version`) | `2025-04-01-preview` → `2025-04-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/7c23914bec5d8d00-phase-a.md) |
| `specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask` | Phase A (`same-version`) | `2025-11-01` → `2025-11-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/7c23914bec5d8d00-phase-a.md) |
| `specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask` | Phase A (`same-version`) | `2026-02-01` → `2026-02-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/7c23914bec5d8d00-phase-a.md) |
| `specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask` | Phase A (`same-version`) | `2026-05-01-preview` → `2026-05-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/7c23914bec5d8d00-phase-a.md) |
| `specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask` | Phase A (`same-version`) | `2026-07-01-preview` → `2026-07-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/7c23914bec5d8d00-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-concordant-zero-00d0a4ab55f7cc87"></a>`issue-concordant-zero-00d0a4ab55f7cc87` | 0 | B | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase B. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-B` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |
| <a id="issue-concordant-zero-734d966820a24f63"></a>`issue-concordant-zero-734d966820a24f63` | 0 | A | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase A. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-A` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |

## Finding details

No findings or evidence failures were reported.

## Reproduce

**Shell:** powershell

### Check out the evaluator

```powershell
git clone 'https://github.com/markcowl/azure-rest-api-specs.git' evaluator
git -C evaluator checkout 'f37db08ada6edd33d546129d99410fcce79aeb5a'
corepack pnpm --dir evaluator install --frozen-lockfile
```

### Prepare the immutable analyzer

```powershell
$prepared = node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js prepare --typespec-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a | ConvertFrom-Json
if ($prepared.artifactDigest -ne '95835342e0e018bc513e3f639a2b36ec641918b5db3084bdb380fce3bd8f6cc5') { throw 'Prepared analyzer digest does not match the report' }
```

### Check out the evaluated target

```powershell
git clone --filter=blob:none --no-checkout 'https://github.com/Azure/azure-rest-api-specs.git' target
git -C target fetch --no-tags origin c783b6583b52feb7aa25fb192c30efb8adc4f29b 14e7e47b97f7c6033ed89f2500bbad1e89bb8a95
git -C target checkout --detach 14e7e47b97f7c6033ed89f2500bbad1e89bb8a95
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47432' --tool-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask

```powershell
Push-Location target
node $prepared.executable 'specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask' --base-ref c783b6583b52feb7aa25fb192c30efb8adc4f29b --phase same-version --json-output '../specification-durabletask-resource-manager-Microsoft.DurableTask-DurableTask-phase-a.json' --markdown-output '../specification-durabletask-resource-manager-Microsoft.DurableTask-DurableTask-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask' --base-ref c783b6583b52feb7aa25fb192c30efb8adc4f29b --json-output '../specification-durabletask-resource-manager-Microsoft.DurableTask-DurableTask-phase-b-evidence.json' --markdown-output '../specification-durabletask-resource-manager-Microsoft.DurableTask-DurableTask-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
