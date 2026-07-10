import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { n, t as r } from "./dist-CyinVPgs.js";
import { t as i } from "./jsx-runtime-Bcg76ucg.js";
import { t as a } from "./createLucideIcon-CE5nuOQr.js";
import { A as o, _ as s } from "./DropdownMenu-DMEGJELa.js";
import { n as c } from "./Button-dzS4XgUY.js";
import { t as l } from "./cn-yMl495m5.js";
//#region ../../node_modules/.pnpm/unhead@3.1.3_vite@8.0.16_@types+node@22.19.1_esbuild@0.28.1_jiti@2.7.0_terser@5.46.1_tsx@4.22.4_yaml@2.9.0_/node_modules/unhead/dist/shared/unhead.fg-0ge_u.mjs
var u = /* @__PURE__ */ e(t(), 1), d = /* @__PURE__ */ new Set([
	"link",
	"style",
	"script",
	"noscript"
]), f = /* @__PURE__ */ new Set([
	"title",
	"titleTemplate",
	"script",
	"style",
	"noscript"
]), p = /* @__PURE__ */ new Set([
	"base",
	"meta",
	"link",
	"style",
	"script",
	"noscript"
]), m = /* @__PURE__ */ new Set([
	"title",
	"base",
	"htmlAttrs",
	"bodyAttrs",
	"meta",
	"link",
	"style",
	"script",
	"noscript"
]), h = /* @__PURE__ */ new Set([
	"base",
	"title",
	"titleTemplate",
	"bodyAttrs",
	"htmlAttrs",
	"templateParams"
]), g = /* @__PURE__ */ new Set([
	"key",
	"tagPosition",
	"tagPriority",
	"tagDuplicateStrategy",
	"innerHTML",
	"textContent",
	"processTemplateParams"
]), _ = /* @__PURE__ */ new Set([
	"templateParams",
	"htmlAttrs",
	"bodyAttrs"
]), v = /* @__PURE__ */ new Set([
	"theme-color",
	"google-site-verification",
	"og",
	"article",
	"book",
	"profile",
	"twitter",
	"author"
]);
//#endregion
//#region ../../node_modules/.pnpm/hookable@6.1.1/node_modules/hookable/dist/index.mjs
function y(e, t, n, r) {
	for (let i = n; i < e.length; i += 1) try {
		let n = r ? r.run(() => e[i](...t)) : e[i](...t);
		if (n && typeof n.then == "function") return Promise.resolve(n).then(() => y(e, t, i + 1, r));
	} catch (e) {
		return Promise.reject(e);
	}
}
var b = class {
	_hooks;
	constructor() {
		this._hooks = {};
	}
	hook(e, t) {
		return !e || typeof t != "function" ? () => {} : (this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
			t &&= (this.removeHook(e, t), void 0);
		});
	}
	removeHook(e, t) {
		let n = this._hooks[e];
		if (n) {
			let r = n.indexOf(t);
			r !== -1 && n.splice(r, 1), n.length === 0 && (this._hooks[e] = void 0);
		}
	}
	callHook(e, ...t) {
		let n = this._hooks[e];
		if (!(!n || n.length === 0)) return y(n, t, 0);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/unhead@3.1.3_vite@8.0.16_@types+node@22.19.1_esbuild@0.28.1_jiti@2.7.0_terser@5.46.1_tsx@4.22.4_yaml@2.9.0_/node_modules/unhead/dist/shared/unhead.mB5lMBMV.mjs
function x(e) {
	let t = new b();
	for (let n in e || {}) t.hook(n, e[n]);
	return t;
}
function S(e, t, n) {
	return e.hooks?.callHook(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/unhead@3.1.3_vite@8.0.16_@types+node@22.19.1_esbuild@0.28.1_jiti@2.7.0_terser@5.46.1_tsx@4.22.4_yaml@2.9.0_/node_modules/unhead/dist/shared/unhead.CfgPMHXt.mjs
function C(e, t) {
	let n = typeof t == "function" ? t(e) : t, r = n.key || String(e.plugins.size + 1);
	if (!e.plugins.get(r)) {
		e.plugins.set(r, n);
		for (let t in n.hooks || {}) e.hooks?.hook(t, n.hooks[t]);
	}
}
// @__NO_SIDE_EFFECTS__
function w(e, t = {}) {
	let n = !t.document, r = /* @__PURE__ */ new Map(), i = {
		_entryCount: 1,
		plugins: /* @__PURE__ */ new Map(),
		resolvedOptions: t,
		ssr: n,
		entries: r,
		render: () => e(i),
		use: (e) => C(i, e),
		push(e, t) {
			let a = t?._index ?? i._entryCount++, o = t ? { ...t } : {};
			delete o.head, delete o.onRendered;
			let s = {
				_i: a,
				input: e,
				options: o
			};
			return r.set(a, s), {
				_i: a,
				dispose() {
					r.delete(a);
				},
				patch(e) {
					n ? (s.input = e, delete s._tags) : s._pending = e, r.has(a) || r.set(a, s);
				}
			};
		}
	};
	return t.init?.forEach((e) => e && i.push(e)), i;
}
//#endregion
//#region ../../node_modules/.pnpm/@unhead+react@3.1.3_bufferutil@4.1.0_esbuild@0.28.1_lightningcss@1.32.0_oxc-parser@0.13_c858ae379b2564ac58976dc22a22e510/node_modules/@unhead/react/dist/shared/react.DF9T1fqs.mjs
var T = (0, u.createContext)(null), E = a("external-link", [
	["path", {
		d: "M15 3h6v6",
		key: "1q9fwt"
	}],
	["path", {
		d: "M10 14 21 3",
		key: "gplh6r"
	}],
	["path", {
		d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
		key: "a6xqqp"
	}]
]), D = a("info", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 16v-4",
		key: "1dtifu"
	}],
	["path", {
		d: "M12 8h.01",
		key: "e9boi3"
	}]
]);
//#endregion
//#region ../../node_modules/.pnpm/unhead@3.1.3_vite@8.0.16_@types+node@22.19.1_esbuild@0.28.1_jiti@2.7.0_terser@5.46.1_tsx@4.22.4_yaml@2.9.0_/node_modules/unhead/dist/index.mjs
function O(e, t, n = {}) {
	return e.push(t || {}, n);
}
//#endregion
//#region ../../node_modules/.pnpm/@unhead+react@3.1.3_bufferutil@4.1.0_esbuild@0.28.1_lightningcss@1.32.0_oxc-parser@0.13_c858ae379b2564ac58976dc22a22e510/node_modules/@unhead/react/dist/index.mjs
function k() {
	let e = (0, u.useContext)(T);
	if (!e) throw Error("useHead() was called without provide context.");
	return e;
}
function A(e, t, n) {
	let r = t.head || k(), i = (0, u.useRef)(null), a = (0, u.useRef)(e);
	if (a.current = e, r.ssr && !i.current && (i.current = n(r, e, t)), (0, u.useEffect)(() => {
		let e = n(r, a.current, t);
		return i.current = e, () => {
			e.dispose(), i.current = null;
		};
	}, [r]), (0, u.useEffect)(() => {
		i.current?.patch(e);
	}, [e]), r.ssr) return i.current;
	let o = (0, u.useRef)(null);
	return o.current ||= {
		patch: (e) => {
			i.current?.patch(e);
		},
		dispose: () => {
			i.current?.dispose(), i.current = null;
		},
		_poll: (e) => {
			i.current?._poll(e);
		}
	}, o.current;
}
function j(e = {}, t = {}) {
	return A(e, t, O);
}
var M = ({ children: e, titleTemplate: t }) => {
	let n = k(), r = (0, u.useMemo)(() => u.Children.toArray(e).filter(u.isValidElement), [e]), i = (0, u.useCallback)(() => {
		let e = { titleTemplate: t };
		for (let t of r) {
			let { type: n, props: r } = t, i = String(n);
			if (!m.has(i)) continue;
			let a = { ...typeof r == "object" ? r : {} };
			if (f.has(i) && a.children) {
				let e = i === "script" ? "innerHTML" : "textContent";
				a[e] = Array.isArray(a.children) ? a.children.map(String).join("") : String(a.children);
			}
			if (delete a.children, p.has(i)) {
				let t = i;
				Array.isArray(e[t]) || (e[t] = []), e[t].push(a);
			} else e[i] = a;
		}
		return e;
	}, [r, t]), a = (0, u.useRef)(n.push(i()));
	return (0, u.useEffect)(() => () => {
		a.current?.dispose && a.current.dispose(), a.current = null;
	}, []), (0, u.useEffect)(() => {
		a.current?.patch(i());
	}, [i]), null;
}, N = i(), P = ({ children: e, className: t }) => /* @__PURE__ */ (0, N.jsx)("div", {
	className: n("text-sm font-semibold text-primary", t),
	"data-pagefind-ignore": "all",
	children: e
}), F = (0, u.createContext)({
	activeAnchor: "",
	setActiveAnchor: () => {},
	observe: () => {},
	unobserve: () => {}
}), I = () => (0, u.use)(F), L = () => {
	let e = (0, u.useRef)(null), { observe: t, unobserve: n } = I();
	return (0, u.useEffect)(() => {
		let r = e.current;
		if (r) return t(r), () => n(r);
	}, [t, n]), { ref: (0, u.useCallback)((t) => {
		t && (e.current = t);
	}, []) };
}, R = ({ children: e }) => {
	let [t, n] = (0, u.useState)(""), r = (0, u.useRef)(null), i = (0, u.useRef)(/* @__PURE__ */ new Set()), a = (0, u.useRef)(/* @__PURE__ */ new Set());
	(0, u.useEffect)(() => (r.current = new IntersectionObserver((e) => {
		for (let t of e) t.isIntersecting && t.target.id && n(t.target.id);
	}, {
		rootMargin: "0px 0px -80% 0px",
		threshold: .75
	}), a.current.forEach((e) => {
		i.current.add(e), r.current?.observe(e);
	}), a.current.clear(), () => r.current?.disconnect()), []), (0, u.useEffect)(() => {
		let e = i.current, t = () => {
			let t = window.scrollY === 0, r = window.innerHeight + window.scrollY >= document.body.scrollHeight;
			t ? n("") : r && n(Array.from(e).pop()?.id ?? "");
		};
		return document.addEventListener("scroll", t), () => {
			e.clear(), document.removeEventListener("scroll", t);
		};
	}, []);
	let o = (0, u.useMemo)(() => ({
		observe: (e) => {
			if (e) {
				if (!r.current) {
					a.current.add(e);
					return;
				}
				i.current.add(e), r.current.observe(e);
			}
		},
		unobserve: (e) => {
			e && (a.current.delete(e), i.current.delete(e), r.current?.unobserve(e));
		}
	}), []);
	return /* @__PURE__ */ (0, N.jsx)(F, {
		value: (0, u.useMemo)(() => ({
			activeAnchor: t,
			setActiveAnchor: n,
			...o
		}), [t, o]),
		children: e
	});
}, z = r("group relative", {
	variants: { level: {
		6: "text-md",
		5: "text-lg",
		4: "text-xl",
		3: "text-xl font-semibold",
		2: "text-2xl font-bold",
		1: "text-4xl font-extrabold"
	} },
	defaultVariants: { level: 1 }
}), B = (e) => {
	switch (e) {
		case 1: return "h1";
		case 2: return "h2";
		case 3: return "h3";
		case 4: return "h4";
		case 5: return "h5";
		case 6: return "h6";
		default: return "h1";
	}
}, V = ({ level: e, children: t, id: n, className: r, registerNavigationAnchor: i, ...a }) => {
	let s = B(e ?? 1), { ref: c } = L();
	return /* @__PURE__ */ (0, N.jsxs)(s, {
		className: z({
			className: r,
			level: e
		}),
		ref: i ? c : void 0,
		id: n,
		...a,
		children: [t, n && /* @__PURE__ */ (0, N.jsx)("a", {
			href: `#${n}`,
			className: "ms-[0.33em] rounded text-[0.8em] text-muted-foreground p-0.5 -m-0.5 opacity-0 group-hover:opacity-50 hover:text-primary hover:opacity-100! transition-opacity duration-200 inline-flex items-center align-middle",
			"aria-label": `Link to ${n}`,
			children: /* @__PURE__ */ (0, N.jsx)(o, { className: "size-[0.75em] min-w-4 min-h-4" })
		})]
	});
}, H = "Separator", U = "horizontal", W = ["horizontal", "vertical"], G = u.forwardRef((e, t) => {
	let { decorative: n, orientation: r = U, ...i } = e, a = K(r) ? r : U, o = n ? { role: "none" } : {
		"aria-orientation": a === "vertical" ? a : void 0,
		role: "separator"
	};
	return /* @__PURE__ */ (0, N.jsx)(s.div, {
		"data-orientation": a,
		...o,
		...i,
		ref: t
	});
});
G.displayName = H;
function K(e) {
	return W.includes(e);
}
var q = G;
//#endregion
//#region src/lib/ui/Separator.tsx
function J({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }) {
	return /* @__PURE__ */ (0, N.jsx)(q, {
		"data-slot": "separator",
		decorative: n,
		orientation: t,
		className: l("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", e),
		...r
	});
}
//#endregion
//#region src/lib/ui/Badge.tsx
var Y = r("inline-flex items-center justify-center rounded-lg border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
		secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
		warning: "border-transparent bg-warning text-warning-foreground [a&]:hover:bg-warning/90",
		destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
		outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
		muted: "bg-muted text-muted-foreground "
	} },
	defaultVariants: { variant: "default" }
});
function X({ className: e, variant: t, asChild: n = !1, ...r }) {
	return /* @__PURE__ */ (0, N.jsx)(n ? c : "span", {
		"data-slot": "badge",
		className: l(Y({ variant: t }), e),
		...r
	});
}
//#endregion
export { m as C, _ as S, p as _, I as a, f as b, j as c, T as d, w as f, d as g, x as h, R as i, D as l, S as m, J as n, P as o, C as p, V as r, M as s, X as t, E as u, v, h as x, g as y };
