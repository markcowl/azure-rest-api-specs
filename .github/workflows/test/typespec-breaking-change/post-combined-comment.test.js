import { beforeEach, describe, expect, it, vi } from "vitest";
import { createMockContext, createMockCore, createMockGithub } from "../mocks.js";

vi.mock("../../src/context.js", () => ({
  extractInputs: vi.fn(),
}));

vi.mock("../../src/comment.js", () => ({
  commentOrUpdate: vi.fn(),
  parseExistingComments: vi.fn().mockReturnValue([undefined, undefined]),
}));

vi.mock("../../src/typespec-breaking-change/combined-comment.js", () => ({
  BREAKING_CHANGE_COMMENT_ARTIFACT_NAME: "typespec-breaking-change-comment-md",
  VERSIONING_CHANGE_COMMENT_ARTIFACT_NAME: "typespec-versioning-change-comment-md",
  TYPESPEC_BREAKING_CHANGE_WORKFLOW_NAME: "TypeSpec Breaking Change - Analyze Code",
  TYPESPEC_VERSIONING_CHANGE_WORKFLOW_NAME: "TypeSpec Unversioned Change - Analyze Code",
  COMBINED_COMMENT_IDENTIFIER: "TypeSpecBreakingAndVersioningChangeAnalysis",
  downloadLatestCommentMarkdown: vi.fn(),
  renderCombinedComment: vi.fn(),
}));

const { extractInputs } = await import("../../src/context.js");
const { commentOrUpdate, parseExistingComments } = await import("../../src/comment.js");
const { downloadLatestCommentMarkdown, renderCombinedComment } =
  await import("../../src/typespec-breaking-change/combined-comment.js");
const { default: postCombinedBreakingChangeComment } =
  await import("../../src/typespec-breaking-change/post-combined-comment.js");

describe("postCombinedBreakingChangeComment", () => {
  const mockCore = createMockCore();
  const context = createMockContext();

  /**
   * @param {import("../mocks.js").GitHub} github
   * @returns {import("@actions/github-script").AsyncFunctionArguments}
   */
  function args(github) {
    return /** @type {import("@actions/github-script").AsyncFunctionArguments} */ (
      /** @type {unknown} */ ({ github, context, core: mockCore })
    );
  }

  beforeEach(() => {
    vi.mocked(extractInputs).mockReset();
    vi.mocked(commentOrUpdate).mockReset();
    vi.mocked(parseExistingComments).mockReset();
    vi.mocked(downloadLatestCommentMarkdown).mockReset();
    vi.mocked(renderCombinedComment).mockReset();

    vi.mocked(extractInputs).mockResolvedValue(
      /** @type {any} */ ({
        owner: "test-owner",
        repo: "test-repo",
        issue_number: 42,
        head_sha: "abc123",
        run_id: 1,
      }),
    );
    vi.mocked(parseExistingComments).mockReturnValue([undefined, undefined]);
  });

  it("does nothing when the event has no resolvable PR/head_sha", async () => {
    vi.mocked(extractInputs).mockResolvedValue(
      /** @type {any} */ ({
        owner: "test-owner",
        repo: "test-repo",
        issue_number: NaN,
        head_sha: "",
        run_id: 1,
      }),
    );

    await postCombinedBreakingChangeComment(args(createMockGithub()));

    expect(downloadLatestCommentMarkdown).not.toHaveBeenCalled();
    expect(commentOrUpdate).not.toHaveBeenCalled();
  });

  it("downloads both phases' artifacts and posts the combined comment", async () => {
    vi.mocked(downloadLatestCommentMarkdown)
      .mockResolvedValueOnce("## Breaking Change Analysis\n\nFinding A.")
      .mockResolvedValueOnce("## Unversioned Change Analysis\n\nFinding B.");
    vi.mocked(renderCombinedComment).mockReturnValue("COMBINED BODY");

    await postCombinedBreakingChangeComment(args(createMockGithub()));

    expect(downloadLatestCommentMarkdown).toHaveBeenCalledWith(
      expect.anything(),
      mockCore,
      "test-owner",
      "test-repo",
      "abc123",
      "TypeSpec Breaking Change - Analyze Code",
      "typespec-breaking-change-comment-md",
    );
    expect(downloadLatestCommentMarkdown).toHaveBeenCalledWith(
      expect.anything(),
      mockCore,
      "test-owner",
      "test-repo",
      "abc123",
      "TypeSpec Unversioned Change - Analyze Code",
      "typespec-versioning-change-comment-md",
    );
    expect(renderCombinedComment).toHaveBeenCalledWith({
      breakingChangeMarkdown: "## Breaking Change Analysis\n\nFinding A.",
      versioningChangeMarkdown: "## Unversioned Change Analysis\n\nFinding B.",
    });
    expect(commentOrUpdate).toHaveBeenCalledWith(
      expect.anything(),
      mockCore,
      "test-owner",
      "test-repo",
      42,
      "COMBINED BODY",
      "TypeSpecBreakingAndVersioningChangeAnalysis",
    );
  });

  it("does not post a comment when both phases have no markdown yet", async () => {
    vi.mocked(downloadLatestCommentMarkdown).mockResolvedValue(undefined);
    vi.mocked(renderCombinedComment).mockReturnValue(undefined);

    const github = createMockGithub();
    await postCombinedBreakingChangeComment(args(github));

    expect(commentOrUpdate).not.toHaveBeenCalled();
    expect(github.rest.issues.listComments).toHaveBeenCalled();
  });
});
