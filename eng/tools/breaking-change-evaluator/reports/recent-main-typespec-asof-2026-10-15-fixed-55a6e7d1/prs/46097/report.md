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

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-3e50b8c9b539519e` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

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

## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

Both detectors reported zero non-error findings.
