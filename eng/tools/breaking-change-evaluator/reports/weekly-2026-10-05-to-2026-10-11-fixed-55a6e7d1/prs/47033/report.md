# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-47033:c69a186259c4784138b121a68addb7204ad704f9`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47033 — Microsoft.Authorization PrivilegedAccess 2026-06-01-preview (supersedes #45970)](https://github.com/Azure/azure-rest-api-specs/pull/47033)
- **Author:** raghavpuri31
- **State:** closed (merged) at 2026-10-07T21:28:15Z
- **Base:** `main` at `1142128f76754601aac1da265c6fa5fd66380d9b`
- **Head:** `puriraghav-pim-migration-replacement` at `c69a186259c4784138b121a68addb7204ad704f9`
- **Changed TypeSpec files:** `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess/PrivilegedResourceFavorite.tsp`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess/main.tsp`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess/models.tsp`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess/routes.tsp`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess/tspconfig.yaml`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/client.tsp`

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
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-020bbf1ea87727aa](#issue-evidence-gap-020bbf1ea87727aa). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Analysis | Suggested fix | Confidence / status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-evidence-gap-020bbf1ea87727aa"></a>`issue-evidence-gap-020bbf1ea87727aa` | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:run-association-unverified` — run-association-unverified |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47033)
- **Workflow evidence:** unavailable
