# no-resource-name-conflict details

- Spec: `specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery`
- Source commit: `965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6`
- [Aggregate report](../../../../../../documentation/typespec-arm-resource-data/Report_20261124_no-resource-name-conflict/README.md)
- [Machine-readable diagnostics](diagnostics.json)

## Conflicts

### NRNC-C3024BF33419

**Logical resource name:** `SiteRecoveryReplicationProtectionClusterResource`  
**Diagnostic:** [`specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp:229:3`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp#L229)  
**Correlation:** `matched`  
**Recommendation (add-template-resource-name):** Give the operation set containing `getOperationResults` a distinct logical resource name such as `SiteRecoveryReplicationProtectionClusterResourceResourceGroup`. Pass that name through the `ReplicationProtectionClusterOperationGroupOps.Read` invocation using its `OverrideResourceName` argument, or add a `ResourceName` parameter to the containing interface template `ReplicationProtectionClusterOperationGroup` and forward it consistently to every lifecycle/list operation for this resource.

**Evidence:**

- `getOperationResults` is a `GET` read operation at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp#L229).
- It is instantiated from `ReplicationProtectionClusterOperationGroupOps.Read`.
- It is declared in interface `ReplicationProtectionClusterOperationGroup` at [source](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp#L226).
- The conflicting operation resolves to `Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionClusters/operationResults`.

**Conflicting resources and operations:**

- [`Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionClusters/operationResults`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp#L14) — resource group scope
  - [`getOperationResults`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp#L229) — `GET` (read)
  - [`listByReplicationProtectionContainers`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp#L235) — `GET` (list)
- [`Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers/replicationProtectionClusters`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp#L14) — resource group scope
  - [`applyRecoveryPoint`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp#L102) — `POST` (action)
  - [`create`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp#L75) — `PUT` (createOrUpdate)
  - [`failoverCommit`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp#L115) — `POST` (action)
  - [`get`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp#L69) — `GET` (read)
  - [`listByReplicationProtectionContainers`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp#L235) — `GET` (list)
  - [`purge`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp#L89) — `DELETE` (delete)
  - [`repairReplication`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp#L128) — `POST` (action)
  - [`testFailover`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp#L141) — `POST` (action)
  - [`testFailoverCleanup`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp#L154) — `POST` (action)
  - [`unplannedFailover`](https://github.com/Azure/azure-rest-api-specs/blob/965a33b4c632fb1aaf5f2ea02e6d603e1c81baa6/specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/SiteRecovery/ReplicationProtectionCluster.tsp#L167) — `POST` (action)
