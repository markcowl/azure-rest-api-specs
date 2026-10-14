# Breaking-change evaluator

**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46715 — Add stable EdgeActions 2026-10-01 API](https://github.com/Azure/azure-rest-api-specs/pull/46715)
- **Author:** kestry
- **State:** closed (merged) at 2026-10-10T14:02:46Z
- **Base:** `main` at `91a08e9bdaa4370a0b50cae7ddbae209b77a6d0c`
- **Head:** `edgeactions-stable-2026-10-minimal` at `fb9c258f0c1ae9055592cfaf5ee356ee3475e1a3`
- **Changed TypeSpec files:** `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/edgeactionsbasemodels.tsp`, `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions/main.tsp`

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37969208978) (no detector timing emitted) |
| B | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37969208848) (no detector timing emitted) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c5f763224c81830d-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/c5f763224c81830d-phase-b.md) |

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
git -C target fetch --no-tags origin 91a08e9bdaa4370a0b50cae7ddbae209b77a6d0c fb9c258f0c1ae9055592cfaf5ee356ee3475e1a3
git -C target checkout --detach fb9c258f0c1ae9055592cfaf5ee356ee3475e1a3
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/46715' --tool-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions

```powershell
Push-Location target
node $prepared.executable 'specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions' --base-ref 91a08e9bdaa4370a0b50cae7ddbae209b77a6d0c --phase same-version --json-output '../specification-cdn-resource-manager-Microsoft.Cdn-EdgeActions-phase-a.json' --markdown-output '../specification-cdn-resource-manager-Microsoft.Cdn-EdgeActions-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions' --base-ref 91a08e9bdaa4370a0b50cae7ddbae209b77a6d0c --json-output '../specification-cdn-resource-manager-Microsoft.Cdn-EdgeActions-phase-b-evidence.json' --markdown-output '../specification-cdn-resource-manager-Microsoft.Cdn-EdgeActions-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/cdn/resource-manager/Microsoft.Cdn/EdgeActions: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

