# Breaking-change evaluator

**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46391 — Adding ObservabilityConfiguration API specs to ALDO EdgeOperator RP.](https://github.com/Azure/azure-rest-api-specs/pull/46391)
- **Author:** kleyvaortega
- **State:** closed (merged) at 2026-10-09T17:29:22Z
- **Base:** `main` at `8d7b6b37fab6d5f417ee9008387defb631db1502`
- **Head:** `users/kleyvaortega/observabilityConfiguration` at `936d3225f025701f4685737c2b082778a4bbc722`
- **Changed TypeSpec files:** `specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration/main.tsp`, `specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration/observabilityConfiguration.tsp`, `specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration/tspconfig.yaml`

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
| A | [Swagger Breaking Change run 37036752007](https://github.com/Azure/azure-rest-api-specs/actions/runs/37036752007) | `same-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 37036751933](https://github.com/Azure/azure-rest-api-specs/actions/runs/37036751933) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

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
| A | Unavailable | 4 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37036752007) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/3d51d3b0941d0f5f-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 5 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37036751933) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/3d51d3b0941d0f5f-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration` | Phase A (`same-version`) | Phase A (same-version) requires a base program for comparison. Use analyzeBaseAndHead() instead. | 0 | 0 | [generated Markdown](report-artifacts/typespec/3d51d3b0941d0f5f-phase-a.md) |
| `specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration` | Phase B (`cross-version`) | No cross-version comparisons needed: all versions are preview (no stable baseline exists). | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/3d51d3b0941d0f5f-phase-b.md) |

## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

Both detectors reported zero non-error findings.

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
git -C target fetch --no-tags origin 8d7b6b37fab6d5f417ee9008387defb631db1502 936d3225f025701f4685737c2b082778a4bbc722
git -C target checkout --detach 936d3225f025701f4685737c2b082778a4bbc722
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/46391' --tool-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration

```powershell
Push-Location target
node $prepared.executable 'specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration' --base-ref 8d7b6b37fab6d5f417ee9008387defb631db1502 --phase same-version --json-output '../specification-edgeoperator-resource-manager-Microsoft.EdgeOperator-ObservabilityConfiguration-phase-a.json' --markdown-output '../specification-edgeoperator-resource-manager-Microsoft.EdgeOperator-ObservabilityConfiguration-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration' --base-ref 8d7b6b37fab6d5f417ee9008387defb631db1502 --json-output '../specification-edgeoperator-resource-manager-Microsoft.EdgeOperator-ObservabilityConfiguration-phase-b-evidence.json' --markdown-output '../specification-edgeoperator-resource-manager-Microsoft.EdgeOperator-ObservabilityConfiguration-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
