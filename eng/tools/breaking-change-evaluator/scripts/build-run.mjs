/* eslint-disable */
import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { basename, resolve } from "node:path";

function option(name) {
  const index = process.argv.indexOf(name);
  if (index === -1 || !process.argv[index + 1]) throw new Error(`Missing ${name}`);
  return process.argv[index + 1];
}

const root = resolve(option("--run"));
const selectionContent = await readFile(resolve(root, "selection.json"), "utf8");
const selection = JSON.parse(selectionContent);
const config = JSON.parse(await readFile(resolve(root, "run-config.json"), "utf8"));
const selected = selection.records.filter((record) => record.selected);
const reports = await Promise.all(
  selected.map(async (record) => ({
    record,
    report: JSON.parse(
      await readFile(resolve(root, "prs", String(record.number), "report.json"), "utf8"),
    ),
  })),
);

function sumPhase(phase, name) {
  return reports.reduce(
    (sum, { report }) => sum + (report.rollup?.byPhase?.[phase]?.[name] ?? 0),
    0,
  );
}

function statusCounts() {
  return {
    total: reports.length,
    evaluated: reports.filter(({ report }) => report.status === "evaluated").length,
    notQualified: reports.filter(({ report }) => report.status === "not-qualified").length,
    partial: reports.filter(({ report }) => report.status === "partial").length,
    failed: reports.filter(({ report }) => report.status === "failed").length,
  };
}

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
const byPhase = Object.fromEntries(
  phases.map((phase) => [
    phase,
    Object.fromEntries(metricNames.map((name) => [name, sumPhase(phase, name)])),
  ]),
);
const issueCounts = Object.fromEntries(
  [
    ...new Set(
      reports.flatMap(({ report }) => report.issueAnalyses.map((analysis) => analysis.category)),
    ),
  ]
    .sort()
    .map((category) => [
      category,
      reports.reduce(
        (sum, { report }) =>
          sum + report.issueAnalyses.filter((analysis) => analysis.category === category).length,
        0,
      ),
    ]),
);
const status = statusCounts();
const aggregate = {
  schemaVersion: 2,
  schemaCompatibility: ">=2 <3",
  run: selection.run,
  repository: selection.repository,
  query: selection.query,
  selection: selection.selection,
  analyzer: selection.analyzer,
  status,
  effectiveness: { completeReportsOnly: true, byPhase },
  issueCounts,
  historicalComparison: config.historicalComparison,
  records: reports.map(({ record, report }) => ({
    number: record.number,
    title: record.title,
    url: record.url,
    updatedAt: record.updatedAt,
    mergedAt: record.mergedAt,
    status: report.status,
    complete: report.complete,
    report: `prs/${record.number}/report.md`,
    issueIds: report.issueAnalyses.map((analysis) => analysis.id),
    rollup: report.rollup,
    errors: report.errors,
  })),
};

for (const pr of config.zeroExpected ?? []) {
  const report = reports.find(({ record }) => record.number === pr)?.report;
  if (!report) throw new Error(`Expected zero-result PR #${pr} is absent`);
  const phaseAFindings = report.typeSpecProjects
    .flatMap((project) => project.findings)
    .filter((finding) => finding.phase === "same-version");
  const phaseBComparisons = report.typeSpecProjects.flatMap(
    (project) =>
      project.versionComparisons?.filter((comparison) => comparison.phase === "cross-version") ??
      [],
  );
  if (phaseAFindings.length || phaseBComparisons.length) {
    throw new Error(`#${pr} did not verify zero Phase A and no triggered Phase B`);
  }
}

await writeFile(resolve(root, "aggregate.json"), `${JSON.stringify(aggregate, null, 2)}\n`);

const lines = [
  `# ${config.title}`,
  "",
  `- **Run ID:** \`${selection.run.id}\``,
  `- **Dataset ID:** \`${selection.run.datasetId}\``,
  `- **Generated at:** ${selection.run.generatedAt}`,
  `- **Selection:** [machine snapshot](selection.json)`,
  `- **Run manifest:** [machine contract](run.json)`,
  `- **Analyzer source:** \`${selection.analyzer.sourceSha}\` (parent \`${config.analyzer.prototypeParentSha}\`)`,
  `- **Analyzer artifact digest:** \`${selection.analyzer.artifactDigest}\``,
  `- **Analyzer readiness:** ${config.analyzer.readiness.details}`,
  "",
  "## Selection",
  "",
  `- Source candidates: **${selection.selection.sourceCount}**`,
  `- Excluded candidates: **${selection.selection.excludedCount}**`,
  `- Qualifying candidates: **${selection.selection.qualifyingCount}**`,
  `- Selected: **${selection.selection.selectedCount}**`,
  `- Continuation cursor: **${selection.selection.continuationCursor ?? "none"}**`,
  `- Selection digest: \`${createHash("sha256").update(selectionContent).digest("hex")}\``,
  ...(selection.assertions?.weeklyIntersection !== undefined
    ? [`- Weekly-selection intersection: **${selection.assertions.weeklyIntersection}**`]
    : []),
  "",
  "## Outcomes",
  "",
  `- Complete: **${status.evaluated}**`,
  `- Not qualified: **${status.notQualified}**`,
  `- Partial: **${status.partial}**`,
  `- Failed: **${status.failed}**`,
  "",
  "| Phase | OAD | Informational OAD | TypeSpec | Exact | Probable | OAD-only | TypeSpec-only |",
  "| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |",
  ...phases.map(
    (phase) =>
      `| ${phase} | ${byPhase[phase].oadTotal} | ${byPhase[phase].oadInformational} | ${byPhase[phase].typeSpecTotal} | ${byPhase[phase].exact} | ${byPhase[phase].probableReview} | ${byPhase[phase].missedEquivalent + byPhase[phase].intentionalSwaggerOnly} | ${byPhase[phase].typeSpecOnly} |`,
  ),
  "",
  ...(config.historicalComparison
    ? [
        `The preserved historical run reported **${config.historicalComparison.previousTypeSpecOnly}** TypeSpec-only findings. This fixed-analyzer run reports **${byPhase.A.typeSpecOnly + byPhase.B.typeSpecOnly}**, a change of **${byPhase.A.typeSpecOnly + byPhase.B.typeSpecOnly - config.historicalComparison.previousTypeSpecOnly}**. The historical evidence remains unchanged at [${config.historicalComparison.label}](${config.historicalComparison.summary}).`,
        "",
      ]
    : []),
  "## Tentative issue analyses",
  "",
  "| Category | Count |",
  "| --- | ---: |",
  ...Object.entries(issueCounts).map(([category, count]) => `| \`${category}\` | ${count} |`),
  ...(Object.keys(issueCounts).length ? [] : ["| — | 0 |"]),
  "",
  "## PR reports",
  "",
  "| PR | Updated | Status | Phase A | Phase B | Issues |",
  "| --- | --- | --- | --- | --- | ---: |",
  ...aggregate.records.map((record) => {
    const phase = (value) =>
      value
        ? `OAD ${value.oadTotal}; TypeSpec ${value.typeSpecTotal}; TypeSpec-only ${value.typeSpecOnly}`
        : "—";
    return `| [#${record.number}](${record.report}) | ${record.updatedAt ?? record.mergedAt ?? "—"} | ${record.status} | ${phase(record.rollup?.byPhase?.A)} | ${phase(record.rollup?.byPhase?.B)} | ${record.issueIds.length} |`;
  }),
  "",
  "Phase A is Swagger BreakingChange versus TypeSpec same-version. Phase B is Cross-Version versus TypeSpec cross-version retained from the combined analyzer execution. OAD workflow duration is not treated as detector time.",
  "",
];
await writeFile(resolve(root, "README.md"), `${lines.join("\n")}\n`);

const manifest = {
  schemaVersion: 1,
  schemaCompatibility: ">=1 <2",
  id: selection.run.id,
  datasetId: selection.run.datasetId,
  immutable: true,
  title: config.title,
  generatedAt: selection.run.generatedAt,
  repository: selection.repository,
  reportSchema: {
    name: "azure-rest-api-specs/breaking-change-evaluator",
    version: 3,
    compatibility: ">=3 <4",
    legacy: false,
  },
  selection: {
    file: "selection.json",
    digest: createHash("sha256").update(selectionContent).digest("hex"),
    selectedCount: selection.selection.selectedCount,
    sourceCount: selection.selection.sourceCount,
    excludedCount: selection.selection.excludedCount,
    continuationCursor: selection.selection.continuationCursor,
  },
  analyzer: config.analyzer,
  records: aggregate.records.map((record) => ({
    pr: record.number,
    report: `prs/${record.number}/report.json`,
    status: record.status,
  })),
  status,
};
await writeFile(resolve(root, "run.json"), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Built ${basename(root)} with ${reports.length} reports.`);
