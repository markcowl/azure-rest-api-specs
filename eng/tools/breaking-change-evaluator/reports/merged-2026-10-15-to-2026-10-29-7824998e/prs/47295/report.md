# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-7824998e`
**Report ID:** `merged-2026-10-15-to-2026-10-29-7824998e:pr-47295:e043ede3a96716ea373090b007ae292f4629d9e6`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47295 — Correct MongoCluster network bypass documentation](https://github.com/Azure/azure-rest-api-specs/pull/47295)
- **Author:** sandeepsnairms
- **State:** closed (merged) at 2026-10-15T03:55:52Z
- **Base:** `main` at `505d2b30d8ab3ac1d8d8bb262bae8945fe6631c0`
- **Head:** `fix/mongocluster-network-bypass-description` at `e043ede3a96716ea373090b007ae292f4629d9e6`
- **Changed TypeSpec files:** `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/MongoCluster.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | 0 |
| Informational OAD records | [3](#finding-review-informational) |
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
| A | [Swagger Breaking Change run 38588566941](https://github.com/Azure/azure-rest-api-specs/actions/runs/38588566941) | `same-version` | concordant-zero | 0 | [3](#finding-review-informational) | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 38588567465](https://github.com/Azure/azure-rest-api-specs/actions/runs/38588567465) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

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
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/505d2b30d8ab3ac1d8d8bb262bae8945fe6631c0/specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/preview/2026-02-01-preview/mongoCluster.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/e043ede3a96716ea373090b007ae292f4629d9e6/specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/preview/2026-02-01-preview/mongoCluster.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-0) |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/505d2b30d8ab3ac1d8d8bb262bae8945fe6631c0/specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/preview/2026-06-15-preview/mongoCluster.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/e043ede3a96716ea373090b007ae292f4629d9e6/specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/preview/2026-06-15-preview/mongoCluster.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-1) |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/505d2b30d8ab3ac1d8d8bb262bae8945fe6631c0/specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/stable/2026-06-01/mongoCluster.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/e043ede3a96716ea373090b007ae292f4629d9e6/specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/stable/2026-06-01/mongoCluster.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-2) |

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 7553 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38588566941) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 10836 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38588567465) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/af97c3bfeee72cfb-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2024-03-01-preview` → `2024-03-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2024-06-01-preview` → `2024-06-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2024-07-01` → `2024-07-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2024-10-01-preview` → `2024-10-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2025-04-01-preview` → `2025-04-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2025-07-01-preview` → `2025-07-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2025-08-01-preview` → `2025-08-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2025-09-01` → `2025-09-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2026-02-01-preview` → `2026-02-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2026-06-01` → `2026-06-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2026-06-15-preview` → `2026-06-15-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-concordant-zero-0c1b5373fe06150d"></a>`issue-concordant-zero-0c1b5373fe06150d` | 0 | B | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase B. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-B` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |
| <a id="issue-concordant-zero-d39858d682981e48"></a>`issue-concordant-zero-d39858d682981e48` | 0 | A | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase A. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-A` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |

## Finding details

<a id="finding-a-oad-0"></a>
### A-oad-0 — `NoVersionChange`

- **Swagger finding:** `A-oad-0` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38588566941) (digest `08ad256286230bfbef8cb7154ec064bdb6f79a30b0fc733dcf0226fb3f4f1892`)
- **Swagger source:** [base: specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/preview/2026-02-01-preview/mongoCluster.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/505d2b30d8ab3ac1d8d8bb262bae8945fe6631c0/specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/preview/2026-02-01-preview/mongoCluster.json#L1); [head: specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/preview/2026-02-01-preview/mongoCluster.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/e043ede3a96716ea373090b007ae292f4629d9e6/specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/preview/2026-02-01-preview/mongoCluster.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document mongoCluster.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-1"></a>
### A-oad-1 — `NoVersionChange`

- **Swagger finding:** `A-oad-1` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38588566941) (digest `08ad256286230bfbef8cb7154ec064bdb6f79a30b0fc733dcf0226fb3f4f1892`)
- **Swagger source:** [base: specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/preview/2026-06-15-preview/mongoCluster.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/505d2b30d8ab3ac1d8d8bb262bae8945fe6631c0/specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/preview/2026-06-15-preview/mongoCluster.json#L1); [head: specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/preview/2026-06-15-preview/mongoCluster.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/e043ede3a96716ea373090b007ae292f4629d9e6/specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/preview/2026-06-15-preview/mongoCluster.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document mongoCluster.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-2"></a>
### A-oad-2 — `NoVersionChange`

- **Swagger finding:** `A-oad-2` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38588566941) (digest `08ad256286230bfbef8cb7154ec064bdb6f79a30b0fc733dcf0226fb3f4f1892`)
- **Swagger source:** [base: specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/stable/2026-06-01/mongoCluster.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/505d2b30d8ab3ac1d8d8bb262bae8945fe6631c0/specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/stable/2026-06-01/mongoCluster.json#L1); [head: specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/stable/2026-06-01/mongoCluster.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/e043ede3a96716ea373090b007ae292f4629d9e6/specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/stable/2026-06-01/mongoCluster.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document mongoCluster.json
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
git -C target fetch --no-tags origin 505d2b30d8ab3ac1d8d8bb262bae8945fe6631c0 e043ede3a96716ea373090b007ae292f4629d9e6
git -C target checkout --detach e043ede3a96716ea373090b007ae292f4629d9e6
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47295' --tool-revision 7824998e1b7e926ce3b09b39fc376742b726a028 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster

```powershell
Push-Location target
node $prepared.executable 'specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster' --base-ref 505d2b30d8ab3ac1d8d8bb262bae8945fe6631c0 --phase same-version --json-output '../specification-mongocluster-resource-manager-Microsoft.DocumentDB-MongoCluster-phase-a.json' --markdown-output '../specification-mongocluster-resource-manager-Microsoft.DocumentDB-MongoCluster-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster' --base-ref 505d2b30d8ab3ac1d8d8bb262bae8945fe6631c0 --json-output '../specification-mongocluster-resource-manager-Microsoft.DocumentDB-MongoCluster-phase-b-evidence.json' --markdown-output '../specification-mongocluster-resource-manager-Microsoft.DocumentDB-MongoCluster-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
