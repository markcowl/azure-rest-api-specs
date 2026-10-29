# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47590:bf5e3ba5cb11720653e1303f87d99061928c07a0`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47590 — [TypeSpec] Enable migrated no-query-in-post rule](https://github.com/Azure/azure-rest-api-specs/pull/47590)
- **Author:** msyyc
- **State:** closed (merged) at 2026-10-28T06:00:58Z
- **Base:** `main` at `54b3852a392c5cc504c4edf97f5c18fbcd5820cb`
- **Head:** `split-migrated-no-query-in-post` at `bf5e3ba5cb11720653e1303f87d99061928c07a0`
- **Changed TypeSpec files:** `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertsManagement/Alert.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/PolicyFragmentContract.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/UserContract.tsp`, `specification/app/resource-manager/Microsoft.App/ContainerApps/ContainerApp.tsp`, `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration/ConfigurationStore.tsp`, `specification/billing/resource-manager/Microsoft.Billing/Billing/BillingAccount.tsp`, `specification/billing/resource-manager/Microsoft.Billing/Billing/BillingProfile.tsp`, `specification/billing/resource-manager/Microsoft.Billing/Billing/Customer.tsp`, `specification/billing/resource-manager/Microsoft.Billing/Billing/Invoice.tsp`, `specification/billing/resource-manager/Microsoft.Billing/Billing/InvoiceSection.tsp`, `specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachine.tsp`, `specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineScaleSet.tsp`, `specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/VirtualMachineScaleSetVM.tsp`, `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/ManagedCluster.tsp`, `specification/cost-management/resource-manager/Microsoft.CostManagement/CostManagement/routes.tsp`, `specification/databoxedge/resource-manager/Microsoft.DataBoxEdge/DataBoxEdge/DataBoxEdgeDevice.tsp`, `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/Factory.tsp`, `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/PipelineResource.tsp`, `specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection/routes.tsp`, `specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices/CertificateResponse.tsp`, `specification/dnsresolver/resource-manager/Microsoft.Network/DnsResolver/routes.tsp`, `specification/edgeorder/resource-manager/Microsoft.EdgeOrder/EdgeOrder/routes.tsp`, `specification/education/resource-manager/Microsoft.Education/Education/LabDetails.tsp`, `specification/elastic/resource-manager/Microsoft.Elastic/Elastic/ElasticMonitorResource.tsp`, `specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/HybridConnectivity/EndpointResource.tsp`, `specification/management/resource-manager/Microsoft.Management/ManagementGroups/routes.tsp`, `specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricsApi/routes.tsp`, `specification/network/resource-manager/Microsoft.Network/Network/Network/ApplicationGateway.tsp`, `specification/network/resource-manager/Microsoft.Network/Network/Network/ExpressRouteCircuit.tsp`, `specification/network/resource-manager/Microsoft.Network/Network/Network/ExpressRouteGateway.tsp`, `specification/network/resource-manager/Microsoft.Network/Network/Network/NetworkManager.tsp`, `specification/network/resource-manager/Microsoft.Network/Network/Network/VirtualNetwork.tsp`, `specification/network/resource-manager/Microsoft.Network/Network/Network/VirtualNetworkGateway.tsp`, `specification/network/resource-manager/Microsoft.Network/Network/Network/VpnGateway.tsp`, `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/LogAnalyticsQueryPack.tsp`, `specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw/FirewallResource.tsp`, `specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw/GlobalRulestackResource.tsp`, `specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw/LocalRulesResource.tsp`, `specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw/LocalRulestackResource.tsp`, `specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw/PostRulesResource.tsp`, `specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw/PreRulesResource.tsp`, `specification/peering/resource-manager/Microsoft.Peering/Peering/routes.tsp`, `specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi/Remediation.tsp`, `specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi/routes.tsp`, `specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyTrackedResourcesApi/routes.tsp`, `specification/purview/resource-manager/Microsoft.Purview/Purview/routes.tsp`, `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup/ProtectionContainerResource.tsp`, `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup/routes.tsp`, `specification/resourceconnector/resource-manager/Microsoft.ResourceConnector/ResourceConnector/Appliance.tsp`, `specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/ResourceHealth/Event.tsp`, `specification/security/resource-manager/Microsoft.Security/Security/SqlVulnerabilityAssessmentsAPI/RuleResults.tsp`, `specification/security/resource-manager/Microsoft.Security/Security/SqlVulnerabilityAssessmentsAPI/SqlVulnerabilityAssessmentSettings.tsp`, `specification/sphere/resource-manager/Microsoft.AzureSphere/AzureSphere/models.tsp`, `specification/sql/resource-manager/Microsoft.Sql/SQL/Database.tsp`, `specification/sql/resource-manager/Microsoft.Sql/SQL/ManagedInstance.tsp`, `specification/sql/resource-manager/Microsoft.Sql/SQL/SqlVulnerabilityAssessment.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/StorageAccount.tsp`, `specification/web/resource-manager/Microsoft.Web/AppService/AnalysisDefinition.tsp`, `specification/web/resource-manager/Microsoft.Web/AppService/AppServiceEnvironmentResource.tsp`, `specification/web/resource-manager/Microsoft.Web/AppService/AppServicePlan.tsp`, `specification/web/resource-manager/Microsoft.Web/AppService/DetectorDefinitionResource.tsp`, `specification/web/resource-manager/Microsoft.Web/AppService/RecommendationRule.tsp`, `specification/web/resource-manager/Microsoft.Web/AppService/Site.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | 0 |
| Informational OAD records | 0 |
| TypeSpec findings | [10](#finding-review) |
| Exact | 0 |
| Probable (review required) | 0 |
| Intentional Swagger-only | 0 |
| Missed equivalent | 0 |
| TypeSpec-only | [10](#finding-review-typespec-only) |
| Ambiguous | 0 |

**Exact OAD coverage:** N/A
**Review-inclusive OAD coverage:** N/A

### By phase

| Phase | Independent OAD execution | TypeSpec mode | Outcome | Comparable OAD | Informational OAD | TypeSpec findings | Exact | Probable | Intentional gap | Missed equivalent | TypeSpec-only | Exact OAD coverage | Review-inclusive OAD coverage |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | [Swagger Breaking Change run 40272787459](https://github.com/Azure/azure-rest-api-specs/actions/runs/40272787459) | `same-version` | typespec-only-divergence | 0 | 0 | [10](#finding-review) | 0 | 0 | 0 | 0 | [10](#finding-review-typespec-only) | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 40272816379](https://github.com/Azure/azure-rest-api-specs/actions/runs/40272816379) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | 0 | [10](#finding-review) | 0 | 0 | 0 | 0 | 0 | [10](#finding-review-typespec-only) |
| B | Breaking Change (Cross-Version) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

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
| A | `ResourcePropertyTypeNarrowed` | Microsoft.DataFactory.Dfe | [head](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp#L28) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-reciprocal-narrowed-widened-pair-fad176ce4b744066](#issue-reciprocal-narrowed-widened-pair-fad176ce4b744066). | Review structural type identity and deduplicate reciprocal change reports. | [details](#finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-0) |
| A | `ResourcePropertyTypeWidened` | Microsoft.DataFactory.Dfe | [head](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp#L29) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-reciprocal-narrowed-widened-pair-fad176ce4b744066](#issue-reciprocal-narrowed-widened-pair-fad176ce4b744066). | Review structural type identity and deduplicate reciprocal change reports. | [details](#finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-1) |
| A | `ResponsePropertyTypeNarrowed` | body.properties.properties.details.properties.managementGroupAncestors.variants.TypeSpec.Array | [head](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/management/resource-manager/Microsoft.Management/ManagementGroups/models.tsp#L338) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-reciprocal-narrowed-widened-pair-75b76610dd13d6bb](#issue-reciprocal-narrowed-widened-pair-75b76610dd13d6bb). | Review structural type identity and deduplicate reciprocal change reports. | [details](#finding-typespec-specification-management-resource-manager-microsoft-management-managementgroups-tsp-a-0) |
| A | `ResponsePropertyTypeWidened` | body.properties.properties.details.properties.managementGroupAncestors.variants.TypeSpec.Array | [head](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/management/resource-manager/Microsoft.Management/ManagementGroups/ManagementGroup.tsp#L66) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-reciprocal-narrowed-widened-pair-75b76610dd13d6bb](#issue-reciprocal-narrowed-widened-pair-75b76610dd13d6bb). | Review structural type identity and deduplicate reciprocal change reports. | [details](#finding-typespec-specification-management-resource-manager-microsoft-management-managementgroups-tsp-a-1) |
| A | `ResponsePropertyTypeNarrowed` | body.properties.properties.children.variants.TypeSpec.Array | [head](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/management/resource-manager/Microsoft.Management/ManagementGroups/models.tsp#L300) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-reciprocal-narrowed-widened-pair-20175e6aba9b1a0c](#issue-reciprocal-narrowed-widened-pair-20175e6aba9b1a0c). | Review structural type identity and deduplicate reciprocal change reports. | [details](#finding-typespec-specification-management-resource-manager-microsoft-management-managementgroups-tsp-a-2) |
| A | `ResponsePropertyTypeWidened` | body.properties.properties.children.variants.TypeSpec.Array | [head](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/management/resource-manager/Microsoft.Management/ManagementGroups/ManagementGroup.tsp#L66) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-reciprocal-narrowed-widened-pair-20175e6aba9b1a0c](#issue-reciprocal-narrowed-widened-pair-20175e6aba9b1a0c). | Review structural type identity and deduplicate reciprocal change reports. | [details](#finding-typespec-specification-management-resource-manager-microsoft-management-managementgroups-tsp-a-3) |
| A | `ResponsePropertyTypeNarrowed` | body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentDisplayNameChain.variants.TypeSpec.Array | [head](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/management/resource-manager/Microsoft.Management/ManagementGroups/models.tsp#L960) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-reciprocal-narrowed-widened-pair-c7432694e4e4b53d](#issue-reciprocal-narrowed-widened-pair-c7432694e4e4b53d). | Review structural type identity and deduplicate reciprocal change reports. | [details](#finding-typespec-specification-management-resource-manager-microsoft-management-managementgroups-tsp-a-4) |
| A | `ResponsePropertyTypeWidened` | body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentDisplayNameChain.variants.TypeSpec.Array | [head](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/management/resource-manager/Microsoft.Management/ManagementGroups/routes.tsp#L149) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-reciprocal-narrowed-widened-pair-c7432694e4e4b53d](#issue-reciprocal-narrowed-widened-pair-c7432694e4e4b53d). | Review structural type identity and deduplicate reciprocal change reports. | [details](#finding-typespec-specification-management-resource-manager-microsoft-management-managementgroups-tsp-a-5) |
| A | `ResponsePropertyTypeNarrowed` | body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentNameChain.variants.TypeSpec.Array | [head](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/management/resource-manager/Microsoft.Management/ManagementGroups/models.tsp#L966) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-reciprocal-narrowed-widened-pair-b252ae4af3d887b8](#issue-reciprocal-narrowed-widened-pair-b252ae4af3d887b8). | Review structural type identity and deduplicate reciprocal change reports. | [details](#finding-typespec-specification-management-resource-manager-microsoft-management-managementgroups-tsp-a-6) |
| A | `ResponsePropertyTypeWidened` | body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentNameChain.variants.TypeSpec.Array | [head](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/management/resource-manager/Microsoft.Management/ManagementGroups/routes.tsp#L149) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-reciprocal-narrowed-widened-pair-b252ae4af3d887b8](#issue-reciprocal-narrowed-widened-pair-b252ae4af3d887b8). | Review structural type identity and deduplicate reciprocal change reports. | [details](#finding-typespec-specification-management-resource-manager-microsoft-management-managementgroups-tsp-a-7) |

<a id="finding-review-ambiguous"></a>
### Ambiguous findings

None.

<a id="finding-review-errors"></a>
### Evidence and execution failures

None.

<a id="finding-review-intentional"></a>
### Intentional Swagger-only gaps

None.

<a id="finding-review-informational"></a>
### Informational OAD records

None.

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 287308 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40272787459) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/83918e712fea9f46-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/6e7cc89a7ebdc813-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/02655bc5ca606e0a-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/7e4caeea0cfde644-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/335ae388a08390c8-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/a34772e539fc6c7c-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/abd2c09504813c31-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/5599e193f1121034-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/98079a721448fdcf-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/01ffabe384176ce6-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/76d554461a11dee6-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/75afa307558480df-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/fdce9b3d50c8f5e7-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/dce605c7f492cb0b-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/ebfa27b752f486d3-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/40109812c9d86495-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/71838e2726a00b80-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/13193124b3e677d4-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/199707c82451cbab-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/415a3dff56403bf9-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/728fdc65c7e6c46c-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/bfdb58eb2b9a6615-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/15cc0c37c089214c-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/36a14725e0624777-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/05203fab0aa52250-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/b4e88d8db91f2442-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/98a37186fad92bd3-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/7f0b1c5aba00a590-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/350ae053e121270a-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/5941c238374d798a-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/34d48bf6162c6014-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/618b7f7061854e62-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 262398 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40272816379) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/83918e712fea9f46-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/6e7cc89a7ebdc813-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/02655bc5ca606e0a-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/7e4caeea0cfde644-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/335ae388a08390c8-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/a34772e539fc6c7c-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/d1d4d254feed9d8f-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/abd2c09504813c31-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/5599e193f1121034-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/98079a721448fdcf-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/01ffabe384176ce6-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/76d554461a11dee6-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/75afa307558480df-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/fdce9b3d50c8f5e7-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/dce605c7f492cb0b-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/ebfa27b752f486d3-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/40109812c9d86495-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/71838e2726a00b80-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/13193124b3e677d4-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/199707c82451cbab-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/75b0ebe30c6090b3-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/415a3dff56403bf9-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/728fdc65c7e6c46c-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/bfdb58eb2b9a6615-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/15cc0c37c089214c-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/36a14725e0624777-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/05203fab0aa52250-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/b4e88d8db91f2442-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/98a37186fad92bd3-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/7f0b1c5aba00a590-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/350ae053e121270a-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/5941c238374d798a-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/34d48bf6162c6014-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/618b7f7061854e62-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertsManagement` | Phase A (`same-version`) | `2025-05-25-preview` → `2025-05-25-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/83918e712fea9f46-phase-a.md) |
| `specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement` | Phase A (`same-version`) | `2025-09-01-preview` → `2025-09-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/6e7cc89a7ebdc813-phase-a.md) |
| `specification/app/resource-manager/Microsoft.App/ContainerApps` | Phase A (`same-version`) | `2025-10-02-preview` → `2025-10-02-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/02655bc5ca606e0a-phase-a.md) |
| `specification/app/resource-manager/Microsoft.App/ContainerApps` | Phase A (`same-version`) | `2026-01-01` → `2026-01-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/02655bc5ca606e0a-phase-a.md) |
| `specification/app/resource-manager/Microsoft.App/ContainerApps` | Phase A (`same-version`) | `2026-03-02-preview` → `2026-03-02-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/02655bc5ca606e0a-phase-a.md) |
| `specification/app/resource-manager/Microsoft.App/ContainerApps` | Phase A (`same-version`) | `2026-07-01` → `2026-07-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/02655bc5ca606e0a-phase-a.md) |
| `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration` | Phase A (`same-version`) | `2025-02-01-preview` → `2025-02-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/7e4caeea0cfde644-phase-a.md) |
| `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration` | Phase A (`same-version`) | `2025-06-01-preview` → `2025-06-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/7e4caeea0cfde644-phase-a.md) |
| `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration` | Phase A (`same-version`) | `2025-08-01-preview` → `2025-08-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/7e4caeea0cfde644-phase-a.md) |
| `specification/billing/resource-manager/Microsoft.Billing/Billing` | Phase A (`same-version`) | `2024-04-01` → `2024-04-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/335ae388a08390c8-phase-a.md) |
| `specification/compute/resource-manager/Microsoft.Compute/Compute/Compute` | Phase A (`same-version`) | `2024-11-01` → `2024-11-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/a34772e539fc6c7c-phase-a.md) |
| `specification/compute/resource-manager/Microsoft.Compute/Compute/Compute` | Phase A (`same-version`) | `2025-04-01` → `2025-04-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/a34772e539fc6c7c-phase-a.md) |
| `specification/compute/resource-manager/Microsoft.Compute/Compute/Compute` | Phase A (`same-version`) | `2025-11-01` → `2025-11-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/a34772e539fc6c7c-phase-a.md) |
| `specification/compute/resource-manager/Microsoft.Compute/Compute/Compute` | Phase A (`same-version`) | `2026-03-01` → `2026-03-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/a34772e539fc6c7c-phase-a.md) |
| `specification/compute/resource-manager/Microsoft.Compute/Compute/Compute` | Phase A (`same-version`) | `2026-04-01` → `2026-04-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/a34772e539fc6c7c-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2025-10-01` → `2025-10-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2026-01-01` → `2026-01-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2026-02-01` → `2026-02-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2026-03-01` → `2026-03-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2026-04-01` → `2026-04-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2026-05-01` → `2026-05-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2026-06-01` → `2026-06-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2026-07-01` → `2026-07-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2026-08-01` → `2026-08-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2026-08-02-preview` → `2026-08-02-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/cost-management/resource-manager/Microsoft.CostManagement/CostManagement` | Phase A (`same-version`) | `2025-03-01` → `2025-03-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/abd2c09504813c31-phase-a.md) |
| `specification/cost-management/resource-manager/Microsoft.CostManagement/CostManagement` | Phase A (`same-version`) | `2026-06-01` → `2026-06-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/abd2c09504813c31-phase-a.md) |
| `specification/databoxedge/resource-manager/Microsoft.DataBoxEdge/DataBoxEdge` | Phase A (`same-version`) | `2023-12-01` → `2023-12-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/5599e193f1121034-phase-a.md) |
| `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory` | Phase A (`same-version`) | `2018-06-01` → `2018-06-01` | 1 | 2 | 4 | [generated Markdown](report-artifacts/typespec/98079a721448fdcf-phase-a.md) |
| `specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection` | Phase A (`same-version`) | `2025-07-01` → `2025-07-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/01ffabe384176ce6-phase-a.md) |
| `specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection` | Phase A (`same-version`) | `2025-09-01` → `2025-09-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/01ffabe384176ce6-phase-a.md) |
| `specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection` | Phase A (`same-version`) | `2026-03-01` → `2026-03-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/01ffabe384176ce6-phase-a.md) |
| `specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection` | Phase A (`same-version`) | `2026-04-01-preview` → `2026-04-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/01ffabe384176ce6-phase-a.md) |
| `specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection` | Phase A (`same-version`) | `2026-06-01` → `2026-06-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/01ffabe384176ce6-phase-a.md) |
| `specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection` | Phase A (`same-version`) | `2026-07-01` → `2026-07-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/01ffabe384176ce6-phase-a.md) |
| `specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection` | Phase A (`same-version`) | `2026-08-31-preview` → `2026-08-31-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/01ffabe384176ce6-phase-a.md) |
| `specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices` | Phase A (`same-version`) | `2025-02-01-preview` → `2025-02-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76d554461a11dee6-phase-a.md) |
| `specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices` | Phase A (`same-version`) | `2026-03-01-preview` → `2026-03-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76d554461a11dee6-phase-a.md) |
| `specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices` | Phase A (`same-version`) | `2026-06-01-preview` → `2026-06-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76d554461a11dee6-phase-a.md) |
| `specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices` | Phase A (`same-version`) | `2026-08-31` → `2026-08-31` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76d554461a11dee6-phase-a.md) |
| `specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices` | Phase A (`same-version`) | `2026-11-01` → `2026-11-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76d554461a11dee6-phase-a.md) |
| `specification/dnsresolver/resource-manager/Microsoft.Network/DnsResolver` | Phase A (`same-version`) | `2025-05-01` → `2025-05-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/75afa307558480df-phase-a.md) |
| `specification/dnsresolver/resource-manager/Microsoft.Network/DnsResolver` | Phase A (`same-version`) | `2025-10-01-preview` → `2025-10-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/75afa307558480df-phase-a.md) |
| `specification/edgeorder/resource-manager/Microsoft.EdgeOrder/EdgeOrder` | Phase A (`same-version`) | `2024-02-01` → `2024-02-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/fdce9b3d50c8f5e7-phase-a.md) |
| `specification/education/resource-manager/Microsoft.Education/Education` | Phase A (`same-version`) | `2021-12-01-preview` → `2021-12-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/dce605c7f492cb0b-phase-a.md) |
| `specification/elastic/resource-manager/Microsoft.Elastic/Elastic` | Phase A (`same-version`) | `2025-06-01` → `2025-06-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/ebfa27b752f486d3-phase-a.md) |
| `specification/elastic/resource-manager/Microsoft.Elastic/Elastic` | Phase A (`same-version`) | `2026-03-15-preview` → `2026-03-15-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/ebfa27b752f486d3-phase-a.md) |
| `specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/HybridConnectivity` | Phase A (`same-version`) | `2024-12-01` → `2024-12-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/40109812c9d86495-phase-a.md) |
| `specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/HybridConnectivity` | Phase A (`same-version`) | `2027-01-01` → `2027-01-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/40109812c9d86495-phase-a.md) |
| `specification/management/resource-manager/Microsoft.Management/ManagementGroups` | Phase A (`same-version`) | `2023-04-01` → `2023-04-01` | 1 | 8 | 16 | [generated Markdown](report-artifacts/typespec/71838e2726a00b80-phase-a.md) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricsApi` | Phase A (`same-version`) | `2024-02-01` → `2024-02-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/13193124b3e677d4-phase-a.md) |
| `specification/network/resource-manager/Microsoft.Network/Network/Network` | Phase A (`same-version`) | `2025-05-01` → `2025-05-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/199707c82451cbab-phase-a.md) |
| `specification/network/resource-manager/Microsoft.Network/Network/Network` | Phase A (`same-version`) | `2025-07-01` → `2025-07-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/199707c82451cbab-phase-a.md) |
| `specification/network/resource-manager/Microsoft.Network/Network/Network` | Phase A (`same-version`) | `2025-09-01` → `2025-09-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/199707c82451cbab-phase-a.md) |
| `specification/network/resource-manager/Microsoft.Network/Network/Network` | Phase A (`same-version`) | `2026-01-01` → `2026-01-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/199707c82451cbab-phase-a.md) |
| `specification/network/resource-manager/Microsoft.Network/Network/Network` | Phase A (`same-version`) | `2026-03-01` → `2026-03-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/199707c82451cbab-phase-a.md) |
| `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights` | Phase A (`same-version`) | `2025-07-01` → `2025-07-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) |
| `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights` | Phase A (`same-version`) | `2026-03-01` → `2026-03-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) |
| `specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw` | Phase A (`same-version`) | `2025-10-08` → `2025-10-08` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/415a3dff56403bf9-phase-a.md) |
| `specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw` | Phase A (`same-version`) | `2026-01-26-preview` → `2026-01-26-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/415a3dff56403bf9-phase-a.md) |
| `specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw` | Phase A (`same-version`) | `2026-05-11-preview` → `2026-05-11-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/415a3dff56403bf9-phase-a.md) |
| `specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw` | Phase A (`same-version`) | `2026-06-01` → `2026-06-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/415a3dff56403bf9-phase-a.md) |
| `specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw` | Phase A (`same-version`) | `2026-07-29-preview` → `2026-07-29-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/415a3dff56403bf9-phase-a.md) |
| `specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw` | Phase A (`same-version`) | `2026-08-27-preview` → `2026-08-27-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/415a3dff56403bf9-phase-a.md) |
| `specification/peering/resource-manager/Microsoft.Peering/Peering` | Phase A (`same-version`) | `2025-05-01` → `2025-05-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/728fdc65c7e6c46c-phase-a.md) |
| `specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi` | Phase A (`same-version`) | `2024-10-01` → `2024-10-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/bfdb58eb2b9a6615-phase-a.md) |
| `specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyTrackedResourcesApi` | Phase A (`same-version`) | `2018-07-01-preview` → `2018-07-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/15cc0c37c089214c-phase-a.md) |
| `specification/purview/resource-manager/Microsoft.Purview/Purview` | Phase A (`same-version`) | `2024-04-01-preview` → `2024-04-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/36a14725e0624777-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2025-02-01` → `2025-02-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2025-08-01` → `2025-08-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-01-01` → `2026-01-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-01-31-preview` → `2026-01-31-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-02-01` → `2026-02-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-03-31-preview` → `2026-03-31-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-05-01` → `2026-05-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-05-31-preview` → `2026-05-31-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-07-01` → `2026-07-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-08-01` → `2026-08-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-08-31-preview` → `2026-08-31-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-10-01` → `2026-10-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/resourceconnector/resource-manager/Microsoft.ResourceConnector/ResourceConnector` | Phase A (`same-version`) | `2022-10-27` → `2022-10-27` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/b4e88d8db91f2442-phase-a.md) |
| `specification/resourceconnector/resource-manager/Microsoft.ResourceConnector/ResourceConnector` | Phase A (`same-version`) | `2025-03-01-preview` → `2025-03-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/b4e88d8db91f2442-phase-a.md) |
| `specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/ResourceHealth` | Phase A (`same-version`) | `2025-05-01` → `2025-05-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/98a37186fad92bd3-phase-a.md) |
| `specification/security/resource-manager/Microsoft.Security/Security/SqlVulnerabilityAssessmentsAPI` | Phase A (`same-version`) | `2026-04-01-preview` → `2026-04-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/7f0b1c5aba00a590-phase-a.md) |
| `specification/sphere/resource-manager/Microsoft.AzureSphere/AzureSphere` | Phase A (`same-version`) | `2024-04-01` → `2024-04-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/350ae053e121270a-phase-a.md) |
| `specification/sql/resource-manager/Microsoft.Sql/SQL` | Phase A (`same-version`) | `2025-01-01` → `2025-01-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/5941c238374d798a-phase-a.md) |
| `specification/sql/resource-manager/Microsoft.Sql/SQL` | Phase A (`same-version`) | `2025-02-01-preview` → `2025-02-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/5941c238374d798a-phase-a.md) |
| `specification/sql/resource-manager/Microsoft.Sql/SQL` | Phase A (`same-version`) | `2025-08-01-preview` → `2025-08-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/5941c238374d798a-phase-a.md) |
| `specification/sql/resource-manager/Microsoft.Sql/SQL` | Phase A (`same-version`) | `2026-08-01-preview` → `2026-08-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/5941c238374d798a-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2025-06-01` → `2025-06-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2025-08-01` → `2025-08-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2026-04-01` → `2026-04-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2026-06-01` → `2026-06-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2026-09-01` → `2026-09-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| `specification/web/resource-manager/Microsoft.Web/AppService` | Phase A (`same-version`) | `2025-03-01` → `2025-03-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/618b7f7061854e62-phase-a.md) |
| `specification/web/resource-manager/Microsoft.Web/AppService` | Phase A (`same-version`) | `2025-05-01` → `2025-05-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/618b7f7061854e62-phase-a.md) |
| `specification/web/resource-manager/Microsoft.Web/AppService` | Phase A (`same-version`) | `2026-03-01-preview` → `2026-03-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/618b7f7061854e62-phase-a.md) |
| `specification/web/resource-manager/Microsoft.Web/AppService` | Phase A (`same-version`) | `2026-03-15` → `2026-03-15` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/618b7f7061854e62-phase-a.md) |
| `specification/web/resource-manager/Microsoft.Web/AppService` | Phase A (`same-version`) | `2026-07-15` → `2026-07-15` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/618b7f7061854e62-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-concordant-zero-5ac7e4748978c990"></a>`issue-concordant-zero-5ac7e4748978c990` | 0 | B | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase B. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-B` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |
| <a id="issue-reciprocal-narrowed-widened-pair-20175e6aba9b1a0c"></a><a id="issue-reciprocal-narrowed-widened-pair-75b76610dd13d6bb"></a><a id="issue-reciprocal-narrowed-widened-pair-b252ae4af3d887b8"></a><a id="issue-reciprocal-narrowed-widened-pair-c7432694e4e4b53d"></a><a id="issue-reciprocal-narrowed-widened-pair-fad176ce4b744066"></a>`issue-reciprocal-narrowed-widened-pair-20175e6aba9b1a0c` (+4 related) | 10 | A | `reciprocal-narrowed-widened-pair` | likely-detector-defect | The same target and version pair was reported as both narrowed and widened in one comparison. Inflates TypeSpec-only Phase A totals by two findings. | Review structural type identity and deduplicate reciprocal change reports. | high; generated | `typespec-finding:specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-2` — ResponsePropertyTypeNarrowed: Response union at body.properties.properties.children removed variant TypeSpec.Array.<br>`typespec-finding:specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-3` — ResponsePropertyTypeWidened: Response union at body.properties.properties.children added variant TypeSpec.Array.<br>`typespec-finding:specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-0` — ResponsePropertyTypeNarrowed: Response union at body.properties.properties.details.properties.managementGroupAncestors removed variant TypeSpec.Array.<br>`typespec-finding:specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-1` — ResponsePropertyTypeWidened: Response union at body.properties.properties.details.properties.managementGroupAncestors added variant TypeSpec.Array.<br>`typespec-finding:specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-6` — ResponsePropertyTypeNarrowed: Response union at body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentNameChain removed variant TypeSpec.Array.<br>`typespec-finding:specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-7` — ResponsePropertyTypeWidened: Response union at body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentNameChain added variant TypeSpec.Array.<br>`typespec-finding:specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-4` — ResponsePropertyTypeNarrowed: Response union at body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentDisplayNameChain removed variant TypeSpec.Array.<br>`typespec-finding:specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-5` — ResponsePropertyTypeWidened: Response union at body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentDisplayNameChain added variant TypeSpec.Array.<br>`typespec-finding:specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-0` — ResourcePropertyTypeNarrowed: Request union at body.properties.linkedServices.properties.properties.variants.OData.properties.typeProperties.properties.authHeaders removed variant TypeSpec.Record.<br>`typespec-finding:specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-1` — ResourcePropertyTypeWidened: Request union at body.properties.linkedServices.properties.properties.variants.OData.properties.typeProperties.properties.authHeaders added variant TypeSpec.Record. |
| <a id="issue-typespec-only-1fd8e31220f296cc"></a><a id="issue-typespec-only-36a078f5d786a9d6"></a><a id="issue-typespec-only-791f1b0b9ea125b0"></a><a id="issue-typespec-only-aa3e92a81d91afba"></a><a id="issue-typespec-only-c1afb72795f4f54e"></a><a id="issue-typespec-only-d9b78ed484901b51"></a><a id="issue-typespec-only-e160a9d5a26de8bf"></a><a id="issue-typespec-only-e89ffdf9621f6396"></a><a id="issue-typespec-only-eaba4e06cfc9055d"></a><a id="issue-typespec-only-f4fd02e2f41adda3"></a>`issue-typespec-only-1fd8e31220f296cc` (+9 related) | 10 | A | `typespec-only` | requires-review | The TypeSpec finding has no selected OAD equivalent. Contributes one finding to TypeSpec-only totals. | Confirm whether this is additional coverage, noise, or a matching gap. | medium; generated | `typespec-finding:specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-4` — ResponsePropertyTypeNarrowed: Response union at body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentDisplayNameChain removed variant TypeSpec.Array.<br>`typespec-finding:specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-0` — ResponsePropertyTypeNarrowed: Response union at body.properties.properties.details.properties.managementGroupAncestors removed variant TypeSpec.Array.<br>`typespec-finding:specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-0` — ResourcePropertyTypeNarrowed: Request union at body.properties.linkedServices.properties.properties.variants.OData.properties.typeProperties.properties.authHeaders removed variant TypeSpec.Record.<br>`typespec-finding:specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-1` — ResponsePropertyTypeWidened: Response union at body.properties.properties.details.properties.managementGroupAncestors added variant TypeSpec.Array.<br>`typespec-finding:specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-7` — ResponsePropertyTypeWidened: Response union at body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentNameChain added variant TypeSpec.Array.<br>`typespec-finding:specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-1` — ResourcePropertyTypeWidened: Request union at body.properties.linkedServices.properties.properties.variants.OData.properties.typeProperties.properties.authHeaders added variant TypeSpec.Record.<br>`typespec-finding:specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-2` — ResponsePropertyTypeNarrowed: Response union at body.properties.properties.children removed variant TypeSpec.Array.<br>`typespec-finding:specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-3` — ResponsePropertyTypeWidened: Response union at body.properties.properties.children added variant TypeSpec.Array.<br>`typespec-finding:specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-5` — ResponsePropertyTypeWidened: Response union at body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentDisplayNameChain added variant TypeSpec.Array.<br>`typespec-finding:specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-6` — ResponsePropertyTypeNarrowed: Response union at body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentNameChain removed variant TypeSpec.Array. |

## Finding details

<a id="finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-0"></a>
### specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-0 — `ResourcePropertyTypeNarrowed`

- **TypeSpec finding:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-0` — `ResourcePropertyTypeNarrowed` — Request union at body.properties.linkedServices.properties.properties.variants.OData.properties.typeProperties.properties.authHeaders removed variant TypeSpec.Record.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.DataFactory/factories/{}/addDataFlowToDebugSession; project `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory`; versions `2018-06-01` → `2018-06-01`
- **Source declaration identity:** `Microsoft.DataFactory.Dfe`
- **Wire identity:** `body.properties.linkedServices.properties.properties.variants.OData.properties.typeProperties.properties.authHeaders.variants.TypeSpec.Record`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/98079a721448fdcf-phase-a.md) (digest `ecba10a15f0b52414629cac59a2f3e83d8ec9faa94cc07cf5a7d13b0804f7d9c`)
- **TypeSpec source:** [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp, line 28](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp#L28)
- **Related analysis:** [issue-reciprocal-narrowed-widened-pair-fad176ce4b744066](#issue-reciprocal-narrowed-widened-pair-fad176ce4b744066)

<a id="finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-1"></a>
### specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-1 — `ResourcePropertyTypeWidened`

- **TypeSpec finding:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-1` — `ResourcePropertyTypeWidened` — Request union at body.properties.linkedServices.properties.properties.variants.OData.properties.typeProperties.properties.authHeaders added variant TypeSpec.Record.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.DataFactory/factories/{}/addDataFlowToDebugSession; project `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory`; versions `2018-06-01` → `2018-06-01`
- **Source declaration identity:** `Microsoft.DataFactory.Dfe`
- **Wire identity:** `body.properties.linkedServices.properties.properties.variants.OData.properties.typeProperties.properties.authHeaders.variants.TypeSpec.Record`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/98079a721448fdcf-phase-a.md) (digest `ecba10a15f0b52414629cac59a2f3e83d8ec9faa94cc07cf5a7d13b0804f7d9c`)
- **TypeSpec source:** [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp, line 29](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp#L29)
- **Related analysis:** [issue-reciprocal-narrowed-widened-pair-fad176ce4b744066](#issue-reciprocal-narrowed-widened-pair-fad176ce4b744066)

<a id="finding-typespec-specification-management-resource-manager-microsoft-management-managementgroups-tsp-a-0"></a>
### specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-0 — `ResponsePropertyTypeNarrowed`

- **TypeSpec finding:** `specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-0` — `ResponsePropertyTypeNarrowed` — Response union at body.properties.properties.details.properties.managementGroupAncestors removed variant TypeSpec.Array.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** GET /providers/Microsoft.Management/managementGroups/{}; project `specification/management/resource-manager/Microsoft.Management/ManagementGroups`; versions `2023-04-01` → `2023-04-01`
- **Source declaration identity:** unavailable; use the operation-relative wire identity
- **Wire identity:** `body.properties.properties.details.properties.managementGroupAncestors.variants.TypeSpec.Array`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/71838e2726a00b80-phase-a.md) (digest `99de60ace0cc1ef11af5c1a1906daa1d16216e2f92f4ef88ff5373909b5344e8`)
- **TypeSpec source:** [head: specification/management/resource-manager/Microsoft.Management/ManagementGroups/models.tsp, line 338](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/management/resource-manager/Microsoft.Management/ManagementGroups/models.tsp#L338)
- **Related analysis:** [issue-reciprocal-narrowed-widened-pair-75b76610dd13d6bb](#issue-reciprocal-narrowed-widened-pair-75b76610dd13d6bb)

<a id="finding-typespec-specification-management-resource-manager-microsoft-management-managementgroups-tsp-a-1"></a>
### specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-1 — `ResponsePropertyTypeWidened`

- **TypeSpec finding:** `specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-1` — `ResponsePropertyTypeWidened` — Response union at body.properties.properties.details.properties.managementGroupAncestors added variant TypeSpec.Array.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** GET /providers/Microsoft.Management/managementGroups/{}; project `specification/management/resource-manager/Microsoft.Management/ManagementGroups`; versions `2023-04-01` → `2023-04-01`
- **Source declaration identity:** unavailable; use the operation-relative wire identity
- **Wire identity:** `body.properties.properties.details.properties.managementGroupAncestors.variants.TypeSpec.Array`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/71838e2726a00b80-phase-a.md) (digest `99de60ace0cc1ef11af5c1a1906daa1d16216e2f92f4ef88ff5373909b5344e8`)
- **TypeSpec source:** [head: specification/management/resource-manager/Microsoft.Management/ManagementGroups/ManagementGroup.tsp, line 66](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/management/resource-manager/Microsoft.Management/ManagementGroups/ManagementGroup.tsp#L66)
- **Related analysis:** [issue-reciprocal-narrowed-widened-pair-75b76610dd13d6bb](#issue-reciprocal-narrowed-widened-pair-75b76610dd13d6bb)

<a id="finding-typespec-specification-management-resource-manager-microsoft-management-managementgroups-tsp-a-2"></a>
### specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-2 — `ResponsePropertyTypeNarrowed`

- **TypeSpec finding:** `specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-2` — `ResponsePropertyTypeNarrowed` — Response union at body.properties.properties.children removed variant TypeSpec.Array.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** GET /providers/Microsoft.Management/managementGroups/{}; project `specification/management/resource-manager/Microsoft.Management/ManagementGroups`; versions `2023-04-01` → `2023-04-01`
- **Source declaration identity:** unavailable; use the operation-relative wire identity
- **Wire identity:** `body.properties.properties.children.variants.TypeSpec.Array`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/71838e2726a00b80-phase-a.md) (digest `99de60ace0cc1ef11af5c1a1906daa1d16216e2f92f4ef88ff5373909b5344e8`)
- **TypeSpec source:** [head: specification/management/resource-manager/Microsoft.Management/ManagementGroups/models.tsp, line 300](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/management/resource-manager/Microsoft.Management/ManagementGroups/models.tsp#L300)
- **Related analysis:** [issue-reciprocal-narrowed-widened-pair-20175e6aba9b1a0c](#issue-reciprocal-narrowed-widened-pair-20175e6aba9b1a0c)

<a id="finding-typespec-specification-management-resource-manager-microsoft-management-managementgroups-tsp-a-3"></a>
### specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-3 — `ResponsePropertyTypeWidened`

- **TypeSpec finding:** `specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-3` — `ResponsePropertyTypeWidened` — Response union at body.properties.properties.children added variant TypeSpec.Array.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** GET /providers/Microsoft.Management/managementGroups/{}; project `specification/management/resource-manager/Microsoft.Management/ManagementGroups`; versions `2023-04-01` → `2023-04-01`
- **Source declaration identity:** unavailable; use the operation-relative wire identity
- **Wire identity:** `body.properties.properties.children.variants.TypeSpec.Array`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/71838e2726a00b80-phase-a.md) (digest `99de60ace0cc1ef11af5c1a1906daa1d16216e2f92f4ef88ff5373909b5344e8`)
- **TypeSpec source:** [head: specification/management/resource-manager/Microsoft.Management/ManagementGroups/ManagementGroup.tsp, line 66](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/management/resource-manager/Microsoft.Management/ManagementGroups/ManagementGroup.tsp#L66)
- **Related analysis:** [issue-reciprocal-narrowed-widened-pair-20175e6aba9b1a0c](#issue-reciprocal-narrowed-widened-pair-20175e6aba9b1a0c)

<a id="finding-typespec-specification-management-resource-manager-microsoft-management-managementgroups-tsp-a-4"></a>
### specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-4 — `ResponsePropertyTypeNarrowed`

- **TypeSpec finding:** `specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-4` — `ResponsePropertyTypeNarrowed` — Response union at body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentDisplayNameChain removed variant TypeSpec.Array.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /providers/Microsoft.Management/getEntities; project `specification/management/resource-manager/Microsoft.Management/ManagementGroups`; versions `2023-04-01` → `2023-04-01`
- **Source declaration identity:** unavailable; use the operation-relative wire identity
- **Wire identity:** `body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentDisplayNameChain.variants.TypeSpec.Array`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/71838e2726a00b80-phase-a.md) (digest `99de60ace0cc1ef11af5c1a1906daa1d16216e2f92f4ef88ff5373909b5344e8`)
- **TypeSpec source:** [head: specification/management/resource-manager/Microsoft.Management/ManagementGroups/models.tsp, line 960](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/management/resource-manager/Microsoft.Management/ManagementGroups/models.tsp#L960)
- **Related analysis:** [issue-reciprocal-narrowed-widened-pair-c7432694e4e4b53d](#issue-reciprocal-narrowed-widened-pair-c7432694e4e4b53d)

<a id="finding-typespec-specification-management-resource-manager-microsoft-management-managementgroups-tsp-a-5"></a>
### specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-5 — `ResponsePropertyTypeWidened`

- **TypeSpec finding:** `specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-5` — `ResponsePropertyTypeWidened` — Response union at body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentDisplayNameChain added variant TypeSpec.Array.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /providers/Microsoft.Management/getEntities; project `specification/management/resource-manager/Microsoft.Management/ManagementGroups`; versions `2023-04-01` → `2023-04-01`
- **Source declaration identity:** unavailable; use the operation-relative wire identity
- **Wire identity:** `body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentDisplayNameChain.variants.TypeSpec.Array`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/71838e2726a00b80-phase-a.md) (digest `99de60ace0cc1ef11af5c1a1906daa1d16216e2f92f4ef88ff5373909b5344e8`)
- **TypeSpec source:** [head: specification/management/resource-manager/Microsoft.Management/ManagementGroups/routes.tsp, line 149](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/management/resource-manager/Microsoft.Management/ManagementGroups/routes.tsp#L149)
- **Related analysis:** [issue-reciprocal-narrowed-widened-pair-c7432694e4e4b53d](#issue-reciprocal-narrowed-widened-pair-c7432694e4e4b53d)

<a id="finding-typespec-specification-management-resource-manager-microsoft-management-managementgroups-tsp-a-6"></a>
### specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-6 — `ResponsePropertyTypeNarrowed`

- **TypeSpec finding:** `specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-6` — `ResponsePropertyTypeNarrowed` — Response union at body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentNameChain removed variant TypeSpec.Array.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /providers/Microsoft.Management/getEntities; project `specification/management/resource-manager/Microsoft.Management/ManagementGroups`; versions `2023-04-01` → `2023-04-01`
- **Source declaration identity:** unavailable; use the operation-relative wire identity
- **Wire identity:** `body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentNameChain.variants.TypeSpec.Array`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/71838e2726a00b80-phase-a.md) (digest `99de60ace0cc1ef11af5c1a1906daa1d16216e2f92f4ef88ff5373909b5344e8`)
- **TypeSpec source:** [head: specification/management/resource-manager/Microsoft.Management/ManagementGroups/models.tsp, line 966](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/management/resource-manager/Microsoft.Management/ManagementGroups/models.tsp#L966)
- **Related analysis:** [issue-reciprocal-narrowed-widened-pair-b252ae4af3d887b8](#issue-reciprocal-narrowed-widened-pair-b252ae4af3d887b8)

<a id="finding-typespec-specification-management-resource-manager-microsoft-management-managementgroups-tsp-a-7"></a>
### specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-7 — `ResponsePropertyTypeWidened`

- **TypeSpec finding:** `specification/management/resource-manager/Microsoft.Management/ManagementGroups:tsp-A-7` — `ResponsePropertyTypeWidened` — Response union at body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentNameChain added variant TypeSpec.Array.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /providers/Microsoft.Management/getEntities; project `specification/management/resource-manager/Microsoft.Management/ManagementGroups`; versions `2023-04-01` → `2023-04-01`
- **Source declaration identity:** unavailable; use the operation-relative wire identity
- **Wire identity:** `body.properties.value.properties.properties.variants.Microsoft.Management.EntityInfoProperties.properties.parentNameChain.variants.TypeSpec.Array`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/71838e2726a00b80-phase-a.md) (digest `99de60ace0cc1ef11af5c1a1906daa1d16216e2f92f4ef88ff5373909b5344e8`)
- **TypeSpec source:** [head: specification/management/resource-manager/Microsoft.Management/ManagementGroups/routes.tsp, line 149](https://github.com/Azure/azure-rest-api-specs/blob/bf5e3ba5cb11720653e1303f87d99061928c07a0/specification/management/resource-manager/Microsoft.Management/ManagementGroups/routes.tsp#L149)
- **Related analysis:** [issue-reciprocal-narrowed-widened-pair-b252ae4af3d887b8](#issue-reciprocal-narrowed-widened-pair-b252ae4af3d887b8)

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
git -C target fetch --no-tags origin 54b3852a392c5cc504c4edf97f5c18fbcd5820cb bf5e3ba5cb11720653e1303f87d99061928c07a0
git -C target checkout --detach bf5e3ba5cb11720653e1303f87d99061928c07a0
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47590' --tool-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertsManagement

```powershell
Push-Location target
node $prepared.executable 'specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertsManagement' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-AlertsManagement-phase-a.json' --markdown-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-AlertsManagement-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertsManagement' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-AlertsManagement-phase-b-evidence.json' --markdown-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-AlertsManagement-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement

```powershell
Push-Location target
node $prepared.executable 'specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-apimanagement-resource-manager-Microsoft.ApiManagement-ApiManagement-phase-a.json' --markdown-output '../specification-apimanagement-resource-manager-Microsoft.ApiManagement-ApiManagement-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-apimanagement-resource-manager-Microsoft.ApiManagement-ApiManagement-phase-b-evidence.json' --markdown-output '../specification-apimanagement-resource-manager-Microsoft.ApiManagement-ApiManagement-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/app/resource-manager/Microsoft.App/ContainerApps

```powershell
Push-Location target
node $prepared.executable 'specification/app/resource-manager/Microsoft.App/ContainerApps' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-app-resource-manager-Microsoft.App-ContainerApps-phase-a.json' --markdown-output '../specification-app-resource-manager-Microsoft.App-ContainerApps-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/app/resource-manager/Microsoft.App/ContainerApps' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-app-resource-manager-Microsoft.App-ContainerApps-phase-b-evidence.json' --markdown-output '../specification-app-resource-manager-Microsoft.App-ContainerApps-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration

```powershell
Push-Location target
node $prepared.executable 'specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-appconfiguration-resource-manager-Microsoft.AppConfiguration-AppConfiguration-phase-a.json' --markdown-output '../specification-appconfiguration-resource-manager-Microsoft.AppConfiguration-AppConfiguration-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-appconfiguration-resource-manager-Microsoft.AppConfiguration-AppConfiguration-phase-b-evidence.json' --markdown-output '../specification-appconfiguration-resource-manager-Microsoft.AppConfiguration-AppConfiguration-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/billing/resource-manager/Microsoft.Billing/Billing

```powershell
Push-Location target
node $prepared.executable 'specification/billing/resource-manager/Microsoft.Billing/Billing' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-billing-resource-manager-Microsoft.Billing-Billing-phase-a.json' --markdown-output '../specification-billing-resource-manager-Microsoft.Billing-Billing-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/billing/resource-manager/Microsoft.Billing/Billing' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-billing-resource-manager-Microsoft.Billing-Billing-phase-b-evidence.json' --markdown-output '../specification-billing-resource-manager-Microsoft.Billing-Billing-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/compute/resource-manager/Microsoft.Compute/Compute/Compute

```powershell
Push-Location target
node $prepared.executable 'specification/compute/resource-manager/Microsoft.Compute/Compute/Compute' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-compute-resource-manager-Microsoft.Compute-Compute-Compute-phase-a.json' --markdown-output '../specification-compute-resource-manager-Microsoft.Compute-Compute-Compute-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/compute/resource-manager/Microsoft.Compute/Compute/Compute' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-compute-resource-manager-Microsoft.Compute-Compute-Compute-phase-b-evidence.json' --markdown-output '../specification-compute-resource-manager-Microsoft.Compute-Compute-Compute-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/containerservice/resource-manager/Microsoft.ContainerService/aks

```powershell
Push-Location target
node $prepared.executable 'specification/containerservice/resource-manager/Microsoft.ContainerService/aks' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-containerservice-resource-manager-Microsoft.ContainerService-aks-phase-a.json' --markdown-output '../specification-containerservice-resource-manager-Microsoft.ContainerService-aks-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/containerservice/resource-manager/Microsoft.ContainerService/aks' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-containerservice-resource-manager-Microsoft.ContainerService-aks-phase-b-evidence.json' --markdown-output '../specification-containerservice-resource-manager-Microsoft.ContainerService-aks-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/cost-management/resource-manager/Microsoft.CostManagement/CostManagement

```powershell
Push-Location target
node $prepared.executable 'specification/cost-management/resource-manager/Microsoft.CostManagement/CostManagement' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-cost-management-resource-manager-Microsoft.CostManagement-CostManagement-phase-a.json' --markdown-output '../specification-cost-management-resource-manager-Microsoft.CostManagement-CostManagement-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/cost-management/resource-manager/Microsoft.CostManagement/CostManagement' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-cost-management-resource-manager-Microsoft.CostManagement-CostManagement-phase-b-evidence.json' --markdown-output '../specification-cost-management-resource-manager-Microsoft.CostManagement-CostManagement-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/databoxedge/resource-manager/Microsoft.DataBoxEdge/DataBoxEdge

```powershell
Push-Location target
node $prepared.executable 'specification/databoxedge/resource-manager/Microsoft.DataBoxEdge/DataBoxEdge' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-databoxedge-resource-manager-Microsoft.DataBoxEdge-DataBoxEdge-phase-a.json' --markdown-output '../specification-databoxedge-resource-manager-Microsoft.DataBoxEdge-DataBoxEdge-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/databoxedge/resource-manager/Microsoft.DataBoxEdge/DataBoxEdge' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-databoxedge-resource-manager-Microsoft.DataBoxEdge-DataBoxEdge-phase-b-evidence.json' --markdown-output '../specification-databoxedge-resource-manager-Microsoft.DataBoxEdge-DataBoxEdge-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory

```powershell
Push-Location target
node $prepared.executable 'specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-datafactory-resource-manager-Microsoft.DataFactory-DataFactory-phase-a.json' --markdown-output '../specification-datafactory-resource-manager-Microsoft.DataFactory-DataFactory-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-datafactory-resource-manager-Microsoft.DataFactory-DataFactory-phase-b-evidence.json' --markdown-output '../specification-datafactory-resource-manager-Microsoft.DataFactory-DataFactory-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection

```powershell
Push-Location target
node $prepared.executable 'specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-dataprotection-resource-manager-Microsoft.DataProtection-DataProtection-phase-a.json' --markdown-output '../specification-dataprotection-resource-manager-Microsoft.DataProtection-DataProtection-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-dataprotection-resource-manager-Microsoft.DataProtection-DataProtection-phase-b-evidence.json' --markdown-output '../specification-dataprotection-resource-manager-Microsoft.DataProtection-DataProtection-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices

```powershell
Push-Location target
node $prepared.executable 'specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-deviceprovisioningservices-resource-manager-Microsoft.Devices-DeviceProvisioningServices-phase-a.json' --markdown-output '../specification-deviceprovisioningservices-resource-manager-Microsoft.Devices-DeviceProvisioningServices-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-deviceprovisioningservices-resource-manager-Microsoft.Devices-DeviceProvisioningServices-phase-b-evidence.json' --markdown-output '../specification-deviceprovisioningservices-resource-manager-Microsoft.Devices-DeviceProvisioningServices-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/dnsresolver/resource-manager/Microsoft.Network/DnsResolver

```powershell
Push-Location target
node $prepared.executable 'specification/dnsresolver/resource-manager/Microsoft.Network/DnsResolver' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-dnsresolver-resource-manager-Microsoft.Network-DnsResolver-phase-a.json' --markdown-output '../specification-dnsresolver-resource-manager-Microsoft.Network-DnsResolver-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/dnsresolver/resource-manager/Microsoft.Network/DnsResolver' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-dnsresolver-resource-manager-Microsoft.Network-DnsResolver-phase-b-evidence.json' --markdown-output '../specification-dnsresolver-resource-manager-Microsoft.Network-DnsResolver-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/edgeorder/resource-manager/Microsoft.EdgeOrder/EdgeOrder

```powershell
Push-Location target
node $prepared.executable 'specification/edgeorder/resource-manager/Microsoft.EdgeOrder/EdgeOrder' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-edgeorder-resource-manager-Microsoft.EdgeOrder-EdgeOrder-phase-a.json' --markdown-output '../specification-edgeorder-resource-manager-Microsoft.EdgeOrder-EdgeOrder-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/edgeorder/resource-manager/Microsoft.EdgeOrder/EdgeOrder' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-edgeorder-resource-manager-Microsoft.EdgeOrder-EdgeOrder-phase-b-evidence.json' --markdown-output '../specification-edgeorder-resource-manager-Microsoft.EdgeOrder-EdgeOrder-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/education/resource-manager/Microsoft.Education/Education

```powershell
Push-Location target
node $prepared.executable 'specification/education/resource-manager/Microsoft.Education/Education' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-education-resource-manager-Microsoft.Education-Education-phase-a.json' --markdown-output '../specification-education-resource-manager-Microsoft.Education-Education-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/education/resource-manager/Microsoft.Education/Education' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-education-resource-manager-Microsoft.Education-Education-phase-b-evidence.json' --markdown-output '../specification-education-resource-manager-Microsoft.Education-Education-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/elastic/resource-manager/Microsoft.Elastic/Elastic

```powershell
Push-Location target
node $prepared.executable 'specification/elastic/resource-manager/Microsoft.Elastic/Elastic' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-elastic-resource-manager-Microsoft.Elastic-Elastic-phase-a.json' --markdown-output '../specification-elastic-resource-manager-Microsoft.Elastic-Elastic-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/elastic/resource-manager/Microsoft.Elastic/Elastic' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-elastic-resource-manager-Microsoft.Elastic-Elastic-phase-b-evidence.json' --markdown-output '../specification-elastic-resource-manager-Microsoft.Elastic-Elastic-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/HybridConnectivity

```powershell
Push-Location target
node $prepared.executable 'specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/HybridConnectivity' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-hybridconnectivity-resource-manager-Microsoft.HybridConnectivity-HybridConnectivity-phase-a.json' --markdown-output '../specification-hybridconnectivity-resource-manager-Microsoft.HybridConnectivity-HybridConnectivity-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/HybridConnectivity' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-hybridconnectivity-resource-manager-Microsoft.HybridConnectivity-HybridConnectivity-phase-b-evidence.json' --markdown-output '../specification-hybridconnectivity-resource-manager-Microsoft.HybridConnectivity-HybridConnectivity-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/management/resource-manager/Microsoft.Management/ManagementGroups

```powershell
Push-Location target
node $prepared.executable 'specification/management/resource-manager/Microsoft.Management/ManagementGroups' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-management-resource-manager-Microsoft.Management-ManagementGroups-phase-a.json' --markdown-output '../specification-management-resource-manager-Microsoft.Management-ManagementGroups-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/management/resource-manager/Microsoft.Management/ManagementGroups' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-management-resource-manager-Microsoft.Management-ManagementGroups-phase-b-evidence.json' --markdown-output '../specification-management-resource-manager-Microsoft.Management-ManagementGroups-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricsApi

```powershell
Push-Location target
node $prepared.executable 'specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricsApi' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-monitor-resource-manager-Microsoft.Insights-Insights-MetricsApi-phase-a.json' --markdown-output '../specification-monitor-resource-manager-Microsoft.Insights-Insights-MetricsApi-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricsApi' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-monitor-resource-manager-Microsoft.Insights-Insights-MetricsApi-phase-b-evidence.json' --markdown-output '../specification-monitor-resource-manager-Microsoft.Insights-Insights-MetricsApi-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/network/resource-manager/Microsoft.Network/Network/Network

```powershell
Push-Location target
node $prepared.executable 'specification/network/resource-manager/Microsoft.Network/Network/Network' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-network-resource-manager-Microsoft.Network-Network-Network-phase-a.json' --markdown-output '../specification-network-resource-manager-Microsoft.Network-Network-Network-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/network/resource-manager/Microsoft.Network/Network/Network' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-network-resource-manager-Microsoft.Network-Network-Network-phase-b-evidence.json' --markdown-output '../specification-network-resource-manager-Microsoft.Network-Network-Network-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights

```powershell
Push-Location target
node $prepared.executable 'specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-operationalinsights-resource-manager-Microsoft.OperationalInsights-OperationalInsights-phase-a.json' --markdown-output '../specification-operationalinsights-resource-manager-Microsoft.OperationalInsights-OperationalInsights-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-operationalinsights-resource-manager-Microsoft.OperationalInsights-OperationalInsights-phase-b-evidence.json' --markdown-output '../specification-operationalinsights-resource-manager-Microsoft.OperationalInsights-OperationalInsights-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw

```powershell
Push-Location target
node $prepared.executable 'specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-paloaltonetworks-resource-manager-PaloAltoNetworks.Cloudngfw-Cloudngfw-phase-a.json' --markdown-output '../specification-paloaltonetworks-resource-manager-PaloAltoNetworks.Cloudngfw-Cloudngfw-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-paloaltonetworks-resource-manager-PaloAltoNetworks.Cloudngfw-Cloudngfw-phase-b-evidence.json' --markdown-output '../specification-paloaltonetworks-resource-manager-PaloAltoNetworks.Cloudngfw-Cloudngfw-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/peering/resource-manager/Microsoft.Peering/Peering

```powershell
Push-Location target
node $prepared.executable 'specification/peering/resource-manager/Microsoft.Peering/Peering' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-peering-resource-manager-Microsoft.Peering-Peering-phase-a.json' --markdown-output '../specification-peering-resource-manager-Microsoft.Peering-Peering-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/peering/resource-manager/Microsoft.Peering/Peering' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-peering-resource-manager-Microsoft.Peering-Peering-phase-b-evidence.json' --markdown-output '../specification-peering-resource-manager-Microsoft.Peering-Peering-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi

```powershell
Push-Location target
node $prepared.executable 'specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-policyinsights-resource-manager-Microsoft.PolicyInsights-PolicyInsights-PolicyInsightsApi-phase-a.json' --markdown-output '../specification-policyinsights-resource-manager-Microsoft.PolicyInsights-PolicyInsights-PolicyInsightsApi-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-policyinsights-resource-manager-Microsoft.PolicyInsights-PolicyInsights-PolicyInsightsApi-phase-b-evidence.json' --markdown-output '../specification-policyinsights-resource-manager-Microsoft.PolicyInsights-PolicyInsights-PolicyInsightsApi-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyTrackedResourcesApi

```powershell
Push-Location target
node $prepared.executable 'specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyTrackedResourcesApi' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-policyinsights-resource-manager-Microsoft.PolicyInsights-PolicyInsights-PolicyTrackedResourcesApi-phase-a.json' --markdown-output '../specification-policyinsights-resource-manager-Microsoft.PolicyInsights-PolicyInsights-PolicyTrackedResourcesApi-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyTrackedResourcesApi' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-policyinsights-resource-manager-Microsoft.PolicyInsights-PolicyInsights-PolicyTrackedResourcesApi-phase-b-evidence.json' --markdown-output '../specification-policyinsights-resource-manager-Microsoft.PolicyInsights-PolicyInsights-PolicyTrackedResourcesApi-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/purview/resource-manager/Microsoft.Purview/Purview

```powershell
Push-Location target
node $prepared.executable 'specification/purview/resource-manager/Microsoft.Purview/Purview' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-purview-resource-manager-Microsoft.Purview-Purview-phase-a.json' --markdown-output '../specification-purview-resource-manager-Microsoft.Purview-Purview-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/purview/resource-manager/Microsoft.Purview/Purview' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-purview-resource-manager-Microsoft.Purview-Purview-phase-b-evidence.json' --markdown-output '../specification-purview-resource-manager-Microsoft.Purview-Purview-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup

```powershell
Push-Location target
node $prepared.executable 'specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-recoveryservicesbackup-resource-manager-Microsoft.RecoveryServices-RecoveryServicesBackup-phase-a.json' --markdown-output '../specification-recoveryservicesbackup-resource-manager-Microsoft.RecoveryServices-RecoveryServicesBackup-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-recoveryservicesbackup-resource-manager-Microsoft.RecoveryServices-RecoveryServicesBackup-phase-b-evidence.json' --markdown-output '../specification-recoveryservicesbackup-resource-manager-Microsoft.RecoveryServices-RecoveryServicesBackup-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/resourceconnector/resource-manager/Microsoft.ResourceConnector/ResourceConnector

```powershell
Push-Location target
node $prepared.executable 'specification/resourceconnector/resource-manager/Microsoft.ResourceConnector/ResourceConnector' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-resourceconnector-resource-manager-Microsoft.ResourceConnector-ResourceConnector-phase-a.json' --markdown-output '../specification-resourceconnector-resource-manager-Microsoft.ResourceConnector-ResourceConnector-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/resourceconnector/resource-manager/Microsoft.ResourceConnector/ResourceConnector' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-resourceconnector-resource-manager-Microsoft.ResourceConnector-ResourceConnector-phase-b-evidence.json' --markdown-output '../specification-resourceconnector-resource-manager-Microsoft.ResourceConnector-ResourceConnector-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/ResourceHealth

```powershell
Push-Location target
node $prepared.executable 'specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/ResourceHealth' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-resourcehealth-resource-manager-Microsoft.ResourceHealth-ResourceHealth-phase-a.json' --markdown-output '../specification-resourcehealth-resource-manager-Microsoft.ResourceHealth-ResourceHealth-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/ResourceHealth' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-resourcehealth-resource-manager-Microsoft.ResourceHealth-ResourceHealth-phase-b-evidence.json' --markdown-output '../specification-resourcehealth-resource-manager-Microsoft.ResourceHealth-ResourceHealth-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/security/resource-manager/Microsoft.Security/Security/SqlVulnerabilityAssessmentsAPI

```powershell
Push-Location target
node $prepared.executable 'specification/security/resource-manager/Microsoft.Security/Security/SqlVulnerabilityAssessmentsAPI' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-security-resource-manager-Microsoft.Security-Security-SqlVulnerabilityAssessmentsAPI-phase-a.json' --markdown-output '../specification-security-resource-manager-Microsoft.Security-Security-SqlVulnerabilityAssessmentsAPI-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/security/resource-manager/Microsoft.Security/Security/SqlVulnerabilityAssessmentsAPI' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-security-resource-manager-Microsoft.Security-Security-SqlVulnerabilityAssessmentsAPI-phase-b-evidence.json' --markdown-output '../specification-security-resource-manager-Microsoft.Security-Security-SqlVulnerabilityAssessmentsAPI-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/sphere/resource-manager/Microsoft.AzureSphere/AzureSphere

```powershell
Push-Location target
node $prepared.executable 'specification/sphere/resource-manager/Microsoft.AzureSphere/AzureSphere' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-sphere-resource-manager-Microsoft.AzureSphere-AzureSphere-phase-a.json' --markdown-output '../specification-sphere-resource-manager-Microsoft.AzureSphere-AzureSphere-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/sphere/resource-manager/Microsoft.AzureSphere/AzureSphere' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-sphere-resource-manager-Microsoft.AzureSphere-AzureSphere-phase-b-evidence.json' --markdown-output '../specification-sphere-resource-manager-Microsoft.AzureSphere-AzureSphere-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/sql/resource-manager/Microsoft.Sql/SQL

```powershell
Push-Location target
node $prepared.executable 'specification/sql/resource-manager/Microsoft.Sql/SQL' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-sql-resource-manager-Microsoft.Sql-SQL-phase-a.json' --markdown-output '../specification-sql-resource-manager-Microsoft.Sql-SQL-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/sql/resource-manager/Microsoft.Sql/SQL' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-sql-resource-manager-Microsoft.Sql-SQL-phase-b-evidence.json' --markdown-output '../specification-sql-resource-manager-Microsoft.Sql-SQL-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/storage/resource-manager/Microsoft.Storage/Storage

```powershell
Push-Location target
node $prepared.executable 'specification/storage/resource-manager/Microsoft.Storage/Storage' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-storage-resource-manager-Microsoft.Storage-Storage-phase-a.json' --markdown-output '../specification-storage-resource-manager-Microsoft.Storage-Storage-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/storage/resource-manager/Microsoft.Storage/Storage' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-storage-resource-manager-Microsoft.Storage-Storage-phase-b-evidence.json' --markdown-output '../specification-storage-resource-manager-Microsoft.Storage-Storage-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/web/resource-manager/Microsoft.Web/AppService

```powershell
Push-Location target
node $prepared.executable 'specification/web/resource-manager/Microsoft.Web/AppService' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-web-resource-manager-Microsoft.Web-AppService-phase-a.json' --markdown-output '../specification-web-resource-manager-Microsoft.Web-AppService-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/web/resource-manager/Microsoft.Web/AppService' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-web-resource-manager-Microsoft.Web-AppService-phase-b-evidence.json' --markdown-output '../specification-web-resource-manager-Microsoft.Web-AppService-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
