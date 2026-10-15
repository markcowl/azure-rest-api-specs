# Breaking-change evaluator

**Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
**Dataset ID:** `recent-main-typespec-asof-2026-10-15`
**Report ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1:pr-47311:7ee220e5e9f6e362989b326eb7c147633058a91a`
**Schema:** `azure-rest-api-specs/breaking-change-evaluator@3` (>=3 <4)
**Status:** not-qualified
**Complete:** no

## Pull request

- **PR:** [Azure/azure-rest-api-specs#47311 — Add Python lifecycle request models for Web PubSub Chat](http<local-path>)
- **Author:** Y-Sindo
- **State:** open
- **Base:** `main` at `fcc20ab8473a30946221a1b876c89aa9f61447b9`
- **Head:** `chat-python-request-models` at `7ee220e5e9f6e362989b326eb7c147633058a91a`
- **Changed TypeSpec files:** `specification/webpubsub/data-plane/WebPubSubChat/client.tsp`, `specification/webpubsub/data-plane/WebPubSubChat/main.tsp`, `specification/webpubsub/data-plane/WebPubSubChat/models.tsp`, `specification/webpubsub/data-plane/WebPubSubChat/routes.tsp`

## Not qualified

- `missing-phase-a-run`
- `missing-phase-b-run`

## Tentative issue analyses

These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.

| Issue | Phase | Category | Conclusion | Confidence | Status | Findings |
| --- | --- | --- | --- | --- | --- | ---: |
| `issue-evidence-gap-181c1fc4d6c8db0f` | A, B | `evidence-gap` | insufficient-evidence | high | generated | 0 |

### issue-evidence-gap-181c1fc4d6c8db0f

- **Affected PRs:** #47311
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
  - `qualification:missing-phase-a-run` — missing-phase-a-run
  - `qualification:missing-phase-b-run` — missing-phase-b-run

## Error finding equivalence details

Both detectors reported zero actionable errors.

## Non-error finding equivalence by phase

This section follows error equivalence and contains findings that neither detector reports as an actionable error, including informational OAD records.

Both detectors reported zero non-error findings.
