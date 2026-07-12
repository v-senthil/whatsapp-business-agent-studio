import { cookies } from "next/headers";
import { getIronSession, type SessionOptions } from "iron-session";
import { env } from "@/lib/env";

export type AiProvider = "claude" | "openai";

export interface SessionData {
  token?: string;
  userId?: string;
  userName?: string;
  lastEntityId?: string;
  lastBusinessId?: string;
  lastWabaId?: string;
  readOnly?: boolean;
  // AI-assist config — used server-side to route drafting requests.
  aiProvider?: AiProvider;
  aiBaseUrl?: string;    // OpenAI-compat only, e.g. https://api.openai.com/v1 or http://localhost:11434/v1
  aiApiKey?: string;     // OpenAI-compat only. Kept server-side; never returned to browser.
  aiModel?: string;      // e.g. "gpt-4o-mini", "llama3.1", or a Claude model
}

// Default session lifetime: 8 hours. Operators can override by setting
// WABIZ_SESSION_TTL_SECONDS on the deploy environment.
const DEFAULT_TTL_SECONDS = 60 * 60 * 8;
const ttl = Number(process.env.WABIZ_SESSION_TTL_SECONDS ?? DEFAULT_TTL_SECONDS);
const sessionTtl = Number.isFinite(ttl) && ttl > 0 ? Math.floor(ttl) : DEFAULT_TTL_SECONDS;

export const sessionOptions: SessionOptions = {
  password: env.SESSION_SECRET,
  cookieName: "wabiz_session",
  ttl: sessionTtl,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: sessionTtl,
  },
};

export async function getSession() {
  const cookieStore = await cookies();
  return getIronSession<SessionData>(cookieStore, sessionOptions);
}
