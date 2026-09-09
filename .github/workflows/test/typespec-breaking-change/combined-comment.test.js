import { describe, expect, it } from "vitest";
import { renderCombinedComment } from "../../src/typespec-breaking-change/combined-comment.js";

describe("renderCombinedComment", () => {
  it("returns undefined when neither phase has markdown", () => {
    expect(renderCombinedComment({})).toBeUndefined();
    expect(
      renderCombinedComment({
        breakingChangeMarkdown: undefined,
        versioningChangeMarkdown: undefined,
      }),
    ).toBeUndefined();
  });

  it("returns undefined when both phases are blank/whitespace-only", () => {
    expect(
      renderCombinedComment({ breakingChangeMarkdown: "   \n  ", versioningChangeMarkdown: "" }),
    ).toBeUndefined();
  });

  it("returns only the breaking change section when versioning change is absent", () => {
    const body = renderCombinedComment({
      breakingChangeMarkdown: "## Breaking Change Analysis\n\nNo breaking changes found.",
    });
    expect(body).toBe("## Breaking Change Analysis\n\nNo breaking changes found.");
  });

  it("returns only the versioning change section when breaking change is absent", () => {
    const body = renderCombinedComment({
      versioningChangeMarkdown: "## Unversioned Change Analysis\n\nAll good.",
    });
    expect(body).toBe("## Unversioned Change Analysis\n\nAll good.");
  });

  it("joins both sections with a divider when both are present", () => {
    const body = renderCombinedComment({
      breakingChangeMarkdown: "## Breaking Change Analysis\n\nFinding A.",
      versioningChangeMarkdown: "## Unversioned Change Analysis\n\nFinding B.",
    });
    expect(body).toBe(
      "## Breaking Change Analysis\n\nFinding A.\n\n---\n\n" +
        "## Unversioned Change Analysis\n\nFinding B.",
    );
  });

  it("trims trailing/leading whitespace from each section", () => {
    const body = renderCombinedComment({
      breakingChangeMarkdown: "\n\n## Breaking Change Analysis\n\nFinding A.\n\n",
      versioningChangeMarkdown: "  ## Unversioned Change Analysis\n\nFinding B.  ",
    });
    expect(body).toBe(
      "## Breaking Change Analysis\n\nFinding A.\n\n---\n\n" +
        "## Unversioned Change Analysis\n\nFinding B.",
    );
  });
});
