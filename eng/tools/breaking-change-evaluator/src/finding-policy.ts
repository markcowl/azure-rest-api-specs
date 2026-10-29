import type { OadFinding, TypeSpecFinding } from "./types.ts";

export function isActionableOadFinding(finding: OadFinding): boolean {
  return finding.severity.toLowerCase() === "error";
}

export function isActionableTypeSpecFinding(finding: TypeSpecFinding): boolean {
  return finding.severity.toLowerCase() === "error" && !finding.suppressed;
}
