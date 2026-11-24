import { execFile } from "node:child_process";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { promisify } from "node:util";
import { afterEach, describe, expect, it } from "vitest";
import { discoverProjects, filterProjects } from "../src/discovery.ts";

const execFileAsync = promisify(execFile);
const folders: string[] = [];

afterEach(async () => {
  await Promise.all(
    folders.splice(0).map((folder) => rm(folder, { recursive: true, force: true })),
  );
});

describe("project discovery", () => {
  it("uses tracked tspconfig files and classifies main and client-only roots", async () => {
    const root = await mkdtemp(join(import.meta.dirname, "discovery-"));
    folders.push(root);
    const main = join(root, "specification", "alpha", "resource-manager", "A", "Main");
    const client = join(root, "specification", "beta", "resource-manager", "B", "Client");
    const invalid = join(root, "specification", "gamma", "resource-manager", "C", "Invalid");
    await mkdir(main, { recursive: true });
    await mkdir(client, { recursive: true });
    await mkdir(invalid, { recursive: true });
    await writeFile(join(main, "tspconfig.yaml"), "");
    await writeFile(join(main, "main.tsp"), "");
    await writeFile(join(client, "tspconfig.yaml"), "");
    await writeFile(join(client, "client.tsp"), "");
    await writeFile(join(invalid, "tspconfig.yaml"), "");
    await execFileAsync("git", ["init"], { cwd: root });
    await execFileAsync("git", ["add", "."], { cwd: root });
    await writeFile(join(invalid, "main.tsp"), "");

    const projects = await discoverProjects(root);
    expect(projects.map(({ service, classification }) => ({ service, classification }))).toEqual([
      { service: "alpha", classification: "main-bearing" },
      { service: "beta", classification: "client-only" },
    ]);
    expect(filterProjects(projects, ["BETA"], [])).toHaveLength(1);
    expect(filterProjects(projects, [], ["A/Main"])).toHaveLength(1);
  });

  it("discovers newly tracked nested projects and drops removed projects without configuration", async () => {
    const root = await mkdtemp(join(import.meta.dirname, "dynamic-discovery-"));
    folders.push(root);
    const first = join(root, "specification", "alpha", "resource-manager", "A", "First");
    await mkdir(first, { recursive: true });
    await writeFile(join(first, "tspconfig.yaml"), "");
    await writeFile(join(first, "main.tsp"), "");
    await execFileAsync("git", ["init"], { cwd: root });
    await execFileAsync("git", ["add", "."], { cwd: root });
    expect((await discoverProjects(root)).map((project) => project.root)).toEqual([
      "specification/alpha/resource-manager/A/First",
    ]);

    const nested = join(
      root,
      "specification",
      "alpha",
      "resource-manager",
      "A",
      "groups",
      "Nested",
    );
    await mkdir(nested, { recursive: true });
    await writeFile(join(nested, "tspconfig.yaml"), "");
    await writeFile(join(nested, "main.tsp"), "");
    await execFileAsync("git", ["add", "."], { cwd: root });
    expect((await discoverProjects(root)).map((project) => project.root)).toEqual([
      "specification/alpha/resource-manager/A/First",
      "specification/alpha/resource-manager/A/groups/Nested",
    ]);

    await execFileAsync("git", ["rm", "-r", "-f", "specification/alpha/resource-manager/A/First"], {
      cwd: root,
    });
    expect((await discoverProjects(root)).map((project) => project.root)).toEqual([
      "specification/alpha/resource-manager/A/groups/Nested",
    ]);
  });
});
