# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-46034:541a5c84739f4e4ac9c8b7797a71a249d7319f07`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46034 — [Microsoft.ProviderHub] Add 2026-09-01-preview API version](https://github.com/Azure/azure-rest-api-specs/pull/46034)
- **Author:** gerardoglzb
- **State:** open
- **Base:** `main` at `a058c0286266319c95c58d04a37b8b96f324461e`
- **Head:** `feature/providerhub-2026-09-01-preview` at `541a5c84739f4e4ac9c8b7797a71a249d7319f07`
- **Changed TypeSpec files:** `specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub/EndpointRegistration.tsp`, `specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub/client.tsp`, `specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub/main.tsp`, `specification/providerhub/resource-manager/Microsoft.ProviderHub/ProviderHub/models.tsp`

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
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-745c402c3a5a09d6](#issue-evidence-gap-745c402c3a5a09d6). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Analysis | Suggested fix | Confidence / status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-evidence-gap-745c402c3a5a09d6"></a>`issue-evidence-gap-745c402c3a5a09d6` | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:run-association-unverified` — run-association-unverified |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/46034)
- **Workflow evidence:** unavailable
