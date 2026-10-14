# Breaking-change evaluator

**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47005 — Revert(planetarycomputer): restore previous folder structure](https://github.com/Azure/azure-rest-api-specs/pull/47005)
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
| A | [Swagger Breaking Change run 37078379040](https://github.com/Azure/azure-rest-api-specs/actions/runs/37078379040) | `same-version` | concordant-zero | 0 | 5 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 37078378960](https://github.com/Azure/azure-rest-api-specs/actions/runs/37078378960) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

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
| A | Unavailable | 8 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37078379040) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/0e1497e46c99294c-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/dfc4b09bffcba0ba-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 11 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37078378960) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/0e1497e46c99294c-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/dfc4b09bffcba0ba-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/orbital/Microsoft.PlanetaryComputer` | Phase A (`same-version`) | Phase A (same-version) requires a base program for comparison. Use analyzeBaseAndHead() instead. | 0 | 0 | [generated Markdown](report-artifacts/typespec/0e1497e46c99294c-phase-a.md) |
| `specification/orbital/Microsoft.PlanetaryComputer` | Phase B (`cross-version`) | No cross-version comparisons needed: no comparisons to stable versions needed. | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/0e1497e46c99294c-phase-b.md) |
| `specification/orbitalplanetarycomputer/Orbital.Management` | Phase A (`same-version`) | Phase A (same-version) requires a base program for comparison. Use analyzeBaseAndHead() instead. | 0 | 0 | [generated Markdown](report-artifacts/typespec/dfc4b09bffcba0ba-phase-a.md) |
| `specification/orbitalplanetarycomputer/Orbital.Management` | Phase B (`cross-version`) | No cross-version comparisons needed: no comparisons to stable versions needed. | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/dfc4b09bffcba0ba-phase-b.md) |

## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

### Informational OAD records

#### NoVersionChange

- **Swagger finding:** `A-oad-0` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37078379040) (digest `11536a1c587ca927bc67d873484cf93ba52519b7ee6c542ffe14fe0deada0859`)
- **Swagger source:** [base: specification/planetarycomputer/data-plane/PlanetaryComputer/preview/2025-04-30-preview/openapi.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/0799fda68aab1e2c6f5f0d06f028f451b14bf0a8/specification/planetarycomputer/data-plane/PlanetaryComputer/preview/2025-04-30-preview/openapi.json#L1); [head: specification/orbital/data-plane/Microsoft.PlanetaryComputer/preview/2025-04-30-preview/openapi.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/5adc647c5d61132bb68909a2d02ccf507aeb9feb/specification/orbital/data-plane/Microsoft.PlanetaryComputer/preview/2025-04-30-preview/openapi.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document openapi.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-1` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37078379040) (digest `11536a1c587ca927bc67d873484cf93ba52519b7ee6c542ffe14fe0deada0859`)
- **Swagger source:** [base: specification/planetarycomputer/data-plane/PlanetaryComputer/stable/2026-04-15/openapi.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/0799fda68aab1e2c6f5f0d06f028f451b14bf0a8/specification/planetarycomputer/data-plane/PlanetaryComputer/stable/2026-04-15/openapi.json#L1); [head: specification/orbital/data-plane/Microsoft.PlanetaryComputer/stable/2026-04-15/openapi.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/5adc647c5d61132bb68909a2d02ccf507aeb9feb/specification/orbital/data-plane/Microsoft.PlanetaryComputer/stable/2026-04-15/openapi.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document openapi.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-2` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37078379040) (digest `11536a1c587ca927bc67d873484cf93ba52519b7ee6c542ffe14fe0deada0859`)
- **Swagger source:** [base: specification/planetarycomputer/resource-manager/Microsoft.PlanetaryComputer/PlanetaryComputer/preview/2024-01-31-preview/planetarycomputer.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/0799fda68aab1e2c6f5f0d06f028f451b14bf0a8/specification/planetarycomputer/resource-manager/Microsoft.PlanetaryComputer/PlanetaryComputer/preview/2024-01-31-preview/planetarycomputer.json#L1); [head: specification/orbitalplanetarycomputer/resource-manager/Microsoft.Orbital/preview/2024-01-31-preview/planetarycomputer.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/5adc647c5d61132bb68909a2d02ccf507aeb9feb/specification/orbitalplanetarycomputer/resource-manager/Microsoft.Orbital/preview/2024-01-31-preview/planetarycomputer.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document planetarycomputer.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-3` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37078379040) (digest `11536a1c587ca927bc67d873484cf93ba52519b7ee6c542ffe14fe0deada0859`)
- **Swagger source:** [base: specification/planetarycomputer/resource-manager/Microsoft.PlanetaryComputer/PlanetaryComputer/preview/2025-02-11-preview/planetarycomputer.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/0799fda68aab1e2c6f5f0d06f028f451b14bf0a8/specification/planetarycomputer/resource-manager/Microsoft.PlanetaryComputer/PlanetaryComputer/preview/2025-02-11-preview/planetarycomputer.json#L1); [head: specification/orbitalplanetarycomputer/resource-manager/Microsoft.Orbital/preview/2025-02-11-preview/planetarycomputer.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/5adc647c5d61132bb68909a2d02ccf507aeb9feb/specification/orbitalplanetarycomputer/resource-manager/Microsoft.Orbital/preview/2025-02-11-preview/planetarycomputer.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document planetarycomputer.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-4` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37078379040) (digest `11536a1c587ca927bc67d873484cf93ba52519b7ee6c542ffe14fe0deada0859`)
- **Swagger source:** [base: specification/planetarycomputer/resource-manager/Microsoft.PlanetaryComputer/PlanetaryComputer/stable/2026-04-15/planetarycomputer.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/0799fda68aab1e2c6f5f0d06f028f451b14bf0a8/specification/planetarycomputer/resource-manager/Microsoft.PlanetaryComputer/PlanetaryComputer/stable/2026-04-15/planetarycomputer.json#L1); [head: specification/orbitalplanetarycomputer/resource-manager/Microsoft.Orbital/stable/2026-04-15/planetarycomputer.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/5adc647c5d61132bb68909a2d02ccf507aeb9feb/specification/orbitalplanetarycomputer/resource-manager/Microsoft.Orbital/stable/2026-04-15/planetarycomputer.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document planetarycomputer.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

## Reproduce

**Shell:** powershell

### Check out the evaluator

```powershell
git clone 'https://github.com/markcowl/azure-rest-api-specs.git' evaluator
git -C evaluator checkout '0d458e940caf56cd5069ec16389524d2186c786f'
corepack pnpm --dir evaluator install --frozen-lockfile
```

### Prepare the immutable analyzer

```powershell
$prepared = node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js prepare --typespec-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0 | ConvertFrom-Json
if ($prepared.artifactDigest -ne '0ae9893ccdc9016ab4e0916f3f34f57959f0ce0eb4e445cfe91a04597eaa93d2') { throw 'Prepared analyzer digest does not match the report' }
```

### Check out the evaluated target

```powershell
git clone --filter=blob:none --no-checkout 'https://github.com/Azure/azure-rest-api-specs.git' target
git -C target fetch --no-tags origin 0799fda68aab1e2c6f5f0d06f028f451b14bf0a8 5adc647c5d61132bb68909a2d02ccf507aeb9feb
git -C target checkout --detach 5adc647c5d61132bb68909a2d02ccf507aeb9feb
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47005' --tool-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0 --json-output evaluator.json --markdown-output evaluator.md
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
