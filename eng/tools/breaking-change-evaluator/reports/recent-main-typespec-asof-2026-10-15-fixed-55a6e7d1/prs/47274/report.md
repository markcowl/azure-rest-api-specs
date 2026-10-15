# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47274:1a4022c18b6c3cc564fb85b9febf8180649a6ebd`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47274 — [JS] update JS customizations](http<local-path>)
- **Author:** kazrael2119
- **State:** closed (merged) at 2026-10-15T01:39:38Z
- **Base:** `main` at `7507c3df4b8bf6c5887d8571f929b6e393479f2f`
- **Head:** `update-js-custom` at `1a4022c18b6c3cc564fb85b9febf8180649a6ebd`
- **Changed TypeSpec files:** `specification/redisenterprise/resource-manager/Microsoft.Cache/RedisEnterprise/back-compatible.tsp`

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](http<local-path>) (no detector timing emitted) |
| B | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](http<local-path>) (no detector timing emitted) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/redisenterprise/resource-manager/Microsoft.Cache/RedisEnterprise` | Phase A (`same-version`) | Analysis failed: spawn git ENOENT
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/2612c7d708f37b4e-phase-a.md) |
| `specification/redisenterprise/resource-manager/Microsoft.Cache/RedisEnterprise` | Phase B (`cross-version`) | Analysis failed: spawn git ENOENT
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/2612c7d708f37b4e-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-compile-runtime-failure-df7a74dcc097c642` | A, B | `compile-runtime-failure` | execution-failure | high | generated | 0 |

### issue-compile-runtime-failure-df7a74dcc097c642

- **Affected PRs:** #47274
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
  - `execution:execution-error-0` — specification/redisenterprise/resource-manager/Microsoft.Cache/RedisEnterprise: Analysis failed: spawn git ENOENT
; Analysis failed: spawn git ENOENT

  - `execution:execution-error-1` — Analysis failed: spawn git ENOENT
; Analysis failed: spawn git ENOENT


## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

Both detectors reported zero non-error findings.

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
git -C target fetch --no-tags origin 7507c3df4b8bf6c5887d8571f929b6e393479f2f 1a4022c18b6c3cc564fb85b9febf8180649a6ebd
git -C target checkout --detach 1a4022c18b6c3cc564fb85b9febf8180649a6ebd
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'http<local-path>' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/redisenterprise/resource-manager/Microsoft.Cache/RedisEnterprise

```powershell
Push-Location target
node $prepared.executable 'specification/redisenterprise/resource-manager/Microsoft.Cache/RedisEnterprise' --base-ref 7507c3df4b8bf6c5887d8571f929b6e393479f2f --phase same-version --json-output '../specification-redisenterprise-resource-manager-Microsoft.Cache-RedisEnterprise-phase-a.json' --markdown-output '../specification-redisenterprise-resource-manager-Microsoft.Cache-RedisEnterprise-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/redisenterprise/resource-manager/Microsoft.Cache/RedisEnterprise' --base-ref 7507c3df4b8bf6c5887d8571f929b6e393479f2f --json-output '../specification-redisenterprise-resource-manager-Microsoft.Cache-RedisEnterprise-phase-b-evidence.json' --markdown-output '../specification-redisenterprise-resource-manager-Microsoft.Cache-RedisEnterprise-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/redisenterprise/resource-manager/Microsoft.Cache/RedisEnterprise: Analysis failed: spawn git ENOENT
; Analysis failed: spawn git ENOENT

