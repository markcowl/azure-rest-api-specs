# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47307:ec4adf4c47f1937e8c30db755b7dcf14c1f44ad8`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47307 — Add CognitiveServices stable API version 2026-11-01](https://github.com/Azure/azure-rest-api-specs/pull/47307)
- **Author:** fmabroukmsft
- **State:** open
- **Base:** `main` at `a4c2a18ee4d0b1885d66a001145e56744acd9baf`
- **Head:** `swagger-agent/CogSvc-2026-11-01-typespec` at `ec4adf4c47f1937e8c30db755b7dcf14c1f44ad8`
- **Changed TypeSpec files:** `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/AdapterDeployment.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ArcDeployment.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Compute.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ComputeOperation.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ConnectionPropertiesV2BasicResource.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/CostControl.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ManagedComputeCapacity.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ManagedComputeDeployment.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ManagedComputeUsages.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/RaiBinding.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/RaiRego.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Workbench.tsp`

## Not qualified

- `evidence-incomplete`

## Finding review

Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.

### Correlations

None.

### Partial correlations

None.

### OAD-only findings

None.

### TypeSpec-only findings

None.

### Ambiguous findings

None.

### Evidence and execution failures

| Phase | Scope | Failure | Available evidence | Analysis | Details |
| --- | --- | --- | --- | --- | --- |
| — | Qualification | `evidence-incomplete` | [workflow 38655122267](https://github.com/Azure/azure-rest-api-specs/actions/runs/38655122267) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-9f302a93a706e734](#issue-evidence-gap-9f302a93a706e734). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Analysis | Suggested fix | Confidence / status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-evidence-gap-9f302a93a706e734"></a>`issue-evidence-gap-9f302a93a706e734` | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:evidence-incomplete` — evidence-incomplete<br>`qualification:evidence-error-0` — oadCompareOutput was truncated by the workflow logger; complete OAD evidence is unavailable |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `evidence-incomplete`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47307)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/38655122267)
