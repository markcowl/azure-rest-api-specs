# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Report ID:** `merged-2026-10-15-to-2026-10-29-7824998e:pr-47402:b4d7908d3b16e6cd0e663ddcd04fac462fe10d4b`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47402 — [Azure Data Transfer] Set Python client name](https://github.com/Azure/azure-rest-api-specs/pull/47402)
- **Author:** ChenxiJiang333
- **State:** closed (merged) at 2026-10-19T03:13:00Z
- **Base:** `main` at `c8190fb3d1d89e788cb5b36edbc386588521153c`
- **Head:** `chenxi/add-datatransfer-python-client-name` at `b4d7908d3b16e6cd0e663ddcd04fac462fe10d4b`
- **Changed TypeSpec files:** `specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/client.tsp`

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
| A | [Swagger Breaking Change run 39190248082](https://github.com/Azure/azure-rest-api-specs/actions/runs/39190248082) | `same-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 39190247984](https://github.com/Azure/azure-rest-api-specs/actions/runs/39190247984) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

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
| A | Unavailable | 6341 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39190248082) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/9c89d286bfc4f504-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 5941 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39190247984) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/9c89d286bfc4f504-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer` | Phase A (`same-version`) | `2025-04-11-preview` → `2025-04-11-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/9c89d286bfc4f504-phase-a.md) |
| `specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer` | Phase A (`same-version`) | `2025-05-21` → `2025-05-21` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/9c89d286bfc4f504-phase-a.md) |
| `specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer` | Phase A (`same-version`) | `2025-05-30-preview` → `2025-05-30-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/9c89d286bfc4f504-phase-a.md) |
| `specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer` | Phase A (`same-version`) | `2025-10-10-preview` → `2025-10-10-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/9c89d286bfc4f504-phase-a.md) |
| `specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer` | Phase A (`same-version`) | `2026-02-06-preview` → `2026-02-06-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/9c89d286bfc4f504-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-concordant-zero-605983d2ca90b7ce"></a>`issue-concordant-zero-605983d2ca90b7ce` | 0 | A | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase A. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-A` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |
| <a id="issue-concordant-zero-b3e3ef453640068b"></a>`issue-concordant-zero-b3e3ef453640068b` | 0 | B | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase B. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-B` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |

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
git -C target fetch --no-tags origin c8190fb3d1d89e788cb5b36edbc386588521153c b4d7908d3b16e6cd0e663ddcd04fac462fe10d4b
git -C target checkout --detach b4d7908d3b16e6cd0e663ddcd04fac462fe10d4b
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47402' --tool-revision 7824998e1b7e926ce3b09b39fc376742b726a028 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer

```powershell
Push-Location target
node $prepared.executable 'specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer' --base-ref c8190fb3d1d89e788cb5b36edbc386588521153c --phase same-version --json-output '../specification-azuredatatransfer-resource-manager-Microsoft.AzureDataTransfer-AzureDataTransfer-phase-a.json' --markdown-output '../specification-azuredatatransfer-resource-manager-Microsoft.AzureDataTransfer-AzureDataTransfer-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer' --base-ref c8190fb3d1d89e788cb5b36edbc386588521153c --json-output '../specification-azuredatatransfer-resource-manager-Microsoft.AzureDataTransfer-AzureDataTransfer-phase-b-evidence.json' --markdown-output '../specification-azuredatatransfer-resource-manager-Microsoft.AzureDataTransfer-AzureDataTransfer-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
