import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  computeFindingGroups,
  computeRollup,
  renderMarkdown,
  validateRollup,
  writeReportFiles,
} from "../src/report.ts";
import type { EvaluationReport, MatchTrace, OadFinding, TypeSpecFinding } from "../src/types.ts";

function report(): EvaluationReport {
  return {
    schemaVersion: 2,
    status: "evaluated",
    complete: true,
    generatedAt: "2026-01-01T00:00:00.000Z",
    pullRequest: {
      owner: "Azure",
      repo: "azure-rest-api-specs",
      number: 1,
      merged: false,
      url: "https://github.com/Azure/azure-rest-api-specs/pull/1",
      baseSha: "b".repeat(40),
      headSha: "a".repeat(40),
      changedTypeSpecFiles: [],
    },
    qualification: { qualified: true, reasonCodes: [], evidence: {} },
    provenance: {
      evaluator: { commit: "e".repeat(40) },
      tool: { sourceSha: "c".repeat(40), artifactDigest: "d".repeat(64) },
    },
    dimensions: [],
    oadFindings: [],
    typeSpecProjects: [],
    matches: [],
    findingGroups: [],
    reproduction: {
      shell: "powershell",
      evaluatorCommit: "e".repeat(40),
      analyzerSourceSha: "c".repeat(40),
      analyzerArtifactDigest: "d".repeat(64),
      prHeadSha: "a".repeat(40),
      prBaseSha: "b".repeat(40),
      setupCommands: [],
      evaluatorCommand: { label: "Evaluate", command: "evaluate" },
      directAnalyzerCommands: [],
    },
    rollup: computeRollup([], [], []),
    errors: [],
  };
}

describe("report aggregation", () => {
  it("recomputes deterministic rollups", () => {
    const value = report();
    expect(() => validateRollup(value)).not.toThrow();
    value.rollup!.oadTotal = 42;
    expect(() => validateRollup(value)).toThrow("does not recompute");
  });

  it("forbids rollups and rates on incomplete reports", () => {
    const value = report();
    value.status = "partial";
    value.complete = false;
    expect(() => validateRollup(value)).toThrow("suppress rollups");
    delete value.rollup;
    expect(() => validateRollup(value)).not.toThrow();
    expect(renderMarkdown(value)).not.toContain("Exact recall");
  });

  it("renders phase execution independently of finding presence", () => {
    const value = report();
    value.typeSpecProjects = [
      {
        project: "specification/foo/Foo",
        status: "complete",
        exitCode: 0,
        comparisonsPerformed: 2,
        versionComparisons: [
          {
            serviceName: "Foo",
            baseVersion: "v1",
            headVersion: "v1",
            phase: "same-version",
            findingCount: 0,
          },
          {
            serviceName: "Foo",
            baseVersion: "v1",
            headVersion: "v2",
            phase: "cross-version",
            findingCount: 0,
          },
        ],
        findings: [],
      },
    ];

    const markdown = renderMarkdown(value);
    expect(markdown).toContain("## TypeSpec phase execution");
    expect(markdown).toContain("| `same-version` | `v1` → `v1` | 1 | 0 |");
    expect(markdown).toContain("| `cross-version` | `v1` → `v2` | 1 | 0 |");
  });

  it("accounts for every category and unconsumed TypeSpec occurrence", () => {
    const oadFindings = Array.from({ length: 6 }, (_, index) => ({
      occurrenceId: `oad-${index}`,
      phase: "B",
      id: String(index),
      rule: "RemovedProperty",
      severity: "Error",
      message: "removed",
      evidence: "{}",
    })) as OadFinding[];
    const typeSpecFindings: TypeSpecFinding[] = ["selected", "unconsumed"].map((occurrenceId) => ({
      occurrenceId,
      project: "specification/foo/Foo",
      kind: "ResponsePropertyRemoved",
      rule: "RemovedResponseProperty",
      phase: "cross-version",
      severity: "error",
      message: "removed",
      versionPair: { baseVersion: "v1", headVersion: "v2" },
    }));
    const categories: MatchTrace["category"][] = [
      "exact",
      "probable-review",
      "informational-oad",
      "intentional-swagger-only",
      "missed-equivalent",
      "ambiguous",
    ];
    const matches: MatchTrace[] = categories.map((category, index) => ({
      oadOccurrenceId: `oad-${index}`,
      target: { evidence: [] },
      targets: [{ evidence: [] }],
      candidates: [],
      selectedTypeSpecOccurrenceIds:
        category === "exact" || category === "probable-review" ? ["selected"] : [],
      category,
      reviewRequired: category === "probable-review",
    }));

    expect(computeRollup(oadFindings, typeSpecFindings, matches)).toEqual({
      oadTotal: 5,
      oadInformational: 1,
      typeSpecTotal: 2,
      exact: 1,
      probableReview: 1,
      intentionalSwaggerOnly: 1,
      missedEquivalent: 1,
      typeSpecOnly: 1,
      ambiguous: 1,
      errors: 0,
      exactRecall: 0.25,
      probableInclusiveRecall: 0.5,
      byPhase: {
        A: {
          oadTotal: 0,
          oadInformational: 0,
          typeSpecTotal: 0,
          exact: 0,
          probableReview: 0,
          intentionalSwaggerOnly: 0,
          missedEquivalent: 0,
          typeSpecOnly: 0,
          ambiguous: 0,
          errors: 0,
          exactRecall: 1,
          probableInclusiveRecall: 1,
        },
        B: {
          oadTotal: 5,
          oadInformational: 1,
          typeSpecTotal: 2,
          exact: 1,
          probableReview: 1,
          intentionalSwaggerOnly: 1,
          missedEquivalent: 1,
          typeSpecOnly: 1,
          ambiguous: 1,
          errors: 0,
          exactRecall: 0.25,
          probableInclusiveRecall: 0.5,
        },
      },
    });
  });

  it("aggregates OAD and TypeSpec findings by corresponding phase", () => {
    const oadFindings: OadFinding[] = [
      {
        occurrenceId: "oad-a",
        phase: "A",
        id: "a",
        rule: "AddedPath",
        severity: "Info",
        message: "added",
        evidence: "{}",
      },
      {
        occurrenceId: "oad-b",
        phase: "B",
        id: "b",
        rule: "RemovedProperty",
        severity: "Error",
        message: "removed",
        evidence: "{}",
      },
    ];
    const typeSpecFindings: TypeSpecFinding[] = [
      {
        occurrenceId: "tsp-a",
        project: "specification/foo/Foo",
        kind: "OperationAdded",
        rule: "operation-added",
        phase: "same-version",
        severity: "error",
        message: "added",
        versionPair: { baseVersion: "v1", headVersion: "v1" },
      },
      {
        occurrenceId: "tsp-b",
        project: "specification/foo/Foo",
        kind: "ResponsePropertyRemoved",
        rule: "response-property-removed",
        phase: "cross-version",
        severity: "error",
        message: "removed",
        versionPair: { baseVersion: "v1", headVersion: "v2" },
      },
    ];
    const matches: MatchTrace[] = [
      {
        oadOccurrenceId: "oad-a",
        target: { phase: "A", evidence: [] },
        targets: [{ phase: "A", evidence: [] }],
        candidates: [],
        selectedTypeSpecOccurrenceIds: ["tsp-a"],
        category: "exact",
        reviewRequired: false,
      },
      {
        oadOccurrenceId: "oad-b",
        target: { phase: "B", evidence: [] },
        targets: [{ phase: "B", evidence: [] }],
        candidates: [],
        selectedTypeSpecOccurrenceIds: ["tsp-b"],
        category: "probable-review",
        reviewRequired: true,
      },
    ];

    const rollup = computeRollup(oadFindings, typeSpecFindings, matches);
    expect(rollup.byPhase.A).toMatchObject({
      oadTotal: 1,
      typeSpecTotal: 1,
      exact: 1,
      probableReview: 0,
      typeSpecOnly: 0,
    });
    expect(rollup.byPhase.B).toMatchObject({
      oadTotal: 1,
      typeSpecTotal: 1,
      exact: 0,
      probableReview: 1,
      typeSpecOnly: 0,
    });
  });

  it("links each phase rollup to its independent OAD check execution", () => {
    const value = report();
    value.qualification.evidence.runs = {
      A: {
        id: 100,
        name: "Swagger BreakingChange - Analyze Code",
        headSha: "a".repeat(40),
        status: "completed",
        conclusion: "success",
        htmlUrl: "https://github.com/Azure/azure-rest-api-specs/actions/runs/100",
      },
      B: {
        id: 200,
        name: "Breaking Change(Cross-Version) - Analyze Code",
        headSha: "a".repeat(40),
        status: "completed",
        conclusion: "success",
        htmlUrl: "https://github.com/Azure/azure-rest-api-specs/actions/runs/200",
      },
    };

    const markdown = renderMarkdown(value);
    expect(markdown).toContain(
      "[Swagger Breaking Change run 100](https://github.com/Azure/azure-rest-api-specs/actions/runs/100)",
    );
    expect(markdown).toContain(
      "[Breaking Change (Cross-Version) run 200](https://github.com/Azure/azure-rest-api-specs/actions/runs/200)",
    );
  });

  it("requires exactly one category per OAD occurrence", () => {
    const value = report();
    value.oadFindings = [
      {
        occurrenceId: "oad-1",
        phase: "B",
        id: "1",
        rule: "RemovedProperty",
        severity: "Error",
        message: "removed",
        evidence: "{}",
        detectorEvidence: {
          label: "Swagger workflow",
          url: "https://github.com/Azure/azure-rest-api-specs/actions/runs/1",
        },
        sources: [
          {
            revision: "head",
            unavailableReason: "fixture has no source",
          },
        ],
      },
    ];
    value.rollup = computeRollup(value.oadFindings, [], []);
    expect(() => validateRollup(value)).toThrow("exactly one match category");
  });

  it("renders review-required probable matches separately", () => {
    const value = report();
    value.rollup!.probableReview = 1;
    expect(renderMarkdown(value)).toContain("Probable (review required)");
    expect(renderMarkdown(value)).toContain("Exact recall");
  });

  it("renders review evidence and TypeSpec-only finding details", () => {
    const value = report();
    const finding: OadFinding = {
      occurrenceId: "oad-gap",
      phase: "A",
      id: "gap",
      rule: "ChangedParameterOrder",
      severity: "Error",
      message: "Parameter order changed",
      evidence: "{}",
    };
    const typeSpecFinding: TypeSpecFinding = {
      occurrenceId: "tsp-only",
      project: "specification/foo/Foo",
      kind: "OperationAdded",
      rule: "OperationAdded",
      phase: "same-version",
      severity: "error",
      message: "Operation added",
      operation: { method: "GET", path: "/widgets" },
      versionPair: { baseVersion: "v1", headVersion: "v1" },
    };
    value.oadFindings = [finding];
    value.typeSpecProjects = [
      { project: typeSpecFinding.project, status: "complete", findings: [typeSpecFinding] },
    ];
    value.matches = [
      {
        oadOccurrenceId: finding.occurrenceId,
        target: { evidence: ["No target"] },
        targets: [{ evidence: ["No target"] }],
        candidates: [],
        selectedTypeSpecOccurrenceIds: [],
        category: "intentional-swagger-only",
        reviewRequired: false,
      },
    ];
    value.rollup = computeRollup(value.oadFindings, [typeSpecFinding], value.matches);
    value.findingGroups = computeFindingGroups(value.oadFindings, [typeSpecFinding], value.matches);

    const markdown = renderMarkdown(value);
    expect(markdown).toContain("Intentional Swagger-only coverage gaps");
    expect(markdown).toContain("Findings missing from the Swagger detector");
    expect(markdown).toContain("GET /widgets");
  });

  it("groups matches by correlation pair and unmatched findings by detector type", () => {
    const oadFindings = [
      {
        occurrenceId: "oad-exact",
        phase: "A",
        id: "1",
        rule: "AddedPath",
        severity: "Info",
        message: "path added",
        evidence: "{}",
      },
      {
        occurrenceId: "oad-missed",
        phase: "B",
        id: "2",
        rule: "RemovedProperty",
        severity: "Error",
        message: "property removed",
        evidence: "{}",
      },
    ] as OadFinding[];
    const typeSpecFindings: TypeSpecFinding[] = [
      {
        occurrenceId: "tsp-match",
        project: "specification/foo/Foo",
        kind: "OperationAdded",
        rule: "phase-a-any-change",
        phase: "same-version",
        severity: "error",
        message: "added",
        versionPair: { baseVersion: "v1", headVersion: "v1" },
      },
      {
        occurrenceId: "tsp-only",
        project: "specification/foo/Foo",
        kind: "ResponsePropertyRemoved",
        rule: "removed-response-property",
        phase: "cross-version",
        severity: "error",
        message: "removed",
        versionPair: { baseVersion: "v1", headVersion: "v2" },
      },
    ];
    const matches: MatchTrace[] = [
      {
        oadOccurrenceId: "oad-exact",
        target: { evidence: [] },
        targets: [{ evidence: [] }],
        candidates: [],
        selectedTypeSpecOccurrenceIds: ["tsp-match"],
        category: "exact",
        reviewRequired: false,
      },
      {
        oadOccurrenceId: "oad-missed",
        target: { evidence: [] },
        targets: [{ evidence: [] }],
        candidates: [],
        selectedTypeSpecOccurrenceIds: [],
        category: "missed-equivalent",
        reviewRequired: false,
      },
    ];

    expect(computeFindingGroups(oadFindings, typeSpecFindings, matches)).toEqual([
      {
        category: "exact",
        key: "AddedPath → OperationAdded",
        swaggerRule: "AddedPath",
        typeSpecKind: "OperationAdded",
        oadOccurrenceIds: ["oad-exact"],
        typeSpecOccurrenceIds: ["tsp-match"],
      },
      {
        category: "missed-equivalent",
        key: "RemovedProperty",
        swaggerRule: "RemovedProperty",
        typeSpecKind: undefined,
        oadOccurrenceIds: ["oad-missed"],
        typeSpecOccurrenceIds: [],
      },
      {
        category: "typespec-only",
        key: "ResponsePropertyRemoved",
        swaggerRule: undefined,
        typeSpecKind: "ResponsePropertyRemoved",
        oadOccurrenceIds: [],
        typeSpecOccurrenceIds: ["tsp-only"],
      },
    ]);
  });

  it("writes byte-equivalent normalized JSON for fixed report input", async () => {
    const directory = await mkdtemp(join(tmpdir(), "evaluator-report-"));
    try {
      const first = join(directory, "first.json");
      const second = join(directory, "second.json");
      await writeReportFiles(report(), first, join(directory, "first.md"));
      await writeReportFiles(report(), second, join(directory, "second.md"));
      await expect(readFile(first, "utf8")).resolves.toBe(await readFile(second, "utf8"));
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });
});
