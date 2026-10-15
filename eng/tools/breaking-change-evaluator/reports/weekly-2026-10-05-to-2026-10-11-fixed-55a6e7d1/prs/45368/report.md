# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-45368:79ccd3d841bf5c15f0ee4844833584ae655ce279`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#45368 — Add DPS stable 2026-11-01 API version](https://github.com/Azure/azure-rest-api-specs/pull/45368)
- **Author:** mollyiverson
- **State:** closed (merged) at 2026-10-07T20:12:37Z
- **Base:** `main` at `5279ce43417174d87cc78d17729f1c81644805da`
- **Head:** `mollyiverson-microsoft-deviceprovisioningservices-Microsoft.Devices-2026-11-01` at `79ccd3d841bf5c15f0ee4844833584ae655ce279`
- **Changed TypeSpec files:** `specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices/main.tsp`, `specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices/models.tsp`

## Not qualified

- `invalid-oad-output`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-b46a4248996d3b0e` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-b46a4248996d3b0e

- **Affected PRs:** #45368
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
  - `qualification:invalid-oad-output` — invalid-oad-output
  - `qualification:evidence-error-0` — Job summary claims no findings but workflow logs contain OAD findings

## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

Both detectors reported zero non-error findings.
