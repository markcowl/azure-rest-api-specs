import { SuppressionChange, SuppressionRecord } from "./types.js";

function escapeMarkdownCell(value: string): string {
  return value.replaceAll("|", "\\|").replaceAll("\n", "<br/>");
}

function renderSuppressionTable(suppressions: SuppressionRecord[]): string {
  const lines = [
    "| Spec | Rule | Anchor | Source | Justification |",
    "| --- | --- | --- | --- | --- |",
  ];

  for (const suppression of suppressions) {
    lines.push(
      `| ${escapeMarkdownCell(suppression.specPath)} | ${escapeMarkdownCell(suppression.ruleName)} | ${escapeMarkdownCell(suppression.anchorPath)} | ${escapeMarkdownCell(`${suppression.sourceFile}:${suppression.location.line}`)} | ${escapeMarkdownCell(suppression.justification)} |`,
    );
  }

  return `${lines.join("\n")}\n`;
}

function renderChangedTable(changes: SuppressionChange[]): string {
  const lines = [
    "| Spec | Rule | Anchor | Source | Before | After |",
    "| --- | --- | --- | --- | --- | --- |",
  ];

  for (const change of changes) {
    lines.push(
      `| ${escapeMarkdownCell(change.after.specPath)} | ${escapeMarkdownCell(change.after.ruleName)} | ${escapeMarkdownCell(change.after.anchorPath)} | ${escapeMarkdownCell(`${change.after.sourceFile}:${change.after.location.line}`)} | ${escapeMarkdownCell(change.before.justification)} | ${escapeMarkdownCell(change.after.justification)} |`,
    );
  }

  return `${lines.join("\n")}\n`;
}

export function renderMarkdownSummary(params: {
  baseRevision: string;
  headRevision: string;
  specPaths: string[];
  newSuppressions: SuppressionRecord[];
  changedSuppressions: SuppressionChange[];
}): string {
  const { baseRevision, changedSuppressions, headRevision, newSuppressions, specPaths } = params;
  const lines = [
    "# TypeSpec Suppressions",
    "",
    `- Base revision: \`${baseRevision}\``,
    `- Head revision: \`${headRevision}\``,
    `- Spec folders analyzed: ${specPaths.length}`,
    "",
  ];

  if (specPaths.length > 0) {
    lines.push("## Spec folders", "", ...specPaths.map((specPath) => `- \`${specPath}\``), "");
  }

  if (newSuppressions.length === 0 && changedSuppressions.length === 0) {
    lines.push("## Result", "", "No new or changed TypeSpec suppressions were found.", "");
    return `${lines.join("\n")}\n`;
  }

  if (newSuppressions.length > 0) {
    lines.push(
      `## New suppressions requiring approval (${newSuppressions.length})`,
      "",
      renderSuppressionTable(newSuppressions),
    );
  }

  if (changedSuppressions.length > 0) {
    lines.push(
      `## Changed suppressions requiring approval (${changedSuppressions.length})`,
      "",
      renderChangedTable(changedSuppressions),
    );
  }

  return `${lines.join("\n")}\n`;
}
