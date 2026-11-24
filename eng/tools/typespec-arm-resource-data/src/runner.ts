import { findTypeSpecProjects } from "@azure-tools/specs-shared/typespec-projects";
import { execFile, spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { createReadme, createSummary } from "./aggregate.ts";
import { discoverProjects, filterProjects } from "./discovery.ts";
import { atomicWriteFile, replaceDirectory } from "./io.ts";
import { sha256 } from "./report.ts";
import {
  referenceToolCommit,
  targetRuleCode,
  targetRuleDocumentationUrl,
  targetRuleShortName,
  verifiedRuleBehaviorCommit,
  type ArmLibraryProvenance,
  type InventoryReconciliation,
  type Manifest,
  type ProjectInventory,
  type ProjectResult,
  type TargetRuleMetadata,
} from "./types.ts";
import type { WorkerRequest } from "./worker.ts";

const execFileAsync = promisify(execFile);
const reportToolPackage = "@azure-tools/typespec-arm-resource-data-report";

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export interface RunOptions {
  repositoryRoot: string;
  sourceRef?: string;
  toolSourceCommit?: string;
  services: string[];
  projects: string[];
  concurrency: number;
  timeoutMs: number;
  resume: boolean;
  reportDirectory?: string;
  armLibraryProvenance?: ArmLibraryProvenance;
}

export function validateReportDirectoryName(value: string): string {
  if (
    value.length === 0 ||
    value === "." ||
    value === ".." ||
    value.includes("/") ||
    value.includes("\\") ||
    !/^[A-Za-z0-9][A-Za-z0-9._-]*$/.test(value)
  ) {
    throw new Error(
      "--report-directory must be a single portable directory name without path separators.",
    );
  }
  return value;
}

export function validateArmLibraryProvenance(value: ArmLibraryProvenance): ArmLibraryProvenance {
  let packageUrl: URL;
  try {
    packageUrl = new URL(value.packageUrl);
  } catch {
    throw new Error("--arm-library-package-url must be an absolute URL.");
  }
  if (packageUrl.protocol !== "https:") {
    throw new Error("--arm-library-package-url must use HTTPS.");
  }
  if (value.packageVersion.trim().length === 0) {
    throw new Error("--arm-library-package-version must not be empty.");
  }
  if (!/^sha512-[A-Za-z0-9+/]+={0,2}$/.test(value.packageIntegrity)) {
    throw new Error("--arm-library-package-integrity must be a SHA-512 SRI value.");
  }
  if (!/^[0-9a-f]{64}$/i.test(value.packageSha256)) {
    throw new Error("--arm-library-package-sha256 must be a 64-character SHA-256 hash.");
  }
  if (!Number.isSafeInteger(value.pullRequest) || value.pullRequest < 1) {
    throw new Error("--arm-library-pr must be a positive integer.");
  }
  if (!/^[0-9a-f]{40}$/i.test(value.prHeadSha)) {
    throw new Error("--arm-library-pr-head-sha must be a 40-character Git commit SHA.");
  }
  return {
    packageUrl: packageUrl.href,
    packageVersion: value.packageVersion,
    packageIntegrity: value.packageIntegrity,
    packageSha256: value.packageSha256.toLowerCase(),
    pullRequest: value.pullRequest,
    prHeadSha: value.prHeadSha.toLowerCase(),
  };
}

function projectOutputDirectory(
  repositoryRoot: string,
  projectRoot: string,
  reportDirectory: string,
) {
  return resolve(repositoryRoot, projectRoot, reportDirectory);
}

function aggregateOutputDirectory(repositoryRoot: string, reportDirectory: string) {
  const base = join(repositoryRoot, "documentation", "typespec-arm-resource-data");
  return reportDirectory === "resource-data" ? base : join(base, reportDirectory);
}

async function packageVersion(repositoryRoot: string, packageName: string): Promise<string> {
  const installedPath = join(
    repositoryRoot,
    "node_modules",
    ...packageName.split("/"),
    "package.json",
  );
  try {
    return (JSON.parse(await readFile(installedPath, "utf8")) as { version: string }).version;
  } catch (error) {
    if (
      packageName !== reportToolPackage ||
      !(error instanceof Error && "code" in error && error.code === "ENOENT")
    ) {
      throw error;
    }
    const workspacePath = join(
      repositoryRoot,
      "eng",
      "tools",
      "typespec-arm-resource-data",
      "package.json",
    );
    return (JSON.parse(await readFile(workspacePath, "utf8")) as { version: string }).version;
  }
}

async function gitSha(repositoryRoot: string, ref: string): Promise<string> {
  return (await execFileAsync("git", ["rev-parse", ref], { cwd: repositoryRoot })).stdout.trim();
}

async function gitTimestamp(repositoryRoot: string, ref: string): Promise<string> {
  return (
    await execFileAsync("git", ["show", "-s", "--format=%cI", ref], { cwd: repositoryRoot })
  ).stdout.trim();
}

async function gitFile(repositoryRoot: string, ref: string, path: string): Promise<Buffer> {
  return new Promise<Buffer>((resolvePromise, reject) => {
    execFile(
      "git",
      ["show", `${ref}:${path}`],
      { cwd: repositoryRoot, encoding: "buffer", maxBuffer: 100 * 1024 * 1024 },
      (error, stdout) => {
        if (error) reject(new Error(`git show ${ref}:${path} failed`, { cause: error }));
        else resolvePromise(stdout);
      },
    );
  });
}

async function pnpmVersion(repositoryRoot: string): Promise<string> {
  return (await execFileAsync("pnpm", ["--version"], { cwd: repositoryRoot })).stdout.trim();
}

async function inspectTargetRule(
  armLibraryVersion: string,
): Promise<TargetRuleMetadata | undefined> {
  const module = (await import("@azure-tools/typespec-azure-resource-manager")) as {
    $linter?: {
      rules?: { name: string; severity: string; url?: string }[];
      ruleSets?: Record<string, { enable?: Record<string, boolean> }>;
    };
  };
  const rule = module.$linter?.rules?.find((candidate) => candidate.name === targetRuleShortName);
  if (!rule) return undefined;
  return {
    code: targetRuleCode,
    shortName: targetRuleShortName,
    documentationUrl: rule.url ?? targetRuleDocumentationUrl,
    severity: rule.severity,
    enabledByDefault: module.$linter?.ruleSets?.all?.enable?.[targetRuleCode] === true,
    installedPackage: `@azure-tools/typespec-azure-resource-manager@${armLibraryVersion}`,
    verifiedBehaviorCommit: verifiedRuleBehaviorCommit,
  };
}

async function projectInputHash(
  repositoryRoot: string,
  sourceSha: string,
  project: ProjectInventory,
  reportDirectory: string,
): Promise<string> {
  const { stdout } = await execFileAsync("git", ["ls-tree", "-r", sourceSha, "--", project.root], {
    cwd: repositoryRoot,
    maxBuffer: 10 * 1024 * 1024,
  });
  const entries = stdout
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => {
      const [metadata, rawPath] = line.split("\t", 2);
      const path = rawPath.replaceAll("\\", "/");
      const blob = metadata.split(" ")[2];
      return { path, blob };
    })
    .filter(({ path }) => path.endsWith(".tsp") || path.endsWith(".yaml") || path.endsWith(".json"))
    .filter(
      ({ path }) =>
        !path.startsWith(`${project.root}/resource-data/`) &&
        !path.startsWith(`${project.root}/${reportDirectory}/`) &&
        !new RegExp(`^${escapeRegExp(project.root)}/[^/]+/status\\.json$`).test(path),
    )
    .sort((left, right) => left.path.localeCompare(right.path));
  const hash = createHash("sha256");
  for (const entry of entries) {
    hash.update(entry.path);
    hash.update("\0");
    hash.update(entry.blob);
    hash.update("\0");
  }
  return hash.digest("hex");
}

async function validateStoredResult(
  repositoryRoot: string,
  result: ProjectResult,
  reportDirectory: string,
): Promise<boolean> {
  const output = projectOutputDirectory(repositoryRoot, result.projectRoot, reportDirectory);
  try {
    const persisted = JSON.parse(
      await readFile(join(output, "status.json"), "utf8"),
    ) as ProjectResult;
    if (JSON.stringify(persisted) !== JSON.stringify(result)) return false;
    const successful =
      result.status === "succeeded-findings" ||
      result.status === "succeeded-clean" ||
      result.status === "zero-resource";
    const required = successful
      ? ["resourcesCsv", "operationsCsv", "diagnosticsJson"]
      : result.status === "failed-compilation" || result.status === "timed-out"
        ? ["errorsMd"]
        : [];
    if (required.some((key) => !result.outputHashes[key as keyof typeof result.outputHashes])) {
      return false;
    }
    const checks: [string, string | undefined][] = [
      ["resources.csv", result.outputHashes.resourcesCsv],
      ["operations.csv", result.outputHashes.operationsCsv],
      ["diagnostics.json", result.outputHashes.diagnosticsJson],
      ["errors.md", result.outputHashes.errorsMd],
    ];
    for (const [name, hash] of checks) {
      if (hash && sha256(await readFile(join(output, name))) !== hash) return false;
    }
    const statusForHash = structuredClone(result);
    statusForHash.outputHashes.statusJson = "";
    return sha256(`${JSON.stringify(statusForHash, null, 2)}\n`) === result.outputHashes.statusJson;
  } catch {
    return false;
  }
}

export async function canResume(
  repositoryRoot: string,
  request: WorkerRequest,
): Promise<ProjectResult | undefined> {
  const output = projectOutputDirectory(
    repositoryRoot,
    request.project.root,
    request.reportDirectory,
  );
  try {
    const result = JSON.parse(await readFile(join(output, "status.json"), "utf8")) as ProjectResult;
    if (
      result.sourceSha !== request.sourceSha ||
      result.toolVersion !== request.toolVersion ||
      result.toolSourceCommit !== request.toolSourceCommit ||
      result.sourceLockHash !== request.sourceLockHash ||
      result.reportLockHash !== request.reportLockHash ||
      result.projectInputHash !== request.projectInputHash ||
      JSON.stringify(result.armLibraryProvenance) !==
        JSON.stringify(request.armLibraryProvenance) ||
      result.reportDirectory !== request.reportDirectory
    ) {
      return undefined;
    }
    return (await validateStoredResult(repositoryRoot, result, request.reportDirectory))
      ? result
      : undefined;
  } catch {
    return undefined;
  }
}

export async function runChild(
  request: WorkerRequest,
  timeoutMs: number,
  command = fileURLToPath(new URL("../cmd/typespec-arm-resource-data.js", import.meta.url)),
): Promise<ProjectResult> {
  const scratch = join(
    request.repositoryRoot,
    "node_modules",
    ".cache",
    "typespec-arm-resource-data",
  );
  await mkdir(scratch, { recursive: true });
  const id = createHash("sha256")
    .update(`${request.project.root}\0${request.reportDirectory}`)
    .digest("hex")
    .slice(0, 16);
  const input = join(scratch, `${id}.request.json`);
  const output = join(scratch, `${id}.result.json`);
  await writeFile(input, JSON.stringify(request));
  try {
    await new Promise<void>((resolvePromise, reject) => {
      let timedOut = false;
      const child = spawn(process.execPath, [command, "--internal-worker", input, output], {
        cwd: request.repositoryRoot,
        stdio: ["ignore", "inherit", "inherit"],
      });
      const timer = setTimeout(() => {
        timedOut = true;
        child.kill("SIGKILL");
      }, timeoutMs);
      child.once("error", (error) => {
        clearTimeout(timer);
        reject(error);
      });
      child.once("close", (code) => {
        clearTimeout(timer);
        if (timedOut) {
          reject(new Error(`Project timed out after ${timeoutMs}ms`));
        } else if (code === 0) {
          resolvePromise();
        } else {
          reject(new Error(`Worker exited with code ${code}`));
        }
      });
    });
    return JSON.parse(await readFile(output, "utf8")) as ProjectResult;
  } finally {
    await rm(input, { force: true });
    await rm(output, { force: true });
  }
}

async function runPool<T, R>(
  items: T[],
  concurrency: number,
  execute: (item: T) => Promise<R>,
): Promise<R[]> {
  const results: R[] = [];
  let next = 0;
  async function worker() {
    while (next < items.length) {
      const index = next++;
      results[index] = await execute(items[index]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, worker));
  return results;
}

function emptyResult(
  project: ProjectInventory,
  status: ProjectResult["status"],
  base: Omit<
    ProjectResult,
    | "service"
    | "projectRoot"
    | "entrypoint"
    | "classification"
    | "status"
    | "resourceCount"
    | "operationCount"
    | "diagnosticCount"
    | "findingCount"
    | "affectedLogicalNames"
    | "correlatedResourceCount"
    | "matchedDiagnosticCount"
    | "partialDiagnosticCount"
    | "unmatchedDiagnosticCount"
    | "targetDiagnostics"
    | "diagnostics"
    | "outputHashes"
  >,
): ProjectResult {
  return {
    service: project.service,
    projectRoot: project.root,
    entrypoint: project.main ?? project.client,
    classification: project.classification,
    status,
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
    ...base,
    diagnostics: { errors: 0, warnings: 0, total: 0 },
    outputHashes: { statusJson: "" },
  };
}

async function writeStatusOnly(
  repositoryRoot: string,
  result: ProjectResult,
  reportDirectory: string,
): Promise<void> {
  const contentForHash = structuredClone(result);
  contentForHash.outputHashes.statusJson = "";
  result.outputHashes.statusJson = sha256(`${JSON.stringify(contentForHash, null, 2)}\n`);
  await replaceDirectory(
    projectOutputDirectory(repositoryRoot, result.projectRoot, reportDirectory),
    { "status.json": `${JSON.stringify(result, null, 2)}\n` },
  );
}

async function reconcileInventory(
  repositoryRoot: string,
  inventory: ProjectInventory[],
): Promise<InventoryReconciliation> {
  const configured = await findTypeSpecProjects(join(repositoryRoot, "specification"));
  const configuredRelative = configured.map((path) =>
    relative(repositoryRoot, path).split(sep).join("/"),
  );
  const configuredArm = configuredRelative.filter((path) => path.includes("/resource-manager/"));
  const discovered = new Set(inventory.map((project) => project.root));
  const configuredSet = new Set(configuredArm);
  const missing = configuredArm.filter((path) => !discovered.has(path));
  const reportOnly = [...discovered].filter((path) => !configuredSet.has(path)).sort();
  return {
    configuredTypeSpecProjects: configuredRelative.length,
    configuredArmProjects: configuredArm.length,
    discoveredArmProjects: inventory.length,
    missingFromReportInventory: missing,
    reportOnlyProjects: reportOnly,
    explanation:
      missing.length === 0 && reportOnly.length === 0
        ? "The configured ARM validation inventory and the Git-backed report inventory match."
        : `Inventory differences are explicit. Missing report projects (${missing.length}) either ` +
          `lack a tracked tspconfig.yaml/main.tsp/client.tsp combination or use a non-YAML config ` +
          `recognized by validation; report-only projects (${reportOnly.length}) are tracked by Git ` +
          "but were not returned by the filesystem validation inventory.",
  };
}

function assertManifestArithmetic(manifest: Manifest): void {
  const expected = createSummary(manifest.projects);
  if (JSON.stringify(expected) !== JSON.stringify(manifest.summary)) {
    throw new Error("Manifest summary arithmetic does not match project records.");
  }
  if (
    new Set(manifest.projects.map((project) => project.projectRoot)).size !==
    manifest.projects.length
  ) {
    throw new Error("Manifest contains duplicate project roots.");
  }
}

function assertPinnedSourceLinks(manifest: Manifest): void {
  const urls = manifest.projects.flatMap((project) =>
    project.targetDiagnostics.flatMap((diagnostic) => [
      diagnostic.sourceUrl,
      ...diagnostic.correlatedResources.flatMap((resource) => [
        resource.resourceDefinition,
        resource.authoredSource,
        ...resource.operations.map((operation) => operation.operationDefinition),
      ]),
    ]),
  );
  const prefix = `https://github.com/Azure/azure-rest-api-specs/blob/${manifest.sourceSha}/`;
  for (const url of urls.filter(Boolean)) {
    if (!url.startsWith(prefix)) {
      throw new Error(`Source link is not pinned to ${manifest.sourceSha}: ${url}`);
    }
  }
}

export async function validateGeneratedReport(
  repositoryRoot: string,
  manifest: Manifest,
): Promise<void> {
  assertManifestArithmetic(manifest);
  assertPinnedSourceLinks(manifest);
  for (const project of manifest.projects) {
    if (!(await validateStoredResult(repositoryRoot, project, manifest.reportDirectory))) {
      throw new Error(`Generated output validation failed for ${project.projectRoot}.`);
    }
  }
  const aggregateDirectory = aggregateOutputDirectory(repositoryRoot, manifest.reportDirectory);
  const readme = await readFile(join(aggregateDirectory, "README.md"), "utf8");
  if (sha256(readme) !== manifest.aggregateOutputHashes.readmeMd) {
    throw new Error("Aggregate README hash does not match the manifest.");
  }
  for (const match of readme.matchAll(/\]\(([^)]+)\)/g)) {
    const target = match[1];
    if (/^[a-z]+:/i.test(target) || target.startsWith("#")) continue;
    const resolved = resolve(aggregateDirectory, target.split("#", 1)[0]);
    if (!(await stat(resolved)).isFile()) {
      throw new Error(`Aggregate README link does not resolve: ${target}`);
    }
  }
}

export async function runReports(options: RunOptions): Promise<Manifest> {
  const repositoryRoot = resolve(options.repositoryRoot);
  const reportDirectory = validateReportDirectoryName(options.reportDirectory ?? "resource-data");
  const armLibraryProvenance = options.armLibraryProvenance
    ? validateArmLibraryProvenance(options.armLibraryProvenance)
    : undefined;
  const sourceRef = options.sourceRef ?? "HEAD";
  const toolSourceRef = options.toolSourceCommit ?? "HEAD";
  const [
    sourceSha,
    sourceTimestamp,
    toolSourceCommit,
    compilerVersion,
    armLibraryVersion,
    rulesetVersion,
    toolVersion,
    reportLock,
    sourceLock,
    installedPnpmVersion,
  ] = await Promise.all([
    gitSha(repositoryRoot, sourceRef),
    gitTimestamp(repositoryRoot, sourceRef),
    gitSha(repositoryRoot, toolSourceRef),
    packageVersion(repositoryRoot, "@typespec/compiler"),
    packageVersion(repositoryRoot, "@azure-tools/typespec-azure-resource-manager"),
    packageVersion(repositoryRoot, "@azure-tools/typespec-azure-rulesets-original"),
    packageVersion(repositoryRoot, reportToolPackage),
    readFile(join(repositoryRoot, "pnpm-lock.yaml")),
    gitFile(repositoryRoot, sourceRef, "pnpm-lock.yaml"),
    pnpmVersion(repositoryRoot),
  ]);
  if (armLibraryProvenance && armLibraryVersion !== armLibraryProvenance.packageVersion) {
    throw new Error(
      `Installed ARM library version ${armLibraryVersion} does not match provenance version ${armLibraryProvenance.packageVersion}.`,
    );
  }
  const sourceLockHash = sha256(sourceLock);
  const reportLockHash = sha256(reportLock);
  const targetRule = await inspectTargetRule(armLibraryVersion);
  const discoveredInventory = await discoverProjects(repositoryRoot);
  const inventory = filterProjects(discoveredInventory, options.services, options.projects);
  const inventoryReconciliation = await reconcileInventory(repositoryRoot, discoveredInventory);
  const discoveredByRoot = new Map(
    discoveredInventory.map((project) => [project.root, project.classification]),
  );
  const aggregateDirectory = aggregateOutputDirectory(repositoryRoot, reportDirectory);
  const manifestPath = join(aggregateDirectory, "manifest.json");
  const generationTimestamp = new Date().toISOString();
  let previousProjects: ProjectResult[] = [];
  try {
    const previous = JSON.parse(await readFile(manifestPath, "utf8")) as Manifest;
    if (
      previous.schemaVersion === 6 &&
      previous.sourceSha === sourceSha &&
      previous.sourceLockHash === sourceLockHash &&
      previous.reportLockHash === reportLockHash &&
      previous.customTool.sourceCommit === toolSourceCommit &&
      previous.customTool.packageVersion === toolVersion &&
      JSON.stringify(previous.armLibraryProvenance) === JSON.stringify(armLibraryProvenance)
    ) {
      previousProjects = previous.projects;
    }
  } catch {
    // No compatible prior manifest to merge.
  }
  const base = {
    reportDirectory,
    sourceSha,
    sourceLockHash,
    reportLockHash,
    projectInputHash: "",
    toolVersion,
    toolSourceCommit,
    compilerVersion,
    armLibraryVersion,
    rulesetVersion,
    ...(armLibraryProvenance ? { armLibraryProvenance } : {}),
  };
  const serviceFilters = new Set(options.services.map((value) => value.toLowerCase()));
  const projectFilters = options.projects.map((value) => value.replaceAll("\\", "/"));
  const isInRequestedScope = (result: ProjectResult) =>
    (serviceFilters.size === 0 || serviceFilters.has(result.service.toLowerCase())) &&
    (projectFilters.length === 0 ||
      projectFilters.some((filter) => result.projectRoot.includes(filter)));
  const skipped = inventory
    .filter((project) => project.classification === "client-only")
    .map((project) => emptyResult(project, "skipped-client-only", base));
  await Promise.all(
    skipped.map((result) => writeStatusOnly(repositoryRoot, result, reportDirectory)),
  );
  const blocked =
    targetRule === undefined
      ? inventory
          .filter((project) => project.classification === "main-bearing")
          .map((project) =>
            emptyResult(project, "blocked-rule-unavailable", {
              ...base,
              error: `Installed ARM package ${armLibraryVersion} does not expose ${targetRuleCode}.`,
            }),
          )
      : [];
  await Promise.all(
    blocked.map((result) => writeStatusOnly(repositoryRoot, result, reportDirectory)),
  );
  const requests =
    targetRule === undefined
      ? []
      : await runPool(
          inventory.filter((project) => project.classification === "main-bearing"),
          options.concurrency,
          async (project): Promise<WorkerRequest> => ({
            repositoryRoot,
            project,
            sourceSha,
            sourceLockHash,
            reportLockHash,
            projectInputHash: await projectInputHash(
              repositoryRoot,
              sourceSha,
              project,
              reportDirectory,
            ),
            toolVersion,
            toolSourceCommit,
            compilerVersion,
            armLibraryVersion,
            rulesetVersion,
            ...(armLibraryProvenance ? { armLibraryProvenance } : {}),
            reportDirectory,
          }),
        );
  const reusablePrevious = await Promise.all(
    previousProjects
      .filter(
        (result) =>
          !isInRequestedScope(result) &&
          discoveredByRoot.get(result.projectRoot) === result.classification,
      )
      .map(async (result) =>
        (await validateStoredResult(repositoryRoot, result, reportDirectory)) ? result : undefined,
      ),
  );
  const completed = new Map(
    reusablePrevious
      .filter((result): result is ProjectResult => result !== undefined)
      .map((result) => [result.projectRoot, result]),
  );
  for (const result of [...skipped, ...blocked]) completed.set(result.projectRoot, result);
  const createManifest = (): Manifest => {
    const projects = [...completed.values()].sort((left, right) =>
      left.projectRoot.localeCompare(right.projectRoot),
    );
    return {
      schemaVersion: 6,
      repository: "Azure/azure-rest-api-specs",
      sourceSha,
      sourceTimestamp,
      generationTimestamp,
      reportId: reportDirectory,
      sourceLockHash,
      reportLockHash,
      customTool: {
        packageName: reportToolPackage,
        packageVersion: toolVersion,
        referenceCommit: referenceToolCommit,
        sourceCommit: toolSourceCommit,
      },
      nodeVersion: process.version,
      pnpmVersion: installedPnpmVersion,
      compilerVersion,
      armLibraryVersion,
      rulesetVersion,
      ...(armLibraryProvenance ? { armLibraryProvenance } : {}),
      targetRule:
        targetRule ??
        ({
          code: targetRuleCode,
          shortName: targetRuleShortName,
          documentationUrl: targetRuleDocumentationUrl,
          severity: "unknown",
          enabledByDefault: false,
          installedPackage: `@azure-tools/typespec-azure-resource-manager@${armLibraryVersion}`,
          verifiedBehaviorCommit: verifiedRuleBehaviorCommit,
        } satisfies TargetRuleMetadata),
      reportDirectory,
      inventory: inventoryReconciliation,
      summary: createSummary(projects),
      aggregateOutputHashes: { readmeMd: "" },
      projects,
    };
  };
  await atomicWriteFile(manifestPath, `${JSON.stringify(createManifest(), null, 2)}\n`);
  let checkpointWrite = Promise.resolve();
  await runPool(requests, options.concurrency, async (request) => {
    let result = options.resume ? await canResume(repositoryRoot, request) : undefined;
    if (!result) {
      try {
        result = await runChild(request, options.timeoutMs);
      } catch (error) {
        if (error instanceof Error && error.message.startsWith("Project timed out")) {
          try {
            result = await runChild(request, options.timeoutMs * 2);
          } catch (retryError) {
            const { writeWorkerFailure } = await import("./worker.ts");
            result = await writeWorkerFailure(request, retryError);
          }
        } else {
          const { writeWorkerFailure } = await import("./worker.ts");
          result = await writeWorkerFailure(request, error);
        }
      }
    }
    completed.set(result.projectRoot, result);
    checkpointWrite = checkpointWrite.then(() =>
      atomicWriteFile(manifestPath, `${JSON.stringify(createManifest(), null, 2)}\n`),
    );
    await checkpointWrite;
    console.log(`${result.status.padEnd(24)} ${result.projectRoot}`);
    return result;
  });
  const manifest = createManifest();
  assertManifestArithmetic(manifest);
  const readme = createReadme(manifest, reportDirectory);
  manifest.aggregateOutputHashes.readmeMd = sha256(readme);
  await atomicWriteFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  await atomicWriteFile(join(dirname(manifestPath), "README.md"), readme);
  await validateGeneratedReport(repositoryRoot, manifest);
  return manifest;
}
