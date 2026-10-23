import type { Diagnostic, Operation, Program, Type } from "@typespec/compiler";
import { formatDiagnostic, getSourceLocation } from "@typespec/compiler";
import type {
  ArmResourceOperation,
  ResolvedResource,
} from "@azure-tools/typespec-azure-resource-manager";
import { createHash } from "node:crypto";
import { relative, sep } from "node:path";
import type { OperationRow, ResourceRow } from "./types.ts";

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
    .map((segment) =>
      segment.startsWith("{") && segment.endsWith("}") ? "{}" : segment.toLowerCase(),
    )
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

function sourceLink(
  target: Type | Operation | undefined,
  repositoryRoot: string,
  sourceSha: string,
): string {
  if (!target) return "";
  const location = getSourceLocation(target);
  const path = relative(repositoryRoot, location.file.path).split(sep).join("/");
  if (path.startsWith("../")) return "";
  const { line } = location.file.getLineAndCharacterOfPosition(location.pos);
  return `https://github.com/Azure/azure-rest-api-specs/blob/${sourceSha}/${path}#L${line + 1}`;
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
    };
  });

  applyNameClashAnalysis(rows);

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
