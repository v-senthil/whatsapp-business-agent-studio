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
  readOnly?: boolean;
  // AI-assist config — used server-side to route drafting requests.
  aiProvider?: AiProvider;
  aiBaseUrl?: string;    // OpenAI-compat only, e.g. https://api.openai.com/v1 or http://localhost:11434/v1
  aiApiKey?: string;     // OpenAI-compat only. Kept server-side; never returned to browser.
  aiModel?: string;      // e.g. "gpt-4o-mini", "llama3.1", or a Claude model
}

export const sessionOptions: SessionOptions = {
  password: env.SESSION_SECRET,
  cookieName: "wabiz_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  },
};

export async function getSession() {
  const cookieStore = await cookies();
  return getIronSession<SessionData>(cookieStore, sessionOptions);
}
