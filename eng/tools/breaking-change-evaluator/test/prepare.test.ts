import { createHash } from "node:crypto";
import { mkdir, mkdtemp, readFile, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  applyTypespecMainPathCompatibility,
  CACHE_FORMAT_VERSION,
  findPreparedTool,
  finalizePublishedTool,
  publishPreparedTool,
  removeStagingDirectory,
  resolveToolRevision,
  TYPESPEC_MAIN_PATH_COMPATIBILITY,
  withStagingCleanup,
} from "../src/prepare.ts";

const temporaryDirectories: string[] = [];

function sha256(content: string): string {
  return createHash("sha256").update(content).digest("hex");
}

function manifest(executable: string, artifactDigest = "digest") {
  return {
    cacheFormatVersion: CACHE_FORMAT_VERSION,
    compatibility: TYPESPEC_MAIN_PATH_COMPATIBILITY,
    sourceSha: "a".repeat(40),
    artifactDigest,
    executable,
  };
}

afterEach(async () => {
  await Promise.all(
    temporaryDirectories
      .splice(0)
      .map((directory) => rm(directory, { recursive: true, force: true })),
  );
});

describe("tool preparation", () => {
  it("accepts an explicit full SHA without remote resolution", async () => {
    const sha = "D0AB464D60C47D6699BFEA0292C901864B5D8BA0";
    await expect(resolveToolRevision(sha)).resolves.toBe(sha.toLowerCase());
  });

  it("publishes cache contents before the pointer using an atomic rename", async () => {
    const sourceRoot = await mkdtemp(join(tmpdir(), "prepared-tool-"));
    temporaryDirectories.push(sourceRoot);
    const staging = await mkdtemp(join(sourceRoot, ".staging-"));
    await mkdir(join(staging, "repo"), { recursive: true });
    await writeFile(join(staging, "repo", "artifact.js"), "artifact");
    const toolManifest = manifest(join("repo", "artifact.js"));
    const finalize = vi.fn(async (finalPath: string) => {
      await stat(join(finalPath, "repo", "artifact.js"));
      await expect(readFile(join(sourceRoot, "current.json"), "utf8")).rejects.toMatchObject({
        code: "ENOENT",
      });
    });

    const finalPath = await publishPreparedTool(staging, sourceRoot, toolManifest, finalize);

    expect(finalize).toHaveBeenCalledWith(finalPath, toolManifest);
    await expect(readFile(join(finalPath, "manifest.json"), "utf8")).resolves.toContain(
      `"cacheFormatVersion": ${CACHE_FORMAT_VERSION}`,
    );
    await expect(readFile(join(sourceRoot, "current.json"), "utf8")).resolves.toContain(
      '"artifactDigest": "digest"',
    );
  });

  it("repairs an existing same-digest winner before publishing its pointer", async () => {
    const sourceRoot = await mkdtemp(join(tmpdir(), "prepared-tool-repair-"));
    temporaryDirectories.push(sourceRoot);
    const artifact = "artifact";
    const executable = join("repo", "packages", "tool", "dist", "src", "cli", "cli.js");
    const toolManifest = manifest(executable, sha256(artifact));
    const finalPath = join(sourceRoot, toolManifest.artifactDigest);
    const compilePath = join(dirname(join(finalPath, executable)), "compile.js");
    await mkdir(dirname(compilePath), { recursive: true });
    await writeFile(join(finalPath, executable), artifact);
    await writeFile(
      compilePath,
      'const tspMain = resolve(dirname(thisFile), "..", "..", "lib", "main.tsp");',
    );
    const staging = await mkdtemp(join(sourceRoot, ".staging-"));
    await mkdir(join(staging, "repo"));
    const processRunner = vi.fn(
      (
        _command: string,
        _args: string[],
        _options: {
          cwd?: string;
          timeoutMs?: number;
          env?: NodeJS.ProcessEnv;
        } = {},
      ) => Promise.resolve({ code: 0, signal: null, stdout: "", stderr: "", timedOut: false }),
    );

    await publishPreparedTool(staging, sourceRoot, toolManifest, (path, publishedManifest) =>
      finalizePublishedTool(path, publishedManifest, processRunner),
    );

    await expect(readFile(compilePath, "utf8")).resolves.toContain(
      'dirname(thisFile), "..", "..", "..", "lib", "main.tsp"',
    );
    await expect(readFile(join(finalPath, "manifest.json"), "utf8")).resolves.toContain(
      `"compatibility": "${TYPESPEC_MAIN_PATH_COMPATIBILITY}"`,
    );
  });

  it("uses bounded cleanup retries and preserves a primary preparation failure", async () => {
    const removeDirectory = vi.fn<typeof rm>().mockResolvedValue(undefined);
    await removeStagingDirectory("staging", removeDirectory);
    expect(removeDirectory).toHaveBeenCalledWith("staging", {
      recursive: true,
      force: true,
      maxRetries: 5,
      retryDelay: 200,
    });

    const primary = new Error("build failed");
    await expect(
      withStagingCleanup(
        "staging",
        () => Promise.reject(primary),
        vi.fn<typeof rm>().mockRejectedValue(Object.assign(new Error("busy"), { code: "EBUSY" })),
      ),
    ).rejects.toBe(primary);
  });

  it("does not publish the pointer when final-cache verification fails", async () => {
    const sourceRoot = await mkdtemp(join(tmpdir(), "prepared-tool-failure-"));
    temporaryDirectories.push(sourceRoot);
    const staging = await mkdtemp(join(sourceRoot, ".staging-"));
    await mkdir(join(staging, "repo"));
    await writeFile(join(staging, "repo", "artifact.js"), "artifact");

    await expect(
      publishPreparedTool(staging, sourceRoot, manifest(join("repo", "artifact.js")), () =>
        Promise.reject(new Error("published executable cannot load")),
      ),
    ).rejects.toThrow("published executable cannot load");
    await expect(readFile(join(sourceRoot, "current.json"), "utf8")).rejects.toMatchObject({
      code: "ENOENT",
    });
  });

  it("relinks noninteractively, applies compatibility, and verifies final location", async () => {
    const finalPath = await mkdtemp(join(tmpdir(), "prepared-tool-finalize-"));
    temporaryDirectories.push(finalPath);
    const artifact = "artifact";
    const executable = join("repo", "packages", "tool", "dist", "src", "cli", "cli.js");
    const compilePath = join(dirname(join(finalPath, executable)), "compile.js");
    await mkdir(dirname(compilePath), { recursive: true });
    await writeFile(join(finalPath, executable), artifact);
    await writeFile(
      compilePath,
      'const tspMain = resolve(dirname(thisFile), "..", "..", "lib", "main.tsp");',
    );
    const processRunner = vi.fn(
      (
        _command: string,
        _args: string[],
        _options: {
          cwd?: string;
          timeoutMs?: number;
          env?: NodeJS.ProcessEnv;
        } = {},
      ) => Promise.resolve({ code: 0, signal: null, stdout: "", stderr: "", timedOut: false }),
    );

    await finalizePublishedTool(finalPath, manifest(executable, sha256(artifact)), processRunner);

    expect(processRunner.mock.calls[0][0]).toBe("corepack");
    expect(processRunner.mock.calls[0][1]).toEqual(["pnpm", "install", "--frozen-lockfile"]);
    expect(processRunner.mock.calls[0][2]?.env).toMatchObject({ CI: "true" });
    expect(processRunner.mock.calls[1][0]).toBe(process.execPath);
    expect(processRunner.mock.calls[1][2]?.cwd).toBe(join(finalPath, "repo"));
  });

  it("applies compatibility idempotently and rejects unknown layouts", async () => {
    const finalPath = await mkdtemp(join(tmpdir(), "prepared-tool-compat-"));
    temporaryDirectories.push(finalPath);
    const executable = join("repo", "packages", "tool", "dist", "src", "cli", "cli.js");
    const compilePath = join(dirname(join(finalPath, executable)), "compile.js");
    await mkdir(dirname(compilePath), { recursive: true });
    await writeFile(
      compilePath,
      'const tspMain = resolve(dirname(thisFile), "..", "..", "lib", "main.tsp");',
    );
    await applyTypespecMainPathCompatibility(finalPath, manifest(executable));
    const once = await readFile(compilePath, "utf8");
    await applyTypespecMainPathCompatibility(finalPath, manifest(executable));
    expect(await readFile(compilePath, "utf8")).toBe(once);

    await writeFile(compilePath, "const tspMain = unexpectedLayout;");
    await expect(
      applyTypespecMainPathCompatibility(finalPath, manifest(executable)),
    ).rejects.toThrow("expected TypeSpec main path resolution was not found");
  });

  it("rejects old-format and digest-invalid cache entries", async () => {
    const cacheDir = await mkdtemp(join(tmpdir(), "prepared-tool-invalid-"));
    temporaryDirectories.push(cacheDir);
    const sourceSha = "a".repeat(40);
    const artifact = "artifact";
    const artifactDigest = sha256(artifact);
    const cachePath = join(cacheDir, "tools", sourceSha, artifactDigest);
    await mkdir(join(cachePath, "repo"), { recursive: true });
    await writeFile(join(cachePath, "repo", "artifact.js"), artifact);
    await writeFile(
      join(cachePath, "manifest.json"),
      JSON.stringify({ sourceSha, artifactDigest, executable: join("repo", "artifact.js") }),
    );
    await writeFile(
      join(cacheDir, "tools", sourceSha, "current.json"),
      JSON.stringify({ artifactDigest }),
    );
    await expect(findPreparedTool(sourceSha, cacheDir)).resolves.toBeUndefined();

    await writeFile(
      join(cachePath, "repo", "compile.js"),
      'const tspMain = resolve(dirname(thisFile), "..", "..", "..", "lib", "main.tsp");',
    );
    await writeFile(
      join(cachePath, "manifest.json"),
      JSON.stringify(manifest(join("repo", "artifact.js"), "0".repeat(64))),
    );
    await expect(findPreparedTool(sourceSha, cacheDir)).resolves.toBeUndefined();
  });

  it("returns the same documented result shape for a valid cache hit", async () => {
    const cacheDir = await mkdtemp(join(tmpdir(), "prepared-tool-valid-"));
    temporaryDirectories.push(cacheDir);
    const sourceSha = "a".repeat(40);
    const artifact = "process.exit(0);\n";
    const artifactDigest = sha256(artifact);
    const executable = join("repo", "packages", "tool", "dist", "src", "cli", "cli.js");
    const cachePath = join(cacheDir, "tools", sourceSha, artifactDigest);
    await mkdir(dirname(join(cachePath, executable)), { recursive: true });
    await writeFile(join(cachePath, executable), artifact);
    await writeFile(
      join(dirname(join(cachePath, executable)), "compile.js"),
      'const tspMain = resolve(dirname(thisFile), "..", "..", "..", "lib", "main.tsp");',
    );
    await writeFile(
      join(cachePath, "manifest.json"),
      JSON.stringify(manifest(executable, artifactDigest)),
    );
    await writeFile(
      join(cacheDir, "tools", sourceSha, "current.json"),
      JSON.stringify({ artifactDigest }),
    );

    await expect(findPreparedTool(sourceSha, cacheDir)).resolves.toEqual({
      sourceSha,
      artifactDigest,
      executable: join(cachePath, executable),
      cachePath,
    });
  });
});
