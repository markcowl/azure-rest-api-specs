# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47153:09e2fb65c3218e6a3f824573db2def64c5def83d`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47153 — setting the LRO response's FinalResult  and using clientName to fix naming issues](http<local-path>)
- **Author:** iwrinshow
- **State:** closed (merged) at 2026-10-14T17:45:38Z
- **Base:** `main` at `88e2199d770d74f3061a162824185fd6894cb7d7`
- **Head:** `fixesforsdk` at `09e2fb65c3218e6a3f824573db2def64c5def83d`
- **Changed TypeSpec files:** `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup/client.tsp`, `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup/models.tsp`, `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup/routes.tsp`

## Not qualified

- `run-association-unverified`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-8f5ba959307d028e` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-8f5ba959307d028e

- **Affected PRs:** #47153
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
