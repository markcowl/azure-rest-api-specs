# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47081:fb68dc398a3716abcd0cd5a747af09cccbb33757`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47081 — [Microsoft.ProviderHub] Add 2026-10-01 stable API version](https://github.com/Azure/azure-rest-api-specs/pull/47081)
- **Author:** wwendyc
- **State:** closed (merged) at 2026-10-22T00:02:58Z
- **Base:** `main` at `ae348cc71f54a61f5d17472052cfef279a23db6b`
- **Head:** `providerhub-2026-10-01` at `fb68dc398a3716abcd0cd5a747af09cccbb33757`
- **Changed TypeSpec files:** `specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub/ResourceTypeRegistration.tsp`, `specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub/back-compatible.tsp`, `specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub/main.tsp`, `specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub/tspconfig.yaml`

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
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-d42857ab78ee18ed](#issue-evidence-gap-d42857ab78ee18ed). | [details](#qualification-error-1) |

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
| <a id="issue-evidence-gap-d42857ab78ee18ed"></a>`issue-evidence-gap-d42857ab78ee18ed` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:run-association-unverified` — run-association-unverified |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47081)
- **Workflow evidence:** unavailable
