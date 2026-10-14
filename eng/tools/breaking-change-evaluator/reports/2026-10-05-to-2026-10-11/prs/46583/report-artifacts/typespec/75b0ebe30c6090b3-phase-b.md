## Breaking Change Analysis

### specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights

❌ **28 unsuppressed breaking changes detected**

28 unsuppressed · 3 version pairs compared

### Unsuppressed Breaking Changes

#### 2025-07-01 (base → head)

| Kind                                                                                                                                                                                                                                                                  | Identity                                                                                                        | Suppression                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.sku.properties.capacity.variants.intrinsic`                                                    | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.sku.properties.capacity.variants.intrinsic`                                                    | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.properties.features.properties.enableDataExport.variants.intrinsic`                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.features.properties.enableDataExport.variants.intrinsic`                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.properties.features.properties.immediatePurgeDataOn30Days.variants.intrinsic`                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.features.properties.immediatePurgeDataOn30Days.variants.intrinsic`                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.properties.features.properties.enableLogAccessUsingOnlyResourcePermissions.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.features.properties.enableLogAccessUsingOnlyResourcePermissions.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.properties.features.properties.clusterResourceId.variants.intrinsic`                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.features.properties.clusterResourceId.variants.intrinsic`                           | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.properties.features.properties.disableLocalAuth.variants.intrinsic`                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.features.properties.disableLocalAuth.variants.intrinsic`                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.properties.sku.properties.capacityReservationLevel.variants.intrinsic`                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.sku.properties.capacityReservationLevel.variants.intrinsic`                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.properties.retentionInDays.variants.intrinsic`                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.retentionInDays.variants.intrinsic`                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.properties.features.properties.unifiedSentinelBillingOnly.variants.intrinsic`                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.features.properties.unifiedSentinelBillingOnly.variants.intrinsic`                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.sku.properties.capacityReservationLevel.variants.intrinsic`                         | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.properties.sku.properties.capacityReservationLevel.variants.intrinsic`                         | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.retentionInDays.variants.intrinsic`                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.properties.retentionInDays.variants.intrinsic`                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |

#### 2026-03-01 (base → head)

| Kind                                                                                                                                                                                                                                                                  | Identity                                                                                  | Suppression                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.properties.features.properties.dataAuthorizationMode.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.properties.features.properties.dataAuthorizationMode.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })`  |

#### 2025-07-01 → 2026-03-01

| Kind                                                                                                                                                                                                      | Identity                                                                                         | Suppression                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.properties.features.properties.dataAuthorizationMode`                           | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.properties.schema.properties.columns.properties.dataTypeHint.variants.vector16` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.properties.protectionLevel`                                                     | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.identity`                                                                       | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |

<details>
<summary>Suppression examples</summary>

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  get is ArmResourceRead<Workspace>;
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  get is ArmResourceRead<Workspace>;
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  get is ArmResourceRead<Workspace>;
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**ResourcePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened" })

```

**ResourcePropertyAdded (dataAuthorizationMode):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  dataAuthorizationMode?: boolean | null;
```

**ResourcePropertyTypeWidened (vector16):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened" })
  vector16: "vector16",
```

**ResourcePropertyAdded (protectionLevel):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  protectionLevel?: TableProtectionLevelEnum;
```

**ResourcePropertyAdded (identity):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  identity?: SummaryLogsIdentity;
```

</details>

<details>
<summary>Version Comparisons</summary>

| Service             | Version Pair             | Phase         | Result          |
| ------------------- | ------------------------ | ------------- | --------------- |
| OperationalInsights | 2025-07-01 (base → head) | Same-version  | ❌ 170 findings |
| OperationalInsights | 2026-03-01 (base → head) | Same-version  | ❌ 190 findings |
| OperationalInsights | 2025-07-01 → 2026-03-01  | Cross-version | ❌ 9 findings   |

</details>

<details>
<summary>Performance</summary>

Total: 7.3s · Version mutators: 4.3s · Diff engine: 2.9s · Classify: 1ms

</details>
