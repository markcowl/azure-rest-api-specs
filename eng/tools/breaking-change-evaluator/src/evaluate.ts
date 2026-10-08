import { mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { parsePrReference, qualifyPullRequest, type QualifiedPr } from "./github.ts";
import { matchFindings } from "./matcher.ts";
import { defaultCacheDir, findPreparedTool } from "./prepare.ts";
import { runProcess, type ProcessResult } from "./process.ts";
import { resolveProjectRoots, runTypeSpecProjects } from "./projects.ts";
import { computeRollup, writeReportFiles } from "./report.ts";
import { resolveOadTargets } from "./swagger-target.ts";
import type { CanonicalTarget, EvaluationReport, Phase } from "./types.ts";

export const DEFAULT_EVALUATION_TOOL_SHA = "d0ab464d60c47d6699bfea0292c901864b5d8ba0";
export const EXIT_NOT_QUALIFIED = 3;
export const EXIT_FAILED = 4;

export interface EvaluateOptions {
  pr: string;
  jsonOutput: string;
  markdownOutput: string;
  toolRevision?: string;
  cacheDir?: string;
  qualifiedPr?: QualifiedPr;
  evaluatorCommit?: string;
}

function baseReport(qualifiedPr: QualifiedPr): EvaluationReport {
  return {
    schemaVersion: 1,
    status: qualifiedPr.qualification.qualified ? "failed" : "not-qualified",
    complete: false,
    generatedAt: new Date().toISOString(),
    qualification: qualifiedPr.qualification,
    provenance: qualifiedPr.headSha
      ? {
          pr: {
            url:
              qualifiedPr.qualification.evidence.prUrl ??
              `https://github.com/${qualifiedPr.reference.owner}/${qualifiedPr.reference.repo}/pull/${qualifiedPr.reference.number}`,
            headSha: qualifiedPr.headSha,
            baseSha: qualifiedPr.baseSha,
          },
        }
      : {},
    dimensions: [],
    oadFindings: qualifiedPr.oadFindings,
    typeSpecProjects: [],
    matches: [],
    errors: [],
  };
}

function processError(label: string, result: ProcessResult): Error | undefined {
  if (result.code === 0 && !result.signal && !result.timedOut) return undefined;
  const detail = result.timedOut
    ? "timed out"
    : result.signal
      ? `terminated by ${result.signal}`
      : result.stderr || result.stdout || `exited ${String(result.code)}`;
  return new Error(`${label}: ${detail}`);
}

async function checkoutPullRequest(pr: QualifiedPr, target: string): Promise<void> {
  const clone = await runProcess("git", [
    "clone",
    "--filter=blob:none",
    "--no-checkout",
    pr.cloneUrl,
    target,
  ]);
  const cloneError = processError("Unable to clone target repository", clone);
  if (cloneError) throw cloneError;
  const fetch = await runProcess(
    "git",
    [
      "fetch",
      "--no-tags",
      "origin",
      `${pr.baseSha}:refs/evaluator/base`,
      `refs/pull/${pr.reference.number}/head:refs/evaluator/head`,
    ],
    { cwd: target },
  );
  const fetchError = processError("Unable to fetch pull request revisions", fetch);
  if (fetchError) throw fetchError;
  const checkout = await runProcess("git", ["checkout", "--detach", "refs/evaluator/head"], {
    cwd: target,
  });
  const checkoutError = processError("Unable to check out pull request head", checkout);
  if (checkoutError) throw checkoutError;
  const install = await runProcess("corepack", ["pnpm", "install", "--frozen-lockfile"], {
    cwd: target,
    timeoutMs: 10 * 60_000,
    env: { ...process.env, CI: "true" },
  });
  const installError = processError("Unable to install target revision dependencies", install);
  if (installError) throw installError;
}

async function resolveEvaluatorCommit(): Promise<string> {
  const result = await runProcess("git", ["rev-parse", "HEAD"], {
    cwd: dirname(fileURLToPath(import.meta.url)),
  });
  const error = processError("Unable to resolve evaluator commit", result);
  if (error) throw error;
  const commit = result.stdout.trim().toLowerCase();
  if (!/^[0-9a-f]{40}$/.test(commit)) {
    throw new Error(`Unable to resolve evaluator commit: invalid SHA '${commit}'`);
  }
  return commit;
}

function reportPhase(phase: string): Phase {
  return phase === "same-version" ? "A" : "B";
}

async function removeEvaluationDirectory(path: string): Promise<string | undefined> {
  try {
    await rm(path, {
      recursive: true,
      force: true,
      maxRetries: 5,
      retryDelay: 200,
    });
    return undefined;
  } catch (error) {
    return `Unable to clean evaluation directory: ${String(error)}`;
  }
}

function failedReport(error: unknown): EvaluationReport {
  return {
    schemaVersion: 1,
    status: "failed",
    complete: false,
    generatedAt: new Date().toISOString(),
    qualification: { qualified: false, reasonCodes: [], evidence: {} },
    provenance: {},
    dimensions: [],
    oadFindings: [],
    typeSpecProjects: [],
    matches: [],
    errors: [error instanceof Error ? error.message : String(error)],
  };
}

export async function evaluate(options: EvaluateOptions): Promise<number> {
  let qualifiedPr: QualifiedPr;
  try {
    qualifiedPr = options.qualifiedPr ?? (await qualifyPullRequest(parsePrReference(options.pr)));
  } catch (error) {
    await writeReportFiles(failedReport(error), options.jsonOutput, options.markdownOutput);
    return EXIT_FAILED;
  }

  const report = baseReport(qualifiedPr);
  try {
    report.provenance.evaluator = {
      commit: options.evaluatorCommit ?? (await resolveEvaluatorCommit()),
    };
  } catch (error) {
    report.status = "failed";
    report.errors.push(error instanceof Error ? error.message : String(error));
    await writeReportFiles(report, options.jsonOutput, options.markdownOutput);
    return EXIT_FAILED;
  }
  if (!qualifiedPr.qualification.qualified) {
    await writeReportFiles(report, options.jsonOutput, options.markdownOutput);
    return EXIT_NOT_QUALIFIED;
  }

  const sourceSha = (options.toolRevision ?? DEFAULT_EVALUATION_TOOL_SHA).toLowerCase();
  if (!/^[0-9a-f]{40}$/.test(sourceSha)) {
    report.errors.push(`Tool revision '${sourceSha}' must be an explicit 40-hex SHA.`);
    await writeReportFiles(report, options.jsonOutput, options.markdownOutput);
    return EXIT_FAILED;
  }
  const prepared = await findPreparedTool(sourceSha, options.cacheDir ?? defaultCacheDir());
  if (!prepared) {
    report.errors.push(
      `Tool revision ${sourceSha} is not prepared. Run the prepare command explicitly.`,
    );
    await writeReportFiles(report, options.jsonOutput, options.markdownOutput);
    return EXIT_FAILED;
  }
  report.provenance.tool = {
    sourceSha: prepared.sourceSha,
    artifactDigest: prepared.artifactDigest,
  };

  const temporary = await mkdtemp(join(tmpdir(), "breaking-change-evaluation-"));
  const checkout = join(temporary, "repo");
  const outputDir = join(temporary, "reports");
  try {
    await checkoutPullRequest(qualifiedPr, checkout);
    await mkdir(outputDir, { recursive: true });
    const projects = await resolveProjectRoots(
      checkout,
      qualifiedPr.changedTypeSpecFiles,
      qualifiedPr.baseSha,
    );
    if (projects.length === 0) {
      throw new Error("Unable to resolve a TypeSpec project for changed .tsp files");
    }
    const execution = await runTypeSpecProjects(
      prepared.executable,
      checkout,
      qualifiedPr.baseSha,
      projects,
      outputDir,
    );
    report.typeSpecProjects = execution.projects;
    const allTypeSpecFindings = execution.projects.flatMap((project) => project.findings);
    const targets = new Map<string, CanonicalTarget[]>();
    const targetResolutionErrors = new Map<string, string>();
    for (const finding of report.oadFindings) {
      try {
        targets.set(finding.occurrenceId, await resolveOadTargets(finding, checkout));
      } catch (error) {
        const message = `Target resolution failed: ${String(error)}`;
        targetResolutionErrors.set(finding.occurrenceId, message);
        targets.set(finding.occurrenceId, [{ phase: finding.phase, evidence: [message] }]);
      }
    }
    report.matches = matchFindings(report.oadFindings, targets, allTypeSpecFindings);
    for (const match of report.matches) {
      if (targetResolutionErrors.has(match.oadOccurrenceId)) {
        match.category = "errors";
        match.reviewRequired = false;
        match.selectedTypeSpecOccurrenceIds = [];
      }
    }
    report.dimensions = execution.projects.flatMap((project) => {
      const pairs = new Map(
        project.findings.map((finding) => [
          `${finding.phase}:${finding.versionPair.baseVersion}:${finding.versionPair.headVersion}`,
          {
            phase: reportPhase(finding.phase),
            project: project.project,
            baseVersion: finding.versionPair.baseVersion,
            headVersion: finding.versionPair.headVersion,
          },
        ]),
      );
      return [...pairs.values()];
    });
    report.complete = execution.complete && targetResolutionErrors.size === 0;
    report.status = report.complete ? "evaluated" : "partial";
    report.errors.push(...execution.errors, ...targetResolutionErrors.values());
    if (report.complete) {
      report.rollup = computeRollup(report.oadFindings, allTypeSpecFindings, report.matches);
    }
  } catch (error) {
    report.status = "failed";
    report.complete = false;
    report.errors.push(error instanceof Error ? error.message : String(error));
  }

  const cleanupError = await removeEvaluationDirectory(temporary);
  if (cleanupError) {
    report.status = report.typeSpecProjects.length > 0 ? "partial" : "failed";
    report.complete = false;
    delete report.rollup;
    report.errors.push(cleanupError);
  }
  await writeReportFiles(report, options.jsonOutput, options.markdownOutput);
  return report.complete ? 0 : EXIT_FAILED;
}
