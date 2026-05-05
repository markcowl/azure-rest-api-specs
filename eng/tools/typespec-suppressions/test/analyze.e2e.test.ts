import { execFileSync } from "node:child_process";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { analyzeTypeSpecSuppressions } from "../src/index.js";

async function initTempRepo(): Promise<string> {
  const repoRoot = await mkdtemp(path.join(os.tmpdir(), "typespec-suppressions-"));
  execFileSync("git", ["init"], { cwd: repoRoot });
  execFileSync("git", ["config", "user.name", "Copilot"], { cwd: repoRoot });
  execFileSync("git", ["config", "user.email", "copilot@example.com"], { cwd: repoRoot });
  return repoRoot;
}

function git(repoRoot: string, args: string[]): string {
  return execFileSync("git", ["-c", "commit.gpgsign=false", ...args], {
    cwd: repoRoot,
    encoding: "utf8",
  }).trim();
}

describe("analyzeTypeSpecSuppressions", () => {
  const tempRepos: string[] = [];

  afterEach(async () => {
    await Promise.all(
      tempRepos.splice(0).map((repoRoot) => rm(repoRoot, { recursive: true, force: true })),
    );
  });

  it("classifies new and changed suppressions from git revisions", async () => {
    const repoRoot = await initTempRepo();
    tempRepos.push(repoRoot);

    const specPath = "specification/demo/resource-manager/Microsoft.Demo/Demo";
    const specFolder = path.join(repoRoot, specPath);
    await mkdir(specFolder, { recursive: true });

    await writeFile(
      path.join(specFolder, "tspconfig.yaml"),
      `linter:
  disable:
    "@azure-tools/rule-config": "base reason"
`,
    );
    await writeFile(
      path.join(specFolder, "main.tsp"),
      `namespace Demo;

model Widget {
  #suppress "@azure-tools/rule-inline" "base inline reason"
  name: string;
}
`,
    );

    git(repoRoot, ["add", "."]);
    git(repoRoot, ["commit", "-m", "base"]);
    const baseRevision = git(repoRoot, ["rev-parse", "HEAD"]);

    await writeFile(
      path.join(specFolder, "tspconfig.yaml"),
      `linter:
  disable:
    "@azure-tools/rule-config": "updated reason"
    "@azure-tools/rule-new-config": "new reason"
`,
    );
    await writeFile(
      path.join(specFolder, "main.tsp"),
      `namespace Demo;

model Widget {
  #suppress "@azure-tools/rule-inline" "base inline reason"
  name: string;
}

interface Widgets {
  #suppress "@azure-tools/rule-new-inline" "new inline reason"
  read(): Widget;
}
`,
    );

    git(repoRoot, ["add", "."]);
    git(repoRoot, ["commit", "-m", "head"]);
    const headRevision = git(repoRoot, ["rev-parse", "HEAD"]);

    const report = await analyzeTypeSpecSuppressions({
      cwd: repoRoot,
      baseRevision,
      headRevision,
      specPaths: [specPath],
    });

    expect(report.requiresApproval).toBe(true);
    expect(report.counts).toEqual({
      specs: 1,
      base: 2,
      head: 4,
      new: 2,
      removed: 0,
      changed: 1,
      unchanged: 1,
    });
    expect(report.newSuppressions.map((suppression) => suppression.ruleName)).toEqual([
      "@azure-tools/rule-new-inline",
      "@azure-tools/rule-new-config",
    ]);
    expect(report.changedSuppressions).toHaveLength(1);
    expect(report.changedSuppressions[0].before.justification).toBe("base reason");
    expect(report.changedSuppressions[0].after.justification).toBe("updated reason");
  });

  it("enriches known TypeSpec Azure rules with documentation metadata", async () => {
    const repoRoot = await initTempRepo();
    tempRepos.push(repoRoot);

    const specPath = "specification/demo/resource-manager/Microsoft.Demo/Demo";
    const specFolder = path.join(repoRoot, specPath);
    await mkdir(specFolder, { recursive: true });

    await writeFile(
      path.join(specFolder, "tspconfig.yaml"),
      `linter:
  disable:
    "@azure-tools/typespec-azure-core/no-rpc-path-params": "approved for demo"
`,
    );
    await writeFile(path.join(specFolder, "main.tsp"), "namespace Demo;\n");

    git(repoRoot, ["add", "."]);
    git(repoRoot, ["commit", "-m", "base"]);
    const baseRevision = git(repoRoot, ["rev-parse", "HEAD"]);

    await writeFile(
      path.join(specFolder, "main.tsp"),
      `namespace Demo;

interface Widgets {
  #suppress "@azure-tools/typespec-azure-core/rpc-operation-request-body" "approved for demo"
  read(): void;
}
`,
    );

    git(repoRoot, ["add", "."]);
    git(repoRoot, ["commit", "-m", "head"]);
    const headRevision = git(repoRoot, ["rev-parse", "HEAD"]);

    const report = await analyzeTypeSpecSuppressions({
      cwd: repoRoot,
      baseRevision,
      headRevision,
      specPaths: [specPath],
    });

    expect(report.newSuppressions[0].ruleMetadata).toMatchObject({
      packageName: "@azure-tools/typespec-azure-core",
      localRuleName: "rpc-operation-request-body",
      documentationUrl:
        "https://azure.github.io/typespec-azure/docs/libraries/azure-core/rules/rpc-operation-request-body",
    });
  });
});
