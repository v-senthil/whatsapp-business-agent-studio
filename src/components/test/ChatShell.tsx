"use client";
import * as React from "react";
import { AlertTriangle, RefreshCw, Send } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils/cn";
import { useAgentTest } from "@/lib/client/hooks/useAgentTest";
import type { AgentTestResponse } from "@/types/eval";

interface Msg {
  role: "user" | "agent";
  text: string;
  quick_replies?: string[];
  handoff_reason?: string;
  ts: number;
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1" aria-label="Agent is typing">
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
    </span>
  );
}

export function ChatShell({ entityId }: { entityId: string }) {
  const [messages, setMessages] = React.useState<Msg[]>([]);
  const [input, setInput] = React.useState("");
  const [conversationId, setConversationId] = React.useState<string | undefined>(undefined);
  const [dismissedHandoff, setDismissedHandoff] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const endRef = React.useRef<HTMLDivElement>(null);
  const send = useAgentTest(entityId);

  React.useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length, send.isPending]);

  async function submit(text?: string) {
    const body = (text ?? input).trim();
    if (!body || send.isPending) return;
    setInput("");
    setDismissedHandoff(false);
    setMessages((m) => [...m, { role: "user", text: body, ts: Date.now() }]);
    try {
      const resp: AgentTestResponse = await send.mutateAsync({ user_msg: body, conversation_id: conversationId });
      if (!conversationId && resp.conversation_id) setConversationId(resp.conversation_id);
      setMessages((m) => [
        ...m,
        {
          role: "agent",
          text: resp.agent_response ?? "(no response)",
          quick_replies: resp.quick_replies,
          handoff_reason: resp.handoff_reason,
          ts: (resp.timestamp ?? Date.now() / 1000) * 1000,
        },
      ]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        { role: "agent", text: `Error: ${err instanceof Error ? err.message : String(err)}`, ts: Date.now() },
      ]);
    }
  }

  const lastAgent = [...messages].reverse().find((m) => m.role === "agent");
  const showHandoff = !dismissedHandoff && !send.isPending && lastAgent?.handoff_reason;

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <Badge variant="outline" className="max-w-[280px] truncate font-mono" title={conversationId ?? "new conversation"}>
          {conversationId ?? "new conversation"}
        </Badge>
        {conversationId && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setConversationId(undefined);
              setMessages([]);
              setDismissedHandoff(false);
            }}
          >
            <RefreshCw className="h-3 w-3" /> New conversation
          </Button>
        )}
      </div>

      <Card className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto">
          <div className="space-y-4 p-4">
            {messages.length === 0 && !send.isPending && (
              <div className="mt-16 text-center text-sm text-muted-foreground">Say hi to your agent</div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[75%] rounded-2xl px-3 py-2 text-sm",
                    m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                  )}
                >
                  <div className="whitespace-pre-wrap">{m.text}</div>
                  {m.quick_replies && m.quick_replies.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {m.quick_replies.map((q, j) => (
                        <Badge
                          key={j}
                          variant="outline"
                          className="cursor-pointer bg-background hover:bg-accent"
                          onClick={() => submit(q)}
                        >
                          {q}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {send.isPending && (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-muted px-3 py-3">
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>
        </div>

        {showHandoff && (
          <div className="border-t p-3">
            <Alert variant="warning">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Handoff to human</AlertTitle>
              <AlertDescription>{lastAgent!.handoff_reason}</AlertDescription>
            </Alert>
          </div>
        )}

        <div className="border-t p-3">
          <div className="flex items-end gap-2">
            <Textarea
              rows={2}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  submit();
                }
              }}
              placeholder="Send a message... (Enter to send, Shift+Enter for newline)"
              className="resize-none"
              disabled={send.isPending}
            />
            <Button
              onClick={() => submit()}
              disabled={send.isPending || !input.trim()}
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
