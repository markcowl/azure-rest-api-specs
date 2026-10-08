import { readFile } from "node:fs/promises";
import { basename, normalize, resolve } from "node:path";
import type { CanonicalTarget, OadFinding } from "./types.ts";

type JsonObject = Record<string, unknown>;
const HTTP_METHODS = new Set(["get", "put", "post", "patch", "delete", "head", "options", "trace"]);

function object(value: unknown): JsonObject | undefined {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as JsonObject)
    : undefined;
}

export function normalizeRoute(route: string): string {
  return route
    .replace(/\{[^}]+\}/g, "{}")
    .replace(/\/+/g, "/")
    .replace(/\/$/, "")
    .toLowerCase();
}

export function jsonPathSegments(path?: string): string[] {
  if (!path) return [];
  if (path.startsWith("/")) {
    return path
      .split("/")
      .slice(1)
      .map((segment) => segment.replaceAll("~1", "/").replaceAll("~0", "~"));
  }
  const segments: string[] = [];
  const expression = path.replace(/^\$/, "");
  const token = /(?:^|\.)([^.[\]]+)|\[\s*(['"])((?:\\.|(?!\2).)*)\2\s*\]|\[([^\]]+)\]/g;
  for (const match of expression.matchAll(token)) {
    const segment = match[1] ?? match[3] ?? match[4]?.trim();
    if (segment !== undefined) {
      segments.push(segment.replace(/\\(['"\\])/g, "$1"));
    }
  }
  return segments;
}

function getAtPath(document: unknown, segments: string[]): unknown {
  let current = document;
  for (const segment of segments) current = object(current)?.[segment];
  return current;
}

function schemaName(ref?: string): string | undefined {
  return ref?.split("/").at(-1);
}

interface Usage {
  method: string;
  route: string;
  operationId?: string;
  direction: "request" | "response";
  statusCode?: string;
}

function collectRefs(value: unknown, refs = new Set<string>()): Set<string> {
  if (Array.isArray(value)) for (const item of value) collectRefs(item, refs);
  else if (object(value)) {
    for (const [key, child] of Object.entries(value as JsonObject)) {
      if (key === "$ref" && typeof child === "string") refs.add(child);
      else collectRefs(child, refs);
    }
  }
  return refs;
}

export function buildSchemaUsageGraph(document: JsonObject): Map<string, Usage[]> {
  const direct = new Map<string, Usage[]>();
  const add = (ref: string, usage: Usage) => {
    const name = schemaName(ref);
    if (name) direct.set(name, [...(direct.get(name) ?? []), usage]);
  };
  const paths = { ...(object(document.paths) ?? {}), ...(object(document["x-ms-paths"]) ?? {}) };
  for (const [route, pathItem] of Object.entries(paths)) {
    for (const [method, operationValue] of Object.entries(object(pathItem) ?? {})) {
      if (!HTTP_METHODS.has(method)) continue;
      const operation = object(operationValue) ?? {};
      const base = {
        method: method.toUpperCase(),
        route: normalizeRoute(route),
        operationId: typeof operation.operationId === "string" ? operation.operationId : undefined,
      };
      for (const parameter of (operation.parameters as unknown[]) ?? []) {
        const parameterObject = object(parameter) ?? {};
        for (const ref of collectRefs(parameterObject.schema ?? parameterObject)) {
          add(ref, { ...base, direction: "request" });
        }
      }
      for (const ref of collectRefs(operation.requestBody)) {
        add(ref, { ...base, direction: "request" });
      }
      for (const [statusCode, response] of Object.entries(object(operation.responses) ?? {})) {
        for (const ref of collectRefs(response)) {
          add(ref, { ...base, direction: "response", statusCode });
        }
      }
    }
  }
  const schemas = {
    ...(object(document.definitions) ?? {}),
    ...(object(object(document.components)?.schemas) ?? {}),
  };
  let changed = true;
  while (changed) {
    changed = false;
    for (const [name, schema] of Object.entries(schemas)) {
      for (const ref of collectRefs(schema)) {
        const referencedName = schemaName(ref);
        if (!referencedName) continue;
        const usages = direct.get(name) ?? [];
        const existing = direct.get(referencedName) ?? [];
        const additions = usages.filter(
          (usage) =>
            !existing.some((candidate) => JSON.stringify(candidate) === JSON.stringify(usage)),
        );
        if (additions.length) {
          direct.set(referencedName, [...existing, ...additions]);
          changed = true;
        }
      }
    }
  }
  return direct;
}

function inferDirection(rule: string): "request" | "response" | undefined {
  if (/Response|Header/.test(rule)) return "response";
  if (/Parameter|Request|Readonly/.test(rule)) return "request";
  return undefined;
}

export async function resolveOadTargets(
  finding: OadFinding,
  checkout: string,
): Promise<CanonicalTarget[]> {
  const comparisonPath = finding.comparison?.newPath ?? finding.comparison?.oldPath;
  if (!comparisonPath) {
    return [{ phase: finding.phase, evidence: ["No compared Swagger path in OAD log"] }];
  }
  const relativePath = comparisonPath.replace(/^.*?(specification[\\/])/, "specification/");
  const filePath = resolve(checkout, relativePath);
  const document = JSON.parse(await readFile(filePath, "utf8")) as JsonObject;
  const segments = jsonPathSegments(finding.newJsonPath ?? finding.oldJsonPath);
  const referenced = getAtPath(document, segments);
  const ref =
    typeof object(referenced)?.$ref === "string" ? String(object(referenced)?.$ref) : undefined;
  const definitionIndex = segments.findIndex(
    (segment) => segment === "definitions" || segment === "schemas",
  );
  const schema = ref
    ? schemaName(ref)
    : definitionIndex >= 0
      ? segments[definitionIndex + 1]
      : undefined;
  const propertyIndex = segments.indexOf("properties");
  const propertyPath =
    propertyIndex >= 0
      ? segments
          .slice(propertyIndex + 1)
          .filter((segment) => segment !== "properties" && segment !== "schema")
      : undefined;
  const pathIndex = segments.findIndex(
    (segment) => segment === "paths" || segment === "x-ms-paths",
  );
  const directRoute = pathIndex >= 0 ? segments[pathIndex + 1] : undefined;
  const directMethodSegment = pathIndex >= 0 ? segments[pathIndex + 2]?.toLowerCase() : undefined;
  const directMethod =
    directMethodSegment && HTTP_METHODS.has(directMethodSegment)
      ? directMethodSegment.toUpperCase()
      : undefined;
  const usage = schema ? (buildSchemaUsageGraph(document).get(schema) ?? []) : [];
  const base: CanonicalTarget = {
    spec: normalize(relativePath),
    project: relativePath.split("/").slice(0, 3).join("/"),
    phase: finding.phase,
    baseVersion: finding.comparison?.oldVersion,
    headVersion: finding.comparison?.newVersion,
    direction: inferDirection(finding.rule),
    propertyPath,
    schema,
    declaration: schema,
    evidence: [
      `OAD rule ${finding.rule}`,
      `JSON path ${finding.newJsonPath ?? finding.oldJsonPath ?? "<missing>"}`,
      ref ? `Resolved reference ${ref}` : "No terminal reference",
    ],
  };
  if (directRoute && directMethod) {
    return [{ ...base, route: normalizeRoute(directRoute), method: directMethod }];
  }
  if (directRoute && pathIndex === segments.length - 2) {
    const pathItem = object(referenced);
    const operations = Object.keys(pathItem ?? {}).filter((key) =>
      HTTP_METHODS.has(key.toLowerCase()),
    );
    if (operations.length > 0) {
      return operations.map((method) => ({
        ...base,
        route: normalizeRoute(directRoute),
        method: method.toUpperCase(),
        operationId:
          typeof object(pathItem?.[method])?.operationId === "string"
            ? String(object(pathItem?.[method])?.operationId)
            : undefined,
        evidence: [...base.evidence, `Expanded path item to ${method.toUpperCase()} operation`],
      }));
    }
  }
  if (usage.length > 0) {
    return usage.map((item) => ({
      ...base,
      ...item,
      evidence: [...base.evidence, `Expanded shared schema ${schema} to operation usage`],
    }));
  }
  return [{ ...base, evidence: [...base.evidence, `Document ${basename(filePath)}`] }];
}
