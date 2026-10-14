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

Template-level suppressions cannot currently cover the envelope diagnostics because the linter reports them against copied concrete properties rather than the properties from which those copies originated.

The branch uses the following policy:

- `arm-resource-invalid-envelope-property` is the only project-level disabled rule.
- All 99 `arm-resource-name-pattern` findings have inline suppressions with the justification `"Matching legacy API"`.
- All six newly activated `arm-post-operation-response-codes` findings have inline suppressions with the justification `"Matching legacy API"`.
- The one pre-existing `arm-post-operation-response-codes` suppression was updated to the same justification.

No other rules are disabled.

## Feasibility of inherited envelope suppressions

Updating `arm-resource-invalid-envelope-property` to honor a suppression on the source/base property is feasible and narrowly scoped.

The rule already calls `getSourceModel(property)`, which follows the `ModelProperty.sourceProperty` chain back to the property from which a copied template property originated. However, it reports the diagnostic with `target: property`, where `property` is the copied concrete property. TypeSpec's normal suppression handling therefore checks the copied property's syntax node and cannot see a directive on the source property.

The recommended rule change is:

1. Import the existing `getSourceProperty` helper from `rules/utils.ts`.
2. Resolve `const sourceProperty = getSourceProperty(property)`.
3. Report the diagnostic against `sourceProperty` instead of the copied `property`.
4. Add a rule test where an invalid envelope property is declared and suppressed on a base/template model, then inherited by a registered resource.
5. Retain an unsuppressed inheritance test to verify that the diagnostic points to the base declaration.

This approach uses the compiler's normal suppression mechanism instead of duplicating directive parsing in the ARM rule. It also preserves behavior for properties without a source chain because `getSourceProperty` returns the original property.

The 568 envelope diagnostics in this project map to 93 unique source locations across 30 files. Of those source locations:

| Shared source | Unique properties | Current projected findings |
| --- | ---: | ---: |
| `models.tsp` | 41 | 152 |
| `customizations.tsp` | 16 | 128 |
| `shared-models.tsp` | 6 | 258 |
| Other resource files | 30 | 30 |

After the linter change, adding 63 suppressions to the three shared/common source files would cover 538 of the 568 current findings. The remaining 30 properties are declared directly in individual resource files and would require suppressions at those declarations if the project-level disable were removed completely.

The implementation risk is low: the rule has no code fix, and changing the diagnostic target affects only diagnostic location and suppression lookup. The main compatibility consideration is that unsuppressed diagnostics inherited by many resources would converge on the same source location; tests should confirm whether duplicate diagnostics should remain or be de-duplicated by source property.

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
