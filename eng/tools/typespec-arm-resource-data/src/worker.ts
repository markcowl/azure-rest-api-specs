import { resolveArmResources } from "@azure-tools/typespec-azure-resource-manager";
import { compile, NodeHost, resolveCompilerOptions } from "@typespec/compiler";
import { readFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { replaceDirectory } from "./io.ts";
import { collectRows, formatDiagnostics, operationsCsv, resourcesCsv, sha256 } from "./report.ts";
import type { ProjectInventory, ProjectResult } from "./types.ts";

export interface WorkerRequest {
  repositoryRoot: string;
  project: ProjectInventory;
  sourceSha: string;
  dependencyLockHash: string;
  projectInputHash: string;
  toolVersion: string;
  compilerVersion: string;
  armLibraryVersion: string;
}

function statusJson(result: ProjectResult): string {
  return `${JSON.stringify(result, null, 2)}\n`;
}

function errorMarkdown(request: WorkerRequest, diagnostics: string[], error?: unknown): string {
  const command =
    `node eng/tools/typespec-arm-resource-data/cmd/typespec-arm-resource-data.js ` +
    `--project "${request.project.root}"`;
  return [
    `# ARM resource report failure`,
    "",
    `- Project: \`${request.project.root}\``,
    `- Entrypoint: \`${request.project.main ?? "none"}\``,
    `- Source SHA: \`${request.sourceSha}\``,
    `- Reproduce: \`${command}\``,
    "",
    "## Diagnostics",
    "",
    "```text",
    ...(diagnostics.length > 0 ? diagnostics : ["No compiler diagnostics were reported."]),
    "```",
    ...(error
      ? [
          "",
          "## Error",
          "",
          "```text",
          error instanceof Error ? (error.stack ?? error.message) : JSON.stringify(error),
          "```",
        ]
      : []),
    "",
  ].join("\n");
}

export async function runWorker(request: WorkerRequest): Promise<ProjectResult> {
  const projectDirectory = resolve(request.repositoryRoot, request.project.root);
  const outputDirectory = join(projectDirectory, "resource-data");
  const base = {
    service: request.project.service,
    projectRoot: request.project.root,
    entrypoint: request.project.main,
    classification: request.project.classification,
    sourceSha: request.sourceSha,
    dependencyLockHash: request.dependencyLockHash,
    projectInputHash: request.projectInputHash,
    toolVersion: request.toolVersion,
    compilerVersion: request.compilerVersion,
    armLibraryVersion: request.armLibraryVersion,
  } as const;
  try {
    if (!request.project.main) throw new Error("Project has no main.tsp entrypoint.");
    const entrypoint = resolve(request.repositoryRoot, request.project.main);
    const [compilerOptions, configDiagnostics] = await resolveCompilerOptions(NodeHost, {
      entrypoint,
      configPath: resolve(request.repositoryRoot, request.project.tspconfig),
      cwd: projectDirectory,
    });
    const program = await compile(NodeHost, entrypoint, {
      ...compilerOptions,
      emit: [],
      noEmit: true,
    });
    const allDiagnostics = [...configDiagnostics, ...program.diagnostics];
    const diagnostics = formatDiagnostics(allDiagnostics);
    const diagnosticSummary = {
      errors: allDiagnostics.filter((item) => item.severity === "error").length,
      warnings: allDiagnostics.filter((item) => item.severity === "warning").length,
      total: allDiagnostics.length,
    };
    if (diagnosticSummary.errors > 0) {
      throw Object.assign(new Error("TypeSpec compilation reported errors."), { diagnostics });
    }
    const provider = resolveArmResources(program);
    const rows = collectRows(
      program,
      provider.resources ?? [],
      request.repositoryRoot,
      request.sourceSha,
    );
    const resources = resourcesCsv(rows.resources);
    const operations = operationsCsv(rows.operations);
    const caseOnlyClashCount = rows.resources.filter((row) =>
      row.nameClashAnalysis.startsWith("case-only"),
    ).length;
    const genuineClashCount = rows.resources.filter((row) =>
      row.nameClashAnalysis.startsWith("genuine"),
    ).length;
    const resultWithoutStatusHash = {
      ...base,
      status: rows.resources.length === 0 ? "zero-resource" : "succeeded",
      resourceCount: rows.resources.length,
      operationCount: rows.operations.length,
      caseOnlyClashCount,
      genuineClashCount,
      diagnostics: diagnosticSummary,
      outputHashes: {
        resourcesCsv: sha256(resources),
        operationsCsv: sha256(operations),
        statusJson: "",
      },
    } satisfies ProjectResult;
    resultWithoutStatusHash.outputHashes.statusJson = sha256(statusJson(resultWithoutStatusHash));
    await replaceDirectory(outputDirectory, {
      "resources.csv": resources,
      "operations.csv": operations,
      "status.json": statusJson(resultWithoutStatusHash),
    });
    return resultWithoutStatusHash;
  } catch (error) {
    return writeWorkerFailure(request, error);
  }
}

export async function writeWorkerFailure(
  request: WorkerRequest,
  error: unknown,
): Promise<ProjectResult> {
  const diagnostics =
    error && typeof error === "object" && "diagnostics" in error && Array.isArray(error.diagnostics)
      ? (error.diagnostics as string[])
      : [];
  const markdown = errorMarkdown(request, diagnostics, error);
  const result = {
    service: request.project.service,
    projectRoot: request.project.root,
    entrypoint: request.project.main,
    classification: request.project.classification,
    sourceSha: request.sourceSha,
    dependencyLockHash: request.dependencyLockHash,
    projectInputHash: request.projectInputHash,
    toolVersion: request.toolVersion,
    compilerVersion: request.compilerVersion,
    armLibraryVersion: request.armLibraryVersion,
    status: "failed",
    resourceCount: 0,
    operationCount: 0,
    caseOnlyClashCount: 0,
    genuineClashCount: 0,
    diagnostics: {
      errors: diagnostics.length || 1,
      warnings: 0,
      total: diagnostics.length || 1,
    },
    outputHashes: {
      statusJson: "",
      errorsMd: sha256(markdown),
    },
    error: error instanceof Error ? error.message : String(error),
  } satisfies ProjectResult;
  result.outputHashes.statusJson = sha256(statusJson(result));
  await replaceDirectory(resolve(request.repositoryRoot, request.project.root, "resource-data"), {
    "status.json": statusJson(result),
    "errors.md": markdown,
  });
  return result;
}

export async function readWorkerRequest(path: string): Promise<WorkerRequest> {
  return JSON.parse(await readFile(path, "utf8")) as WorkerRequest;
}
