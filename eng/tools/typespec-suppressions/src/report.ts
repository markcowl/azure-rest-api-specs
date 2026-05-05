import { SuppressionChange, SuppressionRecord } from "./types.js";

function escapeMarkdown(value: string): string {
  return value.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function formatSource(suppression: SuppressionRecord): string {
  return `${suppression.sourceFile}#L${suppression.location.line}`;
}

function renderSuppressionList(suppressions: SuppressionRecord[]): string[] {
  return suppressions.flatMap((suppression) => {
    const header = suppression.ruleMetadata?.documentationUrl
      ? `- [\`${escapeMarkdown(suppression.ruleName)}\`](${suppression.ruleMetadata.documentationUrl})`
      : `- \`${escapeMarkdown(suppression.ruleName)}\``;
    const lines = [
      header,
      `  - Source: \`${escapeMarkdown(formatSource(suppression))}\``,
      `  - Justification: ${escapeMarkdown(suppression.justification)}`,
    ];

    if (suppression.ruleMetadata?.description) {
      lines.splice(1, 0, `  - Rule: ${escapeMarkdown(suppression.ruleMetadata.description)}`);
    }

    if (suppression.ruleMetadata?.guidelineCodes?.length) {
      lines.push(
        `  - Azure guidance: ${suppression.ruleMetadata.guidelineCodes
          .map((code) => `\`${escapeMarkdown(code)}\``)
          .join(", ")}`,
      );
    }

    return lines;
  });
}

function renderChangedList(changes: SuppressionChange[]): string[] {
  return changes.flatMap((change) => {
    const header = change.after.ruleMetadata?.documentationUrl
      ? `- [\`${escapeMarkdown(change.after.ruleName)}\`](${change.after.ruleMetadata.documentationUrl})`
      : `- \`${escapeMarkdown(change.after.ruleName)}\``;
    const lines = [
      header,
      `  - Source: \`${escapeMarkdown(formatSource(change.after))}\``,
      `  - Previous justification: ${escapeMarkdown(change.before.justification)}`,
      `  - New justification: ${escapeMarkdown(change.after.justification)}`,
    ];

    if (change.after.ruleMetadata?.description) {
      lines.splice(1, 0, `  - Rule: ${escapeMarkdown(change.after.ruleMetadata.description)}`);
    }

    if (change.after.ruleMetadata?.guidelineCodes?.length) {
      lines.push(
        `  - Azure guidance: ${change.after.ruleMetadata.guidelineCodes
          .map((code) => `\`${escapeMarkdown(code)}\``)
          .join(", ")}`,
      );
    }

    return lines;
  });
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
      ...renderSuppressionList(newSuppressions),
      "",
    );
  }

  if (changedSuppressions.length > 0) {
    lines.push(
      `## Changed suppressions requiring approval (${changedSuppressions.length})`,
      "",
      ...renderChangedList(changedSuppressions),
      "",
    );
  }

  return `${lines.join("\n")}\n`;
}
