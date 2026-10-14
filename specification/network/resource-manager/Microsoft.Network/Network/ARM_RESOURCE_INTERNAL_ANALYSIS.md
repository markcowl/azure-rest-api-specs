# ARM resource registration analysis

## Branch and package baseline

- Branch: `copilot/network-arm-resource-internal`
- Rebased onto Azure main: `7507c3df4b8bf6c5887d8571f929b6e393479f2f`
- Source branch retained at: `cb735a40ac686b44ad5d06c54ff9c5192c7068ad`
- Rollback tag retained at: `rollback/network-single-project-minimize-suppressions-ce1c6d57fe`
- Package versions are the exact versions selected by Azure main:
  - `@azure-tools/typespec-autorest` 0.73.0
  - `@azure-tools/typespec-azure-core` 0.73.0
  - `@azure-tools/typespec-azure-resource-manager` 0.73.0
  - `@azure-tools/typespec-azure-rulesets` 0.73.0
  - `@azure-tools/typespec-client-generator-core` 0.73.0
  - `@typespec/compiler` 1.17.0

## Resource-template changes

The published ARM package accepts `@Azure.ResourceManager.Private.armResourceInternal(Properties)` only when the decorated model ultimately extends the standard ARM `TrackedResource`, `ProxyResource`, or `ExtensionResource`.

The new `ArmProxyResourceInstance` template directly extends `Azure.ResourceManager.ProxyResource`, so it is registered successfully. It is defined in `arm-resource-internal.tsp`, imported by `customizations.tsp`, and used by `VirtualNetworkApplianceCapability`.

Applying the decorator to the 17 existing converted templates was attempted and rejected during Autorest emission with 511 instances of the unsuppressible `arm-resource-invalid-base-type` compiler diagnostic. Those templates ultimately extend legacy Network-specific resource models rather than one of the standard ARM resource bases:

| Incompatible template | Legacy base |
| --- | --- |
| `ResourceInstance` | `Resource` |
| `ChildResourceInstance` | `ChildResource` |
| `ChildResourceWithoutPropertiesInstance` | `ChildResource` |
| `SubResourceInstance` | `SubResourceModel` |
| `TrackedResourceWithOptionalLocationInstance` | `TrackedResourceWithOptionalLocation` |
| `CommonTrackedResourceInstance` | `CommonTrackedResource` |
| `SecurityPerimeterTrackedResourceInstance` | `SecurityPerimeterTrackedResource` |
| `SecurityPerimeterProxyResourceInstance` | `SecurityPerimeterProxyResource` |
| `TrackedResourceWithSettableIdOptionalLocationInstance` | `TrackedResourceWithSettableIdOptionalLocation` |
| `CommonProxyResourceInstance` | `CommonProxyResource` |
| `ReadOnlySubResourceModelInstance` | `ReadOnlySubResourceModel` |
| `WritableResourceInstance` | `WritableResource` |
| `ProxyResourceInstance` | `ProxyResource` |
| `ProxyResourceWithReadOnlyIDInstance` | `ProxyResourceWithReadOnlyID` |
| `ProxyResourceWithSettableIdInstance` | `ProxyResourceWithSettableId` |
| `TrackedResourceWithEtagInstance` | `TrackedResourceWithEtag` |
| `TrackedResourceWithSettableNameInstance` | `TrackedResourceWithSettableName` |

The decorator was therefore not left on these 17 templates. Making them compatible would require replacing their legacy inheritance chains with standard ARM bases, which would be a substantially larger wire-model migration and could not meet the no-OpenAPI-change requirement.

## Newly introduced resources

| Resource | Refactor |
| --- | --- |
| `VirtualNetworkApplianceCapability` | Uses the new registered `ArmProxyResourceInstance<VirtualNetworkApplianceCapabilityProperties>` template. Legacy feature decorators were replaced with `@featureFile`. The existing top-level `kind` discriminator and OpenAPI `allOf` hierarchy are preserved. |
| `ExpressRouteLagAuthorization` | Uses `ProxyResourceWithReadOnlyIDInstance<ExpressRouteLagAuthorizationPropertiesFormat>` and `@featureFile`. Its legacy base is one of the incompatible templates listed above, so ARM registration could not be added without changing the inheritance model. |

The capability discriminator models retain focused `arm-custom-resource-usage-discourage` suppressions. The top-level `kind` property has one focused `arm-resource-invalid-envelope-property` suppression because the deployed API requires that discriminator in the resource envelope. No project-wide linter rules were disabled.

## OpenAPI comparison

The upstream-integrated project was emitted before the decorator refactor and retained as the comparison baseline. The final source was then emitted to a separate directory.

| Result | Count |
| --- | ---: |
| Final emitted OpenAPI files | 4,735 |
| Files compared with the baseline | 4,735 |
| Semantically identical files | 4,735 |
| Added files | 0 |
| Semantically changed files | 0 |

The separate output directory caused 99 files to have textual differences in relative references to ARM common-types. After normalizing only those output-location-dependent `$ref` prefixes, all 4,735 files were structurally identical. There were no changes to paths, operations, schemas, properties, required fields, discriminators, `allOf` relationships, or effective `x-ms-azure-resource` behavior.

The normal final emission also persisted upstream-integration output changes that predate the decorator comparison:

- The 2026-03-01 service manifest now includes the consolidated VMSS Network Swagger files.
- `ApprovalReference` is routed to `virtualNetwork.json` with its consuming model instead of `common.json`.
- The 2026-03-01 IP configuration parameter description matches current Azure main.

## Validation

The following completed without errors or warnings:

```text
tsp compile specification/network/resource-manager/Microsoft.Network/Network/Network --no-emit --warn-as-error
tsp compile specification/network/resource-manager/Microsoft.Network/Network/client.tsp --config specification/network/resource-manager/Microsoft.Network/Network/Network/tspconfig.yaml --no-emit --warn-as-error
tsp compile specification/network/resource-manager/Microsoft.Network/Network/Network --warn-as-error
```

All edited TypeSpec files were formatted with `tsp format`.
