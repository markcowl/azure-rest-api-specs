import type { Program } from "@typespec/compiler";
import type { ResolvedResource } from "@azure-tools/typespec-azure-resource-manager";
import { describe, expect, it } from "vitest";
import {
  applyNameClashAnalysis,
  collectRows,
  getOperationKey,
  getResourceKey,
  normalizeArmPath,
  operationsCsv,
  resourcesCsv,
  toCsv,
} from "../src/report.ts";
import type { ResourceRow } from "../src/types.ts";

describe("report canonicalization", () => {
  it("normalizes literal ARM segments and parameter names", () => {
    expect(
      normalizeArmPath(
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Example/widgets/{widgetName}",
      ),
    ).toBe("/subscriptions/{}/resourcegroups/{}/providers/microsoft.example/widgets/{}");
    expect(
      getResourceKey(
        "Microsoft.Example/Widgets",
        "/subscriptions/{sub}/providers/Microsoft.Example/widgets/{name}",
      ),
    ).toBe("microsoft.example/widgets|/subscriptions/{}/providers/microsoft.example/widgets/{}");
    expect(getOperationKey("GET", "/subscriptions/{subscriptionId}/widgets/{name}")).toBe(
      "get|/subscriptions/{}/widgets/{}",
    );
  });

  it("quotes CSV fields using RFC-compatible escaping", () => {
    expect(toCsv(["value"], [{ value: 'one,"two"\nthree' }])).toBe('value\n"one,""two""\nthree"\n');
  });

  it("separates case-only duplicates from genuine name clashes", () => {
    const row = (resourceKey: string): ResourceRow => ({
      resourceKey,
      resourceType: "Microsoft.Example/widgets",
      resourceInstancePath: "/widgets/{name}",
      resourceName: "Widget",
      resourceDefinition: "",
      bicepResource: false,
      readOperation: "",
      createOrUpdateOperation: "",
      nameClash: false,
      nameClashAnalysis: "",
    });
    const caseOnly = [
      row("MICROSOFT.EXAMPLE/WIDGETS|/WIDGETS/{}"),
      row("microsoft.example/widgets|/widgets/{}"),
    ];
    applyNameClashAnalysis(caseOnly);
    expect(caseOnly.every((item) => item.nameClashAnalysis.startsWith("case-only"))).toBe(true);

    const genuine = [
      row("microsoft.example/widgets|/widgets/{}"),
      row("microsoft.other/widgets|/widgets/{}"),
    ];
    applyNameClashAnalysis(genuine);
    expect(genuine.every((item) => item.nameClashAnalysis.startsWith("genuine"))).toBe(true);
  });

  it("sorts resource and operation output deterministically", () => {
    const resource = (
      resourceName: string,
      resourceType: string,
      operationName: string,
      verb: string,
    ) =>
      ({
        resourceName,
        resourceType: { provider: "Microsoft.Example", types: [resourceType] },
        resourceInstancePath: `/widgets/{${resourceName}}`,
        operations: {
          lifecycle: {
            read: [
              {
                name: operationName,
                path: `/widgets/{${resourceName}}`,
                httpOperation: { verb },
              },
            ],
          },
          lists: [],
          actions: [],
        },
        associatedOperations: [],
      }) as unknown as ResolvedResource;
    const rows = collectRows(
      {} as Program,
      [
        resource("Zulu", "zulus", "readZulu", "get"),
        resource("Alpha", "alphas", "readAlpha", "get"),
      ],
      "C:\\repo",
      "abc",
    );

    expect(rows.resources.map((row) => row.resourceName)).toEqual(["Alpha", "Zulu"]);
    expect(rows.operations.map((row) => row.operationName)).toEqual(["readAlpha", "readZulu"]);
    expect(resourcesCsv(rows.resources).split("\n").slice(1, 3)).toEqual([
      "microsoft.example/alphas|/widgets/{},Microsoft.Example/alphas,/widgets/{Alpha},Alpha,,false,,,false,",
      "microsoft.example/zulus|/widgets/{},Microsoft.Example/zulus,/widgets/{Zulu},Zulu,,false,,,false,",
    ]);
    expect(operationsCsv(rows.operations).split("\n").slice(1, 3)).toEqual([
      "get|/widgets/{},readAlpha,get,/widgets/{Alpha},read,,microsoft.example/alphas|/widgets/{},Microsoft.Example/alphas,/widgets/{Alpha},Alpha",
      "get|/widgets/{},readZulu,get,/widgets/{Zulu},read,,microsoft.example/zulus|/widgets/{},Microsoft.Example/zulus,/widgets/{Zulu},Zulu",
    ]);
  });
});
