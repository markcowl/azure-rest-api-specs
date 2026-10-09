import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { runProcess } from "./process.ts";
import { typeSpecJsonReportSchema, type TypeSpecJsonReport } from "./schema.ts";
import type { ProjectResult, TypeSpecFinding } from "./types.ts";

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
    occurrenceId: `${project}:tsp-${index}`,
    project,
    kind: finding.kind,
    rule: finding.rule,
    phase: finding.phase,
    severity: finding.severity,
    message: finding.message,
    operation: finding.operation,
    element: finding.element,
    component: finding.component,
    statusCode: finding.statusCode,
    versionPair: finding.versionPair,
    location: finding.location,
  }));
}

function processFailure(
  project: string,
  result: Awaited<ReturnType<typeof runProcess>>,
): ProjectResult {
  return {
    project,
    status: "error",
    exitCode: result.code ?? undefined,
    findings: [],
    error: result.timedOut
      ? "TypeSpec analysis timed out"
      : result.signal
        ? `TypeSpec analysis terminated by ${result.signal}`
        : result.stderr || result.stdout || "TypeSpec analysis failed without output",
  };
}

export async function runTypeSpecProject(
  executable: string,
  checkout: string,
  baseSha: string,
  project: string,
  outputDir: string,
  processRunner: ProcessRunner = runProcess,
): Promise<ProjectResult> {
  const safeName = createHash("sha256").update(project).digest("hex").slice(0, 16);
  const jsonOutput = join(outputDir, `${safeName}.json`);
  const result = await processRunner(
    process.execPath,
    [executable, project, "--base-ref", baseSha, "--json-output", jsonOutput, "--fail-on-breaking"],
    { cwd: checkout, timeoutMs: 10 * 60_000 },
  );
  if (result.code !== 0 && result.code !== 1) {
    return processFailure(project, result);
  }
  try {
    const content = await readFile(jsonOutput, "utf8");
    const parsed = typeSpecJsonReportSchema.parse(JSON.parse(content));
    if ((result.code === 1) !== parsed.requiresAction) {
      throw new Error(
        `exit ${result.code} disagrees with requiresAction=${String(parsed.requiresAction)}`,
      );
    }
    return {
      project,
      status: "complete",
      exitCode: result.code,
      reportDigest: createHash("sha256").update(content).digest("hex"),
      comparisonsPerformed: parsed.summary.comparisonsPerformed,
      versionComparisons: parsed.summary.versionComparisons,
      noComparisonReason: parsed.summary.noComparisonReason,
      findings: mapFindings(project, parsed),
    };
  } catch (error) {
    return {
      project,
      status: "error",
      exitCode: result.code,
      findings: [],
      error: `Missing, malformed, or schema-invalid TypeSpec report: ${String(error)}`,
    };
  }
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
