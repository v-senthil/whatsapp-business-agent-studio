import { NextResponse } from "next/server";
import { getDemoState, nextDemoId, type DemoState } from "./store";
import {
  demoEligibility,
  demoEvalCases,
  demoAgentReply,
} from "./fixtures";
import type { Skill } from "@/types/meta";
import type { Faq, KnowledgeWebsite, AllowlistEntry } from "@/types/knowledge";
import type { Connector } from "@/types/connector";
import type { Tool } from "@/types/tool";

function ok(body: unknown, status = 200) {
  return NextResponse.json(body, { status });
}
function notFound(detail = "Not found in demo") {
  return NextResponse.json({ title: "Not Found", detail }, { status: 404 });
}
function listResponse<T>(items: T[]) {
  return NextResponse.json(items);
}

async function readBody(req: Request): Promise<unknown> {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

// The catch-all proxy hands us the client-visible path (after `/api/meta/`).
// All routes except thread-control are shaped as [entityId, verb, ...rest].
export async function handleMetaDemo(
  req: Request,
  method: string,
  path: string[],
  search: string,
  sessionKey: string,
): Promise<Response> {
  const state = getDemoState(sessionKey);
  const params = new URLSearchParams(search);
  const body = method === "GET" || method === "HEAD" || method === "DELETE" ? {} : await readBody(req);

  // Thread control (fixed prefix, no leading entity_id).
  if (
    path.length >= 5 &&
    path[0] === "business" &&
    path[1] === "whatsapp" &&
    path[2] === "phone_numbers" &&
    path[4] === "thread_control"
  ) {
    return ok({ success: true });
  }

  const [entityId, verb, sub, sub2, sub3, sub4] = path;
  if (!entityId || !verb) return notFound("Demo router: unexpected path");

  if (verb === "agent_eligibility") return ok(demoEligibility);

  if (verb === "agent_onboarding" && method === "POST") {
    const existing = state.settings.find((s) => s.channel === "whatsapp");
    if (existing) return ok({ agent_id: existing.agent_id, already_onboarded: true });
    const agent_id = nextDemoId(state, "demo-agent");
    state.settings.push({
      agent_id,
      channel: "whatsapp",
      rollout: { enabled: false },
      handoff: { enabled: false, message: "" },
      followup: { enabled: false, followup_interval_in_seconds: 0, message: "" },
      ai_audience: "EVERYONE",
    });
    return ok({ agent_id });
  }

  if (verb === "delete_agent" && method === "DELETE") {
    const idx = state.settings.findIndex((s) => s.channel === "whatsapp");
    if (idx === -1) return ok({ deleted_agent_id: null });
    const [removed] = state.settings.splice(idx, 1);
    return ok({ deleted_agent_id: removed.agent_id });
  }

  if (verb === "agent_test" && method === "POST") {
    const b = body as { user_msg?: string; conversation_id?: string };
    const conversation_id = b.conversation_id ?? nextDemoId(state, "demo-conv");
    state.conversations.set(conversation_id, Date.now());
    const reply = demoAgentReply(b.user_msg ?? "");
    return ok({
      message_id: nextDemoId(state, "demo-msg"),
      agent_response: reply.agent_response,
      conversation_id,
      timestamp: Math.floor(Date.now() / 1000),
      handoff_reason: reply.handoff_reason,
      quick_replies: reply.quick_replies,
    });
  }

  if (verb === "agent_event") {
    if (method === "POST" && !sub) {
      const agent_event_id = nextDemoId(state, "demo-event");
      const now = new Date().toISOString();
      const b = body as { event?: { type?: string } };
      state.agentEvents.set(agent_event_id, {
        status: "processing",
        event_type: b.event?.type ?? "custom",
        created_at: now,
        updated_at: now,
      });
      const t = setTimeout(() => {
        const evt = state.agentEvents.get(agent_event_id);
        if (evt) {
          evt.status = "success";
          evt.updated_at = new Date().toISOString();
        }
      }, 6000);
      (t as { unref?: () => void }).unref?.();
      return ok({ status: "request_received", agent_event_id });
    }
    if (method === "GET" && sub) {
      const evt = state.agentEvents.get(sub);
      if (!evt) return notFound("Event not found");
      return ok(evt);
    }
  }

  if (verb === "agent-eval") {
    if (sub === "cases" && method === "GET") return ok({ eval_cases: demoEvalCases });
    if (sub === "run" && method === "POST") {
      const caseIds = (params.get("eval_case_ids") ?? "").split(",").filter(Boolean);
      const job_id = nextDemoId(state, "demo-eval-job");
      state.evalJobs.set(job_id, { job_id, status: "PENDING", startedAt: Date.now(), caseIds });
      return ok({ job_id, status: "PENDING" });
    }
    if (sub === "run" && method === "GET") {
      const job_id = params.get("job_id") ?? "";
      const job = state.evalJobs.get(job_id);
      if (!job) return notFound("Eval job not found");
      const elapsed = Date.now() - job.startedAt;
      if (elapsed < 6000) job.status = "PENDING";
      else if (elapsed < 12000) job.status = "RUNNING";
      else job.status = "SUCCEEDED";
      const done = job.status === "SUCCEEDED";
      return ok({
        job_id: job.job_id,
        status: job.status,
        eval_ids: done ? job.caseIds.map((c) => `${c}::result`) : [],
        summary_ids: done ? [`${job.job_id}::summary`] : [],
        progress: {
          total: job.caseIds.length,
          completed: done ? job.caseIds.length : job.status === "RUNNING" ? Math.max(1, Math.floor(job.caseIds.length / 2)) : 0,
        },
      });
    }
    if (sub === "details" && method === "GET") {
      const ids = (params.get("eval_ids") ?? "").split(",").filter(Boolean);
      return ok(ids.map((id) => ({
        id,
        case_id: id.replace("::result", ""),
        score: 1,
        passed: true,
        transcript: [
          { role: "user", content: "Sample user message from demo eval" },
          { role: "agent", content: "Sample agent response that satisfies the success criteria" },
        ],
        notes: "Demo eval — every case passes to show the UI in a healthy state.",
      })));
    }
    if (sub === "summary" && method === "GET") {
      const ids = (params.get("summary_ids") ?? "").split(",").filter(Boolean);
      return ok(ids.map((id) => ({
        id,
        totals: { passed: 4, failed: 0, total: 4 },
        insights: [
          "All demo cases pass. Try editing a skill and rerunning to see failures.",
          "Average latency: 1.1s.",
        ],
      })));
    }
  }

  if (verb === "agent_config") {
    if (sub === "settings") return settingsRoute(state, method, params, body);
    if (sub === "business_info") return businessInfoRoute(state, method, body);
    if (sub === "skills") {
      if (!sub2) return skillsListRoute(state, method, body);
      return skillItemRoute(state, method, sub2, body);
    }
    if (sub === "files") {
      if (!sub2) return filesListRoute(state, method, req);
      return fileItemRoute(state, method, sub2);
    }
    if (sub === "websites") {
      if (!sub2) return websitesListRoute(state, method, body);
      return websiteItemRoute(state, method, sub2, body);
    }
    if (sub === "faq") {
      if (!sub2) return faqListRoute(state, method, body);
      return faqItemRoute(state, method, sub2, body);
    }
    if (sub === "allowlist") {
      if (!sub2) return allowlistListRoute(state, method, body);
      return allowlistItemRoute(state, method, sub2);
    }
  }

  if (verb === "agent_connectors") {
    // sub = connectorId, sub2 = action ("tools" | "upsertApiKey" | "logs" | ...), sub3 = toolId, sub4 = "run"
    if (!sub) {
      if (method === "GET") return listResponse(Array.from(state.connectors.values()));
      if (method === "POST") return createConnector(state, body);
    } else if (!sub2) {
      const c = state.connectors.get(sub);
      if (method === "GET") return c ? ok(c) : notFound("Connector not found");
      if (method === "PUT") {
        if (!c) return notFound("Connector not found");
        const merged = { ...c, ...(body as object) } as Connector;
        state.connectors.set(sub, merged);
        return ok(merged);
      }
      if (method === "DELETE") {
        state.connectors.delete(sub);
        state.tools.delete(sub);
        return ok({ ok: true });
      }
    } else if (sub2 === "upsertApiKey" || sub2 === "upsertOAuth" || sub2 === "upsertCertificate") {
      const c = state.connectors.get(sub);
      if (c) c.connection_status = { status: "CONNECTED" };
      return ok({ ok: true });
    } else if (sub2 === "logs" && method === "GET") {
      return ok({
        data: [],
        stats: {
          start_count: 42,
          success_count: 41,
          exception_count: 1,
          success_rate: 0.976,
          avg_latency_s: 0.42,
          p95_latency_s: 0.9,
          p99_latency_s: 1.2,
          time_window_seconds: 86400,
        },
      });
    } else if (sub2 === "tools") {
      const tools = state.tools.get(sub) ?? new Map<string, Tool>();
      state.tools.set(sub, tools);
      if (!sub3) {
        if (method === "GET") return listResponse(Array.from(tools.values()));
        if (method === "POST") return createTool(state, tools, body);
      } else {
        const t = tools.get(sub3);
        if (sub4 === "run" && method === "POST") {
          if (!t) return notFound("Tool not found");
          return ok({
            status: "ok",
            output: { message: "Demo tool executed successfully.", input_echo: body },
          });
        }
        if (!t) return notFound("Tool not found");
        if (method === "GET") return ok(t);
        if (method === "PUT") {
          const merged = { ...t, ...(body as object) };
          tools.set(sub3, merged);
          return ok(merged);
        }
        if (method === "DELETE") {
          tools.delete(sub3);
          return ok({ ok: true });
        }
      }
    }
  }

  return notFound(`Demo router: no handler for ${method} ${path.join("/")}`);
}

// ---------- helpers ----------

function settingsRoute(state: DemoState, method: string, params: URLSearchParams, body: unknown) {
  if (method === "GET") return listResponse(state.settings);
  if (method === "PUT") {
    const patch = (body ?? {}) as Partial<DemoState["settings"][number]>;
    const agentId = params.get("agent_id");
    const target = agentId
      ? state.settings.find((s) => s.agent_id === agentId)
      : state.settings.find((s) => s.channel === "whatsapp");
    if (!target) return notFound("No agent configured");
    if (patch.rollout) target.rollout = { ...target.rollout, ...patch.rollout };
    if (patch.handoff) target.handoff = { ...target.handoff, ...patch.handoff };
    if (patch.followup) target.followup = { ...target.followup, ...patch.followup };
    if (patch.ai_audience) target.ai_audience = patch.ai_audience;
    return ok(target);
  }
  return notFound();
}

function businessInfoRoute(state: DemoState, method: string, body: unknown) {
  if (method === "GET") return ok(state.businessInfo);
  if (method === "PUT") {
    state.businessInfo = { ...state.businessInfo, ...(body as object) };
    return ok(state.businessInfo);
  }
  if (method === "DELETE") {
    state.businessInfo = {};
    return ok({ ok: true });
  }
  return notFound();
}

function skillsListRoute(state: DemoState, method: string, body: unknown) {
  if (method === "GET") return listResponse(Array.from(state.skills.values()));
  if (method === "POST") {
    const b = body as Partial<Skill>;
    const id = nextDemoId(state, "demo-skill");
    const created: Skill = {
      id,
      title: b.title ?? "untitled-skill",
      description: b.description ?? "",
      skill: b.skill ?? "",
      channel: b.channel ?? "whatsapp",
      created_at: Math.floor(Date.now() / 1000),
      metadata: b.metadata,
    };
    state.skills.set(id, created);
    return ok(created, 201);
  }
  return notFound();
}

function skillItemRoute(state: DemoState, method: string, id: string, body: unknown) {
  if (method === "GET") {
    const s = state.skills.get(id);
    return s ? ok(s) : notFound("Skill not found");
  }
  if (method === "PUT") {
    const existing = state.skills.get(id);
    if (!existing) return notFound("Skill not found");
    const merged = { ...existing, ...(body as object) } as Skill;
    state.skills.set(id, merged);
    return ok(merged);
  }
  if (method === "DELETE") {
    state.skills.delete(id);
    return ok({ ok: true });
  }
  return notFound();
}

function filesListRoute(state: DemoState, method: string, req: Request) {
  if (method === "GET") return listResponse(Array.from(state.files.values()));
  if (method === "POST") {
    const id = nextDemoId(state, "demo-file");
    const contentType = req.headers.get("content-type") ?? "";
    const disposition = req.headers.get("content-disposition") ?? "";
    const nameMatch = /filename="([^"]+)"/.exec(disposition);
    const created = {
      id,
      file_name: nameMatch?.[1] ?? "uploaded.txt",
      size: 0,
      status: "READY",
      content_type: contentType.split(";")[0] || "application/octet-stream",
      created_at: Math.floor(Date.now() / 1000),
    };
    state.files.set(id, created);
    return ok(created, 201);
  }
  return notFound();
}

function fileItemRoute(state: DemoState, method: string, id: string) {
  if (method === "DELETE") {
    state.files.delete(id);
    return ok({ ok: true });
  }
  return notFound();
}

function websitesListRoute(state: DemoState, method: string, body: unknown) {
  if (method === "GET") return listResponse(Array.from(state.websites.values()));
  if (method === "POST") {
    const b = body as { url?: string };
    const id = nextDemoId(state, "demo-web");
    const created: KnowledgeWebsite = {
      id,
      url: b.url ?? "https://example.com",
      status: "READY",
      last_crawled_at: Math.floor(Date.now() / 1000),
    };
    state.websites.set(id, created);
    return ok(created, 201);
  }
  return notFound();
}

function websiteItemRoute(state: DemoState, method: string, id: string, body: unknown) {
  if (method === "PUT") {
    const existing = state.websites.get(id);
    if (!existing) return notFound("Website not found");
    const b = body as { url?: string };
    const merged = { ...existing, url: b.url ?? existing.url };
    state.websites.set(id, merged);
    return ok(merged);
  }
  if (method === "DELETE") {
    state.websites.delete(id);
    return ok({ ok: true });
  }
  return notFound();
}

function faqListRoute(state: DemoState, method: string, body: unknown) {
  if (method === "GET") return listResponse(Array.from(state.faqs.values()));
  if (method === "POST") {
    const b = body as Omit<Faq, "id">;
    const id = nextDemoId(state, "demo-faq");
    const created: Faq = { id, question: b.question ?? "", answer: b.answer ?? "", metadata: b.metadata };
    state.faqs.set(id, created);
    return ok(created, 201);
  }
  return notFound();
}

function faqItemRoute(state: DemoState, method: string, id: string, body: unknown) {
  if (method === "PUT") {
    const existing = state.faqs.get(id);
    if (!existing) return notFound("FAQ not found");
    const merged = { ...existing, ...(body as object) };
    state.faqs.set(id, merged);
    return ok(merged);
  }
  if (method === "DELETE") {
    state.faqs.delete(id);
    return ok({ ok: true });
  }
  return notFound();
}

function allowlistListRoute(state: DemoState, method: string, body: unknown) {
  if (method === "GET") return listResponse(Array.from(state.allowlist.values()));
  if (method === "POST") {
    const b = body as { consumer_phone_number?: string };
    const id = nextDemoId(state, "demo-allow");
    const created: AllowlistEntry = {
      id,
      consumer_phone_number: b.consumer_phone_number ?? "+10000000000",
    };
    state.allowlist.set(id, created);
    return ok(created, 201);
  }
  return notFound();
}

function allowlistItemRoute(state: DemoState, method: string, id: string) {
  if (method === "DELETE") {
    state.allowlist.delete(id);
    return ok({ ok: true });
  }
  return notFound();
}

function createConnector(state: DemoState, body: unknown) {
  const b = body as Partial<Connector>;
  const id = nextDemoId(state, "demo-connector");
  const created: Connector = {
    id,
    name: b.name ?? "Untitled connector",
    description: b.description ?? "",
    base_url: b.base_url ?? "https://example.com",
    auth_type: b.auth_type ?? "API_KEY",
    auth_config: b.auth_config,
    mtls_config: b.mtls_config,
    user_auth_injection_config: b.user_auth_injection_config,
    connection_status: { status: "CONNECTED" },
  };
  state.connectors.set(id, created);
  state.tools.set(id, new Map());
  return ok(created, 201);
}

function createTool(state: DemoState, tools: Map<string, Tool>, body: unknown) {
  const b = body as Partial<Tool>;
  const id = nextDemoId(state, "demo-tool");
  const created: Tool = {
    id,
    name: b.name ?? "untitled_tool",
    description: b.description ?? "",
    request_definition: b.request_definition ?? {
      method: "GET",
      path: "/",
      path_parameters: {},
      query_parameters: {},
      headers: {},
    },
    user_auth_required: b.user_auth_required,
    user_auth_action_config: b.user_auth_action_config,
  };
  tools.set(id, created);
  return ok(created, 201);
}

// ---------- Graph API discovery ----------

export function handleGraphWabas(): Response {
  return ok({ data: [{ id: "demo-waba", name: "Nimbus Coffee Roasters (demo)" }] });
}

export function handleGraphPhones(): Response {
  return ok({
    data: [
      {
        id: "demo-phone-1",
        display_phone_number: "+1 555 010 0001",
        verified_name: "Nimbus Coffee",
        quality_rating: "GREEN",
      },
      {
        id: "demo-phone-2",
        display_phone_number: "+1 555 010 0002",
        verified_name: "Nimbus Coffee Support",
        quality_rating: "YELLOW",
      },
    ],
  });
}

export function handleGraphPhone(phoneId: string): Response {
  const details =
    phoneId === "demo-phone-2"
      ? { display_phone_number: "+1 555 010 0002", verified_name: "Nimbus Coffee Support", quality_rating: "YELLOW" }
      : { display_phone_number: "+1 555 010 0001", verified_name: "Nimbus Coffee", quality_rating: "GREEN" };
  return ok({
    id: phoneId,
    ...details,
    whatsapp_business_account: { id: "demo-waba", name: "Nimbus Coffee Roasters (demo)" },
  });
}
