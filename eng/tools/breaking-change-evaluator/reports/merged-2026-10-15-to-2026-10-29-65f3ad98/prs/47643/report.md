# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47643:5d36e8927ca8a2455e4bf6d05d626c831a2e3342`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47643 — [Network] Update TypeSpec configuration for .NET SDK compatibility](https://github.com/Azure/azure-rest-api-specs/pull/47643)
- **Author:** ArcturusZhang
- **State:** closed (merged) at 2026-10-27T14:19:44Z
- **Base:** `main` at `2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30`
- **Head:** `restore-network-resource-type` at `5d36e8927ca8a2455e4bf6d05d626c831a2e3342`
- **Changed TypeSpec files:** `specification/network/resource-manager/Microsoft.Network/Network/Network/ApplicationGatewayWafDynamicManifestResult.tsp`, `specification/network/resource-manager/Microsoft.Network/Network/Network/back-compatible.tsp`, `specification/network/resource-manager/Microsoft.Network/Network/client.tsp`, `specification/network/resource-manager/Microsoft.Network/Network/tspconfig.yaml`

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

| Phase | Scope | Failure | Available evidence | Analysis | Details |
| --- | --- | --- | --- | --- | --- |
| — | Report execution | specification/network/resource-manager/Microsoft.Network/Network: Analysis failed: Failed to compile the base revision (2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30): 1 error(s) found:   error file-not-found: File <local-path> ; Analysis failed: Failed to compile the base revision (2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30): 1 error(s) found:   error file-not-found: File <local-path> | [workflow 40472678109](https://github.com/Azure/azure-rest-api-specs/actions/runs/40472678109) · [workflow 40472678322](https://github.com/Azure/azure-rest-api-specs/actions/runs/40472678322) | Comparison is incomplete; do not treat absent findings as detector agreement. | [details](#evidence-error-1) |

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
| A | Unavailable | 87839 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40472678109) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/199707c82451cbab-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 88938 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40472678322) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/199707c82451cbab-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/network/resource-manager/Microsoft.Network/Network` | Phase A (`same-version`) | Analysis failed: Failed to compile the base revision (2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30): 1 error(s) found:
  error file-not-found: File <local-path>
 | 0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/5c965f57f5360abe-phase-a.md) |
| `specification/network/resource-manager/Microsoft.Network/Network` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30): 1 error(s) found:
  error file-not-found: File <local-path>
 | 0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/5c965f57f5360abe-phase-b.md) |
| `specification/network/resource-manager/Microsoft.Network/Network/Network` | Phase A (`same-version`) | `2025-05-01` → `2025-05-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/199707c82451cbab-phase-a.md) |
| `specification/network/resource-manager/Microsoft.Network/Network/Network` | Phase A (`same-version`) | `2025-07-01` → `2025-07-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/199707c82451cbab-phase-a.md) |
| `specification/network/resource-manager/Microsoft.Network/Network/Network` | Phase A (`same-version`) | `2025-09-01` → `2025-09-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/199707c82451cbab-phase-a.md) |
| `specification/network/resource-manager/Microsoft.Network/Network/Network` | Phase A (`same-version`) | `2026-01-01` → `2026-01-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/199707c82451cbab-phase-a.md) |
| `specification/network/resource-manager/Microsoft.Network/Network/Network` | Phase A (`same-version`) | `2026-03-01` → `2026-03-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/199707c82451cbab-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-compile-runtime-failure-5fab168115f21800"></a>`issue-compile-runtime-failure-5fab168115f21800` | 0 | A, B | `compile-runtime-failure` | execution-failure | One or more evaluator, compile, or analyzer executions failed. Preserves a partial or failed outcome instead of success-shaped metrics. | Resolve the recorded execution error and rerun the same immutable input. | high; generated | `execution:execution-error-0` — specification/network/resource-manager/Microsoft.Network/Network: Analysis failed: Failed to compile the base revision (2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30): 1 error(s) found:   error file-not-found: File <local-path> ; Analysis failed: Failed to compile the base revision (2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30): 1 error(s) found:   error file-not-found: File <local-path> <br>`execution:execution-error-1` — Analysis failed: Failed to compile the base revision (2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30): 1 error(s) found:   error file-not-found: File <local-path> ; Analysis failed: Failed to compile the base revision (2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30): 1 error(s) found:   error file-not-found: File <local-path> |

## Finding details

<a id="evidence-error-1"></a>
### Evidence error 1

- specification/network/resource-manager/Microsoft.Network/Network: Analysis failed: Failed to compile the base revision (2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30): 1 error(s) found:
  error file-not-found: File <local-path>
; Analysis failed: Failed to compile the base revision (2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30): 1 error(s) found:
  error file-not-found: File <local-path>


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
git -C target fetch --no-tags origin 2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30 5d36e8927ca8a2455e4bf6d05d626c831a2e3342
git -C target checkout --detach 5d36e8927ca8a2455e4bf6d05d626c831a2e3342
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47643' --tool-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/network/resource-manager/Microsoft.Network/Network

```powershell
Push-Location target
node $prepared.executable 'specification/network/resource-manager/Microsoft.Network/Network' --base-ref 2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30 --phase same-version --json-output '../specification-network-resource-manager-Microsoft.Network-Network-phase-a.json' --markdown-output '../specification-network-resource-manager-Microsoft.Network-Network-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/network/resource-manager/Microsoft.Network/Network' --base-ref 2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30 --json-output '../specification-network-resource-manager-Microsoft.Network-Network-phase-b-evidence.json' --markdown-output '../specification-network-resource-manager-Microsoft.Network-Network-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/network/resource-manager/Microsoft.Network/Network/Network

```powershell
Push-Location target
node $prepared.executable 'specification/network/resource-manager/Microsoft.Network/Network/Network' --base-ref 2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30 --phase same-version --json-output '../specification-network-resource-manager-Microsoft.Network-Network-Network-phase-a.json' --markdown-output '../specification-network-resource-manager-Microsoft.Network-Network-Network-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/network/resource-manager/Microsoft.Network/Network/Network' --base-ref 2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30 --json-output '../specification-network-resource-manager-Microsoft.Network-Network-Network-phase-b-evidence.json' --markdown-output '../specification-network-resource-manager-Microsoft.Network-Network-Network-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/network/resource-manager/Microsoft.Network/Network: Analysis failed: Failed to compile the base revision (2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30): 1 error(s) found:
  error file-not-found: File <local-path>
; Analysis failed: Failed to compile the base revision (2455f14a8f2b69b2b5dcfb40c4ef8d8a3aa1aa30): 1 error(s) found:
  error file-not-found: File <local-path>

