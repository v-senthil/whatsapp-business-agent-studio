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

export const allowlistSchema = z.object({
  consumer_phone_number: z
    .string()
    .regex(/^\+?[1-9]\d{7,14}$/, "Must be E.164 format, e.g. +15551234567"),
});
export type AllowlistInput = z.infer<typeof allowlistSchema>;
