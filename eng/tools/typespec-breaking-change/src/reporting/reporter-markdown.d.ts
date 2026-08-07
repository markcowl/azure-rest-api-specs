import type { AnalysisResult } from "../types.js";
export interface MarkdownReportOptions {
    /** Base revision/path label. */
    baseRevision?: string;
    /** Head revision/path label. */
    headRevision?: string;
    /** Spec folder paths analyzed. */
    specPaths?: string[];
    /** Include timing details. */
    showTiming?: boolean;
    /** GitHub server URL for source links (defaults to https://github.com). */
    githubServerUrl?: string;
    /** GitHub repository (e.g., "owner/repo") for source links. */
    githubRepository?: string;
    /** Git SHA for permalink source links. Uses "HEAD" as fallback. */
    githubSha?: string;
    /** Workspace root path — stripped from source locations to make relative paths. */
    workspacePath?: string;
    /** URL to the violations reference documentation. */
    violationsReferenceUrl?: string;
    /** Custom report title (defaults to "Breaking Change Analysis"). */
    reportTitle?: string;
}
/**
 * Render a Markdown summary suitable for PR comments.
 */
export declare function renderMarkdownSummary(result: AnalysisResult, options?: MarkdownReportOptions): string;
//# sourceMappingURL=reporter-markdown.d.ts.map