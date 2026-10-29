# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47557:1ba0ef01552f48496d7c1ccb850f693ea66bffc3`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47557 — Update .NET mappings for SRP 2026-09-01](https://github.com/Azure/azure-rest-api-specs/pull/47557)
- **Author:** nateprewitt
- **State:** closed (merged) at 2026-10-23T07:01:03Z
- **Base:** `main` at `a2de2d1a53d195c987a30184b2ddd378417ff44e`
- **Head:** `storage-bap-csharp-operation-name` at `1ba0ef01552f48496d7c1ccb850f693ea66bffc3`
- **Changed TypeSpec files:** `specification/storage/resource-manager/Microsoft.Storage/Storage/client.tsp`

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
| A | [Swagger Breaking Change run 39898644379](https://github.com/Azure/azure-rest-api-specs/actions/runs/39898644379) | `same-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 39898644547](https://github.com/Azure/azure-rest-api-specs/actions/runs/39898644547) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

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
| A | Unavailable | 11247 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39898644379) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 11886 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39898644547) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/34d48bf6162c6014-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2025-06-01` → `2025-06-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2025-08-01` → `2025-08-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2026-04-01` → `2026-04-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2026-06-01` → `2026-06-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2026-09-01` → `2026-09-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-concordant-zero-1cd3b486d2efc2a4"></a>`issue-concordant-zero-1cd3b486d2efc2a4` | 0 | A | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase A. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-A` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |
| <a id="issue-concordant-zero-ad1112da5addae75"></a>`issue-concordant-zero-ad1112da5addae75` | 0 | B | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase B. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-B` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |

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
git -C target fetch --no-tags origin a2de2d1a53d195c987a30184b2ddd378417ff44e 1ba0ef01552f48496d7c1ccb850f693ea66bffc3
git -C target checkout --detach 1ba0ef01552f48496d7c1ccb850f693ea66bffc3
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47557' --tool-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/storage/resource-manager/Microsoft.Storage/Storage

```powershell
Push-Location target
node $prepared.executable 'specification/storage/resource-manager/Microsoft.Storage/Storage' --base-ref a2de2d1a53d195c987a30184b2ddd378417ff44e --phase same-version --json-output '../specification-storage-resource-manager-Microsoft.Storage-Storage-phase-a.json' --markdown-output '../specification-storage-resource-manager-Microsoft.Storage-Storage-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/storage/resource-manager/Microsoft.Storage/Storage' --base-ref a2de2d1a53d195c987a30184b2ddd378417ff44e --json-output '../specification-storage-resource-manager-Microsoft.Storage-Storage-phase-b-evidence.json' --markdown-output '../specification-storage-resource-manager-Microsoft.Storage-Storage-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
