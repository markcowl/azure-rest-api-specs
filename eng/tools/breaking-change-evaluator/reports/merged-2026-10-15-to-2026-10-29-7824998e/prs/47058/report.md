# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Report ID:** `merged-2026-10-15-to-2026-10-29-7824998e:pr-47058:4ff431b69626accbf18a853bb5094c2ad24d41ee`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47058 — Add 2026-10-01-preview API version with session artifacts support](https://github.com/Azure/azure-rest-api-specs/pull/47058)
- **Author:** radhikajain99
- **State:** closed (merged) at 2026-10-15T07:07:54Z
- **Base:** `main` at `efb0884620a801846ba9af4f622e004e08522583`
- **Head:** `users/radhikajain/playwright_session_artifacts` at `4ff431b69626accbf18a853bb5094c2ad24d41ee`
- **Changed TypeSpec files:** `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/main.tsp`, `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | [23](#finding-review) |
| Informational OAD records | 0 |
| TypeSpec findings | [6](#finding-review) |
| Exact | [10](#finding-review-correlations) |
| Probable (review required) | 0 |
| Intentional Swagger-only | 0 |
| Missed equivalent | [13](#finding-review-oad-only) |
| TypeSpec-only | [1](#finding-review-typespec-only) |
| Ambiguous | 0 |

**Exact OAD coverage:** 10 / 23 (43.5%)
**Review-inclusive OAD coverage:** 10 / 23 (43.5%)

### By phase

| Phase | Independent OAD execution | TypeSpec mode | Outcome | Comparable OAD | Informational OAD | TypeSpec findings | Exact | Probable | Intentional gap | Missed equivalent | TypeSpec-only | Exact OAD coverage | Review-inclusive OAD coverage |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | [Swagger Breaking Change run 37490444904](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444904) | `same-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 37490444803](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) | `cross-version` | compared | [23](#finding-review) | 0 | [6](#finding-review) | [10](#finding-review-correlations) | 0 | 0 | [13](#finding-review-oad-only) | [1](#finding-review-typespec-only) | 10 / 23 (43.5%) | 10 / 23 (43.5%) |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B | Breaking Change (Cross-Version) | 0 | [6](#finding-review) | 0 | 0 | 0 | [5](#finding-review-partial) | 0 | [1](#finding-review-typespec-only) |

<a id="finding-review"></a>
## Finding review

Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.

<a id="finding-review-correlations"></a>
### Correlations

| Phase | OAD finding | TypeSpec finding(s) | Type / path | Sources | Analysis | Suggested fix / review | Details |
| --- | --- | --- | --- | --- | --- | --- | --- |
| B | `AddedPropertyInResponse` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-0) ([head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L46)) | PlaywrightWorkspaceProperties — reporting — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-3836c0c874b94a0e](#issue-severity-mismatch-3836c0c874b94a0e). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-0) |
| B | `AddedPropertyInResponse` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-1) ([head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L50)) | PlaywrightWorkspaceProperties — storageUri — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-e4149aace4e42318](#issue-severity-mismatch-e4149aace4e42318). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-1) |
| B | `AddedPropertyInResponse` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-2) ([head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L55)) | PlaywrightWorkspaceProperties — subnetId — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-9a4bf6914c8fa440](#issue-severity-mismatch-9a4bf6914c8fa440). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-2) |
| B | `AddedPropertyInResponse` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-3) ([head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L63)) | PlaywrightWorkspaceProperties — sessionArtifacts — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-882d4df1d2879e93](#issue-severity-mismatch-882d4df1d2879e93). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-3) |
| B | `AddedPropertyInResponse` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-4) ([head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L67)) | PlaywrightWorkspaceProperties — storageIdentity — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-2625c54c8d430058](#issue-severity-mismatch-2625c54c8d430058). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-4) |
| B | `AddedOptionalProperty` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-0) ([head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L46)) | PlaywrightWorkspaceProperties — reporting — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-763ee72c8e1f9604](#issue-severity-mismatch-763ee72c8e1f9604). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-7) |
| B | `AddedOptionalProperty` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-1) ([head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L50)) | PlaywrightWorkspaceProperties — storageUri — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-4309a90c69d311b4](#issue-severity-mismatch-4309a90c69d311b4). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-8) |
| B | `AddedOptionalProperty` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-2) ([head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L55)) | PlaywrightWorkspaceProperties — subnetId — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-3e920163404f6132](#issue-severity-mismatch-3e920163404f6132). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-9) |
| B | `AddedOptionalProperty` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-3) ([head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L63)) | PlaywrightWorkspaceProperties — sessionArtifacts — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-728f2ad451922bf8](#issue-severity-mismatch-728f2ad451922bf8). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-10) |
| B | `AddedOptionalProperty` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-4) ([head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L67)) | PlaywrightWorkspaceProperties — storageIdentity — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-abdd064f721fc574](#issue-severity-mismatch-abdd064f721fc574). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-11) |

<a id="finding-review-partial"></a>
### Partial correlations

None.

<a id="finding-review-oad-only"></a>
### OAD-only findings

| Phase | Finding | Type / path | Source | Analysis | Suggested fix | Details |
| --- | --- | --- | --- | --- | --- | --- |
| B | `AddedPropertyInResponse` | PlaywrightWorkspace — identity — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L811) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L857) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-5e4901ccbed0aa2c](#issue-oad-only-5e4901ccbed0aa2c). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-5) |
| B | `AddedOptionalProperty` | PlaywrightWorkspace — identity — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L811) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L857) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-e6c86b02009527c3](#issue-oad-only-e6c86b02009527c3). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-6) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdate — identity — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1021) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1146) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-8b692466ce28ce8f](#issue-oad-only-8b692466ce28ce8f). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-12) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — reporting — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-593af80d9823683a](#issue-oad-only-593af80d9823683a). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-13) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — storageUri — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-d05ca2d93f4fa0e1](#issue-oad-only-d05ca2d93f4fa0e1). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-14) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — sessionArtifacts — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-bd93e0c663d9cbad](#issue-oad-only-bd93e0c663d9cbad). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-15) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — storageIdentity — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-5c13aad6ab3a6743](#issue-oad-only-5c13aad6ab3a6743). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-16) |
| B | `AddedPropertyInResponse` | PlaywrightWorkspaceProperties — sessionArtifacts — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L897) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-ccccc4b807e2f3a5](#issue-oad-only-ccccc4b807e2f3a5). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-17) |
| B | `AddedPropertyInResponse` | PlaywrightWorkspaceProperties — storageIdentity — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L897) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-395baf88ebe3961f](#issue-oad-only-395baf88ebe3961f). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-18) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceProperties — sessionArtifacts — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L897) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-f806b8632093cca5](#issue-oad-only-f806b8632093cca5). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-19) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceProperties — storageIdentity — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L897) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-a40324fef2df0386](#issue-oad-only-a40324fef2df0386). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-20) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — sessionArtifacts — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L1093) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-513c15405a614e3c](#issue-oad-only-513c15405a614e3c). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-21) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — storageIdentity — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L1093) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-4b1e5ab49d8c3fa9](#issue-oad-only-4b1e5ab49d8c3fa9). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-22) |

<a id="finding-review-typespec-only"></a>
### TypeSpec-only findings

| Phase | Finding | Type / path | Source | Analysis | Suggested review | Details |
| --- | --- | --- | --- | --- | --- | --- |
| B | `ResourcePropertyAdded` | Azure.ResourceManager.ManagedServiceIdentityProperty.identity | head unavailable: Analyzer location could not be mapped to a repository-relative source path | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-4287ee0121388a8c](#issue-typespec-only-4287ee0121388a8c). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-5) |

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
| A | Unavailable | 2643 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444904) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/8a0010d1a3a0de5c-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 3370 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright` | Phase A (`same-version`) | `2025-07-01-preview` → `2025-07-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/8a0010d1a3a0de5c-phase-a.md) |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright` | Phase A (`same-version`) | `2025-09-01` → `2025-09-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/8a0010d1a3a0de5c-phase-a.md) |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright` | Phase A (`same-version`) | `2026-01-01-preview` → `2026-01-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/8a0010d1a3a0de5c-phase-a.md) |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright` | Phase A (`same-version`) | `2026-02-01-preview` → `2026-02-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/8a0010d1a3a0de5c-phase-a.md) |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright` | Phase A (`same-version`) | `2026-08-01-preview` → `2026-08-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/8a0010d1a3a0de5c-phase-a.md) |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright` | Phase B (`cross-version`) | `2025-09-01` → `2026-10-01-preview` | 1 | 6 | 12 | [generated combined Markdown](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-concordant-zero-249c2a63c6eee5af"></a>`issue-concordant-zero-249c2a63c6eee5af` | 0 | A | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase A. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-A` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |
| <a id="issue-oad-only-395baf88ebe3961f"></a><a id="issue-oad-only-4b1e5ab49d8c3fa9"></a><a id="issue-oad-only-513c15405a614e3c"></a><a id="issue-oad-only-593af80d9823683a"></a><a id="issue-oad-only-5c13aad6ab3a6743"></a><a id="issue-oad-only-5e4901ccbed0aa2c"></a><a id="issue-oad-only-8b692466ce28ce8f"></a><a id="issue-oad-only-a40324fef2df0386"></a><a id="issue-oad-only-bd93e0c663d9cbad"></a><a id="issue-oad-only-ccccc4b807e2f3a5"></a><a id="issue-oad-only-d05ca2d93f4fa0e1"></a><a id="issue-oad-only-e6c86b02009527c3"></a><a id="issue-oad-only-f806b8632093cca5"></a>`issue-oad-only-395baf88ebe3961f` (+12 related) | 13 | B | `oad-only` | requires-review | OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent. Contributes one finding to OAD-only or missed-equivalent totals. | Review detector coverage and the canonical target mapping. | medium; generated | `oad-finding:B-oad-18` — AddedPropertyInResponse: The new version has a new property 'storageIdentity' in response that was not found in the old version.<br>`oad-finding:B-oad-22` — AddedOptionalProperty: The new version has a new optional property 'storageIdentity' that was not found in the old version.<br>`oad-finding:B-oad-21` — AddedOptionalProperty: The new version has a new optional property 'sessionArtifacts' that was not found in the old version.<br>`oad-finding:B-oad-13` — AddedOptionalProperty: The new version has a new optional property 'reporting' that was not found in the old version.<br>`oad-finding:B-oad-16` — AddedOptionalProperty: The new version has a new optional property 'storageIdentity' that was not found in the old version.<br>`oad-finding:B-oad-5` — AddedPropertyInResponse: The new version has a new property 'identity' in response that was not found in the old version.<br>`oad-finding:B-oad-12` — AddedOptionalProperty: The new version has a new optional property 'identity' that was not found in the old version.<br>`oad-finding:B-oad-20` — AddedOptionalProperty: The new version has a new optional property 'storageIdentity' that was not found in the old version.<br>`oad-finding:B-oad-15` — AddedOptionalProperty: The new version has a new optional property 'sessionArtifacts' that was not found in the old version.<br>`oad-finding:B-oad-17` — AddedPropertyInResponse: The new version has a new property 'sessionArtifacts' in response that was not found in the old version.<br>`oad-finding:B-oad-14` — AddedOptionalProperty: The new version has a new optional property 'storageUri' that was not found in the old version.<br>`oad-finding:B-oad-6` — AddedOptionalProperty: The new version has a new optional property 'identity' that was not found in the old version.<br>`oad-finding:B-oad-19` — AddedOptionalProperty: The new version has a new optional property 'sessionArtifacts' that was not found in the old version. |
| <a id="issue-severity-mismatch-2625c54c8d430058"></a><a id="issue-severity-mismatch-3836c0c874b94a0e"></a><a id="issue-severity-mismatch-3e920163404f6132"></a><a id="issue-severity-mismatch-4309a90c69d311b4"></a><a id="issue-severity-mismatch-728f2ad451922bf8"></a><a id="issue-severity-mismatch-763ee72c8e1f9604"></a><a id="issue-severity-mismatch-882d4df1d2879e93"></a><a id="issue-severity-mismatch-9a4bf6914c8fa440"></a><a id="issue-severity-mismatch-abdd064f721fc574"></a><a id="issue-severity-mismatch-e4149aace4e42318"></a>`issue-severity-mismatch-2625c54c8d430058` (+9 related) | 15 | B | `severity-mismatch` | requires-review | Semantically matched findings disagree on actionable error status. Changes error-equivalence totals without changing semantic-match totals. | Align severity policy or document the intentional difference. | high; generated | `oad-finding:B-oad-4` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-0` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-9` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-8` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-10` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-7` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-3` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-2` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-11` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-1` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — TypeSpec severity: error; suppressed=false |
| <a id="issue-typespec-only-4287ee0121388a8c"></a>`issue-typespec-only-4287ee0121388a8c` | 1 | B | `typespec-only` | requires-review | The TypeSpec finding has no selected OAD equivalent. Contributes one finding to TypeSpec-only totals. | Confirm whether this is additional coverage, noise, or a matching gap. | medium; generated | `typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — ResourcePropertyAdded: Request property 'identity' was added at body.properties.identity. |

## Finding details

<a id="finding-b-oad-0"></a>
### B-oad-0 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-0` — `AddedPropertyInResponse` — The new version has a new property 'reporting' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-0)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-3836c0c874b94a0e](#issue-severity-mismatch-3836c0c874b94a0e)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-1"></a>
### B-oad-1 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-1` — `AddedPropertyInResponse` — The new version has a new property 'storageUri' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-1)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-e4149aace4e42318](#issue-severity-mismatch-e4149aace4e42318)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-2"></a>
### B-oad-2 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-2` — `AddedPropertyInResponse` — The new version has a new property 'subnetId' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-2)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-9a4bf6914c8fa440](#issue-severity-mismatch-9a4bf6914c8fa440)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-3"></a>
### B-oad-3 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-3` — `AddedPropertyInResponse` — The new version has a new property 'sessionArtifacts' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-3)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-882d4df1d2879e93](#issue-severity-mismatch-882d4df1d2879e93)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-4"></a>
### B-oad-4 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-4` — `AddedPropertyInResponse` — The new version has a new property 'storageIdentity' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-4)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-2625c54c8d430058](#issue-severity-mismatch-2625c54c8d430058)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-5"></a>
### B-oad-5 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-5` — `AddedPropertyInResponse` — The new version has a new property 'identity' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 811](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L811) — JSONPath `definitions.PlaywrightWorkspace.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 857](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L857) — JSONPath `definitions.PlaywrightWorkspace.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
- **Related analysis:** [issue-oad-only-5e4901ccbed0aa2c](#issue-oad-only-5e4901ccbed0aa2c)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-6"></a>
### B-oad-6 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-6` — `AddedOptionalProperty` — The new version has a new optional property 'identity' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 811](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L811) — JSONPath `definitions.PlaywrightWorkspace.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 857](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L857) — JSONPath `definitions.PlaywrightWorkspace.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
- **Related analysis:** [issue-oad-only-e6c86b02009527c3](#issue-oad-only-e6c86b02009527c3)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-7"></a>
### B-oad-7 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-7` — `AddedOptionalProperty` — The new version has a new optional property 'reporting' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-0)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-763ee72c8e1f9604](#issue-severity-mismatch-763ee72c8e1f9604)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-8"></a>
### B-oad-8 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-8` — `AddedOptionalProperty` — The new version has a new optional property 'storageUri' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-1)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-4309a90c69d311b4](#issue-severity-mismatch-4309a90c69d311b4)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-9"></a>
### B-oad-9 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-9` — `AddedOptionalProperty` — The new version has a new optional property 'subnetId' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-2)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-3e920163404f6132](#issue-severity-mismatch-3e920163404f6132)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-10"></a>
### B-oad-10 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-10` — `AddedOptionalProperty` — The new version has a new optional property 'sessionArtifacts' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-3)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-728f2ad451922bf8](#issue-severity-mismatch-728f2ad451922bf8)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-11"></a>
### B-oad-11 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-11` — `AddedOptionalProperty` — The new version has a new optional property 'storageIdentity' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-4)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-abdd064f721fc574](#issue-severity-mismatch-abdd064f721fc574)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-12"></a>
### B-oad-12 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-12` — `AddedOptionalProperty` — The new version has a new optional property 'identity' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1021](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1021) — JSONPath `definitions.PlaywrightWorkspaceUpdate.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1146](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1146) — JSONPath `definitions.PlaywrightWorkspaceUpdate.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
- **Related analysis:** [issue-oad-only-8b692466ce28ce8f](#issue-oad-only-8b692466ce28ce8f)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-13"></a>
### B-oad-13 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-13` — `AddedOptionalProperty` — The new version has a new optional property 'reporting' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1039](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1168](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-oad-only-593af80d9823683a](#issue-oad-only-593af80d9823683a)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-14"></a>
### B-oad-14 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-14` — `AddedOptionalProperty` — The new version has a new optional property 'storageUri' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1039](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1168](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-oad-only-d05ca2d93f4fa0e1](#issue-oad-only-d05ca2d93f4fa0e1)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-15"></a>
### B-oad-15 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-15` — `AddedOptionalProperty` — The new version has a new optional property 'sessionArtifacts' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1039](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1168](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-oad-only-bd93e0c663d9cbad](#issue-oad-only-bd93e0c663d9cbad)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-16"></a>
### B-oad-16 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-16` — `AddedOptionalProperty` — The new version has a new optional property 'storageIdentity' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1039](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1168](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-oad-only-5c13aad6ab3a6743](#issue-oad-only-5c13aad6ab3a6743)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-17"></a>
### B-oad-17 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-17` — `AddedPropertyInResponse` — The new version has a new property 'sessionArtifacts' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json, line 897](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L897) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
- **Related analysis:** [issue-oad-only-ccccc4b807e2f3a5](#issue-oad-only-ccccc4b807e2f3a5)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-18"></a>
### B-oad-18 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-18` — `AddedPropertyInResponse` — The new version has a new property 'storageIdentity' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json, line 897](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L897) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
- **Related analysis:** [issue-oad-only-395baf88ebe3961f](#issue-oad-only-395baf88ebe3961f)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-19"></a>
### B-oad-19 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-19` — `AddedOptionalProperty` — The new version has a new optional property 'sessionArtifacts' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json, line 897](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L897) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
- **Related analysis:** [issue-oad-only-f806b8632093cca5](#issue-oad-only-f806b8632093cca5)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-20"></a>
### B-oad-20 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-20` — `AddedOptionalProperty` — The new version has a new optional property 'storageIdentity' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json, line 897](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L897) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
- **Related analysis:** [issue-oad-only-a40324fef2df0386](#issue-oad-only-a40324fef2df0386)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-21"></a>
### B-oad-21 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-21` — `AddedOptionalProperty` — The new version has a new optional property 'sessionArtifacts' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json, line 1093](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L1093) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1168](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; property, full property path, leaf property; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
- **Related analysis:** [issue-oad-only-513c15405a614e3c](#issue-oad-only-513c15405a614e3c)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-22"></a>
### B-oad-22 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-22` — `AddedOptionalProperty` — The new version has a new optional property 'storageIdentity' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490444803) (digest `8ad2af14627361ce28c4172fcd216fa1febf4af83d11e4ea5d8036c590d692da`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json, line 1093](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L1093) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1168](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; property, full property path, leaf property; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
- **Related analysis:** [issue-oad-only-4b1e5ab49d8c3fa9](#issue-oad-only-4b1e5ab49d8c3fa9)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-0"></a>
### specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — `ResourcePropertyAdded` — Request property 'reporting' was added at body.properties.properties.reporting.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.LoadTestService/playwrightWorkspaces/{}; project `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright`; versions `2025-09-01` → `2026-10-01-preview`
- **Source declaration identity:** `Playwright.Management.PlaywrightWorkspaceProperties.reporting`
- **Wire identity:** `body.properties.properties.reporting`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) (digest `9d6b2dc1e23b7132af21495710cd1a2138366e91951fe92bd3d79bfd1f269410`)
- **TypeSpec source:** [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp, line 46](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L46)
- **Related analysis:** [issue-severity-mismatch-3836c0c874b94a0e](#issue-severity-mismatch-3836c0c874b94a0e)

<a id="finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-1"></a>
### specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — `ResourcePropertyAdded` — Request property 'storageUri' was added at body.properties.properties.storageUri.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.LoadTestService/playwrightWorkspaces/{}; project `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright`; versions `2025-09-01` → `2026-10-01-preview`
- **Source declaration identity:** `Playwright.Management.PlaywrightWorkspaceProperties.storageUri`
- **Wire identity:** `body.properties.properties.storageUri`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) (digest `9d6b2dc1e23b7132af21495710cd1a2138366e91951fe92bd3d79bfd1f269410`)
- **TypeSpec source:** [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp, line 50](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L50)
- **Related analysis:** [issue-severity-mismatch-4309a90c69d311b4](#issue-severity-mismatch-4309a90c69d311b4)

<a id="finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-2"></a>
### specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — `ResourcePropertyAdded` — Request property 'subnetId' was added at body.properties.properties.subnetId.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.LoadTestService/playwrightWorkspaces/{}; project `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright`; versions `2025-09-01` → `2026-10-01-preview`
- **Source declaration identity:** `Playwright.Management.PlaywrightWorkspaceProperties.subnetId`
- **Wire identity:** `body.properties.properties.subnetId`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) (digest `9d6b2dc1e23b7132af21495710cd1a2138366e91951fe92bd3d79bfd1f269410`)
- **TypeSpec source:** [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp, line 55](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L55)
- **Related analysis:** [issue-severity-mismatch-3e920163404f6132](#issue-severity-mismatch-3e920163404f6132)

<a id="finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-3"></a>
### specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — `ResourcePropertyAdded` — Request property 'sessionArtifacts' was added at body.properties.properties.sessionArtifacts.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.LoadTestService/playwrightWorkspaces/{}; project `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright`; versions `2025-09-01` → `2026-10-01-preview`
- **Source declaration identity:** `Playwright.Management.PlaywrightWorkspaceProperties.sessionArtifacts`
- **Wire identity:** `body.properties.properties.sessionArtifacts`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) (digest `9d6b2dc1e23b7132af21495710cd1a2138366e91951fe92bd3d79bfd1f269410`)
- **TypeSpec source:** [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp, line 63](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L63)
- **Related analysis:** [issue-severity-mismatch-728f2ad451922bf8](#issue-severity-mismatch-728f2ad451922bf8)

<a id="finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-4"></a>
### specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — `ResourcePropertyAdded` — Request property 'storageIdentity' was added at body.properties.properties.storageIdentity.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.LoadTestService/playwrightWorkspaces/{}; project `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright`; versions `2025-09-01` → `2026-10-01-preview`
- **Source declaration identity:** `Playwright.Management.PlaywrightWorkspaceProperties.storageIdentity`
- **Wire identity:** `body.properties.properties.storageIdentity`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) (digest `9d6b2dc1e23b7132af21495710cd1a2138366e91951fe92bd3d79bfd1f269410`)
- **TypeSpec source:** [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp, line 67](https://github.com/Azure/azure-rest-api-specs/blob/4ff431b69626accbf18a853bb5094c2ad24d41ee/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L67)
- **Related analysis:** [issue-severity-mismatch-2625c54c8d430058](#issue-severity-mismatch-2625c54c8d430058)

<a id="finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-5"></a>
### specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — `ResourcePropertyAdded` — Request property 'identity' was added at body.properties.identity.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.LoadTestService/playwrightWorkspaces/{}; project `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright`; versions `2025-09-01` → `2026-10-01-preview`
- **Source declaration identity:** `Azure.ResourceManager.ManagedServiceIdentityProperty.identity`
- **Wire identity:** `body.properties.identity`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) (digest `9d6b2dc1e23b7132af21495710cd1a2138366e91951fe92bd3d79bfd1f269410`)
- **TypeSpec source:** head: line 256 — Analyzer location could not be mapped to a repository-relative source path
- **Related analysis:** [issue-typespec-only-4287ee0121388a8c](#issue-typespec-only-4287ee0121388a8c)

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
$prepared = node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js prepare --typespec-revision 7824998e1b7e926ce3b09b39fc376742b726a028 | ConvertFrom-Json
if ($prepared.artifactDigest -ne 'fd27cd230327eead1921152fc701f7b9b3582ba8b15e1e5600390d6a65a5764f') { throw 'Prepared analyzer digest does not match the report' }
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
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47058' --tool-revision 7824998e1b7e926ce3b09b39fc376742b726a028 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright

```powershell
Push-Location target
node $prepared.executable 'specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright' --base-ref efb0884620a801846ba9af4f622e004e08522583 --phase same-version --json-output '../specification-loadtestservice-resource-manager-Microsoft.LoadTestService-playwright-phase-a.json' --markdown-output '../specification-loadtestservice-resource-manager-Microsoft.LoadTestService-playwright-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright' --base-ref efb0884620a801846ba9af4f622e004e08522583 --json-output '../specification-loadtestservice-resource-manager-Microsoft.LoadTestService-playwright-phase-b-evidence.json' --markdown-output '../specification-loadtestservice-resource-manager-Microsoft.LoadTestService-playwright-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
