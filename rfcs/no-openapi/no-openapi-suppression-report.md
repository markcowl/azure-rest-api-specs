# Resource-manager specs suppressing `@azure-tools/typespec-azure-core/no-openapi`

- **Source:** `Azure/azure-rest-api-specs`, branch `main` (commit `a816c8f8d0`)
- **Generated:** 2026-06-26 (UTC)

## What was measured

A **spec** is a directory containing a `tspconfig.yaml` and a `main.tsp` in the same directory, together with every `.tsp` file reachable by recursively following `import` statements starting from `main.tsp`.

A **resource-manager spec** is a spec whose file set imports the `@azure-tools/typespec-azure-resource-manager` library.

A spec **suppresses the rule** if any file in its file set contains a `#suppress "@azure-tools/typespec-azure-core/no-openapi" ...` directive.

The `no-openapi` rule fires on decorators from the `TypeSpec.OpenAPI` (`@typespec/openapi`) **and** `Autorest` (`@azure-tools/typespec-autorest`) namespaces. This report covers **both** families: the `@typespec/openapi` decorators `@operationId`, `@extension`, `@defaultResponse`, `@externalDocs`, `@info`, `@tagMetadata`, and the `@azure-tools/typespec-autorest` decorators `@useRef`, `@example`.

> `@useRef` / `@example` are attributed to the spec only when they are tied to a `no-openapi` suppression. (The Autorest `@example` is text-identical to the core `TypeSpec.@example`, but only the Autorest one triggers — and is therefore suppressed by — the rule, so the suppression tie disambiguates them.)

> Some resource-manager specs carry a `no-openapi` suppression that is **not** tied to any `@typespec/openapi` or `@azure-tools/typespec-autorest` decorator (an unnecessary suppression added in bulk by the Swagger-to-TypeSpec converter). These are listed in the **No usage** table — their suppression could simply be removed.

## Summary

- **Resource-manager specs that suppress `no-openapi`: 109**
- Specs that use a `@typespec/openapi` or `@azure-tools/typespec-autorest` decorator: 90
- Specs that suppress but use **neither** library's decorators (suppression removable): 19

### `@typespec/openapi` decorators usage (number of RM specs using each)

| Decorator | RM specs using it |
| --- | ---: |
| `@operationId` | 59 |
| `@extension` | 32 |
| `@externalDocs` | 16 |

### `@azure-tools/typespec-autorest` decorators usage (number of RM specs using each)

| Decorator | RM specs using it |
| --- | ---: |
| `@useRef` | 0 |
| `@example` | 1 |

### Unique `x-ms-*` extension names used via `@extension` (15 unique)

Across the 32 RM specs that use `@extension`:

| `x-ms-*` extension name | RM specs using it |
| --- | ---: |
| `x-ms-long-running-operation-options` | 7 |
| `x-ms-identifiers` | 6 |
| `x-ms-long-running-operation` | 6 |
| `x-ms-secret` | 5 |
| `x-ms-client-flatten` | 3 |
| `x-ms-pageable` | 3 |
| `x-ms-parameter-location` | 3 |
| `x-ms-azure-resource` | 2 |
| `x-ms-skip-url-encoding` | 2 |
| `x-ms-api-version` | 1 |
| `x-ms-client-name` | 1 |
| `x-ms-client-request-id` | 1 |
| `x-ms-enum` | 1 |
| `x-ms-mutability` | 1 |
| `x-ms-parameter-grouping` | 1 |

## Severity classification

Each spec is assigned the **highest** severity it triggers, based on the `@typespec/openapi` and `@azure-tools/typespec-autorest` decorators and `x-ms-*` extensions it uses:

- **High** — uses any of: `x-ms-long-running-operation`, `x-ms-long-running-operation-options`, `x-ms-pageable`, `x-ms-skip-url-encoding`, `x-ms-secret`.
- **Medium** — uses `@operationId`, `@useRef`, `@example`, or any of: `x-ms-azure-resource`, `x-ms-parameter-location`, `x-ms-client-name`, `x-ms-parameter-grouping`.
- **Low** — any other `no-openapi` usage (e.g. `@extension` with other `x-ms-*` keys, `@externalDocs`).
- **No usage** — the suppression is **not** tied to any `@typespec/openapi` or `@azure-tools/typespec-autorest` decorator; the suppression could simply be removed.

| Severity | RM specs |
| --- | ---: |
| High | 18 |
| Medium | 57 |
| Low | 15 |
| No usage | 19 |
| **Total** | **109** |

## Per-spec detail (by severity)

`Spec directory` is the directory containing the spec's `tspconfig.yaml`. `# suppressions` is the count of `no-openapi` `#suppress` directives across the spec's files.

### High severity (18 specs)

| Spec directory (tspconfig.yaml) | # suppressions | `@typespec/openapi` decorators | `@azure-tools/typespec-autorest` decorators | `x-ms-*` extensions used |
| --- | ---: | --- | --- | --- |
| `specification/azurefleet/resource-manager/Microsoft.AzureFleet/AzureFleet` | 1 | `@extension` | — | `x-ms-secret` |
| `specification/azurelargeinstance/resource-manager/Microsoft.AzureLargeInstance/AzureLargeInstance` | 1 | `@extension` | — | `x-ms-long-running-operation`, `x-ms-long-running-operation-options` |
| `specification/chaos/resource-manager/Microsoft.Chaos/Chaos` | 8 | `@extension` | — | `x-ms-pageable` |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/fleet` | 6 | `@operationId`, `@extension` | — | `x-ms-long-running-operation`, `x-ms-long-running-operation-options` |
| `specification/containerstorage/resource-manager/Microsoft.ContainerStorage/ContainerStorage` | 3 | `@extension` | — | `x-ms-long-running-operation-options` |
| `specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB` | 10 | `@operationId`, `@extension` | — | `x-ms-pageable` |
| `specification/databasewatcher/DatabaseWatcher.Management` | 2 | `@extension` | — | `x-ms-long-running-operation`, `x-ms-long-running-operation-options` |
| `specification/dell/Dell.Storage.Management` | 1 | `@extension` | — | `x-ms-secret` |
| `specification/informatica/Informatica.DataManagement.Management` | 1 | `@extension` | — | `x-ms-secret` |
| `specification/liftrcommvault/Commvault.ContentStore.Management` | 1 | `@extension` | — | `x-ms-long-running-operation` |
| `specification/oracle/Oracle.Database.Management` | 72 | `@extension` | `@example` | `x-ms-long-running-operation`, `x-ms-long-running-operation-options` |
| `specification/purestorage/PureStorage.Block.Management` | 4 | `@extension` | — | `x-ms-long-running-operation`, `x-ms-long-running-operation-options` |
| `specification/purviewpolicy/resource-manager/Microsoft.Purview/PurviewPolicy` | 1 | `@extension` | — | `x-ms-skip-url-encoding` |
| `specification/resources/resource-manager/Microsoft.Authorization/policy` | 2 | `@extension` | — | `x-ms-skip-url-encoding` |
| `specification/resources/resource-manager/Microsoft.Resources/deploymentScripts` | 4 | `@extension` | — | `x-ms-identifiers`, `x-ms-secret` |
| `specification/scvmm/ScVmm.Management` | 11 | `@extension` | — | `x-ms-long-running-operation-options` |
| `specification/search/resource-manager/Microsoft.Search/Search` | 30 | `@operationId`, `@extension`, `@externalDocs` | — | `x-ms-client-request-id`, `x-ms-identifiers`, `x-ms-pageable`, `x-ms-parameter-grouping` |
| `specification/web/resource-manager/Microsoft.Web/AppService` | 8 | `@operationId`, `@extension` | — | `x-ms-secret` |

### Medium severity (57 specs)

| Spec directory (tspconfig.yaml) | # suppressions | `@typespec/openapi` decorators | `@azure-tools/typespec-autorest` decorators | `x-ms-*` extensions used |
| --- | ---: | --- | --- | --- |
| `specification/advisor/resource-manager/Microsoft.Advisor/Advisor` | 9 | `@operationId` | — | — |
| `specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement` | 34 | `@operationId`, `@externalDocs` | — | — |
| `specification/app/resource-manager/Microsoft.App/ContainerApps` | 1 | `@operationId` | — | — |
| `specification/appcomplianceautomation/AppComplianceAutomation.Management` | 27 | `@operationId` | — | — |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation` | 1 | `@operationId` | — | — |
| `specification/automation/Automation.Management` | 163 | `@operationId`, `@externalDocs` | — | — |
| `specification/azure-kusto/resource-manager/Microsoft.Kusto/Kusto` | 1 | `@operationId` | — | — |
| `specification/azuredatatransfer/AzureDataTransfer.Management` | 6 | `@operationId` | — | — |
| `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCIVM` | 15 | `@extension` | — | `x-ms-azure-resource` |
| `specification/cognitiveservices/CognitiveServices.Management` | 2 | `@operationId` | — | — |
| `specification/compute/resource-manager/Microsoft.Compute/Compute/Compute` | 61 | `@operationId` | — | — |
| `specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeDisk` | 8 | `@operationId` | — | — |
| `specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeGallery` | 16 | `@operationId` | — | — |
| `specification/confluent/Confluent.Management` | 43 | `@operationId` | — | — |
| `specification/cost-management/resource-manager/Microsoft.CostManagement/CostManagement` | 64 | `@operationId`, `@externalDocs` | — | — |
| `specification/dashboard/Dashboard.Management` | 17 | `@operationId` | — | — |
| `specification/databricks/resource-manager/Microsoft.Databricks/Databricks` | 4 | `@operationId` | — | — |
| `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory` | 2 | `@operationId` | — | — |
| `specification/datamigration/resource-manager/Microsoft.DataMigration/DataMigration` | 15 | `@operationId` | — | — |
| `specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/DesktopVirtualization` | 10 | `@operationId`, `@extension` | — | — |
| `specification/developerhub/resource-manager/Microsoft.DevHub/DeveloperHub` | 4 | `@operationId` | — | — |
| `specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices` | 1 | `@operationId` | — | — |
| `specification/devtestlabs/resource-manager/Microsoft.DevTestLab/DevTestLabs` | 39 | `@operationId` | — | — |
| `specification/elastic/Elastic.Management` | 4 | `@operationId` | — | — |
| `specification/fileshares/resource-manager/Microsoft.FileShares/FileShares` | 3 | `@operationId` | — | — |
| `specification/guestconfiguration/resource-manager/Microsoft.GuestConfiguration/Assignments` | 12 | `@operationId` | — | — |
| `specification/help/resource-manager/Microsoft.Help/Help` | 2 | `@operationId` | — | — |
| `specification/hybridcompute/resource-manager/Microsoft.HybridCompute/HybridCompute` | 2 | `@operationId` | — | — |
| `specification/hybridconnectivity/HybridConnectivity.Management` | 13 | `@operationId` | — | — |
| `specification/hybridkubernetes/HybridKubernetes.Management` | 1 | `@operationId` | — | — |
| `specification/iotoperations/IoTOperations.Management` | 3 | `@operationId`, `@extension` | — | — |
| `specification/liftrqumulo/Qumulo.Storage.Management` | 6 | `@operationId` | — | — |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/loadtesting` | 1 | `@operationId` | — | — |
| `specification/machinelearningservices/MachineLearningServices.Management` | 20 | `@operationId`, `@extension` | — | `x-ms-identifiers` |
| `specification/maps/data-plane/Geolocation` | 1 | `@operationId` | — | — |
| `specification/maps/data-plane/Timezone` | 5 | `@operationId` | — | — |
| `specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Reviews` | 1 | `@operationId` | — | — |
| `specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers` | 28 | `@operationId`, `@extension` | — | `x-ms-parameter-location` |
| `specification/network/resource-manager/Microsoft.Network/Network/Network` | 17 | `@operationId`, `@extension` | — | `x-ms-client-flatten` |
| `specification/networkcloud/NetworkCloud.Management` | 5 | `@operationId` | — | — |
| `specification/paloaltonetworks/PaloAltoNetworks.Management` | 36 | `@operationId` | — | — |
| `specification/portal/TenantConfiguration.Management` | 2 | `@operationId` | — | — |
| `specification/purview/resource-manager/Microsoft.Purview/Purview` | 3 | `@operationId` | — | — |
| `specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication` | 11 | `@extension` | — | `x-ms-client-name` |
| `specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/ResourceHealth` | 3 | `@operationId` | — | — |
| `specification/resources/resource-manager/Microsoft.Resources/bicep` | 1 | `@operationId` | — | — |
| `specification/resources/resource-manager/Microsoft.Resources/subscriptions` | 1 | `@operationId` | — | — |
| `specification/security/resource-manager/Microsoft.Security/Security/SecuritySolutionsAPI` | 1 | `@operationId` | — | — |
| `specification/securityinsights/resource-manager/Microsoft.SecurityInsights/SecurityInsights` | 5 | `@operationId` | — | — |
| `specification/serialconsole/resource-manager/Microsoft.SerialConsole/SerialConsole` | 2 | `@operationId` | — | — |
| `specification/servicebus/resource-manager/Microsoft.ServiceBus/ServiceBus` | 56 | `@operationId`, `@externalDocs` | — | — |
| `specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters` | 21 | `@operationId`, `@extension` | — | `x-ms-azure-resource`, `x-ms-parameter-location` |
| `specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/SqlVirtualMachine` | 1 | `@operationId` | — | — |
| `specification/storagecache/resource-manager/Microsoft.StorageCache/StorageCache` | 34 | `@operationId` | — | — |
| `specification/storagesync/resource-manager/Microsoft.StorageSync/StorageSync` | 3 | `@operationId` | — | — |
| `specification/support/resource-manager/Microsoft.Support/Support` | 11 | `@operationId`, `@extension` | — | `x-ms-client-flatten`, `x-ms-enum`, `x-ms-parameter-location` |
| `specification/trafficmanager/resource-manager/Microsoft.Network/TrafficManager` | 1 | `@operationId` | — | — |

### Low severity (15 specs)

| Spec directory (tspconfig.yaml) | # suppressions | `@typespec/openapi` decorators | `@azure-tools/typespec-autorest` decorators | `x-ms-*` extensions used |
| --- | ---: | --- | --- | --- |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Components` | 3 | `@externalDocs` | — | — |
| `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI` | 1 | `@externalDocs` | — | — |
| `specification/batch/resource-manager/Microsoft.Batch/Batch` | 6 | `@extension`, `@externalDocs` | — | `x-ms-identifiers` |
| `specification/billing/resource-manager/Microsoft.Billing/Billing` | 162 | `@externalDocs` | — | — |
| `specification/billingbenefits/BillingBenefits.Management` | 1 | `@externalDocs` | — | — |
| `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions` | 7 | `@extension` | — | `x-ms-client-flatten`, `x-ms-mutability` |
| `specification/commerce/resource-manager/Microsoft.Commerce/Commerce` | 2 | `@externalDocs` | — | — |
| `specification/consumption/resource-manager/Microsoft.Consumption/Consumption` | 31 | `@externalDocs` | — | — |
| `specification/eventhub/resource-manager/Microsoft.EventHub/Eventhub` | 5 | `@externalDocs` | — | — |
| `specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault` | 1 | `@extension` | — | `x-ms-api-version` |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/ActivityLogsApi` | 4 | `@externalDocs` | — | — |
| `specification/postgresql/DBforPostgreSQL.Management` | 6 | `@extension` | — | `x-ms-identifiers` |
| `specification/relay/resource-manager/Microsoft.Relay/Relay` | 6 | `@externalDocs` | — | — |
| `specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceGraphApi` | 1 | `@externalDocs` | — | — |
| `specification/resources/resource-manager/Microsoft.Resources/deploymentStacks` | 7 | `@extension` | — | `x-ms-identifiers` |

### No usage — suppression removable (19 specs)

These specs carry a `no-openapi` suppression that is **not** tied to any `@typespec/openapi` or `@azure-tools/typespec-autorest` decorator. The suppression appears to be unnecessary (bulk-added by the Swagger-to-TypeSpec converter) and could likely be removed.

| Spec directory (tspconfig.yaml) | # suppressions |
| --- | ---: |
| `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration` | 2 |
| `specification/attestation/resource-manager/Microsoft.Attestation/Attestation` | 1 |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AccessReview` | 5 |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ClassicAdmin` | 2 |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ProviderOperations` | 1 |
| `specification/botservice/resource-manager/Microsoft.BotService/BotService` | 19 |
| `specification/containerinstance/resource-manager/Microsoft.ContainerInstance/ContainerInstance` | 1 |
| `specification/datadog/Datadog.Management` | 1 |
| `specification/dns/resource-manager/Microsoft.Network/Dns` | 3 |
| `specification/dnsresolver/resource-manager/Microsoft.Network/DnsResolver` | 3 |
| `specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/HardwareSecurityModules` | 11 |
| `specification/management/resource-manager/Microsoft.Management/ManagementGroups` | 11 |
| `specification/networkfunction/resource-manager/Microsoft.NetworkFunction/TrafficCollector` | 2 |
| `specification/postgresqlhsc/resource-manager/Microsoft.DBforPostgreSQL/PostgresqlHsc` | 5 |
| `specification/providerhub/ProviderHub.Management` | 2 |
| `specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/RecoveryServices` | 3 |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | 6 |
| `specification/resources/resource-manager/Microsoft.Resources/resources` | 1 |
| `specification/storageactions/StorageAction.Management` | 3 |
