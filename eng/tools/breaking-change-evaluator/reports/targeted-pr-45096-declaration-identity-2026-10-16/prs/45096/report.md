# Breaking-change evaluator

**Run ID:** `targeted-pr-45096-declaration-identity-2026-10-16`
**Dataset ID:** `targeted-pr-45096-declaration-identity-2026-10-16`
**Report ID:** `targeted-pr-45096-declaration-identity-2026-10-16:pr-45096:a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#45096 — Add connection pooling properties to AzurePostgreSql linked service](https://github.com/Azure/azure-rest-api-specs/pull/45096)
- **Author:** Mohithkk
- **State:** open
- **Base:** `main` at `636e1c0e0ae772f0cfaab4f3d457d27798ee9cda`
- **Head:** `users/mkanuru/azurepostgresql-pooling-properties` at `a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e`
- **Changed TypeSpec files:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | [5](#finding-review) |
| Informational OAD records | [1](#finding-review-informational) |
| TypeSpec findings | [5](#finding-review) |
| Exact | [5](#finding-review-correlations) |
| Probable (review required) | 0 |
| Intentional Swagger-only | 0 |
| Missed equivalent | 0 |
| TypeSpec-only | 0 |
| Ambiguous | 0 |

**Exact OAD coverage:** 5 / 5 (100.0%)
**Review-inclusive OAD coverage:** 5 / 5 (100.0%)

### By phase

| Phase | Independent OAD execution | TypeSpec mode | Outcome | Comparable OAD | Informational OAD | TypeSpec findings | Exact | Probable | Intentional gap | Missed equivalent | TypeSpec-only | Exact OAD coverage | Review-inclusive OAD coverage |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | [Swagger Breaking Change run 36602137820](https://github.com/Azure/azure-rest-api-specs/actions/runs/36602137820) | `same-version` | compared | [5](#finding-review) | [1](#finding-review-informational) | [5](#finding-review) | [5](#finding-review-correlations) | 0 | 0 | 0 | 0 | 5 / 5 (100.0%) | 5 / 5 (100.0%) |
| B | [Breaking Change (Cross-Version) run 36602138142](https://github.com/Azure/azure-rest-api-specs/actions/runs/36602138142) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | [5](#finding-review) | [5](#finding-review) | [5](#finding-review-correlations) | [5](#finding-review-correlations) | 0 | 0 | 0 | 0 |
| B | Breaking Change (Cross-Version) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

<a id="finding-review"></a>
## Finding review

Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.

<a id="finding-review-correlations"></a>
### Correlations

| Phase | OAD finding | TypeSpec finding(s) | Type / path | Sources | Analysis | Suggested fix / review | Details |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A | `AddedOptionalProperty` | [`ResourcePropertyAdded`](#finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-0) ([head](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp#L15903)) | AzurePostgreSqlLinkedServiceTypeProperties — pooling | [base](https://github.com/Azure/azure-rest-api-specs/blob/636e1c0e0ae772f0cfaab4f3d457d27798ee9cda/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) · [head](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) | Canonical identity agrees. Error status agrees (error). | No detector or evaluator change suggested. | [details](#finding-a-oad-1) |
| A | `AddedOptionalProperty` | [`ResourcePropertyAdded`](#finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-1) ([head](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp#L15908)) | AzurePostgreSqlLinkedServiceTypeProperties — maxPoolSize | [base](https://github.com/Azure/azure-rest-api-specs/blob/636e1c0e0ae772f0cfaab4f3d457d27798ee9cda/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) · [head](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) | Canonical identity agrees. Error status agrees (error). | No detector or evaluator change suggested. | [details](#finding-a-oad-2) |
| A | `AddedOptionalProperty` | [`ResourcePropertyAdded`](#finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-2) ([head](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp#L15913)) | AzurePostgreSqlLinkedServiceTypeProperties — minPoolSize | [base](https://github.com/Azure/azure-rest-api-specs/blob/636e1c0e0ae772f0cfaab4f3d457d27798ee9cda/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) · [head](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) | Canonical identity agrees. Error status agrees (error). | No detector or evaluator change suggested. | [details](#finding-a-oad-3) |
| A | `AddedOptionalProperty` | [`ResourcePropertyAdded`](#finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-3) ([head](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp#L15918)) | AzurePostgreSqlLinkedServiceTypeProperties — connectionIdleLifetime | [base](https://github.com/Azure/azure-rest-api-specs/blob/636e1c0e0ae772f0cfaab4f3d457d27798ee9cda/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) · [head](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) | Canonical identity agrees. Error status agrees (error). | No detector or evaluator change suggested. | [details](#finding-a-oad-4) |
| A | `AddedOptionalProperty` | [`ResourcePropertyAdded`](#finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-4) ([head](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp#L15923)) | AzurePostgreSqlLinkedServiceTypeProperties — connectionPruningInterval | [base](https://github.com/Azure/azure-rest-api-specs/blob/636e1c0e0ae772f0cfaab4f3d457d27798ee9cda/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) · [head](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) | Canonical identity agrees. Error status agrees (error). | No detector or evaluator change suggested. | [details](#finding-a-oad-5) |

<a id="finding-review-partial"></a>
### Partial correlations

None.

<a id="finding-review-oad-only"></a>
### OAD-only findings

None.

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

| Phase | Finding | Type / path | Source | Analysis | Suggested action | Details |
| --- | --- | --- | --- | --- | --- | --- |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/636e1c0e0ae772f0cfaab4f3d457d27798ee9cda/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-0) |

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 3057 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36602137820) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/98079a721448fdcf-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 2812 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36602138142) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/98079a721448fdcf-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory` | Phase A (`same-version`) | `2018-06-01` → `2018-06-01` | 1 | 5 | 10 | [generated Markdown](report-artifacts/typespec/98079a721448fdcf-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-concordant-zero-5a872e80284dd8e5"></a>`issue-concordant-zero-5a872e80284dd8e5` | 0 | B | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase B. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-B` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |

## Finding details

<a id="finding-a-oad-0"></a>
### A-oad-0 — `NoVersionChange`

- **Swagger finding:** `A-oad-0` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36602137820) (digest `92eb956cdac73dc2288aba0a3f604a9c8154f091f61ba77e29dda6944754fc28`)
- **Swagger source:** [base: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/636e1c0e0ae772f0cfaab4f3d457d27798ee9cda/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L1); [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document openapi.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-1"></a>
### A-oad-1 — `AddedOptionalProperty`

- **Swagger finding:** `A-oad-1` — `AddedOptionalProperty` — The new version has a new optional property 'pooling' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36602137820) (digest `92eb956cdac73dc2288aba0a3f604a9c8154f091f61ba77e29dda6944754fc28`)
- **Swagger source:** [base: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](https://github.com/Azure/azure-rest-api-specs/blob/636e1c0e0ae772f0cfaab4f3d457d27798ee9cda/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`; [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** OAD rule AddedOptionalProperty; JSON path definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties; No terminal reference; Document openapi.json
- **Selected TypeSpec findings:** [`specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-0`](#finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-0)
- **Candidates considered:**
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-0` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-4` — score 7; schema, declaration, version pair, schema/declaration
- **Decision:** Exact semantic match in Phase A. Selected `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-0` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. Error status agrees: both detectors report actionable errors.

<a id="finding-a-oad-2"></a>
### A-oad-2 — `AddedOptionalProperty`

- **Swagger finding:** `A-oad-2` — `AddedOptionalProperty` — The new version has a new optional property 'maxPoolSize' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36602137820) (digest `92eb956cdac73dc2288aba0a3f604a9c8154f091f61ba77e29dda6944754fc28`)
- **Swagger source:** [base: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](https://github.com/Azure/azure-rest-api-specs/blob/636e1c0e0ae772f0cfaab4f3d457d27798ee9cda/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`; [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** OAD rule AddedOptionalProperty; JSON path definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties; No terminal reference; Document openapi.json
- **Selected TypeSpec findings:** [`specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-1`](#finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-1)
- **Candidates considered:**
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-1` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-4` — score 7; schema, declaration, version pair, schema/declaration
- **Decision:** Exact semantic match in Phase A. Selected `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-1` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. Error status agrees: both detectors report actionable errors.

<a id="finding-a-oad-3"></a>
### A-oad-3 — `AddedOptionalProperty`

- **Swagger finding:** `A-oad-3` — `AddedOptionalProperty` — The new version has a new optional property 'minPoolSize' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36602137820) (digest `92eb956cdac73dc2288aba0a3f604a9c8154f091f61ba77e29dda6944754fc28`)
- **Swagger source:** [base: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](https://github.com/Azure/azure-rest-api-specs/blob/636e1c0e0ae772f0cfaab4f3d457d27798ee9cda/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`; [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** OAD rule AddedOptionalProperty; JSON path definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties; No terminal reference; Document openapi.json
- **Selected TypeSpec findings:** [`specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-2`](#finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-2)
- **Candidates considered:**
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-2` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-4` — score 7; schema, declaration, version pair, schema/declaration
- **Decision:** Exact semantic match in Phase A. Selected `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-2` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. Error status agrees: both detectors report actionable errors.

<a id="finding-a-oad-4"></a>
### A-oad-4 — `AddedOptionalProperty`

- **Swagger finding:** `A-oad-4` — `AddedOptionalProperty` — The new version has a new optional property 'connectionIdleLifetime' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36602137820) (digest `92eb956cdac73dc2288aba0a3f604a9c8154f091f61ba77e29dda6944754fc28`)
- **Swagger source:** [base: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](https://github.com/Azure/azure-rest-api-specs/blob/636e1c0e0ae772f0cfaab4f3d457d27798ee9cda/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`; [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** OAD rule AddedOptionalProperty; JSON path definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties; No terminal reference; Document openapi.json
- **Selected TypeSpec findings:** [`specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-3`](#finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-3)
- **Candidates considered:**
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-3` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-4` — score 7; schema, declaration, version pair, schema/declaration
- **Decision:** Exact semantic match in Phase A. Selected `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-3` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. Error status agrees: both detectors report actionable errors.

<a id="finding-a-oad-5"></a>
### A-oad-5 — `AddedOptionalProperty`

- **Swagger finding:** `A-oad-5` — `AddedOptionalProperty` — The new version has a new optional property 'connectionPruningInterval' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36602137820) (digest `92eb956cdac73dc2288aba0a3f604a9c8154f091f61ba77e29dda6944754fc28`)
- **Swagger source:** [base: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](https://github.com/Azure/azure-rest-api-specs/blob/636e1c0e0ae772f0cfaab4f3d457d27798ee9cda/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`; [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json#L10032) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`
- **Classification:** `exact`
- **Resolved targets:** OAD rule AddedOptionalProperty; JSON path definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties; No terminal reference; Document openapi.json
- **Selected TypeSpec findings:** [`specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-4`](#finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-4)
- **Candidates considered:**
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-0` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-1` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-2` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-3` — score 7; schema, declaration, version pair, schema/declaration
  - `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-4` — score 13; schema, declaration, property, version pair, schema/declaration, full property path, leaf property
- **Decision:** Exact semantic match in Phase A. Selected `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-4` because schema, declaration, property, version pair, schema/declaration, full property path, leaf property. Error status agrees: both detectors report actionable errors.

<a id="finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-0"></a>
### specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-0 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-0` — `ResourcePropertyAdded` — Request property 'pooling' was added at body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.pooling.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.DataFactory/factories/{}/addDataFlowToDebugSession; project `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory`; versions `2018-06-01` → `2018-06-01`
- **Source declaration identity:** `Microsoft.DataFactory.AzurePostgreSqlLinkedServiceTypeProperties.pooling`
- **Wire identity:** `body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.pooling`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/98079a721448fdcf-phase-a.md) (digest `9e0b55f98e4e0c52d92bf7fcdd16076d3ae99649f728f9563136b71c7b199c46`)
- **TypeSpec source:** [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp, line 15903](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp#L15903)

<a id="finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-1"></a>
### specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-1 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-1` — `ResourcePropertyAdded` — Request property 'maxPoolSize' was added at body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.maxPoolSize.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.DataFactory/factories/{}/addDataFlowToDebugSession; project `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory`; versions `2018-06-01` → `2018-06-01`
- **Source declaration identity:** `Microsoft.DataFactory.AzurePostgreSqlLinkedServiceTypeProperties.maxPoolSize`
- **Wire identity:** `body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.maxPoolSize`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/98079a721448fdcf-phase-a.md) (digest `9e0b55f98e4e0c52d92bf7fcdd16076d3ae99649f728f9563136b71c7b199c46`)
- **TypeSpec source:** [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp, line 15908](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp#L15908)

<a id="finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-2"></a>
### specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-2 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-2` — `ResourcePropertyAdded` — Request property 'minPoolSize' was added at body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.minPoolSize.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.DataFactory/factories/{}/addDataFlowToDebugSession; project `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory`; versions `2018-06-01` → `2018-06-01`
- **Source declaration identity:** `Microsoft.DataFactory.AzurePostgreSqlLinkedServiceTypeProperties.minPoolSize`
- **Wire identity:** `body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.minPoolSize`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/98079a721448fdcf-phase-a.md) (digest `9e0b55f98e4e0c52d92bf7fcdd16076d3ae99649f728f9563136b71c7b199c46`)
- **TypeSpec source:** [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp, line 15913](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp#L15913)

<a id="finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-3"></a>
### specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-3 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-3` — `ResourcePropertyAdded` — Request property 'connectionIdleLifetime' was added at body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.connectionIdleLifetime.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.DataFactory/factories/{}/addDataFlowToDebugSession; project `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory`; versions `2018-06-01` → `2018-06-01`
- **Source declaration identity:** `Microsoft.DataFactory.AzurePostgreSqlLinkedServiceTypeProperties.connectionIdleLifetime`
- **Wire identity:** `body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.connectionIdleLifetime`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/98079a721448fdcf-phase-a.md) (digest `9e0b55f98e4e0c52d92bf7fcdd16076d3ae99649f728f9563136b71c7b199c46`)
- **TypeSpec source:** [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp, line 15918](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp#L15918)

<a id="finding-typespec-specification-datafactory-resource-manager-microsoft-datafactory-datafactory-tsp-a-4"></a>
### specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-4 — `ResourcePropertyAdded`

- **TypeSpec finding:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-4` — `ResourcePropertyAdded` — Request property 'connectionPruningInterval' was added at body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.connectionPruningInterval.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.DataFactory/factories/{}/addDataFlowToDebugSession; project `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory`; versions `2018-06-01` → `2018-06-01`
- **Source declaration identity:** `Microsoft.DataFactory.AzurePostgreSqlLinkedServiceTypeProperties.connectionPruningInterval`
- **Wire identity:** `body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.connectionPruningInterval`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/98079a721448fdcf-phase-a.md) (digest `9e0b55f98e4e0c52d92bf7fcdd16076d3ae99649f728f9563136b71c7b199c46`)
- **TypeSpec source:** [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp, line 15923](https://github.com/Azure/azure-rest-api-specs/blob/a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e/specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp#L15923)

## Reproduce

**Shell:** powershell

### Check out the evaluator

```powershell
git clone 'https://github.com/markcowl/azure-rest-api-specs.git' evaluator
git -C evaluator checkout '6bd647729a4d23c48fc2d38e083697252355beea'
corepack pnpm --dir evaluator install --frozen-lockfile
```

### Prepare the immutable analyzer

```powershell
$prepared = node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js prepare --typespec-revision 70d7ec65b10b42df47836e74e6a0190900b9d2d9 | ConvertFrom-Json
if ($prepared.artifactDigest -ne '53cf3a0f79886e7a7629ffabdb4a86465d174b3298dcffac16f0a06cdd8e48e9') { throw 'Prepared analyzer digest does not match the report' }
```

### Check out the evaluated target

```powershell
git clone --filter=blob:none --no-checkout 'https://github.com/Azure/azure-rest-api-specs.git' target
git -C target fetch --no-tags origin 636e1c0e0ae772f0cfaab4f3d457d27798ee9cda a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e
git -C target checkout --detach a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/45096' --tool-revision 70d7ec65b10b42df47836e74e6a0190900b9d2d9 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory

```powershell
Push-Location target
node $prepared.executable 'specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory' --base-ref 636e1c0e0ae772f0cfaab4f3d457d27798ee9cda --phase same-version --json-output '../specification-datafactory-resource-manager-Microsoft.DataFactory-DataFactory-phase-a.json' --markdown-output '../specification-datafactory-resource-manager-Microsoft.DataFactory-DataFactory-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory' --base-ref 636e1c0e0ae772f0cfaab4f3d457d27798ee9cda --json-output '../specification-datafactory-resource-manager-Microsoft.DataFactory-DataFactory-phase-b-evidence.json' --markdown-output '../specification-datafactory-resource-manager-Microsoft.DataFactory-DataFactory-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
