# Breaking-change evaluator

`breaking-change-evaluator` will compare the existing OpenAPI-diff breaking-change checks with a
pinned TypeSpec-native breaking-change analysis for an explicitly supplied pull request.

The CLI reserves two commands:

```text
breaking-change-evaluator prepare [--typespec-revision <sha>] [--cache-dir <path>]
breaking-change-evaluator evaluate --pr <url|owner/repo#n> --json-output <file> --markdown-output <file> [--tool-revision <sha>] [--cache-dir <path>]
```

This foundation stage intentionally implements neither command. Every invocation prints usage and
returns exit code `2`; later reviewed stages add evidence acquisition and tool execution.
