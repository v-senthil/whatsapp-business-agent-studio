import { z } from "zod";

const schema = z.object({
  SESSION_SECRET: z.string().min(32, "SESSION_SECRET must be 32+ chars"),
  META_API_BASE: z.string().url().default("https://api.facebook.com"),
  GRAPH_API_BASE: z.string().url().default("https://graph.facebook.com/v20.0"),
});

export const env = schema.parse({
  SESSION_SECRET: process.env.SESSION_SECRET,
  META_API_BASE: process.env.META_API_BASE,
  GRAPH_API_BASE: process.env.GRAPH_API_BASE,
});
