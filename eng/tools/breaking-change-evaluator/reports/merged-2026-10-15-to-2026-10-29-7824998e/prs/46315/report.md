# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Report ID:** `merged-2026-10-15-to-2026-10-29-7824998e:pr-46315:1413bddd5fe634247b6075d3f2c89b89fc05d451`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46315 — Azure Search Data-Plane 2026-10-01 GA Release](https://github.com/Azure/azure-rest-api-specs/pull/46315)
- **Author:** yangylu91
- **State:** closed (merged) at 2026-10-16T17:57:04Z
- **Base:** `main` at `90e63e5fe2c596e8bd807aad7dd9d62cee1746dd`
- **Head:** `search/dp-2026-10-01` at `1413bddd5fe634247b6075d3f2c89b89fc05d451`
- **Changed TypeSpec files:** `specification/search/data-plane/Search/client.tsp`, `specification/search/data-plane/Search/main.tsp`, `specification/search/data-plane/Search/models-index.tsp`, `specification/search/data-plane/Search/models-knowledgebase.tsp`, `specification/search/data-plane/Search/models-service.tsp`, `specification/search/data-plane/Search/models-shared.tsp`, `specification/search/data-plane/Search/routes-knowledgebase.tsp`, `specification/search/data-plane/Search/routes-service.tsp`, `specification/search/data-plane/Search/tspconfig.yaml`

## Not qualified

- `evidence-incomplete`

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
| — | Qualification | `evidence-incomplete` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-18da9e87f676f052](#issue-evidence-gap-18da9e87f676f052). | [details](#qualification-error-1) |

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
| <a id="issue-evidence-gap-18da9e87f676f052"></a>`issue-evidence-gap-18da9e87f676f052` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:evidence-incomplete` — evidence-incomplete<br>`qualification:evidence-error-0` — oadCompareOutput was truncated by the workflow logger; complete OAD evidence is unavailable<br>`qualification:evidence-error-1` — oadCompareOutput was truncated by the workflow logger; complete OAD evidence is unavailable |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `evidence-incomplete`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/46315)
- **Workflow evidence:** unavailable
