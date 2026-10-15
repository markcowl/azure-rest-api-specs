import { createHash } from "node:crypto";
import type {
  EvaluationReport,
  IssueAnalysisOverlay,
  IssueCategory,
  IssueConclusion,
  IssueEvidence,
  Phase,
  TentativeIssueAnalysis,
  TypeSpecFinding,
} from "./types.ts";

function stableIssueId(
  report: EvaluationReport,
  category: IssueCategory,
  phases: Phase[],
  findingIds: string[],
): string {
  const digest = createHash("sha256")
    .update(
      JSON.stringify({
        reportId: report.run.reportId,
        category,
        phases: [...phases].sort(),
        findingIds: [...findingIds].sort(),
      }),
    )
    .digest("hex")
    .slice(0, 16);
  return `issue-${category}-${digest}`;
}

function issue(
  report: EvaluationReport,
  input: {
    category: IssueCategory;
    phases: Phase[];
    findings?: string[];
    conclusion: IssueConclusion;
    confidence: TentativeIssueAnalysis["confidence"];
    rationale: string;
    evidence: IssueEvidence[];
    aggregateImpact: string;
    suggestedFix: string;
  },
): TentativeIssueAnalysis {
  const findingIds = [...new Set(input.findings ?? [])].sort();
  return {
    id: stableIssueId(report, input.category, input.phases, findingIds),
    affectedPrs: report.pullRequest ? [report.pullRequest.number] : [],
    phases: [...new Set(input.phases)].sort(),
    findingIds,
    category: input.category,
    conclusion: input.conclusion,
    confidence: input.confidence,
    rationale: input.rationale,
    evidence: input.evidence,
    aggregateImpact: input.aggregateImpact,
    suggestedFix: input.suggestedFix,
    status: "generated",
  };
}

function counterpartKind(kind: string): string | undefined {
  if (kind.endsWith("Narrowed")) return `${kind.slice(0, -"Narrowed".length)}Widened`;
  if (kind.endsWith("Widened")) return `${kind.slice(0, -"Widened".length)}Narrowed`;
  return undefined;
}

function findingTarget(finding: TypeSpecFinding): string {
  return JSON.stringify({
    project: finding.project,
    phase: finding.phase,
    operation: finding.operation,
    element: finding.element,
    component: finding.component,
    statusCode: finding.statusCode,
    versions: finding.versionPair,
  });
}

export function generateIssueAnalyses(report: EvaluationReport): TentativeIssueAnalysis[] {
  const analyses: TentativeIssueAnalysis[] = [];
  const typeSpec = report.typeSpecProjects.flatMap((project) => project.findings);
  const typeSpecById = new Map(typeSpec.map((finding) => [finding.occurrenceId, finding]));
  const oadById = new Map(report.oadFindings.map((finding) => [finding.occurrenceId, finding]));
  const selectedTypeSpecIds = new Set(
    report.matches.flatMap((match) => match.selectedTypeSpecOccurrenceIds),
  );

  const paired = new Set<string>();
  for (const finding of typeSpec.filter((candidate) => candidate.phase === "same-version")) {
    if (paired.has(finding.occurrenceId)) continue;
    const counterpart = counterpartKind(finding.kind);
    if (!counterpart) continue;
    const match = typeSpec.find(
      (candidate) =>
        candidate.occurrenceId !== finding.occurrenceId &&
        !paired.has(candidate.occurrenceId) &&
        candidate.kind === counterpart &&
        findingTarget(candidate) === findingTarget(finding),
    );
    if (!match) continue;
    paired.add(finding.occurrenceId);
    paired.add(match.occurrenceId);
    analyses.push(
      issue(report, {
        category: "reciprocal-narrowed-widened-pair",
        phases: ["A"],
        findings: [finding.occurrenceId, match.occurrenceId],
        conclusion: "likely-detector-defect",
        confidence: "high",
        rationale:
          "The same target and version pair was reported as both narrowed and widened in one comparison.",
        evidence: [finding, match].map((candidate) => ({
          kind: "typespec-finding",
          id: candidate.occurrenceId,
          detail: `${candidate.kind}: ${candidate.message}`,
        })),
        aggregateImpact: "Inflates TypeSpec-only Phase A totals by two findings.",
        suggestedFix: "Review structural type identity and deduplicate reciprocal change reports.",
      }),
    );
  }

  const phaseAIds = typeSpec
    .filter((finding) => finding.phase === "same-version")
    .map((finding) => finding.occurrenceId);
  const phaseBComparisons = report.typeSpecProjects.flatMap(
    (project) =>
      project.versionComparisons?.filter((comparison) => comparison.phase === "cross-version") ??
      [],
  );
  if (
    phaseAIds.length > 0 &&
    phaseAIds.every((id) => paired.has(id)) &&
    phaseBComparisons.length > 0
  ) {
    analyses.push(
      issue(report, {
        category: "false-phase-a-triggered-phase-b",
        phases: ["A", "B"],
        findings: [
          ...phaseAIds,
          ...typeSpec
            .filter((finding) => finding.phase === "cross-version")
            .map((finding) => finding.occurrenceId),
        ],
        conclusion: "likely-detector-defect",
        confidence: "high",
        rationale:
          "Every Phase A finding belongs to a reciprocal narrowed/widened pair, yet those findings activated cross-version comparisons.",
        evidence: phaseBComparisons.map((comparison) => ({
          kind: "execution",
          id: `${comparison.serviceName}:${comparison.baseVersion}:${comparison.headVersion}`,
          detail: `Phase B comparison reported ${comparison.findingCount} findings.`,
        })),
        aggregateImpact:
          "May attribute pre-existing cross-version differences to the pull request.",
        suggestedFix:
          "Prevent invalid Phase A findings from populating Phase B candidate versions.",
      }),
    );
  }

  if (report.complete && report.rollup) {
    for (const phase of ["A", "B"] as const) {
      if (report.rollup.byPhase[phase].outcome !== "concordant-zero") continue;
      analyses.push(
        issue(report, {
          category: "concordant-zero",
          phases: [phase],
          conclusion: "confirmed-agreement",
          confidence: "high",
          rationale: `Both detectors reported zero findings for Phase ${phase}.`,
          evidence: [
            {
              kind: "execution",
              id: `phase-${phase}`,
              detail:
                "Independent OAD evidence and TypeSpec execution both completed with zero findings.",
            },
          ],
          aggregateImpact: "Adds one confirmed zero-result agreement to longitudinal metrics.",
          suggestedFix: "No detector change suggested.",
        }),
      );
    }
  }

  for (const match of report.matches) {
    const oad = oadById.get(match.oadOccurrenceId);
    if (!oad || match.selectedTypeSpecOccurrenceIds.length === 0) continue;
    const selected = match.selectedTypeSpecOccurrenceIds
      .map((id) => typeSpecById.get(id))
      .filter((finding): finding is TypeSpecFinding => Boolean(finding));
    const oadError = oad.severity.toLowerCase() === "error";
    if (
      selected.some(
        (finding) =>
          (finding.severity.toLowerCase() === "error" && !finding.suppressed) !== oadError,
      )
    ) {
      analyses.push(
        issue(report, {
          category: "severity-mismatch",
          phases: [oad.phase],
          findings: [oad.occurrenceId, ...selected.map((finding) => finding.occurrenceId)],
          conclusion: "requires-review",
          confidence: "high",
          rationale: "Semantically matched findings disagree on actionable error status.",
          evidence: [
            {
              kind: "oad-finding",
              id: oad.occurrenceId,
              detail: `OAD severity: ${oad.severity}`,
            },
            ...selected.map((finding) => ({
              kind: "typespec-finding" as const,
              id: finding.occurrenceId,
              detail: `TypeSpec severity: ${finding.severity}; suppressed=${String(finding.suppressed)}`,
            })),
          ],
          aggregateImpact:
            "Changes error-equivalence totals without changing semantic-match totals.",
          suggestedFix: "Align severity policy or document the intentional difference.",
        }),
      );
    }
  }

  for (const match of report.matches.filter((candidate) =>
    ["missed-equivalent", "intentional-swagger-only", "ambiguous"].includes(candidate.category),
  )) {
    const finding = oadById.get(match.oadOccurrenceId);
    if (!finding) continue;
    analyses.push(
      issue(report, {
        category: "oad-only",
        phases: [finding.phase],
        findings: [finding.occurrenceId],
        conclusion:
          match.category === "intentional-swagger-only"
            ? "likely-expected-difference"
            : "requires-review",
        confidence: match.category === "ambiguous" ? "low" : "medium",
        rationale: `OAD finding has evaluator classification '${match.category}' and no selected TypeSpec equivalent.`,
        evidence: [
          {
            kind: "oad-finding",
            id: finding.occurrenceId,
            detail: `${finding.rule}: ${finding.message}`,
          },
        ],
        aggregateImpact: "Contributes one finding to OAD-only or missed-equivalent totals.",
        suggestedFix: "Review detector coverage and the canonical target mapping.",
      }),
    );
  }

  for (const finding of typeSpec.filter(
    (candidate) => !selectedTypeSpecIds.has(candidate.occurrenceId),
  )) {
    analyses.push(
      issue(report, {
        category: "typespec-only",
        phases: [finding.phase === "same-version" ? "A" : "B"],
        findings: [finding.occurrenceId],
        conclusion: "requires-review",
        confidence: "medium",
        rationale: "The TypeSpec finding has no selected OAD equivalent.",
        evidence: [
          {
            kind: "typespec-finding",
            id: finding.occurrenceId,
            detail: `${finding.kind}: ${finding.message}`,
          },
        ],
        aggregateImpact: "Contributes one finding to TypeSpec-only totals.",
        suggestedFix: "Confirm whether this is additional coverage, noise, or a matching gap.",
      }),
    );
  }

  if (!report.qualification.qualified || report.qualification.evidence.evidenceErrors?.length) {
    analyses.push(
      issue(report, {
        category: "evidence-gap",
        phases: ["A", "B"],
        conclusion: "insufficient-evidence",
        confidence: "high",
        rationale: "Required independent OAD evidence is missing, incomplete, or invalid.",
        evidence: [
          ...report.qualification.reasonCodes.map((reason) => ({
            kind: "qualification" as const,
            id: reason,
            detail: reason,
          })),
          ...(report.qualification.evidence.evidenceErrors ?? []).map((detail, index) => ({
            kind: "qualification" as const,
            id: `evidence-error-${index}`,
            detail,
          })),
        ],
        aggregateImpact: "Excludes this report from complete-run effectiveness totals.",
        suggestedFix: "Restore immutable workflow logs and job-summary evidence, then rerun.",
      }),
    );
  }

  const executionErrors = [
    ...report.errors,
    ...report.typeSpecProjects.flatMap((project) => (project.error ? [project.error] : [])),
  ];
  if (executionErrors.length) {
    analyses.push(
      issue(report, {
        category: "compile-runtime-failure",
        phases: ["A", "B"],
        conclusion: "execution-failure",
        confidence: "high",
        rationale: "One or more evaluator, compile, or analyzer executions failed.",
        evidence: executionErrors.map((detail, index) => ({
          kind: "execution",
          id: `execution-error-${index}`,
          detail,
        })),
        aggregateImpact: "Preserves a partial or failed outcome instead of success-shaped metrics.",
        suggestedFix: "Resolve the recorded execution error and rerun the same immutable input.",
      }),
    );
  }

  return analyses.sort((left, right) => left.id.localeCompare(right.id));
}

export function applyIssueAnalysisOverlays(
  generated: TentativeIssueAnalysis[],
  overlays: IssueAnalysisOverlay[],
): TentativeIssueAnalysis[] {
  const overlaysById = new Map(overlays.map((overlay) => [overlay.id, overlay]));
  for (const overlay of overlays) {
    if (!generated.some((analysis) => analysis.id === overlay.id)) {
      throw new Error(`Issue overlay '${overlay.id}' does not match generated evidence`);
    }
  }
  return generated.map((analysis) => {
    const overlay = overlaysById.get(analysis.id);
    return overlay ? { ...analysis, ...overlay, id: analysis.id } : analysis;
  });
}
