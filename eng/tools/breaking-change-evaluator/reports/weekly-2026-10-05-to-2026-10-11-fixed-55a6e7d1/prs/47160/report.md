# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-47160:7213c8b8153df589cabe24aa5eb3043f4a203973`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47160 — [IoTHub] Add C# client names for 2026-10-01-preview types](http<local-path>)
- **Author:** davidemontanari
- **State:** closed (merged) at 2026-10-09T19:24:37Z
- **Base:** `main` at `bfd84ccde0ae294aa97e55d5d3ece70a2d4edb3f`
- **Head:** `davidemontanari/iothub-csharp-2026-10-01-preview-renames` at `7213c8b8153df589cabe24aa5eb3043f4a203973`
- **Changed TypeSpec files:** `specification/iothub/resource-manager/Microsoft.Devices/IoTHub/client.tsp`

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
| A | [Swagger Breaking Change run 37977458388](http<local-path>) | `same-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 37977458373](http<local-path>) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B | Breaking Change (Cross-Version) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 4045 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](http<local-path>) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/3f84ef68d0b4d637-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 3212 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](http<local-path>) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/3f84ef68d0b4d637-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/iothub/resource-manager/Microsoft.Devices/IoTHub` | Phase A (`same-version`) | `2026-03-01-preview` → `2026-03-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/3f84ef68d0b4d637-phase-a.md) |
| `specification/iothub/resource-manager/Microsoft.Devices/IoTHub` | Phase A (`same-version`) | `2026-05-01-preview` → `2026-05-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/3f84ef68d0b4d637-phase-a.md) |
| `specification/iothub/resource-manager/Microsoft.Devices/IoTHub` | Phase A (`same-version`) | `2026-10-01-preview` → `2026-10-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/3f84ef68d0b4d637-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-concordant-zero-501e3a9d5d9e5015` | B | `concordant-zero` | confirmed-agreement | high | generated | 0 |
| `issue-concordant-zero-bf4824fb9650cbe1` | A | `concordant-zero` | confirmed-agreement | high | generated | 0 |

### issue-concordant-zero-501e3a9d5d9e5015

- **Affected PRs:** #47160
- **Phases:** B
- **Finding IDs:** none
- **Category:** `concordant-zero`
- **Conclusion:** confirmed-agreement
- **Confidence:** high
- **Rationale:** Both detectors reported zero findings for Phase B.
- **Aggregate impact:** Adds one confirmed zero-result agreement to longitudinal metrics.
- **Suggested fix:** No detector change suggested.
- **Status:** generated
- **Evidence:**
  - `execution:phase-B` — Independent OAD evidence and TypeSpec execution both completed with zero findings.

### issue-concordant-zero-bf4824fb9650cbe1

- **Affected PRs:** #47160
- **Phases:** A
- **Finding IDs:** none
- **Category:** `concordant-zero`
- **Conclusion:** confirmed-agreement
- **Confidence:** high
- **Rationale:** Both detectors reported zero findings for Phase A.
- **Aggregate impact:** Adds one confirmed zero-result agreement to longitudinal metrics.
- **Suggested fix:** No detector change suggested.
- **Status:** generated
- **Evidence:**
  - `execution:phase-A` — Independent OAD evidence and TypeSpec execution both completed with zero findings.

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
git -C target fetch --no-tags origin bfd84ccde0ae294aa97e55d5d3ece70a2d4edb3f 7213c8b8153df589cabe24aa5eb3043f4a203973
git -C target checkout --detach 7213c8b8153df589cabe24aa5eb3043f4a203973
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'http<local-path>' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/iothub/resource-manager/Microsoft.Devices/IoTHub

```powershell
Push-Location target
node $prepared.executable 'specification/iothub/resource-manager/Microsoft.Devices/IoTHub' --base-ref bfd84ccde0ae294aa97e55d5d3ece70a2d4edb3f --phase same-version --json-output '../specification-iothub-resource-manager-Microsoft.Devices-IoTHub-phase-a.json' --markdown-output '../specification-iothub-resource-manager-Microsoft.Devices-IoTHub-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/iothub/resource-manager/Microsoft.Devices/IoTHub' --base-ref bfd84ccde0ae294aa97e55d5d3ece70a2d4edb3f --json-output '../specification-iothub-resource-manager-Microsoft.Devices-IoTHub-phase-b-evidence.json' --markdown-output '../specification-iothub-resource-manager-Microsoft.Devices-IoTHub-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
