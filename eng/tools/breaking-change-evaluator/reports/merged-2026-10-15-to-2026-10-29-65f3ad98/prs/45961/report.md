# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-45961:cd1ed70716048912fa2b49506c666e3d86e237bc`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#45961 — Publish Advisor API Version 2026-10-01](https://github.com/Azure/azure-rest-api-specs/pull/45961)
- **Author:** abhishekraj-msft
- **State:** closed (merged) at 2026-10-20T11:16:46Z
- **Base:** `main` at `9584a076a20d33bf725cf5fe0cf2595b1cc9aab1`
- **Head:** `main` at `cd1ed70716048912fa2b49506c666e3d86e237bc`
- **Changed TypeSpec files:** `specification/advisor/resource-manager/Microsoft.Advisor/Advisor/AssessmentResult.tsp`, `specification/advisor/resource-manager/Microsoft.Advisor/Advisor/ResourceRecommendationBase.tsp`, `specification/advisor/resource-manager/Microsoft.Advisor/Advisor/back-compatible.tsp`, `specification/advisor/resource-manager/Microsoft.Advisor/Advisor/client.tsp`, `specification/advisor/resource-manager/Microsoft.Advisor/Advisor/main.tsp`, `specification/advisor/resource-manager/Microsoft.Advisor/Advisor/models.tsp`, `specification/advisor/resource-manager/Microsoft.Advisor/Advisor/routes.tsp`

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
| — | Qualification | `invalid-oad-output` | [workflow 39410838569](https://github.com/Azure/azure-rest-api-specs/actions/runs/39410838569) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-f3f9975d70953f36](#issue-evidence-gap-f3f9975d70953f36). | [details](#qualification-error-1) |

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
| <a id="issue-evidence-gap-f3f9975d70953f36"></a>`issue-evidence-gap-f3f9975d70953f36` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:invalid-oad-output` — invalid-oad-output<br>`qualification:evidence-error-0` — Job summary claims no findings but workflow logs contain OAD findings |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `invalid-oad-output`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/45961)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/39410838569)
