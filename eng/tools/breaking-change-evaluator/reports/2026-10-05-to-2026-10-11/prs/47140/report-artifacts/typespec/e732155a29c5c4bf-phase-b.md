## Breaking Change Analysis

### specification/ai/data-plane/AIAgents

❌ **122 unsuppressed breaking changes detected**

122 unsuppressed · 5 version pairs compared

### Unsuppressed Breaking Changes

#### v1 → 2025-05-15-preview

| Kind                                                                                                                                                                                                      | Identity                                                                                                                                                             | Suppression                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`ResourcePropertyAdded`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference)       | `body.properties.toolResources.variants.Azure.AI.Agents.ToolResourcesCreate.properties.mcp`                                                                          | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyAdded" })`       |
| [`ResourcePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.toolChoice.variants.Azure.AI.Agents.AgentsToolChoiceOption.variants.Azure.AI.Agents.AgentsNamedToolChoice.properties.type.variants.microsoftFabric` | `@approvedBreakingChange("your reason here", #{ kind: "ResourcePropertyTypeWidened" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.tools.variants.fabric_dataagent`                                                                                                                    | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.status.variants.incomplete`                                                                                                                         | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.requiredAction.variants.RequiredActionUnion.variants.submit_tool_outputs.properties.submitToolOutputs.properties.toolCalls.variants.mcp`            | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.requiredAction.variants.RequiredActionUnion.variants.submit_tool_approval`                                                                          | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.type.variants.activities`                                                                                                                           | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.stepDetails.variants.tool_calls.properties.toolCalls.variants.browser_automation`                                                                   | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.stepDetails.variants.activities`                                                                                                                    | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |

#### 2025-05-01 (base → head)

| Kind                                                                                                                                                                                                                                                                  | Identity                                                                                                                        | Suppression                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.name.variants.intrinsic`                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.name.variants.intrinsic`                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.description.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.description.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.instructions.variants.intrinsic`                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.instructions.variants.intrinsic`                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.toolResources.variants.intrinsic`                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.toolResources.variants.intrinsic`                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.temperature.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.temperature.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.topP.variants.intrinsic`                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.topP.variants.intrinsic`                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.responseFormat.variants.intrinsic`                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.responseFormat.variants.intrinsic`                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.metadata.variants.intrinsic`                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.metadata.variants.intrinsic`                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.name.variants.intrinsic`                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.name.variants.intrinsic`                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.description.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.description.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.instructions.variants.intrinsic`                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.instructions.variants.intrinsic`                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.toolResources.variants.intrinsic`                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.toolResources.variants.intrinsic`                                                                              | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.temperature.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.temperature.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.topP.variants.intrinsic`                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.topP.variants.intrinsic`                                                                                       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.responseFormat.variants.intrinsic`                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.responseFormat.variants.intrinsic`                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.metadata.variants.intrinsic`                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.metadata.variants.intrinsic`                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.error.properties.message.variants.intrinsic`                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.error.properties.message.variants.intrinsic`                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.error.properties.type.variants.intrinsic`                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.error.properties.type.variants.intrinsic`                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.error.properties.param.variants.intrinsic`                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.error.properties.param.variants.intrinsic`                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.error.properties.code.variants.intrinsic`                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.error.properties.code.variants.intrinsic`                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.thread.properties.messages.properties.attachments.variants.intrinsic`                                          | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.thread.properties.messages.properties.attachments.variants.intrinsic`                                          | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.thread.properties.toolResources.variants.intrinsic`                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.thread.properties.toolResources.variants.intrinsic`                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.model.variants.intrinsic`                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.model.variants.intrinsic`                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.tools.variants.intrinsic`                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.tools.variants.intrinsic`                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.maxPromptTokens.variants.intrinsic`                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.maxPromptTokens.variants.intrinsic`                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.maxCompletionTokens.variants.intrinsic`                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.maxCompletionTokens.variants.intrinsic`                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.truncationStrategy.variants.Azure.AI.Agents.TruncationObjectCreate.properties.lastMessages.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.truncationStrategy.variants.Azure.AI.Agents.TruncationObjectCreate.properties.lastMessages.variants.intrinsic` | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.truncationStrategy.variants.intrinsic`                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.truncationStrategy.variants.intrinsic`                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.toolChoice.variants.intrinsic`                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.toolChoice.variants.intrinsic`                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.requiredAction.variants.intrinsic`                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.requiredAction.variants.intrinsic`                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.lastError.variants.intrinsic`                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.lastError.variants.intrinsic`                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.expiresAt.variants.intrinsic`                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.expiresAt.variants.intrinsic`                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.startedAt.variants.intrinsic`                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.startedAt.variants.intrinsic`                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.completedAt.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.completedAt.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.cancelledAt.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.cancelledAt.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.failedAt.variants.intrinsic`                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.failedAt.variants.intrinsic`                                                                                   | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.incompleteDetails.variants.intrinsic`                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.incompleteDetails.variants.intrinsic`                                                                          | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.usage.variants.intrinsic`                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.usage.variants.intrinsic`                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.maxPromptTokens.variants.intrinsic`                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.maxPromptTokens.variants.intrinsic`                                                                            | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.maxCompletionTokens.variants.intrinsic`                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.maxCompletionTokens.variants.intrinsic`                                                                        | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.truncationStrategy.variants.Azure.AI.Agents.TruncationObject.properties.lastMessages.variants.intrinsic`       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.truncationStrategy.variants.Azure.AI.Agents.TruncationObject.properties.lastMessages.variants.intrinsic`       | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.truncationStrategy.variants.intrinsic`                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.truncationStrategy.variants.intrinsic`                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.toolChoice.variants.intrinsic`                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.toolChoice.variants.intrinsic`                                                                                 | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.incompleteAt.variants.intrinsic`                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.incompleteAt.variants.intrinsic`                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.assistantId.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.assistantId.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.runId.variants.intrinsic`                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.runId.variants.intrinsic`                                                                                      | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.attachments.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.attachments.variants.intrinsic`                                                                                | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.additionalInstructions.variants.intrinsic`                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.additionalInstructions.variants.intrinsic`                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.additionalMessages.variants.intrinsic`                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.additionalMessages.variants.intrinsic`                                                                         | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.tool_resources.variants.intrinsic`                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.tool_resources.variants.intrinsic`                                                                             | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.stream.variants.intrinsic`                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.stream.variants.intrinsic`                                                                                     | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.expiredAt.variants.intrinsic`                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.expiredAt.variants.intrinsic`                                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.data.properties.expiresAt.variants.intrinsic`                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.data.properties.expiresAt.variants.intrinsic`                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.data.properties.lastActiveAt.variants.intrinsic`                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.data.properties.lastActiveAt.variants.intrinsic`                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |
| [`RequestPropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.expiresAfter.variants.intrinsic`                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeNarrowed" })`  |
| [`RequestPropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)   | `body.properties.expiresAfter.variants.intrinsic`                                                                               | `@approvedUnversionedChange("your reason here", #{ kind: "RequestPropertyTypeWidened" })`   |
| [`ResponsePropertyTypeNarrowed`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications) | `body.properties.data.properties.lastError.variants.intrinsic`                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeNarrowed" })` |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications)  | `body.properties.data.properties.lastError.variants.intrinsic`                                                                  | `@approvedUnversionedChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })`  |

#### 2025-05-01 → v1

| Kind                                                                                                                                                                                                      | Identity                                                                                       | Suppression                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| [`ResponsePropertyTypeWidened`](https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md#phase-b-detailed-reference) | `body.properties.stepDetails.variants.tool_calls.properties.toolCalls.variants.azure_function` | `@approvedBreakingChange("your reason here", #{ kind: "ResponsePropertyTypeWidened" })` |

<details>
<summary>Suppression examples</summary>

**ResourcePropertyAdded (mcp):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyAdded" })
  mcp?: MCPToolResource[];
```

**ResourcePropertyTypeWidened (microsoftFabric):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResourcePropertyTypeWidened" })
  microsoftFabric: "fabric_dataagent",
```

**ResponsePropertyTypeWidened (fabric_dataagent):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeWidened (incomplete):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })
  incomplete: "incomplete",
```

**ResponsePropertyTypeWidened (mcp):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeWidened (submit_tool_approval):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeWidened (activities):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })
  activities: "activities",
```

**ResponsePropertyTypeWidened (browser_automation):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeWidened (activities):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createAgent is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  op createThreadAndRun is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createMessage is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createMessage is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createMessage is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  createMessage is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createRun is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createRun is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  createRun is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  submitToolOutputsToRun is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  getRunStep is AgentOperation<
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  listVectorStores(...ApiVersionParameter, ...AgentsListOptions):
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  listVectorStores(...ApiVersionParameter, ...AgentsListOptions):
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**RequestPropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeNarrowed" })
  modifyVectorStore is AgentOperation<
```

**RequestPropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "RequestPropertyTypeWidened" })

```

**ResponsePropertyTypeNarrowed (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeNarrowed" })
  listVectorStoreFiles(
```

**ResponsePropertyTypeWidened (intrinsic):**

```diff
+ @approvedUnversionedChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

**ResponsePropertyTypeWidened (azure_function):**

```diff
+ @approvedBreakingChange("reason", #{ kind: "ResponsePropertyTypeWidened" })

```

</details>

<details>
<summary>Version Comparisons</summary>

| Service | Version Pair                     | Phase         | Result          |
| ------- | -------------------------------- | ------------- | --------------- |
| Agents  | 2025-05-01 (base → head)         | Same-version  | ❌ 910 findings |
| Agents  | v1 (base → head)                 | Same-version  | ❌ 918 findings |
| Agents  | 2025-05-15-preview (base → head) | Same-version  | ❌ 918 findings |
| Agents  | 2025-05-01 → v1                  | Cross-version | ❌ 2 findings   |
| Agents  | v1 → 2025-05-15-preview          | Cross-version | ❌ 15 findings  |

</details>

<details>
<summary>Performance</summary>

Total: 16.5s · Version mutators: 9.8s · Diff engine: 6.6s · Classify: 10ms

</details>
