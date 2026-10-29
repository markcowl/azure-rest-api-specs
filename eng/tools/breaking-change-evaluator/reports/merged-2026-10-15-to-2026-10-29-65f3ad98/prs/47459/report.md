# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47459:d7d3695c93ff3b3f30739f2009ea8fbed0f1077d`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47459 — Add FIST 2026-10-01-preview API and latest CVE results](https://github.com/Azure/azure-rest-api-specs/pull/47459)
- **Author:** jillianpenfield
- **State:** closed (merged) at 2026-10-21T18:36:38Z
- **Base:** `main` at `9d29928794867148db0aed101144d14b2876e3a1`
- **Head:** `fist/2026-10-01-preview` at `d7d3695c93ff3b3f30739f2009ea8fbed0f1077d`
- **Changed TypeSpec files:** `specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/IoTFirmwareDefense/LatestCveResource.tsp`, `specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/IoTFirmwareDefense/main.tsp`, `specification/fist/resource-manager/Microsoft.IoTFirmwareDefense/IoTFirmwareDefense/models.tsp`

## Not qualified

- `invalid-oad-output`

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
| — | Qualification | `invalid-oad-output` | [workflow 39468111743](https://github.com/Azure/azure-rest-api-specs/actions/runs/39468111743) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-c15097bc5e66d7d1](#issue-evidence-gap-c15097bc5e66d7d1). | [details](#qualification-error-1) |

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
| <a id="issue-evidence-gap-c15097bc5e66d7d1"></a>`issue-evidence-gap-c15097bc5e66d7d1` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:invalid-oad-output` — invalid-oad-output<br>`qualification:evidence-error-0` — Job summary occurrence counts are lower than the complete OAD log findings |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `invalid-oad-output`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47459)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/39468111743)
