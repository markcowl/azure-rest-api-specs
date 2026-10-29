# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47018:51c7ed6f5a03ab70639824ed736ef1374bac8f3f`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47018 — Add browser session artifact API](https://github.com/Azure/azure-rest-api-specs/pull/47018)
- **Author:** Ishita-Jinturkar
- **State:** closed (merged) at 2026-10-25T12:13:24Z
- **Base:** `main` at `ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a`
- **Head:** `browser-session-recording-from-44885` at `51c7ed6f5a03ab70639824ed736ef1374bac8f3f`
- **Changed TypeSpec files:** `specification/loadtestservice/data-plane/playwright/main.tsp`, `specification/loadtestservice/data-plane/playwright/typespec/browsersessions.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | [7](#finding-review) |
| Informational OAD records | 0 |
| TypeSpec findings | [5](#finding-review) |
| Exact | [4](#finding-review-correlations) |
| Probable (review required) | 0 |
| Intentional Swagger-only | 0 |
| Missed equivalent | [3](#finding-review-oad-only) |
| TypeSpec-only | 0 |
| Ambiguous | 0 |

**Exact OAD coverage:** 4 / 7 (57.1%)
**Review-inclusive OAD coverage:** 4 / 7 (57.1%)

### By phase

| Phase | Independent OAD execution | TypeSpec mode | Outcome | Comparable OAD | Informational OAD | TypeSpec findings | Exact | Probable | Intentional gap | Missed equivalent | TypeSpec-only | Exact OAD coverage | Review-inclusive OAD coverage |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | [Swagger Breaking Change run 40190664731](https://github.com/Azure/azure-rest-api-specs/actions/runs/40190664731) | `same-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 40190664630](https://github.com/Azure/azure-rest-api-specs/actions/runs/40190664630) | `cross-version` | compared | [7](#finding-review) | 0 | [5](#finding-review) | [4](#finding-review-correlations) | 0 | 0 | [3](#finding-review-oad-only) | 0 | 4 / 7 (57.1%) | 4 / 7 (57.1%) |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B | Breaking Change (Cross-Version) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

<a id="finding-review"></a>
## Finding review

Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.

<a id="finding-review-correlations"></a>
### Correlations

| Phase | OAD finding | TypeSpec finding(s) | Type / path | Sources | Analysis | Suggested fix / review | Details |
| --- | --- | --- | --- | --- | --- | --- | --- |
| B | `AddedOperation` | [`OperationAdded`](#finding-typespec-specification-loadtestservice-data-plane-playwright-tsp-b-4) ([head](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/typespec/testruns.tsp#L177)) | GET /playwrightworkspaces/{}/test-runs/{} | [base](https://github.com/Azure/azure-rest-api-specs/blob/ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a/specification/loadtestservice/data-plane/playwright/stable/2025-09-01/playwright.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json#L833) | Canonical identity agrees. Error status agrees (non-error). | No detector or evaluator change suggested. | [details](#finding-b-oad-0) |
| B | `AddedPath` | [`OperationAdded`](#finding-typespec-specification-loadtestservice-data-plane-playwright-tsp-b-0) ([head](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/typespec/routes.tsp#L61)) | GET /playwrightworkspaces/{} | [base](https://github.com/Azure/azure-rest-api-specs/blob/ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a/specification/loadtestservice/data-plane/playwright/stable/2025-09-01/playwright.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json#L67) | Canonical identity agrees. Error status agrees (non-error). | No detector or evaluator change suggested. | [details](#finding-b-oad-1) |
| B | `AddedPath` | [`OperationAdded`](#finding-typespec-specification-loadtestservice-data-plane-playwright-tsp-b-2) ([head](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/typespec/routes.tsp#L81)) | GET /playwrightworkspaces/{}/browser-sessions | [base](https://github.com/Azure/azure-rest-api-specs/blob/ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a/specification/loadtestservice/data-plane/playwright/stable/2025-09-01/playwright.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json#L430) | Canonical identity agrees. Error status agrees (non-error). | No detector or evaluator change suggested. | [details](#finding-b-oad-2) |
| B | `AddedPath` | [`OperationAdded`](#finding-typespec-specification-loadtestservice-data-plane-playwright-tsp-b-1) ([head](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/typespec/routes.tsp#L77))<br>[`OperationAdded`](#finding-typespec-specification-loadtestservice-data-plane-playwright-tsp-b-3) ([head](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/typespec/routes.tsp#L85)) | GET /playwrightworkspaces/{}/browser-sessions/{} | [base](https://github.com/Azure/azure-rest-api-specs/blob/ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a/specification/loadtestservice/data-plane/playwright/stable/2025-09-01/playwright.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json#L496) | Canonical identity agrees. Error status agrees (non-error). | No detector or evaluator change suggested. | [details](#finding-b-oad-3) |

<a id="finding-review-partial"></a>
### Partial correlations

None.

<a id="finding-review-oad-only"></a>
### OAD-only findings

| Phase | Finding | Type / path | Source | Analysis | Suggested fix | Details |
| --- | --- | --- | --- | --- | --- | --- |
| B | `AddedPropertyInResponse` | BrowserSession — sessionArtifacts — GET /playwrightworkspaces/{}/browser-sessions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a/specification/loadtestservice/data-plane/playwright/preview/2026-06-01-preview/playwright.json#L1147) · [head](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json#L1147) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-887d05cb4f9f62e8](#issue-oad-only-887d05cb4f9f62e8). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-4) |
| B | `AddedPropertyInResponse` | PatchRequestBrowserSession — sessionArtifacts — PATCH /playwrightworkspaces/{}/browser-sessions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a/specification/loadtestservice/data-plane/playwright/preview/2026-06-01-preview/playwright.json#L1516) · [head](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json#L1699) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-20e99650ac7b0b55](#issue-oad-only-20e99650ac7b0b55). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-5) |
| B | `AddedOptionalProperty` | PatchRequestBrowserSessionCreateOrUpdate — sessionArtifacts — PATCH /playwrightworkspaces/{}/browser-sessions/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a/specification/loadtestservice/data-plane/playwright/preview/2026-06-01-preview/playwright.json#L1626) · [head](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json#L1818) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-3506a59ff7ae1e33](#issue-oad-only-3506a59ff7ae1e33). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-6) |

<a id="finding-review-typespec-only"></a>
### TypeSpec-only findings

None.

<a id="finding-review-ambiguous"></a>
### Ambiguous findings

None.

<a id="finding-review-errors"></a>
### Evidence and execution failures

None.

<a id="finding-review-intentional"></a>
### Intentional Swagger-only gaps

None.

<a id="finding-review-informational"></a>
### Informational OAD records

None.

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 2901 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40190664731) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/f849fd75af5f9760-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 2162 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40190664630) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/f849fd75af5f9760-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/loadtestservice/data-plane/playwright` | Phase A (`same-version`) | `2025-07-01-preview` → `2025-07-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/f849fd75af5f9760-phase-a.md) |
| `specification/loadtestservice/data-plane/playwright` | Phase A (`same-version`) | `2025-09-01` → `2025-09-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/f849fd75af5f9760-phase-a.md) |
| `specification/loadtestservice/data-plane/playwright` | Phase A (`same-version`) | `2026-01-01-preview` → `2026-01-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/f849fd75af5f9760-phase-a.md) |
| `specification/loadtestservice/data-plane/playwright` | Phase A (`same-version`) | `2026-04-01-preview` → `2026-04-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/f849fd75af5f9760-phase-a.md) |
| `specification/loadtestservice/data-plane/playwright` | Phase A (`same-version`) | `2026-06-01-preview` → `2026-06-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/f849fd75af5f9760-phase-a.md) |
| `specification/loadtestservice/data-plane/playwright` | Phase B (`cross-version`) | `2025-09-01` → `2026-10-01-preview` | 1 | 5 | 5 | [generated combined Markdown](report-artifacts/typespec/f849fd75af5f9760-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-concordant-zero-3d42d3d417e11cc5"></a>`issue-concordant-zero-3d42d3d417e11cc5` | 0 | A | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase A. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-A` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |
| <a id="issue-oad-only-20e99650ac7b0b55"></a><a id="issue-oad-only-3506a59ff7ae1e33"></a><a id="issue-oad-only-887d05cb4f9f62e8"></a>`issue-oad-only-20e99650ac7b0b55` (+2 related) | 3 | B | `oad-only` | requires-review | OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent. Contributes one finding to OAD-only or missed-equivalent totals. | Review detector coverage and the canonical target mapping. | medium; generated | `oad-finding:B-oad-5` — AddedPropertyInResponse: The new version has a new property 'sessionArtifacts' in response that was not found in the old version.<br>`oad-finding:B-oad-6` — AddedOptionalProperty: The new version has a new optional property 'sessionArtifacts' that was not found in the old version.<br>`oad-finding:B-oad-4` — AddedPropertyInResponse: The new version has a new property 'sessionArtifacts' in response that was not found in the old version. |

## Finding details

<a id="finding-b-oad-0"></a>
### B-oad-0 — `AddedOperation`

- **Swagger finding:** `B-oad-0` — `AddedOperation` — The new version is adding an operation that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40190664630) (digest `28350d091f709e16473a20c4cdcdb0e070bc5658047948a291f7124059dd35fd`)
- **Swagger source:** [base: specification/loadtestservice/data-plane/playwright/stable/2025-09-01/playwright.json](https://github.com/Azure/azure-rest-api-specs/blob/ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a/specification/loadtestservice/data-plane/playwright/stable/2025-09-01/playwright.json); [head: specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json, line 833](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json#L833) — JSONPath `paths['/playwrightworkspaces/{workspaceId}/test-runs/{runId}'].get`
- **Classification:** `exact`
- **Resolved targets:** GET /playwrightworkspaces/{}/test-runs/{}
- **Selected TypeSpec findings:** [`specification/loadtestservice/data-plane/playwright:tsp-B-4`](#finding-typespec-specification-loadtestservice-data-plane-playwright-tsp-b-4)
- **Candidates considered:**
  - `specification/loadtestservice/data-plane/playwright:tsp-B-0` — score 0; method, version pair; rejected: normalized route differs
  - `specification/loadtestservice/data-plane/playwright:tsp-B-1` — score 0; method, version pair; rejected: normalized route differs
  - `specification/loadtestservice/data-plane/playwright:tsp-B-2` — score 0; method, version pair; rejected: normalized route differs
  - `specification/loadtestservice/data-plane/playwright:tsp-B-3` — score 0; version pair; rejected: HTTP method differs, normalized route differs
  - `specification/loadtestservice/data-plane/playwright:tsp-B-4` — score 3; method, route, version pair
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/data-plane/playwright:tsp-B-4` because method, route, version pair. Error status agrees: neither detector reports an actionable error.

<a id="finding-b-oad-1"></a>
### B-oad-1 — `AddedPath`

- **Swagger finding:** `B-oad-1` — `AddedPath` — The new version is adding a path that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40190664630) (digest `28350d091f709e16473a20c4cdcdb0e070bc5658047948a291f7124059dd35fd`)
- **Swagger source:** [base: specification/loadtestservice/data-plane/playwright/stable/2025-09-01/playwright.json](https://github.com/Azure/azure-rest-api-specs/blob/ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a/specification/loadtestservice/data-plane/playwright/stable/2025-09-01/playwright.json); [head: specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json, line 67](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json#L67) — JSONPath `paths['/playwrightworkspaces/{workspaceId}']`
- **Classification:** `exact`
- **Resolved targets:** GET /playwrightworkspaces/{}
- **Selected TypeSpec findings:** [`specification/loadtestservice/data-plane/playwright:tsp-B-0`](#finding-typespec-specification-loadtestservice-data-plane-playwright-tsp-b-0)
- **Candidates considered:**
  - `specification/loadtestservice/data-plane/playwright:tsp-B-0` — score 3; method, route, version pair
  - `specification/loadtestservice/data-plane/playwright:tsp-B-1` — score 0; method, version pair; rejected: normalized route differs
  - `specification/loadtestservice/data-plane/playwright:tsp-B-2` — score 0; method, version pair; rejected: normalized route differs
  - `specification/loadtestservice/data-plane/playwright:tsp-B-3` — score 0; version pair; rejected: HTTP method differs, normalized route differs
  - `specification/loadtestservice/data-plane/playwright:tsp-B-4` — score 0; method, version pair; rejected: normalized route differs
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/data-plane/playwright:tsp-B-0` because method, route, version pair. Error status agrees: neither detector reports an actionable error.

<a id="finding-b-oad-2"></a>
### B-oad-2 — `AddedPath`

- **Swagger finding:** `B-oad-2` — `AddedPath` — The new version is adding a path that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40190664630) (digest `28350d091f709e16473a20c4cdcdb0e070bc5658047948a291f7124059dd35fd`)
- **Swagger source:** [base: specification/loadtestservice/data-plane/playwright/stable/2025-09-01/playwright.json](https://github.com/Azure/azure-rest-api-specs/blob/ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a/specification/loadtestservice/data-plane/playwright/stable/2025-09-01/playwright.json); [head: specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json, line 430](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json#L430) — JSONPath `paths['/playwrightworkspaces/{workspaceId}/browser-sessions']`
- **Classification:** `exact`
- **Resolved targets:** GET /playwrightworkspaces/{}/browser-sessions
- **Selected TypeSpec findings:** [`specification/loadtestservice/data-plane/playwright:tsp-B-2`](#finding-typespec-specification-loadtestservice-data-plane-playwright-tsp-b-2)
- **Candidates considered:**
  - `specification/loadtestservice/data-plane/playwright:tsp-B-0` — score 0; method, version pair; rejected: normalized route differs
  - `specification/loadtestservice/data-plane/playwright:tsp-B-1` — score 0; method, version pair; rejected: normalized route differs
  - `specification/loadtestservice/data-plane/playwright:tsp-B-2` — score 3; method, route, version pair
  - `specification/loadtestservice/data-plane/playwright:tsp-B-3` — score 0; version pair; rejected: HTTP method differs, normalized route differs
  - `specification/loadtestservice/data-plane/playwright:tsp-B-4` — score 0; method, version pair; rejected: normalized route differs
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/data-plane/playwright:tsp-B-2` because method, route, version pair. Error status agrees: neither detector reports an actionable error.

<a id="finding-b-oad-3"></a>
### B-oad-3 — `AddedPath`

- **Swagger finding:** `B-oad-3` — `AddedPath` — The new version is adding a path that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40190664630) (digest `28350d091f709e16473a20c4cdcdb0e070bc5658047948a291f7124059dd35fd`)
- **Swagger source:** [base: specification/loadtestservice/data-plane/playwright/stable/2025-09-01/playwright.json](https://github.com/Azure/azure-rest-api-specs/blob/ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a/specification/loadtestservice/data-plane/playwright/stable/2025-09-01/playwright.json); [head: specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json, line 496](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json#L496) — JSONPath `paths['/playwrightworkspaces/{workspaceId}/browser-sessions/{sessionId}']`
- **Classification:** `exact`
- **Resolved targets:** GET /playwrightworkspaces/{}/browser-sessions/{} | PATCH /playwrightworkspaces/{}/browser-sessions/{}
- **Selected TypeSpec findings:** [`specification/loadtestservice/data-plane/playwright:tsp-B-1`](#finding-typespec-specification-loadtestservice-data-plane-playwright-tsp-b-1), [`specification/loadtestservice/data-plane/playwright:tsp-B-3`](#finding-typespec-specification-loadtestservice-data-plane-playwright-tsp-b-3)
- **Candidates considered:**
  - `specification/loadtestservice/data-plane/playwright:tsp-B-0` — score 0; method, version pair; rejected: normalized route differs
  - `specification/loadtestservice/data-plane/playwright:tsp-B-1` — score 3; method, route, version pair
  - `specification/loadtestservice/data-plane/playwright:tsp-B-2` — score 0; method, version pair; rejected: normalized route differs
  - `specification/loadtestservice/data-plane/playwright:tsp-B-3` — score 0; route, version pair; rejected: HTTP method differs
  - `specification/loadtestservice/data-plane/playwright:tsp-B-4` — score 0; method, version pair; rejected: normalized route differs
  - `specification/loadtestservice/data-plane/playwright:tsp-B-0` — score 0; version pair; rejected: HTTP method differs, normalized route differs
  - `specification/loadtestservice/data-plane/playwright:tsp-B-1` — score 0; route, version pair; rejected: HTTP method differs
  - `specification/loadtestservice/data-plane/playwright:tsp-B-2` — score 0; version pair; rejected: HTTP method differs, normalized route differs
  - `specification/loadtestservice/data-plane/playwright:tsp-B-3` — score 3; method, route, version pair
  - `specification/loadtestservice/data-plane/playwright:tsp-B-4` — score 0; version pair; rejected: HTTP method differs, normalized route differs
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/data-plane/playwright:tsp-B-1`, `specification/loadtestservice/data-plane/playwright:tsp-B-3` because method, route, version pair. Error status agrees: neither detector reports an actionable error.

<a id="finding-b-oad-4"></a>
### B-oad-4 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-4` — `AddedPropertyInResponse` — The new version has a new property 'sessionArtifacts' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40190664630) (digest `28350d091f709e16473a20c4cdcdb0e070bc5658047948a291f7124059dd35fd`)
- **Swagger source:** [base: specification/loadtestservice/data-plane/playwright/preview/2026-06-01-preview/playwright.json, line 1147](https://github.com/Azure/azure-rest-api-specs/blob/ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a/specification/loadtestservice/data-plane/playwright/preview/2026-06-01-preview/playwright.json#L1147) — JSONPath `definitions.BrowserSession.properties`; [head: specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json, line 1147](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json#L1147) — JSONPath `definitions.BrowserSession.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /playwrightworkspaces/{}/browser-sessions/{} response 200 | GET /playwrightworkspaces/{}/browser-sessions response 200
- **Related analysis:** [issue-oad-only-887d05cb4f9f62e8](#issue-oad-only-887d05cb4f9f62e8)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-5"></a>
### B-oad-5 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-5` — `AddedPropertyInResponse` — The new version has a new property 'sessionArtifacts' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40190664630) (digest `28350d091f709e16473a20c4cdcdb0e070bc5658047948a291f7124059dd35fd`)
- **Swagger source:** [base: specification/loadtestservice/data-plane/playwright/preview/2026-06-01-preview/playwright.json, line 1516](https://github.com/Azure/azure-rest-api-specs/blob/ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a/specification/loadtestservice/data-plane/playwright/preview/2026-06-01-preview/playwright.json#L1516) — JSONPath `definitions.PatchRequestBrowserSession.properties`; [head: specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json, line 1699](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json#L1699) — JSONPath `definitions.PatchRequestBrowserSession.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /playwrightworkspaces/{}/browser-sessions/{} response 200 | PATCH /playwrightworkspaces/{}/browser-sessions/{} response 201
- **Related analysis:** [issue-oad-only-20e99650ac7b0b55](#issue-oad-only-20e99650ac7b0b55)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-6"></a>
### B-oad-6 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-6` — `AddedOptionalProperty` — The new version has a new optional property 'sessionArtifacts' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40190664630) (digest `28350d091f709e16473a20c4cdcdb0e070bc5658047948a291f7124059dd35fd`)
- **Swagger source:** [base: specification/loadtestservice/data-plane/playwright/preview/2026-06-01-preview/playwright.json, line 1626](https://github.com/Azure/azure-rest-api-specs/blob/ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a/specification/loadtestservice/data-plane/playwright/preview/2026-06-01-preview/playwright.json#L1626) — JSONPath `definitions.PatchRequestBrowserSessionCreateOrUpdate.properties`; [head: specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json, line 1818](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/preview/2026-10-01-preview/playwright.json#L1818) — JSONPath `definitions.PatchRequestBrowserSessionCreateOrUpdate.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /playwrightworkspaces/{}/browser-sessions/{} request
- **Related analysis:** [issue-oad-only-3506a59ff7ae1e33](#issue-oad-only-3506a59ff7ae1e33)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-typespec-specification-loadtestservice-data-plane-playwright-tsp-b-0"></a>
### specification/loadtestservice/data-plane/playwright:tsp-B-0 — `OperationAdded`

- **TypeSpec finding:** `specification/loadtestservice/data-plane/playwright:tsp-B-0` — `OperationAdded` — Operation GET /playwrightworkspaces/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /playwrightworkspaces/{}; project `specification/loadtestservice/data-plane/playwright`; versions `2025-09-01` → `2026-10-01-preview`
- **Source declaration identity:** `Playwright.Workspaces.get`
- **Wire identity:** unavailable
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/f849fd75af5f9760-phase-b.md) (digest `20a13f942cea1545e043ba807b3a90bbd712fc0514ac26c3fe65eb1c5cd21744`)
- **TypeSpec source:** [head: specification/loadtestservice/data-plane/playwright/typespec/routes.tsp, line 61](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/typespec/routes.tsp#L61)

<a id="finding-typespec-specification-loadtestservice-data-plane-playwright-tsp-b-1"></a>
### specification/loadtestservice/data-plane/playwright:tsp-B-1 — `OperationAdded`

- **TypeSpec finding:** `specification/loadtestservice/data-plane/playwright:tsp-B-1` — `OperationAdded` — Operation GET /playwrightworkspaces/{}/browser-sessions/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /playwrightworkspaces/{}/browser-sessions/{}; project `specification/loadtestservice/data-plane/playwright`; versions `2025-09-01` → `2026-10-01-preview`
- **Source declaration identity:** `Playwright.BrowserSessions.get`
- **Wire identity:** unavailable
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/f849fd75af5f9760-phase-b.md) (digest `20a13f942cea1545e043ba807b3a90bbd712fc0514ac26c3fe65eb1c5cd21744`)
- **TypeSpec source:** [head: specification/loadtestservice/data-plane/playwright/typespec/routes.tsp, line 77](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/typespec/routes.tsp#L77)

<a id="finding-typespec-specification-loadtestservice-data-plane-playwright-tsp-b-2"></a>
### specification/loadtestservice/data-plane/playwright:tsp-B-2 — `OperationAdded`

- **TypeSpec finding:** `specification/loadtestservice/data-plane/playwright:tsp-B-2` — `OperationAdded` — Operation GET /playwrightworkspaces/{}/browser-sessions was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /playwrightworkspaces/{}/browser-sessions; project `specification/loadtestservice/data-plane/playwright`; versions `2025-09-01` → `2026-10-01-preview`
- **Source declaration identity:** `Playwright.BrowserSessions.list`
- **Wire identity:** unavailable
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/f849fd75af5f9760-phase-b.md) (digest `20a13f942cea1545e043ba807b3a90bbd712fc0514ac26c3fe65eb1c5cd21744`)
- **TypeSpec source:** [head: specification/loadtestservice/data-plane/playwright/typespec/routes.tsp, line 81](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/typespec/routes.tsp#L81)

<a id="finding-typespec-specification-loadtestservice-data-plane-playwright-tsp-b-3"></a>
### specification/loadtestservice/data-plane/playwright:tsp-B-3 — `OperationAdded`

- **TypeSpec finding:** `specification/loadtestservice/data-plane/playwright:tsp-B-3` — `OperationAdded` — Operation PATCH /playwrightworkspaces/{}/browser-sessions/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PATCH /playwrightworkspaces/{}/browser-sessions/{}; project `specification/loadtestservice/data-plane/playwright`; versions `2025-09-01` → `2026-10-01-preview`
- **Source declaration identity:** `Playwright.BrowserSessions.createOrUpdate`
- **Wire identity:** unavailable
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/f849fd75af5f9760-phase-b.md) (digest `20a13f942cea1545e043ba807b3a90bbd712fc0514ac26c3fe65eb1c5cd21744`)
- **TypeSpec source:** [head: specification/loadtestservice/data-plane/playwright/typespec/routes.tsp, line 85](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/typespec/routes.tsp#L85)

<a id="finding-typespec-specification-loadtestservice-data-plane-playwright-tsp-b-4"></a>
### specification/loadtestservice/data-plane/playwright:tsp-B-4 — `OperationAdded`

- **TypeSpec finding:** `specification/loadtestservice/data-plane/playwright:tsp-B-4` — `OperationAdded` — Operation GET /playwrightworkspaces/{}/test-runs/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /playwrightworkspaces/{}/test-runs/{}; project `specification/loadtestservice/data-plane/playwright`; versions `2025-09-01` → `2026-10-01-preview`
- **Source declaration identity:** `Playwright.TestRuns.get`
- **Wire identity:** unavailable
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/f849fd75af5f9760-phase-b.md) (digest `20a13f942cea1545e043ba807b3a90bbd712fc0514ac26c3fe65eb1c5cd21744`)
- **TypeSpec source:** [head: specification/loadtestservice/data-plane/playwright/typespec/testruns.tsp, line 177](https://github.com/Azure/azure-rest-api-specs/blob/51c7ed6f5a03ab70639824ed736ef1374bac8f3f/specification/loadtestservice/data-plane/playwright/typespec/testruns.tsp#L177)

## Reproduce

**Shell:** powershell

### Check out the evaluator

```powershell
git clone 'https://github.com/markcowl/azure-rest-api-specs.git' evaluator
git -C evaluator checkout 'f37db08ada6edd33d546129d99410fcce79aeb5a'
corepack pnpm --dir evaluator install --frozen-lockfile
```

### Prepare the immutable analyzer

```powershell
$prepared = node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js prepare --typespec-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a | ConvertFrom-Json
if ($prepared.artifactDigest -ne '95835342e0e018bc513e3f639a2b36ec641918b5db3084bdb380fce3bd8f6cc5') { throw 'Prepared analyzer digest does not match the report' }
```

### Check out the evaluated target

```powershell
git clone --filter=blob:none --no-checkout 'https://github.com/Azure/azure-rest-api-specs.git' target
git -C target fetch --no-tags origin ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a 51c7ed6f5a03ab70639824ed736ef1374bac8f3f
git -C target checkout --detach 51c7ed6f5a03ab70639824ed736ef1374bac8f3f
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47018' --tool-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/loadtestservice/data-plane/playwright

```powershell
Push-Location target
node $prepared.executable 'specification/loadtestservice/data-plane/playwright' --base-ref ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a --phase same-version --json-output '../specification-loadtestservice-data-plane-playwright-phase-a.json' --markdown-output '../specification-loadtestservice-data-plane-playwright-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/loadtestservice/data-plane/playwright' --base-ref ba3eef39e5be55cd5ed1a2e5c6c9bb1a17c36b9a --json-output '../specification-loadtestservice-data-plane-playwright-phase-b-evidence.json' --markdown-output '../specification-loadtestservice-data-plane-playwright-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
