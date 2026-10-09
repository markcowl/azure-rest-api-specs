/**
 * Compares inline TypeSpec #suppress directive counts across Git revisions.
 *
 * Usage:
 * node eng/scripts/compare-typespec-suppressions.ts \
 *   --base <commitish> \
 *   --base-path <project-directory> \
 *   --head <commitish> \
 *   --head-path <project-directory> \
 *   --markdown-output <report.md> \
 *   [--json-output <report.json>]
 */
import { createSourceFile } from "@typespec/compiler";
import { parse, visitChildren } from "@typespec/compiler/ast";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";
import { spawn } from "node:child_process";

interface AstNode {
  directives?: Array<{ target?: { sv?: string } }>;
}

export interface SuppressionLocationCount {
  path: string;
  count: number;
}

export interface SuppressionComparisonSide {
  requestedRevision: string;
  resolvedCommit: string;
  projectPath: string;
  count: number;
  byLocation: SuppressionLocationCount[];
}

export interface SuppressionComparisonReport {
  schemaVersion: 1;
  base: SuppressionComparisonSide;
  head: SuppressionComparisonSide;
  netRemoved: number;
  netAdded: number;
  reductionPercentage: number | null;
}

export interface CompareSuppressionsOptions {
  cwd?: string;
  baseRevision: string;
  basePath: string;
  headRevision: string;
  headPath: string;
}

interface GitProcessResult {
  exitCode: number;
  stdout: Buffer;
  stderr: Buffer;
}

function runProcess(
  command: string,
  args: string[],
  options: { cwd: string; input?: string },
): Promise<GitProcessResult> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: options.cwd,
      stdio: ["pipe", "pipe", "pipe"],
      windowsHide: true,
    });
    const stdout: Buffer[] = [];
    const stderr: Buffer[] = [];

    child.stdout.on("data", (chunk: Buffer) => stdout.push(chunk));
    child.stderr.on("data", (chunk: Buffer) => stderr.push(chunk));
    child.on("error", reject);
    child.on("close", (exitCode) => {
      resolve({
        exitCode: exitCode ?? 1,
        stdout: Buffer.concat(stdout),
        stderr: Buffer.concat(stderr),
      });
    });

    child.stdin.end(options.input);
  });
}

async function runGit(repoRoot: string, args: string[]): Promise<Buffer> {
  const result = await runProcess("git", args, { cwd: repoRoot });
  if (result.exitCode !== 0) {
    const detail = result.stderr.toString("utf8").trim();
    throw new Error(`git ${args.join(" ")} failed${detail ? `: ${detail}` : ""}`);
  }
  return result.stdout;
}

async function findRepoRoot(cwd: string): Promise<string> {
  const result = await runGit(cwd, ["rev-parse", "--show-toplevel"]);
  return path.resolve(result.toString("utf8").trim());
}

function normalizeProjectPath(projectPath: string): string {
  const normalized = projectPath
    .replaceAll("\\", "/")
    .replace(/^\.\/+/, "")
    .replace(/\/+$/, "");
  if (
    normalized.length === 0 ||
    path.posix.isAbsolute(normalized) ||
    normalized.split("/").includes("..")
  ) {
    throw new Error(`Project path must be a repository-relative directory: ${projectPath}`);
  }
  return normalized;
}

async function resolveCommit(repoRoot: string, revision: string): Promise<string> {
  try {
    const output = await runGit(repoRoot, [
      "rev-parse",
      "--verify",
      "--end-of-options",
      `${revision}^{commit}`,
    ]);
    return output.toString("utf8").trim();
  } catch {
    throw new Error(`Unable to resolve Git revision to a commit: ${revision}`);
  }
}

async function validateProjectPath(
  repoRoot: string,
  commit: string,
  projectPath: string,
): Promise<void> {
  let type: string;
  try {
    const treeish = projectPath === "." ? `${commit}^{tree}` : `${commit}:${projectPath}`;
    type = (await runGit(repoRoot, ["cat-file", "-t", treeish])).toString("utf8").trim();
  } catch {
    throw new Error(`Project path does not exist at ${commit}: ${projectPath}`);
  }
  if (type !== "tree") {
    throw new Error(`Project path is not a directory at ${commit}: ${projectPath}`);
  }
}

async function listTypeSpecFiles(
  repoRoot: string,
  commit: string,
  projectPath: string,
): Promise<string[]> {
  const args = ["ls-tree", "-r", "-z", "--name-only", commit];
  if (projectPath !== ".") {
    args.push("--", projectPath);
  }
  const output = await runGit(repoRoot, args);
  const files = output
    .toString("utf8")
    .split("\0")
    .filter((file) => file.endsWith(".tsp"))
    .sort((left, right) => left.localeCompare(right));
  if (files.length === 0) {
    throw new Error(`Project path contains no .tsp files at ${commit}: ${projectPath}`);
  }
  return files;
}

async function readRevisionFiles(
  repoRoot: string,
  commit: string,
  files: string[],
): Promise<Map<string, string>> {
  const input = files.map((file) => `${commit}:${file}\n`).join("");
  const result = await runProcess("git", ["cat-file", "--batch"], { cwd: repoRoot, input });
  if (result.exitCode !== 0) {
    const detail = result.stderr.toString("utf8").trim();
    throw new Error(`Unable to read files from ${commit}${detail ? `: ${detail}` : ""}`);
  }

  const contents = new Map<string, string>();
  let offset = 0;
  for (const file of files) {
    const headerEnd = result.stdout.indexOf(0x0a, offset);
    if (headerEnd < 0) {
      throw new Error(`Unexpected git cat-file output while reading ${file}`);
    }
    const header = result.stdout.subarray(offset, headerEnd).toString("utf8");
    const match = /^[0-9a-f]+ blob (\d+)$/.exec(header);
    if (!match) {
      throw new Error(`Unable to read ${file} at ${commit}: ${header}`);
    }

    const size = Number.parseInt(match[1], 10);
    const contentStart = headerEnd + 1;
    const contentEnd = contentStart + size;
    contents.set(file, result.stdout.subarray(contentStart, contentEnd).toString("utf8"));
    offset = contentEnd + 1;
  }
  return contents;
}

function countInlineSuppressions(sourcePath: string, text: string): number {
  const script = parse(createSourceFile(text, sourcePath));
  if (script.parseDiagnostics.length > 0) {
    const details = script.parseDiagnostics.map((diagnostic) => diagnostic.message).join("; ");
    throw new Error(`Unable to parse TypeSpec file ${sourcePath}: ${details}`);
  }

  let count = 0;
  const walk = (node: AstNode) => {
    count +=
      node.directives?.filter((directive) => directive.target?.sv === "suppress").length ?? 0;
    visitChildren(node as never, (child) => {
      walk(child as unknown as AstNode);
      return undefined;
    });
  };
  walk(script as unknown as AstNode);
  return count;
}

function getLocation(projectPath: string, sourcePath: string): string {
  const relativePath = path.posix.relative(projectPath, sourcePath);
  const segments = relativePath.split("/");
  return segments.length === 1 ? "(project root)" : segments[0];
}

async function analyzeSide(
  repoRoot: string,
  requestedRevision: string,
  projectPath: string,
): Promise<SuppressionComparisonSide> {
  const normalizedPath = normalizeProjectPath(projectPath);
  const resolvedCommit = await resolveCommit(repoRoot, requestedRevision);
  await validateProjectPath(repoRoot, resolvedCommit, normalizedPath);
  const files = await listTypeSpecFiles(repoRoot, resolvedCommit, normalizedPath);
  const contents = await readRevisionFiles(repoRoot, resolvedCommit, files);
  const counts = new Map<string, number>();

  for (const file of files) {
    const count = countInlineSuppressions(file, contents.get(file) ?? "");
    if (count === 0) {
      continue;
    }
    const location = getLocation(normalizedPath, file);
    counts.set(location, (counts.get(location) ?? 0) + count);
  }

  const byLocation = Array.from(counts, ([location, count]) => ({ path: location, count })).sort(
    (left, right) => left.path.localeCompare(right.path),
  );

  return {
    requestedRevision,
    resolvedCommit,
    projectPath: normalizedPath,
    count: byLocation.reduce((total, item) => total + item.count, 0),
    byLocation,
  };
}

export async function compareTypeSpecSuppressions(
  options: CompareSuppressionsOptions,
): Promise<SuppressionComparisonReport> {
  const repoRoot = await findRepoRoot(path.resolve(options.cwd ?? process.cwd()));
  const [baseResult, headResult] = await Promise.allSettled([
    analyzeSide(repoRoot, options.baseRevision, options.basePath),
    analyzeSide(repoRoot, options.headRevision, options.headPath),
  ]);
  if (baseResult.status === "rejected") {
    throw baseResult.reason;
  }
  if (headResult.status === "rejected") {
    throw headResult.reason;
  }
  const base = baseResult.value;
  const head = headResult.value;
  const difference = base.count - head.count;

  return {
    schemaVersion: 1,
    base,
    head,
    netRemoved: Math.max(difference, 0),
    netAdded: Math.max(-difference, 0),
    reductionPercentage: base.count === 0 ? null : (difference / base.count) * 100,
  };
}

function formatPercentage(value: number | null): string {
  return value === null ? "N/A" : `${value.toFixed(1)}%`;
}

function formatChange(value: number): string {
  return value > 0 ? `+${value}` : `${value}`;
}

export function renderMarkdownReport(report: SuppressionComparisonReport): string {
  const baseLocations = new Map(report.base.byLocation.map((item) => [item.path, item.count]));
  const headLocations = new Map(report.head.byLocation.map((item) => [item.path, item.count]));
  const locations = Array.from(new Set([...baseLocations.keys(), ...headLocations.keys()])).sort(
    (left, right) => left.localeCompare(right),
  );

  const lines = [
    "# TypeSpec suppression comparison",
    "",
    "Only inline `#suppress` directives in `.tsp` files are included.",
    "",
    "## Inputs",
    "",
    "| Side | Requested revision | Resolved commit | Project path |",
    "|---|---|---|---|",
    `| Base | \`${report.base.requestedRevision}\` | \`${report.base.resolvedCommit}\` | \`${report.base.projectPath}\` |`,
    `| Head | \`${report.head.requestedRevision}\` | \`${report.head.resolvedCommit}\` | \`${report.head.projectPath}\` |`,
    "",
    "## Summary",
    "",
    "| Base suppressions | Head suppressions | Net removed | Net added | Reduction |",
    "|---:|---:|---:|---:|---:|",
    `| ${report.base.count} | ${report.head.count} | ${report.netRemoved} | ${report.netAdded} | ${formatPercentage(report.reductionPercentage)} |`,
    "",
    "## First-level path breakdown",
    "",
    "| Path | Base | Head | Change |",
    "|---|---:|---:|---:|",
    ...locations.map((location) => {
      const base = baseLocations.get(location) ?? 0;
      const head = headLocations.get(location) ?? 0;
      return `| \`${location}\` | ${base} | ${head} | ${formatChange(head - base)} |`;
    }),
    "",
  ];
  return `${lines.join("\n")}\n`;
}

function getUsage(): string {
  return `Usage:
  node eng/scripts/compare-typespec-suppressions.ts \\
    --base <commitish> \\
    --base-path <project-directory> \\
    --head <commitish> \\
    --head-path <project-directory> \\
    --markdown-output <report.md> \\
    [--json-output <report.json>]`;
}

function requireOption(value: string | undefined, option: string): string {
  if (!value) {
    throw new Error(`Missing required option ${option}\n\n${getUsage()}`);
  }
  return value;
}

async function ensureOutputParent(outputPath: string): Promise<void> {
  await mkdir(path.dirname(outputPath), { recursive: true });
}

export async function runCli(
  args: string[],
  cwd = process.cwd(),
): Promise<SuppressionComparisonReport | undefined> {
  const parsed = parseArgs({
    args,
    options: {
      base: { type: "string" },
      "base-path": { type: "string" },
      head: { type: "string" },
      "head-path": { type: "string" },
      "markdown-output": { type: "string" },
      "json-output": { type: "string" },
      help: { type: "boolean", default: false },
    },
    strict: true,
    allowPositionals: false,
  });

  if (parsed.values.help) {
    console.log(getUsage());
    return undefined;
  }

  const markdownOutput = path.resolve(
    cwd,
    requireOption(parsed.values["markdown-output"], "--markdown-output"),
  );
  if (path.extname(markdownOutput).toLowerCase() !== ".md") {
    throw new Error(`Markdown output path must use the .md extension: ${markdownOutput}`);
  }

  const jsonOutputValue = parsed.values["json-output"];
  const jsonOutput = jsonOutputValue ? path.resolve(cwd, jsonOutputValue) : undefined;
  if (jsonOutput && path.extname(jsonOutput).toLowerCase() !== ".json") {
    throw new Error(`JSON output path must use the .json extension: ${jsonOutput}`);
  }

  const report = await compareTypeSpecSuppressions({
    cwd,
    baseRevision: requireOption(parsed.values.base, "--base"),
    basePath: requireOption(parsed.values["base-path"], "--base-path"),
    headRevision: requireOption(parsed.values.head, "--head"),
    headPath: requireOption(parsed.values["head-path"], "--head-path"),
  });

  await ensureOutputParent(markdownOutput);
  await writeFile(markdownOutput, renderMarkdownReport(report));

  if (jsonOutput) {
    await ensureOutputParent(jsonOutput);
    await writeFile(jsonOutput, `${JSON.stringify(report, null, 2)}\n`);
  }

  console.log(
    `Compared ${report.base.count} base suppressions with ${report.head.count} head suppressions: ` +
      `${report.netRemoved} net removed, ${report.netAdded} net added. Report: ${markdownOutput}`,
  );
  return report;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  runCli(process.argv.slice(2)).catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
