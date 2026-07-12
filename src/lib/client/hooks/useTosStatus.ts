"use client";
import { useEligibility } from "@/lib/client/hooks/useSettings";
import { isTosNotAccepted } from "@/lib/api/errors";

export interface TosStatus {
  /** True while we do NOT yet have a successful eligibility response for this entity. */
  disabled: boolean;
  /** True specifically when Meta returned 403 with the ToS-not-accepted detail. */
  tosBlocked: boolean;
  message?: string;
  learnMoreUrl?: string;
}

export function useTosStatus(entityId: string | undefined): TosStatus {
  const eligibility = useEligibility(entityId ?? "");
  if (!entityId) return { disabled: true, tosBlocked: false };
  if (eligibility.isSuccess) return { disabled: false, tosBlocked: false };
  if (eligibility.isError && isTosNotAccepted(eligibility.error)) {
    return {
      disabled: true,
      tosBlocked: true,
      message: eligibility.error.detail,
      learnMoreUrl: "https://www.facebook.com/legal/meta-business-ai-terms",
    };
  }
  return { disabled: true, tosBlocked: false };
}
