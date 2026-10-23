import { execFile } from "node:child_process";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { promisify } from "node:util";
import { afterEach, describe, expect, it } from "vitest";
import { canResume, runChild, runReports } from "../src/runner.ts";
import { sha256 } from "../src/report.ts";
import type { ProjectResult } from "../src/types.ts";
import { runWorker, type WorkerRequest } from "../src/worker.ts";

const execFileAsync = promisify(execFile);
const folders: string[] = [];

afterEach(async () => {
  await Promise.all(
    folders.splice(0).map((folder) => rm(folder, { recursive: true, force: true })),
  );
});

async function createRoot(prefix: string): Promise<string> {
  const root = await mkdtemp(join(import.meta.dirname, prefix));
  folders.push(root);
  await mkdir(join(root, "node_modules", "@typespec", "compiler"), { recursive: true });
  await mkdir(join(root, "node_modules", "@azure-tools", "typespec-azure-resource-manager"), {
    recursive: true,
  });
  await writeFile(
    join(root, "node_modules", "@typespec", "compiler", "package.json"),
    JSON.stringify({ version: "1.0.0" }),
  );
  await writeFile(
    join(root, "node_modules", "@azure-tools", "typespec-azure-resource-manager", "package.json"),
    JSON.stringify({ version: "1.0.0" }),
  );
  await writeFile(join(root, "pnpm-lock.yaml"), "lockfileVersion: '9.0'\n");
  return root;
}

async function commitAll(root: string): Promise<void> {
  await execFileAsync("git", ["init"], { cwd: root });
  await execFileAsync("git", ["add", "."], { cwd: root });
  await execFileAsync(
    "git",
    ["-c", "user.name=Test", "-c", "user.email=test@example.com", "commit", "-m", "fixture"],
    { cwd: root },
  );
}

function request(root: string, projectRoot: string): WorkerRequest {
  return {
    repositoryRoot: root,
    project: {
      service: "example",
      root: projectRoot,
      tspconfig: `${projectRoot}/tspconfig.yaml`,
      classification: "main-bearing",
      main: `${projectRoot}/main.tsp`,
      client: null,
    },
    sourceSha: "source",
    dependencyLockHash: "lock",
    projectInputHash: "input",
    toolVersion: "1.0.0",
    compilerVersion: "1.0.0",
    armLibraryVersion: "1.0.0",
  };
}

describe("report runner", () => {
  it("generates a filtered, sorted manifest and index with client-only skips", async () => {
    const root = await createRoot("runner-index-");
    const alpha = join(root, "specification", "alpha", "resource-manager", "A", "Client");
    const beta = join(root, "specification", "beta", "resource-manager", "B", "groups", "Nested");
    for (const project of [alpha, beta]) {
      await mkdir(project, { recursive: true });
      await writeFile(join(project, "tspconfig.yaml"), "");
      await writeFile(join(project, "client.tsp"), "");
    }
    await commitAll(root);

    const manifest = await runReports({
      repositoryRoot: root,
      services: ["BETA"],
      projects: ["groups/Nested"],
      concurrency: 1,
      timeoutMs: 5_000,
      resume: false,
    });

    expect(manifest.projects.map((project) => project.projectRoot)).toEqual([
      "specification/beta/resource-manager/B/groups/Nested",
    ]);
    expect(manifest.projects[0]).toMatchObject({
      status: "skipped",
      classification: "client-only",
      entrypoint: "specification/beta/resource-manager/B/groups/Nested/client.tsp",
    });
    const persisted = JSON.parse(
      await readFile(
        join(root, "documentation", "typespec-arm-resource-data", "manifest.json"),
        "utf8",
      ),
    ) as { projects: ProjectResult[] };
    expect(persisted.projects).toEqual(manifest.projects);
    expect(
      await readFile(
        join(root, "documentation", "typespec-arm-resource-data", "README.md"),
        "utf8",
      ),
    ).toContain("Skipped client-only: 1");
    await expect(readFile(join(beta, "resource-data", "resources.csv"), "utf8")).rejects.toThrow();
  });

  it("does not retain a removed project from a compatible filtered-run manifest", async () => {
    const root = await createRoot("runner-removed-");
    const alphaRoot = "specification/alpha/resource-manager/A/Client";
    const betaRoot = "specification/beta/resource-manager/B/Client";
    for (const projectRoot of [alphaRoot, betaRoot]) {
      const project = join(root, ...projectRoot.split("/"));
      await mkdir(project, { recursive: true });
      await writeFile(join(project, "tspconfig.yaml"), "");
      await writeFile(join(project, "client.tsp"), "");
    }
    await commitAll(root);
    expect(
      (
        await runReports({
          repositoryRoot: root,
          services: [],
          projects: [],
          concurrency: 1,
          timeoutMs: 5_000,
          resume: false,
        })
      ).projects.map((project) => project.projectRoot),
    ).toEqual([alphaRoot, betaRoot]);

    await execFileAsync("git", ["rm", "-r", "-f", alphaRoot], { cwd: root });
    const manifest = await runReports({
      repositoryRoot: root,
      services: ["beta"],
      projects: [],
      concurrency: 1,
      timeoutMs: 5_000,
      resume: false,
    });

    expect(manifest.projects.map((project) => project.projectRoot)).toEqual([betaRoot]);
  });

  it("does not merge an unselected project whose stored output is invalid", async () => {
    const root = await createRoot("runner-invalid-merge-");
    const alphaRoot = "specification/alpha/resource-manager/A/Client";
    const betaRoot = "specification/beta/resource-manager/B/Client";
    for (const projectRoot of [alphaRoot, betaRoot]) {
      const project = join(root, ...projectRoot.split("/"));
      await mkdir(project, { recursive: true });
      await writeFile(join(project, "tspconfig.yaml"), "");
      await writeFile(join(project, "client.tsp"), "");
    }
    await commitAll(root);
    await runReports({
      repositoryRoot: root,
      services: [],
      projects: [],
      concurrency: 1,
      timeoutMs: 5_000,
      resume: false,
    });
    await writeFile(join(root, ...alphaRoot.split("/"), "resource-data", "status.json"), "{}\n");

    const manifest = await runReports({
      repositoryRoot: root,
      services: ["beta"],
      projects: [],
      concurrency: 1,
      timeoutMs: 5_000,
      resume: false,
    });

    expect(manifest.projects.map((project) => project.projectRoot)).toEqual([betaRoot]);
  });

  it("captures compiler failures without leaving success outputs", async () => {
    const root = await mkdtemp(join(import.meta.dirname, "runner-compile-failure-"));
    folders.push(root);
    const projectRoot = "specification/example/resource-manager/Microsoft.Example/Broken";
    const project = join(root, ...projectRoot.split("/"));
    await mkdir(project, { recursive: true });
    await writeFile(join(project, "tspconfig.yaml"), "");
    await writeFile(join(project, "main.tsp"), "model Broken {");

    const result = await runWorker(request(root, projectRoot));

    expect(result.status).toBe("failed");
    expect(result.diagnostics.errors).toBeGreaterThan(0);
    expect(await readFile(join(project, "resource-data", "errors.md"), "utf8")).toContain(
      "TypeSpec compilation reported errors",
    );
    await expect(
      readFile(join(project, "resource-data", "resources.csv"), "utf8"),
    ).rejects.toThrow();
  });

  it("terminates a worker that exceeds its project timeout", async () => {
    const root = await createRoot("runner-timeout-");
    const command = join(root, "hang-worker.js");
    await writeFile(command, 'process.on("SIGTERM", () => {}); setTimeout(() => {}, 60_000);\n');

    await expect(
      runChild(request(root, "specification/example/resource-manager/A"), 50, command),
    ).rejects.toThrow("Project timed out after 50ms");
  });

  it("invalidates resume when an output hash no longer matches", async () => {
    const root = await createRoot("runner-resume-");
    const projectRoot = "specification/example/resource-manager/Microsoft.Example/Example";
    const output = join(root, ...projectRoot.split("/"), "resource-data");
    await mkdir(output, { recursive: true });
    const workerRequest = request(root, projectRoot);
    const resources = "resourceKey\n";
    const operations = "operationKey\n";
    const result = {
      service: "example",
      projectRoot,
      entrypoint: `${projectRoot}/main.tsp`,
      classification: "main-bearing",
      status: "succeeded",
      resourceCount: 0,
      operationCount: 0,
      caseOnlyClashCount: 0,
      genuineClashCount: 0,
      sourceSha: workerRequest.sourceSha,
      dependencyLockHash: workerRequest.dependencyLockHash,
      projectInputHash: workerRequest.projectInputHash,
      toolVersion: workerRequest.toolVersion,
      compilerVersion: workerRequest.compilerVersion,
      armLibraryVersion: workerRequest.armLibraryVersion,
      diagnostics: { errors: 0, warnings: 0, total: 0 },
      outputHashes: {
        resourcesCsv: sha256(resources),
        operationsCsv: sha256(operations),
        statusJson: "",
      },
    } satisfies ProjectResult;
    result.outputHashes.statusJson = sha256(`${JSON.stringify(result, null, 2)}\n`);
    await writeFile(join(output, "resources.csv"), resources);
    await writeFile(join(output, "operations.csv"), operations);
    await writeFile(join(output, "status.json"), `${JSON.stringify(result, null, 2)}\n`);

    await expect(canResume(root, workerRequest)).resolves.toEqual(result);
    await expect(
      canResume(root, { ...workerRequest, sourceSha: "different-source" }),
    ).resolves.toBeUndefined();
    await writeFile(join(output, "resources.csv"), "tampered\n");
    await expect(canResume(root, workerRequest)).resolves.toBeUndefined();
  });

  it("does not treat generated report files as project inputs", async () => {
    const root = await createRoot("runner-generated-input-");
    const projectRoot = "specification/example/resource-manager/Microsoft.Example/Example";
    const project = join(root, ...projectRoot.split("/"));
    await mkdir(join(project, "resource-data"), { recursive: true });
    await writeFile(join(project, "tspconfig.yaml"), "");
    await writeFile(join(project, "main.tsp"), "");
    await writeFile(join(project, "resource-data", "status.json"), "{}\n");
    await commitAll(root);

    const first = await runReports({
      repositoryRoot: root,
      services: [],
      projects: [],
      concurrency: 1,
      timeoutMs: 5_000,
      resume: false,
    });
    const firstHash = first.projects[0].projectInputHash;
    await writeFile(join(project, "resource-data", "status.json"), '{"changed":true}\n');
    const second = await runReports({
      repositoryRoot: root,
      services: [],
      projects: [],
      concurrency: 1,
      timeoutMs: 5_000,
      resume: false,
    });

    expect(second.projects[0].projectInputHash).toBe(firstHash);
  });
});
