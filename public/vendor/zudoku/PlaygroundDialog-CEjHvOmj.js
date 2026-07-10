import { a as e, r as t } from "./chunk-HEgqtunE.js";
import { t as n } from "./react-DCUEsnwl.js";
import { Ht as r } from "./main-CQFzjeJU.js";
import { _ as i, c as a, d as o, g as s, i as c, n as l, o as u, r as d, s as f, t as p } from "./dist-D6fp9d0w.js";
import { C as m, E as h, S as g, f as _, h as v, o as y, t as b, y as x } from "./dist-CyinVPgs.js";
import { S, a as C, b as w, c as T, d as E, h as D, i as ee, l as te, m as ne, n as O, o as k, p as re, r as ie, t as ae, w as oe, x as se, y as ce } from "./react-nprogress.esm-Dq4T7Ytq.js";
import { t as le } from "./jsx-runtime-Bcg76ucg.js";
import { t as ue } from "./useQuery-B8Uxp7FM.js";
import { a as de, d as fe, f as pe, h as me, i as A, l as he, m as ge, n as _e, p as ve, r as j, t as M, u as ye } from "./Collapsible-ByPObG0j.js";
import { t as N } from "./createLucideIcon-CE5nuOQr.js";
import { n as be, r as xe, t as Se } from "./useCopyToClipboard-9GjEEqo_.js";
import { A as Ce, E as we, M as Te, _ as Ee, a as De, d as Oe, g as ke, i as Ae, n as je, r as Me, s as Ne, t as Pe } from "./DropdownMenu-DMEGJELa.js";
import { a as Fe, i as Ie, n as Le, o as Re, r as ze, t as Be } from "./Select-2vKUjDje.js";
import { n as Ve, t as He } from "./eye-DqOzm1hZ.js";
import { a as Ue, c as We, i as Ge, o as Ke, r as qe, s as Je, t as Ye } from "./Card-chFzX4gv.js";
import { a as Xe, n as Ze, o as Qe, r as $e, t as et } from "./Alert-DicPSkXo.js";
import { a as tt, i as nt, n as rt, t as P } from "./Button-dzS4XgUY.js";
import { t as F } from "./cn-yMl495m5.js";
import { S as it, b as at, t as ot, x as st, y as ct } from "./ZudokuContext-BxG8utmj.js";
import { t as lt } from "./Markdown-DNJarfnl.js";
import { n as ut } from "./SyntaxHighlight-bEdAb5c0.js";
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.0/node_modules/@tanstack/query-core/build/modern/mutationObserver.js
var dt = class extends h {
	#e;
	#t = void 0;
	#n;
	#r;
	constructor(e, t) {
		super(), this.#e = e, this.setOptions(t), this.bindMethods(), this.#i();
	}
	bindMethods() {
		this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
	}
	setOptions(e) {
		let t = this.options;
		this.options = this.#e.defaultMutationOptions(e), g(this.options, t) || this.#e.getMutationCache().notify({
			type: "observerOptionsUpdated",
			mutation: this.#n,
			observer: this
		}), t?.mutationKey && this.options.mutationKey && v(t.mutationKey) !== v(this.options.mutationKey) ? this.reset() : this.#n?.state.status === "pending" && this.#n.setOptions(this.options);
	}
	onUnsubscribe() {
		this.hasListeners() || this.#n?.removeObserver(this);
	}
	onMutationUpdate(e) {
		this.#i(), this.#a(e);
	}
	getCurrentResult() {
		return this.#t;
	}
	reset() {
		this.#n?.removeObserver(this), this.#n = void 0, this.#i(), this.#a();
	}
	mutate(e, t) {
		return this.#r = t, this.#n?.removeObserver(this), this.#n = this.#e.getMutationCache().build(this.#e, this.options), this.#n.addObserver(this), this.#n.execute(e);
	}
	#i() {
		let e = this.#n?.state ?? oe();
		this.#t = {
			...e,
			isPending: e.status === "pending",
			isSuccess: e.status === "success",
			isError: e.status === "error",
			isIdle: e.status === "idle",
			mutate: this.mutate,
			reset: this.reset
		};
	}
	#a(e) {
		_.batch(() => {
			if (this.#r && this.hasListeners()) {
				let t = this.#t.variables, n = this.#t.context, r = {
					client: this.#e,
					meta: this.options.meta,
					mutationKey: this.options.mutationKey
				};
				if (e?.type === "success") {
					try {
						this.#r.onSuccess?.(e.data, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						this.#r.onSettled?.(e.data, null, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
				} else if (e?.type === "error") {
					try {
						this.#r.onError?.(e.error, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						this.#r.onSettled?.(void 0, e.error, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
				}
			}
			this.listeners.forEach((e) => {
				e(this.#t);
			});
		});
	}
}, I = /* @__PURE__ */ e(n(), 1);
function ft(e, t) {
	let n = y(t), [r] = I.useState(() => new dt(n, e));
	I.useEffect(() => {
		r.setOptions(e);
	}, [r, e]);
	let i = I.useSyncExternalStore(I.useCallback((e) => r.subscribe(_.batchCalls(e)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()), a = I.useCallback((e, t) => {
		r.mutate(e, t).catch(x);
	}, [r]);
	if (i.error && m(r.options.throwOnError, [i.error])) throw i.error;
	return {
		...i,
		mutate: a,
		mutateAsync: i.mutate
	};
}
var pt = N("chevrons-down-up", [["path", {
	d: "m7 20 5-5 5 5",
	key: "13a0gw"
}], ["path", {
	d: "m7 4 5 5 5-5",
	key: "1kwcof"
}]]), mt = N("chevrons-up-down", [["path", {
	d: "m7 15 5 5 5-5",
	key: "1hf1tw"
}], ["path", {
	d: "m7 9 5-5 5 5",
	key: "sgt6xg"
}]]), ht = N("circle-alert", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]), gt = N("circle-check", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), _t = N("circle-minus", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}], ["path", {
	d: "M8 12h8",
	key: "1wcyev"
}]]), vt = N("circle-plus", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M8 12h8",
		key: "1wcyev"
	}],
	["path", {
		d: "M12 8v8",
		key: "napkw2"
	}]
]), yt = N("corner-down-left", [["path", {
	d: "M20 4v7a4 4 0 0 1-4 4H4",
	key: "6o5b7l"
}], ["path", {
	d: "m9 10-5 5 5 5",
	key: "1kshq7"
}]]), bt = N("corner-down-right", [["path", {
	d: "m15 10 5 5-5 5",
	key: "qqa56n"
}], ["path", {
	d: "M4 4v7a4 4 0 0 0 4 4h12",
	key: "z08zvw"
}]]), xt = N("file-input", [
	["path", {
		d: "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1",
		key: "1q9hii"
	}],
	["path", {
		d: "M14 2v5a1 1 0 0 0 1 1h5",
		key: "wfsgrz"
	}],
	["path", {
		d: "M2 15h10",
		key: "jfw4w8"
	}],
	["path", {
		d: "m9 18 3-3-3-3",
		key: "112psh"
	}]
]), St = N("grid-2x2-plus", [
	["path", {
		d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",
		key: "11za1p"
	}],
	["path", {
		d: "M16 19h6",
		key: "xwg31i"
	}],
	["path", {
		d: "M19 22v-6",
		key: "qhmiwi"
	}]
]), Ct = N("id-card-lanyard", [
	["path", {
		d: "M13.5 8h-3",
		key: "xvov4w"
	}],
	["path", {
		d: "m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3",
		key: "16uttc"
	}],
	["path", {
		d: "M16.899 22A5 5 0 0 0 7.1 22",
		key: "1d0ppr"
	}],
	["path", {
		d: "m9 2 3 6",
		key: "1o7bd9"
	}],
	["circle", {
		cx: "12",
		cy: "15",
		r: "3",
		key: "g36mzq"
	}]
]), wt = N("paperclip", [["path", {
	d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
	key: "1miecu"
}]]), Tt = N("play", [["path", {
	d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
	key: "10ikf1"
}]]), Et = N("scan-text", [
	["path", {
		d: "M3 7V5a2 2 0 0 1 2-2h2",
		key: "aa7l1z"
	}],
	["path", {
		d: "M17 3h2a2 2 0 0 1 2 2v2",
		key: "4qcy5o"
	}],
	["path", {
		d: "M21 17v2a2 2 0 0 1-2 2h-2",
		key: "6vwrx8"
	}],
	["path", {
		d: "M7 21H5a2 2 0 0 1-2-2v-2",
		key: "ioqczr"
	}],
	["path", {
		d: "M7 8h8",
		key: "1jbsf9"
	}],
	["path", {
		d: "M7 12h10",
		key: "b7w52i"
	}],
	["path", {
		d: "M7 16h6",
		key: "1vyc9m"
	}]
]), Dt = N("send", [["path", {
	d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
	key: "1ffxy3"
}], ["path", {
	d: "m21.854 2.147-10.94 10.939",
	key: "12cjpa"
}]]), Ot = N("shapes", [
	["path", {
		d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",
		key: "1bo67w"
	}],
	["rect", {
		x: "3",
		y: "14",
		width: "7",
		height: "7",
		rx: "1",
		key: "1bkyp8"
	}],
	["circle", {
		cx: "17.5",
		cy: "17.5",
		r: "3.5",
		key: "w3z12y"
	}]
]), kt = N("square-code", [
	["path", {
		d: "m10 9-3 3 3 3",
		key: "1oro0q"
	}],
	["path", {
		d: "m14 15 3-3-3-3",
		key: "bz13h7"
	}],
	["rect", {
		x: "3",
		y: "3",
		width: "18",
		height: "18",
		rx: "2",
		key: "h1oib"
	}]
]), At = N("table-of-contents", [
	["path", {
		d: "M16 5H3",
		key: "m91uny"
	}],
	["path", {
		d: "M16 12H3",
		key: "1a2rj7"
	}],
	["path", {
		d: "M16 19H3",
		key: "zzsher"
	}],
	["path", {
		d: "M21 5h.01",
		key: "wa75ra"
	}],
	["path", {
		d: "M21 12h.01",
		key: "msek7k"
	}],
	["path", {
		d: "M21 19h.01",
		key: "qvbq2j"
	}]
]), jt = N("trash", [
	["path", {
		d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
		key: "miytrc"
	}],
	["path", {
		d: "M3 6h18",
		key: "d0wm0j"
	}],
	["path", {
		d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
		key: "e791ji"
	}]
]), Mt = N("unlink-2", [["path", {
	d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",
	key: "1re2ne"
}]]), Nt = N("unplug", [
	["path", {
		d: "m19 5 3-3",
		key: "yk6iyv"
	}],
	["path", {
		d: "m2 22 3-3",
		key: "19mgm9"
	}],
	["path", {
		d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",
		key: "goz73y"
	}],
	["path", {
		d: "M7.5 13.5 10 11",
		key: "7xgeeb"
	}],
	["path", {
		d: "M10.5 16.5 13 14",
		key: "10btkg"
	}],
	["path", {
		d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",
		key: "1snsnr"
	}]
]), L = le(), Pt = (e) => {
	let t = (0, I.useRef)(e);
	return t.current = e, (0, I.useEffect)(() => {
		t.current = e;
	}, [e]), t;
}, Ft = "__none", It = "__security:", Lt = (e) => e.type === "none" ? Ft : e.type === "scheme" ? `${It}${e.name}` : e.id, Rt = (e) => !e || e === "__none" ? { type: "none" } : e.startsWith("__security:") ? {
	type: "scheme",
	name: e.slice(11)
} : {
	type: "identity",
	id: e
}, zt = it()(st((e, t) => ({
	rememberedIdentity: null,
	setRememberedIdentity: (t) => e({ rememberedIdentity: t }),
	getRememberedIdentity: (e) => e.find((e) => e === t().rememberedIdentity)
}), {
	name: "identity-storage",
	storage: at(() => sessionStorage)
})), Bt = "Label", Vt = I.forwardRef((e, t) => /* @__PURE__ */ (0, L.jsx)(Ee.label, {
	...e,
	ref: t,
	onMouseDown: (t) => {
		t.target.closest("button, input, select, textarea") || (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
	}
}));
Vt.displayName = Bt;
var Ht = Vt, Ut = b("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), Wt = I.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, L.jsx)(Ht, {
	ref: n,
	className: F(Ut(), e),
	...t
}));
Wt.displayName = Ht.displayName;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-radio-group@1.3.8_@types+react-dom@19.2.3_@types+react@19.2.17__@types+_8024e0f928f835f5c189ce1d34f94e18/node_modules/@radix-ui/react-radio-group/dist/index.mjs
var Gt = "Radio", [Kt, qt] = s(Gt), [Jt, Yt] = Kt(Gt), Xt = I.forwardRef((e, t) => {
	let { __scopeRadio: n, name: r, checked: a = !1, required: s, disabled: c, value: l = "on", onCheck: u, form: d, ...f } = e, [p, m] = I.useState(null), h = tt(t, (e) => m(e)), g = I.useRef(!1), _ = p ? d || !!p.closest("form") : !0;
	return /* @__PURE__ */ (0, L.jsxs)(Jt, {
		scope: n,
		checked: a,
		disabled: c,
		children: [/* @__PURE__ */ (0, L.jsx)(o.button, {
			type: "button",
			role: "radio",
			"aria-checked": a,
			"data-state": tn(a),
			"data-disabled": c ? "" : void 0,
			disabled: c,
			value: l,
			...f,
			ref: h,
			onClick: i(e.onClick, (e) => {
				a || u?.(), _ && (g.current = e.isPropagationStopped(), g.current || e.stopPropagation());
			})
		}), _ && /* @__PURE__ */ (0, L.jsx)(en, {
			control: p,
			bubbles: !g.current,
			name: r,
			value: l,
			checked: a,
			required: s,
			disabled: c,
			form: d,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
Xt.displayName = Gt;
var Zt = "RadioIndicator", Qt = I.forwardRef((e, t) => {
	let { __scopeRadio: n, forceMount: r, ...i } = e, a = Yt(Zt, n);
	return /* @__PURE__ */ (0, L.jsx)(f, {
		present: r || a.checked,
		children: /* @__PURE__ */ (0, L.jsx)(o.span, {
			"data-state": tn(a.checked),
			"data-disabled": a.disabled ? "" : void 0,
			...i,
			ref: t
		})
	});
});
Qt.displayName = Zt;
var $t = "RadioBubbleInput", en = I.forwardRef(({ __scopeRadio: e, control: t, checked: n, bubbles: r = !0, ...i }, a) => {
	let s = I.useRef(null), c = tt(s, a), l = ke(n), u = we(t);
	return I.useEffect(() => {
		let e = s.current;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, i = Object.getOwnPropertyDescriptor(t, "checked").set;
		if (l !== n && i) {
			let t = new Event("click", { bubbles: r });
			i.call(e, n), e.dispatchEvent(t);
		}
	}, [
		l,
		n,
		r
	]), /* @__PURE__ */ (0, L.jsx)(o.input, {
		type: "radio",
		"aria-hidden": !0,
		defaultChecked: n,
		...i,
		tabIndex: -1,
		ref: c,
		style: {
			...i.style,
			...u,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0
		}
	});
});
en.displayName = $t;
function tn(e) {
	return e ? "checked" : "unchecked";
}
var nn = [
	"ArrowUp",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight"
], rn = "RadioGroup", [an, on] = s(rn, [d, qt]), sn = d(), cn = qt(), [ln, un] = an(rn), dn = I.forwardRef((e, t) => {
	let { __scopeRadioGroup: n, name: r, defaultValue: i, value: a, required: s = !1, disabled: d = !1, orientation: f, dir: p, loop: m = !0, onValueChange: h, ...g } = e, _ = sn(n), v = c(p), [y, b] = u({
		prop: a,
		defaultProp: i ?? null,
		onChange: h,
		caller: rn
	});
	return /* @__PURE__ */ (0, L.jsx)(ln, {
		scope: n,
		name: r,
		required: s,
		disabled: d,
		value: y,
		onValueChange: b,
		children: /* @__PURE__ */ (0, L.jsx)(l, {
			asChild: !0,
			..._,
			orientation: f,
			dir: v,
			loop: m,
			children: /* @__PURE__ */ (0, L.jsx)(o.div, {
				role: "radiogroup",
				"aria-required": s,
				"aria-orientation": f,
				"data-disabled": d ? "" : void 0,
				dir: v,
				...g,
				ref: t
			})
		})
	});
});
dn.displayName = rn;
var fn = "RadioGroupItem", pn = I.forwardRef((e, t) => {
	let { __scopeRadioGroup: n, disabled: r, ...a } = e, o = un(fn, n), s = o.disabled || r, c = sn(n), l = cn(n), u = I.useRef(null), d = tt(t, u), f = o.value === a.value, m = I.useRef(!1);
	return I.useEffect(() => {
		let e = (e) => {
			nn.includes(e.key) && (m.current = !0);
		}, t = () => m.current = !1;
		return document.addEventListener("keydown", e), document.addEventListener("keyup", t), () => {
			document.removeEventListener("keydown", e), document.removeEventListener("keyup", t);
		};
	}, []), /* @__PURE__ */ (0, L.jsx)(p, {
		asChild: !0,
		...c,
		focusable: !s,
		active: f,
		children: /* @__PURE__ */ (0, L.jsx)(Xt, {
			disabled: s,
			required: o.required,
			checked: f,
			...l,
			...a,
			name: o.name,
			ref: d,
			onCheck: () => o.onValueChange(a.value),
			onKeyDown: i((e) => {
				e.key === "Enter" && e.preventDefault();
			}),
			onFocus: i(a.onFocus, () => {
				m.current && u.current?.click();
			})
		})
	});
});
pn.displayName = fn;
var mn = "RadioGroupIndicator", hn = I.forwardRef((e, t) => {
	let { __scopeRadioGroup: n, ...r } = e;
	return /* @__PURE__ */ (0, L.jsx)(Qt, {
		...cn(n),
		...r,
		ref: t
	});
});
hn.displayName = mn;
var gn = dn, _n = pn, vn = hn, yn = I.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, L.jsx)(gn, {
	className: F("grid gap-2", e),
	...t,
	ref: n
}));
yn.displayName = gn.displayName;
var bn = I.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, L.jsx)(_n, {
	ref: n,
	className: F("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", e),
	...t,
	children: /* @__PURE__ */ (0, L.jsx)(vn, {
		className: "flex items-center justify-center",
		children: /* @__PURE__ */ (0, L.jsx)(S, { className: "h-2.5 w-2.5 fill-current text-current" })
	})
}));
bn.displayName = _n.displayName;
//#endregion
//#region src/lib/components/IdentitySelector.tsx
var xn = { type: "none" }, Sn = ({ identities: e, selection: t = xn, onSelectionChange: n, securitySchemes: r, securityCredentials: i, onConfigureScheme: a }) => /* @__PURE__ */ (0, L.jsx)("div", {
	className: "w-full overflow-hidden",
	children: /* @__PURE__ */ (0, L.jsxs)(yn, {
		onValueChange: (e) => n(Rt(e)),
		value: Lt(t),
		className: "gap-0",
		children: [[{
			id: Ft,
			label: "None"
		}, ...e ?? []].map((e) => /* @__PURE__ */ (0, L.jsxs)(Wt, {
			className: "h-10 items-center border-b font-normal flex gap-4 p-4 cursor-pointer hover:bg-accent/75",
			children: [/* @__PURE__ */ (0, L.jsx)(bn, {
				value: e.id,
				id: e.id
			}), /* @__PURE__ */ (0, L.jsx)("span", { children: e.label })]
		}, e.id)), r?.map((e) => {
			let t = Lt({
				type: "scheme",
				name: e.name
			}), n = i?.[e.name]?.isAuthorized ?? !1;
			return /* @__PURE__ */ (0, L.jsxs)(Wt, {
				className: "h-10 items-center border-b font-normal flex gap-4 p-4 cursor-pointer hover:bg-accent/75",
				children: [
					/* @__PURE__ */ (0, L.jsx)(bn, {
						value: t,
						id: t
					}),
					/* @__PURE__ */ (0, L.jsxs)("span", {
						className: "flex-1 truncate",
						children: [e.name, !n && /* @__PURE__ */ (0, L.jsx)("span", {
							className: "text-muted-foreground ml-1.5 text-xs",
							children: "(not configured)"
						})]
					}),
					a && /* @__PURE__ */ (0, L.jsx)(P, {
						type: "button",
						variant: "ghost",
						size: "icon-xs",
						onClick: (t) => {
							t.preventDefault(), a(e.name);
						},
						children: /* @__PURE__ */ (0, L.jsx)(w, { size: 14 })
					})
				]
			}, t);
		})]
	})
}), Cn = it()(st((e) => ({
	selectedServer: void 0,
	setSelectedServer: (t) => e({ selectedServer: t })
}), { name: "zudoku-selected-server" })), wn = (e) => {
	let { selectedServer: t, setSelectedServer: n } = Cn();
	return {
		selectedServer: (0, I.useMemo)(() => t && e.some((e) => e.url === t) ? t : e.at(0)?.url ?? "", [t, e]),
		setSelectedServer: n
	};
}, Tn = (e) => Math.abs(Number.isNaN(Number(e)) ? e.toLowerCase().charCodeAt(0) - 96 : Number.isNaN(Number(e)) ? 0 : Number(e)), En = (e) => e.length > 1 ? Number(e.split("").reduce((e, t) => `${Tn(e) + Tn(t)}`)) : Tn(e), Dn = (e, t = {}) => {
	let n = (3 * En(e) + 2 * En(e) + En(e)) % 360, { saturation: r = 75, lightness: i = 60 } = t;
	return `${n}deg ${r}% ${i}%`;
}, On = "data-linked-param", kn = (e) => {
	let { resolvedTheme: t } = Xe();
	return {
		text: Dn(e, t === "light" ? {
			saturation: 95,
			lightness: 38
		} : {}),
		background: Dn(e, t === "light" ? {
			saturation: 85,
			lightness: 40
		} : {})
	};
}, An = ({ name: e, className: t, slug: n, title: r, children: i, onClick: a }) => {
	let o = (0, I.useRef)(null), s = n?.replace(/[{}]/g, ""), { text: c, background: l } = kn(e.replace(/[{}]/g, "")), u = `hsl(${c} / 100%)`, d = `hsl(${l} / 10%)`, f = `hsl(${l} / 50%)`;
	return (0, I.useEffect)(() => {
		if (!s || !o.current) return;
		let e = () => {
			document.querySelectorAll(`[${On}="${s}"]`).forEach((e) => {
				e instanceof HTMLElement && (e.dataset.active = "true");
			});
		}, t = () => {
			document.querySelectorAll(`[${On}="${s}"]`).forEach((e) => {
				e instanceof HTMLElement && (e.dataset.active = "false");
			});
		}, n = o.current;
		return n.addEventListener("mouseenter", e), n.addEventListener("mouseleave", t), () => {
			n.removeEventListener("mouseenter", e), n.removeEventListener("mouseleave", t);
		};
	}, [s]), /* @__PURE__ */ (0, L.jsx)("span", {
		[On]: s,
		className: F("relative transition-all duration-100 rounded-lg", "border border-(--border-color) p-0.5 text-(--param-color) bg-(--background-color)", "data-[active=true]:border-(--param-color) data-[active=true]:shadow-sm data-[active=true]:bottom-px", t),
		title: r,
		suppressHydrationWarning: !0,
		ref: o,
		onClick: a,
		style: {
			"--param-color": u,
			"--border-color": f,
			"--background-color": d
		},
		children: i ?? e
	});
}, jn = ({ path: e, renderParam: t }) => {
	let n = 0;
	return e.split("/").map((e, r, i) => {
		let a = Array.from(e.matchAll(/{([^}]+)}/g)), o = [], s = 0;
		return a.forEach((r) => {
			let [i, a] = r;
			if (!a) return;
			let c = r.index;
			c > s && o.push(/* @__PURE__ */ (0, L.jsx)(I.Fragment, { children: e.slice(s, c) }, `text-${s}-${c}`)), o.push(/* @__PURE__ */ (0, L.jsx)(I.Fragment, { children: t({
				name: a,
				originalValue: i,
				index: n++
			}) }, `param-${a}`)), s = c + i.length;
		}), s < e.length && o.push(/* @__PURE__ */ (0, L.jsx)(I.Fragment, { children: e.slice(s) }, `text-${s}-${e.length}`)), /* @__PURE__ */ (0, L.jsxs)(I.Fragment, { children: [
			o,
			r < i.length - 1 && "/",
			/* @__PURE__ */ (0, L.jsx)("wbr", {})
		] }, `${e}-${r}`);
	});
}, Mn = it()(st((e) => ({
	credentials: {},
	setCredential: (t, n) => e((e) => ({ credentials: {
		...e.credentials,
		[t]: {
			value: n,
			isAuthorized: !0
		}
	} })),
	clearCredential: (t) => e((e) => {
		let { [t]: n, ...r } = e.credentials;
		return { credentials: r };
	}),
	clearAll: () => e({ credentials: {} })
}), {
	name: "zudoku-security-credentials",
	storage: at(() => sessionStorage)
})), Nn = (e, t) => e?.find((e) => e.schemes.length > 0 && e.schemes.every((e) => t[e.scheme.name]?.isAuthorized)), Pn = (e, t) => {
	let n = Nn(e, t);
	if (!n) return [];
	let r = /* @__PURE__ */ new Set();
	for (let { scheme: e } of n.schemes) switch (e.type) {
		case "apiKey":
			e.in === "header" && e.paramName && r.add(e.paramName);
			break;
		case "http":
		case "oauth2":
		case "openIdConnect":
			r.add("Authorization");
			break;
	}
	return Array.from(r);
}, Fn = (e, t) => {
	let n = Nn(e, t);
	return n ? n.schemes.flatMap(({ scheme: e }) => {
		let n = t[e.name];
		return !n || e.type !== "apiKey" || e.in !== "query" || !e.paramName ? [] : [[e.paramName, n.value]];
	}) : [];
}, In = (e, t, n) => {
	let r = Nn(t, n);
	if (r) for (let { scheme: t } of r.schemes) {
		let r = n[t.name];
		if (r) switch (t.type) {
			case "apiKey": {
				let n = r.value;
				t.in === "header" && t.paramName && e.headers.set(t.paramName, n);
				break;
			}
			case "http": {
				let n = t.scheme?.toLowerCase();
				if (n === "basic") {
					let { username: t, password: n } = r.value, i = btoa(new Uint8Array(new TextEncoder().encode(`${t}:${n}`)).reduce((e, t) => e + String.fromCharCode(t), ""));
					e.headers.set("Authorization", `Basic ${i}`);
				} else n === "bearer" && e.headers.set("Authorization", `Bearer ${r.value}`);
				break;
			}
			case "oauth2":
			case "openIdConnect":
				e.headers.set("Authorization", `Bearer ${r.value}`);
				break;
		}
	}
}, Ln = ({ scheme: e, onAuthorize: t }) => {
	let [n, r] = (0, I.useState)("");
	return /* @__PURE__ */ (0, L.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, L.jsxs)(Wt, {
			className: "text-xs text-muted-foreground",
			children: [
				e.paramName ?? "API Key",
				" (",
				e.in ?? "header",
				")"
			]
		}), /* @__PURE__ */ (0, L.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, L.jsx)(de, {
				type: "password",
				placeholder: `Enter ${e.paramName ?? "API key"}`,
				value: n,
				onChange: (e) => r(e.target.value),
				className: "flex-1"
			}), /* @__PURE__ */ (0, L.jsx)(P, {
				size: "lg",
				disabled: !n,
				onClick: () => t(n),
				children: "Authorize"
			})]
		})]
	});
}, Rn = ({ onAuthorize: e }) => {
	let [t, n] = (0, I.useState)(""), [r, i] = (0, I.useState)("");
	return /* @__PURE__ */ (0, L.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [
			/* @__PURE__ */ (0, L.jsx)(Wt, {
				className: "text-xs text-muted-foreground",
				children: "HTTP Basic"
			}),
			/* @__PURE__ */ (0, L.jsx)(de, {
				placeholder: "Username",
				value: t,
				onChange: (e) => n(e.target.value)
			}),
			/* @__PURE__ */ (0, L.jsxs)("div", {
				className: "flex gap-2",
				children: [/* @__PURE__ */ (0, L.jsx)(de, {
					type: "password",
					placeholder: "Password",
					value: r,
					onChange: (e) => i(e.target.value),
					className: "flex-1"
				}), /* @__PURE__ */ (0, L.jsx)(P, {
					size: "lg",
					disabled: !t,
					onClick: () => e({
						username: t,
						password: r
					}),
					children: "Authorize"
				})]
			})
		]
	});
}, zn = ({ scheme: e, onAuthorize: t }) => {
	let [n, r] = (0, I.useState)("");
	return /* @__PURE__ */ (0, L.jsxs)("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, L.jsxs)(Wt, {
			className: "text-xs text-muted-foreground",
			children: ["Bearer", e.bearerFormat ? ` (${e.bearerFormat})` : ""]
		}), /* @__PURE__ */ (0, L.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, L.jsx)(de, {
				type: "password",
				placeholder: "Enter bearer token",
				value: n,
				onChange: (e) => r(e.target.value),
				className: "flex-1"
			}), /* @__PURE__ */ (0, L.jsx)(P, {
				size: "lg",
				disabled: !n,
				onClick: () => t(n),
				children: "Authorize"
			})]
		})]
	});
}, Bn = (e) => {
	switch (e) {
		case "apiKey": return /* @__PURE__ */ (0, L.jsx)(We, { size: 16 });
		case "http": return /* @__PURE__ */ (0, L.jsx)(r, { size: 16 });
		case "oauth2":
		case "openIdConnect": return /* @__PURE__ */ (0, L.jsx)(Je, { size: 16 });
		default: return /* @__PURE__ */ (0, L.jsx)(r, { size: 16 });
	}
}, Vn = ({ scheme: e }) => {
	let { credentials: t, setCredential: n, clearCredential: r } = Mn(), i = t[e.name]?.isAuthorized ?? !1;
	return /* @__PURE__ */ (0, L.jsxs)("div", {
		className: "flex flex-col gap-3 p-4 border rounded-lg",
		children: [
			/* @__PURE__ */ (0, L.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, L.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						Bn(e.type),
						/* @__PURE__ */ (0, L.jsx)("span", {
							className: "font-medium text-sm",
							children: e.name
						}),
						/* @__PURE__ */ (0, L.jsx)("code", {
							className: "text-[10px] bg-muted px-1.5 py-0.5 rounded",
							children: e.type
						})
					]
				}), i && /* @__PURE__ */ (0, L.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, L.jsx)(gt, {
							size: 14,
							className: "text-muted-foreground"
						}),
						/* @__PURE__ */ (0, L.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: "Configured"
						}),
						/* @__PURE__ */ (0, L.jsx)(P, {
							variant: "ghost",
							size: "icon-xs",
							onClick: () => r(e.name),
							title: "Remove authorization",
							children: /* @__PURE__ */ (0, L.jsx)(se, { size: 14 })
						})
					]
				})]
			}),
			e.description && /* @__PURE__ */ (0, L.jsx)(lt, {
				content: e.description,
				className: "prose-xs text-xs text-muted-foreground max-w-full"
			}),
			!i && /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [
				e.type === "apiKey" && e.in !== "cookie" && /* @__PURE__ */ (0, L.jsx)(Ln, {
					scheme: e,
					onAuthorize: (t) => n(e.name, t)
				}),
				e.type === "apiKey" && e.in === "cookie" && /* @__PURE__ */ (0, L.jsx)("p", {
					className: "text-xs text-muted-foreground italic",
					children: "Cookie-based API key authentication is not supported in the browser playground due to fetch API restrictions."
				}),
				e.type === "http" && e.scheme?.toLowerCase() === "basic" && /* @__PURE__ */ (0, L.jsx)(Rn, { onAuthorize: (t) => n(e.name, t) }),
				e.type === "http" && e.scheme?.toLowerCase() === "bearer" && /* @__PURE__ */ (0, L.jsx)(zn, {
					scheme: e,
					onAuthorize: (t) => n(e.name, t)
				}),
				e.type === "http" && e.scheme?.toLowerCase() !== "basic" && e.scheme?.toLowerCase() !== "bearer" && /* @__PURE__ */ (0, L.jsxs)("p", {
					className: "text-xs text-muted-foreground italic",
					children: [
						"HTTP ",
						e.scheme,
						" authentication is not supported in the playground. Configure it via custom headers."
					]
				}),
				(e.type === "oauth2" || e.type === "openIdConnect") && /* @__PURE__ */ (0, L.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						e.type === "oauth2" ? "OAuth 2.0" : "OpenID Connect",
						" ",
						"requires a Zudoku authentication provider.",
						" ",
						/* @__PURE__ */ (0, L.jsx)("a", {
							href: "https://zudoku.dev/docs/configuration/oauth-security-schemes",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "underline hover:text-foreground",
							children: "Learn how to configure it"
						})
					]
				}),
				e.type === "mutualTLS" && /* @__PURE__ */ (0, L.jsx)("p", {
					className: "text-xs text-muted-foreground italic",
					children: "Mutual TLS is configured at the transport level."
				})
			] })
		]
	});
}, Hn = ({ securitySchemes: e, open: t, onOpenChange: n }) => e.length === 0 ? null : /* @__PURE__ */ (0, L.jsx)(ie, {
	open: t,
	onOpenChange: n,
	children: /* @__PURE__ */ (0, L.jsxs)(ee, {
		className: "max-w-lg max-h-[80vh] overflow-y-auto",
		showCloseButton: !0,
		children: [
			/* @__PURE__ */ (0, L.jsx)(T, { children: "Authorize" }),
			/* @__PURE__ */ (0, L.jsx)(C, { children: "Configure authentication for API requests. Credentials are stored in session storage and cleared when you close the browser tab." }),
			/* @__PURE__ */ (0, L.jsx)("div", {
				className: "flex flex-col gap-3",
				children: e.map((e) => /* @__PURE__ */ (0, L.jsx)(Vn, { scheme: e }, e.name))
			}),
			/* @__PURE__ */ (0, L.jsx)("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ (0, L.jsx)(P, {
					size: "lg",
					onClick: () => n(!1),
					children: "Close"
				})
			})
		]
	})
}), Un = (e) => e.type === "checkbox", Wn = (e) => e instanceof Date, R = (e) => e == null, Gn = (e) => typeof e == "object", z = (e) => !R(e) && !Array.isArray(e) && Gn(e) && !Wn(e), Kn = (e) => z(e) && e.target ? Un(e.target) ? e.target.checked : e.target.value : e, qn = (e, t) => t.split(".").some((t, n, r) => !isNaN(Number(t)) && e.has(r.slice(0, n).join("."))), Jn = (e) => {
	let t = e.constructor && e.constructor.prototype;
	return z(t) && t.hasOwnProperty("isPrototypeOf");
}, Yn = typeof window < "u" && window.HTMLElement !== void 0 && typeof document < "u";
function B(e) {
	if (e instanceof Date) return new Date(e);
	let t = typeof FileList < "u" && e instanceof FileList;
	if (Yn && (e instanceof Blob || t)) return e;
	let n = Array.isArray(e);
	if (!n && !(z(e) && Jn(e))) return e;
	let r = n ? [] : Object.create(Object.getPrototypeOf(e));
	for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = B(e[t]));
	return r;
}
var Xn = (e) => /^\w*$/.test(e), V = (e) => e === void 0, Zn = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Qn = (e) => Zn(e.replace(/["|']|\]/g, "").split(/\.|\[/)), H = (e, t, n) => {
	if (!t || !z(e)) return n;
	let r = (Xn(t) ? [t] : Qn(t)).reduce((e, t) => R(e) ? void 0 : e[t], e);
	return V(r) || r === e ? V(e[t]) ? n : e[t] : r;
}, U = (e) => typeof e == "boolean", W = (e) => typeof e == "function", G = (e, t, n) => {
	let r = -1, i = Xn(t) ? [t] : Qn(t), a = i.length, o = a - 1;
	for (; ++r < a;) {
		let t = i[r], a = n;
		if (r !== o) {
			let n = e[t];
			a = z(n) || Array.isArray(n) ? n : isNaN(+i[r + 1]) ? {} : [];
		}
		if (t === "__proto__" || t === "constructor" || t === "prototype") return;
		e[t] = a, e = e[t];
	}
}, $n = {
	BLUR: "blur",
	FOCUS_OUT: "focusout",
	CHANGE: "change",
	SUBMIT: "submit",
	TRIGGER: "trigger",
	VALID: "valid"
}, er = {
	onBlur: "onBlur",
	onChange: "onChange",
	onSubmit: "onSubmit",
	onTouched: "onTouched",
	all: "all"
}, tr = {
	max: "max",
	min: "min",
	maxLength: "maxLength",
	minLength: "minLength",
	pattern: "pattern",
	required: "required",
	validate: "validate"
}, nr = "form", rr = "root", ir = I.createContext(null);
ir.displayName = "HookFormControlContext";
var ar = () => I.useContext(ir), or = (e, t, n, r = !0) => {
	let i = {};
	for (let a in e) Object.defineProperty(i, a, { get: () => {
		let i = a;
		return t._proxyFormState[i] !== er.all && (t._proxyFormState[i] = !r || er.all), n && (n[i] = !0), e[i];
	} });
	return i;
}, sr = typeof window < "u" ? I.useLayoutEffect : I.useEffect;
function cr(e) {
	let t = ar(), { control: n = t, disabled: r, name: i, exact: a } = e || {}, [o, s] = I.useState(() => ({
		...n._formState,
		defaultValues: n._defaultValues
	})), c = I.useRef({
		isDirty: !1,
		isLoading: !1,
		dirtyFields: !1,
		touchedFields: !1,
		validatingFields: !1,
		isValidating: !1,
		isValid: !1,
		errors: !1
	});
	return sr(() => n._subscribe({
		name: i,
		formState: c.current,
		exact: a,
		callback: (e) => {
			!r && s({
				...n._formState,
				...e,
				defaultValues: n._defaultValues
			});
		}
	}), [
		i,
		r,
		a
	]), I.useEffect(() => {
		c.current.isValid && n._setValid(!0);
	}, [n]), I.useMemo(() => or(o, n, c.current, !1), [o, n]);
}
var K = (e) => typeof e == "string", lr = (e, t, n, r, i) => K(e) ? (r && t.watch.add(e), H(n, e, i)) : Array.isArray(e) ? e.map((e) => (r && t.watch.add(e), H(n, e))) : (r && (t.watchAll = !0), n), ur = (e) => R(e) || !Gn(e);
function q(e, t, n = /* @__PURE__ */ new WeakSet()) {
	if (e === t) return !0;
	if (ur(e) || ur(t)) return Object.is(e, t);
	if (Wn(e) && Wn(t)) return Object.is(e.getTime(), t.getTime());
	let r = Object.keys(e), i = Object.keys(t);
	if (r.length !== i.length) return !1;
	if (n.has(e) || n.has(t)) return !0;
	n.add(e), n.add(t);
	for (let i of r) {
		let r = e[i];
		if (!(i in t)) return !1;
		if (i !== "ref") {
			let e = t[i];
			if (Wn(r) && Wn(e) || (z(r) || Array.isArray(r)) && (z(e) || Array.isArray(e)) ? !q(r, e, n) : !Object.is(r, e)) return !1;
		}
	}
	return !0;
}
function dr(e) {
	let t = ar(), { control: n = t, name: r, defaultValue: i, disabled: a, exact: o, compute: s } = e || {}, c = I.useRef(i), l = I.useRef(s), u = I.useRef(void 0), d = I.useRef(n), f = I.useRef(r);
	l.current = s;
	let [p, m] = I.useState(() => {
		let e = n._getWatch(r, c.current);
		return l.current ? l.current(e) : e;
	}), h = I.useCallback((e) => {
		let t = lr(r, n._names, e || n._formValues, !1, c.current);
		return l.current ? l.current(t) : t;
	}, [
		n._formValues,
		n._names,
		r
	]), g = I.useCallback((e) => {
		if (!a) {
			let t = lr(r, n._names, e || n._formValues, !1, c.current);
			if (l.current) {
				let e = l.current(t);
				q(e, u.current) || (m(e), u.current = e);
			} else m(t);
		}
	}, [
		n._formValues,
		n._names,
		a,
		r
	]);
	sr(() => ((d.current !== n || !q(f.current, r)) && (d.current = n, f.current = r, g()), n._subscribe({
		name: r,
		formState: { values: !0 },
		exact: o,
		callback: (e) => {
			g(e.values);
		}
	})), [
		n,
		o,
		r,
		g
	]), I.useEffect(() => n._removeUnmounted());
	let _ = d.current !== n, v = f.current, y = I.useMemo(() => {
		if (a) return null;
		let e = !_ && !q(v, r);
		return _ || e ? h() : null;
	}, [
		a,
		_,
		r,
		v,
		h
	]);
	return y === null ? p : y;
}
function fr(e) {
	let t = ar(), { name: n, disabled: r, control: i = t, shouldUnregister: a, defaultValue: o, exact: s = !0 } = e, c = qn(i._names.array, n), l = dr({
		control: i,
		name: n,
		defaultValue: I.useMemo(() => H(i._formValues, n, H(i._defaultValues, n, o)), [
			i,
			n,
			o
		]),
		exact: s
	}), u = cr({
		control: i,
		name: n,
		exact: s
	}), d = I.useRef(e), f = I.useRef(i.register(n, {
		...e.rules,
		value: l,
		...U(e.disabled) ? { disabled: e.disabled } : {}
	}));
	d.current = e;
	let p = I.useMemo(() => Object.defineProperties({}, {
		invalid: {
			enumerable: !0,
			get: () => !!H(u.errors, n)
		},
		isDirty: {
			enumerable: !0,
			get: () => !!H(u.dirtyFields, n)
		},
		isTouched: {
			enumerable: !0,
			get: () => !!H(u.touchedFields, n)
		},
		isValidating: {
			enumerable: !0,
			get: () => !!H(u.validatingFields, n)
		},
		error: {
			enumerable: !0,
			get: () => H(u.errors, n)
		}
	}), [u, n]), m = I.useCallback((e) => f.current.onChange({
		target: {
			value: Kn(e),
			name: n
		},
		type: $n.CHANGE
	}), [n]), h = I.useCallback(() => f.current.onBlur({
		target: {
			value: H(i._formValues, n),
			name: n
		},
		type: $n.BLUR
	}), [n, i._formValues]), g = I.useCallback((e) => {
		let t = H(i._fields, n);
		t && t._f && e && (t._f.ref = {
			focus: () => W(e.focus) && e.focus(),
			select: () => W(e.select) && e.select(),
			setCustomValidity: (t) => W(e.setCustomValidity) && e.setCustomValidity(t),
			reportValidity: () => W(e.reportValidity) && e.reportValidity()
		});
	}, [i._fields, n]), _ = I.useMemo(() => ({
		name: n,
		value: l,
		...U(r) || u.disabled ? { disabled: u.disabled || r } : {},
		onChange: m,
		onBlur: h,
		ref: g
	}), [
		n,
		r,
		u.disabled,
		m,
		h,
		g,
		l
	]);
	return I.useEffect(() => {
		let e = i._options.shouldUnregister || a;
		i.register(n, {
			...d.current.rules,
			...U(d.current.disabled) ? { disabled: d.current.disabled } : {}
		});
		let t = (e, t) => {
			let n = H(i._fields, e);
			n && n._f && (n._f.mount = t);
		};
		if (t(n, !0), e) {
			let e = B(H(i._defaultValues, n, H(i._options.defaultValues, n, d.current.defaultValue)));
			G(i._defaultValues, n, e), V(H(i._formValues, n)) && G(i._formValues, n, e);
		}
		return !c && i.register(n), () => {
			(c ? e && !i._state.action : e) ? i.unregister(n) : t(n, !1);
		};
	}, [
		n,
		i,
		c,
		a
	]), I.useEffect(() => {
		i._setDisabledField({
			disabled: r,
			name: n
		});
	}, [
		r,
		n,
		i
	]), I.useMemo(() => ({
		field: _,
		formState: u,
		fieldState: p
	}), [
		_,
		u,
		p
	]);
}
var pr = (e) => e.render(fr(e)), mr = I.createContext(null);
mr.displayName = "HookFormContext";
var hr = () => I.useContext(mr), gr = (e) => {
	let { children: t, watch: n, getValues: r, getFieldState: i, setError: a, clearErrors: o, setValue: s, setValues: c, trigger: l, formState: u, resetField: d, reset: f, handleSubmit: p, unregister: m, control: h, register: g, setFocus: _, subscribe: v } = e, y = I.useMemo(() => ({
		watch: n,
		getValues: r,
		getFieldState: i,
		setError: a,
		clearErrors: o,
		setValue: s,
		setValues: c,
		trigger: l,
		formState: u,
		resetField: d,
		reset: f,
		handleSubmit: p,
		unregister: m,
		control: h,
		register: g,
		setFocus: _,
		subscribe: v
	}), [
		o,
		h,
		u,
		i,
		r,
		p,
		g,
		f,
		d,
		a,
		_,
		s,
		c,
		v,
		l,
		m,
		n
	]);
	return I.createElement(mr.Provider, { value: y }, I.createElement(ir.Provider, { value: y.control }, t));
}, _r = (e, t, n, r, i) => t ? {
	...n[e],
	types: {
		...n[e] && n[e].types ? n[e].types : {},
		[r]: i || !0
	}
} : {}, J = (e) => Array.isArray(e) ? e : [e], vr = () => {
	let e = [];
	return {
		get observers() {
			return e;
		},
		next: (t) => {
			for (let n of e) n.next && n.next(t);
		},
		subscribe: (t) => (e.push(t), { unsubscribe: () => {
			e = e.filter((e) => e !== t);
		} }),
		unsubscribe: () => {
			e = [];
		}
	};
};
function yr(e, t) {
	let n = {};
	for (let r in e) if (e.hasOwnProperty(r)) {
		let i = e[r], a = t[r];
		if (i && z(i) && a) {
			let e = yr(i, a);
			z(e) && (n[r] = e);
		} else e[r] && (n[r] = a);
	}
	return n;
}
var Y = (e) => z(e) && !Object.keys(e).length, br = (e) => e.type === "file", xr = (e) => {
	if (!Yn) return !1;
	let t = e ? e.ownerDocument : 0;
	return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Sr = (e) => e.type === "select-multiple", Cr = (e) => e.type === "radio", wr = (e) => Cr(e) || Un(e), Tr = (e) => xr(e) && e.isConnected;
function Er(e, t) {
	let n = t.slice(0, -1).length, r = 0;
	for (; r < n;) {
		if (R(e)) {
			e = void 0;
			break;
		}
		e = e[t[r]], r++;
	}
	return e;
}
function Dr(e) {
	for (let t in e) if (e.hasOwnProperty(t) && !V(e[t])) return !1;
	return !0;
}
function X(e, t) {
	if (K(t) && Object.prototype.hasOwnProperty.call(e, t)) return delete e[t], e;
	let n = Array.isArray(t) ? t : Xn(t) ? [t] : Qn(t), r = n.length === 1 ? e : Er(e, n), i = n.length - 1, a = n[i];
	return r && delete r[a], i !== 0 && (z(r) && Y(r) || Array.isArray(r) && Dr(r)) && X(e, n.slice(0, -1)), e;
}
var Or = (e) => {
	for (let t in e) if (W(e[t])) return !0;
	return !1;
};
function kr(e) {
	return Array.isArray(e) || z(e) && !Or(e);
}
function Ar(e, t = {}) {
	for (let n in e) {
		let r = e[n];
		kr(r) ? (t[n] = Array.isArray(r) ? [] : {}, Ar(r, t[n])) : V(r) || (t[n] = !0);
	}
	return t;
}
function jr(e) {
	if (e !== !1) {
		if (e === !0) return !0;
		if (Array.isArray(e)) {
			let t = e.map((e) => jr(e));
			return t.some((e) => e !== void 0) ? t : void 0;
		}
		if (z(e)) {
			let t = {};
			for (let n in e) {
				let r = jr(e[n]);
				V(r) || (t[n] = r);
			}
			return Object.keys(t).length ? t : void 0;
		}
	}
}
function Mr(e, t, n) {
	n ||= Ar(t);
	for (let r in e) {
		let i = e[r];
		if (kr(i)) V(t) || ur(n[r]) ? n[r] = Ar(i, Array.isArray(i) ? [] : {}) : Mr(i, R(t) ? {} : t[r], n[r]);
		else {
			let e = t[r];
			n[r] = !q(i, e);
		}
	}
	return jr(n) || {};
}
var Nr = {
	value: !1,
	isValid: !1
}, Pr = {
	value: !0,
	isValid: !0
}, Fr = (e) => {
	if (Array.isArray(e)) {
		if (e.length > 1) {
			let t = e.filter((e) => e && e.checked && !e.disabled).map((e) => e.value);
			return {
				value: t,
				isValid: !!t.length
			};
		}
		return e[0].checked && !e[0].disabled ? e[0].attributes && !V(e[0].attributes.value) ? V(e[0].value) || e[0].value === "" ? Pr : {
			value: e[0].value,
			isValid: !0
		} : Pr : Nr;
	}
	return Nr;
}, Ir = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => V(e) ? e : t ? e === "" ? NaN : e && +e : n && K(e) ? new Date(e) : r ? r(e) : e, Lr = {
	isValid: !1,
	value: null
}, Rr = (e) => Array.isArray(e) ? e.reduce((e, t) => t && t.checked && !t.disabled ? {
	isValid: !0,
	value: t.value
} : e, Lr) : Lr;
function zr(e) {
	let t = e.ref;
	return br(t) ? t.files : Cr(t) ? Rr(e.refs).value : Sr(t) ? [...t.selectedOptions].map(({ value: e }) => e) : Un(t) ? Fr(e.refs).value : Ir(V(t.value) ? e.ref.value : t.value, e);
}
var Br = (e, t, n, r) => {
	let i = {};
	for (let n of e) {
		let e = H(t, n);
		e && G(i, n, e._f);
	}
	return {
		criteriaMode: n,
		names: [...e],
		fields: i,
		shouldUseNativeValidation: r
	};
}, Vr = (e) => e instanceof RegExp, Hr = (e) => V(e) ? e : Vr(e) ? e.source : z(e) ? Vr(e.value) ? e.value.source : e.value : e, Ur = (e) => ({
	isOnSubmit: !e || e === er.onSubmit,
	isOnBlur: e === er.onBlur,
	isOnChange: e === er.onChange,
	isOnAll: e === er.all,
	isOnTouch: e === er.onTouched
}), Wr = "AsyncFunction", Gr = (e) => !!e && !!e.validate && !!(W(e.validate) && e.validate.constructor.name === Wr || z(e.validate) && Object.values(e.validate).find((e) => e.constructor.name === Wr)), Kr = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate), qr = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((t) => e.startsWith(t) && /^\.\w+/.test(e.slice(t.length)))), Jr = (e, t, n, r) => {
	for (let i of n || Object.keys(e)) {
		let n = H(e, i);
		if (n) {
			let { _f: e, ...a } = n;
			if (e) {
				if (e.refs && e.refs[0] && t(e.refs[0], i) && !r || e.ref && t(e.ref, e.name) && !r) return !0;
				if (Jr(a, t)) break;
			} else if (z(a) && Jr(a, t)) break;
		}
	}
};
function Yr(e, t, n) {
	let r = H(e, n);
	if (r || Xn(n)) return {
		error: r,
		name: n
	};
	let i = n.split(".");
	for (; i.length;) {
		let r = i.join("."), a = H(t, r), o = H(e, r);
		if (a && !Array.isArray(a) && n !== r) return { name: n };
		if (o && o.type) return {
			name: r,
			error: o
		};
		if (o && o.root && o.root.type) return {
			name: `${r}.root`,
			error: o.root
		};
		i.pop();
	}
	return { name: n };
}
var Xr = (e, t, n, r) => {
	n(e);
	let { name: i, ...a } = e;
	return Y(a) || r && Object.keys(a).length >= Object.keys(t).length || Object.keys(a).find((e) => t[e] === (!r || er.all));
}, Zr = (e, t, n) => !e || !t || e === t || J(e).some((e) => e && (n ? e === t : e.startsWith(t) || t.startsWith(e))), Qr = (e, t, n, r, i) => i.isOnAll ? !1 : !n && i.isOnTouch ? !(t || e) : (n ? r.isOnBlur : i.isOnBlur) ? !e : (n ? r.isOnChange : i.isOnChange) ? e : !0, $r = (e, t) => !Zn(H(e, t)).length && X(e, t), ei = (e, t, n) => {
	let r = J(H(e, n));
	return G(r, rr, t[n]), G(e, n, r), e;
};
function ti(e, t, n = "validate") {
	if (K(e) || Array.isArray(e) && e.every(K) || U(e) && !e) return {
		type: n,
		message: K(e) ? e : "",
		ref: t
	};
}
var ni = (e) => z(e) && !Vr(e) ? e : {
	value: e,
	message: ""
}, ri = async (e, t, n, r, i, a) => {
	let { ref: o, refs: s, required: c, maxLength: l, minLength: u, min: d, max: f, pattern: p, validate: m, name: h, valueAsNumber: g, mount: _ } = e._f, v = H(n, h);
	if (!_ || t.has(h)) return {};
	let y = s ? s[0] : o, b = (e) => {
		i && y.reportValidity && (y.setCustomValidity(U(e) ? "" : e || ""), y.reportValidity());
	}, x = {}, S = Cr(o), C = Un(o), w = S || C, T = (g || br(o)) && V(o.value) && V(v) || xr(o) && o.value === "" || v === "" || Array.isArray(v) && !v.length, E = _r.bind(null, h, r, x), D = (e, t, n, r = tr.maxLength, i = tr.minLength) => {
		let a = e ? t : n;
		x[h] = {
			type: e ? r : i,
			message: a,
			ref: o,
			...E(e ? r : i, a)
		};
	};
	if (a ? !Array.isArray(v) || !v.length : c && (!w && (T || R(v)) || U(v) && !v || C && !Fr(s).isValid || S && !Rr(s).isValid)) {
		let { value: e, message: t } = K(c) ? {
			value: !!c,
			message: c
		} : ni(c);
		if (e && (x[h] = {
			type: tr.required,
			message: t,
			ref: y,
			...E(tr.required, t)
		}, !r)) return b(t), x;
	}
	if (!T && (!R(d) || !R(f))) {
		let e, t, n = ni(f), i = ni(d);
		if (!R(v) && !isNaN(v)) {
			let r = o.valueAsNumber || v && +v;
			R(n.value) || (e = r > n.value), R(i.value) || (t = r < i.value);
		} else {
			let r = o.valueAsDate || new Date(v), a = (e) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + e), s = o.type == "time", c = o.type == "week";
			K(n.value) && v && (e = s ? a(v) > a(n.value) : c ? v > n.value : r > new Date(n.value)), K(i.value) && v && (t = s ? a(v) < a(i.value) : c ? v < i.value : r < new Date(i.value));
		}
		if ((e || t) && (D(!!e, n.message, i.message, tr.max, tr.min), !r)) return b(x[h].message), x;
	}
	if ((l || u) && !T && (K(v) || a && Array.isArray(v))) {
		let e = ni(l), t = ni(u), n = !R(e.value) && v.length > +e.value, i = !R(t.value) && v.length < +t.value;
		if ((n || i) && (D(n, e.message, t.message), !r)) return b(x[h].message), x;
	}
	if (p && !T && K(v)) {
		let { value: e, message: t } = ni(p);
		if (Vr(e) && !v.match(e) && (x[h] = {
			type: tr.pattern,
			message: t,
			ref: o,
			...E(tr.pattern, t)
		}, !r)) return b(t), x;
	}
	if (m) {
		if (W(m)) {
			let e = ti(await m(v, n), y);
			if (e && (x[h] = {
				...e,
				...E(tr.validate, e.message)
			}, !r)) return b(e.message), x;
		} else if (z(m)) {
			let e = {};
			for (let t in m) {
				if (!Y(e) && !r) break;
				let i = ti(await m[t](v, n), y, t);
				i && (e = {
					...i,
					...E(t, i.message)
				}, b(i.message), r && (x[h] = e));
			}
			if (!Y(e) && (x[h] = {
				ref: y,
				...e
			}, !r)) return x;
		}
	}
	return b(!0), x;
}, ii = {
	mode: er.onSubmit,
	reValidateMode: er.onChange,
	shouldFocusError: !0
}, ai = {
	submitCount: 0,
	isDirty: !1,
	isReady: !1,
	isValidating: !1,
	isSubmitted: !1,
	isSubmitting: !1,
	isSubmitSuccessful: !1,
	isValid: !1,
	touchedFields: {},
	dirtyFields: {},
	validatingFields: {}
};
function oi(e = {}) {
	let t = {
		...ii,
		...e
	}, n = {
		...B(ai),
		isLoading: W(t.defaultValues),
		errors: t.errors || {},
		disabled: t.disabled || !1
	}, r = {}, i = (z(t.defaultValues) || z(t.values)) && B(t.defaultValues || t.values) || {}, a = t.shouldUnregister ? {} : B(i), o = {
		action: !1,
		mount: !1,
		watch: !1,
		keepIsValid: !1
	}, s = {
		mount: /* @__PURE__ */ new Set(),
		disabled: /* @__PURE__ */ new Set(),
		unMount: /* @__PURE__ */ new Set(),
		array: /* @__PURE__ */ new Set(),
		watch: /* @__PURE__ */ new Set(),
		registerName: /* @__PURE__ */ new Set()
	}, c, l = 0, u = {
		isDirty: !1,
		dirtyFields: !1,
		validatingFields: !1,
		touchedFields: !1,
		isValidating: !1,
		isValid: !1,
		errors: !1
	}, d = { ...u }, f = { ...d }, p = {
		array: vr(),
		state: vr()
	}, m = t.criteriaMode === er.all, h = (e) => (t) => {
		clearTimeout(l), l = setTimeout(e, t);
	}, g = async (e) => {
		if (!o.keepIsValid && !t.disabled && (d.isValid || f.isValid || e)) {
			let e;
			t.resolver ? (e = Y((await E()).errors), _()) : e = await te({
				fields: r,
				onlyCheckValid: !0,
				eventType: $n.VALID
			}), e !== n.isValid && p.state.next({ isValid: e });
		}
	}, _ = (e, r) => {
		!t.disabled && (d.isValidating || d.validatingFields || f.isValidating || f.validatingFields) && ((e || Array.from(s.mount)).forEach((e) => {
			e && (r ? G(n.validatingFields, e, r) : X(n.validatingFields, e));
		}), p.state.next({
			validatingFields: n.validatingFields,
			isValidating: !Y(n.validatingFields)
		}));
	}, v = () => {
		n.dirtyFields = Mr(i, a);
	}, y = (e, i = [], s, c, l = !0, u = !0) => {
		if (c && s && !t.disabled) {
			if (o.action = !0, u && Array.isArray(H(r, e))) {
				let t = s(H(r, e), c.argA, c.argB);
				l && G(r, e, t);
			}
			if (u && Array.isArray(H(n.errors, e))) {
				let t = s(H(n.errors, e), c.argA, c.argB);
				l && G(n.errors, e, t), $r(n.errors, e);
			}
			if ((d.touchedFields || f.touchedFields) && u && Array.isArray(H(n.touchedFields, e))) {
				let t = s(H(n.touchedFields, e), c.argA, c.argB);
				l && G(n.touchedFields, e, t);
			}
			(d.dirtyFields || f.dirtyFields) && v(), p.state.next({
				name: e,
				isDirty: O(e, i),
				dirtyFields: n.dirtyFields,
				errors: n.errors,
				isValid: n.isValid
			});
		} else G(a, e, i);
	}, b = (e, t) => {
		G(n.errors, e, t), p.state.next({ errors: n.errors });
	}, x = (e) => {
		n.errors = e, p.state.next({
			errors: n.errors,
			isValid: !1
		});
	}, S = (e) => {
		let t = Xn(e) ? [e] : Qn(e), n = a, r = i;
		for (let e = 0; e < t.length - 1; e++) {
			let i = t[e];
			if (n = R(n) ? n : n[i], r = R(r) ? r : r[i], n === null && r !== null) return !0;
		}
		return !1;
	}, C = (e, t, s, c) => {
		let l = H(r, e);
		if (l) {
			if (S(e)) return;
			let r = V(H(a, e)), u = H(a, e, V(s) ? H(i, e) : s);
			V(u) || c && c.defaultChecked || t ? G(a, e, t ? u : zr(l._f)) : ie(e, u), o.mount && !o.action && (g(), r && n.isDirty && (d.isDirty || f.isDirty) && (O() || (n.isDirty = !1, p.state.next({ ...n }))));
		}
	}, w = (e, r, o, s, c) => {
		let l = !1, u = !1, m = { name: e };
		if (!t.disabled) {
			if (!o || s) {
				(d.isDirty || f.isDirty) && (u = n.isDirty, n.isDirty = m.isDirty = O(), l = u !== m.isDirty);
				let t = q(H(i, e), r);
				u = !!H(n.dirtyFields, e), t === n.isDirty ? t ? X(n.dirtyFields, e) : G(n.dirtyFields, e, !0) : n.dirtyFields = Mr(i, a), m.dirtyFields = n.dirtyFields, l ||= (d.dirtyFields || f.dirtyFields) && u !== !t;
			}
			if (o) {
				let t = H(n.touchedFields, e);
				t || (G(n.touchedFields, e, o), m.touchedFields = n.touchedFields, l ||= (d.touchedFields || f.touchedFields) && t !== o);
			}
			l && c && p.state.next(m);
		}
		return l ? m : {};
	}, T = (e, r, i, a) => {
		let o = H(n.errors, e), s = (d.isValid || f.isValid) && U(r) && n.isValid !== r;
		if (t.delayError && i ? (c = h(() => b(e, i)), c(t.delayError)) : (clearTimeout(l), c = null, i ? G(n.errors, e, i) : X(n.errors, e)), (i ? !q(o, i) : o) || !Y(a) || s) {
			let t = {
				...a,
				...s && U(r) ? { isValid: r } : {},
				errors: n.errors,
				name: e
			};
			n = {
				...n,
				...t
			}, p.state.next(t);
		}
	}, E = async (e) => (_(e, !0), await t.resolver(a, t.context, Br(e || s.mount, r, t.criteriaMode, t.shouldUseNativeValidation))), D = async (e) => {
		let { errors: t } = await E(e);
		if (_(e), e) for (let r of e) {
			let e = H(t, r);
			e ? s.array.has(r) && z(e) ? ei(n.errors, { [r]: e }, r) : G(n.errors, r, e) : X(n.errors, r);
		}
		else n.errors = t;
		return t;
	}, ee = async ({ name: t, eventType: r }) => {
		if (e.validate) {
			let i = await e.validate({
				formValues: a,
				formState: n,
				name: t,
				eventType: r
			});
			if (z(i)) for (let e in i) {
				let t = i[e];
				t && A(`${nr}.${e}`, {
					message: K(t.message) ? t.message : "",
					type: t.type || tr.validate
				});
			}
			else K(i) || !i ? A(nr, {
				message: i || "",
				type: tr.validate
			}) : me(nr);
			return i;
		}
		return !0;
	}, te = async ({ fields: r, onlyCheckValid: i, name: o, eventType: c, context: l = {
		valid: !0,
		runRootValidation: !1
	} }) => {
		if (e.validate && (l.runRootValidation = !0, !await ee({
			name: o,
			eventType: c
		}) && (l.valid = !1, i))) return l.valid;
		for (let o in r) {
			let u = r[o];
			if (u) {
				let { _f: r, ...p } = u;
				if (r) {
					let o = s.array.has(r.name), c = u._f && Gr(u._f), p = d.validatingFields || d.isValidating || f.validatingFields || f.isValidating;
					c && p && _([r.name], !0);
					let h = await ri(u, s.disabled, a, m, t.shouldUseNativeValidation && !i, o);
					if (c && p && _([r.name]), h[r.name] && (l.valid = !1, i) || (!i && (H(h, r.name) ? o ? ei(n.errors, h, r.name) : G(n.errors, r.name, h[r.name]) : X(n.errors, r.name)), e.shouldUseNativeValidation && h[r.name])) break;
				}
				!Y(p) && await te({
					context: l,
					onlyCheckValid: i,
					fields: p,
					name: o,
					eventType: c
				});
			}
		}
		return l.valid;
	}, ne = () => {
		for (let e of s.unMount) {
			let t = H(r, e);
			t && (t._f.refs ? t._f.refs.every((e) => !Tr(e)) : !Tr(t._f.ref)) && ve(e);
		}
		s.unMount = /* @__PURE__ */ new Set();
	}, O = (e, n) => !t.disabled && (e && n && G(a, e, n), !q(fe(), i)), k = (e, t, n) => lr(e, s, { ...o.mount ? a : V(t) ? i : K(e) ? { [e]: t } : t }, n, t), re = (e) => Zn(H(o.mount ? a : i, e, t.shouldUnregister ? H(i, e, []) : [])), ie = (e, t, n = {}, i = !1) => {
		let o = H(r, e), s = t;
		if (o) {
			let n = o._f;
			n && (!n.disabled && G(a, e, Ir(t, n)), s = xr(n.ref) && R(t) ? "" : t, Sr(n.ref) ? [...n.ref.options].forEach((e) => e.selected = s.includes(e.value)) : n.refs ? Un(n.ref) ? n.refs.forEach((e) => {
				(!e.defaultChecked || !e.disabled) && (Array.isArray(s) ? e.checked = !!s.find((t) => t === e.value) : e.checked = s === e.value || !!s);
			}) : n.refs.forEach((e) => e.checked = e.value === s) : br(n.ref) ? n.ref.value = "" : (n.ref.value = s, n.ref.type || p.state.next({
				name: e,
				values: i ? a : B(a)
			})));
		}
		(n.shouldDirty || n.shouldTouch) && w(e, s, n.shouldTouch, n.shouldDirty, !0), n.shouldValidate && de(e);
	}, ae = (e, t, n, i = !1) => {
		for (let a in t) {
			if (!t.hasOwnProperty(a)) return;
			let o = t[a], c = e + "." + a, l = H(r, c);
			(s.array.has(e) || z(o) || l && !l._f) && !Wn(o) ? ae(c, o, n, i) : ie(c, o, n, i);
		}
	}, oe = (e, t, i, c) => {
		let l = H(r, e), u = s.array.has(e), m = c ? t : B(t), h = q(H(a, e), m);
		if (h || G(a, e, m), u) p.array.next({
			name: e,
			values: c ? a : B(a)
		}), (d.isDirty || d.dirtyFields || f.isDirty || f.dirtyFields) && i.shouldDirty && (v(), p.state.next({
			name: e,
			dirtyFields: n.dirtyFields,
			isDirty: O(e, m)
		}));
		else {
			let t = Array.isArray(m) && !m.length || Y(m);
			!l || l._f || R(m) || t ? ie(e, m, i, c) : ae(e, m, i, c);
		}
		if (!h) {
			let t = qr(e, s), r = c ? a : B(a);
			p.state.next({
				...t && n,
				name: o.mount || t ? e : void 0,
				values: r
			});
		}
	}, se = (e, t, n = {}) => oe(e, t, n, !1), ce = (e, t = {}) => {
		let r = W(e) ? e(a) : e;
		if (!q(a, r)) {
			a = {
				...a,
				...r
			};
			for (let e of s.mount) oe(e, H(r, e), t, !0);
			p.state.next({
				...n,
				name: void 0,
				type: void 0,
				values: a
			}), t.shouldValidate && g();
		}
	}, le = async (i) => {
		o.mount = !0;
		let l = i.target, u = l.name, h = !0, v = H(r, u), y = (e) => {
			h = Number.isNaN(e) || Wn(e) && isNaN(e.getTime()) || q(e, H(a, u, e));
		}, b = Ur(t.mode), x = Ur(t.reValidateMode);
		if (v) {
			let o, S, C = l.type ? zr(v._f) : Kn(i), D = i.type === $n.BLUR || i.type === $n.FOCUS_OUT, ne = !Kr(v._f) && !e.validate && !t.resolver && !H(n.errors, u) && !v._f.deps || Qr(D, H(n.touchedFields, u), n.isSubmitted, x, b), O = qr(u, s, D);
			G(a, u, C), D ? (!l || !l.readOnly) && (v._f.onBlur && v._f.onBlur(i), c && c(0)) : v._f.onChange && v._f.onChange(i);
			let k = w(u, C, D), re = !Y(k) || O;
			if (!D && p.state.next({
				name: u,
				type: i.type,
				values: B(a)
			}), ne) return (d.isValid || f.isValid) && (t.mode === "onBlur" ? D && g() : D || g()), re && p.state.next({
				name: u,
				...O ? {} : k
			});
			if (!t.resolver && e.validate && await ee({
				name: u,
				eventType: i.type
			}), !D && O && p.state.next({ ...n }), t.resolver) {
				let { errors: e } = await E([u]);
				if (_([u]), y(C), h) {
					let t = Yr(n.errors, r, u), i = Yr(e, r, t.name || u);
					o = i.error, u = i.name, S = Y(e);
				}
			} else _([u], !0), o = (await ri(v, s.disabled, a, m, t.shouldUseNativeValidation))[u], _([u]), y(C), h && (o ? S = !1 : (d.isValid || f.isValid) && (S = await te({
				fields: r,
				onlyCheckValid: !0,
				name: u,
				eventType: i.type
			})));
			h && (v._f.deps && (!Array.isArray(v._f.deps) || v._f.deps.length > 0) && de(v._f.deps), T(u, S, o, k));
		}
	}, ue = (e, t) => {
		if (H(n.errors, t) && e.focus) return e.focus(), 1;
	}, de = async (e, i = {}) => {
		let a, o, c = J(e);
		if (t.resolver) {
			let t = await D(V(e) ? e : c);
			a = Y(t), o = e ? !c.some((e) => H(t, e)) : a;
		} else e ? (o = (await Promise.all(c.map(async (e) => {
			let t = H(r, e);
			return await te({
				fields: t && t._f ? { [e]: t } : t,
				eventType: $n.TRIGGER
			});
		}))).every(Boolean), !(!o && !n.isValid) && g()) : o = a = await te({
			fields: r,
			name: e,
			eventType: $n.TRIGGER
		});
		return p.state.next({
			...!K(e) || (d.isValid || f.isValid) && a !== n.isValid ? {} : { name: e },
			...t.resolver || !e ? { isValid: a } : {},
			errors: n.errors
		}), i.shouldFocus && !o && Jr(r, ue, e ? c : s.mount), o;
	}, fe = (e, t) => {
		let r = { ...o.mount ? a : i };
		return t && (r = yr(t.dirtyFields ? n.dirtyFields : n.touchedFields, r)), V(e) ? r : K(e) ? H(r, e) : e.map((e) => H(r, e));
	}, pe = (e, t) => ({
		invalid: !!H((t || n).errors, e),
		isDirty: !!H((t || n).dirtyFields, e),
		error: H((t || n).errors, e),
		isValidating: !!H(n.validatingFields, e),
		isTouched: !!H((t || n).touchedFields, e)
	}), me = (e) => {
		let t = e ? J(e) : void 0;
		t?.forEach((e) => X(n.errors, e)), t ? t.forEach((e) => {
			p.state.next({
				name: e,
				errors: n.errors
			});
		}) : p.state.next({ errors: {} });
	}, A = (e, t, i) => {
		let a = (H(r, e, { _f: {} })._f || {}).ref, { ref: o, message: s, type: c, ...l } = H(n.errors, e) || {};
		G(n.errors, e, {
			...l,
			...t,
			ref: a
		}), p.state.next({
			name: e,
			errors: n.errors,
			isValid: !1
		}), i && i.shouldFocus && a && a.focus && a.focus();
	}, he = (e, t) => W(e) ? p.state.subscribe({ next: (n) => "values" in n && e(n.values || k(void 0, t), n) }) : k(e, t, !0), ge = (e) => p.state.subscribe({ next: (t) => {
		if (Zr(e.name, t.name, e.exact) && Xr(t, e.formState || d, Te, e.reRenderRoot)) {
			let r = { ...a };
			e.callback({
				values: r,
				...n,
				...t,
				defaultValues: i
			});
		}
	} }).unsubscribe, _e = (e) => (o.mount = !0, f = {
		...f,
		...e.formState
	}, ge({
		...e,
		formState: {
			...u,
			...e.formState
		}
	})), ve = (e, o = {}) => {
		for (let c of e ? J(e) : s.mount) s.mount.delete(c), s.array.delete(c), o.keepValue || (X(r, c), X(a, c)), !o.keepError && X(n.errors, c), !o.keepDirty && X(n.dirtyFields, c), !o.keepTouched && X(n.touchedFields, c), !o.keepIsValidating && X(n.validatingFields, c), !t.shouldUnregister && !o.keepDefaultValue && X(i, c);
		p.state.next({ values: B(a) }), p.state.next({
			...n,
			...o.keepDirty ? { isDirty: O() } : {}
		}), !o.keepIsValid && g();
	}, j = ({ disabled: e, name: t }) => {
		if (U(e) && o.mount || e || s.disabled.has(t)) {
			let n = s.disabled.has(t) !== !!e;
			e ? s.disabled.add(t) : s.disabled.delete(t), n && o.mount && !o.action && g();
		}
	}, M = (e, n = {}) => {
		let a = H(r, e), c = U(n.disabled) || U(t.disabled), l = !s.registerName.has(e) && a && a._f && !a._f.mount;
		return G(r, e, {
			...a || {},
			_f: {
				...a && a._f ? a._f : { ref: { name: e } },
				name: e,
				mount: !0,
				...n
			}
		}), s.mount.add(e), a && !l ? j({
			disabled: U(n.disabled) ? n.disabled : t.disabled,
			name: e
		}) : C(e, !0, n.value), {
			...c ? { disabled: n.disabled || t.disabled } : {},
			...t.progressive ? {
				required: !!n.required,
				min: Hr(n.min),
				max: Hr(n.max),
				minLength: Hr(n.minLength),
				maxLength: Hr(n.maxLength),
				pattern: Hr(n.pattern)
			} : {},
			name: e,
			onChange: le,
			onBlur: le,
			ref: (c) => {
				if (c) {
					s.registerName.add(e), M(e, n), s.registerName.delete(e), a = H(r, e);
					let t = V(c.value) && c.querySelectorAll && c.querySelectorAll("input,select,textarea")[0] || c, o = wr(t), l = a._f.refs || [];
					if (o ? l.find((e) => e === t) : t === a._f.ref) return;
					G(r, e, { _f: {
						...a._f,
						...o ? {
							refs: [
								...l.filter(Tr),
								t,
								...Array.isArray(H(i, e)) ? [{}] : []
							],
							ref: {
								type: t.type,
								name: e
							}
						} : { ref: t }
					} }), C(e, !1, void 0, t);
				} else a = H(r, e, {}), a._f && (a._f.mount = !1), (t.shouldUnregister || n.shouldUnregister) && !(qn(s.array, e) && o.action) && s.unMount.add(e);
			}
		};
	}, ye = () => t.shouldFocusError && !t.shouldUseNativeValidation && Jr(r, ue, s.mount), N = (e) => {
		U(e) && (p.state.next({ disabled: e }), Jr(r, (t, n) => {
			let i = H(r, n);
			i && (t.disabled = i._f.disabled || e, Array.isArray(i._f.refs) && i._f.refs.forEach((t) => {
				t.disabled = i._f.disabled || e;
			}));
		}, 0, !1));
	}, be = (e, i) => async (o) => {
		let c;
		o && (o.preventDefault && o.preventDefault(), o.persist && o.persist());
		let l = B(a);
		if (p.state.next({ isSubmitting: !0 }), t.resolver) {
			let { errors: e, values: t } = await E();
			_(), n.errors = e, l = B(t);
		} else await te({
			fields: r,
			eventType: $n.SUBMIT
		});
		if (s.disabled.size) for (let e of s.disabled) X(l, e);
		if (X(n.errors, rr), Y(n.errors)) {
			p.state.next({ errors: {} });
			try {
				await e(l, o);
			} catch (e) {
				c = e;
			}
		} else i && await i({ ...n.errors }, o), ye(), setTimeout(ye);
		if (p.state.next({
			isSubmitted: !0,
			isSubmitting: !1,
			isSubmitSuccessful: Y(n.errors) && !c,
			submitCount: n.submitCount + 1,
			errors: n.errors
		}), c) throw c;
	}, xe = (e, t = {}) => {
		H(r, e) && (V(t.defaultValue) ? se(e, B(H(i, e))) : (se(e, t.defaultValue), G(i, e, B(t.defaultValue))), t.keepTouched || X(n.touchedFields, e), t.keepDirty || (X(n.dirtyFields, e), n.isDirty = t.defaultValue ? O(e, B(H(i, e))) : O()), t.keepError || (X(n.errors, e), d.isValid && g()), p.state.next({ ...n }));
	}, Se = (e, c = {}) => {
		let l = e ? B(e) : i, u = B(l), f = Y(e), m = f ? i : u;
		if (c.keepDefaultValues || (i = l), !c.keepValues) {
			if (c.keepDirtyValues) {
				let e = new Set([...s.mount, ...Object.keys(Mr(i, a))]);
				for (let t of Array.from(e)) {
					let e = H(n.dirtyFields, t), r = H(a, t), i = H(m, t);
					e && !V(r) ? G(m, t, r) : !e && !V(i) && se(t, i);
				}
			} else {
				if (Yn && V(e)) for (let e of s.mount) {
					let t = H(r, e);
					if (t && t._f) {
						let e = Array.isArray(t._f.refs) ? t._f.refs[0] : t._f.ref;
						if (xr(e)) {
							let t = e.closest("form");
							if (t) {
								t.reset();
								break;
							}
						}
					}
				}
				if (c.keepFieldsRef) for (let e of s.mount) se(e, H(m, e));
				else r = {};
			}
			a = t.shouldUnregister ? c.keepDefaultValues ? B(i) : {} : B(m), p.array.next({ values: { ...m } }), p.state.next({ values: { ...m } });
		}
		s = {
			mount: c.keepDirtyValues ? s.mount : /* @__PURE__ */ new Set(),
			unMount: /* @__PURE__ */ new Set(),
			array: /* @__PURE__ */ new Set(),
			registerName: /* @__PURE__ */ new Set(),
			disabled: /* @__PURE__ */ new Set(),
			watch: /* @__PURE__ */ new Set(),
			watchAll: !1,
			focus: ""
		}, o.mount = !d.isValid || !!c.keepIsValid || !!c.keepDirtyValues || !t.shouldUnregister && !Y(m), o.watch = !!t.shouldUnregister, o.keepIsValid = !!c.keepIsValid, o.action = !1, c.keepErrors || (n.errors = {}), p.state.next({
			submitCount: c.keepSubmitCount ? n.submitCount : 0,
			isDirty: f ? !1 : c.keepDirty ? n.isDirty : !!(c.keepDefaultValues && !q(e, i)),
			isSubmitted: c.keepIsSubmitted ? n.isSubmitted : !1,
			dirtyFields: f ? {} : c.keepDirtyValues ? c.keepDefaultValues && a ? Mr(i, a) : n.dirtyFields : c.keepDefaultValues && e ? Mr(i, e) : c.keepDirty ? n.dirtyFields : {},
			touchedFields: c.keepTouched ? n.touchedFields : {},
			errors: c.keepErrors ? n.errors : {},
			isSubmitSuccessful: c.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
			isSubmitting: !1,
			defaultValues: i
		});
	}, Ce = (e, n) => Se(W(e) ? e(a) : e, {
		...t.resetOptions,
		...n
	}), we = (e, t = {}) => {
		let n = H(r, e), i = n && n._f;
		if (i) {
			let e = i.refs ? i.refs[0] : i.ref;
			e.focus && setTimeout(() => {
				e.focus(), t.shouldSelect && W(e.select) && e.select();
			});
		}
	}, Te = (e) => {
		n = {
			...n,
			...e
		};
	}, Ee = {
		control: {
			register: M,
			unregister: ve,
			getFieldState: pe,
			handleSubmit: be,
			setError: A,
			_subscribe: ge,
			_runSchema: E,
			_updateIsValidating: _,
			_focusError: ye,
			_getWatch: k,
			_getDirty: O,
			_setValid: g,
			_setFieldArray: y,
			_setDisabledField: j,
			_setErrors: x,
			_getFieldArray: re,
			_reset: Se,
			_resetDefaultValues: () => W(t.defaultValues) && t.defaultValues().then((e) => {
				Ce(e, t.resetOptions), p.state.next({ isLoading: !1 });
			}),
			_removeUnmounted: ne,
			_disableForm: N,
			_subjects: p,
			_proxyFormState: d,
			get _fields() {
				return r;
			},
			get _formValues() {
				return a;
			},
			get _state() {
				return o;
			},
			set _state(e) {
				o = e;
			},
			get _defaultValues() {
				return i;
			},
			get _names() {
				return s;
			},
			set _names(e) {
				s = e;
			},
			get _formState() {
				return n;
			},
			get _options() {
				return t;
			},
			set _options(e) {
				t = {
					...t,
					...e
				};
			}
		},
		subscribe: _e,
		trigger: de,
		register: M,
		handleSubmit: be,
		watch: he,
		setValue: se,
		setValues: ce,
		getValues: fe,
		reset: Ce,
		resetField: xe,
		clearErrors: me,
		unregister: ve,
		setError: A,
		setFocus: we,
		getFieldState: pe
	};
	return {
		...Ee,
		formControl: Ee
	};
}
var si = () => {
	if (typeof crypto < "u" && crypto.randomUUID) return crypto.randomUUID();
	let e = typeof performance > "u" ? Date.now() : performance.now() * 1e3;
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t) => {
		let n = (Math.random() * 16 + e) % 16 | 0;
		return (t == "x" ? n : n & 3 | 8).toString(16);
	});
}, ci = (e, t, n = {}) => n.shouldFocus || V(n.shouldFocus) ? n.focusName || `${e}.${V(n.focusIndex) ? t : n.focusIndex}.` : "", li = (e, t) => [...e, ...J(t)], ui = (e) => Array.isArray(e) ? e.map(() => void 0) : void 0;
function di(e, t, n) {
	return [
		...e.slice(0, t),
		...J(n),
		...e.slice(t)
	];
}
var fi = (e, t, n) => Array.isArray(e) ? (V(e[n]) && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]), e) : [], pi = (e, t) => [...J(t), ...J(e)];
function mi(e, t) {
	let n = 0, r = [...e];
	for (let e of t) r.splice(e - n, 1), n++;
	return Zn(r).length ? r : [];
}
var hi = (e, t) => V(t) ? [] : mi(e, J(t).sort((e, t) => e - t)), gi = (e, t, n) => {
	[e[t], e[n]] = [e[n], e[t]];
}, _i = (e, t, n) => (e[t] = n, e);
function vi(e) {
	let t = ar(), { control: n = t, name: r, keyName: i = "id", shouldUnregister: a, rules: o } = e, [s, c] = I.useState(n._getFieldArray(r)), l = I.useRef(n._getFieldArray(r).map(si)), u = I.useRef(!1);
	n._names.array.add(r), I.useMemo(() => o && s.length >= 0 && n.register(r, o), [
		n,
		r,
		s.length,
		o
	]), sr(() => n._subjects.array.subscribe({ next: ({ values: e, name: t }) => {
		if (t === r || !t) {
			let t = H(e, r);
			Array.isArray(t) && (c(t), l.current = t.map(si));
		}
	} }).unsubscribe, [n, r]);
	let d = I.useCallback((e) => {
		u.current = !0, n._setFieldArray(r, e);
	}, [n, r]);
	return I.useEffect(() => {
		n._state.action = !1, qr(r, n._names) && n._subjects.state.next({ ...n._formState });
		let e = Ur(n._options.mode);
		if (u.current && (!e.isOnSubmit || n._formState.isSubmitted) && !Ur(n._options.reValidateMode).isOnSubmit && !e.isOnBlur) if (n._options.resolver) n._runSchema([r]).then((e) => {
			n._updateIsValidating([r]);
			let t = H(e.errors, r), i = H(n._formState.errors, r);
			(i ? !t && i.type || t && (i.type !== t.type || i.message !== t.message) : t && t.type) && (t ? G(n._formState.errors, r, t) : X(n._formState.errors, r), n._subjects.state.next({ errors: n._formState.errors }));
		});
		else {
			let e = H(n._fields, r);
			e && e._f && !(Ur(n._options.reValidateMode).isOnSubmit && Ur(n._options.mode).isOnSubmit) && ri(e, n._names.disabled, n._formValues, n._options.criteriaMode === er.all, n._options.shouldUseNativeValidation, !0).then((e) => !Y(e) && n._subjects.state.next({ errors: ei(n._formState.errors, e, r) }));
		}
		n._subjects.state.next({
			name: r,
			values: B(n._formValues)
		}), n._names.focus && Jr(n._fields, (e, t) => {
			if (n._names.focus && t.startsWith(n._names.focus) && e.focus) return e.focus(), 1;
		}), n._names.focus = "", n._setValid(), u.current = !1;
	}, [
		s,
		r,
		n
	]), I.useEffect(() => (!H(n._formValues, r) && n._setFieldArray(r), () => {
		let e = !(n._options.shouldUnregister || a);
		u.current && e && n._subjects.state.next({
			name: r,
			values: B(n._formValues)
		}), e ? ((e, t) => {
			let r = H(n._fields, e);
			r && r._f && (r._f.mount = t);
		})(r, !1) : n.unregister(r);
	}), [
		r,
		n,
		i,
		a
	]), {
		swap: I.useCallback((e, t) => {
			let i = n._getFieldArray(r);
			gi(i, e, t), gi(l.current, e, t), d(i), c(i), n._setFieldArray(r, i, gi, {
				argA: e,
				argB: t
			}, !1);
		}, [
			d,
			r,
			n
		]),
		move: I.useCallback((e, t) => {
			let i = n._getFieldArray(r);
			fi(i, e, t), fi(l.current, e, t), d(i), c(i), n._setFieldArray(r, i, fi, {
				argA: e,
				argB: t
			}, !1);
		}, [
			d,
			r,
			n
		]),
		prepend: I.useCallback((e, t) => {
			let i = J(B(e)), a = pi(n._getFieldArray(r), i);
			n._names.focus = ci(r, 0, t), l.current = pi(l.current, i.map(si)), d(a), c(a), n._setFieldArray(r, a, pi, { argA: ui(e) });
		}, [
			d,
			r,
			n
		]),
		append: I.useCallback((e, t) => {
			let i = J(B(e)), a = li(n._getFieldArray(r), i);
			n._names.focus = ci(r, a.length - 1, t), l.current = li(l.current, i.map(si)), d(a), c(a), n._setFieldArray(r, a, li, { argA: ui(e) });
		}, [
			d,
			r,
			n
		]),
		remove: I.useCallback((e) => {
			let t = hi(n._getFieldArray(r), e);
			l.current = hi(l.current, e), d(t), c(t), !Array.isArray(H(n._fields, r)) && G(n._fields, r, void 0), n._setFieldArray(r, t, hi, { argA: e });
		}, [
			d,
			r,
			n
		]),
		insert: I.useCallback((e, t, i) => {
			let a = J(B(t)), o = di(n._getFieldArray(r), e, a);
			n._names.focus = ci(r, e, i), l.current = di(l.current, e, a.map(si)), d(o), c(o), n._setFieldArray(r, o, di, {
				argA: e,
				argB: ui(t)
			});
		}, [
			d,
			r,
			n
		]),
		update: I.useCallback((e, t) => {
			let i = B(t), a = _i(n._getFieldArray(r), e, i);
			l.current = [...a].map((t, n) => !t || n === e ? si() : l.current[n]), d(a), c([...a]), n._setFieldArray(r, a, _i, {
				argA: e,
				argB: i
			}, !0, !1);
		}, [
			d,
			r,
			n
		]),
		replace: I.useCallback((e) => {
			let t = J(B(e));
			l.current = t.map(si), d([...t]), c([...t]), n._setFieldArray(r, [...t], (e) => e, {}, !0, !1);
		}, [
			d,
			r,
			n
		]),
		fields: I.useMemo(() => s.map((e, t) => ({
			...e,
			[i]: l.current[t] || si()
		})), [s, i])
	};
}
function yi(e = {}) {
	let t = I.useRef(void 0), n = I.useRef(void 0), [r, i] = I.useState(() => ({
		...B(ai),
		isLoading: W(e.defaultValues),
		errors: e.errors || {},
		disabled: e.disabled || !1,
		defaultValues: W(e.defaultValues) ? void 0 : e.defaultValues
	}));
	if (!t.current) if (e.formControl) t.current = {
		...e.formControl,
		formState: r
	}, e.defaultValues && !W(e.defaultValues) && e.formControl.reset(e.defaultValues, e.resetOptions);
	else {
		let { formControl: n, ...i } = oi(e);
		t.current = {
			...i,
			formState: r
		};
	}
	let a = t.current.control;
	return a._options = e, sr(() => {
		let e = a._subscribe({
			formState: a._proxyFormState,
			callback: () => i({
				...a._formState,
				defaultValues: a._defaultValues
			}),
			reRenderRoot: !0
		});
		return i((e) => ({
			...e,
			isReady: !0
		})), a._formState.isReady = !0, e;
	}, [a]), I.useEffect(() => a._disableForm(e.disabled), [a, e.disabled]), I.useEffect(() => {
		e.mode && (a._options.mode = e.mode), e.reValidateMode && (a._options.reValidateMode = e.reValidateMode);
	}, [
		a,
		e.mode,
		e.reValidateMode
	]), I.useEffect(() => {
		e.errors && (a._setErrors(e.errors), a._focusError());
	}, [a, e.errors]), I.useEffect(() => {
		e.shouldUnregister && a._subjects.state.next({ values: a._getWatch() });
	}, [a, e.shouldUnregister]), I.useEffect(() => {
		if (a._proxyFormState.isDirty) {
			let e = a._getDirty();
			e !== r.isDirty && a._subjects.state.next({ isDirty: e });
		}
	}, [a, r.isDirty]), I.useEffect(() => {
		e.values && !q(e.values, n.current) ? (a._reset(e.values, {
			keepFieldsRef: !0,
			...a._options.resetOptions
		}), a._options.resetOptions?.keepIsValid || a._setValid(), n.current = e.values, i((e) => ({ ...e }))) : a._resetDefaultValues();
	}, [a, e.values]), I.useEffect(() => {
		a._state.mount || (a._setValid(), a._state.mount = !0), a._state.watch && (a._state.watch = !1, a._subjects.state.next({ ...a._formState })), a._removeUnmounted();
	}), t.current.formState = I.useMemo(() => or(r, a), [a, r]), t.current;
}
//#endregion
//#region src/lib/hooks/useHotkey.ts
var bi = {
	other: {
		alt: "Alt",
		meta: "Ctrl",
		ctrl: "Ctrl",
		shift: "⇧",
		option: "Alt"
	},
	apple: {
		alt: "⌥",
		meta: "⌘",
		ctrl: "Ctrl",
		shift: "⇧",
		option: "⌥"
	}
}, xi = (e, t) => {
	let n = e.toLowerCase().split("+"), r = n.includes("meta"), i = n.includes("shift"), a = n.includes("option") || n.includes("alt"), o = n.includes("ctrl"), s = e.split("+").pop(), c = (0, I.useRef)(t);
	return (0, I.useEffect)(() => {
		c.current = t;
	}, [t]), (0, I.useEffect)(() => {
		let e = r || i || a || o, t = (t) => {
			!e && t.target instanceof HTMLElement && (t.target.tagName === "INPUT" || t.target.tagName === "TEXTAREA" || t.target.isContentEditable) || (t.code === `Key${s?.toUpperCase()}` || t.code.toLowerCase() === s?.toLowerCase()) && t.metaKey === r && t.shiftKey === i && t.altKey === a && t.ctrlKey === o && (t.preventDefault(), c.current());
		};
		return window.addEventListener("keydown", t), () => {
			window.removeEventListener("keydown", t);
		};
	}, [
		s,
		r,
		i,
		a,
		o
	]), {
		trigger: () => c.current(),
		label: n.map((e) => e === "meta" || e === "ctrl" || e === "alt" || e === "shift" || e === "option" ? bi[ce() ? "apple" : "other"][e] : e)
	};
}, Si = (e = 0) => {
	if (e === 0) return "0 B";
	let t = Math.floor(Math.log(e) / Math.log(1e3));
	return `${(e / 1e3 ** t).toFixed(t ? 2 : 0)} ${t ? `${"kMGTPEZY"[t - 1]}B` : "B"}`;
}, Ci = (e) => typeof e == "string" ? e : JSON.stringify(e), wi = (e) => e?.split(";")[0]?.trim().toLowerCase(), Ti = (e) => wi(e) === "application/x-www-form-urlencoded", Ei = (e) => {
	if (typeof e == "string") return e;
	if (typeof e != "object" || !e) return "";
	let t = new URLSearchParams();
	for (let [n, r] of Object.entries(e)) {
		if (r === void 0) continue;
		let e = Array.isArray(r) ? r : [r];
		for (let r of e) r !== void 0 && t.append(n, Ci(r));
	}
	return t.toString();
}, Di = (e, t) => {
	if (t != null) return Ti(e) ? Ei(t) : typeof t == "string" ? t.trim() : JSON.stringify(t, null, 2);
}, Oi = (e) => {
	let t = wi(e);
	return t ? t.endsWith("+json") ? "json" : t.endsWith("+xml") ? "xml" : t.endsWith("+yaml") ? "yaml" : {
		"text/html": "html",
		"application/x-ndjson": "json",
		"application/json": "json",
		"application/xml": "xml",
		"application/x-yaml": "yaml",
		"text/csv": "csv",
		"application/javascript": "javascript",
		"application/graphql": "graphql",
		"application/x-www-form-urlencoded": "text"
	}[t] ?? "text" : "text";
}, ki = (e) => {
	let t = new URLSearchParams();
	for (let { name: n, value: r } of e) t.append(n, r);
	return t.toString();
}, Ai = (e) => {
	if (!e) return [];
	let t = [];
	for (let [n, r] of new URLSearchParams(e)) t.push({
		name: n,
		value: r
	});
	return t;
}, ji = (e) => Object.entries(e).flatMap(([e, t]) => (Array.isArray(t) ? t : [t]).map((t) => ({
	name: e,
	value: Ci(t)
}))), Mi = (e) => typeof e == "string" ? Ai(e) : e && typeof e == "object" && !Array.isArray(e) ? ji(e) : [], Ni = ({ children: e, className: t }) => /* @__PURE__ */ (0, L.jsxs)("div", {
	className: F("grid grid-cols-[max-content_1fr_max-content] items-center gap-2 group bg-muted w-full h-10 ps-4 pe-2 border-b", t),
	children: [e, /* @__PURE__ */ (0, L.jsxs)(j, {
		"aria-label": "Toggle section",
		className: F("flex items-center gap-4 group bg-muted w-full p-2 hover:bg-accent hover:brightness-95 opacity-75 rounded-md", t),
		children: [/* @__PURE__ */ (0, L.jsx)(pt, {
			className: "group-data-[state=closed]:hidden shrink-0",
			size: 14,
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, L.jsx)(mt, {
			className: "group-data-[state=open]:hidden shrink-0",
			size: 14,
			"aria-hidden": "true"
		})]
	})]
}), Pi = ({ children: e, className: t }) => /* @__PURE__ */ (0, L.jsx)("span", {
	className: F("font-semibold w-full text-start", t),
	children: e
}), Fi = ({ examples: e, onSelect: t }) => /* @__PURE__ */ (0, L.jsxs)(Pe, { children: [/* @__PURE__ */ (0, L.jsx)(Oe, {
	asChild: !0,
	children: /* @__PURE__ */ (0, L.jsxs)(P, {
		variant: "ghost",
		size: "sm",
		className: "hover:bg-accent hover:brightness-95 gap-2",
		children: ["Use Example", /* @__PURE__ */ (0, L.jsx)(vt, { size: 14 })]
	})
}), /* @__PURE__ */ (0, L.jsx)(je, {
	className: "max-w-72",
	children: e.map((e) => /* @__PURE__ */ (0, L.jsxs)("div", { children: [
		/* @__PURE__ */ (0, L.jsx)(De, { children: e.mediaType }),
		/* @__PURE__ */ (0, L.jsx)(Ne, {}),
		/* @__PURE__ */ (0, L.jsx)(Me, { children: e.examples?.map((n) => /* @__PURE__ */ (0, L.jsx)(Ae, {
			onSelect: () => t(n, e.mediaType),
			children: /* @__PURE__ */ (0, L.jsx)("span", {
				className: "line-clamp-1",
				title: n.summary ?? n.name,
				children: n.summary ?? n.name
			})
		}, n.name)) })
	] }, e.mediaType))
})] }), Ii = (e, t) => {
	let n = I.forwardRef(({ className: n, asChild: r, ...i }, a) => {
		let o = r ? rt : e;
		return I.createElement(o, {
			...i,
			ref: a,
			className: typeof t == "function" ? t({ className: n }) : F(t, n)
		});
	});
	return n.displayName = typeof e == "string" ? `VariantComponent(${e})` : `VariantComponent(${e.displayName || e.name || "Component"})`, n;
}, Li = Ii("div", "grid grid-cols-[min-content_2fr_3fr] items-center gap-x-5 [&>*:last-child_[data-slot=remove-button]]:invisible"), Ri = Ii("div", "group h-9 hover:bg-accent/75 ps-4 pe-2 grid col-span-full grid-cols-subgrid items-center border-b"), Z = Ii(de, "w-full truncate border-0 p-0 m-0 shadow-none text-xs focus-visible:ring-0 font-mono"), zi = ({ onClick: e, className: t }) => /* @__PURE__ */ (0, L.jsx)(P, {
	size: "icon-xs",
	variant: "ghost",
	className: F("text-muted-foreground opacity-0 group-hover:brightness-95 focus-visible:opacity-100 group-hover:opacity-100", t),
	onClick: e,
	type: "button",
	"aria-label": "Remove",
	"data-slot": "remove-button",
	children: /* @__PURE__ */ (0, L.jsx)(ge, {
		size: 14,
		"aria-hidden": "true"
	})
}), Bi = "Checkbox", [Vi, Hi] = s(Bi), [Ui, Wi] = Vi(Bi);
function Gi(e) {
	let { __scopeCheckbox: t, checked: n, children: r, defaultChecked: i, disabled: a, form: o, name: s, onCheckedChange: c, required: l, value: d = "on", internal_do_not_use_render: f } = e, [p, m] = u({
		prop: n,
		defaultProp: i ?? !1,
		onChange: c,
		caller: Bi
	}), [h, g] = I.useState(null), [_, v] = I.useState(null), y = I.useRef(!1), b = h ? !!o || !!h.closest("form") : !0, x = {
		checked: p,
		disabled: a,
		setChecked: m,
		control: h,
		setControl: g,
		name: s,
		form: o,
		value: d,
		hasConsumerStoppedPropagationRef: y,
		required: l,
		defaultChecked: ea(i) ? !1 : i,
		isFormControl: b,
		bubbleInput: _,
		setBubbleInput: v
	};
	return /* @__PURE__ */ (0, L.jsx)(Ui, {
		scope: t,
		...x,
		children: $i(f) ? f(x) : r
	});
}
var Ki = "CheckboxTrigger", qi = I.forwardRef(({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, a) => {
	let { control: s, value: c, disabled: l, checked: u, required: d, setControl: f, setChecked: p, hasConsumerStoppedPropagationRef: m, isFormControl: h, bubbleInput: g } = Wi(Ki, e), _ = tt(a, f), v = I.useRef(u);
	return I.useEffect(() => {
		let e = s?.form;
		if (e) {
			let t = () => p(v.current);
			return e.addEventListener("reset", t), () => e.removeEventListener("reset", t);
		}
	}, [s, p]), /* @__PURE__ */ (0, L.jsx)(o.button, {
		type: "button",
		role: "checkbox",
		"aria-checked": ea(u) ? "mixed" : u,
		"aria-required": d,
		"data-state": ta(u),
		"data-disabled": l ? "" : void 0,
		disabled: l,
		value: c,
		...r,
		ref: _,
		onKeyDown: i(t, (e) => {
			e.key === "Enter" && e.preventDefault();
		}),
		onClick: i(n, (e) => {
			p((e) => ea(e) ? !0 : !e), g && h && (m.current = e.isPropagationStopped(), m.current || e.stopPropagation());
		})
	});
});
qi.displayName = Ki;
var Ji = I.forwardRef((e, t) => {
	let { __scopeCheckbox: n, name: r, checked: i, defaultChecked: a, required: o, disabled: s, value: c, onCheckedChange: l, form: u, ...d } = e;
	return /* @__PURE__ */ (0, L.jsx)(Gi, {
		__scopeCheckbox: n,
		checked: i,
		defaultChecked: a,
		disabled: s,
		required: o,
		onCheckedChange: l,
		name: r,
		form: u,
		value: c,
		internal_do_not_use_render: ({ isFormControl: e }) => /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [/* @__PURE__ */ (0, L.jsx)(qi, {
			...d,
			ref: t,
			__scopeCheckbox: n
		}), e && /* @__PURE__ */ (0, L.jsx)(Qi, { __scopeCheckbox: n })] })
	});
});
Ji.displayName = Bi;
var Yi = "CheckboxIndicator", Xi = I.forwardRef((e, t) => {
	let { __scopeCheckbox: n, forceMount: r, ...i } = e, a = Wi(Yi, n);
	return /* @__PURE__ */ (0, L.jsx)(f, {
		present: r || ea(a.checked) || a.checked === !0,
		children: /* @__PURE__ */ (0, L.jsx)(o.span, {
			"data-state": ta(a.checked),
			"data-disabled": a.disabled ? "" : void 0,
			...i,
			ref: t,
			style: {
				pointerEvents: "none",
				...e.style
			}
		})
	});
});
Xi.displayName = Yi;
var Zi = "CheckboxBubbleInput", Qi = I.forwardRef(({ __scopeCheckbox: e, ...t }, n) => {
	let { control: r, hasConsumerStoppedPropagationRef: i, checked: a, defaultChecked: s, required: c, disabled: l, name: u, value: d, form: f, bubbleInput: p, setBubbleInput: m } = Wi(Zi, e), h = tt(n, m), g = ke(a), _ = we(r);
	I.useEffect(() => {
		let e = p;
		if (!e) return;
		let t = window.HTMLInputElement.prototype, n = Object.getOwnPropertyDescriptor(t, "checked").set, r = !i.current;
		if (g !== a && n) {
			let t = new Event("click", { bubbles: r });
			e.indeterminate = ea(a), n.call(e, ea(a) ? !1 : a), e.dispatchEvent(t);
		}
	}, [
		p,
		g,
		a,
		i
	]);
	let v = I.useRef(ea(a) ? !1 : a);
	return /* @__PURE__ */ (0, L.jsx)(o.input, {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: s ?? v.current,
		required: c,
		disabled: l,
		name: u,
		value: d,
		form: f,
		...t,
		tabIndex: -1,
		ref: h,
		style: {
			...t.style,
			..._,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0,
			transform: "translateX(-100%)"
		}
	});
});
Qi.displayName = Zi;
function $i(e) {
	return typeof e == "function";
}
function ea(e) {
	return e === "indeterminate";
}
function ta(e) {
	return ea(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
//#endregion
//#region src/lib/ui/Checkbox.tsx
function na({ className: e, ...t }) {
	return /* @__PURE__ */ (0, L.jsx)(Ji, {
		"data-slot": "checkbox",
		className: F("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", e),
		...t,
		children: /* @__PURE__ */ (0, L.jsx)(Xi, {
			"data-slot": "checkbox-indicator",
			className: "grid place-content-center text-current transition-none",
			children: /* @__PURE__ */ (0, L.jsx)(xe, { className: "size-3.5" })
		})
	});
}
//#endregion
//#region src/lib/plugins/openapi/playground/request-panel/MultipartField.tsx
var ra = ({ index: e, manager: t }) => {
	let n = (0, I.useRef)(null), r = t.getValue(e, "value");
	return /* @__PURE__ */ (0, L.jsxs)(Ri, { children: [
		/* @__PURE__ */ (0, L.jsx)(na, {
			...t.getCheckboxProps(e),
			disabled: !t.getValue(e, "name")
		}),
		/* @__PURE__ */ (0, L.jsx)(Z, {
			...t.getNameInputProps(e),
			placeholder: "Key"
		}),
		/* @__PURE__ */ (0, L.jsxs)("div", {
			className: "flex items-center gap-1 flex-1",
			children: [r instanceof File ? /* @__PURE__ */ (0, L.jsxs)("div", {
				className: "flex items-center gap-1 flex-1 min-w-0",
				children: [/* @__PURE__ */ (0, L.jsxs)("div", {
					className: "flex items-center gap-1 border-b cursor-default",
					children: [/* @__PURE__ */ (0, L.jsx)(wt, {
						size: 12,
						className: "text-muted-foreground"
					}), /* @__PURE__ */ (0, L.jsx)("span", {
						className: "text-xs truncate",
						title: `${r.name} (${Si(r.size)})`,
						children: r.name
					})]
				}), /* @__PURE__ */ (0, L.jsx)(P, {
					type: "button",
					variant: "ghost",
					size: "icon-xs",
					className: "opacity-50 hover:opacity-100 hover:brightness-95 transition-opacity",
					onClick: () => t.setValue(e, "value", ""),
					children: /* @__PURE__ */ (0, L.jsx)(jt, { size: 13 })
				})]
			}) : /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [
				/* @__PURE__ */ (0, L.jsx)(Z, {
					...t.getValueInputProps(e),
					placeholder: "Value"
				}),
				/* @__PURE__ */ (0, L.jsx)("input", {
					ref: n,
					type: "file",
					className: "hidden",
					onChange: (n) => {
						let r = n.target.files?.[0];
						r && (t.setValue(e, "value", r), t.setValue(e, "active", !0));
					}
				}),
				/* @__PURE__ */ (0, L.jsx)(P, {
					type: "button",
					variant: "ghost",
					size: "icon-xs",
					onClick: () => n.current?.click(),
					title: "Attach file",
					className: "opacity-0 focus-visible:opacity-100 group-hover:opacity-100 group-hover:brightness-95 transition-opacity",
					children: /* @__PURE__ */ (0, L.jsx)(wt, { size: 14 })
				})
			] }), /* @__PURE__ */ (0, L.jsx)(zi, { ...t.getRemoveButtonProps(e) })]
		})
	] });
}, ia = ({ index: e, manager: t }) => /* @__PURE__ */ (0, L.jsxs)(Ri, { children: [
	/* @__PURE__ */ (0, L.jsx)(na, {
		...t.getCheckboxProps(e),
		disabled: !t.getValue(e, "name")
	}),
	/* @__PURE__ */ (0, L.jsx)(Z, {
		...t.getNameInputProps(e),
		placeholder: "Key"
	}),
	/* @__PURE__ */ (0, L.jsxs)("div", {
		className: "flex items-center gap-1 flex-1",
		children: [/* @__PURE__ */ (0, L.jsx)(Z, {
			...t.getValueInputProps(e),
			placeholder: "Value"
		}), /* @__PURE__ */ (0, L.jsx)(zi, { ...t.getRemoveButtonProps(e) })]
	})
] }), aa = (e) => {
	let { control: t, name: n, defaultValue: r, isEmpty: i, shouldSetActive: a } = e, { setValue: o, watch: s, setFocus: c, register: l } = hr(), { fields: u, append: d, remove: f } = vi({
		control: t,
		name: n
	}), p = s(n), m = (0, I.useRef)(-1), h = (0, I.useRef)(-1), g = (0, I.useCallback)((e) => a ? a(e) : !!(e.name || e.value), [a]), _ = (0, I.useCallback)((e, t, r, i) => {
		if ((t === "value" || t === "name") && (m.current = e), o(`${n}.${e}.${t}`, r), t === "name" || t === "value") {
			let i = p?.[e];
			if (i) {
				let a = g({
					...i,
					[t]: r
				});
				i.active !== a && o(`${n}.${e}.active`, a);
			}
		}
		i?.focus === "next" ? c(t === "name" ? `${n}.${e}.value` : `${n}.${e + 1}.name`) : i?.focus === "previous" && c(t === "name" ? `${n}.${e - 1}.value` : `${n}.${e}.name`);
	}, [
		n,
		o,
		c,
		p,
		g
	]), v = (0, I.useCallback)((e) => i ? i(e) : !e.name && !e.value, [i]);
	(0, I.useEffect)(() => {
		if (!p) return;
		if (h.current === -1) {
			h.current = p.length, p.length === 0 && d(r, { shouldFocus: !1 });
			return;
		}
		if (h.current = p.length, p.length === 0) {
			d(r, { shouldFocus: !1 });
			return;
		}
		if (p.length > 1) {
			let e = [];
			for (let t = 0; t < p.length - 1; t++) {
				let n = p[t];
				n && v(n) && !g(n) && e.push(t);
			}
			if (e.length > 0) {
				let t = e[0];
				if (t === void 0) return;
				for (let t = e.length - 1; t >= 0; t--) {
					let n = e[t];
					n !== void 0 && f(n);
				}
				m.current === t && (t < p.length - e.length ? c(`${n}.${t}.name`) : c(t > 0 ? `${n}.${t - 1}.name` : `${n}.0.name`)), m.current = -1;
			}
		}
		let e = p[p.length - 1];
		e && !v(e) && d(r, { shouldFocus: !1 });
	}, [
		p,
		d,
		f,
		r,
		v,
		n,
		c,
		g
	]);
	let y = (0, I.useCallback)((e) => {
		let t = p?.[e];
		return t ? v(t) : !0;
	}, [p, v]), b = (0, I.useCallback)((e, t) => {
		let r = t === "name" ? `${n}.${e}.value` : `${n}.${e + 1}.name`, i = t === "name" ? `${n}.${e - 1}.value` : `${n}.${e}.name`, a = t === "value" || e > 0;
		return (e) => {
			if (!(e.target instanceof HTMLInputElement)) return;
			let t = e.target.selectionStart === 0, n = e.target.selectionStart === e.target.value.length, o = !e.target.value;
			e.key === "Enter" ? c(r) : e.key === "Backspace" && o && a || e.key === "ArrowLeft" && t && a ? (e.preventDefault(), c(i)) : e.key === "ArrowRight" && n && (e.preventDefault(), c(r));
		};
	}, [n, c]), x = (0, I.useCallback)((e) => ({
		...l(`${n}.${e}.name`),
		onChange: (t) => _(e, "name", t.target.value),
		onKeyDown: b(e, "name")
	}), [
		l,
		n,
		_,
		b
	]), S = (0, I.useCallback)((e) => ({
		...l(`${n}.${e}.value`),
		onChange: (t) => _(e, "value", t.target.value),
		onKeyDown: b(e, "value")
	}), [
		l,
		n,
		_,
		b
	]), C = (0, I.useCallback)((e) => ({
		...l(`${n}.${e}.active`),
		checked: s(`${n}.${e}.active`) ?? !1,
		disabled: y(e),
		onCheckedChange: (t) => {
			_(e, "active", t === !0);
		}
	}), [
		n,
		l,
		y,
		s,
		_
	]), w = (0, I.useCallback)((e, t) => p?.[e]?.[t], [p]);
	return {
		fields: u,
		getNameInputProps: x,
		getValueInputProps: S,
		getCheckboxProps: C,
		getRemoveButtonProps: (0, I.useCallback)((e) => ({
			onClick: () => f(e),
			disabled: e === u.length - 1
		}), [f, u.length]),
		setValue: _,
		getValue: w
	};
}, oa = ({ content: e }) => {
	let { register: t, setValue: n, watch: r, control: i } = hr(), a = (e ?? []).flatMap((e) => e.examples), [o, s, c, l, u, d] = r([
		"headers",
		"file",
		"bodyMode",
		"body",
		"multipartFormFields",
		"urlencodedFormFields"
	]), f = (0, I.useRef)(null), [p, m] = (0, I.useState)(!1), h = (e) => {
		n("file", e), e && n("headers", o.filter((e) => e.name.toLowerCase() !== "content-type" || !e.active));
	}, g = (e) => {
		h(e.target.files?.[0] ?? null);
	}, _ = (e) => {
		e.preventDefault(), e.stopPropagation(), m(!0);
	}, v = (e) => {
		e.preventDefault(), e.stopPropagation(), m(!1);
	}, y = (e) => {
		e.preventDefault(), e.stopPropagation(), m(!1), h(e.dataTransfer.files?.[0] ?? null);
	}, b = aa({
		control: i,
		name: "multipartFormFields",
		defaultValue: {
			name: "",
			value: "",
			active: !1
		},
		isEmpty: (e) => e.value instanceof File ? !1 : !e.name && !e.value
	}), x = aa({
		control: i,
		name: "urlencodedFormFields",
		defaultValue: {
			name: "",
			value: "",
			active: !1
		}
	});
	return /* @__PURE__ */ (0, L.jsxs)(M, {
		defaultOpen: !0,
		children: [/* @__PURE__ */ (0, L.jsxs)(Ni, {
			className: "items-center",
			children: [/* @__PURE__ */ (0, L.jsx)(xt, { size: 16 }), /* @__PURE__ */ (0, L.jsxs)(Pi, {
				className: "flex items-center justify-between",
				children: ["Body", /* @__PURE__ */ (0, L.jsxs)("div", {
					className: "flex items-center",
					children: [
						/* @__PURE__ */ (0, L.jsxs)(Pe, { children: [/* @__PURE__ */ (0, L.jsx)(Oe, {
							asChild: !0,
							children: /* @__PURE__ */ (0, L.jsxs)(P, {
								variant: "ghost",
								size: "sm",
								className: "hover:bg-accent hover:brightness-95 gap-2",
								children: [c === "text" ? /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [/* @__PURE__ */ (0, L.jsx)(Et, { size: 14 }), "Text"] }) : c === "file" ? /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [/* @__PURE__ */ (0, L.jsx)(wt, { size: 14 }), "File"] }) : c === "urlencoded" ? /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [/* @__PURE__ */ (0, L.jsx)(Ce, { size: 14 }), "URL-encoded"] }) : /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [/* @__PURE__ */ (0, L.jsx)(St, { size: 14 }), "Multipart"] }), /* @__PURE__ */ (0, L.jsx)(Te, { size: 14 })]
							})
						}), /* @__PURE__ */ (0, L.jsxs)(je, {
							className: "min-w-40",
							children: [
								/* @__PURE__ */ (0, L.jsxs)(Ae, {
									onSelect: () => n("bodyMode", "text"),
									className: "gap-2",
									children: [
										/* @__PURE__ */ (0, L.jsx)(Et, { size: 14 }),
										/* @__PURE__ */ (0, L.jsx)("span", {
											className: "flex-1",
											children: "Text"
										}),
										/* @__PURE__ */ (0, L.jsx)("span", { children: l.length > 0 && /* @__PURE__ */ (0, L.jsx)("div", { className: "w-1.5 h-1.5 bg-primary rounded-full" }) })
									]
								}),
								/* @__PURE__ */ (0, L.jsxs)(Ae, {
									onSelect: () => n("bodyMode", "file"),
									className: "gap-2",
									children: [
										/* @__PURE__ */ (0, L.jsx)(wt, { size: 14 }),
										/* @__PURE__ */ (0, L.jsx)("span", {
											className: "flex-1",
											children: "File"
										}),
										/* @__PURE__ */ (0, L.jsx)("span", { children: s && /* @__PURE__ */ (0, L.jsx)("div", { className: "w-1.5 h-1.5 bg-primary rounded-full" }) })
									]
								}),
								/* @__PURE__ */ (0, L.jsxs)(Ae, {
									onSelect: () => n("bodyMode", "multipart"),
									className: "gap-2",
									children: [
										/* @__PURE__ */ (0, L.jsx)(St, {
											size: 14,
											strokeWidth: 1.5
										}),
										/* @__PURE__ */ (0, L.jsx)("span", {
											className: "flex-1",
											children: "Multipart"
										}),
										/* @__PURE__ */ (0, L.jsx)("span", { children: u?.some((e) => e.active) && /* @__PURE__ */ (0, L.jsx)("div", { className: "w-1.5 h-1.5 bg-primary rounded-full" }) })
									]
								}),
								/* @__PURE__ */ (0, L.jsxs)(Ae, {
									onSelect: () => n("bodyMode", "urlencoded"),
									className: "gap-2",
									children: [
										/* @__PURE__ */ (0, L.jsx)(Ce, { size: 14 }),
										/* @__PURE__ */ (0, L.jsx)("span", {
											className: "flex-1",
											children: "URL-encoded"
										}),
										/* @__PURE__ */ (0, L.jsx)("span", { children: d?.some((e) => e.active) && /* @__PURE__ */ (0, L.jsx)("div", { className: "w-1.5 h-1.5 bg-primary rounded-full" }) })
									]
								})
							]
						})] }),
						/* @__PURE__ */ (0, L.jsx)("input", {
							ref: f,
							type: "file",
							className: "hidden",
							onChange: g
						}),
						/* @__PURE__ */ (0, L.jsx)("div", { className: "w-px mx-1 h-5 bg-border" }),
						e && a.length > 0 ? /* @__PURE__ */ (0, L.jsx)(Fi, {
							examples: e,
							onSelect: (e, t) => {
								t === "application/x-www-form-urlencoded" ? (n("urlencodedFormFields", Mi(e.value).map((e) => ({
									...e,
									active: !0
								}))), n("bodyMode", "urlencoded")) : (n("body", JSON.stringify(e.value, null, 2)), n("urlencodedFormFields", []), n("bodyMode", "text")), n("headers", [...o.filter((e) => e.name.toLowerCase() !== "content-type"), {
									name: "Content-Type",
									value: t,
									active: !0
								}]);
							}
						}) : /* @__PURE__ */ (0, L.jsx)("div", {})
					]
				})]
			})]
		}), /* @__PURE__ */ (0, L.jsxs)(_e, {
			className: "CollapsibleContent flex flex-col gap-2",
			children: [
				c === "text" && /* @__PURE__ */ (0, L.jsx)(A, {
					...t("body"),
					className: F("w-full px-4 py-2.5 h-64 font-mono md:text-xs border-none rounded-none focus-visible:ring-0 transition-colors"),
					placeholder: "Body content"
				}),
				c === "file" && /* @__PURE__ */ (0, L.jsxs)("div", {
					role: "region",
					"aria-label": "File upload drop zone",
					className: F("flex flex-col items-center justify-center gap-4 min-h-[300px]"),
					onDragOver: _,
					onDragLeave: v,
					onDrop: y,
					children: [/* @__PURE__ */ (0, L.jsx)("button", {
						type: "button",
						onClick: () => f.current?.click(),
						className: F("flex items-center justify-center gap-2 rounded-full size-20 p-0 border border-dashed border-muted-foreground/50 hover:bg-accent/75 transition-colors", (s || p) && "border-solid", p && "bg-accent border-primary"),
						children: /* @__PURE__ */ (0, L.jsx)(wt, {
							className: F("text-muted-foreground", p && "text-primary"),
							size: 30
						})
					}), s ? /* @__PURE__ */ (0, L.jsxs)("div", {
						className: "flex items-center justify-between gap-2 px-2 py-1.5 rounded-md border",
						children: [/* @__PURE__ */ (0, L.jsxs)("span", {
							className: "text-sm truncate",
							title: s.name,
							children: [
								s.name,
								" ",
								/* @__PURE__ */ (0, L.jsxs)("span", {
									className: "text-muted-foreground",
									children: [
										"(",
										Si(s.size),
										")"
									]
								})
							]
						}), /* @__PURE__ */ (0, L.jsx)(P, {
							type: "button",
							variant: "ghost",
							size: "icon-xs",
							onClick: () => h(null),
							children: /* @__PURE__ */ (0, L.jsx)(ge, { size: 14 })
						})]
					}) : /* @__PURE__ */ (0, L.jsx)("span", {
						className: "text-lg font-semibold text-muted-foreground",
						children: "Select or drop a file"
					})]
				}),
				c === "multipart" && /* @__PURE__ */ (0, L.jsx)(Li, { children: b.fields.map((e, t) => /* @__PURE__ */ (0, L.jsx)(ra, {
					index: t,
					manager: b
				}, e.id)) }),
				c === "urlencoded" && /* @__PURE__ */ (0, L.jsx)(Li, { children: x.fields.map((e, t) => /* @__PURE__ */ (0, L.jsx)(ia, {
					index: t,
					manager: x
				}, e.id)) })
			]
		})]
	});
}, sa = (e) => {
	switch (e.bodyMode) {
		case "file": return {
			body: e.file || void 0,
			contentType: { kind: "remove" }
		};
		case "multipart": {
			let t = new FormData();
			return e.multipartFormFields?.filter((e) => e.name && e.active).forEach((e) => t.append(e.name, e.value)), {
				body: t,
				contentType: { kind: "remove" }
			};
		}
		case "urlencoded": return {
			body: ki((e.urlencodedFormFields ?? []).filter((e) => e.name && e.active).map((e) => ({
				name: e.name,
				value: e.value
			}))),
			contentType: {
				kind: "override",
				value: "application/x-www-form-urlencoded"
			}
		};
		default: return {
			body: e.body || void 0,
			contentType: { kind: "preserve" }
		};
	}
}, ca = (e) => {
	if (!e) return [];
	try {
		let t = JSON.parse(e);
		return Array.isArray(t) ? t.map(String) : [e];
	} catch {
		return [e];
	}
}, la = /%21|%27|%28|%29|%2A|%2B|%2C|%2F|%3A|%3B|%3D|%3F|%24|%40|%5B|%5D/gi, Q = (e, t) => t ? encodeURIComponent(e).replace(la, decodeURIComponent) : encodeURIComponent(e), ua = (e, t, n = "form", r, i, a) => {
	let o = a === "array", s = r ?? n === "form";
	if (!o) return [[Q(e, i), Q(t, i)]];
	let c = ca(t);
	if (c.length === 0) return [];
	switch (n) {
		case "form": return s ? c.map((t) => [Q(e, i), Q(t, i)]) : [[Q(e, i), c.map((e) => Q(e, i)).join(",")]];
		case "spaceDelimited": return s ? c.map((t) => [Q(e, i), Q(t, i)]) : [[Q(e, i), c.map((e) => Q(e, i)).join("%20")]];
		case "pipeDelimited": return s ? c.map((t) => [Q(e, i), Q(t, i)]) : [[Q(e, i), c.map((e) => Q(e, i)).join("|")]];
		case "deepObject": return c.map((t, n) => [Q(`${e}[${n}]`, i), Q(t, i)]);
		default: return [[Q(e, i), Q(t, i)]];
	}
}, da = (e) => {
	let t = e.filter((e) => e.active && e.name).flatMap((e) => ua(e.name, e.value, e.style, e.explode, e.allowReserved, e.type));
	return t.length === 0 ? "" : t.map(([e, t]) => `${e}=${t}`).join("&");
}, fa = (e, t, n) => {
	let r = t.replace(/(:\w+|\{\w+})/g, (e) => {
		let t = e.replace(/[:{}]/g, "");
		return n.pathParams.find((e) => e.name === t)?.value ?? e;
	}), i = new URL(r.replace(/^\//, ""), e.endsWith("/") ? e : `${e}/`), a = da(n.queryParams);
	return a && (i.search = a), i;
};
//#endregion
//#region src/lib/plugins/openapi/playground/fileUtils.ts
function pa(e) {
	return /^(application\/octet-stream|image\/|audio\/|video\/|font\/|application\/pdf|application\/zip|application\/x-protobuf|application\/x-binary)/i.test(e);
}
function ma(e) {
	return /^audio\//i.test(e);
}
var ha = (e, t) => {
	let n = e.find(([e]) => e.toLowerCase() === "content-disposition")?.[1];
	if (n) {
		let e = n.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
		if (e?.[1]) return e[1].replace(/['"]/g, "");
	}
	try {
		let e = new URL(t).pathname.split("/").pop() || "download";
		return e.includes(".") ? e : "download";
	} catch {
		return "download";
	}
}, ga = 1, _a = .9, va = .8, ya = .17, ba = .1, xa = .999, Sa = .9999, Ca = .99, wa = /[\\\/_+.#"@\[\(\{&]/, Ta = /[\\\/_+.#"@\[\(\{&]/g, Ea = /[\s-]/, Da = /[\s-]/g;
function Oa(e, t, n, r, i, a, o) {
	if (a === t.length) return i === e.length ? ga : Ca;
	var s = `${i},${a}`;
	if (o[s] !== void 0) return o[s];
	for (var c = r.charAt(a), l = n.indexOf(c, i), u = 0, d, f, p, m; l >= 0;) d = Oa(e, t, n, r, l + 1, a + 1, o), d > u && (l === i ? d *= ga : wa.test(e.charAt(l - 1)) ? (d *= va, p = e.slice(i, l - 1).match(Ta), p && i > 0 && (d *= xa ** +p.length)) : Ea.test(e.charAt(l - 1)) ? (d *= _a, m = e.slice(i, l - 1).match(Da), m && i > 0 && (d *= xa ** +m.length)) : (d *= ya, i > 0 && (d *= xa ** +(l - i))), e.charAt(l) !== t.charAt(a) && (d *= Sa)), (d < ba && n.charAt(l - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(l - 1) !== r.charAt(a)) && (f = Oa(e, t, n, r, l + 1, a + 2, o), f * ba > d && (d = f * ba)), d > u && (u = d), l = n.indexOf(c, l + 1);
	return o[s] = u, u;
}
function ka(e) {
	return e.toLowerCase().replace(Da, " ");
}
function Aa(e, t, n) {
	return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Oa(e, t, ka(e), ka(t), 0, 0, {});
}
//#endregion
//#region ../../node_modules/.pnpm/cmdk@1.1.1_@types+react-dom@19.2.3_@types+react@19.2.17__@types+react@19.2.17_react-dom_bc1678d6d5a7ffb92aa41dc7846a5030/node_modules/cmdk/dist/index.mjs
var ja = "[cmdk-group=\"\"]", Ma = "[cmdk-group-items=\"\"]", Na = "[cmdk-group-heading=\"\"]", Pa = "[cmdk-item=\"\"]", Fa = `${Pa}:not([aria-disabled="true"])`, Ia = "cmdk-item-select", La = "data-value", Ra = (e, t, n) => Aa(e, t, n), za = I.createContext(void 0), Ba = () => I.useContext(za), Va = I.createContext(void 0), Ha = () => I.useContext(Va), Ua = I.createContext(void 0), Wa = I.forwardRef((e, t) => {
	let n = ro(() => ({
		search: "",
		value: e.value ?? e.defaultValue ?? "",
		selectedItemId: void 0,
		filtered: {
			count: 0,
			items: /* @__PURE__ */ new Map(),
			groups: /* @__PURE__ */ new Set()
		}
	})), r = ro(() => /* @__PURE__ */ new Set()), i = ro(() => /* @__PURE__ */ new Map()), o = ro(() => /* @__PURE__ */ new Map()), s = ro(() => /* @__PURE__ */ new Set()), c = to(e), { label: l, children: u, value: d, onValueChange: f, filter: p, shouldFilter: m, loop: h, disablePointerSelection: g = !1, vimBindings: _ = !0, ...v } = e, y = a(), b = a(), x = a(), S = I.useRef(null), C = oo();
	no(() => {
		if (d !== void 0) {
			let e = d.trim();
			n.current.value = e, w.emit();
		}
	}, [d]), no(() => {
		C(6, ne);
	}, []);
	let w = I.useMemo(() => ({
		subscribe: (e) => (s.current.add(e), () => s.current.delete(e)),
		snapshot: () => n.current,
		setState: (e, t, r) => {
			var i, a, o;
			if (!Object.is(n.current[e], t)) {
				if (n.current[e] = t, e === "search") te(), D(), C(1, ee);
				else if (e === "value") {
					if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
						let e = document.getElementById(x);
						e ? e.focus() : (i = document.getElementById(y)) == null || i.focus();
					}
					if (C(7, () => {
						n.current.selectedItemId = O()?.id, w.emit();
					}), r || C(5, ne), c.current?.value !== void 0) {
						let e = t ?? "";
						(o = (a = c.current).onValueChange) == null || o.call(a, e);
						return;
					}
				}
				w.emit();
			}
		},
		emit: () => {
			s.current.forEach((e) => e());
		}
	}), []), T = I.useMemo(() => ({
		value: (e, t, r) => {
			t !== o.current.get(e)?.value && (o.current.set(e, {
				value: t,
				keywords: r
			}), n.current.filtered.items.set(e, E(t, r)), C(2, () => {
				D(), w.emit();
			}));
		},
		item: (e, t) => (r.current.add(e), t && (i.current.has(t) ? i.current.get(t).add(e) : i.current.set(t, new Set([e]))), C(3, () => {
			te(), D(), n.current.value || ee(), w.emit();
		}), () => {
			o.current.delete(e), r.current.delete(e), n.current.filtered.items.delete(e);
			let t = O();
			C(4, () => {
				te(), t?.getAttribute("id") === e && ee(), w.emit();
			});
		}),
		group: (e) => (i.current.has(e) || i.current.set(e, /* @__PURE__ */ new Set()), () => {
			o.current.delete(e), i.current.delete(e);
		}),
		filter: () => c.current.shouldFilter,
		label: l || e["aria-label"],
		getDisablePointerSelection: () => c.current.disablePointerSelection,
		listId: y,
		inputId: x,
		labelId: b,
		listInnerRef: S
	}), []);
	function E(e, t) {
		let r = c.current?.filter ?? Ra;
		return e ? r(e, n.current.search, t) : 0;
	}
	function D() {
		if (!n.current.search || c.current.shouldFilter === !1) return;
		let e = n.current.filtered.items, t = [];
		n.current.filtered.groups.forEach((n) => {
			let r = i.current.get(n), a = 0;
			r.forEach((t) => {
				let n = e.get(t);
				a = Math.max(n, a);
			}), t.push([n, a]);
		});
		let r = S.current;
		k().sort((t, n) => {
			let r = t.getAttribute("id"), i = n.getAttribute("id");
			return (e.get(i) ?? 0) - (e.get(r) ?? 0);
		}).forEach((e) => {
			let t = e.closest(Ma);
			t ? t.appendChild(e.parentElement === t ? e : e.closest(`${Ma} > *`)) : r.appendChild(e.parentElement === r ? e : e.closest(`${Ma} > *`));
		}), t.sort((e, t) => t[1] - e[1]).forEach((e) => {
			let t = S.current?.querySelector(`${ja}[${La}="${encodeURIComponent(e[0])}"]`);
			t?.parentElement.appendChild(t);
		});
	}
	function ee() {
		let e = k().find((e) => e.getAttribute("aria-disabled") !== "true")?.getAttribute(La);
		w.setState("value", e || void 0);
	}
	function te() {
		if (!n.current.search || c.current.shouldFilter === !1) {
			n.current.filtered.count = r.current.size;
			return;
		}
		n.current.filtered.groups = /* @__PURE__ */ new Set();
		let e = 0;
		for (let t of r.current) {
			let r = E(o.current.get(t)?.value ?? "", o.current.get(t)?.keywords ?? []);
			n.current.filtered.items.set(t, r), r > 0 && e++;
		}
		for (let [e, t] of i.current) for (let r of t) if (n.current.filtered.items.get(r) > 0) {
			n.current.filtered.groups.add(e);
			break;
		}
		n.current.filtered.count = e;
	}
	function ne() {
		var e;
		let t = O();
		t && (t.parentElement?.firstChild === t && ((e = t.closest(ja)?.querySelector(Na)) == null || e.scrollIntoView({ block: "nearest" })), t.scrollIntoView({ block: "nearest" }));
	}
	function O() {
		return S.current?.querySelector(`${Pa}[aria-selected="true"]`);
	}
	function k() {
		return Array.from(S.current?.querySelectorAll(Fa) || []);
	}
	function re(e) {
		let t = k()[e];
		t && w.setState("value", t.getAttribute(La));
	}
	function ie(e) {
		var t;
		let n = O(), r = k(), i = r.findIndex((e) => e === n), a = r[i + e];
		(t = c.current) != null && t.loop && (a = i + e < 0 ? r[r.length - 1] : i + e === r.length ? r[0] : r[i + e]), a && w.setState("value", a.getAttribute(La));
	}
	function ae(e) {
		let t = O()?.closest(ja), n;
		for (; t && !n;) t = e > 0 ? $a(t, ja) : eo(t, ja), n = t?.querySelector(Fa);
		n ? w.setState("value", n.getAttribute(La)) : ie(e);
	}
	let oe = () => re(k().length - 1), se = (e) => {
		e.preventDefault(), e.metaKey ? oe() : e.altKey ? ae(1) : ie(1);
	}, ce = (e) => {
		e.preventDefault(), e.metaKey ? re(0) : e.altKey ? ae(-1) : ie(-1);
	};
	return I.createElement(Ee.div, {
		ref: t,
		tabIndex: -1,
		...v,
		"cmdk-root": "",
		onKeyDown: (e) => {
			var t;
			(t = v.onKeyDown) == null || t.call(v, e);
			let n = e.nativeEvent.isComposing || e.keyCode === 229;
			if (!(e.defaultPrevented || n)) switch (e.key) {
				case "n":
				case "j":
					_ && e.ctrlKey && se(e);
					break;
				case "ArrowDown":
					se(e);
					break;
				case "p":
				case "k":
					_ && e.ctrlKey && ce(e);
					break;
				case "ArrowUp":
					ce(e);
					break;
				case "Home":
					e.preventDefault(), re(0);
					break;
				case "End":
					e.preventDefault(), oe();
					break;
				case "Enter": {
					e.preventDefault();
					let t = O();
					if (t) {
						let e = new Event(Ia);
						t.dispatchEvent(e);
					}
				}
			}
		}
	}, I.createElement("label", {
		"cmdk-label": "",
		htmlFor: T.inputId,
		id: T.labelId,
		style: lo
	}, l), co(e, (e) => I.createElement(Va.Provider, { value: w }, I.createElement(za.Provider, { value: T }, e))));
}), Ga = I.forwardRef((e, t) => {
	let n = a(), r = I.useRef(null), i = I.useContext(Ua), o = Ba(), s = to(e), c = s.current?.forceMount ?? i?.forceMount;
	no(() => {
		if (!c) return o.item(n, i?.id);
	}, [c]);
	let l = ao(n, r, [
		e.value,
		e.children,
		r
	], e.keywords), u = Ha(), d = io((e) => e.value && e.value === l.current), f = io((e) => c || o.filter() === !1 ? !0 : e.search ? e.filtered.items.get(n) > 0 : !0);
	I.useEffect(() => {
		let t = r.current;
		if (!(!t || e.disabled)) return t.addEventListener(Ia, p), () => t.removeEventListener(Ia, p);
	}, [
		f,
		e.onSelect,
		e.disabled
	]);
	function p() {
		var e, t;
		m(), (t = (e = s.current).onSelect) == null || t.call(e, l.current);
	}
	function m() {
		u.setState("value", l.current, !0);
	}
	if (!f) return null;
	let { disabled: h, value: g, onSelect: _, forceMount: v, keywords: y, ...b } = e;
	return I.createElement(Ee.div, {
		ref: nt(r, t),
		...b,
		id: n,
		"cmdk-item": "",
		role: "option",
		"aria-disabled": !!h,
		"aria-selected": !!d,
		"data-disabled": !!h,
		"data-selected": !!d,
		onPointerMove: h || o.getDisablePointerSelection() ? void 0 : m,
		onClick: h ? void 0 : p
	}, e.children);
}), Ka = I.forwardRef((e, t) => {
	let { heading: n, children: r, forceMount: i, ...o } = e, s = a(), c = I.useRef(null), l = I.useRef(null), u = a(), d = Ba(), f = io((e) => i || d.filter() === !1 ? !0 : e.search ? e.filtered.groups.has(s) : !0);
	no(() => d.group(s), []), ao(s, c, [
		e.value,
		e.heading,
		l
	]);
	let p = I.useMemo(() => ({
		id: s,
		forceMount: i
	}), [i]);
	return I.createElement(Ee.div, {
		ref: nt(c, t),
		...o,
		"cmdk-group": "",
		role: "presentation",
		hidden: f ? void 0 : !0
	}, n && I.createElement("div", {
		ref: l,
		"cmdk-group-heading": "",
		"aria-hidden": !0,
		id: u
	}, n), co(e, (e) => I.createElement("div", {
		"cmdk-group-items": "",
		role: "group",
		"aria-labelledby": n ? u : void 0
	}, I.createElement(Ua.Provider, { value: p }, e))));
}), qa = I.forwardRef((e, t) => {
	let { alwaysRender: n, ...r } = e, i = I.useRef(null), a = io((e) => !e.search);
	return !n && !a ? null : I.createElement(Ee.div, {
		ref: nt(i, t),
		...r,
		"cmdk-separator": "",
		role: "separator"
	});
}), Ja = I.forwardRef((e, t) => {
	let { onValueChange: n, ...r } = e, i = e.value != null, a = Ha(), o = io((e) => e.search), s = io((e) => e.selectedItemId), c = Ba();
	return I.useEffect(() => {
		e.value != null && a.setState("search", e.value);
	}, [e.value]), I.createElement(Ee.input, {
		ref: t,
		...r,
		"cmdk-input": "",
		autoComplete: "off",
		autoCorrect: "off",
		spellCheck: !1,
		"aria-autocomplete": "list",
		role: "combobox",
		"aria-expanded": !0,
		"aria-controls": c.listId,
		"aria-labelledby": c.labelId,
		"aria-activedescendant": s,
		id: c.inputId,
		type: "text",
		value: i ? e.value : o,
		onChange: (e) => {
			i || a.setState("search", e.target.value), n?.(e.target.value);
		}
	});
}), Ya = I.forwardRef((e, t) => {
	let { children: n, label: r = "Suggestions", ...i } = e, a = I.useRef(null), o = I.useRef(null), s = io((e) => e.selectedItemId), c = Ba();
	return I.useEffect(() => {
		if (o.current && a.current) {
			let e = o.current, t = a.current, n, r = new ResizeObserver(() => {
				n = requestAnimationFrame(() => {
					let n = e.offsetHeight;
					t.style.setProperty("--cmdk-list-height", n.toFixed(1) + "px");
				});
			});
			return r.observe(e), () => {
				cancelAnimationFrame(n), r.unobserve(e);
			};
		}
	}, []), I.createElement(Ee.div, {
		ref: nt(a, t),
		...i,
		"cmdk-list": "",
		role: "listbox",
		tabIndex: -1,
		"aria-activedescendant": s,
		"aria-label": r,
		id: c.listId
	}, co(e, (e) => I.createElement("div", {
		ref: nt(o, c.listInnerRef),
		"cmdk-list-sizer": ""
	}, e)));
}), Xa = I.forwardRef((e, t) => {
	let { open: n, onOpenChange: r, overlayClassName: i, contentClassName: a, container: o, ...s } = e;
	return I.createElement(D, {
		open: n,
		onOpenChange: r
	}, I.createElement(ne, { container: o }, I.createElement(re, {
		"cmdk-overlay": "",
		className: i
	}), I.createElement(E, {
		"aria-label": e.label,
		"cmdk-dialog": "",
		className: a
	}, I.createElement(Wa, {
		ref: t,
		...s
	}))));
}), Za = I.forwardRef((e, t) => io((e) => e.filtered.count === 0) ? I.createElement(Ee.div, {
	ref: t,
	...e,
	"cmdk-empty": "",
	role: "presentation"
}) : null), Qa = I.forwardRef((e, t) => {
	let { progress: n, children: r, label: i = "Loading...", ...a } = e;
	return I.createElement(Ee.div, {
		ref: t,
		...a,
		"cmdk-loading": "",
		role: "progressbar",
		"aria-valuenow": n,
		"aria-valuemin": 0,
		"aria-valuemax": 100,
		"aria-label": i
	}, co(e, (e) => I.createElement("div", { "aria-hidden": !0 }, e)));
}), $ = Object.assign(Wa, {
	List: Ya,
	Item: Ga,
	Input: Ja,
	Group: Ka,
	Separator: qa,
	Dialog: Xa,
	Empty: Za,
	Loading: Qa
});
function $a(e, t) {
	let n = e.nextElementSibling;
	for (; n;) {
		if (n.matches(t)) return n;
		n = n.nextElementSibling;
	}
}
function eo(e, t) {
	let n = e.previousElementSibling;
	for (; n;) {
		if (n.matches(t)) return n;
		n = n.previousElementSibling;
	}
}
function to(e) {
	let t = I.useRef(e);
	return no(() => {
		t.current = e;
	}), t;
}
var no = typeof window > "u" ? I.useEffect : I.useLayoutEffect;
function ro(e) {
	let t = I.useRef();
	return t.current === void 0 && (t.current = e()), t;
}
function io(e) {
	let t = Ha(), n = () => e(t.snapshot());
	return I.useSyncExternalStore(t.subscribe, n, n);
}
function ao(e, t, n, r = []) {
	let i = I.useRef(), a = Ba();
	return no(() => {
		var o;
		let s = (() => {
			for (let e of n) {
				if (typeof e == "string") return e.trim();
				if (typeof e == "object" && "current" in e) return e.current ? e.current.textContent?.trim() : i.current;
			}
		})(), c = r.map((e) => e.trim());
		a.value(e, s, c), (o = t.current) == null || o.setAttribute(La, s), i.current = s;
	}), i;
}
var oo = () => {
	let [e, t] = I.useState(), n = ro(() => /* @__PURE__ */ new Map());
	return no(() => {
		n.current.forEach((e) => e()), n.current = /* @__PURE__ */ new Map();
	}, [e]), (e, r) => {
		n.current.set(e, r), t({});
	};
};
function so(e) {
	let t = e.type;
	return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function co({ asChild: e, children: t }, n) {
	return e && I.isValidElement(t) ? I.cloneElement(so(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var lo = {
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: "0",
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	borderWidth: "0"
}, uo = I.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, L.jsx)($, {
	ref: n,
	className: F("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", e),
	...t
}));
uo.displayName = $.displayName;
var fo = I.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, L.jsxs)("div", {
	className: "flex items-center gap-2 border-b px-3",
	"cmdk-input-wrapper": "",
	children: [/* @__PURE__ */ (0, L.jsx)(me, { className: "size-4! shrink-0 opacity-50" }), /* @__PURE__ */ (0, L.jsx)($.Input, {
		ref: n,
		className: F("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-hidden placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", e),
		...t
	})]
}));
fo.displayName = $.Input.displayName;
var po = I.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, L.jsx)("div", {
	className: "flex items-center",
	"cmdk-input-wrapper": "",
	children: /* @__PURE__ */ (0, L.jsx)($.Input, {
		ref: n,
		className: F("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50", "focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring", e),
		...t
	})
}));
po.displayName = $.Input.displayName;
var mo = I.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, L.jsx)($.List, {
	ref: n,
	className: F("max-h-[300px] overflow-y-auto overflow-x-hidden", e),
	...t
}));
mo.displayName = $.List.displayName;
var ho = I.forwardRef((e, t) => /* @__PURE__ */ (0, L.jsx)($.Empty, {
	ref: t,
	className: "py-6 text-center text-sm",
	...e
}));
ho.displayName = $.Empty.displayName;
var go = I.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, L.jsx)($.Group, {
	ref: n,
	className: F("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", e),
	...t
}));
go.displayName = $.Group.displayName;
var _o = I.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, L.jsx)($.Separator, {
	ref: n,
	className: F("-mx-1 h-px bg-border", e),
	...t
}));
_o.displayName = $.Separator.displayName;
var vo = I.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, L.jsx)($.Item, {
	ref: n,
	className: F("relative flex cursor-default gap-2 select-none items-center rounded-xs px-2 py-1.5 text-sm outline-hidden data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", e),
	...t
}));
vo.displayName = $.Item.displayName;
var yo = ({ className: e, ...t }) => /* @__PURE__ */ (0, L.jsx)("span", {
	className: F("ml-auto text-xs tracking-widest text-muted-foreground", e),
	...t
});
yo.displayName = "CommandShortcut";
//#endregion
//#region src/lib/components/Autocomplete.tsx
var bo = ({ value: e, options: t, onChange: n, className: r, placeholder: i = "Value", onEnterPress: a, onKeyDown: o, ref: s, onSelect: c }) => {
	let [l, u] = (0, I.useState)(!1), [d, f] = (0, I.useState)(!1), p = io((e) => e.filtered.count), m = (0, I.useRef)(null);
	return /* @__PURE__ */ (0, L.jsxs)(qe, {
		open: l,
		children: [/* @__PURE__ */ (0, L.jsx)(Ke, { children: /* @__PURE__ */ (0, L.jsx)(po, {
			autoComplete: "off",
			ref: (e) => {
				m.current = e, typeof s == "function" ? s(e) : s && (s.current = e);
			},
			value: e ? String(e) : void 0,
			placeholder: i,
			className: F("h-9 bg-transparent", r),
			onFocus: () => u(!0),
			onBlur: () => {
				d || u(!1);
			},
			onKeyDown: (e) => {
				o?.(e), !e.defaultPrevented && e.key === "Enter" && (u(!1), m.current?.blur(), a?.(e));
			},
			onValueChange: (e) => n(e)
		}) }), /* @__PURE__ */ (0, L.jsx)(Ge, {
			onMouseEnter: () => f(!0),
			onMouseLeave: () => f(!1),
			onOpenAutoFocus: (e) => e.preventDefault(),
			className: F("p-0 w-(--radix-popover-trigger-width)", { "border-0": p === 0 }),
			align: "start",
			side: "bottom",
			onWheel: (e) => {
				e.stopPropagation();
			},
			onTouchMove: (e) => {
				e.stopPropagation();
			},
			children: /* @__PURE__ */ (0, L.jsx)(mo, {
				className: "max-h-[140px]",
				children: t.map((e) => /* @__PURE__ */ (0, L.jsx)(vo, {
					value: e,
					onSelect: (e) => {
						c?.(e), n(e), u(!1);
					},
					className: "cursor-pointer",
					children: e
				}, e))
			})
		})]
	});
}, xo = ({ shouldFilter: e, ...t }) => /* @__PURE__ */ (0, L.jsx)(uo, {
	className: "bg-transparent",
	shouldFilter: e,
	children: /* @__PURE__ */ (0, L.jsx)(bo, { ...t })
}), So = Object.freeze(/* @__PURE__ */ "Accept.Accept-Encoding.Accept-Language.Authorization.Cache-Control.Connection.Content-Disposition.Content-Encoding.Content-Language.Content-Length.Content-Range.Content-Security-Policy.Content-Type.Cookie.Date.ETag.Expires.Host.If-Modified-Since.Location.Origin.Pragma.Referer.Set-Cookie.User-Agent.X-Requested-With".split(".")), Co = ({ control: e, schemaHeaders: t, lockedHeaders: n }) => {
	let { watch: i, formState: a } = hr(), o = i("headers"), s = aa({
		control: e,
		name: "headers",
		defaultValue: {
			name: "",
			value: "",
			active: !1
		}
	}), c = t.filter((e) => !o.some((t) => t.name === e.name)).map(({ name: e }) => e), l = s.fields.flatMap((e, t) => n?.map((e) => e.toLowerCase()).includes(e.name.toLowerCase()) ? [t] : []), u = n?.map((e) => ({
		name: e,
		id: `locked-${e}`,
		value: "••••••••••",
		active: !0,
		locked: !0
	})) ?? [];
	return /* @__PURE__ */ (0, L.jsxs)(M, {
		defaultOpen: !0,
		children: [/* @__PURE__ */ (0, L.jsxs)(Ni, { children: [/* @__PURE__ */ (0, L.jsx)(At, {
			size: 14,
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, L.jsx)(Pi, { children: "Headers" })] }), /* @__PURE__ */ (0, L.jsx)(_e, {
			className: "CollapsibleContent",
			children: /* @__PURE__ */ (0, L.jsx)("div", {
				className: "flex flex-col gap-2",
				children: /* @__PURE__ */ (0, L.jsx)("div", {
					className: "overflow-hidden",
					children: /* @__PURE__ */ (0, L.jsxs)(Li, { children: [u.map((e) => /* @__PURE__ */ (0, L.jsxs)(ye, { children: [/* @__PURE__ */ (0, L.jsx)(ve, {
						asChild: !0,
						children: /* @__PURE__ */ (0, L.jsxs)(Ri, {
							className: "opacity-50 cursor-not-allowed font-mono text-xs min-h-10",
							children: [
								/* @__PURE__ */ (0, L.jsx)(r, {
									size: 16,
									"aria-hidden": "true"
								}),
								/* @__PURE__ */ (0, L.jsx)(Z, {
									value: e.name,
									disabled: !0
								}),
								/* @__PURE__ */ (0, L.jsx)("div", { children: e.value })
							]
						}, e.id)
					}), /* @__PURE__ */ (0, L.jsx)(fe, {
						alignOffset: 10,
						side: "bottom",
						align: "start",
						children: /* @__PURE__ */ (0, L.jsx)("p", { children: "This header is set by the selected authentication." })
					})] }, e.id)), s.fields.map((e, n) => {
						let r = t.find((e) => e.name === o.at(n)?.name), i = r?.enum && r.enum.length > 0, u = l.includes(n), d = s.getNameInputProps(n), f = s.getValueInputProps(n);
						return /* @__PURE__ */ (0, L.jsxs)(Ri, {
							className: F(u && "text-amber-600", u && !a.dirtyFields.headers?.[n]?.value && "hidden"),
							children: [
								/* @__PURE__ */ (0, L.jsx)(na, {
									className: F(u && "hidden"),
									...s.getCheckboxProps(n)
								}),
								/* @__PURE__ */ (0, L.jsxs)(ye, { children: [/* @__PURE__ */ (0, L.jsx)(ve, {
									asChild: !0,
									children: /* @__PURE__ */ (0, L.jsx)(ht, {
										className: F("text-amber-600", !u && "hidden"),
										size: 16,
										"aria-hidden": "true"
									})
								}), /* @__PURE__ */ (0, L.jsx)(fe, {
									alignOffset: 10,
									side: "bottom",
									align: "start",
									children: /* @__PURE__ */ (0, L.jsx)("p", { children: "This header will be overwritten by the selected authentication." })
								})] }),
								/* @__PURE__ */ (0, L.jsx)(Z, {
									asChild: !0,
									children: /* @__PURE__ */ (0, L.jsx)(xo, {
										...d,
										value: String(s.getValue(n, "name")),
										placeholder: "Name",
										options: [...c, ...So],
										onChange: (e) => s.setValue(n, "name", e),
										onSelect: (e) => s.setValue(n, "name", e, { focus: "next" })
									})
								}),
								/* @__PURE__ */ (0, L.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [i ? /* @__PURE__ */ (0, L.jsx)(Z, {
										asChild: !0,
										children: /* @__PURE__ */ (0, L.jsx)(xo, {
											...f,
											value: String(s.getValue(n, "value")),
											shouldFilter: !1,
											options: r.enum ?? [],
											onChange: (e) => s.setValue(n, "value", e),
											onSelect: (e) => s.setValue(n, "value", e, { focus: "next" })
										})
									}) : /* @__PURE__ */ (0, L.jsx)(Z, {
										placeholder: "Value",
										autoComplete: "off",
										...f
									}), /* @__PURE__ */ (0, L.jsx)(zi, { ...s.getRemoveButtonProps(n) })]
								})
							]
						}, e.id);
					})] })
				})
			})
		})]
	});
}, wo = ({ onSubmit: e, identities: t, open: n, onOpenChange: r }) => {
	let [i, a] = (0, I.useState)(void 0), [o, s] = (0, I.useState)(!1);
	return /* @__PURE__ */ (0, L.jsx)(ie, {
		open: n,
		onOpenChange: r,
		children: /* @__PURE__ */ (0, L.jsxs)(ee, { children: [
			/* @__PURE__ */ (0, L.jsx)(T, { children: "Select an auth identity" }),
			/* @__PURE__ */ (0, L.jsx)(C, { children: "Please select an identity for this request." }),
			/* @__PURE__ */ (0, L.jsx)(Ye, {
				className: "max-h-80 overflow-auto",
				children: /* @__PURE__ */ (0, L.jsx)(Sn, {
					identities: t,
					selection: Rt(i),
					onSelectionChange: (e) => a(e.type === "identity" ? e.id : void 0)
				})
			}),
			/* @__PURE__ */ (0, L.jsxs)(k, {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ (0, L.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, L.jsx)(na, {
						id: "remember",
						checked: o,
						onCheckedChange: (e) => s(e === "indeterminate" ? !1 : !!e)
					}), /* @__PURE__ */ (0, L.jsx)(Wt, {
						htmlFor: "remember",
						children: "Remember my choice"
					})]
				}), /* @__PURE__ */ (0, L.jsx)(P, {
					onClick: () => e({
						identity: i,
						rememberedIdentity: o
					}),
					children: "Send"
				})]
			})
		] })
	});
}, To = ({ control: e, url: t }) => {
	let { fields: n } = vi({
		control: e,
		name: "pathParams"
	});
	return /* @__PURE__ */ (0, L.jsx)(Li, { children: [...n].sort((e, n) => t.indexOf(`{${e.name}}`) - t.indexOf(`{${n.name}}`)).map((t, n) => /* @__PURE__ */ (0, L.jsxs)(Ri, { children: [/* @__PURE__ */ (0, L.jsx)(pr, {
		control: e,
		name: `pathParams.${n}.name`,
		render: () => /* @__PURE__ */ (0, L.jsx)("div", {
			className: "flex items-center",
			children: /* @__PURE__ */ (0, L.jsx)(An, {
				slug: t.name,
				name: t.name,
				className: "font-mono text-xs px-2"
			})
		})
	}), /* @__PURE__ */ (0, L.jsx)("div", {
		className: "flex justify-between items-center col-span-2",
		children: /* @__PURE__ */ (0, L.jsx)(pr, {
			control: e,
			name: `pathParams.${n}.value`,
			render: ({ field: e }) => /* @__PURE__ */ (0, L.jsx)(Z, {
				...e,
				required: !0,
				placeholder: "Value"
			})
		})
	})] }, t.id)) });
}, Eo = ({ options: e, value: t, onChange: n, placeholder: r = "Select values...", className: i }) => {
	let [a, o] = (0, I.useState)(!1), s = (e) => {
		t.includes(e) ? n(t.filter((t) => t !== e)) : n([...t, e]);
	};
	return /* @__PURE__ */ (0, L.jsxs)(qe, {
		open: a,
		onOpenChange: o,
		children: [/* @__PURE__ */ (0, L.jsx)(Ue, {
			asChild: !0,
			children: /* @__PURE__ */ (0, L.jsxs)("button", {
				type: "button",
				className: F("flex items-center justify-between w-full h-9 bg-transparent text-xs font-mono text-left truncate", !t.length && "text-muted-foreground", i),
				children: [/* @__PURE__ */ (0, L.jsx)("span", {
					className: "truncate",
					children: t.length > 0 ? t.join(", ") : r
				}), /* @__PURE__ */ (0, L.jsx)(Te, { className: "size-3.5 shrink-0 opacity-50" })]
			})
		}), /* @__PURE__ */ (0, L.jsx)(Ge, {
			className: "p-1 w-(--radix-popover-trigger-width)",
			align: "start",
			side: "bottom",
			onWheel: (e) => e.stopPropagation(),
			onTouchMove: (e) => e.stopPropagation(),
			children: /* @__PURE__ */ (0, L.jsx)("div", {
				className: "max-h-[140px] overflow-y-auto",
				children: e.map((e) => {
					let n = t.includes(e);
					return /* @__PURE__ */ (0, L.jsxs)("button", {
						type: "button",
						className: "flex items-center gap-2 w-full rounded-xs px-2 py-1.5 text-sm cursor-pointer hover:bg-accent hover:text-accent-foreground",
						onClick: () => s(e),
						children: [/* @__PURE__ */ (0, L.jsx)("span", {
							className: F("flex size-4 shrink-0 items-center justify-center rounded-[4px] border", n && "bg-primary border-primary text-primary-foreground"),
							children: n && /* @__PURE__ */ (0, L.jsx)(xe, { className: "size-3" })
						}), /* @__PURE__ */ (0, L.jsx)("span", {
							className: "truncate font-mono text-xs",
							children: e
						})]
					}, e);
				})
			})
		})]
	});
}, Do = ({ control: e, schemaQueryParams: t }) => {
	let { watch: n } = hr(), r = n("queryParams"), i = aa({
		control: e,
		name: "queryParams",
		defaultValue: {
			name: "",
			value: "",
			active: !1
		},
		shouldSetActive: (e) => {
			let n = t.find((t) => t.name === e.name);
			if (n) {
				let t = n.isRequired ?? !1, r = !!e.value;
				return t || r;
			}
			return !!(e.name || e.value);
		}
	}), a = t.map((e) => !!e.isRequired), o = t.length > 0;
	return /* @__PURE__ */ (0, L.jsxs)(M, {
		defaultOpen: !0,
		children: [/* @__PURE__ */ (0, L.jsxs)(Ni, { children: [/* @__PURE__ */ (0, L.jsx)(Mt, {
			size: 16,
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, L.jsx)(Pi, { children: "Query Parameters" })] }), /* @__PURE__ */ (0, L.jsx)(_e, {
			className: "CollapsibleContent",
			children: /* @__PURE__ */ (0, L.jsx)(Li, { children: i.fields.map((e, n) => {
				let s = t.find((e) => e.name === r.at(n)?.name), c = s?.enum && s.enum.length > 0, l = s?.type === "array" && c, u = i.getNameInputProps(n), d = i.getValueInputProps(n);
				return /* @__PURE__ */ (0, L.jsxs)(Ri, { children: [
					/* @__PURE__ */ (0, L.jsx)(na, { ...i.getCheckboxProps(n) }),
					a[n] ? /* @__PURE__ */ (0, L.jsx)(Z, {
						asChild: !0,
						children: /* @__PURE__ */ (0, L.jsxs)("label", {
							className: "flex items-center cursor-pointer gap-1",
							htmlFor: `queryParams.${n}.active`,
							title: a[n] ? "Required field" : void 0,
							children: [r[n]?.name, a[n] && /* @__PURE__ */ (0, L.jsx)("span", { children: "\xA0*" })]
						})
					}) : o ? /* @__PURE__ */ (0, L.jsx)(Z, {
						asChild: !0,
						children: /* @__PURE__ */ (0, L.jsx)(xo, {
							...u,
							value: String(i.getValue(n, "name")),
							placeholder: "Name",
							options: t.map((e) => e.name),
							onChange: (e) => i.setValue(n, "name", e),
							onSelect: (e) => i.setValue(n, "name", e, { focus: "next" })
						})
					}) : /* @__PURE__ */ (0, L.jsx)(Z, {
						...u,
						placeholder: "Name"
					}),
					/* @__PURE__ */ (0, L.jsxs)("div", {
						className: "flex justify-between items-center",
						children: [l ? /* @__PURE__ */ (0, L.jsx)(Z, {
							asChild: !0,
							children: /* @__PURE__ */ (0, L.jsx)(Eo, {
								options: s.enum ?? [],
								value: ca(String(i.getValue(n, "value"))),
								onChange: (e) => {
									i.setValue(n, "value", e.length > 0 ? JSON.stringify(e) : "");
								}
							})
						}) : c ? /* @__PURE__ */ (0, L.jsx)(Z, {
							asChild: !0,
							children: /* @__PURE__ */ (0, L.jsx)(xo, {
								...d,
								value: String(i.getValue(n, "value")),
								shouldFilter: !1,
								options: s.enum ?? [],
								onChange: (e) => i.setValue(n, "value", e),
								onSelect: (e) => i.setValue(n, "value", e, { focus: "next" })
							})
						}) : /* @__PURE__ */ (0, L.jsx)(Z, {
							placeholder: "Value",
							"aria-label": "Query parameter value",
							...d
						}), /* @__PURE__ */ (0, L.jsx)(zi, { ...i.getRemoveButtonProps(n) })]
					})
				] }, e.id);
			}) })
		})]
	});
}, Oo = ({ url: e }) => {
	let { watch: t, setFocus: n } = hr(), [r] = t(["pathParams"]);
	return /* @__PURE__ */ (0, L.jsx)(jn, {
		path: e,
		renderParam: ({ name: e, originalValue: t, index: i }) => {
			let a = r.find((t) => t.name === e)?.value;
			return /* @__PURE__ */ (0, L.jsx)(An, {
				name: e,
				backgroundOpacity: "0",
				slug: e,
				onClick: () => n(`pathParams.${i}.value`),
				children: a || t
			});
		}
	});
}, ko = () => {
	let { watch: e } = hr(), t = da(e("queryParams"));
	if (!t) return null;
	let n = t.split("&");
	return /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: ["?", n.map((e, t) => /* @__PURE__ */ (0, L.jsxs)(I.Fragment, { children: [
		e,
		t < n.length - 1 && "&",
		/* @__PURE__ */ (0, L.jsx)("wbr", {})
	] }, `${t}-${e}`))] });
}, Ao = ({ open: e, setOpen: t, onSignUp: n, onLogin: r, onSkip: i }) => {
	let [a, o] = (0, I.useState)(!1);
	return /* @__PURE__ */ (0, L.jsx)(ie, {
		open: e,
		onOpenChange: t,
		children: /* @__PURE__ */ (0, L.jsxs)(ee, { children: [
			/* @__PURE__ */ (0, L.jsx)(T, { children: "Welcome to the Playground!" }),
			/* @__PURE__ */ (0, L.jsx)(C, { children: "The Playground is a tool for developers to test and explore our APIs. To use the Playground, you need to login." }),
			/* @__PURE__ */ (0, L.jsxs)(Wt, {
				className: "flex items-center gap-2 font-normal",
				children: [/* @__PURE__ */ (0, L.jsx)(na, {
					checked: a,
					onCheckedChange: (e) => o(e === !0)
				}), "Don't show this again"]
			}),
			/* @__PURE__ */ (0, L.jsxs)(k, {
				className: "flex gap-2 sm:justify-between",
				children: [/* @__PURE__ */ (0, L.jsx)(P, {
					type: "button",
					variant: "outline",
					onClick: () => {
						i?.(a), t(!1);
					},
					children: "Skip"
				}), /* @__PURE__ */ (0, L.jsxs)("div", {
					className: "flex gap-2",
					children: [n && /* @__PURE__ */ (0, L.jsx)(P, {
						type: "button",
						variant: "outline",
						onClick: n,
						children: "Sign Up"
					}), r && /* @__PURE__ */ (0, L.jsx)(P, {
						type: "button",
						variant: "default",
						onClick: r,
						children: "Login"
					})]
				})]
			})
		] })
	});
}, jo = ({ status: e }) => {
	if (!e) return /* @__PURE__ */ (0, L.jsx)("div", { className: "w-2 h-2 rounded-full bg-gray-500" });
	switch (Number(e.toString().slice(0, 1))) {
		case 2: return /* @__PURE__ */ (0, L.jsx)("div", { className: "w-2 h-2 rounded-full bg-green-500" });
		case 4: return /* @__PURE__ */ (0, L.jsx)("div", { className: "w-2 h-2 rounded-full bg-yellow-400" });
		case 5: return /* @__PURE__ */ (0, L.jsx)("div", { className: "w-2 h-2 rounded-full bg-red-500" });
		default: return /* @__PURE__ */ (0, L.jsx)("div", { className: "w-2 h-2 rounded-full bg-gray-500" });
	}
}, Mo = () => {
	let e = (0, I.useRef)(null), t = (0, I.useRef)(null), n = (0, I.useRef)(Date.now()), r = (0, I.useRef)(null), i = (0, I.useCallback)(() => {
		if (t.current) {
			let e = Date.now() - n.current;
			t.current.nodeValue = e.toFixed();
		}
		r.current = requestAnimationFrame(i);
	}, []);
	return (0, I.useLayoutEffect)(() => {
		let a = e.current;
		if (!a) return;
		let o = document.createTextNode("0");
		return a.appendChild(o), t.current = o, n.current = Date.now(), r.current = requestAnimationFrame(i), () => {
			r.current && cancelAnimationFrame(r.current), t.current && a.contains(o) && a.removeChild(o);
		};
	}, [i]), /* @__PURE__ */ (0, L.jsx)("span", {
		className: "inline-block text-end w-[3ch]",
		ref: e
	});
}, No = ({ status: e, time: t, size: n, isFinished: r, progress: i }) => /* @__PURE__ */ (0, L.jsxs)("div", {
	className: "relative shrink-0 flex h-10 text-xs gap-4 px-4 items-center justify-between font-mono border-b",
	children: [
		/* @__PURE__ */ (0, L.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, L.jsx)(jo, { status: e }),
				" ",
				e ?? "Sending Request...",
				e ? ` ${{
					200: "OK",
					201: "Created",
					202: "Accepted",
					204: "No Content",
					400: "Bad Request",
					401: "Unauthorized",
					403: "Forbidden",
					404: "Not Found",
					405: "Method Not Allowed",
					500: "Internal Server Error"
				}[e]}` : ""
			]
		}),
		/* @__PURE__ */ (0, L.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, L.jsxs)("div", { children: [
				/* @__PURE__ */ (0, L.jsx)("span", {
					className: "text-muted-foreground",
					children: "Size"
				}),
				" ",
				/* @__PURE__ */ (0, L.jsx)("span", {
					className: "inline-block text-end min-w-[5ch]",
					children: n ? Si(n) : "- B"
				})
			] }), /* @__PURE__ */ (0, L.jsxs)("div", { children: [
				/* @__PURE__ */ (0, L.jsx)("span", {
					className: "text-muted-foreground",
					children: "Time"
				}),
				" ",
				t === void 0 ? /* @__PURE__ */ (0, L.jsx)(Mo, {}) : `${t.toFixed(0)}`,
				"ms"
			] })]
		}),
		/* @__PURE__ */ (0, L.jsx)("div", {
			className: "h-full bg-neutral-500/10 absolute left-0 bottom-0 z-10 transition-all duration-200 ease-in-out",
			style: {
				opacity: +!r,
				width: r ? 0 : `${i * 100}%`
			}
		})
	]
}), Po = ({ secret: e, revealed: t = !1, previewChars: n = 5, className: r }) => {
	if (t) return /* @__PURE__ */ (0, L.jsx)("span", {
		className: r,
		children: e
	});
	let i = "•••• ".repeat(e.slice(0, -n).length / 5) + "•".repeat(e.slice(0, -n).length % 5), a = n > 0 ? e.slice(-n) : "";
	return /* @__PURE__ */ (0, L.jsx)("span", {
		className: F("block overflow-hidden text-ellipsis whitespace-nowrap", r),
		dir: "rtl",
		children: /* @__PURE__ */ (0, L.jsxs)("span", {
			dir: "ltr",
			className: "inline",
			children: [/* @__PURE__ */ (0, L.jsx)("span", {
				className: "opacity-50",
				children: i
			}), a && /* @__PURE__ */ (0, L.jsx)("span", { children: a })]
		})
	});
}, Fo = ({ blob: e, fileName: t, size: n, onDownload: r }) => {
	let [i, a] = (0, I.useState)(null);
	return (0, I.useEffect)(() => {
		let t = URL.createObjectURL(e);
		return a(t), () => {
			URL.revokeObjectURL(t);
		};
	}, [e]), i ? /* @__PURE__ */ (0, L.jsx)("div", {
		className: "p-4 text-center",
		children: /* @__PURE__ */ (0, L.jsxs)("div", {
			className: "flex flex-col items-center gap-4",
			children: [/* @__PURE__ */ (0, L.jsx)("audio", {
				controls: !0,
				src: i,
				className: "w-full max-w-md",
				children: "Your browser does not support the audio element."
			}), /* @__PURE__ */ (0, L.jsxs)(P, {
				onClick: r,
				className: "flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, L.jsx)(Re, { className: "h-4 w-4" }),
					"Download ",
					t,
					" (",
					Si(n),
					")"
				]
			})]
		})
	}) : /* @__PURE__ */ (0, L.jsx)("div", {
		className: "p-4 text-center",
		children: /* @__PURE__ */ (0, L.jsx)("div", {
			className: "text-sm text-muted-foreground",
			children: "Loading audio..."
		})
	});
};
//#endregion
//#region src/lib/plugins/openapi/playground/result-panel/convertToTypes.ts
function Io(e, t = "") {
	if (e === null) return "null";
	if (Array.isArray(e)) {
		if (e.length === 0) return "any[]";
		let n = e[0];
		return n === void 0 ? "any[]" : `${Io(n, t)}[]`;
	}
	return typeof e == "object" ? Lo(e, t) : typeof e;
}
function Lo(e, t = "") {
	let n = `${t}  `, r = ["{"];
	for (let [t, i] of Object.entries(e)) {
		let e = Io(i, n);
		r.push(`${n}${t}: ${e};`);
	}
	return r.push(`${t}}`), r.join("\n");
}
var Ro = (e) => {
	let t = e.split(/[^a-zA-Z0-9]+/).filter(Boolean).map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join("");
	if (!(!t || /^\d/.test(t))) return t;
};
function zo(e, t) {
	return { lines: [`type ${(t ? Ro(t) : void 0) ?? "GeneratedType"} = ${Io(e)};`] };
}
//#endregion
//#region src/lib/plugins/openapi/playground/result-panel/ResponseTab.tsx
var Bo = (e) => Object.entries({
	"application/json": "json",
	"text/json": "json",
	"text/html": "html",
	"text/css": "css",
	"text/javascript": "javascript",
	"application/xml": "xml",
	"application/xhtml+xml": "xhtml"
}).find(([t]) => e.includes(t))?.[1], Vo = (e) => e.find(([e]) => e.toLowerCase() === "content-type")?.[1] || "", Ho = (e) => Bo(Vo(e)), Uo = (e) => {
	try {
		return JSON.stringify(JSON.parse(e), null, 2);
	} catch {
		return null;
	}
}, Wo = (e) => {
	let t = [
		"Content-Type",
		"Content-Length",
		"Authorization",
		"X-RateLimit-Remaining",
		"X-RateLimit-Limit",
		"Cache-Control",
		"ETag"
	].map((e) => e.toLowerCase());
	return [...e].sort(([e], [n]) => {
		let r = t.indexOf(e.toLowerCase()), i = t.indexOf(n.toLowerCase());
		return r === i ? 0 : r === -1 ? 1 : i === -1 ? -1 : r - i;
	});
}, Go = 3, Ko = Ii("div", "grid-cols-subgrid grid border-b col-span-full px-4 py-1.5 font-mono text-xs"), qo = Ii("div", "py-1 break-words"), Jo = ({ value: e, header: t }) => {
	let n = [
		"authorization",
		"key",
		"secret",
		"token"
	].includes(t.toLowerCase()), [r, i] = (0, I.useState)(!n);
	return /* @__PURE__ */ (0, L.jsx)(qo, {
		className: F("max-h-28 overflow-auto", n && "cursor-pointer flex group"),
		onClick: () => {
			n && i((e) => !e);
		},
		children: n ? /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [/* @__PURE__ */ (0, L.jsx)(Po, {
			secret: e,
			previewChars: 0,
			revealed: r
		}), r ? /* @__PURE__ */ (0, L.jsx)(Ve, {
			size: 14,
			className: F("hidden group-hover:block"),
			"aria-hidden": "true"
		}) : /* @__PURE__ */ (0, L.jsx)(He, {
			size: 14,
			className: F("hidden group-hover:block"),
			"aria-hidden": "true"
		})] }) : e
	});
}, Yo = ({ body: e = "", headers: t, request: n, size: r, isBinary: i = !1, fileName: a, blob: o, typeName: s }) => {
	let c = Ho(t), l = Uo(e), u = l || e, [d, f] = (0, I.useState)(l ? "formatted" : "raw"), p = ue({
		queryKey: [
			"types",
			u,
			s
		],
		queryFn: async () => zo(JSON.parse(u), s),
		enabled: d === "types" && !i
	}), m = () => {
		if (o && a) {
			let e = URL.createObjectURL(o), t = document.createElement("a");
			t.href = e, t.download = a, document.body.appendChild(t), t.click(), document.body.removeChild(t), URL.revokeObjectURL(e);
		}
	}, h = Wo([...t]);
	return /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [
		/* @__PURE__ */ (0, L.jsxs)(M, {
			defaultOpen: !0,
			children: [/* @__PURE__ */ (0, L.jsxs)(Ni, { children: [/* @__PURE__ */ (0, L.jsx)(bt, {
				size: 14,
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, L.jsx)(Pi, { children: "Request Headers" })] }), /* @__PURE__ */ (0, L.jsx)(_e, { children: /* @__PURE__ */ (0, L.jsxs)("div", {
				className: "grid grid-cols-[2fr_3fr] gap-x-6 text-sm",
				children: [n.headers.slice(0, Go).map(([e, t]) => /* @__PURE__ */ (0, L.jsxs)(Ko, { children: [/* @__PURE__ */ (0, L.jsx)(qo, { children: e }), /* @__PURE__ */ (0, L.jsx)(Jo, {
					value: t,
					header: e
				})] }, e)), n.headers.length > Go && /* @__PURE__ */ (0, L.jsxs)(M, {
					className: "col-span-full grid-cols-subgrid grid group",
					children: [/* @__PURE__ */ (0, L.jsxs)(j, {
						className: "data-[state=open]:hidden justify-center col-span-2 text-xs text-muted-foreground hover:text-primary border-b h-8 flex items-center gap-2",
						children: [
							"Show ",
							n.headers.length - Go,
							" more headers",
							/* @__PURE__ */ (0, L.jsx)(vt, {
								size: 12,
								className: "text-muted-foreground",
								"aria-hidden": "true"
							})
						]
					}), /* @__PURE__ */ (0, L.jsxs)(_e, {
						className: "col-span-full grid grid-cols-subgrid",
						children: [n.headers.slice(Go).map(([e, t]) => /* @__PURE__ */ (0, L.jsxs)(Ko, { children: [/* @__PURE__ */ (0, L.jsx)(qo, { children: e }), /* @__PURE__ */ (0, L.jsx)(Jo, {
							value: t,
							header: e
						})] }, e)), /* @__PURE__ */ (0, L.jsxs)(j, {
							className: "justify-center col-span-2 text-xs text-muted-foreground hover:text-primary border-b h-8 flex items-center gap-2",
							children: [
								"Hide ",
								n.headers.length - Go,
								" headers",
								/* @__PURE__ */ (0, L.jsx)(_t, {
									size: 12,
									className: "text-muted-foreground",
									"aria-hidden": "true"
								})
							]
						})]
					})]
				})]
			}) })]
		}),
		/* @__PURE__ */ (0, L.jsxs)(M, {
			defaultOpen: !0,
			children: [/* @__PURE__ */ (0, L.jsxs)(Ni, { children: [/* @__PURE__ */ (0, L.jsx)(yt, {
				size: 14,
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, L.jsx)(Pi, { children: "Response Headers" })] }), /* @__PURE__ */ (0, L.jsx)(_e, { children: /* @__PURE__ */ (0, L.jsxs)("div", {
				className: "grid grid-cols-[2fr_3fr] gap-x-6 text-sm",
				children: [h.slice(0, Go).map(([e, t]) => /* @__PURE__ */ (0, L.jsxs)(Ko, { children: [/* @__PURE__ */ (0, L.jsx)(qo, { children: e }), /* @__PURE__ */ (0, L.jsx)(Jo, {
					value: t,
					header: e
				})] }, e)), h.length > Go && /* @__PURE__ */ (0, L.jsxs)(M, {
					className: "col-span-full grid-cols-subgrid grid group",
					children: [/* @__PURE__ */ (0, L.jsxs)(j, {
						className: "data-[state=open]:hidden justify-center col-span-2 text-xs text-muted-foreground hover:text-primary border-b h-8 flex items-center gap-2",
						children: [
							"Show ",
							h.length - Go,
							" more headers",
							/* @__PURE__ */ (0, L.jsx)(vt, {
								size: 12,
								className: "text-muted-foreground",
								"aria-hidden": "true"
							})
						]
					}), /* @__PURE__ */ (0, L.jsxs)(_e, {
						className: "col-span-full grid grid-cols-subgrid",
						children: [h.slice(Go).map(([e, t]) => /* @__PURE__ */ (0, L.jsxs)(Ko, { children: [/* @__PURE__ */ (0, L.jsx)(qo, { children: e }), /* @__PURE__ */ (0, L.jsx)(Jo, {
							value: t,
							header: e
						})] }, e)), /* @__PURE__ */ (0, L.jsxs)(j, {
							className: "justify-center col-span-2 text-xs text-muted-foreground hover:text-primary border-b h-8 flex items-center gap-2",
							children: [
								"Hide ",
								h.length - Go,
								" headers",
								/* @__PURE__ */ (0, L.jsx)(_t, {
									size: 12,
									className: "text-muted-foreground",
									"aria-hidden": "true"
								})
							]
						})]
					})]
				})]
			}) })]
		}),
		/* @__PURE__ */ (0, L.jsxs)("div", {
			className: "flex gap-2 justify-between items-center border-b px-4 flex-0",
			children: [/* @__PURE__ */ (0, L.jsxs)(Pi, {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, L.jsx)(kt, {
					size: 14,
					"aria-hidden": "true"
				}), "Response body"]
			}), l && !i && /* @__PURE__ */ (0, L.jsxs)(Be, {
				value: d,
				onValueChange: (e) => f(e),
				children: [/* @__PURE__ */ (0, L.jsx)(Ie, {
					className: "max-w-32 border-0 shadow-none bg-transparent! px-0",
					children: /* @__PURE__ */ (0, L.jsx)(Fe, { placeholder: "View" })
				}), /* @__PURE__ */ (0, L.jsxs)(Le, { children: [
					/* @__PURE__ */ (0, L.jsx)(ze, {
						value: "formatted",
						children: "Formatted"
					}),
					/* @__PURE__ */ (0, L.jsx)(ze, {
						value: "raw",
						children: "Raw"
					}),
					/* @__PURE__ */ (0, L.jsx)(ze, {
						value: "types",
						children: "Types"
					})
				] })]
			})]
		}),
		/* @__PURE__ */ (0, L.jsx)("div", {
			className: "flex-1 min-h-0",
			children: i ? o && ma(Vo(t)) ? /* @__PURE__ */ (0, L.jsx)(Fo, {
				blob: o,
				fileName: a ?? "audio",
				size: r,
				onDownload: m
			}) : /* @__PURE__ */ (0, L.jsx)("div", {
				className: "p-4 text-center",
				children: /* @__PURE__ */ (0, L.jsxs)("div", {
					className: "flex flex-col items-center gap-4",
					children: [
						/* @__PURE__ */ (0, L.jsx)("div", {
							className: "text-lg font-semibold",
							children: "Binary Content"
						}),
						/* @__PURE__ */ (0, L.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: "This response contains binary data that cannot be displayed as text."
						}),
						/* @__PURE__ */ (0, L.jsxs)(P, {
							onClick: m,
							className: "flex items-center gap-2",
							disabled: !o,
							children: [
								/* @__PURE__ */ (0, L.jsx)(Re, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}),
								"Download ",
								a || "file",
								" (",
								Si(r),
								")"
							]
						})
					]
				})
			}) : /* @__PURE__ */ (0, L.jsx)(ut, {
				className: "text-xs flex-1",
				embedded: !0,
				fullHeight: !0,
				language: d === "types" ? "typescript" : d === "raw" ? l ? "text" : c : "json",
				code: (d === "raw" ? e : d === "types" ? p.data?.lines.join("\n") : u) ?? ""
			})
		})
	] });
}, Xo = (e, t) => {
	if (!e) return;
	let n = String(t), r = `${Math.floor(t / 100)}XX`;
	return n in e ? e[n] : r in e ? e[r] : e.default;
}, Zo = ({ queryMutation: e, showLongRunningWarning: t, onCancel: n, tip: r, isFinished: i, progress: a, responseSchemas: o }) => /* @__PURE__ */ (0, L.jsxs)("div", {
	className: "flex flex-col overflow-y-auto h-[80vh] bg-muted/50",
	children: [(e.isPending || e.data) && /* @__PURE__ */ (0, L.jsx)(No, {
		status: e.data?.status,
		time: e.data?.time,
		size: e.data?.size,
		isFinished: i,
		progress: a
	}), e.error ? /* @__PURE__ */ (0, L.jsx)("div", {
		className: "max-w-2/3 mx-auto mt-20",
		children: /* @__PURE__ */ (0, L.jsxs)(et, { children: [
			/* @__PURE__ */ (0, L.jsx)(Nt, {
				size: 24,
				strokeWidth: 1.5,
				className: "me-5",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, L.jsx)($e, { children: "Request failed" }),
			/* @__PURE__ */ (0, L.jsx)(Ze, { children: e.error.message || String(e.error) || "Unexpected error" })
		] })
	}) : e.data ? /* @__PURE__ */ (0, L.jsx)(Yo, {
		request: e.data.request,
		size: e.data.size,
		headers: e.data.headers,
		body: e.data.body,
		isBinary: e.data.isBinary,
		fileName: e.data.fileName,
		blob: e.data.blob,
		typeName: Xo(o, e.data.status)
	}) : e.isPending ? /* @__PURE__ */ (0, L.jsx)("div", {
		className: "grid place-items-center h-full",
		children: /* @__PURE__ */ (0, L.jsxs)("div", {
			className: "flex flex-col gap-2 items-center mt-20",
			children: [/* @__PURE__ */ (0, L.jsx)(Qe, {}), /* @__PURE__ */ (0, L.jsxs)("div", {
				className: F("opacity-0 pointer-events-none transition-opacity h-20 text-sm text-muted-foreground duration-300 flex flex-col gap-2 items-center", t && "opacity-100 pointer-events-auto"),
				children: ["Looks like the request is taking longer than expected.", /* @__PURE__ */ (0, L.jsx)(P, {
					type: "button",
					onClick: n,
					size: "sm",
					className: "w-fit",
					variant: "outline",
					children: "Cancel"
				})]
			})]
		})
	}) : /* @__PURE__ */ (0, L.jsx)("div", {
		className: "h-full grid place-items-center",
		children: /* @__PURE__ */ (0, L.jsxs)("div", {
			className: "flex flex-col gap-4 items-center",
			children: [
				/* @__PURE__ */ (0, L.jsx)(Dt, {
					size: 64,
					className: "text-muted-foreground",
					strokeWidth: 1.2,
					"aria-hidden": "true"
				}),
				/* @__PURE__ */ (0, L.jsx)("span", {
					className: "text-[16px] font-semibold text-muted-foreground",
					children: "Send your first request"
				}),
				r
			]
		})
	})]
}), Qo = it()(st((e) => ({
	skipLogin: !1,
	setSkipLogin: (t) => e({ skipLogin: t })
}), {
	name: "remember-skip-login",
	storage: at(() => sessionStorage)
}));
ct(Qo);
//#endregion
//#region src/lib/plugins/openapi/playground/Playground.tsx
var $o = ({ server: e, servers: t = [], url: n, method: r, headers: i = [], queryParams: a = [], pathParams: o = [], defaultBody: s = "", examples: c, security: l, securitySchemes: u = [], requiresLogin: d = !1, onLogin: f, onSignUp: p, responseSchemas: m }) => {
	let { selectedServer: h, setSelectedServer: g } = wn(t.map((e) => ({ url: e }))), [_, v] = (0, I.useState)(!1), [y, b] = (0, I.useState)(!1), x = ot(), { setRememberedIdentity: S, getRememberedIdentity: C } = zt(), [, w] = (0, I.useTransition)(), { skipLogin: T, setSkipLogin: E } = Qo(), [D, ee] = (0, I.useState)(!1), [te, ne] = (0, I.useState)(!1), O = (0, I.useRef)(void 0), k = Pt(S), re = (0, I.useRef)(null), { label: ie } = xi("meta+enter", () => {
		re.current?.requestSubmit();
	}), oe = n.match(/\{([^}]+)\}/g)?.map((e) => e.slice(1, -1)) ?? [], se = [...o].sort((e, t) => oe.indexOf(e.name) - oe.indexOf(t.name)), { register: ce, control: le, handleSubmit: ue, watch: de, setValue: fe, ...me } = yi({ defaultValues: {
		body: s,
		bodyMode: "text",
		file: null,
		multipartFormFields: [],
		urlencodedFormFields: [],
		queryParams: a.length > 0 ? a.map((e) => ({
			name: e.name,
			value: e.defaultValue ?? "",
			active: e.defaultActive ?? !1,
			enum: e.enum ?? [],
			type: e.type,
			style: e.style,
			explode: e.explode,
			allowReserved: e.allowReserved
		})) : [{
			name: "",
			value: "",
			active: !1,
			enum: []
		}],
		pathParams: se.map((e) => ({
			name: e.name,
			value: e.defaultValue ?? ""
		})),
		headers: i.length > 0 ? i.map((e) => ({
			name: e.name,
			value: e.defaultValue ?? "",
			active: e.defaultActive ?? !1
		})) : [{
			name: "",
			value: "",
			active: !1
		}],
		identity: C([
			Ft,
			...u.map((e) => Lt({
				type: "scheme",
				name: e.name
			})),
			...x.data?.map((e) => e.id) ?? []
		])
	} }), A = de("identity"), he = (0, I.useMemo)(() => x.data?.find((e) => e.id === A)?.authorizationFields, [x.data, A]), ge = Mn((e) => e.credentials), ve = Rt(A), j = ve.type === "scheme" ? ve.name : void 0, ye = (0, I.useMemo)(() => {
		let e = j ? ge[j] : void 0;
		return !j || !e ? [] : Pn(l, { [j]: e });
	}, [
		l,
		ge,
		j
	]);
	(0, I.useEffect)(() => {
		A && k.current(A);
	}, [k, A]);
	let N = ft({
		gcTime: 0,
		mutationFn: async (t) => {
			let i = performance.now(), a = new window.Headers(t.headers.filter((e) => e.name && e.active).map((e) => [e.name, e.value])), o = sa(t), s = o.body;
			switch (o.contentType.kind) {
				case "remove":
					a.delete("Content-Type");
					break;
				case "override":
					a.set("Content-Type", o.contentType.value);
					break;
			}
			let c = r.toUpperCase(), u = fa(e ?? h, n, t), d = Rt(t.identity), f = d.type === "scheme" ? d.name : void 0, p = (() => {
				if (!f) return {};
				let e = Mn.getState().credentials[f];
				return e ? { [f]: e } : {};
			})();
			if (f) for (let [e, t] of Fn(l, p)) u.searchParams.set(e, t);
			let m = new Request(u, {
				method: c,
				headers: a,
				body: ["GET", "HEAD"].includes(c) ? null : s
			});
			f ? In(m, l, p) : t.identity !== "__none" && await x.data?.find((e) => e.id === t.identity)?.authorizeRequest(m);
			let g = setTimeout(() => ne(!0), 3210);
			O.current = new AbortController(), O.current.signal.addEventListener("abort", () => {
				clearTimeout(g);
			});
			try {
				let e = await fetch(m, {
					cache: "no-store",
					signal: O.current.signal
				});
				clearTimeout(g), ne(!1);
				let n = performance.now() - i, r = new URL(m.url), a = Array.from(e.headers.entries()), s = e.headers.get("content-type") || "", c = pa(s), l = "", u, d;
				c ? (u = await e.blob(), d = ha(a, m.url), l = `Binary content (${s})`) : l = await e.text();
				let f = e.headers.get("content-length"), p = "";
				switch (t.bodyMode) {
					case "text":
						p = t.body;
						break;
					case "file":
						p = `[File: ${t.file?.name ?? "Unknown"}]`;
						break;
					case "multipart":
						p = "[Multipart Form Data]\n", p += t.multipartFormFields?.filter((e) => e.name && e.active).map((e) => e.value instanceof File ? `${e.name}: [File: ${e.value.name}]` : `${e.name}: ${e.value}`).join("\n");
						break;
					case "urlencoded":
						p = typeof o.body == "string" ? o.body : "";
						break;
					default:
						p = t.body;
						break;
				}
				return {
					status: e.status,
					headers: a,
					size: f ? Number(f) : l.length,
					body: l,
					time: n,
					isBinary: c,
					fileName: d,
					blob: u,
					request: {
						method: m.method.toUpperCase(),
						url: m.url,
						headers: [
							["Host", r.host],
							["User-Agent", "Zudoku Playground"],
							...Array.from(m.headers.entries())
						],
						body: p
					}
				};
			} catch (e) {
				throw clearTimeout(g), ne(!1), e instanceof TypeError ? Error("The request failed, possibly due to network issues or CORS policy.") : e;
			}
		}
	}), Ce = N.isPending, [we, Te] = (0, I.useState)(!1);
	(0, I.useEffect)(() => {
		let e = setTimeout(() => Te(Ce), 100);
		return () => clearTimeout(e);
	}, [Ce]);
	let { isFinished: Ee, progress: De } = ae({ isAnimating: we });
	(0, I.useEffect)(() => () => {
		O.current?.abort();
	}, []);
	let Oe = /* @__PURE__ */ (0, L.jsx)("div", {
		className: "inline-block align-middle -translate-y-px opacity-50 hover:opacity-100 transition",
		children: e ? /* @__PURE__ */ (0, L.jsx)("span", { children: e.replace(/^https?:\/\//, "").replace(/\/$/, "") }) : t.length > 1 && /* @__PURE__ */ (0, L.jsxs)(Be, {
			onValueChange: (e) => {
				w(() => g(e));
			},
			value: h,
			defaultValue: h,
			children: [/* @__PURE__ */ (0, L.jsx)(Ie, {
				className: "p-0! h-6! shadow-none border-none flex-row-reverse bg-transparent text-xs gap-0.5",
				children: /* @__PURE__ */ (0, L.jsx)(Fe, {})
			}), /* @__PURE__ */ (0, L.jsx)(Le, { children: t.map((e) => /* @__PURE__ */ (0, L.jsx)(ze, {
				value: e,
				children: e.replace(/^https?:\/\//, "").replace(/\/$/, "")
			}, e)) })]
		})
	}), ke = d && !T && !D, Ae = [
		"POST",
		"PUT",
		"PATCH",
		"DELETE"
	].includes(r.toUpperCase()), [je, Me] = Se();
	return /* @__PURE__ */ (0, L.jsx)(gr, {
		register: ce,
		control: le,
		handleSubmit: ue,
		watch: de,
		setValue: fe,
		...me,
		children: /* @__PURE__ */ (0, L.jsx)(pe, {
			delayDuration: 150,
			children: /* @__PURE__ */ (0, L.jsxs)("form", {
				ref: re,
				onKeyDown: (e) => {
					e.key === "Enter" && e.target instanceof HTMLInputElement && e.preventDefault();
				},
				onSubmit: ue((e) => {
					x.data?.length === 0 || e.identity ? N.mutate(e) : v(!0);
				}),
				className: "relative",
				children: [
					/* @__PURE__ */ (0, L.jsx)(wo, {
						identities: x.data ?? [],
						open: _,
						onOpenChange: v,
						onSubmit: ({ rememberedIdentity: e, identity: t }) => {
							e && fe("identity", t ?? "__none"), v(!1), N.mutate({
								...me.getValues(),
								identity: t
							});
						}
					}),
					/* @__PURE__ */ (0, L.jsx)(Ao, {
						open: ke,
						setOpen: (e) => {
							e || ee(!0);
						},
						onSkip: (e) => {
							ee(!0), e && E(!0);
						},
						onSignUp: p,
						onLogin: f
					}),
					/* @__PURE__ */ (0, L.jsxs)("div", {
						className: "grid grid-cols-[1fr_1px_1fr] text-sm",
						children: [
							/* @__PURE__ */ (0, L.jsxs)("div", {
								className: "col-span-3 p-4 border-b flex gap-2 items-stretch",
								children: [/* @__PURE__ */ (0, L.jsxs)("div", {
									className: "flex flex-1 items-stretch w-full min-h-8 border rounded-md relative overflow-hidden",
									children: [
										/* @__PURE__ */ (0, L.jsx)("div", {
											className: "border-r px-2 bg-muted rounded-l-md font-semibold font-mono flex items-center",
											children: r.toUpperCase()
										}),
										/* @__PURE__ */ (0, L.jsx)("div", {
											className: "flex-1 min-w-0 px-2 font-mono text-xs break-all leading-6 flex items-center",
											children: /* @__PURE__ */ (0, L.jsxs)("div", { children: [
												Oe,
												/* @__PURE__ */ (0, L.jsx)(Oo, { url: n }),
												/* @__PURE__ */ (0, L.jsx)(ko, {})
											] })
										}),
										/* @__PURE__ */ (0, L.jsx)("div", {
											className: "px-1 flex items-center",
											children: /* @__PURE__ */ (0, L.jsx)(P, {
												type: "button",
												onClick: () => {
													Me(fa(e ?? h, n, me.getValues()).toString());
												},
												variant: "ghost",
												size: "icon-xs",
												"aria-label": "Copy URL",
												className: F("hover:opacity-100 transition", je ? "text-emerald-600 opacity-100" : "opacity-50"),
												children: je ? /* @__PURE__ */ (0, L.jsx)(xe, {
													className: "text-green-500",
													size: 14,
													"aria-hidden": "true"
												}) : /* @__PURE__ */ (0, L.jsx)(be, {
													size: 14,
													"aria-hidden": "true"
												})
											})
										})
									]
								}), /* @__PURE__ */ (0, L.jsx)(P, {
									type: "submit",
									variant: N.isPending ? "destructive" : "default",
									onClick: (e) => {
										N.isPending && (O.current?.abort("Request cancelled by user"), e.preventDefault());
									},
									className: "w-18",
									children: N.isPending ? "Cancel" : "Send"
								})]
							}),
							/* @__PURE__ */ (0, L.jsxs)("div", {
								className: "relative overflow-y-auto h-[80vh]",
								children: [
									(x.data?.length !== 0 || u.length > 0) && /* @__PURE__ */ (0, L.jsxs)(M, {
										defaultOpen: !0,
										children: [/* @__PURE__ */ (0, L.jsxs)(Ni, { children: [/* @__PURE__ */ (0, L.jsx)(Ct, {
											size: 16,
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, L.jsx)(Pi, { children: "Authentication" })] }), /* @__PURE__ */ (0, L.jsxs)(_e, {
											className: "CollapsibleContent",
											children: [/* @__PURE__ */ (0, L.jsx)(Sn, {
												selection: Rt(A),
												identities: x.data ?? [],
												onSelectionChange: (e) => {
													e.type === "scheme" && !ge[e.name]?.isAuthorized && b(!0), fe("identity", Lt(e));
												},
												securitySchemes: u.length > 0 ? u : void 0,
												securityCredentials: ge,
												onConfigureScheme: () => b(!0)
											}), j && /* @__PURE__ */ (0, L.jsx)(Hn, {
												securitySchemes: u.filter((e) => e.name === j),
												open: y,
												onOpenChange: b
											})]
										})]
									}),
									se.length > 0 && /* @__PURE__ */ (0, L.jsxs)(M, {
										defaultOpen: !0,
										children: [/* @__PURE__ */ (0, L.jsxs)(Ni, { children: [/* @__PURE__ */ (0, L.jsx)(Ot, {
											size: 16,
											"aria-hidden": "true"
										}), /* @__PURE__ */ (0, L.jsx)(Pi, { children: "Path Parameters" })] }), /* @__PURE__ */ (0, L.jsx)(_e, {
											className: "CollapsibleContent",
											children: /* @__PURE__ */ (0, L.jsx)(To, {
												url: n,
												control: le
											})
										})]
									}),
									/* @__PURE__ */ (0, L.jsx)(Do, {
										control: le,
										schemaQueryParams: a
									}),
									/* @__PURE__ */ (0, L.jsx)(Co, {
										control: le,
										schemaHeaders: i,
										lockedHeaders: [...he?.headers ?? [], ...ye]
									}),
									Ae && /* @__PURE__ */ (0, L.jsx)(oa, { content: c })
								]
							}),
							/* @__PURE__ */ (0, L.jsx)("div", { className: "w-full bg-muted-foreground/20" }),
							/* @__PURE__ */ (0, L.jsx)(Zo, {
								queryMutation: N,
								showLongRunningWarning: te,
								isFinished: Ee,
								progress: De,
								responseSchemas: m,
								tip: /* @__PURE__ */ (0, L.jsx)("div", {
									className: "text-xs w-full",
									children: /* @__PURE__ */ (0, L.jsxs)("span", {
										className: "text-muted-foreground",
										children: [
											"Press",
											" ",
											/* @__PURE__ */ (0, L.jsx)("kbd", {
												className: "text-foreground border rounded m-0.5 px-1 py-0.5 capitalize",
												children: ie.join(" + ")
											}),
											" ",
											"to send a request"
										]
									})
								}),
								onCancel: () => {
									O.current?.abort("Request cancelled by the user"), ne(!1);
								}
							})
						]
					})
				]
			})
		})
	});
}, es = /* @__PURE__ */ t({ PlaygroundDialog: () => ts }), ts = (e) => {
	let [t, n] = (0, I.useState)(!1), { isAuthEnabled: r, login: i, signup: a, isPending: o, isAuthenticated: s, disableSignUp: c } = he();
	return /* @__PURE__ */ (0, L.jsxs)(ie, {
		onOpenChange: (e) => n(e),
		children: [/* @__PURE__ */ (0, L.jsx)(te, {
			asChild: !0,
			children: e.children ?? /* @__PURE__ */ (0, L.jsxs)(P, {
				variant: "outline",
				size: "xs",
				className: "group gap-1",
				children: [/* @__PURE__ */ (0, L.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: "Test"
				}), /* @__PURE__ */ (0, L.jsx)(Tt, {
					className: "fill-muted-foreground group-hover:fill-foreground transition",
					strokeWidth: 1.5
				})]
			})
		}), /* @__PURE__ */ (0, L.jsxs)(ee, {
			className: "max-w-7xl! w-full overflow-hidden p-0",
			"aria-describedby": void 0,
			showCloseButton: !0,
			children: [/* @__PURE__ */ (0, L.jsx)(O, { children: /* @__PURE__ */ (0, L.jsx)(T, { children: "Playground" }) }), t && /* @__PURE__ */ (0, L.jsx)($o, {
				requiresLogin: r && !s && !o,
				onLogin: () => i(),
				onSignUp: c ? void 0 : () => a(),
				...e
			})]
		})]
	});
};
//#endregion
export { Rt as _, Hn as a, mt as b, Mn as c, wn as d, Sn as f, zt as g, Lt as h, Oi as i, jn as l, It as m, es as n, In as o, Ft as p, Di as r, Fn as s, ts as t, An as u, Pt as v, pt as x, Tt as y };
