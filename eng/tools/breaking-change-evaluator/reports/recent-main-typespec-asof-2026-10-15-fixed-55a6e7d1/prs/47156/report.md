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

## Finding review

Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.

### Correlations

None.

### Partial correlations

None.

### OAD-only findings

None.

### TypeSpec-only findings

None.

### Ambiguous findings

None.

### Evidence and execution failures

| Phase | Scope | Failure | Available evidence | Analysis | Details |
| --- | --- | --- | --- | --- | --- |
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-297b5c6e306463d1](#issue-evidence-gap-297b5c6e306463d1). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Analysis | Suggested fix | Confidence / status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-evidence-gap-297b5c6e306463d1"></a>`issue-evidence-gap-297b5c6e306463d1` | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:run-association-unverified` — run-association-unverified |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47156)
- **Workflow evidence:** unavailable
