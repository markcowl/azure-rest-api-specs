# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Report ID:** `merged-2026-10-15-to-2026-10-29-7824998e:pr-47357:fe879dc8b7265e82f4f8dcd565d9a135307673a9`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47357 —  addressed comments](https://github.com/Azure/azure-rest-api-specs/pull/47357)
- **Author:** v-shubhamti-microsoft
- **State:** closed (merged) at 2026-10-16T11:38:43Z
- **Base:** `main` at `9465622d7495d7a59f80d1d319db08bd4f0b81ac`
- **Head:** `user/v-shubhamti/fix-issuesfordotnet-16102026` at `fe879dc8b7265e82f4f8dcd565d9a135307673a9`
- **Changed TypeSpec files:** `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/client.tsp`

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
| A | [Swagger Breaking Change run 38893417022](https://github.com/Azure/azure-rest-api-specs/actions/runs/38893417022) | `same-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 38893417085](https://github.com/Azure/azure-rest-api-specs/actions/runs/38893417085) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

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
| A | Unavailable | 9235 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38893417022) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/d542013e3b27865c-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 11163 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38893417085) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/d542013e3b27865c-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI` | Phase A (`same-version`) | `2026-02-01` → `2026-02-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d542013e3b27865c-phase-a.md) |
| `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI` | Phase A (`same-version`) | `2026-04-30` → `2026-04-30` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d542013e3b27865c-phase-a.md) |
| `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI` | Phase A (`same-version`) | `2026-10-01` → `2026-10-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d542013e3b27865c-phase-a.md) |
| `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI` | Phase A (`same-version`) | `2026-11-01-preview` → `2026-11-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d542013e3b27865c-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-concordant-zero-3f4b539e5e0fb000"></a>`issue-concordant-zero-3f4b539e5e0fb000` | 0 | B | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase B. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-B` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |
| <a id="issue-concordant-zero-f6b3ba71d76cb445"></a>`issue-concordant-zero-f6b3ba71d76cb445` | 0 | A | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase A. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-A` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |

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
$prepared = node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js prepare --typespec-revision 7824998e1b7e926ce3b09b39fc376742b726a028 | ConvertFrom-Json
if ($prepared.artifactDigest -ne 'fd27cd230327eead1921152fc701f7b9b3582ba8b15e1e5600390d6a65a5764f') { throw 'Prepared analyzer digest does not match the report' }
```

### Check out the evaluated target

```powershell
git clone --filter=blob:none --no-checkout 'https://github.com/Azure/azure-rest-api-specs.git' target
git -C target fetch --no-tags origin 9465622d7495d7a59f80d1d319db08bd4f0b81ac fe879dc8b7265e82f4f8dcd565d9a135307673a9
git -C target checkout --detach fe879dc8b7265e82f4f8dcd565d9a135307673a9
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47357' --tool-revision 7824998e1b7e926ce3b09b39fc376742b726a028 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI

```powershell
Push-Location target
node $prepared.executable 'specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI' --base-ref 9465622d7495d7a59f80d1d319db08bd4f0b81ac --phase same-version --json-output '../specification-azurestackhci-resource-manager-Microsoft.AzureStackHCI-StackHCI-phase-a.json' --markdown-output '../specification-azurestackhci-resource-manager-Microsoft.AzureStackHCI-StackHCI-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI' --base-ref 9465622d7495d7a59f80d1d319db08bd4f0b81ac --json-output '../specification-azurestackhci-resource-manager-Microsoft.AzureStackHCI-StackHCI-phase-b-evidence.json' --markdown-output '../specification-azurestackhci-resource-manager-Microsoft.AzureStackHCI-StackHCI-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
