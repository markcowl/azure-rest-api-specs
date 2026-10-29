# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-45468:75a289049e60db2733dc21cf0718d6fd481dc1ce`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#45468 — Add DPP Cross-Tenant Restore (CTR) feature - API version 2026-08-31-preview](https://github.com/Azure/azure-rest-api-specs/pull/45468)
- **Author:** zubairabid
- **State:** closed (merged) at 2026-10-15T16:52:21Z
- **Base:** `main` at `f9e4d576ed3f68246d1b35d699bc9387a34589c6`
- **Head:** `users/zubair/ctr-dpp` at `75a289049e60db2733dc21cf0718d6fd481dc1ce`
- **Changed TypeSpec files:** `specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection/CrossTenantVaultMappingResource.tsp`, `specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection/client.tsp`, `specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection/main.tsp`, `specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection/models.tsp`

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
| — | Qualification | `invalid-oad-output` | [workflow 37431178135](https://github.com/Azure/azure-rest-api-specs/actions/runs/37431178135) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-43973ad59491d227](#issue-evidence-gap-43973ad59491d227). | [details](#qualification-error-1) |

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
| <a id="issue-evidence-gap-43973ad59491d227"></a>`issue-evidence-gap-43973ad59491d227` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:invalid-oad-output` — invalid-oad-output<br>`qualification:evidence-error-0` — Job summary occurrence counts are lower than the complete OAD log findings |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `invalid-oad-output`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/45468)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/37431178135)
