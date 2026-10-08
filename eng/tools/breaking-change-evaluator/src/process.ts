import { spawn } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, extname, isAbsolute, join, resolve } from "node:path";

export interface ProcessResult {
  code: number | null;
  signal: NodeJS.Signals | null;
  stdout: string;
  stderr: string;
  timedOut: boolean;
}

export interface ResolvedExecutable {
  command: string;
  prefixArgs: string[];
}

export interface TreeKillCommand {
  command: string;
  args: string[];
}

function pathCandidates(
  command: string,
  env: NodeJS.ProcessEnv,
  platform: NodeJS.Platform,
): string[] {
  if (isAbsolute(command) || command.includes("\\") || command.includes("/")) {
    return [resolve(command)];
  }
  if (!/^[A-Za-z0-9._-]+$/.test(command)) {
    throw new Error(`Refusing to resolve unsafe executable name '${command}'`);
  }
  const extensions = (env.PATHEXT ?? ".COM;.EXE;.CMD;.BAT")
    .split(";")
    .filter(Boolean)
    .map((extension) => extension.toLowerCase());
  return (env.PATH ?? "")
    .split(platform === "win32" ? ";" : ":")
    .filter(Boolean)
    .flatMap((directory) => {
      if (extname(command)) return [join(directory, command)];
      return extensions.map((extension) => join(directory, `${command}${extension}`));
    });
}

function resolveCmdShim(shimPath: string): ResolvedExecutable {
  const content = readFileSync(shimPath, "utf8");
  const relativeEntry = content.match(/%~dp0[\\/]([^"\r\n]*?\.(?:c?js|mjs))(?=["\s])/i)?.[1];
  if (!relativeEntry) {
    throw new Error(`Cannot safely resolve command shim '${shimPath}' without a shell`);
  }
  const entry = resolve(dirname(shimPath), relativeEntry.replaceAll("\\", "/"));
  if (!existsSync(entry)) {
    throw new Error(`Command shim '${shimPath}' points to missing entry '${entry}'`);
  }
  const localNode = join(dirname(shimPath), "node.exe");
  return {
    command: existsSync(localNode) ? localNode : process.execPath,
    prefixArgs: [entry],
  };
}

export function resolveExecutable(
  command: string,
  env: NodeJS.ProcessEnv = process.env,
  platform: NodeJS.Platform = process.platform,
): ResolvedExecutable {
  if (platform !== "win32") return { command, prefixArgs: [] };
  const candidate = pathCandidates(command, env, platform).find(existsSync);
  if (!candidate) return { command, prefixArgs: [] };
  const extension = extname(candidate).toLowerCase();
  if (extension === ".cmd" || extension === ".bat") return resolveCmdShim(candidate);
  return { command: candidate, prefixArgs: [] };
}

export function treeKillCommands(
  pid: number,
  platform: NodeJS.Platform = process.platform,
): { graceful: TreeKillCommand; forceful: TreeKillCommand } {
  if (platform === "win32") {
    return {
      graceful: { command: "taskkill.exe", args: ["/PID", String(pid), "/T"] },
      forceful: { command: "taskkill.exe", args: ["/PID", String(pid), "/T", "/F"] },
    };
  }
  return {
    graceful: { command: "kill", args: ["-TERM", String(-pid)] },
    forceful: { command: "kill", args: ["-KILL", String(-pid)] },
  };
}

function issueTreeKill(command: TreeKillCommand, platform: NodeJS.Platform): void {
  if (platform === "win32") {
    const killer = spawn(command.command, command.args, {
      shell: false,
      stdio: "ignore",
      windowsHide: true,
    });
    killer.unref();
    return;
  }
  const signal = command.args[0] === "-TERM" ? "SIGTERM" : "SIGKILL";
  try {
    process.kill(Number(command.args[1]), signal);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== "ESRCH") throw error;
  }
}

export async function runProcess(
  command: string,
  args: string[],
  options: {
    cwd?: string;
    timeoutMs?: number;
    timeoutGraceMs?: number;
    env?: NodeJS.ProcessEnv;
  } = {},
): Promise<ProcessResult> {
  return new Promise((resolve, reject) => {
    const platform = process.platform;
    const executable = resolveExecutable(command, options.env, platform);
    const child = spawn(executable.command, [...executable.prefixArgs, ...args], {
      cwd: options.cwd,
      env: options.env ?? process.env,
      shell: false,
      stdio: ["ignore", "pipe", "pipe"],
      detached: platform !== "win32",
      windowsHide: true,
    });
    const stdout: Buffer[] = [];
    const stderr: Buffer[] = [];
    let timedOut = false;
    let escalationTimer: NodeJS.Timeout | undefined;
    const timer = options.timeoutMs
      ? setTimeout(() => {
          timedOut = true;
          if (!child.pid) return;
          const commands = treeKillCommands(child.pid, platform);
          issueTreeKill(commands.graceful, platform);
          escalationTimer = setTimeout(
            () => issueTreeKill(commands.forceful, platform),
            options.timeoutGraceMs ?? 2_000,
          );
        }, options.timeoutMs)
      : undefined;
    child.stdout.on("data", (chunk: Buffer) => stdout.push(chunk));
    child.stderr.on("data", (chunk: Buffer) => stderr.push(chunk));
    child.on("error", reject);
    child.on("close", (code, signal) => {
      if (timer) clearTimeout(timer);
      if (escalationTimer) clearTimeout(escalationTimer);
      resolve({
        code,
        signal,
        stdout: Buffer.concat(stdout).toString("utf8"),
        stderr: Buffer.concat(stderr).toString("utf8"),
        timedOut,
      });
    });
  });
}
