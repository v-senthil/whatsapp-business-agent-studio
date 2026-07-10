import { a as e, i as t, n, r, t as i } from "./chunk-HEgqtunE.js";
import { t as a } from "./react-DCUEsnwl.js";
import { C as o, S as s, _ as c, a as l, b as u, c as d, d as f, f as p, g as m, h, i as g, l as _, m as v, n as y, o as b, p as x, r as S, s as ee, t as te, u as ne, v as re, x as ie, y as ae } from "./Badge-CRio92UV.js";
import { _ as C, a as oe, c as se, d as ce, f as le, g as w, i as T, l as ue, o as de, s as fe, u as pe, v as me } from "./dist-D6fp9d0w.js";
import { S as he, _ as E, a as ge, b as _e, d as ve, f as ye, g as be, h as D, i as xe, l as Se, m as Ce, n as we, o as Te, p as Ee, r as De, s as Oe, t as O, u as ke, v as Ae, x as je, y as Me } from "./joinUrl-51baNiN4.js";
import { E as Ne, T as Pe, _ as Fe, a as Ie, b as Le, c as Re, d as ze, f as Be, g as Ve, h as He, m as Ue, o as We, p as Ge, t as Ke, v as qe, w as Je, x as Ye, y as Xe } from "./dist-CyinVPgs.js";
import { C as Ze, _ as Qe, a as $e, b as et, c as tt, d as nt, f as rt, g as it, h as at, i as ot, m as st, n as ct, o as lt, p as ut, r as dt, s as ft, t as pt, u as mt, v as ht, x as gt } from "./react-nprogress.esm-Dq4T7Ytq.js";
import { t as _t } from "./jsx-runtime-Bcg76ucg.js";
import { t as vt } from "./useQuery-B8Uxp7FM.js";
import { a as yt, c as bt, d as xt, f as St, g as Ct, h as wt, l as Tt, m as Et, n as Dt, o as Ot, p as kt, r as At, s as jt, t as Mt, u as Nt } from "./Collapsible-ByPObG0j.js";
import { t as Pt } from "./createLucideIcon-CE5nuOQr.js";
import { n as Ft, r as It, t as Lt } from "./useCopyToClipboard-9GjEEqo_.js";
import { M as Rt, a as zt, c as Bt, d as Vt, f as Ht, g as Ut, h as Wt, i as Gt, j as Kt, k as qt, l as Jt, n as Yt, o as Xt, s as Zt, t as Qt, u as $t } from "./DropdownMenu-DMEGJELa.js";
import { a as en, i as tn, o as nn, s as rn, t as an } from "./Alert-DicPSkXo.js";
import { a as on, i as sn, t as cn } from "./Button-dzS4XgUY.js";
import { t as k } from "./cn-yMl495m5.js";
import { C as ln, S as un, a as dn, c as fn, d as pn, f as mn, g as hn, h as gn, i as _n, l as vn, m as yn, n as bn, o as xn, p as Sn, r as Cn, s as wn, u as Tn, v as En, w as Dn } from "./ZudokuContext-BxG8utmj.js";
//#region ../../node_modules/.pnpm/unhead@3.1.3_vite@8.0.16_@types+node@22.19.1_esbuild@0.28.1_jiti@2.7.0_terser@5.46.1_tsx@4.22.4_yaml@2.9.0_/node_modules/unhead/dist/shared/unhead.DzSj5qjO.mjs
var A = /* @__PURE__ */ e(a(), 1), On = /^(?:viewport|description|keywords|robots)$/;
function kn(e) {
	return re.has(e.split(":")[1]);
}
function An(e) {
	let { props: t, tag: n, key: r } = e;
	if (ie.has(n)) return n;
	if (n === "link" && t.rel === "canonical") return "canonical";
	if (n === "link" && t.rel === "alternate") {
		if (t.hreflang) return `alternate:${t.hreflang}`;
		if (t.type) return `alternate:${t.type}:${t.href || ""}`;
	}
	if (t.charset) return "charset";
	if (n === "meta") for (let e of [
		"name",
		"property",
		"http-equiv"
	]) {
		let n = t[e];
		if (n !== void 0) return `meta:${n}${(typeof n != "string" || !n.includes(":")) && !On.test(n) && r ? `:key:${r}` : ""}`;
	}
	return r ? `${n}:key:${r}` : t.id ? `${n}:id:${t.id}` : n === "link" && t.rel === "alternate" ? `alternate:${t.href || ""}` : u.has(n) && (e.textContent || e.innerHTML) ? `${n}:content:${e.textContent || e.innerHTML}` : void 0;
}
function jn(e) {
	return e._h || e._d || e.textContent || e.innerHTML || `${e.tag}:${Object.entries(e.props).map(([e, t]) => `${e}:${String(t)}`).join()}`;
}
function Mn(e, t, n) {
	if (n === "_resolver") return e;
	typeof e == "function" && (!n || n !== "titleTemplate" && !n.startsWith("on")) && (e = e());
	let r = t ? t(n, e) : e;
	if (Array.isArray(r)) return r.map((e) => Mn(e, t));
	if (r?.constructor === Object) {
		let e = {};
		for (let n in r) n === "__proto__" || n === "constructor" || n === "prototype" || (e[n] = Mn(r[n], t, n));
		return e;
	}
	return r;
}
function Nn(e, t) {
	let n = e === "style", r = n ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set(), i = (e) => {
		if (e) if (n) {
			let t = e.indexOf(":");
			t > 0 && r.set(e.slice(0, t).trim(), e.slice(t + 1).trim());
		} else e.split(" ").forEach((e) => e && r.add(e));
	};
	if (typeof t == "string") (n ? t.split(";") : [t]).forEach(i);
	else if (Array.isArray(t)) t.forEach(i);
	else if (t && typeof t == "object") for (let e in t) {
		let a = t[e];
		a && a !== "false" && (n ? r.set(e.trim(), String(a)) : i(e));
	}
	return r;
}
function Pn(e, t) {
	if (e.props = e.props || {}, !t) return e;
	if (e.tag === "templateParams") return e.props = t, e;
	let n = c.has(e.tag) || e.tag === "htmlAttrs" || e.tag === "bodyAttrs";
	for (let r in t) {
		if (r === "__proto__" || r === "constructor" || r === "prototype") continue;
		let i = t[r];
		if (i === null) e.props[r] = null;
		else if (r === "class" || r === "style") e.props[r] = Nn(r, i);
		else if (ae.has(r)) if ((r === "textContent" || r === "innerHTML") && typeof i == "object") {
			let n = t.type || "application/json";
			(n.endsWith("json") || n === "speculationrules" || n === "importmap") && (e.props.type = t.type = n, e[r] = JSON.stringify(i));
		} else e[r] = i;
		else if (i !== void 0) {
			let t = r.startsWith("data-"), a = n && !t ? r.toLowerCase() : r, o = String(i), s = e.tag === "meta" && a === "content";
			e.props[a] = o === "true" || o === "" ? t || s ? o : !0 : !i && t && o === "false" ? "false" : i;
		}
	}
	return e;
}
function Fn(e, t) {
	let n = Pn({
		tag: e,
		props: {}
	}, typeof t == "object" && typeof t != "function" ? t : { [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t });
	return n.key && m.has(n.tag) && (n.props["data-hid"] = n._h = n.key), n.tag === "script" && typeof n.innerHTML == "object" && (n.innerHTML = JSON.stringify(n.innerHTML), n.props.type = n.props.type || "application/json"), Array.isArray(n.props.content) ? n.props.content.map((e) => ({
		...n,
		props: {
			...n.props,
			content: e
		}
	})) : n;
}
function In(e, t) {
	if (!e) return [];
	typeof e == "function" && (e = e());
	let n = (e, n) => {
		for (let r of t) n = r(e, n);
		return n;
	};
	e = Mn(n(void 0, e), n);
	let r = [];
	for (let t in e) {
		let n = e[t];
		if (n !== void 0) for (let e of Array.isArray(n) ? n : [n]) r.push(Fn(t, e));
	}
	return r.flat();
}
var Ln = /</g, Rn = /<\/script/g, zn = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w;
function Bn(e) {
	let t = !1;
	for (let n of e.tags.sort(zn)) {
		let r = n._d || jn(n), i = e.tagMap.get(r);
		if (!i) {
			e.tagMap.set(r, n);
			continue;
		}
		if ((n.tagDuplicateStrategy || (s.has(n.tag) ? "merge" : null) || (n.key && n.key === i.key ? "merge" : null)) === "merge") {
			let t = { ...i.props };
			for (let e in n.props) t[e] = e === "style" ? new Map([...i.props.style || /* @__PURE__ */ new Map(), ...n.props[e]]) : e === "class" ? /* @__PURE__ */ new Set([...i.props.class || [], ...n.props[e]]) : n.props[e];
			e.tagMap.set(r, {
				...n,
				props: t
			});
		} else n._p >> 10 == i._p >> 10 && n.tag === "meta" && kn(r) ? (e.tagMap.set(r, Object.assign([...Array.isArray(i) ? i : [i], n], n)), t = !0) : (n._w === i._w ? n._p > i._p : n._w < i._w) && e.tagMap.set(r, n);
	}
	return t;
}
function Vn(e, t) {
	let n = e.tagMap.get("title"), r = e.tagMap.get("titleTemplate");
	if (t._title = n?.textContent, !r) return;
	let i = r.textContent;
	if (t._titleTemplate = i, !i) return;
	let a = typeof i == "function" ? i(n?.textContent) : i;
	typeof a == "string" && !t.plugins.has("template-params") && (a = a.replace("%s", n?.textContent || "")), n ? a === null ? e.tagMap.delete("title") : e.tagMap.set("title", {
		...n,
		textContent: a
	}) : e.tagMap.set("titleTemplate", {
		...r,
		tag: "title",
		textContent: a
	});
}
function Hn(e) {
	return e.filter((e) => {
		let { innerHTML: t, tag: n, props: r } = e;
		if (!o.has(n) || !Object.keys(r).length && !t && !e.textContent || n === "meta" && !r.content && !r["http-equiv"] && !r.charset) return !1;
		if (n === "script" && (t || e.textContent)) {
			let n = String(r.type), i = n.endsWith("json") || n === "importmap" || n === "speculationrules", a = (e) => i ? (typeof e == "string" ? e : JSON.stringify(e)).replace(Ln, "\\u003C") : typeof e == "string" ? e.replace(Rn, "<\\/script") : e;
			t && (e.innerHTML = a(t)), e.textContent &&= a(e.textContent), e._d = An(e);
		}
		return !0;
	});
}
function Un(e, t) {
	let n = t?.tagWeight ?? e.resolvedOptions._tagWeight ?? (() => 100), r = {
		tagMap: /* @__PURE__ */ new Map(),
		tags: []
	}, i = [...e.entries.values()];
	for (let e of i) e._pending !== void 0 && (e.input = e._pending, delete e._pending, delete e._tags);
	v(e, "entries:resolve", {
		entries: i,
		...r
	});
	for (let t of i) if (!t._tags) {
		let r = {
			tags: In(t.input, e.resolvedOptions.propResolvers || []).map((e) => Object.assign(e, t.options)),
			entry: t
		};
		v(e, "entries:normalize", r), t._tags = r.tags.map((e, r) => (e._w = n(e), e._p = (t._i << 10) + r, e._d = An(e), e._d || (e._h = jn(e)), e));
	}
	r.tags = i.flatMap((e) => (e._tags || []).map((e) => ({
		...e,
		props: { ...e.props }
	})));
	let a = Bn(r);
	return Vn(r, e), r.tags = [...r.tagMap.values()], a && (r.tags = r.tags.flat().sort(zn)), v(e, "tags:beforeResolve", r), v(e, "tags:resolve", r), v(e, "tags:afterResolve", r), Hn(r.tags);
}
//#endregion
//#region ../../node_modules/.pnpm/unhead@3.1.3_vite@8.0.16_@types+node@22.19.1_esbuild@0.28.1_jiti@2.7.0_terser@5.46.1_tsx@4.22.4_yaml@2.9.0_/node_modules/unhead/dist/shared/unhead.BjuLn3hu.mjs
var Wn = /\s+/;
// @__NO_SIDE_EFFECTS__
function Gn(e = {}) {
	return (t) => Kn(t, e);
}
function Kn(e, t = {}) {
	let n = t.document || e.resolvedOptions.document;
	if (!n || !e.dirty && ![...e.entries.values()].some((e) => e._pending !== void 0)) return !1;
	let r = {
		shouldRender: !0,
		tags: []
	};
	if (v(e, "dom:beforeRender", r), !r.shouldRender || e._du) return !1;
	e._du = !0;
	let i = e._dom;
	if (i) i._p = { ...i._s };
	else {
		i = {
			_t: n.title,
			_e: /* @__PURE__ */ new Map([["htmlAttrs", n.documentElement], ["bodyAttrs", n.body]]),
			_p: {},
			_s: {}
		};
		for (let e of [...n.body.children, ...n.head.children]) {
			let t = e.tagName.toLowerCase();
			if (!c.has(t)) continue;
			let n = { innerHTML: e.innerHTML };
			for (let t of e.getAttributeNames()) n[t] = e.getAttribute(t);
			let r = Pn({
				tag: t,
				props: {}
			}, n);
			r.key = e.getAttribute("data-hid") || void 0;
			let a = r._d = An(r) || jn(r), o = 1;
			for (; i._e.has(a);) a = `${r._d}:${o++}`;
			i._e.set(a, e);
		}
		for (let t of e.entries.values()) if (t._o !== void 0) {
			let e = t._o;
			for (let t of ["bodyAttrs", "htmlAttrs"]) {
				let n = e[t]?.class;
				if (typeof n == "string") {
					let e = i._e.get(t);
					for (let r of n.split(Wn)) r && (i._p[`${t}:attr:class:${r}`] = () => e.classList.remove(r));
				}
			}
			delete t._o;
		}
	}
	i._s = {};
	function a(e, t, n) {
		let r = `${e}:${t}`;
		i._s[r] = n, delete i._p[r];
	}
	function o({ id: e, $el: t, tag: r }) {
		let o = r.tag.endsWith("Attrs");
		i._e.set(e, t), o || (r.textContent && r.textContent !== t.textContent && (t.textContent = r.textContent), r.innerHTML && r.innerHTML !== t.innerHTML && (t.innerHTML = r.innerHTML), a(e, "el", () => {
			t?.remove(), i._e.delete(e);
		}));
		for (let i in r.props) {
			let s = r.props[i];
			if (i[0] === "o" && i[1] === "n" && typeof s == "function") {
				let e = i.slice(2);
				t?.dataset?.[`${i}fired`] && s.call(t, new Event(e)), t.getAttribute(`data-${i}`) !== "" && ((r.tag === "bodyAttrs" ? n.defaultView : t).addEventListener(e, s.bind(t)), t.setAttribute(`data-${i}`, ""));
				continue;
			}
			let c = `attr:${i}`;
			if (i === "class" && s) for (let n of s) o && a(e, `${c}:${n}`, () => t.classList.remove(n)), t.classList.contains(n) || t.classList.add(n);
			else if (i === "style" && s) for (let [n, r] of s) a(e, `${c}:${n}`, () => t.style.removeProperty(n)), t.style.setProperty(n, r);
			else s !== !1 && s !== null && (t.getAttribute(i) !== s && t.setAttribute(i, s === !0 ? "" : String(s)), o && a(e, c, () => t.removeAttribute(i)));
		}
	}
	let s = [], l = {}, u = Un(e, t.tagWeight ? { tagWeight: t.tagWeight } : void 0), d = [], f = /* @__PURE__ */ new Map();
	for (let e of u) {
		let t = f.get(e._d) || 0, r = (t ? `${e._d}:${t}` : e._d) || e._h, l = {
			tag: e,
			id: r,
			shouldRender: !0
		};
		if (e._d && kn(e._d) && f.set(e._d, t + 1), d.push(l), e.tag === "title") {
			n.title = e.textContent, a("title", "", () => n.title = i._t);
			continue;
		}
		l.$el = i._e.get(r), l.$el ? o(l) : c.has(e.tag) && s.push(l);
	}
	for (let e of s) e.$el = n.createElement(e.tag.tag), o(e), (l[e.tag.tagPosition || "head"] ??= n.createDocumentFragment()).appendChild(e.$el);
	l.head && n.head.appendChild(l.head), l.bodyOpen && n.body.insertBefore(l.bodyOpen, n.body.firstChild), l.bodyClose && n.body.appendChild(l.bodyClose);
	for (let e in i._p) i._p[e]();
	return e._dom = i, v(e, "dom:rendered", { renders: d }), e._du = !1, e.dirty = !1, !0;
}
//#endregion
//#region ../../node_modules/.pnpm/unhead@3.1.3_vite@8.0.16_@types+node@22.19.1_esbuild@0.28.1_jiti@2.7.0_terser@5.46.1_tsx@4.22.4_yaml@2.9.0_/node_modules/unhead/dist/shared/unhead.CJY-UeEt.mjs
var qn = {
	critical: -8,
	high: -1,
	low: 2
}, Jn = (e) => typeof e.tagPriority == "number" ? e.tagPriority : 100 + (qn[e.tagPriority] || 0);
function Yn(e = {}) {
	e.document = e.document || (typeof window < "u" ? document : void 0);
	let t = e.render || /* @__PURE__ */ Gn({ document: e.document }), n = e.document?.head.querySelector("script[id=\"unhead:payload\"]")?.innerHTML || !1, r = p(t, {
		document: e.document,
		propResolvers: e.propResolvers,
		_tagWeight: Jn,
		init: []
	}), i = h(e.hooks), a = !1, o = {
		...r,
		ssr: !1,
		hooks: i,
		use: (e) => x(o, e),
		get dirty() {
			return a;
		},
		set dirty(e) {
			a = e;
		},
		render: () => t(o),
		invalidate() {
			for (let e of r.entries.values()) delete e._tags;
			a = !0, i.callHook("entries:updated", o);
		},
		push(e, t) {
			let n = t?.onRendered, s = n ? i.hook("dom:rendered", n) : void 0, c = r.push(e, t);
			return r.entries.get(c._i)._o = e, a = !0, i.callHook("entries:updated", o), {
				_i: c._i,
				patch(e) {
					c.patch(e), a = !0, i.callHook("entries:updated", o);
				},
				dispose() {
					s?.(), r.entries.has(c._i) && (c.dispose(), o.invalidate());
				}
			};
		}
	};
	return i.hook("entries:updated", () => {
		t(o);
	}), e.plugins?.forEach((e) => x(o, e)), n && o.push(JSON.parse(n)), e.init?.forEach((e) => e && o.push(e)), o;
}
//#endregion
//#region ../../node_modules/.pnpm/unhead@3.1.3_vite@8.0.16_@types+node@22.19.1_esbuild@0.28.1_jiti@2.7.0_terser@5.46.1_tsx@4.22.4_yaml@2.9.0_/node_modules/unhead/dist/client.mjs
function Xn(e, t) {
	let n = 0;
	return () => {
		let r = ++n;
		t(() => {
			n === r && e();
		});
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@unhead+react@3.1.3_bufferutil@4.1.0_esbuild@0.28.1_lightningcss@1.32.0_oxc-parser@0.13_c858ae379b2564ac58976dc22a22e510/node_modules/@unhead/react/dist/client.mjs
function Zn(e = {}) {
	let t = /* @__PURE__ */ Gn(), n;
	return n = Yn({
		render: Xn(() => t(n), (e) => setTimeout(e, 0)),
		...e
	}), n;
}
function Qn({ children: e, head: t }) {
	return (0, A.createElement)(f.Provider, { value: t || Zn() }, e);
}
//#endregion
//#region ../../node_modules/.pnpm/scheduler@0.27.0/node_modules/scheduler/cjs/scheduler.production.js
var $n = /* @__PURE__ */ i(((e) => {
	function t(e, t) {
		var n = e.length;
		e.push(t);
		a: for (; 0 < n;) {
			var r = n - 1 >>> 1, a = e[r];
			if (0 < i(a, t)) e[r] = t, e[n] = a, n = r;
			else break a;
		}
	}
	function n(e) {
		return e.length === 0 ? null : e[0];
	}
	function r(e) {
		if (e.length === 0) return null;
		var t = e[0], n = e.pop();
		if (n !== t) {
			e[0] = n;
			a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
				var s = 2 * (r + 1) - 1, c = e[s], l = s + 1, u = e[l];
				if (0 > i(c, n)) l < a && 0 > i(u, c) ? (e[r] = u, e[l] = n, r = l) : (e[r] = c, e[s] = n, r = s);
				else if (l < a && 0 > i(u, n)) e[r] = u, e[l] = n, r = l;
				else break a;
			}
		}
		return t;
	}
	function i(e, t) {
		var n = e.sortIndex - t.sortIndex;
		return n === 0 ? e.id - t.id : n;
	}
	if (e.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
		var a = performance;
		e.unstable_now = function() {
			return a.now();
		};
	} else {
		var o = Date, s = o.now();
		e.unstable_now = function() {
			return o.now() - s;
		};
	}
	var c = [], l = [], u = 1, d = null, f = 3, p = !1, m = !1, h = !1, g = !1, _ = typeof setTimeout == "function" ? setTimeout : null, v = typeof clearTimeout == "function" ? clearTimeout : null, y = typeof setImmediate < "u" ? setImmediate : null;
	function b(e) {
		for (var i = n(l); i !== null;) {
			if (i.callback === null) r(l);
			else if (i.startTime <= e) r(l), i.sortIndex = i.expirationTime, t(c, i);
			else break;
			i = n(l);
		}
	}
	function x(e) {
		if (h = !1, b(e), !m) if (n(c) !== null) m = !0, S || (S = !0, ae());
		else {
			var t = n(l);
			t !== null && se(x, t.startTime - e);
		}
	}
	var S = !1, ee = -1, te = 5, ne = -1;
	function re() {
		return g ? !0 : !(e.unstable_now() - ne < te);
	}
	function ie() {
		if (g = !1, S) {
			var t = e.unstable_now();
			ne = t;
			var i = !0;
			try {
				a: {
					m = !1, h && (h = !1, v(ee), ee = -1), p = !0;
					var a = f;
					try {
						b: {
							for (b(t), d = n(c); d !== null && !(d.expirationTime > t && re());) {
								var o = d.callback;
								if (typeof o == "function") {
									d.callback = null, f = d.priorityLevel;
									var s = o(d.expirationTime <= t);
									if (t = e.unstable_now(), typeof s == "function") {
										d.callback = s, b(t), i = !0;
										break b;
									}
									d === n(c) && r(c), b(t);
								} else r(c);
								d = n(c);
							}
							if (d !== null) i = !0;
							else {
								var u = n(l);
								u !== null && se(x, u.startTime - t), i = !1;
							}
						}
						break a;
					} finally {
						d = null, f = a, p = !1;
					}
					i = void 0;
				}
			} finally {
				i ? ae() : S = !1;
			}
		}
	}
	var ae;
	if (typeof y == "function") ae = function() {
		y(ie);
	};
	else if (typeof MessageChannel < "u") {
		var C = new MessageChannel(), oe = C.port2;
		C.port1.onmessage = ie, ae = function() {
			oe.postMessage(null);
		};
	} else ae = function() {
		_(ie, 0);
	};
	function se(t, n) {
		ee = _(function() {
			t(e.unstable_now());
		}, n);
	}
	e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(e) {
		e.callback = null;
	}, e.unstable_forceFrameRate = function(e) {
		0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : te = 0 < e ? Math.floor(1e3 / e) : 5;
	}, e.unstable_getCurrentPriorityLevel = function() {
		return f;
	}, e.unstable_next = function(e) {
		switch (f) {
			case 1:
			case 2:
			case 3:
				var t = 3;
				break;
			default: t = f;
		}
		var n = f;
		f = t;
		try {
			return e();
		} finally {
			f = n;
		}
	}, e.unstable_requestPaint = function() {
		g = !0;
	}, e.unstable_runWithPriority = function(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: e = 3;
		}
		var n = f;
		f = e;
		try {
			return t();
		} finally {
			f = n;
		}
	}, e.unstable_scheduleCallback = function(r, i, a) {
		var o = e.unstable_now();
		switch (typeof a == "object" && a ? (a = a.delay, a = typeof a == "number" && 0 < a ? o + a : o) : a = o, r) {
			case 1:
				var s = -1;
				break;
			case 2:
				s = 250;
				break;
			case 5:
				s = 1073741823;
				break;
			case 4:
				s = 1e4;
				break;
			default: s = 5e3;
		}
		return s = a + s, r = {
			id: u++,
			callback: i,
			priorityLevel: r,
			startTime: a,
			expirationTime: s,
			sortIndex: -1
		}, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(ee), ee = -1) : h = !0, se(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = !0, S || (S = !0, ae()))), r;
	}, e.unstable_shouldYield = re, e.unstable_wrapCallback = function(e) {
		var t = f;
		return function() {
			var n = f;
			f = t;
			try {
				return e.apply(this, arguments);
			} finally {
				f = n;
			}
		};
	};
})), er = /* @__PURE__ */ i(((e, t) => {
	t.exports = $n();
})), tr = /* @__PURE__ */ i(((e) => {
	var t = er(), n = a(), r = me();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function o(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function s(e) {
		var t = e, n = e;
		if (e.alternate) for (; t.return;) t = t.return;
		else {
			e = t;
			do
				t = e, t.flags & 4098 && (n = t.return), e = t.return;
			while (e);
		}
		return t.tag === 3 ? n : null;
	}
	function c(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function l(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function u(e) {
		if (s(e) !== e) throw Error(i(188));
	}
	function d(e) {
		var t = e.alternate;
		if (!t) {
			if (t = s(e), t === null) throw Error(i(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var a = n.return;
			if (a === null) break;
			var o = a.alternate;
			if (o === null) {
				if (r = a.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (a.child === o.child) {
				for (o = a.child; o;) {
					if (o === n) return u(a), e;
					if (o === r) return u(a), t;
					o = o.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== r.return) n = a, r = o;
			else {
				for (var c = !1, l = a.child; l;) {
					if (l === n) {
						c = !0, n = a, r = o;
						break;
					}
					if (l === r) {
						c = !0, r = a, n = o;
						break;
					}
					l = l.sibling;
				}
				if (!c) {
					for (l = o.child; l;) {
						if (l === n) {
							c = !0, n = o, r = a;
							break;
						}
						if (l === r) {
							c = !0, r = o, n = a;
							break;
						}
						l = l.sibling;
					}
					if (!c) throw Error(i(189));
				}
			}
			if (n.alternate !== r) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function f(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = f(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	var p = Object.assign, m = Symbol.for("react.element"), h = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), x = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), re = Symbol.for("react.lazy"), ie = Symbol.for("react.activity"), ae = Symbol.for("react.memo_cache_sentinel"), C = Symbol.iterator;
	function oe(e) {
		return typeof e != "object" || !e ? null : (e = C && e[C] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var se = Symbol.for("react.client.reference");
	function ce(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === se ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case _: return "Fragment";
			case y: return "Profiler";
			case v: return "StrictMode";
			case ee: return "Suspense";
			case te: return "SuspenseList";
			case ie: return "Activity";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case g: return "Portal";
			case x: return e.displayName || "Context";
			case b: return (e._context.displayName || "Context") + ".Consumer";
			case S:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case ne: return t = e.displayName || null, t === null ? ce(e.type) || "Memo" : t;
			case re:
				t = e._payload, e = e._init;
				try {
					return ce(e(t));
				} catch {}
		}
		return null;
	}
	var le = Array.isArray, w = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, T = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, de = [], fe = -1;
	function pe(e) {
		return { current: e };
	}
	function he(e) {
		0 > fe || (e.current = de[fe], de[fe] = null, fe--);
	}
	function E(e, t) {
		fe++, de[fe] = e.current, e.current = t;
	}
	var ge = pe(null), _e = pe(null), ve = pe(null), ye = pe(null);
	function be(e, t) {
		switch (E(ve, t), E(_e, e), E(ge, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? Ud(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = Ud(t), e = Wd(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		he(ge), E(ge, e);
	}
	function D() {
		he(ge), he(_e), he(ve);
	}
	function xe(e) {
		e.memoizedState !== null && E(ye, e);
		var t = ge.current, n = Wd(t, e.type);
		t !== n && (E(_e, e), E(ge, n));
	}
	function Se(e) {
		_e.current === e && (he(ge), he(_e)), ye.current === e && (he(ye), $f._currentValue = ue);
	}
	var Ce, we;
	function Te(e) {
		if (Ce === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			Ce = t && t[1] || "", we = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + Ce + e + we;
	}
	var Ee = !1;
	function De(e, t) {
		if (!e || Ee) return "";
		Ee = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							e.call(n.prototype);
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			Ee = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Te(n) : "";
	}
	function Oe(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return Te(e.type);
			case 16: return Te("Lazy");
			case 13: return e.child !== t && t !== null ? Te("Suspense Fallback") : Te("Suspense");
			case 19: return Te("SuspenseList");
			case 0:
			case 15: return De(e.type, !1);
			case 11: return De(e.type.render, !1);
			case 1: return De(e.type, !0);
			case 31: return Te("Activity");
			default: return "";
		}
	}
	function O(e) {
		try {
			var t = "", n = null;
			do
				t += Oe(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var ke = Object.prototype.hasOwnProperty, Ae = t.unstable_scheduleCallback, je = t.unstable_cancelCallback, Me = t.unstable_shouldYield, Ne = t.unstable_requestPaint, Pe = t.unstable_now, Fe = t.unstable_getCurrentPriorityLevel, Ie = t.unstable_ImmediatePriority, Le = t.unstable_UserBlockingPriority, Re = t.unstable_NormalPriority, ze = t.unstable_LowPriority, Be = t.unstable_IdlePriority, Ve = t.log, He = t.unstable_setDisableYieldValue, Ue = null, We = null;
	function Ge(e) {
		if (typeof Ve == "function" && He(e), We && typeof We.setStrictMode == "function") try {
			We.setStrictMode(Ue, e);
		} catch {}
	}
	var Ke = Math.clz32 ? Math.clz32 : Ye, qe = Math.log, Je = Math.LN2;
	function Ye(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (qe(e) / Je | 0) | 0;
	}
	var Xe = 256, Ze = 262144, Qe = 4194304;
	function $e(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & 261888;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function et(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = $e(n))) : i = $e(o) : i = $e(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = $e(n))) : i = $e(o)) : i = $e(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function tt(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function nt(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function rt() {
		var e = Qe;
		return Qe <<= 1, !(Qe & 62914560) && (Qe = 4194304), e;
	}
	function it(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function at(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function ot(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - Ke(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && st(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function st(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - Ke(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function ct(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - Ke(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function lt(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : ut(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function ut(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function dt(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function ft() {
		var e = T.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : hp(e.type)) : e;
	}
	function pt(e, t) {
		var n = T.p;
		try {
			return T.p = e, t();
		} finally {
			T.p = n;
		}
	}
	var mt = Math.random().toString(36).slice(2), ht = "__reactFiber$" + mt, gt = "__reactProps$" + mt, _t = "__reactContainer$" + mt, vt = "__reactEvents$" + mt, yt = "__reactListeners$" + mt, bt = "__reactHandles$" + mt, xt = "__reactResources$" + mt, St = "__reactMarker$" + mt;
	function Ct(e) {
		delete e[ht], delete e[gt], delete e[vt], delete e[yt], delete e[bt];
	}
	function wt(e) {
		var t = e[ht];
		if (t) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[_t] || n[ht]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ff(e); e !== null;) {
					if (n = e[ht]) return n;
					e = ff(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Tt(e) {
		if (e = e[ht] || e[_t]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function Et(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function Dt(e) {
		var t = e[xt];
		return t ||= e[xt] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function Ot(e) {
		e[St] = !0;
	}
	var kt = /* @__PURE__ */ new Set(), At = {};
	function jt(e, t) {
		Mt(e, t), Mt(e + "Capture", t);
	}
	function Mt(e, t) {
		for (At[e] = t, e = 0; e < t.length; e++) kt.add(t[e]);
	}
	var Nt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Pt = {}, Ft = {};
	function It(e) {
		return ke.call(Ft, e) ? !0 : ke.call(Pt, e) ? !1 : Nt.test(e) ? Ft[e] = !0 : (Pt[e] = !0, !1);
	}
	function Lt(e, t, n) {
		if (It(t)) if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
					e.removeAttribute(t);
					return;
				case "boolean":
					var r = t.toLowerCase().slice(0, 5);
					if (r !== "data-" && r !== "aria-") {
						e.removeAttribute(t);
						return;
					}
			}
			e.setAttribute(t, "" + n);
		}
	}
	function Rt(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, "" + n);
		}
	}
	function zt(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, "" + r);
		}
	}
	function Bt(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function Vt(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function Ht(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function Ut(e) {
		if (!e._valueTracker) {
			var t = Vt(e) ? "checked" : "value";
			e._valueTracker = Ht(e, t, "" + e[t]);
		}
	}
	function Wt(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = Vt(e) ? e.checked ? "true" : "false" : e.value), e = r, e === n ? !1 : (t.setValue(e), !0);
	}
	function Gt(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	var Kt = /[\n"\\]/g;
	function qt(e) {
		return e.replace(Kt, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function Jt(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Bt(t)) : e.value !== "" + Bt(t) && (e.value = "" + Bt(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : Xt(e, o, Bt(n)) : Xt(e, o, Bt(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + Bt(s) : e.removeAttribute("name");
	}
	function Yt(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				Ut(e);
				return;
			}
			n = n == null ? "" : "" + Bt(n), t = t == null ? n : "" + Bt(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), Ut(e);
	}
	function Xt(e, t, n) {
		t === "number" && Gt(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
	}
	function Zt(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + Bt(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Qt(e, t, n) {
		if (t != null && (t = "" + Bt(t), t !== e.value && (e.value = t), n == null)) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n == null ? "" : "" + Bt(n);
	}
	function $t(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(i(92));
				if (le(r)) {
					if (1 < r.length) throw Error(i(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = Bt(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), Ut(e);
	}
	function en(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var tn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function nn(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || tn.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function rn(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "");
			for (var a in t) r = t[a], t.hasOwnProperty(a) && n[a] !== r && nn(e, a, r);
		} else for (var o in t) t.hasOwnProperty(o) && nn(e, o, t[o]);
	}
	function an(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var on = new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), sn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function cn(e) {
		return sn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function k() {}
	var ln = null;
	function un(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var dn = null, fn = null;
	function pn(e) {
		var t = Tt(e);
		if (t && (e = t.stateNode)) {
			var n = e[gt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (Jt(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + qt("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var a = r[gt] || null;
								if (!a) throw Error(i(90));
								Jt(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && Wt(r);
					}
					break a;
				case "textarea":
					Qt(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && Zt(e, !!n.multiple, t, !1);
			}
		}
	}
	var mn = !1;
	function hn(e, t, n) {
		if (mn) return e(t, n);
		mn = !0;
		try {
			return e(t);
		} finally {
			if (mn = !1, (dn !== null || fn !== null) && (Su(), dn && (t = dn, e = fn, fn = dn = null, pn(t), e))) for (t = 0; t < e.length; t++) pn(e[t]);
		}
	}
	function gn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[gt] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var _n = !(typeof window > "u" || window.document === void 0 || window.document.createElement === void 0), vn = !1;
	if (_n) try {
		var yn = {};
		Object.defineProperty(yn, "passive", { get: function() {
			vn = !0;
		} }), window.addEventListener("test", yn, yn), window.removeEventListener("test", yn, yn);
	} catch {
		vn = !1;
	}
	var bn = null, xn = null, Sn = null;
	function Cn() {
		if (Sn) return Sn;
		var e, t = xn, n = t.length, r, i = "value" in bn ? bn.value : bn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Sn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function wn(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Tn() {
		return !0;
	}
	function En() {
		return !1;
	}
	function Dn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Tn : En, this.isPropagationStopped = En, this;
		}
		return p(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Tn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Tn);
			},
			persist: function() {},
			isPersistent: Tn
		}), t;
	}
	var A = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, On = Dn(A), kn = p({}, A, {
		view: 0,
		detail: 0
	}), An = Dn(kn), jn, Mn, Nn, Pn = p({}, kn, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: Gn,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== Nn && (Nn && e.type === "mousemove" ? (jn = e.screenX - Nn.screenX, Mn = e.screenY - Nn.screenY) : Mn = jn = 0, Nn = e), jn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Mn;
		}
	}), Fn = Dn(Pn), In = Dn(p({}, Pn, { dataTransfer: 0 })), Ln = Dn(p({}, kn, { relatedTarget: 0 })), Rn = Dn(p({}, A, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), zn = Dn(p({}, A, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), Bn = Dn(p({}, A, { data: 0 })), Vn = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, Hn = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, Un = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function Wn(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = Un[e]) ? !!t[e] : !1;
	}
	function Gn() {
		return Wn;
	}
	var Kn = Dn(p({}, kn, {
		key: function(e) {
			if (e.key) {
				var t = Vn[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = wn(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hn[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: Gn,
		charCode: function(e) {
			return e.type === "keypress" ? wn(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? wn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), qn = Dn(p({}, Pn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), Jn = Dn(p({}, kn, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: Gn
	})), Yn = Dn(p({}, A, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), Xn = Dn(p({}, Pn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), Zn = Dn(p({}, A, {
		newState: 0,
		oldState: 0
	})), Qn = [
		9,
		13,
		27,
		32
	], $n = _n && "CompositionEvent" in window, tr = null;
	_n && "documentMode" in document && (tr = document.documentMode);
	var nr = _n && "TextEvent" in window && !tr, rr = _n && (!$n || tr && 8 < tr && 11 >= tr), ir = " ", ar = !1;
	function or(e, t) {
		switch (e) {
			case "keyup": return Qn.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function sr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var cr = !1;
	function lr(e, t) {
		switch (e) {
			case "compositionend": return sr(t);
			case "keypress": return t.which === 32 ? (ar = !0, ir) : null;
			case "textInput": return e = t.data, e === ir && ar ? null : e;
			default: return null;
		}
	}
	function ur(e, t) {
		if (cr) return e === "compositionend" || !$n && or(e, t) ? (e = Cn(), Sn = xn = bn = null, cr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return rr && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var dr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function j(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!dr[e.type] : t === "textarea";
	}
	function fr(e, t, n, r) {
		dn ? fn ? fn.push(r) : fn = [r] : dn = r, t = Od(t, "onChange"), 0 < t.length && (n = new On("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var pr = null, mr = null;
	function hr(e) {
		xd(e, 0);
	}
	function gr(e) {
		if (Wt(Et(e))) return e;
	}
	function _r(e, t) {
		if (e === "change") return t;
	}
	var vr = !1;
	if (_n) {
		var yr;
		if (_n) {
			var br = "oninput" in document;
			if (!br) {
				var xr = document.createElement("div");
				xr.setAttribute("oninput", "return;"), br = typeof xr.oninput == "function";
			}
			yr = br;
		} else yr = !1;
		vr = yr && (!document.documentMode || 9 < document.documentMode);
	}
	function Sr() {
		pr && (pr.detachEvent("onpropertychange", Cr), mr = pr = null);
	}
	function Cr(e) {
		if (e.propertyName === "value" && gr(mr)) {
			var t = [];
			fr(t, mr, e, un(e)), hn(hr, t);
		}
	}
	function wr(e, t, n) {
		e === "focusin" ? (Sr(), pr = t, mr = n, pr.attachEvent("onpropertychange", Cr)) : e === "focusout" && Sr();
	}
	function Tr(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return gr(mr);
	}
	function Er(e, t) {
		if (e === "click") return gr(t);
	}
	function Dr(e, t) {
		if (e === "input" || e === "change") return gr(t);
	}
	function Or(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var kr = typeof Object.is == "function" ? Object.is : Or;
	function Ar(e, t) {
		if (kr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!ke.call(t, i) || !kr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function jr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Mr(e, t) {
		var n = jr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = jr(n);
		}
	}
	function Nr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Nr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Pr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Gt(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Gt(e.document);
		}
		return t;
	}
	function Fr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Ir = _n && "documentMode" in document && 11 >= document.documentMode, Lr = null, Rr = null, zr = null, Br = !1;
	function Vr(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Br || Lr == null || Lr !== Gt(r) || (r = Lr, "selectionStart" in r && Fr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), zr && Ar(zr, r) || (zr = r, r = Od(Rr, "onSelect"), 0 < r.length && (t = new On("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = Lr)));
	}
	function Hr(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var Ur = {
		animationend: Hr("Animation", "AnimationEnd"),
		animationiteration: Hr("Animation", "AnimationIteration"),
		animationstart: Hr("Animation", "AnimationStart"),
		transitionrun: Hr("Transition", "TransitionRun"),
		transitionstart: Hr("Transition", "TransitionStart"),
		transitioncancel: Hr("Transition", "TransitionCancel"),
		transitionend: Hr("Transition", "TransitionEnd")
	}, Wr = {}, Gr = {};
	_n && (Gr = document.createElement("div").style, "AnimationEvent" in window || (delete Ur.animationend.animation, delete Ur.animationiteration.animation, delete Ur.animationstart.animation), "TransitionEvent" in window || delete Ur.transitionend.transition);
	function Kr(e) {
		if (Wr[e]) return Wr[e];
		if (!Ur[e]) return e;
		var t = Ur[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in Gr) return Wr[e] = t[n];
		return e;
	}
	var qr = Kr("animationend"), Jr = Kr("animationiteration"), Yr = Kr("animationstart"), Xr = Kr("transitionrun"), Zr = Kr("transitionstart"), Qr = Kr("transitioncancel"), $r = Kr("transitionend"), ei = /* @__PURE__ */ new Map(), ti = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	ti.push("scrollEnd");
	function ni(e, t) {
		ei.set(e, t), jt(t, [e]);
	}
	var ri = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, ii = [], ai = 0, oi = 0;
	function si() {
		for (var e = ai, t = oi = ai = 0; t < e;) {
			var n = ii[t];
			ii[t++] = null;
			var r = ii[t];
			ii[t++] = null;
			var i = ii[t];
			ii[t++] = null;
			var a = ii[t];
			if (ii[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && di(n, i, a);
		}
	}
	function ci(e, t, n, r) {
		ii[ai++] = e, ii[ai++] = t, ii[ai++] = n, ii[ai++] = r, oi |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function li(e, t, n, r) {
		return ci(e, t, n, r), fi(e);
	}
	function ui(e, t) {
		return ci(e, null, null, t), fi(e);
	}
	function di(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - Ke(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function fi(e) {
		if (50 < pu) throw pu = 0, mu = null, Error(i(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var pi = {};
	function mi(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function hi(e, t, n, r) {
		return new mi(e, t, n, r);
	}
	function gi(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function _i(e, t) {
		var n = e.alternate;
		return n === null ? (n = hi(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function vi(e, t) {
		e.flags &= 65011714;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function yi(e, t, n, r, a, o) {
		var s = 0;
		if (r = e, typeof e == "function") gi(e) && (s = 1);
		else if (typeof e == "string") s = Wf(e, n, ge.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (e) {
			case ie: return e = hi(31, n, t, a), e.elementType = ie, e.lanes = o, e;
			case _: return bi(n.children, a, o, t);
			case v:
				s = 8, a |= 24;
				break;
			case y: return e = hi(12, n, t, a | 2), e.elementType = y, e.lanes = o, e;
			case ee: return e = hi(13, n, t, a), e.elementType = ee, e.lanes = o, e;
			case te: return e = hi(19, n, t, a), e.elementType = te, e.lanes = o, e;
			default:
				if (typeof e == "object" && e) switch (e.$$typeof) {
					case x:
						s = 10;
						break a;
					case b:
						s = 9;
						break a;
					case S:
						s = 11;
						break a;
					case ne:
						s = 14;
						break a;
					case re:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(i(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = hi(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
	}
	function bi(e, t, n, r) {
		return e = hi(7, e, r, t), e.lanes = n, e;
	}
	function xi(e, t, n) {
		return e = hi(6, e, null, t), e.lanes = n, e;
	}
	function Si(e) {
		var t = hi(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Ci(e, t, n) {
		return t = hi(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var wi = /* @__PURE__ */ new WeakMap();
	function Ti(e, t) {
		if (typeof e == "object" && e) {
			var n = wi.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: O(t)
			}, wi.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: O(t)
		};
	}
	var Ei = [], Di = 0, Oi = null, ki = 0, Ai = [], ji = 0, Mi = null, Ni = 1, Pi = "";
	function Fi(e, t) {
		Ei[Di++] = ki, Ei[Di++] = Oi, Oi = e, ki = t;
	}
	function Ii(e, t, n) {
		Ai[ji++] = Ni, Ai[ji++] = Pi, Ai[ji++] = Mi, Mi = e;
		var r = Ni;
		e = Pi;
		var i = 32 - Ke(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - Ke(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, Ni = 1 << 32 - Ke(t) + i | n << i | r, Pi = a + e;
		} else Ni = 1 << a | n << i | r, Pi = e;
	}
	function Li(e) {
		e.return !== null && (Fi(e, 1), Ii(e, 1, 0));
	}
	function Ri(e) {
		for (; e === Oi;) Oi = Ei[--Di], Ei[Di] = null, ki = Ei[--Di], Ei[Di] = null;
		for (; e === Mi;) Mi = Ai[--ji], Ai[ji] = null, Pi = Ai[--ji], Ai[ji] = null, Ni = Ai[--ji], Ai[ji] = null;
	}
	function zi(e, t) {
		Ai[ji++] = Ni, Ai[ji++] = Pi, Ai[ji++] = Mi, Ni = t.id, Pi = t.overflow, Mi = e;
	}
	var Bi = null, M = null, N = !1, Vi = null, Hi = !1, Ui = Error(i(519));
	function Wi(e) {
		throw Xi(Ti(Error(i(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), Ui;
	}
	function Gi(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[ht] = e, t[gt] = r, n) {
			case "dialog":
				X("cancel", t), X("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				X("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < yd.length; n++) X(yd[n], t);
				break;
			case "source":
				X("error", t);
				break;
			case "img":
			case "image":
			case "link":
				X("error", t), X("load", t);
				break;
			case "details":
				X("toggle", t);
				break;
			case "input":
				X("invalid", t), Yt(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				X("invalid", t);
				break;
			case "textarea": X("invalid", t), $t(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || Pd(t.textContent, n) ? (r.popover != null && (X("beforetoggle", t), X("toggle", t)), r.onScroll != null && X("scroll", t), r.onScrollEnd != null && X("scrollend", t), r.onClick != null && (t.onclick = k), t = !0) : t = !1, t || Wi(e, !0);
	}
	function Ki(e) {
		for (Bi = e.return; Bi;) switch (Bi.tag) {
			case 5:
			case 31:
			case 13:
				Hi = !1;
				return;
			case 27:
			case 3:
				Hi = !0;
				return;
			default: Bi = Bi.return;
		}
	}
	function qi(e) {
		if (e !== Bi) return !1;
		if (!N) return Ki(e), N = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Gd(e.type, e.memoizedProps)), n = !n), n && M && Wi(e), Ki(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			M = df(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
			M = df(e);
		} else t === 27 ? (t = M, Qd(e.type) ? (e = uf, uf = null, M = e) : M = t) : M = Bi ? lf(e.stateNode.nextSibling) : null;
		return !0;
	}
	function Ji() {
		M = Bi = null, N = !1;
	}
	function Yi() {
		var e = Vi;
		return e !== null && ($l === null ? $l = e : $l.push.apply($l, e), Vi = null), e;
	}
	function Xi(e) {
		Vi === null ? Vi = [e] : Vi.push(e);
	}
	var Zi = pe(null), Qi = null, $i = null;
	function ea(e, t, n) {
		E(Zi, t._currentValue), t._currentValue = n;
	}
	function ta(e) {
		e._currentValue = Zi.current, he(Zi);
	}
	function na(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function ra(e, t, n, r) {
		var a = e.child;
		for (a !== null && (a.return = e); a !== null;) {
			var o = a.dependencies;
			if (o !== null) {
				var s = a.child;
				o = o.firstContext;
				a: for (; o !== null;) {
					var c = o;
					o = a;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), na(o.return, n, e), r || (s = null);
						break a;
					}
					o = c.next;
				}
			} else if (a.tag === 18) {
				if (s = a.return, s === null) throw Error(i(341));
				s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), na(s, n, e), s = null;
			} else s = a.child;
			if (s !== null) s.return = a;
			else for (s = a; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (a = s.sibling, a !== null) {
					a.return = s.return, s = a;
					break;
				}
				s = s.return;
			}
			a = s;
		}
	}
	function ia(e, t, n, r) {
		e = null;
		for (var a = t, o = !1; a !== null;) {
			if (!o) {
				if (a.flags & 524288) o = !0;
				else if (a.flags & 262144) break;
			}
			if (a.tag === 10) {
				var s = a.alternate;
				if (s === null) throw Error(i(387));
				if (s = s.memoizedProps, s !== null) {
					var c = a.type;
					kr(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (a === ye.current) {
				if (s = a.alternate, s === null) throw Error(i(387));
				s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [$f] : e.push($f));
			}
			a = a.return;
		}
		e !== null && ra(t, e, n, r), t.flags |= 262144;
	}
	function aa(e) {
		for (e = e.firstContext; e !== null;) {
			if (!kr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function oa(e) {
		Qi = e, $i = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function sa(e) {
		return la(Qi, e);
	}
	function ca(e, t) {
		return Qi === null && oa(e), la(e, t);
	}
	function la(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, $i === null) {
			if (e === null) throw Error(i(308));
			$i = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else $i = $i.next = t;
		return n;
	}
	var ua = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, da = t.unstable_scheduleCallback, fa = t.unstable_NormalPriority, P = {
		$$typeof: x,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function pa() {
		return {
			controller: new ua(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function ma(e) {
		e.refCount--, e.refCount === 0 && da(fa, function() {
			e.controller.abort();
		});
	}
	var ha = null, ga = 0, _a = 0, va = null;
	function ya(e, t) {
		if (ha === null) {
			var n = ha = [];
			ga = 0, _a = pd(), va = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return ga++, t.then(ba, ba), t;
	}
	function ba() {
		if (--ga === 0 && ha !== null) {
			va !== null && (va.status = "fulfilled");
			var e = ha;
			ha = null, _a = 0, va = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function xa(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var Sa = w.S;
	w.S = function(e, t) {
		nu = Pe(), typeof t == "object" && t && typeof t.then == "function" && ya(e, t), Sa !== null && Sa(e, t);
	};
	var Ca = pe(null);
	function wa() {
		var e = Ca.current;
		return e === null ? G.pooledCache : e;
	}
	function Ta(e, t) {
		t === null ? E(Ca, Ca.current) : E(Ca, t.pool);
	}
	function Ea() {
		var e = wa();
		return e === null ? null : {
			parent: P._currentValue,
			pool: e
		};
	}
	var Da = Error(i(460)), Oa = Error(i(474)), ka = Error(i(542)), Aa = { then: function() {} };
	function ja(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function Ma(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(k, k), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, Ia(e), e;
			default:
				if (typeof t.status == "string") t.then(k, k);
				else {
					if (e = G, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, Ia(e), e;
				}
				throw Pa = t, Da;
		}
	}
	function Na(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (Pa = e, Da) : e;
		}
	}
	var Pa = null;
	function Fa() {
		if (Pa === null) throw Error(i(459));
		var e = Pa;
		return Pa = null, e;
	}
	function Ia(e) {
		if (e === Da || e === ka) throw Error(i(483));
	}
	var La = null, Ra = 0;
	function za(e) {
		var t = Ra;
		return Ra += 1, La === null && (La = []), Ma(La, e, t);
	}
	function Ba(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function Va(e, t) {
		throw t.$$typeof === m ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function Ha(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function a(e, t) {
			return e = _i(e, t), e.index = 0, e.sibling = null, e;
		}
		function o(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 67108866, n) : (r = r.index, r < n ? (t.flags |= 67108866, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 67108866), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = xi(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var i = n.type;
			return i === _ ? d(e, t, n.props.children, r, n.key) : t !== null && (t.elementType === i || typeof i == "object" && i && i.$$typeof === re && Na(i) === t.type) ? (t = a(t, n.props), Ba(t, n), t.return = e, t) : (t = yi(n.type, n.key, n.props, null, e.mode, r), Ba(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Ci(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, i) {
			return t === null || t.tag !== 7 ? (t = bi(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = xi("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case h: return n = yi(t.type, t.key, t.props, null, e.mode, n), Ba(n, t), n.return = e, n;
					case g: return t = Ci(t, e.mode, n), t.return = e, t;
					case re: return t = Na(t), f(e, t, n);
				}
				if (le(t) || oe(t)) return t = bi(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, za(t), n);
				if (t.$$typeof === x) return f(e, ca(e, t), n);
				Va(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case h: return n.key === i ? l(e, t, n, r) : null;
					case g: return n.key === i ? u(e, t, n, r) : null;
					case re: return n = Na(n), p(e, t, n, r);
				}
				if (le(n) || oe(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, za(n), r);
				if (n.$$typeof === x) return p(e, t, ca(e, n), r);
				Va(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case h: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case g: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case re: return r = Na(r), m(e, t, n, r, i);
				}
				if (le(r) || oe(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, za(r), i);
				if (r.$$typeof === x) return m(e, t, n, ca(t, r), i);
				Va(t, r);
			}
			return null;
		}
		function v(i, a, s, c) {
			for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), a = o(_, a, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), N && Fi(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
				return N && Fi(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && g.alternate !== null && d.delete(g.key === null ? h : g.key), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), N && Fi(i, h), l;
		}
		function y(a, s, c, l) {
			if (c == null) throw Error(i(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(a, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(a, h), s = o(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(a, h), N && Fi(a, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(a, v.value, l), v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return N && Fi(a, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, a, g, v.value, l), v !== null && (e && v.alternate !== null && h.delete(v.key === null ? g : v.key), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(a, e);
			}), N && Fi(a, g), u;
		}
		function b(e, r, o, c) {
			if (typeof o == "object" && o && o.type === _ && o.key === null && (o = o.props.children), typeof o == "object" && o) {
				switch (o.$$typeof) {
					case h:
						a: {
							for (var l = o.key; r !== null;) {
								if (r.key === l) {
									if (l = o.type, l === _) {
										if (r.tag === 7) {
											n(e, r.sibling), c = a(r, o.props.children), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === re && Na(l) === r.type) {
										n(e, r.sibling), c = a(r, o.props), Ba(c, o), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								} else t(e, r);
								r = r.sibling;
							}
							o.type === _ ? (c = bi(o.props.children, e.mode, c, o.key), c.return = e, e = c) : (c = yi(o.type, o.key, o.props, null, e.mode, c), Ba(c, o), c.return = e, e = c);
						}
						return s(e);
					case g:
						a: {
							for (l = o.key; r !== null;) {
								if (r.key === l) if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
									n(e, r.sibling), c = a(r, o.children || []), c.return = e, e = c;
									break a;
								} else {
									n(e, r);
									break;
								}
								else t(e, r);
								r = r.sibling;
							}
							c = Ci(o, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case re: return o = Na(o), b(e, r, o, c);
				}
				if (le(o)) return v(e, r, o, c);
				if (oe(o)) {
					if (l = oe(o), typeof l != "function") throw Error(i(150));
					return o = l.call(o), y(e, r, o, c);
				}
				if (typeof o.then == "function") return b(e, r, za(o), c);
				if (o.$$typeof === x) return b(e, r, ca(e, o), c);
				Va(e, o);
			}
			return typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint" ? (o = "" + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = xi(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				Ra = 0;
				var i = b(e, t, n, r);
				return La = null, i;
			} catch (t) {
				if (t === Da || t === ka) throw t;
				var a = hi(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var Ua = Ha(!0), Wa = Ha(!1), Ga = !1;
	function Ka(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function qa(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function Ja(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function Ya(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, W & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = fi(e), di(e, null, n), t;
		}
		return ci(e, r, t, n), fi(e);
	}
	function Xa(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, ct(e, n);
		}
	}
	function Za(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
			return;
		}
		e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var Qa = !1;
	function $a() {
		if (Qa) {
			var e = va;
			if (e !== null) throw e;
		}
	}
	function eo(e, t, n, r) {
		Qa = !1;
		var i = e.updateQueue;
		Ga = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, m = f !== s.lane;
				if (m ? (q & f) === f : (r & f) === f) {
					f !== 0 && f === _a && (Qa = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var h = e, g = s;
						f = t;
						var _ = n;
						switch (g.tag) {
							case 1:
								if (h = g.payload, typeof h == "function") {
									d = h.call(_, d, f);
									break a;
								}
								d = h;
								break a;
							case 3: h.flags = h.flags & -65537 | 128;
							case 0:
								if (h = g.payload, f = typeof h == "function" ? h.call(_, d, f) : h, f == null) break a;
								d = p({}, d, f);
								break a;
							case 2: Ga = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, m && (e.flags |= 8192), m = i.callbacks, m === null ? i.callbacks = [f] : m.push(f));
				} else m = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = m, c = d) : u = u.next = m, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					m = s, s = m.next, m.next = null, i.lastBaseUpdate = m, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), ql |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function to(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function no(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) to(n[e], t);
	}
	var ro = pe(null), io = pe(0);
	function ao(e, t) {
		e = Gl, E(io, e), E(ro, t), Gl = e | t.baseLanes;
	}
	function oo() {
		E(io, Gl), E(ro, ro.current);
	}
	function so() {
		Gl = io.current, he(ro), he(io);
	}
	var co = pe(null), lo = null;
	function uo(e) {
		var t = e.alternate;
		E(go, go.current & 1), E(co, e), lo === null && (t === null || ro.current !== null || t.memoizedState !== null) && (lo = e);
	}
	function fo(e) {
		E(go, go.current), E(co, e), lo === null && (lo = e);
	}
	function po(e) {
		e.tag === 22 ? (E(go, go.current), E(co, e), lo === null && (lo = e)) : mo(e);
	}
	function mo() {
		E(go, go.current), E(co, co.current);
	}
	function ho(e) {
		he(co), lo === e && (lo = null), he(go);
	}
	var go = pe(0);
	function _o(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || of(n) || sf(n))) return t;
			} else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var vo = 0, F = null, I = null, yo = null, bo = !1, xo = !1, So = !1, Co = 0, wo = 0, To = null, Eo = 0;
	function Do() {
		throw Error(i(321));
	}
	function Oo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!kr(e[n], t[n])) return !1;
		return !0;
	}
	function ko(e, t, n, r, i, a) {
		return vo = a, F = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, w.H = e === null || e.memoizedState === null ? Hs : Us, So = !1, a = n(r, i), So = !1, xo && (a = jo(t, n, r, i)), Ao(e), a;
	}
	function Ao(e) {
		w.H = Vs;
		var t = I !== null && I.next !== null;
		if (vo = 0, yo = I = F = null, bo = !1, wo = 0, To = null, t) throw Error(i(300));
		e === null || oc || (e = e.dependencies, e !== null && aa(e) && (oc = !0));
	}
	function jo(e, t, n, r) {
		F = e;
		var a = 0;
		do {
			if (xo && (To = null), wo = 0, xo = !1, 25 <= a) throw Error(i(301));
			if (a += 1, yo = I = null, e.updateQueue != null) {
				var o = e.updateQueue;
				o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
			}
			w.H = Ws, o = t(n, r);
		} while (xo);
		return o;
	}
	function Mo() {
		var e = w.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? Lo(t) : t, e = e.useState()[0], (I === null ? null : I.memoizedState) !== e && (F.flags |= 1024), t;
	}
	function No() {
		var e = Co !== 0;
		return Co = 0, e;
	}
	function L(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function Po(e) {
		if (bo) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			bo = !1;
		}
		vo = 0, yo = I = F = null, xo = !1, wo = Co = 0, To = null;
	}
	function Fo() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return yo === null ? F.memoizedState = yo = e : yo = yo.next = e, yo;
	}
	function R() {
		if (I === null) {
			var e = F.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = I.next;
		var t = yo === null ? F.memoizedState : yo.next;
		if (t !== null) yo = t, I = e;
		else {
			if (e === null) throw F.alternate === null ? Error(i(467)) : Error(i(310));
			I = e, e = {
				memoizedState: I.memoizedState,
				baseState: I.baseState,
				baseQueue: I.baseQueue,
				queue: I.queue,
				next: null
			}, yo === null ? F.memoizedState = yo = e : yo = yo.next = e;
		}
		return yo;
	}
	function Io() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function Lo(e) {
		var t = wo;
		return wo += 1, To === null && (To = []), e = Ma(To, e, t), t = F, (yo === null ? t.memoizedState : yo.next) === null && (t = t.alternate, w.H = t === null || t.memoizedState === null ? Hs : Us), e;
	}
	function Ro(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return Lo(e);
			if (e.$$typeof === x) return sa(e);
		}
		throw Error(i(438, String(e)));
	}
	function zo(e) {
		var t = null, n = F.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = F.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = Io(), F.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = ae;
		return t.index++, n;
	}
	function Bo(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function Vo(e) {
		return Ho(R(), I, e);
	}
	function Ho(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(i(311));
		r.lastRenderedReducer = n;
		var a = e.baseQueue, o = r.pending;
		if (o !== null) {
			if (a !== null) {
				var s = a.next;
				a.next = o.next, o.next = s;
			}
			t.baseQueue = a = o, r.pending = null;
		}
		if (o = e.baseState, a === null) e.memoizedState = o;
		else {
			t = a.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (vo & f) === f : (q & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === _a && (d = !0);
					else if ((vo & p) === p) {
						u = u.next, p === _a && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = o) : l = l.next = f, F.lanes |= p, ql |= p;
					f = u.action, So && n(o, f), o = u.hasEagerState ? u.eagerState : n(o, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = o) : l = l.next = p, F.lanes |= f, ql |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = o : l.next = c, !kr(o, e.memoizedState) && (oc = !0, d && (n = va, n !== null))) throw n;
			e.memoizedState = o, e.baseState = s, e.baseQueue = l, r.lastRenderedState = o;
		}
		return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function z(e) {
		var t = R(), n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, a = n.pending, o = t.memoizedState;
		if (a !== null) {
			n.pending = null;
			var s = a = a.next;
			do
				o = e(o, s.action), s = s.next;
			while (s !== a);
			kr(o, t.memoizedState) || (oc = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
		}
		return [o, r];
	}
	function Uo(e, t, n) {
		var r = F, a = R(), o = N;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var s = !kr((I || a).memoizedState, n);
		if (s && (a.memoizedState = n, oc = !0), a = a.queue, ps(Ko.bind(null, r, a, e), [e]), a.getSnapshot !== t || s || yo !== null && yo.memoizedState.tag & 1) {
			if (r.flags |= 2048, cs(9, { destroy: void 0 }, Go.bind(null, r, a, n, t), null), G === null) throw Error(i(349));
			o || vo & 127 || Wo(r, t, n);
		}
		return n;
	}
	function Wo(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = F.updateQueue, t === null ? (t = Io(), F.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function Go(e, t, n, r) {
		t.value = n, t.getSnapshot = r, qo(t) && Jo(e);
	}
	function Ko(e, t, n) {
		return n(function() {
			qo(t) && Jo(e);
		});
	}
	function qo(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !kr(e, n);
		} catch {
			return !0;
		}
	}
	function Jo(e) {
		var t = ui(e, 2);
		t !== null && _u(t, e, 2);
	}
	function Yo(e) {
		var t = Fo();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), So) {
				Ge(!0);
				try {
					n();
				} finally {
					Ge(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: Bo,
			lastRenderedState: e
		}, t;
	}
	function Xo(e, t, n, r) {
		return e.baseState = n, Ho(e, I, typeof r == "function" ? r : Bo);
	}
	function Zo(e, t, n, r, a) {
		if (Rs(e)) throw Error(i(485));
		if (e = t.action, e !== null) {
			var o = {
				payload: a,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					o.listeners.push(e);
				}
			};
			w.T === null ? o.isTransition = !1 : n(!0), r(o), n = t.pending, n === null ? (o.next = t.pending = o, Qo(t, o)) : (o.next = n.next, t.pending = n.next = o);
		}
	}
	function Qo(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = w.T, o = {};
			w.T = o;
			try {
				var s = n(i, r), c = w.S;
				c !== null && c(o, s), $o(e, t, s);
			} catch (n) {
				B(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), w.T = a;
			}
		} else try {
			a = n(i, r), $o(e, t, a);
		} catch (n) {
			B(e, t, n);
		}
	}
	function $o(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			es(e, t, n);
		}, function(n) {
			return B(e, t, n);
		}) : es(e, t, n);
	}
	function es(e, t, n) {
		t.status = "fulfilled", t.value = n, ts(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Qo(e, n)));
	}
	function B(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, ts(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function ts(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function ns(e, t) {
		return t;
	}
	function rs(e, t) {
		if (N) {
			var n = G.formState;
			if (n !== null) {
				a: {
					var r = F;
					if (N) {
						if (M) {
							b: {
								for (var i = M, a = Hi; i.nodeType !== 8;) {
									if (!a) {
										i = null;
										break b;
									}
									if (i = lf(i.nextSibling), i === null) {
										i = null;
										break b;
									}
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								M = lf(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						Wi(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = Fo(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: ns,
			lastRenderedState: t
		}, n.queue = r, n = Fs.bind(null, F, r), r.dispatch = n, r = Yo(!1), a = Ls.bind(null, F, !1, r.queue), r = Fo(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = Zo.bind(null, F, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function is(e) {
		return as(R(), I, e);
	}
	function as(e, t, n) {
		if (t = Ho(e, t, ns)[0], e = Vo(Bo)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = Lo(t);
		} catch (e) {
			throw e === Da ? ka : e;
		}
		else r = t;
		t = R();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (F.flags |= 2048, cs(9, { destroy: void 0 }, os.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function os(e, t) {
		e.action = t;
	}
	function ss(e) {
		var t = R(), n = I;
		if (n !== null) return as(t, n, e);
		R(), t = t.memoizedState, n = R();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function cs(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = F.updateQueue, t === null && (t = Io(), F.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function ls() {
		return R().memoizedState;
	}
	function us(e, t, n, r) {
		var i = Fo();
		F.flags |= e, i.memoizedState = cs(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function ds(e, t, n, r) {
		var i = R();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		I !== null && r !== null && Oo(r, I.memoizedState.deps) ? i.memoizedState = cs(t, a, n, r) : (F.flags |= e, i.memoizedState = cs(1 | t, a, n, r));
	}
	function fs(e, t) {
		us(8390656, 8, e, t);
	}
	function ps(e, t) {
		ds(2048, 8, e, t);
	}
	function ms(e) {
		F.flags |= 4;
		var t = F.updateQueue;
		if (t === null) t = Io(), F.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function hs(e) {
		var t = R().memoizedState;
		return ms({
			ref: t,
			nextImpl: e
		}), function() {
			if (W & 2) throw Error(i(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function gs(e, t) {
		return ds(4, 2, e, t);
	}
	function _s(e, t) {
		return ds(4, 4, e, t);
	}
	function vs(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function ys(e, t, n) {
		n = n == null ? null : n.concat([e]), ds(4, 4, vs.bind(null, t, e), n);
	}
	function bs() {}
	function xs(e, t) {
		var n = R();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Oo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function Ss(e, t) {
		var n = R();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Oo(t, r[1])) return r[0];
		if (r = e(), So) {
			Ge(!0);
			try {
				e();
			} finally {
				Ge(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function Cs(e, t, n) {
		return n === void 0 || vo & 1073741824 && !(q & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = gu(), F.lanes |= e, ql |= e, n);
	}
	function ws(e, t, n, r) {
		return kr(n, t) ? n : ro.current === null ? !(vo & 42) || vo & 1073741824 && !(q & 261930) ? (oc = !0, e.memoizedState = n) : (e = gu(), F.lanes |= e, ql |= e, t) : (e = Cs(e, n, r), kr(e, t) || (oc = !0), e);
	}
	function Ts(e, t, n, r, i) {
		var a = T.p;
		T.p = a !== 0 && 8 > a ? a : 8;
		var o = w.T, s = {};
		w.T = s, Ls(e, !1, t, n);
		try {
			var c = i(), l = w.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? Is(e, t, xa(c, r), hu(e)) : Is(e, t, r, hu(e));
		} catch (n) {
			Is(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, hu());
		} finally {
			T.p = a, o !== null && s.types !== null && (o.types = s.types), w.T = o;
		}
	}
	function Es() {}
	function Ds(e, t, n, r) {
		if (e.tag !== 5) throw Error(i(476));
		var a = Os(e).queue;
		Ts(e, a, t, ue, n === null ? Es : function() {
			return ks(e), n(r);
		});
	}
	function Os(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: ue,
			baseState: ue,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Bo,
				lastRenderedState: ue
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Bo,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function ks(e) {
		var t = Os(e);
		t.next === null && (t = e.alternate.memoizedState), Is(e, t.next.queue, {}, hu());
	}
	function As() {
		return sa($f);
	}
	function js() {
		return R().memoizedState;
	}
	function Ms() {
		return R().memoizedState;
	}
	function Ns(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = hu();
					e = Ja(n);
					var r = Ya(t, e, n);
					r !== null && (_u(r, t, n), Xa(r, t, n)), t = { cache: pa() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function Ps(e, t, n) {
		var r = hu();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Rs(e) ? zs(t, n) : (n = li(e, t, n, r), n !== null && (_u(n, e, r), Bs(n, t, r)));
	}
	function Fs(e, t, n) {
		Is(e, t, n, hu());
	}
	function Is(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (Rs(e)) zs(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, kr(s, o)) return ci(e, t, i, 0), G === null && si(), !1;
			} catch {}
			if (n = li(e, t, i, r), n !== null) return _u(n, e, r), Bs(n, t, r), !0;
		}
		return !1;
	}
	function Ls(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: pd(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, Rs(e)) {
			if (t) throw Error(i(479));
		} else t = li(e, n, r, 2), t !== null && _u(t, e, 2);
	}
	function Rs(e) {
		var t = e.alternate;
		return e === F || t !== null && t === F;
	}
	function zs(e, t) {
		xo = bo = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function Bs(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, ct(e, n);
		}
	}
	var Vs = {
		readContext: sa,
		use: Ro,
		useCallback: Do,
		useContext: Do,
		useEffect: Do,
		useImperativeHandle: Do,
		useLayoutEffect: Do,
		useInsertionEffect: Do,
		useMemo: Do,
		useReducer: Do,
		useRef: Do,
		useState: Do,
		useDebugValue: Do,
		useDeferredValue: Do,
		useTransition: Do,
		useSyncExternalStore: Do,
		useId: Do,
		useHostTransitionStatus: Do,
		useFormState: Do,
		useActionState: Do,
		useOptimistic: Do,
		useMemoCache: Do,
		useCacheRefresh: Do
	};
	Vs.useEffectEvent = Do;
	var Hs = {
		readContext: sa,
		use: Ro,
		useCallback: function(e, t) {
			return Fo().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: sa,
		useEffect: fs,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), us(4194308, 4, vs.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return us(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			us(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = Fo();
			t = t === void 0 ? null : t;
			var r = e();
			if (So) {
				Ge(!0);
				try {
					e();
				} finally {
					Ge(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = Fo();
			if (n !== void 0) {
				var i = n(t);
				if (So) {
					Ge(!0);
					try {
						n(t);
					} finally {
						Ge(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = Ps.bind(null, F, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = Fo();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = Yo(e);
			var t = e.queue, n = Fs.bind(null, F, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: bs,
		useDeferredValue: function(e, t) {
			return Cs(Fo(), e, t);
		},
		useTransition: function() {
			var e = Yo(!1);
			return e = Ts.bind(null, F, e.queue, !0, !1), Fo().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = F, a = Fo();
			if (N) {
				if (n === void 0) throw Error(i(407));
				n = n();
			} else {
				if (n = t(), G === null) throw Error(i(349));
				q & 127 || Wo(r, t, n);
			}
			a.memoizedState = n;
			var o = {
				value: n,
				getSnapshot: t
			};
			return a.queue = o, fs(Ko.bind(null, r, o, e), [e]), r.flags |= 2048, cs(9, { destroy: void 0 }, Go.bind(null, r, o, n, t), null), n;
		},
		useId: function() {
			var e = Fo(), t = G.identifierPrefix;
			if (N) {
				var n = Pi, r = Ni;
				n = (r & ~(1 << 32 - Ke(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Co++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = Eo++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: As,
		useFormState: rs,
		useActionState: rs,
		useOptimistic: function(e) {
			var t = Fo();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = Ls.bind(null, F, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: zo,
		useCacheRefresh: function() {
			return Fo().memoizedState = Ns.bind(null, F);
		},
		useEffectEvent: function(e) {
			var t = Fo(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (W & 2) throw Error(i(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, Us = {
		readContext: sa,
		use: Ro,
		useCallback: xs,
		useContext: sa,
		useEffect: ps,
		useImperativeHandle: ys,
		useInsertionEffect: gs,
		useLayoutEffect: _s,
		useMemo: Ss,
		useReducer: Vo,
		useRef: ls,
		useState: function() {
			return Vo(Bo);
		},
		useDebugValue: bs,
		useDeferredValue: function(e, t) {
			return ws(R(), I.memoizedState, e, t);
		},
		useTransition: function() {
			var e = Vo(Bo)[0], t = R().memoizedState;
			return [typeof e == "boolean" ? e : Lo(e), t];
		},
		useSyncExternalStore: Uo,
		useId: js,
		useHostTransitionStatus: As,
		useFormState: is,
		useActionState: is,
		useOptimistic: function(e, t) {
			return Xo(R(), I, e, t);
		},
		useMemoCache: zo,
		useCacheRefresh: Ms
	};
	Us.useEffectEvent = hs;
	var Ws = {
		readContext: sa,
		use: Ro,
		useCallback: xs,
		useContext: sa,
		useEffect: ps,
		useImperativeHandle: ys,
		useInsertionEffect: gs,
		useLayoutEffect: _s,
		useMemo: Ss,
		useReducer: z,
		useRef: ls,
		useState: function() {
			return z(Bo);
		},
		useDebugValue: bs,
		useDeferredValue: function(e, t) {
			var n = R();
			return I === null ? Cs(n, e, t) : ws(n, I.memoizedState, e, t);
		},
		useTransition: function() {
			var e = z(Bo)[0], t = R().memoizedState;
			return [typeof e == "boolean" ? e : Lo(e), t];
		},
		useSyncExternalStore: Uo,
		useId: js,
		useHostTransitionStatus: As,
		useFormState: ss,
		useActionState: ss,
		useOptimistic: function(e, t) {
			var n = R();
			return I === null ? (n.baseState = e, [e, n.queue.dispatch]) : Xo(n, I, e, t);
		},
		useMemoCache: zo,
		useCacheRefresh: Ms
	};
	Ws.useEffectEvent = hs;
	function Gs(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : p({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var Ks = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = hu(), i = Ja(r);
			i.payload = t, n != null && (i.callback = n), t = Ya(e, i, r), t !== null && (_u(t, e, r), Xa(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = hu(), i = Ja(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = Ya(e, i, r), t !== null && (_u(t, e, r), Xa(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = hu(), r = Ja(n);
			r.tag = 2, t != null && (r.callback = t), t = Ya(e, r, n), t !== null && (_u(t, e, n), Xa(t, e, n));
		}
	};
	function qs(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Ar(n, r) || !Ar(i, a) : !0;
	}
	function Js(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ks.enqueueReplaceState(t, t.state, null);
	}
	function Ys(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = p({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function Xs(e) {
		ri(e);
	}
	function Zs(e) {
		console.error(e);
	}
	function Qs(e) {
		ri(e);
	}
	function $s(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function ec(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function tc(e, t, n) {
		return n = Ja(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			$s(e, t);
		}, n;
	}
	function nc(e) {
		return e = Ja(e), e.tag = 3, e;
	}
	function rc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				ec(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			ec(t, n, r), typeof i != "function" && (au === null ? au = new Set([this]) : au.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function ic(e, t, n, r, a) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && ia(t, n, a, !0), n = co.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13: return lo === null ? ku() : n.alternate === null && Kl === 0 && (Kl = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Aa ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([r]) : t.add(r), qu(e, r, a)), !1;
					case 22: return n.flags |= 65536, r === Aa ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = new Set([r]) : n.add(r)), qu(e, r, a)), !1;
				}
				throw Error(i(435, n.tag));
			}
			return qu(e, r, a), ku(), !1;
		}
		if (N) return t = co.current, t === null ? (r !== Ui && (t = Error(i(423), { cause: r }), Xi(Ti(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Ti(r, n), a = tc(e.stateNode, r, a), Za(e, a), Kl !== 4 && (Kl = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== Ui && (e = Error(i(422), { cause: r }), Xi(Ti(e, n)))), !1;
		var o = Error(i(520), { cause: r });
		if (o = Ti(o, n), Ql === null ? Ql = [o] : Ql.push(o), Kl !== 4 && (Kl = 2), t === null) return !0;
		r = Ti(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = a & -a, n.lanes |= e, e = tc(n.stateNode, r, e), Za(n, e), !1;
				case 1: if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (au === null || !au.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = nc(a), rc(a, e, n, r), Za(n, a), !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var ac = Error(i(461)), oc = !1;
	function sc(e, t, n, r) {
		t.child = e === null ? Wa(t, null, n, r) : Ua(t, e.child, n, r);
	}
	function cc(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return oa(t), r = ko(e, t, n, o, a, i), s = No(), e !== null && !oc ? (L(e, t, i), jc(e, t, i)) : (N && s && Li(t), t.flags |= 1, sc(e, t, r, i), t.child);
	}
	function lc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !gi(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, uc(e, t, a, r, i)) : (e = yi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !Mc(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Ar : n, n(o, r) && e.ref === t.ref) return jc(e, t, i);
		}
		return t.flags |= 1, e = _i(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function uc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Ar(a, r) && e.ref === t.ref) if (oc = !1, t.pendingProps = r = a, Mc(e, i)) e.flags & 131072 && (oc = !0);
			else return t.lanes = e.lanes, jc(e, t, i);
		}
		return vc(e, t, n, r, i);
	}
	function dc(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return pc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Ta(t, a === null ? null : a.cachePool), a === null ? oo() : ao(t, a), po(t);
			else return r = t.lanes = 536870912, pc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Ta(t, null), oo(), mo(t)) : (Ta(t, a.cachePool), ao(t, a), mo(t), t.memoizedState = null);
		return sc(e, t, i, n), t.child;
	}
	function fc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function pc(e, t, n, r, i) {
		var a = wa();
		return a = a === null ? null : {
			parent: P._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Ta(t, null), oo(), po(t), e !== null && ia(e, t, r, !0), t.childLanes = i, null;
	}
	function mc(e, t) {
		return t = V({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function hc(e, t, n) {
		return Ua(t, e.child, null, n), e = mc(t, t.pendingProps), e.flags |= 2, ho(t), t.memoizedState = null, e;
	}
	function gc(e, t, n) {
		var r = t.pendingProps, a = (t.flags & 128) != 0;
		if (t.flags &= -129, e === null) {
			if (N) {
				if (r.mode === "hidden") return e = mc(t, r), t.lanes = 536870912, fc(null, e);
				if (fo(t), (e = M) ? (e = af(e, Hi), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Mi === null ? null : {
						id: Ni,
						overflow: Pi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Si(e), n.return = t, t.child = n, Bi = t, M = null)) : e = null, e === null) throw Wi(t);
				return t.lanes = 536870912, null;
			}
			return mc(t, r);
		}
		var o = e.memoizedState;
		if (o !== null) {
			var s = o.dehydrated;
			if (fo(t), a) if (t.flags & 256) t.flags &= -257, t = hc(e, t, n);
			else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
			else throw Error(i(558));
			else if (oc || ia(e, t, n, !1), a = (n & e.childLanes) !== 0, oc || a) {
				if (r = G, r !== null && (s = lt(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, ui(e, s), _u(r, e, s), ac;
				ku(), t = hc(e, t, n);
			} else e = o.treeContext, M = lf(s.nextSibling), Bi = t, N = !0, Vi = null, Hi = !1, e !== null && zi(t, e), t = mc(t, r), t.flags |= 4096;
			return t;
		}
		return e = _i(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function _c(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function vc(e, t, n, r, i) {
		return oa(t), n = ko(e, t, n, r, void 0, i), r = No(), e !== null && !oc ? (L(e, t, i), jc(e, t, i)) : (N && r && Li(t), t.flags |= 1, sc(e, t, n, i), t.child);
	}
	function yc(e, t, n, r, i, a) {
		return oa(t), t.updateQueue = null, n = jo(t, r, n, i), Ao(e), r = No(), e !== null && !oc ? (L(e, t, a), jc(e, t, a)) : (N && r && Li(t), t.flags |= 1, sc(e, t, n, a), t.child);
	}
	function bc(e, t, n, r, i) {
		if (oa(t), t.stateNode === null) {
			var a = pi, o = n.contextType;
			typeof o == "object" && o && (a = sa(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = Ks, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, Ka(t), o = n.contextType, a.context = typeof o == "object" && o ? sa(o) : pi, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Gs(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && Ks.enqueueReplaceState(a, a.state, null), eo(t, r, a, i), $a(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = Ys(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = pi, typeof u == "object" && u && (o = sa(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && Js(t, a, r, o), Ga = !1;
			var f = t.memoizedState;
			a.state = f, eo(t, r, a, i), $a(), l = t.memoizedState, s || f !== l || Ga ? (typeof d == "function" && (Gs(t, n, d, r), l = t.memoizedState), (c = Ga || qs(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, qa(e, t), o = t.memoizedProps, u = Ys(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = pi, typeof l == "object" && l && (c = sa(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && Js(t, a, r, c), Ga = !1, f = t.memoizedState, a.state = f, eo(t, r, a, i), $a();
			var p = t.memoizedState;
			o !== d || f !== p || Ga || e !== null && e.dependencies !== null && aa(e.dependencies) ? (typeof s == "function" && (Gs(t, n, s, r), p = t.memoizedState), (u = Ga || qs(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && aa(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, _c(e, t), r = (t.flags & 128) != 0, a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = Ua(t, e.child, null, i), t.child = Ua(t, null, n, i)) : sc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = jc(e, t, i), e;
	}
	function xc(e, t, n, r) {
		return Ji(), t.flags |= 256, sc(e, t, n, r), t.child;
	}
	var Sc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function Cc(e) {
		return {
			baseLanes: e,
			cachePool: Ea()
		};
	}
	function wc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= Xl), e;
	}
	function Tc(e, t, n) {
		var r = t.pendingProps, a = !1, o = (t.flags & 128) != 0, s;
		if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (go.current & 2) != 0), s && (a = !0, t.flags &= -129), s = (t.flags & 32) != 0, t.flags &= -33, e === null) {
			if (N) {
				if (a ? uo(t) : mo(t), (e = M) ? (e = af(e, Hi), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Mi === null ? null : {
						id: Ni,
						overflow: Pi
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Si(e), n.return = t, t.child = n, Bi = t, M = null)) : e = null, e === null) throw Wi(t);
				return sf(e) ? t.lanes = 32 : t.lanes = 536870912, null;
			}
			var c = r.children;
			return r = r.fallback, a ? (mo(t), a = t.mode, c = V({
				mode: "hidden",
				children: c
			}, a), r = bi(r, a, n, null), c.return = t, r.return = t, c.sibling = r, t.child = c, r = t.child, r.memoizedState = Cc(n), r.childLanes = wc(e, s, n), t.memoizedState = Sc, fc(null, r)) : (uo(t), Ec(t, c));
		}
		var l = e.memoizedState;
		if (l !== null && (c = l.dehydrated, c !== null)) {
			if (o) t.flags & 256 ? (uo(t), t.flags &= -257, t = Dc(e, t, n)) : t.memoizedState === null ? (mo(t), c = r.fallback, a = t.mode, r = V({
				mode: "visible",
				children: r.children
			}, a), c = bi(c, a, n, null), c.flags |= 2, r.return = t, c.return = t, r.sibling = c, t.child = r, Ua(t, e.child, null, n), r = t.child, r.memoizedState = Cc(n), r.childLanes = wc(e, s, n), t.memoizedState = Sc, t = fc(null, r)) : (mo(t), t.child = e.child, t.flags |= 128, t = null);
			else if (uo(t), sf(c)) {
				if (s = c.nextSibling && c.nextSibling.dataset, s) var u = s.dgst;
				s = u, r = Error(i(419)), r.stack = "", r.digest = s, Xi({
					value: r,
					source: null,
					stack: null
				}), t = Dc(e, t, n);
			} else if (oc || ia(e, t, n, !1), s = (n & e.childLanes) !== 0, oc || s) {
				if (s = G, s !== null && (r = lt(s, n), r !== 0 && r !== l.retryLane)) throw l.retryLane = r, ui(e, r), _u(s, e, r), ac;
				of(c) || ku(), t = Dc(e, t, n);
			} else of(c) ? (t.flags |= 192, t.child = e.child, t = null) : (e = l.treeContext, M = lf(c.nextSibling), Bi = t, N = !0, Vi = null, Hi = !1, e !== null && zi(t, e), t = Ec(t, r.children), t.flags |= 4096);
			return t;
		}
		return a ? (mo(t), c = r.fallback, a = t.mode, l = e.child, u = l.sibling, r = _i(l, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = l.subtreeFlags & 65011712, u === null ? (c = bi(c, a, n, null), c.flags |= 2) : c = _i(u, c), c.return = t, r.return = t, r.sibling = c, t.child = r, fc(null, r), r = t.child, c = e.child.memoizedState, c === null ? c = Cc(n) : (a = c.cachePool, a === null ? a = Ea() : (l = P._currentValue, a = a.parent === l ? a : {
			parent: l,
			pool: l
		}), c = {
			baseLanes: c.baseLanes | n,
			cachePool: a
		}), r.memoizedState = c, r.childLanes = wc(e, s, n), t.memoizedState = Sc, fc(e.child, r)) : (uo(t), n = e.child, e = n.sibling, n = _i(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function Ec(e, t) {
		return t = V({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function V(e, t) {
		return e = hi(22, e, null, t), e.lanes = 0, e;
	}
	function Dc(e, t, n) {
		return Ua(t, e.child, null, n), e = Ec(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function Oc(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), na(e.return, t, n);
	}
	function kc(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function Ac(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = go.current, s = (o & 2) != 0;
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, E(go, o), sc(e, t, r, n), r = N ? ki : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && Oc(e, n, t);
			else if (e.tag === 19) Oc(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "forwards":
				for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && _o(e) === null && (i = n), n = n.sibling;
				n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), kc(t, !1, i, n, a, r);
				break;
			case "backwards":
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && _o(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				kc(t, !0, n, null, a, r);
				break;
			case "together":
				kc(t, !1, null, null, void 0, r);
				break;
			default: t.memoizedState = null;
		}
		return t.child;
	}
	function jc(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), ql |= t.lanes, (n & t.childLanes) === 0) if (e !== null) {
			if (ia(e, t, n, !1), (n & t.childLanes) === 0) return null;
		} else return null;
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (e = t.child, n = _i(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = _i(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function Mc(e, t) {
		return (e.lanes & t) === 0 ? (e = e.dependencies, !!(e !== null && aa(e))) : !0;
	}
	function Nc(e, t, n) {
		switch (t.tag) {
			case 3:
				be(t, t.stateNode.containerInfo), ea(t, P, e.memoizedState.cache), Ji();
				break;
			case 27:
			case 5:
				xe(t);
				break;
			case 4:
				be(t, t.stateNode.containerInfo);
				break;
			case 10:
				ea(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, fo(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) return r.dehydrated === null ? (n & t.child.childLanes) === 0 ? (uo(t), e = jc(e, t, n), e === null ? null : e.sibling) : Tc(e, t, n) : (uo(t), t.flags |= 128, null);
				uo(t);
				break;
			case 19:
				var i = (e.flags & 128) != 0;
				if (r = (n & t.childLanes) !== 0, r ||= (ia(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return Ac(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), E(go, go.current), r) break;
				return null;
			case 22: return t.lanes = 0, dc(e, t, n, t.pendingProps);
			case 24: ea(t, P, e.memoizedState.cache);
		}
		return jc(e, t, n);
	}
	function Pc(e, t, n) {
		if (e !== null) if (e.memoizedProps !== t.pendingProps) oc = !0;
		else {
			if (!Mc(e, n) && !(t.flags & 128)) return oc = !1, Nc(e, t, n);
			oc = !!(e.flags & 131072);
		}
		else oc = !1, N && t.flags & 1048576 && Ii(t, ki, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = Na(t.elementType), t.type = e, typeof e == "function") gi(e) ? (r = Ys(e, r), t.tag = 1, t = bc(null, t, e, r, n)) : (t.tag = 0, t = vc(null, t, e, r, n));
					else {
						if (e != null) {
							var a = e.$$typeof;
							if (a === S) {
								t.tag = 11, t = cc(null, t, e, r, n);
								break a;
							} else if (a === ne) {
								t.tag = 14, t = lc(null, t, e, r, n);
								break a;
							}
						}
						throw t = ce(e) || e, Error(i(306, t, ""));
					}
				}
				return t;
			case 0: return vc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, a = Ys(r, t.pendingProps), bc(e, t, r, a, n);
			case 3:
				a: {
					if (be(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
					r = t.pendingProps;
					var o = t.memoizedState;
					a = o.element, qa(e, t), eo(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, ea(t, P, r), r !== o.cache && ra(t, [P], n, !0), $a(), r = s.element, o.isDehydrated) if (o = {
						element: r,
						isDehydrated: !1,
						cache: s.cache
					}, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
						t = xc(e, t, r, n);
						break a;
					} else if (r !== a) {
						a = Ti(Error(i(424)), t), Xi(a), t = xc(e, t, r, n);
						break a;
					} else {
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (M = lf(e.firstChild), Bi = t, N = !0, Vi = null, Hi = !0, n = Wa(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
					}
					else {
						if (Ji(), r === a) {
							t = jc(e, t, n);
							break a;
						}
						sc(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return _c(e, t), e === null ? (n = Af(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : N || (n = t.type, e = t.pendingProps, r = Hd(ve.current).createElement(n), r[ht] = t, r[gt] = e, Id(r, n, e), Ot(r), t.stateNode = r) : t.memoizedState = Af(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return xe(t), e === null && N && (r = t.stateNode = pf(t.type, t.pendingProps, ve.current), Bi = t, Hi = !0, a = M, Qd(t.type) ? (uf = a, M = lf(r.firstChild)) : M = a), sc(e, t, t.pendingProps.children, n), _c(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && N && ((a = r = M) && (r = nf(r, t.type, t.pendingProps, Hi), r === null ? a = !1 : (t.stateNode = r, Bi = t, M = lf(r.firstChild), Hi = !1, a = !0)), a || Wi(t)), xe(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, Gd(a, o) ? r = null : s !== null && Gd(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = ko(e, t, Mo, null, null, n), $f._currentValue = a), _c(e, t), sc(e, t, r, n), t.child;
			case 6: return e === null && N && ((e = n = M) && (n = rf(n, t.pendingProps, Hi), n === null ? e = !1 : (t.stateNode = n, Bi = t, M = null, e = !0)), e || Wi(t)), null;
			case 13: return Tc(e, t, n);
			case 4: return be(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Ua(t, null, r, n) : sc(e, t, r, n), t.child;
			case 11: return cc(e, t, t.type, t.pendingProps, n);
			case 7: return sc(e, t, t.pendingProps, n), t.child;
			case 8: return sc(e, t, t.pendingProps.children, n), t.child;
			case 12: return sc(e, t, t.pendingProps.children, n), t.child;
			case 10: return r = t.pendingProps, ea(t, t.type, r.value), sc(e, t, r.children, n), t.child;
			case 9: return a = t.type._context, r = t.pendingProps.children, oa(t), a = sa(a), r = r(a), t.flags |= 1, sc(e, t, r, n), t.child;
			case 14: return lc(e, t, t.type, t.pendingProps, n);
			case 15: return uc(e, t, t.type, t.pendingProps, n);
			case 19: return Ac(e, t, n);
			case 31: return gc(e, t, n);
			case 22: return dc(e, t, n, t.pendingProps);
			case 24: return oa(t), r = sa(P), e === null ? (a = wa(), a === null && (a = G, o = pa(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
				parent: r,
				cache: a
			}, Ka(t), ea(t, P, a)) : ((e.lanes & n) !== 0 && (qa(e, t), eo(t, null, null, n), $a()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, ea(t, P, r), r !== a.cache && ra(t, [P], n, !0)) : (a = {
				parent: r,
				cache: r
			}, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), ea(t, P, r))), sc(e, t, t.pendingProps.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function Fc(e) {
		e.flags |= 4;
	}
	function Ic(e, t, n, r, i) {
		if ((t = (e.mode & 32) != 0) && (t = !1), t) {
			if (e.flags |= 16777216, (i & 335544128) === i) if (e.stateNode.complete) e.flags |= 8192;
			else if (Eu()) e.flags |= 8192;
			else throw Pa = Aa, Oa;
		} else e.flags &= -16777217;
	}
	function Lc(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Gf(t)) if (Eu()) e.flags |= 8192;
		else throw Pa = Aa, Oa;
	}
	function Rc(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : rt(), e.lanes |= t, Zl |= t);
	}
	function zc(e, t) {
		if (!N) switch (e.tailMode) {
			case "hidden":
				t = e.tail;
				for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
				break;
			case "collapsed":
				n = e.tail;
				for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
		}
	}
	function H(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 65011712, r |= i.flags & 65011712, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function Bc(e, t, n) {
		var r = t.pendingProps;
		switch (Ri(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return H(t), null;
			case 1: return H(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), ta(P), D(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (qi(t) ? Fc(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Yi())), H(t), null;
			case 26:
				var a = t.type, o = t.memoizedState;
				return e === null ? (Fc(t), o === null ? (H(t), Ic(t, a, null, r, n)) : (H(t), Lc(t, o))) : o ? o === e.memoizedState ? (H(t), t.flags &= -16777217) : (Fc(t), H(t), Lc(t, o)) : (e = e.memoizedProps, e !== r && Fc(t), H(t), Ic(t, a, e, r, n)), null;
			case 27:
				if (Se(t), n = ve.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Fc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return H(t), null;
					}
					e = ge.current, qi(t) ? Gi(t, e) : (e = pf(a, r, n), t.stateNode = e, Fc(t));
				}
				return H(t), null;
			case 5:
				if (Se(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && Fc(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(i(166));
						return H(t), null;
					}
					if (o = ge.current, qi(t)) Gi(t, o);
					else {
						var s = Hd(ve.current);
						switch (o) {
							case 1:
								o = s.createElementNS("http://www.w3.org/2000/svg", a);
								break;
							case 2:
								o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
								break;
							default: switch (a) {
								case "svg":
									o = s.createElementNS("http://www.w3.org/2000/svg", a);
									break;
								case "math":
									o = s.createElementNS("http://www.w3.org/1998/Math/MathML", a);
									break;
								case "script":
									o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(o.firstChild);
									break;
								case "select":
									o = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? o.multiple = !0 : r.size && (o.size = r.size);
									break;
								default: o = typeof r.is == "string" ? s.createElement(a, { is: r.is }) : s.createElement(a);
							}
						}
						o[ht] = t, o[gt] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = o;
						a: switch (Id(o, a, r), a) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && Fc(t);
					}
				}
				return H(t), Ic(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && Fc(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(i(166));
					if (e = ve.current, qi(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, a = Bi, a !== null) switch (a.tag) {
							case 27:
							case 5: r = a.memoizedProps;
						}
						e[ht] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || Pd(e.nodeValue, n)), e || Wi(t, !0);
					} else e = Hd(e).createTextNode(r), e[ht] = t, t.stateNode = e;
				}
				return H(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = qi(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(i(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
							e[ht] = t;
						} else Ji(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						H(t), e = !1;
					} else n = Yi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (ho(t), t) : (ho(t), null);
					if (t.flags & 128) throw Error(i(558));
				}
				return H(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (a = qi(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!a) throw Error(i(318));
							if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
							a[ht] = t;
						} else Ji(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						H(t), a = !1;
					} else a = Yi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
					if (!a) return t.flags & 256 ? (ho(t), t) : (ho(t), null);
				}
				return ho(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Rc(t, t.updateQueue), H(t), null);
			case 4: return D(), e === null && wd(t.stateNode.containerInfo), H(t), null;
			case 10: return ta(t.type), H(t), null;
			case 19:
				if (he(go), r = t.memoizedState, r === null) return H(t), null;
				if (a = (t.flags & 128) != 0, o = r.rendering, o === null) if (a) zc(r, !1);
				else {
					if (Kl !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
						if (o = _o(e), o !== null) {
							for (t.flags |= 128, zc(r, !1), e = o.updateQueue, t.updateQueue = e, Rc(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) vi(n, e), n = n.sibling;
							return E(go, go.current & 1 | 2), N && Fi(t, r.treeForkCount), t.child;
						}
						e = e.sibling;
					}
					r.tail !== null && Pe() > ru && (t.flags |= 128, a = !0, zc(r, !1), t.lanes = 4194304);
				}
				else {
					if (!a) if (e = _o(o), e !== null) {
						if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Rc(t, e), zc(r, !0), r.tail === null && r.tailMode === "hidden" && !o.alternate && !N) return H(t), null;
					} else 2 * Pe() - r.renderingStartTime > ru && n !== 536870912 && (t.flags |= 128, a = !0, zc(r, !1), t.lanes = 4194304);
					r.isBackwards ? (o.sibling = t.child, t.child = o) : (e = r.last, e === null ? t.child = o : e.sibling = o, r.last = o);
				}
				return r.tail === null ? (H(t), null) : (e = r.tail, r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Pe(), e.sibling = null, n = go.current, E(go, a ? n & 1 | 2 : n & 1), N && Fi(t, r.treeForkCount), e);
			case 22:
			case 23: return ho(t), so(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (H(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : H(t), n = t.updateQueue, n !== null && Rc(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && he(Ca), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), ta(P), H(t), null;
			case 25: return null;
			case 30: return null;
		}
		throw Error(i(156, t.tag));
	}
	function Vc(e, t) {
		switch (Ri(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return ta(P), D(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return Se(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (ho(t), t.alternate === null) throw Error(i(340));
					Ji();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (ho(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(i(340));
					Ji();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return he(go), null;
			case 4: return D(), null;
			case 10: return ta(t.type), null;
			case 22:
			case 23: return ho(t), so(), e !== null && he(Ca), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return ta(P), null;
			case 25: return null;
			default: return null;
		}
	}
	function Hc(e, t) {
		switch (Ri(t), t.tag) {
			case 3:
				ta(P), D();
				break;
			case 26:
			case 27:
			case 5:
				Se(t);
				break;
			case 4:
				D();
				break;
			case 31:
				t.memoizedState !== null && ho(t);
				break;
			case 13:
				ho(t);
				break;
			case 19:
				he(go);
				break;
			case 10:
				ta(t.type);
				break;
			case 22:
			case 23:
				ho(t), so(), e !== null && he(Ca);
				break;
			case 24: ta(P);
		}
	}
	function Uc(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			Y(t, t.return, e);
		}
	}
	function Wc(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								Y(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			Y(t, t.return, e);
		}
	}
	function Gc(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				no(t, n);
			} catch (t) {
				Y(e, e.return, t);
			}
		}
	}
	function Kc(e, t, n) {
		n.props = Ys(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			Y(e, t, n);
		}
	}
	function qc(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			Y(e, t, n);
		}
	}
	function Jc(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) if (typeof r == "function") try {
			r();
		} catch (n) {
			Y(e, t, n);
		} finally {
			e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
		}
		else if (typeof n == "function") try {
			n(null);
		} catch (n) {
			Y(e, t, n);
		}
		else n.current = null;
	}
	function Yc(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			Y(e, e.return, t);
		}
	}
	function Xc(e, t, n) {
		try {
			var r = e.stateNode;
			Ld(r, e.type, n, t), r[gt] = t;
		} catch (t) {
			Y(e, e.return, t);
		}
	}
	function Zc(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Qd(e.type) || e.tag === 4;
	}
	function Qc(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Zc(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Qd(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function $c(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = k));
		else if (r !== 4 && (r === 27 && Qd(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null)) for ($c(e, t, n), e = e.sibling; e !== null;) $c(e, t, n), e = e.sibling;
	}
	function el(e, t, n) {
		var r = e.tag;
		if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (r !== 4 && (r === 27 && Qd(e.type) && (n = e.stateNode), e = e.child, e !== null)) for (el(e, t, n), e = e.sibling; e !== null;) el(e, t, n), e = e.sibling;
	}
	function tl(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			Id(t, r, n), t[ht] = e, t[gt] = n;
		} catch (t) {
			Y(e, e.return, t);
		}
	}
	var nl = !1, rl = !1, il = !1, al = typeof WeakSet == "function" ? WeakSet : Set, ol = null;
	function sl(e, t) {
		if (e = e.containerInfo, Bd = cp, e = Pr(e), Fr(e)) {
			if ("selectionStart" in e) var n = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				n = (n = e.ownerDocument) && n.defaultView || window;
				var r = n.getSelection && n.getSelection();
				if (r && r.rangeCount !== 0) {
					n = r.anchorNode;
					var a = r.anchorOffset, o = r.focusNode;
					r = r.focusOffset;
					try {
						n.nodeType, o.nodeType;
					} catch {
						n = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== n || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || r !== 0 && f.nodeType !== 3 || (l = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === n && ++u === a && (c = s), p === o && ++d === r && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					n = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else n = null;
			}
			n ||= {
				start: 0,
				end: 0
			};
		} else n = null;
		for (Vd = {
			focusedElem: e,
			selectionRange: n
		}, cp = !1, ol = t; ol !== null;) if (t = ol, e = t.child, t.subtreeFlags & 1028 && e !== null) e.return = t, ol = e;
		else for (; ol !== null;) {
			switch (t = ol, o = t.alternate, e = t.flags, t.tag) {
				case 0:
					if (e & 4 && (e = t.updateQueue, e = e === null ? null : e.events, e !== null)) for (n = 0; n < e.length; n++) a = e[n], a.ref.impl = a.nextImpl;
					break;
				case 11:
				case 15: break;
				case 1:
					if (e & 1024 && o !== null) {
						e = void 0, n = t, a = o.memoizedProps, o = o.memoizedState, r = n.stateNode;
						try {
							var h = Ys(n.type, a);
							e = r.getSnapshotBeforeUpdate(h, o), r.__reactInternalSnapshotBeforeUpdate = e;
						} catch (e) {
							Y(n, n.return, e);
						}
					}
					break;
				case 3:
					if (e & 1024) {
						if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9) tf(e);
						else if (n === 1) switch (e.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								tf(e);
								break;
							default: e.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				default: if (e & 1024) throw Error(i(163));
			}
			if (e = t.sibling, e !== null) {
				e.return = t.return, ol = e;
				break;
			}
			ol = t.return;
		}
	}
	function cl(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				Sl(e, n), r & 4 && Uc(5, n);
				break;
			case 1:
				if (Sl(e, n), r & 4) if (e = n.stateNode, t === null) try {
					e.componentDidMount();
				} catch (e) {
					Y(n, n.return, e);
				}
				else {
					var i = Ys(n.type, t.memoizedProps);
					t = t.memoizedState;
					try {
						e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
					} catch (e) {
						Y(n, n.return, e);
					}
				}
				r & 64 && Gc(n), r & 512 && qc(n, n.return);
				break;
			case 3:
				if (Sl(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						no(e, t);
					} catch (e) {
						Y(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && tl(n);
			case 26:
			case 5:
				Sl(e, n), t === null && r & 4 && Yc(n), r & 512 && qc(n, n.return);
				break;
			case 12:
				Sl(e, n);
				break;
			case 31:
				Sl(e, n), r & 4 && pl(e, n);
				break;
			case 13:
				Sl(e, n), r & 4 && ml(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Xu.bind(null, n), cf(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || nl, !r) {
					t = t !== null && t.memoizedState !== null || rl, i = nl;
					var a = rl;
					nl = r, (rl = t) && !a ? wl(e, n, (n.subtreeFlags & 8772) != 0) : Sl(e, n), nl = i, rl = a;
				}
				break;
			case 30: break;
			default: Sl(e, n);
		}
	}
	function ll(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, ll(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ct(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var U = null, ul = !1;
	function dl(e, t, n) {
		for (n = n.child; n !== null;) fl(e, t, n), n = n.sibling;
	}
	function fl(e, t, n) {
		if (We && typeof We.onCommitFiberUnmount == "function") try {
			We.onCommitFiberUnmount(Ue, n);
		} catch {}
		switch (n.tag) {
			case 26:
				rl || Jc(n, t), dl(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				rl || Jc(n, t);
				var r = U, i = ul;
				Qd(n.type) && (U = n.stateNode, ul = !1), dl(e, t, n), mf(n.stateNode), U = r, ul = i;
				break;
			case 5: rl || Jc(n, t);
			case 6:
				if (r = U, i = ul, U = null, dl(e, t, n), U = r, ul = i, U !== null) if (ul) try {
					(U.nodeType === 9 ? U.body : U.nodeName === "HTML" ? U.ownerDocument.body : U).removeChild(n.stateNode);
				} catch (e) {
					Y(n, t, e);
				}
				else try {
					U.removeChild(n.stateNode);
				} catch (e) {
					Y(n, t, e);
				}
				break;
			case 18:
				U !== null && (ul ? (e = U, $d(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Pp(e)) : $d(U, n.stateNode));
				break;
			case 4:
				r = U, i = ul, U = n.stateNode.containerInfo, ul = !0, dl(e, t, n), U = r, ul = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Wc(2, n, t), rl || Wc(4, n, t), dl(e, t, n);
				break;
			case 1:
				rl || (Jc(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && Kc(n, t, r)), dl(e, t, n);
				break;
			case 21:
				dl(e, t, n);
				break;
			case 22:
				rl = (r = rl) || n.memoizedState !== null, dl(e, t, n), rl = r;
				break;
			default: dl(e, t, n);
		}
	}
	function pl(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Pp(e);
			} catch (e) {
				Y(t, t.return, e);
			}
		}
	}
	function ml(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Pp(e);
		} catch (e) {
			Y(t, t.return, e);
		}
	}
	function hl(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new al()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new al()), t;
			default: throw Error(i(435, e.tag));
		}
	}
	function gl(e, t) {
		var n = hl(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = Zu.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function _l(e, t) {
		var n = t.deletions;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var a = n[r], o = e, s = t, c = s;
			a: for (; c !== null;) {
				switch (c.tag) {
					case 27:
						if (Qd(c.type)) {
							U = c.stateNode, ul = !1;
							break a;
						}
						break;
					case 5:
						U = c.stateNode, ul = !1;
						break a;
					case 3:
					case 4:
						U = c.stateNode.containerInfo, ul = !0;
						break a;
				}
				c = c.return;
			}
			if (U === null) throw Error(i(160));
			fl(o, s, a), U = null, ul = !1, o = a.alternate, o !== null && (o.return = null), a.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) yl(t, e), t = t.sibling;
	}
	var vl = null;
	function yl(e, t) {
		var n = e.alternate, r = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				_l(t, e), bl(e), r & 4 && (Wc(3, e, e.return), Uc(3, e), Wc(5, e, e.return));
				break;
			case 1:
				_l(t, e), bl(e), r & 512 && (rl || n === null || Jc(n, n.return)), r & 64 && nl && (e = e.updateQueue, e !== null && (r = e.callbacks, r !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? r : n.concat(r))));
				break;
			case 26:
				var a = vl;
				if (_l(t, e), bl(e), r & 512 && (rl || n === null || Jc(n, n.return)), r & 4) {
					var o = n === null ? null : n.memoizedState;
					if (r = e.memoizedState, n === null) if (r === null) if (e.stateNode === null) {
						a: {
							r = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
							b: switch (r) {
								case "title":
									o = a.getElementsByTagName("title")[0], (!o || o[St] || o[ht] || o.namespaceURI === "http://www.w3.org/2000/svg" || o.hasAttribute("itemprop")) && (o = a.createElement(r), a.head.insertBefore(o, a.querySelector("head > title"))), Id(o, r, n), o[ht] = e, Ot(o), r = o;
									break a;
								case "link":
									var s = Hf("link", "href", a).get(r + (n.href || ""));
									if (s) {
										for (var c = 0; c < s.length; c++) if (o = s[c], o.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && o.getAttribute("rel") === (n.rel == null ? null : n.rel) && o.getAttribute("title") === (n.title == null ? null : n.title) && o.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
											s.splice(c, 1);
											break b;
										}
									}
									o = a.createElement(r), Id(o, r, n), a.head.appendChild(o);
									break;
								case "meta":
									if (s = Hf("meta", "content", a).get(r + (n.content || ""))) {
										for (c = 0; c < s.length; c++) if (o = s[c], o.getAttribute("content") === (n.content == null ? null : "" + n.content) && o.getAttribute("name") === (n.name == null ? null : n.name) && o.getAttribute("property") === (n.property == null ? null : n.property) && o.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && o.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
											s.splice(c, 1);
											break b;
										}
									}
									o = a.createElement(r), Id(o, r, n), a.head.appendChild(o);
									break;
								default: throw Error(i(468, r));
							}
							o[ht] = e, Ot(o), r = o;
						}
						e.stateNode = r;
					} else Uf(a, e.type, e.stateNode);
					else e.stateNode = Lf(a, r, e.memoizedProps);
					else o === r ? r === null && e.stateNode !== null && Xc(e, e.memoizedProps, n.memoizedProps) : (o === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : o.count--, r === null ? Uf(a, e.type, e.stateNode) : Lf(a, r, e.memoizedProps));
				}
				break;
			case 27:
				_l(t, e), bl(e), r & 512 && (rl || n === null || Jc(n, n.return)), n !== null && r & 4 && Xc(e, e.memoizedProps, n.memoizedProps);
				break;
			case 5:
				if (_l(t, e), bl(e), r & 512 && (rl || n === null || Jc(n, n.return)), e.flags & 32) {
					a = e.stateNode;
					try {
						en(a, "");
					} catch (t) {
						Y(e, e.return, t);
					}
				}
				r & 4 && e.stateNode != null && (a = e.memoizedProps, Xc(e, a, n === null ? a : n.memoizedProps)), r & 1024 && (il = !0);
				break;
			case 6:
				if (_l(t, e), bl(e), r & 4) {
					if (e.stateNode === null) throw Error(i(162));
					r = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = r;
					} catch (t) {
						Y(e, e.return, t);
					}
				}
				break;
			case 3:
				if (Vf = null, a = vl, vl = _f(t.containerInfo), _l(t, e), vl = a, bl(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
					Pp(t.containerInfo);
				} catch (t) {
					Y(e, e.return, t);
				}
				il && (il = !1, xl(e));
				break;
			case 4:
				r = vl, vl = _f(e.stateNode.containerInfo), _l(t, e), bl(e), vl = r;
				break;
			case 12:
				_l(t, e), bl(e);
				break;
			case 31:
				_l(t, e), bl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, gl(e, r)));
				break;
			case 13:
				_l(t, e), bl(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (tu = Pe()), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, gl(e, r)));
				break;
			case 22:
				a = e.memoizedState !== null;
				var l = n !== null && n.memoizedState !== null, u = nl, d = rl;
				if (nl = u || a, rl = d || l, _l(t, e), rl = d, nl = u, bl(e), r & 8192) a: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || l || nl || rl || Cl(e)), n = null, t = e;;) {
					if (t.tag === 5 || t.tag === 26) {
						if (n === null) {
							l = n = t;
							try {
								if (o = l.stateNode, a) s = o.style, typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none";
								else {
									c = l.stateNode;
									var f = l.memoizedProps.style, p = f != null && f.hasOwnProperty("display") ? f.display : null;
									c.style.display = p == null || typeof p == "boolean" ? "" : ("" + p).trim();
								}
							} catch (e) {
								Y(l, l.return, e);
							}
						}
					} else if (t.tag === 6) {
						if (n === null) {
							l = t;
							try {
								l.stateNode.nodeValue = a ? "" : l.memoizedProps;
							} catch (e) {
								Y(l, l.return, e);
							}
						}
					} else if (t.tag === 18) {
						if (n === null) {
							l = t;
							try {
								var m = l.stateNode;
								a ? ef(m, !0) : ef(l.stateNode, !1);
							} catch (e) {
								Y(l, l.return, e);
							}
						}
					} else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
						t.child.return = t, t = t.child;
						continue;
					}
					if (t === e) break a;
					for (; t.sibling === null;) {
						if (t.return === null || t.return === e) break a;
						n === t && (n = null), t = t.return;
					}
					n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
				}
				r & 4 && (r = e.updateQueue, r !== null && (n = r.retryQueue, n !== null && (r.retryQueue = null, gl(e, n))));
				break;
			case 19:
				_l(t, e), bl(e), r & 4 && (r = e.updateQueue, r !== null && (e.updateQueue = null, gl(e, r)));
				break;
			case 30: break;
			case 21: break;
			default: _l(t, e), bl(e);
		}
	}
	function bl(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Zc(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27:
						var a = n.stateNode;
						el(e, Qc(e), a);
						break;
					case 5:
						var o = n.stateNode;
						n.flags & 32 && (en(o, ""), n.flags &= -33), el(e, Qc(e), o);
						break;
					case 3:
					case 4:
						var s = n.stateNode.containerInfo;
						$c(e, Qc(e), s);
						break;
					default: throw Error(i(161));
				}
			} catch (t) {
				Y(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function xl(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			xl(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
		}
	}
	function Sl(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) cl(e, t.alternate, t), t = t.sibling;
	}
	function Cl(e) {
		for (e = e.child; e !== null;) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Wc(4, t, t.return), Cl(t);
					break;
				case 1:
					Jc(t, t.return);
					var n = t.stateNode;
					typeof n.componentWillUnmount == "function" && Kc(t, t.return, n), Cl(t);
					break;
				case 27: mf(t.stateNode);
				case 26:
				case 5:
					Jc(t, t.return), Cl(t);
					break;
				case 22:
					t.memoizedState === null && Cl(t);
					break;
				case 30:
					Cl(t);
					break;
				default: Cl(t);
			}
			e = e.sibling;
		}
	}
	function wl(e, t, n) {
		for (n &&= (t.subtreeFlags & 8772) != 0, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags;
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					wl(i, a, n), Uc(4, a);
					break;
				case 1:
					if (wl(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						Y(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var s = r.stateNode;
						try {
							var c = i.shared.hiddenCallbacks;
							if (c !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < c.length; i++) to(c[i], s);
						} catch (e) {
							Y(r, r.return, e);
						}
					}
					n && o & 64 && Gc(a), qc(a, a.return);
					break;
				case 27: tl(a);
				case 26:
				case 5:
					wl(i, a, n), n && r === null && o & 4 && Yc(a), qc(a, a.return);
					break;
				case 12:
					wl(i, a, n);
					break;
				case 31:
					wl(i, a, n), n && o & 4 && pl(i, a);
					break;
				case 13:
					wl(i, a, n), n && o & 4 && ml(i, a);
					break;
				case 22:
					a.memoizedState === null && wl(i, a, n), qc(a, a.return);
					break;
				case 30: break;
				default: wl(i, a, n);
			}
			t = t.sibling;
		}
	}
	function Tl(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && ma(n));
	}
	function El(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ma(e));
	}
	function Dl(e, t, n, r) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) Ol(e, t, n, r), t = t.sibling;
	}
	function Ol(e, t, n, r) {
		var i = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Dl(e, t, n, r), i & 2048 && Uc(9, t);
				break;
			case 1:
				Dl(e, t, n, r);
				break;
			case 3:
				Dl(e, t, n, r), i & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ma(e)));
				break;
			case 12:
				if (i & 2048) {
					Dl(e, t, n, r), e = t.stateNode;
					try {
						var a = t.memoizedProps, o = a.id, s = a.onPostCommit;
						typeof s == "function" && s(o, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
					} catch (e) {
						Y(t, t.return, e);
					}
				} else Dl(e, t, n, r);
				break;
			case 31:
				Dl(e, t, n, r);
				break;
			case 13:
				Dl(e, t, n, r);
				break;
			case 23: break;
			case 22:
				a = t.stateNode, o = t.alternate, t.memoizedState === null ? a._visibility & 2 ? Dl(e, t, n, r) : (a._visibility |= 2, kl(e, t, n, r, (t.subtreeFlags & 10256) != 0 || !1)) : a._visibility & 2 ? Dl(e, t, n, r) : Al(e, t), i & 2048 && Tl(o, t);
				break;
			case 24:
				Dl(e, t, n, r), i & 2048 && El(t.alternate, t);
				break;
			default: Dl(e, t, n, r);
		}
	}
	function kl(e, t, n, r, i) {
		for (i &&= (t.subtreeFlags & 10256) != 0 || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					kl(a, o, s, c, i), Uc(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, kl(a, o, s, c, i)) : u._visibility & 2 ? kl(a, o, s, c, i) : Al(a, o), i && l & 2048 && Tl(o.alternate, o);
					break;
				case 24:
					kl(a, o, s, c, i), i && l & 2048 && El(o.alternate, o);
					break;
				default: kl(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Al(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Al(n, r), i & 2048 && Tl(r.alternate, r);
					break;
				case 24:
					Al(n, r), i & 2048 && El(r.alternate, r);
					break;
				default: Al(n, r);
			}
			t = t.sibling;
		}
	}
	var jl = 8192;
	function Ml(e, t, n) {
		if (e.subtreeFlags & jl) for (e = e.child; e !== null;) Nl(e, t, n), e = e.sibling;
	}
	function Nl(e, t, n) {
		switch (e.tag) {
			case 26:
				Ml(e, t, n), e.flags & jl && e.memoizedState !== null && Kf(n, vl, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				Ml(e, t, n);
				break;
			case 3:
			case 4:
				var r = vl;
				vl = _f(e.stateNode.containerInfo), Ml(e, t, n), vl = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = jl, jl = 16777216, Ml(e, t, n), jl = r) : Ml(e, t, n));
				break;
			default: Ml(e, t, n);
		}
	}
	function Pl(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Fl(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				ol = r, Rl(r, e);
			}
			Pl(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Il(e), e = e.sibling;
	}
	function Il(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Fl(e), e.flags & 2048 && Wc(9, e, e.return);
				break;
			case 3:
				Fl(e);
				break;
			case 12:
				Fl(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ll(e)) : Fl(e);
				break;
			default: Fl(e);
		}
	}
	function Ll(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				ol = r, Rl(r, e);
			}
			Pl(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					Wc(8, t, t.return), Ll(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Ll(t));
					break;
				default: Ll(t);
			}
			e = e.sibling;
		}
	}
	function Rl(e, t) {
		for (; ol !== null;) {
			var n = ol;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Wc(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: ma(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, ol = r;
			else a: for (n = e; ol !== null;) {
				r = ol;
				var i = r.sibling, a = r.return;
				if (ll(r), r === n) {
					ol = null;
					break a;
				}
				if (i !== null) {
					i.return = a, ol = i;
					break a;
				}
				ol = a;
			}
		}
	}
	var zl = {
		getCacheForType: function(e) {
			var t = sa(P), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return sa(P).controller.signal;
		}
	}, Bl = typeof WeakMap == "function" ? WeakMap : Map, W = 0, G = null, K = null, q = 0, J = 0, Vl = null, Hl = !1, Ul = !1, Wl = !1, Gl = 0, Kl = 0, ql = 0, Jl = 0, Yl = 0, Xl = 0, Zl = 0, Ql = null, $l = null, eu = !1, tu = 0, nu = 0, ru = Infinity, iu = null, au = null, ou = 0, su = null, cu = null, lu = 0, uu = 0, du = null, fu = null, pu = 0, mu = null;
	function hu() {
		return W & 2 && q !== 0 ? q & -q : w.T === null ? ft() : pd();
	}
	function gu() {
		if (Xl === 0) if (!(q & 536870912) || N) {
			var e = Ze;
			Ze <<= 1, !(Ze & 3932160) && (Ze = 262144), Xl = e;
		} else Xl = 536870912;
		return e = co.current, e !== null && (e.flags |= 32), Xl;
	}
	function _u(e, t, n) {
		(e === G && (J === 2 || J === 9) || e.cancelPendingCommit !== null) && (wu(e, 0), xu(e, q, Xl, !1)), at(e, n), (!(W & 2) || e !== G) && (e === G && (!(W & 2) && (Jl |= n), Kl === 4 && xu(e, q, Xl, !1)), ad(e));
	}
	function vu(e, t, n) {
		if (W & 6) throw Error(i(327));
		var r = !n && (t & 127) == 0 && (t & e.expiredLanes) === 0 || tt(e, t), a = r ? Mu(e, t) : Au(e, t, !0), o = r;
		do {
			if (a === 0) {
				Ul && !r && xu(e, t, 0, !1);
				break;
			} else {
				if (n = e.current.alternate, o && !bu(n)) {
					a = Au(e, t, !1), o = !1;
					continue;
				}
				if (a === 2) {
					if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;
					else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
					if (s !== 0) {
						t = s;
						a: {
							var c = e;
							a = Ql;
							var l = c.current.memoizedState.isDehydrated;
							if (l && (wu(c, s).flags |= 256), s = Au(c, s, !1), s !== 2) {
								if (Wl && !l) {
									c.errorRecoveryDisabledLanes |= o, Jl |= o, a = 4;
									break a;
								}
								o = $l, $l = a, o !== null && ($l === null ? $l = o : $l.push.apply($l, o));
							}
							a = s;
						}
						if (o = !1, a !== 2) continue;
					}
				}
				if (a === 1) {
					wu(e, 0), xu(e, t, 0, !0);
					break;
				}
				a: {
					switch (r = e, o = a, o) {
						case 0:
						case 1: throw Error(i(345));
						case 4: if ((t & 4194048) !== t) break;
						case 6:
							xu(r, t, Xl, !Hl);
							break a;
						case 2:
							$l = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(i(329));
					}
					if ((t & 62914560) === t && (a = tu + 300 - Pe(), 10 < a)) {
						if (xu(r, t, Xl, !Hl), et(r, 0, !0) !== 0) break a;
						lu = t, r.timeoutHandle = qd(yu.bind(null, r, n, $l, iu, eu, t, Xl, Jl, Zl, Hl, o, "Throttled", -0, 0), a);
						break a;
					}
					yu(r, n, $l, iu, eu, t, Xl, Jl, Zl, Hl, o, null, -0, 0);
				}
			}
			break;
		} while (1);
		ad(e);
	}
	function yu(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		if (e.timeoutHandle = -1, d = t.subtreeFlags, d & 8192 || (d & 16785408) == 16785408) {
			d = {
				stylesheets: null,
				count: 0,
				imgCount: 0,
				imgBytes: 0,
				suspenseyImages: [],
				waitingForImages: !0,
				waitingForViewTransition: !1,
				unsuspend: k
			}, Nl(t, a, d);
			var m = (a & 62914560) === a ? tu - Pe() : (a & 4194048) === a ? nu - Pe() : 0;
			if (m = Jf(d, m), m !== null) {
				lu = a, e.cancelPendingCommit = m(zu.bind(null, e, t, a, n, r, i, o, s, c, u, d, null, f, p)), xu(e, a, o, !l);
				return;
			}
		}
		zu(e, t, a, n, r, i, o, s, c);
	}
	function bu(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!kr(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function xu(e, t, n, r) {
		t &= ~Yl, t &= ~Jl, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - Ke(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && st(e, n, t);
	}
	function Su() {
		return W & 6 ? !0 : (od(0, !1), !1);
	}
	function Cu() {
		if (K !== null) {
			if (J === 0) var e = K.return;
			else e = K, $i = Qi = null, Po(e), La = null, Ra = 0, e = K;
			for (; e !== null;) Hc(e.alternate, e), e = e.return;
			K = null;
		}
	}
	function wu(e, t) {
		var n = e.timeoutHandle;
		n !== -1 && (e.timeoutHandle = -1, Jd(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), lu = 0, Cu(), G = e, K = n = _i(e.current, null), q = t, J = 0, Vl = null, Hl = !1, Ul = tt(e, t), Wl = !1, Zl = Xl = Yl = Jl = ql = Kl = 0, $l = Ql = null, eu = !1, t & 8 && (t |= t & 32);
		var r = e.entangledLanes;
		if (r !== 0) for (e = e.entanglements, r &= t; 0 < r;) {
			var i = 31 - Ke(r), a = 1 << i;
			t |= e[i], r &= ~a;
		}
		return Gl = t, si(), n;
	}
	function Tu(e, t) {
		F = null, w.H = Vs, t === Da || t === ka ? (t = Fa(), J = 3) : t === Oa ? (t = Fa(), J = 4) : J = t === ac ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, Vl = t, K === null && (Kl = 1, $s(e, Ti(t, e.current)));
	}
	function Eu() {
		var e = co.current;
		return e === null ? !0 : (q & 4194048) === q ? lo === null : (q & 62914560) === q || q & 536870912 ? e === lo : !1;
	}
	function Du() {
		var e = w.H;
		return w.H = Vs, e === null ? Vs : e;
	}
	function Ou() {
		var e = w.A;
		return w.A = zl, e;
	}
	function ku() {
		Kl = 4, Hl || (q & 4194048) !== q && co.current !== null || (Ul = !0), !(ql & 134217727) && !(Jl & 134217727) || G === null || xu(G, q, Xl, !1);
	}
	function Au(e, t, n) {
		var r = W;
		W |= 2;
		var i = Du(), a = Ou();
		(G !== e || q !== t) && (iu = null, wu(e, t)), t = !1;
		var o = Kl;
		a: do
			try {
				if (J !== 0 && K !== null) {
					var s = K, c = Vl;
					switch (J) {
						case 8:
							Cu(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							co.current === null && (t = !0);
							var l = J;
							if (J = 0, Vl = null, Iu(e, s, c, l), n && Ul) {
								o = 0;
								break a;
							}
							break;
						default: l = J, J = 0, Vl = null, Iu(e, s, c, l);
					}
				}
				ju(), o = Kl;
				break;
			} catch (t) {
				Tu(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, $i = Qi = null, W = r, w.H = i, w.A = a, K === null && (G = null, q = 0, si()), o;
	}
	function ju() {
		for (; K !== null;) Pu(K);
	}
	function Mu(e, t) {
		var n = W;
		W |= 2;
		var r = Du(), a = Ou();
		G !== e || q !== t ? (iu = null, ru = Pe() + 500, wu(e, t)) : Ul = tt(e, t);
		a: do
			try {
				if (J !== 0 && K !== null) {
					t = K;
					var o = Vl;
					b: switch (J) {
						case 1:
							J = 0, Vl = null, Iu(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (ja(o)) {
								J = 0, Vl = null, Fu(t);
								break;
							}
							t = function() {
								J !== 2 && J !== 9 || G !== e || (J = 7), ad(e);
							}, o.then(t, t);
							break a;
						case 3:
							J = 7;
							break a;
						case 4:
							J = 5;
							break a;
						case 7:
							ja(o) ? (J = 0, Vl = null, Fu(t)) : (J = 0, Vl = null, Iu(e, t, o, 7));
							break;
						case 5:
							var s = null;
							switch (K.tag) {
								case 26: s = K.memoizedState;
								case 5:
								case 27:
									var c = K;
									if (s ? Gf(s) : c.stateNode.complete) {
										J = 0, Vl = null;
										var l = c.sibling;
										if (l !== null) K = l;
										else {
											var u = c.return;
											u === null ? K = null : (K = u, Lu(u));
										}
										break b;
									}
							}
							J = 0, Vl = null, Iu(e, t, o, 5);
							break;
						case 6:
							J = 0, Vl = null, Iu(e, t, o, 6);
							break;
						case 8:
							Cu(), Kl = 6;
							break a;
						default: throw Error(i(462));
					}
				}
				Nu();
				break;
			} catch (t) {
				Tu(e, t);
			}
		while (1);
		return $i = Qi = null, w.H = r, w.A = a, W = n, K === null ? (G = null, q = 0, si(), Kl) : 0;
	}
	function Nu() {
		for (; K !== null && !Me();) Pu(K);
	}
	function Pu(e) {
		var t = Pc(e.alternate, e, Gl);
		e.memoizedProps = e.pendingProps, t === null ? Lu(e) : K = t;
	}
	function Fu(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = yc(n, t, t.pendingProps, t.type, void 0, q);
				break;
			case 11:
				t = yc(n, t, t.pendingProps, t.type.render, t.ref, q);
				break;
			case 5: Po(t);
			default: Hc(n, t), t = K = vi(t, Gl), t = Pc(n, t, Gl);
		}
		e.memoizedProps = e.pendingProps, t === null ? Lu(e) : K = t;
	}
	function Iu(e, t, n, r) {
		$i = Qi = null, Po(t), La = null, Ra = 0;
		var i = t.return;
		try {
			if (ic(e, i, t, n, q)) {
				Kl = 1, $s(e, Ti(n, e.current)), K = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw K = i, t;
			Kl = 1, $s(e, Ti(n, e.current)), K = null;
			return;
		}
		t.flags & 32768 ? (N || r === 1 ? e = !0 : Ul || q & 536870912 ? e = !1 : (Hl = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = co.current, r !== null && r.tag === 13 && (r.flags |= 16384))), Ru(t, e)) : Lu(t);
	}
	function Lu(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				Ru(t, Hl);
				return;
			}
			e = t.return;
			var n = Bc(t.alternate, t, Gl);
			if (n !== null) {
				K = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				K = t;
				return;
			}
			K = t = e;
		} while (t !== null);
		Kl === 0 && (Kl = 5);
	}
	function Ru(e, t) {
		do {
			var n = Vc(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, K = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				K = e;
				return;
			}
			K = e = n;
		} while (e !== null);
		Kl = 6, K = null;
	}
	function zu(e, t, n, r, a, o, s, c, l) {
		e.cancelPendingCommit = null;
		do
			Wu();
		while (ou !== 0);
		if (W & 6) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			if (o = t.lanes | t.childLanes, o |= oi, ot(e, n, o, s, c, l), e === G && (K = G = null, q = 0), cu = t, su = e, lu = n, uu = o, du = a, fu = r, t.subtreeFlags & 10256 || t.flags & 10256 ? (e.callbackNode = null, e.callbackPriority = 0, Qu(Re, function() {
				return Gu(), null;
			})) : (e.callbackNode = null, e.callbackPriority = 0), r = (t.flags & 13878) != 0, t.subtreeFlags & 13878 || r) {
				r = w.T, w.T = null, a = T.p, T.p = 2, s = W, W |= 4;
				try {
					sl(e, t, n);
				} finally {
					W = s, T.p = a, w.T = r;
				}
			}
			ou = 1, Bu(), Vu(), Hu();
		}
	}
	function Bu() {
		if (ou === 1) {
			ou = 0;
			var e = su, t = cu, n = (t.flags & 13878) != 0;
			if (t.subtreeFlags & 13878 || n) {
				n = w.T, w.T = null;
				var r = T.p;
				T.p = 2;
				var i = W;
				W |= 4;
				try {
					yl(t, e);
					var a = Vd, o = Pr(e.containerInfo), s = a.focusedElem, c = a.selectionRange;
					if (o !== s && s && s.ownerDocument && Nr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Fr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Mr(s, h), v = Mr(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					cp = !!Bd, Vd = Bd = null;
				} finally {
					W = i, T.p = r, w.T = n;
				}
			}
			e.current = t, ou = 2;
		}
	}
	function Vu() {
		if (ou === 2) {
			ou = 0;
			var e = su, t = cu, n = (t.flags & 8772) != 0;
			if (t.subtreeFlags & 8772 || n) {
				n = w.T, w.T = null;
				var r = T.p;
				T.p = 2;
				var i = W;
				W |= 4;
				try {
					cl(e, t.alternate, t);
				} finally {
					W = i, T.p = r, w.T = n;
				}
			}
			ou = 3;
		}
	}
	function Hu() {
		if (ou === 4 || ou === 3) {
			ou = 0, Ne();
			var e = su, t = cu, n = lu, r = fu;
			t.subtreeFlags & 10256 || t.flags & 10256 ? ou = 5 : (ou = 0, cu = su = null, Uu(e, e.pendingLanes));
			var i = e.pendingLanes;
			if (i === 0 && (au = null), dt(n), t = t.stateNode, We && typeof We.onCommitFiberRoot == "function") try {
				We.onCommitFiberRoot(Ue, t, void 0, (t.current.flags & 128) == 128);
			} catch {}
			if (r !== null) {
				t = w.T, i = T.p, T.p = 2, w.T = null;
				try {
					for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
						var s = r[o];
						a(s.value, { componentStack: s.stack });
					}
				} finally {
					w.T = t, T.p = i;
				}
			}
			lu & 3 && Wu(), ad(e), i = e.pendingLanes, n & 261930 && i & 42 ? e === mu ? pu++ : (pu = 0, mu = e) : pu = 0, od(0, !1);
		}
	}
	function Uu(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ma(t)));
	}
	function Wu() {
		return Bu(), Vu(), Hu(), Gu();
	}
	function Gu() {
		if (ou !== 5) return !1;
		var e = su, t = uu;
		uu = 0;
		var n = dt(lu), r = w.T, a = T.p;
		try {
			T.p = 32 > n ? 32 : n, w.T = null, n = du, du = null;
			var o = su, s = lu;
			if (ou = 0, cu = su = null, lu = 0, W & 6) throw Error(i(331));
			var c = W;
			if (W |= 4, Il(o.current), Ol(o, o.current, s, n), W = c, od(0, !1), We && typeof We.onPostCommitFiberRoot == "function") try {
				We.onPostCommitFiberRoot(Ue, o);
			} catch {}
			return !0;
		} finally {
			T.p = a, w.T = r, Uu(e, t);
		}
	}
	function Ku(e, t, n) {
		t = Ti(n, t), t = tc(e.stateNode, t, 2), e = Ya(e, t, 2), e !== null && (at(e, 2), ad(e));
	}
	function Y(e, t, n) {
		if (e.tag === 3) Ku(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				Ku(t, e, n);
				break;
			} else if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (au === null || !au.has(r))) {
					e = Ti(n, e), n = nc(2), r = Ya(t, n, 2), r !== null && (rc(n, r, t, e), at(r, 2), ad(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function qu(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new Bl();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (Wl = !0, i.add(n), e = Ju.bind(null, e, t, n), t.then(e, e));
	}
	function Ju(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, G === e && (q & n) === n && (Kl === 4 || Kl === 3 && (q & 62914560) === q && 300 > Pe() - tu ? !(W & 2) && wu(e, 0) : Yl |= n, Zl === q && (Zl = 0)), ad(e);
	}
	function Yu(e, t) {
		t === 0 && (t = rt()), e = ui(e, t), e !== null && (at(e, t), ad(e));
	}
	function Xu(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), Yu(e, n);
	}
	function Zu(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, a = e.memoizedState;
				a !== null && (n = a.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(i(314));
		}
		r !== null && r.delete(t), Yu(e, n);
	}
	function Qu(e, t) {
		return Ae(e, t);
	}
	var $u = null, ed = null, td = !1, nd = !1, rd = !1, id = 0;
	function ad(e) {
		e !== ed && e.next === null && (ed === null ? $u = ed = e : ed = ed.next = e), nd = !0, td || (td = !0, fd());
	}
	function od(e, t) {
		if (!rd && nd) {
			rd = !0;
			do
				for (var n = !1, r = $u; r !== null;) {
					if (!t) if (e !== 0) {
						var i = r.pendingLanes;
						if (i === 0) var a = 0;
						else {
							var o = r.suspendedLanes, s = r.pingedLanes;
							a = (1 << 31 - Ke(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
						}
						a !== 0 && (n = !0, dd(r, a));
					} else a = q, a = et(r, r === G ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || tt(r, a) || (n = !0, dd(r, a));
					r = r.next;
				}
			while (n);
			rd = !1;
		}
	}
	function sd() {
		cd();
	}
	function cd() {
		nd = td = !1;
		var e = 0;
		id !== 0 && Kd() && (e = id);
		for (var t = Pe(), n = null, r = $u; r !== null;) {
			var i = r.next, a = ld(r, t);
			a === 0 ? (r.next = null, n === null ? $u = i : n.next = i, i === null && (ed = n)) : (n = r, (e !== 0 || a & 3) && (nd = !0)), r = i;
		}
		ou !== 0 && ou !== 5 || od(e, !1), id !== 0 && (id = 0);
	}
	function ld(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - Ke(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = nt(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = G, n = q, n = et(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (J === 2 || J === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && je(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || tt(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && je(r), dt(n)) {
				case 2:
				case 8:
					n = Le;
					break;
				case 32:
					n = Re;
					break;
				case 268435456:
					n = Be;
					break;
				default: n = Re;
			}
			return r = ud.bind(null, e), n = Ae(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && je(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function ud(e, t) {
		if (ou !== 0 && ou !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (Wu() && e.callbackNode !== n) return null;
		var r = q;
		return r = et(e, e === G ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (vu(e, r, t), ld(e, Pe()), e.callbackNode != null && e.callbackNode === n ? ud.bind(null, e) : null);
	}
	function dd(e, t) {
		if (Wu()) return null;
		vu(e, t, !0);
	}
	function fd() {
		Xd(function() {
			W & 6 ? Ae(Ie, sd) : cd();
		});
	}
	function pd() {
		if (id === 0) {
			var e = _a;
			e === 0 && (e = Xe, Xe <<= 1, !(Xe & 261888) && (Xe = 256)), id = e;
		}
		return id;
	}
	function md(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : cn("" + e);
	}
	function hd(e, t) {
		var n = t.ownerDocument.createElement("input");
		return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
	}
	function gd(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = md((i[gt] || null).action), o = r.submitter;
			o && (t = (t = o[gt] || null) ? md(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new On("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (id !== 0) {
								var e = o ? hd(i, o) : new FormData(i);
								Ds(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = o ? hd(i, o) : new FormData(i), Ds(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var _d = 0; _d < ti.length; _d++) {
		var vd = ti[_d];
		ni(vd.toLowerCase(), "on" + (vd[0].toUpperCase() + vd.slice(1)));
	}
	ni(qr, "onAnimationEnd"), ni(Jr, "onAnimationIteration"), ni(Yr, "onAnimationStart"), ni("dblclick", "onDoubleClick"), ni("focusin", "onFocus"), ni("focusout", "onBlur"), ni(Xr, "onTransitionRun"), ni(Zr, "onTransitionStart"), ni(Qr, "onTransitionCancel"), ni($r, "onTransitionEnd"), Mt("onMouseEnter", ["mouseout", "mouseover"]), Mt("onMouseLeave", ["mouseout", "mouseover"]), Mt("onPointerEnter", ["pointerout", "pointerover"]), Mt("onPointerLeave", ["pointerout", "pointerover"]), jt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), jt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), jt("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), jt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), jt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), jt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var yd = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), bd = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yd));
	function xd(e, t) {
		t = (t & 4) != 0;
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						ri(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						ri(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function X(e, t) {
		var n = t[vt];
		n === void 0 && (n = t[vt] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Td(t, e, 2, !1), n.add(r));
	}
	function Sd(e, t, n) {
		var r = 0;
		t && (r |= 4), Td(n, e, r, t);
	}
	var Cd = "_reactListening" + Math.random().toString(36).slice(2);
	function wd(e) {
		if (!e[Cd]) {
			e[Cd] = !0, kt.forEach(function(t) {
				t !== "selectionchange" && (bd.has(t) || Sd(t, !1, e), Sd(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Cd] || (t[Cd] = !0, Sd("selectionchange", !1, t));
		}
	}
	function Td(e, t, n, r) {
		switch (hp(t)) {
			case 2:
				var i = lp;
				break;
			case 8:
				i = up;
				break;
			default: i = dp;
		}
		n = i.bind(null, t, n, e), i = void 0, !vn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Ed(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var c = r.stateNode.containerInfo;
				if (c === i) break;
				if (o === 4) for (o = r.return; o !== null;) {
					var l = o.tag;
					if ((l === 3 || l === 4) && o.stateNode.containerInfo === i) return;
					o = o.return;
				}
				for (; c !== null;) {
					if (o = wt(c), o === null) return;
					if (l = o.tag, l === 5 || l === 6 || l === 26 || l === 27) {
						r = a = o;
						continue a;
					}
					c = c.parentNode;
				}
			}
			r = r.return;
		}
		hn(function() {
			var r = a, i = un(n), o = [];
			a: {
				var c = ei.get(e);
				if (c !== void 0) {
					var l = On, u = e;
					switch (e) {
						case "keypress": if (wn(n) === 0) break a;
						case "keydown":
						case "keyup":
							l = Kn;
							break;
						case "focusin":
							u = "focus", l = Ln;
							break;
						case "focusout":
							u = "blur", l = Ln;
							break;
						case "beforeblur":
						case "afterblur":
							l = Ln;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							l = Fn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							l = In;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							l = Jn;
							break;
						case qr:
						case Jr:
						case Yr:
							l = Rn;
							break;
						case $r:
							l = Yn;
							break;
						case "scroll":
						case "scrollend":
							l = An;
							break;
						case "wheel":
							l = Xn;
							break;
						case "copy":
						case "cut":
						case "paste":
							l = zn;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							l = qn;
							break;
						case "toggle":
						case "beforetoggle": l = Zn;
					}
					var d = (t & 4) != 0, f = !d && (e === "scroll" || e === "scrollend"), p = d ? c === null ? null : c + "Capture" : c;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = gn(m, p), g != null && d.push(Dd(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (c = new l(c, u, null, n, i), o.push({
						event: c,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (c = e === "mouseover" || e === "pointerover", l = e === "mouseout" || e === "pointerout", c && n !== ln && (u = n.relatedTarget || n.fromElement) && (wt(u) || u[_t])) break a;
					if ((l || c) && (c = i.window === i ? i : (c = i.ownerDocument) ? c.defaultView || c.parentWindow : window, l ? (u = n.relatedTarget || n.toElement, l = r, u = u ? wt(u) : null, u !== null && (f = s(u), d = u.tag, u !== f || d !== 5 && d !== 27 && d !== 6) && (u = null)) : (l = null, u = r), l !== u)) {
						if (d = Fn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = qn, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = l == null ? c : Et(l), h = u == null ? c : Et(u), c = new d(g, m + "leave", l, n, i), c.target = f, c.relatedTarget = h, g = null, wt(i) === r && (d = new d(p, m + "enter", u, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, l && u) b: {
							for (d = kd, p = l, m = u, h = 0, g = p; g; g = d(g)) h++;
							g = 0;
							for (var _ = m; _; _ = d(_)) g++;
							for (; 0 < h - g;) p = d(p), h--;
							for (; 0 < g - h;) m = d(m), g--;
							for (; h--;) {
								if (p === m || m !== null && p === m.alternate) {
									d = p;
									break b;
								}
								p = d(p), m = d(m);
							}
							d = null;
						}
						else d = null;
						l !== null && Ad(o, c, l, d, !1), u !== null && f !== null && Ad(o, f, u, d, !0);
					}
				}
				a: {
					if (c = r ? Et(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === "select" || l === "input" && c.type === "file") var v = _r;
					else if (j(c)) if (vr) v = Dr;
					else {
						v = Tr;
						var y = wr;
					}
					else l = c.nodeName, !l || l.toLowerCase() !== "input" || c.type !== "checkbox" && c.type !== "radio" ? r && an(r.elementType) && (v = _r) : v = Er;
					if (v &&= v(e, r)) {
						fr(o, v, n, i);
						break a;
					}
					y && y(e, c, r), e === "focusout" && r && c.type === "number" && r.memoizedProps.value != null && Xt(c, "number", c.value);
				}
				switch (y = r ? Et(r) : window, e) {
					case "focusin":
						(j(y) || y.contentEditable === "true") && (Lr = y, Rr = r, zr = null);
						break;
					case "focusout":
						zr = Rr = Lr = null;
						break;
					case "mousedown":
						Br = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						Br = !1, Vr(o, n, i);
						break;
					case "selectionchange": if (Ir) break;
					case "keydown":
					case "keyup": Vr(o, n, i);
				}
				var b;
				if ($n) b: {
					switch (e) {
						case "compositionstart":
							var x = "onCompositionStart";
							break b;
						case "compositionend":
							x = "onCompositionEnd";
							break b;
						case "compositionupdate":
							x = "onCompositionUpdate";
							break b;
					}
					x = void 0;
				}
				else cr ? or(e, n) && (x = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
				x && (rr && n.locale !== "ko" && (cr || x !== "onCompositionStart" ? x === "onCompositionEnd" && cr && (b = Cn()) : (bn = i, xn = "value" in bn ? bn.value : bn.textContent, cr = !0)), y = Od(r, x), 0 < y.length && (x = new Bn(x, e, null, n, i), o.push({
					event: x,
					listeners: y
				}), b ? x.data = b : (b = sr(n), b !== null && (x.data = b)))), (b = nr ? lr(e, n) : ur(e, n)) && (x = Od(r, "onBeforeInput"), 0 < x.length && (y = new Bn("onBeforeInput", "beforeinput", null, n, i), o.push({
					event: y,
					listeners: x
				}), y.data = b)), gd(o, e, r, n, i);
			}
			xd(o, t);
		});
	}
	function Dd(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Od(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = gn(e, n), i != null && r.unshift(Dd(e, i, a)), i = gn(e, t), i != null && r.push(Dd(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function kd(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Ad(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = gn(n, a), l != null && o.unshift(Dd(n, l, c))) : i || (l = gn(n, a), l != null && o.push(Dd(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var jd = /\r\n?/g, Md = /\u0000|\uFFFD/g;
	function Nd(e) {
		return (typeof e == "string" ? e : "" + e).replace(jd, "\n").replace(Md, "");
	}
	function Pd(e, t) {
		return t = Nd(t), Nd(e) === t;
	}
	function Z(e, t, n, r, a, o) {
		switch (n) {
			case "children":
				typeof r == "string" ? t === "body" || t === "textarea" && r === "" || en(e, r) : (typeof r == "number" || typeof r == "bigint") && t !== "body" && en(e, "" + r);
				break;
			case "className":
				Rt(e, "class", r);
				break;
			case "tabIndex":
				Rt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Rt(e, n, r);
				break;
			case "style":
				rn(e, r, o);
				break;
			case "data": if (t !== "object") {
				Rt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href")) {
					e.removeAttribute(n);
					break;
				}
				if (r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = cn("" + r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				} else typeof o == "function" && (n === "formAction" ? (t !== "input" && Z(e, t, "name", a.name, a, null), Z(e, t, "formEncType", a.formEncType, a, null), Z(e, t, "formMethod", a.formMethod, a, null), Z(e, t, "formTarget", a.formTarget, a, null)) : (Z(e, t, "encType", a.encType, a, null), Z(e, t, "method", a.method, a, null), Z(e, t, "target", a.target, a, null)));
				if (r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = cn("" + r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = k);
				break;
			case "onScroll":
				r != null && X("scroll", e);
				break;
			case "onScrollEnd":
				r != null && X("scrollend", e);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						e.innerHTML = n;
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = cn("" + r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "" + r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				X("beforetoggle", e), X("toggle", e), Lt(e, "popover", r);
				break;
			case "xlinkActuate":
				zt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				zt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				zt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				zt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				zt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				zt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				zt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				zt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				zt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Lt(e, "is", r);
				break;
			case "innerText":
			case "textContent": break;
			default: (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = on.get(n) || n, Lt(e, n, r));
		}
	}
	function Fd(e, t, n, r, a, o) {
		switch (n) {
			case "style":
				rn(e, r, o);
				break;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(i(61));
					if (n = r.__html, n != null) {
						if (a.children != null) throw Error(i(60));
						e.innerHTML = n;
					}
				}
				break;
			case "children":
				typeof r == "string" ? en(e, r) : (typeof r == "number" || typeof r == "bigint") && en(e, "" + r);
				break;
			case "onScroll":
				r != null && X("scroll", e);
				break;
			case "onScrollEnd":
				r != null && X("scrollend", e);
				break;
			case "onClick":
				r != null && (e.onclick = k);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": break;
			case "innerText":
			case "textContent": break;
			default: if (!At.hasOwnProperty(n)) a: {
				if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), o = e[gt] || null, o = o == null ? null : o[n], typeof o == "function" && e.removeEventListener(t, o, a), typeof r == "function")) {
					typeof o != "function" && o !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, r, a);
					break a;
				}
				n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Lt(e, n, r);
			}
		}
	}
	function Id(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				X("error", e), X("load", e);
				var r = !1, a = !1, o;
				for (o in n) if (n.hasOwnProperty(o)) {
					var s = n[o];
					if (s != null) switch (o) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							a = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(i(137, t));
						default: Z(e, t, o, s, n, null);
					}
				}
				a && Z(e, t, "srcSet", n.srcSet, n, null), r && Z(e, t, "src", n.src, n, null);
				return;
			case "input":
				X("invalid", e);
				var c = o = s = a = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							a = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							o = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(i(137, t));
							break;
						default: Z(e, t, r, d, n, null);
					}
				}
				Yt(e, o, c, l, u, s, a, !1);
				return;
			case "select":
				for (a in X("invalid", e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
					case "value":
						o = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: Z(e, t, a, c, n, null);
				}
				t = o, n = s, e.multiple = !!r, t == null ? n != null && Zt(e, !!r, n, !0) : Zt(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in X("invalid", e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						a = c;
						break;
					case "children":
						o = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(i(91));
						break;
					default: Z(e, t, s, c, n, null);
				}
				$t(e, r, a, o);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: Z(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				X("beforetoggle", e), X("toggle", e), X("cancel", e), X("close", e);
				break;
			case "iframe":
			case "object":
				X("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < yd.length; r++) X(yd[r], e);
				break;
			case "image":
				X("error", e), X("load", e);
				break;
			case "details":
				X("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": X("error", e), X("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(i(137, t));
					default: Z(e, t, u, r, n, null);
				}
				return;
			default: if (an(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && Fd(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && Z(e, t, c, r, n, null));
	}
	function Ld(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var a = null, o = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || Z(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							o = m;
							break;
						case "name":
							a = m;
							break;
						case "checked":
							u = m;
							break;
						case "defaultChecked":
							d = m;
							break;
						case "value":
							s = m;
							break;
						case "defaultValue":
							c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(i(137, t));
							break;
						default: m !== f && Z(e, t, p, m, r, f);
					}
				}
				Jt(e, s, c, l, u, d, o, a);
				return;
			case "select":
				for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(o) || Z(e, t, o, null, r, l);
				}
				for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
					case "value":
						p = o;
						break;
					case "defaultValue":
						c = o;
						break;
					case "multiple": s = o;
					default: o !== l && Z(e, t, a, o, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? Zt(e, !!n, n ? [] : "", !1) : Zt(e, !!n, t, !0)) : Zt(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: Z(e, t, c, null, r, a);
				}
				for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
					case "value":
						p = a;
						break;
					case "defaultValue":
						m = a;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (a != null) throw Error(i(91));
						break;
					default: a !== o && Z(e, t, s, a, r, o);
				}
				Qt(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: Z(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: Z(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && Z(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(i(137, t));
						break;
					default: Z(e, t, u, p, r, m);
				}
				return;
			default: if (an(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && Fd(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || Fd(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && Z(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || Z(e, t, f, p, r, m);
	}
	function Rd(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function zd() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && Rd(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && Rd(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var Bd = null, Vd = null;
	function Hd(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function Ud(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function Wd(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function Gd(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var Q = null;
	function Kd() {
		var e = window.event;
		return e && e.type === "popstate" ? e === Q ? !1 : (Q = e, !0) : (Q = null, !1);
	}
	var qd = typeof setTimeout == "function" ? setTimeout : void 0, Jd = typeof clearTimeout == "function" ? clearTimeout : void 0, Yd = typeof Promise == "function" ? Promise : void 0, Xd = typeof queueMicrotask == "function" ? queueMicrotask : Yd === void 0 ? qd : function(e) {
		return Yd.resolve(null).then(e).catch(Zd);
	};
	function Zd(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Qd(e) {
		return e === "head";
	}
	function $d(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) if (n = i.data, n === "/$" || n === "/&") {
				if (r === 0) {
					e.removeChild(i), Pp(t);
					return;
				}
				r--;
			} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
			else if (n === "html") mf(e.ownerDocument.documentElement);
			else if (n === "head") {
				n = e.ownerDocument.head, mf(n);
				for (var a = n.firstChild; a;) {
					var o = a.nextSibling, s = a.nodeName;
					a[St] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
				}
			} else n === "body" && mf(e.ownerDocument.body);
			n = i;
		} while (n);
		Pp(t);
	}
	function ef(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) if (n = r.data, n === "/$") {
				if (e === 0) break;
				e--;
			} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			n = r;
		} while (n);
	}
	function tf(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					tf(n), Ct(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function nf(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) if (t === "input" && e.type === "hidden") {
				var a = i.name == null ? null : "" + i.name;
				if (i.type === "hidden" && e.getAttribute("name") === a) return e;
			} else return e;
			else if (!e[St]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = lf(e.nextSibling), e === null) break;
		}
		return null;
	}
	function rf(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = lf(e.nextSibling), e === null)) return null;
		return e;
	}
	function af(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = lf(e.nextSibling), e === null)) return null;
		return e;
	}
	function of(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function sf(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function cf(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function lf(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var uf = null;
	function df(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return lf(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function ff(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function pf(e, t, n) {
		switch (t = Hd(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(i(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(i(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(i(454));
				return e;
			default: throw Error(i(451));
		}
	}
	function mf(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		Ct(e);
	}
	var hf = /* @__PURE__ */ new Map(), gf = /* @__PURE__ */ new Set();
	function _f(e) {
		return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
	}
	var vf = T.d;
	T.d = {
		f: yf,
		r: bf,
		D: Cf,
		C: wf,
		L: Tf,
		m: Ef,
		X: Of,
		S: Df,
		M: kf
	};
	function yf() {
		var e = vf.f(), t = Su();
		return e || t;
	}
	function bf(e) {
		var t = Tt(e);
		t !== null && t.tag === 5 && t.type === "form" ? ks(t) : vf.r(e);
	}
	var xf = typeof document > "u" ? null : document;
	function Sf(e, t, n) {
		var r = xf;
		if (r && typeof t == "string" && t) {
			var i = qt(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), gf.has(i) || (gf.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), Id(t, "link", e), Ot(t), r.head.appendChild(t)));
		}
	}
	function Cf(e) {
		vf.D(e), Sf("dns-prefetch", e, null);
	}
	function wf(e, t) {
		vf.C(e, t), Sf("preconnect", e, t);
	}
	function Tf(e, t, n) {
		vf.L(e, t, n);
		var r = xf;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + qt(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + qt(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + qt(n.imageSizes) + "\"]")) : i += "[href=\"" + qt(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = jf(e);
					break;
				case "script": a = Ff(e);
			}
			hf.has(a) || (e = p({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), hf.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Mf(a)) || t === "script" && r.querySelector(If(a)) || (t = r.createElement("link"), Id(t, "link", e), Ot(t), r.head.appendChild(t)));
		}
	}
	function Ef(e, t) {
		vf.m(e, t);
		var n = xf;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + qt(r) + "\"][href=\"" + qt(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Ff(e);
			}
			if (!hf.has(a) && (e = p({
				rel: "modulepreload",
				href: e
			}, t), hf.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(If(a))) return;
				}
				r = n.createElement("link"), Id(r, "link", e), Ot(r), n.head.appendChild(r);
			}
		}
	}
	function Df(e, t, n) {
		vf.S(e, t, n);
		var r = xf;
		if (r && e) {
			var i = Dt(r).hoistableStyles, a = jf(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Mf(a))) s.loading = 5;
				else {
					e = p({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = hf.get(a)) && zf(e, n);
					var c = o = r.createElement("link");
					Ot(c), Id(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Rf(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function Of(e, t) {
		vf.X(e, t);
		var n = xf;
		if (n && e) {
			var r = Dt(n).hoistableScripts, i = Ff(e), a = r.get(i);
			a || (a = n.querySelector(If(i)), a || (e = p({
				src: e,
				async: !0
			}, t), (t = hf.get(i)) && Bf(e, t), a = n.createElement("script"), Ot(a), Id(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function kf(e, t) {
		vf.M(e, t);
		var n = xf;
		if (n && e) {
			var r = Dt(n).hoistableScripts, i = Ff(e), a = r.get(i);
			a || (a = n.querySelector(If(i)), a || (e = p({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = hf.get(i)) && Bf(e, t), a = n.createElement("script"), Ot(a), Id(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Af(e, t, n, r) {
		var a = (a = ve.current) ? _f(a) : null;
		if (!a) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (t = jf(n.href), n = Dt(a).hoistableStyles, r = n.get(t), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = jf(n.href);
					var o = Dt(a).hoistableStyles, s = o.get(e);
					if (s || (a = a.ownerDocument || a, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, o.set(e, s), (o = a.querySelector(Mf(e))) && !o._p && (s.instance = o, s.state.loading = 5), hf.has(e) || (n = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, hf.set(e, n), o || Pf(a, e, n, s.state))), t && r === null) throw Error(i(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(i(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ff(n), n = Dt(a).hoistableScripts, r = n.get(t), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, n.set(t, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(i(444, e));
		}
	}
	function jf(e) {
		return "href=\"" + qt(e) + "\"";
	}
	function Mf(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Nf(e) {
		return p({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Pf(e, t, n, r) {
		e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]") ? r.loading = 1 : (t = e.createElement("link"), r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		}), Id(t, "link", n), Ot(t), e.head.appendChild(t));
	}
	function Ff(e) {
		return "[src=\"" + qt(e) + "\"]";
	}
	function If(e) {
		return "script[async]" + e;
	}
	function Lf(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + qt(n.href) + "\"]");
				if (r) return t.instance = r, Ot(r), r;
				var a = p({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), Ot(r), Id(r, "style", a), Rf(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				a = jf(n.href);
				var o = e.querySelector(Mf(a));
				if (o) return t.state.loading |= 4, t.instance = o, Ot(o), o;
				r = Nf(n), (a = hf.get(a)) && zf(r, a), o = (e.ownerDocument || e).createElement("link"), Ot(o);
				var s = o;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), Id(o, "link", r), t.state.loading |= 4, Rf(o, n.precedence, e), t.instance = o;
			case "script": return o = Ff(n.src), (a = e.querySelector(If(o))) ? (t.instance = a, Ot(a), a) : (r = n, (a = hf.get(o)) && (r = p({}, n), Bf(r, a)), e = e.ownerDocument || e, a = e.createElement("script"), Ot(a), Id(a, "link", r), e.head.appendChild(a), t.instance = a);
			case "void": return null;
			default: throw Error(i(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Rf(r, n.precedence, e));
		return t.instance;
	}
	function Rf(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function zf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function Bf(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Vf = null;
	function Hf(e, t, n) {
		if (Vf === null) {
			var r = /* @__PURE__ */ new Map(), i = Vf = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Vf, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[St] || a[ht] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Uf(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function Wf(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Gf(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Kf(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = jf(r.href), a = t.querySelector(Mf(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = Yf.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, Ot(a);
					return;
				}
				a = t.ownerDocument || t, r = Nf(r), (i = hf.get(i)) && zf(r, i), a = a.createElement("link"), Ot(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), Id(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = Yf.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var qf = 0;
	function Jf(e, t) {
		return e.stylesheets && e.count === 0 && Zf(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && Zf(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && qf === 0 && (qf = 62500 * zd());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Zf(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > qf ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function Yf() {
		if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
			if (this.stylesheets) Zf(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				this.unsuspend = null, e();
			}
		}
	}
	var Xf = null;
	function Zf(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, Xf = /* @__PURE__ */ new Map(), t.forEach(Qf, e), Xf = null, Yf.call(e));
	}
	function Qf(e, t) {
		if (!(t.state.loading & 4)) {
			var n = Xf.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), Xf.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = Yf.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var $f = {
		$$typeof: x,
		Provider: null,
		Consumer: null,
		_currentValue: ue,
		_currentValue2: ue,
		_threadCount: 0
	};
	function ep(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = it(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = it(0), this.hiddenUpdates = it(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function tp(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new ep(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = hi(3, null, null, t), e.current = a, a.stateNode = e, t = pa(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, Ka(a), e;
	}
	function np(e) {
		return e ? (e = pi, e) : pi;
	}
	function rp(e, t, n, r, i, a) {
		i = np(i), r.context === null ? r.context = i : r.pendingContext = i, r = Ja(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = Ya(e, r, t), n !== null && (_u(n, e, t), Xa(n, e, t));
	}
	function ip(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ap(e, t) {
		ip(e, t), (e = e.alternate) && ip(e, t);
	}
	function op(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = ui(e, 67108864);
			t !== null && _u(t, e, 67108864), ap(e, 67108864);
		}
	}
	function sp(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = hu();
			t = ut(t);
			var n = ui(e, t);
			n !== null && _u(n, e, t), ap(e, t);
		}
	}
	var cp = !0;
	function lp(e, t, n, r) {
		var i = w.T;
		w.T = null;
		var a = T.p;
		try {
			T.p = 2, dp(e, t, n, r);
		} finally {
			T.p = a, w.T = i;
		}
	}
	function up(e, t, n, r) {
		var i = w.T;
		w.T = null;
		var a = T.p;
		try {
			T.p = 8, dp(e, t, n, r);
		} finally {
			T.p = a, w.T = i;
		}
	}
	function dp(e, t, n, r) {
		if (cp) {
			var i = fp(r);
			if (i === null) Ed(e, t, r, pp, n), wp(e, r);
			else if (Ep(i, e, t, n, r)) r.stopPropagation();
			else if (wp(e, r), t & 4 && -1 < Cp.indexOf(e)) {
				for (; i !== null;) {
					var a = Tt(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = $e(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - Ke(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									ad(a), !(W & 6) && (ru = Pe() + 500, od(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = ui(a, 2), s !== null && _u(s, a, 2), Su(), ap(a, 2);
					}
					if (a = fp(r), a === null && Ed(e, t, r, pp, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Ed(e, t, r, null, n);
		}
	}
	function fp(e) {
		return e = un(e), mp(e);
	}
	var pp = null;
	function mp(e) {
		if (pp = null, e = wt(e), e !== null) {
			var t = s(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = c(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = l(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return pp = e, null;
	}
	function hp(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (Fe()) {
				case Ie: return 2;
				case Le: return 8;
				case Re:
				case ze: return 32;
				case Be: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var gp = !1, _p = null, vp = null, yp = null, bp = /* @__PURE__ */ new Map(), xp = /* @__PURE__ */ new Map(), Sp = [], Cp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function wp(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				_p = null;
				break;
			case "dragenter":
			case "dragleave":
				vp = null;
				break;
			case "mouseover":
			case "mouseout":
				yp = null;
				break;
			case "pointerover":
			case "pointerout":
				bp.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": xp.delete(t.pointerId);
		}
	}
	function Tp(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Tt(t), t !== null && op(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Ep(e, t, n, r, i) {
		switch (t) {
			case "focusin": return _p = Tp(_p, e, t, n, r, i), !0;
			case "dragenter": return vp = Tp(vp, e, t, n, r, i), !0;
			case "mouseover": return yp = Tp(yp, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return bp.set(a, Tp(bp.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, xp.set(a, Tp(xp.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Dp(e) {
		var t = wt(e.target);
		if (t !== null) {
			var n = s(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = c(n), t !== null) {
						e.blockedOn = t, pt(e.priority, function() {
							sp(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = l(n), t !== null) {
						e.blockedOn = t, pt(e.priority, function() {
							sp(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Op(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = fp(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				ln = r, n.target.dispatchEvent(r), ln = null;
			} else return t = Tt(n), t !== null && op(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function kp(e, t, n) {
		Op(e) && n.delete(t);
	}
	function Ap() {
		gp = !1, _p !== null && Op(_p) && (_p = null), vp !== null && Op(vp) && (vp = null), yp !== null && Op(yp) && (yp = null), bp.forEach(kp), xp.forEach(kp);
	}
	function jp(e, n) {
		e.blockedOn === n && (e.blockedOn = null, gp || (gp = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Ap)));
	}
	var Mp = null;
	function Np(e) {
		Mp !== e && (Mp = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			Mp === e && (Mp = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (mp(r || n) === null) continue;
					break;
				}
				var a = Tt(n);
				a !== null && (e.splice(t, 3), t -= 3, Ds(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Pp(e) {
		function t(t) {
			return jp(t, e);
		}
		_p !== null && jp(_p, e), vp !== null && jp(vp, e), yp !== null && jp(yp, e), bp.forEach(t), xp.forEach(t);
		for (var n = 0; n < Sp.length; n++) {
			var r = Sp[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Sp.length && (n = Sp[0], n.blockedOn === null);) Dp(n), n.blockedOn === null && Sp.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[gt] || null;
			if (typeof a == "function") o || Np(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[gt] || null) s = o.formAction;
					else if (mp(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Np(n);
			}
		}
	}
	function Fp() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Ip(e) {
		this._internalRoot = e;
	}
	Lp.prototype.render = Ip.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(i(409));
		var n = t.current;
		rp(n, hu(), e, t, null, null);
	}, Lp.prototype.unmount = Ip.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			rp(e.current, 2, null, e, null, null), Su(), t[_t] = null;
		}
	};
	function Lp(e) {
		this._internalRoot = e;
	}
	Lp.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = ft();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Sp.length && t !== 0 && t < Sp[n].priority; n++);
			Sp.splice(n, 0, e), n === 0 && Dp(e);
		}
	};
	var Rp = n.version;
	if (Rp !== "19.2.7") throw Error(i(527, Rp, "19.2.7"));
	T.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(i(188)) : (e = Object.keys(e).join(","), Error(i(268, e)));
		return e = d(t), e = e === null ? null : f(e), e = e === null ? null : e.stateNode, e;
	};
	var zp = {
		bundleType: 0,
		version: "19.2.7",
		rendererPackageName: "react-dom",
		currentDispatcherRef: w,
		reconcilerVersion: "19.2.7"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Bp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Bp.isDisabled && Bp.supportsFiber) try {
			Ue = Bp.inject(zp), We = Bp;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!o(e)) throw Error(i(299));
		var n = !1, r = "", a = Xs, s = Zs, c = Qs;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (s = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = tp(e, 1, !1, null, null, n, r, null, a, s, c, Fp), e[_t] = t.current, wd(e), new Ip(t);
	};
})), nr = /* @__PURE__ */ i(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = tr();
}));
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.0/node_modules/@tanstack/query-core/build/modern/hydration.js
function rr(e) {
	return e;
}
function ir(e, t, n) {
	if (typeof t != "object" || !t) return;
	let r = e.getMutationCache(), i = e.getQueryCache(), a = n?.defaultOptions?.deserializeData ?? e.getDefaultOptions().hydrate?.deserializeData ?? rr, o = t.mutations || [], s = t.queries || [];
	o.forEach(({ state: t, ...i }) => {
		r.build(e, {
			...e.getDefaultOptions().hydrate?.mutations,
			...n?.defaultOptions?.mutations,
			...i
		}, t);
	}), s.forEach(({ queryKey: t, state: r, queryHash: o, meta: s, promise: c, dehydratedAt: l, queryType: u }) => {
		let d = c ? Ge(c) : void 0, f = r.data === void 0 ? d?.data : r.data, p = f === void 0 ? f : a(f), m = i.get(o), h = m?.state.status === "pending", g = m?.state.fetchStatus === "fetching";
		if (m) {
			let e = d && l !== void 0 && l > m.state.dataUpdatedAt;
			if (r.dataUpdatedAt > m.state.dataUpdatedAt || e) {
				let { fetchStatus: e, ...t } = r;
				m.setState({
					...t,
					data: p,
					...r.status === "pending" && p !== void 0 && {
						status: "success",
						...!g && { fetchStatus: "idle" }
					}
				});
			}
		} else m = i.build(e, {
			...e.getDefaultOptions().hydrate?.queries,
			...n?.defaultOptions?.queries,
			queryKey: t,
			queryHash: o,
			meta: s,
			_type: u
		}, {
			...r,
			data: p,
			fetchStatus: "idle",
			status: r.status === "pending" && p !== void 0 ? "success" : r.status
		});
		c && !d && !h && !g && (l === void 0 || l > m.state.dataUpdatedAt) && m.fetch(void 0, { initialPromise: Promise.resolve(c).then(a) }).catch(Xe);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.0/node_modules/@tanstack/query-core/build/modern/mutationCache.js
var ar = class extends Ne {
	constructor(e = {}) {
		super(), this.config = e, this.#e = /* @__PURE__ */ new Set(), this.#t = /* @__PURE__ */ new Map(), this.#n = 0;
	}
	#e;
	#t;
	#n;
	build(e, t, n) {
		let r = new Ze({
			client: e,
			mutationCache: this,
			mutationId: ++this.#n,
			options: e.defaultMutationOptions(t),
			state: n
		});
		return this.add(r), r;
	}
	add(e) {
		this.#e.add(e);
		let t = or(e);
		if (typeof t == "string") {
			let n = this.#t.get(t);
			n ? n.push(e) : this.#t.set(t, [e]);
		}
		this.notify({
			type: "added",
			mutation: e
		});
	}
	remove(e) {
		if (this.#e.delete(e)) {
			let t = or(e);
			if (typeof t == "string") {
				let n = this.#t.get(t);
				if (n) if (n.length > 1) {
					let t = n.indexOf(e);
					t !== -1 && n.splice(t, 1);
				} else n[0] === e && this.#t.delete(t);
			}
		}
		this.notify({
			type: "removed",
			mutation: e
		});
	}
	canRun(e) {
		let t = or(e);
		if (typeof t == "string") {
			let n = this.#t.get(t)?.find((e) => e.state.status === "pending");
			return !n || n === e;
		} else return !0;
	}
	runNext(e) {
		let t = or(e);
		return typeof t == "string" ? (this.#t.get(t)?.find((t) => t !== e && t.state.isPaused))?.continue() ?? Promise.resolve() : Promise.resolve();
	}
	clear() {
		Be.batch(() => {
			this.#e.forEach((e) => {
				this.notify({
					type: "removed",
					mutation: e
				});
			}), this.#e.clear(), this.#t.clear();
		});
	}
	getAll() {
		return Array.from(this.#e);
	}
	find(e) {
		let t = {
			exact: !0,
			...e
		};
		return this.getAll().find((e) => Fe(t, e));
	}
	findAll(e = {}) {
		return this.getAll().filter((t) => Fe(e, t));
	}
	notify(e) {
		Be.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	resumePausedMutations() {
		let e = this.getAll().filter((e) => e.state.isPaused);
		return Be.batch(() => Promise.all(e.map((e) => e.continue().catch(Xe))));
	}
};
function or(e) {
	return e.options.scope?.id;
}
//#endregion
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.0/node_modules/@tanstack/query-core/build/modern/queryCache.js
var sr = class extends Ne {
	constructor(e = {}) {
		super(), this.config = e, this.#e = /* @__PURE__ */ new Map();
	}
	#e;
	build(e, t, n) {
		let r = t.queryKey, i = t.queryHash ?? Ve(r, t), a = this.get(i);
		return a || (a = new Re({
			client: e,
			queryKey: r,
			queryHash: i,
			options: e.defaultQueryOptions(t),
			state: n,
			defaultOptions: e.getQueryDefaults(r)
		}), this.add(a)), a;
	}
	add(e) {
		this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
			type: "added",
			query: e
		}));
	}
	remove(e) {
		let t = this.#e.get(e.queryHash);
		t && (e.destroy(), t === e && this.#e.delete(e.queryHash), this.notify({
			type: "removed",
			query: e
		}));
	}
	clear() {
		Be.batch(() => {
			this.getAll().forEach((e) => {
				this.remove(e);
			});
		});
	}
	get(e) {
		return this.#e.get(e);
	}
	getAll() {
		return [...this.#e.values()];
	}
	find(e) {
		let t = {
			exact: !0,
			...e
		};
		return this.getAll().find((e) => qe(t, e));
	}
	findAll(e = {}) {
		let t = this.getAll();
		return Object.keys(e).length > 0 ? t.filter((t) => qe(e, t)) : t;
	}
	notify(e) {
		Be.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	onFocus() {
		Be.batch(() => {
			this.getAll().forEach((e) => {
				e.onFocus();
			});
		});
	}
	onOnline() {
		Be.batch(() => {
			this.getAll().forEach((e) => {
				e.onOnline();
			});
		});
	}
}, cr = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor(e = {}) {
		this.#e = e.queryCache || new sr(), this.#t = e.mutationCache || new ar(), this.#n = e.defaultOptions || {}, this.#r = /* @__PURE__ */ new Map(), this.#i = /* @__PURE__ */ new Map(), this.#a = 0;
	}
	mount() {
		this.#a++, this.#a === 1 && (this.#o = Pe.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#e.onFocus());
		}), this.#s = ze.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#e.onOnline());
		}));
	}
	unmount() {
		this.#a--, this.#a === 0 && (this.#o?.(), this.#o = void 0, this.#s?.(), this.#s = void 0);
	}
	isFetching(e) {
		return this.#e.findAll({
			...e,
			fetchStatus: "fetching"
		}).length;
	}
	isMutating(e) {
		return this.#t.findAll({
			...e,
			status: "pending"
		}).length;
	}
	getQueryData(e) {
		let t = this.defaultQueryOptions({ queryKey: e });
		return this.#e.get(t.queryHash)?.state.data;
	}
	ensureQueryData(e) {
		let t = this.defaultQueryOptions(e), n = this.#e.build(this, t), r = n.state.data;
		return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Ye(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r));
	}
	getQueriesData(e) {
		return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
	}
	setQueryData(e, t, n) {
		let r = this.defaultQueryOptions({ queryKey: e }), i = this.#e.get(r.queryHash)?.state.data, a = Ue(t, i);
		if (a !== void 0) return this.#e.build(this, r).setData(a, {
			...n,
			manual: !0
		});
	}
	setQueriesData(e, t, n) {
		return Be.batch(() => this.#e.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]));
	}
	getQueryState(e) {
		let t = this.defaultQueryOptions({ queryKey: e });
		return this.#e.get(t.queryHash)?.state;
	}
	removeQueries(e) {
		let t = this.#e;
		Be.batch(() => {
			t.findAll(e).forEach((e) => {
				t.remove(e);
			});
		});
	}
	resetQueries(e, t) {
		let n = this.#e;
		return Be.batch(() => (n.findAll(e).forEach((e) => {
			e.reset();
		}), this.refetchQueries({
			type: "active",
			...e
		}, t)));
	}
	cancelQueries(e, t = {}) {
		let n = {
			revert: !0,
			...t
		}, r = Be.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
		return Promise.all(r).then(Xe).catch(Xe);
	}
	invalidateQueries(e, t = {}) {
		return Be.batch(() => (this.#e.findAll(e).forEach((e) => {
			e.invalidate();
		}), e?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
			...e,
			type: e?.refetchType ?? e?.type ?? "active"
		}, t)));
	}
	refetchQueries(e, t = {}) {
		let n = {
			...t,
			cancelRefetch: t.cancelRefetch ?? !0
		}, r = Be.batch(() => this.#e.findAll(e).filter((e) => !e.isDisabled() && !e.isStatic()).map((e) => {
			let t = e.fetch(void 0, n);
			return n.throwOnError || (t = t.catch(Xe)), e.state.fetchStatus === "paused" ? Promise.resolve() : t;
		}));
		return Promise.all(r).then(Xe);
	}
	fetchQuery(e) {
		let t = this.defaultQueryOptions(e);
		t.retry === void 0 && (t.retry = !1);
		let n = this.#e.build(this, t);
		return n.isStaleByTime(Ye(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
	}
	prefetchQuery(e) {
		return this.fetchQuery(e).then(Xe).catch(Xe);
	}
	fetchInfiniteQuery(e) {
		return e._type = "infinite", this.fetchQuery(e);
	}
	prefetchInfiniteQuery(e) {
		return this.fetchInfiniteQuery(e).then(Xe).catch(Xe);
	}
	ensureInfiniteQueryData(e) {
		return e._type = "infinite", this.ensureQueryData(e);
	}
	resumePausedMutations() {
		return ze.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
	}
	getQueryCache() {
		return this.#e;
	}
	getMutationCache() {
		return this.#t;
	}
	getDefaultOptions() {
		return this.#n;
	}
	setDefaultOptions(e) {
		this.#n = e;
	}
	setQueryDefaults(e, t) {
		this.#r.set(He(e), {
			queryKey: e,
			defaultOptions: t
		});
	}
	getQueryDefaults(e) {
		let t = [...this.#r.values()], n = {};
		return t.forEach((t) => {
			Le(e, t.queryKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	setMutationDefaults(e, t) {
		this.#i.set(He(e), {
			mutationKey: e,
			defaultOptions: t
		});
	}
	getMutationDefaults(e) {
		let t = [...this.#i.values()], n = {};
		return t.forEach((t) => {
			Le(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	defaultQueryOptions(e) {
		if (e._defaulted) return e;
		let t = {
			...this.#n.queries,
			...this.getQueryDefaults(e.queryKey),
			...e,
			_defaulted: !0
		};
		return t.queryHash ||= Ve(t.queryKey, t), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === Je && (t.enabled = !1), t;
	}
	defaultMutationOptions(e) {
		return e?._defaulted ? e : {
			...this.#n.mutations,
			...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
			...e,
			_defaulted: !0
		};
	}
	clear() {
		this.#e.clear(), this.#t.clear();
	}
}, lr = ({ children: e, options: t = {}, state: n, queryClient: r }) => {
	let i = We(r), a = A.useRef(t);
	A.useEffect(() => {
		a.current = t;
	});
	let o = A.useMemo(() => {
		if (n) {
			if (typeof n != "object") return;
			let e = i.getQueryCache(), t = n.queries || [], r = [], o = [];
			for (let n of t) {
				let t = e.get(n.queryHash);
				t ? (n.state.dataUpdatedAt > t.state.dataUpdatedAt || n.promise && t.state.status !== "pending" && t.state.fetchStatus !== "fetching" && n.dehydratedAt !== void 0 && n.dehydratedAt > t.state.dataUpdatedAt) && o.push(n) : r.push(n);
			}
			if (r.length > 0 && ir(i, { queries: r }, a.current), o.length > 0) return o;
		}
	}, [i, n]);
	return A.useEffect(() => {
		o && ir(i, { queries: o }, a.current);
	}, [i, o]), e;
}, ur = /* @__PURE__ */ e(me(), 1);
function dr(e) {
	return /* @__PURE__ */ A.createElement(Oe, {
		flushSync: ur.flushSync,
		...e
	});
}
Se();
//#endregion
//#region src/lib/components/Bootstrap.tsx
var j = _t(), fr = new cr({ defaultOptions: { queries: { staleTime: 1e3 * 60 * 5 } } }), pr = ({ router: e, head: t, hydrate: n = !1 }) => /* @__PURE__ */ (0, j.jsx)(A.StrictMode, { children: /* @__PURE__ */ (0, j.jsx)(Ie, {
	client: fr,
	children: /* @__PURE__ */ (0, j.jsx)(lr, {
		state: n ? window.ZUDOKU_DATA : void 0,
		children: /* @__PURE__ */ (0, j.jsx)(Qn, {
			head: t,
			children: /* @__PURE__ */ (0, j.jsx)(Ct, {
				value: {
					status: 200,
					bypassProtection: !1
				},
				children: /* @__PURE__ */ (0, j.jsx)(dr, { router: e })
			})
		})
	})
}) }), mr = Pt("circle-fading-arrow-up", [
	["path", {
		d: "M12 2a10 10 0 0 1 7.38 16.75",
		key: "175t95"
	}],
	["path", {
		d: "m16 12-4-4-4 4",
		key: "177agl"
	}],
	["path", {
		d: "M12 16V8",
		key: "1sbj14"
	}],
	["path", {
		d: "M2.5 8.875a10 10 0 0 0-.5 3",
		key: "1vce0s"
	}],
	["path", {
		d: "M2.83 16a10 10 0 0 0 2.43 3.4",
		key: "o3fkw4"
	}],
	["path", {
		d: "M4.636 5.235a10 10 0 0 1 .891-.857",
		key: "1szpfk"
	}],
	["path", {
		d: "M8.644 21.42a10 10 0 0 0 7.631-.38",
		key: "9yhvd4"
	}]
]), hr = Pt("circle-play", [["path", {
	d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
	key: "kmsa83"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), gr = Pt("circle-x", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "m15 9-6 6",
		key: "1uzhvr"
	}],
	["path", {
		d: "m9 9 6 6",
		key: "z0biqf"
	}]
]), _r = Pt("lightbulb", [
	["path", {
		d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
		key: "1gvzjb"
	}],
	["path", {
		d: "M9 18h6",
		key: "x1upvd"
	}],
	["path", {
		d: "M10 22h4",
		key: "ceow96"
	}]
]), vr = Pt("lock", [["rect", {
	width: "18",
	height: "11",
	x: "3",
	y: "11",
	rx: "2",
	ry: "2",
	key: "1w4ew1"
}], ["path", {
	d: "M7 11V7a5 5 0 0 1 10 0v4",
	key: "fwvmzm"
}]]), yr = Pt("megaphone", [
	["path", {
		d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
		key: "q8bfy3"
	}],
	["path", {
		d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",
		key: "1853fq"
	}],
	["path", {
		d: "M8 6v8",
		key: "15ugcq"
	}]
]), br = Pt("menu", [
	["path", {
		d: "M4 5h16",
		key: "1tepv9"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 19h16",
		key: "1djgab"
	}]
]), xr = Pt("moon", [["path", {
	d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
	key: "kfwtm"
}]]), Sr = Pt("panel-left", [["rect", {
	width: "18",
	height: "18",
	x: "3",
	y: "3",
	rx: "2",
	key: "afitv7"
}], ["path", {
	d: "M9 3v18",
	key: "fh3hqa"
}]]), Cr = Pt("panel-right-close", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M15 3v18",
		key: "14nvp0"
	}],
	["path", {
		d: "m8 9 3 3-3 3",
		key: "12hl5m"
	}]
]), wr = Pt("rocket", [
	["path", {
		d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
		key: "qeys4"
	}],
	["path", {
		d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",
		key: "u4xsad"
	}],
	["path", {
		d: "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",
		key: "676m9"
	}],
	["path", {
		d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",
		key: "92ym6u"
	}]
]), Tr = Pt("shield-alert", [
	["path", {
		d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
		key: "oel41y"
	}],
	["path", {
		d: "M12 8v4",
		key: "1got3b"
	}],
	["path", {
		d: "M12 16h.01",
		key: "1drbdi"
	}]
]), Er = Pt("sparkles", [
	["path", {
		d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
		key: "1s2grr"
	}],
	["path", {
		d: "M20 2v4",
		key: "1rf3ol"
	}],
	["path", {
		d: "M22 4h-4",
		key: "gwowj6"
	}],
	["circle", {
		cx: "4",
		cy: "20",
		r: "2",
		key: "6kqj1y"
	}]
]), Dr = Pt("sun", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "4",
		key: "4exip2"
	}],
	["path", {
		d: "M12 2v2",
		key: "tus03m"
	}],
	["path", {
		d: "M12 20v2",
		key: "1lh1kg"
	}],
	["path", {
		d: "m4.93 4.93 1.41 1.41",
		key: "149t6j"
	}],
	["path", {
		d: "m17.66 17.66 1.41 1.41",
		key: "ptbguv"
	}],
	["path", {
		d: "M2 12h2",
		key: "1t8f8n"
	}],
	["path", {
		d: "M20 12h2",
		key: "1q8mjw"
	}],
	["path", {
		d: "m6.34 17.66-1.41 1.41",
		key: "1m8zz5"
	}],
	["path", {
		d: "m19.07 4.93-1.41 1.41",
		key: "1shlcs"
	}]
]), Or = Pt("triangle-alert", [
	["path", {
		d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
		key: "wmoenq"
	}],
	["path", {
		d: "M12 9v4",
		key: "juzpu7"
	}],
	["path", {
		d: "M12 17h.01",
		key: "p32p05"
	}]
]), kr = Pt("undo", [["path", {
	d: "M3 7v6h6",
	key: "1v2h90"
}], ["path", {
	d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",
	key: "1r6uu6"
}]]), Ar = Pt("unlink", [
	["path", {
		d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",
		key: "yqzxt4"
	}],
	["path", {
		d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",
		key: "4qinb0"
	}],
	["line", {
		x1: "8",
		x2: "8",
		y1: "2",
		y2: "5",
		key: "1041cp"
	}],
	["line", {
		x1: "2",
		x2: "5",
		y1: "8",
		y2: "8",
		key: "14m1p5"
	}],
	["line", {
		x1: "16",
		x2: "16",
		y1: "19",
		y2: "22",
		key: "rzdirn"
	}],
	["line", {
		x1: "19",
		x2: "22",
		y1: "16",
		y2: "16",
		key: "ox905f"
	}]
]), jr = Pt("zap", [["path", {
	d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
	key: "1xq2db"
}]]), Mr = class extends Error {
	developerHint;
	title;
	constructor(e, { developerHint: t, title: n, cause: r } = {}) {
		super(e, { cause: r }), this.name = "ZudokuError", this.title = n, this.developerHint = t;
	}
}, Nr, Pr = {}, Fr = (e) => {
	if (e.errors?.[0]) throw new Mr(e.errors[0].message, { developerHint: "Check your configuration value `apis.type` and `apis.input` in the Zudoku config." });
}, Ir = class {
	config;
	constructor(e) {
		e.schemaImports && Object.assign(Pr, e.schemaImports), this.config = e;
	}
	#e = async () => (Nr ||= import("./createServer-CVoCvfSY.js").then((e) => e.createServer({
		...this.config,
		schemaImports: Pr
	})), Nr);
	#t = async (e) => this.config.server ? fetch(this.config.server, e) : (await this.#e()).fetch("http://localhost/graphql", e);
	fetch = async (e, t) => {
		let n = e.match(/query (\w+)/)?.[1], r = await this.#t({
			method: "POST",
			body: JSON.stringify({
				query: e,
				variables: t,
				operationName: n
			}),
			headers: { "Content-Type": "application/json" }
		});
		if (!r.ok) throw Error("Network response was not ok");
		let i = await r.json();
		return Fr(i), i.data;
	};
}, Lr = (0, A.createContext)(void 0), Rr = ({ children: e, client: t }) => /* @__PURE__ */ (0, j.jsx)(Lr.Provider, {
	value: t,
	children: e
}), zr = (e, t, ...[n]) => ({
	queryFn: () => e.fetch(t, n),
	queryKey: [t.toString().replace(/\s+/g, " ").trim(), n]
}), Br = (e, ...[t]) => {
	let n = (0, A.use)(Lr);
	if (n === void 0) throw Error("useGraphQL must be used within a GraphQLProvider");
	return zr(n, e, ...t === void 0 ? [] : [t]);
}, Vr = class extends String {
	__apiType;
	value;
	__meta__;
	constructor(e, t) {
		super(e), this.value = e, this.__meta__ = t;
	}
	toString() {
		return this.value;
	}
}, Hr = new Vr("\n    fragment OperationsFragment on OperationItem {\n  slug\n  summary\n  method\n  description\n  operationId\n  contentTypes\n  path\n  deprecated\n  extensions\n  servers {\n    url\n    description\n  }\n  parameters {\n    name\n    in\n    description\n    required\n    schema\n    style\n    explode\n    allowReserved\n    examples {\n      name\n      description\n      externalValue\n      value\n      summary\n    }\n  }\n  security {\n    schemes {\n      scopes\n      scheme {\n        name\n        type\n        description\n        in\n        paramName\n        scheme\n        bearerFormat\n        openIdConnectUrl\n        flows {\n          implicit {\n            authorizationUrl\n            scopes {\n              name\n              description\n            }\n          }\n          password {\n            tokenUrl\n            scopes {\n              name\n              description\n            }\n          }\n          clientCredentials {\n            tokenUrl\n            scopes {\n              name\n              description\n            }\n          }\n          authorizationCode {\n            authorizationUrl\n            tokenUrl\n            scopes {\n              name\n              description\n            }\n          }\n        }\n      }\n    }\n  }\n  requestBody {\n    content {\n      mediaType\n      encoding {\n        name\n      }\n      examples {\n        name\n        description\n        externalValue\n        value\n        summary\n      }\n      schema\n    }\n    description\n    required\n  }\n  responses {\n    statusCode\n    links\n    description\n    content {\n      examples {\n        name\n        description\n        externalValue\n        value\n        summary\n      }\n      mediaType\n      encoding {\n        name\n      }\n      schema\n    }\n  }\n}\n    ", { fragmentName: "OperationsFragment" }), Ur = {
	"\n  query ServersQuery($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      url\n      servers {\n        url\n      }\n    }\n  }\n": new Vr("\n    query ServersQuery($input: JSON!, $type: SchemaType!) {\n  schema(input: $input, type: $type) {\n    url\n    servers {\n      url\n    }\n  }\n}\n    "),
	"\n  fragment OperationsFragment on OperationItem {\n    slug\n    summary\n    method\n    description\n    operationId\n    contentTypes\n    path\n    deprecated\n    extensions\n    servers {\n      url\n      description\n    }\n    parameters {\n      name\n      in\n      description\n      required\n      schema\n      style\n      explode\n      allowReserved\n      examples {\n        name\n        description\n        externalValue\n        value\n        summary\n      }\n    }\n    security {\n      schemes {\n        scopes\n        scheme {\n          name\n          type\n          description\n          in\n          paramName\n          scheme\n          bearerFormat\n          openIdConnectUrl\n          flows {\n            implicit {\n              authorizationUrl\n              scopes {\n                name\n                description\n              }\n            }\n            password {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            clientCredentials {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            authorizationCode {\n              authorizationUrl\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n          }\n        }\n      }\n    }\n    requestBody {\n      content {\n        mediaType\n        encoding {\n          name\n        }\n        examples {\n          name\n          description\n          externalValue\n          value\n          summary\n        }\n        schema\n      }\n      description\n      required\n    }\n    responses {\n      statusCode\n      links\n      description\n      content {\n        examples {\n          name\n          description\n          externalValue\n          value\n          summary\n        }\n        mediaType\n        encoding {\n          name\n        }\n        schema\n      }\n    }\n  }\n": Hr,
	"\n  query OperationsForTag(\n    $input: JSON!\n    $type: SchemaType!\n    $tag: String\n    $untagged: Boolean\n  ) {\n    schema(input: $input, type: $type) {\n      servers {\n        url\n      }\n      description\n      summary\n      title\n      url\n      version\n      tag(slug: $tag, untagged: $untagged) {\n        name\n        description\n        operations {\n          slug\n          ...OperationsFragment\n        }\n        extensions\n        next {\n          name\n          slug\n          extensions\n        }\n        prev {\n          name\n          slug\n          extensions\n        }\n      }\n    }\n  }\n": new Vr("\n    query OperationsForTag($input: JSON!, $type: SchemaType!, $tag: String, $untagged: Boolean) {\n  schema(input: $input, type: $type) {\n    servers {\n      url\n    }\n    description\n    summary\n    title\n    url\n    version\n    tag(slug: $tag, untagged: $untagged) {\n      name\n      description\n      operations {\n        slug\n        ...OperationsFragment\n      }\n      extensions\n      next {\n        name\n        slug\n        extensions\n      }\n      prev {\n        name\n        slug\n        extensions\n      }\n    }\n  }\n}\n    fragment OperationsFragment on OperationItem {\n  slug\n  summary\n  method\n  description\n  operationId\n  contentTypes\n  path\n  deprecated\n  extensions\n  servers {\n    url\n    description\n  }\n  parameters {\n    name\n    in\n    description\n    required\n    schema\n    style\n    explode\n    allowReserved\n    examples {\n      name\n      description\n      externalValue\n      value\n      summary\n    }\n  }\n  security {\n    schemes {\n      scopes\n      scheme {\n        name\n        type\n        description\n        in\n        paramName\n        scheme\n        bearerFormat\n        openIdConnectUrl\n        flows {\n          implicit {\n            authorizationUrl\n            scopes {\n              name\n              description\n            }\n          }\n          password {\n            tokenUrl\n            scopes {\n              name\n              description\n            }\n          }\n          clientCredentials {\n            tokenUrl\n            scopes {\n              name\n              description\n            }\n          }\n          authorizationCode {\n            authorizationUrl\n            tokenUrl\n            scopes {\n              name\n              description\n            }\n          }\n        }\n      }\n    }\n  }\n  requestBody {\n    content {\n      mediaType\n      encoding {\n        name\n      }\n      examples {\n        name\n        description\n        externalValue\n        value\n        summary\n      }\n      schema\n    }\n    description\n    required\n  }\n  responses {\n    statusCode\n    links\n    description\n    content {\n      examples {\n        name\n        description\n        externalValue\n        value\n        summary\n      }\n      mediaType\n      encoding {\n        name\n      }\n      schema\n    }\n  }\n}"),
	"\n  query SchemaInfo($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      servers {\n        url\n        description\n      }\n      license {\n        name\n        url\n        identifier\n      }\n      termsOfService\n      externalDocs {\n        description\n        url\n      }\n      contact {\n        name\n        url\n        email\n      }\n      description\n      summary\n      title\n      url\n      version\n      tags {\n        name\n        description\n        extensions\n      }\n      components {\n        securitySchemes {\n          name\n          type\n          description\n          in\n          paramName\n          scheme\n          bearerFormat\n          openIdConnectUrl\n          flows {\n            implicit {\n              authorizationUrl\n              scopes {\n                name\n                description\n              }\n            }\n            password {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            clientCredentials {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            authorizationCode {\n              authorizationUrl\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n          }\n        }\n      }\n      webhooks {\n        name\n        method\n        summary\n        description\n      }\n    }\n  }\n": new Vr("\n    query SchemaInfo($input: JSON!, $type: SchemaType!) {\n  schema(input: $input, type: $type) {\n    servers {\n      url\n      description\n    }\n    license {\n      name\n      url\n      identifier\n    }\n    termsOfService\n    externalDocs {\n      description\n      url\n    }\n    contact {\n      name\n      url\n      email\n    }\n    description\n    summary\n    title\n    url\n    version\n    tags {\n      name\n      description\n      extensions\n    }\n    components {\n      securitySchemes {\n        name\n        type\n        description\n        in\n        paramName\n        scheme\n        bearerFormat\n        openIdConnectUrl\n        flows {\n          implicit {\n            authorizationUrl\n            scopes {\n              name\n              description\n            }\n          }\n          password {\n            tokenUrl\n            scopes {\n              name\n              description\n            }\n          }\n          clientCredentials {\n            tokenUrl\n            scopes {\n              name\n              description\n            }\n          }\n          authorizationCode {\n            authorizationUrl\n            tokenUrl\n            scopes {\n              name\n              description\n            }\n          }\n        }\n      }\n    }\n    webhooks {\n      name\n      method\n      summary\n      description\n    }\n  }\n}\n    "),
	"\n  query GetSchemas($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      title\n      description\n      summary\n      components {\n        schemas {\n          name\n          schema\n          extensions\n        }\n      }\n    }\n  }\n": new Vr("\n    query GetSchemas($input: JSON!, $type: SchemaType!) {\n  schema(input: $input, type: $type) {\n    title\n    description\n    summary\n    components {\n      schemas {\n        name\n        schema\n        extensions\n      }\n    }\n  }\n}\n    "),
	"\n  query getServerQuery($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      url\n      servers {\n        url\n      }\n    }\n  }\n": new Vr("\n    query getServerQuery($input: JSON!, $type: SchemaType!) {\n  schema(input: $input, type: $type) {\n    url\n    servers {\n      url\n    }\n  }\n}\n    "),
	"\n  query GetNavigationOperations($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      extensions\n      description\n      tags {\n        slug\n        name\n        extensions\n        operations {\n          summary\n          slug\n          method\n          operationId\n          path\n        }\n      }\n      components {\n        schemas {\n          __typename\n        }\n      }\n    }\n  }\n": new Vr("\n    query GetNavigationOperations($input: JSON!, $type: SchemaType!) {\n  schema(input: $input, type: $type) {\n    extensions\n    description\n    tags {\n      slug\n      name\n      extensions\n      operations {\n        summary\n        slug\n        method\n        operationId\n        path\n      }\n    }\n    components {\n      schemas {\n        __typename\n      }\n    }\n  }\n}\n    "),
	"\n  query SchemaWarmup($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      openapi\n    }\n  }\n": new Vr("\n    query SchemaWarmup($input: JSON!, $type: SchemaType!) {\n  schema(input: $input, type: $type) {\n    openapi\n  }\n}\n    ")
};
function Wr(e) {
	return Ur[e] ?? {};
}
//#endregion
//#region src/lib/plugins/openapi/util/buildTagCategories.ts
var Gr = ({ tagCategories: e, tagGroups: t, expandAllTags: n }) => {
	let r = /* @__PURE__ */ new Set(), i = t.flatMap((t) => {
		let i = e.get(t.name), a = i?.type === "category" ? i : void 0;
		a && r.add(t.name);
		let o = t.tags.flatMap((n) => {
			if (n === t.name) return [];
			let i = e.get(n);
			return i ? (r.add(n), i) : [];
		});
		return !a && o.length === 0 ? [] : {
			...a,
			type: "category",
			label: a?.label ?? t.name,
			items: [...a?.items ?? [], ...o],
			collapsible: a?.collapsible ?? !0,
			collapsed: a?.collapsed ?? !n
		};
	}), a = Array.from(e.entries()).filter(([e]) => !r.has(e)).map(([, e]) => e);
	return [...i, ...a];
}, Kr = {
	get: "green",
	post: "blue",
	put: "yellow",
	delete: "red",
	patch: "purple",
	options: "gray",
	head: "gray"
}, qr = ({ label: e, path: t, operations: n, collapsible: r, collapsed: i }) => ({
	type: "category",
	label: e,
	link: {
		type: "doc",
		path: t,
		file: t,
		label: e
	},
	collapsible: r,
	collapsed: i,
	items: n.map((e) => ({
		type: "link",
		label: e.summary ?? e.path,
		to: `${t}#${e.slug}`,
		badge: {
			label: e.method,
			color: Kr[e.method.toLowerCase()],
			invert: !0
		}
	}))
}), Jr = (0, A.createContext)(void 0), Yr = Jr.Provider, Xr = () => {
	let e = (0, A.useContext)(Jr);
	if (!e) throw Error("useOasConfig must be used within a OasConfigProvider");
	return e.config;
}, Zr = (e) => ({
	path: e.routePath,
	async lazy() {
		let { OasProvider: t } = await import("./OasProvider-CxDVxzOe.js");
		return { element: /* @__PURE__ */ (0, j.jsx)(t, {
			basePath: e.basePath,
			version: e.version,
			client: e.client,
			config: e.config
		}) };
	},
	children: e.routes
}), Qr = ({ path: e, tag: t, untagged: n }) => ({
	path: e,
	async lazy() {
		let { OperationList: e } = await import("./OperationList-DeQ7Jb6o.js");
		return { element: /* @__PURE__ */ (0, j.jsx)(e, {
			tag: t,
			untagged: n
		}) };
	}
}), $r = ({ render: e, path: t }) => {
	let { type: n, input: r } = Xr(), { tag: i } = _e(), a = be(), { data: { schema: o } } = we(Br(ci, {
		type: n,
		input: r
	})), s = o.tags.at(0);
	return !i && s?.slug ? /* @__PURE__ */ (0, j.jsx)(ge, { to: {
		pathname: ke(t, { tag: s.slug }),
		search: a.search
	} }) : i && o.tags.some((e) => e.slug === i) ? e(i) : null;
}, ei = ({ path: e }) => ({
	path: e,
	async lazy() {
		let { OperationList: t } = await import("./OperationList-DeQ7Jb6o.js");
		return { element: /* @__PURE__ */ (0, j.jsx)($r, {
			path: e,
			render: (e) => /* @__PURE__ */ (0, j.jsx)(t, { tag: e })
		}) };
	}
}), ti = ({ basePath: e, hasUntaggedOperations: t = !0 }) => [...t ? [Qr({
	path: O(e, li),
	untagged: !0
})] : [], {
	path: O(e, "~schemas"),
	lazy: async () => {
		let { SchemaList: e } = await import("./SchemaList-CrO4mepa.js");
		return { element: /* @__PURE__ */ (0, j.jsx)(e, {}) };
	}
}], ni = ({ versionPath: e, tagPages: t, hasUntaggedOperations: n = !0, showInfoPage: r }) => {
	let i = t.at(0) ?? (n ? "~endpoints" : void 0), a = i ? O(e, i) : void 0;
	return [
		r === !1 ? a ? {
			index: !0,
			loader: () => Ee(a)
		} : Qr({ path: e }) : {
			index: !0,
			path: e,
			lazy: async () => {
				let { SchemaInfo: e } = await import("./SchemaInfo-CBVj2X5U.js");
				return { element: /* @__PURE__ */ (0, j.jsx)(e, {
					showInfoPage: r,
					redirectTo: a
				}) };
			}
		},
		...t.map((t) => Qr({
			path: O(e, t),
			tag: t
		})),
		...ti({
			basePath: e,
			hasUntaggedOperations: n
		})
	];
}, ri = (e) => e.type === "raw" || !Array.isArray(e.input) ? {
	versions: [],
	versionMap: {}
} : {
	versions: e.input.map((e) => e.path),
	versionMap: Object.fromEntries(e.input.map((e) => [e.path, {
		label: e.label ?? e.path,
		downloadUrl: e.downloadUrl,
		tagPages: e.tagPages
	}]))
}, ii = (e, t) => t && (!e.tagPages || e.tagPages.includes(t)) ? O(e.path, t) : e.path, ai = ({ basePath: e, config: t, client: n }) => {
	let r = t.tagPages, { versions: i } = ri(t), a = Array.isArray(t.input) ? t.input : void 0;
	return (i.length > 1 ? [void 0, ...i] : [void 0]).map((i) => {
		let o = O(e, i), s = i ? a?.find((e) => e.path === i) : a?.[0], c = s?.hasUntaggedOperations ?? !0, l = s?.tagPages ?? r;
		return Zr({
			basePath: e,
			version: i,
			routePath: o,
			routes: l ? ni({
				versionPath: o,
				tagPages: l,
				hasUntaggedOperations: c,
				showInfoPage: t.options?.showInfoPage
			}) : [ei({ path: `${o}/:tag?` }), ...ti({
				basePath: o,
				hasUntaggedOperations: c
			})],
			client: n,
			config: t
		});
	});
}, oi = (e, t) => e === !0 ? !0 : e === !1 ? !1 : t, si = (0, A.lazy)(() => import("./PlaygroundDialog-CEjHvOmj.js").then((e) => e.n).then((e) => ({ default: e.PlaygroundDialog }))), ci = Wr("\n  query GetNavigationOperations($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      extensions\n      description\n      tags {\n        slug\n        name\n        extensions\n        operations {\n          summary\n          slug\n          method\n          operationId\n          path\n        }\n      }\n      components {\n        schemas {\n          __typename\n        }\n      }\n    }\n  }\n"), li = "~endpoints", ui = (e) => {
	let t = O(e.path), n = new Ir(e);
	return {
		getHead: () => {
			if (e.type === "url" && !e.skipPreload) return (Array.isArray(e.input) ? e.input.map((e) => e.input) : [e.input]).map((e) => /* @__PURE__ */ (0, j.jsx)("link", {
				href: e,
				rel: "preload",
				as: "fetch",
				crossOrigin: "anonymous"
			}, e));
			if (e.server) return /* @__PURE__ */ (0, j.jsx)("link", {
				rel: "preconnect",
				href: e.server
			});
		},
		getMdxComponents: () => ({ OpenPlaygroundButton: ({ server: e, method: t = "get", url: n = "/", children: r, ...i }) => {
			if (!e) throw Error("Server is required");
			return /* @__PURE__ */ (0, j.jsx)(A.Suspense, { children: /* @__PURE__ */ (0, j.jsx)(si, {
				url: n,
				method: t,
				server: e,
				...i,
				children: /* @__PURE__ */ (0, j.jsx)(cn, {
					className: "gap-2 items-center",
					variant: "outline",
					children: r ?? /* @__PURE__ */ (0, j.jsxs)(j.Fragment, { children: ["Open in Playground", /* @__PURE__ */ (0, j.jsx)(hr, {
						size: 16,
						"aria-hidden": "true"
					})] })
				})
			}) });
		} }),
		getNavigation: async (r, i) => {
			if (!ye({
				path: t,
				end: !1
			}, r)) return [];
			try {
				let { versions: a } = ri(e), o = a.find((e) => ye({
					path: O(t, e),
					end: !1
				}, r)), s = o ?? a.at(0), { type: c } = e, l = zr(n, ci, {
					type: c,
					input: Array.isArray(e.input) ? e.input.find((e) => e.path === s)?.input ?? e.input[0]?.input : e.input
				}), u = await i.queryClient.ensureQueryData(l), d = Gr({
					tagCategories: new Map(u.schema.tags.filter((e) => e.name && e.operations.length > 0).map((n) => {
						if (!n.name) throw Error(`Tag ${n.slug} has no name`);
						let r = O(t, o, n.slug), i = n.extensions?.["x-zudoku-collapsed"] ?? !e.options?.expandAllTags, a = n.extensions?.["x-zudoku-collapsible"] ?? !0;
						return [n.name, qr({
							label: n.extensions?.["x-displayName"] ?? n.name,
							path: r,
							operations: n.operations,
							collapsed: i,
							collapsible: a
						})];
					})),
					tagGroups: u.schema.extensions?.["x-tagGroups"] ?? [],
					expandAllTags: e.options?.expandAllTags
				});
				oi(e.options?.showInfoPage, !!u.schema.description) && d.unshift({
					type: "link",
					to: O(t, o),
					label: "Information"
				});
				let f = u.schema.tags.find((e) => !e.name)?.operations;
				return f && f.length > 0 && d.push(qr({
					label: d.length === 0 ? "Endpoints" : "Other endpoints",
					path: O(t, o, li),
					operations: f,
					collapsed: !e.options?.expandAllTags
				})), u.schema.components?.schemas?.length && d.push({
					type: "link",
					label: "Schemas",
					to: O(t, o, "~schemas")
				}), d;
			} catch {
				return [];
			}
		},
		getRoutes: () => ai({
			basePath: t,
			config: e,
			client: n
		})
	};
}, di = [], fi = [], pi = [], mi = [], hi = [], gi = {
	note: {
		color: "var(--callout-note)",
		Icon: _
	},
	tip: {
		color: "var(--callout-tip)",
		Icon: _r
	},
	info: {
		color: "var(--callout-info)",
		Icon: _
	},
	caution: {
		color: "var(--callout-caution)",
		Icon: Or
	},
	danger: {
		color: "var(--callout-danger)",
		Icon: Tr
	},
	sparkles: {
		color: "var(--callout-sparkles)",
		Icon: Er
	},
	rocket: {
		color: "var(--callout-rocket)",
		Icon: wr
	},
	settings: {
		color: "var(--callout-settings)",
		Icon: et
	},
	zap: {
		color: "var(--callout-zap)",
		Icon: jr
	},
	lock: {
		color: "var(--callout-lock)",
		Icon: vr
	},
	megaphone: {
		color: "var(--callout-megaphone)",
		Icon: yr
	}
}, _i = ({ type: e, children: t, title: n, className: r, icon: i = !0 }) => {
	let { color: a, Icon: o } = gi[e], s = (0, A.useId)();
	return /* @__PURE__ */ (0, j.jsxs)("div", {
		role: "note",
		"aria-labelledby": n ? s : void 0,
		style: {
			"--callout-color": a,
			backgroundColor: "color-mix(in oklab, var(--callout-color) 6%, var(--background))",
			borderColor: "color-mix(in oklab, var(--callout-color) 25%, transparent)"
		},
		className: k("not-prose rounded-xl border px-4 py-3 flex gap-3 text-sm my-3 text-foreground", "[&_a]:underline [&_a]:decoration-current [&_a]:decoration-from-font [&_a]:underline-offset-4 hover:[&_a]:decoration-1", "[&_.code-block-wrapper]:border", "[&_ul]:list-disc [&_ol]:list-decimal [&_ul]:ps-4 [&_ul>li]:ps-1 [&_ul>li]:my-1", r),
		children: [i ? i === !0 ? /* @__PURE__ */ (0, j.jsx)(o, {
			className: "shrink-0 mt-0.5",
			style: { color: "var(--callout-color)" },
			size: 18,
			"aria-hidden": "true"
		}) : /* @__PURE__ */ (0, j.jsx)("span", {
			"aria-hidden": "true",
			className: "shrink-0 mt-0.5 inline-flex items-center justify-center size-[18px] [&_svg]:size-full",
			style: { color: "var(--callout-color)" },
			children: i
		}) : null, /* @__PURE__ */ (0, j.jsxs)("div", {
			className: "flex-1 min-w-0 flex flex-col gap-1",
			children: [n && /* @__PURE__ */ (0, j.jsx)("p", {
				id: s,
				className: "font-medium leading-snug",
				style: { color: "color-mix(in oklab, var(--callout-color) 70%, var(--foreground))" },
				children: n
			}), /* @__PURE__ */ (0, j.jsx)("div", {
				className: "overflow-x-auto leading-relaxed",
				children: t
			})]
		})]
	});
}, vi = () => () => {}, yi = () => (0, A.useSyncExternalStore)(vi, () => "client", () => "server") === "client", bi = (e) => yi() ? e.children : e.fallback, xi = {}, Si = A.createContext(xi);
function Ci(e) {
	let t = A.useContext(Si);
	return A.useMemo(function() {
		return typeof e == "function" ? e(t) : {
			...t,
			...e
		};
	}, [t, e]);
}
function wi(e) {
	let t;
	return t = e.disableParentContext ? typeof e.components == "function" ? e.components(xi) : e.components || xi : Ci(e.components), A.createElement(Si.Provider, { value: t }, e.children);
}
//#endregion
//#region src/lib/shiki-constants.ts
var Ti = "overflow-x-auto scrollbar not-inline", Ei = "prose dark:prose-invert typography", Di = ({ className: e, ...t }) => /* @__PURE__ */ (0, j.jsx)("div", {
	className: k(Ei, e),
	...t
}), Oi = (e) => "events" in e && typeof e.events == "object", ki = (e) => "getProfileMenuItems" in e && typeof e.getProfileMenuItems == "function", Ai = (e) => "getRoutes" in e && typeof e.getRoutes == "function", ji = (e) => "signUp" in e && typeof e.signUp == "function", Mi = (e) => "renderSearch" in e && typeof e.renderSearch == "function", Ni = (e) => "initialize" in e && typeof e.initialize == "function", Pi = (e) => "getHead" in e && typeof e.getHead == "function", Fi = (e) => "getMdxComponents" in e && typeof e.getMdxComponents == "function", Ii = (e) => "getIdentities" in e && typeof e.getIdentities == "function", Li = ({ className: e }) => {
	let t = Cn(), [n, r] = (0, A.useState)(!1), i = (0, A.useCallback)(() => r(!0), []), a = (0, A.useCallback)(() => r(!1), []);
	(0, A.useEffect)(() => {
		if (n) return;
		function e(e) {
			e.key === "k" && (e.metaKey || e.ctrlKey) && (e.preventDefault(), r(!0));
		}
		return window.addEventListener("keydown", e), () => {
			window.removeEventListener("keydown", e);
		};
	}, [n]);
	let o = t.options.plugins?.find(Mi);
	return o ? /* @__PURE__ */ (0, j.jsxs)("div", {
		className: e,
		children: [/* @__PURE__ */ (0, j.jsxs)("button", {
			type: "button",
			onClick: i,
			className: k("relative w-full md:w-56 flex items-center border bg-clip-padding h-8 rounded-lg px-3 pr-14 text-sm transition-all", "border-input text-muted-foreground bg-background hover:bg-muted/50 hover:text-foreground shadow-xs", Wt),
			children: [/* @__PURE__ */ (0, j.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, j.jsx)(wt, { size: 14 }), "Search"]
			}), /* @__PURE__ */ (0, j.jsx)(bi, { children: /* @__PURE__ */ (0, j.jsx)(Ri, {}) })]
		}), /* @__PURE__ */ (0, j.jsx)(A.Suspense, { children: o.renderSearch({
			isOpen: n,
			onClose: a
		}) })]
	}) : null;
}, Ri = () => /* @__PURE__ */ (0, j.jsxs)("kbd", {
	className: "hidden md:flex absolute inset-e-1.5 h-5 select-none items-center gap-0.5 rounded-sm border bg-muted px-1.5 font-mono text-xs font-medium",
	children: [ht() === "apple" ? /* @__PURE__ */ (0, j.jsx)("span", {
		className: "text-base",
		children: "⌘"
	}) : "CTRL+", "K"]
}), zi = () => {
	let e = be(), t = Ae(), [n, r] = he();
	return {
		location: e,
		navigate: t,
		params: _e(),
		searchParams: n,
		setSearchParams: r
	};
}, Bi = ({ slots: e = {} } = {}) => {
	let t = new Map(Object.entries(e).map(([e, t]) => [e, [{
		id: e,
		content: t,
		type: "replace",
		sequence: 0
	}]])), n = [];
	return Dn()((e, r) => ({
		items: t,
		sequences: /* @__PURE__ */ new Map(),
		getItems: (e) => r().items.get(e) ?? n,
		setSlot: (t, n, r, i) => e((e) => {
			if (r == null) return e;
			let a = new Map(e.items), o = new Map(e.sequences), s = (a.get(n) ?? []).filter((e) => e.id !== t), c = (o.get(n) ?? 0) + 1;
			o.set(n, c);
			let l = {
				id: t,
				content: r,
				type: i,
				sequence: i === "prepend" ? -c : c
			};
			if (i === "replace") {
				let e = s.filter((e) => e.type !== "replace");
				a.set(n, [...e, l]);
			} else a.set(n, [...s, l]);
			return {
				items: a,
				sequences: o
			};
		}),
		clearSlot: (t, n) => e((e) => {
			let r = new Map(e.items), i = new Map(e.sequences), a = (r.get(n) ?? []).filter((e) => e.id !== t);
			return a.length === 0 ? (r.delete(n), i.delete(n)) : r.set(n, a), {
				items: r,
				sequences: i
			};
		})
	}));
}, M = (0, A.createContext)(Bi()), N = ({ children: e, slots: t }) => {
	let n = (0, A.useRef)(Bi({ slots: t })).current;
	return /* @__PURE__ */ (0, j.jsx)(M, {
		value: n,
		children: e
	});
};
function Vi(e) {
	return ln((0, A.use)(M), e);
}
var Hi = [
	"prepend",
	"replace",
	"append"
], Ui = (e) => {
	let t = zi(), n = Vi((t) => t.getItems(e));
	return (0, A.useMemo)(() => n.length === 0 ? [] : n.toSorted((e, t) => {
		let n = Hi.indexOf(e.type) - Hi.indexOf(t.type);
		return n === 0 ? e.sequence - t.sequence : n;
	}).map((e) => typeof e.content == "function" ? /* @__PURE__ */ (0, j.jsx)(e.content, { ...t }, e.id) : /* @__PURE__ */ (0, j.jsx)(A.Fragment, { children: e.content }, e.id)), [n, t]);
}, Wi = {
	Source: ({ name: e, children: t, type: n = "replace" }) => {
		let r = (0, A.useId)(), i = Vi((e) => e.setSlot), a = Vi((e) => e.clearSlot);
		return (0, A.useLayoutEffect)(() => (i(r, e, t, n), () => a(r, e)), [
			r,
			e,
			t,
			n,
			i,
			a
		]), null;
	},
	Target: ({ name: e, fallback: t }) => {
		let n = Ui(e);
		return n.length === 0 ? t : n;
	}
}, Gi = (0, A.createContext)(null), Ki = {
	didCatch: !1,
	error: null
}, qi = class extends A.Component {
	constructor(e) {
		super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Ki;
	}
	static getDerivedStateFromError(e) {
		return {
			didCatch: !0,
			error: e
		};
	}
	resetErrorBoundary(...e) {
		let { error: t } = this.state;
		t !== null && (this.props.onReset?.({
			args: e,
			reason: "imperative-api"
		}), this.setState(Ki));
	}
	componentDidCatch(e, t) {
		this.props.onError?.(e, t);
	}
	componentDidUpdate(e, t) {
		let { didCatch: n } = this.state, { resetKeys: r } = this.props;
		n && t.error !== null && Ji(e.resetKeys, r) && (this.props.onReset?.({
			next: r,
			prev: e.resetKeys,
			reason: "keys"
		}), this.setState(Ki));
	}
	render() {
		let { children: e, fallbackRender: t, FallbackComponent: n, fallback: r } = this.props, { didCatch: i, error: a } = this.state, o = e;
		if (i) {
			let e = {
				error: a,
				resetErrorBoundary: this.resetErrorBoundary
			};
			if (typeof t == "function") o = t(e);
			else if (n) o = (0, A.createElement)(n, e);
			else if (r !== void 0) o = r;
			else throw a;
		}
		return (0, A.createElement)(Gi.Provider, { value: {
			didCatch: i,
			error: a,
			resetErrorBoundary: this.resetErrorBoundary
		} }, o);
	}
};
function Ji(e = [], t = []) {
	return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]));
}
//#endregion
//#region ../../node_modules/.pnpm/nanoevents@9.1.0/node_modules/nanoevents/index.js
var Yi = () => ({
	emit(e, ...t) {
		for (let n = this.events[e] || [], r = 0, i = n.length; r < i; r++) n[r](...t);
	},
	events: {},
	on(e, t) {
		return (this.events[e] ||= []).push(t), () => {
			this.events[e] = this.events[e]?.filter((e) => t !== e);
		};
	}
}), Xi = (e) => Object.entries(e), Zi = (e, t) => ye({
	path: e,
	end: !0
}, t) != null, Qi = (e, t) => e.some((e) => Zi(e, t)), $i = (e, t = "") => {
	if (!t || t === "/" || !e.toLowerCase().startsWith(t.toLowerCase())) return e;
	let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
	return r && r !== "/" ? e : e.slice(n) || "/";
}, ea = (e) => {
	if (e) return Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, (e) => e.auth.isAuthenticated])) : e;
}, ta = class {
	navigation;
	navigationRules;
	authentication;
	getAuthState;
	queryClient;
	options;
	env;
	notFoundPage;
	protectedRoutes;
	plugins;
	emitter = Yi();
	ssrAuth;
	initialize;
	constructor(e, t, n, r) {
		this.ssrAuth = r, this.queryClient = t, this.env = n, this.options = e, this.notFoundPage = e.site?.notFoundPage, this.plugins = e.plugins ?? [], this.authentication = this.plugins.find(ji), this.getAuthState = En.getState;
		let i = this.plugins.filter(Ni);
		this.initialize = i.length > 0 ? Promise.all(i.map((e) => e.initialize?.(this))).then(() => {}) : void 0;
		let a = Object.fromEntries(this.plugins.flatMap((e) => {
			if (!Ai(e)) return [];
			let t = e.getProtectedRoutes?.();
			return t ? Object.entries(ea(t) ?? {}) : [];
		}));
		this.protectedRoutes = {
			...a,
			...ea(e.protectedRoutes)
		}, this.navigation = e.navigation ?? [], this.navigationRules = e.navigationRules ?? [], this.plugins.forEach((e) => {
			Oi(e) && Xi(e.events).forEach(([e, t]) => {
				this.emitter.on(e, t);
			});
		}), typeof window < "u" && En.subscribe((e, t) => {
			this.emitEvent("auth", {
				prev: t,
				next: e
			});
		});
	}
	getApiIdentities = async () => (await Promise.allSettled(this.plugins.filter(Ii).map((e) => e.getIdentities(this)))).flatMap((e) => e.status === "rejected" ? (console.warn("[Zudoku] A plugin failed to provide API identities:", e.reason), []) : e.value);
	addEventListener(e, t) {
		return this.emitter.on(e, t);
	}
	emitEvent = (e, ...t) => this.emitter.emit(e, ...t);
	getPluginNavigation = async (e) => this.shouldSkipNavigationForProtected(e) ? [] : (await Promise.all(this.plugins.filter(Ai).map((t) => t.getNavigation?.(O(e), this)))).flatMap((e) => e ?? []);
	shouldSkipNavigationForProtected(e) {
		let t = Object.keys(this.protectedRoutes ?? {});
		return t.length === 0 || !Qi(t, e) ? !1 : !(typeof window > "u" ? this.ssrAuth?.profile : this.getAuthState().isAuthenticated);
	}
	getProfileMenuItems = () => this.plugins.filter((e) => ki(e)).flatMap((e) => e.getProfileMenuItems?.(this) ?? []).sort(na([
		"top",
		"middle",
		"bottom"
	])).sort((e) => e.weight ?? 0);
	signRequest = async (e) => {
		if (this.ssrAuth?.accessToken) return e.headers.set("Authorization", `Bearer ${this.ssrAuth.accessToken}`), e;
		if (!this.authentication) throw Error("No authentication provider configured");
		return await this.authentication.signRequest(e);
	};
}, na = (e) => (t, n) => e.indexOf(t.category ?? "middle") - e.indexOf(n.category ?? "middle");
//#endregion
//#region src/lib/components/DeveloperHint.tsx
(0, A.lazy)(() => import("./Markdown-DNJarfnl.js").then((e) => e.n).then((e) => ({ default: e.Markdown })));
var ra = ({ children: e, className: t }) => null;
//#endregion
//#region src/lib/errors/ErrorAlert.tsx
function ia({ error: e }) {
	let t = e instanceof Error ? e.message : "Something went wrong", n = e instanceof Mr ? e.developerHint : void 0, r = e instanceof Mr ? e.title : "Something went wrong", i = e instanceof Error ? e.stack : void 0, a = e instanceof Error ? e.cause : void 0, o = a instanceof Error ? String(a.stack) : i;
	return /* @__PURE__ */ (0, j.jsxs)(Di, {
		className: "grid grid-cols-1 max-w-none! pt-(--padding-content-top)",
		children: [
			/* @__PURE__ */ (0, j.jsx)(S, {
				level: 1,
				children: r
			}),
			"Error: ",
			t,
			n && /* @__PURE__ */ (0, j.jsx)(ra, {
				className: "mb-4",
				children: n
			}),
			o && /* @__PURE__ */ (0, j.jsx)("pre", {
				className: "max-h-[400px] [&>pre]:p-4",
				children: o
			})
		]
	});
}
//#endregion
//#region src/lib/errors/TopLevelError.tsx
function aa({ error: e }) {
	return /* @__PURE__ */ (0, j.jsx)(ia, { error: e });
}
//#endregion
//#region src/lib/components/navigation/NavigationBadge.tsx
var oa = {
	green: "bg-green-400 dark:bg-green-800",
	blue: "bg-sky-400 dark:bg-sky-800",
	yellow: "bg-yellow-400 dark:bg-yellow-800",
	red: "bg-red-400 dark:bg-red-800",
	purple: "bg-purple-400 dark:bg-purple-600",
	indigo: "bg-indigo-400 dark:bg-indigo-600",
	gray: "bg-gray-400 dark:bg-gray-600",
	outline: "border border-border rounded-md text-foreground"
}, sa = {
	green: "text-green-500 dark:text-green-600",
	blue: "text-sky-400 dark:text-sky-600",
	yellow: "text-yellow-400 dark:text-yellow-600",
	red: "text-red-400 dark:text-red-600",
	purple: "text-purple-400 dark:text-purple-600",
	indigo: "text-indigo-400 dark:text-indigo-600",
	gray: "text-gray-400 dark:text-gray-600",
	outline: ""
}, ca = ({ color: e, label: t, className: n, invert: r }) => /* @__PURE__ */ (0, j.jsx)("span", {
	className: k("flex items-center duration-200 transition-opacity text-center uppercase text-[0.65rem] leading-5 font-bold rounded-sm text-background dark:text-zinc-50 h-full", e === "outline" ? "px-3" : "mt-0.5 px-1", r ? sa[e] : oa[e], n),
	children: t
}), { getOwnPropertyNames: la, getOwnPropertySymbols: ua } = Object, { hasOwnProperty: da } = Object.prototype;
function fa(e, t) {
	return function(n, r, i) {
		return e(n, r, i) && t(n, r, i);
	};
}
function P(e) {
	return function(t, n, r) {
		if (!t || !n || typeof t != "object" || typeof n != "object") return e(t, n, r);
		let { cache: i } = r, a = i.get(t), o = i.get(n);
		if (a && o) return a === n && o === t;
		i.set(t, n), i.set(n, t);
		let s = e(t, n, r);
		return i.delete(t), i.delete(n), s;
	};
}
function pa(e) {
	return la(e).concat(ua(e));
}
var ma = Object.hasOwn || ((e, t) => da.call(e, t)), ha = "__v", ga = "__o", _a = "_owner", { getOwnPropertyDescriptor: va, keys: ya } = Object, ba = Object.is || function(e, t) {
	return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
};
function xa(e, t) {
	return e === t;
}
function Sa(e, t) {
	return e.byteLength === t.byteLength && Na(new Uint8Array(e), new Uint8Array(t));
}
function Ca(e, t, n) {
	let r = e.length;
	if (t.length !== r) return !1;
	for (; r-- > 0;) if (!n.equals(e[r], t[r], r, r, e, t, n)) return !1;
	return !0;
}
function wa(e, t) {
	return e.byteLength === t.byteLength && Na(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength));
}
function Ta(e, t) {
	return ba(e.getTime(), t.getTime());
}
function Ea(e, t) {
	return e.name === t.name && e.message === t.message && e.cause === t.cause && e.stack === t.stack;
}
function Da(e, t, n) {
	let r = e.size;
	if (r !== t.size) return !1;
	if (!r) return !0;
	let i = Array(r), a = e.entries(), o, s, c = 0;
	for (; (o = a.next()) && !o.done;) {
		let r = t.entries(), a = !1, l = 0;
		for (; (s = r.next()) && !s.done;) {
			if (i[l]) {
				l++;
				continue;
			}
			let r = o.value, u = s.value;
			if (n.equals(r[0], u[0], c, l, e, t, n) && n.equals(r[1], u[1], r[0], u[0], e, t, n)) {
				a = i[l] = !0;
				break;
			}
			l++;
		}
		if (!a) return !1;
		c++;
	}
	return !0;
}
function Oa(e, t, n) {
	let r = ya(e), i = r.length;
	if (ya(t).length !== i) return !1;
	for (; i-- > 0;) if (!Fa(e, t, n, r[i])) return !1;
	return !0;
}
function ka(e, t, n) {
	let r = pa(e), i = r.length;
	if (pa(t).length !== i) return !1;
	let a, o, s;
	for (; i-- > 0;) if (a = r[i], !Fa(e, t, n, a) || (o = va(e, a), s = va(t, a), (o || s) && (!o || !s || o.configurable !== s.configurable || o.enumerable !== s.enumerable || o.writable !== s.writable))) return !1;
	return !0;
}
function Aa(e, t) {
	return ba(e.valueOf(), t.valueOf());
}
function ja(e, t) {
	return e.source === t.source && e.flags === t.flags;
}
function Ma(e, t, n) {
	let r = e.size;
	if (r !== t.size) return !1;
	if (!r) return !0;
	let i = Array(r), a = e.values(), o, s;
	for (; (o = a.next()) && !o.done;) {
		let r = t.values(), a = !1, c = 0;
		for (; (s = r.next()) && !s.done;) {
			if (!i[c] && n.equals(o.value, s.value, o.value, s.value, e, t, n)) {
				a = i[c] = !0;
				break;
			}
			c++;
		}
		if (!a) return !1;
	}
	return !0;
}
function Na(e, t) {
	let n = e.byteLength;
	if (t.byteLength !== n || e.byteOffset !== t.byteOffset) return !1;
	for (; n-- > 0;) if (e[n] !== t[n]) return !1;
	return !0;
}
function Pa(e, t) {
	return e.hostname === t.hostname && e.pathname === t.pathname && e.protocol === t.protocol && e.port === t.port && e.hash === t.hash && e.username === t.username && e.password === t.password;
}
function Fa(e, t, n, r) {
	return (r === _a || r === ga || r === ha) && (e.$$typeof || t.$$typeof) ? !0 : ma(t, r) && n.equals(e[r], t[r], r, r, e, t, n);
}
var Ia = Object.prototype.toString;
function La(e) {
	let t = Va(e), { areArraysEqual: n, areDatesEqual: r, areFunctionsEqual: i, areMapsEqual: a, areNumbersEqual: o, areObjectsEqual: s, areRegExpsEqual: c, areSetsEqual: l, getUnsupportedCustomComparator: u } = e;
	return function(e, d, f) {
		if (e === d) return !0;
		if (e == null || d == null) return !1;
		let p = typeof e;
		if (p !== typeof d) return !1;
		if (p !== "object") return p === "number" || p === "bigint" ? o(e, d, f) : p === "function" ? i(e, d, f) : !1;
		let m = e.constructor;
		if (m !== d.constructor) return !1;
		if (m === Object) return s(e, d, f);
		if (m === Array) return n(e, d, f);
		if (m === Date) return r(e, d, f);
		if (m === RegExp) return c(e, d, f);
		if (m === Map) return a(e, d, f);
		if (m === Set) return l(e, d, f);
		if (m === Promise) return !1;
		if (Array.isArray(e)) return n(e, d, f);
		let h = Ia.call(e), g = t[h];
		if (g) return g(e, d, f);
		let _ = u && u(e, d, f, h);
		return _ ? _(e, d, f) : !1;
	};
}
function Ra({ circular: e, createCustomConfig: t, strict: n }) {
	let r = {
		areArrayBuffersEqual: Sa,
		areArraysEqual: n ? ka : Ca,
		areDataViewsEqual: wa,
		areDatesEqual: Ta,
		areErrorsEqual: Ea,
		areFunctionsEqual: xa,
		areMapsEqual: n ? fa(Da, ka) : Da,
		areNumbersEqual: ba,
		areObjectsEqual: n ? ka : Oa,
		arePrimitiveWrappersEqual: Aa,
		areRegExpsEqual: ja,
		areSetsEqual: n ? fa(Ma, ka) : Ma,
		areTypedArraysEqual: n ? fa(Na, ka) : Na,
		areUrlsEqual: Pa,
		getUnsupportedCustomComparator: void 0
	};
	if (t && (r = Object.assign({}, r, t(r))), e) {
		let e = P(r.areArraysEqual), t = P(r.areMapsEqual), n = P(r.areObjectsEqual), i = P(r.areSetsEqual);
		r = Object.assign({}, r, {
			areArraysEqual: e,
			areMapsEqual: t,
			areObjectsEqual: n,
			areSetsEqual: i
		});
	}
	return r;
}
function za(e) {
	return function(t, n, r, i, a, o, s) {
		return e(t, n, s);
	};
}
function Ba({ circular: e, comparator: t, createState: n, equals: r, strict: i }) {
	if (n) return function(a, o) {
		let { cache: s = e ? /* @__PURE__ */ new WeakMap() : void 0, meta: c } = n();
		return t(a, o, {
			cache: s,
			equals: r,
			meta: c,
			strict: i
		});
	};
	if (e) return function(e, n) {
		return t(e, n, {
			cache: /* @__PURE__ */ new WeakMap(),
			equals: r,
			meta: void 0,
			strict: i
		});
	};
	let a = {
		cache: void 0,
		equals: r,
		meta: void 0,
		strict: i
	};
	return function(e, n) {
		return t(e, n, a);
	};
}
function Va({ areArrayBuffersEqual: e, areArraysEqual: t, areDataViewsEqual: n, areDatesEqual: r, areErrorsEqual: i, areFunctionsEqual: a, areMapsEqual: o, areNumbersEqual: s, areObjectsEqual: c, arePrimitiveWrappersEqual: l, areRegExpsEqual: u, areSetsEqual: d, areTypedArraysEqual: f, areUrlsEqual: p }) {
	return {
		"[object Arguments]": c,
		"[object Array]": t,
		"[object ArrayBuffer]": e,
		"[object AsyncGeneratorFunction]": a,
		"[object BigInt]": s,
		"[object BigInt64Array]": f,
		"[object BigUint64Array]": f,
		"[object Boolean]": l,
		"[object DataView]": n,
		"[object Date]": r,
		"[object Error]": i,
		"[object Float16Array]": f,
		"[object Float32Array]": f,
		"[object Float64Array]": f,
		"[object Function]": a,
		"[object GeneratorFunction]": a,
		"[object Int8Array]": f,
		"[object Int16Array]": f,
		"[object Int32Array]": f,
		"[object Map]": o,
		"[object Number]": l,
		"[object Object]": (e, t, n) => typeof e.then != "function" && typeof t.then != "function" && c(e, t, n),
		"[object RegExp]": u,
		"[object Set]": d,
		"[object String]": l,
		"[object URL]": p,
		"[object Uint8Array]": f,
		"[object Uint8ClampedArray]": f,
		"[object Uint16Array]": f,
		"[object Uint32Array]": f
	};
}
var Ha = Ua();
Ua({ strict: !0 }), Ua({ circular: !0 }), Ua({
	circular: !0,
	strict: !0
}), Ua({ createInternalComparator: () => ba }), Ua({
	strict: !0,
	createInternalComparator: () => ba
}), Ua({
	circular: !0,
	createInternalComparator: () => ba
}), Ua({
	circular: !0,
	createInternalComparator: () => ba,
	strict: !0
});
function Ua(e = {}) {
	let { circular: t = !1, createInternalComparator: n, createState: r, strict: i = !1 } = e, a = La(Ra(e));
	return Ba({
		circular: t,
		comparator: a,
		createState: r,
		equals: n ? n(a) : za(a),
		strict: i
	});
}
//#endregion
//#region src/lib/components/navigation/NavigationFilterContext.tsx
var Wa = (0, A.createContext)({
	query: "",
	setQuery: () => {}
}), Ga = ({ resetKey: e, children: t }) => {
	let [n, r] = (0, A.useState)(""), [i, a] = (0, A.useState)(e);
	return i !== e && (a(e), n !== "" && r("")), /* @__PURE__ */ (0, j.jsx)(Wa.Provider, {
		value: {
			query: n,
			setQuery: r
		},
		children: t
	});
}, Ka = () => (0, A.useContext)(Wa), qa = (0, A.memo)(({ category: e, onRequestClose: t }) => {
	let n = hn(e), [r, i] = (0, A.useState)(!1), a = be(), { query: o } = Ka(), s = e.collapsible ?? !0, c = e.collapsed ?? !0, l = !!(!s || !c || n), [u, d] = (0, A.useState)(l), f = e.link ? e.link.type === "doc" ? e.link.path : e.link.to : "", p = E(f), m = e.link ? p : !1;
	(0, A.useEffect)(() => {
		n && d(!0);
	}, [n]), (0, A.useEffect)(() => {
		o.trim() && d(!0);
	}, [o]);
	let h = s && /* @__PURE__ */ (0, j.jsx)(cn, {
		onClick: (e) => {
			e.preventDefault(), d((e) => !e), i(!0);
		},
		variant: "none",
		size: "icon",
		"aria-label": u ? "Collapse section" : "Expand section",
		"aria-expanded": u,
		className: "size-6 -my-0.5",
		children: /* @__PURE__ */ (0, j.jsx)(Kt, {
			size: 16,
			"aria-hidden": "true",
			className: k(r && "transition", "shrink-0 group-data-[state=open]:rotate-90 rtl:rotate-180")
		})
	}), g = e.icon && /* @__PURE__ */ (0, j.jsx)(e.icon, { className: k("size-4 shrink-0 align-[-0.125em]", m && "text-primary") }), _ = Tn({ className: ["group text-start font-medium", s || e.link !== void 0 ? "cursor-pointer" : "cursor-default hover:bg-transparent"] });
	return /* @__PURE__ */ (0, j.jsxs)(jt, {
		className: "flex flex-col",
		defaultOpen: l,
		open: u,
		onOpenChange: (t) => {
			if (!s) return;
			let n = e.link ? !0 : t;
			n !== u && i(!0), d(n);
		},
		children: [/* @__PURE__ */ (0, j.jsx)(bt, {
			className: "group",
			asChild: !0,
			disabled: !s,
			children: e.link ? /* @__PURE__ */ (0, j.jsx)(xe, {
				to: {
					pathname: O(f),
					search: a.search
				},
				className: _,
				onClick: () => {
					m && !u && (i(!0), d(!0));
				},
				children: ({ isActive: t, isPending: n }) => /* @__PURE__ */ (0, j.jsxs)(j.Fragment, { children: [g, /* @__PURE__ */ (0, j.jsxs)("div", {
					className: k("flex items-center gap-2 justify-between w-full text-foreground/80", (t || n) && "text-primary"),
					children: [/* @__PURE__ */ (0, j.jsx)("div", {
						className: "truncate",
						children: e.label
					}), h]
				})] })
			}) : /* @__PURE__ */ (0, j.jsxs)("div", {
				className: _,
				children: [g, /* @__PURE__ */ (0, j.jsxs)("div", {
					className: "flex items-center justify-between w-full",
					children: [/* @__PURE__ */ (0, j.jsx)("div", {
						className: "flex gap-2 truncate w-full",
						children: e.label
					}), h]
				})]
			})
		}), /* @__PURE__ */ (0, j.jsx)(Ot, {
			className: k(r && "CollapsibleContent", e.items.length === 0 && "hidden", "ms-6 my-1"),
			onAnimationEnd: () => i(!1),
			children: /* @__PURE__ */ (0, j.jsx)("ul", {
				className: "relative after:absolute after:-inset-s-(--padding-nav-item) after:translate-x-[1.5px] after:top-0 after:bottom-0 after:w-px after:bg-border",
				children: e.items.map((e) => /* @__PURE__ */ (0, j.jsx)(oo, {
					onRequestClose: t,
					item: e
				}, vn(e)))
			})
		})]
	});
}, Ha);
qa.displayName = "NavigationCategory";
//#endregion
//#region src/lib/ui/InputGroup.tsx
function Ja({ className: e, ...t }) {
	return /* @__PURE__ */ (0, j.jsx)("div", {
		"data-slot": "input-group",
		role: "group",
		className: k("group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none", "h-9 min-w-0 has-[>textarea]:h-auto", "has-[>[data-align=inline-start]]:[&>input]:pl-2", "has-[>[data-align=inline-end]]:[&>input]:pr-2", "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3", "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3", "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]", "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40", e),
		...t
	});
}
var Ya = Ke("text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50", {
	variants: { align: {
		"inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
		"inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
		"block-start": "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
		"block-end": "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5"
	} },
	defaultVariants: { align: "inline-start" }
});
function Xa({ className: e, align: t = "inline-start", ...n }) {
	return /* @__PURE__ */ (0, j.jsx)("div", {
		role: "group",
		"data-slot": "input-group-addon",
		"data-align": t,
		className: k(Ya({ align: t }), e),
		onClick: (e) => {
			e.target.closest("button") || e.currentTarget.parentElement?.querySelector("input")?.focus();
		},
		...n
	});
}
var Za = Ke("text-sm shadow-none flex gap-2 items-center", {
	variants: { size: {
		xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
		sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
		"icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
		"icon-sm": "size-8 p-0 has-[>svg]:p-0"
	} },
	defaultVariants: { size: "xs" }
});
function Qa({ className: e, type: t = "button", variant: n = "ghost", size: r = "xs", ...i }) {
	return /* @__PURE__ */ (0, j.jsx)(cn, {
		type: t,
		"data-size": r,
		variant: n,
		className: k(Za({ size: r }), e),
		...i
	});
}
function $a({ className: e, ...t }) {
	return /* @__PURE__ */ (0, j.jsx)(yt, {
		"data-slot": "input-group-control",
		className: k("flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent", e),
		...t
	});
}
//#endregion
//#region src/lib/components/navigation/NavigationFilterInput.tsx
var eo = ({ placeholder: e }) => {
	let { query: t, setQuery: n } = Ka();
	return /* @__PURE__ */ (0, j.jsxs)(Ja, {
		className: "my-2",
		children: [
			/* @__PURE__ */ (0, j.jsx)(Xa, { children: /* @__PURE__ */ (0, j.jsx)(wt, { className: "size-3.5" }) }),
			/* @__PURE__ */ (0, j.jsx)($a, {
				type: "text",
				placeholder: e,
				value: t,
				onChange: (e) => n(e.target.value)
			}),
			t && /* @__PURE__ */ (0, j.jsx)(Qa, {
				onClick: () => n(""),
				children: /* @__PURE__ */ (0, j.jsx)(Et, { className: "size-3" })
			})
		]
	});
}, to = ({ to: e, onRequestClose: t, className: n, children: r }) => /* @__PURE__ */ (0, j.jsxs)(De, {
	viewTransition: !0,
	to: e,
	onClick: t,
	className: k(Tn(), "group justify-between", n),
	children: [/* @__PURE__ */ (0, j.jsx)("span", {
		className: "flex items-center gap-2 truncate",
		children: r
	}), /* @__PURE__ */ (0, j.jsx)("span", {
		className: "grid size-6 -my-0.5 shrink-0 place-items-center",
		children: /* @__PURE__ */ (0, j.jsx)(Kt, { size: 16 })
	})]
}), no = ({ category: e, onRequestClose: t }) => {
	let n = Sn(e);
	return n ? /* @__PURE__ */ (0, j.jsxs)(to, {
		to: n,
		onRequestClose: t,
		className: "font-medium",
		children: [e.icon && /* @__PURE__ */ (0, j.jsx)(e.icon, {
			size: 16,
			className: "shrink-0 align-[-0.125em]"
		}), /* @__PURE__ */ (0, j.jsx)("span", {
			className: "truncate",
			children: e.label
		})]
	}) : (console.warn(`[Zudoku] Stacked category "${e.label}" has no navigable items; rendering inline.`), /* @__PURE__ */ (0, j.jsx)(qa, {
		category: e,
		onRequestClose: t
	}));
}, ro = (0, A.lazy)(() => import("./hastToJsx-CUg3Ma08.js")), io = ({ label: e, className: t }) => {
	let n = (0, A.useRef)(null), [r, i] = (0, A.useState)(!1);
	return (0, A.useEffect)(() => {
		n.current && n.current.offsetWidth < n.current.scrollWidth && i(!0);
	}, []), /* @__PURE__ */ (0, j.jsxs)(j.Fragment, { children: [/* @__PURE__ */ (0, j.jsx)("span", {
		className: k("truncate flex-1", t),
		title: e,
		ref: n,
		children: e
	}), r && /* @__PURE__ */ (0, j.jsxs)(Nt, {
		disableHoverableContent: !0,
		children: [/* @__PURE__ */ (0, j.jsx)(kt, { className: "absolute inset-0 z-10" }), /* @__PURE__ */ (0, j.jsx)(xt, {
			className: "max-w-64",
			side: "bottom",
			align: "center",
			children: e
		})]
	})] });
}, ao = "data-anchor", oo = ({ item: e, onRequestClose: t }) => {
	let n = be(), r = Me(), { activeAnchor: i } = l(), a = Tt(), o = Cn(), { query: s } = Ka();
	if (!mn({
		auth: a,
		context: o,
		filterQuery: s
	})(e)) return null;
	switch (e.type) {
		case "category": return e.stack && !s.trim() ? /* @__PURE__ */ (0, j.jsx)(no, {
			category: e,
			onRequestClose: t
		}) : /* @__PURE__ */ (0, j.jsx)(qa, {
			category: e,
			onRequestClose: t
		});
		case "separator": return /* @__PURE__ */ (0, j.jsx)(y, { className: "my-1 mx-auto w-[calc(100%-var(--padding-nav-item)*2)]!" });
		case "section": return /* @__PURE__ */ (0, j.jsx)("div", {
			className: "mt-4 px-(--padding-nav-item) text-xs font-semibold text-muted-foreground uppercase tracking-wider",
			children: e.label
		});
		case "filter": return /* @__PURE__ */ (0, j.jsx)(eo, { placeholder: e.placeholder });
		case "doc": return /* @__PURE__ */ (0, j.jsxs)(xe, {
			viewTransition: !0,
			className: ({ isActive: e, isPending: t }) => Tn({
				isActive: e,
				isPending: t
			}),
			to: O(e.path),
			onClick: t,
			end: !0,
			children: [
				e.icon && /* @__PURE__ */ (0, j.jsx)(e.icon, { className: "size-4 shrink-0 align-[-0.125em]" }),
				e.rich ? /* @__PURE__ */ (0, j.jsx)(A.Suspense, {
					fallback: /* @__PURE__ */ (0, j.jsx)("span", { children: e.label }),
					children: /* @__PURE__ */ (0, j.jsx)("span", { children: /* @__PURE__ */ (0, j.jsx)(ro, { children: e.rich }) })
				}) : /* @__PURE__ */ (0, j.jsx)(io, {
					label: e.label,
					className: "flex-1"
				}),
				e.badge && /* @__PURE__ */ (0, j.jsx)(ca, { ...e.badge })
			]
		});
		case "link":
		case "custom-page": {
			let a = e.type === "link" ? e.to : O(e.path);
			if (e.type === "link" && e.stack) return /* @__PURE__ */ (0, j.jsxs)(to, {
				to: O(e.to),
				onRequestClose: t,
				children: [
					e.icon && /* @__PURE__ */ (0, j.jsx)(e.icon, {
						size: 16,
						className: "align-[-0.125em] shrink-0"
					}),
					/* @__PURE__ */ (0, j.jsx)(io, { label: e.label }),
					e.badge && /* @__PURE__ */ (0, j.jsx)(ca, { ...e.badge })
				]
			});
			let o = fn(a, {
				pathname: n.pathname,
				activeAnchor: i
			}, r.location);
			return a.startsWith("http") ? /* @__PURE__ */ (0, j.jsxs)("a", {
				className: Tn(),
				href: a,
				target: "target" in e ? e.target : "_blank",
				rel: "noopener noreferrer",
				onClick: t,
				children: [
					e.icon && /* @__PURE__ */ (0, j.jsx)(e.icon, { className: "size-4 shrink-0 align-[-0.125em]" }),
					/* @__PURE__ */ (0, j.jsx)("span", {
						className: "whitespace-normal",
						children: e.label
					}),
					/* @__PURE__ */ (0, j.jsx)("span", {
						className: "whitespace-nowrap",
						children: /* @__PURE__ */ (0, j.jsx)(ne, { className: "inline size-3 -translate-y-0.5" })
					})
				]
			}) : /* @__PURE__ */ (0, j.jsxs)(uo, {
				end: !0,
				to: {
					pathname: a.split("#")[0],
					hash: a.split("#")[1],
					search: n.search
				},
				[ao]: a.split("#")[1],
				className: () => Tn(o),
				onClick: t,
				children: [
					e.icon && /* @__PURE__ */ (0, j.jsx)(e.icon, { className: "size-4 shrink-0 align-[-0.125em]" }),
					e.label && /* @__PURE__ */ (0, j.jsx)(io, { label: e.label }),
					e.badge && /* @__PURE__ */ (0, j.jsx)(ca, { ...e.badge })
				]
			});
		}
	}
}, so = (e, t = { block: "center" }) => {
	if (!e) return;
	let n = e.getBoundingClientRect();
	n.top >= 0 && n.left >= 0 && n.bottom <= (window.innerHeight || document.documentElement.clientHeight) && n.right <= (window.innerWidth || document.documentElement.clientWidth) || e.scrollIntoView(t);
}, co = () => {
	let { setActiveAnchor: e } = l();
	return (0, A.useCallback)((t) => {
		let n = t.replace(/^#/, ""), r = n.split("/").at(0);
		if (!r) return !1;
		let i = document.getElementById(decodeURIComponent(n)), a = document.querySelector(`[${ao}="${r}"]`);
		return i ? (i.scrollIntoView(), so(a), requestIdleCallback(() => e(r)), !0) : !1;
	}, [e]);
}, lo = () => {
	let e = be(), t = co(), n = (0, A.useRef)(!1);
	(0, A.useEffect)(() => {
		!e.hash || !n.current || t(e.hash);
	}, [e.hash, t]), (0, A.useEffect)(() => {
		if (!e.hash) {
			n.current = !0;
			return;
		}
		let r = new MutationObserver((r, i) => {
			t(e.hash) && (n.current = !0, i.disconnect());
		});
		return r.observe(document.body, {
			childList: !0,
			subtree: !0
		}), () => r.disconnect();
	}, [e.hash, t]);
}, uo = (e) => {
	let t = be(), n = co(), [r, i] = D(e.to).split("#"), a = (a) => {
		e.onClick?.(a), !(i !== t.hash.slice(1) || r !== t.pathname) && (a.preventDefault(), n(i));
	};
	return /* @__PURE__ */ (0, j.jsx)(xe, {
		...e,
		onClick: a
	});
}, fo = Ke("", {
	variants: {
		size: {
			sm: "max-w-sm",
			md: "max-w-md",
			lg: "max-w-lg",
			xl: "max-w-xl",
			"2xl": "max-w-2xl",
			full: "max-w-full"
		},
		align: {
			center: "mx-auto",
			start: "me-auto",
			end: "ms-auto"
		}
	},
	defaultVariants: {
		size: "xl",
		align: "center"
	}
}), po = ({ caption: e, className: t, size: n = "xl", align: r = "center", children: i }) => /* @__PURE__ */ (0, j.jsxs)("figure", {
	className: k(fo({
		size: n,
		align: r
	}), t),
	children: [/* @__PURE__ */ (0, j.jsx)("div", {
		className: "relative overflow-hidden rounded-lg border border-border bg-muted/50 p-1 shadow-sm",
		children: /* @__PURE__ */ (0, j.jsx)("div", {
			className: "not-prose rounded-md [&_img]:rounded-md! relative overflow-hidden bg-background",
			children: i
		})
	}), e && /* @__PURE__ */ (0, j.jsx)("figcaption", {
		className: "mt-3 text-center text-sm text-muted-foreground",
		children: e
	})]
}), mo = ({ className: e, ...t }) => /* @__PURE__ */ (0, j.jsx)("code", {
	className: k("font-mono border p-1 py-0.5 rounded-sm bg-border/50 dark:bg-border/70 wrap-anywhere", e),
	...t
}), ho = {
	typescript: {
		pattern: /^(ts|typescript)$/,
		icon: (0, A.lazy)(() => import("./typescript-D-pfqzQq.js")),
		width: 15
	},
	javascript: {
		pattern: /^(js|javascript)$/,
		icon: (0, A.lazy)(() => import("./javascript-DjBnth32.js"))
	},
	react: {
		pattern: /^(react|tsx|jsx)$/,
		icon: (0, A.lazy)(() => import("./react-BtPQejEl.js")),
		width: 20
	},
	markdown: {
		pattern: /^(md|markdown)$/,
		icon: (0, A.lazy)(() => import("./markdown-YGxcGU8d.js")),
		width: 22
	},
	mdx: {
		pattern: /^mdx$/,
		icon: (0, A.lazy)(() => import("./mdx-DcOAaXdW.js")),
		width: 28
	},
	java: {
		pattern: /^(java)$/,
		icon: (0, A.lazy)(() => import("./java-CG-s8g7v.js")),
		width: 22
	},
	json: {
		pattern: /^jsonc?$/,
		icon: (0, A.lazy)(() => import("./json-BU48Iymg.js"))
	},
	yaml: {
		pattern: /^yaml$/,
		icon: (0, A.lazy)(() => import("./yaml-DqZXQ1iW.js"))
	},
	toml: {
		pattern: /^toml$/,
		icon: (0, A.lazy)(() => import("./toml-5kspmnoI.js"))
	},
	shell: {
		pattern: /^(shell|bash|sh|zsh|term|terminal|ansi)$/,
		icon: (0, A.lazy)(() => import("./shell-URPbJYRk.js"))
	},
	python: {
		pattern: /^(py|python)$/,
		icon: (0, A.lazy)(() => import("./python-BIoVJfTb.js"))
	},
	pnpm: {
		pattern: /^pnp(m|x)$/,
		icon: (0, A.lazy)(() => import("./pnpm-PmWnfQQD.js")),
		width: 14
	},
	npm: {
		pattern: /^np(m|x)$/,
		icon: (0, A.lazy)(() => import("./npm-DnKrAEIZ.js"))
	},
	yarn: {
		pattern: /^yarn$/,
		icon: (0, A.lazy)(() => import("./yarn-D7rsEH1y.js")),
		width: 16
	},
	bun: {
		pattern: /^bun(x)?$/,
		icon: (0, A.lazy)(() => import("./bun-CBj8AHK6.js"))
	},
	csharp: {
		pattern: /^(cs|csharp|vb)$/,
		icon: (0, A.lazy)(() => import("./csharp-CT-RxI8q.js")),
		width: 20
	},
	rust: {
		pattern: /^(rs|rust)$/,
		icon: (0, A.lazy)(() => import("./rust-B6gFfqz-.js")),
		width: 20
	},
	ruby: {
		pattern: /^(rb|ruby)$/,
		icon: (0, A.lazy)(() => import("./ruby-sthd-d1j.js"))
	},
	php: {
		pattern: /^php$/,
		icon: (0, A.lazy)(() => import("./php-D2qjwfAf.js")),
		width: 24
	},
	html: {
		pattern: /^html?$/,
		icon: (0, A.lazy)(() => import("./html-BZ42j_G6.js")),
		width: 15
	},
	css: {
		pattern: /^css$/,
		icon: (0, A.lazy)(() => import("./css-Oj5JYaGB.js"))
	},
	objectivec: {
		pattern: /^(objc|objectivec)$/,
		icon: (0, A.lazy)(() => import("./objectivec-3lTZJS_a.js")),
		width: 16
	},
	swift: {
		pattern: /^swift$/,
		icon: (0, A.lazy)(() => import("./swift-BRv2X9q8.js"))
	},
	go: {
		pattern: /^go$/,
		icon: (0, A.lazy)(() => import("./go-CTpX67Ev.js")),
		width: 28
	},
	xml: {
		pattern: /^xml$/,
		icon: (0, A.lazy)(() => import("./xml-BBwGRRdI.js"))
	},
	kotlin: {
		pattern: /^(kt|kotlin)$/,
		icon: (0, A.lazy)(() => import("./kotlin-BIBNPwZX.js")),
		width: 14
	},
	graphql: {
		pattern: /^(gql|graphql)$/,
		icon: (0, A.lazy)(() => import("./graphql-BlPZARhD.js"))
	},
	zig: {
		pattern: /^zig$/,
		icon: (0, A.lazy)(() => import("./zig-Bn520XLe.js")),
		width: 28
	},
	scala: {
		pattern: /^scala$/,
		icon: (0, A.lazy)(() => import("./scala-Bh4m31z6.js")),
		width: 18
	},
	dart: {
		pattern: /^dart$/,
		icon: (0, A.lazy)(() => import("./dart-DlOL1A_m.js")),
		width: 20
	},
	ocaml: {
		pattern: /^ocaml$/,
		icon: (0, A.lazy)(() => import("./ocaml-DSiJAl-q.js")),
		width: 20
	},
	c: {
		pattern: /^c$/,
		icon: (0, A.lazy)(() => import("./c-DFeoYhMV.js")),
		width: 20
	},
	cpp: {
		pattern: /^(cpp|c\+\+)$/,
		icon: (0, A.lazy)(() => import("./cpp-CAHINz_U.js")),
		width: 20
	},
	commonlisp: {
		pattern: /^(clisp|common-lisp|lisp|cl|commonlisp)$/,
		icon: (0, A.lazy)(() => import("./commonlisp-BePeWVLq.js")),
		width: 18
	},
	elixir: {
		pattern: /^elixir$/,
		icon: (0, A.lazy)(() => import("./elixir-D1S_AoJd.js")),
		width: 18
	},
	powershell: {
		pattern: /^(pshell|powershell|ps1)$/,
		icon: (0, A.lazy)(() => import("./powershell-DhuICI-E.js")),
		width: 18
	}
}, go = ({ language: e }) => {
	if (!e) return null;
	let t = Object.values(ho).find((t) => t.pattern.test(e));
	if (!t) return null;
	let n = t.width ?? 18;
	return /* @__PURE__ */ (0, j.jsx)(A.Suspense, {
		fallback: /* @__PURE__ */ (0, j.jsx)("div", { style: {
			width: n,
			height: "1em"
		} }),
		children: /* @__PURE__ */ (0, j.jsx)(t.icon, {
			className: "h-auto",
			style: { width: n }
		})
	});
}, _o = ({ contentRef: e }) => {
	let [t, n] = Lt();
	return /* @__PURE__ */ (0, j.jsx)("button", {
		type: "button",
		"aria-label": "Copy code",
		title: "Copy code",
		className: k("transition p-1.5 mx-1 rounded-lg", !t && "hover:bg-accent hover:brightness-95"),
		disabled: t,
		onClick: () => n(e.current?.textContent ?? ""),
		children: t ? /* @__PURE__ */ (0, j.jsx)(It, {
			className: "text-emerald-600",
			size: 14
		}) : /* @__PURE__ */ (0, j.jsx)(Ft, { size: 14 })
	});
}, vo = k("border code-block-wrapper relative group rounded-xl overflow-hidden"), F = k("flex items-center py-0.5 bg-black/4"), I = k("code-block p-0.5 text-sm not-prose scrollbar bg-black/4", "[&_code]:rounded-b-[calc(var(--radius)+1px)] [&>pre]:rounded-b-[calc(var(--radius)+1px)] [&_code]:px-3 [&_code]:py-2"), yo = ({ children: e, title: t = "Code", language: n, icon: r, showCopy: i = "hover", showLanguageIndicator: a, showLineNumbers: o, ...s }) => {
	let c = (0, A.useRef)(null);
	return e ? /* @__PURE__ */ (0, j.jsxs)("div", {
		className: k(vo, s.className),
		children: [/* @__PURE__ */ (0, j.jsxs)("div", {
			className: F,
			children: [/* @__PURE__ */ (0, j.jsxs)("div", {
				className: "flex items-center gap-1.5 flex-1 text-sm w-full px-3",
				children: [a && /* @__PURE__ */ (0, j.jsx)(go, { language: r ?? n }), t]
			}), i !== "never" && /* @__PURE__ */ (0, j.jsx)(_o, { contentRef: c })]
		}), /* @__PURE__ */ (0, j.jsx)("div", {
			ref: c,
			className: k(I, o && "line-numbers"),
			children: e
		})]
	}) : null;
}, bo = (e) => null;
bo.displayName = "CodeTabPanel";
//#endregion
//#region src/lib/ui/Stepper.tsx
var xo = ({ children: e }) => /* @__PURE__ */ (0, j.jsx)("div", {
	className: "stepper",
	children: e
}), So = (0, A.lazy)(() => import("./SyntaxHighlight-bEdAb5c0.js").then((e) => e.r)), Co = (0, A.lazy)(() => import("./Mermaid-D5fVPbEO.js")), wo = (0, A.lazy)(() => import("./CodeTabs-CQTmq2bw.js").then((e) => ({ default: e.CodeTabs }))), To = {
	img: ({ node: e, ...t }) => /\.(mp4|webm|mov|avi)$/.test(t.src ?? "") ? /* @__PURE__ */ (0, j.jsx)("video", {
		src: t.src,
		controls: !0,
		playsInline: !0,
		autoPlay: !0,
		loop: !0,
		className: k("rounded-lg", t.className)
	}) : /* @__PURE__ */ (0, j.jsx)("img", {
		alt: t.alt,
		...t,
		className: k("rounded-lg", t.className)
	}),
	Framed: po,
	h1: ({ children: e, id: t }) => /* @__PURE__ */ (0, j.jsx)(S, {
		level: 1,
		id: t,
		children: e
	}),
	h2: ({ children: e, id: t }) => /* @__PURE__ */ (0, j.jsx)(S, {
		level: 2,
		id: t,
		children: e
	}),
	h3: ({ children: e, id: t }) => /* @__PURE__ */ (0, j.jsx)(S, {
		level: 3,
		id: t,
		children: e
	}),
	h4: ({ children: e, id: t }) => /* @__PURE__ */ (0, j.jsx)(S, {
		level: 4,
		id: t,
		children: e
	}),
	h5: ({ children: e, id: t }) => /* @__PURE__ */ (0, j.jsx)(S, {
		level: 5,
		id: t,
		children: e
	}),
	h6: ({ children: e, id: t }) => /* @__PURE__ */ (0, j.jsx)(S, {
		level: 6,
		id: t,
		children: e
	}),
	a: ({ href: e, node: t, ...n }) => e && !e.startsWith("http") ? /* @__PURE__ */ (0, j.jsx)(uo, {
		to: e,
		relative: "path",
		...n
	}) : /* @__PURE__ */ (0, j.jsx)("a", {
		href: e,
		target: "_blank",
		...n,
		rel: "noreferrer"
	}),
	Link: De,
	Alert: an,
	Badge: te,
	Button: cn,
	Callout: _i,
	Stepper: xo,
	Mermaid: (e) => /* @__PURE__ */ (0, j.jsx)(A.Suspense, { children: /* @__PURE__ */ (0, j.jsx)(Co, { ...e }) }),
	SyntaxHighlight: (e) => /* @__PURE__ */ (0, j.jsx)(A.Suspense, { children: /* @__PURE__ */ (0, j.jsx)(So, { ...e }) }),
	tip: (e) => /* @__PURE__ */ (0, j.jsx)(_i, {
		type: "tip",
		...e
	}),
	info: (e) => /* @__PURE__ */ (0, j.jsx)(_i, {
		type: "info",
		...e
	}),
	note: (e) => /* @__PURE__ */ (0, j.jsx)(_i, {
		type: "note",
		...e
	}),
	caution: (e) => /* @__PURE__ */ (0, j.jsx)(_i, {
		type: "caution",
		...e
	}),
	warning: (e) => /* @__PURE__ */ (0, j.jsx)(_i, {
		type: "caution",
		...e
	}),
	danger: (e) => /* @__PURE__ */ (0, j.jsx)(_i, {
		type: "danger",
		...e
	}),
	sparkles: (e) => /* @__PURE__ */ (0, j.jsx)(_i, {
		type: "sparkles",
		...e
	}),
	rocket: (e) => /* @__PURE__ */ (0, j.jsx)(_i, {
		type: "rocket",
		...e
	}),
	settings: (e) => /* @__PURE__ */ (0, j.jsx)(_i, {
		type: "settings",
		...e
	}),
	zap: (e) => /* @__PURE__ */ (0, j.jsx)(_i, {
		type: "zap",
		...e
	}),
	lock: (e) => /* @__PURE__ */ (0, j.jsx)(_i, {
		type: "lock",
		...e
	}),
	megaphone: (e) => /* @__PURE__ */ (0, j.jsx)(_i, {
		type: "megaphone",
		...e
	}),
	CodeTabs: (e) => /* @__PURE__ */ (0, j.jsx)(A.Suspense, { children: /* @__PURE__ */ (0, j.jsx)(wo, { ...e }) }),
	CodeTabPanel: bo,
	pre: (e) => /* @__PURE__ */ (0, j.jsx)("pre", {
		className: k("not-prose my-4", e.className),
		...e
	}),
	code: ({ className: e, node: t, children: n, title: r, icon: i, inline: a, showLineNumbers: o, ...s }) => {
		let c = e?.match(/language-(\w+)/);
		return a === "true" || a === !0 ? /* @__PURE__ */ (0, j.jsx)(mo, {
			className: k(e, "inline"),
			children: n
		}) : /* @__PURE__ */ (0, j.jsx)(yo, {
			language: c?.[1],
			icon: i,
			showLanguageIndicator: !0,
			showLineNumbers: o,
			title: r,
			children: /* @__PURE__ */ (0, j.jsx)("code", {
				className: k(e, Ti),
				...s,
				children: n
			})
		});
	}
}, Eo = () => {
	let e = be(), t = Cn(), n = (0, A.useRef)(void 0);
	return (0, A.useEffect)(() => {
		t.emitEvent("location", {
			from: n.current,
			to: e
		}), n.current = e;
	}, [t, e]), null;
}, Do = ({ children: e, context: t }) => (t.initialize && (0, A.use)(t.initialize), /* @__PURE__ */ (0, j.jsx)(_n.Provider, {
	value: t,
	children: e
})), Oo = (e) => A.Children.toArray(e).flatMap((e) => (0, A.isValidElement)(e) && e.type === A.Fragment ? Oo(e.props.children) : [e]), ko = ({ plugins: e, location: t }) => /* @__PURE__ */ (0, j.jsx)(ee, { children: Oo(e.flatMap((e) => Pi(e) ? e.getHead?.({ location: t }) ?? [] : [])) }), Ao, jo = (0, A.memo)(({ children: e, env: t, ...n }) => {
	let r = be(), i = (0, A.useMemo)(() => ({
		...(n.plugins ?? []).filter(Fi).flatMap((e) => e.getMdxComponents ? [e.getMdxComponents()] : []).reduce((e, t) => ({
			...e,
			...t
		}), {}),
		...To,
		...n.mdx?.components
	}), [n.mdx?.components, n.plugins]), [a, o] = (0, A.useState)(!1), s = Me(), c = We();
	(0, A.useEffect)(() => {
		a || !s.location || o(!0);
	}, [a, s.location]);
	let l = (0, A.use)(Ct);
	return typeof window > "u" ? Ao = new ta(n, c, t, l.ssrAuth) : Ao ??= new ta(n, c, t), /* @__PURE__ */ (0, j.jsxs)(j.Fragment, { children: [/* @__PURE__ */ (0, j.jsx)(ko, {
		plugins: n.plugins ?? [],
		location: r
	}), /* @__PURE__ */ (0, j.jsxs)(Do, {
		context: Ao,
		children: [/* @__PURE__ */ (0, j.jsx)(Eo, {}), /* @__PURE__ */ (0, j.jsx)(N, {
			slots: n.slots ?? n.UNSAFE_slotlets,
			children: /* @__PURE__ */ (0, j.jsx)(wi, {
				components: i,
				children: /* @__PURE__ */ (0, j.jsx)(tn, {
					attribute: "class",
					disableTransitionOnChange: !0,
					children: /* @__PURE__ */ (0, j.jsx)(g, { children: e ?? /* @__PURE__ */ (0, j.jsx)(Te, {}) })
				})
			})
		})]
	})] });
});
jo.displayName = "ZudokuInner";
var Mo = (e) => /* @__PURE__ */ (0, j.jsx)(qi, {
	FallbackComponent: aa,
	children: /* @__PURE__ */ (0, j.jsx)(jo, {
		...e,
		env: e.env ?? {}
	})
});
Mo.displayName = "Zudoku";
//#endregion
//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/core.js
var No;
function L(e, t, n) {
	function r(n, r) {
		if (n._zod || Object.defineProperty(n, "_zod", {
			value: {
				def: r,
				constr: o,
				traits: /* @__PURE__ */ new Set()
			},
			enumerable: !1
		}), n._zod.traits.has(e)) return;
		n._zod.traits.add(e), t(n, r);
		let i = o.prototype, a = Object.keys(i);
		for (let e = 0; e < a.length; e++) {
			let t = a[e];
			t in n || (n[t] = i[t].bind(n));
		}
	}
	let i = n?.Parent ?? Object;
	class a extends i {}
	Object.defineProperty(a, "name", { value: e });
	function o(e) {
		var t;
		let i = n?.Parent ? new a() : this;
		r(i, e), (t = i._zod).deferred ?? (t.deferred = []);
		for (let e of i._zod.deferred) e();
		return i;
	}
	return Object.defineProperty(o, "init", { value: r }), Object.defineProperty(o, Symbol.hasInstance, { value: (t) => n?.Parent && t instanceof n.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(o, "name", { value: e }), o;
}
var Po = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, Fo = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(No = globalThis).__zod_globalConfig ?? (No.__zod_globalConfig = {});
var R = globalThis.__zod_globalConfig;
function Io(e) {
	return e && Object.assign(R, e), R;
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/util.js
function Lo(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function Ro(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function zo(e) {
	return { get value() {
		{
			let t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
		throw Error("cached value already set");
	} };
}
function Bo(e) {
	return e == null;
}
function Vo(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
var Ho = /* @__PURE__*/ Symbol("evaluating");
function z(e, t, n) {
	let r;
	Object.defineProperty(e, t, {
		get() {
			if (r !== Ho) return r === void 0 && (r = Ho, r = n()), r;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function Uo(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function Wo(...e) {
	let t = {};
	for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n));
	return Object.defineProperties({}, t);
}
function Go(e) {
	return JSON.stringify(e);
}
function Ko(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var qo = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function Jo(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var Yo = /* @__PURE__*/ zo(() => {
	if (R.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return Function(""), !0;
	} catch {
		return !1;
	}
});
function Xo(e) {
	if (Jo(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return !(Jo(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function Zo(e) {
	return Xo(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
var Qo = /* @__PURE__*/ new Set([
	"string",
	"number",
	"symbol"
]);
function $o(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function es(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function B(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function ts(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
-Number.MAX_VALUE, Number.MAX_VALUE;
function ns(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	return es(e, Wo(e._zod.def, {
		get shape() {
			let e = {};
			for (let r in t) {
				if (!(r in n.shape)) throw Error(`Unrecognized key: "${r}"`);
				t[r] && (e[r] = n.shape[r]);
			}
			return Uo(this, "shape", e), e;
		},
		checks: []
	}));
}
function rs(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	return es(e, Wo(e._zod.def, {
		get shape() {
			let r = { ...e._zod.def.shape };
			for (let e in t) {
				if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
				t[e] && delete r[e];
			}
			return Uo(this, "shape", r), r;
		},
		checks: []
	}));
}
function is(e, t) {
	if (!Xo(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = e._zod.def.shape;
		for (let e in t) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return es(e, Wo(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return Uo(this, "shape", n), n;
	} }));
}
function as(e, t) {
	if (!Xo(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return es(e, Wo(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return Uo(this, "shape", n), n;
	} }));
}
function os(e, t) {
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	return es(e, Wo(e._zod.def, {
		get shape() {
			let n = {
				...e._zod.def.shape,
				...t._zod.def.shape
			};
			return Uo(this, "shape", n), n;
		},
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function ss(e, t, n) {
	let r = t._zod.def.checks;
	if (r && r.length > 0) throw Error(".partial() cannot be used on object schemas containing refinements");
	return es(t, Wo(t._zod.def, {
		get shape() {
			let r = t._zod.def.shape, i = { ...r };
			if (n) for (let t in n) {
				if (!(t in r)) throw Error(`Unrecognized key: "${t}"`);
				n[t] && (i[t] = e ? new e({
					type: "optional",
					innerType: r[t]
				}) : r[t]);
			}
			else for (let t in r) i[t] = e ? new e({
				type: "optional",
				innerType: r[t]
			}) : r[t];
			return Uo(this, "shape", i), i;
		},
		checks: []
	}));
}
function cs(e, t, n) {
	return es(t, Wo(t._zod.def, { get shape() {
		let r = t._zod.def.shape, i = { ...r };
		if (n) for (let t in n) {
			if (!(t in i)) throw Error(`Unrecognized key: "${t}"`);
			n[t] && (i[t] = new e({
				type: "nonoptional",
				innerType: r[t]
			}));
		}
		else for (let t in r) i[t] = new e({
			type: "nonoptional",
			innerType: r[t]
		});
		return Uo(this, "shape", i), i;
	} }));
}
function ls(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function us(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function ds(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function fs(e) {
	return typeof e == "string" ? e : e?.message;
}
function ps(e, t, n) {
	let r = e.message ? e.message : fs(e.inst?._zod.def?.error?.(e)) ?? fs(t?.error?.(e)) ?? fs(n.customError?.(e)) ?? fs(n.localeError?.(e)) ?? "Invalid input", { inst: i, continue: a, input: o, ...s } = e;
	return s.path ??= [], s.message = r, t?.reportInput && (s.input = o), s;
}
function ms(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function hs(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/errors.js
var gs = (e, t) => {
	e.name = "$ZodError", Object.defineProperty(e, "_zod", {
		value: e._zod,
		enumerable: !1
	}), Object.defineProperty(e, "issues", {
		value: t,
		enumerable: !1
	}), e.message = JSON.stringify(t, Ro, 2), Object.defineProperty(e, "toString", {
		value: () => e.message,
		enumerable: !1
	});
}, _s = L("$ZodError", gs), vs = L("$ZodError", gs, { Parent: Error });
function ys(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function bs(e, t = (e) => e.message) {
	let n = { _errors: [] }, r = (e, i = []) => {
		for (let a of e.issues) if (a.code === "invalid_union" && a.errors.length) a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
		else if (a.code === "invalid_key") r({ issues: a.issues }, [...i, ...a.path]);
		else if (a.code === "invalid_element") r({ issues: a.issues }, [...i, ...a.path]);
		else {
			let e = [...i, ...a.path];
			if (e.length === 0) n._errors.push(t(a));
			else {
				let r = n, i = 0;
				for (; i < e.length;) {
					let n = e[i];
					i === e.length - 1 ? (r[n] = r[n] || { _errors: [] }, r[n]._errors.push(t(a))) : r[n] = r[n] || { _errors: [] }, r = r[n], i++;
				}
			}
		}
	};
	return r(e), n;
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/parse.js
var xs = (e) => (t, n, r, i) => {
	let a = r ? {
		...r,
		async: !1
	} : { async: !1 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise) throw new Po();
	if (o.issues.length) {
		let t = new (i?.Err ?? e)(o.issues.map((e) => ps(e, a, Io())));
		throw qo(t, i?.callee), t;
	}
	return o.value;
}, Ss = /* @__PURE__*/ xs(vs), Cs = (e) => async (t, n, r, i) => {
	let a = r ? {
		...r,
		async: !0
	} : { async: !0 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise && (o = await o), o.issues.length) {
		let t = new (i?.Err ?? e)(o.issues.map((e) => ps(e, a, Io())));
		throw qo(t, i?.callee), t;
	}
	return o.value;
}, ws = /* @__PURE__*/ Cs(vs), Ts = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		async: !1
	} : { async: !1 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (a instanceof Promise) throw new Po();
	return a.issues.length ? {
		success: !1,
		error: new (e ?? _s)(a.issues.map((e) => ps(e, i, Io())))
	} : {
		success: !0,
		data: a.value
	};
}, Es = /* @__PURE__*/ Ts(vs), Ds = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		async: !0
	} : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? {
		success: !1,
		error: new e(a.issues.map((e) => ps(e, i, Io())))
	} : {
		success: !0,
		data: a.value
	};
}, Os = /* @__PURE__*/ Ds(vs), ks = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return xs(e)(t, n, i);
}, As = (e) => (t, n, r) => xs(e)(t, n, r), js = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return Cs(e)(t, n, i);
}, Ms = (e) => async (t, n, r) => Cs(e)(t, n, r), Ns = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return Ts(e)(t, n, i);
}, Ps = (e) => (t, n, r) => Ts(e)(t, n, r), Fs = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return Ds(e)(t, n, i);
}, Is = (e) => async (t, n, r) => Ds(e)(t, n, r), Ls = /^[cC][0-9a-z]{6,}$/, Rs = /^[0-9a-z]+$/, zs = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Bs = /^[0-9a-vA-V]{20}$/, Vs = /^[A-Za-z0-9]{27}$/, Hs = /^[a-zA-Z0-9_-]{21}$/, Us = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Ws = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Gs = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Ks = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, qs = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Js() {
	return new RegExp(qs, "u");
}
var Ys = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Xs = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Zs = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Qs = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, $s = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, ec = /^[A-Za-z0-9_-]*$/, tc = /^https?$/, nc = /^\+[1-9]\d{6,14}$/, rc = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", ic = /*@__PURE__*/ RegExp(`^${rc}$`);
function ac(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function oc(e) {
	return RegExp(`^${ac(e)}$`);
}
function sc(e) {
	let t = ac({ precision: e.precision }), n = ["Z"];
	e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let r = `${t}(?:${n.join("|")})`;
	return RegExp(`^${rc}T(?:${r})$`);
}
var cc = (e) => {
	let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
	return RegExp(`^${t}$`);
}, lc = /^[^A-Z]*$/, uc = /^[^a-z]*$/, dc = /*@__PURE__*/ L("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), fc = /*@__PURE__*/ L("$ZodCheckMaxLength", (e, t) => {
	var n;
	dc.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !Bo(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.maximum ?? Infinity;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length <= t.maximum) return;
		let i = ms(r);
		n.issues.push({
			origin: i,
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), pc = /*@__PURE__*/ L("$ZodCheckMinLength", (e, t) => {
	var n;
	dc.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !Bo(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.minimum ?? -Infinity;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length >= t.minimum) return;
		let i = ms(r);
		n.issues.push({
			origin: i,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), mc = /*@__PURE__*/ L("$ZodCheckLengthEquals", (e, t) => {
	var n;
	dc.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !Bo(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if (i === t.length) return;
		let a = ms(r), o = i > t.length;
		n.issues.push({
			origin: a,
			...o ? {
				code: "too_big",
				maximum: t.length
			} : {
				code: "too_small",
				minimum: t.length
			},
			inclusive: !0,
			exact: !0,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), hc = /*@__PURE__*/ L("$ZodCheckStringFormat", (e, t) => {
	var n, r;
	dc.init(e, t), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.format = t.format, t.pattern && (n.patterns ??= /* @__PURE__ */ new Set(), n.patterns.add(t.pattern));
	}), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: t.format,
			input: n.value,
			...t.pattern ? { pattern: t.pattern.toString() } : {},
			inst: e,
			continue: !t.abort
		});
	}) : (r = e._zod).check ?? (r.check = () => {});
}), gc = /*@__PURE__*/ L("$ZodCheckRegex", (e, t) => {
	hc.init(e, t), e._zod.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: n.value,
			pattern: t.pattern.toString(),
			inst: e,
			continue: !t.abort
		});
	};
}), _c = /*@__PURE__*/ L("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= lc, hc.init(e, t);
}), vc = /*@__PURE__*/ L("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= uc, hc.init(e, t);
}), yc = /*@__PURE__*/ L("$ZodCheckIncludes", (e, t) => {
	dc.init(e, t);
	let n = $o(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
	t.pattern = r, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(r);
	}), e._zod.check = (n) => {
		n.value.includes(t.includes, t.position) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: t.includes,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), bc = /*@__PURE__*/ L("$ZodCheckStartsWith", (e, t) => {
	dc.init(e, t);
	let n = RegExp(`^${$o(t.prefix)}.*`);
	t.pattern ??= n, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.startsWith(t.prefix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: t.prefix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), xc = /*@__PURE__*/ L("$ZodCheckEndsWith", (e, t) => {
	dc.init(e, t);
	let n = RegExp(`.*${$o(t.suffix)}$`);
	t.pattern ??= n, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.endsWith(t.suffix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: t.suffix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Sc = /*@__PURE__*/ L("$ZodCheckOverwrite", (e, t) => {
	dc.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), Cc = class {
	constructor(e = []) {
		this.content = [], this.indent = 0, this && (this.args = e);
	}
	indented(e) {
		this.indent += 1, e(this), --this.indent;
	}
	write(e) {
		if (typeof e == "function") {
			e(this, { execution: "sync" }), e(this, { execution: "async" });
			return;
		}
		let t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), r = t.map((e) => e.slice(n)).map((e) => " ".repeat(this.indent * 2) + e);
		for (let e of r) this.content.push(e);
	}
	compile() {
		let e = Function, t = this?.args, n = [...(this?.content ?? [""]).map((e) => `  ${e}`)];
		return new e(...t, n.join("\n"));
	}
}, wc = {
	major: 4,
	minor: 4,
	patch: 3
}, Tc = /*@__PURE__*/ L("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = wc;
	let r = [...e._zod.def.checks ?? []];
	e._zod.traits.has("$ZodCheck") && r.unshift(e);
	for (let t of r) for (let n of t._zod.onattach) n(e);
	if (r.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		let t = (e, t, n) => {
			let r = ls(e), i;
			for (let a of t) {
				if (a._zod.def.when) {
					if (us(e) || !a._zod.def.when(e)) continue;
				} else if (r) continue;
				let t = e.issues.length, o = a._zod.check(e);
				if (o instanceof Promise && n?.async === !1) throw new Po();
				if (i || o instanceof Promise) i = (i ?? Promise.resolve()).then(async () => {
					await o, e.issues.length !== t && (r ||= ls(e, t));
				});
				else {
					if (e.issues.length === t) continue;
					r ||= ls(e, t);
				}
			}
			return i ? i.then(() => e) : e;
		}, n = (n, i, a) => {
			if (ls(n)) return n.aborted = !0, n;
			let o = t(i, r, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new Po();
				return o.then((t) => e._zod.parse(t, a));
			}
			return e._zod.parse(o, a);
		};
		e._zod.run = (i, a) => {
			if (a.skipChecks) return e._zod.parse(i, a);
			if (a.direction === "backward") {
				let t = e._zod.parse({
					value: i.value,
					issues: []
				}, {
					...a,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, i, a)) : n(t, i, a);
			}
			let o = e._zod.parse(i, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new Po();
				return o.then((e) => t(e, r, a));
			}
			return t(o, r, a);
		};
	}
	z(e, "~standard", () => ({
		validate: (t) => {
			try {
				let n = Es(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch {
				return Os(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), Ec = /*@__PURE__*/ L("$ZodString", (e, t) => {
	Tc.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? cc(e._zod.bag), e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = String(n.value);
		} catch {}
		return typeof n.value == "string" || n.issues.push({
			expected: "string",
			code: "invalid_type",
			input: n.value,
			inst: e
		}), n;
	};
}), V = /*@__PURE__*/ L("$ZodStringFormat", (e, t) => {
	hc.init(e, t), Ec.init(e, t);
}), Dc = /*@__PURE__*/ L("$ZodGUID", (e, t) => {
	t.pattern ??= Ws, V.init(e, t);
}), Oc = /*@__PURE__*/ L("$ZodUUID", (e, t) => {
	if (t.version) {
		let e = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[t.version];
		if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
		t.pattern ??= Gs(e);
	} else t.pattern ??= Gs();
	V.init(e, t);
}), kc = /*@__PURE__*/ L("$ZodEmail", (e, t) => {
	t.pattern ??= Ks, V.init(e, t);
}), Ac = /*@__PURE__*/ L("$ZodURL", (e, t) => {
	V.init(e, t), e._zod.check = (n) => {
		try {
			let r = n.value.trim();
			if (!t.normalize && t.protocol?.source === tc.source && !/^https?:\/\//i.test(r)) {
				n.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid URL format",
					input: n.value,
					inst: e,
					continue: !t.abort
				});
				return;
			}
			let i = new URL(r);
			t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(i.hostname) || n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: t.hostname.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			})), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol) || n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: t.protocol.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			})), t.normalize ? n.value = i.href : n.value = r;
			return;
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "url",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), jc = /*@__PURE__*/ L("$ZodEmoji", (e, t) => {
	t.pattern ??= Js(), V.init(e, t);
}), Mc = /*@__PURE__*/ L("$ZodNanoID", (e, t) => {
	t.pattern ??= Hs, V.init(e, t);
}), Nc = /*@__PURE__*/ L("$ZodCUID", (e, t) => {
	t.pattern ??= Ls, V.init(e, t);
}), Pc = /*@__PURE__*/ L("$ZodCUID2", (e, t) => {
	t.pattern ??= Rs, V.init(e, t);
}), Fc = /*@__PURE__*/ L("$ZodULID", (e, t) => {
	t.pattern ??= zs, V.init(e, t);
}), Ic = /*@__PURE__*/ L("$ZodXID", (e, t) => {
	t.pattern ??= Bs, V.init(e, t);
}), Lc = /*@__PURE__*/ L("$ZodKSUID", (e, t) => {
	t.pattern ??= Vs, V.init(e, t);
}), Rc = /*@__PURE__*/ L("$ZodISODateTime", (e, t) => {
	t.pattern ??= sc(t), V.init(e, t);
}), zc = /*@__PURE__*/ L("$ZodISODate", (e, t) => {
	t.pattern ??= ic, V.init(e, t);
}), H = /*@__PURE__*/ L("$ZodISOTime", (e, t) => {
	t.pattern ??= oc(t), V.init(e, t);
}), Bc = /*@__PURE__*/ L("$ZodISODuration", (e, t) => {
	t.pattern ??= Us, V.init(e, t);
}), Vc = /*@__PURE__*/ L("$ZodIPv4", (e, t) => {
	t.pattern ??= Ys, V.init(e, t), e._zod.bag.format = "ipv4";
}), Hc = /*@__PURE__*/ L("$ZodIPv6", (e, t) => {
	t.pattern ??= Xs, V.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
		try {
			new URL(`http://[${n.value}]`);
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
}), Uc = /*@__PURE__*/ L("$ZodCIDRv4", (e, t) => {
	t.pattern ??= Zs, V.init(e, t);
}), Wc = /*@__PURE__*/ L("$ZodCIDRv6", (e, t) => {
	t.pattern ??= Qs, V.init(e, t), e._zod.check = (n) => {
		let r = n.value.split("/");
		try {
			if (r.length !== 2) throw Error();
			let [e, t] = r;
			if (!t) throw Error();
			let n = Number(t);
			if (`${n}` !== t || n < 0 || n > 128) throw Error();
			new URL(`http://[${e}]`);
		} catch {
			n.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: n.value,
				inst: e,
				continue: !t.abort
			});
		}
	};
});
function Gc(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var Kc = /*@__PURE__*/ L("$ZodBase64", (e, t) => {
	t.pattern ??= $s, V.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		Gc(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function qc(e) {
	if (!ec.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Gc(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var Jc = /*@__PURE__*/ L("$ZodBase64URL", (e, t) => {
	t.pattern ??= ec, V.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		qc(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Yc = /*@__PURE__*/ L("$ZodE164", (e, t) => {
	t.pattern ??= nc, V.init(e, t);
});
function Xc(e, t = null) {
	try {
		let n = e.split(".");
		if (n.length !== 3) return !1;
		let [r] = n;
		if (!r) return !1;
		let i = JSON.parse(atob(r));
		return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
	} catch {
		return !1;
	}
}
var Zc = /*@__PURE__*/ L("$ZodJWT", (e, t) => {
	V.init(e, t), e._zod.check = (n) => {
		Xc(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Qc = /*@__PURE__*/ L("$ZodUnknown", (e, t) => {
	Tc.init(e, t), e._zod.parse = (e) => e;
}), $c = /*@__PURE__*/ L("$ZodNever", (e, t) => {
	Tc.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function el(e, t, n) {
	e.issues.length && t.issues.push(...ds(n, e.issues)), t.value[n] = e.value;
}
var tl = /*@__PURE__*/ L("$ZodArray", (e, t) => {
	Tc.init(e, t), e._zod.parse = (n, r) => {
		let i = n.value;
		if (!Array.isArray(i)) return n.issues.push({
			expected: "array",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
		n.value = Array(i.length);
		let a = [];
		for (let e = 0; e < i.length; e++) {
			let o = i[e], s = t.element._zod.run({
				value: o,
				issues: []
			}, r);
			s instanceof Promise ? a.push(s.then((t) => el(t, n, e))) : el(s, n, e);
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
});
function nl(e, t, n, r, i, a) {
	let o = n in r;
	if (e.issues.length) {
		if (i && a && !o) return;
		t.issues.push(...ds(n, e.issues));
	}
	if (!o && !i) {
		e.issues.length || t.issues.push({
			code: "invalid_type",
			expected: "nonoptional",
			input: void 0,
			path: [n]
		});
		return;
	}
	e.value === void 0 ? o && (t.value[n] = void 0) : t.value[n] = e.value;
}
function rl(e) {
	let t = Object.keys(e.shape);
	for (let n of t) if (!e.shape?.[n]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${n}": expected a Zod schema`);
	let n = ts(e.shape);
	return {
		...e,
		keys: t,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(n)
	};
}
function il(e, t, n, r, i, a) {
	let o = [], s = i.keySet, c = i.catchall._zod, l = c.def.type, u = c.optin === "optional", d = c.optout === "optional";
	for (let i in t) {
		if (i === "__proto__" || s.has(i)) continue;
		if (l === "never") {
			o.push(i);
			continue;
		}
		let a = c.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => nl(e, n, i, t, u, d))) : nl(a, n, i, t, u, d);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var al = /*@__PURE__*/ L("$ZodObject", (e, t) => {
	if (Tc.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		let e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			let n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	let n = zo(() => rl(t));
	z(e._zod, "propValues", () => {
		let e = t.shape, n = {};
		for (let t in e) {
			let r = e[t]._zod;
			if (r.values) {
				n[t] ?? (n[t] = /* @__PURE__ */ new Set());
				for (let e of r.values) n[t].add(e);
			}
		}
		return n;
	});
	let r = Jo, i = t.catchall, a;
	e._zod.parse = (t, o) => {
		a ??= n.value;
		let s = t.value;
		if (!r(s)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: s,
			inst: e
		}), t;
		t.value = {};
		let c = [], l = a.shape;
		for (let e of a.keys) {
			let n = l[e], r = n._zod.optin === "optional", i = n._zod.optout === "optional", a = n._zod.run({
				value: s[e],
				issues: []
			}, o);
			a instanceof Promise ? c.push(a.then((n) => nl(n, t, e, s, r, i))) : nl(a, t, e, s, r, i);
		}
		return i ? il(c, s, t, o, n.value, e) : c.length ? Promise.all(c).then(() => t) : t;
	};
}), ol = /*@__PURE__*/ L("$ZodObjectJIT", (e, t) => {
	al.init(e, t);
	let n = e._zod.parse, r = zo(() => rl(t)), i = (e) => {
		let t = new Cc([
			"shape",
			"payload",
			"ctx"
		]), n = r.value, i = (e) => {
			let t = Go(e);
			return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
		};
		t.write("const input = payload.value;");
		let a = Object.create(null), o = 0;
		for (let e of n.keys) a[e] = `key_${o++}`;
		t.write("const newResult = {};");
		for (let r of n.keys) {
			let n = a[r], o = Go(r), s = e[r], c = s?._zod?.optin === "optional", l = s?._zod?.optout === "optional";
			t.write(`const ${n} = ${i(r)};`), c && l ? t.write(`
        if (${n}.issues.length) {
          if (${o} in input) {
            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${o}, ...iss.path] : [${o}]
            })));
          }
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `) : c ? t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `) : t.write(`
        const ${n}_present = ${o} in input;
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${o}]
          });
        }

        if (${n}_present) {
          if (${n}.value === undefined) {
            newResult[${o}] = undefined;
          } else {
            newResult[${o}] = ${n}.value;
          }
        }

      `);
		}
		t.write("payload.value = newResult;"), t.write("return payload;");
		let s = t.compile();
		return (t, n) => s(e, t, n);
	}, a, o = Jo, s = !R.jitless, c = s && Yo.value, l = t.catchall, u;
	e._zod.parse = (d, f) => {
		u ??= r.value;
		let p = d.value;
		return o(p) ? s && c && f?.async === !1 && f.jitless !== !0 ? (a ||= i(t.shape), d = a(d, f), l ? il([], p, d, f, u, e) : d) : n(d, f) : (d.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), d);
	};
});
function sl(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !ls(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => ps(e, r, Io())))
	}), t);
}
var cl = /*@__PURE__*/ L("$ZodUnion", (e, t) => {
	Tc.init(e, t), z(e._zod, "optin", () => t.options.some((e) => e._zod.optin === "optional") ? "optional" : void 0), z(e._zod, "optout", () => t.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), z(e._zod, "values", () => {
		if (t.options.every((e) => e._zod.values)) return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
	}), z(e._zod, "pattern", () => {
		if (t.options.every((e) => e._zod.pattern)) {
			let e = t.options.map((e) => e._zod.pattern);
			return RegExp(`^(${e.map((e) => Vo(e.source)).join("|")})$`);
		}
	});
	let n = t.options.length === 1 ? t.options[0]._zod.run : null;
	e._zod.parse = (r, i) => {
		if (n) return n(r, i);
		let a = !1, o = [];
		for (let e of t.options) {
			let t = e._zod.run({
				value: r.value,
				issues: []
			}, i);
			if (t instanceof Promise) o.push(t), a = !0;
			else {
				if (t.issues.length === 0) return t;
				o.push(t);
			}
		}
		return a ? Promise.all(o).then((t) => sl(t, r, e, i)) : sl(o, r, e, i);
	};
}), ll = /*@__PURE__*/ L("$ZodIntersection", (e, t) => {
	Tc.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => ul(e, t, n)) : ul(e, i, a);
	};
});
function U(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (Xo(e) && Xo(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		for (let n of r) {
			let r = U(e[n], t[n]);
			if (!r.valid) return {
				valid: !1,
				mergeErrorPath: [n, ...r.mergeErrorPath]
			};
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = U(i, a);
			if (!o.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...o.mergeErrorPath]
			};
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function ul(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i;
	for (let n of t.issues) if (n.code === "unrecognized_keys") {
		i ??= n;
		for (let e of n.keys) r.has(e) || r.set(e, {}), r.get(e).l = !0;
	} else e.issues.push(n);
	for (let t of n.issues) if (t.code === "unrecognized_keys") for (let e of t.keys) r.has(e) || r.set(e, {}), r.get(e).r = !0;
	else e.issues.push(t);
	let a = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (a.length && i && e.issues.push({
		...i,
		keys: a
	}), ls(e)) return e;
	let o = U(t.value, n.value);
	if (!o.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
	return e.value = o.data, e;
}
var dl = /*@__PURE__*/ L("$ZodEnum", (e, t) => {
	Tc.init(e, t);
	let n = Lo(t.entries), r = new Set(n);
	e._zod.values = r, e._zod.pattern = RegExp(`^(${n.filter((e) => Qo.has(typeof e)).map((e) => typeof e == "string" ? $o(e) : e.toString()).join("|")})$`), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), fl = /*@__PURE__*/ L("$ZodLiteral", (e, t) => {
	if (Tc.init(e, t), t.values.length === 0) throw Error("Cannot create literal schema with no valid values");
	let n = new Set(t.values);
	e._zod.values = n, e._zod.pattern = RegExp(`^(${t.values.map((e) => typeof e == "string" ? $o(e) : e ? $o(e.toString()) : String(e)).join("|")})$`), e._zod.parse = (r, i) => {
		let a = r.value;
		return n.has(a) || r.issues.push({
			code: "invalid_value",
			values: t.values,
			input: a,
			inst: e
		}), r;
	};
}), pl = /*@__PURE__*/ L("$ZodTransform", (e, t) => {
	Tc.init(e, t), e._zod.optin = "optional", e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new Fo(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n.fallback = !0, n));
		if (i instanceof Promise) throw new Po();
		return n.value = i, n.fallback = !0, n;
	};
});
function ml(e, t) {
	return t === void 0 && (e.issues.length || e.fallback) ? {
		issues: [],
		value: void 0
	} : e;
}
var hl = /*@__PURE__*/ L("$ZodOptional", (e, t) => {
	Tc.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", z(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, void 0]) : void 0), z(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${Vo(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (t.innerType._zod.optin === "optional") {
			let r = e.value, i = t.innerType._zod.run(e, n);
			return i instanceof Promise ? i.then((e) => ml(e, r)) : ml(i, r);
		}
		return e.value === void 0 ? e : t.innerType._zod.run(e, n);
	};
}), gl = /*@__PURE__*/ L("$ZodExactOptional", (e, t) => {
	hl.init(e, t), z(e._zod, "values", () => t.innerType._zod.values), z(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), _l = /*@__PURE__*/ L("$ZodNullable", (e, t) => {
	Tc.init(e, t), z(e._zod, "optin", () => t.innerType._zod.optin), z(e._zod, "optout", () => t.innerType._zod.optout), z(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${Vo(e.source)}|null)$`) : void 0;
	}), z(e._zod, "values", () => t.innerType._zod.values ? new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), vl = /*@__PURE__*/ L("$ZodDefault", (e, t) => {
	Tc.init(e, t), e._zod.optin = "optional", z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => yl(e, t)) : yl(r, t);
	};
});
function yl(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var bl = /*@__PURE__*/ L("$ZodPrefault", (e, t) => {
	Tc.init(e, t), e._zod.optin = "optional", z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), xl = /*@__PURE__*/ L("$ZodNonOptional", (e, t) => {
	Tc.init(e, t), z(e._zod, "values", () => {
		let e = t.innerType._zod.values;
		return e ? new Set([...e].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => Sl(t, e)) : Sl(i, e);
	};
});
function Sl(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
var Cl = /*@__PURE__*/ L("$ZodCatch", (e, t) => {
	Tc.init(e, t), e._zod.optin = "optional", z(e._zod, "optout", () => t.innerType._zod.optout), z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((r) => (e.value = r.value, r.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: r.issues.map((e) => ps(e, n, Io())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e)) : (e.value = r.value, r.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: r.issues.map((e) => ps(e, n, Io())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e);
	};
}), wl = /*@__PURE__*/ L("$ZodPipe", (e, t) => {
	Tc.init(e, t), z(e._zod, "values", () => t.in._zod.values), z(e._zod, "optin", () => t.in._zod.optin), z(e._zod, "optout", () => t.out._zod.optout), z(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => Tl(e, t.in, n)) : Tl(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => Tl(e, t.out, n)) : Tl(r, t.out, n);
	};
});
function Tl(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues,
		fallback: e.fallback
	}, n);
}
var El = /*@__PURE__*/ L("$ZodReadonly", (e, t) => {
	Tc.init(e, t), z(e._zod, "propValues", () => t.innerType._zod.propValues), z(e._zod, "values", () => t.innerType._zod.values), z(e._zod, "optin", () => t.innerType?._zod?.optin), z(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(Dl) : Dl(r);
	};
});
function Dl(e) {
	return e.value = Object.freeze(e.value), e;
}
var Ol = /*@__PURE__*/ L("$ZodCustom", (e, t) => {
	dc.init(e, t), Tc.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => kl(t, n, r, e));
		kl(i, n, r, e);
	};
});
function kl(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(hs(e));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/registries.js
var Al, jl = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(e, ...t) {
		let n = t[0];
		return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(e) {
		let t = this._map.get(e);
		return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
	}
	get(e) {
		let t = e._zod.parent;
		if (t) {
			let n = { ...this.get(t) ?? {} };
			delete n.id;
			let r = {
				...n,
				...this._map.get(e)
			};
			return Object.keys(r).length ? r : void 0;
		}
		return this._map.get(e);
	}
	has(e) {
		return this._map.has(e);
	}
};
function Ml() {
	return new jl();
}
(Al = globalThis).__zod_globalRegistry ?? (Al.__zod_globalRegistry = Ml());
var Nl = globalThis.__zod_globalRegistry;
//#endregion
//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function Pl(e, t) {
	return new e({
		type: "string",
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Fl(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Il(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ll(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Rl(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function zl(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Bl(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function W(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function G(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function K(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function q(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Vl(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Hl(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ul(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Wl(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Gl(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Kl(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ql(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Jl(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Yl(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Xl(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Zl(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ql(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function $l(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function eu(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function tu(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function nu(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function ru(e, t) {
	return new e({
		type: "never",
		...B(t)
	});
}
// @__NO_SIDE_EFFECTS__
function iu(e, t) {
	return new fc({
		check: "max_length",
		...B(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function au(e, t) {
	return new pc({
		check: "min_length",
		...B(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function ou(e, t) {
	return new mc({
		check: "length_equals",
		...B(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function su(e, t) {
	return new gc({
		check: "string_format",
		format: "regex",
		...B(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function cu(e) {
	return new _c({
		check: "string_format",
		format: "lowercase",
		...B(e)
	});
}
// @__NO_SIDE_EFFECTS__
function lu(e) {
	return new vc({
		check: "string_format",
		format: "uppercase",
		...B(e)
	});
}
// @__NO_SIDE_EFFECTS__
function uu(e, t) {
	return new yc({
		check: "string_format",
		format: "includes",
		...B(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function du(e, t) {
	return new bc({
		check: "string_format",
		format: "starts_with",
		...B(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function fu(e, t) {
	return new xc({
		check: "string_format",
		format: "ends_with",
		...B(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function pu(e) {
	return new Sc({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function mu(e) {
	return /* @__PURE__ */ pu((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function hu() {
	return /* @__PURE__ */ pu((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function gu() {
	return /* @__PURE__ */ pu((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function _u() {
	return /* @__PURE__ */ pu((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function vu() {
	return /* @__PURE__ */ pu((e) => Ko(e));
}
// @__NO_SIDE_EFFECTS__
function yu(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...B(n)
	});
}
// @__NO_SIDE_EFFECTS__
function bu(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...B(n)
	});
}
// @__NO_SIDE_EFFECTS__
function xu(e, t) {
	let n = /* @__PURE__ */ Su((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(hs(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", r.input ??= t.value, r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(hs(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function Su(e, t) {
	let n = new dc({
		check: "custom",
		...B(t)
	});
	return n._zod.check = e, n;
}
//#endregion
//#region ../../node_modules/.pnpm/zod@4.4.3/node_modules/zod/v4/core/to-json-schema.js
function Cu(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? Nl,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		external: e?.external ?? void 0
	};
}
function wu(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var r;
	let i = e._zod.def, a = t.seen.get(e);
	if (a) return a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
	let o = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, o);
	let s = e._zod.toJSONSchema?.();
	if (s) o.schema = s;
	else {
		let r = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
		else {
			let n = o.schema, a = t.processors[i.type];
			if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			a(e, t, n, r);
		}
		let a = e._zod.parent;
		a && (o.ref ||= a, wu(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Object.assign(o.schema, c), t.io === "input" && Du(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Tu(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = /* @__PURE__ */ new Map();
	for (let t of e.seen.entries()) {
		let n = e.metadataRegistry.get(t[0])?.id;
		if (n) {
			let e = r.get(n);
			if (e && e !== t[0]) throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			r.set(n, t[0]);
		}
	}
	let i = (t) => {
		let r = e.target === "draft-2020-12" ? "$defs" : "definitions";
		if (e.external) {
			let n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
			if (n) return { ref: i(n) };
			let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
			return t[1].defId = a, {
				defId: a,
				ref: `${i("__shared")}#/${r}/${a}`
			};
		}
		if (t[1] === n) return { ref: "#" };
		let i = `#/${r}/`, a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + a
		};
	}, a = (e) => {
		if (e[1].schema.$ref) return;
		let t = e[1], { ref: n, defId: r } = i(e);
		t.def = { ...t.schema }, r && (t.defId = r);
		let a = t.schema;
		for (let e in a) delete a[e];
		a.$ref = n;
	};
	if (e.cycles === "throw") for (let t of e.seen.entries()) {
		let e = t[1];
		if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let n of e.seen.entries()) {
		let r = n[1];
		if (t === n[0]) {
			a(n);
			continue;
		}
		if (e.external) {
			let r = e.external.registry.get(n[0])?.id;
			if (t !== n[0] && r) {
				a(n);
				continue;
			}
		}
		if (e.metadataRegistry.get(n[0])?.id) {
			a(n);
			continue;
		}
		if (r.cycle) {
			a(n);
			continue;
		}
		if (r.count > 1 && e.reused === "ref") {
			a(n);
			continue;
		}
	}
}
function Eu(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : Object.assign(i, s), Object.assign(i, a), t._zod.parent === o) for (let e in i) e === "$ref" || e === "allOf" || e in a || delete i[e];
			if (s.$ref && n.def) for (let e in i) e === "$ref" || e === "allOf" || e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		let s = t._zod.parent;
		if (s && s !== o) {
			r(s);
			let t = e.seen.get(s);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e === "$ref" || e === "allOf" || e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	for (let t of [...e.seen.entries()].reverse()) r(t[0]);
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	Object.assign(i, n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, o[e.defId] = e.def);
	}
	e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: ku(t, "input", e.processors),
					output: ku(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function Du(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return Du(r.element, n);
	if (r.type === "set") return Du(r.valueType, n);
	if (r.type === "lazy") return Du(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault") return Du(r.innerType, n);
	if (r.type === "intersection") return Du(r.left, n) || Du(r.right, n);
	if (r.type === "record" || r.type === "map") return Du(r.keyType, n) || Du(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : Du(r.in, n) || Du(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (Du(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (Du(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (Du(e, n)) return !0;
		return !!(r.rest && Du(r.rest, n));
	}
	return !1;
}
var Ou = (e, t = {}) => (n) => {
	let r = Cu({
		...n,
		processors: t
	});
	return wu(e, r), Tu(r, e), Eu(r, e);
}, ku = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = Cu({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return wu(e, o), Tu(o, e), Eu(o, e);
}, Au = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, ju = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l } = e._zod.bag;
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = Au[s] ?? s, i.format === "" && delete i.format, s === "time" && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c];
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, Mu = (e, t, n, r) => {
	n.not = {};
}, Nu = (e, t, n, r) => {
	let i = e._zod.def, a = Lo(i.entries);
	a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
}, Pu = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Custom types cannot be represented in JSON Schema");
}, Fu = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Transforms cannot be represented in JSON Schema");
}, Iu = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = e._zod.bag;
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = wu(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
}, Lu = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "object", i.properties = {};
	let o = a.shape;
	for (let e in o) i.properties[e] = wu(o[e], t, {
		...r,
		path: [
			...r.path,
			"properties",
			e
		]
	});
	let s = new Set(Object.keys(o)), c = new Set([...s].filter((e) => {
		let n = a.shape[e]._zod;
		return t.io === "input" ? n.optin === void 0 : n.optout === void 0;
	}));
	c.size > 0 && (i.required = Array.from(c)), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = wu(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, Ru = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => wu(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, zu = (e, t, n, r) => {
	let i = e._zod.def, a = wu(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = wu(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1;
	n.allOf = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
}, Bu = (e, t, n, r) => {
	let i = e._zod.def, a = wu(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, Vu = (e, t, n, r) => {
	let i = e._zod.def;
	wu(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Hu = (e, t, n, r) => {
	let i = e._zod.def;
	wu(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.default = JSON.parse(JSON.stringify(i.defaultValue));
}, Uu = (e, t, n, r) => {
	let i = e._zod.def;
	wu(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
}, Wu = (e, t, n, r) => {
	let i = e._zod.def;
	wu(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		throw Error("Dynamic catch values are not supported in JSON Schema");
	}
	n.default = o;
}, Gu = (e, t, n, r) => {
	let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
	wu(o, t, r);
	let s = t.seen.get(e);
	s.ref = o;
}, Ku = (e, t, n, r) => {
	let i = e._zod.def;
	wu(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, Y = (e, t, n, r) => {
	let i = e._zod.def;
	wu(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, qu = /*@__PURE__*/ L("ZodMiniType", (e, t) => {
	if (!e._zod) throw Error("Uninitialized schema in ZodMiniType.");
	Tc.init(e, t), e.def = t, e.type = t.type, e.parse = (t, n) => Ss(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => Es(e, t, n), e.parseAsync = async (t, n) => ws(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => Os(e, t, n), e.check = (...n) => e.clone({
		...t,
		checks: [...t.checks ?? [], ...n.map((e) => typeof e == "function" ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)]
	}, { parent: !0 }), e.with = e.check, e.clone = (t, n) => es(e, t, n), e.brand = () => e, e.register = ((t, n) => (t.add(e, n), e)), e.apply = (t) => t(e);
}), Ju = /*@__PURE__*/ L("ZodMiniString", (e, t) => {
	Ec.init(e, t), qu.init(e, t);
});
// @__NO_SIDE_EFFECTS__
function Yu(e) {
	return /* @__PURE__ */ Pl(Ju, e);
}
var Xu = /*@__PURE__*/ L("ZodMiniObject", (e, t) => {
	al.init(e, t), qu.init(e, t), z(e, "shape", () => t.shape);
});
// @__NO_SIDE_EFFECTS__
function Zu(e, t) {
	return new Xu({
		type: "object",
		shape: e ?? {},
		...B(t)
	});
}
var Qu = /*@__PURE__*/ L("ZodMiniUnion", (e, t) => {
	cl.init(e, t), qu.init(e, t);
});
// @__NO_SIDE_EFFECTS__
function $u(e, t) {
	return new Qu({
		type: "union",
		options: e,
		...B(t)
	});
}
var ed = /*@__PURE__*/ L("ZodMiniEnum", (e, t) => {
	dl.init(e, t), qu.init(e, t), e.options = Object.values(t.entries);
});
// @__NO_SIDE_EFFECTS__
function td(e, t) {
	return new ed({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...B(t)
	});
}
var nd = /*@__PURE__*/ L("ZodMiniLiteral", (e, t) => {
	fl.init(e, t), qu.init(e, t);
});
// @__NO_SIDE_EFFECTS__
function rd(e, t) {
	return new nd({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...B(t)
	});
}
var id = /*@__PURE__*/ L("ZodMiniOptional", (e, t) => {
	hl.init(e, t), qu.init(e, t);
});
// @__NO_SIDE_EFFECTS__
function ad(e) {
	return new id({
		type: "optional",
		innerType: e
	});
}
//#endregion
//#region src/lib/components/BuildCheck.tsx
var od = /* @__PURE__ */ Zu({
	buildId: /* @__PURE__ */ Yu(),
	timestamp: /* @__PURE__ */ Yu(),
	status: /* @__PURE__ */ td([
		"in-progress",
		"success",
		"failed"
	])
}), sd = ({ buildId: e, environmentType: t, endpoint: n = "/__zuplo/docs" }) => {
	let r = vt({
		queryKey: [
			"zuplo-build-check",
			e,
			n
		],
		refetchInterval: 3e3,
		enabled: e !== void 0 && t === "WORKING_COPY",
		retry: !1,
		queryFn: async () => {
			let e = await fetch(n, { signal: AbortSignal.timeout(2e3) });
			if (!e.ok) throw Error("Failed to fetch build status");
			let t = await e.json();
			return od.parse(t);
		}
	});
	if ((0, A.useEffect)(() => {
		r.data?.status === "success" && r.data.buildId && (document.cookie = `zuplo-build=${r.data.buildId}; path=/; max-age=300; secure; SameSite=None`);
	}, [r.data]), r.isError || !r.data || r.data.buildId === e) return null;
	let i = r.data.status === "success";
	return /* @__PURE__ */ (0, j.jsxs)("div", {
		className: "fixed flex flex-col gap-3 p-4 rounded-xl w-96 border z-20 bg-background left-0 right-0 top-4 mx-auto shadow-lg",
		children: [
			i ? /* @__PURE__ */ (0, j.jsxs)("div", {
				className: "flex flex-row items-center gap-2",
				children: [/* @__PURE__ */ (0, j.jsx)(mr, { size: 16 }), /* @__PURE__ */ (0, j.jsx)("span", {
					className: "text-sm",
					children: "New version available"
				})]
			}) : /* @__PURE__ */ (0, j.jsxs)("div", {
				className: "flex flex-row items-center gap-2",
				children: [/* @__PURE__ */ (0, j.jsx)(rn, {
					size: 16,
					className: "animate-spin"
				}), /* @__PURE__ */ (0, j.jsx)("span", {
					className: "text-sm",
					children: "Building new version..."
				})]
			}),
			/* @__PURE__ */ (0, j.jsx)("span", {
				className: "text-xs",
				children: i ? "To see the new version, reload the page now." : "A new version of the developer portal will be available soon."
			}),
			i && /* @__PURE__ */ (0, j.jsx)(cn, {
				variant: "outline",
				size: "sm",
				className: "w-full",
				onClick: () => {
					window.location.reload();
				},
				children: "Reload"
			})
		]
	});
}, cd = ({ children: e }) => {
	let { options: t } = Cn(), { metadata: n } = t, r = be(), i = n?.favicon ? /^https?:\/\//.test(n.favicon) ? n.favicon : O(t.basePath, n.favicon) : void 0;
	return d({
		titleTemplate: (e) => (e ? n?.title : n?.defaultTitle) ?? "",
		link: [...t.canonicalUrlOrigin ? [{
			rel: "canonical",
			href: O(t.canonicalUrlOrigin, t.basePath, r.pathname)
		}] : [], ...i ? [{
			rel: "icon",
			href: i
		}] : []],
		meta: [
			...n?.description ? [{
				name: "description",
				content: n.description
			}] : [],
			...n?.generator ? [{
				name: "generator",
				content: n.generator
			}] : [],
			...n?.applicationName ? [{
				name: "application-name",
				content: n.applicationName
			}] : [],
			...n?.referrer ? [{
				name: "referrer",
				content: n.referrer
			}] : [],
			...n?.keywords && n.keywords.length > 0 ? [{
				name: "keywords",
				content: n.keywords.join(", ")
			}] : [],
			...n?.authors?.map((e) => ({
				name: "author",
				content: e
			})) ?? [],
			...n?.creator ? [{
				name: "creator",
				content: n.creator
			}] : [],
			...n?.publisher ? [{
				name: "publisher",
				content: n.publisher
			}] : [],
			...n?.robots ? [{
				name: "robots",
				content: n.robots
			}] : []
		]
	}), e;
}, ld = ({ title: e = "An error occurred", message: t, category: n }) => /* @__PURE__ */ (0, j.jsxs)(Di, {
	className: "h-full pt-(--padding-content-top)",
	children: [
		n && /* @__PURE__ */ (0, j.jsx)(b, { children: n }),
		e && /* @__PURE__ */ (0, j.jsx)(S, {
			level: 1,
			className: "flex gap-3.5 items-center",
			children: e
		}),
		/* @__PURE__ */ (0, j.jsx)("p", { children: t })
	]
}), ud = () => {
	let e = _e(), { notFoundPage: t } = Cn();
	return t ? /* @__PURE__ */ (0, j.jsx)(j.Fragment, { children: t }) : /* @__PURE__ */ (0, j.jsxs)(Di, {
		className: "h-full pt-(--padding-content-top) mx-auto w-full max-w-5xl",
		"data-pagefind-ignore": "all",
		children: [
			/* @__PURE__ */ (0, j.jsx)(b, { children: "404" }),
			/* @__PURE__ */ (0, j.jsxs)(S, {
				level: 1,
				className: "flex gap-3.5 items-center",
				children: ["Page not found", /* @__PURE__ */ (0, j.jsx)(Ar, { size: 24 })]
			}),
			/* @__PURE__ */ (0, j.jsxs)(ra, { children: [
				"Start by adding a file at",
				" ",
				/* @__PURE__ */ (0, j.jsxs)("code", { children: [
					"{DOCUMENT_ROOT}",
					"/",
					e["*"],
					".mdx"
				] }),
				" ",
				"and add some content to make this error go away. By default",
				" ",
				/* @__PURE__ */ (0, j.jsx)("code", { children: "DOCUMENT_ROOT" }),
				" is the `pages` directory."
			] }),
			/* @__PURE__ */ (0, j.jsx)("p", { children: "It seems that the page you are looking for does not exist or may have been moved. Please check the URL for any typos or use the navigation menu to find the correct page." }),
			/* @__PURE__ */ (0, j.jsx)(De, {
				to: "/",
				children: "Go back home"
			})
		]
	});
}, dd = (e) => {
	switch (e) {
		case 400: return {
			title: "Bad Request",
			message: "The request could not be understood by the server due to malformed syntax."
		};
		case 403: return {
			title: "Forbidden",
			message: "You don't have permission to access this resource."
		};
		case 404: return {
			title: "Not Found",
			message: "The requested resource could not be found."
		};
		case 405: return {
			title: "Method Not Allowed",
			message: "The request method is not supported for the requested resource."
		};
		case 414: return {
			title: "Request URI Too Large",
			message: "The request URI is too large."
		};
		case 416: return {
			title: "Range Not Satisfiable",
			message: "The server cannot satisfy the request range."
		};
		case 500: return {
			title: "Internal Server Error",
			message: "An unexpected error occurred while processing your request."
		};
		case 501: return {
			title: "Not Implemented",
			message: "The server does not support the functionality required to fulfill the request."
		};
		case 502: return {
			title: "Bad Gateway",
			message: "The server received an invalid response from the upstream server."
		};
		case 503: return {
			title: "Service Unavailable",
			message: "The server is temporarily unable to handle the request."
		};
		case 504: return {
			title: "Gateway Timeout",
			message: "The server did not receive a timely response from the upstream server."
		};
		default: return {
			title: "An error occurred",
			message: "Something went wrong while processing your request."
		};
	}
}, fd = ({ statusCode: e, message: t }) => {
	if (e === 404) return /* @__PURE__ */ (0, j.jsx)(ud, {});
	let n = dd(e);
	return /* @__PURE__ */ (0, j.jsx)(ld, {
		title: n.title,
		message: t ?? n.message,
		category: e
	});
};
Object.groupBy === void 0 && (Object.groupBy = (e, t) => {
	let n = {}, r = 0;
	for (let i of e) {
		let e = t(i, r++);
		n[e] ??= [], n[e].push(i);
	}
	return n;
}), typeof window < "u" && new MutationObserver(() => {
	let e = document.body.hasAttribute("data-scroll-locked") ? getComputedStyle(document.body).getPropertyValue("--removed-body-scroll-bar-size") : "";
	e ? document.documentElement.style.setProperty("--scrollbar-width", e) : document.documentElement.style.removeProperty("--scrollbar-width");
}).observe(document.body, {
	attributes: !0,
	attributeFilter: ["data-scroll-locked"]
}), typeof window < "u" && !window.requestIdleCallback && (window.requestIdleCallback = (e) => Number(setTimeout(() => e({
	didTimeout: !1,
	timeRemaining: () => 50
}), 1)), window.cancelIdleCallback = (e) => clearTimeout(e));
//#endregion
//#region src/config/validators/reason-codes.ts
var pd = {
	UNAUTHORIZED: "unauthorized",
	FORBIDDEN: "forbidden"
}, md = () => {
	let e = be(), t = (0, A.useRef)(e.pathname);
	(0, A.useEffect)(() => {
		let n = t.current !== e.pathname, r = e.hash !== "";
		n && !r && window.scrollTo(0, 0), t.current = e.pathname;
	}, [e.pathname, e.hash]);
}, hd = ({ icon: e }) => typeof e == "string" ? /* @__PURE__ */ (0, j.jsx)("img", {
	src: `https://cdn.simpleicons.org/${e}/000000/ffffff`,
	className: "size-5",
	alt: e,
	loading: "lazy"
}) : e, gd = (e) => /^https?:/.test(e), _d = () => {
	let { options: e } = Cn(), { site: t } = e, n = t?.footer;
	return n ? /* @__PURE__ */ (0, j.jsx)("footer", {
		className: "border-t bg-background",
		children: /* @__PURE__ */ (0, j.jsxs)("div", {
			className: "mx-auto max-w-screen-2xl px-4 lg:px-8 py-8 pt-20",
			children: [/* @__PURE__ */ (0, j.jsxs)("div", {
				className: k("flex flex-row gap-8", {
					"justify-center": !n.position || n.position === "center",
					"justify-start": n.position === "start",
					"justify-end": n.position === "end"
				}),
				children: [
					/* @__PURE__ */ (0, j.jsx)(Wi.Target, { name: "footer-before" }),
					n.columns && /* @__PURE__ */ (0, j.jsx)("div", {
						className: "w-full md:max-w-3xl grid grid-cols-[1fr_1fr] gap-8 md:grid-cols-[repeat(var(--columns),minmax(0,1fr))]",
						style: { "--columns": n.columns.length },
						children: n.columns.map((e) => /* @__PURE__ */ (0, j.jsxs)("div", {
							className: k({
								"justify-self-center": !e.position || e.position === "center",
								"justify-self-start": e.position === "start",
								"justify-self-end": e.position === "end"
							}),
							children: [/* @__PURE__ */ (0, j.jsx)("span", {
								className: "text-sm font-semibold",
								children: e.title
							}), /* @__PURE__ */ (0, j.jsx)("ul", {
								className: "mt-4 space-y-2",
								children: e.links.map((e) => {
									let t = "flex flex-row gap-1 items-center text-sm text-muted-foreground hover:text-accent-foreground";
									return /* @__PURE__ */ (0, j.jsx)("li", { children: gd(e.href) ? /* @__PURE__ */ (0, j.jsxs)("a", {
										href: e.href,
										target: "_blank",
										rel: "noopener noreferrer",
										className: t,
										children: [/* @__PURE__ */ (0, j.jsx)("span", { children: e.label }), /* @__PURE__ */ (0, j.jsx)(ne, { size: 12 })]
									}) : /* @__PURE__ */ (0, j.jsx)(uo, {
										to: e.href,
										className: t,
										children: /* @__PURE__ */ (0, j.jsx)("span", { children: e.label })
									}) }, e.href + e.label);
								})
							})]
						}, e.title))
					}),
					/* @__PURE__ */ (0, j.jsx)(Wi.Target, { name: "footer-after" })
				]
			}), /* @__PURE__ */ (0, j.jsxs)("div", {
				className: k("flex items-center justify-between", n.columns && "border-t mt-8 pt-8"),
				children: [
					n.logo && /* @__PURE__ */ (0, j.jsxs)(j.Fragment, { children: [/* @__PURE__ */ (0, j.jsx)("img", {
						src: n.logo.src.light,
						alt: n.logo.alt,
						className: "w-8 dark:hidden",
						style: { width: n.logo.width },
						loading: "lazy"
					}), /* @__PURE__ */ (0, j.jsx)("img", {
						src: n.logo.src.dark,
						alt: n.logo.alt,
						className: "w-8 hidden dark:block",
						loading: "lazy",
						style: { width: n.logo.width }
					})] }),
					n.copyright && /* @__PURE__ */ (0, j.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: n.copyright
					}),
					/* @__PURE__ */ (0, j.jsx)("div", {
						className: "flex items-center gap-2",
						children: n.social?.map((e) => /* @__PURE__ */ (0, j.jsxs)("a", {
							href: e.href,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "w-auto gap-2 flex text-muted-foreground hover:text-accent-foreground",
							children: [/* @__PURE__ */ (0, j.jsx)(hd, { icon: e.icon }), e.label]
						}, e.href))
					})
				]
			})]
		})
	}) : null;
};
//#endregion
//#region src/lib/ui/Skeleton.tsx
function vd({ className: e, ...t }) {
	return /* @__PURE__ */ (0, j.jsx)("div", {
		className: k("animate-pulse rounded-md bg-muted", e),
		...t
	});
}
//#endregion
//#region src/lib/components/Banner.tsx
var yd = {
	info: "bg-blue-500",
	note: "bg-gray-500",
	tip: "bg-green-600",
	caution: "bg-orange-500",
	danger: "bg-rose-500"
}, bd = () => {
	let { options: e } = Cn(), { site: t } = e, [n, r] = (0, A.useState)(!0);
	if (!t?.banner || !n) return /* @__PURE__ */ (0, j.jsx)("style", { children: ":root { --banner-height: 0px; }" });
	let i = t.banner.color && t.banner.color in yd ? yd[t.banner.color] : t.banner.color ? void 0 : "bg-primary", a = i ? {} : { backgroundColor: t.banner.color };
	return /* @__PURE__ */ (0, j.jsxs)("div", {
		className: k("relative text-primary-foreground text-sm font-medium px-4 py-2 flex gap-2 items-center lg:h-(--banner-height)", i),
		style: a,
		children: [/* @__PURE__ */ (0, j.jsx)("div", {
			className: "w-full",
			children: t.banner.message
		}), t.banner.dismissible && /* @__PURE__ */ (0, j.jsx)("button", {
			type: "button",
			className: "md:absolute md:end-4 -m-1.5 p-1.5 hover:bg-accent-foreground/10 rounded-md",
			onClick: () => r(!1),
			children: /* @__PURE__ */ (0, j.jsx)(gr, { size: 16 })
		})]
	});
}, xd = /*@__PURE__*/ L("ZodISODateTime", (e, t) => {
	Rc.init(e, t), Q.init(e, t);
});
function X(e) {
	return /* @__PURE__ */ Ql(xd, e);
}
var Sd = /*@__PURE__*/ L("ZodISODate", (e, t) => {
	zc.init(e, t), Q.init(e, t);
});
function Cd(e) {
	return /* @__PURE__ */ $l(Sd, e);
}
var wd = /*@__PURE__*/ L("ZodISOTime", (e, t) => {
	H.init(e, t), Q.init(e, t);
});
function Td(e) {
	return /* @__PURE__ */ eu(wd, e);
}
var Ed = /*@__PURE__*/ L("ZodISODuration", (e, t) => {
	Bc.init(e, t), Q.init(e, t);
});
function Dd(e) {
	return /* @__PURE__ */ tu(Ed, e);
}
var Od = /*@__PURE__*/ L("ZodError", (e, t) => {
	_s.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
		format: { value: (t) => bs(e, t) },
		flatten: { value: (t) => ys(e, t) },
		addIssue: { value: (t) => {
			e.issues.push(t), e.message = JSON.stringify(e.issues, Ro, 2);
		} },
		addIssues: { value: (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, Ro, 2);
		} },
		isEmpty: { get() {
			return e.issues.length === 0;
		} }
	});
}, { Parent: Error }), kd = /* @__PURE__ */ xs(Od), Ad = /* @__PURE__ */ Cs(Od), jd = /* @__PURE__ */ Ts(Od), Md = /* @__PURE__ */ Ds(Od), Nd = /* @__PURE__ */ ks(Od), Pd = /* @__PURE__ */ As(Od), Z = /* @__PURE__ */ js(Od), Fd = /* @__PURE__ */ Ms(Od), Id = /* @__PURE__ */ Ns(Od), Ld = /* @__PURE__ */ Ps(Od), Rd = /* @__PURE__ */ Fs(Od), zd = /* @__PURE__ */ Is(Od), Bd = /* @__PURE__ */ new WeakMap();
function Vd(e, t, n) {
	let r = Object.getPrototypeOf(e), i = Bd.get(r);
	if (i || (i = /* @__PURE__ */ new Set(), Bd.set(r, i)), !i.has(t)) {
		i.add(t);
		for (let e in n) {
			let t = n[e];
			Object.defineProperty(r, e, {
				configurable: !0,
				enumerable: !1,
				get() {
					let n = t.bind(this);
					return Object.defineProperty(this, e, {
						configurable: !0,
						writable: !0,
						enumerable: !0,
						value: n
					}), n;
				},
				set(t) {
					Object.defineProperty(this, e, {
						configurable: !0,
						writable: !0,
						enumerable: !0,
						value: t
					});
				}
			});
		}
	}
}
var Hd = /*@__PURE__*/ L("ZodType", (e, t) => (Tc.init(e, t), Object.assign(e["~standard"], { jsonSchema: {
	input: ku(e, "input"),
	output: ku(e, "output")
} }), e.toJSONSchema = Ou(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.parse = (t, n) => kd(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => jd(e, t, n), e.parseAsync = async (t, n) => Ad(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => Md(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => Nd(e, t, n), e.decode = (t, n) => Pd(e, t, n), e.encodeAsync = async (t, n) => Z(e, t, n), e.decodeAsync = async (t, n) => Fd(e, t, n), e.safeEncode = (t, n) => Id(e, t, n), e.safeDecode = (t, n) => Ld(e, t, n), e.safeEncodeAsync = async (t, n) => Rd(e, t, n), e.safeDecodeAsync = async (t, n) => zd(e, t, n), Vd(e, "ZodType", {
	check(...e) {
		let t = this.def;
		return this.clone(Wo(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return es(this, e, t);
	},
	brand() {
		return this;
	},
	register(e, t) {
		return e.add(this, t), this;
	},
	refine(e, t) {
		return this.check(qf(e, t));
	},
	superRefine(e, t) {
		return this.check(Jf(e, t));
	},
	overwrite(e) {
		return this.check(/* @__PURE__ */ pu(e));
	},
	optional() {
		return kf(this);
	},
	exactOptional() {
		return jf(this);
	},
	nullable() {
		return Nf(this);
	},
	nullish() {
		return kf(Nf(this));
	},
	nonoptional(e) {
		return zf(this, e);
	},
	array() {
		return _f(this);
	},
	or(e) {
		return xf([this, e]);
	},
	and(e) {
		return Cf(this, e);
	},
	transform(e) {
		return Uf(this, Df(e));
	},
	default(e) {
		return Ff(this, e);
	},
	prefault(e) {
		return Lf(this, e);
	},
	catch(e) {
		return Vf(this, e);
	},
	pipe(e) {
		return Uf(this, e);
	},
	readonly() {
		return Gf(this);
	},
	describe(e) {
		let t = this.clone();
		return Nl.add(t, { description: e }), t;
	},
	meta(...e) {
		if (e.length === 0) return Nl.get(this);
		let t = this.clone();
		return Nl.add(t, e[0]), t;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(e) {
		return e(this);
	}
}), Object.defineProperty(e, "description", {
	get() {
		return Nl.get(e)?.description;
	},
	configurable: !0
}), e)), Ud = /*@__PURE__*/ L("_ZodString", (e, t) => {
	Ec.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => ju(e, t, n, r);
	let n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, Vd(e, "_ZodString", {
		regex(...e) {
			return this.check(/* @__PURE__ */ su(...e));
		},
		includes(...e) {
			return this.check(/* @__PURE__ */ uu(...e));
		},
		startsWith(...e) {
			return this.check(/* @__PURE__ */ du(...e));
		},
		endsWith(...e) {
			return this.check(/* @__PURE__ */ fu(...e));
		},
		min(...e) {
			return this.check(/* @__PURE__ */ au(...e));
		},
		max(...e) {
			return this.check(/* @__PURE__ */ iu(...e));
		},
		length(...e) {
			return this.check(/* @__PURE__ */ ou(...e));
		},
		nonempty(...e) {
			return this.check(/* @__PURE__ */ au(1, ...e));
		},
		lowercase(e) {
			return this.check(/* @__PURE__ */ cu(e));
		},
		uppercase(e) {
			return this.check(/* @__PURE__ */ lu(e));
		},
		trim() {
			return this.check(/* @__PURE__ */ hu());
		},
		normalize(...e) {
			return this.check(/* @__PURE__ */ mu(...e));
		},
		toLowerCase() {
			return this.check(/* @__PURE__ */ gu());
		},
		toUpperCase() {
			return this.check(/* @__PURE__ */ _u());
		},
		slugify() {
			return this.check(/* @__PURE__ */ vu());
		}
	});
}), Wd = /*@__PURE__*/ L("ZodString", (e, t) => {
	Ec.init(e, t), Ud.init(e, t), e.email = (t) => e.check(/* @__PURE__ */ Fl(Kd, t)), e.url = (t) => e.check(/* @__PURE__ */ W(Yd, t)), e.jwt = (t) => e.check(/* @__PURE__ */ Zl(df, t)), e.emoji = (t) => e.check(/* @__PURE__ */ G(Xd, t)), e.guid = (t) => e.check(/* @__PURE__ */ Il(qd, t)), e.uuid = (t) => e.check(/* @__PURE__ */ Ll(Jd, t)), e.uuidv4 = (t) => e.check(/* @__PURE__ */ Rl(Jd, t)), e.uuidv6 = (t) => e.check(/* @__PURE__ */ zl(Jd, t)), e.uuidv7 = (t) => e.check(/* @__PURE__ */ Bl(Jd, t)), e.nanoid = (t) => e.check(/* @__PURE__ */ K(Zd, t)), e.guid = (t) => e.check(/* @__PURE__ */ Il(qd, t)), e.cuid = (t) => e.check(/* @__PURE__ */ q(Qd, t)), e.cuid2 = (t) => e.check(/* @__PURE__ */ J($d, t)), e.ulid = (t) => e.check(/* @__PURE__ */ Vl(ef, t)), e.base64 = (t) => e.check(/* @__PURE__ */ Jl(cf, t)), e.base64url = (t) => e.check(/* @__PURE__ */ Yl(lf, t)), e.xid = (t) => e.check(/* @__PURE__ */ Hl(tf, t)), e.ksuid = (t) => e.check(/* @__PURE__ */ Ul(nf, t)), e.ipv4 = (t) => e.check(/* @__PURE__ */ Wl(rf, t)), e.ipv6 = (t) => e.check(/* @__PURE__ */ Gl(af, t)), e.cidrv4 = (t) => e.check(/* @__PURE__ */ Kl(of, t)), e.cidrv6 = (t) => e.check(/* @__PURE__ */ ql(sf, t)), e.e164 = (t) => e.check(/* @__PURE__ */ Xl(uf, t)), e.datetime = (t) => e.check(X(t)), e.date = (t) => e.check(Cd(t)), e.time = (t) => e.check(Td(t)), e.duration = (t) => e.check(Dd(t));
});
function Gd(e) {
	return /* @__PURE__ */ Pl(Wd, e);
}
var Q = /*@__PURE__*/ L("ZodStringFormat", (e, t) => {
	V.init(e, t), Ud.init(e, t);
}), Kd = /*@__PURE__*/ L("ZodEmail", (e, t) => {
	kc.init(e, t), Q.init(e, t);
}), qd = /*@__PURE__*/ L("ZodGUID", (e, t) => {
	Dc.init(e, t), Q.init(e, t);
}), Jd = /*@__PURE__*/ L("ZodUUID", (e, t) => {
	Oc.init(e, t), Q.init(e, t);
}), Yd = /*@__PURE__*/ L("ZodURL", (e, t) => {
	Ac.init(e, t), Q.init(e, t);
}), Xd = /*@__PURE__*/ L("ZodEmoji", (e, t) => {
	jc.init(e, t), Q.init(e, t);
}), Zd = /*@__PURE__*/ L("ZodNanoID", (e, t) => {
	Mc.init(e, t), Q.init(e, t);
}), Qd = /*@__PURE__*/ L("ZodCUID", (e, t) => {
	Nc.init(e, t), Q.init(e, t);
}), $d = /*@__PURE__*/ L("ZodCUID2", (e, t) => {
	Pc.init(e, t), Q.init(e, t);
}), ef = /*@__PURE__*/ L("ZodULID", (e, t) => {
	Fc.init(e, t), Q.init(e, t);
}), tf = /*@__PURE__*/ L("ZodXID", (e, t) => {
	Ic.init(e, t), Q.init(e, t);
}), nf = /*@__PURE__*/ L("ZodKSUID", (e, t) => {
	Lc.init(e, t), Q.init(e, t);
}), rf = /*@__PURE__*/ L("ZodIPv4", (e, t) => {
	Vc.init(e, t), Q.init(e, t);
}), af = /*@__PURE__*/ L("ZodIPv6", (e, t) => {
	Hc.init(e, t), Q.init(e, t);
}), of = /*@__PURE__*/ L("ZodCIDRv4", (e, t) => {
	Uc.init(e, t), Q.init(e, t);
}), sf = /*@__PURE__*/ L("ZodCIDRv6", (e, t) => {
	Wc.init(e, t), Q.init(e, t);
}), cf = /*@__PURE__*/ L("ZodBase64", (e, t) => {
	Kc.init(e, t), Q.init(e, t);
}), lf = /*@__PURE__*/ L("ZodBase64URL", (e, t) => {
	Jc.init(e, t), Q.init(e, t);
}), uf = /*@__PURE__*/ L("ZodE164", (e, t) => {
	Yc.init(e, t), Q.init(e, t);
}), df = /*@__PURE__*/ L("ZodJWT", (e, t) => {
	Zc.init(e, t), Q.init(e, t);
}), ff = /*@__PURE__*/ L("ZodUnknown", (e, t) => {
	Qc.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function pf() {
	return /* @__PURE__ */ nu(ff);
}
var mf = /*@__PURE__*/ L("ZodNever", (e, t) => {
	$c.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => Mu(e, t, n, r);
});
function hf(e) {
	return /* @__PURE__ */ ru(mf, e);
}
var gf = /*@__PURE__*/ L("ZodArray", (e, t) => {
	tl.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => Iu(e, t, n, r), e.element = t.element, Vd(e, "ZodArray", {
		min(e, t) {
			return this.check(/* @__PURE__ */ au(e, t));
		},
		nonempty(e) {
			return this.check(/* @__PURE__ */ au(1, e));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ iu(e, t));
		},
		length(e, t) {
			return this.check(/* @__PURE__ */ ou(e, t));
		},
		unwrap() {
			return this.element;
		}
	});
});
function _f(e, t) {
	return /* @__PURE__ */ yu(gf, e, t);
}
var vf = /*@__PURE__*/ L("ZodObject", (e, t) => {
	ol.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => Lu(e, t, n, r), z(e, "shape", () => t.shape), Vd(e, "ZodObject", {
		keyof() {
			return Tf(Object.keys(this._zod.def.shape));
		},
		catchall(e) {
			return this.clone({
				...this._zod.def,
				catchall: e
			});
		},
		passthrough() {
			return this.clone({
				...this._zod.def,
				catchall: pf()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: pf()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: hf()
			});
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			});
		},
		extend(e) {
			return is(this, e);
		},
		safeExtend(e) {
			return as(this, e);
		},
		merge(e) {
			return os(this, e);
		},
		pick(e) {
			return ns(this, e);
		},
		omit(e) {
			return rs(this, e);
		},
		partial(...e) {
			return ss(Of, this, e[0]);
		},
		required(...e) {
			return cs(Rf, this, e[0]);
		}
	});
});
function yf(e, t) {
	return new vf({
		type: "object",
		shape: e ?? {},
		...B(t)
	});
}
var bf = /*@__PURE__*/ L("ZodUnion", (e, t) => {
	cl.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ru(e, t, n, r), e.options = t.options;
});
function xf(e, t) {
	return new bf({
		type: "union",
		options: e,
		...B(t)
	});
}
var Sf = /*@__PURE__*/ L("ZodIntersection", (e, t) => {
	ll.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => zu(e, t, n, r);
});
function Cf(e, t) {
	return new Sf({
		type: "intersection",
		left: e,
		right: t
	});
}
var wf = /*@__PURE__*/ L("ZodEnum", (e, t) => {
	dl.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => Nu(e, t, n, r), e.enum = t.entries, e.options = Object.values(t.entries);
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new wf({
			...t,
			checks: [],
			...B(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new wf({
			...t,
			checks: [],
			...B(r),
			entries: i
		});
	};
});
function Tf(e, t) {
	return new wf({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...B(t)
	});
}
var Ef = /*@__PURE__*/ L("ZodTransform", (e, t) => {
	pl.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => Fu(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new Fo(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(hs(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", t.input ??= n.value, t.inst ??= e, n.issues.push(hs(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n.fallback = !0, n)) : (n.value = i, n.fallback = !0, n);
	};
});
function Df(e) {
	return new Ef({
		type: "transform",
		transform: e
	});
}
var Of = /*@__PURE__*/ L("ZodOptional", (e, t) => {
	hl.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => Y(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function kf(e) {
	return new Of({
		type: "optional",
		innerType: e
	});
}
var Af = /*@__PURE__*/ L("ZodExactOptional", (e, t) => {
	gl.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => Y(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function jf(e) {
	return new Af({
		type: "optional",
		innerType: e
	});
}
var Mf = /*@__PURE__*/ L("ZodNullable", (e, t) => {
	_l.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => Bu(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Nf(e) {
	return new Mf({
		type: "nullable",
		innerType: e
	});
}
var Pf = /*@__PURE__*/ L("ZodDefault", (e, t) => {
	vl.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => Hu(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Ff(e, t) {
	return new Pf({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Zo(t);
		}
	});
}
var If = /*@__PURE__*/ L("ZodPrefault", (e, t) => {
	bl.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => Uu(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Lf(e, t) {
	return new If({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : Zo(t);
		}
	});
}
var Rf = /*@__PURE__*/ L("ZodNonOptional", (e, t) => {
	xl.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => Vu(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function zf(e, t) {
	return new Rf({
		type: "nonoptional",
		innerType: e,
		...B(t)
	});
}
var Bf = /*@__PURE__*/ L("ZodCatch", (e, t) => {
	Cl.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => Wu(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Vf(e, t) {
	return new Bf({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : () => t
	});
}
var Hf = /*@__PURE__*/ L("ZodPipe", (e, t) => {
	wl.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => Gu(e, t, n, r), e.in = t.in, e.out = t.out;
});
function Uf(e, t) {
	return new Hf({
		type: "pipe",
		in: e,
		out: t
	});
}
var Wf = /*@__PURE__*/ L("ZodReadonly", (e, t) => {
	El.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ku(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Gf(e) {
	return new Wf({
		type: "readonly",
		innerType: e
	});
}
var Kf = /*@__PURE__*/ L("ZodCustom", (e, t) => {
	Ol.init(e, t), Hd.init(e, t), e._zod.processJSONSchema = (t, n, r) => Pu(e, t, n, r);
});
function qf(e, t = {}) {
	return /* @__PURE__ */ bu(Kf, e, t);
}
function Jf(e, t) {
	return /* @__PURE__ */ xu(e, t);
}
//#endregion
//#region src/config/validators/HeaderNavigationSchema.ts
var Yf = Tf(/* @__PURE__ */ "a-arrow-down.a-arrow-up.a-large-small.accessibility.activity.activity-square.air-vent.airplay.alarm-check.alarm-clock.alarm-clock-check.alarm-clock-minus.alarm-clock-off.alarm-clock-plus.alarm-minus.alarm-plus.alarm-smoke.album.alert-circle.alert-octagon.alert-triangle.align-center.align-center-horizontal.align-center-vertical.align-end-horizontal.align-end-vertical.align-horizontal-distribute-center.align-horizontal-distribute-end.align-horizontal-distribute-start.align-horizontal-justify-center.align-horizontal-justify-end.align-horizontal-justify-start.align-horizontal-space-around.align-horizontal-space-between.align-justify.align-left.align-right.align-start-horizontal.align-start-vertical.align-vertical-distribute-center.align-vertical-distribute-end.align-vertical-distribute-start.align-vertical-justify-center.align-vertical-justify-end.align-vertical-justify-start.align-vertical-space-around.align-vertical-space-between.ambulance.ampersand.ampersands.amphora.anchor.angry.annoyed.antenna.anvil.aperture.app-window.app-window-mac.apple.archive.archive-restore.archive-x.area-chart.armchair.arrow-big-down.arrow-big-down-dash.arrow-big-left.arrow-big-left-dash.arrow-big-right.arrow-big-right-dash.arrow-big-up.arrow-big-up-dash.arrow-down.arrow-down-0-1.arrow-down-01.arrow-down-1-0.arrow-down-10.arrow-down-a-z.arrow-down-az.arrow-down-circle.arrow-down-from-line.arrow-down-left.arrow-down-left-from-circle.arrow-down-left-from-square.arrow-down-left-square.arrow-down-narrow-wide.arrow-down-right.arrow-down-right-from-circle.arrow-down-right-from-square.arrow-down-right-square.arrow-down-square.arrow-down-to-dot.arrow-down-to-line.arrow-down-up.arrow-down-wide-narrow.arrow-down-z-a.arrow-down-za.arrow-left.arrow-left-circle.arrow-left-from-line.arrow-left-right.arrow-left-square.arrow-left-to-line.arrow-right.arrow-right-circle.arrow-right-from-line.arrow-right-left.arrow-right-square.arrow-right-to-line.arrow-up.arrow-up-0-1.arrow-up-01.arrow-up-1-0.arrow-up-10.arrow-up-a-z.arrow-up-az.arrow-up-circle.arrow-up-down.arrow-up-from-dot.arrow-up-from-line.arrow-up-left.arrow-up-left-from-circle.arrow-up-left-from-square.arrow-up-left-square.arrow-up-narrow-wide.arrow-up-right.arrow-up-right-from-circle.arrow-up-right-from-square.arrow-up-right-square.arrow-up-square.arrow-up-to-line.arrow-up-wide-narrow.arrow-up-z-a.arrow-up-za.arrows-up-from-line.asterisk.asterisk-square.astroid.at-sign.atom.audio-lines.audio-waveform.award.axe.axis-3-d.axis-3d.baby.backpack.badge.badge-alert.badge-cent.badge-check.badge-dollar-sign.badge-euro.badge-help.badge-indian-rupee.badge-info.badge-japanese-yen.badge-minus.badge-percent.badge-plus.badge-pound-sterling.badge-question-mark.badge-russian-ruble.badge-swiss-franc.badge-turkish-lira.badge-x.baggage-claim.balloon.ban.banana.bandage.banknote.banknote-arrow-down.banknote-arrow-up.banknote-x.bar-chart.bar-chart-2.bar-chart-3.bar-chart-4.bar-chart-big.bar-chart-horizontal.bar-chart-horizontal-big.barcode.barrel.baseline.bath.battery.battery-charging.battery-full.battery-low.battery-medium.battery-plus.battery-warning.beaker.bean.bean-off.bed.bed-double.bed-single.beef.beef-off.beer.beer-off.bell.bell-check.bell-dot.bell-electric.bell-minus.bell-off.bell-plus.bell-ring.between-horizonal-end.between-horizonal-start.between-horizontal-end.between-horizontal-start.between-vertical-end.between-vertical-start.biceps-flexed.bike.binary.binoculars.biohazard.bird.birdhouse.bitcoin.blend.blender.blinds.blocks.bluetooth.bluetooth-connected.bluetooth-off.bluetooth-searching.bold.bolt.bomb.bone.book.book-a.book-alert.book-audio.book-check.book-copy.book-dashed.book-down.book-headphones.book-heart.book-image.book-key.book-lock.book-marked.book-minus.book-open.book-open-check.book-open-text.book-plus.book-search.book-template.book-text.book-type.book-up.book-up-2.book-user.book-x.bookmark.bookmark-check.bookmark-minus.bookmark-off.bookmark-plus.bookmark-x.boom-box.bot.bot-message-square.bot-off.bottle-wine.bow-arrow.box.box-select.boxes.braces.brackets.brain.brain-circuit.brain-cog.brick-wall.brick-wall-fire.brick-wall-shield.briefcase.briefcase-business.briefcase-conveyor-belt.briefcase-medical.bring-to-front.broccoli.brush.brush-cleaning.bubbles.bug.bug-off.bug-play.building.building-2.bus.bus-front.cable.cable-car.cake.cake-slice.calculator.calendar.calendar-1.calendar-arrow-down.calendar-arrow-up.calendar-check.calendar-check-2.calendar-clock.calendar-cog.calendar-days.calendar-fold.calendar-heart.calendar-minus.calendar-minus-2.calendar-off.calendar-plus.calendar-plus-2.calendar-range.calendar-search.calendar-sync.calendar-x.calendar-x-2.calendars.camera.camera-off.candlestick-chart.candy.candy-cane.candy-off.cannabis.cannabis-off.captions.captions-off.car.car-front.car-taxi-front.caravan.card-sim.carrot.case-lower.case-sensitive.case-upper.cassette-tape.cast.castle.cat.cctv.cctv-off.chart-area.chart-bar.chart-bar-big.chart-bar-decreasing.chart-bar-increasing.chart-bar-stacked.chart-candlestick.chart-column.chart-column-big.chart-column-decreasing.chart-column-increasing.chart-column-stacked.chart-gantt.chart-line.chart-network.chart-no-axes-column.chart-no-axes-column-decreasing.chart-no-axes-column-increasing.chart-no-axes-combined.chart-no-axes-gantt.chart-pie.chart-scatter.chart-spline.check.check-check.check-circle.check-circle-2.check-line.check-square.check-square-2.chef-hat.cherry.chess-bishop.chess-king.chess-knight.chess-pawn.chess-queen.chess-rook.chevron-down.chevron-down-circle.chevron-down-square.chevron-first.chevron-last.chevron-left.chevron-left-circle.chevron-left-square.chevron-right.chevron-right-circle.chevron-right-square.chevron-up.chevron-up-circle.chevron-up-square.chevrons-down.chevrons-down-up.chevrons-left.chevrons-left-right.chevrons-left-right-ellipsis.chevrons-right.chevrons-right-left.chevrons-up.chevrons-up-down.church.cigarette.cigarette-off.circle.circle-alert.circle-arrow-down.circle-arrow-left.circle-arrow-out-down-left.circle-arrow-out-down-right.circle-arrow-out-up-left.circle-arrow-out-up-right.circle-arrow-right.circle-arrow-up.circle-check.circle-check-big.circle-chevron-down.circle-chevron-left.circle-chevron-right.circle-chevron-up.circle-dashed.circle-divide.circle-dollar-sign.circle-dot.circle-dot-dashed.circle-ellipsis.circle-equal.circle-fading-arrow-up.circle-fading-plus.circle-gauge.circle-help.circle-minus.circle-off.circle-parking.circle-parking-off.circle-pause.circle-percent.circle-pile.circle-play.circle-plus.circle-pound-sterling.circle-power.circle-question-mark.circle-slash.circle-slash-2.circle-slashed.circle-small.circle-star.circle-stop.circle-user.circle-user-round.circle-x.circuit-board.citrus.clapperboard.clipboard.clipboard-check.clipboard-clock.clipboard-copy.clipboard-edit.clipboard-list.clipboard-minus.clipboard-paste.clipboard-pen.clipboard-pen-line.clipboard-plus.clipboard-signature.clipboard-type.clipboard-x.clock.clock-1.clock-10.clock-11.clock-12.clock-2.clock-3.clock-4.clock-5.clock-6.clock-7.clock-8.clock-9.clock-alert.clock-arrow-down.clock-arrow-up.clock-check.clock-fading.clock-plus.closed-caption.cloud.cloud-alert.cloud-backup.cloud-check.cloud-cog.cloud-download.cloud-drizzle.cloud-fog.cloud-hail.cloud-lightning.cloud-moon.cloud-moon-rain.cloud-off.cloud-rain.cloud-rain-wind.cloud-snow.cloud-sun.cloud-sun-rain.cloud-sync.cloud-upload.cloudy.clover.club.code.code-2.code-square.code-xml.coffee.cog.coins.columns.columns-2.columns-3.columns-3-cog.columns-4.columns-settings.combine.command.compass.component.computer.concierge-bell.cone.construction.contact.contact-2.contact-round.container.contrast.cookie.cooking-pot.copy.copy-check.copy-minus.copy-plus.copy-slash.copy-x.copyleft.copyright.corner-down-left.corner-down-right.corner-left-down.corner-left-up.corner-right-down.corner-right-up.corner-up-left.corner-up-right.cpu.creative-commons.credit-card.croissant.crop.cross.crosshair.crown.cuboid.cup-soda.curly-braces.currency.cylinder.dam.database.database-backup.database-search.database-zap.decimals-arrow-left.decimals-arrow-right.delete.dessert.diameter.diamond.diamond-minus.diamond-percent.diamond-plus.dice-1.dice-2.dice-3.dice-4.dice-5.dice-6.dices.diff.disc.disc-2.disc-3.disc-album.divide.divide-circle.divide-square.dna.dna-off.dock.dog.dollar-sign.donut.door-closed.door-closed-locked.door-open.dot.dot-square.download.download-cloud.drafting-compass.drama.drill.drone.droplet.droplet-off.droplets.drum.drumstick.dumbbell.ear.ear-off.earth.earth-lock.eclipse.edit.edit-2.edit-3.egg.egg-fried.egg-off.ellipse.ellipsis.ellipsis-vertical.equal.equal-approximately.equal-not.equal-square.eraser.ethernet-port.euro.ev-charger.expand.external-link.eye.eye-closed.eye-off.factory.fan.fast-forward.feather.fence.ferris-wheel.file.file-archive.file-audio.file-audio-2.file-axis-3-d.file-axis-3d.file-badge.file-badge-2.file-bar-chart.file-bar-chart-2.file-box.file-braces.file-braces-corner.file-chart-column.file-chart-column-increasing.file-chart-line.file-chart-pie.file-check.file-check-2.file-check-corner.file-clock.file-code.file-code-2.file-code-corner.file-cog.file-cog-2.file-diff.file-digit.file-down.file-edit.file-exclamation-point.file-headphone.file-heart.file-image.file-input.file-json.file-json-2.file-key.file-key-2.file-line-chart.file-lock.file-lock-2.file-minus.file-minus-2.file-minus-corner.file-music.file-output.file-pen.file-pen-line.file-pie-chart.file-play.file-plus.file-plus-2.file-plus-corner.file-question.file-question-mark.file-scan.file-search.file-search-2.file-search-corner.file-signal.file-signature.file-sliders.file-spreadsheet.file-stack.file-symlink.file-terminal.file-text.file-type.file-type-2.file-type-corner.file-up.file-user.file-video.file-video-2.file-video-camera.file-volume.file-volume-2.file-warning.file-x.file-x-2.file-x-corner.files.film.filter.filter-x.fingerprint.fingerprint-pattern.fire-extinguisher.fish.fish-off.fish-symbol.fishing-hook.fishing-rod.flag.flag-off.flag-triangle-left.flag-triangle-right.flame.flame-kindling.flashlight.flashlight-off.flask-conical.flask-conical-off.flask-round.flip-horizontal.flip-horizontal-2.flip-vertical.flip-vertical-2.flower.flower-2.focus.fold-horizontal.fold-vertical.folder.folder-archive.folder-bookmark.folder-check.folder-clock.folder-closed.folder-code.folder-cog.folder-cog-2.folder-dot.folder-down.folder-edit.folder-git.folder-git-2.folder-heart.folder-input.folder-kanban.folder-key.folder-lock.folder-minus.folder-open.folder-open-dot.folder-output.folder-pen.folder-plus.folder-root.folder-search.folder-search-2.folder-symlink.folder-sync.folder-tree.folder-up.folder-x.folders.footprints.fork-knife.fork-knife-crossed.forklift.form.form-input.forward.frame.frown.fuel.fullscreen.function-square.funnel.funnel-plus.funnel-x.gallery-horizontal.gallery-horizontal-end.gallery-thumbnails.gallery-vertical.gallery-vertical-end.gamepad.gamepad-2.gamepad-directional.gantt-chart.gantt-chart-square.gauge.gauge-circle.gavel.gem.georgian-lari.ghost.gift.git-branch.git-branch-minus.git-branch-plus.git-commit.git-commit-horizontal.git-commit-vertical.git-compare.git-compare-arrows.git-fork.git-graph.git-merge.git-merge-conflict.git-pull-request.git-pull-request-arrow.git-pull-request-closed.git-pull-request-create.git-pull-request-create-arrow.git-pull-request-draft.glass-water.glasses.globe.globe-2.globe-lock.globe-off.globe-x.goal.gpu.grab.graduation-cap.grape.grid.grid-2-x-2.grid-2-x-2-check.grid-2-x-2-plus.grid-2-x-2-x.grid-2x2.grid-2x2-check.grid-2x2-plus.grid-2x2-x.grid-3-x-3.grid-3x2.grid-3x3.grip.grip-horizontal.grip-vertical.group.guitar.ham.hamburger.hammer.hand.hand-coins.hand-fist.hand-grab.hand-heart.hand-helping.hand-metal.hand-platter.handbag.handshake.hard-drive.hard-drive-download.hard-drive-upload.hard-hat.hash.hat-glasses.haze.hd.hdmi-port.heading.heading-1.heading-2.heading-3.heading-4.heading-5.heading-6.headphone-off.headphones.headset.heart.heart-crack.heart-handshake.heart-minus.heart-off.heart-plus.heart-pulse.heart-x.heater.helicopter.help-circle.helping-hand.hexagon.highlighter.history.home.hop.hop-off.hospital.hotel.hourglass.house.house-heart.house-plug.house-plus.house-wifi.ice-cream.ice-cream-2.ice-cream-bowl.ice-cream-cone.id-card.id-card-lanyard.image.image-down.image-minus.image-off.image-play.image-plus.image-up.image-upscale.images.import.inbox.indent.indent-decrease.indent-increase.indian-rupee.infinity.info.inspect.inspection-panel.italic.iteration-ccw.iteration-cw.japanese-yen.joystick.kanban.kanban-square.kanban-square-dashed.kayak.key.key-round.key-square.keyboard.keyboard-music.keyboard-off.lamp.lamp-ceiling.lamp-desk.lamp-floor.lamp-wall-down.lamp-wall-up.land-plot.landmark.languages.laptop.laptop-2.laptop-minimal.laptop-minimal-check.lasso.lasso-select.laugh.layers.layers-2.layers-3.layers-minus.layers-plus.layout.layout-dashboard.layout-grid.layout-list.layout-panel-left.layout-panel-top.layout-template.leaf.leafy-green.lectern.lens-concave.lens-convex.letter-text.library.library-big.library-square.life-buoy.ligature.lightbulb.lightbulb-off.line-chart.line-dot-right-horizontal.line-squiggle.line-style.link.link-2.link-2-off.list.list-check.list-checks.list-chevrons-down-up.list-chevrons-up-down.list-collapse.list-end.list-filter.list-filter-plus.list-indent-decrease.list-indent-increase.list-minus.list-music.list-ordered.list-plus.list-restart.list-start.list-todo.list-tree.list-video.list-x.loader.loader-2.loader-circle.loader-pinwheel.locate.locate-fixed.locate-off.location-edit.lock.lock-keyhole.lock-keyhole-open.lock-open.log-in.log-out.logs.lollipop.luggage.m-square.magnet.mail.mail-check.mail-minus.mail-open.mail-plus.mail-question.mail-question-mark.mail-search.mail-warning.mail-x.mailbox.mails.map.map-minus.map-pin.map-pin-check.map-pin-check-inside.map-pin-house.map-pin-minus.map-pin-minus-inside.map-pin-off.map-pin-pen.map-pin-plus.map-pin-plus-inside.map-pin-search.map-pin-x.map-pin-x-inside.map-pinned.map-plus.mars.mars-stroke.martini.maximize.maximize-2.medal.megaphone.megaphone-off.meh.memory-stick.menu.menu-square.merge.message-circle.message-circle-check.message-circle-code.message-circle-dashed.message-circle-heart.message-circle-more.message-circle-off.message-circle-plus.message-circle-question.message-circle-question-mark.message-circle-reply.message-circle-warning.message-circle-x.message-square.message-square-check.message-square-code.message-square-dashed.message-square-diff.message-square-dot.message-square-heart.message-square-lock.message-square-more.message-square-off.message-square-plus.message-square-quote.message-square-reply.message-square-share.message-square-text.message-square-warning.message-square-x.messages-square.metronome.mic.mic-2.mic-off.mic-vocal.microchip.microscope.microwave.milestone.milk.milk-off.minimize.minimize-2.minus.minus-circle.minus-square.mirror-rectangular.mirror-round.monitor.monitor-check.monitor-cloud.monitor-cog.monitor-dot.monitor-down.monitor-off.monitor-pause.monitor-play.monitor-smartphone.monitor-speaker.monitor-stop.monitor-up.monitor-x.moon.moon-star.more-horizontal.more-vertical.motorbike.mountain.mountain-snow.mouse.mouse-left.mouse-off.mouse-pointer.mouse-pointer-2.mouse-pointer-2-off.mouse-pointer-ban.mouse-pointer-click.mouse-pointer-square-dashed.mouse-right.move.move-3-d.move-3d.move-diagonal.move-diagonal-2.move-down.move-down-left.move-down-right.move-horizontal.move-left.move-right.move-up.move-up-left.move-up-right.move-vertical.music.music-2.music-3.music-4.navigation.navigation-2.navigation-2-off.navigation-off.network.newspaper.nfc.non-binary.notebook.notebook-pen.notebook-tabs.notebook-text.notepad-text.notepad-text-dashed.nut.nut-off.octagon.octagon-alert.octagon-minus.octagon-pause.octagon-x.omega.option.orbit.origami.outdent.package.package-2.package-check.package-minus.package-open.package-plus.package-search.package-x.paint-bucket.paint-roller.paintbrush.paintbrush-2.paintbrush-vertical.palette.palmtree.panda.panel-bottom.panel-bottom-close.panel-bottom-dashed.panel-bottom-inactive.panel-bottom-open.panel-left.panel-left-close.panel-left-dashed.panel-left-inactive.panel-left-open.panel-left-right-dashed.panel-right.panel-right-close.panel-right-dashed.panel-right-inactive.panel-right-open.panel-top.panel-top-bottom-dashed.panel-top-close.panel-top-dashed.panel-top-inactive.panel-top-open.panels-left-bottom.panels-left-right.panels-right-bottom.panels-top-bottom.panels-top-left.paperclip.parentheses.parking-circle.parking-circle-off.parking-meter.parking-square.parking-square-off.party-popper.pause.pause-circle.pause-octagon.paw-print.pc-case.pen.pen-box.pen-line.pen-off.pen-square.pen-tool.pencil.pencil-line.pencil-off.pencil-ruler.pentagon.percent.percent-circle.percent-diamond.percent-square.person-standing.philippine-peso.phone.phone-call.phone-forwarded.phone-incoming.phone-missed.phone-off.phone-outgoing.pi.pi-square.piano.pickaxe.picture-in-picture.picture-in-picture-2.pie-chart.piggy-bank.pilcrow.pilcrow-left.pilcrow-right.pilcrow-square.pill.pill-bottle.pin.pin-off.pipette.pizza.plane.plane-landing.plane-takeoff.play.play-circle.play-square.plug.plug-2.plug-zap.plug-zap-2.plus.plus-circle.plus-square.pocket-knife.podcast.pointer.pointer-off.popcorn.popsicle.pound-sterling.power.power-circle.power-off.power-square.presentation.printer.printer-check.printer-x.projector.proportions.puzzle.pyramid.qr-code.quote.rabbit.radar.radiation.radical.radio.radio-off.radio-receiver.radio-tower.radius.rainbow.rat.ratio.receipt.receipt-cent.receipt-euro.receipt-indian-rupee.receipt-japanese-yen.receipt-pound-sterling.receipt-russian-ruble.receipt-swiss-franc.receipt-text.receipt-turkish-lira.rectangle-circle.rectangle-ellipsis.rectangle-goggles.rectangle-horizontal.rectangle-vertical.recycle.redo.redo-2.redo-dot.refresh-ccw.refresh-ccw-dot.refresh-cw.refresh-cw-off.refrigerator.regex.remove-formatting.repeat.repeat-1.repeat-2.repeat-off.replace.replace-all.reply.reply-all.rewind.ribbon.road.rocket.rocking-chair.roller-coaster.rose.rotate-3-d.rotate-3d.rotate-ccw.rotate-ccw-key.rotate-ccw-square.rotate-cw.rotate-cw-square.route.route-off.router.rows.rows-2.rows-3.rows-4.rss.ruler.ruler-dimension-line.russian-ruble.sailboat.salad.sandwich.satellite.satellite-dish.saudi-riyal.save.save-all.save-off.scale.scale-3-d.scale-3d.scaling.scan.scan-barcode.scan-eye.scan-face.scan-heart.scan-line.scan-qr-code.scan-search.scan-text.scatter-chart.school.school-2.scissors.scissors-line-dashed.scissors-square.scissors-square-dashed-bottom.scooter.screen-share.screen-share-off.scroll.scroll-text.search.search-alert.search-check.search-code.search-slash.search-x.section.send.send-horizonal.send-horizontal.send-to-back.separator-horizontal.separator-vertical.server.server-cog.server-crash.server-off.settings.settings-2.shapes.share.share-2.sheet.shell.shelving-unit.shield.shield-alert.shield-ban.shield-check.shield-close.shield-cog.shield-cog-corner.shield-ellipsis.shield-half.shield-minus.shield-off.shield-plus.shield-question.shield-question-mark.shield-user.shield-x.ship.ship-wheel.shirt.shopping-bag.shopping-basket.shopping-cart.shovel.shower-head.shredder.shrimp.shrink.shrub.shuffle.sidebar.sidebar-close.sidebar-open.sigma.sigma-square.signal.signal-high.signal-low.signal-medium.signal-zero.signature.signpost.signpost-big.siren.skip-back.skip-forward.skull.slash.slash-square.slice.sliders.sliders-horizontal.sliders-vertical.smartphone.smartphone-charging.smartphone-nfc.smile.smile-plus.snail.snowflake.soap-dispenser-droplet.sofa.solar-panel.sort-asc.sort-desc.soup.space.spade.sparkle.sparkles.speaker.speech.spell-check.spell-check-2.spline.spline-pointer.split.split-square-horizontal.split-square-vertical.spool.sport-shoe.spotlight.spray-can.sprout.square.square-activity.square-arrow-down.square-arrow-down-left.square-arrow-down-right.square-arrow-left.square-arrow-out-down-left.square-arrow-out-down-right.square-arrow-out-up-left.square-arrow-out-up-right.square-arrow-right.square-arrow-right-enter.square-arrow-right-exit.square-arrow-up.square-arrow-up-left.square-arrow-up-right.square-asterisk.square-bottom-dashed-scissors.square-centerline-dashed-horizontal.square-centerline-dashed-vertical.square-chart-gantt.square-check.square-check-big.square-chevron-down.square-chevron-left.square-chevron-right.square-chevron-up.square-code.square-dashed.square-dashed-bottom.square-dashed-bottom-code.square-dashed-kanban.square-dashed-mouse-pointer.square-dashed-text.square-dashed-top-solid.square-divide.square-dot.square-equal.square-function.square-gantt-chart.square-kanban.square-library.square-m.square-menu.square-minus.square-mouse-pointer.square-parking.square-parking-off.square-pause.square-pen.square-percent.square-pi.square-pilcrow.square-play.square-plus.square-power.square-radical.square-round-corner.square-scissors.square-sigma.square-slash.square-split-horizontal.square-split-vertical.square-square.square-stack.square-star.square-stop.square-terminal.square-user.square-user-round.square-x.squares-exclude.squares-intersect.squares-subtract.squares-unite.squircle.squircle-dashed.squirrel.stamp.star.star-half.star-off.stars.step-back.step-forward.stethoscope.sticker.sticky-note.sticky-note-check.sticky-note-minus.sticky-note-off.sticky-note-plus.sticky-note-x.sticky-notes.stone.stop-circle.store.stretch-horizontal.stretch-vertical.strikethrough.subscript.subtitles.sun.sun-dim.sun-medium.sun-moon.sun-snow.sunrise.sunset.superscript.swatch-book.swiss-franc.switch-camera.sword.swords.syringe.table.table-2.table-cells-merge.table-cells-split.table-columns-split.table-config.table-of-contents.table-properties.table-rows-split.tablet.tablet-smartphone.tablets.tag.tags.tally-1.tally-2.tally-3.tally-4.tally-5.tangent.target.telescope.tent.tent-tree.terminal.terminal-square.test-tube.test-tube-2.test-tube-diagonal.test-tubes.text.text-align-center.text-align-end.text-align-justify.text-align-start.text-cursor.text-cursor-input.text-initial.text-quote.text-search.text-select.text-selection.text-wrap.theater.thermometer.thermometer-snowflake.thermometer-sun.thumbs-down.thumbs-up.ticket.ticket-check.ticket-minus.ticket-percent.ticket-plus.ticket-slash.ticket-x.tickets.tickets-plane.timeline.timer.timer-off.timer-reset.toggle-left.toggle-right.toilet.tool-case.toolbox.tornado.torus.touchpad.touchpad-off.towel-rack.tower-control.toy-brick.tractor.traffic-cone.train.train-front.train-front-tunnel.train-track.tram-front.transgender.trash.trash-2.tree-deciduous.tree-palm.tree-pine.trees.trending-down.trending-up.trending-up-down.triangle.triangle-alert.triangle-dashed.triangle-right.trophy.truck.truck-electric.turkish-lira.turntable.turtle.tv.tv-2.tv-minimal.tv-minimal-play.type.type-outline.umbrella.umbrella-off.underline.undo.undo-2.undo-dot.unfold-horizontal.unfold-vertical.ungroup.university.unlink.unlink-2.unlock.unlock-keyhole.unplug.upload.upload-cloud.usb.user.user-2.user-check.user-check-2.user-circle.user-circle-2.user-cog.user-cog-2.user-key.user-lock.user-minus.user-minus-2.user-pen.user-plus.user-plus-2.user-round.user-round-check.user-round-cog.user-round-key.user-round-minus.user-round-pen.user-round-plus.user-round-search.user-round-x.user-search.user-square.user-square-2.user-star.user-x.user-x-2.users.users-2.users-round.utensils.utensils-crossed.utility-pole.van.variable.vault.vector-square.vegan.venetian-mask.venus.venus-and-mars.verified.vibrate.vibrate-off.video.video-off.videotape.view.voicemail.volleyball.volume.volume-1.volume-2.volume-off.volume-x.vote.wallet.wallet-2.wallet-cards.wallet-minimal.wallpaper.wand.wand-2.wand-sparkles.warehouse.washing-machine.watch.waves.waves-arrow-down.waves-arrow-up.waves-horizontal.waves-ladder.waves-vertical.waypoints.webcam.webhook.webhook-off.weight.weight-tilde.wheat.wheat-off.whole-word.wifi.wifi-cog.wifi-high.wifi-low.wifi-off.wifi-pen.wifi-sync.wifi-zero.wind.wind-arrow-down.wine.wine-off.workflow.worm.wrap-text.wrench.x.x-circle.x-line-top.x-octagon.x-square.zap.zap-off.zodiac-aquarius.zodiac-aries.zodiac-cancer.zodiac-capricorn.zodiac-gemini.zodiac-leo.zodiac-libra.zodiac-ophiuchus.zodiac-pisces.zodiac-sagittarius.zodiac-scorpio.zodiac-taurus.zodiac-virgo.zoom-in.zoom-out".split(".")), Xf = yf({
	label: Gd(),
	icon: Yf.optional(),
	description: Gd().optional(),
	to: Gd(),
	target: Tf(["_self", "_blank"]).optional()
}), Zf = yf({
	label: Gd(),
	items: _f(Xf)
});
xf([yf({
	label: Gd(),
	icon: Yf.optional(),
	to: Gd(),
	target: Tf(["_self", "_blank"]).optional()
}), yf({
	label: Gd(),
	items: _f(xf([Xf, Zf]))
})]);
var Qf = (e) => "items" in e, $f = "NavigationMenu", [ep, tp, np] = oe($f), [rp, ip, ap] = oe($f), [op, sp] = w($f, [np, ap]), [cp, lp] = op($f), [up, dp] = op($f), fp = A.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, value: r, onValueChange: i, defaultValue: a, delayDuration: o = 200, skipDelayDuration: s = 300, orientation: c = "horizontal", dir: l, ...u } = e, [d, f] = A.useState(null), p = on(t, (e) => f(e)), m = T(l), h = A.useRef(0), g = A.useRef(0), _ = A.useRef(0), [v, y] = A.useState(!0), [b, x] = de({
		prop: r,
		onChange: (e) => {
			let t = e !== "", n = s > 0;
			t ? (window.clearTimeout(_.current), n && y(!1)) : (window.clearTimeout(_.current), _.current = window.setTimeout(() => y(!0), s)), i?.(e);
		},
		defaultProp: a ?? "",
		caller: $f
	}), S = A.useCallback(() => {
		window.clearTimeout(g.current), g.current = window.setTimeout(() => x(""), 150);
	}, [x]), ee = A.useCallback((e) => {
		window.clearTimeout(g.current), x(e);
	}, [x]), te = A.useCallback((e) => {
		b === e ? window.clearTimeout(g.current) : h.current = window.setTimeout(() => {
			window.clearTimeout(g.current), x(e);
		}, o);
	}, [
		b,
		x,
		o
	]);
	return A.useEffect(() => () => {
		window.clearTimeout(h.current), window.clearTimeout(g.current), window.clearTimeout(_.current);
	}, []), /* @__PURE__ */ (0, j.jsx)(hp, {
		scope: n,
		isRootMenu: !0,
		value: b,
		dir: m,
		orientation: c,
		rootNavigationMenu: d,
		onTriggerEnter: (e) => {
			window.clearTimeout(h.current), v ? te(e) : ee(e);
		},
		onTriggerLeave: () => {
			window.clearTimeout(h.current), S();
		},
		onContentEnter: () => window.clearTimeout(g.current),
		onContentLeave: S,
		onItemSelect: (e) => {
			x((t) => t === e ? "" : e);
		},
		onItemDismiss: () => x(""),
		children: /* @__PURE__ */ (0, j.jsx)(ce.nav, {
			"aria-label": "Main",
			"data-orientation": c,
			dir: m,
			...u,
			ref: p
		})
	});
});
fp.displayName = $f;
var pp = "NavigationMenuSub", mp = A.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, value: r, onValueChange: i, defaultValue: a, orientation: o = "horizontal", ...s } = e, c = lp(pp, n), [l, u] = de({
		prop: r,
		onChange: i,
		defaultProp: a ?? "",
		caller: pp
	});
	return /* @__PURE__ */ (0, j.jsx)(hp, {
		scope: n,
		isRootMenu: !1,
		value: l,
		dir: c.dir,
		orientation: o,
		rootNavigationMenu: c.rootNavigationMenu,
		onTriggerEnter: (e) => u(e),
		onItemSelect: (e) => u(e),
		onItemDismiss: () => u(""),
		children: /* @__PURE__ */ (0, j.jsx)(ce.div, {
			"data-orientation": o,
			...s,
			ref: t
		})
	});
});
mp.displayName = pp;
var hp = (e) => {
	let { scope: t, isRootMenu: n, rootNavigationMenu: r, dir: i, orientation: a, children: o, value: s, onItemSelect: c, onItemDismiss: l, onTriggerEnter: u, onTriggerLeave: d, onContentEnter: f, onContentLeave: p } = e, [m, h] = A.useState(null), [g, _] = A.useState(/* @__PURE__ */ new Map()), [v, y] = A.useState(null);
	return /* @__PURE__ */ (0, j.jsx)(cp, {
		scope: t,
		isRootMenu: n,
		rootNavigationMenu: r,
		value: s,
		previousValue: Ut(s),
		baseId: se(),
		dir: i,
		orientation: a,
		viewport: m,
		onViewportChange: h,
		indicatorTrack: v,
		onIndicatorTrackChange: y,
		onTriggerEnter: pe(u),
		onTriggerLeave: pe(d),
		onContentEnter: pe(f),
		onContentLeave: pe(p),
		onItemSelect: pe(c),
		onItemDismiss: pe(l),
		onViewportContentChange: A.useCallback((e, t) => {
			_((n) => (n.set(e, t), new Map(n)));
		}, []),
		onViewportContentRemove: A.useCallback((e) => {
			_((t) => t.has(e) ? (t.delete(e), new Map(t)) : t);
		}, []),
		children: /* @__PURE__ */ (0, j.jsx)(ep.Provider, {
			scope: t,
			children: /* @__PURE__ */ (0, j.jsx)(up, {
				scope: t,
				items: g,
				children: o
			})
		})
	});
}, gp = "NavigationMenuList", _p = A.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = lp(gp, n), a = /* @__PURE__ */ (0, j.jsx)(ce.ul, {
		"data-orientation": i.orientation,
		...r,
		ref: t
	});
	return /* @__PURE__ */ (0, j.jsx)(ce.div, {
		style: { position: "relative" },
		ref: i.onIndicatorTrackChange,
		children: /* @__PURE__ */ (0, j.jsx)(ep.Slot, {
			scope: n,
			children: i.isRootMenu ? /* @__PURE__ */ (0, j.jsx)(zp, {
				asChild: !0,
				children: a
			}) : a
		})
	});
});
_p.displayName = gp;
var vp = "NavigationMenuItem", [yp, bp] = op(vp), xp = A.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, value: r, ...i } = e, a = se(), o = r || a || "LEGACY_REACT_AUTO_VALUE", s = A.useRef(null), c = A.useRef(null), l = A.useRef(null), u = A.useRef(() => {}), d = A.useRef(!1), f = A.useCallback((e = "start") => {
		if (s.current) {
			u.current();
			let t = Up(s.current);
			t.length && Wp(e === "start" ? t : t.reverse());
		}
	}, []), p = A.useCallback(() => {
		if (s.current) {
			let e = Up(s.current);
			e.length && (u.current = Gp(e));
		}
	}, []);
	return /* @__PURE__ */ (0, j.jsx)(yp, {
		scope: n,
		value: o,
		triggerRef: c,
		contentRef: s,
		focusProxyRef: l,
		wasEscapeCloseRef: d,
		onEntryKeyDown: f,
		onFocusProxyEnter: f,
		onRootContentClose: p,
		onContentFocusOutside: p,
		children: /* @__PURE__ */ (0, j.jsx)(ce.li, {
			...i,
			ref: t
		})
	});
});
xp.displayName = vp;
var Sp = "NavigationMenuTrigger", Cp = A.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, disabled: r, ...i } = e, a = lp(Sp, e.__scopeNavigationMenu), o = bp(Sp, e.__scopeNavigationMenu), s = A.useRef(null), c = on(s, o.triggerRef, t), l = Jp(a.baseId, o.value), u = Yp(a.baseId, o.value), d = A.useRef(!1), f = A.useRef(!1), p = o.value === a.value;
	return /* @__PURE__ */ (0, j.jsxs)(j.Fragment, { children: [/* @__PURE__ */ (0, j.jsx)(ep.ItemSlot, {
		scope: n,
		value: o.value,
		children: /* @__PURE__ */ (0, j.jsx)(Hp, {
			asChild: !0,
			children: /* @__PURE__ */ (0, j.jsx)(ce.button, {
				id: l,
				disabled: r,
				"data-disabled": r ? "" : void 0,
				"data-state": qp(p),
				"aria-expanded": p,
				"aria-controls": u,
				...i,
				ref: c,
				onPointerEnter: C(e.onPointerEnter, () => {
					f.current = !1, o.wasEscapeCloseRef.current = !1;
				}),
				onPointerMove: C(e.onPointerMove, Xp(() => {
					r || f.current || o.wasEscapeCloseRef.current || d.current || (a.onTriggerEnter(o.value), d.current = !0);
				})),
				onPointerLeave: C(e.onPointerLeave, Xp(() => {
					r || (a.onTriggerLeave(), d.current = !1);
				})),
				onClick: C(e.onClick, () => {
					a.onItemSelect(o.value), f.current = p;
				}),
				onKeyDown: C(e.onKeyDown, (e) => {
					let t = {
						horizontal: "ArrowDown",
						vertical: a.dir === "rtl" ? "ArrowLeft" : "ArrowRight"
					}[a.orientation];
					p && e.key === t && (o.onEntryKeyDown(), e.preventDefault());
				})
			})
		})
	}), p && /* @__PURE__ */ (0, j.jsxs)(j.Fragment, { children: [/* @__PURE__ */ (0, j.jsx)(Ht, {
		"aria-hidden": !0,
		tabIndex: 0,
		ref: o.focusProxyRef,
		onFocus: (e) => {
			let t = o.contentRef.current, n = e.relatedTarget, r = n === s.current, i = t?.contains(n);
			(r || !i) && o.onFocusProxyEnter(r ? "start" : "end");
		}
	}), a.viewport && /* @__PURE__ */ (0, j.jsx)("span", { "aria-owns": u })] })] });
});
Cp.displayName = Sp;
var wp = "NavigationMenuLink", Tp = "navigationMenu.linkSelect", Ep = A.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, active: r, onSelect: i, ...a } = e;
	return /* @__PURE__ */ (0, j.jsx)(Hp, {
		asChild: !0,
		children: /* @__PURE__ */ (0, j.jsx)(ce.a, {
			"data-active": r ? "" : void 0,
			"aria-current": r ? "page" : void 0,
			...a,
			ref: t,
			onClick: C(e.onClick, (e) => {
				let t = e.target, n = new CustomEvent(Tp, {
					bubbles: !0,
					cancelable: !0
				});
				t.addEventListener(Tp, (e) => i?.(e), { once: !0 }), le(t, n), !n.defaultPrevented && !e.metaKey && le(t, new CustomEvent(Np, {
					bubbles: !0,
					cancelable: !0
				}));
			}, { checkForDefaultPrevented: !1 })
		})
	});
});
Ep.displayName = wp;
var Dp = "NavigationMenuIndicator", Op = A.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = lp(Dp, e.__scopeNavigationMenu), a = !!i.value;
	return i.indicatorTrack ? ur.createPortal(/* @__PURE__ */ (0, j.jsx)(fe, {
		present: n || a,
		children: /* @__PURE__ */ (0, j.jsx)(kp, {
			...r,
			ref: t
		})
	}), i.indicatorTrack) : null;
});
Op.displayName = Dp;
var kp = A.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = lp(Dp, n), a = tp(n), [o, s] = A.useState(null), [c, l] = A.useState(null), u = i.orientation === "horizontal", d = !!i.value;
	A.useEffect(() => {
		let e = a().find((e) => e.value === i.value)?.ref.current;
		e && s(e);
	}, [a, i.value]);
	let f = () => {
		o && l({
			size: u ? o.offsetWidth : o.offsetHeight,
			offset: u ? o.offsetLeft : o.offsetTop
		});
	};
	return Kp(o, f), Kp(i.indicatorTrack, f), c ? /* @__PURE__ */ (0, j.jsx)(ce.div, {
		"aria-hidden": !0,
		"data-state": d ? "visible" : "hidden",
		"data-orientation": i.orientation,
		...r,
		ref: t,
		style: {
			position: "absolute",
			...u ? {
				left: 0,
				width: c.size + "px",
				transform: `translateX(${c.offset}px)`
			} : {
				top: 0,
				height: c.size + "px",
				transform: `translateY(${c.offset}px)`
			},
			...r.style
		}
	}) : null;
}), Ap = "NavigationMenuContent", jp = A.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = lp(Ap, e.__scopeNavigationMenu), a = bp(Ap, e.__scopeNavigationMenu), o = on(a.contentRef, t), s = a.value === i.value, c = {
		value: a.value,
		triggerRef: a.triggerRef,
		focusProxyRef: a.focusProxyRef,
		wasEscapeCloseRef: a.wasEscapeCloseRef,
		onContentFocusOutside: a.onContentFocusOutside,
		onRootContentClose: a.onRootContentClose,
		...r
	};
	return i.viewport ? /* @__PURE__ */ (0, j.jsx)(Mp, {
		forceMount: n,
		...c,
		ref: o
	}) : /* @__PURE__ */ (0, j.jsx)(fe, {
		present: n || s,
		children: /* @__PURE__ */ (0, j.jsx)(Pp, {
			"data-state": qp(s),
			...c,
			ref: o,
			onPointerEnter: C(e.onPointerEnter, i.onContentEnter),
			onPointerLeave: C(e.onPointerLeave, Xp(i.onContentLeave)),
			style: {
				pointerEvents: !s && i.isRootMenu ? "none" : void 0,
				...c.style
			}
		})
	});
});
jp.displayName = Ap;
var Mp = A.forwardRef((e, t) => {
	let { onViewportContentChange: n, onViewportContentRemove: r } = lp(Ap, e.__scopeNavigationMenu);
	return ue(() => {
		n(e.value, {
			ref: t,
			...e
		});
	}, [
		e,
		t,
		n
	]), ue(() => () => r(e.value), [e.value, r]), null;
}), Np = "navigationMenu.rootContentDismiss", Pp = A.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, value: r, triggerRef: i, focusProxyRef: a, wasEscapeCloseRef: o, onRootContentClose: s, onContentFocusOutside: c, ...l } = e, u = lp(Ap, n), d = A.useRef(null), f = on(d, t), p = Jp(u.baseId, r), m = Yp(u.baseId, r), h = tp(n), g = A.useRef(null), { onItemDismiss: _ } = u;
	return A.useEffect(() => {
		let e = d.current;
		if (u.isRootMenu && e) {
			let t = () => {
				_(), s(), e.contains(document.activeElement) && i.current?.focus();
			};
			return e.addEventListener(Np, t), () => e.removeEventListener(Np, t);
		}
	}, [
		u.isRootMenu,
		e.value,
		i,
		_,
		s
	]), /* @__PURE__ */ (0, j.jsx)(zp, {
		asChild: !0,
		children: /* @__PURE__ */ (0, j.jsx)(qt, {
			id: m,
			"aria-labelledby": p,
			"data-motion": A.useMemo(() => {
				let e = h().map((e) => e.value);
				u.dir === "rtl" && e.reverse();
				let t = e.indexOf(u.value), n = e.indexOf(u.previousValue), i = r === u.value, a = n === e.indexOf(r);
				if (!i && !a) return g.current;
				let o = (() => {
					if (t !== n) {
						if (i && n !== -1) return t > n ? "from-end" : "from-start";
						if (a && t !== -1) return t > n ? "to-start" : "to-end";
					}
					return null;
				})();
				return g.current = o, o;
			}, [
				u.previousValue,
				u.value,
				u.dir,
				h,
				r
			]),
			"data-orientation": u.orientation,
			...l,
			ref: f,
			disableOutsidePointerEvents: !1,
			onDismiss: () => {
				let e = new Event(Np, {
					bubbles: !0,
					cancelable: !0
				});
				d.current?.dispatchEvent(e);
			},
			onFocusOutside: C(e.onFocusOutside, (e) => {
				c();
				let t = e.target;
				u.rootNavigationMenu?.contains(t) && e.preventDefault();
			}),
			onPointerDownOutside: C(e.onPointerDownOutside, (e) => {
				let t = e.target, n = h().some((e) => e.ref.current?.contains(t)), r = u.isRootMenu && u.viewport?.contains(t);
				(n || r || !u.isRootMenu) && e.preventDefault();
			}),
			onKeyDown: C(e.onKeyDown, (e) => {
				let t = e.altKey || e.ctrlKey || e.metaKey;
				if (e.key === "Tab" && !t) {
					let t = Up(e.currentTarget), n = document.activeElement, r = t.findIndex((e) => e === n);
					Wp(e.shiftKey ? t.slice(0, r).reverse() : t.slice(r + 1, t.length)) ? e.preventDefault() : a.current?.focus();
				}
			}),
			onEscapeKeyDown: C(e.onEscapeKeyDown, (e) => {
				o.current = !0;
			})
		})
	});
}), Fp = "NavigationMenuViewport", Ip = A.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = !!lp(Fp, e.__scopeNavigationMenu).value;
	return /* @__PURE__ */ (0, j.jsx)(fe, {
		present: n || i,
		children: /* @__PURE__ */ (0, j.jsx)(Lp, {
			...r,
			ref: t
		})
	});
});
Ip.displayName = Fp;
var Lp = A.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, children: r, ...i } = e, a = lp(Fp, n), o = on(t, a.onViewportChange), s = dp(Ap, e.__scopeNavigationMenu), [c, l] = A.useState(null), [u, d] = A.useState(null), f = c ? c?.width + "px" : void 0, p = c ? c?.height + "px" : void 0, m = !!a.value, h = m ? a.value : a.previousValue;
	return Kp(u, () => {
		u && l({
			width: u.offsetWidth,
			height: u.offsetHeight
		});
	}), /* @__PURE__ */ (0, j.jsx)(ce.div, {
		"data-state": qp(m),
		"data-orientation": a.orientation,
		...i,
		ref: o,
		style: {
			pointerEvents: !m && a.isRootMenu ? "none" : void 0,
			"--radix-navigation-menu-viewport-width": f,
			"--radix-navigation-menu-viewport-height": p,
			...i.style
		},
		onPointerEnter: C(e.onPointerEnter, a.onContentEnter),
		onPointerLeave: C(e.onPointerLeave, Xp(a.onContentLeave)),
		children: Array.from(s.items).map(([e, { ref: t, forceMount: n, ...r }]) => {
			let i = h === e;
			return /* @__PURE__ */ (0, j.jsx)(fe, {
				present: n || i,
				children: /* @__PURE__ */ (0, j.jsx)(Pp, {
					...r,
					ref: sn(t, (e) => {
						i && e && d(e);
					})
				})
			}, e);
		})
	});
}), Rp = "FocusGroup", zp = A.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = lp(Rp, n);
	return /* @__PURE__ */ (0, j.jsx)(rp.Provider, {
		scope: n,
		children: /* @__PURE__ */ (0, j.jsx)(rp.Slot, {
			scope: n,
			children: /* @__PURE__ */ (0, j.jsx)(ce.div, {
				dir: i.dir,
				...r,
				ref: t
			})
		})
	});
}), Bp = [
	"ArrowRight",
	"ArrowLeft",
	"ArrowUp",
	"ArrowDown"
], Vp = "FocusGroupItem", Hp = A.forwardRef((e, t) => {
	let { __scopeNavigationMenu: n, ...r } = e, i = ip(n), a = lp(Vp, n);
	return /* @__PURE__ */ (0, j.jsx)(rp.ItemSlot, {
		scope: n,
		children: /* @__PURE__ */ (0, j.jsx)(ce.button, {
			...r,
			ref: t,
			onKeyDown: C(e.onKeyDown, (e) => {
				if ([
					"Home",
					"End",
					...Bp
				].includes(e.key)) {
					let t = i().map((e) => e.ref.current);
					if ([
						a.dir === "rtl" ? "ArrowRight" : "ArrowLeft",
						"ArrowUp",
						"End"
					].includes(e.key) && t.reverse(), Bp.includes(e.key)) {
						let n = t.indexOf(e.currentTarget);
						t = t.slice(n + 1);
					}
					setTimeout(() => Wp(t)), e.preventDefault();
				}
			})
		})
	});
});
function Up(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function Wp(e) {
	let t = document.activeElement;
	return e.some((e) => e === t ? !0 : (e.focus(), document.activeElement !== t));
}
function Gp(e) {
	return e.forEach((e) => {
		e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1");
	}), () => {
		e.forEach((e) => {
			let t = e.dataset.tabindex;
			e.setAttribute("tabindex", t);
		});
	};
}
function Kp(e, t) {
	let n = pe(t);
	ue(() => {
		let t = 0;
		if (e) {
			let r = new ResizeObserver(() => {
				cancelAnimationFrame(t), t = window.requestAnimationFrame(n);
			});
			return r.observe(e), () => {
				window.cancelAnimationFrame(t), r.unobserve(e);
			};
		}
	}, [e, n]);
}
function qp(e) {
	return e ? "open" : "closed";
}
function Jp(e, t) {
	return `${e}-trigger-${t}`;
}
function Yp(e, t) {
	return `${e}-content-${t}`;
}
function Xp(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Zp = fp, Qp = _p, $p = xp, em = Cp, tm = Ep, nm = jp, rm = Ip;
//#endregion
//#region src/lib/ui/NavigationMenu.tsx
function im({ className: e, children: t, viewport: n = !0, ...r }) {
	return /* @__PURE__ */ (0, j.jsxs)(Zp, {
		"data-slot": "navigation-menu",
		"data-viewport": n,
		className: k("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", e),
		...r,
		children: [t, n && /* @__PURE__ */ (0, j.jsx)(um, {})]
	});
}
function am({ className: e, ...t }) {
	return /* @__PURE__ */ (0, j.jsx)(Qp, {
		"data-slot": "navigation-menu-list",
		className: k("group flex flex-1 list-none items-center justify-center gap-1", e),
		...t
	});
}
function om({ className: e, ...t }) {
	return /* @__PURE__ */ (0, j.jsx)($p, {
		"data-slot": "navigation-menu-item",
		className: k("relative", e),
		...t
	});
}
var sm = Ke("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1");
function cm({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ (0, j.jsxs)(em, {
		"data-slot": "navigation-menu-trigger",
		className: k(sm(), "group", e),
		...n,
		children: [
			t,
			" ",
			/* @__PURE__ */ (0, j.jsx)(Rt, {
				className: "relative top-px ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180",
				"aria-hidden": "true"
			})
		]
	});
}
function lm({ className: e, ...t }) {
	return /* @__PURE__ */ (0, j.jsx)(nm, {
		"data-slot": "navigation-menu-content",
		className: k("data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto", "group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none", e),
		...t
	});
}
function um({ className: e, ...t }) {
	return /* @__PURE__ */ (0, j.jsx)("div", {
		"data-slot": "navigation-menu-viewport-wrapper",
		className: k("absolute top-full left-0 isolate z-50 flex justify-center"),
		children: /* @__PURE__ */ (0, j.jsx)(rm, {
			"data-slot": "navigation-menu-viewport",
			className: k("origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full overflow-hidden rounded-md border shadow md:w-(--radix-navigation-menu-viewport-width)", e),
			...t
		})
	});
}
function dm({ className: e, ...t }) {
	return /* @__PURE__ */ (0, j.jsx)(tm, {
		"data-slot": "navigation-menu-link",
		className: k("data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4", e),
		...t
	});
}
//#endregion
//#region src/lib/components/HeaderNavigation.tsx
var fm = ({ item: e }) => {
	let t = e.icon;
	return /* @__PURE__ */ (0, j.jsx)(dm, {
		asChild: !0,
		children: /* @__PURE__ */ (0, j.jsxs)(De, {
			to: e.to,
			target: e.target,
			rel: e.target === "_blank" ? "noopener noreferrer" : void 0,
			className: "block select-none rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
			children: [/* @__PURE__ */ (0, j.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [t && /* @__PURE__ */ (0, j.jsx)(t, {
					size: 16,
					className: "shrink-0 text-muted-foreground"
				}), /* @__PURE__ */ (0, j.jsx)("div", {
					className: "text-sm font-medium leading-none",
					children: e.label
				})]
			}), e.description && /* @__PURE__ */ (0, j.jsx)("p", {
				className: "line-clamp-2 text-sm leading-snug text-muted-foreground mt-1.5",
				children: e.description
			})]
		})
	});
}, pm = ({ items: e }) => e.some(Qf) ? /* @__PURE__ */ (0, j.jsx)("div", {
	className: "flex gap-4 p-4",
	children: e.map((e) => Qf(e) ? /* @__PURE__ */ (0, j.jsxs)("div", {
		className: "min-w-[200px]",
		children: [/* @__PURE__ */ (0, j.jsx)("div", {
			className: "mb-2 px-3 text-sm font-medium text-muted-foreground",
			children: e.label
		}), /* @__PURE__ */ (0, j.jsx)("ul", {
			className: "flex flex-col gap-1",
			children: e.items.map((e) => /* @__PURE__ */ (0, j.jsx)("li", { children: /* @__PURE__ */ (0, j.jsx)(fm, { item: e }) }, e.to))
		})]
	}, e.label) : /* @__PURE__ */ (0, j.jsx)("div", { children: /* @__PURE__ */ (0, j.jsx)(fm, { item: e }) }, e.to))
}) : /* @__PURE__ */ (0, j.jsx)("ul", {
	className: "grid gap-1 p-3 w-[400px] md:grid-cols-2",
	children: e.flatMap((e) => Qf(e) ? [] : /* @__PURE__ */ (0, j.jsx)("li", { children: /* @__PURE__ */ (0, j.jsx)(fm, { item: e }) }, e.to))
}), mm = ({ item: e }) => {
	if ("to" in e) {
		let t = e.icon;
		return /* @__PURE__ */ (0, j.jsx)(om, { children: /* @__PURE__ */ (0, j.jsx)(dm, {
			asChild: !0,
			children: /* @__PURE__ */ (0, j.jsxs)(De, {
				to: e.to,
				target: e.target,
				rel: e.target === "_blank" ? "noopener noreferrer" : void 0,
				className: k(sm(), "flex items-center gap-2"),
				children: [t && /* @__PURE__ */ (0, j.jsx)(t, { size: 16 }), e.label]
			})
		}) });
	}
	return /* @__PURE__ */ (0, j.jsxs)(om, { children: [/* @__PURE__ */ (0, j.jsx)(cm, {
		className: "bg-transparent",
		children: e.label
	}), /* @__PURE__ */ (0, j.jsx)(lm, { children: /* @__PURE__ */ (0, j.jsx)(pm, { items: e.items }) })] });
}, hm = () => {
	let { options: e } = Cn(), t = e.header?.navigation, n = e.header?.placements?.navigation ?? "end";
	return !t || t.length === 0 ? null : /* @__PURE__ */ (0, j.jsx)(im, {
		className: n === "end" ? "**:data-[slot=navigation-menu-viewport-wrapper]:left-auto **:data-[slot=navigation-menu-viewport-wrapper]:right-0" : n === "center" ? "**:data-[slot=navigation-menu-viewport-wrapper]:left-1/2 **:data-[slot=navigation-menu-viewport-wrapper]:-translate-x-1/2" : void 0,
		children: /* @__PURE__ */ (0, j.jsx)(am, { children: t.map((e, t) => /* @__PURE__ */ (0, j.jsx)(mm, { item: e }, `${e.label}-${t}`)) })
	});
};
//#endregion
//#region ../../node_modules/.pnpm/vaul@1.1.2_@types+react-dom@19.2.3_@types+react@19.2.17__@types+react@19.2.17_react-dom_78a8d4aff1f8ccd490e673c1388b34eb/node_modules/vaul/dist/index.mjs
function gm(e) {
	if (!e || typeof document > "u") return;
	let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
	n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
var _m = A.createContext({
	drawerRef: { current: null },
	overlayRef: { current: null },
	onPress: () => {},
	onRelease: () => {},
	onDrag: () => {},
	onNestedDrag: () => {},
	onNestedOpenChange: () => {},
	onNestedRelease: () => {},
	openProp: void 0,
	dismissible: !1,
	isOpen: !1,
	isDragging: !1,
	keyboardIsOpen: { current: !1 },
	snapPointsOffset: null,
	snapPoints: null,
	handleOnly: !1,
	modal: !1,
	shouldFade: !1,
	activeSnapPoint: null,
	onOpenChange: () => {},
	setActiveSnapPoint: () => {},
	closeDrawer: () => {},
	direction: "bottom",
	shouldAnimate: { current: !0 },
	shouldScaleBackground: !1,
	setBackgroundColorOnScale: !0,
	noBodyStyles: !1,
	container: null,
	autoFocus: !1
}), vm = () => {
	let e = A.useContext(_m);
	if (!e) throw Error("useDrawerContext must be used within a Drawer.Root");
	return e;
};
gm("[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(\n[data-state=closed]\n){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}");
function ym() {
	let e = navigator.userAgent;
	return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || /FxiOS/.test(e));
}
function bm() {
	return Tm(/^Mac/);
}
function xm() {
	return Tm(/^iPhone/);
}
function Sm() {
	return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function Cm() {
	return Tm(/^iPad/) || bm() && navigator.maxTouchPoints > 1;
}
function wm() {
	return xm() || Cm();
}
function Tm(e) {
	return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
var Em = 24, Dm = typeof window < "u" ? A.useLayoutEffect : A.useEffect;
function Om(...e) {
	return (...t) => {
		for (let n of e) typeof n == "function" && n(...t);
	};
}
var km = typeof document < "u" && window.visualViewport;
function Am(e) {
	let t = window.getComputedStyle(e);
	return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function jm(e) {
	for (Am(e) && (e = e.parentElement); e && !Am(e);) e = e.parentElement;
	return e || document.scrollingElement || document.documentElement;
}
var Mm = new Set([
	"checkbox",
	"radio",
	"range",
	"color",
	"file",
	"image",
	"button",
	"submit",
	"reset"
]), Nm = 0, Pm;
function Fm(e = {}) {
	let { isDisabled: t } = e;
	Dm(() => {
		if (!t) return Nm++, Nm === 1 && wm() && (Pm = Im()), () => {
			Nm--, Nm === 0 && Pm?.();
		};
	}, [t]);
}
function Im() {
	let e, t = 0, n = (n) => {
		e = jm(n.target), !(e === document.documentElement && e === document.body) && (t = n.changedTouches[0].pageY);
	}, r = (n) => {
		if (!e || e === document.documentElement || e === document.body) {
			n.preventDefault();
			return;
		}
		let r = n.changedTouches[0].pageY, i = e.scrollTop, a = e.scrollHeight - e.clientHeight;
		a !== 0 && ((i <= 0 && r > t || i >= a && r < t) && n.preventDefault(), t = r);
	}, i = (e) => {
		let t = e.target;
		Bm(t) && t !== document.activeElement && (e.preventDefault(), t.style.transform = "translateY(-2000px)", t.focus(), requestAnimationFrame(() => {
			t.style.transform = "";
		}));
	}, a = (e) => {
		let t = e.target;
		Bm(t) && (t.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
			t.style.transform = "", km && (km.height < window.innerHeight ? requestAnimationFrame(() => {
				zm(t);
			}) : km.addEventListener("resize", () => zm(t), { once: !0 }));
		}));
	}, o = () => {
		window.scrollTo(0, 0);
	}, s = window.pageXOffset, c = window.pageYOffset, l = Om(Lm(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
	window.scrollTo(0, 0);
	let u = Om(Rm(document, "touchstart", n, {
		passive: !1,
		capture: !0
	}), Rm(document, "touchmove", r, {
		passive: !1,
		capture: !0
	}), Rm(document, "touchend", i, {
		passive: !1,
		capture: !0
	}), Rm(document, "focus", a, !0), Rm(window, "scroll", o));
	return () => {
		l(), u(), window.scrollTo(s, c);
	};
}
function Lm(e, t, n) {
	let r = e.style[t];
	return e.style[t] = n, () => {
		e.style[t] = r;
	};
}
function Rm(e, t, n, r) {
	return e.addEventListener(t, n, r), () => {
		e.removeEventListener(t, n, r);
	};
}
function zm(e) {
	let t = document.scrollingElement || document.documentElement;
	for (; e && e !== t;) {
		let t = jm(e);
		if (t !== document.documentElement && t !== document.body && t !== e) {
			let n = t.getBoundingClientRect().top, r = e.getBoundingClientRect().top;
			e.getBoundingClientRect().bottom > t.getBoundingClientRect().bottom + Em && (t.scrollTop += r - n);
		}
		e = t.parentElement;
	}
}
function Bm(e) {
	return e instanceof HTMLInputElement && !Mm.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function Vm(e, t) {
	typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Hm(...e) {
	return (t) => e.forEach((e) => Vm(e, t));
}
function Um(...e) {
	return A.useCallback(Hm(...e), e);
}
var Wm = /* @__PURE__ */ new WeakMap();
function Gm(e, t, n = !1) {
	if (!e || !(e instanceof HTMLElement)) return;
	let r = {};
	Object.entries(t).forEach(([t, n]) => {
		if (t.startsWith("--")) {
			e.style.setProperty(t, n);
			return;
		}
		r[t] = e.style[t], e.style[t] = n;
	}), !n && Wm.set(e, r);
}
function Km(e, t) {
	if (!e || !(e instanceof HTMLElement)) return;
	let n = Wm.get(e);
	n && (e.style[t] = n[t]);
}
var qm = (e) => {
	switch (e) {
		case "top":
		case "bottom": return !0;
		case "left":
		case "right": return !1;
		default: return e;
	}
};
function Jm(e, t) {
	if (!e) return null;
	let n = window.getComputedStyle(e), r = n.transform || n.webkitTransform || n.mozTransform, i = r.match(/^matrix3d\((.+)\)$/);
	return i ? parseFloat(i[1].split(", ")[qm(t) ? 13 : 12]) : (i = r.match(/^matrix\((.+)\)$/), i ? parseFloat(i[1].split(", ")[qm(t) ? 5 : 4]) : null);
}
function Ym(e) {
	return 8 * (Math.log(e + 1) - 2);
}
function Xm(e, t) {
	if (!e) return () => {};
	let n = e.style.cssText;
	return Object.assign(e.style, t), () => {
		e.style.cssText = n;
	};
}
var Zm = {
	DURATION: .5,
	EASE: [
		.32,
		.72,
		0,
		1
	]
}, Qm = .4, $m = .25, eh = 100, th = 8, nh = 16, rh = 26, ih = "vaul-dragging";
function ah(e) {
	let t = A.useRef(e);
	return A.useEffect(() => {
		t.current = e;
	}), A.useMemo(() => (...e) => t.current == null ? void 0 : t.current.call(t, ...e), []);
}
function oh({ defaultProp: e, onChange: t }) {
	let n = A.useState(e), [r] = n, i = A.useRef(r), a = ah(t);
	return A.useEffect(() => {
		i.current !== r && (a(r), i.current = r);
	}, [
		r,
		i,
		a
	]), n;
}
function sh({ prop: e, defaultProp: t, onChange: n = () => {} }) {
	let [r, i] = oh({
		defaultProp: t,
		onChange: n
	}), a = e !== void 0, o = a ? e : r, s = ah(n);
	return [o, A.useCallback((t) => {
		if (a) {
			let n = typeof t == "function" ? t(e) : t;
			n !== e && s(n);
		} else i(t);
	}, [
		a,
		e,
		i,
		s
	])];
}
function ch({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: i, fadeFromIndex: a, onSnapPointChange: o, direction: s = "bottom", container: c, snapToSequentialPoint: l }) {
	let [u, d] = sh({
		prop: e,
		defaultProp: n?.[0],
		onChange: t
	}), [f, p] = A.useState(typeof window < "u" ? {
		innerWidth: window.innerWidth,
		innerHeight: window.innerHeight
	} : void 0);
	A.useEffect(() => {
		function e() {
			p({
				innerWidth: window.innerWidth,
				innerHeight: window.innerHeight
			});
		}
		return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []);
	let m = A.useMemo(() => u === n?.[n.length - 1] || null, [n, u]), h = A.useMemo(() => n?.findIndex((e) => e === u) ?? null, [n, u]), g = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === u || !n, _ = A.useMemo(() => {
		let e = c ? {
			width: c.getBoundingClientRect().width,
			height: c.getBoundingClientRect().height
		} : typeof window < "u" ? {
			width: window.innerWidth,
			height: window.innerHeight
		} : {
			width: 0,
			height: 0
		};
		return n?.map((t) => {
			let n = typeof t == "string", r = 0;
			if (n && (r = parseInt(t, 10)), qm(s)) {
				let i = n ? r : f ? t * e.height : 0;
				return f ? s === "bottom" ? e.height - i : -e.height + i : i;
			}
			let i = n ? r : f ? t * e.width : 0;
			return f ? s === "right" ? e.width - i : -e.width + i : i;
		}) ?? [];
	}, [
		n,
		f,
		c
	]), v = A.useMemo(() => h === null ? null : _?.[h], [_, h]), y = A.useCallback((e) => {
		let t = _?.findIndex((t) => t === e) ?? null;
		o(t), Gm(r.current, {
			transition: `transform ${Zm.DURATION}s cubic-bezier(${Zm.EASE.join(",")})`,
			transform: qm(s) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
		}), _ && t !== _.length - 1 && a !== void 0 && t !== a && t < a ? Gm(i.current, {
			transition: `opacity ${Zm.DURATION}s cubic-bezier(${Zm.EASE.join(",")})`,
			opacity: "0"
		}) : Gm(i.current, {
			transition: `opacity ${Zm.DURATION}s cubic-bezier(${Zm.EASE.join(",")})`,
			opacity: "1"
		}), d(n?.[Math.max(t, 0)]);
	}, [
		r.current,
		n,
		_,
		a,
		i,
		d
	]);
	A.useEffect(() => {
		if (u || e) {
			let t = n?.findIndex((t) => t === e || t === u) ?? -1;
			_ && t !== -1 && typeof _[t] == "number" && y(_[t]);
		}
	}, [
		u,
		e,
		n,
		_,
		y
	]);
	function b({ draggedDistance: e, closeDrawer: t, velocity: r, dismissible: o }) {
		if (a === void 0) return;
		let c = s === "bottom" || s === "right" ? (v ?? 0) - e : (v ?? 0) + e, u = h === a - 1, d = h === 0, f = e > 0;
		if (u && Gm(i.current, { transition: `opacity ${Zm.DURATION}s cubic-bezier(${Zm.EASE.join(",")})` }), !l && r > 2 && !f) {
			o ? t() : y(_[0]);
			return;
		}
		if (!l && r > 2 && f && _ && n) {
			y(_[n.length - 1]);
			return;
		}
		let p = _?.reduce((e, t) => typeof e != "number" || typeof t != "number" ? e : Math.abs(t - c) < Math.abs(e - c) ? t : e), g = qm(s) ? window.innerHeight : window.innerWidth;
		if (r > Qm && Math.abs(e) < g * .4) {
			let e = f ? 1 : -1;
			if (e > 0 && m && n) {
				y(_[n.length - 1]);
				return;
			}
			if (d && e < 0 && o && t(), h === null) return;
			y(_[h + e]);
			return;
		}
		y(p);
	}
	function x({ draggedDistance: e }) {
		if (v === null) return;
		let t = s === "bottom" || s === "right" ? v - e : v + e;
		(s === "bottom" || s === "right") && t < _[_.length - 1] || (s === "top" || s === "left") && t > _[_.length - 1] || Gm(r.current, { transform: qm(s) ? `translate3d(0, ${t}px, 0)` : `translate3d(${t}px, 0, 0)` });
	}
	function S(e, t) {
		if (!n || typeof h != "number" || !_ || a === void 0) return null;
		let r = h === a - 1;
		if (h >= a && t) return 0;
		if (r && !t) return 1;
		if (!g && !r) return null;
		let i = r ? h + 1 : h - 1, o = r ? _[i] - _[i - 1] : _[i + 1] - _[i], s = e / Math.abs(o);
		return r ? 1 - s : s;
	}
	return {
		isLastSnapPoint: m,
		activeSnapPoint: u,
		shouldFade: g,
		getPercentageDragged: S,
		setActiveSnapPoint: d,
		activeSnapPointIndex: h,
		onRelease: b,
		onDrag: x,
		snapPointsOffset: _
	};
}
function lh() {
	let { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: i } = vm(), a = A.useRef(null), o = (0, A.useMemo)(() => document.body.style.backgroundColor, []);
	function s() {
		return (window.innerWidth - rh) / window.innerWidth;
	}
	A.useEffect(() => {
		if (t && n) {
			a.current && clearTimeout(a.current);
			let t = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
			if (!t) return;
			r && !i && Xm(document.body, { background: "black" }), Xm(t, {
				transformOrigin: qm(e) ? "top" : "left",
				transitionProperty: "transform, border-radius",
				transitionDuration: `${Zm.DURATION}s`,
				transitionTimingFunction: `cubic-bezier(${Zm.EASE.join(",")})`
			});
			let n = Xm(t, {
				borderRadius: `${th}px`,
				overflow: "hidden",
				...qm(e) ? { transform: `scale(${s()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)` } : { transform: `scale(${s()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)` }
			});
			return () => {
				n(), a.current = window.setTimeout(() => {
					o ? document.body.style.background = o : document.body.style.removeProperty("background");
				}, Zm.DURATION * 1e3);
			};
		}
	}, [
		t,
		n,
		o
	]);
}
var uh = null;
function dh({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: i, noBodyStyles: a }) {
	let [o, s] = A.useState(() => typeof window < "u" ? window.location.href : ""), c = A.useRef(0), l = A.useCallback(() => {
		if (Sm() && uh === null && e && !a) {
			uh = {
				position: document.body.style.position,
				top: document.body.style.top,
				left: document.body.style.left,
				height: document.body.style.height,
				right: "unset"
			};
			let { scrollX: e, innerHeight: t } = window;
			document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
				top: `${-c.current}px`,
				left: `${-e}px`,
				right: "0px",
				height: "auto"
			}), window.setTimeout(() => window.requestAnimationFrame(() => {
				let e = t - window.innerHeight;
				e && c.current >= t && (document.body.style.top = `${-(c.current + e)}px`);
			}), 300);
		}
	}, [e]), u = A.useCallback(() => {
		if (Sm() && uh !== null && !a) {
			let e = -parseInt(document.body.style.top, 10), t = -parseInt(document.body.style.left, 10);
			Object.assign(document.body.style, uh), window.requestAnimationFrame(() => {
				if (i && o !== window.location.href) {
					s(window.location.href);
					return;
				}
				window.scrollTo(t, e);
			}), uh = null;
		}
	}, [o]);
	return A.useEffect(() => {
		function e() {
			c.current = window.scrollY;
		}
		return e(), window.addEventListener("scroll", e), () => {
			window.removeEventListener("scroll", e);
		};
	}, []), A.useEffect(() => {
		if (t) return () => {
			typeof document > "u" || document.querySelector("[data-vaul-drawer]") || u();
		};
	}, [t, u]), A.useEffect(() => {
		n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && l(), t || window.setTimeout(() => {
			u();
		}, 500)) : u());
	}, [
		e,
		r,
		o,
		t,
		n,
		l,
		u
	]), { restorePositionSetting: u };
}
function fh({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: i, snapPoints: a, shouldScaleBackground: o = !1, setBackgroundColorOnScale: s = !0, closeThreshold: c = $m, scrollLockTimeout: l = eh, dismissible: u = !0, handleOnly: d = !1, fadeFromIndex: f = a && a.length - 1, activeSnapPoint: p, setActiveSnapPoint: m, fixed: h, modal: g = !0, onClose: _, nested: v, noBodyStyles: y = !1, direction: b = "bottom", defaultOpen: x = !1, disablePreventScroll: S = !0, snapToSequentialPoint: ee = !1, preventScrollRestoration: te = !1, repositionInputs: ne = !0, onAnimationEnd: re, container: ie, autoFocus: ae = !1 }) {
	let [C = !1, oe] = sh({
		defaultProp: x,
		prop: e,
		onChange: (e) => {
			t?.(e), !e && !v && je(), setTimeout(() => {
				re?.(e);
			}, Zm.DURATION * 1e3), e && !g && typeof window < "u" && window.requestAnimationFrame(() => {
				document.body.style.pointerEvents = "auto";
			}), e || (document.body.style.pointerEvents = "auto");
		}
	}), [se, ce] = A.useState(!1), [le, w] = A.useState(!1), [T, ue] = A.useState(!1), de = A.useRef(null), fe = A.useRef(null), pe = A.useRef(null), me = A.useRef(null), he = A.useRef(null), E = A.useRef(!1), ge = A.useRef(null), _e = A.useRef(0), ve = A.useRef(!1), ye = A.useRef(!x), be = A.useRef(0), D = A.useRef(null), xe = A.useRef(D.current?.getBoundingClientRect().height || 0), Se = A.useRef(D.current?.getBoundingClientRect().width || 0), Ce = A.useRef(0), { activeSnapPoint: we, activeSnapPointIndex: Te, setActiveSnapPoint: Ee, onRelease: De, snapPointsOffset: Oe, onDrag: O, shouldFade: ke, getPercentageDragged: Ae } = ch({
		snapPoints: a,
		activeSnapPointProp: p,
		setActiveSnapPointProp: m,
		drawerRef: D,
		fadeFromIndex: f,
		overlayRef: de,
		onSnapPointChange: A.useCallback((e) => {
			a && e === Oe.length - 1 && (fe.current = /* @__PURE__ */ new Date());
		}, []),
		direction: b,
		container: ie,
		snapToSequentialPoint: ee
	});
	Fm({ isDisabled: !C || le || !g || T || !se || !ne || !S });
	let { restorePositionSetting: je } = dh({
		isOpen: C,
		modal: g,
		nested: v ?? !1,
		hasBeenOpened: se,
		preventScrollRestoration: te,
		noBodyStyles: y
	});
	function Me() {
		return (window.innerWidth - rh) / window.innerWidth;
	}
	function Ne(e) {
		!u && !a || D.current && !D.current.contains(e.target) || (xe.current = D.current?.getBoundingClientRect().height || 0, Se.current = D.current?.getBoundingClientRect().width || 0, w(!0), pe.current = /* @__PURE__ */ new Date(), wm() && window.addEventListener("touchend", () => E.current = !1, { once: !0 }), e.target.setPointerCapture(e.pointerId), _e.current = qm(b) ? e.pageY : e.pageX);
	}
	function Pe(e, t) {
		let n = e, r = window.getSelection()?.toString(), i = D.current ? Jm(D.current, b) : null, a = /* @__PURE__ */ new Date();
		if (n.tagName === "SELECT" || n.hasAttribute("data-vaul-no-drag") || n.closest("[data-vaul-no-drag]")) return !1;
		if (b === "right" || b === "left") return !0;
		if (fe.current && a.getTime() - fe.current.getTime() < 500) return !1;
		if (i !== null && (b === "bottom" ? i > 0 : i < 0)) return !0;
		if (r && r.length > 0) return !1;
		if (he.current && a.getTime() - he.current.getTime() < l && i === 0 || t) return he.current = a, !1;
		for (; n;) {
			if (n.scrollHeight > n.clientHeight) {
				if (n.scrollTop !== 0) return he.current = /* @__PURE__ */ new Date(), !1;
				if (n.getAttribute("role") === "dialog") return !0;
			}
			n = n.parentNode;
		}
		return !0;
	}
	function Fe(e) {
		if (D.current && le) {
			let t = b === "bottom" || b === "right" ? 1 : -1, n = (_e.current - (qm(b) ? e.pageY : e.pageX)) * t, i = n > 0, s = a && !u && !i;
			if (s && Te === 0) return;
			let c = Math.abs(n), l = document.querySelector("[data-vaul-drawer-wrapper]"), d = c / (b === "bottom" || b === "top" ? xe.current : Se.current), p = Ae(c, i);
			if (p !== null && (d = p), s && d >= 1 || !E.current && !Pe(e.target, i)) return;
			if (D.current.classList.add(ih), E.current = !0, Gm(D.current, { transition: "none" }), Gm(de.current, { transition: "none" }), a && O({ draggedDistance: n }), i && !a) {
				let e = Ym(n), r = Math.min(e * -1, 0) * t;
				Gm(D.current, { transform: qm(b) ? `translate3d(0, ${r}px, 0)` : `translate3d(${r}px, 0, 0)` });
				return;
			}
			let m = 1 - d;
			if ((ke || f && Te === f - 1) && (r?.(e, d), Gm(de.current, {
				opacity: `${m}`,
				transition: "none"
			}, !0)), l && de.current && o) {
				let e = Math.min(Me() + d * (1 - Me()), 1), t = 8 - d * 8, n = Math.max(0, 14 - d * 14);
				Gm(l, {
					borderRadius: `${t}px`,
					transform: qm(b) ? `scale(${e}) translate3d(0, ${n}px, 0)` : `scale(${e}) translate3d(${n}px, 0, 0)`,
					transition: "none"
				}, !0);
			}
			if (!a) {
				let e = c * t;
				Gm(D.current, { transform: qm(b) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)` });
			}
		}
	}
	A.useEffect(() => {
		window.requestAnimationFrame(() => {
			ye.current = !0;
		});
	}, []), A.useEffect(() => {
		var e;
		function t() {
			if (!D.current || !ne) return;
			let e = document.activeElement;
			if (Bm(e) || ve.current) {
				let e = window.visualViewport?.height || 0, t = window.innerHeight, n = t - e, r = D.current.getBoundingClientRect().height || 0, i = r > t * .8;
				Ce.current ||= r;
				let o = D.current.getBoundingClientRect().top;
				if (Math.abs(be.current - n) > 60 && (ve.current = !ve.current), a && a.length > 0 && Oe && Te) {
					let e = Oe[Te] || 0;
					n += e;
				}
				if (be.current = n, r > e || ve.current) {
					let t = D.current.getBoundingClientRect().height, r = t;
					t > e && (r = e - (i ? o : rh)), h ? D.current.style.height = `${t - Math.max(n, 0)}px` : D.current.style.height = `${Math.max(r, e - o)}px`;
				} else ym() || (D.current.style.height = `${Ce.current}px`);
				a && a.length > 0 && !ve.current ? D.current.style.bottom = "0px" : D.current.style.bottom = `${Math.max(n, 0)}px`;
			}
		}
		return (e = window.visualViewport) == null || e.addEventListener("resize", t), () => window.visualViewport?.removeEventListener("resize", t);
	}, [
		Te,
		a,
		Oe
	]);
	function Ie(e) {
		Re(), _?.(), e || oe(!1), setTimeout(() => {
			a && Ee(a[0]);
		}, Zm.DURATION * 1e3);
	}
	function Le() {
		if (!D.current) return;
		let e = document.querySelector("[data-vaul-drawer-wrapper]"), t = Jm(D.current, b);
		Gm(D.current, {
			transform: "translate3d(0, 0, 0)",
			transition: `transform ${Zm.DURATION}s cubic-bezier(${Zm.EASE.join(",")})`
		}), Gm(de.current, {
			transition: `opacity ${Zm.DURATION}s cubic-bezier(${Zm.EASE.join(",")})`,
			opacity: "1"
		}), o && t && t > 0 && C && Gm(e, {
			borderRadius: `${th}px`,
			overflow: "hidden",
			...qm(b) ? {
				transform: `scale(${Me()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
				transformOrigin: "top"
			} : {
				transform: `scale(${Me()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
				transformOrigin: "left"
			},
			transitionProperty: "transform, border-radius",
			transitionDuration: `${Zm.DURATION}s`,
			transitionTimingFunction: `cubic-bezier(${Zm.EASE.join(",")})`
		}, !0);
	}
	function Re() {
		!le || !D.current || (D.current.classList.remove(ih), E.current = !1, w(!1), me.current = /* @__PURE__ */ new Date());
	}
	function ze(e) {
		if (!le || !D.current) return;
		D.current.classList.remove(ih), E.current = !1, w(!1), me.current = /* @__PURE__ */ new Date();
		let t = Jm(D.current, b);
		if (!e || !Pe(e.target, !1) || !t || Number.isNaN(t) || pe.current === null) return;
		let n = me.current.getTime() - pe.current.getTime(), r = _e.current - (qm(b) ? e.pageY : e.pageX), o = Math.abs(r) / n;
		if (o > .05 && (ue(!0), setTimeout(() => {
			ue(!1);
		}, 200)), a) {
			De({
				draggedDistance: r * (b === "bottom" || b === "right" ? 1 : -1),
				closeDrawer: Ie,
				velocity: o,
				dismissible: u
			}), i?.(e, !0);
			return;
		}
		if (b === "bottom" || b === "right" ? r > 0 : r < 0) {
			Le(), i?.(e, !0);
			return;
		}
		if (o > Qm) {
			Ie(), i?.(e, !1);
			return;
		}
		let s = Math.min(D.current.getBoundingClientRect().height ?? 0, window.innerHeight), l = Math.min(D.current.getBoundingClientRect().width ?? 0, window.innerWidth);
		if (Math.abs(t) >= (b === "left" || b === "right" ? l : s) * c) {
			Ie(), i?.(e, !1);
			return;
		}
		i?.(e, !0), Le();
	}
	A.useEffect(() => (C && (Gm(document.documentElement, { scrollBehavior: "auto" }), fe.current = /* @__PURE__ */ new Date()), () => {
		Km(document.documentElement, "scrollBehavior");
	}), [C]);
	function Be(e) {
		let t = e ? (window.innerWidth - nh) / window.innerWidth : 1, n = e ? -16 : 0;
		ge.current && window.clearTimeout(ge.current), Gm(D.current, {
			transition: `transform ${Zm.DURATION}s cubic-bezier(${Zm.EASE.join(",")})`,
			transform: qm(b) ? `scale(${t}) translate3d(0, ${n}px, 0)` : `scale(${t}) translate3d(${n}px, 0, 0)`
		}), !e && D.current && (ge.current = setTimeout(() => {
			let e = Jm(D.current, b);
			Gm(D.current, {
				transition: "none",
				transform: qm(b) ? `translate3d(0, ${e}px, 0)` : `translate3d(${e}px, 0, 0)`
			});
		}, 500));
	}
	function Ve(e, t) {
		if (t < 0) return;
		let n = (window.innerWidth - nh) / window.innerWidth, r = n + t * (1 - n), i = -16 + t * nh;
		Gm(D.current, {
			transform: qm(b) ? `scale(${r}) translate3d(0, ${i}px, 0)` : `scale(${r}) translate3d(${i}px, 0, 0)`,
			transition: "none"
		});
	}
	function He(e, t) {
		let n = qm(b) ? window.innerHeight : window.innerWidth, r = t ? (n - nh) / n : 1, i = t ? -16 : 0;
		t && Gm(D.current, {
			transition: `transform ${Zm.DURATION}s cubic-bezier(${Zm.EASE.join(",")})`,
			transform: qm(b) ? `scale(${r}) translate3d(0, ${i}px, 0)` : `scale(${r}) translate3d(${i}px, 0, 0)`
		});
	}
	return A.useEffect(() => {
		g || window.requestAnimationFrame(() => {
			document.body.style.pointerEvents = "auto";
		});
	}, [g]), /*#__PURE__*/ A.createElement(at, {
		defaultOpen: x,
		onOpenChange: (e) => {
			!u && !e || (e ? ce(!0) : Ie(!0), oe(e));
		},
		open: C
	}, /*#__PURE__*/ A.createElement(_m.Provider, { value: {
		activeSnapPoint: we,
		snapPoints: a,
		setActiveSnapPoint: Ee,
		drawerRef: D,
		overlayRef: de,
		onOpenChange: t,
		onPress: Ne,
		onRelease: ze,
		onDrag: Fe,
		dismissible: u,
		shouldAnimate: ye,
		handleOnly: d,
		isOpen: C,
		isDragging: le,
		shouldFade: ke,
		closeDrawer: Ie,
		onNestedDrag: Ve,
		onNestedOpenChange: Be,
		onNestedRelease: He,
		keyboardIsOpen: ve,
		modal: g,
		snapPointsOffset: Oe,
		activeSnapPointIndex: Te,
		direction: b,
		shouldScaleBackground: o,
		setBackgroundColorOnScale: s,
		noBodyStyles: y,
		container: ie,
		autoFocus: ae
	} }, n));
}
var ph = /*#__PURE__*/ A.forwardRef(function({ ...e }, t) {
	let { overlayRef: n, snapPoints: r, onRelease: i, shouldFade: a, isOpen: o, modal: s, shouldAnimate: c } = vm(), l = Um(t, n), u = r && r.length > 0;
	if (!s) return null;
	let d = A.useCallback((e) => i(e), [i]);
	return /*#__PURE__*/ A.createElement(ut, {
		onMouseUp: d,
		ref: l,
		"data-vaul-overlay": "",
		"data-vaul-snap-points": o && u ? "true" : "false",
		"data-vaul-snap-points-overlay": o && a ? "true" : "false",
		"data-vaul-animate": c?.current ? "true" : "false",
		...e
	});
});
ph.displayName = "Drawer.Overlay";
var mh = /*#__PURE__*/ A.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, i) {
	let { drawerRef: a, onPress: o, onRelease: s, onDrag: c, keyboardIsOpen: l, snapPointsOffset: u, activeSnapPointIndex: d, modal: f, isOpen: p, direction: m, snapPoints: h, container: g, handleOnly: _, shouldAnimate: v, autoFocus: y } = vm(), [b, x] = A.useState(!1), S = Um(i, a), ee = A.useRef(null), te = A.useRef(null), ne = A.useRef(!1), re = h && h.length > 0;
	lh();
	let ie = (e, t, n = 0) => {
		if (ne.current) return !0;
		let r = Math.abs(e.y), i = Math.abs(e.x), a = i > r, o = ["bottom", "right"].includes(t) ? 1 : -1;
		if (t === "left" || t === "right") {
			if (!(e.x * o < 0) && i >= 0 && i <= n) return a;
		} else if (!(e.y * o < 0) && r >= 0 && r <= n) return !a;
		return ne.current = !0, !0;
	};
	A.useEffect(() => {
		re && window.requestAnimationFrame(() => {
			x(!0);
		});
	}, []);
	function ae(e) {
		ee.current = null, ne.current = !1, s(e);
	}
	return /*#__PURE__*/ A.createElement(nt, {
		"data-vaul-drawer-direction": m,
		"data-vaul-drawer": "",
		"data-vaul-delayed-snap-points": b ? "true" : "false",
		"data-vaul-snap-points": p && re ? "true" : "false",
		"data-vaul-custom-container": g ? "true" : "false",
		"data-vaul-animate": v?.current ? "true" : "false",
		...r,
		ref: S,
		style: u && u.length > 0 ? {
			"--snap-point-height": `${u[d ?? 0]}px`,
			...t
		} : t,
		onPointerDown: (e) => {
			_ || (r.onPointerDown == null || r.onPointerDown.call(r, e), ee.current = {
				x: e.pageX,
				y: e.pageY
			}, o(e));
		},
		onOpenAutoFocus: (e) => {
			n?.(e), y || e.preventDefault();
		},
		onPointerDownOutside: (t) => {
			if (e?.(t), !f || t.defaultPrevented) {
				t.preventDefault();
				return;
			}
			l.current &&= !1;
		},
		onFocusOutside: (e) => {
			if (!f) {
				e.preventDefault();
				return;
			}
		},
		onPointerMove: (e) => {
			if (te.current = e, _ || (r.onPointerMove == null || r.onPointerMove.call(r, e), !ee.current)) return;
			let t = e.pageY - ee.current.y, n = e.pageX - ee.current.x, i = e.pointerType === "touch" ? 10 : 2;
			ie({
				x: n,
				y: t
			}, m, i) ? c(e) : (Math.abs(n) > i || Math.abs(t) > i) && (ee.current = null);
		},
		onPointerUp: (e) => {
			r.onPointerUp == null || r.onPointerUp.call(r, e), ee.current = null, ne.current = !1, s(e);
		},
		onPointerOut: (e) => {
			r.onPointerOut == null || r.onPointerOut.call(r, e), ae(te.current);
		},
		onContextMenu: (e) => {
			r.onContextMenu == null || r.onContextMenu.call(r, e), te.current && ae(te.current);
		}
	});
});
mh.displayName = "Drawer.Content";
var hh = 250, gh = 120, _h = /*#__PURE__*/ A.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
	let { closeDrawer: i, isDragging: a, snapPoints: o, activeSnapPoint: s, setActiveSnapPoint: c, dismissible: l, handleOnly: u, isOpen: d, onPress: f, onDrag: p } = vm(), m = A.useRef(null), h = A.useRef(!1);
	function g() {
		if (h.current) {
			y();
			return;
		}
		window.setTimeout(() => {
			_();
		}, gh);
	}
	function _() {
		if (a || e || h.current) {
			y();
			return;
		}
		if (y(), !o || o.length === 0) {
			l || i();
			return;
		}
		if (s === o[o.length - 1] && l) {
			i();
			return;
		}
		let t = o.findIndex((e) => e === s);
		if (t === -1) return;
		let n = o[t + 1];
		c(n);
	}
	function v() {
		m.current = window.setTimeout(() => {
			h.current = !0;
		}, hh);
	}
	function y() {
		m.current && window.clearTimeout(m.current), h.current = !1;
	}
	return /*#__PURE__*/ A.createElement("div", {
		onClick: g,
		onPointerCancel: y,
		onPointerDown: (e) => {
			u && f(e), v();
		},
		onPointerMove: (e) => {
			u && p(e);
		},
		ref: r,
		"data-vaul-drawer-visible": d ? "true" : "false",
		"data-vaul-handle": "",
		"aria-hidden": "true",
		...n
	}, /*#__PURE__*/ A.createElement("span", {
		"data-vaul-handle-hitarea": "",
		"aria-hidden": "true"
	}, t));
});
_h.displayName = "Drawer.Handle";
function vh({ onDrag: e, onOpenChange: t, open: n, ...r }) {
	let { onNestedDrag: i, onNestedOpenChange: a, onNestedRelease: o } = vm();
	if (!i) throw Error("Drawer.NestedRoot must be placed in another drawer");
	return /*#__PURE__*/ A.createElement(fh, {
		nested: !0,
		open: n,
		onClose: () => {
			a(!1);
		},
		onDrag: (t, n) => {
			i(t, n), e?.(t, n);
		},
		onOpenChange: (e) => {
			e && a(e), t?.(e);
		},
		onRelease: o,
		...r
	});
}
function yh(e) {
	let t = vm(), { container: n = t.container, ...r } = e;
	return /*#__PURE__*/ A.createElement(st, {
		container: n,
		...r
	});
}
var bh = {
	Root: fh,
	NestedRoot: vh,
	Content: mh,
	Overlay: ph,
	Trigger: Qe,
	Portal: yh,
	Handle: _h,
	Close: mt,
	Title: it,
	Description: rt
}, xh = ({ shouldScaleBackground: e = !0, ...t }) => /* @__PURE__ */ (0, j.jsx)(bh.Root, {
	shouldScaleBackground: e,
	...t
});
xh.displayName = "Drawer";
var Sh = bh.Trigger, Ch = bh.Portal;
bh.Close;
var wh = A.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, j.jsx)(bh.Overlay, {
	ref: n,
	className: k("fixed inset-0 z-50 bg-black/80", e),
	...t
}));
wh.displayName = bh.Overlay.displayName;
var Th = A.forwardRef(({ className: e, children: t, hideBar: n = !0, ...r }, i) => /* @__PURE__ */ (0, j.jsxs)(Ch, { children: [/* @__PURE__ */ (0, j.jsx)(wh, {}), /* @__PURE__ */ (0, j.jsxs)(bh.Content, {
	ref: i,
	className: k("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", e),
	...r,
	children: [!n && /* @__PURE__ */ (0, j.jsx)("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }), t]
})] }));
Th.displayName = "DrawerContent";
var Eh = ({ className: e, ...t }) => /* @__PURE__ */ (0, j.jsx)("div", {
	className: k("grid gap-1.5 p-4 text-center sm:text-left", e),
	...t
});
Eh.displayName = "DrawerHeader";
var Dh = ({ className: e, ...t }) => /* @__PURE__ */ (0, j.jsx)("div", {
	className: k("mt-auto flex flex-col gap-2 p-4", e),
	...t
});
Dh.displayName = "DrawerFooter";
var Oh = A.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, j.jsx)(bh.Title, {
	ref: n,
	className: k("text-lg font-semibold leading-none tracking-tight", e),
	...t
}));
Oh.displayName = bh.Title.displayName;
var kh = A.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, j.jsx)(bh.Description, {
	ref: n,
	className: k("text-sm text-muted-foreground", e),
	...t
}));
kh.displayName = bh.Description.displayName;
//#endregion
//#region src/lib/components/navigation/ZudokuLogo.tsx
var Ah = (e) => /* @__PURE__ */ (0, j.jsxs)("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	viewBox: "0 0 132 100",
	fill: "none",
	...e,
	children: [/* @__PURE__ */ (0, j.jsx)("path", {
		fill: "currentColor",
		fillRule: "evenodd",
		d: "M80.092 2.963A4.66 4.66 0 0 1 84.449 0h34.049c6.325 0 10.835 6.135 8.948 12.172L116.653 46.71a4.688 4.688 0 0 1-4.474 3.29H75c-5.178 0-7.813 4.687-9.375 9.374-1.288 3.864-11.07 28.963-14.467 37.662A4.66 4.66 0 0 1 46.801 100H12.75c-6.324 0-10.834-6.134-8.947-12.171l10.793-34.54A4.688 4.688 0 0 1 19.071 50H56.25c5.178 0 7.813-4.687 9.375-9.375 1.288-3.864 11.07-28.962 14.467-37.662Z",
		clipRule: "evenodd"
	}), /* @__PURE__ */ (0, j.jsx)("path", {
		fill: "currentColor",
		d: "M83.54 57.813a7.813 7.813 0 0 0-7.316 5.07L63.888 95.777c-.766 2.043.744 4.222 2.926 4.222h36.828c5.211 0 9.875-3.232 11.704-8.11l8.821-23.522c1.915-5.107-1.861-10.555-7.315-10.555H83.539ZM29.17 0a12.5 12.5 0 0 0-11.704 8.111l-8.82 23.521c-1.915 5.107 1.86 10.556 7.315 10.556h33.312a7.813 7.813 0 0 0 7.316-5.07L68.924 4.223C69.691 2.18 68.18 0 65.998 0H29.17Z"
	})]
});
Ah.displayName = "ZudokuLogo";
//#endregion
//#region src/lib/components/navigation/PoweredByZudoku.tsx
var jh = ({ className: e }) => /* @__PURE__ */ (0, j.jsxs)("a", {
	href: "https://zudoku.dev",
	target: "_blank",
	rel: "noopener noreferrer",
	className: k("flex justify-between items-center w-full border border-transparent hover:border-border rounded-full hover:shadow-xs h-7 px-3 text-nowrap hover:bg-muted/80 transition-all", e),
	children: [/* @__PURE__ */ (0, j.jsxs)("div", {
		className: "opacity-70 hover:opacity-100 transition-opacity gap-1.5 text-[11px] font-medium rounded-full h-7 flex items-center text-nowrap",
		children: [
			/* @__PURE__ */ (0, j.jsx)(Ah, { className: "w-3.5 h-3.5 dark:fill-white" }),
			"powered by ",
			"Zudoku"
		]
	}), /* @__PURE__ */ (0, j.jsx)("div", {
		className: "text-xs font-medium opacity-70 hover:text-foreground transition-colors cursor-pointer",
		children: /* @__PURE__ */ (0, j.jsx)(Kt, {
			size: 12,
			absoluteStrokeWidth: !0,
			strokeWidth: 1.5,
			className: "rtl:rotate-180"
		})
	})]
}), Mh = () => {
	let e = Me().state === "loading", [t, n] = (0, A.useState)(!1);
	(0, A.useEffect)(() => {
		let t = setTimeout(() => n(e), 200);
		return () => clearTimeout(t);
	}, [e]);
	let { isFinished: r, progress: i } = pt({ isAnimating: t });
	return /* @__PURE__ */ (0, j.jsx)("div", {
		className: "absolute w-0 left-0 right-0 bottom-[-1px] h-[2px] bg-primary transition-all duration-300 ease-in-out",
		style: {
			opacity: +!r,
			width: r ? 0 : `${i * 100}%`
		}
	});
}, Nh = () => {
	let { resolvedTheme: e, setTheme: t } = en(), n = yi(), r = n ? e : void 0;
	return /* @__PURE__ */ (0, j.jsxs)("button", {
		type: "button",
		className: k("flex rounded-full border p-0.5 gap-0.5 group", Wt),
		onClick: () => t(e === "dark" ? "light" : "dark"),
		"aria-label": n ? r === "dark" ? "Switch to light mode" : "Switch to dark mode" : "Toggle theme",
		children: [/* @__PURE__ */ (0, j.jsx)("div", {
			className: k("rounded-full p-0.5 border border-transparent [&>svg>circle]:transition-colors [&>svg>path]:transition-transform transition-all [&>svg>path]:duration-200 [&>svg>circle]:duration-500 [&>svg>circle]:fill-transparent", r === "light" && "border-border bg-muted", r === "dark" && "group-hover:[&>svg>path]:scale-110 group-hover:[&>svg>path]:-translate-x-px group-hover:[&>svg>path]:-translate-y-px group-hover:rotate-15"),
			children: /* @__PURE__ */ (0, j.jsx)(Dr, { size: 16 })
		}), /* @__PURE__ */ (0, j.jsx)("div", {
			className: k("rounded-full p-0.5 border border-transparent transition-transform transform-gpu duration-500", r === "dark" && "border-border bg-muted [&>svg>path]:fill-white [&>svg>path]:stroke-transparent", r === "light" && "group-hover:rotate-[-10deg] [&>svg>path]:stroke-currentColor"),
			children: /* @__PURE__ */ (0, j.jsx)(xr, { size: 16 })
		})]
	});
}, Ph = ({ item: e, onClick: t }) => {
	let n = e.icon;
	return /* @__PURE__ */ (0, j.jsxs)(De, {
		to: e.to,
		target: e.target,
		rel: e.target === "_blank" ? "noopener noreferrer" : void 0,
		onClick: t,
		className: "flex items-center font-medium gap-2 py-2 text-foreground/80 hover:text-foreground",
		children: [n && /* @__PURE__ */ (0, j.jsx)(n, { size: 16 }), e.label]
	});
}, Fh = ({ item: e, onNavigate: t }) => {
	if ("to" in e) {
		let n = e.icon;
		return /* @__PURE__ */ (0, j.jsx)("li", {
			className: "w-full",
			children: /* @__PURE__ */ (0, j.jsxs)(De, {
				to: e.to,
				target: e.target,
				rel: e.target === "_blank" ? "noopener noreferrer" : void 0,
				onClick: t,
				className: "flex items-center gap-2 py-2 text-base font-medium",
				children: [n && /* @__PURE__ */ (0, j.jsx)(n, { size: 16 }), e.label]
			})
		});
	}
	return /* @__PURE__ */ (0, j.jsx)("li", {
		className: "w-full",
		children: /* @__PURE__ */ (0, j.jsxs)(Mt, { children: [/* @__PURE__ */ (0, j.jsxs)(At, {
			className: "flex items-center justify-between w-full py-2 text-base font-medium group",
			children: [e.label, /* @__PURE__ */ (0, j.jsx)(Rt, { className: "size-4 transition-transform group-data-[state=open]:rotate-180" })]
		}), /* @__PURE__ */ (0, j.jsx)(Dt, { children: /* @__PURE__ */ (0, j.jsx)("ul", {
			className: "flex flex-col border-l ms-1 ps-3 my-1",
			children: e.items.map((e) => Qf(e) ? /* @__PURE__ */ (0, j.jsxs)("li", {
				className: "flex flex-col",
				children: [/* @__PURE__ */ (0, j.jsx)("div", {
					className: "text-sm text-muted-foreground py-2",
					children: e.label
				}), e.items.map((e) => /* @__PURE__ */ (0, j.jsx)(Ph, {
					item: e,
					onClick: t
				}, e.to))]
			}, e.label) : /* @__PURE__ */ (0, j.jsx)("li", { children: /* @__PURE__ */ (0, j.jsx)(Ph, {
				item: e,
				onClick: t
			}) }, e.to))
		}) })] })
	});
}, Ih = () => {
	let e = Cn(), t = Tt(), n = be(), r = bn(), { options: { header: i, navigation: a = [], site: o }, getProfileMenuItems: s } = e, c = i?.navigation ?? [], l = i?.themeSwitcher?.enabled ?? !0, { isAuthenticated: u, isPending: d, profile: f, isAuthEnabled: p } = t, [m, h] = (0, A.useState)(!1), g = s(), _ = a.filter(mn({
		auth: t,
		context: e
	}));
	return /* @__PURE__ */ (0, j.jsxs)(xh, {
		direction: o?.dir === "rtl" ? "left" : "right",
		open: m,
		onOpenChange: h,
		children: [/* @__PURE__ */ (0, j.jsxs)("div", {
			className: "flex lg:hidden justify-self-end",
			children: [/* @__PURE__ */ (0, j.jsx)(Sh, {
				className: "lg:hidden",
				"aria-label": "Open navigation menu",
				children: /* @__PURE__ */ (0, j.jsx)(br, {
					size: 22,
					"aria-hidden": "true"
				})
			}), /* @__PURE__ */ (0, j.jsx)(Mh, {})]
		}), /* @__PURE__ */ (0, j.jsx)(Th, {
			className: "lg:hidden h-dvh inset-e-0 start-auto w-[340px] rounded-none",
			"aria-describedby": void 0,
			children: /* @__PURE__ */ (0, j.jsxs)("div", {
				className: "py-2 h-full flex flex-col",
				children: [/* @__PURE__ */ (0, j.jsxs)("div", {
					className: "flex-1 overflow-y-auto overscroll-none",
					children: [/* @__PURE__ */ (0, j.jsx)(ct, { children: /* @__PURE__ */ (0, j.jsx)(Oh, { children: "Navigation" }) }), /* @__PURE__ */ (0, j.jsxs)("ul", {
						className: "flex flex-col gap-1 px-4",
						children: [
							c.map((e) => /* @__PURE__ */ (0, j.jsx)(Fh, {
								item: e,
								onNavigate: () => h(!1)
							}, e.label)),
							c.length > 0 && /* @__PURE__ */ (0, j.jsx)(y, { className: "my-2" }),
							_.map((e) => e.type === "separator" ? /* @__PURE__ */ (0, j.jsx)(y, { className: "my-2" }, e.label) : e.type === "section" || e.type === "filter" ? null : /* @__PURE__ */ (0, j.jsx)("li", { children: /* @__PURE__ */ (0, j.jsxs)(De, {
								to: xn(e),
								onClick: () => h(!1),
								className: `flex items-center gap-2 py-2 text-base font-medium ${Ha(r.topNavItem, e) ? "text-foreground" : "text-foreground/75 hover:text-foreground"}`,
								children: [e.icon && /* @__PURE__ */ (0, j.jsx)(e.icon, { size: 16 }), e.label]
							}) }, e.label)),
							p && (d ? /* @__PURE__ */ (0, j.jsx)(vd, { className: "rounded-sm h-5 w-24" }) : u && /* @__PURE__ */ (0, j.jsxs)(j.Fragment, { children: [
								/* @__PURE__ */ (0, j.jsx)(y, { className: "my-2" }),
								/* @__PURE__ */ (0, j.jsxs)("li", {
									className: "py-2",
									children: [/* @__PURE__ */ (0, j.jsx)("div", {
										className: "text-base font-medium",
										children: f?.name ?? "My Account"
									}), f?.email && f.email !== f?.name && /* @__PURE__ */ (0, j.jsx)("div", {
										className: "text-sm text-muted-foreground",
										children: f.email
									})]
								}),
								g.map((e) => /* @__PURE__ */ (0, j.jsx)("li", { children: /* @__PURE__ */ (0, j.jsx)(De, {
									to: e.path ?? "",
									target: e.target,
									rel: e.target === "_blank" ? "noopener noreferrer" : void 0,
									onClick: () => h(!1),
									className: "flex items-center py-2 text-base font-medium text-foreground/75 hover:text-foreground",
									children: e.label
								}) }, e.label))
							] }))
						]
					})]
				}), /* @__PURE__ */ (0, j.jsxs)("div", {
					className: "border-t shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] px-4 pt-3 flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, j.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [p && (d ? /* @__PURE__ */ (0, j.jsx)(vd, { className: "rounded-sm h-8 w-16" }) : u ? /* @__PURE__ */ (0, j.jsx)(cn, {
							asChild: !0,
							variant: "outline",
							children: /* @__PURE__ */ (0, j.jsxs)(De, {
								to: "/signout",
								onClick: () => h(!1),
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, j.jsx)(gt, {
									size: 16,
									strokeWidth: 1,
									absoluteStrokeWidth: !0
								}), "Logout"]
							})
						}) : /* @__PURE__ */ (0, j.jsx)(cn, {
							asChild: !0,
							variant: "outline",
							children: /* @__PURE__ */ (0, j.jsx)(De, {
								to: `/signin?redirect=${encodeURIComponent(n.pathname)}`,
								onClick: () => h(!1),
								children: "Login"
							})
						})), l && /* @__PURE__ */ (0, j.jsx)(Nh, {})]
					}), o?.showPoweredBy !== !1 && /* @__PURE__ */ (0, j.jsx)(jh, { className: "grow-0 justify-center gap-1" })]
				})]
			})
		})]
	});
}, Lh = () => {
	let e = Cn(), { options: { navigation: t = [] } } = e, n = Tt();
	return t.filter(mn({
		auth: n,
		context: e
	})).length, /* @__PURE__ */ (0, j.jsx)("style", { children: ":root { --top-nav-height: 0px; }" });
}, Rh = ({ item: e }) => e.children ? /* @__PURE__ */ (0, j.jsxs)(Bt, { children: [/* @__PURE__ */ (0, j.jsx)($t, { children: e.label }), /* @__PURE__ */ (0, j.jsx)(Xt, { children: /* @__PURE__ */ (0, j.jsx)(Jt, { children: e.children.map((e) => /* @__PURE__ */ (0, j.jsx)(Rh, { item: e }, e.label)) }) })] }, e.label) : /* @__PURE__ */ (0, j.jsx)(De, {
	to: e.path ?? "",
	target: e.target,
	rel: e.target === "_blank" ? "noopener noreferrer" : void 0,
	children: /* @__PURE__ */ (0, j.jsxs)(Gt, {
		className: "flex gap-2",
		children: [e.icon && /* @__PURE__ */ (0, j.jsx)(e.icon, {
			size: 16,
			strokeWidth: 1,
			absoluteStrokeWidth: !0
		}), e.label]
	}, e.label)
}), zh = () => {
	let e = Cn().getProfileMenuItems(), t = Tt(), { isAuthEnabled: n, isPending: r, isAuthenticated: i, profile: a } = t;
	return n ? r ? /* @__PURE__ */ (0, j.jsx)(vd, { className: "rounded-sm h-8 w-16" }) : i ? /* @__PURE__ */ (0, j.jsxs)(Qt, {
		modal: !1,
		children: [/* @__PURE__ */ (0, j.jsx)(Vt, {
			asChild: !0,
			children: /* @__PURE__ */ (0, j.jsx)(cn, {
				size: "lg",
				variant: "ghost",
				children: a?.name ?? "My Account"
			})
		}), /* @__PURE__ */ (0, j.jsxs)(Yt, {
			className: "w-56",
			children: [
				/* @__PURE__ */ (0, j.jsxs)(zt, { children: [a?.name ?? "My Account", a?.email && a.email !== a?.name && /* @__PURE__ */ (0, j.jsx)("div", {
					className: "font-normal text-muted-foreground",
					children: a.email
				})] }),
				e.filter((e) => e.category === "top").length > 0 && /* @__PURE__ */ (0, j.jsx)(Zt, {}),
				e.filter((e) => e.category === "top").map((e) => /* @__PURE__ */ (0, j.jsx)(Rh, { item: e }, e.label)),
				e.filter((e) => !e.category || e.category === "middle").length > 0 && /* @__PURE__ */ (0, j.jsx)(Zt, {}),
				e.filter((e) => !e.category || e.category === "middle").map((e) => /* @__PURE__ */ (0, j.jsx)(Rh, { item: e }, e.label)),
				e.filter((e) => e.category === "bottom").length > 0 && /* @__PURE__ */ (0, j.jsx)(Zt, {}),
				e.filter((e) => e.category === "bottom").map((e) => /* @__PURE__ */ (0, j.jsx)(Rh, { item: e }, e.label)),
				/* @__PURE__ */ (0, j.jsx)(Zt, {}),
				/* @__PURE__ */ (0, j.jsx)(De, {
					to: "/signout",
					children: /* @__PURE__ */ (0, j.jsxs)(Gt, {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, j.jsx)(gt, {
							size: 16,
							strokeWidth: 1,
							absoluteStrokeWidth: !0
						}), "Logout"]
					})
				})
			]
		})]
	}) : /* @__PURE__ */ (0, j.jsx)(cn, {
		size: "lg",
		variant: "ghost",
		onClick: () => t.login(),
		children: "Login"
	}) : null;
}, Bh = (0, A.memo)(function() {
	let { options: { site: e, header: t, basePath: n } } = Cn(), r = t?.placements?.search ?? "center", i = t?.placements?.navigation ?? "end", a = t?.placements?.auth ?? "navigation", o = t?.themeSwitcher?.enabled ?? !0, s = a === "navigation" ? i : a, c = e?.logo ? /https?:\/\//.test(e.logo.src.light) ? e.logo.src.light : O(n, e.logo.src.light) : void 0, l = e?.logo ? /https?:\/\//.test(e.logo.src.dark) ? e.logo.src.dark : O(n, e.logo.src.dark) : void 0, u = "inset-shadow-[0_-1px_0_0_var(--border)]";
	return /* @__PURE__ */ (0, j.jsxs)("header", {
		className: "sticky lg:top-0 z-10 bg-background/80 backdrop-blur w-full",
		"data-pagefind-ignore": "all",
		children: [
			/* @__PURE__ */ (0, j.jsx)(bd, {}),
			/* @__PURE__ */ (0, j.jsxs)("div", {
				className: k(u, "relative"),
				children: [/* @__PURE__ */ (0, j.jsx)(Mh, {}), /* @__PURE__ */ (0, j.jsxs)("div", {
					className: "max-w-screen-2xl mx-auto flex lg:grid lg:grid-cols-[1fr_auto_1fr] gap-2 items-center justify-between h-(--top-header-height) px-4 lg:px-8 border-transparent",
					children: [
						/* @__PURE__ */ (0, j.jsxs)("div", {
							className: "flex items-center gap-4 min-w-0 justify-self-start",
							children: [
								/* @__PURE__ */ (0, j.jsx)(De, {
									to: e?.logo?.href ?? "/",
									reloadDocument: e?.logo?.reloadDocument ?? !0,
									className: "shrink-0",
									children: /* @__PURE__ */ (0, j.jsx)("div", {
										className: "flex items-center gap-3.5",
										children: e?.logo ? /* @__PURE__ */ (0, j.jsxs)(j.Fragment, { children: [
											/* @__PURE__ */ (0, j.jsxs)(ee, { children: [/* @__PURE__ */ (0, j.jsx)("link", {
												rel: "preload",
												as: "image",
												href: c
											}), /* @__PURE__ */ (0, j.jsx)("link", {
												rel: "preload",
												as: "image",
												href: l
											})] }),
											/* @__PURE__ */ (0, j.jsx)("img", {
												src: c,
												alt: e.logo.alt ?? e.title,
												style: { width: e.logo.width },
												className: "max-h-(--top-header-height) dark:hidden"
											}),
											/* @__PURE__ */ (0, j.jsx)("img", {
												src: l,
												alt: e.logo.alt ?? e.title,
												style: { width: e.logo.width },
												className: "max-h-(--top-header-height) hidden dark:block"
											})
										] }) : /* @__PURE__ */ (0, j.jsx)("span", {
											className: "font-semibold text-2xl",
											children: e?.title
										})
									})
								}),
								/* @__PURE__ */ (0, j.jsx)(Wi.Target, { name: "head-navigation-start" }),
								r === "start" && /* @__PURE__ */ (0, j.jsx)(Li, { className: "hidden lg:flex" }),
								s === "start" && /* @__PURE__ */ (0, j.jsx)("div", {
									className: "hidden lg:flex",
									children: /* @__PURE__ */ (0, j.jsx)(zh, {})
								}),
								i === "start" && /* @__PURE__ */ (0, j.jsx)("div", {
									className: "hidden lg:block min-w-0",
									children: /* @__PURE__ */ (0, j.jsx)(hm, {})
								})
							]
						}),
						/* @__PURE__ */ (0, j.jsxs)("div", {
							className: "flex items-center justify-center",
							children: [
								/* @__PURE__ */ (0, j.jsx)(Li, { className: k(r === "center" ? "flex" : "flex lg:hidden") }),
								i === "center" && /* @__PURE__ */ (0, j.jsx)("div", {
									className: "hidden lg:block min-w-0",
									children: /* @__PURE__ */ (0, j.jsx)(hm, {})
								}),
								s === "center" && /* @__PURE__ */ (0, j.jsx)("div", {
									className: "hidden lg:flex",
									children: /* @__PURE__ */ (0, j.jsx)(zh, {})
								})
							]
						}),
						/* @__PURE__ */ (0, j.jsxs)("div", {
							className: "flex items-center gap-2 justify-self-end",
							children: [/* @__PURE__ */ (0, j.jsx)(Ih, {}), /* @__PURE__ */ (0, j.jsxs)("div", {
								className: "hidden lg:flex items-center text-sm gap-2",
								children: [
									i === "end" && /* @__PURE__ */ (0, j.jsx)("div", {
										className: "min-w-0",
										children: /* @__PURE__ */ (0, j.jsx)(hm, {})
									}),
									s === "end" && /* @__PURE__ */ (0, j.jsx)(zh, {}),
									r === "end" && /* @__PURE__ */ (0, j.jsx)(Li, {}),
									/* @__PURE__ */ (0, j.jsx)(Wi.Target, { name: "head-navigation-end" }),
									o && /* @__PURE__ */ (0, j.jsx)(Nh, {})
								]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, j.jsx)("div", {
				className: k("hidden lg:block", u),
				children: /* @__PURE__ */ (0, j.jsxs)("div", {
					className: "max-w-screen-2xl mx-auto border-transparent relative",
					children: [
						/* @__PURE__ */ (0, j.jsx)(Wi.Target, { name: "top-navigation-before" }),
						/* @__PURE__ */ (0, j.jsx)(Lh, {}),
						/* @__PURE__ */ (0, j.jsx)(Wi.Target, { name: "top-navigation-after" })
					]
				})
			})
		]
	});
}), Vh = (0, A.createContext)({});
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/utils/use-constant.mjs
function Hh(e) {
	let t = (0, A.useRef)(null);
	return t.current === null && (t.current = e()), t.current;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var Uh = typeof window < "u" ? A.useLayoutEffect : A.useEffect, Wh = /* @__PURE__ */ (0, A.createContext)(null);
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/array.mjs
function Gh(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function Kh(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/clamp.mjs
var qh = (e, t, n) => n > t ? t : n < e ? e : n, Jh = () => {}, Yh = () => {}, Xh = {}, Zh = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Qh = (e) => typeof e == "object" && !!e, $h = (e) => /^0[^.\s]+$/u.test(e);
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function eg(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/noop.mjs
var tg = /* @__NO_SIDE_EFFECTS__ */ (e) => e, ng = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return Gh(this.subscriptions, e), () => Kh(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) if (r === 1) this.subscriptions[0](e, t, n);
		else for (let i = 0; i < r; i++) {
			let r = this.subscriptions[i];
			r && r(e, t, n);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, rg = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, ig = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, ag = /* @__NO_SIDE_EFFECTS__ */ (e, t) => t ? 1e3 / t * e : 0, og = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] == "number", sg = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
], cg = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function lg(e, t) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, a = !1, o = /* @__PURE__ */ new WeakSet(), s = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, c = 0;
	function l(t) {
		o.has(t) && (u.schedule(t), e()), c++, t(s);
	}
	let u = {
		schedule: (e, t = !1, a = !1) => {
			let s = a && i ? n : r;
			return t && o.add(e), s.add(e), e;
		},
		cancel: (e) => {
			r.delete(e), o.delete(e);
		},
		process: (e) => {
			if (s = e, i) {
				a = !0;
				return;
			}
			i = !0;
			let o = n;
			n = r, r = o, n.forEach(l), t && cg.value && cg.value.frameloop[t].push(c), c = 0, n.clear(), i = !1, a && (a = !1, u.process(e));
		}
	};
	return u;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var ug = 40;
function dg(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = sg.reduce((e, n) => (e[n] = lg(a, t ? n : void 0), e), {}), { setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = o, h = () => {
		let a = Xh.useManualTiming, o = a ? i.timestamp : performance.now();
		n = !1, a || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(o - i.timestamp, ug), 1)), i.timestamp = o, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
	}, g = () => {
		n = !0, r = !0, i.isProcessing || e(h);
	};
	return {
		schedule: sg.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < sg.length; t++) o[sg[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: fg, cancel: pg, state: mg, steps: hg } = /* @__PURE__ */ dg(typeof requestAnimationFrame < "u" ? requestAnimationFrame : tg, !0), gg;
function _g() {
	gg = void 0;
}
var vg = {
	now: () => (gg === void 0 && vg.set(mg.isProcessing || Xh.useManualTiming ? mg.timestamp : performance.now()), gg),
	set: (e) => {
		gg = e, queueMicrotask(_g);
	}
}, yg = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, bg = (e) => (t) => typeof t == "string" && t.startsWith(e), xg = /*@__PURE__*/ bg("--"), Sg = /*@__PURE__*/ bg("var(--"), Cg = (e) => Sg(e) ? wg.test(e.split("/*")[0].trim()) : !1, wg = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Tg(e) {
	return typeof e == "string" ? e.split("/*")[0].includes("var(--") : !1;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var Eg = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, Dg = {
	...Eg,
	transform: (e) => qh(0, 1, e)
}, Og = {
	...Eg,
	default: 1
}, kg = (e) => Math.round(e * 1e5) / 1e5, Ag = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function jg(e) {
	return e == null;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var Mg = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ng = (e, t) => (n) => !!(typeof n == "string" && Mg.test(n) && n.startsWith(e) || t && !jg(n) && Object.prototype.hasOwnProperty.call(n, t)), Pg = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(Ag);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, Fg = (e) => qh(0, 255, e), Ig = {
	...Eg,
	transform: (e) => Math.round(Fg(e))
}, Lg = {
	test: /*@__PURE__*/ Ng("rgb", "red"),
	parse: /*@__PURE__*/ Pg("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Ig.transform(e) + ", " + Ig.transform(t) + ", " + Ig.transform(n) + ", " + kg(Dg.transform(r)) + ")"
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/value/types/color/hex.mjs
function Rg(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var zg = {
	test: /*@__PURE__*/ Ng("#"),
	parse: Rg,
	transform: Lg.transform
}, Bg = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), Vg = /*@__PURE__*/ Bg("deg"), Hg = /*@__PURE__*/ Bg("%"), $ = /*@__PURE__*/ Bg("px"), Ug = /*@__PURE__*/ Bg("vh"), Wg = /*@__PURE__*/ Bg("vw"), Gg = {
	...Hg,
	parse: (e) => Hg.parse(e) / 100,
	transform: (e) => Hg.transform(e * 100)
}, Kg = {
	test: /*@__PURE__*/ Ng("hsl", "hue"),
	parse: /*@__PURE__*/ Pg("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Hg.transform(kg(t)) + ", " + Hg.transform(kg(n)) + ", " + kg(Dg.transform(r)) + ")"
}, qg = {
	test: (e) => Lg.test(e) || zg.test(e) || Kg.test(e),
	parse: (e) => Lg.test(e) ? Lg.parse(e) : Kg.test(e) ? Kg.parse(e) : zg.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Lg.transform(e) : Kg.transform(e),
	getAnimatableNone: (e) => {
		let t = qg.parse(e);
		return t.alpha = 0, qg.transform(t);
	}
}, Jg = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/value/types/complex/index.mjs
function Yg(e) {
	return isNaN(e) && typeof e == "string" && (e.match(Ag)?.length || 0) + (e.match(Jg)?.length || 0) > 0;
}
var Xg = "number", Zg = "color", Qg = "var", $g = "var(", e_ = "${}", t_ = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function n_(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(t_, (e) => (qg.test(e) ? (r.color.push(a), i.push(Zg), n.push(qg.parse(e))) : e.startsWith($g) ? (r.var.push(a), i.push(Qg), n.push(e)) : (r.number.push(a), i.push(Xg), n.push(parseFloat(e))), ++a, e_)).split(e_),
		indexes: r,
		types: i
	};
}
function r_(e) {
	return n_(e).values;
}
function i_({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = "";
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			e === Xg ? i += kg(r[a]) : e === Zg ? i += qg.transform(r[a]) : i += r[a];
		}
		return i;
	};
}
function a_(e) {
	return i_(n_(e));
}
var o_ = (e) => typeof e == "number" ? 0 : qg.test(e) ? qg.getAnimatableNone(e) : e, s_ = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : o_(e);
function c_(e) {
	let t = n_(e);
	return i_(t)(t.values.map((e, n) => s_(e, t.split[n])));
}
var l_ = {
	test: Yg,
	parse: r_,
	createTransformer: a_,
	getAnimatableNone: c_
}, u_ = (e, t, n) => e + (t - e) * n, d_ = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, f_ = (e) => e !== null;
function p_(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter(f_), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var m_ = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((e) => {
			this.resolve = e;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function h_(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var g_ = (e) => e * 180 / Math.PI, __ = (e) => y_(g_(Math.atan2(e[1], e[0]))), v_ = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: __,
	rotateZ: __,
	skewX: (e) => g_(Math.atan(e[1])),
	skewY: (e) => g_(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, y_ = (e) => (e %= 360, e < 0 && (e += 360), e), b_ = __, x_ = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), S_ = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), C_ = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: x_,
	scaleY: S_,
	scale: (e) => (x_(e) + S_(e)) / 2,
	rotateX: (e) => y_(g_(Math.atan2(e[6], e[5]))),
	rotateY: (e) => y_(g_(Math.atan2(-e[2], e[0]))),
	rotateZ: b_,
	rotate: b_,
	skewX: (e) => g_(Math.atan(e[4])),
	skewY: (e) => g_(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function w_(e) {
	return +!!e.includes("scale");
}
function T_(e, t) {
	if (!e || e === "none") return w_(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = C_, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = v_, i = t;
	}
	if (!i) return w_(t);
	let a = r[t], o = i[1].split(",").map(D_);
	return typeof a == "function" ? a(o) : o[a];
}
var E_ = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return T_(n, t);
};
function D_(e) {
	return parseFloat(e.trim());
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
var O_ = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
], k_ = /* @__PURE__ */ new Set([...O_, "pathRotation"]), A_ = (e) => e === Eg || e === $, j_ = new Set([
	"x",
	"y",
	"z"
]), M_ = O_.filter((e) => !j_.has(e));
function N_(e) {
	let t = [];
	return M_.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var P_ = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }) => {
		let i = e.max - e.min;
		return r === "border-box" ? i : i - parseFloat(t) - parseFloat(n);
	},
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: (e, { transform: t }) => T_(t, "x"),
	y: (e, { transform: t }) => T_(t, "y")
};
P_.translateX = P_.x, P_.translateY = P_.y;
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var F_ = /* @__PURE__ */ new Set(), I_ = !1, L_ = !1, R_ = !1;
function z_() {
	if (L_) {
		let e = Array.from(F_).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = N_(e);
			t.length && (n.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = n.get(e);
			t && t.forEach(([t, n]) => {
				e.getValue(t)?.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	L_ = !1, I_ = !1, F_.forEach((e) => e.complete(R_)), F_.clear();
}
function B_() {
	F_.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (L_ = !0);
	});
}
function V_() {
	R_ = !0, B_(), z_(), R_ = !1;
}
var H_ = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (F_.add(this), I_ || (I_ = !0, fg.read(B_), fg.resolveKeyframes(z_))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = n.readValue(t, a);
				r != null && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		h_(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), F_.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (F_.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, U_ = (e) => e.startsWith("--");
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function W_(e, t, n) {
	U_(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var G_ = {};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function K_(e, t) {
	let n = /* @__PURE__ */ eg(e);
	return () => G_[t] ?? n();
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var q_ = /* @__PURE__ */ K_(() => window.ScrollTimeline !== void 0, "scrollTimeline"), J_ = /*@__PURE__*/ K_(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), Y_ = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, X_ = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ Y_([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ Y_([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ Y_([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ Y_([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function Z_(e, t) {
	if (e) return typeof e == "function" ? J_() ? d_(e, t) : "ease-out" : /* @__PURE__ */ og(e) ? Y_(e) : Array.isArray(e) ? e.map((e) => Z_(e, t) || X_.easeOut) : X_[e];
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function Q_(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = Z_(s, i);
	Array.isArray(d) && (u.easing = d), cg.value && yg.waapi++;
	let f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	l && (f.pseudoElement = l);
	let p = e.animate(u, f);
	return cg.value && p.finished.finally(() => {
		yg.waapi--;
	}), p;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function $_(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function ev({ type: e, ...t }) {
	return $_(e) && J_() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var tv = class extends m_ {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, e.type;
		let c = ev(e);
		this.animation = Q_(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = p_(r, this.options, o, this.speed);
				this.updateMotionValue && this.updateMotionValue(e), W_(t, n, e), this.animation.cancel();
			}
			s?.(), this.notifyFinished();
		};
	}
	play() {
		this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		let { state: e } = this;
		e === "idle" || e === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		let e = this.options?.element;
		!this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
	}
	get duration() {
		let e = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ ig(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ ig(e);
	}
	get time() {
		return /* @__PURE__ */ ig(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		let t = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ rg(e), t && this.animation.pause();
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(e) {
		e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(e) {
		this.manualStartTime = this.animation.startTime = e;
	}
	attachTimeline({ timeline: e, rangeStart: t, rangeEnd: n, observe: r }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && q_() ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), n && (this.animation.rangeEnd = n), tg) : r(this);
	}
}, nv = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), rv = 30, iv = (e) => !isNaN(parseFloat(e)), av = { current: void 0 }, ov = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = vg.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = vg.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = iv(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new ng());
		let n = this.events[e].add(t);
		return e === "change" ? () => {
			n(), fg.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : n;
	}
	clearListeners() {
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e) {
		this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(e) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(e);
	}
	removeDependent(e) {
		this.dependents && this.dependents.delete(e);
	}
	get() {
		return av.current && av.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = vg.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > rv) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, rv);
		return /* @__PURE__ */ ag(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return this.stop(), new Promise((t) => {
			this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify();
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
		});
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function sv(e, t) {
	return new ov(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function cv(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function lv(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = cv(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = cv(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var uv = (e) => !!(e && e.getVelocity);
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function dv(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
var fv = "data-" + dv("framerAppearId"), pv = {
	test: (e) => e === "auto",
	parse: (e) => e
}, mv = (e) => (t) => t.test(e), hv = [
	Eg,
	$,
	Hg,
	Vg,
	Wg,
	Ug,
	pv
], gv = (e) => hv.find(mv(e)), _v = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function vv(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(Ag) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!_v.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var yv = /\b([a-z-]*)\(.*?\)/gu, bv = {
	...l_,
	getAnimatableNone: (e) => {
		let t = e.match(yv);
		return t ? t.map(vv).join(" ") : e;
	}
}, xv = {
	...l_,
	getAnimatableNone: (e) => {
		let t = l_.parse(e);
		return l_.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
	}
}, Sv = {
	...Eg,
	transform: Math.round
}, Cv = {
	borderWidth: $,
	borderTopWidth: $,
	borderRightWidth: $,
	borderBottomWidth: $,
	borderLeftWidth: $,
	borderRadius: $,
	borderTopLeftRadius: $,
	borderTopRightRadius: $,
	borderBottomRightRadius: $,
	borderBottomLeftRadius: $,
	width: $,
	maxWidth: $,
	height: $,
	maxHeight: $,
	top: $,
	right: $,
	bottom: $,
	left: $,
	inset: $,
	insetBlock: $,
	insetBlockStart: $,
	insetBlockEnd: $,
	insetInline: $,
	insetInlineStart: $,
	insetInlineEnd: $,
	padding: $,
	paddingTop: $,
	paddingRight: $,
	paddingBottom: $,
	paddingLeft: $,
	paddingBlock: $,
	paddingBlockStart: $,
	paddingBlockEnd: $,
	paddingInline: $,
	paddingInlineStart: $,
	paddingInlineEnd: $,
	margin: $,
	marginTop: $,
	marginRight: $,
	marginBottom: $,
	marginLeft: $,
	marginBlock: $,
	marginBlockStart: $,
	marginBlockEnd: $,
	marginInline: $,
	marginInlineStart: $,
	marginInlineEnd: $,
	fontSize: $,
	backgroundPositionX: $,
	backgroundPositionY: $,
	rotate: Vg,
	pathRotation: Vg,
	rotateX: Vg,
	rotateY: Vg,
	rotateZ: Vg,
	scale: Og,
	scaleX: Og,
	scaleY: Og,
	scaleZ: Og,
	skew: Vg,
	skewX: Vg,
	skewY: Vg,
	distance: $,
	translateX: $,
	translateY: $,
	translateZ: $,
	x: $,
	y: $,
	z: $,
	perspective: $,
	transformPerspective: $,
	opacity: Dg,
	originX: Gg,
	originY: Gg,
	originZ: $,
	zIndex: Sv,
	fillOpacity: Dg,
	strokeOpacity: Dg,
	numOctaves: Sv
}, wv = {
	...Cv,
	color: qg,
	backgroundColor: qg,
	outlineColor: qg,
	fill: qg,
	stroke: qg,
	borderColor: qg,
	borderTopColor: qg,
	borderRightColor: qg,
	borderBottomColor: qg,
	borderLeftColor: qg,
	filter: bv,
	WebkitFilter: bv,
	mask: xv,
	WebkitMask: xv
}, Tv = (e) => wv[e], Ev = /*@__PURE__*/ new Set([bv, xv]);
function Dv(e, t) {
	let n = Tv(e);
	return Ev.has(n) || (n = l_), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var Ov = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function kv(e) {
	return Qh(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/frameloop/microtask.mjs
var { schedule: Av, cancel: jv } = /* @__PURE__ */ dg(queueMicrotask, !1), Mv = [
	...hv,
	qg,
	l_
], Nv = (e) => Mv.find(mv(e)), Pv = () => ({
	min: 0,
	max: 0
}), Fv = () => ({
	x: Pv(),
	y: Pv()
}), Iv = /* @__PURE__ */ new WeakMap();
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function Lv(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function Rv(e) {
	return typeof e == "string" || Array.isArray(e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var zv = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], Bv = ["initial", ...zv];
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function Vv(e) {
	return Lv(e.animate) || Bv.some((t) => Rv(e[t]));
}
function Hv(e) {
	return !!(Vv(e) || e.variants);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function Uv(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (uv(i)) e.addValue(r, i);
		else if (uv(a)) e.addValue(r, sv(i, { owner: e }));
		else if (a !== i) if (e.hasValue(r)) {
			let t = e.getValue(r);
			t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
		} else {
			let t = e.getStaticValue(r);
			e.addValue(r, sv(t === void 0 ? i : t, { owner: e }));
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var Wv = { current: null }, Gv = { current: !1 }, Kv = typeof window < "u";
function qv() {
	if (Gv.current = !0, Kv) if (window.matchMedia) {
		let e = window.matchMedia("(prefers-reduced-motion)"), t = () => Wv.current = e.matches;
		e.addEventListener("change", t), t();
	} else Wv.current = !1;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/VisualElement.mjs
var Jv = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], Yv = {};
function Xv(e) {
	Yv = e;
}
function Zv() {
	return Yv;
}
var Qv = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, skipAnimations: i, blockInitialAnimation: a, visualState: o }, s = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = H_, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = vg.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, fg.render(this.render, !1, !0));
		};
		let { latestValues: c, renderState: l } = o;
		this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = t.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = Vv(t), this.isVariantNode = Hv(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in d) {
			let t = d[e];
			c[e] !== void 0 && uv(t) && t.set(c[e]);
		}
	}
	mount(e) {
		if (this.hasBeenMounted) for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
		this.current = e, Iv.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Gv.current || qv(), this.shouldReduceMotion = Wv.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
	}
	unmount() {
		this.projection && this.projection.unmount(), pg(this.notifyUpdate), pg(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
		for (let e in this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	addChild(e) {
		this.children.add(e), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(e);
	}
	removeChild(e) {
		this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e);
	}
	bindToMotionValue(e, t) {
		if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && nv.has(e) && this.current instanceof HTMLElement) {
			let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate, s = new tv({
				element: this.current,
				name: e,
				keyframes: r,
				times: i,
				ease: a,
				duration: /* @__PURE__ */ rg(o)
			}), c = n(s);
			this.valueSubscriptions.set(e, () => {
				c(), s.cancel();
			});
			return;
		}
		let n = k_.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && fg.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), i;
		typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i && i();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in Yv) {
			let t = Yv[e];
			if (!t) continue;
			let { isEnabled: n, Feature: r } = t;
			if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
				let t = this.features[e];
				t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Fv();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < Jv.length; t++) {
			let n = Jv[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = Uv(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(e) {
		let t = this.getClosestVariantNode();
		if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
	}
	addValue(e, t) {
		let n = this.values.get(e);
		t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get());
	}
	removeValue(e) {
		this.values.delete(e);
		let t = this.valueSubscriptions.get(e);
		t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, t) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let n = this.values.get(e);
		return n === void 0 && t !== void 0 && (n = sv(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (Zh(n) || $h(n)) ? n = parseFloat(n) : !Nv(n) && l_.test(t) && (n = Dv(e, t)), this.setBaseTarget(e, uv(n) ? n.get() : n)), uv(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = lv(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !uv(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new ng()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
	scheduleRenderMicrotask() {
		Av.render(this.render);
	}
}, $v = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, ey = O_.length;
function ty(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < ey; a++) {
		let o = O_[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (typeof s == "number") c = s === +!!o.startsWith("scale");
		else {
			let e = parseFloat(s);
			c = o.startsWith("scale") ? e === 1 : e === 0;
		}
		if (!c || n) {
			let e = Ov(s, Cv[o]);
			if (!c) {
				i = !1;
				let t = $v[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	let a = e.pathRotation;
	return a && (i = !1, r += `rotate(${Ov(a, Cv.pathRotation)}) `), r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function ny(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (k_.has(e)) {
			o = !0;
			continue;
		} else if (xg(e)) {
			i[e] = n;
			continue;
		} else {
			let t = Ov(n, Cv[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = ty(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function ry(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var iy = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") if ($.test(e)) e = parseFloat(e);
	else return e;
	return `${ry(e, t.target.x)}% ${ry(e, t.target.y)}%`;
} }, ay = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = l_.parse(e);
	if (i.length > 5) return r;
	let a = l_.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = u_(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, oy = {
	borderRadius: {
		...iy,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: iy,
	borderTopRightRadius: iy,
	borderBottomLeftRadius: iy,
	borderBottomRightRadius: iy,
	boxShadow: ay
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function sy(e, { layout: t, layoutId: n }) {
	return k_.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!oy[e] || e === "opacity");
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function cy(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (uv(r[t]) || i && uv(i[t]) || sy(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
	return a;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/svg/utils/path.mjs
var ly = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, uy = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function dy(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? ly : uy;
	e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var fy = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function py(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (ny(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox);
	for (let e of fy) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
	t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && dy(d, i, a, o, !1);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/svg/utils/is-svg-tag.mjs
var my = (e) => typeof e == "string" && e.toLowerCase() === "svg";
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function hy(e, t, n) {
	let r = cy(e, t, n);
	for (let n in e) if (uv(e[n]) || uv(t[n])) {
		let t = O_.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
function gy(e) {
	return uv(e) ? e.get() : e;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var _y = (0, A.createContext)({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
});
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
function vy(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function yy(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = vy(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : vy(e[t], null);
			}
		};
	};
}
function by(...e) {
	return A.useCallback(yy(...e), e);
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var xy = class extends A.Component {
	getSnapshotBeforeUpdate(e) {
		let t = this.props.childRef.current;
		if (kv(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
			let e = t.offsetParent, n = kv(e) && e.offsetWidth || 0, r = kv(e) && e.offsetHeight || 0, i = getComputedStyle(t), a = this.props.sizeRef.current;
			a.height = parseFloat(i.height), a.width = parseFloat(i.width), a.top = t.offsetTop, a.left = t.offsetLeft, a.right = n - a.width - a.left, a.bottom = r - a.height - a.top, a.direction = i.direction;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function Sy({ children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: a }) {
	let o = (0, A.useId)(), s = (0, A.useRef)(null), c = (0, A.useRef)({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		direction: "ltr"
	}), { nonce: l } = (0, A.useContext)(_y), u = by(s, e.props?.ref ?? e?.ref);
	return (0, A.useInsertionEffect)(() => {
		let { width: e, height: u, top: d, left: f, right: p, bottom: m, direction: h } = c.current;
		if (t || a === !1 || !s.current || !e || !u) return;
		let g = h === "rtl", _ = n === "left" ? g ? `right: ${p}` : `left: ${f}` : g ? `left: ${f}` : `right: ${p}`, v = r === "bottom" ? `bottom: ${m}` : `top: ${d}`;
		s.current.dataset.motionPopId = o;
		let y = document.createElement("style");
		l && (y.nonce = l);
		let b = i ?? document.head;
		return b.appendChild(y), y.sheet && y.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${u}px !important;
            ${_}px !important;
            ${v}px !important;
          }
        `), () => {
			s.current?.removeAttribute("data-motion-pop-id"), b.contains(y) && b.removeChild(y);
		};
	}, [t]), (0, j.jsx)(xy, {
		isPresent: t,
		childRef: s,
		sizeRef: c,
		pop: a,
		children: a === !1 ? e : A.cloneElement(e, { ref: u })
	});
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var Cy = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: a, mode: o, anchorX: s, anchorY: c, root: l }) => {
	let u = Hh(wy), d = (0, A.useId)(), f = !0, p = (0, A.useMemo)(() => (f = !1, {
		id: d,
		initial: t,
		isPresent: n,
		custom: i,
		onExitComplete: (e) => {
			u.set(e, !0);
			for (let e of u.values()) if (!e) return;
			r && r();
		},
		register: (e) => (u.set(e, !1), () => u.delete(e))
	}), [
		n,
		u,
		r
	]);
	return a && f && (p = { ...p }), (0, A.useMemo)(() => {
		u.forEach((e, t) => u.set(t, !1));
	}, [n]), A.useEffect(() => {
		!n && !u.size && r && r();
	}, [n]), e = (0, j.jsx)(Sy, {
		pop: o === "popLayout",
		isPresent: n,
		anchorX: s,
		anchorY: c,
		root: l,
		children: e
	}), (0, j.jsx)(Wh.Provider, {
		value: p,
		children: e
	});
};
function wy() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function Ty(e = !0) {
	let t = (0, A.useContext)(Wh);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = (0, A.useId)();
	(0, A.useEffect)(() => {
		if (e) return i(a);
	}, [e]);
	let o = (0, A.useCallback)(() => e && r && r(a), [
		a,
		r,
		e
	]);
	return !n && r ? [!1, o] : [!0];
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var Ey = (e) => e.key || "";
function Dy(e) {
	let t = [];
	return A.Children.forEach(e, (e) => {
		(0, A.isValidElement)(e) && t.push(e);
	}), t;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var Oy = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: a = "sync", propagate: o = !1, anchorX: s = "left", anchorY: c = "top", root: l }) => {
	let [u, d] = Ty(o), f = (0, A.useMemo)(() => Dy(e), [e]), p = o && !u ? [] : f.map(Ey), m = (0, A.useRef)(!0), h = (0, A.useRef)(f), g = Hh(() => /* @__PURE__ */ new Map()), _ = (0, A.useRef)(/* @__PURE__ */ new Set()), [v, y] = (0, A.useState)(f), [b, x] = (0, A.useState)(f);
	Uh(() => {
		m.current = !1, h.current = f;
		for (let e = 0; e < b.length; e++) {
			let t = Ey(b[e]);
			p.includes(t) ? (g.delete(t), _.current.delete(t)) : g.get(t) !== !0 && g.set(t, !1);
		}
	}, [
		b,
		p.length,
		p.join("-")
	]);
	let S = [];
	if (f !== v) {
		let e = [...f];
		for (let t = 0; t < b.length; t++) {
			let n = b[t], r = Ey(n);
			p.includes(r) || (e.splice(t, 0, n), S.push(n));
		}
		return a === "wait" && S.length && (e = S), x(Dy(e)), y(f), null;
	}
	let { forceRender: ee } = (0, A.useContext)(Vh);
	return (0, j.jsx)(j.Fragment, { children: b.map((e) => {
		let v = Ey(e), y = o && !u ? !1 : f === b || p.includes(v);
		return (0, j.jsx)(Cy, {
			isPresent: y,
			initial: !m.current || n ? void 0 : !1,
			custom: t,
			presenceAffectsLayout: i,
			mode: a,
			root: l,
			onExitComplete: y ? void 0 : () => {
				if (_.current.has(v)) return;
				if (g.has(v)) _.current.add(v), g.set(v, !0);
				else return;
				let e = !0;
				g.forEach((t) => {
					t || (e = !1);
				}), e && (ee?.(), x(h.current), o && d?.(), r && r());
			},
			anchorX: s,
			anchorY: c,
			children: e
		}, v);
	}) });
}, ky = (0, A.createContext)({ strict: !1 }), Ay = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
}, jy = !1;
function My() {
	if (jy) return;
	let e = {};
	for (let t in Ay) e[t] = { isEnabled: (e) => Ay[t].some((t) => !!e[t]) };
	Xv(e), jy = !0;
}
function Ny() {
	return My(), Zv();
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function Py(e) {
	let t = Ny();
	for (let n in e) t[n] = {
		...t[n],
		...e[n]
	};
	Xv(t);
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/components/LazyMotion/index.mjs
function Fy({ children: e, features: t, strict: n = !1 }) {
	let [, r] = (0, A.useState)(!Iy(t)), i = (0, A.useRef)(void 0);
	if (!Iy(t)) {
		let { renderer: e, ...n } = t;
		i.current = e, Py(n);
	}
	return (0, A.useEffect)(() => {
		Iy(t) && t().then(({ renderer: e, ...t }) => {
			Py(t), i.current = e, r(!0);
		});
	}, []), (0, j.jsx)(ky.Provider, {
		value: {
			renderer: i.current,
			strict: n
		},
		children: e
	});
}
function Iy(e) {
	return typeof e == "function";
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var Ly = new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.propagate.ignoreStrict.viewport".split("."));
function Ry(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Ly.has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@emotion+memoize@0.7.4/node_modules/@emotion/memoize/dist/memoize.browser.esm.js
function zy(e) {
	var t = {};
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
var By = n((() => {})), Vy = /* @__PURE__ */ r({ default: () => Uy }), Hy, Uy, Wy = n((() => {
	By(), Hy = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Uy = zy(function(e) {
		return Hy.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
	});
})), Gy = (e) => !Ry(e);
function Ky(e) {
	typeof e == "function" && (Gy = (t) => t.startsWith("on") ? !Ry(t) : e(t));
}
try {
	Ky((Wy(), t(Vy)).default);
} catch {}
function qy(e, t, n) {
	let r = {};
	for (let i in e) i === "values" && typeof e.values == "object" || uv(e[i]) || (Gy(i) || n === !0 && Ry(i) || !t && !Ry(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var Jy = /* @__PURE__ */ (0, A.createContext)({});
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function Yy(e, t) {
	if (Vv(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || Rv(t) ? t : void 0,
			animate: Rv(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function Xy(e) {
	let { initial: t, animate: n } = Yy(e, (0, A.useContext)(Jy));
	return (0, A.useMemo)(() => ({
		initial: t,
		animate: n
	}), [Zy(t), Zy(n)]);
}
function Zy(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var Qy = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/render/html/use-props.mjs
function $y(e, t, n) {
	for (let r in t) !uv(t[r]) && !sy(r, n) && (e[r] = t[r]);
}
function eb({ transformTemplate: e }, t) {
	return (0, A.useMemo)(() => {
		let n = Qy();
		return ny(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function tb(e, t) {
	let n = e.style || {}, r = {};
	return $y(r, n, e), Object.assign(r, eb(e, t)), r;
}
function nb(e, t) {
	let n = {}, r = tb(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var rb = () => ({
	...Qy(),
	attrs: {}
});
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function ib(e, t, n, r) {
	let i = (0, A.useMemo)(() => {
		let n = rb();
		return py(n, t, my(r), e.transformTemplate, e.style), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		$y(t, e.style, e), i.style = {
			...t,
			...i.style
		};
	}
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var ab = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function ob(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(ab.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function sb(e, t, n, { latestValues: r }, i, a = !1, o) {
	let s = (o ?? ob(e) ? ib : nb)(t, r, i, e), c = qy(t, typeof e == "string", a), l = e === A.Fragment ? {} : {
		...c,
		...s,
		ref: n
	}, { children: u } = t, d = (0, A.useMemo)(() => uv(u) ? u.get() : u, [u]);
	return (0, A.createElement)(e, {
		...l,
		children: d
	});
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function cb({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
	return {
		latestValues: lb(n, r, i, e),
		renderState: t()
	};
}
function lb(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = gy(a[e]);
	let { initial: o, animate: s } = e, c = Vv(e), l = Hv(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u ||= o === !1;
	let d = u ? s : o;
	if (d && typeof d != "boolean" && !Lv(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = lv(e, t[n]);
			if (r) {
				let { transitionEnd: e, transition: t, ...n } = r;
				for (let e in n) {
					let t = n[e];
					if (Array.isArray(t)) {
						let e = u ? t.length - 1 : 0;
						t = t[e];
					}
					t !== null && (i[e] = t);
				}
				for (let t in e) i[t] = e[t];
			}
		}
	}
	return i;
}
var ub = (e) => (t, n) => {
	let r = (0, A.useContext)(Jy), i = (0, A.useContext)(Wh), a = () => cb(e, t, r, i);
	return n ? a() : Hh(a);
}, db = /*@__PURE__*/ ub({
	scrapeMotionValuesFromProps: cy,
	createRenderState: Qy
}), fb = /*@__PURE__*/ ub({
	scrapeMotionValuesFromProps: hy,
	createRenderState: rb
}), pb = Symbol.for("motionComponentSymbol");
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function mb(e, t, n) {
	let r = (0, A.useRef)(n);
	(0, A.useInsertionEffect)(() => {
		r.current = n;
	});
	let i = (0, A.useRef)(null);
	return (0, A.useCallback)((n) => {
		n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount());
		let a = r.current;
		if (typeof a == "function") if (n) {
			let e = a(n);
			typeof e == "function" && (i.current = e);
		} else i.current ? (i.current(), i.current = null) : a(n);
		else a && (a.current = n);
	}, [t]);
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var hb = (0, A.createContext)({});
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function gb(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function _b(e, t, n, r, i, a) {
	let { visualElement: o } = (0, A.useContext)(Jy), s = (0, A.useContext)(ky), c = (0, A.useContext)(Wh), l = (0, A.useContext)(_y), u = l.reducedMotion, d = l.skipAnimations, f = (0, A.useRef)(null), p = (0, A.useRef)(!1);
	r ||= s.renderer, !f.current && r && (f.current = r(e, {
		visualState: t,
		parent: o,
		props: n,
		presenceContext: c,
		blockInitialAnimation: c ? c.initial === !1 : !1,
		reducedMotionConfig: u,
		skipAnimations: d,
		isSVG: a
	}), p.current && f.current && (f.current.manuallyAnimateOnMount = !0));
	let m = f.current, h = (0, A.useContext)(hb);
	m && !m.projection && i && (m.type === "html" || m.type === "svg") && vb(f.current, n, i, h);
	let g = (0, A.useRef)(!1);
	(0, A.useInsertionEffect)(() => {
		m && g.current && m.update(n, c);
	});
	let _ = n[fv], v = (0, A.useRef)(!!_ && typeof window < "u" && !window.MotionHandoffIsComplete?.(_) && window.MotionHasOptimisedAnimation?.(_));
	return Uh(() => {
		p.current = !0, m && (g.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), v.current && m.animationState && m.animationState.animateChanges());
	}), (0, A.useEffect)(() => {
		m && (!v.current && m.animationState && m.animationState.animateChanges(), v.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(_);
		}), !1), m.enteringChildren = void 0);
	}), m;
}
function vb(e, t, n, r) {
	let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l, layoutAnchor: u, layoutCrossfade: d } = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : yb(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: a,
		alwaysMeasureLayout: !!o || s && gb(s),
		visualElement: e,
		animationType: typeof a == "string" ? a : "both",
		initialPromotionConfig: r,
		crossfade: d,
		layoutScroll: c,
		layoutRoot: l,
		layoutAnchor: u
	});
}
function yb(e) {
	if (e) return e.options.allowProjection === !1 ? yb(e.parent) : e.projection;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/motion/index.mjs
function bb(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
	r && Py(r);
	let a = n ? n === "svg" : ob(e), o = a ? fb : db;
	function s(n, s) {
		let c, l = {
			...(0, A.useContext)(_y),
			...n,
			layoutId: xb(n)
		}, { isStatic: u } = l, d = Xy(n), f = o(n, u);
		if (!u && typeof window < "u") {
			Sb(l, r);
			let t = Cb(l);
			c = t.MeasureLayout, d.visualElement = _b(e, f, l, i, t.ProjectionNode, a);
		}
		return (0, j.jsxs)(Jy.Provider, {
			value: d,
			children: [c && d.visualElement ? (0, j.jsx)(c, {
				visualElement: d.visualElement,
				...l
			}) : null, sb(e, n, mb(f, d.visualElement, s), f, u, t, a)]
		});
	}
	s.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
	let c = (0, A.forwardRef)(s);
	return c[pb] = e, c;
}
function xb({ layoutId: e }) {
	let t = (0, A.useContext)(Vh).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function Sb(e, t) {
	(0, A.useContext)(ky).strict;
}
function Cb(e) {
	let { drag: t, layout: n } = Ny();
	if (!t && !n) return {};
	let r = {
		...t,
		...n
	};
	return {
		MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
		ProjectionNode: r.ProjectionNode
	};
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
function wb() {
	!Gv.current && qv();
	let [e] = (0, A.useState)(Wv.current);
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/render/components/m/create.mjs
function Tb(e, t) {
	return bb(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/render/components/m/elements.mjs
var Eb = /*@__PURE__*/ Tb("div"), Db = () => import("./motionFeatures-BMfqMS0k.js").then((e) => e.default), Ob = {
	enter: (e) => ({
		x: e > 0 ? "100%" : "-100%",
		opacity: 0
	}),
	center: {
		x: 0,
		opacity: 1
	},
	exit: (e) => ({
		x: e > 0 ? "-100%" : "100%",
		opacity: 0
	})
}, kb = ({ frame: e, onRequestClose: t, className: n }) => {
	let r = wb(), [i, a] = (0, A.useState)([e.id]), [o, s] = (0, A.useState)(e.id), [c, l] = (0, A.useState)(1);
	if (o !== e.id) {
		let t = i.indexOf(e.id);
		l(t >= 0 ? -1 : 1), a(t >= 0 ? i.slice(0, t + 1) : [...i, e.id]), s(e.id);
	}
	return /* @__PURE__ */ (0, j.jsx)(Fy, {
		features: Db,
		strict: !0,
		children: /* @__PURE__ */ (0, j.jsx)("div", {
			className: k("relative overflow-clip [overflow-clip-margin:0.5rem]", n),
			children: /* @__PURE__ */ (0, j.jsx)(Oy, {
				initial: !1,
				custom: c,
				mode: "popLayout",
				children: /* @__PURE__ */ (0, j.jsxs)(Eb, {
					custom: c,
					variants: Ob,
					initial: "enter",
					animate: "center",
					exit: "exit",
					transition: r ? { duration: 0 } : {
						type: "tween",
						duration: .25,
						ease: "easeInOut"
					},
					className: "flex flex-col",
					children: [e.back && /* @__PURE__ */ (0, j.jsxs)(De, {
						viewTransition: !0,
						to: e.back.to,
						onClick: t,
						className: Tn({ className: "" }),
						children: [/* @__PURE__ */ (0, j.jsx)(kr, {
							size: 16,
							className: "shrink-0"
						}), /* @__PURE__ */ (0, j.jsx)("span", {
							className: "truncate",
							children: e.back.label ? `Back to ${e.back.label}` : "Back"
						})]
					}), e.items.map((e) => /* @__PURE__ */ (0, j.jsx)(oo, {
						item: e,
						onRequestClose: t
					}, vn(e)))]
				}, e.id)
			})
		})
	});
}, Ab = un((e) => ({
	isCollapsed: !1,
	toggle: () => e((e) => ({ isCollapsed: !e.isCollapsed }))
})), jb = ({ children: e, className: t }) => {
	let { options: n } = Cn(), r = Ab((e) => e.isCollapsed), i = (0, A.useRef)(null);
	return (0, A.useEffect)(() => {
		let e = i.current;
		if (!e) return;
		let t = null, n = () => {
			let n = e.querySelectorAll("[aria-current=\"page\"]"), r = n.item(n.length - 1);
			if (!r) return;
			let i = r.getAttribute("href");
			i !== t && (t = i, so(r));
		};
		n();
		let r = new MutationObserver(n);
		return r.observe(e, {
			subtree: !0,
			childList: !0,
			attributes: !0,
			attributeFilter: ["aria-current"]
		}), () => r.disconnect();
	}, []), /* @__PURE__ */ (0, j.jsxs)("div", {
		className: k("grid sticky top-(--header-height) lg:h-[calc(100vh-var(--header-height))] grid-rows-[1fr_min-content] border-r lg:col-start-1 lg:row-start-1", "transition-opacity duration-200 motion-reduce:transition-none", r && "lg:opacity-0 lg:pointer-events-none"),
		"data-pagefind-ignore": "all",
		inert: r,
		children: [/* @__PURE__ */ (0, j.jsx)("nav", {
			ref: i,
			className: k("hidden max-w-[calc(var(--side-nav-width)+var(--padding-nav-item))] lg:flex scrollbar flex-col overflow-y-auto shrink-0 text-sm ps-4 pe-4 lg:ps-8", "-mx-(--padding-nav-item) pb-[8vh] pt-(--padding-content-top) scroll-pt-2", "-mt-2.5", t),
			style: { maskImage: "linear-gradient(180deg, transparent 1%, rgba(0, 0, 0, 1) 20px, rgba(0, 0, 0, 1) 90%, transparent 99%)" },
			children: e
		}), /* @__PURE__ */ (0, j.jsx)("div", {
			className: "bg-background border-t p-2 mx-5  gap-2 items-center mt-2 drop-shadow-[0_-3px_1px_rgba(0,0,0,0.015)] hidden lg:[&:has(>_:nth-child(1):last-child)]:flex",
			children: n.site?.showPoweredBy !== !1 && /* @__PURE__ */ (0, j.jsx)(jh, {})
		})]
	});
};
jb.displayName = "NavigationWrapper";
//#endregion
//#region src/lib/components/navigation/useNavigationFrame.ts
var Mb = (e, t) => gn(e, (e) => {
	let n = wn(e);
	return n && dn(n) === t ? !0 : void 0;
}) ?? !1, Nb = (e, t) => yn(e, (e) => e.type === "category" && e.stack && Mb(e, t) ? e : void 0), Pb = (e) => {
	let t = pn(e);
	return t ? {
		to: t,
		label: e.label
	} : (console.warn(`[Zudoku] Stacked navigation: no landing path for section "${e.label}"; falling back to "/".`), {
		to: "/",
		label: e.label
	});
}, Fb = (e, t) => yn(e, (e, n) => {
	if (e.type !== "link" || !e.stack) return;
	let r = dn(e.to);
	if (!(t !== r && !t.startsWith(`${r}/`))) return Pb(n.at(0) ?? e);
}), Ib = (e, t, n, r) => {
	let i = Nb(e, n);
	if (i) return {
		id: `stack:${Sn(i) || i.label}`,
		items: i.items,
		back: r ? Pb(r) : { to: "/" }
	};
	let a = Fb(t, n);
	return a ? {
		id: `ref:${a.to}`,
		items: e,
		back: a
	} : {
		id: "root",
		items: e
	};
}, Lb = (e, t) => {
	let n = O(be().pathname), { navigation: r } = Cn();
	return Ib(e, r, n, t);
}, Rb = ({ onRequestClose: e, navigation: t, topNavItem: n }) => {
	let r = Lb(t, n);
	return /* @__PURE__ */ (0, j.jsxs)(Ga, {
		resetKey: `${n ? wn(n) ?? n.label : ""}\n${r.id}`,
		children: [/* @__PURE__ */ (0, j.jsxs)(jb, { children: [
			/* @__PURE__ */ (0, j.jsx)(Wi.Target, { name: "navigation-before" }),
			/* @__PURE__ */ (0, j.jsx)(kb, { frame: r }),
			/* @__PURE__ */ (0, j.jsx)(Wi.Target, { name: "navigation-after" })
		] }), /* @__PURE__ */ (0, j.jsx)(Th, {
			className: "lg:hidden h-dvh inset-s-0 w-[320px] rounded-none",
			"aria-describedby": void 0,
			onCloseAutoFocus: (e) => e.preventDefault(),
			children: /* @__PURE__ */ (0, j.jsxs)("div", {
				className: "p-4 overflow-y-auto overscroll-none",
				children: [/* @__PURE__ */ (0, j.jsx)(ct, { children: /* @__PURE__ */ (0, j.jsx)(Oh, { children: "Navigation" }) }), /* @__PURE__ */ (0, j.jsx)(kb, {
					frame: r,
					onRequestClose: e
				})]
			})
		})]
	});
}, zb = {
	top: "15%",
	center: "50%",
	bottom: "85%"
}, Bb = () => {
	let e = Ab((e) => e.isCollapsed), t = Ab((e) => e.toggle), { options: n } = Cn(), r = n.site?.sidebar?.toggleVisibility ?? "always", i = n.site?.sidebar?.togglePosition ?? "bottom", a = r === "hover" && !e;
	return /* @__PURE__ */ (0, j.jsxs)("div", {
		className: k("hidden lg:block col-start-1 row-start-1 group/sidebar-hit", "sticky top-(--header-height) h-[calc(100vh-var(--header-height))] pointer-events-none"),
		style: { "--sidebar-toggle-y-default": zb[i] },
		children: [a && /* @__PURE__ */ (0, j.jsx)("div", {
			"aria-hidden": !0,
			className: "pointer-events-auto absolute inset-y-0 left-[calc(var(--side-nav-width)-8px)] w-4"
		}), /* @__PURE__ */ (0, j.jsx)("button", {
			type: "button",
			"data-sidebar-toggle": !0,
			title: e ? "Expand sidebar" : "Collapse sidebar",
			onClick: t,
			"aria-label": e ? "Expand sidebar" : "Collapse sidebar",
			"aria-expanded": !e,
			className: k("pointer-events-auto absolute top-(--sidebar-toggle-y,var(--sidebar-toggle-y-default)) -translate-y-1/2 border rounded-full", "flex items-center justify-center", "bg-background text-muted-foreground shadow-sm", "hover:bg-accent hover:text-foreground", "transition-all duration-200 ease-out motion-reduce:transition-none", e ? "size-10 left-[max(-16px,calc(16px-max(0px,(100vw-1536px)/2)))] opacity-80 hover:opacity-100 hover:scale-115" : "size-6 left-[calc(var(--side-nav-width)-12px)]", a && "[@media(hover:hover)]:opacity-0 group-hover/sidebar-hit:opacity-100 focus-visible:opacity-100"),
			children: e ? /* @__PURE__ */ (0, j.jsx)(Cr, {
				size: 18,
				strokeWidth: 2
			}) : /* @__PURE__ */ (0, j.jsx)(Sr, {
				size: 12,
				strokeWidth: 2
			})
		})]
	});
}, Vb = ({ children: e }) => {
	let [t, n] = (0, A.useState)(!1), { navigation: r, topNavItem: i } = bn(), a = r.length > 0, o = Me().state === "loading", { options: s } = Cn();
	return /* @__PURE__ */ (0, j.jsxs)(xh, {
		direction: s.site?.dir === "rtl" ? "right" : "left",
		open: t,
		onOpenChange: (e) => n(e),
		children: [
			a && /* @__PURE__ */ (0, j.jsx)(Rb, {
				onRequestClose: () => n(!1),
				navigation: r,
				topNavItem: i
			}),
			a && /* @__PURE__ */ (0, j.jsxs)("div", {
				className: "lg:hidden m-0 p-0 md:-mx-4 md:px-4 py-2 sticky bg-background/80 backdrop-blur-xs z-10 top-0 inset-x-0 border-b flex items-center gap-2",
				children: [/* @__PURE__ */ (0, j.jsxs)(Sh, {
					className: "flex items-center gap-2 px-4",
					children: [/* @__PURE__ */ (0, j.jsx)(Sr, {
						size: 16,
						strokeWidth: 1.5
					}), /* @__PURE__ */ (0, j.jsx)("span", {
						className: "text-sm",
						children: "Menu"
					})]
				}), /* @__PURE__ */ (0, j.jsx)("div", {
					className: "ms-auto empty:hidden pe-4",
					children: /* @__PURE__ */ (0, j.jsx)(Wi.Target, { name: "mobile-top-bar-end" })
				})]
			}),
			/* @__PURE__ */ (0, j.jsxs)("main", {
				"data-pagefind-body": !0,
				className: k("min-w-0 px-4 lg:pe-8 lg:px-8", !a && "col-span-full", o && "animate-pulse"),
				children: [
					/* @__PURE__ */ (0, j.jsx)(Wi.Target, { name: "content-before" }),
					e,
					/* @__PURE__ */ (0, j.jsx)(Wi.Target, { name: "content-after" })
				]
			}),
			a && s.site?.sidebar?.collapsible !== !1 && /* @__PURE__ */ (0, j.jsx)(Bb, {})
		]
	});
}, Hb = () => /* @__PURE__ */ (0, j.jsx)("div", {
	className: "col-span-full row-span-full grid place-items-center",
	children: /* @__PURE__ */ (0, j.jsx)(nn, {})
}), Ub = ({ children: e }) => {
	let { authentication: t } = Cn(), n = Ab((e) => e.isCollapsed);
	return lo(), md(), (0, A.useEffect)(() => {
		t?.onPageLoad?.();
	}, [t]), /* @__PURE__ */ (0, j.jsxs)(St, { children: [
		/* @__PURE__ */ (0, j.jsx)(Wi.Target, { name: "layout-before-head" }),
		/* @__PURE__ */ (0, j.jsx)(Bh, {}),
		/* @__PURE__ */ (0, j.jsx)(Wi.Target, { name: "layout-after-head" }),
		/* @__PURE__ */ (0, j.jsx)("div", {
			className: k("grid max-w-screen-2xl w-full lg:mx-auto", "[&:has(>:only-child)]:grid-rows-1 grid-rows-[0_min-content_1fr] lg:grid-rows-[min-content_1fr]", "grid-cols-1 transition-[grid-template-columns] duration-200 ease-out motion-reduce:transition-none", n ? "lg:grid-cols-[0_1fr]" : "lg:grid-cols-[var(--side-nav-width)_1fr]"),
			children: /* @__PURE__ */ (0, j.jsx)(A.Suspense, {
				fallback: /* @__PURE__ */ (0, j.jsx)(Hb, {}),
				children: /* @__PURE__ */ (0, j.jsx)(Vb, { children: e ?? /* @__PURE__ */ (0, j.jsx)(Te, {}) })
			})
		}),
		/* @__PURE__ */ (0, j.jsx)(_d, {})
	] });
}, Wb = ({ open: e, onCancel: t, onLogin: n, onRegister: r, showRegister: i }) => /* @__PURE__ */ (0, j.jsx)(dt, {
	open: e,
	onOpenChange: (e) => !e && t(),
	children: /* @__PURE__ */ (0, j.jsxs)(ot, { children: [
		/* @__PURE__ */ (0, j.jsx)(ft, { children: /* @__PURE__ */ (0, j.jsx)(tt, { children: "Login to continue" }) }),
		/* @__PURE__ */ (0, j.jsx)($e, { children: "Please login to access this page." }),
		/* @__PURE__ */ (0, j.jsxs)(lt, { children: [
			/* @__PURE__ */ (0, j.jsx)(cn, {
				variant: "outline",
				onClick: t,
				children: "Cancel"
			}),
			/* @__PURE__ */ (0, j.jsx)("div", { className: "w-full" }),
			i && /* @__PURE__ */ (0, j.jsx)(cn, {
				variant: "secondary",
				onClick: r,
				children: "Register"
			}),
			/* @__PURE__ */ (0, j.jsx)(cn, {
				onClick: n,
				children: "Login"
			})
		] })
	] })
}), Gb = ({ isProtectedRoute: e }) => /* @__PURE__ */ (0, j.jsxs)(j.Fragment, { children: [e && /* @__PURE__ */ (0, j.jsx)(ee, { children: /* @__PURE__ */ (0, j.jsx)("meta", {
	name: "pagefind",
	"data-pagefind-filter": "section:protected",
	content: "true"
}) }), /* @__PURE__ */ (0, j.jsx)(Te, {})] }), Kb = () => {
	let e = (0, A.use)(Ct);
	return e.status = 403, /* @__PURE__ */ (0, j.jsx)(Ub, { children: /* @__PURE__ */ (0, j.jsxs)("div", {
		className: "flex flex-col items-center justify-center min-h-[50vh] gap-4",
		children: [/* @__PURE__ */ (0, j.jsx)("h1", {
			className: "text-2xl font-bold",
			children: "Access Denied"
		}), /* @__PURE__ */ (0, j.jsx)("p", {
			className: "text-muted-foreground",
			children: "You don't have permission to access this page."
		})]
	}) });
}, qb = ({ redirectTo: e }) => {
	let t = Tt();
	return /* @__PURE__ */ (0, j.jsx)(Ub, { children: /* @__PURE__ */ (0, j.jsxs)("div", {
		className: "flex flex-col items-center justify-center min-h-[60vh] gap-4",
		children: [
			/* @__PURE__ */ (0, j.jsx)("h1", {
				className: "text-2xl font-bold",
				children: "Sign in to continue"
			}),
			/* @__PURE__ */ (0, j.jsx)("p", {
				className: "text-muted-foreground",
				children: "Please sign in to access this page."
			}),
			/* @__PURE__ */ (0, j.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, j.jsx)(cn, {
					onClick: () => void t.login({ redirectTo: e }),
					children: "Sign in"
				}), t.isAuthEnabled && !t.disableSignUp && /* @__PURE__ */ (0, j.jsx)(cn, {
					variant: "outline",
					onClick: () => void t.signup({ redirectTo: e }),
					children: "Register"
				})]
			})
		]
	}) });
}, Jb = () => {
	let e = Tt(), t = Cn(), n = be(), r = (0, A.use)(Ct), i = r.bypassProtection, a = (0, A.useMemo)(() => ({
		auth: e,
		context: t,
		reasonCode: pd
	}), [e, t]), { protectedRoutes: o } = t, { basePath: s } = t.options, c = (0, A.useCallback)((e) => {
		if (o) {
			for (let [t, n] of Object.entries(o)) if (Zi(t, e)) return n;
		}
	}, [o]), l = c(n.pathname), u = l !== void 0, d = u ? l(a) ?? pd.UNAUTHORIZED : !0, f = d === !1 ? pd.UNAUTHORIZED : d, p = f === pd.FORBIDDEN, m = f === pd.UNAUTHORIZED, h = Ce(({ nextLocation: e }) => {
		if (i) return !1;
		let t = c(e.pathname);
		if (!t) return !1;
		let n = t(a);
		return n === !1 || n === pd.UNAUTHORIZED;
	}), g = h.state === "blocked";
	if ((0, A.useEffect)(() => {
		if (!e.isAuthenticated || !g) return;
		let t = c(h.location.pathname);
		if (!t) {
			h.proceed?.();
			return;
		}
		let n = t(a);
		n !== !1 && n !== pd.UNAUTHORIZED && h.proceed?.();
	}, [
		e.isAuthenticated,
		g,
		h,
		a,
		c
	]), p) return /* @__PURE__ */ (0, j.jsx)(Kb, {});
	if (i) return /* @__PURE__ */ (0, j.jsx)(Gb, { isProtectedRoute: u });
	if (u && !e.isAuthEnabled) throw new Mr("Authentication is not enabled", {
		title: "Authentication is not enabled",
		developerHint: "To use protectedRoutes you need authentication to be enabled"
	});
	if (m) return typeof window > "u" && (r.status = 401), e.isPending ? null : /* @__PURE__ */ (0, j.jsx)(qb, { redirectTo: n.pathname + n.search });
	let _ = g ? $i(h.location.pathname, s) + h.location.search : n.pathname + n.search;
	return /* @__PURE__ */ (0, j.jsxs)(j.Fragment, { children: [/* @__PURE__ */ (0, j.jsx)(Te, {}), /* @__PURE__ */ (0, j.jsx)(Wb, {
		open: g,
		onCancel: () => h.reset?.(),
		onLogin: () => void e.login({ redirectTo: _ }),
		onRegister: () => void e.signup({ redirectTo: _ }),
		showRegister: !e.disableSignUp
	})] });
}, Yb = (e) => e instanceof Error && (e.name === "ChunkLoadError" || /Failed to fetch dynamically imported module|error loading dynamically imported module|Importing a module script failed/.test(e.message)), Xb = (e) => {
	let t = be(), n = Tt(), { protectedRoutes: r } = Cn();
	return !r || !n.isAuthEnabled || n.isAuthenticated || n.isPending || !(ve(e) && e.status === 401 || Yb(e)) || !Qi(Object.keys(r), t.pathname) ? null : /* @__PURE__ */ (0, j.jsx)(qb, { redirectTo: t.pathname + t.search });
};
function Zb({ className: e }) {
	let t = je();
	return Xb(t) || (ve(t) && t.status === 404 ? /* @__PURE__ */ (0, j.jsx)(ud, {}) : /* @__PURE__ */ (0, j.jsx)("div", {
		className: k("mx-4 max-w-2xl", e),
		"data-pagefind-ignore": "all",
		children: /* @__PURE__ */ (0, j.jsx)(ia, { error: t })
	}));
}
//#endregion
//#region src/app/env.ts
var Qb = {
	get isZuplo() {
		return process.env.ZUPLO === "1";
	},
	get serverUrl() {
		return process.env.ZUPLO_SERVER_URL;
	},
	buildConfig: void 0
}, $b = (e, t) => e.map((e) => {
	let n = t ? e.handle?.layout === "default" : e.handle?.layout !== "none", r = e.children ? {
		...e,
		children: n ? e.children : $b(e.children, !0)
	} : e;
	return n ? {
		element: /* @__PURE__ */ (0, j.jsx)(Ub, {}),
		children: [r]
	} : r;
}), ex = (e) => (e ?? []).map((e) => ({
	path: O(e.from),
	loader: () => Ee(e.to, 301)
})), tx = import("./shiki-B7Vw5ftG.js").then((e) => e.i).then(async ({ highlighterPromise: e }) => {
	let t = await e, { registerShiki: n } = await import("./_virtual_zudoku-shiki-register-Q3nz02Lm.js");
	return await n(t), t;
}), nx = (e) => ({
	basePath: e.basePath,
	canonicalUrlOrigin: e.canonicalUrlOrigin,
	aiAssistants: e.aiAssistants,
	protectedRoutes: e.protectedRoutes,
	site: {
		...e.site,
		showPoweredBy: Qb.buildConfig?.entitlements.devPortalZuploBranding ?? e.site?.showPoweredBy,
		logo: e.site?.logo
	},
	slots: e.slots,
	metadata: {
		favicon: "https://cdn.zudoku.dev/logos/favicon.svg",
		title: "%s - Zudoku",
		...e.metadata
	},
	header: {
		navigation: pi,
		placements: e.header?.placements,
		themeSwitcher: e.header?.themeSwitcher
	},
	navigation: mi,
	navigationRules: hi,
	mdx: e.mdx,
	plugins: [
		...di,
		...fi,
		...e.plugins ?? []
	],
	syntaxHighlighting: {
		highlighterPromise: tx,
		themes: e.syntaxHighlighting?.themes
	}
}), rx = (e, t = !0) => [...e.plugins ?? [], ...e.authentication ? [e.authentication] : []].flatMap((e) => Ai(e) ? e.getRoutes() : []).concat(t ? [
	400,
	404,
	500
].map((e) => ({
	path: `/${e}`,
	element: /* @__PURE__ */ (0, j.jsx)(fd, { statusCode: e })
})) : []).concat([{
	path: "*",
	element: /* @__PURE__ */ (0, j.jsx)(fd, { statusCode: 404 })
}]).map((e) => ({
	...e,
	errorElement: /* @__PURE__ */ (0, j.jsx)(Zb, { className: "w-full m-0" })
})), ix = (e) => {
	let t = nx(e), n = rx(t, e.enableStatusPages);
	return [...ex(e.redirects), {
		element: /* @__PURE__ */ (0, j.jsxs)(Mo, {
			...t,
			env: {
				BASE_URL: "/",
				DEV: !1,
				MODE: "standalone",
				PROD: !0,
				SSR: !1
			},
			children: [/* @__PURE__ */ (0, j.jsx)(sd, {
				buildId: void 0,
				environmentType: void 0
			}), /* @__PURE__ */ (0, j.jsx)(Te, {})]
		}),
		children: [{
			element: /* @__PURE__ */ (0, j.jsx)(cd, { children: /* @__PURE__ */ (0, j.jsx)(Jb, {}) }),
			errorElement: /* @__PURE__ */ (0, j.jsx)(Zb, {}),
			children: $b(n)
		}]
	}];
};
//#endregion
export { mg as $, A_ as A, _i as At, n_ as B, Rr as Bt, sv as C, go as Ct, W_ as D, Di as Dt, $_ as E, qi as Et, E_ as F, ri as Ft, Lg as G, Zn as Gt, qg as H, vr as Ht, m_ as I, Yr as It, Cg as J, Tg as K, p_ as L, Xr as Lt, O_ as M, ui as Mt, k_ as N, oi as Nt, H_ as O, Ti as Ot, w_ as P, ii as Pt, fg as Q, d_ as R, Wr as Rt, lv as S, F as St, tv as T, uo as Tt, Kg as U, pr as Ut, l_ as V, Mr as Vt, zg as W, nr as Wt, vg as X, yg as Y, pg as Z, Tv as _, bo as _t, my as a, eg as at, dv as b, vo as bt, ny as c, Xh as ct, Bv as d, qh as dt, og as et, Rv as f, rd as ft, Dv as g, $u as gt, kv as h, Yu as ht, hy as i, tg as it, P_ as j, li as jt, V_ as k, Ci as kt, Qv as l, Yh as lt, Fv as m, ad as mt, Ab as n, ig as nt, py as o, $h as ot, Lv as p, Zu as pt, xg as q, ob as r, rg as rt, cy as s, Zh as st, ix as t, ag as tt, zv as u, Jh as ut, gv as v, yo as vt, nv as w, mo as wt, uv as x, I as xt, fv as y, _o as yt, u_ as z, Br as zt };
