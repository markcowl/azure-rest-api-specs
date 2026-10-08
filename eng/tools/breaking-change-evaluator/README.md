# Breaking-change evaluator

`breaking-change-evaluator` will compare the existing OpenAPI-diff breaking-change checks with a
pinned TypeSpec-native breaking-change analysis for an explicitly supplied pull request.

The CLI reserves two commands:

```text
breaking-change-evaluator prepare [--typespec-revision <sha>] [--cache-dir <path>]
breaking-change-evaluator evaluate --pr <url|owner/repo#n> --json-output <file> --markdown-output <file> [--tool-revision <sha>] [--cache-dir <path>]
```

`prepare` is the only command that can clone, install, build, and cache the pinned TypeSpec
prototype. `evaluate` remains unavailable and returns usage exit code `2`; end-to-end checkout
and orchestration are not reachable in this stage.

```bash
pnpm exec breaking-change-evaluator prepare \
  --typespec-revision d0ab464d60c47d6699bfea0292c901864b5d8ba0
```

Prepared tools are published through a cache-local atomic rename. After relocation, `prepare`
reinstalls the pinned workspace dependencies, applies a versioned compatibility patch to the
prototype's compiled TypeSpec entry-point resolution, and verifies the final cached executable
before publishing `current.json`. Cache reuse requires matching source and artifact digests,
cache-format and compatibility markers, and a successful runtime check.

The aggregation contract is
[`breaking-change-evaluator.schema.json`](breaking-change-evaluator.schema.json). Complete reports
separate exact, review-required probable, intentional Swagger-only, missed-equivalent,
TypeSpec-only, and ambiguous findings. Incomplete reports suppress rollups and recall rates.
