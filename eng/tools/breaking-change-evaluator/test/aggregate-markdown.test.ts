import { describe, expect, it } from "vitest";
import { renderAggregateCount, renderAggregateEvidence } from "../scripts/aggregate-markdown.mjs";

describe("aggregate Markdown", () => {
  it("links aggregate counts to contributing PR evidence", () => {
    const records = [
      {
        number: 45096,
        report: "prs/45096/report.md",
        rollup: {
          byPhase: {
            A: {
              exact: 5,
              typeSpecOnly: 0,
            },
          },
        },
      },
    ];

    expect(renderAggregateCount(5, "A", "exact")).toBe("[5](#phase-a-exact-evidence)");
    expect(renderAggregateCount(0, "A", "typeSpecOnly")).toBe("0");
    expect(renderAggregateEvidence(records).join("\n")).toContain(
      "[review findings](prs/45096/report.md#finding-review-correlations)",
    );
  });

  it("keeps phase and category dimensions separate", () => {
    const records = [
      {
        number: 1,
        report: "prs/1/report.md",
        rollup: {
          byPhase: {
            A: { missedEquivalent: 2, intentionalSwaggerOnly: 1 },
            B: { typeSpecOnly: 3 },
          },
        },
      },
    ];
    const markdown = renderAggregateEvidence(records).join("\n");

    expect(markdown).toContain('id="phase-a-missed-equivalent-evidence"');
    expect(markdown).toContain('id="phase-a-intentional-swagger-only-evidence"');
    expect(markdown).toContain('id="phase-b-type-spec-only-evidence"');
    expect(markdown).toContain("prs/1/report.md#finding-review-intentional");
  });
});
