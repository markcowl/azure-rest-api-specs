import { createHash } from "node:crypto";
import { mkdir, readFile, rename, rm, stat, writeFile } from "node:fs/promises";
import { dirname, join, relative, sep } from "node:path";

export async function atomicWriteFile(path: string, content: string): Promise<void> {
  await mkdir(dirname(path), { recursive: true });
  const temporary = `${path}.${process.pid}.${Date.now()}.tmp`;
  await writeFile(temporary, content);
  await rename(temporary, path);
}

export async function replaceDirectory(
  target: string,
  files: Record<string, string>,
): Promise<void> {
  const staging = `${target}.${process.pid}.${Date.now()}.tmp`;
  const backup = `${target}.${process.pid}.${Date.now()}.bak`;
  await rm(staging, { recursive: true, force: true });
  try {
    await mkdir(staging, { recursive: true });
    for (const [name, content] of Object.entries(files)) {
      await writeFile(join(staging, name), content);
    }
    let hadTarget = false;
    try {
      hadTarget = (await stat(target)).isDirectory();
    } catch {
      // Target does not exist.
    }
    if (hadTarget) await rename(target, backup);
    try {
      await rename(staging, target);
    } catch (error) {
      if (hadTarget) await rename(backup, target);
      throw error;
    }
    await rm(backup, { recursive: true, force: true });
  } finally {
    await rm(staging, { recursive: true, force: true });
  }
}

export async function hashFiles(paths: string[], root: string): Promise<string> {
  const hash = createHash("sha256");
  for (const path of [...paths].sort()) {
    hash.update(relative(root, path).split(sep).join("/"));
    hash.update(await readFile(path));
  }
  return hash.digest("hex");
}
