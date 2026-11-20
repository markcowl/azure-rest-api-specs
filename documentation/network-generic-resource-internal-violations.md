# Microsoft.Network generic resource template violations

This report records the diagnostics exposed in
[Azure/azure-rest-api-specs#47722](https://github.com/Azure/azure-rest-api-specs/pull/47722)
when `@Azure.ResourceManager.Private.genericResourceInternal` was added to the 17
legacy resource templates in
`specification/network/resource-manager/Microsoft.Network/Network/Network/customizations.tsp`.

## Method

1. Merge Azure `main` at `f4447567f297544a4afeb4bca0baf359ff928e81`.
2. Resolve the consolidated Network project and compile successfully with no new
   generic-resource decorators.
3. Add `@genericResourceInternal` to every resource template.
4. Compile without new rule suppressions and capture all diagnostics.
5. Add suppressions at the narrowest effective source targets and compile with
   `--warn-as-error`.

The unsuppressed run produced 673 diagnostics across three rules.

| Rule | Diagnostic occurrences | Unique targets | Files |
| --- | ---: | ---: | ---: |
| `arm-resource-invalid-envelope-property` | 568 | 93 | 30 |
| `arm-resource-name-pattern` | 99 | 99 | 99 |
| `arm-post-operation-response-codes` | 6 | 6 | 2 |
| **Total** | **673** | **198** | — |

Repeated occurrences are caused by generic template instantiation and API
version projection. The unique-target count represents the source declarations
that require review or suppression.

## Invalid resource envelope properties

The decorator causes the ARM resource rules to inspect legacy envelope models
that intentionally preserve existing Swagger shapes.

The 93 unique targets consist of:

- 16 `properties` declarations on generic resource templates.
- 77 inherited legacy envelope properties.

The largest source groups were:

| Source file | Unique properties |
| --- | ---: |
| `Network/models.tsp` | 41 |
| `Network/customizations.tsp` | 16 |
| `Network/shared-models.tsp` | 6 |
| `Network/ExpressRouteLag.tsp` | 2 |
| `Network/FirstPartyServiceTag.tsp` | 2 |
| `Network/VerifierWorkspace.tsp` | 2 |
| 24 other resource files | 1 each |

Suppressions were placed on each generic template and on each inherited source
property. This follows the rule guidance and prevents repeated suppressions on
every projected resource instance.

## Resource names without patterns

The decorator exposes 99 existing resource `name` properties that do not define
a `@pattern`. Each diagnostic has a distinct source property in a distinct
resource file.

These names are existing wire-contract definitions. Adding patterns would
introduce new client-side and service-contract restrictions, so each affected
`name` property has a local suppression:

```typespec
#suppress "@azure-tools/typespec-azure-resource-manager/arm-resource-name-pattern" "The generic resource marker exposes this legacy resource name without a pattern."
```

## POST operation response codes

Six existing long-running resource actions use legacy response shapes:

| File | Operation |
| --- | --- |
| `Network/NetworkVirtualAppliance.tsp` | `prepareMigration` |
| `Network/NetworkVirtualAppliance.tsp` | `executeMigration` |
| `Network/NetworkVirtualAppliance.tsp` | `commitMigration` |
| `Network/NetworkVirtualAppliance.tsp` | `abortMigration` |
| `Network/ServiceGateway.tsp` | `updateAddressLocationsLro` |
| `Network/ServiceGateway.tsp` | `updateServicesLro` |

Changing these responses would alter existing API contracts, so each operation
has a local suppression:

```typespec
#suppress "@azure-tools/typespec-azure-resource-manager/arm-post-operation-response-codes" "The generic resource marker exposes this legacy action response shape."
```

## Resource migration audit

The latest main update adds API version `2026-05-01`, examples, and properties
for existing resources. It does not add a new standalone ARM resource that meets
the consolidation migration criteria:

1. Extends a resource model.
2. Uses `@includeInapplicableMetadataInPayload`.
3. Has resource operations.

No additional resource needed conversion to a reusable resource template.
Two newly merged legacy feature decorators were converted to `@featureFile` in
the consolidated project.

## Validation

The updated PR branch at `737990313c27084419ff0dff4bdebe3919e62829`
passes:

- TypeSpec compilation with `--warn-as-error`.
- TypeSpec Validation against current Azure `main`.
- Spec Change Policies against current Azure `main`.
- Diff scope verification: every changed file is under the intended
  `specification/network/resource-manager/Microsoft.Network/Network/` project.
