# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Report ID:** `merged-2026-10-15-to-2026-10-29-7824998e:pr-46811:d63dfe25dad4d9123e95c8d5c2d7941cd2651b92`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46811 — Review request for Microsoft.ContainerService/aks to add version stable/2026-08-01 and preview/2026-08-02-preview](https://github.com/Azure/azure-rest-api-specs/pull/46811)
- **Author:** FumingZhang
- **State:** closed (merged) at 2026-10-16T10:22:09Z
- **Base:** `main` at `fd7acf72fc1d90922ef0536a06863c414328824f`
- **Head:** `dev-containerservice-Microsoft.ContainerService-2026-08` at `d63dfe25dad4d9123e95c8d5c2d7941cd2651b92`
- **Changed TypeSpec files:** `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/AgentFabricMembership.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/AgentPool.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/AgentPoolModels.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/AgentPoolUpgradeProfile.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/AlertConfiguration.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/CommonModels.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/FlexNodeBootstrap.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/GuardrailsAvailableVersion.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/IdentityBinding.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/JWTAuthenticator.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/LoadBalancer.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/LocationRoutes.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/Machine.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/MaintenanceConfiguration.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/MaintenanceWindow.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/ManagedCluster.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/ManagedClusterSnapshot.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/ManagedClusterUpgradeProfile.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/MeshMembership.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/SafeguardsAvailableVersion.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/UpgradeInsight.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/VmSkus.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/main.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/tspconfig.yaml`

## Not qualified

- `evidence-incomplete`

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
| — | Qualification | `evidence-incomplete` | [workflow 38672000593](https://github.com/Azure/azure-rest-api-specs/actions/runs/38672000593) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-c89309a49db5412c](#issue-evidence-gap-c89309a49db5412c). | [details](#qualification-error-1) |

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
| <a id="issue-evidence-gap-c89309a49db5412c"></a>`issue-evidence-gap-c89309a49db5412c` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:evidence-incomplete` — evidence-incomplete<br>`qualification:evidence-error-0` — oadCompareOutput was truncated by the workflow logger; complete OAD evidence is unavailable |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `evidence-incomplete`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/46811)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/38672000593)
