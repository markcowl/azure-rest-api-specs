import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import { isAbsolute, join, relative, resolve } from "node:path";
import { renderMarkdown, validateRollup } from "./report.ts";
import type { EvaluationReport } from "./types.ts";

export interface RunCatalogEntry {
  id: string;
  datasetId: string;
  title: string;
  path: string;
  summary: string;
  manifest: string;
  selection: string;
  generatedAt: string;
  status: Record<"total" | "evaluated" | "notQualified" | "partial" | "failed", number>;
}

export interface RunCatalog {
  schemaVersion: 1;
  schemaCompatibility: ">=1 <2";
  branch: string;
  runs: RunCatalogEntry[];
}

export interface RunManifest {
  schemaVersion: 1;
  schemaCompatibility: ">=1 <2";
  id: string;
  datasetId: string;
  immutable: true;
  title: string;
  generatedAt: string;
  repository: string;
  reportSchema: {
    name: string;
    version: number;
    compatibility: string;
    legacy: boolean;
  };
  selection: {
    file: string;
    digest: string;
    selectedCount: number;
    sourceCount: number;
    excludedCount: number;
    continuationCursor: string | null;
  };
  analyzer: {
    sourceSha: string;
    artifactDigest: string;
    prototypeParentSha: string;
    cacheFormatVersion: number;
    environment: Record<string, string>;
    readiness: { verified: boolean; intrinsicFixVerified: boolean; details: string };
  };
  records: { pr: number; report: string; status: EvaluationReport["status"] }[];
  status: RunCatalogEntry["status"];
}

function sha256(content: string): string {
  return createHash("sha256").update(content).digest("hex");
}

function assertRelativeLink(value: string, label: string): void {
  if (
    isAbsolute(value) ||
    value.includes("..") ||
    /^[a-z]+:\/\//i.test(value) ||
    value.includes("\\")
  ) {
    throw new Error(`${label} must be a repository-relative forward-slash path`);
  }
}

function assertPrivateDataAbsent(value: unknown, label: string): void {
  const serialized = JSON.stringify(value);
  if (
    /[A-Z]:\\Users\\/i.test(serialized) ||
    /(?:GH_TOKEN|GITHUB_TOKEN|Authorization:\s*(?:token|Bearer))/i.test(serialized) ||
    /gh[opsu]_[A-Za-z0-9_]{20,}/.test(serialized)
  ) {
    throw new Error(`${label} contains a local path or credential`);
  }
}

function validateIssueReferences(report: EvaluationReport): void {
  const findingIds = new Set([
    ...report.oadFindings.map((finding) => finding.occurrenceId),
    ...report.typeSpecProjects.flatMap((project) =>
      project.findings.map((finding) => finding.occurrenceId),
    ),
  ]);
  for (const analysis of report.issueAnalyses) {
    if (analysis.findingIds.some((id) => !findingIds.has(id))) {
      throw new Error(`${analysis.id} references a finding outside the report`);
    }
  }
}

function validateTiming(report: EvaluationReport): void {
  for (const run of Object.values(report.qualification.evidence.runs ?? {})) {
    if (run?.detectorDurationMs !== undefined && !run.detectorTimingSource) {
      throw new Error("OAD detector timing is missing its provenance source");
    }
  }
  for (const project of report.typeSpecProjects) {
    if (project.phaseExecutions?.A?.timingScope === "combined") {
      throw new Error("Phase A TypeSpec timing cannot use combined scope");
    }
    if (
      project.phaseExecutions?.B?.timing &&
      project.phaseExecutions.B.timingScope !== "combined"
    ) {
      throw new Error("Phase B TypeSpec timing must identify combined analyzer scope");
    }
  }
}

function countStatuses(reports: EvaluationReport[]): RunCatalogEntry["status"] {
  return {
    total: reports.length,
    evaluated: reports.filter((report) => report.status === "evaluated").length,
    notQualified: reports.filter((report) => report.status === "not-qualified").length,
    partial: reports.filter((report) => report.status === "partial").length,
    failed: reports.filter((report) => report.status === "failed").length,
  };
}

export async function validateRunDirectory(runDirectory: string): Promise<RunManifest> {
  const root = resolve(runDirectory);
  const manifest = JSON.parse(await readFile(join(root, "run.json"), "utf8")) as RunManifest;
  if (
    manifest.schemaVersion !== 1 ||
    manifest.schemaCompatibility !== ">=1 <2" ||
    manifest.immutable !== true
  ) {
    throw new Error(`${manifest.id ?? root} has an unsupported run contract`);
  }
  assertRelativeLink(manifest.selection.file, "selection.file");
  const selectionContent = await readFile(join(root, manifest.selection.file), "utf8");
  if (sha256(selectionContent) !== manifest.selection.digest) {
    throw new Error(`${manifest.id} selection digest does not match`);
  }
  if (manifest.records.length !== manifest.selection.selectedCount) {
    throw new Error(`${manifest.id} record count does not match selected count`);
  }

  const reports: EvaluationReport[] = [];
  for (const record of manifest.records) {
    assertRelativeLink(record.report, `PR ${record.pr} report`);
    const jsonPath = join(root, record.report);
    const report = JSON.parse(await readFile(jsonPath, "utf8")) as EvaluationReport;
    if (manifest.reportSchema.legacy) {
      if (
        (report as unknown as { schemaVersion?: number }).schemaVersion !==
          manifest.reportSchema.version ||
        !["evaluated", "partial", "not-qualified", "failed"].includes(report.status)
      ) {
        throw new Error(`${manifest.id} PR ${record.pr} has an invalid legacy report`);
      }
    } else {
      validateRollup(report);
      validateIssueReferences(report);
      validateTiming(report);
    }
    assertPrivateDataAbsent(report, `${manifest.id} PR ${record.pr}`);
    if (
      (!manifest.reportSchema.legacy &&
        (report.run.id !== manifest.id || report.run.datasetId !== manifest.datasetId)) ||
      report.pullRequest?.number !== record.pr ||
      report.status !== record.status
    ) {
      throw new Error(`${manifest.id} PR ${record.pr} run metadata does not match its manifest`);
    }
    const markdownPath = jsonPath.replace(/\.json$/, ".md");
    const markdown = await readFile(markdownPath, "utf8");
    if (!manifest.reportSchema.legacy && markdown !== renderMarkdown(report)) {
      throw new Error(`${manifest.id} PR ${record.pr} Markdown is not deterministic`);
    }
    reports.push(report);
  }
  const reportDirectories = (await readdir(join(root, "prs"), { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  if (
    reportDirectories.some(
      (directory) => !manifest.records.some((record) => String(record.pr) === directory),
    )
  ) {
    throw new Error(`${manifest.id} contains an unindexed PR report`);
  }
  if (JSON.stringify(countStatuses(reports)) !== JSON.stringify(manifest.status)) {
    throw new Error(`${manifest.id} status totals do not recompute`);
  }
  assertPrivateDataAbsent(manifest, `${manifest.id} manifest`);
  return manifest;
}

export async function validateRunCatalog(reportsRoot: string): Promise<RunCatalog> {
  const root = resolve(reportsRoot);
  const catalog = JSON.parse(await readFile(join(root, "index.json"), "utf8")) as RunCatalog;
  if (catalog.schemaVersion !== 1 || catalog.schemaCompatibility !== ">=1 <2") {
    throw new Error("Unsupported report catalog contract");
  }
  if (new Set(catalog.runs.map((run) => run.id)).size !== catalog.runs.length) {
    throw new Error("Run catalog IDs must be unique");
  }
  for (const entry of catalog.runs) {
    for (const [label, value] of [
      ["path", entry.path],
      ["summary", entry.summary],
      ["manifest", entry.manifest],
      ["selection", entry.selection],
    ] as const) {
      assertRelativeLink(value, `${entry.id}.${label}`);
    }
    const manifest = await validateRunDirectory(join(root, entry.path));
    const relativeManifest = relative(root, join(root, entry.path, "run.json")).replaceAll(
      "\\",
      "/",
    );
    if (
      manifest.id !== entry.id ||
      manifest.datasetId !== entry.datasetId ||
      entry.manifest !== relativeManifest ||
      JSON.stringify(manifest.status) !== JSON.stringify(entry.status)
    ) {
      throw new Error(`${entry.id} catalog entry does not match its manifest`);
    }
  }
  assertPrivateDataAbsent(catalog, "report catalog");
  return catalog;
}
