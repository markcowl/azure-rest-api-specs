/* eslint-disable */
import { createHash } from "node:crypto";
import { homedir, tmpdir } from "node:os";
import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import { renderMarkdown } from "../../src/report.ts";

const root = new URL(".", import.meta.url);
const prRoot = new URL("prs/", root);

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function pathVariants(path) {
  return [...new Set([path, path.replaceAll("\\", "/"), path.replaceAll("/", "\\")])].sort(
    (left, right) => right.length - left.length,
  );
}

const replacements = [
  ...pathVariants(tmpdir()).map((path) => [new RegExp(escapeRegExp(path), "gi"), "<temp>"]),
  ...pathVariants(homedir()).map((path) => [new RegExp(escapeRegExp(path), "gi"), "<home>"]),
];

function sanitizeText(value) {
  return replacements.reduce(
    (sanitized, [pattern, replacement]) => sanitized.replace(pattern, replacement),
    value,
  );
}

function sanitizeValue(value) {
  if (typeof value === "string") return sanitizeText(value);
  if (Array.isArray(value)) return value.map(sanitizeValue);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, sanitizeValue(item)]),
    );
  }
  return value;
}

function digest(value) {
  return createHash("sha256").update(value).digest("hex");
}

const directories = (await readdir(prRoot, { withFileTypes: true })).filter((entry) =>
  entry.isDirectory(),
);
for (const directory of directories) {
  const reportUrl = new URL(`prs/${directory.name}/report.json`, root);
  const markdownUrl = new URL(`prs/${directory.name}/report.md`, root);
  const report = sanitizeValue(JSON.parse(await readFile(reportUrl, "utf8")));
  for (const project of report.typeSpecProjects) {
    for (const execution of Object.values(project.phaseExecutions ?? {})) {
      if (execution?.status !== "complete" || !execution.jsonReport || !execution.markdownReport) {
        continue;
      }
      const jsonUrl = new URL(`prs/${directory.name}/${execution.jsonReport}`, root);
      const artifactMarkdownUrl = new URL(
        `prs/${directory.name}/${execution.markdownReport}`,
        root,
      );
      const jsonContent = sanitizeText(await readFile(jsonUrl, "utf8"));
      const markdownContent = sanitizeText(await readFile(artifactMarkdownUrl, "utf8"));
      await Promise.all([
        writeFile(jsonUrl, jsonContent),
        writeFile(artifactMarkdownUrl, markdownContent),
      ]);
      execution.jsonDigest = digest(jsonContent);
      execution.markdownDigest = digest(markdownContent);
      for (const finding of project.findings) {
        if (finding.detectorEvidence?.url === execution.markdownReport) {
          finding.detectorEvidence.digest = execution.markdownDigest;
        }
      }
    }
  }
  await Promise.all([
    writeFile(reportUrl, `${JSON.stringify(report, null, 2)}\n`),
    writeFile(markdownUrl, renderMarkdown(report)),
  ]);
}

await rm(new URL("prepared-analyzer.json", root), { force: true });

const execution = directories
  .map((directory) => directory.name)
  .sort((left, right) => Number(left) - Number(right))
  .map(async (directory) => {
    const report = JSON.parse(
      await readFile(new URL(`prs/${directory}/report.json`, root), "utf8"),
    );
    return {
      number: report.pullRequest?.number ?? Number(directory),
      status: report.status,
      complete: report.complete,
      generatedAt: report.generatedAt,
    };
  });
await writeFile(
  new URL("execution.json", root),
  `${JSON.stringify(await Promise.all(execution), null, 2)}\n`,
);
