# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-46643:e302d1a57587219ec3b6c9f58260c48cc08e11a1`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46643 — [Compute] Add private IP prefix length to 2026-04-01](https://github.com/Azure/azure-rest-api-specs/pull/46643)
- **Author:** rishiraja76
- **State:** closed (merged) at 2026-10-14T18:08:32Z
- **Base:** `main` at `efb0884620a801846ba9af4f622e004e08522583`
- **Head:** `rsureshraja-microsoft-pon-20260401` at `e302d1a57587219ec3b6c9f58260c48cc08e11a1`
- **Changed TypeSpec files:** `specification/compute/resource-manager/Microsoft.Compute/Compute/Compute/models.tsp`

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490387469) (no detector timing emitted) |
| B | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490387243) (no detector timing emitted) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/compute/resource-manager/Microsoft.Compute/Compute/Compute` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/a34772e539fc6c7c-phase-a.md) |
| `specification/compute/resource-manager/Microsoft.Compute/Compute/Compute` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/a34772e539fc6c7c-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-compile-runtime-failure-64fc681fcde8bb4c` | A, B | `compile-runtime-failure` | execution-failure | high | generated | 0 |
| `issue-oad-only-3ce07e0f007d23a1` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-bcb3eb0163c9c91f` | A | `oad-only` | requires-review | medium | generated | 1 |

### issue-compile-runtime-failure-64fc681fcde8bb4c

- **Affected PRs:** #46643
- **Phases:** A, B
- **Finding IDs:** none
- **Category:** `compile-runtime-failure`
- **Conclusion:** execution-failure
- **Confidence:** high
- **Rationale:** One or more evaluator, compile, or analyzer executions failed.
- **Aggregate impact:** Preserves a partial or failed outcome instead of success-shaped metrics.
- **Suggested fix:** Resolve the recorded execution error and rerun the same immutable input.
- **Status:** generated
- **Evidence:**
  - `execution:execution-error-0` — specification/compute/resource-manager/Microsoft.Compute/Compute/Compute: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-1` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')


### issue-oad-only-3ce07e0f007d23a1

- **Affected PRs:** #46643
- **Phases:** A
- **Finding IDs:** `A-oad-2`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-2` — AddedPropertyInResponse: The new version has a new property 'privateIPAddressPrefixLength' in response that was not found in the old version.

### issue-oad-only-bcb3eb0163c9c91f

- **Affected PRs:** #46643
- **Phases:** A
- **Finding IDs:** `A-oad-1`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-1` — AddedPropertyInResponse: The new version has a new property 'privateIPAddressPrefixLength' in response that was not found in the old version.

## Error finding equivalence details

### Findings missing from the TypeSpec detector

#### AddedPropertyInResponse

- **Swagger finding:** `A-oad-1` — `AddedPropertyInResponse` — The new version has a new property 'privateIPAddressPrefixLength' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490387469) (digest `498a25ba7899a24caf7e2559c3d9a8e99d7405a4aed9ca94ced40b34b85ba406`)
- **Swagger source:** [base: specification/compute/resource-manager/Microsoft.Compute/Compute/stable/2026-04-01/ComputeRP.json, line 23084](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/compute/resource-manager/Microsoft.Compute/Compute/stable/2026-04-01/ComputeRP.json#L23084) — JSONPath `definitions.VirtualMachineScaleSetIPConfigurationProperties.properties`; [head: specification/compute/resource-manager/Microsoft.Compute/Compute/stable/2026-04-01/ComputeRP.json, line 23091](https://github.com/Azure/azure-rest-api-specs/blob/e302d1a57587219ec3b6c9f58260c48cc08e11a1/specification/compute/resource-manager/Microsoft.Compute/Compute/stable/2026-04-01/ComputeRP.json#L23091) — JSONPath `definitions.VirtualMachineScaleSetIPConfigurationProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachinescalesets/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachinescalesets/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachinescalesets/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachinescalesets/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachinescalesets/{} response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachinescalesets/{}/virtualmachines/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachinescalesets/{}/virtualmachines/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachinescalesets/{}/virtualmachines/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachinescalesets/{}/virtualmachines/{} response 202 | GET /subscriptions/{}/providers/microsoft.compute/locations/{}/virtualmachinescalesets response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachinescalesets response 200 | GET /subscriptions/{}/providers/microsoft.compute/virtualmachinescalesets response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachinescalesets/{}/virtualmachines response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-2` — `AddedPropertyInResponse` — The new version has a new property 'privateIPAddressPrefixLength' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490387469) (digest `498a25ba7899a24caf7e2559c3d9a8e99d7405a4aed9ca94ced40b34b85ba406`)
- **Swagger source:** [base: specification/compute/resource-manager/Microsoft.Compute/Compute/stable/2026-04-01/ComputeRP.json, line 22255](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/compute/resource-manager/Microsoft.Compute/Compute/stable/2026-04-01/ComputeRP.json#L22255) — JSONPath `definitions.VirtualMachineNetworkInterfaceIPConfigurationProperties.properties`; [head: specification/compute/resource-manager/Microsoft.Compute/Compute/stable/2026-04-01/ComputeRP.json, line 22255](https://github.com/Azure/azure-rest-api-specs/blob/e302d1a57587219ec3b6c9f58260c48cc08e11a1/specification/compute/resource-manager/Microsoft.Compute/Compute/stable/2026-04-01/ComputeRP.json#L22255) — JSONPath `definitions.VirtualMachineNetworkInterfaceIPConfigurationProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachines/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachines/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachines/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachines/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachines/{} response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachinescalesets/{}/virtualmachines/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachinescalesets/{}/virtualmachines/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachinescalesets/{}/virtualmachines/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachinescalesets/{}/virtualmachines/{} response 202 | PATCH /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachines/{} request | GET /subscriptions/{}/providers/microsoft.compute/locations/{}/virtualmachines response 200 | GET /subscriptions/{}/providers/microsoft.compute/virtualmachines response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachines response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/microsoft.compute/virtualmachinescalesets/{}/virtualmachines response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

### Informational OAD records

#### NoVersionChange

- **Swagger finding:** `A-oad-0` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/37490387469) (digest `498a25ba7899a24caf7e2559c3d9a8e99d7405a4aed9ca94ced40b34b85ba406`)
- **Swagger source:** [base: specification/compute/resource-manager/Microsoft.Compute/Compute/stable/2026-04-01/ComputeRP.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/efb0884620a801846ba9af4f622e004e08522583/specification/compute/resource-manager/Microsoft.Compute/Compute/stable/2026-04-01/ComputeRP.json#L1); [head: specification/compute/resource-manager/Microsoft.Compute/Compute/stable/2026-04-01/ComputeRP.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/e302d1a57587219ec3b6c9f58260c48cc08e11a1/specification/compute/resource-manager/Microsoft.Compute/Compute/stable/2026-04-01/ComputeRP.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document ComputeRP.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

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
git -C target fetch --no-tags origin efb0884620a801846ba9af4f622e004e08522583 e302d1a57587219ec3b6c9f58260c48cc08e11a1
git -C target checkout --detach e302d1a57587219ec3b6c9f58260c48cc08e11a1
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/46643' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/compute/resource-manager/Microsoft.Compute/Compute/Compute

```powershell
Push-Location target
node $prepared.executable 'specification/compute/resource-manager/Microsoft.Compute/Compute/Compute' --base-ref efb0884620a801846ba9af4f622e004e08522583 --phase same-version --json-output '../specification-compute-resource-manager-Microsoft.Compute-Compute-Compute-phase-a.json' --markdown-output '../specification-compute-resource-manager-Microsoft.Compute-Compute-Compute-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/compute/resource-manager/Microsoft.Compute/Compute/Compute' --base-ref efb0884620a801846ba9af4f622e004e08522583 --json-output '../specification-compute-resource-manager-Microsoft.Compute-Compute-Compute-phase-b-evidence.json' --markdown-output '../specification-compute-resource-manager-Microsoft.Compute-Compute-Compute-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/compute/resource-manager/Microsoft.Compute/Compute/Compute: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

