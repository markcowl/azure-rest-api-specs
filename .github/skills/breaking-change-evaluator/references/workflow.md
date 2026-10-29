# Breaking-change comparison workflow

## 1. Establish provenance

1. Verify the report worktree is clean and synchronized with the requested fork branch.
2. Record the evaluator commit.
3. Resolve the analyzer branch to an exact full SHA once.
4. Freeze the report upper bound and retrieval timestamp before discovery.
5. Use the previous full dataset generation time as the lower bound unless the user supplies another
   explicit boundary.

## 2. Prepare the analyzer

From `eng/tools/breaking-change-evaluator`, run:

```powershell
node cmd/breaking-change-evaluator.js prepare `
  --typespec-revision <full-sha> `
  --cache-dir <cache>
```

Record the returned source SHA and artifact digest. Verify the executable with controlled zero and
finding-producing fixtures before a dataset run.

## 3. Create an immutable merged-PR selection

Create a new, previously nonexistent reports directory:

```powershell
node scripts/create-merged-selection.mjs `
  --output reports/<run-id> `
  --lower-bound <exclusive-iso> `
  --upper-bound <inclusive-iso> `
  --retrieved-at <iso> `
  --run-id <run-id> `
  --dataset-id <dataset-id> `
  --generated-at <iso> `
  --analyzer-sha <full-sha> `
  --artifact-digest <digest> `
  --evaluator-commit <full-sha> `
  --analyzer-parent-sha <full-sha> `
  --cache-format-version <number> `
  --pnpm-version <version> `
  --title "<title>" `
  --readiness-details "<verified readiness evidence>"
```

The script must report a complete query, `cap: null`, `remainingCount: 0`, and
`continuationCursor: null`. Review source and exclusion counts before continuing.

## 4. Snapshot and execute

```powershell
node scripts/snapshot-qualification.mjs `
  --selection reports/<run-id>/selection.json `
  --output <cache>/qualification/<run-id>

node scripts/run-dataset.mjs `
  --selection reports/<run-id>/selection.json `
  --output reports/<run-id> `
  --cache-dir <cache> `
  --qualification-snapshots <cache>/qualification/<run-id> `
  --concurrency 3 `
  --resume
```

Keep the generated analyzer JSON/Markdown evidence. Resume interrupted runs; do not delete completed
records. If code or provenance changes, create a new run ID instead of mutating a published run.

## 5. Build and analyze

```powershell
node scripts/build-run.mjs --run reports/<run-id>
node scripts/build-catalog.mjs reports
node cmd/breaking-change-evaluator.js validate-runs --reports-root reports
```

Analyze:

- complete, not-qualified, partial, and failed counts;
- Phase A and Phase B OAD/TypeSpec totals;
- exact, probable, missed-equivalent, intentional-gap, TypeSpec-only, and ambiguous findings;
- severity disagreements and recurring rule/kind pairs;
- qualification evidence gaps and compile/runtime failures;
- detector timing only when the detector emitted timing provenance;
- comparisons with historical datasets only when schema and completeness permit.

Write conclusions into the new run summary or a linked analysis artifact without changing detector
evidence.

## 6. Validate and publish checkpoints

Run package format/check, relevant skill evals, aggregate `eng/tools` build, `validate-runs`, a second
catalog rebuild plus validation, and `git diff --check`. Remove coverage, caches, temporary worktrees,
credentials, and machine-local paths.

Commit coherent validated stages. Push each checkpoint to the user's fork branch and verify the remote
SHA. Before publishing changes in more than one repository, create rollback tags for the affected
branches.
