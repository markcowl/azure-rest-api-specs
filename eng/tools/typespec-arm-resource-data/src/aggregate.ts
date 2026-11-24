import type { Manifest, ManifestSummary, ProjectResult, TargetRuleDiagnostic } from "./types.ts";

function link(project: ProjectResult, file: string, reportDirectory: string): string {
  const aggregateDepth = reportDirectory === "resource-data" ? "../.." : "../../..";
  return `${aggregateDepth}/${project.projectRoot}/${reportDirectory}/${file}`;
}

export function createSummary(projects: ProjectResult[]): ManifestSummary {
  return {
    discovered: projects.length,
    attempted: projects.filter(
      (project) =>
        project.status !== "skipped-client-only" && project.status !== "blocked-rule-unavailable",
    ).length,
    succeeded: projects.filter(
      (project) => project.status === "succeeded-findings" || project.status === "succeeded-clean",
    ).length,
    clean: projects.filter((project) => project.status === "succeeded-clean").length,
    affected: projects.filter((project) => project.status === "succeeded-findings").length,
    zeroResource: projects.filter((project) => project.status === "zero-resource").length,
    failed: projects.filter((project) => project.status === "failed-compilation").length,
    timedOut: projects.filter((project) => project.status === "timed-out").length,
    skipped: projects.filter((project) => project.status === "skipped-client-only").length,
    blocked: projects.filter((project) => project.status === "blocked-rule-unavailable").length,
    resources: projects.reduce((sum, project) => sum + project.resourceCount, 0),
    operations: projects.reduce((sum, project) => sum + project.operationCount, 0),
    diagnostics: projects.reduce((sum, project) => sum + project.diagnosticCount, 0),
    findings: projects.reduce((sum, project) => sum + project.findingCount, 0),
    affectedLogicalNames: projects.reduce(
      (sum, project) => sum + project.affectedLogicalNames.length,
      0,
    ),
    correlatedResourceRecords: projects.reduce(
      (sum, project) => sum + project.correlatedResourceCount,
      0,
    ),
    matchedDiagnostics: projects.reduce((sum, project) => sum + project.matchedDiagnosticCount, 0),
    partialDiagnostics: projects.reduce((sum, project) => sum + project.partialDiagnosticCount, 0),
    unmatchedDiagnostics: projects.reduce(
      (sum, project) => sum + project.unmatchedDiagnosticCount,
      0,
    ),
  };
}

function markdownLink(label: string, url: string): string {
  return url ? `[${label}](${url})` : `${label} (source unavailable)`;
}

function uniqueOperations(
  resource: TargetRuleDiagnostic["correlatedResources"][number],
): TargetRuleDiagnostic["correlatedResources"][number]["operations"] {
  return [
    ...new Map(
      resource.operations.map((operation) => [
        [
          operation.operationDefinition,
          operation.operationName,
          operation.operationVerb,
          operation.operationKind,
        ].join("|"),
        operation,
      ]),
    ).values(),
  ].sort((left, right) =>
    [left.operationName, left.operationVerb, left.operationDefinition]
      .join("|")
      .localeCompare(
        [right.operationName, right.operationVerb, right.operationDefinition].join("|"),
      ),
  );
}

function resourceScope(path: string): string {
  if (/\/billingProfiles\//i.test(path)) return "billing profile scope";
  if (/\/billingAccounts\//i.test(path)) return "billing account scope";
  if (/\/managementGroups\//i.test(path)) return "management group scope";
  if (/\/resourceGroups\//i.test(path)) return "resource group scope";
  if (/\/subscriptions\//i.test(path)) return "subscription scope";
  if (/\/providers\//i.test(path)) return "tenant or provider scope";
  return "custom scope";
}

function projectAggregateLink(project: ProjectResult, reportDirectory: string): string {
  const depth = project.projectRoot.split("/").length + 1;
  return (
    "../".repeat(depth) + `documentation/typespec-arm-resource-data/${reportDirectory}/README.md`
  );
}

function findingDetails(finding: TargetRuleDiagnostic): string {
  const resources =
    finding.correlatedResources.length === 0
      ? ["- No resolved resource records matched."]
      : finding.correlatedResources.flatMap((resource) => [
          `- ${markdownLink(
            `\`${resource.resourceType || "untyped resource"}\``,
            resource.authoredSource,
          )} — ${resourceScope(resource.resourceInstancePath)}`,
          ...(uniqueOperations(resource).length === 0
            ? ["  - No associated operations were resolved."]
            : uniqueOperations(resource).map(
                (operation) =>
                  `  - ${markdownLink(
                    `\`${operation.operationName}\``,
                    operation.operationDefinition,
                  )} — \`${operation.operationVerb.toUpperCase()}\` (${operation.operationKind})`,
              )),
        ]);
  return [
    `### ${finding.findingId}`,
    "",
    `**Logical resource name:** \`${finding.resourceName}\`  `,
    `**Diagnostic:** ${markdownLink(
      `\`${finding.sourceFile}:${finding.line}:${finding.column}\``,
      finding.sourceUrl,
    )}  `,
    `**Correlation:** \`${finding.correlationState}\`${
      finding.correlationReason ? ` - ${finding.correlationReason}` : ""
    }  `,
    `**Recommendation (${finding.recommendation.kind}):** ${finding.recommendation.text}`,
    "",
    "**Evidence:**",
    "",
    ...finding.recommendation.evidence.map((item) => `- ${item}`),
    "",
    "**Conflicting resources and operations:**",
    "",
    ...resources,
    "",
  ].join("\n");
}

export function createProjectReadme(project: ProjectResult): string {
  return [
    `# no-resource-name-conflict details`,
    "",
    `- Spec: \`${project.projectRoot}\``,
    `- Source commit: \`${project.sourceSha}\``,
    `- [Aggregate report](${projectAggregateLink(project, project.reportDirectory)})`,
    `- [Machine-readable diagnostics](diagnostics.json)`,
    "",
    "## Conflicts",
    "",
    ...(project.targetDiagnostics.length === 0
      ? ["- None", ""]
      : project.targetDiagnostics.flatMap((finding) => [findingDetails(finding)])),
  ].join("\n");
}

function projectList(
  projects: ProjectResult[],
  reportDirectory: string,
  file = "status.json",
): string {
  return projects.length === 0
    ? "- None"
    : projects
        .map(
          (project) =>
            `- [\`${project.projectRoot}\`](${link(project, file, reportDirectory)}) - ` +
            `\`${project.status}\``,
        )
        .join("\n");
}

export function createReadme(
  manifest: Manifest,
  reportDirectory = manifest.reportDirectory,
): string {
  const findings = manifest.projects.flatMap((project) => project.targetDiagnostics);
  const partial = findings.filter((finding) => finding.correlationState !== "matched");
  const failed = manifest.projects.filter(
    (project) => project.status === "failed-compilation" || project.status === "timed-out",
  );
  const zero = manifest.projects.filter((project) => project.status === "zero-resource");
  const skipped = manifest.projects.filter((project) => project.status === "skipped-client-only");
  const blocked = manifest.projects.filter(
    (project) => project.status === "blocked-rule-unavailable",
  );
  const summary = manifest.summary;
  const incomplete = summary.failed + summary.timedOut + summary.skipped + summary.blocked > 0;
  const affectedSpecs =
    findings.length === 0
      ? ["- None", ""]
      : manifest.projects
          .filter((project) => project.targetDiagnostics.length > 0)
          .flatMap((project) => [
            `### \`${project.projectRoot}\``,
            "",
            ...project.targetDiagnostics.map((finding) => {
              const details = link(project, "README.md", reportDirectory);
              return (
                `- \`${finding.resourceName}\` (${finding.findingId}) — ` +
                `${finding.correlatedResources.length} resolved resources; ` +
                `[spec details](${details}) · ` +
                `[conflict details](${details}#${finding.findingId.toLowerCase()})`
              );
            }),
            "",
          ]);
  return [
    "# no-resource-name-conflict report",
    "",
    "## Source, rule, and tool metadata",
    "",
    `- Repository: \`${manifest.repository}\``,
    `- Source commit: \`${manifest.sourceSha}\``,
    `- Source timestamp: \`${manifest.sourceTimestamp}\``,
    `- Generation timestamp: \`${manifest.generationTimestamp}\``,
    `- Report ID: \`${manifest.reportId}\``,
    `- Source lock SHA-256: \`${manifest.sourceLockHash}\``,
    `- Report-branch lock SHA-256: \`${manifest.reportLockHash}\``,
    `- Report tool: \`${manifest.customTool.packageName}@${manifest.customTool.packageVersion}\``,
    `- Report tool reference commit: \`${manifest.customTool.referenceCommit}\``,
    `- Report tool source commit: \`${manifest.customTool.sourceCommit}\``,
    `- Node.js: \`${manifest.nodeVersion}\``,
    `- pnpm: \`${manifest.pnpmVersion}\``,
    `- TypeSpec compiler: \`@typespec/compiler@${manifest.compilerVersion}\``,
    `- ARM library: \`@azure-tools/typespec-azure-resource-manager@${manifest.armLibraryVersion}\``,
    `- Ruleset: \`@azure-tools/typespec-azure-rulesets@${manifest.rulesetVersion}\``,
    `- Rule: \`${manifest.targetRule.code}\``,
    `- Rule documentation: ${manifest.targetRule.documentationUrl}`,
    `- Rule severity: \`${manifest.targetRule.severity}\``,
    `- Enabled by the installed ARM \`all\` ruleset: \`${manifest.targetRule.enabledByDefault}\``,
    `- Rule behavior verification commit: \`${manifest.targetRule.verifiedBehaviorCommit}\``,
    "",
    "## Executive summary",
    "",
    `The installed rule emitted ${summary.diagnostics} diagnostics, retained as ${summary.findings} ` +
      `deduplicated findings across ${summary.affected} affected projects and ` +
      `${summary.affectedLogicalNames} project-qualified logical resource names.`,
    "",
    `Correlation matched ${summary.matchedDiagnostics} findings, partially matched ` +
      `${summary.partialDiagnostics}, and left ${summary.unmatchedDiagnostics} unmatched.`,
    "",
    "## Coverage",
    "",
    `- Discovered projects: ${summary.discovered}`,
    `- Attempted projects: ${summary.attempted}`,
    `- Succeeded with findings: ${summary.affected}`,
    `- Succeeded clean: ${summary.clean}`,
    `- Zero-resource: ${summary.zeroResource}`,
    `- Failed compilation: ${summary.failed}`,
    `- Timed out: ${summary.timedOut}`,
    `- Skipped client-only: ${summary.skipped}`,
    `- Blocked because the installed toolchain lacks the rule: ${summary.blocked}`,
    `- Resolved resources: ${summary.resources}`,
    `- Resolved operations: ${summary.operations}`,
    `- Correlated resource records: ${summary.correlatedResourceRecords}`,
    "",
    `Validation inventory found ${manifest.inventory.configuredTypeSpecProjects} total TypeSpec ` +
      `projects and ${manifest.inventory.configuredArmProjects} ARM projects; Git-backed report ` +
      `discovery found ${manifest.inventory.discoveredArmProjects}.`,
    "",
    manifest.inventory.explanation,
    "",
    "## Affected specs",
    "",
    ...affectedSpecs,
    "## Unmatched or partially matched diagnostics",
    "",
    ...(partial.length === 0
      ? ["- None"]
      : partial.map(
          (finding) =>
            `- \`${finding.findingId}\` in \`${finding.projectRoot}\`: ` +
            `${finding.correlationReason ?? finding.correlationState}`,
        )),
    "",
    "## Failed and timed-out projects",
    "",
    projectList(failed, reportDirectory, "errors.md"),
    "",
    ...(blocked.length > 0
      ? ["Blocked projects:", "", projectList(blocked, reportDirectory), ""]
      : []),
    "## Zero-resource projects",
    "",
    projectList(zero, reportDirectory),
    "",
    "## Skipped client-only projects",
    "",
    projectList(skipped, reportDirectory),
    "",
    "## Machine-readable report",
    "",
    "- [Manifest](manifest.json)",
    "",
    "## Reproduction",
    "",
    "```powershell",
    `mise exec node@24.14.1 pnpm@12.6.0 -- node eng/tools/typespec-arm-resource-data/cmd/typespec-arm-resource-data.js --root . --source-ref ${manifest.sourceSha} --tool-source-commit ${manifest.customTool.sourceCommit} --report-directory ${manifest.reportDirectory} --timeout 300 --concurrency 4 --resume`,
    "```",
    "",
    "## Limitations",
    "",
    incomplete
      ? `Coverage is incomplete: ${summary.failed} failed, ${summary.timedOut} timed out, ` +
        `${summary.skipped} client-only, and ${summary.blocked} blocked projects were not ` +
        "successfully assessed. They are not classified as clean."
      : "Every discovered project was assessed; no failed, timed-out, skipped, or blocked projects remain.",
    "",
    "Recommendations are derived from the resolved resources, associated operations, HTTP verbs, " +
      "and linked TypeSpec declarations. A recommendation is explicitly marked indeterminate when " +
      "that evidence does not establish one safe remediation.",
    "",
    "The generation timestamp is the only intentionally time-varying field in a rerun at the same " +
      "source, lockfile, tool source, and installed package versions.",
    "",
  ].join("\n");
}
