# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-47019:d65c5b6b236eb70c0a05474b8e7d9de501316637`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47019 — feat: add Private Traffic Manager affinity routing in 2026-10-01-preview](https://github.com/Azure/azure-rest-api-specs/pull/47019)
- **Author:** imsiddhartha
- **State:** closed (merged) at 2026-10-10T08:19:46Z
- **Base:** `main` at `88e2199d770d74f3061a162824185fd6894cb7d7`
- **Head:** `dev/ssaklecha/versioningfaf67448` at `d65c5b6b236eb70c0a05474b8e7d9de501316637`
- **Changed TypeSpec files:** `specification/privatetrafficmanager/resource-manager/Microsoft.Network/PrivateTrafficManager/main.tsp`, `specification/privatetrafficmanager/resource-manager/Microsoft.Network/PrivateTrafficManager/models/EndpointModels.tsp`, `specification/privatetrafficmanager/resource-manager/Microsoft.Network/PrivateTrafficManager/models/ProfileModels.tsp`, `specification/privatetrafficmanager/resource-manager/Microsoft.Network/PrivateTrafficManager/models/SiteModels.tsp`, `specification/privatetrafficmanager/resource-manager/Microsoft.Network/PrivateTrafficManager/tspconfig.yaml`

## Not qualified

- `invalid-oad-output`

## Finding review

Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.

### Correlations

None.

### Partial correlations

None.

### OAD-only findings

None.

### TypeSpec-only findings

None.

### Ambiguous findings

None.

### Evidence and execution failures

| Phase | Scope | Failure | Available evidence | Analysis | Details |
| --- | --- | --- | --- | --- | --- |
| — | Qualification | `invalid-oad-output` | [workflow 37926605721](https://github.com/Azure/azure-rest-api-specs/actions/runs/37926605721) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-de0c841a43f448da](#issue-evidence-gap-de0c841a43f448da). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Analysis | Suggested fix | Confidence / status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-evidence-gap-de0c841a43f448da"></a>`issue-evidence-gap-de0c841a43f448da` | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:invalid-oad-output` — invalid-oad-output<br>`qualification:evidence-error-0` — Job summary claims no findings but workflow logs contain OAD findings |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `invalid-oad-output`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47019)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/37926605721)
