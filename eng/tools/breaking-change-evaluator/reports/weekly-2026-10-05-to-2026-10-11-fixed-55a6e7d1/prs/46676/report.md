# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-46676:f3bc00ac861e4b9f15b968285c8de52fb62c05ef`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46676 — Add AppNetwork provisioning emitter config](http<local-path>)
- **Author:** HarveyLink
- **State:** closed (merged) at 2026-10-08T08:33:35Z
- **Base:** `main` at `6a1a4ddcb4281de3a1f7c966794f2516628cad52`
- **Head:** `provisioning-appnetwork-emitter` at `f3bc00ac861e4b9f15b968285c8de52fb62c05ef`
- **Changed TypeSpec files:** `specification/applink/AppLink.Management/tspconfig.yaml`

## Not qualified

- `run-association-unverified`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-2b32a7951c1ecd8d` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-2b32a7951c1ecd8d

- **Affected PRs:** #46676
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
