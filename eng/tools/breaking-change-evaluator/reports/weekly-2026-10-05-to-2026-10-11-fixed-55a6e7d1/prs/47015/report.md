# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-47015:773177d408a37dd4a9757e85372b570eb0885190`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47015 — Release Network API Version 2026-03-01](https://github.com/Azure/azure-rest-api-specs/pull/47015)
- **Author:** santoshgh317
- **State:** closed (merged) at 2026-10-09T09:44:37Z
- **Base:** `main` at `abfe7853f1382c8124b23be81984196102fd9343`
- **Head:** `release-microsoft-network-2026-03-01` at `773177d408a37dd4a9757e85372b570eb0885190`
- **Changed TypeSpec files:** `specification/network/resource-manager/Microsoft.Network/Network/Common/main.tsp`, `specification/network/resource-manager/Microsoft.Network/Network/Network/ExpressRouteLagAuthorization.tsp`, `specification/network/resource-manager/Microsoft.Network/Network/Network/VirtualNetworkApplianceCapability.tsp`, `specification/network/resource-manager/Microsoft.Network/Network/Network/back-compatible.tsp`, `specification/network/resource-manager/Microsoft.Network/Network/Network/main.tsp`, `specification/network/resource-manager/Microsoft.Network/Network/Network/models.tsp`, `specification/network/resource-manager/Microsoft.Network/Network/Vmss/main.tsp`, `specification/network/resource-manager/Microsoft.Network/Network/client.tsp`

## Not qualified

- `run-association-unverified`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-776fa59e9170f10a` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-776fa59e9170f10a

- **Affected PRs:** #47015
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

## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

Both detectors reported zero non-error findings.
