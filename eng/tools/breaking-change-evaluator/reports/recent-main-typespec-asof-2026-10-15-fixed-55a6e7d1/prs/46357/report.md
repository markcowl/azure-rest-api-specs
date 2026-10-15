# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-46357:7ec8524eb677d62b7870befbac30972818a40461`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** evaluated
**Complete:** yes

## Pull request

- **PR:** [Azure/azure-rest-api-specs#46357 — Add 2026-09-15-preview enhanced transcription options](https://github.com/Azure/azure-rest-api-specs/pull/46357)
- **Author:** amber-yujueWang
- **State:** open
- **Base:** `main` at `b464a76895ea6f17747d4664b935d0dc55fa06c4`
- **Head:** `users/wangamber/speech-transcription-2026-09-15-preview` at `7ec8524eb677d62b7870befbac30972818a40461`
- **Changed TypeSpec files:** `specification/cognitiveservices/data-plane/SpeechTranscription/client.tsp`, `specification/cognitiveservices/data-plane/SpeechTranscription/main.tsp`, `specification/cognitiveservices/data-plane/SpeechTranscription/models.tsp`

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
| A | [Swagger Breaking Change run 36699592817](https://github.com/Azure/azure-rest-api-specs/actions/runs/36699592817) | `same-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |
| B | [Breaking Change (Cross-Version) run 36699592863](https://github.com/Azure/azure-rest-api-specs/actions/runs/36699592863) | `cross-version` | concordant-zero | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | N/A | N/A |

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
| A | Unavailable | 156 ms | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36699592817) (no detector timing emitted); [TypeSpec Phase A report](report-artifacts/typespec/12cddeb6aac969f3-phase-a.md) |
| B | Unavailable | Unavailable independently (combined A+B: 392 ms) | Not comparable: one or both detector timings are unavailable | [OAD workflow](https://github.com/Azure/azure-rest-api-specs/actions/runs/36699592863) (no detector timing emitted); [TypeSpec combined report containing Phase B](report-artifacts/typespec/12cddeb6aac969f3-phase-b.md) |

## TypeSpec phase execution

| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |
| --- | --- | --- | ---: | ---: | --- |
| `specification/cognitiveservices/data-plane/SpeechTranscription` | Phase A (`same-version`) | `2025-10-15` → `2025-10-15` | 1 | 0 | [generated Markdown](report-artifacts/typespec/12cddeb6aac969f3-phase-a.md) |
| `specification/cognitiveservices/data-plane/SpeechTranscription` | Phase B (`cross-version`) | `2025-10-15` → `2026-09-15-preview` | 1 | 0 | [generated combined Markdown](report-artifacts/typespec/12cddeb6aac969f3-phase-b.md) |

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-concordant-zero-64562a5c58c16a7b` | A | `concordant-zero` | confirmed-agreement | high | generated | 0 |
| `issue-concordant-zero-81f83d817aee6da8` | B | `concordant-zero` | confirmed-agreement | high | generated | 0 |

### issue-concordant-zero-64562a5c58c16a7b

- **Affected PRs:** #46357
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

### issue-concordant-zero-81f83d817aee6da8

- **Affected PRs:** #46357
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
git -C target fetch --no-tags origin b464a76895ea6f17747d4664b935d0dc55fa06c4 7ec8524eb677d62b7870befbac30972818a40461
git -C target checkout --detach 7ec8524eb677d62b7870befbac30972818a40461
corepack pnpm --dir target install --frozen-lockfile
```

### Rerun the complete evaluator

```powershell
node evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js evaluate --pr 'https://github.com/Azure/azure-rest-api-specs/pull/46357' --tool-revision 55a6e7d122e36ab4120958211c41499d3bd79177 --json-output evaluator.json --markdown-output evaluator.md
```

### Run the TypeSpec analyzer for specification/cognitiveservices/data-plane/SpeechTranscription

```powershell
Push-Location target
node $prepared.executable 'specification/cognitiveservices/data-plane/SpeechTranscription' --base-ref b464a76895ea6f17747d4664b935d0dc55fa06c4 --phase same-version --json-output '../specification-cognitiveservices-data-plane-SpeechTranscription-phase-a.json' --markdown-output '../specification-cognitiveservices-data-plane-SpeechTranscription-phase-a.md' --fail-on-breaking
node $prepared.executable 'specification/cognitiveservices/data-plane/SpeechTranscription' --base-ref b464a76895ea6f17747d4664b935d0dc55fa06c4 --json-output '../specification-cognitiveservices-data-plane-SpeechTranscription-phase-b-evidence.json' --markdown-output '../specification-cognitiveservices-data-plane-SpeechTranscription-phase-b-evidence.md' --fail-on-breaking
Pop-Location
```
