# Breaking-change evaluation: merged TypeSpec PRs from October 15 through October 29, 2026

- **Run ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
- **Dataset ID:** `merged-2026-10-15-to-2026-10-29-65f3ad98`
- **Generated at:** 2026-10-29T07:12:44Z
- **Selection:** [machine snapshot](selection.json)
- **Run manifest:** [machine contract](run.json)
- **Analyzer source:** `65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a` (parent `64550a561cbd7f5eb0ec6865802a908744a3528f`)
- **Analyzer artifact digest:** `95835342e0e018bc513e3f639a2b36ec641918b5db3084bdb380fce3bd8f6cc5`
- **Analyzer readiness:** Exact analyzer commit built and cached successfully; full package suite passed with 465 tests and 11 skips. A real #47326 base/head comparison completed all three same-version comparisons and reported findings without the prior TypeKit realm failure. Fix retained in markcowl/typespec-azure#13.

## Selection

- Source candidates: **170**
- Excluded candidates: **76**
- Qualifying candidates: **94**
- Selected: **94**
- Continuation cursor: **none**
- Selection digest: `4a05f613084e84d17fbc18bb0f9f5651361df56c6f12e3512c4110477531ec8f`

## Outcomes

- Complete: **46**
- Not qualified: **42**
- Partial: **6**
- Failed: **0**

| Phase | OAD | Informational OAD | TypeSpec | Exact | Probable | Missed equivalent | Intentional gap | TypeSpec-only | Ambiguous |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| A | [175](#phase-a-oad-total-evidence) | [26](#phase-a-oad-informational-evidence) | [330](#phase-a-type-spec-total-evidence) | [2](#phase-a-exact-evidence) | 0 | [26](#phase-a-missed-equivalent-evidence) | [147](#phase-a-intentional-swagger-only-evidence) | [329](#phase-a-type-spec-only-evidence) | 0 |
| B | [109](#phase-b-oad-total-evidence) | 0 | [2883](#phase-b-type-spec-total-evidence) | [28](#phase-b-exact-evidence) | 0 | [64](#phase-b-missed-equivalent-evidence) | [17](#phase-b-intentional-swagger-only-evidence) | [2866](#phase-b-type-spec-only-evidence) | 0 |

## Tentative issue analyses

| Category | Count |
| --- | ---: |
| `compile-runtime-failure` | 6 |
| `concordant-zero` | 81 |
| `evidence-gap` | 42 |
| `false-phase-a-triggered-phase-b` | 1 |
| `oad-only` | 254 |
| `reciprocal-narrowed-widened-pair` | 141 |
| `severity-mismatch` | 26 |
| `typespec-only` | 3197 |

Effectiveness totals include complete reports only. Issue-analysis counts cover every selected report, including not-qualified and partial executions, so their counts may exceed the findings shown in the Outcomes table.

## PR reports

| PR | Updated | Status | Phase A | Phase B | Issues |
| --- | --- | --- | --- | --- | ---: |
| [#47295](prs/47295/report.md) | 2026-10-15T03:55:52Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47234](prs/47234/report.md) | 2026-10-15T05:11:16Z | not-qualified | — | — | 1 |
| [#47284](prs/47284/report.md) | 2026-10-15T06:23:02Z | not-qualified | — | — | 1 |
| [#47058](prs/47058/report.md) | 2026-10-15T07:17:44Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 23; TypeSpec 6; TypeSpec-only 1 | 25 |
| [#47315](prs/47315/report.md) | 2026-10-15T08:16:46Z | not-qualified | — | — | 1 |
| [#47322](prs/47322/report.md) | 2026-10-15T09:59:29Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#46097](prs/46097/report.md) | 2026-10-15T16:24:20Z | not-qualified | — | — | 1 |
| [#47084](prs/47084/report.md) | 2026-10-15T16:39:01Z | not-qualified | — | — | 1 |
| [#45468](prs/45468/report.md) | 2026-10-15T17:03:54Z | not-qualified | — | — | 1 |
| [#47331](prs/47331/report.md) | 2026-10-15T17:44:37Z | not-qualified | — | — | 1 |
| [#47265](prs/47265/report.md) | 2026-10-15T23:27:15Z | not-qualified | — | — | 1 |
| [#47320](prs/47320/report.md) | 2026-10-16T03:50:35Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#46811](prs/46811/report.md) | 2026-10-16T10:27:34Z | not-qualified | — | — | 1 |
| [#47356](prs/47356/report.md) | 2026-10-16T10:59:09Z | not-qualified | — | — | 1 |
| [#47357](prs/47357/report.md) | 2026-10-16T11:38:46Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47326](prs/47326/report.md) | 2026-10-16T13:28:37Z | evaluated | OAD 30; TypeSpec 8; TypeSpec-only 7 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 38 |
| [#47338](prs/47338/report.md) | 2026-10-16T14:48:36Z | not-qualified | — | — | 1 |
| [#46315](prs/46315/report.md) | 2026-10-16T18:02:46Z | not-qualified | — | — | 1 |
| [#46034](prs/46034/report.md) | 2026-10-16T19:11:41Z | not-qualified | — | — | 1 |
| [#47375](prs/47375/report.md) | 2026-10-16T21:14:03Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#46371](prs/46371/report.md) | 2026-10-19T00:54:15Z | partial | — | — | 4 |
| [#47352](prs/47352/report.md) | 2026-10-19T02:07:48Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47353](prs/47353/report.md) | 2026-10-21T20:08:21Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47402](prs/47402/report.md) | 2026-10-19T03:17:16Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#46545](prs/46545/report.md) | 2026-10-19T05:47:50Z | not-qualified | — | — | 1 |
| [#47279](prs/47279/report.md) | 2026-10-19T06:04:25Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#46350](prs/46350/report.md) | 2026-10-19T14:01:10Z | not-qualified | — | — | 1 |
| [#47290](prs/47290/report.md) | 2026-10-19T16:49:08Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47419](prs/47419/report.md) | 2026-10-20T13:40:15Z | not-qualified | — | — | 1 |
| [#47162](prs/47162/report.md) | 2026-10-19T19:16:33Z | not-qualified | — | — | 1 |
| [#47432](prs/47432/report.md) | 2026-10-20T13:39:37Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#45742](prs/45742/report.md) | 2026-10-20T07:10:54Z | evaluated | OAD 144; TypeSpec 41; TypeSpec-only 41 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 186 |
| [#45961](prs/45961/report.md) | 2026-10-20T11:25:08Z | not-qualified | — | — | 1 |
| [#46450](prs/46450/report.md) | 2026-10-20T15:02:14Z | not-qualified | — | — | 1 |
| [#47448](prs/47448/report.md) | 2026-10-20T15:20:28Z | not-qualified | — | — | 1 |
| [#47156](prs/47156/report.md) | 2026-10-20T16:48:11Z | not-qualified | — | — | 1 |
| [#47423](prs/47423/report.md) | 2026-10-20T21:40:14Z | partial | — | — | 1 |
| [#47438](prs/47438/report.md) | 2026-10-20T23:03:59Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47204](prs/47204/report.md) | 2026-10-21T00:21:00Z | not-qualified | — | — | 1 |
| [#47451](prs/47451/report.md) | 2026-10-21T00:25:06Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#46300](prs/46300/report.md) | 2026-10-21T05:08:10Z | not-qualified | — | — | 1 |
| [#47478](prs/47478/report.md) | 2026-10-21T06:10:31Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47048](prs/47048/report.md) | 2026-10-21T10:36:49Z | not-qualified | — | — | 1 |
| [#47069](prs/47069/report.md) | 2026-10-21T16:01:21Z | not-qualified | — | — | 1 |
| [#47459](prs/47459/report.md) | 2026-10-21T18:44:58Z | not-qualified | — | — | 1 |
| [#47496](prs/47496/report.md) | 2026-10-21T22:12:30Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#46176](prs/46176/report.md) | 2026-10-21T22:09:36Z | not-qualified | — | — | 1 |
| [#47081](prs/47081/report.md) | 2026-10-22T00:09:29Z | not-qualified | — | — | 1 |
| [#47321](prs/47321/report.md) | 2026-10-22T03:25:34Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47408](prs/47408/report.md) | 2026-10-22T03:30:31Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47484](prs/47484/report.md) | 2026-10-22T03:52:03Z | not-qualified | — | — | 1 |
| [#47349](prs/47349/report.md) | 2026-10-22T07:38:33Z | not-qualified | — | — | 1 |
| [#47462](prs/47462/report.md) | 2026-10-22T07:51:43Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47361](prs/47361/report.md) | 2026-10-22T13:57:12Z | not-qualified | — | — | 1 |
| [#47306](prs/47306/report.md) | 2026-10-22T17:42:06Z | not-qualified | — | — | 1 |
| [#46163](prs/46163/report.md) | 2026-10-22T18:50:01Z | not-qualified | — | — | 1 |
| [#47424](prs/47424/report.md) | 2026-10-22T20:01:16Z | not-qualified | — | — | 1 |
| [#47255](prs/47255/report.md) | 2026-10-22T22:48:16Z | not-qualified | — | — | 1 |
| [#46965](prs/46965/report.md) | 2026-10-22T23:07:23Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 50; TypeSpec 4; TypeSpec-only 4 | 55 |
| [#47515](prs/47515/report.md) | 2026-10-23T02:40:58Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47547](prs/47547/report.md) | 2026-10-23T06:08:29Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47557](prs/47557/report.md) | 2026-10-23T07:01:18Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47324](prs/47324/report.md) | 2026-10-23T07:47:56Z | not-qualified | — | — | 1 |
| [#46495](prs/46495/report.md) | 2026-10-23T17:43:59Z | not-qualified | — | — | 1 |
| [#46093](prs/46093/report.md) | 2026-10-23T17:41:10Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47574](prs/47574/report.md) | 2026-10-23T18:26:48Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#46400](prs/46400/report.md) | 2026-10-23T21:23:49Z | not-qualified | — | — | 1 |
| [#47555](prs/47555/report.md) | 2026-10-23T22:56:31Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47018](prs/47018/report.md) | 2026-10-25T12:18:43Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 7; TypeSpec 5; TypeSpec-only 0 | 4 |
| [#44986](prs/44986/report.md) | 2026-10-25T12:35:45Z | not-qualified | — | — | 1 |
| [#47561](prs/47561/report.md) | 2026-10-26T06:48:51Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47244](prs/47244/report.md) | 2026-10-26T11:46:47Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 29; TypeSpec 8; TypeSpec-only 1 | 31 |
| [#46782](prs/46782/report.md) | 2026-10-26T12:08:14Z | not-qualified | — | — | 1 |
| [#47603](prs/47603/report.md) | 2026-10-26T16:07:04Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47506](prs/47506/report.md) | 2026-10-27T02:31:52Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47643](prs/47643/report.md) | 2026-10-27T14:30:01Z | partial | — | — | 1 |
| [#47541](prs/47541/report.md) | 2026-10-27T18:24:57Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47667](prs/47667/report.md) | 2026-10-27T21:28:03Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#46010](prs/46010/report.md) | 2026-10-27T22:18:51Z | not-qualified | — | — | 1 |
| [#47600](prs/47600/report.md) | 2026-10-27T23:14:56Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#46291](prs/46291/report.md) | 2026-10-28T04:06:16Z | evaluated | OAD 1; TypeSpec 1; TypeSpec-only 1 | OAD 0; TypeSpec 8; TypeSpec-only 8 | 10 |
| [#47645](prs/47645/report.md) | 2026-10-28T05:44:50Z | partial | — | — | 1 |
| [#47590](prs/47590/report.md) | 2026-10-28T06:01:31Z | evaluated | OAD 0; TypeSpec 10; TypeSpec-only 10 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 16 |
| [#47685](prs/47685/report.md) | 2026-10-28T06:15:07Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47690](prs/47690/report.md) | 2026-10-28T06:17:51Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47689](prs/47689/report.md) | 2026-10-28T09:31:47Z | not-qualified | — | — | 1 |
| [#47642](prs/47642/report.md) | 2026-10-28T15:39:48Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47628](prs/47628/report.md) | 2026-10-28T18:00:39Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47706](prs/47706/report.md) | 2026-10-28T19:13:46Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47726](prs/47726/report.md) | 2026-10-29T04:10:37Z | partial | — | — | 1 |
| [#47287](prs/47287/report.md) | 2026-10-29T04:46:57Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47727](prs/47727/report.md) | 2026-10-29T04:58:34Z | evaluated | OAD 0; TypeSpec 0; TypeSpec-only 0 | OAD 0; TypeSpec 0; TypeSpec-only 0 | 2 |
| [#47691](prs/47691/report.md) | 2026-10-29T04:59:50Z | partial | — | — | 1 |
| [#47594](prs/47594/report.md) | 2026-10-29T05:24:20Z | evaluated | OAD 0; TypeSpec 270; TypeSpec-only 270 | OAD 0; TypeSpec 2852; TypeSpec-only 2852 | 3258 |

## Contributing evidence

<a id="phase-a-oad-total-evidence"></a>
### Phase A — Comparable OAD

| PR | Count | Evidence |
| --- | ---: | --- |
| #47326 | 30 | [review findings](prs/47326/report.md#finding-review) |
| #45742 | 144 | [review findings](prs/45742/report.md#finding-review) |
| #46291 | 1 | [review findings](prs/46291/report.md#finding-review) |

<a id="phase-a-oad-informational-evidence"></a>
### Phase A — Informational OAD

| PR | Count | Evidence |
| --- | ---: | --- |
| #47295 | 3 | [review findings](prs/47295/report.md#finding-review-informational) |
| #47326 | 1 | [review findings](prs/47326/report.md#finding-review-informational) |
| #47375 | 1 | [review findings](prs/47375/report.md#finding-review-informational) |
| #45742 | 6 | [review findings](prs/45742/report.md#finding-review-informational) |
| #47574 | 2 | [review findings](prs/47574/report.md#finding-review-informational) |
| #47244 | 6 | [review findings](prs/47244/report.md#finding-review-informational) |
| #46291 | 7 | [review findings](prs/46291/report.md#finding-review-informational) |

<a id="phase-a-type-spec-total-evidence"></a>
### Phase A — TypeSpec

| PR | Count | Evidence |
| --- | ---: | --- |
| #47326 | 8 | [review findings](prs/47326/report.md#finding-review) |
| #45742 | 41 | [review findings](prs/45742/report.md#finding-review) |
| #46291 | 1 | [review findings](prs/46291/report.md#finding-review) |
| #47590 | 10 | [review findings](prs/47590/report.md#finding-review) |
| #47594 | 270 | [review findings](prs/47594/report.md#finding-review) |

<a id="phase-a-exact-evidence"></a>
### Phase A — Exact

| PR | Count | Evidence |
| --- | ---: | --- |
| #47326 | 2 | [review findings](prs/47326/report.md#finding-review-correlations) |

<a id="phase-a-missed-equivalent-evidence"></a>
### Phase A — Missed equivalent

| PR | Count | Evidence |
| --- | ---: | --- |
| #47326 | 26 | [review findings](prs/47326/report.md#finding-review-oad-only) |

<a id="phase-a-intentional-swagger-only-evidence"></a>
### Phase A — Intentional gap

| PR | Count | Evidence |
| --- | ---: | --- |
| #47326 | 2 | [review findings](prs/47326/report.md#finding-review-intentional) |
| #45742 | 144 | [review findings](prs/45742/report.md#finding-review-intentional) |
| #46291 | 1 | [review findings](prs/46291/report.md#finding-review-intentional) |

<a id="phase-a-type-spec-only-evidence"></a>
### Phase A — TypeSpec-only

| PR | Count | Evidence |
| --- | ---: | --- |
| #47326 | 7 | [review findings](prs/47326/report.md#finding-review-typespec-only) |
| #45742 | 41 | [review findings](prs/45742/report.md#finding-review-typespec-only) |
| #46291 | 1 | [review findings](prs/46291/report.md#finding-review-typespec-only) |
| #47590 | 10 | [review findings](prs/47590/report.md#finding-review-typespec-only) |
| #47594 | 270 | [review findings](prs/47594/report.md#finding-review-typespec-only) |

<a id="phase-b-oad-total-evidence"></a>
### Phase B — Comparable OAD

| PR | Count | Evidence |
| --- | ---: | --- |
| #47058 | 23 | [review findings](prs/47058/report.md#finding-review) |
| #46965 | 50 | [review findings](prs/46965/report.md#finding-review) |
| #47018 | 7 | [review findings](prs/47018/report.md#finding-review) |
| #47244 | 29 | [review findings](prs/47244/report.md#finding-review) |

<a id="phase-b-type-spec-total-evidence"></a>
### Phase B — TypeSpec

| PR | Count | Evidence |
| --- | ---: | --- |
| #47058 | 6 | [review findings](prs/47058/report.md#finding-review) |
| #46965 | 4 | [review findings](prs/46965/report.md#finding-review) |
| #47018 | 5 | [review findings](prs/47018/report.md#finding-review) |
| #47244 | 8 | [review findings](prs/47244/report.md#finding-review) |
| #46291 | 8 | [review findings](prs/46291/report.md#finding-review) |
| #47594 | 2852 | [review findings](prs/47594/report.md#finding-review) |

<a id="phase-b-exact-evidence"></a>
### Phase B — Exact

| PR | Count | Evidence |
| --- | ---: | --- |
| #47058 | 10 | [review findings](prs/47058/report.md#finding-review-correlations) |
| #47018 | 4 | [review findings](prs/47018/report.md#finding-review-correlations) |
| #47244 | 14 | [review findings](prs/47244/report.md#finding-review-correlations) |

<a id="phase-b-missed-equivalent-evidence"></a>
### Phase B — Missed equivalent

| PR | Count | Evidence |
| --- | ---: | --- |
| #47058 | 13 | [review findings](prs/47058/report.md#finding-review-oad-only) |
| #46965 | 33 | [review findings](prs/46965/report.md#finding-review-oad-only) |
| #47018 | 3 | [review findings](prs/47018/report.md#finding-review-oad-only) |
| #47244 | 15 | [review findings](prs/47244/report.md#finding-review-oad-only) |

<a id="phase-b-intentional-swagger-only-evidence"></a>
### Phase B — Intentional gap

| PR | Count | Evidence |
| --- | ---: | --- |
| #46965 | 17 | [review findings](prs/46965/report.md#finding-review-intentional) |

<a id="phase-b-type-spec-only-evidence"></a>
### Phase B — TypeSpec-only

| PR | Count | Evidence |
| --- | ---: | --- |
| #47058 | 1 | [review findings](prs/47058/report.md#finding-review-typespec-only) |
| #46965 | 4 | [review findings](prs/46965/report.md#finding-review-typespec-only) |
| #47244 | 1 | [review findings](prs/47244/report.md#finding-review-typespec-only) |
| #46291 | 8 | [review findings](prs/46291/report.md#finding-review-typespec-only) |
| #47594 | 2852 | [review findings](prs/47594/report.md#finding-review-typespec-only) |

Phase A is Swagger BreakingChange versus TypeSpec same-version. Phase B is Cross-Version versus TypeSpec cross-version retained from the combined analyzer execution. OAD workflow duration is not treated as detector time.

