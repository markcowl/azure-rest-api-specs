# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-46751:bb6bac2000539483e10f265bd0ab0e02a7376a37`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46751 — [Foundry] End of September Release train.](https://github.com/Azure/azure-rest-api-specs/pull/46751)
- **Author:** glecaros
- **State:** closed (merged) at 2026-10-05T23:24:00Z
- **Base:** `main` at `7e7a9372bd1e8b88a00db8f100c0ba84a05b6e1c`
- **Head:** `foundry/snap-20260925` at `bb6bac2000539483e10f265bd0ab0e02a7376a37`
- **Changed TypeSpec files:** `specification/ai-foundry/data-plane/Foundry/src/agents-optimization/candidates.tsp`, `specification/ai-foundry/data-plane/Foundry/src/agents-optimization/inputs.tsp`, `specification/ai-foundry/data-plane/Foundry/src/agents-optimization/jobs.tsp`, `specification/ai-foundry/data-plane/Foundry/src/agents-optimization/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/agents-optimization/routes.tsp`, `specification/ai-foundry/data-plane/Foundry/src/common/servicepatterns.tsp`, `specification/ai-foundry/data-plane/Foundry/src/connections/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/data_generation_jobs/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/data_generation_jobs/routes.tsp`, `specification/ai-foundry/data-plane/Foundry/src/evaluators/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/evaluators/routes.tsp`, `specification/ai-foundry/data-plane/Foundry/src/openai/chat/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/openai/evaluations/common.tsp`, `specification/ai-foundry/data-plane/Foundry/src/openai/evaluations/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/openai/evaluations/routes.tsp`, `specification/ai-foundry/data-plane/Foundry/src/openai/evaluations/user_conversation_simulation.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-common/error.default.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-common/ops-relocation-agents.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-common/ops-relocation-datasets.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-common/ops-relocation-evaluators.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-common/ops-relocation-projects.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects-agents/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-csharp-azure-ai-projects/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-agents/tspconfig.yaml`, `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-projects/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/sdk-java-azure-ai-projects/tspconfig.yaml`, `specification/ai-foundry/data-plane/Foundry/src/sdk-python-js-azure-ai-projects/client.tsp`, `specification/ai-foundry/data-plane/Foundry/src/toolboxes/models.tsp`, `specification/ai-foundry/data-plane/Foundry/src/tools/models.tsp`

## Not qualified

- `run-association-unverified`

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
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-08b899af1740c3d6](#issue-evidence-gap-08b899af1740c3d6). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-08b899af1740c3d6` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

<a id="issue-evidence-gap-08b899af1740c3d6"></a>
### issue-evidence-gap-08b899af1740c3d6

- **Affected PRs:** #46751
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
  - `qualification:run-association-unverified` — run-association-unverified

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/46751)
- **Workflow evidence:** unavailable
