import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { Bt as n, Ft as r, It as i } from "./main-CQFzjeJU.js";
import { o as a, t as o } from "./joinUrl-51baNiN4.js";
import { t as s } from "./jsx-runtime-Bcg76ucg.js";
//#region src/lib/plugins/openapi/OasProvider.tsx
var c = /* @__PURE__ */ e(t(), 1), l = s(), u = ({ basePath: e, version: t, config: s, client: u }) => /* @__PURE__ */ (0, l.jsx)(i, {
	value: (0, c.useMemo)(() => {
		let { versions: n, versionMap: i } = r(s), a = t ?? n.at(0), c = Object.fromEntries(n.map((t) => {
			let n = i[t];
			return [t, {
				path: o(e, t),
				label: n?.label ?? t,
				downloadUrl: n?.downloadUrl,
				tagPages: n?.tagPages
			}];
		})), l = () => {
			if (!Array.isArray(s.input)) return s.input;
			let e = a ? s.input.find((e) => e.path === a) : s.input[0];
			if (!e) throw Error(`No input found for version: ${a}`);
			return e.input;
		};
		return { config: {
			...s,
			version: a,
			versions: c,
			input: l()
		} };
	}, [
		s,
		e,
		t
	]),
	children: /* @__PURE__ */ (0, l.jsx)(n, {
		client: u,
		children: /* @__PURE__ */ (0, l.jsx)(a, {})
	})
});
//#endregion
export { u as OasProvider };
