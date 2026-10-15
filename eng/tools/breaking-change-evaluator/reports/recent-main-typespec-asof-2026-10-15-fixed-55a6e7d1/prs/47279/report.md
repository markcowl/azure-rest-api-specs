# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47279:2dc86916ff2e44ab4ef2913b21f85c410c53cc93`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47279 — [Kore.AgentPlatform] Add 2026-07-01-preview TypeSpec](http<local-path>)
- **Author:** poshett
- **State:** open
- **Base:** `main` at `6950632094cd34977a7aba0f3d842ccb97d57b02`
- **Head:** `users/poshett/kore-artemis-2026-07-01-preview` at `2dc86916ff2e44ab4ef2913b21f85c410c53cc93`
- **Changed TypeSpec files:** `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/client.tsp`, `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/main.tsp`, `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/models.tsp`, `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/organizations.tsp`, `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/tspconfig.yaml`, `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/workspaces.tsp`

## Not qualified

- `run-association-unverified`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-a45d6143907e01fa` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-a45d6143907e01fa

- **Affected PRs:** #47279
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

## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

Both detectors reported zero non-error findings.
