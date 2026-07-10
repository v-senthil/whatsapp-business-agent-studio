"use client";
import Link from "next/link";
import { CheckCircle2, Circle, Loader2, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEligibility, useSettings } from "@/lib/client/hooks/useSettings";
import { useBusinessInfo } from "@/lib/client/hooks/useBusinessInfo";
import { useSkills } from "@/lib/client/hooks/useSkills";
import { useConnectors } from "@/lib/client/hooks/useConnectors";

interface Step {
  id: string;
  label: string;
  hint: string;
  done: boolean;
  loading: boolean;
  href: string;
}

interface Props { entityId: string }

export function OnboardingChecklist({ entityId }: Props) {
  const eligibility = useEligibility(entityId);
  const settings = useSettings(entityId);
  const businessInfo = useBusinessInfo(entityId);
  const skills = useSkills(entityId);
  const connectors = useConnectors(entityId);

  const settingsList = normalizeSettings(settings.data);
  const hasAgent = settingsList.some((s) => (s?.channel ?? "").toLowerCase() === "whatsapp");
  const businessInfoFilled = !!(businessInfo.data && (
    businessInfo.data.business_description
    || businessInfo.data.contact_info?.email
    || businessInfo.data.return_policy
  ));
  const rolloutOn = settingsList.some((s) => s?.rollout?.enabled);

  const steps: Step[] = [
    {
      id: "eligibility",
      label: "Confirm eligibility",
      hint: "Meta confirms this phone can host an AI agent.",
      done: !!(eligibility.data as { is_eligible?: boolean } | undefined)?.is_eligible,
      loading: eligibility.isLoading,
      href: `/dashboard/${entityId}`,
    },
    {
      id: "onboard",
      label: "Onboard the WhatsApp agent",
      hint: "Creates the agent for this phone.",
      done: hasAgent,
      loading: settings.isLoading,
      href: `/dashboard/${entityId}/onboarding`,
    },
    {
      id: "business-info",
      label: "Fill business info",
      hint: "Description, contact, or return policy — anything the agent should reference.",
      done: !!businessInfoFilled,
      loading: businessInfo.isLoading,
      href: `/dashboard/${entityId}/business-info`,
    },
    {
      id: "skills",
      label: "Add at least one skill",
      hint: "Prompt-style instructions the agent follows.",
      done: (skills.data?.length ?? 0) > 0,
      loading: skills.isLoading,
      href: `/dashboard/${entityId}/skills`,
    },
    {
      id: "connector",
      label: "Register a connector (optional)",
      hint: "Let the agent call external APIs like Shopify or Stripe.",
      done: (connectors.data?.length ?? 0) > 0,
      loading: connectors.isLoading,
      href: `/dashboard/${entityId}/connectors`,
    },
    {
      id: "rollout",
      label: "Turn on rollout",
      hint: "Flip the switch to serve live traffic.",
      done: rolloutOn,
      loading: settings.isLoading,
      href: `/dashboard/${entityId}/settings`,
    },
  ];

  const done = steps.filter((s) => s.done).length;
  const total = steps.length;
  const nextStep = steps.find((s) => !s.done && !s.loading);
  const allDone = done === total;

  if (allDone) return null;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle>Get your agent live</CardTitle>
            <CardDescription>{done} of {total} steps complete</CardDescription>
          </div>
          <div className="w-32">
            <Progress value={(done / total) * 100} />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-1">
        {steps.map((step) => {
          const Icon = step.loading ? Loader2 : step.done ? CheckCircle2 : Circle;
          const isNext = step === nextStep;
          return (
            <Link
              key={step.id}
              href={step.href}
              className={
                "flex items-center gap-3 rounded-md px-2 py-2 text-sm transition-colors hover:bg-muted/50 " +
                (isNext ? "bg-muted/40" : "")
              }
            >
              <Icon
                className={
                  "h-4 w-4 shrink-0 " +
                  (step.loading
                    ? "animate-spin text-muted-foreground"
                    : step.done
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-muted-foreground")
                }
              />
              <div className="min-w-0 flex-1">
                <div className={"text-sm " + (step.done ? "text-muted-foreground line-through" : "font-medium")}>{step.label}</div>
                <div className="text-xs text-muted-foreground">{step.hint}</div>
              </div>
              {isNext && <ArrowRight className="h-4 w-4 text-muted-foreground" />}
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}

function normalizeSettings(data: unknown): Array<{ channel?: string; rollout?: { enabled?: boolean } }> {
  if (!data) return [];
  if (Array.isArray(data)) return data;
  if (typeof data === "object" && "data" in (data as object)) {
    const arr = (data as { data: unknown[] }).data;
    return Array.isArray(arr) ? (arr as Array<{ channel?: string; rollout?: { enabled?: boolean } }>) : [];
  }
  return [data as { channel?: string; rollout?: { enabled?: boolean } }];
}
