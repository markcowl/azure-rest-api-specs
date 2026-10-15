# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-47005:5adc647c5d61132bb68909a2d02ccf507aeb9feb`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47005 — Revert(planetarycomputer): restore previous folder structure](http<local-path>)
- **Author:** thisisdevanshu
- **State:** closed (merged) at 2026-10-06T00:27:06Z
- **Base:** `main` at `0799fda68aab1e2c6f5f0d06f028f451b14bf0a8`
- **Head:** `revert-46586-planetarycomputer-folder-migration` at `5adc647c5d61132bb68909a2d02ccf507aeb9feb`
- **Changed TypeSpec files:** `specification/orbital/Microsoft.PlanetaryComputer/client.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/inma.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/main.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/models.common.colormaps.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/models.common.geojson.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/models.common.images.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/models.common.versions.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/models.stac.config.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/models.stac.spec.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/models.tiler.common.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/models.tiler.image-exports.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/models.tiler.items.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/models.tiler.map-legends.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/models.tiler.mosaics.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/models.tiler.tile-matrix-sets.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/overrides.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/routes.common.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/routes.stac.config.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/routes.stac.spec.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/routes.tiler.image-exports.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/routes.tiler.items.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/routes.tiler.map-legends.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/routes.tiler.mosaic.collections.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/routes.tiler.mosaic.items.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/routes.tiler.mosaic.searches.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/routes.tiler.mosaics.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/routes.tiler.tile-matrix-sets.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/routes.tiler.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/sas.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/tspconfig.yaml`, `specification/orbitalplanetarycomputer/Orbital.Management/client.tsp`, `specification/orbitalplanetarycomputer/Orbital.Management/main.tsp`, `specification/orbitalplanetarycomputer/Orbital.Management/tspconfig.yaml`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | 0 |
| Informational OAD records | 5 |
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
| A | [Swagger Breaking Change run 37078379040](http<local-path>) | `same-version` | concordant-zero | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 37078378960](http<local-path>) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

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
| A | Unavailable | 12 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](http<local-path>) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/0e1497e46c99294c-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/dfc4b09bffcba0ba-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 11 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](http<local-path>) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/0e1497e46c99294c-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/dfc4b09bffcba0ba-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/orbital/Microsoft.PlanetaryComputer` | Phase A (`same-version`) | Phase A (same-version) requires a base program for comparison. Use analyzeBaseAndHead() instead. | 0 | 0 | [generated Markdown](report-artifacts/typespec/0e1497e46c99294c-phase-a.md) |
| `specification/orbital/Microsoft.PlanetaryComputer` | Phase B (`cross-version`) | No cross-version comparisons needed: no comparisons to stable versions needed. | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/0e1497e46c99294c-phase-b.md) |
| `specification/orbitalplanetarycomputer/Orbital.Management` | Phase A (`same-version`) | Phase A (same-version) requires a base program for comparison. Use analyzeBaseAndHead() instead. | 0 | 0 | [generated Markdown](report-artifacts/typespec/dfc4b09bffcba0ba-phase-a.md) |
| `specification/orbitalplanetarycomputer/Orbital.Management` | Phase B (`cross-version`) | No cross-version comparisons needed: no comparisons to stable versions needed. | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/dfc4b09bffcba0ba-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-concordant-zero-69b2fbd02e8975b8` | A | `concordant-zero` | confirmed-agreement | high | generated | 0 |
| `issue-concordant-zero-ae941e6a9a4b5d87` | B | `concordant-zero` | confirmed-agreement | high | generated | 0 |

### issue-concordant-zero-69b2fbd02e8975b8

- **Affected PRs:** #47005
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

### issue-concordant-zero-ae941e6a9a4b5d87

- **Affected PRs:** #47005
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
- **Detector evidence:** [Swagger breaking-change phase A workflow](http<local-path>) (digest `11536a1c587ca927bc67d873484cf93ba52519b7ee6c542ffe14fe0deada0859`)
- **Swagger source:** [base: specification/planetarycomputer/data-plane/PlanetaryComputer/preview/2025-04-30-preview/openapi.json, line 1](http<local-path>); [head: specification/orbital/data-plane/Microsoft.PlanetaryComputer/preview/2025-04-30-preview/openapi.json, line 1](http<local-path>)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document openapi.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-1` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](http<local-path>) (digest `11536a1c587ca927bc67d873484cf93ba52519b7ee6c542ffe14fe0deada0859`)
- **Swagger source:** [base: specification/planetarycomputer/data-plane/PlanetaryComputer/stable/2026-04-15/openapi.json, line 1](http<local-path>); [head: specification/orbital/data-plane/Microsoft.PlanetaryComputer/stable/2026-04-15/openapi.json, line 1](http<local-path>)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document openapi.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-2` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](http<local-path>) (digest `11536a1c587ca927bc67d873484cf93ba52519b7ee6c542ffe14fe0deada0859`)
- **Swagger source:** [base: specification/planetarycomputer/resource-manager/Microsoft.PlanetaryComputer/PlanetaryComputer/preview/2024-01-31-preview/planetarycomputer.json, line 1](http<local-path>); [head: specification/orbitalplanetarycomputer/resource-manager/Microsoft.Orbital/preview/2024-01-31-preview/planetarycomputer.json, line 1](http<local-path>)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document planetarycomputer.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-3` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](http<local-path>) (digest `11536a1c587ca927bc67d873484cf93ba52519b7ee6c542ffe14fe0deada0859`)
- **Swagger source:** [base: specification/planetarycomputer/resource-manager/Microsoft.PlanetaryComputer/PlanetaryComputer/preview/2025-02-11-preview/planetarycomputer.json, line 1](http<local-path>); [head: specification/orbitalplanetarycomputer/resource-manager/Microsoft.Orbital/preview/2025-02-11-preview/planetarycomputer.json, line 1](http<local-path>)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document planetarycomputer.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-4` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](http<local-path>) (digest `11536a1c587ca927bc67d873484cf93ba52519b7ee6c542ffe14fe0deada0859`)
- **Swagger source:** [base: specification/planetarycomputer/resource-manager/Microsoft.PlanetaryComputer/PlanetaryComputer/stable/2026-04-15/planetarycomputer.json, line 1](http<local-path>); [head: specification/orbitalplanetarycomputer/resource-manager/Microsoft.Orbital/stable/2026-04-15/planetarycomputer.json, line 1](http<local-path>)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document planetarycomputer.json
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
git -C target fetch --no-tags origin 0799fda68aab1e2c6f5f0d06f028f451b14bf0a8 5adc647c5d61132bb68909a2d02ccf507aeb9feb
git -C target checkout --detach 5adc647c5d61132bb68909a2d02ccf507aeb9feb
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'http<local-path>' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/orbital/Microsoft.PlanetaryComputer

```powershell
Push-Location target
node $prepared.executable 'specification/orbital/Microsoft.PlanetaryComputer' --base-ref 0799fda68aab1e2c6f5f0d06f028f451b14bf0a8 --phase same-version --json-output '../specification-orbital-Microsoft.PlanetaryComputer-phase-a.json' --markdown-output '../specification-orbital-Microsoft.PlanetaryComputer-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/orbital/Microsoft.PlanetaryComputer' --base-ref 0799fda68aab1e2c6f5f0d06f028f451b14bf0a8 --json-output '../specification-orbital-Microsoft.PlanetaryComputer-phase-b-evidence.json' --markdown-output '../specification-orbital-Microsoft.PlanetaryComputer-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/orbitalplanetarycomputer/Orbital.Management

```powershell
Push-Location target
node $prepared.executable 'specification/orbitalplanetarycomputer/Orbital.Management' --base-ref 0799fda68aab1e2c6f5f0d06f028f451b14bf0a8 --phase same-version --json-output '../specification-orbitalplanetarycomputer-Orbital.Management-phase-a.json' --markdown-output '../specification-orbitalplanetarycomputer-Orbital.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/orbitalplanetarycomputer/Orbital.Management' --base-ref 0799fda68aab1e2c6f5f0d06f028f451b14bf0a8 --json-output '../specification-orbitalplanetarycomputer-Orbital.Management-phase-b-evidence.json' --markdown-output '../specification-orbitalplanetarycomputer-Orbital.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
