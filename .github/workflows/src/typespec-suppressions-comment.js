/* eslint-disable
  @typescript-eslint/no-unsafe-assignment,
  @typescript-eslint/no-unsafe-call,
  @typescript-eslint/no-unsafe-member-access
*/
import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { promisify } from "node:util";

import { CheckStatus, PER_PAGE_MAX } from "../../shared/src/github.js";
import { byDate, invert } from "../../shared/src/sort.js";
import { commentOrUpdate, parseExistingComments } from "./comment.js";
import { extractInputs } from "./context.js";

const execFileAsync = promisify(execFile);

export const COMMENT_IDENTIFIER = "typespec-suppressions-report";
export const JOB_SUMMARY_ARTIFACT_NAME = "job-summary";
export const MONITORED_WORKFLOW_NAME = "TypeSpec Suppressions - Analyze Code";
export const REPORT_ARTIFACT_NAME = "typespec-suppressions-report";

/**
 * @typedef {import('@octokit/plugin-rest-endpoint-methods').RestEndpointMethodTypes} RestEndpointMethodTypes
 * @typedef {RestEndpointMethodTypes["issues"]["listComments"]["response"]["data"][number]} IssueComment
 * @typedef {RestEndpointMethodTypes["actions"]["listWorkflowRunArtifacts"]["response"]["data"]["artifacts"][number]} WorkflowRunArtifact
 * @typedef {RestEndpointMethodTypes["actions"]["listWorkflowRunsForRepo"]["response"]["data"]["workflow_runs"][number]} WorkflowRun
 * @typedef {Object} SyncHelpers
 * @property {(github: import('@actions/github-script').AsyncFunctionArguments['github'], core: typeof import("@actions/core"), owner: string, repo: string, headSha: string, monitoredWorkflowName: string) => Promise<WorkflowRun | undefined>} findMonitoredWorkflowRun
 * @property {(github: import('@actions/github-script').AsyncFunctionArguments['github'], core: typeof import("@actions/core"), owner: string, repo: string, runId: number, artifactName: string) => Promise<string>} downloadArtifactText
 * @property {typeof commentOrUpdate} commentOrUpdate
 * @property {typeof deleteManagedCommentIfExists} deleteCommentIfExists
 */

/**
 * Syncs the managed PR comment for TypeSpec suppressions.
 *
 * @param {import('@actions/github-script').AsyncFunctionArguments} AsyncFunctionArguments
 * @returns {Promise<void>}
 */
export default async function syncTypeSpecSuppressionsComment({ github, context, core }) {
  const { owner, repo, head_sha, issue_number } = await extractInputs(github, context, core);
  return await syncTypeSpecSuppressionsCommentImpl({
    owner,
    repo,
    head_sha,
    issue_number,
    github,
    core,
  });
}

/**
 * @param {Object} params
 * @param {string} params.owner
 * @param {string} params.repo
 * @param {string} params.head_sha
 * @param {number} params.issue_number
 * @param {import('@actions/github-script').AsyncFunctionArguments['github']} params.github
 * @param {typeof import("@actions/core")} params.core
 * @param {SyncHelpers} [helpers]
 * @returns {Promise<void>}
 */
export async function syncTypeSpecSuppressionsCommentImpl(
  { owner, repo, head_sha, issue_number, github, core },
  helpers = {
    findMonitoredWorkflowRun,
    downloadArtifactText,
    commentOrUpdate,
    deleteCommentIfExists: deleteManagedCommentIfExists,
  },
) {
  if (!Number.isInteger(issue_number) || issue_number <= 0) {
    throw new Error(`issue_number must be a positive integer: ${issue_number}`);
  }

  const run = await helpers.findMonitoredWorkflowRun(
    github,
    core,
    owner,
    repo,
    head_sha,
    MONITORED_WORKFLOW_NAME,
  );

  if (!run) {
    core.info(
      `No workflow run found for '${MONITORED_WORKFLOW_NAME}' and head SHA '${head_sha}'. Skipping comment sync.`,
    );
    return;
  }

  if (run.status !== CheckStatus.COMPLETED) {
    core.info(
      `Workflow run ${run.id} is not completed (status: '${run.status}'). Skipping comment sync.`,
    );
    return;
  }

  /** @type {{ requiresApproval: boolean }} */
  let report;
  try {
    const reportText = await helpers.downloadArtifactText(
      github,
      core,
      owner,
      repo,
      run.id,
      REPORT_ARTIFACT_NAME,
    );
    const parsedReport = /** @type {unknown} */ (JSON.parse(reportText));
    report =
      typeof parsedReport === "object" &&
      parsedReport !== null &&
      "requiresApproval" in parsedReport
        ? {
            requiresApproval:
              /** @type {{ requiresApproval?: unknown }} */ (parsedReport).requiresApproval ===
              true,
          }
        : { requiresApproval: false };
  } catch (error) {
    core.warning(
      `Unable to load '${REPORT_ARTIFACT_NAME}' for workflow run ${run.id}: ${error instanceof Error ? error.message : "unknown error"}`,
    );
    return;
  }

  if (!report.requiresApproval) {
    await helpers.deleteCommentIfExists(
      github,
      core,
      owner,
      repo,
      issue_number,
      COMMENT_IDENTIFIER,
    );
    return;
  }

  /** @type {string} */
  let commentBody;
  try {
    commentBody = await helpers.downloadArtifactText(
      github,
      core,
      owner,
      repo,
      run.id,
      JOB_SUMMARY_ARTIFACT_NAME,
    );
  } catch (error) {
    core.warning(
      `Unable to load '${JOB_SUMMARY_ARTIFACT_NAME}' for workflow run ${run.id}: ${error instanceof Error ? error.message : "unknown error"}`,
    );
    return;
  }

  await helpers.commentOrUpdate(
    github,
    core,
    owner,
    repo,
    issue_number,
    commentBody,
    COMMENT_IDENTIFIER,
  );
}

/**
 * Finds the latest workflow run for a monitored workflow and head SHA.
 *
 * @param {import('@actions/github-script').AsyncFunctionArguments['github']} github
 * @param {typeof import("@actions/core")} core
 * @param {string} owner
 * @param {string} repo
 * @param {string} headSha
 * @param {string} monitoredWorkflowName
 * @returns {Promise<WorkflowRun | undefined>}
 */
export async function findMonitoredWorkflowRun(
  github,
  core,
  owner,
  repo,
  headSha,
  monitoredWorkflowName,
) {
  /** @type {WorkflowRun[]} */
  const workflowRuns = await github.paginate(github.rest.actions.listWorkflowRunsForRepo, {
    owner,
    repo,
    event: "pull_request",
    head_sha: headSha,
    per_page: PER_PAGE_MAX,
  });

  const targetRuns = workflowRuns
    .filter(
      (workflowRun) =>
        workflowRun.name === monitoredWorkflowName ||
        workflowRun.name === `[TEST-IGNORE] ${monitoredWorkflowName}`,
    )
    .sort(invert(byDate((workflowRun) => workflowRun.updated_at)));

  const run = targetRuns[0];
  if (run) {
    core.info(`Using workflow run ${run.id} for '${run.name}'.`);
  }
  return run;
}

/**
 * Downloads a text artifact for a workflow run.
 *
 * @param {import('@actions/github-script').AsyncFunctionArguments['github']} github
 * @param {typeof import("@actions/core")} core
 * @param {string} owner
 * @param {string} repo
 * @param {number} runId
 * @param {string} artifactName
 * @returns {Promise<string>}
 */
export async function downloadArtifactText(github, core, owner, repo, runId, artifactName) {
  /** @type {WorkflowRunArtifact[]} */
  const artifacts = await github.paginate(github.rest.actions.listWorkflowRunArtifacts, {
    owner,
    repo,
    run_id: runId,
    name: artifactName,
    per_page: PER_PAGE_MAX,
  });

  const artifact = artifacts.sort(invert(byDate((item) => item.updated_at || "1970")))[0];
  if (!artifact) {
    throw new Error(`Artifact '${artifactName}' was not found for workflow run ${runId}.`);
  }

  const download = await github.rest.actions.downloadArtifact({
    owner,
    repo,
    artifact_id: artifact.id,
    archive_format: "zip",
  });

  const arrayBuffer = /** @type {ArrayBuffer} */ (download.data);
  const zipBuffer = Buffer.from(new Uint8Array(arrayBuffer));
  const tempPath = path.join(
    process.env.RUNNER_TEMP || os.tmpdir(),
    `${artifactName.replace(/[^A-Za-z0-9_.-]/g, "-")}-${runId}.zip`,
  );

  await fs.writeFile(tempPath, zipBuffer);

  try {
    const { stdout } = await execFileAsync("unzip", ["-p", tempPath]);
    core.info(`Downloaded artifact '${artifactName}' from workflow run ${runId}.`);
    return stdout;
  } finally {
    await fs.unlink(tempPath).catch(() => undefined);
  }
}

/**
 * Deletes the managed PR comment when it exists.
 *
 * @param {import('@actions/github-script').AsyncFunctionArguments['github']} github
 * @param {typeof import("@actions/core")} core
 * @param {string} owner
 * @param {string} repo
 * @param {number} issue_number
 * @param {string} commentIdentifier
 * @returns {Promise<void>}
 */
export async function deleteManagedCommentIfExists(
  github,
  core,
  owner,
  repo,
  issue_number,
  commentIdentifier,
) {
  /** @type {IssueComment[]} */
  const comments = await github.paginate(github.rest.issues.listComments, {
    owner,
    repo,
    issue_number,
    per_page: PER_PAGE_MAX,
  });

  const [commentId] = parseExistingComments(comments, commentIdentifier);

  if (!commentId) {
    core.info(`No existing comment found for identifier '${commentIdentifier}'.`);
    return;
  }

  await github.rest.issues.deleteComment({
    owner,
    repo,
    comment_id: commentId,
  });
  core.info(`Deleted existing comment ${commentId}.`);
}
