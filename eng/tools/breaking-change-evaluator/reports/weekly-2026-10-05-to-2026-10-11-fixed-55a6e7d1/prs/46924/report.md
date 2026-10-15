# Breaking-change evaluator

**Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
**Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
**Report ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1:pr-46924:d7bddff73316c6472c4712ca7c16d84d90c5aa14`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** partial
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46924 — [Commvault] Align nine preview APIs with pinned private source](https://github.com/Azure/azure-rest-api-specs/pull/46924)
- **Author:** saurabh-jaiswal-333
- **State:** closed (merged) at 2026-10-07T09:23:40Z
- **Base:** `main` at `bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb`
- **Head:** `saurabh-jaiswal-333-commvault-preview-alignment` at `d7bddff73316c6472c4712ca7c16d84d90c5aa14`
- **Changed TypeSpec files:** `specification/liftrcommvault/Commvault.ContentStore.Management/back-compatible.tsp`, `specification/liftrcommvault/Commvault.ContentStore.Management/client.tsp`, `specification/liftrcommvault/Commvault.ContentStore.Management/main.tsp`

## Detector performance by phase

Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.

| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |
| --- | ---: | ---: | --- | --- |
| A | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (no detector timing emitted) |
| B | Unavailable | Unavailable | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705513) (no detector timing emitted) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/liftrcommvault/Commvault.ContentStore.Management` | Phase A (`same-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated Markdown](report-artifacts/typespec/0b8d0c5d536b771c-phase-a.md) |
| `specification/liftrcommvault/Commvault.ContentStore.Management` | Phase B (`cross-version`) | Analysis failed: Cannot read properties of undefined (reading 'get')
 | 0 | 0 | [generated combined Markdown](report-artifacts/typespec/0b8d0c5d536b771c-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-compile-runtime-failure-74db0212a8111558` | A, B | `compile-runtime-failure` | execution-failure | high | generated | 0 |
| `issue-oad-only-046f2670f839bed4` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-070a171637b031fc` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-0d02b9957b7643a1` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-0e1053dee4dddb53` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-0f8ae22091bc1e61` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-12c492050fe815f8` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-1417eed357eee3f1` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-14b62a38b18ab1a1` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-1615da13fabe3e70` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-16f0183b8298f538` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-1ab646ee2bf2a197` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-1b63664de08718c2` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-2323cd05a043680b` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-2506a5bb5d63e057` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-25e681442ad66881` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-27e6834c70346218` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-2a56b7d65774a9bf` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-2b1c0454e7e1486d` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-2b2b691c583812b0` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-30ca385bedd7bdc6` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-33b72402fb7fe071` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-348adad87dd8d40a` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-3807fce77752ce08` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-419a98a0ac60b8d7` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-41f84e9381e713f4` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-4338467da5cec3d3` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-48f91836a0809b9c` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-4a183a1894d85436` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-4a3e96f40d903e04` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-4d40287bd5740987` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-4f05331276e8c06a` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-4f3eb61966ad3f44` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-54bf1df4ac503917` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-55545b425d2bbb63` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-601eabfc22d2975f` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-6060792912845a12` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-6210999bebf5ba80` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-66244fc023565cd8` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-67348298fe273e7c` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-725f98b1e805f856` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-760a8700ac26f479` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-78db01bdbab92be2` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-7c5424e108c5c6b1` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-8431d152e1b4f35b` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-85235f4098336910` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-8730f23bb27a10be` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-88eb911f7ca8c9d3` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-8a8969e65e0ea34b` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-8c54230bef7858c0` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-8f1358743174ab23` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-930ed575b8657006` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-958ed50e977702d4` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-9649d81d3bf45698` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-9addb6c33dadaf9a` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-a20b0a629d5bffa4` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-a318c821595b55ce` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-a6cf28709f4f63f4` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-aff3532a7629a8a1` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-b4dc2db8e0b25819` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-b9f9070972fa0acd` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-ba5de08fc60b4672` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-bdec573d5e7343fc` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-bebcdc123421a608` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-c21c2a08595847ba` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-c79dcac0eb3f74e2` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-cbebe0364354d5f4` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-ce6c391a5e6ea26f` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-cf1c1ca7a3b76312` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-d0001d125a3e9b33` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-d050e3536d40e0b4` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-d85cda6ffaba9481` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-da294e644072c1a7` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-dabf9b35b5a01cc7` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-df9dc34fdc24d206` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-e5b6853e6c559dab` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-e85b37766c666b20` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-e8bb534b37d9eccf` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-e977600cdf56b689` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-ef882bff314c3ade` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-f6596968c840c3e4` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-f76bc87d0806a8dc` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-f96a391da7c053ad` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-faa1428ac479e22c` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |
| `issue-oad-only-fc9cfbe7c034f767` | A | `oad-only` | requires-review | medium | generated | 1 |
| `issue-oad-only-ffc4e7bb9ea4ecbd` | A | `oad-only` | likely-expected-difference | medium | generated | 1 |

### issue-compile-runtime-failure-74db0212a8111558

- **Affected PRs:** #46924
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
  - `execution:execution-error-0` — specification/liftrcommvault/Commvault.ContentStore.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

  - `execution:execution-error-1` — Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')


### issue-oad-only-046f2670f839bed4

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-27`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-27` — AddedOptionalProperty: The new version has a new optional property 'type' that was not found in the old version.

### issue-oad-only-070a171637b031fc

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-28`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-28` — AddedOptionalProperty: The new version has a new optional property 'systemData' that was not found in the old version.

### issue-oad-only-0d02b9957b7643a1

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-36`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-36` — AddedOptionalProperty: The new version has a new optional property 'name' that was not found in the old version.

### issue-oad-only-0e1053dee4dddb53

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-19`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-19` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?

### issue-oad-only-0f8ae22091bc1e61

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-61`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-61` — DifferentAllOf: The new version has a different 'allOf' property than the previous one.

### issue-oad-only-12c492050fe815f8

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-31`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-31` — DifferentAllOf: The new version has a different 'allOf' property than the previous one.

### issue-oad-only-1417eed357eee3f1

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-76`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-76` — RequiredStatusChange: The 'required' status changed from the old version('False') to the new version('True').

### issue-oad-only-14b62a38b18ab1a1

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-82`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-82` — AddedPath: The new version is adding a path that was not found in the old version.

### issue-oad-only-1615da13fabe3e70

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-43`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-43` — RequiredStatusChange: The 'required' status changed from the old version('False') to the new version('True').

### issue-oad-only-16f0183b8298f538

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-85`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-85` — AddedOptionalProperty: The new version has a new optional property 'id' that was not found in the old version.

### issue-oad-only-1ab646ee2bf2a197

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-66`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-66` — AddedOptionalProperty: The new version has a new optional property 'name' that was not found in the old version.

### issue-oad-only-1b63664de08718c2

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-72`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-72` — RemovedProperty: The new version is missing a property found in the old version. Was 'multiPersonAuthorizationOnCcaCreate' renamed or removed?

### issue-oad-only-2323cd05a043680b

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-77`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-77` — RequiredStatusChange: The 'required' status changed from the old version('False') to the new version('True').

### issue-oad-only-2506a5bb5d63e057

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-79`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-79` — AddedReadOnlyPropertyInResponse: The new version has a new read-only property 'complianceLockStatus' in response that was not found in the old version.

### issue-oad-only-25e681442ad66881

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-80`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-80` — AddedPath: The new version is adding a path that was not found in the old version.

### issue-oad-only-27e6834c70346218

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-62`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-62` — ReferenceRedirection: The '$ref' property points to different models in the old and new versions.

### issue-oad-only-2a56b7d65774a9bf

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-86`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-86` — AddedOptionalProperty: The new version has a new optional property 'name' that was not found in the old version.

### issue-oad-only-2b1c0454e7e1486d

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-49`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-49` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?

### issue-oad-only-2b2b691c583812b0

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-52`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-52` — ReferenceRedirection: The '$ref' property points to different models in the old and new versions.

### issue-oad-only-30ca385bedd7bdc6

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-81`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-81` — AddedPath: The new version is adding a path that was not found in the old version.

### issue-oad-only-33b72402fb7fe071

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-88`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-88` — AddedOptionalProperty: The new version has a new optional property 'systemData' that was not found in the old version.

### issue-oad-only-348adad87dd8d40a

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-33`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-33` — RequiredStatusChange: The 'required' status changed from the old version('False') to the new version('True').

### issue-oad-only-3807fce77752ce08

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-89`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-89` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?

### issue-oad-only-419a98a0ac60b8d7

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-44`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-44` — DifferentAllOf: The new version has a different 'allOf' property than the previous one.

### issue-oad-only-41f84e9381e713f4

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-69`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-69` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?

### issue-oad-only-4338467da5cec3d3

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-22`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-22` — ReferenceRedirection: The '$ref' property points to different models in the old and new versions.

### issue-oad-only-48f91836a0809b9c

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-26`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-26` — AddedOptionalProperty: The new version has a new optional property 'name' that was not found in the old version.

### issue-oad-only-4a183a1894d85436

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-13`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-13` — RequiredStatusChange: The 'required' status changed from the old version('False') to the new version('True').

### issue-oad-only-4a3e96f40d903e04

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-41`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-41` — DifferentAllOf: The new version has a different 'allOf' property than the previous one.

### issue-oad-only-4d40287bd5740987

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-21`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-21` — DifferentAllOf: The new version has a different 'allOf' property than the previous one.

### issue-oad-only-4f05331276e8c06a

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-2`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-2` — ReferenceRedirection: The '$ref' property points to different models in the old and new versions.

### issue-oad-only-4f3eb61966ad3f44

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-57`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-57` — AddedOptionalProperty: The new version has a new optional property 'type' that was not found in the old version.

### issue-oad-only-54bf1df4ac503917

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-18`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-18` — AddedOptionalProperty: The new version has a new optional property 'systemData' that was not found in the old version.

### issue-oad-only-55545b425d2bbb63

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-24`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-24` — DifferentAllOf: The new version has a different 'allOf' property than the previous one.

### issue-oad-only-601eabfc22d2975f

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-90`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-90` — ConstraintChanged: The new version has a different 'minItems' value than the previous one.

### issue-oad-only-6060792912845a12

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-92`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-92` — AddedOptionalProperty: The new version has a new optional property 'complianceLockStatus' that was not found in the old version.

### issue-oad-only-6210999bebf5ba80

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-29`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-29` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?

### issue-oad-only-66244fc023565cd8

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-74`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-74` — DifferentAllOf: The new version has a different 'allOf' property than the previous one.

### issue-oad-only-67348298fe273e7c

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-34`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-34` — DifferentAllOf: The new version has a different 'allOf' property than the previous one.

### issue-oad-only-725f98b1e805f856

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-35`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-35` — AddedOptionalProperty: The new version has a new optional property 'id' that was not found in the old version.

### issue-oad-only-760a8700ac26f479

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-25`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-25` — AddedOptionalProperty: The new version has a new optional property 'id' that was not found in the old version.

### issue-oad-only-78db01bdbab92be2

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-11`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-11` — DifferentAllOf: The new version has a different 'allOf' property than the previous one.

### issue-oad-only-7c5424e108c5c6b1

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-39`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-39` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?

### issue-oad-only-8431d152e1b4f35b

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-75`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-75` — ReferenceRedirection: The '$ref' property points to different models in the old and new versions.

### issue-oad-only-85235f4098336910

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-5`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-5` — AddedOptionalProperty: The new version has a new optional property 'id' that was not found in the old version.

### issue-oad-only-8730f23bb27a10be

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-1`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-1` — DifferentAllOf: The new version has a different 'allOf' property than the previous one.

### issue-oad-only-88eb911f7ca8c9d3

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-71`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-71` — RemovedProperty: The new version is missing a property found in the old version. Was 'backupAdminOnCcaCreate' renamed or removed?

### issue-oad-only-8a8969e65e0ea34b

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-83`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-83` — AddedOptionalProperty: The new version has a new optional property 'roleAssignmentsOnCcaCreate' that was not found in the old version.

### issue-oad-only-8c54230bef7858c0

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-84`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-84` — DifferentAllOf: The new version has a different 'allOf' property than the previous one.

### issue-oad-only-8f1358743174ab23

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-16`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-16` — AddedOptionalProperty: The new version has a new optional property 'name' that was not found in the old version.

### issue-oad-only-930ed575b8657006

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-65`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-65` — AddedOptionalProperty: The new version has a new optional property 'id' that was not found in the old version.

### issue-oad-only-958ed50e977702d4

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-37`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-37` — AddedOptionalProperty: The new version has a new optional property 'type' that was not found in the old version.

### issue-oad-only-9649d81d3bf45698

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-6`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-6` — AddedOptionalProperty: The new version has a new optional property 'name' that was not found in the old version.

### issue-oad-only-9addb6c33dadaf9a

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-68`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-68` — AddedOptionalProperty: The new version has a new optional property 'systemData' that was not found in the old version.

### issue-oad-only-a20b0a629d5bffa4

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-7`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-7` — AddedOptionalProperty: The new version has a new optional property 'type' that was not found in the old version.

### issue-oad-only-a318c821595b55ce

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-4`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-4` — DifferentAllOf: The new version has a different 'allOf' property than the previous one.

### issue-oad-only-a6cf28709f4f63f4

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-48`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-48` — AddedOptionalProperty: The new version has a new optional property 'systemData' that was not found in the old version.

### issue-oad-only-aff3532a7629a8a1

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-38`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-38` — AddedOptionalProperty: The new version has a new optional property 'systemData' that was not found in the old version.

### issue-oad-only-b4dc2db8e0b25819

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-32`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-32` — ReferenceRedirection: The '$ref' property points to different models in the old and new versions.

### issue-oad-only-b9f9070972fa0acd

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-59`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-59` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?

### issue-oad-only-ba5de08fc60b4672

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-12`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-12` — ReferenceRedirection: The '$ref' property points to different models in the old and new versions.

### issue-oad-only-bdec573d5e7343fc

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-15`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-15` — AddedOptionalProperty: The new version has a new optional property 'id' that was not found in the old version.

### issue-oad-only-bebcdc123421a608

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-3`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-3` — RequiredStatusChange: The 'required' status changed from the old version('False') to the new version('True').

### issue-oad-only-c21c2a08595847ba

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-63`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-63` — RequiredStatusChange: The 'required' status changed from the old version('False') to the new version('True').

### issue-oad-only-c79dcac0eb3f74e2

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-53`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-53` — RequiredStatusChange: The 'required' status changed from the old version('False') to the new version('True').

### issue-oad-only-cbebe0364354d5f4

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-64`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-64` — DifferentAllOf: The new version has a different 'allOf' property than the previous one.

### issue-oad-only-ce6c391a5e6ea26f

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-67`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-67` — AddedOptionalProperty: The new version has a new optional property 'type' that was not found in the old version.

### issue-oad-only-cf1c1ca7a3b76312

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-23`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-23` — RequiredStatusChange: The 'required' status changed from the old version('False') to the new version('True').

### issue-oad-only-d0001d125a3e9b33

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-8`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-8` — AddedOptionalProperty: The new version has a new optional property 'systemData' that was not found in the old version.

### issue-oad-only-d050e3536d40e0b4

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-55`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-55` — AddedOptionalProperty: The new version has a new optional property 'id' that was not found in the old version.

### issue-oad-only-d85cda6ffaba9481

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-51`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-51` — DifferentAllOf: The new version has a different 'allOf' property than the previous one.

### issue-oad-only-da294e644072c1a7

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-54`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-54` — DifferentAllOf: The new version has a different 'allOf' property than the previous one.

### issue-oad-only-dabf9b35b5a01cc7

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-46`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-46` — AddedOptionalProperty: The new version has a new optional property 'name' that was not found in the old version.

### issue-oad-only-df9dc34fdc24d206

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-47`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-47` — AddedOptionalProperty: The new version has a new optional property 'type' that was not found in the old version.

### issue-oad-only-e5b6853e6c559dab

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-73`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-73` — AddedPropertyInResponse: The new version has a new property 'roleAssignmentsOnCcaCreate' in response that was not found in the old version.

### issue-oad-only-e85b37766c666b20

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-45`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-45` — AddedOptionalProperty: The new version has a new optional property 'id' that was not found in the old version.

### issue-oad-only-e8bb534b37d9eccf

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-91`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-91` — AddedRequiredProperty: The new version lists new non-read-only properties as required: 'roleName, entities'. These properties were not listed as required in the old version.

### issue-oad-only-e977600cdf56b689

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-56`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-56` — AddedOptionalProperty: The new version has a new optional property 'name' that was not found in the old version.

### issue-oad-only-ef882bff314c3ade

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-17`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-17` — AddedOptionalProperty: The new version has a new optional property 'type' that was not found in the old version.

### issue-oad-only-f6596968c840c3e4

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-58`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-58` — AddedOptionalProperty: The new version has a new optional property 'systemData' that was not found in the old version.

### issue-oad-only-f76bc87d0806a8dc

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-87`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-87` — AddedOptionalProperty: The new version has a new optional property 'type' that was not found in the old version.

### issue-oad-only-f96a391da7c053ad

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-9`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-9` — RemovedDefinition: The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?

### issue-oad-only-faa1428ac479e22c

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-14`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-14` — DifferentAllOf: The new version has a different 'allOf' property than the previous one.

### issue-oad-only-fc9cfbe7c034f767

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-78`
- **Category:** `oad-only`
- **Conclusion:** requires-review
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'missed-equivalent' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-78` — AddedRequiredProperty: The new version lists new non-read-only properties as required: 'roleName, entities'. These properties were not listed as required in the old version.

### issue-oad-only-ffc4e7bb9ea4ecbd

- **Affected PRs:** #46924
- **Phases:** A
- **Finding IDs:** `A-oad-42`
- **Category:** `oad-only`
- **Conclusion:** likely-expected-difference
- **Confidence:** medium
- **Rationale:** OAD finding has evaluator classification 'intentional-swagger-only' and no selected TypeSpec equivalent.
- **Aggregate impact:** Contributes one finding to OAD-only or missed-equivalent totals.
- **Suggested fix:** Review detector coverage and the canonical target mapping.
- **Status:** generated
- **Evidence:**
  - `oad-finding:A-oad-42` — ReferenceRedirection: The '$ref' property points to different models in the old and new versions.

## Error finding equivalence details

### Intentional Swagger-only coverage gaps

#### DifferentAllOf

- **Swagger finding:** `A-oad-1` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 343](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L343) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 343](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L343) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-11` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 337](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L337) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 337](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L337) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-14` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2026](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2026) — JSONPath `definitions.CloudAccountUpdate`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2064](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2064) — JSONPath `definitions.CloudAccountUpdate`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-21` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 337](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L337) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 337](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L337) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-24` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2082](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2082) — JSONPath `definitions.CloudAccountUpdate`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2120](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2120) — JSONPath `definitions.CloudAccountUpdate`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-31` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 337](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L337) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 337](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L337) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-34` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2150](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2150) — JSONPath `definitions.CloudAccountUpdate`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2188](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2188) — JSONPath `definitions.CloudAccountUpdate`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-4` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1964](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1964) — JSONPath `definitions.CloudAccountUpdate`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 2002](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L2002) — JSONPath `definitions.CloudAccountUpdate`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-41` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 343](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L343) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 343](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L343) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-44` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2167](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2167) — JSONPath `definitions.CloudAccountUpdate`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2205](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2205) — JSONPath `definitions.CloudAccountUpdate`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-51` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 406](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L406) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 406](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L406) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-54` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2374](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2374) — JSONPath `definitions.CloudAccountUpdate`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2412](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2412) — JSONPath `definitions.CloudAccountUpdate`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-61` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 448](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L448) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 448](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L448) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-64` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2416](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2416) — JSONPath `definitions.CloudAccountUpdate`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2454](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2454) — JSONPath `definitions.CloudAccountUpdate`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-74` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 454](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L454) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 454](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L454) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}'].patch.parameters[4].schema`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-84` — `DifferentAllOf` — The new version has a different 'allOf' property than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2655](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2655) — JSONPath `definitions.CloudAccountUpdate`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2869](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2869) — JSONPath `definitions.CloudAccountUpdate`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI structural change
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

#### ReferenceRedirection

- **Swagger finding:** `A-oad-12` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2041](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2041) — JSONPath `definitions.CloudAccountUpdate.properties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2068](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2068) — JSONPath `definitions.CloudAccountUpdate.properties.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-2` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1979](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1979) — JSONPath `definitions.CloudAccountUpdate.properties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 2006](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L2006) — JSONPath `definitions.CloudAccountUpdate.properties.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-22` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2097](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2097) — JSONPath `definitions.CloudAccountUpdate.properties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2124](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2124) — JSONPath `definitions.CloudAccountUpdate.properties.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-32` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2165](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2165) — JSONPath `definitions.CloudAccountUpdate.properties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2192](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2192) — JSONPath `definitions.CloudAccountUpdate.properties.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-42` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2182](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2182) — JSONPath `definitions.CloudAccountUpdate.properties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2209](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2209) — JSONPath `definitions.CloudAccountUpdate.properties.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-52` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2389](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2389) — JSONPath `definitions.CloudAccountUpdate.properties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2416](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2416) — JSONPath `definitions.CloudAccountUpdate.properties.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-62` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2431](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2431) — JSONPath `definitions.CloudAccountUpdate.properties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2458](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2458) — JSONPath `definitions.CloudAccountUpdate.properties.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-75` — `ReferenceRedirection` — The '$ref' property points to different models in the old and new versions.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2670](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2670) — JSONPath `definitions.CloudAccountUpdate.properties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2873](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2873) — JSONPath `definitions.CloudAccountUpdate.properties.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Intentional gap:** OpenAPI reference structure is not wire-level
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

#### RemovedDefinition

- **Swagger finding:** `A-oad-19` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 1677](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L1677) — JSONPath `definitions`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 1677](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L1677) — JSONPath `definitions`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document commvault.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-29` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 1733](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L1733) — JSONPath `definitions`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 1733](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L1733) — JSONPath `definitions`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document commvault.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-39` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 1801](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L1801) — JSONPath `definitions`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 1801](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L1801) — JSONPath `definitions`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document commvault.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-49` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 1807](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L1807) — JSONPath `definitions`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 1807](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L1807) — JSONPath `definitions`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document commvault.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-59` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2001](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2001) — JSONPath `definitions`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2001](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2001) — JSONPath `definitions`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document commvault.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-69` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2043](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2043) — JSONPath `definitions`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2043](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2043) — JSONPath `definitions`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document commvault.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-89` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2268](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2268) — JSONPath `definitions`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2445](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2445) — JSONPath `definitions`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document commvault.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

- **Swagger finding:** `A-oad-9` — `RemovedDefinition` — The new version is missing a definition that was found in the old version. Was 'CloudAccountUpdateProperties' removed or renamed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1615](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1615) — JSONPath `definitions`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1615](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1615) — JSONPath `definitions`
- **Resolved targets:** OAD rule RemovedDefinition; JSON path definitions; No terminal reference; Document commvault.json
- **Intentional gap:** Definition removal is covered through effective wire impacts
- **Decision:** No TypeSpec equivalent was selected. Classification: `intentional-swagger-only`.

### Findings missing from the TypeSpec detector

#### AddedOptionalProperty

- **Swagger finding:** `A-oad-15` — `AddedOptionalProperty` — The new version has a new optional property 'id' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2029](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2029) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2067](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2067) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-16` — `AddedOptionalProperty` — The new version has a new optional property 'name' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2029](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2029) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2067](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2067) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-17` — `AddedOptionalProperty` — The new version has a new optional property 'type' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2029](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2029) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2067](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2067) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-18` — `AddedOptionalProperty` — The new version has a new optional property 'systemData' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2029](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2029) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2067](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2067) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-25` — `AddedOptionalProperty` — The new version has a new optional property 'id' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2085](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2085) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2123](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2123) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-26` — `AddedOptionalProperty` — The new version has a new optional property 'name' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2085](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2085) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2123](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2123) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-27` — `AddedOptionalProperty` — The new version has a new optional property 'type' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2085](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2085) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2123](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2123) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-28` — `AddedOptionalProperty` — The new version has a new optional property 'systemData' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2085](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2085) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2123](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2123) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-35` — `AddedOptionalProperty` — The new version has a new optional property 'id' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2153](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2153) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2191](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2191) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-36` — `AddedOptionalProperty` — The new version has a new optional property 'name' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2153](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2153) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2191](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2191) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-37` — `AddedOptionalProperty` — The new version has a new optional property 'type' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2153](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2153) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2191](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2191) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-38` — `AddedOptionalProperty` — The new version has a new optional property 'systemData' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2153](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2153) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2191](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2191) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-45` — `AddedOptionalProperty` — The new version has a new optional property 'id' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2170](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2170) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2208](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2208) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-46` — `AddedOptionalProperty` — The new version has a new optional property 'name' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2170](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2170) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2208](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2208) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-47` — `AddedOptionalProperty` — The new version has a new optional property 'type' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2170](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2170) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2208](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2208) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-48` — `AddedOptionalProperty` — The new version has a new optional property 'systemData' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2170](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2170) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2208](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2208) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-5` — `AddedOptionalProperty` — The new version has a new optional property 'id' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1967](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1967) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 2005](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L2005) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-55` — `AddedOptionalProperty` — The new version has a new optional property 'id' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2377](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2377) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2415](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2415) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-56` — `AddedOptionalProperty` — The new version has a new optional property 'name' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2377](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2377) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2415](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2415) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-57` — `AddedOptionalProperty` — The new version has a new optional property 'type' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2377](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2377) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2415](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2415) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-58` — `AddedOptionalProperty` — The new version has a new optional property 'systemData' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2377](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2377) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 2415](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L2415) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-6` — `AddedOptionalProperty` — The new version has a new optional property 'name' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1967](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1967) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 2005](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L2005) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-65` — `AddedOptionalProperty` — The new version has a new optional property 'id' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2419](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2419) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2457](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2457) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-66` — `AddedOptionalProperty` — The new version has a new optional property 'name' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2419](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2419) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2457](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2457) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-67` — `AddedOptionalProperty` — The new version has a new optional property 'type' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2419](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2419) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2457](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2457) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-68` — `AddedOptionalProperty` — The new version has a new optional property 'systemData' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2419](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2419) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 2457](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L2457) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-7` — `AddedOptionalProperty` — The new version has a new optional property 'type' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1967](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1967) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 2005](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L2005) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-8` — `AddedOptionalProperty` — The new version has a new optional property 'systemData' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1967](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1967) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 2005](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L2005) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-83` — `AddedOptionalProperty` — The new version has a new optional property 'roleAssignmentsOnCcaCreate' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2611](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2611) — JSONPath `definitions.CloudAccountProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2807](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2807) — JSONPath `definitions.CloudAccountProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/linksaas response 200 | GET /subscriptions/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-85` — `AddedOptionalProperty` — The new version has a new optional property 'id' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2658](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2658) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2872](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2872) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-86` — `AddedOptionalProperty` — The new version has a new optional property 'name' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2658](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2658) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2872](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2872) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-87` — `AddedOptionalProperty` — The new version has a new optional property 'type' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2658](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2658) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2872](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2872) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-88` — `AddedOptionalProperty` — The new version has a new optional property 'systemData' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2658](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2658) — JSONPath `definitions.CloudAccountUpdate.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2872](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2872) — JSONPath `definitions.CloudAccountUpdate.properties`
- **Resolved targets:** PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-92` — `AddedOptionalProperty` — The new version has a new optional property 'complianceLockStatus' that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 4240](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L4240) — JSONPath `definitions.StorageProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 4471](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L4471) — JSONPath `definitions.StorageProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{} response 201 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/disablecompliancelock response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/enablecompliancelock response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/refresh response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

#### AddedPropertyInResponse

- **Swagger finding:** `A-oad-73` — `AddedPropertyInResponse` — The new version has a new property 'roleAssignmentsOnCcaCreate' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2611](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2611) — JSONPath `definitions.CloudAccountProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2807](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2807) — JSONPath `definitions.CloudAccountProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/linksaas response 200 | GET /subscriptions/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

#### AddedRequiredProperty

- **Swagger finding:** `A-oad-78` — `AddedRequiredProperty` — The new version lists new non-read-only properties as required: 'roleName, entities'. These properties were not listed as required in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 3858](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L3858) — JSONPath `definitions.RoleMappingProperties.properties.roles.items`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 4089](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L4089) — JSONPath `definitions.RoleMappingProperties.properties.roles.items`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/linksaas response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 201 | GET /subscriptions/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-91` — `AddedRequiredProperty` — The new version lists new non-read-only properties as required: 'roleName, entities'. These properties were not listed as required in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 3797](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L3797) — JSONPath `definitions.RoleAssignment`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 4023](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L4023) — JSONPath `definitions.RoleAssignment`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/linksaas response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 201 | GET /subscriptions/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

#### ConstraintChanged

- **Swagger finding:** `A-oad-90` — `ConstraintChanged` — The new version has a different 'minItems' value than the previous one.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 3805](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L3805) — JSONPath `definitions.RoleAssignment.properties.entities`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 4031](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L4031) — JSONPath `definitions.RoleAssignment.properties.entities`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/linksaas response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 201 | GET /subscriptions/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

#### RemovedProperty

- **Swagger finding:** `A-oad-71` — `RemovedProperty` — The new version is missing a property found in the old version. Was 'backupAdminOnCcaCreate' renamed or removed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2611](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2611) — JSONPath `definitions.CloudAccountProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2807](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2807) — JSONPath `definitions.CloudAccountProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/linksaas response 200 | GET /subscriptions/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-72` — `RemovedProperty` — The new version is missing a property found in the old version. Was 'multiPersonAuthorizationOnCcaCreate' renamed or removed?
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2611](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2611) — JSONPath `definitions.CloudAccountProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2807](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2807) — JSONPath `definitions.CloudAccountProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/linksaas response 200 | GET /subscriptions/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

#### RequiredStatusChange

- **Swagger finding:** `A-oad-13` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2769](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2769) — JSONPath `definitions.ProtectionGroupProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 2786](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L2786) — JSONPath `definitions.ProtectionGroupProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-23` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2825](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2825) — JSONPath `definitions.ProtectionGroupProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 2842](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L2842) — JSONPath `definitions.ProtectionGroupProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-3` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 2707](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L2707) — JSONPath `definitions.ProtectionGroupProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 2724](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L2724) — JSONPath `definitions.ProtectionGroupProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-33` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2893](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2893) — JSONPath `definitions.ProtectionGroupProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 2910](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L2910) — JSONPath `definitions.ProtectionGroupProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-43` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2910](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2910) — JSONPath `definitions.ProtectionGroupProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 2927](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L2927) — JSONPath `definitions.ProtectionGroupProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-53` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 3106](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L3106) — JSONPath `definitions.ProtectionGroupProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 3123](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L3123) — JSONPath `definitions.ProtectionGroupProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-63` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 3191](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L3191) — JSONPath `definitions.ProtectionGroupProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 3208](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L3208) — JSONPath `definitions.ProtectionGroupProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-76` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 3472](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L3472) — JSONPath `definitions.ProtectionGroupProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 3695](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L3695) — JSONPath `definitions.ProtectionGroupProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups/{} response 201 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/protectiongroups response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-77` — `RequiredStatusChange` — The 'required' status changed from the old version('False') to the new version('True').
- **Comparison:** Phase A — Swagger Breaking Change; severity `Error`; actionable error **yes**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 3800](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L3800) — JSONPath `definitions.RoleAssignment.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 4026](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L4026) — JSONPath `definitions.RoleAssignment.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 201 | PATCH /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{} response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/linksaas response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings/default response 201 | GET /subscriptions/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/rolemappings response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

### Informational OAD records

#### NoVersionChange

- **Swagger finding:** `A-oad-0` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2024-10-01-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-10` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2025-01-01-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-20` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-03-01-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-30` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-05-01-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-40` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-01-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-50` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-06-02-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-60` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-01-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-70` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

- **Swagger finding:** `A-oad-93` — `NoVersionChange` — The versions have not changed.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-08-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-08-01-preview/commvault.json#L1); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-08-01-preview/commvault.json, line 1](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-08-01-preview/commvault.json#L1)
- **Resolved targets:** OAD rule NoVersionChange; JSON path ; No terminal reference; Document commvault.json
- **Informational record:** OAD reports unchanged document versions as comparison context; this is not an API difference
- **Decision:** No TypeSpec equivalent was selected. Classification: `informational-oad`.

### Findings missing from the TypeSpec detector

#### AddedPath

- **Swagger finding:** `A-oad-80` — `AddedPath` — The new version is adding a path that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2267](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2267) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}/storages/{storageName}/disableComplianceLock']`
- **Resolved targets:** POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/disablecompliancelock
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-81` — `AddedPath` — The new version is adding a path that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2326](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2326) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}/storages/{storageName}/enableComplianceLock']`
- **Resolved targets:** POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/enablecompliancelock
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

- **Swagger finding:** `A-oad-82` — `AddedPath` — The new version is adding a path that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json); [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 2385](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L2385) — JSONPath `paths['/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Commvault.ContentStore/cloudAccounts/{cloudAccountName}/storages/{storageName}/refresh']`
- **Resolved targets:** POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/refresh
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

#### AddedReadOnlyPropertyInResponse

- **Swagger finding:** `A-oad-79` — `AddedReadOnlyPropertyInResponse` — The new version has a new read-only property 'complianceLockStatus' in response that was not found in the old version.
- **Comparison:** Phase A — Swagger Breaking Change; severity `Info`; actionable error **no**
- **Detector evidence:** [Swagger breaking-change phase A workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36843705384) (digest `58a5cd1ec15212fd652b4ce93c748a68d65cccc27f3a1bfcceba074b64c1b97a`)
- **Swagger source:** [base: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 4240](https://github.com/Azure/azure-rest-api-specs/blob/bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L4240) — JSONPath `definitions.StorageProperties.properties`; [head: specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json, line 4471](https://github.com/Azure/azure-rest-api-specs/blob/d7bddff73316c6472c4712ca7c16d84d90c5aa14/specification/liftrcommvault/resource-manager/Commvault.ContentStore/preview/2026-07-03-preview/commvault.json#L4471) — JSONPath `definitions.StorageProperties.properties`
- **Resolved targets:** GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{} request | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{} response 200 | PUT /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{} response 201 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/disablecompliancelock response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/enablecompliancelock response 200 | POST /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages/{}/refresh response 200 | GET /subscriptions/{}/resourcegroups/{}/providers/commvault.contentstore/cloudaccounts/{}/storages response 200
- **Decision:** No TypeSpec equivalent was selected. Classification: `missed-equivalent`.

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
git -C target fetch --no-tags origin bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb d7bddff73316c6472c4712ca7c16d84d90c5aa14
git -C target checkout --detach d7bddff73316c6472c4712ca7c16d84d90c5aa14
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/46924' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/liftrcommvault/Commvault.ContentStore.Management

```powershell
Push-Location target
node $prepared.executable 'specification/liftrcommvault/Commvault.ContentStore.Management' --base-ref bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb --phase same-version --json-output '../specification-liftrcommvault-Commvault.ContentStore.Management-phase-a.json' --markdown-output '../specification-liftrcommvault-Commvault.ContentStore.Management-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/liftrcommvault/Commvault.ContentStore.Management' --base-ref bb83f364d8d79a7c64cc5d6ed9677cbe27c8e1cb --json-output '../specification-liftrcommvault-Commvault.ContentStore.Management-phase-b-evidence.json' --markdown-output '../specification-liftrcommvault-Commvault.ContentStore.Management-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```

## Errors

- specification/liftrcommvault/Commvault.ContentStore.Management: Analysis failed: Cannot read properties of undefined (reading 'get')
; Analysis failed: Cannot read properties of undefined (reading 'get')

