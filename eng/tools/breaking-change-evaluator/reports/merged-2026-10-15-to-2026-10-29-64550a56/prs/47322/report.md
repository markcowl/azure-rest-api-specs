# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-64550a56`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-64550a56`
**Report ID:** `merged-2026-10-15-to-2026-10-29-64550a56:pr-47322:df1ce72b86ced7532ad9d5284865ceb9890c0490`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47322 — Azure Local Client customization change](https://github.com/Azure/azure-rest-api-specs/pull/47322)
- **Author:** v-shubhamti-microsoft
- **State:** closed (merged) at 2026-10-15T09:58:00Z
- **Base:** `main` at `3b386d94c8a520fb6bb626b8e667e0b69a9df96a`
- **Head:** `user/v-shubhamti/fix-client-customization-15102026` at `df1ce72b86ced7532ad9d5284865ceb9890c0490`
- **Changed TypeSpec files:** `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI/client.tsp`

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
| — | Report execution | specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI: Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error import-not-found: Couldn't resolve import "<local-path>" ; Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error import-not-found: Couldn't resolve import "<local-path>" | [workflow 38714530967](https://github.com/Azure/azure-rest-api-specs/actions/runs/38714530967) · [workflow 38714531165](https://github.com/Azure/azure-rest-api-specs/actions/runs/38714531165) | Comparison is incomplete; do not treat absent findings as detector agreement. | [details](#evidence-error-1) |

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
| A | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38714530967) (no detector timing emitted) |
| B | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38714531165) (no detector timing emitted) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI` | Phase A (`same-version`) | Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error import-not-found: Couldn't resolve import "<local-path>"
 | 0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d542013e3b27865c-phase-a.md) |
| `specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error import-not-found: Couldn't resolve import "<local-path>"
 | 0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/d542013e3b27865c-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-compile-runtime-failure-2351957835c5f5d9"></a>`issue-compile-runtime-failure-2351957835c5f5d9` | 0 | A, B | `compile-runtime-failure` | execution-failure | One or more evaluator, compile, or analyzer executions failed. Preserves a partial or failed outcome instead of success-shaped metrics. | Resolve the recorded execution error and rerun the same immutable input. | high; generated | `execution:execution-error-0` — specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI: Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error import-not-found: Couldn't resolve import "<local-path>" ; Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error import-not-found: Couldn't resolve import "<local-path>" <br>`execution:execution-error-1` — Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error import-not-found: Couldn't resolve import "<local-path>" ; Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error import-not-found: Couldn't resolve import "<local-path>" |

## Finding details

<a id="evidence-error-1"></a>
### Evidence error 1

- specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI: Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error import-not-found: Couldn't resolve import "<local-path>"
; Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error import-not-found: Couldn't resolve import "<local-path>"


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
$prepared = node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js prepare --typespec-revision 64550a561cbd7f5eb0ec6865802a908744a3528f | ConvertFrom-Json
if ($prepared.artifactDigest -ne '50150db6c408dedca023a248f83bc39491e3bb79be5f001cc742b6b84366c1e1') { throw 'Prepared analyzer digest does not match the report' }
```

### Check out the evaluated target

```powershell
git clone --filter=blob:none --no-checkout 'https://github.com/Azure/azure-rest-api-specs.git' target
git -C target fetch --no-tags origin 3b386d94c8a520fb6bb626b8e667e0b69a9df96a df1ce72b86ced7532ad9d5284865ceb9890c0490
git -C target checkout --detach df1ce72b86ced7532ad9d5284865ceb9890c0490
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47322' --tool-revision 64550a561cbd7f5eb0ec6865802a908744a3528f --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI

```powershell
Push-Location target
node $prepared.executable 'specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-azurestackhci-resource-manager-Microsoft.AzureStackHCI-StackHCI-phase-a.json' --markdown-output '../specification-azurestackhci-resource-manager-Microsoft.AzureStackHCI-StackHCI-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-azurestackhci-resource-manager-Microsoft.AzureStackHCI-StackHCI-phase-b-evidence.json' --markdown-output '../specification-azurestackhci-resource-manager-Microsoft.AzureStackHCI-StackHCI-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/StackHCI: Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error import-not-found: Couldn't resolve import "<local-path>"
; Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error import-not-found: Couldn't resolve import "<local-path>"

