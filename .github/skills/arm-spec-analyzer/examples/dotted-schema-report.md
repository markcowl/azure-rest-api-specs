# ARM TypeSpec services with dotted (`.`) schema names in generated OpenAPI

_Generated 2026-07-27 against `Azure/azure-rest-api-specs` `main`._

## Summary

- **100** ARM TypeSpec services have one or more schema names containing a `.` in the generated OpenAPI document(s) of their latest API version.
- **106** generated OpenAPI documents are affected across those services.
- **435** dotted schema definitions in total.

### Methodology

- **ARM spec**: a TypeSpec spec (a `tspconfig.yaml` + `.tsp` sources) whose `tspconfig.yaml` extends the `@azure-tools/typespec-azure-rulesets/resource-manager` linter ruleset, or that lives under a `resource-manager` directory.
- **Service grouping**: multiple nested spec directories inside one `resource-manager/<RPNS>/<Service>` directory are treated as a single service (e.g. `Network/Network`, `Network/Vmss`, `Network/common` → one `Network` service). The v2 `resource-manager/<RPNS>/<Service>` layout takes precedence over the older `.Management` layout for the same service.
- **Generated OpenAPI**: only `.json` documents carrying the `x-typespec-generated` extension in their `info` section are considered; `examples/` files are ignored.
- **Latest version**: the single newest api-version folder (`stable`/`preview`, `YYYY-MM-DD[-preview]`) across the service's generated docs; only docs present at that version are scanned.
- **Schema name**: keys under Swagger 2.0 `definitions` (and OpenAPI 3 `components.schemas`); a name “contains a `.`” if the key string includes the `.` character.

## Services (one row per service)

| # | Short name | tspconfig directory | Latest version | Affected OpenAPI docs | Dotted schema count |
|---|------------|---------------------|----------------|-----------------------|---------------------|
| 1 | `network` | `network/resource-manager/Microsoft.Network/Network` | `2025-07-01` | 7 | 158 |
| 2 | `containerservice` | `containerservice/resource-manager/Microsoft.ContainerService/fleet` | `2026-03-02-preview` | 1 | 16 |
| 3 | `dell` | `dell/resource-manager/Dell.Storage/DellStorage` | `2025-03-21` | 1 | 16 |
| 4 | `liftrastronomer` | `liftrastronomer/Astronomer.Astro.Management` | `2024-08-27` | 1 | 16 |
| 5 | `liftrarize` | `liftrarize/resource-manager/ArizeAi.ObservabilityEval/ObservabilityEval` | `2024-10-01` | 1 | 11 |
| 6 | `liftrhyperexecute` | `liftrhyperexecute/resource-manager/LambdaTest.HyperExecute/HyperExecute` | `2024-02-01` | 1 | 11 |
| 7 | `liftrpinecone` | `liftrpinecone/Pinecone.VectorDb.Management` | `2024-10-22-preview` | 1 | 11 |
| 8 | `liftrweightsandbiases` | `liftrweightsandbiases/resource-manager/Microsoft.WeightsAndBiases/WeightsAndBiases` | `2024-09-18` | 1 | 11 |
| 9 | `napster` | `napster/Napster.CompanionAPI.Management` | `2025-12-24-preview` | 1 | 11 |
| 10 | `purestorage` | `purestorage/PureStorage.Block.Management` | `2026-01-01-preview` | 1 | 10 |
| 11 | `liftrcommvault` | `liftrcommvault/Commvault.ContentStore.Management` | `2026-07-03-preview` | 1 | 9 |
| 12 | `liftrqumulo` | `liftrqumulo/resource-manager/Qumulo.Storage/QumuloStorage` | `2026-04-16` | 1 | 8 |
| 13 | `monitor` | `monitor/resource-manager/Microsoft.Insights/Insights` | `2026-01-01` | 1 | 8 |
| 14 | `discovery` | `discovery/Discovery.Management` | `2026-06-01` | 1 | 7 |
| 15 | `computeschedule` | `computeschedule/ComputeSchedule.Management` | `2026-04-15-preview` | 1 | 6 |
| 16 | `liftrmongodb` | `liftrmongodb/MongoDB.Atlas.Management` | `2026-03-01-preview` | 1 | 6 |
| 17 | `compute` | `compute/resource-manager/Microsoft.Compute/Compute` | `2026-03-02` | 1 | 5 |
| 18 | `compute` | `compute/resource-manager/Microsoft.Compute/Bulkactions` | `2026-07-06-preview` | 1 | 4 |
| 19 | `splitio` | `splitio/SplitIO.Experimentation.Management` | `2024-07-01-preview` | 1 | 4 |
| 20 | `keyvault` | `keyvault/resource-manager/Microsoft.KeyVault/KeyVault` | `2026-03-01-preview` | 1 | 3 |
| 21 | `monitoringservice` | `monitoringservice/resource-manager/Microsoft.Monitor/PipelineGroups` | `2026-04-01` | 1 | 3 |
| 22 | `onlineexperimentation` | `onlineexperimentation/OnlineExperimentation.Management` | `2025-08-01-preview` | 1 | 3 |
| 23 | `resourcegraph` | `resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph` | `2024-04-01` | 1 | 3 |
| 24 | `agricultureplatform` | `agricultureplatform/AgriculturePlatform.Management` | `2024-06-01-preview` | 1 | 2 |
| 25 | `applink` | `applink/AppLink.Management` | `2025-08-01-preview` | 1 | 2 |
| 26 | `authorization` | `authorization/resource-manager/Microsoft.Authorization/Authorization` | `2025-12-01-preview` | 1 | 2 |
| 27 | `azureresiliencemanagement` | `azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement` | `2026-06-01-preview` | 1 | 2 |
| 28 | `chaos` | `chaos/resource-manager/Microsoft.Chaos/Chaos` | `2026-08-01-preview` | 1 | 2 |
| 29 | `edge` | `edge/Microsoft.Edge.ConfigurationManager.Management` | `2026-03-01` | 1 | 2 |
| 30 | `edge` | `edge/Microsoft.Edge.Configurations.Management` | `2025-08-01` | 1 | 2 |
| 31 | `ews` | `ews/resource-manager/Microsoft.SecretSyncController/SecretSyncController` | `2024-08-21-preview` | 1 | 2 |
| 32 | `horizondb` | `horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb` | `2026-01-20-preview` | 1 | 2 |
| 33 | `manufacturingplatform` | `manufacturingplatform/Manufacturingplatform.Management` | `2025-03-01` | 1 | 2 |
| 34 | `monitoringservice` | `monitoringservice/resource-manager/Microsoft.Monitor/Accounts` | `2025-10-03` | 1 | 2 |
| 35 | `netapp` | `netapp/resource-manager/Microsoft.NetApp/NetApp` | `2026-05-15-preview` | 1 | 2 |
| 36 | `networkcloud` | `networkcloud/NetworkCloud.Management` | `2026-07-01` | 1 | 2 |
| 37 | `paloaltonetworks` | `paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw` | `2026-05-11-preview` | 1 | 2 |
| 38 | `policyinsights` | `policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights` | `2024-10-01` | 1 | 2 |
| 39 | `recoveryservicesbackup` | `recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | `2026-05-31-preview` | 1 | 2 |
| 40 | `security` | `security/resource-manager/Microsoft.Security/Security` | `2026-04-01-preview` | 1 | 2 |
| 41 | `sovereign` | `sovereign/Sovereign.Management` | `2025-02-27-preview` | 1 | 2 |
| 42 | `apimanagement` | `apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement` | `2025-09-01-preview` | 1 | 1 |
| 43 | `applicationinsights` | `applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights` | `2024-02-01-preview` | 1 | 1 |
| 44 | `azuredatatransfer` | `azuredatatransfer/AzureDataTransfer.Management` | `2026-02-06-preview` | 1 | 1 |
| 45 | `azurefleet` | `azurefleet/resource-manager/Microsoft.AzureFleet/AzureFleet` | `2026-06-01-preview` | 1 | 1 |
| 46 | `azurelargeinstance` | `azurelargeinstance/resource-manager/Microsoft.AzureLargeInstance/AzureLargeInstance` | `2024-08-01-preview` | 1 | 1 |
| 47 | `billingbenefits` | `billingbenefits/resource-manager/Microsoft.BillingBenefits/BillingBenefits` | `2026-06-01` | 1 | 1 |
| 48 | `billingtrust` | `billingtrust/resource-manager/Microsoft.BillingTrust/BillingTrust` | `2026-03-17-preview` | 1 | 1 |
| 49 | `cognitiveservices` | `cognitiveservices/CognitiveServices.Management` | `2026-05-15-preview` | 1 | 1 |
| 50 | `commerce` | `commerce/resource-manager/Microsoft.Commerce/Commerce` | `2015-06-01-preview` | 1 | 1 |
| 51 | `computebulkactions` | `computebulkactions/ComputeBulkActions.Management` | `2026-02-01-preview` | 1 | 1 |
| 52 | `computelimit` | `computelimit/resource-manager/Microsoft.ComputeLimit/ComputeLimit` | `2026-07-31` | 1 | 1 |
| 53 | `confluent` | `confluent/resource-manager/Microsoft.Confluent/Confluent` | `2026-06-02-preview` | 1 | 1 |
| 54 | `consumption` | `consumption/resource-manager/Microsoft.Consumption/Consumption` | `2024-08-01` | 1 | 1 |
| 55 | `containerservice` | `containerservice/resource-manager/Microsoft.ContainerService/aimanager` | `2026-05-02-preview` | 1 | 1 |
| 56 | `containerservice` | `containerservice/resource-manager/Microsoft.ContainerService/aks` | `2026-05-02-preview` | 1 | 1 |
| 57 | `containerservice` | `containerservice/resource-manager/Microsoft.ContainerService/preparedimagespecification` | `2026-05-02-preview` | 1 | 1 |
| 58 | `contosowidgetmanager` | `contosowidgetmanager/Contoso.Management` | `2021-11-01` | 1 | 1 |
| 59 | `cost-management` | `cost-management/resource-manager/Microsoft.CostManagement/CostManagement` | `2025-03-01` | 1 | 1 |
| 60 | `databasefleetmanager` | `databasefleetmanager/resource-manager/Microsoft.DatabaseFleetManager/DatabaseFleetManager` | `2025-02-01-preview` | 1 | 1 |
| 61 | `databasewatcher` | `databasewatcher/resource-manager/Microsoft.DatabaseWatcher/DatabaseWatcher` | `2025-01-02` | 1 | 1 |
| 62 | `datafactory` | `datafactory/resource-manager/Microsoft.DataFactory/DataFactory` | `2018-06-01` | 1 | 1 |
| 63 | `devopsinfrastructure` | `devopsinfrastructure/resource-manager/Microsoft.DevOpsInfrastructure/DevOpsInfrastructure` | `2026-07-03-preview` | 1 | 1 |
| 64 | `durabletask` | `durabletask/resource-manager/Microsoft.DurableTask/DurableTask` | `2026-05-01-preview` | 1 | 1 |
| 65 | `edge` | `edge/Microsoft.Edge.DisconnectedOperations.Management` | `2026-03-15` | 1 | 1 |
| 66 | `edge` | `edge/Microsoft.Edge.Sites.Management` | `2025-06-01` | 1 | 1 |
| 67 | `edgemarketplace` | `edgemarketplace/Microsoft.EdgeMarketPlace.Management` | `2025-10-01-preview` | 1 | 1 |
| 68 | `eventgrid` | `eventgrid/resource-manager/Microsoft.EventGrid/EventGrid` | `2025-07-15-preview` | 1 | 1 |
| 69 | `eventhub` | `eventhub/resource-manager/Microsoft.EventHub/Eventhub` | `2026-07-01-preview` | 1 | 1 |
| 70 | `fabric` | `fabric/resource-manager/Microsoft.Fabric/Fabric` | `2025-01-15-preview` | 1 | 1 |
| 71 | `fist` | `fist/resource-manager/Microsoft.IoTFirmwareDefense/IoTFirmwareDefense` | `2025-12-01-preview` | 1 | 1 |
| 72 | `github-network` | `github-network/GitHub.Network.Management` | `2024-04-02` | 1 | 1 |
| 73 | `guestconfiguration` | `guestconfiguration/resource-manager/Microsoft.GuestConfiguration/Assignments` | `2024-04-05` | 1 | 1 |
| 74 | `hybridconnectivity` | `hybridconnectivity/HybridConnectivity.Management` | `2024-12-01` | 1 | 1 |
| 75 | `impact` | `impact/Impact.Management` | `2026-01-01-preview` | 1 | 1 |
| 76 | `informatica` | `informatica/resource-manager/Informatica.DataManagement/Informatica` | `2025-11-27` | 1 | 1 |
| 77 | `iotoperationsorchestrator` | `iotoperationsorchestrator/IoTOperationsOrchestrator.Management` | `2023-10-04-preview` | 1 | 1 |
| 78 | `kubernetesruntime` | `kubernetesruntime/resource-manager/Microsoft.KubernetesRuntime/KubernetesRuntime` | `2024-03-01` | 1 | 1 |
| 79 | `machinelearningservices` | `machinelearningservices/MachineLearningServices.Management` | `2026-05-15-preview` | 1 | 1 |
| 80 | `migrate` | `migrate/resource-manager/Microsoft.Migrate/AssessmentProjects` | `2024-03-03-preview` | 1 | 1 |
| 81 | `mission` | `mission/resource-manager/Microsoft.Mission/Mission` | `2026-03-01-preview` | 1 | 1 |
| 82 | `mongocluster` | `mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | `2026-06-01` | 1 | 1 |
| 83 | `monitoringservice` | `monitoringservice/resource-manager/Microsoft.Monitor/Agents` | `2026-05-01-preview` | 1 | 1 |
| 84 | `monitoringservice` | `monitoringservice/resource-manager/Microsoft.Monitor/Slis` | `2025-03-01-preview` | 1 | 1 |
| 85 | `msi` | `msi/resource-manager/Microsoft.ManagedIdentity/ManagedIdentity` | `2025-05-31-preview` | 1 | 1 |
| 86 | `oracle` | `oracle/resource-manager/Oracle.Database/OracleDatabase` | `2025-09-01` | 1 | 1 |
| 87 | `portal` | `portal/Dashboard.Management` | `2026-04-01` | 1 | 1 |
| 88 | `portal` | `portal/TenantConfiguration.Management` | `2026-04-01` | 1 | 1 |
| 89 | `portalservices` | `portalservices/CopilotSettings.Management` | `2024-04-01` | 1 | 1 |
| 90 | `postgresql` | `postgresql/DBforPostgreSQL.Management` | `2026-04-01-preview` | 1 | 1 |
| 91 | `programenrollment` | `programenrollment/resource-manager/Microsoft.ProgramEnrollment/ProgramEnrollment` | `2026-03-01-preview` | 1 | 1 |
| 92 | `purview` | `purview/resource-manager/Microsoft.Purview/Purview` | `2024-04-01-preview` | 1 | 1 |
| 93 | `resourcehealth` | `resourcehealth/resource-manager/Microsoft.ResourceHealth/ResourceHealth` | `2025-05-01` | 1 | 1 |
| 94 | `securityinsights` | `securityinsights/resource-manager/Microsoft.SecurityInsights/SecurityInsights` | `2025-10-01-preview` | 1 | 1 |
| 95 | `sql` | `sql/resource-manager/Microsoft.Sql/SQL` | `2025-02-01-preview` | 1 | 1 |
| 96 | `storagediscovery` | `storagediscovery/resource-manager/Microsoft.StorageDiscovery/StorageDiscovery` | `2025-09-01` | 1 | 1 |
| 97 | `subscription` | `subscription/resource-manager/Microsoft.Subscription/Subscription` | `2025-11-01-preview` | 1 | 1 |
| 98 | `terraform` | `terraform/Microsoft.AzureTerraform.Management` | `2025-09-01-preview` | 1 | 1 |
| 99 | `vmware` | `vmware/resource-manager/Microsoft.AVS/AVS` | `2025-09-01` | 1 | 1 |
| 100 | `widget` | `widget/resource-manager/Microsoft.Widget/Widget` | `2024-10-01-preview` | 1 | 1 |

## Affected OpenAPI documents (one row per document)

| Short name | Latest version | OpenAPI document | Dotted schema count |
|------------|----------------|------------------|---------------------|
| `network` | `2025-07-01` | `network/resource-manager/Microsoft.Network/Network/stable/2025-07-01/applicationGateway.json` | 5 |
| `network` | `2025-07-01` | `network/resource-manager/Microsoft.Network/Network/stable/2025-07-01/common.json` | 50 |
| `network` | `2025-07-01` | `network/resource-manager/Microsoft.Network/Network/stable/2025-07-01/expressRoute.json` | 4 |
| `network` | `2025-07-01` | `network/resource-manager/Microsoft.Network/Network/stable/2025-07-01/loadBalancer.json` | 21 |
| `network` | `2025-07-01` | `network/resource-manager/Microsoft.Network/Network/stable/2025-07-01/networkGateway.json` | 2 |
| `network` | `2025-07-01` | `network/resource-manager/Microsoft.Network/Network/stable/2025-07-01/networkWatcher.json` | 8 |
| `network` | `2025-07-01` | `network/resource-manager/Microsoft.Network/Network/stable/2025-07-01/virtualNetwork.json` | 68 |
| `containerservice` | `2026-03-02-preview` | `containerservice/resource-manager/Microsoft.ContainerService/fleet/preview/2026-03-02-preview/fleets.json` | 16 |
| `dell` | `2025-03-21` | `dell/resource-manager/Dell.Storage/DellStorage/stable/2025-03-21/Dell.Storage.json` | 16 |
| `liftrastronomer` | `2024-08-27` | `liftrastronomer/resource-manager/Astronomer.Astro/stable/2024-08-27/astronomer.json` | 16 |
| `liftrarize` | `2024-10-01` | `liftrarize/resource-manager/ArizeAi.ObservabilityEval/ObservabilityEval/stable/2024-10-01/openapi.json` | 11 |
| `liftrhyperexecute` | `2024-02-01` | `liftrhyperexecute/resource-manager/LambdaTest.HyperExecute/HyperExecute/stable/2024-02-01/openapi.json` | 11 |
| `liftrpinecone` | `2024-10-22-preview` | `liftrpinecone/resource-manager/Pinecone.VectorDb/preview/2024-10-22-preview/openapi.json` | 11 |
| `liftrweightsandbiases` | `2024-09-18` | `liftrweightsandbiases/resource-manager/Microsoft.WeightsAndBiases/WeightsAndBiases/stable/2024-09-18/openapi.json` | 11 |
| `napster` | `2025-12-24-preview` | `napster/resource-manager/Napster.CompanionAPI/preview/2025-12-24-preview/openapi.json` | 11 |
| `purestorage` | `2026-01-01-preview` | `purestorage/resource-manager/PureStorage.Block/preview/2026-01-01-preview/purestorage.json` | 10 |
| `liftrcommvault` | `2026-07-03-preview` | `liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json` | 9 |
| `liftrqumulo` | `2026-04-16` | `liftrqumulo/resource-manager/Qumulo.Storage/QumuloStorage/stable/2026-04-16/Qumulo.Storage.json` | 8 |
| `monitor` | `2026-01-01` | `monitor/resource-manager/Microsoft.Insights/Insights/stable/2026-01-01/metricAlert.json` | 8 |
| `discovery` | `2026-06-01` | `discovery/resource-manager/Microsoft.Discovery/stable/2026-06-01/discovery.json` | 7 |
| `computeschedule` | `2026-04-15-preview` | `computeschedule/resource-manager/Microsoft.ComputeSchedule/preview/2026-04-15-preview/computeschedule.json` | 6 |
| `liftrmongodb` | `2026-03-01-preview` | `liftrmongodb/resource-manager/MongoDB.Atlas/preview/2026-03-01-preview/openapi.json` | 6 |
| `compute` | `2026-03-02` | `compute/resource-manager/Microsoft.Compute/Compute/stable/2026-03-02/DiskRP.json` | 5 |
| `compute` | `2026-07-06-preview` | `compute/resource-manager/Microsoft.Compute/Bulkactions/preview/2026-07-06-preview/Bulkactions.json` | 4 |
| `splitio` | `2024-07-01-preview` | `splitio/resource-manager/SplitIO.Experimentation/preview/2024-07-01-preview/splitio.json` | 4 |
| `keyvault` | `2026-03-01-preview` | `keyvault/resource-manager/Microsoft.KeyVault/KeyVault/preview/2026-03-01-preview/openapi.json` | 3 |
| `monitoringservice` | `2026-04-01` | `monitoringservice/resource-manager/Microsoft.Monitor/PipelineGroups/stable/2026-04-01/pipelineGroups.json` | 3 |
| `onlineexperimentation` | `2025-08-01-preview` | `onlineexperimentation/resource-manager/Microsoft.OnlineExperimentation/preview/2025-08-01-preview/OnlineExperimentationWorkspace.json` | 3 |
| `resourcegraph` | `2024-04-01` | `resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/stable/2024-04-01/resourcegraph.json` | 3 |
| `agricultureplatform` | `2024-06-01-preview` | `agricultureplatform/resource-manager/Microsoft.AgriculturePlatform/preview/2024-06-01-preview/openapi.json` | 2 |
| `applink` | `2025-08-01-preview` | `applink/resource-manager/Microsoft.AppLink/preview/2025-08-01-preview/openapi.json` | 2 |
| `authorization` | `2025-12-01-preview` | `authorization/resource-manager/Microsoft.Authorization/Authorization/preview/2025-12-01-preview/AttributeNamespaces.json` | 2 |
| `azureresiliencemanagement` | `2026-06-01-preview` | `azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement/preview/2026-06-01-preview/openapi.json` | 2 |
| `chaos` | `2026-08-01-preview` | `chaos/resource-manager/Microsoft.Chaos/Chaos/preview/2026-08-01-preview/openapi.json` | 2 |
| `edge` | `2026-03-01` | `edge/resource-manager/Microsoft.Edge/configurationmanager/stable/2026-03-01/configurationmanager.json` | 2 |
| `edge` | `2025-08-01` | `edge/resource-manager/Microsoft.Edge/configurations/stable/2025-08-01/configurations.json` | 2 |
| `ews` | `2024-08-21-preview` | `ews/resource-manager/Microsoft.SecretSyncController/SecretSyncController/preview/2024-08-21-preview/secretsynccontroller.json` | 2 |
| `horizondb` | `2026-01-20-preview` | `horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/preview/2026-01-20-preview/openapi.json` | 2 |
| `manufacturingplatform` | `2025-03-01` | `manufacturingplatform/resource-manager/Microsoft.ManufacturingPlatform/stable/2025-03-01/manufacturingplatform.json` | 2 |
| `monitoringservice` | `2025-10-03` | `monitoringservice/resource-manager/Microsoft.Monitor/Accounts/stable/2025-10-03/azuremonitorworkspace.json` | 2 |
| `netapp` | `2026-05-15-preview` | `netapp/resource-manager/Microsoft.NetApp/NetApp/preview/2026-05-15-preview/netapp.json` | 2 |
| `networkcloud` | `2026-07-01` | `networkcloud/resource-manager/Microsoft.NetworkCloud/stable/2026-07-01/networkcloud.json` | 2 |
| `paloaltonetworks` | `2026-05-11-preview` | `paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw/preview/2026-05-11-preview/PaloAltoNetworks.Cloudngfw.json` | 2 |
| `policyinsights` | `2024-10-01` | `policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/stable/2024-10-01/openapi.json` | 2 |
| `recoveryservicesbackup` | `2026-05-31-preview` | `recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup/preview/2026-05-31-preview/bms.json` | 2 |
| `security` | `2026-04-01-preview` | `security/resource-manager/Microsoft.Security/Security/preview/2026-04-01-preview/security-SqlVulnerabilityAssessments.json` | 2 |
| `sovereign` | `2025-02-27-preview` | `sovereign/resource-manager/Microsoft.Sovereign/preview/2025-02-27-preview/sovereign.json` | 2 |
| `apimanagement` | `2025-09-01-preview` | `apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/preview/2025-09-01-preview/openapi.json` | 1 |
| `applicationinsights` | `2024-02-01-preview` | `applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/preview/2024-02-01-preview/deletedWorkbooks_API.json` | 1 |
| `azuredatatransfer` | `2026-02-06-preview` | `azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/preview/2026-02-06-preview/azuredatatransfer.json` | 1 |
| `azurefleet` | `2026-06-01-preview` | `azurefleet/resource-manager/Microsoft.AzureFleet/AzureFleet/preview/2026-06-01-preview/azurefleet.json` | 1 |
| `azurelargeinstance` | `2024-08-01-preview` | `azurelargeinstance/resource-manager/Microsoft.AzureLargeInstance/AzureLargeInstance/preview/2024-08-01-preview/azurelargeinstance.json` | 1 |
| `billingbenefits` | `2026-06-01` | `billingbenefits/resource-manager/Microsoft.BillingBenefits/BillingBenefits/stable/2026-06-01/billingbenefits.json` | 1 |
| `billingtrust` | `2026-03-17-preview` | `billingtrust/resource-manager/Microsoft.BillingTrust/BillingTrust/preview/2026-03-17-preview/openapi.json` | 1 |
| `cognitiveservices` | `2026-05-15-preview` | `cognitiveservices/resource-manager/Microsoft.CognitiveServices/preview/2026-05-15-preview/cognitiveservices.json` | 1 |
| `commerce` | `2015-06-01-preview` | `commerce/resource-manager/Microsoft.Commerce/Commerce/preview/2015-06-01-preview/commerce.json` | 1 |
| `computebulkactions` | `2026-02-01-preview` | `computebulkactions/resource-manager/Microsoft.ComputeBulkActions/preview/2026-02-01-preview/computebulkactions.json` | 1 |
| `computelimit` | `2026-07-31` | `computelimit/resource-manager/Microsoft.ComputeLimit/ComputeLimit/stable/2026-07-31/ComputeLimit.json` | 1 |
| `confluent` | `2026-06-02-preview` | `confluent/resource-manager/Microsoft.Confluent/Confluent/preview/2026-06-02-preview/confluent.json` | 1 |
| `consumption` | `2024-08-01` | `consumption/resource-manager/Microsoft.Consumption/Consumption/stable/2024-08-01/openapi.json` | 1 |
| `containerservice` | `2026-05-02-preview` | `containerservice/resource-manager/Microsoft.ContainerService/aimanager/preview/2026-05-02-preview/aimanagers.json` | 1 |
| `containerservice` | `2026-05-02-preview` | `containerservice/resource-manager/Microsoft.ContainerService/aks/preview/2026-05-02-preview/managedClusters.json` | 1 |
| `containerservice` | `2026-05-02-preview` | `containerservice/resource-manager/Microsoft.ContainerService/preparedimagespecification/preview/2026-05-02-preview/preparedimagespecification.json` | 1 |
| `contosowidgetmanager` | `2021-11-01` | `contosowidgetmanager/resource-manager/Microsoft.Contoso/stable/2021-11-01/contoso.json` | 1 |
| `cost-management` | `2025-03-01` | `cost-management/resource-manager/Microsoft.CostManagement/CostManagement/stable/2025-03-01/openapi.json` | 1 |
| `databasefleetmanager` | `2025-02-01-preview` | `databasefleetmanager/resource-manager/Microsoft.DatabaseFleetManager/DatabaseFleetManager/preview/2025-02-01-preview/databasefleetmanager.json` | 1 |
| `databasewatcher` | `2025-01-02` | `databasewatcher/resource-manager/Microsoft.DatabaseWatcher/DatabaseWatcher/stable/2025-01-02/Watcher.json` | 1 |
| `datafactory` | `2018-06-01` | `datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json` | 1 |
| `devopsinfrastructure` | `2026-07-03-preview` | `devopsinfrastructure/resource-manager/Microsoft.DevOpsInfrastructure/DevOpsInfrastructure/preview/2026-07-03-preview/devopsinfrastructure.json` | 1 |
| `durabletask` | `2026-05-01-preview` | `durabletask/resource-manager/Microsoft.DurableTask/DurableTask/preview/2026-05-01-preview/durabletask.json` | 1 |
| `edge` | `2026-03-15` | `edge/resource-manager/Microsoft.Edge/disconnectedOperations/stable/2026-03-15/disconnectedOperations.json` | 1 |
| `edge` | `2025-06-01` | `edge/resource-manager/Microsoft.Edge/sites/stable/2025-06-01/sites.json` | 1 |
| `edgemarketplace` | `2025-10-01-preview` | `edgemarketplace/resource-manager/Microsoft.EdgeMarketplace/preview/2025-10-01-preview/edgemarketplace.json` | 1 |
| `eventgrid` | `2025-07-15-preview` | `eventgrid/resource-manager/Microsoft.EventGrid/EventGrid/preview/2025-07-15-preview/EventGrid.json` | 1 |
| `eventhub` | `2026-07-01-preview` | `eventhub/resource-manager/Microsoft.EventHub/Eventhub/preview/2026-07-01-preview/openapi.json` | 1 |
| `fabric` | `2025-01-15-preview` | `fabric/resource-manager/Microsoft.Fabric/Fabric/preview/2025-01-15-preview/fabric.json` | 1 |
| `fist` | `2025-12-01-preview` | `fist/resource-manager/Microsoft.IoTFirmwareDefense/IoTFirmwareDefense/preview/2025-12-01-preview/iotfirmwaredefense.json` | 1 |
| `github-network` | `2024-04-02` | `github-network/resource-manager/GitHub.Network/stable/2024-04-02/GitHub.Network.json` | 1 |
| `guestconfiguration` | `2024-04-05` | `guestconfiguration/resource-manager/Microsoft.GuestConfiguration/Assignments/stable/2024-04-05/guestconfiguration.json` | 1 |
| `hybridconnectivity` | `2024-12-01` | `hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/stable/2024-12-01/hybridconnectivity.json` | 1 |
| `impact` | `2026-01-01-preview` | `impact/resource-manager/Microsoft.Impact/preview/2026-01-01-preview/impact.json` | 1 |
| `informatica` | `2025-11-27` | `informatica/resource-manager/Informatica.DataManagement/Informatica/stable/2025-11-27/openapi.json` | 1 |
| `iotoperationsorchestrator` | `2023-10-04-preview` | `iotoperationsorchestrator/resource-manager/Microsoft.IoTOperationsOrchestrator/preview/2023-10-04-preview/openapi.json` | 1 |
| `kubernetesruntime` | `2024-03-01` | `kubernetesruntime/resource-manager/Microsoft.KubernetesRuntime/KubernetesRuntime/stable/2024-03-01/kubernetesruntime.json` | 1 |
| `machinelearningservices` | `2026-05-15-preview` | `machinelearningservices/resource-manager/Microsoft.MachineLearningServices/preview/2026-05-15-preview/openapi.json` | 1 |
| `migrate` | `2024-03-03-preview` | `migrate/resource-manager/Microsoft.Migrate/AssessmentProjects/preview/2024-03-03-preview/assessmentProjects.json` | 1 |
| `mission` | `2026-03-01-preview` | `mission/resource-manager/Microsoft.Mission/Mission/preview/2026-03-01-preview/openapi.json` | 1 |
| `mongocluster` | `2026-06-01` | `mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/stable/2026-06-01/mongoCluster.json` | 1 |
| `monitoringservice` | `2026-05-01-preview` | `monitoringservice/resource-manager/Microsoft.Monitor/Agents/preview/2026-05-01-preview/agents.json` | 1 |
| `monitoringservice` | `2025-03-01-preview` | `monitoringservice/resource-manager/Microsoft.Monitor/Slis/preview/2025-03-01-preview/openapi.json` | 1 |
| `msi` | `2025-05-31-preview` | `msi/resource-manager/Microsoft.ManagedIdentity/ManagedIdentity/preview/2025-05-31-preview/ManagedIdentity.json` | 1 |
| `oracle` | `2025-09-01` | `oracle/resource-manager/Oracle.Database/OracleDatabase/stable/2025-09-01/openapi.json` | 1 |
| `portal` | `2026-04-01` | `portal/resource-manager/Microsoft.Portal/stable/2026-04-01/portal.json` | 1 |
| `portal` | `2026-04-01` | `portal/resource-manager/Microsoft.Portal/stable/2026-04-01/tenantConfiguration.json` | 1 |
| `portalservices` | `2024-04-01` | `portalservices/resource-manager/Microsoft.PortalServices/copilotSettings/stable/2024-04-01/copilotSettings.json` | 1 |
| `postgresql` | `2026-04-01-preview` | `postgresql/resource-manager/Microsoft.DBforPostgreSQL/preview/2026-04-01-preview/openapi.json` | 1 |
| `programenrollment` | `2026-03-01-preview` | `programenrollment/resource-manager/Microsoft.ProgramEnrollment/ProgramEnrollment/preview/2026-03-01-preview/openapi.json` | 1 |
| `purview` | `2024-04-01-preview` | `purview/resource-manager/Microsoft.Purview/Purview/preview/2024-04-01-preview/purview.json` | 1 |
| `resourcehealth` | `2025-05-01` | `resourcehealth/resource-manager/Microsoft.ResourceHealth/ResourceHealth/stable/2025-05-01/ResourceHealth.json` | 1 |
| `securityinsights` | `2025-10-01-preview` | `securityinsights/resource-manager/Microsoft.SecurityInsights/SecurityInsights/preview/2025-10-01-preview/openapi.json` | 1 |
| `sql` | `2025-02-01-preview` | `sql/resource-manager/Microsoft.Sql/SQL/preview/2025-02-01-preview/common.json` | 1 |
| `storagediscovery` | `2025-09-01` | `storagediscovery/resource-manager/Microsoft.StorageDiscovery/StorageDiscovery/stable/2025-09-01/storageDiscoveryWorkspace.json` | 1 |
| `subscription` | `2025-11-01-preview` | `subscription/resource-manager/Microsoft.Subscription/Subscription/preview/2025-11-01-preview/subscriptions.json` | 1 |
| `terraform` | `2025-09-01-preview` | `terraform/resource-manager/Microsoft.AzureTerraform/preview/2025-09-01-preview/export.json` | 1 |
| `vmware` | `2025-09-01` | `vmware/resource-manager/Microsoft.AVS/AVS/stable/2025-09-01/vmware.json` | 1 |
| `widget` | `2024-10-01-preview` | `widget/resource-manager/Microsoft.Widget/Widget/preview/2024-10-01-preview/widget.json` | 1 |
