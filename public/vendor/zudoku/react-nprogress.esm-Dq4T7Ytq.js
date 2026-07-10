import { a as e, t } from "./chunk-HEgqtunE.js";
import { t as n } from "./react-DCUEsnwl.js";
import { _ as r, c as i, d as a, g as o, h as s, o as c, p as l, s as u } from "./dist-D6fp9d0w.js";
import { f as d, l as f, u as p } from "./dist-CyinVPgs.js";
import { t as m } from "./jsx-runtime-Bcg76ucg.js";
import { m as h } from "./Collapsible-ByPObG0j.js";
import { t as g } from "./createLucideIcon-CE5nuOQr.js";
import { D as _, O as v, _ as ee, b as y, k as b, v as te, y as ne } from "./DropdownMenu-DMEGJELa.js";
import { a as x } from "./Button-dzS4XgUY.js";
import { t as S } from "./cn-yMl495m5.js";
//#region ../../node_modules/.pnpm/@tanstack+query-core@5.101.0/node_modules/@tanstack/query-core/build/modern/mutation.js
var re = class extends f {
	#e;
	#t;
	#n;
	#r;
	constructor(e) {
		super(), this.#e = e.client, this.mutationId = e.mutationId, this.#n = e.mutationCache, this.#t = [], this.state = e.state || C(), this.setOptions(e.options), this.scheduleGc();
	}
	setOptions(e) {
		this.options = e, this.updateGcTime(this.options.gcTime);
	}
	get meta() {
		return this.options.meta;
	}
	addObserver(e) {
		this.#t.includes(e) || (this.#t.push(e), this.clearGcTimeout(), this.#n.notify({
			type: "observerAdded",
			mutation: this,
			observer: e
		}));
	}
	removeObserver(e) {
		this.#t = this.#t.filter((t) => t !== e), this.scheduleGc(), this.#n.notify({
			type: "observerRemoved",
			mutation: this,
			observer: e
		});
	}
	optionalRemove() {
		this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#n.remove(this));
	}
	continue() {
		return this.#r?.continue() ?? this.execute(this.state.variables);
	}
	async execute(e) {
		let t = () => {
			this.#i({ type: "continue" });
		}, n = {
			client: this.#e,
			meta: this.options.meta,
			mutationKey: this.options.mutationKey
		};
		this.#r = p({
			fn: () => this.options.mutationFn ? this.options.mutationFn(e, n) : Promise.reject(/* @__PURE__ */ Error("No mutationFn found")),
			onFail: (e, t) => {
				this.#i({
					type: "failed",
					failureCount: e,
					error: t
				});
			},
			onPause: () => {
				this.#i({ type: "pause" });
			},
			onContinue: t,
			retry: this.options.retry ?? 0,
			retryDelay: this.options.retryDelay,
			networkMode: this.options.networkMode,
			canRun: () => this.#n.canRun(this)
		});
		let r = this.state.status === "pending", i = !this.#r.canStart();
		try {
			if (r) t();
			else {
				this.#i({
					type: "pending",
					variables: e,
					isPaused: i
				}), this.#n.config.onMutate && await this.#n.config.onMutate(e, this, n);
				let t = await this.options.onMutate?.(e, n);
				t !== this.state.context && this.#i({
					type: "pending",
					context: t,
					variables: e,
					isPaused: i
				});
			}
			let a = await this.#r.start();
			return await this.#n.config.onSuccess?.(a, e, this.state.context, this, n), await this.options.onSuccess?.(a, e, this.state.context, n), await this.#n.config.onSettled?.(a, null, this.state.variables, this.state.context, this, n), await this.options.onSettled?.(a, null, e, this.state.context, n), this.#i({
				type: "success",
				data: a
			}), a;
		} catch (t) {
			try {
				await this.#n.config.onError?.(t, e, this.state.context, this, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onError?.(t, e, this.state.context, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.#n.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onSettled?.(void 0, t, e, this.state.context, n);
			} catch (e) {
				Promise.reject(e);
			}
			throw this.#i({
				type: "error",
				error: t
			}), t;
		} finally {
			this.#n.runNext(this);
		}
	}
	#i(e) {
		let t = (t) => {
			switch (e.type) {
				case "failed": return {
					...t,
					failureCount: e.failureCount,
					failureReason: e.error
				};
				case "pause": return {
					...t,
					isPaused: !0
				};
				case "continue": return {
					...t,
					isPaused: !1
				};
				case "pending": return {
					...t,
					context: e.context,
					data: void 0,
					failureCount: 0,
					failureReason: null,
					error: null,
					isPaused: e.isPaused,
					status: "pending",
					variables: e.variables,
					submittedAt: Date.now()
				};
				case "success": return {
					...t,
					data: e.data,
					failureCount: 0,
					failureReason: null,
					error: null,
					status: "success",
					isPaused: !1
				};
				case "error": return {
					...t,
					data: void 0,
					error: e.error,
					failureCount: t.failureCount + 1,
					failureReason: e.error,
					isPaused: !1,
					status: "error"
				};
			}
		};
		this.state = t(this.state), d.batch(() => {
			this.#t.forEach((t) => {
				t.onMutationUpdate(e);
			}), this.#n.notify({
				mutation: this,
				type: "updated",
				action: e
			});
		});
	}
};
function C() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: !1,
		status: "idle",
		variables: void 0,
		submittedAt: 0
	};
}
var w = g("circle", [["circle", {
	cx: "12",
	cy: "12",
	r: "10",
	key: "1mglay"
}]]), ie = g("log-out", [
	["path", {
		d: "m16 17 5-5-5-5",
		key: "1bji2h"
	}],
	["path", {
		d: "M21 12H9",
		key: "dn1m92"
	}],
	["path", {
		d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
		key: "1uf3rs"
	}]
]), ae = g("settings", [["path", {
	d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
	key: "1i5ecw"
}], ["circle", {
	cx: "12",
	cy: "12",
	r: "3",
	key: "1v7zrd"
}]]);
//#endregion
//#region src/lib/util/os.ts
function T() {
	if (typeof navigator > "u") return;
	let e = navigator.userAgent.toLowerCase();
	if (e.indexOf("win") !== -1) return "windows";
	if (e.indexOf("mac") !== -1) return "apple";
	if (e.indexOf("linux") !== -1) return "linux";
	if (e.indexOf("x11") !== -1) return "unix";
}
function oe() {
	return T() === "apple";
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dialog@1.1.15_@types+react-dom@19.2.3_@types+react@19.2.17__@types+reac_a586cb1886ee92e166f497e49d876c32/node_modules/@radix-ui/react-dialog/dist/index.mjs
var E = /* @__PURE__ */ e(n(), 1), D = m(), O = "Dialog", [k, se] = o(O), [ce, A] = k(O), j = (e) => {
	let { __scopeDialog: t, children: n, open: r, defaultOpen: a, onOpenChange: o, modal: s = !0 } = e, l = E.useRef(null), u = E.useRef(null), [d, f] = c({
		prop: r,
		defaultProp: a ?? !1,
		onChange: o,
		caller: O
	});
	return /* @__PURE__ */ (0, D.jsx)(ce, {
		scope: t,
		triggerRef: l,
		contentRef: u,
		contentId: i(),
		titleId: i(),
		descriptionId: i(),
		open: d,
		onOpenChange: f,
		onOpenToggle: E.useCallback(() => f((e) => !e), [f]),
		modal: s,
		children: n
	});
};
j.displayName = O;
var M = "DialogTrigger", N = E.forwardRef((e, t) => {
	let { __scopeDialog: n, ...i } = e, o = A(M, n), s = x(t, o.triggerRef);
	return /* @__PURE__ */ (0, D.jsx)(a.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": o.open,
		"aria-controls": o.contentId,
		"data-state": q(o.open),
		...i,
		ref: s,
		onClick: r(e.onClick, o.onOpenToggle)
	});
});
N.displayName = M;
var P = "DialogPortal", [le, F] = k(P, { forceMount: void 0 }), I = (e) => {
	let { __scopeDialog: t, forceMount: n, children: r, container: i } = e, a = A(P, t);
	return /* @__PURE__ */ (0, D.jsx)(le, {
		scope: t,
		forceMount: n,
		children: E.Children.map(r, (e) => /* @__PURE__ */ (0, D.jsx)(u, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, D.jsx)(y, {
				asChild: !0,
				container: i,
				children: e
			})
		}))
	});
};
I.displayName = P;
var L = "DialogOverlay", R = E.forwardRef((e, t) => {
	let n = F(L, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = A(L, e.__scopeDialog);
	return a.modal ? /* @__PURE__ */ (0, D.jsx)(u, {
		present: r || a.open,
		children: /* @__PURE__ */ (0, D.jsx)(de, {
			...i,
			ref: t
		})
	}) : null;
});
R.displayName = L;
var ue = l("DialogOverlay.RemoveScroll"), de = E.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = A(L, n);
	return /* @__PURE__ */ (0, D.jsx)(te, {
		as: ue,
		allowPinchZoom: !0,
		shards: [i.contentRef],
		children: /* @__PURE__ */ (0, D.jsx)(a.div, {
			"data-state": q(i.open),
			...r,
			ref: t,
			style: {
				pointerEvents: "auto",
				...r.style
			}
		})
	});
}), z = "DialogContent", B = E.forwardRef((e, t) => {
	let n = F(z, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = A(z, e.__scopeDialog);
	return /* @__PURE__ */ (0, D.jsx)(u, {
		present: r || a.open,
		children: a.modal ? /* @__PURE__ */ (0, D.jsx)(fe, {
			...i,
			ref: t
		}) : /* @__PURE__ */ (0, D.jsx)(pe, {
			...i,
			ref: t
		})
	});
});
B.displayName = z;
var fe = E.forwardRef((e, t) => {
	let n = A(z, e.__scopeDialog), i = E.useRef(null), a = x(t, n.contentRef, i);
	return E.useEffect(() => {
		let e = i.current;
		if (e) return ne(e);
	}, []), /* @__PURE__ */ (0, D.jsx)(V, {
		...e,
		ref: a,
		trapFocus: n.open,
		disableOutsidePointerEvents: !0,
		onCloseAutoFocus: r(e.onCloseAutoFocus, (e) => {
			e.preventDefault(), n.triggerRef.current?.focus();
		}),
		onPointerDownOutside: r(e.onPointerDownOutside, (e) => {
			let t = e.detail.originalEvent, n = t.button === 0 && t.ctrlKey === !0;
			(t.button === 2 || n) && e.preventDefault();
		}),
		onFocusOutside: r(e.onFocusOutside, (e) => e.preventDefault())
	});
}), pe = E.forwardRef((e, t) => {
	let n = A(z, e.__scopeDialog), r = E.useRef(!1), i = E.useRef(!1);
	return /* @__PURE__ */ (0, D.jsx)(V, {
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
}), V = E.forwardRef((e, t) => {
	let { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, ...o } = e, s = A(z, n), c = E.useRef(null), l = x(t, c);
	return v(), /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [/* @__PURE__ */ (0, D.jsx)(_, {
		asChild: !0,
		loop: !0,
		trapped: r,
		onMountAutoFocus: i,
		onUnmountAutoFocus: a,
		children: /* @__PURE__ */ (0, D.jsx)(b, {
			role: "dialog",
			id: s.contentId,
			"aria-describedby": s.descriptionId,
			"aria-labelledby": s.titleId,
			"data-state": q(s.open),
			...o,
			ref: l,
			onDismiss: () => s.onOpenChange(!1)
		})
	}), /* @__PURE__ */ (0, D.jsxs)(D.Fragment, { children: [/* @__PURE__ */ (0, D.jsx)(ge, { titleId: s.titleId }), /* @__PURE__ */ (0, D.jsx)(ve, {
		contentRef: c,
		descriptionId: s.descriptionId
	})] })] });
}), H = "DialogTitle", U = E.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = A(H, n);
	return /* @__PURE__ */ (0, D.jsx)(a.h2, {
		id: i.titleId,
		...r,
		ref: t
	});
});
U.displayName = H;
var W = "DialogDescription", G = E.forwardRef((e, t) => {
	let { __scopeDialog: n, ...r } = e, i = A(W, n);
	return /* @__PURE__ */ (0, D.jsx)(a.p, {
		id: i.descriptionId,
		...r,
		ref: t
	});
});
G.displayName = W;
var K = "DialogClose", me = E.forwardRef((e, t) => {
	let { __scopeDialog: n, ...i } = e, o = A(K, n);
	return /* @__PURE__ */ (0, D.jsx)(a.button, {
		type: "button",
		...i,
		ref: t,
		onClick: r(e.onClick, () => o.onOpenChange(!1))
	});
});
me.displayName = K;
function q(e) {
	return e ? "open" : "closed";
}
var J = "DialogTitleWarning", [he, Y] = s(J, {
	contentName: z,
	titleName: H,
	docsSlug: "dialog"
}), ge = ({ titleId: e }) => {
	let t = Y(J), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
	return E.useEffect(() => {
		e && (document.getElementById(e) || console.error(n));
	}, [n, e]), null;
}, _e = "DialogDescriptionWarning", ve = ({ contentRef: e, descriptionId: t }) => {
	let n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Y(_e).contentName}}.`;
	return E.useEffect(() => {
		let r = e.current?.getAttribute("aria-describedby");
		t && r && (document.getElementById(t) || console.warn(n));
	}, [
		n,
		e,
		t
	]), null;
}, X = j, ye = N, be = I, xe = R, Se = B, Ce = U, we = G, Te = me;
//#endregion
//#region src/lib/ui/Dialog.tsx
function Ee({ ...e }) {
	return /* @__PURE__ */ (0, D.jsx)(X, {
		"data-slot": "dialog",
		...e
	});
}
function De({ ...e }) {
	return /* @__PURE__ */ (0, D.jsx)(ye, {
		"data-slot": "dialog-trigger",
		...e
	});
}
function Oe({ ...e }) {
	return /* @__PURE__ */ (0, D.jsx)(be, {
		"data-slot": "dialog-portal",
		...e
	});
}
function ke({ className: e, ...t }) {
	return /* @__PURE__ */ (0, D.jsx)(xe, {
		"data-slot": "dialog-overlay",
		className: S("backdrop-blur-xs transition-all", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/32", e),
		...t
	});
}
function Ae({ className: e, children: t, showCloseButton: n = !0, ...r }) {
	return /* @__PURE__ */ (0, D.jsxs)(Oe, {
		"data-slot": "dialog-portal",
		children: [/* @__PURE__ */ (0, D.jsx)(ke, {}), /* @__PURE__ */ (0, D.jsxs)(Se, {
			"data-slot": "dialog-content",
			className: S("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-xl", e),
			...r,
			children: [t, n && /* @__PURE__ */ (0, D.jsxs)(Te, {
				className: "absolute p-3 group -left-1.5 -top-1.5 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, D.jsx)(w, {
						className: "h-2 w-2 transition-all border border-transparent  group-hover:border-white/20 rounded-full group-hover:scale-180 group-hover:text-red-400",
						strokeWidth: 2,
						fill: "currentColor",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, D.jsx)(h, {
						className: "h-2 w-2 absolute top-3 left-3 text-transparent group-hover:text-red-800 transition-colors",
						strokeWidth: 2,
						fill: "currentColor",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, D.jsx)("span", {
						className: "sr-only",
						children: "Close"
					})
				]
			})]
		})]
	});
}
function je({ className: e, ...t }) {
	return /* @__PURE__ */ (0, D.jsx)("div", {
		"data-slot": "dialog-header",
		className: S("flex flex-col gap-2 text-center sm:text-left", e),
		...t
	});
}
function Me({ className: e, ...t }) {
	return /* @__PURE__ */ (0, D.jsx)("div", {
		"data-slot": "dialog-footer",
		className: S("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", e),
		...t
	});
}
function Ne({ className: e, ...t }) {
	return /* @__PURE__ */ (0, D.jsx)(Ce, {
		"data-slot": "dialog-title",
		className: S("text-lg leading-none font-semibold", e),
		...t
	});
}
function Pe({ className: e, ...t }) {
	return /* @__PURE__ */ (0, D.jsx)(we, {
		"data-slot": "dialog-description",
		className: S("text-muted-foreground text-sm", e),
		...t
	});
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-visually-hidden@1.2.4_@types+react-dom@19.2.3_@types+react@19.2.17__@ty_8140e38b520b84342ccb38a2e956df0a/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var Fe = Object.freeze({
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
}), Ie = "VisuallyHidden", Le = E.forwardRef((e, t) => /* @__PURE__ */ (0, D.jsx)(ee.span, {
	...e,
	ref: t,
	style: {
		...Fe,
		...e.style
	}
}));
Le.displayName = Ie;
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/typeof.js
function Z(e) {
	"@babel/helpers - typeof";
	return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, Z(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function Re(e, t) {
	if (Z(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (Z(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function ze(e) {
	var t = Re(e, "string");
	return Z(t) == "symbol" ? t : t + "";
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function Be(e, t, n) {
	return (t = ze(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function Ve(e) {
	if (Array.isArray(e)) return e;
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function He(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function Ue(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function We(e, t) {
	if (e) {
		if (typeof e == "string") return Ue(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ue(e, t) : void 0;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function Ge() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
//#endregion
//#region ../../node_modules/.pnpm/@babel+runtime@7.29.2/node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function Q(e, t) {
	return Ve(e) || He(e, t) || We(e, t) || Ge();
}
//#endregion
//#region ../../node_modules/.pnpm/react-is@16.13.1/node_modules/react-is/cjs/react-is.production.min.js
var Ke = /* @__PURE__ */ t(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, ee = t ? Symbol.for("react.scope") : 60119;
	function y(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function b(e) {
		return y(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return b(e) || y(e) === l;
	}, e.isConcurrentMode = b, e.isContextConsumer = function(e) {
		return y(e) === c;
	}, e.isContextProvider = function(e) {
		return y(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return y(e) === d;
	}, e.isFragment = function(e) {
		return y(e) === i;
	}, e.isLazy = function(e) {
		return y(e) === h;
	}, e.isMemo = function(e) {
		return y(e) === m;
	}, e.isPortal = function(e) {
		return y(e) === r;
	}, e.isProfiler = function(e) {
		return y(e) === o;
	}, e.isStrictMode = function(e) {
		return y(e) === a;
	}, e.isSuspense = function(e) {
		return y(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === ee || e.$$typeof === g);
	}, e.typeOf = y;
})), qe = /* @__PURE__ */ t(((e, t) => {
	t.exports = Ke();
}));
(/* @__PURE__ */ t(((e, t) => {
	var n = qe(), r = {
		childContextTypes: !0,
		contextType: !0,
		contextTypes: !0,
		defaultProps: !0,
		displayName: !0,
		getDefaultProps: !0,
		getDerivedStateFromError: !0,
		getDerivedStateFromProps: !0,
		mixins: !0,
		propTypes: !0,
		type: !0
	}, i = {
		name: !0,
		length: !0,
		prototype: !0,
		caller: !0,
		callee: !0,
		arguments: !0,
		arity: !0
	}, a = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	}, o = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0
	}, s = {};
	s[n.ForwardRef] = a, s[n.Memo] = o;
	function c(e) {
		return n.isMemo(e) ? o : s[e.$$typeof] || r;
	}
	var l = Object.defineProperty, u = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, m = Object.prototype;
	function h(e, t, n) {
		if (typeof t != "string") {
			if (m) {
				var r = p(t);
				r && r !== m && h(e, r, n);
			}
			var a = u(t);
			d && (a = a.concat(d(t)));
			for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
				var _ = a[g];
				if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
					var v = f(t, _);
					try {
						l(e, _, v);
					} catch {}
				}
			}
		}
		return e;
	}
	t.exports = h;
})))();
var Je = function(e, t, n) {
	return e = e <= n ? e : n, e = e >= t ? e : t, e;
}, Ye = function() {
	var e = !1, t = [], n = function() {
		e = !0;
		var r = t.shift();
		if (r) return r(n);
		e = !1;
	};
	return {
		clear: function() {
			e = !1, t = [];
		},
		enqueue: function(r) {
			t.push(r), !e && t.length === 1 && n();
		}
	};
}, Xe = function() {
	var e, t = function() {
		e !== void 0 && window.cancelAnimationFrame(e);
	};
	return {
		cancel: t,
		schedule: function(n, r) {
			t();
			var i, a, o = function(t) {
				if (a ||= t, i = t - a, i > r) {
					n();
					return;
				}
				e = window.requestAnimationFrame(o);
			};
			e = window.requestAnimationFrame(o);
		}
	};
}, Ze = function(e) {
	var t = 0;
	return e >= 0 && e < .2 ? t = .1 : e >= .2 && e < .5 ? t = .04 : e >= .5 && e < .8 ? t = .02 : e >= .8 && e < .99 && (t = .005), Je(e + t, 0, .994);
}, Qe = function(e) {
	(0, E.useEffect)(e, []);
};
function $e(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function et(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? $e(Object(n), !0).forEach(function(t) {
			Be(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $e(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var tt = function(e) {
	return ++e % 1e6;
}, nt = function() {
	var e = Q((0, E.useState)(0), 2)[1];
	return (0, E.useCallback)(function() {
		return e(tt);
	}, []);
}, rt = function() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = nt(), n = (0, E.useRef)(et({}, e));
	return [(0, E.useCallback)(function() {
		return n.current;
	}, []), (0, E.useCallback)(function(e) {
		e && (Object.assign(n.current, e), t());
	}, [])];
}, it = function() {
	var e = (0, E.useRef)(!0);
	return e.current ? (e.current = !1, !0) : e.current;
}, at = function(e, t) {
	var n = it();
	(0, E.useEffect)(function() {
		if (!n) return e();
	}, t);
};
function ot(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function st(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ot(Object(n), !0).forEach(function(t) {
			Be(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ot(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
var $ = {
	isFinished: !0,
	progress: 0,
	sideEffect: function() {}
}, ct = function() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.animationDuration, n = t === void 0 ? 200 : t, r = e.incrementDuration, i = r === void 0 ? 200 : r, a = e.isAnimating, o = a === void 0 ? !1 : a, s = e.minimum, c = s === void 0 ? .08 : s, l = Q(rt($), 2), u = l[0], d = l[1], f = (0, E.useRef)(null), p = (0, E.useRef)(null);
	Qe(function() {
		f.current = Ye(), p.current = Xe();
	});
	var m = (0, E.useCallback)(function() {
		var e, t;
		(e = p.current) == null || e.cancel(), (t = f.current) == null || t.clear();
	}, []), h = (0, E.useCallback)(function(e) {
		var t;
		if (e = Je(e, c, 1), e === 1) {
			var r, i;
			m(), (r = f.current) == null || r.enqueue(function(t) {
				d({
					progress: e,
					sideEffect: function() {
						return p.current?.schedule(t, n);
					}
				});
			}), (i = f.current) == null || i.enqueue(function() {
				d({
					isFinished: !0,
					sideEffect: m
				});
			});
			return;
		}
		(t = f.current) == null || t.enqueue(function(t) {
			d({
				isFinished: !1,
				progress: e,
				sideEffect: t
			});
		});
	}, [
		n,
		m,
		c,
		f,
		d,
		p
	]), g = (0, E.useCallback)(function() {
		h(Ze(u().progress));
	}, [u, h]), _ = (0, E.useCallback)(function() {
		var e = function() {
			var t;
			g(), (t = f.current) == null || t.enqueue(function(t) {
				var n;
				(n = p.current) == null || n.schedule(function() {
					e(), t();
				}, i);
			});
		};
		e();
	}, [
		i,
		f,
		p,
		g
	]), v = u().sideEffect;
	return Qe(function() {
		return o && _(), m;
	}), at(function() {
		u().sideEffect();
	}, [u, v]), at(function() {
		o ? d(st(st({}, $), {}, { sideEffect: _ })) : h(1);
	}, [
		o,
		h,
		d,
		_
	]), {
		animationDuration: n,
		isFinished: u().isFinished,
		progress: u().progress
	};
};
//#endregion
export { re as C, w as S, ye as _, Pe as a, ae as b, Ne as c, Se as d, we as f, Ce as g, X as h, Ae as i, De as l, be as m, Le as n, Me as o, xe as p, Ee as r, je as s, ct as t, Te as u, T as v, C as w, ie as x, oe as y };
