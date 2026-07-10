import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { a as n, r, s as i } from "./Badge-CRio92UV.js";
import { Lt as a, Rt as o, Tt as s, wt as c, zt as l } from "./main-CQFzjeJU.js";
import { n as u } from "./joinUrl-51baNiN4.js";
import { t as d } from "./jsx-runtime-Bcg76ucg.js";
import { n as f, r as p, t as m } from "./Collapsible-ByPObG0j.js";
import { t as h } from "./createLucideIcon-CE5nuOQr.js";
import { j as g } from "./DropdownMenu-DMEGJELa.js";
import { t as _ } from "./SchemaView-Dgmj4JIr.js";
import { t as v } from "./Button-dzS4XgUY.js";
import { t as y } from "./cn-yMl495m5.js";
import { c as b, l as x } from "./Item-zp4umt1t.js";
import { t as S } from "./slugify-DPAwprLU.js";
var C = h("list-tree", [
	["path", {
		d: "M8 5h13",
		key: "1pao27"
	}],
	["path", {
		d: "M13 12h8",
		key: "h98zly"
	}],
	["path", {
		d: "M13 19h8",
		key: "c3s6r1"
	}],
	["path", {
		d: "M3 10a2 2 0 0 0 2 2h3",
		key: "1npucw"
	}],
	["path", {
		d: "M3 5v12a2 2 0 0 0 2 2h3",
		key: "x1gjn2"
	}]
]), w = /* @__PURE__ */ e(t(), 1), T = d(), E = (0, w.lazy)(() => import("./hastToJsx-CUg3Ma08.js")), D = "data-active", O = ({ item: e, children: t, className: n, isActive: r }) => /* @__PURE__ */ (0, T.jsxs)("li", {
	className: y("truncate", n),
	title: e.text,
	children: [/* @__PURE__ */ (0, T.jsx)(s, {
		to: `#${e.id}`,
		[D]: e.id,
		className: y(r ? "text-primary" : "hover:text-accent-foreground text-muted-foreground"),
		children: e.rich ? /* @__PURE__ */ (0, T.jsx)(w.Suspense, {
			fallback: e.text,
			children: /* @__PURE__ */ (0, T.jsx)(E, {
				overrides: {
					code: c,
					pre: "pre"
				},
				children: e.rich
			})
		}) : e.text
	}), t]
}), k = ({ entries: e, showHeader: t = !0 }) => {
	let { activeAnchor: r } = n(), i = (0, w.useRef)(null), a = (0, w.useRef)(!1), [o, s] = (0, w.useState)({
		top: 0,
		opacity: 0
	});
	return (0, w.useEffect)(() => {
		if (!i.current) return;
		let e = i.current.querySelector(`[${D}='${r}']`);
		if (!e) {
			s({
				top: 0,
				opacity: 0
			});
			return;
		}
		let t = i.current.getBoundingClientRect().top, n = e.getBoundingClientRect().top;
		s({
			opacity: 1,
			top: `${n - t}px`
		}), !a.current && requestIdleCallback(() => {
			a.current = !0;
		});
	}, [r]), /* @__PURE__ */ (0, T.jsxs)(T.Fragment, { children: [t && /* @__PURE__ */ (0, T.jsxs)("div", {
		className: "flex items-center gap-2 font-medium mb-2",
		children: [/* @__PURE__ */ (0, T.jsx)(C, { size: 16 }), "On this page"]
	}), /* @__PURE__ */ (0, T.jsxs)("div", {
		className: "relative ms-px ps-4",
		children: [
			/* @__PURE__ */ (0, T.jsx)("div", { className: "absolute inset-0 end-auto bg-border w-[1.5px]" }),
			/* @__PURE__ */ (0, T.jsx)("div", {
				className: y("absolute inset-s-0 -translate-y-1 h-6 w-[2.5px] bg-primary", a.current && "ease-out [transition:top_150ms,opacity_325ms]"),
				style: o
			}),
			/* @__PURE__ */ (0, T.jsx)("ul", {
				ref: i,
				className: "relative font-medium list-none space-y-2",
				children: e.map((e) => /* @__PURE__ */ (0, T.jsx)(O, {
					isActive: e.id === r,
					item: e,
					className: "ps-0",
					children: e.children && /* @__PURE__ */ (0, T.jsx)("ul", {
						className: "list-none ps-4 pt-2 space-y-2",
						children: e.children.map((e) => /* @__PURE__ */ (0, T.jsx)(O, {
							item: e,
							isActive: e.id === r
						}, e.id))
					})
				}, e.id))
			})
		]
	})] });
}, A = ({ entries: e }) => /* @__PURE__ */ (0, T.jsx)("aside", {
	className: "sticky scrollbar top-8 lg:top-(--header-height) h-[calc(100vh-var(--header-height))] pt-(--padding-content-top) pb-(--padding-content-bottom) overflow-y-auto ps-1 text-sm",
	children: /* @__PURE__ */ (0, T.jsx)(k, { entries: e })
}), j = o("\n  query GetSchemas($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      title\n      description\n      summary\n      components {\n        schemas {\n          name\n          schema\n          extensions\n        }\n      }\n    }\n  }\n");
function M() {
	let { input: e, type: t, versions: n, version: o, options: s } = a(), { data: c } = u(l(j, {
		input: e,
		type: t
	})), d = c.schema.title, h = c.schema.components?.schemas ?? [], y = Object.entries(n).length > 1, C = s?.showVersionSelect === "always" || y && s?.showVersionSelect !== "hide";
	return h.length ? /* @__PURE__ */ (0, T.jsxs)("div", {
		className: "grid grid-cols-(--sidecar-grid-cols) gap-8 justify-between",
		"data-pagefind-filter": "section:openapi",
		"data-pagefind-meta": "section:openapi",
		children: [
			/* @__PURE__ */ (0, T.jsx)(x, {
				name: "category",
				children: d
			}),
			/* @__PURE__ */ (0, T.jsxs)(i, { children: [/* @__PURE__ */ (0, T.jsxs)("title", { children: ["Schemas ", C ? o : ""] }), /* @__PURE__ */ (0, T.jsx)("meta", {
				name: "description",
				content: "List of schemas used by the API."
			})] }),
			/* @__PURE__ */ (0, T.jsxs)("div", {
				className: "pt-(--padding-content-top) pb-(--padding-content-bottom)",
				children: [
					/* @__PURE__ */ (0, T.jsx)(b, {
						title: d,
						heading: "Schemas"
					}),
					/* @__PURE__ */ (0, T.jsx)("hr", { className: "my-8" }),
					/* @__PURE__ */ (0, T.jsx)("div", {
						className: "flex flex-col gap-y-5",
						children: h.map((e) => /* @__PURE__ */ (0, T.jsxs)(m, {
							className: "group",
							defaultOpen: !0,
							children: [/* @__PURE__ */ (0, T.jsxs)(r, {
								registerNavigationAnchor: !0,
								level: 2,
								className: "flex items-center gap-1 justify-between w-fit",
								id: S(e.name),
								children: [
									e.name,
									" ",
									/* @__PURE__ */ (0, T.jsx)(p, {
										asChild: !0,
										children: /* @__PURE__ */ (0, T.jsx)(v, {
											variant: "ghost",
											size: "icon",
											className: "size-6",
											children: /* @__PURE__ */ (0, T.jsx)(g, {
												size: 16,
												className: "group-data-[state=open]:rotate-90 transition cursor-pointer"
											})
										})
									})
								]
							}), /* @__PURE__ */ (0, T.jsx)(f, {
								className: "mt-4 CollapsibleContent",
								children: /* @__PURE__ */ (0, T.jsx)(_, {
									schema: e.schema,
									hideRootRef: !0
								})
							})]
						}, e.name))
					})
				]
			}),
			/* @__PURE__ */ (0, T.jsx)(A, { entries: h.map((e) => ({
				id: S(e.name),
				text: e.name,
				depth: 1
			})) })
		]
	}) : /* @__PURE__ */ (0, T.jsxs)("div", { children: [/* @__PURE__ */ (0, T.jsxs)(i, { children: [/* @__PURE__ */ (0, T.jsxs)("title", { children: ["Schemas ", C ? o : ""] }), /* @__PURE__ */ (0, T.jsx)("meta", {
		name: "description",
		content: "List of schemas used by the API."
	})] }), "No schemas found"] });
}
//#endregion
export { M as SchemaList };
