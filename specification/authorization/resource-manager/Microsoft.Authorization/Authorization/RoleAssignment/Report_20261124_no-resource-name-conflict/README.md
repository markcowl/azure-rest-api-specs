# no-resource-name-conflict details

- Spec: `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- [Aggregate report](../../../../../../../documentation/typespec-arm-resource-data/Report_20261124_no-resource-name-conflict/README.md)
- [Machine-readable diagnostics](diagnostics.json)

## Conflicts

### NRNC-0E22E0B715C8

**Logical resource name:** `RoleAssignment`  
**Diagnostic:** [`specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/RoleAssignment.tsp:153:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/RoleAssignment.tsp#L153)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `get` a distinct logical resource name such as `RoleAssignmentRoleAssignments`. Pass that name through the `RoleAssignmentQuerysOps.Read` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `RoleAssignments` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `get` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/RoleAssignment.tsp#L153).
- It is instantiated from `RoleAssignmentQuerysOps.Read`.
- It is declared in interface `RoleAssignments` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/RoleAssignment.tsp#L151).
- The conflicting operation resolves to `Microsoft.Authorization/roleAssignments`.

**Conflicting resources and operations:**

- [`untyped resource`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/RoleAssignment.tsp#L13) — custom scope
  - [`createById`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/RoleAssignment.tsp#L306) — `PUT` (createOrUpdate)
  - [`deleteById`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/RoleAssignment.tsp#L315) — `DELETE` (delete)
  - [`getById`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/RoleAssignment.tsp#L291) — `GET` (read)
- [`Microsoft.Authorization/roleAssignments`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/RoleAssignment.tsp#L13) — tenant or provider scope
  - [`create`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/RoleAssignment.tsp#L158) — `PUT` (createOrUpdate)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/RoleAssignment.tsp#L166) — `DELETE` (delete)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/RoleAssignment.tsp#L153) — `GET` (read)
  - [`listForScope`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/RoleAssignment.tsp#L175) — `GET` (list)
