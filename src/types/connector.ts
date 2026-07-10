export type AuthType = "API_KEY" | "OAUTH2_CLIENT_CREDENTIALS" | "MTLS";

export interface KeyValuePrefix {
  field_name: string;
  value: string;
  prefix?: string;
}

export interface ApiKeyAuth {
  headers: KeyValuePrefix[];
  query_params: KeyValuePrefix[];
  body_params: KeyValuePrefix[];
}

export interface OAuth2Auth {
  token_url: string;
  scopes_to_request: string[];
  client_id: string;
  client_secret: string;
  token_request_content_type: "application/x-www-form-urlencoded" | "application/json";
}

export interface MtlsConfig {
  client_certificate?: string;
  ca_certificate?: string;
  fingerprint?: string;
  expires_at?: number;
  subject?: string;
}

export interface UserAuthInjection {
  location: "headers" | "query";
  field_name: string;
  prefix?: string;
}

export interface ConnectionStatus {
  status: "CONNECTED" | "PENDING_OAUTH" | "DISCONNECTED" | "ERROR";
  error_message?: string;
}

export interface Connector {
  id: string;
  name: string;
  description: string;
  base_url: string;
  auth_type: AuthType;
  auth_config?: {
    oauth2_client_credentials?: OAuth2Auth;
    api_key?: ApiKeyAuth;
  };
  mtls_config?: MtlsConfig;
  user_auth_injection_config?: UserAuthInjection;
  requires_certificate?: boolean;
  connection_status?: ConnectionStatus;
}
