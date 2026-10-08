import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { evaluate, EXIT_FAILED, EXIT_NOT_QUALIFIED } from "../src/evaluate.ts";
import type { QualifiedPr } from "../src/github.ts";

const temporaryDirectories: string[] = [];
const evaluatorCommit = "e".repeat(40);

afterEach(async () => {
  await Promise.all(
    temporaryDirectories
      .splice(0)
      .map((directory) => rm(directory, { recursive: true, force: true })),
  );
});

function qualified(qualified = true): QualifiedPr {
  return {
    reference: { owner: "Azure", repo: "azure-rest-api-specs", number: 1 },
    qualification: qualified
      ? {
          qualified: true,
          reasonCodes: [],
          evidence: {
            prUrl: "https://github.com/Azure/azure-rest-api-specs/pull/1",
            headSha: "a".repeat(40),
            baseSha: "b".repeat(40),
            changedTypeSpecFiles: ["specification/foo/Foo/main.tsp"],
          },
        }
      : {
          qualified: false,
          reasonCodes: ["no-typespec-changes"],
          evidence: { changedTypeSpecFiles: [] },
        },
    headSha: "a".repeat(40),
    baseSha: "b".repeat(40),
    cloneUrl: "unused",
    changedTypeSpecFiles: qualified ? ["specification/foo/Foo/main.tsp"] : [],
    oadFindings: [],
  };
}

describe("evaluation exits", () => {
  it("writes both reports and stops before tool lookup when not qualified", async () => {
    const directory = await mkdtemp(join(tmpdir(), "evaluator-test-"));
    temporaryDirectories.push(directory);
    const jsonOutput = join(directory, "report.json");
    const markdownOutput = join(directory, "report.md");

    const exit = await evaluate({
      pr: "Azure/azure-rest-api-specs#1",
      jsonOutput,
      markdownOutput,
      qualifiedPr: qualified(false),
      evaluatorCommit,
      cacheDir: join(directory, "must-not-be-created"),
    });

    expect(exit).toBe(EXIT_NOT_QUALIFIED);
    expect(JSON.parse(await readFile(jsonOutput, "utf8"))).toMatchObject({
      status: "not-qualified",
      complete: false,
      qualification: { reasonCodes: ["no-typespec-changes"] },
      provenance: { evaluator: { commit: evaluatorCommit } },
    });
    expect(await readFile(markdownOutput, "utf8")).toContain("no-typespec-changes");
  });

  it("persists a failed report when qualification input is invalid", async () => {
    const directory = await mkdtemp(join(tmpdir(), "evaluator-test-"));
    temporaryDirectories.push(directory);
    const jsonOutput = join(directory, "failed.json");
    const markdownOutput = join(directory, "failed.md");

    const exit = await evaluate({
      pr: "not-a-pull-request",
      jsonOutput,
      markdownOutput,
    });

    expect(exit).toBe(EXIT_FAILED);
    expect(JSON.parse(await readFile(jsonOutput, "utf8"))).toMatchObject({
      status: "failed",
      complete: false,
    });
    expect(await readFile(markdownOutput, "utf8")).toContain("Invalid pull request reference");
  });

  it("rejects a non-immutable tool revision without preparing it", async () => {
    const directory = await mkdtemp(join(tmpdir(), "evaluator-test-"));
    temporaryDirectories.push(directory);
    const jsonOutput = join(directory, "invalid-sha.json");

    const exit = await evaluate({
      pr: "Azure/azure-rest-api-specs#1",
      jsonOutput,
      markdownOutput: join(directory, "invalid-sha.md"),
      qualifiedPr: qualified(),
      evaluatorCommit,
      toolRevision: "refs/pull/5450/head",
      cacheDir: join(directory, "cache"),
    });

    expect(exit).toBe(EXIT_FAILED);
    expect(JSON.parse(await readFile(jsonOutput, "utf8"))).toMatchObject({
      status: "failed",
      complete: false,
      provenance: { evaluator: { commit: evaluatorCommit } },
      errors: [expect.stringContaining("explicit 40-hex SHA")],
    });
  });

  it("fails explicitly when the immutable tool cache is absent", async () => {
    const directory = await mkdtemp(join(tmpdir(), "evaluator-test-"));
    temporaryDirectories.push(directory);
    const jsonOutput = join(directory, "missing-tool.json");

    const exit = await evaluate({
      pr: "Azure/azure-rest-api-specs#1",
      jsonOutput,
      markdownOutput: join(directory, "missing-tool.md"),
      qualifiedPr: qualified(),
      evaluatorCommit,
      toolRevision: "d0ab464d60c47d6699bfea0292c901864b5d8ba0",
      cacheDir: join(directory, "empty-cache"),
    });

    expect(exit).toBe(EXIT_FAILED);
    expect(JSON.parse(await readFile(jsonOutput, "utf8"))).toMatchObject({
      status: "failed",
      complete: false,
      errors: [expect.stringContaining("Run the prepare command explicitly")],
    });
  });
});
