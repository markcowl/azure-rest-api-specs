# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-45556:91d8e4ca207bad8071976f84d66e78bbbd32d721`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#45556 — Add CognitiveServices preview API version 2026-09-15-preview](https://github.com/Azure/azure-rest-api-specs/pull/45556)
- **Author:** fmabroukmsft
- **State:** closed (merged) at 2026-10-10T00:18:26Z
- **Base:** `main` at `b464a76895ea6f17747d4664b935d0dc55fa06c4`
- **Head:** `swagger-agent/CogSvc-2026-09-15-preview-typespec` at `91d8e4ca207bad8071976f84d66e78bbbd32d721`
- **Changed TypeSpec files:** `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/AdapterDeployment.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ArcDeployment.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Compute.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ComputeOperation.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ConnectionName.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ConnectionPropertiesV2BasicResource.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/CostControl.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ManagedComputeCapacity.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ManagedComputeDeployment.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ManagedComputeUsages.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Project.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/RaiBinding.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/RaiPolicy.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/RaiRego.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Workbench.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/back-compatible.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/client.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/main.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/models.tsp`

## Not qualified

- `run-association-unverified`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-87ed0649b17b783f` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-87ed0649b17b783f

- **Affected PRs:** #45556
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
