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
    schemaVersion: 4,
    schema: {
      name: "azure-rest-api-specs/breaking-change-evaluator",
      version: 4,
      compatibility: ">=4 <5",
    },
    run: {
      id: "test-run",
      datasetId: "test-dataset",
      reportId: "test-run:pr-1:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    },
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
    issueAnalyses: [],
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
  it("counts actionable errors only", () => {
    const errorOad: OadFinding = {
      occurrenceId: "oad-error",
      phase: "B",
      id: "1",
      rule: "RemovedProperty",
      severity: "Error",
      message: "removed",
      evidence: "{}",
    };
    const warningOad: OadFinding = {
      ...errorOad,
      occurrenceId: "oad-warning",
      severity: "Warning",
    };
    const errorTypeSpec: TypeSpecFinding = {
      occurrenceId: "tsp-error",
      project: "specification/foo/Foo",
      kind: "ResponsePropertyRemoved",
      rule: "RemovedResponseProperty",
      phase: "cross-version",
      severity: "error",
      message: "removed",
      versionPair: { baseVersion: "v1", headVersion: "v2" },
    };
    const ignoredTypeSpec: TypeSpecFinding = {
      ...errorTypeSpec,
      occurrenceId: "tsp-ignore",
      severity: "ignore",
    };
    const suppressedTypeSpec: TypeSpecFinding = {
      ...errorTypeSpec,
      occurrenceId: "tsp-suppressed",
      suppressed: true,
    };
    const matches: MatchTrace[] = [
      {
        oadOccurrenceId: "oad-error",
        target: { evidence: [] },
        targets: [{ evidence: [] }],
        candidates: [],
        selectedTypeSpecOccurrenceIds: ["tsp-error"],
        category: "exact",
        reviewRequired: false,
      },
      {
        oadOccurrenceId: "oad-warning",
        target: { evidence: [] },
        targets: [{ evidence: [] }],
        candidates: [],
        selectedTypeSpecOccurrenceIds: ["tsp-ignore"],
        category: "exact",
        reviewRequired: false,
      },
    ];

    expect(
      computeRollup(
        [errorOad, warningOad],
        [errorTypeSpec, ignoredTypeSpec, suppressedTypeSpec],
        matches,
      ),
    ).toMatchObject({
      oadTotal: 1,
      typeSpecTotal: 1,
      exact: 1,
      typeSpecOnly: 0,
    });
  });

  it("rejects non-actionable findings in schema v4 reports", () => {
    const value = report();
    value.typeSpecProjects = [
      {
        project: "specification/foo/Foo",
        status: "complete",
        findings: [
          {
            occurrenceId: "tsp-ignore",
            project: "specification/foo/Foo",
            kind: "OperationAdded",
            rule: "OperationAdded",
            phase: "cross-version",
            severity: "ignore",
            message: "added",
            versionPair: { baseVersion: "v1", headVersion: "v2" },
          },
        ],
      },
    ];
    expect(() => validateRollup(value)).toThrow("actionable errors only");
  });

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
    expect(markdown).toContain("| Phase A (`same-version`) | `v1` → `v1` | 1 | 0 |");
    expect(markdown).toContain("| Phase B (`cross-version`) | `v1` → `v2` | 1 | 0 |");
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
          exactRecall: undefined,
          probableInclusiveRecall: undefined,
          outcome: "concordant-zero",
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
          outcome: "compared",
        },
      },
      errorEquivalence: {
        A: {
          oadErrors: 0,
          typeSpecErrors: 0,
          matchedErrorOad: 0,
          matchedErrorTypeSpec: 0,
          oadErrorMatchedToTypeSpecNonError: 0,
          typeSpecErrorMatchedToOadNonError: 0,
          oadErrorsWithoutEquivalent: 0,
          typeSpecErrorsWithoutEquivalent: 0,
        },
        B: {
          oadErrors: 6,
          typeSpecErrors: 2,
          matchedErrorOad: 2,
          matchedErrorTypeSpec: 1,
          oadErrorMatchedToTypeSpecNonError: 0,
          typeSpecErrorMatchedToOadNonError: 0,
          oadErrorsWithoutEquivalent: 4,
          typeSpecErrorsWithoutEquivalent: 1,
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
        severity: "Error",
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
      outcome: "compared",
    });
    expect(rollup.byPhase.B).toMatchObject({
      oadTotal: 1,
      typeSpecTotal: 1,
      exact: 0,
      probableReview: 1,
      typeSpecOnly: 0,
      outcome: "compared",
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
    expect(markdown).toContain("| A |");
    expect(markdown).toContain("| `same-version` | concordant-zero |");
    expect(markdown).toContain("| B |");
    expect(markdown).toContain("| `cross-version` | concordant-zero |");
    expect(markdown).toContain("| N/A | N/A |");
  });

  it("calls out TypeSpec-only divergence when OAD is zero", () => {
    const value = report();
    value.typeSpecProjects = [
      {
        project: "specification/foo/Foo",
        status: "complete",
        findings: [
          {
            occurrenceId: "tsp-b",
            project: "specification/foo/Foo",
            kind: "OperationAdded",
            rule: "operation-added",
            phase: "cross-version",
            severity: "error",
            message: "added",
            versionPair: { baseVersion: "v1", headVersion: "v2" },
          },
        ],
      },
    ];
    value.rollup = computeRollup([], value.typeSpecProjects[0].findings, []);

    const markdown = renderMarkdown(value);
    expect(value.rollup.byPhase.B.outcome).toBe("typespec-only-divergence");
    expect(markdown).toContain("| `cross-version` | typespec-only-divergence |");
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
    expect(renderMarkdown(value)).toContain("Exact OAD coverage");
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
    expect(markdown).toContain("### Intentional Swagger-only gaps");
    expect(markdown).toContain("### TypeSpec-only findings");
    expect(markdown).toContain("GET /widgets");
    expect(markdown).toContain("[details](#finding-oad-gap)");
    expect(markdown).toContain("[details](#finding-typespec-tsp-only)");
  });

  it("does not count semantic matches to non-error TypeSpec findings", () => {
    const oad: OadFinding = {
      occurrenceId: "oad-error",
      phase: "A",
      id: "1",
      rule: "AddedPath",
      severity: "Error",
      message: "path added",
      evidence: "{}",
      detectorEvidence: { label: "OAD run", url: "https://example.test/oad" },
      sources: [
        {
          revision: "head",
          path: "specification/foo/openapi.json",
          line: 10,
          url: "https://example.test/openapi.json#L10",
        },
      ],
    };
    const typeSpec: TypeSpecFinding = {
      occurrenceId: "tsp-warning",
      project: "specification/foo/Foo",
      kind: "OperationAdded",
      rule: "phase-a-any-change",
      phase: "same-version",
      severity: "warning",
      suppressed: false,
      message: "operation added",
      operation: { method: "GET", path: "/widgets" },
      versionPair: { baseVersion: "v1", headVersion: "v1" },
      detectorEvidence: {
        label: "TypeSpec Phase A analyzer report",
        url: "report-artifacts/typespec/phase-a.md",
        digest: "a".repeat(64),
      },
      source: {
        revision: "head",
        path: "specification/foo/main.tsp",
        line: 20,
        url: "https://example.test/main.tsp#L20",
      },
    };
    const matches: MatchTrace[] = [
      {
        oadOccurrenceId: oad.occurrenceId,
        target: { phase: "A", method: "GET", route: "/widgets", evidence: [] },
        targets: [{ phase: "A", method: "GET", route: "/widgets", evidence: [] }],
        candidates: [
          {
            typeSpecOccurrenceId: typeSpec.occurrenceId,
            target: { phase: "A", method: "GET", route: "/widgets", evidence: [] },
            score: 12,
            exactIdentity: ["method", "route"],
            scoreEvidence: ["version pair"],
            rejectionReasons: [],
          },
        ],
        selectedTypeSpecOccurrenceIds: [typeSpec.occurrenceId],
        category: "exact",
        reviewRequired: false,
      },
    ];

    const rollup = computeRollup([oad], [typeSpec], matches);
    expect(rollup.byPhase.A).toMatchObject({
      oadTotal: 1,
      typeSpecTotal: 0,
      exact: 0,
      missedEquivalent: 1,
      typeSpecOnly: 0,
    });
    expect(rollup.errorEquivalence.A).toMatchObject({
      oadErrors: 1,
      typeSpecErrors: 0,
      oadErrorsWithoutEquivalent: 1,
    });
  });

  it("clusters repeated issue analyses while preserving every issue anchor", () => {
    const value = report();
    value.issueAnalyses = ["one", "two"].map((suffix, index) => ({
      id: `issue-${suffix}`,
      affectedPrs: [1],
      phases: ["A"],
      findingIds: [`finding-${index}`],
      category: "oad-only",
      conclusion: "requires-review",
      confidence: "high",
      rationale: "Declaration identity was not retained.",
      evidence: [
        {
          kind: "oad-finding",
          id: `finding-${index}`,
          detail: `Finding ${index}`,
        },
      ],
      aggregateImpact: "The findings share one matching defect.",
      suggestedFix: "Persist declaration identity and rematch.",
      status: "generated",
    }));

    const markdown = renderMarkdown(value);
    expect(markdown).toContain("Issue cluster");
    expect(markdown).toContain("`issue-one` (+1 related)");
    expect(markdown).toContain('<a id="issue-one"></a>');
    expect(markdown).toContain('<a id="issue-two"></a>');
    expect(markdown).toContain("| 2 | A | `oad-only` |");
    expect(markdown.match(/Declaration identity was not retained\./g)).toHaveLength(1);
  });

  it("renders ambiguous candidates and qualification failures as primary review tables", () => {
    const ambiguous = report();
    const oad: OadFinding = {
      occurrenceId: "oad-ambiguous",
      phase: "B",
      id: "1",
      rule: "RemovedProperty",
      severity: "Error",
      message: "property removed",
      evidence: "{}",
      sources: [{ revision: "head", unavailableReason: "fixture source unavailable" }],
    };
    const candidates: TypeSpecFinding[] = [
      {
        occurrenceId: "candidate-one",
        project: "specification/foo/Foo",
        kind: "ResponsePropertyRemoved",
        rule: "removed-response-property",
        phase: "cross-version",
        severity: "error",
        message: "response property removed",
        versionPair: { baseVersion: "v1", headVersion: "v2" },
        source: { revision: "head", unavailableReason: "fixture source unavailable" },
      },
      {
        occurrenceId: "candidate-two",
        project: "specification/foo/Foo",
        kind: "ResourcePropertyRemoved",
        rule: "removed-resource-property",
        phase: "cross-version",
        severity: "error",
        message: "resource property removed",
        versionPair: { baseVersion: "v1", headVersion: "v2" },
        source: { revision: "head", unavailableReason: "fixture source unavailable" },
      },
    ];
    ambiguous.oadFindings = [oad];
    ambiguous.typeSpecProjects = [
      { project: "specification/foo/Foo", status: "complete", findings: candidates },
    ];
    ambiguous.matches = [
      {
        oadOccurrenceId: oad.occurrenceId,
        target: { phase: "B", schema: "Widget", propertyPath: ["mode"], evidence: [] },
        targets: [{ phase: "B", schema: "Widget", propertyPath: ["mode"], evidence: [] }],
        candidates: candidates.map((candidate) => ({
          typeSpecOccurrenceId: candidate.occurrenceId,
          target: { phase: "B", schema: "Widget", propertyPath: ["mode"], evidence: [] },
          score: 12,
          exactIdentity: ["schema", "property path"],
          scoreEvidence: [],
          rejectionReasons: [],
        })),
        selectedTypeSpecOccurrenceIds: [],
        category: "ambiguous",
        reviewRequired: true,
      },
    ];
    ambiguous.rollup = computeRollup(ambiguous.oadFindings, candidates, ambiguous.matches);
    ambiguous.findingGroups = computeFindingGroups(
      ambiguous.oadFindings,
      candidates,
      ambiguous.matches,
    );
    const ambiguousMarkdown = renderMarkdown(ambiguous);
    expect(ambiguousMarkdown).toContain("### Ambiguous findings");
    expect(ambiguousMarkdown).toContain("Competing TypeSpec candidates");
    expect(ambiguousMarkdown).toContain("ResponsePropertyRemoved");
    expect(ambiguousMarkdown).toContain("ResourcePropertyRemoved");

    const notQualified = report();
    notQualified.status = "not-qualified";
    notQualified.complete = false;
    delete notQualified.rollup;
    notQualified.qualification = {
      qualified: false,
      reasonCodes: ["missing-phase-a-run"],
      evidence: {
        prUrl: "https://example.test/pull/1",
        runs: {
          B: {
            id: 20,
            name: "Cross-Version",
            headSha: "a".repeat(40),
            status: "completed",
            conclusion: "success",
            htmlUrl: "https://example.test/actions/20",
          },
        },
      },
    };
    const qualificationMarkdown = renderMarkdown(notQualified);
    expect(qualificationMarkdown).toContain("### Evidence and execution failures");
    expect(qualificationMarkdown).toContain("`missing-phase-a-run`");
    expect(qualificationMarkdown).toContain("[workflow 20](https://example.test/actions/20)");
    expect(qualificationMarkdown).toContain("[details](#qualification-error-1)");
  });

  it("groups matches by correlation pair and unmatched findings by detector type", () => {
    const oadFindings = [
      {
        occurrenceId: "oad-exact",
        phase: "A",
        id: "1",
        rule: "AddedPath",
        severity: "Error",
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
      const value = report();
      value.errors.push(
        "Analyzer failed in C:\\Users\\example\\checkout, C:/Users/example/checkout, /home/example/checkout, and file:///home/example/checkout",
      );
      await writeReportFiles(value, first, join(directory, "first.md"));
      await writeReportFiles(value, second, join(directory, "second.md"));
      await expect(readFile(first, "utf8")).resolves.toBe(await readFile(second, "utf8"));
      await expect(readFile(first, "utf8")).resolves.not.toMatch(/C:[\\/]Users|\/home\//);
      await expect(readFile(first, "utf8")).resolves.toContain(
        "https://github.com/Azure/azure-rest-api-specs/pull/1",
      );
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });
});
