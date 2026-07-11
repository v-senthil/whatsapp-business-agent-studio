import Link from "next/link";
import {
  ArrowRight,
  Beaker,
  BookOpen,
  Bot,
  Boxes,
  CheckCircle2,
  ChevronRight,
  Container,
  FileText,
  FlaskConical,
  Github,
  Globe,
  Layers,
  Lock,
  MessageSquare,
  PlayCircle,
  Radio,
  Rocket,
  Shield,
  Sparkles,
  Terminal,
  TestTube2,
  Wand2,
  Webhook,
  Wrench,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarketingNav } from "@/components/marketing/MarketingNav";
import { HeroPreview } from "@/components/marketing/HeroPreview";
import { Logo } from "@/components/common/Logo";
import { CopyButton } from "@/components/common/CopyButton";

interface Props {
  authed: boolean;
}

export function LandingPage({ authed }: Props) {
  const primaryCtaHref = authed ? "/home" : "/login";
  const primaryCtaLabel = "Dashboard";

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <BackgroundGrid />
      <MarketingNav primaryCtaHref={primaryCtaHref} primaryCtaLabel={primaryCtaLabel} />

      <Hero primaryCtaHref={primaryCtaHref} primaryCtaLabel={primaryCtaLabel} />
      <LogoBar />
      <Features />
      <Workflow />
      <PlatformDeepDive />
      <ForTeams />
      <FaqSection />
      <FinalCta primaryCtaHref={primaryCtaHref} primaryCtaLabel={primaryCtaLabel} />
      <Footer />
    </div>
  );
}

function BackgroundGrid() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[800px] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--foreground)/0.06),transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at top, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at top, black, transparent 70%)",
        }}
      />
    </div>
  );
}

function Hero({ primaryCtaHref, primaryCtaLabel }: { primaryCtaHref: string; primaryCtaLabel: string }) {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Built on the Meta Business Agent Platform
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Ship AI agents on{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
              WhatsApp
            </span>{" "}
            in an afternoon.
          </h1>

          <p className="mt-5 text-balance text-lg text-muted-foreground sm:text-xl">
            A complete studio for designing, testing, and operating agents on the Meta Business Agent
            Platform. Skills, knowledge, connectors, evals, live chat, webhooks, all in one workspace.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={primaryCtaHref}>
                {primaryCtaLabel}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="#features">
                <PlayCircle className="mr-1 h-4 w-4" />
                See what's inside
              </Link>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              Self-hosted
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              Access tokens never leave the server
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              Works with any OpenAI-compatible model
            </span>
          </div>

          <QuickStart />
        </div>

        <div className="mt-16">
          <HeroPreview />
        </div>
      </div>
    </section>
  );
}

function QuickStart() {
  const repoUrl = "https://github.com/v-senthil/whatsapp-business-agent-studio";
  const cloneCmd = `git clone ${repoUrl}.git`;
  const runCmd = "npm install && npm run dev";
  return (
    <div className="mx-auto mt-8 max-w-xl text-left">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
          Run it locally
        </span>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github className="h-3.5 w-3.5" />
          v-senthil/whatsapp-business-agent-studio
        </a>
      </div>
      <div className="mt-2 space-y-2 rounded-xl border border-border bg-card p-2 shadow-sm">
        <CommandRow value={cloneCmd} />
        <CommandRow value={runCmd} />
      </div>
    </div>
  );
}

function CommandRow({ value }: { value: string }) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-muted/60 px-3 py-1.5">
      <span className="select-none text-emerald-600 dark:text-emerald-400">$</span>
      <code className="min-w-0 flex-1 truncate font-mono text-xs text-foreground">{value}</code>
      <CopyButton value={value} />
    </div>
  );
}

function LogoBar() {
  const items = [
    { icon: MessageSquare, label: "WhatsApp Cloud API" },
    { icon: Bot, label: "Meta Agent Platform" },
    { icon: Sparkles, label: "Claude Agent SDK" },
    { icon: Globe, label: "OpenAI-compatible" },
    { icon: Container, label: "Docker & AppSail" },
    { icon: Terminal, label: "Next.js 15" },
  ];
  return (
    <section className="border-y border-border/60 bg-muted/20">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 py-6 text-xs uppercase tracking-widest text-muted-foreground sm:px-6 lg:px-8">
        {items.map((i) => (
          <span key={i.label} className="inline-flex items-center gap-2">
            <i.icon className="h-3.5 w-3.5" />
            {i.label}
          </span>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const primary = {
    icon: Wrench,
    tag: "Skills, connectors, tools",
    title: "Build agents like you build software.",
    body:
      "Author skills as prompts, wire connectors to your APIs, and expose them as tools the agent can call. Everything is versioned in JSON so you can export a config and reproduce a workspace anywhere.",
    bullets: [
      "22 curated skill templates across five categories",
      "84 connector templates: Zoho, Google, and universally available APIs",
      "Path / query / header / body params typed end-to-end",
      "Every config exportable as versioned JSON",
    ],
  };

  const secondary = [
    {
      icon: Layers,
      title: "Knowledge base",
      body:
        "Upload files, register websites, curate FAQs. Import and export CSV for anything list-shaped.",
    },
    {
      icon: FlaskConical,
      title: "Evals + scenarios",
      body:
        "Run eval cases against your agent, poll status live, and replay saved conversations as regression suites.",
    },
    {
      icon: TestTube2,
      title: "Live test chat",
      body:
        "Talk to your agent inside the studio, with sticky conversation IDs and one-click save-as-scenario.",
    },
    {
      icon: Webhook,
      title: "Webhook receiver",
      body:
        "Signed webhook capture with a live SSE feed, filter bar, and full request inspection.",
    },
    {
      icon: Wand2,
      title: "Generate from a document",
      body:
        "Drop in a doc, get FAQs, skills, and connector suggestions you can apply with one click.",
    },
    {
      icon: Beaker,
      title: "API playground",
      body:
        "Scoped, free-form request builder with quick-call prefills and a JSON viewer for every response.",
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Everything you need"
        title="A studio, not a wrapper."
        description="Every surface of the Meta Business Agent Platform is here, designed to feel native, not like a raw API reference."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <FeatureCard {...primary} large />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {secondary.slice(0, 2).map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {secondary.slice(2).map((f) => (
          <FeatureCard key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  tag?: string;
  title: string;
  body: string;
  bullets?: string[];
  large?: boolean;
}

function FeatureCard({ icon: Icon, tag, title, body, bullets, large }: FeatureCardProps) {
  return (
    <div
      className={
        "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md " +
        (large ? "h-full" : "h-full")
      }
    >
      <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 text-emerald-600 ring-1 ring-emerald-500/20 dark:text-emerald-400">
        <Icon className="h-4 w-4" />
      </div>
      {tag ? (
        <div className="mb-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          {tag}
        </div>
      ) : null}
      <h3 className={"font-semibold tracking-tight " + (large ? "text-xl" : "text-base")}>
        {title}
      </h3>
      <p className={"mt-2 text-muted-foreground " + (large ? "text-base" : "text-sm")}>{body}</p>
      {bullets ? (
        <ul className="mt-4 space-y-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
              <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function Workflow() {
  const steps = [
    {
      n: "01",
      icon: Lock,
      title: "Sign in with your Meta access token",
      body:
        "The token never touches the browser. We store it in an encrypted, httpOnly session cookie and inject it server-side on every call.",
    },
    {
      n: "02",
      icon: Rocket,
      title: "Onboard a WhatsApp phone",
      body:
        "Pick a WABA, pick a phone, click onboard. The studio provisions the agent through Meta and lands you on a guided checklist.",
    },
    {
      n: "03",
      icon: Zap,
      title: "Configure skills, knowledge, connectors",
      body:
        "Author skills, upload knowledge, wire connectors to your existing APIs (with 48 Zoho and 22 Google product templates ready to go), or import a config JSON you already have.",
    },
    {
      n: "04",
      icon: MessageSquare,
      title: "Test, eval, and go live",
      body:
        "Chat with the agent in the studio, run eval suites, replay scenarios against your live config, then flip the rollout switch.",
    },
  ];

  return (
    <section id="workflow" className="border-y border-border/60 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="From access token to live agent in four steps."
          description="No CLI. No hand-crafted API calls. No copying tokens into curl. Just the flow you'd want."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20 dark:text-emerald-400">
                  <s.icon className="h-4 w-4" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformDeepDive() {
  return (
    <section id="platform" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Under the hood"
        title="Serious tooling for teams that ship."
        description="The studio isn't just a form-and-list app. It's built for the messy realities of running agents in production."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <DeepDiveCard
          icon={Shield}
          title="Security by default"
          points={[
            "Access tokens stay server-side. The browser never sees them.",
            "Read-only mode locks all non-GET calls to Meta with a single click.",
            "Signed webhook verification with timing-safe comparison.",
            "All Meta calls go through a single, auditable proxy.",
          ]}
        />
        <DeepDiveCard
          icon={Terminal}
          title="Built for developers"
          points={[
            "Dev drawer with a ring buffer of every request and Copy-as-cURL.",
            "Free-form API playground scoped to the current phone.",
            "In-app help center with instant search and a per-page Help link.",
            "Vendored OpenAPI reference with theme sync.",
            "Config export / import as versioned JSON.",
          ]}
        />
        <DeepDiveCard
          icon={Boxes}
          title="Reusable building blocks"
          points={[
            "22 skill templates across Onboarding, Support, Sales, Escalation, and Utility.",
            "84 connector templates: 48 Zoho products, 22 Google APIs (Workspace, Ads, Cloud), and 14 universally available services.",
            "CSV import / export for skills, FAQs, websites, allowlist.",
            "Save any chat as a scenario, replay them as regression tests.",
          ]}
        />
        <DeepDiveCard
          icon={Radio}
          title="Live operations"
          points={[
            "Server-Sent Events feed of incoming webhooks with signed/unverified badges.",
            "Connector health dashboards with p95 latency and top failure patterns.",
            "Live agent event polling: trigger, watch, react.",
            "Thread control for graceful human handoff.",
          ]}
        />
      </div>
    </section>
  );
}

function DeepDiveCard({
  icon: Icon,
  title,
  points,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  points: string[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/15 to-emerald-500/5 text-emerald-600 ring-1 ring-emerald-500/20 dark:text-emerald-400">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      </div>
      <ul className="mt-5 space-y-3">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ForTeams() {
  const items = [
    {
      icon: BookOpen,
      title: "For product teams",
      body: "Ship agent behavior without babysitting engineers for every copy tweak.",
    },
    {
      icon: Wrench,
      title: "For engineers",
      body: "Type-safe schemas, a real API playground, and every call recorded for cURL.",
    },
    {
      icon: FileText,
      title: "For agencies",
      body: "Export a client's whole configuration as JSON, replicate it on the next account.",
    },
  ];
  return (
    <section className="border-y border-border/60 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="flex items-start gap-3">
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-background text-emerald-600 ring-1 ring-border dark:text-emerald-400">
                <it.icon className="h-4 w-4" />
              </span>
              <div>
                <div className="text-sm font-semibold">{it.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "What do I need to get started?",
      a: "A Meta Business account with the Agent Platform enabled, plus a valid access token. You paste the token on sign-in and the studio handles the rest, discovering your WABAs, phone numbers, and existing agents.",
    },
    {
      q: "Where does my access token live?",
      a: "In an encrypted, httpOnly session cookie, server-side only. The browser never sees the raw token, and every Meta API call is proxied through same-origin routes that inject it at request time.",
    },
    {
      q: "Which AI model does the studio use?",
      a: "The agent itself runs on Meta's Business Agent Platform. Optional assistive features (skill drafting, doc-to-agent generation) call your configured provider: either the local Claude Agent SDK or any OpenAI-compatible endpoint (OpenAI, Ollama, LM Studio, Together, and more).",
    },
    {
      q: "Can I import a configuration I already built?",
      a: "Yes. Every workspace can be exported as a versioned JSON bundle covering settings, business info, skills, knowledge, connectors, and tools. Import validates the shape, previews the counts, then applies mutations sequentially with a live progress bar.",
    },
    {
      q: "Is there a hosted version?",
      a: "The studio is self-hosted. Ship it as a Docker container (Dockerfile plus docker-compose.yaml included), on Apple's native container CLI, or as a one-shot Zoho Catalyst AppSail deploy. You keep control of the box, the cookie secret, and the access tokens.",
    },
    {
      q: "How do I find help while I use the app?",
      a: "Every page has a Help link in its top-right that opens the matching article in a new tab. The full help center at /help has a search box (press / to focus) that ranks matches across article titles, sections, and body text.",
    },
    {
      q: "How do I test changes safely before going live?",
      a: "Use the built-in test chat, save any promising conversation as a scenario, and replay saved scenarios side-by-side against your current config. Combine with the Meta eval suite for structured regression testing.",
    },
  ];

  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="FAQ"
        title="Straight answers."
        description="If you have another question, browse the full help center. Every page in the studio also has a Help link that opens the matching article."
      />
      <div className="divide-y divide-border rounded-2xl border border-border bg-card">
        {faqs.map((f) => (
          <details key={f.q} className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-left">
              <span className="text-base font-medium">{f.q}</span>
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function FinalCta({
  primaryCtaHref,
  primaryCtaLabel,
}: {
  primaryCtaHref: string;
  primaryCtaLabel: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-emerald-500/10 via-background to-background p-10 shadow-sm sm:p-16">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Your customers already message you on WhatsApp.
          </h2>
          <p className="mt-4 text-balance text-lg text-muted-foreground">
            Give them an agent that actually helps. Sign in with a Meta access token and be
            testing your first agent within the hour.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={primaryCtaHref}>
                {primaryCtaLabel}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#features">Explore the features</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Logo size={22} />
          <span>WhatsApp Business Agent Studio</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <Link href="/login" className="hover:text-foreground">
            Sign in
          </Link>
          <Link href="#features" className="hover:text-foreground">
            Features
          </Link>
          <Link href="#faq" className="hover:text-foreground">
            FAQ
          </Link>
          <a
            href="https://developers.facebook.com/docs/whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-foreground"
          >
            Meta docs
            <Github className="h-3 w-3 opacity-0" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <div className="mb-3 text-xs font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
        {eyebrow}
      </div>
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-balance text-base text-muted-foreground sm:text-lg">{description}</p>
    </div>
  );
}
