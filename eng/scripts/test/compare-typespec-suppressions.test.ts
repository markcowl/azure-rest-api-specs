import { execFileSync } from "node:child_process";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  compareTypeSpecSuppressions,
  renderMarkdownReport,
  runCli,
} from "../compare-typespec-suppressions.ts";

const tempDirectories: string[] = [];

async function createRepo(): Promise<string> {
  const repoRoot = await mkdtemp(path.join(os.tmpdir(), "compare-typespec-suppressions-"));
  tempDirectories.push(repoRoot);
  git(repoRoot, "init", "--quiet", "--initial-branch=main");
  git(repoRoot, "config", "user.name", "Test");
  git(repoRoot, "config", "user.email", "test@example.test");
  return repoRoot;
}

function git(repoRoot: string, ...args: string[]): string {
  return execFileSync("git", ["-c", "commit.gpgsign=false", ...args], {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();
}

async function commitAll(repoRoot: string, message: string): Promise<string> {
  git(repoRoot, "add", ".");
  git(repoRoot, "commit", "--quiet", "-m", message);
  return git(repoRoot, "rev-parse", "HEAD");
}

afterEach(async () => {
  await Promise.all(
    tempDirectories
      .splice(0)
      .map((directory) =>
        rm(directory, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 }),
      ),
  );
});

describe("compareTypeSpecSuppressions", () => {
  it("compares different project paths recursively and ignores comments", async () => {
    const repoRoot = await createRepo();
    const basePath = "specification/demo/base";
    await mkdir(path.join(repoRoot, basePath, "Common"), { recursive: true });
    await writeFile(
      path.join(repoRoot, basePath, "main.tsp"),
      `namespace Demo;

// #suppress "commented-out" "must not count"
#suppress "rule/root" "root"
model Root {}
`,
    );
    await writeFile(
      path.join(repoRoot, basePath, "Common", "models.tsp"),
      `namespace Demo.Common;

#suppress "rule/one" "one"
model One {}

#suppress "rule/two" "two"
model Two {}
`,
    );
    const baseRevision = await commitAll(repoRoot, "base");

    const headPath = "specification/demo/head";
    await mkdir(path.join(repoRoot, headPath, "Network"), { recursive: true });
    await writeFile(
      path.join(repoRoot, headPath, "Network", "models.tsp"),
      `namespace Demo.Network;

#suppress "rule/one" "one"
model One {}
`,
    );
    const headRevision = await commitAll(repoRoot, "head");

    const report = await compareTypeSpecSuppressions({
      cwd: repoRoot,
      baseRevision,
      basePath,
      headRevision,
      headPath,
    });

    expect(report).toMatchObject({
      schemaVersion: 1,
      netRemoved: 2,
      netAdded: 0,
      reductionPercentage: 66.66666666666666,
      base: {
        requestedRevision: baseRevision,
        resolvedCommit: baseRevision,
        projectPath: basePath,
        count: 3,
        byLocation: [
          { path: "(project root)", count: 1 },
          { path: "Common", count: 2 },
        ],
      },
      head: {
        requestedRevision: headRevision,
        resolvedCommit: headRevision,
        projectPath: headPath,
        count: 1,
        byLocation: [{ path: "Network", count: 1 }],
      },
    });
  });

  it("reports additions and an unavailable percentage when the base has no suppressions", async () => {
    const repoRoot = await createRepo();
    const projectPath = "specification/demo/project";
    await mkdir(path.join(repoRoot, projectPath), { recursive: true });
    await writeFile(path.join(repoRoot, projectPath, "main.tsp"), "namespace Demo;\n");
    const baseRevision = await commitAll(repoRoot, "base");
    await writeFile(
      path.join(repoRoot, projectPath, "main.tsp"),
      `namespace Demo;

#suppress "rule/new" "new"
model New {}
`,
    );
    const headRevision = await commitAll(repoRoot, "head");

    const report = await compareTypeSpecSuppressions({
      cwd: repoRoot,
      baseRevision,
      basePath: projectPath,
      headRevision,
      headPath: projectPath,
    });

    expect(report.netRemoved).toBe(0);
    expect(report.netAdded).toBe(1);
    expect(report.reductionPercentage).toBeNull();
  });

  it("fails when a revision cannot be resolved", async () => {
    const repoRoot = await createRepo();
    await writeFile(path.join(repoRoot, "main.tsp"), "namespace Demo;\n");
    const headRevision = await commitAll(repoRoot, "initial");

    await expect(
      compareTypeSpecSuppressions({
        cwd: repoRoot,
        baseRevision: "missing-revision",
        basePath: ".",
        headRevision,
        headPath: ".",
      }),
    ).rejects.toThrow("Unable to resolve Git revision to a commit: missing-revision");
  });

  it("fails when a project path is missing or contains no TypeSpec files", async () => {
    const repoRoot = await createRepo();
    await mkdir(path.join(repoRoot, "empty"), { recursive: true });
    await writeFile(path.join(repoRoot, "empty", "README.md"), "empty");
    const revision = await commitAll(repoRoot, "initial");

    await expect(
      compareTypeSpecSuppressions({
        cwd: repoRoot,
        baseRevision: revision,
        basePath: "missing",
        headRevision: revision,
        headPath: "empty",
      }),
    ).rejects.toThrow(/Project path (does not exist|contains no \.tsp files)/);

    await expect(
      compareTypeSpecSuppressions({
        cwd: repoRoot,
        baseRevision: revision,
        basePath: "empty",
        headRevision: revision,
        headPath: "empty",
      }),
    ).rejects.toThrow("Project path contains no .tsp files");
  });

  it("fails on malformed TypeSpec instead of returning a partial count", async () => {
    const repoRoot = await createRepo();
    await mkdir(path.join(repoRoot, "spec"), { recursive: true });
    await writeFile(path.join(repoRoot, "spec", "main.tsp"), "model Broken {");
    const revision = await commitAll(repoRoot, "initial");

    await expect(
      compareTypeSpecSuppressions({
        cwd: repoRoot,
        baseRevision: revision,
        basePath: "spec",
        headRevision: revision,
        headPath: "spec",
      }),
    ).rejects.toThrow("Unable to parse TypeSpec file spec/main.tsp");
  });
});

describe("reporting", () => {
  it("renders deterministic Markdown tables", () => {
    const markdown = renderMarkdownReport({
      schemaVersion: 1,
      base: {
        requestedRevision: "origin/main",
        resolvedCommit: "a".repeat(40),
        projectPath: "specification/base",
        count: 3,
        byLocation: [
          { path: "(project root)", count: 1 },
          { path: "Common", count: 2 },
        ],
      },
      head: {
        requestedRevision: "feature",
        resolvedCommit: "b".repeat(40),
        projectPath: "specification/head",
        count: 1,
        byLocation: [{ path: "Network", count: 1 }],
      },
      netRemoved: 2,
      netAdded: 0,
      reductionPercentage: 66.66666666666666,
    });

    expect(markdown).toContain("# TypeSpec suppression comparison");
    expect(markdown).toContain("| 3 | 1 | 2 | 0 | 66.7% |");
    expect(markdown).toContain("| `(project root)` | 1 | 0 | -1 |");
    expect(markdown).toContain("| `Common` | 2 | 0 | -2 |");
    expect(markdown).toContain("| `Network` | 0 | 1 | +1 |");
  });

  it("writes the required Markdown report and optional JSON artifact", async () => {
    const repoRoot = await createRepo();
    await mkdir(path.join(repoRoot, "spec"), { recursive: true });
    await writeFile(
      path.join(repoRoot, "spec", "main.tsp"),
      `#suppress "rule/one" "one"
model One {}
`,
    );
    const revision = await commitAll(repoRoot, "initial");

    const report = await runCli(
      [
        "--base",
        revision,
        "--base-path",
        "spec",
        "--head",
        revision,
        "--head-path",
        "spec",
        "--markdown-output",
        "artifacts/report.md",
        "--json-output",
        "artifacts/report.json",
      ],
      repoRoot,
    );

    expect(report?.base.count).toBe(1);
    expect(await readFile(path.join(repoRoot, "artifacts", "report.md"), "utf8")).toContain(
      "| 1 | 1 | 0 | 0 | 0.0% |",
    );
    expect(
      JSON.parse(await readFile(path.join(repoRoot, "artifacts", "report.json"), "utf8")),
    ).toEqual(report);
  });

  it("requires a .md Markdown output path", async () => {
    await expect(
      runCli([
        "--base",
        "HEAD",
        "--base-path",
        "spec",
        "--head",
        "HEAD",
        "--head-path",
        "spec",
        "--markdown-output",
        "report.txt",
      ]),
    ).rejects.toThrow("Markdown output path must use the .md extension");
  });
});
