# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-47033:c69a186259c4784138b121a68addb7204ad704f9`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47033 — Microsoft.Authorization PrivilegedAccess 2026-06-01-preview (supersedes #45970)](http<local-path>)
- **Author:** raghavpuri31
- **State:** closed (merged) at 2026-10-07T21:28:15Z
- **Base:** `main` at `1142128f76754601aac1da265c6fa5fd66380d9b`
- **Head:** `puriraghav-pim-migration-replacement` at `c69a186259c4784138b121a68addb7204ad704f9`
- **Changed TypeSpec files:** `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess/PrivilegedResourceFavorite.tsp`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess/main.tsp`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess/models.tsp`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess/routes.tsp`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess/tspconfig.yaml`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/client.tsp`

## Not qualified

- `run-association-unverified`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-020bbf1ea87727aa` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-020bbf1ea87727aa

- **Affected PRs:** #47033
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
