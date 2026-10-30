import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  createdPullRequestQuery,
  discoverCreatedDataset,
  discoverMergedDataset,
  mergedPullRequestQuery,
  writeNewDatasetScaffold,
  type CreatedPullRequestDiscoveryApi,
  type MergedDatasetOptions,
  type MergedPullRequestDiscoveryApi,
} from "../src/discovery.ts";

const temporaryDirectories: string[] = [];
const options: MergedDatasetOptions = {
  repository: "Azure/azure-rest-api-specs",
  baseBranch: "main",
  lowerBoundExclusive: "2026-10-15T03:00:00Z",
  upperBoundInclusive: "2026-10-29T06:30:00Z",
  retrievedAt: "2026-10-29T06:30:00Z",
  runId: "merged-2026-10-15-to-2026-10-29",
  datasetId: "merged-2026-10-15-to-2026-10-29",
  generatedAt: "2026-10-29T06:30:00Z",
  evaluatorCommit: "e".repeat(40),
  analyzer: {
    sourceSha: "a".repeat(40),
    artifactDigest: "d".repeat(64),
  },
};

afterEach(async () => {
  await Promise.all(
    temporaryDirectories
      .splice(0)
      .map((directory) => rm(directory, { recursive: true, force: true })),
  );
});

function api(): MergedPullRequestDiscoveryApi {
  return {
    searchMergedPullRequests(_query, page) {
      return Promise.resolve({
        totalCount: 2,
        items: page === 1 ? [{ number: 2 }, { number: 1 }] : [],
      });
    },
    getPullRequest(number) {
      return Promise.resolve({
        number,
        title: `PR ${number}`,
        html_url: `https://github.com/Azure/azure-rest-api-specs/pull/${number}`,
        updated_at: `2026-10-${15 + number}T04:00:00Z`,
        created_at: `2026-10-${15 + number}T04:00:00Z`,
        merged_at: `2026-10-${15 + number}T04:00:00Z`,
        state: "closed",
        head: { sha: String(number).repeat(40) },
        base: { sha: "b".repeat(40), ref: "main" },
      });
    },
    listPullRequestFiles(number) {
      return Promise.resolve(
        number === 1
          ? [{ filename: "README.md" }, { filename: "specification/foo/Foo/main.tsp" }]
          : [{ filename: "eng/tools/example.ts" }],
      );
    },
  };
}

describe("merged pull request discovery", () => {
  it("creates a complete uncapped deterministic TypeSpec selection", async () => {
    const result = await discoverMergedDataset(api(), options);
    expect(mergedPullRequestQuery(options)).toContain(
      "merged:2026-10-15T03:00:00Z..2026-10-29T06:30:00Z",
    );
    expect(result.selection).toMatchObject({
      selection: {
        cap: null,
        sourceCount: 2,
        selectedCount: 1,
        remainingCount: 0,
        continuationCursor: null,
      },
    });
    expect(
      (result.selection.records as { number: number; selected: boolean }[]).map((record) => [
        record.number,
        record.selected,
      ]),
    ).toEqual([
      [1, true],
      [2, false],
    ]);
  });

  it("rejects incomplete searches beyond GitHub's result limit", async () => {
    const overLimit = api();
    overLimit.searchMergedPullRequests = () =>
      Promise.resolve({
        totalCount: 1_001,
        items: [],
      });
    await expect(discoverMergedDataset(overLimit, options)).rejects.toThrow("split the interval");
  });

  it("rejects records outside the frozen interval", async () => {
    const outOfRange = api();
    outOfRange.getPullRequest = (number) =>
      Promise.resolve({
        number,
        title: `PR ${number}`,
        html_url: `https://github.com/Azure/azure-rest-api-specs/pull/${number}`,
        updated_at: "2026-10-15T03:00:00Z",
        created_at: "2026-10-15T03:00:00Z",
        merged_at: "2026-10-15T03:00:00Z",
        state: "closed",
        head: { sha: "h".repeat(40) },
        base: { sha: "b".repeat(40), ref: "main" },
      });
    await expect(discoverMergedDataset(outOfRange, options)).rejects.toThrow(
      "outside the frozen merged interval",
    );
  });

  it("never overwrites an existing immutable run directory", async () => {
    const parent = await mkdtemp(join(tmpdir(), "merged-discovery-"));
    temporaryDirectories.push(parent);
    const output = join(parent, "new-run");
    await writeNewDatasetScaffold(output, {}, {}, {});
    await expect(writeNewDatasetScaffold(output, {}, {}, {})).rejects.toMatchObject({
      code: "EEXIST",
    });
    await expect(readFile(join(output, "selection.json"), "utf8")).resolves.toBe("{}\n");
  });
});

describe("created pull request discovery", () => {
  function createdApi(): CreatedPullRequestDiscoveryApi {
    const source = api();
    return {
      searchCreatedPullRequests(_query, page) {
        return source.searchMergedPullRequests(_query, page, 100);
      },
      getPullRequest(number) {
        return source.getPullRequest(number).then((pullRequest) => ({
          ...pullRequest,
          merged_at: number === 1 ? null : pullRequest.merged_at,
          state: number === 1 ? "open" : "closed",
        }));
      },
      listPullRequestFiles(number) {
        return source.listPullRequestFiles(number);
      },
    };
  }

  it("creates a complete uncapped deterministic TypeSpec selection by created date", async () => {
    const result = await discoverCreatedDataset(createdApi(), options);
    expect(createdPullRequestQuery(options)).toContain(
      "created:2026-10-15T03:00:00Z..2026-10-29T06:30:00Z",
    );
    expect(result.selection).toMatchObject({
      query: {
        created: "base:main created:>2026-10-15T03:00:00Z created:<=2026-10-29T06:30:00Z",
      },
      selection: {
        cap: null,
        sourceCount: 2,
        selectedCount: 1,
        remainingCount: 0,
        continuationCursor: null,
      },
    });
    expect(
      (
        result.selection.records as {
          number: number;
          stateSource: string;
          selected: boolean;
        }[]
      ).map((record) => [record.number, record.stateSource, record.selected]),
    ).toEqual([
      [1, "open", true],
      [2, "merged", false],
    ]);
  });

  it("rejects created records outside the frozen interval", async () => {
    const outOfRange = createdApi();
    outOfRange.getPullRequest = (number) =>
      Promise.resolve({
        number,
        title: `PR ${number}`,
        html_url: `https://github.com/Azure/azure-rest-api-specs/pull/${number}`,
        created_at: "2026-10-15T03:00:00Z",
        updated_at: "2026-10-15T03:00:00Z",
        merged_at: null,
        state: "open",
        head: { sha: "h".repeat(40) },
        base: { sha: "b".repeat(40), ref: "main" },
      });
    await expect(discoverCreatedDataset(outOfRange, options)).rejects.toThrow(
      "outside the frozen created interval",
    );
  });
});
