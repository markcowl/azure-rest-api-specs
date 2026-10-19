# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-46724:7c1182a22abef1d868778f756ecefbf7df0c03d8`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46724 — Merge `feature/foundry-release` branch to `main`](https://github.com/Azure/azure-rest-api-specs/pull/46724)
- **Author:** dargilco
- **State:** open
- **Base:** `main` at `8f99c33c108147fcc716e71a764010084fe5d034`
- **Head:** `feature/foundry-release` at `7c1182a22abef1d868778f756ecefbf7df0c03d8`
- **Changed TypeSpec files:** `specification/ai-foundry/data-plane/Foundry/main.tsp`, `specification/ai-foundry/data-plane/Foundry/src/agents/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/common/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/common/servicepatterns.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents/tspconfig.yaml`, `specification/ai-foundry/data-plane/Foundry/src/sdk-python-azure-ai-finetuningsessions/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-python-azure-ai-finetuningsessions/tspconfig.yaml`, `specification/ai-foundry/data-plane/Foundry/src/session-finetuning/models-custom-code.tsp`, `specification/ai-foundry/data-plane/Foundry/src/session-finetuning/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/session-finetuning/routes.tsp`, `specification/ai-foundry/data-plane/Foundry/src/voice-agents/agents.tsp`, `specification/ai-foundry/data-plane/Foundry/src/voice-agents/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/voice-agents/protocol.tsp`, `specification/app/resource-manager/Microsoft.App/ContainerApps/LabelHistory.tsp`, `specification/app/resource-manager/Microsoft.App/ContainerApps/PrivateEndpointConnection.tsp`

## Not qualified

- `missing-phase-a-run`
- `missing-phase-b-run`

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
| — | Qualification | `missing-phase-a-run` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-a663a6e69bce6be5](#issue-evidence-gap-a663a6e69bce6be5). | [details](#qualification-error-1) |
| — | Qualification | `missing-phase-b-run` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-a663a6e69bce6be5](#issue-evidence-gap-a663a6e69bce6be5). | [details](#qualification-error-2) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Analysis | Suggested fix | Confidence / status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-evidence-gap-a663a6e69bce6be5"></a>`issue-evidence-gap-a663a6e69bce6be5` | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:missing-phase-a-run` — missing-phase-a-run<br>`qualification:missing-phase-b-run` — missing-phase-b-run |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `missing-phase-a-run`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/46724)
- **Workflow evidence:** unavailable

<a id="qualification-error-2"></a>
### Qualification failure 2

- **Reason:** `missing-phase-b-run`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/46724)
- **Workflow evidence:** unavailable
