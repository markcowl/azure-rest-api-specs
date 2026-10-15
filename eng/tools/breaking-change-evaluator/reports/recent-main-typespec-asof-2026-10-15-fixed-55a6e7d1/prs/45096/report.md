# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-45096:a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#45096 — Add connection pooling properties to AzurePostgreSql linked service](http<local-path>)
- **Author:** Mohithkk
- **State:** open
- **Base:** `main` at `636e1c0e0ae772f0cfaab4f3d457d27798ee9cda`
- **Head:** `users/mkanuru/azurepostgresql-pooling-properties` at `a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e`
- **Changed TypeSpec files:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | 5 |
| Informational OAD records | 1 |
| TypeSpec findings | 5 |
| Exact | 0 |
| Probable (review required) | 0 |
| Intentional Swagger-only | 0 |
| Missed equivalent | 5 |
| TypeSpec-only | 5 |
| Ambiguous | 0 |

**Exact OAD coverage:** 0 / 5 (0.0%)
**Review-inclusive OAD coverage:** 0 / 5 (0.0%)

### By phase

| Phase | Independent OAD execution | TypeSpec mode | Outcome | Comparable OAD | Informational OAD | TypeSpec findings | Exact | Probable | Intentional gap | Missed equivalent | TypeSpec-only | Exact OAD coverage | Review-inclusive OAD coverage |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | [Swagger Breaking Change run 36602137820](http<local-path>) | `same-version` | compared | 5 | 1 | 5 | 0 | 0 | 0 | 5 | 5 | 0 / 5 (0.0%) | 0 / 5 (0.0%) |
| B | [Breaking Change (Cross-Version) run 36602138142](http<local-path>) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | 5 | 5 | 0 | 0 | 0 | 0 | 5 | 5 |
| B | Breaking Change (Cross-Version) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 3172 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](http<local-path>) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/98079a721448fdcf-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 3037 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](http<local-path>) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/98079a721448fdcf-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory` | Phase A (`same-version`) | `2018-06-01` → `2018-06-01` | 1 | 10 | [generated Markdown](report-artifacts/typespec/98079a721448fdcf-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-concordant-zero-6f0fef73a6143203` | B | `concordant-zero` | confirmed-agreement | high | generated | 0 |
| `issue-oad-only-0018322f1a930e0a` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-0155ebf61bb0c7fd` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-0e7bd0a06a7403b4` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-4e17d7725fe36453` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-f04a7e2424811d9c` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-typespec-only-5e25c318b636fed2` | A | `typespec-only` | requires-review | medium | generated | 1 |
| `issue-typespec-only-847499fac5978e48` | A | `typespec-only` | requires-review | medium | generated | 1 |
| `issue-typespec-only-9a428c70cf1c701a` | A | `typespec-only` | requires-review | medium | generated | 1 |
| `issue-typespec-only-bd853f1cd45d5a71` | A | `typespec-only` | requires-review | medium | generated | 1 |
| `issue-typespec-only-cef9ac73aa871c13` | A | `typespec-only` | requires-review | medium | generated | 1 |

### issue-concordant-zero-6f0fef73a6143203

- **Affected PRs:** #45096
- **Phases:** B
- **Finding IDs:** none
- **Category:** `concordant-zero`
- **Conclusion:** confirmed-agreement
- **Confidence:** high
- **Rationale:** Both detectors reported zero findings for Phase B.
- **Aggregate impact:** Adds one confirmed zero-result agreement to longitudinal metrics.
- **Suggested fix:** No detector change suggested.
- **Status:** generated
- **Evidence:**
  - `execution:phase-B` — Independent OAD evidence and TypeSpec execution both completed with zero findings.

### issue-oad-only-0018322f1a930e0a

- **Affected PRs:** #45096
- **Phases:** A
- **Finding IDs:** `A-oad-3`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-3` — AddedOptionalProperty: The new version has a new optional property 'minPoolSize' that was not found in the old version.

### issue-oad-only-0155ebf61bb0c7fd

- **Affected PRs:** #45096
- **Phases:** A
- **Finding IDs:** `A-oad-1`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-1` — AddedOptionalProperty: The new version has a new optional property 'pooling' that was not found in the old version.

### issue-oad-only-0e7bd0a06a7403b4

- **Affected PRs:** #45096
- **Phases:** A
- **Finding IDs:** `A-oad-2`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-2` — AddedOptionalProperty: The new version has a new optional property 'maxPoolSize' that was not found in the old version.

### issue-oad-only-4e17d7725fe36453

- **Affected PRs:** #45096
- **Phases:** A
- **Finding IDs:** `A-oad-5`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-5` — AddedOptionalProperty: The new version has a new optional property 'connectionPruningInterval' that was not found in the old version.

### issue-oad-only-f04a7e2424811d9c

- **Affected PRs:** #45096
- **Phases:** A
- **Finding IDs:** `A-oad-4`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-4` — AddedOptionalProperty: The new version has a new optional property 'connectionIdleLifetime' that was not found in the old version.

### issue-typespec-only-5e25c318b636fed2

- **Affected PRs:** #45096
- **Phases:** A
- **Finding IDs:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-4`
- **Category:** `typespec-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** The TypeSpec finding has no selected OAD equivalent.
- **Aggregate impact:** Contributes one finding to TypeSpec-only totals.
- **Suggested fix:** Confirm whether this is additional coverage, noise, or a matching gap.
- **Status:** generated
- **Evidence:**
  - `typespec-finding:specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-4` — ResourcePropertyAdded: Request property 'connectionPruningInterval' was added at body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.connectionPruningInterval.

### issue-typespec-only-847499fac5978e48

- **Affected PRs:** #45096
- **Phases:** A
- **Finding IDs:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-0`
- **Category:** `typespec-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** The TypeSpec finding has no selected OAD equivalent.
- **Aggregate impact:** Contributes one finding to TypeSpec-only totals.
- **Suggested fix:** Confirm whether this is additional coverage, noise, or a matching gap.
- **Status:** generated
- **Evidence:**
  - `typespec-finding:specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-0` — ResourcePropertyAdded: Request property 'pooling' was added at body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.pooling.

### issue-typespec-only-9a428c70cf1c701a

- **Affected PRs:** #45096
- **Phases:** A
- **Finding IDs:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-3`
- **Category:** `typespec-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** The TypeSpec finding has no selected OAD equivalent.
- **Aggregate impact:** Contributes one finding to TypeSpec-only totals.
- **Suggested fix:** Confirm whether this is additional coverage, noise, or a matching gap.
- **Status:** generated
- **Evidence:**
  - `typespec-finding:specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-3` — ResourcePropertyAdded: Request property 'connectionIdleLifetime' was added at body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.connectionIdleLifetime.

### issue-typespec-only-bd853f1cd45d5a71

- **Affected PRs:** #45096
- **Phases:** A
- **Finding IDs:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-2`
- **Category:** `typespec-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** The TypeSpec finding has no selected OAD equivalent.
- **Aggregate impact:** Contributes one finding to TypeSpec-only totals.
- **Suggested fix:** Confirm whether this is additional coverage, noise, or a matching gap.
- **Status:** generated
- **Evidence:**
  - `typespec-finding:specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-2` — ResourcePropertyAdded: Request property 'minPoolSize' was added at body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.minPoolSize.

### issue-typespec-only-cef9ac73aa871c13

- **Affected PRs:** #45096
- **Phases:** A
- **Finding IDs:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-1`
- **Category:** `typespec-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** The TypeSpec finding has no selected OAD equivalent.
- **Aggregate impact:** Contributes one finding to TypeSpec-only totals.
- **Suggested fix:** Confirm whether this is additional coverage, noise, or a matching gap.
- **Status:** generated
- **Evidence:**
  - `typespec-finding:specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-1` — ResourcePropertyAdded: Request property 'maxPoolSize' was added at body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.maxPoolSize.

## Error finding equivalence details

### Findings missing from the TypeSpec detector

#### AddedOptionalProperty

- **Swagger finding:** `A-oad-1` — `AddedOptionalProperty` — The new version has a new optional property 'pooling' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](http<local-path>) (digest `92eb956cdac73dc2288aba0a3f604a9c8154f091f61ba77e29dda6944754fc28`)
- **Swagger source:** [base: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](http<local-path>) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`; [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](http<local-path>) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`
- **Resolved targets:** OAD rule AddedOptionalProperty; JSON path definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties; No terminal reference; Document openapi.json
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-2` — `AddedOptionalProperty` — The new version has a new optional property 'maxPoolSize' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](http<local-path>) (digest `92eb956cdac73dc2288aba0a3f604a9c8154f091f61ba77e29dda6944754fc28`)
- **Swagger source:** [base: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](http<local-path>) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`; [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](http<local-path>) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`
- **Resolved targets:** OAD rule AddedOptionalProperty; JSON path definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties; No terminal reference; Document openapi.json
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-3` — `AddedOptionalProperty` — The new version has a new optional property 'minPoolSize' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](http<local-path>) (digest `92eb956cdac73dc2288aba0a3f604a9c8154f091f61ba77e29dda6944754fc28`)
- **Swagger source:** [base: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](http<local-path>) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`; [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](http<local-path>) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`
- **Resolved targets:** OAD rule AddedOptionalProperty; JSON path definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties; No terminal reference; Document openapi.json
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-4` — `AddedOptionalProperty` — The new version has a new optional property 'connectionIdleLifetime' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](http<local-path>) (digest `92eb956cdac73dc2288aba0a3f604a9c8154f091f61ba77e29dda6944754fc28`)
- **Swagger source:** [base: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](http<local-path>) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`; [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](http<local-path>) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`
- **Resolved targets:** OAD rule AddedOptionalProperty; JSON path definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties; No terminal reference; Document openapi.json
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-5` — `AddedOptionalProperty` — The new version has a new optional property 'connectionPruningInterval' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](http<local-path>) (digest `92eb956cdac73dc2288aba0a3f604a9c8154f091f61ba77e29dda6944754fc28`)
- **Swagger source:** [base: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](http<local-path>) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`; [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 10032](http<local-path>) — JSONPath `definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties`
- **Resolved targets:** OAD rule AddedOptionalProperty; JSON path definitions.AzurePostgreSqlLinkedServiceTypeProperties.properties; No terminal reference; Document openapi.json
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

### Findings missing from the Swagger detector

#### ResourcePropertyAdded

- **TypeSpec finding:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-0` — `ResourcePropertyAdded` — Request property 'pooling' was added at body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.pooling.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.DataFactory/factories/{}/addDataFlowToDebugSession; project `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory`; versions `2018-06-01` → `2018-06-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/98079a721448fdcf-phase-a.md) (digest `ca1120d7211aa23ffaf34fbf86dbba5e525d67a1b2ddeab1f9f020e494d4e5df`)
- **TypeSpec source:** [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp, line 15903](http<local-path>)

- **TypeSpec finding:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-1` — `ResourcePropertyAdded` — Request property 'maxPoolSize' was added at body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.maxPoolSize.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.DataFactory/factories/{}/addDataFlowToDebugSession; project `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory`; versions `2018-06-01` → `2018-06-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/98079a721448fdcf-phase-a.md) (digest `ca1120d7211aa23ffaf34fbf86dbba5e525d67a1b2ddeab1f9f020e494d4e5df`)
- **TypeSpec source:** [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp, line 15908](http<local-path>)

- **TypeSpec finding:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-2` — `ResourcePropertyAdded` — Request property 'minPoolSize' was added at body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.minPoolSize.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.DataFactory/factories/{}/addDataFlowToDebugSession; project `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory`; versions `2018-06-01` → `2018-06-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/98079a721448fdcf-phase-a.md) (digest `ca1120d7211aa23ffaf34fbf86dbba5e525d67a1b2ddeab1f9f020e494d4e5df`)
- **TypeSpec source:** [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp, line 15913](http<local-path>)

- **TypeSpec finding:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-3` — `ResourcePropertyAdded` — Request property 'connectionIdleLifetime' was added at body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.connectionIdleLifetime.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.DataFactory/factories/{}/addDataFlowToDebugSession; project `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory`; versions `2018-06-01` → `2018-06-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/98079a721448fdcf-phase-a.md) (digest `ca1120d7211aa23ffaf34fbf86dbba5e525d67a1b2ddeab1f9f020e494d4e5df`)
- **TypeSpec source:** [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp, line 15918](http<local-path>)

- **TypeSpec finding:** `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory:tsp-A-4` — `ResourcePropertyAdded` — Request property 'connectionPruningInterval' was added at body.properties.linkedServices.properties.properties.variants.AzurePostgreSql.properties.typeProperties.properties.connectionPruningInterval.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** POST /subscriptions/{}/resourceGroups/{}/providers/Microsoft.DataFactory/factories/{}/addDataFlowToDebugSession; project `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory`; versions `2018-06-01` → `2018-06-01`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/98079a721448fdcf-phase-a.md) (digest `ca1120d7211aa23ffaf34fbf86dbba5e525d67a1b2ddeab1f9f020e494d4e5df`)
- **TypeSpec source:** [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp, line 15923](http<local-path>)

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

### Informational OAD records

#### NoVersionChange

- **Swagger finding:** `A-oad-0` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](http<local-path>) (digest `92eb956cdac73dc2288aba0a3f604a9c8154f091f61ba77e29dda6944754fc28`)
- **Swagger source:** [base: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 1](http<local-path>); [head: specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/stable/2018-06-01/openapi.json, line 1](http<local-path>)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document openapi.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

## Reproduce

**Shell:** powershell

### Check out the evaluator

```powershell
git clone 'http<local-path>' evaluator
git -C evaluator checkout '42434df7da42a759156b2dac2beef5e3625ccf3b'
corepack pnpm --dir evaluator install --frozen-lockfile
```

### Prepare the immutable analyzer

```powershell
$prepared = node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js prepare --typespec-revision 55a6e7d122e36ab4120958211c41499d3bd79177 | ConvertFrom-Json
if ($prepared.artifactDigest -ne 'cdab5e43f1c9d9aed5d2a3ff9790964c07c202d40a6b320beb539fa1c5980820') { throw 'Prepared analyzer digest does not match the report' }
```

### Check out the evaluated target

```powershell
git clone --filter=blob:none --no-checkout 'http<local-path>' target
git -C target fetch --no-tags origin 636e1c0e0ae772f0cfaab4f3d457d27798ee9cda a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e
git -C target checkout --detach a5e9cd12f4e9b106d8f0e4c384ed17191ac18c2e
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'http<local-path>' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory

```powershell
Push-Location target
node $prepared.executable 'specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory' --base-ref 636e1c0e0ae772f0cfaab4f3d457d27798ee9cda --phase same-version --json-output '../specification-datafactory-resource-manager-Microsoft.DataFactory-DataFactory-phase-a.json' --markdown-output '../specification-datafactory-resource-manager-Microsoft.DataFactory-DataFactory-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory' --base-ref 636e1c0e0ae772f0cfaab4f3d457d27798ee9cda --json-output '../specification-datafactory-resource-manager-Microsoft.DataFactory-DataFactory-phase-b-evidence.json' --markdown-output '../specification-datafactory-resource-manager-Microsoft.DataFactory-DataFactory-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
