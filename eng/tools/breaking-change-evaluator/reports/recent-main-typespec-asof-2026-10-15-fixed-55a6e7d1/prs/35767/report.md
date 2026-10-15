# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-35767:cd1a17dc3f61db6c461fbe5f952f872d98556b39`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#35767 — Add sdk emmiter for python js java](https://github.com/Azure/azure-rest-api-specs/pull/35767)
- **Author:** amber-Chen-86
- **State:** open
- **Base:** `main` at `b464a76895ea6f17747d4664b935d0dc55fa06c4`
- **Head:** `amber-cc/add_sdk_emmiter_for_python_js_java` at `cd1a17dc3f61db6c461fbe5f952f872d98556b39`
- **Changed TypeSpec files:** `specification/cognitiveservices/data-plane/LanguageAnalyzeConversationsAuthoring/tspconfig.yaml`, `specification/cognitiveservices/data-plane/LanguageAnalyzeTextAuthoring/tspconfig.yaml`

## Not qualified

- `missing-run-logs`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-f08d0f403cf9751a` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-f08d0f403cf9751a

- **Affected PRs:** #35767
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
  - `qualification:missing-run-logs` — missing-run-logs

## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

Both detectors reported zero non-error findings.
