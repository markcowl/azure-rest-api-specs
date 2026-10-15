# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-45523:92d8489ba60724f979d92c03c86e6497ef083cda`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#45523 — Add MachineLearningServices stable API version 2026-09-01](http<local-path>)
- **Author:** fmabroukmsft
- **State:** closed (merged) at 2026-10-09T17:05:50Z
- **Base:** `main` at `b464a76895ea6f17747d4664b935d0dc55fa06c4`
- **Head:** `swagger-agent/MLS-2026-09-01-typespec` at `92d8489ba60724f979d92c03c86e6497ef083cda`
- **Changed TypeSpec files:** `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/ComputeResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/EndpointDeploymentResourcePropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/EndpointResourcePropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/InferenceEndpoint.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/InferenceGroup.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/InferencePool.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/ManagedNetworkSettingsPropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/OutboundRuleBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/RaiBlocklistItemPropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/RaiBlocklistPropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/RaiPolicyPropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/Workspace.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/WorkspaceConnectionPropertiesV2BasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/main.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/models.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/routes.tsp`

## Not qualified

- `run-association-unverified`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-aa7cd8f173831d46` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-aa7cd8f173831d46

- **Affected PRs:** #45523
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
