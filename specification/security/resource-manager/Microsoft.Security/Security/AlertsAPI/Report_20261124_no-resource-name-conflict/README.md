# no-resource-name-conflict details

- Spec: `specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- [Aggregate report](../../../../../../../documentation/typespec-arm-resource-data/Report_20261124_no-resource-name-conflict/README.md)
- [Machine-readable diagnostics](diagnostics.json)

## Conflicts

### NRNC-92DE63B71BEA

**Logical resource name:** `LocationsAlerts`  
**Diagnostic:** [`specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp:144:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp#L144)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `getResourceGroupLevel` a distinct logical resource name such as `LocationsAlertsResourceGroup`. Pass that name through the `AlertOperationGroupOps.Read` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `AlertOperationGroup` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `getResourceGroupLevel` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp#L144).
- It is instantiated from `AlertOperationGroupOps.Read`.
- It is declared in interface `AlertOperationGroup` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp#L142).
- The conflicting operation resolves to `Microsoft.Security/locations/alerts`.

**Conflicting resources and operations:**

- [`Microsoft.Security/locations/alerts`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp#L15) — subscription scope
  - [`getSubscriptionLevel`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp#L56) — `GET` (read)
  - [`listSubscriptionLevelByRegion`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp#L62) — `GET` (list)
  - [`updateSubscriptionLevelStateToActivate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp#L96) — `POST` (action)
  - [`updateSubscriptionLevelStateToDismiss`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp#L72) — `POST` (action)
  - [`updateSubscriptionLevelStateToInProgress`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp#L108) — `POST` (action)
  - [`updateSubscriptionLevelStateToResolve`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp#L84) — `POST` (action)
- [`Microsoft.Security/locations/alerts`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp#L15) — resource group scope
  - [`getResourceGroupLevel`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp#L144) — `GET` (read)
  - [`listResourceGroupLevelByRegion`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp#L153) — `GET` (list)
  - [`updateResourceGroupLevelStateToActivate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp#L186) — `POST` (action)
  - [`updateResourceGroupLevelStateToDismiss`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp#L174) — `POST` (action)
  - [`updateResourceGroupLevelStateToInProgress`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp#L198) — `POST` (action)
  - [`updateResourceGroupLevelStateToResolve`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/security/resource-manager/Microsoft.Security/Security/AlertsAPI/Alert.tsp#L162) — `POST` (action)
