import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { renderMarkdownSummary } from "../src/reporting/reporter-markdown.js";

function createLocation(filePath, line) {
  const lines = Array.from({ length: line }, (_, index) => `line ${index + 1}`);
  const pos = lines.slice(0, line - 1).join("\n").length + (line > 1 ? 1 : 0);
  return {
    file: {
      path: filePath,
      text: lines.join("\n"),
    },
    pos,
    end: pos + 1,
  };
}

function createResult(phase, suppressed = false) {
  const sourceLocation = createLocation(
    "/workspace/specification/contoso/employee.tsp",
    24,
  );
  return {
    findings: [
      {
        diff: {
          kind: "ResourcePropertyRemoved",
          identity: {
            element: "body.properties.properties.city",
          },
          baseSourceLocation: sourceLocation,
          origin: {
            declarationPath: "Contoso.EmployeeProperties.city",
            sourceLocation,
          },
          message: "Resource property was removed",
        },
        severity: "error",
        phase,
        suppressed,
        suppressionReason: suppressed ? "Reviewed exception" : undefined,
        versionPair: {
          baseVersion: "2024-01-01",
          headVersion: "2025-01-01",
          phase,
        },
      },
    ],
    timing: {
      compileBaseMs: 0,
      compileHeadMs: 0,
      versionMutatorsMs: 1,
      canonicalizeMs: 0,
      identityMatchingMs: 0,
      diffEngineMs: 1,
      classifyMs: 1,
      suppressMs: 0,
      reportMs: 0,
      totalMs: 3,
    },
    summary: {
      servicesAnalyzed: 1,
      comparisonsPerformed: 1,
      phase,
      versionComparisons: [
        {
          serviceName: "Contoso",
          baseVersion: "2024-01-01",
          headVersion: "2025-01-01",
          phase,
          findingCount: 1,
        },
      ],
    },
  };
}

const options = {
  githubRepository: "markcowl/azure-rest-api-specs",
  githubSha: "abc123",
  workspacePath: "/workspace",
};

describe("renderMarkdownSummary", () => {
  it("renders an actionable cross-version table with strict guidance", () => {
    const report = renderMarkdownSummary(createResult("cross-version"), options);

    assert.match(report, /Breaking API changes must be avoided and should be rare/);
    assert.match(report, /Breaking Changes Requiring Action/);
    assert.match(report, /Suggested fix \(ONLY add if break is approved\)/);
    assert.match(report, /employee\.tsp#L24/);
    assert.match(report, /2024-01-01 → 2025-01-01/);
    assert.doesNotMatch(report, /\| `body\.properties\.properties\.city` \|/);
  });

  it("renders the same table structure with versioning-specific guidance", () => {
    const report = renderMarkdownSummary(createResult("same-version"), {
      ...options,
      reportTitle: "TypeSpec Versioning Change Analysis",
    });

    assert.match(report, /Existing API versions must remain immutable/);
    assert.match(report, /Unversioned Changes Requiring Action/);
    assert.match(report, /2025-01-01 \(base → head\)/);
    assert.match(report, /@approvedUnversionedChange/);
  });

  it("distinguishes suppressions already present in the pull request", () => {
    const report = renderMarkdownSummary(createResult("cross-version", true), options);

    assert.match(report, /1 suppressed breaking change requires review/);
    assert.match(report, /Suppressed Breaking Changes Requiring Review/);
    assert.match(report, /does not make an API change acceptable/);
    assert.match(report, /Justification in PR/);
    assert.doesNotMatch(report, /Suggested fix \(ONLY add if break is approved\)/);
  });
});
