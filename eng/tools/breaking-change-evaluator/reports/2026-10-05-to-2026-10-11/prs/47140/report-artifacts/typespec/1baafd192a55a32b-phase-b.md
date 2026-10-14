## Breaking Change Analysis

### specification/keyvault/data-plane/Keys

❌ **12 unsuppressed breaking changes detected**

12 unsuppressed · 17 version pairs compared

### Unsuppressed Breaking Changes

#### 2025-07-01 → 2026-01-01-preview

| Kind                                                                                                                                                                                                | Identity                                               | Suppression                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.keyAttributes.properties.externalKey` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |

#### 2025-07-01 → 2026-03-01-preview

| Kind                                                                                                                                                                                                | Identity                                               | Suppression                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.keyAttributes.properties.externalKey` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |

#### 2025-07-01 → 2026-05-01-preview

| Kind                                                                                                                                                                                                      | Identity                                               | Suppression                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.kty.variants.AKP`                     | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.keyAttributes.properties.externalKey` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.key.properties.alg`                   | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.key.properties.pub`                   | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |

#### 2025-07-01 → 2026-07-01-preview

| Kind                                                                                                                                                                                                      | Identity                                               | Suppression                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.kty.variants.AKP`                     | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.keyAttributes.properties.externalKey` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.key.properties.alg`                   | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.key.properties.pub`                   | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |

#### 7.5 (base → head)

| Kind                                                                                                                                                                                                                                                                  | Identity                                   | Suppression                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------- |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.error.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.error.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |

<details>
<summary>Suppression examples</summary>

**ResourcePropertyAdded (externalKey):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  externalKey?: ExternalKey;
```

**ResourcePropertyAdded (externalKey):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  externalKey?: ExternalKey;
```

**ResourcePropertyTypeWidened (AKP):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened" })
  AKP: "AKP",
```

**ResourcePropertyAdded (externalKey):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  externalKey?: ExternalKey;
```

**ResourcePropertyAdded (alg):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  alg?: AKPAlgorithm;
```

**ResourcePropertyAdded (pub):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  `pub`?: bytes;
```

**ResourcePropertyTypeWidened (AKP):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened" })
  AKP: "AKP",
```

**ResourcePropertyAdded (externalKey):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  externalKey?: ExternalKey;
```

**ResourcePropertyAdded (alg):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  alg?: AKPAlgorithm;
```

**ResourcePropertyAdded (pub):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  `pub`?: bytes;
```

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

| Service  | Version Pair                     | Phase         | Result         |
| -------- | -------------------------------- | ------------- | -------------- |
| KeyVault | 7.5 (base → head)                | Same-version  | ❌ 2 findings  |
| KeyVault | 7.6-preview.2 (base → head)      | Same-version  | ❌ 2 findings  |
| KeyVault | 7.6 (base → head)                | Same-version  | ❌ 2 findings  |
| KeyVault | 2025-06-01-preview (base → head) | Same-version  | ❌ 2 findings  |
| KeyVault | 2025-07-01 (base → head)         | Same-version  | ❌ 2 findings  |
| KeyVault | 2026-01-01-preview (base → head) | Same-version  | ❌ 2 findings  |
| KeyVault | 2026-03-01-preview (base → head) | Same-version  | ❌ 2 findings  |
| KeyVault | 2026-05-01-preview (base → head) | Same-version  | ❌ 2 findings  |
| KeyVault | 2026-07-01-preview (base → head) | Same-version  | ❌ 2 findings  |
| KeyVault | 7.5 → 7.6-preview.2              | Cross-version | ❌ 4 findings  |
| KeyVault | 7.6-preview.2 → 7.6              | Cross-version | ✅ No changes  |
| KeyVault | 7.6 → 2025-06-01-preview         | Cross-version | ✅ No changes  |
| KeyVault | 7.6 → 2025-07-01                 | Cross-version | ✅ No changes  |
| KeyVault | 2025-07-01 → 2026-01-01-preview  | Cross-version | ❌ 5 findings  |
| KeyVault | 2025-07-01 → 2026-03-01-preview  | Cross-version | ❌ 5 findings  |
| KeyVault | 2025-07-01 → 2026-05-01-preview  | Cross-version | ❌ 21 findings |
| KeyVault | 2025-07-01 → 2026-07-01-preview  | Cross-version | ❌ 21 findings |

</details>

<details>
<summary>Performance</summary>

Total: 6.4s · Version mutators: 3.6s · Diff engine: 2.8s · Classify: 2ms

</details>
