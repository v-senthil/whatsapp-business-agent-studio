export interface MetaApiErrorShape {
  title: string;
  detail: string;
  type?: string;
  status?: number;
}

export class MetaApiError extends Error {
  status: number;
  title: string;
  detail: string;
  type?: string;
  constructor(status: number, body: MetaApiErrorShape) {
    super(`${body.title}: ${body.detail}`);
    this.name = "MetaApiError";
    this.status = status;
    this.title = body.title;
    this.detail = body.detail;
    this.type = body.type;
  }
}

export function isTosNotAccepted(err: unknown): err is MetaApiError {
  if (!(err instanceof MetaApiError)) return false;
  if (err.status !== 403) return false;
  const detail = err.detail?.toLowerCase() ?? "";
  return (
    detail.includes("meta business ai terms") ||
    detail.includes("terms of service must be accepted")
  );
}

export async function parseErrorBody(res: Response): Promise<MetaApiErrorShape> {
  const text = await res.text();
  if (!text) {
    return { title: `HTTP ${res.status}`, detail: res.statusText, status: res.status };
  }
  try {
    const parsed = JSON.parse(text);
    if (parsed && typeof parsed === "object" && "title" in parsed) {
      return parsed as MetaApiErrorShape;
    }
    if (parsed?.error?.message) {
      return { title: parsed.error.type ?? "Graph API error", detail: parsed.error.message, status: res.status };
    }
    return { title: `HTTP ${res.status}`, detail: text.slice(0, 500), status: res.status };
  } catch {
    return { title: `HTTP ${res.status}`, detail: text.slice(0, 500), status: res.status };
  }
}
