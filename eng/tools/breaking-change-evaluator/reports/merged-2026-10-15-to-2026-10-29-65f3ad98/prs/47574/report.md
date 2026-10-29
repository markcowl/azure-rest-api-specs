# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47574:75661a17f96526df519462c33b04cf22cdabbe4e`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47574 — Fix Code Transparency CBOR error response classification](https://github.com/Azure/azure-rest-api-specs/pull/47574)
- **Author:** JoshLove-msft
- **State:** closed (merged) at 2026-10-23T18:26:46Z
- **Base:** `main` at `1adae4d935a546aae8c6cce1207f76f301f56227`
- **Head:** `joshlove-msft-code-transparency-error-models` at `75661a17f96526df519462c33b04cf22cdabbe4e`
- **Changed TypeSpec files:** `specification/confidentialledger/data-plane/CodeTransparency/main.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | 0 |
| Informational OAD records | [2](#finding-review-informational) |
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
| A | [Swagger Breaking Change run 40001438150](https://github.com/Azure/azure-rest-api-specs/actions/runs/40001438150) | `same-version` | concordant-zero | 0 | [2](#finding-review-informational) | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 40001437818](https://github.com/Azure/azure-rest-api-specs/actions/runs/40001437818) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

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
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/1adae4d935a546aae8c6cce1207f76f301f56227/specification/confidentialledger/data-plane/CodeTransparency/preview/2025-01-31-preview/cts.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/75661a17f96526df519462c33b04cf22cdabbe4e/specification/confidentialledger/data-plane/CodeTransparency/preview/2025-01-31-preview/cts.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-0) |
| A | `NoVersionChange` | NoVersionChange | [base](https://github.com/Azure/azure-rest-api-specs/blob/1adae4d935a546aae8c6cce1207f76f301f56227/specification/confidentialledger/data-plane/CodeTransparency/stable/2026-03-26/cts.json#L1) · [head](https://github.com/Azure/azure-rest-api-specs/blob/75661a17f96526df519462c33b04cf22cdabbe4e/specification/confidentialledger/data-plane/CodeTransparency/stable/2026-03-26/cts.json#L1) | OAD reports unchanged document versions as comparison context; this is not an API difference | No change suggested; exclude this record from comparable coverage. | [details](#finding-a-oad-1) |

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 537 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40001438150) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/94fb4e2525852ed5-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 566 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40001437818) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/94fb4e2525852ed5-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/confidentialledger/data-plane/CodeTransparency` | Phase A (`same-version`) | `2025-01-31-preview` → `2025-01-31-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/94fb4e2525852ed5-phase-a.md) |
| `specification/confidentialledger/data-plane/CodeTransparency` | Phase A (`same-version`) | `2026-03-26` → `2026-03-26` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/94fb4e2525852ed5-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-concordant-zero-4d38c69b51cbeaa5"></a>`issue-concordant-zero-4d38c69b51cbeaa5` | 0 | A | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase A. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-A` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |
| <a id="issue-concordant-zero-7b886984f517295e"></a>`issue-concordant-zero-7b886984f517295e` | 0 | B | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase B. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-B` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |

## Finding details

<a id="finding-a-oad-0"></a>
### A-oad-0 — `NoVersionChange`

- **Swagger finding:** `A-oad-0` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40001438150) (digest `aad8c2fdcd58ed1c185571d774ff57c902a0a0b799a31561244db7cd4a5540b4`)
- **Swagger source:** [base: specification/confidentialledger/data-plane/CodeTransparency/preview/2025-01-31-preview/cts.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/1adae4d935a546aae8c6cce1207f76f301f56227/specification/confidentialledger/data-plane/CodeTransparency/preview/2025-01-31-preview/cts.json#L1); [head: specification/confidentialledger/data-plane/CodeTransparency/preview/2025-01-31-preview/cts.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/75661a17f96526df519462c33b04cf22cdabbe4e/specification/confidentialledger/data-plane/CodeTransparency/preview/2025-01-31-preview/cts.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document cts.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

<a id="finding-a-oad-1"></a>
### A-oad-1 — `NoVersionChange`

- **Swagger finding:** `A-oad-1` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40001438150) (digest `aad8c2fdcd58ed1c185571d774ff57c902a0a0b799a31561244db7cd4a5540b4`)
- **Swagger source:** [base: specification/confidentialledger/data-plane/CodeTransparency/stable/2026-03-26/cts.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/1adae4d935a546aae8c6cce1207f76f301f56227/specification/confidentialledger/data-plane/CodeTransparency/stable/2026-03-26/cts.json#L1); [head: specification/confidentialledger/data-plane/CodeTransparency/stable/2026-03-26/cts.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/75661a17f96526df519462c33b04cf22cdabbe4e/specification/confidentialledger/data-plane/CodeTransparency/stable/2026-03-26/cts.json#L1)
- **Classification:** `informational-oad`
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document cts.json
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
$prepared = node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js prepare --typespec-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a | ConvertFrom-Json
if ($prepared.artifactDigest -ne '95835342e0e018bc513e3f639a2b36ec641918b5db3084bdb380fce3bd8f6cc5') { throw 'Prepared analyzer digest does not match the report' }
```

### Check out the evaluated target

```powershell
git clone --filter=blob:none --no-checkout 'https://github.com/Azure/azure-rest-api-specs.git' target
git -C target fetch --no-tags origin 1adae4d935a546aae8c6cce1207f76f301f56227 75661a17f96526df519462c33b04cf22cdabbe4e
git -C target checkout --detach 75661a17f96526df519462c33b04cf22cdabbe4e
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47574' --tool-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/confidentialledger/data-plane/CodeTransparency

```powershell
Push-Location target
node $prepared.executable 'specification/confidentialledger/data-plane/CodeTransparency' --base-ref 1adae4d935a546aae8c6cce1207f76f301f56227 --phase same-version --json-output '../specification-confidentialledger-data-plane-CodeTransparency-phase-a.json' --markdown-output '../specification-confidentialledger-data-plane-CodeTransparency-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/confidentialledger/data-plane/CodeTransparency' --base-ref 1adae4d935a546aae8c6cce1207f76f301f56227 --json-output '../specification-confidentialledger-data-plane-CodeTransparency-phase-b-evidence.json' --markdown-output '../specification-confidentialledger-data-plane-CodeTransparency-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
