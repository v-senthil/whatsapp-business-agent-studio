export interface ConnectorLogStats {
  start_count: number;
  success_count: number;
  exception_count: number;
  success_rate: number;
  avg_latency_s: number;
  p95_latency_s: number;
  p99_latency_s: number;
  time_window_seconds: number;
}

export interface ConnectorFailurePattern {
  tool_id?: string;
  tool_name?: string;
  error_type?: string;
  error_message?: string;
  occurrence_count?: number;
  http_status?: number;
  first_seen_at?: number;
  last_seen_at?: number;
  [key: string]: unknown;
}

export interface ConnectorLogsResponse<T = unknown> {
  data?: T[];
  stats?: ConnectorLogStats;
}
