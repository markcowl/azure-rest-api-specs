# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-46583:8974e4a28af728a7858f2877e4ccc2cdf66f68bf`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46583 — [OperationalInsights] Rename data authorization property for C#](https://github.com/Azure/azure-rest-api-specs/pull/46583)
- **Author:** ArthurMa1978
- **State:** closed (merged) at 2026-10-09T04:53:56Z
- **Base:** `main` at `eea7c005f673b4c72a97f4edda1a18217cfbca58`
- **Head:** `operationalinsights-data-authorization-mode` at `8974e4a28af728a7858f2877e4ccc2cdf66f68bf`
- **Changed TypeSpec files:** `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights/client.tsp`

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
| A | [Swagger Breaking Change run 35696099557](https://github.com/Azure/azure-rest-api-specs/actions/runs/35696099557) | `same-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 35696099545](https://github.com/Azure/azure-rest-api-specs/actions/runs/35696099545) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

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
| A | Unavailable | 1696 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/35696099557) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 2179 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/35696099545) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/75b0ebe30c6090b3-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights` | Phase A (`same-version`) | `2025-07-01` → `2025-07-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) |
| `specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights` | Phase A (`same-version`) | `2026-03-01` → `2026-03-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/75b0ebe30c6090b3-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-concordant-zero-987a8292d6894878` | B | `concordant-zero` | confirmed-agreement | high | generated | 0 |
| `issue-concordant-zero-f9f83c2316c0db1b` | A | `concordant-zero` | confirmed-agreement | high | generated | 0 |

### issue-concordant-zero-987a8292d6894878

- **Affected PRs:** #46583
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

### issue-concordant-zero-f9f83c2316c0db1b

- **Affected PRs:** #46583
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
git -C target fetch --no-tags origin eea7c005f673b4c72a97f4edda1a18217cfbca58 8974e4a28af728a7858f2877e4ccc2cdf66f68bf
git -C target checkout --detach 8974e4a28af728a7858f2877e4ccc2cdf66f68bf
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/46583' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights

```powershell
Push-Location target
node $prepared.executable 'specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights' --base-ref eea7c005f673b4c72a97f4edda1a18217cfbca58 --phase same-version --json-output '../specification-operationalinsights-resource-manager-Microsoft.OperationalInsights-OperationalInsights-phase-a.json' --markdown-output '../specification-operationalinsights-resource-manager-Microsoft.OperationalInsights-OperationalInsights-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/OperationalInsights' --base-ref eea7c005f673b4c72a97f4edda1a18217cfbca58 --json-output '../specification-operationalinsights-resource-manager-Microsoft.OperationalInsights-OperationalInsights-phase-b-evidence.json' --markdown-output '../specification-operationalinsights-resource-manager-Microsoft.OperationalInsights-OperationalInsights-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
