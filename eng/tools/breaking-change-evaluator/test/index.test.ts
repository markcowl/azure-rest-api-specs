import { afterEach, describe, expect, it, vi } from "vitest";
import { main } from "../src/index.ts";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("CLI foundation contract", () => {
  const cases: [string[]][] = [[[]], [["prepare"]], [["evaluate"]]];

  it.each(cases)("prints reserved command usage without executing %j", async (args) => {
    const error = vi.spyOn(console, "error").mockImplementation(() => undefined);

    await expect(main(args)).resolves.toBe(2);
    expect(error).toHaveBeenCalledOnce();
    expect(error.mock.calls[0][0]).toContain("breaking-change-evaluator prepare");
    expect(error.mock.calls[0][0]).toContain("breaking-change-evaluator evaluate");
  });
});
