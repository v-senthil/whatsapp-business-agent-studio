import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { _ as n, g as r, h as i, v as a } from "./PlaygroundDialog-CEjHvOmj.js";
import { r as o, t as s } from "./ZudokuContext-BxG8utmj.js";
//#region src/lib/hooks/useApiIdentitySelection.ts
var c = /* @__PURE__ */ e(t(), 1), l = [], u = (e, t) => {
	let r = n(t);
	return r.type === "identity" ? e?.find((e) => e.id === r.id) ?? null : null;
}, d = () => {
	let e = s(), { getApiIdentities: t } = o(), d = r((e) => e.rememberedIdentity), f = r((e) => e.setRememberedIdentity), p = a(e.data), m = e.data ?? l, h = u(e.data, d), g = (0, c.useCallback)((e) => f(i(e === null ? { type: "none" } : {
		type: "identity",
		id: e
	})), [f]), _ = (0, c.useCallback)(async (e) => {
		let i = r.getState().rememberedIdentity;
		if (n(i).type !== "identity") return e;
		let a = u(p.current ?? await t(), i);
		return a ? a.authorizeRequest(e) : e;
	}, [p, t]);
	return {
		identities: m,
		isLoading: e.isLoading,
		selectedIdentity: h,
		selectIdentity: g,
		authorizeRequest: _
	};
};
//#endregion
export { d as t };
