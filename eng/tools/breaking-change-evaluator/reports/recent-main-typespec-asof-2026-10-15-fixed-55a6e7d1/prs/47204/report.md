# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47204:057dd6a7e711b44ccb6c9bf44040e7f73ff6baff`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47204 — Release app Microsoft.App SreAgent stable/2026-07-01](http<local-path>)
- **Author:** RobiladK
- **State:** open
- **Base:** `main` at `56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f`
- **Head:** `release-app-Microsoft.App-SreAgent-stable/2026-07-01` at `057dd6a7e711b44ccb6c9bf44040e7f73ff6baff`
- **Changed TypeSpec files:** `specification/app/resource-manager/Microsoft.App/SreAgent/agent.models.tsp`, `specification/app/resource-manager/Microsoft.App/SreAgent/agentconnector.models.tsp`, `specification/app/resource-manager/Microsoft.App/SreAgent/agentconnector.tsp`, `specification/app/resource-manager/Microsoft.App/SreAgent/commontypes.tsp`, `specification/app/resource-manager/Microsoft.App/SreAgent/main.tsp`

## Not qualified

- `invalid-oad-output`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-d60da887f16b75d1` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-d60da887f16b75d1

- **Affected PRs:** #47204
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
