import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { kt as n } from "./main-CQFzjeJU.js";
import { t as r } from "./jsx-runtime-Bcg76ucg.js";
import { t as i } from "./lib-CpsVp6_W.js";
//#region src/lib/util/hastToJsx.tsx
var a = /* @__PURE__ */ e(t(), 1), o = r(), s = (e) => e.type === "mdxJsxTextElement" || e.type === "mdxJsxFlowElement", c = (e, t) => s(e) ? (0, a.createElement)(e.name ? t[e.name] ?? e.name : a.Fragment, Object.fromEntries(e.attributes.flatMap((e) => {
	if (e.type !== "mdxJsxAttribute") return [];
	let { name: t, value: n } = e;
	return n == null ? [[t, !0]] : [
		"string",
		"number",
		"boolean"
	].includes(typeof n) ? [[t, n]] : [];
})), ...e.children.map((e) => c(e, t))) : i(e, {
	Fragment: a.Fragment,
	jsx: o.jsx,
	jsxs: o.jsxs,
	components: t
}), l = ({ children: e, overrides: t }) => {
	let r = n(t);
	return e.map((e, t) => /* @__PURE__ */ (0, o.jsx)(a.Fragment, { children: c(e, r) }, t));
};
//#endregion
export { l as default };
