# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-45523:92d8489ba60724f979d92c03c86e6497ef083cda`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#45523 — Add MachineLearningServices stable API version 2026-09-01](https://github.com/Azure/azure-rest-api-specs/pull/45523)
- **Author:** fmabroukmsft
- **State:** closed (merged) at 2026-10-09T17:05:50Z
- **Base:** `main` at `b464a76895ea6f17747d4664b935d0dc55fa06c4`
- **Head:** `swagger-agent/MLS-2026-09-01-typespec` at `92d8489ba60724f979d92c03c86e6497ef083cda`
- **Changed TypeSpec files:** `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/ComputeResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/EndpointDeploymentResourcePropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/EndpointResourcePropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/InferenceEndpoint.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/InferenceGroup.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/InferencePool.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/ManagedNetworkSettingsPropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/OutboundRuleBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/RaiBlocklistItemPropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/RaiBlocklistPropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/RaiPolicyPropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/Workspace.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/WorkspaceConnectionPropertiesV2BasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/main.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/models.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/routes.tsp`

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
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-aa7cd8f173831d46](#issue-evidence-gap-aa7cd8f173831d46). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Analysis | Suggested fix | Confidence / status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-evidence-gap-aa7cd8f173831d46"></a>`issue-evidence-gap-aa7cd8f173831d46` | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:run-association-unverified` — run-association-unverified |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/45523)
- **Workflow evidence:** unavailable
