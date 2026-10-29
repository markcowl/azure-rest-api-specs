## Breaking Change Analysis

### specification/support/resource-manager/Microsoft.Support/Support

❌ **1 unsuppressed breaking change detected**

1 unsuppressed · 2 version pairs compared

### Unsuppressed Breaking Changes

#### 2025-06-01-preview (base → head)

| Kind | Source declaration | Wire identity | Source | Suppression |
| --- | --- | --- | --- | --- |
| [`RequestPropertyTypeChanged`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `Microsoft.Support.LookUpResourceIdRequest.type` | `body.properties.type` | `models.tsp:1066` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeChanged" })` |

<details>
<summary>Suppression examples</summary>

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

</details>

<details>
<summary>Performance</summary>

Total: 2.2s · Version mutators: 1.6s · Diff engine: 622ms · Classify: 1ms

</details>
