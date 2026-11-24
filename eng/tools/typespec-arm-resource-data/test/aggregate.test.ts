import { describe, expect, it } from "vitest";
import { createReadme, createSummary } from "../src/aggregate.ts";
import {
  targetRuleCode,
  targetRuleDocumentationUrl,
  type Manifest,
  type ProjectResult,
  type TargetRuleDiagnostic,
} from "../src/types.ts";

const finding: TargetRuleDiagnostic = {
  findingId: "NRNC-ABC123",
  code: targetRuleCode,
  severity: "warning",
  message:
    "Resources must have unique names. Resource name 'Widget' is used by both '/widgets/{one}' and '/gadgets/{two}'.",
  sourceFile: "specification/example/resource-manager/Microsoft.Example/main.tsp",
  line: 42,
  column: 5,
  sourceUrl:
    "https://github.com/Azure/azure-rest-api-specs/blob/abc/specification/example/resource-manager/Microsoft.Example/main.tsp#L42",
  projectRoot: "specification/example/resource-manager/Microsoft.Example/Example",
  entrypoint: "specification/example/resource-manager/Microsoft.Example/Example/main.tsp",
  service: "example",
  resourceName: "Widget",
  conflictingInstancePaths: ["/widgets/{one}", "/gadgets/{two}"],
  correlationState: "matched",
  correlatedResources: [
    {
      resourceKey: "microsoft.example/widgets|/widgets/{}",
      resourceType: "Microsoft.Example/widgets",
      resourceInstancePath: "/widgets/{one}",
      resourceName: "Widget",
      resourceDefinition:
        "https://github.com/Azure/azure-rest-api-specs/blob/abc/specification/example/resource-manager/Microsoft.Example/main.tsp#L10",
      authoredSource:
        "https://github.com/Azure/azure-rest-api-specs/blob/abc/specification/example/resource-manager/Microsoft.Example/main.tsp#L10",
      operations: [
        {
          operationKey: "get|/widgets/{}",
          operationName: "get",
          operationVerb: "get",
          operationPath: "/widgets/{one}",
          operationKind: "read",
          operationDefinition:
            "https://github.com/Azure/azure-rest-api-specs/blob/abc/specification/example/resource-manager/Microsoft.Example/main.tsp#L20",
          resourceKey: "microsoft.example/widgets|/widgets/{}",
          resourceType: "Microsoft.Example/widgets",
          resourceInstancePath: "/widgets/{one}",
          resourceName: "Widget",
        },
      ],
    },
  ],
  suggestedFix:
    "Provide a unique explicit logical resource name for the later operation. Do not suppress this rule.",
};

function result(overrides: Partial<ProjectResult> = {}): ProjectResult {
  return {
    service: "example",
    projectRoot: "specification/example/resource-manager/Microsoft.Example/Example",
    entrypoint: "specification/example/resource-manager/Microsoft.Example/Example/main.tsp",
    classification: "main-bearing",
    status: "succeeded-findings",
    resourceCount: 2,
    operationCount: 2,
    diagnosticCount: 1,
    findingCount: 1,
    affectedLogicalNames: ["Widget"],
    correlatedResourceCount: 2,
    matchedDiagnosticCount: 1,
    partialDiagnosticCount: 0,
    unmatchedDiagnosticCount: 0,
    targetDiagnostics: [finding],
    reportDirectory: "Report_20261124_no-resource-name-conflict",
    sourceSha: "abc",
    sourceLockHash: "source-lock",
    reportLockHash: "report-lock",
    projectInputHash: "input",
    toolVersion: "1.5.0",
    toolSourceCommit: "tool",
    compilerVersion: "1.18.0",
    armLibraryVersion: "0.74.0",
    rulesetVersion: "0.74.0",
    diagnostics: { errors: 0, warnings: 1, total: 1 },
    outputHashes: {
      resourcesCsv: "resources",
      operationsCsv: "operations",
      diagnosticsJson: "diagnostics",
      statusJson: "status",
    },
    ...overrides,
  };
}

function manifest(projects: ProjectResult[]): Manifest {
  return {
    schemaVersion: 6,
    repository: "Azure/azure-rest-api-specs",
    sourceSha: "abc",
    sourceTimestamp: "2026-11-24T00:00:00Z",
    generationTimestamp: "2026-11-24T01:00:00Z",
    reportId: "Report_20261124_no-resource-name-conflict",
    sourceLockHash: "source-lock",
    reportLockHash: "report-lock",
    customTool: {
      packageName: "@azure-tools/typespec-arm-resource-data-report",
      packageVersion: "1.5.0",
      referenceCommit: "reference",
      sourceCommit: "tool",
    },
    nodeVersion: "v24.14.1",
    pnpmVersion: "12.6.0",
    compilerVersion: "1.18.0",
    armLibraryVersion: "0.74.0",
    rulesetVersion: "0.74.0",
    targetRule: {
      code: targetRuleCode,
      shortName: "no-resource-name-conflict",
      documentationUrl: targetRuleDocumentationUrl,
      severity: "warning",
      enabledByDefault: true,
      installedPackage: "@azure-tools/typespec-azure-resource-manager@0.74.0",
      verifiedBehaviorCommit: "verified",
    },
    reportDirectory: "Report_20261124_no-resource-name-conflict",
    inventory: {
      configuredTypeSpecProjects: projects.length,
      configuredArmProjects: projects.length,
      discoveredArmProjects: projects.length,
      missingFromReportInventory: [],
      reportOnlyProjects: [],
      explanation: "Inventories match.",
    },
    summary: createSummary(projects),
    aggregateOutputHashes: { readmeMd: "" },
    projects,
  };
}

describe("Markdown aggregation", () => {
  it("uses the required section order and renders actionable correlated findings", () => {
    const markdown = createReadme(manifest([result()]));
    const sections = [
      "## Source, rule, and tool metadata",
      "## Executive summary",
      "## Coverage",
      "## Findings by project",
      "## Unmatched or partially matched diagnostics",
      "## Failed and timed-out projects",
      "## Zero-resource projects",
      "## Skipped client-only projects",
      "## Project directory",
      "## Reproduction",
      "## Limitations",
    ];
    for (let index = 1; index < sections.length; index++) {
      expect(markdown.indexOf(sections[index - 1])).toBeLessThan(markdown.indexOf(sections[index]));
    }
    expect(markdown).toContain("#### NRNC-ABC123");
    expect(markdown).toContain("Logical resource name: `Widget`");
    expect(markdown).toContain("Suggested fix: Provide a unique explicit logical resource name");
    expect(markdown).toContain("read: [`get` (`get /widgets/{one}`)]");
    expect(markdown).toContain(
      "../../../specification/example/resource-manager/Microsoft.Example/Example/Report_20261124_no-resource-name-conflict/diagnostics.json",
    );
  });

  it("keeps incomplete coverage categories separate from clean projects", () => {
    const projects = [
      result({
        status: "succeeded-clean",
        diagnosticCount: 0,
        findingCount: 0,
        affectedLogicalNames: [],
        correlatedResourceCount: 0,
        matchedDiagnosticCount: 0,
        targetDiagnostics: [],
      }),
      result({
        projectRoot: "failed",
        status: "failed-compilation",
        resourceCount: 0,
        operationCount: 0,
        diagnosticCount: 0,
        findingCount: 0,
        affectedLogicalNames: [],
        correlatedResourceCount: 0,
        matchedDiagnosticCount: 0,
        targetDiagnostics: [],
        outputHashes: { statusJson: "status", errorsMd: "errors" },
      }),
      result({
        projectRoot: "client-only",
        classification: "client-only",
        status: "skipped-client-only",
        resourceCount: 0,
        operationCount: 0,
        diagnosticCount: 0,
        findingCount: 0,
        affectedLogicalNames: [],
        correlatedResourceCount: 0,
        matchedDiagnosticCount: 0,
        targetDiagnostics: [],
        outputHashes: { statusJson: "status" },
      }),
    ];
    const summary = createSummary(projects);
    expect(summary).toMatchObject({
      discovered: 3,
      attempted: 2,
      succeeded: 1,
      clean: 1,
      failed: 1,
      skipped: 1,
    });
    expect(createReadme(manifest(projects))).toContain("Coverage is incomplete");
  });
});
