# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47031:204593567a7b8f5c93365f4d1f91eb8ff3d9130d`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47031 — Azure Local november preview api](https://github.com/Azure/azure-rest-api-specs/pull/47031)
- **Author:** abaranwal-ms
- **State:** open
- **Base:** `main` at `7507c3df4b8bf6c5887d8571f929b6e393479f2f`
- **Head:** `users/abaranwal-ms/nov-pub-preview` at `204593567a7b8f5c93365f4d1f91eb8ff3d9130d`
- **Changed TypeSpec files:** `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/CapacitySetting.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/Cluster.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/ClusterVolume.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/DevicePool.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/EdgeMachineGpu.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/EdgeMachineUpdate.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/KubernetesVersions.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/NetworkProfile.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/PlatformUpdates.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/ProxyConfiguration.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/Publisher.tsp`, `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/UpdateContents.tsp`

## Not qualified

- `evidence-incomplete`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-cbd709bf03edbe5d` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-cbd709bf03edbe5d

- **Affected PRs:** #47031
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
