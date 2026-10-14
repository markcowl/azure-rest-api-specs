## Breaking Change Analysis

### specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights

❌ **24 unsuppressed breaking changes detected**

24 unsuppressed · 2 version pairs compared

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

</details>

<details>
<summary>Version Comparisons</summary>

| Service             | Version Pair             | Phase        | Result          |
| ------------------- | ------------------------ | ------------ | --------------- |
| OperationalInsights | 2025-07-01 (base → head) | Same-version | ❌ 170 findings |
| OperationalInsights | 2026-03-01 (base → head) | Same-version | ❌ 190 findings |

</details>

<details>
<summary>Performance</summary>

Total: 7.2s · Version mutators: 4.5s · Diff engine: 2.7s · Classify: 2ms

</details>
