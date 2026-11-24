# no-resource-name-conflict details

- Spec: `specification/security/resource-manager/Microsoft.Security/Security/TasksAPI`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- [Aggregate report](../../../../../../../documentation/typespec-arm-resource-data/Report_20261124_no-resource-name-conflict/README.md)
- [Machine-readable diagnostics](diagnostics.json)

## Conflicts

### NRNC-426C67E097B2

**Logical resource name:** `LocationsTasks`  
**Diagnostic:** [`specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/SecurityTask.tsp:174:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/SecurityTask.tsp#L174)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `getResourceGroupLevelTask` a distinct logical resource name such as `LocationsTasksResourceGroup`. Pass that name through the `TaskOps.Read` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `Tasks` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `getResourceGroupLevelTask` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/SecurityTask.tsp#L174).
- It is instantiated from `TaskOps.Read`.
- It is declared in interface `Tasks` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/SecurityTask.tsp#L172).
- The conflicting operation resolves to `Microsoft.Security/locations/tasks`.

**Conflicting resources and operations:**

- [`Microsoft.Security/locations/tasks`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/SecurityTask.tsp#L15) — subscription scope
  - [`getSubscriptionLevelTask`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/SecurityTask.tsp#L81) — `GET` (read)
  - [`listByHomeRegion`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/SecurityTask.tsp#L90) — `GET` (list)
  - [`updateSubscriptionLevelTaskState`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/SecurityTask.tsp#L107) — `POST` (action)
- [`Microsoft.Security/locations/tasks`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/SecurityTask.tsp#L15) — resource group scope
  - [`getResourceGroupLevelTask`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/SecurityTask.tsp#L174) — `GET` (read)
  - [`listByResourceGroup`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/SecurityTask.tsp#L182) — `GET` (list)
  - [`updateResourceGroupLevelTaskState`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/TasksAPI/SecurityTask.tsp#L198) — `POST` (action)
