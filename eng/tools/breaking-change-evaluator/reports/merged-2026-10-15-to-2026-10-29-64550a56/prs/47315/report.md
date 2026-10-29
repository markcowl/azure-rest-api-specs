# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-64550a56`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-64550a56`
**Report ID:** `merged-2026-10-15-to-2026-10-29-64550a56:pr-47315:9adac132d23f8177f16537879e5d00ff8c74d1ce`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47315 — [Storage] Restore provisioning name constraints through client options](https://github.com/Azure/azure-rest-api-specs/pull/47315)
- **Author:** ArcturusZhang
- **State:** closed (merged) at 2026-10-15T08:16:31Z
- **Base:** `main` at `fd7acf72fc1d90922ef0536a06863c414328824f`
- **Head:** `storage/fix-provisioning-resource-name-constraints` at `9adac132d23f8177f16537879e5d00ff8c74d1ce`
- **Changed TypeSpec files:** `specification/storage/resource-manager/Microsoft.Storage/Storage/client.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/tspconfig.yaml`

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
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-c471c7d4bd865e79](#issue-evidence-gap-c471c7d4bd865e79). | [details](#qualification-error-1) |

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
| <a id="issue-evidence-gap-c471c7d4bd865e79"></a>`issue-evidence-gap-c471c7d4bd865e79` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:run-association-unverified` — run-association-unverified |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47315)
- **Workflow evidence:** unavailable
