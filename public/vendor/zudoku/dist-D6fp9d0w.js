import { a as e, t } from "./chunk-HEgqtunE.js";
import { t as n } from "./react-DCUEsnwl.js";
import { t as r } from "./jsx-runtime-Bcg76ucg.js";
import { a as i, i as a } from "./Button-dzS4XgUY.js";
//#region ../../node_modules/.pnpm/react-dom@19.2.7_react@19.2.7/node_modules/react-dom/cjs/react-dom.production.js
var o = /* @__PURE__ */ t(((e) => {
	var t = n();
	function r(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function i() {}
	var a = {
		d: {
			f: i,
			r: function() {
				throw Error(r(522));
			},
			D: i,
			C: i,
			L: i,
			m: i,
			X: i,
			S: i,
			M: i
		},
		p: 0,
		findDOMNode: null
	}, o = Symbol.for("react.portal");
	function s(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: o,
			key: r == null ? null : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var c = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function l(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, e.createPortal = function(e, t) {
		var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(r(299));
		return s(e, t, null, n);
	}, e.flushSync = function(e) {
		var t = c.T, n = a.p;
		try {
			if (c.T = null, a.p = 2, e) return e();
		} finally {
			c.T = t, a.p = n, a.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, a.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && a.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = l(n, t.crossOrigin), i = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? a.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: i,
				fetchPriority: o
			}) : n === "script" && a.d.X(e, {
				crossOrigin: r,
				integrity: i,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") if (typeof t == "object" && t) {
			if (t.as == null || t.as === "script") {
				var n = l(t.as, t.crossOrigin);
				a.d.M(e, {
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0
				});
			}
		} else t ?? a.d.M(e);
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = l(n, t.crossOrigin);
			a.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") if (t) {
			var n = l(t.as, t.crossOrigin);
			a.d.m(e, {
				as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
				crossOrigin: n,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0
			});
		} else a.d.m(e);
	}, e.requestFormReset = function(e) {
		a.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return c.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return c.H.useHostTransitionStatus();
	}, e.version = "19.2.7";
})), s = /* @__PURE__ */ t(((e, t) => {
	function n() {
		if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = o();
})), c = /* @__PURE__ */ e(n(), 1);
typeof window < "u" && window.document && window.document.createElement;
function l(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@19.2.17_react@19.2.7/node_modules/@radix-ui/react-context/dist/index.mjs
var u = r();
function d(e, t) {
	let n = c.createContext(t), r = (e) => {
		let { children: t, ...r } = e, i = c.useMemo(() => r, Object.values(r));
		return /* @__PURE__ */ (0, u.jsx)(n.Provider, {
			value: i,
			children: t
		});
	};
	r.displayName = e + "Provider";
	function i(r) {
		let i = c.useContext(n);
		if (i) return i;
		if (t !== void 0) return t;
		throw Error(`\`${r}\` must be used within \`${e}\``);
	}
	return [r, i];
}
function f(e, t = []) {
	let n = [];
	function r(t, r) {
		let i = c.createContext(r), a = n.length;
		n = [...n, r];
		let o = (t) => {
			let { scope: n, children: r, ...o } = t, s = n?.[e]?.[a] || i, l = c.useMemo(() => o, Object.values(o));
			return /* @__PURE__ */ (0, u.jsx)(s.Provider, {
				value: l,
				children: r
			});
		};
		o.displayName = t + "Provider";
		function s(n, o) {
			let s = o?.[e]?.[a] || i, l = c.useContext(s);
			if (l) return l;
			if (r !== void 0) return r;
			throw Error(`\`${n}\` must be used within \`${t}\``);
		}
		return [o, s];
	}
	let i = () => {
		let t = n.map((e) => c.createContext(e));
		return function(n) {
			let r = n?.[e] || t;
			return c.useMemo(() => ({ [`__scope${e}`]: {
				...n,
				[e]: r
			} }), [n, r]);
		};
	};
	return i.scopeName = e, [r, p(i, ...t)];
}
function p(...e) {
	let t = e[0];
	if (e.length === 1) return t;
	let n = () => {
		let n = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let r = n.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return c.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r]);
		};
	};
	return n.scopeName = t.scopeName, n;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.2.17_react@19.2.7/node_modules/@radix-ui/react-slot/dist/index.mjs
// @__NO_SIDE_EFFECTS__
function m(e) {
	let t = /* @__PURE__ */ h(e), n = c.forwardRef((e, n) => {
		let { children: r, ...i } = e, a = c.Children.toArray(r), o = a.find(v);
		if (o) {
			let e = o.props.children, r = a.map((t) => t === o ? c.Children.count(e) > 1 ? c.Children.only(null) : c.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ (0, u.jsx)(t, {
				...i,
				ref: n,
				children: c.isValidElement(e) ? c.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ (0, u.jsx)(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function h(e) {
	let t = c.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (c.isValidElement(n)) {
			let e = b(n), i = y(r, n.props);
			return n.type !== c.Fragment && (i.ref = t ? a(t, e) : e), c.cloneElement(n, i);
		}
		return c.Children.count(n) > 1 ? c.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var g = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function _(e) {
	let t = ({ children: e }) => /* @__PURE__ */ (0, u.jsx)(u.Fragment, { children: e });
	return t.displayName = `${e}.Slottable`, t.__radixId = g, t;
}
function v(e) {
	return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === g;
}
function y(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function b(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@19.2.3_@types+react@19.2.17__@types+re_b8bbb21c99db43a0a737ecfcde353894/node_modules/@radix-ui/react-primitive/dist/index.mjs
var x = /* @__PURE__ */ e(s(), 1), S = [
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
	let n = /* @__PURE__ */ m(`Primitive.${t}`), r = c.forwardRef((e, r) => {
		let { asChild: i, ...a } = e, o = i ? n : t;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ (0, u.jsx)(o, {
			...a,
			ref: r
		});
	});
	return r.displayName = `Primitive.${t}`, {
		...e,
		[t]: r
	};
}, {});
function C(e, t) {
	e && x.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.1_@types+react@19.2.17_react@19.2.7/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function w(e) {
	let t = c.useRef(e);
	return c.useEffect(() => {
		t.current = e;
	}), c.useMemo(() => (...e) => t.current?.(...e), []);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.1_@types+react@19.2.17_react@19.2.7/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var T = globalThis?.document ? c.useLayoutEffect : () => {}, E = c.useId || (() => void 0), D = 0;
function O(e) {
	let [t, n] = c.useState(E());
	return T(() => {
		e || n((e) => e ?? String(D++));
	}, [e]), e || (t ? `radix-${t}` : "");
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-presence@1.1.5_@types+react-dom@19.2.3_@types+react@19.2.17__@types+rea_ed84e7f4276746b2c3b5c094541d596b/node_modules/@radix-ui/react-presence/dist/index.mjs
function k(e, t) {
	return c.useReducer((e, n) => t[e][n] ?? e, e);
}
var A = (e) => {
	let { present: t, children: n } = e, r = j(t), a = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), o = i(r.ref, N(a));
	return typeof n == "function" || r.isPresent ? c.cloneElement(a, { ref: o }) : null;
};
A.displayName = "Presence";
function j(e) {
	let [t, n] = c.useState(), r = c.useRef(null), i = c.useRef(e), a = c.useRef("none"), [o, s] = k(e ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return c.useEffect(() => {
		let e = M(r.current);
		a.current = o === "mounted" ? e : "none";
	}, [o]), T(() => {
		let t = r.current, n = i.current;
		if (n !== e) {
			let r = a.current, o = M(t);
			e ? s("MOUNT") : o === "none" || t?.display === "none" ? s("UNMOUNT") : s(n && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
		}
	}, [e, s]), T(() => {
		if (t) {
			let e, n = t.ownerDocument.defaultView ?? window, o = (a) => {
				let o = M(r.current).includes(CSS.escape(a.animationName));
				if (a.target === t && o && (s("ANIMATION_END"), !i.current)) {
					let r = t.style.animationFillMode;
					t.style.animationFillMode = "forwards", e = n.setTimeout(() => {
						t.style.animationFillMode === "forwards" && (t.style.animationFillMode = r);
					});
				}
			}, c = (e) => {
				e.target === t && (a.current = M(r.current));
			};
			return t.addEventListener("animationstart", c), t.addEventListener("animationcancel", o), t.addEventListener("animationend", o), () => {
				n.clearTimeout(e), t.removeEventListener("animationstart", c), t.removeEventListener("animationcancel", o), t.removeEventListener("animationend", o);
			};
		} else s("ANIMATION_END");
	}, [t, s]), {
		isPresent: ["mounted", "unmountSuspended"].includes(o),
		ref: c.useCallback((e) => {
			r.current = e ? getComputedStyle(e) : null, n(e);
		}, [])
	};
}
function M(e) {
	return e?.animationName || "none";
}
function N(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.2_@types+react@19.2.17_react@19.2.7/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var P = c.useInsertionEffect || T;
function F({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
	let [i, a, o] = I({
		defaultProp: t,
		onChange: n
	}), s = e !== void 0, l = s ? e : i;
	{
		let t = c.useRef(e !== void 0);
		c.useEffect(() => {
			let e = t.current;
			e !== s && console.warn(`${r} is changing from ${e ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), t.current = s;
		}, [s, r]);
	}
	return [l, c.useCallback((t) => {
		if (s) {
			let n = L(t) ? t(e) : t;
			n !== e && o.current?.(n);
		} else a(t);
	}, [
		s,
		e,
		a,
		o
	])];
}
function I({ defaultProp: e, onChange: t }) {
	let [n, r] = c.useState(e), i = c.useRef(n), a = c.useRef(t);
	return P(() => {
		a.current = t;
	}, [t]), c.useEffect(() => {
		i.current !== n && (a.current?.(n), i.current = n);
	}, [n, i]), [
		n,
		r,
		a
	];
}
function L(e) {
	return typeof e == "function";
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-collection@1.1.7_@types+react-dom@19.2.3_@types+react@19.2.17__@types+r_a1611ff7082b26c87c56f69af07d70e3/node_modules/@radix-ui/react-collection/dist/index.mjs
function R(e) {
	let t = e + "CollectionProvider", [n, r] = f(t), [a, o] = n(t, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), s = (e) => {
		let { scope: t, children: n } = e, r = c.useRef(null), i = c.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ (0, u.jsx)(a, {
			scope: t,
			itemMap: i,
			collectionRef: r,
			children: n
		});
	};
	s.displayName = t;
	let l = e + "CollectionSlot", d = /* @__PURE__ */ m(l), p = c.forwardRef((e, t) => {
		let { scope: n, children: r } = e;
		return /* @__PURE__ */ (0, u.jsx)(d, {
			ref: i(t, o(l, n).collectionRef),
			children: r
		});
	});
	p.displayName = l;
	let h = e + "CollectionItemSlot", g = "data-radix-collection-item", _ = /* @__PURE__ */ m(h), v = c.forwardRef((e, t) => {
		let { scope: n, children: r, ...a } = e, s = c.useRef(null), l = i(t, s), d = o(h, n);
		return c.useEffect(() => (d.itemMap.set(s, {
			ref: s,
			...a
		}), () => void d.itemMap.delete(s))), /* @__PURE__ */ (0, u.jsx)(_, {
			[g]: "",
			ref: l,
			children: r
		});
	});
	v.displayName = h;
	function y(t) {
		let n = o(e + "CollectionConsumer", t);
		return c.useCallback(() => {
			let e = n.collectionRef.current;
			if (!e) return [];
			let t = Array.from(e.querySelectorAll(`[${g}]`));
			return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
		}, [n.collectionRef, n.itemMap]);
	}
	return [
		{
			Provider: s,
			Slot: p,
			ItemSlot: v
		},
		y,
		r
	];
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-direction@1.1.1_@types+react@19.2.17_react@19.2.7/node_modules/@radix-ui/react-direction/dist/index.mjs
var z = c.createContext(void 0);
function B(e) {
	let t = c.useContext(z);
	return e || t || "ltr";
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-roving-focus@1.1.11_@types+react-dom@19.2.3_@types+react@19.2.17__@type_aa0cf0fa973dd2e01e2ca8bf9bf0eb9e/node_modules/@radix-ui/react-roving-focus/dist/index.mjs
var V = "rovingFocusGroup.onEntryFocus", H = {
	bubbles: !1,
	cancelable: !0
}, U = "RovingFocusGroup", [W, G, K] = R(U), [q, J] = f(U, [K]), [Y, ee] = q(U), X = c.forwardRef((e, t) => /* @__PURE__ */ (0, u.jsx)(W.Provider, {
	scope: e.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ (0, u.jsx)(W.Slot, {
		scope: e.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ (0, u.jsx)(te, {
			...e,
			ref: t
		})
	})
}));
X.displayName = U;
var te = c.forwardRef((e, t) => {
	let { __scopeRovingFocusGroup: n, orientation: r, loop: a = !1, dir: o, currentTabStopId: s, defaultCurrentTabStopId: d, onCurrentTabStopIdChange: f, onEntryFocus: p, preventScrollOnEntryFocus: m = !1, ...h } = e, g = c.useRef(null), _ = i(t, g), v = B(o), [y, b] = F({
		prop: s,
		defaultProp: d ?? null,
		onChange: f,
		caller: U
	}), [x, C] = c.useState(!1), T = w(p), E = G(n), D = c.useRef(!1), [O, k] = c.useState(0);
	return c.useEffect(() => {
		let e = g.current;
		if (e) return e.addEventListener(V, T), () => e.removeEventListener(V, T);
	}, [T]), /* @__PURE__ */ (0, u.jsx)(Y, {
		scope: n,
		orientation: r,
		dir: v,
		loop: a,
		currentTabStopId: y,
		onItemFocus: c.useCallback((e) => b(e), [b]),
		onItemShiftTab: c.useCallback(() => C(!0), []),
		onFocusableItemAdd: c.useCallback(() => k((e) => e + 1), []),
		onFocusableItemRemove: c.useCallback(() => k((e) => e - 1), []),
		children: /* @__PURE__ */ (0, u.jsx)(S.div, {
			tabIndex: x || O === 0 ? -1 : 0,
			"data-orientation": r,
			...h,
			ref: _,
			style: {
				outline: "none",
				...e.style
			},
			onMouseDown: l(e.onMouseDown, () => {
				D.current = !0;
			}),
			onFocus: l(e.onFocus, (e) => {
				let t = !D.current;
				if (e.target === e.currentTarget && t && !x) {
					let t = new CustomEvent(V, H);
					if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
						let e = E().filter((e) => e.focusable);
						$([
							e.find((e) => e.active),
							e.find((e) => e.id === y),
							...e
						].filter(Boolean).map((e) => e.ref.current), m);
					}
				}
				D.current = !1;
			}),
			onBlur: l(e.onBlur, () => C(!1))
		})
	});
}), Z = "RovingFocusGroupItem", Q = c.forwardRef((e, t) => {
	let { __scopeRovingFocusGroup: n, focusable: r = !0, active: i = !1, tabStopId: a, children: o, ...s } = e, d = O(), f = a || d, p = ee(Z, n), m = p.currentTabStopId === f, h = G(n), { onFocusableItemAdd: g, onFocusableItemRemove: _, currentTabStopId: v } = p;
	return c.useEffect(() => {
		if (r) return g(), () => _();
	}, [
		r,
		g,
		_
	]), /* @__PURE__ */ (0, u.jsx)(W.ItemSlot, {
		scope: n,
		id: f,
		focusable: r,
		active: i,
		children: /* @__PURE__ */ (0, u.jsx)(S.span, {
			tabIndex: m ? 0 : -1,
			"data-orientation": p.orientation,
			...s,
			ref: t,
			onMouseDown: l(e.onMouseDown, (e) => {
				r ? p.onItemFocus(f) : e.preventDefault();
			}),
			onFocus: l(e.onFocus, () => p.onItemFocus(f)),
			onKeyDown: l(e.onKeyDown, (e) => {
				if (e.key === "Tab" && e.shiftKey) {
					p.onItemShiftTab();
					return;
				}
				if (e.target !== e.currentTarget) return;
				let t = ie(e, p.orientation, p.dir);
				if (t !== void 0) {
					if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
					e.preventDefault();
					let n = h().filter((e) => e.focusable).map((e) => e.ref.current);
					if (t === "last") n.reverse();
					else if (t === "prev" || t === "next") {
						t === "prev" && n.reverse();
						let r = n.indexOf(e.currentTarget);
						n = p.loop ? ae(n, r + 1) : n.slice(r + 1);
					}
					setTimeout(() => $(n));
				}
			}),
			children: typeof o == "function" ? o({
				isCurrentTabStop: m,
				hasTabStop: v != null
			}) : o
		})
	});
});
Q.displayName = Z;
var ne = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function re(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function ie(e, t, n) {
	let r = re(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return ne[r];
}
function $(e, t = !1) {
	let n = document.activeElement;
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function ae(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var oe = X, se = Q;
//#endregion
export { l as _, R as a, O as c, S as d, C as f, f as g, d as h, B as i, T as l, _ as m, oe as n, F as o, m as p, J as r, A as s, se as t, w as u, s as v };
