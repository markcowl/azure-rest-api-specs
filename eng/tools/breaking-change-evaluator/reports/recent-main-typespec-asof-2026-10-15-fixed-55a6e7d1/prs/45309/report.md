# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-45309:9a7cd533d0eb91daaf40fd10453bb240af492bd9`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#45309 — FileShares: add 2026-09-01 API version](https://github.com/Azure/azure-rest-api-specs/pull/45309)
- **Author:** jlindamood
- **State:** open
- **Base:** `main` at `e070ec9b11d1417d83170393ec90d7122e343e0f`
- **Head:** `user/jlindamood/2026-09-01-api-version` at `9a7cd533d0eb91daaf40fd10453bb240af492bd9`
- **Changed TypeSpec files:** `specification/fileshares/resource-manager/Microsoft.FileShares/FileShares/FileShareMigrations.tsp`, `specification/fileshares/resource-manager/Microsoft.FileShares/FileShares/client.tsp`, `specification/fileshares/resource-manager/Microsoft.FileShares/FileShares/fileshares.tsp`

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
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-f6879f3ce32e33e0](#issue-evidence-gap-f6879f3ce32e33e0). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-f6879f3ce32e33e0` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

<a id="issue-evidence-gap-f6879f3ce32e33e0"></a>
### issue-evidence-gap-f6879f3ce32e33e0

- **Affected PRs:** #45309
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
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/45309)
- **Workflow evidence:** unavailable
