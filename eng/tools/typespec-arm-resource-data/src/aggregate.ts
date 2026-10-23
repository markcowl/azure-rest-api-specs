import type { Manifest, ManifestSummary, ProjectResult } from "./types.ts";

function link(project: ProjectResult, file: string): string {
  return `../../${project.projectRoot}/resource-data/${file}`;
}

export function createSummary(projects: ProjectResult[]): ManifestSummary {
  return {
    projects: projects.length,
    succeeded: projects.filter((project) => project.status === "succeeded").length,
    zeroResource: projects.filter((project) => project.status === "zero-resource").length,
    failed: projects.filter((project) => project.status === "failed").length,
    skipped: projects.filter((project) => project.status === "skipped").length,
    resources: projects.reduce((sum, project) => sum + project.resourceCount, 0),
    operations: projects.reduce((sum, project) => sum + project.operationCount, 0),
    caseOnlyClashRecords: projects.reduce((sum, project) => sum + project.caseOnlyClashCount, 0),
    genuineClashRecords: projects.reduce((sum, project) => sum + project.genuineClashCount, 0),
    caseOnlyClashProjects: projects.filter((project) => project.caseOnlyClashCount > 0).length,
    genuineClashProjects: projects.filter((project) => project.genuineClashCount > 0).length,
  };
}

export function createReadme(manifest: Manifest): string {
  const failed = manifest.projects.filter((project) => project.status === "failed");
  const skipped = manifest.projects.filter((project) => project.status === "skipped");
  const zero = manifest.projects.filter((project) => project.status === "zero-resource");
  const caseOnly = manifest.projects.filter((project) => project.caseOnlyClashCount > 0);
  const genuine = manifest.projects.filter((project) => project.genuineClashCount > 0);
  const list = (projects: ProjectResult[], file = "status.json") =>
    projects.length === 0
      ? "- None"
      : projects.map((project) => `- [${project.projectRoot}](${link(project, file)})`).join("\n");
  const clashList = (
    projects: ProjectResult[],
    field: "caseOnlyClashCount" | "genuineClashCount",
  ) =>
    projects.length === 0
      ? "- None"
      : projects
          .map(
            (project) =>
              `- [${project.projectRoot}](${link(project, "status.json")}) — ${project[field]} clash records`,
          )
          .join("\n");
  const projectGroups = Map.groupBy(
    [...manifest.projects].sort(
      (left, right) =>
        left.service.localeCompare(right.service) ||
        left.projectRoot.localeCompare(right.projectRoot),
    ),
    (project) => project.service,
  );
  const directory = [...projectGroups.entries()].flatMap(([service, projects]) => [
    `### ${service}`,
    "",
    "| Project | Status | Resources | Operations | Reports |",
    "| --- | --- | ---: | ---: | --- |",
    ...projects.map((project) => {
      const reports = [
        project.outputHashes.statusJson ? `[status](${link(project, "status.json")})` : undefined,
        project.outputHashes.resourcesCsv
          ? `[resources](${link(project, "resources.csv")})`
          : undefined,
        project.outputHashes.operationsCsv
          ? `[operations](${link(project, "operations.csv")})`
          : undefined,
        project.outputHashes.errorsMd ? `[errors](${link(project, "errors.md")})` : undefined,
      ]
        .filter((report) => report !== undefined)
        .join(" · ");
      return `| \`${project.projectRoot}\` | ${project.status} | ${project.resourceCount} | ${project.operationCount} | ${reports} |`;
    }),
    "",
  ]);
  const summary = manifest.summary;
  const projectsLabel = (count: number) => (count === 1 ? "project" : "projects");
  return [
    "# TypeSpec ARM resource data",
    "",
    "## Source and tool metadata",
    "",
    `- Repository: \`${manifest.repository}\``,
    `- Source commit: \`${manifest.sourceSha}\``,
    `- Source timestamp: \`${manifest.generatedAt}\``,
    `- Dependency lock SHA-256: \`${manifest.dependencyLockHash}\``,
    `- Report tool: \`@azure-tools/typespec-arm-resource-data-report@${manifest.toolVersion}\``,
    `- Node.js: \`${manifest.nodeVersion}\``,
    `- TypeSpec compiler: \`@typespec/compiler@${manifest.compilerVersion}\``,
    `- ARM library: \`@azure-tools/typespec-azure-resource-manager@${manifest.armLibraryVersion}\``,
    "",
    "## Totals",
    "",
    `- Projects: ${summary.projects}`,
    `- Succeeded: ${summary.succeeded}`,
    `- Zero-resource: ${summary.zeroResource}`,
    `- Failed: ${summary.failed}`,
    `- Skipped client-only: ${summary.skipped}`,
    `- Resources: ${summary.resources}`,
    `- Operations: ${summary.operations}`,
    "",
    "## Resource name clashes",
    "",
    `- Case-only ARM identity duplicates: ${summary.caseOnlyClashRecords} records across ${summary.caseOnlyClashProjects} ${projectsLabel(summary.caseOnlyClashProjects)}`,
    `- Genuine distinct-resource name clashes: ${summary.genuineClashRecords} records across ${summary.genuineClashProjects} ${projectsLabel(summary.genuineClashProjects)}`,
    "",
    "### Case-only ARM identity duplicates",
    "",
    clashList(caseOnly, "caseOnlyClashCount"),
    "",
    "### Genuine distinct-resource name clashes",
    "",
    clashList(genuine, "genuineClashCount"),
    "",
    `## Zero-resource projects (${summary.zeroResource})`,
    "",
    list(zero),
    "",
    `## Failed projects (${summary.failed})`,
    "",
    list(failed, "errors.md"),
    "",
    `## Skipped client-only projects (${summary.skipped})`,
    "",
    list(skipped),
    "",
    `## Project directory (${summary.projects})`,
    "",
    ...directory,
  ].join("\n");
}
