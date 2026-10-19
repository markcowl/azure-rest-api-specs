# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-46300:e5236cc01cd9f79493b2bef33f0df3ffb26501bd`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46300 — Add Microsoft.Cdn 2026-09-01-preview API version](https://github.com/Azure/azure-rest-api-specs/pull/46300)
- **Author:** HandsomeJay
- **State:** open
- **Base:** `main` at `fcc20ab8473a30946221a1b876c89aa9f61447b9`
- **Head:** `release-microsoft-cdn-2026-09-01-preview` at `e5236cc01cd9f79493b2bef33f0df3ffb26501bd`
- **Changed TypeSpec files:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn/AuthPolicy.tsp`, `specification/cdn/resource-manager/Microsoft.Cdn/Cdn/ErrorPolicy.tsp`, `specification/cdn/resource-manager/Microsoft.Cdn/Cdn/back-compatible.tsp`

## Not qualified

- `invalid-oad-output`

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
| — | Qualification | `invalid-oad-output` | [workflow 38655294175](https://github.com/Azure/azure-rest-api-specs/actions/runs/38655294175) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-e3c25446ee2adc0a](#issue-evidence-gap-e3c25446ee2adc0a). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Analysis | Suggested fix | Confidence / status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-evidence-gap-e3c25446ee2adc0a"></a>`issue-evidence-gap-e3c25446ee2adc0a` | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:invalid-oad-output` — invalid-oad-output<br>`qualification:evidence-error-0` — Job summary occurrence counts are lower than the complete OAD log findings |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `invalid-oad-output`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/46300)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/38655294175)
