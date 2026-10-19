import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { runProcess } from "./process.ts";
import { typeSpecJsonReportSchema, type TypeSpecJsonReport } from "./schema.ts";
import type { Phase, ProjectResult, TypeSpecFinding, TypeSpecPhaseExecution } from "./types.ts";
import { sanitizeLocalPathsInString } from "./sanitize.ts";

type ProcessRunner = typeof runProcess;

export interface ProjectExecutionSummary {
  status: "complete" | "partial";
  complete: boolean;
  exitCode: 0 | 4;
  projects: ProjectResult[];
  errors: string[];
}

export async function resolveProjectRoots(
  checkout: string,
  changedFiles: string[],
  baseSha?: string,
): Promise<string[]> {
  const root = resolve(checkout);
  const projects = new Set<string>();
  for (const changedFile of changedFiles) {
    let directory = dirname(join(root, changedFile));
    let resolvedProject = false;
    while (directory.startsWith(root + sep) || directory === root) {
      if (existsSync(join(directory, "tspconfig.yaml"))) {
        projects.add(relative(root, directory).replaceAll("\\", "/"));
        resolvedProject = true;
        break;
      }
      const parent = dirname(directory);
      if (parent === directory) break;
      directory = parent;
    }
    if (!resolvedProject && baseSha) {
      let relativeDirectory = dirname(changedFile).replaceAll("\\", "/");
      while (relativeDirectory.startsWith("specification/")) {
        const existsAtBase = await runProcess(
          "git",
          ["cat-file", "-e", `${baseSha}:${relativeDirectory}/tspconfig.yaml`],
          { cwd: root },
        );
        if (existsAtBase.code === 0) {
          projects.add(relativeDirectory);
          break;
        }
        const parent = dirname(relativeDirectory).replaceAll("\\", "/");
        if (parent === relativeDirectory) break;
        relativeDirectory = parent;
      }
    }
  }
  return [...projects].sort();
}

function mapFindings(project: string, report: TypeSpecJsonReport): TypeSpecFinding[] {
  return report.findings.map((finding, index) => ({
    occurrenceId: `${project}:tsp-${finding.phase === "same-version" ? "A" : "B"}-${index}`,
    project,
    kind: finding.kind,
    rule: finding.rule,
    phase: finding.phase,
    severity: finding.severity,
    suppressed: finding.suppressed,
    message: finding.message,
    operation: finding.operation,
    element: finding.element,
    component: finding.component,
    statusCode: finding.statusCode,
    sourceTraceLevel: finding.sourceTraceLevel,
    sourceElementPath: finding.sourceElementPath,
    suppression: finding.suppression,
    versionPair: finding.versionPair,
    location: finding.location,
  }));
}

function normalizeArtifactPaths(value: unknown): void {
  if (!value || typeof value !== "object") return;
  for (const [key, child] of Object.entries(value)) {
    if (key === "file" && typeof child === "string") {
      const file = child.replaceAll("\\", "/");
      const specification = file.indexOf("specification/");
      (value as Record<string, unknown>)[key] =
        specification >= 0 ? file.slice(specification) : "<local-path>";
    } else {
      normalizeArtifactPaths(child);
    }
  }
}

function processFailure(
  phase: Phase,
  jsonReport: string,
  markdownReport: string,
  result: Awaited<ReturnType<typeof runProcess>>,
): TypeSpecPhaseExecution {
  return {
    phase,
    analyzerPhase: phase === "A" ? "same-version" : "all-phases",
    timingScope: phase === "A" ? "phase" : "combined",
    status: "error",
    exitCode: result.code ?? undefined,
    jsonReport,
    markdownReport,
    error: result.timedOut
      ? "TypeSpec analysis timed out"
      : result.signal
        ? `TypeSpec analysis terminated by ${result.signal}`
        : result.stderr || result.stdout || "TypeSpec analysis failed without output",
  };
}

async function runTypeSpecPhase(
  executable: string,
  checkout: string,
  baseSha: string,
  project: string,
  outputDir: string,
  phase: Phase,
  processRunner: ProcessRunner = runProcess,
): Promise<{ execution: TypeSpecPhaseExecution; findings: TypeSpecFinding[] }> {
  const safeName = createHash("sha256").update(project).digest("hex").slice(0, 16);
  const suffix = phase.toLowerCase();
  const jsonOutput = join(outputDir, `${safeName}-phase-${suffix}.json`);
  const markdownOutput = join(outputDir, `${safeName}-phase-${suffix}.md`);
  const analyzerPhase = phase === "A" ? "same-version" : "all-phases";
  const phaseArguments = phase === "A" ? ["--phase", "same-version"] : [];
  const result = await processRunner(
    process.execPath,
    [
      executable,
      project,
      "--base-ref",
      baseSha,
      ...phaseArguments,
      "--json-output",
      jsonOutput,
      "--markdown-output",
      markdownOutput,
      "--fail-on-breaking",
    ],
    { cwd: checkout, timeoutMs: 10 * 60_000 },
  );
  if (result.code !== 0 && result.code !== 1) {
    return {
      execution: processFailure(phase, jsonOutput, markdownOutput, result),
      findings: [],
    };
  }
  try {
    const [rawJsonContent, rawMarkdownContent] = await Promise.all([
      readFile(jsonOutput, "utf8"),
      readFile(markdownOutput, "utf8"),
    ]);
    const analyzerReport = JSON.parse(rawJsonContent) as unknown as Record<string, unknown>;
    analyzerReport.specPaths = [project];
    delete analyzerReport.baseRevision;
    delete analyzerReport.headRevision;
    normalizeArtifactPaths(analyzerReport);
    const jsonContent = `${JSON.stringify(analyzerReport, null, 2)}\n`;
    const markdownContent = sanitizeLocalPathsInString(rawMarkdownContent, project);
    await Promise.all([
      writeFile(jsonOutput, jsonContent),
      writeFile(markdownOutput, markdownContent),
    ]);
    const parsed = typeSpecJsonReportSchema.parse(analyzerReport);
    if ((result.code === 1) !== parsed.requiresAction) {
      throw new Error(
        `exit ${result.code} disagrees with requiresAction=${String(parsed.requiresAction)}`,
      );
    }
    const expectedFindingPhase = phase === "A" ? "same-version" : "cross-version";
    const findings = mapFindings(project, parsed).filter(
      (finding) => finding.phase === expectedFindingPhase,
    );
    const versionComparisons = parsed.summary.versionComparisons.filter(
      (comparison) => comparison.phase === expectedFindingPhase,
    );
    return {
      execution: {
        phase,
        analyzerPhase,
        timingScope: phase === "A" ? "phase" : "combined",
        status: "complete",
        exitCode: result.code,
        jsonReport: jsonOutput,
        markdownReport: markdownOutput,
        jsonDigest: createHash("sha256").update(jsonContent).digest("hex"),
        markdownDigest: createHash("sha256").update(markdownContent).digest("hex"),
        timing: parsed.timing,
        comparisonsPerformed: versionComparisons.length,
        versionComparisons,
        noComparisonReason:
          versionComparisons.length === 0
            ? (parsed.summary.noComparisonReason ??
              `Combined analyzer report contained no ${expectedFindingPhase} comparisons`)
            : undefined,
      },
      findings,
    };
  } catch (error) {
    const processOutput = [result.stderr, result.stdout].filter(Boolean).join("\n").trim();
    return {
      execution: {
        phase,
        analyzerPhase,
        timingScope: phase === "A" ? "phase" : "combined",
        status: "error",
        exitCode: result.code,
        jsonReport: jsonOutput,
        markdownReport: markdownOutput,
        error: `Missing, malformed, or schema-invalid TypeSpec report: ${String(error)}${
          processOutput ? `; analyzer output: ${processOutput}` : ""
        }`,
      },
      findings: [],
    };
  }
}

export async function runTypeSpecProject(
  executable: string,
  checkout: string,
  baseSha: string,
  project: string,
  outputDir: string,
  processRunner: ProcessRunner = runProcess,
): Promise<ProjectResult> {
  const phaseResults = [];
  for (const phase of ["A", "B"] as const) {
    phaseResults.push(
      await runTypeSpecPhase(
        executable,
        checkout,
        baseSha,
        project,
        outputDir,
        phase,
        processRunner,
      ),
    );
  }
  const phaseExecutions = Object.fromEntries(
    phaseResults.map(({ execution }) => [execution.phase, execution]),
  ) as Record<Phase, TypeSpecPhaseExecution>;
  const errors = phaseResults
    .map(({ execution }) => execution.error)
    .filter((error): error is string => Boolean(error));
  const findings = phaseResults.flatMap((result) => result.findings);
  const versionComparisons = phaseResults.flatMap(
    ({ execution }) => execution.versionComparisons ?? [],
  );
  const reportDigests = phaseResults
    .map(({ execution }) => execution.jsonDigest)
    .filter((digest): digest is string => Boolean(digest));
  return {
    project,
    status: errors.length ? "error" : "complete",
    exitCode: errors.length
      ? phaseResults.find(({ execution }) => execution.status === "error")?.execution.exitCode
      : phaseResults.some(({ execution }) => execution.exitCode === 1)
        ? 1
        : 0,
    phaseExecutions,
    reportDigest:
      reportDigests.length === phaseResults.length
        ? createHash("sha256").update(reportDigests.join(":")).digest("hex")
        : undefined,
    comparisonsPerformed: versionComparisons.length,
    versionComparisons,
    findings,
    error: errors.length ? errors.join("; ") : undefined,
  };
}

export async function runTypeSpecProjects(
  executable: string,
  checkout: string,
  baseSha: string,
  projects: string[],
  outputDir: string,
  processRunner: ProcessRunner = runProcess,
): Promise<ProjectExecutionSummary> {
  const results: ProjectResult[] = [];
  for (const project of projects) {
    results.push(
      await runTypeSpecProject(executable, checkout, baseSha, project, outputDir, processRunner),
    );
  }
  const errors = results
    .filter((project) => project.error)
    .map((project) => `${project.project}: ${project.error}`);
  const complete = errors.length === 0;
  return {
    status: complete ? "complete" : "partial",
    complete,
    exitCode: complete ? 0 : 4,
    projects: results,
    errors,
  };
}
