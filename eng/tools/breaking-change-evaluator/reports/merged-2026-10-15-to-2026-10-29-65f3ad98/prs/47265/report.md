# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47265:4c725024080a10b931276c39115fb00add344bf3`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47265 — Microsoft.HorizonDB API version 2026-10-01-preview- #46525](https://github.com/Azure/azure-rest-api-specs/pull/47265)
- **Author:** nasc17
- **State:** closed (merged) at 2026-10-15T23:21:14Z
- **Base:** `main` at `d0ceb0c4ef92615139f3e9c1c77c509c5e17d122`
- **Head:** `nasc/release-Microsoft.HorizonDb-2026-10-01-preview` at `4c725024080a10b931276c39115fb00add344bf3`
- **Changed TypeSpec files:** `specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/capabilities.tsp`, `specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/change-data-capture.tsp`, `specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/client.tsp`, `specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/endpoints.tsp`, `specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/log-files.tsp`, `specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/main.tsp`, `specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/maintenance-event.tsp`, `specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/models.tsp`, `specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/nodes.tsp`, `specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/routes.tsp`, `specification/horizondb/resource-manager/Microsoft.HorizonDb/HorizonDb/tspconfig.yaml`

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
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-082c73d40a2169d4](#issue-evidence-gap-082c73d40a2169d4). | [details](#qualification-error-1) |

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
| <a id="issue-evidence-gap-082c73d40a2169d4"></a>`issue-evidence-gap-082c73d40a2169d4` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:run-association-unverified` — run-association-unverified |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47265)
- **Workflow evidence:** unavailable
