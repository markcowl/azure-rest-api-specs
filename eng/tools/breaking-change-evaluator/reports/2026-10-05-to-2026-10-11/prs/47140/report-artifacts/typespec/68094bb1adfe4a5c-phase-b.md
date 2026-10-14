## Breaking Change Analysis

### specification/keyvault/data-plane/Secrets

❌ **2 unsuppressed breaking changes detected**

2 unsuppressed · 17 version pairs compared

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

| Service  | Version Pair                     | Phase         | Result        |
| -------- | -------------------------------- | ------------- | ------------- |
| KeyVault | 7.5 (base → head)                | Same-version  | ❌ 2 findings |
| KeyVault | 7.6-preview.2 (base → head)      | Same-version  | ❌ 2 findings |
| KeyVault | 7.6 (base → head)                | Same-version  | ❌ 2 findings |
| KeyVault | 2025-06-01-preview (base → head) | Same-version  | ❌ 2 findings |
| KeyVault | 2025-07-01 (base → head)         | Same-version  | ❌ 2 findings |
| KeyVault | 2026-01-01-preview (base → head) | Same-version  | ❌ 2 findings |
| KeyVault | 2026-03-01-preview (base → head) | Same-version  | ❌ 2 findings |
| KeyVault | 2026-05-01-preview (base → head) | Same-version  | ❌ 2 findings |
| KeyVault | 2026-07-01-preview (base → head) | Same-version  | ❌ 2 findings |
| KeyVault | 7.5 → 7.6-preview.2              | Cross-version | ✅ No changes |
| KeyVault | 7.6-preview.2 → 7.6              | Cross-version | ✅ No changes |
| KeyVault | 7.6 → 2025-06-01-preview         | Cross-version | ❌ 2 findings |
| KeyVault | 7.6 → 2025-07-01                 | Cross-version | ❌ 2 findings |
| KeyVault | 2025-07-01 → 2026-01-01-preview  | Cross-version | ✅ No changes |
| KeyVault | 2025-07-01 → 2026-03-01-preview  | Cross-version | ✅ No changes |
| KeyVault | 2025-07-01 → 2026-05-01-preview  | Cross-version | ✅ No changes |
| KeyVault | 2025-07-01 → 2026-07-01-preview  | Cross-version | ✅ No changes |

</details>

<details>
<summary>Performance</summary>

Total: 4.2s · Version mutators: 3.0s · Diff engine: 1.1s · Classify: 2ms

</details>
