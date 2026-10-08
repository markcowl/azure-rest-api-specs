import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  buildSchemaUsageGraph,
  jsonPathSegments,
  normalizeRoute,
  resolveOadTargets,
} from "../src/swagger-target.ts";
import type { OadFinding } from "../src/types.ts";

const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(
    temporaryDirectories
      .splice(0)
      .map((directory) => rm(directory, { recursive: true, force: true })),
  );
});

describe("Swagger target resolution", () => {
  it("normalizes path parameter names", () => {
    expect(normalizeRoute("/widgets/{widgetName}/children/{childId}/")).toBe(
      "/widgets/{}/children/{}",
    );
  });

  it("parses JSON Pointer and JSONPath evidence", () => {
    expect(jsonPathSegments("/definitions/Widget/properties/name")).toEqual([
      "definitions",
      "Widget",
      "properties",
      "name",
    ]);
    expect(jsonPathSegments("$.definitions.Widget.properties.name")).toEqual([
      "definitions",
      "Widget",
      "properties",
      "name",
    ]);
    expect(
      jsonPathSegments("$.paths['/{scopeId}/providers/Microsoft.Security/batchPricings']"),
    ).toEqual(["paths", "/{scopeId}/providers/Microsoft.Security/batchPricings"]);
  });

  it("preserves parent context in nested property paths", async () => {
    const checkout = await mkdtemp(join(tmpdir(), "oad-nested-property-"));
    temporaryDirectories.push(checkout);
    const relativePath = "specification/widgets/data-plane/stable/2025-01-01/widgets.json";
    const swaggerPath = join(checkout, relativePath);
    await mkdir(join(swaggerPath, ".."), { recursive: true });
    await writeFile(
      swaggerPath,
      JSON.stringify({
        swagger: "2.0",
        definitions: {
          Widget: {
            properties: {
              parent: { properties: { name: { type: "string" } } },
            },
          },
        },
      }),
    );
    const finding: OadFinding = {
      occurrenceId: "oad-nested",
      phase: "B",
      id: "RemovedProperty",
      rule: "RemovedProperty",
      severity: "Error",
      message: "Property removed",
      oldJsonPath: "$.definitions.Widget.properties.parent.properties.name",
      comparison: { phase: "B", oldPath: relativePath, newPath: relativePath },
      evidence: "{}",
    };

    await expect(resolveOadTargets(finding, checkout)).resolves.toEqual([
      expect.objectContaining({ propertyPath: ["parent", "name"] }),
    ]);
  });

  it("expands a path-item finding to every HTTP operation", async () => {
    const checkout = await mkdtemp(join(tmpdir(), "oad-path-item-"));
    temporaryDirectories.push(checkout);
    const relativePath = "specification/security/resource-manager/stable/2025-01-01/security.json";
    const swaggerPath = join(checkout, relativePath);
    await mkdir(join(swaggerPath, ".."), { recursive: true });
    await writeFile(
      swaggerPath,
      JSON.stringify({
        swagger: "2.0",
        paths: {
          "/{scopeId}/providers/Microsoft.Security/batchPricings": {
            get: { operationId: "Pricings_List", responses: { "200": {} } },
            post: { operationId: "Pricings_Create", responses: { "202": {} } },
            parameters: [],
          },
        },
      }),
    );
    const finding: OadFinding = {
      occurrenceId: "oad-added-path",
      phase: "A",
      id: "AddedPath",
      rule: "AddedPath",
      severity: "Error",
      message: "Path added",
      newJsonPath: "$.paths['/{scopeId}/providers/Microsoft.Security/batchPricings']",
      comparison: {
        phase: "A",
        oldPath: relativePath,
        newPath: relativePath,
      },
      evidence: "{}",
    };

    await expect(resolveOadTargets(finding, checkout)).resolves.toEqual([
      expect.objectContaining({
        method: "GET",
        route: "/{}/providers/microsoft.security/batchpricings",
        operationId: "Pricings_List",
      }),
      expect.objectContaining({
        method: "POST",
        route: "/{}/providers/microsoft.security/batchpricings",
        operationId: "Pricings_Create",
      }),
    ]);
  });

  it("expands shared and allOf schemas to every directional operation usage", () => {
    const graph = buildSchemaUsageGraph({
      swagger: "2.0",
      paths: {
        "/widgets/{name}": {
          put: {
            operationId: "Widgets_Create",
            parameters: [{ in: "body", schema: { $ref: "#/definitions/Widget" } }],
            responses: {
              "200": { schema: { $ref: "#/definitions/Widget" } },
              default: { schema: { $ref: "#/definitions/Error" } },
            },
          },
        },
        "/unrelated": {
          get: {
            operationId: "Unrelated_Get",
            responses: { "200": { schema: { $ref: "#/definitions/Unrelated" } } },
          },
        },
      },
      definitions: {
        Widget: { allOf: [{ $ref: "#/definitions/Shared" }] },
        Shared: { properties: { name: { type: "string" } } },
        Error: { type: "object" },
        Unrelated: { properties: { name: { type: "string" } } },
      },
    });
    expect(graph.get("Shared")).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ direction: "request", operationId: "Widgets_Create" }),
        expect.objectContaining({
          direction: "response",
          operationId: "Widgets_Create",
          statusCode: "200",
        }),
      ]),
    );
    expect(graph.get("Shared")).not.toEqual(
      expect.arrayContaining([expect.objectContaining({ operationId: "Unrelated_Get" })]),
    );
  });
});
