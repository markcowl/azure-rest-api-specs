import { describe, expect, it } from "vitest";
import { enrichOadFindingEvidence, normalizeTypeSpecFindingEvidence } from "../src/evidence.ts";
import type { OadFinding, PullRequestDetails, TypeSpecFinding } from "../src/types.ts";

const details: PullRequestDetails = {
  owner: "Azure",
  repo: "azure-rest-api-specs",
  number: 123,
  title: "Test PR",
  author: "contributor",
  state: "open",
  merged: false,
  url: "https://github.com/Azure/azure-rest-api-specs/pull/123",
  baseBranch: "main",
  headBranch: "feature",
  baseSha: "b".repeat(40),
  headSha: "a".repeat(40),
  changedTypeSpecFiles: ["specification/foo/Foo/main.tsp"],
};

function typeSpecFinding(file: string): TypeSpecFinding {
  return {
    occurrenceId: "tsp-1",
    project: "specification/foo/Foo",
    kind: "OperationRemoved",
    rule: "operation-removed",
    phase: "same-version",
    severity: "error",
    message: "removed",
    versionPair: { baseVersion: "v1", headVersion: "v1" },
    location: { file, line: 42 },
  };
}

describe("finding evidence", () => {
  it("normalizes head and base temporary TypeSpec locations to immutable permalinks", () => {
    const checkout = "C:\\Temp\\breaking-change-evaluation-1\\repo";
    const head = normalizeTypeSpecFindingEvidence(
      typeSpecFinding(`${checkout}\\specification\\foo\\Foo\\main.tsp`),
      checkout,
      details,
      "c".repeat(40),
    );
    const base = normalizeTypeSpecFindingEvidence(
      typeSpecFinding(
        "C:\\Temp\\typespec-breaking-change-base-123\\specification\\foo\\Foo\\main.tsp",
      ),
      checkout,
      details,
      "c".repeat(40),
    );

    expect(head.location).toEqual({
      file: "specification/foo/Foo/main.tsp",
      line: 42,
    });
    expect(head.source).toMatchObject({
      revision: "head",
      url: `https://github.com/Azure/azure-rest-api-specs/blob/${"a".repeat(40)}/specification/foo/Foo/main.tsp#L42`,
    });
    expect(base.source).toMatchObject({
      revision: "base",
      url: `https://github.com/Azure/azure-rest-api-specs/blob/${"b".repeat(40)}/specification/foo/Foo/main.tsp#L42`,
    });
  });

  it("records a structured unavailable reason for dependency locations", () => {
    const checkout = "C:\\Temp\\breaking-change-evaluation-1\\repo";
    const finding = normalizeTypeSpecFindingEvidence(
      typeSpecFinding(`${checkout}\\node_modules\\library\\lib.tsp`),
      checkout,
      details,
      "c".repeat(40),
    );

    expect(finding.location).toBeUndefined();
    expect(finding.source?.revision).toBe("head");
    expect(finding.source?.unavailableReason).toContain("installed dependency");
  });

  it("records a structured unavailable reason when the analyzer omits a location", () => {
    const finding = typeSpecFinding("unused");
    delete finding.location;
    expect(
      normalizeTypeSpecFindingEvidence(finding, "C:\\Temp\\repo", details, "c".repeat(40)).source,
    ).toEqual({
      revision: "head",
      unavailableReason: "The TypeSpec analyzer did not report a source location",
    });
  });

  it("attaches workflow evidence and old/new Swagger source links", () => {
    const finding: OadFinding = {
      occurrenceId: "A-oad-1",
      phase: "A",
      id: "1",
      rule: "AddedPath",
      severity: "Info",
      message: "added",
      oldJsonPath: "$.paths.old",
      newJsonPath: "$.paths.new",
      comparison: {
        phase: "A",
        oldPath: "/tmp/base/specification/foo/stable/v1/openapi.json",
        newPath: "specification/foo/stable/v1/openapi.json",
      },
      evidence: JSON.stringify({
        old: { location: "file:///tmp/base/specification/foo/stable/v1/openapi.json:10:1" },
        new: { location: "file:///tmp/head/specification/foo/stable/v1/openapi.json:20:1" },
      }),
    };

    const enriched = enrichOadFindingEvidence(
      finding,
      details,
      "https://github.com/Azure/azure-rest-api-specs/actions/runs/1",
      "d".repeat(64),
    );

    expect(enriched.detectorEvidence).toMatchObject({
      url: "https://github.com/Azure/azure-rest-api-specs/actions/runs/1",
      digest: "d".repeat(64),
    });
    expect(enriched.sources?.[0]).toMatchObject({
      revision: "base",
      line: 10,
      jsonPath: "$.paths.old",
    });
    expect(enriched.sources?.[0].url).toContain(`/blob/${"b".repeat(40)}/specification/foo/`);
    expect(enriched.sources?.[1]).toMatchObject({
      revision: "head",
      line: 20,
      jsonPath: "$.paths.new",
    });
    expect(enriched.sources?.[1].url).toContain(`/blob/${"a".repeat(40)}/specification/foo/`);
  });
});
