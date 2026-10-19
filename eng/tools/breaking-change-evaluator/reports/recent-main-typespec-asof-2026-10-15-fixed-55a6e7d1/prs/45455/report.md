# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-45455:ec0ff8a801d7ac3edb2378013b1dededfdae9546`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#45455 — Add Chaos 2026-11-01 stable API version](https://github.com/Azure/azure-rest-api-specs/pull/45455)
- **Author:** juliagao3
- **State:** open
- **Base:** `main` at `a4c2a18ee4d0b1885d66a001145e56744acd9baf`
- **Head:** `juliagao-microsoft-chaos-2026-11-ga-promotion` at `ec0ff8a801d7ac3edb2378013b1dededfdae9546`
- **Changed TypeSpec files:** `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/client.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/discoveredResource.models.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/main.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/privateAccess.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/privateEndpointConnection.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/scenario.models.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/scenarioConfiguration.models.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/scenarioRun.models.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/scenarioTemplate.models.tsp`, `specification/chaos/resource-manager/Microsoft.Chaos/Chaos/scenarioTemplate.tsp`

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
| — | Qualification | `evidence-incomplete` | [workflow 38647092551](https://github.com/Azure/azure-rest-api-specs/actions/runs/38647092551) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-b89740a8cf340e64](#issue-evidence-gap-b89740a8cf340e64). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-b89740a8cf340e64` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

<a id="issue-evidence-gap-b89740a8cf340e64"></a>
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

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `evidence-incomplete`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/45455)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/38647092551)
