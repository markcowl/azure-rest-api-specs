# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-46967:cf9d8c203c5df72a38b6511a076d8df9ef4aec5b`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46967 — ContainerService: remove stable api-version pins from tspconfig for 2026-07 preview SDK generation](https://github.com/Azure/azure-rest-api-specs/pull/46967)
- **Author:** elvazhu521
- **State:** closed (merged) at 2026-10-08T08:35:43Z
- **Base:** `main` at `33cc5cb4363a72ebc01187aa0c100e6e7c77eeb3`
- **Head:** `elva/remove-stable-pins-2026-07-preview` at `cf9d8c203c5df72a38b6511a076d8df9ef4aec5b`
- **Changed TypeSpec files:** `specification/containerservice/resource-manager/Microsoft.ContainerService/aks/tspconfig.yaml`

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
| A | [Swagger Breaking Change run 36967900283](https://github.com/Azure/azure-rest-api-specs/actions/runs/36967900283) | `same-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 36967900296](https://github.com/Azure/azure-rest-api-specs/actions/runs/36967900296) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

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
| A | Unavailable | 20445 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36967900283) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 22648 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36967900296) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/d1d4d254feed9d8f-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2025-10-01` → `2025-10-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2026-01-01` → `2026-01-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2026-02-01` → `2026-02-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2026-03-01` → `2026-03-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2026-04-01` → `2026-04-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2026-05-01` → `2026-05-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2026-06-01` → `2026-06-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2026-07-01` → `2026-07-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |
| `specification/containerservice/resource-manager/Microsoft.ContainerService/aks` | Phase A (`same-version`) | `2026-07-02-preview` → `2026-07-02-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/d1d4d254feed9d8f-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-concordant-zero-21db315374229d79` | A | `concordant-zero` | confirmed-agreement | high | generated | 0 |
| `issue-concordant-zero-b9bf2b13b80c0eb4` | B | `concordant-zero` | confirmed-agreement | high | generated | 0 |

### issue-concordant-zero-21db315374229d79

- **Affected PRs:** #46967
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

### issue-concordant-zero-b9bf2b13b80c0eb4

- **Affected PRs:** #46967
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
git -C target fetch --no-tags origin 33cc5cb4363a72ebc01187aa0c100e6e7c77eeb3 cf9d8c203c5df72a38b6511a076d8df9ef4aec5b
git -C target checkout --detach cf9d8c203c5df72a38b6511a076d8df9ef4aec5b
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/46967' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/containerservice/resource-manager/Microsoft.ContainerService/aks

```powershell
Push-Location target
node $prepared.executable 'specification/containerservice/resource-manager/Microsoft.ContainerService/aks' --base-ref 33cc5cb4363a72ebc01187aa0c100e6e7c77eeb3 --phase same-version --json-output '../specification-containerservice-resource-manager-Microsoft.ContainerService-aks-phase-a.json' --markdown-output '../specification-containerservice-resource-manager-Microsoft.ContainerService-aks-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/containerservice/resource-manager/Microsoft.ContainerService/aks' --base-ref 33cc5cb4363a72ebc01187aa0c100e6e7c77eeb3 --json-output '../specification-containerservice-resource-manager-Microsoft.ContainerService-aks-phase-b-evidence.json' --markdown-output '../specification-containerservice-resource-manager-Microsoft.ContainerService-aks-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
