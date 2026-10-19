# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-45102:7d7571383e4c36cf95e5bef3f87fc1fd72bf8177`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#45102 — [Event Grid] Add Control Plane API Version 2026-06-15-preview](https://github.com/Azure/azure-rest-api-specs/pull/45102)
- **Author:** priyanshuvats
- **State:** closed (merged) at 2026-10-09T11:45:32Z
- **Base:** `main` at `663934c93853cb58f6477c2e8e0f48d5eca2d770`
- **Head:** `users/pvats/eg-cp-swagger-2026-06-15-preview` at `7d7571383e4c36cf95e5bef3f87fc1fd72bf8177`
- **Changed TypeSpec files:** `specification/eventgrid/resource-manager/Microsoft.EventGrid/EventGrid/client.tsp`, `specification/eventgrid/resource-manager/Microsoft.EventGrid/EventGrid/main.tsp`, `specification/eventgrid/resource-manager/Microsoft.EventGrid/EventGrid/models.tsp`

## Not qualified

- `evidence-incomplete`

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
| — | Qualification | `evidence-incomplete` | [workflow 37901819582](https://github.com/Azure/azure-rest-api-specs/actions/runs/37901819582) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-c56489643b2e710b](#issue-evidence-gap-c56489643b2e710b). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-c56489643b2e710b` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

<a id="issue-evidence-gap-c56489643b2e710b"></a>
### issue-evidence-gap-c56489643b2e710b

- **Affected PRs:** #45102
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

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `evidence-incomplete`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/45102)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/37901819582)
