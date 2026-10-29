# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Report ID:** `merged-2026-10-15-to-2026-10-29-7824998e:pr-46097:c66a611a79bd3cfb60ea58cbe30a41efcc50ea57`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46097 — [NetAppFiles] Release microsoft.net app 2026 07 01](https://github.com/Azure/azure-rest-api-specs/pull/46097)
- **Author:** audunn
- **State:** closed (merged) at 2026-10-15T16:12:43Z
- **Base:** `main` at `5b6e8f31b1b893b1a2fe56ac64aef5caea37f056`
- **Head:** `release-Microsoft.NetApp-2026-07-01` at `c66a611a79bd3cfb60ea58cbe30a41efcc50ea57`
- **Changed TypeSpec files:** `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/ActiveDirectory.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Bucket.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Cache.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/CapacityPool.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticAccount.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticBackup.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticBackupPolicy.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticBackupVault.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticCapacityPool.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticRegionInfoResource.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticSnapshot.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticSnapshotPolicy.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Elastic/ElasticVolume.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/NetAppAccount.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/Volume.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/VolumeQuotaRule.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/client.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/main.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/models.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/tspconfig.yaml`

## Not qualified

- `evidence-incomplete`

<a id="finding-review"></a>
## Finding review

Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.

<a id="finding-review-correlations"></a>
### Correlations

None.

<a id="finding-review-partial"></a>
### Partial correlations

None.

<a id="finding-review-oad-only"></a>
### OAD-only findings

None.

<a id="finding-review-typespec-only"></a>
### TypeSpec-only findings

None.

<a id="finding-review-ambiguous"></a>
### Ambiguous findings

None.

<a id="finding-review-errors"></a>
### Evidence and execution failures

| Phase | Scope | Failure | Available evidence | Analysis | Details |
| --- | --- | --- | --- | --- | --- |
| — | Qualification | `evidence-incomplete` | [workflow 38763926170](https://github.com/Azure/azure-rest-api-specs/actions/runs/38763926170) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-5f7b933cd9af53a6](#issue-evidence-gap-5f7b933cd9af53a6). | [details](#qualification-error-1) |

<a id="finding-review-intentional"></a>
### Intentional Swagger-only gaps

None.

<a id="finding-review-informational"></a>
### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-evidence-gap-5f7b933cd9af53a6"></a>`issue-evidence-gap-5f7b933cd9af53a6` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:evidence-incomplete` — evidence-incomplete<br>`qualification:evidence-error-0` — oadCompareOutput was truncated by the workflow logger; complete OAD evidence is unavailable |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `evidence-incomplete`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/46097)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/38763926170)
