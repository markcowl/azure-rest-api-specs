# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47069:dfe87dc096ec04b9b521a8de69feb197608d55ea`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47069 — [RedHatOpenShift] Add 2026-10-01 for HCP service](https://github.com/Azure/azure-rest-api-specs/pull/47069)
- **Author:** twolff-az
- **State:** closed (merged) at 2026-10-21T15:37:31Z
- **Base:** `main` at `7e3d5a565115344643a3333a950f6f29b241293d`
- **Head:** `release-aro-hcp/2026-10-01` at `dfe87dc096ec04b9b521a8de69feb197608d55ea`
- **Changed TypeSpec files:** `specification/redhatopenshift/resource-manager/Microsoft.RedHatOpenShift/hcpopenshiftclusters/client.tsp`, `specification/redhatopenshift/resource-manager/Microsoft.RedHatOpenShift/hcpopenshiftclusters/hcpCluster-models.tsp`, `specification/redhatopenshift/resource-manager/Microsoft.RedHatOpenShift/hcpopenshiftclusters/main.tsp`

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
| — | Qualification | `invalid-oad-output` | [workflow 38453305302](https://github.com/Azure/azure-rest-api-specs/actions/runs/38453305302) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-aa53590da31e2c3b](#issue-evidence-gap-aa53590da31e2c3b). | [details](#qualification-error-1) |

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
| <a id="issue-evidence-gap-aa53590da31e2c3b"></a>`issue-evidence-gap-aa53590da31e2c3b` | 0 | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:invalid-oad-output` — invalid-oad-output<br>`qualification:evidence-error-0` — Job summary claims no findings but workflow logs contain OAD findings |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `invalid-oad-output`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47069)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/38453305302)
