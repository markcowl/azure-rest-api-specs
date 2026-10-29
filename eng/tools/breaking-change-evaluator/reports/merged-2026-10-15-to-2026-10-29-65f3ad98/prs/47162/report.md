# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47162:2f7eb98b1d5ecb45dec8d568db18fa0bfdeb800f`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47162 — Adding SystemConfiguration API specs to ALDO EdgeOperator RP](https://github.com/Azure/azure-rest-api-specs/pull/47162)
- **Author:** kleyvaortega
- **State:** closed (merged) at 2026-10-19T19:16:29Z
- **Base:** `main` at `91a08e9bdaa4370a0b50cae7ddbae209b77a6d0c`
- **Head:** `users/kleyvaortega/systemConfigurationSpecs` at `2f7eb98b1d5ecb45dec8d568db18fa0bfdeb800f`
- **Changed TypeSpec files:** `specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/SystemConfiguration/main.tsp`, `specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/SystemConfiguration/systemConfiguration.tsp`, `specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/SystemConfiguration/tspconfig.yaml`

## Not qualified

- `run-association-unverified`

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
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-8f9d35193dc7f6b4](#issue-evidence-gap-8f9d35193dc7f6b4). | [details](#qualification-error-1) |

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
| <a id="issue-evidence-gap-8f9d35193dc7f6b4"></a>`issue-evidence-gap-8f9d35193dc7f6b4` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:run-association-unverified` — run-association-unverified |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47162)
- **Workflow evidence:** unavailable
