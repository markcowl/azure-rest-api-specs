# Breaking-change evaluator

`breaking-change-evaluator` will compare the existing OpenAPI-diff breaking-change checks with a
pinned TypeSpec-native breaking-change analysis for an explicitly supplied pull request.

The CLI reserves two commands:

```text
breaking-change-evaluator prepare [--typespec-revision <sha>] [--cache-dir <path>]
breaking-change-evaluator evaluate --pr <url|owner/repo#n> --json-output <file> --markdown-output <file> [--tool-revision <sha>] [--cache-dir <path>] [--run-id <id>] [--dataset-id <id>] [--generated-at <iso>] [--issue-overlays <file>] [--work-dir <path>]
breaking-change-evaluator validate-runs --reports-root <path>
```

`prepare` is the only command that can clone, install, build, and cache the pinned TypeSpec
prototype. `evaluate` requires a previously prepared immutable revision and never invokes the
prototype clone/install/build path.

Committed longitudinal datasets assign immutable run, dataset, and report IDs. Schema identity and
reader compatibility are explicit in every report. The branch-level
[`reports/index.json`](reports/index.json) is the machine ingestion entry point, while
[`reports/README.md`](reports/README.md) is the human catalog. `validate-runs` verifies every
cataloged run, selection digest, status total, report/run association, finding/phase mapping,
timing provenance, relative link, deterministic Markdown, and privacy invariant. Historical runs
remain cataloged under their original schema instead of being overwritten.

Schema v4 comparison reports contain actionable errors only: post-policy OAD messages with severity
`Error` and unsuppressed TypeSpec findings with severity `error`. Warning/Info OAD messages and
ignored/suppressed TypeSpec findings remain in raw detector artifacts but are excluded from
matching, rollups, rates, and conclusions.

```bash
node cmd/breaking-change-evaluator.js prepare \
  --typespec-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0

node cmd/breaking-change-evaluator.js evaluate \
  --pr Azure/azure-rest-api-specs#46675 \
  --tool-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0 \
  --json-output evaluator.json \
  --markdown-output evaluator.md
```

Prepared tools are published through a cache-local atomic rename. After relocation, `prepare`
reinstalls the pinned workspace dependencies, applies a versioned compatibility patch to the
prototype's compiled TypeSpec entry-point resolution, and verifies the final cached executable
before publishing `current.json`. Cache reuse requires matching source and artifact digests,
cache-format and compatibility markers, and a successful runtime check.

The aggregation contract is
[`breaking-change-evaluator.schema.json`](breaking-change-evaluator.schema.json). Complete reports
are per-PR evaluation dossiers with immutable PR metadata, workflow evidence links, source
permalinks, normalized target evidence, and portable PowerShell reproduction commands. They
separate exact, review-required probable, informational OAD records, intentional Swagger-only,
missing-from-TypeSpec, missing-from-Swagger, and ambiguous findings. Matched findings are grouped by
`SwaggerRule → TypeSpecFindingKind`; unmatched Swagger findings are grouped by Swagger rule; and
TypeSpec-only findings are grouped by TypeSpec finding kind. “Missing from Swagger” means the
Swagger checks did not report an equivalent finding, not that a Swagger defect has been confirmed.
Each TypeSpec project also records every executed same-version and cross-version comparison,
including zero-finding comparisons, so phase execution does not have to be inferred from findings.
The prepared analyzer emits durable JSON and Markdown artifacts next to the evaluator report.
Phase A uses an independently filtered `same-version` invocation. The pinned prototype discovers
Phase B candidates from Phase A changes, so authoritative Phase B evidence uses the generated
combined Phase A+B analyzer report; filtering directly to `cross-version` would incorrectly omit
those candidates. TypeSpec findings link to the exact generated Markdown artifact rather than
using the analyzer source commit as detector evidence; the source commit remains provenance.
OAD `NoVersionChange` records are retained as informational comparison context but excluded from
comparable-finding totals and detector coverage rates.
Rollups are reported overall and separately by phase: Phase A compares the PR's Swagger Breaking
Change findings with TypeSpec `same-version` findings, while Phase B compares Breaking Change
(Cross-Version) findings with TypeSpec `cross-version` findings.
Detailed reports compare actionable errors before non-error findings. A semantic match remains a
match when detector severities disagree, but the error-status mismatch is reported explicitly.
TypeSpec error state accounts for suppression. Decision summaries show the selected evidence in
plain language and reserve the full candidate trace for JSON.

Reports also contain structured tentative issue analyses with stable IDs, affected PRs, phases and
finding IDs, category, conclusion, confidence and rationale, evidence, aggregate impact, suggested
fix, and review status. Generated heuristics cover reciprocal narrowed/widened pairs, false Phase
A-triggered Phase B work, concordant zero results, severity mismatches, OAD-only and TypeSpec-only
findings, evidence gaps, and compile/runtime failures. A JSON overlay can record a reviewed
conclusion or status without mutating detector evidence.

Detector performance is reported independently by phase using timing emitted by the detector
itself. The evaluator never substitutes GitHub Actions workflow duration for missing OAD detector
timing. Because the pinned TypeSpec prototype does not expose independent Phase B timing, reports
show its combined Phase A+B duration and mark independent Phase B timing unavailable. Incomplete
reports suppress rollups and coverage rates.

Each complete dossier includes commands to reproduce both the full evaluator run and each direct
TypeSpec analyzer project run. The commands pin the evaluator commit, analyzer source SHA and
artifact digest, PR head SHA, and PR base SHA. Machine-specific temporary checkout and cache paths
are not persisted.

The evaluator is staged on `markcowl/azure-rest-api-specs:breaking-change-evaluator-staged` for
pilot use. It accepts only explicit pull requests from `Azure/azure-rest-api-specs` and
`Azure/azure-rest-api-specs-pr`; automated discovery and persistent aggregation are intentionally
deferred.

Exit codes:

| Code | Meaning                         |
| ---: | ------------------------------- |
|    0 | Complete evaluation             |
|    2 | Invalid command-line usage      |
|    3 | Pull request is not qualified   |
|    4 | Evaluation failed or is partial |
