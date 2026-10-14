# Breaking-change evaluator

**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46583 — [OperationalInsights] Rename data authorization property for C#](https://github.com/Azure/azure-rest-api-specs/pull/46583)
- **Author:** ArthurMa1978
- **State:** closed (merged) at 2026-10-09T04:53:56Z
- **Base:** `main` at `eea7c005f673b4c72a97f4edda1a18217cfbca58`
- **Head:** `operationalinsights-data-authorization-mode` at `8974e4a28af728a7858f2877e4ccc2cdf66f68bf`
- **Changed TypeSpec files:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/client.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | 0 |
| Informational OAD records | 0 |
| TypeSpec findings | 29 |
| Exact | 0 |
| Probable (review required) | 0 |
| Intentional Swagger-only | 0 |
| Missed equivalent | 0 |
| TypeSpec-only | 29 |
| Ambiguous | 0 |

**Exact OAD coverage:** N/A
**Review-inclusive OAD coverage:** N/A

### By phase

| Phase | Independent OAD execution | TypeSpec mode | Outcome | Comparable OAD | Informational OAD | TypeSpec findings | Exact | Probable | Intentional gap | Missed equivalent | TypeSpec-only | Exact OAD coverage | Review-inclusive OAD coverage |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | [Swagger Breaking Change run 35696099557](https://github.com/Azure/azure-rest-api-specs/actions/runs/35696099557) | `same-version` | typespec-only-divergence | 0 | 0 | 24 | 0 | 0 | 0 | 0 | 24 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 35696099545](https://github.com/Azure/azure-rest-api-specs/actions/runs/35696099545) | `cross-version` | typespec-only-divergence | 0 | 0 | 5 | 0 | 0 | 0 | 0 | 5 | N/A | N/A |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | 0 | 24 | 0 | 0 | 0 | 0 | 0 | 24 |
| B | Breaking Change (Cross-Version) | 0 | 4 | 0 | 0 | 0 | 0 | 0 | 4 |

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 7164 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/35696099557) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 7295 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/35696099545) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/75b0ebe30c6090b3-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights` | Phase A (`same-version`) | `2025-07-01` → `2025-07-01` | 1 | 170 | [generated Markdown](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) |
| `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights` | Phase A (`same-version`) | `2026-03-01` → `2026-03-01` | 1 | 190 | [generated Markdown](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) |
| `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights` | Phase B (`cross-version`) | `2025-07-01` → `2026-03-01` | 1 | 9 | [generated combined Markdown](report-artifacts/typespec/75b0ebe30c6090b3-phase-b.md) |

## Error finding equivalence details

### Findings missing from the Swagger detector

#### RequestPropertyTypeNarrowed

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-20` — `RequestPropertyTypeNarrowed` — Request union at body.properties.properties.sku.properties.capacityReservationLevel removed variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [base: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp, line 2817](https://github.com/Azure/azure-rest-api-specs/blob/eea7c005f673b4c72a97f4edda1a18217cfbca58/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp#L2817)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-22` — `RequestPropertyTypeNarrowed` — Request union at body.properties.properties.retentionInDays removed variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [base: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp, line 2740](https://github.com/Azure/azure-rest-api-specs/blob/eea7c005f673b4c72a97f4edda1a18217cfbca58/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp#L2740)

#### RequestPropertyTypeWidened

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-21` — `RequestPropertyTypeWidened` — Request union at body.properties.properties.sku.properties.capacityReservationLevel added variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [head: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp, line 174](https://github.com/Azure/azure-rest-api-specs/blob/8974e4a28af728a7858f2877e4ccc2cdf66f68bf/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp#L174)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-23` — `RequestPropertyTypeWidened` — Request union at body.properties.properties.retentionInDays added variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [head: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp, line 174](https://github.com/Azure/azure-rest-api-specs/blob/8974e4a28af728a7858f2877e4ccc2cdf66f68bf/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp#L174)

#### ResourcePropertyAdded

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-B-14` — `ResourcePropertyAdded` — Request property 'dataAuthorizationMode' was added at body.properties.properties.features.properties.dataAuthorizationMode.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2026-03-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/75b0ebe30c6090b3-phase-b.md) (digest `2d4f9b63e0f82a5165762f1fb12bb8d02af6a6a6d2161fa6a7023b0d62b44c7c`)
- **TypeSpec source:** [head: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp, line 2918](https://github.com/Azure/azure-rest-api-specs/blob/8974e4a28af728a7858f2877e4ccc2cdf66f68bf/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp#L2918)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-B-16` — `ResourcePropertyAdded` — Request property 'protectionLevel' was added at body.properties.properties.protectionLevel.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}/tables/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2026-03-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/75b0ebe30c6090b3-phase-b.md) (digest `2d4f9b63e0f82a5165762f1fb12bb8d02af6a6a6d2161fa6a7023b0d62b44c7c`)
- **TypeSpec source:** [head: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp, line 2297](https://github.com/Azure/azure-rest-api-specs/blob/8974e4a28af728a7858f2877e4ccc2cdf66f68bf/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp#L2297)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-B-17` — `ResourcePropertyAdded` — Request property 'identity' was added at body.properties.identity.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}/summaryLogs/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2026-03-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/75b0ebe30c6090b3-phase-b.md) (digest `2d4f9b63e0f82a5165762f1fb12bb8d02af6a6a6d2161fa6a7023b0d62b44c7c`)
- **TypeSpec source:** [head: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/SummaryLogs.tsp, line 32](https://github.com/Azure/azure-rest-api-specs/blob/8974e4a28af728a7858f2877e4ccc2cdf66f68bf/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/SummaryLogs.tsp#L32)

#### ResourcePropertyTypeNarrowed

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-0` — `ResourcePropertyTypeNarrowed` — Request union at body.properties.sku.properties.capacity removed variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/clusters/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [base: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp, line 1145](https://github.com/Azure/azure-rest-api-specs/blob/eea7c005f673b4c72a97f4edda1a18217cfbca58/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp#L1145)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-10` — `ResourcePropertyTypeNarrowed` — Request union at body.properties.properties.features.properties.disableLocalAuth removed variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [base: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp, line 2898](https://github.com/Azure/azure-rest-api-specs/blob/eea7c005f673b4c72a97f4edda1a18217cfbca58/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp#L2898)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-12` — `ResourcePropertyTypeNarrowed` — Request union at body.properties.properties.features.properties.dataAuthorizationMode removed variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2026-03-01` → `2026-03-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [base: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp, line 2918](https://github.com/Azure/azure-rest-api-specs/blob/eea7c005f673b4c72a97f4edda1a18217cfbca58/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp#L2918)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-2` — `ResourcePropertyTypeNarrowed` — Request union at body.properties.properties.features.properties.enableDataExport removed variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [base: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp, line 2874](https://github.com/Azure/azure-rest-api-specs/blob/eea7c005f673b4c72a97f4edda1a18217cfbca58/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp#L2874)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-4` — `ResourcePropertyTypeNarrowed` — Request union at body.properties.properties.features.properties.immediatePurgeDataOn30Days removed variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [base: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp, line 2880](https://github.com/Azure/azure-rest-api-specs/blob/eea7c005f673b4c72a97f4edda1a18217cfbca58/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp#L2880)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-6` — `ResourcePropertyTypeNarrowed` — Request union at body.properties.properties.features.properties.enableLogAccessUsingOnlyResourcePermissions removed variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [base: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp, line 2886](https://github.com/Azure/azure-rest-api-specs/blob/eea7c005f673b4c72a97f4edda1a18217cfbca58/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp#L2886)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-8` — `ResourcePropertyTypeNarrowed` — Request union at body.properties.properties.features.properties.clusterResourceId removed variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [base: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp, line 2892](https://github.com/Azure/azure-rest-api-specs/blob/eea7c005f673b4c72a97f4edda1a18217cfbca58/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp#L2892)

#### ResourcePropertyTypeWidened

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-1` — `ResourcePropertyTypeWidened` — Request union at body.properties.sku.properties.capacity added variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/clusters/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [head: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Cluster.tsp, line 43](https://github.com/Azure/azure-rest-api-specs/blob/8974e4a28af728a7858f2877e4ccc2cdf66f68bf/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Cluster.tsp#L43)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-11` — `ResourcePropertyTypeWidened` — Request union at body.properties.properties.features.properties.disableLocalAuth added variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [head: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp, line 174](https://github.com/Azure/azure-rest-api-specs/blob/8974e4a28af728a7858f2877e4ccc2cdf66f68bf/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp#L174)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-13` — `ResourcePropertyTypeWidened` — Request union at body.properties.properties.features.properties.dataAuthorizationMode added variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2026-03-01` → `2026-03-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [head: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp, line 174](https://github.com/Azure/azure-rest-api-specs/blob/8974e4a28af728a7858f2877e4ccc2cdf66f68bf/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp#L174)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-3` — `ResourcePropertyTypeWidened` — Request union at body.properties.properties.features.properties.enableDataExport added variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [head: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp, line 174](https://github.com/Azure/azure-rest-api-specs/blob/8974e4a28af728a7858f2877e4ccc2cdf66f68bf/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp#L174)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-5` — `ResourcePropertyTypeWidened` — Request union at body.properties.properties.features.properties.immediatePurgeDataOn30Days added variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [head: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp, line 174](https://github.com/Azure/azure-rest-api-specs/blob/8974e4a28af728a7858f2877e4ccc2cdf66f68bf/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp#L174)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-7` — `ResourcePropertyTypeWidened` — Request union at body.properties.properties.features.properties.enableLogAccessUsingOnlyResourcePermissions added variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [head: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp, line 174](https://github.com/Azure/azure-rest-api-specs/blob/8974e4a28af728a7858f2877e4ccc2cdf66f68bf/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp#L174)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-9` — `ResourcePropertyTypeWidened` — Request union at body.properties.properties.features.properties.clusterResourceId added variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [head: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp, line 174](https://github.com/Azure/azure-rest-api-specs/blob/8974e4a28af728a7858f2877e4ccc2cdf66f68bf/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp#L174)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-B-15` — `ResourcePropertyTypeWidened` — Request union at body.properties.properties.schema.properties.columns.properties.dataTypeHint added variant 'vector16'.
- **Comparison:** Phase B (`cross-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PUT /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}/tables/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2026-03-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/75b0ebe30c6090b3-phase-b.md) (digest `2d4f9b63e0f82a5165762f1fb12bb8d02af6a6a6d2161fa6a7023b0d62b44c7c`)
- **TypeSpec source:** [head: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp, line 574](https://github.com/Azure/azure-rest-api-specs/blob/8974e4a28af728a7858f2877e4ccc2cdf66f68bf/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp#L574)

#### ResponsePropertyTypeNarrowed

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-14` — `ResponsePropertyTypeNarrowed` — Response union at body.properties.properties.sku.properties.capacityReservationLevel removed variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [base: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp, line 2817](https://github.com/Azure/azure-rest-api-specs/blob/eea7c005f673b4c72a97f4edda1a18217cfbca58/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp#L2817)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-16` — `ResponsePropertyTypeNarrowed` — Response union at body.properties.properties.retentionInDays removed variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [base: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp, line 2740](https://github.com/Azure/azure-rest-api-specs/blob/eea7c005f673b4c72a97f4edda1a18217cfbca58/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp#L2740)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-18` — `ResponsePropertyTypeNarrowed` — Response union at body.properties.properties.features.properties.unifiedSentinelBillingOnly removed variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [base: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp, line 2905](https://github.com/Azure/azure-rest-api-specs/blob/eea7c005f673b4c72a97f4edda1a18217cfbca58/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/models.tsp#L2905)

#### ResponsePropertyTypeWidened

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-15` — `ResponsePropertyTypeWidened` — Response union at body.properties.properties.sku.properties.capacityReservationLevel added variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [head: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp, line 166](https://github.com/Azure/azure-rest-api-specs/blob/8974e4a28af728a7858f2877e4ccc2cdf66f68bf/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp#L166)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-17` — `ResponsePropertyTypeWidened` — Response union at body.properties.properties.retentionInDays added variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [head: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp, line 166](https://github.com/Azure/azure-rest-api-specs/blob/8974e4a28af728a7858f2877e4ccc2cdf66f68bf/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp#L166)

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-A-19` — `ResponsePropertyTypeWidened` — Response union at body.properties.properties.features.properties.unifiedSentinelBillingOnly added variant intrinsic.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** GET /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2025-07-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) (digest `eb83835b8774911c799a16de034c8d79a1458f9c88cce0ecb8ea444690bf0060`)
- **TypeSpec source:** [head: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp, line 166](https://github.com/Azure/azure-rest-api-specs/blob/8974e4a28af728a7858f2877e4ccc2cdf66f68bf/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp#L166)

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

### Findings missing from the Swagger detector

#### OperationAdded

- **TypeSpec finding:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights:tsp-B-28` — `OperationAdded` — Operation POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}/purgeLakeData was added.
- **Comparison:** Phase B (`cross-version`); severity `ignore`; suppressed **no**; actionable error **no**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.OperationalInsights/workspaces/{}/purgeLakeData; project `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights`; versions `2025-07-01` → `2026-03-01`
- **Detector evidence:** [TypeSpec combined analyzer report containing Phase B](report-artifacts/typespec/75b0ebe30c6090b3-phase-b.md) (digest `2d4f9b63e0f82a5165762f1fb12bb8d02af6a6a6d2161fa6a7023b0d62b44c7c`)
- **TypeSpec source:** [head: specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp, line 404](https://github.com/Azure/azure-rest-api-specs/blob/8974e4a28af728a7858f2877e4ccc2cdf66f68bf/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/Workspace.tsp#L404)

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
git -C target fetch --no-tags origin eea7c005f673b4c72a97f4edda1a18217cfbca58 8974e4a28af728a7858f2877e4ccc2cdf66f68bf
git -C target checkout --detach 8974e4a28af728a7858f2877e4ccc2cdf66f68bf
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/46583' --tool-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights

```powershell
Push-Location target
node $prepared.executable 'specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights' --base-ref eea7c005f673b4c72a97f4edda1a18217cfbca58 --phase same-version --json-output '../specification-operationalinsights-resource-manager-Microsoft.OperationalInsights-OperationalInsights-phase-a.json' --markdown-output '../specification-operationalinsights-resource-manager-Microsoft.OperationalInsights-OperationalInsights-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights' --base-ref eea7c005f673b4c72a97f4edda1a18217cfbca58 --json-output '../specification-operationalinsights-resource-manager-Microsoft.OperationalInsights-OperationalInsights-phase-b-evidence.json' --markdown-output '../specification-operationalinsights-resource-manager-Microsoft.OperationalInsights-OperationalInsights-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
