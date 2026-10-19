import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { oadCorrelation } from "./correlation.ts";
import type {
  EvaluationReport,
  ErrorEquivalenceMetrics,
  FindingGroup,
  MatchCategory,
  MatchTrace,
  OadFinding,
  Phase,
  PhaseRollup,
  Rollup,
  RollupMetrics,
  SourceReference,
  TentativeIssueAnalysis,
  TypeSpecFinding,
} from "./types.ts";
import {
  EVALUATION_SCHEMA_COMPATIBILITY,
  EVALUATION_SCHEMA_NAME,
  EVALUATION_SCHEMA_VERSION,
} from "./types.ts";

function isActionableOadError(finding: OadFinding): boolean {
  return finding.severity.toLowerCase() === "error";
}

function isActionableTypeSpecError(finding: TypeSpecFinding): boolean {
  return finding.severity.toLowerCase() === "error" && !finding.suppressed;
}

function computeErrorEquivalence(
  phase: Phase,
  oadFindings: OadFinding[],
  typeSpecFindings: TypeSpecFinding[],
  matches: MatchTrace[],
): ErrorEquivalenceMetrics {
  const phaseOad = oadFindings.filter((finding) => finding.phase === phase);
  const phaseTypeSpec = typeSpecFindings.filter(
    (finding) => finding.phase === (phase === "A" ? "same-version" : "cross-version"),
  );
  const oadById = new Map(phaseOad.map((finding) => [finding.occurrenceId, finding]));
  const typeSpecById = new Map(phaseTypeSpec.map((finding) => [finding.occurrenceId, finding]));
  const phaseMatches = matches.filter((match) => oadById.has(match.oadOccurrenceId));
  const selectedTypeSpec = new Set(
    phaseMatches.flatMap((match) => match.selectedTypeSpecOccurrenceIds),
  );
  const matchedErrorTypeSpec = new Set<string>();
  const typeSpecErrorMatchedToOadNonError = new Set<string>();
  let matchedErrorOad = 0;
  let oadErrorMatchedToTypeSpecNonError = 0;
  for (const match of phaseMatches) {
    const oad = oadById.get(match.oadOccurrenceId)!;
    const selected = match.selectedTypeSpecOccurrenceIds
      .map((id) => typeSpecById.get(id))
      .filter((finding): finding is TypeSpecFinding => Boolean(finding));
    const selectedErrors = selected.filter(isActionableTypeSpecError);
    if (isActionableOadError(oad)) {
      if (selectedErrors.length) {
        matchedErrorOad++;
        selectedErrors.forEach((finding) => matchedErrorTypeSpec.add(finding.occurrenceId));
      } else if (selected.length) {
        oadErrorMatchedToTypeSpecNonError++;
      }
    } else {
      selectedErrors.forEach((finding) =>
        typeSpecErrorMatchedToOadNonError.add(finding.occurrenceId),
      );
    }
  }
  const oadErrors = phaseOad.filter(isActionableOadError);
  const typeSpecErrors = phaseTypeSpec.filter(isActionableTypeSpecError);
  const selectedByOad = new Map(
    phaseMatches.map((match) => [
      match.oadOccurrenceId,
      match.selectedTypeSpecOccurrenceIds.length,
    ]),
  );
  return {
    oadErrors: oadErrors.length,
    typeSpecErrors: typeSpecErrors.length,
    matchedErrorOad,
    matchedErrorTypeSpec: matchedErrorTypeSpec.size,
    oadErrorMatchedToTypeSpecNonError,
    typeSpecErrorMatchedToOadNonError: typeSpecErrorMatchedToOadNonError.size,
    oadErrorsWithoutEquivalent: oadErrors.filter(
      (finding) => !selectedByOad.get(finding.occurrenceId),
    ).length,
    typeSpecErrorsWithoutEquivalent: typeSpecErrors.filter(
      (finding) => !selectedTypeSpec.has(finding.occurrenceId),
    ).length,
  };
}

function computeRollupMetrics(
  oadFindings: OadFinding[],
  typeSpecFindings: TypeSpecFinding[],
  matches: MatchTrace[],
): RollupMetrics {
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
    exactRecall: comparable === 0 ? undefined : exact / comparable,
    probableInclusiveRecall: comparable === 0 ? undefined : (exact + probableReview) / comparable,
  };
}

export function computeRollup(
  oadFindings: OadFinding[],
  typeSpecFindings: TypeSpecFinding[],
  matches: MatchTrace[],
): Rollup {
  const byPhase = Object.fromEntries(
    (["A", "B"] as const).map((phase) => {
      const phaseOadFindings = oadFindings.filter((finding) => finding.phase === phase);
      const phaseOadIds = new Set(phaseOadFindings.map((finding) => finding.occurrenceId));
      const phaseTypeSpecFindings = typeSpecFindings.filter(
        (finding) => finding.phase === (phase === "A" ? "same-version" : "cross-version"),
      );
      const phaseMatches = matches.filter((match) => phaseOadIds.has(match.oadOccurrenceId));
      const metrics = computeRollupMetrics(phaseOadFindings, phaseTypeSpecFindings, phaseMatches);
      const outcome =
        metrics.oadTotal > 0
          ? "compared"
          : metrics.typeSpecTotal > 0
            ? "typespec-only-divergence"
            : "concordant-zero";
      return [phase, { ...metrics, outcome }];
    }),
  ) as Record<Phase, PhaseRollup>;
  return {
    ...computeRollupMetrics(oadFindings, typeSpecFindings, matches),
    byPhase,
    errorEquivalence: Object.fromEntries(
      (["A", "B"] as const).map((phase) => [
        phase,
        computeErrorEquivalence(phase, oadFindings, typeSpecFindings, matches),
      ]),
    ) as Record<Phase, ErrorEquivalenceMetrics>,
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
  if (
    report.schemaVersion !== EVALUATION_SCHEMA_VERSION ||
    report.schema.name !== EVALUATION_SCHEMA_NAME ||
    report.schema.version !== EVALUATION_SCHEMA_VERSION ||
    report.schema.compatibility !== EVALUATION_SCHEMA_COMPATIBILITY
  ) {
    throw new Error("Report schema identity is unsupported");
  }
  if (
    !report.run.id ||
    !report.run.datasetId ||
    !report.run.reportId ||
    !report.run.reportId.startsWith(`${report.run.id}:`)
  ) {
    throw new Error("Report run identity is missing or inconsistent");
  }
  if (
    new Set(report.issueAnalyses.map((analysis) => analysis.id)).size !==
    report.issueAnalyses.length
  ) {
    throw new Error("Issue analysis IDs must be unique");
  }
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
  if (typeSpecIds.size !== typeSpecFindings.length) {
    throw new Error("TypeSpec occurrence IDs must be unique across phases");
  }
  if (
    report.matches.some((match) =>
      match.selectedTypeSpecOccurrenceIds.some((occurrenceId) => !typeSpecIds.has(occurrenceId)),
    )
  ) {
    throw new Error("Selected TypeSpec occurrence is missing from project findings");
  }
  const oadById = new Map(report.oadFindings.map((finding) => [finding.occurrenceId, finding]));
  const typeSpecById = new Map(typeSpecFindings.map((finding) => [finding.occurrenceId, finding]));
  for (const match of report.matches) {
    const expectedPhase =
      oadById.get(match.oadOccurrenceId)?.phase === "A" ? "same-version" : "cross-version";
    if (
      match.selectedTypeSpecOccurrenceIds.some(
        (occurrenceId) => typeSpecById.get(occurrenceId)?.phase !== expectedPhase,
      )
    ) {
      throw new Error("Selected TypeSpec occurrence phase does not match its OAD phase");
    }
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

function coverage(matches: number, comparableOad: number): string {
  return comparableOad === 0
    ? "N/A"
    : `${matches} / ${comparableOad} (${percent(matches / comparableOad)})`;
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
  const check =
    finding.phase === "A" ? "Swagger Breaking Change" : "Breaking Change (Cross-Version)";
  return [
    `- **Swagger finding:** \`${finding.occurrenceId}\` — \`${finding.rule}\` — ${finding.message}`,
    `- **Comparison:** Phase ${finding.phase} — ${check}; severity \`${finding.severity}\`; actionable error **${isActionableOadError(finding) ? "yes" : "no"}**`,
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
    `- **Comparison:** Phase ${finding.phase === "same-version" ? "A" : "B"} (\`${finding.phase}\`); severity \`${finding.severity}\`; suppressed **${finding.suppressed ? "yes" : "no"}**; actionable error **${isActionableTypeSpecError(finding) ? "yes" : "no"}**`,
    `- **TypeSpec target:** ${target}; project \`${finding.project}\`; versions \`${finding.versionPair.baseVersion}\` → \`${finding.versionPair.headVersion}\``,
    `- **Detector evidence:** ${
      finding.detectorEvidence
        ? `[${finding.detectorEvidence.label}](${finding.detectorEvidence.url})${
            finding.detectorEvidence.digest
              ? ` (digest \`${finding.detectorEvidence.digest}\`)`
              : ""
          }`
        : "unavailable"
    }`,
    `- **TypeSpec source:** ${finding.source ? renderSource(finding.source) : "unavailable"}`,
  ];
}

function markdownCell(value: string): string {
  return value.replaceAll("|", "\\|").replace(/\r?\n/g, " ").trim();
}

function anchorSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function oadAnchor(finding: OadFinding): string {
  return `finding-${anchorSlug(finding.occurrenceId)}`;
}

function typeSpecAnchor(finding: TypeSpecFinding): string {
  return `finding-typespec-${anchorSlug(finding.occurrenceId)}`;
}

function compactSource(source: SourceReference): string {
  const label = source.revision;
  if (source.url) return `[${label}](${source.url})`;
  return `${label} unavailable: ${source.unavailableReason ?? "source link unavailable"}`;
}

function compactOadSources(finding: OadFinding): string {
  return finding.sources?.map(compactSource).join(" · ") || "Source unavailable";
}

function compactTypeSpecSource(finding: TypeSpecFinding): string {
  return finding.source ? compactSource(finding.source) : "Source unavailable";
}

function canonicalTargetLabel(match: MatchTrace, finding: OadFinding): string {
  const target = match.targets[0] ?? match.target;
  const operation = [target.method?.toUpperCase(), target.route].filter(Boolean).join(" ");
  const property = target.propertyPath?.join(".");
  const declaration = target.declaration ?? target.element ?? target.schema;
  const directional = [target.direction, target.statusCode].filter(Boolean).join(" ");
  const structured = [declaration, property, operation, directional].filter(Boolean).join(" — ");
  return structured || finding.newJsonPath || finding.oldJsonPath || finding.rule;
}

function typeSpecTargetLabel(finding: TypeSpecFinding): string {
  if (finding.element) return finding.element;
  if (finding.component) return finding.component;
  if (finding.operation) {
    return `${finding.operation.method.toUpperCase()} ${finding.operation.path}`;
  }
  const path = finding.message.match(/\bat\s+(.+?)(?:\.$|$)/)?.[1];
  return path ?? finding.source?.path ?? "Target unavailable";
}

function issueLink(findingId: string, analyses: TentativeIssueAnalysis[]): string | undefined {
  const issue = analyses.find((analysis) => analysis.findingIds.includes(findingId));
  return issue ? `[${issue.id}](#${anchorSlug(issue.id)})` : undefined;
}

function selectedFindings(
  match: MatchTrace,
  typeSpecById: Map<string, TypeSpecFinding>,
): TypeSpecFinding[] {
  return match.selectedTypeSpecOccurrenceIds
    .map((id) => typeSpecById.get(id))
    .filter((finding): finding is TypeSpecFinding => Boolean(finding));
}

function candidateFindings(
  match: MatchTrace,
  typeSpecById: Map<string, TypeSpecFinding>,
): TypeSpecFinding[] {
  return [
    ...new Map(
      match.candidates
        .map((candidate) => typeSpecById.get(candidate.typeSpecOccurrenceId))
        .filter((finding): finding is TypeSpecFinding => Boolean(finding))
        .map((finding) => [finding.occurrenceId, finding]),
    ).values(),
  ];
}

function findingLinks(findings: TypeSpecFinding[]): string {
  return findings.length
    ? findings
        .map(
          (finding) =>
            `[\`${finding.kind}\`](#${typeSpecAnchor(finding)}) (${compactTypeSpecSource(finding)})`,
        )
        .join("<br>")
    : "None";
}

function errorAgreement(oad: OadFinding, selected: TypeSpecFinding[]): string {
  if (!selected.length) return "";
  const oadError = isActionableOadError(oad);
  const typeSpecStates = [...new Set(selected.map(isActionableTypeSpecError))];
  return typeSpecStates.length === 1 && typeSpecStates[0] === oadError
    ? `Error status agrees (${oadError ? "error" : "non-error"}).`
    : `Error status differs: OAD ${oadError ? "error" : "non-error"}, TypeSpec ${typeSpecStates
        .map((value) => (value ? "error" : "non-error"))
        .join("/")}.`;
}

function compactAnalysis(
  finding: OadFinding,
  match: MatchTrace,
  selected: TypeSpecFinding[],
): string {
  switch (match.category) {
    case "exact":
      return `Canonical identity agrees. ${errorAgreement(finding, selected)}`.trim();
    case "probable-review":
      return `A plausible semantic equivalent was selected, but identity evidence is incomplete; review the target mapping. ${errorAgreement(finding, selected)}`.trim();
    case "missed-equivalent":
      return "An equivalent TypeSpec finding is expected by the correlation map but none was selected. Investigate analyzer coverage or target resolution.";
    case "ambiguous":
      return "Multiple TypeSpec candidates have comparable identity evidence, so no unique equivalent was selected.";
    case "errors":
      return "Evidence or canonical-target resolution failed; do not interpret the missing correlation as detector disagreement.";
    case "intentional-swagger-only": {
      const correlation = oadCorrelation[finding.rule];
      return correlation && "intentionalGap" in correlation
        ? (correlation.intentionalGap ??
            "The correlation contract intentionally has no TypeSpec equivalent.")
        : "The correlation contract intentionally has no TypeSpec equivalent.";
    }
    case "informational-oad": {
      const correlation = oadCorrelation[finding.rule];
      return correlation && "informationalRecord" in correlation
        ? (correlation.informationalRecord ??
            "This OAD record is comparison context rather than an API difference.")
        : "This OAD record is comparison context rather than an API difference.";
    }
    default:
      return "Review the detailed detector evidence.";
  }
}

function tableOrNone(headers: string[], rows: string[]): string[] {
  if (!rows.length) return ["None.", ""];
  return [`| ${headers.join(" | ")} |`, `| ${headers.map(() => "---").join(" | ")} |`, ...rows, ""];
}

function renderFindingReview(
  report: EvaluationReport,
  oadById: Map<string, OadFinding>,
  typeSpecById: Map<string, TypeSpecFinding>,
): string[] {
  const rows = (category: MatchCategory) =>
    report.matches
      .filter((match) => match.category === category)
      .flatMap((match) => {
        const finding = oadById.get(match.oadOccurrenceId);
        if (!finding) return [];
        const selected = selectedFindings(match, typeSpecById);
        const candidates = candidateFindings(match, typeSpecById);
        const related = selected.length ? selected : candidates;
        const issue = issueLink(finding.occurrenceId, report.issueAnalyses);
        const analysis = `${compactAnalysis(finding, match, selected)}${issue ? ` ${issue}.` : ""}`;
        const detail = `[details](#${oadAnchor(finding)})`;
        if (category === "exact" || category === "probable-review" || category === "ambiguous") {
          return [
            `| ${finding.phase} | \`${finding.rule}\` | ${markdownCell(canonicalTargetLabel(match, finding))} | ${markdownCell(findingLinks(related))} | ${markdownCell(compactOadSources(finding))} | ${markdownCell(analysis)} | ${detail} |`,
          ];
        }
        return [
          `| ${finding.phase} | \`${finding.rule}\` | ${markdownCell(canonicalTargetLabel(match, finding))} | ${markdownCell(compactOadSources(finding))} | ${markdownCell(analysis)} | ${detail} |`,
        ];
      });

  const selectedIds = new Set(
    report.matches.flatMap((match) => match.selectedTypeSpecOccurrenceIds),
  );
  const typeSpecOnly = [...typeSpecById.values()]
    .filter((finding) => !selectedIds.has(finding.occurrenceId))
    .map((finding) => {
      const issue = issueLink(finding.occurrenceId, report.issueAnalyses);
      const analysis = `No OAD finding was selected. Determine whether this is additional TypeSpec coverage, OAD collection loss, or a matching defect.${issue ? ` ${issue}.` : ""}`;
      return `| ${finding.phase === "same-version" ? "A" : "B"} | \`${finding.kind}\` | ${markdownCell(typeSpecTargetLabel(finding))} | ${markdownCell(compactTypeSpecSource(finding))} | ${markdownCell(analysis)} | [details](#${typeSpecAnchor(finding)}) |`;
    });

  const workflowEvidence = report.qualification.evidence.runs
    ? Object.values(report.qualification.evidence.runs)
        .filter(Boolean)
        .map((run) => `[workflow ${run.id}](${run.htmlUrl})`)
        .join(" · ")
    : "No workflow link available";
  const evidenceGapIssue = report.issueAnalyses.find(
    (analysis) => analysis.category === "evidence-gap",
  );
  const qualificationFailures = report.qualification.reasonCodes.map(
    (reason, index) =>
      `| — | Qualification | \`${reason}\` | ${markdownCell(workflowEvidence)} | Required comparison evidence was unavailable or invalid; do not interpret this report as detector agreement.${evidenceGapIssue ? ` [${evidenceGapIssue.id}](#${anchorSlug(evidenceGapIssue.id)}).` : ""} | [details](#qualification-error-${index + 1}) |`,
  );
  const evidenceFailures = [
    ...rows("errors"),
    ...qualificationFailures,
    ...report.errors.map((error, index) => {
      const phase = error.match(/\bPhase ([AB])\b/i)?.[1]?.toUpperCase() ?? "—";
      return `| ${phase} | Report execution | ${markdownCell(error)} | ${markdownCell(workflowEvidence)} | Comparison is incomplete; do not treat absent findings as detector agreement. | [details](#evidence-error-${index + 1}) |`;
    }),
  ];

  return [
    "## Finding review",
    "",
    "Phase A compares Swagger Breaking Change with TypeSpec `same-version`. Phase B compares Breaking Change (Cross-Version) with TypeSpec `cross-version`. Each row links directly to source and to complete evidence later in this report.",
    "",
    "### Correlations",
    "",
    ...tableOrNone(
      [
        "Phase",
        "OAD finding",
        "Type / path",
        "TypeSpec finding(s)",
        "OAD source",
        "Analysis",
        "Details",
      ],
      rows("exact"),
    ),
    "### Partial correlations",
    "",
    ...tableOrNone(
      [
        "Phase",
        "OAD finding",
        "Type / path",
        "Candidate TypeSpec finding(s)",
        "OAD source",
        "Mismatch analysis",
        "Details",
      ],
      rows("probable-review"),
    ),
    "### OAD-only findings",
    "",
    ...tableOrNone(
      ["Phase", "Finding", "Type / path", "Source", "Analysis", "Details"],
      rows("missed-equivalent"),
    ),
    "### TypeSpec-only findings",
    "",
    ...tableOrNone(
      ["Phase", "Finding", "Type / path", "Source", "Analysis", "Details"],
      typeSpecOnly,
    ),
    "### Ambiguous findings",
    "",
    ...tableOrNone(
      [
        "Phase",
        "OAD finding",
        "Type / path",
        "Competing TypeSpec candidates",
        "OAD source",
        "Analysis",
        "Details",
      ],
      rows("ambiguous"),
    ),
    "### Evidence and execution failures",
    "",
    ...tableOrNone(
      ["Phase", "Scope", "Failure", "Available evidence", "Analysis", "Details"],
      evidenceFailures,
    ),
    "### Intentional Swagger-only gaps",
    "",
    ...tableOrNone(
      ["Phase", "Finding", "Type / path", "Source", "Analysis", "Details"],
      rows("intentional-swagger-only"),
    ),
    "### Informational OAD records",
    "",
    ...tableOrNone(
      ["Phase", "Finding", "Type / path", "Source", "Analysis", "Details"],
      rows("informational-oad"),
    ),
  ];
}

function renderDecision(
  finding: OadFinding,
  match: MatchTrace,
  typeSpecById: Map<string, TypeSpecFinding>,
): string[] {
  const selected = match.selectedTypeSpecOccurrenceIds
    .map((id) => typeSpecById.get(id))
    .filter((candidate): candidate is TypeSpecFinding => Boolean(candidate));
  if (!selected.length) {
    return [
      `- **Decision:** No TypeSpec equivalent was selected. Classification: \`${match.category}\`${match.reviewRequired ? "; human review required" : ""}.`,
    ];
  }
  const selectedCandidates = match.candidates.filter((candidate) =>
    match.selectedTypeSpecOccurrenceIds.includes(candidate.typeSpecOccurrenceId),
  );
  const evidence = [
    ...new Set(
      selectedCandidates.flatMap((candidate) => [
        ...candidate.exactIdentity,
        ...candidate.scoreEvidence,
      ]),
    ),
  ];
  const selectedErrorStates = selected.map(isActionableTypeSpecError);
  const oadError = isActionableOadError(finding);
  const severity = selectedErrorStates.every((value) => value === oadError)
    ? `Error status agrees: ${oadError ? "both detectors report actionable errors" : "neither detector reports an actionable error"}.`
    : `**Error status mismatch:** OAD actionable error is ${oadError ? "yes" : "no"}; selected TypeSpec actionable error state is ${[
        ...new Set(selectedErrorStates.map((value) => (value ? "yes" : "no"))),
      ].join("/")}.`;
  const selectedScore = Math.max(...selectedCandidates.map((candidate) => candidate.score), 0);
  const alternatives = [
    ...new Map(
      match.candidates
        .filter(
          (candidate) =>
            !match.selectedTypeSpecOccurrenceIds.includes(candidate.typeSpecOccurrenceId) &&
            candidate.rejectionReasons.length === 0 &&
            candidate.score > 0 &&
            candidate.score >= selectedScore - 2,
        )
        .sort(
          (left, right) =>
            right.score - left.score ||
            left.typeSpecOccurrenceId.localeCompare(right.typeSpecOccurrenceId),
        )
        .map((candidate) => [candidate.typeSpecOccurrenceId, candidate]),
    ).values(),
  ].slice(0, 5);
  const lines = [
    `- **Decision:** ${match.category === "exact" ? "Exact semantic match" : "Probable semantic match"} in Phase ${finding.phase}${match.reviewRequired ? "; human review required" : ""}. Selected ${selected.map((candidate) => `\`${candidate.occurrenceId}\``).join(", ")} because ${evidence.length ? evidence.join(", ") : "the canonical targets agree"}. ${severity}`,
  ];
  if (alternatives.length) {
    lines.push(
      "",
      "<details>",
      "<summary>Close alternatives considered</summary>",
      "",
      ...alternatives.map(
        (candidate) =>
          `- \`${candidate.typeSpecOccurrenceId}\` — score ${candidate.score}; ${
            [...candidate.exactIdentity, ...candidate.scoreEvidence].join(", ") ||
            "limited identity evidence"
          }`,
      ),
      "",
      "</details>",
    );
  }
  return lines;
}

function renderFindingDetails(
  report: EvaluationReport,
  oadById: Map<string, OadFinding>,
  typeSpecById: Map<string, TypeSpecFinding>,
): string[] {
  const lines: string[] = ["## Finding details", ""];
  if (
    !report.matches.length &&
    !typeSpecById.size &&
    !report.errors.length &&
    !report.qualification.reasonCodes.length
  ) {
    return [...lines, "No findings or evidence failures were reported.", ""];
  }
  for (const match of report.matches) {
    const finding = oadById.get(match.oadOccurrenceId);
    if (!finding) continue;
    lines.push(
      `<a id="${oadAnchor(finding)}"></a>`,
      `### ${finding.occurrenceId} — \`${finding.rule}\``,
      "",
      ...renderOadFinding(finding),
      `- **Classification:** \`${match.category}\`${match.reviewRequired ? "; human review required" : ""}`,
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
    if (correlation && "informationalRecord" in correlation) {
      lines.push(`- **Informational record:** ${correlation.informationalRecord}`);
    }
    if (correlation && "intentionalGap" in correlation) {
      lines.push(`- **Intentional gap:** ${correlation.intentionalGap}`);
    }
    if (match.selectedTypeSpecOccurrenceIds.length) {
      lines.push(
        `- **Selected TypeSpec findings:** ${match.selectedTypeSpecOccurrenceIds
          .map((id) => {
            const selected = typeSpecById.get(id);
            return selected
              ? `[\`${selected.occurrenceId}\`](#${typeSpecAnchor(selected)})`
              : `\`${id}\``;
          })
          .join(", ")}`,
      );
    }
    if (match.candidates.length) {
      lines.push(
        "- **Candidates considered:**",
        ...match.candidates.map(
          (candidate) =>
            `  - \`${candidate.typeSpecOccurrenceId}\` — score ${candidate.score}; ${
              [...candidate.exactIdentity, ...candidate.scoreEvidence].join(", ") ||
              "limited identity evidence"
            }${
              candidate.rejectionReasons.length
                ? `; rejected: ${candidate.rejectionReasons.join(", ")}`
                : ""
            }`,
        ),
      );
    }
    const issue = issueLink(finding.occurrenceId, report.issueAnalyses);
    if (issue) lines.push(`- **Related analysis:** ${issue}`);
    lines.push(...renderDecision(finding, match, typeSpecById), "");
  }
  for (const finding of typeSpecById.values()) {
    lines.push(
      `<a id="${typeSpecAnchor(finding)}"></a>`,
      `### ${finding.occurrenceId} — \`${finding.kind}\``,
      "",
      ...renderTypeSpecFinding(finding),
    );
    const issue = issueLink(finding.occurrenceId, report.issueAnalyses);
    if (issue) lines.push(`- **Related analysis:** ${issue}`);
    lines.push("");
  }
  for (const [index, reason] of report.qualification.reasonCodes.entries()) {
    lines.push(
      `<a id="qualification-error-${index + 1}"></a>`,
      `### Qualification failure ${index + 1}`,
      "",
      `- **Reason:** \`${reason}\``,
      `- **PR evidence:** ${
        report.qualification.evidence.prUrl
          ? `[pull request](${report.qualification.evidence.prUrl})`
          : "unavailable"
      }`,
      `- **Workflow evidence:** ${
        report.qualification.evidence.runs
          ? Object.values(report.qualification.evidence.runs)
              .filter(Boolean)
              .map((run) => `[${run.name}](${run.htmlUrl})`)
              .join("; ") || "unavailable"
          : "unavailable"
      }`,
      "",
    );
  }
  for (const [index, error] of report.errors.entries()) {
    lines.push(
      `<a id="evidence-error-${index + 1}"></a>`,
      `### Evidence error ${index + 1}`,
      "",
      `- ${error}`,
      "",
    );
  }
  return lines;
}

function formatDuration(durationMs?: number): string {
  return durationMs === undefined ? "Unavailable" : `${durationMs.toFixed(0)} ms`;
}

function renderIssueAnalyses(analyses: TentativeIssueAnalysis[]): string[] {
  if (!analyses.length) return ["No tentative issues were generated.", ""];
  return [
    "| Issue | Phase | Category | Conclusion | Analysis | Suggested fix | Confidence / status | Evidence |",
    "| --- | --- | --- | --- | --- | --- | --- | --- |",
    ...analyses.map((analysis) => {
      const analysisText = `${analysis.rationale} ${analysis.aggregateImpact}${
        analysis.reviewNote ? ` Review: ${analysis.reviewNote}` : ""
      }`;
      const evidence =
        analysis.evidence
          .map((entry) => `\`${entry.kind}:${entry.id}\` — ${entry.detail}`)
          .join("<br>") || "None";
      return `| <a id="${anchorSlug(analysis.id)}"></a>\`${analysis.id}\` | ${analysis.phases.join(", ")} | \`${analysis.category}\` | ${analysis.conclusion} | ${markdownCell(analysisText)} | ${markdownCell(analysis.suggestedFix)} | ${analysis.confidence}; ${analysis.status}${analysis.reviewedBy ? `; ${analysis.reviewedBy}` : ""} | ${markdownCell(evidence)} |`;
    }),
    "",
  ];
}

export function renderMarkdown(report: EvaluationReport): string {
  const oadById = new Map(report.oadFindings.map((finding) => [finding.occurrenceId, finding]));
  const typeSpecById = new Map(
    report.typeSpecProjects
      .flatMap((project) => project.findings)
      .map((finding) => [finding.occurrenceId, finding]),
  );
  const lines = [
    "# Breaking-change evaluator",
    "",
    `**Run ID:** \`${report.run.id}\``,
    `**Dataset ID:** \`${report.run.datasetId}\``,
    `**Report ID:** \`${report.run.reportId}\``,
    `**Schema:** \`${report.schema.name}@${report.schema.version}\` (${report.schema.compatibility})`,
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
      `**Exact OAD coverage:** ${coverage(report.rollup.exact, report.rollup.oadTotal)}`,
      `**Review-inclusive OAD coverage:** ${coverage(
        report.rollup.exact + report.rollup.probableReview,
        report.rollup.oadTotal,
      )}`,
      "",
      "### By phase",
      "",
      "| Phase | Independent OAD execution | TypeSpec mode | Outcome | Comparable OAD | Informational OAD | TypeSpec findings | Exact | Probable | Intentional gap | Missed equivalent | TypeSpec-only | Exact OAD coverage | Review-inclusive OAD coverage |",
      "| --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |",
      ...(["A", "B"] as const).map((phase) => {
        const phaseRollup = report.rollup!.byPhase[phase];
        const checkName =
          phase === "A" ? "Swagger Breaking Change" : "Breaking Change (Cross-Version)";
        const run = report.qualification.evidence.runs?.[phase];
        const check = run ? `[${checkName} run ${run.id}](${run.htmlUrl})` : checkName;
        const typeSpecMode = phase === "A" ? "`same-version`" : "`cross-version`";
        return `| ${phase} | ${check} | ${typeSpecMode} | ${phaseRollup.outcome} | ${phaseRollup.oadTotal} | ${phaseRollup.oadInformational} | ${phaseRollup.typeSpecTotal} | ${phaseRollup.exact} | ${phaseRollup.probableReview} | ${phaseRollup.intentionalSwaggerOnly} | ${phaseRollup.missedEquivalent} | ${phaseRollup.typeSpecOnly} | ${coverage(phaseRollup.exact, phaseRollup.oadTotal)} | ${coverage(phaseRollup.exact + phaseRollup.probableReview, phaseRollup.oadTotal)} |`;
      }),
      "",
    );
    lines.push(
      "## Error equivalence by phase",
      "",
      "Phase A compares Swagger Breaking Change errors with TypeSpec `same-version` errors. Phase B compares Breaking Change (Cross-Version) errors with TypeSpec `cross-version` errors. Semantic matches remain matches when error status differs; those disagreements are called out separately.",
      "",
      "| Phase | OAD check | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |",
      "| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |",
      ...(["A", "B"] as const).map((phase) => {
        const metrics = report.rollup!.errorEquivalence[phase];
        const check = phase === "A" ? "Swagger Breaking Change" : "Breaking Change (Cross-Version)";
        return `| ${phase} | ${check} | ${metrics.oadErrors} | ${metrics.typeSpecErrors} | ${metrics.matchedErrorOad} | ${metrics.matchedErrorTypeSpec} | ${metrics.oadErrorMatchedToTypeSpecNonError} | ${metrics.typeSpecErrorMatchedToOadNonError} | ${metrics.oadErrorsWithoutEquivalent} | ${metrics.typeSpecErrorsWithoutEquivalent} |`;
      }),
      "",
    );
  }
  lines.push(...renderFindingReview(report, oadById, typeSpecById));
  if (report.typeSpecProjects.length) {
    lines.push(
      "## Detector performance by phase",
      "",
      "Durations are detector-analysis time reported by each tool. GitHub Actions workflow duration and evaluator setup time are excluded.",
      "",
      "| Phase | OAD detector time | TypeSpec detector time | Comparison | Evidence |",
      "| --- | ---: | ---: | --- | --- |",
      ...(["A", "B"] as const).map((phase) => {
        const run = report.qualification.evidence.runs?.[phase];
        const typeSpecExecutions = report.typeSpecProjects
          .map((project) => project.phaseExecutions?.[phase])
          .filter((execution) => execution?.status === "complete");
        const typeSpecTimes = typeSpecExecutions
          .map((execution) => execution?.timing?.totalMs)
          .filter((duration): duration is number => duration !== undefined);
        const typeSpecDuration =
          typeSpecExecutions.length > 0 &&
          typeSpecTimes.length === typeSpecExecutions.length &&
          typeSpecExecutions.every((execution) => execution?.timingScope === "phase")
            ? typeSpecTimes.reduce((total, duration) => total + duration, 0)
            : undefined;
        const combinedTypeSpecDuration =
          typeSpecExecutions.length > 0 && typeSpecTimes.length === typeSpecExecutions.length
            ? typeSpecTimes.reduce((total, duration) => total + duration, 0)
            : undefined;
        const ratio =
          run?.detectorDurationMs !== undefined && typeSpecDuration !== undefined
            ? `${(typeSpecDuration / run.detectorDurationMs).toFixed(2)}× TypeSpec/OAD`
            : "Not comparable: one or both detector timings are unavailable";
        const reports = typeSpecExecutions
          .map((execution) =>
            execution
              ? execution.timingScope === "phase"
                ? `[TypeSpec Phase ${phase} report](${execution.markdownReport})`
                : `[TypeSpec combined report containing Phase ${phase}](${execution.markdownReport})`
              : undefined,
          )
          .filter(Boolean)
          .join("; ");
        const oadEvidence = run
          ? `[OAD workflow](${run.htmlUrl})${run.detectorDurationMs === undefined ? " (no detector timing emitted)" : ""}`
          : "OAD workflow unavailable";
        const typeSpecDisplay =
          typeSpecDuration === undefined && combinedTypeSpecDuration !== undefined
            ? `Unavailable independently (combined A+B: ${formatDuration(combinedTypeSpecDuration)})`
            : formatDuration(typeSpecDuration);
        return `| ${phase} | ${formatDuration(run?.detectorDurationMs)} | ${typeSpecDisplay} | ${ratio} | ${oadEvidence}${reports ? `; ${reports}` : ""} |`;
      }),
      "",
    );
  }
  if (report.typeSpecProjects.length) {
    lines.push(
      "## TypeSpec phase execution",
      "",
      "| Project | Phase | Version pair | Comparisons | Findings | Analyzer report |",
      "| --- | --- | --- | ---: | ---: | --- |",
    );
    for (const project of report.typeSpecProjects) {
      const comparisons = project.versionComparisons ?? [];
      if (!comparisons.length) {
        for (const phase of ["A", "B"] as const) {
          const execution = project.phaseExecutions?.[phase];
          lines.push(
            `| \`${project.project}\` | Phase ${phase} (\`${phase === "A" ? "same-version" : "cross-version"}\`) | ${execution?.noComparisonReason ?? execution?.error ?? "No comparison details reported"} | 0 | 0 | ${execution ? `[generated ${execution.timingScope === "combined" ? "combined " : ""}Markdown](${execution.markdownReport})` : "unavailable"} |`,
          );
        }
        continue;
      }
      for (const comparison of comparisons) {
        const phase = comparison.phase === "same-version" ? "A" : "B";
        const execution = project.phaseExecutions?.[phase];
        lines.push(
          `| \`${project.project}\` | Phase ${phase} (\`${comparison.phase}\`) | \`${comparison.baseVersion}\` → \`${comparison.headVersion}\` | 1 | ${comparison.findingCount} | ${execution ? `[generated ${execution.timingScope === "combined" ? "combined " : ""}Markdown](${execution.markdownReport})` : "unavailable"} |`,
        );
      }
    }
    lines.push("");
  }
  lines.push(
    "## Tentative issue analyses",
    "",
    "These analyses are derived from immutable detector evidence. Reviewed overlays may revise the conclusion, rationale, confidence, suggested fix, or status without changing raw findings.",
    "",
    ...renderIssueAnalyses(report.issueAnalyses),
    ...renderFindingDetails(report, oadById, typeSpecById),
  );
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
  const sanitize = (value: unknown): unknown => {
    if (typeof value === "string") {
      return value
        .replace(/file:\/\/\/(?:[A-Za-z]:[\\/]|\/?(?:Users|home)\/)[^'"\r\n;]*/g, "<local-path>")
        .replace(/(?<![A-Za-z0-9+.-])[A-Za-z]:[\\/][^'"\r\n;]*/g, "<local-path>")
        .replace(/\/(?:Users|home)\/[^'"\r\n;]*/g, "<local-path>");
    }
    if (Array.isArray(value)) return value.map(sanitize);
    if (value && typeof value === "object") {
      return Object.fromEntries(
        Object.entries(value).map(([key, child]) => [key, sanitize(child)]),
      );
    }
    return value;
  };
  const sanitized = sanitize(report) as EvaluationReport;
  validateRollup(sanitized);
  const jsonPath = resolve(jsonOutput);
  const markdownPath = resolve(markdownOutput);
  await mkdir(dirname(jsonPath), { recursive: true });
  await mkdir(dirname(markdownPath), { recursive: true });
  await writeFile(jsonPath, `${JSON.stringify(sanitized, null, 2)}\n`);
  await writeFile(markdownPath, renderMarkdown(sanitized));
}
