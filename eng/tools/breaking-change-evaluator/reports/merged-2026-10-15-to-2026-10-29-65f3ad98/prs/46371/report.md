# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-46371:c773c23d5ec6c65244d5554ab808054cf58cbc28`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46371 — [JS] use exact() for js customization](https://github.com/Azure/azure-rest-api-specs/pull/46371)
- **Author:** kazrael2119
- **State:** closed (merged) at 2026-10-19T00:53:51Z
- **Base:** `main` at `3b386d94c8a520fb6bb626b8e667e0b69a9df96a`
- **Head:** `try-exact-for-js-customize` at `c773c23d5ec6c65244d5554ab808054cf58cbc28`
- **Changed TypeSpec files:** `specification/computeschedule/resource-manager/Microsoft.ComputeSchedule/ComputeSchedule/client.tsp`, `specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry/client.tsp`, `specification/devopsinfrastructure/resource-manager/Microsoft.DevOpsInfrastructure/DevOpsInfrastructure/client.tsp`, `specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/client.tsp`, `specification/healthdataaiservices/resource-manager/Microsoft.HealthDataAIServices/HealthDataAIServices/client.tsp`, `specification/iotoperations/resource-manager/Microsoft.IoTOperations/IoTOperations/client.tsp`, `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster/client.tsp`, `specification/monitor/resource-manager/Microsoft.Insights/Insights/client.tsp`, `specification/netapp/resource-manager/Microsoft.NetApp/NetApp/client.tsp`, `specification/playwrighttesting/PlaywrightTesting.Management/client.tsp`, `specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights/client.tsp`, `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup/client.tsp`, `specification/relay/resource-manager/Microsoft.Relay/Relay/client.tsp`, `specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/ServiceNetworking/client.tsp`, `specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/SqlVirtualMachine/client.tsp`, `specification/standbypool/resource-manager/Microsoft.StandbyPool/StandbyPool/client.tsp`, `specification/storage/resource-manager/Microsoft.Storage/Storage/client.tsp`

<a id="finding-review"></a>
## Finding review

Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.

<a id="finding-review-correlations"></a>
### Correlations

None.

<a id="finding-review-partial"></a>
### Partial correlations

None.

<a id="finding-review-oad-only"></a>
### OAD-only findings

None.

<a id="finding-review-typespec-only"></a>
### TypeSpec-only findings

| Phase | Finding | Type / path | Source | Analysis | Suggested review | Details |
| --- | --- | --- | --- | --- | --- | --- |
| A | `RequestPropertyTypeNarrowed` | body.properties.tags.variants.TypeSpec.Record | [head](https://github.com/Azure/azure-rest-api-specs/blob/c773c23d5ec6c65244d5554ab808054cf58cbc28/specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/models.tsp#L1768) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-reciprocal-narrowed-widened-pair-432342df7b351641](#issue-reciprocal-narrowed-widened-pair-432342df7b351641). | Review structural type identity and deduplicate reciprocal change reports. | [details](#finding-typespec-specification-hdinsight-resource-manager-microsoft-hdinsight-hdinsight-tsp-a-0) |
| A | `RequestPropertyTypeWidened` | body.properties.tags.variants.TypeSpec.Record | [head](https://github.com/Azure/azure-rest-api-specs/blob/c773c23d5ec6c65244d5554ab808054cf58cbc28/specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Cluster.tsp#L66) | No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect. [issue-reciprocal-narrowed-widened-pair-432342df7b351641](#issue-reciprocal-narrowed-widened-pair-432342df7b351641). | Review structural type identity and deduplicate reciprocal change reports. | [details](#finding-typespec-specification-hdinsight-resource-manager-microsoft-hdinsight-hdinsight-tsp-a-1) |

<a id="finding-review-ambiguous"></a>
### Ambiguous findings

None.

<a id="finding-review-errors"></a>
### Evidence and execution failures

| Phase | Scope | Failure | Available evidence | Analysis | Details |
| --- | --- | --- | --- | --- | --- |
| — | Report execution | specification/iotoperations/resource-manager/Microsoft.IoTOperations/IoTOperations: Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown. ; Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown. | [workflow 38715543923](https://github.com/Azure/azure-rest-api-specs/actions/runs/38715543923) · [workflow 38715543857](https://github.com/Azure/azure-rest-api-specs/actions/runs/38715543857) | Comparison is incomplete; do not treat absent findings as detector agreement. | [details](#evidence-error-1) |
| — | Report execution | specification/monitor/resource-manager/Microsoft.Insights/Insights: Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error file-not-found: File <local-path> ; Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error file-not-found: File <local-path> | [workflow 38715543923](https://github.com/Azure/azure-rest-api-specs/actions/runs/38715543923) · [workflow 38715543857](https://github.com/Azure/azure-rest-api-specs/actions/runs/38715543857) | Comparison is incomplete; do not treat absent findings as detector agreement. | [details](#evidence-error-2) |
| — | Report execution | specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights: Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error file-not-found: File <local-path> ; Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error file-not-found: File <local-path> | [workflow 38715543923](https://github.com/Azure/azure-rest-api-specs/actions/runs/38715543923) · [workflow 38715543857](https://github.com/Azure/azure-rest-api-specs/actions/runs/38715543857) | Comparison is incomplete; do not treat absent findings as detector agreement. | [details](#evidence-error-3) |

<a id="finding-review-intentional"></a>
### Intentional Swagger-only gaps

None.

<a id="finding-review-informational"></a>
### Informational OAD records

None.

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 137715 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38715543923) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/c68bc84e08bab5ac-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/9dc15a9f8aded987-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/c1ecabb6f66ba4a7-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/d00f78f5813386ac-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/246cc19a448a07ae-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/76bfd02229b8c5da-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/d576ba5f97304776-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/05203fab0aa52250-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/ecccb9100eb6b9f7-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/5a2890a92772bb20-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/97f06217f38f8af6-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/4371f83ce0c2e304-phase-a.md); [TypeSpec Phase A report](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 143924 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/38715543857) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/c68bc84e08bab5ac-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/9dc15a9f8aded987-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/c1ecabb6f66ba4a7-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/d00f78f5813386ac-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/246cc19a448a07ae-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/af97c3bfeee72cfb-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/76bfd02229b8c5da-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/d576ba5f97304776-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/05203fab0aa52250-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/ecccb9100eb6b9f7-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/5a2890a92772bb20-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/97f06217f38f8af6-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/4371f83ce0c2e304-phase-b.md); [TypeSpec combined report containing Phase B](report-artifacts/typespec/34d48bf6162c6014-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/computeschedule/resource-manager/Microsoft.ComputeSchedule/ComputeSchedule` | Phase A (`same-version`) | `2024-08-15-preview` → `2024-08-15-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c68bc84e08bab5ac-phase-a.md) |
| `specification/computeschedule/resource-manager/Microsoft.ComputeSchedule/ComputeSchedule` | Phase A (`same-version`) | `2024-10-01` → `2024-10-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c68bc84e08bab5ac-phase-a.md) |
| `specification/computeschedule/resource-manager/Microsoft.ComputeSchedule/ComputeSchedule` | Phase A (`same-version`) | `2025-05-01` → `2025-05-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c68bc84e08bab5ac-phase-a.md) |
| `specification/computeschedule/resource-manager/Microsoft.ComputeSchedule/ComputeSchedule` | Phase A (`same-version`) | `2025-04-15-preview` → `2025-04-15-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c68bc84e08bab5ac-phase-a.md) |
| `specification/computeschedule/resource-manager/Microsoft.ComputeSchedule/ComputeSchedule` | Phase A (`same-version`) | `2026-01-01-preview` → `2026-01-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c68bc84e08bab5ac-phase-a.md) |
| `specification/computeschedule/resource-manager/Microsoft.ComputeSchedule/ComputeSchedule` | Phase A (`same-version`) | `2026-03-01-preview` → `2026-03-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c68bc84e08bab5ac-phase-a.md) |
| `specification/computeschedule/resource-manager/Microsoft.ComputeSchedule/ComputeSchedule` | Phase A (`same-version`) | `2026-04-15-preview` → `2026-04-15-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c68bc84e08bab5ac-phase-a.md) |
| `specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry` | Phase A (`same-version`) | `2025-11-01` → `2025-11-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/9dc15a9f8aded987-phase-a.md) |
| `specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry` | Phase A (`same-version`) | `2026-09-01-preview` → `2026-09-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/9dc15a9f8aded987-phase-a.md) |
| `specification/devopsinfrastructure/resource-manager/Microsoft.DevOpsInfrastructure/DevOpsInfrastructure` | Phase A (`same-version`) | `2025-01-21` → `2025-01-21` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c1ecabb6f66ba4a7-phase-a.md) |
| `specification/devopsinfrastructure/resource-manager/Microsoft.DevOpsInfrastructure/DevOpsInfrastructure` | Phase A (`same-version`) | `2025-09-20` → `2025-09-20` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c1ecabb6f66ba4a7-phase-a.md) |
| `specification/devopsinfrastructure/resource-manager/Microsoft.DevOpsInfrastructure/DevOpsInfrastructure` | Phase A (`same-version`) | `2026-04-17-preview` → `2026-04-17-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c1ecabb6f66ba4a7-phase-a.md) |
| `specification/devopsinfrastructure/resource-manager/Microsoft.DevOpsInfrastructure/DevOpsInfrastructure` | Phase A (`same-version`) | `2026-06-02` → `2026-06-02` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c1ecabb6f66ba4a7-phase-a.md) |
| `specification/devopsinfrastructure/resource-manager/Microsoft.DevOpsInfrastructure/DevOpsInfrastructure` | Phase A (`same-version`) | `2026-07-03-preview` → `2026-07-03-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/c1ecabb6f66ba4a7-phase-a.md) |
| `specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight` | Phase A (`same-version`) | `2025-01-15-preview` → `2025-01-15-preview` | 1 | 2 | 2 | [generated Markdown](report-artifacts/typespec/d00f78f5813386ac-phase-a.md) |
| `specification/healthdataaiservices/resource-manager/Microsoft.HealthDataAIServices/HealthDataAIServices` | Phase A (`same-version`) | `2024-09-20` → `2024-09-20` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/246cc19a448a07ae-phase-a.md) |
| `specification/iotoperations/resource-manager/Microsoft.IoTOperations/IoTOperations` | Phase A (`same-version`) | Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown.
 | 0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/35835db16c9b7cd6-phase-a.md) |
| `specification/iotoperations/resource-manager/Microsoft.IoTOperations/IoTOperations` | Phase B (`cross-version`) | Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown.
 | 0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/35835db16c9b7cd6-phase-b.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2024-03-01-preview` → `2024-03-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2024-06-01-preview` → `2024-06-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2024-07-01` → `2024-07-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2024-10-01-preview` → `2024-10-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2025-04-01-preview` → `2025-04-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2025-07-01-preview` → `2025-07-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2025-08-01-preview` → `2025-08-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2025-09-01` → `2025-09-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2026-02-01-preview` → `2026-02-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2026-06-01` → `2026-06-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster` | Phase A (`same-version`) | `2026-06-15-preview` → `2026-06-15-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/af97c3bfeee72cfb-phase-a.md) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights` | Phase A (`same-version`) | Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error file-not-found: File <local-path>
 | 0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d8fc44332c61eb85-phase-a.md) |
| `specification/monitor/resource-manager/Microsoft.Insights/Insights` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error file-not-found: File <local-path>
 | 0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/d8fc44332c61eb85-phase-b.md) |
| `specification/netapp/resource-manager/Microsoft.NetApp/NetApp` | Phase A (`same-version`) | `2025-06-01` → `2025-06-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76bfd02229b8c5da-phase-a.md) |
| `specification/netapp/resource-manager/Microsoft.NetApp/NetApp` | Phase A (`same-version`) | `2025-08-01` → `2025-08-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76bfd02229b8c5da-phase-a.md) |
| `specification/netapp/resource-manager/Microsoft.NetApp/NetApp` | Phase A (`same-version`) | `2025-09-01` → `2025-09-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76bfd02229b8c5da-phase-a.md) |
| `specification/netapp/resource-manager/Microsoft.NetApp/NetApp` | Phase A (`same-version`) | `2025-12-01` → `2025-12-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76bfd02229b8c5da-phase-a.md) |
| `specification/netapp/resource-manager/Microsoft.NetApp/NetApp` | Phase A (`same-version`) | `2025-12-15-preview` → `2025-12-15-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76bfd02229b8c5da-phase-a.md) |
| `specification/netapp/resource-manager/Microsoft.NetApp/NetApp` | Phase A (`same-version`) | `2026-01-01` → `2026-01-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76bfd02229b8c5da-phase-a.md) |
| `specification/netapp/resource-manager/Microsoft.NetApp/NetApp` | Phase A (`same-version`) | `2026-01-15-preview` → `2026-01-15-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76bfd02229b8c5da-phase-a.md) |
| `specification/netapp/resource-manager/Microsoft.NetApp/NetApp` | Phase A (`same-version`) | `2026-03-01` → `2026-03-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76bfd02229b8c5da-phase-a.md) |
| `specification/netapp/resource-manager/Microsoft.NetApp/NetApp` | Phase A (`same-version`) | `2026-03-15-preview` → `2026-03-15-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76bfd02229b8c5da-phase-a.md) |
| `specification/netapp/resource-manager/Microsoft.NetApp/NetApp` | Phase A (`same-version`) | `2026-04-01` → `2026-04-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76bfd02229b8c5da-phase-a.md) |
| `specification/netapp/resource-manager/Microsoft.NetApp/NetApp` | Phase A (`same-version`) | `2026-04-15-preview` → `2026-04-15-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76bfd02229b8c5da-phase-a.md) |
| `specification/netapp/resource-manager/Microsoft.NetApp/NetApp` | Phase A (`same-version`) | `2026-05-01` → `2026-05-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76bfd02229b8c5da-phase-a.md) |
| `specification/netapp/resource-manager/Microsoft.NetApp/NetApp` | Phase A (`same-version`) | `2026-05-15-preview` → `2026-05-15-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76bfd02229b8c5da-phase-a.md) |
| `specification/netapp/resource-manager/Microsoft.NetApp/NetApp` | Phase A (`same-version`) | `2026-06-01` → `2026-06-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76bfd02229b8c5da-phase-a.md) |
| `specification/netapp/resource-manager/Microsoft.NetApp/NetApp` | Phase A (`same-version`) | `2026-06-15-preview` → `2026-06-15-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/76bfd02229b8c5da-phase-a.md) |
| `specification/playwrighttesting/PlaywrightTesting.Management` | Phase A (`same-version`) | `2024-12-01` → `2024-12-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/d576ba5f97304776-phase-a.md) |
| `specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights` | Phase A (`same-version`) | Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error file-not-found: File <local-path>
 | 0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/901bf8d8808023fc-phase-a.md) |
| `specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights` | Phase B (`cross-version`) | Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error file-not-found: File <local-path>
 | 0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/901bf8d8808023fc-phase-b.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2025-02-01` → `2025-02-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2025-08-01` → `2025-08-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-01-01` → `2026-01-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-01-31-preview` → `2026-01-31-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-02-01` → `2026-02-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-03-31-preview` → `2026-03-31-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-05-01` → `2026-05-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-05-31-preview` → `2026-05-31-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-07-01` → `2026-07-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-08-01` → `2026-08-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-08-31-preview` → `2026-08-31-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup` | Phase A (`same-version`) | `2026-10-01` → `2026-10-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/05203fab0aa52250-phase-a.md) |
| `specification/relay/resource-manager/Microsoft.Relay/Relay` | Phase A (`same-version`) | `2024-01-01` → `2024-01-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/ecccb9100eb6b9f7-phase-a.md) |
| `specification/relay/resource-manager/Microsoft.Relay/Relay` | Phase A (`same-version`) | `2026-01-01` → `2026-01-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/ecccb9100eb6b9f7-phase-a.md) |
| `specification/relay/resource-manager/Microsoft.Relay/Relay` | Phase A (`same-version`) | `2026-07-01-preview` → `2026-07-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/ecccb9100eb6b9f7-phase-a.md) |
| `specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/ServiceNetworking` | Phase A (`same-version`) | `2023-11-01` → `2023-11-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/5a2890a92772bb20-phase-a.md) |
| `specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/ServiceNetworking` | Phase A (`same-version`) | `2024-05-01-preview` → `2024-05-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/5a2890a92772bb20-phase-a.md) |
| `specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/ServiceNetworking` | Phase A (`same-version`) | `2025-01-01` → `2025-01-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/5a2890a92772bb20-phase-a.md) |
| `specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/ServiceNetworking` | Phase A (`same-version`) | `2025-03-01-preview` → `2025-03-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/5a2890a92772bb20-phase-a.md) |
| `specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/ServiceNetworking` | Phase A (`same-version`) | `2026-03-01` → `2026-03-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/5a2890a92772bb20-phase-a.md) |
| `specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/SqlVirtualMachine` | Phase A (`same-version`) | `2023-10-01` → `2023-10-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/97f06217f38f8af6-phase-a.md) |
| `specification/standbypool/resource-manager/Microsoft.StandbyPool/StandbyPool` | Phase A (`same-version`) | `2023-12-01-preview` → `2023-12-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/4371f83ce0c2e304-phase-a.md) |
| `specification/standbypool/resource-manager/Microsoft.StandbyPool/StandbyPool` | Phase A (`same-version`) | `2024-03-01-preview` → `2024-03-01-preview` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/4371f83ce0c2e304-phase-a.md) |
| `specification/standbypool/resource-manager/Microsoft.StandbyPool/StandbyPool` | Phase A (`same-version`) | `2024-03-01` → `2024-03-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/4371f83ce0c2e304-phase-a.md) |
| `specification/standbypool/resource-manager/Microsoft.StandbyPool/StandbyPool` | Phase A (`same-version`) | `2025-03-01` → `2025-03-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/4371f83ce0c2e304-phase-a.md) |
| `specification/standbypool/resource-manager/Microsoft.StandbyPool/StandbyPool` | Phase A (`same-version`) | `2025-10-01` → `2025-10-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/4371f83ce0c2e304-phase-a.md) |
| `specification/standbypool/resource-manager/Microsoft.StandbyPool/StandbyPool` | Phase A (`same-version`) | `2026-04-01` → `2026-04-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/4371f83ce0c2e304-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2025-06-01` → `2025-06-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2025-08-01` → `2025-08-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2026-04-01` → `2026-04-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2026-06-01` → `2026-06-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |
| `specification/storage/resource-manager/Microsoft.Storage/Storage` | Phase A (`same-version`) | `2026-09-01` → `2026-09-01` | 1 | 0 | 0 | [generated Markdown](report-artifacts/typespec/34d48bf6162c6014-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-compile-runtime-failure-a1c0f52898dc7ef0"></a>`issue-compile-runtime-failure-a1c0f52898dc7ef0` | 0 | A, B | `compile-runtime-failure` | execution-failure | One or more evaluator, compile, or analyzer executions failed. Preserves a partial or failed outcome instead of success-shaped metrics. | Resolve the recorded execution error and rerun the same immutable input. | high; generated | `execution:execution-error-0` — specification/iotoperations/resource-manager/Microsoft.IoTOperations/IoTOperations: Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown. ; Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown. <br>`execution:execution-error-1` — specification/monitor/resource-manager/Microsoft.Insights/Insights: Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error file-not-found: File <local-path> ; Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error file-not-found: File <local-path> <br>`execution:execution-error-2` — specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights: Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error file-not-found: File <local-path> ; Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error file-not-found: File <local-path> <br>`execution:execution-error-3` — Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown. ; Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown. <br>`execution:execution-error-4` — Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error file-not-found: File <local-path> ; Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error file-not-found: File <local-path> <br>`execution:execution-error-5` — Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error file-not-found: File <local-path> ; Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:   error file-not-found: File <local-path> |
| <a id="issue-reciprocal-narrowed-widened-pair-432342df7b351641"></a>`issue-reciprocal-narrowed-widened-pair-432342df7b351641` | 2 | A | `reciprocal-narrowed-widened-pair` | likely-detector-defect | The same target and version pair was reported as both narrowed and widened in one comparison. Inflates TypeSpec-only Phase A totals by two findings. | Review structural type identity and deduplicate reciprocal change reports. | high; generated | `typespec-finding:specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight:tsp-A-0` — RequestPropertyTypeNarrowed: Request union at body.properties.tags removed variant TypeSpec.Record.<br>`typespec-finding:specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight:tsp-A-1` — RequestPropertyTypeWidened: Request union at body.properties.tags added variant TypeSpec.Record. |
| <a id="issue-typespec-only-91cd34dcdc04ba21"></a><a id="issue-typespec-only-cf1b5737a55ba243"></a>`issue-typespec-only-91cd34dcdc04ba21` (+1 related) | 2 | A | `typespec-only` | requires-review | The TypeSpec finding has no selected OAD equivalent. Contributes one finding to TypeSpec-only totals. | Confirm whether this is additional coverage, noise, or a matching gap. | medium; generated | `typespec-finding:specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight:tsp-A-0` — RequestPropertyTypeNarrowed: Request union at body.properties.tags removed variant TypeSpec.Record.<br>`typespec-finding:specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight:tsp-A-1` — RequestPropertyTypeWidened: Request union at body.properties.tags added variant TypeSpec.Record. |

## Finding details

<a id="finding-typespec-specification-hdinsight-resource-manager-microsoft-hdinsight-hdinsight-tsp-a-0"></a>
### specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight:tsp-A-0 — `RequestPropertyTypeNarrowed`

- **TypeSpec finding:** `specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight:tsp-A-0` — `RequestPropertyTypeNarrowed` — Request union at body.properties.tags removed variant TypeSpec.Record.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PATCH /subscriptions/{}/resourceGroups/{}/providers/Microsoft.HDInsight/clusters/{}; project `specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight`; versions `2025-01-15-preview` → `2025-01-15-preview`
- **Source declaration identity:** unavailable; use the operation-relative wire identity
- **Wire identity:** `body.properties.tags.variants.TypeSpec.Record`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/d00f78f5813386ac-phase-a.md) (digest `2adcbb12a1321b5b2e9a46b43d0ccfbb254b35d148905599c3f26cb9408225e0`)
- **TypeSpec source:** [head: specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/models.tsp, line 1768](https://github.com/Azure/azure-rest-api-specs/blob/c773c23d5ec6c65244d5554ab808054cf58cbc28/specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/models.tsp#L1768)
- **Related analysis:** [issue-reciprocal-narrowed-widened-pair-432342df7b351641](#issue-reciprocal-narrowed-widened-pair-432342df7b351641)

<a id="finding-typespec-specification-hdinsight-resource-manager-microsoft-hdinsight-hdinsight-tsp-a-1"></a>
### specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight:tsp-A-1 — `RequestPropertyTypeWidened`

- **TypeSpec finding:** `specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight:tsp-A-1` — `RequestPropertyTypeWidened` — Request union at body.properties.tags added variant TypeSpec.Record.
- **Comparison:** Phase A (`same-version`); severity `error`; suppressed **no**; actionable error **yes**
- **TypeSpec target:** PATCH /subscriptions/{}/resourceGroups/{}/providers/Microsoft.HDInsight/clusters/{}; project `specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight`; versions `2025-01-15-preview` → `2025-01-15-preview`
- **Source declaration identity:** unavailable; use the operation-relative wire identity
- **Wire identity:** `body.properties.tags.variants.TypeSpec.Record`
- **Detector evidence:** [TypeSpec Phase A analyzer report](report-artifacts/typespec/d00f78f5813386ac-phase-a.md) (digest `2adcbb12a1321b5b2e9a46b43d0ccfbb254b35d148905599c3f26cb9408225e0`)
- **TypeSpec source:** [head: specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Cluster.tsp, line 66](https://github.com/Azure/azure-rest-api-specs/blob/c773c23d5ec6c65244d5554ab808054cf58cbc28/specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight/Cluster.tsp#L66)
- **Related analysis:** [issue-reciprocal-narrowed-widened-pair-432342df7b351641](#issue-reciprocal-narrowed-widened-pair-432342df7b351641)

<a id="evidence-error-1"></a>
### Evidence error 1

- specification/iotoperations/resource-manager/Microsoft.IoTOperations/IoTOperations: Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown.
; Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown.


<a id="evidence-error-2"></a>
### Evidence error 2

- specification/monitor/resource-manager/Microsoft.Insights/Insights: Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error file-not-found: File <local-path>
; Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error file-not-found: File <local-path>


<a id="evidence-error-3"></a>
### Evidence error 3

- specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights: Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error file-not-found: File <local-path>
; Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error file-not-found: File <local-path>


## Reproduce

**Shell:** powershell

### Check out the evaluator

```powershell
git clone 'https://github.com/markcowl/azure-rest-api-specs.git' evaluator
git -C evaluator checkout 'f37db08ada6edd33d546129d99410fcce79aeb5a'
corepack pnpm --dir evaluator install --frozen-lockfile
```

### Prepare the immutable analyzer

```powershell
$prepared = node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js prepare --typespec-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a | ConvertFrom-Json
if ($prepared.artifactDigest -ne '95835342e0e018bc513e3f639a2b36ec641918b5db3084bdb380fce3bd8f6cc5') { throw 'Prepared analyzer digest does not match the report' }
```

### Check out the evaluated target

```powershell
git clone --filter=blob:none --no-checkout 'https://github.com/Azure/azure-rest-api-specs.git' target
git -C target fetch --no-tags origin 3b386d94c8a520fb6bb626b8e667e0b69a9df96a c773c23d5ec6c65244d5554ab808054cf58cbc28
git -C target checkout --detach c773c23d5ec6c65244d5554ab808054cf58cbc28
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/46371' --tool-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/computeschedule/resource-manager/Microsoft.ComputeSchedule/ComputeSchedule

```powershell
Push-Location target
node $prepared.executable 'specification/computeschedule/resource-manager/Microsoft.ComputeSchedule/ComputeSchedule' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-computeschedule-resource-manager-Microsoft.ComputeSchedule-ComputeSchedule-phase-a.json' --markdown-output '../specification-computeschedule-resource-manager-Microsoft.ComputeSchedule-ComputeSchedule-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/computeschedule/resource-manager/Microsoft.ComputeSchedule/ComputeSchedule' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-computeschedule-resource-manager-Microsoft.ComputeSchedule-ComputeSchedule-phase-b-evidence.json' --markdown-output '../specification-computeschedule-resource-manager-Microsoft.ComputeSchedule-ComputeSchedule-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry

```powershell
Push-Location target
node $prepared.executable 'specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-containerregistry-resource-manager-Microsoft.ContainerRegistry-Registry-phase-a.json' --markdown-output '../specification-containerregistry-resource-manager-Microsoft.ContainerRegistry-Registry-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/Registry' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-containerregistry-resource-manager-Microsoft.ContainerRegistry-Registry-phase-b-evidence.json' --markdown-output '../specification-containerregistry-resource-manager-Microsoft.ContainerRegistry-Registry-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/devopsinfrastructure/resource-manager/Microsoft.DevOpsInfrastructure/DevOpsInfrastructure

```powershell
Push-Location target
node $prepared.executable 'specification/devopsinfrastructure/resource-manager/Microsoft.DevOpsInfrastructure/DevOpsInfrastructure' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-devopsinfrastructure-resource-manager-Microsoft.DevOpsInfrastructure-DevOpsInfrastructure-phase-a.json' --markdown-output '../specification-devopsinfrastructure-resource-manager-Microsoft.DevOpsInfrastructure-DevOpsInfrastructure-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/devopsinfrastructure/resource-manager/Microsoft.DevOpsInfrastructure/DevOpsInfrastructure' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-devopsinfrastructure-resource-manager-Microsoft.DevOpsInfrastructure-DevOpsInfrastructure-phase-b-evidence.json' --markdown-output '../specification-devopsinfrastructure-resource-manager-Microsoft.DevOpsInfrastructure-DevOpsInfrastructure-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight

```powershell
Push-Location target
node $prepared.executable 'specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-hdinsight-resource-manager-Microsoft.HDInsight-HDInsight-phase-a.json' --markdown-output '../specification-hdinsight-resource-manager-Microsoft.HDInsight-HDInsight-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsight' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-hdinsight-resource-manager-Microsoft.HDInsight-HDInsight-phase-b-evidence.json' --markdown-output '../specification-hdinsight-resource-manager-Microsoft.HDInsight-HDInsight-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/healthdataaiservices/resource-manager/Microsoft.HealthDataAIServices/HealthDataAIServices

```powershell
Push-Location target
node $prepared.executable 'specification/healthdataaiservices/resource-manager/Microsoft.HealthDataAIServices/HealthDataAIServices' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-healthdataaiservices-resource-manager-Microsoft.HealthDataAIServices-HealthDataAIServices-phase-a.json' --markdown-output '../specification-healthdataaiservices-resource-manager-Microsoft.HealthDataAIServices-HealthDataAIServices-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/healthdataaiservices/resource-manager/Microsoft.HealthDataAIServices/HealthDataAIServices' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-healthdataaiservices-resource-manager-Microsoft.HealthDataAIServices-HealthDataAIServices-phase-b-evidence.json' --markdown-output '../specification-healthdataaiservices-resource-manager-Microsoft.HealthDataAIServices-HealthDataAIServices-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/iotoperations/resource-manager/Microsoft.IoTOperations/IoTOperations

```powershell
Push-Location target
node $prepared.executable 'specification/iotoperations/resource-manager/Microsoft.IoTOperations/IoTOperations' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-iotoperations-resource-manager-Microsoft.IoTOperations-IoTOperations-phase-a.json' --markdown-output '../specification-iotoperations-resource-manager-Microsoft.IoTOperations-IoTOperations-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/iotoperations/resource-manager/Microsoft.IoTOperations/IoTOperations' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-iotoperations-resource-manager-Microsoft.IoTOperations-IoTOperations-phase-b-evidence.json' --markdown-output '../specification-iotoperations-resource-manager-Microsoft.IoTOperations-IoTOperations-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster

```powershell
Push-Location target
node $prepared.executable 'specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-mongocluster-resource-manager-Microsoft.DocumentDB-MongoCluster-phase-a.json' --markdown-output '../specification-mongocluster-resource-manager-Microsoft.DocumentDB-MongoCluster-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/mongocluster/resource-manager/Microsoft.DocumentDB/MongoCluster' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-mongocluster-resource-manager-Microsoft.DocumentDB-MongoCluster-phase-b-evidence.json' --markdown-output '../specification-mongocluster-resource-manager-Microsoft.DocumentDB-MongoCluster-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/monitor/resource-manager/Microsoft.Insights/Insights

```powershell
Push-Location target
node $prepared.executable 'specification/monitor/resource-manager/Microsoft.Insights/Insights' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-monitor-resource-manager-Microsoft.Insights-Insights-phase-a.json' --markdown-output '../specification-monitor-resource-manager-Microsoft.Insights-Insights-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/monitor/resource-manager/Microsoft.Insights/Insights' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-monitor-resource-manager-Microsoft.Insights-Insights-phase-b-evidence.json' --markdown-output '../specification-monitor-resource-manager-Microsoft.Insights-Insights-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/netapp/resource-manager/Microsoft.NetApp/NetApp

```powershell
Push-Location target
node $prepared.executable 'specification/netapp/resource-manager/Microsoft.NetApp/NetApp' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-netapp-resource-manager-Microsoft.NetApp-NetApp-phase-a.json' --markdown-output '../specification-netapp-resource-manager-Microsoft.NetApp-NetApp-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/netapp/resource-manager/Microsoft.NetApp/NetApp' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-netapp-resource-manager-Microsoft.NetApp-NetApp-phase-b-evidence.json' --markdown-output '../specification-netapp-resource-manager-Microsoft.NetApp-NetApp-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/playwrighttesting/PlaywrightTesting.Management

```powershell
Push-Location target
node $prepared.executable 'specification/playwrighttesting/PlaywrightTesting.Management' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-playwrighttesting-PlaywrightTesting.Management-phase-a.json' --markdown-output '../specification-playwrighttesting-PlaywrightTesting.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/playwrighttesting/PlaywrightTesting.Management' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-playwrighttesting-PlaywrightTesting.Management-phase-b-evidence.json' --markdown-output '../specification-playwrighttesting-PlaywrightTesting.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights

```powershell
Push-Location target
node $prepared.executable 'specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-policyinsights-resource-manager-Microsoft.PolicyInsights-PolicyInsights-phase-a.json' --markdown-output '../specification-policyinsights-resource-manager-Microsoft.PolicyInsights-PolicyInsights-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-policyinsights-resource-manager-Microsoft.PolicyInsights-PolicyInsights-phase-b-evidence.json' --markdown-output '../specification-policyinsights-resource-manager-Microsoft.PolicyInsights-PolicyInsights-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup

```powershell
Push-Location target
node $prepared.executable 'specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-recoveryservicesbackup-resource-manager-Microsoft.RecoveryServices-RecoveryServicesBackup-phase-a.json' --markdown-output '../specification-recoveryservicesbackup-resource-manager-Microsoft.RecoveryServices-RecoveryServicesBackup-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/RecoveryServicesBackup' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-recoveryservicesbackup-resource-manager-Microsoft.RecoveryServices-RecoveryServicesBackup-phase-b-evidence.json' --markdown-output '../specification-recoveryservicesbackup-resource-manager-Microsoft.RecoveryServices-RecoveryServicesBackup-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/relay/resource-manager/Microsoft.Relay/Relay

```powershell
Push-Location target
node $prepared.executable 'specification/relay/resource-manager/Microsoft.Relay/Relay' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-relay-resource-manager-Microsoft.Relay-Relay-phase-a.json' --markdown-output '../specification-relay-resource-manager-Microsoft.Relay-Relay-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/relay/resource-manager/Microsoft.Relay/Relay' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-relay-resource-manager-Microsoft.Relay-Relay-phase-b-evidence.json' --markdown-output '../specification-relay-resource-manager-Microsoft.Relay-Relay-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/ServiceNetworking

```powershell
Push-Location target
node $prepared.executable 'specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/ServiceNetworking' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-servicenetworking-resource-manager-Microsoft.ServiceNetworking-ServiceNetworking-phase-a.json' --markdown-output '../specification-servicenetworking-resource-manager-Microsoft.ServiceNetworking-ServiceNetworking-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/servicenetworking/resource-manager/Microsoft.ServiceNetworking/ServiceNetworking' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-servicenetworking-resource-manager-Microsoft.ServiceNetworking-ServiceNetworking-phase-b-evidence.json' --markdown-output '../specification-servicenetworking-resource-manager-Microsoft.ServiceNetworking-ServiceNetworking-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/SqlVirtualMachine

```powershell
Push-Location target
node $prepared.executable 'specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/SqlVirtualMachine' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-sqlvirtualmachine-resource-manager-Microsoft.SqlVirtualMachine-SqlVirtualMachine-phase-a.json' --markdown-output '../specification-sqlvirtualmachine-resource-manager-Microsoft.SqlVirtualMachine-SqlVirtualMachine-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/sqlvirtualmachine/resource-manager/Microsoft.SqlVirtualMachine/SqlVirtualMachine' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-sqlvirtualmachine-resource-manager-Microsoft.SqlVirtualMachine-SqlVirtualMachine-phase-b-evidence.json' --markdown-output '../specification-sqlvirtualmachine-resource-manager-Microsoft.SqlVirtualMachine-SqlVirtualMachine-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/standbypool/resource-manager/Microsoft.StandbyPool/StandbyPool

```powershell
Push-Location target
node $prepared.executable 'specification/standbypool/resource-manager/Microsoft.StandbyPool/StandbyPool' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-standbypool-resource-manager-Microsoft.StandbyPool-StandbyPool-phase-a.json' --markdown-output '../specification-standbypool-resource-manager-Microsoft.StandbyPool-StandbyPool-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/standbypool/resource-manager/Microsoft.StandbyPool/StandbyPool' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-standbypool-resource-manager-Microsoft.StandbyPool-StandbyPool-phase-b-evidence.json' --markdown-output '../specification-standbypool-resource-manager-Microsoft.StandbyPool-StandbyPool-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

### Run the TypeSpec analyzer for specification/storage/resource-manager/Microsoft.Storage/Storage

```powershell
Push-Location target
node $prepared.executable 'specification/storage/resource-manager/Microsoft.Storage/Storage' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --phase same-version --json-output '../specification-storage-resource-manager-Microsoft.Storage-Storage-phase-a.json' --markdown-output '../specification-storage-resource-manager-Microsoft.Storage-Storage-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/storage/resource-manager/Microsoft.Storage/Storage' --base-ref 3b386d94c8a520fb6bb626b8e667e0b69a9df96a --json-output '../specification-storage-resource-manager-Microsoft.Storage-Storage-phase-b-evidence.json' --markdown-output '../specification-storage-resource-manager-Microsoft.Storage-Storage-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/iotoperations/resource-manager/Microsoft.IoTOperations/IoTOperations: Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown.
; Analysis failed: Unable to determine distinguishing runtime checks for language type of union variant "Symbol(name)". Indistinguishable from: [Symbol(name)]. Variant type category: unknown.

- specification/monitor/resource-manager/Microsoft.Insights/Insights: Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error file-not-found: File <local-path>
; Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error file-not-found: File <local-path>

- specification/policyinsights/resource-manager/Microsoft.PolicyInsights/PolicyInsights: Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error file-not-found: File <local-path>
; Analysis failed: Failed to compile the base revision (3b386d94c8a520fb6bb626b8e667e0b69a9df96a): 1 error(s) found:
  error file-not-found: File <local-path>

