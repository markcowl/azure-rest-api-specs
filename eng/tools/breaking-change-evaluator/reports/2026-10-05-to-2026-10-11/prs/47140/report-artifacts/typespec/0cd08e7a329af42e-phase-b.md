## Breaking Change Analysis

### specification/inferenceservice/data-plane/InferenceService

❌ **10 unsuppressed breaking changes detected**

10 unsuppressed · 1 version pair compared

### Unsuppressed Breaking Changes

#### 2026-09-01-preview (base → head)

| Kind                                                                                                                                                                                                                                                                  | Identity                                                       | Suppression                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.error.properties.type.variants.intrinsic`     | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.error.properties.type.variants.intrinsic`     | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.error.properties.title.variants.intrinsic`    | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.error.properties.title.variants.intrinsic`    | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.error.properties.status.variants.intrinsic`   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.error.properties.status.variants.intrinsic`   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.error.properties.detail.variants.intrinsic`   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.error.properties.detail.variants.intrinsic`   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.error.properties.instance.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.error.properties.instance.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |

<details>
<summary>Suppression examples</summary>

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  semanticRerank is Azure.Core.RpcOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  semanticRerank is Azure.Core.RpcOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  semanticRerank is Azure.Core.RpcOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  semanticRerank is Azure.Core.RpcOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  semanticRerank is Azure.Core.RpcOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

</details>

<details>
<summary>Version Comparisons</summary>

| Service | Version Pair                     | Phase        | Result         |
| ------- | -------------------------------- | ------------ | -------------- |
| AI      | 2026-09-01-preview (base → head) | Same-version | ❌ 20 findings |

</details>

<details>
<summary>Performance</summary>

Total: 480ms · Version mutators: 353ms · Diff engine: 121ms · Classify: 0ms

</details>
