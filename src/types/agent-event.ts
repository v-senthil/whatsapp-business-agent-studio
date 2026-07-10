export type AgentEventStatus =
  | "request_received"
  | "processing"
  | "sent"
  | "failed"
  | "skipped"
  | "success";

export interface AgentEventPostResponse {
  status: string;
  agent_event_id?: string;
}

export interface AgentEventStatusResponse {
  status: AgentEventStatus;
  event_type: string;
  error_message?: string;
  skipped_reason?: string;
  created_at: string;
  updated_at: string;
}
