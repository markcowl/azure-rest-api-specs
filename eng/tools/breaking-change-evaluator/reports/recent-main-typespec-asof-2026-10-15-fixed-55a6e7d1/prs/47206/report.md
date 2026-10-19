# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47206:5b55ea4d7c1a18676f3f84011aef76f45a535393`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47206 — Mid October release train](https://github.com/Azure/azure-rest-api-specs/pull/47206)
- **Author:** glecaros
- **State:** open
- **Base:** `main` at `56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f`
- **Head:** `foundry/snap-12102026` at `5b55ea4d7c1a18676f3f84011aef76f45a535393`
- **Changed TypeSpec files:** `specification/ai-foundry/data-plane/Foundry/main.tsp`, `specification/ai-foundry/data-plane/Foundry/src/agents/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/common/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/common/servicepatterns.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents/tspconfig.yaml`, `specification/ai-foundry/data-plane/Foundry/src/sdk-python-azure-ai-finetuningsessions/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-python-azure-ai-finetuningsessions/tspconfig.yaml`, `specification/ai-foundry/data-plane/Foundry/src/session-finetuning/models-custom-code.tsp`, `specification/ai-foundry/data-plane/Foundry/src/session-finetuning/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/session-finetuning/routes.tsp`, `specification/ai-foundry/data-plane/Foundry/src/voice-agents/agents.tsp`, `specification/ai-foundry/data-plane/Foundry/src/voice-agents/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/voice-agents/protocol.tsp`

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
| — | Report execution | specification/ai-foundry/data-plane/Foundry: Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 68 error(s) found:   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path> ; Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 68 error(s) found:   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path> | [workflow 38610212882](https://github.com/Azure/azure-rest-api-specs/actions/runs/38610212882) · [workflow 38610213160](https://github.com/Azure/azure-rest-api-specs/actions/runs/38610213160) | Comparison is incomplete; do not treat absent findings as detector agreement. | [details](#evidence-error-1) |
| — | Report execution | specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects: Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:   error file-not-found: File C:<local-path> ; Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:   error file-not-found: File C:<local-path> | [workflow 38610212882](https://github.com/Azure/azure-rest-api-specs/actions/runs/38610212882) · [workflow 38610213160](https://github.com/Azure/azure-rest-api-specs/actions/runs/38610213160) | Comparison is incomplete; do not treat absent findings as detector agreement. | [details](#evidence-error-2) |
| — | Report execution | specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0; Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0 | [workflow 38610212882](https://github.com/Azure/azure-rest-api-specs/actions/runs/38610212882) · [workflow 38610213160](https://github.com/Azure/azure-rest-api-specs/actions/runs/38610213160) | Comparison is incomplete; do not treat absent findings as detector agreement. | [details](#evidence-error-3) |
| — | Report execution | specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents: Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:   error file-not-found: File C:<local-path> ; Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:   error file-not-found: File C:<local-path> | [workflow 38610212882](https://github.com/Azure/azure-rest-api-specs/actions/runs/38610212882) · [workflow 38610213160](https://github.com/Azure/azure-rest-api-specs/actions/runs/38610213160) | Comparison is incomplete; do not treat absent findings as detector agreement. | [details](#evidence-error-4) |
| — | Report execution | specification/ai-foundry/data-plane/Foundry/src/sdk-python-azure-ai-finetuningsessions: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0; Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0 | [workflow 38610212882](https://github.com/Azure/azure-rest-api-specs/actions/runs/38610212882) · [workflow 38610213160](https://github.com/Azure/azure-rest-api-specs/actions/runs/38610213160) | Comparison is incomplete; do not treat absent findings as detector agreement. | [details](#evidence-error-5) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38610212882) (no detector timing emitted) |
| B | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38610213160) (no detector timing emitted) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/ai-foundry/data-plane/Foundry` | Phase A (`same-version`) | Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 68 error(s) found:
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/e39fe65fa69c8b0b-phase-a.md) |
| `specification/ai-foundry/data-plane/Foundry` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 68 error(s) found:
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/e39fe65fa69c8b0b-phase-b.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects` | Phase A (`same-version`) | Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:
  error file-not-found: File C:<local-path>
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/1ea2b7b8c6b8311f-phase-a.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:
  error file-not-found: File C:<local-path>
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/1ea2b7b8c6b8311f-phase-b.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/98dcbc4309d0cfb2-phase-a.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/98dcbc4309d0cfb2-phase-b.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents` | Phase A (`same-version`) | Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:
  error file-not-found: File C:<local-path>
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/6785a17fc7f4e719-phase-a.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:
  error file-not-found: File C:<local-path>
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/6785a17fc7f4e719-phase-b.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-python-azure-ai-finetuningsessions` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/5445861b1e58f7a5-phase-a.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-python-azure-ai-finetuningsessions` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/5445861b1e58f7a5-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Analysis | Suggested fix | Confidence / status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-compile-runtime-failure-1cabddeaefbefe0c"></a>`issue-compile-runtime-failure-1cabddeaefbefe0c` | A, B | `compile-runtime-failure` | execution-failure | One or more evaluator, compile, or analyzer executions failed. Preserves a partial or failed outcome instead of success-shaped metrics. | Resolve the recorded execution error and rerun the same immutable input. | high; generated | `execution:execution-error-0` — specification/ai-foundry/data-plane/Foundry: Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 68 error(s) found:   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path> ; Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 68 error(s) found:   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path> <br>`execution:execution-error-1` — specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects: Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:   error file-not-found: File C:<local-path> ; Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:   error file-not-found: File C:<local-path> <br>`execution:execution-error-2` — specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0; Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0<br>`execution:execution-error-3` — specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents: Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:   error file-not-found: File C:<local-path> ; Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:   error file-not-found: File C:<local-path> <br>`execution:execution-error-4` — specification/ai-foundry/data-plane/Foundry/src/sdk-python-azure-ai-finetuningsessions: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0; Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0<br>`execution:execution-error-5` — Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 68 error(s) found:   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path> ; Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 68 error(s) found:   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path>'t have member Experimental   C:<local-path>   C:<local-path>   C:<local-path>   C:<local-path> <br>`execution:execution-error-6` — Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:   error file-not-found: File C:<local-path> ; Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:   error file-not-found: File C:<local-path> <br>`execution:execution-error-7` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0; Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0<br>`execution:execution-error-8` — Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:   error file-not-found: File C:<local-path> ; Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:   error file-not-found: File C:<local-path> <br>`execution:execution-error-9` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0; Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487       throw er; // Unhandled 'error' event       ^  Error: read ENOTCONN     at tryReadStart (node:net:775:20)     at Socket._read (node:net:790:5)     at Readable.read (node:internal/streams/readable:741:12)     at Socket.read (node:net:844:39)     at new Socket (node:net:500:12)     at Object.Socket (node:net:365:41)     at createSocket (node:internal/child_process:337:14)     at ChildProcess.spawn (node:internal/child_process:475:23)     at spawn (node:child_process:796:9)     at execFile (node:child_process:349:17) Emitted 'error' event on Socket instance at:     at emitErrorNT (node:internal/streams/destroy:170:8)     at emitErrorCloseNT (node:internal/streams/destroy:129:3)     at process.processTicksAndRejections (node:internal/process/task_queues:90:21) {   errno: -4053,   code: 'ENOTCONN',   syscall: 'read' }  Node.js v24.16.0 |

## Finding details

<a id="evidence-error-1"></a>
### Evidence error 1

- specification/ai-foundry/data-plane/Foundry: Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 68 error(s) found:
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
; Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 68 error(s) found:
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>


<a id="evidence-error-2"></a>
### Evidence error 2

- specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects: Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:
  error file-not-found: File C:<local-path>


<a id="evidence-error-3"></a>
### Evidence error 3

- specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

<a id="evidence-error-4"></a>
### Evidence error 4

- specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents: Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:
  error file-not-found: File C:<local-path>


<a id="evidence-error-5"></a>
### Evidence error 5

- specification/ai-foundry/data-plane/Foundry/src/sdk-python-azure-ai-finetuningsessions: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
git -C target fetch --no-tags origin 56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f 5b55ea4d7c1a18676f3f84011aef76f45a535393
git -C target checkout --detach 5b55ea4d7c1a18676f3f84011aef76f45a535393
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47206' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/ai-foundry/data-plane/Foundry

```powershell
Push-Location target
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry' --base-ref 56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f --phase same-version --json-output '../specification-ai-foundry-data-plane-Foundry-phase-a.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry' --base-ref 56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f --json-output '../specification-ai-foundry-data-plane-Foundry-phase-b-evidence.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects

```powershell
Push-Location target
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects' --base-ref 56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f --phase same-version --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-projects-phase-a.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-projects-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects' --base-ref 56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-projects-phase-b-evidence.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-projects-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents

```powershell
Push-Location target
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents' --base-ref 56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f --phase same-version --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-projects-agents-phase-a.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-projects-agents-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents' --base-ref 56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-projects-agents-phase-b-evidence.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-projects-agents-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents

```powershell
Push-Location target
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents' --base-ref 56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f --phase same-version --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-java-azure-ai-agents-phase-a.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-java-azure-ai-agents-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents' --base-ref 56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-java-azure-ai-agents-phase-b-evidence.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-java-azure-ai-agents-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai-foundry/data-plane/Foundry/src/sdk-python-azure-ai-finetuningsessions

```powershell
Push-Location target
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-python-azure-ai-finetuningsessions' --base-ref 56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f --phase same-version --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-python-azure-ai-finetuningsessions-phase-a.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-python-azure-ai-finetuningsessions-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-python-azure-ai-finetuningsessions' --base-ref 56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-python-azure-ai-finetuningsessions-phase-b-evidence.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-python-azure-ai-finetuningsessions-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/ai-foundry/data-plane/Foundry: Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 68 error(s) found:
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
; Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 68 error(s) found:
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>'t have member Experimental
  C:<local-path>
  C:<local-path>
  C:<local-path>
  C:<local-path>

- specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects: Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:
  error file-not-found: File C:<local-path>

- specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents: Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (56b13af91ff8d8b5ad706a502e6b4e44e6d57e1f): 1 error(s) found:
  error file-not-found: File C:<local-path>

- specification/ai-foundry/data-plane/Foundry/src/sdk-python-azure-ai-finetuningsessions: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
