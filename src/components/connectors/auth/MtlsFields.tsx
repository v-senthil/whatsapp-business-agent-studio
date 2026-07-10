"use client";
import { Controller, type Control, type FieldValues } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "@/components/common/FormField";

interface Props<T extends FieldValues> { control: Control<T>; }

export function MtlsFields<T extends FieldValues>({ control }: Props<T>) {
  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">
        After creating the connector, upload the certificate via the credentials rotation page.
        This form only sets the auth type flag; the certificate itself is uploaded separately.
      </p>
      <Controller
        control={control}
        name={"__mtls_note" as never}
        render={() => (
          <Field label="Note" hint="mTLS setup happens after create — the connector is provisioned first, then you paste the cert.">
            <Textarea rows={2} disabled defaultValue="mTLS certificate is uploaded via `/upsertCertificate` after the connector exists." />
          </Field>
        )}
      />
    </div>
  );
}
