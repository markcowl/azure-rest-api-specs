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

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-d4e6d677f749a537` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-d4e6d677f749a537

- **Affected PRs:** #46359
- **Phases:** A, B
- **Finding IDs:** none
- **Category:** `evidence-gap`
- **Conclusion:** insufficient-evidence
- **Confidence:** high
- **Rationale:** Required independent OAD evidence is missing, incomplete, or invalid.
- **Aggregate impact:** Excludes this report from complete-run effectiveness totals.
- **Suggested fix:** Restore immutable workflow logs and job-summary evidence, then rerun.
- **Status:** generated
- **Evidence:**
  - `qualification:run-association-unverified` — run-association-unverified

## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

Both detectors reported zero non-error findings.
