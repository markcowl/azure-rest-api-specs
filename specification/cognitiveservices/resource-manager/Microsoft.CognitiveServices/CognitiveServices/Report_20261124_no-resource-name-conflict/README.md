# no-resource-name-conflict details

- Spec: `specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- [Aggregate report](../../../../../../documentation/typespec-arm-resource-data/Report_20261124_no-resource-name-conflict/README.md)
- [Machine-readable diagnostics](diagnostics.json)

## Conflicts

### NRNC-24C0A3AC2936

**Logical resource name:** `CognitiveServicesAccount`  
**Diagnostic:** [`specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp:282:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L282)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `createOrUpdate` a distinct logical resource name such as `CognitiveServicesAccountResourceGroup`. Pass that name through the `AccountOps.CreateOrUpdateSync` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `Accounts` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `createOrUpdate` is a `PUT` createOrUpdate operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L282).
- It is instantiated from `AccountOps.CreateOrUpdateSync`.
- It is declared in interface `Accounts` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L137).
- The conflicting operation resolves to `Microsoft.CognitiveServices/accounts/testRaiExternalSafetyProvider`.

**Conflicting resources and operations:**

- [`Microsoft.CognitiveServices/accounts/testRaiExternalSafetyProvider`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L15) — resource group scope
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L282) — `PUT` (createOrUpdate)
  - [`listByResourceGroup`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L198) — `GET` (list)
- [`Microsoft.CognitiveServices/accounts`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L15) — resource group scope
  - [`create`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L145) — `PUT` (createOrUpdate)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L185) — `DELETE` (delete)
  - [`evaluateDeploymentPolicies`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L305) — `POST` (action)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L139) — `GET` (read)
  - [`list`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L204) — `GET` (list)
  - [`listByResourceGroup`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L198) — `GET` (list)
  - [`listKeys`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L210) — `POST` (action)
  - [`listModels`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L257) — `GET` (action)
  - [`listSkus`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L226) — `GET` (action)
  - [`listUsages`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L238) — `GET` (action)
  - [`privateLinkResourcesList`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L270) — `GET` (action)
  - [`regenerateKey`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L216) — `POST` (action)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/CognitiveServices/Account.tsp#L165) — `PATCH` (update)
