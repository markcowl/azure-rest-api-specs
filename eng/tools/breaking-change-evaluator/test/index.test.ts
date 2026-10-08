import { afterEach, describe, expect, it, vi } from "vitest";

const { prepareTool } = vi.hoisted(() => ({ prepareTool: vi.fn() }));

vi.mock("../src/prepare.ts", () => ({
  prepareTool,
}));

import { main } from "../src/index.ts";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("CLI stage contract", () => {
  const unavailableCases: Array<[string[]]> = [[[]], [["evaluate"]]];

  it.each(unavailableCases)("keeps unavailable commands unreachable for %j", async (args) => {
    const error = vi.spyOn(console, "error").mockImplementation(() => undefined);

    await expect(main(args)).resolves.toBe(2);
    expect(prepareTool).not.toHaveBeenCalled();
    expect(error).toHaveBeenCalledOnce();
    expect(error.mock.calls[0][0]).toContain("breaking-change-evaluator prepare");
    expect(error.mock.calls[0][0]).toContain("breaking-change-evaluator evaluate");
  });

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
});
