// Maps in-app pathnames to help-center article slugs.
// A pathname like `/dashboard/1234567890/connectors/abc/tools/xyz/run` is
// stripped to the resource part (`connectors/abc/tools/xyz/run`) and matched
// against ordered rules, most-specific first.

interface Rule {
  test: RegExp;
  slug: string;
}

const RULES: Rule[] = [
  // Connectors sub-pages before the parent so the deeper matches win.
  { test: /^connectors\/[^/]+\/auth$/, slug: "configure/connector-auth-rotation" },
  { test: /^connectors\/[^/]+\/logs$/, slug: "configure/connector-health" },
  { test: /^connectors\/[^/]+\/tools(\/.*)?$/, slug: "configure/tools" },
  { test: /^connectors(\/.*)?$/, slug: "configure/connectors" },

  // Knowledge tabs.
  { test: /^knowledge\/files$/, slug: "configure/knowledge-files" },
  { test: /^knowledge\/websites$/, slug: "configure/knowledge-websites" },
  { test: /^knowledge\/faqs$/, slug: "configure/knowledge-faqs" },
  { test: /^knowledge\/allowlist$/, slug: "configure/knowledge-allowlist" },

  // Skills.
  { test: /^skills(\/.*)?$/, slug: "configure/skills" },

  // Simple configure pages.
  { test: /^settings$/, slug: "configure/settings" },
  { test: /^business-info$/, slug: "configure/business-info" },
  { test: /^generate$/, slug: "configure/generate-from-document" },

  // Ship / operate.
  { test: /^test$/, slug: "ship/test-chat" },
  { test: /^scenarios$/, slug: "ship/scenarios" },
  { test: /^evals(\/.*)?$/, slug: "ship/evals" },
  { test: /^events$/, slug: "ship/agent-events" },
  { test: /^webhooks$/, slug: "ship/webhooks" },
  { test: /^playground$/, slug: "ship/playground" },
  { test: /^thread-control$/, slug: "ship/thread-control" },

  // Onboarding + entity overview.
  { test: /^onboarding$/, slug: "getting-started/onboard-your-first-agent" },
  { test: /^$/, slug: "getting-started/onboard-your-first-agent" },
];

const GLOBAL: Record<string, string> = {
  "/settings/ai": "advanced/ai-provider",
  "/api-docs": "advanced/api-reference",
  "/home": "getting-started/pick-business-and-phone",
  "/login": "getting-started/sign-in",
};

export function helpDocForPath(pathname: string): string | null {
  if (!pathname) return null;
  if (GLOBAL[pathname]) return `/help/${GLOBAL[pathname]}`;

  const dashboardMatch = pathname.match(/^\/dashboard\/([^/]+)(?:\/(.*))?$/);
  if (dashboardMatch) {
    const rest = dashboardMatch[2] ?? "";
    for (const rule of RULES) {
      if (rule.test.test(rest)) return `/help/${rule.slug}`;
    }
  }
  return null;
}
