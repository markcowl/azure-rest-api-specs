/* eslint-disable
  @typescript-eslint/no-unsafe-argument,
  @typescript-eslint/no-unsafe-assignment,
  @typescript-eslint/no-unsafe-call,
  @typescript-eslint/no-unsafe-member-access
*/
import { beforeEach, describe, expect, it, vi } from "vitest";

import { CheckStatus } from "../../shared/src/github.js";
import { fullGitSha } from "../../shared/test/examples.js";
import {
  COMMENT_IDENTIFIER,
  JOB_SUMMARY_ARTIFACT_NAME,
  REPORT_ARTIFACT_NAME,
  syncTypeSpecSuppressionsCommentImpl,
} from "../src/typespec-suppressions-comment.js";
import { createMockCore, createMockGithub } from "./mocks.js";

describe("syncTypeSpecSuppressionsCommentImpl", () => {
  /** @type {ReturnType<typeof createMockCore>} */
  let core;

  /** @type {ReturnType<typeof createMockGithub>} */
  let github;

  /** @type {any} */
  let helpers;

  beforeEach(() => {
    core = createMockCore();
    github = createMockGithub();
    helpers = {
      findMonitoredWorkflowRun: vi.fn(),
      downloadArtifactText: vi.fn(),
      commentOrUpdate: vi.fn(),
      deleteCommentIfExists: vi.fn(),
    };
  });

  it("comments when approval is required", async () => {
    helpers.findMonitoredWorkflowRun.mockResolvedValue({
      id: 123,
      status: CheckStatus.COMPLETED,
    });
    helpers.downloadArtifactText.mockImplementation(
      (_github, _core, _owner, _repo, _runId, name) => {
        if (name === REPORT_ARTIFACT_NAME) {
          return Promise.resolve(JSON.stringify({ requiresApproval: true }));
        }

        if (name === JOB_SUMMARY_ARTIFACT_NAME) {
          return Promise.resolve("# TypeSpec Suppressions\n\nApproval is required.");
        }

        return Promise.reject(new Error(`Unexpected artifact: ${name}`));
      },
    );

    await expect(
      syncTypeSpecSuppressionsCommentImpl(
        {
          owner: "test-owner",
          repo: "test-repo",
          head_sha: fullGitSha,
          issue_number: 123,
          github,
          core,
        },
        helpers,
      ),
    ).resolves.toBeUndefined();

    expect(helpers.commentOrUpdate).toHaveBeenCalledWith(
      github,
      core,
      "test-owner",
      "test-repo",
      123,
      "# TypeSpec Suppressions\n\nApproval is required.",
      COMMENT_IDENTIFIER,
    );
    expect(helpers.deleteCommentIfExists).not.toHaveBeenCalled();
  });

  it("deletes the stale comment when approval is not required", async () => {
    helpers.findMonitoredWorkflowRun.mockResolvedValue({
      id: 123,
      status: CheckStatus.COMPLETED,
    });
    helpers.downloadArtifactText.mockResolvedValue(JSON.stringify({ requiresApproval: false }));

    await expect(
      syncTypeSpecSuppressionsCommentImpl(
        {
          owner: "test-owner",
          repo: "test-repo",
          head_sha: fullGitSha,
          issue_number: 123,
          github,
          core,
        },
        helpers,
      ),
    ).resolves.toBeUndefined();

    expect(helpers.deleteCommentIfExists).toHaveBeenCalledWith(
      github,
      core,
      "test-owner",
      "test-repo",
      123,
      COMMENT_IDENTIFIER,
    );
    expect(helpers.commentOrUpdate).not.toHaveBeenCalled();
  });

  it("no-ops when no monitored workflow run is found", async () => {
    helpers.findMonitoredWorkflowRun.mockResolvedValue(undefined);

    await expect(
      syncTypeSpecSuppressionsCommentImpl(
        {
          owner: "test-owner",
          repo: "test-repo",
          head_sha: fullGitSha,
          issue_number: 123,
          github,
          core,
        },
        helpers,
      ),
    ).resolves.toBeUndefined();

    expect(helpers.downloadArtifactText).not.toHaveBeenCalled();
    expect(helpers.commentOrUpdate).not.toHaveBeenCalled();
    expect(helpers.deleteCommentIfExists).not.toHaveBeenCalled();
  });

  it("warns and exits when the report artifact is unavailable", async () => {
    helpers.findMonitoredWorkflowRun.mockResolvedValue({
      id: 123,
      status: CheckStatus.COMPLETED,
    });
    helpers.downloadArtifactText.mockRejectedValue(new Error("missing artifact"));

    await expect(
      syncTypeSpecSuppressionsCommentImpl(
        {
          owner: "test-owner",
          repo: "test-repo",
          head_sha: fullGitSha,
          issue_number: 123,
          github,
          core,
        },
        helpers,
      ),
    ).resolves.toBeUndefined();

    expect(/** @type {any} */ (core).warning).toHaveBeenCalledWith(
      "Unable to load 'typespec-suppressions-report' for workflow run 123: missing artifact",
    );
    expect(helpers.commentOrUpdate).not.toHaveBeenCalled();
    expect(helpers.deleteCommentIfExists).not.toHaveBeenCalled();
  });
});
