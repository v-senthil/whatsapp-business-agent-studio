// SSRF guard for user-supplied URLs (currently only the AI base URL). Every
// AI endpoint the user configures gets its host resolved and screened against
// loopback, private IPv4, IPv6 link-local/ULA, and known cloud metadata hosts
// before we open a connection. Node's fetch honors DNS at connect time, so we
// do the lookup ourselves and pass the parsed URL back to the caller.

import { lookup } from "node:dns/promises";
import net from "node:net";

export type UrlGuardResult =
  | { ok: true; url: URL }
  | { ok: false; reason: string };

const BLOCKED_HOSTNAMES = new Set([
  "localhost",
  "ip6-localhost",
  "ip6-loopback",
  "metadata.google.internal",
  "metadata.aws.internal",
  "metadata",
]);

// Small TTL cache keyed by hostname so a rapid burst of AI calls does not
// re-resolve on every request. 10s is short enough that a hostile DNS rebind
// still gets caught on the next call.
const CACHE_TTL_MS = 10_000;
const resolveCache = new Map<string, { at: number; addresses: string[] }>();

async function resolveAll(hostname: string): Promise<string[]> {
  const cached = resolveCache.get(hostname);
  const now = Date.now();
  if (cached && now - cached.at < CACHE_TTL_MS) return cached.addresses;
  const results = await lookup(hostname, { all: true });
  const addresses = results.map((r) => r.address);
  resolveCache.set(hostname, { at: now, addresses });
  return addresses;
}

function isPrivateOrLoopbackAddress(addr: string): boolean {
  const family = net.isIP(addr);
  if (family === 4) return isPrivateIPv4(addr);
  if (family === 6) return isPrivateIPv6(addr);
  // Unrecognized shape, refuse rather than allow through.
  return true;
}

function isPrivateIPv4(addr: string): boolean {
  const parts = addr.split(".").map((n) => Number(n));
  if (parts.length !== 4 || parts.some((n) => Number.isNaN(n) || n < 0 || n > 255)) return true;
  const [a, b] = parts as [number, number, number, number];
  if (a === 0) return true; // 0.0.0.0/8
  if (a === 10) return true; // 10.0.0.0/8
  if (a === 127) return true; // loopback
  if (a === 169 && b === 254) return true; // link-local
  if (a === 172 && b >= 16 && b <= 31) return true; // 172.16.0.0/12
  if (a === 192 && b === 168) return true; // 192.168.0.0/16
  if (a === 100 && b >= 64 && b <= 127) return true; // CGNAT 100.64.0.0/10
  if (a >= 224) return true; // multicast + reserved
  return false;
}

function isPrivateIPv6(addr: string): boolean {
  const lower = addr.toLowerCase();
  if (lower === "::" || lower === "::1") return true;
  // Link-local fe80::/10
  if (lower.startsWith("fe8") || lower.startsWith("fe9") || lower.startsWith("fea") || lower.startsWith("feb")) return true;
  // Unique local fc00::/7
  if (lower.startsWith("fc") || lower.startsWith("fd")) return true;
  // IPv4-mapped: ::ffff:a.b.c.d, screen the embedded v4 too.
  const mapped = lower.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/);
  if (mapped) return isPrivateIPv4(mapped[1]);
  return false;
}

export async function validatePublicHttpUrl(input: string): Promise<UrlGuardResult> {
  if (!input || typeof input !== "string") {
    return { ok: false, reason: "URL is empty" };
  }
  let url: URL;
  try {
    url = new URL(input);
  } catch {
    return { ok: false, reason: "Not a valid URL" };
  }
  const isProduction = process.env.NODE_ENV === "production";
  if (url.protocol !== "https:" && !(url.protocol === "http:" && !isProduction)) {
    return { ok: false, reason: "Only https URLs are allowed in production" };
  }
  const hostname = url.hostname.toLowerCase();
  if (!hostname) return { ok: false, reason: "URL has no host" };
  if (BLOCKED_HOSTNAMES.has(hostname)) {
    return { ok: false, reason: "Host is not reachable" };
  }
  // If the hostname is already a literal IP, check it directly. Otherwise
  // resolve DNS and check every returned address.
  if (net.isIP(hostname)) {
    if (isPrivateOrLoopbackAddress(hostname)) {
      return { ok: false, reason: "Host is not reachable" };
    }
    return { ok: true, url };
  }
  let addresses: string[];
  try {
    addresses = await resolveAll(hostname);
  } catch {
    return { ok: false, reason: "DNS lookup failed" };
  }
  if (addresses.length === 0) return { ok: false, reason: "DNS returned no addresses" };
  for (const a of addresses) {
    if (isPrivateOrLoopbackAddress(a)) {
      return { ok: false, reason: "Host is not reachable" };
    }
  }
  return { ok: true, url };
}

// Handy JSON body for API routes when validation fails. Never echoes the
// resolved IP or the raw reason to the caller.
export const URL_GUARD_ERROR = {
  title: "Invalid AI endpoint",
  detail: "Cannot reach private, loopback, or link-local hosts",
} as const;
