import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { t as n } from "./dist-CyinVPgs.js";
import { t as r } from "./jsx-runtime-Bcg76ucg.js";
import { t as i } from "./cn-yMl495m5.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@19.2.17_react@19.2.7/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var a = /* @__PURE__ */ e(t(), 1);
function o(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function s(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = o(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : o(e[t], null);
			}
		};
	};
}
function c(...e) {
	return a.useCallback(s(...e), e);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.2.17_react@19.2.7/node_modules/@radix-ui/react-slot/dist/index.mjs
var l = r(), u = Symbol.for("react.lazy"), d = a.use;
function f(e) {
	return typeof e == "object" && !!e && "then" in e;
}
function p(e) {
	return typeof e == "object" && !!e && "$$typeof" in e && e.$$typeof === u && "_payload" in e && f(e._payload);
}
// @__NO_SIDE_EFFECTS__
function m(e) {
	let t = /* @__PURE__ */ g(e), n = a.forwardRef((e, n) => {
		let { children: r, ...i } = e;
		p(r) && typeof d == "function" && (r = d(r._payload));
		let o = a.Children.toArray(r), s = o.find(v);
		if (s) {
			let e = s.props.children, r = o.map((t) => t === s ? a.Children.count(e) > 1 ? a.Children.only(null) : a.isValidElement(e) ? e.props.children : null : t);
			return /* @__PURE__ */ (0, l.jsx)(t, {
				...i,
				ref: n,
				children: a.isValidElement(e) ? a.cloneElement(e, void 0, r) : null
			});
		}
		return /* @__PURE__ */ (0, l.jsx)(t, {
			...i,
			ref: n,
			children: r
		});
	});
	return n.displayName = `${e}.Slot`, n;
}
var h = /* @__PURE__ */ m("Slot");
// @__NO_SIDE_EFFECTS__
function g(e) {
	let t = a.forwardRef((e, t) => {
		let { children: n, ...r } = e;
		if (p(n) && typeof d == "function" && (n = d(n._payload)), a.isValidElement(n)) {
			let e = b(n), i = y(r, n.props);
			return n.type !== a.Fragment && (i.ref = t ? s(t, e) : e), a.cloneElement(n, i);
		}
		return a.Children.count(n) > 1 ? a.Children.only(null) : null;
	});
	return t.displayName = `${e}.SlotClone`, t;
}
var _ = Symbol("radix.slottable");
function v(e) {
	return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === _;
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
//#region src/lib/ui/Button.tsx
var x = n("not-prose focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-lg border border-transparent bg-clip-padding text-sm font-medium focus-visible:ring-3 aria-invalid:ring-3 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
			outline: "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
			ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
			destructive: "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/20 text-destructive focus-visible:border-destructive/40 dark:hover:bg-destructive/30",
			link: "text-primary underline-offset-4 hover:underline",
			none: "p-0!"
		},
		size: {
			default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
			xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
			sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
			lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
			xl: "h-14 gap-1.5 px-5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
			icon: "size-8",
			"icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
			"icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
			"icon-lg": "size-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
}), S = a.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...a }, o) => /* @__PURE__ */ (0, l.jsx)(r ? h : "button", {
	type: r ? void 0 : "button",
	className: i(x({
		variant: t,
		size: n,
		className: e
	})),
	ref: o,
	...a
}));
S.displayName = "Button";
//#endregion
export { c as a, s as i, h as n, m as r, S as t };
