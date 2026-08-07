import type { Namespace, Program } from "@typespec/compiler";
import type { VersionedView, VersionPair } from "../types.js";
/**
 * Result of enumerating versions from a compiled program.
 */
export interface ServiceVersionInfo {
    /** The service namespace. */
    service: Namespace;
    /** Ordered list of version strings (chronological). */
    versions: string[];
}
/**
 * Enumerate all api-versions from a compiled TypeSpec program.
 * Returns version info for ALL versioned services found.
 *
 * @param program - A compiled TypeSpec program
 * @returns Array of ServiceVersionInfo, one per versioned service. Empty if none are versioned.
 */
export declare function enumerateVersions(program: Program): ServiceVersionInfo[];
/**
 * Create a VersionedView by applying a version mutator to the program.
 * Returns a namespace projected to a specific api-version.
 */
export declare function createVersionedView(program: Program, service: Namespace, versionValue: string): VersionedView;
/**
 * Classifies a version string as "stable" or "preview".
 */
export type VersionClassifier = (version: string) => "stable" | "preview";
/**
 * Default version classifier: versions ending with "-preview" are preview, all others are stable.
 */
export declare const defaultVersionClassifier: VersionClassifier;
/**
 * Build Phase A comparison pairs: base@V vs head@V for each version present in BOTH.
 * Detects unintentional changes within an already-released version.
 *
 * @param baseVersions - Ordered version strings from the base program
 * @param headVersions - Ordered version strings from the head program
 * @returns Phase A VersionPairs (same-version comparisons)
 */
export declare function buildPhaseAPairs(baseVersions: string[], headVersions: string[]): VersionPair[];
/**
 * Build Phase B comparison pairs: for each candidate version, compare it to
 * the previous stable version in the head version list.
 *
 * Phase B detects breaking changes between api-versions. Candidates are:
 * - New versions (in head but not in base)
 * - Changed versions (Phase A detected diffs for them)
 *
 * If no previous stable version exists for a candidate, no pair is produced.
 *
 * @param headVersions - Ordered version strings from the head program
 * @param candidates - Versions to check (new + changed)
 * @param classifier - Classifies versions as stable or preview (defaults to "-preview" suffix check)
 * @returns Phase B VersionPairs (cross-version comparisons)
 */
export declare function buildPhaseBPairs(headVersions: string[], candidates: string[], classifier?: VersionClassifier): VersionPair[];
/**
 * Build all comparison pairs (Phase A + Phase B).
 * Phase B candidates default to new versions (in head but not base).
 * For changed versions (detected by Phase A), call buildPhaseBPairs separately
 * after Phase A analysis completes.
 *
 * @param baseVersions - Ordered version strings from the base program
 * @param headVersions - Ordered version strings from the head program
 * @param classifier - Version classifier (defaults to "-preview" suffix check)
 * @returns Combined Phase A and Phase B VersionPairs
 */
export declare function buildComparisonPairs(baseVersions: string[], headVersions: string[], classifier?: VersionClassifier): VersionPair[];
//# sourceMappingURL=versions.d.ts.map