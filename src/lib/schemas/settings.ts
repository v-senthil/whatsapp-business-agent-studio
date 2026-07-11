import { z } from "zod";

export const FOLLOWUP_INTERVALS = [0, 300, 900, 1800, 3600, 7200, 28800, 86400] as const;
export type FollowupInterval = (typeof FOLLOWUP_INTERVALS)[number];

export const settingsSchema = z.object({
  rollout: z.object({ enabled: z.boolean() }),
  handoff: z.object({
    enabled: z.boolean(),
    message: z.string().max(1000).default(""),
  }),
  followup: z.object({
    enabled: z.boolean(),
    followup_interval_in_seconds: z.coerce.number().refine(
      (v): v is FollowupInterval => (FOLLOWUP_INTERVALS as readonly number[]).includes(v),
      { message: `Interval must be one of ${FOLLOWUP_INTERVALS.join(", ")} seconds` },
    ),
    message: z.string().max(1000).default(""),
  }),
  ai_audience: z.enum(["EVERYONE", "ALLOWLISTED_ONLY"]),
});

export type SettingsInput = z.infer<typeof settingsSchema>;
