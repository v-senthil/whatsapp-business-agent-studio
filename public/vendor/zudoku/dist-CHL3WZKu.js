import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { _ as n, c as r, d as i, g as a, i as o, n as s, o as c, r as l, s as u, t as d } from "./dist-D6fp9d0w.js";
import { t as f } from "./jsx-runtime-Bcg76ucg.js";
//#region ../../node_modules/.pnpm/@radix-ui+react-tabs@1.1.13_@types+react-dom@19.2.3_@types+react@19.2.17__@types+react@_e99c5d89076f2d2dd8d20b0e7d249a3d/node_modules/@radix-ui/react-tabs/dist/index.mjs
var p = /* @__PURE__ */ e(t(), 1), m = f(), h = "Tabs", [g, _] = a(h, [l]), v = l(), [y, b] = g(h), x = p.forwardRef((e, t) => {
	let { __scopeTabs: n, value: a, onValueChange: s, defaultValue: l, orientation: u = "horizontal", dir: d, activationMode: f = "automatic", ...p } = e, g = o(d), [_, v] = c({
		prop: a,
		onChange: s,
		defaultProp: l ?? "",
		caller: h
	});
	return /* @__PURE__ */ (0, m.jsx)(y, {
		scope: n,
		baseId: r(),
		value: _,
		onValueChange: v,
		orientation: u,
		dir: g,
		activationMode: f,
		children: /* @__PURE__ */ (0, m.jsx)(i.div, {
			dir: g,
			"data-orientation": u,
			...p,
			ref: t
		})
	});
});
x.displayName = h;
var S = "TabsList", C = p.forwardRef((e, t) => {
	let { __scopeTabs: n, loop: r = !0, ...a } = e, o = b(S, n), c = v(n);
	return /* @__PURE__ */ (0, m.jsx)(s, {
		asChild: !0,
		...c,
		orientation: o.orientation,
		dir: o.dir,
		loop: r,
		children: /* @__PURE__ */ (0, m.jsx)(i.div, {
			role: "tablist",
			"aria-orientation": o.orientation,
			...a,
			ref: t
		})
	});
});
C.displayName = S;
var w = "TabsTrigger", T = p.forwardRef((e, t) => {
	let { __scopeTabs: r, value: a, disabled: o = !1, ...s } = e, c = b(w, r), l = v(r), u = O(c.baseId, a), f = k(c.baseId, a), p = a === c.value;
	return /* @__PURE__ */ (0, m.jsx)(d, {
		asChild: !0,
		...l,
		focusable: !o,
		active: p,
		children: /* @__PURE__ */ (0, m.jsx)(i.button, {
			type: "button",
			role: "tab",
			"aria-selected": p,
			"aria-controls": f,
			"data-state": p ? "active" : "inactive",
			"data-disabled": o ? "" : void 0,
			disabled: o,
			id: u,
			...s,
			ref: t,
			onMouseDown: n(e.onMouseDown, (e) => {
				!o && e.button === 0 && e.ctrlKey === !1 ? c.onValueChange(a) : e.preventDefault();
			}),
			onKeyDown: n(e.onKeyDown, (e) => {
				[" ", "Enter"].includes(e.key) && c.onValueChange(a);
			}),
			onFocus: n(e.onFocus, () => {
				let e = c.activationMode !== "manual";
				!p && !o && e && c.onValueChange(a);
			})
		})
	});
});
T.displayName = w;
var E = "TabsContent", D = p.forwardRef((e, t) => {
	let { __scopeTabs: n, value: r, forceMount: a, children: o, ...s } = e, c = b(E, n), l = O(c.baseId, r), d = k(c.baseId, r), f = r === c.value, h = p.useRef(f);
	return p.useEffect(() => {
		let e = requestAnimationFrame(() => h.current = !1);
		return () => cancelAnimationFrame(e);
	}, []), /* @__PURE__ */ (0, m.jsx)(u, {
		present: a || f,
		children: ({ present: n }) => /* @__PURE__ */ (0, m.jsx)(i.div, {
			"data-state": f ? "active" : "inactive",
			"data-orientation": c.orientation,
			role: "tabpanel",
			"aria-labelledby": l,
			hidden: !n,
			id: d,
			tabIndex: 0,
			...s,
			ref: t,
			style: {
				...e.style,
				animationDuration: h.current ? "0s" : void 0
			},
			children: n && o
		})
	});
});
D.displayName = E;
function O(e, t) {
	return `${e}-trigger-${t}`;
}
function k(e, t) {
	return `${e}-content-${t}`;
}
var A = x, j = C, M = T, N = D;
//#endregion
export { M as i, j as n, A as r, N as t };
