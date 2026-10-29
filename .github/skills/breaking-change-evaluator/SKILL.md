---
name: breaking-change-evaluator
license: MIT
metadata:
  version: "1.0.0"
  distribution: repository
description: 'Create, refresh, validate, and analyze longitudinal reports that compare Azure REST API Specs Swagger breaking-change workflow evidence with the TypeSpec-native breaking-change analyzer. WHEN: "run a breaking-change comparison report", "evaluate merged TypeSpec PRs", "refresh breaking-change evaluator data", "analyze breaking-change detector agreement", "validate breaking-change report runs". DO NOT USE FOR: reviewing one API design, modifying service TypeSpec, SDK generation, or running only the TypeSpec analyzer without Swagger comparison evidence. ALWAYS pin an exact analyzer SHA, freeze the PR interval, preserve immutable report directories, validate the catalog, and publish important updates to the requested fork branch.'
compatibility:
  requires: "GitHub authentication, Node.js, pnpm, git, Azure/azure-rest-api-specs checkout"
---

# Breaking-change evaluator

Use this skill to create or analyze durable comparison datasets under
`eng/tools/breaking-change-evaluator/reports`.

Follow the [complete workflow](references/workflow.md). The evaluator package and its scripts are
the implementation authority; do not recreate qualification, matching, aggregation, or report
validation in prompts or ad hoc shell pipelines.

## Required invariants

- Work from the user-selected report branch and keep historical run directories immutable.
- Use a half-open lower bound and a frozen inclusive upper bound for merged-PR discovery.
- Query every page and refuse an incomplete GitHub search or a hidden selection cap.
- Select TypeSpec service inputs under `specification/` (`*.tsp` and `tspconfig.yaml`).
- Pin the analyzer by full source SHA and artifact digest. Never follow a moving branch during a run.
- Persist `query-snapshot.json`, `selection.json`, `run-config.json`, per-PR dossiers, aggregate data,
  run manifest, and catalog entries.
- Retain nonqualified and partial results with their evidence. Never reinterpret them as no findings.
- Compare actionable errors only:
  - Phase A compares Same-Version Swagger messages whose post-policy severity is `Error` with
    unsuppressed TypeSpec `same-version` findings whose severity is `error`.
  - Phase B compares Cross-Version Swagger messages whose post-policy severity is `Error` with
    unsuppressed TypeSpec `cross-version` findings whose severity is `error`.
- Preserve Warning/Info OAD messages and ignored/suppressed TypeSpec findings only in raw detector
  artifacts. Never include them in matching, effectiveness totals, rates, or conclusions.
- Do not describe an all-differences report as an error-parity evaluation.
- Run `validate-runs` before committing or publishing.
- Commit and push validated checkpoints to the requested fork branch. Verify the remote SHA.

## Analyzer defects

Treat an analyzer change as conditional work. First reduce the failure to a reproducible analyzer
defect. If confirmed, branch from the exact source feature branch, add a focused regression, run the
relevant analyzer checks, push the fix to the user's fork, and open a PR against that feature branch.
Re-pin the dataset to the fixed commit and create a new run directory; never rewrite an existing run.
