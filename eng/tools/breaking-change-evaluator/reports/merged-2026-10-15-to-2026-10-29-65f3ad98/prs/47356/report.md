# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47356:7269bdaf14e02161722a10329f75b5d5859a344d`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47356 — Azure Local november preview](https://github.com/Azure/azure-rest-api-specs/pull/47356)
- **Author:** abaranwal-ms
- **State:** closed (merged) at 2026-10-16T10:59:06Z
- **Base:** `main` at `ebc13f67950a95e50c6828c27dd979e8608c0329`
- **Head:** `users/abaranwal/azlocal-nov-prev-2026_sq` at `7269bdaf14e02161722a10329f75b5d5859a344d`
- **Changed TypeSpec files:** `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/CapacitySetting.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/Cluster.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/ClusterVolume.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/DevicePool.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/EdgeMachineGpu.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/EdgeMachineUpdate.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/KubernetesVersions.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/NetworkProfile.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/PlatformUpdates.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/ProxyConfiguration.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/Publisher.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/UpdateContents.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/main.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/models.tsp`

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
| — | Qualification | `evidence-incomplete` | [workflow 38888741140](https://github.com/Azure/azure-rest-api-specs/actions/runs/38888741140) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-6c1ed8212ef41097](#issue-evidence-gap-6c1ed8212ef41097). | [details](#qualification-error-1) |

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
| <a id="issue-evidence-gap-6c1ed8212ef41097"></a>`issue-evidence-gap-6c1ed8212ef41097` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:evidence-incomplete` — evidence-incomplete<br>`qualification:evidence-error-0` — oadCompareOutput was truncated by the workflow logger; complete OAD evidence is unavailable |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `evidence-incomplete`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47356)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/38888741140)
