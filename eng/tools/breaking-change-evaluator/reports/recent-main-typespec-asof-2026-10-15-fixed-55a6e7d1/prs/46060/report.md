# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-46060:0782d4b5a1aa74283d601309b8cad0e45ffac653`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46060 — [App Configuration] Add `2026-09-01-preview` API version](http<local-path>)
- **Author:** austintolani
- **State:** open
- **Base:** `main` at `1142128f76754601aac1da265c6fa5fd66380d9b`
- **Head:** `app-config-2026-09-01-preview` at `0782d4b5a1aa74283d601309b8cad0e45ffac653`
- **Changed TypeSpec files:** `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration/FeatureFlag.tsp`, `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration/NetworkSecurityPerimeter.tsp`, `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration/NetworkSecurityPerimeterConfigurations.tsp`, `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration/client.tsp`, `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration/main.tsp`, `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration/models.tsp`

## Not qualified

- `run-association-unverified`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-5ec228bd91c05ab7` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-5ec228bd91c05ab7

- **Affected PRs:** #46060
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
