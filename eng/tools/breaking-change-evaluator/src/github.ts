import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { Octokit } from "@octokit/rest";
import { unzipSync } from "fflate";
import { OadEvidenceIncompleteError, parseOadLog, validateJobSummary } from "./oad.ts";
import type {
  OadFinding,
  Phase,
  PrReference,
  Qualification,
  ReasonCode,
  RunEvidence,
} from "./types.ts";

const supportedRepositories = new Set([
  "Azure/azure-rest-api-specs",
  "Azure/azure-rest-api-specs-pr",
]);
const workflowNames: Record<Phase, string> = {
  A: "Swagger BreakingChange - Analyze Code",
  B: "Breaking Change(Cross-Version) - Analyze Code",
};

export interface QualifiedPr {
  reference: PrReference;
  qualification: Qualification;
  headSha: string;
  baseSha: string;
  cloneUrl: string;
  changedTypeSpecFiles: string[];
  oadFindings: OadFinding[];
}

interface WorkflowRunLike {
  id: number;
  name?: string | null;
  head_sha: string;
  status: string | null;
  conclusion?: string | null;
  html_url?: string;
  updated_at: string;
  event?: string;
  pull_requests?:
    | {
        number: number;
        base?: { sha?: string | null } | null;
      }[]
    | null;
}

interface WorkflowArtifactLike {
  id: number;
  name: string;
  expired: boolean;
  updated_at?: string | null;
}

export function selectLatestCompletedRun<T extends WorkflowRunLike>(
  runs: T[],
  name: string,
  headSha: string,
  prNumber: number,
  baseSha: string,
): {
  run?: T;
  hasExactHeadRun: boolean;
  hasAssociatedRun: boolean;
  requiresLogAssociation: boolean;
} {
  const exactRuns = runs.filter(
    (candidate) => candidate.name === name && candidate.head_sha === headSha,
  );
  const associatedRuns = exactRuns.filter(
    (candidate) =>
      candidate.event === "pull_request" &&
      candidate.pull_requests?.some(
        (pullRequest) => pullRequest.number === prNumber && pullRequest.base?.sha === baseSha,
      ),
  );
  const completedAssociatedRun = associatedRuns
    .filter((candidate) => candidate.status === "completed")
    .sort((left, right) => Date.parse(right.updated_at) - Date.parse(left.updated_at))[0];
  const completedFallbackRun = exactRuns
    .filter(
      (candidate) =>
        candidate.event === "pull_request" &&
        candidate.status === "completed" &&
        (!candidate.pull_requests || candidate.pull_requests.length === 0),
    )
    .sort((left, right) => Date.parse(right.updated_at) - Date.parse(left.updated_at))[0];
  return {
    run: completedAssociatedRun ?? completedFallbackRun,
    hasExactHeadRun: exactRuns.length > 0,
    hasAssociatedRun: associatedRuns.length > 0,
    requiresLogAssociation: !completedAssociatedRun && Boolean(completedFallbackRun),
  };
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function logsProveRunAssociation(
  logs: string,
  reference: PrReference,
  headSha: string,
  baseSha: string,
): boolean {
  const prNumber = String(reference.number);
  const repository = `${reference.owner}/${reference.repo}`;
  const provesPr =
    new RegExp(`refs/remotes/pull/${escapeRegExp(prNumber)}/merge(?:\\s|$)`).test(logs) ||
    new RegExp(`--pr-number(?:=|\\s+)["']?${escapeRegExp(prNumber)}["']?(?:\\s|$)`).test(logs) ||
    new RegExp(
      `https://github\\.com/${escapeRegExp(repository)}/pull/${escapeRegExp(prNumber)}(?:[\\s/"']|$)`,
      "i",
    ).test(logs);
  const provesRevisions = new RegExp(
    `HEAD is now at [0-9a-f]{7,40}\\s+Merge ${escapeRegExp(headSha)} into ${escapeRegExp(baseSha)}(?:\\s|$)`,
    "i",
  ).test(logs);
  return provesPr && provesRevisions;
}

export function parsePrReference(value: string): PrReference {
  const match =
    /^(?:https:\/\/github\.com\/)?([^/\s]+)\/([^/#\s]+)(?:\/pull\/|#)(\d+)(?:\/)?$/.exec(
      value.trim(),
    );
  if (!match) throw new Error(`Invalid pull request reference '${value}'`);
  return { owner: match[1], repo: match[2], number: Number(match[3]) };
}

export function githubToken(): string | undefined {
  if (process.env.GITHUB_TOKEN || process.env.GH_TOKEN) {
    return process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
  }
  try {
    return execFileSync("gh", ["auth", "token"], { encoding: "utf8" }).trim() || undefined;
  } catch {
    return undefined;
  }
}

function unzipText(data: ArrayBuffer): string {
  const files = unzipSync(new Uint8Array(data));
  return Object.entries(files)
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([name, contents]) => `--- ${name} ---\n${Buffer.from(contents).toString("utf8")}`)
    .join("\n");
}

async function changedFiles(
  octokit: Octokit,
  reference: PrReference,
): Promise<{ filename: string; status: string }[]> {
  return octokit.paginate(octokit.rest.pulls.listFiles, {
    owner: reference.owner,
    repo: reference.repo,
    pull_number: reference.number,
    per_page: 100,
  });
}

function notQualified(
  reasonCodes: ReasonCode[],
  evidence: Qualification["evidence"],
): Qualification {
  return { qualified: false, reasonCodes, evidence };
}

export async function qualifyPullRequest(
  reference: PrReference,
  octokit = new Octokit({ auth: githubToken() }),
): Promise<QualifiedPr> {
  const fullName = `${reference.owner}/${reference.repo}`;
  if (!supportedRepositories.has(fullName)) {
    return {
      reference,
      qualification: notQualified(["unsupported-repository"], {}),
      headSha: "",
      baseSha: "",
      cloneUrl: "",
      changedTypeSpecFiles: [],
      oadFindings: [],
    };
  }
  const { data: pr } = await octokit.rest.pulls.get({
    owner: reference.owner,
    repo: reference.repo,
    pull_number: reference.number,
  });
  const evidence: Qualification["evidence"] = {
    prUrl: pr.html_url,
    state: pr.state,
    merged: Boolean(pr.merged_at),
    headSha: pr.head.sha,
    baseSha: pr.base.sha,
    runs: {},
  };
  if (pr.state !== "open" && !pr.merged_at) {
    return {
      reference,
      qualification: notQualified(["pull-request-not-open-or-merged"], evidence),
      headSha: pr.head.sha,
      baseSha: pr.base.sha,
      cloneUrl: pr.base.repo.clone_url,
      changedTypeSpecFiles: [],
      oadFindings: [],
    };
  }
  const files = await changedFiles(octokit, reference);
  const tspFiles = files
    .filter((file) => file.filename.endsWith(".tsp"))
    .map((file) => file.filename);
  evidence.changedTypeSpecFiles = tspFiles;
  if (tspFiles.length === 0) {
    return {
      reference,
      qualification: notQualified(["no-typespec-changes"], evidence),
      headSha: pr.head.sha,
      baseSha: pr.base.sha,
      cloneUrl: pr.base.repo.clone_url,
      changedTypeSpecFiles: [],
      oadFindings: [],
    };
  }

  const runs = await octokit.paginate(octokit.rest.actions.listWorkflowRunsForRepo, {
    owner: reference.owner,
    repo: reference.repo,
    event: "pull_request",
    head_sha: pr.head.sha,
    per_page: 100,
  });
  const reasons: ReasonCode[] = [];
  const oadFindings: OadFinding[] = [];
  for (const phase of ["A", "B"] as const) {
    const { run, hasExactHeadRun, hasAssociatedRun, requiresLogAssociation } =
      selectLatestCompletedRun(
        runs,
        workflowNames[phase],
        pr.head.sha,
        reference.number,
        pr.base.sha,
      );
    if (!run) {
      reasons.push(
        hasExactHeadRun && !hasAssociatedRun
          ? "run-association-unverified"
          : hasExactHeadRun
            ? phase === "A"
              ? "incomplete-phase-a-run"
              : "incomplete-phase-b-run"
            : phase === "A"
              ? "missing-phase-a-run"
              : "missing-phase-b-run",
      );
      continue;
    }
    if (!run.html_url) {
      reasons.push("evidence-incomplete");
      continue;
    }
    let logs: string;
    try {
      const response = await octokit.rest.actions.downloadWorkflowRunLogs({
        owner: reference.owner,
        repo: reference.repo,
        run_id: run.id,
      });
      logs = unzipText(response.data as ArrayBuffer);
    } catch {
      reasons.push("missing-run-logs");
      continue;
    }
    if (
      requiresLogAssociation &&
      !logsProveRunAssociation(logs, reference, pr.head.sha, pr.base.sha)
    ) {
      reasons.push("run-association-unverified");
      continue;
    }
    const artifacts = (await octokit.paginate(octokit.rest.actions.listWorkflowRunArtifacts, {
      owner: reference.owner,
      repo: reference.repo,
      run_id: run.id,
      per_page: 100,
    })) as WorkflowArtifactLike[];
    const summaryArtifact = artifacts
      .filter((artifact) => artifact.name === "job-summary" && !artifact.expired)
      .sort(
        (left, right) => Date.parse(right.updated_at ?? "") - Date.parse(left.updated_at ?? ""),
      )[0];
    if (!summaryArtifact) {
      reasons.push("missing-job-summary");
      continue;
    }
    let summary: string;
    try {
      const response = await octokit.rest.actions.downloadArtifact({
        owner: reference.owner,
        repo: reference.repo,
        artifact_id: summaryArtifact.id,
        archive_format: "zip",
      });
      summary = unzipText(response.data as ArrayBuffer);
    } catch {
      reasons.push("missing-job-summary");
      continue;
    }
    try {
      const parsed = parseOadLog(logs, phase);
      const summaryValidation = validateJobSummary(summary, parsed);
      oadFindings.push(...parsed.findings);
      const runEvidence: RunEvidence = {
        id: run.id,
        name: run.name ?? workflowNames[phase],
        headSha: run.head_sha,
        status: run.status ?? "completed",
        conclusion: run.conclusion ?? null,
        htmlUrl: run.html_url,
        logDigest: parsed.digest,
        summaryDigest: summaryValidation.digest,
        oadVersion: summaryValidation.oadVersion,
      };
      evidence.runs![phase] = runEvidence;
    } catch (error) {
      evidence.evidenceErrors ??= [];
      evidence.evidenceErrors.push(error instanceof Error ? error.message : String(error));
      reasons.push(
        error instanceof OadEvidenceIncompleteError ? "evidence-incomplete" : "invalid-oad-output",
      );
    }
  }
  return {
    reference,
    qualification: {
      qualified: reasons.length === 0,
      reasonCodes: [...new Set(reasons)],
      evidence,
    },
    headSha: pr.head.sha,
    baseSha: pr.base.sha,
    cloneUrl: pr.base.repo.clone_url,
    changedTypeSpecFiles: tspFiles,
    oadFindings,
  };
}

export function digestText(text: string): string {
  return createHash("sha256").update(text).digest("hex");
}
