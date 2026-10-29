# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-46965:bf9529bf2ce66f6b3de75094b38769f0a1a89327`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46965 — Microsoft.Cdn: 2026-10-01 stable and single active preview TypeSpec (draft for review)](https://github.com/Azure/azure-rest-api-specs/pull/46965)
- **Author:** vincent1114
- **State:** closed (merged) at 2026-10-22T22:54:23Z
- **Base:** `main` at `2371f14ab26ab99500de46ac5c507476a8e0fc61`
- **Head:** `dev/vincenthu/cdn-stable-typespec` at `bf9529bf2ce66f6b3de75094b38769f0a1a89327`
- **Changed TypeSpec files:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn/AuthPolicy.tsp`, `specification/cdn/resource-manager/Microsoft.Cdn/Cdn/main.tsp`, `specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | [50](#finding-review) |
| Informational OAD records | 0 |
| TypeSpec findings | [4](#finding-review) |
| Exact | 0 |
| Probable (review required) | 0 |
| Intentional Swagger-only | [17](#finding-review-intentional) |
| Missed equivalent | [33](#finding-review-oad-only) |
| TypeSpec-only | [4](#finding-review-typespec-only) |
| Ambiguous | 0 |

**Exact OAD coverage:** 0 / 50 (0.0%)
**Review-inclusive OAD coverage:** 0 / 50 (0.0%)

### By phase

| Phase | Independent OAD execution | TypeSpec mode | Outcome | Comparable OAD | Informational OAD | TypeSpec findings | Exact | Probable | Intentional gap | Missed equivalent | TypeSpec-only | Exact OAD coverage | Review-inclusive OAD coverage |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | [Swagger Breaking Change run 39555246522](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246522) | `same-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 39555246517](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) | `cross-version` | compared | [50](#finding-review) | 0 | [4](#finding-review) | 0 | 0 | [17](#finding-review-intentional) | [33](#finding-review-oad-only) | [4](#finding-review-typespec-only) | 0 / 50 (0.0%) | 0 / 50 (0.0%) |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B | Breaking Change (Cross-Version) | 0 | [3](#finding-review) | 0 | 0 | 0 | 0 | 0 | [3](#finding-review-typespec-only) |

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
| B | `RemovedEnumValue` | DeliveryRuleActionName — name — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-cc59c037bd6b09d3](#issue-oad-only-cc59c037bd6b09d3). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-0) |
| B | `RemovedEnumValue` | DeliveryRuleActionName — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11288) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11241) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-8ee39650d3d1451a](#issue-oad-only-8ee39650d3d1451a). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-3) |
| B | `RemovedEnumValue` | DeliveryRuleCacheExpirationAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-3b42501da580c98d](#issue-oad-only-3b42501da580c98d). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-4) |
| B | `RemovedEnumValue` | DeliveryRuleCacheKeyQueryStringAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-ec0a6f0dd263b7a8](#issue-oad-only-ec0a6f0dd263b7a8). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-5) |
| B | `AddedEnumValue` | InvocationPoint — invocationPoint | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11641) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11589) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-88ba80b106ecad4a](#issue-oad-only-88ba80b106ecad4a). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-6) |
| B | `RemovedEnumValue` | DeliveryRuleRequestHeaderAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-c2e046bcd4f5f4c3](#issue-oad-only-c2e046bcd4f5f4c3). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-7) |
| B | `RemovedEnumValue` | DeliveryRuleResponseHeaderAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-9a584825f86accae](#issue-oad-only-9a584825f86accae). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-8) |
| B | `RemovedEnumValue` | DeliveryRuleRouteConfigurationOverrideAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-bf5850b85914bde8](#issue-oad-only-bf5850b85914bde8). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-9) |
| B | `RemovedEnumValue` | EdgeAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-5f042cc36a1189a5](#issue-oad-only-5f042cc36a1189a5). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-10) |
| B | `AddedEnumValue` | InvocationPoint | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L12957) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L12905) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-bf8ee28be07980c0](#issue-oad-only-bf8ee28be07980c0). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-11) |
| B | `RemovedEnumValue` | OriginGroupOverrideAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-96aa38870b3dc0a8](#issue-oad-only-96aa38870b3dc0a8). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-12) |
| B | `RemovedEnumValue` | UrlRedirectAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-3f117de550070f77](#issue-oad-only-3f117de550070f77). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-14) |
| B | `RemovedEnumValue` | UrlRewriteAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-dd7389527914fe47](#issue-oad-only-dd7389527914fe47). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-15) |
| B | `RemovedEnumValue` | UrlSigningAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-7cb6d947f4567b24](#issue-oad-only-7cb6d947f4567b24). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-16) |
| B | `RemovedProperty` | RouteProperties — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/afdendpoints/{}/routes/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L17269) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L16428) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-15cea47596d0d5dd](#issue-oad-only-15cea47596d0d5dd). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-17) |
| B | `RemovedProperty` | RouteUpdatePropertiesParameters — PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/afdendpoints/{}/routes/{} — request | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L17426) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L16581) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-eb8d190163aae42b](#issue-oad-only-eb8d190163aae42b). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-18) |
| B | `RemovedPath` | paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/authPolicies'] | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L2147) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-2d0b7dc1203eb7f8](#issue-oad-only-2d0b7dc1203eb7f8). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-19) |
| B | `RemovedPath` | paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/authPolicies/{authPolicyName}'] | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L2199) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-71c38164ea581548](#issue-oad-only-71c38164ea581548). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-20) |
| B | `RemovedEnumValue` | ProbeProtocol — probeProtocol — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L13540) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L12704) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-b92dc9f309f2ea8b](#issue-oad-only-b92dc9f309f2ea8b). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-21) |
| B | `RemovedEnumValue` | DeliveryRuleActionName — name — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-d7a0824afb7a5a29](#issue-oad-only-d7a0824afb7a5a29). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-22) |
| B | `RemovedProperty` | LoadBalancingSettingsParameters — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L13979) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L13143) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-1fb09da97872c4b4](#issue-oad-only-1fb09da97872c4b4). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-23) |
| B | `RemovedEnumValue` | DeliveryRuleActionName — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12048) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11241) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-4946422ca7259984](#issue-oad-only-4946422ca7259984). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-36) |
| B | `RemovedEnumValue` | DeliveryRuleCacheExpirationAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-6e067883c0734092](#issue-oad-only-6e067883c0734092). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-37) |
| B | `RemovedEnumValue` | DeliveryRuleCacheKeyQueryStringAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-9820c115ea137288](#issue-oad-only-9820c115ea137288). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-38) |
| B | `RemovedEnumValue` | DeliveryRuleRequestHeaderAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-97fc48a7dd28812d](#issue-oad-only-97fc48a7dd28812d). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-39) |
| B | `RemovedEnumValue` | DeliveryRuleResponseHeaderAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-d072f02f5ac80c6e](#issue-oad-only-d072f02f5ac80c6e). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-40) |
| B | `RemovedEnumValue` | DeliveryRuleRouteConfigurationOverrideAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-7bee66b7a1216517](#issue-oad-only-7bee66b7a1216517). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-41) |
| B | `RemovedEnumValue` | EdgeAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-b0b2704073aa7a58](#issue-oad-only-b0b2704073aa7a58). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-43) |
| B | `RemovedEnumValue` | OriginGroupOverrideAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-6be7ecf9091ad5cd](#issue-oad-only-6be7ecf9091ad5cd). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-44) |
| B | `RemovedEnumValue` | ProbeProtocol — GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} — response 200 | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L15774) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L14934) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-741dacd5a3dc1582](#issue-oad-only-741dacd5a3dc1582). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-45) |
| B | `RemovedEnumValue` | UrlRedirectAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-254a716f7f01bb55](#issue-oad-only-254a716f7f01bb55). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-47) |
| B | `RemovedEnumValue` | UrlRewriteAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-01c74a2ccf8a87a2](#issue-oad-only-01c74a2ccf8a87a2). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-48) |
| B | `RemovedEnumValue` | UrlSigningAction — name | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) | An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution. [issue-oad-only-1aed6581cb04ad51](#issue-oad-only-1aed6581cb04ad51). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-49) |

<a id="finding-review-typespec-only"></a>
### TypeSpec-only findings

| Phase | Finding | Type / path | Source | Analysis | Suggested review | Details |
| --- | --- | --- | --- | --- | --- | --- |
| B | `ResourcePropertyTypeWidened` | Microsoft.Cdn.InvocationPoint | [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L2201) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-3291eea21269c50c](#issue-typespec-only-3291eea21269c50c). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-cdn-resource-manager-microsoft-cdn-cdn-tsp-b-0) |
| B | `ResponsePropertyTypeNarrowed` | DeliveryRuleActionUnion | [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/RuleSet.tsp#L33) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-ac8a02d01e6656af](#issue-typespec-only-ac8a02d01e6656af). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-cdn-resource-manager-microsoft-cdn-cdn-tsp-b-1) |
| B | `RequestPropertyTypeNarrowed` | DeliveryRuleActionUnionCreateOrUpdate | [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/RuleSet.tsp#L56) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-7c7166a06a369f6c](#issue-typespec-only-7c7166a06a369f6c). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-cdn-resource-manager-microsoft-cdn-cdn-tsp-b-2) |
| B | `RequestPropertyTypeNarrowed` | DeliveryRuleActionUnionUpdate | [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp#L57) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-typespec-only-a509ad6b2aad3887](#issue-typespec-only-a509ad6b2aad3887). | Confirm whether this is additional coverage, noise, or a matching gap. | [details](#finding-typespec-specification-cdn-resource-manager-microsoft-cdn-cdn-tsp-b-3) |

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
| B | `RemovedDefinition` | definitions | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L8351) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) | Definition removal is covered through effective wire impacts [issue-oad-only-24ddcb91ac0621d5](#issue-oad-only-24ddcb91ac0621d5). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-1) |
| B | `RemovedDefinition` | definitions | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L8351) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) | Definition removal is covered through effective wire impacts [issue-oad-only-ac631c69f13bd869](#issue-oad-only-ac631c69f13bd869). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-2) |
| B | `RemovedDefinition` | definitions | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L8351) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) | Definition removal is covered through effective wire impacts [issue-oad-only-d5820ed79ddccaa8](#issue-oad-only-d5820ed79ddccaa8). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-13) |
| B | `RemovedDefinition` | definitions | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) | Definition removal is covered through effective wire impacts [issue-oad-only-feaa3846a6c50594](#issue-oad-only-feaa3846a6c50594). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-24) |
| B | `RemovedDefinition` | definitions | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) | Definition removal is covered through effective wire impacts [issue-oad-only-adcb432c8b238875](#issue-oad-only-adcb432c8b238875). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-25) |
| B | `RemovedDefinition` | definitions | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) | Definition removal is covered through effective wire impacts [issue-oad-only-fe6442bb233c86f0](#issue-oad-only-fe6442bb233c86f0). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-26) |
| B | `RemovedDefinition` | definitions | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) | Definition removal is covered through effective wire impacts [issue-oad-only-97a5412db2a0ba2c](#issue-oad-only-97a5412db2a0ba2c). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-27) |
| B | `RemovedDefinition` | definitions | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) | Definition removal is covered through effective wire impacts [issue-oad-only-323c5835913d2138](#issue-oad-only-323c5835913d2138). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-28) |
| B | `RemovedDefinition` | definitions | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) | Definition removal is covered through effective wire impacts [issue-oad-only-ef1676faabd97552](#issue-oad-only-ef1676faabd97552). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-29) |
| B | `RemovedDefinition` | definitions | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) | Definition removal is covered through effective wire impacts [issue-oad-only-d35e5d843888b0ab](#issue-oad-only-d35e5d843888b0ab). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-30) |
| B | `RemovedDefinition` | definitions | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) | Definition removal is covered through effective wire impacts [issue-oad-only-9ed32dfd9c06cfcb](#issue-oad-only-9ed32dfd9c06cfcb). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-31) |
| B | `RemovedDefinition` | definitions | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) | Definition removal is covered through effective wire impacts [issue-oad-only-b2b8f7f0ba34fc3a](#issue-oad-only-b2b8f7f0ba34fc3a). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-32) |
| B | `RemovedDefinition` | definitions | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) | Definition removal is covered through effective wire impacts [issue-oad-only-4b8901887d5b3536](#issue-oad-only-4b8901887d5b3536). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-33) |
| B | `RemovedDefinition` | definitions | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) | Definition removal is covered through effective wire impacts [issue-oad-only-a6e35b218f3104fa](#issue-oad-only-a6e35b218f3104fa). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-34) |
| B | `RemovedDefinition` | definitions | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) | Definition removal is covered through effective wire impacts [issue-oad-only-9f3edb28f1a42e6d](#issue-oad-only-9f3edb28f1a42e6d). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-35) |
| B | `RemovedDefinition` | definitions | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) | Definition removal is covered through effective wire impacts [issue-oad-only-86703d2fe5619b3d](#issue-oad-only-86703d2fe5619b3d). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-42) |
| B | `RemovedDefinition` | definitions | [base](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) · [head](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) | Definition removal is covered through effective wire impacts [issue-oad-only-eef30ffaa6796284](#issue-oad-only-eef30ffaa6796284). | Review detector coverage and the canonical target mapping. | [details](#finding-b-oad-46) |

<a id="finding-review-informational"></a>
### Informational OAD records

None.

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 12630 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246522) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 16271 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2025-06-01` → `2025-06-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2025-09-01-preview` → `2025-09-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2025-12-01` → `2025-12-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2026-07-01` → `2026-07-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase B (`cross-version`) | `2026-07-01` → `2026-10-01` | 1 | 4 | 5 | [generated combined Markdown](report-artifacts/typespec/495bf9259924f532-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-concordant-zero-eec5259b50985ec1"></a>`issue-concordant-zero-eec5259b50985ec1` | 0 | A | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase A. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-A` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |
| <a id="issue-oad-only-01c74a2ccf8a87a2"></a><a id="issue-oad-only-15cea47596d0d5dd"></a><a id="issue-oad-only-1aed6581cb04ad51"></a><a id="issue-oad-only-1fb09da97872c4b4"></a><a id="issue-oad-only-254a716f7f01bb55"></a><a id="issue-oad-only-2d0b7dc1203eb7f8"></a><a id="issue-oad-only-3b42501da580c98d"></a><a id="issue-oad-only-3f117de550070f77"></a><a id="issue-oad-only-4946422ca7259984"></a><a id="issue-oad-only-5f042cc36a1189a5"></a><a id="issue-oad-only-6be7ecf9091ad5cd"></a><a id="issue-oad-only-6e067883c0734092"></a><a id="issue-oad-only-71c38164ea581548"></a><a id="issue-oad-only-741dacd5a3dc1582"></a><a id="issue-oad-only-7bee66b7a1216517"></a><a id="issue-oad-only-7cb6d947f4567b24"></a><a id="issue-oad-only-88ba80b106ecad4a"></a><a id="issue-oad-only-8ee39650d3d1451a"></a><a id="issue-oad-only-96aa38870b3dc0a8"></a><a id="issue-oad-only-97fc48a7dd28812d"></a><a id="issue-oad-only-9820c115ea137288"></a><a id="issue-oad-only-9a584825f86accae"></a><a id="issue-oad-only-b0b2704073aa7a58"></a><a id="issue-oad-only-b92dc9f309f2ea8b"></a><a id="issue-oad-only-bf5850b85914bde8"></a><a id="issue-oad-only-bf8ee28be07980c0"></a><a id="issue-oad-only-c2e046bcd4f5f4c3"></a><a id="issue-oad-only-cc59c037bd6b09d3"></a><a id="issue-oad-only-d072f02f5ac80c6e"></a><a id="issue-oad-only-d7a0824afb7a5a29"></a><a id="issue-oad-only-dd7389527914fe47"></a><a id="issue-oad-only-eb8d190163aae42b"></a><a id="issue-oad-only-ec0a6f0dd263b7a8"></a>`issue-oad-only-01c74a2ccf8a87a2` (+32 related) | 33 | B | `oad-only` | requires-review | OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent. Contributes one finding to OAD-only or missed-equivalent totals. | Review detector coverage and the canonical target mapping. | medium; generated | `oad-finding:B-oad-48` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-17` — RemovedProperty: The new version is missing a property found in the old version. Was 'grpcState' renamed or removed?<br>`oad-finding:B-oad-49` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-23` — RemovedProperty: The new version is missing a property found in the old version. Was 'capacityDistributionSettings' renamed or removed?<br>`oad-finding:B-oad-47` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-19` — RemovedPath: The new version is missing a path that was found in the old version. Was path '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/authPolicies' removed or restructured?<br>`oad-finding:B-oad-4` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-14` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-36` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-10` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-44` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-37` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-20` — RemovedPath: The new version is missing a path that was found in the old version. Was path '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/authPolicies/{authPolicyName}' removed or restructured?<br>`oad-finding:B-oad-45` — RemovedEnumValue: The new version is removing enum value(s) 'Grpc' from the old version.<br>`oad-finding:B-oad-41` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-16` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-6` — AddedEnumValue: The new version is adding enum value(s) 'ClientResponse' from the old version.<br>`oad-finding:B-oad-3` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-12` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-39` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-38` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-8` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-43` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-21` — RemovedEnumValue: The new version is removing enum value(s) 'Grpc' from the old version.<br>`oad-finding:B-oad-9` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-11` — AddedEnumValue: The new version is adding enum value(s) 'ClientResponse' from the old version.<br>`oad-finding:B-oad-7` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-0` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-40` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-22` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-15` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version.<br>`oad-finding:B-oad-18` — RemovedProperty: The new version is missing a property found in the old version. Was 'grpcState' renamed or removed?<br>`oad-finding:B-oad-5` — RemovedEnumValue: The new version is removing enum value(s) 'AfdUrlSigning' from the old version. |
| <a id="issue-oad-only-24ddcb91ac0621d5"></a><a id="issue-oad-only-323c5835913d2138"></a><a id="issue-oad-only-4b8901887d5b3536"></a><a id="issue-oad-only-86703d2fe5619b3d"></a><a id="issue-oad-only-97a5412db2a0ba2c"></a><a id="issue-oad-only-9ed32dfd9c06cfcb"></a><a id="issue-oad-only-9f3edb28f1a42e6d"></a><a id="issue-oad-only-a6e35b218f3104fa"></a><a id="issue-oad-only-ac631c69f13bd869"></a><a id="issue-oad-only-adcb432c8b238875"></a><a id="issue-oad-only-b2b8f7f0ba34fc3a"></a><a id="issue-oad-only-d35e5d843888b0ab"></a><a id="issue-oad-only-d5820ed79ddccaa8"></a><a id="issue-oad-only-eef30ffaa6796284"></a><a id="issue-oad-only-ef1676faabd97552"></a><a id="issue-oad-only-fe6442bb233c86f0"></a><a id="issue-oad-only-feaa3846a6c50594"></a>`issue-oad-only-24ddcb91ac0621d5` (+16 related) | 17 | B | `oad-only` | likely-expected-difference | OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent. Contributes one finding to OAD-only or missed-equivalent totals. | Review detector coverage and the canonical target mapping. | medium; generated | `oad-finding:B-oad-1` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'AfdUrlSigningAction' removed or renamed?<br>`oad-finding:B-oad-28` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'AuthPolicyAction' removed or renamed?<br>`oad-finding:B-oad-33` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'AuthPolicyUpdateParameters' removed or renamed?<br>`oad-finding:B-oad-42` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'DistributionType' removed or renamed?<br>`oad-finding:B-oad-27` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'AuthPolicy' removed or renamed?<br>`oad-finding:B-oad-31` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'AuthPolicyEntraIDConfig' removed or renamed?<br>`oad-finding:B-oad-35` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'CapacityDistributionSettingsParameters' removed or renamed?<br>`oad-finding:B-oad-34` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'AuthPolicyUpdatePropertiesParameters' removed or renamed?<br>`oad-finding:B-oad-2` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'AfdUrlSigningActionParameters' removed or renamed?<br>`oad-finding:B-oad-25` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'AfdUrlSigningAction' removed or renamed?<br>`oad-finding:B-oad-32` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'AuthPolicyProperties' removed or renamed?<br>`oad-finding:B-oad-30` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'AuthPolicyConfigIdentityProvider' removed or renamed?<br>`oad-finding:B-oad-13` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'TypeName' removed or renamed?<br>`oad-finding:B-oad-46` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'TypeName' removed or renamed?<br>`oad-finding:B-oad-29` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'AuthPolicyAssociation' removed or renamed?<br>`oad-finding:B-oad-26` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'AfdUrlSigningActionParameters' removed or renamed?<br>`oad-finding:B-oad-24` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'AFDRouteGrpcState' removed or renamed? |
| <a id="issue-typespec-only-3291eea21269c50c"></a><a id="issue-typespec-only-7c7166a06a369f6c"></a><a id="issue-typespec-only-a509ad6b2aad3887"></a><a id="issue-typespec-only-ac8a02d01e6656af"></a>`issue-typespec-only-3291eea21269c50c` (+3 related) | 4 | B | `typespec-only` | requires-review | The TypeSpec finding has no selected OAD equivalent. Contributes one finding to TypeSpec-only totals. | Confirm whether this is additional coverage, noise, or a matching gap. | medium; generated | `typespec-finding:specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-0` — ResourcePropertyTypeWidened: Request union at body.properties.properties.rules.properties.actions.variants.EdgeAction.properties.parameters.properties.invocationPoint added variant 'ClientResponse'.<br>`typespec-finding:specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-2` — RequestPropertyTypeNarrowed: Request union at body.properties.properties.rules.properties.actions removed variant 'AfdUrlSigning'.<br>`typespec-finding:specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-3` — RequestPropertyTypeNarrowed: Request union at body.properties.properties.actions removed variant 'AfdUrlSigning'.<br>`typespec-finding:specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-1` — ResponsePropertyTypeNarrowed: Response union at body.properties.properties.rules.properties.actions removed variant 'AfdUrlSigning'. |

## Finding details

<a id="finding-b-oad-0"></a>
### B-oad-0 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-0` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json, line 11278](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) — JSONPath `definitions.DeliveryRuleAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.DeliveryRuleAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 201 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} request | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 201 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 202 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/start response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/start response 202 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/stop response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/stop response 202 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} request | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints response 200
- **Related analysis:** [issue-oad-only-cc59c037bd6b09d3](#issue-oad-only-cc59c037bd6b09d3)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-1"></a>
### B-oad-1 — `RemovedDefinition`

- **Swagger finding:** `B-oad-1` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'AfdUrlSigningAction' removed or renamed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json, line 8351](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L8351) — JSONPath `definitions`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 8354](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) — JSONPath `definitions`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document openapi.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Related analysis:** [issue-oad-only-24ddcb91ac0621d5](#issue-oad-only-24ddcb91ac0621d5)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-b-oad-2"></a>
### B-oad-2 — `RemovedDefinition`

- **Swagger finding:** `B-oad-2` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'AfdUrlSigningActionParameters' removed or renamed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json, line 8351](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L8351) — JSONPath `definitions`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 8354](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) — JSONPath `definitions`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document openapi.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Related analysis:** [issue-oad-only-ac631c69f13bd869](#issue-oad-only-ac631c69f13bd869)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-b-oad-3"></a>
### B-oad-3 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-3` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json, line 11288](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11288) — JSONPath `definitions.DeliveryRuleActionName`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11241](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11241) — JSONPath `definitions.DeliveryRuleActionName`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 201 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} request | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 201 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 202 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/start response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/start response 202 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/stop response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/stop response 202 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} request | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints response 200
- **Related analysis:** [issue-oad-only-8ee39650d3d1451a](#issue-oad-only-8ee39650d3d1451a)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-4"></a>
### B-oad-4 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-4` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json, line 11278](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) — JSONPath `definitions.DeliveryRuleCacheExpirationAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.DeliveryRuleCacheExpirationAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.DeliveryRuleCacheExpirationAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-3b42501da580c98d](#issue-oad-only-3b42501da580c98d)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-5"></a>
### B-oad-5 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-5` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json, line 11278](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) — JSONPath `definitions.DeliveryRuleCacheKeyQueryStringAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.DeliveryRuleCacheKeyQueryStringAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.DeliveryRuleCacheKeyQueryStringAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-ec0a6f0dd263b7a8](#issue-oad-only-ec0a6f0dd263b7a8)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-6"></a>
### B-oad-6 — `AddedEnumValue`

- **Swagger finding:** `B-oad-6` — `AddedEnumValue` — The new version is adding enum value(s) 'ClientResponse' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json, line 11641](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11641) — JSONPath `definitions.DeliveryRuleEdgeActionParameters.properties.invocationPoint`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11589](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11589) — JSONPath `definitions.DeliveryRuleEdgeActionParameters.properties.invocationPoint`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule AddedEnumValue; JSON path definitions.DeliveryRuleEdgeActionParameters.properties.invocationPoint; Resolved reference #/definitions/InvocationPoint; Document openapi.json
- **Related analysis:** [issue-oad-only-88ba80b106ecad4a](#issue-oad-only-88ba80b106ecad4a)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-7"></a>
### B-oad-7 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-7` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json, line 11278](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) — JSONPath `definitions.DeliveryRuleRequestHeaderAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.DeliveryRuleRequestHeaderAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.DeliveryRuleRequestHeaderAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-c2e046bcd4f5f4c3](#issue-oad-only-c2e046bcd4f5f4c3)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-8"></a>
### B-oad-8 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-8` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json, line 11278](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) — JSONPath `definitions.DeliveryRuleResponseHeaderAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.DeliveryRuleResponseHeaderAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.DeliveryRuleResponseHeaderAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-9a584825f86accae](#issue-oad-only-9a584825f86accae)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-9"></a>
### B-oad-9 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-9` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json, line 11278](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) — JSONPath `definitions.DeliveryRuleRouteConfigurationOverrideAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.DeliveryRuleRouteConfigurationOverrideAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.DeliveryRuleRouteConfigurationOverrideAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-bf5850b85914bde8](#issue-oad-only-bf5850b85914bde8)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-10"></a>
### B-oad-10 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-10` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json, line 11278](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) — JSONPath `definitions.EdgeAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.EdgeAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.EdgeAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-5f042cc36a1189a5](#issue-oad-only-5f042cc36a1189a5)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-11"></a>
### B-oad-11 — `AddedEnumValue`

- **Swagger finding:** `B-oad-11` — `AddedEnumValue` — The new version is adding enum value(s) 'ClientResponse' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json, line 12957](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L12957) — JSONPath `definitions.InvocationPoint`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 12905](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L12905) — JSONPath `definitions.InvocationPoint`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule AddedEnumValue; JSON path definitions.InvocationPoint; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-bf8ee28be07980c0](#issue-oad-only-bf8ee28be07980c0)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-12"></a>
### B-oad-12 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-12` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json, line 11278](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) — JSONPath `definitions.OriginGroupOverrideAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.OriginGroupOverrideAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.OriginGroupOverrideAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-96aa38870b3dc0a8](#issue-oad-only-96aa38870b3dc0a8)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-13"></a>
### B-oad-13 — `RemovedDefinition`

- **Swagger finding:** `B-oad-13` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'TypeName' removed or renamed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json, line 8351](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L8351) — JSONPath `definitions`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 8354](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) — JSONPath `definitions`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document openapi.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Related analysis:** [issue-oad-only-d5820ed79ddccaa8](#issue-oad-only-d5820ed79ddccaa8)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-b-oad-14"></a>
### B-oad-14 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-14` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json, line 11278](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) — JSONPath `definitions.UrlRedirectAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.UrlRedirectAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.UrlRedirectAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-3f117de550070f77](#issue-oad-only-3f117de550070f77)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-15"></a>
### B-oad-15 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-15` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json, line 11278](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) — JSONPath `definitions.UrlRewriteAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.UrlRewriteAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.UrlRewriteAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-dd7389527914fe47](#issue-oad-only-dd7389527914fe47)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-16"></a>
### B-oad-16 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-16` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json, line 11278](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-07-01/openapi.json#L11278) — JSONPath `definitions.UrlSigningAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.UrlSigningAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.UrlSigningAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-7cb6d947f4567b24](#issue-oad-only-7cb6d947f4567b24)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-17"></a>
### B-oad-17 — `RemovedProperty`

- **Swagger finding:** `B-oad-17` — `RemovedProperty` — The new version is missing a property found in the old version. Was 'grpcState' renamed or removed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 17269](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L17269) — JSONPath `definitions.RouteProperties.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 16428](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L16428) — JSONPath `definitions.RouteProperties.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/afdendpoints/{}/routes/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/afdendpoints/{}/routes/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/afdendpoints/{}/routes/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/afdendpoints/{}/routes/{} response 201 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/afdendpoints/{}/routes/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/afdendpoints/{}/routes/{} response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/afdendpoints/{}/routes/{} response 202 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/afdendpoints/{}/routes response 200
- **Related analysis:** [issue-oad-only-15cea47596d0d5dd](#issue-oad-only-15cea47596d0d5dd)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-18"></a>
### B-oad-18 — `RemovedProperty`

- **Swagger finding:** `B-oad-18` — `RemovedProperty` — The new version is missing a property found in the old version. Was 'grpcState' renamed or removed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 17426](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L17426) — JSONPath `definitions.RouteUpdatePropertiesParameters.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 16581](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L16581) — JSONPath `definitions.RouteUpdatePropertiesParameters.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/afdendpoints/{}/routes/{} request
- **Related analysis:** [issue-oad-only-eb8d190163aae42b](#issue-oad-only-eb8d190163aae42b)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-19"></a>
### B-oad-19 — `RemovedPath`

- **Swagger finding:** `B-oad-19` — `RemovedPath` — The new version is missing a path that was found in the old version. Was path '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/authPolicies' removed or restructured?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 2147](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L2147) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/authPolicies']`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json)
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedPath; JSON path paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/authPolicies']; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-2d0b7dc1203eb7f8](#issue-oad-only-2d0b7dc1203eb7f8)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-20"></a>
### B-oad-20 — `RemovedPath`

- **Swagger finding:** `B-oad-20` — `RemovedPath` — The new version is missing a path that was found in the old version. Was path '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/authPolicies/{authPolicyName}' removed or restructured?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 2199](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L2199) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/authPolicies/{authPolicyName}']`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json)
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedPath; JSON path paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/authPolicies/{authPolicyName}']; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-71c38164ea581548](#issue-oad-only-71c38164ea581548)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-21"></a>
### B-oad-21 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-21` — `RemovedEnumValue` — The new version is removing enum value(s) 'Grpc' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 13540](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L13540) — JSONPath `definitions.HealthProbeParameters.properties.probeProtocol`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 12704](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L12704) — JSONPath `definitions.HealthProbeParameters.properties.probeProtocol`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 201 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} request | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups/{} response 201 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups/{} response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups/{} request | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 201 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 202 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/start response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/start response 202 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/stop response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/stop response 202 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints response 200
- **Related analysis:** [issue-oad-only-b92dc9f309f2ea8b](#issue-oad-only-b92dc9f309f2ea8b)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-22"></a>
### B-oad-22 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-22` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 12038](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) — JSONPath `definitions.DeliveryRuleAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.DeliveryRuleAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 201 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} request | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 201 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 202 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/start response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/start response 202 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/stop response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/stop response 202 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} request | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints response 200
- **Related analysis:** [issue-oad-only-d7a0824afb7a5a29](#issue-oad-only-d7a0824afb7a5a29)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-23"></a>
### B-oad-23 — `RemovedProperty`

- **Swagger finding:** `B-oad-23` — `RemovedProperty` — The new version is missing a property found in the old version. Was 'capacityDistributionSettings' renamed or removed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 13979](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L13979) — JSONPath `definitions.LoadBalancingSettingsParameters.properties`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 13143](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L13143) — JSONPath `definitions.LoadBalancingSettingsParameters.properties`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 201 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} request | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups response 200
- **Related analysis:** [issue-oad-only-1fb09da97872c4b4](#issue-oad-only-1fb09da97872c4b4)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-24"></a>
### B-oad-24 — `RemovedDefinition`

- **Swagger finding:** `B-oad-24` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'AFDRouteGrpcState' removed or renamed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 8751](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) — JSONPath `definitions`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 8354](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) — JSONPath `definitions`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document openapi.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Related analysis:** [issue-oad-only-feaa3846a6c50594](#issue-oad-only-feaa3846a6c50594)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-b-oad-25"></a>
### B-oad-25 — `RemovedDefinition`

- **Swagger finding:** `B-oad-25` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'AfdUrlSigningAction' removed or renamed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 8751](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) — JSONPath `definitions`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 8354](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) — JSONPath `definitions`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document openapi.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Related analysis:** [issue-oad-only-adcb432c8b238875](#issue-oad-only-adcb432c8b238875)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-b-oad-26"></a>
### B-oad-26 — `RemovedDefinition`

- **Swagger finding:** `B-oad-26` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'AfdUrlSigningActionParameters' removed or renamed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 8751](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) — JSONPath `definitions`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 8354](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) — JSONPath `definitions`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document openapi.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Related analysis:** [issue-oad-only-fe6442bb233c86f0](#issue-oad-only-fe6442bb233c86f0)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-b-oad-27"></a>
### B-oad-27 — `RemovedDefinition`

- **Swagger finding:** `B-oad-27` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'AuthPolicy' removed or renamed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 8751](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) — JSONPath `definitions`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 8354](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) — JSONPath `definitions`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document openapi.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Related analysis:** [issue-oad-only-97a5412db2a0ba2c](#issue-oad-only-97a5412db2a0ba2c)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-b-oad-28"></a>
### B-oad-28 — `RemovedDefinition`

- **Swagger finding:** `B-oad-28` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'AuthPolicyAction' removed or renamed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 8751](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) — JSONPath `definitions`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 8354](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) — JSONPath `definitions`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document openapi.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Related analysis:** [issue-oad-only-323c5835913d2138](#issue-oad-only-323c5835913d2138)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-b-oad-29"></a>
### B-oad-29 — `RemovedDefinition`

- **Swagger finding:** `B-oad-29` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'AuthPolicyAssociation' removed or renamed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 8751](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) — JSONPath `definitions`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 8354](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) — JSONPath `definitions`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document openapi.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Related analysis:** [issue-oad-only-ef1676faabd97552](#issue-oad-only-ef1676faabd97552)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-b-oad-30"></a>
### B-oad-30 — `RemovedDefinition`

- **Swagger finding:** `B-oad-30` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'AuthPolicyConfigIdentityProvider' removed or renamed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 8751](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) — JSONPath `definitions`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 8354](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) — JSONPath `definitions`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document openapi.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Related analysis:** [issue-oad-only-d35e5d843888b0ab](#issue-oad-only-d35e5d843888b0ab)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-b-oad-31"></a>
### B-oad-31 — `RemovedDefinition`

- **Swagger finding:** `B-oad-31` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'AuthPolicyEntraIDConfig' removed or renamed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 8751](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) — JSONPath `definitions`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 8354](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) — JSONPath `definitions`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document openapi.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Related analysis:** [issue-oad-only-9ed32dfd9c06cfcb](#issue-oad-only-9ed32dfd9c06cfcb)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-b-oad-32"></a>
### B-oad-32 — `RemovedDefinition`

- **Swagger finding:** `B-oad-32` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'AuthPolicyProperties' removed or renamed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 8751](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) — JSONPath `definitions`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 8354](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) — JSONPath `definitions`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document openapi.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Related analysis:** [issue-oad-only-b2b8f7f0ba34fc3a](#issue-oad-only-b2b8f7f0ba34fc3a)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-b-oad-33"></a>
### B-oad-33 — `RemovedDefinition`

- **Swagger finding:** `B-oad-33` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'AuthPolicyUpdateParameters' removed or renamed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 8751](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) — JSONPath `definitions`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 8354](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) — JSONPath `definitions`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document openapi.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Related analysis:** [issue-oad-only-4b8901887d5b3536](#issue-oad-only-4b8901887d5b3536)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-b-oad-34"></a>
### B-oad-34 — `RemovedDefinition`

- **Swagger finding:** `B-oad-34` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'AuthPolicyUpdatePropertiesParameters' removed or renamed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 8751](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) — JSONPath `definitions`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 8354](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) — JSONPath `definitions`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document openapi.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Related analysis:** [issue-oad-only-a6e35b218f3104fa](#issue-oad-only-a6e35b218f3104fa)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-b-oad-35"></a>
### B-oad-35 — `RemovedDefinition`

- **Swagger finding:** `B-oad-35` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'CapacityDistributionSettingsParameters' removed or renamed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 8751](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) — JSONPath `definitions`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 8354](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) — JSONPath `definitions`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document openapi.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Related analysis:** [issue-oad-only-9f3edb28f1a42e6d](#issue-oad-only-9f3edb28f1a42e6d)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-b-oad-36"></a>
### B-oad-36 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-36` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 12048](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12048) — JSONPath `definitions.DeliveryRuleActionName`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11241](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11241) — JSONPath `definitions.DeliveryRuleActionName`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 201 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules/{} request | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 201 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 202 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/start response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/start response 202 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/stop response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/stop response 202 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets/{}/rules response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/rulesets response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} request | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints response 200
- **Related analysis:** [issue-oad-only-4946422ca7259984](#issue-oad-only-4946422ca7259984)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-37"></a>
### B-oad-37 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-37` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 12038](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) — JSONPath `definitions.DeliveryRuleCacheExpirationAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.DeliveryRuleCacheExpirationAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.DeliveryRuleCacheExpirationAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-6e067883c0734092](#issue-oad-only-6e067883c0734092)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-38"></a>
### B-oad-38 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-38` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 12038](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) — JSONPath `definitions.DeliveryRuleCacheKeyQueryStringAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.DeliveryRuleCacheKeyQueryStringAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.DeliveryRuleCacheKeyQueryStringAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-9820c115ea137288](#issue-oad-only-9820c115ea137288)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-39"></a>
### B-oad-39 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-39` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 12038](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) — JSONPath `definitions.DeliveryRuleRequestHeaderAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.DeliveryRuleRequestHeaderAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.DeliveryRuleRequestHeaderAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-97fc48a7dd28812d](#issue-oad-only-97fc48a7dd28812d)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-40"></a>
### B-oad-40 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-40` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 12038](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) — JSONPath `definitions.DeliveryRuleResponseHeaderAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.DeliveryRuleResponseHeaderAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.DeliveryRuleResponseHeaderAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-d072f02f5ac80c6e](#issue-oad-only-d072f02f5ac80c6e)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-41"></a>
### B-oad-41 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-41` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 12038](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) — JSONPath `definitions.DeliveryRuleRouteConfigurationOverrideAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.DeliveryRuleRouteConfigurationOverrideAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.DeliveryRuleRouteConfigurationOverrideAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-7bee66b7a1216517](#issue-oad-only-7bee66b7a1216517)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-42"></a>
### B-oad-42 — `RemovedDefinition`

- **Swagger finding:** `B-oad-42` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'DistributionType' removed or renamed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 8751](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) — JSONPath `definitions`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 8354](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) — JSONPath `definitions`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document openapi.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Related analysis:** [issue-oad-only-86703d2fe5619b3d](#issue-oad-only-86703d2fe5619b3d)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-b-oad-43"></a>
### B-oad-43 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-43` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 12038](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) — JSONPath `definitions.EdgeAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.EdgeAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.EdgeAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-b0b2704073aa7a58](#issue-oad-only-b0b2704073aa7a58)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-44"></a>
### B-oad-44 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-44` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 12038](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) — JSONPath `definitions.OriginGroupOverrideAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.OriginGroupOverrideAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.OriginGroupOverrideAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-6be7ecf9091ad5cd](#issue-oad-only-6be7ecf9091ad5cd)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-45"></a>
### B-oad-45 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-45` — `RemovedEnumValue` — The new version is removing enum value(s) 'Grpc' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 15774](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L15774) — JSONPath `definitions.ProbeProtocol`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 14934](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L14934) — JSONPath `definitions.ProbeProtocol`
- **Classification:** `missed-equivalent`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 201 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups/{} request | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups/{} response 201 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups/{} response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups/{} request | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/origingroups response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 201 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 200 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{} response 202 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/start response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/start response 202 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/stop response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/stop response 202 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints/{}/origingroups response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.cdn/profiles/{}/endpoints response 200
- **Related analysis:** [issue-oad-only-741dacd5a3dc1582](#issue-oad-only-741dacd5a3dc1582)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-46"></a>
### B-oad-46 — `RemovedDefinition`

- **Swagger finding:** `B-oad-46` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'TypeName' removed or renamed?
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 8751](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L8751) — JSONPath `definitions`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 8354](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L8354) — JSONPath `definitions`
- **Classification:** `intentional-swagger-only`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document openapi.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Related analysis:** [issue-oad-only-eef30ffaa6796284](#issue-oad-only-eef30ffaa6796284)
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

<a id="finding-b-oad-47"></a>
### B-oad-47 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-47` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 12038](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) — JSONPath `definitions.UrlRedirectAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.UrlRedirectAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.UrlRedirectAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-254a716f7f01bb55](#issue-oad-only-254a716f7f01bb55)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-48"></a>
### B-oad-48 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-48` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 12038](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) — JSONPath `definitions.UrlRewriteAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.UrlRewriteAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.UrlRewriteAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-01c74a2ccf8a87a2](#issue-oad-only-01c74a2ccf8a87a2)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-b-oad-49"></a>
### B-oad-49 — `RemovedEnumValue`

- **Swagger finding:** `B-oad-49` — `RemovedEnumValue` — The new version is removing enum value(s) 'AfdUrlSigning' from the old version.
- **Comparison:** Phase B — Breaking Change (Cross-Version); severity `Warning`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase B workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39555246517) (digest `8ff9ae8983722ffac815b29590bc9f63d15859ac70ee27dd4c05512e2dcb03c6`)
- **Swagger source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json, line 12038](https://github.com/Azure/azure-rest-api-specs/blob/2371f14ab26ab99500de46ac5c507476a8e0fc61/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/preview/2026-09-01-preview/openapi.json#L12038) — JSONPath `definitions.UrlSigningAction.properties.name`; [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json, line 11231](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/stable/2026-10-01/openapi.json#L11231) — JSONPath `definitions.UrlSigningAction.properties.name`
- **Classification:** `missed-equivalent`
- **Resolved targets:** OAD rule RemovedEnumValue; JSON path definitions.UrlSigningAction.properties.name; No terminal reference; Document openapi.json
- **Related analysis:** [issue-oad-only-1aed6581cb04ad51](#issue-oad-only-1aed6581cb04ad51)
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

<a id="finding-typespec-specification-cdn-resource-manager-microsoft-cdn-cdn-tsp-b-0"></a>
### specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-0 — `ResourcePropertyTypeWidened`

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-0` — `ResourcePropertyTypeWidened` — Request union at body.properties.properties.rules.properties.actions.variants.EdgeAction.properties.parameters.properties.invocationPoint added variant 'ClientResponse'.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2026-07-01` → `2026-10-01`
- **Source declaration identity:** `Microsoft.Cdn.InvocationPoint`
- **Wire identity:** `body.properties.properties.rules.properties.actions.variants.EdgeAction.properties.parameters.properties.invocationPoint.variants.ClientResponse`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `a48e0c803824ce2cb9159d4863967ab44186bc50c94bb0556df04ee2d9e8a1a9`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 2201](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L2201)
- **Related analysis:** [issue-typespec-only-3291eea21269c50c](#issue-typespec-only-3291eea21269c50c)

<a id="finding-typespec-specification-cdn-resource-manager-microsoft-cdn-cdn-tsp-b-1"></a>
### specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-1 — `ResponsePropertyTypeNarrowed`

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-1` — `ResponsePropertyTypeNarrowed` — Response union at body.properties.properties.rules.properties.actions removed variant 'AfdUrlSigning'.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2026-07-01` → `2026-10-01`
- **Source declaration identity:** `DeliveryRuleActionUnion`
- **Wire identity:** `body.properties.properties.rules.properties.actions.variants.AfdUrlSigning`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `a48e0c803824ce2cb9159d4863967ab44186bc50c94bb0556df04ee2d9e8a1a9`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/RuleSet.tsp, line 33](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/RuleSet.tsp#L33)
- **Related analysis:** [issue-typespec-only-ac8a02d01e6656af](#issue-typespec-only-ac8a02d01e6656af)

<a id="finding-typespec-specification-cdn-resource-manager-microsoft-cdn-cdn-tsp-b-2"></a>
### specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-2 — `RequestPropertyTypeNarrowed`

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-2` — `RequestPropertyTypeNarrowed` — Request union at body.properties.properties.rules.properties.actions removed variant 'AfdUrlSigning'.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2026-07-01` → `2026-10-01`
- **Source declaration identity:** `DeliveryRuleActionUnionCreateOrUpdate`
- **Wire identity:** `body.properties.properties.rules.properties.actions.variants.AfdUrlSigning`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `a48e0c803824ce2cb9159d4863967ab44186bc50c94bb0556df04ee2d9e8a1a9`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/RuleSet.tsp, line 56](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/RuleSet.tsp#L56)
- **Related analysis:** [issue-typespec-only-7c7166a06a369f6c](#issue-typespec-only-7c7166a06a369f6c)

<a id="finding-typespec-specification-cdn-resource-manager-microsoft-cdn-cdn-tsp-b-3"></a>
### specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-3 — `RequestPropertyTypeNarrowed`

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-3` — `RequestPropertyTypeNarrowed` — Request union at body.properties.properties.actions removed variant 'AfdUrlSigning'.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PATCH /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}/rules/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2026-07-01` → `2026-10-01`
- **Source declaration identity:** `DeliveryRuleActionUnionUpdate`
- **Wire identity:** `body.properties.properties.actions.variants.AfdUrlSigning`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `a48e0c803824ce2cb9159d4863967ab44186bc50c94bb0556df04ee2d9e8a1a9`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp, line 57](https://github.com/Azure/azure-rest-api-specs/blob/bf9529bf2ce66f6b3de75094b38769f0a1a89327/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp#L57)
- **Related analysis:** [issue-typespec-only-a509ad6b2aad3887](#issue-typespec-only-a509ad6b2aad3887)

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
git -C target fetch --no-tags origin 2371f14ab26ab99500de46ac5c507476a8e0fc61 bf9529bf2ce66f6b3de75094b38769f0a1a89327
git -C target checkout --detach bf9529bf2ce66f6b3de75094b38769f0a1a89327
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/46965' --tool-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/cdn/resource-manager/Microsoft.Cdn/Cdn

```powershell
Push-Location target
node $prepared.executable 'specification/cdn/resource-manager/Microsoft.Cdn/Cdn' --base-ref 2371f14ab26ab99500de46ac5c507476a8e0fc61 --phase same-version --json-output '../specification-cdn-resource-manager-Microsoft.Cdn-Cdn-phase-a.json' --markdown-output '../specification-cdn-resource-manager-Microsoft.Cdn-Cdn-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/cdn/resource-manager/Microsoft.Cdn/Cdn' --base-ref 2371f14ab26ab99500de46ac5c507476a8e0fc61 --json-output '../specification-cdn-resource-manager-Microsoft.Cdn-Cdn-phase-b-evidence.json' --markdown-output '../specification-cdn-resource-manager-Microsoft.Cdn-Cdn-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
