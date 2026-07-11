export interface EvalCase {
  id: string;
  scenario: string;
  categories?: string[];
  max_turns?: number;
  success_criteria?: string[];
}

export interface EvalJob {
  job_id: string;
  status: "PENDING" | "RUNNING" | "SUCCEEDED" | "FAILED";
  eval_ids?: string[];
  summary_ids?: string[];
  progress?: { total?: number; completed?: number };
}

export interface EvalDetail {
  id: string;
  case_id: string;
  score?: number;
  passed?: boolean;
  transcript?: Array<{ role: string; content: string }>;
  notes?: string;
}

export interface EvalSummary {
  id: string;
  totals: { passed: number; failed: number; total: number };
  insights?: string[];
}

export interface AgentTestResponse {
  message_id: string;
  agent_response: string;
  // Meta may omit conversation_id on some replies (e.g. handoff-only bounces),
  // so keep it optional and let the caller decide how to react.
  conversation_id?: string;
  timestamp?: number;
  handoff_reason?: string;
  no_response_reason?: string;
  quick_replies?: string[];
  product_variant_ids?: string[];
}
