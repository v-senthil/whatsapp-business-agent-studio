import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { l as n, t as r } from "./Badge-CRio92UV.js";
import { wt as i } from "./main-CQFzjeJU.js";
import { r as a } from "./joinUrl-51baNiN4.js";
import { t as o } from "./jsx-runtime-Bcg76ucg.js";
import { o as s, s as c } from "./Collapsible-ByPObG0j.js";
import { t as l } from "./createLucideIcon-CE5nuOQr.js";
import { M as u } from "./DropdownMenu-DMEGJELa.js";
import { s as d } from "./Select-2vKUjDje.js";
import { n as f, t as p } from "./eye-DqOzm1hZ.js";
import { n as m, t as h } from "./Button-dzS4XgUY.js";
import { t as g } from "./cn-yMl495m5.js";
import { t as _ } from "./Markdown-DNJarfnl.js";
import { a as v, n as ee, o as y, r as b, s as x, t as S } from "./Item-zp4umt1t.js";
import { t as C } from "./slugify-DPAwprLU.js";
import { n as w } from "./constants-BjZ2MprH.js";
var te = l("chevrons-left-right", [["path", {
	d: "m9 7-5 5 5 5",
	key: "j5w590"
}], ["path", {
	d: "m15 7 5 5-5 5",
	key: "1bl6da"
}]]), T = l("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]), E = l("plus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "M12 5v14",
	key: "s699le"
}]]), D = l("refresh-ccw-dot", [
	["path", {
		d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
		key: "14sxne"
	}],
	["path", {
		d: "M3 3v5h5",
		key: "1xhq8a"
	}],
	["path", {
		d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
		key: "1hlbsb"
	}],
	["path", {
		d: "M16 16h5v5",
		key: "ccwih5"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "1",
		key: "41hilf"
	}]
]), O = o();
function k({ className: e, ...t }) {
	return /* @__PURE__ */ (0, O.jsx)("div", {
		"data-slot": "frame",
		className: g("relative flex flex-col rounded-2xl bg-muted p-1", e),
		...t
	});
}
function A({ className: e, ...t }) {
	return /* @__PURE__ */ (0, O.jsx)("div", {
		"data-slot": "frame-panel",
		className: g("relative bg-clip-padding rounded-xl border bg-card p-5 shadow-xs", "before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_1px_--theme(--color-black/4%)] dark:bg-clip-border dark:before:shadow-[0_-1px_--theme(--color-white/8%)]", e),
		...t
	});
}
function j({ className: e, ...t }) {
	return /* @__PURE__ */ (0, O.jsx)("header", {
		"data-slot": "frame-panel-header",
		className: g("flex flex-col p-4", e),
		...t
	});
}
function ne({ className: e, ...t }) {
	return /* @__PURE__ */ (0, O.jsx)("div", {
		"data-slot": "frame-panel-description",
		className: g("text-sm text-muted-foreground", e),
		...t
	});
}
function re({ className: e, ...t }) {
	return /* @__PURE__ */ (0, O.jsx)("footer", {
		"data-slot": "frame-panel-footer",
		className: g("flex flex-col gap-1 px-5 py-4", e),
		...t
	});
}
//#endregion
//#region src/lib/plugins/openapi/components/SelectOnClick.tsx
var M = ({ asChild: e, onClick: t, enabled: n = !0, ...r }) => /* @__PURE__ */ (0, O.jsx)(e ? m : "span", {
	onClick: (e) => {
		if (n) {
			let t = document.createRange();
			t.selectNodeContents(e.currentTarget);
			let n = window.getSelection();
			n?.removeAllRanges(), n?.addRange(t);
		}
		t?.(e);
	},
	...r
}), N = ({ schema: e, hideDescription: t = !1 }) => /* @__PURE__ */ (0, O.jsx)("div", {
	className: "flex flex-col gap-1",
	children: /* @__PURE__ */ (0, O.jsxs)("div", { children: [
		/* @__PURE__ */ (0, O.jsx)("span", {
			className: "text-muted-foreground",
			children: "Const value: "
		}),
		/* @__PURE__ */ (0, O.jsx)(M, {
			className: "border rounded px-1 font-mono",
			children: e.const
		}),
		!t && e.description && /* @__PURE__ */ (0, O.jsx)("div", {
			className: "text-muted-foreground",
			children: e.description
		})
	] })
}), P = /* @__PURE__ */ e(t(), 1), F = ({ values: e, className: t, maxVisibleValues: n = 8 }) => {
	let [r, i] = (0, P.useState)(!1);
	if (!e.length) return null;
	let a = e.length > n, o = a && !r ? e.slice(0, n) : e;
	return /* @__PURE__ */ (0, O.jsxs)("div", {
		className: g("flex flex-wrap gap-1.5", t),
		children: [
			/* @__PURE__ */ (0, O.jsx)("span", {
				className: "text-muted-foreground",
				children: "Enum values:"
			}),
			o.map((e) => /* @__PURE__ */ (0, O.jsx)("div", { children: /* @__PURE__ */ (0, O.jsx)(M, {
				className: "border rounded-sm px-1 font-mono",
				children: e
			}) }, e)),
			a && /* @__PURE__ */ (0, O.jsx)(h, {
				variant: "ghost",
				size: "sm",
				className: "h-fit px-0",
				onClick: () => i(!r),
				children: r ? /* @__PURE__ */ (0, O.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, O.jsx)(d, { size: 12 }), /* @__PURE__ */ (0, O.jsx)("span", {
						className: "text-muted-foreground",
						children: "show less"
					})]
				}) : /* @__PURE__ */ (0, O.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [/* @__PURE__ */ (0, O.jsx)(u, { size: 12 }), /* @__PURE__ */ (0, O.jsxs)("span", {
						className: "text-muted-foreground",
						children: [
							"show ",
							e.length - n,
							" more"
						]
					})]
				})
			})
		]
	});
}, I = ({ name: e, suffix: t, className: n }) => /* @__PURE__ */ (0, O.jsxs)(a, {
	to: {
		pathname: "../~schemas",
		hash: C(e)
	},
	className: g("text-foreground hover:underline", n),
	children: [e, t]
}), L = (e) => typeof e == "string" && [
	"string",
	"number",
	"boolean",
	"integer",
	"null"
].includes(e) || Array.isArray(e) && e.every(L), R = (e) => e.type === "array" || Array.isArray(e.type) && e.type.includes("array"), z = (e) => e && (e.type === "object" && Object.keys(e.properties ?? {}).length > 0 || e.type === "array" && typeof e.items == "object" && (!e.items.type || e.items.type === "object")), B = (e) => typeof e == "string" && (e.startsWith("$[Circular Reference]") || e.startsWith("$ref:")), V = (e) => R(e) && "items" in e && B(e.items), ie = "#/components/schemas/", ae = (e) => decodeURIComponent(e.replace(/~1/g, "/").replace(/~0/g, "~")), H = (e) => {
	if (!e || typeof e != "object") return;
	let t = "__$ref" in e ? e.__$ref : void 0;
	if (typeof t == "string" && t.startsWith(ie)) return ae(t.slice(21));
}, U = (e) => {
	if (typeof e == "string") return e.startsWith("$ref:") ? e.slice(w.length).split("/").pop() : e.split(":")[1];
}, W = ({ pattern: e }) => {
	let [t, n] = (0, P.useState)(!1), r = e.length > 20, a = r ? `${e.slice(0, 20)}…` : e;
	return /* @__PURE__ */ (0, O.jsxs)(i, {
		className: g("text-xs", r && "cursor-pointer"),
		onClick: () => n(!t),
		children: [t ? e : a, r && /* @__PURE__ */ (0, O.jsx)("button", {
			type: "button",
			className: "p-1 translate-y-0.5",
			children: !t && /* @__PURE__ */ (0, O.jsx)(te, { size: 12 })
		})]
	});
}, G = (e) => {
	if (!e) return [];
	let t = e.type === "array" && typeof e.items == "object" ? e.items : void 0;
	return [
		(() => {
			if (t) {
				let e = H(t);
				if (e) return /* @__PURE__ */ (0, O.jsx)(I, {
					name: e,
					suffix: "[]"
				});
				if (t.type) return Array.isArray(t.type) ? `(${t.type.join(" | ")})[]` : `${t.type}[]`;
			}
			let n = H(e);
			return n ? /* @__PURE__ */ (0, O.jsx)(I, { name: n }) : Array.isArray(e.type) ? e.type.join(" | ") : e.type;
		})(),
		e.enum && "enum",
		e.const && "const",
		e.format,
		t?.contentMediaType,
		e.minimum !== void 0 && `min: ${e.minimum}`,
		e.maximum !== void 0 && `max: ${e.maximum}`,
		e.minLength !== void 0 && `minLength: ${e.minLength}`,
		e.maxLength !== void 0 && `maxLength: ${e.maxLength}`,
		e.minItems !== void 0 && `minItems: ${e.minItems}`,
		e.maxItems !== void 0 && `maxItems: ${e.maxItems}`,
		e.minProperties !== void 0 && `minProps: ${e.minProperties}`,
		e.maxProperties !== void 0 && `maxProps: ${e.maxProperties}`,
		e.uniqueItems && "unique",
		e.readOnly && "readOnly",
		e.writeOnly && "writeOnly",
		e.deprecated && "deprecated",
		e.pattern && /* @__PURE__ */ (0, O.jsxs)(O.Fragment, { children: ["pattern: ", /* @__PURE__ */ (0, O.jsx)(W, { pattern: e.pattern })] })
	];
}, K = ({ schema: e, extraItems: t = [], className: n }) => {
	let r = [...G(e), ...t].flatMap((e) => typeof e == "string" || (0, P.isValidElement)(e) ? e : []);
	return /* @__PURE__ */ (0, O.jsx)("span", {
		className: n,
		children: r.map((e, t) => /* @__PURE__ */ (0, O.jsxs)("span", {
			className: "text-muted-foreground",
			children: [e, t < r.length - 1 && /* @__PURE__ */ (0, O.jsx)("span", {
				className: "text-muted-foreground/50",
				children: "\xA0·\xA0"
			})]
		}, t))
	});
}, q = ({ schema: e }) => {
	let t = e.examples?.at(0), n = e.default;
	return t === void 0 && n === void 0 ? null : /* @__PURE__ */ (0, O.jsxs)("div", {
		className: "flex flex-col gap-1",
		children: [t !== void 0 && /* @__PURE__ */ (0, O.jsxs)("div", { children: [/* @__PURE__ */ (0, O.jsx)("span", {
			className: "text-muted-foreground",
			children: "Example: "
		}), /* @__PURE__ */ (0, O.jsx)(M, {
			className: "border rounded-sm px-1 font-mono wrap-anywhere",
			children: typeof t == "object" || typeof t == "boolean" ? JSON.stringify(t) : t
		})] }), n !== void 0 && /* @__PURE__ */ (0, O.jsxs)("div", { children: [/* @__PURE__ */ (0, O.jsx)("span", {
			className: "text-muted-foreground",
			children: "Default: "
		}), /* @__PURE__ */ (0, O.jsx)(M, {
			className: "border rounded-sm px-1 font-mono wrap-anywhere",
			children: typeof n == "object" || typeof n == "boolean" ? JSON.stringify(n) : n
		})] })]
	});
}, J = ({ circularProp: e }) => /* @__PURE__ */ (0, O.jsxs)(i, {
	className: "inline-flex items-center gap-1.5 text-xs translate-y-0.5",
	children: [/* @__PURE__ */ (0, O.jsx)(D, { size: 13 }), /* @__PURE__ */ (0, O.jsx)("span", { children: e ? `${e} (circular)` : "circular" })]
}), oe = ({ name: e, schema: t, group: n, defaultOpen: r = !1, showCollapseButton: i = !0 }) => {
	let [a, o] = (0, P.useState)(r), l = n === "deprecated";
	if (B(t)) return /* @__PURE__ */ (0, O.jsx)(S, {
		className: g(l && "opacity-50 hover:opacity-100 transition"),
		children: /* @__PURE__ */ (0, O.jsxs)(b, {
			className: "gap-y-2",
			children: [/* @__PURE__ */ (0, O.jsxs)("div", { children: [
				/* @__PURE__ */ (0, O.jsx)(x, {
					className: "inline me-2",
					children: /* @__PURE__ */ (0, O.jsx)("code", {
						className: g(l && "line-through"),
						children: e
					})
				}),
				"​",
				/* @__PURE__ */ (0, O.jsx)(K, {
					className: "inline",
					schema: t,
					extraItems: [n === "required" && /* @__PURE__ */ (0, O.jsx)("span", {
						className: "text-primary",
						children: "required"
					}), /* @__PURE__ */ (0, O.jsx)(J, {}, "circular-ref")]
				})
			] }), /* @__PURE__ */ (0, O.jsx)(q, { schema: t })]
		})
	});
	let u = !!((t.allOf || t.anyOf || t.oneOf || z(t) || R(t) && "items" in t && z(t.items) || t.additionalProperties) && !V(t)), d = !!(t.description || "items" in t && t.items?.enum || t.const || t.enum || t.example !== void 0 || t.default !== void 0);
	return /* @__PURE__ */ (0, O.jsxs)(S, {
		className: g(l && "opacity-50 hover:opacity-100 transition"),
		children: [
			/* @__PURE__ */ (0, O.jsxs)(b, {
				className: "gap-y-2",
				children: [/* @__PURE__ */ (0, O.jsxs)("div", { children: [
					/* @__PURE__ */ (0, O.jsx)(x, {
						className: "inline me-2",
						children: u ? /* @__PURE__ */ (0, O.jsx)("button", {
							onClick: () => o(!a),
							type: "button",
							className: "hover:underline",
							children: /* @__PURE__ */ (0, O.jsx)("code", {
								className: g(l && "line-through"),
								children: e
							})
						}) : /* @__PURE__ */ (0, O.jsx)("code", {
							className: g(l && "line-through"),
							children: e
						})
					}),
					"​",
					/* @__PURE__ */ (0, O.jsx)(K, {
						className: "inline",
						schema: t,
						extraItems: [n === "required" && /* @__PURE__ */ (0, O.jsx)("span", {
							className: "text-primary",
							children: "required"
						}), V(t) && /* @__PURE__ */ (0, O.jsx)(J, { circularProp: U(t.items) })]
					})
				] }), d && /* @__PURE__ */ (0, O.jsxs)("div", {
					className: "flex flex-col gap-1.5",
					children: [
						t.description && /* @__PURE__ */ (0, O.jsx)(_, {
							className: "prose-sm",
							content: t.description
						}),
						"items" in t && t.items?.enum && /* @__PURE__ */ (0, O.jsx)(F, { values: t.items.enum }),
						t.const && /* @__PURE__ */ (0, O.jsx)(N, {
							schema: t,
							hideDescription: !0
						}),
						t.enum && /* @__PURE__ */ (0, O.jsx)(F, { values: t.enum }),
						/* @__PURE__ */ (0, O.jsx)(q, { schema: t })
					]
				})]
			}),
			u && i && /* @__PURE__ */ (0, O.jsx)(ee, {
				className: "self-start",
				children: /* @__PURE__ */ (0, O.jsx)(h, {
					variant: "ghost",
					size: "icon",
					className: "rounded-full",
					onClick: () => o(!a),
					"aria-label": "Toggle properties",
					children: a ? /* @__PURE__ */ (0, O.jsx)(T, { size: 16 }) : /* @__PURE__ */ (0, O.jsx)(E, { size: 16 })
				})
			}),
			u && /* @__PURE__ */ (0, O.jsx)(c, {
				defaultOpen: r,
				open: a,
				onOpenChange: o,
				className: g("w-full", !a && "contents"),
				children: /* @__PURE__ */ (0, O.jsx)(s, {
					asChild: !0,
					children: /* @__PURE__ */ (0, O.jsx)(b, { children: t.anyOf || t.oneOf || t.type === "object" ? /* @__PURE__ */ (0, O.jsx)($, { schema: t }) : R(t) && "items" in t ? /* @__PURE__ */ (0, O.jsx)($, { schema: t.items }) : null })
				})
			})
		]
	});
}, Y = (e) => {
	let t = e.oneOf ?? e.anyOf ?? [];
	return e.properties && Object.keys(e.properties).length > 0 ? t.map((t) => !t.properties && !t.type && !t.oneOf && !t.anyOf ? {
		...t,
		type: "object",
		properties: e.properties,
		required: t.required ?? e.required
	} : t) : t;
}, se = (e) => {
	if (Array.isArray(e.oneOf)) return "exactly-one";
	let t = e.discriminator?.propertyName;
	if (!t) return "at-least-one";
	let n = Y(e), r = /* @__PURE__ */ new Set();
	for (let e of n) {
		let n = e.properties?.[t], i = n?.const ?? (Array.isArray(n?.enum) && n.enum.length === 1 ? String(n.enum[0]) : void 0);
		if (i == null || r.has(String(i))) return "at-least-one";
		r.add(String(i));
	}
	return "exactly-one";
}, X = (e, t) => t.title?.trim() || `Variant ${e + 1}`, ce = (e, t) => {
	let n = [];
	e.type && n.push(`type = ${Array.isArray(e.type) ? e.type.join("|") : e.type}`);
	let r = t?.discriminator?.propertyName;
	if (r) {
		let t = e.properties?.[r], i = t?.const ?? (Array.isArray(t?.enum) && t.enum.length === 1 ? t.enum[0] : void 0);
		i !== void 0 && n.push(`${r}=${JSON.stringify(i)}`);
	}
	let i = (e.required ?? []).filter((e) => e !== r);
	if (i.length) {
		let e = i.slice(0, 3).join(", "), t = i.length > 3 ? ` +${i.length - 3} more` : "";
		n.push(`requires: ${e}${t}`);
	}
	return n;
}, le = ({ variants: e, schema: t, selectedVariant: n, onSelectVariant: r }) => {
	let i = e.map((e, n) => ({
		label: X(n, e),
		guards: ce(e, t)
	}));
	return /* @__PURE__ */ (0, O.jsxs)("div", {
		className: "flex flex-col gap-2 text-sm",
		children: [/* @__PURE__ */ (0, O.jsx)("h4", {
			className: "font-medium",
			children: "Decision Table"
		}), /* @__PURE__ */ (0, O.jsx)("div", {
			className: "border rounded-md overflow-hidden",
			children: /* @__PURE__ */ (0, O.jsxs)("table", {
				className: "w-full",
				children: [/* @__PURE__ */ (0, O.jsx)("thead", { children: /* @__PURE__ */ (0, O.jsxs)("tr", {
					className: "border-b bg-muted/50",
					children: [/* @__PURE__ */ (0, O.jsx)("th", {
						className: "text-left p-2 font-medium",
						children: "Variant"
					}), /* @__PURE__ */ (0, O.jsx)("th", {
						className: "text-left p-2 font-medium",
						children: "Matching Criteria"
					})]
				}) }), /* @__PURE__ */ (0, O.jsx)("tbody", {
					className: "divide-y",
					children: i.map((e) => /* @__PURE__ */ (0, O.jsxs)("tr", {
						className: "hover:bg-muted/30",
						children: [/* @__PURE__ */ (0, O.jsx)("td", {
							className: "p-2 font-medium",
							children: /* @__PURE__ */ (0, O.jsx)("button", {
								type: "button",
								className: g("hover:underline", n === e.label && "text-primary"),
								onClick: () => r(e.label),
								children: e.label
							})
						}), /* @__PURE__ */ (0, O.jsx)("td", {
							className: "p-2 text-muted-foreground text-xs",
							children: e.guards.length > 0 ? e.guards.join(" · ") : "No specific criteria"
						})]
					}, e.label))
				})]
			})
		})]
	});
}, Z = ({ schema: e, cardHeader: t, embedded: n }) => {
	let i = Array.isArray(e.oneOf) ? "oneOf" : Array.isArray(e.anyOf) ? "anyOf" : void 0, a = i ? Y(e) : [], [o, s] = (0, P.useState)(() => a[0] ? X(0, a[0]) : "");
	if (!i) return null;
	let c = se(e) === "exactly-one" ? /* @__PURE__ */ (0, O.jsxs)(O.Fragment, { children: [
		"Exactly one variant ",
		/* @__PURE__ */ (0, O.jsx)("b", { children: "must match" }),
		"."
	] }) : /* @__PURE__ */ (0, O.jsxs)(O.Fragment, { children: [
		"At least one variant ",
		/* @__PURE__ */ (0, O.jsx)("b", { children: "must match" }),
		". Multiple variants",
		" ",
		/* @__PURE__ */ (0, O.jsx)("i", { children: "may match" }),
		" simultaneously."
	] }), l = a.findIndex((e, t) => X(t, e) === o), u = l >= 0 ? a[l] : null, d = /* @__PURE__ */ (0, O.jsxs)("div", {
		className: "text-sm flex flex-col gap-4 p-4",
		children: [
			/* @__PURE__ */ (0, O.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, O.jsx)(r, {
					variant: "outline",
					children: i
				}), /* @__PURE__ */ (0, O.jsx)("div", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, O.jsx)("span", {
						className: "text-sm",
						children: c
					})
				})]
			}),
			/* @__PURE__ */ (0, O.jsx)(le, {
				variants: a,
				schema: e,
				selectedVariant: o,
				onSelectVariant: s
			}),
			/* @__PURE__ */ (0, O.jsxs)("strong", { children: [
				"Properties for ",
				o,
				":"
			] }),
			u && /* @__PURE__ */ (0, O.jsx)($, { schema: u })
		]
	});
	return n ? d : /* @__PURE__ */ (0, O.jsxs)(k, { children: [t, /* @__PURE__ */ (0, O.jsx)(A, {
		className: "p-0!",
		children: d
	})] });
}, ue = ({ name: e }) => /* @__PURE__ */ (0, O.jsx)("div", {
	className: "text-xs font-semibold flex items-center gap-1.5 px-4 py-2 border-b bg-muted/40",
	children: /* @__PURE__ */ (0, O.jsx)(I, { name: e })
}), de = (e) => e && /* @__PURE__ */ (0, O.jsx)(_, {
	className: "text-sm leading-normal line-clamp-4",
	content: e
}), fe = (e, t, n) => {
	let r = /* @__PURE__ */ (0, O.jsxs)(O.Fragment, { children: [
		/* @__PURE__ */ (0, O.jsx)("span", {
			className: "text-sm text-muted-foreground",
			children: /* @__PURE__ */ (0, O.jsx)(K, { schema: e })
		}),
		e.enum && /* @__PURE__ */ (0, O.jsx)(F, { values: e.enum }),
		de(e.description),
		/* @__PURE__ */ (0, O.jsx)(q, { schema: e })
	] });
	return n ? /* @__PURE__ */ (0, O.jsx)("div", {
		className: "space-y-2 p-4",
		children: r
	}) : /* @__PURE__ */ (0, O.jsxs)(k, { children: [t, /* @__PURE__ */ (0, O.jsx)(A, {
		className: "space-y-2",
		children: r
	})] });
}, Q = ({ properties: e, group: t, defaultOpen: n }) => /* @__PURE__ */ (0, O.jsx)(v, {
	className: "overflow-clip",
	children: e.map(([e, r], i) => /* @__PURE__ */ (0, O.jsxs)(P.Fragment, { children: [i > 0 && /* @__PURE__ */ (0, O.jsx)(y, {}), /* @__PURE__ */ (0, O.jsx)(oe, {
		name: e,
		schema: r,
		group: t,
		defaultOpen: n
	})] }, e))
}), pe = ({ count: e, showDeprecated: t, onToggle: n, controlsId: r }) => /* @__PURE__ */ (0, O.jsxs)("button", {
	type: "button",
	onClick: n,
	"aria-expanded": t,
	"aria-controls": r,
	className: "text-xs text-muted-foreground flex items-center gap-1.5 hover:text-foreground transition-colors cursor-pointer",
	children: [t ? /* @__PURE__ */ (0, O.jsx)(f, { size: 14 }) : /* @__PURE__ */ (0, O.jsx)(p, { size: 14 }), t ? "Hide deprecated fields" : `Show ${e} deprecated field${e === 1 ? "" : "s"}`]
}), me = ({ schema: e, defaultOpen: t, cardHeader: r, embedded: i, rootRefName: a }) => {
	let [o, s] = (0, P.useState)(!1), c = (0, P.useRef)(null), l = (0, P.useId)();
	(0, P.useLayoutEffect)(() => {
		let e = c.current;
		if (!e) return;
		o ? e.removeAttribute("hidden") : e.setAttribute("hidden", "until-found");
		let t = () => s(!0);
		return e.addEventListener("beforematch", t), () => e.removeEventListener("beforematch", t);
	}, [o]);
	let u = Object.groupBy(Object.entries(e.properties ?? {}), ([t, n]) => n.deprecated ? "deprecated" : e.required?.includes(t) ? "required" : "optional"), d = ["required", "optional"].flatMap((e) => {
		let t = u[e];
		return t ? {
			group: e,
			properties: t
		} : [];
	}), f = u.deprecated, p = typeof e.additionalProperties == "object" && /* @__PURE__ */ (0, O.jsx)($, {
		schema: e.additionalProperties,
		embedded: !0
	}), m = (Array.isArray(e.oneOf) || Array.isArray(e.anyOf)) && /* @__PURE__ */ (0, O.jsx)(Z, {
		schema: e,
		embedded: !0
	}), h = d.map(({ group: e, properties: n }, r) => /* @__PURE__ */ (0, O.jsxs)(P.Fragment, { children: [r > 0 && /* @__PURE__ */ (0, O.jsx)(y, {}), /* @__PURE__ */ (0, O.jsx)(Q, {
		properties: n,
		group: e,
		defaultOpen: t
	})] }, e)), g = f && /* @__PURE__ */ (0, O.jsxs)(O.Fragment, { children: [d.length > 0 && /* @__PURE__ */ (0, O.jsx)(y, {}), /* @__PURE__ */ (0, O.jsx)(Q, {
		properties: f,
		group: "deprecated",
		defaultOpen: t
	})] });
	if (i) return /* @__PURE__ */ (0, O.jsxs)(O.Fragment, { children: [
		h,
		g,
		m && (d.length > 0 || f) && /* @__PURE__ */ (0, O.jsx)(y, {}),
		m
	] });
	let _ = d.length > 0 || f || p || m;
	return /* @__PURE__ */ (0, O.jsxs)(k, { children: [
		r,
		e.description && /* @__PURE__ */ (0, O.jsx)(j, { children: /* @__PURE__ */ (0, O.jsx)(ne, { children: e.description }) }),
		(_ || a) && /* @__PURE__ */ (0, O.jsxs)(A, {
			className: "p-0!",
			children: [
				a && /* @__PURE__ */ (0, O.jsx)(ue, { name: a }),
				h,
				f && /* @__PURE__ */ (0, O.jsx)("div", {
					ref: c,
					id: l,
					hidden: !o,
					children: g
				}),
				p,
				m && (d.length > 0 || o && f) && /* @__PURE__ */ (0, O.jsx)(y, {}),
				m
			]
		}),
		(e.additionalProperties === !0 || f) && /* @__PURE__ */ (0, O.jsxs)(re, {
			className: "flex-row items-center justify-between",
			children: [e.additionalProperties === !0 ? /* @__PURE__ */ (0, O.jsxs)("a", {
				className: "text-sm flex items-center gap-1 hover:underline",
				href: "https://swagger.io/docs/specification/v3_0/data-models/dictionaries/",
				rel: "noopener noreferrer",
				target: "_blank",
				children: ["Additional properties are allowed", /* @__PURE__ */ (0, O.jsx)(n, { size: 14 })]
			}) : /* @__PURE__ */ (0, O.jsx)("span", {}), f && /* @__PURE__ */ (0, O.jsx)(pe, {
				count: f.length,
				showDeprecated: o,
				onToggle: () => s(!o),
				controlsId: l
			})]
		})
	] });
}, $ = ({ schema: e, defaultOpen: t = !1, cardHeader: n, embedded: r, hideRootRef: i }) => {
	if (!e || Object.keys(e).length === 0) return /* @__PURE__ */ (0, O.jsxs)(k, { children: [n, /* @__PURE__ */ (0, O.jsx)(A, { children: /* @__PURE__ */ (0, O.jsx)("div", {
		className: "text-sm text-muted-foreground italic",
		children: "No data returned"
	}) })] });
	if (e.const) return /* @__PURE__ */ (0, O.jsx)(N, { schema: e });
	let a = Array.isArray(e.oneOf) || Array.isArray(e.anyOf);
	if (a && !e.properties) return /* @__PURE__ */ (0, O.jsx)(Z, {
		schema: e,
		cardHeader: n,
		embedded: r
	});
	if (L(e.type)) return fe(e, n, r);
	if (R(e) && typeof e.items == "object") return /* @__PURE__ */ (0, O.jsx)($, {
		schema: {
			type: "object",
			properties: { "": e }
		},
		cardHeader: n,
		defaultOpen: !0
	});
	if (e.type === "object" || e.properties || a) return /* @__PURE__ */ (0, O.jsx)(me, {
		schema: e,
		defaultOpen: t,
		cardHeader: n,
		embedded: r,
		rootRefName: !r && !i ? H(e) : void 0
	});
};
//#endregion
export { B as a, k as c, T as d, R as i, A as l, q as n, F as o, K as r, M as s, $ as t, E as u };
