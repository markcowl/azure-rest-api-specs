import { describe, expect, it } from "vitest";
import { typeSpecJsonReportSchema } from "../src/schema.ts";

function validReport() {
  return {
    specPaths: ["specification/foo/Foo"],
    requiresAction: true,
    counts: {
      errors: 1,
      suppressed: 0,
      ignored: 0,
      totalFindings: 1,
      servicesAnalyzed: 1,
      comparisonsPerformed: 1,
    },
    summary: {
      servicesAnalyzed: 1,
      comparisonsPerformed: 1,
      versionComparisons: [
        {
          serviceName: "Foo",
          baseVersion: "v1",
          headVersion: "v1",
          phase: "same-version",
          findingCount: 1,
        },
      ],
    },
    findings: [
      {
        kind: "OperationRemoved",
        severity: "error",
        rule: "RemovedEndpoint",
        phase: "cross-version",
        suppressed: false,
        message: "removed",
        versionPair: { baseVersion: "2024-01-01", headVersion: "2025-01-01" },
      },
    ],
    timing: {},
  };
}

describe("TypeSpec report runtime schema", () => {
  it("accepts internally consistent reports", () => {
    expect(typeSpecJsonReportSchema.safeParse(validReport()).success).toBe(true);
  });

  it("rejects success-shaped count and action inconsistencies", () => {
    const report = validReport();
    report.counts.errors = 0;
    report.requiresAction = false;
    const result = typeSpecJsonReportSchema.safeParse(report);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues.map((issue) => issue.message)).toContain(
        "counts.errors does not equal recomputed finding count",
      );
    }
  });
});
