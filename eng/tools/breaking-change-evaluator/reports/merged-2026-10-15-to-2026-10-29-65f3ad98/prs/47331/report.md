# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47331:1e963fb1249f389fd36c30744cd081c842cdad4b`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47331 — Add Durable Task 2026-07-01-preview API](https://github.com/Azure/azure-rest-api-specs/pull/47331)
- **Author:** berndverst
- **State:** closed (merged) at 2026-10-15T17:44:34Z
- **Base:** `main` at `36d5a8b37254305dd420c2cac1c7c4cc0436291f`
- **Head:** `berndverst-durable-task-preview-api` at `1e963fb1249f389fd36c30744cd081c842cdad4b`
- **Changed TypeSpec files:** `specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask/detector.tsp`, `specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask/failoverInstance.tsp`, `specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask/main.tsp`, `specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask/taskqueue.tsp`, `specification/durabletask/resource-manager/Microsoft.DurableTask/DurableTask/transparentDataEncryption.tsp`

## Not qualified

- `run-association-unverified`

<a id="finding-review"></a>
## Finding review

Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.

<a id="finding-review-correlations"></a>
### Correlations

None.

<a id="finding-review-partial"></a>
### Partial correlations

None.

<a id="finding-review-oad-only"></a>
### OAD-only findings

None.

<a id="finding-review-typespec-only"></a>
### TypeSpec-only findings

None.

<a id="finding-review-ambiguous"></a>
### Ambiguous findings

None.

<a id="finding-review-errors"></a>
### Evidence and execution failures

| Phase | Scope | Failure | Available evidence | Analysis | Details |
| --- | --- | --- | --- | --- | --- |
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-e04418fa3da9da16](#issue-evidence-gap-e04418fa3da9da16). | [details](#qualification-error-1) |

<a id="finding-review-intentional"></a>
### Intentional Swagger-only gaps

None.

<a id="finding-review-informational"></a>
### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-evidence-gap-e04418fa3da9da16"></a>`issue-evidence-gap-e04418fa3da9da16` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:run-association-unverified` — run-association-unverified |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47331)
- **Workflow evidence:** unavailable
