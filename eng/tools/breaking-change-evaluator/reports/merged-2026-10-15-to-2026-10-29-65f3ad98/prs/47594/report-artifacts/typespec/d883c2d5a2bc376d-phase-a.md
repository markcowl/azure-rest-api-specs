## Breaking Change Analysis

### specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices

❌ **26 unsuppressed breaking changes detected**

26 unsuppressed · 11 version pairs compared

### Unsuppressed Breaking Changes

#### 2025-10-01-preview (base → head)

| Kind | Source declaration | Wire identity | Source | Suppression |
| --- | --- | --- | --- | --- |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4909` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:4932` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:4938` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4944` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedUnversionedChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate` | `models.tsp:5138` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate` | `ManagedNetworkSettingsPropertiesBasicResource.tsp:85` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.agents.variants.TypeSpec.Array` | `models.tsp:5244` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.agents.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array` | `models.tsp:5366` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5244` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate` | `AgentApplication.tsp:91` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5366` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate` | `AgentApplication.tsp:91` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.value.variants.TypeSpec.Array` | `models.tsp:5411` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.value.variants.TypeSpec.Array` | `AgentApplication.tsp:135` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })` |

#### 2026-09-15-preview (base → head)

| Kind | Source declaration | Wire identity | Source | Suppression |
| --- | --- | --- | --- | --- |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.rules.properties.thresholds.variants.TypeSpec.Array` | `CostControl.tsp:184` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.rules.properties.thresholds.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.rules.properties.thresholds.variants.TypeSpec.Array` | `CostControl.tsp:473` | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.rules.properties.thresholds.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.rules.properties.thresholds.variants.TypeSpec.ArrayCreateOrUpdate` | `CostControl.tsp:184` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.rules.properties.thresholds.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.rules.properties.thresholds.variants.TypeSpec.ArrayCreateOrUpdate` | `CostControl.tsp:481` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.rules.properties.thresholds.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.rules.properties.thresholds.variants.TypeSpec.ArrayUpdate` | `CostControl.tsp:184` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.rules.properties.thresholds.variants.TypeSpec.ArrayUpdate" })` |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | — | `body.properties.properties.rules.properties.thresholds.variants.TypeSpec.ArrayUpdate` | `CostControl.tsp:492` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.rules.properties.thresholds.variants.TypeSpec.ArrayUpdate" })` |

<details>
<summary>Suppression examples</summary>

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (RecordCreate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })
  post is ArmResourceActionAsync<
```

**RequestPropertyTypeWidened (RecordCreate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })
  get is ArmResourceRead<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })
  get is ArmResourceRead<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeWidened (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeWidened (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })
  listAgents is ArmResourceActionSync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeNarrowed (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed", path: "responses.200.body.properties.properties.rules.properties.thresholds.variants.TypeSpec.Array" })
  get is ArmResourceRead<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.rules.properties.thresholds.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.rules.properties.thresholds.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceSync<
```

**RequestPropertyTypeWidened (ArrayCreateOrUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.rules.properties.thresholds.variants.TypeSpec.ArrayCreateOrUpdate" })
  
```

**RequestPropertyTypeNarrowed (ArrayUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.rules.properties.thresholds.variants.TypeSpec.ArrayUpdate" })
  update is ArmCustomPatchSync<
```

**RequestPropertyTypeWidened (ArrayUpdate):**
```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened", path: "request.body.properties.properties.rules.properties.thresholds.variants.TypeSpec.ArrayUpdate" })
  
```

</details>

<details>
<summary>Version Comparisons</summary>

| Service | Version Pair | Phase | Unique findings | Raw occurrences |
| --- | --- | --- | ---: | ---: |
| CognitiveServices | 2025-10-01-preview (base → head) | Same-version | ❌ 20 | 104 |
| CognitiveServices | 2025-12-01 (base → head) | Same-version | ❌ 20 | 104 |
| CognitiveServices | 2026-01-15-preview (base → head) | Same-version | ❌ 20 | 104 |
| CognitiveServices | 2026-03-01 (base → head) | Same-version | ❌ 20 | 104 |
| CognitiveServices | 2026-03-15-preview (base → head) | Same-version | ❌ 20 | 104 |
| CognitiveServices | 2026-05-01 (base → head) | Same-version | ❌ 20 | 104 |
| CognitiveServices | 2026-05-15-preview (base → head) | Same-version | ❌ 20 | 104 |
| CognitiveServices | 2026-07-01 (base → head) | Same-version | ❌ 20 | 104 |
| CognitiveServices | 2026-07-15-preview (base → head) | Same-version | ❌ 20 | 104 |
| CognitiveServices | 2026-09-01 (base → head) | Same-version | ❌ 20 | 104 |
| CognitiveServices | 2026-09-15-preview (base → head) | Same-version | ❌ 26 | 118 |

</details>

<details>
<summary>Performance</summary>

Total: 16.8s · Version mutators: 9.4s · Diff engine: 7.3s · Classify: 0ms

</details>
