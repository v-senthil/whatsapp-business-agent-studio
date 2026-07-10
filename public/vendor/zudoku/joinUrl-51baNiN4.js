import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { i as n, r, s as i } from "./dist-CyinVPgs.js";
//#region ../../node_modules/.pnpm/react-router@7.16.0_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/react-router/dist/development/chunk-QUQL4437.mjs
var a = /* @__PURE__ */ e(t(), 1), o = (e) => {
	throw TypeError(e);
}, s = (e, t, n) => t.has(e) || o("Cannot " + n), c = (e, t, n) => (s(e, t, "read from private field"), n ? n.call(e) : t.get(e)), l = (e, t, n) => t.has(e) ? o("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), u = (e, t, n, r) => (s(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), d = "popstate";
function f(e) {
	return typeof e == "object" && !!e && "pathname" in e && "search" in e && "hash" in e && "state" in e && "key" in e;
}
function p(e = {}) {
	function t(e, t) {
		let n = t.state?.masked, { pathname: r, search: i, hash: a } = n || e.location;
		return v("", {
			pathname: r,
			search: i,
			hash: a
		}, t.state && t.state.usr || null, t.state && t.state.key || "default", n ? {
			pathname: e.location.pathname,
			search: e.location.search,
			hash: e.location.hash
		} : void 0);
	}
	function n(e, t) {
		return typeof t == "string" ? t : y(t);
	}
	return x(t, n, null, e);
}
function m(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function h(e, t) {
	if (!e) {
		typeof console < "u" && console.warn(t);
		try {
			throw Error(t);
		} catch {}
	}
}
function g() {
	return Math.random().toString(36).substring(2, 10);
}
function _(e, t) {
	return {
		usr: e.state,
		key: e.key,
		idx: t,
		masked: e.mask ? {
			pathname: e.pathname,
			search: e.search,
			hash: e.hash
		} : void 0
	};
}
function v(e, t, n = null, r, i) {
	return {
		pathname: typeof e == "string" ? e : e.pathname,
		search: "",
		hash: "",
		...typeof t == "string" ? b(t) : t,
		state: n,
		key: t && t.key || r || g(),
		mask: i
	};
}
function y({ pathname: e = "/", search: t = "", hash: n = "" }) {
	return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n), e;
}
function b(e) {
	let t = {};
	if (e) {
		let n = e.indexOf("#");
		n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
		let r = e.indexOf("?");
		r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e);
	}
	return t;
}
function x(e, t, n, r = {}) {
	let { window: i = document.defaultView, v5Compat: a = !1 } = r, o = i.history, s = "POP", c = null, l = u();
	l ?? (l = 0, o.replaceState({
		...o.state,
		idx: l
	}, ""));
	function u() {
		return (o.state || { idx: null }).idx;
	}
	function p() {
		s = "POP";
		let e = u(), t = e == null ? null : e - l;
		l = e, c && c({
			action: s,
			location: y.location,
			delta: t
		});
	}
	function m(e, t) {
		s = "PUSH";
		let r = f(e) ? e : v(y.location, e, t);
		n && n(r, e), l = u() + 1;
		let d = _(r, l), p = y.createHref(r.mask || r);
		try {
			o.pushState(d, "", p);
		} catch (e) {
			if (e instanceof DOMException && e.name === "DataCloneError") throw e;
			i.location.assign(p);
		}
		a && c && c({
			action: s,
			location: y.location,
			delta: 1
		});
	}
	function h(e, t) {
		s = "REPLACE";
		let r = f(e) ? e : v(y.location, e, t);
		n && n(r, e), l = u();
		let i = _(r, l), d = y.createHref(r.mask || r);
		o.replaceState(i, "", d), a && c && c({
			action: s,
			location: y.location,
			delta: 0
		});
	}
	function g(e) {
		return S(i, e);
	}
	let y = {
		get action() {
			return s;
		},
		get location() {
			return e(i, o);
		},
		listen(e) {
			if (c) throw Error("A history only accepts one active listener");
			return i.addEventListener(d, p), c = e, () => {
				i.removeEventListener(d, p), c = null;
			};
		},
		createHref(e) {
			return t(i, e);
		},
		createURL: g,
		encodeLocation(e) {
			let t = g(e);
			return {
				pathname: t.pathname,
				search: t.search,
				hash: t.hash
			};
		},
		push: m,
		replace: h,
		go(e) {
			return o.go(e);
		}
	};
	return y;
}
function S(e, t, n = !1) {
	let r = "http://localhost";
	e && (r = e.location.origin === "null" ? e.location.href : e.location.origin), m(r, "No window.location.(origin|href) available to create URL");
	let i = typeof t == "string" ? t : y(t);
	return i = i.replace(/ $/, "%20"), !n && i.startsWith("//") && (i = r + i), new URL(i, r);
}
function C(e) {
	return { defaultValue: e };
}
var w, T = class {
	constructor(e) {
		if (l(this, w, /* @__PURE__ */ new Map()), e) for (let [t, n] of e) this.set(t, n);
	}
	get(e) {
		if (c(this, w).has(e)) return c(this, w).get(e);
		if (e.defaultValue !== void 0) return e.defaultValue;
		throw Error("No value found for context");
	}
	set(e, t) {
		c(this, w).set(e, t);
	}
};
w = /* @__PURE__ */ new WeakMap();
var E = /* @__PURE__ */ new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"children"
]);
function D(e) {
	return E.has(e);
}
var O = /* @__PURE__ */ new Set([
	"lazy",
	"caseSensitive",
	"path",
	"id",
	"index",
	"middleware",
	"children"
]);
function k(e) {
	return O.has(e);
}
function A(e) {
	return e.index === !0;
}
function j(e, t, n = [], r = {}, i = !1) {
	return e.map((e, a) => {
		let o = [...n, String(a)], s = typeof e.id == "string" ? e.id : o.join("-");
		if (m(e.index !== !0 || !e.children, "Cannot specify children on an index route"), m(i || !r[s], `Found a route id collision on id "${s}".  Route id's must be globally unique within Data Router usages`), A(e)) {
			let n = {
				...e,
				id: s
			};
			return r[s] = M(n, t(n)), n;
		} else {
			let n = {
				...e,
				id: s,
				children: void 0
			};
			return r[s] = M(n, t(n)), e.children && (n.children = j(e.children, t, o, r, i)), n;
		}
	});
}
function M(e, t) {
	return Object.assign(e, {
		...t,
		...typeof t.lazy == "object" && t.lazy != null ? { lazy: {
			...e.lazy,
			...t.lazy
		} } : {}
	});
}
function N(e, t, n = "/") {
	return P(e, t, n, !1);
}
function P(e, t, n, r, i) {
	let a = V((typeof t == "string" ? b(t) : t).pathname || "/", n);
	if (a == null) return null;
	let o = i ?? F(e), s = null, c = fe(a);
	for (let e = 0; s == null && e < o.length; ++e) s = de(o[e], c, r);
	return s;
}
function ee(e, t) {
	let { route: n, pathname: r, params: i } = e;
	return {
		id: n.id,
		pathname: r,
		params: i,
		data: t[n.id],
		loaderData: t[n.id],
		handle: n.handle
	};
}
function F(e) {
	let t = I(e);
	return ne(t), t;
}
function I(e, t = [], n = [], r = "", i = !1) {
	let a = (e, a, o = i, s) => {
		let c = {
			relativePath: s === void 0 ? e.path || "" : s,
			caseSensitive: e.caseSensitive === !0,
			childrenIndex: a,
			route: e
		};
		if (c.relativePath.startsWith("/")) {
			if (!c.relativePath.startsWith(r) && o) return;
			m(c.relativePath.startsWith(r), `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), c.relativePath = c.relativePath.slice(r.length);
		}
		let l = U([r, c.relativePath]), u = n.concat(c);
		e.children && e.children.length > 0 && (m(e.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${l}".`), I(e.children, t, u, l, o)), !(e.path == null && !e.index) && t.push({
			path: l,
			score: le(l, e.index),
			routesMeta: u
		});
	};
	return e.forEach((e, t) => {
		if (e.path === "" || !e.path?.includes("?")) a(e, t);
		else for (let n of te(e.path)) a(e, t, !0, n);
	}), t;
}
function te(e) {
	let t = e.split("/");
	if (t.length === 0) return [];
	let [n, ...r] = t, i = n.endsWith("?"), a = n.replace(/\?$/, "");
	if (r.length === 0) return i ? [a, ""] : [a];
	let o = te(r.join("/")), s = [];
	return s.push(...o.map((e) => e === "" ? a : [a, e].join("/"))), i && s.push(...o), s.map((t) => e.startsWith("/") && t === "" ? "/" : t);
}
function ne(e) {
	e.sort((e, t) => e.score === t.score ? ue(e.routesMeta.map((e) => e.childrenIndex), t.routesMeta.map((e) => e.childrenIndex)) : t.score - e.score);
}
var re = /^:[\w-]+$/, ie = 3, ae = 2, oe = 1, L = 10, se = -2, ce = (e) => e === "*";
function le(e, t) {
	let n = e.split("/"), r = n.length;
	return n.some(ce) && (r += se), t && (r += ae), n.filter((e) => !ce(e)).reduce((e, t) => e + (re.test(t) ? ie : t === "" ? oe : L), r);
}
function ue(e, t) {
	return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function de(e, t, n = !1) {
	let { routesMeta: r } = e, i = {}, a = "/", o = [];
	for (let e = 0; e < r.length; ++e) {
		let s = r[e], c = e === r.length - 1, l = a === "/" ? t : t.slice(a.length) || "/", u = z({
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: c
		}, l), d = s.route;
		if (!u && c && n && !r[r.length - 1].route.index && (u = z({
			path: s.relativePath,
			caseSensitive: s.caseSensitive,
			end: !1
		}, l)), !u) return null;
		Object.assign(i, u.params), o.push({
			params: i,
			pathname: U([a, u.pathname]),
			pathnameBase: Ce(U([a, u.pathnameBase])),
			route: d
		}), u.pathnameBase !== "/" && (a = U([a, u.pathnameBase]));
	}
	return o;
}
function R(e, t = {}) {
	let n = e;
	n.endsWith("*") && n !== "*" && !n.endsWith("/*") && (h(!1, `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`), n = n.replace(/\*$/, "/*"));
	let r = n.startsWith("/") ? "/" : "", i = (e) => e == null ? "" : typeof e == "string" ? e : String(e);
	return r + n.split(/\/+/).map((e, n, r) => {
		if (n === r.length - 1 && e === "*") return i(t["*"]);
		let a = e.match(/^:([\w-]+)(\??)(.*)/);
		if (a) {
			let [, e, n, r] = a, o = t[e];
			return m(n === "?" || o != null, `Missing ":${e}" param`), encodeURIComponent(i(o)) + r;
		}
		return e.replace(/\?$/g, "");
	}).filter((e) => !!e).join("/");
}
function z(e, t) {
	typeof e == "string" && (e = {
		path: e,
		caseSensitive: !1,
		end: !0
	});
	let [n, r] = B(e.path, e.caseSensitive, e.end), i = t.match(n);
	if (!i) return null;
	let a = i[0], o = a.replace(/(.)\/+$/, "$1"), s = i.slice(1);
	return {
		params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
			if (t === "*") {
				let e = s[r] || "";
				o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1");
			}
			let i = s[r];
			return n && !i ? e[t] = void 0 : e[t] = (i || "").replace(/%2F/g, "/"), e;
		}, {}),
		pathname: a,
		pathnameBase: o,
		pattern: e
	};
}
function B(e, t = !1, n = !0) {
	h(e === "*" || !e.endsWith("*") || e.endsWith("/*"), `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`);
	let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
		if (r.push({
			paramName: t,
			isOptional: n != null
		}), n) {
			let t = a.charAt(i + e.length);
			return t && t !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
		}
		return "/([^\\/]+)";
	}).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
	return e.endsWith("*") ? (r.push({ paramName: "*" }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function fe(e) {
	try {
		return e.split("/").map((e) => decodeURIComponent(e).replace(/\//g, "%2F")).join("/");
	} catch (t) {
		return h(!1, `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`), e;
	}
}
function V(e, t) {
	if (t === "/") return e;
	if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
	let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
	return r && r !== "/" ? null : e.slice(n) || "/";
}
function pe({ basename: e, pathname: t }) {
	return t === "/" ? e : U([e, t]);
}
var me = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, he = (e) => me.test(e);
function ge(e, t = "/") {
	let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? b(e) : e, a;
	return n ? (n = xe(n), a = n.startsWith("/") ? _e(n.substring(1), "/") : _e(n, t)) : a = t, {
		pathname: a,
		search: we(r),
		hash: Te(i)
	};
}
function _e(e, t) {
	let n = Se(t).split("/");
	return e.split("/").forEach((e) => {
		e === ".." ? n.length > 1 && n.pop() : e !== "." && n.push(e);
	}), n.length > 1 ? n.join("/") : "/";
}
function H(e, t, n, r) {
	return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function ve(e) {
	return e.filter((e, t) => t === 0 || e.route.path && e.route.path.length > 0);
}
function ye(e) {
	let t = ve(e);
	return t.map((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase);
}
function be(e, t, n, r = !1) {
	let i;
	typeof e == "string" ? i = b(e) : (i = { ...e }, m(!i.pathname || !i.pathname.includes("?"), H("?", "pathname", "search", i)), m(!i.pathname || !i.pathname.includes("#"), H("#", "pathname", "hash", i)), m(!i.search || !i.search.includes("#"), H("#", "search", "hash", i)));
	let a = e === "" || i.pathname === "", o = a ? "/" : i.pathname, s;
	if (o == null) s = n;
	else {
		let e = t.length - 1;
		if (!r && o.startsWith("..")) {
			let t = o.split("/");
			for (; t[0] === "..";) t.shift(), --e;
			i.pathname = t.join("/");
		}
		s = e >= 0 ? t[e] : "/";
	}
	let c = ge(i, s), l = o && o !== "/" && o.endsWith("/"), u = (a || o === ".") && n.endsWith("/");
	return !c.pathname.endsWith("/") && (l || u) && (c.pathname += "/"), c;
}
var xe = (e) => e.replace(/\/\/+/g, "/"), U = (e) => xe(e.join("/")), Se = (e) => e.replace(/\/+$/, ""), Ce = (e) => Se(e).replace(/^\/*/, "/"), we = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Te = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Ee = (e, t = 302) => {
	let n = t;
	typeof n == "number" ? n = { status: n } : n.status === void 0 && (n.status = 302);
	let r = new Headers(n.headers);
	return r.set("Location", e), new Response(null, {
		...n,
		headers: r
	});
}, De = class {
	constructor(e, t, n, r = !1) {
		this.status = e, this.statusText = t || "", this.internal = r, n instanceof Error ? (this.data = n.toString(), this.error = n) : this.data = n;
	}
};
function Oe(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function W(e) {
	return U(e.map((e) => e.route.path).filter(Boolean)) || "/";
}
var ke = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
function Ae(e, t) {
	let n = e;
	if (typeof n != "string" || !me.test(n)) return {
		absoluteURL: void 0,
		isExternal: !1,
		to: n
	};
	let r = n, i = !1;
	if (ke) try {
		let e = new URL(window.location.href), r = n.startsWith("//") ? new URL(e.protocol + n) : new URL(n), a = V(r.pathname, t);
		r.origin === e.origin && a != null ? n = a + r.search + r.hash : i = !0;
	} catch {
		h(!1, `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`);
	}
	return {
		absoluteURL: r,
		isExternal: i,
		to: n
	};
}
var G = Symbol("Uninstrumented");
function je(e, t) {
	let n = {
		lazy: [],
		"lazy.loader": [],
		"lazy.action": [],
		"lazy.middleware": [],
		middleware: [],
		loader: [],
		action: []
	};
	e.forEach((e) => e({
		id: t.id,
		index: t.index,
		path: t.path,
		instrument(e) {
			let t = Object.keys(n);
			for (let r of t) e[r] && n[r].push(e[r]);
		}
	}));
	let r = {};
	if (typeof t.lazy == "function" && n.lazy.length > 0) {
		let e = K(n.lazy, t.lazy, () => void 0);
		e && (r.lazy = e);
	}
	if (typeof t.lazy == "object") {
		let e = t.lazy;
		[
			"middleware",
			"loader",
			"action"
		].forEach((t) => {
			let i = e[t], a = n[`lazy.${t}`];
			if (typeof i == "function" && a.length > 0) {
				let e = K(a, i, () => void 0);
				e && (r.lazy = Object.assign(r.lazy || {}, { [t]: e }));
			}
		});
	}
	return ["loader", "action"].forEach((e) => {
		let i = t[e];
		if (typeof i == "function" && n[e].length > 0) {
			let t = i[G] ?? i, a = K(n[e], t, (...e) => Ne(e[0]));
			a && (e === "loader" && t.hydrate === !0 && (a.hydrate = !0), a[G] = t, r[e] = a);
		}
	}), t.middleware && t.middleware.length > 0 && n.middleware.length > 0 && (r.middleware = t.middleware.map((e) => {
		let t = e[G] ?? e, r = K(n.middleware, t, (...e) => Ne(e[0]));
		return r ? (r[G] = t, r) : e;
	})), r;
}
function Me(e, t) {
	let n = {
		navigate: [],
		fetch: []
	};
	if (t.forEach((e) => e({ instrument(e) {
		let t = Object.keys(e);
		for (let r of t) e[r] && n[r].push(e[r]);
	} })), n.navigate.length > 0) {
		let t = e.navigate[G] ?? e.navigate, r = K(n.navigate, t, (...t) => {
			let [n, r] = t;
			return {
				to: typeof n == "number" || typeof n == "string" ? n : n ? y(n) : ".",
				...Pe(e, r ?? {})
			};
		});
		r && (r[G] = t, e.navigate = r);
	}
	if (n.fetch.length > 0) {
		let t = e.fetch[G] ?? e.fetch, r = K(n.fetch, t, (...t) => {
			let [n, , r, i] = t;
			return {
				href: r ?? ".",
				fetcherKey: n,
				...Pe(e, i ?? {})
			};
		});
		r && (r[G] = t, e.fetch = r);
	}
	return e;
}
function K(e, t, n) {
	return e.length === 0 ? null : async (...r) => {
		let i = await q(e, n(...r), () => t(...r), e.length - 1);
		if (i.type === "error") throw i.value;
		return i.value;
	};
}
async function q(e, t, n, r) {
	let i = e[r], a;
	if (i) {
		let o, s = async () => (o ? console.error("You cannot call instrumented handlers more than once") : o = q(e, t, n, r - 1), a = await o, m(a, "Expected a result"), a.type === "error" && a.value instanceof Error ? {
			status: "error",
			error: a.value
		} : {
			status: "success",
			error: void 0
		});
		try {
			await i(s, t);
		} catch (e) {
			console.error("An instrumentation function threw an error:", e);
		}
		o || await s(), await o;
	} else try {
		a = {
			type: "success",
			value: await n()
		};
	} catch (e) {
		a = {
			type: "error",
			value: e
		};
	}
	return a || {
		type: "error",
		value: /* @__PURE__ */ Error("No result assigned in instrumentation chain.")
	};
}
function Ne(e) {
	let { request: t, context: n, params: r, pattern: i } = e;
	return {
		request: Fe(t),
		params: { ...r },
		pattern: i,
		context: Ie(n)
	};
}
function Pe(e, t) {
	return {
		currentUrl: y(e.state.location),
		..."formMethod" in t ? { formMethod: t.formMethod } : {},
		..."formEncType" in t ? { formEncType: t.formEncType } : {},
		..."formData" in t ? { formData: t.formData } : {},
		..."body" in t ? { body: t.body } : {}
	};
}
function Fe(e) {
	return {
		method: e.method,
		url: e.url,
		headers: { get: (...t) => e.headers.get(...t) }
	};
}
function Ie(e) {
	if (Re(e)) {
		let t = { ...e };
		return Object.freeze(t), t;
	} else return { get: (t) => e.get(t) };
}
var Le = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Re(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t === Object.prototype || t === null || Object.getOwnPropertyNames(t).sort().join("\0") === Le;
}
var ze = [
	"POST",
	"PUT",
	"PATCH",
	"DELETE"
], Be = new Set(ze), Ve = ["GET", ...ze], He = new Set(Ve), Ue = /* @__PURE__ */ new Set([
	301,
	302,
	303,
	307,
	308
]), We = /* @__PURE__ */ new Set([307, 308]), Ge = {
	state: "idle",
	location: void 0,
	matches: void 0,
	historyAction: void 0,
	formMethod: void 0,
	formAction: void 0,
	formEncType: void 0,
	formData: void 0,
	json: void 0,
	text: void 0
}, Ke = {
	state: "idle",
	data: void 0,
	formMethod: void 0,
	formAction: void 0,
	formEncType: void 0,
	formData: void 0,
	json: void 0,
	text: void 0
}, qe = {
	state: "unblocked",
	proceed: void 0,
	reset: void 0,
	location: void 0
}, Je = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }), Ye = "remix-router-transitions", Xe = Symbol("ResetLoaderData"), Ze, Qe, $e, et, tt = class {
	constructor(e) {
		l(this, Ze), l(this, Qe), l(this, $e), l(this, et), u(this, Ze, e), u(this, Qe, F(e));
	}
	get stableRoutes() {
		return c(this, Ze);
	}
	get activeRoutes() {
		return c(this, $e) ?? c(this, Ze);
	}
	get branches() {
		return c(this, et) ?? c(this, Qe);
	}
	get hasHMRRoutes() {
		return c(this, $e) != null;
	}
	setRoutes(e) {
		u(this, Ze, e), u(this, Qe, F(e));
	}
	setHmrRoutes(e) {
		u(this, $e, e), u(this, et, F(e));
	}
	commitHmrRoutes() {
		c(this, $e) && (u(this, Ze, c(this, $e)), u(this, Qe, c(this, et)), u(this, $e, void 0), u(this, et, void 0));
	}
};
Ze = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ new WeakMap(), $e = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap();
function nt(e) {
	let t = e.window ? e.window : typeof window < "u" ? window : void 0, n = t !== void 0 && t.document !== void 0 && t.document.createElement !== void 0;
	m(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
	let r = e.hydrationRouteProperties || [], i = e.mapRouteProperties || Je, a = i;
	if (e.instrumentations) {
		let t = e.instrumentations;
		a = (e) => ({
			...i(e),
			...je(t.map((e) => e.route).filter(Boolean), e)
		});
	}
	let o = {}, s = new tt(j(e.routes, a, void 0, o)), c = e.basename || "/";
	c.startsWith("/") || (c = `/${c}`);
	let l = e.dataStrategy || yt, u = { ...e.future }, d = null, f = /* @__PURE__ */ new Set(), p = null, g = null, _ = null, y = null, x = e.hydrationData != null, C = P(s.activeRoutes, e.history.location, c, !1, s.branches), w = !1, E = null, D, O;
	if (C == null && !e.patchRoutesOnNavigation) {
		let t = J(404, { pathname: e.history.location.pathname }), { matches: n, route: r } = Ht(s.activeRoutes);
		D = !0, O = !D, C = n, E = { [r.id]: t };
	} else if (C && !e.hydrationData && nt(C, s.activeRoutes, e.history.location.pathname).active && (C = null), !C) {
		D = !1, O = !D, C = [];
		let t = nt(null, s.activeRoutes, e.history.location.pathname);
		t.active && t.matches && (w = !0, C = t.matches);
	} else if (C.some((e) => e.route.lazy)) D = !1, O = !D;
	else if (!C.some((e) => st(e.route))) D = !0, O = !D;
	else {
		let t = e.hydrationData ? e.hydrationData.loaderData : null, n = e.hydrationData ? e.hydrationData.errors : null, r = C;
		if (n) {
			let e = C.findIndex((e) => n[e.route.id] !== void 0);
			r = r.slice(0, e + 1);
		}
		O = !1, D = !0, r.forEach((e) => {
			let r = ct(e.route, t, n);
			O ||= r.renderFallback, D &&= !r.shouldLoad;
		});
	}
	let k, A = {
		historyAction: e.history.action,
		location: e.history.location,
		matches: C,
		initialized: D,
		renderFallback: O,
		navigation: Ge,
		restoreScrollPosition: e.hydrationData == null ? null : !1,
		preventScrollReset: !1,
		revalidation: "idle",
		loaderData: e.hydrationData && e.hydrationData.loaderData || {},
		actionData: e.hydrationData && e.hydrationData.actionData || null,
		errors: e.hydrationData && e.hydrationData.errors || E,
		fetchers: /* @__PURE__ */ new Map(),
		blockers: /* @__PURE__ */ new Map()
	}, M = "POP", N = null, F = !1, I, te = !1, ne = /* @__PURE__ */ new Map(), re = null, ie = !1, ae = !1, oe = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Map(), se = 0, ce = -1, le = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Set(), de = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Map(), fe, pe = null;
	function me() {
		if (d = e.history.listen(({ action: t, location: n, delta: r }) => {
			if (fe) {
				fe(), fe = void 0;
				return;
			}
			h(B.size === 0 || r != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
			let i = Ye({
				currentLocation: A.location,
				nextLocation: n,
				historyAction: t
			});
			if (i && r != null) {
				let t = new Promise((e) => {
					fe = e;
				});
				e.history.go(r * -1), Ue(i, {
					state: "blocked",
					location: n,
					proceed() {
						Ue(i, {
							state: "proceeding",
							proceed: void 0,
							reset: void 0,
							location: n
						}), t.then(() => e.history.go(r));
					},
					reset() {
						let e = new Map(A.blockers);
						e.set(i, qe), H({ blockers: e });
					}
				}), N?.resolve(), N = null;
				return;
			}
			return xe(t, n);
		}), n) {
			dn(t, ne);
			let e = () => fn(t, ne);
			t.addEventListener("pagehide", e), re = () => t.removeEventListener("pagehide", e);
		}
		return A.initialized || xe("POP", A.location, { initialHydration: !0 }), k;
	}
	function ge() {
		d && d(), re && re(), f.clear(), I && I.abort(), A.fetchers.forEach((e, t) => Fe(A.fetchers, t)), A.blockers.forEach((e, t) => He(t));
	}
	function _e(e) {
		if (f.add(e), p) {
			let { newErrors: t } = p;
			p = null, e(A, {
				deletedFetchers: [],
				newErrors: t,
				viewTransitionOpts: void 0,
				flushSync: !1
			});
		}
		return () => f.delete(e);
	}
	function H(e, t = {}) {
		e.matches &&= e.matches.map((e) => {
			let t = o[e.route.id], n = e.route;
			return n.element !== t.element || n.errorElement !== t.errorElement || n.hydrateFallbackElement !== t.hydrateFallbackElement ? {
				...e,
				route: t
			} : e;
		}), A = {
			...A,
			...e
		};
		let n = [], r = [];
		A.fetchers.forEach((e, t) => {
			e.state === "idle" && (z.has(t) ? n.push(t) : r.push(t));
		}), z.forEach((e) => {
			!A.fetchers.has(e) && !L.has(e) && n.push(e);
		}), f.size === 0 && (p = { newErrors: e.errors ?? null }), [...f].forEach((r) => r(A, {
			deletedFetchers: n,
			newErrors: e.errors ?? null,
			viewTransitionOpts: t.viewTransitionOpts,
			flushSync: t.flushSync === !0
		})), n.forEach((e) => Fe(A.fetchers, e)), r.forEach((e) => A.fetchers.delete(e));
	}
	function ve(t, n, { flushSync: r } = {}) {
		let i = A.actionData != null && A.navigation.formMethod != null && X(A.navigation.formMethod) && A.navigation.state === "loading" && t.state?._isRedirect !== !0, a;
		a = n.actionData ? Object.keys(n.actionData).length > 0 ? n.actionData : null : i ? A.actionData : null;
		let o = n.loaderData ? zt(A.loaderData, n.loaderData, n.matches || [], n.errors) : A.loaderData, c = A.blockers;
		c.size > 0 && (c = new Map(c), c.forEach((e, t) => c.set(t, qe)));
		let l = ie ? !1 : et(t, n.matches || A.matches), u = F === !0 || A.navigation.formMethod != null && X(A.navigation.formMethod) && t.state?._isRedirect !== !0;
		s.commitHmrRoutes(), ie || M === "POP" || (M === "PUSH" ? e.history.push(t, t.state) : M === "REPLACE" && e.history.replace(t, t.state));
		let d;
		if (M === "POP") {
			let e = ne.get(A.location.pathname);
			e && e.has(t.pathname) ? d = {
				currentLocation: A.location,
				nextLocation: t
			} : ne.has(t.pathname) && (d = {
				currentLocation: t,
				nextLocation: A.location
			});
		} else if (te) {
			let e = ne.get(A.location.pathname);
			e ? e.add(t.pathname) : (e = /* @__PURE__ */ new Set([t.pathname]), ne.set(A.location.pathname, e)), d = {
				currentLocation: A.location,
				nextLocation: t
			};
		}
		H({
			...n,
			actionData: a,
			loaderData: o,
			historyAction: M,
			location: t,
			initialized: !0,
			renderFallback: !1,
			navigation: Ge,
			revalidation: "idle",
			restoreScrollPosition: l,
			preventScrollReset: u,
			blockers: c
		}, {
			viewTransitionOpts: d,
			flushSync: r === !0
		}), M = "POP", F = !1, te = !1, ie = !1, ae = !1, N?.resolve(), N = null, pe?.resolve(), pe = null;
	}
	async function ye(t, n) {
		if (N?.resolve(), N = null, typeof t == "number") {
			N ||= pn();
			let n = N.promise;
			return e.history.go(t), n;
		}
		let { path: r, submission: i, error: a } = at(!1, it(A.location, A.matches, c, t, n?.fromRouteId, n?.relative), n), o;
		n?.mask && (o = {
			pathname: "",
			search: "",
			hash: "",
			...typeof n.mask == "string" ? b(n.mask) : {
				...A.location.mask,
				...n.mask
			}
		});
		let s = A.location, l = v(s, r, n && n.state, void 0, o);
		l = {
			...l,
			...e.history.encodeLocation(l)
		};
		let u = n && n.replace != null ? n.replace : void 0, d = "PUSH";
		u === !0 ? d = "REPLACE" : u === !1 || i != null && X(i.formMethod) && i.formAction === A.location.pathname + A.location.search && (d = "REPLACE");
		let f = n && "preventScrollReset" in n ? n.preventScrollReset === !0 : void 0, p = (n && n.flushSync) === !0, m = Ye({
			currentLocation: s,
			nextLocation: l,
			historyAction: d
		});
		if (m) {
			Ue(m, {
				state: "blocked",
				location: l,
				proceed() {
					Ue(m, {
						state: "proceeding",
						proceed: void 0,
						reset: void 0,
						location: l
					}), ye(t, n);
				},
				reset() {
					let e = new Map(A.blockers);
					e.set(m, qe), H({ blockers: e });
				}
			});
			return;
		}
		await xe(d, l, {
			submission: i,
			pendingError: a,
			preventScrollReset: f,
			replace: n && n.replace,
			enableViewTransition: n && n.viewTransition,
			flushSync: p,
			callSiteDefaultShouldRevalidate: n && n.defaultShouldRevalidate
		});
	}
	function be() {
		pe ||= pn(), G(), H({ revalidation: "loading" });
		let e = pe.promise;
		return A.navigation.state === "submitting" ? e : A.navigation.state === "idle" ? (xe(A.historyAction, A.location, { startUninterruptedRevalidation: !0 }), e) : (xe(M || A.historyAction, A.navigation.location, {
			overrideNavigation: A.navigation,
			enableViewTransition: te === !0
		}), e);
	}
	async function xe(t, n, r) {
		I && I.abort(), I = null, M = t, ie = (r && r.startUninterruptedRevalidation) === !0, $e(A.location, A.matches), F = (r && r.preventScrollReset) === !0, te = (r && r.enableViewTransition) === !0;
		let i = s.activeRoutes, a = r?.initialHydration && A.matches && A.matches.length > 0 && !w ? A.matches : P(i, n, c, !1, s.branches), o = (r && r.flushSync) === !0;
		if (a && A.initialized && !ae && Gt(A.location, n) && !(r && r.submission && X(r.submission.formMethod))) {
			ve(n, { matches: a }, { flushSync: o });
			return;
		}
		let l = nt(a, i, n.pathname);
		if (l.active && l.matches && (a = l.matches), !a) {
			let { error: e, notFoundMatches: t, route: r } = Xe(n.pathname);
			ve(n, {
				matches: t,
				loaderData: {},
				errors: { [r.id]: e }
			}, { flushSync: o });
			return;
		}
		let u = r && r.overrideNavigation ? {
			...r.overrideNavigation,
			matches: a,
			historyAction: t
		} : void 0;
		I = new AbortController();
		let d = Nt(e.history, n, I.signal, r && r.submission), f = e.getContext ? await e.getContext() : new T(), p;
		if (r && r.pendingError) p = [Vt(a).route.id, {
			type: "error",
			error: r.pendingError
		}];
		else if (r && r.submission && X(r.submission.formMethod)) {
			let i = await U(d, n, r.submission, a, t, f, l.active, r && r.initialHydration === !0, {
				replace: r.replace,
				flushSync: o
			});
			if (i.shortCircuited) return;
			if (i.pendingActionResult) {
				let [e, t] = i.pendingActionResult;
				if (Y(t) && Oe(t.error) && t.error.status === 404) {
					I = null, ve(n, {
						matches: i.matches,
						loaderData: {},
						errors: { [e]: t.error }
					});
					return;
				}
			}
			a = i.matches || a, p = i.pendingActionResult, u = on(n, a, t, r.submission), o = !1, l.active = !1, d = Nt(e.history, d.url, d.signal);
		}
		let { shortCircuited: m, matches: h, loaderData: g, errors: _, workingFetchers: v } = await Se(d, n, a, t, f, l.active, u, r && r.submission, r && r.fetcherSubmission, r && r.replace, r && r.initialHydration === !0, o, p, r && r.callSiteDefaultShouldRevalidate);
		m || (I = null, ve(n, {
			matches: h || a,
			...Bt(p),
			loaderData: g,
			errors: _,
			...v ? { fetchers: v } : {}
		}));
	}
	async function U(t, n, i, l, u, d, f, p, m = {}) {
		if (G(), H({ navigation: sn(n, l, u, i) }, { flushSync: m.flushSync === !0 }), f) {
			let e = await rt(l, n.pathname, t.signal);
			if (e.type === "aborted") return { shortCircuited: !0 };
			if (e.type === "error") {
				if (e.partialMatches.length === 0) {
					let { matches: t, route: n } = Ht(s.activeRoutes);
					return {
						matches: t,
						pendingActionResult: [n.id, {
							type: "error",
							error: e.error
						}]
					};
				}
				let t = Vt(e.partialMatches).route.id;
				return {
					matches: e.partialMatches,
					pendingActionResult: [t, {
						type: "error",
						error: e.error
					}]
				};
			} else if (e.matches) l = e.matches;
			else {
				let { notFoundMatches: e, error: t, route: r } = Xe(n.pathname);
				return {
					matches: e,
					pendingActionResult: [r.id, {
						type: "error",
						error: t
					}]
				};
			}
		}
		let h, g = rn(l, n);
		if (!g.route.action && !g.route.lazy) h = {
			type: "error",
			error: J(405, {
				method: t.method,
				pathname: n.pathname,
				routeId: g.route.id
			})
		};
		else {
			let e = await ke(t, n, Tt(a, o, t, n, l, g, p ? [] : r, d), d, null);
			if (h = e[g.route.id], !h) {
				for (let t of l) if (e[t.route.id]) {
					h = e[t.route.id];
					break;
				}
			}
			if (t.signal.aborted) return { shortCircuited: !0 };
		}
		if (Xt(h)) {
			let n;
			return n = m && m.replace != null ? m.replace : Mt(h.response.headers.get("Location"), new URL(t.url), c, e.history) === A.location.pathname + A.location.search, await W(t, h, !0, {
				submission: i,
				replace: n
			}), { shortCircuited: !0 };
		}
		if (Y(h)) {
			let e = Vt(l, g.route.id);
			return (m && m.replace) !== !0 && (M = "PUSH"), {
				matches: l,
				pendingActionResult: [
					e.route.id,
					h,
					g.route.id
				]
			};
		}
		return {
			matches: l,
			pendingActionResult: [g.route.id, h]
		};
	}
	async function Se(t, n, i, l, u, d, f, p, m, h, g, _, v, y) {
		let b = f || on(n, i, l, p), x = p || m || an(b), S = !ie && !g;
		if (d) {
			if (S) {
				let e = Ce(v);
				H({
					navigation: b,
					...e === void 0 ? {} : { actionData: e }
				}, { flushSync: _ });
			}
			let e = await rt(i, n.pathname, t.signal);
			if (e.type === "aborted") return { shortCircuited: !0 };
			if (e.type === "error") {
				if (e.partialMatches.length === 0) {
					let { matches: t, route: n } = Ht(s.activeRoutes);
					return {
						matches: t,
						loaderData: {},
						errors: { [n.id]: e.error }
					};
				}
				let t = Vt(e.partialMatches).route.id;
				return {
					matches: e.partialMatches,
					loaderData: {},
					errors: { [t]: e.error }
				};
			} else if (e.matches) i = e.matches;
			else {
				let { error: e, notFoundMatches: t, route: r } = Xe(n.pathname);
				return {
					matches: t,
					loaderData: {},
					errors: { [r.id]: e }
				};
			}
		}
		let C = s.activeRoutes, { dsMatches: w, revalidatingFetchers: T } = ot(t, u, a, o, e.history, A, i, x, n, g ? [] : r, g === !0, ae, oe, z, de, ue, C, c, e.patchRoutesOnNavigation != null, s.branches, v, y);
		if (ce = ++se, !e.dataStrategy && !w.some((e) => e.shouldLoad) && !w.some((e) => e.route.middleware && e.route.middleware.length > 0) && T.length === 0) {
			let e = new Map(A.fetchers), t = ze(e);
			return ve(n, {
				matches: i,
				loaderData: {},
				errors: v && Y(v[1]) ? { [v[0]]: v[1].error } : null,
				...Bt(v),
				...t ? { fetchers: e } : {}
			}, { flushSync: _ }), { shortCircuited: !0 };
		}
		if (S) {
			let e = {};
			if (!d) {
				e.navigation = b;
				let t = Ce(v);
				t !== void 0 && (e.actionData = t);
			}
			T.length > 0 && (e.fetchers = we(T)), H(e, { flushSync: _ });
		}
		T.forEach((e) => {
			Le(e.key), e.controller && L.set(e.key, e.controller);
		});
		let E = () => T.forEach((e) => Le(e.key));
		I && I.signal.addEventListener("abort", E);
		let { loaderResults: D, fetcherResults: O } = await Ae(w, T, t, n, u);
		if (t.signal.aborted) return { shortCircuited: !0 };
		I && I.signal.removeEventListener("abort", E), T.forEach((e) => L.delete(e.key));
		let k = Ut(D);
		if (k) return await W(t, k.result, !0, { replace: h }), { shortCircuited: !0 };
		if (k = Ut(O), k) return ue.add(k.key), await W(t, k.result, !0, { replace: h }), { shortCircuited: !0 };
		let j = new Map(A.fetchers), { loaderData: M, errors: N } = Rt(A, i, D, v, T, O, j);
		g && A.errors && (N = {
			...A.errors,
			...N
		});
		let P = ze(j), ee = Be(ce, j), F = P || ee || T.length > 0;
		return {
			matches: i,
			loaderData: M,
			errors: N,
			...F ? { workingFetchers: j } : {}
		};
	}
	function Ce(e) {
		if (e && !Y(e[1])) return { [e[0]]: e[1].data };
		if (A.actionData) return Object.keys(A.actionData).length === 0 ? null : A.actionData;
	}
	function we(e) {
		let t = new Map(A.fetchers);
		return e.forEach((e) => {
			let n = t.get(e.key), r = cn(void 0, n ? n.data : void 0);
			t.set(e.key, r);
		}), t;
	}
	async function Te(t, n, r, i) {
		Le(t);
		let a = (i && i.flushSync) === !0, o = s.activeRoutes, l = it(A.location, A.matches, c, r, n, i?.relative), u = P(o, l, c, !1, s.branches), d = nt(u, o, l);
		if (d.active && d.matches && (u = d.matches), !u) {
			q(t, n, J(404, { pathname: l }), { flushSync: a });
			return;
		}
		let { path: f, submission: p, error: m } = at(!0, l, i);
		if (m) {
			q(t, n, m, { flushSync: a });
			return;
		}
		let h = e.getContext ? await e.getContext() : new T(), g = (i && i.preventScrollReset) === !0;
		if (p && X(p.formMethod)) {
			await Ee(t, n, f, u, h, d.active, a, g, p, i && i.defaultShouldRevalidate);
			return;
		}
		de.set(t, {
			routeId: n,
			path: f
		}), await De(t, n, f, u, h, d.active, a, g, p);
	}
	async function Ee(t, n, i, l, u, d, f, p, h, g) {
		G(), de.delete(t), K(t, ln(h, A.fetchers.get(t)), { flushSync: f });
		let _ = new AbortController(), v = Nt(e.history, i, _.signal, h);
		if (d) {
			let e = await rt(l, new URL(v.url).pathname, v.signal, t);
			if (e.type === "aborted") return;
			if (e.type === "error") {
				q(t, n, e.error, { flushSync: f });
				return;
			} else if (e.matches) l = e.matches;
			else {
				q(t, n, J(404, { pathname: i }), { flushSync: f });
				return;
			}
		}
		let y = rn(l, i);
		if (!y.route.action && !y.route.lazy) {
			q(t, n, J(405, {
				method: h.formMethod,
				pathname: i,
				routeId: n
			}), { flushSync: f });
			return;
		}
		L.set(t, _);
		let b = se, x = Tt(a, o, v, i, l, y, r, u), S = await ke(v, i, x, u, t), C = S[y.route.id];
		if (!C) {
			for (let e of x) if (S[e.route.id]) {
				C = S[e.route.id];
				break;
			}
		}
		if (v.signal.aborted) {
			L.get(t) === _ && L.delete(t);
			return;
		}
		if (z.has(t)) {
			if (Xt(C) || Y(C)) {
				K(t, un(void 0));
				return;
			}
		} else {
			if (Xt(C)) if (L.delete(t), ce > b) {
				K(t, un(void 0));
				return;
			} else return ue.add(t), K(t, cn(h)), W(v, C, !1, {
				fetcherSubmission: h,
				preventScrollReset: p
			});
			if (Y(C)) {
				q(t, n, C.error);
				return;
			}
		}
		let w = A.navigation.location || A.location, T = Nt(e.history, w, _.signal), E = s.activeRoutes, D = A.navigation.state === "idle" ? A.matches : P(E, A.navigation.location, c, !1, s.branches);
		m(D, "Didn't find any matches after fetcher action");
		let O = ++se;
		le.set(t, O);
		let { dsMatches: k, revalidatingFetchers: j } = ot(T, u, a, o, e.history, A, D, h, w, r, !1, ae, oe, z, de, ue, E, c, e.patchRoutesOnNavigation != null, s.branches, [y.route.id, C], g), N = cn(h, C.data), ee = new Map(A.fetchers);
		ee.set(t, N), j.filter((e) => e.key !== t).forEach((e) => {
			let t = e.key, n = ee.get(t), r = cn(void 0, n ? n.data : void 0);
			ee.set(t, r), Le(t), e.controller && L.set(t, e.controller);
		}), H({ fetchers: ee });
		let F = () => j.forEach((e) => Le(e.key));
		_.signal.addEventListener("abort", F);
		let { loaderResults: te, fetcherResults: ne } = await Ae(k, j, T, w, u);
		if (_.signal.aborted) return;
		_.signal.removeEventListener("abort", F), le.delete(t), L.delete(t), j.forEach((e) => L.delete(e.key));
		let re = A.fetchers.has(t), ie = (e) => {
			if (!re) return e;
			let n = new Map(e.fetchers);
			return n.set(t, un(C.data)), {
				...e,
				fetchers: n
			};
		}, R = Ut(te);
		if (R) return A = ie(A), W(T, R.result, !1, { preventScrollReset: p });
		if (R = Ut(ne), R) return ue.add(R.key), A = ie(A), W(T, R.result, !1, { preventScrollReset: p });
		let B = new Map(A.fetchers);
		re && B.set(t, un(C.data));
		let { loaderData: fe, errors: V } = Rt(A, D, te, void 0, j, ne, B);
		Be(O, B), A.navigation.state === "loading" && O > ce ? (m(M, "Expected pending action"), I && I.abort(), ve(A.navigation.location, {
			matches: D,
			loaderData: fe,
			errors: V,
			fetchers: B
		})) : (H({
			errors: V,
			loaderData: zt(A.loaderData, fe, D, V),
			fetchers: B
		}), ae = !1);
	}
	async function De(t, n, i, s, c, l, u, d, f) {
		let p = A.fetchers.get(t);
		K(t, cn(f, p ? p.data : void 0), { flushSync: u });
		let m = new AbortController(), h = Nt(e.history, i, m.signal);
		if (l) {
			let e = await rt(s, new URL(h.url).pathname, h.signal, t);
			if (e.type === "aborted") return;
			if (e.type === "error") {
				q(t, n, e.error, { flushSync: u });
				return;
			} else if (e.matches) s = e.matches;
			else {
				q(t, n, J(404, { pathname: i }), { flushSync: u });
				return;
			}
		}
		let g = rn(s, i);
		L.set(t, m);
		let _ = se, v = await ke(h, i, Tt(a, o, h, i, s, g, r, c), c, t), y = v[g.route.id];
		if (!y) {
			for (let e of s) if (v[e.route.id]) {
				y = v[e.route.id];
				break;
			}
		}
		if (L.get(t) === m && L.delete(t), !h.signal.aborted) {
			if (z.has(t)) {
				K(t, un(void 0));
				return;
			}
			if (Xt(y)) if (ce > _) {
				K(t, un(void 0));
				return;
			} else {
				ue.add(t), await W(h, y, !1, { preventScrollReset: d });
				return;
			}
			if (Y(y)) {
				q(t, n, y.error);
				return;
			}
			K(t, un(y.data));
		}
	}
	async function W(r, i, a, { submission: o, fetcherSubmission: s, preventScrollReset: l, replace: u } = {}) {
		a || (N?.resolve(), N = null), i.response.headers.has("X-Remix-Revalidate") && (ae = !0);
		let d = i.response.headers.get("Location");
		m(d, "Expected a Location header on the redirect Response"), d = Mt(d, new URL(r.url), c, e.history);
		let f = v(A.location, d, { _isRedirect: !0 });
		if (n) {
			let e = !1;
			if (i.response.headers.has("X-Remix-Reload-Document")) e = !0;
			else if (he(d)) {
				let n = S(t, d, !0);
				e = n.origin !== t.location.origin || V(n.pathname, c) == null;
			}
			if (e) {
				u ? t.location.replace(d) : t.location.assign(d);
				return;
			}
		}
		I = null;
		let p = u === !0 || i.response.headers.has("X-Remix-Replace") ? "REPLACE" : "PUSH", { formMethod: h, formAction: g, formEncType: _ } = A.navigation;
		!o && !s && h && g && _ && (o = an(A.navigation));
		let y = o || s;
		We.has(i.response.status) && y && X(y.formMethod) ? await xe(p, f, {
			submission: {
				...y,
				formAction: d
			},
			preventScrollReset: l || F,
			enableViewTransition: a ? te : void 0
		}) : await xe(p, f, {
			overrideNavigation: on(f, [], p, o),
			fetcherSubmission: s,
			preventScrollReset: l || F,
			enableViewTransition: a ? te : void 0
		});
	}
	async function ke(e, t, n, r, i) {
		let a, o = {};
		try {
			a = await Et(l, e, t, n, i, r, !1);
		} catch (e) {
			return n.filter((e) => e.shouldLoad).forEach((t) => {
				o[t.route.id] = {
					type: "error",
					error: e
				};
			}), o;
		}
		if (e.signal.aborted) return o;
		if (!X(e.method)) for (let e of n) {
			if (a[e.route.id]?.type === "error") break;
			!a.hasOwnProperty(e.route.id) && !A.loaderData.hasOwnProperty(e.route.id) && (!A.errors || !A.errors.hasOwnProperty(e.route.id)) && e.shouldCallHandler() && (a[e.route.id] = {
				type: "error",
				result: /* @__PURE__ */ Error(`No result returned from dataStrategy for route ${e.route.id}`)
			});
		}
		for (let [t, r] of Object.entries(a)) if (Yt(r)) {
			let i = r.result;
			o[t] = {
				type: "redirect",
				response: At(i, e, t, n, c)
			};
		} else o[t] = await kt(r);
		return o;
	}
	async function Ae(e, t, n, r, i) {
		let a = ke(n, r, e, i, null), o = Promise.all(t.map(async (e) => {
			if (e.matches && e.match && e.request && e.controller) {
				let t = (await ke(e.request, e.path, e.matches, i, e.key))[e.match.route.id];
				return { [e.key]: t };
			} else return Promise.resolve({ [e.key]: {
				type: "error",
				error: J(404, { pathname: e.path })
			} });
		}));
		return {
			loaderResults: await a,
			fetcherResults: (await o).reduce((e, t) => Object.assign(e, t), {})
		};
	}
	function G() {
		ae = !0, de.forEach((e, t) => {
			L.has(t) && oe.add(t), Le(t);
		});
	}
	function K(e, t, n = {}) {
		let r = new Map(A.fetchers);
		r.set(e, t), H({ fetchers: r }, { flushSync: (n && n.flushSync) === !0 });
	}
	function q(e, t, n, r = {}) {
		let i = Vt(A.matches, t), a = new Map(A.fetchers);
		Fe(a, e), H({
			errors: { [i.route.id]: n },
			fetchers: a
		}, { flushSync: (r && r.flushSync) === !0 });
	}
	function Ne(e) {
		return R.set(e, (R.get(e) || 0) + 1), z.has(e) && z.delete(e), A.fetchers.get(e) || Ke;
	}
	function Pe(e, t) {
		Le(e, t?.reason), K(e, un(null));
	}
	function Fe(e, t) {
		let n = A.fetchers.get(t);
		L.has(t) && !(n && n.state === "loading" && le.has(t)) && Le(t), de.delete(t), le.delete(t), ue.delete(t), z.delete(t), oe.delete(t), e.delete(t);
	}
	function Ie(e) {
		let t = (R.get(e) || 0) - 1;
		t <= 0 ? (R.delete(e), z.add(e)) : R.set(e, t), H({ fetchers: new Map(A.fetchers) });
	}
	function Le(e, t) {
		let n = L.get(e);
		n && (n.abort(t), L.delete(e));
	}
	function Re(e, t) {
		for (let n of e) {
			let e = t.get(n);
			m(e, `Expected fetcher: ${n}`);
			let r = un(e.data);
			t.set(n, r);
		}
	}
	function ze(e) {
		let t = [], n = !1;
		for (let r of ue) {
			let i = e.get(r);
			m(i, `Expected fetcher: ${r}`), i.state === "loading" && (ue.delete(r), t.push(r), n = !0);
		}
		return Re(t, e), n;
	}
	function Be(e, t) {
		let n = [];
		for (let [r, i] of le) if (i < e) {
			let e = t.get(r);
			m(e, `Expected fetcher: ${r}`), e.state === "loading" && (Le(r), le.delete(r), n.push(r));
		}
		return Re(n, t), n.length > 0;
	}
	function Ve(e, t) {
		let n = A.blockers.get(e) || qe;
		return B.get(e) !== t && B.set(e, t), n;
	}
	function He(e) {
		A.blockers.delete(e), B.delete(e);
	}
	function Ue(e, t) {
		let n = A.blockers.get(e) || qe;
		m(n.state === "unblocked" && t.state === "blocked" || n.state === "blocked" && t.state === "blocked" || n.state === "blocked" && t.state === "proceeding" || n.state === "blocked" && t.state === "unblocked" || n.state === "proceeding" && t.state === "unblocked", `Invalid blocker state transition: ${n.state} -> ${t.state}`);
		let r = new Map(A.blockers);
		r.set(e, t), H({ blockers: r });
	}
	function Ye({ currentLocation: e, nextLocation: t, historyAction: n }) {
		if (B.size === 0) return;
		B.size > 1 && h(!1, "A router only supports one blocker at a time");
		let r = Array.from(B.entries()), [i, a] = r[r.length - 1], o = A.blockers.get(i);
		if (!(o && o.state === "proceeding") && a({
			currentLocation: e,
			nextLocation: t,
			historyAction: n
		})) return i;
	}
	function Xe(e) {
		let t = J(404, { pathname: e }), n = s.activeRoutes, { matches: r, route: i } = Ht(n);
		return {
			notFoundMatches: r,
			route: i,
			error: t
		};
	}
	function Ze(e, t, n) {
		if (g = e, y = t, _ = n || null, !x && A.navigation === Ge) {
			x = !0;
			let e = et(A.location, A.matches);
			e != null && H({ restoreScrollPosition: e });
		}
		return () => {
			g = null, y = null, _ = null;
		};
	}
	function Qe(e, t) {
		return _ && _(e, t.map((e) => ee(e, A.loaderData))) || e.key;
	}
	function $e(e, t) {
		if (g && y) {
			let n = Qe(e, t);
			g[n] = y();
		}
	}
	function et(e, t) {
		if (g) {
			let n = Qe(e, t), r = g[n];
			if (typeof r == "number") return r;
		}
		return null;
	}
	function nt(t, n, r) {
		if (e.patchRoutesOnNavigation) {
			let e = s.branches;
			if (!t) return {
				active: !0,
				matches: P(n, r, c, !0, e) || []
			};
			if (Object.keys(t[0].params).length > 0) return {
				active: !0,
				matches: P(n, r, c, !0, e)
			};
		}
		return {
			active: !1,
			matches: null
		};
	}
	async function rt(t, n, r, i) {
		if (!e.patchRoutesOnNavigation) return {
			type: "success",
			matches: t
		};
		let l = t;
		for (;;) {
			let t = o;
			try {
				await e.patchRoutesOnNavigation({
					signal: r,
					path: n,
					matches: l,
					fetcherKey: i,
					patch: (e, n) => {
						r.aborted || ft(e, n, s, t, a, !1);
					}
				});
			} catch (e) {
				return {
					type: "error",
					error: e,
					partialMatches: l
				};
			}
			if (r.aborted) return { type: "aborted" };
			let u = s.branches, d = P(s.activeRoutes, n, c, !1, u), f = null;
			if (d && (Object.keys(d[0].params).length === 0 || (f = P(s.activeRoutes, n, c, !0, u), !(f && l.length < f.length && lt(l, f.slice(0, l.length)))))) return {
				type: "success",
				matches: d
			};
			if (f ||= P(s.activeRoutes, n, c, !0, u), !f || lt(l, f)) return {
				type: "success",
				matches: null
			};
			l = f;
		}
	}
	function lt(e, t) {
		return e.length === t.length && e.every((e, n) => e.route.id === t[n].route.id);
	}
	function ut(e) {
		o = {}, s.setHmrRoutes(j(e, a, void 0, o));
	}
	function dt(e, t, n = !1) {
		ft(e, t, s, o, a, n), s.hasHMRRoutes || H({});
	}
	return k = {
		get basename() {
			return c;
		},
		get future() {
			return u;
		},
		get state() {
			return A;
		},
		get routes() {
			return s.stableRoutes;
		},
		get branches() {
			return s.branches;
		},
		get manifest() {
			return o;
		},
		get window() {
			return t;
		},
		initialize: me,
		subscribe: _e,
		enableScrollRestoration: Ze,
		navigate: ye,
		fetch: Te,
		revalidate: be,
		createHref: (t) => e.history.createHref(t),
		encodeLocation: (t) => e.history.encodeLocation(t),
		getFetcher: Ne,
		resetFetcher: Pe,
		deleteFetcher: Ie,
		dispose: ge,
		getBlocker: Ve,
		deleteBlocker: He,
		patchRoutes: dt,
		_internalFetchControllers: L,
		_internalSetRoutes: ut,
		_internalSetStateDoNotUseOrYouWillBreakYourApp(e) {
			H(e);
		}
	}, e.instrumentations && (k = Me(k, e.instrumentations.map((e) => e.router).filter(Boolean))), k;
}
function rt(e) {
	return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0);
}
function it(e, t, n, r, i, a) {
	let o, s;
	if (i) {
		o = [];
		for (let e of t) if (o.push(e), e.route.id === i) {
			s = e;
			break;
		}
	} else o = t, s = t[t.length - 1];
	let c = be(r || ".", ye(o), V(e.pathname, n) || e.pathname, a === "path");
	if (r ?? (c.search = e.search, c.hash = e.hash), (r == null || r === "" || r === ".") && s) {
		let e = nn(c.search);
		if (s.route.index && !e) c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
		else if (!s.route.index && e) {
			let e = new URLSearchParams(c.search), t = e.getAll("index");
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			c.search = n ? `?${n}` : "";
		}
	}
	return n !== "/" && (c.pathname = pe({
		basename: n,
		pathname: c.pathname
	})), y(c);
}
function at(e, t, n) {
	if (!n || !rt(n)) return { path: t };
	if (n.formMethod && !tn(n.formMethod)) return {
		path: t,
		error: J(405, { method: n.formMethod })
	};
	let r = () => ({
		path: t,
		error: J(400, { type: "invalid-body" })
	}), i = (n.formMethod || "get").toUpperCase(), a = Wt(t);
	if (n.body !== void 0) {
		if (n.formEncType === "text/plain") {
			if (!X(i)) return r();
			let e = typeof n.body == "string" ? n.body : n.body instanceof FormData || n.body instanceof URLSearchParams ? Array.from(n.body.entries()).reduce((e, [t, n]) => `${e}${t}=${n}
`, "") : String(n.body);
			return {
				path: t,
				submission: {
					formMethod: i,
					formAction: a,
					formEncType: n.formEncType,
					formData: void 0,
					json: void 0,
					text: e
				}
			};
		} else if (n.formEncType === "application/json") {
			if (!X(i)) return r();
			try {
				let e = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
				return {
					path: t,
					submission: {
						formMethod: i,
						formAction: a,
						formEncType: n.formEncType,
						formData: void 0,
						json: e,
						text: void 0
					}
				};
			} catch {
				return r();
			}
		}
	}
	m(typeof FormData == "function", "FormData is not available in this environment");
	let o, s;
	if (n.formData) o = Ft(n.formData), s = n.formData;
	else if (n.body instanceof FormData) o = Ft(n.body), s = n.body;
	else if (n.body instanceof URLSearchParams) o = n.body, s = It(o);
	else if (n.body == null) o = new URLSearchParams(), s = new FormData();
	else try {
		o = new URLSearchParams(n.body), s = It(o);
	} catch {
		return r();
	}
	let c = {
		formMethod: i,
		formAction: a,
		formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
		formData: s,
		json: void 0,
		text: void 0
	};
	if (X(c.formMethod)) return {
		path: t,
		submission: c
	};
	let l = b(t);
	return e && l.search && nn(l.search) && o.append("index", ""), l.search = `?${o}`, {
		path: y(l),
		submission: c
	};
}
function ot(e, t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x) {
	let S = b ? Y(b[1]) ? b[1].error : b[1].data : void 0, C = i.createURL(a.location), w = i.createURL(c), T;
	if (u && a.errors) {
		let e = Object.keys(a.errors)[0];
		T = o.findIndex((t) => t.route.id === e);
	} else if (b && Y(b[1])) {
		let e = b[0];
		T = o.findIndex((t) => t.route.id === e) - 1;
	}
	let E = b ? b[1].statusCode : void 0, D = E && E >= 400, O = {
		currentUrl: C,
		currentParams: a.matches[0]?.params || {},
		nextUrl: w,
		nextParams: o[0].params,
		...s,
		actionResult: S,
		actionStatus: E
	}, k = W(o), A = o.map((i, o) => {
		let { route: s } = i, f = null;
		if (T != null && o > T) f = !1;
		else if (s.lazy) f = !0;
		else if (!st(s)) f = !1;
		else if (u) {
			let { shouldLoad: e } = ct(s, a.loaderData, a.errors);
			f = e;
		} else lt(a.loaderData, a.matches[o], i) && (f = !0);
		if (f !== null) return wt(n, r, e, c, k, i, l, t, f);
		let p = !1;
		typeof x == "boolean" ? p = x : D ? p = !1 : d || C.pathname + C.search === w.pathname + w.search ? p = !0 : C.search === w.search ? ut(a.matches[o], i) && (p = !0) : p = !0;
		let m = {
			...O,
			defaultShouldRevalidate: p
		};
		return wt(n, r, e, c, k, i, l, t, dt(i, m), m, x);
	}), j = [];
	return m.forEach((e, s) => {
		if (u || !o.some((t) => t.route.id === e.routeId) || p.has(s)) return;
		let c = a.fetchers.get(s), m = c && c.state !== "idle" && c.data === void 0, b = P(g, e.path, _ ?? "/", !1, y);
		if (!b) {
			if (v && m) return;
			j.push({
				key: s,
				routeId: e.routeId,
				path: e.path,
				matches: null,
				match: null,
				request: null,
				controller: null
			});
			return;
		}
		if (h.has(s)) return;
		let S = rn(b, e.path), C = new AbortController(), w = Nt(i, e.path, C.signal), T = null;
		if (f.has(s)) f.delete(s), T = Tt(n, r, w, e.path, b, S, l, t);
		else if (m) d && (T = Tt(n, r, w, e.path, b, S, l, t));
		else {
			let i;
			i = typeof x == "boolean" ? x : D ? !1 : d;
			let a = {
				...O,
				defaultShouldRevalidate: i
			};
			dt(S, a) && (T = Tt(n, r, w, e.path, b, S, l, t, a));
		}
		T && j.push({
			key: s,
			routeId: e.routeId,
			path: e.path,
			matches: T,
			match: S,
			request: w,
			controller: C
		});
	}), {
		dsMatches: A,
		revalidatingFetchers: j
	};
}
function st(e) {
	return e.loader != null || e.middleware != null && e.middleware.length > 0;
}
function ct(e, t, n) {
	if (e.lazy) return {
		shouldLoad: !0,
		renderFallback: !0
	};
	if (!st(e)) return {
		shouldLoad: !1,
		renderFallback: !1
	};
	let r = t != null && e.id in t, i = n != null && n[e.id] !== void 0;
	if (!r && i) return {
		shouldLoad: !1,
		renderFallback: !1
	};
	if (typeof e.loader == "function" && e.loader.hydrate === !0) return {
		shouldLoad: !0,
		renderFallback: !r
	};
	let a = !r && !i;
	return {
		shouldLoad: a,
		renderFallback: a
	};
}
function lt(e, t, n) {
	let r = !t || n.route.id !== t.route.id, i = !e.hasOwnProperty(n.route.id);
	return r || i;
}
function ut(e, t) {
	let n = e.route.path;
	return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"];
}
function dt(e, t) {
	if (e.route.shouldRevalidate) {
		let n = e.route.shouldRevalidate(t);
		if (typeof n == "boolean") return n;
	}
	return t.defaultShouldRevalidate;
}
function ft(e, t, n, r, i, a) {
	let o;
	if (e) {
		let t = r[e];
		m(t, `No route found to patch children into: routeId = ${e}`), t.children ||= [], o = t.children;
	} else o = n.activeRoutes;
	let s = [], c = [];
	if (t.forEach((e) => {
		let t = o.find((t) => pt(e, t));
		t ? c.push({
			existingRoute: t,
			newRoute: e
		}) : s.push(e);
	}), s.length > 0) {
		let t = j(s, i, [
			e || "_",
			"patch",
			String(o?.length || "0")
		], r);
		o.push(...t);
	}
	if (a && c.length > 0) for (let e = 0; e < c.length; e++) {
		let { existingRoute: t, newRoute: n } = c[e], r = t, [a] = j([n], i, [], {}, !0);
		Object.assign(r, {
			element: a.element ? a.element : r.element,
			errorElement: a.errorElement ? a.errorElement : r.errorElement,
			hydrateFallbackElement: a.hydrateFallbackElement ? a.hydrateFallbackElement : r.hydrateFallbackElement
		});
	}
	n.hasHMRRoutes || n.setRoutes([...n.activeRoutes]);
}
function pt(e, t) {
	return "id" in e && "id" in t && e.id === t.id ? !0 : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0) ? !0 : e.children?.every((e, n) => t.children?.some((t) => pt(e, t))) ?? !1 : !1;
}
var mt = /* @__PURE__ */ new WeakMap(), ht = ({ key: e, route: t, manifest: n, mapRouteProperties: r }) => {
	let i = n[t.id];
	if (m(i, "No route found in manifest"), !i.lazy || typeof i.lazy != "object") return;
	let a = i.lazy[e];
	if (!a) return;
	let o = mt.get(i);
	o || (o = {}, mt.set(i, o));
	let s = o[e];
	if (s) return s;
	let c = (async () => {
		let t = D(e), n = i[e] !== void 0 && e !== "hasErrorBoundary";
		if (t) h(!t, "Route property " + e + " is not a supported lazy route property. This property will be ignored."), o[e] = Promise.resolve();
		else if (n) h(!1, `Route "${i.id}" has a static property "${e}" defined. The lazy property will be ignored.`);
		else {
			let t = await a();
			t != null && (Object.assign(i, { [e]: t }), Object.assign(i, r(i)));
		}
		typeof i.lazy == "object" && (i.lazy[e] = void 0, Object.values(i.lazy).every((e) => e === void 0) && (i.lazy = void 0));
	})();
	return o[e] = c, c;
}, gt = /* @__PURE__ */ new WeakMap();
function _t(e, t, n, r, i) {
	let a = n[e.id];
	if (m(a, "No route found in manifest"), !e.lazy) return {
		lazyRoutePromise: void 0,
		lazyHandlerPromise: void 0
	};
	if (typeof e.lazy == "function") {
		let t = gt.get(a);
		if (t) return {
			lazyRoutePromise: t,
			lazyHandlerPromise: t
		};
		let n = (async () => {
			m(typeof e.lazy == "function", "No lazy route function found");
			let t = await e.lazy(), n = {};
			for (let e in t) {
				let r = t[e];
				if (r === void 0) continue;
				let i = k(e), o = a[e] !== void 0 && e !== "hasErrorBoundary";
				i ? h(!i, "Route property " + e + " is not a supported property to be returned from a lazy route function. This property will be ignored.") : o ? h(!o, `Route "${a.id}" has a static property "${e}" defined but its lazy function is also returning a value for this property. The lazy route property "${e}" will be ignored.`) : n[e] = r;
			}
			Object.assign(a, n), Object.assign(a, {
				...r(a),
				lazy: void 0
			});
		})();
		return gt.set(a, n), n.catch(() => {}), {
			lazyRoutePromise: n,
			lazyHandlerPromise: n
		};
	}
	let o = Object.keys(e.lazy), s = [], c;
	for (let a of o) {
		if (i && i.includes(a)) continue;
		let o = ht({
			key: a,
			route: e,
			manifest: n,
			mapRouteProperties: r
		});
		o && (s.push(o), a === t && (c = o));
	}
	let l = s.length > 0 ? Promise.all(s).then(() => {}) : void 0;
	return l?.catch(() => {}), c?.catch(() => {}), {
		lazyRoutePromise: l,
		lazyHandlerPromise: c
	};
}
async function vt(e) {
	let t = e.matches.filter((e) => e.shouldLoad), n = {};
	return (await Promise.all(t.map((e) => e.resolve()))).forEach((e, r) => {
		n[t[r].route.id] = e;
	}), n;
}
async function yt(e) {
	return e.matches.some((e) => e.route.middleware) ? bt(e, () => vt(e)) : vt(e);
}
function bt(e, t) {
	return xt(e, t, (e) => {
		if (en(e)) throw e;
		return e;
	}, qt, n);
	function n(t, n, r) {
		if (r) return Promise.resolve(Object.assign(r.value, { [n]: {
			type: "error",
			result: t
		} }));
		{
			let { matches: r } = e, i = Vt(r, r[Math.min(Math.max(r.findIndex((e) => e.route.id === n), 0), Math.max(r.findIndex((e) => e.shouldCallHandler()), 0))].route.id).route.id;
			return Promise.resolve({ [i]: {
				type: "error",
				result: t
			} });
		}
	}
}
async function xt(e, t, n, r, i) {
	let { matches: a, ...o } = e;
	return await St(o, a.flatMap((e) => e.route.middleware ? e.route.middleware.map((t) => [e.route.id, t]) : []), t, n, r, i);
}
async function St(e, t, n, r, i, a, o = 0) {
	let { request: s } = e;
	if (s.signal.aborted) throw s.signal.reason ?? /* @__PURE__ */ Error(`Request aborted: ${s.method} ${s.url}`);
	let c = t[o];
	if (!c) return await n();
	let [l, u] = c, d, f = async () => {
		if (d) throw Error("You may only call `next()` once per middleware");
		try {
			return d = { value: await St(e, t, n, r, i, a, o + 1) }, d.value;
		} catch (e) {
			return d = { value: await a(e, l, d) }, d.value;
		}
	};
	try {
		let t = await u(e, f), n = t == null ? void 0 : r(t);
		return i(n) ? n : d ? n ?? d.value : (d = { value: await f() }, d.value);
	} catch (e) {
		return await a(e, l, d);
	}
}
function Ct(e, t, n, r, i) {
	let a = ht({
		key: "middleware",
		route: r.route,
		manifest: t,
		mapRouteProperties: e
	}), o = _t(r.route, X(n.method) ? "action" : "loader", t, e, i);
	return {
		middleware: a,
		route: o.lazyRoutePromise,
		handler: o.lazyHandlerPromise
	};
}
function wt(e, t, n, r, i, a, o, s, c, l = null, u) {
	let d = !1, f = Ct(e, t, n, a, o);
	return {
		...a,
		_lazyPromises: f,
		shouldLoad: c,
		shouldRevalidateArgs: l,
		shouldCallHandler(e) {
			return d = !0, l ? typeof u == "boolean" ? dt(a, {
				...l,
				defaultShouldRevalidate: u
			}) : typeof e == "boolean" ? dt(a, {
				...l,
				defaultShouldRevalidate: e
			}) : dt(a, l) : c;
		},
		resolve(e) {
			let { lazy: t, loader: o, middleware: l } = a.route, u = d || c || e && !X(n.method) && (t || o), p = l && l.length > 0 && !o && !t;
			return u && (X(n.method) || !p) ? Dt({
				request: n,
				path: r,
				pattern: i,
				match: a,
				lazyHandlerPromise: f?.handler,
				lazyRoutePromise: f?.route,
				handlerOverride: e,
				scopedContext: s
			}) : Promise.resolve({
				type: "data",
				result: void 0
			});
		}
	};
}
function Tt(e, t, n, r, i, a, o, s, c = null) {
	return i.map((l) => l.route.id === a.route.id ? wt(e, t, n, r, W(i), l, o, s, !0, c) : {
		...l,
		shouldLoad: !1,
		shouldRevalidateArgs: c,
		shouldCallHandler: () => !1,
		_lazyPromises: Ct(e, t, n, l, o),
		resolve: () => Promise.resolve({
			type: "data",
			result: void 0
		})
	});
}
async function Et(e, t, n, r, i, a, o) {
	r.some((e) => e._lazyPromises?.middleware) && await Promise.all(r.map((e) => e._lazyPromises?.middleware));
	let s = {
		request: t,
		url: Pt(t, n),
		pattern: W(r),
		params: r[0].params,
		context: a,
		matches: r
	}, c = o ? () => {
		throw Error("You cannot call `runClientMiddleware()` from a static handler `dataStrategy`. Middleware is run outside of `dataStrategy` during SSR in order to bubble up the Response.  You can enable middleware via the `respond` API in `query`/`queryRoute`");
	} : (e) => {
		let t = s;
		return bt(t, () => e({
			...t,
			fetcherKey: i,
			runClientMiddleware: () => {
				throw Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler");
			}
		}));
	}, l = await e({
		...s,
		fetcherKey: i,
		runClientMiddleware: c
	});
	try {
		await Promise.all(r.flatMap((e) => [e._lazyPromises?.handler, e._lazyPromises?.route]));
	} catch {}
	return l;
}
async function Dt({ request: e, path: t, pattern: n, match: r, lazyHandlerPromise: i, lazyRoutePromise: a, handlerOverride: o, scopedContext: s }) {
	let c, l, u = X(e.method), d = u ? "action" : "loader", f = (i) => {
		let a, c = new Promise((e, t) => a = t);
		l = () => a(), e.signal.addEventListener("abort", l);
		let u = (a) => typeof i == "function" ? i({
			request: e,
			url: Pt(e, t),
			pattern: n,
			params: r.params,
			context: s
		}, ...a === void 0 ? [] : [a]) : Promise.reject(/* @__PURE__ */ Error(`You cannot call the handler for a route which defines a boolean "${d}" [routeId: ${r.route.id}]`)), f = (async () => {
			try {
				return {
					type: "data",
					result: await (o ? o((e) => u(e)) : u())
				};
			} catch (e) {
				return {
					type: "error",
					result: e
				};
			}
		})();
		return Promise.race([f, c]);
	};
	try {
		let t = u ? r.route.action : r.route.loader;
		if (i || a) if (t) {
			let e, [n] = await Promise.all([
				f(t).catch((t) => {
					e = t;
				}),
				i,
				a
			]);
			if (e !== void 0) throw e;
			c = n;
		} else {
			await i;
			let t = u ? r.route.action : r.route.loader;
			if (t) [c] = await Promise.all([f(t), a]);
			else if (d === "action") {
				let t = new URL(e.url), n = t.pathname + t.search;
				throw J(405, {
					method: e.method,
					pathname: n,
					routeId: r.route.id
				});
			} else return {
				type: "data",
				result: void 0
			};
		}
		else if (t) c = await f(t);
		else {
			let t = new URL(e.url);
			throw J(404, { pathname: t.pathname + t.search });
		}
	} catch (e) {
		return {
			type: "error",
			result: e
		};
	} finally {
		l && e.signal.removeEventListener("abort", l);
	}
	return c;
}
async function Ot(e) {
	let t = e.headers.get("Content-Type");
	return t && /\bapplication\/json\b/.test(t) ? e.body == null ? null : e.json() : e.text();
}
async function kt(e) {
	let { result: t, type: n } = e;
	if (Qt(t)) {
		let e;
		try {
			e = await Ot(t);
		} catch (e) {
			return {
				type: "error",
				error: e
			};
		}
		return n === "error" ? {
			type: "error",
			error: new De(t.status, t.statusText, e),
			statusCode: t.status,
			headers: t.headers
		} : {
			type: "data",
			data: e,
			statusCode: t.status,
			headers: t.headers
		};
	}
	return n === "error" ? Zt(t) ? t.data instanceof Error ? {
		type: "error",
		error: t.data,
		statusCode: t.init?.status,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "error",
		error: Kt(t),
		statusCode: Oe(t) ? t.status : void 0,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "error",
		error: t,
		statusCode: Oe(t) ? t.status : void 0
	} : Zt(t) ? {
		type: "data",
		data: t.data,
		statusCode: t.init?.status,
		headers: t.init?.headers ? new Headers(t.init.headers) : void 0
	} : {
		type: "data",
		data: t
	};
}
function At(e, t, n, r, i) {
	let a = e.headers.get("Location");
	if (m(a, "Redirects returned/thrown from loaders/actions must have a Location header"), !he(a)) {
		let o = r.slice(0, r.findIndex((e) => e.route.id === n) + 1);
		a = it(new URL(t.url), o, i, a), e.headers.set("Location", a);
	}
	return e;
}
var jt = [
	"about:",
	"blob:",
	"chrome:",
	"chrome-untrusted:",
	"content:",
	"data:",
	"devtools:",
	"file:",
	"filesystem:",
	"javascript:"
];
function Mt(e, t, n, r) {
	if (he(e)) {
		let r = e, i = r.startsWith("//") ? new URL(t.protocol + r) : new URL(r);
		if (jt.includes(i.protocol)) throw Error("Invalid redirect location");
		let a = V(i.pathname, n) != null;
		if (i.origin === t.origin && a) return xe(i.pathname) + i.search + i.hash;
	}
	try {
		let t = r.createURL(e);
		if (jt.includes(t.protocol)) throw Error("Invalid redirect location");
	} catch {}
	return e;
}
function Nt(e, t, n, r) {
	let i = e.createURL(Wt(t)).toString(), a = { signal: n };
	if (r && X(r.formMethod)) {
		let { formMethod: e, formEncType: t } = r;
		a.method = e.toUpperCase(), t === "application/json" ? (a.headers = new Headers({ "Content-Type": t }), a.body = JSON.stringify(r.json)) : t === "text/plain" ? a.body = r.text : t === "application/x-www-form-urlencoded" && r.formData ? a.body = Ft(r.formData) : a.body = r.formData;
	}
	return new Request(i, a);
}
function Pt(e, t) {
	let n = new URL(e.url), r = typeof t == "string" ? b(t) : t;
	if (n.pathname = r.pathname || "/", r.search) {
		let e = new URLSearchParams(r.search), t = e.getAll("index");
		e.delete("index");
		for (let n of t.filter(Boolean)) e.append("index", n);
		n.search = e.size ? `?${e.toString()}` : "";
	} else n.search = "";
	return n.hash = r.hash || "", n;
}
function Ft(e) {
	let t = new URLSearchParams();
	for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
	return t;
}
function It(e) {
	let t = new FormData();
	for (let [n, r] of e.entries()) t.append(n, r);
	return t;
}
function Lt(e, t, n, r = !1, i = !1) {
	let a = {}, o = null, s, c = !1, l = {}, u = n && Y(n[1]) ? n[1].error : void 0;
	return e.forEach((n) => {
		if (!(n.route.id in t)) return;
		let d = n.route.id, f = t[d];
		if (m(!Xt(f), "Cannot handle redirect results in processLoaderData"), Y(f)) {
			let t = f.error;
			if (u !== void 0 && (t = u, u = void 0), o ||= {}, i) o[d] = t;
			else {
				let n = Vt(e, d);
				o[n.route.id] ?? (o[n.route.id] = t);
			}
			r || (a[d] = Xe), c || (c = !0, s = Oe(f.error) ? f.error.status : 500), f.headers && (l[d] = f.headers);
		} else a[d] = f.data, f.statusCode && f.statusCode !== 200 && !c && (s = f.statusCode), f.headers && (l[d] = f.headers);
	}), u !== void 0 && n && (o = { [n[0]]: u }, n[2] && (a[n[2]] = void 0)), {
		loaderData: a,
		errors: o,
		statusCode: s || 200,
		loaderHeaders: l
	};
}
function Rt(e, t, n, r, i, a, o) {
	let { loaderData: s, errors: c } = Lt(t, n, r);
	return i.filter((e) => !e.matches || e.matches.some((e) => e.shouldLoad)).forEach((t) => {
		let { key: n, match: r, controller: i } = t;
		if (i && i.signal.aborted) return;
		let s = a[n];
		if (m(s, "Did not find corresponding fetcher result"), Y(s)) {
			let t = Vt(e.matches, r?.route.id);
			c && c[t.route.id] || (c = {
				...c,
				[t.route.id]: s.error
			}), o.delete(n);
		} else if (Xt(s)) m(!1, "Unhandled fetcher revalidation redirect");
		else {
			let e = un(s.data);
			o.set(n, e);
		}
	}), {
		loaderData: s,
		errors: c
	};
}
function zt(e, t, n, r) {
	let i = Object.entries(t).filter(([, e]) => e !== Xe).reduce((e, [t, n]) => (e[t] = n, e), {});
	for (let a of n) {
		let n = a.route.id;
		if (!t.hasOwnProperty(n) && e.hasOwnProperty(n) && a.route.loader && (i[n] = e[n]), r && r.hasOwnProperty(n)) break;
	}
	return i;
}
function Bt(e) {
	return e ? Y(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } } : {};
}
function Vt(e, t) {
	return (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e]).reverse().find((e) => e.route.hasErrorBoundary === !0) || e[0];
}
function Ht(e) {
	let t = e.length === 1 ? e[0] : e.find((e) => e.index || !e.path || e.path === "/") || { id: "__shim-error-route__" };
	return {
		matches: [{
			params: {},
			pathname: "",
			pathnameBase: "",
			route: t
		}],
		route: t
	};
}
function J(e, { pathname: t, routeId: n, method: r, type: i, message: a } = {}) {
	let o = "Unknown Server Error", s = "Unknown @remix-run/router error";
	return e === 400 ? (o = "Bad Request", r && t && n ? s = `You made a ${r} request to "${t}" but did not provide a \`loader\` for route "${n}", so there is no way to handle the request.` : i === "invalid-body" && (s = "Unable to encode submission body")) : e === 403 ? (o = "Forbidden", s = `Route "${n}" does not match URL "${t}"`) : e === 404 ? (o = "Not Found", s = `No route matches URL "${t}"`) : e === 405 && (o = "Method Not Allowed", r && t && n ? s = `You made a ${r.toUpperCase()} request to "${t}" but did not provide an \`action\` for route "${n}", so there is no way to handle the request.` : r && (s = `Invalid request method "${r.toUpperCase()}"`)), new De(e || 500, o, Error(s), !0);
}
function Ut(e) {
	let t = Object.entries(e);
	for (let e = t.length - 1; e >= 0; e--) {
		let [n, r] = t[e];
		if (Xt(r)) return {
			key: n,
			result: r
		};
	}
}
function Wt(e) {
	return y({
		...typeof e == "string" ? b(e) : e,
		hash: ""
	});
}
function Gt(e, t) {
	return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== "";
}
function Kt(e) {
	return new De(e.init?.status ?? 500, e.init?.statusText ?? "Internal Server Error", e.data);
}
function qt(e) {
	return typeof e == "object" && !!e && Object.entries(e).every(([e, t]) => typeof e == "string" && Jt(t));
}
function Jt(e) {
	return typeof e == "object" && !!e && "type" in e && "result" in e && (e.type === "data" || e.type === "error");
}
function Yt(e) {
	return Qt(e.result) && Ue.has(e.result.status);
}
function Y(e) {
	return e.type === "error";
}
function Xt(e) {
	return (e && e.type) === "redirect";
}
function Zt(e) {
	return typeof e == "object" && !!e && "type" in e && "data" in e && "init" in e && e.type === "DataWithResponseInit";
}
function Qt(e) {
	return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && e.body !== void 0;
}
function $t(e) {
	return Ue.has(e);
}
function en(e) {
	return Qt(e) && $t(e.status) && e.headers.has("Location");
}
function tn(e) {
	return He.has(e.toUpperCase());
}
function X(e) {
	return Be.has(e.toUpperCase());
}
function nn(e) {
	return new URLSearchParams(e).getAll("index").some((e) => e === "");
}
function rn(e, t) {
	let n = typeof t == "string" ? b(t).search : t.search;
	if (e[e.length - 1].route.index && nn(n || "")) return e[e.length - 1];
	let r = ve(e);
	return r[r.length - 1];
}
function an(e) {
	let { formMethod: t, formAction: n, formEncType: r, text: i, formData: a, json: o } = e;
	if (!(!t || !n || !r)) {
		if (i != null) return {
			formMethod: t,
			formAction: n,
			formEncType: r,
			formData: void 0,
			json: void 0,
			text: i
		};
		if (a != null) return {
			formMethod: t,
			formAction: n,
			formEncType: r,
			formData: a,
			json: void 0,
			text: void 0
		};
		if (o !== void 0) return {
			formMethod: t,
			formAction: n,
			formEncType: r,
			formData: void 0,
			json: o,
			text: void 0
		};
	}
}
function on(e, t, n, r) {
	return r ? {
		state: "loading",
		location: e,
		matches: t,
		historyAction: n,
		formMethod: r.formMethod,
		formAction: r.formAction,
		formEncType: r.formEncType,
		formData: r.formData,
		json: r.json,
		text: r.text
	} : {
		state: "loading",
		location: e,
		matches: t,
		historyAction: n,
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0
	};
}
function sn(e, t, n, r) {
	return {
		state: "submitting",
		location: e,
		matches: t,
		historyAction: n,
		formMethod: r.formMethod,
		formAction: r.formAction,
		formEncType: r.formEncType,
		formData: r.formData,
		json: r.json,
		text: r.text
	};
}
function cn(e, t) {
	return e ? {
		state: "loading",
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t
	} : {
		state: "loading",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: t
	};
}
function ln(e, t) {
	return {
		state: "submitting",
		formMethod: e.formMethod,
		formAction: e.formAction,
		formEncType: e.formEncType,
		formData: e.formData,
		json: e.json,
		text: e.text,
		data: t ? t.data : void 0
	};
}
function un(e) {
	return {
		state: "idle",
		formMethod: void 0,
		formAction: void 0,
		formEncType: void 0,
		formData: void 0,
		json: void 0,
		text: void 0,
		data: e
	};
}
function dn(e, t) {
	try {
		let n = e.sessionStorage.getItem(Ye);
		if (n) {
			let e = JSON.parse(n);
			for (let [n, r] of Object.entries(e || {})) r && Array.isArray(r) && t.set(n, new Set(r || []));
		}
	} catch {}
}
function fn(e, t) {
	if (t.size > 0) {
		let n = {};
		for (let [e, r] of t) n[e] = [...r];
		try {
			e.sessionStorage.setItem(Ye, JSON.stringify(n));
		} catch (e) {
			h(!1, `Failed to save applied view transitions in sessionStorage (${e}).`);
		}
	}
}
function pn() {
	let e, t, n = new Promise((r, i) => {
		e = async (e) => {
			r(e);
			try {
				await n;
			} catch {}
		}, t = async (e) => {
			i(e);
			try {
				await n;
			} catch {}
		};
	});
	return {
		promise: n,
		resolve: e,
		reject: t
	};
}
var mn = a.createContext(null);
mn.displayName = "DataRouter";
var hn = a.createContext(null);
hn.displayName = "DataRouterState";
var gn = a.createContext(!1);
function _n() {
	return a.useContext(gn);
}
var vn = a.createContext({ isTransitioning: !1 });
vn.displayName = "ViewTransition";
var yn = a.createContext(/* @__PURE__ */ new Map());
yn.displayName = "Fetchers";
var bn = a.createContext(null);
bn.displayName = "Await";
var Z = a.createContext(null);
Z.displayName = "Navigation";
var xn = a.createContext(null);
xn.displayName = "Location";
var Q = a.createContext({
	outlet: null,
	matches: [],
	isDataRoute: !1
});
Q.displayName = "Route";
var Sn = a.createContext(null);
Sn.displayName = "RouteError";
var Cn = "REACT_ROUTER_ERROR", wn = "REDIRECT", Tn = "ROUTE_ERROR_RESPONSE";
function En(e) {
	if (e.startsWith(`${Cn}:${wn}:{`)) try {
		let t = JSON.parse(e.slice(28));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean") return t;
	} catch {}
}
function Dn(e) {
	if (e.startsWith(`${Cn}:${Tn}:{`)) try {
		let t = JSON.parse(e.slice(40));
		if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string") return new De(t.status, t.statusText, t.data);
	} catch {}
}
function On(e, { relative: t } = {}) {
	m(kn(), "useHref() may be used only in the context of a <Router> component.");
	let { basename: n, navigator: r } = a.useContext(Z), { hash: i, pathname: o, search: s } = Rn(e, { relative: t }), c = o;
	return n !== "/" && (c = o === "/" ? n : U([n, o])), r.createHref({
		pathname: c,
		search: s,
		hash: i
	});
}
function kn() {
	return a.useContext(xn) != null;
}
function $() {
	return m(kn(), "useLocation() may be used only in the context of a <Router> component."), a.useContext(xn).location;
}
function An(e) {
	m(kn(), "useMatch() may be used only in the context of a <Router> component.");
	let { pathname: t } = $();
	return a.useMemo(() => z(e, fe(t)), [t, e]);
}
var jn = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Mn(e) {
	a.useContext(Z).static || a.useLayoutEffect(e);
}
function Nn() {
	let { isDataRoute: e } = a.useContext(Q);
	return e ? ir() : Pn();
}
function Pn() {
	m(kn(), "useNavigate() may be used only in the context of a <Router> component.");
	let e = a.useContext(mn), { basename: t, navigator: n } = a.useContext(Z), { matches: r } = a.useContext(Q), { pathname: i } = $(), o = JSON.stringify(ye(r)), s = a.useRef(!1);
	return Mn(() => {
		s.current = !0;
	}), a.useCallback((r, a = {}) => {
		if (h(s.current, jn), !s.current) return;
		if (typeof r == "number") {
			n.go(r);
			return;
		}
		let c = be(r, JSON.parse(o), i, a.relative === "path");
		e == null && t !== "/" && (c.pathname = c.pathname === "/" ? t : U([t, c.pathname])), (a.replace ? n.replace : n.push)(c, a.state, a);
	}, [
		t,
		n,
		o,
		i,
		e
	]);
}
var Fn = a.createContext(null);
function In(e) {
	let t = a.useContext(Q).outlet;
	return a.useMemo(() => t && /* @__PURE__ */ a.createElement(Fn.Provider, { value: e }, t), [t, e]);
}
function Ln() {
	let { matches: e } = a.useContext(Q);
	return e[e.length - 1]?.params ?? {};
}
function Rn(e, { relative: t } = {}) {
	let { matches: n } = a.useContext(Q), { pathname: r } = $(), i = JSON.stringify(ye(n));
	return a.useMemo(() => be(e, JSON.parse(i), r, t === "path"), [
		e,
		i,
		r,
		t
	]);
}
function zn(e, t, n) {
	m(kn(), "useRoutes() may be used only in the context of a <Router> component.");
	let { navigator: r } = a.useContext(Z), { matches: i } = a.useContext(Q), o = i[i.length - 1], s = o ? o.params : {}, c = o ? o.pathname : "/", l = o ? o.pathnameBase : "/", u = o && o.route;
	{
		let e = u && u.path || "";
		or(c, !u || e.endsWith("*") || e.endsWith("*?"), `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === "/" ? "*" : `${e}/*`}">.`);
	}
	let d = $(), f;
	if (t) {
		let e = typeof t == "string" ? b(t) : t;
		m(l === "/" || e.pathname?.startsWith(l), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${l}" but pathname "${e.pathname}" was given in the \`location\` prop.`), f = e;
	} else f = d;
	let p = f.pathname || "/", g = p;
	if (l !== "/") {
		let e = l.replace(/^\//, "").split("/");
		g = "/" + p.replace(/^\//, "").split("/").slice(e.length).join("/");
	}
	let _ = n && n.state.matches.length ? n.state.matches.map((e) => Object.assign(e, { route: n.manifest[e.route.id] || e.route })) : N(e, { pathname: g });
	h(u || _ != null, `No routes matched location "${f.pathname}${f.search}${f.hash}" `), h(_ == null || _[_.length - 1].route.element !== void 0 || _[_.length - 1].route.Component !== void 0 || _[_.length - 1].route.lazy !== void 0, `Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);
	let v = Kn(_ && _.map((e) => Object.assign({}, e, {
		params: Object.assign({}, s, e.params),
		pathname: U([l, r.encodeLocation ? r.encodeLocation(e.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathname]),
		pathnameBase: e.pathnameBase === "/" ? l : U([l, r.encodeLocation ? r.encodeLocation(e.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")).pathname : e.pathnameBase])
	})), i, n);
	return t && v ? /* @__PURE__ */ a.createElement(xn.Provider, { value: {
		location: {
			pathname: "/",
			search: "",
			hash: "",
			state: null,
			key: "default",
			mask: void 0,
			...f
		},
		navigationType: "POP"
	} }, v) : v;
}
function Bn() {
	let e = tr(), t = Oe(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", i = {
		padding: "0.5rem",
		backgroundColor: r
	}, o = {
		padding: "2px 4px",
		backgroundColor: r
	}, s = null;
	return console.error("Error handled by React Router default ErrorBoundary:", e), s = /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ a.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ a.createElement("code", { style: o }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ a.createElement("code", { style: o }, "errorElement"), " prop on your route.")), /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ a.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? /* @__PURE__ */ a.createElement("pre", { style: i }, n) : null, s);
}
var Vn = /* @__PURE__ */ a.createElement(Bn, null), Hn = class extends a.Component {
	constructor(e) {
		super(e), this.state = {
			location: e.location,
			revalidation: e.revalidation,
			error: e.error
		};
	}
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	static getDerivedStateFromProps(e, t) {
		return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
			error: e.error,
			location: e.location,
			revalidation: e.revalidation
		} : {
			error: e.error === void 0 ? t.error : e.error,
			location: t.location,
			revalidation: e.revalidation || t.revalidation
		};
	}
	componentDidCatch(e, t) {
		this.props.onError ? this.props.onError(e, t) : console.error("React Router caught the following error during render", e);
	}
	render() {
		let e = this.state.error;
		if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
			let t = Dn(e.digest);
			t && (e = t);
		}
		let t = e === void 0 ? this.props.children : /* @__PURE__ */ a.createElement(Q.Provider, { value: this.props.routeContext }, /* @__PURE__ */ a.createElement(Sn.Provider, {
			value: e,
			children: this.props.component
		}));
		return this.context ? /* @__PURE__ */ a.createElement(Wn, { error: e }, t) : t;
	}
};
Hn.contextType = gn;
var Un = /* @__PURE__ */ new WeakMap();
function Wn({ children: e, error: t }) {
	let { basename: n } = a.useContext(Z);
	if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
		let e = En(t.digest);
		if (e) {
			let r = Un.get(t);
			if (r) throw r;
			let i = Ae(e.location, n);
			if (ke && !Un.get(t)) if (i.isExternal || e.reloadDocument) window.location.href = i.absoluteURL || i.to;
			else {
				let n = Promise.resolve().then(() => window.__reactRouterDataRouter.navigate(i.to, { replace: e.replace }));
				throw Un.set(t, n), n;
			}
			return /* @__PURE__ */ a.createElement("meta", {
				httpEquiv: "refresh",
				content: `0;url=${i.absoluteURL || i.to}`
			});
		}
	}
	return e;
}
function Gn({ routeContext: e, match: t, children: n }) {
	let r = a.useContext(mn);
	return r && r.static && r.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ a.createElement(Q.Provider, { value: e }, n);
}
function Kn(e, t = [], n) {
	let r = n?.state;
	if (e == null) {
		if (!r) return null;
		if (r.errors) e = r.matches;
		else if (t.length === 0 && !r.initialized && r.matches.length > 0) e = r.matches;
		else return null;
	}
	let i = e, o = r?.errors;
	if (o != null) {
		let e = i.findIndex((e) => e.route.id && o?.[e.route.id] !== void 0);
		m(e >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`), i = i.slice(0, Math.min(i.length, e + 1));
	}
	let s = !1, c = -1;
	if (n && r) {
		s = r.renderFallback;
		for (let e = 0; e < i.length; e++) {
			let t = i[e];
			if ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (c = e), t.route.id) {
				let { loaderData: e, errors: a } = r, o = t.route.loader && !e.hasOwnProperty(t.route.id) && (!a || a[t.route.id] === void 0);
				if (t.route.lazy || o) {
					n.isStatic && (s = !0), i = c >= 0 ? i.slice(0, c + 1) : [i[0]];
					break;
				}
			}
		}
	}
	let l = n?.onError, u = r && l ? (e, t) => {
		l(e, {
			location: r.location,
			params: r.matches?.[0]?.params ?? {},
			pattern: W(r.matches),
			errorInfo: t
		});
	} : void 0;
	return i.reduceRight((e, n, l) => {
		let d, f = !1, p = null, m = null;
		r && (d = o && n.route.id ? o[n.route.id] : void 0, p = n.route.errorElement || Vn, s && (c < 0 && l === 0 ? (or("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), f = !0, m = null) : c === l && (f = !0, m = n.route.hydrateFallbackElement || null)));
		let h = t.concat(i.slice(0, l + 1)), g = () => {
			let t;
			return t = d ? p : f ? m : n.route.Component ? /* @__PURE__ */ a.createElement(n.route.Component, null) : n.route.element ? n.route.element : e, /* @__PURE__ */ a.createElement(Gn, {
				match: n,
				routeContext: {
					outlet: e,
					matches: h,
					isDataRoute: r != null
				},
				children: t
			});
		};
		return r && (n.route.ErrorBoundary || n.route.errorElement || l === 0) ? /* @__PURE__ */ a.createElement(Hn, {
			location: r.location,
			revalidation: r.revalidation,
			component: p,
			error: d,
			children: g(),
			routeContext: {
				outlet: null,
				matches: h,
				isDataRoute: !0
			},
			onError: u
		}) : g();
	}, null);
}
function qn(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Jn(e) {
	let t = a.useContext(mn);
	return m(t, qn(e)), t;
}
function Yn(e) {
	let t = a.useContext(hn);
	return m(t, qn(e)), t;
}
function Xn(e) {
	let t = a.useContext(Q);
	return m(t, qn(e)), t;
}
function Zn(e) {
	let t = Xn(e), n = t.matches[t.matches.length - 1];
	return m(n.route.id, `${e} can only be used on routes that contain a unique "id"`), n.route.id;
}
function Qn() {
	return Zn("useRouteId");
}
function $n() {
	let e = Yn("useNavigation");
	return a.useMemo(() => {
		let { matches: t, historyAction: n, ...r } = e.navigation;
		return r;
	}, [e.navigation]);
}
function er() {
	let { matches: e, loaderData: t } = Yn("useMatches");
	return a.useMemo(() => e.map((e) => ee(e, t)), [e, t]);
}
function tr() {
	let e = a.useContext(Sn), t = Yn("useRouteError"), n = Zn("useRouteError");
	return e === void 0 ? t.errors?.[n] : e;
}
var nr = 0;
function rr(e) {
	let { router: t, basename: n } = Jn("useBlocker"), r = Yn("useBlocker"), [i, o] = a.useState(""), s = a.useCallback((t) => {
		if (typeof e != "function") return !!e;
		if (n === "/") return e(t);
		let { currentLocation: r, nextLocation: i, historyAction: a } = t;
		return e({
			currentLocation: {
				...r,
				pathname: V(r.pathname, n) || r.pathname
			},
			nextLocation: {
				...i,
				pathname: V(i.pathname, n) || i.pathname
			},
			historyAction: a
		});
	}, [n, e]);
	return a.useEffect(() => {
		let e = String(++nr);
		return o(e), () => t.deleteBlocker(e);
	}, [t]), a.useEffect(() => {
		i !== "" && t.getBlocker(i, s);
	}, [
		t,
		i,
		s
	]), i && r.blockers.has(i) ? r.blockers.get(i) : qe;
}
function ir() {
	let { router: e } = Jn("useNavigate"), t = Zn("useNavigate"), n = a.useRef(!1);
	return Mn(() => {
		n.current = !0;
	}), a.useCallback(async (r, i = {}) => {
		h(n.current, jn), n.current && (typeof r == "number" ? await e.navigate(r) : await e.navigate(r, {
			fromRouteId: t,
			...i
		}));
	}, [e, t]);
}
var ar = {};
function or(e, t, n) {
	!t && !ar[e] && (ar[e] = !0, h(!1, n));
}
var sr = {};
function cr(e, t) {
	!e && !sr[t] && (sr[t] = !0, console.warn(t));
}
var lr = a.useOptimistic, ur = () => void 0;
function dr(e) {
	return lr ? lr(e) : [e, ur];
}
function fr(e) {
	let t = { hasErrorBoundary: e.hasErrorBoundary || e.ErrorBoundary != null || e.errorElement != null };
	return e.Component && (e.element && h(!1, "You should not include both `Component` and `element` on your route - `Component` will be used."), Object.assign(t, {
		element: a.createElement(e.Component),
		Component: void 0
	})), e.HydrateFallback && (e.hydrateFallbackElement && h(!1, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."), Object.assign(t, {
		hydrateFallbackElement: a.createElement(e.HydrateFallback),
		HydrateFallback: void 0
	})), e.ErrorBoundary && (e.errorElement && h(!1, "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."), Object.assign(t, {
		errorElement: a.createElement(e.ErrorBoundary),
		ErrorBoundary: void 0
	})), t;
}
var pr = ["HydrateFallback", "hydrateFallbackElement"], mr = class {
	constructor() {
		this.status = "pending", this.promise = new Promise((e, t) => {
			this.resolve = (t) => {
				this.status === "pending" && (this.status = "resolved", e(t));
			}, this.reject = (e) => {
				this.status === "pending" && (this.status = "rejected", t(e));
			};
		});
	}
};
function hr({ router: e, flushSync: t, onError: n, useTransitions: r }) {
	r = _n() || r;
	let [i, o] = a.useState(e.state), [s, c] = dr(i), [l, u] = a.useState(), [d, f] = a.useState({ isTransitioning: !1 }), [p, m] = a.useState(), [h, g] = a.useState(), [_, v] = a.useState(), y = a.useRef(/* @__PURE__ */ new Map()), b = a.useCallback((i, { deletedFetchers: s, newErrors: l, flushSync: d, viewTransitionOpts: _ }) => {
		l && n && Object.values(l).forEach((e) => n(e, {
			location: i.location,
			params: i.matches[0]?.params ?? {},
			pattern: W(i.matches)
		})), i.fetchers.forEach((e, t) => {
			e.data !== void 0 && y.current.set(t, e.data);
		}), s.forEach((e) => y.current.delete(e)), cr(d === !1 || t != null, "You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from \"react-router/dom\"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.");
		let b = e.window != null && e.window.document != null && typeof e.window.document.startViewTransition == "function";
		if (cr(_ == null || b, "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."), !_ || !b) {
			t && d ? t(() => o(i)) : r === !1 ? o(i) : a.startTransition(() => {
				r === !0 && c((e) => gr(e, i)), o(i);
			});
			return;
		}
		if (t && d) {
			t(() => {
				h && (p?.resolve(), h.skipTransition()), f({
					isTransitioning: !0,
					flushSync: !0,
					currentLocation: _.currentLocation,
					nextLocation: _.nextLocation
				});
			});
			let n = e.window.document.startViewTransition(() => {
				t(() => o(i));
			});
			n.finished.finally(() => {
				t(() => {
					m(void 0), g(void 0), u(void 0), f({ isTransitioning: !1 });
				});
			}), t(() => g(n));
			return;
		}
		h ? (p?.resolve(), h.skipTransition(), v({
			state: i,
			currentLocation: _.currentLocation,
			nextLocation: _.nextLocation
		})) : (u(i), f({
			isTransitioning: !0,
			flushSync: !1,
			currentLocation: _.currentLocation,
			nextLocation: _.nextLocation
		}));
	}, [
		e.window,
		t,
		h,
		p,
		r,
		c,
		n
	]);
	a.useLayoutEffect(() => e.subscribe(b), [e, b]), a.useEffect(() => {
		d.isTransitioning && !d.flushSync && m(new mr());
	}, [d]), a.useEffect(() => {
		if (p && l && e.window) {
			let t = l, n = p.promise, i = e.window.document.startViewTransition(async () => {
				r === !1 ? o(t) : a.startTransition(() => {
					r === !0 && c((e) => gr(e, t)), o(t);
				}), await n;
			});
			i.finished.finally(() => {
				m(void 0), g(void 0), u(void 0), f({ isTransitioning: !1 });
			}), g(i);
		}
	}, [
		l,
		p,
		e.window,
		r,
		c
	]), a.useEffect(() => {
		p && l && s.location.key === l.location.key && p.resolve();
	}, [
		p,
		h,
		s.location,
		l
	]), a.useEffect(() => {
		!d.isTransitioning && _ && (u(_.state), f({
			isTransitioning: !0,
			flushSync: !1,
			currentLocation: _.currentLocation,
			nextLocation: _.nextLocation
		}), v(void 0));
	}, [d.isTransitioning, _]);
	let x = a.useMemo(() => ({
		createHref: e.createHref,
		encodeLocation: e.encodeLocation,
		go: (t) => e.navigate(t),
		push: (t, n, r) => e.navigate(t, {
			state: n,
			preventScrollReset: r?.preventScrollReset
		}),
		replace: (t, n, r) => e.navigate(t, {
			replace: !0,
			state: n,
			preventScrollReset: r?.preventScrollReset
		})
	}), [e]), S = e.basename || "/", C = a.useMemo(() => ({
		router: e,
		navigator: x,
		static: !1,
		basename: S,
		onError: n
	}), [
		e,
		x,
		S,
		n
	]);
	return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement(mn.Provider, { value: C }, /* @__PURE__ */ a.createElement(hn.Provider, { value: s }, /* @__PURE__ */ a.createElement(yn.Provider, { value: y.current }, /* @__PURE__ */ a.createElement(vn.Provider, { value: d }, /* @__PURE__ */ a.createElement(xr, {
		basename: S,
		location: s.location,
		navigationType: s.historyAction,
		navigator: x,
		useTransitions: r
	}, /* @__PURE__ */ a.createElement(_r, {
		routes: e.routes,
		manifest: e.manifest,
		future: e.future,
		state: s,
		isStatic: !1,
		onError: n
	})))))), null);
}
function gr(e, t) {
	return {
		...e,
		navigation: t.navigation.state === "idle" ? e.navigation : t.navigation,
		revalidation: t.revalidation === "idle" ? e.revalidation : t.revalidation,
		actionData: t.navigation.state === "submitting" ? e.actionData : t.actionData,
		fetchers: t.fetchers
	};
}
var _r = a.memo(vr);
function vr({ routes: e, manifest: t, future: n, state: r, isStatic: i, onError: a }) {
	return zn(e, void 0, {
		manifest: t,
		state: r,
		isStatic: i,
		onError: a,
		future: n
	});
}
function yr({ to: e, replace: t, state: n, relative: r }) {
	m(kn(), "<Navigate> may be used only in the context of a <Router> component.");
	let { static: i } = a.useContext(Z);
	h(!i, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
	let { matches: o } = a.useContext(Q), { pathname: s } = $(), c = Nn(), l = be(e, ye(o), s, r === "path"), u = JSON.stringify(l);
	return a.useEffect(() => {
		c(JSON.parse(u), {
			replace: t,
			state: n,
			relative: r
		});
	}, [
		c,
		u,
		r,
		t,
		n
	]), null;
}
function br(e) {
	return In(e.context);
}
function xr({ basename: e = "/", children: t = null, location: n, navigationType: r = "POP", navigator: i, static: o = !1, useTransitions: s }) {
	m(!kn(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
	let c = e.replace(/^\/*/, "/"), l = a.useMemo(() => ({
		basename: c,
		navigator: i,
		static: o,
		useTransitions: s,
		future: {}
	}), [
		c,
		i,
		o,
		s
	]);
	typeof n == "string" && (n = b(n));
	let { pathname: u = "/", search: d = "", hash: f = "", state: p = null, key: g = "default", mask: _ } = n, v = a.useMemo(() => {
		let e = V(u, c);
		return e == null ? null : {
			location: {
				pathname: e,
				search: d,
				hash: f,
				state: p,
				key: g,
				mask: _
			},
			navigationType: r
		};
	}, [
		c,
		u,
		d,
		f,
		p,
		g,
		r,
		_
	]);
	return h(v != null, `<Router basename="${c}"> is not able to match the URL "${u}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`), v == null ? null : /* @__PURE__ */ a.createElement(Z.Provider, { value: l }, /* @__PURE__ */ a.createElement(xn.Provider, {
		children: t,
		value: v
	}));
}
a.Component;
var Sr = "get", Cr = "application/x-www-form-urlencoded";
function wr(e) {
	return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Tr(e) {
	return wr(e) && e.tagName.toLowerCase() === "button";
}
function Er(e) {
	return wr(e) && e.tagName.toLowerCase() === "form";
}
function Dr(e) {
	return wr(e) && e.tagName.toLowerCase() === "input";
}
function Or(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function kr(e, t) {
	return e.button === 0 && (!t || t === "_self") && !Or(e);
}
function Ar(e = "") {
	return new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
		let r = e[n];
		return t.concat(Array.isArray(r) ? r.map((e) => [n, e]) : [[n, r]]);
	}, []));
}
function jr(e, t) {
	let n = Ar(e);
	return t && t.forEach((e, r) => {
		n.has(r) || t.getAll(r).forEach((e) => {
			n.append(r, e);
		});
	}), n;
}
var Mr = null;
function Nr() {
	if (Mr === null) try {
		new FormData(document.createElement("form"), 0), Mr = !1;
	} catch {
		Mr = !0;
	}
	return Mr;
}
var Pr = /* @__PURE__ */ new Set([
	"application/x-www-form-urlencoded",
	"multipart/form-data",
	"text/plain"
]);
function Fr(e) {
	return e != null && !Pr.has(e) ? (h(!1, `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cr}"`), null) : e;
}
function Ir(e, t) {
	let n, r, i, a, o;
	if (Er(e)) {
		let o = e.getAttribute("action");
		r = o ? V(o, t) : null, n = e.getAttribute("method") || Sr, i = Fr(e.getAttribute("enctype")) || Cr, a = new FormData(e);
	} else if (Tr(e) || Dr(e) && (e.type === "submit" || e.type === "image")) {
		let o = e.form;
		if (o == null) throw Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
		let s = e.getAttribute("formaction") || o.getAttribute("action");
		if (r = s ? V(s, t) : null, n = e.getAttribute("formmethod") || o.getAttribute("method") || Sr, i = Fr(e.getAttribute("formenctype")) || Fr(o.getAttribute("enctype")) || Cr, a = new FormData(o, e), !Nr()) {
			let { name: t, type: n, value: r } = e;
			if (n === "image") {
				let e = t ? `${t}.` : "";
				a.append(`${e}x`, "0"), a.append(`${e}y`, "0");
			} else t && a.append(t, r);
		}
	} else if (wr(e)) throw Error("Cannot submit element that is not <form>, <button>, or <input type=\"submit|image\">");
	else n = Sr, r = null, i = Cr, o = e;
	return a && i === "text/plain" && (o = a, a = void 0), {
		action: r,
		method: n.toLowerCase(),
		encType: i,
		formData: a,
		body: o
	};
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Lr = {
	"&": "\\u0026",
	">": "\\u003e",
	"<": "\\u003c",
	"\u2028": "\\u2028",
	"\u2029": "\\u2029"
}, Rr = /[&><\u2028\u2029]/g;
function zr(e) {
	return e.replace(Rr, (e) => Lr[e]);
}
function Br(e, t) {
	if (e === !1 || e == null) throw Error(t);
}
function Vr(e, t, n, r) {
	let i = typeof e == "string" ? new URL(e, typeof window > "u" ? "server://singlefetch/" : window.location.origin) : e;
	return n ? i.pathname.endsWith("/") ? i.pathname = `${i.pathname}_.${r}` : i.pathname = `${i.pathname}.${r}` : i.pathname === "/" ? i.pathname = `_root.${r}` : t && V(i.pathname, t) === "/" ? i.pathname = `${Se(t)}/_root.${r}` : i.pathname = `${Se(i.pathname)}.${r}`, i;
}
async function Hr(e, t) {
	if (e.id in t) return t[e.id];
	try {
		let n = await import(
			/* @vite-ignore */
			/* webpackIgnore: true */
			e.module
);
		return t[e.id] = n, n;
	} catch (t) {
		return console.error(`Error loading route module \`${e.module}\`, reloading page...`), console.error(t), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {});
	}
}
function Ur(e) {
	return e != null && typeof e.page == "string";
}
function Wr(e) {
	return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function Gr(e, t, n) {
	return Xr((await Promise.all(e.map(async (e) => {
		let r = t.routes[e.route.id];
		if (r) {
			let e = await Hr(r, n);
			return e.links ? e.links() : [];
		}
		return [];
	}))).flat(1).filter(Wr).filter((e) => e.rel === "stylesheet" || e.rel === "preload").map((e) => e.rel === "stylesheet" ? {
		...e,
		rel: "prefetch",
		as: "style"
	} : {
		...e,
		rel: "prefetch"
	}));
}
function Kr(e, t, n, r, i, a) {
	let o = (e, t) => n[t] ? e.route.id !== n[t].route.id : !0, s = (e, t) => n[t].pathname !== e.pathname || n[t].route.path?.endsWith("*") && n[t].params["*"] !== e.params["*"];
	return a === "assets" ? t.filter((e, t) => o(e, t) || s(e, t)) : a === "data" ? t.filter((t, a) => {
		let c = r.routes[t.route.id];
		if (!c || !c.hasLoader) return !1;
		if (o(t, a) || s(t, a)) return !0;
		if (t.route.shouldRevalidate) {
			let r = t.route.shouldRevalidate({
				currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
				currentParams: n[0]?.params || {},
				nextUrl: new URL(e, window.origin),
				nextParams: t.params,
				defaultShouldRevalidate: !0
			});
			if (typeof r == "boolean") return r;
		}
		return !0;
	}) : [];
}
function qr(e, t, { includeHydrateFallback: n } = {}) {
	return Jr(e.map((e) => {
		let r = t.routes[e.route.id];
		if (!r) return [];
		let i = [r.module];
		return r.clientActionModule && (i = i.concat(r.clientActionModule)), r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)), n && r.hydrateFallbackModule && (i = i.concat(r.hydrateFallbackModule)), r.imports && (i = i.concat(r.imports)), i;
	}).flat(1));
}
function Jr(e) {
	return [...new Set(e)];
}
function Yr(e) {
	let t = {}, n = Object.keys(e).sort();
	for (let r of n) t[r] = e[r];
	return t;
}
function Xr(e, t) {
	let n = /* @__PURE__ */ new Set(), r = new Set(t);
	return e.reduce((e, i) => {
		if (t && !Ur(i) && i.as === "script" && i.href && r.has(i.href)) return e;
		let a = JSON.stringify(Yr(i));
		return n.has(a) || (n.add(a), e.push({
			key: a,
			link: i
		})), e;
	}, []);
}
function Zr() {
	let e = a.useContext(mn);
	return Br(e, "You must render this element inside a <DataRouterContext.Provider> element"), e;
}
function Qr() {
	let e = a.useContext(hn);
	return Br(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e;
}
var $r = a.createContext(void 0);
$r.displayName = "FrameworkContext";
function ei() {
	let e = a.useContext($r);
	return Br(e, "You must render this element inside a <HydratedRouter> element"), e;
}
function ti(e, t) {
	let n = a.useContext($r), [r, i] = a.useState(!1), [o, s] = a.useState(!1), { onFocus: c, onBlur: l, onMouseEnter: u, onMouseLeave: d, onTouchStart: f } = t, p = a.useRef(null);
	a.useEffect(() => {
		if (e === "render" && s(!0), e === "viewport") {
			let e = new IntersectionObserver((e) => {
				e.forEach((e) => {
					s(e.isIntersecting);
				});
			}, { threshold: .5 });
			return p.current && e.observe(p.current), () => {
				e.disconnect();
			};
		}
	}, [e]), a.useEffect(() => {
		if (r) {
			let e = setTimeout(() => {
				s(!0);
			}, 100);
			return () => {
				clearTimeout(e);
			};
		}
	}, [r]);
	let m = () => {
		i(!0);
	}, h = () => {
		i(!1), s(!1);
	};
	return n ? e === "intent" ? [
		o,
		p,
		{
			onFocus: ni(c, m),
			onBlur: ni(l, h),
			onMouseEnter: ni(u, m),
			onMouseLeave: ni(d, h),
			onTouchStart: ni(f, m)
		}
	] : [
		o,
		p,
		{}
	] : [
		!1,
		p,
		{}
	];
}
function ni(e, t) {
	return (n) => {
		e && e(n), n.defaultPrevented || t(n);
	};
}
function ri({ page: e, ...t }) {
	let n = _n(), { router: r } = Zr(), i = a.useMemo(() => N(r.routes, e, r.basename), [
		r.routes,
		e,
		r.basename
	]);
	return i ? n ? /* @__PURE__ */ a.createElement(ai, {
		page: e,
		matches: i,
		...t
	}) : /* @__PURE__ */ a.createElement(oi, {
		page: e,
		matches: i,
		...t
	}) : null;
}
function ii(e) {
	let { manifest: t, routeModules: n } = ei(), [r, i] = a.useState([]);
	return a.useEffect(() => {
		let r = !1;
		return Gr(e, t, n).then((e) => {
			r || i(e);
		}), () => {
			r = !0;
		};
	}, [
		e,
		t,
		n
	]), r;
}
function ai({ page: e, matches: t, ...n }) {
	let r = $(), { future: i } = ei(), { basename: o } = Zr(), s = a.useMemo(() => {
		if (e === r.pathname + r.search + r.hash) return [];
		let n = Vr(e, o, i.v8_trailingSlashAwareDataRequests, "rsc"), a = !1, s = [];
		for (let e of t) typeof e.route.shouldRevalidate == "function" ? a = !0 : s.push(e.route.id);
		return a && s.length > 0 && n.searchParams.set("_routes", s.join(",")), [n.pathname + n.search];
	}, [
		o,
		i.v8_trailingSlashAwareDataRequests,
		e,
		r,
		t
	]);
	return /* @__PURE__ */ a.createElement(a.Fragment, null, s.map((e) => /* @__PURE__ */ a.createElement("link", {
		key: e,
		rel: "prefetch",
		as: "fetch",
		href: e,
		...n
	})));
}
function oi({ page: e, matches: t, ...n }) {
	let r = $(), { future: i, manifest: o, routeModules: s } = ei(), { basename: c } = Zr(), { loaderData: l, matches: u } = Qr(), d = a.useMemo(() => Kr(e, t, u, o, r, "data"), [
		e,
		t,
		u,
		o,
		r
	]), f = a.useMemo(() => Kr(e, t, u, o, r, "assets"), [
		e,
		t,
		u,
		o,
		r
	]), p = a.useMemo(() => {
		if (e === r.pathname + r.search + r.hash) return [];
		let n = /* @__PURE__ */ new Set(), a = !1;
		if (t.forEach((e) => {
			let t = o.routes[e.route.id];
			!t || !t.hasLoader || (!d.some((t) => t.route.id === e.route.id) && e.route.id in l && s[e.route.id]?.shouldRevalidate || t.hasClientLoader ? a = !0 : n.add(e.route.id));
		}), n.size === 0) return [];
		let u = Vr(e, c, i.v8_trailingSlashAwareDataRequests, "data");
		return a && n.size > 0 && u.searchParams.set("_routes", t.filter((e) => n.has(e.route.id)).map((e) => e.route.id).join(",")), [u.pathname + u.search];
	}, [
		c,
		i.v8_trailingSlashAwareDataRequests,
		l,
		r,
		o,
		d,
		t,
		e,
		s
	]), m = a.useMemo(() => qr(f, o), [f, o]), h = ii(f);
	return /* @__PURE__ */ a.createElement(a.Fragment, null, p.map((e) => /* @__PURE__ */ a.createElement("link", {
		key: e,
		rel: "prefetch",
		as: "fetch",
		href: e,
		...n
	})), m.map((e) => /* @__PURE__ */ a.createElement("link", {
		key: e,
		rel: "modulepreload",
		href: e,
		...n
	})), h.map(({ key: e, link: t }) => /* @__PURE__ */ a.createElement("link", {
		key: e,
		nonce: n.nonce,
		...t,
		crossOrigin: t.crossOrigin ?? n.crossOrigin
	})));
}
function si(...e) {
	return (t) => {
		e.forEach((e) => {
			typeof e == "function" ? e(t) : e != null && (e.current = t);
		});
	};
}
a.Component;
var ci = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0;
try {
	ci && (window.__reactRouterVersion = "7.16.0");
} catch {}
function li(e, t) {
	return nt({
		basename: t?.basename,
		getContext: t?.getContext,
		future: t?.future,
		history: p({ window: t?.window }),
		hydrationData: t?.hydrationData || ui(),
		routes: e,
		mapRouteProperties: fr,
		hydrationRouteProperties: pr,
		dataStrategy: t?.dataStrategy,
		patchRoutesOnNavigation: t?.patchRoutesOnNavigation,
		window: t?.window,
		instrumentations: t?.instrumentations
	}).initialize();
}
function ui() {
	let e = window?.__staticRouterHydrationData;
	return e && e.errors && (e = {
		...e,
		errors: di(e.errors)
	}), e;
}
function di(e) {
	if (!e) return null;
	let t = Object.entries(e), n = {};
	for (let [e, r] of t) if (r && r.__type === "RouteErrorResponse") n[e] = new De(r.status, r.statusText, r.data, r.internal === !0);
	else if (r && r.__type === "Error") {
		if (r.__subType) {
			let t = window[r.__subType];
			if (typeof t == "function") try {
				let i = new t(r.message);
				i.stack = "", n[e] = i;
			} catch {}
		}
		if (n[e] == null) {
			let t = Error(r.message);
			t.stack = "", n[e] = t;
		}
	} else n[e] = r;
	return n;
}
function fi({ basename: e, children: t, history: n, useTransitions: r }) {
	let [i, o] = a.useState({
		action: n.action,
		location: n.location
	}), s = a.useCallback((e) => {
		r === !1 ? o(e) : a.startTransition(() => o(e));
	}, [r]);
	return a.useLayoutEffect(() => n.listen(s), [n, s]), /* @__PURE__ */ a.createElement(xr, {
		basename: e,
		children: t,
		location: i.location,
		navigationType: i.action,
		navigator: n,
		useTransitions: r
	});
}
fi.displayName = "unstable_HistoryRouter";
var pi = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, mi = a.forwardRef(function({ onClick: e, discover: t = "render", prefetch: n = "none", relative: r, reloadDocument: i, replace: o, mask: s, state: c, target: l, to: u, preventScrollReset: d, viewTransition: f, defaultShouldRevalidate: p, ...m }, h) {
	let { basename: g, navigator: _, useTransitions: v } = a.useContext(Z), y = typeof u == "string" && pi.test(u), b = Ae(u, g);
	u = b.to;
	let x = On(u, { relative: r }), S = $(), C = null;
	if (s) {
		let e = be(s, [], S.mask ? S.mask.pathname : "/", !0);
		g !== "/" && (e.pathname = e.pathname === "/" ? g : U([g, e.pathname])), C = _.createHref(e);
	}
	let [w, T, E] = ti(n, m), D = xi(u, {
		replace: o,
		mask: s,
		state: c,
		target: l,
		preventScrollReset: d,
		relative: r,
		viewTransition: f,
		defaultShouldRevalidate: p,
		useTransitions: v
	});
	function O(t) {
		e && e(t), t.defaultPrevented || D(t);
	}
	let k = !(b.isExternal || i), A = /* @__PURE__ */ a.createElement("a", {
		...m,
		...E,
		href: (k ? C : void 0) || b.absoluteURL || x,
		onClick: k ? O : e,
		ref: si(h, T),
		target: l,
		"data-discover": !y && t === "render" ? "true" : void 0
	});
	return w && !y ? /* @__PURE__ */ a.createElement(a.Fragment, null, A, /* @__PURE__ */ a.createElement(ri, { page: x })) : A;
});
mi.displayName = "Link";
var hi = a.forwardRef(function({ "aria-current": e = "page", caseSensitive: t = !1, className: n = "", end: r = !1, style: i, to: o, viewTransition: s, children: c, ...l }, u) {
	let d = Rn(o, { relative: l.relative }), f = $(), p = a.useContext(hn), { navigator: m, basename: h } = a.useContext(Z), g = p != null && Mi(d) && s === !0, _ = m.encodeLocation ? m.encodeLocation(d).pathname : d.pathname, v = f.pathname, y = p && p.navigation && p.navigation.location ? p.navigation.location.pathname : null;
	t || (v = v.toLowerCase(), y = y ? y.toLowerCase() : null, _ = _.toLowerCase()), y && h && (y = V(y, h) || y);
	let b = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length, x = v === _ || !r && v.startsWith(_) && v.charAt(b) === "/", S = y != null && (y === _ || !r && y.startsWith(_) && y.charAt(_.length) === "/"), C = {
		isActive: x,
		isPending: S,
		isTransitioning: g
	}, w = x ? e : void 0, T;
	T = typeof n == "function" ? n(C) : [
		n,
		x ? "active" : null,
		S ? "pending" : null,
		g ? "transitioning" : null
	].filter(Boolean).join(" ");
	let E = typeof i == "function" ? i(C) : i;
	return /* @__PURE__ */ a.createElement(mi, {
		...l,
		"aria-current": w,
		className: T,
		ref: u,
		style: E,
		to: o,
		viewTransition: s
	}, typeof c == "function" ? c(C) : c);
});
hi.displayName = "NavLink";
var gi = a.forwardRef(({ discover: e = "render", fetcherKey: t, navigate: n, reloadDocument: r, replace: i, state: o, method: s = Sr, action: c, onSubmit: l, relative: u, preventScrollReset: d, viewTransition: f, defaultShouldRevalidate: p, ...m }, h) => {
	let { useTransitions: g } = a.useContext(Z), _ = Ti(), v = Ei(c, { relative: u }), y = s.toLowerCase() === "get" ? "get" : "post", b = typeof c == "string" && pi.test(c);
	return /* @__PURE__ */ a.createElement("form", {
		ref: h,
		method: y,
		action: v,
		onSubmit: r ? l : (e) => {
			if (l && l(e), e.defaultPrevented) return;
			e.preventDefault();
			let r = e.nativeEvent.submitter, c = r?.getAttribute("formmethod") || s, m = () => _(r || e.currentTarget, {
				fetcherKey: t,
				method: c,
				navigate: n,
				replace: i,
				state: o,
				relative: u,
				preventScrollReset: d,
				viewTransition: f,
				defaultShouldRevalidate: p
			});
			g && n !== !1 ? a.startTransition(() => m()) : m();
		},
		...m,
		"data-discover": !b && e === "render" ? "true" : void 0
	});
});
gi.displayName = "Form";
function _i({ getKey: e, storageKey: t, ...n }) {
	let r = a.useContext($r), { basename: i } = a.useContext(Z), o = $(), s = er();
	Ai({
		getKey: e,
		storageKey: t
	});
	let c = a.useMemo(() => {
		if (!r || !e) return null;
		let t = ki(o, s, i, e);
		return t === o.key ? null : t;
	}, []);
	if (!r || r.isSpaMode) return null;
	let l = ((e, t) => {
		if (!window.history.state || !window.history.state.key) {
			let e = Math.random().toString(32).slice(2);
			window.history.replaceState({ key: e }, "");
		}
		try {
			let n = JSON.parse(sessionStorage.getItem(e) || "{}")[t || window.history.state.key];
			typeof n == "number" && window.scrollTo(0, n);
		} catch (t) {
			console.error(t), sessionStorage.removeItem(e);
		}
	}).toString();
	return /* @__PURE__ */ a.createElement("script", {
		...n,
		suppressHydrationWarning: !0,
		dangerouslySetInnerHTML: { __html: `(${l})(${zr(JSON.stringify(t || Di))}, ${zr(JSON.stringify(c))})` }
	});
}
_i.displayName = "ScrollRestoration";
function vi(e) {
	return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function yi(e) {
	let t = a.useContext(mn);
	return m(t, vi(e)), t;
}
function bi(e) {
	let t = a.useContext(hn);
	return m(t, vi(e)), t;
}
function xi(e, { target: t, replace: n, mask: r, state: i, preventScrollReset: o, relative: s, viewTransition: c, defaultShouldRevalidate: l, useTransitions: u } = {}) {
	let d = Nn(), f = $(), p = Rn(e, { relative: s });
	return a.useCallback((m) => {
		if (kr(m, t)) {
			m.preventDefault();
			let t = n === void 0 ? y(f) === y(p) : n, h = () => d(e, {
				replace: t,
				mask: r,
				state: i,
				preventScrollReset: o,
				relative: s,
				viewTransition: c,
				defaultShouldRevalidate: l
			});
			u ? a.startTransition(() => h()) : h();
		}
	}, [
		f,
		d,
		p,
		n,
		r,
		i,
		t,
		e,
		o,
		s,
		c,
		l,
		u
	]);
}
function Si(e) {
	h(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");
	let t = a.useRef(Ar(e)), n = a.useRef(!1), r = $(), i = a.useMemo(() => jr(r.search, n.current ? null : t.current), [r.search]), o = Nn();
	return [i, a.useCallback((e, t) => {
		let r = Ar(typeof e == "function" ? e(new URLSearchParams(i)) : e);
		n.current = !0, o("?" + r, t);
	}, [o, i])];
}
var Ci = 0, wi = () => `__${String(++Ci)}__`;
function Ti() {
	let { router: e } = yi("useSubmit"), { basename: t } = a.useContext(Z), n = Qn(), r = e.fetch, i = e.navigate;
	return a.useCallback(async (e, a = {}) => {
		let { action: o, method: s, encType: c, formData: l, body: u } = Ir(e, t);
		a.navigate === !1 ? await r(a.fetcherKey || wi(), n, a.action || o, {
			defaultShouldRevalidate: a.defaultShouldRevalidate,
			preventScrollReset: a.preventScrollReset,
			formData: l,
			body: u,
			formMethod: a.method || s,
			formEncType: a.encType || c,
			flushSync: a.flushSync
		}) : await i(a.action || o, {
			defaultShouldRevalidate: a.defaultShouldRevalidate,
			preventScrollReset: a.preventScrollReset,
			formData: l,
			body: u,
			formMethod: a.method || s,
			formEncType: a.encType || c,
			replace: a.replace,
			state: a.state,
			fromRouteId: n,
			flushSync: a.flushSync,
			viewTransition: a.viewTransition
		});
	}, [
		r,
		i,
		t,
		n
	]);
}
function Ei(e, { relative: t } = {}) {
	let { basename: n } = a.useContext(Z), r = a.useContext(Q);
	m(r, "useFormAction must be used inside a RouteContext");
	let [i] = r.matches.slice(-1), o = { ...Rn(e || ".", { relative: t }) }, s = $();
	if (e == null) {
		o.search = s.search;
		let e = new URLSearchParams(o.search), t = e.getAll("index");
		if (t.some((e) => e === "")) {
			e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
			let n = e.toString();
			o.search = n ? `?${n}` : "";
		}
	}
	return (!e || e === ".") && i.route.index && (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (o.pathname = o.pathname === "/" ? n : U([n, o.pathname])), y(o);
}
var Di = "react-router-scroll-positions", Oi = {};
function ki(e, t, n, r) {
	let i = null;
	return r && (i = r(n === "/" ? e : {
		...e,
		pathname: V(e.pathname, n) || e.pathname
	}, t)), i ??= e.key, i;
}
function Ai({ getKey: e, storageKey: t } = {}) {
	let { router: n } = yi("useScrollRestoration"), { restoreScrollPosition: r, preventScrollReset: i } = bi("useScrollRestoration"), { basename: o } = a.useContext(Z), s = $(), c = er(), l = $n();
	a.useEffect(() => (window.history.scrollRestoration = "manual", () => {
		window.history.scrollRestoration = "auto";
	}), []), ji(a.useCallback(() => {
		if (l.state === "idle") {
			let t = ki(s, c, o, e);
			Oi[t] = window.scrollY;
		}
		try {
			sessionStorage.setItem(t || Di, JSON.stringify(Oi));
		} catch (e) {
			h(!1, `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`);
		}
		window.history.scrollRestoration = "auto";
	}, [
		l.state,
		e,
		o,
		s,
		c,
		t
	])), typeof document < "u" && (a.useLayoutEffect(() => {
		try {
			let e = sessionStorage.getItem(t || Di);
			e && (Oi = JSON.parse(e));
		} catch {}
	}, [t]), a.useLayoutEffect(() => {
		let t = n?.enableScrollRestoration(Oi, () => window.scrollY, e ? (t, n) => ki(t, n, o, e) : void 0);
		return () => t && t();
	}, [
		n,
		o,
		e
	]), a.useLayoutEffect(() => {
		if (r !== !1) {
			if (typeof r == "number") {
				window.scrollTo(0, r);
				return;
			}
			try {
				if (s.hash) {
					let e = document.getElementById(decodeURIComponent(s.hash.slice(1)));
					if (e) {
						e.scrollIntoView();
						return;
					}
				}
			} catch {
				h(!1, `"${s.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`);
			}
			i !== !0 && window.scrollTo(0, 0);
		}
	}, [
		s,
		r,
		i
	]));
}
function ji(e, t) {
	let { capture: n } = t || {};
	a.useEffect(() => {
		let t = n == null ? void 0 : { capture: n };
		return window.addEventListener("pagehide", e, t), () => {
			window.removeEventListener("pagehide", e, t);
		};
	}, [e, n]);
}
function Mi(e, { relative: t } = {}) {
	let n = a.useContext(vn);
	m(n != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
	let { basename: r } = yi("useViewTransitionState"), i = Rn(e, { relative: t });
	if (!n.isTransitioning) return !1;
	let o = V(n.currentLocation.pathname, r) || n.currentLocation.pathname, s = V(n.nextLocation.pathname, r) || n.nextLocation.pathname;
	return z(i.pathname, s) != null || z(i.pathname, o) != null;
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+react-query@5.101.0_react@19.2.7/node_modules/@tanstack/react-query/build/modern/useSuspenseQuery.js
function Ni(e, t) {
	return r({
		...e,
		enabled: !0,
		suspense: !0,
		throwOnError: n,
		placeholderData: void 0
	}, i, t);
}
//#endregion
//#region src/lib/util/joinUrl.ts
var Pi = /^(\w+:\/\/[^/?]+)?([^?]*)(\?.*)?$/, Fi = (e) => e.filter((e) => e != null && e !== !1 && (typeof e == "string" || typeof e == "number")).map((e) => `${e}`).filter((e) => e), Ii = (e) => {
	let [, t = "", n = "", r = ""] = e.join("/").match(Pi) ?? [];
	return {
		prefix: t,
		pathname: n.split("/").filter((e) => e !== ""),
		query: r
	};
}, Li = (e) => {
	let { prefix: t, pathname: n, query: r } = e, i = t;
	return n.length > 0 ? (i ? i += "/" : i = "/", i += n.join("/")) : i ||= "/", i + r;
}, Ri = (...e) => Li(Ii(Fi(e)));
//#endregion
export { Si as S, An as _, yr as a, Ln as b, li as c, Oe as d, z as f, $ as g, On as h, hi as i, C as l, rr as m, Ni as n, br as o, Ee as p, mi as r, hr as s, Ri as t, R as u, Nn as v, tr as x, $n as y };
