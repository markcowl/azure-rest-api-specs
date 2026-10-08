import { prepareTool } from "./prepare.ts";

function option(args: string[], name: string): string | undefined {
  const index = args.indexOf(name);
  return index === -1 ? undefined : args[index + 1];
}

function usage(): void {
  console.error(`Usage:
  breaking-change-evaluator prepare [--typespec-revision <sha>] [--cache-dir <path>]
  breaking-change-evaluator evaluate --pr <url|owner/repo#n> --json-output <file> --markdown-output <file> [--tool-revision <sha>] [--cache-dir <path>]`);
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
    usage();
    return 2;
  } catch (error) {
    console.error(error instanceof Error ? (error.stack ?? error.message) : String(error));
    return 4;
  }
}

export * from "./github.ts";
export * from "./oad.ts";
export * from "./prepare.ts";
export * from "./process.ts";
export * from "./projects.ts";
export * from "./schema.ts";
export * from "./types.ts";
