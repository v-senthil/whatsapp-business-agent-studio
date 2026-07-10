import { z } from "zod";

export const websiteSchema = z.object({
  url: z.string().url("Must be a valid URL"),
});
export type WebsiteInput = z.infer<typeof websiteSchema>;

export const faqSchema = z.object({
  question: z.string().min(1).max(500),
  answer: z.string().min(1).max(5000),
  metadata: z.string().optional().default(""),
});
export type FaqInput = z.infer<typeof faqSchema>;

// Row shape used by bulk-import: parses the metadata JSON string, if any.
export const faqRowSchema = z
  .object({
    question: z.string().min(1).max(500),
    answer: z.string().min(1).max(5000),
    metadata: z.string().optional().default(""),
  })
  .transform((row, ctx) => {
    let meta: Record<string, string> | undefined;
    if (row.metadata && row.metadata.trim() !== "") {
      try {
        meta = JSON.parse(row.metadata);
      } catch (e) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["metadata"],
          message: `Invalid JSON: ${(e as Error).message}`,
        });
        return z.NEVER;
      }
    }
    return { question: row.question, answer: row.answer, metadata: meta };
  });
export type FaqRowInput = z.infer<typeof faqRowSchema>;

export const allowlistSchema = z.object({
  consumer_phone_number: z
    .string()
    .regex(/^\+[1-9]\d{7,14}$/, "Must be E.164 format, e.g. +15551234567"),
});
export type AllowlistInput = z.infer<typeof allowlistSchema>;
