import { execFileSync } from "node:child_process";

/**
 * Date of the last git commit that touched any of `paths`, for sitemap
 * <lastmod>. Runs at build time only (the sitemap is statically generated).
 *
 * Returns undefined when git history is unavailable, so the sitemap omits
 * lastmod rather than claiming every page changed at build time — Google
 * ignores lastmod values that are not consistently accurate.
 */
export function lastModified(paths: string[]): Date | undefined {
  try {
    const iso = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...paths], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return iso ? new Date(iso) : undefined;
  } catch {
    return undefined;
  }
}
