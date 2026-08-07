import type { AnalysisResult } from "../types.js";
export interface ConsoleReporterOptions {
    /** Whether to include ignored (non-breaking) findings. Default: false */
    showIgnored?: boolean;
    /** Whether to include suppressed findings. Default: false */
    showSuppressed?: boolean;
    /** Whether to show timing. Default: true */
    showTiming?: boolean;
}
export declare function formatConsoleReport(result: AnalysisResult, options?: ConsoleReporterOptions): string;
//# sourceMappingURL=reporter-console.d.ts.map