# Generic ARM resource registration analysis

## Result

`@Azure.ResourceManager.Private.genericResourceInternal` can decorate all 18 Network resource-instance templates without requiring the templates to extend the standard ARM `TrackedResource`, `ProxyResource`, or `ExtensionResource` bases.

This succeeds where `@armResourceInternal(Properties)` failed because the generic decorator:

- takes only the target model;
- registers the resource with ARM kind `Generic`;
- does not require a model-level name, key, or segment;
- does not validate the resource's base-model inheritance;
- obtains resource type and route information from the resource operations.

## Branch and package baseline

- Branch: `copilot/network-arm-resource-internal`
- Starting commit: `fabb4fb35ca16dd6b3efba42a045d22499905497`
- Rebased Azure main: `7507c3df4b8bf6c5887d8571f929b6e393479f2f`
- Package versions:
  - `@azure-tools/typespec-autorest` 0.73.0
  - `@azure-tools/typespec-azure-core` 0.73.0
  - `@azure-tools/typespec-azure-resource-manager` 0.73.0
  - `@azure-tools/typespec-azure-rulesets` 0.73.0
  - `@azure-tools/typespec-client-generator-core` 0.73.0
  - `@typespec/compiler` 1.17.0

## Template changes

The decorator is applied once to every resource-instance template, before `@Http.Private.includeInapplicableMetadataInPayload(false)`.

| Template | Base |
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
| `ArmProxyResourceInstance` | `Azure.ResourceManager.ProxyResource` |
| `ProxyResourceWithReadOnlyIDInstance` | `ProxyResourceWithReadOnlyID` |
| `ProxyResourceWithSettableIdInstance` | `ProxyResourceWithSettableId` |
| `TrackedResourceWithEtagInstance` | `TrackedResourceWithEtag` |
| `TrackedResourceWithSettableNameInstance` | `TrackedResourceWithSettableName` |

`VirtualNetworkApplianceCapability` continues to use `ArmProxyResourceInstance`, and `ExpressRouteLagAuthorization` continues to use `ProxyResourceWithReadOnlyIDInstance`. Both are therefore registered as generic ARM resources through their templates.

## Linter impact

Generic registration activates ARM resource validation for the converted legacy models. Before project-level exceptions, warning-as-error compilation reported:

| Rule | Findings | Reason retained |
| --- | ---: | --- |
| `arm-resource-invalid-envelope-property` | 568 | The converted Network models intentionally preserve deployed legacy resource envelopes. |
| `arm-resource-name-pattern` | 99 | Existing resource name contracts must remain unchanged. |
| `arm-post-operation-response-codes` | 6 | Existing long-running POST response contracts must remain unchanged. |

Template-level suppressions cannot cover these diagnostics because the linter reports them against copied concrete models and operations. Adding resource-local suppressions would reintroduce hundreds of suppressions that the template refactor was intended to remove.

The project therefore disables exactly these three rules in `tspconfig.yaml`, with explicit legacy-contract justifications. No other rules are disabled.

## OpenAPI comparison

The final generic-resource source was emitted to a separate directory and compared with the checked-in OpenAPI from the starting branch.

| Result | Count |
| --- | ---: |
| Final emitted OpenAPI files | 4,735 |
| Files compared with the baseline | 4,735 |
| Semantically identical files | 4,735 |
| Added files | 0 |
| Semantically changed files | 0 |

The comparison normalized only output-directory-dependent prefixes in references to ARM common-types. After that normalization, every emitted JSON document was structurally identical. There were no changes to paths, operations, schemas, properties, required fields, discriminators, `allOf` relationships, or `x-ms-azure-resource` values.

## Validation

The following completed without errors or warnings:

```text
tsp compile specification/network/resource-manager/Microsoft.Network/Network/Network --no-emit --warn-as-error
tsp compile specification/network/resource-manager/Microsoft.Network/Network/client.tsp --config specification/network/resource-manager/Microsoft.Network/Network/Network/tspconfig.yaml --no-emit --warn-as-error
tsp compile specification/network/resource-manager/Microsoft.Network/Network/Network --warn-as-error
```

All edited TypeSpec files were formatted with `tsp format`.
