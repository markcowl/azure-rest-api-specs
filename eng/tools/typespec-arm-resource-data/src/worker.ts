import { compile, NodeHost, resolveCompilerOptions } from "@typespec/compiler";
import { readFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createProjectReadme } from "./aggregate.ts";
import { replaceDirectory } from "./io.ts";
import {
  collectRows,
  collectTargetDiagnostics,
  formatDiagnostics,
  operationsCsv,
  resourcesCsv,
  sha256,
  targetDiagnosticsJson,
} from "./report.ts";
import {
  targetRuleCode,
  type ArmLibraryProvenance,
  type ProjectInventory,
  type ProjectResult,
} from "./types.ts";

type ResolveArmResources =
  typeof import("@azure-tools/typespec-azure-resource-manager").resolveArmResources;

async function loadResolveArmResources(): Promise<ResolveArmResources> {
  try {
    return (await import("@azure-tools/typespec-azure-resource-manager")).resolveArmResources;
  } catch (error) {
    if (!(error instanceof SyntaxError) || !error.message.includes("skipTrivia")) throw error;
    // PR 5976's package loads an unrelated codefix that requires a newer compiler AST export.
    const packageJson = fileURLToPath(
      import.meta.resolve("@azure-tools/typespec-azure-resource-manager/package.json"),
    );
    const resourceModule = pathToFileURL(
      join(dirname(packageJson), "dist", "src", "resource.js"),
    ).href;
    return (
      (await import(resourceModule)) as {
        resolveArmResources: ResolveArmResources;
      }
    ).resolveArmResources;
  }
}

export interface WorkerRequest {
  repositoryRoot: string;
  project: ProjectInventory;
  sourceSha: string;
  sourceLockHash: string;
  reportLockHash: string;
  projectInputHash: string;
  toolVersion: string;
  toolSourceCommit: string;
  compilerVersion: string;
  armLibraryVersion: string;
  rulesetVersion: string;
  armLibraryProvenance?: ArmLibraryProvenance;
  reportDirectory: string;
}

function statusJson(result: ProjectResult): string {
  return `${JSON.stringify(result, null, 2)}\n`;
}

function errorMarkdown(request: WorkerRequest, diagnostics: string[], error?: unknown): string {
  const command =
    `node eng/tools/typespec-arm-resource-data/cmd/typespec-arm-resource-data.js ` +
    `--project "${request.project.root}" --report-directory "${request.reportDirectory}"`;
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
  const outputDirectory = join(projectDirectory, request.reportDirectory);
  const base = {
    service: request.project.service,
    projectRoot: request.project.root,
    entrypoint: request.project.main,
    classification: request.project.classification,
    sourceSha: request.sourceSha,
    sourceLockHash: request.sourceLockHash,
    reportLockHash: request.reportLockHash,
    projectInputHash: request.projectInputHash,
    toolVersion: request.toolVersion,
    toolSourceCommit: request.toolSourceCommit,
    compilerVersion: request.compilerVersion,
    armLibraryVersion: request.armLibraryVersion,
    rulesetVersion: request.rulesetVersion,
    ...(request.armLibraryProvenance ? { armLibraryProvenance: request.armLibraryProvenance } : {}),
    reportDirectory: request.reportDirectory,
  } as const;
  try {
    if (!request.project.main) throw new Error("Project has no main.tsp entrypoint.");
    const entrypoint = resolve(request.repositoryRoot, request.project.main);
    const [compilerOptions, configDiagnostics] = await resolveCompilerOptions(NodeHost, {
      entrypoint,
      cwd: projectDirectory,
    });
    const disabledRules = { ...compilerOptions.linterRuleSet?.disable };
    delete disabledRules[targetRuleCode];
    const program = await compile(NodeHost, entrypoint, {
      ...compilerOptions,
      emit: [],
      noEmit: true,
      linterRuleSet: {
        ...compilerOptions.linterRuleSet,
        enable: {
          ...compilerOptions.linterRuleSet?.enable,
          [targetRuleCode]: true,
        },
        ...(Object.keys(disabledRules).length > 0 ? { disable: disabledRules } : { disable: {} }),
      },
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
    const resolveArmResources = await loadResolveArmResources();
    const provider = resolveArmResources(program);
    const rows = collectRows(
      program,
      provider.resources ?? [],
      request.repositoryRoot,
      request.sourceSha,
    );
    const resources = resourcesCsv(rows.resources);
    const operations = operationsCsv(rows.operations);
    const rawTargetDiagnostics = allDiagnostics.filter(
      (diagnostic) => diagnostic.code === targetRuleCode,
    );
    const targetDiagnostics = collectTargetDiagnostics(
      rawTargetDiagnostics,
      rows,
      request.project,
      request.repositoryRoot,
      request.sourceSha,
    );
    const diagnosticsJson = targetDiagnosticsJson(targetDiagnostics);
    const resultWithoutStatusHash: ProjectResult = {
      ...base,
      status:
        targetDiagnostics.length > 0
          ? "succeeded-findings"
          : rows.resources.length === 0
            ? "zero-resource"
            : "succeeded-clean",
      resourceCount: rows.resources.length,
      operationCount: rows.operations.length,
      diagnosticCount: rawTargetDiagnostics.length,
      findingCount: targetDiagnostics.length,
      affectedLogicalNames: [
        ...new Set(targetDiagnostics.map((diagnostic) => diagnostic.resourceName).filter(Boolean)),
      ].sort(),
      correlatedResourceCount: new Set(
        targetDiagnostics.flatMap((diagnostic) =>
          diagnostic.correlatedResources.map((resource) => resource.resourceKey),
        ),
      ).size,
      matchedDiagnosticCount: targetDiagnostics.filter(
        (diagnostic) => diagnostic.correlationState === "matched",
      ).length,
      partialDiagnosticCount: targetDiagnostics.filter(
        (diagnostic) => diagnostic.correlationState === "partial",
      ).length,
      unmatchedDiagnosticCount: targetDiagnostics.filter(
        (diagnostic) => diagnostic.correlationState === "unmatched",
      ).length,
      targetDiagnostics,
      diagnostics: diagnosticSummary,
      outputHashes: {
        resourcesCsv: sha256(resources),
        operationsCsv: sha256(operations),
        diagnosticsJson: sha256(diagnosticsJson),
        readmeMd: undefined,
        statusJson: "",
      },
    };
    const readme =
      targetDiagnostics.length > 0 ? createProjectReadme(resultWithoutStatusHash) : undefined;
    if (readme) resultWithoutStatusHash.outputHashes.readmeMd = sha256(readme);
    resultWithoutStatusHash.outputHashes.statusJson = sha256(statusJson(resultWithoutStatusHash));
    await replaceDirectory(outputDirectory, {
      "resources.csv": resources,
      "operations.csv": operations,
      "diagnostics.json": diagnosticsJson,
      ...(readme ? { "README.md": readme } : {}),
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
    sourceLockHash: request.sourceLockHash,
    reportLockHash: request.reportLockHash,
    projectInputHash: request.projectInputHash,
    toolVersion: request.toolVersion,
    toolSourceCommit: request.toolSourceCommit,
    compilerVersion: request.compilerVersion,
    armLibraryVersion: request.armLibraryVersion,
    rulesetVersion: request.rulesetVersion,
    ...(request.armLibraryProvenance ? { armLibraryProvenance: request.armLibraryProvenance } : {}),
    reportDirectory: request.reportDirectory,
    status:
      error instanceof Error && error.message.startsWith("Project timed out")
        ? "timed-out"
        : "failed-compilation",
    resourceCount: 0,
    operationCount: 0,
    diagnosticCount: 0,
    findingCount: 0,
    affectedLogicalNames: [],
    correlatedResourceCount: 0,
    matchedDiagnosticCount: 0,
    partialDiagnosticCount: 0,
    unmatchedDiagnosticCount: 0,
    targetDiagnostics: [],
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
  await replaceDirectory(
    resolve(request.repositoryRoot, request.project.root, request.reportDirectory),
    {
      "status.json": statusJson(result),
      "errors.md": markdown,
    },
  );
  return result;
}

export async function readWorkerRequest(path: string): Promise<WorkerRequest> {
  return JSON.parse(await readFile(path, "utf8")) as WorkerRequest;
}
