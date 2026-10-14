# Breaking-change evaluator

**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46674 — Preserve Front Door provisioning name constraints](https://github.com/Azure/azure-rest-api-specs/pull/46674)
- **Author:** ArcturusZhang
- **State:** closed (merged) at 2026-10-09T05:59:12Z
- **Base:** `main` at `be97609d55160e8d06e2fcbba9ddefbf2ee89bf8`
- **Head:** `arcturuszhang-add-cdn-name-constraints` at `6249fb38aaf0f6f919f9b958c57cf40f8d1419e2`
- **Changed TypeSpec files:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn/client.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | 0 |
| Informational OAD records | 0 |
| TypeSpec findings | 82 |
| Exact | 0 |
| Probable (review required) | 0 |
| Intentional Swagger-only | 0 |
| Missed equivalent | 0 |
| TypeSpec-only | 82 |
| Ambiguous | 0 |

**Exact OAD coverage:** N/A
**Review-inclusive OAD coverage:** N/A

### By phase

| Phase | Independent OAD execution | TypeSpec mode | Outcome | Comparable OAD | Informational OAD | TypeSpec findings | Exact | Probable | Intentional gap | Missed equivalent | TypeSpec-only | Exact OAD coverage | Review-inclusive OAD coverage |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | [Swagger Breaking Change run 37721339691](https://github.com/Azure/azure-rest-api-specs/actions/runs/37721339691) | `same-version` | typespec-only-divergence | 0 | 0 | 4 | 0 | 0 | 0 | 0 | 4 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 37721339640](https://github.com/Azure/azure-rest-api-specs/actions/runs/37721339640) | `cross-version` | typespec-only-divergence | 0 | 0 | 78 | 0 | 0 | 0 | 0 | 78 | N/A | N/A |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 4 |
| B | Breaking Change (Cross-Version) | 0 | 32 | 0 | 0 | 0 | 0 | 0 | 32 |

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 31588 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37721339691) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 36390 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37721339640) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2025-06-01` → `2025-06-01` | 1 | 32 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2025-09-01-preview` → `2025-09-01-preview` | 1 | 32 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2025-12-01` → `2025-12-01` | 1 | 32 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2026-04-01-preview` → `2026-04-01-preview` | 1 | 32 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2026-07-01` → `2026-07-01` | 1 | 32 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2026-08-01-preview` → `2026-08-01-preview` | 1 | 32 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase B (`cross-version`) | `2025-06-01` → `2025-09-01-preview` | 1 | 57 | [generated combined Markdown](report-artifacts/typespec/495bf9259924f532-phase-b.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase B (`cross-version`) | `2025-06-01` → `2025-12-01` | 1 | 5 | [generated combined Markdown](report-artifacts/typespec/495bf9259924f532-phase-b.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase B (`cross-version`) | `2025-12-01` → `2026-04-01-preview` | 1 | 18 | [generated combined Markdown](report-artifacts/typespec/495bf9259924f532-phase-b.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase B (`cross-version`) | `2025-12-01` → `2026-07-01` | 1 | 28 | [generated combined Markdown](report-artifacts/typespec/495bf9259924f532-phase-b.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase B (`cross-version`) | `2026-07-01` → `2026-08-01-preview` | 1 | 6 | [generated combined Markdown](report-artifacts/typespec/495bf9259924f532-phase-b.md) |

## Error finding equivalence details

### Findings missing from the Swagger detector

#### RequestTypeKindChanged

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-67` — `RequestTypeKindChanged` — Request type kind changed at body from Intrinsic to Model.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-12-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/RuleSet.tsp, line 19](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/RuleSet.tsp#L19)

#### ResourcePropertyAdded

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-10` — `ResourcePropertyAdded` — Request property 'grpcState' was added at body.properties.properties.grpcState.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/afdEndpoints/{}/routes/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 3445](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L3445)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-12` — `ResourcePropertyAdded` — Request property 'mtlsSettings' was added at body.properties.properties.mtlsSettings.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/customDomains/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-04-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 2783](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L2783)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-13` — `ResourcePropertyAdded` — Request property 'enforceMtls' was added at body.properties.properties.enforceMtls.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/afdEndpoints/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-04-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 2942](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L2942)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-14` — `ResourcePropertyAdded` — Request property 'tokenDestinationHeader' was added at body.properties.properties.authentication.properties.tokenDestinationHeader.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/originGroups/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-04-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 3173](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L3173)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-15` — `ResourcePropertyAdded` — Request property 'routes' was added at body.properties.properties.parameters.variants.WebApplicationFirewall.properties.associations.properties.routes.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/securityPolicies/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-04-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 6786](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L6786)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-16` — `ResourcePropertyAdded` — Request property 'isProfileLevel' was added at body.properties.properties.parameters.variants.WebApplicationFirewall.properties.isProfileLevel.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/securityPolicies/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-04-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 6809](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L6809)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-17` — `ResourcePropertyAdded` — Request property 'serverTlsGroupPolicy' was added at body.properties.properties.tlsSettings.properties.serverTlsGroupPolicy.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/customDomains/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-07-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 2825](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L2825)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-18` — `ResourcePropertyAdded` — Request property 'serverTlsGroups' was added at body.properties.properties.tlsSettings.properties.serverTlsGroups.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/customDomains/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-07-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 2831](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L2831)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-19` — `ResourcePropertyAdded` — Request property 'mtlsSettings' was added at body.properties.properties.mtlsSettings.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/customDomains/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-07-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 2783](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L2783)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-20` — `ResourcePropertyAdded` — Request property 'enforceMtls' was added at body.properties.properties.enforceMtls.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/afdEndpoints/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-07-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 2942](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L2942)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-21` — `ResourcePropertyAdded` — Request property 'tokenDestinationHeader' was added at body.properties.properties.authentication.properties.tokenDestinationHeader.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/originGroups/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-07-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 3173](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L3173)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-22` — `ResourcePropertyAdded` — Request property 'certificateNameCheckValidationMode' was added at body.properties.properties.certificateNameCheckValidationMode.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/originGroups/{}/origins/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-07-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 3279](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L3279)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-23` — `ResourcePropertyAdded` — Request property 'customCertificateSubjects' was added at body.properties.properties.customCertificateSubjects.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/originGroups/{}/origins/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-07-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 3287](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L3287)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-24` — `ResourcePropertyAdded` — Request property 'routes' was added at body.properties.properties.parameters.variants.WebApplicationFirewall.properties.associations.properties.routes.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/securityPolicies/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-07-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 6786](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L6786)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-25` — `ResourcePropertyAdded` — Request property 'isProfileLevel' was added at body.properties.properties.parameters.variants.WebApplicationFirewall.properties.isProfileLevel.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/securityPolicies/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-07-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 6809](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L6809)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-26` — `ResourcePropertyAdded` — Request property 'capacityDistributionSettings' was added at body.properties.properties.loadBalancingSettings.properties.capacityDistributionSettings.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/originGroups/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2026-07-01` → `2026-08-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 3084](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L3084)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-27` — `ResourcePropertyAdded` — Request property 'grpcState' was added at body.properties.properties.grpcState.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/afdEndpoints/{}/routes/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2026-07-01` → `2026-08-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 3445](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L3445)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-4` — `ResourcePropertyAdded` — Request property 'mtlsSettings' was added at body.properties.properties.mtlsSettings.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/customDomains/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 2783](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L2783)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-8` — `ResourcePropertyAdded` — Request property 'enforceMtls' was added at body.properties.properties.enforceMtls.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/afdEndpoints/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 2942](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L2942)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-9` — `ResourcePropertyAdded` — Request property 'originCapacityResource' was added at body.properties.properties.originCapacityResource.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/originGroups/{}/origins/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 3263](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L3263)

#### ResourcePropertyTypeNarrowed

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-A-0` — `ResourcePropertyTypeNarrowed` — Request union at body.properties.properties.actions.variants.CacheExpiration.properties.parameters.properties.cacheDuration removed variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}/rules/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-06-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/495bf9259924f532-phase-a.md) (digest `6f3c0aae5b014068ca3c72869d69686563eb3348a5285b6037a7b12f5bdc0209`)
- **TypeSpec source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 8323](https://github.com/Azure/azure-rest-api-specs/blob/be97609d55160e8d06e2fcbba9ddefbf2ee89bf8/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L8323)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-A-2` — `ResourcePropertyTypeNarrowed` — Request union at body.properties.properties.actions.variants.CacheKeyQueryString.properties.parameters.properties.queryParameters removed variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}/rules/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-06-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/495bf9259924f532-phase-a.md) (digest `6f3c0aae5b014068ca3c72869d69686563eb3348a5285b6037a7b12f5bdc0209`)
- **TypeSpec source:** [base: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 8356](https://github.com/Azure/azure-rest-api-specs/blob/be97609d55160e8d06e2fcbba9ddefbf2ee89bf8/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L8356)

#### ResourcePropertyTypeWidened

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-A-1` — `ResourcePropertyTypeWidened` — Request union at body.properties.properties.actions.variants.CacheExpiration.properties.parameters.properties.cacheDuration added variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}/rules/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-06-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/495bf9259924f532-phase-a.md) (digest `6f3c0aae5b014068ca3c72869d69686563eb3348a5285b6037a7b12f5bdc0209`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp, line 40](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp#L40)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-A-3` — `ResourcePropertyTypeWidened` — Request union at body.properties.properties.actions.variants.CacheKeyQueryString.properties.parameters.properties.queryParameters added variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}/rules/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-06-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/495bf9259924f532-phase-a.md) (digest `6f3c0aae5b014068ca3c72869d69686563eb3348a5285b6037a7b12f5bdc0209`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp, line 40](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp#L40)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-11` — `ResourcePropertyTypeWidened` — Request union at body.properties.properties.customRules.properties.rules.properties.action added variant 'AnomalyScoring'.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/cdnWebApplicationFirewallPolicies/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 1316](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L1316)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-5` — `ResourcePropertyTypeWidened` — Request union at body.properties.properties.logScrubbing.properties.scrubbingRules.properties.matchVariable added variant 'RequestHeaderNames'.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 191](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L191)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-6` — `ResourcePropertyTypeWidened` — Request union at body.properties.properties.logScrubbing.properties.scrubbingRules.properties.selectorMatchOperator added variant 'Equals'.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 220](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L220)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-7` — `ResourcePropertyTypeWidened` — Request union at body.properties.sku.properties.name added variant 'Classic_AzureFrontDoor'.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 108](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L108)

#### ResponsePropertyTypeWidened

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-57` — `ResponsePropertyTypeWidened` — Response union at body.properties.properties.actions added variant 'AfdUrlSigning'.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}/rules/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp, line 32](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp#L32)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-60` — `ResponsePropertyTypeWidened` — Response union at body.properties.properties.parameters added variant 'WebApplicationFirewallEmbedded'.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/securityPolicies/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/SecurityPolicy.tsp, line 33](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/SecurityPolicy.tsp#L33)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-63` — `ResponsePropertyTypeWidened` — Response union at body.properties.properties.parameters added variant 'MtlsCertificateChain'.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/secrets/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Secret.tsp, line 32](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Secret.tsp#L32)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-70` — `ResponsePropertyTypeWidened` — Response union at body.properties.properties.actions added variant 'AfdUrlSigning'.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}/rules/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-04-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp, line 32](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp#L32)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-73` — `ResponsePropertyTypeWidened` — Response union at body.properties.properties.parameters added variant 'MtlsCertificateChain'.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/secrets/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-04-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Secret.tsp, line 32](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Secret.tsp#L32)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-76` — `ResponsePropertyTypeWidened` — Response union at body.properties.properties.actions added variant 'AfdUrlSigning'.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}/rules/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-07-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp, line 32](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp#L32)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-79` — `ResponsePropertyTypeWidened` — Response union at body.properties.properties.parameters added variant 'MtlsCertificateChain'.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/secrets/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-07-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Secret.tsp, line 32](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Secret.tsp#L32)

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

### Findings missing from the Swagger detector

#### EnumerationMemberAdded

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-56` — `EnumerationMemberAdded` — Enumeration member 'Grpc' was added at body.properties.properties.healthProbeSettings.properties.probeProtocol.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/originGroups/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 2346](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L2346)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-81` — `EnumerationMemberAdded` — Enumeration member 'Grpc' was added at body.properties.properties.healthProbeSettings.properties.probeProtocol.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/originGroups/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2026-07-01` → `2026-08-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 2346](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L2346)

#### OperationAdded

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-28` — `OperationAdded` — Operation GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/keyGroups/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/keyGroups/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KeyGroup.tsp, line 53](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KeyGroup.tsp#L53)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-29` — `OperationAdded` — Operation PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/keyGroups/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/keyGroups/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KeyGroup.tsp, line 60](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KeyGroup.tsp#L60)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-30` — `OperationAdded` — Operation PATCH /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/keyGroups/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PATCH /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/keyGroups/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KeyGroup.tsp, line 74](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KeyGroup.tsp#L74)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-31` — `OperationAdded` — Operation DELETE /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/keyGroups/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** DELETE /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/keyGroups/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KeyGroup.tsp, line 86](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KeyGroup.tsp#L86)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-32` — `OperationAdded` — Operation GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/keyGroups was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/keyGroups; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KeyGroup.tsp, line 96](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KeyGroup.tsp#L96)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-33` — `OperationAdded` — Operation GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/deploymentVersions/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/deploymentVersions/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/DeploymentVersion.tsp, line 39](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/DeploymentVersion.tsp#L39)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-34` — `OperationAdded` — Operation PATCH /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/deploymentVersions/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PATCH /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/deploymentVersions/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/DeploymentVersion.tsp, line 45](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/DeploymentVersion.tsp#L45)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-35` — `OperationAdded` — Operation GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/deploymentVersions was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/deploymentVersions; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/DeploymentVersion.tsp, line 53](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/DeploymentVersion.tsp#L53)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-36` — `OperationAdded` — Operation POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/deploymentVersions/{}/approve was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/deploymentVersions/{}/approve; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/DeploymentVersion.tsp, line 58](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/DeploymentVersion.tsp#L58)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-37` — `OperationAdded` — Operation POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/deploymentVersions/{}/compare was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/deploymentVersions/{}/compare; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/DeploymentVersion.tsp, line 68](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/DeploymentVersion.tsp#L68)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-38` — `OperationAdded` — Operation GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/agents/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/agents/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/ProfileAgent.tsp, line 54](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/ProfileAgent.tsp#L54)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-39` — `OperationAdded` — Operation PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/agents/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/agents/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/ProfileAgent.tsp, line 61](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/ProfileAgent.tsp#L61)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-40` — `OperationAdded` — Operation PATCH /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/agents/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PATCH /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/agents/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/ProfileAgent.tsp, line 75](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/ProfileAgent.tsp#L75)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-41` — `OperationAdded` — Operation DELETE /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/agents/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** DELETE /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/agents/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/ProfileAgent.tsp, line 88](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/ProfileAgent.tsp#L88)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-42` — `OperationAdded` — Operation GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/agents was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/agents; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/ProfileAgent.tsp, line 99](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/ProfileAgent.tsp#L99)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-43` — `OperationAdded` — Operation GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/WebAgent.tsp, line 51](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/WebAgent.tsp#L51)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-44` — `OperationAdded` — Operation PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/WebAgent.tsp, line 58](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/WebAgent.tsp#L58)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-45` — `OperationAdded` — Operation PATCH /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PATCH /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/WebAgent.tsp, line 72](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/WebAgent.tsp#L72)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-46` — `OperationAdded` — Operation DELETE /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** DELETE /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/WebAgent.tsp, line 86](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/WebAgent.tsp#L86)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-47` — `OperationAdded` — Operation GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/WebAgent.tsp, line 97](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/WebAgent.tsp#L97)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-48` — `OperationAdded` — Operation GET /subscriptions/{}/providers/Microsoft.Cdn/webAgents was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /subscriptions/{}/providers/Microsoft.Cdn/webAgents; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/WebAgent.tsp, line 105](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/WebAgent.tsp#L105)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-49` — `OperationAdded` — Operation GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{}/knowledgeSources/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{}/knowledgeSources/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KnowledgeSource.tsp, line 54](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KnowledgeSource.tsp#L54)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-50` — `OperationAdded` — Operation PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{}/knowledgeSources/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{}/knowledgeSources/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KnowledgeSource.tsp, line 61](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KnowledgeSource.tsp#L61)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-51` — `OperationAdded` — Operation PATCH /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{}/knowledgeSources/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PATCH /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{}/knowledgeSources/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KnowledgeSource.tsp, line 75](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KnowledgeSource.tsp#L75)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-52` — `OperationAdded` — Operation DELETE /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{}/knowledgeSources/{} was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** DELETE /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{}/knowledgeSources/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KnowledgeSource.tsp, line 88](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KnowledgeSource.tsp#L88)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-53` — `OperationAdded` — Operation GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{}/knowledgeSources was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{}/knowledgeSources; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KnowledgeSource.tsp, line 99](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KnowledgeSource.tsp#L99)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-54` — `OperationAdded` — Operation POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{}/knowledgeSources/{}/purge was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/webAgents/{}/knowledgeSources/{}/purge; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KnowledgeSource.tsp, line 108](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/KnowledgeSource.tsp#L108)

#### RequestPropertyTypeWidened

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-55` — `RequestPropertyTypeWidened` — Request union at body.properties.secretType added variant 'MtlsCertificateChain'.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/validateSecret; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 65](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L65)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-58` — `RequestPropertyTypeWidened` — Request union at body.properties.properties.actions added variant 'AfdUrlSigning'.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}/rules/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp, line 40](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp#L40)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-59` — `RequestPropertyTypeWidened` — Request union at body.properties.properties.actions added variant 'AfdUrlSigning'.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PATCH /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}/rules/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp, line 57](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp#L57)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-61` — `RequestPropertyTypeWidened` — Request union at body.properties.properties.parameters added variant 'WebApplicationFirewallEmbedded'.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/securityPolicies/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/SecurityPolicy.tsp, line 41](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/SecurityPolicy.tsp#L41)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-62` — `RequestPropertyTypeWidened` — Request union at body.properties.properties.parameters added variant 'WebApplicationFirewallEmbedded'.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PATCH /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/securityPolicies/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/SecurityPolicy.tsp, line 58](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/SecurityPolicy.tsp#L58)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-64` — `RequestPropertyTypeWidened` — Request union at body.properties.properties.parameters added variant 'MtlsCertificateChain'.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/secrets/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-09-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Secret.tsp, line 40](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Secret.tsp#L40)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-69` — `RequestPropertyTypeWidened` — Request union at body.properties.secretType added variant 'MtlsCertificateChain'.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/validateSecret; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-04-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 65](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L65)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-71` — `RequestPropertyTypeWidened` — Request union at body.properties.properties.actions added variant 'AfdUrlSigning'.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}/rules/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-04-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp, line 40](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp#L40)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-72` — `RequestPropertyTypeWidened` — Request union at body.properties.properties.actions added variant 'AfdUrlSigning'.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PATCH /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}/rules/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-04-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp, line 57](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp#L57)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-74` — `RequestPropertyTypeWidened` — Request union at body.properties.properties.parameters added variant 'MtlsCertificateChain'.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/secrets/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-04-01-preview`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Secret.tsp, line 40](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Secret.tsp#L40)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-75` — `RequestPropertyTypeWidened` — Request union at body.properties.secretType added variant 'MtlsCertificateChain'.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/validateSecret; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-07-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 65](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L65)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-77` — `RequestPropertyTypeWidened` — Request union at body.properties.properties.actions added variant 'AfdUrlSigning'.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}/rules/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-07-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp, line 40](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp#L40)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-78` — `RequestPropertyTypeWidened` — Request union at body.properties.properties.actions added variant 'AfdUrlSigning'.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PATCH /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}/rules/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-07-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp, line 57](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Rule.tsp#L57)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-80` — `RequestPropertyTypeWidened` — Request union at body.properties.properties.parameters added variant 'MtlsCertificateChain'.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/secrets/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-12-01` → `2026-07-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Secret.tsp, line 40](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/Secret.tsp#L40)

#### ResponseHeaderAdded

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-68` — `ResponseHeaderAdded` — Response header 'Azure-AsyncOperation' was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-12-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/RuleSet.tsp, line 56](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/RuleSet.tsp#L56)

#### ResponsePropertyAdded

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-65` — `ResponsePropertyAdded` — Response property 'batchMode' was added at body.properties.properties.batchMode.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-12-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 3530](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L3530)

- **TypeSpec finding:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn:tsp-B-66` — `ResponsePropertyAdded` — Response property 'rules' was added at body.properties.properties.rules.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.Cdn/profiles/{}/ruleSets/{}; project `specification/cdn/resource-manager/Microsoft.Cdn/Cdn`; versions `2025-06-01` → `2025-12-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) (digest `08ed48f02774186ec44e1f8a876b3fbd666736384248dfdca0e405fd0810b9f8`)
- **TypeSpec source:** [head: specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp, line 3537](https://github.com/Azure/azure-rest-api-specs/blob/6249fb38aaf0f6f919f9b958c57cf40f8d1419e2/specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp#L3537)

## Reproduce

**Shell:** powershell

### Check out the evaluator

```powershell
git clone 'https://github.com/markcowl/azure-rest-api-specs.git' evaluator
git -C evaluator checkout '0d458e940caf56cd5069ec16389524d2186c786f'
corepack pnpm --dir evaluator install --frozen-lockfile
```

### Prepare the immutable analyzer

```powershell
$prepared = node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js prepare --typespec-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0 | ConvertFrom-Json
if ($prepared.artifactDigest -ne '0ae9893ccdc9016ab4e0916f3f34f57959f0ce0eb4e445cfe91a04597eaa93d2') { throw 'Prepared analyzer digest does not match the report' }
```

### Check out the evaluated target

```powershell
git clone --filter=blob:none --no-checkout 'https://github.com/Azure/azure-rest-api-specs.git' target
git -C target fetch --no-tags origin be97609d55160e8d06e2fcbba9ddefbf2ee89bf8 6249fb38aaf0f6f919f9b958c57cf40f8d1419e2
git -C target checkout --detach 6249fb38aaf0f6f919f9b958c57cf40f8d1419e2
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/46674' --tool-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/cdn/resource-manager/Microsoft.Cdn/Cdn

```powershell
Push-Location target
node $prepared.executable 'specification/cdn/resource-manager/Microsoft.Cdn/Cdn' --base-ref be97609d55160e8d06e2fcbba9ddefbf2ee89bf8 --phase same-version --json-output '../specification-cdn-resource-manager-Microsoft.Cdn-Cdn-phase-a.json' --markdown-output '../specification-cdn-resource-manager-Microsoft.Cdn-Cdn-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/cdn/resource-manager/Microsoft.Cdn/Cdn' --base-ref be97609d55160e8d06e2fcbba9ddefbf2ee89bf8 --json-output '../specification-cdn-resource-manager-Microsoft.Cdn-Cdn-phase-b-evidence.json' --markdown-output '../specification-cdn-resource-manager-Microsoft.Cdn-Cdn-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
