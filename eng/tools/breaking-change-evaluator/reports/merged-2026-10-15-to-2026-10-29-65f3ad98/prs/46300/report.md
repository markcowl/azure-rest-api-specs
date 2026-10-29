# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-46300:87cc92da24cd9010599da9911198fc9bd6d3ee01`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46300 — Add Microsoft.Cdn 2026-09-01-preview API version](https://github.com/Azure/azure-rest-api-specs/pull/46300)
- **Author:** HandsomeJay
- **State:** closed (merged) at 2026-10-21T04:58:31Z
- **Base:** `main` at `ae348cc71f54a61f5d17472052cfef279a23db6b`
- **Head:** `release-microsoft-cdn-2026-09-01-preview` at `87cc92da24cd9010599da9911198fc9bd6d3ee01`
- **Changed TypeSpec files:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn/AuthPolicy.tsp`, `specification/cdn/resource-manager/Microsoft.Cdn/Cdn/main.tsp`, `specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp`

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
| — | Qualification | `invalid-oad-output` | [workflow 39031949947](https://github.com/Azure/azure-rest-api-specs/actions/runs/39031949947) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-cec3bdddaeee0def](#issue-evidence-gap-cec3bdddaeee0def). | [details](#qualification-error-1) |

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
| <a id="issue-evidence-gap-cec3bdddaeee0def"></a>`issue-evidence-gap-cec3bdddaeee0def` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:invalid-oad-output` — invalid-oad-output<br>`qualification:evidence-error-0` — Job summary occurrence counts are lower than the complete OAD log findings |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `invalid-oad-output`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/46300)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/39031949947)
