# no-resource-name-conflict details

- Spec: `specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- [Aggregate report](../../../../../../documentation/typespec-arm-resource-data/Report_20261124_no-resource-name-conflict/README.md)
- [Machine-readable diagnostics](diagnostics.json)

## Conflicts

### NRNC-CD7DC82E78F9

**Logical resource name:** `CatalogsImageDefinitions`  
**Diagnostic:** [`specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinition.tsp:139:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinition.tsp#L139)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `getByProjectCatalog` a distinct logical resource name such as `CatalogsImageDefinitionsResourceGroup`. Pass that name through the `ProjectCatalogImageDefinitionOps.Read` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `ProjectCatalogImageDefinitions` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `getByProjectCatalog` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinition.tsp#L139).
- It is instantiated from `ProjectCatalogImageDefinitionOps.Read`.
- It is declared in interface `ProjectCatalogImageDefinitions` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinition.tsp#L137).
- The conflicting operation resolves to `Microsoft.DevCenter/projects/catalogs/imageDefinitions`.

**Conflicting resources and operations:**

- [`Microsoft.DevCenter/devcenters/catalogs/imageDefinitions`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinition.tsp#L15) — resource group scope
  - [`buildImage`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinition.tsp#L89) — `POST` (action)
  - [`getByDevCenterCatalog`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinition.tsp#L68) — `GET` (read)
  - [`getErrorDetails`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinition.tsp#L82) — `POST` (action)
  - [`listByDevCenterCatalog`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinition.tsp#L71) — `GET` (list)
- [`Microsoft.DevCenter/projects/catalogs/imageDefinitions`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinition.tsp#L15) — resource group scope
  - [`buildImage`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinition.tsp#L160) — `POST` (action)
  - [`getByProjectCatalog`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinition.tsp#L139) — `GET` (read)
  - [`getErrorDetails`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinition.tsp#L153) — `POST` (action)
  - [`listByProjectCatalog`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinition.tsp#L142) — `GET` (list)

### NRNC-FCBEE75CB4F1

**Logical resource name:** `ImageDefinitionsBuilds`  
**Diagnostic:** [`specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinitionBuild.tsp:152:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinitionBuild.tsp#L152)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `get` a distinct logical resource name such as `ImageDefinitionsBuildsResourceGroup`. Pass that name through the `ProjectCatalogImageDefinitionBuildOps.Read` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `ProjectCatalogImageDefinitionBuild` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `get` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinitionBuild.tsp#L152).
- It is instantiated from `ProjectCatalogImageDefinitionBuildOps.Read`.
- It is declared in interface `ProjectCatalogImageDefinitionBuild` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinitionBuild.tsp#L150).
- The conflicting operation resolves to `Microsoft.DevCenter/projects/catalogs/imageDefinitions/builds`.

**Conflicting resources and operations:**

- [`Microsoft.DevCenter/devcenters/catalogs/imageDefinitions/builds`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinitionBuild.tsp#L15) — resource group scope
  - [`cancel`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinitionBuild.tsp#L86) — `POST` (action)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinitionBuild.tsp#L77) — `GET` (read)
  - [`getBuildDetails`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinitionBuild.tsp#L95) — `POST` (action)
  - [`listByImageDefinition`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinitionBuild.tsp#L80) — `GET` (list)
- [`Microsoft.DevCenter/projects/catalogs/imageDefinitions/builds`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinitionBuild.tsp#L15) — resource group scope
  - [`cancel`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinitionBuild.tsp#L161) — `POST` (action)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinitionBuild.tsp#L152) — `GET` (read)
  - [`getBuildDetails`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinitionBuild.tsp#L170) — `POST` (action)
  - [`listByImageDefinition`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/devcenter/resource-manager/Microsoft.DevCenter/DevCenter/ImageDefinitionBuild.tsp#L155) — `GET` (list)
