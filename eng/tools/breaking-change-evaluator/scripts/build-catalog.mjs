/* eslint-disable */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const reportsRoot = resolve(process.argv[2]);
const directories = (await readdir(reportsRoot, { withFileTypes: true })).filter((entry) =>
  entry.isDirectory(),
);
const runs = [];
for (const directory of directories) {
  const manifestPath = resolve(reportsRoot, directory.name, "run.json");
  try {
    const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
    runs.push({
      id: manifest.id,
      datasetId: manifest.datasetId,
      title: manifest.title,
      path: directory.name,
      summary: `${directory.name}/README.md`,
      manifest: `${directory.name}/run.json`,
      selection: `${directory.name}/${manifest.selection.file}`,
      generatedAt: manifest.generatedAt,
      status: manifest.status,
      reportSchema: manifest.reportSchema,
    });
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }
}
runs.sort(
  (left, right) =>
    right.generatedAt.localeCompare(left.generatedAt) || left.id.localeCompare(right.id),
);
const catalog = {
  schemaVersion: 1,
  schemaCompatibility: ">=1 <2",
  branch: "breaking-change-comparison-data",
  runs,
};
await writeFile(resolve(reportsRoot, "index.json"), `${JSON.stringify(catalog, null, 2)}\n`);

const lines = [
  "# Breaking-change evaluator report catalog",
  "",
  "This branch catalog is the stable entry point for longitudinal dashboard ingestion. Runs are immutable: corrected analyzers or changed selections create new run IDs and directories. Machine consumers should start with [`index.json`](index.json).",
  "",
  "| Run | Dataset | Generated | Report schema | Complete | Not qualified | Partial | Failed |",
  "| --- | --- | --- | --- | ---: | ---: | ---: | ---: |",
  ...runs.map(
    (run) =>
      `| [${run.title}](${run.summary})<br>\`${run.id}\` | \`${run.datasetId}\` | ${run.generatedAt} | ${run.reportSchema.legacy ? "legacy " : ""}v${run.reportSchema.version} | ${run.status.evaluated} | ${run.status.notQualified} | ${run.status.partial} | ${run.status.failed} |`,
  ),
  "",
  "Use `breaking-change-evaluator validate-runs --reports-root eng/tools/breaking-change-evaluator/reports` before ingesting or publishing changes.",
  "",
];
await writeFile(resolve(reportsRoot, "README.md"), `${lines.join("\n")}\n`);
