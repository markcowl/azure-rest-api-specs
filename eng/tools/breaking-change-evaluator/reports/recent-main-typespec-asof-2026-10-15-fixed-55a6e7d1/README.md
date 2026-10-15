# Breaking-change evaluation: recent main TypeSpec PRs as of October 14, 2026

- **Run ID:** `recent-main-typespec-asof-2026-10-15-fixed-55a6e7d1`
- **Dataset ID:** `recent-main-typespec-asof-2026-10-15`
- **Generated at:** 2026-10-15T03:00:00Z
- **Selection:** [machine snapshot](selection.json)
- **Run manifest:** [machine contract](run.json)
- **Analyzer source:** `55a6e7d122e36ab4120958211c41499d3bd79177` (parent `d0ab464d60c47d6699bfea0292c901864b5d8ba0`)
- **Analyzer artifact digest:** `cdab5e43f1c9d9aed5d2a3ff9790964c07c202d40a6b320beb539fa1c5980820`
- **Analyzer readiness:** Exact commit built and cached once; the complete dist artifact digest and executable readiness were verified; PR #46583 produced zero Phase A findings and no Phase B comparisons.

## Selection

- Source candidates: **289**
- Excluded candidates: **249**
- Qualifying candidates: **204**
- Selected: **40**
- Continuation cursor: **[object Object]**
- Selection digest: `2cc343514c0b27a25a73268302b14dad41c929ed89fe0f1ad505485f227308ad`
- Weekly-selection intersection: **0**

## Outcomes

- Complete: **5**
- Not qualified: **26**
- Partial: **9**
- Failed: **0**

| Phase | OAD | Informational OAD | TypeSpec | Exact | Probable | OAD-only | TypeSpec-only |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | 5 | 6 | 5 | 0 | 0 | 5 | 5 |
| B | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Tentative issue analyses

| Category | Count |
| --- | ---: |
| `compile-runtime-failure` | 9 |
| `concordant-zero` | 9 |
| `evidence-gap` | 26 |
| `oad-only` | 7 |
| `typespec-only` | 5 |

## PR reports

| PR | Updated | Status | Phase A | Phase B | Issues |
| --- | --- | --- | --- | --- | ---: |
| [#47315](prs/47315/report.md) | 2026-10-15T03:34:20Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#46034](prs/46034/report.md) | 2026-10-15T03:15:32Z | not-qualified | — | — | 1 |
| [#47234](prs/47234/report.md) | 2026-10-15T03:04:41Z | not-qualified | — | — | 1 |
| [#46811](prs/46811/report.md) | 2026-10-15T02:59:22Z | not-qualified | — | — | 1 |
| [#47312](prs/47312/report.md) | 2026-10-15T02:40:18Z | partial | — | — | 1 |
| [#47279](prs/47279/report.md) | 2026-10-15T02:34:23Z | not-qualified | — | — | 1 |
| [#45406](prs/45406/report.md) | 2026-10-15T02:28:41Z | not-qualified | — | — | 1 |
| [#47048](prs/47048/report.md) | 2026-10-15T02:19:53Z | not-qualified | — | — | 1 |
| [#46750](prs/46750/report.md) | 2026-10-15T02:05:37Z | partial | — | — | 1 |
| [#47274](prs/47274/report.md) | 2026-10-15T01:39:38Z | partial | — | — | 1 |
| [#47311](prs/47311/report.md) | 2026-10-15T01:22:33Z | not-qualified | — | — | 1 |
| [#47156](prs/47156/report.md) | 2026-10-15T01:17:11Z | not-qualified | — | — | 1 |
| [#47308](prs/47308/report.md) | 2026-10-15T00:19:26Z | not-qualified | — | — | 1 |
| [#46300](prs/46300/report.md) | 2026-10-14T23:53:58Z | not-qualified | — | — | 1 |
| [#47307](prs/47307/report.md) | 2026-10-14T23:43:04Z | not-qualified | — | — | 1 |
| [#46359](prs/46359/report.md) | 2026-10-14T23:08:03Z | not-qualified | — | — | 1 |
| [#47306](prs/47306/report.md) | 2026-10-14T22:41:31Z | partial | — | — | 1 |
| [#45455](prs/45455/report.md) | 2026-10-14T22:36:56Z | not-qualified | — | — | 1 |
| [#47255](prs/47255/report.md) | 2026-10-14T22:18:55Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#46724](prs/46724/report.md) | 2026-10-14T22:15:42Z | not-qualified | — | — | 1 |
| [#46659](prs/46659/report.md) | 2026-10-14T22:12:13Z | not-qualified | — | — | 1 |
| [#46097](prs/46097/report.md) | 2026-10-14T20:14:57Z | not-qualified | — | — | 1 |
| [#47265](prs/47265/report.md) | 2026-10-14T19:25:54Z | not-qualified | — | — | 1 |
| [#47204](prs/47204/report.md) | 2026-10-14T19:00:16Z | not-qualified | — | — | 1 |
| [#45309](prs/45309/report.md) | 2026-10-14T18:29:42Z | not-qualified | — | — | 1 |
| [#46643](prs/46643/report.md) | 2026-10-14T18:08:47Z | partial | — | — | 3 |
| [#47206](prs/47206/report.md) | 2026-10-14T18:06:27Z | partial | — | — | 1 |
| [#47153](prs/47153/report.md) | 2026-10-14T17:45:57Z | not-qualified | — | — | 1 |
| [#45155](prs/45155/report.md) | 2026-10-14T17:44:00Z | not-qualified | — | — | 1 |
| [#46144](prs/46144/report.md) | 2026-10-14T17:16:50Z | not-qualified | — | — | 1 |
| [#47283](prs/47283/report.md) | 2026-10-14T17:15:37Z | not-qualified | — | — | 1 |
| [#47295](prs/47295/report.md) | 2026-10-14T16:25:25Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47109](prs/47109/report.md) | 2026-10-14T16:08:19Z | partial | — | — | 1 |
| [#46060](prs/46060/report.md) | 2026-10-14T14:41:39Z | not-qualified | — | — | 1 |
| [#45096](prs/45096/report.md) | 2026-10-14T13:10:15Z | evaluated | OAD 5; TypeSpec 5; TypeSpec-only 5 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 11 |
| [#35767](prs/35767/report.md) | 2026-10-14T13:10:03Z | not-qualified | — | — | 1 |
| [#46357](prs/46357/report.md) | 2026-10-14T13:09:58Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47290](prs/47290/report.md) | 2026-10-14T12:34:53Z | partial | — | — | 1 |
| [#46863](prs/46863/report.md) | 2026-10-14T12:28:09Z | partial | — | — | 1 |
| [#47031](prs/47031/report.md) | 2026-10-14T11:47:52Z | not-qualified | — | — | 1 |

Phase A is Swagger BreakingChange versus TypeSpec same-version. Phase B is Cross-Version versus TypeSpec cross-version retained from the combined analyzer execution. OAD workflow duration is not treated as detector time.

