import type { ApiDiff, ComparisonPhase, Finding, VersionPair } from "../types.js";
/**
 * Classify an array of diffs into findings based on phase and directional rules.
 */
export declare function classifyDiffs(diffs: ApiDiff[], phase: ComparisonPhase, versionPair: VersionPair): Finding[];
//# sourceMappingURL=policy.d.ts.map