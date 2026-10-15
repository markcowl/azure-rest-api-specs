# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-46832:cf9dfe57515ddfcc0e0d077c5a37663a8cbbe1f6`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46832 — Add 2026-09-03-preview API version for Azure Monitor Workspaces](https://github.com/Azure/azure-rest-api-specs/pull/46832)
- **Author:** GokulPrasad-Work
- **State:** closed (merged) at 2026-10-09T22:07:17Z
- **Base:** `main` at `0b9b413d97fceef4c1ee276e4156269fc5ea5d33`
- **Head:** `gokulpk/amw-2026-09-03-preview` at `cf9dfe57515ddfcc0e0d077c5a37663a8cbbe1f6`
- **Changed TypeSpec files:** `specification/monitoringservice/resource-manager/Microsoft.Monitor/Accounts/main.tsp`, `specification/monitoringservice/resource-manager/Microsoft.Monitor/Accounts/typespec/metricConfigurations/metricConfigurations.tsp`, `specification/monitoringservice/resource-manager/Microsoft.Monitor/Accounts/typespec/metricConfigurations/models.tsp`, `specification/monitoringservice/resource-manager/Microsoft.Monitor/Accounts/typespec/metricsContainers/models.tsp`, `specification/monitoringservice/resource-manager/Microsoft.Monitor/Accounts/typespec/models.tsp`, `specification/monitoringservice/resource-manager/Microsoft.Monitor/Accounts/typespec/service.tsp`, `specification/monitoringservice/resource-manager/Microsoft.Monitor/Accounts/typespec/traceAssociations/models.tsp`, `specification/monitoringservice/resource-manager/Microsoft.Monitor/Accounts/typespec/traceAssociations/traceAssociations.tsp`, `specification/monitoringservice/resource-manager/Microsoft.Monitor/Accounts/typespec/traceContainers/models.tsp`, `specification/monitoringservice/resource-manager/Microsoft.Monitor/Accounts/typespec/traceContainers/traceContainers.tsp`

## Not qualified

- `run-association-unverified`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-bd676b26c94c34a7` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-bd676b26c94c34a7

- **Affected PRs:** #46832
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
