import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { $ as n, A as r, B as i, C as a, D as o, E as s, F as c, G as l, H as u, I as d, J as f, K as p, L as m, M as h, N as g, O as _, P as v, Q as y, R as b, S as x, T as S, U as C, V as w, W as T, X as E, Y as D, Z as ee, _ as te, a as ne, at as re, b as ie, c as ae, ct as O, d as oe, dt as k, et as se, f as ce, g as le, h as ue, i as de, it as A, j, k as fe, l as pe, lt as M, m as me, nt as N, o as he, ot as ge, p as _e, q as ve, r as ye, rt as P, s as be, st as xe, tt as Se, u as Ce, ut as F, v as we, w as Te, x as Ee, y as De, z as I } from "./main-CQFzjeJU.js";
//#region ../../node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/pipe.mjs
var L = (...e) => e.reduce((e, t) => (n) => t(e(n))), Oe = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r ? (n - e) / r : 1;
}, ke = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, Ae = 1e-7, je = 12;
function Me(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = ke(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > Ae && ++s < je);
	return o;
}
/*#__NO_SIDE_EFFECTS__*/
function R(e, t, n, r) {
	if (e === t && n === r) return A;
	let i = (t) => Me(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : ke(i(e), t, r);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-utils@12.39.0/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var Ne = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Pe = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => 1 - e(1 - t), Fe = /*@__PURE__*/ R(.33, 1.53, .69, .99), z = /*@__PURE__*/ Pe(Fe), Ie = /*@__PURE__*/ Ne(z), Le = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * z(e) : .5 * (2 - 2 ** (-10 * (e - 1))), B = (e) => 1 - Math.sin(Math.acos(e)), Re = /* @__PURE__ */ Pe(B), ze = /* @__PURE__ */ Ne(B), Be = /*@__PURE__*/ R(.42, 0, 1, 1), Ve = /*@__PURE__*/ R(0, 0, .58, 1), He = /*@__PURE__*/ R(.42, 0, .58, 1), Ue = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] != "number", We = {
	linear: A,
	easeIn: Be,
	easeInOut: He,
	easeOut: Ve,
	circIn: B,
	circInOut: ze,
	circOut: Re,
	backIn: z,
	backInOut: Ie,
	backOut: Fe,
	anticipate: Le
}, Ge = (e) => typeof e == "string", Ke = (e) => {
	if (se(e)) {
		M(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
		let [t, n, r, i] = e;
		return /* @__PURE__ */ R(t, n, r, i);
	} else if (Ge(e)) return M(We[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), We[e];
	return e;
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function V(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function qe({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = V(s, r, e + 1 / 3), a = V(s, r, e), o = V(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function H(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/utils/mix/color.mjs
var U = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, Je = [
	T,
	l,
	C
], Ye = (e) => Je.find((t) => t.test(e));
function Xe(e) {
	let t = Ye(e);
	if (F(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
	let n = t.parse(e);
	return t === C && (n = qe(n)), n;
}
var Ze = (e, t) => {
	let n = Xe(e), r = Xe(t);
	if (!n || !r) return H(e, t);
	let i = { ...n };
	return (e) => (i.red = U(n.red, r.red, e), i.green = U(n.green, r.green, e), i.blue = U(n.blue, r.blue, e), i.alpha = I(n.alpha, r.alpha, e), l.transform(i));
}, W = new Set(["none", "hidden"]);
function Qe(e, t) {
	return W.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function $e(e, t) {
	return (n) => I(e, t, n);
}
function et(e) {
	return typeof e == "number" ? $e : typeof e == "string" ? f(e) ? H : u.test(e) ? Ze : it : Array.isArray(e) ? tt : typeof e == "object" ? u.test(e) ? Ze : nt : H;
}
function tt(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => et(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function nt(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = et(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function rt(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]];
		n[i] = e.values[o] ?? 0, r[a]++;
	}
	return n;
}
var it = (e, t) => {
	let n = w.createTransformer(t), r = i(e), a = i(t);
	return r.indexes.var.length === a.indexes.var.length && r.indexes.color.length === a.indexes.color.length && r.indexes.number.length >= a.indexes.number.length ? W.has(e) && !a.values.length || W.has(t) && !r.values.length ? Qe(e, t) : L(tt(rt(r, a), a.values), n) : (F(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), H(e, t));
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/utils/mix/index.mjs
function at(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? I(e, t, n) : et(e)(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
var ot = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => y.update(t, e),
		stop: () => ee(t),
		now: () => n.isProcessing ? n.timestamp : E.now()
	};
}, st = 2e4;
function ct(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function lt(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(ct(r), st);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: N(i)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var G = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
};
function ut(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var dt = 12;
function ft(e, t, n) {
	let r = n;
	for (let n = 1; n < dt; n++) r -= e(r) / t(r);
	return r;
}
var pt = .001;
function mt({ duration: e = G.duration, bounce: t = G.bounce, velocity: n = G.velocity, mass: r = G.mass }) {
	let i, a;
	F(e <= P(G.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let o = 1 - t;
	o = k(G.minDamping, G.maxDamping, o), e = k(G.minDuration, G.maxDuration, N(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = ut(t, o), c = Math.exp(-i);
		return pt - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = ut(t ** 2, o);
		return (-i(t) + pt > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = ft(i, a, s);
	if (e = P(e), isNaN(c)) return {
		stiffness: G.stiffness,
		damping: G.damping,
		duration: e
	};
	{
		let t = c ** 2 * r;
		return {
			stiffness: t,
			damping: o * 2 * Math.sqrt(r * t),
			duration: e
		};
	}
}
var ht = ["duration", "bounce"], gt = [
	"stiffness",
	"damping",
	"mass"
];
function _t(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function vt(e) {
	let t = {
		velocity: G.velocity,
		stiffness: G.stiffness,
		damping: G.damping,
		mass: G.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!_t(e, gt) && _t(e, ht)) if (t.velocity = 0, e.visualDuration) {
		let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * k(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
		t = {
			...t,
			mass: G.mass,
			stiffness: i,
			damping: a
		};
	} else {
		let n = mt({
			...e,
			velocity: 0
		});
		t = {
			...t,
			...n,
			mass: G.mass
		}, t.isResolvedFromDuration = !0;
	}
	return t;
}
function K(e = G.visualDuration, t = G.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = vt({
		...n,
		velocity: -N(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = N(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r ||= v ? G.restSpeed.granular : G.restSpeed.default, i ||= v ? G.restDelta.granular : G.restDelta.default;
	let y, x, S, C, w, T;
	if (h < 1) S = ut(_, h), C = (m + h * _ * g) / S, y = (e) => o - Math.exp(-h * _ * e) * (C * Math.sin(S * e) + g * Math.cos(S * e)), w = h * _ * C + g * S, T = h * _ * g - C * S, x = (e) => Math.exp(-h * _ * e) * (w * Math.sin(S * e) + T * Math.cos(S * e));
	else if (h === 1) {
		y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
		let e = m + _ * g;
		x = (t) => Math.exp(-_ * t) * (_ * e * t - m);
	} else {
		let e = _ * Math.sqrt(h * h - 1);
		y = (t) => {
			let n = Math.exp(-h * _ * t), r = Math.min(e * t, 300);
			return o - n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e;
		};
		let t = (m + h * _ * g) / e, n = h * _ * t - g * e, r = h * _ * g - t * e;
		x = (t) => {
			let i = Math.exp(-h * _ * t), a = Math.min(e * t, 300);
			return i * (n * Math.sinh(a) + r * Math.cosh(a));
		};
	}
	let E = {
		calculatedDuration: p && d || null,
		velocity: (e) => P(x(e)),
		next: (e) => {
			if (!p && h < 1) {
				let t = Math.exp(-h * _ * e), n = Math.sin(S * e), a = Math.cos(S * e), c = o - t * (C * n + g * a), l = P(t * (w * n + T * a));
				return s.done = Math.abs(l) <= r && Math.abs(o - c) <= i, s.value = s.done ? o : c, s;
			}
			let t = y(e);
			if (p) s.done = e >= d;
			else {
				let n = P(x(e));
				s.done = Math.abs(n) <= r && Math.abs(o - t) <= i;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(ct(E), st), t = b((t) => E.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return E;
}
K.applyToOptions = (e) => {
	let t = lt(e, 100, K);
	return e.ease = t.ease, e.duration = P(t.duration), e.type = "keyframes", e;
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var yt = 5;
function bt(e, t, n) {
	let r = Math.max(t - yt, 0);
	return Se(n - e(r), t - r);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function xt({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = K({
			keyframes: [f.value, m(f.value)],
			velocity: bt(y, e, f.value),
			damping: i,
			stiffness: a,
			restDelta: l,
			restSpeed: u
		}));
	};
	return C(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f);
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/utils/interpolate.mjs
function St(e, t, n) {
	let r = [], i = n || O.mix || at, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = L(Array.isArray(t) ? t[n] || A : t, a)), r.push(a);
	}
	return r;
}
function Ct(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (M(a === t.length, "Both input and output ranges must be the same length", "range-length"), a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = St(t, r, i), c = s.length, l = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ Oe(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => l(k(e[0], e[a - 1], t)) : l;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function wt(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ Oe(0, t, r);
		e.push(I(n, 1, i));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function Tt(e) {
	let t = [0];
	return wt(t, e.length - 1), t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function Et(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function Dt(e, t) {
	return e.map(() => t || He).splice(0, e.length - 1);
}
function q({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = /* @__PURE__ */ Ue(r) ? r.map(Ke) : Ke(r), a = {
		done: !1,
		value: t[0]
	}, o = Ct(Et(n && n.length === t.length ? n : Tt(t), e), t, { ease: Array.isArray(i) ? i : Dt(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var Ot = {
	decay: xt,
	inertia: xt,
	tween: q,
	keyframes: q,
	spring: K
};
function kt(e) {
	typeof e.type == "string" && (e.type = Ot[e.type]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/JSAnimation.mjs
var At = (e) => e / 100, J = class extends d {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
			done: !1,
			value: void 0
		}, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== E.now() && this.tick(E.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, D.mainThread++, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		kt(e);
		let { type: t = q, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || q;
		s !== q && typeof o[0] != "number" && (this.mixKeyframes = L(At, at(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = ct(c));
		let { calculatedDuration: l } = c;
		this.calculatedDuration = l, this.resolvedDuration = l + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = c;
	}
	updateTime(e) {
		let t = Math.round(e - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = t : this.currentTime = this.holdTime;
	}
	tick(e, t = !1) {
		let { generator: n, totalDuration: r, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: o, calculatedDuration: s } = this;
		if (this.startTime === null) return n.next(0);
		let { delay: c = 0, keyframes: l, repeat: u, repeatType: d, repeatDelay: f, type: p, onUpdate: h, finalKeyframe: g } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let _ = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), v = this.playbackSpeed >= 0 ? _ < 0 : _ > r;
		this.currentTime = Math.max(_, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
		let y = this.currentTime, b = n;
		if (u) {
			let e = Math.min(this.currentTime, r) / o, t = Math.floor(e), n = e % 1;
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, u + 1), t % 2 && (d === "reverse" ? (n = 1 - n, f && (n -= f / o)) : d === "mirror" && (b = a)), y = k(0, 1, n) * o;
		}
		let x;
		v ? (this.delayState.value = l[0], x = this.delayState) : x = b.next(y), i && !v && (x.value = i(x.value));
		let { done: S } = x;
		!v && s !== null && (S = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
		let C = this.holdTime === null && (this.state === "finished" || this.state === "running" && S);
		return C && p !== xt && (x.value = m(l, this.options, g, this.speed)), h && h(x.value), C && this.finish(), x;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return N(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + N(e);
	}
	get time() {
		return N(this.currentTime);
	}
	set time(e) {
		e = P(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
	}
	getGeneratorVelocity() {
		let e = this.currentTime;
		if (e <= 0) return this.options.velocity || 0;
		if (this.generator.velocity) return this.generator.velocity(e);
		let t = this.generator.next(e).value;
		return bt((e) => this.generator.next(e).value, e, t);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		t && this.driver && this.updateTime(E.now()), this.playbackSpeed = e, t && this.driver && (this.time = N(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = ot, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(E.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, D.mainThread--;
	}
	stopDriver() {
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
	attachTimeline(e) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
	}
}, jt = {
	anticipate: Le,
	backInOut: Ie,
	circInOut: ze
};
function Mt(e) {
	return e in jt;
}
function Nt(e) {
	typeof e.ease == "string" && Mt(e.ease) && (e.ease = jt[e.ease]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var Pt = 10, Ft = class extends S {
	constructor(e) {
		Nt(e), kt(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let s = new J({
			...a,
			autoplay: !1
		}), c = Math.max(Pt, E.now() - this.startTime), l = k(0, Pt, c - Pt), u = s.sample(c).value, { name: d } = this.options;
		i && d && o(i, d, u), t.setWithVelocity(s.sample(Math.max(0, c - l)).value, u, l), s.stop();
	}
}, It = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (w.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function Lt(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Rt(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = It(i, t), c = It(a, t);
	return F(o === c, `You are trying to animate ${t} from "${i}" to "${a}". "${o ? a : i}" is not an animatable value.`, "value-not-animatable"), !o || !c ? !1 : Lt(e) || (n === "spring" || s(n)) && r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function zt(e) {
	e.duration = 0, e.type = "keyframes";
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/waapi/utils/is-browser-color.mjs
var Bt = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Vt(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && Bt.test(e[t])) return !0;
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var Ht = new Set([
	"color",
	"backgroundColor",
	"outlineColor",
	"fill",
	"stroke",
	"borderColor",
	"borderTopColor",
	"borderRightColor",
	"borderBottomColor",
	"borderLeftColor"
]), Ut = /*@__PURE__*/ re(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Wt(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e;
	if (!(t?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: c, transformTemplate: l } = t.owner.getProps();
	return Ut() && n && (Te.has(n) || Ht.has(n) && Vt(s)) && (n !== "transform" || !l) && !c && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var Gt = 40, Kt = class extends d {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: o, name: s, motionValue: c, element: l, ...u }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = E.now();
		let d = {
			autoplay: e,
			delay: t,
			type: n,
			repeat: r,
			repeatDelay: i,
			repeatType: a,
			name: s,
			motionValue: c,
			element: l,
			...u
		}, f = l?.KeyframeResolver || _;
		this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
		this.resolvedAt = E.now();
		let u = !0;
		Rt(e, i, a, o) || (u = !1, (O.instantAnimations || !s) && l?.(m(e, n, t)), e[0] = e[e.length - 1], zt(n), n.repeat = 0);
		let d = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > Gt ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, f = u && !c && Wt(d), p = d.motionValue?.owner?.current, h;
		if (f) try {
			h = new Ft({
				...d,
				element: p
			});
		} catch {
			h = new J(d);
		}
		else h = new J(d);
		h.finished.then(() => {
			this.notifyFinished();
		}).catch(A), this.pendingTimeline &&= (this.stopTimeline = h.attachTimeline(this.pendingTimeline), void 0), this._animation = h;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), fe()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(e) {
		this.animation.time = e;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(e) {
		this.animation.speed = e;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(e) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function qt(e, t, n, r = 0, i = 1) {
	let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t), o = e.size, s = (o - 1) * r;
	return typeof n == "function" ? n(a, o) : i === 1 ? a * r : s - a * r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function Jt(e, t) {
	if (e?.inherit && t) {
		let { inherit: n, ...r } = e;
		return {
			...t,
			...r
		};
	}
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function Yt(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : Jt(n, e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var Xt = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, Zt = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), Qt = {
	type: "keyframes",
	duration: .8
}, $t = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, en = (e, { keyframes: t }) => t.length > 2 ? Qt : g.has(e) ? e.startsWith("scale") ? Zt(t[1]) : Xt : $t, tn = new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed"
]);
function nn(e) {
	for (let t in e) if (!tn.has(t)) return !0;
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var rn = (e, t, n, r = {}, i, a) => (o) => {
	let s = Yt(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= P(c);
	let u = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...s,
		delay: -l,
		onUpdate: (e) => {
			t.set(e), s.onUpdate && s.onUpdate(e);
		},
		onComplete: () => {
			o(), s.onComplete && s.onComplete();
		},
		name: e,
		motionValue: t,
		element: a ? void 0 : i
	};
	nn(s) || Object.assign(u, en(e, u)), u.duration &&= P(u.duration), u.repeatDelay &&= P(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (zt(u), u.delay === 0 && (d = !0)), (O.instantAnimations || O.skipAnimations || i?.shouldSkipAnimations || s.skipAnimations) && (d = !0, zt(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
		let e = m(u.keyframes, s);
		if (e !== void 0) {
			y.update(() => {
				u.onUpdate(e), u.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new J(u) : new Kt(u);
}, an = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function on(e) {
	let t = an.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
var sn = 4;
function cn(e, t, n = 1) {
	M(n <= sn, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	let [r, i] = on(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return xe(e) ? parseFloat(e) : e;
	}
	return f(i) ? cn(i, t, n + 1) : i;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function Y(e, t, n) {
	let r = e.getProps();
	return x(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
var ln = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...h
]), un = (e) => Array.isArray(e);
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/utils/setters.mjs
function dn(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, a(n));
}
function fn(e) {
	return un(e) ? e[e.length - 1] || 0 : e;
}
function pn(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = Y(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) dn(e, t, fn(i[t]));
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/value/will-change/is.mjs
function mn(e) {
	return !!(Ee(e) && e.add);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function hn(e, t) {
	let n = e.getValue("willChange");
	if (mn(n)) return n.add(t);
	if (!n && O.WillChange) {
		let n = new O.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function gn(e) {
	return e.props[De];
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
function _n({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function vn(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a, transitionEnd: o, ...s } = t, c = e.getDefaultTransition();
	a = a ? Jt(a, c) : c;
	let l = a?.reduceMotion, u = a?.skipAnimations;
	r && (a = r);
	let d = [], f = i && e.animationState && e.animationState.getState()[i], p = a?.path;
	p && p.animateVisualElement(e, s, a, n, d);
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || f && _n(f, t)) continue;
		let o = {
			delay: n,
			...Yt(a || {}, t)
		};
		u && (o.skipAnimations = !0);
		let c = r.get();
		if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
			y.update(() => r.set(i));
			continue;
		}
		let p = !1;
		if (window.MotionHandoffAnimation) {
			let n = gn(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, y);
				e !== null && (o.startTime = e, p = !0);
			}
		}
		hn(e, t);
		let m = l ?? e.shouldReduceMotion;
		r.start(rn(t, r, i, m && ln.has(t) ? { type: !1 } : o, e, p));
		let h = r.animation;
		h && d.push(h);
	}
	if (o) {
		let t = () => y.update(() => {
			o && pn(e, o);
		});
		d.length ? Promise.all(d).then(t) : t();
	}
	return d;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function yn(e, t, n = {}) {
	let r = Y(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(vn(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return bn(e, t, r, a, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	} else return Promise.all([a(), o(n.delay)]);
}
function bn(e, t, n = 0, r = 0, i = 0, a = 1, o) {
	let s = [];
	for (let c of e.variantChildren) c.notify("AnimationStart", t), s.push(yn(c, t, {
		...o,
		delay: n + (typeof r == "function" ? 0 : r) + qt(e.variantChildren, c, r, i, a)
	}).then(() => c.notify("AnimationComplete", t)));
	return Promise.all(s);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function xn(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => yn(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = yn(e, t, n);
	else {
		let i = typeof t == "function" ? Y(e, t, n.custom) : t;
		r = Promise.all(vn(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function Sn(e) {
	return typeof e == "number" ? e === 0 : e === null ? !0 : e === "none" || e === "0" || ge(e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var Cn = new Set([
	"auto",
	"none",
	"0"
]);
function wn(e, t, n) {
	let r = 0, a;
	for (; r < e.length && !a;) {
		let t = e[r];
		typeof t == "string" && !Cn.has(t) && i(t).values.length && (a = e[r]), r++;
	}
	if (a && n) for (let r of t) e[r] = le(n, a);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var Tn = class extends _ {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), f(r))) {
				let i = cn(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !ln.has(n) || e.length !== 2) return;
		let [i, a] = e, o = we(i), s = we(a);
		if (p(i) !== p(a) && j[n]) {
			this.needsMeasurement = !0;
			return;
		}
		if (o !== s) if (r(o) && r(s)) for (let t = 0; t < e.length; t++) {
			let n = e[t];
			typeof n == "string" && (e[t] = parseFloat(n));
		}
		else j[n] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || Sn(e[t])) && n.push(t);
		n.length && wn(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = j[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = j[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function En(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = document;
		t && (r = t.current);
		let i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
var Dn = {
	x: !1,
	y: !1
};
function On() {
	return Dn.x || Dn.y;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function kn(e, t) {
	let n = En(e), r = new AbortController();
	return [
		n,
		{
			passive: !0,
			...t,
			signal: r.signal
		},
		() => r.abort()
	];
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/gestures/hover.mjs
function An(e) {
	return !(e.pointerType === "touch" || On());
}
function jn(e, t, n = {}) {
	let [r, i, a] = kn(e, n);
	return r.forEach((e) => {
		let n = !1, r = !1, a, o = () => {
			e.removeEventListener("pointerleave", u);
		}, s = (e) => {
			a &&= (a(e), void 0), o();
		}, c = (e) => {
			n = !1, window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), r && (r = !1, s(e));
		}, l = () => {
			n = !0, window.addEventListener("pointerup", c, i), window.addEventListener("pointercancel", c, i);
		}, u = (e) => {
			if (e.pointerType !== "touch") {
				if (n) {
					r = !0;
					return;
				}
				s(e);
			}
		};
		e.addEventListener("pointerenter", (n) => {
			if (!An(n)) return;
			r = !1;
			let o = t(e, n);
			typeof o == "function" && (a = o, e.addEventListener("pointerleave", u, i));
		}, i), e.addEventListener("pointerdown", l, i);
	}), a;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var Mn = (e, t) => t ? e === t ? !0 : Mn(e, t.parentElement) : !1, Nn = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, Pn = new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function Fn(e) {
	return Pn.has(e.tagName) || e.isContentEditable === !0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
var X = /* @__PURE__ */ new WeakSet();
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function In(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function Z(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var Ln = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = In(() => {
		if (X.has(n)) return;
		Z(n, "down");
		let e = In(() => {
			Z(n, "up");
		});
		n.addEventListener("keyup", e, t), n.addEventListener("blur", () => Z(n, "cancel"), t);
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/gestures/press/index.mjs
function Rn(e) {
	return Nn(e) && !On();
}
var zn = /* @__PURE__ */ new WeakSet();
function Bn(e, t, n = {}) {
	let [r, i, a] = kn(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!Rn(e) || zn.has(e)) return;
		X.add(r), n.stopPropagation && zn.add(e);
		let a = t(r, e), o = (e, t) => {
			window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", c), X.has(r) && X.delete(r), Rn(e) && typeof a == "function" && a(e, { success: t });
		}, s = (e) => {
			o(e, r === window || r === document || n.useGlobalTarget || Mn(r, e.target));
		}, c = (e) => {
			o(e, !1);
		};
		window.addEventListener("pointerup", s, i), window.addEventListener("pointercancel", c, i);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), ue(e) && (e.addEventListener("focus", (e) => Ln(e, i)), !Fn(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/dom/DOMVisualElement.mjs
var Vn = class extends pe {
	constructor() {
		super(...arguments), this.KeyframeResolver = Tn;
	}
	sortInstanceNodePosition(e, t) {
		return e.compareDocumentPosition(t) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, t) {
		let n = e.style;
		return n ? n[t] : void 0;
	}
	removeValueFromRenderState(e, { vars: t, style: n }) {
		delete t[e], delete n[e];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		Ee(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
}, Q = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
};
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function Hn({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function Un(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function Wn(e, t) {
	return Hn(Un(e.getBoundingClientRect(), t));
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function Gn(e, { style: t, vars: n }, r, i) {
	let a = e.style, o;
	for (o in t) a[o] = t[o];
	for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function Kn(e) {
	return window.getComputedStyle(e);
}
var qn = class extends Vn {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = Gn;
	}
	readValueFromInstance(e, t) {
		if (g.has(t)) return this.projection?.isProjecting ? v(t) : c(e, t);
		{
			let n = Kn(e), r = (ve(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return Wn(e, t);
	}
	build(e, t, n) {
		ae(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return be(e, t, n);
	}
}, Jn = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]);
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function Yn(e, t, n, r) {
	Gn(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(Jn.has(n) ? n : ie(n), t.attrs[n]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var Xn = class extends Vn {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = me;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (g.has(t)) {
			let e = te(t);
			return e && e.default || 0;
		}
		return t = Jn.has(t) ? t : ie(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return de(e, t, n);
	}
	build(e, t, n) {
		he(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		Yn(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = ne(e.tagName), super.mount(e);
	}
}, Zn = oe.length;
function Qn(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && Qn(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < Zn; n++) {
		let r = oe[n], i = e.props[r];
		(ce(i) || i === !1) && (t[r] = i);
	}
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function $n(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var er = [...Ce].reverse(), tr = Ce.length;
function nr(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => xn(e, t, n)));
}
function rr(e) {
	let t = nr(e), n = ar(), r = !0, i = !1, a = (t) => (n, r) => {
		let i = Y(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
		if (i) {
			let { transition: e, transitionEnd: t, ...r } = i;
			n = {
				...n,
				...r,
				...t
			};
		}
		return n;
	};
	function o(n) {
		t = n(e);
	}
	function s(o) {
		let { props: s } = e, c = Qn(e.parent) || {}, l = [], u = /* @__PURE__ */ new Set(), d = {}, f = Infinity;
		for (let t = 0; t < tr; t++) {
			let p = er[t], m = n[p], h = s[p] === void 0 ? c[p] : s[p], g = ce(h), _ = p === o ? m.isActive : null;
			_ === !1 && (f = t);
			let v = h === c[p] && h !== s[p] && g;
			if (v && (r || i) && e.manuallyAnimateOnMount && (v = !1), m.protectedKeys = { ...d }, !m.isActive && _ === null || !h && !m.prevProp || _e(h) || typeof h == "boolean") continue;
			if (p === "exit" && m.isActive && _ !== !0) {
				m.prevResolvedValues && (d = {
					...d,
					...m.prevResolvedValues
				});
				continue;
			}
			let y = ir(m.prevProp, h), b = y || p === o && m.isActive && !v && g || t > f && g, x = !1, S = Array.isArray(h) ? h : [h], C = S.reduce(a(p), {});
			_ === !1 && (C = {});
			let { prevResolvedValues: w = {} } = m, T = {
				...w,
				...C
			}, E = (t) => {
				b = !0, u.has(t) && (x = !0, u.delete(t)), m.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in T) {
				let t = C[e], n = w[e];
				if (d.hasOwnProperty(e)) continue;
				let r = !1;
				r = un(t) && un(n) ? !$n(t, n) || y : t !== n, r ? t == null ? u.add(e) : E(e) : t !== void 0 && u.has(e) ? E(e) : m.protectedKeys[e] = !0;
			}
			m.prevProp = h, m.prevResolvedValues = C, m.isActive && (d = {
				...d,
				...C
			}), (r || i) && e.blockInitialAnimation && (b = !1);
			let D = v && y;
			b && (!D || x) && l.push(...S.map((t) => {
				let n = { type: p };
				if (typeof t == "string" && (r || i) && !D && e.manuallyAnimateOnMount && e.parent) {
					let { parent: r } = e, i = Y(r, t);
					if (r.enteringChildren && i) {
						let { delayChildren: t } = i.transition || {};
						n.delay = qt(r.enteringChildren, e, t);
					}
				}
				return {
					animation: t,
					options: n
				};
			}));
		}
		if (u.size) {
			let t = {};
			if (typeof s.initial != "boolean") {
				let n = Y(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
				n && n.transition && (t.transition = n.transition);
			}
			u.forEach((n) => {
				let r = e.getBaseTarget(n), i = e.getValue(n);
				i && (i.liveStyle = !0), t[n] = r ?? null;
			}), l.push({ animation: t });
		}
		let p = !!l.length;
		return r && (s.initial === !1 || s.initial === s.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, i = !1, p ? t(l) : Promise.resolve();
	}
	function c(t, r) {
		if (n[t].isActive === r) return Promise.resolve();
		e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), n[t].isActive = r;
		let i = s(t);
		for (let e in n) n[e].protectedKeys = {};
		return i;
	}
	return {
		animateChanges: s,
		setActive: c,
		setAnimateFunction: o,
		getState: () => n,
		reset: () => {
			n = ar(), i = !0;
		}
	};
}
function ir(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !$n(t, e) : !1;
}
function $(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function ar() {
	return {
		animate: $(!0),
		whileInView: $(),
		whileHover: $(),
		whileTap: $(),
		whileDrag: $(),
		whileFocus: $(),
		exit: $()
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion-dom@12.40.0/node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function or(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var sr = /* @__PURE__ */ e(t(), 1), cr = (e, t) => t.isSVG ?? ye(e) ? new Xn(t) : new qn(t, { allowProjection: e !== sr.Fragment }), lr = class extends Q {
	constructor(e) {
		super(e), e.animationState ||= rr(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		_e(e) && (this.unmountControls = e.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: e } = this.node.getProps(), { animate: t } = this.node.prevProps || {};
		e !== t && this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset(), this.unmountControls?.();
	}
}, ur = 0, dr = {
	animation: { Feature: lr },
	exit: { Feature: class extends Q {
		constructor() {
			super(...arguments), this.id = ur++, this.isExitComplete = !1;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || e === n) return;
			if (e && n === !1) {
				if (this.isExitComplete) {
					let { initial: e, custom: t } = this.node.getProps();
					if (typeof e == "string" || typeof e == "object" && e && !Array.isArray(e)) {
						let n = Y(this.node, e, t);
						if (n) {
							let { transition: e, transitionEnd: t, ...r } = n;
							for (let e in r) this.node.getValue(e)?.jump(r[e]);
						}
					}
					this.node.animationState.reset(), this.node.animationState.animateChanges();
				} else this.node.animationState.setActive("exit", !1);
				this.isExitComplete = !1;
				return;
			}
			let r = this.node.animationState.setActive("exit", !e);
			t && !e && r.then(() => {
				this.isExitComplete = !0, t(this.id);
			});
		}
		mount() {
			let { register: e, onExitComplete: t } = this.node.presenceContext || {};
			t && t(this.id), e && (this.unmount = e(this.id));
		}
		unmount() {}
	} }
};
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/events/event-info.mjs
function fr(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/gestures/hover.mjs
function pr(e, t, n) {
	let { props: r } = e;
	e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
	let i = r["onHover" + n];
	i && y.postRender(() => i(t, fr(t)));
}
var mr = class extends Q {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = jn(e, (e, t) => (pr(this.node, t, "Start"), (e) => pr(this.node, e, "End"))));
	}
	unmount() {}
}, hr = class extends Q {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let e = !1;
		try {
			e = this.node.current.matches(":focus-visible");
		} catch {
			e = !0;
		}
		!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = L(or(this.node.current, "focus", () => this.onFocus()), or(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/gestures/press.mjs
function gr(e, t, n) {
	let { props: r } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
	let i = r["onTap" + (n === "End" ? "" : n)];
	i && y.postRender(() => i(t, fr(t)));
}
var _r = class extends Q {
	mount() {
		let { current: e } = this.node;
		if (!e) return;
		let { globalTapTarget: t, propagate: n } = this.node.props;
		this.unmount = Bn(e, (e, t) => (gr(this.node, t, "Start"), (e, { success: t }) => gr(this.node, e, t ? "End" : "Cancel")), {
			useGlobalTarget: t,
			stopPropagation: n?.tap === !1
		});
	}
	unmount() {}
}, vr = /* @__PURE__ */ new WeakMap(), yr = /* @__PURE__ */ new WeakMap(), br = (e) => {
	let t = vr.get(e.target);
	t && t(e);
}, xr = (e) => {
	e.forEach(br);
};
function Sr({ root: e, ...t }) {
	let n = e || document;
	yr.has(n) || yr.set(n, {});
	let r = yr.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(xr, {
		root: e,
		...t
	})), r[i];
}
function Cr(e, t, n) {
	let r = Sr(t);
	return vr.set(e, n), r.observe(e), () => {
		vr.delete(e), r.unobserve(e);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var wr = {
	some: 0,
	all: 1
}, Tr = class extends Q {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.stopObserver?.();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : wr[r]
		}, o = (e) => {
			let { isIntersecting: t } = e;
			if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
			t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
			let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
			a && a(e);
		};
		this.stopObserver = Cr(this.node.current, a, o);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: e, prevProps: t } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(Er(e, t)) && this.startObserver();
	}
	unmount() {
		this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
	}
};
function Er({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
//#endregion
//#region ../../node_modules/.pnpm/framer-motion@12.40.0_@emotion+is-prop-valid@0.8.8_react-dom@19.2.7_react@19.2.7__react@19.2.7/node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var Dr = {
	inView: { Feature: Tr },
	tap: { Feature: _r },
	focus: { Feature: hr },
	hover: { Feature: mr }
}, Or = {
	renderer: cr,
	...dr,
	...Dr
};
//#endregion
export { Or as default };
