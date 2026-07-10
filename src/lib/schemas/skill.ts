import { z } from "zod";

export const skillSchema = z.object({
  title: z.string().min(1, "Title required").max(80),
  description: z.string().min(1, "Describe when this skill applies").max(500),
  skill: z.string().min(1, "Instruction body required").max(10_000),
});

export type SkillInput = z.infer<typeof skillSchema>;
