# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-64550a56`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-64550a56`
**Report ID:** `merged-2026-10-15-to-2026-10-29-64550a56:pr-47234:222294a50bda9c0543f10c562ac31299e07eb67c`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47234 — Enable AgriculturePlatform provisioning emitter](https://github.com/Azure/azure-rest-api-specs/pull/47234)
- **Author:** cxznmhdcxz
- **State:** closed (merged) at 2026-10-15T05:06:05Z
- **Base:** `main` at `8ec074d8a9d4929f9db8c1e0c464507722f0f105`
- **Head:** `onboard-provisioning-agricultureplatform` at `222294a50bda9c0543f10c562ac31299e07eb67c`
- **Changed TypeSpec files:** `specification/agricultureplatform/AgriculturePlatform.Management/client.tsp`, `specification/agricultureplatform/AgriculturePlatform.Management/tspconfig.yaml`

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
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-34731717dddb782c](#issue-evidence-gap-34731717dddb782c). | [details](#qualification-error-1) |

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
| <a id="issue-evidence-gap-34731717dddb782c"></a>`issue-evidence-gap-34731717dddb782c` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:run-association-unverified` — run-association-unverified |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47234)
- **Workflow evidence:** unavailable
