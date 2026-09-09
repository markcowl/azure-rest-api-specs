export interface CheckoutResult {
    /** Absolute path to the checked-out worktree root. */
    worktreePath: string;
    /**
     * Remove the worktree and its temporary directory. Callers MUST call this
     * (ideally in a `finally` block) once analysis of the checked-out revision
     * is complete.
     */
    cleanup: () => Promise<void>;
}
/**
 * Return the absolute path of the git repository's working-tree root for
 * `anyPathInRepo`, which may be a file or a directory.
 */
export declare function getRepoRoot(anyPathInRepo: string): Promise<string>;
/**
 * Resolve `commitish` (a SHA, branch, tag, or other git revision expression)
 * to a full commit SHA within the git repository containing `repoPath`.
 */
export declare function resolveCommitish(commitish: string, repoPath: string): Promise<string>;
export interface CheckoutOptions {
    /**
     * Repository-relative directory path(s) to materialize, in `git
     * sparse-checkout --cone` format (e.g. `"specification/widget"`). When
     * provided, only these paths (plus top-level repo files, per cone-mode
     * semantics) are written to disk — critical for large monorepos where a
     * full checkout of every file at the target revision would be far slower
     * than the analysis itself. When omitted, the entire repository is
     * checked out (fine for small repos, e.g. in tests).
     */
    sparsePaths?: string[];
}
/**
 * Check out `commitish` into an isolated, disposable git worktree so that a
 * base revision can be analyzed without mutating the caller's working tree
 * or index.
 *
 * This uses `git worktree add --detach`, which is safe to run alongside other
 * operations against the same repository — unlike an in-place
 * `git checkout <sha> -- <path>` (as CI workflows have historically done),
 * which mutates the shared working tree AND index for the affected path and
 * must be manually, carefully unwound afterward.
 *
 * By default `git worktree add` materializes every file in the repository at
 * `commitish`. For a large monorepo (e.g. azure-rest-api-specs, with tens of
 * thousands of spec files) that is prohibitively slow when only one spec
 * folder is actually needed. Pass `sparsePaths` to scope the checkout with
 * `git sparse-checkout --cone` so only the relevant folder(s) are written.
 *
 * @param commitish - Any git revision expression (SHA, branch, tag, etc.)
 * @param repoPath - Any path inside the git repository to check out from.
 * @param options - See {@link CheckoutOptions}.
 * @returns The worktree root path and a cleanup function. Callers MUST call
 *   `cleanup()` (ideally in a `finally` block) to remove the worktree,
 *   otherwise it will be left on disk as an orphaned temp directory and a
 *   registered git worktree.
 */
export declare function checkoutRevision(commitish: string, repoPath: string, options?: CheckoutOptions): Promise<CheckoutResult>;
/**
 * Given a path within a checked-out revision's worktree and the corresponding
 * path in the caller's original working tree (both must live in the same
 * repository), compute the equivalent path inside `worktreePath`.
 */
export declare function mapPathIntoWorktree(originalPath: string, repoPath: string, worktreePath: string): Promise<string>;
//# sourceMappingURL=git-checkout.d.ts.map