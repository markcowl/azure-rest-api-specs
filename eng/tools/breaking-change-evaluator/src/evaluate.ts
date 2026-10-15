import { mkdir, readFile, rm, unlink } from "node:fs/promises";
import { basename, dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { enrichOadFindingEvidence, normalizeTypeSpecFindingEvidence } from "./evidence.ts";
import { parsePrReference, qualifyPullRequest, type QualifiedPr } from "./github.ts";
import { matchFindings } from "./matcher.ts";
import { applyIssueAnalysisOverlays, generateIssueAnalyses } from "./issues.ts";
import { defaultCacheDir, findPreparedTool } from "./prepare.ts";
import { runProcess, type ProcessResult } from "./process.ts";
import { resolveProjectRoots, runTypeSpecProjects } from "./projects.ts";
import { computeFindingGroups, computeRollup, writeReportFiles } from "./report.ts";
import { resolveOadTargets } from "./swagger-target.ts";
import type {
  CanonicalTarget,
  EvaluationReport,
  IssueAnalysisOverlay,
  Phase,
  PullRequestDetails,
  Reproduction,
} from "./types.ts";
import {
  EVALUATION_SCHEMA_COMPATIBILITY,
  EVALUATION_SCHEMA_NAME,
  EVALUATION_SCHEMA_VERSION,
} from "./types.ts";

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
  runId?: string;
  datasetId?: string;
  generatedAt?: string;
  issueOverlays?: string;
  workDir?: string;
  targetRepository?: string;
}

function baseReport(qualifiedPr: QualifiedPr, options: EvaluateOptions): EvaluationReport {
  const pullRequest: PullRequestDetails | undefined =
    qualifiedPr.details ??
    (qualifiedPr.headSha
      ? {
          ...qualifiedPr.reference,
          merged: Boolean(qualifiedPr.qualification.evidence.merged),
          state: qualifiedPr.qualification.evidence.state,
          url:
            qualifiedPr.qualification.evidence.prUrl ??
            `https://github.com/${qualifiedPr.reference.owner}/${qualifiedPr.reference.repo}/pull/${qualifiedPr.reference.number}`,
          headSha: qualifiedPr.headSha,
          baseSha: qualifiedPr.baseSha,
          changedTypeSpecFiles: qualifiedPr.changedTypeSpecFiles,
        }
      : undefined);
  const oadFindings = qualifiedPr.oadFindings.map((finding) =>
    pullRequest
      ? enrichOadFindingEvidence(
          finding,
          pullRequest,
          qualifiedPr.qualification.evidence.runs?.[finding.phase]?.htmlUrl,
          qualifiedPr.qualification.evidence.runs?.[finding.phase]?.logDigest,
        )
      : finding,
  );
  return {
    schemaVersion: EVALUATION_SCHEMA_VERSION,
    schema: {
      name: EVALUATION_SCHEMA_NAME,
      version: EVALUATION_SCHEMA_VERSION,
      compatibility: EVALUATION_SCHEMA_COMPATIBILITY,
    },
    run: {
      id: options.runId ?? `adhoc-${qualifiedPr.headSha || "unresolved"}`,
      datasetId: options.datasetId ?? options.runId ?? "adhoc",
      reportId: `${options.runId ?? `adhoc-${qualifiedPr.headSha || "unresolved"}`}:pr-${qualifiedPr.reference.number}:${qualifiedPr.headSha || "unresolved"}`,
    },
    status: qualifiedPr.qualification.qualified ? "failed" : "not-qualified",
    complete: false,
    generatedAt: options.generatedAt ?? new Date().toISOString(),
    pullRequest,
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
    oadFindings,
    typeSpecProjects: [],
    matches: [],
    findingGroups: [],
    issueAnalyses: [],
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

async function checkoutPullRequest(
  pr: QualifiedPr,
  target: string,
  targetRepository?: string,
): Promise<void> {
  const clone = await runProcess("git", [
    "clone",
    ...(targetRepository ? ["--shared"] : ["--filter=blob:none"]),
    ...(targetRepository ? [] : ["--sparse"]),
    "--no-checkout",
    targetRepository ?? pr.cloneUrl,
    target,
  ]);
  const cloneError = processError("Unable to clone target repository", clone);
  if (cloneError) throw cloneError;
  if (targetRepository) {
    const remote = await runProcess("git", ["remote", "set-url", "origin", pr.cloneUrl], {
      cwd: target,
    });
    const remoteError = processError("Unable to configure target remote", remote);
    if (remoteError) throw remoteError;
  }
  const serviceRoots = [
    ...new Set(
      pr.changedTypeSpecFiles
        .filter((path) => path.startsWith("specification/"))
        .map((path) => path.split("/").slice(0, 2).join("/")),
    ),
  ].sort();
  if (!targetRepository) {
    const sparseCheckout = await runProcess(
      "git",
      ["sparse-checkout", "set", "--cone", "eng", ...serviceRoots],
      { cwd: target },
    );
    const sparseCheckoutError = processError("Unable to configure sparse checkout", sparseCheckout);
    if (sparseCheckoutError) throw sparseCheckoutError;
  }
  const fetch = await runProcess(
    "git",
    [
      "fetch",
      "--no-tags",
      "origin",
      `${pr.baseSha}:refs/evaluator/base`,
      `${pr.headSha}:refs/evaluator/head`,
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
  if (!targetRepository) {
    const analyzerSparseCheckout = await runProcess(
      "git",
      ["sparse-checkout", "set", "--cone", ...serviceRoots],
      { cwd: target },
    );
    const analyzerSparseCheckoutError = processError(
      "Unable to narrow analyzer sparse checkout",
      analyzerSparseCheckout,
    );
    if (analyzerSparseCheckoutError) throw analyzerSparseCheckoutError;
    const baseArchive = join(target, ".git", "evaluator-base-materialized.zip");
    const materializeBase = await runProcess(
      "git",
      [
        "archive",
        "--format=zip",
        `--output=${baseArchive}`,
        "refs/evaluator/base",
        "--",
        ...serviceRoots,
        "package.json",
        "pnpm-lock.yaml",
        "pnpm-workspace.yaml",
      ],
      { cwd: target, timeoutMs: 30 * 60_000 },
    );
    const materializeBaseError = processError(
      "Unable to materialize sparse base revision",
      materializeBase,
    );
    await unlink(baseArchive).catch(() => undefined);
    if (materializeBaseError) throw materializeBaseError;
  }
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

function failedReport(error: unknown, options: EvaluateOptions): EvaluationReport {
  const runId = options.runId ?? "adhoc-failed";
  return {
    schemaVersion: EVALUATION_SCHEMA_VERSION,
    schema: {
      name: EVALUATION_SCHEMA_NAME,
      version: EVALUATION_SCHEMA_VERSION,
      compatibility: EVALUATION_SCHEMA_COMPATIBILITY,
    },
    run: {
      id: runId,
      datasetId: options.datasetId ?? runId,
      reportId: `${runId}:unresolved`,
    },
    status: "failed",
    complete: false,
    generatedAt: options.generatedAt ?? new Date().toISOString(),
    qualification: { qualified: false, reasonCodes: [], evidence: {} },
    provenance: {},
    dimensions: [],
    oadFindings: [],
    typeSpecProjects: [],
    matches: [],
    findingGroups: [],
    issueAnalyses: [],
    errors: [error instanceof Error ? error.message : String(error)],
  };
}

async function loadIssueOverlays(path?: string): Promise<IssueAnalysisOverlay[]> {
  if (!path) return [];
  const value = JSON.parse(await readFile(resolve(path), "utf8")) as unknown;
  if (!Array.isArray(value)) throw new Error("Issue analysis overlay must be a JSON array");
  return value as IssueAnalysisOverlay[];
}

function quotePowerShell(value: string): string {
  return `'${value.replaceAll("'", "''")}'`;
}

function createReproduction(
  report: EvaluationReport,
  qualifiedPr: QualifiedPr,
  projects: string[],
): Reproduction {
  const evaluatorCommit = report.provenance.evaluator!.commit;
  const tool = report.provenance.tool!;
  const pr = report.pullRequest!;
  const cli = "evaluator/eng/tools/breaking-change-evaluator/cmd/breaking-change-evaluator.js";
  return {
    shell: "powershell",
    evaluatorCommit,
    analyzerSourceSha: tool.sourceSha,
    analyzerArtifactDigest: tool.artifactDigest,
    prHeadSha: pr.headSha,
    prBaseSha: pr.baseSha,
    setupCommands: [
      {
        label: "Check out the evaluator",
        command: [
          `git clone ${quotePowerShell("https://github.com/markcowl/azure-rest-api-specs.git")} evaluator`,
          `git -C evaluator checkout ${quotePowerShell(evaluatorCommit)}`,
          `corepack pnpm --dir evaluator install --frozen-lockfile`,
        ].join("\n"),
      },
      {
        label: "Prepare the immutable analyzer",
        command: `$prepared = node ${cli} prepare --typespec-revision ${tool.sourceSha} | ConvertFrom-Json\nif ($prepared.artifactDigest -ne ${quotePowerShell(tool.artifactDigest)}) { throw 'Prepared analyzer digest does not match the report' }`,
      },
      {
        label: "Check out the evaluated target",
        command: [
          `git clone --filter=blob:none --no-checkout ${quotePowerShell(qualifiedPr.cloneUrl)} target`,
          `git -C target fetch --no-tags origin ${pr.baseSha} ${pr.headSha}`,
          `git -C target checkout --detach ${pr.headSha}`,
          `corepack pnpm --dir target install --frozen-lockfile`,
        ].join("\n"),
      },
    ],
    evaluatorCommand: {
      label: "Rerun the complete evaluator",
      command: `node ${cli} evaluate --pr ${quotePowerShell(pr.url)} --tool-revision ${tool.sourceSha} --json-output evaluator.json --markdown-output evaluator.md`,
    },
    directAnalyzerCommands: projects.map((project) => ({
      label: `Run the TypeSpec analyzer for ${project}`,
      project,
      command: `Push-Location target\nnode $prepared.executable ${quotePowerShell(project)} --base-ref ${pr.baseSha} --phase same-version --json-output ${quotePowerShell(`../${project.replaceAll("/", "-")}-phase-a.json`)} --markdown-output ${quotePowerShell(`../${project.replaceAll("/", "-")}-phase-a.md`)} --fail-on-breaking\nnode $prepared.executable ${quotePowerShell(project)} --base-ref ${pr.baseSha} --json-output ${quotePowerShell(`../${project.replaceAll("/", "-")}-phase-b-evidence.json`)} --markdown-output ${quotePowerShell(`../${project.replaceAll("/", "-")}-phase-b-evidence.md`)} --fail-on-breaking\nPop-Location`,
    })),
  };
}

export async function evaluate(options: EvaluateOptions): Promise<number> {
  let qualifiedPr: QualifiedPr;
  try {
    qualifiedPr = options.qualifiedPr ?? (await qualifyPullRequest(parsePrReference(options.pr)));
  } catch (error) {
    await writeReportFiles(
      failedReport(error, options),
      options.jsonOutput,
      options.markdownOutput,
    );
    return EXIT_FAILED;
  }

  const report = baseReport(qualifiedPr, options);
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
    report.issueAnalyses = applyIssueAnalysisOverlays(
      generateIssueAnalyses(report),
      await loadIssueOverlays(options.issueOverlays),
    );
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

  const temporary = resolve(
    options.workDir ??
      join(
        options.cacheDir ?? defaultCacheDir(),
        "evaluations",
        report.run.id,
        report.pullRequest ? String(report.pullRequest.number) : "unresolved",
      ),
  );
  await rm(temporary, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  await mkdir(temporary, { recursive: true });
  const checkout = join(temporary, "repo");
  const markdownPath = resolve(options.markdownOutput);
  const reportStem = basename(markdownPath, extname(markdownPath));
  const outputDir = join(dirname(markdownPath), `${reportStem}-artifacts`, "typespec");
  try {
    await checkoutPullRequest(qualifiedPr, checkout, options.targetRepository);
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
    report.typeSpecProjects = execution.projects.map((project) => ({
      ...project,
      phaseExecutions: project.phaseExecutions
        ? Object.fromEntries(
            Object.entries(project.phaseExecutions).map(([phase, phaseExecution]) => [
              phase,
              phaseExecution
                ? {
                    ...phaseExecution,
                    jsonReport: relative(
                      dirname(markdownPath),
                      phaseExecution.jsonReport,
                    ).replaceAll("\\", "/"),
                    markdownReport: relative(
                      dirname(markdownPath),
                      phaseExecution.markdownReport,
                    ).replaceAll("\\", "/"),
                  }
                : phaseExecution,
            ]),
          )
        : undefined,
      findings: project.findings.map((finding) =>
        normalizeTypeSpecFindingEvidence(
          finding,
          checkout,
          report.pullRequest!,
          prepared.sourceSha,
          (() => {
            const phase = finding.phase === "same-version" ? "A" : "B";
            const phaseExecution = project.phaseExecutions?.[phase];
            return phaseExecution?.markdownDigest
              ? {
                  label:
                    phase === "A"
                      ? "TypeSpec Phase A analyzer report"
                      : "TypeSpec combined analyzer report containing Phase B",
                  url: relative(dirname(markdownPath), phaseExecution.markdownReport).replaceAll(
                    "\\",
                    "/",
                  ),
                  digest: phaseExecution.markdownDigest,
                }
              : undefined;
          })(),
        ),
      ),
    }));
    report.reproduction = createReproduction(report, qualifiedPr, projects);
    const allTypeSpecFindings = report.typeSpecProjects.flatMap((project) => project.findings);
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
    report.findingGroups = computeFindingGroups(
      report.oadFindings,
      allTypeSpecFindings,
      report.matches,
    );
    if (report.complete) {
      report.rollup = computeRollup(report.oadFindings, allTypeSpecFindings, report.matches);
    }
  } catch (error) {
    report.status = "failed";
    report.complete = false;
    report.errors.push(error instanceof Error ? error.message : String(error));
  }

  report.issueAnalyses = applyIssueAnalysisOverlays(
    generateIssueAnalyses(report),
    await loadIssueOverlays(options.issueOverlays),
  );
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
