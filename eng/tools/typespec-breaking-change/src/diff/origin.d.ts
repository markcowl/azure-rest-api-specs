import { type Type } from "@typespec/compiler";
import type { OriginDeclaration } from "../types.js";
/**
 * Resolve the origin declaration for a type encountered during diffing.
 *
 * The origin is the nearest named TypeSpec declaration that "owns" this type.
 * Used for:
 * 1. Deduplication: same {origin, DiffKind} across operations = one finding
 * 2. Suppression: decorator on origin type suppresses all uses
 *
 * Resolution rules:
 * - ModelProperty with sourceProperty → follow chain to original named declaration
 * - ModelProperty on a named model → the property itself
 * - Named Model/Enum/Union/Scalar → the type itself
 * - EnumMember → the parent Enum
 * - UnionVariant → the parent Union (if named)
 * - Anonymous/inline types → climb to nearest named ancestor, or undefined
 */
export declare function resolveOrigin(type?: Type): OriginDeclaration | undefined;
//# sourceMappingURL=origin.d.ts.map