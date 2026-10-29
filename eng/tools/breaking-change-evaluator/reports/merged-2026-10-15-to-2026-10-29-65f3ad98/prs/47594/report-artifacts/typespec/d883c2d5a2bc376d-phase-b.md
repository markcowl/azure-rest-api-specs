## Breaking Change Analysis

### specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices

❌ **256 unsuppressed breaking changes detected**

256 unsuppressed · 20 version pairs compared

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

#### 2025-12-01 → 2026-01-15-preview

| Kind | Source declaration | Wire identity | Source | Suppression |
| --- | --- | --- | --- | --- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.AccountProperties.foundryAutoUpgrade` | `body.properties.properties.foundryAutoUpgrade` | `models.tsp:2059` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4909` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:4932` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:4938` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4944` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4992` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4998` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:5004` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:5010` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate` | `models.tsp:5138` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5244` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5366` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.value.variants.TypeSpec.Array` | `AgentApplication.tsp:135` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })` |

#### 2025-12-01 → 2026-03-01

| Kind | Source declaration | Wire identity | Source | Suppression |
| --- | --- | --- | --- | --- |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4909` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:4932` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:4938` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4944` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4992` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4998` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:5004` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:5010` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate` | `models.tsp:5138` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5244` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5366` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.value.variants.TypeSpec.Array` | `AgentApplication.tsp:135` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })` |

#### 2026-03-01 → 2026-03-15-preview

| Kind | Source declaration | Wire identity | Source | Suppression |
| --- | --- | --- | --- | --- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.AccountProperties.foundryAutoUpgrade` | `body.properties.properties.foundryAutoUpgrade` | `models.tsp:2059` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4909` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:4932` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:4938` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4944` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4992` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4998` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:5004` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:5010` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate` | `models.tsp:5138` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5244` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5366` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.value.variants.TypeSpec.Array` | `AgentApplication.tsp:135` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })` |

#### 2026-03-01 → 2026-05-01

| Kind | Source declaration | Wire identity | Source | Suppression |
| --- | --- | --- | --- | --- |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4909` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:4932` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:4938` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4944` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4992` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4998` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:5004` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:5010` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate` | `models.tsp:5138` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5244` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5366` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.value.variants.TypeSpec.Array` | `AgentApplication.tsp:135` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })` |

#### 2026-05-01 → 2026-05-15-preview

| Kind | Source declaration | Wire identity | Source | Suppression |
| --- | --- | --- | --- | --- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.AccountProperties.foundryAutoUpgrade` | `body.properties.properties.foundryAutoUpgrade` | `models.tsp:2059` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.DeploymentProperties.speculativeDecoding` | `body.properties.properties.speculativeDecoding` | `models.tsp:3692` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.RaiPolicyProperties.egressPolicy` | `body.properties.properties.egressPolicy` | `models.tsp:4102` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4909` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:4932` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:4938` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4944` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4992` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4998` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:5004` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:5010` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate` | `models.tsp:5138` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5244` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5366` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.value.variants.TypeSpec.Array` | `AgentApplication.tsp:135` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })` |

#### 2026-05-01 → 2026-07-01

| Kind | Source declaration | Wire identity | Source | Suppression |
| --- | --- | --- | --- | --- |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4909` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:4932` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:4938` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4944` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4992` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4998` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:5004` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:5010` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate` | `models.tsp:5138` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5244` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5366` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.value.variants.TypeSpec.Array` | `AgentApplication.tsp:135` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })` |

#### 2026-07-01 → 2026-07-15-preview

| Kind | Source declaration | Wire identity | Source | Suppression |
| --- | --- | --- | --- | --- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.AccountProperties.a365LoggingEnabled` | `body.properties.properties.a365LoggingEnabled` | `models.tsp:1984` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.AccountProperties.foundryAutoUpgrade` | `body.properties.properties.foundryAutoUpgrade` | `models.tsp:2059` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.AccountProperties.capabilitySettings` | `body.properties.properties.capabilitySettings` | `models.tsp:2082` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.AccountProperties.agentHostingConfigurations` | `body.properties.properties.agentHostingConfigurations` | `models.tsp:2094` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.DeploymentProperties.contextCacheContainerId` | `body.properties.properties.contextCacheContainerId` | `models.tsp:3682` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.DeploymentProperties.speculativeDecoding` | `body.properties.properties.speculativeDecoding` | `models.tsp:3692` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.RaiPolicyProperties.egressPolicy` | `body.properties.properties.egressPolicy` | `models.tsp:4102` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.ProjectProperties.capabilitySettings` | `body.properties.properties.capabilitySettings` | `models.tsp:4796` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4909` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:4932` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:4938` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4944` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4992` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4998` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:5004` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:5010` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.ProvisioningState` | `body.properties.properties.provisioningState.variants.ExtensionUnreachable` | `models.tsp:58` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate` | `models.tsp:5138` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5244` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5366` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.value.variants.TypeSpec.Array` | `AgentApplication.tsp:135` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })` |

#### 2026-07-01 → 2026-09-01

| Kind | Source declaration | Wire identity | Source | Suppression |
| --- | --- | --- | --- | --- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.AccountProperties.a365LoggingEnabled` | `body.properties.properties.a365LoggingEnabled` | `models.tsp:1984` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.DeploymentProperties.contextCacheContainerId` | `body.properties.properties.contextCacheContainerId` | `models.tsp:3682` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.RaiPolicyProperties.egressPolicy` | `body.properties.properties.egressPolicy` | `models.tsp:4102` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4909` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:4932` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:4938` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4944` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4992` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4998` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:5004` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:5010` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate` | `models.tsp:5138` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5244` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5366` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.value.variants.TypeSpec.Array` | `AgentApplication.tsp:135` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })` |

#### 2026-09-01 → 2026-09-15-preview

| Kind | Source declaration | Wire identity | Source | Suppression |
| --- | --- | --- | --- | --- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.AccountProperties.foundryAutoUpgrade` | `body.properties.properties.foundryAutoUpgrade` | `models.tsp:2059` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.AccountProperties.capabilitySettings` | `body.properties.properties.capabilitySettings` | `models.tsp:2082` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.AccountProperties.agentHostingConfigurations` | `body.properties.properties.agentHostingConfigurations` | `models.tsp:2094` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.AccountProperties.costControlIds` | `body.properties.properties.costControlIds` | `models.tsp:2102` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.AccountProperties.costControlConnections` | `body.properties.properties.costControlConnections` | `models.tsp:2114` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.DeploymentProperties.speculativeDecoding` | `body.properties.properties.speculativeDecoding` | `models.tsp:3692` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.DeploymentProperties.costControlIds` | `body.properties.properties.costControlIds` | `models.tsp:3776` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.RaiPolicyProperties.format` | `body.properties.properties.format` | `models.tsp:4035` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.RaiPolicyProperties.acs` | `body.properties.properties.acs` | `models.tsp:4039` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.RaiPolicyProperties.acsRegos` | `body.properties.properties.acsRegos` | `models.tsp:4046` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.RaiPolicyProperties.customExternalSafetyProviders` | `body.properties.properties.customExternalSafetyProviders` | `models.tsp:4093` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.ProjectProperties.capabilitySettings` | `body.properties.properties.capabilitySettings` | `models.tsp:4796` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4909` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:4932` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:4938` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4944` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `CapabilityHost.tsp:74` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `models.tsp:4992` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.aiServicesConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `models.tsp:4998` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `models.tsp:5004` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.storageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `models.tsp:5010` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.threadStorageConnections.variants.TypeSpec.Array` | `ProjectCapabilityHost.tsp:43` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.ProvisioningState` | `body.properties.properties.provisioningState.variants.ExtensionUnreachable` | `models.tsp:58` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |
| [`ResponsePropertyTypeChanged`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `Microsoft.CognitiveServices.ConnectionPropertiesV2BasicResource.name` | `body.properties.name` | `ConnectionPropertiesV2BasicResource.tsp:52` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeChanged" })` |
| [`ResponseHeaderRemoved`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `headers.location` | `Project.tsp:76` | `@approvedBreakingChange("your reason here", #{ kind: "ResponseHeaderRemoved", path: "responses.202.headers.location" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate` | `models.tsp:5138` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array` | `AgentApplication.tsp:82` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5244` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate` | `models.tsp:5366` | `@approvedBreakingChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | — | `body.properties.value.variants.TypeSpec.Array` | `AgentApplication.tsp:135` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })` |

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

**ResourcePropertyAdded (foundryAutoUpgrade):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  foundryAutoUpgrade?: FoundryAutoUpgrade;
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (RecordCreate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })
  post is ArmResourceActionAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (RecordCreate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })
  post is ArmResourceActionAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })
  
```

**ResourcePropertyAdded (foundryAutoUpgrade):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  foundryAutoUpgrade?: FoundryAutoUpgrade;
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (RecordCreate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })
  post is ArmResourceActionAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (RecordCreate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })
  post is ArmResourceActionAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })
  
```

**ResourcePropertyAdded (foundryAutoUpgrade):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  foundryAutoUpgrade?: FoundryAutoUpgrade;
```

**ResourcePropertyAdded (speculativeDecoding):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  speculativeDecoding?: DeploymentSpeculativeDecoding;
```

**ResourcePropertyAdded (egressPolicy):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  egressPolicy?: RaiEgressPolicyConfig;
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (RecordCreate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })
  post is ArmResourceActionAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (RecordCreate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })
  post is ArmResourceActionAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })
  
```

**ResourcePropertyAdded (a365LoggingEnabled):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  a365LoggingEnabled?: boolean;
```

**ResourcePropertyAdded (foundryAutoUpgrade):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  foundryAutoUpgrade?: FoundryAutoUpgrade;
```

**ResourcePropertyAdded (capabilitySettings):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  capabilitySettings?: CapabilitySettings;
```

**ResourcePropertyAdded (agentHostingConfigurations):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  agentHostingConfigurations?: AgentHostingConfiguration[];
```

**ResourcePropertyAdded (contextCacheContainerId):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  contextCacheContainerId?: string;
```

**ResourcePropertyAdded (speculativeDecoding):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  speculativeDecoding?: DeploymentSpeculativeDecoding;
```

**ResourcePropertyAdded (egressPolicy):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  egressPolicy?: RaiEgressPolicyConfig;
```

**ResourcePropertyAdded (capabilitySettings):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  capabilitySettings?: CapabilitySettings;
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeWidened (ExtensionUnreachable):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })
  ExtensionUnreachable: "ExtensionUnreachable",
```

**RequestPropertyTypeNarrowed (RecordCreate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })
  post is ArmResourceActionAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })
  
```

**ResourcePropertyAdded (a365LoggingEnabled):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  a365LoggingEnabled?: boolean;
```

**ResourcePropertyAdded (contextCacheContainerId):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  contextCacheContainerId?: string;
```

**ResourcePropertyAdded (egressPolicy):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  egressPolicy?: RaiEgressPolicyConfig;
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (RecordCreate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })
  post is ArmResourceActionAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })
  
```

**ResourcePropertyAdded (foundryAutoUpgrade):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  foundryAutoUpgrade?: FoundryAutoUpgrade;
```

**ResourcePropertyAdded (capabilitySettings):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  capabilitySettings?: CapabilitySettings;
```

**ResourcePropertyAdded (agentHostingConfigurations):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  agentHostingConfigurations?: AgentHostingConfiguration[];
```

**ResourcePropertyAdded (costControlIds):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  costControlIds?: Azure.Core.armResourceIdentifier<[
```

**ResourcePropertyAdded (costControlConnections):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  costControlConnections?: CostControlConnections | null;
```

**ResourcePropertyAdded (speculativeDecoding):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  speculativeDecoding?: DeploymentSpeculativeDecoding;
```

**ResourcePropertyAdded (costControlIds):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  costControlIds?: Azure.Core.armResourceIdentifier<[
```

**ResourcePropertyAdded (format):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  format?: RaiPolicyFormat;
```

**ResourcePropertyAdded (acs):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  acs?: RaiAcsManifest;
```

**ResourcePropertyAdded (acsRegos):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  acsRegos?: RaiRegoReference[];
```

**ResourcePropertyAdded (customExternalSafetyProviders):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  customExternalSafetyProviders?: RaiPolicyCustomExternalSafetyProviderReference[];
```

**ResourcePropertyAdded (capabilitySettings):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  capabilitySettings?: CapabilitySettings;
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is CapabilityHostOps.CreateOrUpdateAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.aiServicesConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.vectorStoreConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.storageConnections.variants.TypeSpec.Array" })
  
```

**ResourcePropertyTypeNarrowed (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeNarrowed", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResourcePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened", path: "request.body.properties.properties.threadStorageConnections.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeWidened (ExtensionUnreachable):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })
  ExtensionUnreachable: "ExtensionUnreachable",
```

**ResponsePropertyTypeChanged (name):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeChanged" })
  name: ConnectionName;
```

**ResponseHeaderRemoved (location):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponseHeaderRemoved", path: "responses.202.headers.location" })
  create is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeNarrowed (RecordCreate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.outboundRules.variants.TypeSpec.RecordCreate" })
  post is ArmResourceActionAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.agents.variants.TypeSpec.Array" })
  
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicy.properties.rules.variants.TypeSpec.Array" })
  
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.agents.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**RequestPropertyTypeNarrowed (ArrayCreateOrUpdate):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "RequestPropertyTypeNarrowed", path: "request.body.properties.properties.trafficRoutingPolicy.variants.Microsoft.CognitiveServices.ApplicationTrafficRoutingPolicyCreateOrUpdate.properties.rules.variants.TypeSpec.ArrayCreateOrUpdate" })
  createOrUpdate is ArmResourceCreateOrReplaceAsync<
```

**ResponsePropertyTypeWidened (Array):**
```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened", path: "responses.200.body.properties.value.variants.TypeSpec.Array" })
  
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
| CognitiveServices | 2025-12-01 → 2026-01-15-preview | Cross-version | ❌ 35 | 112 |
| CognitiveServices | 2025-12-01 → 2026-03-01 | Cross-version | ❌ 29 | 105 |
| CognitiveServices | 2026-03-01 → 2026-03-15-preview | Cross-version | ❌ 57 | 134 |
| CognitiveServices | 2026-03-01 → 2026-05-01 | Cross-version | ❌ 28 | 104 |
| CognitiveServices | 2026-05-01 → 2026-05-15-preview | Cross-version | ❌ 59 | 138 |
| CognitiveServices | 2026-05-01 → 2026-07-01 | Cross-version | ❌ 32 | 108 |
| CognitiveServices | 2026-07-01 → 2026-07-15-preview | Cross-version | ❌ 66 | 150 |
| CognitiveServices | 2026-07-01 → 2026-09-01 | Cross-version | ❌ 31 | 110 |
| CognitiveServices | 2026-09-01 → 2026-09-15-preview | Cross-version | ❌ 95 | 190 |

</details>

<details>
<summary>Performance</summary>

Total: 37.4s · Version mutators: 20.4s · Diff engine: 16.9s · Classify: 3ms

</details>
