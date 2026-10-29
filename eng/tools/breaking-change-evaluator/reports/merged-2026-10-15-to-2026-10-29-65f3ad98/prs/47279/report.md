# Breaking-change evaluator

**Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
**Report ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98:pr-47279:a314853553ca9fca04ffc8641ea464e7d29a3194`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47279 — [Kore.AgentPlatform] Add 2026-07-01-preview TypeSpec](https://github.com/Azure/azure-rest-api-specs/pull/47279)
- **Author:** poshett
- **State:** closed (merged) at 2026-10-19T05:59:39Z
- **Base:** `main` at `5dd4dc124a2f5f5b4533aa4e79ab15607d34e950`
- **Head:** `users/poshett/kore-artemis-2026-07-01-preview` at `a314853553ca9fca04ffc8641ea464e7d29a3194`
- **Changed TypeSpec files:** `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/client.tsp`, `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/main.tsp`, `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/models.tsp`, `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/organizations.tsp`, `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/tspconfig.yaml`, `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform/workspaces.tsp`

## Rollup

| Dimension | Count |
| --- | ---: |
| Comparable OAD findings | 0 |
| Informational OAD records | 0 |
| TypeSpec findings | 0 |
| Exact | 0 |
| Probable (review required) | 0 |
| Intentional Swagger-only | 0 |
| Missed equivalent | 0 |
| TypeSpec-only | 0 |
| Ambiguous | 0 |

**Exact OAD coverage:** N/A
**Review-inclusive OAD coverage:** N/A

### By phase

| Phase | Independent OAD execution | TypeSpec mode | Outcome | Comparable OAD | Informational OAD | TypeSpec findings | Exact | Probable | Intentional gap | Missed equivalent | TypeSpec-only | Exact OAD coverage | Review-inclusive OAD coverage |
| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | [Swagger Breaking Change run 39206543368](https://github.com/Azure/azure-rest-api-specs/actions/runs/39206543368) | `same-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 39206543399](https://github.com/Azure/azure-rest-api-specs/actions/runs/39206543399) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B | Breaking Change (Cross-Version) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

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

None.

<a id="finding-review-ambiguous"></a>
### Ambiguous findings

None.

<a id="finding-review-errors"></a>
### Evidence and execution failures

None.

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
| A | Unavailable | 4 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39206543368) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/70c41b76f1757d04-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 4 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/39206543399) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/70c41b76f1757d04-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Unique findings | Raw occurrences | Analyzer report |
| --- | --- | --- | ---: | ---: | ---: | --- |
| `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform` | Phase A (`same-version`) | Phase A (same-version) requires a base program for comparison. Use analyzeBaseAndHead() instead. | 0 | 0 | 0 | [generated Markdown](report-artifacts/typespec/70c41b76f1757d04-phase-a.md) |
| `specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform` | Phase B (`cross-version`) | No cross-version comparisons needed: all versions are preview (no stable baseline exists). | 0 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/70c41b76f1757d04-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue cluster | Findings | Phase | Category | Conclusion | Root-cause analysis | Suggested fix | Confidence / status | Evidence |
| --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| <a id="issue-concordant-zero-0fc9ac65646c22f6"></a>`issue-concordant-zero-0fc9ac65646c22f6` | 0 | B | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase B. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-B` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |
| <a id="issue-concordant-zero-bbaaf7ba672d9733"></a>`issue-concordant-zero-bbaaf7ba672d9733` | 0 | A | `concordant-zero` | confirmed-agreement | Both detectors reported zero findings for Phase A. Adds one confirmed zero-result agreement to longitudinal metrics. | No detector change suggested. | high; generated | `execution:phase-A` — Independent OAD evidence and TypeSpec execution both completed with zero findings. |

## Finding details

No findings or evidence failures were reported.

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
git -C target fetch --no-tags origin 5dd4dc124a2f5f5b4533aa4e79ab15607d34e950 a314853553ca9fca04ffc8641ea464e7d29a3194
git -C target checkout --detach a314853553ca9fca04ffc8641ea464e7d29a3194
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/47279' --tool-revision 65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform

```powershell
Push-Location target
node $prepared.executable 'specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform' --base-ref 5dd4dc124a2f5f5b4533aa4e79ab15607d34e950 --phase same-version --json-output '../specification-azure-native-integrations-resource-manager-Kore.AgentPlatform-AgentPlatform-phase-a.json' --markdown-output '../specification-azure-native-integrations-resource-manager-Kore.AgentPlatform-AgentPlatform-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/azure-native-integrations/resource-manager/Kore.AgentPlatform/AgentPlatform' --base-ref 5dd4dc124a2f5f5b4533aa4e79ab15607d34e950 --json-output '../specification-azure-native-integrations-resource-manager-Kore.AgentPlatform-AgentPlatform-phase-b-evidence.json' --markdown-output '../specification-azure-native-integrations-resource-manager-Kore.AgentPlatform-AgentPlatform-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
