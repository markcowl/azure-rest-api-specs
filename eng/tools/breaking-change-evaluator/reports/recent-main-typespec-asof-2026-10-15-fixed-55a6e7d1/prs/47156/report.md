# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47156:05444c004c1e4a01454438333c9410b975374e18`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47156 — [Microsoft.ApiManagement] AI Gateway 2026-10-01-preview: child resources](https://github.com/Azure/azure-rest-api-specs/pull/47156)
- **Author:** azaslonov
- **State:** open
- **Base:** `main` at `e88935d7e9fe779914a02ef295f22af5565422da`
- **Head:** `alzaslon/aigateway-2026-10-preview` at `05444c004c1e4a01454438333c9410b975374e18`
- **Changed TypeSpec files:** `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayAlias.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayApiKey.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayCommon.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayModel.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayModelProvider.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayOperations.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayResource.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayResponses.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayTelemetryExporter.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayToolServer.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayWorkspace.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/main.tsp`

## Not qualified

- `run-association-unverified`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-297b5c6e306463d1` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-297b5c6e306463d1

- **Affected PRs:** #47156
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
