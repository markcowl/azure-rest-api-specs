import path from "node:path";
import { simpleGit } from "simple-git";
import {
  extractInlineSuppressions,
  extractTspconfigSuppressions,
  isTypeSpecConfigFile,
  isTypeSpecSourceFile,
} from "./extract.js";
import { normalizeRepoPath, toRepoRelativePath } from "./path-utils.js";
import {
  AnalyzeSuppressionsOptions,
  SpecSuppressionReport,
  SuppressionChange,
  SuppressionRecord,
  SuppressionReport,
} from "./types.js";

function suppressionIdentityKey(suppression: SuppressionRecord): string {
  return [
    suppression.specPath,
    suppression.sourceKind,
    suppression.ruleName,
    suppression.anchorPath,
  ].join("|");
}

function compareSuppressions(left: SuppressionRecord, right: SuppressionRecord): number {
  return (
    left.specPath.localeCompare(right.specPath) ||
    left.sourceKind.localeCompare(right.sourceKind) ||
    left.ruleName.localeCompare(right.ruleName) ||
    left.anchorPath.localeCompare(right.anchorPath) ||
    left.sourceFile.localeCompare(right.sourceFile) ||
    left.location.line - right.location.line ||
    left.location.column - right.location.column
  );
}

function compareChanges(left: SuppressionChange, right: SuppressionChange): number {
  return compareSuppressions(left.after, right.after);
}

async function listRevisionFiles(
  repoRoot: string,
  revision: string,
  specPath: string,
): Promise<string[]> {
  const git = simpleGit(repoRoot);
  const output = await git.raw(["ls-tree", "-r", "--name-only", revision, "--", specPath]);
  return output
    .split("\n")
    .map((file) => file.trim())
    .filter((file) => file.length > 0)
    .map(normalizeRepoPath);
}

async function readRevisionFile(
  repoRoot: string,
  revision: string,
  filePath: string,
): Promise<string | undefined> {
  const git = simpleGit(repoRoot);

  try {
    return await git.show([`${revision}:${filePath}`]);
  } catch (error) {
    if (error instanceof Error && error.message.includes("does not exist")) {
      return undefined;
    }
    throw error;
  }
}

async function collectRevisionSuppressions(
  repoRoot: string,
  revision: string,
  specPath: string,
): Promise<SuppressionRecord[]> {
  const files = await listRevisionFiles(repoRoot, revision, specPath);
  const relevantFiles = files.filter(
    (filePath) => isTypeSpecSourceFile(filePath) || isTypeSpecConfigFile(filePath),
  );

  const suppressions: SuppressionRecord[] = [];
  for (const filePath of relevantFiles) {
    const content = await readRevisionFile(repoRoot, revision, filePath);
    if (content === undefined) {
      continue;
    }

    if (isTypeSpecConfigFile(filePath)) {
      suppressions.push(...extractTspconfigSuppressions(specPath, filePath, content));
    } else if (isTypeSpecSourceFile(filePath)) {
      suppressions.push(...extractInlineSuppressions(specPath, filePath, content));
    }
  }

  return suppressions.sort(compareSuppressions);
}

function diffSuppressions(
  baseSuppressions: SuppressionRecord[],
  headSuppressions: SuppressionRecord[],
): Pick<
  SpecSuppressionReport,
  "newSuppressions" | "removedSuppressions" | "changedSuppressions" | "unchangedSuppressions"
> {
  const baseMap = new Map(
    baseSuppressions.map((suppression) => [suppressionIdentityKey(suppression), suppression]),
  );
  const headMap = new Map(
    headSuppressions.map((suppression) => [suppressionIdentityKey(suppression), suppression]),
  );

  const newSuppressions: SuppressionRecord[] = [];
  const removedSuppressions: SuppressionRecord[] = [];
  const changedSuppressions: SuppressionChange[] = [];
  const unchangedSuppressions: SuppressionRecord[] = [];

  for (const [identity, headSuppression] of headMap) {
    const baseSuppression = baseMap.get(identity);
    if (!baseSuppression) {
      newSuppressions.push(headSuppression);
      continue;
    }

    if (baseSuppression.justification !== headSuppression.justification) {
      changedSuppressions.push({ before: baseSuppression, after: headSuppression });
    } else {
      unchangedSuppressions.push(headSuppression);
    }
  }

  for (const [identity, baseSuppression] of baseMap) {
    if (!headMap.has(identity)) {
      removedSuppressions.push(baseSuppression);
    }
  }

  return {
    newSuppressions: newSuppressions.sort(compareSuppressions),
    removedSuppressions: removedSuppressions.sort(compareSuppressions),
    changedSuppressions: changedSuppressions.sort(compareChanges),
    unchangedSuppressions: unchangedSuppressions.sort(compareSuppressions),
  };
}

export async function analyzeTypeSpecSuppressions(
  options: AnalyzeSuppressionsOptions,
): Promise<SuppressionReport> {
  const cwd = options.cwd ?? process.cwd();
  const git = simpleGit(cwd);
  const repoRoot = normalizeRepoPath((await git.revparse(["--show-toplevel"])).trim());

  const specPaths = Array.from(
    new Set(
      options.specPaths
        .map((specPath) => toRepoRelativePath(repoRoot, specPath))
        .filter((specPath) => specPath.length > 0),
    ),
  ).sort((left, right) => left.localeCompare(right));

  const specReports: SpecSuppressionReport[] = [];

  for (const specPath of specPaths) {
    const [baseFiles, headFiles] = await Promise.all([
      listRevisionFiles(repoRoot, options.baseRevision, specPath),
      listRevisionFiles(repoRoot, options.headRevision, specPath),
    ]);

    const hasConfig = [...baseFiles, ...headFiles].some(
      (filePath) => path.posix.basename(filePath) === "tspconfig.yaml",
    );
    if (!hasConfig) {
      throw new Error(
        `Spec path '${specPath}' does not contain tspconfig.yaml in ${options.baseRevision} or ${options.headRevision}.`,
      );
    }

    const [baseSuppressions, headSuppressions] = await Promise.all([
      collectRevisionSuppressions(repoRoot, options.baseRevision, specPath),
      collectRevisionSuppressions(repoRoot, options.headRevision, specPath),
    ]);

    specReports.push({
      specPath,
      baseSuppressions,
      headSuppressions,
      ...diffSuppressions(baseSuppressions, headSuppressions),
    });
  }

  const newSuppressions = specReports
    .flatMap((spec) => spec.newSuppressions)
    .sort(compareSuppressions);
  const removedSuppressions = specReports
    .flatMap((spec) => spec.removedSuppressions)
    .sort(compareSuppressions);
  const changedSuppressions = specReports
    .flatMap((spec) => spec.changedSuppressions)
    .sort(compareChanges);

  const counts = {
    specs: specReports.length,
    base: specReports.reduce((total, spec) => total + spec.baseSuppressions.length, 0),
    head: specReports.reduce((total, spec) => total + spec.headSuppressions.length, 0),
    new: newSuppressions.length,
    removed: removedSuppressions.length,
    changed: changedSuppressions.length,
    unchanged: specReports.reduce((total, spec) => total + spec.unchangedSuppressions.length, 0),
  };

  return {
    repoRoot,
    baseRevision: options.baseRevision,
    headRevision: options.headRevision,
    specPaths,
    requiresApproval: newSuppressions.length > 0 || changedSuppressions.length > 0,
    counts,
    specs: specReports,
    newSuppressions,
    removedSuppressions,
    changedSuppressions,
  };
}
