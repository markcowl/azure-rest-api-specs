# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-46300:e5236cc01cd9f79493b2bef33f0df3ffb26501bd`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46300 — Add Microsoft.Cdn 2026-09-01-preview API version](https://github.com/Azure/azure-rest-api-specs/pull/46300)
- **Author:** HandsomeJay
- **State:** open
- **Base:** `main` at `fcc20ab8473a30946221a1b876c89aa9f61447b9`
- **Head:** `release-microsoft-cdn-2026-09-01-preview` at `e5236cc01cd9f79493b2bef33f0df3ffb26501bd`
- **Changed TypeSpec files:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn/AuthPolicy.tsp`, `specification/cdn/resource-manager/Microsoft.Cdn/Cdn/ErrorPolicy.tsp`, `specification/cdn/resource-manager/Microsoft.Cdn/Cdn/back-compatible.tsp`

## Not qualified

- `invalid-oad-output`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-e3c25446ee2adc0a` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-e3c25446ee2adc0a

- **Affected PRs:** #46300
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
