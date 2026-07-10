import { g as e, h as t } from "./src-CXddVwgO.js";
import { c as n } from "./chunk-CSCIHK7Q-CHXp-B5u.js";
//#region ../../node_modules/.pnpm/mermaid@11.15.0/node_modules/mermaid/dist/chunks/mermaid.core/chunk-2J33WTMH.mjs
var r = /* @__PURE__ */ t((t, r, o, s) => {
	t.attr("class", o);
	let { width: c, height: l, x: u, y: d } = i(t, r);
	n(t, l, c, s);
	let f = a(u, d, c, l, r);
	t.attr("viewBox", f), e.debug(`viewBox configured: ${f} with padding: ${r}`);
}, "setupViewPortForSVG"), i = /* @__PURE__ */ t((e, t) => {
	let n = e.node()?.getBBox() || {
		width: 0,
		height: 0,
		x: 0,
		y: 0
	};
	return {
		width: n.width + t * 2,
		height: n.height + t * 2,
		x: n.x,
		y: n.y
	};
}, "calculateDimensionsWithPadding"), a = /* @__PURE__ */ t((e, t, n, r, i) => `${e - i} ${t - i} ${n} ${r}`, "createViewBox");
//#endregion
export { r as t };
