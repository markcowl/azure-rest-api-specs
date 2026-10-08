import { describe, expect, it } from "vitest";
import { OadEvidenceIncompleteError, parseOadLog, validateJobSummary } from "../src/oad.ts";

const message = {
  id: "BC001",
  code: "RemovedProperty",
  docUrl: "https://example.test",
  message: "Property was removed",
  mode: "Removal",
  type: "Error",
  old: { path: "$.definitions.Widget.properties.name" },
  new: { path: "$.definitions.Widget" },
};

describe("OAD workflow evidence", () => {
  it("parses complete multiline arrays and associates comparison paths", () => {
    const log = `ENTER definition runOad oldSpec: /repo/specification/foo/stable/2024-01-01/foo.json, newSpec: /repo/specification/foo/stable/2025-01-01/foo.json, oldTag: undefined, newTag: undefined
oadCompareOutput: ${JSON.stringify([message], null, 2)}
RETURN definition runOad`;
    const parsed = parseOadLog(log, "B");
    expect(parsed.findings).toHaveLength(1);
    expect(parsed.findings[0]).toMatchObject({
      rule: "RemovedProperty",
      phase: "B",
      oldJsonPath: "$.definitions.Widget.properties.name",
    });
    expect(parsed.comparisons[0]).toMatchObject({
      oldVersion: "2024-01-01",
      newVersion: "2025-01-01",
    });
    expect(parsed.zeroResultWithoutOutput).toBe(false);
  });

  it("rejects incomplete structured output", () => {
    expect(() => parseOadLog("oadCompareOutput: [{", "A")).toThrow("Incomplete oadCompareOutput");
  });

  it("classifies logger-truncated OAD JSON as incomplete evidence", () => {
    expect(() =>
      parseOadLog(
        `oadCompareOutput: [{"id":"BC001" ... [TRUNCATED: Original length 70000 bytes, showing first 61440 bytes]`,
        "A",
      ),
    ).toThrow(OadEvidenceIncompleteError);
  });

  it("cross-validates no-findings summary claims", () => {
    const parsed = parseOadLog(`oadCompareOutput: ${JSON.stringify([message])}`, "A");
    expect(() => validateJobSummary("No breaking changes found", parsed)).toThrow(
      "claims no findings",
    );
  });

  it.each([
    {
      phase: "A" as const,
      detector: "checkBreakingChangeOnSameVersion",
      comparisonType: "SameVersion",
    },
    {
      phase: "B" as const,
      detector: "checkCrossVersionBreakingChange",
      comparisonType: "CrossVersion",
    },
  ])(
    "accepts a complete explicit zero result for phase $phase",
    ({ phase, detector, comparisonType }) => {
      const log = [
        `RETURN definition ${detector}. msgs.length: 0, aggregateOadViolationsCnt: 0, aggregateErrorCnt: 0`,
        `Runner validateBreakingChange: comparisonType: ${comparisonType},errorCnt: 0, oadViolationsCnt: 0, process.exitCode: 0`,
        "Runner validateBreakingChange: statusCode: 0",
      ].join("\n");
      const parsed = parseOadLog(log, phase);

      expect(parsed.findings).toEqual([]);
      expect(parsed.zeroResultWithoutOutput).toBe(true);
      expect(
        validateJobSummary(
          "--- summary.md ---\nNo breaking changes detected.\nOAD package: catalog:",
          parsed,
        ),
      ).toMatchObject({ oadVersion: undefined });
    },
  );

  it("rejects absent or partial zero-result markers", () => {
    const partialLog = [
      "RETURN definition checkCrossVersionBreakingChange. msgs.length: 0, aggregateOadViolationsCnt: 0, aggregateErrorCnt: 0",
      "Runner validateBreakingChange: comparisonType: CrossVersion,errorCnt: 0, oadViolationsCnt: 0, process.exitCode: 0",
    ].join("\n");

    expect(() => parseOadLog(partialLog, "B")).toThrow(OadEvidenceIncompleteError);
    expect(() => parseOadLog("unrelated successful output", "B")).toThrow(
      OadEvidenceIncompleteError,
    );
  });

  it("requires independent no-breaking confirmation in the job summary", () => {
    const parsed = parseOadLog(
      [
        "RETURN definition checkCrossVersionBreakingChange. msgs.length: 0, aggregateOadViolationsCnt: 0, aggregateErrorCnt: 0",
        "Runner validateBreakingChange: comparisonType: CrossVersion,errorCnt: 0, oadViolationsCnt: 0, process.exitCode: 0",
        "Runner validateBreakingChange: statusCode: 0",
      ].join("\n"),
      "B",
    );

    expect(() => validateJobSummary("Completed successfully.", parsed)).toThrow(
      "does not explicitly report no breaking changes",
    );
  });

  it("validates summary counts, omitted rows, optional version, and comparison evidence", () => {
    const log = `ENTER definition runOad oldSpec: /repo/specification/foo/stable/2024-01-01/foo.json, newSpec: /repo/specification/foo/stable/2025-01-01/foo.json, oldTag: undefined, newTag: undefined
oadCompareOutput: ${JSON.stringify([message, { ...message, id: "BC002" }])}`;
    const parsed = parseOadLog(log, "B");
    const summary = `Detected: 2 Errors, 0 Warnings
| Compared specs ([v0.12.4](https://www.npmjs.com/package/@azure/oad/v/0.12.4)) | new version | base version |
|-------|-------------|--------------|
| foo.json | 2025-01-01 | 2024-01-01 |
Displaying 1 out of 2 occurrences.
|| ⚠️ 1 occurrence omitted. See the build log.|`;
    expect(validateJobSummary(summary, parsed).oadVersion).toBe("0.12.4");
    expect(() =>
      validateJobSummary(summary.replace("1 occurrence omitted", "2 occurrences omitted"), parsed),
    ).toThrow("omitted-row counts");
    const catalogSummary = summary.replaceAll("0.12.4", "catalog:");
    expect(catalogSummary).toContain(
      "[vcatalog:](https://www.npmjs.com/package/@azure/oad/v/catalog:)",
    );
    expect(validateJobSummary(catalogSummary, parsed)).toMatchObject({
      oadVersion: undefined,
    });
  });
});
