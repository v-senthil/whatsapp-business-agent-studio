"use client";
import { useEligibility } from "@/lib/client/hooks/useSettings";
import { isTosNotAccepted } from "@/lib/api/errors";

export interface TosStatus {
  blocked: boolean;
  message?: string;
  learnMoreUrl?: string;
}

export function useTosStatus(entityId: string | undefined): TosStatus {
  const eligibility = useEligibility(entityId ?? "");
  if (!entityId) return { blocked: false };
  if (!eligibility.isError) return { blocked: false };
  if (!isTosNotAccepted(eligibility.error)) return { blocked: false };
  return {
    blocked: true,
    message: eligibility.error.detail,
    learnMoreUrl: "https://www.facebook.com/legal/meta-business-ai-terms",
  };
}
