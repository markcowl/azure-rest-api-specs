import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { parseArgs } from "node:util";
import { runReports } from "./runner.ts";
import { readWorkerRequest, runWorker } from "./worker.ts";

const usage = `Usage: typespec-arm-resource-data [options]

Options:
  --project <path>       Include projects whose repository-relative path contains this value.
  --service <name>       Include one service directory. May be repeated.
  --concurrency <count>  Maximum concurrent project workers (default: 4).
  --timeout <seconds>    Per-project timeout in seconds (default: 300).
  --resume               Reuse outputs whose source, inputs, dependencies, tool, and hashes match.
  --root <path>          Repository root (default: current directory).
  --help                 Show this help.
`;

export async function main(): Promise<void> {
  const args = process.argv.slice(2);
  if (args[0] === "--internal-worker") {
    const request = await readWorkerRequest(args[1]);
    const result = await runWorker(request);
    await writeFile(args[2], JSON.stringify(result));
    return;
  }
  const parsed = parseArgs({
    args,
    options: {
      project: { type: "string", multiple: true, default: [] },
      service: { type: "string", multiple: true, default: [] },
      concurrency: { type: "string", default: "4" },
      timeout: { type: "string", default: "300" },
      resume: { type: "boolean", default: false },
      root: { type: "string", default: process.cwd() },
      help: { type: "boolean", short: "h", default: false },
    },
    strict: true,
  });
  if (parsed.values.help) {
    console.log(usage);
    return;
  }
  const concurrency = Number(parsed.values.concurrency);
  const timeoutSeconds = Number(parsed.values.timeout);
  if (!Number.isSafeInteger(concurrency) || concurrency < 1) {
    throw new Error("--concurrency must be a positive integer.");
  }
  if (!Number.isFinite(timeoutSeconds) || timeoutSeconds <= 0) {
    throw new Error("--timeout must be a positive number of seconds.");
  }
  const manifest = await runReports({
    repositoryRoot: resolve(parsed.values.root),
    services: parsed.values.service,
    projects: parsed.values.project,
    concurrency,
    timeoutMs: timeoutSeconds * 1000,
    resume: parsed.values.resume,
  });
  if (manifest.projects.some((project) => project.status === "failed")) process.exitCode = 1;
}
