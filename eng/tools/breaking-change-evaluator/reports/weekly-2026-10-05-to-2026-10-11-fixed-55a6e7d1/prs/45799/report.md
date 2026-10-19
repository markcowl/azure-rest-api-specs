# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-45799:4062f751b3e70f900ca2ad8f87b284abd70777ab`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#45799 — [Microsoft.ApiManagement] Add AI Gateway 2026-09-01-preview API](https://github.com/Azure/azure-rest-api-specs/pull/45799)
- **Author:** azaslonov
- **State:** closed (merged) at 2026-10-09T15:56:32Z
- **Base:** `main` at `2f3878f62a5f5c28fe60d7cb27b35d1cb06a23df`
- **Head:** `alzaslon/aigateway-2026-09-preview` at `4062f751b3e70f900ca2ad8f87b284abd70777ab`
- **Changed TypeSpec files:** `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGateway.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayCommon.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayOperations.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/AIGatewayResource.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/main.tsp`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/tspconfig.yaml`

## Not qualified

- `run-association-unverified`

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
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-32bd4b82533ce5ff](#issue-evidence-gap-32bd4b82533ce5ff). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-32bd4b82533ce5ff` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

<a id="issue-evidence-gap-32bd4b82533ce5ff"></a>
### issue-evidence-gap-32bd4b82533ce5ff

- **Affected PRs:** #45799
- **Phases:** A, B
- **Finding IDs:** none
- **Category:** `evidence-gap`
- **Conclusion:** insufficient-evidence
- **Confidence:** high
- **Rationale:** Required independent OAD evidence is missing, incomplete, or invalid.
- **Aggregate impact:** Excludes this report from complete-run effectiveness totals.
- **Suggested fix:** Restore immutable workflow logs and job-summary evidence, then rerun.
- **Status:** generated
- **Evidence:**
  - `qualification:run-association-unverified` — run-association-unverified

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/45799)
- **Workflow evidence:** unavailable
