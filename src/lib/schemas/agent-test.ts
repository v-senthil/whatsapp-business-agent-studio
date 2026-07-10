import { z } from "zod";

export const agentTestSchema = z.object({
  user_msg: z.string().min(1),
  conversation_id: z.string().optional(),
});

export type AgentTestInput = z.infer<typeof agentTestSchema>;
