import { describe, expect, it } from "vitest";
import { matchFindings } from "../src/matcher.ts";
import { computeRollup } from "../src/report.ts";
import type { CanonicalTarget, OadFinding, TypeSpecFinding } from "../src/types.ts";

const oad: OadFinding = {
  occurrenceId: "oad-1",
  phase: "B",
  id: "1",
  rule: "RemovedProperty",
  severity: "Error",
  message: "removed",
  evidence: "{}",
};

function tsp(id: string, route: string, element = "name"): TypeSpecFinding {
  return {
    occurrenceId: id,
    project: "specification/foo/Foo",
    kind: "ResponsePropertyRemoved",
    rule: "RemovedResponseProperty",
    phase: "cross-version",
    severity: "error",
    message: "removed",
    operation: { method: "GET", path: route },
    element,
    component: "Widget",
    statusCode: "200",
    versionPair: { baseVersion: "2024-01-01", headVersion: "2025-01-01" },
  };
}

function requestTsp(id: string, route: string): TypeSpecFinding {
  return {
    ...tsp(id, route),
    kind: "RequestPropertyRemoved",
    rule: "RemovedRequestProperty",
  };
}

const target: CanonicalTarget = {
  phase: "B",
  method: "GET",
  route: "/widgets/{}",
  direction: "response",
  statusCode: "200",
  schema: "Widget",
  propertyPath: ["name"],
  baseVersion: "2024-01-01",
  headVersion: "2025-01-01",
  evidence: [],
};

describe("finding matching", () => {
  it("uses canonical wire identity instead of the leaf name alone", () => {
    const matches = matchFindings([oad], new Map([["oad-1", [target]]]), [
      tsp("correct", "/widgets/{name}"),
      tsp("unrelated", "/unrelated"),
    ]);
    expect(matches[0].category).toBe("exact");
    expect(matches[0].selectedTypeSpecOccurrenceIds).toEqual(["correct"]);
    expect(
      matches[0].candidates.find((candidate) => candidate.typeSpecOccurrenceId === "unrelated")
        ?.rejectionReasons,
    ).toContain("normalized route differs");
  });

  it("matches an AddedPath operation exactly by unique normalized method and route", () => {
    const addedPath: OadFinding = {
      ...oad,
      rule: "AddedPath",
      id: "AddedPath",
      phase: "A",
    };
    const operationAdded: TypeSpecFinding = {
      occurrenceId: "operation-added",
      project: "specification/security/Security",
      kind: "OperationAdded",
      rule: "OperationAdded",
      phase: "same-version",
      severity: "error",
      message: "Operation added",
      operation: {
        method: "GET",
        path: "/{scopeName}/providers/Microsoft.Security/batchPricings",
      },
      versionPair: { baseVersion: "", headVersion: "" },
    };
    const operationTarget: CanonicalTarget = {
      phase: "A",
      method: "GET",
      route: "/{}/providers/microsoft.security/batchpricings",
      evidence: ["Expanded path item to GET operation"],
    };

    const matches = matchFindings([addedPath], new Map([["oad-1", [operationTarget]]]), [
      operationAdded,
    ]);

    expect(matches[0].category).toBe("exact");
    expect(matches[0].selectedTypeSpecOccurrenceIds).toEqual(["operation-added"]);
  });

  it("marks a unique high-scoring non-exact candidate for review", () => {
    const probableTarget = { ...target, propertyPath: ["properties", "renamed"] };
    const matches = matchFindings([oad], new Map([["oad-1", [probableTarget]]]), [
      tsp("probable", "/widgets/{name}", "name"),
    ]);
    expect(matches[0]).toMatchObject({
      category: "probable-review",
      reviewRequired: true,
      selectedTypeSpecOccurrenceIds: ["probable"],
    });
    expect(matches[0].candidates[0].score).toBeGreaterThanOrEqual(9);
  });

  it("normalizes structural TypeSpec property wrappers for probable matching", () => {
    const addedOptional: OadFinding = {
      ...oad,
      occurrenceId: "oad-property",
      phase: "A",
      rule: "AddedOptionalProperty",
    };
    const targets = new Map([
      [
        addedOptional.occurrenceId,
        [
          {
            phase: "A" as const,
            method: "PATCH",
            route: "/widgets/{}",
            direction: "request" as const,
            propertyPath: ["crossPoolScaling"],
            schema: "WidgetPatchProperties",
            baseVersion: "2026-01-01",
            headVersion: "2026-01-01",
            evidence: [],
          },
        ],
      ],
    ]);
    const finding: TypeSpecFinding = {
      ...requestTsp("tsp-property", "/widgets/{name}"),
      kind: "RequestPropertyAdded",
      phase: "same-version",
      operation: { method: "PATCH", path: "/widgets/{name}" },
      element: "body.properties.properties.crossPoolScaling",
      component: "request",
      versionPair: { baseVersion: "2026-01-01", headVersion: "2026-01-01" },
    };

    const matches = matchFindings([addedOptional], targets, [finding]);
    expect(matches[0].category).toBe("probable-review");
    expect(matches[0].selectedTypeSpecOccurrenceIds).toEqual(["tsp-property"]);
    expect(matches[0].candidates[0].score).toBe(11);
    expect(matches[0].candidates[0].exactIdentity).toEqual(
      expect.arrayContaining(["method", "route", "direction", "property"]),
    );
  });

  it("does not exact-match the same leaf under a different nested property", () => {
    const nestedTarget = { ...target, propertyPath: ["parent", "name"] };
    const matches = matchFindings([oad], new Map([["oad-1", [nestedTarget]]]), [
      tsp("different-parent", "/widgets/{name}", "child.name"),
    ]);
    expect(matches[0].category).toBe("probable-review");
    expect(matches[0].candidates[0].exactIdentity).not.toContain("property");
  });

  it("marks equal best candidates ambiguous without consuming either", () => {
    const findings = [tsp("one", "/one"), tsp("two", "/two")];
    const matches = matchFindings(
      [oad],
      new Map([["oad-1", [{ ...target, method: undefined, route: undefined }]]]),
      findings,
    );
    expect(matches[0].category).toBe("ambiguous");
    expect(matches[0].selectedTypeSpecOccurrenceIds).toEqual([]);
    expect(computeRollup([oad], findings, matches).typeSpecOnly).toBe(2);
  });

  it("supports many OAD occurrences matching one shared TypeSpec finding", () => {
    const second = { ...oad, occurrenceId: "oad-2" };
    const matches = matchFindings(
      [oad, second],
      new Map([
        ["oad-1", [target]],
        ["oad-2", [target]],
      ]),
      [tsp("shared", "/widgets/{name}")],
    );
    expect(matches.map((match) => match.selectedTypeSpecOccurrenceIds)).toEqual([
      ["shared"],
      ["shared"],
    ]);
  });

  it("uses one merged resource finding for every request and response usage", () => {
    const responseFinding: OadFinding = {
      ...oad,
      occurrenceId: "oad-response-property",
      phase: "A",
      rule: "AddedPropertyInResponse",
    };
    const resourceFinding: TypeSpecFinding = {
      ...requestTsp("resource-property", "/widgets/{name}"),
      kind: "ResourcePropertyAdded",
      phase: "same-version",
      operation: { method: "PUT", path: "/widgets/{name}" },
      element: "body.properties.properties.crossPoolScaling",
      component: "request",
      versionPair: { baseVersion: "2026-01-01", headVersion: "2026-01-01" },
    };
    const responseTargets: CanonicalTarget[] = [
      {
        phase: "A",
        method: "GET",
        route: "/widgets/{}",
        direction: "response",
        statusCode: "200",
        propertyPath: ["crossPoolScaling"],
        baseVersion: "2026-01-01",
        headVersion: "2026-01-01",
        evidence: [],
      },
      {
        phase: "A",
        method: "PATCH",
        route: "/widgets/{}",
        direction: "response",
        statusCode: "202",
        propertyPath: ["crossPoolScaling"],
        baseVersion: "2026-01-01",
        headVersion: "2026-01-01",
        evidence: [],
      },
    ];

    const matches = matchFindings(
      [responseFinding],
      new Map([[responseFinding.occurrenceId, responseTargets]]),
      [resourceFinding],
    );

    expect(matches[0]).toMatchObject({
      category: "probable-review",
      reviewRequired: true,
      selectedTypeSpecOccurrenceIds: ["resource-property"],
    });
    expect(matches[0].candidates).toHaveLength(2);
    expect(matches[0].candidates.every((candidate) => candidate.score === 9)).toBe(true);
    expect(
      matches[0].candidates.every((candidate) => candidate.rejectionReasons.length === 0),
    ).toBe(true);
  });

  it("supports directional one-to-many exact matches", () => {
    const matches = matchFindings(
      [oad],
      new Map([
        [
          "oad-1",
          [
            { ...target, direction: "request" },
            { ...target, direction: "response" },
          ],
        ],
      ]),
      [requestTsp("request", "/widgets/{name}"), tsp("response", "/widgets/{name}")],
    );
    expect(matches[0].category).toBe("exact");
    expect(matches[0].selectedTypeSpecOccurrenceIds).toEqual(["request", "response"]);
    expect(matches[0].targets).toHaveLength(2);
  });

  it("does not classify a partially resolved shared-schema expansion as exact", () => {
    const matches = matchFindings(
      [oad],
      new Map([["oad-1", [target, { ...target, route: "/widgets/{}/children/{}" }]]]),
      [tsp("only-parent-use", "/widgets/{name}")],
    );
    expect(matches[0].category).toBe("missed-equivalent");
    expect(matches[0].selectedTypeSpecOccurrenceIds).toEqual([]);
  });

  it("does not consume a unique target when another required target is ambiguous", () => {
    const findings = [
      tsp("unique", "/widgets/{name}"),
      tsp("ambiguous-a", "/widgets/{name}/children/{child}"),
      tsp("ambiguous-b", "/widgets/{name}/children/{child}"),
    ];
    const matches = matchFindings(
      [oad],
      new Map([["oad-1", [target, { ...target, route: "/widgets/{}/children/{}" }]]]),
      findings,
    );
    expect(matches[0].category).toBe("ambiguous");
    expect(matches[0].selectedTypeSpecOccurrenceIds).toEqual([]);
    expect(computeRollup([oad], findings, matches).typeSpecOnly).toBe(3);
  });

  it("separates intentional gaps from missed equivalents", () => {
    const intentional: OadFinding = {
      ...oad,
      occurrenceId: "intentional",
      rule: "NoVersionChange",
    };
    const missed: OadFinding = { ...oad, occurrenceId: "missed" };
    const matches = matchFindings(
      [intentional, missed],
      new Map([
        ["intentional", [target]],
        ["missed", [target]],
      ]),
      [],
    );
    expect(matches.map((match) => match.category)).toEqual([
      "intentional-swagger-only",
      "missed-equivalent",
    ]);
  });
});
