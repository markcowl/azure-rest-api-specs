# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-46391:936d3225f025701f4685737c2b082778a4bbc722`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46391 — Adding ObservabilityConfiguration API specs to ALDO EdgeOperator RP.](https://github.com/Azure/azure-rest-api-specs/pull/46391)
- **Author:** kleyvaortega
- **State:** closed (merged) at 2026-10-09T17:29:22Z
- **Base:** `main` at `8d7b6b37fab6d5f417ee9008387defb631db1502`
- **Head:** `users/kleyvaortega/observabilityConfiguration` at `936d3225f025701f4685737c2b082778a4bbc722`
- **Changed TypeSpec files:** `specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration/main.tsp`, `specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration/observabilityConfiguration.tsp`, `specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration/tspconfig.yaml`

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37036752007) (no detector timing emitted) |
| B | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37036751933) (no detector timing emitted) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/3d51d3b0941d0f5f-phase-a.md) |
| `specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/3d51d3b0941d0f5f-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-compile-runtime-failure-639a9d7bedb9c74e` | A, B | `compile-runtime-failure` | execution-failure | high | generated | 0 |

### issue-compile-runtime-failure-639a9d7bedb9c74e

- **Affected PRs:** #46391
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
  - `execution:execution-error-0` — specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-1` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
git -C target fetch --no-tags origin 8d7b6b37fab6d5f417ee9008387defb631db1502 936d3225f025701f4685737c2b082778a4bbc722
git -C target checkout --detach 936d3225f025701f4685737c2b082778a4bbc722
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/46391' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration

```powershell
Push-Location target
node $prepared.executable 'specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration' --base-ref 8d7b6b37fab6d5f417ee9008387defb631db1502 --phase same-version --json-output '../specification-edgeoperator-resource-manager-Microsoft.EdgeOperator-ObservabilityConfiguration-phase-a.json' --markdown-output '../specification-edgeoperator-resource-manager-Microsoft.EdgeOperator-ObservabilityConfiguration-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration' --base-ref 8d7b6b37fab6d5f417ee9008387defb631db1502 --json-output '../specification-edgeoperator-resource-manager-Microsoft.EdgeOperator-ObservabilityConfiguration-phase-b-evidence.json' --markdown-output '../specification-edgeoperator-resource-manager-Microsoft.EdgeOperator-ObservabilityConfiguration-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/edgeoperator/resource-manager/Microsoft.EdgeOperator/ObservabilityConfiguration: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
