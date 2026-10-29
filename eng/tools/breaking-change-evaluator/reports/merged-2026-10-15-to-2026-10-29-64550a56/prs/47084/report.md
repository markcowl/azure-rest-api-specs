# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-64550a56`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-64550a56`
**Report ID:** `merged-2026-10-15-to-2026-10-29-64550a56:pr-47084:ff10e727430bc1694151d6f5fe54cecd7c10cb68`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47084 — [AzureStackHCI] Add StackHCIVM 2026-07-01-preview API version](https://github.com/Azure/azure-rest-api-specs/pull/47084)
- **Author:** vishal-kadam
- **State:** closed (merged) at 2026-10-15T16:26:47Z
- **Base:** `main` at `dfc14ebb8c03f7875f8c7622dabb1e900ac21e70`
- **Head:** `azurestackhci-stackhcivm-2026-07-01-preview` at `ff10e727430bc1694151d6f5fe54cecd7c10cb68`
- **Changed TypeSpec files:** `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCIVM/main.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCIVM/models.tsp`

## Not qualified

- `invalid-oad-output`

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

| Phase | Scope | Failure | Available evidence | Analysis | Details |
| --- | --- | --- | --- | --- | --- |
| — | Qualification | `invalid-oad-output` | [workflow 38415300292](https://github.com/Azure/azure-rest-api-specs/actions/runs/38415300292) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-00c5b1efb6bd66e3](#issue-evidence-gap-00c5b1efb6bd66e3). | [details](#qualification-error-1) |

<a id="finding-review-intentional"></a>
### Intentional Swagger-only gaps

None.

<a id="finding-review-informational"></a>
### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-evidence-gap-00c5b1efb6bd66e3"></a>`issue-evidence-gap-00c5b1efb6bd66e3` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:invalid-oad-output` — invalid-oad-output<br>`qualification:evidence-error-0` — Job summary claims no findings but workflow logs contain OAD findings |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `invalid-oad-output`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47084)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/38415300292)
