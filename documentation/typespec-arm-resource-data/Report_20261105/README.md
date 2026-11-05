# TypeSpec ARM resource data

## Source and tool metadata

- Repository: `Azure/azure-rest-api-specs`
- Source commit: `5827ec08ce0dca7e04fcee8a67497921a7bf67f4`
- Source timestamp: `2026-11-05T12:48:18-08:00`
- Dependency lock SHA-256: `e150420382fff7a19adda3752e1ebdbd349a28cd6d5269ea7208c4f8c013a718`
- Report tool: `@azure-tools/typespec-arm-resource-data-report@1.2.0`
- Node.js: `v26.13.0`
- TypeSpec compiler: `@typespec/compiler@1.17.0`
- ARM library: `@azure-tools/typespec-azure-resource-manager@0.73.0`
- Report directory: `Report_20261105`

## Totals

- Projects: 375
- Succeeded: 319
- Zero-resource: 46
- Failed: 0
- Skipped client-only: 10
- Resources: 2719
- Operations: 12971

## Duplicate resource errors

- Records: 62
- Groups: 31
- Affected projects: 13

- [specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/Report_20261105/resources.csv) — 3 groups, 6 records
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.apimanagement/service/{}/apis/{}/tagdescriptions/{}`
    - [`ApisTagDescriptions` (`Microsoft.ApiManagement/service/apis/tagDescriptions`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/TagDescriptionContract.tsp#L14)
    - [`TagDescriptionContract` (`Microsoft.ApiManagement/service/apis/tagDescriptions`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/TagDescriptionContract.tsp#L14)
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.apimanagement/service/{}/privateendpointconnections/{}`
    - [`ApiManagementServiceResource` (`Microsoft.ApiManagement/service/privateEndpointConnections`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ApiManagementServiceResource.tsp#L13)
    - [`ApiManagementServiceResourcePrivateEndpointConnection` (`Microsoft.ApiManagement/service/privateEndpointConnections`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/PrivateEndpointConnection.tsp#L15)
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.apimanagement/service/{}/templates/{}`
    - [`EmailTemplateContract` (`Microsoft.ApiManagement/service/templates`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/EmailTemplateContract.tsp#L14)
    - [`ServiceTemplates` (`Microsoft.ApiManagement/service/templates`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/EmailTemplateContract.tsp#L14)
- [specification/app/resource-manager/Microsoft.App/ContainerApps](../../../specification/app/resource-manager/Microsoft.App/ContainerApps/Report_20261105/resources.csv) — 3 groups, 6 records
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.app/connectedenvironments/{}/daprcomponents/{}`
    - [`ConnectedEnvironmentsDaprComponents` (`Microsoft.App/connectedEnvironments/daprComponents`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/app/resource-manager/Microsoft.App/ContainerApps/DaprComponent.tsp#L14)
    - [`DaprComponent` (`Microsoft.App/connectedEnvironments/daprComponents`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/app/resource-manager/Microsoft.App/ContainerApps/DaprComponent.tsp#L14)
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.app/containerapps/{}/providers/microsoft.app/logicapps/{}`
    - [`LogicApp` (`Microsoft.App/logicApps`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/app/resource-manager/Microsoft.App/ContainerApps/LogicApp.tsp#L15)
    - [`LogicApps` (`Microsoft.App/logicApps`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/app/resource-manager/Microsoft.App/ContainerApps/LogicApp.tsp#L15)
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.app/managedenvironments/{}/managedcertificates/{}`
    - [`ManagedCertificate` (`Microsoft.App/managedEnvironments/managedCertificates`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/app/resource-manager/Microsoft.App/ContainerApps/ManagedCertificate.tsp#L14)
    - [`ManagedEnvironmentsManagedCertificates` (`Microsoft.App/managedEnvironments/managedCertificates`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/app/resource-manager/Microsoft.App/ContainerApps/ManagedCertificate.tsp#L14)
- [specification/botservice/resource-manager/Microsoft.BotService/BotService](../../../specification/botservice/resource-manager/Microsoft.BotService/BotService/Report_20261105/resources.csv) — 1 groups, 2 records
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.botservice/botservices/{}/channels/{}`
    - [`BotChannel` (`Microsoft.BotService/botServices/channels`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/botservice/resource-manager/Microsoft.BotService/BotService/BotChannel.tsp#L14)
    - [`BotServicesChannels` (`Microsoft.BotService/botServices/channels`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/botservice/resource-manager/Microsoft.BotService/BotService/BotChannel.tsp#L14)
- [specification/confluent/resource-manager/Microsoft.Confluent/Confluent](../../../specification/confluent/resource-manager/Microsoft.Confluent/Confluent/Report_20261105/resources.csv) — 5 groups, 10 records
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.confluent/organizations/{}`
    - [`OrganizationResource` (`Microsoft.Confluent/organizations`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/confluent/resource-manager/Microsoft.Confluent/Confluent/OrganizationResource.tsp#L15)
    - [`Organizations` (`Microsoft.Confluent/organizations`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/confluent/resource-manager/Microsoft.Confluent/Confluent/OrganizationResource.tsp#L15)
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.confluent/organizations/{}/environments/{}`
    - [`OrganizationsEnvironments` (`Microsoft.Confluent/organizations/environments`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/confluent/resource-manager/Microsoft.Confluent/Confluent/SCEnvironmentRecord.tsp#L14)
    - [`SCEnvironmentRecord` (`Microsoft.Confluent/organizations/environments`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/confluent/resource-manager/Microsoft.Confluent/Confluent/SCEnvironmentRecord.tsp#L14)
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.confluent/organizations/{}/environments/{}/clusters/{}`
    - [`EnvironmentsClusters` (`Microsoft.Confluent/organizations/environments/clusters`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/confluent/resource-manager/Microsoft.Confluent/Confluent/SCClusterRecord.tsp#L14)
    - [`SCClusterRecord` (`Microsoft.Confluent/organizations/environments/clusters`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/confluent/resource-manager/Microsoft.Confluent/Confluent/SCClusterRecord.tsp#L14)
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.confluent/organizations/{}/environments/{}/clusters/{}/connectors/{}`
    - [`ClustersConnectors` (`Microsoft.Confluent/organizations/environments/clusters/connectors`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/confluent/resource-manager/Microsoft.Confluent/Confluent/ConnectorResource.tsp#L14)
    - [`ConnectorResource` (`Microsoft.Confluent/organizations/environments/clusters/connectors`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/confluent/resource-manager/Microsoft.Confluent/Confluent/ConnectorResource.tsp#L14)
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.confluent/organizations/{}/environments/{}/clusters/{}/topics/{}`
    - [`ClustersTopics` (`Microsoft.Confluent/organizations/environments/clusters/topics`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/confluent/resource-manager/Microsoft.Confluent/Confluent/TopicRecord.tsp#L14)
    - [`TopicRecord` (`Microsoft.Confluent/organizations/environments/clusters/topics`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/confluent/resource-manager/Microsoft.Confluent/Confluent/TopicRecord.tsp#L14)
- [specification/dashboard/resource-manager/Microsoft.Dashboard/Dashboard](../../../specification/dashboard/resource-manager/Microsoft.Dashboard/Dashboard/Report_20261105/resources.csv) — 1 groups, 2 records
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.dashboard/grafana/{}/privateendpointconnections/{}`
    - [`GrafanaPrivateEndpointConnections` (`Microsoft.Dashboard/grafana/privateEndpointConnections`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/dashboard/resource-manager/Microsoft.Dashboard/Dashboard/PrivateEndpointConnection.tsp#L14)
    - [`PrivateEndpointConnection` (`Microsoft.Dashboard/grafana/privateEndpointConnections`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/dashboard/resource-manager/Microsoft.Dashboard/Dashboard/PrivateEndpointConnection.tsp#L14)
- [specification/elastic/resource-manager/Microsoft.Elastic/Elastic](../../../specification/elastic/resource-manager/Microsoft.Elastic/Elastic/Report_20261105/resources.csv) — 4 groups, 8 records
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.elastic/monitors/{}`
    - [`ElasticMonitorResource` (`Microsoft.Elastic/monitors`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/elastic/resource-manager/Microsoft.Elastic/Elastic/ElasticMonitorResource.tsp#L14)
    - [`Monitors` (`Microsoft.Elastic/monitors`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/elastic/resource-manager/Microsoft.Elastic/Elastic/ElasticMonitorResource.tsp#L14)
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.elastic/monitors/{}/monitoredsubscriptions/{}`
    - [`MonitoredSubscriptionProperties` (`Microsoft.Elastic/monitors/monitoredSubscriptions`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/elastic/resource-manager/Microsoft.Elastic/Elastic/MonitoredSubscriptionProperties.tsp#L14)
    - [`MonitorsMonitoredSubscriptions` (`Microsoft.Elastic/monitors/monitoredSubscriptions`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/elastic/resource-manager/Microsoft.Elastic/Elastic/MonitoredSubscriptionProperties.tsp#L14)
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.elastic/monitors/{}/openaiintegrations/{}`
    - [`MonitorsOpenAiIntegrations` (`Microsoft.Elastic/monitors/openAIIntegrations`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/elastic/resource-manager/Microsoft.Elastic/Elastic/OpenAIIntegrationRPModel.tsp#L14)
    - [`OpenAIIntegrationRPModel` (`Microsoft.Elastic/monitors/openAIIntegrations`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/elastic/resource-manager/Microsoft.Elastic/Elastic/OpenAIIntegrationRPModel.tsp#L14)
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.elastic/monitors/{}/tagrules/{}`
    - [`MonitoringTagRules` (`Microsoft.Elastic/monitors/tagRules`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/elastic/resource-manager/Microsoft.Elastic/Elastic/MonitoringTagRules.tsp#L14)
    - [`MonitorsTagRules` (`Microsoft.Elastic/monitors/tagRules`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/elastic/resource-manager/Microsoft.Elastic/Elastic/MonitoringTagRules.tsp#L14)
- [specification/iothub/resource-manager/Microsoft.Devices/IoTHub](../../../specification/iothub/resource-manager/Microsoft.Devices/IoTHub/Report_20261105/resources.csv) — 1 groups, 2 records
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.devices/iothubs/{}`
    - [`IotHub` (`Microsoft.Devices/iotHubs`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/PrivateEndpointConnection.tsp#L15)
    - [`IotHubDescription` (`Microsoft.Devices/IotHubs`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/iothub/resource-manager/Microsoft.Devices/IoTHub/IotHubDescription.tsp#L13)
- [specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/ManagedNetworkFabric](../../../specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/ManagedNetworkFabric/Report_20261105/resources.csv) — 1 groups, 2 records
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.managednetworkfabric/networkfabrics/{}`
    - [`NetworkFabric` (`Microsoft.ManagedNetworkFabric/networkFabrics`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/ManagedNetworkFabric/resources/NetworkFabric.tsp#L10)
    - [`NetworkFabricDeprecated` (`Microsoft.ManagedNetworkFabric/networkFabrics`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/ManagedNetworkFabric/resources/NetworkFabric.tsp#L34)
- [specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers](../../../specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers/Report_20261105/resources.csv) — 1 groups, 2 records
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.dbformysql/flexibleservers/{}/backupsv2/{}`
    - [`FlexibleServersBackupsV2` (`Microsoft.DBforMySQL/flexibleServers/backupsV2`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers/ServerBackupV2.tsp#L17)
    - [`ServerBackupV2` (`Microsoft.DBforMySQL/flexibleServers/backupsV2`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers/ServerBackupV2.tsp#L17)
- [specification/nginx/resource-manager/Nginx.NginxPlus/NginxPlus](../../../specification/nginx/resource-manager/Nginx.NginxPlus/NginxPlus/Report_20261105/resources.csv) — 4 groups, 8 records
  - `/subscriptions/{}/resourcegroups/{}/providers/nginx.nginxplus/nginxdeployments/{}`
    - [`NginxDeployment` (`Nginx.NginxPlus/nginxDeployments`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/nginx/resource-manager/Nginx.NginxPlus/NginxPlus/NginxDeployment.tsp#L13)
    - [`ResourceGroupNginxDeployment` (`Nginx.NginxPlus/nginxDeployments`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/nginx/resource-manager/Nginx.NginxPlus/NginxPlus/NginxDeployment.tsp#L13)
  - `/subscriptions/{}/resourcegroups/{}/providers/nginx.nginxplus/nginxdeployments/{}/certificates/{}`
    - [`NginxCertificate` (`Nginx.NginxPlus/nginxDeployments/certificates`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/nginx/resource-manager/Nginx.NginxPlus/NginxPlus/NginxCertificate.tsp#L14)
    - [`ResourceGroupNginxCertificate` (`Nginx.NginxPlus/nginxDeployments/certificates`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/nginx/resource-manager/Nginx.NginxPlus/NginxPlus/NginxCertificate.tsp#L14)
  - `/subscriptions/{}/resourcegroups/{}/providers/nginx.nginxplus/nginxdeployments/{}/configurations/{}`
    - [`NginxConfigurationResponse` (`Nginx.NginxPlus/nginxDeployments/configurations`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/nginx/resource-manager/Nginx.NginxPlus/NginxPlus/NginxConfigurationResponse.tsp#L14)
    - [`ResourceGroupNginxConfigurationResponse` (`Nginx.NginxPlus/nginxDeployments/configurations`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/nginx/resource-manager/Nginx.NginxPlus/NginxPlus/NginxConfigurationResponse.tsp#L14)
  - `/subscriptions/{}/resourcegroups/{}/providers/nginx.nginxplus/nginxdeployments/{}/wafpolicies/{}`
    - [`NginxDeploymentWafPolicy` (`Nginx.NginxPlus/nginxDeployments/wafPolicies`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/nginx/resource-manager/Nginx.NginxPlus/NginxPlus/NginxDeploymentWafPolicy.tsp#L16)
    - [`ResourceGroupNginxDeploymentWafPolicy` (`Nginx.NginxPlus/nginxDeployments/wafPolicies`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/nginx/resource-manager/Nginx.NginxPlus/NginxPlus/NginxDeploymentWafPolicy.tsp#L16)
- [specification/quota/resource-manager/Microsoft.Quota/Quota](../../../specification/quota/resource-manager/Microsoft.Quota/Quota/Report_20261105/resources.csv) — 2 groups, 4 records
  - `/providers/microsoft.management/managementgroups/{}/providers/microsoft.quota/groupquotas/{}`
    - [`ManagementGroupGroupQuotasEntity` (`Microsoft.Quota/groupQuotas`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/quota/resource-manager/Microsoft.Quota/Quota/GroupQuotasEntity.tsp#L13)
    - [`ManagementGroupsGroupQuotas` (`Microsoft.Quota/groupQuotas`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/quota/resource-manager/Microsoft.Quota/Quota/GroupQuotasEntity.tsp#L13)
  - `/providers/microsoft.management/managementgroups/{}/providers/microsoft.quota/groupquotas/{}/subscriptions/{}`
    - [`GroupQuotasSubscriptions` (`Microsoft.Quota/groupQuotas/subscriptions`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/quota/resource-manager/Microsoft.Quota/Quota/GroupQuotaSubscriptionId.tsp#L14)
    - [`ManagementGroupGroupQuotaSubscriptionId` (`Microsoft.Quota/groupQuotas/subscriptions`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/quota/resource-manager/Microsoft.Quota/Quota/GroupQuotaSubscriptionId.tsp#L14)
- [specification/securityinsights/resource-manager/Microsoft.SecurityInsights/SecurityInsights](../../../specification/securityinsights/resource-manager/Microsoft.SecurityInsights/SecurityInsights/Report_20261105/resources.csv) — 3 groups, 6 records
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.operationalinsights/workspaces/{}/providers/microsoft.securityinsights/automationrules/{}`
    - [`ExternalResourceAutomationRule` (`Microsoft.SecurityInsights/automationRules`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/securityinsights/resource-manager/Microsoft.SecurityInsights/SecurityInsights/AutomationRule.tsp#L15)
    - [`WorkspacesAutomationRules` (`Microsoft.SecurityInsights/automationRules`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/securityinsights/resource-manager/Microsoft.SecurityInsights/SecurityInsights/AutomationRule.tsp#L15)
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.operationalinsights/workspaces/{}/providers/microsoft.securityinsights/entityqueries/{}`
    - [`EntityQueries` (`Microsoft.SecurityInsights/entityQueries`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/securityinsights/resource-manager/Microsoft.SecurityInsights/SecurityInsights/EntityQuery.tsp#L15)
    - [`ExternalResourceEntityQuery` (`Microsoft.SecurityInsights/entityQueries`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/securityinsights/resource-manager/Microsoft.SecurityInsights/SecurityInsights/EntityQuery.tsp#L15)
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.operationalinsights/workspaces/{}/providers/microsoft.securityinsights/onboardingstates/{}`
    - [`ExternalResourceSentinelOnboardingState` (`Microsoft.SecurityInsights/onboardingStates`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/securityinsights/resource-manager/Microsoft.SecurityInsights/SecurityInsights/SentinelOnboardingState.tsp#L14)
    - [`WorkspacesOnboardingStates` (`Microsoft.SecurityInsights/onboardingStates`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/securityinsights/resource-manager/Microsoft.SecurityInsights/SecurityInsights/SentinelOnboardingState.tsp#L14)
- [specification/storage/resource-manager/Microsoft.Storage/Storage](../../../specification/storage/resource-manager/Microsoft.Storage/Storage/Report_20261105/resources.csv) — 2 groups, 4 records
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.storage/storageaccounts/{}/blobservices/default/containers/{}/immutabilitypolicies/default`
    - [`ContainersImmutabilityPolicies` (`Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/storage/resource-manager/Microsoft.Storage/Storage/ImmutabilityPolicy.tsp#L14)
    - [`ImmutabilityPolicy` (`Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/storage/resource-manager/Microsoft.Storage/Storage/ImmutabilityPolicy.tsp#L14)
  - `/subscriptions/{}/resourcegroups/{}/providers/microsoft.storage/storageaccounts/{}/tableservices/default/tables/{}`
    - [`Table` (`Microsoft.Storage/storageAccounts/tableServices/tables`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/storage/resource-manager/Microsoft.Storage/Storage/Table.tsp#L14)
    - [`TableServicesTables` (`Microsoft.Storage/storageAccounts/tableServices/tables`)](https://github.com/Azure/azure-rest-api-specs/blob/5827ec08ce0dca7e04fcee8a67497921a7bf67f4/specification/storage/resource-manager/Microsoft.Storage/Storage/Table.tsp#L14)

## Resource name clashes

- Case-only ARM identity duplicates: 2 records across 1 project
- Genuine distinct-resource name clashes: 94 records across 23 projects

### Case-only ARM identity duplicates

- [specification/cost-management/resource-manager/Microsoft.CostManagement/CostManagement](../../../specification/cost-management/resource-manager/Microsoft.CostManagement/CostManagement/Report_20261105/status.json) — 2 clash records

### Genuine distinct-resource name clashes

- [specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/Report_20261105/status.json) — 12 clash records
- [specification/app/resource-manager/Microsoft.App/ContainerApps](../../../specification/app/resource-manager/Microsoft.App/ContainerApps/Report_20261105/status.json) — 2 clash records
- [specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/Report_20261105/status.json) — 2 clash records
- [specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/Report_20261105/status.json) — 2 clash records
- [specification/automation/resource-manager/Microsoft.Automation/Automation](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261105/status.json) — 11 clash records
- [specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices](../../../specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Report_20261105/status.json) — 2 clash records
- [specification/compute/resource-manager/Microsoft.Compute/Compute/Compute](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/Report_20261105/status.json) — 4 clash records
- [specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB](../../../specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/Report_20261105/status.json) — 3 clash records
- [specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter](../../../specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/Report_20261105/status.json) — 4 clash records
- [specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight](../../../specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Report_20261105/status.json) — 8 clash records
- [specification/iothub/resource-manager/Microsoft.Devices/IoTHub](../../../specification/iothub/resource-manager/Microsoft.Devices/IoTHub/Report_20261105/status.json) — 2 clash records
- [specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault](../../../specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault/Report_20261105/status.json) — 2 clash records
- [specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/Report_20261105/status.json) — 4 clash records
- [specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus/Report_20261105/status.json) — 2 clash records
- [specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi/Report_20261105/status.json) — 7 clash records
- [specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub](../../../specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub/Report_20261105/status.json) — 2 clash records
- [specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup](../../../specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup/Report_20261105/status.json) — 2 clash records
- [specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery](../../../specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/Report_20261105/status.json) — 2 clash records
- [specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI](../../../specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Report_20261105/status.json) — 2 clash records
- [specification/security/resource-manager/Microsoft.Security/Security/TasksAPI](../../../specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/Report_20261105/status.json) — 2 clash records
- [specification/sql/resource-manager/Microsoft.Sql/SQL](../../../specification/sql/resource-manager/Microsoft.Sql/SQL/Report_20261105/status.json) — 4 clash records
- [specification/support/resource-manager/Microsoft.Support/Support](../../../specification/support/resource-manager/Microsoft.Support/Support/Report_20261105/status.json) — 10 clash records
- [specification/web/resource-manager/Microsoft.Web/AppService](../../../specification/web/resource-manager/Microsoft.Web/AppService/Report_20261105/status.json) — 3 clash records

## Zero-resource projects (46)

- [specification/aiinfraoptimization/resource-manager/Microsoft.AIInfraOptimization/AIInfraOptimization](../../../specification/aiinfraoptimization/resource-manager/Microsoft.AIInfraOptimization/AIInfraOptimization/Report_20261105/status.json)
- [specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertRuleRecommendations](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertRuleRecommendations/Report_20261105/status.json)
- [specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule/Report_20261105/status.json)
- [specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/AnalyticsItems](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/AnalyticsItems/Report_20261105/status.json)
- [specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentAPIs](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentAPIs/Report_20261105/status.json)
- [specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Components](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Components/Report_20261105/status.json)
- [specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/DeletedWorkbookApi](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/DeletedWorkbookApi/Report_20261105/status.json)
- [specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Favorites](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Favorites/Report_20261105/status.json)
- [specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/LiveTokenApi](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/LiveTokenApi/Report_20261105/status.json)
- [specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation/Report_20261105/status.json)
- [specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestsApi](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestsApi/Report_20261105/status.json)
- [specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkBookOperations](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkBookOperations/Report_20261105/status.json)
- [specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ClassicAdmin](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ClassicAdmin/Report_20261105/status.json)
- [specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess/Report_20261105/status.json)
- [specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ProviderOperations](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ProviderOperations/Report_20261105/status.json)
- [specification/carbon/resource-manager/Microsoft.Carbon/Carbon](../../../specification/carbon/resource-manager/Microsoft.Carbon/Carbon/Report_20261105/status.json)
- [specification/commerce/resource-manager/Microsoft.Commerce/Commerce](../../../specification/commerce/resource-manager/Microsoft.Commerce/Commerce/Report_20261105/status.json)
- [specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeSku](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeSku/Report_20261105/status.json)
- [specification/edge/resource-manager/Microsoft.Edge/edge](../../../specification/edge/resource-manager/Microsoft.Edge/edge/Report_20261105/status.json)
- [specification/frontdoor/resource-manager/Microsoft.Network/FrontDoor](../../../specification/frontdoor/resource-manager/Microsoft.Network/FrontDoor/Report_20261105/status.json)
- [specification/gcpconnector/resource-manager/Microsoft.GcpConnector/GcpConnector](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/GcpConnector/Report_20261105/status.json)
- [specification/guestconfiguration/resource-manager/Microsoft.GuestConfiguration/Assignments](../../../specification/guestconfiguration/resource-manager/Microsoft.GuestConfiguration/Assignments/Report_20261105/status.json)
- [specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/operations](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/operations/Report_20261105/status.json)
- [specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Reviews](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Reviews/Report_20261105/status.json)
- [specification/monitor/resource-manager/Microsoft.Insights/DataCollectionRuleConfigurationMetadata](../../../specification/monitor/resource-manager/Microsoft.Insights/DataCollectionRuleConfigurationMetadata/Report_20261105/status.json)
- [specification/monitor/resource-manager/Microsoft.Insights/Insights/ActivityLogsApi](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/ActivityLogsApi/Report_20261105/status.json)
- [specification/monitor/resource-manager/Microsoft.Insights/Insights/AlertRulesIncidentsApi](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/AlertRulesIncidentsApi/Report_20261105/status.json)
- [specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricBaselinesApi](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricBaselinesApi/Report_20261105/status.json)
- [specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricsApi](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricsApi/Report_20261105/status.json)
- [specification/monitor/resource-manager/Microsoft.Insights/Insights/NetworkSecurityPerimeterApi](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/NetworkSecurityPerimeterApi/Report_20261105/status.json)
- [specification/network/resource-manager/Microsoft.Network/Network/Network](../../../specification/network/resource-manager/Microsoft.Network/Network/Network/Report_20261105/status.json)
- [specification/network/resource-manager/Microsoft.Network/Network/Vmss](../../../specification/network/resource-manager/Microsoft.Network/Network/Vmss/Report_20261105/status.json)
- [specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyTrackedResourcesApi](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyTrackedResourcesApi/Report_20261105/status.json)
- [specification/portalservices/resource-manager/Microsoft.PortalServices/extensions](../../../specification/portalservices/resource-manager/Microsoft.PortalServices/extensions/Report_20261105/status.json)
- [specification/purviewpolicy/resource-manager/Microsoft.Purview/PurviewPolicy](../../../specification/purviewpolicy/resource-manager/Microsoft.Purview/PurviewPolicy/Report_20261105/status.json)
- [specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceChanges](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceChanges/Report_20261105/status.json)
- [specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceGraphApi](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceGraphApi/Report_20261105/status.json)
- [specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceHistory](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceHistory/Report_20261105/status.json)
- [specification/resources/resource-manager/Microsoft.Resources/bicep](../../../specification/resources/resource-manager/Microsoft.Resources/bicep/Report_20261105/status.json)
- [specification/resources/resource-manager/Microsoft.Resources/resourceValidator](../../../specification/resources/resource-manager/Microsoft.Resources/resourceValidator/Report_20261105/status.json)
- [specification/resources/resource-manager/Microsoft.Resources/subscriptions](../../../specification/resources/resource-manager/Microsoft.Resources/subscriptions/Report_20261105/status.json)
- [specification/security/resource-manager/Microsoft.Security/Security/LocationsAPI](../../../specification/security/resource-manager/Microsoft.Security/Security/LocationsAPI/Report_20261105/status.json)
- [specification/security/resource-manager/Microsoft.Security/Security/OperationsAPI](../../../specification/security/resource-manager/Microsoft.Security/Security/OperationsAPI/Report_20261105/status.json)
- [specification/solutions/resource-manager/Microsoft.Solutions/Solutions](../../../specification/solutions/resource-manager/Microsoft.Solutions/Solutions/Report_20261105/status.json)
- [specification/terraform/resource-manager/Microsoft.AzureTerraform/AzureTerraform](../../../specification/terraform/resource-manager/Microsoft.AzureTerraform/AzureTerraform/Report_20261105/status.json)
- [specification/trafficmanager/resource-manager/Microsoft.Network/TrafficManager](../../../specification/trafficmanager/resource-manager/Microsoft.Network/TrafficManager/Report_20261105/status.json)

## Failed projects (0)

- None

## Skipped client-only projects (10)

- [specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Report_20261105/status.json)
- [specification/authorization/resource-manager/Microsoft.Authorization/Authorization](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/Report_20261105/status.json)
- [specification/compute/resource-manager/Microsoft.Compute/Compute](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/Report_20261105/status.json)
- [specification/monitor/resource-manager/Microsoft.Insights/Insights](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/Report_20261105/status.json)
- [specification/network/resource-manager/Microsoft.Network/Network](../../../specification/network/resource-manager/Microsoft.Network/Network/Report_20261105/status.json)
- [specification/networksecurity/resource-manager/Microsoft.NetworkSecurity](../../../specification/networksecurity/resource-manager/Microsoft.NetworkSecurity/Report_20261105/status.json)
- [specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/Report_20261105/status.json)
- [specification/reservations/resource-manager/Microsoft.Capacity/Reservations](../../../specification/reservations/resource-manager/Microsoft.Capacity/Reservations/Report_20261105/status.json)
- [specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/Report_20261105/status.json)
- [specification/security/resource-manager/Microsoft.Security/Security](../../../specification/security/resource-manager/Microsoft.Security/Security/Report_20261105/status.json)

## Project directory (375)

### advisor

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/advisor/resource-manager/Microsoft.Advisor/Advisor` | succeeded | 9 | 28 | [status](../../../specification/advisor/resource-manager/Microsoft.Advisor/Advisor/Report_20261105/status.json) · [resources](../../../specification/advisor/resource-manager/Microsoft.Advisor/Advisor/Report_20261105/resources.csv) · [operations](../../../specification/advisor/resource-manager/Microsoft.Advisor/Advisor/Report_20261105/operations.csv) |

### aiinfraoptimization

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/aiinfraoptimization/resource-manager/Microsoft.AIInfraOptimization/AIInfraOptimization` | zero-resource | 0 | 0 | [status](../../../specification/aiinfraoptimization/resource-manager/Microsoft.AIInfraOptimization/AIInfraOptimization/Report_20261105/status.json) · [resources](../../../specification/aiinfraoptimization/resource-manager/Microsoft.AIInfraOptimization/AIInfraOptimization/Report_20261105/resources.csv) · [operations](../../../specification/aiinfraoptimization/resource-manager/Microsoft.AIInfraOptimization/AIInfraOptimization/Report_20261105/operations.csv) |

### alertsmanagement

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertProcessingRules` | succeeded | 1 | 6 | [status](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertProcessingRules/Report_20261105/status.json) · [resources](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertProcessingRules/Report_20261105/resources.csv) · [operations](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertProcessingRules/Report_20261105/operations.csv) |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertRuleRecommendations` | zero-resource | 0 | 0 | [status](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertRuleRecommendations/Report_20261105/status.json) · [resources](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertRuleRecommendations/Report_20261105/resources.csv) · [operations](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertRuleRecommendations/Report_20261105/operations.csv) |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertsManagement` | succeeded | 2 | 9 | [status](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertsManagement/Report_20261105/status.json) · [resources](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertsManagement/Report_20261105/resources.csv) · [operations](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertsManagement/Report_20261105/operations.csv) |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule` | zero-resource | 0 | 0 | [status](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule/Report_20261105/status.json) · [resources](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule/Report_20261105/resources.csv) · [operations](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule/Report_20261105/operations.csv) |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PrometheusRuleGroups` | succeeded | 1 | 6 | [status](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PrometheusRuleGroups/Report_20261105/status.json) · [resources](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PrometheusRuleGroups/Report_20261105/resources.csv) · [operations](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PrometheusRuleGroups/Report_20261105/operations.csv) |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/TenantActivityLogAlerts` | succeeded | 1 | 6 | [status](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/TenantActivityLogAlerts/Report_20261105/status.json) · [resources](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/TenantActivityLogAlerts/Report_20261105/resources.csv) · [operations](../../../specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/TenantActivityLogAlerts/Report_20261105/operations.csv) |

### anyscale

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/anyscale/resource-manager/Anyscale.Platform/platform` | succeeded | 9 | 44 | [status](../../../specification/anyscale/resource-manager/Anyscale.Platform/platform/Report_20261105/status.json) · [resources](../../../specification/anyscale/resource-manager/Anyscale.Platform/platform/Report_20261105/resources.csv) · [operations](../../../specification/anyscale/resource-manager/Anyscale.Platform/platform/Report_20261105/operations.csv) |

### apicenter

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/apicenter/resource-manager/Microsoft.ApiCenter/ApiCenter` | succeeded | 10 | 45 | [status](../../../specification/apicenter/resource-manager/Microsoft.ApiCenter/ApiCenter/Report_20261105/status.json) · [resources](../../../specification/apicenter/resource-manager/Microsoft.ApiCenter/ApiCenter/Report_20261105/resources.csv) · [operations](../../../specification/apicenter/resource-manager/Microsoft.ApiCenter/ApiCenter/Report_20261105/operations.csv) |

### apimanagement

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway` | succeeded | 8 | 50 | [status](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/Report_20261105/status.json) · [resources](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/Report_20261105/resources.csv) · [operations](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/Report_20261105/operations.csv) |
| `specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement` | succeeded | 112 | 623 | [status](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/Report_20261105/status.json) · [resources](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/Report_20261105/resources.csv) · [operations](../../../specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/Report_20261105/operations.csv) |

### app

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/app/resource-manager/Microsoft.App/ContainerApps` | succeeded | 48 | 201 | [status](../../../specification/app/resource-manager/Microsoft.App/ContainerApps/Report_20261105/status.json) · [resources](../../../specification/app/resource-manager/Microsoft.App/ContainerApps/Report_20261105/resources.csv) · [operations](../../../specification/app/resource-manager/Microsoft.App/ContainerApps/Report_20261105/operations.csv) |
| `specification/app/resource-manager/Microsoft.App/SreAgent` | succeeded | 2 | 16 | [status](../../../specification/app/resource-manager/Microsoft.App/SreAgent/Report_20261105/status.json) · [resources](../../../specification/app/resource-manager/Microsoft.App/SreAgent/Report_20261105/resources.csv) · [operations](../../../specification/app/resource-manager/Microsoft.App/SreAgent/Report_20261105/operations.csv) |

### appcomplianceautomation

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/AppComplianceAutomation` | succeeded | 5 | 27 | [status](../../../specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/AppComplianceAutomation/Report_20261105/status.json) · [resources](../../../specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/AppComplianceAutomation/Report_20261105/resources.csv) · [operations](../../../specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/AppComplianceAutomation/Report_20261105/operations.csv) |

### appconfiguration

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration` | succeeded | 7 | 23 | [status](../../../specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration/Report_20261105/status.json) · [resources](../../../specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration/Report_20261105/resources.csv) · [operations](../../../specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration/Report_20261105/operations.csv) |

### applicationinsights

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights` | skipped | 0 | 0 | [status](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Report_20261105/status.json) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/AnalyticsItems` | zero-resource | 0 | 0 | [status](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/AnalyticsItems/Report_20261105/status.json) · [resources](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/AnalyticsItems/Report_20261105/resources.csv) · [operations](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/AnalyticsItems/Report_20261105/operations.csv) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentAPIs` | zero-resource | 0 | 0 | [status](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentAPIs/Report_20261105/status.json) · [resources](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentAPIs/Report_20261105/resources.csv) · [operations](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentAPIs/Report_20261105/operations.csv) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentLinkedStorageAccountApi` | succeeded | 2 | 4 | [status](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentLinkedStorageAccountApi/Report_20261105/status.json) · [resources](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentLinkedStorageAccountApi/Report_20261105/resources.csv) · [operations](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentLinkedStorageAccountApi/Report_20261105/operations.csv) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Components` | zero-resource | 0 | 0 | [status](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Components/Report_20261105/status.json) · [resources](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Components/Report_20261105/resources.csv) · [operations](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Components/Report_20261105/operations.csv) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/DeletedWorkbookApi` | zero-resource | 0 | 0 | [status](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/DeletedWorkbookApi/Report_20261105/status.json) · [resources](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/DeletedWorkbookApi/Report_20261105/resources.csv) · [operations](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/DeletedWorkbookApi/Report_20261105/operations.csv) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Favorites` | zero-resource | 0 | 0 | [status](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Favorites/Report_20261105/status.json) · [resources](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Favorites/Report_20261105/resources.csv) · [operations](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Favorites/Report_20261105/operations.csv) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/LiveTokenApi` | zero-resource | 0 | 0 | [status](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/LiveTokenApi/Report_20261105/status.json) · [resources](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/LiveTokenApi/Report_20261105/resources.csv) · [operations](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/LiveTokenApi/Report_20261105/operations.csv) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation` | zero-resource | 0 | 0 | [status](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation/Report_20261105/status.json) · [resources](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation/Report_20261105/resources.csv) · [operations](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation/Report_20261105/operations.csv) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestsApi` | zero-resource | 0 | 0 | [status](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestsApi/Report_20261105/status.json) · [resources](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestsApi/Report_20261105/resources.csv) · [operations](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestsApi/Report_20261105/operations.csv) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkBookOperations` | zero-resource | 0 | 0 | [status](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkBookOperations/Report_20261105/status.json) · [resources](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkBookOperations/Report_20261105/resources.csv) · [operations](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkBookOperations/Report_20261105/operations.csv) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbooksApi` | succeeded | 2 | 8 | [status](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbooksApi/Report_20261105/status.json) · [resources](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbooksApi/Report_20261105/resources.csv) · [operations](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbooksApi/Report_20261105/operations.csv) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbookTemplatesApi` | succeeded | 1 | 5 | [status](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbookTemplatesApi/Report_20261105/status.json) · [resources](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbookTemplatesApi/Report_20261105/resources.csv) · [operations](../../../specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbookTemplatesApi/Report_20261105/operations.csv) |

### attestation

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/attestation/resource-manager/Microsoft.Attestation/Attestation` | succeeded | 2 | 11 | [status](../../../specification/attestation/resource-manager/Microsoft.Attestation/Attestation/Report_20261105/status.json) · [resources](../../../specification/attestation/resource-manager/Microsoft.Attestation/Attestation/Report_20261105/resources.csv) · [operations](../../../specification/attestation/resource-manager/Microsoft.Attestation/Attestation/Report_20261105/operations.csv) |

### authorization

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization` | skipped | 0 | 0 | [status](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/Report_20261105/status.json) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AccessReview` | succeeded | 10 | 53 | [status](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AccessReview/Report_20261105/status.json) · [resources](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AccessReview/Report_20261105/resources.csv) · [operations](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AccessReview/Report_20261105/operations.csv) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AttributeNamespaces` | succeeded | 1 | 3 | [status](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AttributeNamespaces/Report_20261105/status.json) · [resources](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AttributeNamespaces/Report_20261105/resources.csv) · [operations](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AttributeNamespaces/Report_20261105/operations.csv) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/Authorization` | succeeded | 8 | 26 | [status](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/Authorization/Report_20261105/status.json) · [resources](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/Authorization/Report_20261105/resources.csv) · [operations](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/Authorization/Report_20261105/operations.csv) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ClassicAdmin` | zero-resource | 0 | 0 | [status](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ClassicAdmin/Report_20261105/status.json) · [resources](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ClassicAdmin/Report_20261105/resources.csv) · [operations](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ClassicAdmin/Report_20261105/operations.csv) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment` | succeeded | 2 | 8 | [status](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/Report_20261105/status.json) · [resources](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/Report_20261105/resources.csv) · [operations](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/Report_20261105/operations.csv) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess` | zero-resource | 0 | 0 | [status](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess/Report_20261105/status.json) · [resources](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess/Report_20261105/resources.csv) · [operations](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess/Report_20261105/operations.csv) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ProviderOperations` | zero-resource | 0 | 0 | [status](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ProviderOperations/Report_20261105/status.json) · [resources](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ProviderOperations/Report_20261105/resources.csv) · [operations](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ProviderOperations/Report_20261105/operations.csv) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment` | succeeded | 2 | 10 | [status](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/Report_20261105/status.json) · [resources](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/Report_20261105/resources.csv) · [operations](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/Report_20261105/operations.csv) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleDefinitions` | succeeded | 1 | 4 | [status](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleDefinitions/Report_20261105/status.json) · [resources](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleDefinitions/Report_20261105/resources.csv) · [operations](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleDefinitions/Report_20261105/operations.csv) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleManagementAlerts` | succeeded | 4 | 12 | [status](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleManagementAlerts/Report_20261105/status.json) · [resources](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleManagementAlerts/Report_20261105/resources.csv) · [operations](../../../specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleManagementAlerts/Report_20261105/operations.csv) |

### automation

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/automation/resource-manager/Microsoft.Automation/Automation` | succeeded | 33 | 169 | [status](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261105/status.json) · [resources](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261105/resources.csv) · [operations](../../../specification/automation/resource-manager/Microsoft.Automation/Automation/Report_20261105/operations.csv) |

### azure-kusto

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/azure-kusto/resource-manager/Microsoft.Kusto/Kusto` | succeeded | 10 | 59 | [status](../../../specification/azure-kusto/resource-manager/Microsoft.Kusto/Kusto/Report_20261105/status.json) · [resources](../../../specification/azure-kusto/resource-manager/Microsoft.Kusto/Kusto/Report_20261105/resources.csv) · [operations](../../../specification/azure-kusto/resource-manager/Microsoft.Kusto/Kusto/Report_20261105/operations.csv) |

### azure-native-integrations

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform` | succeeded | 2 | 16 | [status](../../../specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/Report_20261105/status.json) · [resources](../../../specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/Report_20261105/resources.csv) · [operations](../../../specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/Report_20261105/operations.csv) |

### azurearcdata

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/azurearcdata/resource-manager/Microsoft.AzureArcData/AzureArcData` | succeeded | 10 | 79 | [status](../../../specification/azurearcdata/resource-manager/Microsoft.AzureArcData/AzureArcData/Report_20261105/status.json) · [resources](../../../specification/azurearcdata/resource-manager/Microsoft.AzureArcData/AzureArcData/Report_20261105/resources.csv) · [operations](../../../specification/azurearcdata/resource-manager/Microsoft.AzureArcData/AzureArcData/Report_20261105/operations.csv) |

### azuredatatransfer

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer` | succeeded | 4 | 42 | [status](../../../specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/Report_20261105/status.json) · [resources](../../../specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/Report_20261105/resources.csv) · [operations](../../../specification/azuredatatransfer/resource-manager/Microsoft.AzureDataTransfer/AzureDataTransfer/Report_20261105/operations.csv) |

### azuredependencymap

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/azuredependencymap/resource-manager/Microsoft.DependencyMap/DependencyMap` | succeeded | 2 | 16 | [status](../../../specification/azuredependencymap/resource-manager/Microsoft.DependencyMap/DependencyMap/Report_20261105/status.json) · [resources](../../../specification/azuredependencymap/resource-manager/Microsoft.DependencyMap/DependencyMap/Report_20261105/resources.csv) · [operations](../../../specification/azuredependencymap/resource-manager/Microsoft.DependencyMap/DependencyMap/Report_20261105/operations.csv) |

### azurefleet

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/azurefleet/resource-manager/Microsoft.AzureFleet/AzureFleet` | succeeded | 1 | 8 | [status](../../../specification/azurefleet/resource-manager/Microsoft.AzureFleet/AzureFleet/Report_20261105/status.json) · [resources](../../../specification/azurefleet/resource-manager/Microsoft.AzureFleet/AzureFleet/Report_20261105/resources.csv) · [operations](../../../specification/azurefleet/resource-manager/Microsoft.AzureFleet/AzureFleet/Report_20261105/operations.csv) |

### azurelargeinstance

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/azurelargeinstance/resource-manager/Microsoft.AzureLargeInstance/AzureLargeInstance` | succeeded | 2 | 15 | [status](../../../specification/azurelargeinstance/resource-manager/Microsoft.AzureLargeInstance/AzureLargeInstance/Report_20261105/status.json) · [resources](../../../specification/azurelargeinstance/resource-manager/Microsoft.AzureLargeInstance/AzureLargeInstance/Report_20261105/resources.csv) · [operations](../../../specification/azurelargeinstance/resource-manager/Microsoft.AzureLargeInstance/AzureLargeInstance/Report_20261105/operations.csv) |

### azureresiliencemanagement

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement` | succeeded | 20 | 176 | [status](../../../specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement/Report_20261105/status.json) · [resources](../../../specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement/Report_20261105/resources.csv) · [operations](../../../specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement/Report_20261105/operations.csv) |

### azureserviceconnectioncontroller

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/azureserviceconnectioncontroller/resource-manager/Microsoft.Network/AzureServiceConnectionController` | succeeded | 1 | 6 | [status](../../../specification/azureserviceconnectioncontroller/resource-manager/Microsoft.Network/AzureServiceConnectionController/Report_20261105/status.json) · [resources](../../../specification/azureserviceconnectioncontroller/resource-manager/Microsoft.Network/AzureServiceConnectionController/Report_20261105/resources.csv) · [operations](../../../specification/azureserviceconnectioncontroller/resource-manager/Microsoft.Network/AzureServiceConnectionController/Report_20261105/operations.csv) |

### azurestackhci

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI` | succeeded | 37 | 157 | [status](../../../specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/Report_20261105/status.json) · [resources](../../../specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/Report_20261105/resources.csv) · [operations](../../../specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/Report_20261105/operations.csv) |
| `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCIVM` | succeeded | 19 | 106 | [status](../../../specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCIVM/Report_20261105/status.json) · [resources](../../../specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCIVM/Report_20261105/resources.csv) · [operations](../../../specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCIVM/Report_20261105/operations.csv) |

### batch

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/batch/resource-manager/Microsoft.Batch/Batch` | succeeded | 9 | 43 | [status](../../../specification/batch/resource-manager/Microsoft.Batch/Batch/Report_20261105/status.json) · [resources](../../../specification/batch/resource-manager/Microsoft.Batch/Batch/Report_20261105/resources.csv) · [operations](../../../specification/batch/resource-manager/Microsoft.Batch/Batch/Report_20261105/operations.csv) |

### billing

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/billing/resource-manager/Microsoft.Billing/Billing` | succeeded | 46 | 183 | [status](../../../specification/billing/resource-manager/Microsoft.Billing/Billing/Report_20261105/status.json) · [resources](../../../specification/billing/resource-manager/Microsoft.Billing/Billing/Report_20261105/resources.csv) · [operations](../../../specification/billing/resource-manager/Microsoft.Billing/Billing/Report_20261105/operations.csv) |

### billingbenefits

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/billingbenefits/resource-manager/Microsoft.BillingBenefits/BillingBenefits` | succeeded | 20 | 69 | [status](../../../specification/billingbenefits/resource-manager/Microsoft.BillingBenefits/BillingBenefits/Report_20261105/status.json) · [resources](../../../specification/billingbenefits/resource-manager/Microsoft.BillingBenefits/BillingBenefits/Report_20261105/resources.csv) · [operations](../../../specification/billingbenefits/resource-manager/Microsoft.BillingBenefits/BillingBenefits/Report_20261105/operations.csv) |

### billingtrust

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/billingtrust/resource-manager/Microsoft.BillingTrust/BillingTrust` | succeeded | 2 | 9 | [status](../../../specification/billingtrust/resource-manager/Microsoft.BillingTrust/BillingTrust/Report_20261105/status.json) · [resources](../../../specification/billingtrust/resource-manager/Microsoft.BillingTrust/BillingTrust/Report_20261105/resources.csv) · [operations](../../../specification/billingtrust/resource-manager/Microsoft.BillingTrust/BillingTrust/Report_20261105/operations.csv) |

### botservice

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/botservice/resource-manager/Microsoft.BotService/BotService` | succeeded | 6 | 30 | [status](../../../specification/botservice/resource-manager/Microsoft.BotService/BotService/Report_20261105/status.json) · [resources](../../../specification/botservice/resource-manager/Microsoft.BotService/BotService/Report_20261105/resources.csv) · [operations](../../../specification/botservice/resource-manager/Microsoft.BotService/BotService/Report_20261105/operations.csv) |

### carbon

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/carbon/resource-manager/Microsoft.Carbon/Carbon` | zero-resource | 0 | 0 | [status](../../../specification/carbon/resource-manager/Microsoft.Carbon/Carbon/Report_20261105/status.json) · [resources](../../../specification/carbon/resource-manager/Microsoft.Carbon/Carbon/Report_20261105/resources.csv) · [operations](../../../specification/carbon/resource-manager/Microsoft.Carbon/Carbon/Report_20261105/operations.csv) |

### cdn

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | succeeded | 20 | 133 | [status](../../../specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Report_20261105/status.json) · [resources](../../../specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Report_20261105/resources.csv) · [operations](../../../specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Report_20261105/operations.csv) |
| `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions` | succeeded | 3 | 33 | [status](../../../specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/Report_20261105/status.json) · [resources](../../../specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/Report_20261105/resources.csv) · [operations](../../../specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/Report_20261105/operations.csv) |

### certificateregistration

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/certificateregistration/resource-manager/Microsoft.CertificateRegistration/CertificateRegistration` | succeeded | 3 | 21 | [status](../../../specification/certificateregistration/resource-manager/Microsoft.CertificateRegistration/CertificateRegistration/Report_20261105/status.json) · [resources](../../../specification/certificateregistration/resource-manager/Microsoft.CertificateRegistration/CertificateRegistration/Report_20261105/resources.csv) · [operations](../../../specification/certificateregistration/resource-manager/Microsoft.CertificateRegistration/CertificateRegistration/Report_20261105/operations.csv) |

### chaos

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/chaos/resource-manager/Microsoft.Chaos/Chaos` | succeeded | 21 | 77 | [status](../../../specification/chaos/resource-manager/Microsoft.Chaos/Chaos/Report_20261105/status.json) · [resources](../../../specification/chaos/resource-manager/Microsoft.Chaos/Chaos/Report_20261105/resources.csv) · [operations](../../../specification/chaos/resource-manager/Microsoft.Chaos/Chaos/Report_20261105/operations.csv) |

### cloudhealth

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/cloudhealth/resource-manager/Microsoft.CloudHealth/CloudHealth` | succeeded | 6 | 42 | [status](../../../specification/cloudhealth/resource-manager/Microsoft.CloudHealth/CloudHealth/Report_20261105/status.json) · [resources](../../../specification/cloudhealth/resource-manager/Microsoft.CloudHealth/CloudHealth/Report_20261105/resources.csv) · [operations](../../../specification/cloudhealth/resource-manager/Microsoft.CloudHealth/CloudHealth/Report_20261105/operations.csv) |

### codesigning

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/codesigning/resource-manager/Microsoft.CodeSigning/CodeSigning` | succeeded | 2 | 12 | [status](../../../specification/codesigning/resource-manager/Microsoft.CodeSigning/CodeSigning/Report_20261105/status.json) · [resources](../../../specification/codesigning/resource-manager/Microsoft.CodeSigning/CodeSigning/Report_20261105/resources.csv) · [operations](../../../specification/codesigning/resource-manager/Microsoft.CodeSigning/CodeSigning/Report_20261105/operations.csv) |

### cognitiveservices

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices` | succeeded | 40 | 183 | [status](../../../specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Report_20261105/status.json) · [resources](../../../specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Report_20261105/resources.csv) · [operations](../../../specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Report_20261105/operations.csv) |

### commerce

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/commerce/resource-manager/Microsoft.Commerce/Commerce` | zero-resource | 0 | 0 | [status](../../../specification/commerce/resource-manager/Microsoft.Commerce/Commerce/Report_20261105/status.json) · [resources](../../../specification/commerce/resource-manager/Microsoft.Commerce/Commerce/Report_20261105/resources.csv) · [operations](../../../specification/commerce/resource-manager/Microsoft.Commerce/Commerce/Report_20261105/operations.csv) |

### communication

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/communication/resource-manager/Microsoft.Communication/Communication` | succeeded | 7 | 38 | [status](../../../specification/communication/resource-manager/Microsoft.Communication/Communication/Report_20261105/status.json) · [resources](../../../specification/communication/resource-manager/Microsoft.Communication/Communication/Report_20261105/resources.csv) · [operations](../../../specification/communication/resource-manager/Microsoft.Communication/Communication/Report_20261105/operations.csv) |

### communitytraining

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/communitytraining/resource-manager/Microsoft.Community/Community` | succeeded | 1 | 6 | [status](../../../specification/communitytraining/resource-manager/Microsoft.Community/Community/Report_20261105/status.json) · [resources](../../../specification/communitytraining/resource-manager/Microsoft.Community/Community/Report_20261105/resources.csv) · [operations](../../../specification/communitytraining/resource-manager/Microsoft.Community/Community/Report_20261105/operations.csv) |

### compute

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/compute/resource-manager/Microsoft.Compute/Bulkactions` | succeeded | 6 | 37 | [status](../../../specification/compute/resource-manager/Microsoft.Compute/Bulkactions/Report_20261105/status.json) · [resources](../../../specification/compute/resource-manager/Microsoft.Compute/Bulkactions/Report_20261105/resources.csv) · [operations](../../../specification/compute/resource-manager/Microsoft.Compute/Bulkactions/Report_20261105/operations.csv) |
| `specification/compute/resource-manager/Microsoft.Compute/Compute` | skipped | 0 | 0 | [status](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/Report_20261105/status.json) |
| `specification/compute/resource-manager/Microsoft.Compute/Compute/Compute` | succeeded | 26 | 175 | [status](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/Report_20261105/status.json) · [resources](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/Report_20261105/resources.csv) · [operations](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/Report_20261105/operations.csv) |
| `specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeDisk` | succeeded | 8 | 40 | [status](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeDisk/Report_20261105/status.json) · [resources](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeDisk/Report_20261105/resources.csv) · [operations](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeDisk/Report_20261105/operations.csv) |
| `specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeGallery` | succeeded | 9 | 48 | [status](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeGallery/Report_20261105/status.json) · [resources](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeGallery/Report_20261105/resources.csv) · [operations](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeGallery/Report_20261105/operations.csv) |
| `specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeSku` | zero-resource | 0 | 0 | [status](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeSku/Report_20261105/status.json) · [resources](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeSku/Report_20261105/resources.csv) · [operations](../../../specification/compute/resource-manager/Microsoft.Compute/Compute/ComputeSku/Report_20261105/operations.csv) |
| `specification/compute/resource-manager/Microsoft.Compute/Recommender` | succeeded | 4 | 6 | [status](../../../specification/compute/resource-manager/Microsoft.Compute/Recommender/Report_20261105/status.json) · [resources](../../../specification/compute/resource-manager/Microsoft.Compute/Recommender/Report_20261105/resources.csv) · [operations](../../../specification/compute/resource-manager/Microsoft.Compute/Recommender/Report_20261105/operations.csv) |
| `specification/compute/resource-manager/Microsoft.Compute/WorkloadManager` | succeeded | 4 | 21 | [status](../../../specification/compute/resource-manager/Microsoft.Compute/WorkloadManager/Report_20261105/status.json) · [resources](../../../specification/compute/resource-manager/Microsoft.Compute/WorkloadManager/Report_20261105/resources.csv) · [operations](../../../specification/compute/resource-manager/Microsoft.Compute/WorkloadManager/Report_20261105/operations.csv) |

### computelimit

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/computelimit/resource-manager/Microsoft.ComputeLimit/ComputeLimit` | succeeded | 8 | 28 | [status](../../../specification/computelimit/resource-manager/Microsoft.ComputeLimit/ComputeLimit/Report_20261105/status.json) · [resources](../../../specification/computelimit/resource-manager/Microsoft.ComputeLimit/ComputeLimit/Report_20261105/resources.csv) · [operations](../../../specification/computelimit/resource-manager/Microsoft.ComputeLimit/ComputeLimit/Report_20261105/operations.csv) |

### computeschedule

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/computeschedule/resource-manager/Microsoft.ComputeSchedule/ComputeSchedule` | succeeded | 2 | 18 | [status](../../../specification/computeschedule/resource-manager/Microsoft.ComputeSchedule/ComputeSchedule/Report_20261105/status.json) · [resources](../../../specification/computeschedule/resource-manager/Microsoft.ComputeSchedule/ComputeSchedule/Report_20261105/resources.csv) · [operations](../../../specification/computeschedule/resource-manager/Microsoft.ComputeSchedule/ComputeSchedule/Report_20261105/operations.csv) |

### confidentialledger

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/confidentialledger/resource-manager/Microsoft.ConfidentialLedger/ConfidentialLedger` | succeeded | 2 | 16 | [status](../../../specification/confidentialledger/resource-manager/Microsoft.ConfidentialLedger/ConfidentialLedger/Report_20261105/status.json) · [resources](../../../specification/confidentialledger/resource-manager/Microsoft.ConfidentialLedger/ConfidentialLedger/Report_20261105/resources.csv) · [operations](../../../specification/confidentialledger/resource-manager/Microsoft.ConfidentialLedger/ConfidentialLedger/Report_20261105/operations.csv) |

### confluent

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/confluent/resource-manager/Microsoft.Confluent/Confluent` | succeeded | 12 | 62 | [status](../../../specification/confluent/resource-manager/Microsoft.Confluent/Confluent/Report_20261105/status.json) · [resources](../../../specification/confluent/resource-manager/Microsoft.Confluent/Confluent/Report_20261105/resources.csv) · [operations](../../../specification/confluent/resource-manager/Microsoft.Confluent/Confluent/Report_20261105/operations.csv) |

### connectedcache

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/connectedcache/resource-manager/Microsoft.ConnectedCache/ConnectedCache` | succeeded | 6 | 42 | [status](../../../specification/connectedcache/resource-manager/Microsoft.ConnectedCache/ConnectedCache/Report_20261105/status.json) · [resources](../../../specification/connectedcache/resource-manager/Microsoft.ConnectedCache/ConnectedCache/Report_20261105/resources.csv) · [operations](../../../specification/connectedcache/resource-manager/Microsoft.ConnectedCache/ConnectedCache/Report_20261105/operations.csv) |

### consumption

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/consumption/resource-manager/Microsoft.Consumption/Consumption` | succeeded | 7 | 7 | [status](../../../specification/consumption/resource-manager/Microsoft.Consumption/Consumption/Report_20261105/status.json) · [resources](../../../specification/consumption/resource-manager/Microsoft.Consumption/Consumption/Report_20261105/resources.csv) · [operations](../../../specification/consumption/resource-manager/Microsoft.Consumption/Consumption/Report_20261105/operations.csv) |

### containerinstance

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/containerinstance/resource-manager/Microsoft.ContainerInstance/ContainerInstance` | succeeded | 6 | 37 | [status](../../../specification/containerinstance/resource-manager/Microsoft.ContainerInstance/ContainerInstance/Report_20261105/status.json) · [resources](../../../specification/containerinstance/resource-manager/Microsoft.ContainerInstance/ContainerInstance/Report_20261105/resources.csv) · [operations](../../../specification/containerinstance/resource-manager/Microsoft.ContainerInstance/ContainerInstance/Report_20261105/operations.csv) |

### containerregistry

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry` | succeeded | 16 | 78 | [status](../../../specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry/Report_20261105/status.json) · [resources](../../../specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry/Report_20261105/resources.csv) · [operations](../../../specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry/Report_20261105/operations.csv) |
| `specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/RegistryTasks` | succeeded | 5 | 23 | [status](../../../specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/RegistryTasks/Report_20261105/status.json) · [resources](../../../specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/RegistryTasks/Report_20261105/resources.csv) · [operations](../../../specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/RegistryTasks/Report_20261105/operations.csv) |

### containerservice

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aimanager` | succeeded | 7 | 30 | [status](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/aimanager/Report_20261105/status.json) · [resources](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/aimanager/Report_20261105/resources.csv) · [operations](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/aimanager/Report_20261105/operations.csv) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | succeeded | 24 | 114 | [status](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/aks/Report_20261105/status.json) · [resources](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/aks/Report_20261105/resources.csv) · [operations](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/aks/Report_20261105/operations.csv) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/deploymentsafeguards` | succeeded | 1 | 4 | [status](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/deploymentsafeguards/Report_20261105/status.json) · [resources](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/deploymentsafeguards/Report_20261105/resources.csv) · [operations](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/deploymentsafeguards/Report_20261105/operations.csv) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/fleet` | succeeded | 8 | 44 | [status](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/fleet/Report_20261105/status.json) · [resources](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/fleet/Report_20261105/resources.csv) · [operations](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/fleet/Report_20261105/operations.csv) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/nodecustomization` | succeeded | 2 | 9 | [status](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/nodecustomization/Report_20261105/status.json) · [resources](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/nodecustomization/Report_20261105/resources.csv) · [operations](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/nodecustomization/Report_20261105/operations.csv) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/preparedimagespecification` | succeeded | 2 | 9 | [status](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/preparedimagespecification/Report_20261105/status.json) · [resources](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/preparedimagespecification/Report_20261105/resources.csv) · [operations](../../../specification/containerservice/resource-manager/Microsoft.ContainerService/preparedimagespecification/Report_20261105/operations.csv) |

### containerstorage

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/containerstorage/resource-manager/Microsoft.ContainerStorage/ContainerStorage` | succeeded | 3 | 15 | [status](../../../specification/containerstorage/resource-manager/Microsoft.ContainerStorage/ContainerStorage/Report_20261105/status.json) · [resources](../../../specification/containerstorage/resource-manager/Microsoft.ContainerStorage/ContainerStorage/Report_20261105/resources.csv) · [operations](../../../specification/containerstorage/resource-manager/Microsoft.ContainerStorage/ContainerStorage/Report_20261105/operations.csv) |

### cosmos-db

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB` | succeeded | 59 | 301 | [status](../../../specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/Report_20261105/status.json) · [resources](../../../specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/Report_20261105/resources.csv) · [operations](../../../specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/Report_20261105/operations.csv) |

### cost-management

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/cost-management/resource-manager/Microsoft.CostManagement/CostManagement` | succeeded | 15 | 45 | [status](../../../specification/cost-management/resource-manager/Microsoft.CostManagement/CostManagement/Report_20261105/status.json) · [resources](../../../specification/cost-management/resource-manager/Microsoft.CostManagement/CostManagement/Report_20261105/resources.csv) · [operations](../../../specification/cost-management/resource-manager/Microsoft.CostManagement/CostManagement/Report_20261105/operations.csv) |

### dashboard

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/dashboard/resource-manager/Microsoft.Dashboard/Dashboard` | succeeded | 8 | 35 | [status](../../../specification/dashboard/resource-manager/Microsoft.Dashboard/Dashboard/Report_20261105/status.json) · [resources](../../../specification/dashboard/resource-manager/Microsoft.Dashboard/Dashboard/Report_20261105/resources.csv) · [operations](../../../specification/dashboard/resource-manager/Microsoft.Dashboard/Dashboard/Report_20261105/operations.csv) |

### databasefleetmanager

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/databasefleetmanager/resource-manager/Microsoft.DatabaseFleetManager/DatabaseFleetManager` | succeeded | 5 | 31 | [status](../../../specification/databasefleetmanager/resource-manager/Microsoft.DatabaseFleetManager/DatabaseFleetManager/Report_20261105/status.json) · [resources](../../../specification/databasefleetmanager/resource-manager/Microsoft.DatabaseFleetManager/DatabaseFleetManager/Report_20261105/resources.csv) · [operations](../../../specification/databasefleetmanager/resource-manager/Microsoft.DatabaseFleetManager/DatabaseFleetManager/Report_20261105/operations.csv) |

### databasewatcher

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/databasewatcher/resource-manager/Microsoft.DatabaseWatcher/DatabaseWatcher` | succeeded | 5 | 23 | [status](../../../specification/databasewatcher/resource-manager/Microsoft.DatabaseWatcher/DatabaseWatcher/Report_20261105/status.json) · [resources](../../../specification/databasewatcher/resource-manager/Microsoft.DatabaseWatcher/DatabaseWatcher/Report_20261105/resources.csv) · [operations](../../../specification/databasewatcher/resource-manager/Microsoft.DatabaseWatcher/DatabaseWatcher/Report_20261105/operations.csv) |

### databox

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/databox/resource-manager/Microsoft.DataBox/DataBox` | succeeded | 1 | 10 | [status](../../../specification/databox/resource-manager/Microsoft.DataBox/DataBox/Report_20261105/status.json) · [resources](../../../specification/databox/resource-manager/Microsoft.DataBox/DataBox/Report_20261105/resources.csv) · [operations](../../../specification/databox/resource-manager/Microsoft.DataBox/DataBox/Report_20261105/operations.csv) |

### databoxedge

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/databoxedge/resource-manager/Microsoft.DataBoxEdge/DataBoxEdge` | succeeded | 20 | 75 | [status](../../../specification/databoxedge/resource-manager/Microsoft.DataBoxEdge/DataBoxEdge/Report_20261105/status.json) · [resources](../../../specification/databoxedge/resource-manager/Microsoft.DataBoxEdge/DataBoxEdge/Report_20261105/resources.csv) · [operations](../../../specification/databoxedge/resource-manager/Microsoft.DataBoxEdge/DataBoxEdge/Report_20261105/operations.csv) |

### databricks

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/databricks/resource-manager/Microsoft.Databricks/Databricks` | succeeded | 5 | 22 | [status](../../../specification/databricks/resource-manager/Microsoft.Databricks/Databricks/Report_20261105/status.json) · [resources](../../../specification/databricks/resource-manager/Microsoft.Databricks/Databricks/Report_20261105/resources.csv) · [operations](../../../specification/databricks/resource-manager/Microsoft.Databricks/Databricks/Report_20261105/operations.csv) |

### datadog

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/datadog/resource-manager/Microsoft.Datadog/Datadog` | succeeded | 4 | 30 | [status](../../../specification/datadog/resource-manager/Microsoft.Datadog/Datadog/Report_20261105/status.json) · [resources](../../../specification/datadog/resource-manager/Microsoft.Datadog/Datadog/Report_20261105/resources.csv) · [operations](../../../specification/datadog/resource-manager/Microsoft.Datadog/Datadog/Report_20261105/operations.csv) |

### datafactory

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory` | succeeded | 13 | 101 | [status](../../../specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/Report_20261105/status.json) · [resources](../../../specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/Report_20261105/resources.csv) · [operations](../../../specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/Report_20261105/operations.csv) |

### datamigration

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/datamigration/resource-manager/Microsoft.DataMigration/DataMigration` | succeeded | 17 | 77 | [status](../../../specification/datamigration/resource-manager/Microsoft.DataMigration/DataMigration/Report_20261105/status.json) · [resources](../../../specification/datamigration/resource-manager/Microsoft.DataMigration/DataMigration/Report_20261105/resources.csv) · [operations](../../../specification/datamigration/resource-manager/Microsoft.DataMigration/DataMigration/Report_20261105/operations.csv) |

### dataprotection

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection` | succeeded | 17 | 62 | [status](../../../specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection/Report_20261105/status.json) · [resources](../../../specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection/Report_20261105/resources.csv) · [operations](../../../specification/dataprotection/resource-manager/Microsoft.DataProtection/DataProtection/Report_20261105/operations.csv) |

### dell

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/dell/resource-manager/Dell.Storage/DellStorage` | succeeded | 1 | 6 | [status](../../../specification/dell/resource-manager/Dell.Storage/DellStorage/Report_20261105/status.json) · [resources](../../../specification/dell/resource-manager/Dell.Storage/DellStorage/Report_20261105/resources.csv) · [operations](../../../specification/dell/resource-manager/Dell.Storage/DellStorage/Report_20261105/operations.csv) |

### desktopvirtualization

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/DesktopVirtualization` | succeeded | 17 | 95 | [status](../../../specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/DesktopVirtualization/Report_20261105/status.json) · [resources](../../../specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/DesktopVirtualization/Report_20261105/resources.csv) · [operations](../../../specification/desktopvirtualization/resource-manager/Microsoft.DesktopVirtualization/DesktopVirtualization/Report_20261105/operations.csv) |

### devcenter

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter` | succeeded | 29 | 124 | [status](../../../specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/Report_20261105/status.json) · [resources](../../../specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/Report_20261105/resources.csv) · [operations](../../../specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/Report_20261105/operations.csv) |

### developerhub

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/developerhub/resource-manager/Microsoft.DevHub/DeveloperHub` | succeeded | 7 | 26 | [status](../../../specification/developerhub/resource-manager/Microsoft.DevHub/DeveloperHub/Report_20261105/status.json) · [resources](../../../specification/developerhub/resource-manager/Microsoft.DevHub/DeveloperHub/Report_20261105/resources.csv) · [operations](../../../specification/developerhub/resource-manager/Microsoft.DevHub/DeveloperHub/Report_20261105/operations.csv) |

### deviceprovisioningservices

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices` | succeeded | 5 | 22 | [status](../../../specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices/Report_20261105/status.json) · [resources](../../../specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices/Report_20261105/resources.csv) · [operations](../../../specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices/Report_20261105/operations.csv) |

### deviceregistry

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/deviceregistry/resource-manager/Microsoft.DeviceRegistry/DeviceRegistry` | succeeded | 24 | 133 | [status](../../../specification/deviceregistry/resource-manager/Microsoft.DeviceRegistry/DeviceRegistry/Report_20261105/status.json) · [resources](../../../specification/deviceregistry/resource-manager/Microsoft.DeviceRegistry/DeviceRegistry/Report_20261105/resources.csv) · [operations](../../../specification/deviceregistry/resource-manager/Microsoft.DeviceRegistry/DeviceRegistry/Report_20261105/operations.csv) |

### deviceupdate

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/deviceupdate/resource-manager/Microsoft.DeviceUpdate/DuDeviceRegistry` | succeeded | 1 | 10 | [status](../../../specification/deviceupdate/resource-manager/Microsoft.DeviceUpdate/DuDeviceRegistry/Report_20261105/status.json) · [resources](../../../specification/deviceupdate/resource-manager/Microsoft.DeviceUpdate/DuDeviceRegistry/Report_20261105/resources.csv) · [operations](../../../specification/deviceupdate/resource-manager/Microsoft.DeviceUpdate/DuDeviceRegistry/Report_20261105/operations.csv) |

### devopsinfrastructure

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/devopsinfrastructure/resource-manager/Microsoft.DevOpsInfrastructure/DevOpsInfrastructure` | succeeded | 1 | 7 | [status](../../../specification/devopsinfrastructure/resource-manager/Microsoft.DevOpsInfrastructure/DevOpsInfrastructure/Report_20261105/status.json) · [resources](../../../specification/devopsinfrastructure/resource-manager/Microsoft.DevOpsInfrastructure/DevOpsInfrastructure/Report_20261105/resources.csv) · [operations](../../../specification/devopsinfrastructure/resource-manager/Microsoft.DevOpsInfrastructure/DevOpsInfrastructure/Report_20261105/operations.csv) |

### devtestlabs

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/devtestlabs/resource-manager/Microsoft.DevTestLab/DevTestLabs` | succeeded | 22 | 129 | [status](../../../specification/devtestlabs/resource-manager/Microsoft.DevTestLab/DevTestLabs/Report_20261105/status.json) · [resources](../../../specification/devtestlabs/resource-manager/Microsoft.DevTestLab/DevTestLabs/Report_20261105/resources.csv) · [operations](../../../specification/devtestlabs/resource-manager/Microsoft.DevTestLab/DevTestLabs/Report_20261105/operations.csv) |

### dns

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/dns/resource-manager/Microsoft.Network/Dns` | succeeded | 2 | 12 | [status](../../../specification/dns/resource-manager/Microsoft.Network/Dns/Report_20261105/status.json) · [resources](../../../specification/dns/resource-manager/Microsoft.Network/Dns/Report_20261105/resources.csv) · [operations](../../../specification/dns/resource-manager/Microsoft.Network/Dns/Report_20261105/operations.csv) |

### dnsresolver

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/dnsresolver/resource-manager/Microsoft.Network/DnsResolver` | succeeded | 10 | 55 | [status](../../../specification/dnsresolver/resource-manager/Microsoft.Network/DnsResolver/Report_20261105/status.json) · [resources](../../../specification/dnsresolver/resource-manager/Microsoft.Network/DnsResolver/Report_20261105/resources.csv) · [operations](../../../specification/dnsresolver/resource-manager/Microsoft.Network/DnsResolver/Report_20261105/operations.csv) |

### domainregistration

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/domainregistration/resource-manager/Microsoft.DomainRegistration/DomainRegistration` | succeeded | 3 | 16 | [status](../../../specification/domainregistration/resource-manager/Microsoft.DomainRegistration/DomainRegistration/Report_20261105/status.json) · [resources](../../../specification/domainregistration/resource-manager/Microsoft.DomainRegistration/DomainRegistration/Report_20261105/resources.csv) · [operations](../../../specification/domainregistration/resource-manager/Microsoft.DomainRegistration/DomainRegistration/Report_20261105/operations.csv) |

### domainservices

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/domainservices/resource-manager/Microsoft.AAD/DomainServices` | succeeded | 2 | 12 | [status](../../../specification/domainservices/resource-manager/Microsoft.AAD/DomainServices/Report_20261105/status.json) · [resources](../../../specification/domainservices/resource-manager/Microsoft.AAD/DomainServices/Report_20261105/resources.csv) · [operations](../../../specification/domainservices/resource-manager/Microsoft.AAD/DomainServices/Report_20261105/operations.csv) |

### durabletask

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask` | succeeded | 9 | 40 | [status](../../../specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask/Report_20261105/status.json) · [resources](../../../specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask/Report_20261105/resources.csv) · [operations](../../../specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask/Report_20261105/operations.csv) |

### dynatrace

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/dynatrace/resource-manager/Dynatrace.Observability/DynatraceObservability` | succeeded | 4 | 27 | [status](../../../specification/dynatrace/resource-manager/Dynatrace.Observability/DynatraceObservability/Report_20261105/status.json) · [resources](../../../specification/dynatrace/resource-manager/Dynatrace.Observability/DynatraceObservability/Report_20261105/resources.csv) · [operations](../../../specification/dynatrace/resource-manager/Dynatrace.Observability/DynatraceObservability/Report_20261105/operations.csv) |

### edge

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/edge/resource-manager/Microsoft.Edge/configurationmanager` | succeeded | 38 | 199 | [status](../../../specification/edge/resource-manager/Microsoft.Edge/configurationmanager/Report_20261105/status.json) · [resources](../../../specification/edge/resource-manager/Microsoft.Edge/configurationmanager/Report_20261105/resources.csv) · [operations](../../../specification/edge/resource-manager/Microsoft.Edge/configurationmanager/Report_20261105/operations.csv) |
| `specification/edge/resource-manager/Microsoft.Edge/configurations` | succeeded | 4 | 21 | [status](../../../specification/edge/resource-manager/Microsoft.Edge/configurations/Report_20261105/status.json) · [resources](../../../specification/edge/resource-manager/Microsoft.Edge/configurations/Report_20261105/resources.csv) · [operations](../../../specification/edge/resource-manager/Microsoft.Edge/configurations/Report_20261105/operations.csv) |
| `specification/edge/resource-manager/Microsoft.Edge/disconnectedOperations` | succeeded | 4 | 17 | [status](../../../specification/edge/resource-manager/Microsoft.Edge/disconnectedOperations/Report_20261105/status.json) · [resources](../../../specification/edge/resource-manager/Microsoft.Edge/disconnectedOperations/Report_20261105/resources.csv) · [operations](../../../specification/edge/resource-manager/Microsoft.Edge/disconnectedOperations/Report_20261105/operations.csv) |
| `specification/edge/resource-manager/Microsoft.Edge/edge` | zero-resource | 0 | 0 | [status](../../../specification/edge/resource-manager/Microsoft.Edge/edge/Report_20261105/status.json) · [resources](../../../specification/edge/resource-manager/Microsoft.Edge/edge/Report_20261105/resources.csv) · [operations](../../../specification/edge/resource-manager/Microsoft.Edge/edge/Report_20261105/operations.csv) |
| `specification/edge/resource-manager/Microsoft.Edge/sites` | succeeded | 3 | 15 | [status](../../../specification/edge/resource-manager/Microsoft.Edge/sites/Report_20261105/status.json) · [resources](../../../specification/edge/resource-manager/Microsoft.Edge/sites/Report_20261105/resources.csv) · [operations](../../../specification/edge/resource-manager/Microsoft.Edge/sites/Report_20261105/operations.csv) |

### edgemarketplace

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/edgemarketplace/resource-manager/Microsoft.EdgeMarketplace/EdgeMarketplace` | succeeded | 2 | 8 | [status](../../../specification/edgemarketplace/resource-manager/Microsoft.EdgeMarketplace/EdgeMarketplace/Report_20261105/status.json) · [resources](../../../specification/edgemarketplace/resource-manager/Microsoft.EdgeMarketplace/EdgeMarketplace/Report_20261105/resources.csv) · [operations](../../../specification/edgemarketplace/resource-manager/Microsoft.EdgeMarketplace/EdgeMarketplace/Report_20261105/operations.csv) |

### edgeoperator

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration` | succeeded | 1 | 1 | [status](../../../specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration/Report_20261105/status.json) · [resources](../../../specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration/Report_20261105/resources.csv) · [operations](../../../specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration/Report_20261105/operations.csv) |
| `specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/SystemConfiguration` | succeeded | 1 | 2 | [status](../../../specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/SystemConfiguration/Report_20261105/status.json) · [resources](../../../specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/SystemConfiguration/Report_20261105/resources.csv) · [operations](../../../specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/SystemConfiguration/Report_20261105/operations.csv) |
| `specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/SystemReadiness` | succeeded | 1 | 1 | [status](../../../specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/SystemReadiness/Report_20261105/status.json) · [resources](../../../specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/SystemReadiness/Report_20261105/resources.csv) · [operations](../../../specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/SystemReadiness/Report_20261105/operations.csv) |

### edgeorder

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/edgeorder/resource-manager/Microsoft.EdgeOrder/EdgeOrder` | succeeded | 4 | 15 | [status](../../../specification/edgeorder/resource-manager/Microsoft.EdgeOrder/EdgeOrder/Report_20261105/status.json) · [resources](../../../specification/edgeorder/resource-manager/Microsoft.EdgeOrder/EdgeOrder/Report_20261105/resources.csv) · [operations](../../../specification/edgeorder/resource-manager/Microsoft.EdgeOrder/EdgeOrder/Report_20261105/operations.csv) |

### edgezones

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/edgezones/resource-manager/Microsoft.EdgeZones/EdgeZones` | succeeded | 1 | 4 | [status](../../../specification/edgezones/resource-manager/Microsoft.EdgeZones/EdgeZones/Report_20261105/status.json) · [resources](../../../specification/edgezones/resource-manager/Microsoft.EdgeZones/EdgeZones/Report_20261105/resources.csv) · [operations](../../../specification/edgezones/resource-manager/Microsoft.EdgeZones/EdgeZones/Report_20261105/operations.csv) |

### education

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/education/resource-manager/Microsoft.Education/Education` | succeeded | 8 | 19 | [status](../../../specification/education/resource-manager/Microsoft.Education/Education/Report_20261105/status.json) · [resources](../../../specification/education/resource-manager/Microsoft.Education/Education/Report_20261105/resources.csv) · [operations](../../../specification/education/resource-manager/Microsoft.Education/Education/Report_20261105/operations.csv) |

### elastic

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/elastic/resource-manager/Microsoft.Elastic/Elastic` | succeeded | 8 | 59 | [status](../../../specification/elastic/resource-manager/Microsoft.Elastic/Elastic/Report_20261105/status.json) · [resources](../../../specification/elastic/resource-manager/Microsoft.Elastic/Elastic/Report_20261105/resources.csv) · [operations](../../../specification/elastic/resource-manager/Microsoft.Elastic/Elastic/Report_20261105/operations.csv) |

### elasticsan

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/elasticsan/resource-manager/Microsoft.ElasticSan/ElasticSan` | succeeded | 5 | 27 | [status](../../../specification/elasticsan/resource-manager/Microsoft.ElasticSan/ElasticSan/Report_20261105/status.json) · [resources](../../../specification/elasticsan/resource-manager/Microsoft.ElasticSan/ElasticSan/Report_20261105/resources.csv) · [operations](../../../specification/elasticsan/resource-manager/Microsoft.ElasticSan/ElasticSan/Report_20261105/operations.csv) |

### eventgrid

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/eventgrid/resource-manager/Microsoft.EventGrid/EventGrid` | succeeded | 27 | 161 | [status](../../../specification/eventgrid/resource-manager/Microsoft.EventGrid/EventGrid/Report_20261105/status.json) · [resources](../../../specification/eventgrid/resource-manager/Microsoft.EventGrid/EventGrid/Report_20261105/resources.csv) · [operations](../../../specification/eventgrid/resource-manager/Microsoft.EventGrid/EventGrid/Report_20261105/operations.csv) |

### eventhub

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/eventhub/resource-manager/Microsoft.EventHub/Eventhub` | succeeded | 15 | 73 | [status](../../../specification/eventhub/resource-manager/Microsoft.EventHub/Eventhub/Report_20261105/status.json) · [resources](../../../specification/eventhub/resource-manager/Microsoft.EventHub/Eventhub/Report_20261105/resources.csv) · [operations](../../../specification/eventhub/resource-manager/Microsoft.EventHub/Eventhub/Report_20261105/operations.csv) |

### ews

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/ews/resource-manager/Microsoft.SecretSyncController/SecretSyncController` | succeeded | 2 | 12 | [status](../../../specification/ews/resource-manager/Microsoft.SecretSyncController/SecretSyncController/Report_20261105/status.json) · [resources](../../../specification/ews/resource-manager/Microsoft.SecretSyncController/SecretSyncController/Report_20261105/resources.csv) · [operations](../../../specification/ews/resource-manager/Microsoft.SecretSyncController/SecretSyncController/Report_20261105/operations.csv) |

### extendedlocation

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/extendedlocation/resource-manager/Microsoft.ExtendedLocation/CustomLocations` | succeeded | 2 | 13 | [status](../../../specification/extendedlocation/resource-manager/Microsoft.ExtendedLocation/CustomLocations/Report_20261105/status.json) · [resources](../../../specification/extendedlocation/resource-manager/Microsoft.ExtendedLocation/CustomLocations/Report_20261105/resources.csv) · [operations](../../../specification/extendedlocation/resource-manager/Microsoft.ExtendedLocation/CustomLocations/Report_20261105/operations.csv) |

### fabric

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/fabric/resource-manager/Microsoft.Fabric/Fabric` | succeeded | 1 | 9 | [status](../../../specification/fabric/resource-manager/Microsoft.Fabric/Fabric/Report_20261105/status.json) · [resources](../../../specification/fabric/resource-manager/Microsoft.Fabric/Fabric/Report_20261105/resources.csv) · [operations](../../../specification/fabric/resource-manager/Microsoft.Fabric/Fabric/Report_20261105/operations.csv) |

### fileshares

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/fileshares/resource-manager/Microsoft.FileShares/FileShares` | succeeded | 4 | 19 | [status](../../../specification/fileshares/resource-manager/Microsoft.FileShares/FileShares/Report_20261105/status.json) · [resources](../../../specification/fileshares/resource-manager/Microsoft.FileShares/FileShares/Report_20261105/resources.csv) · [operations](../../../specification/fileshares/resource-manager/Microsoft.FileShares/FileShares/Report_20261105/operations.csv) |

### fist

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/IoTFirmwareDefense` | succeeded | 4 | 17 | [status](../../../specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/IoTFirmwareDefense/Report_20261105/status.json) · [resources](../../../specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/IoTFirmwareDefense/Report_20261105/resources.csv) · [operations](../../../specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/IoTFirmwareDefense/Report_20261105/operations.csv) |

### frontdoor

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/frontdoor/resource-manager/Microsoft.Network/FrontDoor` | zero-resource | 0 | 0 | [status](../../../specification/frontdoor/resource-manager/Microsoft.Network/FrontDoor/Report_20261105/status.json) · [resources](../../../specification/frontdoor/resource-manager/Microsoft.Network/FrontDoor/Report_20261105/resources.csv) · [operations](../../../specification/frontdoor/resource-manager/Microsoft.Network/FrontDoor/Report_20261105/operations.csv) |

### gcpconnector

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/gcpconnector/resource-manager/Microsoft.GcpConnector/BigQueryDataset` | succeeded | 1 | 6 | [status](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/BigQueryDataset/Report_20261105/status.json) · [resources](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/BigQueryDataset/Report_20261105/resources.csv) · [operations](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/BigQueryDataset/Report_20261105/operations.csv) |
| `specification/gcpconnector/resource-manager/Microsoft.GcpConnector/CloudFunction` | succeeded | 1 | 6 | [status](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/CloudFunction/Report_20261105/status.json) · [resources](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/CloudFunction/Report_20261105/resources.csv) · [operations](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/CloudFunction/Report_20261105/operations.csv) |
| `specification/gcpconnector/resource-manager/Microsoft.GcpConnector/ComputeInstance` | succeeded | 1 | 4 | [status](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/ComputeInstance/Report_20261105/status.json) · [resources](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/ComputeInstance/Report_20261105/resources.csv) · [operations](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/ComputeInstance/Report_20261105/operations.csv) |
| `specification/gcpconnector/resource-manager/Microsoft.GcpConnector/ContainerClusters` | succeeded | 1 | 4 | [status](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/ContainerClusters/Report_20261105/status.json) · [resources](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/ContainerClusters/Report_20261105/resources.csv) · [operations](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/ContainerClusters/Report_20261105/operations.csv) |
| `specification/gcpconnector/resource-manager/Microsoft.GcpConnector/GcpConnector` | zero-resource | 0 | 0 | [status](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/GcpConnector/Report_20261105/status.json) · [resources](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/GcpConnector/Report_20261105/resources.csv) · [operations](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/GcpConnector/Report_20261105/operations.csv) |
| `specification/gcpconnector/resource-manager/Microsoft.GcpConnector/SQLAdminInstances` | succeeded | 1 | 6 | [status](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/SQLAdminInstances/Report_20261105/status.json) · [resources](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/SQLAdminInstances/Report_20261105/resources.csv) · [operations](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/SQLAdminInstances/Report_20261105/operations.csv) |
| `specification/gcpconnector/resource-manager/Microsoft.GcpConnector/StorageBucket` | succeeded | 1 | 6 | [status](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/StorageBucket/Report_20261105/status.json) · [resources](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/StorageBucket/Report_20261105/resources.csv) · [operations](../../../specification/gcpconnector/resource-manager/Microsoft.GcpConnector/StorageBucket/Report_20261105/operations.csv) |

### github-network

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/github-network/resource-manager/GitHub.Network/GitHubNetwork` | succeeded | 1 | 6 | [status](../../../specification/github-network/resource-manager/GitHub.Network/GitHubNetwork/Report_20261105/status.json) · [resources](../../../specification/github-network/resource-manager/GitHub.Network/GitHubNetwork/Report_20261105/resources.csv) · [operations](../../../specification/github-network/resource-manager/GitHub.Network/GitHubNetwork/Report_20261105/operations.csv) |

### guestconfiguration

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/guestconfiguration/resource-manager/Microsoft.GuestConfiguration/Assignments` | zero-resource | 0 | 0 | [status](../../../specification/guestconfiguration/resource-manager/Microsoft.GuestConfiguration/Assignments/Report_20261105/status.json) · [resources](../../../specification/guestconfiguration/resource-manager/Microsoft.GuestConfiguration/Assignments/Report_20261105/resources.csv) · [operations](../../../specification/guestconfiguration/resource-manager/Microsoft.GuestConfiguration/Assignments/Report_20261105/operations.csv) |

### hanaonazure

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/hanaonazure/resource-manager/Microsoft.HanaOnAzure/HanaOnAzure` | succeeded | 2 | 9 | [status](../../../specification/hanaonazure/resource-manager/Microsoft.HanaOnAzure/HanaOnAzure/Report_20261105/status.json) · [resources](../../../specification/hanaonazure/resource-manager/Microsoft.HanaOnAzure/HanaOnAzure/Report_20261105/resources.csv) · [operations](../../../specification/hanaonazure/resource-manager/Microsoft.HanaOnAzure/HanaOnAzure/Report_20261105/operations.csv) |

### hardwaresecuritymodules

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/HardwareSecurityModules` | succeeded | 5 | 35 | [status](../../../specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/HardwareSecurityModules/Report_20261105/status.json) · [resources](../../../specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/HardwareSecurityModules/Report_20261105/resources.csv) · [operations](../../../specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/HardwareSecurityModules/Report_20261105/operations.csv) |

### hdinsight

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight` | succeeded | 10 | 48 | [status](../../../specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Report_20261105/status.json) · [resources](../../../specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Report_20261105/resources.csv) · [operations](../../../specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Report_20261105/operations.csv) |

### healthbot

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/healthbot/resource-manager/Microsoft.HealthBot/HealthBot` | succeeded | 1 | 8 | [status](../../../specification/healthbot/resource-manager/Microsoft.HealthBot/HealthBot/Report_20261105/status.json) · [resources](../../../specification/healthbot/resource-manager/Microsoft.HealthBot/HealthBot/Report_20261105/resources.csv) · [operations](../../../specification/healthbot/resource-manager/Microsoft.HealthBot/HealthBot/Report_20261105/operations.csv) |

### healthcareapis

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/HealthcareApis` | succeeded | 10 | 37 | [status](../../../specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/HealthcareApis/Report_20261105/status.json) · [resources](../../../specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/HealthcareApis/Report_20261105/resources.csv) · [operations](../../../specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/HealthcareApis/Report_20261105/operations.csv) |

### healthdataaiservices

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/healthdataaiservices/resource-manager/Microsoft.HealthDataAIServices/HealthDataAIServices` | succeeded | 2 | 10 | [status](../../../specification/healthdataaiservices/resource-manager/Microsoft.HealthDataAIServices/HealthDataAIServices/Report_20261105/status.json) · [resources](../../../specification/healthdataaiservices/resource-manager/Microsoft.HealthDataAIServices/HealthDataAIServices/Report_20261105/resources.csv) · [operations](../../../specification/healthdataaiservices/resource-manager/Microsoft.HealthDataAIServices/HealthDataAIServices/Report_20261105/operations.csv) |

### help

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/help/resource-manager/Microsoft.Help/Help` | succeeded | 5 | 14 | [status](../../../specification/help/resource-manager/Microsoft.Help/Help/Report_20261105/status.json) · [resources](../../../specification/help/resource-manager/Microsoft.Help/Help/Report_20261105/resources.csv) · [operations](../../../specification/help/resource-manager/Microsoft.Help/Help/Report_20261105/operations.csv) |

### horizondb

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb` | succeeded | 20 | 76 | [status](../../../specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/Report_20261105/status.json) · [resources](../../../specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/Report_20261105/resources.csv) · [operations](../../../specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/Report_20261105/operations.csv) |

### hybridaks

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/hybridaks/resource-manager/Microsoft.HybridContainerService/HybridContainerService` | succeeded | 7 | 30 | [status](../../../specification/hybridaks/resource-manager/Microsoft.HybridContainerService/HybridContainerService/Report_20261105/status.json) · [resources](../../../specification/hybridaks/resource-manager/Microsoft.HybridContainerService/HybridContainerService/Report_20261105/resources.csv) · [operations](../../../specification/hybridaks/resource-manager/Microsoft.HybridContainerService/HybridContainerService/Report_20261105/operations.csv) |

### hybridcompute

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/hybridcompute/resource-manager/Microsoft.HybridCompute/HybridCompute` | succeeded | 17 | 66 | [status](../../../specification/hybridcompute/resource-manager/Microsoft.HybridCompute/HybridCompute/Report_20261105/status.json) · [resources](../../../specification/hybridcompute/resource-manager/Microsoft.HybridCompute/HybridCompute/Report_20261105/resources.csv) · [operations](../../../specification/hybridcompute/resource-manager/Microsoft.HybridCompute/HybridCompute/Report_20261105/operations.csv) |

### hybridconnectivity

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/HybridConnectivity` | succeeded | 6 | 31 | [status](../../../specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/HybridConnectivity/Report_20261105/status.json) · [resources](../../../specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/HybridConnectivity/Report_20261105/resources.csv) · [operations](../../../specification/hybridconnectivity/resource-manager/Microsoft.HybridConnectivity/HybridConnectivity/Report_20261105/operations.csv) |

### hybridkubernetes

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/hybridkubernetes/resource-manager/Microsoft.Kubernetes/HybridKubernetes` | succeeded | 1 | 8 | [status](../../../specification/hybridkubernetes/resource-manager/Microsoft.Kubernetes/HybridKubernetes/Report_20261105/status.json) · [resources](../../../specification/hybridkubernetes/resource-manager/Microsoft.Kubernetes/HybridKubernetes/Report_20261105/resources.csv) · [operations](../../../specification/hybridkubernetes/resource-manager/Microsoft.Kubernetes/HybridKubernetes/Report_20261105/operations.csv) |

### imagebuilder

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/imagebuilder/resource-manager/Microsoft.VirtualMachineImages/ImageBuilder` | succeeded | 3 | 14 | [status](../../../specification/imagebuilder/resource-manager/Microsoft.VirtualMachineImages/ImageBuilder/Report_20261105/status.json) · [resources](../../../specification/imagebuilder/resource-manager/Microsoft.VirtualMachineImages/ImageBuilder/Report_20261105/resources.csv) · [operations](../../../specification/imagebuilder/resource-manager/Microsoft.VirtualMachineImages/ImageBuilder/Report_20261105/operations.csv) |

### impact

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/impact/resource-manager/Microsoft.Impact/Impact` | succeeded | 4 | 15 | [status](../../../specification/impact/resource-manager/Microsoft.Impact/Impact/Report_20261105/status.json) · [resources](../../../specification/impact/resource-manager/Microsoft.Impact/Impact/Report_20261105/resources.csv) · [operations](../../../specification/impact/resource-manager/Microsoft.Impact/Impact/Report_20261105/operations.csv) |

### informatica

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/informatica/resource-manager/Informatica.DataManagement/Informatica` | succeeded | 2 | 16 | [status](../../../specification/informatica/resource-manager/Informatica.DataManagement/Informatica/Report_20261105/status.json) · [resources](../../../specification/informatica/resource-manager/Informatica.DataManagement/Informatica/Report_20261105/resources.csv) · [operations](../../../specification/informatica/resource-manager/Informatica.DataManagement/Informatica/Report_20261105/operations.csv) |

### iothub

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/iothub/resource-manager/Microsoft.Devices/IoTHub` | succeeded | 7 | 32 | [status](../../../specification/iothub/resource-manager/Microsoft.Devices/IoTHub/Report_20261105/status.json) · [resources](../../../specification/iothub/resource-manager/Microsoft.Devices/IoTHub/Report_20261105/resources.csv) · [operations](../../../specification/iothub/resource-manager/Microsoft.Devices/IoTHub/Report_20261105/operations.csv) |

### iotoperations

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/iotoperations/resource-manager/Microsoft.IoTOperations/IoTOperations` | succeeded | 21 | 86 | [status](../../../specification/iotoperations/resource-manager/Microsoft.IoTOperations/IoTOperations/Report_20261105/status.json) · [resources](../../../specification/iotoperations/resource-manager/Microsoft.IoTOperations/IoTOperations/Report_20261105/resources.csv) · [operations](../../../specification/iotoperations/resource-manager/Microsoft.IoTOperations/IoTOperations/Report_20261105/operations.csv) |

### iotoperationsdataprocessor

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/iotoperationsdataprocessor/resource-manager/Microsoft.IoTOperationsDataProcessor/IoTOperationsDataProcessor` | succeeded | 3 | 16 | [status](../../../specification/iotoperationsdataprocessor/resource-manager/Microsoft.IoTOperationsDataProcessor/IoTOperationsDataProcessor/Report_20261105/status.json) · [resources](../../../specification/iotoperationsdataprocessor/resource-manager/Microsoft.IoTOperationsDataProcessor/IoTOperationsDataProcessor/Report_20261105/resources.csv) · [operations](../../../specification/iotoperationsdataprocessor/resource-manager/Microsoft.IoTOperationsDataProcessor/IoTOperationsDataProcessor/Report_20261105/operations.csv) |

### iotoperationsmq

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/iotoperationsmq/resource-manager/Microsoft.IoTOperationsMQ/IoTOperationsMQ` | succeeded | 12 | 61 | [status](../../../specification/iotoperationsmq/resource-manager/Microsoft.IoTOperationsMQ/IoTOperationsMQ/Report_20261105/status.json) · [resources](../../../specification/iotoperationsmq/resource-manager/Microsoft.IoTOperationsMQ/IoTOperationsMQ/Report_20261105/resources.csv) · [operations](../../../specification/iotoperationsmq/resource-manager/Microsoft.IoTOperationsMQ/IoTOperationsMQ/Report_20261105/operations.csv) |

### iotoperationsorchestrator

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/iotoperationsorchestrator/resource-manager/Microsoft.IoTOperationsOrchestrator/IoTOperationsOrchestrator` | succeeded | 3 | 18 | [status](../../../specification/iotoperationsorchestrator/resource-manager/Microsoft.IoTOperationsOrchestrator/IoTOperationsOrchestrator/Report_20261105/status.json) · [resources](../../../specification/iotoperationsorchestrator/resource-manager/Microsoft.IoTOperationsOrchestrator/IoTOperationsOrchestrator/Report_20261105/resources.csv) · [operations](../../../specification/iotoperationsorchestrator/resource-manager/Microsoft.IoTOperationsOrchestrator/IoTOperationsOrchestrator/Report_20261105/operations.csv) |

### keyvault

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault` | succeeded | 13 | 45 | [status](../../../specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault/Report_20261105/status.json) · [resources](../../../specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault/Report_20261105/resources.csv) · [operations](../../../specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault/Report_20261105/operations.csv) |

### kubernetesconfiguration

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/extensions` | succeeded | 1 | 6 | [status](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/extensions/Report_20261105/status.json) · [resources](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/extensions/Report_20261105/resources.csv) · [operations](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/extensions/Report_20261105/operations.csv) |
| `specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/extensionTypes` | succeeded | 5 | 8 | [status](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/extensionTypes/Report_20261105/status.json) · [resources](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/extensionTypes/Report_20261105/resources.csv) · [operations](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/extensionTypes/Report_20261105/operations.csv) |
| `specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/fluxConfigurations` | succeeded | 1 | 6 | [status](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/fluxConfigurations/Report_20261105/status.json) · [resources](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/fluxConfigurations/Report_20261105/resources.csv) · [operations](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/fluxConfigurations/Report_20261105/operations.csv) |
| `specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/kubernetesResources` | succeeded | 1 | 2 | [status](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/kubernetesResources/Report_20261105/status.json) · [resources](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/kubernetesResources/Report_20261105/resources.csv) · [operations](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/kubernetesResources/Report_20261105/operations.csv) |
| `specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/operations` | zero-resource | 0 | 0 | [status](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/operations/Report_20261105/status.json) · [resources](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/operations/Report_20261105/resources.csv) · [operations](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/operations/Report_20261105/operations.csv) |
| `specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/privateLinkScopes` | succeeded | 3 | 12 | [status](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/privateLinkScopes/Report_20261105/status.json) · [resources](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/privateLinkScopes/Report_20261105/resources.csv) · [operations](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/privateLinkScopes/Report_20261105/operations.csv) |
| `specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/upgradeAssessments` | succeeded | 1 | 2 | [status](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/upgradeAssessments/Report_20261105/status.json) · [resources](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/upgradeAssessments/Report_20261105/resources.csv) · [operations](../../../specification/kubernetesconfiguration/resource-manager/Microsoft.KubernetesConfiguration/upgradeAssessments/Report_20261105/operations.csv) |

### kubernetesruntime

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/kubernetesruntime/resource-manager/Microsoft.KubernetesRuntime/KubernetesRuntime` | succeeded | 4 | 19 | [status](../../../specification/kubernetesruntime/resource-manager/Microsoft.KubernetesRuntime/KubernetesRuntime/Report_20261105/status.json) · [resources](../../../specification/kubernetesruntime/resource-manager/Microsoft.KubernetesRuntime/KubernetesRuntime/Report_20261105/resources.csv) · [operations](../../../specification/kubernetesruntime/resource-manager/Microsoft.KubernetesRuntime/KubernetesRuntime/Report_20261105/operations.csv) |

### liftrarize

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/liftrarize/resource-manager/ArizeAi.ObservabilityEval/ObservabilityEval` | succeeded | 1 | 6 | [status](../../../specification/liftrarize/resource-manager/ArizeAi.ObservabilityEval/ObservabilityEval/Report_20261105/status.json) · [resources](../../../specification/liftrarize/resource-manager/ArizeAi.ObservabilityEval/ObservabilityEval/Report_20261105/resources.csv) · [operations](../../../specification/liftrarize/resource-manager/ArizeAi.ObservabilityEval/ObservabilityEval/Report_20261105/operations.csv) |

### liftrhyperexecute

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/liftrhyperexecute/resource-manager/LambdaTest.HyperExecute/HyperExecute` | succeeded | 1 | 6 | [status](../../../specification/liftrhyperexecute/resource-manager/LambdaTest.HyperExecute/HyperExecute/Report_20261105/status.json) · [resources](../../../specification/liftrhyperexecute/resource-manager/LambdaTest.HyperExecute/HyperExecute/Report_20261105/resources.csv) · [operations](../../../specification/liftrhyperexecute/resource-manager/LambdaTest.HyperExecute/HyperExecute/Report_20261105/operations.csv) |

### liftrmongodb

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/liftrmongodb/resource-manager/MongoDB.Atlas/MongoDBAtlas` | succeeded | 3 | 16 | [status](../../../specification/liftrmongodb/resource-manager/MongoDB.Atlas/MongoDBAtlas/Report_20261105/status.json) · [resources](../../../specification/liftrmongodb/resource-manager/MongoDB.Atlas/MongoDBAtlas/Report_20261105/resources.csv) · [operations](../../../specification/liftrmongodb/resource-manager/MongoDB.Atlas/MongoDBAtlas/Report_20261105/operations.csv) |

### liftrpinecone

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/liftrpinecone/resource-manager/Pinecone.VectorDb/PineconeVectorDb` | succeeded | 1 | 6 | [status](../../../specification/liftrpinecone/resource-manager/Pinecone.VectorDb/PineconeVectorDb/Report_20261105/status.json) · [resources](../../../specification/liftrpinecone/resource-manager/Pinecone.VectorDb/PineconeVectorDb/Report_20261105/resources.csv) · [operations](../../../specification/liftrpinecone/resource-manager/Pinecone.VectorDb/PineconeVectorDb/Report_20261105/operations.csv) |

### liftrqumulo

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/liftrqumulo/resource-manager/Qumulo.Storage/QumuloStorage` | succeeded | 1 | 6 | [status](../../../specification/liftrqumulo/resource-manager/Qumulo.Storage/QumuloStorage/Report_20261105/status.json) · [resources](../../../specification/liftrqumulo/resource-manager/Qumulo.Storage/QumuloStorage/Report_20261105/resources.csv) · [operations](../../../specification/liftrqumulo/resource-manager/Qumulo.Storage/QumuloStorage/Report_20261105/operations.csv) |

### liftrweightsandbiases

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/liftrweightsandbiases/resource-manager/Microsoft.WeightsAndBiases/WeightsAndBiases` | succeeded | 1 | 6 | [status](../../../specification/liftrweightsandbiases/resource-manager/Microsoft.WeightsAndBiases/WeightsAndBiases/Report_20261105/status.json) · [resources](../../../specification/liftrweightsandbiases/resource-manager/Microsoft.WeightsAndBiases/WeightsAndBiases/Report_20261105/resources.csv) · [operations](../../../specification/liftrweightsandbiases/resource-manager/Microsoft.WeightsAndBiases/WeightsAndBiases/Report_20261105/operations.csv) |

### loadtestservice

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/loadtesting` | succeeded | 6 | 22 | [status](../../../specification/loadtestservice/resource-manager/Microsoft.LoadTestService/loadtesting/Report_20261105/status.json) · [resources](../../../specification/loadtestservice/resource-manager/Microsoft.LoadTestService/loadtesting/Report_20261105/resources.csv) · [operations](../../../specification/loadtestservice/resource-manager/Microsoft.LoadTestService/loadtesting/Report_20261105/operations.csv) |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright` | succeeded | 4 | 10 | [status](../../../specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/Report_20261105/status.json) · [resources](../../../specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/Report_20261105/resources.csv) · [operations](../../../specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/Report_20261105/operations.csv) |

### logic

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/logic/resource-manager/Microsoft.Logic/Logic` | succeeded | 1 | 6 | [status](../../../specification/logic/resource-manager/Microsoft.Logic/Logic/Report_20261105/status.json) · [resources](../../../specification/logic/resource-manager/Microsoft.Logic/Logic/Report_20261105/resources.csv) · [operations](../../../specification/logic/resource-manager/Microsoft.Logic/Logic/Report_20261105/operations.csv) |

### machinelearningservices

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices` | succeeded | 53 | 281 | [status](../../../specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/Report_20261105/status.json) · [resources](../../../specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/Report_20261105/resources.csv) · [operations](../../../specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices/Report_20261105/operations.csv) |

### maintenance

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/maintenance/resource-manager/Microsoft.Maintenance/Maintenance` | succeeded | 8 | 28 | [status](../../../specification/maintenance/resource-manager/Microsoft.Maintenance/Maintenance/Report_20261105/status.json) · [resources](../../../specification/maintenance/resource-manager/Microsoft.Maintenance/Maintenance/Report_20261105/resources.csv) · [operations](../../../specification/maintenance/resource-manager/Microsoft.Maintenance/Maintenance/Report_20261105/operations.csv) |

### managednetworkfabric

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/ManagedNetworkFabric` | succeeded | 29 | 269 | [status](../../../specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/ManagedNetworkFabric/Report_20261105/status.json) · [resources](../../../specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/ManagedNetworkFabric/Report_20261105/resources.csv) · [operations](../../../specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/ManagedNetworkFabric/Report_20261105/operations.csv) |

### management

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/management/resource-manager/Microsoft.Management/ManagementGroups` | succeeded | 3 | 14 | [status](../../../specification/management/resource-manager/Microsoft.Management/ManagementGroups/Report_20261105/status.json) · [resources](../../../specification/management/resource-manager/Microsoft.Management/ManagementGroups/Report_20261105/resources.csv) · [operations](../../../specification/management/resource-manager/Microsoft.Management/ManagementGroups/Report_20261105/operations.csv) |
| `specification/management/resource-manager/Microsoft.Management/ServiceGroups` | succeeded | 1 | 8 | [status](../../../specification/management/resource-manager/Microsoft.Management/ServiceGroups/Report_20261105/status.json) · [resources](../../../specification/management/resource-manager/Microsoft.Management/ServiceGroups/Report_20261105/resources.csv) · [operations](../../../specification/management/resource-manager/Microsoft.Management/ServiceGroups/Report_20261105/operations.csv) |

### maps

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/maps/resource-manager/Microsoft.Maps/Maps` | succeeded | 4 | 20 | [status](../../../specification/maps/resource-manager/Microsoft.Maps/Maps/Report_20261105/status.json) · [resources](../../../specification/maps/resource-manager/Microsoft.Maps/Maps/Report_20261105/resources.csv) · [operations](../../../specification/maps/resource-manager/Microsoft.Maps/Maps/Report_20261105/operations.csv) |

### marketplace

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/marketplace/resource-manager/Microsoft.Marketplace/Marketplace` | succeeded | 5 | 42 | [status](../../../specification/marketplace/resource-manager/Microsoft.Marketplace/Marketplace/Report_20261105/status.json) · [resources](../../../specification/marketplace/resource-manager/Microsoft.Marketplace/Marketplace/Report_20261105/resources.csv) · [operations](../../../specification/marketplace/resource-manager/Microsoft.Marketplace/Marketplace/Report_20261105/operations.csv) |

### marketplacecatalog

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products` | succeeded | 6 | 4 | [status](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/Report_20261105/status.json) · [resources](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/Report_20261105/resources.csv) · [operations](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Products/Report_20261105/operations.csv) |
| `specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Reviews` | zero-resource | 0 | 0 | [status](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Reviews/Report_20261105/status.json) · [resources](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Reviews/Report_20261105/resources.csv) · [operations](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Reviews/Report_20261105/operations.csv) |
| `specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus` | succeeded | 4 | 4 | [status](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus/Report_20261105/status.json) · [resources](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus/Report_20261105/resources.csv) · [operations](../../../specification/marketplacecatalog/resource-manager/Microsoft.Marketplace/Skus/Report_20261105/operations.csv) |

### migrate

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/migrate/resource-manager/Microsoft.Migrate/AKSAssessments` | succeeded | 6 | 13 | [status](../../../specification/migrate/resource-manager/Microsoft.Migrate/AKSAssessments/Report_20261105/status.json) · [resources](../../../specification/migrate/resource-manager/Microsoft.Migrate/AKSAssessments/Report_20261105/resources.csv) · [operations](../../../specification/migrate/resource-manager/Microsoft.Migrate/AKSAssessments/Report_20261105/operations.csv) |
| `specification/migrate/resource-manager/Microsoft.Migrate/AssessmentProjects` | succeeded | 4 | 14 | [status](../../../specification/migrate/resource-manager/Microsoft.Migrate/AssessmentProjects/Report_20261105/status.json) · [resources](../../../specification/migrate/resource-manager/Microsoft.Migrate/AssessmentProjects/Report_20261105/resources.csv) · [operations](../../../specification/migrate/resource-manager/Microsoft.Migrate/AssessmentProjects/Report_20261105/operations.csv) |
| `specification/migrate/resource-manager/Microsoft.Migrate/AvsAssessments` | succeeded | 5 | 11 | [status](../../../specification/migrate/resource-manager/Microsoft.Migrate/AvsAssessments/Report_20261105/status.json) · [resources](../../../specification/migrate/resource-manager/Microsoft.Migrate/AvsAssessments/Report_20261105/resources.csv) · [operations](../../../specification/migrate/resource-manager/Microsoft.Migrate/AvsAssessments/Report_20261105/operations.csv) |
| `specification/migrate/resource-manager/Microsoft.Migrate/BusinessCases` | succeeded | 10 | 22 | [status](../../../specification/migrate/resource-manager/Microsoft.Migrate/BusinessCases/Report_20261105/status.json) · [resources](../../../specification/migrate/resource-manager/Microsoft.Migrate/BusinessCases/Report_20261105/resources.csv) · [operations](../../../specification/migrate/resource-manager/Microsoft.Migrate/BusinessCases/Report_20261105/operations.csv) |
| `specification/migrate/resource-manager/Microsoft.Migrate/Collectors` | succeeded | 8 | 28 | [status](../../../specification/migrate/resource-manager/Microsoft.Migrate/Collectors/Report_20261105/status.json) · [resources](../../../specification/migrate/resource-manager/Microsoft.Migrate/Collectors/Report_20261105/resources.csv) · [operations](../../../specification/migrate/resource-manager/Microsoft.Migrate/Collectors/Report_20261105/operations.csv) |
| `specification/migrate/resource-manager/Microsoft.Migrate/HeterogenousAssessments` | succeeded | 3 | 6 | [status](../../../specification/migrate/resource-manager/Microsoft.Migrate/HeterogenousAssessments/Report_20261105/status.json) · [resources](../../../specification/migrate/resource-manager/Microsoft.Migrate/HeterogenousAssessments/Report_20261105/resources.csv) · [operations](../../../specification/migrate/resource-manager/Microsoft.Migrate/HeterogenousAssessments/Report_20261105/operations.csv) |
| `specification/migrate/resource-manager/Microsoft.Migrate/MachineAssessments` | succeeded | 5 | 11 | [status](../../../specification/migrate/resource-manager/Microsoft.Migrate/MachineAssessments/Report_20261105/status.json) · [resources](../../../specification/migrate/resource-manager/Microsoft.Migrate/MachineAssessments/Report_20261105/resources.csv) · [operations](../../../specification/migrate/resource-manager/Microsoft.Migrate/MachineAssessments/Report_20261105/operations.csv) |
| `specification/migrate/resource-manager/Microsoft.Migrate/SqlAssessments` | succeeded | 7 | 15 | [status](../../../specification/migrate/resource-manager/Microsoft.Migrate/SqlAssessments/Report_20261105/status.json) · [resources](../../../specification/migrate/resource-manager/Microsoft.Migrate/SqlAssessments/Report_20261105/resources.csv) · [operations](../../../specification/migrate/resource-manager/Microsoft.Migrate/SqlAssessments/Report_20261105/operations.csv) |
| `specification/migrate/resource-manager/Microsoft.Migrate/Waves` | succeeded | 5 | 17 | [status](../../../specification/migrate/resource-manager/Microsoft.Migrate/Waves/Report_20261105/status.json) · [resources](../../../specification/migrate/resource-manager/Microsoft.Migrate/Waves/Report_20261105/resources.csv) · [operations](../../../specification/migrate/resource-manager/Microsoft.Migrate/Waves/Report_20261105/operations.csv) |
| `specification/migrate/resource-manager/Microsoft.Migrate/WebAppAssessments` | succeeded | 6 | 13 | [status](../../../specification/migrate/resource-manager/Microsoft.Migrate/WebAppAssessments/Report_20261105/status.json) · [resources](../../../specification/migrate/resource-manager/Microsoft.Migrate/WebAppAssessments/Report_20261105/resources.csv) · [operations](../../../specification/migrate/resource-manager/Microsoft.Migrate/WebAppAssessments/Report_20261105/operations.csv) |
| `specification/migrate/resource-manager/Microsoft.Migrate/WebAppCompoundAssessments` | succeeded | 3 | 7 | [status](../../../specification/migrate/resource-manager/Microsoft.Migrate/WebAppCompoundAssessments/Report_20261105/status.json) · [resources](../../../specification/migrate/resource-manager/Microsoft.Migrate/WebAppCompoundAssessments/Report_20261105/resources.csv) · [operations](../../../specification/migrate/resource-manager/Microsoft.Migrate/WebAppCompoundAssessments/Report_20261105/operations.csv) |
| `specification/migrate/resource-manager/Microsoft.OffAzure/OffAzure` | succeeded | 42 | 195 | [status](../../../specification/migrate/resource-manager/Microsoft.OffAzure/OffAzure/Report_20261105/status.json) · [resources](../../../specification/migrate/resource-manager/Microsoft.OffAzure/OffAzure/Report_20261105/resources.csv) · [operations](../../../specification/migrate/resource-manager/Microsoft.OffAzure/OffAzure/Report_20261105/operations.csv) |

### mission

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/mission/resource-manager/Microsoft.Mission/Mission` | succeeded | 9 | 63 | [status](../../../specification/mission/resource-manager/Microsoft.Mission/Mission/Report_20261105/status.json) · [resources](../../../specification/mission/resource-manager/Microsoft.Mission/Mission/Report_20261105/resources.csv) · [operations](../../../specification/mission/resource-manager/Microsoft.Mission/Mission/Report_20261105/operations.csv) |

### mongocluster

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | succeeded | 4 | 21 | [status](../../../specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/Report_20261105/status.json) · [resources](../../../specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/Report_20261105/resources.csv) · [operations](../../../specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/Report_20261105/operations.csv) |

### monitor

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/monitor/resource-manager/Microsoft.Insights/DataCollectionRuleConfigurationMetadata` | zero-resource | 0 | 0 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/DataCollectionRuleConfigurationMetadata/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/DataCollectionRuleConfigurationMetadata/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/DataCollectionRuleConfigurationMetadata/Report_20261105/operations.csv) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights` | skipped | 0 | 0 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/Report_20261105/status.json) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/ActionGroupsApi` | succeeded | 1 | 9 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/ActionGroupsApi/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/ActionGroupsApi/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/ActionGroupsApi/Report_20261105/operations.csv) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/ActivityLogAlertsApi` | succeeded | 1 | 6 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/ActivityLogAlertsApi/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/ActivityLogAlertsApi/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/ActivityLogAlertsApi/Report_20261105/operations.csv) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/ActivityLogsApi` | zero-resource | 0 | 0 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/ActivityLogsApi/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/ActivityLogsApi/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/ActivityLogsApi/Report_20261105/operations.csv) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/AlertRulesIncidentsApi` | zero-resource | 0 | 0 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/AlertRulesIncidentsApi/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/AlertRulesIncidentsApi/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/AlertRulesIncidentsApi/Report_20261105/operations.csv) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/AutoScaleApi` | succeeded | 1 | 7 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/AutoScaleApi/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/AutoScaleApi/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/AutoScaleApi/Report_20261105/operations.csv) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/DataCollectionApi` | succeeded | 3 | 18 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/DataCollectionApi/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/DataCollectionApi/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/DataCollectionApi/Report_20261105/operations.csv) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/DiagnosticsSettings` | succeeded | 2 | 6 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/DiagnosticsSettings/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/DiagnosticsSettings/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/DiagnosticsSettings/Report_20261105/operations.csv) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/LogProfilesApi` | succeeded | 1 | 5 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/LogProfilesApi/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/LogProfilesApi/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/LogProfilesApi/Report_20261105/operations.csv) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricAlertApi` | succeeded | 1 | 6 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricAlertApi/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricAlertApi/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricAlertApi/Report_20261105/operations.csv) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricBaselinesApi` | zero-resource | 0 | 0 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricBaselinesApi/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricBaselinesApi/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricBaselinesApi/Report_20261105/operations.csv) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricsApi` | zero-resource | 0 | 0 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricsApi/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricsApi/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/MetricsApi/Report_20261105/operations.csv) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/NetworkSecurityPerimeterApi` | zero-resource | 0 | 0 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/NetworkSecurityPerimeterApi/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/NetworkSecurityPerimeterApi/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/NetworkSecurityPerimeterApi/Report_20261105/operations.csv) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/PrivateLinkScopesApi` | succeeded | 4 | 16 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/PrivateLinkScopesApi/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/PrivateLinkScopesApi/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/PrivateLinkScopesApi/Report_20261105/operations.csv) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/ScheduledQueryRuleApi` | succeeded | 1 | 6 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/ScheduledQueryRuleApi/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/ScheduledQueryRuleApi/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/ScheduledQueryRuleApi/Report_20261105/operations.csv) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/ServiceDiagnosticsSettingsApi` | succeeded | 1 | 3 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/ServiceDiagnosticsSettingsApi/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/ServiceDiagnosticsSettingsApi/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/ServiceDiagnosticsSettingsApi/Report_20261105/operations.csv) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/TenantActionGroups` | succeeded | 1 | 5 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/TenantActionGroups/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/TenantActionGroups/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/TenantActionGroups/Report_20261105/operations.csv) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/VmInsightsOnboarding` | succeeded | 1 | 1 | [status](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/VmInsightsOnboarding/Report_20261105/status.json) · [resources](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/VmInsightsOnboarding/Report_20261105/resources.csv) · [operations](../../../specification/monitor/resource-manager/Microsoft.Insights/Insights/VmInsightsOnboarding/Report_20261105/operations.csv) |

### monitoringservice

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/monitoringservice/resource-manager/Microsoft.Monitor/Accounts` | succeeded | 15 | 70 | [status](../../../specification/monitoringservice/resource-manager/Microsoft.Monitor/Accounts/Report_20261105/status.json) · [resources](../../../specification/monitoringservice/resource-manager/Microsoft.Monitor/Accounts/Report_20261105/resources.csv) · [operations](../../../specification/monitoringservice/resource-manager/Microsoft.Monitor/Accounts/Report_20261105/operations.csv) |
| `specification/monitoringservice/resource-manager/Microsoft.Monitor/Agents` | succeeded | 1 | 6 | [status](../../../specification/monitoringservice/resource-manager/Microsoft.Monitor/Agents/Report_20261105/status.json) · [resources](../../../specification/monitoringservice/resource-manager/Microsoft.Monitor/Agents/Report_20261105/resources.csv) · [operations](../../../specification/monitoringservice/resource-manager/Microsoft.Monitor/Agents/Report_20261105/operations.csv) |
| `specification/monitoringservice/resource-manager/Microsoft.Monitor/PipelineGroups` | succeeded | 1 | 6 | [status](../../../specification/monitoringservice/resource-manager/Microsoft.Monitor/PipelineGroups/Report_20261105/status.json) · [resources](../../../specification/monitoringservice/resource-manager/Microsoft.Monitor/PipelineGroups/Report_20261105/resources.csv) · [operations](../../../specification/monitoringservice/resource-manager/Microsoft.Monitor/PipelineGroups/Report_20261105/operations.csv) |
| `specification/monitoringservice/resource-manager/Microsoft.Monitor/Slis` | succeeded | 1 | 4 | [status](../../../specification/monitoringservice/resource-manager/Microsoft.Monitor/Slis/Report_20261105/status.json) · [resources](../../../specification/monitoringservice/resource-manager/Microsoft.Monitor/Slis/Report_20261105/resources.csv) · [operations](../../../specification/monitoringservice/resource-manager/Microsoft.Monitor/Slis/Report_20261105/operations.csv) |

### msi

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/msi/resource-manager/Microsoft.ManagedIdentity/ManagedIdentity` | succeeded | 3 | 11 | [status](../../../specification/msi/resource-manager/Microsoft.ManagedIdentity/ManagedIdentity/Report_20261105/status.json) · [resources](../../../specification/msi/resource-manager/Microsoft.ManagedIdentity/ManagedIdentity/Report_20261105/resources.csv) · [operations](../../../specification/msi/resource-manager/Microsoft.ManagedIdentity/ManagedIdentity/Report_20261105/operations.csv) |

### mysql

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers` | succeeded | 15 | 60 | [status](../../../specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers/Report_20261105/status.json) · [resources](../../../specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers/Report_20261105/resources.csv) · [operations](../../../specification/mysql/resource-manager/Microsoft.DBforMySQL/FlexibleServers/Report_20261105/operations.csv) |

### netapp

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/netapp/resource-manager/Microsoft.NetApp/NetApp` | succeeded | 33 | 193 | [status](../../../specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Report_20261105/status.json) · [resources](../../../specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Report_20261105/resources.csv) · [operations](../../../specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Report_20261105/operations.csv) |

### network

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/network/resource-manager/Microsoft.Network/Network` | skipped | 0 | 0 | [status](../../../specification/network/resource-manager/Microsoft.Network/Network/Report_20261105/status.json) |
| `specification/network/resource-manager/Microsoft.Network/Network/Network` | zero-resource | 0 | 0 | [status](../../../specification/network/resource-manager/Microsoft.Network/Network/Network/Report_20261105/status.json) · [resources](../../../specification/network/resource-manager/Microsoft.Network/Network/Network/Report_20261105/resources.csv) · [operations](../../../specification/network/resource-manager/Microsoft.Network/Network/Network/Report_20261105/operations.csv) |
| `specification/network/resource-manager/Microsoft.Network/Network/Vmss` | zero-resource | 0 | 0 | [status](../../../specification/network/resource-manager/Microsoft.Network/Network/Vmss/Report_20261105/status.json) · [resources](../../../specification/network/resource-manager/Microsoft.Network/Network/Vmss/Report_20261105/resources.csv) · [operations](../../../specification/network/resource-manager/Microsoft.Network/Network/Vmss/Report_20261105/operations.csv) |

### networkcloud

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/networkcloud/resource-manager/Microsoft.NetworkCloud/NetworkCloud` | succeeded | 21 | 144 | [status](../../../specification/networkcloud/resource-manager/Microsoft.NetworkCloud/NetworkCloud/Report_20261105/status.json) · [resources](../../../specification/networkcloud/resource-manager/Microsoft.NetworkCloud/NetworkCloud/Report_20261105/resources.csv) · [operations](../../../specification/networkcloud/resource-manager/Microsoft.NetworkCloud/NetworkCloud/Report_20261105/operations.csv) |

### networkfunction

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/networkfunction/resource-manager/Microsoft.NetworkFunction/TrafficCollector` | succeeded | 2 | 11 | [status](../../../specification/networkfunction/resource-manager/Microsoft.NetworkFunction/TrafficCollector/Report_20261105/status.json) · [resources](../../../specification/networkfunction/resource-manager/Microsoft.NetworkFunction/TrafficCollector/Report_20261105/resources.csv) · [operations](../../../specification/networkfunction/resource-manager/Microsoft.NetworkFunction/TrafficCollector/Report_20261105/operations.csv) |

### networksecurity

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/networksecurity/resource-manager/Microsoft.NetworkSecurity` | skipped | 0 | 0 | [status](../../../specification/networksecurity/resource-manager/Microsoft.NetworkSecurity/Report_20261105/status.json) |
| `specification/networksecurity/resource-manager/Microsoft.NetworkSecurity/neuroShield` | succeeded | 5 | 23 | [status](../../../specification/networksecurity/resource-manager/Microsoft.NetworkSecurity/neuroShield/Report_20261105/status.json) · [resources](../../../specification/networksecurity/resource-manager/Microsoft.NetworkSecurity/neuroShield/Report_20261105/resources.csv) · [operations](../../../specification/networksecurity/resource-manager/Microsoft.NetworkSecurity/neuroShield/Report_20261105/operations.csv) |

### newrelic

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/newrelic/resource-manager/NewRelic.Observability/NewRelicObservability` | succeeded | 3 | 30 | [status](../../../specification/newrelic/resource-manager/NewRelic.Observability/NewRelicObservability/Report_20261105/status.json) · [resources](../../../specification/newrelic/resource-manager/NewRelic.Observability/NewRelicObservability/Report_20261105/resources.csv) · [operations](../../../specification/newrelic/resource-manager/NewRelic.Observability/NewRelicObservability/Report_20261105/operations.csv) |

### nginx

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/nginx/resource-manager/Nginx.NginxPlus/NginxPlus` | succeeded | 9 | 29 | [status](../../../specification/nginx/resource-manager/Nginx.NginxPlus/NginxPlus/Report_20261105/status.json) · [resources](../../../specification/nginx/resource-manager/Nginx.NginxPlus/NginxPlus/Report_20261105/resources.csv) · [operations](../../../specification/nginx/resource-manager/Nginx.NginxPlus/NginxPlus/Report_20261105/operations.csv) |

### notificationhubs

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/notificationhubs/resource-manager/Microsoft.NotificationHubs/NotificationHubs` | succeeded | 6 | 33 | [status](../../../specification/notificationhubs/resource-manager/Microsoft.NotificationHubs/NotificationHubs/Report_20261105/status.json) · [resources](../../../specification/notificationhubs/resource-manager/Microsoft.NotificationHubs/NotificationHubs/Report_20261105/resources.csv) · [operations](../../../specification/notificationhubs/resource-manager/Microsoft.NotificationHubs/NotificationHubs/Report_20261105/operations.csv) |

### onlineexperimentation

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/onlineexperimentation/resource-manager/Microsoft.OnlineExperimentation/OnlineExperimentation` | succeeded | 3 | 12 | [status](../../../specification/onlineexperimentation/resource-manager/Microsoft.OnlineExperimentation/OnlineExperimentation/Report_20261105/status.json) · [resources](../../../specification/onlineexperimentation/resource-manager/Microsoft.OnlineExperimentation/OnlineExperimentation/Report_20261105/resources.csv) · [operations](../../../specification/onlineexperimentation/resource-manager/Microsoft.OnlineExperimentation/OnlineExperimentation/Report_20261105/operations.csv) |

### operationalinsights

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights` | succeeded | 13 | 73 | [status](../../../specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Report_20261105/status.json) · [resources](../../../specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Report_20261105/resources.csv) · [operations](../../../specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Report_20261105/operations.csv) |

### oracle

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/oracle/resource-manager/Oracle.Database/OracleDatabase` | succeeded | 33 | 141 | [status](../../../specification/oracle/resource-manager/Oracle.Database/OracleDatabase/Report_20261105/status.json) · [resources](../../../specification/oracle/resource-manager/Oracle.Database/OracleDatabase/Report_20261105/resources.csv) · [operations](../../../specification/oracle/resource-manager/Oracle.Database/OracleDatabase/Report_20261105/operations.csv) |

### paloaltonetworks

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw` | succeeded | 17 | 101 | [status](../../../specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw/Report_20261105/status.json) · [resources](../../../specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw/Report_20261105/resources.csv) · [operations](../../../specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/Cloudngfw/Report_20261105/operations.csv) |

### peering

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/peering/resource-manager/Microsoft.Peering/Peering` | succeeded | 7 | 35 | [status](../../../specification/peering/resource-manager/Microsoft.Peering/Peering/Report_20261105/status.json) · [resources](../../../specification/peering/resource-manager/Microsoft.Peering/Peering/Report_20261105/resources.csv) · [operations](../../../specification/peering/resource-manager/Microsoft.Peering/Peering/Report_20261105/operations.csv) |

### platformvalidation

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/platformvalidation/resource-manager/Microsoft.PlatformValidation/PlatformValidation` | succeeded | 7 | 23 | [status](../../../specification/platformvalidation/resource-manager/Microsoft.PlatformValidation/PlatformValidation/Report_20261105/status.json) · [resources](../../../specification/platformvalidation/resource-manager/Microsoft.PlatformValidation/PlatformValidation/Report_20261105/resources.csv) · [operations](../../../specification/platformvalidation/resource-manager/Microsoft.PlatformValidation/PlatformValidation/Report_20261105/operations.csv) |

### policyinsights

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights` | skipped | 0 | 0 | [status](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/Report_20261105/status.json) |
| `specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi` | succeeded | 8 | 35 | [status](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi/Report_20261105/status.json) · [resources](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi/Report_20261105/resources.csv) · [operations](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyInsightsApi/Report_20261105/operations.csv) |
| `specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyTrackedResourcesApi` | zero-resource | 0 | 0 | [status](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyTrackedResourcesApi/Report_20261105/status.json) · [resources](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyTrackedResourcesApi/Report_20261105/resources.csv) · [operations](../../../specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/PolicyTrackedResourcesApi/Report_20261105/operations.csv) |

### portal

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/portal/resource-manager/Microsoft.Portal/Portal` | succeeded | 2 | 10 | [status](../../../specification/portal/resource-manager/Microsoft.Portal/Portal/Report_20261105/status.json) · [resources](../../../specification/portal/resource-manager/Microsoft.Portal/Portal/Report_20261105/resources.csv) · [operations](../../../specification/portal/resource-manager/Microsoft.Portal/Portal/Report_20261105/operations.csv) |

### portalservices

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/portalservices/resource-manager/Microsoft.PortalServices/copilotSettings` | succeeded | 1 | 4 | [status](../../../specification/portalservices/resource-manager/Microsoft.PortalServices/copilotSettings/Report_20261105/status.json) · [resources](../../../specification/portalservices/resource-manager/Microsoft.PortalServices/copilotSettings/Report_20261105/resources.csv) · [operations](../../../specification/portalservices/resource-manager/Microsoft.PortalServices/copilotSettings/Report_20261105/operations.csv) |
| `specification/portalservices/resource-manager/Microsoft.PortalServices/extensions` | zero-resource | 0 | 0 | [status](../../../specification/portalservices/resource-manager/Microsoft.PortalServices/extensions/Report_20261105/status.json) · [resources](../../../specification/portalservices/resource-manager/Microsoft.PortalServices/extensions/Report_20261105/resources.csv) · [operations](../../../specification/portalservices/resource-manager/Microsoft.PortalServices/extensions/Report_20261105/operations.csv) |

### postgresql

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/PostgreSql` | succeeded | 16 | 70 | [status](../../../specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/PostgreSql/Report_20261105/status.json) · [resources](../../../specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/PostgreSql/Report_20261105/resources.csv) · [operations](../../../specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/PostgreSql/Report_20261105/operations.csv) |

### postgresqlhsc

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/postgresqlhsc/resource-manager/Microsoft.DBforPostgreSQL/PostgresqlHsc` | succeeded | 9 | 33 | [status](../../../specification/postgresqlhsc/resource-manager/Microsoft.DBforPostgreSQL/PostgresqlHsc/Report_20261105/status.json) · [resources](../../../specification/postgresqlhsc/resource-manager/Microsoft.DBforPostgreSQL/PostgresqlHsc/Report_20261105/resources.csv) · [operations](../../../specification/postgresqlhsc/resource-manager/Microsoft.DBforPostgreSQL/PostgresqlHsc/Report_20261105/operations.csv) |

### powerbidedicated

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/powerbidedicated/resource-manager/Microsoft.PowerBIdedicated/PowerBIDedicated` | succeeded | 2 | 15 | [status](../../../specification/powerbidedicated/resource-manager/Microsoft.PowerBIdedicated/PowerBIDedicated/Report_20261105/status.json) · [resources](../../../specification/powerbidedicated/resource-manager/Microsoft.PowerBIdedicated/PowerBIDedicated/Report_20261105/resources.csv) · [operations](../../../specification/powerbidedicated/resource-manager/Microsoft.PowerBIdedicated/PowerBIDedicated/Report_20261105/operations.csv) |

### powerplatform

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/powerplatform/resource-manager/Microsoft.PowerPlatform/PowerPlatform` | succeeded | 4 | 18 | [status](../../../specification/powerplatform/resource-manager/Microsoft.PowerPlatform/PowerPlatform/Report_20261105/status.json) · [resources](../../../specification/powerplatform/resource-manager/Microsoft.PowerPlatform/PowerPlatform/Report_20261105/resources.csv) · [operations](../../../specification/powerplatform/resource-manager/Microsoft.PowerPlatform/PowerPlatform/Report_20261105/operations.csv) |

### privatedns

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/privatedns/resource-manager/Microsoft.Network/PrivateDns` | succeeded | 2 | 12 | [status](../../../specification/privatedns/resource-manager/Microsoft.Network/PrivateDns/Report_20261105/status.json) · [resources](../../../specification/privatedns/resource-manager/Microsoft.Network/PrivateDns/Report_20261105/resources.csv) · [operations](../../../specification/privatedns/resource-manager/Microsoft.Network/PrivateDns/Report_20261105/operations.csv) |

### privatetrafficmanager

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/privatetrafficmanager/resource-manager/Microsoft.Network/PrivateTrafficManager` | succeeded | 6 | 31 | [status](../../../specification/privatetrafficmanager/resource-manager/Microsoft.Network/PrivateTrafficManager/Report_20261105/status.json) · [resources](../../../specification/privatetrafficmanager/resource-manager/Microsoft.Network/PrivateTrafficManager/Report_20261105/resources.csv) · [operations](../../../specification/privatetrafficmanager/resource-manager/Microsoft.Network/PrivateTrafficManager/Report_20261105/operations.csv) |

### programenrollment

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/programenrollment/resource-manager/Microsoft.ProgramEnrollment/ProgramEnrollment` | succeeded | 1 | 6 | [status](../../../specification/programenrollment/resource-manager/Microsoft.ProgramEnrollment/ProgramEnrollment/Report_20261105/status.json) · [resources](../../../specification/programenrollment/resource-manager/Microsoft.ProgramEnrollment/ProgramEnrollment/Report_20261105/resources.csv) · [operations](../../../specification/programenrollment/resource-manager/Microsoft.ProgramEnrollment/ProgramEnrollment/Report_20261105/operations.csv) |

### providerhub

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub` | succeeded | 20 | 76 | [status](../../../specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub/Report_20261105/status.json) · [resources](../../../specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub/Report_20261105/resources.csv) · [operations](../../../specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub/Report_20261105/operations.csv) |

### purestorage

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/purestorage/resource-manager/PureStorage.Block/PureStorageBlock` | succeeded | 10 | 63 | [status](../../../specification/purestorage/resource-manager/PureStorage.Block/PureStorageBlock/Report_20261105/status.json) · [resources](../../../specification/purestorage/resource-manager/PureStorage.Block/PureStorageBlock/Report_20261105/resources.csv) · [operations](../../../specification/purestorage/resource-manager/PureStorage.Block/PureStorageBlock/Report_20261105/operations.csv) |

### purview

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/purview/resource-manager/Microsoft.Purview/Purview` | succeeded | 4 | 21 | [status](../../../specification/purview/resource-manager/Microsoft.Purview/Purview/Report_20261105/status.json) · [resources](../../../specification/purview/resource-manager/Microsoft.Purview/Purview/Report_20261105/resources.csv) · [operations](../../../specification/purview/resource-manager/Microsoft.Purview/Purview/Report_20261105/operations.csv) |

### purviewpolicy

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/purviewpolicy/resource-manager/Microsoft.Purview/PurviewPolicy` | zero-resource | 0 | 0 | [status](../../../specification/purviewpolicy/resource-manager/Microsoft.Purview/PurviewPolicy/Report_20261105/status.json) · [resources](../../../specification/purviewpolicy/resource-manager/Microsoft.Purview/PurviewPolicy/Report_20261105/resources.csv) · [operations](../../../specification/purviewpolicy/resource-manager/Microsoft.Purview/PurviewPolicy/Report_20261105/operations.csv) |

### quantum

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/quantum/resource-manager/Microsoft.Quantum/Quantum` | succeeded | 1 | 8 | [status](../../../specification/quantum/resource-manager/Microsoft.Quantum/Quantum/Report_20261105/status.json) · [resources](../../../specification/quantum/resource-manager/Microsoft.Quantum/Quantum/Report_20261105/resources.csv) · [operations](../../../specification/quantum/resource-manager/Microsoft.Quantum/Quantum/Report_20261105/operations.csv) |

### quota

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/quota/resource-manager/Microsoft.Quota/Quota` | succeeded | 18 | 44 | [status](../../../specification/quota/resource-manager/Microsoft.Quota/Quota/Report_20261105/status.json) · [resources](../../../specification/quota/resource-manager/Microsoft.Quota/Quota/Report_20261105/resources.csv) · [operations](../../../specification/quota/resource-manager/Microsoft.Quota/Quota/Report_20261105/operations.csv) |

### recoveryservices

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/RecoveryServices` | succeeded | 7 | 18 | [status](../../../specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/RecoveryServices/Report_20261105/status.json) · [resources](../../../specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/RecoveryServices/Report_20261105/resources.csv) · [operations](../../../specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/RecoveryServices/Report_20261105/operations.csv) |

### recoveryservicesbackup

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | succeeded | 34 | 76 | [status](../../../specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup/Report_20261105/status.json) · [resources](../../../specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup/Report_20261105/resources.csv) · [operations](../../../specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup/Report_20261105/operations.csv) |

### recoveryservicesdatareplication

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication` | succeeded | 12 | 45 | [status](../../../specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication/Report_20261105/status.json) · [resources](../../../specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication/Report_20261105/resources.csv) · [operations](../../../specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/DataReplication/Report_20261105/operations.csv) |

### recoveryservicessiterecovery

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery` | succeeded | 27 | 134 | [status](../../../specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/Report_20261105/status.json) · [resources](../../../specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/Report_20261105/resources.csv) · [operations](../../../specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/Report_20261105/operations.csv) |

### redhatopenshift

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/redhatopenshift/resource-manager/Microsoft.RedHatOpenShift/hcpopenshiftclusters` | succeeded | 6 | 23 | [status](../../../specification/redhatopenshift/resource-manager/Microsoft.RedHatOpenShift/hcpopenshiftclusters/Report_20261105/status.json) · [resources](../../../specification/redhatopenshift/resource-manager/Microsoft.RedHatOpenShift/hcpopenshiftclusters/Report_20261105/resources.csv) · [operations](../../../specification/redhatopenshift/resource-manager/Microsoft.RedHatOpenShift/hcpopenshiftclusters/Report_20261105/operations.csv) |
| `specification/redhatopenshift/resource-manager/Microsoft.RedHatOpenShift/OpenShiftClusters` | succeeded | 4 | 12 | [status](../../../specification/redhatopenshift/resource-manager/Microsoft.RedHatOpenShift/OpenShiftClusters/Report_20261105/status.json) · [resources](../../../specification/redhatopenshift/resource-manager/Microsoft.RedHatOpenShift/OpenShiftClusters/Report_20261105/resources.csv) · [operations](../../../specification/redhatopenshift/resource-manager/Microsoft.RedHatOpenShift/OpenShiftClusters/Report_20261105/operations.csv) |

### redis

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/redis/resource-manager/Microsoft.Cache/Redis` | succeeded | 7 | 38 | [status](../../../specification/redis/resource-manager/Microsoft.Cache/Redis/Report_20261105/status.json) · [resources](../../../specification/redis/resource-manager/Microsoft.Cache/Redis/Report_20261105/resources.csv) · [operations](../../../specification/redis/resource-manager/Microsoft.Cache/Redis/Report_20261105/operations.csv) |

### redisenterprise

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/redisenterprise/resource-manager/Microsoft.Cache/RedisEnterprise` | succeeded | 5 | 36 | [status](../../../specification/redisenterprise/resource-manager/Microsoft.Cache/RedisEnterprise/Report_20261105/status.json) · [resources](../../../specification/redisenterprise/resource-manager/Microsoft.Cache/RedisEnterprise/Report_20261105/resources.csv) · [operations](../../../specification/redisenterprise/resource-manager/Microsoft.Cache/RedisEnterprise/Report_20261105/operations.csv) |

### relationships

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/relationships/resource-manager/Microsoft.Relationships/Relationships` | succeeded | 3 | 12 | [status](../../../specification/relationships/resource-manager/Microsoft.Relationships/Relationships/Report_20261105/status.json) · [resources](../../../specification/relationships/resource-manager/Microsoft.Relationships/Relationships/Report_20261105/resources.csv) · [operations](../../../specification/relationships/resource-manager/Microsoft.Relationships/Relationships/Report_20261105/operations.csv) |

### relay

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/relay/resource-manager/Microsoft.Relay/Relay` | succeeded | 10 | 48 | [status](../../../specification/relay/resource-manager/Microsoft.Relay/Relay/Report_20261105/status.json) · [resources](../../../specification/relay/resource-manager/Microsoft.Relay/Relay/Report_20261105/resources.csv) · [operations](../../../specification/relay/resource-manager/Microsoft.Relay/Relay/Report_20261105/operations.csv) |

### reservations

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/reservations/resource-manager/Microsoft.Capacity/Reservations` | skipped | 0 | 0 | [status](../../../specification/reservations/resource-manager/Microsoft.Capacity/Reservations/Report_20261105/status.json) |
| `specification/reservations/resource-manager/Microsoft.Capacity/Reservations/Quota` | succeeded | 3 | 4 | [status](../../../specification/reservations/resource-manager/Microsoft.Capacity/Reservations/Quota/Report_20261105/status.json) · [resources](../../../specification/reservations/resource-manager/Microsoft.Capacity/Reservations/Quota/Report_20261105/resources.csv) · [operations](../../../specification/reservations/resource-manager/Microsoft.Capacity/Reservations/Quota/Report_20261105/operations.csv) |
| `specification/reservations/resource-manager/Microsoft.Capacity/Reservations/Reservations` | succeeded | 2 | 15 | [status](../../../specification/reservations/resource-manager/Microsoft.Capacity/Reservations/Reservations/Report_20261105/status.json) · [resources](../../../specification/reservations/resource-manager/Microsoft.Capacity/Reservations/Reservations/Report_20261105/resources.csv) · [operations](../../../specification/reservations/resource-manager/Microsoft.Capacity/Reservations/Reservations/Report_20261105/operations.csv) |

### resourceconnector

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/resourceconnector/resource-manager/Microsoft.ResourceConnector/ResourceConnector` | succeeded | 1 | 9 | [status](../../../specification/resourceconnector/resource-manager/Microsoft.ResourceConnector/ResourceConnector/Report_20261105/status.json) · [resources](../../../specification/resourceconnector/resource-manager/Microsoft.ResourceConnector/ResourceConnector/Report_20261105/resources.csv) · [operations](../../../specification/resourceconnector/resource-manager/Microsoft.ResourceConnector/ResourceConnector/Report_20261105/operations.csv) |

### resourcegraph

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph` | skipped | 0 | 0 | [status](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/Report_20261105/status.json) |
| `specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/GraphQueryApi` | succeeded | 1 | 6 | [status](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/GraphQueryApi/Report_20261105/status.json) · [resources](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/GraphQueryApi/Report_20261105/resources.csv) · [operations](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/GraphQueryApi/Report_20261105/operations.csv) |
| `specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/OnboardingApi` | succeeded | 10 | 25 | [status](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/OnboardingApi/Report_20261105/status.json) · [resources](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/OnboardingApi/Report_20261105/resources.csv) · [operations](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/OnboardingApi/Report_20261105/operations.csv) |
| `specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceChanges` | zero-resource | 0 | 0 | [status](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceChanges/Report_20261105/status.json) · [resources](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceChanges/Report_20261105/resources.csv) · [operations](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceChanges/Report_20261105/operations.csv) |
| `specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceGraphApi` | zero-resource | 0 | 0 | [status](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceGraphApi/Report_20261105/status.json) · [resources](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceGraphApi/Report_20261105/resources.csv) · [operations](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceGraphApi/Report_20261105/operations.csv) |
| `specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceHistory` | zero-resource | 0 | 0 | [status](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceHistory/Report_20261105/status.json) · [resources](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceHistory/Report_20261105/resources.csv) · [operations](../../../specification/resourcegraph/resource-manager/Microsoft.ResourceGraph/ResourceGraph/ResourceHistory/Report_20261105/operations.csv) |

### resourcehealth

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/ResourceHealth` | succeeded | 6 | 17 | [status](../../../specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/ResourceHealth/Report_20261105/status.json) · [resources](../../../specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/ResourceHealth/Report_20261105/resources.csv) · [operations](../../../specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/ResourceHealth/Report_20261105/operations.csv) |

### resources

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/resources/resource-manager/Microsoft.Authorization/policy` | succeeded | 20 | 82 | [status](../../../specification/resources/resource-manager/Microsoft.Authorization/policy/Report_20261105/status.json) · [resources](../../../specification/resources/resource-manager/Microsoft.Authorization/policy/Report_20261105/resources.csv) · [operations](../../../specification/resources/resource-manager/Microsoft.Authorization/policy/Report_20261105/operations.csv) |
| `specification/resources/resource-manager/Microsoft.Resources/bicep` | zero-resource | 0 | 0 | [status](../../../specification/resources/resource-manager/Microsoft.Resources/bicep/Report_20261105/status.json) · [resources](../../../specification/resources/resource-manager/Microsoft.Resources/bicep/Report_20261105/resources.csv) · [operations](../../../specification/resources/resource-manager/Microsoft.Resources/bicep/Report_20261105/operations.csv) |
| `specification/resources/resource-manager/Microsoft.Resources/databoundaries` | succeeded | 2 | 3 | [status](../../../specification/resources/resource-manager/Microsoft.Resources/databoundaries/Report_20261105/status.json) · [resources](../../../specification/resources/resource-manager/Microsoft.Resources/databoundaries/Report_20261105/resources.csv) · [operations](../../../specification/resources/resource-manager/Microsoft.Resources/databoundaries/Report_20261105/operations.csv) |
| `specification/resources/resource-manager/Microsoft.Resources/deployments` | succeeded | 5 | 52 | [status](../../../specification/resources/resource-manager/Microsoft.Resources/deployments/Report_20261105/status.json) · [resources](../../../specification/resources/resource-manager/Microsoft.Resources/deployments/Report_20261105/resources.csv) · [operations](../../../specification/resources/resource-manager/Microsoft.Resources/deployments/Report_20261105/operations.csv) |
| `specification/resources/resource-manager/Microsoft.Resources/deploymentScripts` | succeeded | 2 | 8 | [status](../../../specification/resources/resource-manager/Microsoft.Resources/deploymentScripts/Report_20261105/status.json) · [resources](../../../specification/resources/resource-manager/Microsoft.Resources/deploymentScripts/Report_20261105/resources.csv) · [operations](../../../specification/resources/resource-manager/Microsoft.Resources/deploymentScripts/Report_20261105/operations.csv) |
| `specification/resources/resource-manager/Microsoft.Resources/deploymentStacks` | succeeded | 8 | 44 | [status](../../../specification/resources/resource-manager/Microsoft.Resources/deploymentStacks/Report_20261105/status.json) · [resources](../../../specification/resources/resource-manager/Microsoft.Resources/deploymentStacks/Report_20261105/resources.csv) · [operations](../../../specification/resources/resource-manager/Microsoft.Resources/deploymentStacks/Report_20261105/operations.csv) |
| `specification/resources/resource-manager/Microsoft.Resources/resources` | succeeded | 3 | 19 | [status](../../../specification/resources/resource-manager/Microsoft.Resources/resources/Report_20261105/status.json) · [resources](../../../specification/resources/resource-manager/Microsoft.Resources/resources/Report_20261105/resources.csv) · [operations](../../../specification/resources/resource-manager/Microsoft.Resources/resources/Report_20261105/operations.csv) |
| `specification/resources/resource-manager/Microsoft.Resources/resourceValidator` | zero-resource | 0 | 0 | [status](../../../specification/resources/resource-manager/Microsoft.Resources/resourceValidator/Report_20261105/status.json) · [resources](../../../specification/resources/resource-manager/Microsoft.Resources/resourceValidator/Report_20261105/resources.csv) · [operations](../../../specification/resources/resource-manager/Microsoft.Resources/resourceValidator/Report_20261105/operations.csv) |
| `specification/resources/resource-manager/Microsoft.Resources/subscriptions` | zero-resource | 0 | 0 | [status](../../../specification/resources/resource-manager/Microsoft.Resources/subscriptions/Report_20261105/status.json) · [resources](../../../specification/resources/resource-manager/Microsoft.Resources/subscriptions/Report_20261105/resources.csv) · [operations](../../../specification/resources/resource-manager/Microsoft.Resources/subscriptions/Report_20261105/operations.csv) |

### scvmm

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/scvmm/resource-manager/Microsoft.ScVmm/ScVmm` | succeeded | 9 | 51 | [status](../../../specification/scvmm/resource-manager/Microsoft.ScVmm/ScVmm/Report_20261105/status.json) · [resources](../../../specification/scvmm/resource-manager/Microsoft.ScVmm/ScVmm/Report_20261105/resources.csv) · [operations](../../../specification/scvmm/resource-manager/Microsoft.ScVmm/ScVmm/Report_20261105/operations.csv) |

### search

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/search/resource-manager/Microsoft.Search/Search` | succeeded | 5 | 24 | [status](../../../specification/search/resource-manager/Microsoft.Search/Search/Report_20261105/status.json) · [resources](../../../specification/search/resource-manager/Microsoft.Search/Search/Report_20261105/resources.csv) · [operations](../../../specification/search/resource-manager/Microsoft.Search/Search/Report_20261105/operations.csv) |

### security

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/security/resource-manager/Microsoft.Security/Security` | skipped | 0 | 0 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/Report_20261105/status.json) |
| `specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI` | succeeded | 3 | 12 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/AlertsSuppressionRulesAPI` | succeeded | 1 | 4 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/AlertsSuppressionRulesAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/AlertsSuppressionRulesAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/AlertsSuppressionRulesAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/ApiCollectionsAPI` | succeeded | 2 | 5 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/ApiCollectionsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/ApiCollectionsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/ApiCollectionsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/ApplicationsAPI` | succeeded | 3 | 8 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/ApplicationsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/ApplicationsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/ApplicationsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/AssessmentAPI` | succeeded | 3 | 10 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/AssessmentAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/AssessmentAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/AssessmentAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/ATPSettingsAPI` | succeeded | 1 | 2 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/ATPSettingsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/ATPSettingsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/ATPSettingsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/AutomationsAPI` | succeeded | 2 | 11 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/AutomationsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/AutomationsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/AutomationsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/BatchPricingsAPI` | succeeded | 1 | 3 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/BatchPricingsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/BatchPricingsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/BatchPricingsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/ComplianceResultsAPI` | succeeded | 1 | 2 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/ComplianceResultsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/ComplianceResultsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/ComplianceResultsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/DataScannersAPI` | succeeded | 1 | 4 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/DataScannersAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/DataScannersAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/DataScannersAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/DefenderForStorageAPI` | succeeded | 2 | 6 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/DefenderForStorageAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/DefenderForStorageAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/DefenderForStorageAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/GovernanceAPI` | succeeded | 3 | 9 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/GovernanceAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/GovernanceAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/GovernanceAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/HealthReportsAPI` | succeeded | 1 | 2 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/HealthReportsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/HealthReportsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/HealthReportsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/IoTSecurityAPI` | succeeded | 5 | 17 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/IoTSecurityAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/IoTSecurityAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/IoTSecurityAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/LegacySettingsAPI` | succeeded | 4 | 13 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/LegacySettingsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/LegacySettingsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/LegacySettingsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/LocationsAPI` | zero-resource | 0 | 0 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/LocationsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/LocationsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/LocationsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/MdeOnboardingAPI` | succeeded | 1 | 2 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/MdeOnboardingAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/MdeOnboardingAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/MdeOnboardingAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/OperationsAPI` | zero-resource | 0 | 0 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/OperationsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/OperationsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/OperationsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/PricingsAPI` | succeeded | 1 | 4 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/PricingsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/PricingsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/PricingsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/PrivateLinksAPI` | succeeded | 3 | 13 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/PrivateLinksAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/PrivateLinksAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/PrivateLinksAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/RegulatoryComplianceAPI` | succeeded | 3 | 6 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/RegulatoryComplianceAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/RegulatoryComplianceAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/RegulatoryComplianceAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/SecureScoreAPI` | succeeded | 1 | 3 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/SecureScoreAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/SecureScoreAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/SecureScoreAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/SecurityConnectorsAPI` | succeeded | 1 | 6 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/SecurityConnectorsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/SecurityConnectorsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/SecurityConnectorsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/SecurityConnectorsDevOpsAPI` | succeeded | 9 | 30 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/SecurityConnectorsDevOpsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/SecurityConnectorsDevOpsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/SecurityConnectorsDevOpsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/SecurityOperatorsAPI` | succeeded | 2 | 4 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/SecurityOperatorsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/SecurityOperatorsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/SecurityOperatorsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/SecuritySolutionsAPI` | succeeded | 7 | 17 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/SecuritySolutionsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/SecuritySolutionsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/SecuritySolutionsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/SecurityStandardsAPI` | succeeded | 3 | 12 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/SecurityStandardsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/SecurityStandardsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/SecurityStandardsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/SensitivitySettingsAPI` | succeeded | 1 | 3 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/SensitivitySettingsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/SensitivitySettingsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/SensitivitySettingsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/ServerVulnerabilityAssessmentsSettingsAPI` | succeeded | 1 | 4 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/ServerVulnerabilityAssessmentsSettingsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/ServerVulnerabilityAssessmentsSettingsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/ServerVulnerabilityAssessmentsSettingsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/ServiceEntitlementsAPI` | succeeded | 1 | 6 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/ServiceEntitlementsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/ServiceEntitlementsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/ServiceEntitlementsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/ServiceEntitlementSettingsAPI` | succeeded | 1 | 6 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/ServiceEntitlementSettingsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/ServiceEntitlementSettingsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/ServiceEntitlementSettingsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/SettingsAPI` | succeeded | 1 | 3 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/SettingsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/SettingsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/SettingsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/SqlVulnerabilityAssessmentsAPI` | succeeded | 4 | 13 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/SqlVulnerabilityAssessmentsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/SqlVulnerabilityAssessmentsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/SqlVulnerabilityAssessmentsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/StandardsAPI` | succeeded | 2 | 10 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/StandardsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/StandardsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/StandardsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/SubAssessmentsAPI` | succeeded | 2 | 2 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/SubAssessmentsAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/SubAssessmentsAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/SubAssessmentsAPI/Report_20261105/operations.csv) |
| `specification/security/resource-manager/Microsoft.Security/Security/TasksAPI` | succeeded | 3 | 6 | [status](../../../specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/Report_20261105/status.json) · [resources](../../../specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/Report_20261105/resources.csv) · [operations](../../../specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/Report_20261105/operations.csv) |

### securityinsights

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/securityinsights/resource-manager/Microsoft.SecurityInsights/SecurityInsights` | succeeded | 46 | 161 | [status](../../../specification/securityinsights/resource-manager/Microsoft.SecurityInsights/SecurityInsights/Report_20261105/status.json) · [resources](../../../specification/securityinsights/resource-manager/Microsoft.SecurityInsights/SecurityInsights/Report_20261105/resources.csv) · [operations](../../../specification/securityinsights/resource-manager/Microsoft.SecurityInsights/SecurityInsights/Report_20261105/operations.csv) |

### serialconsole

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/serialconsole/resource-manager/Microsoft.SerialConsole/SerialConsole` | succeeded | 1 | 5 | [status](../../../specification/serialconsole/resource-manager/Microsoft.SerialConsole/SerialConsole/Report_20261105/status.json) · [resources](../../../specification/serialconsole/resource-manager/Microsoft.SerialConsole/SerialConsole/Report_20261105/resources.csv) · [operations](../../../specification/serialconsole/resource-manager/Microsoft.SerialConsole/SerialConsole/Report_20261105/operations.csv) |

### servicebus

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/servicebus/resource-manager/Microsoft.ServiceBus/ServiceBus` | succeeded | 14 | 68 | [status](../../../specification/servicebus/resource-manager/Microsoft.ServiceBus/ServiceBus/Report_20261105/status.json) · [resources](../../../specification/servicebus/resource-manager/Microsoft.ServiceBus/ServiceBus/Report_20261105/resources.csv) · [operations](../../../specification/servicebus/resource-manager/Microsoft.ServiceBus/ServiceBus/Report_20261105/operations.csv) |

### servicefabric

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/servicefabric/resource-manager/Microsoft.ServiceFabric/ServiceFabric` | succeeded | 7 | 27 | [status](../../../specification/servicefabric/resource-manager/Microsoft.ServiceFabric/ServiceFabric/Report_20261105/status.json) · [resources](../../../specification/servicefabric/resource-manager/Microsoft.ServiceFabric/ServiceFabric/Report_20261105/resources.csv) · [operations](../../../specification/servicefabric/resource-manager/Microsoft.ServiceFabric/ServiceFabric/Report_20261105/operations.csv) |

### servicefabricmanagedclusters

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters` | succeeded | 6 | 57 | [status](../../../specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/Report_20261105/status.json) · [resources](../../../specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/Report_20261105/resources.csv) · [operations](../../../specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/ServiceFabricManagedClusters/Report_20261105/operations.csv) |

### servicelinker

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/servicelinker/resource-manager/Microsoft.ServiceLinker/ServiceLinker` | succeeded | 5 | 25 | [status](../../../specification/servicelinker/resource-manager/Microsoft.ServiceLinker/ServiceLinker/Report_20261105/status.json) · [resources](../../../specification/servicelinker/resource-manager/Microsoft.ServiceLinker/ServiceLinker/Report_20261105/resources.csv) · [operations](../../../specification/servicelinker/resource-manager/Microsoft.ServiceLinker/ServiceLinker/Report_20261105/operations.csv) |

### servicenetworking

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/ServiceNetworking` | succeeded | 6 | 27 | [status](../../../specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/ServiceNetworking/Report_20261105/status.json) · [resources](../../../specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/ServiceNetworking/Report_20261105/resources.csv) · [operations](../../../specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/ServiceNetworking/Report_20261105/operations.csv) |

### signalr

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/signalr/resource-manager/Microsoft.SignalRService/SignalRService` | succeeded | 7 | 37 | [status](../../../specification/signalr/resource-manager/Microsoft.SignalRService/SignalRService/Report_20261105/status.json) · [resources](../../../specification/signalr/resource-manager/Microsoft.SignalRService/SignalRService/Report_20261105/resources.csv) · [operations](../../../specification/signalr/resource-manager/Microsoft.SignalRService/SignalRService/Report_20261105/operations.csv) |

### solutions

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/solutions/resource-manager/Microsoft.Solutions/Solutions` | zero-resource | 0 | 0 | [status](../../../specification/solutions/resource-manager/Microsoft.Solutions/Solutions/Report_20261105/status.json) · [resources](../../../specification/solutions/resource-manager/Microsoft.Solutions/Solutions/Report_20261105/resources.csv) · [operations](../../../specification/solutions/resource-manager/Microsoft.Solutions/Solutions/Report_20261105/operations.csv) |

### sovereign

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/sovereign/resource-manager/Microsoft.Sovereign/Sovereign` | succeeded | 1 | 13 | [status](../../../specification/sovereign/resource-manager/Microsoft.Sovereign/Sovereign/Report_20261105/status.json) · [resources](../../../specification/sovereign/resource-manager/Microsoft.Sovereign/Sovereign/Report_20261105/resources.csv) · [operations](../../../specification/sovereign/resource-manager/Microsoft.Sovereign/Sovereign/Report_20261105/operations.csv) |

### sphere

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/sphere/resource-manager/Microsoft.AzureSphere/AzureSphere` | succeeded | 7 | 44 | [status](../../../specification/sphere/resource-manager/Microsoft.AzureSphere/AzureSphere/Report_20261105/status.json) · [resources](../../../specification/sphere/resource-manager/Microsoft.AzureSphere/AzureSphere/Report_20261105/resources.csv) · [operations](../../../specification/sphere/resource-manager/Microsoft.AzureSphere/AzureSphere/Report_20261105/operations.csv) |

### sql

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/sql/resource-manager/Microsoft.Sql/SQL` | succeeded | 135 | 532 | [status](../../../specification/sql/resource-manager/Microsoft.Sql/SQL/Report_20261105/status.json) · [resources](../../../specification/sql/resource-manager/Microsoft.Sql/SQL/Report_20261105/resources.csv) · [operations](../../../specification/sql/resource-manager/Microsoft.Sql/SQL/Report_20261105/operations.csv) |

### sqlvirtualmachine

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/SqlVirtualMachine` | succeeded | 3 | 21 | [status](../../../specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/SqlVirtualMachine/Report_20261105/status.json) · [resources](../../../specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/SqlVirtualMachine/Report_20261105/resources.csv) · [operations](../../../specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/SqlVirtualMachine/Report_20261105/operations.csv) |

### standbypool

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/standbypool/resource-manager/Microsoft.StandbyPool/StandbyPool` | succeeded | 5 | 18 | [status](../../../specification/standbypool/resource-manager/Microsoft.StandbyPool/StandbyPool/Report_20261105/status.json) · [resources](../../../specification/standbypool/resource-manager/Microsoft.StandbyPool/StandbyPool/Report_20261105/resources.csv) · [operations](../../../specification/standbypool/resource-manager/Microsoft.StandbyPool/StandbyPool/Report_20261105/operations.csv) |

### storage

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | succeeded | 30 | 135 | [status](../../../specification/storage/resource-manager/Microsoft.Storage/Storage/Report_20261105/status.json) · [resources](../../../specification/storage/resource-manager/Microsoft.Storage/Storage/Report_20261105/resources.csv) · [operations](../../../specification/storage/resource-manager/Microsoft.Storage/Storage/Report_20261105/operations.csv) |

### storageactions

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/storageactions/resource-manager/Microsoft.StorageActions/StorageActions` | succeeded | 1 | 9 | [status](../../../specification/storageactions/resource-manager/Microsoft.StorageActions/StorageActions/Report_20261105/status.json) · [resources](../../../specification/storageactions/resource-manager/Microsoft.StorageActions/StorageActions/Report_20261105/resources.csv) · [operations](../../../specification/storageactions/resource-manager/Microsoft.StorageActions/StorageActions/Report_20261105/operations.csv) |

### storagecache

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/storagecache/resource-manager/Microsoft.StorageCache/StorageCache` | succeeded | 8 | 58 | [status](../../../specification/storagecache/resource-manager/Microsoft.StorageCache/StorageCache/Report_20261105/status.json) · [resources](../../../specification/storagecache/resource-manager/Microsoft.StorageCache/StorageCache/Report_20261105/resources.csv) · [operations](../../../specification/storagecache/resource-manager/Microsoft.StorageCache/StorageCache/Report_20261105/operations.csv) |

### storagediscovery

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/storagediscovery/resource-manager/Microsoft.StorageDiscovery/StorageDiscovery` | succeeded | 2 | 11 | [status](../../../specification/storagediscovery/resource-manager/Microsoft.StorageDiscovery/StorageDiscovery/Report_20261105/status.json) · [resources](../../../specification/storagediscovery/resource-manager/Microsoft.StorageDiscovery/StorageDiscovery/Report_20261105/resources.csv) · [operations](../../../specification/storagediscovery/resource-manager/Microsoft.StorageDiscovery/StorageDiscovery/Report_20261105/operations.csv) |

### storagemover

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/storagemover/resource-manager/Microsoft.StorageMover/StorageMover` | succeeded | 7 | 35 | [status](../../../specification/storagemover/resource-manager/Microsoft.StorageMover/StorageMover/Report_20261105/status.json) · [resources](../../../specification/storagemover/resource-manager/Microsoft.StorageMover/StorageMover/Report_20261105/resources.csv) · [operations](../../../specification/storagemover/resource-manager/Microsoft.StorageMover/StorageMover/Report_20261105/operations.csv) |

### storagesync

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/storagesync/resource-manager/Microsoft.StorageSync/StorageSync` | succeeded | 7 | 42 | [status](../../../specification/storagesync/resource-manager/Microsoft.StorageSync/StorageSync/Report_20261105/status.json) · [resources](../../../specification/storagesync/resource-manager/Microsoft.StorageSync/StorageSync/Report_20261105/resources.csv) · [operations](../../../specification/storagesync/resource-manager/Microsoft.StorageSync/StorageSync/Report_20261105/operations.csv) |

### subscription

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/subscription/resource-manager/Microsoft.Subscription/Subscription` | succeeded | 5 | 12 | [status](../../../specification/subscription/resource-manager/Microsoft.Subscription/Subscription/Report_20261105/status.json) · [resources](../../../specification/subscription/resource-manager/Microsoft.Subscription/Subscription/Report_20261105/resources.csv) · [operations](../../../specification/subscription/resource-manager/Microsoft.Subscription/Subscription/Report_20261105/operations.csv) |

### support

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/support/resource-manager/Microsoft.Support/Support` | succeeded | 12 | 36 | [status](../../../specification/support/resource-manager/Microsoft.Support/Support/Report_20261105/status.json) · [resources](../../../specification/support/resource-manager/Microsoft.Support/Support/Report_20261105/resources.csv) · [operations](../../../specification/support/resource-manager/Microsoft.Support/Support/Report_20261105/operations.csv) |

### terraform

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/terraform/resource-manager/Microsoft.AzureTerraform/AzureTerraform` | zero-resource | 0 | 0 | [status](../../../specification/terraform/resource-manager/Microsoft.AzureTerraform/AzureTerraform/Report_20261105/status.json) · [resources](../../../specification/terraform/resource-manager/Microsoft.AzureTerraform/AzureTerraform/Report_20261105/resources.csv) · [operations](../../../specification/terraform/resource-manager/Microsoft.AzureTerraform/AzureTerraform/Report_20261105/operations.csv) |

### trafficmanager

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/trafficmanager/resource-manager/Microsoft.Network/TrafficManager` | zero-resource | 0 | 0 | [status](../../../specification/trafficmanager/resource-manager/Microsoft.Network/TrafficManager/Report_20261105/status.json) · [resources](../../../specification/trafficmanager/resource-manager/Microsoft.Network/TrafficManager/Report_20261105/resources.csv) · [operations](../../../specification/trafficmanager/resource-manager/Microsoft.Network/TrafficManager/Report_20261105/operations.csv) |

### verifiedid

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/verifiedid/resource-manager/Microsoft.VerifiedId/VerifiedId` | succeeded | 1 | 6 | [status](../../../specification/verifiedid/resource-manager/Microsoft.VerifiedId/VerifiedId/Report_20261105/status.json) · [resources](../../../specification/verifiedid/resource-manager/Microsoft.VerifiedId/VerifiedId/Report_20261105/resources.csv) · [operations](../../../specification/verifiedid/resource-manager/Microsoft.VerifiedId/VerifiedId/Report_20261105/operations.csv) |

### vmware

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/vmware/resource-manager/Microsoft.AVS/AVS` | succeeded | 29 | 120 | [status](../../../specification/vmware/resource-manager/Microsoft.AVS/AVS/Report_20261105/status.json) · [resources](../../../specification/vmware/resource-manager/Microsoft.AVS/AVS/Report_20261105/resources.csv) · [operations](../../../specification/vmware/resource-manager/Microsoft.AVS/AVS/Report_20261105/operations.csv) |

### web

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/web/resource-manager/Microsoft.Web/AppService` | succeeded | 151 | 761 | [status](../../../specification/web/resource-manager/Microsoft.Web/AppService/Report_20261105/status.json) · [resources](../../../specification/web/resource-manager/Microsoft.Web/AppService/Report_20261105/resources.csv) · [operations](../../../specification/web/resource-manager/Microsoft.Web/AppService/Report_20261105/operations.csv) |

### webpubsub

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/webpubsub/resource-manager/Microsoft.SignalRService/SignalRService` | succeeded | 9 | 45 | [status](../../../specification/webpubsub/resource-manager/Microsoft.SignalRService/SignalRService/Report_20261105/status.json) · [resources](../../../specification/webpubsub/resource-manager/Microsoft.SignalRService/SignalRService/Report_20261105/resources.csv) · [operations](../../../specification/webpubsub/resource-manager/Microsoft.SignalRService/SignalRService/Report_20261105/operations.csv) |

### widget

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/widget/resource-manager/Microsoft.Widget/Widget` | succeeded | 1 | 6 | [status](../../../specification/widget/resource-manager/Microsoft.Widget/Widget/Report_20261105/status.json) · [resources](../../../specification/widget/resource-manager/Microsoft.Widget/Widget/Report_20261105/resources.csv) · [operations](../../../specification/widget/resource-manager/Microsoft.Widget/Widget/Report_20261105/operations.csv) |

### workloads

| Project | Status | Resources | Operations | Reports |
| --- | --- | ---: | ---: | --- |
| `specification/workloads/resource-manager/Microsoft.Workloads/monitors` | succeeded | 5 | 21 | [status](../../../specification/workloads/resource-manager/Microsoft.Workloads/monitors/Report_20261105/status.json) · [resources](../../../specification/workloads/resource-manager/Microsoft.Workloads/monitors/Report_20261105/resources.csv) · [operations](../../../specification/workloads/resource-manager/Microsoft.Workloads/monitors/Report_20261105/operations.csv) |
| `specification/workloads/resource-manager/Microsoft.Workloads/SAPDiscoverySites` | succeeded | 3 | 17 | [status](../../../specification/workloads/resource-manager/Microsoft.Workloads/SAPDiscoverySites/Report_20261105/status.json) · [resources](../../../specification/workloads/resource-manager/Microsoft.Workloads/SAPDiscoverySites/Report_20261105/resources.csv) · [operations](../../../specification/workloads/resource-manager/Microsoft.Workloads/SAPDiscoverySites/Report_20261105/operations.csv) |
| `specification/workloads/resource-manager/Microsoft.Workloads/SAPVirtualInstance` | succeeded | 4 | 29 | [status](../../../specification/workloads/resource-manager/Microsoft.Workloads/SAPVirtualInstance/Report_20261105/status.json) · [resources](../../../specification/workloads/resource-manager/Microsoft.Workloads/SAPVirtualInstance/Report_20261105/resources.csv) · [operations](../../../specification/workloads/resource-manager/Microsoft.Workloads/SAPVirtualInstance/Report_20261105/operations.csv) |
