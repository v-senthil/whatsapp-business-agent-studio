import { z } from "zod";

export const agentEventSchema = z.object({
  to: z
    .string()
    .regex(/^\+?[1-9]\d{7,14}$/, "Must be E.164 format, e.g. +15551234567"),
  event: z.object({
    type: z.string().min(1).max(256, "Max 256 chars"),
    description: z.string().min(1).max(1024, "Max 1024 chars"),
    payload: z.string().max(4096, "Max 4096 chars").default(""),
  }),
});

export type AgentEventInput = z.infer<typeof agentEventSchema>;
