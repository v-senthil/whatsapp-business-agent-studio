import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { Ct as n, St as r, _t as i, bt as a, xt as o, yt as s } from "./main-CQFzjeJU.js";
import { t as c } from "./jsx-runtime-Bcg76ucg.js";
import { t as l } from "./cn-yMl495m5.js";
import { S as u, b as d, x as f, y as p } from "./ZudokuContext-BxG8utmj.js";
import { r as m } from "./shiki-B7Vw5ftG.js";
import { i as h, n as g, r as _, t as v } from "./dist-CHL3WZKu.js";
import { t as y } from "./SyntaxHighlight-bEdAb5c0.js";
//#region src/lib/ui/CodeTabs.tsx
var b = /* @__PURE__ */ e(t(), 1), x = c(), S = u()(f((e) => ({
	tabs: {},
	setTab: (t, n) => e((e) => ({ tabs: {
		...e.tabs,
		[t]: n
	} }))
}), {
	name: "zudoku-code-tabs",
	storage: d(() => localStorage)
}));
p(S);
var C = (e) => (0, b.isValidElement)(e) && e.type.displayName === i.displayName, w = ({ children: e, syncKey: t, hideIcon: i = !1 }) => {
	let c = (0, b.useRef)(null), [u, d] = (0, b.useState)(0), f = S((e) => t ? e.tabs[t] : void 0), p = S((e) => e.setTab), w = (0, b.useMemo)(() => b.Children.toArray(e).filter(C).map(({ props: e }, t) => {
		let n = e.meta ? m(e.meta) : {}, r = typeof n.icon == "string" ? n.icon : void 0, i = typeof n.title == "string" ? n.title : void 0;
		return {
			...e,
			icon: e.icon ?? r,
			title: e.title ?? i,
			showLineNumbers: n.showLineNumbers,
			label: i ?? e.title ?? e.language ?? `Tab ${t + 1}`
		};
	}), [e]), T = f ? w.findIndex((e) => e.label === f) : -1, E = Math.min(Math.max(0, t ? T : u), w.length - 1), D = (e) => {
		let n = w[e];
		t && n ? p(t, n.label) : d(e);
	}, O = w.at(E);
	return /* @__PURE__ */ (0, x.jsxs)(_, {
		value: String(E),
		onValueChange: (e) => D(Number(e)),
		className: a,
		children: [/* @__PURE__ */ (0, x.jsxs)("div", {
			className: r,
			children: [/* @__PURE__ */ (0, x.jsx)(g, {
				className: "flex items-center gap-1 flex-1 text-sm w-full px-1.5",
				children: w.map((e, t) => /* @__PURE__ */ (0, x.jsxs)(h, {
					value: String(t),
					className: l("relative flex items-center gap-1.5 px-2 py-1 text-sm", "after:transition after:absolute after:opacity-0 data-[state=active]:after:opacity-100", "after:h-0.5 after:-inset-x-0.5 after:-bottom-0.5 after:bg-foreground after:rounded", "text-muted-foreground hover:text-foreground data-[state=active]:text-foreground"),
					children: [!i && /* @__PURE__ */ (0, x.jsx)(n, { language: e.icon ?? e.language }), e.label]
				}, [e.label, e.language].join(",")))
			}), /* @__PURE__ */ (0, x.jsx)(s, { contentRef: c })]
		}), /* @__PURE__ */ (0, x.jsx)("div", {
			ref: c,
			className: l(o, O?.showLineNumbers && "line-numbers"),
			children: w.map((e, t) => /* @__PURE__ */ (0, x.jsx)(v, {
				value: String(t),
				children: /* @__PURE__ */ (0, x.jsx)(y, {
					code: e.code,
					language: e.language,
					meta: e.meta
				})
			}, [e.label, e.language].join(",")))
		})]
	});
};
//#endregion
export { w as CodeTabs };
