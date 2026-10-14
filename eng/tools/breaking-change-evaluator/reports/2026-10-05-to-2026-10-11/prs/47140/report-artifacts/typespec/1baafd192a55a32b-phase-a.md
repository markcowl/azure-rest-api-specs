## Breaking Change Analysis

### specification/keyvault/data-plane/Keys

❌ **2 unsuppressed breaking changes detected**

2 unsuppressed · 9 version pairs compared

### Unsuppressed Breaking Changes

#### 7.5 (base → head)

| Kind                                                                                                                                                                                                                                                                  | Identity                                   | Suppression                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------- |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.error.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.error.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |

<details>
<summary>Suppression examples</summary>

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  model Model {
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })
  null,
```

</details>

<details>
<summary>Version Comparisons</summary>

| Service  | Version Pair                     | Phase        | Result        |
| -------- | -------------------------------- | ------------ | ------------- |
| KeyVault | 7.5 (base → head)                | Same-version | ❌ 2 findings |
| KeyVault | 7.6-preview.2 (base → head)      | Same-version | ❌ 2 findings |
| KeyVault | 7.6 (base → head)                | Same-version | ❌ 2 findings |
| KeyVault | 2025-06-01-preview (base → head) | Same-version | ❌ 2 findings |
| KeyVault | 2025-07-01 (base → head)         | Same-version | ❌ 2 findings |
| KeyVault | 2026-01-01-preview (base → head) | Same-version | ❌ 2 findings |
| KeyVault | 2026-03-01-preview (base → head) | Same-version | ❌ 2 findings |
| KeyVault | 2026-05-01-preview (base → head) | Same-version | ❌ 2 findings |
| KeyVault | 2026-07-01-preview (base → head) | Same-version | ❌ 2 findings |

</details>

<details>
<summary>Performance</summary>

Total: 5.0s · Version mutators: 2.9s · Diff engine: 2.1s · Classify: 1ms

</details>
