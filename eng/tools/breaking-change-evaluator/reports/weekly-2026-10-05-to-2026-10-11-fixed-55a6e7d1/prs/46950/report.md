# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-46950:55d46a9583452592329b89f67be3240eef787012`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46950 — [KeyVault] Keep SDK type name ManagedHsmSkuName for 2026-05-15 (client.tsp only)](https://github.com/Azure/azure-rest-api-specs/pull/46950)
- **Author:** neerjagangwar
- **State:** closed (merged) at 2026-10-06T15:00:29Z
- **Base:** `main` at `0dbfc08bb2eeea34cc05dfd25c0b0a3c74672a3b`
- **Head:** `ngangwar/keyvault-mhsm-skuname-clientname` at `55d46a9583452592329b89f67be3240eef787012`
- **Changed TypeSpec files:** `specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault/client.tsp`

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
| A | [Swagger Breaking Change run 37454732277](https://github.com/Azure/azure-rest-api-specs/actions/runs/37454732277) | `same-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 37454732221](https://github.com/Azure/azure-rest-api-specs/actions/runs/37454732221) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

## Error equivalence by phase

Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.

| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | Swagger Breaking Change | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| B | Breaking Change (Cross-Version) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

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

None.

### Intentional Swagger-only gaps

None.

### Informational OAD records

None.

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | 8083 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37454732277) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/354fbe91275270f9-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 6551 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37454732221) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/354fbe91275270f9-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault` | Phase A (`same-version`) | `2025-05-01` → `2025-05-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/354fbe91275270f9-phase-a.md) |
| `specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault` | Phase A (`same-version`) | `2026-02-01` → `2026-02-01` | 1 | 0 | [generated Markdown](report-artifacts/typespec/354fbe91275270f9-phase-a.md) |
| `specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault` | Phase A (`same-version`) | `2026-05-15` → `2026-05-15` | 1 | 0 | [generated Markdown](report-artifacts/typespec/354fbe91275270f9-phase-a.md) |
| `specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault` | Phase A (`same-version`) | `2026-06-01-preview` → `2026-06-01-preview` | 1 | 0 | [generated Markdown](report-artifacts/typespec/354fbe91275270f9-phase-a.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-concordant-zero-834c65d5eefbbb6c` | B | `concordant-zero` | confirmed-agreement | high | generated | 0 |
| `issue-concordant-zero-d6e9363dc67024f2` | A | `concordant-zero` | confirmed-agreement | high | generated | 0 |

<a id="issue-concordant-zero-834c65d5eefbbb6c"></a>
### issue-concordant-zero-834c65d5eefbbb6c

- **Affected PRs:** #46950
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

<a id="issue-concordant-zero-d6e9363dc67024f2"></a>
### issue-concordant-zero-d6e9363dc67024f2

- **Affected PRs:** #46950
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

## Finding details

No findings or evidence failures were reported.

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
git -C target fetch --no-tags origin 0dbfc08bb2eeea34cc05dfd25c0b0a3c74672a3b 55d46a9583452592329b89f67be3240eef787012
git -C target checkout --detach 55d46a9583452592329b89f67be3240eef787012
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/46950' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault

```powershell
Push-Location target
node $prepared.executable 'specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault' --base-ref 0dbfc08bb2eeea34cc05dfd25c0b0a3c74672a3b --phase same-version --json-output '../specification-keyvault-resource-manager-Microsoft.KeyVault-KeyVault-phase-a.json' --markdown-output '../specification-keyvault-resource-manager-Microsoft.KeyVault-KeyVault-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/keyvault/resource-manager/Microsoft.KeyVault/KeyVault' --base-ref 0dbfc08bb2eeea34cc05dfd25c0b0a3c74672a3b --json-output '../specification-keyvault-resource-manager-Microsoft.KeyVault-KeyVault-phase-b-evidence.json' --markdown-output '../specification-keyvault-resource-manager-Microsoft.KeyVault-KeyVault-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
