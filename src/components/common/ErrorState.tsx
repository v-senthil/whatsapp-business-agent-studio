import { AlertCircle } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { MetaApiError } from "@/lib/api/errors";

export function ErrorState({ error }: { error: unknown }) {
  const title = error instanceof MetaApiError ? error.title : "Something went wrong";
  const detail = error instanceof MetaApiError ? error.detail : error instanceof Error ? error.message : String(error);
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{detail}</AlertDescription>
    </Alert>
  );
}
