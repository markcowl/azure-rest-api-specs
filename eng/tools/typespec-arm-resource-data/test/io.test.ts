import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { replaceDirectory } from "../src/io.ts";

const folders: string[] = [];

afterEach(async () => {
  await Promise.all(
    folders.splice(0).map((folder) => rm(folder, { recursive: true, force: true })),
  );
});

describe("atomic project output", () => {
  it("replaces the complete prior report directory", async () => {
    const root = await mkdtemp(join(import.meta.dirname, "atomic-"));
    folders.push(root);
    const output = join(root, "resource-data");
    await mkdir(output);
    await writeFile(join(output, "errors.md"), "stale failure");

    await replaceDirectory(output, {
      "resources.csv": "resourceKey\n",
      "status.json": "{}\n",
    });

    expect(await readFile(join(output, "resources.csv"), "utf8")).toBe("resourceKey\n");
    await expect(readFile(join(output, "errors.md"), "utf8")).rejects.toThrow();
  });

  it("preserves existing output and removes staging files when staging fails", async () => {
    const root = await mkdtemp(join(import.meta.dirname, "atomic-failure-"));
    folders.push(root);
    const output = join(root, "resource-data");
    await mkdir(output);
    await writeFile(join(output, "status.json"), "old\n");

    await expect(
      replaceDirectory(output, {
        "missing/status.json": "new\n",
      }),
    ).rejects.toThrow();

    expect(await readFile(join(output, "status.json"), "utf8")).toBe("old\n");
    expect((await readdir(root)).filter((name) => name.includes(".tmp"))).toEqual([]);
  });
});
