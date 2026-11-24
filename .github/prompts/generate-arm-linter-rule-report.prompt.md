---
mode: agent
---

Generate and publish a reproducible repository-wide report for one Azure Resource Manager TypeSpec
linter rule. Use the custom `typespec-arm-resource-data` emitter/report tool to correlate rule
diagnostics with resolved ARM resources, operations, identities, and immutable source links when
the rule's semantics make that correlation meaningful.

The output must be comparable in rigor and navigability to
[`Report_20261106`][reference-report]. This is an assessment workflow, not authorization to fix
service specifications.

## Required parameters

Fill these values before doing work. Values in angle brackets are placeholders. Defaults may be
accepted unless the user overrides them.

| Parameter | Value or default |
| --- | --- |
| `SOURCE_REPOSITORY` | `Azure/azure-rest-api-specs` |
| `SOURCE_REF` | latest fetched `upstream/main` |
| `PUBLICATION_REPOSITORY` | authenticated user's fork of `SOURCE_REPOSITORY` |
| `RULE_CODE` | `<fully-qualified diagnostic code>` |
| `RULE_SHORT_NAME` | final segment of `RULE_CODE` |
| `RULE_PACKAGE` | `<package that registers RULE_CODE>` |
| `RULE_DOC_URL` | `<canonical rule documentation URL>` |
| `RULE_SOURCE_REF` | `<released tag, package provenance, or exact source commit>` |
| `RULE_ENABLEMENT` | `explicit-rule-only` |
| `REPORT_DATE` | current UTC date as `yyyyMMdd` |
| `REPORT_ID` | `Report_<REPORT_DATE>_<RULE_SHORT_NAME>` |
| `REPORT_DIRECTORY` | `documentation/typespec-arm-resource-data/<REPORT_ID>` |
| `REPORT_BRANCH` | `users/<github-login>/arm-lint/report-<rule-slug>-<source-sha8>-<UTC-yyyyMMddTHHmmssZ>` |
| `CONCURRENCY` | `4` |
| `TIMEOUT_SECONDS` | `300` |
| `CREATE_PR` | `false` |

Reject a bare or ambiguous rule name. Confirm that `RULE_CODE` is registered by the installed
package and that the documentation describes the same rule implementation. If the installed
toolchain does not contain the rule, stop or obtain explicit approval for an isolated alternate
toolchain; never silently assess a different implementation.

## Pinned custom-tool provenance

Use the tracked custom tool when it exists in the selected source snapshot. Otherwise use this
reference implementation:

- Repository: `markcowl/azure-rest-api-specs`
- Commit: `59e16c42bb15e830d4c7cffc126a2ef2beae0b81`
- Path: `eng/tools/typespec-arm-resource-data/`
- Package: `@azure-tools/typespec-arm-resource-data-report@1.4.0`
- Reference output:
  `documentation/typespec-arm-resource-data/Report_20261106/`

Materialize only the tool subtree and integrate it with the current workspace surgically. Do not
replace current workspace manifests or lockfiles with historical versions. The reference report's
preview ARM package, compatibility patch, and Azure/typespec-azure#5976 provenance are examples of
immutable provenance handling, not defaults for a different rule.

Record the exact custom-tool source commit, local modifications, package version, and validation
results in the generated report.

## Establish rule semantics before designing the report

Read the installed rule implementation, tests, registration, ruleset enablement, documentation,
and changelog. Write a short rule contract covering:

- diagnostic code, severity, message variants, and diagnostic target types;
- whether the rule runs on the declaration graph or projected versions;
- whether comparison is case-sensitive;
- the unit of violation and expected diagnostics per logical group;
- excluded internal, synthetic, template, library, or non-ARM declarations;
- suppression policy and whether suppression is technically possible;
- whether one diagnostic can represent several resources or operations;
- data needed to deduplicate diagnostics without merging distinct findings.

Create at least one positive and one negative fixture from the rule contract. Do not begin the
repository-wide run until the selected toolchain reproduces both fixtures.

Do not use source text search as the violation detector. Text search may help explain findings only
after diagnostics are captured.

## Decide the correlation mode

Set one mode and record it in `manifest.json`.

### `resource`

Use when diagnostics concern resolved ARM resources, resource names, resource types, resource
paths, scopes, parents, or lifecycle operations. Correlate to `resources.csv` first and
`operations.csv` second.

### `operation`

Use when diagnostics concern HTTP operations, lifecycle classification, verbs, routes, LRO
metadata, list/action semantics, or operation naming. Correlate to `operations.csv`, then attach the
owning resource when `resourceKey` is present.

### `hybrid`

Use when the rule spans resources and operations or when a diagnostic target alone is insufficient.
Retain both correlations and explain precedence.

### `none`

Use when the rule concerns models, properties, enums, documentation, formatting, security
definitions, or another concept the custom emitter does not model. Still use the custom tool for
project discovery, compilation isolation, coverage, provenance, source links, checkpointing, and
failure accounting, but do not invent a resource/operation relationship. Record why correlation is
not applicable.

For all modes, retain diagnostics that cannot be matched. Use correlation states `matched`,
`partial`, `unmatched`, and `not-applicable`.

## Prerequisites and safe branch setup

1. Confirm Git, `gh`, mise, Node.js, and pnpm are available.
2. Use mise to provision and run the Node and pnpm versions declared by the source snapshot. Do not
   commit local mise configuration solely for this report.
3. Verify `upstream` is `SOURCE_REPOSITORY`; verify the push remote is the authenticated user's fork
   and has the expected parent.
4. Fetch the source ref, publication remote, and pinned custom-tool commit.
5. Resolve `SOURCE_REF` to one immutable `SOURCE_SHA`.
6. Create an independent worktree or clone at `SOURCE_SHA`. Never mutate a shared dirty checkout.
7. Generate a unique `REPORT_BRANCH`; confirm it is absent locally and remotely.
8. Record protected/default branch heads before any push.

Before every mutating command, verify the absolute repository root and current branch. Never use
`reset --hard`, broad `clean`, or destructive checkout commands to recover from unrelated changes.

## Discovery and coverage

Reuse the custom tool's Git-backed project discovery:

- tracked `specification/**/tspconfig.yaml` roots;
- only roots beneath `specification/<service>/resource-manager/`;
- `main-bearing` projects compiled from tracked `main.tsp`;
- legacy `client-only` projects recorded as skipped;
- dynamic discovery on every run, with no static project inventory.

Reconcile that inventory with any repository validation manifest or workflow input relevant to the
selected rule. Record every difference.

Every discovered project must be represented exactly once in the aggregate manifest as:

- succeeded with findings;
- succeeded clean;
- zero-resource;
- failed compilation;
- timed out;
- skipped client-only;
- blocked by unavailable rule/toolchain.

Failures, timeouts, skipped projects, and unavailable rules are coverage limitations, not clean
results.

## Dependency and provenance requirements

Record:

- source repository, SHA, and commit timestamp;
- source `pnpm-lock.yaml` SHA-256;
- report-branch lockfile SHA-256 if workspace integration changes it;
- declared package manager and Node requirement;
- actual Node and pnpm versions;
- TypeSpec compiler version;
- `RULE_PACKAGE` version, resolved integrity, and package source;
- ARM library and ARM ruleset versions;
- custom-tool commit, package version, and source-tree hash;
- target rule source/tag/commit and canonical documentation URL;
- report ID, branch, generation timestamp, timeout, concurrency, and correlation mode.

Restore dependencies with the frozen lockfile. Do not upgrade dependencies just to make the report
pass. If an alternate toolchain is explicitly approved, keep it isolated and record both the source
toolchain and analysis toolchain, including why they differ.

## Adapt the custom tool

Preserve the reference tool's existing behavior:

- deterministic Git discovery and filtering;
- compiler-option resolution;
- emitters disabled during analysis;
- one isolated worker per project;
- per-project timeout;
- source-SHA links;
- resource and operation CSVs;
- per-project status and errors;
- atomic output replacement;
- checkpoint manifest;
- output hashes;
- provenance-aware `--resume`;
- compatible targeted rerun merging;
- deterministic aggregate README and manifest.

Add a generic rule-report configuration rather than hard-coding the selected rule. It must accept
at least:

- `RULE_CODE`;
- `RULE_SHORT_NAME`;
- `RULE_DOC_URL`;
- `REPORT_ID`;
- correlation mode;
- rule-specific message parser or structured extractor identifier;
- optional service/project filters;
- source ref, timeout, concurrency, and resume settings.

Capture target-rule diagnostics in deterministic `diagnostics.json` files. Each record must
include:

- full code, severity, message, and message variant when known;
- project, entrypoint, service, source file, one-based line/column, and source URL;
- diagnostic target kind;
- stable diagnostic identity fields selected from the rule contract;
- correlation state;
- correlated resource and operation records;
- unmatched/partial reason.

Rule-specific extraction must be explicit, tested, and fail closed. If a message cannot be parsed,
retain the original diagnostic and mark the structured fields unavailable; never drop the
diagnostic.

Enable only the target rule for assessment while retaining compiler/library errors. Do not modify
project `tspconfig.yaml` files or the central ruleset. If the compiler API cannot isolate the rule,
document the exact enablement method and filter diagnostics by full code without hiding compile
errors.

## Correlation requirements

### Resource correlation

Match using rule semantics, not fuzzy names. Candidate keys may include exact logical
`resourceName`, normalized or exact instance path, ARM resource type, resource source location, or
the diagnostic's authored lifecycle operation. Preserve all candidates when the diagnostic is
ambiguous.

Attach:

- `resourceKey`, logical name, ARM type, instance path, Bicep-resource classification;
- resource-definition link;
- authored read and create/update links;
- all associated operation records grouped by kind.

### Operation correlation

Prefer the custom tool's deterministic operation key (`verb` plus normalized path), then exact
source location or operation name where the rule requires it. Attach:

- operation key, name, verb, path, kind, and source link;
- owning resource key, name, type, and instance path when available.

### No applicable correlation

Retain the diagnostic's own immutable source location and structured rule fields. Do not populate
resource or operation columns with guesses. Explain in the report why the emitter is used only for
discovery and coverage for this rule.

### Deduplication

Define a stable finding key from the rule contract. It must always include project root and
diagnostic code, plus the minimum semantic identity needed to distinguish findings. Never
deduplicate solely by message text or line number. Keep diagnostics and deduplicated findings as
separate counts.

## Generation workflow

1. Validate positive/negative fixtures.
2. Run the adapted tool's formatter, build/type check, lint, and tests.
3. Generate a small representative service and inspect all output manually.
4. Run all discovered projects with `--source-ref <SOURCE_SHA>`,
   `--report-directory <REPORT_ID>`, configured timeout/concurrency, and no resume.
5. Preserve the checkpoint manifest if the command exits nonzero because projects failed.
6. Rerun isolated failures with `--project` or `--service`.
7. Resume only when source SHA, source inputs, lock hash, tool version, rule provenance, report
   configuration, and output hashes match.
8. Generate the aggregate README, manifest, and optional findings CSV/JSON from project records.
9. Run all validation gates before committing.

Never merge outputs generated from different source SHAs, dependency locks, rule versions, tool
versions, rule configuration, or report IDs.

## Required aggregate schema

Write aggregate output beneath `REPORT_DIRECTORY` and per-project output beneath
`<project-root>/<REPORT_ID>/`.

### `manifest.json`

Use a versioned schema with:

- all provenance fields;
- rule contract summary and correlation mode;
- project records and output hashes;
- coverage-category totals;
- diagnostic count and deduplicated finding count;
- affected projects and semantic groups defined by the rule;
- matched, partial, unmatched, and not-applicable correlation counts;
- suppression inventory when relevant;
- deterministic finding IDs and source links.

### `README.md`

Use these sections:

1. `# <RULE_SHORT_NAME> report`
2. `## Source, rule, and tool metadata`
3. `## Rule contract`
4. `## Executive summary`
5. `## Coverage`
6. `## Findings by project`
7. `## Partial, unmatched, or non-applicable correlations`
8. `## Suppressions` when relevant
9. `## Failed and timed-out projects`
10. `## Zero-resource projects`
11. `## Skipped client-only projects`
12. `## Project directory`
13. `## Reproduction`
14. `## Limitations`

Each finding must include:

- stable finding ID;
- project and diagnostic source link;
- exact diagnostic message and structured rule fields;
- all applicable correlated resources and operations;
- correlation state and caveats.

Do not include remediation claims unless the user separately requested fixes and those fixes were
actually prototyped and validated. An assessment report should not speculate.

### Per-project files

Successful projects:

- `resources.csv`;
- `operations.csv`;
- `diagnostics.json`;
- `status.json`.

Failed projects:

- `status.json`;
- `errors.md`.

When correlation mode is `none`, retain empty resource/operation outputs if the custom tool's schema
requires them, but state that they are not evidence for the selected rule.

## Validation gates

Require all applicable checks:

1. Tool format, build/type check, lint, and tests pass.
2. Positive and negative rule fixtures pass.
3. Parser/extractor failure tests retain diagnostics as unmatched.
4. Correlation tests cover matched, partial, unmatched, and not-applicable states as relevant.
5. Full project inventory reconciles with the aggregate manifest.
6. Summary arithmetic is derived from project records and independently checked.
7. Project roots and stable finding IDs are unique where required.
8. Every generated relative link resolves.
9. Every GitHub source link uses `SOURCE_SHA`.
10. Every recorded output hash matches.
11. A same-input rerun is substantively deterministic.
12. `git diff --check` passes.
13. The branch contains no service TypeSpec, Swagger, or SDK changes.

If any project is failed, timed out, skipped, or blocked, label repository-wide coverage incomplete
and quantify each category.

## Failure handling

- Continue after project failures and preserve errors.
- Retry a timeout once with a larger timeout and unchanged provenance.
- Fix report-tool defects with focused tests before rerunning.
- Keep unparseable diagnostics as unmatched.
- Keep ambiguous correlations as partial with all candidates.
- Stop and restart from a new SHA if source changes during generation.
- Never transform failure into zero findings.
- Never use a report from another rule, package version, or source SHA as current evidence.

## Commit and publication expectations

1. Review the branch diff and verify only directly required tool integration and report artifacts
   are present.
2. Separate reusable tool changes from generated output commits.
3. Include this trailer in every commit:

   ```text
   Co-authored-by: Copilot App <223556219+Copilot@users.noreply.github.com>
   ```

4. Push with an explicit full refspec only to `PUBLICATION_REPOSITORY`.
5. Do not create a PR unless `CREATE_PR=true` was explicitly selected.
6. Verify the remote branch SHA and verify protected/upstream branch heads are unchanged.
7. Return:
   - source repository and SHA;
   - rule code and package provenance;
   - report branch and commits;
   - aggregate README and manifest URLs;
   - report totals and coverage limitations;
   - exact validation commands with pass/fail results;
   - tool changes and correlation mode;
   - any unmatched diagnostics or unresolved provenance gaps.

[reference-report]: https://github.com/markcowl/azure-rest-api-specs/blob/arm-resource-data-all-specs/documentation/typespec-arm-resource-data/Report_20261106/README.md
