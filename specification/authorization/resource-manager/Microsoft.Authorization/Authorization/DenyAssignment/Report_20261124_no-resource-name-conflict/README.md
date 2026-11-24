# no-resource-name-conflict details

- Spec: `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- [Aggregate report](../../../../../../../documentation/typespec-arm-resource-data/Report_20261124_no-resource-name-conflict/README.md)
- [Machine-readable diagnostics](diagnostics.json)

## Conflicts

### NRNC-D1395B591722

**Logical resource name:** `DenyAssignment`  
**Diagnostic:** [`specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/DenyAssignment.tsp:115:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/DenyAssignment.tsp#L115)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `get` a distinct logical resource name such as `DenyAssignmentDenyAssignments`. Pass that name through the `Extension.Read` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `DenyAssignments` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `get` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/DenyAssignment.tsp#L115).
- It is instantiated from `Extension.Read`.
- It is declared in interface `DenyAssignments` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/DenyAssignment.tsp#L113).
- The conflicting operation resolves to `Microsoft.Authorization/denyAssignments`.

**Conflicting resources and operations:**

- [`untyped resource`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/DenyAssignment.tsp#L13) — custom scope
  - [`getById`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/DenyAssignment.tsp#L191) — `GET` (read)
- [`Microsoft.Authorization/denyAssignments`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/DenyAssignment.tsp#L13) — tenant or provider scope
  - [`createOrUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/DenyAssignment.tsp#L120) — `PUT` (createOrUpdate)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/DenyAssignment.tsp#L128) — `DELETE` (delete)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/DenyAssignment.tsp#L115) — `GET` (read)
  - [`listForScope`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/DenyAssignment.tsp#L147) — `GET` (list)
