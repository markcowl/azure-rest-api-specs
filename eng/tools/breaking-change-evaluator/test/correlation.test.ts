import { oadMessagesRuleMap } from "../../openapi-diff-runner/src/utils/oad-rule-map.ts";
import { describe, expect, it } from "vitest";
import { oadCorrelation } from "../src/correlation.ts";

describe("OAD correlation", () => {
  it("exhaustively maps every OAD rule", () => {
    const oadRules = new Set(oadMessagesRuleMap.map((rule) => rule.code));
    expect(new Set(Object.keys(oadCorrelation))).toEqual(oadRules);
  });

  it("records every unsupported rule as an intentional gap", () => {
    for (const correlation of Object.values(oadCorrelation)) {
      if (correlation.phaseB === "n/a") {
        expect(correlation.intentionalGap).toBeTruthy();
        expect(correlation.diffKinds).toEqual([]);
      }
    }
  });

  it("correlates request and response OAD rules with merged resource findings", () => {
    expect(oadCorrelation.AddedOptionalProperty.diffKinds).toContain("ResourcePropertyAdded");
    expect(oadCorrelation.AddedPropertyInResponse.diffKinds).toContain("ResourcePropertyAdded");
    expect(oadCorrelation.RemovedProperty.diffKinds).toContain("ResourcePropertyRemoved");
    expect(oadCorrelation.RequiredStatusChange.diffKinds).toEqual(
      expect.arrayContaining(["ResourcePropertyMadeOptional", "ResourcePropertyMadeRequired"]),
    );
    expect(oadCorrelation.TypeChanged.diffKinds).toEqual(
      expect.arrayContaining([
        "ResourcePropertyTypeChanged",
        "ResourcePropertyTypeNarrowed",
        "ResourcePropertyTypeWidened",
      ]),
    );
  });
});
