# no-resource-name-conflict details

- Spec: `specification/app/resource-manager/Microsoft.App/ContainerApps`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- [Aggregate report](../../../../../../documentation/typespec-arm-resource-data/Report_20261124_no-resource-name-conflict/README.md)
- [Machine-readable diagnostics](diagnostics.json)

## Conflicts

### NRNC-83B6C2C28445

**Logical resource name:** `ContainerAppLabelHistory`  
**Diagnostic:** [`specification/app/resource-manager/Microsoft.App/ContainerApps/LabelHistory.tsp:138:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/app/resource-manager/Microsoft.App/ContainerApps/LabelHistory.tsp#L138)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `getLabelHistory` a distinct logical resource name such as `ContainerAppLabelHistoryResourceGroup`. Pass that name through the `LabelHistoryOps.Read` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `ContainerAppsLabelHistory` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `getLabelHistory` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/app/resource-manager/Microsoft.App/ContainerApps/LabelHistory.tsp#L138).
- It is instantiated from `LabelHistoryOps.Read`.
- It is declared in interface `ContainerAppsLabelHistory` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/app/resource-manager/Microsoft.App/ContainerApps/LabelHistory.tsp#L135).
- The conflicting operation resolves to `Microsoft.App/containerApps/labelHistories`.

**Conflicting resources and operations:**

- [`Microsoft.App/containerApps/labelHistories`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/app/resource-manager/Microsoft.App/ContainerApps/LabelHistory.tsp#L33) — resource group scope
  - [`deleteLabelHistory`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/app/resource-manager/Microsoft.App/ContainerApps/LabelHistory.tsp#L144) — `DELETE` (delete)
  - [`getLabelHistory`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/app/resource-manager/Microsoft.App/ContainerApps/LabelHistory.tsp#L138) — `GET` (read)
  - [`listLabelHistory`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/app/resource-manager/Microsoft.App/ContainerApps/LabelHistory.tsp#L150) — `GET` (list)
- [`Microsoft.App/containerApps/labelHistory`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/app/resource-manager/Microsoft.App/ContainerApps/LabelHistory.tsp#L15) — resource group scope
  - [`deleteLabelHistory`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/app/resource-manager/Microsoft.App/ContainerApps/LabelHistory.tsp#L112) — `DELETE` (delete)
  - [`getLabelHistory`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/app/resource-manager/Microsoft.App/ContainerApps/LabelHistory.tsp#L106) — `GET` (read)
  - [`listLabelHistory`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/app/resource-manager/Microsoft.App/ContainerApps/LabelHistory.tsp#L118) — `GET` (list)
