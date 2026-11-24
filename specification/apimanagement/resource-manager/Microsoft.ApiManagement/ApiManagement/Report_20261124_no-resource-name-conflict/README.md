# no-resource-name-conflict details

- Spec: `specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- [Aggregate report](../../../../../../documentation/typespec-arm-resource-data/Report_20261124_no-resource-name-conflict/README.md)
- [Machine-readable diagnostics](diagnostics.json)

## Conflicts

### NRNC-EA364DD9B64C

**Logical resource name:** `ApiManagementGroup`  
**Diagnostic:** [`specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp:330:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L330)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `create` a distinct logical resource name such as `ApiManagementGroupResourceGroup`. Pass that name through the `GroupContractOps.CreateOrUpdateSync` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `GroupContracts` and forward it consistently to every lifecycle/list operation for this resource. Separately remodel `checkEntityExists`, `groupUserDelete` as lifecycle operations because their verbs are not valid action verbs.

**Evidence:**

- `create` is a `PUT` createOrUpdate operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L330).
- It is instantiated from `GroupContractOps.CreateOrUpdateSync`.
- It is declared in interface `GroupContracts` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L155).
- The conflicting operation resolves to `Microsoft.ApiManagement/service/groups/users`.
- Lifecycle-looking operations classified as actions use unsupported action verbs: `checkEntityExists` (`HEAD`, [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L319)); `groupUserDelete` (`DELETE`, [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L352)).

**Conflicting resources and operations:**

- [`Microsoft.ApiManagement/service/groups/users`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L14) — resource group scope
  - [`create`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L330) — `PUT` (createOrUpdate)
  - [`listByService`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L255) — `GET` (list)
- [`Microsoft.ApiManagement/service/groups`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L14) — resource group scope
  - [`checkEntityExists`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L319) — `HEAD` (action)
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L185) — `PUT` (createOrUpdate)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L240) — `DELETE` (delete)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L157) — `GET` (read)
  - [`groupUserDelete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L352) — `DELETE` (action)
  - [`list`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L286) — `GET` (action)
  - [`listByService`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L255) — `GET` (list)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L216) — `PATCH` (update)

### NRNC-20EB9CD63E56

**Logical resource name:** `ServiceWorkspaceGroup`  
**Diagnostic:** [`specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp:580:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L580)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `create` a distinct logical resource name such as `ServiceWorkspaceGroupResourceGroup`. Pass that name through the `WorkspaceGroupOps.CreateOrUpdateSync` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `WorkspaceGroup` and forward it consistently to every lifecycle/list operation for this resource. Separately remodel `checkEntityExists`, `workspaceGroupUserDelete` as lifecycle operations because their verbs are not valid action verbs.

**Evidence:**

- `create` is a `PUT` createOrUpdate operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L580).
- It is instantiated from `WorkspaceGroupOps.CreateOrUpdateSync`.
- It is declared in interface `WorkspaceGroup` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L405).
- The conflicting operation resolves to `Microsoft.ApiManagement/service/workspaces/groups/users`.
- Lifecycle-looking operations classified as actions use unsupported action verbs: `checkEntityExists` (`HEAD`, [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L569)); `workspaceGroupUserDelete` (`DELETE`, [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L603)).

**Conflicting resources and operations:**

- [`Microsoft.ApiManagement/service/workspaces/groups/users`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L14) — resource group scope
  - [`create`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L580) — `PUT` (createOrUpdate)
  - [`listByService`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L505) — `GET` (list)
- [`Microsoft.ApiManagement/service/workspaces/groups`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L14) — resource group scope
  - [`checkEntityExists`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L569) — `HEAD` (action)
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L435) — `PUT` (createOrUpdate)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L490) — `DELETE` (delete)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L407) — `GET` (read)
  - [`list`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L536) — `GET` (action)
  - [`listByService`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L505) — `GET` (list)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L466) — `PATCH` (update)
  - [`workspaceGroupUserDelete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/GroupContract.tsp#L603) — `DELETE` (action)

### NRNC-AEB38325FB87

**Logical resource name:** `ServiceWorkspaceNotification`  
**Diagnostic:** [`specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp:481:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L481)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `workspaceNotificationRecipientUserCreateOrUpdate` a distinct logical resource name such as `ServiceWorkspaceNotificationResourceGroup`. Pass that name through the `WorkspaceNotificationOps.CreateOrUpdateSync` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `WorkspaceNotification` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `workspaceNotificationRecipientUserCreateOrUpdate` is a `PUT` createOrUpdate operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L481).
- It is instantiated from `WorkspaceNotificationOps.CreateOrUpdateSync`.
- It is declared in interface `WorkspaceNotification` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L411).
- The conflicting operation resolves to `Microsoft.ApiManagement/service/workspaces/notifications/recipientUsers`.

**Conflicting resources and operations:**

- [`Microsoft.ApiManagement/service/workspaces/notifications/recipientEmails`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L14) — resource group scope
  - [`listByService`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L438) — `GET` (list)
  - [`workspaceNotificationRecipientEmailCreateOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L534) — `PUT` (createOrUpdate)
- [`Microsoft.ApiManagement/service/workspaces/notifications/recipientUsers`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L14) — resource group scope
  - [`listByService`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L438) — `GET` (list)
  - [`workspaceNotificationRecipientUserCreateOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L481) — `PUT` (createOrUpdate)
- [`Microsoft.ApiManagement/service/workspaces/notifications`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L14) — resource group scope
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L420) — `PUT` (createOrUpdate)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L414) — `GET` (read)
  - [`listByNotification`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L461) — `GET` (action)
  - [`listByService`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L438) — `GET` (list)
  - [`workspaceNotificationRecipientEmailListByNotification`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L515) — `GET` (action)

### NRNC-193B3B296D57

**Logical resource name:** `ServiceWorkspaceNotification`  
**Diagnostic:** [`specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp:534:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L534)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `workspaceNotificationRecipientEmailCreateOrUpdate` a distinct logical resource name such as `ServiceWorkspaceNotificationResourceGroup`. Pass that name through the `WorkspaceNotificationOps.CreateOrUpdateSync` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `WorkspaceNotification` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `workspaceNotificationRecipientEmailCreateOrUpdate` is a `PUT` createOrUpdate operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L534).
- It is instantiated from `WorkspaceNotificationOps.CreateOrUpdateSync`.
- It is declared in interface `WorkspaceNotification` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L411).
- The conflicting operation resolves to `Microsoft.ApiManagement/service/workspaces/notifications/recipientEmails`.

**Conflicting resources and operations:**

- [`Microsoft.ApiManagement/service/workspaces/notifications/recipientEmails`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L14) — resource group scope
  - [`listByService`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L438) — `GET` (list)
  - [`workspaceNotificationRecipientEmailCreateOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L534) — `PUT` (createOrUpdate)
- [`Microsoft.ApiManagement/service/workspaces/notifications/recipientUsers`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L14) — resource group scope
  - [`listByService`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L438) — `GET` (list)
  - [`workspaceNotificationRecipientUserCreateOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L481) — `PUT` (createOrUpdate)
- [`Microsoft.ApiManagement/service/workspaces/notifications`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L14) — resource group scope
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L420) — `PUT` (createOrUpdate)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L414) — `GET` (read)
  - [`listByNotification`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L461) — `GET` (action)
  - [`listByService`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L438) — `GET` (list)
  - [`workspaceNotificationRecipientEmailListByNotification`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/NotificationContract.tsp#L515) — `GET` (action)

### NRNC-0FAD4B98EE2E

**Logical resource name:** `ApiManagementProduct`  
**Diagnostic:** [`specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp:339:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L339)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `productApiCreateOrUpdate` a distinct logical resource name such as `ApiManagementProductResourceGroup`. Pass that name through the `ProductContractOps.CreateOrUpdateSync` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `ProductContracts` and forward it consistently to every lifecycle/list operation for this resource. Separately remodel `checkEntityExists`, `productApiDelete`, `productGroupCheckEntityExists`, `productGroupDelete` as lifecycle operations because their verbs are not valid action verbs.

**Evidence:**

- `productApiCreateOrUpdate` is a `PUT` createOrUpdate operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L339).
- It is instantiated from `ProductContractOps.CreateOrUpdateSync`.
- It is declared in interface `ProductContracts` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L149).
- The conflicting operation resolves to `Microsoft.ApiManagement/service/products/apis`.
- Lifecycle-looking operations classified as actions use unsupported action verbs: `checkEntityExists` (`HEAD`, [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L328)); `productApiDelete` (`DELETE`, [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L363)); `productGroupCheckEntityExists` (`HEAD`, [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L410)); `productGroupDelete` (`DELETE`, [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L444)).

**Conflicting resources and operations:**

- [`Microsoft.ApiManagement/service/products/apis`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L14) — resource group scope
  - [`listByService`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L254) — `GET` (list)
  - [`productApiCreateOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L339) — `PUT` (createOrUpdate)
- [`Microsoft.ApiManagement/service/products/groups`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L14) — resource group scope
  - [`listByService`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L254) — `GET` (list)
  - [`productGroupCreateOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L421) — `PUT` (createOrUpdate)
- [`Microsoft.ApiManagement/service/products`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L14) — resource group scope
  - [`checkEntityExists`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L328) — `HEAD` (action)
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L179) — `PUT` (createOrUpdate)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L233) — `DELETE` (delete)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L151) — `GET` (read)
  - [`list`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L458) — `GET` (action)
  - [`listByProduct`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L295) — `GET` (action)
  - [`listByService`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L254) — `GET` (list)
  - [`productApiDelete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L363) — `DELETE` (action)
  - [`productGroupCheckEntityExists`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L410) — `HEAD` (action)
  - [`productGroupDelete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L444) — `DELETE` (action)
  - [`productGroupListByProduct`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L377) — `GET` (action)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L209) — `PATCH` (update)

### NRNC-A089353351F3

**Logical resource name:** `ApiManagementProduct`  
**Diagnostic:** [`specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp:421:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L421)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `productGroupCreateOrUpdate` a distinct logical resource name such as `ApiManagementProductResourceGroup`. Pass that name through the `ProductContractOps.CreateOrUpdateSync` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `ProductContracts` and forward it consistently to every lifecycle/list operation for this resource. Separately remodel `checkEntityExists`, `productApiDelete`, `productGroupCheckEntityExists`, `productGroupDelete` as lifecycle operations because their verbs are not valid action verbs.

**Evidence:**

- `productGroupCreateOrUpdate` is a `PUT` createOrUpdate operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L421).
- It is instantiated from `ProductContractOps.CreateOrUpdateSync`.
- It is declared in interface `ProductContracts` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L149).
- The conflicting operation resolves to `Microsoft.ApiManagement/service/products/groups`.
- Lifecycle-looking operations classified as actions use unsupported action verbs: `checkEntityExists` (`HEAD`, [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L328)); `productApiDelete` (`DELETE`, [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L363)); `productGroupCheckEntityExists` (`HEAD`, [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L410)); `productGroupDelete` (`DELETE`, [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L444)).

**Conflicting resources and operations:**

- [`Microsoft.ApiManagement/service/products/apis`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L14) — resource group scope
  - [`listByService`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L254) — `GET` (list)
  - [`productApiCreateOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L339) — `PUT` (createOrUpdate)
- [`Microsoft.ApiManagement/service/products/groups`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L14) — resource group scope
  - [`listByService`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L254) — `GET` (list)
  - [`productGroupCreateOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L421) — `PUT` (createOrUpdate)
- [`Microsoft.ApiManagement/service/products`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L14) — resource group scope
  - [`checkEntityExists`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L328) — `HEAD` (action)
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L179) — `PUT` (createOrUpdate)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L233) — `DELETE` (delete)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L151) — `GET` (read)
  - [`list`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L458) — `GET` (action)
  - [`listByProduct`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L295) — `GET` (action)
  - [`listByService`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L254) — `GET` (list)
  - [`productApiDelete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L363) — `DELETE` (action)
  - [`productGroupCheckEntityExists`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L410) — `HEAD` (action)
  - [`productGroupDelete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L444) — `DELETE` (action)
  - [`productGroupListByProduct`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L377) — `GET` (action)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/ProductContract.tsp#L209) — `PATCH` (update)
