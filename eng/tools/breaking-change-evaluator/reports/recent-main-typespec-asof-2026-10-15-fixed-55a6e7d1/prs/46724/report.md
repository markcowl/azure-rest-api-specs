# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-46724:7c1182a22abef1d868778f756ecefbf7df0c03d8`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46724 — Merge `feature/foundry-release` branch to `main`](http<local-path>)
- **Author:** dargilco
- **State:** open
- **Base:** `main` at `8f99c33c108147fcc716e71a764010084fe5d034`
- **Head:** `feature/foundry-release` at `7c1182a22abef1d868778f756ecefbf7df0c03d8`
- **Changed TypeSpec files:** `specification/ai-foundry/data-plane/Foundry/main.tsp`, `specification/ai-foundry/data-plane/Foundry/src/agents/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/common/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/common/servicepatterns.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents/tspconfig.yaml`, `specification/ai-foundry/data-plane/Foundry/src/sdk-python-azure-ai-finetuningsessions/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-python-azure-ai-finetuningsessions/tspconfig.yaml`, `specification/ai-foundry/data-plane/Foundry/src/session-finetuning/models-custom-code.tsp`, `specification/ai-foundry/data-plane/Foundry/src/session-finetuning/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/session-finetuning/routes.tsp`, `specification/ai-foundry/data-plane/Foundry/src/voice-agents/agents.tsp`, `specification/ai-foundry/data-plane/Foundry/src/voice-agents/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/voice-agents/protocol.tsp`, `specification/app/resource-manager/Microsoft.App/ContainerApps/LabelHistory.tsp`, `specification/app/resource-manager/Microsoft.App/ContainerApps/PrivateEndpointConnection.tsp`

## Not qualified

- `missing-phase-a-run`
- `missing-phase-b-run`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-a663a6e69bce6be5` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-a663a6e69bce6be5

- **Affected PRs:** #46724
- **Phases:** A, B
- **Finding IDs:** none
- **Category:** `evidence-gap`
- **Conclusion:** insufficient-evidence
- **Confidence:** high
- **Rationale:** Required independent OAD evidence is missing, incomplete, or invalid.
- **Aggregate impact:** Excludes this report from complete-run effectiveness totals.
- **Suggested fix:** Restore immutable workflow logs and job-summary evidence, then rerun.
- **Status:** generated
- **Evidence:**
  - `qualification:missing-phase-a-run` — missing-phase-a-run
  - `qualification:missing-phase-b-run` — missing-phase-b-run

## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

Both detectors reported zero non-error findings.
