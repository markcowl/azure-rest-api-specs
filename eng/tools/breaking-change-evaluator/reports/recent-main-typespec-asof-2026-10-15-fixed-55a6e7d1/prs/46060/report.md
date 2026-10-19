# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-46060:0782d4b5a1aa74283d601309b8cad0e45ffac653`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46060 — [App Configuration] Add `2026-09-01-preview` API version](https://github.com/Azure/azure-rest-api-specs/pull/46060)
- **Author:** austintolani
- **State:** open
- **Base:** `main` at `1142128f76754601aac1da265c6fa5fd66380d9b`
- **Head:** `app-config-2026-09-01-preview` at `0782d4b5a1aa74283d601309b8cad0e45ffac653`
- **Changed TypeSpec files:** `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration/FeatureFlag.tsp`, `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration/NetworkSecurityPerimeter.tsp`, `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration/NetworkSecurityPerimeterConfigurations.tsp`, `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration/client.tsp`, `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration/main.tsp`, `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration/models.tsp`

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
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-5ec228bd91c05ab7](#issue-evidence-gap-5ec228bd91c05ab7). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-5ec228bd91c05ab7` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

<a id="issue-evidence-gap-5ec228bd91c05ab7"></a>
### issue-evidence-gap-5ec228bd91c05ab7

- **Affected PRs:** #46060
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
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/46060)
- **Workflow evidence:** unavailable
