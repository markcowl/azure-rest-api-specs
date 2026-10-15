/* eslint-disable */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";
import { parsePrReference, qualifyPullRequest } from "../src/github.ts";

function option(name, fallback) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}

const selection = JSON.parse(await readFile(resolve(option("--selection")), "utf8"));
const output = resolve(option("--output"));
const concurrency = Number(option("--concurrency", "4"));
const records = selection.records.filter((record) => record.selected);
await mkdir(output, { recursive: true });
let cursor = 0;

async function worker() {
  while (true) {
    const index = cursor++;
    if (index >= records.length) return;
    const record = records[index];
    const qualified = await qualifyPullRequest(
      parsePrReference(`${selection.repository}#${record.number}`),
      undefined,
      {
        title: record.title,
        url: record.url,
        state: record.stateSource === "open" ? "open" : "closed",
        mergedAt: record.mergedAt,
        baseBranch: "main",
        headSha: record.headSha,
        baseSha: record.baseSha,
        changedTypeSpecFiles: record.matchingFiles,
      },
    );
    await writeFile(
      join(output, `${record.number}.json`),
      `${JSON.stringify(qualified, null, 2)}\n`,
    );
    console.log(
      `#${record.number}: ${qualified.qualification.qualified ? "qualified" : "not-qualified"}`,
    );
  }
}

await Promise.all(Array.from({ length: concurrency }, () => worker()));
