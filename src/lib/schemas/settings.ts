import { z } from "zod";

export const settingsSchema = z.object({
  rollout: z.object({ enabled: z.boolean() }),
  handoff: z.object({
    enabled: z.boolean(),
    message: z.string().max(1000).optional().default(""),
  }),
  followup: z.object({
    enabled: z.boolean(),
    followup_interval_in_seconds: z.coerce.number().int().min(60).max(86400),
    message: z.string().max(1000).optional().default(""),
  }),
  ai_audience: z.enum(["EVERYONE", "ALLOWLISTED_ONLY"]),
});

export type SettingsInput = z.infer<typeof settingsSchema>;
