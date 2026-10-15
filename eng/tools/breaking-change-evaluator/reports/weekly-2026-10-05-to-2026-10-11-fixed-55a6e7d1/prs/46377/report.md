# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-46377:493f5b4a84894a9d47067f8fa46eb0d96faec2ad`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46377 — Dev/hbhansali/resiliencemgmt ga 2026 10 01](https://github.com/Azure/azure-rest-api-specs/pull/46377)
- **Author:** harshb-15
- **State:** closed (merged) at 2026-10-05T05:51:23Z
- **Base:** `main` at `6a1a4ddcb4281de3a1f7c966794f2516628cad52`
- **Head:** `dev/hbhansali/resiliencemgmt-ga-2026-10-01` at `493f5b4a84894a9d47067f8fa46eb0d96faec2ad`
- **Changed TypeSpec files:** `specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement/goal.tsp`, `specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement/main.tsp`, `specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement/models/drill/drillResource.models.tsp`, `specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement/models/drill/enums.tsp`, `specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement/models/goals/enum.tsp`, `specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement/models/goals/goalAssignment.tsp`, `specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement/models/goals/goalResource.tsp`

## Not qualified

- `run-association-unverified`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-9934cb8072ae9b6e` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-9934cb8072ae9b6e

- **Affected PRs:** #46377
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
