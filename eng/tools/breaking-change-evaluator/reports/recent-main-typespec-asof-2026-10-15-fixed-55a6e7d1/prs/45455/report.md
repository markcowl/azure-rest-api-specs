# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-45455:ec0ff8a801d7ac3edb2378013b1dededfdae9546`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#45455 — Add Chaos 2026-11-01 stable API version](http<local-path>)
- **Author:** juliagao3
- **State:** open
- **Base:** `main` at `a4c2a18ee4d0b1885d66a001145e56744acd9baf`
- **Head:** `juliagao-microsoft-chaos-2026-11-ga-promotion` at `ec0ff8a801d7ac3edb2378013b1dededfdae9546`
- **Changed TypeSpec files:** `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/client.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/discoveredResource.models.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/main.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/privateAccess.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/privateEndpointConnection.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/scenario.models.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/scenarioConfiguration.models.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/scenarioRun.models.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/scenarioTemplate.models.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/scenarioTemplate.tsp`

## Not qualified

- `evidence-incomplete`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-b89740a8cf340e64` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-b89740a8cf340e64

- **Affected PRs:** #45455
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
