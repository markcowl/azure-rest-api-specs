# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-46782:3fbbaed080518bbcfa2074311109e24fd8a1ea64`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46782 — Add Sovereign 2026-10-31-preview API version](https://github.com/Azure/azure-rest-api-specs/pull/46782)
- **Author:** degautam
- **State:** closed (merged) at 2026-10-26T12:08:14Z
- **Base:** `main` at `87ab5f33a20302c8ecaef6442be77f8a8fca7786`
- **Head:** `personal/degautam/sovereignview-2026-10-31-preview` at `3fbbaed080518bbcfa2074311109e24fd8a1ea64`
- **Changed TypeSpec files:** `specification/sovereign/resource-manager/Microsoft.Sovereign/Sovereign/common.tsp`, `specification/sovereign/resource-manager/Microsoft.Sovereign/Sovereign/landingZoneAccountResourceProperties.tsp`, `specification/sovereign/resource-manager/Microsoft.Sovereign/Sovereign/landingZoneConfigurationResourceProperties.tsp`, `specification/sovereign/resource-manager/Microsoft.Sovereign/Sovereign/landingZoneRegistrationResourceProperties.tsp`, `specification/sovereign/resource-manager/Microsoft.Sovereign/Sovereign/main.tsp`, `specification/sovereign/resource-manager/Microsoft.Sovereign/Sovereign/sovereignViewResourceProperties.tsp`, `specification/sovereign/resource-manager/Microsoft.Sovereign/Sovereign/tspconfig.yaml`

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
| — | Qualification | `evidence-incomplete` | [workflow 40317426185](https://github.com/Azure/azure-rest-api-specs/actions/runs/40317426185) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-4d396076b29f35ec](#issue-evidence-gap-4d396076b29f35ec). | [details](#qualification-error-1) |

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
| <a id="issue-evidence-gap-4d396076b29f35ec"></a>`issue-evidence-gap-4d396076b29f35ec` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:evidence-incomplete` — evidence-incomplete<br>`qualification:evidence-error-0` — oadCompareOutput was truncated by the workflow logger; complete OAD evidence is unavailable |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `evidence-incomplete`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/46782)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/40317426185)
