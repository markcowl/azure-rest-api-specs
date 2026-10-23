import { execFile, spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { createReadme, createSummary } from "./aggregate.ts";
import { discoverProjects, filterProjects } from "./discovery.ts";
import { atomicWriteFile, hashFiles, replaceDirectory } from "./io.ts";
import { sha256 } from "./report.ts";
import type { Manifest, ProjectInventory, ProjectResult } from "./types.ts";
import type { WorkerRequest } from "./worker.ts";

const execFileAsync = promisify(execFile);
const toolVersion = "1.0.0";

export interface RunOptions {
  repositoryRoot: string;
  services: string[];
  projects: string[];
  concurrency: number;
  timeoutMs: number;
  resume: boolean;
}

async function packageVersion(repositoryRoot: string, packageName: string): Promise<string> {
  const path = join(repositoryRoot, "node_modules", ...packageName.split("/"), "package.json");
  return (JSON.parse(await readFile(path, "utf8")) as { version: string }).version;
}

async function sourceSha(repositoryRoot: string): Promise<string> {
  return (await execFileAsync("git", ["rev-parse", "HEAD"], { cwd: repositoryRoot })).stdout.trim();
}

async function sourceTimestamp(repositoryRoot: string): Promise<string> {
  return (
    await execFileAsync("git", ["show", "-s", "--format=%cI", "HEAD"], { cwd: repositoryRoot })
  ).stdout.trim();
}

async function trackedProjectFiles(
  repositoryRoot: string,
  project: ProjectInventory,
): Promise<string[]> {
  const { stdout } = await execFileAsync("git", ["ls-files", "--", project.root], {
    cwd: repositoryRoot,
    maxBuffer: 10 * 1024 * 1024,
  });
  return stdout
    .split(/\r?\n/)
    .map((path) => path.replaceAll("\\", "/"))
    .filter((path) => path.endsWith(".tsp") || path.endsWith(".yaml") || path.endsWith(".json"))
    .filter((path) => !path.startsWith(`${project.root}/resource-data/`))
    .map((path) => resolve(repositoryRoot, path));
}

async function validateStoredResult(
  repositoryRoot: string,
  result: ProjectResult,
): Promise<boolean> {
  const output = resolve(repositoryRoot, result.projectRoot, "resource-data");
  try {
    const persisted = JSON.parse(
      await readFile(join(output, "status.json"), "utf8"),
    ) as ProjectResult;
    if (JSON.stringify(persisted) !== JSON.stringify(result)) return false;
    const required =
      result.status === "succeeded" || result.status === "zero-resource"
        ? ["resourcesCsv", "operationsCsv"]
        : result.status === "failed"
          ? ["errorsMd"]
          : [];
    if (required.some((key) => !result.outputHashes[key as keyof typeof result.outputHashes])) {
      return false;
    }
    const checks: [string, string | undefined][] = [
      ["resources.csv", result.outputHashes.resourcesCsv],
      ["operations.csv", result.outputHashes.operationsCsv],
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
  const output = resolve(repositoryRoot, request.project.root, "resource-data");
  try {
    const result = JSON.parse(await readFile(join(output, "status.json"), "utf8")) as ProjectResult;
    if (
      result.sourceSha !== request.sourceSha ||
      result.toolVersion !== request.toolVersion ||
      result.dependencyLockHash !== request.dependencyLockHash ||
      result.projectInputHash !== request.projectInputHash
    ) {
      return undefined;
    }
    return (await validateStoredResult(repositoryRoot, result)) ? result : undefined;
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
  const id = createHash("sha256").update(request.project.root).digest("hex").slice(0, 16);
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

export async function runReports(options: RunOptions): Promise<Manifest> {
  const repositoryRoot = resolve(options.repositoryRoot);
  const [sha, generatedAt, compilerVersion, armLibraryVersion, dependencyLockHash] =
    await Promise.all([
      sourceSha(repositoryRoot),
      sourceTimestamp(repositoryRoot),
      packageVersion(repositoryRoot, "@typespec/compiler"),
      packageVersion(repositoryRoot, "@azure-tools/typespec-azure-resource-manager"),
      readFile(join(repositoryRoot, "pnpm-lock.yaml")).then(sha256),
    ]);
  const discoveredInventory = await discoverProjects(repositoryRoot);
  const inventory = filterProjects(discoveredInventory, options.services, options.projects);
  const discoveredByRoot = new Map(
    discoveredInventory.map((project) => [project.root, project.classification]),
  );
  const manifestPath = join(
    repositoryRoot,
    "documentation",
    "typespec-arm-resource-data",
    "manifest.json",
  );
  let previousProjects: ProjectResult[] = [];
  try {
    const previous = JSON.parse(await readFile(manifestPath, "utf8")) as Manifest;
    if (
      previous.sourceSha === sha &&
      previous.dependencyLockHash === dependencyLockHash &&
      previous.toolVersion === toolVersion
    ) {
      previousProjects = previous.projects;
    }
  } catch {
    // No compatible prior manifest to merge.
  }
  const serviceFilters = new Set(options.services.map((value) => value.toLowerCase()));
  const projectFilters = options.projects.map((value) => value.replaceAll("\\", "/"));
  const isInRequestedScope = (result: ProjectResult) =>
    (serviceFilters.size === 0 || serviceFilters.has(result.service.toLowerCase())) &&
    (projectFilters.length === 0 ||
      projectFilters.some((filter) => result.projectRoot.includes(filter)));
  const skipped: ProjectResult[] = inventory
    .filter((project) => project.classification !== "main-bearing")
    .map((project) => ({
      service: project.service,
      projectRoot: project.root,
      entrypoint: project.main ?? project.client,
      classification: project.classification,
      status: "skipped",
      resourceCount: 0,
      operationCount: 0,
      caseOnlyClashCount: 0,
      genuineClashCount: 0,
      sourceSha: sha,
      dependencyLockHash,
      projectInputHash: "",
      toolVersion,
      compilerVersion,
      armLibraryVersion,
      diagnostics: { errors: 0, warnings: 0, total: 0 },
      outputHashes: { statusJson: "" },
    }));
  await Promise.all(
    skipped.map(async (result) => {
      const status = `${JSON.stringify(result, null, 2)}\n`;
      result.outputHashes.statusJson = sha256(status);
      await replaceDirectory(resolve(repositoryRoot, result.projectRoot, "resource-data"), {
        "status.json": `${JSON.stringify(result, null, 2)}\n`,
      });
    }),
  );
  const requests = await runPool(
    inventory.filter((project) => project.classification === "main-bearing"),
    options.concurrency,
    async (project) => ({
      repositoryRoot,
      project,
      sourceSha: sha,
      dependencyLockHash,
      projectInputHash: await hashFiles(
        await trackedProjectFiles(repositoryRoot, project),
        repositoryRoot,
      ),
      toolVersion,
      compilerVersion,
      armLibraryVersion,
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
        (await validateStoredResult(repositoryRoot, result)) ? result : undefined,
      ),
  );
  const completed = new Map(
    reusablePrevious
      .filter((result): result is ProjectResult => result !== undefined)
      .map((result) => [result.projectRoot, result]),
  );
  for (const result of skipped) completed.set(result.projectRoot, result);
  const createManifest = (): Manifest => {
    const projects = [...completed.values()].sort((left, right) =>
      left.projectRoot.localeCompare(right.projectRoot),
    );
    return {
      schemaVersion: 1,
      generatedAt,
      repository: "Azure/azure-rest-api-specs",
      sourceSha: sha,
      dependencyLockHash,
      toolVersion,
      nodeVersion: process.version,
      compilerVersion,
      armLibraryVersion,
      summary: createSummary(projects),
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
        const { writeWorkerFailure } = await import("./worker.ts");
        result = await writeWorkerFailure(request, error);
      }
    }
    completed.set(result.projectRoot, result);
    checkpointWrite = checkpointWrite.then(() =>
      atomicWriteFile(manifestPath, `${JSON.stringify(createManifest(), null, 2)}\n`),
    );
    await checkpointWrite;
    console.log(`${result.status.padEnd(13)} ${result.projectRoot}`);
    return result;
  });
  const manifest = createManifest();
  await atomicWriteFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  await atomicWriteFile(join(dirname(manifestPath), "README.md"), createReadme(manifest));
  return manifest;
}
