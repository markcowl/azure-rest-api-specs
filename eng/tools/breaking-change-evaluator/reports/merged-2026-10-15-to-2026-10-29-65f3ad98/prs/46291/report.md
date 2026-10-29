# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-46291:67e7950b49eba5420ef463e8e65b025fb23d5dae`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46291 — Remove OpenAPI decorators from TypeSpec specs](https://github.com/Azure/azure-rest-api-specs/pull/46291)
- **Author:** melina5656
- **State:** closed (merged) at 2026-10-28T04:06:00Z
- **Base:** `main` at `139c4c0cabf25c50141d048f2d4c9832306d47ec`
- **Head:** `fix/RemoveOpenAPIDecorator` at `67e7950b49eba5420ef463e8e65b025fb23d5dae`
- **Changed TypeSpec files:** `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/privateAccess.tsp`, `specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers/models.tsp`, `specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication/EmailConfigurationModel.tsp`, `specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication/FabricAgentModel.tsp`, `specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication/FabricModel.tsp`, `specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication/PolicyModel.tsp`, `specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication/PrivateEndpointConnection.tsp`, `specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication/ProtectedItemModel.tsp`, `specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication/ReplicationExtensionModel.tsp`, `specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication/VaultModel.tsp`, `specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication/back-compatible.tsp`, `specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication/main.tsp`, `specification/security/resource-manager/Microsoft.Security/Security/SecuritySolutionsAPI/TopologyResource.tsp`, `specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/ManagedClusterCodeVersionResult.tsp`, `specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/ManagedVMSize.tsp`, `specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/NodeType.tsp`, `specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/Operations.tsp`, `specification/support/resource-manager/Microsoft.Support/Support/ProblemClassification.tsp`, `specification/support/resource-manager/Microsoft.Support/Support/back-compatible.tsp`, `specification/support/resource-manager/Microsoft.Support/Support/models.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | [1](#finding-review) |
| Informational OAD records | [7](#finding-review-informational) |
| TypeSpec findings | [9](#finding-review) |
| Exact | 0 |
| Probable (review required) | 0 |
| Intentional Swagger-only | [1](#finding-review-intentional) |
| Missed equivalent | 0 |
| TypeSpec-only | [9](#finding-review-typespec-only) |
| Ambiguous | 0 |

**Exact OAD coverage:** 0 / 1 (0.0%)
**Review-inclusive OAD coverage:** 0 / 1 (0.0%)

### By phase

| Phase | Independent OAD execution | TypeSpec mode | Outcome | Comparable OAD | Informational OAD | TypeSpec findings | Exact | Probable | Intentional gap | Missed equivalent | TypeSpec-only | Exact OAD coverage | Review-inclusive OAD coverage |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | [Swagger Breaking Change run 40626533086](https://github.com/Azure/azure-rest-api-specs/actions/runs/40626533086) | `same-version` | compared | [1](#finding-review) | [7](#finding-review-informational) | [1](#finding-review) | 0 | 0 | [1](#finding-review-intentional) | 0 | [1](#finding-review-typespec-only) | 0 / 1 (0.0%) | 0 / 1 (0.0%) |
| B | [Breaking Change (Cross-Version) run 40626533094](https://github.com/Azure/azure-rest-api-specs/actions/runs/40626533094) | `cross-version` | typespec-only-divergence | 0 | 0 | [8](#finding-review) | 0 | 0 | 0 | 0 | [8](#finding-review-typespec-only) | N/A | N/A |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | [1](#finding-review) | [1](#finding-review) | 0 | 0 | 0 | 0 | [1](#finding-review-oad-only) | [1](#finding-review-typespec-only) |
| B | Breaking Change (Cross-Version) | 0 | [2](#finding-review) | 0 | 0 | 0 | 0 | 0 | [2](#finding-review-typespec-only) |

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

| Phase | Finding | Type / path | Source | Analysis | Suggested review | Details |
| --- | --- | --- | --- | --- | --- | --- |
| A | `RequestPropertyTypeChanged` | Microsoft.Support.LookUpResourceIdRequest.type | [head](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/models.tsp#L1066) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-a2ee2e04283eda21](#issue-typespec-only-a2ee2e04283eda21). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-a-0) |
| B | `ResourcePropertyAdded` | Microsoft.Support.SupportTicketDetailsProperties.directConnectEscalation | [head](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/models.tsp#L632) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-0ae90cf2115558f0](#issue-typespec-only-0ae90cf2115558f0). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-b-0) |
| B | `ResourcePropertyAdded` | Microsoft.Support.SupportTicketDetailsProperties.communityForumPost | [head](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/models.tsp#L638) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-de15ac37cec69dd5](#issue-typespec-only-de15ac37cec69dd5). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-b-1) |
| B | `OperationAdded` | Microsoft.Support.ClassifyServices.classifyServices | [head](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/ServiceClassification.tsp#L25) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-53634e912dfbd18f](#issue-typespec-only-53634e912dfbd18f). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-b-3) |
| B | `OperationAdded` | Microsoft.Support.ClassifyServicesNoSubscription.classifyServices | [head](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/ServiceClassification.tsp#L42) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-299055c37a6f6e83](#issue-typespec-only-299055c37a6f6e83). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-b-4) |
| B | `OperationAdded` | Microsoft.Support.ClassifyProblems.classifyProblems | [head](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/ProblemClassification.tsp#L26) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-09ed0ea07b00edd3](#issue-typespec-only-09ed0ea07b00edd3). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-b-5) |
| B | `OperationAdded` | Microsoft.Support.ClassifyProblemsNoSubscription.classifyProblems | [head](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/ProblemClassification.tsp#L52) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-0a7ad48622e5dec7](#issue-typespec-only-0a7ad48622e5dec7). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-b-6) |
| B | `OperationAdded` | Microsoft.Support.SupportTickets.lookUpResourceId | [head](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp#L130) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-2db5e1aadb6edab9](#issue-typespec-only-2db5e1aadb6edab9). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-b-7) |
| B | `RequestPropertyAdded` | Microsoft.Support.UpdateSupportTicket.directConnectEscalation | [head](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/models.tsp#L822) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-9d29db8125879745](#issue-typespec-only-9d29db8125879745). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-b-8) |

<a id="finding-review-ambiguous"></a>
### Ambiguous findings

None.

<a id="finding-review-errors"></a>
### Evidence and execution failures

None.

<a id="finding-review-intentional"></a>
### Intentional Swagger-only gaps

| Phase | Finding | Type / path | Source | Analysis | Suggested action | Details |
| --- | --- | --- | --- | --- | --- | --- |
| A | `ReferenceRedirection` | ResourceType — type — POST /providers/microsoft.support/lookupresourceid — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/139c4c0cabf25c50141d048f2d4c9832306d47ec/specification/support/resource-manager/Microsoft.Support/Support/preview/2025-06-01-preview/support.json#L2880) · [head](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/preview/2025-06-01-preview/support.json#L2878) | OpenAPI reference structure is not wire-level [issue-oad-only-d5bb2f6c37da16fd](#issue-oad-only-d5bb2f6c37da16fd). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-7) |

<a id="finding-review-informational"></a>
### Informational OAD records

| Phase | Finding | Type / path | Source | Analysis | Suggested action | Details |
| --- | --- | --- | --- | --- | --- | --- |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/139c4c0cabf25c50141d048f2d4c9832306d47ec/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2024-11-01-preview/servicefabricmanagedclusters.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2024-11-01-preview/servicefabricmanagedclusters.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-0) |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/139c4c0cabf25c50141d048f2d4c9832306d47ec/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-03-01-preview/servicefabricmanagedclusters.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-03-01-preview/servicefabricmanagedclusters.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-1) |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/139c4c0cabf25c50141d048f2d4c9832306d47ec/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-06-01-preview/servicefabricmanagedclusters.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-06-01-preview/servicefabricmanagedclusters.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-2) |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/139c4c0cabf25c50141d048f2d4c9832306d47ec/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-10-01-preview/servicefabricmanagedclusters.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-10-01-preview/servicefabricmanagedclusters.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-3) |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/139c4c0cabf25c50141d048f2d4c9832306d47ec/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2026-05-01-preview/servicefabricmanagedclusters.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2026-05-01-preview/servicefabricmanagedclusters.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-4) |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/139c4c0cabf25c50141d048f2d4c9832306d47ec/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/stable/2026-02-01/servicefabricmanagedclusters.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/stable/2026-02-01/servicefabricmanagedclusters.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-5) |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/139c4c0cabf25c50141d048f2d4c9832306d47ec/specification/support/resource-manager/Microsoft.Support/Support/preview/2025-06-01-preview/support.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/preview/2025-06-01-preview/support.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-6) |

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 29293 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40626533086) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/a3a154cb066a5d27-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/dbe559622b2b80b7-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/186101ec6211864a-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/13a3aae04c515d03-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/331c7ace6fed126b-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/fe57f17c4f29fd3b-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 31263 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40626533094) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/a3a154cb066a5d27-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/dbe559622b2b80b7-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/186101ec6211864a-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/13a3aae04c515d03-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/331c7ace6fed126b-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/fe57f17c4f29fd3b-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/chaos/resource-manager/Microsoft.Chaos/Chaos` | Phase A (`same-version`) | `2025-01-01` → `2025-01-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/a3a154cb066a5d27-phase-a.md) |
| `specification/chaos/resource-manager/Microsoft.Chaos/Chaos` | Phase A (`same-version`) | `2026-05-01-preview` → `2026-05-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/a3a154cb066a5d27-phase-a.md) |
| `specification/chaos/resource-manager/Microsoft.Chaos/Chaos` | Phase A (`same-version`) | `2026-08-01-preview` → `2026-08-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/a3a154cb066a5d27-phase-a.md) |
| `specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers` | Phase A (`same-version`) | `2024-12-01-preview` → `2024-12-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/dbe559622b2b80b7-phase-a.md) |
| `specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers` | Phase A (`same-version`) | `2024-12-30` → `2024-12-30` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/dbe559622b2b80b7-phase-a.md) |
| `specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers` | Phase A (`same-version`) | `2025-06-01-preview` → `2025-06-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/dbe559622b2b80b7-phase-a.md) |
| `specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers` | Phase A (`same-version`) | `2025-12-01-preview` → `2025-12-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/dbe559622b2b80b7-phase-a.md) |
| `specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication` | Phase A (`same-version`) | `2024-09-01` → `2024-09-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/186101ec6211864a-phase-a.md) |
| `specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication` | Phase A (`same-version`) | `2026-05-01` → `2026-05-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/186101ec6211864a-phase-a.md) |
| `specification/security/resource-manager/Microsoft.Security/Security/SecuritySolutionsAPI` | Phase A (`same-version`) | `2020-01-01` → `2020-01-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/13a3aae04c515d03-phase-a.md) |
| `specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters` | Phase A (`same-version`) | `2024-11-01-preview` → `2024-11-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/331c7ace6fed126b-phase-a.md) |
| `specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters` | Phase A (`same-version`) | `2025-03-01-preview` → `2025-03-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/331c7ace6fed126b-phase-a.md) |
| `specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters` | Phase A (`same-version`) | `2025-06-01-preview` → `2025-06-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/331c7ace6fed126b-phase-a.md) |
| `specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters` | Phase A (`same-version`) | `2025-10-01-preview` → `2025-10-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/331c7ace6fed126b-phase-a.md) |
| `specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters` | Phase A (`same-version`) | `2026-02-01` → `2026-02-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/331c7ace6fed126b-phase-a.md) |
| `specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters` | Phase A (`same-version`) | `2026-05-01-preview` → `2026-05-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/331c7ace6fed126b-phase-a.md) |
| `specification/support/resource-manager/Microsoft.Support/Support` | Phase A (`same-version`) | `2024-04-01` → `2024-04-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/fe57f17c4f29fd3b-phase-a.md) |
| `specification/support/resource-manager/Microsoft.Support/Support` | Phase A (`same-version`) | `2025-06-01-preview` → `2025-06-01-preview` | 1 | 1 | 1 | [generated Markdown](report-artifacts/typespec/fe57f17c4f29fd3b-phase-a.md) |
| `specification/support/resource-manager/Microsoft.Support/Support` | Phase B (`cross-version`) | `2024-04-01` → `2025-06-01-preview` | 1 | 8 | 10 | [generated combined Markdown](report-artifacts/typespec/fe57f17c4f29fd3b-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-oad-only-d5bb2f6c37da16fd"></a>`issue-oad-only-d5bb2f6c37da16fd` | 1 | A | `oad-only` | likely-expected-difference | OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent. Contributes one finding to OAD-only or missed-equivalent totals. | Review detector coverage and the canonical target mapping. | medium; generated | `oad-finding:A-oad-7` — ReferenceRedirection: The '$ref' property points to different models in the old and new versions. |
| <a id="issue-typespec-only-09ed0ea07b00edd3"></a><a id="issue-typespec-only-0a7ad48622e5dec7"></a><a id="issue-typespec-only-0ae90cf2115558f0"></a><a id="issue-typespec-only-299055c37a6f6e83"></a><a id="issue-typespec-only-2db5e1aadb6edab9"></a><a id="issue-typespec-only-53634e912dfbd18f"></a><a id="issue-typespec-only-9d29db8125879745"></a><a id="issue-typespec-only-de15ac37cec69dd5"></a>`issue-typespec-only-09ed0ea07b00edd3` (+7 related) | 8 | B | `typespec-only` | requires-review | The TypeSpec finding has no selected OAD equivalent. Contributes one finding to TypeSpec-only totals. | Confirm whether this is additional coverage, noise, or a matching gap. | medium; generated | `typespec-finding:specification/support/resource-manager/Microsoft.Support/Support:tsp-B-5` — OperationAdded: Operation POST /subscriptions/{}/providers/Microsoft.Support/services/{}/classifyProblems was added.<br>`typespec-finding:specification/support/resource-manager/Microsoft.Support/Support:tsp-B-6` — OperationAdded: Operation POST /providers/Microsoft.Support/services/{}/classifyProblems was added.<br>`typespec-finding:specification/support/resource-manager/Microsoft.Support/Support:tsp-B-0` — ResourcePropertyAdded: Request property 'directConnectEscalation' was added at body.properties.properties.directConnectEscalation.<br>`typespec-finding:specification/support/resource-manager/Microsoft.Support/Support:tsp-B-4` — OperationAdded: Operation POST /providers/Microsoft.Support/classifyServices was added.<br>`typespec-finding:specification/support/resource-manager/Microsoft.Support/Support:tsp-B-7` — OperationAdded: Operation POST /providers/Microsoft.Support/lookUpResourceId was added.<br>`typespec-finding:specification/support/resource-manager/Microsoft.Support/Support:tsp-B-3` — OperationAdded: Operation POST /subscriptions/{}/providers/Microsoft.Support/classifyServices was added.<br>`typespec-finding:specification/support/resource-manager/Microsoft.Support/Support:tsp-B-8` — RequestPropertyAdded: Request property 'directConnectEscalation' was added at body.properties.directConnectEscalation.<br>`typespec-finding:specification/support/resource-manager/Microsoft.Support/Support:tsp-B-1` — ResourcePropertyAdded: Request property 'communityForumPost' was added at body.properties.properties.communityForumPost. |
| <a id="issue-typespec-only-a2ee2e04283eda21"></a>`issue-typespec-only-a2ee2e04283eda21` | 1 | A | `typespec-only` | requires-review | The TypeSpec finding has no selected OAD equivalent. Contributes one finding to TypeSpec-only totals. | Confirm whether this is additional coverage, noise, or a matching gap. | medium; generated | `typespec-finding:specification/support/resource-manager/Microsoft.Support/Support:tsp-A-0` — RequestPropertyTypeChanged: Request type kind changed at body.properties.type from String to Enum. |

## Finding details

<a id="finding-a-oad-0"></a>
### A-oad-0 — `NoVersionChange`

- **Swagger finding:** `A-oad-0` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40626533086) (digest `d12ad6ffb3909f51a2f13ef8493483d2388aaa7363ae753a0c13685007ad33a9`)
- **Swagger source:** [base: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2024-11-01-preview/servicefabricmanagedclusters.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/139c4c0cabf25c50141d048f2d4c9832306d47ec/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2024-11-01-preview/servicefabricmanagedclusters.json#L1); [head: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2024-11-01-preview/servicefabricmanagedclusters.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2024-11-01-preview/servicefabricmanagedclusters.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document servicefabricmanagedclusters.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-1"></a>
### A-oad-1 — `NoVersionChange`

- **Swagger finding:** `A-oad-1` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40626533086) (digest `d12ad6ffb3909f51a2f13ef8493483d2388aaa7363ae753a0c13685007ad33a9`)
- **Swagger source:** [base: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-03-01-preview/servicefabricmanagedclusters.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/139c4c0cabf25c50141d048f2d4c9832306d47ec/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-03-01-preview/servicefabricmanagedclusters.json#L1); [head: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-03-01-preview/servicefabricmanagedclusters.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-03-01-preview/servicefabricmanagedclusters.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document servicefabricmanagedclusters.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-2"></a>
### A-oad-2 — `NoVersionChange`

- **Swagger finding:** `A-oad-2` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40626533086) (digest `d12ad6ffb3909f51a2f13ef8493483d2388aaa7363ae753a0c13685007ad33a9`)
- **Swagger source:** [base: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-06-01-preview/servicefabricmanagedclusters.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/139c4c0cabf25c50141d048f2d4c9832306d47ec/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-06-01-preview/servicefabricmanagedclusters.json#L1); [head: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-06-01-preview/servicefabricmanagedclusters.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-06-01-preview/servicefabricmanagedclusters.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document servicefabricmanagedclusters.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-3"></a>
### A-oad-3 — `NoVersionChange`

- **Swagger finding:** `A-oad-3` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40626533086) (digest `d12ad6ffb3909f51a2f13ef8493483d2388aaa7363ae753a0c13685007ad33a9`)
- **Swagger source:** [base: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-10-01-preview/servicefabricmanagedclusters.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/139c4c0cabf25c50141d048f2d4c9832306d47ec/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-10-01-preview/servicefabricmanagedclusters.json#L1); [head: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-10-01-preview/servicefabricmanagedclusters.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2025-10-01-preview/servicefabricmanagedclusters.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document servicefabricmanagedclusters.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-4"></a>
### A-oad-4 — `NoVersionChange`

- **Swagger finding:** `A-oad-4` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40626533086) (digest `d12ad6ffb3909f51a2f13ef8493483d2388aaa7363ae753a0c13685007ad33a9`)
- **Swagger source:** [base: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2026-05-01-preview/servicefabricmanagedclusters.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/139c4c0cabf25c50141d048f2d4c9832306d47ec/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2026-05-01-preview/servicefabricmanagedclusters.json#L1); [head: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2026-05-01-preview/servicefabricmanagedclusters.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/preview/2026-05-01-preview/servicefabricmanagedclusters.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document servicefabricmanagedclusters.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-5"></a>
### A-oad-5 — `NoVersionChange`

- **Swagger finding:** `A-oad-5` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40626533086) (digest `d12ad6ffb3909f51a2f13ef8493483d2388aaa7363ae753a0c13685007ad33a9`)
- **Swagger source:** [base: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/stable/2026-02-01/servicefabricmanagedclusters.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/139c4c0cabf25c50141d048f2d4c9832306d47ec/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/stable/2026-02-01/servicefabricmanagedclusters.json#L1); [head: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/stable/2026-02-01/servicefabricmanagedclusters.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/stable/2026-02-01/servicefabricmanagedclusters.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document servicefabricmanagedclusters.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-6"></a>
### A-oad-6 — `NoVersionChange`

- **Swagger finding:** `A-oad-6` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40626533086) (digest `d12ad6ffb3909f51a2f13ef8493483d2388aaa7363ae753a0c13685007ad33a9`)
- **Swagger source:** [base: specification/support/resource-manager/Microsoft.Support/Support/preview/2025-06-01-preview/support.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/139c4c0cabf25c50141d048f2d4c9832306d47ec/specification/support/resource-manager/Microsoft.Support/Support/preview/2025-06-01-preview/support.json#L1); [head: specification/support/resource-manager/Microsoft.Support/Support/preview/2025-06-01-preview/support.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/preview/2025-06-01-preview/support.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document support.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-7"></a>
### A-oad-7 — `ReferenceRedirection`

- **Swagger finding:** `A-oad-7` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40626533086) (digest `d12ad6ffb3909f51a2f13ef8493483d2388aaa7363ae753a0c13685007ad33a9`)
- **Swagger source:** [base: specification/support/resource-manager/Microsoft.Support/Support/preview/2025-06-01-preview/support.json, line 2880](https://github.com/Azure/azure-rest-api-specs/blob/139c4c0cabf25c50141d048f2d4c9832306d47ec/specification/support/resource-manager/Microsoft.Support/Support/preview/2025-06-01-preview/support.json#L2880) — JSONPath `definitions.LookUpResourceIdRequest.properties.type`; [head: specification/support/resource-manager/Microsoft.Support/Support/preview/2025-06-01-preview/support.json, line 2878](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/preview/2025-06-01-preview/support.json#L2878) — JSONPath `definitions.LookUpResourceIdRequest.properties.type`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** POST /providers/microsoft.support/lookupresourceid request
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Related analysis:** [issue-oad-only-d5bb2f6c37da16fd](#issue-oad-only-d5bb2f6c37da16fd)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-a-0"></a>
### specification/support/resource-manager/Microsoft.Support/Support:tsp-A-0 — `RequestPropertyTypeChanged`

- **TypeSpec finding:** `specification/support/resource-manager/Microsoft.Support/Support:tsp-A-0` — `RequestPropertyTypeChanged` — Request type kind changed at body.properties.type from String to Enum.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /providers/Microsoft.Support/lookUpResourceId; project `specification/support/resource-manager/Microsoft.Support/Support`; versions `2025-06-01-preview` → `2025-06-01-preview`
- **Source declaration identity:** `Microsoft.Support.LookUpResourceIdRequest.type`
- **Wire identity:** `body.properties.type`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/fe57f17c4f29fd3b-phase-a.md) (digest `2153fbec7736331aafa7a4d86a446170fd8baa8127003580197cab61928bec3f`)
- **TypeSpec source:** [head: specification/support/resource-manager/Microsoft.Support/Support/models.tsp, line 1066](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/models.tsp#L1066)
- **Related analysis:** [issue-typespec-only-a2ee2e04283eda21](#issue-typespec-only-a2ee2e04283eda21)

<a id="finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-b-0"></a>
### specification/support/resource-manager/Microsoft.Support/Support:tsp-B-0 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/support/resource-manager/Microsoft.Support/Support:tsp-B-0` — `ResourcePropertyAdded` — Request property 'directConnectEscalation' was added at body.properties.properties.directConnectEscalation.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/providers/Microsoft.Support/supportTickets/{}; project `specification/support/resource-manager/Microsoft.Support/Support`; versions `2024-04-01` → `2025-06-01-preview`
- **Source declaration identity:** `Microsoft.Support.SupportTicketDetailsProperties.directConnectEscalation`
- **Wire identity:** `body.properties.properties.directConnectEscalation`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/fe57f17c4f29fd3b-phase-b.md) (digest `854766adc3d2ebcf4b44e4a8f4bf588e1be23e70e0ce23e5a37253edf8007f67`)
- **TypeSpec source:** [head: specification/support/resource-manager/Microsoft.Support/Support/models.tsp, line 632](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/models.tsp#L632)
- **Related analysis:** [issue-typespec-only-0ae90cf2115558f0](#issue-typespec-only-0ae90cf2115558f0)

<a id="finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-b-1"></a>
### specification/support/resource-manager/Microsoft.Support/Support:tsp-B-1 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/support/resource-manager/Microsoft.Support/Support:tsp-B-1` — `ResourcePropertyAdded` — Request property 'communityForumPost' was added at body.properties.properties.communityForumPost.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/providers/Microsoft.Support/supportTickets/{}; project `specification/support/resource-manager/Microsoft.Support/Support`; versions `2024-04-01` → `2025-06-01-preview`
- **Source declaration identity:** `Microsoft.Support.SupportTicketDetailsProperties.communityForumPost`
- **Wire identity:** `body.properties.properties.communityForumPost`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/fe57f17c4f29fd3b-phase-b.md) (digest `854766adc3d2ebcf4b44e4a8f4bf588e1be23e70e0ce23e5a37253edf8007f67`)
- **TypeSpec source:** [head: specification/support/resource-manager/Microsoft.Support/Support/models.tsp, line 638](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/models.tsp#L638)
- **Related analysis:** [issue-typespec-only-de15ac37cec69dd5](#issue-typespec-only-de15ac37cec69dd5)

<a id="finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-b-3"></a>
### specification/support/resource-manager/Microsoft.Support/Support:tsp-B-3 — `OperationAdded`

- **TypeSpec finding:** `specification/support/resource-manager/Microsoft.Support/Support:tsp-B-3` — `OperationAdded` — Operation POST /subscriptions/{}/providers/Microsoft.Support/classifyServices was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** POST /subscriptions/{}/providers/Microsoft.Support/classifyServices; project `specification/support/resource-manager/Microsoft.Support/Support`; versions `2024-04-01` → `2025-06-01-preview`
- **Source declaration identity:** `Microsoft.Support.ClassifyServices.classifyServices`
- **Wire identity:** unavailable
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/fe57f17c4f29fd3b-phase-b.md) (digest `854766adc3d2ebcf4b44e4a8f4bf588e1be23e70e0ce23e5a37253edf8007f67`)
- **TypeSpec source:** [head: specification/support/resource-manager/Microsoft.Support/Support/ServiceClassification.tsp, line 25](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/ServiceClassification.tsp#L25)
- **Related analysis:** [issue-typespec-only-53634e912dfbd18f](#issue-typespec-only-53634e912dfbd18f)

<a id="finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-b-4"></a>
### specification/support/resource-manager/Microsoft.Support/Support:tsp-B-4 — `OperationAdded`

- **TypeSpec finding:** `specification/support/resource-manager/Microsoft.Support/Support:tsp-B-4` — `OperationAdded` — Operation POST /providers/Microsoft.Support/classifyServices was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** POST /providers/Microsoft.Support/classifyServices; project `specification/support/resource-manager/Microsoft.Support/Support`; versions `2024-04-01` → `2025-06-01-preview`
- **Source declaration identity:** `Microsoft.Support.ClassifyServicesNoSubscription.classifyServices`
- **Wire identity:** unavailable
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/fe57f17c4f29fd3b-phase-b.md) (digest `854766adc3d2ebcf4b44e4a8f4bf588e1be23e70e0ce23e5a37253edf8007f67`)
- **TypeSpec source:** [head: specification/support/resource-manager/Microsoft.Support/Support/ServiceClassification.tsp, line 42](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/ServiceClassification.tsp#L42)
- **Related analysis:** [issue-typespec-only-299055c37a6f6e83](#issue-typespec-only-299055c37a6f6e83)

<a id="finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-b-5"></a>
### specification/support/resource-manager/Microsoft.Support/Support:tsp-B-5 — `OperationAdded`

- **TypeSpec finding:** `specification/support/resource-manager/Microsoft.Support/Support:tsp-B-5` — `OperationAdded` — Operation POST /subscriptions/{}/providers/Microsoft.Support/services/{}/classifyProblems was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** POST /subscriptions/{}/providers/Microsoft.Support/services/{}/classifyProblems; project `specification/support/resource-manager/Microsoft.Support/Support`; versions `2024-04-01` → `2025-06-01-preview`
- **Source declaration identity:** `Microsoft.Support.ClassifyProblems.classifyProblems`
- **Wire identity:** unavailable
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/fe57f17c4f29fd3b-phase-b.md) (digest `854766adc3d2ebcf4b44e4a8f4bf588e1be23e70e0ce23e5a37253edf8007f67`)
- **TypeSpec source:** [head: specification/support/resource-manager/Microsoft.Support/Support/ProblemClassification.tsp, line 26](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/ProblemClassification.tsp#L26)
- **Related analysis:** [issue-typespec-only-09ed0ea07b00edd3](#issue-typespec-only-09ed0ea07b00edd3)

<a id="finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-b-6"></a>
### specification/support/resource-manager/Microsoft.Support/Support:tsp-B-6 — `OperationAdded`

- **TypeSpec finding:** `specification/support/resource-manager/Microsoft.Support/Support:tsp-B-6` — `OperationAdded` — Operation POST /providers/Microsoft.Support/services/{}/classifyProblems was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** POST /providers/Microsoft.Support/services/{}/classifyProblems; project `specification/support/resource-manager/Microsoft.Support/Support`; versions `2024-04-01` → `2025-06-01-preview`
- **Source declaration identity:** `Microsoft.Support.ClassifyProblemsNoSubscription.classifyProblems`
- **Wire identity:** unavailable
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/fe57f17c4f29fd3b-phase-b.md) (digest `854766adc3d2ebcf4b44e4a8f4bf588e1be23e70e0ce23e5a37253edf8007f67`)
- **TypeSpec source:** [head: specification/support/resource-manager/Microsoft.Support/Support/ProblemClassification.tsp, line 52](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/ProblemClassification.tsp#L52)
- **Related analysis:** [issue-typespec-only-0a7ad48622e5dec7](#issue-typespec-only-0a7ad48622e5dec7)

<a id="finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-b-7"></a>
### specification/support/resource-manager/Microsoft.Support/Support:tsp-B-7 — `OperationAdded`

- **TypeSpec finding:** `specification/support/resource-manager/Microsoft.Support/Support:tsp-B-7` — `OperationAdded` — Operation POST /providers/Microsoft.Support/lookUpResourceId was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** POST /providers/Microsoft.Support/lookUpResourceId; project `specification/support/resource-manager/Microsoft.Support/Support`; versions `2024-04-01` → `2025-06-01-preview`
- **Source declaration identity:** `Microsoft.Support.SupportTickets.lookUpResourceId`
- **Wire identity:** unavailable
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/fe57f17c4f29fd3b-phase-b.md) (digest `854766adc3d2ebcf4b44e4a8f4bf588e1be23e70e0ce23e5a37253edf8007f67`)
- **TypeSpec source:** [head: specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp, line 130](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/SupportTicketDetails.tsp#L130)
- **Related analysis:** [issue-typespec-only-2db5e1aadb6edab9](#issue-typespec-only-2db5e1aadb6edab9)

<a id="finding-typespec-specification-support-resource-manager-microsoft-support-support-tsp-b-8"></a>
### specification/support/resource-manager/Microsoft.Support/Support:tsp-B-8 — `RequestPropertyAdded`

- **TypeSpec finding:** `specification/support/resource-manager/Microsoft.Support/Support:tsp-B-8` — `RequestPropertyAdded` — Request property 'directConnectEscalation' was added at body.properties.directConnectEscalation.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PATCH /subscriptions/{}/providers/Microsoft.Support/supportTickets/{}; project `specification/support/resource-manager/Microsoft.Support/Support`; versions `2024-04-01` → `2025-06-01-preview`
- **Source declaration identity:** `Microsoft.Support.UpdateSupportTicket.directConnectEscalation`
- **Wire identity:** `body.properties.directConnectEscalation`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/fe57f17c4f29fd3b-phase-b.md) (digest `854766adc3d2ebcf4b44e4a8f4bf588e1be23e70e0ce23e5a37253edf8007f67`)
- **TypeSpec source:** [head: specification/support/resource-manager/Microsoft.Support/Support/models.tsp, line 822](https://github.com/Azure/azure-rest-api-specs/blob/67e7950b49eba5420ef463e8e65b025fb23d5dae/specification/support/resource-manager/Microsoft.Support/Support/models.tsp#L822)
- **Related analysis:** [issue-typespec-only-9d29db8125879745](#issue-typespec-only-9d29db8125879745)

## Reproduce

**Shell:** powershell

### Check out the evaluator

```powershell
git clone 'https://github.com/markcowl/azure-rest-api-specs.git' evaluator
git -C evaluator checkout 'f37db08ada6edd33d546129d99410fcce79aeb5a'
corepack pnpm --dir evaluator install --frozen-lockfile
```

### Prepare the immutable analyzer

```powershell
$prepared = node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js prepare --typespec-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a | ConvertFrom-Json
if ($prepared.artifactDigest -ne '95835342e0e018bc513e3f639a2b36ec641918b5db3084bdb380fce3bd8f6cc5') { throw 'Prepared analyzer digest does not match the report' }
```

### Check out the evaluated target

```powershell
git clone --filter=blob:none --no-checkout 'https://github.com/Azure/azure-rest-api-specs.git' target
git -C target fetch --no-tags origin 139c4c0cabf25c50141d048f2d4c9832306d47ec 67e7950b49eba5420ef463e8e65b025fb23d5dae
git -C target checkout --detach 67e7950b49eba5420ef463e8e65b025fb23d5dae
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/46291' --tool-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/chaos/resource-manager/Microsoft.Chaos/Chaos

```powershell
Push-Location target
node $prepared.executable 'specification/chaos/resource-manager/Microsoft.Chaos/Chaos' --base-ref 139c4c0cabf25c50141d048f2d4c9832306d47ec --phase same-version --json-output '../specification-chaos-resource-manager-Microsoft.Chaos-Chaos-phase-a.json' --markdown-output '../specification-chaos-resource-manager-Microsoft.Chaos-Chaos-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/chaos/resource-manager/Microsoft.Chaos/Chaos' --base-ref 139c4c0cabf25c50141d048f2d4c9832306d47ec --json-output '../specification-chaos-resource-manager-Microsoft.Chaos-Chaos-phase-b-evidence.json' --markdown-output '../specification-chaos-resource-manager-Microsoft.Chaos-Chaos-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers

```powershell
Push-Location target
node $prepared.executable 'specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers' --base-ref 139c4c0cabf25c50141d048f2d4c9832306d47ec --phase same-version --json-output '../specification-mysql-resource-manager-Microsoft.DBforMySQL-FlexibleServers-phase-a.json' --markdown-output '../specification-mysql-resource-manager-Microsoft.DBforMySQL-FlexibleServers-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers' --base-ref 139c4c0cabf25c50141d048f2d4c9832306d47ec --json-output '../specification-mysql-resource-manager-Microsoft.DBforMySQL-FlexibleServers-phase-b-evidence.json' --markdown-output '../specification-mysql-resource-manager-Microsoft.DBforMySQL-FlexibleServers-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication

```powershell
Push-Location target
node $prepared.executable 'specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication' --base-ref 139c4c0cabf25c50141d048f2d4c9832306d47ec --phase same-version --json-output '../specification-recoveryservicesdatareplication-resource-manager-Microsoft.DataReplication-DataReplication-phase-a.json' --markdown-output '../specification-recoveryservicesdatareplication-resource-manager-Microsoft.DataReplication-DataReplication-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication' --base-ref 139c4c0cabf25c50141d048f2d4c9832306d47ec --json-output '../specification-recoveryservicesdatareplication-resource-manager-Microsoft.DataReplication-DataReplication-phase-b-evidence.json' --markdown-output '../specification-recoveryservicesdatareplication-resource-manager-Microsoft.DataReplication-DataReplication-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/security/resource-manager/Microsoft.Security/Security/SecuritySolutionsAPI

```powershell
Push-Location target
node $prepared.executable 'specification/security/resource-manager/Microsoft.Security/Security/SecuritySolutionsAPI' --base-ref 139c4c0cabf25c50141d048f2d4c9832306d47ec --phase same-version --json-output '../specification-security-resource-manager-Microsoft.Security-Security-SecuritySolutionsAPI-phase-a.json' --markdown-output '../specification-security-resource-manager-Microsoft.Security-Security-SecuritySolutionsAPI-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/security/resource-manager/Microsoft.Security/Security/SecuritySolutionsAPI' --base-ref 139c4c0cabf25c50141d048f2d4c9832306d47ec --json-output '../specification-security-resource-manager-Microsoft.Security-Security-SecuritySolutionsAPI-phase-b-evidence.json' --markdown-output '../specification-security-resource-manager-Microsoft.Security-Security-SecuritySolutionsAPI-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters

```powershell
Push-Location target
node $prepared.executable 'specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters' --base-ref 139c4c0cabf25c50141d048f2d4c9832306d47ec --phase same-version --json-output '../specification-servicefabricmanagedclusters-resource-manager-Microsoft.ServiceFabric-ServiceFabricManagedClusters-phase-a.json' --markdown-output '../specification-servicefabricmanagedclusters-resource-manager-Microsoft.ServiceFabric-ServiceFabricManagedClusters-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters' --base-ref 139c4c0cabf25c50141d048f2d4c9832306d47ec --json-output '../specification-servicefabricmanagedclusters-resource-manager-Microsoft.ServiceFabric-ServiceFabricManagedClusters-phase-b-evidence.json' --markdown-output '../specification-servicefabricmanagedclusters-resource-manager-Microsoft.ServiceFabric-ServiceFabricManagedClusters-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/support/resource-manager/Microsoft.Support/Support

```powershell
Push-Location target
node $prepared.executable 'specification/support/resource-manager/Microsoft.Support/Support' --base-ref 139c4c0cabf25c50141d048f2d4c9832306d47ec --phase same-version --json-output '../specification-support-resource-manager-Microsoft.Support-Support-phase-a.json' --markdown-output '../specification-support-resource-manager-Microsoft.Support-Support-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/support/resource-manager/Microsoft.Support/Support' --base-ref 139c4c0cabf25c50141d048f2d4c9832306d47ec --json-output '../specification-support-resource-manager-Microsoft.Support-Support-phase-b-evidence.json' --markdown-output '../specification-support-resource-manager-Microsoft.Support-Support-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
