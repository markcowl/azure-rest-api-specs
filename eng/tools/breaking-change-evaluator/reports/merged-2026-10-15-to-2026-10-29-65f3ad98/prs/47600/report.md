# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47600:f0a6639285e2439500919a5ca54bb5441928ea6d`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47600 — Fix CDN MTLS field name for Go sdk model](https://github.com/Azure/azure-rest-api-specs/pull/47600)
- **Author:** Place1
- **State:** closed (merged) at 2026-10-27T23:14:36Z
- **Base:** `main` at `54b3852a392c5cc504c4edf97f5c18fbcd5820cb`
- **Head:** `fix/cdn-go-mtls-initialism` at `f0a6639285e2439500919a5ca54bb5441928ea6d`
- **Changed TypeSpec files:** `specification/cdn/resource-manager/Microsoft.Cdn/Cdn/client.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | 0 |
| Informational OAD records | 0 |
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
| A | [Swagger Breaking Change run 40273290569](https://github.com/Azure/azure-rest-api-specs/actions/runs/40273290569) | `same-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 40273290544](https://github.com/Azure/azure-rest-api-specs/actions/runs/40273290544) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

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

None.

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 17142 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40273290569) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 15803 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40273290544) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2025-06-01` → `2025-06-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2025-09-01-preview` → `2025-09-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2025-12-01` → `2025-12-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2026-07-01` → `2026-07-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2026-10-01` → `2026-10-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-concordant-zero-9c64a3c5a64fb656"></a>`issue-concordant-zero-9c64a3c5a64fb656` | 0 | A | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase A. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-A` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |
| <a id="issue-concordant-zero-9fb95b5b2bd99972"></a>`issue-concordant-zero-9fb95b5b2bd99972` | 0 | B | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase B. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-B` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |

## Finding details

No findings or evidence failures were reported.

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
git -C target fetch --no-tags origin 54b3852a392c5cc504c4edf97f5c18fbcd5820cb f0a6639285e2439500919a5ca54bb5441928ea6d
git -C target checkout --detach f0a6639285e2439500919a5ca54bb5441928ea6d
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47600' --tool-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/cdn/resource-manager/Microsoft.Cdn/Cdn

```powershell
Push-Location target
node $prepared.executable 'specification/cdn/resource-manager/Microsoft.Cdn/Cdn' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --phase same-version --json-output '../specification-cdn-resource-manager-Microsoft.Cdn-Cdn-phase-a.json' --markdown-output '../specification-cdn-resource-manager-Microsoft.Cdn-Cdn-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/cdn/resource-manager/Microsoft.Cdn/Cdn' --base-ref 54b3852a392c5cc504c4edf97f5c18fbcd5820cb --json-output '../specification-cdn-resource-manager-Microsoft.Cdn-Cdn-phase-b-evidence.json' --markdown-output '../specification-cdn-resource-manager-Microsoft.Cdn-Cdn-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
