# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Report ID:** `merged-2026-10-15-to-2026-10-29-7824998e:pr-46034:abf586ee7b47f5fff71c131f4d09895dec1ce94a`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46034 — [Microsoft.ProviderHub] Add 2026-09-01-preview API version](https://github.com/Azure/azure-rest-api-specs/pull/46034)
- **Author:** gerardoglzb
- **State:** closed (merged) at 2026-10-16T19:05:21Z
- **Base:** `main` at `a058c0286266319c95c58d04a37b8b96f324461e`
- **Head:** `feature/providerhub-2026-09-01-preview` at `abf586ee7b47f5fff71c131f4d09895dec1ce94a`
- **Changed TypeSpec files:** `specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub/EndpointRegistration.tsp`, `specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub/client.tsp`, `specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub/main.tsp`, `specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub/models.tsp`

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
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-430c8dcec21415f9](#issue-evidence-gap-430c8dcec21415f9). | [details](#qualification-error-1) |

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
| <a id="issue-evidence-gap-430c8dcec21415f9"></a>`issue-evidence-gap-430c8dcec21415f9` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:run-association-unverified` — run-association-unverified |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/46034)
- **Workflow evidence:** unavailable
