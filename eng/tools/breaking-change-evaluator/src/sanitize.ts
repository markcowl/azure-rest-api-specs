export function sanitizeLocalPathsInString(value: string, replacement = "<local-path>"): string {
  return value
    .replace(/file:\/\/\/(?:[A-Za-z]:[\\/]|\/?(?:Users|home)\/)[^'"\r\n;]*/g, replacement)
    .replace(/(?<![A-Za-z0-9+.-])[A-Za-z]:[\\/][^'"\r\n;]*/g, replacement)
    .replace(/\/(?:Users|home)\/[^'"\r\n;]*/g, replacement);
}

export function sanitizeLocalPaths(value: unknown, replacement = "<local-path>"): unknown {
  if (typeof value === "string") {
    return sanitizeLocalPathsInString(value, replacement);
  }
  if (Array.isArray(value)) {
    return value.map((child) => sanitizeLocalPaths(child, replacement));
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, sanitizeLocalPaths(child, replacement)]),
    );
  }
  return value;
}
