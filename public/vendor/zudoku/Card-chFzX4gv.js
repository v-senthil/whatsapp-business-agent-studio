import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { _ as n, c as r, d as i, g as a, o, p as s, s as c } from "./dist-D6fp9d0w.js";
import { t as l } from "./jsx-runtime-Bcg76ucg.js";
import { t as u } from "./createLucideIcon-CE5nuOQr.js";
import { C as d, D as f, O as p, S as m, T as h, b as g, k as _, v, w as y, x as b, y as x } from "./DropdownMenu-DMEGJELa.js";
import { a as S } from "./Button-dzS4XgUY.js";
import { t as C } from "./cn-yMl495m5.js";
var w = u("key-round", [["path", {
	d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
	key: "1s6t7t"
}], ["circle", {
	cx: "16.5",
	cy: "7.5",
	r: ".5",
	fill: "currentColor",
	key: "w0ekpg"
}]]), T = u("shield-check", [["path", {
	d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
	key: "oel41y"
}], ["path", {
	d: "m9 12 2 2 4-4",
	key: "dzmm74"
}]]), E = /* @__PURE__ */ e(t(), 1), D = l(), O = "Popover", [k, ee] = a(O, [h]), A = h(), [j, M] = k(O), N = (e) => {
	let { __scopePopover: t, children: n, open: i, defaultOpen: a, onOpenChange: s, modal: c = !1 } = e, l = A(t), u = E.useRef(null), [d, f] = E.useState(!1), [p, m] = o({
		prop: i,
		defaultProp: a ?? !1,
		onChange: s,
		caller: O
	});
	return /* @__PURE__ */ (0, D.jsx)(y, {
		...l,
		children: /* @__PURE__ */ (0, D.jsx)(j, {
			scope: t,
			contentId: r(),
			triggerRef: u,
			open: p,
			onOpenChange: m,
			onOpenToggle: E.useCallback(() => m((e) => !e), [m]),
			hasCustomAnchor: d,
			onCustomAnchorAdd: E.useCallback(() => f(!0), []),
			onCustomAnchorRemove: E.useCallback(() => f(!1), []),
			modal: c,
			children: n
		})
	});
};
N.displayName = O;
var P = "PopoverAnchor", F = E.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = M(P, n), a = A(n), { onCustomAnchorAdd: o, onCustomAnchorRemove: s } = i;
	return E.useEffect(() => (o(), () => s()), [o, s]), /* @__PURE__ */ (0, D.jsx)(b, {
		...a,
		...r,
		ref: t
	});
});
F.displayName = P;
var I = "PopoverTrigger", L = E.forwardRef((e, t) => {
	let { __scopePopover: r, ...a } = e, o = M(I, r), s = A(r), c = S(t, o.triggerRef), l = /* @__PURE__ */ (0, D.jsx)(i.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": o.open,
		"aria-controls": o.contentId,
		"data-state": X(o.open),
		...a,
		ref: c,
		onClick: n(e.onClick, o.onOpenToggle)
	});
	return o.hasCustomAnchor ? l : /* @__PURE__ */ (0, D.jsx)(b, {
		asChild: !0,
		...s,
		children: l
	});
});
L.displayName = I;
var R = "PopoverPortal", [te, ne] = k(R, { forceMount: void 0 }), z = (e) => {
	let { __scopePopover: t, forceMount: n, children: r, container: i } = e, a = M(R, t);
	return /* @__PURE__ */ (0, D.jsx)(te, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, D.jsx)(c, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, D.jsx)(g, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
z.displayName = R;
var B = "PopoverContent", V = E.forwardRef((e, t) => {
	let n = ne(B, e.__scopePopover), { forceMount: r = n.forceMount, ...i } = e, a = M(B, e.__scopePopover);
	return /* @__PURE__ */ (0, D.jsx)(c, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ (0, D.jsx)(U, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, D.jsx)(W, {
			...i,
			ref: t
		})
	});
});
V.displayName = B;
var H = s("PopoverContent.RemoveScroll"), U = E.forwardRef((e, t) => {
	let r = M(B, e.__scopePopover), i = E.useRef(null), a = S(t, i), o = E.useRef(!1);
	return E.useEffect(() => {
		let e = i.current;
		if (e) return x(e);
	}, []), /* @__PURE__ */ (0, D.jsx)(v, {
		as: H,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ (0, D.jsx)(G, {
			...e,
			ref: a,
			trapFocus: r.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: n(e.onCloseAutoFocus, (e) => {
				e.preventDefault(), o.current || r.triggerRef.current?.focus();
			}),
			onPointerDownOutside: n(e.onPointerDownOutside, (e) => {
				let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
				o.current = t.button === 2 || n;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: n(e.onFocusOutside, (e) => e.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), W = E.forwardRef((e, t) => {
	let n = M(B, e.__scopePopover), r = E.useRef(!1), i = E.useRef(!1);
	return /* @__PURE__ */ (0, D.jsx)(G, {
		...e,
		ref: t,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (t) => {
			e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1;
		},
		onInteractOutside: (t) => {
			e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, t.detail.originalEvent.type === "pointerdown" && (i.current = !0));
			let a = t.target;
			n.triggerRef.current?.contains(a) && t.preventDefault(), t.detail.originalEvent.type === "focusin" && i.current && t.preventDefault();
		}
	});
}), G = E.forwardRef((e, t) => {
	let { __scopePopover: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, disableOutsidePointerEvents: o, onEscapeKeyDown: s, onPointerDownOutside: c, onFocusOutside: l, onInteractOutside: u, ...m } = e, h = M(B, n), g = A(n);
	return p(), /* @__PURE__ */ (0, D.jsx)(f, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ (0, D.jsx)(_, {
			asChild: !0,
			disableOutsidePointerEvents: o,
			onInteractOutside: u,
			onEscapeKeyDown: s,
			onPointerDownOutside: c,
			onFocusOutside: l,
			onDismiss: () => h.onOpenChange(!1),
			children: /* @__PURE__ */ (0, D.jsx)(d, {
				"data-state": X(h.open),
				role: "dialog",
				id: h.contentId,
				...g,
				...m,
				ref: t,
				style: {
					...m.style,
					"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
					"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
					"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
				}
			})
		})
	});
}), K = "PopoverClose", q = E.forwardRef((e, t) => {
	let { __scopePopover: r, ...a } = e, o = M(K, r);
	return /* @__PURE__ */ (0, D.jsx)(i.button, {
		type: "button",
		...a,
		ref: t,
		onClick: n(e.onClick, () => o.onOpenChange(!1))
	});
});
q.displayName = K;
var J = "PopoverArrow", Y = E.forwardRef((e, t) => {
	let { __scopePopover: n, ...r } = e, i = A(n);
	return /* @__PURE__ */ (0, D.jsx)(m, {
		...i,
		...r,
		ref: t
	});
});
Y.displayName = J;
function X(e) {
	return e ? "open" : "closed";
}
var Z = N, re = L, ie = z, Q = V, ae = Z, oe = re, $ = E.forwardRef(({ className: e, align: t = "center", sideOffset: n = 4, ...r }, i) => /* @__PURE__ */ (0, D.jsx)(ie, { children: /* @__PURE__ */ (0, D.jsx)(Q, {
	ref: i,
	align: t,
	sideOffset: n,
	className: C("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
	...r
}) }));
$.displayName = Q.displayName;
//#endregion
//#region src/lib/ui/Card.tsx
function se({ className: e, size: t = "default", ...n }) {
	return /* @__PURE__ */ (0, D.jsx)("div", {
		"data-slot": "card",
		"data-size": t,
		className: C("ring-foreground/10 bg-card text-card-foreground gap-4 overflow-hidden rounded-xl py-4 text-sm ring-1 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl group/card flex flex-col", e),
		...n
	});
}
function ce({ className: e, ...t }) {
	return /* @__PURE__ */ (0, D.jsx)("div", {
		"data-slot": "card-content",
		className: C("px-4 group-data-[size=sm]/card:px-3", e),
		...t
	});
}
//#endregion
export { oe as a, w as c, $ as i, ce as n, F as o, ae as r, T as s, se as t };
