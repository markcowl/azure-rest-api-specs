# Breaking-change evaluator

**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47139 — [SDK configuration] Pin all Resilience Management SDK API versions](https://github.com/Azure/azure-rest-api-specs/pull/47139)
- **Author:** krtcodee
- **State:** closed (merged) at 2026-10-09T09:33:41Z
- **Base:** `main` at `663934c93853cb58f6477c2e8e0f48d5eca2d770`
- **Head:** `fix/arm-dotnet-api-version-2026-10-01` at `b3410fed5de57480338f207c03de9d7b506abf55`
- **Changed TypeSpec files:** `specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement/tspconfig.yaml`

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37909418401) (no detector timing emitted) |
| B | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37909418292) (no detector timing emitted) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement` | Phase A (`same-version`) | Analysis failed: Unable to distinguish language type of union variant "Symbol(name)" with available runtime checks. Indistinguishable from: [Symbol(name), Symbol(name)]. Variant type category: string. Available tests: [type()].
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c555a2fdda0dddc0-phase-a.md) |
| `specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement` | Phase B (`cross-version`) | Analysis failed: Unable to distinguish language type of union variant "Symbol(name)" with available runtime checks. Indistinguishable from: [Symbol(name), Symbol(name)]. Variant type category: string. Available tests: [type()].
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/c555a2fdda0dddc0-phase-b.md) |

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
git -C target fetch --no-tags origin 663934c93853cb58f6477c2e8e0f48d5eca2d770 b3410fed5de57480338f207c03de9d7b506abf55
git -C target checkout --detach b3410fed5de57480338f207c03de9d7b506abf55
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47139' --tool-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement

```powershell
Push-Location target
node $prepared.executable 'specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement' --base-ref 663934c93853cb58f6477c2e8e0f48d5eca2d770 --phase same-version --json-output '../specification-azureresiliencemanagement-resource-manager-Microsoft.AzureResilienceManagement-AzureResilienceManagement-phase-a.json' --markdown-output '../specification-azureresiliencemanagement-resource-manager-Microsoft.AzureResilienceManagement-AzureResilienceManagement-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement' --base-ref 663934c93853cb58f6477c2e8e0f48d5eca2d770 --json-output '../specification-azureresiliencemanagement-resource-manager-Microsoft.AzureResilienceManagement-AzureResilienceManagement-phase-b-evidence.json' --markdown-output '../specification-azureresiliencemanagement-resource-manager-Microsoft.AzureResilienceManagement-AzureResilienceManagement-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/azureresiliencemanagement/resource-manager/Microsoft.AzureResilienceManagement/AzureResilienceManagement: Analysis failed: Unable to distinguish language type of union variant "Symbol(name)" with available runtime checks. Indistinguishable from: [Symbol(name), Symbol(name)]. Variant type category: string. Available tests: [type()].
; Analysis failed: Unable to distinguish language type of union variant "Symbol(name)" with available runtime checks. Indistinguishable from: [Symbol(name), Symbol(name)]. Variant type category: string. Available tests: [type()].

