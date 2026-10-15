# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-45406:1f464980bf761f1eebed95532f109ae94abec801`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#45406 — [Microsoft.Web] Introduce api version 2026-09-01 and VirtualConnections Entity](https://github.com/Azure/azure-rest-api-specs/pull/45406)
- **Author:** cmriachi
- **State:** open
- **Base:** `main` at `e35ce3d9e784cc6c298ae85608b9f79e7c833d28`
- **Head:** `feature/microsoft-web-virtualconnections-2026-09-01` at `1f464980bf761f1eebed95532f109ae94abec801`
- **Changed TypeSpec files:** `specification/web/resource-manager/Microsoft.Web/AppService/EgressConfig.tsp`, `specification/web/resource-manager/Microsoft.Web/AppService/back-compatible.tsp`

## Not qualified

- `invalid-oad-output`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-9b07c59200b00d3f` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-9b07c59200b00d3f

- **Affected PRs:** #45406
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
  - `qualification:evidence-error-0` — Job summary occurrence counts are lower than the complete OAD log findings

## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

Both detectors reported zero non-error findings.
