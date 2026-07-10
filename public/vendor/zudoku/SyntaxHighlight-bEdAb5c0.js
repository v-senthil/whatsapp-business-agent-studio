import { a as e, r as t } from "./chunk-HEgqtunE.js";
import { t as n } from "./react-DCUEsnwl.js";
import { vt as r } from "./main-CQFzjeJU.js";
import { t as i } from "./jsx-runtime-Bcg76ucg.js";
import { n as a, r as o } from "./useCopyToClipboard-9GjEEqo_.js";
import { t as s } from "./Button-dzS4XgUY.js";
import { t as c } from "./cn-yMl495m5.js";
import { r as l } from "./ZudokuContext-BxG8utmj.js";
import { n as u } from "./shiki-B7Vw5ftG.js";
import { t as d } from "./useHighlighter-Bh281Ptw.js";
//#region src/lib/ui/EmbeddedCodeBlock.tsx
var f = /* @__PURE__ */ e(n(), 1), p = i(), m = ({ children: e, fullHeight: t, language: n, showCopy: r = "hover", showCopyText: i, showLanguageIndicator: l = !0, showLineNumbers: u, ...d }) => {
	let [m, h] = (0, f.useState)(!1), g = (0, f.useRef)(null);
	return e ? /* @__PURE__ */ (0, p.jsxs)("div", {
		className: c("code-block-wrapper relative group bg-muted/50", u && "line-numbers", t && "h-full"),
		children: [
			/* @__PURE__ */ (0, p.jsx)("div", {
				className: c("relative overflow-auto", t && "h-full"),
				children: /* @__PURE__ */ (0, p.jsx)("div", {
					className: c("code-block text-sm not-prose scrollbar [&>pre]:overflow-x-auto [&_code]:p-2", t && "h-full [&>pre]:h-full [&>code]:min-h-full", d.className),
					ref: g,
					children: e
				})
			}),
			l && /* @__PURE__ */ (0, p.jsx)("span", {
				className: c("absolute top-1.5 end-3 text-[11px]! font-mono text-muted-foreground transition group-hover:opacity-0 pointer-events-none", r === "always" && "hidden"),
				children: n
			}),
			r !== "never" && /* @__PURE__ */ (0, p.jsxs)(s, {
				type: "button",
				variant: "outline",
				size: "icon-xs",
				"aria-label": "Copy code",
				className: c("absolute top-2 end-2 p-2", r === "hover" && "opacity-0 group-hover:opacity-100", i && "flex gap-2 items-center font-medium"),
				disabled: m,
				onClick: () => {
					g.current?.textContent && (h(!0), navigator.clipboard.writeText(g.current.textContent), setTimeout(() => h(!1), 2e3));
				},
				children: [m ? /* @__PURE__ */ (0, p.jsx)(o, {
					className: "shrink-0 text-emerald-600 dark:text-emerald-300",
					size: 13,
					strokeWidth: 2.5,
					absoluteStrokeWidth: !0,
					"aria-hidden": "true"
				}) : /* @__PURE__ */ (0, p.jsx)(a, {
					className: "shrink-0",
					size: 13,
					"aria-hidden": "true"
				}), i && "Copy"]
			})
		]
	}) : null;
}, h = /* @__PURE__ */ t({
	HighlightedCode: () => g,
	SyntaxHighlight: () => _,
	default: () => _
}), g = ({ code: e, language: t, meta: n }) => {
	let { syntaxHighlighting: r } = l().options;
	return u(d(), e, t, r?.themes, n);
}, _ = (0, f.memo)(({ code: e, children: t, embedded: n, ...i }) => /* @__PURE__ */ (0, p.jsx)(n ? m : r, {
	...i,
	children: /* @__PURE__ */ (0, p.jsx)(g, {
		code: e ?? t,
		language: i.language
	})
}));
_.displayName = "SyntaxHighlight";
//#endregion
export { _ as n, h as r, g as t };
