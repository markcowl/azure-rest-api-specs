# Breaking-change evaluation: October 5–11, 2026 (fixed analyzer)

- **Run ID:** `weekly-2026-10-05-to-2026-10-11-fixed-55a6e7d1`
- **Dataset ID:** `weekly-2026-10-05-to-2026-10-11`
- **Generated at:** 2026-10-15T03:00:00Z
- **Selection:** [machine snapshot](selection.json)
- **Run manifest:** [machine contract](run.json)
- **Analyzer source:** `55a6e7d122e36ab4120958211c41499d3bd79177` (parent `d0ab464d60c47d6699bfea0292c901864b5d8ba0`)
- **Analyzer artifact digest:** `cdab5e43f1c9d9aed5d2a3ff9790964c07c202d40a6b320beb539fa1c5980820`
- **Analyzer readiness:** Exact commit built and cached once; the complete dist artifact digest and executable readiness were verified; PR #46583 produced zero Phase A findings and no Phase B comparisons.

## Selection

- Source candidates: **79**
- Excluded candidates: **44**
- Qualifying candidates: **35**
- Selected: **35**
- Continuation cursor: **none**
- Selection digest: `8aba227522c19570e8c2ada512fbe35e7e37e03c74a0e40e09866b62f15e1f91`

## Outcomes

- Complete: **7**
- Not qualified: **17**
- Partial: **11**
- Failed: **0**

| Phase | OAD | Informational OAD | TypeSpec | Exact | Probable | OAD-only | TypeSpec-only |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | 0 | 5 | 0 | 0 | 0 | 0 | 0 |
| B | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

The preserved historical run reported **111** TypeSpec-only findings. Among complete reports, this fixed-analyzer run reports **0**, a change of **-111**. The **11** partial reports are excluded from effectiveness totals, so this is not a full like-for-like reconciliation. The historical evidence remains unchanged at [original October 5–11 run](../2026-10-05-to-2026-10-11/README.md).

## Tentative issue analyses

| Category | Count |
| --- | ---: |
| `compile-runtime-failure` | 11 |
| `concordant-zero` | 14 |
| `evidence-gap` | 17 |
| `oad-only` | 85 |

Effectiveness totals include complete reports only. Issue-analysis counts cover every selected report, including not-qualified and partial executions, so their counts may exceed the findings shown in the Outcomes table.

## PR reports

| PR | Updated | Status | Phase A | Phase B | Issues |
| --- | --- | --- | --- | --- | ---: |
| [#46377](prs/46377/report.md) | 2026-10-05T05:51:23Z | not-qualified | — | — | 1 |
| [#46338](prs/46338/report.md) | 2026-10-05T16:14:05Z | not-qualified | — | — | 1 |
| [#46751](prs/46751/report.md) | 2026-10-05T23:24:00Z | not-qualified | — | — | 1 |
| [#47005](prs/47005/report.md) | 2026-10-06T00:27:06Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#46950](prs/46950/report.md) | 2026-10-06T15:00:29Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47047](prs/47047/report.md) | 2026-10-06T15:31:57Z | partial | — | — | 1 |
| [#46924](prs/46924/report.md) | 2026-10-07T09:23:40Z | partial | — | — | 86 |
| [#45368](prs/45368/report.md) | 2026-10-07T20:12:37Z | not-qualified | — | — | 1 |
| [#46656](prs/46656/report.md) | 2026-10-07T21:09:32Z | partial | — | — | 1 |
| [#47033](prs/47033/report.md) | 2026-10-07T21:28:15Z | not-qualified | — | — | 1 |
| [#47118](prs/47118/report.md) | 2026-10-08T05:43:48Z | partial | — | — | 1 |
| [#46044](prs/46044/report.md) | 2026-10-08T05:49:45Z | not-qualified | — | — | 1 |
| [#46855](prs/46855/report.md) | 2026-10-08T06:00:20Z | partial | — | — | 1 |
| [#46676](prs/46676/report.md) | 2026-10-08T08:33:35Z | not-qualified | — | — | 1 |
| [#46967](prs/46967/report.md) | 2026-10-08T08:35:43Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#46585](prs/46585/report.md) | 2026-10-08T08:51:15Z | not-qualified | — | — | 1 |
| [#47140](prs/47140/report.md) | 2026-10-09T00:26:42Z | partial | — | — | 1 |
| [#46583](prs/46583/report.md) | 2026-10-09T04:53:56Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#46546](prs/46546/report.md) | 2026-10-09T05:57:56Z | not-qualified | — | — | 1 |
| [#46674](prs/46674/report.md) | 2026-10-09T05:59:12Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47123](prs/47123/report.md) | 2026-10-09T06:24:33Z | partial | — | — | 1 |
| [#47139](prs/47139/report.md) | 2026-10-09T09:33:41Z | partial | — | — | 1 |
| [#47015](prs/47015/report.md) | 2026-10-09T09:44:37Z | not-qualified | — | — | 1 |
| [#46860](prs/46860/report.md) | 2026-10-09T11:17:24Z | not-qualified | — | — | 1 |
| [#45102](prs/45102/report.md) | 2026-10-09T11:45:32Z | not-qualified | — | — | 1 |
| [#45799](prs/45799/report.md) | 2026-10-09T15:56:32Z | not-qualified | — | — | 1 |
| [#45523](prs/45523/report.md) | 2026-10-09T17:05:50Z | not-qualified | — | — | 1 |
| [#46391](prs/46391/report.md) | 2026-10-09T17:29:22Z | partial | — | — | 1 |
| [#47161](prs/47161/report.md) | 2026-10-09T18:55:38Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47160](prs/47160/report.md) | 2026-10-09T19:24:37Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#46832](prs/46832/report.md) | 2026-10-09T22:07:17Z | not-qualified | — | — | 1 |
| [#45556](prs/45556/report.md) | 2026-10-10T00:18:26Z | not-qualified | — | — | 1 |
| [#47170](prs/47170/report.md) | 2026-10-10T07:59:51Z | partial | — | — | 1 |
| [#47019](prs/47019/report.md) | 2026-10-10T08:19:46Z | not-qualified | — | — | 1 |
| [#46715](prs/46715/report.md) | 2026-10-10T14:02:46Z | partial | — | — | 1 |

Phase A is Swagger BreakingChange versus TypeSpec same-version. Phase B is Cross-Version versus TypeSpec cross-version retained from the combined analyzer execution. OAD workflow duration is not treated as detector time.

