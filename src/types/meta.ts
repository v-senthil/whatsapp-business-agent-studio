export type Channel =
  | "email"
  | "instagram"
  | "line"
  | "messenger"
  | "sms"
  | "tiktok"
  | "unknown"
  | "webchat"
  | "whatsapp";

export type AiAudience = "EVERYONE" | "ALLOWLISTED_ONLY";

export interface AgentSettings {
  agent_id: string;
  channel: Channel;
  rollout?: { enabled?: boolean };
  handoff?: { enabled?: boolean; message?: string };
  followup?: { enabled?: boolean; followup_interval_in_seconds?: number; message?: string };
  ai_audience?: AiAudience;
}

export interface BusinessInfo {
  business_description?: string;
  contact_info?: {
    email?: string;
    address?: string;
    hours_of_operation?: string;
  };
  payment_method?: string;
  return_policy?: string;
  purchase_info?: string;
  delivery_and_shipping?: string;
}

export interface Skill {
  id: string;
  title: string;
  description: string;
  skill: string;
  channel?: Channel;
  created_at?: number;
  metadata?: Record<string, unknown>;
}

export interface Eligibility {
  is_eligible: boolean;
  reasons?: string[];
  [key: string]: unknown;
}

export interface OnboardingResponse {
  agent_id: string;
  [key: string]: unknown;
}
