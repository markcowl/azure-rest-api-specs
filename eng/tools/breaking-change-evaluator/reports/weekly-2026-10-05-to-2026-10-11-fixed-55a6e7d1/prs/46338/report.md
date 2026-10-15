# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-46338:42d95f77f74271dcb8fea6fdf50390c510e91dd3`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46338 — Chipate/compute placement score](https://github.com/Azure/azure-rest-api-specs/pull/46338)
- **Author:** chintanrp
- **State:** closed (merged) at 2026-10-05T16:14:05Z
- **Base:** `main` at `c415ef063cd4c1833ecceff7f856295115d80c0d`
- **Head:** `chipate/ComputePlacementScore` at `42d95f77f74271dcb8fea6fdf50390c510e91dd3`
- **Changed TypeSpec files:** `specification/compute/resource-manager/Microsoft.Compute/Recommender/ComputeDiagnosticBase.tsp`, `specification/compute/resource-manager/Microsoft.Compute/Recommender/PlacementScoresBase.tsp`, `specification/compute/resource-manager/Microsoft.Compute/Recommender/back-compatible.tsp`, `specification/compute/resource-manager/Microsoft.Compute/Recommender/client.tsp`, `specification/compute/resource-manager/Microsoft.Compute/Recommender/main.tsp`, `specification/compute/resource-manager/Microsoft.Compute/Recommender/models.tsp`

## Not qualified

- `invalid-oad-output`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-f4ee08cfca5c1643` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-f4ee08cfca5c1643

- **Affected PRs:** #46338
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
  - `qualification:invalid-oad-output` — invalid-oad-output
  - `qualification:evidence-error-0` — Job summary occurrence counts are lower than the complete OAD log findings

## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

Both detectors reported zero non-error findings.
