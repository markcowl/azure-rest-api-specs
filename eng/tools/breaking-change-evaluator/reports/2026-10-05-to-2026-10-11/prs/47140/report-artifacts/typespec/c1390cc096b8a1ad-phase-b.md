## Breaking Change Analysis

### specification/keyvault/data-plane/Certificates

❌ **9 unsuppressed breaking changes detected**

9 unsuppressed · 17 version pairs compared

### Unsuppressed Breaking Changes

#### 7.6 → 2025-06-01-preview

| Kind                                                                                                                                                                                                | Identity                                                                                                                           | Suppression                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.certificatePolicy.properties.X509CertificateProperties.properties.subjectAlternativeNames.properties.uris`        | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.certificatePolicy.properties.X509CertificateProperties.properties.subjectAlternativeNames.properties.ipAddresses` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |

#### 7.6 → 2025-07-01

| Kind                                                                                                                                                                                                | Identity                                                                                                                           | Suppression                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.certificatePolicy.properties.X509CertificateProperties.properties.subjectAlternativeNames.properties.uris`        | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.certificatePolicy.properties.X509CertificateProperties.properties.subjectAlternativeNames.properties.ipAddresses` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |

#### 2025-07-01 → 2026-03-01-preview

| Kind                                                                                                                                                                                                | Identity                                                       | Suppression                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.certificatePolicy.properties.platformManaged` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |

#### 2025-07-01 → 2026-05-01-preview

| Kind                                                                                                                                                                                                | Identity                                                       | Suppression                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.certificatePolicy.properties.platformManaged` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |

#### 2025-07-01 → 2026-07-01-preview

| Kind                                                                                                                                                                                                | Identity                                                       | Suppression                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.certificatePolicy.properties.platformManaged` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |

#### 7.5 (base → head)

| Kind                                                                                                                                                                                                                                                                  | Identity                                   | Suppression                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------- |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.error.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.error.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |

<details>
<summary>Suppression examples</summary>

**ResourcePropertyAdded (uris):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  uris?: string[];
```

**ResourcePropertyAdded (ipAddresses):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  ipAddresses?: string[];
```

**ResourcePropertyAdded (uris):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  uris?: string[];
```

**ResourcePropertyAdded (ipAddresses):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  ipAddresses?: string[];
```

**ResourcePropertyAdded (platformManaged):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  platformManaged?: PlatformManaged;
```

**ResourcePropertyAdded (platformManaged):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  platformManaged?: PlatformManaged;
```

**ResourcePropertyAdded (platformManaged):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  platformManaged?: PlatformManaged;
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
| KeyVault | 7.5 → 7.6-preview.2              | Cross-version | ❌ 4 findings |
| KeyVault | 7.6-preview.2 → 7.6              | Cross-version | ✅ No changes |
| KeyVault | 7.6 → 2025-06-01-preview         | Cross-version | ❌ 4 findings |
| KeyVault | 7.6 → 2025-07-01                 | Cross-version | ❌ 4 findings |
| KeyVault | 2025-07-01 → 2026-01-01-preview  | Cross-version | ✅ No changes |
| KeyVault | 2025-07-01 → 2026-03-01-preview  | Cross-version | ❌ 2 findings |
| KeyVault | 2025-07-01 → 2026-05-01-preview  | Cross-version | ❌ 2 findings |
| KeyVault | 2025-07-01 → 2026-07-01-preview  | Cross-version | ❌ 2 findings |

</details>

<details>
<summary>Performance</summary>

Total: 14.2s · Version mutators: 7.5s · Diff engine: 6.7s · Classify: 1ms

</details>
