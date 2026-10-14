## Breaking Change Analysis

### specification/batch/resource-manager/Microsoft.Batch/Batch

❌ **39 unsuppressed breaking changes detected**

39 unsuppressed · 3 version pairs compared

### Unsuppressed Breaking Changes

#### 2024-07-01 → 2025-06-01

| Kind                                                                                                                                                                                                      | Identity                                                                                                                                                                                                                        | Suppression                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`ResourcePropertyRemoved`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)     | `body.properties.properties.deploymentConfiguration.properties.virtualMachineConfiguration.properties.dataDisks.properties.storageAccountType`                                                                                  | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyRemoved" })`     |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.properties.deploymentConfiguration.properties.virtualMachineConfiguration.properties.dataDisks.properties.managedDisk`                                                                                         | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.properties.deploymentConfiguration.properties.virtualMachineConfiguration.properties.diskEncryptionConfiguration.properties.customerManagedKey`                                                                | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.properties.deploymentConfiguration.properties.virtualMachineConfiguration.properties.osDisk.properties.managedDisk.properties.securityProfile.properties.securityEncryptionType.variants.DiskWithVMGuestState` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.properties.deploymentConfiguration.properties.virtualMachineConfiguration.properties.osDisk.properties.managedDisk.properties.securityProfile.properties.diskEncryptionSet`                                    | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.properties.deploymentConfiguration.properties.virtualMachineConfiguration.properties.osDisk.properties.managedDisk.properties.diskEncryptionSet`                                                               | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.properties.deploymentConfiguration.properties.virtualMachineConfiguration.properties.securityProfile.properties.proxyAgentSettings`                                                                            | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.properties.networkConfiguration.properties.publicIPAddressConfiguration.properties.ipFamilies`                                                                                                                 | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.properties.networkConfiguration.properties.publicIPAddressConfiguration.properties.ipTags`                                                                                                                     | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.properties.taskSchedulingPolicy.properties.jobDefaultOrder`                                                                                                                                                    | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyRemoved`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)     | `body.properties.properties.certificates`                                                                                                                                                                                       | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyRemoved" })`     |
| [`ResourcePropertyRemoved`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)     | `body.properties.properties.applicationLicenses`                                                                                                                                                                                | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyRemoved" })`     |
| [`ResourcePropertyRemoved`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)     | `body.properties.properties.targetNodeCommunicationMode`                                                                                                                                                                        | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyRemoved" })`     |
| [`ResourcePropertyRemoved`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)     | `body.properties.properties.resourceTags`                                                                                                                                                                                       | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyRemoved" })`     |
| [`OperationRemoved`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)            | ``                                                                                                                                                                                                                              | `@approvedBreakingChange("your reason here", #{ kind: "OperationRemoved" })`            |
| [`OperationRemoved`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)            | ``                                                                                                                                                                                                                              | `@approvedBreakingChange("your reason here", #{ kind: "OperationRemoved" })`            |
| [`OperationRemoved`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)            | ``                                                                                                                                                                                                                              | `@approvedBreakingChange("your reason here", #{ kind: "OperationRemoved" })`            |
| [`OperationRemoved`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)            | ``                                                                                                                                                                                                                              | `@approvedBreakingChange("your reason here", #{ kind: "OperationRemoved" })`            |
| [`OperationRemoved`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)            | ``                                                                                                                                                                                                                              | `@approvedBreakingChange("your reason here", #{ kind: "OperationRemoved" })`            |
| [`OperationRemoved`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)            | ``                                                                                                                                                                                                                              | `@approvedBreakingChange("your reason here", #{ kind: "OperationRemoved" })`            |
| [`ResponsePropertyRemoved`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)     | `body.properties.properties.currentNodeCommunicationMode`                                                                                                                                                                       | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyRemoved" })`     |

#### 2024-07-01 (base → head)

| Kind                                                                                                                                                                                                                                                                  | Identity                                                                      | Suppression                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.properties.publicNetworkAccess.variants.intrinsic`           | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.publicNetworkAccess.variants.intrinsic`           | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.properties.networkProfile.variants.intrinsic`                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.networkProfile.variants.intrinsic`                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.properties.privateEndpointConnections.variants.intrinsic`    | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.privateEndpointConnections.variants.intrinsic`    | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.properties.dedicatedCoreQuota.variants.intrinsic`            | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.dedicatedCoreQuota.variants.intrinsic`            | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.properties.lowPriorityCoreQuota.variants.intrinsic`          | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.lowPriorityCoreQuota.variants.intrinsic`          | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.properties.dedicatedCoreQuotaPerVMFamily.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.dedicatedCoreQuotaPerVMFamily.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.properties.allowedAuthenticationModes.variants.intrinsic`    | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.allowedAuthenticationModes.variants.intrinsic`    | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.allowedAuthenticationModes.variants.intrinsic`    | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.properties.allowedAuthenticationModes.variants.intrinsic`    | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.properties.currentNodeCommunicationMode.variants.intrinsic`  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.currentNodeCommunicationMode.variants.intrinsic`  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |

<details>
<summary>Suppression examples</summary>

**ResourcePropertyRemoved (storageAccountType):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyRemoved" })
  storageAccountType?: StorageAccountType;
```

**ResourcePropertyAdded (managedDisk):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  managedDisk?: ManagedDisk;
```

**ResourcePropertyAdded (customerManagedKey):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  customerManagedKey?: DiskCustomerManagedKey;
```

**ResourcePropertyTypeWidened (DiskWithVMGuestState):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened" })
  DiskWithVMGuestState: "DiskWithVMGuestState",
```

**ResourcePropertyAdded (diskEncryptionSet):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  diskEncryptionSet?: DiskEncryptionSetParameters;
```

**ResourcePropertyAdded (diskEncryptionSet):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  diskEncryptionSet?: DiskEncryptionSetParameters;
```

**ResourcePropertyAdded (proxyAgentSettings):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  proxyAgentSettings?: ProxyAgentSettings;
```

**ResourcePropertyAdded (ipFamilies):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  ipFamilies?: IPFamily[];
```

**ResourcePropertyAdded (ipTags):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  ipTags?: IPTag[];
```

**ResourcePropertyAdded (jobDefaultOrder):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  jobDefaultOrder?: JobDefaultOrder;
```

**ResourcePropertyRemoved (certificates):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyRemoved" })
  certificates?: CertificateReference[];
```

**ResourcePropertyRemoved (applicationLicenses):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyRemoved" })
  applicationLicenses?: string[];
```

**ResourcePropertyRemoved (targetNodeCommunicationMode):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyRemoved" })
  targetNodeCommunicationMode?: NodeCommunicationMode;
```

**ResourcePropertyRemoved (resourceTags):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyRemoved" })
  resourceTags?: Record<string>;
```

**OperationRemoved ():**

```diff
+ @approvedBreakingChange("reason", #{ kind: "OperationRemoved" })
  get is ArmResourceRead<
```

**OperationRemoved ():**

```diff
+ @approvedBreakingChange("reason", #{ kind: "OperationRemoved" })
  create is Azure.ResourceManager.Legacy.CreateOrReplaceAsync<
```

**OperationRemoved ():**

```diff
+ @approvedBreakingChange("reason", #{ kind: "OperationRemoved" })
  update is ArmCustomPatchSync<
```

**OperationRemoved ():**

```diff
+ @approvedBreakingChange("reason", #{ kind: "OperationRemoved" })
  delete is ArmResourceDeleteWithoutOkAsync<
```

**OperationRemoved ():**

```diff
+ @approvedBreakingChange("reason", #{ kind: "OperationRemoved" })
  listByBatchAccount is ArmResourceListByParent<
```

**OperationRemoved ():**

```diff
+ @approvedBreakingChange("reason", #{ kind: "OperationRemoved" })
  cancelDeletion is ArmResourceActionSync<
```

**ResponsePropertyRemoved (currentNodeCommunicationMode):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyRemoved" })
  currentNodeCommunicationMode?: NodeCommunicationMode | null;
```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  get is ArmResourceRead<BatchAccount, Error = CloudError>;
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  get is ArmResourceRead<BatchAccount, Error = CloudError>;
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  get is ArmResourceRead<BatchAccount, Error = CloudError>;
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  get is ArmResourceRead<BatchAccount, Error = CloudError>;
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  get is ArmResourceRead<BatchAccount, Error = CloudError>;
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  get is ArmResourceRead<BatchAccount, Error = CloudError>;
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  get is ArmResourceRead<BatchAccount, Error = CloudError>;
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  create is Legacy.CreateOrReplaceAsync<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  get is ArmResourceRead<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

</details>

<details>
<summary>Version Comparisons</summary>

| Service | Version Pair             | Phase         | Result         |
| ------- | ------------------------ | ------------- | -------------- |
| Batch   | 2024-07-01 (base → head) | Same-version  | ❌ 86 findings |
| Batch   | 2025-06-01 (base → head) | Same-version  | ❌ 74 findings |
| Batch   | 2024-07-01 → 2025-06-01  | Cross-version | ❌ 35 findings |

</details>

<details>
<summary>Performance</summary>

Total: 6.8s · Version mutators: 3.9s · Diff engine: 2.9s · Classify: 1ms

</details>
