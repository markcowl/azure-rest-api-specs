# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47279:2dc86916ff2e44ab4ef2913b21f85c410c53cc93`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47279 — [Kore.AgentPlatform] Add 2026-07-01-preview TypeSpec](https://github.com/Azure/azure-rest-api-specs/pull/47279)
- **Author:** poshett
- **State:** open
- **Base:** `main` at `6950632094cd34977a7aba0f3d842ccb97d57b02`
- **Head:** `users/poshett/kore-artemis-2026-07-01-preview` at `2dc86916ff2e44ab4ef2913b21f85c410c53cc93`
- **Changed TypeSpec files:** `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/client.tsp`, `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/main.tsp`, `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/models.tsp`, `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/organizations.tsp`, `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/tspconfig.yaml`, `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/workspaces.tsp`

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
| — | Qualification | `run-association-unverified` |  | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement. [issue-evidence-gap-a45d6143907e01fa](#issue-evidence-gap-a45d6143907e01fa). | [details](#qualification-error-1) |

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Analysis | Suggested fix | Confidence / status | Evidence |
| --- | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-evidence-gap-a45d6143907e01fa"></a>`issue-evidence-gap-a45d6143907e01fa` | A, B | `evidence-gap` | insufficient-evidence | Required independent OAD evidence is missing, incomplete, or invalid. Excludes this report from complete-run effectiveness totals. | Restore immutable workflow logs and job-summary evidence, then rerun. | high; generated | `qualification:run-association-unverified` — run-association-unverified |

## Finding details

<a id="qualification-error-1"></a>
### Qualification failure 1

- **Reason:** `run-association-unverified`
- **PR evidence:** [pull request](https://github.com/Azure/azure-rest-api-specs/pull/47279)
- **Workflow evidence:** unavailable
