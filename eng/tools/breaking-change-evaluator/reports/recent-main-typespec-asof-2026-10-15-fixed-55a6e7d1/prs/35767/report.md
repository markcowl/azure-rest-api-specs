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

## Finding review

Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.

### Correlations

None.

### Partial correlations

None.

### OAD-only findings

None.

### TypeSpec-only findings

None.

### Ambiguous findings

None.

### Evidence and execution failures

| Phase | Scope | Failure | Available evidence | Analysis | Details |
| --- | --- | --- | --- | --- | --- |
| — | Qualification | `missing-run-logs` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-f08d0f403cf9751a](#issue-evidence-gap-f08d0f403cf9751a). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-f08d0f403cf9751a` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

<a id="issue-evidence-gap-f08d0f403cf9751a"></a>
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

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `missing-run-logs`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/35767)
- **Workflow evidence:** unavailable
