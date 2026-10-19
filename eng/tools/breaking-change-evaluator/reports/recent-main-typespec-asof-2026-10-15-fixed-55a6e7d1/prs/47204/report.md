# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47204:057dd6a7e711b44ccb6c9bf44040e7f73ff6baff`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47204 — Release app Microsoft.App SreAgent stable/2026-07-01](https://github.com/Azure/azure-rest-api-specs/pull/47204)
- **Author:** RobiladK
- **State:** open
- **Base:** `main` at `56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f`
- **Head:** `release-app-Microsoft.App-SreAgent-stable/2026-07-01` at `057dd6a7e711b44ccb6c9bf44040e7f73ff6baff`
- **Changed TypeSpec files:** `specification/app/resource-manager/Microsoft.App/SreAgent/agent.models.tsp`, `specification/app/resource-manager/Microsoft.App/SreAgent/agentconnector.models.tsp`, `specification/app/resource-manager/Microsoft.App/SreAgent/agentconnector.tsp`, `specification/app/resource-manager/Microsoft.App/SreAgent/commontypes.tsp`, `specification/app/resource-manager/Microsoft.App/SreAgent/main.tsp`

## Not qualified

- `invalid-oad-output`

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
| — | Qualification | `invalid-oad-output` | [workflow 38617807816](https://github.com/Azure/azure-rest-api-specs/actions/runs/38617807816) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-d60da887f16b75d1](#issue-evidence-gap-d60da887f16b75d1). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Analysis | Suggested fix | Confidence / status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-evidence-gap-d60da887f16b75d1"></a>`issue-evidence-gap-d60da887f16b75d1` | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:invalid-oad-output` — invalid-oad-output<br>`qualification:evidence-error-0` — Job summary claims no findings but workflow logs contain OAD findings |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `invalid-oad-output`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47204)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/38617807816)
