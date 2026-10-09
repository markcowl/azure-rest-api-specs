import { z } from "zod";

export const typeSpecJsonReportSchema = z
  .object({
    specPaths: z.array(z.string()),
    requiresAction: z.boolean(),
    counts: z.object({
      errors: z.number().int().nonnegative(),
      suppressed: z.number().int().nonnegative(),
      ignored: z.number().int().nonnegative(),
      totalFindings: z.number().int().nonnegative(),
      servicesAnalyzed: z.number().int().nonnegative(),
      comparisonsPerformed: z.number().int().nonnegative(),
    }),
    findings: z.array(
      z.object({
        kind: z.string(),
        severity: z.string(),
        rule: z.string(),
        phase: z.string(),
        suppressed: z.boolean(),
        message: z.string(),
        operation: z.object({ method: z.string(), path: z.string() }).optional(),
        element: z.string().optional(),
        component: z.string().optional(),
        statusCode: z.string().optional(),
        versionPair: z.object({ baseVersion: z.string(), headVersion: z.string() }),
        location: z.object({ file: z.string(), line: z.number().int().positive() }).optional(),
      }),
    ),
    summary: z.object({
      servicesAnalyzed: z.number().int().nonnegative(),
      comparisonsPerformed: z.number().int().nonnegative(),
      versionComparisons: z.array(
        z.object({
          serviceName: z.string(),
          baseVersion: z.string(),
          headVersion: z.string(),
          phase: z.enum(["same-version", "cross-version"]),
          findingCount: z.number().int().nonnegative(),
        }),
      ),
      noComparisonReason: z.string().optional(),
    }),
    timing: z.unknown(),
  })
  .passthrough()
  .superRefine((report, context) => {
    if (report.counts.totalFindings !== report.findings.length) {
      context.addIssue({
        code: "custom",
        message: "counts.totalFindings does not equal findings.length",
      });
    }
    const errors = report.findings.filter(
      (finding) => finding.severity === "error" && !finding.suppressed,
    ).length;
    const suppressed = report.findings.filter((finding) => finding.suppressed).length;
    const ignored = report.findings.filter(
      (finding) => finding.severity === "ignore" && !finding.suppressed,
    ).length;
    for (const [name, actual, expected] of [
      ["errors", report.counts.errors, errors],
      ["suppressed", report.counts.suppressed, suppressed],
      ["ignored", report.counts.ignored, ignored],
    ] as const) {
      if (actual !== expected) {
        context.addIssue({
          code: "custom",
          message: `counts.${name} does not equal recomputed finding count`,
        });
      }
    }
    if (report.requiresAction !== errors > 0) {
      context.addIssue({
        code: "custom",
        message: "requiresAction does not agree with unsuppressed error findings",
      });
    }
    if (report.summary.comparisonsPerformed !== report.summary.versionComparisons.length) {
      context.addIssue({
        code: "custom",
        message: "summary.comparisonsPerformed does not equal versionComparisons.length",
      });
    }
  });

export type TypeSpecJsonReport = z.infer<typeof typeSpecJsonReportSchema>;
