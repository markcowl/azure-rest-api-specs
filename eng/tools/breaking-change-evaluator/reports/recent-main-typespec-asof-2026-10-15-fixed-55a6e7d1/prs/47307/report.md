# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47307:ec4adf4c47f1937e8c30db755b7dcf14c1f44ad8`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47307 — Add CognitiveServices stable API version 2026-11-01](http<local-path>)
- **Author:** fmabroukmsft
- **State:** open
- **Base:** `main` at `a4c2a18ee4d0b1885d66a001145e56744acd9baf`
- **Head:** `swagger-agent/CogSvc-2026-11-01-typespec` at `ec4adf4c47f1937e8c30db755b7dcf14c1f44ad8`
- **Changed TypeSpec files:** `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/AdapterDeployment.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ArcDeployment.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Compute.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ComputeOperation.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ConnectionPropertiesV2BasicResource.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/CostControl.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ManagedComputeCapacity.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ManagedComputeDeployment.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/ManagedComputeUsages.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/RaiBinding.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/RaiRego.tsp`, `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Workbench.tsp`

## Not qualified

- `evidence-incomplete`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-9f302a93a706e734` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-9f302a93a706e734

- **Affected PRs:** #47307
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
