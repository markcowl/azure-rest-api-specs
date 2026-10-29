# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47156:a5ccbf8129d4e835acbbddc8c8f07e263a97f72c`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47156 — [Microsoft.ApiManagement] AI Gateway 2026-11-01](https://github.com/Azure/azure-rest-api-specs/pull/47156)
- **Author:** azaslonov
- **State:** closed (merged) at 2026-10-20T16:42:38Z
- **Base:** `main` at `8acc59200b5eaf6a993b3db1d35900c6fe8c80ea`
- **Head:** `alzaslon/aigateway-2026-10-preview` at `a5ccbf8129d4e835acbbddc8c8f07e263a97f72c`
- **Changed TypeSpec files:** `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayAlias.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayApiKey.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayCommon.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayModel.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayModelProvider.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayOperations.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayResource.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayResponses.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayTelemetryExporter.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayToolServer.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayWorkspace.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/client.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/main.tsp`

## Not qualified

- `run-association-unverified`

<a id="finding-review"></a>
## Finding review

Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.

<a id="finding-review-correlations"></a>
### Correlations

None.

<a id="finding-review-partial"></a>
### Partial correlations

None.

<a id="finding-review-oad-only"></a>
### OAD-only findings

None.

<a id="finding-review-typespec-only"></a>
### TypeSpec-only findings

None.

<a id="finding-review-ambiguous"></a>
### Ambiguous findings

None.

<a id="finding-review-errors"></a>
### Evidence and execution failures

| Phase | Scope | Failure | Available evidence | Analysis | Details |
| --- | --- | --- | --- | --- | --- |
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-ddead62774b57a1c](#issue-evidence-gap-ddead62774b57a1c). | [details](#qualification-error-1) |

<a id="finding-review-intentional"></a>
### Intentional Swagger-only gaps

None.

<a id="finding-review-informational"></a>
### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-evidence-gap-ddead62774b57a1c"></a>`issue-evidence-gap-ddead62774b57a1c` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:run-association-unverified` — run-association-unverified |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47156)
- **Workflow evidence:** unavailable
