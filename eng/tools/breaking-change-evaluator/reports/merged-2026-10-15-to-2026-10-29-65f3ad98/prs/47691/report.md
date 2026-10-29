# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47691:52457c0b9c8ba4d8f57b7a779bb0b426dee77215`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47691 — Compute: rename FlexProfile.preferredVMSize to PreferredVmSize for C#](https://github.com/Azure/azure-rest-api-specs/pull/47691)
- **Author:** audreyttt
- **State:** closed (merged) at 2026-10-29T04:59:32Z
- **Base:** `main` at `18fe880eaa7fe5ded0e64d2ba14d82aebad44897`
- **Head:** `audreyttt/compute-flexprofile-vmsize-csharp` at `52457c0b9c8ba4d8f57b7a779bb0b426dee77215`
- **Changed TypeSpec files:** `specification/compute/resource-manager/Microsoft.Compute/Compute/client.tsp`

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
| — | Report execution | specification/compute/resource-manager/Microsoft.Compute/Compute: Analysis failed: Failed to compile the base revision (18fe880eaa7fe5ded0e64d2ba14d82aebad44897): 1 error(s) found:   error file-not-found: File <local-path> ; Analysis failed: Failed to compile the base revision (18fe880eaa7fe5ded0e64d2ba14d82aebad44897): 1 error(s) found:   error file-not-found: File <local-path> | [workflow 40641632987](https://github.com/Azure/azure-rest-api-specs/actions/runs/40641632987) · [workflow 40641633012](https://github.com/Azure/azure-rest-api-specs/actions/runs/40641633012) | Comparison is incomplete; do not treat absent findings as detector agreement. | [details](#evidence-error-1) |

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
| A | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40641632987) (no detector timing emitted) |
| B | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/40641633012) (no detector timing emitted) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/compute/resource-manager/Microsoft.Compute/Compute` | Phase A (`same-version`) | Analysis failed: Failed to compile the base revision (18fe880eaa7fe5ded0e64d2ba14d82aebad44897): 1 error(s) found:
  error file-not-found: File <local-path>
 | 0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/0cf024a8f69efe8c-phase-a.md) |
| `specification/compute/resource-manager/Microsoft.Compute/Compute` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (18fe880eaa7fe5ded0e64d2ba14d82aebad44897): 1 error(s) found:
  error file-not-found: File <local-path>
 | 0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/0cf024a8f69efe8c-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-compile-runtime-failure-a9bce8e6dfcbe16f"></a>`issue-compile-runtime-failure-a9bce8e6dfcbe16f` | 0 | A, B | `compile-runtime-failure` | execution-failure | One or more evaluator, compile, or analyzer executions failed. Preserves a partial or failed outcome instead of success-shaped metrics. | Resolve the recorded execution error and rerun the same immutable input. | high; generated | `execution:execution-error-0` — specification/compute/resource-manager/Microsoft.Compute/Compute: Analysis failed: Failed to compile the base revision (18fe880eaa7fe5ded0e64d2ba14d82aebad44897): 1 error(s) found:   error file-not-found: File <local-path> ; Analysis failed: Failed to compile the base revision (18fe880eaa7fe5ded0e64d2ba14d82aebad44897): 1 error(s) found:   error file-not-found: File <local-path> <br>`execution:execution-error-1` — Analysis failed: Failed to compile the base revision (18fe880eaa7fe5ded0e64d2ba14d82aebad44897): 1 error(s) found:   error file-not-found: File <local-path> ; Analysis failed: Failed to compile the base revision (18fe880eaa7fe5ded0e64d2ba14d82aebad44897): 1 error(s) found:   error file-not-found: File <local-path> |

## Finding details

<a id="evidence-error-1"></a>
### Evidence error 1

- specification/compute/resource-manager/Microsoft.Compute/Compute: Analysis failed: Failed to compile the base revision (18fe880eaa7fe5ded0e64d2ba14d82aebad44897): 1 error(s) found:
  error file-not-found: File <local-path>
; Analysis failed: Failed to compile the base revision (18fe880eaa7fe5ded0e64d2ba14d82aebad44897): 1 error(s) found:
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
git -C target fetch --no-tags origin 18fe880eaa7fe5ded0e64d2ba14d82aebad44897 52457c0b9c8ba4d8f57b7a779bb0b426dee77215
git -C target checkout --detach 52457c0b9c8ba4d8f57b7a779bb0b426dee77215
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47691' --tool-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/compute/resource-manager/Microsoft.Compute/Compute

```powershell
Push-Location target
node $prepared.executable 'specification/compute/resource-manager/Microsoft.Compute/Compute' --base-ref 18fe880eaa7fe5ded0e64d2ba14d82aebad44897 --phase same-version --json-output '../specification-compute-resource-manager-Microsoft.Compute-Compute-phase-a.json' --markdown-output '../specification-compute-resource-manager-Microsoft.Compute-Compute-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/compute/resource-manager/Microsoft.Compute/Compute' --base-ref 18fe880eaa7fe5ded0e64d2ba14d82aebad44897 --json-output '../specification-compute-resource-manager-Microsoft.Compute-Compute-phase-b-evidence.json' --markdown-output '../specification-compute-resource-manager-Microsoft.Compute-Compute-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/compute/resource-manager/Microsoft.Compute/Compute: Analysis failed: Failed to compile the base revision (18fe880eaa7fe5ded0e64d2ba14d82aebad44897): 1 error(s) found:
  error file-not-found: File <local-path>
; Analysis failed: Failed to compile the base revision (18fe880eaa7fe5ded0e64d2ba14d82aebad44897): 1 error(s) found:
  error file-not-found: File <local-path>

