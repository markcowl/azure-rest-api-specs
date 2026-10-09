# Breaking-change evaluator

`breaking-change-evaluator` will compare the existing OpenAPI-diff breaking-change checks with a
pinned TypeSpec-native breaking-change analysis for an explicitly supplied pull request.

The CLI reserves two commands:

```text
breaking-change-evaluator prepare [--typespec-revision <sha>] [--cache-dir <path>]
breaking-change-evaluator evaluate --pr <url|owner/repo#n> --json-output <file> --markdown-output <file> [--tool-revision <sha>] [--cache-dir <path>]
```

`prepare` is the only command that can clone, install, build, and cache the pinned TypeSpec
prototype. `evaluate` requires a previously prepared immutable revision and never invokes the
prototype clone/install/build path.

```bash
pnpm exec breaking-change-evaluator prepare \
  --typespec-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0

pnpm exec breaking-change-evaluator evaluate \
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
separate exact, review-required probable, intentional Swagger-only, missing-from-TypeSpec,
missing-from-Swagger, and ambiguous findings. Matched findings are grouped by
`SwaggerRule → TypeSpecFindingKind`; unmatched Swagger findings are grouped by Swagger rule; and
TypeSpec-only findings are grouped by TypeSpec finding kind. “Missing from Swagger” means the
Swagger checks did not report an equivalent finding, not that a Swagger defect has been confirmed.
Incomplete reports suppress rollups and recall rates.

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
