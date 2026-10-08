import { afterEach, describe, expect, it, vi } from "vitest";

const { evaluate, prepareTool } = vi.hoisted(() => ({
  evaluate: vi.fn(),
  prepareTool: vi.fn(),
}));

vi.mock("../src/prepare.ts", () => ({
  prepareTool,
}));
vi.mock("../src/evaluate.ts", () => ({
  evaluate,
}));

import { main } from "../src/index.ts";

afterEach(() => {
  vi.restoreAllMocks();
  vi.clearAllMocks();
});

describe("CLI stage contract", () => {
  const unavailableCases: Array<[string[]]> = [
    [[]],
    [["evaluate"]],
    [["evaluate", "--pr", "Azure/azure-rest-api-specs#1"]],
  ];

  it.each(unavailableCases)(
    "rejects incomplete commands without execution for %j",
    async (args) => {
      const error = vi.spyOn(console, "error").mockImplementation(() => undefined);

      await expect(main(args)).resolves.toBe(2);
      expect(prepareTool).not.toHaveBeenCalled();
      expect(evaluate).not.toHaveBeenCalled();
      expect(error).toHaveBeenCalledOnce();
      expect(error.mock.calls[0][0]).toContain("breaking-change-evaluator prepare");
      expect(error.mock.calls[0][0]).toContain("breaking-change-evaluator evaluate");
    },
  );

  it("routes prepare options to the only build-and-cache path", async () => {
    prepareTool.mockResolvedValueOnce({
      sourceSha: "a".repeat(40),
      artifactDigest: "digest",
      executable: "cli.js",
      cachePath: "cache",
    });
    const log = vi.spyOn(console, "log").mockImplementation(() => undefined);

    await expect(
      main(["prepare", "--typespec-revision", "a".repeat(40), "--cache-dir", "cache-root"]),
    ).resolves.toBe(0);

    expect(prepareTool).toHaveBeenCalledWith("a".repeat(40), "cache-root");
    expect(log).toHaveBeenCalledOnce();
  });

  it("routes complete evaluate options without calling preparation", async () => {
    evaluate.mockResolvedValueOnce(0);

    await expect(
      main([
        "evaluate",
        "--pr",
        "Azure/azure-rest-api-specs#46675",
        "--json-output",
        "report.json",
        "--markdown-output",
        "report.md",
        "--tool-revision",
        "a".repeat(40),
        "--cache-dir",
        "cache-root",
      ]),
    ).resolves.toBe(0);

    expect(evaluate).toHaveBeenCalledWith({
      pr: "Azure/azure-rest-api-specs#46675",
      jsonOutput: "report.json",
      markdownOutput: "report.md",
      toolRevision: "a".repeat(40),
      cacheDir: "cache-root",
    });
    expect(prepareTool).not.toHaveBeenCalled();
  });
});
