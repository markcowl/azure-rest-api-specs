/*
  Entry point for the single, consolidated "TypeSpec Breaking Change Analysis"
  pull request comment, run from typespec-breaking-change-comment.yaml on:
    - workflow_run:completed of "TypeSpec Breaking Change - Analyze Code" (Phase B)
    - workflow_run:completed of "TypeSpec Unversioned Change - Analyze Code" (Phase A)

  Either analyze workflow completing triggers this: it downloads BOTH phases'
  latest rendered-markdown artifacts for the same head_sha (best-effort --
  whichever phase triggered this run is guaranteed to have just completed, but
  the OTHER phase's run for this head_sha may not exist yet, may still be
  running, or may have been skipped), merges them, and posts/updates ONE
  sticky comment. This replaces the two independent "Post PR comment" steps
  that used to live inside each analyze workflow, and the two separate
  comments they produced.

  Approval-label gating (BreakingChangeApproved / VersioningChangeApproved)
  and required statuses remain entirely independent and unchanged -- see
  typespec-breaking-change-status.yaml and typespec-versioning-change-status.yaml.
  This module only affects the informational comment, never merge-blocking status.
*/

import { PER_PAGE_MAX } from "../../../shared/src/github.js";
import { commentOrUpdate, parseExistingComments } from "../comment.js";
import { extractInputs } from "../context.js";
import {
  BREAKING_CHANGE_COMMENT_ARTIFACT_NAME,
  COMBINED_COMMENT_IDENTIFIER,
  downloadLatestCommentMarkdown,
  renderCombinedComment,
  TYPESPEC_BREAKING_CHANGE_WORKFLOW_NAME,
  TYPESPEC_VERSIONING_CHANGE_WORKFLOW_NAME,
  VERSIONING_CHANGE_COMMENT_ARTIFACT_NAME,
} from "./combined-comment.js";

/**
 * @param {import("@actions/github-script").AsyncFunctionArguments} args
 */
export default async function postCombinedBreakingChangeComment({ github, context, core }) {
  const { owner, repo, issue_number, head_sha } = await extractInputs(github, context, core);

  if (!issue_number || Number.isNaN(issue_number) || !head_sha) {
    core.info(
      `Could not resolve a PR / head_sha for this event (issue_number: '${issue_number}', ` +
        `head_sha: '${head_sha}'); nothing to do.`,
    );
    return;
  }

  const [breakingChangeMarkdown, versioningChangeMarkdown] = await Promise.all([
    downloadLatestCommentMarkdown(
      github,
      core,
      owner,
      repo,
      head_sha,
      TYPESPEC_BREAKING_CHANGE_WORKFLOW_NAME,
      BREAKING_CHANGE_COMMENT_ARTIFACT_NAME,
    ),
    downloadLatestCommentMarkdown(
      github,
      core,
      owner,
      repo,
      head_sha,
      TYPESPEC_VERSIONING_CHANGE_WORKFLOW_NAME,
      VERSIONING_CHANGE_COMMENT_ARTIFACT_NAME,
    ),
  ]);

  const body = renderCombinedComment({ breakingChangeMarkdown, versioningChangeMarkdown });

  if (body) {
    core.info(
      `Posting combined TypeSpec breaking/versioning change comment on ${owner}/${repo}#${issue_number}.`,
    );
    await commentOrUpdate(
      github,
      core,
      owner,
      repo,
      issue_number,
      body,
      COMBINED_COMMENT_IDENTIFIER,
    );
    return;
  }

  // Neither phase has any comment-worthy markdown for this head_sha (e.g. both
  // found zero impacted TypeSpec folders). Leave any existing comment alone --
  // unlike the TypeSpec suppressions comment, there's no separate "resolved"
  // state to render here (a passing analysis with impacted folders still
  // produces markdown, e.g. "No breaking changes found").
  const comments = await github.paginate(github.rest.issues.listComments, {
    owner,
    repo,
    issue_number,
    per_page: PER_PAGE_MAX,
  });
  const [existingCommentId] = parseExistingComments(comments, COMBINED_COMMENT_IDENTIFIER);
  core.info(
    `No breaking/versioning change markdown available for ${owner}/${repo}#${issue_number} yet ` +
      `(existing comment: ${existingCommentId ?? "none"}); nothing to do.`,
  );
}
