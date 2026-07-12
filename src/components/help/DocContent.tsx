import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";

interface Props {
  markdown: string;
  basePath?: string;
}

// Next auto-prefixes basePath on <Link> and next/image, but the raw <img> that
// react-markdown emits is left alone — so on GitHub Pages, absolute paths like
// `/help/screenshots/foo.png` resolve to the site root instead of
// `/<repo>/help/screenshots/foo.png`. Read the marketing build's
// NEXT_PUBLIC_BASE_PATH once at module load and prepend it here.
const IMG_BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

function resolveRelative(base: string, target: string): string {
  const baseParts = base.split("/").filter(Boolean);
  baseParts.pop();
  const targetParts = target.split("/");
  for (const part of targetParts) {
    if (part === "" || part === ".") continue;
    if (part === "..") baseParts.pop();
    else baseParts.push(part);
  }
  return "/" + baseParts.join("/");
}

function resolveImageSrc(src: string): string {
  if (!IMG_BASE_PATH) return src;
  if (/^https?:\/\//i.test(src)) return src;
  if (src.startsWith("data:")) return src;
  if (!src.startsWith("/")) return src;
  if (src.startsWith(`${IMG_BASE_PATH}/`)) return src;
  return `${IMG_BASE_PATH}${src}`;
}

export function DocContent({ markdown, basePath = "help" }: Props) {
  return (
    <article className="prose prose-neutral max-w-none dark:prose-invert prose-headings:scroll-mt-24 prose-headings:font-semibold prose-h1:text-3xl prose-h2:mt-10 prose-h2:border-b prose-h2:border-border prose-h2:pb-2 prose-h3:mt-6 prose-code:rounded prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:rounded-lg prose-pre:border prose-pre:border-border prose-pre:bg-muted prose-pre:text-foreground prose-a:text-emerald-600 hover:prose-a:text-emerald-700 dark:prose-a:text-emerald-400 dark:hover:prose-a:text-emerald-300 prose-hr:border-border prose-blockquote:border-l-emerald-500 prose-blockquote:not-italic prose-blockquote:text-muted-foreground">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children, ...rest }) => {
            if (!href) return <a {...rest}>{children}</a>;
            const isExternal = /^https?:\/\//i.test(href);
            if (isExternal) {
              return (
                <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
                  {children}
                </a>
              );
            }
            const stripped = href.replace(/\.md$/i, "");
            const anchorMatch = stripped.match(/^([^#]*)(#.*)?$/);
            const targetPath = anchorMatch?.[1] ?? stripped;
            const anchor = anchorMatch?.[2] ?? "";
            let internal: string;
            if (targetPath.startsWith("/")) {
              internal = targetPath;
            } else if (targetPath.startsWith("http")) {
              internal = targetPath;
            } else {
              internal = resolveRelative(basePath, targetPath);
            }
            return <Link href={internal + anchor}>{children}</Link>;
          },
          img: ({ src, alt, ...rest }) => {
            if (!src || typeof src !== "string") return <img alt={alt ?? ""} {...rest} />;
            // eslint-disable-next-line @next/next/no-img-element
            return <img src={resolveImageSrc(src)} alt={alt ?? ""} {...rest} />;
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
