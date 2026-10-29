## Breaking Change Analysis

### specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/MachineLearningServices

❌ **240 unsuppressed breaking changes detected**

240 unsuppressed · 12 version pairs compared

### Unsuppressed Breaking Changes

#### 2024-10-01-preview (base → head)

| Kind | Source declaration | Wire identity | Source | Suppression |
| --- | --- | --- | --- | --- |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Kubernetes.properties.properties.instanceTypes.properties.nodeSelector.variants.TypeSpec.Record` | `models.tsp:10257` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Kubernetes.properties.properties.instanceTypes.properties.nodeSelector.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Kubernetes.properties.properties.instanceTypes.properties.nodeSelector.variants.TypeSpec.Record` | `ComputeResource.tsp:68` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Kubernetes.properties.properties.instanceTypes.properties.nodeSelector.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedulesCreateOrUpdate.properties.computeStartStop.properties.recurrence.properties.schedule.properties.weekDays.variants.TypeSpec.Array` | `models.tsp:11109` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedulesCreateOrUpdate.properties.computeStartStop.properties.recurrence.properties.schedule.properties.weekDays.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedulesCreateOrUpdate.properties.computeStartStop.properties.recurrence.properties.schedule.properties.weekDays.variants.TypeSpec.Array` | `ComputeResource.tsp:68` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedulesCreateOrUpdate.properties.computeStartStop.properties.recurrence.properties.schedule.properties.weekDays.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.tags.variants.TypeSpec.Record` | `ComputeResource.tsp:44` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.tags.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.tags.variants.TypeSpec.Record` | `ComputeResource.tsp:68` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.tags.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.managedResourceGroupSettings.variants.Microsoft.MachineLearningServices.ManagedResourceGroupSettingsCreateOrUpdate.properties.assignedIdentities.variants.TypeSpec.Array` | `models.tsp:7877` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.managedResourceGroupSettings.variants.Microsoft.MachineLearningServices.ManagedResourceGroupSettingsCreateOrUpdate.properties.assignedIdentities.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.managedResourceGroupSettings.variants.Microsoft.MachineLearningServices.ManagedResourceGroupSettingsCreateOrUpdate.properties.assignedIdentities.variants.TypeSpec.Array` | `Registry.tsp:47` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.managedResourceGroupSettings.variants.Microsoft.MachineLearningServices.ManagedResourceGroupSettingsCreateOrUpdate.properties.assignedIdentities.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.mltable.properties.referencedUris.variants.TypeSpec.Array` | `models.tsp:15049` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.mltable.properties.referencedUris.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.mltable.properties.referencedUris.variants.TypeSpec.Array` | `DataVersionBase.tsp:111` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.mltable.properties.referencedUris.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.deploymentConfiguration.variants.BatchDeploymentConfigurationUnionCreateOrUpdate.variants.PipelineComponent.properties.settings.variants.TypeSpec.Record` | `models.tsp:12414` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.deploymentConfiguration.variants.BatchDeploymentConfigurationUnionCreateOrUpdate.variants.PipelineComponent.properties.settings.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.deploymentConfiguration.variants.BatchDeploymentConfigurationUnionCreateOrUpdate.variants.PipelineComponent.properties.settings.variants.TypeSpec.Record` | `BatchDeployment.tsp:50` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.deploymentConfiguration.variants.BatchDeploymentConfigurationUnionCreateOrUpdate.variants.PipelineComponent.properties.settings.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.deploymentConfiguration.variants.BatchDeploymentConfigurationUnionCreateOrUpdate.variants.PipelineComponent.properties.tags.variants.TypeSpec.Record` | `models.tsp:12421` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.deploymentConfiguration.variants.BatchDeploymentConfigurationUnionCreateOrUpdate.variants.PipelineComponent.properties.tags.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.deploymentConfiguration.variants.BatchDeploymentConfigurationUnionCreateOrUpdate.variants.PipelineComponent.properties.tags.variants.TypeSpec.Record` | `BatchDeployment.tsp:50` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.deploymentConfiguration.variants.BatchDeploymentConfigurationUnionCreateOrUpdate.variants.PipelineComponent.properties.tags.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.acaEnvironmentConnections.variants.TypeSpec.Array` | `models.tsp:6007` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.acaEnvironmentConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.acaEnvironmentConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:49` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.acaEnvironmentConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:6013` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:49` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:6036` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:49` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:6042` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:49` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:6048` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:49` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.entities.variants.TypeSpec.Array` | `models.tsp:6203` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.entities.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.entities.variants.TypeSpec.Array` | `FeaturesetVersion.tsp:99` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.entities.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.emailOn.variants.TypeSpec.Array` | `models.tsp:6272` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.emailOn.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.emailOn.variants.TypeSpec.Array` | `FeaturesetVersion.tsp:99` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.emailOn.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.emails.variants.TypeSpec.Array` | `models.tsp:6279` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.emails.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.emails.variants.TypeSpec.Array` | `FeaturesetVersion.tsp:99` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.emails.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTriggerCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceScheduleCreateOrUpdate.properties.weekDays.variants.TypeSpec.Array` | `models.tsp:6366` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTriggerCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceScheduleCreateOrUpdate.properties.weekDays.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTriggerCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceScheduleCreateOrUpdate.properties.weekDays.variants.TypeSpec.Array` | `FeaturesetVersion.tsp:99` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTriggerCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceScheduleCreateOrUpdate.properties.weekDays.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.sparkConfiguration.variants.TypeSpec.Record` | `models.tsp:6255` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.sparkConfiguration.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.sparkConfiguration.variants.TypeSpec.Record` | `FeaturesetVersion.tsp:99` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.sparkConfiguration.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.scaleUnitConfiguration.variants.Microsoft.MachineLearningServices.ScaleUnitConfigurationCreateOrUpdate.properties.registries.variants.TypeSpec.Array` | `models.tsp:6596` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.scaleUnitConfiguration.variants.Microsoft.MachineLearningServices.ScaleUnitConfigurationCreateOrUpdate.properties.registries.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.scaleUnitConfiguration.variants.Microsoft.MachineLearningServices.ScaleUnitConfigurationCreateOrUpdate.properties.registries.variants.TypeSpec.Array` | `InferencePool.tsp:79` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.scaleUnitConfiguration.variants.Microsoft.MachineLearningServices.ScaleUnitConfigurationCreateOrUpdate.properties.registries.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.environmentConfiguration.variants.Microsoft.MachineLearningServices.GroupEnvironmentConfigurationCreateOrUpdate.properties.environmentVariables.variants.TypeSpec.Array` | `models.tsp:6786` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.environmentConfiguration.variants.Microsoft.MachineLearningServices.GroupEnvironmentConfigurationCreateOrUpdate.properties.environmentVariables.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.environmentConfiguration.variants.Microsoft.MachineLearningServices.GroupEnvironmentConfigurationCreateOrUpdate.properties.environmentVariables.variants.TypeSpec.Array` | `InferenceGroup.tsp:124` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.environmentConfiguration.variants.Microsoft.MachineLearningServices.GroupEnvironmentConfigurationCreateOrUpdate.properties.environmentVariables.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.environmentVariables.variants.TypeSpec.Record` | `models.tsp:11837` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.environmentVariables.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.environmentVariables.variants.TypeSpec.Record` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.environmentVariables.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.resources.properties.dockerArgsList.variants.TypeSpec.Array` | `models.tsp:11914` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.resources.properties.dockerArgsList.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.resources.properties.dockerArgsList.variants.TypeSpec.Array` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.resources.properties.dockerArgsList.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.cvSplitColumnNames.variants.TypeSpec.Array` | `models.tsp:12758` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.cvSplitColumnNames.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.cvSplitColumnNames.variants.TypeSpec.Array` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.cvSplitColumnNames.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.blockedTransformers.variants.TypeSpec.Array` | `models.tsp:12823` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.blockedTransformers.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.blockedTransformers.variants.TypeSpec.Array` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.blockedTransformers.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.columnNameAndTypes.variants.TypeSpec.Record` | `models.tsp:12830` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.columnNameAndTypes.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.columnNameAndTypes.variants.TypeSpec.Record` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.columnNameAndTypes.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ClassificationTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array` | `models.tsp:12677` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ClassificationTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ClassificationTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ClassificationTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ClassificationTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array` | `models.tsp:12683` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ClassificationTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ClassificationTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ClassificationTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.forecastingSettings.variants.Microsoft.MachineLearningServices.ForecastingSettingsCreateOrUpdate.properties.timeSeriesIdColumnNames.variants.TypeSpec.Array` | `models.tsp:14020` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.forecastingSettings.variants.Microsoft.MachineLearningServices.ForecastingSettingsCreateOrUpdate.properties.timeSeriesIdColumnNames.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.forecastingSettings.variants.Microsoft.MachineLearningServices.ForecastingSettingsCreateOrUpdate.properties.timeSeriesIdColumnNames.variants.TypeSpec.Array` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.forecastingSettings.variants.Microsoft.MachineLearningServices.ForecastingSettingsCreateOrUpdate.properties.timeSeriesIdColumnNames.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ForecastingTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array` | `models.tsp:14037` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ForecastingTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ForecastingTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ForecastingTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ForecastingTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array` | `models.tsp:14043` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ForecastingTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ForecastingTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ForecastingTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Regression.properties.trainingSettings.variants.Microsoft.MachineLearningServices.RegressionTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array` | `models.tsp:15614` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Regression.properties.trainingSettings.variants.Microsoft.MachineLearningServices.RegressionTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Regression.properties.trainingSettings.variants.Microsoft.MachineLearningServices.RegressionTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Regression.properties.trainingSettings.variants.Microsoft.MachineLearningServices.RegressionTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Regression.properties.trainingSettings.variants.Microsoft.MachineLearningServices.RegressionTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array` | `models.tsp:15620` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Regression.properties.trainingSettings.variants.Microsoft.MachineLearningServices.RegressionTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Regression.properties.trainingSettings.variants.Microsoft.MachineLearningServices.RegressionTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Regression.properties.trainingSettings.variants.Microsoft.MachineLearningServices.RegressionTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Command.properties.environmentVariables.variants.TypeSpec.Record` | `models.tsp:12961` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Command.properties.environmentVariables.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Command.properties.environmentVariables.variants.TypeSpec.Record` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Command.properties.environmentVariables.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Distillation.properties.finetuningDetails.properties.hyperParameters.variants.TypeSpec.Record` | `models.tsp:13734` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Distillation.properties.finetuningDetails.properties.hyperParameters.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Distillation.properties.finetuningDetails.properties.hyperParameters.variants.TypeSpec.Record` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Distillation.properties.finetuningDetails.properties.hyperParameters.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.FineTuning.properties.fineTuningDetails.variants.Custom.properties.hyperParameters.variants.TypeSpec.Record` | `models.tsp:13277` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.FineTuning.properties.fineTuningDetails.variants.Custom.properties.hyperParameters.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.FineTuning.properties.fineTuningDetails.variants.Custom.properties.hyperParameters.variants.TypeSpec.Record` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.FineTuning.properties.fineTuningDetails.variants.Custom.properties.hyperParameters.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Pipeline.properties.jobs.variants.TypeSpec.Record` | `models.tsp:15421` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Pipeline.properties.jobs.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Pipeline.properties.jobs.variants.TypeSpec.Record` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Pipeline.properties.jobs.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.archives.variants.TypeSpec.Array` | `models.tsp:15785` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Spark.properties.archives.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.archives.variants.TypeSpec.Array` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Spark.properties.archives.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.conf.variants.TypeSpec.Record` | `models.tsp:15808` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Spark.properties.conf.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.conf.variants.TypeSpec.Record` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Spark.properties.conf.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.environmentVariables.variants.TypeSpec.Record` | `models.tsp:15829` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Spark.properties.environmentVariables.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.environmentVariables.variants.TypeSpec.Record` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Spark.properties.environmentVariables.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.files.variants.TypeSpec.Array` | `models.tsp:15836` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Spark.properties.files.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.files.variants.TypeSpec.Array` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Spark.properties.files.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.jars.variants.TypeSpec.Array` | `models.tsp:15851` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Spark.properties.jars.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.jars.variants.TypeSpec.Array` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Spark.properties.jars.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.pyFiles.variants.TypeSpec.Array` | `models.tsp:15866` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Spark.properties.pyFiles.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.pyFiles.variants.TypeSpec.Array` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Spark.properties.pyFiles.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Sweep.properties.trial.properties.environmentVariables.variants.TypeSpec.Record` | `models.tsp:16113` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Sweep.properties.trial.properties.environmentVariables.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Sweep.properties.trial.properties.environmentVariables.variants.TypeSpec.Record` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Sweep.properties.trial.properties.environmentVariables.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.alertNotificationSettings.variants.Microsoft.MachineLearningServices.MonitorNotificationSettingsCreateOrUpdate.properties.emailNotificationSettings.variants.Microsoft.MachineLearningServices.MonitorEmailNotificationSettingsCreateOrUpdate.properties.emails.variants.TypeSpec.Array` | `models.tsp:13151` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.alertNotificationSettings.variants.Microsoft.MachineLearningServices.MonitorNotificationSettingsCreateOrUpdate.properties.emailNotificationSettings.variants.Microsoft.MachineLearningServices.MonitorEmailNotificationSettingsCreateOrUpdate.properties.emails.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.alertNotificationSettings.variants.Microsoft.MachineLearningServices.MonitorNotificationSettingsCreateOrUpdate.properties.emailNotificationSettings.variants.Microsoft.MachineLearningServices.MonitorEmailNotificationSettingsCreateOrUpdate.properties.emails.variants.TypeSpec.Array` | `Schedule.tsp:57` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.alertNotificationSettings.variants.Microsoft.MachineLearningServices.MonitorNotificationSettingsCreateOrUpdate.properties.emailNotificationSettings.variants.Microsoft.MachineLearningServices.MonitorEmailNotificationSettingsCreateOrUpdate.properties.emails.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.DataDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record` | `models.tsp:13448` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.DataDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.DataDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record` | `Schedule.tsp:57` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.DataDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.DataQuality.properties.featureDataTypeOverride.variants.TypeSpec.Record` | `models.tsp:13618` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.DataQuality.properties.featureDataTypeOverride.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.DataQuality.properties.featureDataTypeOverride.variants.TypeSpec.Record` | `Schedule.tsp:57` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.DataQuality.properties.featureDataTypeOverride.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.FeatureAttributionDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record` | `models.tsp:13798` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.FeatureAttributionDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.FeatureAttributionDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record` | `Schedule.tsp:57` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.FeatureAttributionDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.PredictionDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record` | `models.tsp:15459` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.PredictionDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.PredictionDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record` | `Schedule.tsp:57` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.PredictionDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AKS.properties.properties.systemServices.variants.TypeSpec.Array` | `models.tsp:10037` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.AKS.properties.properties.systemServices.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AKS.properties.properties.systemServices.variants.TypeSpec.Array` | `ComputeResource.tsp:61` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.AKS.properties.properties.systemServices.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AmlCompute.properties.properties.errors.variants.TypeSpec.Array` | `models.tsp:10357` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.AmlCompute.properties.properties.errors.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AmlCompute.properties.properties.errors.variants.TypeSpec.Array` | `ComputeResource.tsp:61` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.AmlCompute.properties.properties.errors.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.customServices.variants.TypeSpec.Array` | `models.tsp:10549` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.customServices.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.customServices.variants.TypeSpec.Array` | `ComputeResource.tsp:61` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.customServices.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.osImageMetadata.properties.osPatchingStatus.properties.osPatchingErrors.variants.TypeSpec.Array` | `models.tsp:10831` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.osImageMetadata.properties.osPatchingStatus.properties.osPatchingErrors.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.osImageMetadata.properties.osPatchingStatus.properties.osPatchingErrors.variants.TypeSpec.Array` | `ComputeResource.tsp:61` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.osImageMetadata.properties.osPatchingStatus.properties.osPatchingErrors.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedules.properties.computeStartStop.properties.recurrence.properties.schedule.properties.monthDays.variants.TypeSpec.Array` | `models.tsp:11103` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedules.properties.computeStartStop.properties.recurrence.properties.schedule.properties.monthDays.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedules.properties.computeStartStop.properties.recurrence.properties.schedule.properties.monthDays.variants.TypeSpec.Array` | `ComputeResource.tsp:61` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedules.properties.computeStartStop.properties.recurrence.properties.schedule.properties.monthDays.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.containers.variants.TypeSpec.Array` | `models.tsp:10702` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.containers.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.containers.variants.TypeSpec.Array` | `ComputeResource.tsp:61` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.containers.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.dataDisks.variants.TypeSpec.Array` | `models.tsp:10709` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.dataDisks.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.dataDisks.variants.TypeSpec.Array` | `ComputeResource.tsp:61` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.dataDisks.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.dataMounts.variants.TypeSpec.Array` | `models.tsp:10716` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.dataMounts.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.dataMounts.variants.TypeSpec.Array` | `ComputeResource.tsp:61` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.dataMounts.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.customServices.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:10549` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.ComputeInstance.properties.properties.customServices.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.customServices.variants.TypeSpec.ArrayCreateOrUpdate` | `ComputeResource.tsp:68` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.ComputeInstance.properties.properties.customServices.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedulesCreateOrUpdate.properties.computeStartStop.properties.recurrence.properties.schedule.properties.monthDays.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:11103` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedulesCreateOrUpdate.properties.computeStartStop.properties.recurrence.properties.schedule.properties.monthDays.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedulesCreateOrUpdate.properties.computeStartStop.properties.recurrence.properties.schedule.properties.monthDays.variants.TypeSpec.ArrayCreateOrUpdate` | `ComputeResource.tsp:68` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedulesCreateOrUpdate.properties.computeStartStop.properties.recurrence.properties.schedule.properties.monthDays.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.docker.variants.Microsoft.MachineLearningServices.DockerCreate` | `models.tsp:4358` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.docker.variants.Microsoft.MachineLearningServices.DockerCreate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.docker.variants.Microsoft.MachineLearningServices.DockerCreate` | `ComputeResource.tsp:136` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.docker.variants.Microsoft.MachineLearningServices.DockerCreate" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.Record` | `models.tsp:8621` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.Record` | `Workspace.tsp:56` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.Record" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.RecordCreateOrUpdate` | `models.tsp:8621` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.RecordCreateOrUpdate` | `Workspace.tsp:63` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.RecordUpdate` | `models.tsp:8621` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.RecordUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.RecordUpdate` | `Workspace.tsp:76` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.RecordUpdate" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.Array` | `models.tsp:7840` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.Array` | `Registry.tsp:41` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.regionDetails.variants.TypeSpec.Array` | `models.tsp:7854` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.regionDetails.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.regionDetails.variants.TypeSpec.Array` | `Registry.tsp:41` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.regionDetails.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:7840` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.ArrayCreateOrUpdate` | `Registry.tsp:47` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.regionDetails.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:7854` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.regionDetails.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.regionDetails.variants.TypeSpec.ArrayCreateOrUpdate` | `Registry.tsp:47` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.regionDetails.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.ArrayCreate` | `models.tsp:7840` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.ArrayCreate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.ArrayCreate` | `Registry.tsp:113` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.ArrayCreate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.regionDetails.variants.TypeSpec.ArrayCreate` | `models.tsp:7854` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.regionDetails.variants.TypeSpec.ArrayCreate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.regionDetails.variants.TypeSpec.ArrayCreate` | `Registry.tsp:113` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.regionDetails.variants.TypeSpec.ArrayCreate" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.imageDetails.properties.vulnerabilityFindings.variants.Microsoft.MachineLearningServices.VulnerabilityFindings.properties.data.variants.TypeSpec.Array` | `models.tsp:5328` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.imageDetails.properties.vulnerabilityFindings.variants.Microsoft.MachineLearningServices.VulnerabilityFindings.properties.data.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.imageDetails.properties.vulnerabilityFindings.variants.Microsoft.MachineLearningServices.VulnerabilityFindings.properties.data.variants.TypeSpec.Array` | `EnvironmentVersion.tsp:70` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.imageDetails.properties.vulnerabilityFindings.variants.Microsoft.MachineLearningServices.VulnerabilityFindings.properties.data.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.imageDetails.properties.vulnerabilityFindings.variants.Microsoft.MachineLearningServices.VulnerabilityFindingsCreateOrUpdate.properties.data.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5328` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.imageDetails.properties.vulnerabilityFindings.variants.Microsoft.MachineLearningServices.VulnerabilityFindingsCreateOrUpdate.properties.data.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.imageDetails.properties.vulnerabilityFindings.variants.Microsoft.MachineLearningServices.VulnerabilityFindingsCreateOrUpdate.properties.data.variants.TypeSpec.ArrayCreateOrUpdate` | `EnvironmentVersion.tsp:77` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.imageDetails.properties.vulnerabilityFindings.variants.Microsoft.MachineLearningServices.VulnerabilityFindingsCreateOrUpdate.properties.data.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.flavors.variants.TypeSpec.Record` | `models.tsp:5549` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.flavors.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.flavors.variants.TypeSpec.Record` | `ModelVersion.tsp:70` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.flavors.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.datasets.variants.TypeSpec.Array` | `models.tsp:5585` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.datasets.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.datasets.variants.TypeSpec.Array` | `ModelVersion.tsp:70` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.datasets.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.flavors.variants.TypeSpec.RecordCreateOrUpdate` | `models.tsp:5549` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.flavors.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.flavors.variants.TypeSpec.RecordCreateOrUpdate` | `ModelVersion.tsp:77` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.flavors.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.datasets.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5585` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.datasets.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.datasets.variants.TypeSpec.ArrayCreateOrUpdate` | `ModelVersion.tsp:77` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.datasets.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.messages.variants.TypeSpec.Array` | `models.tsp:6055` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.messages.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.messages.variants.TypeSpec.Array` | `CapabilityHost.tsp:36` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.messages.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettings.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSetting.properties.webhooks.variants.TypeSpec.Record` | `models.tsp:6287` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettings.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSetting.properties.webhooks.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettings.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSetting.properties.webhooks.variants.TypeSpec.Record` | `FeaturesetVersion.tsp:92` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettings.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSetting.properties.webhooks.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettings.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTrigger.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceSchedule.properties.monthDays.variants.TypeSpec.Array` | `models.tsp:6360` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettings.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTrigger.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceSchedule.properties.monthDays.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettings.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTrigger.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceSchedule.properties.monthDays.variants.TypeSpec.Array` | `FeaturesetVersion.tsp:92` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettings.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTrigger.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceSchedule.properties.monthDays.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.webhooks.variants.TypeSpec.RecordCreateOrUpdate` | `models.tsp:6287` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.webhooks.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.webhooks.variants.TypeSpec.RecordCreateOrUpdate` | `FeaturesetVersion.tsp:99` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.webhooks.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTriggerCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceScheduleCreateOrUpdate.properties.monthDays.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:6360` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTriggerCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceScheduleCreateOrUpdate.properties.monthDays.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTriggerCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceScheduleCreateOrUpdate.properties.monthDays.variants.TypeSpec.ArrayCreateOrUpdate` | `FeaturesetVersion.tsp:99` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTriggerCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceScheduleCreateOrUpdate.properties.monthDays.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.jobIds.variants.TypeSpec.Array` | `models.tsp:6492` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.jobIds.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.jobIds.variants.TypeSpec.Array` | `FeaturesetVersion.tsp:149` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.jobIds.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.indexColumns.variants.TypeSpec.Array` | `models.tsp:6528` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.indexColumns.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.indexColumns.variants.TypeSpec.Array` | `FeaturestoreEntityVersion.tsp:92` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.indexColumns.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.indexColumns.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:6528` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.indexColumns.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.indexColumns.variants.TypeSpec.ArrayCreateOrUpdate` | `FeaturestoreEntityVersion.tsp:99` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.indexColumns.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.deltaModels.variants.TypeSpec.Array` | `models.tsp:6868` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.deltaModels.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.deltaModels.variants.TypeSpec.Array` | `InferenceGroup.tsp:224` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.deltaModels.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.deltaModels.variants.TypeSpec.Record` | `models.tsp:6891` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.deltaModels.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.deltaModels.variants.TypeSpec.Record` | `InferenceGroup.tsp:224` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.deltaModels.variants.TypeSpec.Record" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.addDeltaModels.variants.TypeSpec.Array` | `models.tsp:6981` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.addDeltaModels.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.addDeltaModels.variants.TypeSpec.Array` | `InferenceGroup.tsp:247` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.addDeltaModels.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.removeDeltaModels.variants.TypeSpec.Array` | `models.tsp:6989` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.removeDeltaModels.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.removeDeltaModels.variants.TypeSpec.Array` | `InferenceGroup.tsp:247` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.removeDeltaModels.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.outputs.variants.TypeSpec.Record` | `models.tsp:11845` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.AutoML.properties.outputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.outputs.variants.TypeSpec.Record` | `JobBase.tsp:33` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.AutoML.properties.outputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettings.properties.transformerParams.variants.TypeSpec.Record` | `models.tsp:12848` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettings.properties.transformerParams.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettings.properties.transformerParams.variants.TypeSpec.Record` | `JobBase.tsp:33` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettings.properties.transformerParams.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageClassification.properties.searchSpace.variants.TypeSpec.Array` | `models.tsp:14087` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageClassification.properties.searchSpace.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageClassification.properties.searchSpace.variants.TypeSpec.Array` | `JobBase.tsp:33` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageClassification.properties.searchSpace.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageInstanceSegmentation.properties.searchSpace.variants.TypeSpec.Array` | `models.tsp:14701` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageInstanceSegmentation.properties.searchSpace.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageInstanceSegmentation.properties.searchSpace.variants.TypeSpec.Array` | `JobBase.tsp:33` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageInstanceSegmentation.properties.searchSpace.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Command.properties.inputs.variants.TypeSpec.Record` | `models.tsp:12969` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.Command.properties.inputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Command.properties.inputs.variants.TypeSpec.Record` | `JobBase.tsp:33` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.Command.properties.inputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Command.properties.outputs.variants.TypeSpec.Record` | `models.tsp:12984` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.Command.properties.outputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Command.properties.outputs.variants.TypeSpec.Record` | `JobBase.tsp:33` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.Command.properties.outputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Pipeline.properties.inputs.variants.TypeSpec.Record` | `models.tsp:15413` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.Pipeline.properties.inputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Pipeline.properties.inputs.variants.TypeSpec.Record` | `JobBase.tsp:33` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.Pipeline.properties.inputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Pipeline.properties.outputs.variants.TypeSpec.Record` | `models.tsp:15429` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.Pipeline.properties.outputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Pipeline.properties.outputs.variants.TypeSpec.Record` | `JobBase.tsp:33` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.Pipeline.properties.outputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.inputs.variants.TypeSpec.Record` | `models.tsp:15844` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.Spark.properties.inputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.inputs.variants.TypeSpec.Record` | `JobBase.tsp:33` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.Spark.properties.inputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.outputs.variants.TypeSpec.Record` | `models.tsp:15859` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.Spark.properties.outputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.outputs.variants.TypeSpec.Record` | `JobBase.tsp:33` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.Spark.properties.outputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Sweep.properties.inputs.variants.TypeSpec.Record` | `models.tsp:15995` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.Sweep.properties.inputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Sweep.properties.inputs.variants.TypeSpec.Record` | `JobBase.tsp:33` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.Sweep.properties.inputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Sweep.properties.outputs.variants.TypeSpec.Record` | `models.tsp:16014` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.Sweep.properties.outputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Sweep.properties.outputs.variants.TypeSpec.Record` | `JobBase.tsp:33` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.Sweep.properties.outputs.variants.TypeSpec.Record" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate` | `models.tsp:11845` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.transformerParams.variants.TypeSpec.RecordCreateOrUpdate` | `models.tsp:12848` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.transformerParams.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.transformerParams.variants.TypeSpec.RecordCreateOrUpdate` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.transformerParams.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageClassification.properties.searchSpace.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:14087` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageClassification.properties.searchSpace.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageClassification.properties.searchSpace.variants.TypeSpec.ArrayCreateOrUpdate` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageClassification.properties.searchSpace.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageInstanceSegmentation.properties.searchSpace.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:14701` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageInstanceSegmentation.properties.searchSpace.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageInstanceSegmentation.properties.searchSpace.variants.TypeSpec.ArrayCreateOrUpdate` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageInstanceSegmentation.properties.searchSpace.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Command.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate` | `models.tsp:12969` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.Command.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Command.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.Command.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Command.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate` | `models.tsp:12984` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.Command.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Command.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.Command.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Pipeline.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate` | `models.tsp:15413` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.Pipeline.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Pipeline.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.Pipeline.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Pipeline.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate` | `models.tsp:15429` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.Pipeline.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Pipeline.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.Pipeline.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate` | `models.tsp:15844` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.Spark.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.Spark.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate` | `models.tsp:15859` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.Spark.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Spark.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.Spark.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Sweep.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate` | `models.tsp:15995` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.Sweep.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Sweep.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.Sweep.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Sweep.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate` | `models.tsp:16014` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.Sweep.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.variants.Sweep.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate` | `JobBase.tsp:40` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.Sweep.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.mirrorTraffic.variants.TypeSpec.Record` | `models.tsp:7373` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.mirrorTraffic.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.mirrorTraffic.variants.TypeSpec.Record` | `OnlineEndpoint.tsp:43` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.mirrorTraffic.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.traffic.variants.TypeSpec.Record` | `models.tsp:7391` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.traffic.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.traffic.variants.TypeSpec.Record` | `OnlineEndpoint.tsp:43` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.traffic.variants.TypeSpec.Record" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.mirrorTraffic.variants.TypeSpec.RecordCreateOrUpdate` | `models.tsp:7373` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.mirrorTraffic.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.mirrorTraffic.variants.TypeSpec.RecordCreateOrUpdate` | `OnlineEndpoint.tsp:50` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.mirrorTraffic.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.traffic.variants.TypeSpec.RecordCreateOrUpdate` | `models.tsp:7391` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.traffic.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.traffic.variants.TypeSpec.RecordCreateOrUpdate` | `OnlineEndpoint.tsp:50` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.traffic.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnion.variants.Custom.properties.inputAssets.variants.TypeSpec.Record` | `models.tsp:13321` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnion.variants.Custom.properties.inputAssets.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnion.variants.Custom.properties.inputAssets.variants.TypeSpec.Record` | `Schedule.tsp:50` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnion.variants.Custom.properties.inputAssets.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnion.variants.Custom.properties.inputs.variants.TypeSpec.Record` | `models.tsp:13329` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnion.variants.Custom.properties.inputs.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnion.variants.Custom.properties.inputs.variants.TypeSpec.Record` | `Schedule.tsp:50` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnion.variants.Custom.properties.inputs.variants.TypeSpec.Record" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.Custom.properties.inputAssets.variants.TypeSpec.RecordCreateOrUpdate` | `models.tsp:13321` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.Custom.properties.inputAssets.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.Custom.properties.inputAssets.variants.TypeSpec.RecordCreateOrUpdate` | `Schedule.tsp:57` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.Custom.properties.inputAssets.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.Custom.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate` | `models.tsp:13329` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.Custom.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.Custom.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate` | `Schedule.tsp:57` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.Custom.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.inferenceEndpoint.variants.Microsoft.MachineLearningServices.ServerlessInferenceEndpoint.properties.headers.variants.TypeSpec.Record` | `models.tsp:7776` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.inferenceEndpoint.variants.Microsoft.MachineLearningServices.ServerlessInferenceEndpoint.properties.headers.variants.TypeSpec.Record" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.inferenceEndpoint.variants.Microsoft.MachineLearningServices.ServerlessInferenceEndpoint.properties.headers.variants.TypeSpec.Record` | `ServerlessEndpoint.tsp:43` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.inferenceEndpoint.variants.Microsoft.MachineLearningServices.ServerlessInferenceEndpoint.properties.headers.variants.TypeSpec.Record" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate` | `models.tsp:8621` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate` | `ManagedNetworkSettingsPropertiesBasicResource.tsp:103` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.value.properties.usageDetails.variants.TypeSpec.Array` | `models.tsp:4773` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.value.properties.usageDetails.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.value.properties.usageDetails.variants.TypeSpec.Array` | `routes.tsp:133` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.properties.usageDetails.variants.TypeSpec.Array" })` |

<details>
<summary>Suppression examples</summary>

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Kubernetes.properties.properties.instanceTypes.properties.nodeSelector.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Kubernetes.properties.properties.instanceTypes.properties.nodeSelector.variants.TypeSpec.Record" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedulesCreateOrUpdate.properties.computeStartStop.properties.recurrence.properties.schedule.properties.weekDays.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedulesCreateOrUpdate.properties.computeStartStop.properties.recurrence.properties.schedule.properties.weekDays.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.tags.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.tags.variants.TypeSpec.Record" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.managedResourceGroupSettings.variants.Microsoft.MachineLearningServices.ManagedResourceGroupSettingsCreateOrUpdate.properties.assignedIdentities.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<Registry>;
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.managedResourceGroupSettings.variants.Microsoft.MachineLearningServices.ManagedResourceGroupSettingsCreateOrUpdate.properties.assignedIdentities.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.mltable.properties.referencedUris.variants.TypeSpec.Array" })
  createOrUpdate is DataVersionWithNamePatternBaseOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.mltable.properties.referencedUris.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.deploymentConfiguration.variants.BatchDeploymentConfigurationUnionCreateOrUpdate.variants.PipelineComponent.properties.settings.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.deploymentConfiguration.variants.BatchDeploymentConfigurationUnionCreateOrUpdate.variants.PipelineComponent.properties.settings.variants.TypeSpec.Record" })
  
```

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.deploymentConfiguration.variants.BatchDeploymentConfigurationUnionCreateOrUpdate.variants.PipelineComponent.properties.tags.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.deploymentConfiguration.variants.BatchDeploymentConfigurationUnionCreateOrUpdate.variants.PipelineComponent.properties.tags.variants.TypeSpec.Record" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.acaEnvironmentConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.acaEnvironmentConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.entities.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.entities.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.emailOn.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.emailOn.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.emails.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.emails.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTriggerCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceScheduleCreateOrUpdate.properties.weekDays.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTriggerCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceScheduleCreateOrUpdate.properties.weekDays.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.sparkConfiguration.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.sparkConfiguration.variants.TypeSpec.Record" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.scaleUnitConfiguration.variants.Microsoft.MachineLearningServices.ScaleUnitConfigurationCreateOrUpdate.properties.registries.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.scaleUnitConfiguration.variants.Microsoft.MachineLearningServices.ScaleUnitConfigurationCreateOrUpdate.properties.registries.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.environmentConfiguration.variants.Microsoft.MachineLearningServices.GroupEnvironmentConfigurationCreateOrUpdate.properties.environmentVariables.variants.TypeSpec.Array" })
  createOrUpdate is InferenceGroupOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.environmentConfiguration.variants.Microsoft.MachineLearningServices.GroupEnvironmentConfigurationCreateOrUpdate.properties.environmentVariables.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.environmentVariables.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.environmentVariables.variants.TypeSpec.Record" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.resources.properties.dockerArgsList.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.resources.properties.dockerArgsList.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.cvSplitColumnNames.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.cvSplitColumnNames.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.blockedTransformers.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.blockedTransformers.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.columnNameAndTypes.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.columnNameAndTypes.variants.TypeSpec.Record" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ClassificationTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ClassificationTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ClassificationTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ClassificationTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.forecastingSettings.variants.Microsoft.MachineLearningServices.ForecastingSettingsCreateOrUpdate.properties.timeSeriesIdColumnNames.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.forecastingSettings.variants.Microsoft.MachineLearningServices.ForecastingSettingsCreateOrUpdate.properties.timeSeriesIdColumnNames.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ForecastingTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ForecastingTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ForecastingTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Forecasting.properties.trainingSettings.variants.Microsoft.MachineLearningServices.ForecastingTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Regression.properties.trainingSettings.variants.Microsoft.MachineLearningServices.RegressionTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Regression.properties.trainingSettings.variants.Microsoft.MachineLearningServices.RegressionTrainingSettingsCreateOrUpdate.properties.allowedTrainingAlgorithms.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Regression.properties.trainingSettings.variants.Microsoft.MachineLearningServices.RegressionTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Regression.properties.trainingSettings.variants.Microsoft.MachineLearningServices.RegressionTrainingSettingsCreateOrUpdate.properties.blockedTrainingAlgorithms.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Command.properties.environmentVariables.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Command.properties.environmentVariables.variants.TypeSpec.Record" })
  
```

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Distillation.properties.finetuningDetails.properties.hyperParameters.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Distillation.properties.finetuningDetails.properties.hyperParameters.variants.TypeSpec.Record" })
  
```

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.FineTuning.properties.fineTuningDetails.variants.Custom.properties.hyperParameters.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.FineTuning.properties.fineTuningDetails.variants.Custom.properties.hyperParameters.variants.TypeSpec.Record" })
  
```

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Pipeline.properties.jobs.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Pipeline.properties.jobs.variants.TypeSpec.Record" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Spark.properties.archives.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Spark.properties.archives.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Spark.properties.conf.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Spark.properties.conf.variants.TypeSpec.Record" })
  
```

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Spark.properties.environmentVariables.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Spark.properties.environmentVariables.variants.TypeSpec.Record" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Spark.properties.files.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Spark.properties.files.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Spark.properties.jars.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Spark.properties.jars.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Spark.properties.pyFiles.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Spark.properties.pyFiles.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.variants.Sweep.properties.trial.properties.environmentVariables.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.variants.Sweep.properties.trial.properties.environmentVariables.variants.TypeSpec.Record" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.alertNotificationSettings.variants.Microsoft.MachineLearningServices.MonitorNotificationSettingsCreateOrUpdate.properties.emailNotificationSettings.variants.Microsoft.MachineLearningServices.MonitorEmailNotificationSettingsCreateOrUpdate.properties.emails.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.alertNotificationSettings.variants.Microsoft.MachineLearningServices.MonitorNotificationSettingsCreateOrUpdate.properties.emailNotificationSettings.variants.Microsoft.MachineLearningServices.MonitorEmailNotificationSettingsCreateOrUpdate.properties.emails.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.DataDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.DataDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record" })
  
```

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.DataQuality.properties.featureDataTypeOverride.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.DataQuality.properties.featureDataTypeOverride.variants.TypeSpec.Record" })
  
```

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.FeatureAttributionDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.FeatureAttributionDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record" })
  
```

**ResourcePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.PredictionDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.PredictionDrift.properties.featureDataTypeOverride.variants.TypeSpec.Record" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.AKS.properties.properties.systemServices.variants.TypeSpec.Array" })
  get is ArmResourceRead<ComputeResource>;
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.AKS.properties.properties.systemServices.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.AmlCompute.properties.properties.errors.variants.TypeSpec.Array" })
  get is ArmResourceRead<ComputeResource>;
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.AmlCompute.properties.properties.errors.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.customServices.variants.TypeSpec.Array" })
  get is ArmResourceRead<ComputeResource>;
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.customServices.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.osImageMetadata.properties.osPatchingStatus.properties.osPatchingErrors.variants.TypeSpec.Array" })
  get is ArmResourceRead<ComputeResource>;
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.osImageMetadata.properties.osPatchingStatus.properties.osPatchingErrors.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedules.properties.computeStartStop.properties.recurrence.properties.schedule.properties.monthDays.variants.TypeSpec.Array" })
  get is ArmResourceRead<ComputeResource>;
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedules.properties.computeStartStop.properties.recurrence.properties.schedule.properties.monthDays.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.containers.variants.TypeSpec.Array" })
  get is ArmResourceRead<ComputeResource>;
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.containers.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.dataDisks.variants.TypeSpec.Array" })
  get is ArmResourceRead<ComputeResource>;
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.dataDisks.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.dataMounts.variants.TypeSpec.Array" })
  get is ArmResourceRead<ComputeResource>;
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.ComputeInstance.properties.properties.dataMounts.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.ComputeInstance.properties.properties.customServices.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeWidened (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.ComputeInstance.properties.properties.customServices.variants.TypeSpec.ArrayCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedulesCreateOrUpdate.properties.computeStartStop.properties.recurrence.properties.schedule.properties.monthDays.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeWidened (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.ComputeInstance.properties.properties.schedules.variants.Microsoft.MachineLearningServices.ComputeSchedulesCreateOrUpdate.properties.computeStartStop.properties.recurrence.properties.schedule.properties.monthDays.variants.TypeSpec.ArrayCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (DockerCreate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.docker.variants.Microsoft.MachineLearningServices.DockerCreate" })
  updateCustomServices is ArmResourceActionSync<
```

**RequestPropertyTypeWidened (DockerCreate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.docker.variants.Microsoft.MachineLearningServices.DockerCreate" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.Record" })
  get is ArmResourceRead<Workspace>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.Record" })
  
```

**RequestPropertyTypeNarrowed (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.RecordCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeWidened (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.RecordCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (RecordUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.RecordUpdate" })
  update is ArmCustomPatchAsync<
```

**RequestPropertyTypeWidened (RecordUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.managedNetwork.properties.outboundRules.variants.TypeSpec.RecordUpdate" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.Array" })
  get is ArmResourceRead<Registry>;
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.regionDetails.variants.TypeSpec.Array" })
  get is ArmResourceRead<Registry>;
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.regionDetails.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<Registry>;
```

**RequestPropertyTypeWidened (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.ArrayCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.regionDetails.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<Registry>;
```

**RequestPropertyTypeWidened (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.regionDetails.variants.TypeSpec.ArrayCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.ArrayCreate" })
  removeRegions is ArmResourceActionAsyncBase<
```

**RequestPropertyTypeWidened (ArrayCreate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.registryPrivateEndpointConnections.variants.TypeSpec.ArrayCreate" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.regionDetails.variants.TypeSpec.ArrayCreate" })
  removeRegions is ArmResourceActionAsyncBase<
```

**RequestPropertyTypeWidened (ArrayCreate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.regionDetails.variants.TypeSpec.ArrayCreate" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.imageDetails.properties.vulnerabilityFindings.variants.Microsoft.MachineLearningServices.VulnerabilityFindings.properties.data.variants.TypeSpec.Array" })
  get is EnvironmentVersionOps.Read<EnvironmentVersion>;
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.imageDetails.properties.vulnerabilityFindings.variants.Microsoft.MachineLearningServices.VulnerabilityFindings.properties.data.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.imageDetails.properties.vulnerabilityFindings.variants.Microsoft.MachineLearningServices.VulnerabilityFindingsCreateOrUpdate.properties.data.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is EnvironmentVersionOps.CreateOrUpdateAsync<
```

**RequestPropertyTypeWidened (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.imageDetails.properties.vulnerabilityFindings.variants.Microsoft.MachineLearningServices.VulnerabilityFindingsCreateOrUpdate.properties.data.variants.TypeSpec.ArrayCreateOrUpdate" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.flavors.variants.TypeSpec.Record" })
  get is ModelVersionOps.Read<ModelVersion>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.flavors.variants.TypeSpec.Record" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.datasets.variants.TypeSpec.Array" })
  get is ModelVersionOps.Read<ModelVersion>;
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.datasets.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.flavors.variants.TypeSpec.RecordCreateOrUpdate" })
  createOrUpdate is ModelVersionOps.CreateOrUpdateAsync<
```

**RequestPropertyTypeWidened (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.flavors.variants.TypeSpec.RecordCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.datasets.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ModelVersionOps.CreateOrUpdateAsync<
```

**RequestPropertyTypeWidened (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.datasets.variants.TypeSpec.ArrayCreateOrUpdate" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.messages.variants.TypeSpec.Array" })
  get is ArmResourceRead<CapabilityHost>;
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.messages.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettings.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSetting.properties.webhooks.variants.TypeSpec.Record" })
  get is ArmResourceRead<FeaturesetVersion>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettings.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSetting.properties.webhooks.variants.TypeSpec.Record" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettings.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTrigger.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceSchedule.properties.monthDays.variants.TypeSpec.Array" })
  get is ArmResourceRead<FeaturesetVersion>;
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettings.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTrigger.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceSchedule.properties.monthDays.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.webhooks.variants.TypeSpec.RecordCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeWidened (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.notification.variants.Microsoft.MachineLearningServices.NotificationSettingCreateOrUpdate.properties.webhooks.variants.TypeSpec.RecordCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTriggerCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceScheduleCreateOrUpdate.properties.monthDays.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeWidened (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.materializationSettings.variants.Microsoft.MachineLearningServices.MaterializationSettingsCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceTriggerCreateOrUpdate.properties.schedule.variants.Microsoft.MachineLearningServices.RecurrenceScheduleCreateOrUpdate.properties.monthDays.variants.TypeSpec.ArrayCreateOrUpdate" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.jobIds.variants.TypeSpec.Array" })
  backfill is ArmResourceActionAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.jobIds.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.indexColumns.variants.TypeSpec.Array" })
  get is ArmResourceRead<FeaturestoreEntityVersion>;
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.indexColumns.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.indexColumns.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeWidened (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.indexColumns.variants.TypeSpec.ArrayCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.deltaModels.variants.TypeSpec.Array" })
  getDeltaModelsStatusAsync is InferenceGroupOps.ActionSync<
```

**RequestPropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.deltaModels.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.deltaModels.variants.TypeSpec.Record" })
  getDeltaModelsStatusAsync is InferenceGroupOps.ActionSync<
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.deltaModels.variants.TypeSpec.Record" })
  
```

**RequestPropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.addDeltaModels.variants.TypeSpec.Array" })
  modifyDeltaModelsAsync is InferenceGroupOps.ActionSync<
```

**RequestPropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.addDeltaModels.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.removeDeltaModels.variants.TypeSpec.Array" })
  modifyDeltaModelsAsync is InferenceGroupOps.ActionSync<
```

**RequestPropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.removeDeltaModels.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.AutoML.properties.outputs.variants.TypeSpec.Record" })
  get is ArmResourceRead<JobBase>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.AutoML.properties.outputs.variants.TypeSpec.Record" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettings.properties.transformerParams.variants.TypeSpec.Record" })
  get is ArmResourceRead<JobBase>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettings.properties.transformerParams.variants.TypeSpec.Record" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageClassification.properties.searchSpace.variants.TypeSpec.Array" })
  get is ArmResourceRead<JobBase>;
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageClassification.properties.searchSpace.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageInstanceSegmentation.properties.searchSpace.variants.TypeSpec.Array" })
  get is ArmResourceRead<JobBase>;
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageInstanceSegmentation.properties.searchSpace.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.Command.properties.inputs.variants.TypeSpec.Record" })
  get is ArmResourceRead<JobBase>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.Command.properties.inputs.variants.TypeSpec.Record" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.Command.properties.outputs.variants.TypeSpec.Record" })
  get is ArmResourceRead<JobBase>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.Command.properties.outputs.variants.TypeSpec.Record" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.Pipeline.properties.inputs.variants.TypeSpec.Record" })
  get is ArmResourceRead<JobBase>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.Pipeline.properties.inputs.variants.TypeSpec.Record" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.Pipeline.properties.outputs.variants.TypeSpec.Record" })
  get is ArmResourceRead<JobBase>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.Pipeline.properties.outputs.variants.TypeSpec.Record" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.Spark.properties.inputs.variants.TypeSpec.Record" })
  get is ArmResourceRead<JobBase>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.Spark.properties.inputs.variants.TypeSpec.Record" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.Spark.properties.outputs.variants.TypeSpec.Record" })
  get is ArmResourceRead<JobBase>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.Spark.properties.outputs.variants.TypeSpec.Record" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.Sweep.properties.inputs.variants.TypeSpec.Record" })
  get is ArmResourceRead<JobBase>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.Sweep.properties.inputs.variants.TypeSpec.Record" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.variants.Sweep.properties.outputs.variants.TypeSpec.Record" })
  get is ArmResourceRead<JobBase>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.variants.Sweep.properties.outputs.variants.TypeSpec.Record" })
  
```

**RequestPropertyTypeNarrowed (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**RequestPropertyTypeWidened (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.transformerParams.variants.TypeSpec.RecordCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**RequestPropertyTypeWidened (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.Classification.properties.featurizationSettings.variants.Microsoft.MachineLearningServices.TableVerticalFeaturizationSettingsCreateOrUpdate.properties.transformerParams.variants.TypeSpec.RecordCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageClassification.properties.searchSpace.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**RequestPropertyTypeWidened (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageClassification.properties.searchSpace.variants.TypeSpec.ArrayCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageInstanceSegmentation.properties.searchSpace.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**RequestPropertyTypeWidened (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.AutoML.properties.taskDetails.variants.ImageInstanceSegmentation.properties.searchSpace.variants.TypeSpec.ArrayCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.Command.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**RequestPropertyTypeWidened (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.Command.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.Command.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**RequestPropertyTypeWidened (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.Command.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.Pipeline.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**RequestPropertyTypeWidened (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.Pipeline.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.Pipeline.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**RequestPropertyTypeWidened (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.Pipeline.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.Spark.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**RequestPropertyTypeWidened (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.Spark.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.Spark.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**RequestPropertyTypeWidened (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.Spark.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.Sweep.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**RequestPropertyTypeWidened (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.Sweep.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.variants.Sweep.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<JobBase>;
```

**RequestPropertyTypeWidened (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.variants.Sweep.properties.outputs.variants.TypeSpec.RecordCreateOrUpdate" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.mirrorTraffic.variants.TypeSpec.Record" })
  get is ArmResourceRead<OnlineEndpoint>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.mirrorTraffic.variants.TypeSpec.Record" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.traffic.variants.TypeSpec.Record" })
  get is ArmResourceRead<OnlineEndpoint>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.traffic.variants.TypeSpec.Record" })
  
```

**RequestPropertyTypeNarrowed (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.mirrorTraffic.variants.TypeSpec.RecordCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeWidened (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.mirrorTraffic.variants.TypeSpec.RecordCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.traffic.variants.TypeSpec.RecordCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeWidened (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.traffic.variants.TypeSpec.RecordCreateOrUpdate" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnion.variants.Custom.properties.inputAssets.variants.TypeSpec.Record" })
  get is ArmResourceRead<Schedule>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnion.variants.Custom.properties.inputAssets.variants.TypeSpec.Record" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnion.variants.Custom.properties.inputs.variants.TypeSpec.Record" })
  get is ArmResourceRead<Schedule>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnion.variants.Custom.properties.inputs.variants.TypeSpec.Record" })
  
```

**RequestPropertyTypeNarrowed (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.Custom.properties.inputAssets.variants.TypeSpec.RecordCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeWidened (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.Custom.properties.inputAssets.variants.TypeSpec.RecordCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.Custom.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeWidened (RecordCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.action.variants.CreateMonitor.properties.monitorDefinition.properties.signals.variants.MonitoringSignalBaseUnionCreateOrUpdate.variants.Custom.properties.inputs.variants.TypeSpec.RecordCreateOrUpdate" })
  
```

**ResponsePropertyTypeNarrowed (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.inferenceEndpoint.variants.Microsoft.MachineLearningServices.ServerlessInferenceEndpoint.properties.headers.variants.TypeSpec.Record" })
  get is ArmResourceRead<ServerlessEndpoint>;
```

**ResponsePropertyTypeWidened (Record):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.inferenceEndpoint.variants.Microsoft.MachineLearningServices.ServerlessInferenceEndpoint.properties.headers.variants.TypeSpec.Record" })
  
```

**RequestPropertyTypeNarrowed (RecordCreate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })
  post is ArmResourceActionAsync<
```

**RequestPropertyTypeWidened (RecordCreate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.value.properties.usageDetails.variants.TypeSpec.Array" })
  list is ArmProviderActionSync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.properties.usageDetails.variants.TypeSpec.Array" })
  
```

</details>

<details>
<summary>Version Comparisons</summary>

| Service | Version Pair | Phase | Unique findings | Raw occurrences |
| --- | --- | --- | ---: | ---: |
| MachineLearningServices | 2024-10-01-preview (base → head) | Same-version | ❌ 240 | 1534 |
| MachineLearningServices | 2025-10-01-preview (base → head) | Same-version | ❌ 240 | 1534 |
| MachineLearningServices | 2025-12-01 (base → head) | Same-version | ❌ 214 | 1436 |
| MachineLearningServices | 2026-01-15-preview (base → head) | Same-version | ❌ 240 | 1534 |
| MachineLearningServices | 2026-03-01 (base → head) | Same-version | ❌ 214 | 1436 |
| MachineLearningServices | 2026-03-15-preview (base → head) | Same-version | ❌ 240 | 1534 |
| MachineLearningServices | 2026-05-01 (base → head) | Same-version | ❌ 214 | 1436 |
| MachineLearningServices | 2026-05-15-preview (base → head) | Same-version | ❌ 240 | 1534 |
| MachineLearningServices | 2026-07-01 (base → head) | Same-version | ❌ 214 | 1436 |
| MachineLearningServices | 2026-07-15-preview (base → head) | Same-version | ❌ 240 | 1534 |
| MachineLearningServices | 2026-09-01 (base → head) | Same-version | ❌ 214 | 1436 |
| MachineLearningServices | 2026-09-15-preview (base → head) | Same-version | ❌ 240 | 1534 |

</details>

<details>
<summary>Performance</summary>

Total: 39.1s · Version mutators: 18.2s · Diff engine: 20.9s · Classify: 9ms

</details>
