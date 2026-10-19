# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47311:7ee220e5e9f6e362989b326eb7c147633058a91a`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47311 — Add Python lifecycle request models for Web PubSub Chat](https://github.com/Azure/azure-rest-api-specs/pull/47311)
- **Author:** Y-Sindo
- **State:** open
- **Base:** `main` at `fcc20ab8473a30946221a1b876c89aa9f61447b9`
- **Head:** `chat-python-request-models` at `7ee220e5e9f6e362989b326eb7c147633058a91a`
- **Changed TypeSpec files:** `specification/webpubsub/data-plane/WebPubSubChat/client.tsp`, `specification/webpubsub/data-plane/WebPubSubChat/main.tsp`, `specification/webpubsub/data-plane/WebPubSubChat/models.tsp`, `specification/webpubsub/data-plane/WebPubSubChat/routes.tsp`

## Not qualified

- `missing-phase-a-run`
- `missing-phase-b-run`

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
| — | Qualification | `missing-phase-a-run` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-181c1fc4d6c8db0f](#issue-evidence-gap-181c1fc4d6c8db0f). | [details](#qualification-error-1) |
| — | Qualification | `missing-phase-b-run` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-181c1fc4d6c8db0f](#issue-evidence-gap-181c1fc4d6c8db0f). | [details](#qualification-error-2) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-181c1fc4d6c8db0f` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

<a id="issue-evidence-gap-181c1fc4d6c8db0f"></a>
### issue-evidence-gap-181c1fc4d6c8db0f

- **Affected PRs:** #47311
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
  - `qualification:missing-phase-a-run` — missing-phase-a-run
  - `qualification:missing-phase-b-run` — missing-phase-b-run

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `missing-phase-a-run`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47311)
- **Workflow evidence:** unavailable

<a id="qualification-error-2"></a>
### Qualification failure 2

- **Reason:** `missing-phase-b-run`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47311)
- **Workflow evidence:** unavailable
