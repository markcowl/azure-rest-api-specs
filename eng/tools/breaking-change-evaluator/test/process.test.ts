import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { resolveExecutable, runProcess, treeKillCommands } from "../src/process.ts";

const temporaryDirectories: string[] = [];

afterEach(async () => {
  await Promise.all(
    temporaryDirectories
      .splice(0)
      .map((directory) => rm(directory, { recursive: true, force: true })),
  );
});

describe("process execution", () => {
  it("resolves a Windows CMD shim to its Node entry point without a shell", async () => {
    const directory = await mkdtemp(join(tmpdir(), "cmd-shim-"));
    temporaryDirectories.push(directory);
    const entry = join(directory, "shim.cjs");
    await writeFile(entry, "console.log(process.argv[2]);");
    await writeFile(
      join(directory, "corepack.cmd"),
      '@ECHO OFF\r\n"%~dp0\\node.exe" "%~dp0\\shim.cjs" %*\r\n',
    );
    const resolved = resolveExecutable(
      "corepack",
      { PATH: directory, PATHEXT: ".EXE;.CMD" },
      "win32",
    );
    expect(resolved.command).toBe(process.execPath);
    expect(resolved.prefixArgs).toEqual([entry]);
  });

  it("uses PID-scoped process-tree termination with forceful escalation", () => {
    expect(treeKillCommands(123, "win32")).toEqual({
      graceful: { command: "taskkill.exe", args: ["/PID", "123", "/T"] },
      forceful: { command: "taskkill.exe", args: ["/PID", "123", "/T", "/F"] },
    });
    expect(treeKillCommands(123, "linux")).toEqual({
      graceful: { command: "kill", args: ["-TERM", "-123"] },
      forceful: { command: "kill", args: ["-KILL", "-123"] },
    });
  });

  it("marks timed-out processes and terminates them", async () => {
    const result = await runProcess(process.execPath, ["-e", "setInterval(() => {}, 1000)"], {
      timeoutMs: 50,
      timeoutGraceMs: 50,
    });
    expect(result.timedOut).toBe(true);
    expect(result.code === null || result.code !== 0).toBe(true);
  });
});
