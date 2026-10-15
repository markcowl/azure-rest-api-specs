import { prepareTool } from "./prepare.ts";
import { evaluate } from "./evaluate.ts";
import { validateRunCatalog } from "./runs.ts";

function option(args: string[], name: string): string | undefined {
  const index = args.indexOf(name);
  return index === -1 ? undefined : args[index + 1];
}

function usage(): void {
  console.error(`Usage:
  breaking-change-evaluator prepare [--typespec-revision <sha>] [--cache-dir <path>]
  breaking-change-evaluator evaluate --pr <url|owner/repo#n> --json-output <file> --markdown-output <file> [--tool-revision <sha>] [--cache-dir <path>] [--run-id <id>] [--dataset-id <id>] [--generated-at <iso>] [--issue-overlays <file>] [--work-dir <path>]
  breaking-change-evaluator validate-runs --reports-root <path>`);
}

export async function main(args: string[]): Promise<number> {
  try {
    if (args[0] === "prepare") {
      const prepared = await prepareTool(
        option(args, "--typespec-revision"),
        option(args, "--cache-dir"),
      );
      console.log(JSON.stringify(prepared, null, 2));
      return 0;
    }
    if (args[0] === "evaluate") {
      const pr = option(args, "--pr");
      const jsonOutput = option(args, "--json-output");
      const markdownOutput = option(args, "--markdown-output");
      if (!pr || !jsonOutput || !markdownOutput) {
        usage();
        return 2;
      }
      return await evaluate({
        pr,
        jsonOutput,
        markdownOutput,
        toolRevision: option(args, "--tool-revision"),
        cacheDir: option(args, "--cache-dir"),
        runId: option(args, "--run-id"),
        datasetId: option(args, "--dataset-id"),
        generatedAt: option(args, "--generated-at"),
        issueOverlays: option(args, "--issue-overlays"),
        workDir: option(args, "--work-dir"),
      });
    }
    if (args[0] === "validate-runs") {
      const reportsRoot = option(args, "--reports-root");
      if (!reportsRoot) {
        usage();
        return 2;
      }
      const catalog = await validateRunCatalog(reportsRoot);
      console.log(`Validated ${catalog.runs.length} immutable report runs.`);
      return 0;
    }
    usage();
    return 2;
  } catch (error) {
    console.error(error instanceof Error ? (error.stack ?? error.message) : String(error));
    return 4;
  }
}

export * from "./correlation.ts";
export * from "./evidence.ts";
export * from "./evaluate.ts";
export * from "./github.ts";
export * from "./issues.ts";
export * from "./matcher.ts";
export * from "./oad.ts";
export * from "./prepare.ts";
export * from "./process.ts";
export * from "./projects.ts";
export * from "./report.ts";
export * from "./runs.ts";
export * from "./schema.ts";
export * from "./swagger-target.ts";
export * from "./types.ts";
