# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Report ID:** `merged-2026-10-15-to-2026-10-29-7824998e:pr-47375:7d52729a288dd3a57426f46766c70f142affdaef`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47375 — Carbon: add continuationToken to skipToken properties](https://github.com/Azure/azure-rest-api-specs/pull/47375)
- **Author:** itiinani-msft
- **State:** closed (merged) at 2026-10-16T21:14:02Z
- **Base:** `main` at `18aa5d5a436c6d5360d64f8df86db6f2adcfbe75`
- **Head:** `carbon-spec-update` at `7d52729a288dd3a57426f46766c70f142affdaef`
- **Changed TypeSpec files:** `specification/carbon/resource-manager/Microsoft.Carbon/Carbon/main.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | 0 |
| Informational OAD records | [1](#finding-review-informational) |
| TypeSpec findings | 0 |
| Exact | 0 |
| Probable (review required) | 0 |
| Intentional Swagger-only | 0 |
| Missed equivalent | 0 |
| TypeSpec-only | 0 |
| Ambiguous | 0 |

**Exact OAD coverage:** N/A
**Review-inclusive OAD coverage:** N/A

### By phase

| Phase | Independent OAD execution | TypeSpec mode | Outcome | Comparable OAD | Informational OAD | TypeSpec findings | Exact | Probable | Intentional gap | Missed equivalent | TypeSpec-only | Exact OAD coverage | Review-inclusive OAD coverage |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | [Swagger Breaking Change run 38963726973](https://github.com/Azure/azure-rest-api-specs/actions/runs/38963726973) | `same-version` | concordant-zero | 0 | [1](#finding-review-informational) | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 38963726931](https://github.com/Azure/azure-rest-api-specs/actions/runs/38963726931) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B | Breaking Change (Cross-Version) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

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
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/18aa5d5a436c6d5360d64f8df86db6f2adcfbe75/specification/carbon/resource-manager/Microsoft.Carbon/Carbon/preview/2026-05-01-preview/main.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/7d52729a288dd3a57426f46766c70f142affdaef/specification/carbon/resource-manager/Microsoft.Carbon/Carbon/preview/2026-05-01-preview/main.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-0) |

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 1245 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38963726973) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/dc177c3b14173cff-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 1148 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38963726931) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/dc177c3b14173cff-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/carbon/resource-manager/Microsoft.Carbon/Carbon` | Phase A (`same-version`) | `2025-04-01` → `2025-04-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/dc177c3b14173cff-phase-a.md) |
| `specification/carbon/resource-manager/Microsoft.Carbon/Carbon` | Phase A (`same-version`) | `2026-05-01-preview` → `2026-05-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/dc177c3b14173cff-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-concordant-zero-4c6be545f0d59cbb"></a>`issue-concordant-zero-4c6be545f0d59cbb` | 0 | A | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase A. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-A` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |
| <a id="issue-concordant-zero-aa154b6307b557cf"></a>`issue-concordant-zero-aa154b6307b557cf` | 0 | B | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase B. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-B` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |

## Finding details

<a id="finding-a-oad-0"></a>
### A-oad-0 — `NoVersionChange`

- **Swagger finding:** `A-oad-0` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38963726973) (digest `02704f0af596c180ea29e18224cebf0d8df073c485c4d2cbc59eda1a44ddf7c4`)
- **Swagger source:** [base: specification/carbon/resource-manager/Microsoft.Carbon/Carbon/preview/2026-05-01-preview/main.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/18aa5d5a436c6d5360d64f8df86db6f2adcfbe75/specification/carbon/resource-manager/Microsoft.Carbon/Carbon/preview/2026-05-01-preview/main.json#L1); [head: specification/carbon/resource-manager/Microsoft.Carbon/Carbon/preview/2026-05-01-preview/main.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/7d52729a288dd3a57426f46766c70f142affdaef/specification/carbon/resource-manager/Microsoft.Carbon/Carbon/preview/2026-05-01-preview/main.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document main.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

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
git -C target fetch --no-tags origin 18aa5d5a436c6d5360d64f8df86db6f2adcfbe75 7d52729a288dd3a57426f46766c70f142affdaef
git -C target checkout --detach 7d52729a288dd3a57426f46766c70f142affdaef
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47375' --tool-revision 7824998e1b7e926ce3b09b39fc376742b726a028 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/carbon/resource-manager/Microsoft.Carbon/Carbon

```powershell
Push-Location target
node $prepared.executable 'specification/carbon/resource-manager/Microsoft.Carbon/Carbon' --base-ref 18aa5d5a436c6d5360d64f8df86db6f2adcfbe75 --phase same-version --json-output '../specification-carbon-resource-manager-Microsoft.Carbon-Carbon-phase-a.json' --markdown-output '../specification-carbon-resource-manager-Microsoft.Carbon-Carbon-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/carbon/resource-manager/Microsoft.Carbon/Carbon' --base-ref 18aa5d5a436c6d5360d64f8df86db6f2adcfbe75 --json-output '../specification-carbon-resource-manager-Microsoft.Carbon-Carbon-phase-b-evidence.json' --markdown-output '../specification-carbon-resource-manager-Microsoft.Carbon-Carbon-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
