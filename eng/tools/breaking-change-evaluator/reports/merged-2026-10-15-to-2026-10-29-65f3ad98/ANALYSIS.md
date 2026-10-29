# Analysis

This run evaluates every merged pull request selected by the frozen query for
October 15 through October 29, 2026. The source set contains 170 merged pull
requests; 94 changed a TypeSpec service input and were selected without a cap.
The analyzer is pinned to
`65f3ad98e7d82a2fdb26e7c24a4587a4db9cd52a`, with prepared artifact digest
`95835342e0e018bc513e3f639a2b36ec641918b5db3084bdb380fce3bd8f6cc5`.

## Coverage

| Outcome | PRs | Share of selected PRs |
| --- | ---: | ---: |
| Complete evaluation | 46 | 48.9% |
| Not qualified | 42 | 44.7% |
| Partial evaluation | 6 | 6.4% |
| Failed | 0 | 0.0% |

Of the 52 PRs with sufficient workflow evidence to begin evaluation, 46
(88.5%) completed. Thirty-seven complete reports had no OAD or TypeSpec
breaking findings, while nine had findings from at least one detector.

The 42 not-qualified reports are evidence limitations, not detector results:

- 26 could not prove that the available workflow run belonged to the exact PR,
  head SHA, and base SHA.
- 9 had incomplete workflow evidence, including truncated OAD output.
- 7 lacked a complete, schema-valid OAD result.

No rate in this analysis treats those PRs as no-findings.

## Detector comparison

| Phase | OAD findings | TypeSpec findings | Exact | Missed equivalent | Intentional OAD-only | TypeSpec-only |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| A: same-version | 175 | 330 | 2 | 26 | 147 | 329 |
| B: cross-version | 109 | 2,883 | 28 | 64 | 17 | 2,866 |

There were no probable or ambiguous matches. Of the OAD findings expected to
have a TypeSpec equivalent, the evaluator correlated 2 of 28 in Phase A and 28
of 92 in Phase B. The unmatched counts should be reviewed as a combination of
analyzer coverage and correlation quality; they are not, by themselves, proof
that the analyzer missed a wire-level break.

The raw TypeSpec totals are dominated by
[#47594](prs/47594/report.md), a repository-wide migration that enabled the
`use-model-request-body` rule. It produced 3,122 of the 3,213 TypeSpec findings
(97.2%): 270 in Phase A and 2,852 in Phase B, with no OAD findings. Excluding
that migration PR leaves 60 Phase A and 31 Phase B TypeSpec findings. This
outlier shows that aggregate finding counts are not a useful precision measure
until rule-migration diagnostics are separated from API compatibility changes.

Four complete reports contain exact correlations:

- [#47058](prs/47058/report.md): 10 exact, 13 missed equivalent.
- [#47326](prs/47326/report.md): 2 exact, 26 missed equivalent.
- [#47018](prs/47018/report.md): 4 exact.
- [#47244](prs/47244/report.md): 14 exact, 15 missed equivalent.

The issue analysis also identified 141 reciprocal narrowed/widened pairs. These
should be deduplicated or represented as one structural change before using
finding counts for reviewer workload estimates.

## Partial evaluations

Partial reports preserve available findings but are excluded from effectiveness
totals:

- [#46371](prs/46371/report.md) encountered an unsupported nested union during
  HTTP canonicalization for IoTOperations and base-revision file-not-found
  compilation errors in two other projects.
- [#47423](prs/47423/report.md), [#47643](prs/47643/report.md),
  [#47645](prs/47645/report.md), [#47691](prs/47691/report.md), and
  [#47726](prs/47726/report.md) each encountered a base-revision
  file-not-found compilation error in one affected project.

The nested-union failure is an analyzer/canonicalizer limitation. The remaining
errors reflect historical base revisions that cannot be compiled from the
isolated comparison checkout and should be handled as unavailable project
evidence rather than no-findings.

## Conclusions

The pinned analyzer is stable enough to execute the qualified corpus: there
were no failed reports, and the cross-install TypeKit realm crash found during
the run was fixed and regression-tested in
[markcowl/typespec-azure#13](https://github.com/markcowl/typespec-azure/pull/13).

Before using the analyzer as a replacement signal, the highest-value follow-up
work is:

1. Separate lint/rule-migration diagnostics from API compatibility findings.
2. Resolve or explicitly support nested-union canonicalization.
3. Deduplicate reciprocal narrowed/widened structural findings.
4. Review the 90 missed-equivalent OAD occurrences to distinguish analyzer
   coverage gaps from matcher identity gaps.
5. Improve workflow evidence publication so exact PR/base association and
   complete structured OAD results are available without log inference.
