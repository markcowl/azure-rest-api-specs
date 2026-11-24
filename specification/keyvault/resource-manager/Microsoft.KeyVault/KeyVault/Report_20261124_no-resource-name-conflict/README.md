# no-resource-name-conflict details

- Spec: `specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- [Aggregate report](../../../../../../documentation/typespec-arm-resource-data/Report_20261124_no-resource-name-conflict/README.md)
- [Machine-readable diagnostics](diagnostics.json)

## Conflicts

### NRNC-673CE84E235F

**Logical resource name:** `KeysVersions`  
**Diagnostic:** [`specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault/ManagedHsmKey.tsp:127:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault/ManagedHsmKey.tsp#L127)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `getVersion` a distinct logical resource name such as `KeysVersionsResourceGroup`. Pass that name through the `ManagedHsmKeyOperationGroupOps.Read` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `ManagedHsmKeyOperationGroup` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `getVersion` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault/ManagedHsmKey.tsp#L127).
- It is instantiated from `ManagedHsmKeyOperationGroupOps.Read`.
- It is declared in interface `ManagedHsmKeyOperationGroup` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault/ManagedHsmKey.tsp#L124).
- The conflicting operation resolves to `Microsoft.KeyVault/managedHSMs/keys/versions`.

**Conflicting resources and operations:**

- [`Microsoft.KeyVault/managedHSMs/keys/versions`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault/ManagedHsmKey.tsp#L14) — resource group scope
  - [`getVersion`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault/ManagedHsmKey.tsp#L127) — `GET` (read)
  - [`listVersions`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault/ManagedHsmKey.tsp#L135) — `GET` (list)
- [`Microsoft.KeyVault/vaults/keys/versions`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault/Key.tsp#L14) — resource group scope
  - [`getVersion`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault/Key.tsp#L127) — `GET` (read)
  - [`listVersions`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault/Key.tsp#L132) — `GET` (list)
