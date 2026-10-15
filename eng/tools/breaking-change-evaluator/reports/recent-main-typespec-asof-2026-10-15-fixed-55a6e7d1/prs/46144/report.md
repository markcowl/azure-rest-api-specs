# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-46144:3ff0792fed5baf92a81a37d2f998768773e32647`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46144 — Adding API Version 2026-11-01 for Site Recovery](http<local-path>)
- **Author:** sisunkar
- **State:** open
- **Base:** `main` at `2335fe5db98171e7a78d08e712920b1869c536ce`
- **Head:** `users/sisunkar/siterecovery-2026-10-01` at `3ff0792fed5baf92a81a37d2f998768773e32647`
- **Changed TypeSpec files:** `specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/RecoveryServices/main.tsp`

## Not qualified

- `run-association-unverified`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-cf8c62c1a5087f3c` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-cf8c62c1a5087f3c

- **Affected PRs:** #46144
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
