import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { t as n } from "./jsx-runtime-Bcg76ucg.js";
import { t as r } from "./useQuery-B8Uxp7FM.js";
import { a as i, n as a, o, r as s, t as c } from "./Alert-DicPSkXo.js";
//#region src/lib/components/Mermaid.tsx
var l = /* @__PURE__ */ e(t(), 1), u = n(), d = null, f = () => (d ||= import("./mermaid.core-BBsi3O2u.js").then((e) => e.default).catch((e) => {
	throw Error("Mermaid is not installed. Please install it with: npm install mermaid", { cause: e });
}), d), p = ({ chart: e, config: t, ...n }) => {
	let d = (0, l.useId)(), p = i(), { data: m, error: h, isPending: g } = r({
		queryKey: [
			"mermaid",
			e,
			t,
			p.resolvedTheme
		],
		queryFn: async () => {
			let n = await f();
			n.initialize({
				theme: p.resolvedTheme === "dark" ? "dark" : "base",
				...t
			});
			let { svg: r } = await n.render(d, e);
			return r;
		},
		enabled: typeof window < "u",
		retry: !1
	});
	return h ? /* @__PURE__ */ (0, u.jsxs)(c, {
		className: "flex flex-col gap-2",
		variant: "destructive",
		children: [/* @__PURE__ */ (0, u.jsx)(s, { children: "Mermaid Error" }), /* @__PURE__ */ (0, u.jsx)(a, {
			className: "overflow-auto wrap-break-word whitespace-pre-wrap font-mono text-xs",
			children: h.message
		})]
	}) : g ? /* @__PURE__ */ (0, u.jsx)(o, {}) : /* @__PURE__ */ (0, u.jsx)("div", {
		...n,
		dangerouslySetInnerHTML: { __html: m }
	});
};
//#endregion
export { p as Mermaid, p as default };
