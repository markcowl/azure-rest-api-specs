# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-47123:1b93bd4c166ba7d363c391a6bdfad53f76f24270`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47123 — Enable Verified ID provisioning emitter](https://github.com/Azure/azure-rest-api-specs/pull/47123)
- **Author:** cxznmhdcxz
- **State:** closed (merged) at 2026-10-09T06:24:33Z
- **Base:** `main` at `f84874f0fae6c9dc9fb8f46e8e15a53b81036633`
- **Head:** `feature/provisioning-verifiedid` at `1b93bd4c166ba7d363c391a6bdfad53f76f24270`
- **Changed TypeSpec files:** `specification/verifiedid/resource-manager/Microsoft.VerifiedId/VerifiedId/tspconfig.yaml`

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

| Phase | Scope | Failure | Available evidence | Analysis | Details |
| --- | --- | --- | --- | --- | --- |
| — | Report execution | specification/verifiedid/resource-manager/Microsoft.VerifiedId/VerifiedId: Analysis failed: Cannot read properties of undefined (reading 'get') ; Analysis failed: Cannot read properties of undefined (reading 'get') | [workflow 37889994887](https://github.com/Azure/azure-rest-api-specs/actions/runs/37889994887) · [workflow 37889994884](https://github.com/Azure/azure-rest-api-specs/actions/runs/37889994884) | Comparison is incomplete; do not treat absent findings as detector agreement. | [details](#evidence-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37889994887) (no detector timing emitted) |
| B | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37889994884) (no detector timing emitted) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/verifiedid/resource-manager/Microsoft.VerifiedId/VerifiedId` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/17f4c117ebe651de-phase-a.md) |
| `specification/verifiedid/resource-manager/Microsoft.VerifiedId/VerifiedId` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/17f4c117ebe651de-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-compile-runtime-failure-0fc6c540b20e1219` | A, B | `compile-runtime-failure` | execution-failure | high | generated | 0 |

<a id="issue-compile-runtime-failure-0fc6c540b20e1219"></a>
### issue-compile-runtime-failure-0fc6c540b20e1219

- **Affected PRs:** #47123
- **Phases:** A, B
- **Finding IDs:** none
- **Category:** `compile-runtime-failure`
- **Conclusion:** execution-failure
- **Confidence:** high
- **Rationale:** One or more evaluator, compile, or analyzer executions failed.
- **Aggregate impact:** Preserves a partial or failed outcome instead of success-shaped metrics.
- **Suggested fix:** Resolve the recorded execution error and rerun the same immutable input.
- **Status:** generated
- **Evidence:**
  - `execution:execution-error-0` — specification/verifiedid/resource-manager/Microsoft.VerifiedId/VerifiedId: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-1` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')


## Finding details

<a id="evidence-error-1"></a>
### Evidence error 1

- specification/verifiedid/resource-manager/Microsoft.VerifiedId/VerifiedId: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')


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
git -C target fetch --no-tags origin f84874f0fae6c9dc9fb8f46e8e15a53b81036633 1b93bd4c166ba7d363c391a6bdfad53f76f24270
git -C target checkout --detach 1b93bd4c166ba7d363c391a6bdfad53f76f24270
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47123' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/verifiedid/resource-manager/Microsoft.VerifiedId/VerifiedId

```powershell
Push-Location target
node $prepared.executable 'specification/verifiedid/resource-manager/Microsoft.VerifiedId/VerifiedId' --base-ref f84874f0fae6c9dc9fb8f46e8e15a53b81036633 --phase same-version --json-output '../specification-verifiedid-resource-manager-Microsoft.VerifiedId-VerifiedId-phase-a.json' --markdown-output '../specification-verifiedid-resource-manager-Microsoft.VerifiedId-VerifiedId-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/verifiedid/resource-manager/Microsoft.VerifiedId/VerifiedId' --base-ref f84874f0fae6c9dc9fb8f46e8e15a53b81036633 --json-output '../specification-verifiedid-resource-manager-Microsoft.VerifiedId-VerifiedId-phase-b-evidence.json' --markdown-output '../specification-verifiedid-resource-manager-Microsoft.VerifiedId-VerifiedId-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/verifiedid/resource-manager/Microsoft.VerifiedId/VerifiedId: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

