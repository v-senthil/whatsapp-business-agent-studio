import { n as e, o as t, r as n, u as r } from "./Badge-CRio92UV.js";
import { Lt as i, Pt as a } from "./main-CQFzjeJU.js";
import { r as o, v as s } from "./joinUrl-51baNiN4.js";
import { t as c } from "./dist-CyinVPgs.js";
import { t as l } from "./jsx-runtime-Bcg76ucg.js";
import { n as u, t as d } from "./useCopyToClipboard-9GjEEqo_.js";
import { M as f, d as p, i as m, n as h, t as g } from "./DropdownMenu-DMEGJELa.js";
import { a as _, i as v, n as y, o as b, r as x, t as S } from "./Select-2vKUjDje.js";
import { n as C, t as w } from "./Button-dzS4XgUY.js";
import { t as T } from "./cn-yMl495m5.js";
import { r as E } from "./ZudokuContext-BxG8utmj.js";
//#region src/lib/components/PagefindSearchMeta.tsx
var D = l(), O = ({ name: e, children: t }) => /* @__PURE__ */ (0, D.jsx)("span", {
	"data-pagefind-meta": e,
	className: "sr-only",
	children: t
}), k = c("has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-lg flex w-fit items-stretch *:focus-visible:z-10 *:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1", {
	variants: { orientation: {
		horizontal: "[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-lg! [&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
		vertical: "[&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-lg! flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
	} },
	defaultVariants: { orientation: "horizontal" }
});
function A({ className: e, orientation: t, ...n }) {
	return /* @__PURE__ */ (0, D.jsx)("div", {
		role: "group",
		"data-slot": "button-group",
		"data-orientation": t,
		className: T(k({ orientation: t }), e),
		...n
	});
}
//#endregion
//#region src/lib/components/AiAssistantMenuItems.tsx
var j = {
	claude: {
		label: "Use in Claude",
		icon: /* @__PURE__ */ (0, D.jsx)((e) => /* @__PURE__ */ (0, D.jsxs)("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "1em",
			height: "1em",
			fill: "currentColor",
			fillRule: "evenodd",
			viewBox: "0 0 24 24",
			...e,
			children: [/* @__PURE__ */ (0, D.jsx)("title", { children: "Claude" }), /* @__PURE__ */ (0, D.jsx)("path", {
				fill: "#D97757",
				d: "m4.709 15.955 4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 0 1-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312z"
			})]
		}), {
			className: "size-4",
			"aria-hidden": "true"
		}),
		getUrl: ({ pageUrl: e, type: t }) => `https://claude.ai/new?q=${encodeURIComponent(`Help me understand ${t === "openapi" ? "this API" : "this documentation page"}: ${e}`)}`
	},
	chatgpt: {
		label: "Use in ChatGPT",
		icon: /* @__PURE__ */ (0, D.jsx)((e) => /* @__PURE__ */ (0, D.jsxs)("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 320 320",
			...e,
			children: [/* @__PURE__ */ (0, D.jsx)("title", { children: "ChatGPT" }), /* @__PURE__ */ (0, D.jsx)("path", {
				fill: "currentColor",
				d: "M297.06 130.97a79.712 79.712 0 0 0-6.85-65.48c-17.46-30.4-52.56-46.04-86.84-38.68A79.747 79.747 0 0 0 143.24 0C108.2-.08 77.11 22.48 66.33 55.82a79.754 79.754 0 0 0-53.31 38.67c-17.59 30.32-13.58 68.54 9.92 94.54a79.712 79.712 0 0 0 6.85 65.48c17.46 30.4 52.56 46.04 86.84 38.68a79.687 79.687 0 0 0 60.13 26.8c35.06.09 66.16-22.49 76.94-55.86a79.754 79.754 0 0 0 53.31-38.67c17.57-30.32 13.55-68.51-9.94-94.51zM176.78 299.08a59.77 59.77 0 0 1-38.39-13.88c.49-.26 1.34-.73 1.89-1.07l63.72-36.8a10.36 10.36 0 0 0 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zM47.94 244.05a59.71 59.71 0 0 1-7.15-40.18c.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83L129.87 266c-28.69 16.52-65.33 6.7-81.92-21.95zM31.17 104.96c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91L118.44 224c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94a59.94 59.94 0 0 1-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8a10.375 10.375 0 0 0-10.47 0l-77.79 44.92V92c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22a59.95 59.95 0 0 1 7.15 40.1zm-168.51 55.43-26.94-15.55a.943.943 0 0 1-.52-.74V80.86c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07L116 72.67a10.344 10.344 0 0 0-5.24 9.06l-.04 89.79zM125.35 140 160 119.99l34.65 20V180L160 200l-34.65-20z"
			})]
		}), {
			className: "size-4",
			"aria-hidden": "true"
		}),
		getUrl: ({ pageUrl: e, type: t }) => `https://chatgpt.com/?q=${encodeURIComponent(`Help me understand ${t === "openapi" ? "this API" : "this documentation page"}: ${e}`)}`
	}
}, M = (e) => typeof e == "string" ? j[e] : {
	label: e.label,
	icon: e.icon,
	getUrl: (t) => typeof e.url == "function" ? e.url(t) : e.url.replaceAll("{pageUrl}", t.pageUrl)
}, N = ["claude", "chatgpt"], P = ({ aiAssistants: e, getPageUrl: t, type: n }) => {
	let r = e ?? N;
	return r === !1 ? null : r.map((e, r) => {
		let i = M(e);
		return i ? /* @__PURE__ */ (0, D.jsxs)(m, {
			className: "gap-2",
			onClick: () => {
				let e = i.getUrl({
					pageUrl: t(),
					type: n
				});
				window.open(e, "_blank", "noopener,noreferrer");
			},
			children: [i.icon, i.label]
		}, typeof e == "string" ? e : r) : null;
	});
}, F = ({ downloadUrl: e }) => {
	let [, t] = d(), { options: n } = E();
	return /* @__PURE__ */ (0, D.jsxs)(A, { children: [/* @__PURE__ */ (0, D.jsx)(w, {
		variant: "outline",
		asChild: !0,
		children: /* @__PURE__ */ (0, D.jsxs)("a", {
			href: e,
			download: !0,
			onClick: async (t) => {
				if (e.includes("://")) {
					t.preventDefault();
					try {
						let t = await fetch(e);
						if (!t.ok) throw Error(`Failed to fetch: ${t.statusText}`);
						let n = await t.blob(), r = window.URL.createObjectURL(n), i = document.createElement("a");
						i.href = r, i.download = e.split("/").pop() || "schema.json", document.body.appendChild(i), i.click(), document.body.removeChild(i), window.URL.revokeObjectURL(r);
					} catch (e) {
						console.error("Failed to download schema:", e);
					}
				}
			},
			children: [/* @__PURE__ */ (0, D.jsx)(b, {}), "Download schema"]
		})
	}), /* @__PURE__ */ (0, D.jsxs)(g, { children: [/* @__PURE__ */ (0, D.jsx)(p, {
		asChild: !0,
		children: /* @__PURE__ */ (0, D.jsx)(w, {
			variant: "outline",
			className: "px-1.5",
			children: /* @__PURE__ */ (0, D.jsx)(f, { size: 14 })
		})
	}), /* @__PURE__ */ (0, D.jsxs)(h, {
		align: "end",
		children: [
			/* @__PURE__ */ (0, D.jsx)(m, {
				asChild: !0,
				children: /* @__PURE__ */ (0, D.jsxs)("a", {
					href: e,
					target: "_blank",
					rel: "noopener noreferrer",
					children: [/* @__PURE__ */ (0, D.jsx)(r, { size: 14 }), "Open in new tab"]
				})
			}),
			/* @__PURE__ */ (0, D.jsxs)(m, {
				onClick: async () => {
					t(await (await fetch(e)).text());
				},
				children: [/* @__PURE__ */ (0, D.jsx)(u, { size: 14 }), "Copy to clipboard"]
			}),
			/* @__PURE__ */ (0, D.jsx)(P, {
				aiAssistants: n.aiAssistants,
				getPageUrl: () => new URL(e, window.location.href).href,
				type: "openapi"
			})
		]
	})] })] });
}, I = ({ title: e, heading: r, children: c, tag: l }) => {
	let { input: u, type: d, versions: f, version: p, options: m } = i(), h = s(), g = Object.keys(f).length > 1, b = m?.showVersionSelect === "always" || g && m?.showVersionSelect !== "hide", C = p == null ? void 0 : f[p], w = typeof u == "string" ? d === "url" ? u : C?.downloadUrl : void 0;
	return /* @__PURE__ */ (0, D.jsx)("div", {
		className: "w-full",
		children: /* @__PURE__ */ (0, D.jsxs)("div", {
			className: "flex flex-col gap-4 sm:flex-row justify-around items-start",
			children: [/* @__PURE__ */ (0, D.jsxs)("div", {
				className: "flex flex-col flex-1 gap-3",
				children: [
					e && /* @__PURE__ */ (0, D.jsx)(t, { children: /* @__PURE__ */ (0, D.jsx)(o, {
						to: "..",
						children: e
					}) }),
					/* @__PURE__ */ (0, D.jsx)(n, {
						level: 1,
						registerNavigationAnchor: !0,
						children: r
					}),
					c
				]
			}), /* @__PURE__ */ (0, D.jsx)("div", {
				className: "flex flex-col gap-4 sm:items-end self-start",
				children: /* @__PURE__ */ (0, D.jsxs)("div", {
					className: "flex gap-2 items-center",
					children: [b && /* @__PURE__ */ (0, D.jsxs)(S, {
						onValueChange: (e) => {
							let t = f[e];
							t && h(a(t, l));
						},
						value: p,
						disabled: !g,
						children: [/* @__PURE__ */ (0, D.jsx)(v, {
							className: "w-[180px]",
							size: "sm",
							children: /* @__PURE__ */ (0, D.jsx)(_, { placeholder: "Select version" })
						}), /* @__PURE__ */ (0, D.jsx)(y, { children: Object.entries(f).map(([e, { label: t }]) => /* @__PURE__ */ (0, D.jsx)(x, {
							value: e,
							children: t
						}, e)) })]
					}), m?.schemaDownload?.enabled && w && /* @__PURE__ */ (0, D.jsx)(F, { downloadUrl: w })]
				})
			})]
		})
	});
};
//#endregion
//#region src/lib/ui/Item.tsx
function L({ className: e, ...t }) {
	return /* @__PURE__ */ (0, D.jsx)("div", {
		role: "list",
		"data-slot": "item-group",
		className: T("group/item-group flex flex-col", e),
		...t
	});
}
function R({ className: t, ...n }) {
	return /* @__PURE__ */ (0, D.jsx)(e, {
		"data-slot": "item-separator",
		orientation: "horizontal",
		className: T("my-0", t),
		...n
	});
}
var z = c("group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", {
	variants: {
		variant: {
			default: "bg-transparent",
			outline: "border-border",
			muted: "bg-muted/50"
		},
		size: {
			default: "p-4 gap-4 ",
			sm: "py-3 px-4 gap-2.5"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function B({ className: e, variant: t = "default", size: n = "default", asChild: r = !1, ...i }) {
	return /* @__PURE__ */ (0, D.jsx)(r ? C : "div", {
		"data-slot": "item",
		"data-variant": t,
		"data-size": n,
		className: T(z({
			variant: t,
			size: n,
			className: e
		})),
		...i
	});
}
c("flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5", {
	variants: { variant: {
		default: "bg-transparent",
		icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
		image: "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover"
	} },
	defaultVariants: { variant: "default" }
});
function V({ className: e, ...t }) {
	return /* @__PURE__ */ (0, D.jsx)("div", {
		"data-slot": "item-content",
		className: T("flex flex-1 flex-col gap-1 min-w-0 [&+[data-slot=item-content]]:flex-none", e),
		...t
	});
}
function H({ className: e, ...t }) {
	return /* @__PURE__ */ (0, D.jsx)("div", {
		"data-slot": "item-title",
		className: T("flex w-fit items-center gap-2 text-sm leading-snug font-medium", e),
		...t
	});
}
function U({ className: e, asChild: t = !1, ...n }) {
	return /* @__PURE__ */ (0, D.jsx)(t ? C : "p", {
		"data-slot": "item-description",
		className: T("text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance", "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4", e),
		...n
	});
}
function W({ className: e, ...t }) {
	return /* @__PURE__ */ (0, D.jsx)("div", {
		"data-slot": "item-actions",
		className: T("flex items-center gap-2", e),
		...t
	});
}
//#endregion
export { L as a, I as c, U as i, O as l, W as n, R as o, V as r, H as s, B as t };
