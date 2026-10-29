# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-46400:385657b7565a9a6af626e95d2b95329613c9cbf3`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46400 — Add spec for new api version which supports managed identity](https://github.com/Azure/azure-rest-api-specs/pull/46400)
- **Author:** svvarik
- **State:** closed (merged) at 2026-10-23T21:21:15Z
- **Base:** `main` at `ae348cc71f54a61f5d17472052cfef279a23db6b`
- **Head:** `release-autoscale-Microsoft.Insights/autoscale-preview/2025-09-01-preview` at `385657b7565a9a6af626e95d2b95329613c9cbf3`
- **Changed TypeSpec files:** `specification/monitor/resource-manager/Microsoft.Insights/Insights/AutoScaleApi/AutoscaleSettingResource.tsp`, `specification/monitor/resource-manager/Microsoft.Insights/Insights/AutoScaleApi/main.tsp`, `specification/monitor/resource-manager/Microsoft.Insights/Insights/AutoScaleApi/models.tsp`

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
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-3f92570d88ee0de7](#issue-evidence-gap-3f92570d88ee0de7). | [details](#qualification-error-1) |

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
| <a id="issue-evidence-gap-3f92570d88ee0de7"></a>`issue-evidence-gap-3f92570d88ee0de7` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:run-association-unverified` — run-association-unverified |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/46400)
- **Workflow evidence:** unavailable
