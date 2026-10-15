# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-46811:d63dfe25dad4d9123e95c8d5c2d7941cd2651b92`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46811 — Review request for Microsoft.ContainerService/aks to add version stable/2026-08-01 and preview/2026-08-02-preview](http<local-path>)
- **Author:** FumingZhang
- **State:** open
- **Base:** `main` at `fd7acf72fc1d90922ef0536a06863c414328824f`
- **Head:** `dev-containerservice-Microsoft.ContainerService-2026-08` at `d63dfe25dad4d9123e95c8d5c2d7941cd2651b92`
- **Changed TypeSpec files:** `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/AgentFabricMembership.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/AgentPool.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/AgentPoolModels.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/AgentPoolUpgradeProfile.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/AlertConfiguration.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/CommonModels.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/FlexNodeBootstrap.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/GuardrailsAvailableVersion.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/IdentityBinding.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/JWTAuthenticator.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/LoadBalancer.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/LocationRoutes.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/Machine.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/MaintenanceConfiguration.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/MaintenanceWindow.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/ManagedCluster.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/ManagedClusterSnapshot.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/ManagedClusterUpgradeProfile.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/MeshMembership.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/SafeguardsAvailableVersion.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/UpgradeInsight.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/VmSkus.tsp`

## Not qualified

- `evidence-incomplete`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-760ab21b056e6330` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-760ab21b056e6330

- **Affected PRs:** #46811
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
