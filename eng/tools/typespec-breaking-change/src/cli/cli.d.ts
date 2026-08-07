#!/usr/bin/env node
import type { AnalysisResult, ComparisonPhase } from "../types.js";
export interface CliOptions {
    /** Path to the head TypeSpec entry point (file-to-file mode). */
    entry: string;
    /** Path to the base TypeSpec entry point (file-to-file mode). */
    base?: string;
    /** Output format for console: console, json, or github. */
    format: "console" | "json" | "github";
    /** Write JSON report to this file path. */
    jsonOutput?: string;
    /** Write Markdown report to this file path. */
    markdownOutput?: string;
    /** Emit GitHub Actions annotations. */
    githubAnnotations?: boolean;
    /** Exit with code 1 on breaking changes. */
    failOnBreaking?: boolean;
    /** Restrict to a specific phase. */
    phase?: ComparisonPhase;
    /** Filter to a specific service name. */
    service?: string;
    /** Show suppressed findings in output. */
    showSuppressed?: boolean;
    /** Show ignored findings in output. */
    showIgnored?: boolean;
    /** Custom report title for markdown output. */
    reportTitle?: string;
}
/**
 * Parse CLI arguments into CliOptions.
 */
export declare function parseArgs(args: string[]): CliOptions;
/**
 * Format the analysis result using the specified reporter.
 */
export declare function formatResult(result: AnalysisResult, options: CliOptions): string;
/**
 * Main CLI entry point.
 */
export declare function main(args: string[]): Promise<number>;
//# sourceMappingURL=cli.d.ts.map