import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { oadCorrelation } from "./correlation.ts";
import type { EvaluationReport, MatchTrace, OadFinding, Rollup, TypeSpecFinding } from "./types.ts";

export function computeRollup(
  oadFindings: OadFinding[],
  typeSpecFindings: TypeSpecFinding[],
  matches: MatchTrace[],
): Rollup {
  const count = (category: MatchTrace["category"]) =>
    matches.filter((match) => match.category === category).length;
  const selected = new Set(matches.flatMap((match) => match.selectedTypeSpecOccurrenceIds));
  const comparable = matches.filter(
    (match) => match.category !== "intentional-swagger-only" && match.category !== "errors",
  ).length;
  const exact = count("exact");
  const probableReview = count("probable-review");
  return {
    oadTotal: oadFindings.length,
    typeSpecTotal: typeSpecFindings.length,
    exact,
    probableReview,
    intentionalSwaggerOnly: count("intentional-swagger-only"),
    missedEquivalent: count("missed-equivalent"),
    typeSpecOnly: typeSpecFindings.filter((finding) => !selected.has(finding.occurrenceId)).length,
    ambiguous: count("ambiguous"),
    errors: count("errors"),
    exactRecall: comparable === 0 ? 1 : exact / comparable,
    probableInclusiveRecall: comparable === 0 ? 1 : (exact + probableReview) / comparable,
  };
}

export function validateRollup(report: EvaluationReport): void {
  if (!report.complete && report.rollup) {
    throw new Error("Incomplete reports must suppress rollups and rates");
  }
  if (!report.rollup) return;
  const expectedOadIds = new Set(report.oadFindings.map((finding) => finding.occurrenceId));
  const matchedOadIds = report.matches.map((match) => match.oadOccurrenceId);
  if (
    matchedOadIds.length !== expectedOadIds.size ||
    new Set(matchedOadIds).size !== matchedOadIds.length ||
    matchedOadIds.some((occurrenceId) => !expectedOadIds.has(occurrenceId))
  ) {
    throw new Error("Every OAD occurrence must have exactly one match category");
  }
  const typeSpecFindings = report.typeSpecProjects.flatMap((project) => project.findings);
  const typeSpecIds = new Set(typeSpecFindings.map((finding) => finding.occurrenceId));
  if (
    report.matches.some((match) =>
      match.selectedTypeSpecOccurrenceIds.some((occurrenceId) => !typeSpecIds.has(occurrenceId)),
    )
  ) {
    throw new Error("Selected TypeSpec occurrence is missing from project findings");
  }
  const expected = computeRollup(report.oadFindings, typeSpecFindings, report.matches);
  if (JSON.stringify(report.rollup) !== JSON.stringify(expected)) {
    throw new Error("Report rollup does not recompute from detailed findings");
  }
}

function percent(value?: number): string {
  return value === undefined ? "suppressed (incomplete)" : `${(value * 100).toFixed(1)}%`;
}

export function renderMarkdown(report: EvaluationReport): string {
  const lines = [
    "# Breaking-change evaluator",
    "",
    `**Status:** ${report.status}`,
    `**Complete:** ${report.complete ? "yes" : "no"}`,
    "",
  ];
  if (!report.qualification.qualified) {
    lines.push(
      "## Not qualified",
      "",
      ...report.qualification.reasonCodes.map((reason) => `- \`${reason}\``),
      "",
    );
  }
  if (report.rollup) {
    lines.push(
      "## Rollup",
      "",
      "| Dimension | Count |",
      "| --- | ---: |",
      `| OAD findings | ${report.rollup.oadTotal} |`,
      `| TypeSpec findings | ${report.rollup.typeSpecTotal} |`,
      `| Exact | ${report.rollup.exact} |`,
      `| Probable (review required) | ${report.rollup.probableReview} |`,
      `| Intentional Swagger-only | ${report.rollup.intentionalSwaggerOnly} |`,
      `| Missed equivalent | ${report.rollup.missedEquivalent} |`,
      `| TypeSpec-only | ${report.rollup.typeSpecOnly} |`,
      `| Ambiguous | ${report.rollup.ambiguous} |`,
      "",
      `**Exact recall:** ${percent(report.rollup.exactRecall)}`,
      `**Probable-inclusive recall:** ${percent(report.rollup.probableInclusiveRecall)}`,
      "",
    );
  }
  if (report.matches.length) {
    lines.push(
      "## Correlation details",
      "",
      "| OAD occurrence | Category | TypeSpec occurrence(s) | Review |",
      "| --- | --- | --- | --- |",
      ...report.matches.map(
        (match) =>
          `| \`${match.oadOccurrenceId}\` | ${match.category} | ${
            match.selectedTypeSpecOccurrenceIds.map((id) => `\`${id}\``).join(", ") || "-"
          } | ${match.reviewRequired ? "required" : "-"} |`,
      ),
      "",
    );
  }
  const oadById = new Map(report.oadFindings.map((finding) => [finding.occurrenceId, finding]));
  const reviewDetails = report.matches.filter((match) => match.category !== "exact");
  if (reviewDetails.length) {
    lines.push("## Review and non-match details", "");
    for (const match of reviewDetails) {
      const finding = oadById.get(match.oadOccurrenceId);
      lines.push(
        `### \`${match.oadOccurrenceId}\` — ${match.category}`,
        "",
        `- **OAD finding:** ${finding ? `\`${finding.rule}\` — ${finding.message}` : "missing"}`,
        `- **Resolved targets:** ${
          match.targets
            .map(
              (target) =>
                [target.method, target.route, target.direction, target.statusCode]
                  .filter(Boolean)
                  .join(" ") || target.evidence.join("; "),
            )
            .join(" | ") || "none"
        }`,
        `- **Selected TypeSpec occurrence(s):** ${
          match.selectedTypeSpecOccurrenceIds.map((id) => `\`${id}\``).join(", ") || "none"
        }`,
      );
      const correlation = finding ? oadCorrelation[finding.rule] : undefined;
      const intentionalGap =
        correlation && "intentionalGap" in correlation ? correlation.intentionalGap : undefined;
      if (intentionalGap) lines.push(`- **Intentional gap:** ${intentionalGap}`);
      if (match.candidates.length) {
        lines.push(
          "- **Candidates:**",
          ...match.candidates.map(
            (candidate) =>
              `  - \`${candidate.typeSpecOccurrenceId}\`: score ${candidate.score}; ${
                candidate.rejectionReasons.length
                  ? `rejected because ${candidate.rejectionReasons.join(", ")}`
                  : candidate.scoreEvidence.join(", ") || "no supporting identity evidence"
              }`,
          ),
        );
      } else {
        lines.push("- **Candidates:** none");
      }
      lines.push("");
    }
  }
  const selected = new Set(report.matches.flatMap((match) => match.selectedTypeSpecOccurrenceIds));
  const typeSpecOnly = report.typeSpecProjects
    .flatMap((project) => project.findings)
    .filter((finding) => !selected.has(finding.occurrenceId));
  if (typeSpecOnly.length) {
    lines.push(
      "## TypeSpec-only findings",
      "",
      ...typeSpecOnly.map(
        (finding) =>
          `- \`${finding.occurrenceId}\` — \`${finding.kind}\` in \`${finding.project}\`${
            finding.operation
              ? ` (${finding.operation.method.toUpperCase()} ${finding.operation.path})`
              : ""
          }: ${finding.message}`,
      ),
      "",
    );
  }
  if (report.errors.length) {
    lines.push("## Errors", "", ...report.errors.map((error) => `- ${error}`), "");
  }
  return lines.join("\n");
}

export async function writeReportFiles(
  report: EvaluationReport,
  jsonOutput: string,
  markdownOutput: string,
): Promise<void> {
  validateRollup(report);
  const jsonPath = resolve(jsonOutput);
  const markdownPath = resolve(markdownOutput);
  await mkdir(dirname(jsonPath), { recursive: true });
  await mkdir(dirname(markdownPath), { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(report, null, 2)}\n`);
  await writeFile(markdownPath, renderMarkdown(report));
}
