# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-47019:d65c5b6b236eb70c0a05474b8e7d9de501316637`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47019 — feat: add Private Traffic Manager affinity routing in 2026-10-01-preview](http<local-path>)
- **Author:** imsiddhartha
- **State:** closed (merged) at 2026-10-10T08:19:46Z
- **Base:** `main` at `88e2199d770d74f3061a162824185fd6894cb7d7`
- **Head:** `dev/ssaklecha/versioningfaf67448` at `d65c5b6b236eb70c0a05474b8e7d9de501316637`
- **Changed TypeSpec files:** `specification/privatetrafficmanager/resource-manager/Microsoft.Network/PrivateTrafficManager/main.tsp`, `specification/privatetrafficmanager/resource-manager/Microsoft.Network/PrivateTrafficManager/models/EndpointModels.tsp`, `specification/privatetrafficmanager/resource-manager/Microsoft.Network/PrivateTrafficManager/models/ProfileModels.tsp`, `specification/privatetrafficmanager/resource-manager/Microsoft.Network/PrivateTrafficManager/models/SiteModels.tsp`, `specification/privatetrafficmanager/resource-manager/Microsoft.Network/PrivateTrafficManager/tspconfig.yaml`

## Not qualified

- `invalid-oad-output`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-de0c841a43f448da` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-de0c841a43f448da

- **Affected PRs:** #47019
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
  - `qualification:invalid-oad-output` — invalid-oad-output
  - `qualification:evidence-error-0` — Job summary claims no findings but workflow logs contain OAD findings

## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

Both detectors reported zero non-error findings.
