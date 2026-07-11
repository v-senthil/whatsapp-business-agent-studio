// Server-side AI provider abstraction. Two implementations:
//   1. Claude Agent SDK — spawns the local Claude Code CLI. Works on any
//      machine that has `@anthropic-ai/claude-code` installed and the user
//      has run `claude` once to authenticate. No API key needed.
//   2. OpenAI-compatible — POST /chat/completions to any endpoint that
//      speaks that shape (OpenAI, Ollama, LM Studio, Together, etc.).

import type { SessionData } from "@/lib/session";

export interface AiConfig {
  provider: "claude" | "openai";
  baseUrl?: string;
  apiKey?: string;
  model?: string;
}

export interface AiError {
  code: "not_configured" | "not_installed" | "network" | "auth" | "invalid_response" | "runtime";
  message: string;
}

export class AiFailure extends Error {
  code: AiError["code"];
  constructor(err: AiError) {
    super(err.message);
    this.code = err.code;
  }
}

export function readAiConfig(session: SessionData): AiConfig | null {
  if (!session.aiProvider) return null;
  return {
    provider: session.aiProvider,
    baseUrl: session.aiBaseUrl,
    apiKey: session.aiApiKey,
    model: session.aiModel,
  };
}

// Runs a prompt against the configured provider and returns the assistant's
// full text response. Streaming is intentionally not exposed at this layer;
// the caller can stream if needed, but our current use case (skill drafting)
// is single-shot with a JSON output.
export async function runPrompt(config: AiConfig, prompt: string, system?: string): Promise<string> {
  if (config.provider === "claude") return runClaude(config, prompt, system);
  return runOpenAI(config, prompt, system);
}

// ---------------------------------------------------------------------------
// Claude Agent SDK — spawns the Claude Code CLI via child_process.
// The SDK npm package is optional (may not be installed on lightweight
// deployments), so we spawn the `claude` binary directly. -p is "print mode":
// non-interactive, prints the response to stdout, exits.
async function runClaude(config: AiConfig, prompt: string, system?: string): Promise<string> {
  const { spawn } = await import("node:child_process");
  const args = ["-p"];
  if (config.model) args.push("--model", config.model);
  if (system) args.push("--system-prompt", system);
  args.push(prompt);

  return await new Promise<string>((resolve, reject) => {
    let child;
    try {
      child = spawn("claude", args, { stdio: ["ignore", "pipe", "pipe"] });
    } catch (e) {
      reject(new AiFailure({
        code: "not_installed",
        message: `Could not spawn 'claude': ${(e as Error).message}. Install with npm i -g @anthropic-ai/claude-code and run 'claude' once to sign in.`,
      }));
      return;
    }

    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => { stdout += chunk.toString(); });
    child.stderr.on("data", (chunk) => { stderr += chunk.toString(); });
    child.on("error", (e: NodeJS.ErrnoException) => {
      if (e.code === "ENOENT") {
        reject(new AiFailure({
          code: "not_installed",
          message: "The 'claude' binary was not found on PATH. Install it with `npm i -g @anthropic-ai/claude-code` and run `claude` once to authenticate.",
        }));
      } else {
        reject(new AiFailure({ code: "runtime", message: e.message }));
      }
    });
    child.on("close", (code) => {
      if (code === 0) {
        resolve(stdout.trim());
      } else if (stderr.toLowerCase().includes("not authenticated") || stderr.toLowerCase().includes("login")) {
        reject(new AiFailure({
          code: "auth",
          message: "Claude Code is not signed in. Run `claude` interactively once to log in, then retry.",
        }));
      } else {
        reject(new AiFailure({
          code: "runtime",
          message: `claude exited with code ${code}: ${stderr.trim() || stdout.trim() || "no output"}`,
        }));
      }
    });
  });
}

// ---------------------------------------------------------------------------
// OpenAI-compatible provider.
async function runOpenAI(config: AiConfig, prompt: string, system?: string): Promise<string> {
  const baseUrl = (config.baseUrl ?? "").replace(/\/+$/, "");
  if (!baseUrl) throw new AiFailure({ code: "not_configured", message: "OpenAI base URL is missing." });
  if (!config.model) throw new AiFailure({ code: "not_configured", message: "OpenAI model is missing." });

  const messages: Array<{ role: "system" | "user"; content: string }> = [];
  if (system) messages.push({ role: "system", content: system });
  messages.push({ role: "user", content: prompt });

  let res: Response;
  try {
    res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(config.apiKey ? { authorization: `Bearer ${config.apiKey}` } : {}),
      },
      body: JSON.stringify({
        model: config.model,
        messages,
        temperature: 0.4,
        stream: false,
      }),
    });
  } catch (e) {
    throw new AiFailure({ code: "network", message: (e as Error).message });
  }

  if (res.status === 401 || res.status === 403) {
    throw new AiFailure({ code: "auth", message: `${res.status}: API key rejected by ${baseUrl}` });
  }
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new AiFailure({ code: "runtime", message: `HTTP ${res.status} from ${baseUrl}: ${text.slice(0, 500)}` });
  }

  let json: { choices?: Array<{ message?: { content?: string } }>; error?: { message?: string } };
  try {
    json = await res.json();
  } catch {
    throw new AiFailure({ code: "invalid_response", message: "Response was not valid JSON." });
  }
  const content = json.choices?.[0]?.message?.content;
  if (!content) {
    throw new AiFailure({ code: "invalid_response", message: json.error?.message ?? "No content in response." });
  }
  return content.trim();
}
