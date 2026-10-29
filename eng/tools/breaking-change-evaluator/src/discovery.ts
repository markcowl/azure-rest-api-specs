import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { isTypeSpecInputFile } from "./github.ts";

export interface MergedPullRequestSearchItem {
  number: number;
}

export interface MergedPullRequestDetails {
  number: number;
  title: string;
  html_url: string;
  updated_at: string;
  merged_at: string | null;
  head: { sha: string };
  base: { sha: string; ref: string };
}

export interface PullRequestFile {
  filename: string;
}

export interface MergedPullRequestDiscoveryApi {
  searchMergedPullRequests(
    query: string,
    page: number,
    perPage: number,
  ): Promise<{ totalCount: number; items: MergedPullRequestSearchItem[] }>;
  getPullRequest(number: number): Promise<MergedPullRequestDetails>;
  listPullRequestFiles(number: number): Promise<PullRequestFile[]>;
}

export interface MergedDatasetOptions {
  repository: string;
  baseBranch: string;
  lowerBoundExclusive: string;
  upperBoundInclusive: string;
  retrievedAt: string;
  runId: string;
  datasetId: string;
  generatedAt: string;
  evaluatorCommit: string;
  analyzer: {
    sourceSha: string;
    artifactDigest: string;
  };
}

export interface MergedDatasetRecord {
  number: number;
  title: string;
  url: string;
  stateSource: "merged";
  updatedAt: string;
  mergedAt: string;
  headSha: string;
  baseSha: string;
  changedFiles: string[];
  matchingFiles: string[];
  qualifies: boolean;
  selected: boolean;
  exclusionReason: "no-typespec-service-input" | null;
}

function stableJson(value: unknown): string {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function sha256(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

function parseInstant(value: string, label: string): number {
  const parsed = Date.parse(value);
  if (!Number.isFinite(parsed)) throw new Error(`${label} must be an ISO timestamp`);
  return parsed;
}

export function mergedPullRequestQuery(options: MergedDatasetOptions): string {
  return [
    `repo:${options.repository}`,
    "is:pr",
    "is:merged",
    `base:${options.baseBranch}`,
    `merged:${options.lowerBoundExclusive}..${options.upperBoundInclusive}`,
  ].join(" ");
}

export async function discoverMergedDataset(
  api: MergedPullRequestDiscoveryApi,
  options: MergedDatasetOptions,
): Promise<{ snapshot: Record<string, unknown>; selection: Record<string, unknown> }> {
  const lower = parseInstant(options.lowerBoundExclusive, "lowerBoundExclusive");
  const upper = parseInstant(options.upperBoundInclusive, "upperBoundInclusive");
  if (lower >= upper) throw new Error("Merged PR interval must have a positive duration");
  if (parseInstant(options.retrievedAt, "retrievedAt") < upper) {
    throw new Error("retrievedAt cannot precede the frozen upper bound");
  }

  const query = mergedPullRequestQuery(options);
  const searchItems: MergedPullRequestSearchItem[] = [];
  let expectedTotal: number | undefined;
  for (let page = 1; ; page++) {
    const response = await api.searchMergedPullRequests(query, page, 100);
    expectedTotal ??= response.totalCount;
    if (expectedTotal > 1_000) {
      throw new Error(
        `Merged PR query returned ${expectedTotal} records; split the interval to avoid GitHub's 1,000-result search limit`,
      );
    }
    searchItems.push(...response.items);
    if (response.items.length < 100 || searchItems.length >= expectedTotal) break;
  }
  if (searchItems.length !== expectedTotal) {
    throw new Error(
      `Merged PR query was incomplete: expected ${expectedTotal}, retrieved ${searchItems.length}`,
    );
  }
  if (new Set(searchItems.map((item) => item.number)).size !== searchItems.length) {
    throw new Error("Merged PR query returned duplicate pull requests");
  }

  const records: MergedDatasetRecord[] = [];
  for (const item of searchItems) {
    const pullRequest = await api.getPullRequest(item.number);
    if (!pullRequest.merged_at) {
      throw new Error(`PR #${item.number} is not merged`);
    }
    const mergedAt = parseInstant(pullRequest.merged_at, `PR #${item.number} merged_at`);
    if (mergedAt <= lower || mergedAt > upper) {
      throw new Error(`PR #${item.number} falls outside the frozen merged interval`);
    }
    if (pullRequest.base.ref !== options.baseBranch) {
      throw new Error(
        `PR #${item.number} targets ${pullRequest.base.ref}, not ${options.baseBranch}`,
      );
    }
    const changedFiles = (await api.listPullRequestFiles(item.number))
      .map((file) => file.filename.replaceAll("\\", "/"))
      .sort();
    const matchingFiles = changedFiles.filter(
      (filename) => filename.startsWith("specification/") && isTypeSpecInputFile(filename),
    );
    records.push({
      number: pullRequest.number,
      title: pullRequest.title,
      url: pullRequest.html_url,
      stateSource: "merged",
      updatedAt: pullRequest.updated_at,
      mergedAt: pullRequest.merged_at,
      headSha: pullRequest.head.sha,
      baseSha: pullRequest.base.sha,
      changedFiles,
      matchingFiles,
      qualifies: matchingFiles.length > 0,
      selected: matchingFiles.length > 0,
      exclusionReason: matchingFiles.length > 0 ? null : "no-typespec-service-input",
    });
  }
  records.sort(
    (left, right) => left.mergedAt.localeCompare(right.mergedAt) || left.number - right.number,
  );

  const snapshot = {
    schemaVersion: 1,
    schemaCompatibility: ">=1 <2",
    repository: options.repository,
    retrievedAt: options.retrievedAt,
    queries: [
      {
        name: "merged-after-last-full-dataset",
        expression: query,
        order: "mergedAt ascending, PR number ascending",
        complete: true,
        continuationCursor: null,
      },
    ],
    sourceCount: records.length,
    records,
  };
  const snapshotContent = stableJson(snapshot);
  const selectedCount = records.filter((record) => record.selected).length;
  const selection = {
    schemaVersion: 2,
    schemaCompatibility: ">=2 <3",
    run: {
      id: options.runId,
      datasetId: options.datasetId,
      generatedAt: options.generatedAt,
    },
    repository: options.repository,
    query: {
      snapshot: "query-snapshot.json",
      snapshotDigest: sha256(snapshotContent),
      retrievedAt: options.retrievedAt,
      merged: `state:merged base:${options.baseBranch} merged:>${options.lowerBoundExclusive} merged:<=${options.upperBoundInclusive}`,
      order: "mergedAt ascending, PR number ascending",
    },
    selection: {
      cap: null,
      sourceCount: records.length,
      excludedCount: records.length - selectedCount,
      qualifyingCount: selectedCount,
      selectedCount,
      remainingCount: 0,
      continuationCursor: null,
      pathScope: "specification/",
      filePatterns: ["*.tsp", "tspconfig.yaml"],
      exclusionCounts: {
        "no-typespec-service-input": records.length - selectedCount,
        "after-cap": 0,
      },
    },
    analyzer: options.analyzer,
    evaluatorCommit: options.evaluatorCommit,
    records,
  };
  return { snapshot, selection };
}

export async function writeNewDatasetScaffold(
  outputDirectory: string,
  snapshot: Record<string, unknown>,
  selection: Record<string, unknown>,
  runConfig: Record<string, unknown>,
): Promise<void> {
  const output = resolve(outputDirectory);
  await mkdir(output, { recursive: false });
  await writeFile(join(output, "query-snapshot.json"), stableJson(snapshot));
  await writeFile(join(output, "selection.json"), stableJson(selection));
  await writeFile(join(output, "run-config.json"), stableJson(runConfig));
}
