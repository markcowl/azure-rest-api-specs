# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-46863:61b45d456a35f01c38a884701a4c5f18f3e68cc4`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46863 — Publish Microsoft.DigitalAssets preview management API](https://github.com/Azure/azure-rest-api-specs/pull/46863)
- **Author:** sergius0301
- **State:** open
- **Base:** `main` at `1cda2b81fd9edf14d456494cc782dbe906facfeb`
- **Head:** `users/sgrabovschi/digitalassets-public-preview` at `61b45d456a35f01c38a884701a4c5f18f3e68cc4`
- **Changed TypeSpec files:** `specification/digitalassets/resource-manager/Microsoft.DigitalAssets/DigitalAssets/main.tsp`, `specification/digitalassets/resource-manager/Microsoft.DigitalAssets/DigitalAssets/models.tsp`, `specification/digitalassets/resource-manager/Microsoft.DigitalAssets/DigitalAssets/partition.tsp`, `specification/digitalassets/resource-manager/Microsoft.DigitalAssets/DigitalAssets/rollup.tsp`, `specification/digitalassets/resource-manager/Microsoft.DigitalAssets/DigitalAssets/tspconfig.yaml`, `specification/digitalassets/resource-manager/Microsoft.DigitalAssets/DigitalAssets/versions.tsp`

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
| — | Report execution | specification/digitalassets/resource-manager/Microsoft.DigitalAssets/DigitalAssets: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0; Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0 | [workflow 38561932629](https://github.com/Azure/azure-rest-api-specs/actions/runs/38561932629) · [workflow 38561932347](https://github.com/Azure/azure-rest-api-specs/actions/runs/38561932347) | Comparison is incomplete; do not treat absent findings as detector agreement. | [details](#evidence-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38561932629) (no detector timing emitted) |
| B | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38561932347) (no detector timing emitted) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/digitalassets/resource-manager/Microsoft.DigitalAssets/DigitalAssets` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
      throw er; // Unhandled 'error' event
      ^

Error: read ENOTCONN
    at tryReadStart (node:net:775:20)
    at Socket._read (node:net:790:5)
    at Readable.read (node:internal/streams/readable:741:12)
    at Socket.read (node:net:844:39)
    at new Socket (node:net:500:12)
    at Object.Socket (node:net:365:41)
    at createSocket (node:internal/child_process:337:14)
    at ChildProcess.spawn (node:internal/child_process:475:23)
    at spawn (node:child_process:796:9)
    at execFile (node:child_process:349:17)
Emitted 'error' event on Socket instance at:
    at emitErrorNT (node:internal/streams/destroy:170:8)
    at emitErrorCloseNT (node:internal/streams/destroy:129:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {
  errno: -4053,
  code: 'ENOTCONN',
  syscall: 'read'
}

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/eb7b7bce935739c3-phase-a.md) |
| `specification/digitalassets/resource-manager/Microsoft.DigitalAssets/DigitalAssets` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
      throw er; // Unhandled 'error' event
      ^

Error: read ENOTCONN
    at tryReadStart (node:net:775:20)
    at Socket._read (node:net:790:5)
    at Readable.read (node:internal/streams/readable:741:12)
    at Socket.read (node:net:844:39)
    at new Socket (node:net:500:12)
    at Object.Socket (node:net:365:41)
    at createSocket (node:internal/child_process:337:14)
    at ChildProcess.spawn (node:internal/child_process:475:23)
    at spawn (node:child_process:796:9)
    at execFile (node:child_process:349:17)
Emitted 'error' event on Socket instance at:
    at emitErrorNT (node:internal/streams/destroy:170:8)
    at emitErrorCloseNT (node:internal/streams/destroy:129:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {
  errno: -4053,
  code: 'ENOTCONN',
  syscall: 'read'
}

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/eb7b7bce935739c3-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Analysis | Suggested fix | Confidence / status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-compile-runtime-failure-7087e252459185e9"></a>`issue-compile-runtime-failure-7087e252459185e9` | A, B | `compile-runtime-failure` | execution-failure | One or more evaluator, compile, or analyzer executions failed. Preserves a partial or failed outcome instead of success-shaped metrics. | Resolve the recorded execution error and rerun the same immutable input. | high; generated | `execution:execution-error-0` — specification/digitalassets/resource-manager/Microsoft.DigitalAssets/DigitalAssets: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0; Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0<br>`execution:execution-error-1` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0; Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0 |

## Finding details

<a id="evidence-error-1"></a>
### Evidence error 1

- specification/digitalassets/resource-manager/Microsoft.DigitalAssets/DigitalAssets: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
      throw er; // Unhandled 'error' event
      ^

Error: read ENOTCONN
    at tryReadStart (node:net:775:20)
    at Socket._read (node:net:790:5)
    at Readable.read (node:internal/streams/readable:741:12)
    at Socket.read (node:net:844:39)
    at new Socket (node:net:500:12)
    at Object.Socket (node:net:365:41)
    at createSocket (node:internal/child_process:337:14)
    at ChildProcess.spawn (node:internal/child_process:475:23)
    at spawn (node:child_process:796:9)
    at execFile (node:child_process:349:17)
Emitted 'error' event on Socket instance at:
    at emitErrorNT (node:internal/streams/destroy:170:8)
    at emitErrorCloseNT (node:internal/streams/destroy:129:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {
  errno: -4053,
  code: 'ENOTCONN',
  syscall: 'read'
}

Node.js v24.16.0; Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
      throw er; // Unhandled 'error' event
      ^

Error: read ENOTCONN
    at tryReadStart (node:net:775:20)
    at Socket._read (node:net:790:5)
    at Readable.read (node:internal/streams/readable:741:12)
    at Socket.read (node:net:844:39)
    at new Socket (node:net:500:12)
    at Object.Socket (node:net:365:41)
    at createSocket (node:internal/child_process:337:14)
    at ChildProcess.spawn (node:internal/child_process:475:23)
    at spawn (node:child_process:796:9)
    at execFile (node:child_process:349:17)
Emitted 'error' event on Socket instance at:
    at emitErrorNT (node:internal/streams/destroy:170:8)
    at emitErrorCloseNT (node:internal/streams/destroy:129:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {
  errno: -4053,
  code: 'ENOTCONN',
  syscall: 'read'
}

Node.js v24.16.0

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
git -C target fetch --no-tags origin 1cda2b81fd9edf14d456494cc782dbe906facfeb 61b45d456a35f01c38a884701a4c5f18f3e68cc4
git -C target checkout --detach 61b45d456a35f01c38a884701a4c5f18f3e68cc4
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/46863' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/digitalassets/resource-manager/Microsoft.DigitalAssets/DigitalAssets

```powershell
Push-Location target
node $prepared.executable 'specification/digitalassets/resource-manager/Microsoft.DigitalAssets/DigitalAssets' --base-ref 1cda2b81fd9edf14d456494cc782dbe906facfeb --phase same-version --json-output '../specification-digitalassets-resource-manager-Microsoft.DigitalAssets-DigitalAssets-phase-a.json' --markdown-output '../specification-digitalassets-resource-manager-Microsoft.DigitalAssets-DigitalAssets-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/digitalassets/resource-manager/Microsoft.DigitalAssets/DigitalAssets' --base-ref 1cda2b81fd9edf14d456494cc782dbe906facfeb --json-output '../specification-digitalassets-resource-manager-Microsoft.DigitalAssets-DigitalAssets-phase-b-evidence.json' --markdown-output '../specification-digitalassets-resource-manager-Microsoft.DigitalAssets-DigitalAssets-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/digitalassets/resource-manager/Microsoft.DigitalAssets/DigitalAssets: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
      throw er; // Unhandled 'error' event
      ^

Error: read ENOTCONN
    at tryReadStart (node:net:775:20)
    at Socket._read (node:net:790:5)
    at Readable.read (node:internal/streams/readable:741:12)
    at Socket.read (node:net:844:39)
    at new Socket (node:net:500:12)
    at Object.Socket (node:net:365:41)
    at createSocket (node:internal/child_process:337:14)
    at ChildProcess.spawn (node:internal/child_process:475:23)
    at spawn (node:child_process:796:9)
    at execFile (node:child_process:349:17)
Emitted 'error' event on Socket instance at:
    at emitErrorNT (node:internal/streams/destroy:170:8)
    at emitErrorCloseNT (node:internal/streams/destroy:129:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {
  errno: -4053,
  code: 'ENOTCONN',
  syscall: 'read'
}

Node.js v24.16.0; Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
      throw er; // Unhandled 'error' event
      ^

Error: read ENOTCONN
    at tryReadStart (node:net:775:20)
    at Socket._read (node:net:790:5)
    at Readable.read (node:internal/streams/readable:741:12)
    at Socket.read (node:net:844:39)
    at new Socket (node:net:500:12)
    at Object.Socket (node:net:365:41)
    at createSocket (node:internal/child_process:337:14)
    at ChildProcess.spawn (node:internal/child_process:475:23)
    at spawn (node:child_process:796:9)
    at execFile (node:child_process:349:17)
Emitted 'error' event on Socket instance at:
    at emitErrorNT (node:internal/streams/destroy:170:8)
    at emitErrorCloseNT (node:internal/streams/destroy:129:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {
  errno: -4053,
  code: 'ENOTCONN',
  syscall: 'read'
}

Node.js v24.16.0
