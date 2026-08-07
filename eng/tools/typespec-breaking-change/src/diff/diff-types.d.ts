import { type Type } from "@typespec/compiler";
import type { HttpCanonicalization } from "@typespec/http-canonicalization";
import type { ApiDiff, DiffComponent, OperationIdentity } from "../types.js";
export interface DiffContext {
    operation: OperationIdentity;
    component: DiffComponent;
    statusCode?: string;
    /** Current element path being compared (e.g., "body.properties.tags") */
    elementPath: string;
    /** Visited type pairs for cycle detection (Set of "baseTypeId:headTypeId") */
    visited: Set<string>;
}
export declare function compareCanonicalizedTypes(base: HttpCanonicalization, head: HttpCanonicalization, ctx: DiffContext): ApiDiff[];
export declare function compareTypes(baseType: Type, headType: Type, ctx: DiffContext): ApiDiff[];
//# sourceMappingURL=diff-types.d.ts.map