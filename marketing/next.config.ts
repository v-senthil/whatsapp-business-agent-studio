import type { NextConfig } from "next";
import path from "node:path";

// GitHub Pages serves the site under /<repo-name>/. Set NEXT_PUBLIC_BASE_PATH
// to the repo name (leading slash, no trailing) when building for Pages.
// Leave unset for local dev / preview.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: basePath || undefined,
  // The trailing slash makes GitHub Pages resolve /whatsapp-business-agent-studio/
  // to /whatsapp-business-agent-studio/index.html without a redirect.
  trailingSlash: true,
  images: { unoptimized: true },
  // The shared marketing components live under ../src, outside this project's
  // tree. Tell Next's file tracer to include the parent so imports resolve
  // during static export.
  outputFileTracingRoot: path.join(process.cwd(), ".."),
};

export default nextConfig;
