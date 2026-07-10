import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { Et as n, Vt as r } from "./main-CQFzjeJU.js";
import { _ as i, c as a, g as o, o as s, s as c, v as l } from "./PlaygroundDialog-CEjHvOmj.js";
import { t as u } from "./jsx-runtime-Bcg76ucg.js";
import { a as d, n as f, o as p, r as m, t as h } from "./Alert-DicPSkXo.js";
import { t as g } from "./cn-yMl495m5.js";
import { t as _ } from "./useApiIdentitySelection-DTWtlhVB.js";
import { t as v } from "./loadGraphiQLFromCdn-rItPIGYe.js";
//#region src/lib/errors/ErrorMessage.tsx
var y = /* @__PURE__ */ e(t(), 1), b = u();
(0, y.lazy)(() => import("./SyntaxHighlight-bEdAb5c0.js").then((e) => e.r).then((e) => ({ default: e.SyntaxHighlight })));
function x({ error: e }) {
	let t = e instanceof Error ? e.message : "Something went wrong";
	e instanceof r && e.developerHint;
	let n = e instanceof r ? e.title : "Something went wrong";
	e instanceof Error && e.stack;
	let i = e instanceof Error ? e.cause : void 0;
	return i instanceof Error && String(i.stack), /* @__PURE__ */ (0, b.jsxs)(b.Fragment, { children: [
		/* @__PURE__ */ (0, b.jsxs)(h, {
			variant: "destructive",
			children: [/* @__PURE__ */ (0, b.jsx)(m, { children: n }), /* @__PURE__ */ (0, b.jsx)(f, { children: t })]
		}),
		!1,
		!1
	] });
}
//#endregion
//#region src/lib/graphiql/GraphiQLViewer.tsx
var S = (e) => {
	let t = globalThis.__MONACO;
	t && t.editor.setTheme(e === "dark" ? "graphiql-DARK" : "graphiql-LIGHT");
}, C = ({ createGraphiQLFetcher: e }, { fetcher: t, endpoint: n, headers: r, fetchFn: i }) => t || (n ? e({
	url: n,
	headers: r,
	fetch: i
}) : () => Promise.reject(/* @__PURE__ */ Error("No GraphQL endpoint configured for this playground."))), w = ({ React: e, GraphiQL: t }, n, r, i, a) => {
	let o = a ? e.createElement(t.Footer, null, e.createElement("div", { className: "px-2 py-1.5 text-xs text-muted-foreground" }, a)) : null;
	n.render(e.createElement(e.Suspense, {}, e.createElement(t, {
		...i,
		key: r
	}, e.createElement(t.Logo, null, "GraphQL Playground"), o)));
}, T = (e, t) => {
	let n = document.createElement("div");
	return n.className = "h-full w-full", t.appendChild(n), {
		root: e.createRoot(n),
		host: n
	};
}, E = ({ root: e, host: t }) => {
	setTimeout(() => {
		e.unmount(), t.remove();
	}, 0);
}, D = (e, t) => {
	let n = !1, r = () => {
		n || (n = !0, requestAnimationFrame(() => {
			n = !1, S(t);
		}));
	};
	r();
	let i = new MutationObserver(r);
	return i.observe(e, {
		childList: !0,
		subtree: !0
	}), () => i.disconnect();
}, O = (e) => {
	let { resolvedTheme: t } = d(), n = t === "dark" ? "dark" : "light", r = (0, y.use)(v()), i = (0, y.useRef)(null), a = (0, y.useRef)(null), { className: o, schema: s, resetKey: c, fetcher: u, fetchFn: f, footerNote: p, endpoint: m, headers: h, hideToolbarButtons: _ = !0, ...x } = e, S = l(x), O = (0, y.useMemo)(() => C(r, {
		fetcher: u,
		endpoint: m,
		headers: h,
		fetchFn: f
	}), [
		r,
		u,
		m,
		h,
		f
	]);
	return (0, y.useEffect)(() => {
		let e = i.current;
		if (!e) return;
		let t = T(r, e);
		return a.current = t, () => {
			a.current = null, E(t);
		};
	}, [r]), (0, y.useEffect)(() => {
		a.current && w(r, a.current.root, c ?? "default", {
			...S.current,
			fetcher: O,
			schema: s,
			defaultQuery: S.current.initialQuery,
			forcedTheme: n
		}, p);
	}, [
		r,
		O,
		s,
		n,
		c,
		S,
		p
	]), (0, y.useEffect)(() => {
		let e = i.current;
		if (e) return D(e, n);
	}, [n]), /* @__PURE__ */ (0, b.jsx)("div", {
		ref: i,
		className: g("zudoku-graphiql relative h-full w-full", _ && "hide-toolbar-buttons", o)
	});
}, k = (e) => /* @__PURE__ */ (0, b.jsx)(n, {
	fallbackRender: ({ error: t }) => /* @__PURE__ */ (0, b.jsx)("div", {
		className: g("grid h-full place-items-center p-8", e.className),
		children: /* @__PURE__ */ (0, b.jsx)(x, { error: t })
	}),
	children: /* @__PURE__ */ (0, b.jsx)(y.Suspense, {
		fallback: /* @__PURE__ */ (0, b.jsx)("div", {
			className: g("grid h-full place-items-center text-muted-foreground", e.className),
			children: /* @__PURE__ */ (0, b.jsx)(p, { size: 24 })
		}),
		children: /* @__PURE__ */ (0, b.jsx)(O, { ...e })
	})
}), A = (e, t, n, r) => {
	let { credentials: i } = a.getState(), o = i[n], l = r?.some((e) => e.schemes.some((e) => e.scheme.name === n));
	if (!o?.isAuthorized || !l) return;
	let u = { [n]: o }, d = new URL(e instanceof Request ? e.url : e, window.location.href);
	for (let [e, t] of c(r, u)) d.searchParams.set(e, t);
	let f = new Request(d, e instanceof Request ? e : t);
	return s(f, r, u), f;
}, j = ({ endpoint: e, defaultTabs: t, security: n }) => {
	let { authorizeRequest: r, selectedIdentity: s } = _(), c = o((e) => e.rememberedIdentity), u = a((e) => e.credentials), d = l(n), f = i(c), p = f.type === "scheme" && (u[f.name]?.isAuthorized ?? !1) && n?.some((e) => e.schemes.some((e) => e.scheme.name === f.name)), m = f.type === "scheme" ? p ? f.name : void 0 : s?.label;
	return /* @__PURE__ */ (0, b.jsx)(k, {
		endpoint: e,
		fetchFn: (0, y.useMemo)(() => async (e, t) => {
			let n = i(o.getState().rememberedIdentity);
			if (n.type === "scheme") {
				let r = A(e, t, n.name, d.current);
				return r ? fetch(r) : fetch(e, t);
			}
			return fetch(await r(new Request(e, t)));
		}, [r, d]),
		footerNote: m ? `Authorized as “${m}”. Auth is applied automatically when the request is sent.` : void 0,
		defaultTabs: t,
		className: "h-full w-full"
	});
};
//#endregion
export { j as GraphiQLPanel, j as default };
