"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Logo } from "@/components/common/Logo";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Field } from "@/components/common/FormField";
import { LoadingButton } from "@/components/common/LoadingButton";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { fetcher } from "@/lib/client/fetcher";
import { MetaApiError } from "@/lib/api/errors";

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginPageInner />
    </Suspense>
  );
}

function LoginPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [demoLoading, setDemoLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const autoTriggered = useRef(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await fetcher<{ user?: { name?: string } }>("/api/session", {
        method: "POST",
        json: { token },
      });
      toast.success(`Welcome ${data.user?.name ?? ""}`);
      router.replace("/home");
    } catch (err) {
      if (err instanceof MetaApiError) {
        setError(err.detail ?? err.title ?? "Invalid token");
      } else {
        setError(err instanceof Error ? err.message : "Login failed");
      }
    } finally {
      setLoading(false);
    }
  }

  async function onDemo() {
    setDemoLoading(true);
    setError(null);
    try {
      await fetcher<{ user?: { name?: string } }>("/api/session", {
        method: "POST",
        json: { demo: true },
      });
      toast.success("Demo mode started");
      router.replace("/home");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not start demo");
    } finally {
      setDemoLoading(false);
    }
  }

  useEffect(() => {
    if (autoTriggered.current) return;
    if (searchParams?.get("demo") === "1") {
      autoTriggered.current = true;
      onDemo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <div className="absolute right-4 top-4">
        <ThemeToggle variant="outline" />
      </div>
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-2 flex items-center justify-center">
            <Logo size={48} />
          </div>
          <CardTitle className="text-xl">WhatsApp Business Agent Studio</CardTitle>
          <CardDescription>Paste your Meta access token to continue</CardDescription>
        </CardHeader>
        <form onSubmit={onSubmit}>
          <CardContent className="space-y-4">
            <Field
              label="Access token"
              htmlFor="token"
              required
              hint="Generated from Meta Business Suite. Kept server-side in an encrypted httpOnly cookie."
              error={error ?? undefined}
            >
              <Input
                id="token"
                type="password"
                autoComplete="off"
                spellCheck={false}
                required
                minLength={10}
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="EAAG..."
              />
            </Field>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <LoadingButton type="submit" loading={loading} className="w-full">
              Sign in
            </LoadingButton>
            <div className="relative w-full text-center text-xs text-muted-foreground">
              <span className="relative z-10 bg-card px-2">or</span>
              <span className="absolute inset-x-0 top-1/2 -z-0 h-px bg-border" />
            </div>
            <LoadingButton
              type="button"
              variant="outline"
              loading={demoLoading}
              className="w-full"
              onClick={onDemo}
            >
              Try the demo (no token)
            </LoadingButton>
            <p className="text-center text-xs text-muted-foreground">
              Demo mode uses seeded data stored in memory. Nothing hits Meta.
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
