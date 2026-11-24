# no-resource-name-conflict details

- Spec: `specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- [Aggregate report](../../../../../../documentation/typespec-arm-resource-data/Report_20261124_no-resource-name-conflict/README.md)
- [Machine-readable diagnostics](diagnostics.json)

## Conflicts

### NRNC-88CE4575F6EE

**Logical resource name:** `ClusterResource`  
**Diagnostic:** [`specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp:162:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L162)  
**Correlation:** `matched`  
**Recommendation (override-operation-resource-name):** Set the optional resource-name argument on the ARM resource decorator for `getCommandAsync` to a distinct value such as `ClusterResourceResourceGroup`, and use the same value for every operation that belongs to this resolved resource. If the operations are currently declared independently, refactor them into one resource operation interface so the name is defined once.

**Evidence:**

- `getCommandAsync` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L162).
- It is instantiated from `ArmResourceRead`.
- It is declared in interface `ClusterResources` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L52).
- The conflicting operation resolves to `Microsoft.DocumentDB/cassandraClusters/commands`.

**Conflicting resources and operations:**

- [`Microsoft.DocumentDB/cassandraClusters/backups`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L15) — resource group scope
  - [`getBackup`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L203) — `GET` (read)
- [`Microsoft.DocumentDB/cassandraClusters/commands`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L15) — resource group scope
  - [`getCommandAsync`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L162) — `GET` (read)
- [`Microsoft.DocumentDB/cassandraClusters`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L15) — resource group scope
  - [`createUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L59) — `PUT` (createOrUpdate)
  - [`deallocate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L228) — `POST` (action)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L87) — `DELETE` (delete)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L54) — `GET` (read)
  - [`invokeCommand`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L113) — `POST` (action)
  - [`invokeCommandAsync`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L129) — `POST` (action)
  - [`listBackups`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L187) — `GET` (action)
  - [`listByResourceGroup`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L95) — `GET` (list)
  - [`listBySubscription`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L104) — `GET` (list)
  - [`listCommand`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L146) — `GET` (action)
  - [`start`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L240) — `POST` (action)
  - [`status`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L251) — `GET` (action)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L69) — `PATCH` (update)

### NRNC-EBB3A4E448DC

**Logical resource name:** `ClusterResource`  
**Diagnostic:** [`specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp:203:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L203)  
**Correlation:** `matched`  
**Recommendation (override-operation-resource-name):** Set the optional resource-name argument on the ARM resource decorator for `getBackup` to a distinct value such as `ClusterResourceResourceGroup`, and use the same value for every operation that belongs to this resolved resource. If the operations are currently declared independently, refactor them into one resource operation interface so the name is defined once.

**Evidence:**

- `getBackup` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L203).
- It is instantiated from `ArmResourceRead`.
- It is declared in interface `ClusterResources` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L52).
- The conflicting operation resolves to `Microsoft.DocumentDB/cassandraClusters/backups`.

**Conflicting resources and operations:**

- [`Microsoft.DocumentDB/cassandraClusters/backups`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L15) — resource group scope
  - [`getBackup`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L203) — `GET` (read)
- [`Microsoft.DocumentDB/cassandraClusters/commands`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L15) — resource group scope
  - [`getCommandAsync`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L162) — `GET` (read)
- [`Microsoft.DocumentDB/cassandraClusters`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L15) — resource group scope
  - [`createUpdate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L59) — `PUT` (createOrUpdate)
  - [`deallocate`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L228) — `POST` (action)
  - [`delete`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L87) — `DELETE` (delete)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L54) — `GET` (read)
  - [`invokeCommand`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L113) — `POST` (action)
  - [`invokeCommandAsync`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L129) — `POST` (action)
  - [`listBackups`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L187) — `GET` (action)
  - [`listByResourceGroup`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L95) — `GET` (list)
  - [`listBySubscription`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L104) — `GET` (list)
  - [`listCommand`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L146) — `GET` (action)
  - [`start`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L240) — `POST` (action)
  - [`status`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L251) — `GET` (action)
  - [`update`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/cosmos-db/resource-manager/Microsoft.DocumentDB/DocumentDB/ClusterResource.tsp#L69) — `PATCH` (update)
