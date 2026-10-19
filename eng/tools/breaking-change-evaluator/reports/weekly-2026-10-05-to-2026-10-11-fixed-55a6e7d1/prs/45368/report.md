# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-45368:79ccd3d841bf5c15f0ee4844833584ae655ce279`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#45368 — Add DPS stable 2026-11-01 API version](https://github.com/Azure/azure-rest-api-specs/pull/45368)
- **Author:** mollyiverson
- **State:** closed (merged) at 2026-10-07T20:12:37Z
- **Base:** `main` at `5279ce43417174d87cc78d17729f1c81644805da`
- **Head:** `mollyiverson-microsoft-deviceprovisioningservices-Microsoft.Devices-2026-11-01` at `79ccd3d841bf5c15f0ee4844833584ae655ce279`
- **Changed TypeSpec files:** `specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices/main.tsp`, `specification/deviceprovisioningservices/resource-manager/Microsoft.Devices/DeviceProvisioningServices/models.tsp`

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
| — | Qualification | `invalid-oad-output` | [workflow 37675233137](https://github.com/Azure/azure-rest-api-specs/actions/runs/37675233137) | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-b46a4248996d3b0e](#issue-evidence-gap-b46a4248996d3b0e). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Analysis | Suggested fix | Confidence / status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-evidence-gap-b46a4248996d3b0e"></a>`issue-evidence-gap-b46a4248996d3b0e` | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:invalid-oad-output` — invalid-oad-output<br>`qualification:evidence-error-0` — Job summary claims no findings but workflow logs contain OAD findings |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `invalid-oad-output`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/45368)
- **Workflow evidence:** [Swagger BreakingChange - Analyze Code](https://github.com/Azure/azure-rest-api-specs/actions/runs/37675233137)
