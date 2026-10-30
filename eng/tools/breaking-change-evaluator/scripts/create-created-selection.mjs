/* oxlint-disable typescript/no-unsafe-argument, typescript/no-unsafe-assignment, typescript/no-unsafe-call, typescript/no-unsafe-member-access, typescript/no-unsafe-return */
import { Octokit } from "@octokit/rest";
import { arch, platform, release } from "node:os";
import { resolve } from "node:path";
import { discoverCreatedDataset, writeNewDatasetScaffold } from "../src/discovery.ts";
import { githubToken } from "../src/github.ts";

function required(name) {
  const index = process.argv.indexOf(name);
  const value = index === -1 ? undefined : process.argv[index + 1];
  if (!value) throw new Error(`Missing ${name}`);
  return value;
}

function optional(name, fallback) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}

const output = resolve(required("--output"));
const repository = optional("--repository", "Azure/azure-rest-api-specs");
const [owner, repo] = repository.split("/");
if (!owner || !repo) throw new Error("--repository must use owner/repo form");
const baseBranch = optional("--base-branch", "main");
const lowerBoundExclusive = required("--lower-bound");
const upperBoundInclusive = required("--upper-bound");
const retrievedAt = optional("--retrieved-at", upperBoundInclusive);
const runId = required("--run-id");
const datasetId = required("--dataset-id");
const generatedAt = optional("--generated-at", retrievedAt);
const analyzerSourceSha = required("--analyzer-sha");
const artifactDigest = required("--artifact-digest");
const evaluatorCommit = required("--evaluator-commit");
const analyzerParentSha = required("--analyzer-parent-sha");
const cacheFormatVersion = Number(required("--cache-format-version"));
const title = required("--title");
const readinessDetails = required("--readiness-details");
const octokit = new Octokit({ auth: githubToken() });

const api = {
  async searchCreatedPullRequests(query, page, perPage) {
    const { data } = await octokit.rest.search.issuesAndPullRequests({
      q: query,
      sort: "created",
      order: "asc",
      page,
      per_page: perPage,
    });
    return {
      totalCount: data.total_count,
      items: data.items.map((item) => ({ number: item.number })),
    };
  },
  async getPullRequest(number) {
    const { data } = await octokit.rest.pulls.get({ owner, repo, pull_number: number });
    return data;
  },
  async listPullRequestFiles(number) {
    return await octokit.paginate(octokit.rest.pulls.listFiles, {
      owner,
      repo,
      pull_number: number,
      per_page: 100,
    });
  },
};

const options = {
  repository,
  baseBranch,
  lowerBoundExclusive,
  upperBoundInclusive,
  retrievedAt,
  runId,
  datasetId,
  generatedAt,
  evaluatorCommit,
  analyzer: {
    sourceSha: analyzerSourceSha,
    artifactDigest,
  },
};
const { snapshot, selection } = await discoverCreatedDataset(api, options);
const runConfig = {
  title,
  analyzer: {
    sourceSha: analyzerSourceSha,
    artifactDigest,
    prototypeParentSha: analyzerParentSha,
    cacheFormatVersion,
    environment: {
      os: `${platform()} ${release()}`,
      architecture: arch(),
      node: process.versions.node,
      pnpm: optional("--pnpm-version", "unknown"),
    },
    readiness: {
      verified: true,
      intrinsicFixVerified: true,
      details: readinessDetails,
    },
  },
};

await writeNewDatasetScaffold(output, snapshot, selection, runConfig);
console.log(
  JSON.stringify({
    output,
    sourceCount: selection.selection.sourceCount,
    selectedCount: selection.selection.selectedCount,
    snapshotDigest: selection.query.snapshotDigest,
  }),
);
