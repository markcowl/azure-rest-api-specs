# no-resource-name-conflict report

## Source, rule, and tool metadata

- Repository: `Azure/azure-rest-api-specs`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- Source timestamp: `2026-11-24T13:26:04+08:00`
- Generation timestamp: `2026-11-24T23:40:17.398Z`
- Report ID: `Report_20261124_no-resource-name-conflict`
- Source lock SHA-256: `c9f31e6fdd233ffaa8e9937551dfe1fc2c532bc338992209e82470706de837a0`
- Report-branch lock SHA-256: `70ffef339bcc28168d695defa7790bb1b060e2f9b196bd97ad14f75a2b7ca301`
- Report tool: `@azure-tools/typespec-arm-resource-data-report@1.5.0`
- Report tool reference commit: `59e16c42bb15e830d4c7cffc126a2ef2beae0b81`
- Report tool source commit: `6ee60da1984fb32e4eefdf04be15158f58cb37a9`
- Node.js: `v24.14.1`
- pnpm: `12.6.0`
- TypeSpec compiler: `@typespec/compiler@1.18.0`
- ARM library: `@azure-tools/typespec-azure-resource-manager@0.74.0`
- Ruleset: `@azure-tools/typespec-azure-rulesets@0.74.0`
- Rule: `@azure-tools/typespec-azure-resource-manager/no-resource-name-conflict`
- Rule documentation: https://azure.github.io/typespec-azure/docs/libraries/azure-resource-manager/rules/no-resource-name-conflict
- Rule severity: `warning`
- Enabled by the installed ARM `all` ruleset: `true`
- Rule behavior verification commit: `6a4865808cd7429cdb1ae1758ecc6b24212f89c9`

## Executive summary

The installed rule emitted 48 diagnostics, retained as 48 deduplicated findings across 19 affected projects and 33 project-qualified logical resource names.

Correlation matched 48 findings, partially matched 0, and left 0 unmatched.

## Coverage

- Discovered projects: 374
- Attempted projects: 365
- Succeeded with findings: 19
- Succeeded clean: 301
- Zero-resource: 45
- Failed compilation: 0
- Timed out: 0
- Skipped client-only: 9
- Blocked because the installed toolchain lacks the rule: 0
- Resolved resources: 2848
- Resolved operations: 13744
- Correlated resource records: 81

Validation inventory found 618 total TypeSpec projects and 374 ARM projects; Git-backed report discovery found 374.

The configured ARM validation inventory and the Git-backed report inventory match.

## Affected specs

### `specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement`

- `ApiManagementGroup` (NRNC-EA364DD9B64C) — 2 resolved resources; [spec details](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/Report_20261124_no-resource-name-conflict/README.md#nrnc-ea364dd9b64c)
- `ServiceWorkspaceGroup` (NRNC-20EB9CD63E56) — 2 resolved resources; [spec details](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/Report_20261124_no-resource-name-conflict/README.md#nrnc-20eb9cd63e56)
- `ServiceWorkspaceNotification` (NRNC-AEB38325FB87) — 3 resolved resources; [spec details](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/Report_20261124_no-resource-name-conflict/README.md#nrnc-aeb38325fb87)
- `ServiceWorkspaceNotification` (NRNC-193B3B296D57) — 3 resolved resources; [spec details](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/Report_20261124_no-resource-name-conflict/README.md#nrnc-193b3b296d57)
- `ApiManagementProduct` (NRNC-0FAD4B98EE2E) — 3 resolved resources; [spec details](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/Report_20261124_no-resource-name-conflict/README.md#nrnc-0fad4b98ee2e)
- `ApiManagementProduct` (NRNC-A089353351F3) — 3 resolved resources; [spec details](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/Report_20261124_no-resource-name-conflict/README.md#nrnc-a089353351f3)

### `specification/app/resource-manager/Microsoft.App/ContainerApps`

- `ContainerAppLabelHistory` (NRNC-83B6C2C28445) — 2 resolved resources; [spec details](../../../specification/app/resource-manager/Microsoft.App/ContainerApps/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/app/resource-manager/Microsoft.App/ContainerApps/Report_20261124_no-resource-name-conflict/README.md#nrnc-83b6c2c28445)

### `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment`

- `DenyAssignment` (NRNC-D1395B591722) — 2 resolved resources; [spec details](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/Report_20261124_no-resource-name-conflict/README.md#nrnc-d1395b591722)

### `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment`

- `RoleAssignment` (NRNC-0E22E0B715C8) — 2 resolved resources; [spec details](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/Report_20261124_no-resource-name-conflict/README.md#nrnc-0e22e0b715c8)

### `specification/automation/resource-manager/Microsoft.Automation/Automation`

- `AutomationAccount` (NRNC-3C1862CCCA52) — 4 resolved resources; [spec details](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261124_no-resource-name-conflict/README.md#nrnc-3c1862ccca52)
- `AutomationAccount` (NRNC-A088692069CA) — 4 resolved resources; [spec details](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261124_no-resource-name-conflict/README.md#nrnc-a088692069ca)
- `AutomationAccount` (NRNC-B225272ABDDE) — 4 resolved resources; [spec details](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261124_no-resource-name-conflict/README.md#nrnc-b225272abdde)
- `DscNode` (NRNC-EE915EA109FE) — 2 resolved resources; [spec details](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261124_no-resource-name-conflict/README.md#nrnc-ee915ea109fe)
- `Job` (NRNC-21E5C489ADE8) — 2 resolved resources; [spec details](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261124_no-resource-name-conflict/README.md#nrnc-21e5c489ade8)
- `SourceControl` (NRNC-75942DABE3DB) — 3 resolved resources; [spec details](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261124_no-resource-name-conflict/README.md#nrnc-75942dabe3db)
- `SourceControl` (NRNC-12A0F6A0940D) — 3 resolved resources; [spec details](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261124_no-resource-name-conflict/README.md#nrnc-12a0f6a0940d)

### `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices`

- `CognitiveServicesAccount` (NRNC-24C0A3AC2936) — 2 resolved resources; [spec details](../../../specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Report_20261124_no-resource-name-conflict/README.md#nrnc-24c0a3ac2936)

### `specification/compute/resource-manager/Microsoft.Compute/Compute/Compute`

- `VirtualMachinesDiagnosticRunCommands` (NRNC-86EEA9334B75) — 2 resolved resources; [spec details](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/Report_20261124_no-resource-name-conflict/README.md#nrnc-86eea9334b75)
- `VirtualMachinesRunCommands` (NRNC-1F7BAFD48789) — 2 resolved resources; [spec details](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/Report_20261124_no-resource-name-conflict/README.md#nrnc-1f7bafd48789)

### `specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB`

- `ClusterResource` (NRNC-88CE4575F6EE) — 3 resolved resources; [spec details](../../../specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/Report_20261124_no-resource-name-conflict/README.md#nrnc-88ce4575f6ee)
- `ClusterResource` (NRNC-EBB3A4E448DC) — 3 resolved resources; [spec details](../../../specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/Report_20261124_no-resource-name-conflict/README.md#nrnc-ebb3a4e448dc)

### `specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter`

- `CatalogsImageDefinitions` (NRNC-CD7DC82E78F9) — 2 resolved resources; [spec details](../../../specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/Report_20261124_no-resource-name-conflict/README.md#nrnc-cd7dc82e78f9)
- `ImageDefinitionsBuilds` (NRNC-FCBEE75CB4F1) — 2 resolved resources; [spec details](../../../specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/Report_20261124_no-resource-name-conflict/README.md#nrnc-fcbee75cb4f1)

### `specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight`

- `Application` (NRNC-94326274402D) — 2 resolved resources; [spec details](../../../specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Report_20261124_no-resource-name-conflict/README.md#nrnc-94326274402d)
- `Cluster` (NRNC-35B285B4A6E1) — 6 resolved resources; [spec details](../../../specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Report_20261124_no-resource-name-conflict/README.md#nrnc-35b285b4a6e1)
- `Cluster` (NRNC-C160C51116EA) — 6 resolved resources; [spec details](../../../specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Report_20261124_no-resource-name-conflict/README.md#nrnc-c160c51116ea)
- `Cluster` (NRNC-FD986A51A151) — 6 resolved resources; [spec details](../../../specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Report_20261124_no-resource-name-conflict/README.md#nrnc-fd986a51a151)
- `Cluster` (NRNC-0A00CBBECCA1) — 6 resolved resources; [spec details](../../../specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Report_20261124_no-resource-name-conflict/README.md#nrnc-0a00cbbecca1)
- `Cluster` (NRNC-C16B02268D6A) — 6 resolved resources; [spec details](../../../specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Report_20261124_no-resource-name-conflict/README.md#nrnc-c16b02268d6a)

### `specification/iothub/resource-manager/Microsoft.Devices/IoTHub`

- `IotHubDescription` (NRNC-5A6F41F19845) — 2 resolved resources; [spec details](../../../specification/iothub/resource-manager/Microsoft.Devices/IoTHub/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/iothub/resource-manager/Microsoft.Devices/IoTHub/Report_20261124_no-resource-name-conflict/README.md#nrnc-5a6f41f19845)

### `specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault`

- `KeysVersions` (NRNC-673CE84E235F) — 2 resolved resources; [spec details](../../../specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault/Report_20261124_no-resource-name-conflict/README.md#nrnc-673ce84e235f)

### `specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products`

- `ProductSingle` (NRNC-7D0FD533DCFD) — 4 resolved resources; [spec details](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/Report_20261124_no-resource-name-conflict/README.md#nrnc-7d0fd533dcfd)
- `ProductSingle` (NRNC-D03142A6FF6C) — 4 resolved resources; [spec details](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/Report_20261124_no-resource-name-conflict/README.md#nrnc-d03142a6ff6c)
- `ProductSingle` (NRNC-1B95C01C42DF) — 4 resolved resources; [spec details](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/Report_20261124_no-resource-name-conflict/README.md#nrnc-1b95c01c42df)

### `specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus`

- `Sku` (NRNC-80ABDA84AB6D) — 2 resolved resources; [spec details](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus/Report_20261124_no-resource-name-conflict/README.md#nrnc-80abda84ab6d)

### `specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi`

- `PolicyAttestation` (NRNC-62D402899987) — 3 resolved resources; [spec details](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi/Report_20261124_no-resource-name-conflict/README.md#nrnc-62d402899987)
- `PolicyAttestation` (NRNC-5DB1F1F92D97) — 3 resolved resources; [spec details](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi/Report_20261124_no-resource-name-conflict/README.md#nrnc-5db1f1f92d97)
- `PolicyRemediation` (NRNC-836C68F3BC81) — 4 resolved resources; [spec details](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi/Report_20261124_no-resource-name-conflict/README.md#nrnc-836c68f3bc81)
- `PolicyRemediation` (NRNC-BAB95392BE87) — 4 resolved resources; [spec details](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi/Report_20261124_no-resource-name-conflict/README.md#nrnc-bab95392be87)
- `PolicyRemediation` (NRNC-6DAF29AF1800) — 4 resolved resources; [spec details](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi/Report_20261124_no-resource-name-conflict/README.md#nrnc-6daf29af1800)

### `specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery`

- `SiteRecoveryReplicationProtectionClusterResource` (NRNC-C3024BF33419) — 2 resolved resources; [spec details](../../../specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/Report_20261124_no-resource-name-conflict/README.md#nrnc-c3024bf33419)

### `specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI`

- `LocationsAlerts` (NRNC-92DE63B71BEA) — 2 resolved resources; [spec details](../../../specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Report_20261124_no-resource-name-conflict/README.md#nrnc-92de63b71bea)

### `specification/security/resource-manager/Microsoft.Security/Security/TasksAPI`

- `LocationsTasks` (NRNC-426C67E097B2) — 2 resolved resources; [spec details](../../../specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/Report_20261124_no-resource-name-conflict/README.md#nrnc-426c67e097b2)

### `specification/support/resource-manager/Microsoft.Support/Support`

- `SupportTicketsChatTranscripts` (NRNC-9C9A815AD9F6) — 2 resolved resources; [spec details](../../../specification/support/resource-manager/Microsoft.Support/Support/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/support/resource-manager/Microsoft.Support/Support/Report_20261124_no-resource-name-conflict/README.md#nrnc-9c9a815ad9f6)
- `SupportTicketsCommunications` (NRNC-B7E92876F475) — 2 resolved resources; [spec details](../../../specification/support/resource-manager/Microsoft.Support/Support/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/support/resource-manager/Microsoft.Support/Support/Report_20261124_no-resource-name-conflict/README.md#nrnc-b7e92876f475)
- `FileWorkspacesFiles` (NRNC-4BB1800F4C2B) — 2 resolved resources; [spec details](../../../specification/support/resource-manager/Microsoft.Support/Support/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/support/resource-manager/Microsoft.Support/Support/Report_20261124_no-resource-name-conflict/README.md#nrnc-4bb1800f4c2b)
- `FileWorkspaces` (NRNC-B4144C266C51) — 2 resolved resources; [spec details](../../../specification/support/resource-manager/Microsoft.Support/Support/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/support/resource-manager/Microsoft.Support/Support/Report_20261124_no-resource-name-conflict/README.md#nrnc-b4144c266c51)
- `SupportTickets` (NRNC-F07F90E864A3) — 2 resolved resources; [spec details](../../../specification/support/resource-manager/Microsoft.Support/Support/Report_20261124_no-resource-name-conflict/README.md) · [conflict details](../../../specification/support/resource-manager/Microsoft.Support/Support/Report_20261124_no-resource-name-conflict/README.md#nrnc-f07f90e864a3)

## Unmatched or partially matched diagnostics

- None

## Failed and timed-out projects

- None

## Zero-resource projects

- [`specification/aiinfraoptimization/resource-manager/Microsoft.AIInfraOptimization/AIInfraOptimization`](../../../specification/aiinfraoptimization/resource-manager/Microsoft.AIInfraOptimization/AIInfraOptimization/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertRuleRecommendations`](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertRuleRecommendations/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule`](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/AnalyticsItems`](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/AnalyticsItems/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentAPIs`](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentAPIs/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Components`](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Components/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/DeletedWorkbookApi`](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/DeletedWorkbookApi/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Favorites`](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Favorites/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/LiveTokenApi`](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/LiveTokenApi/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation`](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestsApi`](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestsApi/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkBookOperations`](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkBookOperations/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ClassicAdmin`](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ClassicAdmin/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess`](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ProviderOperations`](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ProviderOperations/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/carbon/resource-manager/Microsoft.Carbon/Carbon`](../../../specification/carbon/resource-manager/Microsoft.Carbon/Carbon/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/commerce/resource-manager/Microsoft.Commerce/Commerce`](../../../specification/commerce/resource-manager/Microsoft.Commerce/Commerce/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeSku`](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeSku/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/cost-management/resource-manager/Microsoft.CostManagement/PriceEstimation`](../../../specification/cost-management/resource-manager/Microsoft.CostManagement/PriceEstimation/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/edge/resource-manager/Microsoft.Edge/edge`](../../../specification/edge/resource-manager/Microsoft.Edge/edge/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/frontdoor/resource-manager/Microsoft.Network/FrontDoor`](../../../specification/frontdoor/resource-manager/Microsoft.Network/FrontDoor/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/gcpconnector/resource-manager/Microsoft.GcpConnector/GcpConnector`](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/GcpConnector/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/guestconfiguration/resource-manager/Microsoft.GuestConfiguration/Assignments`](../../../specification/guestconfiguration/resource-manager/Microsoft.GuestConfiguration/Assignments/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/operations`](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/operations/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Reviews`](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Reviews/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/monitor/resource-manager/Microsoft.Insights/DataCollectionRuleConfigurationMetadata`](../../../specification/monitor/resource-manager/Microsoft.Insights/DataCollectionRuleConfigurationMetadata/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/monitor/resource-manager/Microsoft.Insights/Insights/ActivityLogsApi`](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/ActivityLogsApi/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/monitor/resource-manager/Microsoft.Insights/Insights/AlertRulesIncidentsApi`](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/AlertRulesIncidentsApi/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricBaselinesApi`](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricBaselinesApi/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricsApi`](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricsApi/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/monitor/resource-manager/Microsoft.Insights/Insights/NetworkSecurityPerimeterApi`](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/NetworkSecurityPerimeterApi/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyTrackedResourcesApi`](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyTrackedResourcesApi/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/portalservices/resource-manager/Microsoft.PortalServices/extensions`](../../../specification/portalservices/resource-manager/Microsoft.PortalServices/extensions/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/purviewpolicy/resource-manager/Microsoft.Purview/PurviewPolicy`](../../../specification/purviewpolicy/resource-manager/Microsoft.Purview/PurviewPolicy/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceChanges`](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceChanges/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceGraphApi`](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceGraphApi/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceHistory`](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceHistory/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/resources/resource-manager/Microsoft.Resources/bicep`](../../../specification/resources/resource-manager/Microsoft.Resources/bicep/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/resources/resource-manager/Microsoft.Resources/resourceValidator`](../../../specification/resources/resource-manager/Microsoft.Resources/resourceValidator/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/resources/resource-manager/Microsoft.Resources/subscriptions`](../../../specification/resources/resource-manager/Microsoft.Resources/subscriptions/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/security/resource-manager/Microsoft.Security/Security/LocationsAPI`](../../../specification/security/resource-manager/Microsoft.Security/Security/LocationsAPI/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/security/resource-manager/Microsoft.Security/Security/OperationsAPI`](../../../specification/security/resource-manager/Microsoft.Security/Security/OperationsAPI/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/solutions/resource-manager/Microsoft.Solutions/Solutions`](../../../specification/solutions/resource-manager/Microsoft.Solutions/Solutions/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/terraform/resource-manager/Microsoft.AzureTerraform/AzureTerraform`](../../../specification/terraform/resource-manager/Microsoft.AzureTerraform/AzureTerraform/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`
- [`specification/trafficmanager/resource-manager/Microsoft.Network/TrafficManager`](../../../specification/trafficmanager/resource-manager/Microsoft.Network/TrafficManager/Report_20261124_no-resource-name-conflict/status.json) - `zero-resource`

## Skipped client-only projects

- [`specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights`](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Report_20261124_no-resource-name-conflict/status.json) - `skipped-client-only`
- [`specification/authorization/resource-manager/Microsoft.Authorization/Authorization`](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/Report_20261124_no-resource-name-conflict/status.json) - `skipped-client-only`
- [`specification/compute/resource-manager/Microsoft.Compute/Compute`](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/Report_20261124_no-resource-name-conflict/status.json) - `skipped-client-only`
- [`specification/monitor/resource-manager/Microsoft.Insights/Insights`](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/Report_20261124_no-resource-name-conflict/status.json) - `skipped-client-only`
- [`specification/networksecurity/resource-manager/Microsoft.NetworkSecurity`](../../../specification/networksecurity/resource-manager/Microsoft.NetworkSecurity/Report_20261124_no-resource-name-conflict/status.json) - `skipped-client-only`
- [`specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights`](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/Report_20261124_no-resource-name-conflict/status.json) - `skipped-client-only`
- [`specification/reservations/resource-manager/Microsoft.Capacity/Reservations`](../../../specification/reservations/resource-manager/Microsoft.Capacity/Reservations/Report_20261124_no-resource-name-conflict/status.json) - `skipped-client-only`
- [`specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph`](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/Report_20261124_no-resource-name-conflict/status.json) - `skipped-client-only`
- [`specification/security/resource-manager/Microsoft.Security/Security`](../../../specification/security/resource-manager/Microsoft.Security/Security/Report_20261124_no-resource-name-conflict/status.json) - `skipped-client-only`

## Machine-readable report

- [Manifest](manifest.json)

## Reproduction

```powershell
mise exec node@24.14.1 pnpm@12.6.0 -- node eng/tools/typespec-arm-resource-data/cmd/typespec-arm-resource-data.js --root . --source-ref 965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6 --tool-source-commit 6ee60da1984fb32e4eefdf04be15158f58cb37a9 --report-directory Report_20261124_no-resource-name-conflict --timeout 300 --concurrency 4 --resume
```

## Limitations

Coverage is incomplete: 0 failed, 0 timed out, 9 client-only, and 0 blocked projects were not successfully assessed. They are not classified as clean.

Recommendations are derived from the resolved resources, associated operations, HTTP verbs, and linked TypeSpec declarations. A recommendation is explicitly marked indeterminate when that evidence does not establish one safe remediation.

The generation timestamp is the only intentionally time-varying field in a rerun at the same source, lockfile, tool source, and installed package versions.
