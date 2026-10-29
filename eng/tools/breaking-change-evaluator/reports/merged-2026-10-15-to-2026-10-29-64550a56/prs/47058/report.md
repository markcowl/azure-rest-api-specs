# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-64550a56`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-64550a56`
**Report ID:** `merged-2026-10-15-to-2026-10-29-64550a56:pr-47058:4ff431b69626accbf18a853bb5094c2ad24d41ee`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47058 — Add 2026-10-01-preview API version with session artifacts support](https://github.com/Azure/azure-rest-api-specs/pull/47058)
- **Author:** radhikajain99
- **State:** closed (merged) at 2026-10-15T07:07:54Z
- **Base:** `main` at `efb0884620a801846ba9af4f622e004e08522583`
- **Head:** `users/radhikajain/playwright_session_artifacts` at `4ff431b69626accbf18a853bb5094c2ad24d41ee`
- **Changed TypeSpec files:** `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/main.tsp`, `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp`

<a id="finding-review"></a>
## Finding review

Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.

<a id="finding-review-correlations"></a>
### Correlations

None.

<a id="finding-review-partial"></a>
### Partial correlations

None.

<a id="finding-review-oad-only"></a>
### OAD-only findings

| Phase | Finding | Type / path | Source | Analysis | Suggested fix | Details |
| --- | --- | --- | --- | --- | --- | --- |
| B | `AddedPropertyInResponse` | PlaywrightWorkspaceProperties — reporting — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-b98ba35c3abd72cf](#issue-oad-only-b98ba35c3abd72cf). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-0) |
| B | `AddedPropertyInResponse` | PlaywrightWorkspaceProperties — storageUri — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-afe9e3dbff941066](#issue-oad-only-afe9e3dbff941066). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-1) |
| B | `AddedPropertyInResponse` | PlaywrightWorkspaceProperties — subnetId — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-cd4d340590f7d3eb](#issue-oad-only-cd4d340590f7d3eb). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-2) |
| B | `AddedPropertyInResponse` | PlaywrightWorkspaceProperties — sessionArtifacts — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-eafbf1b2d1eb30c8](#issue-oad-only-eafbf1b2d1eb30c8). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-3) |
| B | `AddedPropertyInResponse` | PlaywrightWorkspaceProperties — storageIdentity — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-e01c1607f75a2174](#issue-oad-only-e01c1607f75a2174). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-4) |
| B | `AddedPropertyInResponse` | PlaywrightWorkspace — identity — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L811) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L857) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-5d0594095ea538d0](#issue-oad-only-5d0594095ea538d0). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-5) |
| B | `AddedOptionalProperty` | PlaywrightWorkspace — identity — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L811) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L857) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-dde591f21232bf05](#issue-oad-only-dde591f21232bf05). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-6) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceProperties — reporting — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-c5c7ce5d68bd9fe7](#issue-oad-only-c5c7ce5d68bd9fe7). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-7) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceProperties — storageUri — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-2044e994090613ea](#issue-oad-only-2044e994090613ea). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-8) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceProperties — subnetId — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-fda05858ca73aad6](#issue-oad-only-fda05858ca73aad6). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-9) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceProperties — sessionArtifacts — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-6b4228348a1b5fb5](#issue-oad-only-6b4228348a1b5fb5). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-10) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceProperties — storageIdentity — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-0f60004d77d44cb8](#issue-oad-only-0f60004d77d44cb8). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-11) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdate — identity — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1021) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1146) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-24ce6cd40eeb5f48](#issue-oad-only-24ce6cd40eeb5f48). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-12) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — reporting — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-446033b16fc61f24](#issue-oad-only-446033b16fc61f24). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-13) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — storageUri — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-9ef253e0fb042fde](#issue-oad-only-9ef253e0fb042fde). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-14) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — sessionArtifacts — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-fbbda162ea436b51](#issue-oad-only-fbbda162ea436b51). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-15) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — storageIdentity — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-00f6b0d97ab25875](#issue-oad-only-00f6b0d97ab25875). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-16) |
| B | `AddedPropertyInResponse` | PlaywrightWorkspaceProperties — sessionArtifacts — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L897) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-9968fcf827bc3802](#issue-oad-only-9968fcf827bc3802). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-17) |
| B | `AddedPropertyInResponse` | PlaywrightWorkspaceProperties — storageIdentity — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L897) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-1f03852a7de65794](#issue-oad-only-1f03852a7de65794). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-18) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceProperties — sessionArtifacts — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L897) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-f48100f38ce6b165](#issue-oad-only-f48100f38ce6b165). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-19) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceProperties — storageIdentity — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L897) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-0658efb0f187f9a8](#issue-oad-only-0658efb0f187f9a8). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-20) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — sessionArtifacts — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L1093) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-56c65886a4c35e41](#issue-oad-only-56c65886a4c35e41). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-21) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — storageIdentity — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L1093) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-3f003d0ad3b90280](#issue-oad-only-3f003d0ad3b90280). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-22) |

<a id="finding-review-typespec-only"></a>
### TypeSpec-only findings

None.

<a id="finding-review-ambiguous"></a>
### Ambiguous findings

None.

<a id="finding-review-errors"></a>
### Evidence and execution failures

| Phase | Scope | Failure | Available evidence | Analysis | Details |
| --- | --- | --- | --- | --- | --- |
| — | Report execution | specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright: Analysis failed: Failed to compile the base revision (efb0884620a801846ba9af4f622e004e08522583): 1 error(s) found:   error import-not-found: Couldn't resolve import "<local-path>" ; Analysis failed: Failed to compile the base revision (efb0884620a801846ba9af4f622e004e08522583): 1 error(s) found:   error import-not-found: Couldn't resolve import "<local-path>" | [workflow 37490444904](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444904) · [workflow 37490444803](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) | Comparison is incomplete; do not treat absent findings as detector agreement. | [details](#evidence-error-1) |

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
| A | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444904) (no detector timing emitted) |
| B | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (no detector timing emitted) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright` | Phase A (`same-version`) | Analysis failed: Failed to compile the base revision (efb0884620a801846ba9af4f622e004e08522583): 1 error(s) found:
  error import-not-found: Couldn't resolve import "<local-path>"
 | 0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/8a0010d1a3a0de5c-phase-a.md) |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (efb0884620a801846ba9af4f622e004e08522583): 1 error(s) found:
  error import-not-found: Couldn't resolve import "<local-path>"
 | 0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-compile-runtime-failure-bcac4a24613192b1"></a>`issue-compile-runtime-failure-bcac4a24613192b1` | 0 | A, B | `compile-runtime-failure` | execution-failure | One or more evaluator, compile, or analyzer executions failed. Preserves a partial or failed outcome instead of success-shaped metrics. | Resolve the recorded execution error and rerun the same immutable input. | high; generated | `execution:execution-error-0` — specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright: Analysis failed: Failed to compile the base revision (efb0884620a801846ba9af4f622e004e08522583): 1 error(s) found:   error import-not-found: Couldn't resolve import "<local-path>" ; Analysis failed: Failed to compile the base revision (efb0884620a801846ba9af4f622e004e08522583): 1 error(s) found:   error import-not-found: Couldn't resolve import "<local-path>" <br>`execution:execution-error-1` — Analysis failed: Failed to compile the base revision (efb0884620a801846ba9af4f622e004e08522583): 1 error(s) found:   error import-not-found: Couldn't resolve import "<local-path>" ; Analysis failed: Failed to compile the base revision (efb0884620a801846ba9af4f622e004e08522583): 1 error(s) found:   error import-not-found: Couldn't resolve import "<local-path>" |
| <a id="issue-oad-only-00f6b0d97ab25875"></a><a id="issue-oad-only-0658efb0f187f9a8"></a><a id="issue-oad-only-0f60004d77d44cb8"></a><a id="issue-oad-only-1f03852a7de65794"></a><a id="issue-oad-only-2044e994090613ea"></a><a id="issue-oad-only-24ce6cd40eeb5f48"></a><a id="issue-oad-only-3f003d0ad3b90280"></a><a id="issue-oad-only-446033b16fc61f24"></a><a id="issue-oad-only-56c65886a4c35e41"></a><a id="issue-oad-only-5d0594095ea538d0"></a><a id="issue-oad-only-6b4228348a1b5fb5"></a><a id="issue-oad-only-9968fcf827bc3802"></a><a id="issue-oad-only-9ef253e0fb042fde"></a><a id="issue-oad-only-afe9e3dbff941066"></a><a id="issue-oad-only-b98ba35c3abd72cf"></a><a id="issue-oad-only-c5c7ce5d68bd9fe7"></a><a id="issue-oad-only-cd4d340590f7d3eb"></a><a id="issue-oad-only-dde591f21232bf05"></a><a id="issue-oad-only-e01c1607f75a2174"></a><a id="issue-oad-only-eafbf1b2d1eb30c8"></a><a id="issue-oad-only-f48100f38ce6b165"></a><a id="issue-oad-only-fbbda162ea436b51"></a><a id="issue-oad-only-fda05858ca73aad6"></a>`issue-oad-only-00f6b0d97ab25875` (+22 related) | 23 | B | `oad-only` | requires-review | OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent. Contributes one finding to OAD-only or missed-equivalent totals. | Review detector coverage and the canonical target mapping. | medium; generated | `oad-finding:B-oad-16` — AddedOptionalProperty: The new version has a new optional property 'storageIdentity' that was not found in the old version.<br>`oad-finding:B-oad-20` — AddedOptionalProperty: The new version has a new optional property 'storageIdentity' that was not found in the old version.<br>`oad-finding:B-oad-11` — AddedOptionalProperty: The new version has a new optional property 'storageIdentity' that was not found in the old version.<br>`oad-finding:B-oad-18` — AddedPropertyInResponse: The new version has a new property 'storageIdentity' in response that was not found in the old version.<br>`oad-finding:B-oad-8` — AddedOptionalProperty: The new version has a new optional property 'storageUri' that was not found in the old version.<br>`oad-finding:B-oad-12` — AddedOptionalProperty: The new version has a new optional property 'identity' that was not found in the old version.<br>`oad-finding:B-oad-22` — AddedOptionalProperty: The new version has a new optional property 'storageIdentity' that was not found in the old version.<br>`oad-finding:B-oad-13` — AddedOptionalProperty: The new version has a new optional property 'reporting' that was not found in the old version.<br>`oad-finding:B-oad-21` — AddedOptionalProperty: The new version has a new optional property 'sessionArtifacts' that was not found in the old version.<br>`oad-finding:B-oad-5` — AddedPropertyInResponse: The new version has a new property 'identity' in response that was not found in the old version.<br>`oad-finding:B-oad-10` — AddedOptionalProperty: The new version has a new optional property 'sessionArtifacts' that was not found in the old version.<br>`oad-finding:B-oad-17` — AddedPropertyInResponse: The new version has a new property 'sessionArtifacts' in response that was not found in the old version.<br>`oad-finding:B-oad-14` — AddedOptionalProperty: The new version has a new optional property 'storageUri' that was not found in the old version.<br>`oad-finding:B-oad-1` — AddedPropertyInResponse: The new version has a new property 'storageUri' in response that was not found in the old version.<br>`oad-finding:B-oad-0` — AddedPropertyInResponse: The new version has a new property 'reporting' in response that was not found in the old version.<br>`oad-finding:B-oad-7` — AddedOptionalProperty: The new version has a new optional property 'reporting' that was not found in the old version.<br>`oad-finding:B-oad-2` — AddedPropertyInResponse: The new version has a new property 'subnetId' in response that was not found in the old version.<br>`oad-finding:B-oad-6` — AddedOptionalProperty: The new version has a new optional property 'identity' that was not found in the old version.<br>`oad-finding:B-oad-4` — AddedPropertyInResponse: The new version has a new property 'storageIdentity' in response that was not found in the old version.<br>`oad-finding:B-oad-3` — AddedPropertyInResponse: The new version has a new property 'sessionArtifacts' in response that was not found in the old version.<br>`oad-finding:B-oad-19` — AddedOptionalProperty: The new version has a new optional property 'sessionArtifacts' that was not found in the old version.<br>`oad-finding:B-oad-15` — AddedOptionalProperty: The new version has a new optional property 'sessionArtifacts' that was not found in the old version.<br>`oad-finding:B-oad-9` — AddedOptionalProperty: The new version has a new optional property 'subnetId' that was not found in the old version. |

## Finding details

<a id="finding-b-oad-0"></a>
### B-oad-0 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-0` — `AddedPropertyInResponse` — The new version has a new property 'reporting' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Related analysis:** [issue-oad-only-b98ba35c3abd72cf](#issue-oad-only-b98ba35c3abd72cf)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-1"></a>
### B-oad-1 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-1` — `AddedPropertyInResponse` — The new version has a new property 'storageUri' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Related analysis:** [issue-oad-only-afe9e3dbff941066](#issue-oad-only-afe9e3dbff941066)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-2"></a>
### B-oad-2 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-2` — `AddedPropertyInResponse` — The new version has a new property 'subnetId' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Related analysis:** [issue-oad-only-cd4d340590f7d3eb](#issue-oad-only-cd4d340590f7d3eb)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-3"></a>
### B-oad-3 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-3` — `AddedPropertyInResponse` — The new version has a new property 'sessionArtifacts' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Related analysis:** [issue-oad-only-eafbf1b2d1eb30c8](#issue-oad-only-eafbf1b2d1eb30c8)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-4"></a>
### B-oad-4 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-4` — `AddedPropertyInResponse` — The new version has a new property 'storageIdentity' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Related analysis:** [issue-oad-only-e01c1607f75a2174](#issue-oad-only-e01c1607f75a2174)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-5"></a>
### B-oad-5 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-5` — `AddedPropertyInResponse` — The new version has a new property 'identity' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 811](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L811) — JSONPath `definitions.PlaywrightWorkspace.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 857](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L857) — JSONPath `definitions.PlaywrightWorkspace.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Related analysis:** [issue-oad-only-5d0594095ea538d0](#issue-oad-only-5d0594095ea538d0)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-6"></a>
### B-oad-6 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-6` — `AddedOptionalProperty` — The new version has a new optional property 'identity' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 811](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L811) — JSONPath `definitions.PlaywrightWorkspace.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 857](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L857) — JSONPath `definitions.PlaywrightWorkspace.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Related analysis:** [issue-oad-only-dde591f21232bf05](#issue-oad-only-dde591f21232bf05)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-7"></a>
### B-oad-7 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-7` — `AddedOptionalProperty` — The new version has a new optional property 'reporting' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Related analysis:** [issue-oad-only-c5c7ce5d68bd9fe7](#issue-oad-only-c5c7ce5d68bd9fe7)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-8"></a>
### B-oad-8 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-8` — `AddedOptionalProperty` — The new version has a new optional property 'storageUri' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Related analysis:** [issue-oad-only-2044e994090613ea](#issue-oad-only-2044e994090613ea)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-9"></a>
### B-oad-9 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-9` — `AddedOptionalProperty` — The new version has a new optional property 'subnetId' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Related analysis:** [issue-oad-only-fda05858ca73aad6](#issue-oad-only-fda05858ca73aad6)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-10"></a>
### B-oad-10 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-10` — `AddedOptionalProperty` — The new version has a new optional property 'sessionArtifacts' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Related analysis:** [issue-oad-only-6b4228348a1b5fb5](#issue-oad-only-6b4228348a1b5fb5)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-11"></a>
### B-oad-11 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-11` — `AddedOptionalProperty` — The new version has a new optional property 'storageIdentity' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Related analysis:** [issue-oad-only-0f60004d77d44cb8](#issue-oad-only-0f60004d77d44cb8)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-12"></a>
### B-oad-12 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-12` — `AddedOptionalProperty` — The new version has a new optional property 'identity' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1021](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1021) — JSONPath `definitions.PlaywrightWorkspaceUpdate.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1146](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1146) — JSONPath `definitions.PlaywrightWorkspaceUpdate.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Related analysis:** [issue-oad-only-24ce6cd40eeb5f48](#issue-oad-only-24ce6cd40eeb5f48)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-13"></a>
### B-oad-13 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-13` — `AddedOptionalProperty` — The new version has a new optional property 'reporting' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1039](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1168](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Related analysis:** [issue-oad-only-446033b16fc61f24](#issue-oad-only-446033b16fc61f24)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-14"></a>
### B-oad-14 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-14` — `AddedOptionalProperty` — The new version has a new optional property 'storageUri' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1039](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1168](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Related analysis:** [issue-oad-only-9ef253e0fb042fde](#issue-oad-only-9ef253e0fb042fde)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-15"></a>
### B-oad-15 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-15` — `AddedOptionalProperty` — The new version has a new optional property 'sessionArtifacts' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1039](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1168](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Related analysis:** [issue-oad-only-fbbda162ea436b51](#issue-oad-only-fbbda162ea436b51)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-16"></a>
### B-oad-16 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-16` — `AddedOptionalProperty` — The new version has a new optional property 'storageIdentity' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1039](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1168](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Related analysis:** [issue-oad-only-00f6b0d97ab25875](#issue-oad-only-00f6b0d97ab25875)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-17"></a>
### B-oad-17 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-17` — `AddedPropertyInResponse` — The new version has a new property 'sessionArtifacts' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json, line 897](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L897) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Related analysis:** [issue-oad-only-9968fcf827bc3802](#issue-oad-only-9968fcf827bc3802)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-18"></a>
### B-oad-18 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-18` — `AddedPropertyInResponse` — The new version has a new property 'storageIdentity' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json, line 897](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L897) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Related analysis:** [issue-oad-only-1f03852a7de65794](#issue-oad-only-1f03852a7de65794)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-19"></a>
### B-oad-19 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-19` — `AddedOptionalProperty` — The new version has a new optional property 'sessionArtifacts' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json, line 897](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L897) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Related analysis:** [issue-oad-only-f48100f38ce6b165](#issue-oad-only-f48100f38ce6b165)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-20"></a>
### B-oad-20 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-20` — `AddedOptionalProperty` — The new version has a new optional property 'storageIdentity' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json, line 897](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L897) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Related analysis:** [issue-oad-only-0658efb0f187f9a8](#issue-oad-only-0658efb0f187f9a8)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-21"></a>
### B-oad-21 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-21` — `AddedOptionalProperty` — The new version has a new optional property 'sessionArtifacts' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json, line 1093](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L1093) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1168](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Related analysis:** [issue-oad-only-56c65886a4c35e41](#issue-oad-only-56c65886a4c35e41)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-22"></a>
### B-oad-22 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-22` — `AddedOptionalProperty` — The new version has a new optional property 'storageIdentity' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json, line 1093](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L1093) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1168](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Related analysis:** [issue-oad-only-3f003d0ad3b90280](#issue-oad-only-3f003d0ad3b90280)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="evidence-error-1"></a>
### Evidence error 1

- specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright: Analysis failed: Failed to compile the base revision (efb0884620a801846ba9af4f622e004e08522583): 1 error(s) found:
  error import-not-found: Couldn't resolve import "<local-path>"
; Analysis failed: Failed to compile the base revision (efb0884620a801846ba9af4f622e004e08522583): 1 error(s) found:
  error import-not-found: Couldn't resolve import "<local-path>"


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
$prepared = node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js prepare --typespec-revision 64550a561cbd7f5eb0ec6865802a908744a3528f | ConvertFrom-Json
if ($prepared.artifactDigest -ne '50150db6c408dedca023a248f83bc39491e3bb79be5f001cc742b6b84366c1e1') { throw 'Prepared analyzer digest does not match the report' }
```

### Check out the evaluated target

```powershell
git clone --filter=blob:none --no-checkout 'https://github.com/Azure/azure-rest-api-specs.git' target
git -C target fetch --no-tags origin efb0884620a801846ba9af4f622e004e08522583 4ff431b69626accbf18a853bb5094c2ad24d41ee
git -C target checkout --detach 4ff431b69626accbf18a853bb5094c2ad24d41ee
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47058' --tool-revision 64550a561cbd7f5eb0ec6865802a908744a3528f --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright

```powershell
Push-Location target
node $prepared.executable 'specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright' --base-ref efb0884620a801846ba9af4f622e004e08522583 --phase same-version --json-output '../specification-loadtestservice-resource-manager-Microsoft.LoadTestService-playwright-phase-a.json' --markdown-output '../specification-loadtestservice-resource-manager-Microsoft.LoadTestService-playwright-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright' --base-ref efb0884620a801846ba9af4f622e004e08522583 --json-output '../specification-loadtestservice-resource-manager-Microsoft.LoadTestService-playwright-phase-b-evidence.json' --markdown-output '../specification-loadtestservice-resource-manager-Microsoft.LoadTestService-playwright-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright: Analysis failed: Failed to compile the base revision (efb0884620a801846ba9af4f622e004e08522583): 1 error(s) found:
  error import-not-found: Couldn't resolve import "<local-path>"
; Analysis failed: Failed to compile the base revision (efb0884620a801846ba9af4f622e004e08522583): 1 error(s) found:
  error import-not-found: Couldn't resolve import "<local-path>"

