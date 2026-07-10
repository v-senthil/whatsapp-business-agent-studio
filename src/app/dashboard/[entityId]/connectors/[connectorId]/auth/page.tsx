"use client";
import { use } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { KeyRound, Save } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "@/components/common/FormField";
import { LoadingButton } from "@/components/common/LoadingButton";
import { ErrorState } from "@/components/common/ErrorState";
import { Loader2 } from "lucide-react";
import { ApiKeyFields } from "@/components/connectors/auth/ApiKeyFields";
import { OAuth2Fields } from "@/components/connectors/auth/OAuth2Fields";
import { apiKeyAuthSchema, mtlsFieldsSchema, oauth2AuthSchema, upsertApiKeySchema, upsertOAuthSchema } from "@/lib/schemas/connector";
import { useConnector, useUpsertApiKey, useUpsertCertificate, useUpsertOAuth } from "@/lib/client/hooks/useConnectors";

export default function ConnectorAuthPage({ params }: { params: Promise<{ entityId: string; connectorId: string }> }) {
  const { entityId, connectorId } = use(params);
  const { data, isLoading, error } = useConnector(entityId, connectorId);
  const upsertKey = useUpsertApiKey(entityId, connectorId);
  const upsertOAuth = useUpsertOAuth(entityId, connectorId);
  const upsertCert = useUpsertCertificate(entityId, connectorId);

  const apiKeyForm = useForm({
    resolver: zodResolver(upsertApiKeySchema),
    defaultValues: { api_key_config: { headers: [], query_params: [], body_params: [] } as never },
  });
  const oauthForm = useForm({
    resolver: zodResolver(upsertOAuthSchema),
    defaultValues: {
      oauth2_client_credentials: {
        token_url: "",
        scopes_to_request: [],
        client_id: "",
        client_secret: "",
        token_request_content_type: "application/x-www-form-urlencoded",
      },
    } as never,
  });
  const certForm = useForm({
    resolver: zodResolver(mtlsFieldsSchema),
    defaultValues: { client_certificate: "", ca_certificate: "" },
  });

  if (isLoading) return <Loader2 className="mt-8 h-4 w-4 animate-spin" />;
  if (error) return <ErrorState error={error} />;
  if (!data) return null;

  return (
    <div className="mx-auto max-w-3xl space-y-6 py-4">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-semibold"><KeyRound className="h-5 w-5" /> Credentials — {data.name}</h1>
        <p className="text-sm text-muted-foreground">Rotate the credentials on this connector.</p>
      </div>

      {data.auth_type === "API_KEY" && (
        <Card>
          <CardHeader><CardTitle>Rotate API key</CardTitle><CardDescription>Replace headers or query parameters used to authenticate.</CardDescription></CardHeader>
          <form onSubmit={apiKeyForm.handleSubmit(async (v) => { try { await upsertKey.mutateAsync(v); toast.success("Rotated"); } catch { /* shown */ } })}>
            <CardContent><ApiKeyFields control={apiKeyForm.control as never} prefix="api_key_config" /></CardContent>
            <CardFooter className="justify-end">
              <LoadingButton type="submit" loading={upsertKey.isPending}><Save className="h-4 w-4" /> Save</LoadingButton>
            </CardFooter>
          </form>
        </Card>
      )}

      {data.auth_type === "OAUTH2_CLIENT_CREDENTIALS" && (
        <Card>
          <CardHeader><CardTitle>Rotate OAuth2 credentials</CardTitle></CardHeader>
          <form onSubmit={oauthForm.handleSubmit(async (v) => { try { await upsertOAuth.mutateAsync(v); toast.success("Rotated"); } catch { /* shown */ } })}>
            <CardContent><OAuth2Fields control={oauthForm.control as never} prefix="oauth2_client_credentials" /></CardContent>
            <CardFooter className="justify-end">
              <LoadingButton type="submit" loading={upsertOAuth.isPending}><Save className="h-4 w-4" /> Save</LoadingButton>
            </CardFooter>
          </form>
        </Card>
      )}

      {data.auth_type === "MTLS" && (
        <Card>
          <CardHeader><CardTitle>Upload certificate</CardTitle><CardDescription>Paste PEM-encoded client certificate and (optionally) CA.</CardDescription></CardHeader>
          <form onSubmit={certForm.handleSubmit(async (v) => { try { await upsertCert.mutateAsync(v); toast.success("Certificate uploaded"); } catch { /* shown */ } })}>
            <CardContent className="space-y-3">
              <Field label="Client certificate (PEM)" required error={certForm.formState.errors.client_certificate?.message}>
                <Textarea rows={8} className="font-mono text-xs" {...certForm.register("client_certificate")} />
              </Field>
              <Field label="CA certificate (PEM)" hint="Optional">
                <Textarea rows={6} className="font-mono text-xs" {...certForm.register("ca_certificate")} />
              </Field>
              {data.mtls_config?.fingerprint && (
                <div className="rounded-md border p-3 text-xs">
                  <div><span className="text-muted-foreground">Fingerprint:</span> <span className="font-mono">{data.mtls_config.fingerprint}</span></div>
                  {data.mtls_config.subject && <div><span className="text-muted-foreground">Subject:</span> {data.mtls_config.subject}</div>}
                  {data.mtls_config.expires_at && <div><span className="text-muted-foreground">Expires:</span> {new Date(data.mtls_config.expires_at * 1000).toISOString()}</div>}
                </div>
              )}
            </CardContent>
            <CardFooter className="justify-end">
              <LoadingButton type="submit" loading={upsertCert.isPending}><Save className="h-4 w-4" /> Save</LoadingButton>
            </CardFooter>
          </form>
        </Card>
      )}

      {(upsertKey.error || upsertOAuth.error || upsertCert.error) && (
        <ErrorState error={upsertKey.error ?? upsertOAuth.error ?? upsertCert.error} />
      )}
    </div>
  );
}
