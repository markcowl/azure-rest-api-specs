# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47315:877a1710f3fca524a1e9f90a550f8dfa42b56687`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47315 — [Storage] Fix file share and blob container resource name constraints](https://github.com/Azure/azure-rest-api-specs/pull/47315)
- **Author:** ArcturusZhang
- **State:** open
- **Base:** `main` at `fd7acf72fc1d90922ef0536a06863c414328824f`
- **Head:** `storage/fix-provisioning-resource-name-constraints` at `877a1710f3fca524a1e9f90a550f8dfa42b56687`
- **Changed TypeSpec files:** `specification/storage/resource-manager/Microsoft.Storage/Storage/BlobContainer.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/FileShare.tsp`

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
| A | [Swagger Breaking Change run 38676391357](https://github.com/Azure/azure-rest-api-specs/actions/runs/38676391357) | `same-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 38676391486](https://github.com/Azure/azure-rest-api-specs/actions/runs/38676391486) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

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

None.

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 14428 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38676391357) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 23202 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38676391486) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/34d48bf6162c6014-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2025-06-01` → `2025-06-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2025-08-01` → `2025-08-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2026-04-01` → `2026-04-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2026-06-01` → `2026-06-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2026-09-01` → `2026-09-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-concordant-zero-7b726ed867b3553f` | A | `concordant-zero` | confirmed-agreement | high | generated | 0 |
| `issue-concordant-zero-bf943f5043c21440` | B | `concordant-zero` | confirmed-agreement | high | generated | 0 |

<a id="issue-concordant-zero-7b726ed867b3553f"></a>
### issue-concordant-zero-7b726ed867b3553f

- **Affected PRs:** #47315
- **Phases:** A
- **Finding IDs:** none
- **Category:** `concordant-zero`
- **Conclusion:** confirmed-agreement
- **Confidence:** high
- **Rationale:** Both detectors reported zero findings for Phase A.
- **Aggregate impact:** Adds one confirmed zero-result agreement to longitudinal metrics.
- **Suggested fix:** No detector change suggested.
- **Status:** generated
- **Evidence:**
  - `execution:phase-A` — Independent OAD evidence and TypeSpec execution both completed with zero findings.

<a id="issue-concordant-zero-bf943f5043c21440"></a>
### issue-concordant-zero-bf943f5043c21440

- **Affected PRs:** #47315
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

## Finding details

No findings or evidence failures were reported.

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
git -C target fetch --no-tags origin fd7acf72fc1d90922ef0536a06863c414328824f 877a1710f3fca524a1e9f90a550f8dfa42b56687
git -C target checkout --detach 877a1710f3fca524a1e9f90a550f8dfa42b56687
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47315' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/storage/resource-manager/Microsoft.Storage/Storage

```powershell
Push-Location target
node $prepared.executable 'specification/storage/resource-manager/Microsoft.Storage/Storage' --base-ref fd7acf72fc1d90922ef0536a06863c414328824f --phase same-version --json-output '../specification-storage-resource-manager-Microsoft.Storage-Storage-phase-a.json' --markdown-output '../specification-storage-resource-manager-Microsoft.Storage-Storage-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/storage/resource-manager/Microsoft.Storage/Storage' --base-ref fd7acf72fc1d90922ef0536a06863c414328824f --json-output '../specification-storage-resource-manager-Microsoft.Storage-Storage-phase-b-evidence.json' --markdown-output '../specification-storage-resource-manager-Microsoft.Storage-Storage-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
