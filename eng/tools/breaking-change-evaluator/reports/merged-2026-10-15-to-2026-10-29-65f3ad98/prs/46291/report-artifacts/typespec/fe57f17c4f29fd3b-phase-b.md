## Breaking Change Analysis

### specification/support/resource-manager/Microsoft.Support/Support

❌ **3 unsuppressed breaking changes detected**

3 unsuppressed · 3 version pairs compared

### Unsuppressed Breaking Changes

#### 2024-04-01 → 2025-06-01-preview

| Kind | Source declaration | Wire identity | Source | Suppression |
| --- | --- | --- | --- | --- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.Support.SupportTicketDetailsProperties.directConnectEscalation` | `body.properties.properties.directConnectEscalation` | `models.tsp:632` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.Support.SupportTicketDetailsProperties.communityForumPost` | `body.properties.properties.communityForumPost` | `models.tsp:638` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |

#### 2025-06-01-preview (base → head)

| Kind | Source declaration | Wire identity | Source | Suppression |
| --- | --- | --- | --- | --- |
| [`RequestPropertyTypeChanged`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `Microsoft.Support.LookUpResourceIdRequest.type` | `body.properties.type` | `models.tsp:1066` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeChanged" })` |

<details>
<summary>Suppression examples</summary>

**ResourcePropertyAdded (directConnectEscalation):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  directConnectEscalation?: DirectConnectEscalation;
```

**ResourcePropertyAdded (communityForumPost):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  communityForumPost?: string;
```

**RequestPropertyTypeChanged (type):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeChanged" })
  type?: ResourceType;
```

</details>

<details>
<summary>Version Comparisons</summary>

| Service | Version Pair | Phase | Unique findings | Raw occurrences |
| --- | --- | --- | ---: | ---: |
| Support | 2024-04-01 (base → head) | Same-version | ✅ 0 | 0 |
| Support | 2025-06-01-preview (base → head) | Same-version | ❌ 1 | 1 |
| Support | 2024-04-01 → 2025-06-01-preview | Cross-version | ❌ 8 | 10 |

</details>

<details>
<summary>Performance</summary>

Total: 3.3s · Version mutators: 2.4s · Diff engine: 865ms · Classify: 0ms

</details>
