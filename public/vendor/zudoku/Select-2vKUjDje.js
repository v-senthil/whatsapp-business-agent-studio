import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { _ as n, a as r, c as i, d as a, g as o, i as s, l as c, o as l, p as u, u as d, v as f } from "./dist-D6fp9d0w.js";
import { t as p } from "./jsx-runtime-Bcg76ucg.js";
import { t as m } from "./createLucideIcon-CE5nuOQr.js";
import { r as h } from "./useCopyToClipboard-9GjEEqo_.js";
import { C as g, D as _, M as v, O as y, S as b, T as x, b as S, g as C, k as w, m as T, p as E, v as D, w as O, x as k, y as A } from "./DropdownMenu-DMEGJELa.js";
import { a as j } from "./Button-dzS4XgUY.js";
var M = m("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]), N = m("download", [
	["path", {
		d: "M12 15V3",
		key: "m9g1x1"
	}],
	["path", {
		d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
		key: "ih7n3h"
	}],
	["path", {
		d: "m7 10 5 5 5-5",
		key: "brsn70"
	}]
]), P = /* @__PURE__ */ e(t(), 1), F = /* @__PURE__ */ e(f(), 1);
function I(e, [t, n]) {
	return Math.min(n, Math.max(t, e));
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-select@2.2.6_@types+react-dom@19.2.3_@types+react@19.2.17__@types+react_64b04b97bd70e289ab7c72267aed5ab9/node_modules/@radix-ui/react-select/dist/index.mjs
var L = p(), R = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], ee = [" ", "Enter"], z = "Select", [B, V, H] = r(z), [U, W] = o(z, [H, x]), G = x(), [te, K] = U(z), [ne, re] = U(z), q = (e) => {
	let { __scopeSelect: t, children: n, open: r, defaultOpen: a, onOpenChange: o, value: c, defaultValue: u, onValueChange: d, dir: f, name: p, autoComplete: m, disabled: h, required: g, form: _ } = e, v = G(t), [y, b] = P.useState(null), [x, S] = P.useState(null), [C, w] = P.useState(!1), T = s(f), [E, D] = l({
		prop: r,
		defaultProp: a ?? !1,
		onChange: o,
		caller: z
	}), [k, A] = l({
		prop: c,
		defaultProp: u,
		onChange: d,
		caller: z
	}), j = P.useRef(null), M = y ? _ || !!y.closest("form") : !0, [N, F] = P.useState(/* @__PURE__ */ new Set()), I = Array.from(N).map((e) => e.props.value).join(";");
	return /* @__PURE__ */ (0, L.jsx)(O, {
		...v,
		children: /* @__PURE__ */ (0, L.jsxs)(te, {
			required: g,
			scope: t,
			trigger: y,
			onTriggerChange: b,
			valueNode: x,
			onValueNodeChange: S,
			valueNodeHasChildren: C,
			onValueNodeHasChildrenChange: w,
			contentId: i(),
			value: k,
			onValueChange: A,
			open: E,
			onOpenChange: D,
			dir: T,
			triggerPointerDownPosRef: j,
			disabled: h,
			children: [/* @__PURE__ */ (0, L.jsx)(B.Provider, {
				scope: t,
				children: /* @__PURE__ */ (0, L.jsx)(ne, {
					scope: e.__scopeSelect,
					onNativeOptionAdd: P.useCallback((e) => {
						F((t) => new Set(t).add(e));
					}, []),
					onNativeOptionRemove: P.useCallback((e) => {
						F((t) => {
							let n = new Set(t);
							return n.delete(e), n;
						});
					}, []),
					children: n
				})
			}), M ? /* @__PURE__ */ (0, L.jsxs)(Ke, {
				"aria-hidden": !0,
				required: g,
				tabIndex: -1,
				name: p,
				autoComplete: m,
				value: k,
				onChange: (e) => A(e.target.value),
				disabled: h,
				form: _,
				children: [k === void 0 ? /* @__PURE__ */ (0, L.jsx)("option", { value: "" }) : null, Array.from(N)]
			}, I) : null]
		})
	});
};
q.displayName = z;
var J = "SelectTrigger", ie = P.forwardRef((e, t) => {
	let { __scopeSelect: r, disabled: i = !1, ...o } = e, s = G(r), c = K(J, r), l = c.disabled || i, u = j(t, c.onTriggerChange), d = V(r), f = P.useRef("touch"), [p, m, h] = Je((e) => {
		let t = d().filter((e) => !e.disabled), n = Ye(t, e, t.find((e) => e.value === c.value));
		n !== void 0 && c.onValueChange(n.value);
	}), g = (e) => {
		l || (c.onOpenChange(!0), h()), e && (c.triggerPointerDownPosRef.current = {
			x: Math.round(e.pageX),
			y: Math.round(e.pageY)
		});
	};
	return /* @__PURE__ */ (0, L.jsx)(k, {
		asChild: !0,
		...s,
		children: /* @__PURE__ */ (0, L.jsx)(a.button, {
			type: "button",
			role: "combobox",
			"aria-controls": c.contentId,
			"aria-expanded": c.open,
			"aria-required": c.required,
			"aria-autocomplete": "none",
			dir: c.dir,
			"data-state": c.open ? "open" : "closed",
			disabled: l,
			"data-disabled": l ? "" : void 0,
			"data-placeholder": qe(c.value) ? "" : void 0,
			...o,
			ref: u,
			onClick: n(o.onClick, (e) => {
				e.currentTarget.focus(), f.current !== "mouse" && g(e);
			}),
			onPointerDown: n(o.onPointerDown, (e) => {
				f.current = e.pointerType;
				let t = e.target;
				t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), e.button === 0 && e.ctrlKey === !1 && e.pointerType === "mouse" && (g(e), e.preventDefault());
			}),
			onKeyDown: n(o.onKeyDown, (e) => {
				let t = p.current !== "";
				!(e.ctrlKey || e.altKey || e.metaKey) && e.key.length === 1 && m(e.key), !(t && e.key === " ") && R.includes(e.key) && (g(), e.preventDefault());
			})
		})
	});
});
ie.displayName = J;
var ae = "SelectValue", oe = P.forwardRef((e, t) => {
	let { __scopeSelect: n, className: r, style: i, children: o, placeholder: s = "", ...l } = e, u = K(ae, n), { onValueNodeHasChildrenChange: d } = u, f = o !== void 0, p = j(t, u.onValueNodeChange);
	return c(() => {
		d(f);
	}, [d, f]), /* @__PURE__ */ (0, L.jsx)(a.span, {
		...l,
		ref: p,
		style: { pointerEvents: "none" },
		children: qe(u.value) ? /* @__PURE__ */ (0, L.jsx)(L.Fragment, { children: s }) : o
	});
});
oe.displayName = ae;
var se = "SelectIcon", ce = P.forwardRef((e, t) => {
	let { __scopeSelect: n, children: r, ...i } = e;
	return /* @__PURE__ */ (0, L.jsx)(a.span, {
		"aria-hidden": !0,
		...i,
		ref: t,
		children: r || "▼"
	});
});
ce.displayName = se;
var le = "SelectPortal", ue = (e) => /* @__PURE__ */ (0, L.jsx)(S, {
	asChild: !0,
	...e
});
ue.displayName = le;
var Y = "SelectContent", de = P.forwardRef((e, t) => {
	let n = K(Y, e.__scopeSelect), [r, i] = P.useState();
	if (c(() => {
		i(new DocumentFragment());
	}, []), !n.open) {
		let t = r;
		return t ? F.createPortal(/* @__PURE__ */ (0, L.jsx)(fe, {
			scope: e.__scopeSelect,
			children: /* @__PURE__ */ (0, L.jsx)(B.Slot, {
				scope: e.__scopeSelect,
				children: /* @__PURE__ */ (0, L.jsx)("div", { children: e.children })
			})
		}), t) : null;
	}
	return /* @__PURE__ */ (0, L.jsx)(he, {
		...e,
		ref: t
	});
});
de.displayName = Y;
var X = 10, [fe, Z] = U(Y), pe = "SelectContentImpl", me = u("SelectContent.RemoveScroll"), he = P.forwardRef((e, t) => {
	let { __scopeSelect: r, position: i = "item-aligned", onCloseAutoFocus: a, onEscapeKeyDown: o, onPointerDownOutside: s, side: c, sideOffset: l, align: u, alignOffset: d, arrowPadding: f, collisionBoundary: p, collisionPadding: m, sticky: h, hideWhenDetached: g, avoidCollisions: v, ...b } = e, x = K(Y, r), [S, C] = P.useState(null), [T, E] = P.useState(null), O = j(t, (e) => C(e)), [k, M] = P.useState(null), [N, F] = P.useState(null), I = V(r), [R, ee] = P.useState(!1), z = P.useRef(!1);
	P.useEffect(() => {
		if (S) return A(S);
	}, [S]), y();
	let B = P.useCallback((e) => {
		let [t, ...n] = I().map((e) => e.ref.current), [r] = n.slice(-1), i = document.activeElement;
		for (let n of e) if (n === i || (n?.scrollIntoView({ block: "nearest" }), n === t && T && (T.scrollTop = 0), n === r && T && (T.scrollTop = T.scrollHeight), n?.focus(), document.activeElement !== i)) return;
	}, [I, T]), H = P.useCallback(() => B([k, S]), [
		B,
		k,
		S
	]);
	P.useEffect(() => {
		R && H();
	}, [R, H]);
	let { onOpenChange: U, triggerPointerDownPosRef: W } = x;
	P.useEffect(() => {
		if (S) {
			let e = {
				x: 0,
				y: 0
			}, t = (t) => {
				e = {
					x: Math.abs(Math.round(t.pageX) - (W.current?.x ?? 0)),
					y: Math.abs(Math.round(t.pageY) - (W.current?.y ?? 0))
				};
			}, n = (n) => {
				e.x <= 10 && e.y <= 10 ? n.preventDefault() : S.contains(n.target) || U(!1), document.removeEventListener("pointermove", t), W.current = null;
			};
			return W.current !== null && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, { capture: !0 });
			};
		}
	}, [
		S,
		U,
		W
	]), P.useEffect(() => {
		let e = () => U(!1);
		return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
			window.removeEventListener("blur", e), window.removeEventListener("resize", e);
		};
	}, [U]);
	let [G, te] = Je((e) => {
		let t = I().filter((e) => !e.disabled), n = Ye(t, e, t.find((e) => e.ref.current === document.activeElement));
		n && setTimeout(() => n.ref.current.focus());
	}), ne = P.useCallback((e, t, n) => {
		let r = !z.current && !n;
		(x.value !== void 0 && x.value === t || r) && (M(e), r && (z.current = !0));
	}, [x.value]), re = P.useCallback(() => S?.focus(), [S]), q = P.useCallback((e, t, n) => {
		let r = !z.current && !n;
		(x.value !== void 0 && x.value === t || r) && F(e);
	}, [x.value]), J = i === "popper" ? ye : _e, ie = J === ye ? {
		side: c,
		sideOffset: l,
		align: u,
		alignOffset: d,
		arrowPadding: f,
		collisionBoundary: p,
		collisionPadding: m,
		sticky: h,
		hideWhenDetached: g,
		avoidCollisions: v
	} : {};
	return /* @__PURE__ */ (0, L.jsx)(fe, {
		scope: r,
		content: S,
		viewport: T,
		onViewportChange: E,
		itemRefCallback: ne,
		selectedItem: k,
		onItemLeave: re,
		itemTextRefCallback: q,
		focusSelectedItem: H,
		selectedItemText: N,
		position: i,
		isPositioned: R,
		searchRef: G,
		children: /* @__PURE__ */ (0, L.jsx)(D, {
			as: me,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ (0, L.jsx)(_, {
				asChild: !0,
				trapped: x.open,
				onMountAutoFocus: (e) => {
					e.preventDefault();
				},
				onUnmountAutoFocus: n(a, (e) => {
					x.trigger?.focus({ preventScroll: !0 }), e.preventDefault();
				}),
				children: /* @__PURE__ */ (0, L.jsx)(w, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: o,
					onPointerDownOutside: s,
					onFocusOutside: (e) => e.preventDefault(),
					onDismiss: () => x.onOpenChange(!1),
					children: /* @__PURE__ */ (0, L.jsx)(J, {
						role: "listbox",
						id: x.contentId,
						"data-state": x.open ? "open" : "closed",
						dir: x.dir,
						onContextMenu: (e) => e.preventDefault(),
						...b,
						...ie,
						onPlaced: () => ee(!0),
						ref: O,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...b.style
						},
						onKeyDown: n(b.onKeyDown, (e) => {
							let t = e.ctrlKey || e.altKey || e.metaKey;
							if (e.key === "Tab" && e.preventDefault(), !t && e.key.length === 1 && te(e.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(e.key)) {
								let t = I().filter((e) => !e.disabled).map((e) => e.ref.current);
								if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
									let n = e.target, r = t.indexOf(n);
									t = t.slice(r + 1);
								}
								setTimeout(() => B(t)), e.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
he.displayName = pe;
var ge = "SelectItemAlignedPosition", _e = P.forwardRef((e, t) => {
	let { __scopeSelect: n, onPlaced: r, ...i } = e, o = K(Y, n), s = Z(Y, n), [l, u] = P.useState(null), [d, f] = P.useState(null), p = j(t, (e) => f(e)), m = V(n), h = P.useRef(!1), g = P.useRef(!0), { viewport: _, selectedItem: v, selectedItemText: y, focusSelectedItem: b } = s, x = P.useCallback(() => {
		if (o.trigger && o.valueNode && l && d && _ && v && y) {
			let e = o.trigger.getBoundingClientRect(), t = d.getBoundingClientRect(), n = o.valueNode.getBoundingClientRect(), i = y.getBoundingClientRect();
			if (o.dir !== "rtl") {
				let r = i.left - t.left, a = n.left - r, o = e.left - a, s = e.width + o, c = Math.max(s, t.width), u = window.innerWidth - X, d = I(a, [X, Math.max(X, u - c)]);
				l.style.minWidth = s + "px", l.style.left = d + "px";
			} else {
				let r = t.right - i.right, a = window.innerWidth - n.right - r, o = window.innerWidth - e.right - a, s = e.width + o, c = Math.max(s, t.width), u = window.innerWidth - X, d = I(a, [X, Math.max(X, u - c)]);
				l.style.minWidth = s + "px", l.style.right = d + "px";
			}
			let a = m(), s = window.innerHeight - X * 2, c = _.scrollHeight, u = window.getComputedStyle(d), f = parseInt(u.borderTopWidth, 10), p = parseInt(u.paddingTop, 10), g = parseInt(u.borderBottomWidth, 10), b = parseInt(u.paddingBottom, 10), x = f + p + c + b + g, S = Math.min(v.offsetHeight * 5, x), C = window.getComputedStyle(_), w = parseInt(C.paddingTop, 10), T = parseInt(C.paddingBottom, 10), E = e.top + e.height / 2 - X, D = s - E, O = v.offsetHeight / 2, k = v.offsetTop + O, A = f + p + k, j = x - A;
			if (A <= E) {
				let e = a.length > 0 && v === a[a.length - 1].ref.current;
				l.style.bottom = "0px";
				let t = d.clientHeight - _.offsetTop - _.offsetHeight, n = A + Math.max(D, O + (e ? T : 0) + t + g);
				l.style.height = n + "px";
			} else {
				let e = a.length > 0 && v === a[0].ref.current;
				l.style.top = "0px";
				let t = Math.max(E, f + _.offsetTop + (e ? w : 0) + O) + j;
				l.style.height = t + "px", _.scrollTop = A - E + _.offsetTop;
			}
			l.style.margin = `${X}px 0`, l.style.minHeight = S + "px", l.style.maxHeight = s + "px", r?.(), requestAnimationFrame(() => h.current = !0);
		}
	}, [
		m,
		o.trigger,
		o.valueNode,
		l,
		d,
		_,
		v,
		y,
		o.dir,
		r
	]);
	c(() => x(), [x]);
	let [S, C] = P.useState();
	return c(() => {
		d && C(window.getComputedStyle(d).zIndex);
	}, [d]), /* @__PURE__ */ (0, L.jsx)(be, {
		scope: n,
		contentWrapper: l,
		shouldExpandOnScrollRef: h,
		onScrollButtonChange: P.useCallback((e) => {
			e && g.current === !0 && (x(), b?.(), g.current = !1);
		}, [x, b]),
		children: /* @__PURE__ */ (0, L.jsx)("div", {
			ref: u,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: S
			},
			children: /* @__PURE__ */ (0, L.jsx)(a.div, {
				...i,
				ref: p,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...i.style
				}
			})
		})
	});
});
_e.displayName = ge;
var ve = "SelectPopperPosition", ye = P.forwardRef((e, t) => {
	let { __scopeSelect: n, align: r = "start", collisionPadding: i = X, ...a } = e, o = G(n);
	return /* @__PURE__ */ (0, L.jsx)(g, {
		...o,
		...a,
		ref: t,
		align: r,
		collisionPadding: i,
		style: {
			boxSizing: "border-box",
			...a.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
ye.displayName = ve;
var [be, xe] = U(Y, {}), Se = "SelectViewport", Ce = P.forwardRef((e, t) => {
	let { __scopeSelect: r, nonce: i, ...o } = e, s = Z(Se, r), c = xe(Se, r), l = j(t, s.onViewportChange), u = P.useRef(0);
	return /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [/* @__PURE__ */ (0, L.jsx)("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: i
	}), /* @__PURE__ */ (0, L.jsx)(B.Slot, {
		scope: r,
		children: /* @__PURE__ */ (0, L.jsx)(a.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...o,
			ref: l,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...o.style
			},
			onScroll: n(o.onScroll, (e) => {
				let t = e.currentTarget, { contentWrapper: n, shouldExpandOnScrollRef: r } = c;
				if (r?.current && n) {
					let e = Math.abs(u.current - t.scrollTop);
					if (e > 0) {
						let r = window.innerHeight - X * 2, i = parseFloat(n.style.minHeight), a = parseFloat(n.style.height), o = Math.max(i, a);
						if (o < r) {
							let i = o + e, a = Math.min(r, i), s = i - a;
							n.style.height = a + "px", n.style.bottom === "0px" && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end");
						}
					}
				}
				u.current = t.scrollTop;
			})
		})
	})] });
});
Ce.displayName = Se;
var we = "SelectGroup", [Te, Ee] = U(we), De = P.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, o = i();
	return /* @__PURE__ */ (0, L.jsx)(Te, {
		scope: n,
		id: o,
		children: /* @__PURE__ */ (0, L.jsx)(a.div, {
			role: "group",
			"aria-labelledby": o,
			...r,
			ref: t
		})
	});
});
De.displayName = we;
var Oe = "SelectLabel", ke = P.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = Ee(Oe, n);
	return /* @__PURE__ */ (0, L.jsx)(a.div, {
		id: i.id,
		...r,
		ref: t
	});
});
ke.displayName = Oe;
var Q = "SelectItem", [Ae, je] = U(Q), Me = P.forwardRef((e, t) => {
	let { __scopeSelect: r, value: o, disabled: s = !1, textValue: c, ...l } = e, u = K(Q, r), d = Z(Q, r), f = u.value === o, [p, m] = P.useState(c ?? ""), [h, g] = P.useState(!1), _ = j(t, (e) => d.itemRefCallback?.(e, o, s)), v = i(), y = P.useRef("touch"), b = () => {
		s || (u.onValueChange(o), u.onOpenChange(!1));
	};
	if (o === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ (0, L.jsx)(Ae, {
		scope: r,
		value: o,
		disabled: s,
		textId: v,
		isSelected: f,
		onItemTextChange: P.useCallback((e) => {
			m((t) => t || (e?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ (0, L.jsx)(B.ItemSlot, {
			scope: r,
			value: o,
			disabled: s,
			textValue: p,
			children: /* @__PURE__ */ (0, L.jsx)(a.div, {
				role: "option",
				"aria-labelledby": v,
				"data-highlighted": h ? "" : void 0,
				"aria-selected": f && h,
				"data-state": f ? "checked" : "unchecked",
				"aria-disabled": s || void 0,
				"data-disabled": s ? "" : void 0,
				tabIndex: s ? void 0 : -1,
				...l,
				ref: _,
				onFocus: n(l.onFocus, () => g(!0)),
				onBlur: n(l.onBlur, () => g(!1)),
				onClick: n(l.onClick, () => {
					y.current !== "mouse" && b();
				}),
				onPointerUp: n(l.onPointerUp, () => {
					y.current === "mouse" && b();
				}),
				onPointerDown: n(l.onPointerDown, (e) => {
					y.current = e.pointerType;
				}),
				onPointerMove: n(l.onPointerMove, (e) => {
					y.current = e.pointerType, s ? d.onItemLeave?.() : y.current === "mouse" && e.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: n(l.onPointerLeave, (e) => {
					e.currentTarget === document.activeElement && d.onItemLeave?.();
				}),
				onKeyDown: n(l.onKeyDown, (e) => {
					d.searchRef?.current !== "" && e.key === " " || (ee.includes(e.key) && b(), e.key === " " && e.preventDefault());
				})
			})
		})
	});
});
Me.displayName = Q;
var $ = "SelectItemText", Ne = P.forwardRef((e, t) => {
	let { __scopeSelect: n, className: r, style: i, ...o } = e, s = K($, n), l = Z($, n), u = je($, n), d = re($, n), [f, p] = P.useState(null), m = j(t, (e) => p(e), u.onItemTextChange, (e) => l.itemTextRefCallback?.(e, u.value, u.disabled)), h = f?.textContent, g = P.useMemo(() => /* @__PURE__ */ (0, L.jsx)("option", {
		value: u.value,
		disabled: u.disabled,
		children: h
	}, u.value), [
		u.disabled,
		u.value,
		h
	]), { onNativeOptionAdd: _, onNativeOptionRemove: v } = d;
	return c(() => (_(g), () => v(g)), [
		_,
		v,
		g
	]), /* @__PURE__ */ (0, L.jsxs)(L.Fragment, { children: [/* @__PURE__ */ (0, L.jsx)(a.span, {
		id: u.textId,
		...o,
		ref: m
	}), u.isSelected && s.valueNode && !s.valueNodeHasChildren ? F.createPortal(o.children, s.valueNode) : null] });
});
Ne.displayName = $;
var Pe = "SelectItemIndicator", Fe = P.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return je(Pe, n).isSelected ? /* @__PURE__ */ (0, L.jsx)(a.span, {
		"aria-hidden": !0,
		...r,
		ref: t
	}) : null;
});
Fe.displayName = Pe;
var Ie = "SelectScrollUpButton", Le = P.forwardRef((e, t) => {
	let n = Z(Ie, e.__scopeSelect), r = xe(Ie, e.__scopeSelect), [i, a] = P.useState(!1), o = j(t, r.onScrollButtonChange);
	return c(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				a(t.scrollTop > 0);
			}, t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ (0, L.jsx)(Be, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop -= t.offsetHeight);
		}
	}) : null;
});
Le.displayName = Ie;
var Re = "SelectScrollDownButton", ze = P.forwardRef((e, t) => {
	let n = Z(Re, e.__scopeSelect), r = xe(Re, e.__scopeSelect), [i, a] = P.useState(!1), o = j(t, r.onScrollButtonChange);
	return c(() => {
		if (n.viewport && n.isPositioned) {
			let e = function() {
				let e = t.scrollHeight - t.clientHeight;
				a(Math.ceil(t.scrollTop) < e);
			}, t = n.viewport;
			return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e);
		}
	}, [n.viewport, n.isPositioned]), i ? /* @__PURE__ */ (0, L.jsx)(Be, {
		...e,
		ref: o,
		onAutoScroll: () => {
			let { viewport: e, selectedItem: t } = n;
			e && t && (e.scrollTop += t.offsetHeight);
		}
	}) : null;
});
ze.displayName = Re;
var Be = P.forwardRef((e, t) => {
	let { __scopeSelect: r, onAutoScroll: i, ...o } = e, s = Z("SelectScrollButton", r), l = P.useRef(null), u = V(r), d = P.useCallback(() => {
		l.current !== null && (window.clearInterval(l.current), l.current = null);
	}, []);
	return P.useEffect(() => () => d(), [d]), c(() => {
		u().find((e) => e.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [u]), /* @__PURE__ */ (0, L.jsx)(a.div, {
		"aria-hidden": !0,
		...o,
		ref: t,
		style: {
			flexShrink: 0,
			...o.style
		},
		onPointerDown: n(o.onPointerDown, () => {
			l.current === null && (l.current = window.setInterval(i, 50));
		}),
		onPointerMove: n(o.onPointerMove, () => {
			s.onItemLeave?.(), l.current === null && (l.current = window.setInterval(i, 50));
		}),
		onPointerLeave: n(o.onPointerLeave, () => {
			d();
		})
	});
}), Ve = "SelectSeparator", He = P.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e;
	return /* @__PURE__ */ (0, L.jsx)(a.div, {
		"aria-hidden": !0,
		...r,
		ref: t
	});
});
He.displayName = Ve;
var Ue = "SelectArrow", We = P.forwardRef((e, t) => {
	let { __scopeSelect: n, ...r } = e, i = G(n), a = K(Ue, n), o = Z(Ue, n);
	return a.open && o.position === "popper" ? /* @__PURE__ */ (0, L.jsx)(b, {
		...i,
		...r,
		ref: t
	}) : null;
});
We.displayName = Ue;
var Ge = "SelectBubbleInput", Ke = P.forwardRef(({ __scopeSelect: e, value: t, ...n }, r) => {
	let i = P.useRef(null), o = j(r, i), s = C(t);
	return P.useEffect(() => {
		let e = i.current;
		if (!e) return;
		let n = window.HTMLSelectElement.prototype, r = Object.getOwnPropertyDescriptor(n, "value").set;
		if (s !== t && r) {
			let n = new Event("change", { bubbles: !0 });
			r.call(e, t), e.dispatchEvent(n);
		}
	}, [s, t]), /* @__PURE__ */ (0, L.jsx)(a.select, {
		...n,
		style: {
			...E,
			...n.style
		},
		ref: o,
		defaultValue: t
	});
});
Ke.displayName = Ge;
function qe(e) {
	return e === "" || e === void 0;
}
function Je(e) {
	let t = d(e), n = P.useRef(""), r = P.useRef(0), i = P.useCallback((e) => {
		let i = n.current + e;
		t(i), (function e(t) {
			n.current = t, window.clearTimeout(r.current), t !== "" && (r.current = window.setTimeout(() => e(""), 1e3));
		})(i);
	}, [t]), a = P.useCallback(() => {
		n.current = "", window.clearTimeout(r.current);
	}, []);
	return P.useEffect(() => () => window.clearTimeout(r.current), []), [
		n,
		i,
		a
	];
}
function Ye(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = Xe(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.textValue.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
function Xe(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
var Ze = q, Qe = ie, $e = oe, et = ce, tt = ue, nt = de, rt = Ce, it = Me, at = Ne, ot = Fe, st = Le, ct = ze;
//#endregion
//#region src/lib/ui/Select.tsx
function lt({ ...e }) {
	return /* @__PURE__ */ (0, L.jsx)(Ze, {
		"data-slot": "select",
		...e
	});
}
function ut({ ...e }) {
	return /* @__PURE__ */ (0, L.jsx)($e, {
		"data-slot": "select-value",
		...e
	});
}
function dt({ className: e, size: t = "default", children: n, ...r }) {
	return /* @__PURE__ */ (0, L.jsxs)(Qe, {
		"data-slot": "select-trigger",
		"data-size": t,
		className: T("border-input data-placeholder:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e),
		...r,
		children: [n, /* @__PURE__ */ (0, L.jsx)(et, {
			asChild: !0,
			children: /* @__PURE__ */ (0, L.jsx)(v, {
				className: "size-4 opacity-50",
				"aria-hidden": "true"
			})
		})]
	});
}
function ft({ className: e, children: t, position: n = "popper", align: r = "center", ...i }) {
	return /* @__PURE__ */ (0, L.jsx)(tt, { children: /* @__PURE__ */ (0, L.jsxs)(nt, {
		"data-slot": "select-content",
		className: T("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-32 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", e),
		position: n,
		align: r,
		...i,
		children: [
			/* @__PURE__ */ (0, L.jsx)(mt, {}),
			/* @__PURE__ */ (0, L.jsx)(rt, {
				className: T("p-1", n === "popper" && "h-(--radix-select-trigger-height) w-full min-w-(--radix-select-trigger-width) scroll-my-1"),
				children: t
			}),
			/* @__PURE__ */ (0, L.jsx)(ht, {})
		]
	}) });
}
function pt({ className: e, children: t, ...n }) {
	return /* @__PURE__ */ (0, L.jsxs)(it, {
		"data-slot": "select-item",
		className: T("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", e),
		...n,
		children: [/* @__PURE__ */ (0, L.jsx)("span", {
			className: "absolute right-2 flex size-3.5 items-center justify-center",
			children: /* @__PURE__ */ (0, L.jsx)(ot, { children: /* @__PURE__ */ (0, L.jsx)(h, {
				className: "size-4",
				"aria-hidden": "true"
			}) })
		}), /* @__PURE__ */ (0, L.jsx)(at, { children: t })]
	});
}
function mt({ className: e, ...t }) {
	return /* @__PURE__ */ (0, L.jsx)(st, {
		"data-slot": "select-scroll-up-button",
		className: T("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ (0, L.jsx)(M, {
			className: "size-4",
			"aria-hidden": "true"
		})
	});
}
function ht({ className: e, ...t }) {
	return /* @__PURE__ */ (0, L.jsx)(ct, {
		"data-slot": "select-scroll-down-button",
		className: T("flex cursor-default items-center justify-center py-1", e),
		...t,
		children: /* @__PURE__ */ (0, L.jsx)(v, {
			className: "size-4",
			"aria-hidden": "true"
		})
	});
}
//#endregion
export { ut as a, dt as i, ft as n, N as o, pt as r, M as s, lt as t };
