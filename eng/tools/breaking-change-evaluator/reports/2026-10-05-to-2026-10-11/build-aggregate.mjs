/* eslint-disable */
import { readdir, readFile, writeFile } from "node:fs/promises";

const root = new URL(".", import.meta.url);
const selection = JSON.parse(await readFile(new URL("selection.json", root), "utf8"));
const prRoot = new URL("prs/", root);
const directories = (await readdir(prRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort((left, right) => Number(left) - Number(right));
const reports = await Promise.all(
  directories.map(async (directory) => ({
    directory,
    report: JSON.parse(await readFile(new URL(`prs/${directory}/report.json`, root), "utf8")),
  })),
);

const phases = ["A", "B"];
const metricNames = [
  "oadTotal",
  "oadInformational",
  "typeSpecTotal",
  "exact",
  "probableReview",
  "intentionalSwaggerOnly",
  "missedEquivalent",
  "typeSpecOnly",
  "ambiguous",
  "errors",
];
const errorNames = [
  "oadErrors",
  "typeSpecErrors",
  "matchedErrorOad",
  "matchedErrorTypeSpec",
  "oadErrorMatchedToTypeSpecNonError",
  "typeSpecErrorMatchedToOadNonError",
  "oadErrorsWithoutEquivalent",
  "typeSpecErrorsWithoutEquivalent",
];

function counts(values) {
  return Object.fromEntries(
    [...new Set(values)]
      .sort()
      .map((value) => [value, values.filter((item) => item === value).length]),
  );
}

function sumMetrics(items, names) {
  return Object.fromEntries(
    names.map((name) => [name, items.reduce((sum, item) => sum + (item?.[name] ?? 0), 0)]),
  );
}

function percentile(values, fraction) {
  if (values.length === 0) return undefined;
  const sorted = [...values].sort((left, right) => left - right);
  return sorted[Math.floor((sorted.length - 1) * fraction)];
}

function timingSummary(values) {
  if (values.length === 0) return { available: 0 };
  return {
    available: values.length,
    minimumMs: Math.min(...values),
    medianMs: percentile(values, 0.5),
    maximumMs: Math.max(...values),
  };
}

function truncate(value, length = 240) {
  const normalized = value.replace(/\s+/g, " ").trim();
  return normalized.length <= length ? normalized : `${normalized.slice(0, length - 1)}…`;
}

function markdownCell(value) {
  return String(value ?? "")
    .replaceAll("|", "\\|")
    .replaceAll("\n", " ");
}

const complete = reports.filter(({ report }) => report.status === "evaluated" && report.complete);
const partial = reports.filter(({ report }) => report.status === "partial");
const notQualified = reports.filter(({ report }) => report.status === "not-qualified");
const failed = reports.filter(({ report }) => report.status === "failed");

const byPhase = Object.fromEntries(
  phases.map((phase) => [
    phase,
    sumMetrics(
      complete.map(({ report }) => report.rollup.byPhase[phase]),
      metricNames,
    ),
  ]),
);
const errorEquivalence = Object.fromEntries(
  phases.map((phase) => [
    phase,
    sumMetrics(
      complete.map(({ report }) => report.rollup.errorEquivalence[phase]),
      errorNames,
    ),
  ]),
);

const oadByRule = new Map();
const typeSpecByKind = new Map();
for (const { report } of complete) {
  for (const finding of report.oadFindings) {
    const key = `${finding.phase}:${finding.rule}:${finding.severity.toLowerCase()}`;
    oadByRule.set(key, (oadByRule.get(key) ?? 0) + 1);
  }
  for (const project of report.typeSpecProjects) {
    for (const finding of project.findings) {
      const phase = finding.phase === "same-version" ? "A" : "B";
      const actionableError = finding.severity.toLowerCase() === "error" && !finding.suppressed;
      const key = `${phase}:${finding.kind}:${finding.severity.toLowerCase()}:${actionableError}`;
      typeSpecByKind.set(key, (typeSpecByKind.get(key) ?? 0) + 1);
    }
  }
}

const typeSpecTimings = { A: [], B: [] };
const oadTimings = { A: [], B: [] };
for (const { report } of complete) {
  for (const phase of phases) {
    const oadDuration = report.qualification.evidence.runs?.[phase]?.detectorDurationMs;
    if (oadDuration !== undefined) oadTimings[phase].push(oadDuration);
    const projectDurations = report.typeSpecProjects
      .map((project) => project.phaseExecutions?.[phase]?.timing?.totalMs)
      .filter((value) => value !== undefined);
    if (projectDurations.length > 0) {
      typeSpecTimings[phase].push(projectDurations.reduce((sum, value) => sum + value, 0));
    }
  }
}

const records = reports.map(({ directory, report }) => ({
  number: report.pullRequest?.number ?? Number(directory),
  title: report.pullRequest?.title,
  url: report.pullRequest?.url,
  mergedAt: report.pullRequest?.mergedAt,
  status: report.status,
  complete: report.complete,
  reasonCodes: report.qualification.reasonCodes,
  report: `prs/${directory}/report.md`,
  rollup: report.rollup,
  errors: report.errors.map((error) => truncate(error)),
}));

const aggregate = {
  schemaVersion: 1,
  generatedAt: reports
    .map(({ report }) => report.generatedAt)
    .sort()
    .at(-1),
  repository: selection.repository,
  window: selection.window,
  selection: selection.selection,
  analyzer: selection.analyzer,
  status: {
    total: reports.length,
    evaluated: complete.length,
    notQualified: notQualified.length,
    partial: partial.length,
    failed: failed.length,
  },
  qualificationReasons: counts(
    notQualified.flatMap(({ report }) => report.qualification.reasonCodes),
  ),
  effectiveness: {
    completeReportsOnly: true,
    byPhase,
    errorEquivalence,
  },
  findingsByType: {
    oad: [...oadByRule.entries()]
      .map(([key, count]) => {
        const [phase, rule, severity] = key.split(":");
        return { phase, rule, severity, count };
      })
      .sort(
        (left, right) =>
          left.phase.localeCompare(right.phase) || left.rule.localeCompare(right.rule),
      ),
    typeSpec: [...typeSpecByKind.entries()]
      .map(([key, count]) => {
        const [phase, kind, severity, actionableError] = key.split(":");
        return { phase, kind, severity, actionableError: actionableError === "true", count };
      })
      .sort(
        (left, right) =>
          left.phase.localeCompare(right.phase) || left.kind.localeCompare(right.kind),
      ),
  },
  performance: {
    A: {
      oad: timingSummary(oadTimings.A),
      typeSpec: timingSummary(typeSpecTimings.A),
      typeSpecTimingScope: "same-version phase",
    },
    B: {
      oad: timingSummary(oadTimings.B),
      typeSpec: timingSummary(typeSpecTimings.B),
      typeSpecTimingScope: "combined Phase A+B analyzer execution containing Phase B",
    },
  },
  records,
};

await writeFile(new URL("aggregate.json", root), `${JSON.stringify(aggregate, null, 2)}\n`);

const statusLabel = {
  evaluated: "Evaluated",
  "not-qualified": "Not qualified",
  partial: "Partial",
  failed: "Failed",
};
const lines = [
  "# Breaking-change evaluation: PRs merged October 5–11, 2026",
  "",
  `This branch records all PRs merged to \`main\` in \`${selection.repository}\` from ${selection.window.start} through ${selection.window.end} that changed a TypeSpec service input under \`specification/\` (\`.tsp\` or \`tspconfig.yaml\`).`,
  "",
  "## Selection and continuation",
  "",
  `- Merged PR candidates inspected: **${selection.selection.candidateCount}**`,
  `- Qualifying TypeSpec service PRs: **${selection.selection.qualifyingCount}**`,
  `- Selected in this batch: **${selection.selection.selectedCount}** of a maximum of **${selection.selection.cap}**`,
  `- Remaining qualifying PRs: **${selection.selection.remainingCount}**`,
  `- Continuation cursor: **${selection.selection.nextCursor ?? "none; the full week fits in this batch"}**`,
  "- Ordering: merge time ascending, then PR number ascending.",
  "",
  "## Execution status",
  "",
  `- Complete evaluations: **${complete.length}**`,
  `- Not qualified by required OAD evidence: **${notQualified.length}**`,
  `- Partial analyzer executions: **${partial.length}**`,
  `- Failed executions: **${failed.length}**`,
  "",
  "Effectiveness totals below include only complete evaluations. Partial reports remain linked with their detector errors and are not converted into success-shaped metrics.",
  "",
  "## Effectiveness by phase",
  "",
  "| Phase | Comparable OAD | Informational OAD | TypeSpec | Exact | Probable | Intentional gap | Missed equivalent | TypeSpec-only | Ambiguous |",
  "| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |",
  ...phases.map((phase) => {
    const value = byPhase[phase];
    return `| ${phase} | ${value.oadTotal} | ${value.oadInformational} | ${value.typeSpecTotal} | ${value.exact} | ${value.probableReview} | ${value.intentionalSwaggerOnly} | ${value.missedEquivalent} | ${value.typeSpecOnly} | ${value.ambiguous} |`;
  }),
  "",
  "Phase A compares **Swagger BreakingChange** with TypeSpec `same-version`. Phase B compares **Breaking Change (Cross-Version)** with TypeSpec `cross-version` findings retained from the combined analyzer execution.",
  "",
  "## Error equivalence by phase",
  "",
  "| Phase | OAD errors | TypeSpec errors | Matched OAD errors | Matched TypeSpec errors | OAD error → TypeSpec non-error | TypeSpec error → OAD non-error | OAD errors without equivalent | TypeSpec errors without equivalent |",
  "| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |",
  ...phases.map((phase) => {
    const value = errorEquivalence[phase];
    return `| ${phase} | ${value.oadErrors} | ${value.typeSpecErrors} | ${value.matchedErrorOad} | ${value.matchedErrorTypeSpec} | ${value.oadErrorMatchedToTypeSpecNonError} | ${value.typeSpecErrorMatchedToOadNonError} | ${value.oadErrorsWithoutEquivalent} | ${value.typeSpecErrorsWithoutEquivalent} |`;
  }),
  "",
  "## TypeSpec findings by finding type",
  "",
  "| Phase | Finding type | Severity | Actionable error | Count |",
  "| --- | --- | --- | --- | ---: |",
  ...aggregate.findingsByType.typeSpec.map(
    (finding) =>
      `| ${finding.phase} | \`${markdownCell(finding.kind)}\` | ${finding.severity} | ${finding.actionableError ? "yes" : "no"} | ${finding.count} |`,
  ),
  ...(aggregate.findingsByType.typeSpec.length === 0 ? ["| — | — | — | — | 0 |"] : []),
  "",
  "## OAD findings by finding type",
  "",
  "| Phase | Rule | Severity | Count |",
  "| --- | --- | --- | ---: |",
  ...aggregate.findingsByType.oad.map(
    (finding) =>
      `| ${finding.phase} | \`${markdownCell(finding.rule)}\` | ${finding.severity} | ${finding.count} |`,
  ),
  ...(aggregate.findingsByType.oad.length === 0 ? ["| — | — | — | 0 |"] : []),
  "",
  "## Detector performance",
  "",
  "| Phase | OAD detector timing | TypeSpec timing | TypeSpec scope |",
  "| --- | --- | --- | --- |",
  ...phases.map((phase) => {
    const oad = aggregate.performance[phase].oad;
    const tsp = aggregate.performance[phase].typeSpec;
    const format = (value) =>
      value.available === 0
        ? "Unavailable"
        : `${value.available} reports; median ${value.medianMs} ms (${value.minimumMs}–${value.maximumMs} ms)`;
    return `| ${phase} | ${format(oad)} | ${format(tsp)} | ${aggregate.performance[phase].typeSpecTimingScope} |`;
  }),
  "",
  "Workflow/job duration is never substituted for detector-emitted timing.",
  "",
  "## PR reports",
  "",
  "| PR | Merged | Status | Phase A | Phase B | Qualification or execution detail |",
  "| --- | --- | --- | --- | --- | --- |",
  ...records.map((record) => {
    const a = record.rollup?.byPhase?.A;
    const b = record.rollup?.byPhase?.B;
    const phase = (value) =>
      value
        ? `OAD ${value.oadTotal}; TypeSpec ${value.typeSpecTotal}; exact ${value.exact}; probable ${value.probableReview}; TypeSpec-only ${value.typeSpecOnly}`
        : "—";
    const detail =
      record.reasonCodes.length > 0
        ? record.reasonCodes.map((reason) => `\`${reason}\``).join(", ")
        : record.errors.join("; ");
    return `| [#${record.number}](${record.report}) | ${record.mergedAt?.slice(0, 10) ?? "—"} | ${statusLabel[record.status]} | ${phase(a)} | ${phase(b)} | ${markdownCell(detail || "—")} |`;
  }),
  "",
  "## Not-qualified reasons",
  "",
  "| Reason | PR count |",
  "| --- | ---: |",
  ...Object.entries(aggregate.qualificationReasons).map(
    ([reason, count]) => `| \`${reason}\` | ${count} |`,
  ),
  ...(Object.keys(aggregate.qualificationReasons).length === 0 ? ["| — | 0 |"] : []),
  "",
  "## Partial and failed executions",
  "",
  ...[...partial, ...failed].map(
    ({ directory, report }) =>
      `- [#${report.pullRequest?.number ?? directory}](prs/${directory}/report.md): ${report.errors.map((error) => truncate(error)).join("; ")}`,
  ),
  ...([...partial, ...failed].length === 0 ? ["None."] : []),
  "",
  "## Reproduction",
  "",
  `- Evaluator commit: \`${complete[0]?.report.provenance.evaluator?.commit ?? partial[0]?.report.provenance.evaluator?.commit ?? "unavailable"}\``,
  `- Analyzer source: \`${selection.analyzer.sourceSha}\``,
  `- Analyzer artifact digest: \`${selection.analyzer.artifactDigest}\``,
  "- Each detailed report contains immutable PR revisions, workflow evidence, generated TypeSpec Markdown/JSON artifacts, and reproduction commands.",
  "",
];

await writeFile(new URL("README.md", root), `${lines.join("\n")}\n`);
