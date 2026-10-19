# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-46097:cb882de13f716ea7c784be5f7c9e4ec5f0dacd1d`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46097 — [NetAppFiles] Release microsoft.net app 2026 07 01](https://github.com/Azure/azure-rest-api-specs/pull/46097)
- **Author:** audunn
- **State:** open
- **Base:** `main` at `ab48134ae8938d86e634d0a6a3eb5c660a6c4603`
- **Head:** `release-Microsoft.NetApp-2026-07-01` at `cb882de13f716ea7c784be5f7c9e4ec5f0dacd1d`
- **Changed TypeSpec files:** `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/ActiveDirectory.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Bucket.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Cache.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/CapacityPool.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticAccount.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticBackup.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticBackupPolicy.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticBackupVault.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticCapacityPool.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticRegionInfoResource.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticSnapshot.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticSnapshotPolicy.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticVolume.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/NetAppAccount.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Volume.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/VolumeQuotaRule.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/client.tsp`

## Not qualified

- `evidence-incomplete`

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
| — | Qualification | `evidence-incomplete` | [workflow 38601097584](https://github.com/Azure/azure-rest-api-specs/actions/runs/38601097584) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-3e50b8c9b539519e](#issue-evidence-gap-3e50b8c9b539519e). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-3e50b8c9b539519e` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

<a id="issue-evidence-gap-3e50b8c9b539519e"></a>
### issue-evidence-gap-3e50b8c9b539519e

- **Affected PRs:** #46097
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
  - `qualification:evidence-incomplete` — evidence-incomplete
  - `qualification:evidence-error-0` — oadCompareOutput was truncated by the workflow logger; complete OAD evidence is unavailable

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `evidence-incomplete`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/46097)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/38601097584)
