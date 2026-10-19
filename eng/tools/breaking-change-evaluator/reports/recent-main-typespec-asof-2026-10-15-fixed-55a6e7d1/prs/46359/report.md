# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-46359:9a93dafcc3930564384118700575f2d572b95c7f`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46359 — add 2026-09-01 API version](https://github.com/Azure/azure-rest-api-specs/pull/46359)
- **Author:** vedkale
- **State:** closed (merged) at 2026-10-14T23:00:11Z
- **Base:** `main` at `ae7a5a8af9070bb0ad8270448d314e5de2c82218`
- **Head:** `main` at `9a93dafcc3930564384118700575f2d572b95c7f`
- **Changed TypeSpec files:** `specification/hybridcompute/resource-manager/Microsoft.HybridCompute/HybridCompute/VMApplication.tsp`, `specification/hybridcompute/resource-manager/Microsoft.HybridCompute/HybridCompute/main.tsp`, `specification/hybridcompute/resource-manager/Microsoft.HybridCompute/HybridCompute/models.tsp`

## Not qualified

- `run-association-unverified`

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
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-d4e6d677f749a537](#issue-evidence-gap-d4e6d677f749a537). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Analysis | Suggested fix | Confidence / status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-evidence-gap-d4e6d677f749a537"></a>`issue-evidence-gap-d4e6d677f749a537` | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:run-association-unverified` — run-association-unverified |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/46359)
- **Workflow evidence:** unavailable
