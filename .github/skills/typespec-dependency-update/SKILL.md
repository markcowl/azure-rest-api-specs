---
name: typespec-dependency-update
description: Update Azure REST API specs to published stable TypeSpec and typespec-azure dependencies using pnpm, suppress new lint warnings without changing API contracts, assess generated OpenAPI against typespec-next, and publish a draft upgrade PR from the user's fork.
---

# TypeSpec dependency update

Use for a coordinated stable TypeSpec release upgrade in `Azure/azure-rest-api-specs`.
Do not use for individual API feature changes, prerelease testing, or SDK releases.

## Deliverables

- A draft PR from a dedicated branch in the user's fork to upstream `main`.
- Updated dependency declarations and the pnpm lockfile.
- Narrowly justified suppressions for newly introduced lint warnings.
- Regenerated, reviewed OpenAPI and a report linked to the published branch.
- An explicit accounting of passing, failing, suppressed, and untested projects.

## 1. Establish a clean, reproducible baseline

1. Read repository instructions and relevant TypeSpec authoring skills. Preserve
   unrelated user changes. Inspect remotes rather than assuming `origin` is upstream.
2. Fetch upstream `main` and `typespec-next`; record both commit SHAs. Create the
   upgrade branch from upstream `main`, not a potentially stale or customized fork
   default branch. Do not copy unrelated tooling changes into the upgrade.
3. Use the `packageManager` version of pnpm and a supported Node version. If runtime
   provisioning is needed, follow the user's tooling preferences. Do not use npm or
   migrate package managers.
4. Install the existing lockfile with `pnpm install --frozen-lockfile`. Discover
   projects using the repository's project-discovery helper, including client-only
   projects. Capture a baseline using
   `node eng/tools/typespec-validation/cmd/tsv.js --all --check`.
5. Retain per-project diagnostics, existing whole-project suppressions, and generated
   output differences outside the repository. Baseline failures are not upgrade
   regressions; never disguise a skipped project as a pass.

For long runs, use the existing `--shard=<index>/<count>` option with an isolated
checkout per shard. Never run multiple mutating validators against one checkout.

## 2. Resolve and update published stable packages

1. Inventory the TypeSpec and typespec-azure release packages actually declared in
   manifests, pnpm catalogs, aliases, and overrides. Include supporting packages such
   as examples, metadata, Liftr, and the asset emitter when they have stable releases.
   Do not upgrade unrelated tools just because they have newer versions.
2. Query the registry for each package's release tags and concrete versions, for
   example `pnpm view @typespec/compiler dist-tags --json`. A dependency's stable
   release must have no SemVer prerelease component; never pin `next`, `dev`,
   `alpha`, `beta`, or `rc`. If `latest` is a prerelease, inspect the published
   versions and select the greatest compatible stable version.
3. Keep the compiler, HTTP/OpenAPI libraries, versioning libraries, and Azure
   libraries on a compatible release train. Preserve workspace package references.
   Resolve aliased packages by their underlying registry name; do not replace the
   local ruleset wrapper with the published ruleset.
4. Update central catalogs and relevant overrides with exact published versions.
   Regenerate with `pnpm install`; do not hand-edit `pnpm-lock.yaml`.
5. Inspect the lockfile diff for unrelated updates, new prerelease duplicates, peer
   mismatches, and supply-chain policy failures. Preserve release-age safeguards.
   Verify reproducibility with `pnpm install --frozen-lockfile`.

API version stability is separate: an API version without a `-preview` suffix is
stable and its released wire contract must be preserved.

## 3. Suppress only new lint diagnostics

1. Compare upgrade diagnostics with the baseline by project, rule, and target.
   Inspect corresponding `typespec-next` suppressions as precedent, not as proof
   that a warning occurs with this stable release.
2. Invoke the repository's TypeSpec authoring workflow before `.tsp` edits. For
   suppressions, use the official
   [directive guidance](https://typespec.io/docs/language-basics/directives/).
3. Place `#suppress "<fully-qualified-rule>" "<specific justification>"` on the
   smallest declaration that owns the diagnostic. Explain the existing compatibility
   constraint, rather than writing "ignore" or "fix later".
4. Never disable a linter globally, turn off warnings-as-errors, or add whole-project
   exclusions to hide regressions. Compiler errors are not suppressible: investigate
   and fix a compatibility issue, or report a concrete blocker.
5. Preserve response bodies, numeric precision, requiredness, API versions, and SDK
   customizations unless an intentional contract change is explicitly authorized.
6. Run `pnpm exec tsp format <each-edited-tsp-file>` after source edits, then
   recompile the affected projects with warnings treated as errors.

## 4. Regenerate and assess OpenAPI

1. Compile every non-excluded project using its checked-in `tspconfig.yaml`, including
   every configured emitter and API version. Use the repository's validation and
   generation commands; do not substitute a single representative service.
2. Retain only outputs generated by this run that belong in source control. Include
   matching JSON and YAML variants where tracked. Re-run check-only validation after
   generation so stale output cannot be mistaken for success.
3. Compare output structurally, not just by textual diff size. Classify changes:
   - Documentation, ordering, and equivalent reference deduplication: generally
     wire-neutral, but schema renames can affect generated SDK public names.
   - Paths, methods, status codes, requiredness, constraints, discriminators, enum
     values, nullability, request/response bodies, or serialization: potentially
     significant and require individual review.
4. For removed schemas, resolve all updated references and prove equivalence of the
   replacement schema. Check for dangling local references. Do not call a schema
   deletion harmless simply because `typespec-next` contains it.
5. Account for branch divergence: compare `main -> upgrade` with
   `merge-base(main, typespec-next) -> typespec-next`, using semantic change sets,
   not whole-file equality. Preserve main-only API changes; never overwrite a spec
   or generated file with its `typespec-next` copy merely to make outputs match.
   Reproduce every proposed suppression on the main-based upgrade: main-only specs
   can require additional suppressions, and next-only warnings may not apply.
   Distinguish exact matches, similar changes, and stable-only changes. The `next`
   channel is not a stable target or an approval of a contract change.
6. Run repository OpenAPI validation and breaking-change checks applicable to the
   changed files. Record exact commands, results, existing failures, and unavailable
   checks. Keep unresolved significant changes visible in the draft PR.

## 5. Publish evidence and the draft PR

1. Write a report with a version table, pinned comparison SHAs, validation counts,
   suppression inventory, OpenAPI significance analysis, and remaining limitations.
   Use branch or commit links to the actual changed declarations and generated
   schemas; link to pinned `typespec-next` files for the comparison evidence.
2. Confirm the branch contains only the release upgrade and its report. Commit with
   repository-required trailers and push to the user's fork without force-pushing.
3. Create the draft PR against upstream `main`, explicitly selecting the fork head.
   Verify the live PR's base repository, base branch, head owner, head branch, draft
   state, and changed-file list. Check CI results when available; local success does
   not imply CI approval.
4. Link the report from the PR body. Report the PR URL and any genuine blockers
   concisely. Never claim all specs passed if some failed, were excluded, or were not
   run.

If asked to propose or change this skill as part of an upgrade, place that proposal
on a separate fork branch so workflow changes do not enlarge the dependency PR.
