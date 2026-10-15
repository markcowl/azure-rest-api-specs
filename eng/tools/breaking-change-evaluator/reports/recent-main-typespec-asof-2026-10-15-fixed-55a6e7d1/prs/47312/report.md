# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47312:3e6e64bb3ce0338733986ec368dd4c351c8ed92a`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47312 — Revert "Add repository-owned TypeSpec linter rulesets"](https://github.com/Azure/azure-rest-api-specs/pull/47312)
- **Author:** catalinaperalta
- **State:** closed (merged) at 2026-10-15T01:44:51Z
- **Base:** `main` at `fcc20ab8473a30946221a1b876c89aa9f61447b9`
- **Head:** `catalinaperalta/revert-specs-repo-linter-rulesets` at `3e6e64bb3ce0338733986ec368dd4c351c8ed92a`
- **Changed TypeSpec files:** `specification/advisor/resource-manager/Microsoft.Advisor/Advisor/tspconfig.yaml`, `specification/agricultureplatform/AgriculturePlatform.Management/tspconfig.yaml`, `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-agent-contracts/tspconfig.yaml`, `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-extensions-openai/tspconfig.yaml`, `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents/tspconfig.yaml`, `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects/tspconfig.yaml`, `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents/tspconfig.yaml`, `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-projects/tspconfig.yaml`, `specification/ai-foundry/data-plane/Foundry/src/sdk-python-js-azure-ai-projects/tspconfig.yaml`, `specification/ai-foundry/data-plane/Foundry/tspconfig.yaml`, `specification/ai/data-plane/AIAgents/tspconfig.yaml`, `specification/ai/data-plane/ContentUnderstanding/tspconfig.yaml`, `specification/ai/data-plane/DocumentIntelligence/tspconfig.yaml`, `specification/ai/data-plane/Face/tspconfig.yaml`, `specification/ai/data-plane/HealthInsights/RadiologyInsights/tspconfig.yaml`, `specification/ai/data-plane/HealthInsights/tspconfig.yaml`, `specification/ai/data-plane/ImageAnalysis/tspconfig.yaml`, `specification/ai/data-plane/ModelInference/tspconfig.yaml`, `specification/ai/data-plane/OpenAIAssistants/tspconfig.yaml`, `specification/ai/data-plane/VoiceLive/tspconfig.yaml`, `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertProcessingRules/tspconfig.yaml`, `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertRuleRecommendations/tspconfig.yaml`, `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertsManagement/tspconfig.yaml`, `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule/tspconfig.yaml`, `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PrometheusRuleGroups/tspconfig.yaml`, `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/TenantActivityLogAlerts/tspconfig.yaml`, `specification/anyscale/resource-manager/Anyscale.Platform/platform/tspconfig.yaml`, `specification/apicenter/data-plane/ApiCenter/tspconfig.yaml`, `specification/apicenter/resource-manager/Microsoft.ApiCenter/ApiCenter/tspconfig.yaml`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway/tspconfig.yaml`, `specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement/tspconfig.yaml`, `specification/app/data-plane/ContainerApps/tspconfig.yaml`, `specification/app/data-plane/DynamicSessions/tspconfig.yaml`, `specification/app/resource-manager/Microsoft.App/ContainerApps/tspconfig.yaml`, `specification/app/resource-manager/Microsoft.App/SreAgent/tspconfig.yaml`, `specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/AppComplianceAutomation/tspconfig.yaml`, `specification/appconfiguration/data-plane/AppConfiguration/tspconfig.yaml`, `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration/tspconfig.yaml`, `specification/applicationinsights/data-plane/Exporters/tspconfig.yaml`, `specification/applicationinsights/data-plane/LiveMetrics/tspconfig.yaml`, `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/AnalyticsItems/tspconfig.yaml`, `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentAPIs/tspconfig.yaml`, `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentLinkedStorageAccountApi/tspconfig.yaml`, `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Components/tspconfig.yaml`, `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/DeletedWorkbookApi/tspconfig.yaml`, `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Favorites/tspconfig.yaml`, `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/LiveTokenApi/tspconfig.yaml`, `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation/tspconfig.yaml`, `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestsApi/tspconfig.yaml`, `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkBookOperations/tspconfig.yaml`, `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbookTemplatesApi/tspconfig.yaml`, `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbooksApi/tspconfig.yaml`, `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/tspconfig.yaml`, `specification/applink/AppLink.Management/tspconfig.yaml`, `specification/artifactsigning/data-plane/ArtifactSigning/tspconfig.yaml`, `specification/attestation/data-plane/Attestation/tspconfig.yaml`, `specification/attestation/resource-manager/Microsoft.Attestation/Attestation/tspconfig.yaml`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AccessReview/tspconfig.yaml`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AttributeNamespaces/tspconfig.yaml`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/Authorization/tspconfig.yaml`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ClassicAdmin/tspconfig.yaml`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment/tspconfig.yaml`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess/tspconfig.yaml`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ProviderOperations/tspconfig.yaml`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment/tspconfig.yaml`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleDefinitions/tspconfig.yaml`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleManagementAlerts/tspconfig.yaml`, `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/tspconfig.yaml`, `specification/automation/resource-manager/Microsoft.Automation/Automation/tspconfig.yaml`, `specification/awsconnector/AccessAnalyzerAnalyzer.Management/tspconfig.yaml`, `specification/awsconnector/AcmCertificateSummary.Management/tspconfig.yaml`, `specification/awsconnector/ApiGatewayRestApi.Management/tspconfig.yaml`, `specification/awsconnector/ApiGatewayStage.Management/tspconfig.yaml`, `specification/awsconnector/AppSyncGraphqlApi.Management/tspconfig.yaml`, `specification/awsconnector/AutoScalingAutoScalingGroup.Management/tspconfig.yaml`, `specification/awsconnector/Awsconnector.Management/tspconfig.yaml`, `specification/awsconnector/CloudFormationStack.Management/tspconfig.yaml`, `specification/awsconnector/CloudFormationStackSet.Management/tspconfig.yaml`, `specification/awsconnector/CloudFrontDistribution.Management/tspconfig.yaml`, `specification/awsconnector/CloudTrailTrail.Management/tspconfig.yaml`, `specification/awsconnector/CloudWatchAlarm.Management/tspconfig.yaml`, `specification/awsconnector/CodeBuildProject.Management/tspconfig.yaml`

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 23001 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38664554638) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/5baaf2e7bf97eddd-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/e732155a29c5c4bf-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/7e43853ad5862fdc-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/9b11485d3c17e2a4-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/8b2771471dd760e3-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/c8721b421cfed3e2-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/d32c0924ad19fb99-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/212b30912cebaa97-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/c4df7aaa45b33f20-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/049cfb872340c5a5-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/238d555f12827774-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/eb99d1ae1464875a-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/02655bc5ca606e0a-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/e4710c1d9b752a67-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/5cb6aa63c5a9e92b-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/64d8953f960e8a74-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/49581f50dce3daa6-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/bb2ed84ef17ef9d1-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 23264 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38664554430) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/5baaf2e7bf97eddd-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/e732155a29c5c4bf-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/7e43853ad5862fdc-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/9b11485d3c17e2a4-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/8b2771471dd760e3-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/c8721b421cfed3e2-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/d32c0924ad19fb99-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/212b30912cebaa97-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/c4df7aaa45b33f20-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/049cfb872340c5a5-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/238d555f12827774-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/eb99d1ae1464875a-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/02655bc5ca606e0a-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/e4710c1d9b752a67-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/5cb6aa63c5a9e92b-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/64d8953f960e8a74-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/49581f50dce3daa6-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/bb2ed84ef17ef9d1-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/advisor/resource-manager/Microsoft.Advisor/Advisor` | Phase A (`same-version`) | `2025-05-01-preview` → `2025-05-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/5baaf2e7bf97eddd-phase-a.md) |
| `specification/advisor/resource-manager/Microsoft.Advisor/Advisor` | Phase A (`same-version`) | `2026-02-01-preview` → `2026-02-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/5baaf2e7bf97eddd-phase-a.md) |
| `specification/advisor/resource-manager/Microsoft.Advisor/Advisor` | Phase A (`same-version`) | `2026-03-01-preview` → `2026-03-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/5baaf2e7bf97eddd-phase-a.md) |
| `specification/advisor/resource-manager/Microsoft.Advisor/Advisor` | Phase A (`same-version`) | `2026-08-01-preview` → `2026-08-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/5baaf2e7bf97eddd-phase-a.md) |
| `specification/agricultureplatform/AgriculturePlatform.Management` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/9bf0c335e53b195c-phase-a.md) |
| `specification/agricultureplatform/AgriculturePlatform.Management` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/9bf0c335e53b195c-phase-b.md) |
| `specification/ai-foundry/data-plane/Foundry` | Phase A (`same-version`) | Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 68 error(s) found:
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
| `specification/ai-foundry/data-plane/Foundry` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 68 error(s) found:
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
| `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-agent-contracts` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/4de4b53faa1c6682-phase-a.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-agent-contracts` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/4de4b53faa1c6682-phase-b.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-extensions-openai` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/21cc4a716d4e756c-phase-a.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-extensions-openai` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/21cc4a716d4e756c-phase-b.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects` | Phase A (`same-version`) | Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/1ea2b7b8c6b8311f-phase-a.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
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
| `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents` | Phase A (`same-version`) | Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/6785a17fc7f4e719-phase-a.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/6785a17fc7f4e719-phase-b.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-projects` | Phase A (`same-version`) | Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/5514d59d8dce0102-phase-a.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-projects` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/5514d59d8dce0102-phase-b.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-python-js-azure-ai-projects` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/3aef53136e199d42-phase-a.md) |
| `specification/ai-foundry/data-plane/Foundry/src/sdk-python-js-azure-ai-projects` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/3aef53136e199d42-phase-b.md) |
| `specification/ai/data-plane/AIAgents` | Phase A (`same-version`) | `2025-05-01` → `2025-05-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/e732155a29c5c4bf-phase-a.md) |
| `specification/ai/data-plane/AIAgents` | Phase A (`same-version`) | `v1` → `v1` | 1 | 0 | [generated Markdown](report-artifacts/typespec/e732155a29c5c4bf-phase-a.md) |
| `specification/ai/data-plane/AIAgents` | Phase A (`same-version`) | `2025-05-15-preview` → `2025-05-15-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/e732155a29c5c4bf-phase-a.md) |
| `specification/ai/data-plane/ContentUnderstanding` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/0aba26d8bf4dd622-phase-a.md) |
| `specification/ai/data-plane/ContentUnderstanding` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/0aba26d8bf4dd622-phase-b.md) |
| `specification/ai/data-plane/DocumentIntelligence` | Phase A (`same-version`) | `2024-11-30` → `2024-11-30` | 1 | 0 | [generated Markdown](report-artifacts/typespec/7e43853ad5862fdc-phase-a.md) |
| `specification/ai/data-plane/Face` | Phase A (`same-version`) | `v1.1-preview.1` → `v1.1-preview.1` | 1 | 0 | [generated Markdown](report-artifacts/typespec/9b11485d3c17e2a4-phase-a.md) |
| `specification/ai/data-plane/Face` | Phase A (`same-version`) | `v1.2-preview.1` → `v1.2-preview.1` | 1 | 0 | [generated Markdown](report-artifacts/typespec/9b11485d3c17e2a4-phase-a.md) |
| `specification/ai/data-plane/Face` | Phase A (`same-version`) | `v1.2` → `v1.2` | 1 | 0 | [generated Markdown](report-artifacts/typespec/9b11485d3c17e2a4-phase-a.md) |
| `specification/ai/data-plane/Face` | Phase A (`same-version`) | `v1.3-preview.1` → `v1.3-preview.1` | 1 | 0 | [generated Markdown](report-artifacts/typespec/9b11485d3c17e2a4-phase-a.md) |
| `specification/ai/data-plane/HealthInsights` | Phase A (`same-version`) | `2024-04-01` → `2024-04-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/8b2771471dd760e3-phase-a.md) |
| `specification/ai/data-plane/HealthInsights` | Phase A (`same-version`) | `2024-08-01-preview` → `2024-08-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/8b2771471dd760e3-phase-a.md) |
| `specification/ai/data-plane/HealthInsights` | Phase A (`same-version`) | `2024-10-01` → `2024-10-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/8b2771471dd760e3-phase-a.md) |
| `specification/ai/data-plane/HealthInsights/RadiologyInsights` | Phase A (`same-version`) | Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/42001df5bd5e0498-phase-a.md) |
| `specification/ai/data-plane/HealthInsights/RadiologyInsights` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/42001df5bd5e0498-phase-b.md) |
| `specification/ai/data-plane/ImageAnalysis` | Phase A (`same-version`) | `2023-10-01` → `2023-10-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/c8721b421cfed3e2-phase-a.md) |
| `specification/ai/data-plane/ModelInference` | Phase A (`same-version`) | `2024-05-01-preview` → `2024-05-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/d32c0924ad19fb99-phase-a.md) |
| `specification/ai/data-plane/OpenAIAssistants` | Phase A (`same-version`) | Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Available tests: [type()].
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/cb10c910882d9cf2-phase-a.md) |
| `specification/ai/data-plane/OpenAIAssistants` | Phase B (`cross-version`) | Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Available tests: [type()].
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/cb10c910882d9cf2-phase-b.md) |
| `specification/ai/data-plane/VoiceLive` | Phase A (`same-version`) | `2025-10-01` → `2025-10-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/212b30912cebaa97-phase-a.md) |
| `specification/ai/data-plane/VoiceLive` | Phase A (`same-version`) | `2026-01-01-preview` → `2026-01-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/212b30912cebaa97-phase-a.md) |
| `specification/ai/data-plane/VoiceLive` | Phase A (`same-version`) | `2026-04-10` → `2026-04-10` | 1 | 0 | [generated Markdown](report-artifacts/typespec/212b30912cebaa97-phase-a.md) |
| `specification/ai/data-plane/VoiceLive` | Phase A (`same-version`) | `2026-06-01-preview` → `2026-06-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/212b30912cebaa97-phase-a.md) |
| `specification/ai/data-plane/VoiceLive` | Phase A (`same-version`) | `2026-07-15` → `2026-07-15` | 1 | 0 | [generated Markdown](report-artifacts/typespec/212b30912cebaa97-phase-a.md) |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertProcessingRules` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/901eee209ad46c5c-phase-a.md) |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertProcessingRules` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/901eee209ad46c5c-phase-b.md) |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertRuleRecommendations` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/79d4721b4c9c3830-phase-a.md) |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertRuleRecommendations` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/79d4721b4c9c3830-phase-b.md) |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertsManagement` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/83918e712fea9f46-phase-a.md) |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertsManagement` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/83918e712fea9f46-phase-b.md) |
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
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PrometheusRuleGroups` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c6e40978fe266649-phase-a.md) |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PrometheusRuleGroups` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/c6e40978fe266649-phase-b.md) |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/TenantActivityLogAlerts` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/518b7ed7946e3fb3-phase-a.md) |
| `specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/TenantActivityLogAlerts` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/518b7ed7946e3fb3-phase-b.md) |
| `specification/anyscale/resource-manager/Anyscale.Platform/platform` | Phase A (`same-version`) | `2026-09-01` → `2026-09-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/c4df7aaa45b33f20-phase-a.md) |
| `specification/apicenter/data-plane/ApiCenter` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/15f52837aec24634-phase-a.md) |
| `specification/apicenter/data-plane/ApiCenter` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/15f52837aec24634-phase-b.md) |
| `specification/apicenter/resource-manager/Microsoft.ApiCenter/ApiCenter` | Phase A (`same-version`) | `2024-03-01` → `2024-03-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/049cfb872340c5a5-phase-a.md) |
| `specification/apicenter/resource-manager/Microsoft.ApiCenter/ApiCenter` | Phase A (`same-version`) | `2024-03-15-preview` → `2024-03-15-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/049cfb872340c5a5-phase-a.md) |
| `specification/apicenter/resource-manager/Microsoft.ApiCenter/ApiCenter` | Phase A (`same-version`) | `2024-06-01-preview` → `2024-06-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/049cfb872340c5a5-phase-a.md) |
| `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway` | Phase A (`same-version`) | Analysis failed: spawn git ENOENT
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c796fb0ea8717b5f-phase-a.md) |
| `specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway` | Phase B (`cross-version`) | Analysis failed: spawn git ENOENT
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/c796fb0ea8717b5f-phase-b.md) |
| `specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/6e7cc89a7ebdc813-phase-a.md) |
| `specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/6e7cc89a7ebdc813-phase-b.md) |
| `specification/app/data-plane/ContainerApps` | Phase A (`same-version`) | `2026-09-01-preview` → `2026-09-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/238d555f12827774-phase-a.md) |
| `specification/app/data-plane/DynamicSessions` | Phase A (`same-version`) | `2024-10-02-preview` → `2024-10-02-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/eb99d1ae1464875a-phase-a.md) |
| `specification/app/data-plane/DynamicSessions` | Phase A (`same-version`) | `2025-02-02-preview` → `2025-02-02-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/eb99d1ae1464875a-phase-a.md) |
| `specification/app/data-plane/DynamicSessions` | Phase A (`same-version`) | `2025-10-02-preview` → `2025-10-02-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/eb99d1ae1464875a-phase-a.md) |
| `specification/app/resource-manager/Microsoft.App/ContainerApps` | Phase A (`same-version`) | `2025-10-02-preview` → `2025-10-02-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/02655bc5ca606e0a-phase-a.md) |
| `specification/app/resource-manager/Microsoft.App/ContainerApps` | Phase A (`same-version`) | `2026-01-01` → `2026-01-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/02655bc5ca606e0a-phase-a.md) |
| `specification/app/resource-manager/Microsoft.App/ContainerApps` | Phase A (`same-version`) | `2026-03-02-preview` → `2026-03-02-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/02655bc5ca606e0a-phase-a.md) |
| `specification/app/resource-manager/Microsoft.App/ContainerApps` | Phase A (`same-version`) | `2026-07-01` → `2026-07-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/02655bc5ca606e0a-phase-a.md) |
| `specification/app/resource-manager/Microsoft.App/SreAgent` | Phase A (`same-version`) | `2026-01-01` → `2026-01-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/e4710c1d9b752a67-phase-a.md) |
| `specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/AppComplianceAutomation` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/9c1aa429a653fece-phase-a.md) |
| `specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/AppComplianceAutomation` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/9c1aa429a653fece-phase-b.md) |
| `specification/appconfiguration/data-plane/AppConfiguration` | Phase A (`same-version`) | `2023-11-01` → `2023-11-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/5cb6aa63c5a9e92b-phase-a.md) |
| `specification/appconfiguration/data-plane/AppConfiguration` | Phase A (`same-version`) | `2024-09-01` → `2024-09-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/5cb6aa63c5a9e92b-phase-a.md) |
| `specification/appconfiguration/data-plane/AppConfiguration` | Phase A (`same-version`) | `2026-04-01` → `2026-04-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/5cb6aa63c5a9e92b-phase-a.md) |
| `specification/appconfiguration/data-plane/AppConfiguration` | Phase A (`same-version`) | `2026-05-01-preview` → `2026-05-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/5cb6aa63c5a9e92b-phase-a.md) |
| `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/7e4caeea0cfde644-phase-a.md) |
| `specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/7e4caeea0cfde644-phase-b.md) |
| `specification/applicationinsights/data-plane/Exporters` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/330aef28ee46f8a5-phase-a.md) |
| `specification/applicationinsights/data-plane/Exporters` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/330aef28ee46f8a5-phase-b.md) |
| `specification/applicationinsights/data-plane/LiveMetrics` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/5e43db29ef435a8e-phase-a.md) |
| `specification/applicationinsights/data-plane/LiveMetrics` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/5e43db29ef435a8e-phase-b.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/8b7eef0f70d3eede-phase-a.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/8b7eef0f70d3eede-phase-b.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/AnalyticsItems` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/e7643f35b3aa20ca-phase-a.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/AnalyticsItems` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/e7643f35b3aa20ca-phase-b.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentAPIs` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/560dd8313bafbf78-phase-a.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentAPIs` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/560dd8313bafbf78-phase-b.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentLinkedStorageAccountApi` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/2b784ab5139e7e8b-phase-a.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentLinkedStorageAccountApi` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/2b784ab5139e7e8b-phase-b.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Components` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/a69345d4e0c61153-phase-a.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Components` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/a69345d4e0c61153-phase-b.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/DeletedWorkbookApi` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/fc219393da2f5459-phase-a.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/DeletedWorkbookApi` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/fc219393da2f5459-phase-b.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Favorites` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/44fd87244aab6d78-phase-a.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Favorites` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/44fd87244aab6d78-phase-b.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/LiveTokenApi` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/df720d669a2240ac-phase-a.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/LiveTokenApi` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/df720d669a2240ac-phase-b.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/2d7cf820c402aaf9-phase-a.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/2d7cf820c402aaf9-phase-b.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestsApi` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/993f136525ac3dab-phase-a.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestsApi` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/993f136525ac3dab-phase-b.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkBookOperations` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/ff15d1f56ed7566d-phase-a.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkBookOperations` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/ff15d1f56ed7566d-phase-b.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbookTemplatesApi` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/78aa3e7e24a46818-phase-a.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbookTemplatesApi` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/78aa3e7e24a46818-phase-b.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbooksApi` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/a5ca2115620ad224-phase-a.md) |
| `specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbooksApi` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/a5ca2115620ad224-phase-b.md) |
| `specification/applink/AppLink.Management` | Phase A (`same-version`) | `2025-08-01-preview` → `2025-08-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/64d8953f960e8a74-phase-a.md) |
| `specification/applink/AppLink.Management` | Phase A (`same-version`) | `2026-08-01-preview` → `2026-08-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/64d8953f960e8a74-phase-a.md) |
| `specification/artifactsigning/data-plane/ArtifactSigning` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/26e7baa15626269b-phase-a.md) |
| `specification/artifactsigning/data-plane/ArtifactSigning` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/26e7baa15626269b-phase-b.md) |
| `specification/attestation/data-plane/Attestation` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/fed28f316c920b08-phase-a.md) |
| `specification/attestation/data-plane/Attestation` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/fed28f316c920b08-phase-b.md) |
| `specification/attestation/resource-manager/Microsoft.Attestation/Attestation` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d7e952b4d948d27b-phase-a.md) |
| `specification/attestation/resource-manager/Microsoft.Attestation/Attestation` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/d7e952b4d948d27b-phase-b.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c62888e0836c2352-phase-a.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/c62888e0836c2352-phase-b.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AccessReview` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/b9f06b886a66872d-phase-a.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AccessReview` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/b9f06b886a66872d-phase-b.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AttributeNamespaces` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/44755a3ae6270f65-phase-a.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AttributeNamespaces` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/44755a3ae6270f65-phase-b.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/Authorization` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d644012f4f29ca0e-phase-a.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/Authorization` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/d644012f4f29ca0e-phase-b.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ClassicAdmin` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/e074ab59467ae208-phase-a.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ClassicAdmin` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/e074ab59467ae208-phase-b.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/90b6b6deb3d33b65-phase-a.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/90b6b6deb3d33b65-phase-b.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/6ce594fc5509a78a-phase-a.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/6ce594fc5509a78a-phase-b.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ProviderOperations` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/44332eb8ec322f50-phase-a.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ProviderOperations` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/44332eb8ec322f50-phase-b.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/185e711dd907226b-phase-a.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/185e711dd907226b-phase-b.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleDefinitions` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/8181af3fccb6efda-phase-a.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleDefinitions` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/8181af3fccb6efda-phase-b.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleManagementAlerts` | Phase A (`same-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/7018018c7195d8cc-phase-a.md) |
| `specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleManagementAlerts` | Phase B (`cross-version`) | Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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

Node.js v24.16.0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/7018018c7195d8cc-phase-b.md) |
| `specification/automation/resource-manager/Microsoft.Automation/Automation` | Phase A (`same-version`) | `2024-10-23` → `2024-10-23` | 1 | 0 | [generated Markdown](report-artifacts/typespec/49581f50dce3daa6-phase-a.md) |
| `specification/awsconnector/AccessAnalyzerAnalyzer.Management` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/6372f437b100c489-phase-a.md) |
| `specification/awsconnector/AccessAnalyzerAnalyzer.Management` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/6372f437b100c489-phase-b.md) |
| `specification/awsconnector/AcmCertificateSummary.Management` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/9e5a8e32e4046956-phase-a.md) |
| `specification/awsconnector/AcmCertificateSummary.Management` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/9e5a8e32e4046956-phase-b.md) |
| `specification/awsconnector/ApiGatewayRestApi.Management` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/a49b4869e73be042-phase-a.md) |
| `specification/awsconnector/ApiGatewayRestApi.Management` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/a49b4869e73be042-phase-b.md) |
| `specification/awsconnector/ApiGatewayStage.Management` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c2ece960fc239262-phase-a.md) |
| `specification/awsconnector/ApiGatewayStage.Management` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/c2ece960fc239262-phase-b.md) |
| `specification/awsconnector/AppSyncGraphqlApi.Management` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/619b0b2c5450b4e9-phase-a.md) |
| `specification/awsconnector/AppSyncGraphqlApi.Management` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/619b0b2c5450b4e9-phase-b.md) |
| `specification/awsconnector/AutoScalingAutoScalingGroup.Management` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/1190ee9ad401c4a1-phase-a.md) |
| `specification/awsconnector/AutoScalingAutoScalingGroup.Management` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/1190ee9ad401c4a1-phase-b.md) |
| `specification/awsconnector/Awsconnector.Management` | Phase A (`same-version`) | `2024-12-01` → `2024-12-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/bb2ed84ef17ef9d1-phase-a.md) |
| `specification/awsconnector/CloudFormationStack.Management` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/adf8a49b28f57da4-phase-a.md) |
| `specification/awsconnector/CloudFormationStack.Management` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/adf8a49b28f57da4-phase-b.md) |
| `specification/awsconnector/CloudFormationStackSet.Management` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/7103dd372f9571a2-phase-a.md) |
| `specification/awsconnector/CloudFormationStackSet.Management` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/7103dd372f9571a2-phase-b.md) |
| `specification/awsconnector/CloudFrontDistribution.Management` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/836e48b68f72d9bf-phase-a.md) |
| `specification/awsconnector/CloudFrontDistribution.Management` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/836e48b68f72d9bf-phase-b.md) |
| `specification/awsconnector/CloudTrailTrail.Management` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/8d9b062d1f73c69c-phase-a.md) |
| `specification/awsconnector/CloudTrailTrail.Management` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/8d9b062d1f73c69c-phase-b.md) |
| `specification/awsconnector/CloudWatchAlarm.Management` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/2f54a18ad1d13b07-phase-a.md) |
| `specification/awsconnector/CloudWatchAlarm.Management` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/2f54a18ad1d13b07-phase-b.md) |
| `specification/awsconnector/CodeBuildProject.Management` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/03245631d14d7a6b-phase-a.md) |
| `specification/awsconnector/CodeBuildProject.Management` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/03245631d14d7a6b-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-compile-runtime-failure-bdd9d1cf208cc1c4` | A, B | `compile-runtime-failure` | execution-failure | high | generated | 0 |

### issue-compile-runtime-failure-bdd9d1cf208cc1c4

- **Affected PRs:** #47312
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
  - `execution:execution-error-0` — specification/agricultureplatform/AgriculturePlatform.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-1` — specification/ai-foundry/data-plane/Foundry: Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 68 error(s) found:
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
; Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 68 error(s) found:
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

  - `execution:execution-error-2` — specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-agent-contracts: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-3` — specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-extensions-openai: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-4` — specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects: Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>

  - `execution:execution-error-5` — specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-6` — specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents: Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>

  - `execution:execution-error-7` — specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-projects: Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>

  - `execution:execution-error-8` — specification/ai-foundry/data-plane/Foundry/src/sdk-python-js-azure-ai-projects: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-9` — specification/ai/data-plane/ContentUnderstanding: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-10` — specification/ai/data-plane/HealthInsights/RadiologyInsights: Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>

  - `execution:execution-error-11` — specification/ai/data-plane/OpenAIAssistants: Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Available tests: [type()].
; Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Available tests: [type()].

  - `execution:execution-error-12` — specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertProcessingRules: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-13` — specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertRuleRecommendations: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-14` — specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertsManagement: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-15` — specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-16` — specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PrometheusRuleGroups: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-17` — specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/TenantActivityLogAlerts: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-18` — specification/apicenter/data-plane/ApiCenter: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-19` — specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway: Analysis failed: spawn git ENOENT
; Analysis failed: spawn git ENOENT

  - `execution:execution-error-20` — specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-21` — specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/AppComplianceAutomation: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-22` — specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-23` — specification/applicationinsights/data-plane/Exporters: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-24` — specification/applicationinsights/data-plane/LiveMetrics: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-25` — specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-26` — specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/AnalyticsItems: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-27` — specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentAPIs: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-28` — specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentLinkedStorageAccountApi: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-29` — specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Components: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-30` — specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/DeletedWorkbookApi: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-31` — specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Favorites: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-32` — specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/LiveTokenApi: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-33` — specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-34` — specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestsApi: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-35` — specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkBookOperations: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-36` — specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbookTemplatesApi: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-37` — specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbooksApi: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-38` — specification/artifactsigning/data-plane/ArtifactSigning: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-39` — specification/attestation/data-plane/Attestation: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-40` — specification/attestation/resource-manager/Microsoft.Attestation/Attestation: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-41` — specification/authorization/resource-manager/Microsoft.Authorization/Authorization: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-42` — specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AccessReview: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-43` — specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AttributeNamespaces: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-44` — specification/authorization/resource-manager/Microsoft.Authorization/Authorization/Authorization: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-45` — specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ClassicAdmin: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-46` — specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-47` — specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-48` — specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ProviderOperations: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-49` — specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-50` — specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleDefinitions: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-51` — specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleManagementAlerts: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-52` — specification/awsconnector/AccessAnalyzerAnalyzer.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-53` — specification/awsconnector/AcmCertificateSummary.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-54` — specification/awsconnector/ApiGatewayRestApi.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-55` — specification/awsconnector/ApiGatewayStage.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-56` — specification/awsconnector/AppSyncGraphqlApi.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-57` — specification/awsconnector/AutoScalingAutoScalingGroup.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-58` — specification/awsconnector/CloudFormationStack.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-59` — specification/awsconnector/CloudFormationStackSet.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-60` — specification/awsconnector/CloudFrontDistribution.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-61` — specification/awsconnector/CloudTrailTrail.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-62` — specification/awsconnector/CloudWatchAlarm.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-63` — specification/awsconnector/CodeBuildProject.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-64` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-65` — Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 68 error(s) found:
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
; Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 68 error(s) found:
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

  - `execution:execution-error-66` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-67` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-68` — Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>

  - `execution:execution-error-69` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-70` — Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>

  - `execution:execution-error-71` — Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>

  - `execution:execution-error-72` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-73` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-74` — Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>

  - `execution:execution-error-75` — Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Available tests: [type()].
; Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Available tests: [type()].

  - `execution:execution-error-76` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-77` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-78` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-79` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-80` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-81` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-82` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-83` — Analysis failed: spawn git ENOENT
; Analysis failed: spawn git ENOENT

  - `execution:execution-error-84` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-85` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-86` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-87` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-88` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-89` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-90` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-91` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-92` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-93` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-94` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-95` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-96` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-97` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-98` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-99` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-100` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-101` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-102` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-103` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-104` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-105` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-106` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-107` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-108` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-109` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-110` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-111` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-112` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-113` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-114` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-115` — Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
  - `execution:execution-error-116` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-117` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-118` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-119` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-120` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-121` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-122` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-123` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-124` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-125` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-126` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-127` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')


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
git -C target fetch --no-tags origin fcc20ab8473a30946221a1b876c89aa9f61447b9 3e6e64bb3ce0338733986ec368dd4c351c8ed92a
git -C target checkout --detach 3e6e64bb3ce0338733986ec368dd4c351c8ed92a
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47312' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/advisor/resource-manager/Microsoft.Advisor/Advisor

```powershell
Push-Location target
node $prepared.executable 'specification/advisor/resource-manager/Microsoft.Advisor/Advisor' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-advisor-resource-manager-Microsoft.Advisor-Advisor-phase-a.json' --markdown-output '../specification-advisor-resource-manager-Microsoft.Advisor-Advisor-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/advisor/resource-manager/Microsoft.Advisor/Advisor' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-advisor-resource-manager-Microsoft.Advisor-Advisor-phase-b-evidence.json' --markdown-output '../specification-advisor-resource-manager-Microsoft.Advisor-Advisor-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/agricultureplatform/AgriculturePlatform.Management

```powershell
Push-Location target
node $prepared.executable 'specification/agricultureplatform/AgriculturePlatform.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-agricultureplatform-AgriculturePlatform.Management-phase-a.json' --markdown-output '../specification-agricultureplatform-AgriculturePlatform.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/agricultureplatform/AgriculturePlatform.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-agricultureplatform-AgriculturePlatform.Management-phase-b-evidence.json' --markdown-output '../specification-agricultureplatform-AgriculturePlatform.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai-foundry/data-plane/Foundry

```powershell
Push-Location target
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-foundry-data-plane-Foundry-phase-a.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-foundry-data-plane-Foundry-phase-b-evidence.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-agent-contracts

```powershell
Push-Location target
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-agent-contracts' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-agent-contracts-phase-a.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-agent-contracts-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-agent-contracts' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-agent-contracts-phase-b-evidence.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-agent-contracts-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-extensions-openai

```powershell
Push-Location target
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-extensions-openai' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-extensions-openai-phase-a.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-extensions-openai-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-extensions-openai' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-extensions-openai-phase-b-evidence.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-extensions-openai-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects

```powershell
Push-Location target
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-projects-phase-a.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-projects-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-projects-phase-b-evidence.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-projects-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents

```powershell
Push-Location target
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-projects-agents-phase-a.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-projects-agents-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-projects-agents-phase-b-evidence.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-csharp-azure-ai-projects-agents-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents

```powershell
Push-Location target
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-java-azure-ai-agents-phase-a.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-java-azure-ai-agents-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-java-azure-ai-agents-phase-b-evidence.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-java-azure-ai-agents-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-projects

```powershell
Push-Location target
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-projects' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-java-azure-ai-projects-phase-a.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-java-azure-ai-projects-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-projects' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-java-azure-ai-projects-phase-b-evidence.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-java-azure-ai-projects-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai-foundry/data-plane/Foundry/src/sdk-python-js-azure-ai-projects

```powershell
Push-Location target
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-python-js-azure-ai-projects' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-python-js-azure-ai-projects-phase-a.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-python-js-azure-ai-projects-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai-foundry/data-plane/Foundry/src/sdk-python-js-azure-ai-projects' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-python-js-azure-ai-projects-phase-b-evidence.json' --markdown-output '../specification-ai-foundry-data-plane-Foundry-src-sdk-python-js-azure-ai-projects-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai/data-plane/AIAgents

```powershell
Push-Location target
node $prepared.executable 'specification/ai/data-plane/AIAgents' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-data-plane-AIAgents-phase-a.json' --markdown-output '../specification-ai-data-plane-AIAgents-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai/data-plane/AIAgents' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-data-plane-AIAgents-phase-b-evidence.json' --markdown-output '../specification-ai-data-plane-AIAgents-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai/data-plane/ContentUnderstanding

```powershell
Push-Location target
node $prepared.executable 'specification/ai/data-plane/ContentUnderstanding' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-data-plane-ContentUnderstanding-phase-a.json' --markdown-output '../specification-ai-data-plane-ContentUnderstanding-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai/data-plane/ContentUnderstanding' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-data-plane-ContentUnderstanding-phase-b-evidence.json' --markdown-output '../specification-ai-data-plane-ContentUnderstanding-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai/data-plane/DocumentIntelligence

```powershell
Push-Location target
node $prepared.executable 'specification/ai/data-plane/DocumentIntelligence' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-data-plane-DocumentIntelligence-phase-a.json' --markdown-output '../specification-ai-data-plane-DocumentIntelligence-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai/data-plane/DocumentIntelligence' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-data-plane-DocumentIntelligence-phase-b-evidence.json' --markdown-output '../specification-ai-data-plane-DocumentIntelligence-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai/data-plane/Face

```powershell
Push-Location target
node $prepared.executable 'specification/ai/data-plane/Face' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-data-plane-Face-phase-a.json' --markdown-output '../specification-ai-data-plane-Face-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai/data-plane/Face' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-data-plane-Face-phase-b-evidence.json' --markdown-output '../specification-ai-data-plane-Face-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai/data-plane/HealthInsights

```powershell
Push-Location target
node $prepared.executable 'specification/ai/data-plane/HealthInsights' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-data-plane-HealthInsights-phase-a.json' --markdown-output '../specification-ai-data-plane-HealthInsights-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai/data-plane/HealthInsights' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-data-plane-HealthInsights-phase-b-evidence.json' --markdown-output '../specification-ai-data-plane-HealthInsights-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai/data-plane/HealthInsights/RadiologyInsights

```powershell
Push-Location target
node $prepared.executable 'specification/ai/data-plane/HealthInsights/RadiologyInsights' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-data-plane-HealthInsights-RadiologyInsights-phase-a.json' --markdown-output '../specification-ai-data-plane-HealthInsights-RadiologyInsights-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai/data-plane/HealthInsights/RadiologyInsights' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-data-plane-HealthInsights-RadiologyInsights-phase-b-evidence.json' --markdown-output '../specification-ai-data-plane-HealthInsights-RadiologyInsights-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai/data-plane/ImageAnalysis

```powershell
Push-Location target
node $prepared.executable 'specification/ai/data-plane/ImageAnalysis' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-data-plane-ImageAnalysis-phase-a.json' --markdown-output '../specification-ai-data-plane-ImageAnalysis-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai/data-plane/ImageAnalysis' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-data-plane-ImageAnalysis-phase-b-evidence.json' --markdown-output '../specification-ai-data-plane-ImageAnalysis-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai/data-plane/ModelInference

```powershell
Push-Location target
node $prepared.executable 'specification/ai/data-plane/ModelInference' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-data-plane-ModelInference-phase-a.json' --markdown-output '../specification-ai-data-plane-ModelInference-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai/data-plane/ModelInference' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-data-plane-ModelInference-phase-b-evidence.json' --markdown-output '../specification-ai-data-plane-ModelInference-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai/data-plane/OpenAIAssistants

```powershell
Push-Location target
node $prepared.executable 'specification/ai/data-plane/OpenAIAssistants' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-data-plane-OpenAIAssistants-phase-a.json' --markdown-output '../specification-ai-data-plane-OpenAIAssistants-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai/data-plane/OpenAIAssistants' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-data-plane-OpenAIAssistants-phase-b-evidence.json' --markdown-output '../specification-ai-data-plane-OpenAIAssistants-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/ai/data-plane/VoiceLive

```powershell
Push-Location target
node $prepared.executable 'specification/ai/data-plane/VoiceLive' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-ai-data-plane-VoiceLive-phase-a.json' --markdown-output '../specification-ai-data-plane-VoiceLive-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/ai/data-plane/VoiceLive' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-ai-data-plane-VoiceLive-phase-b-evidence.json' --markdown-output '../specification-ai-data-plane-VoiceLive-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertProcessingRules

```powershell
Push-Location target
node $prepared.executable 'specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertProcessingRules' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-AlertProcessingRules-phase-a.json' --markdown-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-AlertProcessingRules-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertProcessingRules' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-AlertProcessingRules-phase-b-evidence.json' --markdown-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-AlertProcessingRules-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertRuleRecommendations

```powershell
Push-Location target
node $prepared.executable 'specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertRuleRecommendations' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-AlertRuleRecommendations-phase-a.json' --markdown-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-AlertRuleRecommendations-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertRuleRecommendations' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-AlertRuleRecommendations-phase-b-evidence.json' --markdown-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-AlertRuleRecommendations-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertsManagement

```powershell
Push-Location target
node $prepared.executable 'specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertsManagement' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-AlertsManagement-phase-a.json' --markdown-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-AlertsManagement-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertsManagement' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-AlertsManagement-phase-b-evidence.json' --markdown-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-AlertsManagement-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule

```powershell
Push-Location target
node $prepared.executable 'specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-PreviewAlertRule-phase-a.json' --markdown-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-PreviewAlertRule-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PreviewAlertRule' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-PreviewAlertRule-phase-b-evidence.json' --markdown-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-PreviewAlertRule-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PrometheusRuleGroups

```powershell
Push-Location target
node $prepared.executable 'specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PrometheusRuleGroups' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-PrometheusRuleGroups-phase-a.json' --markdown-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-PrometheusRuleGroups-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PrometheusRuleGroups' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-PrometheusRuleGroups-phase-b-evidence.json' --markdown-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-PrometheusRuleGroups-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/TenantActivityLogAlerts

```powershell
Push-Location target
node $prepared.executable 'specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/TenantActivityLogAlerts' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-TenantActivityLogAlerts-phase-a.json' --markdown-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-TenantActivityLogAlerts-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/TenantActivityLogAlerts' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-TenantActivityLogAlerts-phase-b-evidence.json' --markdown-output '../specification-alertsmanagement-resource-manager-Microsoft.AlertsManagement-TenantActivityLogAlerts-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/anyscale/resource-manager/Anyscale.Platform/platform

```powershell
Push-Location target
node $prepared.executable 'specification/anyscale/resource-manager/Anyscale.Platform/platform' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-anyscale-resource-manager-Anyscale.Platform-platform-phase-a.json' --markdown-output '../specification-anyscale-resource-manager-Anyscale.Platform-platform-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/anyscale/resource-manager/Anyscale.Platform/platform' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-anyscale-resource-manager-Anyscale.Platform-platform-phase-b-evidence.json' --markdown-output '../specification-anyscale-resource-manager-Anyscale.Platform-platform-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/apicenter/data-plane/ApiCenter

```powershell
Push-Location target
node $prepared.executable 'specification/apicenter/data-plane/ApiCenter' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-apicenter-data-plane-ApiCenter-phase-a.json' --markdown-output '../specification-apicenter-data-plane-ApiCenter-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/apicenter/data-plane/ApiCenter' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-apicenter-data-plane-ApiCenter-phase-b-evidence.json' --markdown-output '../specification-apicenter-data-plane-ApiCenter-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/apicenter/resource-manager/Microsoft.ApiCenter/ApiCenter

```powershell
Push-Location target
node $prepared.executable 'specification/apicenter/resource-manager/Microsoft.ApiCenter/ApiCenter' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-apicenter-resource-manager-Microsoft.ApiCenter-ApiCenter-phase-a.json' --markdown-output '../specification-apicenter-resource-manager-Microsoft.ApiCenter-ApiCenter-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/apicenter/resource-manager/Microsoft.ApiCenter/ApiCenter' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-apicenter-resource-manager-Microsoft.ApiCenter-ApiCenter-phase-b-evidence.json' --markdown-output '../specification-apicenter-resource-manager-Microsoft.ApiCenter-ApiCenter-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway

```powershell
Push-Location target
node $prepared.executable 'specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-apimanagement-resource-manager-Microsoft.ApiManagement-AIGateway-phase-a.json' --markdown-output '../specification-apimanagement-resource-manager-Microsoft.ApiManagement-AIGateway-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-apimanagement-resource-manager-Microsoft.ApiManagement-AIGateway-phase-b-evidence.json' --markdown-output '../specification-apimanagement-resource-manager-Microsoft.ApiManagement-AIGateway-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement

```powershell
Push-Location target
node $prepared.executable 'specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-apimanagement-resource-manager-Microsoft.ApiManagement-ApiManagement-phase-a.json' --markdown-output '../specification-apimanagement-resource-manager-Microsoft.ApiManagement-ApiManagement-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-apimanagement-resource-manager-Microsoft.ApiManagement-ApiManagement-phase-b-evidence.json' --markdown-output '../specification-apimanagement-resource-manager-Microsoft.ApiManagement-ApiManagement-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/app/data-plane/ContainerApps

```powershell
Push-Location target
node $prepared.executable 'specification/app/data-plane/ContainerApps' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-app-data-plane-ContainerApps-phase-a.json' --markdown-output '../specification-app-data-plane-ContainerApps-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/app/data-plane/ContainerApps' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-app-data-plane-ContainerApps-phase-b-evidence.json' --markdown-output '../specification-app-data-plane-ContainerApps-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/app/data-plane/DynamicSessions

```powershell
Push-Location target
node $prepared.executable 'specification/app/data-plane/DynamicSessions' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-app-data-plane-DynamicSessions-phase-a.json' --markdown-output '../specification-app-data-plane-DynamicSessions-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/app/data-plane/DynamicSessions' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-app-data-plane-DynamicSessions-phase-b-evidence.json' --markdown-output '../specification-app-data-plane-DynamicSessions-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/app/resource-manager/Microsoft.App/ContainerApps

```powershell
Push-Location target
node $prepared.executable 'specification/app/resource-manager/Microsoft.App/ContainerApps' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-app-resource-manager-Microsoft.App-ContainerApps-phase-a.json' --markdown-output '../specification-app-resource-manager-Microsoft.App-ContainerApps-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/app/resource-manager/Microsoft.App/ContainerApps' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-app-resource-manager-Microsoft.App-ContainerApps-phase-b-evidence.json' --markdown-output '../specification-app-resource-manager-Microsoft.App-ContainerApps-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/app/resource-manager/Microsoft.App/SreAgent

```powershell
Push-Location target
node $prepared.executable 'specification/app/resource-manager/Microsoft.App/SreAgent' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-app-resource-manager-Microsoft.App-SreAgent-phase-a.json' --markdown-output '../specification-app-resource-manager-Microsoft.App-SreAgent-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/app/resource-manager/Microsoft.App/SreAgent' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-app-resource-manager-Microsoft.App-SreAgent-phase-b-evidence.json' --markdown-output '../specification-app-resource-manager-Microsoft.App-SreAgent-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/AppComplianceAutomation

```powershell
Push-Location target
node $prepared.executable 'specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/AppComplianceAutomation' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-appcomplianceautomation-resource-manager-Microsoft.AppComplianceAutomation-AppComplianceAutomation-phase-a.json' --markdown-output '../specification-appcomplianceautomation-resource-manager-Microsoft.AppComplianceAutomation-AppComplianceAutomation-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/AppComplianceAutomation' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-appcomplianceautomation-resource-manager-Microsoft.AppComplianceAutomation-AppComplianceAutomation-phase-b-evidence.json' --markdown-output '../specification-appcomplianceautomation-resource-manager-Microsoft.AppComplianceAutomation-AppComplianceAutomation-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/appconfiguration/data-plane/AppConfiguration

```powershell
Push-Location target
node $prepared.executable 'specification/appconfiguration/data-plane/AppConfiguration' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-appconfiguration-data-plane-AppConfiguration-phase-a.json' --markdown-output '../specification-appconfiguration-data-plane-AppConfiguration-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/appconfiguration/data-plane/AppConfiguration' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-appconfiguration-data-plane-AppConfiguration-phase-b-evidence.json' --markdown-output '../specification-appconfiguration-data-plane-AppConfiguration-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration

```powershell
Push-Location target
node $prepared.executable 'specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-appconfiguration-resource-manager-Microsoft.AppConfiguration-AppConfiguration-phase-a.json' --markdown-output '../specification-appconfiguration-resource-manager-Microsoft.AppConfiguration-AppConfiguration-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-appconfiguration-resource-manager-Microsoft.AppConfiguration-AppConfiguration-phase-b-evidence.json' --markdown-output '../specification-appconfiguration-resource-manager-Microsoft.AppConfiguration-AppConfiguration-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/applicationinsights/data-plane/Exporters

```powershell
Push-Location target
node $prepared.executable 'specification/applicationinsights/data-plane/Exporters' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-applicationinsights-data-plane-Exporters-phase-a.json' --markdown-output '../specification-applicationinsights-data-plane-Exporters-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/applicationinsights/data-plane/Exporters' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-applicationinsights-data-plane-Exporters-phase-b-evidence.json' --markdown-output '../specification-applicationinsights-data-plane-Exporters-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/applicationinsights/data-plane/LiveMetrics

```powershell
Push-Location target
node $prepared.executable 'specification/applicationinsights/data-plane/LiveMetrics' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-applicationinsights-data-plane-LiveMetrics-phase-a.json' --markdown-output '../specification-applicationinsights-data-plane-LiveMetrics-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/applicationinsights/data-plane/LiveMetrics' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-applicationinsights-data-plane-LiveMetrics-phase-b-evidence.json' --markdown-output '../specification-applicationinsights-data-plane-LiveMetrics-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights

```powershell
Push-Location target
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-phase-a.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-phase-b-evidence.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/AnalyticsItems

```powershell
Push-Location target
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/AnalyticsItems' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-AnalyticsItems-phase-a.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-AnalyticsItems-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/AnalyticsItems' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-AnalyticsItems-phase-b-evidence.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-AnalyticsItems-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentAPIs

```powershell
Push-Location target
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentAPIs' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-ComponentAPIs-phase-a.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-ComponentAPIs-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentAPIs' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-ComponentAPIs-phase-b-evidence.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-ComponentAPIs-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentLinkedStorageAccountApi

```powershell
Push-Location target
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentLinkedStorageAccountApi' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-ComponentLinkedStorageAccountApi-phase-a.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-ComponentLinkedStorageAccountApi-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentLinkedStorageAccountApi' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-ComponentLinkedStorageAccountApi-phase-b-evidence.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-ComponentLinkedStorageAccountApi-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Components

```powershell
Push-Location target
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Components' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-Components-phase-a.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-Components-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Components' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-Components-phase-b-evidence.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-Components-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/DeletedWorkbookApi

```powershell
Push-Location target
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/DeletedWorkbookApi' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-DeletedWorkbookApi-phase-a.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-DeletedWorkbookApi-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/DeletedWorkbookApi' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-DeletedWorkbookApi-phase-b-evidence.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-DeletedWorkbookApi-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Favorites

```powershell
Push-Location target
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Favorites' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-Favorites-phase-a.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-Favorites-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Favorites' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-Favorites-phase-b-evidence.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-Favorites-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/LiveTokenApi

```powershell
Push-Location target
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/LiveTokenApi' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-LiveTokenApi-phase-a.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-LiveTokenApi-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/LiveTokenApi' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-LiveTokenApi-phase-b-evidence.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-LiveTokenApi-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation

```powershell
Push-Location target
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WebTestLocation-phase-a.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WebTestLocation-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WebTestLocation-phase-b-evidence.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WebTestLocation-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestsApi

```powershell
Push-Location target
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestsApi' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WebTestsApi-phase-a.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WebTestsApi-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestsApi' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WebTestsApi-phase-b-evidence.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WebTestsApi-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkBookOperations

```powershell
Push-Location target
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkBookOperations' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WorkBookOperations-phase-a.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WorkBookOperations-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkBookOperations' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WorkBookOperations-phase-b-evidence.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WorkBookOperations-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbookTemplatesApi

```powershell
Push-Location target
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbookTemplatesApi' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WorkbookTemplatesApi-phase-a.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WorkbookTemplatesApi-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbookTemplatesApi' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WorkbookTemplatesApi-phase-b-evidence.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WorkbookTemplatesApi-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbooksApi

```powershell
Push-Location target
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbooksApi' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WorkbooksApi-phase-a.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WorkbooksApi-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbooksApi' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WorkbooksApi-phase-b-evidence.json' --markdown-output '../specification-applicationinsights-resource-manager-Microsoft.Insights-ApplicationInsights-WorkbooksApi-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/applink/AppLink.Management

```powershell
Push-Location target
node $prepared.executable 'specification/applink/AppLink.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-applink-AppLink.Management-phase-a.json' --markdown-output '../specification-applink-AppLink.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/applink/AppLink.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-applink-AppLink.Management-phase-b-evidence.json' --markdown-output '../specification-applink-AppLink.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/artifactsigning/data-plane/ArtifactSigning

```powershell
Push-Location target
node $prepared.executable 'specification/artifactsigning/data-plane/ArtifactSigning' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-artifactsigning-data-plane-ArtifactSigning-phase-a.json' --markdown-output '../specification-artifactsigning-data-plane-ArtifactSigning-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/artifactsigning/data-plane/ArtifactSigning' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-artifactsigning-data-plane-ArtifactSigning-phase-b-evidence.json' --markdown-output '../specification-artifactsigning-data-plane-ArtifactSigning-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/attestation/data-plane/Attestation

```powershell
Push-Location target
node $prepared.executable 'specification/attestation/data-plane/Attestation' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-attestation-data-plane-Attestation-phase-a.json' --markdown-output '../specification-attestation-data-plane-Attestation-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/attestation/data-plane/Attestation' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-attestation-data-plane-Attestation-phase-b-evidence.json' --markdown-output '../specification-attestation-data-plane-Attestation-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/attestation/resource-manager/Microsoft.Attestation/Attestation

```powershell
Push-Location target
node $prepared.executable 'specification/attestation/resource-manager/Microsoft.Attestation/Attestation' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-attestation-resource-manager-Microsoft.Attestation-Attestation-phase-a.json' --markdown-output '../specification-attestation-resource-manager-Microsoft.Attestation-Attestation-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/attestation/resource-manager/Microsoft.Attestation/Attestation' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-attestation-resource-manager-Microsoft.Attestation-Attestation-phase-b-evidence.json' --markdown-output '../specification-attestation-resource-manager-Microsoft.Attestation-Attestation-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/authorization/resource-manager/Microsoft.Authorization/Authorization

```powershell
Push-Location target
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-phase-a.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-phase-b-evidence.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AccessReview

```powershell
Push-Location target
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AccessReview' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-AccessReview-phase-a.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-AccessReview-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AccessReview' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-AccessReview-phase-b-evidence.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-AccessReview-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AttributeNamespaces

```powershell
Push-Location target
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AttributeNamespaces' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-AttributeNamespaces-phase-a.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-AttributeNamespaces-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AttributeNamespaces' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-AttributeNamespaces-phase-b-evidence.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-AttributeNamespaces-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/authorization/resource-manager/Microsoft.Authorization/Authorization/Authorization

```powershell
Push-Location target
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/Authorization' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-Authorization-phase-a.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-Authorization-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/Authorization' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-Authorization-phase-b-evidence.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-Authorization-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ClassicAdmin

```powershell
Push-Location target
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ClassicAdmin' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-ClassicAdmin-phase-a.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-ClassicAdmin-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ClassicAdmin' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-ClassicAdmin-phase-b-evidence.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-ClassicAdmin-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment

```powershell
Push-Location target
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-DenyAssignment-phase-a.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-DenyAssignment-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-DenyAssignment-phase-b-evidence.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-DenyAssignment-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess

```powershell
Push-Location target
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-PrivilegedAccess-phase-a.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-PrivilegedAccess-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-PrivilegedAccess-phase-b-evidence.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-PrivilegedAccess-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ProviderOperations

```powershell
Push-Location target
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ProviderOperations' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-ProviderOperations-phase-a.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-ProviderOperations-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ProviderOperations' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-ProviderOperations-phase-b-evidence.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-ProviderOperations-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment

```powershell
Push-Location target
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-RoleAssignment-phase-a.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-RoleAssignment-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-RoleAssignment-phase-b-evidence.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-RoleAssignment-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleDefinitions

```powershell
Push-Location target
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleDefinitions' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-RoleDefinitions-phase-a.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-RoleDefinitions-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleDefinitions' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-RoleDefinitions-phase-b-evidence.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-RoleDefinitions-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleManagementAlerts

```powershell
Push-Location target
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleManagementAlerts' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-RoleManagementAlerts-phase-a.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-RoleManagementAlerts-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleManagementAlerts' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-RoleManagementAlerts-phase-b-evidence.json' --markdown-output '../specification-authorization-resource-manager-Microsoft.Authorization-Authorization-RoleManagementAlerts-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/automation/resource-manager/Microsoft.Automation/Automation

```powershell
Push-Location target
node $prepared.executable 'specification/automation/resource-manager/Microsoft.Automation/Automation' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-automation-resource-manager-Microsoft.Automation-Automation-phase-a.json' --markdown-output '../specification-automation-resource-manager-Microsoft.Automation-Automation-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/automation/resource-manager/Microsoft.Automation/Automation' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-automation-resource-manager-Microsoft.Automation-Automation-phase-b-evidence.json' --markdown-output '../specification-automation-resource-manager-Microsoft.Automation-Automation-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/awsconnector/AccessAnalyzerAnalyzer.Management

```powershell
Push-Location target
node $prepared.executable 'specification/awsconnector/AccessAnalyzerAnalyzer.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-awsconnector-AccessAnalyzerAnalyzer.Management-phase-a.json' --markdown-output '../specification-awsconnector-AccessAnalyzerAnalyzer.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/awsconnector/AccessAnalyzerAnalyzer.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-awsconnector-AccessAnalyzerAnalyzer.Management-phase-b-evidence.json' --markdown-output '../specification-awsconnector-AccessAnalyzerAnalyzer.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/awsconnector/AcmCertificateSummary.Management

```powershell
Push-Location target
node $prepared.executable 'specification/awsconnector/AcmCertificateSummary.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-awsconnector-AcmCertificateSummary.Management-phase-a.json' --markdown-output '../specification-awsconnector-AcmCertificateSummary.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/awsconnector/AcmCertificateSummary.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-awsconnector-AcmCertificateSummary.Management-phase-b-evidence.json' --markdown-output '../specification-awsconnector-AcmCertificateSummary.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/awsconnector/ApiGatewayRestApi.Management

```powershell
Push-Location target
node $prepared.executable 'specification/awsconnector/ApiGatewayRestApi.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-awsconnector-ApiGatewayRestApi.Management-phase-a.json' --markdown-output '../specification-awsconnector-ApiGatewayRestApi.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/awsconnector/ApiGatewayRestApi.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-awsconnector-ApiGatewayRestApi.Management-phase-b-evidence.json' --markdown-output '../specification-awsconnector-ApiGatewayRestApi.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/awsconnector/ApiGatewayStage.Management

```powershell
Push-Location target
node $prepared.executable 'specification/awsconnector/ApiGatewayStage.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-awsconnector-ApiGatewayStage.Management-phase-a.json' --markdown-output '../specification-awsconnector-ApiGatewayStage.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/awsconnector/ApiGatewayStage.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-awsconnector-ApiGatewayStage.Management-phase-b-evidence.json' --markdown-output '../specification-awsconnector-ApiGatewayStage.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/awsconnector/AppSyncGraphqlApi.Management

```powershell
Push-Location target
node $prepared.executable 'specification/awsconnector/AppSyncGraphqlApi.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-awsconnector-AppSyncGraphqlApi.Management-phase-a.json' --markdown-output '../specification-awsconnector-AppSyncGraphqlApi.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/awsconnector/AppSyncGraphqlApi.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-awsconnector-AppSyncGraphqlApi.Management-phase-b-evidence.json' --markdown-output '../specification-awsconnector-AppSyncGraphqlApi.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/awsconnector/AutoScalingAutoScalingGroup.Management

```powershell
Push-Location target
node $prepared.executable 'specification/awsconnector/AutoScalingAutoScalingGroup.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-awsconnector-AutoScalingAutoScalingGroup.Management-phase-a.json' --markdown-output '../specification-awsconnector-AutoScalingAutoScalingGroup.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/awsconnector/AutoScalingAutoScalingGroup.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-awsconnector-AutoScalingAutoScalingGroup.Management-phase-b-evidence.json' --markdown-output '../specification-awsconnector-AutoScalingAutoScalingGroup.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/awsconnector/Awsconnector.Management

```powershell
Push-Location target
node $prepared.executable 'specification/awsconnector/Awsconnector.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-awsconnector-Awsconnector.Management-phase-a.json' --markdown-output '../specification-awsconnector-Awsconnector.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/awsconnector/Awsconnector.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-awsconnector-Awsconnector.Management-phase-b-evidence.json' --markdown-output '../specification-awsconnector-Awsconnector.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/awsconnector/CloudFormationStack.Management

```powershell
Push-Location target
node $prepared.executable 'specification/awsconnector/CloudFormationStack.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-awsconnector-CloudFormationStack.Management-phase-a.json' --markdown-output '../specification-awsconnector-CloudFormationStack.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/awsconnector/CloudFormationStack.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-awsconnector-CloudFormationStack.Management-phase-b-evidence.json' --markdown-output '../specification-awsconnector-CloudFormationStack.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/awsconnector/CloudFormationStackSet.Management

```powershell
Push-Location target
node $prepared.executable 'specification/awsconnector/CloudFormationStackSet.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-awsconnector-CloudFormationStackSet.Management-phase-a.json' --markdown-output '../specification-awsconnector-CloudFormationStackSet.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/awsconnector/CloudFormationStackSet.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-awsconnector-CloudFormationStackSet.Management-phase-b-evidence.json' --markdown-output '../specification-awsconnector-CloudFormationStackSet.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/awsconnector/CloudFrontDistribution.Management

```powershell
Push-Location target
node $prepared.executable 'specification/awsconnector/CloudFrontDistribution.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-awsconnector-CloudFrontDistribution.Management-phase-a.json' --markdown-output '../specification-awsconnector-CloudFrontDistribution.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/awsconnector/CloudFrontDistribution.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-awsconnector-CloudFrontDistribution.Management-phase-b-evidence.json' --markdown-output '../specification-awsconnector-CloudFrontDistribution.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/awsconnector/CloudTrailTrail.Management

```powershell
Push-Location target
node $prepared.executable 'specification/awsconnector/CloudTrailTrail.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-awsconnector-CloudTrailTrail.Management-phase-a.json' --markdown-output '../specification-awsconnector-CloudTrailTrail.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/awsconnector/CloudTrailTrail.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-awsconnector-CloudTrailTrail.Management-phase-b-evidence.json' --markdown-output '../specification-awsconnector-CloudTrailTrail.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/awsconnector/CloudWatchAlarm.Management

```powershell
Push-Location target
node $prepared.executable 'specification/awsconnector/CloudWatchAlarm.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-awsconnector-CloudWatchAlarm.Management-phase-a.json' --markdown-output '../specification-awsconnector-CloudWatchAlarm.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/awsconnector/CloudWatchAlarm.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-awsconnector-CloudWatchAlarm.Management-phase-b-evidence.json' --markdown-output '../specification-awsconnector-CloudWatchAlarm.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/awsconnector/CodeBuildProject.Management

```powershell
Push-Location target
node $prepared.executable 'specification/awsconnector/CodeBuildProject.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --phase same-version --json-output '../specification-awsconnector-CodeBuildProject.Management-phase-a.json' --markdown-output '../specification-awsconnector-CodeBuildProject.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/awsconnector/CodeBuildProject.Management' --base-ref fcc20ab8473a30946221a1b876c89aa9f61447b9 --json-output '../specification-awsconnector-CodeBuildProject.Management-phase-b-evidence.json' --markdown-output '../specification-awsconnector-CodeBuildProject.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/agricultureplatform/AgriculturePlatform.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/ai-foundry/data-plane/Foundry: Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 68 error(s) found:
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
; Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 68 error(s) found:
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

- specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-agent-contracts: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-extensions-openai: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects: Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
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
- specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents: Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>

- specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-projects: Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>

- specification/ai-foundry/data-plane/Foundry/src/sdk-python-js-azure-ai-projects: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/ai/data-plane/ContentUnderstanding: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/ai/data-plane/HealthInsights/RadiologyInsights: Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>
; Analysis failed: Failed to compile the base revision (fcc20ab8473a30946221a1b876c89aa9f61447b9): 1 error(s) found:
  error file-not-found: File C:<local-path>

- specification/ai/data-plane/OpenAIAssistants: Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Available tests: [type()].
; Analysis failed: Unable to distinguish language type of union variant "vectorStoreIds" with available runtime checks. Indistinguishable from: [vectorStores]. Variant type category: array. Available tests: [type()].

- specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertProcessingRules: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertRuleRecommendations: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/AlertsManagement: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/PrometheusRuleGroups: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/TenantActivityLogAlerts: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/apicenter/data-plane/ApiCenter: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/apimanagement/resource-manager/Microsoft.ApiManagement/AIGateway: Analysis failed: spawn git ENOENT
; Analysis failed: spawn git ENOENT

- specification/apimanagement/resource-manager/Microsoft.ApiManagement/ApiManagement: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/appcomplianceautomation/resource-manager/Microsoft.AppComplianceAutomation/AppComplianceAutomation: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/appconfiguration/resource-manager/Microsoft.AppConfiguration/AppConfiguration: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/applicationinsights/data-plane/Exporters: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/applicationinsights/data-plane/LiveMetrics: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/AnalyticsItems: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentAPIs: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/ComponentLinkedStorageAccountApi: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Components: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/DeletedWorkbookApi: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/Favorites: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/LiveTokenApi: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestLocation: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WebTestsApi: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkBookOperations: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbookTemplatesApi: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/applicationinsights/resource-manager/Microsoft.Insights/ApplicationInsights/WorkbooksApi: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/artifactsigning/data-plane/ArtifactSigning: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/attestation/data-plane/Attestation: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/attestation/resource-manager/Microsoft.Attestation/Attestation: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/authorization/resource-manager/Microsoft.Authorization/Authorization: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AccessReview: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/authorization/resource-manager/Microsoft.Authorization/Authorization/AttributeNamespaces: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/authorization/resource-manager/Microsoft.Authorization/Authorization/Authorization: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ClassicAdmin: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/authorization/resource-manager/Microsoft.Authorization/Authorization/DenyAssignment: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/authorization/resource-manager/Microsoft.Authorization/Authorization/PrivilegedAccess: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/authorization/resource-manager/Microsoft.Authorization/Authorization/ProviderOperations: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleAssignment: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleDefinitions: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/authorization/resource-manager/Microsoft.Authorization/Authorization/RoleManagementAlerts: Missing, malformed, or schema-invalid TypeSpec report: Error: ENOENT: no such file or directory, open '<local-path>'; analyzer output: node:events:487
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
- specification/awsconnector/AccessAnalyzerAnalyzer.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/awsconnector/AcmCertificateSummary.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/awsconnector/ApiGatewayRestApi.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/awsconnector/ApiGatewayStage.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/awsconnector/AppSyncGraphqlApi.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/awsconnector/AutoScalingAutoScalingGroup.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/awsconnector/CloudFormationStack.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/awsconnector/CloudFormationStackSet.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/awsconnector/CloudFrontDistribution.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/awsconnector/CloudTrailTrail.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/awsconnector/CloudWatchAlarm.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

- specification/awsconnector/CodeBuildProject.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

