---
mode: agent
---

Assess every TypeSpec project for
`@azure-tools/typespec-azure-resource-manager/no-resource-duplicates`, write a Markdown report,
and then create one draft fix PR per affected project. Preserve the HTTP API, emitted Swagger,
and generated SDK surface. Do not replace assessment with a text search for legacy templates.

## Inputs and boundaries

Use the repository, fork, and baseline supplied by the user. If absent, establish them before
making changes. Common targets are `Azure/azure-rest-api-specs` / `main` and
`Azure/azure-rest-api-specs-pr` / `RPSaaSMaster`; the private repository's default branch is not
necessarily the requested branch.

- Record upstream repository, exact baseline SHA, fork, report branch, and report path.
- Verify the fork belongs to the user and has the expected upstream parent. For a private
  upstream, verify the fork is private. Keep private source, logs, reports, and PRs private;
  never publish them to the public repository, public gists, or external services.
- Default to assessment followed by draft fix PRs. If the user asks for assessment only, stop
  after publishing the report. An analysis report is not permission to fix unrelated issues.
- Keep report/prompt changes on an artifact branch; base each fix branch on the pinned upstream
  baseline, not on the artifact branch or another project's fix branch.
- An earlier [assessment](../../documentation/no-resource-duplicates-assessment.md) may provide
  examples, but it is not evidence that the current target has the same findings.

## 1. Establish isolation before any repository mutation

The coordinator owns discovery, dependency setup, Git configuration, and branch creation.
Do not delegate shared-checkout setup to workers.

1. Assign an absolute checkout path and branch to each owner. Prefer independent clones.
   Never assume a command starts in the intended checkout.
2. Before every mutating command, use `Set-Location <absolute-path> -ErrorAction Stop` or
   `git -C <absolute-path> ...`, and verify `git rev-parse --show-toplevel` and the current branch.
   Stop if either differs from the assignment. Check native command exit codes.
3. Inventory pre-existing changes and preserve them. Never use `reset --hard`, `checkout --`,
   `clean`, or broad recursive deletion. Do not switch another worker's branch.
4. Do not run sparse-checkout/configuration commands in a shared checkout. If sparsity is needed,
   configure it only in a newly created independent clone after verifying its Git common
   directory is its own `.git`, not another worktree's shared configuration.
5. Workers may only edit their assigned project in their assigned checkout. They must not
   install dependencies, alter shared links, or change global/shared Git settings.
6. Use rollback tags before deploying changes across multiple branches. Never force-push
   without authorization; if authorized, verify the GitHub PR diff afterward.

## 2. Discover and evaluate the complete source graph

Read the [rule documentation](https://azure.github.io/typespec-azure/docs/libraries/azure-resource-manager/rules/no-resource-duplicates/).
Record the installed compiler and ARM-library versions, runtime, package manager, and lockfile.
Use a released ARM library that contains the rule, not an unreleased local implementation.
Restore dependencies with the repository's frozen-lockfile command only when dependencies are
missing. Do not update checked-in dependencies to perform an assessment. If the target's pinned
toolchain lacks the rule, use an explicitly identified isolated compatible toolchain and report
the difference; retain compilation failures as coverage limits.

1. Enumerate tracked `specification/**/main.tsp`, all `tspconfig.*` files, and client-only
   configuration entrypoints. Do not require an "ARM emitter": ARM services commonly use the
   AutoRest emitter, and configurations can inherit settings.
2. Independently parse all tracked TypeSpec files for `@service` and `@armProviderNamespace`
   declarations. Reconcile those declarations with each successful compilation's source graph.
   Classify libraries, imported fragments, dormant files, duplicate entrypoints, and unsupported
   configurations explicitly. Never silently omit a directory or a failed compilation.
3. Resolve each candidate's compiler configuration, disable emission and unrelated lint rules,
   and evaluate the released rule on its unversioned graph. Preserve compiler/library validation.
   One CLI approach, when supported by the installed compiler, is:

   ```powershell
   npx --no-install tsp compile <absolute-entrypoint> --no-emit `
     --linter-rule "@azure-tools/typespec-azure-resource-manager/no-resource-duplicates=true"
   ```

   This enables the rule alongside configured rules. For a rule-only run, use an external
   temporary config with no inherited lint rules, or the compiler API with the resolved project
   configuration and an explicit rule-only ruleset. Do not modify the central repository ruleset.
4. Inspect source suppressions too. If using the published rule listener directly to observe
   suppressed diagnostics, preserve its project-source filter, pass diagnostics through normal
   compiler reporting to identify suppressions, and cross-check representative results with
   ordinary explicit linter enablement.
5. Save a coverage ledger: entrypoint, service declarations, compiler errors, rule diagnostics,
   suppression status, and compiled source paths. An unsuccessful compilation is **blocked**,
   never **clean**; partial findings from it must be marked incomplete.
6. Deduplicate by diagnostic source location, colliding logical names, ARM type, and full
   instance path. Retain the rule's case-insensitive semantics and parameter names. Do not merge
   different scopes, extension targets, singleton names, or parent paths.

The rule uses the multi-version declaration graph. A collision between version-transition
models does not itself prove a collision within an emitted API version. A finding found only by
injecting an otherwise unimported file is supplemental, not a baseline violation.

## 3. Write the assessment before fixing

Publish a Markdown report on the artifact branch of the user's fork. Include:

- The pinned upstream SHA and source links; toolchain and exact reproducible commands.
- Candidate counts, distinct successful services, failures/exclusions, suppressed findings, and
  the coverage reconciliation. Do not claim complete coverage while candidates are unexplained.
- Stable finding IDs grouped by project. For every violation: short explanation, diagnostic
  file/line link, both logical names, ARM resource type, instance path, and associated operations.
- A suggested fix and a short code snippet, or **Suggested fix unknown** with the missing evidence.
  Distinguish source-reviewed suggestions from prototyped fixes and CI-verified fixes.
- For a name override, explain why a simpler template cannot preserve the contract. Include a
  simpler alternative if it works. Keep dormant/conditional findings in a separate section.

Do not renumber or silently expand the inventory while working on fixes. Report newly discovered
findings separately, with the reason they were outside the original baseline.

## 4. Choose the least complex contract-preserving fix

Invoke `azure-typespec-author` before editing any `.tsp` file, including isolated prototypes.
Read the installed template signatures rather than guessing operation names or argument order.

1. **Prefer standard operation templates at the standard resource path.** Use their existing
   `BaseParameters`, `Parameters`, `Response`, and `Error` options where these preserve the
   contract. Remove a redundant legacy interface and its augments only after checking all uses.
2. **Prefer Legacy operation templates over Legacy interface templates** for optional/custom
   PUT or PATCH bodies, custom errors/responses, and equivalent standard paths. Examples include
   `Legacy.CreateOrReplaceSync/Async`, `Legacy.CustomPatchSync/Async`, and `Legacy.Extension.*`.
   Preserve body optionality and all existing headers, decorators, versioning, and final-state
   behavior. Interface argument names such as `ErrorType` may differ from operation `Error`.
3. **Use a logical-name override when simpler templates cannot preserve the contract.**
   Set the supported `ResourceName` or `OverrideResourceName` argument to the exact name emitted
   by the standard operations, not automatically the model name. Keep interface routing only
   when it is needed or is simpler than recreating an unsupported operation.

   Known reasons to prefer an override:
   - Private endpoint PUTs with a distinct request model: the current `PrivateEndpoints` templates
     have no `Request` argument. Their `Parameters` argument cannot replace their existing body.
     Instantiating them with the read resource does not preserve a different PUT request schema.
   - Single-page extension list operations when no matching Legacy extension operation exists.
   - Parent-key documentation, constraints, or SDK parameter locations that change under standard
     templates. Keys injected by `KeysOf`/`ParentKeysOf` may not be addressable through
     `Operation::parameters.key`; redeclaring them can cause duplicate-property errors.
     Test augments before proposing them. Changing the resource's key affects other operations.

4. **Treat version-split resources separately.** Where an unversionable legacy flattening decorator
   targets a template-injected `properties`, a reviewed solution can use an equivalent tracked
   resource base without `properties`, then declare versioned `properties` and
   removed/renamed `flattenedProperties` on one resource. Retarget the legacy decorator to the old
   property. Merge duplicate operations only after comparing their complete contracts.
   This requires per-version validation; do not apply it mechanically.
5. **Leave genuinely unknown fixes for a manual decision.** Do not suppress the rule, invent
   replacement templates, change API versions, or alter the service's HTTP contract.

Every newly created alias must have its own meaningful `/** ... */` documentation comment.
Keep unrelated existing warnings and suppression cleanups out of these PRs.

## 5. Validate every fix against the same baseline

1. Emit the pristine baseline and candidate using the same dependency tree, compiler options,
   examples, and API versions. Separate toolchain/output-path differences from source changes.
2. Run `npx --no-install tsp format <edited-files>` after the final `.tsp` edits.
3. Repeat the explicit rule check: zero findings for the project, no added suppression, and no
   compilation errors. Preserve suppression visibility in the evidence.
4. Run `npx --no-install tsp compile <project>` with the project's actual configuration.
5. Compare all emitted Swagger, examples, and relevant client metadata against the emitted
   baseline, not only against possibly stale checked-in output. Default acceptance is no diff.
   Do not call added/changed `pattern`, requiredness, defaults, parameter locations, body names,
   schemas, `$ref` targets, status codes, headers, paging, LRO options, paths, or operation IDs
   "documentation only." Description-only differences must also be eliminated unless explicitly
   accepted by the user. Never hide a difference by deleting generated output.
6. Run project TypeSpec/configuration validation (for example
   `npx --no-install tsv <project>`), and validation MCP when available. Ensure every `client.tsp`
   augment still resolves. Do not generate SDKs without a separate authorized SDK workflow.
7. Record exact commands and pass/fail results. A rule clearing is not proof of API preservation.

## 6. Open one draft PR per affected project

Search for existing open fix PRs first; update them rather than creating duplicates. For new
fix branches, use `fix-no-resource-duplicates-<service>` from the pinned upstream baseline.
Stage only the assigned project's changes. Commit with a precise service-specific message and:

```text
Co-authored-by: Copilot App <223556219+Copilot@users.noreply.github.com>
```

Push only to the user's fork. Create **draft** PRs against the selected upstream repository and
selected baseline branch, not an assumed default branch. Before writing the PR body, inspect
`.github/pull_request_template.md` and `.github/PULL_REQUEST_TEMPLATE/`; use the applicable
template, preserving headings, comments, checklists, and ordering. Do not overwrite another
session's PR edits.

Include finding IDs, paths and colliding names, the chosen fix, reasons for any override, the
report link, exact validation commands/results, and explicit Swagger/HTTP impact. Watch required
checks; investigate and fix failures before calling a PR verified. Distinguish pending checks,
draft-only merge requirements, approval requirements, and genuine validation failures.

Update the report with a PR table showing findings fixed, fix type, validation evidence, Swagger
impact, and CI status. List unknown or blocked findings separately. Finish with links to the
published report and every draft PR; verify the remote content and branch heads before claiming
completion.
