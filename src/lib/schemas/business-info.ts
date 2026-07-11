import { z } from "zod";

export const businessInfoSchema = z.object({
  business_description: z.string().max(2000).default(""),
  contact_info: z.object({
    email: z.string().email().or(z.literal("")).default(""),
    address: z.string().max(500).default(""),
    hours_of_operation: z.string().max(500).default(""),
  }),
  payment_method: z.string().max(1000).default(""),
  return_policy: z.string().max(2000).default(""),
  purchase_info: z.string().max(2000).default(""),
  delivery_and_shipping: z.string().max(2000).default(""),
});

export type BusinessInfoInput = z.infer<typeof businessInfoSchema>;
