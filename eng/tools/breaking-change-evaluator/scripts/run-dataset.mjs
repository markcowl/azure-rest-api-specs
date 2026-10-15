/* eslint-disable */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { evaluate } from "../src/evaluate.ts";
import { parsePrReference, qualifyPullRequest } from "../src/github.ts";

function option(name, fallback) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}

const selectionPath = resolve(option("--selection"));
const outputRoot = resolve(option("--output"));
const cacheDir = resolve(option("--cache-dir"));
const sourceReports = option("--source-reports");
const qualificationSnapshots = option("--qualification-snapshots");
const targetRepository = option("--target-repository");
const concurrency = Number(option("--concurrency", "3"));
const resume = process.argv.includes("--resume");
const selection = JSON.parse(await readFile(selectionPath, "utf8"));
const records = selection.records.filter((record) => record.selected);

await mkdir(join(outputRoot, "prs"), { recursive: true });
let cursor = 0;
const results = [];

async function runRecord(record) {
  const output = join(outputRoot, "prs", String(record.number));
  await mkdir(output, { recursive: true });
  if (resume) {
    try {
      const existing = JSON.parse(await readFile(join(output, "report.json"), "utf8"));
      if (existing.status === "evaluated" || existing.status === "not-qualified") {
        const result = {
          pr: record.number,
          exitCode: existing.complete ? 0 : 3,
          status: existing.status,
          complete: existing.complete,
          resumed: true,
        };
        results.push(result);
        console.log(JSON.stringify(result));
        return;
      }
    } catch {}
  }
  let qualifiedPr;
  if (sourceReports) {
    const source = JSON.parse(
      await readFile(
        join(resolve(sourceReports), "prs", String(record.number), "report.json"),
        "utf8",
      ),
    );
    qualifiedPr = {
      reference: {
        owner: source.pullRequest.owner,
        repo: source.pullRequest.repo,
        number: source.pullRequest.number,
      },
      details: source.pullRequest,
      qualification: source.qualification,
      headSha: source.pullRequest.headSha,
      baseSha: source.pullRequest.baseSha,
      cloneUrl: `https://github.com/${source.pullRequest.owner}/${source.pullRequest.repo}.git`,
      changedTypeSpecFiles: source.pullRequest.changedTypeSpecFiles,
      oadFindings: source.oadFindings,
    };
  } else if (qualificationSnapshots) {
    qualifiedPr = JSON.parse(
      await readFile(join(resolve(qualificationSnapshots), `${record.number}.json`), "utf8"),
    );
  } else {
    qualifiedPr = await qualifyPullRequest(
      parsePrReference(`${selection.repository}#${record.number}`),
    );
    const qualifiedFiles = qualifiedPr.changedTypeSpecFiles.filter((path) =>
      path.startsWith("specification/"),
    );
    if (
      qualifiedPr.headSha !== record.headSha ||
      qualifiedPr.baseSha !== record.baseSha ||
      JSON.stringify([...qualifiedFiles].sort()) !==
        JSON.stringify([...record.matchingFiles].sort())
    ) {
      throw new Error(
        `PR #${record.number} changed after the persisted query snapshot; refusing a mutable evaluation`,
      );
    }
  }
  const exitCode = await evaluate({
    pr: `${selection.repository}#${record.number}`,
    jsonOutput: join(output, "report.json"),
    markdownOutput: join(output, "report.md"),
    toolRevision: selection.analyzer.sourceSha,
    cacheDir,
    qualifiedPr,
    evaluatorCommit: selection.evaluatorCommit,
    runId: selection.run.id,
    datasetId: selection.run.datasetId,
    generatedAt: selection.run.generatedAt,
    workDir: join(cacheDir, "evaluation-work", selection.run.id, String(record.number)),
    targetRepository,
  });
  const report = JSON.parse(await readFile(join(output, "report.json"), "utf8"));
  const result = { pr: record.number, exitCode, status: report.status, complete: report.complete };
  results.push(result);
  results.sort((left, right) => left.pr - right.pr);
  await writeFile(
    join(outputRoot, "execution.json"),
    `${JSON.stringify({ runId: selection.run.id, results }, null, 2)}\n`,
  );
  console.log(JSON.stringify(result));
}

async function worker() {
  while (true) {
    const index = cursor++;
    if (index >= records.length) return;
    await runRecord(records[index]);
  }
}

await Promise.all(Array.from({ length: concurrency }, () => worker()));
