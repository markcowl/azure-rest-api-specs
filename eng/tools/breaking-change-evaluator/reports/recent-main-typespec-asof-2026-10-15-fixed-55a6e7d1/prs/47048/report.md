# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47048:29b4a77e76c92674e13040c3139ce553ef126a74`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47048 — Fix Defender for Storage TypeSpec migration issues and suppression justifications](https://github.com/Azure/azure-rest-api-specs/pull/47048)
- **Author:** fhaddad21
- **State:** open
- **Base:** `main` at `0dbfc08bb2eeea34cc05dfd25c0b0a3c74672a3b`
- **Head:** `defender-for-storage-fixes` at `29b4a77e76c92674e13040c3139ce553ef126a74`
- **Changed TypeSpec files:** `specification/security/resource-manager/Microsoft.Security/Security/Common/main.tsp`, `specification/security/resource-manager/Microsoft.Security/Security/DefenderForStorageAPI/DefenderForStorageSetting.tsp`, `specification/security/resource-manager/Microsoft.Security/Security/DefenderForStorageAPI/back-compatible.tsp`, `specification/security/resource-manager/Microsoft.Security/Security/DefenderForStorageAPI/main.tsp`, `specification/security/resource-manager/Microsoft.Security/Security/DefenderForStorageAPI/models.tsp`

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
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-f035909447abcd0c](#issue-evidence-gap-f035909447abcd0c). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-f035909447abcd0c` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

<a id="issue-evidence-gap-f035909447abcd0c"></a>
### issue-evidence-gap-f035909447abcd0c

- **Affected PRs:** #47048
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
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47048)
- **Workflow evidence:** unavailable
