export type ParamType = "string" | "integer" | "number" | "boolean" | "array" | "object";
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface Param {
  type: ParamType;
  description: string;
  items?: string;
}

export interface RequestBody {
  content_type: string;
  params: Record<string, Param>;
  required: string[];
}

export interface RequestDefinition {
  method: HttpMethod;
  path: string;
  path_parameters: Record<string, Param>;
  query_parameters: Record<string, Param>;
  headers: Record<string, Param>;
  body?: RequestBody;
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  request_definition: RequestDefinition;
  user_auth_required?: boolean;
  user_auth_action_config?: {
    user_action_tool_type: "auth" | "invocation";
    user_auth_token_path?: string;
    refresh_token_path?: string;
    expires_at_path?: string;
    expires_at_type?: "absolute" | "relative";
  };
}
