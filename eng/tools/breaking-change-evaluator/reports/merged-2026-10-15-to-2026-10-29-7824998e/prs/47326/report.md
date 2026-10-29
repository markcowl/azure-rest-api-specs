# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Report ID:** `merged-2026-10-15-to-2026-10-29-7824998e:pr-47326:f9d6ef53c189869192864a8bfec816fc6796a23d`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47326 — Fix EdgeActions 2026-10-01 LRO headers and deploy result](https://github.com/Azure/azure-rest-api-specs/pull/47326)
- **Author:** kestry
- **State:** closed (merged) at 2026-10-16T13:28:18Z
- **Base:** `main` at `f0be0c6db7e284b9f38d4e115ec466946db5d9f4`
- **Head:** `kestry-edgeactions-lro-correction` at `f9d6ef53c189869192864a8bfec816fc6796a23d`
- **Changed TypeSpec files:** `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/client.tsp`, `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/main.tsp`

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
| A | `AddingHeader` | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L222) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-5f433777fa9466de](#issue-oad-only-5f433777fa9466de). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-1) |
| A | `AddingHeader` | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L226) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-2590dad452aec652](#issue-oad-only-2590dad452aec652). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-2) |
| A | `AddingHeader` | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L312) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-ed992207fdd67bde](#issue-oad-only-ed992207fdd67bde). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-3) |
| A | `AddingHeader` | DELETE /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L378) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-e7543f9248b8dbbe](#issue-oad-only-e7543f9248b8dbbe). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-4) |
| A | `AddingHeader` | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/executionfilters/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L573) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-ba3bf43b2375d8dc](#issue-oad-only-ba3bf43b2375d8dc). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-5) |
| A | `AddingHeader` | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/executionfilters/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L577) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-9db9c3de6660e881](#issue-oad-only-9db9c3de6660e881). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-6) |
| A | `AddingHeader` | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/executionfilters/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L672) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-4a2261be5fa7300b](#issue-oad-only-4a2261be5fa7300b). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-7) |
| A | `AddingHeader` | DELETE /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/executionfilters/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L747) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-66f52d1e7c1cb29e](#issue-oad-only-66f52d1e7c1cb29e). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-8) |
| A | `AddingHeader` | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L942) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-47c7a2c8e97c29f9](#issue-oad-only-47c7a2c8e97c29f9). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-9) |
| A | `AddingHeader` | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L946) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-c97c68cbe8383a37](#issue-oad-only-c97c68cbe8383a37). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-10) |
| A | `AddingHeader` | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1041) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-9f3c4dd7ec98ed0b](#issue-oad-only-9f3c4dd7ec98ed0b). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-11) |
| A | `AddingHeader` | DELETE /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1116) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-d18d89066401b1ed](#issue-oad-only-d18d89066401b1ed). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-12) |
| A | `RemovedProperty` | EdgeActionVersion — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-aa42a0200d92e571](#issue-oad-only-aa42a0200d92e571). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-15) |
| A | `RemovedProperty` | EdgeActionVersion — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-ce28e73d6c9b4593](#issue-oad-only-ce28e73d6c9b4593). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-16) |
| A | `RemovedProperty` | EdgeActionVersion — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-d823a27d46b7b58a](#issue-oad-only-d823a27d46b7b58a). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-17) |
| A | `RemovedProperty` | EdgeActionVersion — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-98b31fd182bc6691](#issue-oad-only-98b31fd182bc6691). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-18) |
| A | `RemovedProperty` | EdgeActionVersion — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-f10a80ef3c5558af](#issue-oad-only-f10a80ef3c5558af). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-19) |
| A | `AddedPropertyInResponse` | EdgeActionVersion — properties — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-ca7754b416dbcafe](#issue-oad-only-ca7754b416dbcafe). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-20) |
| A | `AddedPropertyInResponse` | EdgeActionVersion — tags — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-cf0ea4c8bb7d90e0](#issue-oad-only-cf0ea4c8bb7d90e0). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-21) |
| A | `AddedRequiredProperty` | EdgeActionVersion — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-b56acb83adffb691](#issue-oad-only-b56acb83adffb691). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-22) |
| A | `AddedReadOnlyPropertyInResponse` | EdgeActionVersion — id — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-19366e5d3dc4e320](#issue-oad-only-19366e5d3dc4e320). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-23) |
| A | `AddedReadOnlyPropertyInResponse` | EdgeActionVersion — name — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-40b1fb374c1b6209](#issue-oad-only-40b1fb374c1b6209). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-24) |
| A | `AddedReadOnlyPropertyInResponse` | EdgeActionVersion — type — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-63512bb3c1b2fdeb](#issue-oad-only-63512bb3c1b2fdeb). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-25) |
| A | `AddedReadOnlyPropertyInResponse` | EdgeActionVersion — systemData — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-d1cd1ebe03508586](#issue-oad-only-d1cd1ebe03508586). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-26) |
| A | `AddedRequiredProperty` | EdgeActionVersion — POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1138) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1201) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-724309616fd8052a](#issue-oad-only-724309616fd8052a). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-27) |
| A | `AddingHeader` | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1208) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-03da09965ff22f13](#issue-oad-only-03da09965ff22f13). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-28) |
| A | `AddingHeader` | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/getversioncode — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1288) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-f5585b5e31fe4735](#issue-oad-only-f5585b5e31fe4735). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-29) |
| A | `AddingHeader` | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/swapdefault — response | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1362) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-4984a36e035c129b](#issue-oad-only-4984a36e035c129b). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-30) |

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
| — | Report execution | specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions: Analysis failed: Cannot read properties of undefined (reading 'get') ; Analysis failed: Cannot read properties of undefined (reading 'get') | [workflow 38882287901](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) · [workflow 38882287991](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287991) | Comparison is incomplete; do not treat absent findings as detector agreement. | [details](#evidence-error-1) |

<a id="finding-review-intentional"></a>
### Intentional Swagger-only gaps

| Phase | Finding | Type / path | Source | Analysis | Suggested action | Details |
| --- | --- | --- | --- | --- | --- | --- |
| A | `ReferenceRedirection` | EdgeActionVersion — POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1138) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1201) | OpenAPI reference structure is not wire-level [issue-oad-only-66830d55b0d77cfc](#issue-oad-only-66830d55b0d77cfc). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-13) |
| A | `DifferentAllOf` | EdgeActionVersion — POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1138) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1201) | OpenAPI structural change [issue-oad-only-931465be717dd366](#issue-oad-only-931465be717dd366). | Review detector coverage and the canonical target mapping. | [details](#finding-a-oad-14) |

<a id="finding-review-informational"></a>
### Informational OAD records

| Phase | Finding | Type / path | Source | Analysis | Suggested action | Details |
| --- | --- | --- | --- | --- | --- | --- |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-0) |

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (no detector timing emitted) |
| B | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287991) (no detector timing emitted) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c5f763224c81830d-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/c5f763224c81830d-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-compile-runtime-failure-c007d2c184d56905"></a>`issue-compile-runtime-failure-c007d2c184d56905` | 0 | A, B | `compile-runtime-failure` | execution-failure | One or more evaluator, compile, or analyzer executions failed. Preserves a partial or failed outcome instead of success-shaped metrics. | Resolve the recorded execution error and rerun the same immutable input. | high; generated | `execution:execution-error-0` — specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions: Analysis failed: Cannot read properties of undefined (reading 'get') ; Analysis failed: Cannot read properties of undefined (reading 'get') <br>`execution:execution-error-1` — Analysis failed: Cannot read properties of undefined (reading 'get') ; Analysis failed: Cannot read properties of undefined (reading 'get') |
| <a id="issue-oad-only-03da09965ff22f13"></a><a id="issue-oad-only-19366e5d3dc4e320"></a><a id="issue-oad-only-2590dad452aec652"></a><a id="issue-oad-only-40b1fb374c1b6209"></a><a id="issue-oad-only-47c7a2c8e97c29f9"></a><a id="issue-oad-only-4984a36e035c129b"></a><a id="issue-oad-only-4a2261be5fa7300b"></a><a id="issue-oad-only-5f433777fa9466de"></a><a id="issue-oad-only-63512bb3c1b2fdeb"></a><a id="issue-oad-only-66f52d1e7c1cb29e"></a><a id="issue-oad-only-724309616fd8052a"></a><a id="issue-oad-only-98b31fd182bc6691"></a><a id="issue-oad-only-9db9c3de6660e881"></a><a id="issue-oad-only-9f3c4dd7ec98ed0b"></a><a id="issue-oad-only-aa42a0200d92e571"></a><a id="issue-oad-only-b56acb83adffb691"></a><a id="issue-oad-only-ba3bf43b2375d8dc"></a><a id="issue-oad-only-c97c68cbe8383a37"></a><a id="issue-oad-only-ca7754b416dbcafe"></a><a id="issue-oad-only-ce28e73d6c9b4593"></a><a id="issue-oad-only-cf0ea4c8bb7d90e0"></a><a id="issue-oad-only-d18d89066401b1ed"></a><a id="issue-oad-only-d1cd1ebe03508586"></a><a id="issue-oad-only-d823a27d46b7b58a"></a><a id="issue-oad-only-e7543f9248b8dbbe"></a><a id="issue-oad-only-ed992207fdd67bde"></a><a id="issue-oad-only-f10a80ef3c5558af"></a><a id="issue-oad-only-f5585b5e31fe4735"></a>`issue-oad-only-03da09965ff22f13` (+27 related) | 28 | A | `oad-only` | requires-review | OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent. Contributes one finding to OAD-only or missed-equivalent totals. | Review detector coverage and the canonical target mapping. | medium; generated | `oad-finding:A-oad-28` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-23` — AddedReadOnlyPropertyInResponse: The new version has a new read-only property 'id' in response that was not found in the old version.<br>`oad-finding:A-oad-2` — AddingHeader: The new version adds a required header 'Retry-After'.<br>`oad-finding:A-oad-24` — AddedReadOnlyPropertyInResponse: The new version has a new read-only property 'name' in response that was not found in the old version.<br>`oad-finding:A-oad-9` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-30` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-7` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-1` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-25` — AddedReadOnlyPropertyInResponse: The new version has a new read-only property 'type' in response that was not found in the old version.<br>`oad-finding:A-oad-8` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-27` — AddedRequiredProperty: The new version lists new non-read-only properties as required: 'location'. These properties were not listed as required in the old version.<br>`oad-finding:A-oad-18` — RemovedProperty: The new version is missing a property found in the old version. Was 'isDefaultVersion' renamed or removed?<br>`oad-finding:A-oad-6` — AddingHeader: The new version adds a required header 'Retry-After'.<br>`oad-finding:A-oad-11` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-15` — RemovedProperty: The new version is missing a property found in the old version. Was 'deploymentType' renamed or removed?<br>`oad-finding:A-oad-22` — AddedRequiredProperty: The new version lists new non-read-only properties as required: 'location'. These properties were not listed as required in the old version.<br>`oad-finding:A-oad-5` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-10` — AddingHeader: The new version adds a required header 'Retry-After'.<br>`oad-finding:A-oad-20` — AddedPropertyInResponse: The new version has a new property 'properties' in response that was not found in the old version.<br>`oad-finding:A-oad-16` — RemovedProperty: The new version is missing a property found in the old version. Was 'validationStatus' renamed or removed?<br>`oad-finding:A-oad-21` — AddedPropertyInResponse: The new version has a new property 'tags' in response that was not found in the old version.<br>`oad-finding:A-oad-12` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-26` — AddedReadOnlyPropertyInResponse: The new version has a new read-only property 'systemData' in response that was not found in the old version.<br>`oad-finding:A-oad-17` — RemovedProperty: The new version is missing a property found in the old version. Was 'provisioningState' renamed or removed?<br>`oad-finding:A-oad-4` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-3` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'.<br>`oad-finding:A-oad-19` — RemovedProperty: The new version is missing a property found in the old version. Was 'lastPackageUpdateTime' renamed or removed?<br>`oad-finding:A-oad-29` — AddingHeader: The new version adds a required header 'Azure-AsyncOperation'. |
| <a id="issue-oad-only-66830d55b0d77cfc"></a><a id="issue-oad-only-931465be717dd366"></a>`issue-oad-only-66830d55b0d77cfc` (+1 related) | 2 | A | `oad-only` | likely-expected-difference | OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent. Contributes one finding to OAD-only or missed-equivalent totals. | Review detector coverage and the canonical target mapping. | medium; generated | `oad-finding:A-oad-13` — ReferenceRedirection: The '$ref' property points to different models in the old and new versions.<br>`oad-finding:A-oad-14` — DifferentAllOf: The new version has a different 'allOf' property than the previous one. |

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
- **Classification:** `missed-equivalent`
- **Resolved targets:** PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{} response
- **Related analysis:** [issue-oad-only-5f433777fa9466de](#issue-oad-only-5f433777fa9466de)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-2"></a>
### A-oad-2 — `AddingHeader`

- **Swagger finding:** `A-oad-2` — `AddingHeader` — The new version adds a required header 'Retry-After'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 226](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L226) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}'].put.responses.200.headers.Retry-After`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{} response
- **Related analysis:** [issue-oad-only-2590dad452aec652](#issue-oad-only-2590dad452aec652)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-3"></a>
### A-oad-3 — `AddingHeader`

- **Swagger finding:** `A-oad-3` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 312](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L312) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}'].patch.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{} response
- **Related analysis:** [issue-oad-only-ed992207fdd67bde](#issue-oad-only-ed992207fdd67bde)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-4"></a>
### A-oad-4 — `AddingHeader`

- **Swagger finding:** `A-oad-4` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 378](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L378) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}'].delete.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** DELETE /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{} response
- **Related analysis:** [issue-oad-only-e7543f9248b8dbbe](#issue-oad-only-e7543f9248b8dbbe)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-5"></a>
### A-oad-5 — `AddingHeader`

- **Swagger finding:** `A-oad-5` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 573](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L573) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/executionFilters/{executionFilter}'].put.responses.200.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/executionfilters/{} response
- **Related analysis:** [issue-oad-only-ba3bf43b2375d8dc](#issue-oad-only-ba3bf43b2375d8dc)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-6"></a>
### A-oad-6 — `AddingHeader`

- **Swagger finding:** `A-oad-6` — `AddingHeader` — The new version adds a required header 'Retry-After'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 577](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L577) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/executionFilters/{executionFilter}'].put.responses.200.headers.Retry-After`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/executionfilters/{} response
- **Related analysis:** [issue-oad-only-9db9c3de6660e881](#issue-oad-only-9db9c3de6660e881)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-7"></a>
### A-oad-7 — `AddingHeader`

- **Swagger finding:** `A-oad-7` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 672](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L672) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/executionFilters/{executionFilter}'].patch.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/executionfilters/{} response
- **Related analysis:** [issue-oad-only-4a2261be5fa7300b](#issue-oad-only-4a2261be5fa7300b)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-8"></a>
### A-oad-8 — `AddingHeader`

- **Swagger finding:** `A-oad-8` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 747](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L747) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/executionFilters/{executionFilter}'].delete.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** DELETE /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/executionfilters/{} response
- **Related analysis:** [issue-oad-only-66f52d1e7c1cb29e](#issue-oad-only-66f52d1e7c1cb29e)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-9"></a>
### A-oad-9 — `AddingHeader`

- **Swagger finding:** `A-oad-9` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 942](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L942) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}'].put.responses.200.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response
- **Related analysis:** [issue-oad-only-47c7a2c8e97c29f9](#issue-oad-only-47c7a2c8e97c29f9)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-10"></a>
### A-oad-10 — `AddingHeader`

- **Swagger finding:** `A-oad-10` — `AddingHeader` — The new version adds a required header 'Retry-After'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 946](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L946) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}'].put.responses.200.headers.Retry-After`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response
- **Related analysis:** [issue-oad-only-c97c68cbe8383a37](#issue-oad-only-c97c68cbe8383a37)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-11"></a>
### A-oad-11 — `AddingHeader`

- **Swagger finding:** `A-oad-11` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1041](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1041) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}'].patch.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response
- **Related analysis:** [issue-oad-only-9f3c4dd7ec98ed0b](#issue-oad-only-9f3c4dd7ec98ed0b)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-12"></a>
### A-oad-12 — `AddingHeader`

- **Swagger finding:** `A-oad-12` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1116](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1116) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}'].delete.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** DELETE /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response
- **Related analysis:** [issue-oad-only-d18d89066401b1ed](#issue-oad-only-d18d89066401b1ed)
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
- **Related analysis:** [issue-oad-only-66830d55b0d77cfc](#issue-oad-only-66830d55b0d77cfc)
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
- **Related analysis:** [issue-oad-only-931465be717dd366](#issue-oad-only-931465be717dd366)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-a-oad-15"></a>
### A-oad-15 — `RemovedProperty`

- **Swagger finding:** `A-oad-15` — `RemovedProperty` — The new version is missing a property found in the old version. Was 'deploymentType' renamed or removed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Related analysis:** [issue-oad-only-aa42a0200d92e571](#issue-oad-only-aa42a0200d92e571)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-16"></a>
### A-oad-16 — `RemovedProperty`

- **Swagger finding:** `A-oad-16` — `RemovedProperty` — The new version is missing a property found in the old version. Was 'validationStatus' renamed or removed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Related analysis:** [issue-oad-only-ce28e73d6c9b4593](#issue-oad-only-ce28e73d6c9b4593)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-17"></a>
### A-oad-17 — `RemovedProperty`

- **Swagger finding:** `A-oad-17` — `RemovedProperty` — The new version is missing a property found in the old version. Was 'provisioningState' renamed or removed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Related analysis:** [issue-oad-only-d823a27d46b7b58a](#issue-oad-only-d823a27d46b7b58a)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-18"></a>
### A-oad-18 — `RemovedProperty`

- **Swagger finding:** `A-oad-18` — `RemovedProperty` — The new version is missing a property found in the old version. Was 'isDefaultVersion' renamed or removed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Related analysis:** [issue-oad-only-98b31fd182bc6691](#issue-oad-only-98b31fd182bc6691)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-19"></a>
### A-oad-19 — `RemovedProperty`

- **Swagger finding:** `A-oad-19` — `RemovedProperty` — The new version is missing a property found in the old version. Was 'lastPackageUpdateTime' renamed or removed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Related analysis:** [issue-oad-only-f10a80ef3c5558af](#issue-oad-only-f10a80ef3c5558af)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-20"></a>
### A-oad-20 — `AddedPropertyInResponse`

- **Swagger finding:** `A-oad-20` — `AddedPropertyInResponse` — The new version has a new property 'properties' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Related analysis:** [issue-oad-only-ca7754b416dbcafe](#issue-oad-only-ca7754b416dbcafe)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-21"></a>
### A-oad-21 — `AddedPropertyInResponse`

- **Swagger finding:** `A-oad-21` — `AddedPropertyInResponse` — The new version has a new property 'tags' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Related analysis:** [issue-oad-only-cf0ea4c8bb7d90e0](#issue-oad-only-cf0ea4c8bb7d90e0)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-22"></a>
### A-oad-22 — `AddedRequiredProperty`

- **Swagger finding:** `A-oad-22` — `AddedRequiredProperty` — The new version lists new non-read-only properties as required: 'location'. These properties were not listed as required in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Related analysis:** [issue-oad-only-b56acb83adffb691](#issue-oad-only-b56acb83adffb691)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-23"></a>
### A-oad-23 — `AddedReadOnlyPropertyInResponse`

- **Swagger finding:** `A-oad-23` — `AddedReadOnlyPropertyInResponse` — The new version has a new read-only property 'id' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Related analysis:** [issue-oad-only-19366e5d3dc4e320](#issue-oad-only-19366e5d3dc4e320)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-24"></a>
### A-oad-24 — `AddedReadOnlyPropertyInResponse`

- **Swagger finding:** `A-oad-24` — `AddedReadOnlyPropertyInResponse` — The new version has a new read-only property 'name' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Related analysis:** [issue-oad-only-40b1fb374c1b6209](#issue-oad-only-40b1fb374c1b6209)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-25"></a>
### A-oad-25 — `AddedReadOnlyPropertyInResponse`

- **Swagger finding:** `A-oad-25` — `AddedReadOnlyPropertyInResponse` — The new version has a new read-only property 'type' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Related analysis:** [issue-oad-only-63512bb3c1b2fdeb](#issue-oad-only-63512bb3c1b2fdeb)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-26"></a>
### A-oad-26 — `AddedReadOnlyPropertyInResponse`

- **Swagger finding:** `A-oad-26` — `AddedReadOnlyPropertyInResponse` — The new version has a new read-only property 'systemData' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1703](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1703) — JSONPath `definitions.EdgeActionVersionProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1698](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1698) — JSONPath `definitions.EdgeActionVersion.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions response 200
- **Related analysis:** [issue-oad-only-d1cd1ebe03508586](#issue-oad-only-d1cd1ebe03508586)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-27"></a>
### A-oad-27 — `AddedRequiredProperty`

- **Swagger finding:** `A-oad-27` — `AddedRequiredProperty` — The new version lists new non-read-only properties as required: 'location'. These properties were not listed as required in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1138](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1138) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}/deployVersionCode'].post.responses.200.schema`; [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1201](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1201) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}/deployVersionCode'].post.responses.200.schema`
- **Classification:** `missed-equivalent`
- **Resolved targets:** POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode
- **Related analysis:** [issue-oad-only-724309616fd8052a](#issue-oad-only-724309616fd8052a)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-28"></a>
### A-oad-28 — `AddingHeader`

- **Swagger finding:** `A-oad-28` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1208](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1208) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}/deployVersionCode'].post.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/deployversioncode response
- **Related analysis:** [issue-oad-only-03da09965ff22f13](#issue-oad-only-03da09965ff22f13)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-29"></a>
### A-oad-29 — `AddingHeader`

- **Swagger finding:** `A-oad-29` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1288](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1288) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}/getVersionCode'].post.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/getversioncode response
- **Related analysis:** [issue-oad-only-f5585b5e31fe4735](#issue-oad-only-f5585b5e31fe4735)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-a-oad-30"></a>
### A-oad-30 — `AddingHeader`

- **Swagger finding:** `A-oad-30` — `AddingHeader` — The new version adds a required header 'Azure-AsyncOperation'.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38882287901) (digest `8e8f425a082f16a3623e4dfc1fdbf9fee57e783fce57398e39a2d04ee5e02dad`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/f0be0c6db7e284b9f38d4e115ec466946db5d9f4/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json); [head: specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json, line 1362](https://github.com/Azure/azure-rest-api-specs/blob/f9d6ef53c189869192864a8bfec816fc6796a23d/specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/stable/2026-10-01/openapi.json#L1362) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/edgeActions/{edgeActionName}/versions/{version}/swapDefault'].post.responses.202.headers.Azure-AsyncOperation`
- **Classification:** `missed-equivalent`
- **Resolved targets:** POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/edgeactions/{}/versions/{}/swapdefault response
- **Related analysis:** [issue-oad-only-4984a36e035c129b](#issue-oad-only-4984a36e035c129b)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="evidence-error-1"></a>
### Evidence error 1

- specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')


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
git -C target fetch --no-tags origin f0be0c6db7e284b9f38d4e115ec466946db5d9f4 f9d6ef53c189869192864a8bfec816fc6796a23d
git -C target checkout --detach f9d6ef53c189869192864a8bfec816fc6796a23d
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47326' --tool-revision 7824998e1b7e926ce3b09b39fc376742b726a028 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions

```powershell
Push-Location target
node $prepared.executable 'specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions' --base-ref f0be0c6db7e284b9f38d4e115ec466946db5d9f4 --phase same-version --json-output '../specification-cdn-resource-manager-Microsoft.Cdn-EdgeActions-phase-a.json' --markdown-output '../specification-cdn-resource-manager-Microsoft.Cdn-EdgeActions-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions' --base-ref f0be0c6db7e284b9f38d4e115ec466946db5d9f4 --json-output '../specification-cdn-resource-manager-Microsoft.Cdn-EdgeActions-phase-b-evidence.json' --markdown-output '../specification-cdn-resource-manager-Microsoft.Cdn-EdgeActions-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

