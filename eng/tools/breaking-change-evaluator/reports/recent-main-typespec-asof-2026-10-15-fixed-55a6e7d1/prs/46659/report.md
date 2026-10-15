# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-46659:e5e23772804f3eae6153a59ebb01eb6a893bb45f`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46659 — Add Azure Maps 2026-12-01 stable control plane api version.](https://github.com/Azure/azure-rest-api-specs/pull/46659)
- **Author:** rishikaparashar
- **State:** open
- **Base:** `main` at `8f99c33c108147fcc716e71a764010084fe5d034`
- **Head:** `maps-control-plane-stable-2026-12-01` at `e5e23772804f3eae6153a59ebb01eb6a893bb45f`
- **Changed TypeSpec files:** `specification/maps/resource-manager/Microsoft.Maps/Maps/Creator.tsp`, `specification/maps/resource-manager/Microsoft.Maps/Maps/MapsAccount.tsp`, `specification/maps/resource-manager/Microsoft.Maps/Maps/PrivateEndpointConnection.tsp`, `specification/maps/resource-manager/Microsoft.Maps/Maps/PrivateLinkResource.tsp`, `specification/maps/resource-manager/Microsoft.Maps/Maps/back-compatible.tsp`, `specification/maps/resource-manager/Microsoft.Maps/Maps/client.tsp`, `specification/maps/resource-manager/Microsoft.Maps/Maps/main.tsp`, `specification/maps/resource-manager/Microsoft.Maps/Maps/models.tsp`, `specification/maps/resource-manager/Microsoft.Maps/Maps/routes.tsp`, `specification/maps/resource-manager/Microsoft.Maps/Maps/tspconfig.yaml`

## Not qualified

- `run-association-unverified`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-c07aa8d89f92ba05` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-c07aa8d89f92ba05

- **Affected PRs:** #46659
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
