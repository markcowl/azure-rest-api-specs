## Breaking Change Analysis

### specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright

❌ **8 unsuppressed breaking changes detected**

8 unsuppressed · 7 version pairs compared

### Unsuppressed Breaking Changes

#### 2025-09-01 → 2026-11-01-preview

| Kind | Source declaration | Wire identity | Source | Suppression |
| --- | --- | --- | --- | --- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Playwright.Management.PlaywrightWorkspaceProperties.reporting` | `body.properties.properties.reporting` | `models.tsp:46` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Playwright.Management.PlaywrightWorkspaceProperties.storageUri` | `body.properties.properties.storageUri` | `models.tsp:50` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Playwright.Management.PlaywrightWorkspaceProperties.subnetId` | `body.properties.properties.subnetId` | `models.tsp:55` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Playwright.Management.PlaywrightWorkspaceProperties.sessionArtifacts` | `body.properties.properties.sessionArtifacts` | `models.tsp:63` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Playwright.Management.PlaywrightWorkspaceProperties.storageIdentity` | `body.properties.properties.storageIdentity` | `models.tsp:67` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Playwright.Management.PlaywrightWorkspaceProperties.browserProxy` | `body.properties.properties.browserProxy` | `models.tsp:71` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Playwright.Management.PlaywrightWorkspaceProperties.linkedKeyVault` | `body.properties.properties.linkedKeyVault` | `models.tsp:75` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Azure.ResourceManager.ManagedServiceIdentityProperty.identity` | `body.properties.identity` | `models.tsp:256` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |

<details>
<summary>Suppression examples</summary>

**ResourcePropertyAdded (reporting):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  reporting?: EnablementStatus = EnablementStatus.Disabled;
```

**ResourcePropertyAdded (storageUri):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  storageUri?: url;
```

**ResourcePropertyAdded (subnetId):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  subnetId?: Azure.Core.armResourceIdentifier<[
```

**ResourcePropertyAdded (sessionArtifacts):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  sessionArtifacts?: EnablementStatus = EnablementStatus.Disabled;
```

**ResourcePropertyAdded (storageIdentity):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  storageIdentity?: ManagedIdentity;
```

**ResourcePropertyAdded (browserProxy):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  browserProxy?: EnablementStatus = EnablementStatus.Disabled;
```

**ResourcePropertyAdded (linkedKeyVault):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  linkedKeyVault?: LinkedKeyVaultProperties;
```

**ResourcePropertyAdded (identity):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  identity?: Foundations.ManagedServiceIdentity;
```

</details>

<details>
<summary>Version Comparisons</summary>

| Service | Version Pair | Phase | Unique findings | Raw occurrences |
| --- | --- | --- | ---: | ---: |
| Management | 2025-07-01-preview (base → head) | Same-version | ✅ 0 | 0 |
| Management | 2025-09-01 (base → head) | Same-version | ✅ 0 | 0 |
| Management | 2026-01-01-preview (base → head) | Same-version | ✅ 0 | 0 |
| Management | 2026-02-01-preview (base → head) | Same-version | ✅ 0 | 0 |
| Management | 2026-08-01-preview (base → head) | Same-version | ✅ 0 | 0 |
| Management | 2026-10-01-preview (base → head) | Same-version | ✅ 0 | 0 |
| Management | 2025-09-01 → 2026-11-01-preview | Cross-version | ❌ 8 | 16 |

</details>

<details>
<summary>Performance</summary>

Total: 6.6s · Version mutators: 5.6s · Diff engine: 1.1s · Classify: 0ms

</details>
