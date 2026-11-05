import type { Program } from "@typespec/compiler";
import type { ResolvedResource } from "@azure-tools/typespec-azure-resource-manager";
import { describe, expect, it } from "vitest";
import {
  applyDuplicateResourceErrorAnalysis,
  applyNameClashAnalysis,
  collectRows,
  getDuplicateResourceErrorGroups,
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
      duplicateResourceError: false,
      duplicateResourceErrorAnalysis: "",
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

  it("groups duplicate resource errors by normalized instance path", () => {
    const row = (resourceName: string, resourceInstancePath: string): ResourceRow => ({
      resourceKey: `${resourceName}|${resourceInstancePath}`,
      resourceType: "Microsoft.Example/widgets",
      resourceInstancePath,
      resourceName,
      resourceDefinition: "",
      bicepResource: false,
      readOperation: "",
      createOrUpdateOperation: "",
      nameClash: false,
      nameClashAnalysis: "",
      duplicateResourceError: false,
      duplicateResourceErrorAnalysis: "",
    });
    const rows = [
      row(
        "ZuluWidget",
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Example/widgets/{widgetName}",
      ),
      row(
        "AlphaWidget",
        "/SUBSCRIPTIONS/{sub}/RESOURCEGROUPS/{group}/PROVIDERS/microsoft.example/WIDGETS/{name}",
      ),
      row("SameName", "/providers/Microsoft.Example/same/{first}"),
      row("SameName", "/PROVIDERS/microsoft.example/SAME/{second}"),
    ];

    applyDuplicateResourceErrorAnalysis(rows);

    expect(rows.slice(0, 2).every((item) => item.duplicateResourceError)).toBe(true);
    expect(rows[0].duplicateResourceErrorAnalysis).toBe(
      "duplicate ARM resource instance path: /subscriptions/{}/resourcegroups/{}/providers/microsoft.example/widgets/{}; resource names: AlphaWidget; ZuluWidget",
    );
    expect(rows[1].duplicateResourceErrorAnalysis).toBe(rows[0].duplicateResourceErrorAnalysis);
    expect(rows.slice(2).every((item) => !item.duplicateResourceError)).toBe(true);
    expect(rows.slice(2).every((item) => item.duplicateResourceErrorAnalysis === "")).toBe(true);
  });

  it("produces deterministic duplicate resource analysis regardless of input order", () => {
    const rows = ["Beta", "Alpha"].map((resourceName): ResourceRow => ({
      resourceKey: resourceName,
      resourceType: "Microsoft.Example/widgets",
      resourceInstancePath:
        resourceName === "Alpha"
          ? "/providers/Microsoft.Example/widgets/{widgetName}"
          : "/PROVIDERS/microsoft.example/WIDGETS/{name}",
      resourceName,
      resourceDefinition: "",
      bicepResource: false,
      readOperation: "",
      createOrUpdateOperation: "",
      nameClash: false,
      nameClashAnalysis: "",
      duplicateResourceError: false,
      duplicateResourceErrorAnalysis: "",
    }));
    const reversed = structuredClone(rows).reverse();

    applyDuplicateResourceErrorAnalysis(rows);
    applyDuplicateResourceErrorAnalysis(reversed);

    expect(rows.map((row) => row.duplicateResourceErrorAnalysis).sort()).toEqual(
      reversed.map((row) => row.duplicateResourceErrorAnalysis).sort(),
    );
  });

  it("builds ordered duplicate groups with definition and operation fallback links", () => {
    const row = (
      resourceName: string,
      resourceType: string,
      resourceDefinition: string,
      readOperation: string,
      createOrUpdateOperation = "",
    ): ResourceRow => ({
      resourceKey: resourceName,
      resourceType,
      resourceInstancePath: "/PROVIDERS/Microsoft.Example/widgets/{name}",
      resourceName,
      resourceDefinition,
      bicepResource: false,
      readOperation,
      createOrUpdateOperation,
      nameClash: false,
      nameClashAnalysis: "",
      duplicateResourceError: true,
      duplicateResourceErrorAnalysis: "duplicate",
    });
    const rows = [
      row("Zulu", "Microsoft.Example/zulus", "", "", "https://example.test/zulu-create"),
      row(
        "Alpha",
        "Microsoft.Example/alphas",
        "https://example.test/alpha-definition",
        "https://example.test/alpha-read",
      ),
      row("Beta", "Microsoft.Example/betas", "", "https://example.test/beta-read"),
    ];

    expect(getDuplicateResourceErrorGroups(rows)).toEqual([
      {
        normalizedInstancePath: "/providers/microsoft.example/widgets/{}",
        resources: [
          {
            resourceName: "Alpha",
            resourceType: "Microsoft.Example/alphas",
            sourceUrl: "https://example.test/alpha-definition",
          },
          {
            resourceName: "Beta",
            resourceType: "Microsoft.Example/betas",
            sourceUrl: "https://example.test/beta-read",
          },
          {
            resourceName: "Zulu",
            resourceType: "Microsoft.Example/zulus",
            sourceUrl: "https://example.test/zulu-create",
          },
        ],
      },
    ]);
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
      "microsoft.example/alphas|/widgets/{},Microsoft.Example/alphas,/widgets/{Alpha},Alpha,,false,,,false,,true,duplicate ARM resource instance path: /widgets/{}; resource names: Alpha; Zulu",
      "microsoft.example/zulus|/widgets/{},Microsoft.Example/zulus,/widgets/{Zulu},Zulu,,false,,,false,,true,duplicate ARM resource instance path: /widgets/{}; resource names: Alpha; Zulu",
    ]);
    expect(operationsCsv(rows.operations).split("\n").slice(1, 3)).toEqual([
      "get|/widgets/{},readAlpha,get,/widgets/{Alpha},read,,microsoft.example/alphas|/widgets/{},Microsoft.Example/alphas,/widgets/{Alpha},Alpha",
      "get|/widgets/{},readZulu,get,/widgets/{Zulu},read,,microsoft.example/zulus|/widgets/{},Microsoft.Example/zulus,/widgets/{Zulu},Zulu",
    ]);
  });
});
