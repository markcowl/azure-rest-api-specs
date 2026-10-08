import { createHash } from "node:crypto";
import { mkdir, mkdtemp, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { runProcess } from "./process.ts";

export const DEFAULT_TOOL_PR = 5450;
export const TOOL_REPOSITORY = "https://github.com/Azure/typespec-azure.git";
export const CACHE_FORMAT_VERSION = 2;
export const TYPESPEC_MAIN_PATH_COMPATIBILITY = "package-root-typespec-main-v1";
const STAGING_CLEANUP_MAX_RETRIES = 5;
const STAGING_CLEANUP_RETRY_DELAY_MS = 200;
const ORIGINAL_TYPESPEC_MAIN_PATH =
  /resolve\(dirname\(thisFile\),\s*["']\.\.["'],\s*["']\.\.["'],\s*["']lib["'],\s*["']main\.tsp["']\)/;
const PATCHED_TYPESPEC_MAIN_PATH =
  /resolve\(dirname\(thisFile\),\s*["']\.\.["'],\s*["']\.\.["'],\s*["']\.\.["'],\s*["']lib["'],\s*["']main\.tsp["']\)/;

type RemoveDirectory = typeof rm;
type ProcessRunner = typeof runProcess;
type ToolManifest = {
  cacheFormatVersion: number;
  compatibility: string;
  sourceSha: string;
  artifactDigest: string;
  executable: string;
};
type FinalizePublishedTool = (finalPath: string, manifest: ToolManifest) => Promise<void>;

export interface PreparedTool {
  sourceSha: string;
  artifactDigest: string;
  executable: string;
  cachePath: string;
}

export function defaultCacheDir(): string {
  return join(homedir(), ".cache", "azure-rest-api-specs", "breaking-change-evaluator");
}

function requireSuccess(label: string, result: Awaited<ReturnType<typeof runProcess>>): void {
  if (result.code !== 0 || result.signal || result.timedOut) {
    throw new Error(`${label} failed: ${result.stderr || result.stdout}`);
  }
}

function pnpmProcessOptions(cwd: string, timeoutMs: number) {
  return {
    cwd,
    timeoutMs,
    env: { ...process.env, CI: "true" },
  };
}

export async function resolveToolRevision(revision?: string): Promise<string> {
  if (revision && /^[0-9a-f]{40}$/i.test(revision)) {
    return revision.toLowerCase();
  }
  const ref = revision ?? `refs/pull/${DEFAULT_TOOL_PR}/head`;
  const result = await runProcess("git", ["ls-remote", TOOL_REPOSITORY, ref]);
  requireSuccess("Resolving TypeSpec tool revision", result);
  const sha = result.stdout.trim().split(/\s+/)[0];
  if (!/^[0-9a-f]{40}$/.test(sha)) {
    throw new Error(`Unable to resolve '${ref}' to an explicit source SHA`);
  }
  return sha;
}

async function sha256File(path: string): Promise<string> {
  return createHash("sha256")
    .update(await readFile(path))
    .digest("hex");
}

function compiledCompilePath(finalPath: string, manifest: ToolManifest): string {
  return join(dirname(join(finalPath, manifest.executable)), "compile.js");
}

async function hasTypespecMainPathCompatibility(
  finalPath: string,
  manifest: ToolManifest,
): Promise<boolean> {
  const source = await readFile(compiledCompilePath(finalPath, manifest), "utf8").catch(
    () => undefined,
  );
  return Boolean(source && PATCHED_TYPESPEC_MAIN_PATH.test(source));
}

export async function applyTypespecMainPathCompatibility(
  finalPath: string,
  manifest: ToolManifest,
): Promise<void> {
  const compilePath = compiledCompilePath(finalPath, manifest);
  const source = await readFile(compilePath, "utf8");
  if (PATCHED_TYPESPEC_MAIN_PATH.test(source)) return;
  if (!ORIGINAL_TYPESPEC_MAIN_PATH.test(source)) {
    throw new Error(
      `Unable to apply ${TYPESPEC_MAIN_PATH_COMPATIBILITY}: expected TypeSpec main path resolution was not found in ${compilePath}`,
    );
  }
  await writeFile(
    compilePath,
    source.replace(
      ORIGINAL_TYPESPEC_MAIN_PATH,
      'resolve(dirname(thisFile), "..", "..", "..", "lib", "main.tsp")',
    ),
  );
}

export async function removeStagingDirectory(
  staging: string,
  removeDirectory: RemoveDirectory = rm,
): Promise<void> {
  await removeDirectory(staging, {
    recursive: true,
    force: true,
    maxRetries: STAGING_CLEANUP_MAX_RETRIES,
    retryDelay: STAGING_CLEANUP_RETRY_DELAY_MS,
  });
}

export async function withStagingCleanup<T>(
  staging: string,
  action: () => Promise<T>,
  removeDirectory: RemoveDirectory = rm,
): Promise<T> {
  let completed = false;
  let result: T | undefined;
  let primaryError: unknown;
  try {
    result = await action();
    completed = true;
  } catch (error) {
    primaryError = error;
  }
  try {
    await removeStagingDirectory(staging, removeDirectory);
  } catch (cleanupError) {
    if (completed) throw cleanupError;
  }
  if (!completed) throw primaryError;
  return result as T;
}

export async function publishPreparedTool(
  staging: string,
  sourceRoot: string,
  manifest: ToolManifest,
  finalizePublishedTool: FinalizePublishedTool,
): Promise<string> {
  const finalPath = join(sourceRoot, manifest.artifactDigest);
  await writeFile(join(staging, "manifest.json"), JSON.stringify(manifest, null, 2));
  await rename(staging, finalPath).catch(async (error: NodeJS.ErrnoException) => {
    const finalExists = await stat(finalPath)
      .then(() => true)
      .catch(() => false);
    const raceCode =
      error.code === "EEXIST" ||
      error.code === "ENOTEMPTY" ||
      error.code === "EPERM" ||
      error.code === "EACCES";
    if (!raceCode || !finalExists) throw error;
    await removeStagingDirectory(staging);
  });
  await finalizePublishedTool(finalPath, manifest);
  await writeFile(join(finalPath, "manifest.json"), JSON.stringify(manifest, null, 2));
  const pointerTemporary = join(sourceRoot, `.current-${process.pid}-${Date.now()}.json`);
  await writeFile(
    pointerTemporary,
    JSON.stringify({ artifactDigest: manifest.artifactDigest }, null, 2),
  );
  await rename(pointerTemporary, join(sourceRoot, "current.json"));
  return finalPath;
}

async function isPreparedToolRunnable(cachePath: string, manifest: ToolManifest): Promise<boolean> {
  if (
    manifest.cacheFormatVersion !== CACHE_FORMAT_VERSION ||
    manifest.compatibility !== TYPESPEC_MAIN_PATH_COMPATIBILITY ||
    !(await hasTypespecMainPathCompatibility(cachePath, manifest))
  ) {
    return false;
  }
  const executable = join(cachePath, manifest.executable);
  if (manifest.artifactDigest !== (await sha256File(executable).catch(() => undefined))) {
    return false;
  }
  const verification = await runProcess(process.execPath, [executable, "--help"], {
    cwd: join(cachePath, "repo"),
    timeoutMs: 30_000,
  }).catch(() => undefined);
  return Boolean(
    verification && verification.code === 0 && !verification.signal && !verification.timedOut,
  );
}

export async function finalizePublishedTool(
  finalPath: string,
  manifest: ToolManifest,
  processRunner: ProcessRunner = runProcess,
): Promise<void> {
  const checkout = join(finalPath, "repo");
  requireSuccess(
    "Relinking published tool dependencies",
    await processRunner(
      "corepack",
      ["pnpm", "install", "--frozen-lockfile"],
      pnpmProcessOptions(checkout, 15 * 60_000),
    ),
  );
  await applyTypespecMainPathCompatibility(finalPath, manifest);
  const executable = join(finalPath, manifest.executable);
  const finalDigest = await sha256File(executable);
  if (finalDigest !== manifest.artifactDigest) {
    throw new Error(
      `Published tool digest changed after relocation: expected ${manifest.artifactDigest}, got ${finalDigest}`,
    );
  }
  requireSuccess(
    "Verifying published tool executable",
    await processRunner(process.execPath, [executable, "--help"], {
      cwd: checkout,
      timeoutMs: 30_000,
    }),
  );
}

export async function findPreparedTool(
  sourceSha: string,
  cacheDir = defaultCacheDir(),
): Promise<PreparedTool | undefined> {
  const pointerPath = join(resolve(cacheDir), "tools", sourceSha, "current.json");
  try {
    const pointer = JSON.parse(await readFile(pointerPath, "utf8")) as {
      artifactDigest: string;
    };
    const cachePath = join(resolve(cacheDir), "tools", sourceSha, pointer.artifactDigest);
    const manifest = JSON.parse(
      await readFile(join(cachePath, "manifest.json"), "utf8"),
    ) as ToolManifest;
    const executable = join(cachePath, manifest.executable);
    if (manifest.sourceSha !== sourceSha) return undefined;
    if (!(await isPreparedToolRunnable(cachePath, manifest))) return undefined;
    return {
      sourceSha: manifest.sourceSha,
      artifactDigest: manifest.artifactDigest,
      executable,
      cachePath,
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return undefined;
    throw error;
  }
}

export async function prepareTool(
  revision?: string,
  cacheDir = defaultCacheDir(),
): Promise<PreparedTool> {
  const sourceSha = await resolveToolRevision(revision);
  const existing = await findPreparedTool(sourceSha, cacheDir);
  if (existing) return existing;

  const sourceRoot = join(resolve(cacheDir), "tools", sourceSha);
  await mkdir(sourceRoot, { recursive: true });
  const staging = await mkdtemp(join(sourceRoot, ".staging-"));
  const checkout = join(staging, "repo");
  return await withStagingCleanup(staging, async () => {
    requireSuccess(
      "Cloning TypeSpec Azure",
      await runProcess("git", [
        "clone",
        "--filter=blob:none",
        "--no-checkout",
        TOOL_REPOSITORY,
        checkout,
      ]),
    );
    requireSuccess(
      "Fetching pinned revision",
      await runProcess("git", ["fetch", "--depth=1", "origin", sourceSha], { cwd: checkout }),
    );
    requireSuccess(
      "Checking out pinned revision",
      await runProcess("git", ["checkout", "--detach", sourceSha], { cwd: checkout }),
    );
    requireSuccess(
      "Initializing submodules",
      await runProcess("git", ["submodule", "update", "--init", "--recursive", "--depth=1"], {
        cwd: checkout,
      }),
    );
    requireSuccess(
      "Installing pinned tool dependencies",
      await runProcess(
        "corepack",
        ["pnpm", "install", "--frozen-lockfile"],
        pnpmProcessOptions(checkout, 15 * 60_000),
      ),
    );
    requireSuccess(
      "Building pinned tool",
      await runProcess(
        "corepack",
        ["pnpm", "--filter", "@azure-tools/typespec-breaking-change...", "build"],
        pnpmProcessOptions(checkout, 10 * 60_000),
      ),
    );
    const relativeExecutable = join(
      "repo",
      "packages",
      "typespec-breaking-change",
      "dist",
      "src",
      "cli",
      "cli.js",
    );
    const builtExecutable = join(checkout, relativeExecutable.slice("repo".length + 1));
    await stat(builtExecutable);
    requireSuccess(
      "Verifying pinned tool executable",
      await runProcess(process.execPath, [builtExecutable, "--help"], {
        cwd: checkout,
        timeoutMs: 30_000,
      }),
    );
    const artifactDigest = await sha256File(builtExecutable);
    const manifest = {
      cacheFormatVersion: CACHE_FORMAT_VERSION,
      compatibility: TYPESPEC_MAIN_PATH_COMPATIBILITY,
      sourceSha,
      artifactDigest,
      executable: relativeExecutable,
    };
    const finalPath = await publishPreparedTool(
      staging,
      sourceRoot,
      manifest,
      finalizePublishedTool,
    );
    return {
      sourceSha,
      artifactDigest,
      executable: join(finalPath, relativeExecutable),
      cachePath: finalPath,
    };
  });
}
