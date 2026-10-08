import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { resolveProjectRoots, runTypeSpecProject, runTypeSpecProjects } from "../src/projects.ts";
import type { ProcessResult } from "../src/process.ts";

const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(
    temporaryDirectories
      .splice(0)
      .map((directory) => rm(directory, { recursive: true, force: true })),
  );
});

function validReport(requiresAction: boolean) {
  const findings = requiresAction
    ? [
        {
          kind: "OperationRemoved",
          severity: "error",
          rule: "operation-removed",
          phase: "same-version",
          suppressed: false,
          message: "Operation removed",
          versionPair: { baseVersion: "v1", headVersion: "v1" },
        },
      ]
    : [];
  return {
    specPaths: ["specification/foo/Foo"],
    requiresAction,
    counts: {
      errors: findings.length,
      suppressed: 0,
      ignored: 0,
      totalFindings: findings.length,
      servicesAnalyzed: 1,
      comparisonsPerformed: 1,
    },
    findings,
    summary: { servicesAnalyzed: 1, comparisonsPerformed: 1 },
    timing: {},
  };
}

function result(overrides: Partial<ProcessResult> = {}): ProcessResult {
  return {
    code: 0,
    signal: null,
    stdout: "",
    stderr: "",
    timedOut: false,
    ...overrides,
  };
}

describe("TypeSpec project discovery", () => {
  it("resolves every nearest project and de-duplicates shared roots", async () => {
    const root = await mkdtemp(join(tmpdir(), "project-roots-"));
    temporaryDirectories.push(root);
    for (const project of ["specification/foo/Foo", "specification/foo/Bar"]) {
      await mkdir(join(root, project), { recursive: true });
      await writeFile(join(root, project, "tspconfig.yaml"), "");
      await writeFile(join(root, project, "main.tsp"), "");
    }
    await expect(
      resolveProjectRoots(root, [
        "specification/foo/Foo/main.tsp",
        "specification/foo/Foo/models.tsp",
        "specification/foo/Bar/main.tsp",
      ]),
    ).resolves.toEqual(["specification/foo/Bar", "specification/foo/Foo"]);
  });
});

describe("TypeSpec project execution", () => {
  it.each([
    { code: 0, requiresAction: false, findings: 0 },
    { code: 1, requiresAction: true, findings: 1 },
  ])("accepts exit $code only with an agreeing valid report", async (testCase) => {
    const outputDir = await mkdtemp(join(tmpdir(), "project-output-"));
    temporaryDirectories.push(outputDir);
    const processRunner = vi.fn(async (_command, args: string[]) => {
      const output = args[args.indexOf("--json-output") + 1];
      await writeFile(output, JSON.stringify(validReport(testCase.requiresAction)));
      return result({ code: testCase.code });
    });

    const project = await runTypeSpecProject(
      "tool.js",
      "checkout",
      "a".repeat(40),
      "specification/foo/Foo",
      outputDir,
      processRunner,
    );

    expect(project).toMatchObject({
      status: "complete",
      exitCode: testCase.code,
    });
    expect(project.findings).toHaveLength(testCase.findings);
    expect(project.reportDigest).toMatch(/^[0-9a-f]{64}$/);
  });

  it.each([
    ["tool exit", result({ code: 2 }), "failed"],
    ["timeout", result({ code: null, timedOut: true }), "timed out"],
    ["signal", result({ code: null, signal: "SIGTERM" }), "terminated by SIGTERM"],
  ])("classifies %s as an execution error", async (_name, processResult, expected) => {
    const outputDir = await mkdtemp(join(tmpdir(), "project-output-"));
    temporaryDirectories.push(outputDir);
    const project = await runTypeSpecProject(
      "tool.js",
      "checkout",
      "a".repeat(40),
      "specification/foo/Foo",
      outputDir,
      vi.fn().mockResolvedValue(processResult),
    );
    expect(project).toMatchObject({ status: "error" });
    expect(project.error).toContain(expected);
  });

  it("rejects missing, invariant-invalid, and exit-disagreeing reports", async () => {
    const outputDir = await mkdtemp(join(tmpdir(), "project-output-"));
    temporaryDirectories.push(outputDir);
    const reports = [
      undefined,
      { ...validReport(false), counts: { ...validReport(false).counts, totalFindings: 1 } },
      validReport(true),
    ];
    for (const report of reports) {
      const processRunner = vi.fn(async (_command, args: string[]) => {
        if (report) {
          await writeFile(args[args.indexOf("--json-output") + 1], JSON.stringify(report));
        }
        return result({ code: 0 });
      });
      const project = await runTypeSpecProject(
        "tool.js",
        "checkout",
        "a".repeat(40),
        `specification/foo/${String(reports.indexOf(report))}`,
        outputDir,
        processRunner,
      );
      expect(project.status).toBe("error");
      expect(project.error).toContain("schema-invalid TypeSpec report");
    }
  });

  it("preserves successful findings and returns evaluator failure for mixed results", async () => {
    const outputDir = await mkdtemp(join(tmpdir(), "project-output-"));
    temporaryDirectories.push(outputDir);
    let invocation = 0;
    const processRunner = vi.fn(async (_command, args: string[]) => {
      invocation++;
      if (invocation === 1) {
        await writeFile(args[args.indexOf("--json-output") + 1], JSON.stringify(validReport(true)));
        return result({ code: 1 });
      }
      return result({ code: 2, stderr: "controlled failure" });
    });

    const summary = await runTypeSpecProjects(
      "tool.js",
      "checkout",
      "a".repeat(40),
      ["specification/foo/Good", "specification/foo/Bad"],
      outputDir,
      processRunner,
    );

    expect(summary).toMatchObject({ status: "partial", complete: false, exitCode: 4 });
    expect(summary.projects[0].findings).toHaveLength(1);
    expect(summary.projects[1]).toMatchObject({ status: "error", findings: [] });
    expect(summary.errors).toHaveLength(1);
  });
});
