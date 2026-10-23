import { describe, expect, it } from "vitest";
import { createReadme, createSummary } from "../src/aggregate.ts";
import type { Manifest, ProjectResult } from "../src/types.ts";

function result(overrides: Partial<ProjectResult>): ProjectResult {
  return {
    service: "example",
    projectRoot: "specification/example/resource-manager/Microsoft.Example/Example",
    entrypoint: "specification/example/resource-manager/Microsoft.Example/Example/main.tsp",
    classification: "main-bearing",
    status: "succeeded",
    resourceCount: 1,
    operationCount: 2,
    caseOnlyClashCount: 0,
    genuineClashCount: 0,
    sourceSha: "abc",
    dependencyLockHash: "lock",
    projectInputHash: "input",
    toolVersion: "1",
    compilerVersion: "1",
    armLibraryVersion: "1",
    diagnostics: { errors: 0, warnings: 0, total: 0 },
    outputHashes: { statusJson: "status" },
    ...overrides,
  };
}

describe("Markdown aggregation", () => {
  it("summarizes metadata, statuses, totals, and clash records", () => {
    const projects = [
      result({ status: "zero-resource", resourceCount: 0, operationCount: 0 }),
      result({
        projectRoot: "failed",
        status: "failed",
        resourceCount: 0,
        operationCount: 0,
        outputHashes: { statusJson: "status", errorsMd: "error" },
      }),
      result({
        projectRoot: "client",
        status: "skipped",
        classification: "client-only",
        resourceCount: 0,
        operationCount: 0,
      }),
      result({ projectRoot: "case", caseOnlyClashCount: 2 }),
      result({ projectRoot: "genuine", genuineClashCount: 4 }),
    ];
    const manifest: Manifest = {
      schemaVersion: 1,
      generatedAt: "2026-01-01T00:00:00.000Z",
      repository: "Azure/azure-rest-api-specs",
      sourceSha: "abc",
      dependencyLockHash: "lock",
      toolVersion: "1",
      nodeVersion: "v24.16.0",
      compilerVersion: "1.17.0",
      armLibraryVersion: "0.73.0",
      summary: createSummary(projects),
      projects,
    };
    const markdown = createReadme(manifest);
    expect(markdown).toContain("- Node.js: `v24.16.0`");
    expect(markdown).toContain("- Projects: 5");
    expect(markdown).toContain("- Succeeded: 2");
    expect(markdown).toContain("## Failed projects (1)");
    expect(markdown).toContain("## Skipped client-only projects (1)");
    expect(markdown).toContain("Case-only ARM identity duplicates: 2 records across 1 project");
    expect(markdown).toContain(
      "Genuine distinct-resource name clashes: 4 records across 1 project",
    );
    expect(markdown).toContain("[failed](../../failed/resource-data/errors.md)");
  });

  it("groups projects by service and links only reports that exist", () => {
    const projects = [
      result({
        service: "zeta",
        projectRoot: "specification/zeta/resource-manager/z",
        outputHashes: {
          statusJson: "status",
          resourcesCsv: "resources",
          operationsCsv: "operations",
        },
      }),
      result({
        service: "alpha",
        projectRoot: "specification/alpha/resource-manager/skipped",
        status: "skipped",
        classification: "client-only",
      }),
      result({
        service: "alpha",
        projectRoot: "specification/alpha/resource-manager/failed",
        status: "failed",
        outputHashes: { statusJson: "status", errorsMd: "errors" },
      }),
    ];
    const manifest: Manifest = {
      schemaVersion: 1,
      generatedAt: "2026-01-01T00:00:00.000Z",
      repository: "Azure/azure-rest-api-specs",
      sourceSha: "abc",
      dependencyLockHash: "lock",
      toolVersion: "1",
      nodeVersion: "v24.16.0",
      compilerVersion: "1.17.0",
      armLibraryVersion: "0.73.0",
      summary: createSummary(projects),
      projects,
    };
    const markdown = createReadme(manifest);

    expect(markdown.indexOf("### alpha")).toBeLessThan(markdown.indexOf("### zeta"));
    expect(markdown).toContain(
      "[status](../../specification/alpha/resource-manager/skipped/resource-data/status.json)",
    );
    expect(markdown).not.toContain(
      "specification/alpha/resource-manager/skipped/resource-data/resources.csv",
    );
    expect(markdown).toContain(
      "[errors](../../specification/alpha/resource-manager/failed/resource-data/errors.md)",
    );
    expect(markdown).not.toContain(
      "specification/alpha/resource-manager/failed/resource-data/resources.csv",
    );
  });
});
