# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-46010:90ff0a13e7c3f9126ee642faa44b1c6636d7bf75`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46010 — Add Resource Health 2026-07-01 version](https://github.com/Azure/azure-rest-api-specs/pull/46010)
- **Author:** mumurug-MSFT
- **State:** closed (merged) at 2026-10-27T22:17:50Z
- **Base:** `main` at `bc2219879bafda17e3c3d30935a0d72dc4da84d6`
- **Head:** `resourcehealth-2026-07-01` at `90ff0a13e7c3f9126ee642faa44b1c6636d7bf75`
- **Changed TypeSpec files:** `specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/ResourceHealth/main.tsp`, `specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/ResourceHealth/models.tsp`

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
| — | Qualification | `evidence-incomplete` | [workflow 40564177154](https://github.com/Azure/azure-rest-api-specs/actions/runs/40564177154) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-456fdf2a69d8b7ab](#issue-evidence-gap-456fdf2a69d8b7ab). | [details](#qualification-error-1) |

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
| <a id="issue-evidence-gap-456fdf2a69d8b7ab"></a>`issue-evidence-gap-456fdf2a69d8b7ab` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:evidence-incomplete` — evidence-incomplete<br>`qualification:evidence-error-0` — oadCompareOutput was truncated by the workflow logger; complete OAD evidence is unavailable |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `evidence-incomplete`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/46010)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/40564177154)
