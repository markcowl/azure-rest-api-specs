# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47265:d593090fa0b0eb26fc0189f2a9ee5d99f7b6453e`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47265 — Microsoft.HorizonDB API version 2026-10-01-preview- #46525](https://github.com/Azure/azure-rest-api-specs/pull/47265)
- **Author:** nasc17
- **State:** open
- **Base:** `main` at `d0ceb0c4ef92615139f3e9c1c77c509c5e17d122`
- **Head:** `nasc/release-Microsoft.HorizonDb-2026-10-01-preview` at `d593090fa0b0eb26fc0189f2a9ee5d99f7b6453e`
- **Changed TypeSpec files:** `specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/capabilities.tsp`, `specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/change-data-capture.tsp`, `specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/client.tsp`, `specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/endpoints.tsp`

## Not qualified

- `run-association-unverified`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-2fe5a8a099a2fe20` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-2fe5a8a099a2fe20

- **Affected PRs:** #47265
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
