import { type Program } from "@typespec/compiler";
import type { Finding, ResolvedLocation } from "../types.js";
/**
 * Resolve the source location for a finding, using a cascading fallback chain
 * that guarantees a location is always returned when possible.
 *
 * Fallback chain (in priority order):
 * 1. Direct source location on the diff (headSourceLocation)
 * 2. Origin source location (named type/property declaration)
 * 3. Base source location
 * 4. Parent model/type fallback
 * 5. Operation declaration source location
 * 6. Service namespace source location + element path
 *
 * This function should never return undefined for operation-relative diffs
 * when either the operation or service namespace source can be resolved.
 */
export declare function resolveFindingLocation(finding: Finding): ResolvedLocation | undefined;
/**
 * Post-process findings to resolve headSourceLocation by looking up types
 * in the unmutated head program. This handles cross-compilation scenarios
 * (Phase A) where headType is null because the type is projected out, but
 * the type still exists in the head source.
 *
 * For each finding with null headType:
 * - If the property exists in the head program → sets headSourceLocation to property
 * - If only the parent model exists → sets headSourceLocation to the model
 * - If neither exists → leaves headSourceLocation null (truly deleted)
 *
 * This must be called before reporting so that resolveFindingLocation can
 * correctly distinguish "type projected out" from "type truly deleted."
 */
export declare function resolveHeadSourceLocations(findings: Finding[], headProgram: Program): void;
//# sourceMappingURL=resolve-location.d.ts.map