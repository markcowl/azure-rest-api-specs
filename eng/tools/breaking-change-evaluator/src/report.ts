import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { oadCorrelation } from "./correlation.ts";
import type {
  EvaluationReport,
  FindingGroup,
  MatchCategory,
  MatchTrace,
  OadFinding,
  Rollup,
  SourceReference,
  TypeSpecFinding,
} from "./types.ts";

export function computeRollup(
  oadFindings: OadFinding[],
  typeSpecFindings: TypeSpecFinding[],
  matches: MatchTrace[],
): Rollup {
  const count = (category: MatchTrace["category"]) =>
    matches.filter((match) => match.category === category).length;
  const selected = new Set(matches.flatMap((match) => match.selectedTypeSpecOccurrenceIds));
  const comparable = matches.filter(
    (match) =>
      match.category !== "informational-oad" &&
      match.category !== "intentional-swagger-only" &&
      match.category !== "errors",
  ).length;
  const exact = count("exact");
  const probableReview = count("probable-review");
  return {
    oadTotal: oadFindings.length - count("informational-oad"),
    oadInformational: count("informational-oad"),
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

export function computeFindingGroups(
  oadFindings: OadFinding[],
  typeSpecFindings: TypeSpecFinding[],
  matches: MatchTrace[],
): FindingGroup[] {
  const oadById = new Map(oadFindings.map((finding) => [finding.occurrenceId, finding]));
  const typeSpecById = new Map(typeSpecFindings.map((finding) => [finding.occurrenceId, finding]));
  const groups = new Map<string, FindingGroup>();
  const add = (
    category: MatchCategory,
    key: string,
    oadIds: string[],
    typeSpecIds: string[],
    swaggerRule?: string,
    typeSpecKind?: string,
  ) => {
    const id = `${category}:${key}`;
    const group = groups.get(id) ?? {
      category,
      key,
      swaggerRule,
      typeSpecKind,
      oadOccurrenceIds: [],
      typeSpecOccurrenceIds: [],
    };
    group.oadOccurrenceIds = [...new Set([...group.oadOccurrenceIds, ...oadIds])].sort();
    group.typeSpecOccurrenceIds = [
      ...new Set([...group.typeSpecOccurrenceIds, ...typeSpecIds]),
    ].sort();
    groups.set(id, group);
  };
  for (const match of matches) {
    const oad = oadById.get(match.oadOccurrenceId);
    if (!oad) continue;
    if (match.category === "exact" || match.category === "probable-review") {
      const kinds = [
        ...new Set(
          match.selectedTypeSpecOccurrenceIds
            .map((id) => typeSpecById.get(id)?.kind)
            .filter((kind): kind is string => Boolean(kind)),
        ),
      ].sort();
      const typeSpecKind = kinds.join(" + ") || "UnknownTypeSpecKind";
      add(
        match.category,
        `${oad.rule} → ${typeSpecKind}`,
        [oad.occurrenceId],
        match.selectedTypeSpecOccurrenceIds,
        oad.rule,
        typeSpecKind,
      );
    } else {
      add(match.category, oad.rule, [oad.occurrenceId], [], oad.rule);
    }
  }
  const selected = new Set(matches.flatMap((match) => match.selectedTypeSpecOccurrenceIds));
  for (const finding of typeSpecFindings.filter(
    (candidate) => !selected.has(candidate.occurrenceId),
  )) {
    add("typespec-only", finding.kind, [], [finding.occurrenceId], undefined, finding.kind);
  }
  return [...groups.values()].sort(
    (left, right) =>
      left.category.localeCompare(right.category) || left.key.localeCompare(right.key),
  );
}

export function validateRollup(report: EvaluationReport): void {
  if (!report.complete && report.rollup) {
    throw new Error("Incomplete reports must suppress rollups and rates");
  }
  if (!report.rollup) return;
  if (!report.pullRequest || !report.reproduction) {
    throw new Error("Complete reports require pull-request and reproduction metadata");
  }
  for (const finding of report.oadFindings) {
    if (
      !finding.detectorEvidence ||
      !finding.sources?.length ||
      finding.sources.some((source) => !source.url && !source.unavailableReason)
    ) {
      throw new Error(`OAD finding ${finding.occurrenceId} is missing source or detector evidence`);
    }
  }
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
  for (const finding of typeSpecFindings) {
    if (
      !finding.detectorEvidence ||
      !finding.source ||
      (!finding.source.url && !finding.source.unavailableReason)
    ) {
      throw new Error(
        `TypeSpec finding ${finding.occurrenceId} is missing source or detector evidence`,
      );
    }
  }
  if (report.reproduction.directAnalyzerCommands.length !== report.typeSpecProjects.length) {
    throw new Error("Complete reports require one direct analyzer command per TypeSpec project");
  }
  if (
    /breaking-change-evaluation-|typespec-breaking-change-base-/i.test(
      JSON.stringify(report.reproduction),
    )
  ) {
    throw new Error("Reproduction commands must not contain temporary checkout paths");
  }
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
  const expectedGroups = computeFindingGroups(report.oadFindings, typeSpecFindings, report.matches);
  if (JSON.stringify(report.findingGroups) !== JSON.stringify(expectedGroups)) {
    throw new Error("Finding groups do not recompute from detailed findings");
  }
}

function percent(value?: number): string {
  return value === undefined ? "suppressed (incomplete)" : `${(value * 100).toFixed(1)}%`;
}

function renderSource(source: SourceReference): string {
  const location = [source.path, source.line ? `line ${source.line}` : undefined]
    .filter(Boolean)
    .join(", ");
  if (source.url) {
    return `[${source.revision}: ${location || "source"}](${source.url})${
      source.jsonPath ? ` — JSONPath \`${source.jsonPath}\`` : ""
    }`;
  }
  return `${source.revision}: ${location || "unavailable"} — ${
    source.unavailableReason ?? "source link unavailable"
  }${source.jsonPath ? ` — JSONPath \`${source.jsonPath}\`` : ""}`;
}

function renderOadFinding(finding: OadFinding): string[] {
  return [
    `- **Swagger finding:** \`${finding.occurrenceId}\` — \`${finding.rule}\` — ${finding.message}`,
    `- **Detector evidence:** ${
      finding.detectorEvidence
        ? `[${finding.detectorEvidence.label}](${finding.detectorEvidence.url})${
            finding.detectorEvidence.digest
              ? ` (digest \`${finding.detectorEvidence.digest}\`)`
              : ""
          }`
        : "unavailable"
    }`,
    `- **Swagger source:** ${finding.sources?.map(renderSource).join("; ") || "unavailable"}`,
  ];
}

function renderTypeSpecFinding(finding: TypeSpecFinding): string[] {
  const target = finding.operation
    ? `${finding.operation.method.toUpperCase()} ${finding.operation.path}`
    : finding.element || finding.component || "no operation target";
  return [
    `- **TypeSpec finding:** \`${finding.occurrenceId}\` — \`${finding.kind}\` — ${finding.message}`,
    `- **TypeSpec target:** ${target}; project \`${finding.project}\`; versions \`${finding.versionPair.baseVersion}\` → \`${finding.versionPair.headVersion}\``,
    `- **Detector evidence:** ${
      finding.detectorEvidence
        ? `[${finding.detectorEvidence.label}](${finding.detectorEvidence.url})`
        : "unavailable"
    }`,
    `- **TypeSpec source:** ${finding.source ? renderSource(finding.source) : "unavailable"}`,
  ];
}

const categoryTitles: Record<MatchCategory, string> = {
  exact: "Exact matched findings",
  "probable-review": "Probable matched findings (review required)",
  "informational-oad": "Informational OAD records",
  "intentional-swagger-only": "Intentional Swagger-only coverage gaps",
  "missed-equivalent": "Findings missing from the TypeSpec detector",
  "typespec-only": "Findings missing from the Swagger detector",
  ambiguous: "Ambiguous findings",
  errors: "Finding evidence errors",
};

export function renderMarkdown(report: EvaluationReport): string {
  const lines = [
    "# Breaking-change evaluator",
    "",
    `**Status:** ${report.status}`,
    `**Complete:** ${report.complete ? "yes" : "no"}`,
    "",
  ];
  if (report.pullRequest) {
    const pr = report.pullRequest;
    lines.push(
      "## Pull request",
      "",
      `- **PR:** [${pr.owner}/${pr.repo}#${pr.number} — ${pr.title ?? "title unavailable"}](${pr.url})`,
      `- **Author:** ${pr.author ?? "unavailable"}`,
      `- **State:** ${pr.state ?? "unknown"}${pr.merged ? " (merged)" : ""}${
        pr.mergedAt ? ` at ${pr.mergedAt}` : ""
      }`,
      `- **Base:** \`${pr.baseBranch ?? "unknown"}\` at \`${pr.baseSha}\``,
      `- **Head:** \`${pr.headBranch ?? "unknown"}\` at \`${pr.headSha}\``,
      `- **Changed TypeSpec files:** ${
        pr.changedTypeSpecFiles.map((path) => `\`${path}\``).join(", ") || "none"
      }`,
      "",
    );
  }
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
      `| Comparable OAD findings | ${report.rollup.oadTotal} |`,
      `| Informational OAD records | ${report.rollup.oadInformational} |`,
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
  if (report.typeSpecProjects.length) {
    lines.push(
      "## TypeSpec phase execution",
      "",
      "| Project | Phase | Version pair | Comparisons | Findings |",
      "| --- | --- | --- | ---: | ---: |",
    );
    for (const project of report.typeSpecProjects) {
      const comparisons = project.versionComparisons ?? [];
      if (!comparisons.length) {
        lines.push(
          `| \`${project.project}\` | Not performed | ${project.noComparisonReason ?? "No comparison details reported"} | 0 | 0 |`,
        );
        continue;
      }
      for (const comparison of comparisons) {
        lines.push(
          `| \`${project.project}\` | \`${comparison.phase}\` | \`${comparison.baseVersion}\` → \`${comparison.headVersion}\` | 1 | ${comparison.findingCount} |`,
        );
      }
    }
    lines.push("");
  }
  const oadById = new Map(report.oadFindings.map((finding) => [finding.occurrenceId, finding]));
  const typeSpecById = new Map(
    report.typeSpecProjects
      .flatMap((project) => project.findings)
      .map((finding) => [finding.occurrenceId, finding]),
  );
  for (const category of [
    "exact",
    "probable-review",
    "informational-oad",
    "intentional-swagger-only",
    "missed-equivalent",
    "typespec-only",
    "ambiguous",
    "errors",
  ] as const) {
    const groups = report.findingGroups.filter((group) => group.category === category);
    if (!groups.length) continue;
    lines.push(`## ${categoryTitles[category]}`, "");
    for (const group of groups) {
      lines.push(`### ${group.key}`, "");
      for (const oadId of group.oadOccurrenceIds) {
        const finding = oadById.get(oadId);
        const match = report.matches.find((candidate) => candidate.oadOccurrenceId === oadId);
        if (!finding || !match) continue;
        lines.push(...renderOadFinding(finding));
        lines.push(
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
        );
        const correlation = oadCorrelation[finding.rule];
        const informationalRecord =
          correlation && "informationalRecord" in correlation
            ? correlation.informationalRecord
            : undefined;
        const intentionalGap =
          correlation && "intentionalGap" in correlation ? correlation.intentionalGap : undefined;
        if (informationalRecord) {
          lines.push(`- **Informational record:** ${informationalRecord}`);
        }
        if (intentionalGap) lines.push(`- **Intentional gap:** ${intentionalGap}`);
        for (const id of match.selectedTypeSpecOccurrenceIds) {
          const selected = typeSpecById.get(id);
          if (selected) lines.push(...renderTypeSpecFinding(selected));
        }
        lines.push(
          `- **Decision trace:** ${
            match.candidates.length
              ? match.candidates
                  .map(
                    (candidate) =>
                      `\`${candidate.typeSpecOccurrenceId}\` score ${candidate.score}: ${
                        candidate.rejectionReasons.join(", ") ||
                        candidate.exactIdentity.join(", ") ||
                        candidate.scoreEvidence.join(", ") ||
                        "no identity evidence"
                      }`,
                  )
                  .join("; ")
              : "no candidates"
          }`,
          "",
        );
      }
      for (const id of group.typeSpecOccurrenceIds) {
        if (group.oadOccurrenceIds.length) continue;
        const finding = typeSpecById.get(id);
        if (finding) lines.push(...renderTypeSpecFinding(finding), "");
      }
    }
  }
  if (report.reproduction) {
    lines.push(
      "## Reproduce",
      "",
      `**Shell:** ${report.reproduction.shell}`,
      "",
      ...report.reproduction.setupCommands.flatMap((entry) => [
        `### ${entry.label}`,
        "",
        "```powershell",
        entry.command,
        "```",
        "",
      ]),
      `### ${report.reproduction.evaluatorCommand.label}`,
      "",
      "```powershell",
      report.reproduction.evaluatorCommand.command,
      "```",
      "",
      ...report.reproduction.directAnalyzerCommands.flatMap((entry) => [
        `### ${entry.label}`,
        "",
        "```powershell",
        entry.command,
        "```",
        "",
      ]),
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
