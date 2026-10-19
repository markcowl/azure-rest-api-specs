# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47255:4459681a24578d2f211e4a05bbd64cb8c02f491d`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47255 — Add ACS incoming call event properties](https://github.com/Azure/azure-rest-api-specs/pull/47255)
- **Author:** osaghaso
- **State:** open
- **Base:** `main` at `b8e052ca3659235e2051aa629cfb058f7fb53264`
- **Head:** `user/osaghaso/Update_incomingCall_events` at `4459681a24578d2f211e4a05bbd64cb8c02f491d`
- **Changed TypeSpec files:** `specification/eventgrid/data-plane/EventGridSystemEvents/Microsoft.Communication/AzureCommunicationServices.tsp`, `specification/eventgrid/data-plane/EventGridSystemEvents/propertyNameOverrideCsharp.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | 0 |
| Informational OAD records | 2 |
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
| A | [Swagger Breaking Change run 38468969032](https://github.com/Azure/azure-rest-api-specs/actions/runs/38468969032) | `same-version` | concordant-zero | 0 | 2 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 38468969209](https://github.com/Azure/azure-rest-api-specs/actions/runs/38468969209) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B | Breaking Change (Cross-Version) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Finding review

Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.

### Correlations

None.

### Partial correlations

None.

### OAD-only findings

None.

### TypeSpec-only findings

None.

### Ambiguous findings

None.

### Evidence and execution failures

None.

### Intentional Swagger-only gaps

None.

### Informational OAD records

| Phase | Finding | Type / path | Source | Analysis | Details |
| --- | --- | --- | --- | --- | --- |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/b8e052ca3659235e2051aa629cfb058f7fb53264/specification/eventgrid/data-plane/EventGridSystemEvents/stable/2018-01-01/GeneratedSystemEvents.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4459681a24578d2f211e4a05bbd64cb8c02f491d/specification/eventgrid/data-plane/EventGridSystemEvents/stable/2018-01-01/GeneratedSystemEvents.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | [details](#finding-a-oad-0) |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/b8e052ca3659235e2051aa629cfb058f7fb53264/specification/eventgrid/data-plane/EventGridSystemEvents/stable/2024-01-01/GeneratedSystemEvents.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/4459681a24578d2f211e4a05bbd64cb8c02f491d/specification/eventgrid/data-plane/EventGridSystemEvents/stable/2024-01-01/GeneratedSystemEvents.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | [details](#finding-a-oad-1) |

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 904 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38468969032) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/e6189f230e3e5995-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 315 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38468969209) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/e6189f230e3e5995-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/eventgrid/data-plane/EventGridSystemEvents` | Phase A (`same-version`) | `2018-01-01` → `2018-01-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/e6189f230e3e5995-phase-a.md) |
| `specification/eventgrid/data-plane/EventGridSystemEvents` | Phase A (`same-version`) | `2024-01-01` → `2024-01-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/e6189f230e3e5995-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Analysis | Suggested fix | Confidence / status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-concordant-zero-3dc8110a3fabf8cb"></a>`issue-concordant-zero-3dc8110a3fabf8cb` | B | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase B. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-B` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |
| <a id="issue-concordant-zero-4474532999546b7f"></a>`issue-concordant-zero-4474532999546b7f` | A | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase A. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-A` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |

## Finding details

<a id="finding-a-oad-0"></a>
### A-oad-0 — `NoVersionChange`

- **Swagger finding:** `A-oad-0` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38468969032) (digest `1dd504298c634205583459632cbecef49538318a58dbe577c1a28a2d2ca7992b`)
- **Swagger source:** [base: specification/eventgrid/data-plane/EventGridSystemEvents/stable/2018-01-01/GeneratedSystemEvents.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/b8e052ca3659235e2051aa629cfb058f7fb53264/specification/eventgrid/data-plane/EventGridSystemEvents/stable/2018-01-01/GeneratedSystemEvents.json#L1); [head: specification/eventgrid/data-plane/EventGridSystemEvents/stable/2018-01-01/GeneratedSystemEvents.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/4459681a24578d2f211e4a05bbd64cb8c02f491d/specification/eventgrid/data-plane/EventGridSystemEvents/stable/2018-01-01/GeneratedSystemEvents.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document GeneratedSystemEvents.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-1"></a>
### A-oad-1 — `NoVersionChange`

- **Swagger finding:** `A-oad-1` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38468969032) (digest `1dd504298c634205583459632cbecef49538318a58dbe577c1a28a2d2ca7992b`)
- **Swagger source:** [base: specification/eventgrid/data-plane/EventGridSystemEvents/stable/2024-01-01/GeneratedSystemEvents.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/b8e052ca3659235e2051aa629cfb058f7fb53264/specification/eventgrid/data-plane/EventGridSystemEvents/stable/2024-01-01/GeneratedSystemEvents.json#L1); [head: specification/eventgrid/data-plane/EventGridSystemEvents/stable/2024-01-01/GeneratedSystemEvents.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/4459681a24578d2f211e4a05bbd64cb8c02f491d/specification/eventgrid/data-plane/EventGridSystemEvents/stable/2024-01-01/GeneratedSystemEvents.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document GeneratedSystemEvents.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

## Reproduce

**Shell:** powershell

### Check out the evaluator

```powershell
git clone 'https://github.com/markcowl/azure-rest-api-specs.git' evaluator
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
git clone --filter=blob:none --no-checkout 'https://github.com/Azure/azure-rest-api-specs.git' target
git -C target fetch --no-tags origin b8e052ca3659235e2051aa629cfb058f7fb53264 4459681a24578d2f211e4a05bbd64cb8c02f491d
git -C target checkout --detach 4459681a24578d2f211e4a05bbd64cb8c02f491d
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47255' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/eventgrid/data-plane/EventGridSystemEvents

```powershell
Push-Location target
node $prepared.executable 'specification/eventgrid/data-plane/EventGridSystemEvents' --base-ref b8e052ca3659235e2051aa629cfb058f7fb53264 --phase same-version --json-output '../specification-eventgrid-data-plane-EventGridSystemEvents-phase-a.json' --markdown-output '../specification-eventgrid-data-plane-EventGridSystemEvents-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/eventgrid/data-plane/EventGridSystemEvents' --base-ref b8e052ca3659235e2051aa629cfb058f7fb53264 --json-output '../specification-eventgrid-data-plane-EventGridSystemEvents-phase-b-evidence.json' --markdown-output '../specification-eventgrid-data-plane-EventGridSystemEvents-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
