import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { t as n } from "./dist-CyinVPgs.js";
import { t as r } from "./jsx-runtime-Bcg76ucg.js";
import { t as i } from "./createLucideIcon-CE5nuOQr.js";
import { t as a } from "./cn-yMl495m5.js";
var o = i("loader-circle", [["path", {
	d: "M21 12a9 9 0 1 1-6.219-8.56",
	key: "13zald"
}]]), s = r(), c = ({ size: e = 16 }) => /* @__PURE__ */ (0, s.jsx)(o, {
	size: e,
	className: "animate-spin"
}), l = /* @__PURE__ */ e(t(), 1), u = (e, t, n, r, i, a, o, s) => {
	let c = document.documentElement, l = ["light", "dark"];
	function u(t) {
		(Array.isArray(e) ? e : [e]).forEach((e) => {
			let n = e === "class", r = n && a ? i.map((e) => a[e] || e) : i;
			n ? (c.classList.remove(...r), c.classList.add(a && a[t] ? a[t] : t)) : c.setAttribute(e, t);
		}), d(t);
	}
	function d(e) {
		s && l.includes(e) && (c.style.colorScheme = e);
	}
	function f() {
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}
	if (r) u(r);
	else try {
		let e = localStorage.getItem(t) || n;
		u(o && e === "system" ? f() : e);
	} catch {}
}, d = ["light", "dark"], f = "(prefers-color-scheme: dark)", p = typeof window > "u", m = l.createContext(void 0), h = {
	setTheme: (e) => {},
	themes: []
}, g = () => l.useContext(m) ?? h, _ = (e) => l.useContext(m) ? l.createElement(l.Fragment, null, e.children) : l.createElement(y, { ...e }), v = ["light", "dark"], y = ({ forcedTheme: e, disableTransitionOnChange: t = !1, enableSystem: n = !0, enableColorScheme: r = !0, storageKey: i = "theme", themes: a = v, defaultTheme: o = n ? "system" : "light", attribute: s = "data-theme", value: c, children: u, nonce: p, scriptProps: h }) => {
	let [g, _] = l.useState(() => x(i, o)), [y, w] = l.useState(() => g === "system" ? C() : g), T = c ? Object.values(c) : a, E = l.useCallback((e) => {
		let i = e;
		if (!i) return;
		e === "system" && n && (i = C());
		let a = c ? c[i] : i, l = t ? S(p) : null, u = document.documentElement, f = (e) => {
			e === "class" ? (u.classList.remove(...T), a && u.classList.add(a)) : e.startsWith("data-") && (a ? u.setAttribute(e, a) : u.removeAttribute(e));
		};
		if (Array.isArray(s) ? s.forEach(f) : f(s), r) {
			let e = d.includes(o) ? o : null, t = d.includes(i) ? i : e;
			u.style.colorScheme = t;
		}
		l?.();
	}, [p]), D = l.useCallback((e) => {
		let t = typeof e == "function" ? e(g) : e;
		_(t);
		try {
			localStorage.setItem(i, t);
		} catch {}
	}, [g]), O = l.useCallback((t) => {
		w(C(t)), g === "system" && n && !e && E("system");
	}, [g, e]);
	l.useEffect(() => {
		let e = window.matchMedia(f);
		return e.addListener(O), O(e), () => e.removeListener(O);
	}, [O]), l.useEffect(() => {
		let e = (e) => {
			e.key === i && (e.newValue ? _(e.newValue) : D(o));
		};
		return window.addEventListener("storage", e), () => window.removeEventListener("storage", e);
	}, [D]), l.useEffect(() => {
		E(e ?? g);
	}, [e, g]);
	let k = l.useMemo(() => ({
		theme: g,
		setTheme: D,
		forcedTheme: e,
		resolvedTheme: g === "system" ? y : g,
		themes: n ? [...a, "system"] : a,
		systemTheme: n ? y : void 0
	}), [
		g,
		D,
		e,
		y,
		n,
		a
	]);
	return l.createElement(m.Provider, { value: k }, l.createElement(b, {
		forcedTheme: e,
		storageKey: i,
		attribute: s,
		enableSystem: n,
		enableColorScheme: r,
		defaultTheme: o,
		value: c,
		themes: a,
		nonce: p,
		scriptProps: h
	}), u);
}, b = l.memo(({ forcedTheme: e, storageKey: t, attribute: n, enableSystem: r, enableColorScheme: i, defaultTheme: a, value: o, themes: s, nonce: c, scriptProps: d }) => {
	let f = JSON.stringify([
		n,
		t,
		a,
		e,
		s,
		o,
		r,
		i
	]).slice(1, -1);
	return l.createElement("script", {
		...d,
		suppressHydrationWarning: !0,
		nonce: typeof window > "u" ? c : "",
		dangerouslySetInnerHTML: { __html: `(${u.toString()})(${f})` }
	});
}), x = (e, t) => {
	if (p) return;
	let n;
	try {
		n = localStorage.getItem(e) || void 0;
	} catch {}
	return n || t;
}, S = (e) => {
	let t = document.createElement("style");
	return e && t.setAttribute("nonce", e), t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(t), () => {
		window.getComputedStyle(document.body), setTimeout(() => {
			document.head.removeChild(t);
		}, 1);
	};
}, C = (e) => (e ||= window.matchMedia(f), e.matches ? "dark" : "light"), w = n("grid gap-0.5 rounded-lg border text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4 w-full relative group/alert", {
	variants: {
		variant: {
			default: "bg-card text-card-foreground",
			info: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/45 dark:text-blue-200 dark:border-blue-900/75",
			destructive: "text-destructive bg-card bg-destructive/5 border-destructive/20 *:data-[slot=alert-description]:text-destructive *:[svg]:text-current",
			warning: "text-warning-foreground bg-card bg-warning/5 border-warning/50 *:data-[slot=alert-description]:text-warning-foreground *:[svg]:text-current"
		},
		fit: {
			default: "px-2.5 py-2",
			loose: "p-4"
		}
	},
	defaultVariants: {
		variant: "default",
		fit: "default"
	}
});
function T({ className: e, fit: t, variant: n, ...r }) {
	return /* @__PURE__ */ (0, s.jsx)("div", {
		"data-slot": "alert",
		role: "alert",
		className: a(w({
			variant: n,
			fit: t
		}), e),
		...r
	});
}
function E({ className: e, ...t }) {
	return /* @__PURE__ */ (0, s.jsx)("div", {
		"data-slot": "alert-title",
		className: a("font-medium group-has-[>svg]/alert:col-start-2 [&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3", e),
		...t
	});
}
function D({ className: e, ...t }) {
	return /* @__PURE__ */ (0, s.jsx)("div", {
		"data-slot": "alert-description",
		className: a("text-muted-foreground text-sm text-balance md:text-pretty [&_p:not(:last-child)]:mb-4 [&_a]:hover:text-foreground [&_a]:underline [&_a]:underline-offset-3", e),
		...t
	});
}
//#endregion
export { g as a, _ as i, D as n, c as o, E as r, o as s, T as t };
