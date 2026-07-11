import { Check, CheckCheck } from "lucide-react";
import { Logo } from "@/components/common/Logo";

export function HeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="absolute -inset-x-8 -top-8 -bottom-8 -z-10 rounded-[2rem] bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 blur-2xl" />

      <div className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card/70 p-3 shadow-2xl shadow-black/5 backdrop-blur lg:grid-cols-5">
        <StudioMock />
        <ChatMock />
      </div>
    </div>
  );
}

function StudioMock() {
  return (
    <div className="col-span-1 overflow-hidden rounded-xl border border-border bg-background lg:col-span-3">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-[11px] text-muted-foreground">
          agent-studio · /dashboard/{"{"}entityId{"}"}/skills
        </span>
      </div>
      <div className="grid grid-cols-[160px_1fr]">
        <aside className="hidden border-r border-border bg-muted/30 p-3 text-[11px] sm:block">
          <div className="mb-2 px-2 text-muted-foreground">Configure</div>
          <ul className="space-y-1">
            {[
              "Overview",
              "Onboarding",
              "Settings",
              "Business info",
              "Skills",
              "Knowledge",
              "Connectors",
            ].map((item, i) => (
              <li
                key={item}
                className={
                  i === 4
                    ? "rounded-md bg-emerald-500/10 px-2 py-1 font-medium text-emerald-700 dark:text-emerald-400"
                    : "px-2 py-1 text-muted-foreground"
                }
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-3 mb-2 px-2 text-muted-foreground">Ship</div>
          <ul className="space-y-1">
            {["Test chat", "Evals", "Scenarios", "Playground"].map((item) => (
              <li key={item} className="px-2 py-1 text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </aside>

        <div className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Skills</div>
              <div className="text-[11px] text-muted-foreground">
                12 skills · 4 templates available
              </div>
            </div>
            <div className="flex gap-1.5">
              <span className="rounded-md border border-border bg-background px-2 py-1 text-[11px]">
                Templates
              </span>
              <span className="rounded-md border border-border bg-background px-2 py-1 text-[11px]">
                Import CSV
              </span>
              <span className="rounded-md bg-primary px-2 py-1 text-[11px] text-primary-foreground">
                New skill
              </span>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { title: "greeting", body: "Welcome the customer and offer help." },
              { title: "order-status", body: "Look up an order by ID and return shipping." },
              { title: "handoff-to-human", body: "When frustrated, request a human agent." },
              { title: "refund-request", body: "Validate against refund policy, then file." },
            ].map((s) => (
              <div
                key={s.title}
                className="flex items-center justify-between rounded-md border border-border bg-background p-2.5"
              >
                <div className="min-w-0">
                  <div className="truncate font-mono text-[11px] text-foreground">{s.title}</div>
                  <div className="truncate text-[11px] text-muted-foreground">{s.body}</div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-700 dark:text-emerald-400">
                  <Check className="h-3 w-3" /> live
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatMock() {
  return (
    <div className="col-span-1 overflow-hidden rounded-xl border border-border bg-[#e5ded8] shadow-inner dark:bg-[#0e1a17] lg:col-span-2">
      <div className="flex items-center gap-2 bg-emerald-700 px-3 py-2 text-white">
        <Logo size={28} className="rounded-md" />
        <div className="min-w-0">
          <div className="truncate text-xs font-semibold">Acme Support</div>
          <div className="text-[10px] text-white/70">online · agent connected</div>
        </div>
      </div>
      <div className="h-[360px] space-y-2 overflow-hidden p-3">
        <ChatBubble side="in">Hi, order #A-4291 still hasn't shipped.</ChatBubble>
        <ChatBubble side="out">
          Checking that now, one moment.
          <div className="mt-1 text-[10px] text-emerald-800/70">order-status · called</div>
        </ChatBubble>
        <ChatBubble side="out">
          Your package is in transit and scheduled to arrive Friday. Want tracking?
        </ChatBubble>
        <ChatBubble side="in">Yes please, and can I change the address?</ChatBubble>
        <ChatBubble side="out">
          I can update the address if the order hasn't left the warehouse.
          <div className="mt-1 text-[10px] text-emerald-800/70">update-address · tool</div>
        </ChatBubble>
      </div>
    </div>
  );
}

function ChatBubble({ side, children }: { side: "in" | "out"; children: React.ReactNode }) {
  const outbound = side === "out";
  return (
    <div className={outbound ? "flex justify-end" : "flex justify-start"}>
      {/*
        Marketing chat mock intentionally hard-codes WhatsApp's bubble colors
        (bg-white for inbound, #dcf8c6 for outbound) since the whole point is
        to mimic the real client. Not a semantic-token violation, exempted
        from the "no raw bg-white in feature code" rule in CLAUDE.md.
      */}
      <div
        className={
          outbound
            ? "max-w-[85%] rounded-lg rounded-br-sm bg-[#dcf8c6] px-2.5 py-1.5 text-[12px] text-neutral-800 shadow-sm dark:bg-emerald-900/60 dark:text-emerald-50"
            : "max-w-[85%] rounded-lg rounded-bl-sm bg-white px-2.5 py-1.5 text-[12px] text-neutral-800 shadow-sm dark:bg-neutral-800 dark:text-neutral-100"
        }
      >
        {children}
        {outbound ? (
          <div className="mt-0.5 flex justify-end">
            <CheckCheck className="h-3 w-3 text-sky-500" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
