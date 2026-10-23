import { execFile } from "node:child_process";
import { dirname, relative, resolve, sep } from "node:path";
import { promisify } from "node:util";
import type { ProjectInventory } from "./types.ts";

const execFileAsync = promisify(execFile);

export async function discoverProjects(repositoryRoot: string): Promise<ProjectInventory[]> {
  const { stdout } = await execFileAsync(
    "git",
    [
      "ls-files",
      "--",
      "specification/**/tspconfig.yaml",
      "specification/**/main.tsp",
      "specification/**/client.tsp",
    ],
    { cwd: repositoryRoot, maxBuffer: 10 * 1024 * 1024 },
  );
  const tracked = new Set(
    stdout
      .split(/\r?\n/)
      .filter(Boolean)
      .map((path) => path.replaceAll("\\", "/")),
  );
  const projects: ProjectInventory[] = [];
  for (const normalized of [...tracked].filter((path) => path.endsWith("/tspconfig.yaml")).sort()) {
    const match = /^specification\/([^/]+)\/resource-manager\/.+\/tspconfig\.yaml$/.exec(
      normalized,
    );
    if (!match) continue;
    const absoluteRoot = dirname(resolve(repositoryRoot, normalized));
    const root = relative(repositoryRoot, absoluteRoot).split(sep).join("/");
    const main = `${root}/main.tsp`;
    const client = `${root}/client.tsp`;
    const hasMain = tracked.has(main);
    const hasClient = tracked.has(client);
    if (!hasMain && !hasClient) continue;
    projects.push({
      service: match[1],
      root,
      tspconfig: normalized,
      classification: hasMain ? "main-bearing" : "client-only",
      main: hasMain ? main : null,
      client: hasClient ? client : null,
    });
  }
  return projects.sort((left, right) => left.root.localeCompare(right.root));
}

export function filterProjects(
  projects: ProjectInventory[],
  services: string[],
  projectFilters: string[],
): ProjectInventory[] {
  const normalizedServices = new Set(services.map((value) => value.toLowerCase()));
  return projects.filter(
    (project) =>
      (normalizedServices.size === 0 || normalizedServices.has(project.service.toLowerCase())) &&
      (projectFilters.length === 0 ||
        projectFilters.some((filter) => project.root.includes(filter.replaceAll("\\", "/")))),
  );
}
