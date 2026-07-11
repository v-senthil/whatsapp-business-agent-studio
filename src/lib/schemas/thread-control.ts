import { z } from "zod";

export const threadControlSchema = z.object({
  action: z.enum(["release", "pass"]),
  to: z.string().min(1, "Consumer identifier is required"),
  recipient: z.string().default(""),
});

export type ThreadControlInput = z.infer<typeof threadControlSchema>;
