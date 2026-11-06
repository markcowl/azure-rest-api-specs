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
    nameClashGroupCount: 0,
    nameClashGroups: [],
    duplicateResourceErrorCount: 0,
    duplicateResourceErrorGroupCount: 0,
    duplicateResourceErrorAnalysis: [],
    duplicateResourceErrorGroups: [],
    reportDirectory: "resource-data",
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
      result({
        projectRoot: "case",
        caseOnlyClashCount: 2,
        nameClashGroupCount: 1,
        nameClashGroups: [
          {
            resourceName: "Widget",
            classification: "case-only",
            resources: [
              {
                resourceType: "Microsoft.Example/widgets",
                resourceInstancePath: "/widgets/{widgetName}",
                sourceUrl: "https://example.test/widget",
              },
              {
                resourceType: "",
                resourceInstancePath: "/WIDGETS/{name}",
                sourceUrl: "",
              },
            ],
          },
        ],
      }),
      result({
        projectRoot: "genuine",
        genuineClashCount: 4,
        nameClashGroupCount: 1,
        nameClashGroups: [
          {
            resourceName: "Setting",
            classification: "genuine",
            resources: [
              {
                resourceType: "Microsoft.Example/settings",
                resourceInstancePath: "/settings/{name}",
                sourceUrl: "https://example.test/setting",
              },
            ],
          },
        ],
      }),
      result({
        projectRoot: "duplicate",
        duplicateResourceErrorCount: 3,
        duplicateResourceErrorGroupCount: 2,
        duplicateResourceErrorAnalysis: [
          "duplicate ARM resource instance path: /widgets/{}; resource names: A; B",
          "duplicate ARM resource instance path: /gadgets/{}; resource names: C; D",
        ],
        duplicateResourceErrorGroups: [
          {
            normalizedInstancePath: "/gadgets/{}",
            resources: [
              {
                resourceName: "C",
                resourceType: "Microsoft.Example/gadgets",
                sourceUrl: "https://example.test/c",
              },
              {
                resourceName: "D",
                resourceType: "Microsoft.Example/gadgets",
                sourceUrl: "https://example.test/d",
              },
            ],
          },
          {
            normalizedInstancePath: "/widgets/{}",
            resources: [
              {
                resourceName: "A",
                resourceType: "Microsoft.Example/widgets",
                sourceUrl: "https://example.test/a",
              },
              {
                resourceName: "B",
                resourceType: "Microsoft.Example/widgets",
                sourceUrl: "https://example.test/b",
              },
            ],
          },
        ],
      }),
    ];
    const manifest: Manifest = {
      schemaVersion: 4,
      generatedAt: "2026-01-01T00:00:00.000Z",
      repository: "Azure/azure-rest-api-specs",
      sourceSha: "abc",
      dependencyLockHash: "lock",
      toolVersion: "1",
      nodeVersion: "v24.16.0",
      compilerVersion: "1.17.0",
      armLibraryVersion: "0.73.0",
      reportDirectory: "resource-data",
      summary: createSummary(projects),
      projects,
    };
    const markdown = createReadme(manifest);
    expect(markdown).toContain("- Node.js: `v24.16.0`");
    expect(markdown).toContain("- Projects: 6");
    expect(markdown).toContain("- Succeeded: 3");
    expect(markdown).toContain("## Failed projects (1)");
    expect(markdown).toContain("## Skipped client-only projects (1)");
    expect(markdown).toContain("Case-only ARM identity duplicates: 2 records across 1 project");
    expect(markdown).toContain(
      "Genuine distinct-resource name clashes: 4 records across 1 project",
    );
    expect(markdown).toContain("`Widget` — case-only");
    expect(markdown).toContain(
      "[`Microsoft.Example/widgets` at `/widgets/{widgetName}`](https://example.test/widget)",
    );
    expect(markdown).toContain(
      "`resource type unavailable` at `/WIDGETS/{name}` — source unavailable",
    );
    expect(markdown).toContain("`Setting` — genuine");
    expect(markdown).toContain(
      "[case](../../case/resource-data/resources.csv) — 1 group, 2 records",
    );
    expect(markdown).toContain("## Duplicate resource errors");
    expect(markdown).toContain("- Records: 3");
    expect(markdown).toContain("- Groups: 2");
    expect(markdown).toContain("- `/widgets/{}`");
    expect(markdown).toContain("[`A` (`Microsoft.Example/widgets`)](https://example.test/a)");
    expect(markdown).toContain("[`B` (`Microsoft.Example/widgets`)](https://example.test/b)");
    expect(markdown).toContain(
      "[duplicate](../../duplicate/resource-data/resources.csv) — 2 groups, 3 records",
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
      schemaVersion: 4,
      generatedAt: "2026-01-01T00:00:00.000Z",
      repository: "Azure/azure-rest-api-specs",
      sourceSha: "abc",
      dependencyLockHash: "lock",
      toolVersion: "1",
      nodeVersion: "v24.16.0",
      compilerVersion: "1.17.0",
      armLibraryVersion: "0.73.0",
      reportDirectory: "resource-data",
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

  it("uses links relative to a dated aggregate report directory", () => {
    const projects = [
      result({
        projectRoot: "specification/example/resource-manager/Microsoft.Example/Example",
        reportDirectory: "Report_20261105",
        duplicateResourceErrorCount: 2,
        duplicateResourceErrorGroupCount: 1,
        duplicateResourceErrorAnalysis: [
          "duplicate ARM resource instance path: /widgets/{}; resource names: A; B",
        ],
        duplicateResourceErrorGroups: [
          {
            normalizedInstancePath: "/widgets/{}",
            resources: [
              {
                resourceName: "A",
                resourceType: "Microsoft.Example/widgets",
                sourceUrl: "https://example.test/a",
              },
              {
                resourceName: "B",
                resourceType: "Microsoft.Example/widgets",
                sourceUrl: "https://example.test/b",
              },
            ],
          },
        ],
        outputHashes: {
          statusJson: "status",
          resourcesCsv: "resources",
          operationsCsv: "operations",
        },
      }),
    ];
    const manifest: Manifest = {
      schemaVersion: 4,
      generatedAt: "2026-11-05T00:00:00.000Z",
      repository: "Azure/azure-rest-api-specs",
      sourceSha: "abc",
      dependencyLockHash: "lock",
      toolVersion: "1.1.0",
      nodeVersion: "v24.16.0",
      compilerVersion: "1.17.0",
      armLibraryVersion: "0.73.0",
      reportDirectory: "Report_20261105",
      summary: createSummary(projects),
      projects,
    };

    const markdown = createReadme(manifest, "Report_20261105");

    expect(markdown).toContain(
      "../../../specification/example/resource-manager/Microsoft.Example/Example/Report_20261105/resources.csv",
    );
    expect(markdown).not.toContain("/resource-data/");
  });
});
