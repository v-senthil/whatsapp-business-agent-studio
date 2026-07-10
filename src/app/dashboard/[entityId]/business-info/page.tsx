"use client";
import { use } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { RotateCcw, Save } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Field } from "@/components/common/FormField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { LoadingButton } from "@/components/common/LoadingButton";
import { ErrorState } from "@/components/common/ErrorState";
import { ConfirmDialog } from "@/components/common/ConfirmDialog";
import { businessInfoSchema, type BusinessInfoInput } from "@/lib/schemas/business-info";
import { useBusinessInfo, useResetBusinessInfo, useUpdateBusinessInfo } from "@/lib/client/hooks/useBusinessInfo";
import type { BusinessInfo } from "@/types/meta";

const DEFAULTS: BusinessInfoInput = {
  business_description: "",
  contact_info: { email: "", address: "", hours_of_operation: "" },
  payment_method: "",
  return_policy: "",
  purchase_info: "",
  delivery_and_shipping: "",
};

function BusinessInfoLoading() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 py-4">
      <div>
        <h1 className="text-2xl font-semibold">Business info</h1>
        <p className="text-sm text-muted-foreground">Everything the agent can reference about the business.</p>
      </div>
      <div className="space-y-2 rounded-lg border bg-card p-4">
        {[0, 1, 2, 3, 4, 5].map((i) => <Skeleton key={i} className="h-10" />)}
      </div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-9 w-24" />
        <Skeleton className="h-9 w-24" />
      </div>
    </div>
  );
}

function BusinessInfoForm({ entityId, initial }: { entityId: string; initial: BusinessInfo }) {
  const update = useUpdateBusinessInfo(entityId);
  const reset = useResetBusinessInfo(entityId);
  const form = useForm<BusinessInfoInput>({
    resolver: zodResolver(businessInfoSchema),
    defaultValues: {
      ...DEFAULTS,
      ...initial,
      contact_info: { ...DEFAULTS.contact_info, ...(initial.contact_info ?? {}) },
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await update.mutateAsync(values);
      toast.success("Business info saved");
      form.reset(values);
    } catch { /* rendered below */ }
  });

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-3xl space-y-6 py-4">
      <div>
        <h1 className="text-2xl font-semibold">Business info</h1>
        <p className="text-sm text-muted-foreground">Everything the agent can reference about the business.</p>
      </div>
      {update.error && <ErrorState error={update.error} />}

      <Accordion type="multiple" defaultValue={["description", "contact", "payment"]} className="rounded-lg border bg-card px-4">
        <AccordionItem value="description">
          <AccordionTrigger>Business description</AccordionTrigger>
          <AccordionContent>
            <Field label="Description" hint="What does the business do?">
              <Textarea rows={4} {...form.register("business_description")} />
            </Field>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="contact">
          <AccordionTrigger>Contact info</AccordionTrigger>
          <AccordionContent className="space-y-3">
            <Field label="Email"><Input type="email" {...form.register("contact_info.email")} /></Field>
            <Field label="Address"><Input {...form.register("contact_info.address")} /></Field>
            <Field label="Hours of operation"><Input {...form.register("contact_info.hours_of_operation")} placeholder="Mon-Fri 9am-6pm" /></Field>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="payment">
          <AccordionTrigger>Payment method</AccordionTrigger>
          <AccordionContent><Field><Textarea rows={3} {...form.register("payment_method")} /></Field></AccordionContent>
        </AccordionItem>

        <AccordionItem value="return">
          <AccordionTrigger>Return policy</AccordionTrigger>
          <AccordionContent><Field><Textarea rows={3} {...form.register("return_policy")} /></Field></AccordionContent>
        </AccordionItem>

        <AccordionItem value="purchase">
          <AccordionTrigger>Purchase info</AccordionTrigger>
          <AccordionContent><Field><Textarea rows={3} {...form.register("purchase_info")} /></Field></AccordionContent>
        </AccordionItem>

        <AccordionItem value="delivery">
          <AccordionTrigger>Delivery & shipping</AccordionTrigger>
          <AccordionContent><Field><Textarea rows={3} {...form.register("delivery_and_shipping")} /></Field></AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex items-center justify-between">
        <ConfirmDialog
          trigger={<Button type="button" variant="outline"><RotateCcw className="h-4 w-4" /> Reset</Button>}
          title="Reset business info?"
          description="This clears all fields on the server."
          confirmLabel="Reset"
          onConfirm={() => reset.mutate(undefined, { onSuccess: () => { toast.success("Reset"); form.reset(DEFAULTS); } })}
        />
        <LoadingButton type="submit" loading={update.isPending} disabled={!form.formState.isDirty}>
          <Save className="h-4 w-4" /> Save
        </LoadingButton>
      </div>
    </form>
  );
}

export default function BusinessInfoPage({ params }: { params: Promise<{ entityId: string }> }) {
  const { entityId } = use(params);
  const query = useBusinessInfo(entityId);

  if (query.isPending) return <BusinessInfoLoading />;

  if (query.isError) {
    return (
      <div className="mx-auto max-w-3xl space-y-6 py-4">
        <div>
          <h1 className="text-2xl font-semibold">Business info</h1>
          <p className="text-sm text-muted-foreground">Everything the agent can reference about the business.</p>
        </div>
        <ErrorState error={query.error} />
      </div>
    );
  }

  return <BusinessInfoForm entityId={entityId} initial={query.data ?? {}} />;
}
