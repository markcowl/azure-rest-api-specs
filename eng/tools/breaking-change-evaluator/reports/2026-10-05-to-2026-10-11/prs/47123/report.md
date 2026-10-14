# Breaking-change evaluator

**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47123 — Enable Verified ID provisioning emitter](https://github.com/Azure/azure-rest-api-specs/pull/47123)
- **Author:** cxznmhdcxz
- **State:** closed (merged) at 2026-10-09T06:24:33Z
- **Base:** `main` at `f84874f0fae6c9dc9fb8f46e8e15a53b81036633`
- **Head:** `feature/provisioning-verifiedid` at `1b93bd4c166ba7d363c391a6bdfad53f76f24270`
- **Changed TypeSpec files:** `specification/verifiedid/resource-manager/Microsoft.VerifiedId/VerifiedId/tspconfig.yaml`

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
git -C target fetch --no-tags origin f84874f0fae6c9dc9fb8f46e8e15a53b81036633 1b93bd4c166ba7d363c391a6bdfad53f76f24270
git -C target checkout --detach 1b93bd4c166ba7d363c391a6bdfad53f76f24270
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47123' --tool-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0 --json-output evaluator.json --markdown-output evaluator.md
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

