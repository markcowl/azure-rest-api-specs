# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47308:d4d88757b2ca9a0e0471710318022d12218b1419`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47308 — Add MachineLearningServices stable API version 2026-11-01](https://github.com/Azure/azure-rest-api-specs/pull/47308)
- **Author:** fmabroukmsft
- **State:** open
- **Base:** `main` at `a4c2a18ee4d0b1885d66a001145e56744acd9baf`
- **Head:** `fmabroukmsft-improved-lamp` at `d4d88757b2ca9a0e0471710318022d12218b1419`
- **Changed TypeSpec files:** `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/ComputeResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/EndpointDeploymentResourcePropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/EndpointResourcePropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/InferenceEndpoint.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/InferenceGroup.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/InferencePool.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/ManagedNetworkSettingsPropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/OutboundRuleBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/RaiBlocklistItemPropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/RaiBlocklistPropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/RaiPolicyPropertiesBasicResource.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/Workspace.tsp`, `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/WorkspaceConnectionPropertiesV2BasicResource.tsp`

## Not qualified

- `evidence-incomplete`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-3762c3c4c903216b` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-3762c3c4c903216b

- **Affected PRs:** #47308
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
  - `qualification:evidence-incomplete` — evidence-incomplete
  - `qualification:evidence-error-0` — oadCompareOutput was truncated by the workflow logger; complete OAD evidence is unavailable

## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

Both detectors reported zero non-error findings.
