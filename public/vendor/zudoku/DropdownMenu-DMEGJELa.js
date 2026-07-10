import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { _ as n, a as r, c as i, d as a, f as o, g as s, i as c, l, n as u, o as d, p as f, r as p, s as m, t as h, u as g, v as _ } from "./dist-D6fp9d0w.js";
import { t as v } from "./jsx-runtime-Bcg76ucg.js";
import { t as y } from "./createLucideIcon-CE5nuOQr.js";
import { a as b, i as x, r as S } from "./Button-dzS4XgUY.js";
import { t as C } from "./cn-yMl495m5.js";
var w = y("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]), T = y("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]), E = y("link", [["path", {
	d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
	key: "1cjeqo"
}], ["path", {
	d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
	key: "19qd67"
}]]), ee = /* @__PURE__ */ e(_(), 1), D = v(), O = /* @__PURE__ */ e(t(), 1);
function k(e, t = globalThis?.document) {
	let n = g(e);
	O.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && n(e);
		};
		return t.addEventListener("keydown", e, { capture: !0 }), () => t.removeEventListener("keydown", e, { capture: !0 });
	}, [n, t]);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.11_@types+react-dom@19.2.3_@types+react@19.2.17___64f9d1145ba8ff7d3061acf98a5f69a9/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var A = "DismissableLayer", j = "dismissableLayer.update", M = "dismissableLayer.pointerDownOutside", N = "dismissableLayer.focusOutside", P, te = O.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), ne = O.forwardRef((e, t) => {
	let { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: i, onPointerDownOutside: o, onFocusOutside: s, onInteractOutside: c, onDismiss: l, ...u } = e, d = O.useContext(te), [f, p] = O.useState(null), m = f?.ownerDocument ?? globalThis?.document, [, h] = O.useState({}), g = b(t, (e) => p(e)), _ = Array.from(d.layers), [v] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = _.indexOf(v), x = f ? _.indexOf(f) : -1, S = d.layersWithOutsidePointerEventsDisabled.size > 0, C = x >= y, w = F((e) => {
		let t = e.target, n = [...d.branches].some((e) => e.contains(t));
		!C || n || (o?.(e), c?.(e), e.defaultPrevented || l?.());
	}, m), T = ae((e) => {
		let t = e.target;
		[...d.branches].some((e) => e.contains(t)) || (s?.(e), c?.(e), e.defaultPrevented || l?.());
	}, m);
	return k((e) => {
		x === d.layers.size - 1 && (i?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()));
	}, m), O.useEffect(() => {
		if (f) return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (P = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), oe(), () => {
			r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = P);
		};
	}, [
		f,
		m,
		r,
		d
	]), O.useEffect(() => () => {
		f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), oe());
	}, [f, d]), O.useEffect(() => {
		let e = () => h({});
		return document.addEventListener(j, e), () => document.removeEventListener(j, e);
	}, []), /* @__PURE__ */ (0, D.jsx)(a.div, {
		...u,
		ref: g,
		style: {
			pointerEvents: S ? C ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: n(e.onFocusCapture, T.onFocusCapture),
		onBlurCapture: n(e.onBlurCapture, T.onBlurCapture),
		onPointerDownCapture: n(e.onPointerDownCapture, w.onPointerDownCapture)
	});
});
ne.displayName = A;
var re = "DismissableLayerBranch", ie = O.forwardRef((e, t) => {
	let n = O.useContext(te), r = O.useRef(null), i = b(t, r);
	return O.useEffect(() => {
		let e = r.current;
		if (e) return n.branches.add(e), () => {
			n.branches.delete(e);
		};
	}, [n.branches]), /* @__PURE__ */ (0, D.jsx)(a.div, {
		...e,
		ref: i
	});
});
ie.displayName = re;
function F(e, t = globalThis?.document) {
	let n = g(e), r = O.useRef(!1), i = O.useRef(() => {});
	return O.useEffect(() => {
		let e = (e) => {
			if (e.target && !r.current) {
				let r = function() {
					se(M, n, a, { discrete: !0 });
				}, a = { originalEvent: e };
				e.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = r, t.addEventListener("click", i.current, { once: !0 })) : r();
			} else t.removeEventListener("click", i.current);
			r.current = !1;
		}, a = window.setTimeout(() => {
			t.addEventListener("pointerdown", e);
		}, 0);
		return () => {
			window.clearTimeout(a), t.removeEventListener("pointerdown", e), t.removeEventListener("click", i.current);
		};
	}, [t, n]), { onPointerDownCapture: () => r.current = !0 };
}
function ae(e, t = globalThis?.document) {
	let n = g(e), r = O.useRef(!1);
	return O.useEffect(() => {
		let e = (e) => {
			e.target && !r.current && se(N, n, { originalEvent: e }, { discrete: !1 });
		};
		return t.addEventListener("focusin", e), () => t.removeEventListener("focusin", e);
	}, [t, n]), {
		onFocusCapture: () => r.current = !0,
		onBlurCapture: () => r.current = !1
	};
}
function oe() {
	let e = new CustomEvent(j);
	document.dispatchEvent(e);
}
function se(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? o(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-guards@1.1.3_@types+react@19.2.17_react@19.2.7/node_modules/@radix-ui/react-focus-guards/dist/index.mjs
var ce = 0;
function le() {
	O.useEffect(() => {
		let e = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", e[0] ?? ue()), document.body.insertAdjacentElement("beforeend", e[1] ?? ue()), ce++, () => {
			ce === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), ce--;
		};
	}, []);
}
function ue() {
	let e = document.createElement("span");
	return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-focus-scope@1.1.7_@types+react-dom@19.2.3_@types+react@19.2.17__@types+_9536e4dbce45e384eb9c4dc8fa8df392/node_modules/@radix-ui/react-focus-scope/dist/index.mjs
var de = "focusScope.autoFocusOnMount", fe = "focusScope.autoFocusOnUnmount", pe = {
	bubbles: !1,
	cancelable: !0
}, me = "FocusScope", he = O.forwardRef((e, t) => {
	let { loop: n = !1, trapped: r = !1, onMountAutoFocus: i, onUnmountAutoFocus: o, ...s } = e, [c, l] = O.useState(null), u = g(i), d = g(o), f = O.useRef(null), p = b(t, (e) => l(e)), m = O.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	O.useEffect(() => {
		if (r) {
			let e = function(e) {
				if (m.paused || !c) return;
				let t = e.target;
				c.contains(t) ? f.current = t : I(f.current, { select: !0 });
			}, t = function(e) {
				if (m.paused || !c) return;
				let t = e.relatedTarget;
				t !== null && (c.contains(t) || I(f.current, { select: !0 }));
			}, n = function(e) {
				if (document.activeElement === document.body) for (let t of e) t.removedNodes.length > 0 && I(c);
			};
			document.addEventListener("focusin", e), document.addEventListener("focusout", t);
			let r = new MutationObserver(n);
			return c && r.observe(c, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), r.disconnect();
			};
		}
	}, [
		r,
		c,
		m.paused
	]), O.useEffect(() => {
		if (c) {
			Se.add(m);
			let e = document.activeElement;
			if (!c.contains(e)) {
				let t = new CustomEvent(de, pe);
				c.addEventListener(de, u), c.dispatchEvent(t), t.defaultPrevented || (ge(Te(ve(c)), { select: !0 }), document.activeElement === e && I(c));
			}
			return () => {
				c.removeEventListener(de, u), setTimeout(() => {
					let t = new CustomEvent(fe, pe);
					c.addEventListener(fe, d), c.dispatchEvent(t), t.defaultPrevented || I(e ?? document.body, { select: !0 }), c.removeEventListener(fe, d), Se.remove(m);
				}, 0);
			};
		}
	}, [
		c,
		u,
		d,
		m
	]);
	let h = O.useCallback((e) => {
		if (!n && !r || m.paused) return;
		let t = e.key === "Tab" && !e.altKey && !e.ctrlKey && !e.metaKey, i = document.activeElement;
		if (t && i) {
			let t = e.currentTarget, [r, a] = _e(t);
			r && a ? !e.shiftKey && i === a ? (e.preventDefault(), n && I(r, { select: !0 })) : e.shiftKey && i === r && (e.preventDefault(), n && I(a, { select: !0 })) : i === t && e.preventDefault();
		}
	}, [
		n,
		r,
		m.paused
	]);
	return /* @__PURE__ */ (0, D.jsx)(a.div, {
		tabIndex: -1,
		...s,
		ref: p,
		onKeyDown: h
	});
});
he.displayName = me;
function ge(e, { select: t = !1 } = {}) {
	let n = document.activeElement;
	for (let r of e) if (I(r, { select: t }), document.activeElement !== n) return;
}
function _e(e) {
	let t = ve(e);
	return [ye(t, e), ye(t.reverse(), e)];
}
function ve(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => {
		let t = e.tagName === "INPUT" && e.type === "hidden";
		return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
function ye(e, t) {
	for (let n of e) if (!be(n, { upTo: t })) return n;
}
function be(e, { upTo: t }) {
	if (getComputedStyle(e).visibility === "hidden") return !0;
	for (; e;) {
		if (t !== void 0 && e === t) return !1;
		if (getComputedStyle(e).display === "none") return !0;
		e = e.parentElement;
	}
	return !1;
}
function xe(e) {
	return e instanceof HTMLInputElement && "select" in e;
}
function I(e, { select: t = !1 } = {}) {
	if (e && e.focus) {
		let n = document.activeElement;
		e.focus({ preventScroll: !0 }), e !== n && xe(e) && t && e.select();
	}
}
var Se = Ce();
function Ce() {
	let e = [];
	return {
		add(t) {
			let n = e[0];
			t !== n && n?.pause(), e = we(e, t), e.unshift(t);
		},
		remove(t) {
			e = we(e, t), e[0]?.resume();
		}
	};
}
function we(e, t) {
	let n = [...e], r = n.indexOf(t);
	return r !== -1 && n.splice(r, 1), n;
}
function Te(e) {
	return e.filter((e) => e.tagName !== "A");
}
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Ee = [
	"top",
	"right",
	"bottom",
	"left"
], L = Math.min, R = Math.max, De = Math.round, Oe = Math.floor, z = (e) => ({
	x: e,
	y: e
}), ke = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function Ae(e, t, n) {
	return R(e, L(t, n));
}
function B(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function V(e) {
	return e.split("-")[0];
}
function je(e) {
	return e.split("-")[1];
}
function Me(e) {
	return e === "x" ? "y" : "x";
}
function Ne(e) {
	return e === "y" ? "height" : "width";
}
function H(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Pe(e) {
	return Me(H(e));
}
function Fe(e, t, n) {
	n === void 0 && (n = !1);
	let r = je(e), i = Pe(e), a = Ne(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = We(o)), [o, We(o)];
}
function Ie(e) {
	let t = We(e);
	return [
		Le(e),
		t,
		Le(t)
	];
}
function Le(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var Re = ["left", "right"], ze = ["right", "left"], Be = ["top", "bottom"], Ve = ["bottom", "top"];
function He(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? ze : Re : t ? Re : ze;
		case "left":
		case "right": return t ? Be : Ve;
		default: return [];
	}
}
function Ue(e, t, n, r) {
	let i = je(e), a = He(V(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(Le)))), a;
}
function We(e) {
	let t = V(e);
	return ke[t] + e.slice(t.length);
}
function Ge(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function Ke(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Ge(e);
}
function qe(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+core@1.7.5/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function Je(e, t, n) {
	let { reference: r, floating: i } = e, a = H(t), o = Pe(t), s = Ne(o), c = V(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (je(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end":
			p[o] += f * (n && l ? -1 : 1);
			break;
	}
	return p;
}
async function Ye(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = B(t, e), p = Ke(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = qe(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = qe(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var Xe = 50, Ze = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : {
		...o,
		detectOverflow: Ye
	}, c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Je(l, r, c), f = r, p = 0, m = {};
	for (let n = 0; n < a.length; n++) {
		let h = a[n];
		if (!h) continue;
		let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = await _({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: m,
			rects: l,
			platform: s,
			elements: {
				reference: e,
				floating: t
			}
		});
		u = v ?? u, d = y ?? d, m[g] = {
			...m[g],
			...b
		}, x && p < Xe && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : x.rects), {x: u, y: d} = Je(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: m
	};
}, Qe = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = B(e, t) || {};
		if (l == null) return {};
		let d = Ke(u), f = {
			x: n,
			y: r
		}, p = Pe(i), m = Ne(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = L(d[_], T), ee = L(d[v], T), D = E, O = C - h[m] - ee, k = C / 2 - h[m] / 2 + w, A = Ae(D, k, O), j = !c.arrow && je(i) != null && k !== A && a.reference[m] / 2 - (k < D ? E : ee) - h[m] / 2 < 0, M = j ? k < D ? k - D : k - O : 0;
		return {
			[p]: f[p] + M,
			data: {
				[p]: A,
				centerOffset: k - A - M,
				...j && { alignmentOffset: M }
			},
			reset: j
		};
	}
}), $e = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = B(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = V(r), _ = H(o), v = V(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [We(o)] : Ie(o)), x = p !== "none";
			!d && x && b.push(...Ue(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = Fe(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (!(u === "alignment" && _ !== H(t)) || T.every((e) => H(e.placement) === _ ? e.overflows[0] > 0 : !0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = H(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement":
						n = o;
						break;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function et(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function tt(e) {
	return Ee.some((t) => e[t] >= 0);
}
var nt = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = B(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = et(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: tt(e)
					} };
				}
				case "escaped": {
					let e = et(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: tt(e)
					} };
				}
				default: return {};
			}
		}
	};
}, rt = /*#__PURE__*/ new Set(["left", "top"]);
async function it(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = V(n), s = je(n), c = H(n) === "y", l = rt.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = B(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var at = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await it(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, ot = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = B(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = H(V(i)), p = Me(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = Ae(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = Ae(n, h, r);
			}
			let g = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				...g,
				data: {
					x: g.x - n,
					y: g.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, st = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = B(e, t), u = {
				x: n,
				y: r
			}, d = H(i), f = Me(d), p = u[f], m = u[d], h = B(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...h
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = rt.has(V(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, ct = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = B(e, t), u = await o.detectOverflow(t, l), d = V(i), f = je(i), p = H(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = L(h - u[g], v), x = L(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = R(u.left, 0), t = R(u.right, 0), n = R(u.top, 0), r = R(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : R(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : R(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let T = await o.getDimensions(s.floating);
			return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function lt() {
	return typeof window < "u";
}
function ut(e) {
	return dt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function U(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function W(e) {
	return ((dt(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function dt(e) {
	return lt() ? e instanceof Node || e instanceof U(e).Node : !1;
}
function G(e) {
	return lt() ? e instanceof Element || e instanceof U(e).Element : !1;
}
function K(e) {
	return lt() ? e instanceof HTMLElement || e instanceof U(e).HTMLElement : !1;
}
function ft(e) {
	return !lt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof U(e).ShadowRoot;
}
function pt(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = J(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && i !== "inline" && i !== "contents";
}
function mt(e) {
	return /^(table|td|th)$/.test(ut(e));
}
function ht(e) {
	try {
		if (e.matches(":popover-open")) return !0;
	} catch {}
	try {
		return e.matches(":modal");
	} catch {
		return !1;
	}
}
var gt = /transform|translate|scale|rotate|perspective|filter/, _t = /paint|layout|strict|content/, q = (e) => !!e && e !== "none", vt;
function yt(e) {
	let t = G(e) ? J(e) : e;
	return q(t.transform) || q(t.translate) || q(t.scale) || q(t.rotate) || q(t.perspective) || !xt() && (q(t.backdropFilter) || q(t.filter)) || gt.test(t.willChange || "") || _t.test(t.contain || "");
}
function bt(e) {
	let t = Y(e);
	for (; K(t) && !St(t);) {
		if (yt(t)) return t;
		if (ht(t)) return null;
		t = Y(t);
	}
	return null;
}
function xt() {
	return vt ??= typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none"), vt;
}
function St(e) {
	return /^(html|body|#document)$/.test(ut(e));
}
function J(e) {
	return U(e).getComputedStyle(e);
}
function Ct(e) {
	return G(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Y(e) {
	if (ut(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || ft(e) && e.host || W(e);
	return ft(t) ? t.host : t;
}
function wt(e) {
	let t = Y(e);
	return St(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : K(t) && pt(t) ? t : wt(t);
}
function Tt(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = wt(e), i = r === e.ownerDocument?.body, a = U(r);
	if (i) {
		let e = Et(a);
		return t.concat(a, a.visualViewport || [], pt(r) ? r : [], e && n ? Tt(e) : []);
	} else return t.concat(r, Tt(r, [], n));
}
function Et(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+dom@1.7.6/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function Dt(e) {
	let t = J(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = K(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = De(n) !== a || De(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function Ot(e) {
	return G(e) ? e : e.contextElement;
}
function kt(e) {
	let t = Ot(e);
	if (!K(t)) return z(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = Dt(t), o = (a ? De(n.width) : n.width) / r, s = (a ? De(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var At = /*#__PURE__*/ z(0);
function jt(e) {
	let t = U(e);
	return !xt() || !t.visualViewport ? At : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function Mt(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== U(e) ? !1 : t;
}
function Nt(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = Ot(e), o = z(1);
	t && (r ? G(r) && (o = kt(r)) : o = kt(e));
	let s = Mt(a, n, r) ? jt(a) : z(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = U(a), t = r && G(r) ? U(r) : r, n = e, i = Et(n);
		for (; i && r && t !== n;) {
			let e = kt(i), t = i.getBoundingClientRect(), r = J(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = U(i), i = Et(n);
		}
	}
	return qe({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function Pt(e, t) {
	let n = Ct(e).scrollLeft;
	return t ? t.left + n : Nt(W(e)).left + n;
}
function Ft(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - Pt(e, n),
		y: n.top + t.scrollTop
	};
}
function It(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = W(r), s = t ? ht(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = z(1), u = z(0), d = K(r);
	if ((d || !d && !a) && ((ut(r) !== "body" || pt(o)) && (c = Ct(r)), d)) {
		let e = Nt(r);
		l = kt(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? Ft(o, c) : z(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function Lt(e) {
	return Array.from(e.getClientRects());
}
function Rt(e) {
	let t = W(e), n = Ct(e), r = e.ownerDocument.body, i = R(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = R(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + Pt(e), s = -n.scrollTop;
	return J(r).direction === "rtl" && (o += R(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var zt = 25;
function Bt(e, t) {
	let n = U(e), r = W(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = xt();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = Pt(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= zt && (a -= o);
	} else l <= zt && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
function Vt(e, t) {
	let n = Nt(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = K(e) ? kt(e) : z(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Ht(e, t, n) {
	let r;
	if (t === "viewport") r = Bt(e, n);
	else if (t === "document") r = Rt(W(e));
	else if (G(t)) r = Vt(t, n);
	else {
		let n = jt(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return qe(r);
}
function Ut(e, t) {
	let n = Y(e);
	return n === t || !G(n) || St(n) ? !1 : J(n).position === "fixed" || Ut(n, t);
}
function Wt(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = Tt(e, [], !1).filter((e) => G(e) && ut(e) !== "body"), i = null, a = J(e).position === "fixed", o = a ? Y(e) : e;
	for (; G(o) && !St(o);) {
		let t = J(o), n = yt(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && (i.position === "absolute" || i.position === "fixed") || pt(o) && !n && Ut(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Y(o);
	}
	return t.set(e, r), r;
}
function Gt(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? ht(t) ? [] : Wt(t, this._c) : [].concat(n), r], o = Ht(t, a[0], i), s = o.top, c = o.right, l = o.bottom, u = o.left;
	for (let e = 1; e < a.length; e++) {
		let n = Ht(t, a[e], i);
		s = R(n.top, s), c = L(n.right, c), l = L(n.bottom, l), u = R(n.left, u);
	}
	return {
		width: c - u,
		height: l - s,
		x: u,
		y: s
	};
}
function Kt(e) {
	let { width: t, height: n } = Dt(e);
	return {
		width: t,
		height: n
	};
}
function qt(e, t, n) {
	let r = K(t), i = W(t), a = n === "fixed", o = Nt(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = z(0);
	function l() {
		c.x = Pt(i);
	}
	if (r || !r && !a) if ((ut(t) !== "body" || pt(i)) && (s = Ct(t)), r) {
		let e = Nt(t, !0, a, t);
		c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
	} else i && l();
	a && !r && i && l();
	let u = i && !r && !a ? Ft(i, s) : z(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function Jt(e) {
	return J(e).position === "static";
}
function Yt(e, t) {
	if (!K(e) || J(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return W(e) === n && (n = n.ownerDocument.body), n;
}
function Xt(e, t) {
	let n = U(e);
	if (ht(e)) return n;
	if (!K(e)) {
		let t = Y(e);
		for (; t && !St(t);) {
			if (G(t) && !Jt(t)) return t;
			t = Y(t);
		}
		return n;
	}
	let r = Yt(e, t);
	for (; r && mt(r) && Jt(r);) r = Yt(r, t);
	return r && St(r) && Jt(r) && !yt(r) ? n : r || bt(e) || n;
}
var Zt = async function(e) {
	let t = this.getOffsetParent || Xt, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: qt(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Qt(e) {
	return J(e).direction === "rtl";
}
var $t = {
	convertOffsetParentRelativeRectToViewportRelativeRect: It,
	getDocumentElement: W,
	getClippingRect: Gt,
	getOffsetParent: Xt,
	getElementRects: Zt,
	getClientRects: Lt,
	getDimensions: Kt,
	getScale: kt,
	isElement: G,
	isRTL: Qt
};
function en(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function tn(e, t) {
	let n = null, r, i = W(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = Oe(d), h = Oe(i.clientWidth - (u + f)), g = Oe(i.clientHeight - (d + p)), _ = Oe(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: R(0, L(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !en(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function nn(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = Ot(e), u = i || a ? [...l ? Tt(l) : [], ...t ? Tt(t) : []] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? tn(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && t && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), t && p.observe(t));
	let m, h = c ? Nt(e) : null;
	c && g();
	function g() {
		let t = Nt(e);
		h && !en(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var rn = at, an = ot, on = $e, sn = ct, cn = nt, ln = Qe, un = st, dn = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: $t,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Ze(e, t, {
		...i,
		platform: a
	});
}, fn = typeof document < "u" ? O.useLayoutEffect : function() {};
function pn(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!pn(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !pn(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function mn(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function hn(e, t) {
	let n = mn(e);
	return Math.round(t * n) / n;
}
function gn(e) {
	let t = O.useRef(e);
	return fn(() => {
		t.current = e;
	}), t;
}
function _n(e) {
	e === void 0 && (e = {});
	let { placement: t = "bottom", strategy: n = "absolute", middleware: r = [], platform: i, elements: { reference: a, floating: o } = {}, transform: s = !0, whileElementsMounted: c, open: l } = e, [u, d] = O.useState({
		x: 0,
		y: 0,
		strategy: n,
		placement: t,
		middlewareData: {},
		isPositioned: !1
	}), [f, p] = O.useState(r);
	pn(f, r) || p(r);
	let [m, h] = O.useState(null), [g, _] = O.useState(null), v = O.useCallback((e) => {
		e !== S.current && (S.current = e, h(e));
	}, []), y = O.useCallback((e) => {
		e !== C.current && (C.current = e, _(e));
	}, []), b = a || m, x = o || g, S = O.useRef(null), C = O.useRef(null), w = O.useRef(u), T = c != null, E = gn(c), D = gn(i), k = gn(l), A = O.useCallback(() => {
		if (!S.current || !C.current) return;
		let e = {
			placement: t,
			strategy: n,
			middleware: f
		};
		D.current && (e.platform = D.current), dn(S.current, C.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: k.current !== !1
			};
			j.current && !pn(w.current, t) && (w.current = t, ee.flushSync(() => {
				d(t);
			}));
		});
	}, [
		f,
		t,
		n,
		D,
		k
	]);
	fn(() => {
		l === !1 && w.current.isPositioned && (w.current.isPositioned = !1, d((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [l]);
	let j = O.useRef(!1);
	fn(() => (j.current = !0, () => {
		j.current = !1;
	}), []), fn(() => {
		if (b && (S.current = b), x && (C.current = x), b && x) {
			if (E.current) return E.current(b, x, A);
			A();
		}
	}, [
		b,
		x,
		A,
		E,
		T
	]);
	let M = O.useMemo(() => ({
		reference: S,
		floating: C,
		setReference: v,
		setFloating: y
	}), [v, y]), N = O.useMemo(() => ({
		reference: b,
		floating: x
	}), [b, x]), P = O.useMemo(() => {
		let e = {
			position: n,
			left: 0,
			top: 0
		};
		if (!N.floating) return e;
		let t = hn(N.floating, u.x), r = hn(N.floating, u.y);
		return s ? {
			...e,
			transform: "translate(" + t + "px, " + r + "px)",
			...mn(N.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: n,
			left: t,
			top: r
		};
	}, [
		n,
		s,
		N.floating,
		u.x,
		u.y
	]);
	return O.useMemo(() => ({
		...u,
		update: A,
		refs: M,
		elements: N,
		floatingStyles: P
	}), [
		u,
		A,
		M,
		N,
		P
	]);
}
var vn = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : ln({
				element: r.current,
				padding: i
			}).fn(n) : r ? ln({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, yn = (e, t) => {
	let n = rn(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, bn = (e, t) => {
	let n = an(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, xn = (e, t) => ({
	fn: un(e).fn,
	options: [e, t]
}), Sn = (e, t) => {
	let n = on(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Cn = (e, t) => {
	let n = sn(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, wn = (e, t) => {
	let n = cn(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, Tn = (e, t) => {
	let n = vn(e);
	return {
		name: n.name,
		fn: n.fn,
		options: [e, t]
	};
}, En = "Arrow", Dn = O.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...o } = e;
	return /* @__PURE__ */ (0, D.jsx)(a.svg, {
		...o,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ (0, D.jsx)("polygon", { points: "0,0 30,0 15,10" })
	});
});
Dn.displayName = En;
var On = Dn;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-size@1.1.1_@types+react@19.2.17_react@19.2.7/node_modules/@radix-ui/react-use-size/dist/index.mjs
function kn(e) {
	let [t, n] = O.useState(void 0);
	return l(() => {
		if (e) {
			n({
				width: e.offsetWidth,
				height: e.offsetHeight
			});
			let t = new ResizeObserver((t) => {
				if (!Array.isArray(t) || !t.length) return;
				let r = t[0], i, a;
				if ("borderBoxSize" in r) {
					let e = r.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = e.offsetWidth, a = e.offsetHeight;
				n({
					width: i,
					height: a
				});
			});
			return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
		} else n(void 0);
	}, [e]), t;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-popper@1.2.8_@types+react-dom@19.2.3_@types+react@19.2.17__@types+react_b67c965babd89d7fc261f49b73c3789d/node_modules/@radix-ui/react-popper/dist/index.mjs
var An = "Popper", [jn, Mn] = s(An), [Nn, Pn] = jn(An), Fn = (e) => {
	let { __scopePopper: t, children: n } = e, [r, i] = O.useState(null);
	return /* @__PURE__ */ (0, D.jsx)(Nn, {
		scope: t,
		anchor: r,
		onAnchorChange: i,
		children: n
	});
};
Fn.displayName = An;
var In = "PopperAnchor", Ln = O.forwardRef((e, t) => {
	let { __scopePopper: n, virtualRef: r, ...i } = e, o = Pn(In, n), s = O.useRef(null), c = b(t, s), l = O.useRef(null);
	return O.useEffect(() => {
		let e = l.current;
		l.current = r?.current || s.current, e !== l.current && o.onAnchorChange(l.current);
	}), r ? null : /* @__PURE__ */ (0, D.jsx)(a.div, {
		...i,
		ref: c
	});
});
Ln.displayName = In;
var Rn = "PopperContent", [zn, Bn] = jn(Rn), Vn = O.forwardRef((e, t) => {
	let { __scopePopper: n, side: r = "bottom", sideOffset: i = 0, align: o = "center", alignOffset: s = 0, arrowPadding: c = 0, avoidCollisions: u = !0, collisionBoundary: d = [], collisionPadding: f = 0, sticky: p = "partial", hideWhenDetached: m = !1, updatePositionStrategy: h = "optimized", onPlaced: _, ...v } = e, y = Pn(Rn, n), [x, S] = O.useState(null), C = b(t, (e) => S(e)), [w, T] = O.useState(null), E = kn(w), ee = E?.width ?? 0, k = E?.height ?? 0, A = r + (o === "center" ? "" : "-" + o), j = typeof f == "number" ? f : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...f
	}, M = Array.isArray(d) ? d : [d], N = M.length > 0, P = {
		padding: j,
		boundary: M.filter(Gn),
		altBoundary: N
	}, { refs: te, floatingStyles: ne, placement: re, isPositioned: ie, middlewareData: F } = _n({
		strategy: "fixed",
		placement: A,
		whileElementsMounted: (...e) => nn(...e, { animationFrame: h === "always" }),
		elements: { reference: y.anchor },
		middleware: [
			yn({
				mainAxis: i + k,
				alignmentAxis: s
			}),
			u && bn({
				mainAxis: !0,
				crossAxis: !1,
				limiter: p === "partial" ? xn() : void 0,
				...P
			}),
			u && Sn({ ...P }),
			Cn({
				...P,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			w && Tn({
				element: w,
				padding: c
			}),
			Kn({
				arrowWidth: ee,
				arrowHeight: k
			}),
			m && wn({
				strategy: "referenceHidden",
				...P
			})
		]
	}), [ae, oe] = qn(re), se = g(_);
	l(() => {
		ie && se?.();
	}, [ie, se]);
	let ce = F.arrow?.x, le = F.arrow?.y, ue = F.arrow?.centerOffset !== 0, [de, fe] = O.useState();
	return l(() => {
		x && fe(window.getComputedStyle(x).zIndex);
	}, [x]), /* @__PURE__ */ (0, D.jsx)("div", {
		ref: te.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...ne,
			transform: ie ? ne.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: de,
			"--radix-popper-transform-origin": [F.transformOrigin?.x, F.transformOrigin?.y].join(" "),
			...F.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ (0, D.jsx)(zn, {
			scope: n,
			placedSide: ae,
			onArrowChange: T,
			arrowX: ce,
			arrowY: le,
			shouldHideArrow: ue,
			children: /* @__PURE__ */ (0, D.jsx)(a.div, {
				"data-side": ae,
				"data-align": oe,
				...v,
				ref: C,
				style: {
					...v.style,
					animation: ie ? void 0 : "none"
				}
			})
		})
	});
});
Vn.displayName = Rn;
var Hn = "PopperArrow", Un = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, Wn = O.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = Bn(Hn, n), a = Un[i.placedSide];
	return /* @__PURE__ */ (0, D.jsx)("span", {
		ref: i.onArrowChange,
		style: {
			position: "absolute",
			left: i.arrowX,
			top: i.arrowY,
			[a]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[i.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[i.placedSide],
			visibility: i.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ (0, D.jsx)(On, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
Wn.displayName = Hn;
function Gn(e) {
	return e !== null;
}
var Kn = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = qn(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
});
function qn(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var Jn = Fn, Yn = Ln, Xn = Vn, Zn = Wn, Qn = "Portal", $n = O.forwardRef((e, t) => {
	let { container: n, ...r } = e, [i, o] = O.useState(!1);
	l(() => o(!0), []);
	let s = n || i && globalThis?.document?.body;
	return s ? ee.createPortal(/* @__PURE__ */ (0, D.jsx)(a.div, {
		...r,
		ref: t
	}), s) : null;
});
$n.displayName = Qn;
//#endregion
//#region ../../node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js
var er = function(e) {
	return typeof document > "u" ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
}, tr = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), rr = {}, ir = 0, ar = function(e) {
	return e && (e.host || ar(e.parentNode));
}, or = function(e, t) {
	return t.map(function(t) {
		if (e.contains(t)) return t;
		var n = ar(t);
		return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null);
	}).filter(function(e) {
		return !!e;
	});
}, sr = function(e, t, n, r) {
	var i = or(t, Array.isArray(e) ? e : [e]);
	rr[n] || (rr[n] = /* @__PURE__ */ new WeakMap());
	var a = rr[n], o = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(e) {
		!e || s.has(e) || (s.add(e), l(e.parentNode));
	};
	i.forEach(l);
	var u = function(e) {
		!e || c.has(e) || Array.prototype.forEach.call(e.children, function(e) {
			if (s.has(e)) u(e);
			else try {
				var t = e.getAttribute(r), i = t !== null && t !== "false", c = (tr.get(e) || 0) + 1, l = (a.get(e) || 0) + 1;
				tr.set(e, c), a.set(e, l), o.push(e), c === 1 && i && nr.set(e, !0), l === 1 && e.setAttribute(n, "true"), i || e.setAttribute(r, "true");
			} catch (t) {
				console.error("aria-hidden: cannot operate on ", e, t);
			}
		});
	};
	return u(t), s.clear(), ir++, function() {
		o.forEach(function(e) {
			var t = tr.get(e) - 1, i = a.get(e) - 1;
			tr.set(e, t), a.set(e, i), t || (nr.has(e) || e.removeAttribute(r), nr.delete(e)), i || e.removeAttribute(n);
		}), ir--, ir || (tr = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), rr = {});
	};
}, cr = function(e, t, n) {
	n === void 0 && (n = "data-aria-hidden");
	var r = Array.from(Array.isArray(e) ? e : [e]), i = t || er(e);
	return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), sr(r, i, n, "aria-hidden")) : function() {
		return null;
	};
}, X = function() {
	return X = Object.assign || function(e) {
		for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
		return e;
	}, X.apply(this, arguments);
};
function lr(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
function ur(e, t, n) {
	if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++) (a || !(r in t)) && (a ||= Array.prototype.slice.call(t, 0, r), a[r] = t[r]);
	return e.concat(a || Array.prototype.slice.call(t));
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll-bar@2.3.8_@types+react@19.2.17_react@19.2.7/node_modules/react-remove-scroll-bar/dist/es2015/constants.js
var dr = "right-scroll-bar-position", fr = "width-before-scroll-bar", pr = "with-scroll-bars-hidden", mr = "--removed-body-scroll-bar-size";
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.17_react@19.2.7/node_modules/use-callback-ref/dist/es2015/assignRef.js
function hr(e, t) {
	return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.17_react@19.2.7/node_modules/use-callback-ref/dist/es2015/useRef.js
function gr(e, t) {
	var n = (0, O.useState)(function() {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return n.value;
				},
				set current(e) {
					var t = n.value;
					t !== e && (n.value = e, n.callback(e, t));
				}
			}
		};
	})[0];
	return n.callback = t, n.facade;
}
//#endregion
//#region ../../node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.17_react@19.2.7/node_modules/use-callback-ref/dist/es2015/useMergeRef.js
var _r = typeof window < "u" ? O.useLayoutEffect : O.useEffect, vr = /* @__PURE__ */ new WeakMap();
function yr(e, t) {
	var n = gr(t || null, function(t) {
		return e.forEach(function(e) {
			return hr(e, t);
		});
	});
	return _r(function() {
		var t = vr.get(n);
		if (t) {
			var r = new Set(t), i = new Set(e), a = n.current;
			r.forEach(function(e) {
				i.has(e) || hr(e, null);
			}), i.forEach(function(e) {
				r.has(e) || hr(e, a);
			});
		}
		vr.set(n, e);
	}, [e]), n;
}
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.17_react@19.2.7/node_modules/use-sidecar/dist/es2015/medium.js
function br(e) {
	return e;
}
function xr(e, t) {
	t === void 0 && (t = br);
	var n = [], r = !1;
	return {
		read: function() {
			if (r) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return n.length ? n[n.length - 1] : e;
		},
		useMedium: function(e) {
			var i = t(e, r);
			return n.push(i), function() {
				n = n.filter(function(e) {
					return e !== i;
				});
			};
		},
		assignSyncMedium: function(e) {
			for (r = !0; n.length;) {
				var t = n;
				n = [], t.forEach(e);
			}
			n = {
				push: function(t) {
					return e(t);
				},
				filter: function() {
					return n;
				}
			};
		},
		assignMedium: function(e) {
			r = !0;
			var t = [];
			if (n.length) {
				var i = n;
				n = [], i.forEach(e), t = n;
			}
			var a = function() {
				var n = t;
				t = [], n.forEach(e);
			}, o = function() {
				return Promise.resolve().then(a);
			};
			o(), n = {
				push: function(e) {
					t.push(e), o();
				},
				filter: function(e) {
					return t = t.filter(e), n;
				}
			};
		}
	};
}
function Sr(e) {
	e === void 0 && (e = {});
	var t = xr(null);
	return t.options = X({
		async: !0,
		ssr: !1
	}, e), t;
}
//#endregion
//#region ../../node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.17_react@19.2.7/node_modules/use-sidecar/dist/es2015/exports.js
var Cr = function(e) {
	var t = e.sideCar, n = lr(e, ["sideCar"]);
	if (!t) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var r = t.read();
	if (!r) throw Error("Sidecar medium not found");
	return O.createElement(r, X({}, n));
};
Cr.isSideCarExport = !0;
function wr(e, t) {
	return e.useMedium(t), Cr;
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.17_react@19.2.7/node_modules/react-remove-scroll/dist/es2015/medium.js
var Tr = Sr(), Er = function() {}, Dr = O.forwardRef(function(e, t) {
	var n = O.useRef(null), r = O.useState({
		onScrollCapture: Er,
		onWheelCapture: Er,
		onTouchMoveCapture: Er
	}), i = r[0], a = r[1], o = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noRelative, m = e.noIsolation, h = e.inert, g = e.allowPinchZoom, _ = e.as, v = _ === void 0 ? "div" : _, y = e.gapMode, b = lr(e, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), x = f, S = yr([n, t]), C = X(X({}, b), i);
	return O.createElement(O.Fragment, null, u && O.createElement(x, {
		sideCar: Tr,
		removeScrollBar: l,
		shards: d,
		noRelative: p,
		noIsolation: m,
		inert: h,
		setCallbacks: a,
		allowPinchZoom: !!g,
		lockRef: n,
		gapMode: y
	}), o ? O.cloneElement(O.Children.only(s), X(X({}, C), { ref: S })) : O.createElement(v, X({}, C, {
		className: c,
		ref: S
	}), s));
});
Dr.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, Dr.classNames = {
	fullWidth: fr,
	zeroRight: dr
};
//#endregion
//#region ../../node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js
var Or, kr = function() {
	if (Or) return Or;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
//#endregion
//#region ../../node_modules/.pnpm/react-style-singleton@2.2.3_@types+react@19.2.17_react@19.2.7/node_modules/react-style-singleton/dist/es2015/singleton.js
function Ar() {
	if (!document) return null;
	var e = document.createElement("style");
	e.type = "text/css";
	var t = kr();
	return t && e.setAttribute("nonce", t), e;
}
function jr(e, t) {
	e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Mr(e) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
}
var Nr = function() {
	var e = 0, t = null;
	return {
		add: function(n) {
			e == 0 && (t = Ar()) && (jr(t, n), Mr(t)), e++;
		},
		remove: function() {
			e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
		}
	};
}, Pr = function() {
	var e = Nr();
	return function(t, n) {
		O.useEffect(function() {
			return e.add(t), function() {
				e.remove();
			};
		}, [t && n]);
	};
}, Fr = function() {
	var e = Pr();
	return function(t) {
		var n = t.styles, r = t.dynamic;
		return e(n, r), null;
	};
}, Ir = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, Lr = function(e) {
	return parseInt(e || "", 10) || 0;
}, Rr = function(e) {
	var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
	return [
		Lr(n),
		Lr(r),
		Lr(i)
	];
}, zr = function(e) {
	if (e === void 0 && (e = "margin"), typeof window > "u") return Ir;
	var t = Rr(e), n = document.documentElement.clientWidth, r = window.innerWidth;
	return {
		left: t[0],
		top: t[1],
		right: t[2],
		gap: Math.max(0, r - n + t[2] - t[0])
	};
}, Br = Fr(), Vr = "data-scroll-locked", Hr = function(e, t, n, r) {
	var i = e.left, a = e.top, o = e.right, s = e.gap;
	return n === void 0 && (n = "margin"), `
  .${pr} {
   overflow: hidden ${r};
   padding-right: ${s}px ${r};
  }
  body[${Vr}] {
    overflow: hidden ${r};
    overscroll-behavior: contain;
    ${[
		t && `position: relative ${r};`,
		n === "margin" && `
    padding-left: ${i}px;
    padding-top: ${a}px;
    padding-right: ${o}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${s}px ${r};
    `,
		n === "padding" && `padding-right: ${s}px ${r};`
	].filter(Boolean).join("")}
  }
  
  .${dr} {
    right: ${s}px ${r};
  }
  
  .${fr} {
    margin-right: ${s}px ${r};
  }
  
  .${dr} .${dr} {
    right: 0 ${r};
  }
  
  .${fr} .${fr} {
    margin-right: 0 ${r};
  }
  
  body[${Vr}] {
    ${mr}: ${s}px;
  }
`;
}, Ur = function() {
	var e = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(e) ? e : 0;
}, Wr = function() {
	O.useEffect(function() {
		return document.body.setAttribute(Vr, (Ur() + 1).toString()), function() {
			var e = Ur() - 1;
			e <= 0 ? document.body.removeAttribute(Vr) : document.body.setAttribute(Vr, e.toString());
		};
	}, []);
}, Gr = function(e) {
	var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
	Wr();
	var a = O.useMemo(function() {
		return zr(i);
	}, [i]);
	return O.createElement(Br, { styles: Hr(a, !t, i, n ? "" : "!important") });
}, Kr = !1;
if (typeof window < "u") try {
	var qr = Object.defineProperty({}, "passive", { get: function() {
		return Kr = !0, !0;
	} });
	window.addEventListener("test", qr, qr), window.removeEventListener("test", qr, qr);
} catch {
	Kr = !1;
}
var Jr = Kr ? { passive: !1 } : !1, Yr = function(e) {
	return e.tagName === "TEXTAREA";
}, Xr = function(e, t) {
	if (!(e instanceof Element)) return !1;
	var n = window.getComputedStyle(e);
	return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !Yr(e) && n[t] === "visible");
}, Zr = function(e) {
	return Xr(e, "overflowY");
}, Qr = function(e) {
	return Xr(e, "overflowX");
}, $r = function(e, t) {
	var n = t.ownerDocument, r = t;
	do {
		if (typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host), ni(e, r)) {
			var i = ri(e, r);
			if (i[1] > i[2]) return !0;
		}
		r = r.parentNode;
	} while (r && r !== n.body);
	return !1;
}, ei = function(e) {
	return [
		e.scrollTop,
		e.scrollHeight,
		e.clientHeight
	];
}, ti = function(e) {
	return [
		e.scrollLeft,
		e.scrollWidth,
		e.clientWidth
	];
}, ni = function(e, t) {
	return e === "v" ? Zr(t) : Qr(t);
}, ri = function(e, t) {
	return e === "v" ? ei(t) : ti(t);
}, ii = function(e, t) {
	return e === "h" && t === "rtl" ? -1 : 1;
}, ai = function(e, t, n, r, i) {
	var a = ii(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, c = t.contains(s), l = !1, u = o > 0, d = 0, f = 0;
	do {
		if (!s) break;
		var p = ri(e, s), m = p[0], h = p[1] - p[2] - a * m;
		(m || h) && ni(e, s) && (d += h, f += m);
		var g = s.parentNode;
		s = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
	} while (!c && s !== document.body || c && (t.contains(s) || t === s));
	return (u && (i && Math.abs(d) < 1 || !i && o > d) || !u && (i && Math.abs(f) < 1 || !i && -o > f)) && (l = !0), l;
}, oi = function(e) {
	return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, si = function(e) {
	return [e.deltaX, e.deltaY];
}, ci = function(e) {
	return e && "current" in e ? e.current : e;
}, li = function(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}, ui = function(e) {
	return `
  .block-interactivity-${e} {pointer-events: none;}
  .allow-interactivity-${e} {pointer-events: all;}
`;
}, di = 0, fi = [];
function pi(e) {
	var t = O.useRef([]), n = O.useRef([0, 0]), r = O.useRef(), i = O.useState(di++)[0], a = O.useState(Fr)[0], o = O.useRef(e);
	O.useEffect(function() {
		o.current = e;
	}, [e]), O.useEffect(function() {
		if (e.inert) {
			document.body.classList.add(`block-interactivity-${i}`);
			var t = ur([e.lockRef.current], (e.shards || []).map(ci), !0).filter(Boolean);
			return t.forEach(function(e) {
				return e.classList.add(`allow-interactivity-${i}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${i}`), t.forEach(function(e) {
					return e.classList.remove(`allow-interactivity-${i}`);
				});
			};
		}
	}, [
		e.inert,
		e.lockRef.current,
		e.shards
	]);
	var s = O.useCallback(function(e, t) {
		if ("touches" in e && e.touches.length === 2 || e.type === "wheel" && e.ctrlKey) return !o.current.allowPinchZoom;
		var i = oi(e), a = n.current, s = "deltaX" in e ? e.deltaX : a[0] - i[0], c = "deltaY" in e ? e.deltaY : a[1] - i[1], l, u = e.target, d = Math.abs(s) > Math.abs(c) ? "h" : "v";
		if ("touches" in e && d === "h" && u.type === "range") return !1;
		var f = $r(d, u);
		if (!f) return !0;
		if (f ? l = d : (l = d === "v" ? "h" : "v", f = $r(d, u)), !f) return !1;
		if (!r.current && "changedTouches" in e && (s || c) && (r.current = l), !l) return !0;
		var p = r.current || l;
		return ai(p, t, e, p === "h" ? s : c, !0);
	}, []), c = O.useCallback(function(e) {
		var n = e;
		if (!(!fi.length || fi[fi.length - 1] !== a)) {
			var r = "deltaY" in n ? si(n) : oi(n), i = t.current.filter(function(e) {
				return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && li(e.delta, r);
			})[0];
			if (i && i.should) {
				n.cancelable && n.preventDefault();
				return;
			}
			if (!i) {
				var c = (o.current.shards || []).map(ci).filter(Boolean).filter(function(e) {
					return e.contains(n.target);
				});
				(c.length > 0 ? s(n, c[0]) : !o.current.noIsolation) && n.cancelable && n.preventDefault();
			}
		}
	}, []), l = O.useCallback(function(e, n, r, i) {
		var a = {
			name: e,
			delta: n,
			target: r,
			should: i,
			shadowParent: mi(r)
		};
		t.current.push(a), setTimeout(function() {
			t.current = t.current.filter(function(e) {
				return e !== a;
			});
		}, 1);
	}, []), u = O.useCallback(function(e) {
		n.current = oi(e), r.current = void 0;
	}, []), d = O.useCallback(function(t) {
		l(t.type, si(t), t.target, s(t, e.lockRef.current));
	}, []), f = O.useCallback(function(t) {
		l(t.type, oi(t), t.target, s(t, e.lockRef.current));
	}, []);
	O.useEffect(function() {
		return fi.push(a), e.setCallbacks({
			onScrollCapture: d,
			onWheelCapture: d,
			onTouchMoveCapture: f
		}), document.addEventListener("wheel", c, Jr), document.addEventListener("touchmove", c, Jr), document.addEventListener("touchstart", u, Jr), function() {
			fi = fi.filter(function(e) {
				return e !== a;
			}), document.removeEventListener("wheel", c, Jr), document.removeEventListener("touchmove", c, Jr), document.removeEventListener("touchstart", u, Jr);
		};
	}, []);
	var p = e.removeScrollBar, m = e.inert;
	return O.createElement(O.Fragment, null, m ? O.createElement(a, { styles: ui(i) }) : null, p ? O.createElement(Gr, {
		noRelative: e.noRelative,
		gapMode: e.gapMode
	}) : null);
}
function mi(e) {
	for (var t = null; e !== null;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/react-remove-scroll@2.7.1_@types+react@19.2.17_react@19.2.7/node_modules/react-remove-scroll/dist/es2015/sidecar.js
var hi = wr(Tr, pi), gi = O.forwardRef(function(e, t) {
	return O.createElement(Dr, X({}, e, {
		ref: t,
		sideCar: hi
	}));
});
gi.classNames = Dr.classNames;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.4_@types+react-dom@19.2.3_@types+react@19.2.17__@types+re_9c920f8003eb71dc626f8f0da110633b/node_modules/@radix-ui/react-primitive/dist/index.mjs
var _i = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, t) => {
	let n = S(`Primitive.${t}`), r = O.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, D.jsx)(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-previous@1.1.1_@types+react@19.2.17_react@19.2.7/node_modules/@radix-ui/react-use-previous/dist/index.mjs
function vi(e) {
	let t = O.useRef({
		value: e,
		previous: e
	});
	return O.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
//#endregion
//#region src/lib/ui/util.tsx
var yi = C, bi = yi("outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-3", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:ring-3 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50"), xi = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), Si = "VisuallyHidden", Ci = O.forwardRef((e, t) => /* @__PURE__ */ (0, D.jsx)(a.span, {
	...e,
	ref: t,
	style: {
		...xi,
		...e.style
	}
}));
Ci.displayName = Si;
var wi = Ci, Ti = ["Enter", " "], Ei = [
	"ArrowDown",
	"PageUp",
	"Home"
], Di = [
	"ArrowUp",
	"PageDown",
	"End"
], Oi = [...Ei, ...Di], ki = {
	ltr: [...Ti, "ArrowRight"],
	rtl: [...Ti, "ArrowLeft"]
}, Ai = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, ji = "Menu", [Mi, Ni, Pi] = r(ji), [Fi, Ii] = s(ji, [
	Pi,
	Mn,
	p
]), Li = Mn(), Ri = p(), [zi, Z] = Fi(ji), [Bi, Vi] = Fi(ji), Hi = (e) => {
	let { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: a, modal: o = !0 } = e, s = Li(t), [l, u] = O.useState(null), d = O.useRef(!1), f = g(a), p = c(i);
	return O.useEffect(() => {
		let e = () => {
			d.current = !0, document.addEventListener("pointerdown", t, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", t, {
				capture: !0,
				once: !0
			});
		}, t = () => d.current = !1;
		return document.addEventListener("keydown", e, { capture: !0 }), () => {
			document.removeEventListener("keydown", e, { capture: !0 }), document.removeEventListener("pointerdown", t, { capture: !0 }), document.removeEventListener("pointermove", t, { capture: !0 });
		};
	}, []), /* @__PURE__ */ (0, D.jsx)(Jn, {
		...s,
		children: /* @__PURE__ */ (0, D.jsx)(zi, {
			scope: t,
			open: n,
			onOpenChange: f,
			content: l,
			onContentChange: u,
			children: /* @__PURE__ */ (0, D.jsx)(Bi, {
				scope: t,
				onClose: O.useCallback(() => f(!1), [f]),
				isUsingKeyboardRef: d,
				dir: p,
				modal: o,
				children: r
			})
		})
	});
};
Hi.displayName = ji;
var Ui = "MenuAnchor", Wi = O.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = Li(n);
	return /* @__PURE__ */ (0, D.jsx)(Yn, {
		...i,
		...r,
		ref: t
	});
});
Wi.displayName = Ui;
var Gi = "MenuPortal", [Ki, qi] = Fi(Gi, { forceMount: void 0 }), Ji = (e) => {
	let { __scopeMenu: t, forceMount: n, children: r, container: i } = e, a = Z(Gi, t);
	return /* @__PURE__ */ (0, D.jsx)(Ki, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, D.jsx)(m, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, D.jsx)($n, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
Ji.displayName = Gi;
var Q = "MenuContent", [Yi, Xi] = Fi(Q), Zi = O.forwardRef((e, t) => {
	let n = qi(Q, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, a = Z(Q, e.__scopeMenu), o = Vi(Q, e.__scopeMenu);
	return /* @__PURE__ */ (0, D.jsx)(Mi.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, D.jsx)(m, {
			present: r || a.open,
			children: /* @__PURE__ */ (0, D.jsx)(Mi.Slot, {
				scope: e.__scopeMenu,
				children: o.modal ? /* @__PURE__ */ (0, D.jsx)(Qi, {
					...i,
					ref: t
				}) : /* @__PURE__ */ (0, D.jsx)($i, {
					...i,
					ref: t
				})
			})
		})
	});
}), Qi = O.forwardRef((e, t) => {
	let r = Z(Q, e.__scopeMenu), i = O.useRef(null), a = b(t, i);
	return O.useEffect(() => {
		let e = i.current;
		if (e) return cr(e);
	}, []), /* @__PURE__ */ (0, D.jsx)(ta, {
		...e,
		ref: a,
		trapFocus: r.open,
		disableOutsidePointerEvents: r.open,
		disableOutsideScroll: !0,
		onFocusOutside: n(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => r.onOpenChange(!1)
	});
}), $i = O.forwardRef((e, t) => {
	let n = Z(Q, e.__scopeMenu);
	return /* @__PURE__ */ (0, D.jsx)(ta, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => n.onOpenChange(!1)
	});
}), ea = f("MenuContent.ScrollLock"), ta = O.forwardRef((e, t) => {
	let { __scopeMenu: r, loop: i = !1, trapFocus: a, onOpenAutoFocus: o, onCloseAutoFocus: s, disableOutsidePointerEvents: c, onEntryFocus: l, onEscapeKeyDown: d, onPointerDownOutside: f, onFocusOutside: p, onInteractOutside: m, onDismiss: h, disableOutsideScroll: g, ..._ } = e, v = Z(Q, r), y = Vi(Q, r), x = Li(r), S = Ri(r), C = Ni(r), [w, T] = O.useState(null), E = O.useRef(null), ee = b(t, E, v.onContentChange), k = O.useRef(0), A = O.useRef(""), j = O.useRef(0), M = O.useRef(null), N = O.useRef("right"), P = O.useRef(0), te = g ? gi : O.Fragment, re = g ? {
		as: ea,
		allowPinchZoom: !0
	} : void 0, ie = (e) => {
		let t = A.current + e, n = C().filter((e) => !e.disabled), r = document.activeElement, i = n.find((e) => e.ref.current === r)?.textValue, a = za(n.map((e) => e.textValue), t, i), o = n.find((e) => e.textValue === a)?.ref.current;
		(function e(t) {
			A.current = t, window.clearTimeout(k.current), t !== "" && (k.current = window.setTimeout(() => e(""), 1e3));
		})(t), o && setTimeout(() => o.focus());
	};
	O.useEffect(() => () => window.clearTimeout(k.current), []), le();
	let F = O.useCallback((e) => N.current === M.current?.side && Va(e, M.current?.area), []);
	return /* @__PURE__ */ (0, D.jsx)(Yi, {
		scope: r,
		searchRef: A,
		onItemEnter: O.useCallback((e) => {
			F(e) && e.preventDefault();
		}, [F]),
		onItemLeave: O.useCallback((e) => {
			F(e) || (E.current?.focus(), T(null));
		}, [F]),
		onTriggerLeave: O.useCallback((e) => {
			F(e) && e.preventDefault();
		}, [F]),
		pointerGraceTimerRef: j,
		onPointerGraceIntentChange: O.useCallback((e) => {
			M.current = e;
		}, []),
		children: /* @__PURE__ */ (0, D.jsx)(te, {
			...re,
			children: /* @__PURE__ */ (0, D.jsx)(he, {
				asChild: !0,
				trapped: a,
				onMountAutoFocus: n(o, (e) => {
					e.preventDefault(), E.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: s,
				children: /* @__PURE__ */ (0, D.jsx)(ne, {
					asChild: !0,
					disableOutsidePointerEvents: c,
					onEscapeKeyDown: d,
					onPointerDownOutside: f,
					onFocusOutside: p,
					onInteractOutside: m,
					onDismiss: h,
					children: /* @__PURE__ */ (0, D.jsx)(u, {
						asChild: !0,
						...S,
						dir: y.dir,
						orientation: "vertical",
						loop: i,
						currentTabStopId: w,
						onCurrentTabStopIdChange: T,
						onEntryFocus: n(l, (e) => {
							y.isUsingKeyboardRef.current || e.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ (0, D.jsx)(Xn, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": Pa(v.open),
							"data-radix-menu-content": "",
							dir: y.dir,
							...x,
							..._,
							ref: ee,
							style: {
								outline: "none",
								..._.style
							},
							onKeyDown: n(_.onKeyDown, (e) => {
								let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget, n = e.ctrlKey || e.altKey || e.metaKey, r = e.key.length === 1;
								t && (e.key === "Tab" && e.preventDefault(), !n && r && ie(e.key));
								let i = E.current;
								if (e.target !== i || !Oi.includes(e.key)) return;
								e.preventDefault();
								let a = C().filter((e) => !e.disabled).map((e) => e.ref.current);
								Di.includes(e.key) && a.reverse(), La(a);
							}),
							onBlur: n(e.onBlur, (e) => {
								e.currentTarget.contains(e.target) || (window.clearTimeout(k.current), A.current = "");
							}),
							onPointerMove: n(e.onPointerMove, Ha((e) => {
								let t = e.target, n = P.current !== e.clientX;
								e.currentTarget.contains(t) && n && (N.current = e.clientX > P.current ? "right" : "left", P.current = e.clientX);
							}))
						})
					})
				})
			})
		})
	});
});
Zi.displayName = Q;
var na = "MenuGroup", ra = O.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, D.jsx)(a.div, {
		role: "group",
		...r,
		ref: t
	});
});
ra.displayName = na;
var ia = "MenuLabel", aa = O.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, D.jsx)(a.div, {
		...r,
		ref: t
	});
});
aa.displayName = ia;
var oa = "MenuItem", sa = "menu.itemSelect", ca = O.forwardRef((e, t) => {
	let { disabled: r = !1, onSelect: i, ...a } = e, s = O.useRef(null), c = Vi(oa, e.__scopeMenu), l = Xi(oa, e.__scopeMenu), u = b(t, s), d = O.useRef(!1), f = () => {
		let e = s.current;
		if (!r && e) {
			let t = new CustomEvent(sa, {
				bubbles: !0,
				cancelable: !0
			});
			e.addEventListener(sa, (e) => i?.(e), { once: !0 }), o(e, t), t.defaultPrevented ? d.current = !1 : c.onClose();
		}
	};
	return /* @__PURE__ */ (0, D.jsx)(la, {
		...a,
		ref: u,
		disabled: r,
		onClick: n(e.onClick, f),
		onPointerDown: (t) => {
			e.onPointerDown?.(t), d.current = !0;
		},
		onPointerUp: n(e.onPointerUp, (e) => {
			d.current || e.currentTarget?.click();
		}),
		onKeyDown: n(e.onKeyDown, (e) => {
			let t = l.searchRef.current !== "";
			r || t && e.key === " " || Ti.includes(e.key) && (e.currentTarget.click(), e.preventDefault());
		})
	});
});
ca.displayName = oa;
var la = O.forwardRef((e, t) => {
	let { __scopeMenu: r, disabled: i = !1, textValue: o, ...s } = e, c = Xi(oa, r), l = Ri(r), u = O.useRef(null), d = b(t, u), [f, p] = O.useState(!1), [m, g] = O.useState("");
	return O.useEffect(() => {
		let e = u.current;
		e && g((e.textContent ?? "").trim());
	}, [s.children]), /* @__PURE__ */ (0, D.jsx)(Mi.ItemSlot, {
		scope: r,
		disabled: i,
		textValue: o ?? m,
		children: /* @__PURE__ */ (0, D.jsx)(h, {
			asChild: !0,
			...l,
			focusable: !i,
			children: /* @__PURE__ */ (0, D.jsx)(a.div, {
				role: "menuitem",
				"data-highlighted": f ? "" : void 0,
				"aria-disabled": i || void 0,
				"data-disabled": i ? "" : void 0,
				...s,
				ref: d,
				onPointerMove: n(e.onPointerMove, Ha((e) => {
					i ? c.onItemLeave(e) : (c.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: n(e.onPointerLeave, Ha((e) => c.onItemLeave(e))),
				onFocus: n(e.onFocus, () => p(!0)),
				onBlur: n(e.onBlur, () => p(!1))
			})
		})
	});
}), ua = "MenuCheckboxItem", da = O.forwardRef((e, t) => {
	let { checked: r = !1, onCheckedChange: i, ...a } = e;
	return /* @__PURE__ */ (0, D.jsx)(ya, {
		scope: e.__scopeMenu,
		checked: r,
		children: /* @__PURE__ */ (0, D.jsx)(ca, {
			role: "menuitemcheckbox",
			"aria-checked": Fa(r) ? "mixed" : r,
			...a,
			ref: t,
			"data-state": Ia(r),
			onSelect: n(a.onSelect, () => i?.(Fa(r) ? !0 : !r), { checkForDefaultPrevented: !1 })
		})
	});
});
da.displayName = ua;
var fa = "MenuRadioGroup", [pa, ma] = Fi(fa, {
	value: void 0,
	onValueChange: () => {}
}), ha = O.forwardRef((e, t) => {
	let { value: n, onValueChange: r, ...i } = e, a = g(r);
	return /* @__PURE__ */ (0, D.jsx)(pa, {
		scope: e.__scopeMenu,
		value: n,
		onValueChange: a,
		children: /* @__PURE__ */ (0, D.jsx)(ra, {
			...i,
			ref: t
		})
	});
});
ha.displayName = fa;
var ga = "MenuRadioItem", _a = O.forwardRef((e, t) => {
	let { value: r, ...i } = e, a = ma(ga, e.__scopeMenu), o = r === a.value;
	return /* @__PURE__ */ (0, D.jsx)(ya, {
		scope: e.__scopeMenu,
		checked: o,
		children: /* @__PURE__ */ (0, D.jsx)(ca, {
			role: "menuitemradio",
			"aria-checked": o,
			...i,
			ref: t,
			"data-state": Ia(o),
			onSelect: n(i.onSelect, () => a.onValueChange?.(r), { checkForDefaultPrevented: !1 })
		})
	});
});
_a.displayName = ga;
var va = "MenuItemIndicator", [ya, ba] = Fi(va, { checked: !1 }), xa = O.forwardRef((e, t) => {
	let { __scopeMenu: n, forceMount: r, ...i } = e, o = ba(va, n);
	return /* @__PURE__ */ (0, D.jsx)(m, {
		present: r || Fa(o.checked) || o.checked === !0,
		children: /* @__PURE__ */ (0, D.jsx)(a.span, {
			...i,
			ref: t,
			"data-state": Ia(o.checked)
		})
	});
});
xa.displayName = va;
var Sa = "MenuSeparator", Ca = O.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e;
	return /* @__PURE__ */ (0, D.jsx)(a.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...r,
		ref: t
	});
});
Ca.displayName = Sa;
var wa = "MenuArrow", Ta = O.forwardRef((e, t) => {
	let { __scopeMenu: n, ...r } = e, i = Li(n);
	return /* @__PURE__ */ (0, D.jsx)(Zn, {
		...i,
		...r,
		ref: t
	});
});
Ta.displayName = wa;
var Ea = "MenuSub", [Da, Oa] = Fi(Ea), ka = (e) => {
	let { __scopeMenu: t, children: n, open: r = !1, onOpenChange: a } = e, o = Z(Ea, t), s = Li(t), [c, l] = O.useState(null), [u, d] = O.useState(null), f = g(a);
	return O.useEffect(() => (o.open === !1 && f(!1), () => f(!1)), [o.open, f]), /* @__PURE__ */ (0, D.jsx)(Jn, {
		...s,
		children: /* @__PURE__ */ (0, D.jsx)(zi, {
			scope: t,
			open: r,
			onOpenChange: f,
			content: u,
			onContentChange: d,
			children: /* @__PURE__ */ (0, D.jsx)(Da, {
				scope: t,
				contentId: i(),
				triggerId: i(),
				trigger: c,
				onTriggerChange: l,
				children: n
			})
		})
	});
};
ka.displayName = Ea;
var Aa = "MenuSubTrigger", ja = O.forwardRef((e, t) => {
	let r = Z(Aa, e.__scopeMenu), i = Vi(Aa, e.__scopeMenu), a = Oa(Aa, e.__scopeMenu), o = Xi(Aa, e.__scopeMenu), s = O.useRef(null), { pointerGraceTimerRef: c, onPointerGraceIntentChange: l } = o, u = { __scopeMenu: e.__scopeMenu }, d = O.useCallback(() => {
		s.current && window.clearTimeout(s.current), s.current = null;
	}, []);
	return O.useEffect(() => d, [d]), O.useEffect(() => {
		let e = c.current;
		return () => {
			window.clearTimeout(e), l(null);
		};
	}, [c, l]), /* @__PURE__ */ (0, D.jsx)(Wi, {
		asChild: !0,
		...u,
		children: /* @__PURE__ */ (0, D.jsx)(la, {
			id: a.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": r.open,
			"aria-controls": a.contentId,
			"data-state": Pa(r.open),
			...e,
			ref: x(t, a.onTriggerChange),
			onClick: (t) => {
				e.onClick?.(t), !(e.disabled || t.defaultPrevented) && (t.currentTarget.focus(), r.open || r.onOpenChange(!0));
			},
			onPointerMove: n(e.onPointerMove, Ha((t) => {
				o.onItemEnter(t), !t.defaultPrevented && !e.disabled && !r.open && !s.current && (o.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
					r.onOpenChange(!0), d();
				}, 100));
			})),
			onPointerLeave: n(e.onPointerLeave, Ha((e) => {
				d();
				let t = r.content?.getBoundingClientRect();
				if (t) {
					let n = r.content?.dataset.side, i = n === "right", a = i ? -5 : 5, s = t[i ? "left" : "right"], l = t[i ? "right" : "left"];
					o.onPointerGraceIntentChange({
						area: [
							{
								x: e.clientX + a,
								y: e.clientY
							},
							{
								x: s,
								y: t.top
							},
							{
								x: l,
								y: t.top
							},
							{
								x: l,
								y: t.bottom
							},
							{
								x: s,
								y: t.bottom
							}
						],
						side: n
					}), window.clearTimeout(c.current), c.current = window.setTimeout(() => o.onPointerGraceIntentChange(null), 300);
				} else {
					if (o.onTriggerLeave(e), e.defaultPrevented) return;
					o.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: n(e.onKeyDown, (t) => {
				let n = o.searchRef.current !== "";
				e.disabled || n && t.key === " " || ki[i.dir].includes(t.key) && (r.onOpenChange(!0), r.content?.focus(), t.preventDefault());
			})
		})
	});
});
ja.displayName = Aa;
var Ma = "MenuSubContent", Na = O.forwardRef((e, t) => {
	let r = qi(Q, e.__scopeMenu), { forceMount: i = r.forceMount, ...a } = e, o = Z(Q, e.__scopeMenu), s = Vi(Q, e.__scopeMenu), c = Oa(Ma, e.__scopeMenu), l = O.useRef(null), u = b(t, l);
	return /* @__PURE__ */ (0, D.jsx)(Mi.Provider, {
		scope: e.__scopeMenu,
		children: /* @__PURE__ */ (0, D.jsx)(m, {
			present: i || o.open,
			children: /* @__PURE__ */ (0, D.jsx)(Mi.Slot, {
				scope: e.__scopeMenu,
				children: /* @__PURE__ */ (0, D.jsx)(ta, {
					id: c.contentId,
					"aria-labelledby": c.triggerId,
					...a,
					ref: u,
					align: "start",
					side: s.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (e) => {
						s.isUsingKeyboardRef.current && l.current?.focus(), e.preventDefault();
					},
					onCloseAutoFocus: (e) => e.preventDefault(),
					onFocusOutside: n(e.onFocusOutside, (e) => {
						e.target !== c.trigger && o.onOpenChange(!1);
					}),
					onEscapeKeyDown: n(e.onEscapeKeyDown, (e) => {
						s.onClose(), e.preventDefault();
					}),
					onKeyDown: n(e.onKeyDown, (e) => {
						let t = e.currentTarget.contains(e.target), n = Ai[s.dir].includes(e.key);
						t && n && (o.onOpenChange(!1), c.trigger?.focus(), e.preventDefault());
					})
				})
			})
		})
	});
});
Na.displayName = Ma;
function Pa(e) {
	return e ? "open" : "closed";
}
function Fa(e) {
	return e === "indeterminate";
}
function Ia(e) {
	return Fa(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function La(e) {
	let t = document.activeElement;
	for (let n of e) if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Ra(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function za(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = Ra(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function Ba(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function Va(e, t) {
	return t ? Ba({
		x: e.clientX,
		y: e.clientY
	}, t) : !1;
}
function Ha(e) {
	return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Ua = Hi, Wa = Wi, Ga = Ji, Ka = Zi, qa = ra, Ja = aa, Ya = ca, Xa = da, Za = ha, Qa = _a, $a = xa, eo = Ca, to = Ta, no = ka, ro = ja, io = Na, ao = "DropdownMenu", [oo, so] = s(ao, [Ii]), $ = Ii(), [co, lo] = oo(ao), uo = (e) => {
	let { __scopeDropdownMenu: t, children: n, dir: r, open: a, defaultOpen: o, onOpenChange: s, modal: c = !0 } = e, l = $(t), u = O.useRef(null), [f, p] = d({
		prop: a,
		defaultProp: o ?? !1,
		onChange: s,
		caller: ao
	});
	return /* @__PURE__ */ (0, D.jsx)(co, {
		scope: t,
		triggerId: i(),
		triggerRef: u,
		contentId: i(),
		open: f,
		onOpenChange: p,
		onOpenToggle: O.useCallback(() => p((e) => !e), [p]),
		modal: c,
		children: /* @__PURE__ */ (0, D.jsx)(Ua, {
			...l,
			open: f,
			onOpenChange: p,
			dir: r,
			modal: c,
			children: n
		})
	});
};
uo.displayName = ao;
var fo = "DropdownMenuTrigger", po = O.forwardRef((e, t) => {
	let { __scopeDropdownMenu: r, disabled: i = !1, ...o } = e, s = lo(fo, r), c = $(r);
	return /* @__PURE__ */ (0, D.jsx)(Wa, {
		asChild: !0,
		...c,
		children: /* @__PURE__ */ (0, D.jsx)(a.button, {
			type: "button",
			id: s.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": s.open,
			"aria-controls": s.open ? s.contentId : void 0,
			"data-state": s.open ? "open" : "closed",
			"data-disabled": i ? "" : void 0,
			disabled: i,
			...o,
			ref: x(t, s.triggerRef),
			onPointerDown: n(e.onPointerDown, (e) => {
				!i && e.button === 0 && e.ctrlKey === !1 && (s.onOpenToggle(), s.open || e.preventDefault());
			}),
			onKeyDown: n(e.onKeyDown, (e) => {
				i || (["Enter", " "].includes(e.key) && s.onOpenToggle(), e.key === "ArrowDown" && s.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(e.key) && e.preventDefault());
			})
		})
	});
});
po.displayName = fo;
var mo = "DropdownMenuPortal", ho = (e) => {
	let { __scopeDropdownMenu: t, ...n } = e, r = $(t);
	return /* @__PURE__ */ (0, D.jsx)(Ga, {
		...r,
		...n
	});
};
ho.displayName = mo;
var go = "DropdownMenuContent", _o = O.forwardRef((e, t) => {
	let { __scopeDropdownMenu: r, ...i } = e, a = lo(go, r), o = $(r), s = O.useRef(!1);
	return /* @__PURE__ */ (0, D.jsx)(Ka, {
		id: a.contentId,
		"aria-labelledby": a.triggerId,
		...o,
		...i,
		ref: t,
		onCloseAutoFocus: n(e.onCloseAutoFocus, (e) => {
			s.current || a.triggerRef.current?.focus(), s.current = !1, e.preventDefault();
		}),
		onInteractOutside: n(e.onInteractOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0, r = t.button === 2 || n;
			(!a.modal || r) && (s.current = !0);
		}),
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
_o.displayName = go;
var vo = "DropdownMenuGroup", yo = O.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, D.jsx)(qa, {
		...i,
		...r,
		ref: t
	});
});
yo.displayName = vo;
var bo = "DropdownMenuLabel", xo = O.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, D.jsx)(Ja, {
		...i,
		...r,
		ref: t
	});
});
xo.displayName = bo;
var So = "DropdownMenuItem", Co = O.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, D.jsx)(Ya, {
		...i,
		...r,
		ref: t
	});
});
Co.displayName = So;
var wo = "DropdownMenuCheckboxItem", To = O.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, D.jsx)(Xa, {
		...i,
		...r,
		ref: t
	});
});
To.displayName = wo;
var Eo = "DropdownMenuRadioGroup", Do = O.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, D.jsx)(Za, {
		...i,
		...r,
		ref: t
	});
});
Do.displayName = Eo;
var Oo = "DropdownMenuRadioItem", ko = O.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, D.jsx)(Qa, {
		...i,
		...r,
		ref: t
	});
});
ko.displayName = Oo;
var Ao = "DropdownMenuItemIndicator", jo = O.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, D.jsx)($a, {
		...i,
		...r,
		ref: t
	});
});
jo.displayName = Ao;
var Mo = "DropdownMenuSeparator", No = O.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, D.jsx)(eo, {
		...i,
		...r,
		ref: t
	});
});
No.displayName = Mo;
var Po = "DropdownMenuArrow", Fo = O.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, D.jsx)(to, {
		...i,
		...r,
		ref: t
	});
});
Fo.displayName = Po;
var Io = (e) => {
	let { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: i, defaultOpen: a } = e, o = $(t), [s, c] = d({
		prop: r,
		defaultProp: a ?? !1,
		onChange: i,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ (0, D.jsx)(no, {
		...o,
		open: s,
		onOpenChange: c,
		children: n
	});
}, Lo = "DropdownMenuSubTrigger", Ro = O.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, D.jsx)(ro, {
		...i,
		...r,
		ref: t
	});
});
Ro.displayName = Lo;
var zo = "DropdownMenuSubContent", Bo = O.forwardRef((e, t) => {
	let { __scopeDropdownMenu: n, ...r } = e, i = $(n);
	return /* @__PURE__ */ (0, D.jsx)(io, {
		...i,
		...r,
		ref: t,
		style: {
			...e.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
Bo.displayName = zo;
var Vo = uo, Ho = po, Uo = ho, Wo = _o, Go = yo, Ko = xo, qo = Co, Jo = No, Yo = Io, Xo = Ro, Zo = Bo;
//#endregion
//#region src/lib/ui/DropdownMenu.tsx
function Qo({ ...e }) {
	return /* @__PURE__ */ (0, D.jsx)(Vo, {
		"data-slot": "dropdown-menu",
		...e
	});
}
function $o({ ...e }) {
	return /* @__PURE__ */ (0, D.jsx)(Uo, {
		"data-slot": "dropdown-menu-portal",
		...e
	});
}
function es({ ...e }) {
	return /* @__PURE__ */ (0, D.jsx)(Ho, {
		"data-slot": "dropdown-menu-trigger",
		...e
	});
}
function ts({ className: e, sideOffset: t = 4, ...n }) {
	return /* @__PURE__ */ (0, D.jsx)(Uo, { children: /* @__PURE__ */ (0, D.jsx)(Wo, {
		"data-slot": "dropdown-menu-content",
		sideOffset: t,
		className: C("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", e),
		...n
	}) });
}
function ns({ ...e }) {
	return /* @__PURE__ */ (0, D.jsx)(Go, {
		"data-slot": "dropdown-menu-group",
		...e
	});
}
function rs({ className: e, inset: t, variant: n = "default", ...r }) {
	return /* @__PURE__ */ (0, D.jsx)(qo, {
		"data-slot": "dropdown-menu-item",
		"data-inset": t,
		"data-variant": n,
		className: C("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...r
	});
}
function is({ className: e, inset: t, ...n }) {
	return /* @__PURE__ */ (0, D.jsx)(Ko, {
		"data-slot": "dropdown-menu-label",
		"data-inset": t,
		className: C("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", e),
		...n
	});
}
function as({ className: e, ...t }) {
	return /* @__PURE__ */ (0, D.jsx)(Jo, {
		"data-slot": "dropdown-menu-separator",
		className: C("bg-border -mx-1 my-1 h-px", e),
		...t
	});
}
function os({ ...e }) {
	return /* @__PURE__ */ (0, D.jsx)(Yo, {
		"data-slot": "dropdown-menu-sub",
		...e
	});
}
function ss({ className: e, inset: t, children: n, ...r }) {
	return /* @__PURE__ */ (0, D.jsxs)(Xo, {
		"data-slot": "dropdown-menu-sub-trigger",
		"data-inset": t,
		className: C("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...r,
		children: [n, /* @__PURE__ */ (0, D.jsx)(T, {
			className: "ml-auto size-4",
			"aria-hidden": "true"
		})]
	});
}
function cs({ className: e, ...t }) {
	return /* @__PURE__ */ (0, D.jsx)(Zo, {
		"data-slot": "dropdown-menu-sub-content",
		className: C("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", e),
		...t
	});
}
//#endregion
export { E as A, Xn as C, he as D, kn as E, w as M, le as O, Zn as S, Mn as T, _i as _, is as a, $n as b, os as c, es as d, wi as f, vi as g, bi as h, rs as i, T as j, ne as k, cs as l, yi as m, ts as n, $o as o, xi as p, ns as r, as as s, Qo as t, ss as u, gi as v, Jn as w, Yn as x, cr as y };
