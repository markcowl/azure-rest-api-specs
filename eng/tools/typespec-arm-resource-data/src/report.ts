import type { Diagnostic, DiagnosticTarget, Operation, Program, Type } from "@typespec/compiler";
import { formatDiagnostic, getSourceLocation, NoTarget } from "@typespec/compiler";
import type {
  ArmResourceOperation,
  ResolvedResource,
} from "@azure-tools/typespec-azure-resource-manager";
import { createHash } from "node:crypto";
import { relative, sep } from "node:path";
import type {
  DuplicateResourceErrorGroup,
  NameClashGroup,
  OperationRow,
  ProjectInventory,
  ResourceRow,
  TargetRuleDiagnostic,
} from "./types.ts";
import { targetRuleCode } from "./types.ts";

const resourceColumns: (keyof ResourceRow)[] = [
  "resourceKey",
  "resourceType",
  "resourceInstancePath",
  "resourceName",
  "resourceDefinition",
  "bicepResource",
  "readOperation",
  "createOrUpdateOperation",
  "nameClash",
  "nameClashAnalysis",
  "duplicateResourceError",
  "duplicateResourceErrorAnalysis",
];

const operationColumns: (keyof OperationRow)[] = [
  "operationKey",
  "operationName",
  "operationVerb",
  "operationPath",
  "operationKind",
  "operationDefinition",
  "resourceKey",
  "resourceType",
  "resourceInstancePath",
  "resourceName",
];

export function normalizeArmPath(path: string): string {
  return path
    .split("/")
    .map((segment) => (/^\{[^}]+\}$/.test(segment) ? "{}" : segment.toLowerCase()))
    .join("/");
}

export function getResourceType(resource: ResolvedResource): string {
  return [resource.resourceType.provider, ...resource.resourceType.types].join("/");
}

export function getResourceKey(resourceType: string, instancePath: string): string {
  return `${resourceType.toLowerCase()}|${normalizeArmPath(instancePath)}`;
}

export function getOperationKey(verb: string, path: string): string {
  return `${verb.toLowerCase()}|${normalizeArmPath(path)}`;
}

export function toCsv<T extends object>(columns: (keyof T)[], rows: T[]): string {
  const encode = (value: unknown) => {
    const text =
      value === undefined || value === null
        ? ""
        : typeof value === "string" || typeof value === "boolean" || typeof value === "number"
          ? String(value)
          : JSON.stringify(value);
    return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
  };
  return [
    columns.map(String).join(","),
    ...rows.map((row) => columns.map((column) => encode(row[column])).join(",")),
    "",
  ].join("\n");
}

function sourceDetails(
  target: Type | Operation | DiagnosticTarget | undefined,
  repositoryRoot: string,
  sourceSha: string,
): { file: string; line: number; column: number; url: string } | undefined {
  if (!target) return undefined;
  let location;
  try {
    location = getSourceLocation(target);
  } catch {
    return undefined;
  }
  const path = relative(repositoryRoot, location.file.path).split(sep).join("/");
  if (path.startsWith("../") || path === "node_modules" || path.startsWith("node_modules/")) {
    return undefined;
  }
  const { line, character } = location.file.getLineAndCharacterOfPosition(location.pos);
  return {
    file: path,
    line: line + 1,
    column: character + 1,
    url: `https://github.com/Azure/azure-rest-api-specs/blob/${sourceSha}/${path}#L${line + 1}`,
  };
}

function sourceLink(
  target: Type | Operation | undefined,
  repositoryRoot: string,
  sourceSha: string,
): string {
  return sourceDetails(target, repositoryRoot, sourceSha)?.url ?? "";
}

function operationRows(
  resource: ResolvedResource,
  repositoryRoot: string,
  sourceSha: string,
): OperationRow[] {
  const resourceType = getResourceType(resource);
  const resourceKey = getResourceKey(resourceType, resource.resourceInstancePath);
  const lifecycle = resource.operations.lifecycle;
  const rows: OperationRow[] = [];
  const add = (operation: ArmResourceOperation, operationKind: string) =>
    rows.push({
      operationKey: getOperationKey(operation.httpOperation.verb, operation.path),
      operationName: operation.name,
      operationVerb: operation.httpOperation.verb,
      operationPath: operation.path,
      operationKind,
      operationDefinition: sourceLink(operation.operation, repositoryRoot, sourceSha),
      resourceKey,
      resourceType,
      resourceInstancePath: resource.resourceInstancePath,
      resourceName: resource.resourceName,
    });
  for (const operation of lifecycle.read ?? []) add(operation, "read");
  for (const operation of lifecycle.createOrUpdate ?? []) add(operation, "createOrUpdate");
  for (const operation of lifecycle.update ?? []) add(operation, "update");
  for (const operation of lifecycle.delete ?? []) add(operation, "delete");
  for (const operation of lifecycle.checkExistence ?? []) add(operation, "checkExistence");
  for (const operation of resource.operations.lists) add(operation, "list");
  for (const operation of resource.operations.actions) add(operation, "action");
  for (const operation of resource.associatedOperations ?? []) add(operation, "unknown");
  return rows;
}

export function collectRows(
  program: Program,
  resources: ResolvedResource[],
  repositoryRoot: string,
  sourceSha: string,
): { resources: ResourceRow[]; operations: OperationRow[] } {
  const rows: ResourceRow[] = resources.map((resource) => {
    const resourceType = getResourceType(resource);
    const read = resource.operations.lifecycle.read ?? [];
    const createOrUpdate = resource.operations.lifecycle.createOrUpdate ?? [];
    return {
      resourceKey: getResourceKey(resourceType, resource.resourceInstancePath),
      resourceType,
      resourceInstancePath: resource.resourceInstancePath,
      resourceName: resource.resourceName,
      resourceDefinition: sourceLink(resource.type, repositoryRoot, sourceSha),
      bicepResource: read.length > 0 && createOrUpdate.length > 0,
      readOperation: read
        .map((operation) => sourceLink(operation.operation, repositoryRoot, sourceSha))
        .filter(Boolean)
        .sort()
        .join(";"),
      createOrUpdateOperation: createOrUpdate
        .map((operation) => sourceLink(operation.operation, repositoryRoot, sourceSha))
        .filter(Boolean)
        .sort()
        .join(";"),
      nameClash: false,
      nameClashAnalysis: "",
      duplicateResourceError: false,
      duplicateResourceErrorAnalysis: "",
    };
  });

  applyNameClashAnalysis(rows);
  applyDuplicateResourceErrorAnalysis(rows);

  const operations = resources.flatMap((resource) =>
    operationRows(resource, repositoryRoot, sourceSha),
  );
  rows.sort((left, right) =>
    `${left.resourceName}|${left.resourceKey}`.localeCompare(
      `${right.resourceName}|${right.resourceKey}`,
    ),
  );
  operations.sort((left, right) =>
    [left.resourceName, left.operationName, left.operationKey, left.operationKind]
      .join("|")
      .localeCompare(
        [right.resourceName, right.operationName, right.operationKey, right.operationKind].join(
          "|",
        ),
      ),
  );
  void program;
  return { resources: rows, operations };
}

export function applyNameClashAnalysis(rows: ResourceRow[]): void {
  const byName = Map.groupBy(rows, (row) => row.resourceName);
  for (const sameName of byName.values()) {
    if (sameName.length < 2) continue;
    const keys = [...new Set(sameName.map((row) => row.resourceKey.toLowerCase()))].sort();
    const genuine = keys.length > 1;
    const analysis = genuine ? `genuine: ${keys.join("; ")}` : `case-only duplicate: ${keys[0]}`;
    for (const row of sameName) {
      row.nameClash = true;
      row.nameClashAnalysis = analysis;
    }
  }
}

function resourceSourceUrl(row: ResourceRow): string {
  return (
    row.resourceDefinition ||
    row.readOperation.split(";").find(Boolean) ||
    row.createOrUpdateOperation.split(";").find(Boolean) ||
    ""
  );
}

function parseTargetDiagnostic(
  message: string,
): { resourceName: string; paths: [string, string] } | undefined {
  const match = /Resource name '([^']+)' is used by both '([^']+)' and '([^']+)'/.exec(message);
  return match
    ? {
        resourceName: match[1],
        paths: [match[2], match[3]],
      }
    : undefined;
}

function pathsMatchResources(paths: string[], resources: ResourceRow[]): number {
  const available = Map.groupBy(resources, (resource) => resource.resourceInstancePath);
  const required = new Map<string, number>();
  for (const path of paths) required.set(path, (required.get(path) ?? 0) + 1);
  let matched = 0;
  for (const [path, count] of required) {
    matched += Math.min(count, available.get(path)?.length ?? 0);
  }
  return matched;
}

export function collectTargetDiagnostics(
  diagnostics: readonly Diagnostic[],
  rows: { resources: ResourceRow[]; operations: OperationRow[] },
  project: ProjectInventory,
  repositoryRoot: string,
  sourceSha: string,
): TargetRuleDiagnostic[] {
  const findings = diagnostics
    .filter((diagnostic) => diagnostic.code === targetRuleCode)
    .map((diagnostic): TargetRuleDiagnostic => {
      const parsed = parseTargetDiagnostic(diagnostic.message);
      const location = sourceDetails(
        diagnostic.target === NoTarget ? undefined : diagnostic.target,
        repositoryRoot,
        sourceSha,
      );
      const matchingResources = parsed
        ? rows.resources.filter((resource) => resource.resourceName === parsed.resourceName)
        : [];
      const matchedPaths = parsed ? pathsMatchResources(parsed.paths, matchingResources) : 0;
      const correlationState =
        !parsed || matchingResources.length === 0 || matchedPaths === 0
          ? ("unmatched" as const)
          : matchedPaths === parsed.paths.length
            ? ("matched" as const)
            : ("partial" as const);
      const correlatedResources = matchingResources.map((resource) => ({
        resourceKey: resource.resourceKey,
        resourceType: resource.resourceType,
        resourceInstancePath: resource.resourceInstancePath,
        resourceName: resource.resourceName,
        resourceDefinition: resource.resourceDefinition,
        authoredSource: resourceSourceUrl(resource),
        operations: rows.operations.filter(
          (operation) => operation.resourceKey === resource.resourceKey,
        ),
      }));
      const key = [
        project.root,
        location?.file ?? "",
        location?.line ?? 0,
        location?.column ?? 0,
        parsed?.resourceName ?? "",
        ...(parsed?.paths ?? []),
      ].join("\0");
      const sourceDescription = location?.url
        ? `the resource operation at ${location.url}`
        : "the later conflicting resource operation";
      return {
        findingId: `NRNC-${sha256(key).slice(0, 12).toUpperCase()}`,
        code: String(diagnostic.code),
        severity: diagnostic.severity,
        message: diagnostic.message,
        sourceFile: location?.file ?? "",
        line: location?.line ?? 0,
        column: location?.column ?? 0,
        sourceUrl: location?.url ?? "",
        projectRoot: project.root,
        entrypoint: project.main ?? "",
        service: project.service,
        resourceName: parsed?.resourceName ?? "",
        conflictingInstancePaths: parsed?.paths ?? [],
        correlationState,
        correlatedResources,
        ...(correlationState === "matched"
          ? {}
          : {
              correlationReason: !parsed
                ? "The diagnostic message did not match the installed rule's expected format."
                : matchingResources.length === 0
                  ? `No resolved resource record had the exact logical name '${parsed.resourceName}'.`
                  : `Only ${matchedPaths} of ${parsed.paths.length} diagnostic path occurrences matched resolved resource records.`,
            }),
        suggestedFix:
          `Provide a unique explicit logical resource name for ${sourceDescription}, distinct from ` +
          `'${parsed?.resourceName ?? "the conflicting name"}'. Keep the ARM path and wire API ` +
          "unchanged; pass a distinct ResourceName or OverrideResourceName argument through the " +
          "resource operation template as applicable. Do not suppress this rule.",
      };
    });

  const deduplicated = new Map<string, TargetRuleDiagnostic>();
  for (const finding of findings) {
    const key = [
      finding.projectRoot,
      finding.sourceFile,
      finding.line,
      finding.column,
      finding.resourceName,
      ...finding.conflictingInstancePaths,
    ].join("\0");
    if (!deduplicated.has(key)) deduplicated.set(key, finding);
  }
  return [...deduplicated.values()].sort((left, right) =>
    [
      left.sourceFile,
      left.line.toString().padStart(10, "0"),
      left.column.toString().padStart(10, "0"),
      left.resourceName,
      ...left.conflictingInstancePaths,
    ]
      .join("|")
      .localeCompare(
        [
          right.sourceFile,
          right.line.toString().padStart(10, "0"),
          right.column.toString().padStart(10, "0"),
          right.resourceName,
          ...right.conflictingInstancePaths,
        ].join("|"),
      ),
  );
}

export function targetDiagnosticsJson(diagnostics: TargetRuleDiagnostic[]): string {
  return `${JSON.stringify(diagnostics, null, 2)}\n`;
}

export function getNameClashGroups(rows: ResourceRow[]): NameClashGroup[] {
  const byName = Map.groupBy(
    rows.filter((row) => row.nameClash),
    (row) => row.resourceName,
  );
  return [...byName.entries()]
    .map(([resourceName, sameName]) => ({
      resourceName,
      classification:
        new Set(sameName.map((row) => row.resourceKey.toLowerCase())).size === 1
          ? ("case-only" as const)
          : ("genuine" as const),
      resources: sameName
        .map((row) => ({
          resourceType: row.resourceType,
          resourceInstancePath: row.resourceInstancePath,
          sourceUrl: resourceSourceUrl(row),
        }))
        .sort((left, right) =>
          [left.resourceType, left.resourceInstancePath, left.sourceUrl]
            .join("|")
            .localeCompare(
              [right.resourceType, right.resourceInstancePath, right.sourceUrl].join("|"),
            ),
        ),
    }))
    .sort((left, right) => left.resourceName.localeCompare(right.resourceName));
}

export function applyDuplicateResourceErrorAnalysis(rows: ResourceRow[]): void {
  const byInstancePath = Map.groupBy(rows, (row) => normalizeArmPath(row.resourceInstancePath));
  for (const [instancePath, samePath] of byInstancePath) {
    const resourceNames = [...new Set(samePath.map((row) => row.resourceName))].sort();
    if (resourceNames.length < 2) continue;
    const analysis =
      `duplicate ARM resource instance path: ${instancePath}; ` +
      `resource names: ${resourceNames.join("; ")}`;
    for (const row of samePath) {
      row.duplicateResourceError = true;
      row.duplicateResourceErrorAnalysis = analysis;
    }
  }
}

export function getDuplicateResourceErrorGroups(
  rows: ResourceRow[],
): DuplicateResourceErrorGroup[] {
  const byInstancePath = Map.groupBy(rows, (row) => normalizeArmPath(row.resourceInstancePath));
  return [...byInstancePath.entries()]
    .filter(([, samePath]) => new Set(samePath.map((row) => row.resourceName)).size > 1)
    .map(([normalizedInstancePath, samePath]) => ({
      normalizedInstancePath,
      resources: samePath
        .map((row) => ({
          resourceName: row.resourceName,
          resourceType: row.resourceType,
          sourceUrl: resourceSourceUrl(row),
        }))
        .sort((left, right) =>
          [left.resourceName, left.resourceType, left.sourceUrl]
            .join("|")
            .localeCompare([right.resourceName, right.resourceType, right.sourceUrl].join("|")),
        ),
    }))
    .sort((left, right) => left.normalizedInstancePath.localeCompare(right.normalizedInstancePath));
}

export function resourcesCsv(rows: ResourceRow[]): string {
  return toCsv(resourceColumns, rows);
}

export function operationsCsv(rows: OperationRow[]): string {
  return toCsv(operationColumns, rows);
}

export function sha256(content: string | Buffer): string {
  return createHash("sha256").update(content).digest("hex");
}

export function formatDiagnostics(diagnostics: readonly Diagnostic[]): string[] {
  return diagnostics.map((diagnostic) => formatDiagnostic(diagnostic));
}
