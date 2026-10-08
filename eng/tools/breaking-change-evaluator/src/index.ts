function usage(): void {
  console.error(`Usage:
  breaking-change-evaluator prepare [--typespec-revision <sha>] [--cache-dir <path>]
  breaking-change-evaluator evaluate --pr <url|owner/repo#n> --json-output <file> --markdown-output <file> [--tool-revision <sha>] [--cache-dir <path>]`);
}

export function main(_args: string[]): Promise<number> {
  usage();
  return Promise.resolve(2);
}

export * from "./github.ts";
export * from "./oad.ts";
export * from "./process.ts";
export * from "./schema.ts";
export * from "./types.ts";
