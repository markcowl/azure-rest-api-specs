/*
  Rendering + artifact-lookup for the single, consolidated "TypeSpec Breaking
  Change Analysis" pull request comment.

  Historically, the "TypeSpec Breaking Change - Analyze Code" (Phase B,
  cross-version) and "TypeSpec Unversioned Change - Analyze Code" (Phase A,
  same-version) workflows each posted their own separate sticky comment. This
  was "correct" by design (each phase has its own independent approval label
  and required check, still true today -- see typespec-breaking-change-status.yaml
  and typespec-versioning-change-status.yaml, both unchanged), but it cluttered
  PRs with two separate bot comments that read as redundant "breaking change"
  notices to a PR author.

  This module merges both phases' already-rendered markdown (produced by the
  typespec-breaking-change CLI and uploaded as artifacts by the two Analyze
  Code workflows) into ONE comment, posted/updated via the shared
  commentOrUpdate() sticky-comment helper (atomic update-or-create, single
  well-known HTML anchor identifier) -- consumed by post-combined-comment.js,
  which is triggered by workflow_run:completed of EITHER analyze workflow.
*/

import { PER_PAGE_MAX } from "../../../shared/src/github.js";
import { byDate, invert } from "../../../shared/src/sort.js";
import { downloadArtifactText } from "../typespec-suppressions/suppressions-comment.js";

/**
 * @typedef {import("../github.js").WorkflowRuns[0]} WorkflowRunInfo
 */

export const TYPESPEC_BREAKING_CHANGE_WORKFLOW_NAME = "TypeSpec Breaking Change - Analyze Code";
export const TYPESPEC_VERSIONING_CHANGE_WORKFLOW_NAME =
  "TypeSpec Unversioned Change - Analyze Code";

export const BREAKING_CHANGE_COMMENT_ARTIFACT_NAME = "typespec-breaking-change-comment-md";
export const VERSIONING_CHANGE_COMMENT_ARTIFACT_NAME = "typespec-versioning-change-comment-md";

export const COMBINED_COMMENT_IDENTIFIER = "TypeSpecBreakingAndVersioningChangeAnalysis";

/**
 * Finds the most recently updated run of `workflowName` (or its
 * `[TEST-IGNORE]`-prefixed variant, matching the convention used elsewhere in
 * this repo for dry-run testing) for the given `head_sha`.
 *
 * @param {import('@actions/github-script').AsyncFunctionArguments['github']} github
 * @param {typeof import("@actions/core")} core
 * @param {string} owner
 * @param {string} repo
 * @param {string} head_sha
 * @param {string} workflowName
 * @returns {Promise<WorkflowRunInfo | undefined>}
 */
export async function getLatestWorkflowRunByName(
  github,
  core,
  owner,
  repo,
  head_sha,
  workflowName,
) {
  const workflowRuns = await github.paginate(github.rest.actions.listWorkflowRunsForRepo, {
    owner,
    repo,
    event: "pull_request",
    head_sha,
    per_page: PER_PAGE_MAX,
  });

  const targetRuns = workflowRuns
    .filter(
      (workflowRun) =>
        workflowRun.name === workflowName || workflowRun.name === `[TEST-IGNORE] ${workflowName}`,
    )
    .sort(invert(byDate((workflowRun) => workflowRun.updated_at)));

  const run = targetRuns[0];
  if (run) {
    core.info(`Using '${workflowName}' workflow run ${run.id}.`);
  } else {
    core.info(`No '${workflowName}' workflow run found for head_sha '${head_sha}'.`);
  }
  return run;
}

/**
 * Finds the latest completed run of `workflowName` for `head_sha` and
 * downloads its `artifactName` artifact as text.
 *
 * Returns `undefined` (never throws) when the run doesn't exist yet, hasn't
 * completed, or the artifact is missing -- all of which are expected,
 * non-error states here: this is called from a workflow triggered by EITHER
 * of the two analyze workflows completing, so the OTHER phase's run may not
 * exist yet (or may have been skipped, e.g. because it isn't configured for
 * this repo) at the time this runs.
 *
 * @param {import('@actions/github-script').AsyncFunctionArguments['github']} github
 * @param {typeof import("@actions/core")} core
 * @param {string} owner
 * @param {string} repo
 * @param {string} head_sha
 * @param {string} workflowName
 * @param {string} artifactName
 * @returns {Promise<string | undefined>}
 */
export async function downloadLatestCommentMarkdown(
  github,
  core,
  owner,
  repo,
  head_sha,
  workflowName,
  artifactName,
) {
  const run = await getLatestWorkflowRunByName(github, core, owner, repo, head_sha, workflowName);
  if (!run || run.status !== "completed") {
    return undefined;
  }

  try {
    return await downloadArtifactText(github, core, owner, repo, run.id, artifactName);
  } catch (error) {
    // Missing artifact (e.g. the analyze job failed before uploading it, or
    // this phase found zero impacted folders and intentionally skipped the
    // upload step) -- treat as "nothing to show for this phase", not a
    // fatal error for the overall combined comment.
    core.info(
      `No '${artifactName}' artifact for '${workflowName}' run ${run.id}: ` +
        `${error instanceof Error ? error.message : String(error)}`,
    );
    return undefined;
  }
}

/**
 * Merges the two phases' already-rendered markdown into a single comment
 * body. Each input is the exact markdown produced by the CLI for that phase
 * (already containing its own "## ..." header), so this only needs to join
 * them with a visual divider -- no re-rendering of content.
 *
 * Returns `undefined` when neither phase has any content, in which case no
 * comment should be posted (or an existing one should be left alone / removed
 * by the caller).
 *
 * @param {Object} sections
 * @param {string} [sections.breakingChangeMarkdown] - Phase B (cross-version) markdown, if available.
 * @param {string} [sections.versioningChangeMarkdown] - Phase A (same-version) markdown, if available.
 * @returns {string | undefined}
 */
export function renderCombinedComment({ breakingChangeMarkdown, versioningChangeMarkdown }) {
  const sections = [breakingChangeMarkdown, versioningChangeMarkdown]
    .map((section) => section?.trim())
    .filter(/** @returns {section is string} */ (section) => !!section);

  if (sections.length === 0) {
    return undefined;
  }

  return sections.join("\n\n---\n\n");
}
