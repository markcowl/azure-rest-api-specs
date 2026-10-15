# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47295:e043ede3a96716ea373090b007ae292f4629d9e6`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47295 — Correct MongoCluster network bypass documentation](http<local-path>)
- **Author:** sandeepsnairms
- **State:** open (merged) at 2026-10-15T03:55:52Z
- **Base:** `main` at `505d2b30d8ab3ac1d8d8bb262bae8945fe6631c0`
- **Head:** `fix/mongocluster-network-bypass-description` at `e043ede3a96716ea373090b007ae292f4629d9e6`
- **Changed TypeSpec files:** `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/MongoCluster.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | 0 |
| Informational OAD records | 3 |
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
| A | [Swagger Breaking Change run 38588566941](http<local-path>) | `same-version` | concordant-zero | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 38588567465](http<local-path>) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B | Breaking Change (Cross-Version) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 9754 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](http<local-path>) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 5377 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](http<local-path>) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/af97c3bfeee72cfb-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2024-03-01-preview` → `2024-03-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2024-06-01-preview` → `2024-06-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2024-07-01` → `2024-07-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2024-10-01-preview` → `2024-10-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2025-04-01-preview` → `2025-04-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2025-07-01-preview` → `2025-07-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2025-08-01-preview` → `2025-08-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2025-09-01` → `2025-09-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2026-02-01-preview` → `2026-02-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2026-06-01` → `2026-06-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2026-06-15-preview` → `2026-06-15-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-concordant-zero-1a854500c8bd22e3` | A | `concordant-zero` | confirmed-agreement | high | generated | 0 |
| `issue-concordant-zero-2b465b4e9447aad3` | B | `concordant-zero` | confirmed-agreement | high | generated | 0 |

### issue-concordant-zero-1a854500c8bd22e3

- **Affected PRs:** #47295
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

### issue-concordant-zero-2b465b4e9447aad3

- **Affected PRs:** #47295
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

## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

### Informational OAD records

#### NoVersionChange

- **Swagger finding:** `A-oad-0` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](http<local-path>) (digest `08ad256286230bfbef8cb7154ec064bdb6f79a30b0fc733dcf0226fb3f4f1892`)
- **Swagger source:** [base: specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/preview/2026-02-01-preview/mongoCluster.json, line 1](http<local-path>); [head: specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/preview/2026-02-01-preview/mongoCluster.json, line 1](http<local-path>)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document mongoCluster.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-1` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](http<local-path>) (digest `08ad256286230bfbef8cb7154ec064bdb6f79a30b0fc733dcf0226fb3f4f1892`)
- **Swagger source:** [base: specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/preview/2026-06-15-preview/mongoCluster.json, line 1](http<local-path>); [head: specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/preview/2026-06-15-preview/mongoCluster.json, line 1](http<local-path>)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document mongoCluster.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-2` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](http<local-path>) (digest `08ad256286230bfbef8cb7154ec064bdb6f79a30b0fc733dcf0226fb3f4f1892`)
- **Swagger source:** [base: specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/stable/2026-06-01/mongoCluster.json, line 1](http<local-path>); [head: specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/stable/2026-06-01/mongoCluster.json, line 1](http<local-path>)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document mongoCluster.json
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
git -C target fetch --no-tags origin 505d2b30d8ab3ac1d8d8bb262bae8945fe6631c0 e043ede3a96716ea373090b007ae292f4629d9e6
git -C target checkout --detach e043ede3a96716ea373090b007ae292f4629d9e6
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'http<local-path>' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster

```powershell
Push-Location target
node $prepared.executable 'specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster' --base-ref 505d2b30d8ab3ac1d8d8bb262bae8945fe6631c0 --phase same-version --json-output '../specification-mongocluster-resource-manager-Microsoft.DocumentDB-MongoCluster-phase-a.json' --markdown-output '../specification-mongocluster-resource-manager-Microsoft.DocumentDB-MongoCluster-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster' --base-ref 505d2b30d8ab3ac1d8d8bb262bae8945fe6631c0 --json-output '../specification-mongocluster-resource-manager-Microsoft.DocumentDB-MongoCluster-phase-b-evidence.json' --markdown-output '../specification-mongocluster-resource-manager-Microsoft.DocumentDB-MongoCluster-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
