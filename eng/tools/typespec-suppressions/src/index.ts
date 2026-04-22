import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { exit } from "node:process";
import { parseArgs } from "node:util";
import { analyzeTypeSpecSuppressions } from "./analyze.js";
import { renderMarkdownSummary } from "./report.js";
import { AnalyzeSuppressionsOptions } from "./types.js";

function getUsage(): string {
  return `Usage:
  npx typespec-suppressions --base <commitish> [--head <commitish>] [--json-output <path>] [--markdown-output <path>] [--fail-on-approval] <spec-folder> [<spec-folder> ...]

Examples:
  npx typespec-suppressions --base origin/main --head HEAD specification/widget/resource-manager/Microsoft.Widget/Widget
  npx typespec-suppressions --base abc123 --head def456 --json-output report.json --markdown-output report.md --fail-on-approval specification/foo/Service`;
}

async function ensureParentDirectory(filePath: string): Promise<void> {
  await mkdir(path.dirname(filePath), { recursive: true });
}

export async function main() {
  const parsedArgs = parseArgs({
    args: process.argv.slice(2),
    options: {
      base: { type: "string" },
      head: { type: "string", default: "HEAD" },
      "json-output": { type: "string" },
      "markdown-output": { type: "string" },
      "fail-on-approval": { type: "boolean", default: false },
    },
    allowPositionals: true,
  });

  const specPaths = parsedArgs.positionals;
  const baseRevision = parsedArgs.values.base;
  const headRevision = parsedArgs.values.head;

  if (!baseRevision || specPaths.length === 0) {
    console.error(getUsage());
    exit(1);
  }

  const options: AnalyzeSuppressionsOptions = {
    baseRevision,
    headRevision,
    specPaths,
  };
  const report = await analyzeTypeSpecSuppressions(options);
  const markdown = renderMarkdownSummary({
    baseRevision: report.baseRevision,
    headRevision: report.headRevision,
    specPaths: report.specPaths,
    newSuppressions: report.newSuppressions,
    changedSuppressions: report.changedSuppressions,
  });

  const jsonOutput = parsedArgs.values["json-output"];
  if (jsonOutput) {
    await ensureParentDirectory(jsonOutput);
    await writeFile(jsonOutput, JSON.stringify(report, null, 2));
  } else {
    console.log(JSON.stringify(report, null, 2));
  }

  const markdownOutput = parsedArgs.values["markdown-output"];
  if (markdownOutput) {
    await ensureParentDirectory(markdownOutput);
    await writeFile(markdownOutput, markdown);
  }

  if (parsedArgs.values["fail-on-approval"] && report.requiresApproval) {
    exit(1);
  }
}

export { analyzeTypeSpecSuppressions, renderMarkdownSummary };
