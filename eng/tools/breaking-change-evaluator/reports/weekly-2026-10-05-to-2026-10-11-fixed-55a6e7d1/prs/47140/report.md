# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-47140:2c38e623d7a77d6c9fcdd89e322e655fe23cbebd`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47140 — Update TypeSpec libraries to latest release versions](http<local-path>)
- **Author:** catalinaperalta
- **State:** closed (merged) at 2026-10-09T00:26:42Z
- **Base:** `main` at `8f99c33c108147fcc716e71a764010084fe5d034`
- **Head:** `update/typespec-release-20261008` at `2c38e623d7a77d6c9fcdd89e322e655fe23cbebd`
- **Changed TypeSpec files:** `specification/ai-foundry/data-plane/Foundry/src/openai/evaluations/user_conversation_simulation.tsp`, `specification/ai-foundry/data-plane/Foundry/src/openai/responses/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/tools/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/voice-agents/agents.tsp`, `specification/ai-foundry/data-plane/Foundry/src/voice-agents/protocol.tsp`, `specification/ai/data-plane/AIAgents/common/models.tsp`, `specification/ai/data-plane/AIAgents/messages/models.tsp`, `specification/ai/data-plane/AIAgents/tools/models.tsp`, `specification/ai/data-plane/AIAgents/tools/tool_resources.tsp`, `specification/ai/data-plane/OpenAIAssistants/common/models.tsp`, `specification/ai/data-plane/OpenAIAssistants/messages/models.tsp`, `specification/ai/data-plane/OpenAIAssistants/tools/models.tsp`, `specification/ai/data-plane/OpenAIAssistants/tools/tool_resources.tsp`, `specification/ai/data-plane/VoiceLive/custom.tsp`, `specification/ai/data-plane/VoiceLive/tools.tsp`, `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule/models.tsp`, `specification/app/data-plane/ContainerApps/models/volumes.tsp`, `specification/batch/resource-manager/Microsoft.Batch/Batch/client.tsp`, `specification/cdn/resource-manager/Microsoft.Cdn/Cdn/models.tsp`, `specification/cognitiveservices/data-plane/OpenAIInference/models/completions/chat_messages.tsp`, `specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry/client.tsp`, `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory/models.tsp`, `specification/edge/resource-manager/Microsoft.Edge/configurationmanager/Job.tsp`, `specification/inferenceservice/data-plane/InferenceService/models.tsp`, `specification/keyvault/data-plane/Administration/common/common.tsp`, `specification/keyvault/data-plane/Certificates/common/common.tsp`, `specification/keyvault/data-plane/Keys/common/common.tsp`, `specification/keyvault/data-plane/Secrets/common/common.tsp`, `specification/keyvault/data-plane/SecurityDomain/common/common.tsp`, `specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/ManagedNetworkFabric/models/NetworkTapRule.tsp`, `specification/maps/data-plane/Weather/models.tsp`, `specification/monitor/resource-manager/Microsoft.Insights/Insights/ScheduledQueryRuleApi/models.tsp`, `specification/orbital/Microsoft.PlanetaryComputer/models.tiler.items.tsp`, `specification/postgresqlhsc/resource-manager/Microsoft.DBforPostgreSQL/PostgresqlHsc/client.tsp`, `specification/search/data-plane/Search/models-knowledgebase.tsp`, `specification/sql/resource-manager/Microsoft.Sql/SQL/client.tsp`, `specification/sql/resource-manager/Microsoft.Sql/SQL/models.tsp`, `specification/storagemover/resource-manager/Microsoft.StorageMover/StorageMover/models.tsp`, `specification/trafficmanager/resource-manager/Microsoft.Network/TrafficManager/client.tsp`

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 51169 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](http<local-path>) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/e732155a29c5c4bf-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/212b30912cebaa97-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/238d555f12827774-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/08262b7ca56f3ab8-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/495bf9259924f532-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/98079a721448fdcf-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/81683101c85cc931-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/0cd08e7a329af42e-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/c1390cc096b8a1ad-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/1baafd192a55a32b-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/68094bb1adfe4a5c-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/78db1e945b4f0532-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/0e1497e46c99294c-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/9795eaaf5a1dc5f2-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/5941c238374d798a-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/75f6b2ce8c51af74-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/b100f387e9559d68-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 54960 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](http<local-path>) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/e732155a29c5c4bf-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/212b30912cebaa97-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/238d555f12827774-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/08262b7ca56f3ab8-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/495bf9259924f532-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/98079a721448fdcf-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/81683101c85cc931-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/0cd08e7a329af42e-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/c1390cc096b8a1ad-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/1baafd192a55a32b-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/68094bb1adfe4a5c-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/78db1e945b4f0532-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/0e1497e46c99294c-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/9795eaaf5a1dc5f2-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/5941c238374d798a-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/75f6b2ce8c51af74-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/b100f387e9559d68-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/ai-foundry/data-plane/Foundry` | Phase A (`same-version`) | Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 68 error(s) found:
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
| `specification/ai-foundry/data-plane/Foundry` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 68 error(s) found:
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
| `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents` | Phase A (`same-version`) | Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 1 error(s) found:
  error file-not-found: File C:<local-path>
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/6785a17fc7f4e719-phase-a.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 1 error(s) found:
  error file-not-found: File C:<local-path>
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/6785a17fc7f4e719-phase-b.md) |
| `specification/ai/data-plane/AIAgents` | Phase A (`same-version`) | `2025-05-01` → `2025-05-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/e732155a29c5c4bf-phase-a.md) |
| `specification/ai/data-plane/AIAgents` | Phase A (`same-version`) | `v1` → `v1` | 1 | 0 | [generated Markdown](report-artifacts/typespec/e732155a29c5c4bf-phase-a.md) |
| `specification/ai/data-plane/AIAgents` | Phase A (`same-version`) | `2025-05-15-preview` → `2025-05-15-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/e732155a29c5c4bf-phase-a.md) |
| `specification/ai/data-plane/OpenAIAssistants` | Phase A (`same-version`) | Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Available tests: [type()].
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/cb10c910882d9cf2-phase-a.md) |
| `specification/ai/data-plane/OpenAIAssistants` | Phase B (`cross-version`) | Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Available tests: [type()].
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/cb10c910882d9cf2-phase-b.md) |
| `specification/ai/data-plane/VoiceLive` | Phase A (`same-version`) | `2025-10-01` → `2025-10-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/212b30912cebaa97-phase-a.md) |
| `specification/ai/data-plane/VoiceLive` | Phase A (`same-version`) | `2026-01-01-preview` → `2026-01-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/212b30912cebaa97-phase-a.md) |
| `specification/ai/data-plane/VoiceLive` | Phase A (`same-version`) | `2026-04-10` → `2026-04-10` | 1 | 0 | [generated Markdown](report-artifacts/typespec/212b30912cebaa97-phase-a.md) |
| `specification/ai/data-plane/VoiceLive` | Phase A (`same-version`) | `2026-06-01-preview` → `2026-06-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/212b30912cebaa97-phase-a.md) |
| `specification/ai/data-plane/VoiceLive` | Phase A (`same-version`) | `2026-07-15` → `2026-07-15` | 1 | 0 | [generated Markdown](report-artifacts/typespec/212b30912cebaa97-phase-a.md) |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/ad1f04d7c34a28d8-phase-a.md) |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/ad1f04d7c34a28d8-phase-b.md) |
| `specification/app/data-plane/ContainerApps` | Phase A (`same-version`) | `2026-09-01-preview` → `2026-09-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/238d555f12827774-phase-a.md) |
| `specification/batch/resource-manager/Microsoft.Batch/Batch` | Phase A (`same-version`) | `2024-07-01` → `2024-07-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/08262b7ca56f3ab8-phase-a.md) |
| `specification/batch/resource-manager/Microsoft.Batch/Batch` | Phase A (`same-version`) | `2025-06-01` → `2025-06-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/08262b7ca56f3ab8-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2025-06-01` → `2025-06-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2025-09-01-preview` → `2025-09-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2025-12-01` → `2025-12-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2026-04-01-preview` → `2026-04-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2026-07-01` → `2026-07-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cdn/resource-manager/Microsoft.Cdn/Cdn` | Phase A (`same-version`) | `2026-08-01-preview` → `2026-08-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/495bf9259924f532-phase-a.md) |
| `specification/cognitiveservices/data-plane/OpenAIInference` | Phase A (`same-version`) | Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown.
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d702fa6a544136eb-phase-a.md) |
| `specification/cognitiveservices/data-plane/OpenAIInference` | Phase B (`cross-version`) | Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown.
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/d702fa6a544136eb-phase-b.md) |
| `specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/9dc15a9f8aded987-phase-a.md) |
| `specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/9dc15a9f8aded987-phase-b.md) |
| `specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory` | Phase A (`same-version`) | `2018-06-01` → `2018-06-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/98079a721448fdcf-phase-a.md) |
| `specification/edge/resource-manager/Microsoft.Edge/configurationmanager` | Phase A (`same-version`) | `2025-06-01` → `2025-06-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/81683101c85cc931-phase-a.md) |
| `specification/edge/resource-manager/Microsoft.Edge/configurationmanager` | Phase A (`same-version`) | `2025-08-01` → `2025-08-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/81683101c85cc931-phase-a.md) |
| `specification/edge/resource-manager/Microsoft.Edge/configurationmanager` | Phase A (`same-version`) | `2025-08-15-preview` → `2025-08-15-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/81683101c85cc931-phase-a.md) |
| `specification/edge/resource-manager/Microsoft.Edge/configurationmanager` | Phase A (`same-version`) | `2026-03-01` → `2026-03-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/81683101c85cc931-phase-a.md) |
| `specification/edge/resource-manager/Microsoft.Edge/configurationmanager` | Phase A (`same-version`) | `2026-05-01-preview` → `2026-05-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/81683101c85cc931-phase-a.md) |
| `specification/edge/resource-manager/Microsoft.Edge/configurationmanager` | Phase A (`same-version`) | `2026-06-01` → `2026-06-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/81683101c85cc931-phase-a.md) |
| `specification/inferenceservice/data-plane/InferenceService` | Phase A (`same-version`) | `2026-09-01-preview` → `2026-09-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/0cd08e7a329af42e-phase-a.md) |
| `specification/keyvault/data-plane/Administration` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/a21d751936da76e6-phase-a.md) |
| `specification/keyvault/data-plane/Administration` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/a21d751936da76e6-phase-b.md) |
| `specification/keyvault/data-plane/Certificates` | Phase A (`same-version`) | `7.5` → `7.5` | 1 | 0 | [generated Markdown](report-artifacts/typespec/c1390cc096b8a1ad-phase-a.md) |
| `specification/keyvault/data-plane/Certificates` | Phase A (`same-version`) | `7.6-preview.2` → `7.6-preview.2` | 1 | 0 | [generated Markdown](report-artifacts/typespec/c1390cc096b8a1ad-phase-a.md) |
| `specification/keyvault/data-plane/Certificates` | Phase A (`same-version`) | `7.6` → `7.6` | 1 | 0 | [generated Markdown](report-artifacts/typespec/c1390cc096b8a1ad-phase-a.md) |
| `specification/keyvault/data-plane/Certificates` | Phase A (`same-version`) | `2025-06-01-preview` → `2025-06-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/c1390cc096b8a1ad-phase-a.md) |
| `specification/keyvault/data-plane/Certificates` | Phase A (`same-version`) | `2025-07-01` → `2025-07-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/c1390cc096b8a1ad-phase-a.md) |
| `specification/keyvault/data-plane/Certificates` | Phase A (`same-version`) | `2026-01-01-preview` → `2026-01-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/c1390cc096b8a1ad-phase-a.md) |
| `specification/keyvault/data-plane/Certificates` | Phase A (`same-version`) | `2026-03-01-preview` → `2026-03-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/c1390cc096b8a1ad-phase-a.md) |
| `specification/keyvault/data-plane/Certificates` | Phase A (`same-version`) | `2026-05-01-preview` → `2026-05-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/c1390cc096b8a1ad-phase-a.md) |
| `specification/keyvault/data-plane/Certificates` | Phase A (`same-version`) | `2026-07-01-preview` → `2026-07-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/c1390cc096b8a1ad-phase-a.md) |
| `specification/keyvault/data-plane/Keys` | Phase A (`same-version`) | `7.5` → `7.5` | 1 | 0 | [generated Markdown](report-artifacts/typespec/1baafd192a55a32b-phase-a.md) |
| `specification/keyvault/data-plane/Keys` | Phase A (`same-version`) | `7.6-preview.2` → `7.6-preview.2` | 1 | 0 | [generated Markdown](report-artifacts/typespec/1baafd192a55a32b-phase-a.md) |
| `specification/keyvault/data-plane/Keys` | Phase A (`same-version`) | `7.6` → `7.6` | 1 | 0 | [generated Markdown](report-artifacts/typespec/1baafd192a55a32b-phase-a.md) |
| `specification/keyvault/data-plane/Keys` | Phase A (`same-version`) | `2025-06-01-preview` → `2025-06-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/1baafd192a55a32b-phase-a.md) |
| `specification/keyvault/data-plane/Keys` | Phase A (`same-version`) | `2025-07-01` → `2025-07-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/1baafd192a55a32b-phase-a.md) |
| `specification/keyvault/data-plane/Keys` | Phase A (`same-version`) | `2026-01-01-preview` → `2026-01-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/1baafd192a55a32b-phase-a.md) |
| `specification/keyvault/data-plane/Keys` | Phase A (`same-version`) | `2026-03-01-preview` → `2026-03-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/1baafd192a55a32b-phase-a.md) |
| `specification/keyvault/data-plane/Keys` | Phase A (`same-version`) | `2026-05-01-preview` → `2026-05-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/1baafd192a55a32b-phase-a.md) |
| `specification/keyvault/data-plane/Keys` | Phase A (`same-version`) | `2026-07-01-preview` → `2026-07-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/1baafd192a55a32b-phase-a.md) |
| `specification/keyvault/data-plane/Secrets` | Phase A (`same-version`) | `7.5` → `7.5` | 1 | 0 | [generated Markdown](report-artifacts/typespec/68094bb1adfe4a5c-phase-a.md) |
| `specification/keyvault/data-plane/Secrets` | Phase A (`same-version`) | `7.6-preview.2` → `7.6-preview.2` | 1 | 0 | [generated Markdown](report-artifacts/typespec/68094bb1adfe4a5c-phase-a.md) |
| `specification/keyvault/data-plane/Secrets` | Phase A (`same-version`) | `7.6` → `7.6` | 1 | 0 | [generated Markdown](report-artifacts/typespec/68094bb1adfe4a5c-phase-a.md) |
| `specification/keyvault/data-plane/Secrets` | Phase A (`same-version`) | `2025-06-01-preview` → `2025-06-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/68094bb1adfe4a5c-phase-a.md) |
| `specification/keyvault/data-plane/Secrets` | Phase A (`same-version`) | `2025-07-01` → `2025-07-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/68094bb1adfe4a5c-phase-a.md) |
| `specification/keyvault/data-plane/Secrets` | Phase A (`same-version`) | `2026-01-01-preview` → `2026-01-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/68094bb1adfe4a5c-phase-a.md) |
| `specification/keyvault/data-plane/Secrets` | Phase A (`same-version`) | `2026-03-01-preview` → `2026-03-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/68094bb1adfe4a5c-phase-a.md) |
| `specification/keyvault/data-plane/Secrets` | Phase A (`same-version`) | `2026-05-01-preview` → `2026-05-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/68094bb1adfe4a5c-phase-a.md) |
| `specification/keyvault/data-plane/Secrets` | Phase A (`same-version`) | `2026-07-01-preview` → `2026-07-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/68094bb1adfe4a5c-phase-a.md) |
| `specification/keyvault/data-plane/SecurityDomain` | Phase A (`same-version`) | `7.5` → `7.5` | 1 | 0 | [generated Markdown](report-artifacts/typespec/78db1e945b4f0532-phase-a.md) |
| `specification/keyvault/data-plane/SecurityDomain` | Phase A (`same-version`) | `7.6` → `7.6` | 1 | 0 | [generated Markdown](report-artifacts/typespec/78db1e945b4f0532-phase-a.md) |
| `specification/keyvault/data-plane/SecurityDomain` | Phase A (`same-version`) | `2025-06-01-preview` → `2025-06-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/78db1e945b4f0532-phase-a.md) |
| `specification/keyvault/data-plane/SecurityDomain` | Phase A (`same-version`) | `2025-07-01` → `2025-07-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/78db1e945b4f0532-phase-a.md) |
| `specification/keyvault/data-plane/SecurityDomain` | Phase A (`same-version`) | `2026-01-01-preview` → `2026-01-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/78db1e945b4f0532-phase-a.md) |
| `specification/keyvault/data-plane/SecurityDomain` | Phase A (`same-version`) | `2026-03-01-preview` → `2026-03-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/78db1e945b4f0532-phase-a.md) |
| `specification/keyvault/data-plane/SecurityDomain` | Phase A (`same-version`) | `2026-05-01-preview` → `2026-05-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/78db1e945b4f0532-phase-a.md) |
| `specification/keyvault/data-plane/SecurityDomain` | Phase A (`same-version`) | `2026-07-01-preview` → `2026-07-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/78db1e945b4f0532-phase-a.md) |
| `specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/ManagedNetworkFabric` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d67dc1145bddcdca-phase-a.md) |
| `specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/ManagedNetworkFabric` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/d67dc1145bddcdca-phase-b.md) |
| `specification/maps/data-plane/Weather` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c810aaf58ce63042-phase-a.md) |
| `specification/maps/data-plane/Weather` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/c810aaf58ce63042-phase-b.md) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/ScheduledQueryRuleApi` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/58a401887c31eedc-phase-a.md) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights/ScheduledQueryRuleApi` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/58a401887c31eedc-phase-b.md) |
| `specification/orbital/Microsoft.PlanetaryComputer` | Phase A (`same-version`) | `2026-04-15` → `2026-04-15` | 1 | 0 | [generated Markdown](report-artifacts/typespec/0e1497e46c99294c-phase-a.md) |
| `specification/postgresqlhsc/resource-manager/Microsoft.DBforPostgreSQL/PostgresqlHsc` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c9e6c4ded28fabb8-phase-a.md) |
| `specification/postgresqlhsc/resource-manager/Microsoft.DBforPostgreSQL/PostgresqlHsc` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/c9e6c4ded28fabb8-phase-b.md) |
| `specification/search/data-plane/Search` | Phase A (`same-version`) | `2025-11-01-preview` → `2025-11-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/9795eaaf5a1dc5f2-phase-a.md) |
| `specification/search/data-plane/Search` | Phase A (`same-version`) | `2026-04-01` → `2026-04-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/9795eaaf5a1dc5f2-phase-a.md) |
| `specification/search/data-plane/Search` | Phase A (`same-version`) | `2026-05-01-preview` → `2026-05-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/9795eaaf5a1dc5f2-phase-a.md) |
| `specification/search/data-plane/Search` | Phase A (`same-version`) | `2026-08-01-preview` → `2026-08-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/9795eaaf5a1dc5f2-phase-a.md) |
| `specification/sql/resource-manager/Microsoft.Sql/SQL` | Phase A (`same-version`) | `2025-01-01` → `2025-01-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/5941c238374d798a-phase-a.md) |
| `specification/sql/resource-manager/Microsoft.Sql/SQL` | Phase A (`same-version`) | `2025-02-01-preview` → `2025-02-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/5941c238374d798a-phase-a.md) |
| `specification/sql/resource-manager/Microsoft.Sql/SQL` | Phase A (`same-version`) | `2025-08-01-preview` → `2025-08-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/5941c238374d798a-phase-a.md) |
| `specification/sql/resource-manager/Microsoft.Sql/SQL` | Phase A (`same-version`) | `2026-08-01-preview` → `2026-08-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/5941c238374d798a-phase-a.md) |
| `specification/storagemover/resource-manager/Microsoft.StorageMover/StorageMover` | Phase A (`same-version`) | `2024-07-01` → `2024-07-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/75f6b2ce8c51af74-phase-a.md) |
| `specification/storagemover/resource-manager/Microsoft.StorageMover/StorageMover` | Phase A (`same-version`) | `2025-07-01` → `2025-07-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/75f6b2ce8c51af74-phase-a.md) |
| `specification/storagemover/resource-manager/Microsoft.StorageMover/StorageMover` | Phase A (`same-version`) | `2025-08-01` → `2025-08-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/75f6b2ce8c51af74-phase-a.md) |
| `specification/storagemover/resource-manager/Microsoft.StorageMover/StorageMover` | Phase A (`same-version`) | `2025-12-01` → `2025-12-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/75f6b2ce8c51af74-phase-a.md) |
| `specification/storagemover/resource-manager/Microsoft.StorageMover/StorageMover` | Phase A (`same-version`) | `2026-05-01` → `2026-05-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/75f6b2ce8c51af74-phase-a.md) |
| `specification/trafficmanager/resource-manager/Microsoft.Network/TrafficManager` | Phase A (`same-version`) | `2022-04-01` → `2022-04-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/b100f387e9559d68-phase-a.md) |
| `specification/trafficmanager/resource-manager/Microsoft.Network/TrafficManager` | Phase A (`same-version`) | `2026-09-01` → `2026-09-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/b100f387e9559d68-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-compile-runtime-failure-6fd203388bb3b6ad` | A, B | `compile-runtime-failure` | execution-failure | high | generated | 0 |

### issue-compile-runtime-failure-6fd203388bb3b6ad

- **Affected PRs:** #47140
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
  - `execution:execution-error-0` — specification/ai-foundry/data-plane/Foundry: Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 68 error(s) found:
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
; Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 68 error(s) found:
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

  - `execution:execution-error-1` — specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents: Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 1 error(s) found:
  error file-not-found: File C:<local-path>

  - `execution:execution-error-2` — specification/ai/data-plane/OpenAIAssistants: Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Available tests: [type()].
; Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Available tests: [type()].

  - `execution:execution-error-3` — specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-4` — specification/cognitiveservices/data-plane/OpenAIInference: Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown.
; Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown.

  - `execution:execution-error-5` — specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-6` — specification/keyvault/data-plane/Administration: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-7` — specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/ManagedNetworkFabric: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-8` — specification/maps/data-plane/Weather: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-9` — specification/monitor/resource-manager/Microsoft.Insights/Insights/ScheduledQueryRuleApi: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-10` — specification/postgresqlhsc/resource-manager/Microsoft.DBforPostgreSQL/PostgresqlHsc: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-11` — Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 68 error(s) found:
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
; Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 68 error(s) found:
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

  - `execution:execution-error-12` — Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 1 error(s) found:
  error file-not-found: File C:<local-path>

  - `execution:execution-error-13` — Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Available tests: [type()].
; Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Available tests: [type()].

  - `execution:execution-error-14` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-15` — Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown.
; Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown.

  - `execution:execution-error-16` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-17` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-18` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-19` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-20` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-21` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
git -C target fetch --no-tags origin 8f99c33c108147fcc716e71a764010084fe5d034 2c38e623d7a77d6c9fcdd89e322e655fe23cbebd
git -C target checkout --detach 2c38e623d7a77d6c9fcdd89e322e655fe23cbebd
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'http<local-path>' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/ai-foundry/data-plane/Foundry

```powershell
Push-Location target
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-ai-foundry-data-plane-Foundry-phase-a.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-ai-foundry-data-plane-Foundry-phase-b-evidence.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents

```powershell
Push-Location target
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-java-azure-ai-agents-phase-a.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-java-azure-ai-agents-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-java-azure-ai-agents-phase-b-evidence.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-java-azure-ai-agents-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai/data-plane/AIAgents

```powershell
Push-Location target
node $prepared.executable 'specification/ai/data-plane/AIAgents' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-ai-data-plane-AIAgents-phase-a.json' --markdown-output '../specification-ai-data-plane-AIAgents-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai/data-plane/AIAgents' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-ai-data-plane-AIAgents-phase-b-evidence.json' --markdown-output '../specification-ai-data-plane-AIAgents-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai/data-plane/OpenAIAssistants

```powershell
Push-Location target
node $prepared.executable 'specification/ai/data-plane/OpenAIAssistants' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-ai-data-plane-OpenAIAssistants-phase-a.json' --markdown-output '../specification-ai-data-plane-OpenAIAssistants-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai/data-plane/OpenAIAssistants' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-ai-data-plane-OpenAIAssistants-phase-b-evidence.json' --markdown-output '../specification-ai-data-plane-OpenAIAssistants-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai/data-plane/VoiceLive

```powershell
Push-Location target
node $prepared.executable 'specification/ai/data-plane/VoiceLive' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-ai-data-plane-VoiceLive-phase-a.json' --markdown-output '../specification-ai-data-plane-VoiceLive-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai/data-plane/VoiceLive' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-ai-data-plane-VoiceLive-phase-b-evidence.json' --markdown-output '../specification-ai-data-plane-VoiceLive-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule

```powershell
Push-Location target
node $prepared.executable 'specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-PreviewAlertRule-phase-a.json' --markdown-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-PreviewAlertRule-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-PreviewAlertRule-phase-b-evidence.json' --markdown-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-PreviewAlertRule-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/app/data-plane/ContainerApps

```powershell
Push-Location target
node $prepared.executable 'specification/app/data-plane/ContainerApps' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-app-data-plane-ContainerApps-phase-a.json' --markdown-output '../specification-app-data-plane-ContainerApps-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/app/data-plane/ContainerApps' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-app-data-plane-ContainerApps-phase-b-evidence.json' --markdown-output '../specification-app-data-plane-ContainerApps-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/batch/resource-manager/Microsoft.Batch/Batch

```powershell
Push-Location target
node $prepared.executable 'specification/batch/resource-manager/Microsoft.Batch/Batch' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-batch-resource-manager-Microsoft.Batch-Batch-phase-a.json' --markdown-output '../specification-batch-resource-manager-Microsoft.Batch-Batch-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/batch/resource-manager/Microsoft.Batch/Batch' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-batch-resource-manager-Microsoft.Batch-Batch-phase-b-evidence.json' --markdown-output '../specification-batch-resource-manager-Microsoft.Batch-Batch-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/cdn/resource-manager/Microsoft.Cdn/Cdn

```powershell
Push-Location target
node $prepared.executable 'specification/cdn/resource-manager/Microsoft.Cdn/Cdn' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-cdn-resource-manager-Microsoft.Cdn-Cdn-phase-a.json' --markdown-output '../specification-cdn-resource-manager-Microsoft.Cdn-Cdn-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/cdn/resource-manager/Microsoft.Cdn/Cdn' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-cdn-resource-manager-Microsoft.Cdn-Cdn-phase-b-evidence.json' --markdown-output '../specification-cdn-resource-manager-Microsoft.Cdn-Cdn-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/cognitiveservices/data-plane/OpenAIInference

```powershell
Push-Location target
node $prepared.executable 'specification/cognitiveservices/data-plane/OpenAIInference' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-cognitiveservices-data-plane-OpenAIInference-phase-a.json' --markdown-output '../specification-cognitiveservices-data-plane-OpenAIInference-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/cognitiveservices/data-plane/OpenAIInference' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-cognitiveservices-data-plane-OpenAIInference-phase-b-evidence.json' --markdown-output '../specification-cognitiveservices-data-plane-OpenAIInference-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry

```powershell
Push-Location target
node $prepared.executable 'specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-containerregistry-resource-manager-Microsoft.ContainerRegistry-Registry-phase-a.json' --markdown-output '../specification-containerregistry-resource-manager-Microsoft.ContainerRegistry-Registry-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-containerregistry-resource-manager-Microsoft.ContainerRegistry-Registry-phase-b-evidence.json' --markdown-output '../specification-containerregistry-resource-manager-Microsoft.ContainerRegistry-Registry-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory

```powershell
Push-Location target
node $prepared.executable 'specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-datafactory-resource-manager-Microsoft.DataFactory-DataFactory-phase-a.json' --markdown-output '../specification-datafactory-resource-manager-Microsoft.DataFactory-DataFactory-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/datafactory/resource-manager/Microsoft.DataFactory/DataFactory' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-datafactory-resource-manager-Microsoft.DataFactory-DataFactory-phase-b-evidence.json' --markdown-output '../specification-datafactory-resource-manager-Microsoft.DataFactory-DataFactory-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/edge/resource-manager/Microsoft.Edge/configurationmanager

```powershell
Push-Location target
node $prepared.executable 'specification/edge/resource-manager/Microsoft.Edge/configurationmanager' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-edge-resource-manager-Microsoft.Edge-configurationmanager-phase-a.json' --markdown-output '../specification-edge-resource-manager-Microsoft.Edge-configurationmanager-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/edge/resource-manager/Microsoft.Edge/configurationmanager' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-edge-resource-manager-Microsoft.Edge-configurationmanager-phase-b-evidence.json' --markdown-output '../specification-edge-resource-manager-Microsoft.Edge-configurationmanager-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/inferenceservice/data-plane/InferenceService

```powershell
Push-Location target
node $prepared.executable 'specification/inferenceservice/data-plane/InferenceService' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-inferenceservice-data-plane-InferenceService-phase-a.json' --markdown-output '../specification-inferenceservice-data-plane-InferenceService-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/inferenceservice/data-plane/InferenceService' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-inferenceservice-data-plane-InferenceService-phase-b-evidence.json' --markdown-output '../specification-inferenceservice-data-plane-InferenceService-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/keyvault/data-plane/Administration

```powershell
Push-Location target
node $prepared.executable 'specification/keyvault/data-plane/Administration' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-keyvault-data-plane-Administration-phase-a.json' --markdown-output '../specification-keyvault-data-plane-Administration-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/keyvault/data-plane/Administration' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-keyvault-data-plane-Administration-phase-b-evidence.json' --markdown-output '../specification-keyvault-data-plane-Administration-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/keyvault/data-plane/Certificates

```powershell
Push-Location target
node $prepared.executable 'specification/keyvault/data-plane/Certificates' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-keyvault-data-plane-Certificates-phase-a.json' --markdown-output '../specification-keyvault-data-plane-Certificates-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/keyvault/data-plane/Certificates' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-keyvault-data-plane-Certificates-phase-b-evidence.json' --markdown-output '../specification-keyvault-data-plane-Certificates-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/keyvault/data-plane/Keys

```powershell
Push-Location target
node $prepared.executable 'specification/keyvault/data-plane/Keys' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-keyvault-data-plane-Keys-phase-a.json' --markdown-output '../specification-keyvault-data-plane-Keys-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/keyvault/data-plane/Keys' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-keyvault-data-plane-Keys-phase-b-evidence.json' --markdown-output '../specification-keyvault-data-plane-Keys-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/keyvault/data-plane/Secrets

```powershell
Push-Location target
node $prepared.executable 'specification/keyvault/data-plane/Secrets' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-keyvault-data-plane-Secrets-phase-a.json' --markdown-output '../specification-keyvault-data-plane-Secrets-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/keyvault/data-plane/Secrets' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-keyvault-data-plane-Secrets-phase-b-evidence.json' --markdown-output '../specification-keyvault-data-plane-Secrets-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/keyvault/data-plane/SecurityDomain

```powershell
Push-Location target
node $prepared.executable 'specification/keyvault/data-plane/SecurityDomain' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-keyvault-data-plane-SecurityDomain-phase-a.json' --markdown-output '../specification-keyvault-data-plane-SecurityDomain-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/keyvault/data-plane/SecurityDomain' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-keyvault-data-plane-SecurityDomain-phase-b-evidence.json' --markdown-output '../specification-keyvault-data-plane-SecurityDomain-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/ManagedNetworkFabric

```powershell
Push-Location target
node $prepared.executable 'specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/ManagedNetworkFabric' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-managednetworkfabric-resource-manager-Microsoft.ManagedNetworkFabric-ManagedNetworkFabric-phase-a.json' --markdown-output '../specification-managednetworkfabric-resource-manager-Microsoft.ManagedNetworkFabric-ManagedNetworkFabric-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/ManagedNetworkFabric' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-managednetworkfabric-resource-manager-Microsoft.ManagedNetworkFabric-ManagedNetworkFabric-phase-b-evidence.json' --markdown-output '../specification-managednetworkfabric-resource-manager-Microsoft.ManagedNetworkFabric-ManagedNetworkFabric-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/maps/data-plane/Weather

```powershell
Push-Location target
node $prepared.executable 'specification/maps/data-plane/Weather' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-maps-data-plane-Weather-phase-a.json' --markdown-output '../specification-maps-data-plane-Weather-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/maps/data-plane/Weather' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-maps-data-plane-Weather-phase-b-evidence.json' --markdown-output '../specification-maps-data-plane-Weather-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/monitor/resource-manager/Microsoft.Insights/Insights/ScheduledQueryRuleApi

```powershell
Push-Location target
node $prepared.executable 'specification/monitor/resource-manager/Microsoft.Insights/Insights/ScheduledQueryRuleApi' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-monitor-resource-manager-Microsoft.Insights-Insights-ScheduledQueryRuleApi-phase-a.json' --markdown-output '../specification-monitor-resource-manager-Microsoft.Insights-Insights-ScheduledQueryRuleApi-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/monitor/resource-manager/Microsoft.Insights/Insights/ScheduledQueryRuleApi' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-monitor-resource-manager-Microsoft.Insights-Insights-ScheduledQueryRuleApi-phase-b-evidence.json' --markdown-output '../specification-monitor-resource-manager-Microsoft.Insights-Insights-ScheduledQueryRuleApi-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/orbital/Microsoft.PlanetaryComputer

```powershell
Push-Location target
node $prepared.executable 'specification/orbital/Microsoft.PlanetaryComputer' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-orbital-Microsoft.PlanetaryComputer-phase-a.json' --markdown-output '../specification-orbital-Microsoft.PlanetaryComputer-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/orbital/Microsoft.PlanetaryComputer' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-orbital-Microsoft.PlanetaryComputer-phase-b-evidence.json' --markdown-output '../specification-orbital-Microsoft.PlanetaryComputer-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/postgresqlhsc/resource-manager/Microsoft.DBforPostgreSQL/PostgresqlHsc

```powershell
Push-Location target
node $prepared.executable 'specification/postgresqlhsc/resource-manager/Microsoft.DBforPostgreSQL/PostgresqlHsc' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-postgresqlhsc-resource-manager-Microsoft.DBforPostgreSQL-PostgresqlHsc-phase-a.json' --markdown-output '../specification-postgresqlhsc-resource-manager-Microsoft.DBforPostgreSQL-PostgresqlHsc-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/postgresqlhsc/resource-manager/Microsoft.DBforPostgreSQL/PostgresqlHsc' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-postgresqlhsc-resource-manager-Microsoft.DBforPostgreSQL-PostgresqlHsc-phase-b-evidence.json' --markdown-output '../specification-postgresqlhsc-resource-manager-Microsoft.DBforPostgreSQL-PostgresqlHsc-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/search/data-plane/Search

```powershell
Push-Location target
node $prepared.executable 'specification/search/data-plane/Search' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-search-data-plane-Search-phase-a.json' --markdown-output '../specification-search-data-plane-Search-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/search/data-plane/Search' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-search-data-plane-Search-phase-b-evidence.json' --markdown-output '../specification-search-data-plane-Search-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/sql/resource-manager/Microsoft.Sql/SQL

```powershell
Push-Location target
node $prepared.executable 'specification/sql/resource-manager/Microsoft.Sql/SQL' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-sql-resource-manager-Microsoft.Sql-SQL-phase-a.json' --markdown-output '../specification-sql-resource-manager-Microsoft.Sql-SQL-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/sql/resource-manager/Microsoft.Sql/SQL' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-sql-resource-manager-Microsoft.Sql-SQL-phase-b-evidence.json' --markdown-output '../specification-sql-resource-manager-Microsoft.Sql-SQL-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/storagemover/resource-manager/Microsoft.StorageMover/StorageMover

```powershell
Push-Location target
node $prepared.executable 'specification/storagemover/resource-manager/Microsoft.StorageMover/StorageMover' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-storagemover-resource-manager-Microsoft.StorageMover-StorageMover-phase-a.json' --markdown-output '../specification-storagemover-resource-manager-Microsoft.StorageMover-StorageMover-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/storagemover/resource-manager/Microsoft.StorageMover/StorageMover' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-storagemover-resource-manager-Microsoft.StorageMover-StorageMover-phase-b-evidence.json' --markdown-output '../specification-storagemover-resource-manager-Microsoft.StorageMover-StorageMover-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/trafficmanager/resource-manager/Microsoft.Network/TrafficManager

```powershell
Push-Location target
node $prepared.executable 'specification/trafficmanager/resource-manager/Microsoft.Network/TrafficManager' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --phase same-version --json-output '../specification-trafficmanager-resource-manager-Microsoft.Network-TrafficManager-phase-a.json' --markdown-output '../specification-trafficmanager-resource-manager-Microsoft.Network-TrafficManager-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/trafficmanager/resource-manager/Microsoft.Network/TrafficManager' --base-ref 8f99c33c108147fcc716e71a764010084fe5d034 --json-output '../specification-trafficmanager-resource-manager-Microsoft.Network-TrafficManager-phase-b-evidence.json' --markdown-output '../specification-trafficmanager-resource-manager-Microsoft.Network-TrafficManager-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/ai-foundry/data-plane/Foundry: Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 68 error(s) found:
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
; Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 68 error(s) found:
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

- specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents: Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (8f99c33c108147fcc716e71a764010084fe5d034): 1 error(s) found:
  error file-not-found: File C:<local-path>

- specification/ai/data-plane/OpenAIAssistants: Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Available tests: [type()].
; Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Available tests: [type()].

- specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/cognitiveservices/data-plane/OpenAIInference: Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown.
; Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown.

- specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/keyvault/data-plane/Administration: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/ManagedNetworkFabric: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/maps/data-plane/Weather: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/monitor/resource-manager/Microsoft.Insights/Insights/ScheduledQueryRuleApi: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/postgresqlhsc/resource-manager/Microsoft.DBforPostgreSQL/PostgresqlHsc: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
