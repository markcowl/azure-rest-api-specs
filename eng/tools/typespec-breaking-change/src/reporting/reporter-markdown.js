import { formatSuppressionDiff, formatSuppressionHint } from "../suppression/suppression-guidance.js";
import { resolveFindingLocation } from "../pipeline/resolve-location.js";
/** Default URL for the violations reference docs in the typespec-azure repo. */
const DEFAULT_VIOLATIONS_REF_URL = "https://github.com/markcowl/typespec-azure/blob/prototype/breaking-change-tool/packages/typespec-breaking-change/docs/violations-reference.md";
/**
 * Render a Markdown summary suitable for PR comments.
 */
export function renderMarkdownSummary(result, options) {
    const errors = result.findings.filter((f) => f.severity === "error" && !f.suppressed);
    const suppressed = result.findings.filter((f) => f.suppressed);
    const lines = [];
    const title = options?.reportTitle ?? "Breaking Change Analysis";
    // Header. Skippable via omitTitle for callers (e.g. a CI workflow looping
    // over several impacted folders in the same phase) that print the H2
    // title once themselves, so it isn't repeated per folder in the combined
    // PR comment.
    if (!options?.omitTitle) {
        lines.push(`## ${title}`);
        lines.push("");
    }
    // Spec path context. Rendered as an H3 subheading (not another H2) so
    // multiple folders analyzed under the same phase/title read as
    // subsections of one report instead of separate top-level reports.
    if (options?.specPaths && options.specPaths.length > 0) {
        for (const sp of options.specPaths) {
            lines.push(`### ${sp}`);
        }
        lines.push("");
    }
    // No comparison reason
    if (result.summary.noComparisonReason) {
        lines.push(`ℹ️ ${result.summary.noComparisonReason}`);
        lines.push("");
        return lines.join("\n");
    }
    // Status badge
    if (errors.length === 0 && suppressed.length === 0) {
        lines.push(`✅ **${formatNoFindingsMessage(result.summary.phase, result.summary.comparisonsPerformed)}**`);
    }
    else if (errors.length === 0) {
        lines.push(`⚠️ **${suppressed.length} suppressed ${formatFindingNoun(result.summary.phase, suppressed.length)} ${suppressed.length === 1 ? "requires" : "require"} review**`);
    }
    else {
        lines.push(`❌ **${errors.length} ${formatFindingNoun(result.summary.phase, errors.length)} must be resolved**`);
    }
    // Summary stats
    const parts = [];
    if (errors.length > 0)
        parts.push(`${errors.length} unsuppressed`);
    if (suppressed.length > 0)
        parts.push(`${suppressed.length} suppressed`);
    parts.push(`${result.summary.comparisonsPerformed} version pair${result.summary.comparisonsPerformed === 1 ? "" : "s"} compared`);
    lines.push("");
    lines.push(parts.join(" · "));
    if (errors.length > 0 || suppressed.length > 0) {
        lines.push("");
        lines.push(formatPolicyMessage(result.summary.phase));
    }
    // Unsuppressed findings
    if (errors.length > 0) {
        lines.push("");
        lines.push(`### ${formatActionHeading(result.summary.phase)}`);
        lines.push("");
        lines.push("The suggested fix is guidance only and has **not** been applied in this pull request.");
        lines.push("");
        lines.push("| Change | Target | Source | Version comparison | Suggested Fix |");
        lines.push("|--------|--------|--------|--------------------|--------------------------------|");
        const suppressionBlocks = [];
        for (const finding of errors) {
            const kind = fmtKindLink(finding.diff.kind, finding.phase, options);
            const target = fmtTarget(finding);
            const source = fmtSourceLink(finding, options);
            const version = esc(formatFindingVersionPair(finding));
            const hint = formatSuppressionHint(finding);
            lines.push(`| ${kind} | ${target} | ${source} | ${version} | Add \`${esc(hint)}\` only if unavoidable |`);
            suppressionBlocks.push({
                diff: formatSuppressionDiff(finding),
                identity: finding.diff.identity.element,
                label: `${finding.diff.kind} (${formatShortElement(finding.diff.identity.element)})`,
            });
        }
        if (suppressionBlocks.length > 0) {
            lines.push("");
            lines.push("<details>");
            lines.push("<summary>Suggested fix examples and full identities (not yet applied)</summary>");
            lines.push("");
            for (const block of suppressionBlocks) {
                lines.push(`**${block.label}:**`);
                lines.push("");
                lines.push(`Full target: \`${esc(block.identity)}\``);
                lines.push("");
                lines.push("```diff");
                lines.push(block.diff);
                lines.push("```");
                lines.push("");
            }
            lines.push("</details>");
        }
    }
    // Suppressed findings
    if (suppressed.length > 0) {
        lines.push("");
        lines.push(`### Suppressed ${formatFindingTitle(result.summary.phase)} Requiring Review`);
        lines.push("");
        lines.push("A suppression decorator does not make an API change acceptable. Reviewers must confirm that a non-breaking design was attempted, the change is unavoidable, and the justification is specific.");
        lines.push("");
        lines.push("| Change | Target | Source | Version comparison | Justification in PR |");
        lines.push("|--------|--------|--------|--------------------|---------------------|");
        for (const finding of suppressed) {
            const kind = fmtKindLink(finding.diff.kind, finding.phase, options);
            const target = fmtTarget(finding);
            const source = fmtSourceLink(finding, options);
            const version = esc(formatFindingVersionPair(finding));
            const reason = esc(finding.suppressionReason ?? "—");
            lines.push(`| ${kind} | ${target} | ${source} | ${version} | ${reason} |`);
        }
    }
    if (result.summary.versionComparisons.length > 0) {
        lines.push("");
        lines.push("<details>");
        lines.push("<summary>Version Comparisons</summary>");
        lines.push("");
        lines.push("| Service | Version Pair | Phase | Result |");
        lines.push("|---------|-------------|-------|--------|");
        for (const comparison of result.summary.versionComparisons) {
            lines.push(`| ${esc(comparison.serviceName)} | ${esc(formatComparisonPair(comparison.phase, comparison.baseVersion, comparison.headVersion))} | ${formatPhaseLabel(comparison.phase)} | ${formatComparisonResult(comparison.findingCount)} |`);
        }
        lines.push("");
        lines.push("</details>");
    }
    // Timing (collapsed)
    if (options?.showTiming) {
        lines.push("");
        lines.push("<details>");
        lines.push("<summary>Performance</summary>");
        lines.push("");
        lines.push(`Total: ${fmtMs(result.timing.totalMs)} · Version mutators: ${fmtMs(result.timing.versionMutatorsMs)} · Diff engine: ${fmtMs(result.timing.diffEngineMs)} · Classify: ${fmtMs(result.timing.classifyMs)}`);
        lines.push("");
        lines.push("</details>");
    }
    lines.push("");
    return lines.join("\n");
}
/** Format a DiffKind as a link to the violations reference docs. */
function fmtKindLink(kind, phase, options) {
    const baseUrl = options?.violationsReferenceUrl ?? DEFAULT_VIOLATIONS_REF_URL;
    const anchor = phase === "same-version"
        ? "#phase-a-same-version-findings-are-projection-bugs-not-breaking-change-classifications"
        : "#phase-b-detailed-reference";
    return `[\`${esc(kind)}\`](${baseUrl}${anchor})`;
}
/** Format the terminal identity element for a compact target column. */
function fmtTarget(finding) {
    const element = finding.diff.identity.element;
    const shortElement = formatShortElement(element);
    return `\`${esc(shortElement)}\``;
}
/** Format a compact source link while retaining the full path in the URL. */
function fmtSourceLink(finding, options) {
    const resolvedLocation = resolveFindingLocation(finding);
    const location = resolvedLocation?.location;
    const url = buildSourceUrl(location, options);
    if (url) {
        const fileName = getFileName(location.file.path);
        const line = getLineNumber(location);
        const label = line > 0 ? `${fileName}#L${line}` : fileName;
        return `[\`${esc(label)}\`](${url})`;
    }
    return "—";
}
/** Build a GitHub source URL from a SourceLocation. */
function buildSourceUrl(location, options) {
    if (!location?.file?.path)
        return undefined;
    if (!options?.githubRepository)
        return undefined;
    const server = options.githubServerUrl ?? "https://github.com";
    const sha = options.githubSha ?? "HEAD";
    let filePath = location.file.path;
    // Make path relative to workspace
    if (options.workspacePath) {
        const prefix = options.workspacePath.endsWith("/")
            ? options.workspacePath
            : options.workspacePath + "/";
        if (filePath.startsWith(prefix)) {
            filePath = filePath.substring(prefix.length);
        }
    }
    // Skip non-workspace files (node_modules, intrinsics, etc.)
    if (filePath.includes("node_modules/") || filePath.startsWith("/")) {
        return undefined;
    }
    // Strip ".base" suffix from directory names (artifact of Phase A in-place compilation)
    filePath = filePath.replace(/\.base([/\\])/g, "$1");
    const line = getLineNumber(location);
    const lineAnchor = line > 0 ? `#L${line}` : "";
    return `${server}/${options.githubRepository}/blob/${sha}/${filePath}${lineAnchor}`;
}
function getLineNumber(location) {
    if (!location.file?.text || location.pos === undefined)
        return 0;
    const text = location.file.text.substring(0, location.pos);
    return text.split("\n").length;
}
function fmtMs(ms) {
    return ms >= 1000 ? `${(ms / 1000).toFixed(1)}s` : `${ms}ms`;
}
function esc(value) {
    return value.replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}
function getFileName(filePath) {
    return filePath.replace(/\\/g, "/").split("/").pop() ?? filePath;
}
function formatShortElement(element) {
    return element.split(".").pop() ?? element;
}
function formatFindingVersionPair(finding) {
    return formatComparisonPair(finding.phase, finding.versionPair.baseVersion, finding.versionPair.headVersion);
}
function formatFindingNoun(phase, count) {
    const noun = phase === "same-version" ? "unversioned change" : "breaking change";
    return `${noun}${count === 1 ? "" : "s"}`;
}
function formatFindingTitle(phase) {
    return phase === "same-version" ? "Unversioned Changes" : "Breaking Changes";
}
function formatActionHeading(phase) {
    return phase === "same-version"
        ? "Unversioned Changes Requiring Action"
        : "Breaking Changes Requiring Action";
}
function formatPolicyMessage(phase) {
    if (phase === "same-version") {
        return "**Existing API versions must remain immutable.** Move API changes to a new version instead of changing an existing version. An approval decorator should be used only for an exceptional, explicitly reviewed correction.";
    }
    return "**Breaking API changes must be avoided and should be rare.** The service team must first attempt to deliver new functionality without breaking existing API consumers. Use an approval decorator only when the change is unavoidable and has explicit reviewer approval.";
}
function formatNoFindingsMessage(phase, comparisonsPerformed) {
    const pairLabel = `${comparisonsPerformed} version pair${comparisonsPerformed === 1 ? "" : "s"} compared`;
    switch (phase) {
        case "same-version":
            return `No unversioned changes found (${pairLabel})`;
        case "cross-version":
            return `No cross-version breaking changes found (${pairLabel})`;
        default:
            return `No breaking changes found (${pairLabel})`;
    }
}
function formatComparisonPair(phase, baseVersion, headVersion) {
    if (phase === "same-version") {
        return `${headVersion} (base → head)`;
    }
    return `${baseVersion} → ${headVersion}`;
}
function formatComparisonResult(findingCount) {
    return findingCount === 0
        ? "✅ No changes"
        : `❌ ${findingCount} finding${findingCount === 1 ? "" : "s"}`;
}
/** Format a comparison phase as a human-readable label for the Version Comparisons table. */
function formatPhaseLabel(phase) {
    return phase === "same-version" ? "Same-version" : "Cross-version";
}