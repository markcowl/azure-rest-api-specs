import type { DecoratorContext, Program, Type } from "@typespec/compiler";
import type { DiffKind } from "../diff-kind.js";
/**
 * Metadata stored by suppression decorators.
 */
export interface SuppressionMetadata {
    /** Optional DiffKind filter — if specified, only suppresses this specific kind. */
    kind?: DiffKind;
    /** Human-readable reason for the suppression. */
    reason: string;
    /** Optional version scope — only applies to this version pair. */
    version?: string;
    /** Optional identity path from suppression site to violation target. */
    path?: string;
}
export interface ResolvedSuppression {
    suppression: SuppressionMetadata;
    target: Type;
}
export declare function $approvedBreakingChange(context: DecoratorContext, target: Type, reason: string, options?: {
    kind?: string;
    since?: string;
    path?: string;
}): void;
export declare function $approvedUnversionedChange(context: DecoratorContext, target: Type, reason: string, options?: {
    kind?: string;
    path?: string;
}): void;
export declare function getSuppressions(program: Program, type: Type): SuppressionMetadata[];
export declare function getUnversionedSuppressions(program: Program, type: Type): SuppressionMetadata[];
/**
 * Scan ALL entries in the head program's unversioned suppression state map.
 * Used for Phase A cross-compilation fallback when identity-based lookup fails
 * because the target type is from a different (base) program.
 */
export declare function scanAllUnversionedSuppressions(program: Program): ResolvedSuppression[];
export declare function findSuppressions(program: Program, type: Type): ResolvedSuppression[];
export declare function findUnversionedSuppressions(program: Program, type: Type): ResolvedSuppression[];
//# sourceMappingURL=decorators.d.ts.map