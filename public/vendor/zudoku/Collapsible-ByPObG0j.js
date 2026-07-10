import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { _ as n, c as r, d as i, g as a, l as o, m as s, o as c, s as l } from "./dist-D6fp9d0w.js";
import { v as u } from "./joinUrl-51baNiN4.js";
import { t as d } from "./jsx-runtime-Bcg76ucg.js";
import { t as f } from "./useQuery-B8Uxp7FM.js";
import { t as p } from "./createLucideIcon-CE5nuOQr.js";
import { C as m, S as h, T as g, b as _, f as v, k as y, m as b, w as ee, x } from "./DropdownMenu-DMEGJELa.js";
import { a as S } from "./Button-dzS4XgUY.js";
import { t as C } from "./cn-yMl495m5.js";
import { r as w, v as te } from "./ZudokuContext-BxG8utmj.js";
//#region src/lib/components/context/RenderContext.ts
var T = d(), E = /* @__PURE__ */ e(t(), 1), D = (0, E.createContext)({
	status: 200,
	bypassProtection: !1
}), ne = p("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]), re = p("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]), [O, ie] = a("Tooltip", [g]), k = g(), A = "TooltipProvider", ae = 700, j = "tooltip.open", [oe, M] = O(A), N = (e) => {
	let { __scopeTooltip: t, delayDuration: n = ae, skipDelayDuration: r = 300, disableHoverableContent: i = !1, children: a } = e, o = E.useRef(!0), s = E.useRef(!1), c = E.useRef(0);
	return E.useEffect(() => {
		let e = c.current;
		return () => window.clearTimeout(e);
	}, []), /* @__PURE__ */ (0, T.jsx)(oe, {
		scope: t,
		isOpenDelayedRef: o,
		delayDuration: n,
		onOpen: E.useCallback(() => {
			window.clearTimeout(c.current), o.current = !1;
		}, []),
		onClose: E.useCallback(() => {
			window.clearTimeout(c.current), c.current = window.setTimeout(() => o.current = !0, r);
		}, [r]),
		isPointerInTransitRef: s,
		onPointerInTransitChange: E.useCallback((e) => {
			s.current = e;
		}, []),
		disableHoverableContent: i,
		children: a
	});
};
N.displayName = A;
var P = "Tooltip", [se, F] = O(P), I = (e) => {
	let { __scopeTooltip: t, children: n, open: i, defaultOpen: a, onOpenChange: o, disableHoverableContent: s, delayDuration: l } = e, u = M(P, e.__scopeTooltip), d = k(t), [f, p] = E.useState(null), m = r(), h = E.useRef(0), g = s ?? u.disableHoverableContent, _ = l ?? u.delayDuration, v = E.useRef(!1), [y, b] = c({
		prop: i,
		defaultProp: a ?? !1,
		onChange: (e) => {
			e ? (u.onOpen(), document.dispatchEvent(new CustomEvent(j))) : u.onClose(), o?.(e);
		},
		caller: P
	}), x = E.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), S = E.useCallback(() => {
		window.clearTimeout(h.current), h.current = 0, v.current = !1, b(!0);
	}, [b]), C = E.useCallback(() => {
		window.clearTimeout(h.current), h.current = 0, b(!1);
	}, [b]), w = E.useCallback(() => {
		window.clearTimeout(h.current), h.current = window.setTimeout(() => {
			v.current = !0, b(!0), h.current = 0;
		}, _);
	}, [_, b]);
	return E.useEffect(() => () => {
		h.current &&= (window.clearTimeout(h.current), 0);
	}, []), /* @__PURE__ */ (0, T.jsx)(ee, {
		...d,
		children: /* @__PURE__ */ (0, T.jsx)(se, {
			scope: t,
			contentId: m,
			open: y,
			stateAttribute: x,
			trigger: f,
			onTriggerChange: p,
			onTriggerEnter: E.useCallback(() => {
				u.isOpenDelayedRef.current ? w() : S();
			}, [
				u.isOpenDelayedRef,
				w,
				S
			]),
			onTriggerLeave: E.useCallback(() => {
				g ? C() : (window.clearTimeout(h.current), h.current = 0);
			}, [C, g]),
			onOpen: S,
			onClose: C,
			disableHoverableContent: g,
			children: n
		})
	});
};
I.displayName = P;
var L = "TooltipTrigger", R = E.forwardRef((e, t) => {
	let { __scopeTooltip: r, ...a } = e, o = F(L, r), s = M(L, r), c = k(r), l = S(t, E.useRef(null), o.onTriggerChange), u = E.useRef(!1), d = E.useRef(!1), f = E.useCallback(() => u.current = !1, []);
	return E.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ (0, T.jsx)(x, {
		asChild: !0,
		...c,
		children: /* @__PURE__ */ (0, T.jsx)(i.button, {
			"aria-describedby": o.open ? o.contentId : void 0,
			"data-state": o.stateAttribute,
			...a,
			ref: l,
			onPointerMove: n(e.onPointerMove, (e) => {
				e.pointerType !== "touch" && !d.current && !s.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
			}),
			onPointerLeave: n(e.onPointerLeave, () => {
				o.onTriggerLeave(), d.current = !1;
			}),
			onPointerDown: n(e.onPointerDown, () => {
				o.open && o.onClose(), u.current = !0, document.addEventListener("pointerup", f, { once: !0 });
			}),
			onFocus: n(e.onFocus, () => {
				u.current || o.onOpen();
			}),
			onBlur: n(e.onBlur, o.onClose),
			onClick: n(e.onClick, o.onClose)
		})
	});
});
R.displayName = L;
var z = "TooltipPortal", [ce, le] = O(z, { forceMount: void 0 }), B = (e) => {
	let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e, a = F(z, t);
	return /* @__PURE__ */ (0, T.jsx)(ce, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, T.jsx)(l, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, T.jsx)(_, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
B.displayName = z;
var V = "TooltipContent", H = E.forwardRef((e, t) => {
	let n = le(V, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = "top", ...a } = e, o = F(V, e.__scopeTooltip);
	return /* @__PURE__ */ (0, T.jsx)(l, {
		present: r || o.open,
		children: o.disableHoverableContent ? /* @__PURE__ */ (0, T.jsx)(U, {
			side: i,
			...a,
			ref: t
		}) : /* @__PURE__ */ (0, T.jsx)(ue, {
			side: i,
			...a,
			ref: t
		})
	});
}), ue = E.forwardRef((e, t) => {
	let n = F(V, e.__scopeTooltip), r = M(V, e.__scopeTooltip), i = E.useRef(null), a = S(t, i), [o, s] = E.useState(null), { trigger: c, onClose: l } = n, u = i.current, { onPointerInTransitChange: d } = r, f = E.useCallback(() => {
		s(null), d(!1);
	}, [d]), p = E.useCallback((e, t) => {
		let n = e.currentTarget, r = {
			x: e.clientX,
			y: e.clientY
		}, i = he(r, me(r, n.getBoundingClientRect())), a = ge(t.getBoundingClientRect());
		s(ve([...i, ...a])), d(!0);
	}, [d]);
	return E.useEffect(() => () => f(), [f]), E.useEffect(() => {
		if (c && u) {
			let e = (e) => p(e, u), t = (e) => p(e, c);
			return c.addEventListener("pointerleave", e), u.addEventListener("pointerleave", t), () => {
				c.removeEventListener("pointerleave", e), u.removeEventListener("pointerleave", t);
			};
		}
	}, [
		c,
		u,
		p,
		f
	]), E.useEffect(() => {
		if (o) {
			let e = (e) => {
				let t = e.target, n = {
					x: e.clientX,
					y: e.clientY
				}, r = c?.contains(t) || u?.contains(t), i = !_e(n, o);
				r ? f() : i && (f(), l());
			};
			return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
		}
	}, [
		c,
		u,
		o,
		l,
		f
	]), /* @__PURE__ */ (0, T.jsx)(U, {
		...e,
		ref: a
	});
}), [de, fe] = O(P, { isInside: !1 }), pe = s("TooltipContent"), U = E.forwardRef((e, t) => {
	let { __scopeTooltip: n, children: r, "aria-label": i, onEscapeKeyDown: a, onPointerDownOutside: o, ...s } = e, c = F(V, n), l = k(n), { onClose: u } = c;
	return E.useEffect(() => (document.addEventListener(j, u), () => document.removeEventListener(j, u)), [u]), E.useEffect(() => {
		if (c.trigger) {
			let e = (e) => {
				e.target?.contains(c.trigger) && u();
			};
			return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
		}
	}, [c.trigger, u]), /* @__PURE__ */ (0, T.jsx)(y, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: a,
		onPointerDownOutside: o,
		onFocusOutside: (e) => e.preventDefault(),
		onDismiss: u,
		children: /* @__PURE__ */ (0, T.jsxs)(m, {
			"data-state": c.stateAttribute,
			...l,
			...s,
			ref: t,
			style: {
				...s.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ (0, T.jsx)(pe, { children: r }), /* @__PURE__ */ (0, T.jsx)(de, {
				scope: n,
				isInside: !0,
				children: /* @__PURE__ */ (0, T.jsx)(v, {
					id: c.contentId,
					role: "tooltip",
					children: i || r
				})
			})]
		})
	});
});
H.displayName = V;
var W = "TooltipArrow", G = E.forwardRef((e, t) => {
	let { __scopeTooltip: n, ...r } = e, i = k(n);
	return fe(W, n).isInside ? null : /* @__PURE__ */ (0, T.jsx)(h, {
		...i,
		...r,
		ref: t
	});
});
G.displayName = W;
function me(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
function he(e, t, n = 5) {
	let r = [];
	switch (t) {
		case "top":
			r.push({
				x: e.x - n,
				y: e.y + n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "bottom":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y - n
			});
			break;
		case "left":
			r.push({
				x: e.x + n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "right":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x - n,
				y: e.y + n
			});
			break;
	}
	return r;
}
function ge(e) {
	let { top: t, right: n, bottom: r, left: i } = e;
	return [
		{
			x: i,
			y: t
		},
		{
			x: n,
			y: t
		},
		{
			x: n,
			y: r
		},
		{
			x: i,
			y: r
		}
	];
}
function _e(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function ve(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), ye(t);
}
function ye(e) {
	if (e.length <= 1) return e.slice();
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (; t.length >= 2;) {
			let e = t[t.length - 1], n = t[t.length - 2];
			if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
			else break;
		}
		t.push(r);
	}
	t.pop();
	let n = [];
	for (let t = e.length - 1; t >= 0; t--) {
		let r = e[t];
		for (; n.length >= 2;) {
			let e = n[n.length - 1], t = n[n.length - 2];
			if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
			else break;
		}
		n.push(r);
	}
	return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var be = N, xe = I, Se = R, Ce = B, we = H, Te = G;
//#endregion
//#region src/lib/ui/Tooltip.tsx
function K({ delayDuration: e = 0, ...t }) {
	return /* @__PURE__ */ (0, T.jsx)(be, {
		"data-slot": "tooltip-provider",
		delayDuration: e,
		...t
	});
}
function Ee({ ...e }) {
	return /* @__PURE__ */ (0, T.jsx)(K, { children: /* @__PURE__ */ (0, T.jsx)(xe, {
		"data-slot": "tooltip",
		...e
	}) });
}
function De({ ...e }) {
	return /* @__PURE__ */ (0, T.jsx)(Se, {
		"data-slot": "tooltip-trigger",
		...e
	});
}
function Oe({ className: e, sideOffset: t = 0, children: n, ...r }) {
	return /* @__PURE__ */ (0, T.jsx)(Ce, { children: /* @__PURE__ */ (0, T.jsxs)(we, {
		"data-slot": "tooltip-content",
		sideOffset: t,
		className: b("bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", e),
		...r,
		children: [n, /* @__PURE__ */ (0, T.jsx)(Te, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px]" })]
	}) });
}
//#endregion
//#region src/lib/authentication/hook.ts
var ke = ({ refetchOnWindowFocus: e } = {}) => {
	let { authentication: t } = w();
	return f({
		refetchOnWindowFocus: e,
		queryKey: ["refresh-user-profile"],
		enabled: t !== void 0 && typeof t?.refreshUserProfile == "function",
		queryFn: () => t?.refreshUserProfile?.()
	});
}, Ae = () => {
	let { authentication: e } = w(), t = te(), n = e !== void 0, r = u();
	ke();
	let { ssrAuth: i } = (0, E.use)(D), a = typeof window > "u";
	return {
		isAuthEnabled: n,
		disableSignUp: e?.disableSignUp ?? !1,
		...t,
		...a && i && {
			isAuthenticated: !!i.profile,
			isPending: !1,
			profile: i.profile
		},
		login: async (t) => {
			if (!n) throw Error("Authentication is not enabled.");
			await e.signIn({ navigate: r }, {
				...t,
				redirectTo: t?.redirectTo ?? window.location.href
			});
		},
		logout: async () => {
			if (!n) throw Error("Authentication is not enabled.");
			await e.signOut({ navigate: r });
		},
		signup: async (t) => {
			if (!n) throw Error("Authentication is not enabled.");
			await e.signUp({ navigate: r }, {
				...t,
				redirectTo: t?.redirectTo ?? window.location.href
			});
		},
		requestEmailVerification: async (t) => {
			if (!n) throw Error("Authentication is not enabled.");
			await e.requestEmailVerification?.({ navigate: r }, {
				...t,
				redirectTo: t?.redirectTo ?? window.location.href
			});
		}
	};
}, q = "Collapsible", [je, Me] = a(q), [Ne, J] = je(q), Y = E.forwardRef((e, t) => {
	let { __scopeCollapsible: n, open: a, defaultOpen: o, disabled: s, onOpenChange: l, ...u } = e, [d, f] = c({
		prop: a,
		defaultProp: o ?? !1,
		onChange: l,
		caller: q
	});
	return /* @__PURE__ */ (0, T.jsx)(Ne, {
		scope: n,
		disabled: s,
		contentId: r(),
		open: d,
		onOpenToggle: E.useCallback(() => f((e) => !e), [f]),
		children: /* @__PURE__ */ (0, T.jsx)(i.div, {
			"data-state": $(d),
			"data-disabled": s ? "" : void 0,
			...u,
			ref: t
		})
	});
});
Y.displayName = q;
var Pe = "CollapsibleTrigger", X = E.forwardRef((e, t) => {
	let { __scopeCollapsible: r, ...a } = e, o = J(Pe, r);
	return /* @__PURE__ */ (0, T.jsx)(i.button, {
		type: "button",
		"aria-controls": o.contentId,
		"aria-expanded": o.open || !1,
		"data-state": $(o.open),
		"data-disabled": o.disabled ? "" : void 0,
		disabled: o.disabled,
		...a,
		ref: t,
		onClick: n(e.onClick, o.onOpenToggle)
	});
});
X.displayName = Pe;
var Z = "CollapsibleContent", Q = E.forwardRef((e, t) => {
	let { forceMount: n, ...r } = e, i = J(Z, e.__scopeCollapsible);
	return /* @__PURE__ */ (0, T.jsx)(l, {
		present: n || i.open,
		children: ({ present: e }) => /* @__PURE__ */ (0, T.jsx)(Fe, {
			...r,
			ref: t,
			present: e
		})
	});
});
Q.displayName = Z;
var Fe = E.forwardRef((e, t) => {
	let { __scopeCollapsible: n, present: r, children: a, ...s } = e, c = J(Z, n), [l, u] = E.useState(r), d = E.useRef(null), f = S(t, d), p = E.useRef(0), m = p.current, h = E.useRef(0), g = h.current, _ = c.open || l, v = E.useRef(_), y = E.useRef(void 0);
	return E.useEffect(() => {
		let e = requestAnimationFrame(() => v.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), o(() => {
		let e = d.current;
		if (e) {
			y.current = y.current || {
				transitionDuration: e.style.transitionDuration,
				animationName: e.style.animationName
			}, e.style.transitionDuration = "0s", e.style.animationName = "none";
			let t = e.getBoundingClientRect();
			p.current = t.height, h.current = t.width, v.current || (e.style.transitionDuration = y.current.transitionDuration, e.style.animationName = y.current.animationName), u(r);
		}
	}, [c.open, r]), /* @__PURE__ */ (0, T.jsx)(i.div, {
		"data-state": $(c.open),
		"data-disabled": c.disabled ? "" : void 0,
		id: c.contentId,
		hidden: !_,
		...s,
		ref: f,
		style: {
			"--radix-collapsible-content-height": m ? `${m}px` : void 0,
			"--radix-collapsible-content-width": g ? `${g}px` : void 0,
			...e.style
		},
		children: _ && a
	});
});
function $(e) {
	return e ? "open" : "closed";
}
var Ie = Y, Le = X, Re = Q, ze = E.forwardRef(({ className: e, type: t, ...n }, r) => /* @__PURE__ */ (0, T.jsx)("input", {
	type: t,
	className: C("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", e),
	ref: r,
	...n
}));
ze.displayName = "Input";
//#endregion
//#region src/lib/ui/Textarea.tsx
var Be = E.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, T.jsx)("textarea", {
	className: C("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", e),
	ref: n,
	...t
}));
Be.displayName = "Textarea";
//#endregion
//#region src/lib/ui/Collapsible.tsx
function Ve({ ...e }) {
	return /* @__PURE__ */ (0, T.jsx)(Ie, {
		"data-slot": "collapsible",
		...e
	});
}
function He({ ...e }) {
	return /* @__PURE__ */ (0, T.jsx)(X, {
		"data-slot": "collapsible-trigger",
		...e
	});
}
function Ue({ ...e }) {
	return /* @__PURE__ */ (0, T.jsx)(Q, {
		"data-slot": "collapsible-content",
		...e
	});
}
//#endregion
export { ze as a, Le as c, Oe as d, K as f, D as g, ne as h, Be as i, Ae as l, re as m, Ue as n, Re as o, De as p, He as r, Ie as s, Ve as t, Ee as u };
