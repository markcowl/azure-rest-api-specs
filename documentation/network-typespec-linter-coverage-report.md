# Microsoft.Network TypeSpec linter coverage and suppression reduction

## Summary

The Network TypeSpec consolidation improved ARM linter coverage while reducing the
number of source-level suppressions substantially.

| Measure | Original specification | Latest specification | Change |
| --- | ---: | ---: | ---: |
| TypeSpec `#suppress` directives | 3,113 | 1,690 | **-1,423 (-45.7%)** |
| Files containing TypeSpec suppressions | 169 | 159 | **-10 (-5.9%)** |
| Resource-registration suppressions | 0 | 200 | **+200** |

The reduction is particularly significant because the latest specification is
validated more thoroughly. Registering the reusable legacy resource templates with
`@genericResourceInternal` caused ARM resource rules that previously did not recognize
those models as resources to begin evaluating them.

The registration change exposed 673 diagnostics. Those diagnostics are represented by
200 targeted source suppressions because template instantiation and API-version
projection can emit the same source diagnostic multiple times.

If the 200 suppressions required for this newly enabled coverage are excluded, the
remaining legacy suppression count fell from 3,113 to 1,490: a reduction of
**1,623 directives (52.1%)**.

## Comparison scope

This report compares:

- **Original:** Azure `main` immediately before the Network consolidation PR was
  merged, commit
  [`dc8116b1ae0`](https://github.com/Azure/azure-rest-api-specs/tree/dc8116b1ae0b69b066a8f149962b2d88d3902bf6/specification/network/resource-manager/Microsoft.Network/Network).
- **Latest:** the TypeSpec source at
  [`985898f0ac3`](https://github.com/Azure/azure-rest-api-specs/tree/985898f0ac398b6a554ff0a3687a76896f743fa1/specification/network/resource-manager/Microsoft.Network/Network),
  the head of
  [PR #48445](https://github.com/Azure/azure-rest-api-specs/pull/48445).

Only `#suppress` directives in `.tsp` files are counted. AutoRest readme suppressions,
TypeSpec validation manifests, and SDK suppression manifests are intentionally
excluded.

PR #48445 only flattens the project directory. It does not add, remove, or modify any
TypeSpec suppression, so the latest suppression content is the content delivered by
the consolidation work in
[PR #47722](https://github.com/Azure/azure-rest-api-specs/pull/47722).

## Improved ARM resource rule coverage

Resource registration added 200 suppressions for findings that were not previously
evaluated against these legacy models:

| Newly applicable rule | Added suppressions | What became visible |
| --- | ---: | --- |
| `arm-resource-name-pattern` | 100 | Existing resource names without the standard ARM name pattern |
| `arm-resource-invalid-envelope-property` | 94 | 77 inherited legacy envelope properties and 17 reusable template envelopes |
| `arm-post-operation-response-codes` | 6 | Four Network Virtual Appliance migration actions and two Service Gateway actions |
| **Total** | **200** | **673 projected diagnostics** |

These suppressions do not represent a reduction in validation. They document existing
wire-compatible behavior that became visible only after the resources were registered
correctly. The rules now evaluate future edits to these resources, while the
suppressions remain limited to known legacy exceptions.

## Suppression changes by rule

The largest reductions came from removing repeated conversion-era directives:

| Rule | Original | Latest | Change |
| --- | ---: | ---: | ---: |
| `no-legacy-usage` | 1,598 | 321 | **-1,277** |
| `arm-custom-resource-usage-discourage` | 160 | 44 | **-116** |
| `no-private-usage` | 133 | 20 | **-113** |
| `composition-over-inheritance` | 217 | 108 | **-109** |
| `documentation-required` | 113 | 99 | **-14** |
| `no-openapi-client-extensions` | 3 | 1 | **-2** |
| `arm-resource-invalid-envelope-property` | 124 | 219 | **+95** |
| `arm-resource-name-pattern` | 0 | 100 | **+100** |
| `arm-post-operation-response-codes` | 1 | 7 | **+6** |

The increases are dominated by the intentional expansion of resource-rule coverage.
Most other linter categories remained unchanged.

## Categories of simplification

### 1. Single-project consolidation

The former Common, Network, and VMSS TypeSpec projects repeated declarations,
decorators, versioning projections, and conversion suppressions. Consolidating them
removed duplicate source paths and allowed shared definitions to carry one suppression
instead of repeating the same exception in each project.

This is the primary reason `no-legacy-usage`, `no-private-usage`,
`composition-over-inheritance`, and `arm-custom-resource-usage-discourage` declined
substantially.

### 2. Reusable resource templates

Repeated legacy resource metadata was moved into reusable templates in
`customizations.tsp`. Resource instances now consume a shared template rather than
repeating private decorators and their associated suppressions on every model.

This centralizes compatibility behavior, makes resource intent explicit, and reduces
the chance that newly added resources copy an incomplete or inconsistent suppression
set.

### 3. Correct resource registration

Adding `@genericResourceInternal` to the reusable templates restored ARM resource
discovery for legacy converted models. This is the principal linter-coverage
improvement: name-pattern, envelope-property, and action-response rules now inspect
resources they previously skipped.

The resulting suppressions are deliberately attached to the concrete legacy source
property, operation, or reusable template that requires the exception. Broad namespace
or project-level suppressions were not used.

### 4. Centralized standard-resource compatibility

Capability resources that use the standard proxy-resource pattern no longer carry
five separate `arm-custom-resource-usage-discourage` suppressions. A shared standard
proxy-resource wrapper now contains the one compatibility suppression required because
SDK customization marks the common foundation model as custom.

This preserves generated OpenAPI and SDK inheritance while replacing repeated
model-level exceptions with one accurately scoped template exception.

### 5. Feature and compatibility cleanup

Legacy feature assignments were consolidated into the current feature-file mechanism,
and obsolete suppressions such as `missing-operations-endpoint` and
`inconsistent-multiple-service-dependency` were eliminated. Remaining compatibility
suppressions describe released behavior that cannot be changed without affecting the
wire contract or generated SDK surface.

### 6. Layout normalization without suppression churn

PR #48445 moves the TypeSpec project beside its `stable` and `preview` output folders
and updates relative configuration paths. Every `.tsp` file is a byte-for-byte move,
demonstrating that repository layout normalization did not require additional linter
exceptions.

## Outcome

The session produced both a simpler source structure and stronger validation:

- **45.7% fewer TypeSpec suppression directives overall.**
- **52.1% fewer legacy suppressions after accounting for newly enabled rule coverage.**
- **200 narrowly scoped suppressions documenting previously unchecked legacy resource
  behavior.**
- **673 newly surfaced ARM diagnostics evaluated across resource templates and API
  projections.**
- **No generated OpenAPI changes from the final layout normalization.**

The remaining suppressions are more centralized and better aligned with the source
construct that requires the compatibility exception, while future resource changes now
receive ARM-specific linter coverage that the original specification lacked.
