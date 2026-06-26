# Resource-manager specs suppressing `@azure-tools/typespec-azure-core/no-openapi`

- **Source:** `Azure/azure-rest-api-specs`, branch `main` (commit `a816c8f8d0`)
- **Generated:** 2026-06-26 (UTC)

## What was measured

A **spec** is a directory containing a `tspconfig.yaml` and a `main.tsp` in the same directory, together with every `.tsp` file reachable by recursively following `import` statements starting from `main.tsp`.

A **resource-manager spec** is a spec whose file set imports the `@azure-tools/typespec-azure-resource-manager` library. Specs located under a `data-plane/` directory are excluded from this report.

A spec **suppresses the rule** if any file in its file set contains a `#suppress "@azure-tools/typespec-azure-core/no-openapi" ...` directive.

The `no-openapi` rule fires on decorators from the `TypeSpec.OpenAPI` (`@typespec/openapi`) **and** `Autorest` (`@azure-tools/typespec-autorest`) namespaces. This report covers **both** families: the `@typespec/openapi` decorators `@operationId`, `@extension`, `@defaultResponse`, `@externalDocs`, `@info`, `@tagMetadata`, and the `@azure-tools/typespec-autorest` decorators `@useRef`, `@example`.

> `@useRef` / `@example` are attributed to the spec only when they are tied to a `no-openapi` suppression. (The Autorest `@example` is text-identical to the core `TypeSpec.@example`, but only the Autorest one triggers — and is therefore suppressed by — the rule, so the suppression tie disambiguates them.)

> Some resource-manager specs carry a `no-openapi` suppression that is **not** tied to any `@typespec/openapi` or `@azure-tools/typespec-autorest` decorator (an unnecessary suppression added in bulk by the Swagger-to-TypeSpec converter). These are listed in the **No usage** table — their suppression could simply be removed.

## Summary

- **Resource-manager specs that suppress `no-openapi`: 107**
- Specs that use a `@typespec/openapi` or `@azure-tools/typespec-autorest` decorator: 88
- Specs that suppress but use **neither** library's decorators (suppression removable): 19

### `@typespec/openapi` decorators usage (number of RM specs using each)

| Decorator | RM specs using it |
| --- | ---: |
| `@operationId` | 57 |
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
| Medium | 55 |
| Low | 15 |
| No usage | 19 |
| **Total** | **107** |

## Per-spec detail (by severity)

`Spec directory` is the directory containing the spec's `tspconfig.yaml`. `# suppressions` is the count of `no-openapi` `#suppress` directives across the spec's files.

For **High** and **Medium** specs, `Newest api-version` is the latest version declared in the spec's `Versions` enum, and `api-version added` is the git commit date (from `git blame` against `main`) when that version line was introduced into the TypeSpec spec.

### High severity (18 specs)

### Medium severity (55 specs)

### Low severity (15 specs)

### High severity (18 specs)

| Spec directory (tspconfig.yaml) | # suppressions | `@typespec/openapi` decorators | `@azure-tools/typespec-autorest` decorators | `x-ms-*` extensions used | Newest api-version | api-version added |
| --- | ---: | --- | --- | --- | --- | --- |
| `specification/azurefleet/resource-manager/Microsoft.AzureFleet/AzureFleet` | 1 | `@extension` | — | `x-ms-secret` | `2026-04-01-preview` | 2026-04-28 |
| `specification/azurelargeinstance/resource-manager/Microsoft.AzureLargeInstance/AzureLargeInstance` | 1 | `@extension` | — | `x-ms-long-running-operation`, `x-ms-long-running-operation-options` | `2024-08-01-preview` | 2024-08-23 |
| `specification/chaos/resource-manager/Microsoft.Chaos/Chaos` | 8 | `@extension` | — | `x-ms-pageable` | `2026-05-01-preview` | 2026-05-06 |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/fleet` | 6 | `@operationId`, `@extension` | — | `x-ms-long-running-operation`, `x-ms-long-running-operation-options` | `2026-03-02-preview` | 2026-05-21 |
| `specification/containerstorage/resource-manager/Microsoft.ContainerStorage/ContainerStorage` | 3 | `@extension` | — | `x-ms-long-running-operation-options` | `2023-07-01-preview` | 2024-03-07 |
| `specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB` | 10 | `@operationId`, `@extension` | — | `x-ms-pageable` | `2026-04-01-preview` | 2026-05-29 |
| `specification/databasewatcher/DatabaseWatcher.Management` | 2 | `@extension` | — | `x-ms-long-running-operation`, `x-ms-long-running-operation-options` | `2025-01-02` | 2025-01-10 |
| `specification/dell/Dell.Storage.Management` | 1 | `@extension` | — | `x-ms-secret` | `2025-03-21` | 2025-12-18 |
| `specification/informatica/Informatica.DataManagement.Management` | 1 | `@extension` | — | `x-ms-secret` | `2025-11-27` | 2026-02-02 |
| `specification/liftrcommvault/Commvault.ContentStore.Management` | 1 | `@extension` | — | `x-ms-long-running-operation` | `2026-07-03-preview` | 2026-06-11 |
| `specification/oracle/Oracle.Database.Management` | 72 | `@extension` | `@example` | `x-ms-long-running-operation`, `x-ms-long-running-operation-options` | `2025-09-01` | 2025-09-23 |
| `specification/purestorage/PureStorage.Block.Management` | 4 | `@extension` | — | `x-ms-long-running-operation`, `x-ms-long-running-operation-options` | `2026-01-01-preview` | 2026-04-21 |
| `specification/purviewpolicy/resource-manager/Microsoft.Purview/PurviewPolicy` | 1 | `@extension` | — | `x-ms-skip-url-encoding` | `2023-06-01-preview` | 2024-02-06 |
| `specification/resources/resource-manager/Microsoft.Authorization/policy` | 2 | `@extension` | — | `x-ms-skip-url-encoding` | `2026-06-01` | 2026-05-27 |
| `specification/resources/resource-manager/Microsoft.Resources/deploymentScripts` | 4 | `@extension` | — | `x-ms-identifiers`, `x-ms-secret` | `2023-08-01` | 2026-03-12 |
| `specification/scvmm/ScVmm.Management` | 11 | `@extension` | — | `x-ms-long-running-operation-options` | `2025-03-13` | 2025-04-04 |
| `specification/search/resource-manager/Microsoft.Search/Search` | 30 | `@operationId`, `@extension`, `@externalDocs` | — | `x-ms-client-request-id`, `x-ms-identifiers`, `x-ms-pageable`, `x-ms-parameter-grouping` | `2026-03-01-preview` | 2026-03-26 |
| `specification/web/resource-manager/Microsoft.Web/AppService` | 8 | `@operationId`, `@extension` | — | `x-ms-secret` | `2026-03-15` | 2026-05-13 |

### Medium severity (55 specs)

| Spec directory (tspconfig.yaml) | # suppressions | `@typespec/openapi` decorators | `@azure-tools/typespec-autorest` decorators | `x-ms-*` extensions used | Newest api-version | api-version added |
| --- | ---: | --- | --- | --- | --- | --- |
| `specification/advisor/resource-manager/Microsoft.Advisor/Advisor` | 9 | `@operationId` | — | — | `2026-03-01-preview` | 2026-06-01 |
| `specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement` | 34 | `@operationId`, `@externalDocs` | — | — | `2025-09-01-preview` | 2026-04-21 |
| `specification/app/resource-manager/Microsoft.App/ContainerApps` | 1 | `@operationId` | — | — | `2026-01-01` | 2026-05-26 |
| `specification/appcomplianceautomation/AppComplianceAutomation.Management` | 27 | `@operationId` | — | — | `2024-06-27` | 2024-06-03 |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation` | 1 | `@operationId` | — | — | `2015-05-01` | 2026-04-01 |
| `specification/automation/Automation.Management` | 163 | `@operationId`, `@externalDocs` | — | — | `2024-10-23` | 2026-04-01 |
| `specification/azure-kusto/resource-manager/Microsoft.Kusto/Kusto` | 1 | `@operationId` | — | — | `2025-02-14` | 2026-03-25 |
| `specification/azuredatatransfer/AzureDataTransfer.Management` | 6 | `@operationId` | — | — | `2025-10-10-preview` | 2025-10-10 |
| `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCIVM` | 15 | `@extension` | — | `x-ms-azure-resource` | `2026-04-01-preview` | 2026-03-16 |
| `specification/cognitiveservices/CognitiveServices.Management` | 2 | `@operationId` | — | — | `2026-05-15-preview` | 2026-06-25 |
| `specification/compute/resource-manager/Microsoft.Compute/Compute/Compute` | 61 | `@operationId` | — | — | `2026-03-01` | 2026-06-17 |
| `specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeDisk` | 8 | `@operationId` | — | — | `2026-03-02` | 2026-06-22 |
| `specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeGallery` | 16 | `@operationId` | — | — | `2025-12-03` | 2026-06-23 |
| `specification/confluent/Confluent.Management` | 43 | `@operationId` | — | — | `2026-05-01-preview` | 2026-05-22 |
| `specification/cost-management/resource-manager/Microsoft.CostManagement/CostManagement` | 64 | `@operationId`, `@externalDocs` | — | — | `2025-03-01` | 2025-12-05 |
| `specification/dashboard/Dashboard.Management` | 17 | `@operationId` | — | — | `2025-09-01-preview` | 2025-10-31 |
| `specification/databricks/resource-manager/Microsoft.Databricks/Databricks` | 4 | `@operationId` | — | — | `2026-01-01` | 2026-03-20 |
| `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory` | 2 | `@operationId` | — | — | `2018-06-01` | 2026-03-11 |
| `specification/datamigration/resource-manager/Microsoft.DataMigration/DataMigration` | 15 | `@operationId` | — | — | `2025-09-01-preview` | 2026-04-14 |
| `specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/DesktopVirtualization` | 10 | `@operationId`, `@extension` | — | — | `2026-04-01-preview` | 2026-06-12 |
| `specification/developerhub/resource-manager/Microsoft.DevHub/DeveloperHub` | 4 | `@operationId` | — | — | `2025-03-01-preview` | 2026-04-29 |
| `specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices` | 1 | `@operationId` | — | — | `2026-03-01-preview` | 2026-05-22 |
| `specification/devtestlabs/resource-manager/Microsoft.DevTestLab/DevTestLabs` | 39 | `@operationId` | — | — | `2018-09-15` | 2025-07-17 |
| `specification/elastic/Elastic.Management` | 4 | `@operationId` | — | — | `2025-06-01` | 2025-11-13 |
| `specification/fileshares/resource-manager/Microsoft.FileShares/FileShares` | 3 | `@operationId` | — | — | `2026-06-01` | 2026-05-01 |
| `specification/guestconfiguration/resource-manager/Microsoft.GuestConfiguration/Assignments` | 12 | `@operationId` | — | — | `2024-04-05` | 2025-07-16 |
| `specification/help/resource-manager/Microsoft.Help/Help` | 2 | `@operationId` | — | — | `2024-03-01-preview` | 2025-08-15 |
| `specification/hybridcompute/resource-manager/Microsoft.HybridCompute/HybridCompute` | 2 | `@operationId` | — | — | `2025-09-16-preview` | 2026-04-28 |
| `specification/hybridconnectivity/HybridConnectivity.Management` | 13 | `@operationId` | — | — | `2024-12-01` | 2025-02-14 |
| `specification/hybridkubernetes/HybridKubernetes.Management` | 1 | `@operationId` | — | — | `2026-05-01` | 2026-04-27 |
| `specification/iotoperations/IoTOperations.Management` | 3 | `@operationId`, `@extension` | — | — | `2026-07-01` | 2026-06-19 |
| `specification/liftrqumulo/Qumulo.Storage.Management` | 6 | `@operationId` | — | — | `2026-04-16` | 2026-06-16 |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/loadtesting` | 1 | `@operationId` | — | — | `2024-12-01-preview` | 2025-02-24 |
| `specification/machinelearningservices/MachineLearningServices.Management` | 20 | `@operationId`, `@extension` | — | `x-ms-identifiers` | `2026-03-15-preview` | 2026-05-18 |
| `specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Reviews` | 1 | `@operationId` | — | — | `2023-01-01-preview` | 2025-05-29 |
| `specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers` | 28 | `@operationId`, `@extension` | — | `x-ms-parameter-location` | `2025-06-01-preview` | 2025-10-20 |
| `specification/network/resource-manager/Microsoft.Network/Network/Network` | 17 | `@operationId`, `@extension` | — | `x-ms-client-flatten` | `2025-07-01` | 2026-05-19 |
| `specification/networkcloud/NetworkCloud.Management` | 5 | `@operationId` | — | — | `2026-07-01` | 2026-06-17 |
| `specification/paloaltonetworks/PaloAltoNetworks.Management` | 36 | `@operationId` | — | — | `2026-05-11-preview` | 2026-05-19 |
| `specification/portal/TenantConfiguration.Management` | 2 | `@operationId` | — | — | `2026-04-01` | 2026-05-26 |
| `specification/purview/resource-manager/Microsoft.Purview/Purview` | 3 | `@operationId` | — | — | `2024-04-01-preview` | 2026-02-06 |
| `specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication` | 11 | `@extension` | — | `x-ms-client-name` | `2026-05-01` | 2026-05-11 |
| `specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/ResourceHealth` | 3 | `@operationId` | — | — | `2025-05-01` | 2026-04-17 |
| `specification/resources/resource-manager/Microsoft.Resources/bicep` | 1 | `@operationId` | — | — | `2023-11-01` | 2025-06-19 |
| `specification/resources/resource-manager/Microsoft.Resources/subscriptions` | 1 | `@operationId` | — | — | `2022-12-01` | 2026-03-19 |
| `specification/security/resource-manager/Microsoft.Security/Security/SecuritySolutionsAPI` | 1 | `@operationId` | — | — | `2020-01-01` | 2026-04-28 |
| `specification/securityinsights/resource-manager/Microsoft.SecurityInsights/SecurityInsights` | 5 | `@operationId` | — | — | `2025-07-01-preview` | 2026-03-10 |
| `specification/serialconsole/resource-manager/Microsoft.SerialConsole/SerialConsole` | 2 | `@operationId` | — | — | `2024-07-01` | 2026-02-26 |
| `specification/servicebus/resource-manager/Microsoft.ServiceBus/ServiceBus` | 56 | `@operationId`, `@externalDocs` | — | — | `2026-01-01` | 2026-05-06 |
| `specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters` | 21 | `@operationId`, `@extension` | — | `x-ms-azure-resource`, `x-ms-parameter-location` | `2026-05-01-preview` | 2026-05-06 |
| `specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/SqlVirtualMachine` | 1 | `@operationId` | — | — | `2023-10-01` | 2025-07-04 |
| `specification/storagecache/resource-manager/Microsoft.StorageCache/StorageCache` | 34 | `@operationId` | — | — | `2026-01-01` | 2026-04-10 |
| `specification/storagesync/resource-manager/Microsoft.StorageSync/StorageSync` | 3 | `@operationId` | — | — | `2022-09-01` | 2025-09-09 |
| `specification/support/resource-manager/Microsoft.Support/Support` | 11 | `@operationId`, `@extension` | — | `x-ms-client-flatten`, `x-ms-enum`, `x-ms-parameter-location` | `2026-06-01` | 2026-06-04 |
| `specification/trafficmanager/resource-manager/Microsoft.Network/TrafficManager` | 1 | `@operationId` | — | — | `2024-04-01-preview` | 2026-04-14 |

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
