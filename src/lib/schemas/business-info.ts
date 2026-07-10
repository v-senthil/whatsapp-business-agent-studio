import { z } from "zod";

export const businessInfoSchema = z.object({
  business_description: z.string().max(2000).optional().default(""),
  contact_info: z.object({
    email: z.string().email().or(z.literal("")).optional().default(""),
    address: z.string().max(500).optional().default(""),
    hours_of_operation: z.string().max(500).optional().default(""),
  }),
  payment_method: z.string().max(1000).optional().default(""),
  return_policy: z.string().max(2000).optional().default(""),
  purchase_info: z.string().max(2000).optional().default(""),
  delivery_and_shipping: z.string().max(2000).optional().default(""),
});

export type BusinessInfoInput = z.infer<typeof businessInfoSchema>;
