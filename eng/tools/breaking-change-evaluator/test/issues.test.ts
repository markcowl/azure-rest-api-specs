import { describe, expect, it } from "vitest";
import { applyIssueAnalysisOverlays, generateIssueAnalyses } from "../src/issues.ts";
import type { EvaluationReport, TypeSpecFinding } from "../src/types.ts";

function report(findings: TypeSpecFinding[]): EvaluationReport {
  return {
    schemaVersion: 3,
    schema: {
      name: "azure-rest-api-specs/breaking-change-evaluator",
      version: 3,
      compatibility: ">=3 <4",
    },
    run: {
      id: "weekly-fixed",
      datasetId: "weekly",
      reportId: `weekly-fixed:pr-1:${"a".repeat(40)}`,
    },
    status: "partial",
    complete: false,
    generatedAt: "2026-10-14T00:00:00.000Z",
    pullRequest: {
      owner: "Azure",
      repo: "azure-rest-api-specs",
      number: 1,
      merged: true,
      url: "https://github.com/Azure/azure-rest-api-specs/pull/1",
      baseSha: "b".repeat(40),
      headSha: "a".repeat(40),
      changedTypeSpecFiles: ["specification/foo/main.tsp"],
    },
    qualification: { qualified: true, reasonCodes: [], evidence: {} },
    provenance: {},
    dimensions: [],
    oadFindings: [],
    typeSpecProjects: [
      {
        project: "specification/foo",
        status: "complete",
        versionComparisons: [
          {
            serviceName: "Foo",
            baseVersion: "v1",
            headVersion: "v2",
            phase: "cross-version",
            findingCount: 0,
          },
        ],
        findings,
      },
    ],
    matches: [],
    findingGroups: [],
    issueAnalyses: [],
    errors: [],
  };
}

describe("tentative issue analyses", () => {
  it("detects reciprocal Phase A findings and their false Phase B trigger", () => {
    const common = {
      project: "specification/foo",
      rule: "type-change",
      phase: "same-version",
      severity: "error",
      message: "changed",
      element: "Foo.value",
      versionPair: { baseVersion: "v2", headVersion: "v2" },
    };
    const findings: TypeSpecFinding[] = [
      {
        ...common,
        occurrenceId: "narrowed",
        kind: "ResponsePropertyTypeNarrowed",
      },
      {
        ...common,
        occurrenceId: "widened",
        kind: "ResponsePropertyTypeWidened",
      },
    ];

    const analyses = generateIssueAnalyses(report(findings));
    expect(analyses.map((analysis) => analysis.category)).toEqual(
      expect.arrayContaining([
        "reciprocal-narrowed-widened-pair",
        "false-phase-a-triggered-phase-b",
        "typespec-only",
      ]),
    );
    expect(analyses.every((analysis) => analysis.id.startsWith("issue-"))).toBe(true);
  });

  it("applies review overlays without changing evidence fields", () => {
    const generated = generateIssueAnalyses(report([]));
    const issue = generated.find((analysis) => analysis.category === "compile-runtime-failure");
    expect(issue).toBeUndefined();

    const withFinding = generateIssueAnalyses(
      report([
        {
          occurrenceId: "only",
          project: "specification/foo",
          kind: "OperationAdded",
          rule: "added",
          phase: "same-version",
          severity: "error",
          message: "added",
          versionPair: { baseVersion: "v1", headVersion: "v1" },
        },
      ]),
    );
    const target = withFinding.find((analysis) => analysis.category === "typespec-only")!;
    const overlaid = applyIssueAnalysisOverlays(withFinding, [
      {
        id: target.id,
        conclusion: "likely-expected-difference",
        status: "reviewed",
        reviewedBy: "maintainer",
      },
    ]);
    const reviewed = overlaid.find((analysis) => analysis.id === target.id)!;
    expect(reviewed.conclusion).toBe("likely-expected-difference");
    expect(reviewed.status).toBe("reviewed");
    expect(reviewed.evidence).toEqual(target.evidence);
    expect(reviewed.findingIds).toEqual(target.findingIds);
  });
});
