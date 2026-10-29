# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47326:f9d6ef53c189869192864a8bfec816fc6796a23d`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47326 — Fix EdgeActions 2026-10-01 LRO headers and deploy result](https://github.com/Azure/azure-rest-api-specs/pull/47326)
- **Author:** kestry
- **State:** closed (merged) at 2026-10-16T13:28:18Z
- **Base:** `main` at `f0be0c6db7e284b9f38d4e115ec466946db5d9f4`
- **Head:** `kestry-edgeactions-lro-correction` at `f9d6ef53c189869192864a8bfec816fc6796a23d`
- **Changed TypeSpec files:** `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/client.tsp`, `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/main.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | [30](#finding-review) |
| Informational OAD records | [1](#finding-review-informational) |
| TypeSpec findings | [8](#finding-review) |
| Exact | [2](#finding-review-correlations) |
| Probable (review required) | 0 |
| Intentional Swagger-only | [2](#finding-review-intentional) |
| Missed equivalent | [26](#finding-review-oad-only) |
| TypeSpec-only | [7](#finding-review-typespec-only) |
| Ambiguous | 0 |

**Exact OAD coverage:** 2 / 30 (6.7%)
**Review-inclusive OAD coverage:** 2 / 30 (6.7%)

### By phase

| Phase | Independent OAD execution | TypeSpec mode | Outcome | Comparable OAD | Informational OAD | TypeSpec findings | Exact | Probable | Intentional gap | Missed equivalent | TypeSpec-only | Exact OAD coverage | Review-inclusive OAD coverage |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | [Swagger Breaking Change run 38882287901](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) | `same-version` | compared | [30](#finding-review) | [1](#finding-review-informational) | [8](#finding-review) | [2](#finding-review-correlations) | 0 | [2](#finding-review-intentional) | [26](#finding-review-oad-only) | [7](#finding-review-typespec-only) | 2 / 30 (6.7%) | 2 / 30 (6.7%) |
| B | [Breaking Change (Cross-Version) run 38882287991](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287991) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | [11](#finding-review) | [8](#finding-review) | 0 | 0 | 0 | [1](#finding-review-partial) | [11](#finding-review-oad-only) | [7](#finding-review-typespec-only) |
| B | Breaking Change (Cross-Version) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

<a id="finding-review"></a>
## Finding review

Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.

<a id="finding-review-correlations"></a>
### Correlations

| Phase | OAD finding | TypeSpec finding(s) | Type / path | Sources | Analysis | Suggested fix / review | Details |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A | `AddingHeader` | [`ResponseHeaderAdded`](#finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-7) ([head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/main.tsp#L118)) | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L222) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-0617dd62dad24e40](#issue-severity-mismatch-0617dd62dad24e40). | Align severity policy or document the intentional difference. | [details](#finding-a-oad-1) |
| A | `AddingHeader` | [`ResponseHeaderAdded`](#finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-7) ([head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/main.tsp#L118)) | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L226) | Canonical identity agrees. Error status differs: OAD non-error, TypeSpec error. [issue-severity-mismatch-c9b3de02b0951600](#issue-severity-mismatch-c9b3de02b0951600). | Align severity policy or document the intentional difference. | [details](#finding-a-oad-2) |

<a id="finding-review-partial"></a>
### Partial correlations

None.

<a id="finding-review-oad-only"></a>
### OAD-only findings

| Phase | Finding | Type / path | Source | Analysis | Suggested fix | Details |
| --- | --- | --- | --- | --- | --- | --- |
| A | `AddingHeader` | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L312) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-13d5772263485ebf](#issue-oad-only-13d5772263485ebf). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-3) |
| A | `AddingHeader` | DELETE /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L378) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-dd5d6032bfbca2ef](#issue-oad-only-dd5d6032bfbca2ef). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-4) |
| A | `AddingHeader` | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/executionfilters/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L573) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-1c58b714e49a16c7](#issue-oad-only-1c58b714e49a16c7). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-5) |
| A | `AddingHeader` | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/executionfilters/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L577) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-851f7a78d84972a2](#issue-oad-only-851f7a78d84972a2). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-6) |
| A | `AddingHeader` | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/executionfilters/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L672) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-74efb7344bf74b89](#issue-oad-only-74efb7344bf74b89). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-7) |
| A | `AddingHeader` | DELETE /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/executionfilters/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L747) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-ab481e4ce13f1b16](#issue-oad-only-ab481e4ce13f1b16). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-8) |
| A | `AddingHeader` | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L942) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-63746b86b5e713d9](#issue-oad-only-63746b86b5e713d9). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-9) |
| A | `AddingHeader` | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L946) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-8268c44424514cac](#issue-oad-only-8268c44424514cac). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-10) |
| A | `AddingHeader` | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1041) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-81efe1ba24672fb2](#issue-oad-only-81efe1ba24672fb2). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-11) |
| A | `AddingHeader` | DELETE /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1116) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-bc892e7cd19652c7](#issue-oad-only-bc892e7cd19652c7). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-12) |
| A | `RemovedProperty` | EdgeActionVersion — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-f4bef72593ff6839](#issue-oad-only-f4bef72593ff6839). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-15) |
| A | `RemovedProperty` | EdgeActionVersion — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-d287b4cba495648f](#issue-oad-only-d287b4cba495648f). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-16) |
| A | `RemovedProperty` | EdgeActionVersion — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-bba265cbaa1057e4](#issue-oad-only-bba265cbaa1057e4). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-17) |
| A | `RemovedProperty` | EdgeActionVersion — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-544a9fd446f9538d](#issue-oad-only-544a9fd446f9538d). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-18) |
| A | `RemovedProperty` | EdgeActionVersion — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-98e3d047ed00ebe0](#issue-oad-only-98e3d047ed00ebe0). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-19) |
| A | `AddedPropertyInResponse` | EdgeActionVersion — properties — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-aef87e9323d263d9](#issue-oad-only-aef87e9323d263d9). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-20) |
| A | `AddedPropertyInResponse` | EdgeActionVersion — tags — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-01b4bfa34b41ae70](#issue-oad-only-01b4bfa34b41ae70). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-21) |
| A | `AddedRequiredProperty` | EdgeActionVersion — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-3194839f361b089e](#issue-oad-only-3194839f361b089e). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-22) |
| A | `AddedReadOnlyPropertyInResponse` | EdgeActionVersion — id — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-533da474a74b9a63](#issue-oad-only-533da474a74b9a63). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-23) |
| A | `AddedReadOnlyPropertyInResponse` | EdgeActionVersion — name — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-a401919de38e5cd7](#issue-oad-only-a401919de38e5cd7). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-24) |
| A | `AddedReadOnlyPropertyInResponse` | EdgeActionVersion — type — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-c26c72d52ae121e3](#issue-oad-only-c26c72d52ae121e3). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-25) |
| A | `AddedReadOnlyPropertyInResponse` | EdgeActionVersion — systemData — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-1429528d55f606f2](#issue-oad-only-1429528d55f606f2). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-26) |
| A | `AddedRequiredProperty` | EdgeActionVersion — POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1138) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1201) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-4bdae837b8029a00](#issue-oad-only-4bdae837b8029a00). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-27) |
| A | `AddingHeader` | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1208) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-b73dfde6ec0f0669](#issue-oad-only-b73dfde6ec0f0669). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-28) |
| A | `AddingHeader` | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/getversioncode — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1288) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-111646a5d5d56115](#issue-oad-only-111646a5d5d56115). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-29) |
| A | `AddingHeader` | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/swapdefault — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1362) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-2a15211f13786a78](#issue-oad-only-2a15211f13786a78). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-30) |

<a id="finding-review-typespec-only"></a>
### TypeSpec-only findings

| Phase | Finding | Type / path | Source | Analysis | Suggested review | Details |
| --- | --- | --- | --- | --- | --- | --- |
| A | `ResponsePropertyRemoved` | Microsoft.Cdn.EdgeActionVersionProperties.deploymentType | [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/edgeactionsbasemodels.tsp#L214) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-1b363c61f3b3c67f](#issue-typespec-only-1b363c61f3b3c67f). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-0) |
| A | `ResponsePropertyRemoved` | Microsoft.Cdn.EdgeActionVersionProperties.validationStatus | [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/edgeactionsbasemodels.tsp#L219) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-1309421730ae97c7](#issue-typespec-only-1309421730ae97c7). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-1) |
| A | `ResponsePropertyRemoved` | Microsoft.Cdn.EdgeActionVersionProperties.provisioningState | [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/edgeactionsbasemodels.tsp#L223) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-222c542bbc3dea03](#issue-typespec-only-222c542bbc3dea03). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-2) |
| A | `ResponsePropertyRemoved` | Microsoft.Cdn.EdgeActionVersionProperties.isDefaultVersion | [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/edgeactionsbasemodels.tsp#L234) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-8311cf749af9c6ff](#issue-typespec-only-8311cf749af9c6ff). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-3) |
| A | `ResponsePropertyRemoved` | Microsoft.Cdn.EdgeActionVersionProperties.lastPackageUpdateTime | [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/edgeactionsbasemodels.tsp#L239) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-9bda29d38d6018b2](#issue-typespec-only-9bda29d38d6018b2). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-4) |
| A | `ResponsePropertyAdded` | Microsoft.Cdn.EdgeActionVersion.name | [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/main.tsp#L73) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-ef4c5443a72ede1e](#issue-typespec-only-ef4c5443a72ede1e). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-5) |
| A | `ResponsePropertyAdded` | Azure.ResourceManager.TrackedResource.properties | head unavailable: Analyzer location could not be mapped to a repository-relative source path | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-6cff57f52aed1bb1](#issue-typespec-only-6cff57f52aed1bb1). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-6) |

<a id="finding-review-ambiguous"></a>
### Ambiguous findings

None.

<a id="finding-review-errors"></a>
### Evidence and execution failures

None.

<a id="finding-review-intentional"></a>
### Intentional Swagger-only gaps

| Phase | Finding | Type / path | Source | Analysis | Suggested action | Details |
| --- | --- | --- | --- | --- | --- | --- |
| A | `ReferenceRedirection` | EdgeActionVersion — POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1138) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1201) | OpenAPI reference structure is not wire-level [issue-oad-only-8c16cba5372dd533](#issue-oad-only-8c16cba5372dd533). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-13) |
| A | `DifferentAllOf` | EdgeActionVersion — POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1138) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1201) | OpenAPI structural change [issue-oad-only-2edbd0781a3e7824](#issue-oad-only-2edbd0781a3e7824). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-14) |

<a id="finding-review-informational"></a>
### Informational OAD records

| Phase | Finding | Type / path | Source | Analysis | Suggested action | Details |
| --- | --- | --- | --- | --- | --- | --- |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-0) |

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 1897 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/c5f763224c81830d-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 1937 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287991) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/c5f763224c81830d-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions` | Phase A (`same-version`) | `2025-09-01-preview` → `2025-09-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c5f763224c81830d-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions` | Phase A (`same-version`) | `2025-12-01-preview` → `2025-12-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c5f763224c81830d-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions` | Phase A (`same-version`) | `2026-10-01` → `2026-10-01` | 1 | 8 | 22 | [generated Markdown](report-artifacts/typespec/c5f763224c81830d-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-concordant-zero-39f005c11407b402"></a>`issue-concordant-zero-39f005c11407b402` | 0 | B | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase B. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-B` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |
| <a id="issue-oad-only-01b4bfa34b41ae70"></a><a id="issue-oad-only-111646a5d5d56115"></a><a id="issue-oad-only-13d5772263485ebf"></a><a id="issue-oad-only-1429528d55f606f2"></a><a id="issue-oad-only-1c58b714e49a16c7"></a><a id="issue-oad-only-2a15211f13786a78"></a><a id="issue-oad-only-3194839f361b089e"></a><a id="issue-oad-only-4bdae837b8029a00"></a><a id="issue-oad-only-533da474a74b9a63"></a><a id="issue-oad-only-544a9fd446f9538d"></a><a id="issue-oad-only-63746b86b5e713d9"></a><a id="issue-oad-only-74efb7344bf74b89"></a><a id="issue-oad-only-81efe1ba24672fb2"></a><a id="issue-oad-only-8268c44424514cac"></a><a id="issue-oad-only-851f7a78d84972a2"></a><a id="issue-oad-only-98e3d047ed00ebe0"></a><a id="issue-oad-only-a401919de38e5cd7"></a><a id="issue-oad-only-ab481e4ce13f1b16"></a><a id="issue-oad-only-aef87e9323d263d9"></a><a id="issue-oad-only-b73dfde6ec0f0669"></a><a id="issue-oad-only-bba265cbaa1057e4"></a><a id="issue-oad-only-bc892e7cd19652c7"></a><a id="issue-oad-only-c26c72d52ae121e3"></a><a id="issue-oad-only-d287b4cba495648f"></a><a id="issue-oad-only-dd5d6032bfbca2ef"></a><a id="issue-oad-only-f4bef72593ff6839"></a>`issue-oad-only-01b4bfa34b41ae70` (+25 related) | 26 | A | `oad-only` | requires-review | OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent. Contributes one finding to OAD-only or missed-equivalent totals. | Review detector coverage and the canonical target mapping. | medium; generated | `oad-finding:A-oad-21` — AddedPropertyInResponse: The new version has a new property 'tags' in response that was not found in the old version.<br>`oad-finding:A-oad-29` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-3` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-26` — AddedReadOnlyPropertyInResponse: The new version has a new read-only property 'systemData' in response that was not found in the old version.<br>`oad-finding:A-oad-5` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-30` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-22` — AddedRequiredProperty: The new version lists new non-read-only properties as required: 'location'. These properties were not listed as required in the old version.<br>`oad-finding:A-oad-27` — AddedRequiredProperty: The new version lists new non-read-only properties as required: 'location'. These properties were not listed as required in the old version.<br>`oad-finding:A-oad-23` — AddedReadOnlyPropertyInResponse: The new version has a new read-only property 'id' in response that was not found in the old version.<br>`oad-finding:A-oad-18` — RemovedProperty: The new version is missing a property found in the old version. Was 'isDefaultVersion' renamed or removed?<br>`oad-finding:A-oad-9` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-7` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-11` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-10` — AddingHeader: The new version adds a required header 'Retry-After'.<br>`oad-finding:A-oad-6` — AddingHeader: The new version adds a required header 'Retry-After'.<br>`oad-finding:A-oad-19` — RemovedProperty: The new version is missing a property found in the old version. Was 'lastPackageUpdateTime' renamed or removed?<br>`oad-finding:A-oad-24` — AddedReadOnlyPropertyInResponse: The new version has a new read-only property 'name' in response that was not found in the old version.<br>`oad-finding:A-oad-8` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-20` — AddedPropertyInResponse: The new version has a new property 'properties' in response that was not found in the old version.<br>`oad-finding:A-oad-28` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-17` — RemovedProperty: The new version is missing a property found in the old version. Was 'provisioningState' renamed or removed?<br>`oad-finding:A-oad-12` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-25` — AddedReadOnlyPropertyInResponse: The new version has a new read-only property 'type' in response that was not found in the old version.<br>`oad-finding:A-oad-16` — RemovedProperty: The new version is missing a property found in the old version. Was 'validationStatus' renamed or removed?<br>`oad-finding:A-oad-4` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-15` — RemovedProperty: The new version is missing a property found in the old version. Was 'deploymentType' renamed or removed? |
| <a id="issue-oad-only-2edbd0781a3e7824"></a><a id="issue-oad-only-8c16cba5372dd533"></a>`issue-oad-only-2edbd0781a3e7824` (+1 related) | 2 | A | `oad-only` | likely-expected-difference | OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent. Contributes one finding to OAD-only or missed-equivalent totals. | Review detector coverage and the canonical target mapping. | medium; generated | `oad-finding:A-oad-14` — DifferentAllOf: The new version has a different 'allOf' property than the previous one.<br>`oad-finding:A-oad-13` — ReferenceRedirection: The '$ref' property points to different models in the old and new versions. |
| <a id="issue-severity-mismatch-0617dd62dad24e40"></a><a id="issue-severity-mismatch-c9b3de02b0951600"></a>`issue-severity-mismatch-0617dd62dad24e40` (+1 related) | 3 | A | `severity-mismatch` | requires-review | Semantically matched findings disagree on actionable error status. Changes error-equivalence totals without changing semantic-match totals. | Align severity policy or document the intentional difference. | high; generated | `oad-finding:A-oad-1` — OAD severity: Info<br>`typespec-finding:specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — TypeSpec severity: error; suppressed=false<br>`oad-finding:A-oad-2` — OAD severity: Info<br>`typespec-finding:specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — TypeSpec severity: error; suppressed=false |
| <a id="issue-typespec-only-1309421730ae97c7"></a><a id="issue-typespec-only-1b363c61f3b3c67f"></a><a id="issue-typespec-only-222c542bbc3dea03"></a><a id="issue-typespec-only-6cff57f52aed1bb1"></a><a id="issue-typespec-only-8311cf749af9c6ff"></a><a id="issue-typespec-only-9bda29d38d6018b2"></a><a id="issue-typespec-only-ef4c5443a72ede1e"></a>`issue-typespec-only-1309421730ae97c7` (+6 related) | 7 | A | `typespec-only` | requires-review | The TypeSpec finding has no selected OAD equivalent. Contributes one finding to TypeSpec-only totals. | Confirm whether this is additional coverage, noise, or a matching gap. | medium; generated | `typespec-finding:specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — ResponsePropertyRemoved: Response property 'validationStatus' was removed at body.properties.validationStatus.<br>`typespec-finding:specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — ResponsePropertyRemoved: Response property 'deploymentType' was removed at body.properties.deploymentType.<br>`typespec-finding:specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — ResponsePropertyRemoved: Response property 'provisioningState' was removed at body.properties.provisioningState.<br>`typespec-finding:specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — ResponsePropertyAdded: Response property 'properties' was added at body.properties.properties.<br>`typespec-finding:specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — ResponsePropertyRemoved: Response property 'isDefaultVersion' was removed at body.properties.isDefaultVersion.<br>`typespec-finding:specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — ResponsePropertyRemoved: Response property 'lastPackageUpdateTime' was removed at body.properties.lastPackageUpdateTime.<br>`typespec-finding:specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — ResponsePropertyAdded: Response property 'name' was added at body.properties.name. |

## Finding details

<a id="finding-a-oad-0"></a>
### A-oad-0 — `NoVersionChange`

- **Swagger finding:** `A-oad-0` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document openapi.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-1"></a>
### A-oad-1 — `AddingHeader`

- **Swagger finding:** `A-oad-1` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 222](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L222) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}'].put.responses.200.headers.Azure-AsyncOperation`
- **Classification:** `exact`
- **Resolved targets:** PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{} response
- **Selected TypeSpec findings:** [`specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7`](#finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-7)
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — score 5; method, route, direction, version pair, direction
- **Related analysis:** [issue-severity-mismatch-0617dd62dad24e40](#issue-severity-mismatch-0617dd62dad24e40)
- **Decision:** Exact semantic match in Phase A. Selected `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` because method, route, direction, version pair. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-a-oad-2"></a>
### A-oad-2 — `AddingHeader`

- **Swagger finding:** `A-oad-2` — `AddingHeader` — The new version adds a required header 'Retry-After'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 226](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L226) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}'].put.responses.200.headers.Retry-After`
- **Classification:** `exact`
- **Resolved targets:** PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{} response
- **Selected TypeSpec findings:** [`specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7`](#finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-7)
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — score 5; method, route, direction, version pair, direction
- **Related analysis:** [issue-severity-mismatch-c9b3de02b0951600](#issue-severity-mismatch-c9b3de02b0951600)
- **Decision:** Exact semantic match in Phase A. Selected `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` because method, route, direction, version pair. **Error status mismatch:** OAD actionable error is no; selected TypeSpec actionable error state is yes.

<a id="finding-a-oad-3"></a>
### A-oad-3 — `AddingHeader`

- **Swagger finding:** `A-oad-3` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 312](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L312) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}'].patch.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{} response
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — score 0; route, direction, version pair, direction; rejected: HTTP method differs
- **Related analysis:** [issue-oad-only-13d5772263485ebf](#issue-oad-only-13d5772263485ebf)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-4"></a>
### A-oad-4 — `AddingHeader`

- **Swagger finding:** `A-oad-4` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 378](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L378) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}'].delete.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** DELETE /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{} response
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — score 0; route, direction, version pair, direction; rejected: HTTP method differs
- **Related analysis:** [issue-oad-only-dd5d6032bfbca2ef](#issue-oad-only-dd5d6032bfbca2ef)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-5"></a>
### A-oad-5 — `AddingHeader`

- **Swagger finding:** `A-oad-5` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 573](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L573) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/executionFilters/{executionFilter}'].put.responses.200.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/executionfilters/{} response
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — score 0; method, direction, version pair, direction; rejected: normalized route differs
- **Related analysis:** [issue-oad-only-1c58b714e49a16c7](#issue-oad-only-1c58b714e49a16c7)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-6"></a>
### A-oad-6 — `AddingHeader`

- **Swagger finding:** `A-oad-6` — `AddingHeader` — The new version adds a required header 'Retry-After'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 577](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L577) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/executionFilters/{executionFilter}'].put.responses.200.headers.Retry-After`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/executionfilters/{} response
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — score 0; method, direction, version pair, direction; rejected: normalized route differs
- **Related analysis:** [issue-oad-only-851f7a78d84972a2](#issue-oad-only-851f7a78d84972a2)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-7"></a>
### A-oad-7 — `AddingHeader`

- **Swagger finding:** `A-oad-7` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 672](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L672) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/executionFilters/{executionFilter}'].patch.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/executionfilters/{} response
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs
- **Related analysis:** [issue-oad-only-74efb7344bf74b89](#issue-oad-only-74efb7344bf74b89)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-8"></a>
### A-oad-8 — `AddingHeader`

- **Swagger finding:** `A-oad-8` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 747](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L747) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/executionFilters/{executionFilter}'].delete.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** DELETE /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/executionfilters/{} response
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs
- **Related analysis:** [issue-oad-only-ab481e4ce13f1b16](#issue-oad-only-ab481e4ce13f1b16)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-9"></a>
### A-oad-9 — `AddingHeader`

- **Swagger finding:** `A-oad-9` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 942](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L942) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}'].put.responses.200.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — score 0; method, direction, version pair, direction; rejected: normalized route differs
- **Related analysis:** [issue-oad-only-63746b86b5e713d9](#issue-oad-only-63746b86b5e713d9)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-10"></a>
### A-oad-10 — `AddingHeader`

- **Swagger finding:** `A-oad-10` — `AddingHeader` — The new version adds a required header 'Retry-After'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 946](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L946) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}'].put.responses.200.headers.Retry-After`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — score 0; method, direction, version pair, direction; rejected: normalized route differs
- **Related analysis:** [issue-oad-only-8268c44424514cac](#issue-oad-only-8268c44424514cac)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-11"></a>
### A-oad-11 — `AddingHeader`

- **Swagger finding:** `A-oad-11` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1041](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1041) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}'].patch.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs
- **Related analysis:** [issue-oad-only-81efe1ba24672fb2](#issue-oad-only-81efe1ba24672fb2)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-12"></a>
### A-oad-12 — `AddingHeader`

- **Swagger finding:** `A-oad-12` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1116](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1116) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}'].delete.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** DELETE /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs
- **Related analysis:** [issue-oad-only-bc892e7cd19652c7](#issue-oad-only-bc892e7cd19652c7)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-13"></a>
### A-oad-13 — `ReferenceRedirection`

- **Swagger finding:** `A-oad-13` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1138](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1138) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}/deployVersionCode'].post.responses.200.schema`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1201](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1201) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}/deployVersionCode'].post.responses.200.schema`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Related analysis:** [issue-oad-only-8c16cba5372dd533](#issue-oad-only-8c16cba5372dd533)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-a-oad-14"></a>
### A-oad-14 — `DifferentAllOf`

- **Swagger finding:** `A-oad-14` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1138](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1138) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}/deployVersionCode'].post.responses.200.schema`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1201](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1201) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}/deployVersionCode'].post.responses.200.schema`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode
- **Intentional gap:** OpenAPI structural change
- **Related analysis:** [issue-oad-only-2edbd0781a3e7824](#issue-oad-only-2edbd0781a3e7824)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-a-oad-15"></a>
### A-oad-15 — `RemovedProperty`

- **Swagger finding:** `A-oad-15` — `RemovedProperty` — The new version is missing a property found in the old version. Was 'deploymentType' renamed or removed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
- **Related analysis:** [issue-oad-only-f4bef72593ff6839](#issue-oad-only-f4bef72593ff6839)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-16"></a>
### A-oad-16 — `RemovedProperty`

- **Swagger finding:** `A-oad-16` — `RemovedProperty` — The new version is missing a property found in the old version. Was 'validationStatus' renamed or removed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
- **Related analysis:** [issue-oad-only-d287b4cba495648f](#issue-oad-only-d287b4cba495648f)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-17"></a>
### A-oad-17 — `RemovedProperty`

- **Swagger finding:** `A-oad-17` — `RemovedProperty` — The new version is missing a property found in the old version. Was 'provisioningState' renamed or removed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
- **Related analysis:** [issue-oad-only-bba265cbaa1057e4](#issue-oad-only-bba265cbaa1057e4)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-18"></a>
### A-oad-18 — `RemovedProperty`

- **Swagger finding:** `A-oad-18` — `RemovedProperty` — The new version is missing a property found in the old version. Was 'isDefaultVersion' renamed or removed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
- **Related analysis:** [issue-oad-only-544a9fd446f9538d](#issue-oad-only-544a9fd446f9538d)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-19"></a>
### A-oad-19 — `RemovedProperty`

- **Swagger finding:** `A-oad-19` — `RemovedProperty` — The new version is missing a property found in the old version. Was 'lastPackageUpdateTime' renamed or removed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
- **Related analysis:** [issue-oad-only-98e3d047ed00ebe0](#issue-oad-only-98e3d047ed00ebe0)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-20"></a>
### A-oad-20 — `AddedPropertyInResponse`

- **Swagger finding:** `A-oad-20` — `AddedPropertyInResponse` — The new version has a new property 'properties' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; schema, declaration, version pair, schema/declaration; rejected: HTTP method differs, normalized route differs, direction differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, schema, declaration, version pair, schema/declaration, direction; rejected: HTTP method differs, normalized route differs, response status differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 11; method, route, direction, status, schema, declaration, version pair, schema/declaration, direction, response status
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
- **Related analysis:** [issue-oad-only-aef87e9323d263d9](#issue-oad-only-aef87e9323d263d9)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-21"></a>
### A-oad-21 — `AddedPropertyInResponse`

- **Swagger finding:** `A-oad-21` — `AddedPropertyInResponse` — The new version has a new property 'tags' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; schema, declaration, version pair, schema/declaration; rejected: HTTP method differs, normalized route differs, direction differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, schema, declaration, version pair, schema/declaration, direction; rejected: HTTP method differs, normalized route differs, response status differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 11; method, route, direction, status, schema, declaration, version pair, schema/declaration, direction, response status
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
- **Related analysis:** [issue-oad-only-01b4bfa34b41ae70](#issue-oad-only-01b4bfa34b41ae70)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-22"></a>
### A-oad-22 — `AddedRequiredProperty`

- **Swagger finding:** `A-oad-22` — `AddedRequiredProperty` — The new version lists new non-read-only properties as required: 'location'. These properties were not listed as required in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Related analysis:** [issue-oad-only-3194839f361b089e](#issue-oad-only-3194839f361b089e)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-23"></a>
### A-oad-23 — `AddedReadOnlyPropertyInResponse`

- **Swagger finding:** `A-oad-23` — `AddedReadOnlyPropertyInResponse` — The new version has a new read-only property 'id' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; schema, declaration, version pair, schema/declaration; rejected: HTTP method differs, normalized route differs, direction differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, schema, declaration, version pair, schema/declaration, direction; rejected: HTTP method differs, normalized route differs, response status differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 11; method, route, direction, status, schema, declaration, version pair, schema/declaration, direction, response status
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
- **Related analysis:** [issue-oad-only-533da474a74b9a63](#issue-oad-only-533da474a74b9a63)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-24"></a>
### A-oad-24 — `AddedReadOnlyPropertyInResponse`

- **Swagger finding:** `A-oad-24` — `AddedReadOnlyPropertyInResponse` — The new version has a new read-only property 'name' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, property, version pair, schema/declaration, full property path, leaf property, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; schema, declaration, property, version pair, schema/declaration, full property path, leaf property; rejected: HTTP method differs, normalized route differs, direction differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, property, version pair, schema/declaration, full property path, leaf property, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, schema, declaration, property, version pair, schema/declaration, full property path, leaf property, direction; rejected: HTTP method differs, normalized route differs, response status differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, property, version pair, schema/declaration, full property path, leaf property, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 17; method, route, direction, status, schema, declaration, property, version pair, schema/declaration, full property path, leaf property, direction, response status
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, property, version pair, schema/declaration, full property path, leaf property, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
- **Related analysis:** [issue-oad-only-a401919de38e5cd7](#issue-oad-only-a401919de38e5cd7)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-25"></a>
### A-oad-25 — `AddedReadOnlyPropertyInResponse`

- **Swagger finding:** `A-oad-25` — `AddedReadOnlyPropertyInResponse` — The new version has a new read-only property 'type' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; schema, declaration, version pair, schema/declaration; rejected: HTTP method differs, normalized route differs, direction differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, schema, declaration, version pair, schema/declaration, direction; rejected: HTTP method differs, normalized route differs, response status differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 11; method, route, direction, status, schema, declaration, version pair, schema/declaration, direction, response status
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
- **Related analysis:** [issue-oad-only-c26c72d52ae121e3](#issue-oad-only-c26c72d52ae121e3)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-26"></a>
### A-oad-26 — `AddedReadOnlyPropertyInResponse`

- **Swagger finding:** `A-oad-26` — `AddedReadOnlyPropertyInResponse` — The new version has a new read-only property 'systemData' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; schema, declaration, version pair, schema/declaration; rejected: HTTP method differs, normalized route differs, direction differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; version pair; rejected: HTTP method differs, normalized route differs, direction differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, schema, declaration, version pair, schema/declaration, direction; rejected: HTTP method differs, normalized route differs, response status differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs, response status differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 11; method, route, direction, status, schema, declaration, version pair, schema/declaration, direction, response status
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; method, route, direction, status, version pair, direction, response status; rejected: schema differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — score 0; direction, status, schema, declaration, version pair, schema/declaration, direction, response status; rejected: HTTP method differs, normalized route differs
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — score 0; direction, status, version pair, direction, response status; rejected: HTTP method differs, normalized route differs, schema differs
- **Related analysis:** [issue-oad-only-1429528d55f606f2](#issue-oad-only-1429528d55f606f2)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-27"></a>
### A-oad-27 — `AddedRequiredProperty`

- **Swagger finding:** `A-oad-27` — `AddedRequiredProperty` — The new version lists new non-read-only properties as required: 'location'. These properties were not listed as required in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1138](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1138) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}/deployVersionCode'].post.responses.200.schema`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1201](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1201) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}/deployVersionCode'].post.responses.200.schema`
- **Classification:** `missed-equivalent`
- **Resolved targets:** POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode
- **Related analysis:** [issue-oad-only-4bdae837b8029a00](#issue-oad-only-4bdae837b8029a00)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-28"></a>
### A-oad-28 — `AddingHeader`

- **Swagger finding:** `A-oad-28` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1208](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1208) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}/deployVersionCode'].post.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs
- **Related analysis:** [issue-oad-only-b73dfde6ec0f0669](#issue-oad-only-b73dfde6ec0f0669)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-29"></a>
### A-oad-29 — `AddingHeader`

- **Swagger finding:** `A-oad-29` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1288](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1288) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}/getVersionCode'].post.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/getversioncode response
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs
- **Related analysis:** [issue-oad-only-111646a5d5d56115](#issue-oad-only-111646a5d5d56115)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-30"></a>
### A-oad-30 — `AddingHeader`

- **Swagger finding:** `A-oad-30` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1362](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1362) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}/swapDefault'].post.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/swapdefault response
- **Candidates considered:**
  - `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — score 0; direction, version pair, direction; rejected: HTTP method differs, normalized route differs
- **Related analysis:** [issue-oad-only-2a15211f13786a78](#issue-oad-only-2a15211f13786a78)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-0"></a>
### specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0 — `ResponsePropertyRemoved`

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-0` — `ResponsePropertyRemoved` — Response property 'deploymentType' was removed at body.properties.deploymentType.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/edgeActions/{}/versions/{}/deployVersionCode; project `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions`; versions `2026-10-01` → `2026-10-01`
- **Source declaration identity:** `Microsoft.Cdn.EdgeActionVersionProperties.deploymentType`
- **Wire identity:** `body.properties.deploymentType`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/c5f763224c81830d-phase-a.md) (digest `d756a0808d983601204de51e0cb6df81eaeed04156e525424d457a5d5070f8d1`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/edgeactionsbasemodels.tsp, line 214](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/edgeactionsbasemodels.tsp#L214)
- **Related analysis:** [issue-typespec-only-1b363c61f3b3c67f](#issue-typespec-only-1b363c61f3b3c67f)

<a id="finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-1"></a>
### specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1 — `ResponsePropertyRemoved`

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-1` — `ResponsePropertyRemoved` — Response property 'validationStatus' was removed at body.properties.validationStatus.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/edgeActions/{}/versions/{}/deployVersionCode; project `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions`; versions `2026-10-01` → `2026-10-01`
- **Source declaration identity:** `Microsoft.Cdn.EdgeActionVersionProperties.validationStatus`
- **Wire identity:** `body.properties.validationStatus`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/c5f763224c81830d-phase-a.md) (digest `d756a0808d983601204de51e0cb6df81eaeed04156e525424d457a5d5070f8d1`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/edgeactionsbasemodels.tsp, line 219](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/edgeactionsbasemodels.tsp#L219)
- **Related analysis:** [issue-typespec-only-1309421730ae97c7](#issue-typespec-only-1309421730ae97c7)

<a id="finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-2"></a>
### specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2 — `ResponsePropertyRemoved`

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-2` — `ResponsePropertyRemoved` — Response property 'provisioningState' was removed at body.properties.provisioningState.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/edgeActions/{}/versions/{}/deployVersionCode; project `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions`; versions `2026-10-01` → `2026-10-01`
- **Source declaration identity:** `Microsoft.Cdn.EdgeActionVersionProperties.provisioningState`
- **Wire identity:** `body.properties.provisioningState`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/c5f763224c81830d-phase-a.md) (digest `d756a0808d983601204de51e0cb6df81eaeed04156e525424d457a5d5070f8d1`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/edgeactionsbasemodels.tsp, line 223](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/edgeactionsbasemodels.tsp#L223)
- **Related analysis:** [issue-typespec-only-222c542bbc3dea03](#issue-typespec-only-222c542bbc3dea03)

<a id="finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-3"></a>
### specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3 — `ResponsePropertyRemoved`

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-3` — `ResponsePropertyRemoved` — Response property 'isDefaultVersion' was removed at body.properties.isDefaultVersion.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/edgeActions/{}/versions/{}/deployVersionCode; project `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions`; versions `2026-10-01` → `2026-10-01`
- **Source declaration identity:** `Microsoft.Cdn.EdgeActionVersionProperties.isDefaultVersion`
- **Wire identity:** `body.properties.isDefaultVersion`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/c5f763224c81830d-phase-a.md) (digest `d756a0808d983601204de51e0cb6df81eaeed04156e525424d457a5d5070f8d1`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/edgeactionsbasemodels.tsp, line 234](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/edgeactionsbasemodels.tsp#L234)
- **Related analysis:** [issue-typespec-only-8311cf749af9c6ff](#issue-typespec-only-8311cf749af9c6ff)

<a id="finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-4"></a>
### specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4 — `ResponsePropertyRemoved`

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-4` — `ResponsePropertyRemoved` — Response property 'lastPackageUpdateTime' was removed at body.properties.lastPackageUpdateTime.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/edgeActions/{}/versions/{}/deployVersionCode; project `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions`; versions `2026-10-01` → `2026-10-01`
- **Source declaration identity:** `Microsoft.Cdn.EdgeActionVersionProperties.lastPackageUpdateTime`
- **Wire identity:** `body.properties.lastPackageUpdateTime`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/c5f763224c81830d-phase-a.md) (digest `d756a0808d983601204de51e0cb6df81eaeed04156e525424d457a5d5070f8d1`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/edgeactionsbasemodels.tsp, line 239](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/edgeactionsbasemodels.tsp#L239)
- **Related analysis:** [issue-typespec-only-9bda29d38d6018b2](#issue-typespec-only-9bda29d38d6018b2)

<a id="finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-5"></a>
### specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5 — `ResponsePropertyAdded`

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-5` — `ResponsePropertyAdded` — Response property 'name' was added at body.properties.name.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/edgeActions/{}/versions/{}/deployVersionCode; project `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions`; versions `2026-10-01` → `2026-10-01`
- **Source declaration identity:** `Microsoft.Cdn.EdgeActionVersion.name`
- **Wire identity:** `body.properties.name`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/c5f763224c81830d-phase-a.md) (digest `d756a0808d983601204de51e0cb6df81eaeed04156e525424d457a5d5070f8d1`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/main.tsp, line 73](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/main.tsp#L73)
- **Related analysis:** [issue-typespec-only-ef4c5443a72ede1e](#issue-typespec-only-ef4c5443a72ede1e)

<a id="finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-6"></a>
### specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6 — `ResponsePropertyAdded`

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-6` — `ResponsePropertyAdded` — Response property 'properties' was added at body.properties.properties.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/edgeActions/{}/versions/{}/deployVersionCode; project `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions`; versions `2026-10-01` → `2026-10-01`
- **Source declaration identity:** `Azure.ResourceManager.TrackedResource.properties`
- **Wire identity:** `body.properties.properties`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/c5f763224c81830d-phase-a.md) (digest `d756a0808d983601204de51e0cb6df81eaeed04156e525424d457a5d5070f8d1`)
- **TypeSpec source:** head: line 70 — Analyzer location could not be mapped to a repository-relative source path
- **Related analysis:** [issue-typespec-only-6cff57f52aed1bb1](#issue-typespec-only-6cff57f52aed1bb1)

<a id="finding-typespec-specification-cdn-resource-manager-microsoft-cdn-edgeactions-tsp-a-7"></a>
### specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7 — `ResponseHeaderAdded`

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions:tsp-A-7` — `ResponseHeaderAdded` — Response header 'Azure-AsyncOperation' was added.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/edgeActions/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions`; versions `2026-10-01` → `2026-10-01`
- **Source declaration identity:** unavailable; use the operation-relative wire identity
- **Wire identity:** `headers.Azure-AsyncOperation`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/c5f763224c81830d-phase-a.md) (digest `d756a0808d983601204de51e0cb6df81eaeed04156e525424d457a5d5070f8d1`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/main.tsp, line 118](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/main.tsp#L118)
- **Related analysis:** [issue-severity-mismatch-0617dd62dad24e40](#issue-severity-mismatch-0617dd62dad24e40)

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
git -C target fetch --no-tags origin f0be0c6db7e284b9f38d4e115ec466946db5d9f4 f9d6ef53c189869192864a8bfec816fc6796a23d
git -C target checkout --detach f9d6ef53c189869192864a8bfec816fc6796a23d
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47326' --tool-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions

```powershell
Push-Location target
node $prepared.executable 'specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions' --base-ref f0be0c6db7e284b9f38d4e115ec466946db5d9f4 --phase same-version --json-output '../specification-cdn-resource-manager-Microsoft.Cdn-EdgeActions-phase-a.json' --markdown-output '../specification-cdn-resource-manager-Microsoft.Cdn-EdgeActions-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions' --base-ref f0be0c6db7e284b9f38d4e115ec466946db5d9f4 --json-output '../specification-cdn-resource-manager-Microsoft.Cdn-EdgeActions-phase-b-evidence.json' --markdown-output '../specification-cdn-resource-manager-Microsoft.Cdn-EdgeActions-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
