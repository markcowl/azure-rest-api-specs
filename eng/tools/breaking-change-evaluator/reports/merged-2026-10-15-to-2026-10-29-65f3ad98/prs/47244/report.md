# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47244:068c4317e692ddb5d56c93c19107cdea46fc32f4`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47244 — Added new api-version 2026-11-01-preview for Browser Proxy feature](https://github.com/Azure/azure-rest-api-specs/pull/47244)
- **Author:** mjmadhu
- **State:** closed (merged) at 2026-10-26T11:42:27Z
- **Base:** `main` at `9752dea5ba791218e33ddc751198df21e2ef731a`
- **Head:** `users/jmadhu/proxy` at `068c4317e692ddb5d56c93c19107cdea46fc32f4`
- **Changed TypeSpec files:** `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/main.tsp`, `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | [29](#finding-review) |
| Informational OAD records | [6](#finding-review-informational) |
| TypeSpec findings | [8](#finding-review) |
| Exact | [14](#finding-review-correlations) |
| Probable (review required) | 0 |
| Intentional Swagger-only | 0 |
| Missed equivalent | [15](#finding-review-oad-only) |
| TypeSpec-only | [1](#finding-review-typespec-only) |
| Ambiguous | 0 |

**Exact OAD coverage:** 14 / 29 (48.3%)
**Review-inclusive OAD coverage:** 14 / 29 (48.3%)

### By phase

| Phase | Independent OAD execution | TypeSpec mode | Outcome | Comparable OAD | Informational OAD | TypeSpec findings | Exact | Probable | Intentional gap | Missed equivalent | TypeSpec-only | Exact OAD coverage | Review-inclusive OAD coverage |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | [Swagger Breaking Change run 40288126242](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126242) | `same-version` | concordant-zero | 0 | [6](#finding-review-informational) | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 40288126188](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) | `cross-version` | compared | [29](#finding-review) | 0 | [8](#finding-review) | [14](#finding-review-correlations) | 0 | 0 | [15](#finding-review-oad-only) | [1](#finding-review-typespec-only) | 14 / 29 (48.3%) | 14 / 29 (48.3%) |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B | Breaking Change (Cross-Version) | 0 | [8](#finding-review) | 0 | 0 | 0 | [7](#finding-review-partial) | 0 | [1](#finding-review-typespec-only) |

<a id="finding-review"></a>
## Finding review

Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.

<a id="finding-review-correlations"></a>
### Correlations

| Phase | OAD finding | TypeSpec finding(s) | Type / path | Sources | Analysis | Suggested fix / review | Details |
| --- | --- | --- | --- | --- | --- | --- | --- |
| B | `AddedPropertyInResponse` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-0) ([head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L46)) | PlaywrightWorkspaceProperties — reporting — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-c191566776959134](#issue-severity-mismatch-c191566776959134). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-0) |
| B | `AddedPropertyInResponse` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-1) ([head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L50)) | PlaywrightWorkspaceProperties — storageUri — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-b469a451094a4905](#issue-severity-mismatch-b469a451094a4905). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-1) |
| B | `AddedPropertyInResponse` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-2) ([head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L55)) | PlaywrightWorkspaceProperties — subnetId — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-0f60b3c55fd8158c](#issue-severity-mismatch-0f60b3c55fd8158c). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-2) |
| B | `AddedPropertyInResponse` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-3) ([head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L63)) | PlaywrightWorkspaceProperties — sessionArtifacts — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-8ccda21133f1a09c](#issue-severity-mismatch-8ccda21133f1a09c). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-3) |
| B | `AddedPropertyInResponse` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-4) ([head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L67)) | PlaywrightWorkspaceProperties — storageIdentity — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-601f97a24a37caf5](#issue-severity-mismatch-601f97a24a37caf5). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-4) |
| B | `AddedPropertyInResponse` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-5) ([head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L71)) | PlaywrightWorkspaceProperties — browserProxy — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-4c6e8261fede9eda](#issue-severity-mismatch-4c6e8261fede9eda). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-5) |
| B | `AddedPropertyInResponse` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-6) ([head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L75)) | PlaywrightWorkspaceProperties — linkedKeyVault — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-6b00675576b5a12f](#issue-severity-mismatch-6b00675576b5a12f). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-6) |
| B | `AddedOptionalProperty` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-0) ([head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L46)) | PlaywrightWorkspaceProperties — reporting — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-96431506271176ab](#issue-severity-mismatch-96431506271176ab). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-9) |
| B | `AddedOptionalProperty` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-1) ([head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L50)) | PlaywrightWorkspaceProperties — storageUri — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-9e0af01cbafcd05a](#issue-severity-mismatch-9e0af01cbafcd05a). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-10) |
| B | `AddedOptionalProperty` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-2) ([head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L55)) | PlaywrightWorkspaceProperties — subnetId — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-b19cfad4e3fd6279](#issue-severity-mismatch-b19cfad4e3fd6279). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-11) |
| B | `AddedOptionalProperty` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-3) ([head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L63)) | PlaywrightWorkspaceProperties — sessionArtifacts — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-6964ba661d4ef47b](#issue-severity-mismatch-6964ba661d4ef47b). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-12) |
| B | `AddedOptionalProperty` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-4) ([head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L67)) | PlaywrightWorkspaceProperties — storageIdentity — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-aaf8f1044607d5df](#issue-severity-mismatch-aaf8f1044607d5df). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-13) |
| B | `AddedOptionalProperty` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-5) ([head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L71)) | PlaywrightWorkspaceProperties — browserProxy — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-008e4dfd2ae76bc8](#issue-severity-mismatch-008e4dfd2ae76bc8). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-14) |
| B | `AddedOptionalProperty` | [`ResourcePropertyAdded`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-6) ([head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L75)) | PlaywrightWorkspaceProperties — linkedKeyVault — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-30ddeaf2b8f7d96c](#issue-severity-mismatch-30ddeaf2b8f7d96c). | Align severity policy or document the intentional difference. | [details](#finding-b-oad-15) |

<a id="finding-review-partial"></a>
### Partial correlations

None.

<a id="finding-review-oad-only"></a>
### OAD-only findings

| Phase | Finding | Type / path | Source | Analysis | Suggested fix | Details |
| --- | --- | --- | --- | --- | --- | --- |
| B | `AddedPropertyInResponse` | PlaywrightWorkspace — identity — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L811) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L872) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-a6f3e9aa2982fd68](#issue-oad-only-a6f3e9aa2982fd68). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-7) |
| B | `AddedOptionalProperty` | PlaywrightWorkspace — identity — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L811) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L872) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-71cab4422df43d56](#issue-oad-only-71cab4422df43d56). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-8) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdate — identity — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1021) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1190) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-400f3df321103ad7](#issue-oad-only-400f3df321103ad7). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-16) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — reporting — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1212) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-ed96201698a6f646](#issue-oad-only-ed96201698a6f646). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-17) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — storageUri — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1212) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-cbe289fe53254222](#issue-oad-only-cbe289fe53254222). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-18) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — sessionArtifacts — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1212) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-8f78f6183131b208](#issue-oad-only-8f78f6183131b208). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-19) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — storageIdentity — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1212) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-2e3d397ba9b71693](#issue-oad-only-2e3d397ba9b71693). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-20) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — browserProxy — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1212) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-15229974cdf88e59](#issue-oad-only-15229974cdf88e59). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-21) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — linkedKeyVault — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1212) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-55910fd5e54fd067](#issue-oad-only-55910fd5e54fd067). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-22) |
| B | `AddedPropertyInResponse` | PlaywrightWorkspaceProperties — browserProxy — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-50f5548a6dbc6e70](#issue-oad-only-50f5548a6dbc6e70). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-23) |
| B | `AddedPropertyInResponse` | PlaywrightWorkspaceProperties — linkedKeyVault — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-e82d04cb41c46281](#issue-oad-only-e82d04cb41c46281). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-24) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceProperties — browserProxy — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-03eb9ccee2e6e4f9](#issue-oad-only-03eb9ccee2e6e4f9). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-25) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceProperties — linkedKeyVault — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-3dfbf4f8a716cc21](#issue-oad-only-3dfbf4f8a716cc21). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-26) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — browserProxy — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1212) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-09bbbfcfbc967349](#issue-oad-only-09bbbfcfbc967349). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-27) |
| B | `AddedOptionalProperty` | PlaywrightWorkspaceUpdateProperties — linkedKeyVault — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1212) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-d69194dd3a7ab193](#issue-oad-only-d69194dd3a7ab193). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-28) |

<a id="finding-review-typespec-only"></a>
### TypeSpec-only findings

| Phase | Finding | Type / path | Source | Analysis | Suggested review | Details |
| --- | --- | --- | --- | --- | --- | --- |
| B | `ResourcePropertyAdded` | Azure.ResourceManager.ManagedServiceIdentityProperty.identity | head unavailable: Analyzer location could not be mapped to a repository-relative source path | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-022b7b83a4ac5f1c](#issue-typespec-only-022b7b83a4ac5f1c). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-7) |

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

| Phase | Finding | Type / path | Source | Analysis | Suggested action | Details |
| --- | --- | --- | --- | --- | --- | --- |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2025-07-01-preview/playwright.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2025-07-01-preview/playwright.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-0) |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-01-01-preview/playwright.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-01-01-preview/playwright.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-1) |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-02-01-preview/playwright.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-02-01-preview/playwright.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-2) |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-3) |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-4) |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-5) |

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 5692 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126242) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/8a0010d1a3a0de5c-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 6646 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright` | Phase A (`same-version`) | `2025-07-01-preview` → `2025-07-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/8a0010d1a3a0de5c-phase-a.md) |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright` | Phase A (`same-version`) | `2025-09-01` → `2025-09-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/8a0010d1a3a0de5c-phase-a.md) |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright` | Phase A (`same-version`) | `2026-01-01-preview` → `2026-01-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/8a0010d1a3a0de5c-phase-a.md) |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright` | Phase A (`same-version`) | `2026-02-01-preview` → `2026-02-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/8a0010d1a3a0de5c-phase-a.md) |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright` | Phase A (`same-version`) | `2026-08-01-preview` → `2026-08-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/8a0010d1a3a0de5c-phase-a.md) |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright` | Phase A (`same-version`) | `2026-10-01-preview` → `2026-10-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/8a0010d1a3a0de5c-phase-a.md) |
| `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright` | Phase B (`cross-version`) | `2025-09-01` → `2026-11-01-preview` | 1 | 8 | 16 | [generated combined Markdown](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-concordant-zero-c7aba48acff0f1fd"></a>`issue-concordant-zero-c7aba48acff0f1fd` | 0 | A | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase A. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-A` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |
| <a id="issue-oad-only-03eb9ccee2e6e4f9"></a><a id="issue-oad-only-09bbbfcfbc967349"></a><a id="issue-oad-only-15229974cdf88e59"></a><a id="issue-oad-only-2e3d397ba9b71693"></a><a id="issue-oad-only-3dfbf4f8a716cc21"></a><a id="issue-oad-only-400f3df321103ad7"></a><a id="issue-oad-only-50f5548a6dbc6e70"></a><a id="issue-oad-only-55910fd5e54fd067"></a><a id="issue-oad-only-71cab4422df43d56"></a><a id="issue-oad-only-8f78f6183131b208"></a><a id="issue-oad-only-a6f3e9aa2982fd68"></a><a id="issue-oad-only-cbe289fe53254222"></a><a id="issue-oad-only-d69194dd3a7ab193"></a><a id="issue-oad-only-e82d04cb41c46281"></a><a id="issue-oad-only-ed96201698a6f646"></a>`issue-oad-only-03eb9ccee2e6e4f9` (+14 related) | 15 | B | `oad-only` | requires-review | OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent. Contributes one finding to OAD-only or missed-equivalent totals. | Review detector coverage and the canonical target mapping. | medium; generated | `oad-finding:B-oad-25` — AddedOptionalProperty: The new version has a new optional property 'browserProxy' that was not found in the old version.<br>`oad-finding:B-oad-27` — AddedOptionalProperty: The new version has a new optional property 'browserProxy' that was not found in the old version.<br>`oad-finding:B-oad-21` — AddedOptionalProperty: The new version has a new optional property 'browserProxy' that was not found in the old version.<br>`oad-finding:B-oad-20` — AddedOptionalProperty: The new version has a new optional property 'storageIdentity' that was not found in the old version.<br>`oad-finding:B-oad-26` — AddedOptionalProperty: The new version has a new optional property 'linkedKeyVault' that was not found in the old version.<br>`oad-finding:B-oad-16` — AddedOptionalProperty: The new version has a new optional property 'identity' that was not found in the old version.<br>`oad-finding:B-oad-23` — AddedPropertyInResponse: The new version has a new property 'browserProxy' in response that was not found in the old version.<br>`oad-finding:B-oad-22` — AddedOptionalProperty: The new version has a new optional property 'linkedKeyVault' that was not found in the old version.<br>`oad-finding:B-oad-8` — AddedOptionalProperty: The new version has a new optional property 'identity' that was not found in the old version.<br>`oad-finding:B-oad-19` — AddedOptionalProperty: The new version has a new optional property 'sessionArtifacts' that was not found in the old version.<br>`oad-finding:B-oad-7` — AddedPropertyInResponse: The new version has a new property 'identity' in response that was not found in the old version.<br>`oad-finding:B-oad-18` — AddedOptionalProperty: The new version has a new optional property 'storageUri' that was not found in the old version.<br>`oad-finding:B-oad-28` — AddedOptionalProperty: The new version has a new optional property 'linkedKeyVault' that was not found in the old version.<br>`oad-finding:B-oad-24` — AddedPropertyInResponse: The new version has a new property 'linkedKeyVault' in response that was not found in the old version.<br>`oad-finding:B-oad-17` — AddedOptionalProperty: The new version has a new optional property 'reporting' that was not found in the old version. |
| <a id="issue-severity-mismatch-008e4dfd2ae76bc8"></a><a id="issue-severity-mismatch-0f60b3c55fd8158c"></a><a id="issue-severity-mismatch-30ddeaf2b8f7d96c"></a><a id="issue-severity-mismatch-4c6e8261fede9eda"></a><a id="issue-severity-mismatch-601f97a24a37caf5"></a><a id="issue-severity-mismatch-6964ba661d4ef47b"></a><a id="issue-severity-mismatch-6b00675576b5a12f"></a><a id="issue-severity-mismatch-8ccda21133f1a09c"></a><a id="issue-severity-mismatch-96431506271176ab"></a><a id="issue-severity-mismatch-9e0af01cbafcd05a"></a><a id="issue-severity-mismatch-aaf8f1044607d5df"></a><a id="issue-severity-mismatch-b19cfad4e3fd6279"></a><a id="issue-severity-mismatch-b469a451094a4905"></a><a id="issue-severity-mismatch-c191566776959134"></a>`issue-severity-mismatch-008e4dfd2ae76bc8` (+13 related) | 21 | B | `severity-mismatch` | requires-review | Semantically matched findings disagree on actionable error status. Changes error-equivalence totals without changing semantic-match totals. | Align severity policy or document the intentional difference. | high; generated | `oad-finding:B-oad-14` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-2` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-15` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-5` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-4` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-12` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-6` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-3` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-9` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-10` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-13` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-11` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-1` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — TypeSpec severity: error; suppressed=false<br>`oad-finding:B-oad-0` — OAD severity: Warning<br>`typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — TypeSpec severity: error; suppressed=false |
| <a id="issue-typespec-only-022b7b83a4ac5f1c"></a>`issue-typespec-only-022b7b83a4ac5f1c` | 1 | B | `typespec-only` | requires-review | The TypeSpec finding has no selected OAD equivalent. Contributes one finding to TypeSpec-only totals. | Confirm whether this is additional coverage, noise, or a matching gap. | medium; generated | `typespec-finding:specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — ResourcePropertyAdded: Request property 'identity' was added at body.properties.identity. |

## Finding details

<a id="finding-a-oad-0"></a>
### A-oad-0 — `NoVersionChange`

- **Swagger finding:** `A-oad-0` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126242) (digest `33bd0388326e4168beebddfcde9162388225727b33d8ba92edf4ddbff4ebc34c`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2025-07-01-preview/playwright.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2025-07-01-preview/playwright.json#L1); [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2025-07-01-preview/playwright.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2025-07-01-preview/playwright.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document playwright.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-1"></a>
### A-oad-1 — `NoVersionChange`

- **Swagger finding:** `A-oad-1` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126242) (digest `33bd0388326e4168beebddfcde9162388225727b33d8ba92edf4ddbff4ebc34c`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-01-01-preview/playwright.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-01-01-preview/playwright.json#L1); [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-01-01-preview/playwright.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-01-01-preview/playwright.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document playwright.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-2"></a>
### A-oad-2 — `NoVersionChange`

- **Swagger finding:** `A-oad-2` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126242) (digest `33bd0388326e4168beebddfcde9162388225727b33d8ba92edf4ddbff4ebc34c`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-02-01-preview/playwright.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-02-01-preview/playwright.json#L1); [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-02-01-preview/playwright.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-02-01-preview/playwright.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document playwright.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-3"></a>
### A-oad-3 — `NoVersionChange`

- **Swagger finding:** `A-oad-3` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126242) (digest `33bd0388326e4168beebddfcde9162388225727b33d8ba92edf4ddbff4ebc34c`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L1); [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-08-01-preview/playwright.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document playwright.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-4"></a>
### A-oad-4 — `NoVersionChange`

- **Swagger finding:** `A-oad-4` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126242) (digest `33bd0388326e4168beebddfcde9162388225727b33d8ba92edf4ddbff4ebc34c`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1); [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document playwright.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-5"></a>
### A-oad-5 — `NoVersionChange`

- **Swagger finding:** `A-oad-5` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126242) (digest `33bd0388326e4168beebddfcde9162388225727b33d8ba92edf4ddbff4ebc34c`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1); [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document playwright.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-b-oad-0"></a>
### B-oad-0 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-0` — `AddedPropertyInResponse` — The new version has a new property 'reporting' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-0)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-c191566776959134](#issue-severity-mismatch-c191566776959134)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-1"></a>
### B-oad-1 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-1` — `AddedPropertyInResponse` — The new version has a new property 'storageUri' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-1)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-b469a451094a4905](#issue-severity-mismatch-b469a451094a4905)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-2"></a>
### B-oad-2 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-2` — `AddedPropertyInResponse` — The new version has a new property 'subnetId' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-2)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-0f60b3c55fd8158c](#issue-severity-mismatch-0f60b3c55fd8158c)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-3"></a>
### B-oad-3 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-3` — `AddedPropertyInResponse` — The new version has a new property 'sessionArtifacts' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-3)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-8ccda21133f1a09c](#issue-severity-mismatch-8ccda21133f1a09c)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-4"></a>
### B-oad-4 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-4` — `AddedPropertyInResponse` — The new version has a new property 'storageIdentity' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-4)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-601f97a24a37caf5](#issue-severity-mismatch-601f97a24a37caf5)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-5"></a>
### B-oad-5 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-5` — `AddedPropertyInResponse` — The new version has a new property 'browserProxy' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-5)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-4c6e8261fede9eda](#issue-severity-mismatch-4c6e8261fede9eda)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-6"></a>
### B-oad-6 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-6` — `AddedPropertyInResponse` — The new version has a new property 'linkedKeyVault' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-6)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-6b00675576b5a12f](#issue-severity-mismatch-6b00675576b5a12f)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-7"></a>
### B-oad-7 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-7` — `AddedPropertyInResponse` — The new version has a new property 'identity' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 811](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L811) — JSONPath `definitions.PlaywrightWorkspace.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 872](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L872) — JSONPath `definitions.PlaywrightWorkspace.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
- **Related analysis:** [issue-oad-only-a6f3e9aa2982fd68](#issue-oad-only-a6f3e9aa2982fd68)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-8"></a>
### B-oad-8 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-8` — `AddedOptionalProperty` — The new version has a new optional property 'identity' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 811](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L811) — JSONPath `definitions.PlaywrightWorkspace.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 872](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L872) — JSONPath `definitions.PlaywrightWorkspace.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
- **Related analysis:** [issue-oad-only-71cab4422df43d56](#issue-oad-only-71cab4422df43d56)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-9"></a>
### B-oad-9 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-9` — `AddedOptionalProperty` — The new version has a new optional property 'reporting' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-0)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-96431506271176ab](#issue-severity-mismatch-96431506271176ab)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-10"></a>
### B-oad-10 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-10` — `AddedOptionalProperty` — The new version has a new optional property 'storageUri' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-1)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-9e0af01cbafcd05a](#issue-severity-mismatch-9e0af01cbafcd05a)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-11"></a>
### B-oad-11 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-11` — `AddedOptionalProperty` — The new version has a new optional property 'subnetId' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-2)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-b19cfad4e3fd6279](#issue-severity-mismatch-b19cfad4e3fd6279)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-12"></a>
### B-oad-12 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-12` — `AddedOptionalProperty` — The new version has a new optional property 'sessionArtifacts' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-3)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-6964ba661d4ef47b](#issue-severity-mismatch-6964ba661d4ef47b)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-13"></a>
### B-oad-13 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-13` — `AddedOptionalProperty` — The new version has a new optional property 'storageIdentity' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-4)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-aaf8f1044607d5df](#issue-severity-mismatch-aaf8f1044607d5df)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-14"></a>
### B-oad-14 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-14` — `AddedOptionalProperty` — The new version has a new optional property 'browserProxy' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-5)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-008e4dfd2ae76bc8](#issue-severity-mismatch-008e4dfd2ae76bc8)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-15"></a>
### B-oad-15 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-15` — `AddedOptionalProperty` — The new version has a new optional property 'linkedKeyVault' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 893](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L893) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Selected TypeSpec findings:** [`specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6`](#finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-6)
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-severity-mismatch-30ddeaf2b8f7d96c](#issue-severity-mismatch-30ddeaf2b8f7d96c)
- **Decision:** Exact semantic match in Phase B. Selected `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-b-oad-16"></a>
### B-oad-16 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-16` — `AddedOptionalProperty` — The new version has a new optional property 'identity' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1021](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1021) — JSONPath `definitions.PlaywrightWorkspaceUpdate.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 1190](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1190) — JSONPath `definitions.PlaywrightWorkspaceUpdate.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
- **Related analysis:** [issue-oad-only-400f3df321103ad7](#issue-oad-only-400f3df321103ad7)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-17"></a>
### B-oad-17 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-17` — `AddedOptionalProperty` — The new version has a new optional property 'reporting' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1039](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 1212](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1212) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-oad-only-ed96201698a6f646](#issue-oad-only-ed96201698a6f646)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-18"></a>
### B-oad-18 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-18` — `AddedOptionalProperty` — The new version has a new optional property 'storageUri' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1039](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 1212](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1212) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-oad-only-cbe289fe53254222](#issue-oad-only-cbe289fe53254222)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-19"></a>
### B-oad-19 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-19` — `AddedOptionalProperty` — The new version has a new optional property 'sessionArtifacts' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1039](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 1212](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1212) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-oad-only-8f78f6183131b208](#issue-oad-only-8f78f6183131b208)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-20"></a>
### B-oad-20 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-20` — `AddedOptionalProperty` — The new version has a new optional property 'storageIdentity' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1039](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 1212](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1212) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-oad-only-2e3d397ba9b71693](#issue-oad-only-2e3d397ba9b71693)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-21"></a>
### B-oad-21 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-21` — `AddedOptionalProperty` — The new version has a new optional property 'browserProxy' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1039](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 1212](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1212) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-oad-only-15229974cdf88e59](#issue-oad-only-15229974cdf88e59)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-22"></a>
### B-oad-22 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-22` — `AddedOptionalProperty` — The new version has a new optional property 'linkedKeyVault' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json, line 1039](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/stable/2025-09-01/playwright.json#L1039) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 1212](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1212) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; version pair; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; property, version pair, full property path, leaf property; rejected: schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; version pair; rejected: schema differs
- **Related analysis:** [issue-oad-only-55910fd5e54fd067](#issue-oad-only-55910fd5e54fd067)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-23"></a>
### B-oad-23 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-23` — `AddedPropertyInResponse` — The new version has a new property 'browserProxy' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
- **Related analysis:** [issue-oad-only-50f5548a6dbc6e70](#issue-oad-only-50f5548a6dbc6e70)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-24"></a>
### B-oad-24 — `AddedPropertyInResponse`

- **Swagger finding:** `B-oad-24` — `AddedPropertyInResponse` — The new version has a new property 'linkedKeyVault' in response that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
- **Related analysis:** [issue-oad-only-e82d04cb41c46281](#issue-oad-only-e82d04cb41c46281)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-25"></a>
### B-oad-25 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-25` — `AddedOptionalProperty` — The new version has a new optional property 'browserProxy' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
- **Related analysis:** [issue-oad-only-03eb9ccee2e6e4f9](#issue-oad-only-03eb9ccee2e6e4f9)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-26"></a>
### B-oad-26 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-26` — `AddedOptionalProperty` — The new version has a new optional property 'linkedKeyVault' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 943](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L943) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 958](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L958) — JSONPath `definitions.PlaywrightWorkspaceProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} response 200 | GET /subscriptions/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces response 200
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; schema, declaration, schema/declaration; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; schema, declaration, property, schema/declaration, full property path, leaf property; rejected: base version differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
- **Related analysis:** [issue-oad-only-3dfbf4f8a716cc21](#issue-oad-only-3dfbf4f8a716cc21)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-27"></a>
### B-oad-27 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-27` — `AddedOptionalProperty` — The new version has a new optional property 'browserProxy' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1168](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 1212](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1212) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; property, full property path, leaf property; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
- **Related analysis:** [issue-oad-only-09bbbfcfbc967349](#issue-oad-only-09bbbfcfbc967349)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-28"></a>
### B-oad-28 — `AddedOptionalProperty`

- **Swagger finding:** `B-oad-28` — `AddedOptionalProperty` — The new version has a new optional property 'linkedKeyVault' that was not found in the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40288126188) (digest `aad7902aef91a55879714ee6b726baf3b82a76cdcaf6311d610f8538981b551f`)
- **Swagger source:** [base: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json, line 1168](https://github.com/Azure/azure-rest-api-specs/blob/9752dea5ba791218e33ddc751198df21e2ef731a/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-10-01-preview/playwright.json#L1168) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`; [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json, line 1212](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/preview/2026-11-01-preview/playwright.json#L1212) — JSONPath `definitions.PlaywrightWorkspaceUpdateProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.loadtestservice/playwrightworkspaces/{} request
- **Candidates considered:**
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — score 0; limited identity evidence; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — score 0; property, full property path, leaf property; rejected: base version differs, schema differs
  - `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — score 0; limited identity evidence; rejected: base version differs, schema differs
- **Related analysis:** [issue-oad-only-d69194dd3a7ab193](#issue-oad-only-d69194dd3a7ab193)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-0"></a>
### specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-0` — `ResourcePropertyAdded` — Request property 'reporting' was added at body.properties.properties.reporting.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.LoadTestService/playwrightWorkspaces/{}; project `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright`; versions `2025-09-01` → `2026-11-01-preview`
- **Source declaration identity:** `Playwright.Management.PlaywrightWorkspaceProperties.reporting`
- **Wire identity:** `body.properties.properties.reporting`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) (digest `7acd6d834bc934f2de8da0df05fae811d7d91ca1e4f848b842e1f55ad42b4be6`)
- **TypeSpec source:** [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp, line 46](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L46)
- **Related analysis:** [issue-severity-mismatch-96431506271176ab](#issue-severity-mismatch-96431506271176ab)

<a id="finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-1"></a>
### specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-1` — `ResourcePropertyAdded` — Request property 'storageUri' was added at body.properties.properties.storageUri.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.LoadTestService/playwrightWorkspaces/{}; project `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright`; versions `2025-09-01` → `2026-11-01-preview`
- **Source declaration identity:** `Playwright.Management.PlaywrightWorkspaceProperties.storageUri`
- **Wire identity:** `body.properties.properties.storageUri`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) (digest `7acd6d834bc934f2de8da0df05fae811d7d91ca1e4f848b842e1f55ad42b4be6`)
- **TypeSpec source:** [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp, line 50](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L50)
- **Related analysis:** [issue-severity-mismatch-9e0af01cbafcd05a](#issue-severity-mismatch-9e0af01cbafcd05a)

<a id="finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-2"></a>
### specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-2` — `ResourcePropertyAdded` — Request property 'subnetId' was added at body.properties.properties.subnetId.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.LoadTestService/playwrightWorkspaces/{}; project `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright`; versions `2025-09-01` → `2026-11-01-preview`
- **Source declaration identity:** `Playwright.Management.PlaywrightWorkspaceProperties.subnetId`
- **Wire identity:** `body.properties.properties.subnetId`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) (digest `7acd6d834bc934f2de8da0df05fae811d7d91ca1e4f848b842e1f55ad42b4be6`)
- **TypeSpec source:** [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp, line 55](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L55)
- **Related analysis:** [issue-severity-mismatch-0f60b3c55fd8158c](#issue-severity-mismatch-0f60b3c55fd8158c)

<a id="finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-3"></a>
### specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-3` — `ResourcePropertyAdded` — Request property 'sessionArtifacts' was added at body.properties.properties.sessionArtifacts.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.LoadTestService/playwrightWorkspaces/{}; project `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright`; versions `2025-09-01` → `2026-11-01-preview`
- **Source declaration identity:** `Playwright.Management.PlaywrightWorkspaceProperties.sessionArtifacts`
- **Wire identity:** `body.properties.properties.sessionArtifacts`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) (digest `7acd6d834bc934f2de8da0df05fae811d7d91ca1e4f848b842e1f55ad42b4be6`)
- **TypeSpec source:** [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp, line 63](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L63)
- **Related analysis:** [issue-severity-mismatch-6964ba661d4ef47b](#issue-severity-mismatch-6964ba661d4ef47b)

<a id="finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-4"></a>
### specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-4` — `ResourcePropertyAdded` — Request property 'storageIdentity' was added at body.properties.properties.storageIdentity.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.LoadTestService/playwrightWorkspaces/{}; project `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright`; versions `2025-09-01` → `2026-11-01-preview`
- **Source declaration identity:** `Playwright.Management.PlaywrightWorkspaceProperties.storageIdentity`
- **Wire identity:** `body.properties.properties.storageIdentity`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) (digest `7acd6d834bc934f2de8da0df05fae811d7d91ca1e4f848b842e1f55ad42b4be6`)
- **TypeSpec source:** [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp, line 67](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L67)
- **Related analysis:** [issue-severity-mismatch-601f97a24a37caf5](#issue-severity-mismatch-601f97a24a37caf5)

<a id="finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-5"></a>
### specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-5` — `ResourcePropertyAdded` — Request property 'browserProxy' was added at body.properties.properties.browserProxy.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.LoadTestService/playwrightWorkspaces/{}; project `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright`; versions `2025-09-01` → `2026-11-01-preview`
- **Source declaration identity:** `Playwright.Management.PlaywrightWorkspaceProperties.browserProxy`
- **Wire identity:** `body.properties.properties.browserProxy`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) (digest `7acd6d834bc934f2de8da0df05fae811d7d91ca1e4f848b842e1f55ad42b4be6`)
- **TypeSpec source:** [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp, line 71](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L71)
- **Related analysis:** [issue-severity-mismatch-008e4dfd2ae76bc8](#issue-severity-mismatch-008e4dfd2ae76bc8)

<a id="finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-6"></a>
### specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-6` — `ResourcePropertyAdded` — Request property 'linkedKeyVault' was added at body.properties.properties.linkedKeyVault.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.LoadTestService/playwrightWorkspaces/{}; project `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright`; versions `2025-09-01` → `2026-11-01-preview`
- **Source declaration identity:** `Playwright.Management.PlaywrightWorkspaceProperties.linkedKeyVault`
- **Wire identity:** `body.properties.properties.linkedKeyVault`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) (digest `7acd6d834bc934f2de8da0df05fae811d7d91ca1e4f848b842e1f55ad42b4be6`)
- **TypeSpec source:** [head: specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp, line 75](https://github.com/Azure/azure-rest-api-specs/blob/068c4317e692ddb5d56c93c19107cdea46fc32f4/specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright/typespec/models.tsp#L75)
- **Related analysis:** [issue-severity-mismatch-30ddeaf2b8f7d96c](#issue-severity-mismatch-30ddeaf2b8f7d96c)

<a id="finding-typespec-specification-loadtestservice-resource-manager-microsoft-loadtestservice-playwright-tsp-b-7"></a>
### specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright:tsp-B-7` — `ResourcePropertyAdded` — Request property 'identity' was added at body.properties.identity.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.LoadTestService/playwrightWorkspaces/{}; project `specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright`; versions `2025-09-01` → `2026-11-01-preview`
- **Source declaration identity:** `Azure.ResourceManager.ManagedServiceIdentityProperty.identity`
- **Wire identity:** `body.properties.identity`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/8a0010d1a3a0de5c-phase-b.md) (digest `7acd6d834bc934f2de8da0df05fae811d7d91ca1e4f848b842e1f55ad42b4be6`)
- **TypeSpec source:** head: line 256 — Analyzer location could not be mapped to a repository-relative source path
- **Related analysis:** [issue-typespec-only-022b7b83a4ac5f1c](#issue-typespec-only-022b7b83a4ac5f1c)

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
git -C target fetch --no-tags origin 9752dea5ba791218e33ddc751198df21e2ef731a 068c4317e692ddb5d56c93c19107cdea46fc32f4
git -C target checkout --detach 068c4317e692ddb5d56c93c19107cdea46fc32f4
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47244' --tool-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright

```powershell
Push-Location target
node $prepared.executable 'specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright' --base-ref 9752dea5ba791218e33ddc751198df21e2ef731a --phase same-version --json-output '../specification-loadtestservice-resource-manager-Microsoft.LoadTestService-playwright-phase-a.json' --markdown-output '../specification-loadtestservice-resource-manager-Microsoft.LoadTestService-playwright-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/loadtestservice/resource-manager/Microsoft.LoadTestService/playwright' --base-ref 9752dea5ba791218e33ddc751198df21e2ef731a --json-output '../specification-loadtestservice-resource-manager-Microsoft.LoadTestService-playwright-phase-b-evidence.json' --markdown-output '../specification-loadtestservice-resource-manager-Microsoft.LoadTestService-playwright-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
