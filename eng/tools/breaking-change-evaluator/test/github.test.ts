import { describe, expect, it } from "vitest";
import {
  logsProveRunAssociation,
  parsePrReference,
  selectLatestCompletedRun,
} from "../src/github.ts";

describe("GitHub qualification helpers", () => {
  it("accepts only supported PR reference shapes", () => {
    expect(parsePrReference("Azure/azure-rest-api-specs#123")).toEqual({
      owner: "Azure",
      repo: "azure-rest-api-specs",
      number: 123,
    });
    expect(parsePrReference("https://github.com/Azure/azure-rest-api-specs-pr/pull/456")).toEqual({
      owner: "Azure",
      repo: "azure-rest-api-specs-pr",
      number: 456,
    });
    expect(() => parsePrReference("not-a-pr")).toThrow("Invalid pull request reference");
  });

  it("selects the latest completed run for the exact head", () => {
    const selected = selectLatestCompletedRun(
      [
        {
          name: "phase",
          head_sha: "head",
          status: "completed",
          updated_at: "2026-01-01T00:00:00Z",
          event: "pull_request",
          pull_requests: [{ number: 123, base: { sha: "base" } }],
          id: 1,
        },
        {
          name: "phase",
          head_sha: "head",
          status: "queued",
          updated_at: "2026-03-01T00:00:00Z",
          event: "pull_request",
          pull_requests: [{ number: 123, base: { sha: "base" } }],
          id: 2,
        },
        {
          name: "phase",
          head_sha: "other",
          status: "completed",
          updated_at: "2026-04-01T00:00:00Z",
          event: "pull_request",
          pull_requests: [{ number: 123, base: { sha: "base" } }],
          id: 3,
        },
        {
          name: "phase",
          head_sha: "head",
          status: "completed",
          updated_at: "2026-02-01T00:00:00Z",
          event: "pull_request",
          pull_requests: [{ number: 123, base: { sha: "base" } }],
          id: 4,
        },
      ],
      "phase",
      "head",
      123,
      "base",
    );
    expect(selected.hasExactHeadRun).toBe(true);
    expect(selected.run?.id).toBe(4);
  });

  it("rejects a same-head run for another PR or a previous base", () => {
    const selected = selectLatestCompletedRun(
      [
        {
          name: "phase",
          head_sha: "shared-head",
          status: "completed",
          updated_at: "2026-02-01T00:00:00Z",
          event: "pull_request",
          pull_requests: [{ number: 999, base: { sha: "current-base" } }],
          id: 1,
        },
        {
          name: "phase",
          head_sha: "shared-head",
          status: "completed",
          updated_at: "2026-03-01T00:00:00Z",
          event: "pull_request",
          pull_requests: [{ number: 123, base: { sha: "previous-base" } }],
          id: 2,
        },
      ],
      "phase",
      "shared-head",
      123,
      "current-base",
    );
    expect(selected.hasExactHeadRun).toBe(true);
    expect(selected.hasAssociatedRun).toBe(false);
    expect(selected.run).toBeUndefined();
  });

  it("accepts empty API association metadata only when logs prove the PR and revisions", () => {
    const selected = selectLatestCompletedRun(
      [
        {
          name: "phase",
          head_sha: "a".repeat(40),
          status: "completed",
          updated_at: "2026-02-01T00:00:00Z",
          event: "pull_request",
          pull_requests: [],
          id: 1,
        },
      ],
      "phase",
      "a".repeat(40),
      46675,
      "b".repeat(40),
    );
    const logs = [
      "git checkout refs/remotes/pull/46675/merge",
      `HEAD is now at 1234567 Merge ${"a".repeat(40)} into ${"b".repeat(40)}`,
    ].join("\n");

    expect(selected.run?.id).toBe(1);
    expect(selected.requiresLogAssociation).toBe(true);
    expect(
      logsProveRunAssociation(
        logs,
        { owner: "Azure", repo: "azure-rest-api-specs", number: 46675 },
        "a".repeat(40),
        "b".repeat(40),
      ),
    ).toBe(true);
  });

  it("rejects fallback logs proving a different PR", () => {
    const logs = [
      '--pr-number "46676"',
      `HEAD is now at 1234567 Merge ${"a".repeat(40)} into ${"b".repeat(40)}`,
    ].join("\n");

    expect(
      logsProveRunAssociation(
        logs,
        { owner: "Azure", repo: "azure-rest-api-specs", number: 46675 },
        "a".repeat(40),
        "b".repeat(40),
      ),
    ).toBe(false);
  });

  it("rejects fallback logs proving a stale base revision", () => {
    const logs = [
      "https://github.com/Azure/azure-rest-api-specs/pull/46675",
      `HEAD is now at 1234567 Merge ${"a".repeat(40)} into ${"c".repeat(40)}`,
    ].join("\n");

    expect(
      logsProveRunAssociation(
        logs,
        { owner: "Azure", repo: "azure-rest-api-specs", number: 46675 },
        "a".repeat(40),
        "b".repeat(40),
      ),
    ).toBe(false);
  });
});
