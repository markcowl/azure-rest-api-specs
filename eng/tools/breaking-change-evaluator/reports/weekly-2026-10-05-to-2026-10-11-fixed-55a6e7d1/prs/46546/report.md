# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-46546:e01923a2a13ad69cd2f79e9df11c2afab275b4b0`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46546 — Refactor(storage): migrate to unified folder structure](https://github.com/Azure/azure-rest-api-specs/pull/46546)
- **Author:** v-jiaodi
- **State:** closed (merged) at 2026-10-09T05:57:56Z
- **Base:** `main` at `be97609d55160e8d06e2fcbba9ddefbf2ee89bf8`
- **Head:** `refactor-folder-storage` at `e01923a2a13ad69cd2f79e9df11c2afab275b4b0`
- **Changed TypeSpec files:** `specification/storage/data-plane/QueueStorage/tspconfig.yaml`, `specification/storage/resource-manager/Microsoft.Storage/Storage/AdvancedPlatformMetrics.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/BlobAccessPointConfiguration.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/BlobContainer.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/BlobInventoryPolicy.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/BlobServiceProperties.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/DeletedAccount.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/EncryptionScope.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/FileServiceProperties.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/FileServiceUsage.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/FileShare.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/ImmutabilityPolicy.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/LocalUser.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/ManagementPolicy.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/NetworkSecurityPerimeterConfiguration.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/ObjectReplicationPolicy.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/PrivateEndpointConnection.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/QueueServiceProperties.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/StorageAccount.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/StorageAccountMigration.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/StorageConnector.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/StorageContextCache.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/StorageContextCacheContainer.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/StorageDataShare.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/StorageQueue.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/StorageTaskAssignment.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/Table.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/TableServiceProperties.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/back-compatible.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/client.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/main.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/models.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/routes.tsp`

## Not qualified

- `run-association-unverified`

## Finding review

Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.

### Correlations

None.

### Partial correlations

None.

### OAD-only findings

None.

### TypeSpec-only findings

None.

### Ambiguous findings

None.

### Evidence and execution failures

| Phase | Scope | Failure | Available evidence | Analysis | Details |
| --- | --- | --- | --- | --- | --- |
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-76de4729ce4dc5d0](#issue-evidence-gap-76de4729ce4dc5d0). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-76de4729ce4dc5d0` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

<a id="issue-evidence-gap-76de4729ce4dc5d0"></a>
### issue-evidence-gap-76de4729ce4dc5d0

- **Affected PRs:** #46546
- **Phases:** A, B
- **Finding IDs:** none
- **Category:** `evidence-gap`
- **Conclusion:** insufficient-evidence
- **Confidence:** high
- **Rationale:** Required independent OAD evidence is missing, incomplete, or invalid.
- **Aggregate impact:** Excludes this report from complete-run effectiveness totals.
- **Suggested fix:** Restore immutable workflow logs and job-summary evidence, then rerun.
- **Status:** generated
- **Evidence:**
  - `qualification:run-association-unverified` — run-association-unverified

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/46546)
- **Workflow evidence:** unavailable
