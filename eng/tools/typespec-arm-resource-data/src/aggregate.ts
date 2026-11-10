import type { Manifest, ManifestSummary, ProjectResult } from "./types.ts";

function link(project: ProjectResult, file: string, reportDirectory: string): string {
  const aggregateDepth = reportDirectory === "resource-data" ? "../.." : "../../..";
  return `${aggregateDepth}/${project.projectRoot}/${reportDirectory}/${file}`;
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
    duplicateResourceErrorRecords: projects.reduce(
      (sum, project) => sum + project.duplicateResourceErrorCount,
      0,
    ),
    duplicateResourceErrorGroups: projects.reduce(
      (sum, project) => sum + project.duplicateResourceErrorGroupCount,
      0,
    ),
    duplicateResourceErrorProjects: projects.filter(
      (project) => project.duplicateResourceErrorCount > 0,
    ).length,
  };
}

export function createReadme(
  manifest: Manifest,
  reportDirectory = manifest.reportDirectory,
): string {
  const failed = manifest.projects.filter((project) => project.status === "failed");
  const skipped = manifest.projects.filter((project) => project.status === "skipped");
  const zero = manifest.projects.filter((project) => project.status === "zero-resource");
  const caseOnly = manifest.projects.filter((project) => project.caseOnlyClashCount > 0);
  const genuine = manifest.projects.filter((project) => project.genuineClashCount > 0);
  const duplicateResourceErrors = manifest.projects.filter(
    (project) => project.duplicateResourceErrorCount > 0,
  );
  const list = (projects: ProjectResult[], file = "status.json") =>
    projects.length === 0
      ? "- None"
      : projects
          .map((project) => `- [${project.projectRoot}](${link(project, file, reportDirectory)})`)
          .join("\n");
  const clashList = (projects: ProjectResult[], classification: "case-only" | "genuine") =>
    projects.length === 0
      ? "- None"
      : projects
          .map((project) => {
            const groups = project.nameClashGroups
              .filter((group) => group.classification === classification)
              .map((group) => {
                const resources = group.resources
                  .map((resource) => {
                    const resourceType = resource.resourceType || "resource type unavailable";
                    const label =
                      `\`${resourceType}\` at ` + `\`${resource.resourceInstancePath}\``;
                    return resource.sourceUrl
                      ? `    - [${label}](${resource.sourceUrl})`
                      : `    - ${label} — source unavailable`;
                  })
                  .join("\n");
                return `  - \`${group.resourceName}\` — ${group.classification}\n${resources}`;
              })
              .join("\n");
            const recordCount =
              classification === "case-only"
                ? project.caseOnlyClashCount
                : project.genuineClashCount;
            const groupCount = project.nameClashGroups.filter(
              (group) => group.classification === classification,
            ).length;
            const groupLabel = groupCount === 1 ? "group" : "groups";
            return [
              `- [${project.projectRoot}](${link(project, "resources.csv", reportDirectory)}) — ${groupCount} ${groupLabel}, ${recordCount} records`,
              groups,
            ]
              .filter(Boolean)
              .join("\n");
          })
          .join("\n");
  const duplicateResourceErrorList =
    duplicateResourceErrors.length === 0
      ? "- None"
      : duplicateResourceErrors
          .map((project) => {
            const groups = project.duplicateResourceErrorGroups
              .map((group) => {
                const resources = group.resources
                  .map((resource) => {
                    const label = `\`${resource.resourceName}\` (\`${resource.resourceType}\`)`;
                    return resource.sourceUrl
                      ? `    - [${label}](${resource.sourceUrl})`
                      : `    - ${label} — source unavailable`;
                  })
                  .join("\n");
                return `  - \`${group.normalizedInstancePath}\`\n${resources}`;
              })
              .join("\n");
            return [
              `- [${project.projectRoot}](${link(project, "resources.csv", reportDirectory)}) — ${project.duplicateResourceErrorGroupCount} groups, ${project.duplicateResourceErrorCount} records`,
              groups,
            ]
              .filter(Boolean)
              .join("\n");
          })
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
        project.outputHashes.statusJson
          ? `[status](${link(project, "status.json", reportDirectory)})`
          : undefined,
        project.outputHashes.resourcesCsv
          ? `[resources](${link(project, "resources.csv", reportDirectory)})`
          : undefined,
        project.outputHashes.operationsCsv
          ? `[operations](${link(project, "operations.csv", reportDirectory)})`
          : undefined,
        project.outputHashes.errorsMd
          ? `[errors](${link(project, "errors.md", reportDirectory)})`
          : undefined,
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
    ...(manifest.armLibraryProvenance
      ? [
          `- ARM library package: ${manifest.armLibraryProvenance.packageUrl}`,
          `- ARM library package version: \`${manifest.armLibraryProvenance.packageVersion}\``,
          `- ARM library package integrity: \`${manifest.armLibraryProvenance.packageIntegrity}\``,
          `- ARM library package SHA-256: \`${manifest.armLibraryProvenance.packageSha256}\``,
          `- ARM library pull request: Azure/typespec-azure#${manifest.armLibraryProvenance.pullRequest}`,
          `- ARM library PR head commit: \`${manifest.armLibraryProvenance.prHeadSha}\``,
        ]
      : []),
    `- Report directory: \`${manifest.reportDirectory}\``,
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
    "## Duplicate resource errors",
    "",
    `- Records: ${summary.duplicateResourceErrorRecords}`,
    `- Groups: ${summary.duplicateResourceErrorGroups}`,
    `- Affected projects: ${summary.duplicateResourceErrorProjects}`,
    "",
    duplicateResourceErrorList,
    "",
    "## Resource name clashes",
    "",
    `- Case-only ARM identity duplicates: ${summary.caseOnlyClashRecords} records across ${summary.caseOnlyClashProjects} ${projectsLabel(summary.caseOnlyClashProjects)}`,
    `- Genuine distinct-resource name clashes: ${summary.genuineClashRecords} records across ${summary.genuineClashProjects} ${projectsLabel(summary.genuineClashProjects)}`,
    "",
    "### Case-only ARM identity duplicates",
    "",
    clashList(caseOnly, "case-only"),
    "",
    "### Genuine distinct-resource name clashes",
    "",
    clashList(genuine, "genuine"),
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
