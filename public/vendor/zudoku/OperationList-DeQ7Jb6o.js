import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { l as n, n as r, r as i, s as a, t as o, u as s } from "./Badge-CRio92UV.js";
import { At as c, Dt as l, Ht as u, Lt as d, Rt as f, ft as p, gt as m, ht as h, mt as g, pt as _, wt as v, zt as y } from "./main-CQFzjeJU.js";
import { _ as b, d as x, g as S, o as C, s as w } from "./dist-D6fp9d0w.js";
import { S as ee, a as T, b as te, n as ne, r as E, t as re } from "./joinUrl-51baNiN4.js";
import { c as D, i as ie, l as ae, n as O, r as oe } from "./react-nprogress.esm-Dq4T7Ytq.js";
import { _ as se, a as k, b as ce, c as le, d as ue, f as de, g as fe, h as pe, i as me, l as he, m as ge, o as _e, r as ve, s as ye, t as be, u as xe, x as Se, y as Ce } from "./PlaygroundDialog-CEjHvOmj.js";
import { t as we } from "./jsx-runtime-Bcg76ucg.js";
import { t as Te } from "./useQuery-B8Uxp7FM.js";
import { d as Ee, f as De, n as Oe, o as ke, p as Ae, r as je, s as Me, t as Ne, u as Pe } from "./Collapsible-ByPObG0j.js";
import { t as Fe } from "./createLucideIcon-CE5nuOQr.js";
import { n as Ie, r as Le } from "./useCopyToClipboard-9GjEEqo_.js";
import { C as Re, M as ze, S as Be, T as Ve, b as He, k as Ue, m as We, w as Ge, x as Ke } from "./DropdownMenu-DMEGJELa.js";
import { a as qe, i as Je, n as Ye, r as Xe, t as Ze } from "./Select-2vKUjDje.js";
import { a as Qe, c as $e, d as et, i as tt, l as nt, n as rt, o as it, r as at, s as ot, t as st, u as ct } from "./SchemaView-Dgmj4JIr.js";
import { a as lt, c as ut, i as dt, r as ft, s as pt, t as mt } from "./Card-chFzX4gv.js";
import { a as ht, t as A } from "./Button-dzS4XgUY.js";
import { t as j } from "./cn-yMl495m5.js";
import { _ as gt, r as _t, t as vt, v as yt } from "./ZudokuContext-BxG8utmj.js";
import { t as bt } from "./useApiIdentitySelection-DTWtlhVB.js";
import { t as M } from "./Markdown-DNJarfnl.js";
import { a as xt, c as St, l as Ct, n as wt, o as Tt, r as Et, s as Dt, t as Ot } from "./Item-zp4umt1t.js";
import { i as kt, n as At, r as jt, t as Mt } from "./dist-CHL3WZKu.js";
import { n as N } from "./SyntaxHighlight-bEdAb5c0.js";
import { t as Nt } from "./useWarmupSchema-BZtZAwvd.js";
var Pt = Fe("arrow-left", [["path", {
	d: "m12 19-7-7 7-7",
	key: "1l729n"
}], ["path", {
	d: "M19 12H5",
	key: "x3x0zl"
}]]), Ft = Fe("arrow-right", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}], ["path", {
	d: "m12 5 7 7-7 7",
	key: "xquz4c"
}]]), It = Fe("shield-cog-corner", [
	["path", {
		d: "M11 22c-3.806-1.45-7-3.966-7-9V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v4",
		key: "hf1sz5"
	}],
	["path", {
		d: "M14.923 16.547 14 16.164",
		key: "41f878"
	}],
	["path", {
		d: "m14.923 18.843-.923.383",
		key: "82rvv5"
	}],
	["path", {
		d: "M16.547 14.923 16.164 14",
		key: "1r7ypn"
	}],
	["path", {
		d: "m16.547 20.467-.383.924",
		key: "au4kyj"
	}],
	["path", {
		d: "m18.843 14.923.383-.923",
		key: "1cbrwq"
	}],
	["path", {
		d: "m19.225 21.391-.382-.924",
		key: "1u2bh9"
	}],
	["path", {
		d: "m20.467 16.547.923-.383",
		key: "cprboc"
	}],
	["path", {
		d: "m20.467 18.843.923.383",
		key: "inm8l2"
	}],
	["circle", {
		cx: "17.695",
		cy: "17.695",
		r: "3",
		key: "1i1rmh"
	}]
]);
//#endregion
//#region src/lib/plugins/openapi/graphql/fragment-masking.ts
function Lt(e, t) {
	return t;
}
//#endregion
//#region src/lib/components/Pagination.tsx
var P = we(), Rt = ({ prev: e, next: t, className: n }) => {
	let r = "group min-w-0 transition-all p-5 space-x-1 rtl:space-x-reverse hover:text-foreground";
	return /* @__PURE__ */ (0, P.jsxs)("div", {
		className: j("flex flex-wrap gap-2 -mx-4 text-muted-foreground font-semibold", e ? "justify-between" : "justify-end", n),
		"data-pagefind-ignore": "all",
		children: [e && /* @__PURE__ */ (0, P.jsx)(A, {
			variant: "ghost",
			className: "min-w-0 max-w-full",
			asChild: !0,
			children: /* @__PURE__ */ (0, P.jsxs)(E, {
				to: e.to,
				relative: "path",
				className: r,
				children: [/* @__PURE__ */ (0, P.jsx)(Pt, {
					size: 14,
					strokeWidth: 2.5
				}), /* @__PURE__ */ (0, P.jsx)("span", {
					className: "text-lg truncate",
					children: e.label
				})]
			})
		}), t && /* @__PURE__ */ (0, P.jsx)(A, {
			variant: "ghost",
			className: "ms-auto min-w-0 max-w-full",
			asChild: !0,
			children: /* @__PURE__ */ (0, P.jsxs)(E, {
				to: t.to,
				relative: "path",
				className: r,
				children: [/* @__PURE__ */ (0, P.jsx)("span", {
					className: "text-lg truncate",
					children: t.label
				}), /* @__PURE__ */ (0, P.jsx)(Ft, {
					size: 14,
					strokeWidth: 2.5
				})]
			})
		})]
	});
}, F = /* @__PURE__ */ e(t(), 1), zt = ({ value: e, onChange: t, className: n, options: r, showChevrons: i = !0, "aria-label": a }) => /* @__PURE__ */ (0, P.jsxs)("div", {
	className: "grid",
	children: [/* @__PURE__ */ (0, P.jsx)("select", {
		className: j("w-full row-start-1 col-start-1 border border-input text-foreground px-2 py-1 pe-6", "rounded-md appearance-none bg-zinc-50 hover:bg-white dark:bg-zinc-800 hover:dark:bg-zinc-800/75", n),
		value: e,
		onChange: t,
		"aria-label": a,
		children: r.map((e) => /* @__PURE__ */ (0, P.jsx)("option", {
			value: e.value,
			children: e.label
		}, e.value))
	}), /* @__PURE__ */ (0, P.jsx)("div", {
		className: j(!i && "hidden", "row-start-1 col-start-1 self-center justify-self-end relative end-2 pointer-events-none"),
		children: /* @__PURE__ */ (0, P.jsx)(ce, {
			size: 14,
			"aria-hidden": "true"
		})
	})]
}), Bt = f("\n  query ServersQuery($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      url\n      servers {\n        url\n      }\n    }\n  }\n"), Vt = ({ url: e }) => {
	let [t, n] = (0, F.useState)(!1);
	return /* @__PURE__ */ (0, P.jsx)(A, {
		onClick: () => {
			navigator.clipboard.writeText(e).then(() => {
				n(!0), setTimeout(() => n(!1), 2e3);
			});
		},
		variant: "ghost",
		size: "icon-xs",
		"aria-label": "Copy server URL",
		children: t ? /* @__PURE__ */ (0, P.jsx)(Le, {
			className: "text-green-600",
			size: 14,
			"aria-hidden": "true"
		}) : /* @__PURE__ */ (0, P.jsx)(Ie, {
			size: 14,
			strokeWidth: 1.3,
			"aria-hidden": "true"
		})
	});
}, Ht = () => {
	let { input: e, type: t } = d(), n = ne(y(Bt, {
		input: e,
		type: t
	})), [, r] = (0, F.useTransition)(), { selectedServer: i, setSelectedServer: a } = ue(n.data.schema.servers), { servers: o } = n.data.schema;
	return o.length <= 1 ? null : /* @__PURE__ */ (0, P.jsxs)("div", {
		className: "flex items-center gap-1.5 flex-nowrap",
		children: [
			/* @__PURE__ */ (0, P.jsx)("span", {
				className: "font-medium text-sm",
				children: "Server"
			}),
			/* @__PURE__ */ (0, P.jsx)(zt, {
				className: "font-mono text-xs border-input bg-transparent dark:bg-input/30 dark:hover:bg-input/50 py-1.5 max-w-[450px] truncate",
				onChange: (e) => r(() => a(e.target.value)),
				value: i,
				showChevrons: !0,
				"aria-label": "Select server",
				options: o.map((e) => ({
					value: e.url,
					label: e.url
				}))
			}),
			/* @__PURE__ */ (0, P.jsx)(Vt, { url: i })
		]
	});
}, Ut = (e, t) => e ? t(e) : void 0;
//#endregion
//#region src/lib/ui/NativeSelect.tsx
function I({ className: e, ...t }) {
	return /* @__PURE__ */ (0, P.jsxs)("div", {
		className: "group/native-select relative w-fit has-[select:disabled]:opacity-50",
		"data-slot": "native-select-wrapper",
		children: [/* @__PURE__ */ (0, P.jsx)("select", {
			"data-slot": "native-select",
			className: j("border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 h-9 w-full min-w-0 appearance-none rounded-md border bg-transparent px-3 py-2 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", e),
			...t
		}), /* @__PURE__ */ (0, P.jsx)(ze, {
			className: "text-muted-foreground pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 opacity-50 select-none",
			"aria-hidden": "true",
			"data-slot": "native-select-icon"
		})]
	});
}
function L({ ...e }) {
	return /* @__PURE__ */ (0, P.jsx)("option", {
		"data-slot": "native-select-option",
		...e
	});
}
//#endregion
//#region src/lib/plugins/openapi/components/ResponseContent.tsx
var Wt = ({ responses: e, selectedResponse: t, onSelectResponse: n }) => {
	let [r, i] = (0, F.useState)(e[0]?.content?.[0]?.mediaType ?? ""), a = e.find((e) => e.statusCode === t) ?? e[0], s = e.length === 1 && e.at(0)?.statusCode === "200", c = /* @__PURE__ */ (0, P.jsxs)("div", {
		className: "flex flex-col text-muted-foreground",
		children: [/* @__PURE__ */ (0, P.jsxs)("div", {
			className: We("flex flex-row items-center gap-2 justify-between", !s && "px-4 py-1.5 border-b"),
			children: [!s && /* @__PURE__ */ (0, P.jsx)(At, {
				className: "flex flex-row font-medium text-sm gap-4",
				children: e.map((e) => /* @__PURE__ */ (0, P.jsx)(kt, {
					value: e.statusCode,
					className: We("py-0.5 h-fit -mx-2 px-2 rounded-md", "data-[state=active]:dark:ring-1 data-[state=active]:dark:ring-border data-[state=active]:bg-background data-[state=active]:drop-shadow", "data-[state=active]:font-semibold data-[state=active]:text-foreground"),
					children: e.statusCode
				}, e.statusCode))
			}), a?.content && a.content.length > 1 && /* @__PURE__ */ (0, P.jsx)(I, {
				value: r,
				onChange: (e) => i(e.target.value),
				className: "text-xs h-fit py-1 bg-background",
				children: a.content.map((e) => /* @__PURE__ */ (0, P.jsx)(L, {
					value: e.mediaType,
					children: e.mediaType
				}, e.mediaType))
			})]
		}), /* @__PURE__ */ (0, P.jsxs)("div", {
			className: "p-2 clear-both",
			children: [s && /* @__PURE__ */ (0, P.jsx)(o, {
				variant: "outline",
				className: "float-start me-2",
				children: a?.statusCode
			}), a?.description && /* @__PURE__ */ (0, P.jsx)(M, {
				className: "text-sm text-muted-foreground max-w-none",
				content: a.description
			})]
		})]
	});
	return /* @__PURE__ */ (0, P.jsx)("div", {
		className: "flex flex-col gap-2",
		children: /* @__PURE__ */ (0, P.jsx)(jt, {
			value: t,
			onValueChange: (t) => {
				n?.(t), i(e.find((e) => e.statusCode === t)?.content?.[0]?.mediaType ?? "");
			},
			children: e.map((e) => /* @__PURE__ */ (0, P.jsx)(Mt, {
				value: e.statusCode,
				children: /* @__PURE__ */ (0, P.jsx)(st, {
					schema: e.content?.find((e) => e.mediaType === r)?.schema,
					cardHeader: c
				})
			}, e.statusCode))
		})
	});
}, Gt = jt, Kt = F.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, P.jsx)(At, {
	ref: n,
	className: j("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", e),
	...t
}));
Kt.displayName = At.displayName;
var qt = F.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, P.jsx)(kt, {
	ref: n,
	className: j("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm", e),
	...t
}));
qt.displayName = kt.displayName;
var Jt = F.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ (0, P.jsx)(Mt, {
	ref: n,
	className: j("mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", e),
	...t
}));
Jt.displayName = Mt.displayName;
//#endregion
//#region src/lib/plugins/openapi/mcp-configs.ts
var Yt = (e) => {
	if (typeof e == "boolean" || !e?.security || !e?.securitySchemes) return "none";
	let t = e.securitySchemes, n = e.security[0];
	if (!n) return "none";
	let r = Object.keys(n)[0];
	if (!r) return "none";
	let i = t[r];
	return i ? i.type === "oauth2" || i.type === "openIdConnect" ? "oauth" : i.type === "http" || i.type === "apiKey" ? "apiKey" : "none" : "none";
}, Xt = (e) => {
	if (typeof e == "boolean" || !e?.security || !e?.securitySchemes) return;
	let t = e.securitySchemes, n = e.security[0];
	if (!n) return;
	let r = Object.keys(n)[0];
	if (!r) return;
	let i = t[r];
	if (i) {
		if (i.type === "http") {
			let e = i.scheme ?? "bearer";
			return {
				headerName: "Authorization",
				placeholder: `${e.charAt(0).toUpperCase() + e.slice(1)} YOUR_API_KEY`
			};
		}
		if (i.type === "apiKey" && i.in === "header" && i.name) return {
			headerName: i.name,
			placeholder: "YOUR_API_KEY"
		};
	}
}, Zt = [
	{
		id: "claude",
		label: "Claude",
		subApps: [{
			id: "claude-desktop",
			label: "Claude Desktop",
			supportedAuth: ["none", "oauth"]
		}, {
			id: "claude-code",
			label: "Claude Code CLI",
			supportedAuth: [
				"none",
				"apiKey",
				"oauth"
			]
		}]
	},
	{
		id: "chatgpt",
		label: "ChatGPT",
		subApps: [{
			id: "chatgpt-desktop",
			label: "ChatGPT",
			supportedAuth: ["none", "oauth"]
		}]
	},
	{
		id: "codex",
		label: "Codex",
		subApps: [{
			id: "codex-gui",
			label: "Codex",
			supportedAuth: [
				"none",
				"apiKey",
				"oauth"
			]
		}, {
			id: "codex-cli",
			label: "Codex CLI",
			supportedAuth: [
				"none",
				"apiKey",
				"oauth"
			]
		}]
	},
	{
		id: "cursor",
		label: "Cursor",
		subApps: [{
			id: "cursor",
			label: "Cursor",
			supportedAuth: [
				"none",
				"apiKey",
				"oauth"
			]
		}]
	},
	{
		id: "vscode",
		label: "VS Code",
		subApps: [{
			id: "vscode",
			label: "VS Code",
			supportedAuth: [
				"none",
				"apiKey",
				"oauth"
			]
		}]
	},
	{
		id: "generic",
		label: "Generic",
		subApps: [{
			id: "generic",
			label: "Generic",
			supportedAuth: [
				"none",
				"apiKey",
				"oauth"
			]
		}]
	}
], Qt = (e) => Zt.map((t) => ({
	...t,
	subApps: t.subApps.filter((t) => t.supportedAuth.includes(e))
})).filter((e) => e.subApps.length > 0), $t = (e, t) => typeof e == "boolean" ? t ?? "mcp-server" : e?.name ?? t ?? "mcp-server", en = (e, t) => `${(e ?? "").replace(/\/+$/, "")}${t ?? "/mcp"}`, tn = (e, t, n) => `claude mcp add --transport http${n ? ` --header '${n.headerName}: ${n.placeholder}'` : ""} '${e}' '${t}'`, nn = (e, t, n) => `codex mcp add --transport http${n ? ` --header '${n.headerName}: ${n.placeholder}'` : ""} '${e}' '${t}'`, R = (e) => `,\n      "headers": {\n        "${e.headerName}": "${e.placeholder}"\n      }`, rn = (e, t, n) => `{
  "mcpServers": {
    "${e}": {
      "url": "${t}"${n ? R(n) : ""}
    }
  }
}`, an = (e, t, n) => `{
  "servers": {
    "${e}": {
      "type": "http",
      "url": "${t}"${n ? R(n) : ""}
    }
  }
}`, on = (e, t, n) => `{
  "mcpServers": {
    "${e}": {
      "url": "${t}"${n ? R(n) : ""}
    }
  }
}`, sn = (e, t, n) => `{
  "mcpServers": {
    "${e}": {
      "url": "${t}"${n ? R(n) : ""}
    }
  }
}`, z = ({ label: e, showLabel: t, children: n }) => t ? /* @__PURE__ */ (0, P.jsxs)("div", {
	className: "space-y-3",
	children: [/* @__PURE__ */ (0, P.jsx)("h4", {
		className: "text-sm font-semibold",
		children: e
	}), n]
}) : /* @__PURE__ */ (0, P.jsx)("div", {
	className: "space-y-3",
	children: n
}), cn = ({ serverUrl: e, operationPath: t, summary: n, data: r }) => {
	let [i, a] = (0, F.useState)(!1), o = en(e, t), u = $t(r, n), d = Xt(r), f = Qt(Yt(r)), p = tn(u, o, d), m = nn(u, o, d), h = rn(u, o, d), g = on(u, o, d), _ = sn(u, o, d), y = an(u, o, d), [b, x] = (0, F.useState)(f[0]?.id ?? "generic"), S = () => {
		navigator.clipboard.writeText(o).then(() => {
			a(!0), setTimeout(() => a(!1), 2e3);
		});
	}, C = (e, t) => e.subApps.some((e) => e.id === t), w = (e) => {
		let t = e.subApps.length > 1;
		switch (e.id) {
			case "claude": return /* @__PURE__ */ (0, P.jsxs)("div", {
				className: "space-y-4",
				children: [C(e, "claude-desktop") && /* @__PURE__ */ (0, P.jsxs)(z, {
					label: "Claude Desktop",
					showLabel: t,
					children: [/* @__PURE__ */ (0, P.jsxs)("ol", { children: [
						/* @__PURE__ */ (0, P.jsxs)("li", { children: [
							"Open Claude Desktop and navigate to",
							" ",
							/* @__PURE__ */ (0, P.jsx)("strong", { children: "Settings" })
						] }),
						/* @__PURE__ */ (0, P.jsxs)("li", { children: [
							"Go to ",
							/* @__PURE__ */ (0, P.jsx)("strong", { children: "Connectors" }),
							" →",
							" ",
							/* @__PURE__ */ (0, P.jsx)("strong", { children: "Add custom connector" }),
							" and paste the MCP URL"
						] }),
						/* @__PURE__ */ (0, P.jsx)("li", { children: "Save and the server will appear in your conversations" })
					] }), /* @__PURE__ */ (0, P.jsxs)("a", {
						href: "https://modelcontextprotocol.io/quickstart/user",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-1 text-sm text-primary hover:underline",
						children: ["View official docs", /* @__PURE__ */ (0, P.jsx)(s, { className: "h-3 w-3" })]
					})]
				}), C(e, "claude-code") && /* @__PURE__ */ (0, P.jsxs)(z, {
					label: "Claude Code CLI",
					showLabel: t,
					children: [/* @__PURE__ */ (0, P.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Add it to Claude Code CLI by running:"
					}), /* @__PURE__ */ (0, P.jsx)(N, {
						showLanguageIndicator: !0,
						title: "Terminal",
						language: "bash",
						code: p,
						className: "mt-2"
					})]
				})]
			});
			case "chatgpt": return /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [
				/* @__PURE__ */ (0, P.jsx)(c, {
					type: "note",
					title: "Requirements",
					children: "ChatGPT Plus, Team, Enterprise, or Edu subscription."
				}),
				/* @__PURE__ */ (0, P.jsxs)("ol", { children: [
					/* @__PURE__ */ (0, P.jsxs)("li", { children: [
						"Go to ",
						/* @__PURE__ */ (0, P.jsx)("strong", { children: "Settings" }),
						" → ",
						/* @__PURE__ */ (0, P.jsx)("strong", { children: "Apps" }),
						" →",
						" ",
						/* @__PURE__ */ (0, P.jsx)("strong", { children: "Advanced Settings" })
					] }),
					/* @__PURE__ */ (0, P.jsxs)("li", { children: [
						"Click ",
						/* @__PURE__ */ (0, P.jsx)("strong", { children: "Create app" }),
						" and fill out the form"
					] }),
					/* @__PURE__ */ (0, P.jsxs)("li", { children: ["Enter the MCP server URL:", /* @__PURE__ */ (0, P.jsx)(v, {
						className: "ml-2",
						children: o
					})] }),
					/* @__PURE__ */ (0, P.jsx)("li", { children: "Save and the app will be available in your conversations" })
				] }),
				/* @__PURE__ */ (0, P.jsxs)("a", {
					href: "https://developers.openai.com/apps-sdk/deploy/connect-chatgpt#create-a-connector",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "inline-flex items-center gap-1 text-sm text-primary hover:underline",
					children: ["View official docs", /* @__PURE__ */ (0, P.jsx)(s, { className: "h-3 w-3" })]
				})
			] });
			case "codex": return /* @__PURE__ */ (0, P.jsxs)("div", {
				className: "space-y-4",
				children: [C(e, "codex-gui") && /* @__PURE__ */ (0, P.jsxs)(z, {
					label: "Codex",
					showLabel: t,
					children: [/* @__PURE__ */ (0, P.jsxs)("ol", { children: [
						/* @__PURE__ */ (0, P.jsxs)("li", { children: [
							"Open Codex and go to ",
							/* @__PURE__ */ (0, P.jsx)("strong", { children: "Settings" }),
							" →",
							" ",
							/* @__PURE__ */ (0, P.jsx)("strong", { children: "MCP Servers" })
						] }),
						/* @__PURE__ */ (0, P.jsx)("li", { children: "Add a new server and paste the MCP URL" }),
						/* @__PURE__ */ (0, P.jsx)("li", { children: "Save and the server will be available in your sessions" })
					] }), /* @__PURE__ */ (0, P.jsxs)("a", {
						href: "https://openai.com/index/introducing-codex/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-1 text-sm text-primary hover:underline",
						children: ["View official docs", /* @__PURE__ */ (0, P.jsx)(s, { className: "h-3 w-3" })]
					})]
				}), C(e, "codex-cli") && /* @__PURE__ */ (0, P.jsxs)(z, {
					label: "Codex CLI",
					showLabel: t,
					children: [
						/* @__PURE__ */ (0, P.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Add it to Codex CLI by running:"
						}),
						/* @__PURE__ */ (0, P.jsx)(N, {
							showLanguageIndicator: !0,
							title: "Terminal",
							language: "bash",
							code: m,
							className: "mt-2"
						}),
						/* @__PURE__ */ (0, P.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [
								"Or add to ",
								/* @__PURE__ */ (0, P.jsx)(v, { children: "~/.codex/config.json" }),
								":"
							]
						}),
						/* @__PURE__ */ (0, P.jsx)(N, {
							showLanguageIndicator: !0,
							title: "config.json",
							language: "json",
							code: g,
							className: "mt-2"
						})
					]
				})]
			});
			case "cursor": return /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [/* @__PURE__ */ (0, P.jsxs)("ol", { children: [/* @__PURE__ */ (0, P.jsxs)("li", { children: [
				/* @__PURE__ */ (0, P.jsxs)("span", { children: [
					"Go to ",
					/* @__PURE__ */ (0, P.jsx)("strong", { children: "Settings" }),
					" →",
					" ",
					/* @__PURE__ */ (0, P.jsx)("strong", { children: "Tools & MCPs" }),
					" →",
					" ",
					/* @__PURE__ */ (0, P.jsx)("strong", { children: "New MCP Server" }),
					", or edit:",
					" "
				] }),
				/* @__PURE__ */ (0, P.jsx)(v, { children: "~/.cursor/mcp.json" }),
				/* @__PURE__ */ (0, P.jsx)("span", { children: " (global) or " }),
				/* @__PURE__ */ (0, P.jsx)(v, { children: ".cursor/mcp.json" }),
				/* @__PURE__ */ (0, P.jsx)("span", { children: " (project)" }),
				/* @__PURE__ */ (0, P.jsx)(N, {
					showLanguageIndicator: !0,
					title: "mcp.json",
					language: "json",
					code: h,
					className: "mt-2"
				})
			] }), /* @__PURE__ */ (0, P.jsx)("li", { children: "Restart Cursor to apply the configuration" })] }), /* @__PURE__ */ (0, P.jsxs)("a", {
				href: "https://cursor.com/docs/context/mcp",
				target: "_blank",
				rel: "noopener noreferrer",
				className: "inline-flex items-center gap-1 text-sm text-primary hover:underline",
				children: ["View official docs", /* @__PURE__ */ (0, P.jsx)(s, { className: "h-3 w-3" })]
			})] });
			case "vscode": return /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [
				/* @__PURE__ */ (0, P.jsx)(c, {
					type: "note",
					title: "Requirements",
					children: "VS Code with GitHub Copilot extension"
				}),
				/* @__PURE__ */ (0, P.jsxs)("ol", { children: [
					/* @__PURE__ */ (0, P.jsxs)("li", { children: [
						/* @__PURE__ */ (0, P.jsx)("span", { children: "Create " }),
						/* @__PURE__ */ (0, P.jsx)(v, { children: ".vscode/mcp.json" }),
						/* @__PURE__ */ (0, P.jsx)("span", { children: " in your workspace (or user-level mcp.json):" }),
						/* @__PURE__ */ (0, P.jsx)(N, {
							showLanguageIndicator: !0,
							title: "mcp.json",
							language: "json",
							code: y,
							className: "mt-2"
						})
					] }),
					/* @__PURE__ */ (0, P.jsx)("li", { children: "Restart VS Code to apply the configuration" }),
					/* @__PURE__ */ (0, P.jsx)("li", { children: "Use MCP tools in GitHub Copilot Chat by selecting Agent mode" })
				] }),
				/* @__PURE__ */ (0, P.jsxs)("a", {
					href: "https://code.visualstudio.com/docs/copilot/chat/mcp-servers",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "inline-flex items-center gap-1 text-sm text-primary hover:underline",
					children: ["View official docs", /* @__PURE__ */ (0, P.jsx)(s, { className: "h-3 w-3" })]
				})
			] });
			case "generic": return /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [
				/* @__PURE__ */ (0, P.jsxs)("p", { children: [
					"Generic ",
					/* @__PURE__ */ (0, P.jsx)(v, { children: ".mcp.json" }),
					" configuration format that works with most MCP-compatible apps."
				] }),
				/* @__PURE__ */ (0, P.jsx)(N, {
					showLanguageIndicator: !0,
					title: ".mcp.json",
					language: "json",
					code: _,
					className: "mt-2"
				}),
				/* @__PURE__ */ (0, P.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Place this file in your project root or the appropriate configuration directory for your app. The exact location depends on your specific tool."
				}),
				/* @__PURE__ */ (0, P.jsxs)("a", {
					href: "https://modelcontextprotocol.io/",
					target: "_blank",
					rel: "noopener noreferrer",
					className: "inline-flex items-center gap-1 text-sm text-primary hover:underline",
					children: ["Learn more about MCP", /* @__PURE__ */ (0, P.jsx)(s, { className: "h-3 w-3" })]
				})
			] });
			default: return null;
		}
	};
	return /* @__PURE__ */ (0, P.jsx)(mt, {
		className: "p-6 mb-6 max-w-screen-md",
		children: /* @__PURE__ */ (0, P.jsx)("div", {
			className: "space-y-4",
			children: /* @__PURE__ */ (0, P.jsxs)("div", { children: [
				/* @__PURE__ */ (0, P.jsxs)("div", {
					className: "flex items-center justify-between mb-2",
					children: [/* @__PURE__ */ (0, P.jsx)("h3", {
						className: "text-lg font-semibold",
						children: "App Configuration"
					}), /* @__PURE__ */ (0, P.jsxs)(A, {
						onClick: S,
						variant: "outline",
						size: "sm",
						className: "gap-1.5",
						children: [i ? /* @__PURE__ */ (0, P.jsx)(Le, { className: "h-3.5 w-3.5 text-green-600" }) : /* @__PURE__ */ (0, P.jsx)(Ie, { className: "h-3.5 w-3.5" }), i ? "Copied!" : "Copy URL"]
					})]
				}),
				/* @__PURE__ */ (0, P.jsx)("p", {
					className: "text-sm text-muted-foreground mb-3",
					children: "Choose your app and copy the configuration to get started."
				}),
				/* @__PURE__ */ (0, P.jsx)("hr", { className: "my-4" }),
				/* @__PURE__ */ (0, P.jsxs)(Gt, {
					value: b,
					onValueChange: x,
					className: "w-full",
					children: [
						/* @__PURE__ */ (0, P.jsxs)(Ze, {
							value: b,
							onValueChange: x,
							children: [/* @__PURE__ */ (0, P.jsx)(Je, {
								className: "w-full sm:hidden",
								children: /* @__PURE__ */ (0, P.jsx)(qe, {})
							}), /* @__PURE__ */ (0, P.jsx)(Ye, { children: f.map((e) => /* @__PURE__ */ (0, P.jsx)(Xe, {
								value: e.id,
								children: e.label
							}, e.id)) })]
						}),
						/* @__PURE__ */ (0, P.jsx)(Kt, {
							className: "hidden sm:grid w-full",
							style: { gridTemplateColumns: `repeat(${f.length}, minmax(0, 1fr))` },
							children: f.map((e) => /* @__PURE__ */ (0, P.jsx)(qt, {
								value: e.id,
								children: e.label
							}, e.id))
						}),
						/* @__PURE__ */ (0, P.jsx)(l, {
							className: "text-sm max-w-full",
							children: f.map((e) => /* @__PURE__ */ (0, P.jsx)(Jt, {
								value: e.id,
								className: "space-y-3",
								children: w(e)
							}, e.id))
						})
					]
				})
			] })
		})
	});
}, ln = (e) => e.schema != null && typeof e.schema == "object" ? e.schema : { type: "string" }, un = ({ parameter: e, group: t, id: n }) => {
	let r = ln(e), [i, a] = (0, F.useState)(!1), o = r.type === "object" || tt(r) && "items" in r && r.items?.type === "object", s = !!(e.description || r.description || r.type === "array" && r.items?.enum || r.enum || r.example !== void 0 || r.default !== void 0);
	return /* @__PURE__ */ (0, P.jsxs)(Ot, { children: [
		/* @__PURE__ */ (0, P.jsxs)(Et, {
			className: "gap-y-2",
			children: [/* @__PURE__ */ (0, P.jsxs)("div", { children: [
				/* @__PURE__ */ (0, P.jsx)(Dt, {
					className: "inline me-2",
					children: o ? /* @__PURE__ */ (0, P.jsx)("button", {
						onClick: () => a(!i),
						type: "button",
						className: "hover:underline",
						children: /* @__PURE__ */ (0, P.jsx)("code", { children: t === "path" ? /* @__PURE__ */ (0, P.jsx)(xe, {
							name: e.name,
							backgroundOpacity: "15%",
							className: "px-2",
							slug: `${n}-${e.name}`
						}) : e.name })
					}) : /* @__PURE__ */ (0, P.jsx)("code", { children: t === "path" ? /* @__PURE__ */ (0, P.jsx)(xe, {
						name: e.name,
						backgroundOpacity: "15%",
						className: "px-2",
						slug: `${n}-${e.name}`
					}) : e.name })
				}),
				"​",
				/* @__PURE__ */ (0, P.jsx)(at, {
					className: "inline",
					schema: r,
					extraItems: [
						e.required && /* @__PURE__ */ (0, P.jsx)("span", {
							className: "text-primary",
							children: "required"
						}),
						e.style && `style: ${e.style}`,
						e.explode && `explode: ${e.explode}`
					]
				})
			] }), s && /* @__PURE__ */ (0, P.jsxs)("div", {
				className: "flex flex-col gap-1.5",
				children: [
					e.description && /* @__PURE__ */ (0, P.jsx)(M, {
						content: e.description,
						className: "prose-sm"
					}),
					r.description && /* @__PURE__ */ (0, P.jsx)(M, {
						content: r.description,
						className: "prose-sm"
					}),
					r.type === "array" && r.items?.enum ? /* @__PURE__ */ (0, P.jsx)(it, { values: r.items.enum }) : r.enum && /* @__PURE__ */ (0, P.jsx)(it, { values: r.enum }),
					/* @__PURE__ */ (0, P.jsx)(rt, { schema: r })
				]
			})]
		}),
		o && /* @__PURE__ */ (0, P.jsx)(wt, {
			className: "self-start",
			children: /* @__PURE__ */ (0, P.jsx)(A, {
				variant: "ghost",
				size: "icon",
				className: "rounded-full",
				onClick: () => a(!i),
				"aria-label": "Toggle parameter",
				children: i ? /* @__PURE__ */ (0, P.jsx)(et, { size: 16 }) : /* @__PURE__ */ (0, P.jsx)(ct, { size: 16 })
			})
		}),
		o && /* @__PURE__ */ (0, P.jsx)(Me, {
			defaultOpen: !1,
			open: i,
			onOpenChange: a,
			className: j("w-full", !i && "contents"),
			children: /* @__PURE__ */ (0, P.jsx)(ke, {
				asChild: !0,
				children: /* @__PURE__ */ (0, P.jsx)(Et, { children: /* @__PURE__ */ (0, P.jsx)(st, { schema: "items" in r ? r.items : r }) })
			})
		})
	] });
}, dn = ({ summary: e, group: t, parameters: n, id: r }) => {
	let a = n.sort((e, t) => e.required === t.required ? 0 : e.required ? -1 : 1);
	return /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [/* @__PURE__ */ (0, P.jsxs)(i, {
		level: 3,
		id: `${r}/${t}-parameters`,
		className: "capitalize",
		children: [e && /* @__PURE__ */ (0, P.jsxs)(O, { children: [e, " › "] }), t === "header" ? "Headers" : `${t} Parameters`]
	}), /* @__PURE__ */ (0, P.jsx)($e, { children: /* @__PURE__ */ (0, P.jsx)(nt, {
		className: "p-0!",
		children: /* @__PURE__ */ (0, P.jsx)(xt, {
			className: "overflow-clip",
			children: a.map((e, n) => /* @__PURE__ */ (0, P.jsxs)(F.Fragment, { children: [n > 0 && /* @__PURE__ */ (0, P.jsx)(Tt, {}), /* @__PURE__ */ (0, P.jsx)(un, {
				parameter: e,
				id: r,
				group: t
			})] }, `${e.name}-${e.in}`))
		})
	}) })] });
}, fn, B = "HoverCard", [pn, mn] = S(B, [Ve]), V = Ve(), [hn, gn] = pn(B), _n = (e) => {
	let { __scopeHoverCard: t, children: n, open: r, defaultOpen: i, onOpenChange: a, openDelay: o = 700, closeDelay: s = 300 } = e, c = V(t), l = F.useRef(0), u = F.useRef(0), d = F.useRef(!1), f = F.useRef(!1), [p, m] = C({
		prop: r,
		defaultProp: i ?? !1,
		onChange: a,
		caller: B
	}), h = F.useCallback(() => {
		clearTimeout(u.current), l.current = window.setTimeout(() => m(!0), o);
	}, [o, m]), g = F.useCallback(() => {
		clearTimeout(l.current), !d.current && !f.current && (u.current = window.setTimeout(() => m(!1), s));
	}, [s, m]), _ = F.useCallback(() => m(!1), [m]);
	return F.useEffect(() => () => {
		clearTimeout(l.current), clearTimeout(u.current);
	}, []), /* @__PURE__ */ (0, P.jsx)(hn, {
		scope: t,
		open: p,
		onOpenChange: m,
		onOpen: h,
		onClose: g,
		onDismiss: _,
		hasSelectionRef: d,
		isPointerDownOnContentRef: f,
		children: /* @__PURE__ */ (0, P.jsx)(Ge, {
			...c,
			children: n
		})
	});
};
_n.displayName = B;
var vn = "HoverCardTrigger", yn = F.forwardRef((e, t) => {
	let { __scopeHoverCard: n, ...r } = e, i = gn(vn, n), a = V(n);
	return /* @__PURE__ */ (0, P.jsx)(Ke, {
		asChild: !0,
		...a,
		children: /* @__PURE__ */ (0, P.jsx)(x.a, {
			"data-state": i.open ? "open" : "closed",
			...r,
			ref: t,
			onPointerEnter: b(e.onPointerEnter, kn(i.onOpen)),
			onPointerLeave: b(e.onPointerLeave, kn(i.onClose)),
			onFocus: b(e.onFocus, i.onOpen),
			onBlur: b(e.onBlur, i.onClose),
			onTouchStart: b(e.onTouchStart, (e) => e.preventDefault())
		})
	});
});
yn.displayName = vn;
var bn = "HoverCardPortal", [xn, Sn] = pn(bn, { forceMount: void 0 }), Cn = (e) => {
	let { __scopeHoverCard: t, forceMount: n, children: r, container: i } = e, a = gn(bn, t);
	return /* @__PURE__ */ (0, P.jsx)(xn, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ (0, P.jsx)(w, {
			present: n || a.open,
			children: /* @__PURE__ */ (0, P.jsx)(He, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
Cn.displayName = bn;
var wn = "HoverCardContent", Tn = F.forwardRef((e, t) => {
	let n = Sn(wn, e.__scopeHoverCard), { forceMount: r = n.forceMount, ...i } = e, a = gn(wn, e.__scopeHoverCard);
	return /* @__PURE__ */ (0, P.jsx)(w, {
		present: r || a.open,
		children: /* @__PURE__ */ (0, P.jsx)(En, {
			"data-state": a.open ? "open" : "closed",
			...i,
			onPointerEnter: b(e.onPointerEnter, kn(a.onOpen)),
			onPointerLeave: b(e.onPointerLeave, kn(a.onClose)),
			ref: t
		})
	});
});
Tn.displayName = wn;
var En = F.forwardRef((e, t) => {
	let { __scopeHoverCard: n, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: a, onInteractOutside: o, ...s } = e, c = gn(wn, n), l = V(n), u = F.useRef(null), d = ht(t, u), [f, p] = F.useState(!1);
	return F.useEffect(() => {
		if (f) {
			let e = document.body;
			return fn = e.style.userSelect || e.style.webkitUserSelect, e.style.userSelect = "none", e.style.webkitUserSelect = "none", () => {
				e.style.userSelect = fn, e.style.webkitUserSelect = fn;
			};
		}
	}, [f]), F.useEffect(() => {
		if (u.current) {
			let e = () => {
				p(!1), c.isPointerDownOnContentRef.current = !1, setTimeout(() => {
					document.getSelection()?.toString() !== "" && (c.hasSelectionRef.current = !0);
				});
			};
			return document.addEventListener("pointerup", e), () => {
				document.removeEventListener("pointerup", e), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !1;
			};
		}
	}, [c.isPointerDownOnContentRef, c.hasSelectionRef]), F.useEffect(() => {
		u.current && An(u.current).forEach((e) => e.setAttribute("tabindex", "-1"));
	}), /* @__PURE__ */ (0, P.jsx)(Ue, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onInteractOutside: o,
		onEscapeKeyDown: r,
		onPointerDownOutside: i,
		onFocusOutside: b(a, (e) => {
			e.preventDefault();
		}),
		onDismiss: c.onDismiss,
		children: /* @__PURE__ */ (0, P.jsx)(Re, {
			...l,
			...s,
			onPointerDown: b(s.onPointerDown, (e) => {
				e.currentTarget.contains(e.target) && p(!0), c.hasSelectionRef.current = !1, c.isPointerDownOnContentRef.current = !0;
			}),
			ref: d,
			style: {
				...s.style,
				userSelect: f ? "text" : void 0,
				WebkitUserSelect: f ? "text" : void 0,
				"--radix-hover-card-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-hover-card-content-available-width": "var(--radix-popper-available-width)",
				"--radix-hover-card-content-available-height": "var(--radix-popper-available-height)",
				"--radix-hover-card-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-hover-card-trigger-height": "var(--radix-popper-anchor-height)"
			}
		})
	});
}), Dn = "HoverCardArrow", On = F.forwardRef((e, t) => {
	let { __scopeHoverCard: n, ...r } = e, i = V(n);
	return /* @__PURE__ */ (0, P.jsx)(Be, {
		...i,
		...r,
		ref: t
	});
});
On.displayName = Dn;
function kn(e) {
	return (t) => t.pointerType === "touch" ? void 0 : e();
}
function An(e) {
	let t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (e) => e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP });
	for (; n.nextNode();) t.push(n.currentNode);
	return t;
}
var jn = _n, Mn = yn, Nn = Cn, Pn = Tn;
//#endregion
//#region src/lib/ui/HoverCard.tsx
function Fn({ ...e }) {
	return /* @__PURE__ */ (0, P.jsx)(jn, {
		"data-slot": "hover-card",
		...e
	});
}
function In({ ...e }) {
	return /* @__PURE__ */ (0, P.jsx)(Mn, {
		"data-slot": "hover-card-trigger",
		...e
	});
}
function Ln({ className: e, align: t = "center", sideOffset: n = 4, ...r }) {
	return /* @__PURE__ */ (0, P.jsx)(Nn, {
		"data-slot": "hover-card-portal",
		children: /* @__PURE__ */ (0, P.jsx)(Pn, {
			"data-slot": "hover-card-content",
			align: t,
			sideOffset: n,
			className: j("z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", e),
			...r
		})
	});
}
//#endregion
//#region src/lib/plugins/openapi/SecurityRequirements.tsx
var Rn = (0, F.lazy)(() => import("./Markdown-DNJarfnl.js").then((e) => e.n).then((e) => ({ default: e.Markdown }))), zn = {
	apiKey: /* @__PURE__ */ (0, P.jsx)(ut, { size: 12 }),
	http: /* @__PURE__ */ (0, P.jsx)(u, { size: 12 }),
	oauth2: /* @__PURE__ */ (0, P.jsx)(pt, { size: 12 }),
	openIdConnect: /* @__PURE__ */ (0, P.jsx)(pt, { size: 12 }),
	mutualTLS: /* @__PURE__ */ (0, P.jsx)(u, { size: 12 })
}, Bn = (e) => {
	switch (e.type) {
		case "apiKey": return `${e.paramName ?? "API Key"} (${e.in ?? "header"})`;
		case "http": return e.scheme === "bearer" ? `Bearer${e.bearerFormat ? ` (${e.bearerFormat})` : ""}` : e.scheme ?? "HTTP";
		case "oauth2": return "OAuth 2.0";
		case "openIdConnect": return "OpenID Connect";
		case "mutualTLS": return "Mutual TLS";
		default: return e.name;
	}
}, Vn = ({ scheme: e, scopes: t }) => !e.description && t.length === 0 ? null : /* @__PURE__ */ (0, P.jsxs)("div", {
	className: "flex flex-col gap-2",
	children: [e.description && /* @__PURE__ */ (0, P.jsx)(F.Suspense, {
		fallback: /* @__PURE__ */ (0, P.jsx)("div", {
			className: "text-xs",
			children: e.description
		}),
		children: /* @__PURE__ */ (0, P.jsx)(Rn, {
			content: e.description,
			className: "prose-xs text-xs max-w-full"
		})
	}), t.length > 0 && /* @__PURE__ */ (0, P.jsxs)("div", {
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ (0, P.jsx)("span", {
			className: "text-xs text-muted-foreground",
			children: "Required scopes:"
		}), /* @__PURE__ */ (0, P.jsx)("div", {
			className: "flex flex-wrap gap-1",
			children: t.map((e) => /* @__PURE__ */ (0, P.jsx)(o, {
				variant: "muted",
				className: "text-[10px] px-1 py-0 h-auto font-mono",
				children: e
			}, e))
		})]
	})]
}), Hn = ({ security: e }) => {
	if (!e || e.length === 0) return null;
	let t = e.filter((e) => e.schemes.length > 0);
	return t.length === 0 ? null : /* @__PURE__ */ (0, P.jsx)("div", {
		className: "flex items-center gap-1.5 flex-wrap",
		children: t.map((e, t) => {
			let n = `${t}-${e.schemes.map((e) => e.scheme.name).join("+")}`;
			return /* @__PURE__ */ (0, P.jsxs)("div", {
				className: "contents",
				children: [t > 0 && /* @__PURE__ */ (0, P.jsx)("span", {
					className: "text-[10px] text-muted-foreground font-medium uppercase",
					children: "or"
				}), e.schemes.map((e, t) => {
					let n = !!e.scheme.description || e.scopes.length > 0, r = /* @__PURE__ */ (0, P.jsxs)(o, {
						variant: "outline",
						className: "text-[10px] gap-1 py-0 h-5 font-normal cursor-default",
						children: [zn[e.scheme.type], Bn(e.scheme)]
					});
					return /* @__PURE__ */ (0, P.jsxs)("div", {
						className: "contents",
						children: [t > 0 && /* @__PURE__ */ (0, P.jsx)("span", {
							className: "text-[10px] text-muted-foreground",
							children: "+"
						}), n ? /* @__PURE__ */ (0, P.jsxs)(Fn, {
							openDelay: 150,
							closeDelay: 100,
							children: [/* @__PURE__ */ (0, P.jsx)(In, {
								asChild: !0,
								children: r
							}), /* @__PURE__ */ (0, P.jsx)(Ln, {
								side: "bottom",
								align: "start",
								className: "w-auto max-w-xs p-3",
								children: /* @__PURE__ */ (0, P.jsx)(Vn, {
									scheme: e.scheme,
									scopes: e.scopes
								})
							})]
						}) : r]
					}, e.scheme.name);
				})]
			}, n);
		})
	});
}, Un = ({ children: e, className: t }) => /* @__PURE__ */ (0, P.jsx)("div", {
	"data-slot": "sidecar-box-root",
	className: j("relative text-xs flex min-w-0 flex-col rounded-xl border bg-muted/50 bg-clip-padding", "before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] before:shadow-[0_1px_2px_1px_--theme(--color-black/4%)] after:pointer-events-none after:absolute after:-inset-[5px] after:-z-1 after:rounded-[calc(var(--radius-xl)+4px)] after:border after:border-border/50 after:bg-clip-padding **:data-[slot=particle-wrapper]:w-full **:data-[slot=particle-wrapper]:max-w-64 lg:col-span-1 dark:after:bg-background/72", t),
	children: e
}), Wn = ({ children: e, className: t }) => /* @__PURE__ */ (0, P.jsx)("div", {
	"data-slot": "sidecar-box-head",
	className: j("flex items-center gap-3 rounded-b-xl p-2.5 data-[slot=head]:rounded-b-none", t),
	children: e
}), Gn = ({ children: e, className: t }) => /* @__PURE__ */ (0, P.jsx)("div", {
	"data-slot": "sidecar-box-body",
	className: j("overflow-auto -m-px flex min-w-0 flex-1 flex-col overflow-x-auto rounded-t-xl border bg-background", "rounded-b last:rounded-b-xl", "before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)] dark:before:shadow-[0_-1px_--theme(--color-white/8%)]", t),
	children: e
}), Kn = ({ children: e, className: t }) => /* @__PURE__ */ (0, P.jsx)("div", {
	"data-slot": "sidecar-box-footer",
	className: j("p-2 rounded-b-xl data-[slot=sidecar-box-footer]:rounded-b-none", t),
	children: e
}), qn = ({ rootMargin: e = "0px", threshold: t, root: n } = {}) => {
	let [r, i] = (0, F.useState)(!1), a = (0, F.useRef)(null);
	return (0, F.useEffect)(() => {
		let r = new IntersectionObserver(([e]) => {
			e && i(e.isIntersecting);
		}, {
			rootMargin: e,
			threshold: t,
			root: n
		}), o = a.current;
		if (o) return r.observe(o), () => r.unobserve(o);
	}, [
		n,
		e,
		t
	]), [a, r];
}, Jn = () => /* @__PURE__ */ (0, P.jsx)("div", { className: "absolute inset-0 bg-linear-to-b from-transparent to-zinc-50/60 dark:to-zinc-950/90 z-10 transition-all group-hover:to-transparent" }), Yn = ({ code: e, className: t }) => /* @__PURE__ */ (0, P.jsx)("pre", {
	className: j("relative text-(--shiki-light) dark:text-(--shiki-dark) p-2 text-xs font-mono max-h-[250px] leading-4.5 bg-(--shiki-light-bg) dark:bg-(--shiki-dark-bg) overflow-hidden", t),
	children: /* @__PURE__ */ (0, P.jsxs)("code", { children: [e.split("\n").length > 13 && /* @__PURE__ */ (0, P.jsx)(Jn, {}), e] })
}), Xn = ({ code: e, language: t = "json", isOnScreen: r, shouldLazyHighlight: i }) => /* @__PURE__ */ (0, P.jsxs)(Un, { children: [/* @__PURE__ */ (0, P.jsx)(Wn, {
	className: "text-xs flex justify-between items-center",
	children: /* @__PURE__ */ (0, P.jsxs)("div", {
		className: "flex items-center gap-1.5",
		children: [/* @__PURE__ */ (0, P.jsx)("span", {
			className: "font-medium",
			children: "Example Request Body"
		}), /* @__PURE__ */ (0, P.jsx)(De, { children: /* @__PURE__ */ (0, P.jsxs)(Pe, { children: [/* @__PURE__ */ (0, P.jsx)(Ae, {
			asChild: !0,
			children: /* @__PURE__ */ (0, P.jsx)(n, { size: 13 })
		}), /* @__PURE__ */ (0, P.jsx)(Ee, { children: "This example is auto-generated from the schema." })] }) })]
	})
}), /* @__PURE__ */ (0, P.jsx)(Gn, {
	className: "p-0",
	children: i && !r ? /* @__PURE__ */ (0, P.jsx)(Yn, { code: e }) : /* @__PURE__ */ (0, P.jsx)(N, {
		embedded: !0,
		language: t,
		code: e,
		className: "[--scrollbar-color:gray] rounded-none text-xs max-h-[200px]"
	})
})] }), Zn = typeof Buffer == "function";
typeof TextDecoder == "function" && new TextDecoder();
var Qn = typeof TextEncoder == "function" ? new TextEncoder() : void 0, H = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
((e) => {
	let t = {};
	return e.forEach((e, n) => t[e] = n), t;
})(H);
var U = String.fromCharCode.bind(String);
typeof Uint8Array.from == "function" && Uint8Array.from.bind(Uint8Array);
var $n = (e) => e.replace(/=/g, "").replace(/[+\/]/g, (e) => e == "+" ? "-" : "_"), er = typeof btoa == "function" ? (e) => btoa(e) : Zn ? (e) => Buffer.from(e, "binary").toString("base64") : (e) => {
	let t, n, r, i, a = "", o = e.length % 3;
	for (let o = 0; o < e.length;) {
		if ((n = e.charCodeAt(o++)) > 255 || (r = e.charCodeAt(o++)) > 255 || (i = e.charCodeAt(o++)) > 255) throw TypeError("invalid character found");
		t = n << 16 | r << 8 | i, a += H[t >> 18 & 63] + H[t >> 12 & 63] + H[t >> 6 & 63] + H[t & 63];
	}
	return o ? a.slice(0, o - 3) + "===".substring(o) : a;
}, tr = Zn ? (e) => Buffer.from(e).toString("base64") : (e) => {
	let t = 4096, n = [];
	for (let r = 0, i = e.length; r < i; r += t) n.push(U.apply(null, e.subarray(r, r + t)));
	return er(n.join(""));
}, nr = (e) => {
	if (e.length < 2) {
		var t = e.charCodeAt(0);
		return t < 128 ? e : t < 2048 ? U(192 | t >>> 6) + U(128 | t & 63) : U(224 | t >>> 12 & 15) + U(128 | t >>> 6 & 63) + U(128 | t & 63);
	} else {
		var t = 65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320);
		return U(240 | t >>> 18 & 7) + U(128 | t >>> 12 & 63) + U(128 | t >>> 6 & 63) + U(128 | t & 63);
	}
}, rr = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, ir = (e) => e.replace(rr, nr), ar = Zn ? (e) => Buffer.from(e, "utf8").toString("base64") : Qn ? (e) => tr(Qn.encode(e)) : (e) => er(ir(e)), or = (e, t = !1) => t ? $n(ar(e)) : ar(e);
//#endregion
//#region ../../node_modules/.pnpm/@scalar+snippetz@0.9.11/node_modules/@scalar/snippetz/dist/libs/http.js
function sr(e) {
	return e?.length ? `?${e.map((e) => `${e.name}=${e.value}`).join("&")}` : "";
}
var cr = (e) => (e || "GET").toUpperCase(), lr = (e) => {
	if (!e) return "";
	try {
		let t = new URL(e);
		return t.pathname === "/" ? `${t.origin}${t.search}${t.hash}` : t.toString();
	} catch {
		return e;
	}
}, ur = (e, t) => {
	let n = sr(t);
	return n ? e ? `${e}${e.includes("?") ? "&" : "?"}${n.slice(1)}` : n : e;
}, dr = (e, t) => {
	let n = /* @__PURE__ */ new Map();
	if (e?.forEach((e) => {
		e.name && n.set(e.name, e.value ?? "");
	}), t?.length) {
		let e = t.map((e) => `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`).join("; ");
		n.set("Cookie", e);
	}
	return Array.from(n.entries()).map(([e, t]) => ({
		name: e,
		value: t
	}));
}, fr = (e, t, n) => {
	let r = e[t];
	r === void 0 ? e[t] = n : Array.isArray(r) ? r.push(n) : e[t] = [r, n];
};
function pr(e = []) {
	return e.reduce((e, { name: t, value: n }) => (fr(e, t, n), e), {});
}
//#endregion
//#region ../../node_modules/.pnpm/@scalar+snippetz@0.9.11/node_modules/@scalar/snippetz/dist/plugins/csharp/httpclient/httpclient.js
var mr = {
	target: "csharp",
	client: "httpclient",
	title: "HttpClient",
	generate(e, t) {
		let n = {
			method: "GET",
			url: "",
			...e
		};
		n.method = n.method.toUpperCase();
		let r = sr(n.queryString), i = `${n.url}${r}`, a = [];
		a.push("using var client = new HttpClient();"), a.push("");
		let o = hr(n.method);
		return a.push(`var request = new HttpRequestMessage(${o}, "${i}");`), gr(a, n, t), _r(a, n), a.push(""), a.push("using var response = await client.SendAsync(request);"), a.join("\n");
	}
};
function hr(e) {
	switch (e) {
		case "GET": return "HttpMethod.Get";
		case "POST": return "HttpMethod.Post";
		case "PUT": return "HttpMethod.Put";
		case "DELETE": return "HttpMethod.Delete";
		case "PATCH": return "HttpMethod.Patch";
		case "HEAD": return "HttpMethod.Head";
		case "OPTIONS": return "HttpMethod.Options";
		default: return `new HttpMethod("${e}")`;
	}
}
function gr(e, t, n) {
	let r = t.headers || [], i = t.cookies || [], a = r.find((e) => e.name.toLowerCase() === "authorization");
	if (a) {
		let [t, n] = a.value.split(" ", 2);
		t && n && e.push(`request.Headers.Authorization = new AuthenticationHeaderValue("${t}", "${n}");`);
	} else if (n?.auth?.username && n?.auth?.password) {
		let t = or(`${n.auth.username}:${n.auth.password}`);
		e.push(`request.Headers.Authorization = new AuthenticationHeaderValue("Basic", "${t}");`);
	}
	let o = /* @__PURE__ */ new Map();
	for (let e of r) {
		let t = e.name, n = e.value;
		t.toLowerCase() !== "authorization" && o.set(t, n);
	}
	for (let [n, r] of o) if (n.toLowerCase() === "accept" && yr(r)) e.push(`request.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("${r}"));`);
	else if (n.toLowerCase() === "content-type" && t.postData) continue;
	else e.push(`request.Headers.TryAddWithoutValidation("${n}", "${r}");`);
	if (i.length > 0) {
		let t = i.map((e) => `${e.name}=${e.value}`).join("; ");
		e.push(`request.Headers.TryAddWithoutValidation("Cookie", "${t}");`);
	}
}
function _r(e, t) {
	if (!t.postData) return;
	let { mimeType: n, text: r, params: i } = t.postData;
	if (n === "application/json" && r) try {
		let t = JSON.parse(r), n = vr(JSON.stringify(t, null, 2));
		e.push("request.Content = new StringContent("), e.push(`${n},`), e.push("System.Text.Encoding.UTF8, \"application/json\");");
	} catch {
		let t = vr(r);
		e.push("request.Content = new StringContent("), e.push(`${t},`), e.push("System.Text.Encoding.UTF8, \"application/json\");");
	}
	else if (n === "application/x-www-form-urlencoded" && i) {
		let t = i.map((e) => e.name);
		if (t.length !== new Set(t).size) {
			e.push("var formParams = new List<KeyValuePair<string, string>>"), e.push("{");
			for (let t of i) e.push(`  new("${t.name}", "${t.value}"),`);
			e.push("};"), e.push("request.Content = new FormUrlEncodedContent(formParams);");
		} else {
			e.push("var formParams = new Dictionary<string, string>"), e.push("{");
			for (let t of i) e.push(`  ["${t.name}"] = "${t.value}",`);
			e.push("};"), e.push("request.Content = new FormUrlEncodedContent(formParams);");
		}
	} else if (n === "multipart/form-data" && i) {
		e.push("var content = new MultipartFormDataContent();");
		let t = 0;
		for (let n of i) if (n.fileName !== void 0) if (n.contentType) {
			let r = `fileContent${t++}`;
			e.push(`var ${r} = new StreamContent(File.OpenRead("${W(n.fileName)}"));`), e.push(`${r}.Headers.ContentType = new MediaTypeHeaderValue("${n.contentType}");`), e.push(`content.Add(${r}, "${W(n.name)}", "${W(n.fileName)}");`);
		} else e.push(`content.Add(new StreamContent(File.OpenRead("${W(n.fileName)}")), "${W(n.name)}", "${W(n.fileName)}");`);
		else if (n.contentType) {
			let r = `stringContent${t++}`;
			e.push(`var ${r} = new StringContent("${W(n.value ?? "")}");`), e.push(`${r}.Headers.ContentType = new MediaTypeHeaderValue("${n.contentType}");`), e.push(`content.Add(${r}, "${W(n.name)}");`);
		} else e.push(`content.Add(new StringContent("${W(n.value ?? "")}"), "${W(n.name)}");`);
		e.push("request.Content = content;");
	} else if (n === "application/octet-stream" && r) e.push("var content = new ByteArrayContent(System.Text.Encoding.UTF8.GetBytes(\"" + r.replace(/"/g, "\\\"") + "\"));"), e.push("content.Headers.ContentType = new MediaTypeHeaderValue(\"application/octet-stream\");"), e.push("request.Content = content;");
	else if (r) {
		let t = vr(r);
		e.push("request.Content = new StringContent("), e.push(`${t},`), e.push(`System.Text.Encoding.UTF8, "${n}");`);
	}
}
function vr(e) {
	let t = 3;
	for (; e.includes("\"".repeat(t));) t++;
	let n = "\"".repeat(t);
	return `${n}\n${e}\n${n}`;
}
function W(e) {
	return e.replace(/\\/g, "\\\\").replace(/"/g, "\\\"");
}
function yr(e) {
	return /^[a-zA-Z0-9][a-zA-Z0-9!#$&\-\^_]*\/[a-zA-Z0-9][a-zA-Z0-9!#$&\-\^_]*(\s*;\s*[a-zA-Z0-9][a-zA-Z0-9!#$&\-\^_]*=.*)?$/.test(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@scalar+snippetz@0.9.11/node_modules/@scalar/snippetz/dist/plugins/go/native/native.js
var br = (e) => e.includes(" ") ? e : G(e), G = (e) => JSON.stringify(e), xr = (e) => {
	if (e === void 0) return "";
	try {
		return JSON.stringify(JSON.parse(e), null, 2);
	} catch {
		return e;
	}
}, Sr = (e) => !e.includes("`"), Cr = (e, t = !1) => t && Sr(e) ? `\`${e}\`` : G(e), wr = (e) => {
	let t = /* @__PURE__ */ new Set();
	if (!e) return {
		imports: t,
		setupLines: [],
		requestBody: "nil",
		needsMultipartContentTypeHeader: !1
	};
	if (e.mimeType === "application/x-www-form-urlencoded" && e.params?.length) return t.add("neturl \"net/url\""), t.add("strings"), {
		imports: t,
		setupLines: ["postData := neturl.Values{}", ...e.params.map((e) => `postData.Set(${G(e.name)}, ${G(e.value ?? "")})`)],
		requestBody: "strings.NewReader(postData.Encode())",
		needsMultipartContentTypeHeader: !1
	};
	if (e.mimeType === "multipart/form-data" && e.params?.length) {
		t.add("bytes"), t.add("mime/multipart");
		let n = ["payload := &bytes.Buffer{}", "writer := multipart.NewWriter(payload)"], r = e.params.some((e) => e.fileName !== void 0), i = !1, a = !1;
		return r && (t.add("os"), t.add("io")), e.params.forEach((e) => {
			n.push(""), e.fileName === void 0 ? n.push(`_ = writer.WriteField(${G(e.name)}, ${G(e.value ?? "")})`) : (n.push(`part, _ ${i ? "=" : ":="} writer.CreateFormFile(${G(e.name)}, ${G(e.fileName)})`), n.push(""), n.push(`f, _ ${a ? "=" : ":="} os.Open(${G(e.fileName)})`), n.push("defer f.Close()"), n.push(""), n.push("_, _ = io.Copy(part, f)"), i = !0, a = !0);
		}), n.push("writer.Close()"), {
			imports: t,
			setupLines: n,
			requestBody: "payload",
			needsMultipartContentTypeHeader: !0
		};
	}
	return t.add("strings"), {
		imports: t,
		setupLines: [`payload := strings.NewReader(${Cr(e.mimeType === "application/json" ? xr(e.text) : e.text ?? "", e.mimeType === "application/json")})`],
		requestBody: "payload",
		needsMultipartContentTypeHeader: !1
	};
}, Tr = (e) => Array.from(new Set([
	"fmt",
	"io",
	"net/http",
	...e
])).sort(), Er = {
	target: "go",
	client: "native",
	title: "NewRequest",
	generate(e, t) {
		if (!e) return "";
		let n = cr(e.method), r = lr(ur(e.url ?? "", e.queryString)), i = dr(e.headers, e.cookies), a = wr(e.postData), o = [
			"package main",
			"",
			"import (",
			...Tr(a.imports).map((e) => `\t${br(e)}`),
			")",
			"",
			"func main() {",
			`\trequestUrl := ${G(r)}`,
			"",
			...a.setupLines.map((e) => e ? `\t${e}` : "")
		];
		return a.setupLines.length && o.push(""), o.push(`\treq, _ := http.NewRequest(${G(n)}, requestUrl, ${a.requestBody})`), o.push(""), a.needsMultipartContentTypeHeader && o.push("	req.Header.Set(\"Content-Type\", writer.FormDataContentType())"), t?.auth?.username && t?.auth?.password && o.push(`\treq.SetBasicAuth(${G(t.auth.username)}, ${G(t.auth.password)})`), i.forEach((e) => {
			o.push(`\treq.Header.Add(${G(e.name)}, ${G(e.value)})`);
		}), (a.needsMultipartContentTypeHeader || i.length || t?.auth?.username && t.auth.password) && o.push(""), o.push("	res, _ := http.DefaultClient.Do(req)"), o.push(""), o.push("	defer res.Body.Close()"), o.push("	body, _ := io.ReadAll(res.Body)"), o.push(""), o.push("	fmt.Println(res)"), o.push("	fmt.Println(string(body))"), o.push(""), o.push("}"), o.join("\n");
	}
}, Dr = "", Or = "\n", kr = class {
	postProcessors;
	code;
	indentationCharacter;
	lineJoin;
	indentLine;
	unshift;
	push;
	blank;
	join;
	addPostProcessor;
	constructor({ indent: e, join: t } = {}) {
		this.postProcessors = [], this.code = [], this.indentationCharacter = Dr, this.lineJoin = Or, this.indentLine = (e, t = 0) => `${this.indentationCharacter.repeat(t)}${e}`, this.unshift = (e, t) => {
			let n = this.indentLine(e, t);
			this.code.unshift(n);
		}, this.push = (e, t) => {
			let n = this.indentLine(e, t);
			this.code.push(n);
		}, this.blank = () => {
			this.code.push("");
		}, this.join = () => {
			let e = this.code.join(this.lineJoin);
			return this.postProcessors.reduce((e, t) => t(e), e);
		}, this.addPostProcessor = (e) => {
			this.postProcessors = [...this.postProcessors, e];
		}, this.indentationCharacter = e || Dr, this.lineJoin = t ?? Or;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@scalar+snippetz@0.9.11/node_modules/@scalar/snippetz/dist/httpsnippet-lite/helpers/escape.js
function Ar(e, t = {}) {
	let { delimiter: n = "\"", escapeChar: r = "\\", escapeNewlines: i = !0 } = t;
	return [...e.toString()].map((e) => e === "\b" ? `${r}b` : e === "	" ? `${r}t` : e === "\n" ? i ? `${r}n` : e : e === "\f" ? `${r}f` : e === "\r" ? i ? `${r}r` : e : e === r ? r + r : e === n ? r + n : e < " " || e > "~" ? JSON.stringify(e).slice(1, -1) : e).join("");
}
var jr = (e) => Ar(e, { delimiter: "\"" }), Mr = {
	info: {
		key: "okhttp",
		title: "OkHttp",
		link: "http://square.github.io/okhttp/",
		description: "An HTTP Request Client Library"
	},
	convert: ({ postData: e, method: t, fullUrl: n, allHeaders: r }, i) => {
		let { push: a, blank: o, join: s } = new kr({ indent: {
			indent: "  ",
			...i
		}.indent });
		return a("OkHttpClient client = new OkHttpClient();"), o(), e != null && (e.mimeType === "application/x-www-form-urlencoded" && e.params ? (a("FormBody formBody = new FormBody.Builder()"), e.params.forEach((e) => {
			a(`.addEncoded("${e.name}", "${e.value}")`, 1);
		}), a(".build();", 1), o()) : e.mimeType === "multipart/form-data" && e.params ? (a("MultipartBody body = new MultipartBody.Builder()"), a(".setType(MultipartBody.FORM)", 1), e.params.forEach((e) => {
			e.fileName === void 0 ? e.value !== void 0 && a(`.addFormDataPart("${e.name}", "${e.value}")`, 1) : a(`.addFormDataPart("${e.name}", "${e.fileName}", RequestBody.create(MediaType.parse("application/octet-stream"), new File("${e.fileName}")))`, 1);
		}), a(".build();", 1), o()) : (a(`MediaType mediaType = MediaType.parse("${e.mimeType}");`), a(`RequestBody body = RequestBody.create(mediaType, ${JSON.stringify(e.text)});`))), a("Request request = new Request.Builder()"), a(`.url("${n}")`, 1), [
			"GET",
			"POST",
			"PUT",
			"DELETE",
			"PATCH",
			"HEAD"
		].includes(t.toUpperCase()) ? [
			"POST",
			"PUT",
			"DELETE",
			"PATCH"
		].includes(t.toUpperCase()) ? e != null && (e.text || e.params) ? a(`.${t.toLowerCase()}(body)`, 1) : a(`.${t.toLowerCase()}(null)`, 1) : a(`.${t.toLowerCase()}()`, 1) : e?.text ? a(`.method("${t.toUpperCase()}", body)`, 1) : a(`.method("${t.toUpperCase()}", null)`, 1), Object.keys(r).forEach((e) => {
			a(`.addHeader("${e}", "${jr(r[e])}")`, 1);
		}), a(".build();", 1), o(), a("Response response = client.newCall(request).execute();"), s();
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@scalar+snippetz@0.9.11/node_modules/@scalar/snippetz/dist/utils/convertWithHttpSnippetLite.js
function Nr(e, t) {
	let n = new URL(t?.url ?? ""), r = n.pathname === "/" ? n.origin : n.toString(), i = {
		method: t?.method ?? "GET",
		url: r,
		httpVersion: "HTTP/1.1",
		cookies: [],
		headers: t?.headers ?? [],
		headersSize: -1,
		bodySize: -1,
		queryString: Array.from(n.searchParams.entries()).map(([e, t]) => ({
			name: e,
			value: t
		})),
		postData: t?.postData
	}, a = (i?.headers ?? []).reduce((e, t) => ({
		...e,
		[t.name]: t.value
	}), {}), o = pr(i.queryString), s = (i.cookies ?? []).reduce((e, t) => ({
		...e,
		[t.name]: t.value
	}), {}), c = new URL(i.url), l = {
		protocol: c.protocol,
		hostname: c.hostname,
		host: c.hostname,
		port: c.port,
		pathname: c.pathname.split("/").map((e) => encodeURIComponent(decodeURIComponent(e))).join("/") + c.search,
		path: c.pathname.split("/").map((e) => encodeURIComponent(decodeURIComponent(e))).join("/") + c.search,
		search: c.search,
		hash: c.hash,
		href: c.href,
		origin: c.origin,
		password: c.password,
		searchParams: c.searchParams,
		username: c.username,
		toString: c.toString,
		toJSON: () => c.toJSON()
	}, u = {
		url: i.url,
		uriObj: l,
		method: i.method?.toLocaleUpperCase() ?? "GET",
		httpVersion: i.httpVersion,
		cookies: i.cookies ?? [],
		headers: i.headers ?? [],
		headersSize: i.headersSize ?? 0,
		headersObj: a ?? {},
		bodySize: i.bodySize ?? 0,
		queryString: i.queryString ?? [],
		postData: i.postData ? {
			mimeType: i.postData.mimeType ?? "application/json",
			text: i.postData.text ?? "",
			params: i.postData.params ?? [],
			paramsObj: i.postData.params?.reduce((e, t) => (t.name && t.value !== void 0 && (e[t.name] = t.value), e), {}) ?? {}
		} : void 0,
		allHeaders: a ?? {},
		fullUrl: i.url,
		queryObj: o ?? {},
		cookiesObj: s ?? {}
	};
	if (u.postData?.mimeType === "application/json" && u.postData.text) try {
		u.postData.jsonObj = JSON.parse(u.postData.text);
	} catch (e) {
		console.error("Error parsing JSON:", e);
	}
	return typeof e.convert == "function" ? e.convert(u) : "";
}
//#endregion
//#region ../../node_modules/.pnpm/@scalar+snippetz@0.9.11/node_modules/@scalar/snippetz/dist/plugins/java/okhttp/okhttp.js
var Pr = {
	target: "java",
	client: "okhttp",
	title: "OkHttp",
	generate(e) {
		return Nr(Mr, e);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@scalar+snippetz@0.9.11/node_modules/@scalar/snippetz/dist/libs/javascript.js
function Fr(e) {
	return !/^[$A-Z_][0-9A-Z_$]*$/i.test(e);
}
function Ir(e) {
	return e.replaceAll("\\", "\\\\").replaceAll("\n", "\\n").replaceAll("\r", "\\r").replaceAll("'", "\\'");
}
var Lr = class {
	value;
	constructor(e) {
		this.value = e;
	}
};
function K(e, t = 0) {
	let n = [], r = " ".repeat(t), i = " ".repeat(t + 2);
	if (Object.keys(e).length === 0) return "{}";
	for (let [r, a] of Object.entries(e)) {
		let e = Fr(r) ? `'${Ir(r)}'` : r;
		if (a instanceof Lr) {
			let t = a.value.split("\n"), r = `${a.value}`;
			t.length > 1 && (r = t.map((e, t) => t === 0 ? e : `${i}${e}`).join("\n")), n.push(`${i}${e}: ${r}`);
		} else if (Array.isArray(a)) {
			let r = a.map((e) => typeof e == "string" ? `'${e}'` : e && typeof e == "object" ? K(e) : JSON.stringify(e));
			if (r.some((e) => e.includes("\n"))) {
				let a = r.map((e) => Rr(e, t + 4)).join(",\n");
				n.push(`${i}${e}: [\n${a}\n${i}]`);
			} else n.push(`${i}${e}: [${r.join(", ")}]`);
		} else if (a && typeof a == "object") n.push(`${i}${e}: ${K(a, t + 2)}`);
		else if (typeof a == "string") {
			let t = `'${a}'`;
			n.push(`${i}${e}: ${t}`);
		} else n.push(`${i}${e}: ${a}`);
	}
	return `{\n${n.join(",\n")}\n${r}}`;
}
function Rr(e, t) {
	let n = " ".repeat(t);
	return e.split("\n").map((e) => `${n}${e}`).join("\n");
}
//#endregion
//#region ../../node_modules/.pnpm/@scalar+snippetz@0.9.11/node_modules/@scalar/snippetz/dist/plugins/js/fetch/fetch.js
var zr = {
	target: "js",
	client: "fetch",
	title: "Fetch",
	generate(e) {
		let t = {
			method: "GET",
			...e
		}, n = "";
		t.method = t.method.toUpperCase();
		let r = { method: t.method === "GET" ? void 0 : t.method }, i = sr(t.queryString);
		if (t.headers?.length && (r.headers = {}, t.headers.forEach((e) => {
			r.headers[e.name] = e.value;
		})), t.cookies?.length && (r.headers = r.headers || {}, t.cookies.forEach((e) => {
			r.headers["Set-Cookie"] = r.headers["Set-Cookie"] ? `${r.headers["Set-Cookie"]}; ${e.name}=${e.value}` : `${e.name}=${e.value}`;
		})), Object.keys(r).forEach((e) => {
			r[e] === void 0 && delete r[e];
		}), t.postData) {
			let { mimeType: e, text: i, params: a } = t.postData;
			if (e === "application/json" && i) try {
				r.body = new Lr(`JSON.stringify(${K(JSON.parse(i))})`);
			} catch {
				r.body = i;
			}
			else e === "multipart/form-data" && a ? (n = "const formData = new FormData()\n", a.forEach((e) => {
				e.fileName === void 0 ? e.value !== void 0 && (n += `formData.append('${e.name}', '${e.value}')\n`) : n += `formData.append('${e.name}', new Blob([]), '${e.fileName}')\n`;
			}), n += "\n", r.body = new Lr("formData")) : e === "application/x-www-form-urlencoded" && a ? r.body = new Lr(`new URLSearchParams(${K(Object.fromEntries(a.map((e) => [e.name, e.value])))})`) : r.body = t.postData.text;
		}
		let a = Object.keys(r).length ? `, ${K(r)}` : "";
		return `${n}fetch('${t.url}${i}'${a})`;
	}
}, Br = {
	info: {
		key: "okhttp",
		title: "OkHttp",
		link: "http://square.github.io/okhttp/",
		description: "An HTTP Request Client Library"
	},
	convert: ({ postData: e, fullUrl: t, method: n, allHeaders: r }, i) => {
		let { blank: a, join: o, push: s } = new kr({ indent: {
			indent: "  ",
			...i
		}.indent });
		return s("val client = OkHttpClient()"), a(), e != null && (e.mimeType === "application/x-www-form-urlencoded" && e.params ? (s("val formBody = FormBody.Builder()"), e.params.forEach((e) => {
			s(`.addEncoded("${e.name}", "${e.value}")`, 1);
		}), s(".build()", 1), a()) : e.mimeType === "multipart/form-data" && e.params ? (s("val body = MultipartBody.Builder()"), s(".setType(MultipartBody.FORM)", 1), e.params.forEach((e) => {
			e.fileName === void 0 ? e.value !== void 0 && s(`.addFormDataPart("${e.name}", "${e.value}")`, 1) : s(`.addFormDataPart("${e.name}", "${e.fileName}", RequestBody.create(MediaType.parse("application/octet-stream"), File("${e.fileName}")))`, 1);
		}), s(".build()", 1), a()) : (s(`val mediaType = MediaType.parse("${e.mimeType}")`), s(`val body = RequestBody.create(mediaType, ${JSON.stringify(e.text)})`))), s("val request = Request.Builder()"), s(`.url("${t}")`, 1), [
			"GET",
			"POST",
			"PUT",
			"DELETE",
			"PATCH",
			"HEAD"
		].includes(n.toUpperCase()) ? [
			"POST",
			"PUT",
			"DELETE",
			"PATCH"
		].includes(n.toUpperCase()) ? e != null && (e.text || e.params) ? s(`.${n.toLowerCase()}(body)`, 1) : s(`.${n.toLowerCase()}(null)`, 1) : s(`.${n.toLowerCase()}()`, 1) : e?.text ? s(`.method("${n.toUpperCase()}", body)`, 1) : s(`.method("${n.toUpperCase()}", null)`, 1), Object.keys(r).forEach((e) => {
			s(`.addHeader("${e}", "${jr(r[e])}")`, 1);
		}), s(".build()", 1), a(), s("val response = client.newCall(request).execute()"), o();
	}
}, Vr = {
	target: "kotlin",
	client: "okhttp",
	title: "OkHttp",
	generate(e) {
		return Nr(Br, e);
	}
}, Hr = (e, t, n, r) => {
	let i = `${e} *${t} = `;
	return `${i}${Ur(n, r ? i.length : void 0)};`;
}, Ur = (e, t) => {
	let n = t === void 0 ? ", " : `,\n   ${" ".repeat(t)}`;
	switch (Object.prototype.toString.call(e)) {
		case "[object Number]": return `@${e}`;
		case "[object Array]": return `@[ ${e.map((e) => Ur(e)).join(n)} ]`;
		case "[object Object]": {
			let t = [], r = e;
			for (let e in r) Object.hasOwn(r, e) && t.push(`@"${e}": ${Ur(r[e])}`);
			return `@{ ${t.join(n)} }`;
		}
		case "[object Boolean]": return e ? "@YES" : "@NO";
		default: return e == null ? "" : `@"${e.toString().replace(/"/g, "\\\"")}"`;
	}
}, Wr = {
	info: {
		key: "nsurlsession",
		title: "NSURLSession",
		link: "https://developer.apple.com/library/mac/documentation/Foundation/Reference/NSURLSession_class/index.html",
		description: "Foundation's NSURLSession request"
	},
	convert: ({ allHeaders: e, postData: t, method: n, fullUrl: r }, i) => {
		let a = {
			indent: "    ",
			pretty: !0,
			timeout: 10,
			...i
		}, { push: o, join: s, blank: c } = new kr({ indent: a.indent }), l = {
			hasHeaders: !1,
			hasBody: !1
		};
		if (o("#import <Foundation/Foundation.h>"), Object.keys(e).length && (l.hasHeaders = !0, c(), o(Hr("NSDictionary", "headers", e, a.pretty))), t && (t.text || t.jsonObj || t.params)) switch (l.hasBody = !0, t.mimeType) {
			case "application/x-www-form-urlencoded":
				if (t.params?.length) {
					c();
					let [e, ...n] = t.params;
					o(`NSMutableData *postData = [[NSMutableData alloc] initWithData:[@"${e.name}=${e.value}" dataUsingEncoding:NSUTF8StringEncoding]];`), n.forEach(({ name: e, value: t }) => {
						o(`[postData appendData:[@"&${e}=${t}" dataUsingEncoding:NSUTF8StringEncoding]];`);
					});
				} else l.hasBody = !1;
				break;
			case "application/json":
				t.jsonObj && (o(Hr("NSDictionary", "parameters", t.jsonObj, a.pretty)), c(), o("NSData *postData = [NSJSONSerialization dataWithJSONObject:parameters options:0 error:nil];"));
				break;
			case "multipart/form-data":
				o(Hr("NSArray", "parameters", t.params || [], a.pretty)), o(`NSString *boundary = @"${t.boundary}";`), c(), o("NSError *error;"), o("NSMutableString *body = [NSMutableString string];"), o("for (NSDictionary *param in parameters) {"), o("[body appendFormat:@\"--%@\\r\\n\", boundary];", 1), o("if (param[@\"fileName\"]) {", 1), o("[body appendFormat:@\"Content-Disposition:form-data; name=\\\"%@\\\"; filename=\\\"%@\\\"\\r\\n\", param[@\"name\"], param[@\"fileName\"]];", 2), o("[body appendFormat:@\"Content-Type: %@\\r\\n\\r\\n\", param[@\"contentType\"]];", 2), o("[body appendFormat:@\"%@\", [NSString stringWithContentsOfFile:param[@\"fileName\"] encoding:NSUTF8StringEncoding error:&error]];", 2), o("if (error) {", 2), o("NSLog(@\"%@\", error);", 3), o("}", 2), o("} else {", 1), o("[body appendFormat:@\"Content-Disposition:form-data; name=\\\"%@\\\"\\r\\n\\r\\n\", param[@\"name\"]];", 2), o("[body appendFormat:@\"%@\", param[@\"value\"]];", 2), o("}", 1), o("}"), o("[body appendFormat:@\"\\r\\n--%@--\\r\\n\", boundary];"), o("NSData *postData = [body dataUsingEncoding:NSUTF8StringEncoding];");
				break;
			default: c(), o(`NSData *postData = [[NSData alloc] initWithData:[@"${t.text}" dataUsingEncoding:NSUTF8StringEncoding]];`);
		}
		return c(), o(`NSMutableURLRequest *request = [NSMutableURLRequest requestWithURL:[NSURL URLWithString:@"${r}"]`), o("                                                       cachePolicy:NSURLRequestUseProtocolCachePolicy"), o(`                                                   timeoutInterval:${a.timeout.toFixed(1)}];`), o(`[request setHTTPMethod:@"${n}"];`), l.hasHeaders && o("[request setAllHTTPHeaderFields:headers];"), l.hasBody && o("[request setHTTPBody:postData];"), c(), o("NSURLSession *session = [NSURLSession sharedSession];"), o("NSURLSessionDataTask *dataTask = [session dataTaskWithRequest:request"), o("                                            completionHandler:^(NSData *data, NSURLResponse *response, NSError *error) {"), o("                                            if (error) {", 1), o("                                            NSLog(@\"%@\", error);", 2), o("                                            } else {", 1), o("                                            NSHTTPURLResponse *httpResponse = (NSHTTPURLResponse *) response;", 2), o("                                            NSLog(@\"%@\", httpResponse);", 2), o("                                            }", 1), o("                                            }];"), o("[dataTask resume];"), s();
	}
}, Gr = {
	target: "objc",
	client: "nsurlsession",
	title: "NSURLSession",
	generate(e) {
		return Nr(Wr, e);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/@scalar+snippetz@0.9.11/node_modules/@scalar/snippetz/dist/libs/php.js
function q(e) {
	return " ".repeat(e * 2);
}
var Kr = class {
	value;
	constructor(e) {
		this.value = e;
	}
};
function qr(e, t = 0) {
	if (e == null) return "null";
	if (e instanceof Kr) {
		let n = e.value.split("\n");
		if (n.length > 1) {
			let e = q(t + 1);
			return n.map((t, n) => n === 0 ? t : `${e}${t}`).join("\n");
		}
		return e.value;
	}
	if (typeof e == "string") return `'${e.replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`;
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (Array.isArray(e)) {
		if (e.length === 0) return "[]";
		let n = e.map((e) => qr(e, t + 1)).join(",\n" + q(t + 1));
		return `[\n${q(t + 1)}${n}\n${q(t)}]`;
	}
	if (typeof e == "object") {
		let n = Object.entries(e);
		if (n.length === 0) return "[]";
		let r = n.map(([e, n]) => `'${e}' => ${qr(n, t + 1)}`).join(",\n" + q(t + 1));
		return `[\n${q(t + 1)}${r}\n${q(t)}]`;
	}
	return "null";
}
//#endregion
//#region ../../node_modules/.pnpm/@scalar+snippetz@0.9.11/node_modules/@scalar/snippetz/dist/plugins/php/curl/curl.js
var Jr = {
	target: "php",
	client: "curl",
	title: "cURL",
	generate(e, t) {
		let n = {
			method: "GET",
			...e
		};
		n.method = n.method.toUpperCase();
		let r = [], i = !1, a = n.queryString?.length ? "?" + n.queryString.map((e) => `${e.name}=${e.value}`).join("&") : "", o = `${n.url}${a}`;
		r.push(`$ch = curl_init("${o}");`), r.push(""), n.method === "POST" ? r.push("curl_setopt($ch, CURLOPT_POST, true);") : n.method !== "GET" && r.push(`curl_setopt($ch, CURLOPT_CUSTOMREQUEST, '${n.method}');`), t?.auth?.username && t?.auth?.password && r.push(`curl_setopt($ch, CURLOPT_USERPWD, '${t.auth.username}:${t.auth.password}');`);
		let s = [...n.headers || []], c = () => s.some((e) => e.name.toLowerCase() === "content-type");
		if (n.postData && (n.postData.mimeType === "application/x-www-form-urlencoded" && n.postData.params && !c() ? s.push({
			name: "Content-Type",
			value: "application/x-www-form-urlencoded"
		}) : n.postData.mimeType === "application/octet-stream" && !c() && s.push({
			name: "Content-Type",
			value: "application/octet-stream"
		})), s.length) {
			let e = s.map((e) => `'${e.name}: ${e.value}'`);
			r.push(`curl_setopt($ch, CURLOPT_HTTPHEADER, [${e.join(", ")}]);`);
			let t = s.find((e) => e.name.toLowerCase() === "accept-encoding");
			t && /gzip|deflate/.test(t.value) && r.push("curl_setopt($ch, CURLOPT_ENCODING, '');");
		}
		if (n.cookies?.length) {
			let e = n.cookies.map((e) => `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`).join("; ");
			r.push(`curl_setopt($ch, CURLOPT_COOKIE, '${e}');`);
		}
		if (n.postData) {
			if (n.postData.mimeType === "application/json") {
				if (n.postData.text) try {
					let e = qr(JSON.parse(n.postData.text));
					r.push(`curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(${e}));`);
				} catch {
					r.push(`curl_setopt($ch, CURLOPT_POSTFIELDS, '${n.postData.text}');`);
				}
			} else if (n.postData.mimeType === "multipart/form-data" && n.postData.params) i = !0, r.push("$mime = curl_mime_init($ch);"), n.postData.params.forEach((e, t) => {
				let n = `$part${t}`;
				r.push(`${n} = curl_mime_addpart($mime);`), r.push(`curl_mime_name(${n}, '${e.name}');`), e.fileName === void 0 ? e.value !== void 0 && r.push(`curl_mime_data(${n}, '${e.value}');`) : r.push(`curl_mime_filedata(${n}, '${e.fileName}');`), e.contentType && r.push(`curl_mime_type(${n}, '${e.contentType}');`);
			}), r.push("curl_setopt($ch, CURLOPT_MIMEPOST, $mime);");
			else if (n.postData.mimeType === "application/x-www-form-urlencoded" && n.postData.params) {
				let e = n.postData.params.map((e) => `${encodeURIComponent(e.name)}=${e.value ? encodeURIComponent(e.value) : ""}`).join("&");
				r.push(`curl_setopt($ch, CURLOPT_POSTFIELDS, '${e}');`);
			} else if (n.postData.mimeType === "application/octet-stream") r.push(`curl_setopt($ch, CURLOPT_POSTFIELDS, '${n.postData.text || ""}');`);
			else if (n.postData.text) try {
				let e = qr(JSON.parse(n.postData.text));
				r.push(`curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(${e}));`);
			} catch {
				r.push(`curl_setopt($ch, CURLOPT_POSTFIELDS, '${n.postData.text}');`);
			}
		}
		return r.push(""), r.push("curl_exec($ch);"), i && r.push("curl_mime_free($mime);"), r.push(""), r.push("curl_close($ch);"), r.join("\n").replace(/\n\n\n/g, "\n\n");
	}
};
function Yr(e) {
	let t = [
		["true", "True"],
		["false", "False"],
		["null", "None"]
	], n = e;
	for (let [e, r] of t) {
		let t = [`(: )${e}(?=,|\\n)`, `^( +)${e}(?=,|\\n)`];
		for (let e of t) n = n.replace(new RegExp(e, "gm"), `$1${r}`);
	}
	return n;
}
function Xr(e, t = 4) {
	return Yr(JSON.stringify(e, null, 2).split("\n").map((e, n) => n === 0 ? e : " ".repeat(t) + e).join("\n"));
}
function Zr(e, t, n) {
	let r = {
		url: "https://example.com",
		method: "get",
		...t
	}, i = r.method.toLowerCase(), a = {};
	if (r.headers?.length && (a.headers = r.headers.reduce((e, t) => (t.name in e || (e[t.name] = t.value), e), {})), r.queryString?.length && (a.params = pr(r.queryString)), r.cookies?.length && (a.cookies = Object.fromEntries(r.cookies.map((e) => [e.name, e.value]))), n?.auth?.username && n?.auth?.password && (a.auth = [n.auth.username, n.auth.password]), r.postData) {
		let { mimeType: e, text: t, params: n } = r.postData;
		if (e === "application/json" && t) try {
			a.json = JSON.parse(t);
		} catch {
			a.data = t;
		}
		else if (e === "application/octet-stream" && t) a.data = t;
		else if (e === "multipart/form-data" && n) {
			let e = [], t = {};
			n.forEach((n) => {
				if (n.fileName !== void 0) {
					let t = JSON.stringify(n.name), r = JSON.stringify(n.fileName), i = `open(${r}, "rb")`;
					if (n.contentType) {
						let a = JSON.stringify(n.contentType);
						e.push(`(${t}, (${r}, ${i}, ${a}))`);
					} else e.push(`(${t}, ${i})`);
				} else if (n.value !== void 0) if (n.contentType) {
					let t = JSON.stringify(n.name), r = JSON.stringify(n.value), i = JSON.stringify(n.contentType);
					e.push(`(${t}, (None, ${r}, ${i}))`);
				} else fr(t, n.name, n.value);
			}), e.length && (a.files = e), Object.keys(t).length && (a.data = t);
		} else if (e === "application/x-www-form-urlencoded" && n) {
			let e = {};
			n.forEach((t) => {
				fr(e, t.name, t.value ?? "");
			}), a.data = e;
		}
	}
	let o = [], s = `"${r.url}"`;
	r.url.length > 40 ? o.push(s) : o.push("");
	for (let [e, t] of Object.entries(a)) if (e === "auth") o.push(`${e}=(${Yr(JSON.stringify(t[0]))}, ${Yr(JSON.stringify(t[1]))})`);
	else if (e === "files") {
		let n = "[\n" + t.map((e) => `      ${e}`).join(",\n") + "\n    ]";
		o.push(`${e}=${n}`);
	} else if (e === "json") {
		let n = Xr(t);
		o.push(`${e}=${n}`);
	} else if (e === "data" && r.postData?.mimeType === "application/octet-stream") o.push(`${e}=b"${t}"`);
	else {
		let n = Xr(t);
		o.push(`${e}=${n}`);
	}
	return r.url.length > 40 ? `${e}.${i}(\n    ${o.join(",\n    ")}\n)` : o.length <= 1 ? `${e}.${i}(${s})` : `${e}.${i}(${s}${o.length > 1 ? "," : ""}\n    ${o.slice(1).join(",\n    ")}\n)`;
}
//#endregion
//#region ../../node_modules/.pnpm/@scalar+snippetz@0.9.11/node_modules/@scalar/snippetz/dist/plugins/python/requests/requests.js
var Qr = {
	target: "python",
	client: "requests",
	title: "Requests",
	generate(e, t) {
		return Zr("requests", e, t);
	}
}, $r = (e) => e.replace(/\\/g, "\\\\").replace(/"/g, "\\\""), J = (e) => e.replace(/\\/g, "\\\\").replace(/'/g, "\\'"), ei = (e) => encodeURIComponent(e).replace(/'/g, "%27"), ti = new Set([
	"GET",
	"POST",
	"HEAD",
	"DELETE",
	"PATCH",
	"PUT",
	"OPTIONS",
	"COPY",
	"LOCK",
	"UNLOCK",
	"MOVE",
	"TRACE"
]), ni = (e) => e.charAt(0) + e.slice(1).toLowerCase(), ri = (e, t, n) => {
	if (ti.has(t)) return;
	let r = ni(t);
	e.push(`class Net::HTTP::${r} < Net::HTTPRequest`), e.push(`  METHOD = '${t}'`), e.push(`  REQUEST_HAS_BODY = '${n ? "true" : "false"}'`), e.push("  RESPONSE_HAS_BODY = true"), e.push("end"), e.push("");
}, ii = (e) => {
	try {
		let t = new URL(e), n = t.pathname.split("/").map((e) => encodeURIComponent(decodeURIComponent(e)).replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/%24/g, "$")).join("/");
		return t.pathname === "/" ? `${t.origin}${t.search}${t.hash}` : `${t.origin}${n}${t.search}${t.hash}`;
	} catch {
		return e;
	}
}, ai = {
	target: "ruby",
	client: "native",
	title: "net::http",
	generate(e, t) {
		let n = {
			method: "GET",
			...e
		};
		n.method = n.method.toUpperCase();
		let r = sr(n.queryString), i = ii(`${n.url ?? ""}${r}`), a = [
			"require 'uri'",
			"require 'net/http'",
			""
		];
		ri(a, n.method, !!n.postData?.text), a.push(`url = URI("${$r(i)}")`, ""), a.push("http = Net::HTTP.new(url.host, url.port)"), i.startsWith("https://") && a.push("http.use_ssl = true"), a.push("");
		let o = ni(n.method);
		if (a.push(`request = Net::HTTP::${o}.new(url)`), t?.auth?.username && t?.auth?.password) {
			let e = $r(t.auth.username), n = $r(t.auth.password);
			a.push(`request.basic_auth("${e}", "${n}")`);
		}
		if (n.headers?.length && n.headers.forEach((e) => {
			a.push(`request["${$r(e.name)}"] = '${J(e.value)}'`);
		}), n.cookies?.length) {
			let e = n.cookies.map((e) => `${ei(e.name)}=${ei(e.value)}`).join("; ");
			a.push(`request["Cookie"] = '${J(e)}'`);
		}
		if (n.postData) {
			let { mimeType: e, text: t, params: r } = n.postData;
			if (e === "application/json" && t !== void 0) try {
				let e = JSON.parse(t), n = JSON.stringify(e, null, 2);
				a.push("request.body = <<~JSON"), a.push(n), a.push("JSON");
			} catch {
				a.push(`request.body = ${JSON.stringify(t)}`);
			}
			else if (e === "application/x-www-form-urlencoded" && r) {
				let e = r.map((e) => `${ei(e.name)}=${ei(e.value ?? "")}`).join("&");
				a.push(`request.body = '${J(e)}'`);
			} else e === "multipart/form-data" && r ? (a.push("form_data = []"), r.forEach((e) => {
				let t = J(e.name);
				if (e.fileName !== void 0) {
					let n = J(e.fileName);
					if (e.contentType) {
						let r = J(e.contentType);
						a.push(`form_data << ['${t}', File.open('${n}'), { filename: '${n}', content_type: '${r}' }]`);
					} else a.push(`form_data << ['${t}', File.open('${n}')]`);
				} else if (e.contentType) {
					let n = J(e.value ?? ""), r = J(e.contentType);
					a.push(`form_data << ['${t}', '${n}', { content_type: '${r}' }]`);
				} else {
					let n = J(e.value ?? "");
					a.push(`form_data << ['${t}', '${n}']`);
				}
			}), a.push("request.set_form(form_data, 'multipart/form-data')")) : e === "application/octet-stream" ? a.push(`request.body = ${JSON.stringify(t ?? "")}`) : t !== void 0 && a.push(`request.body = ${JSON.stringify(t)}`);
		}
		return a.push("", "response = http.request(request)", "puts response.read_body"), a.join("\n");
	}
}, oi = /^[!#$%&'*+\-.^_`|~A-Za-z0-9]+$/, si = (e) => `"${e.replaceAll(/(["\\])/g, "\\$1")}"`, ci = (e) => {
	let t = e.indexOf("=");
	if (t === -1) return null;
	let n = e.slice(0, t).trim().toLowerCase();
	if (!n || !oi.test(n)) return null;
	let r = e.slice(t + 1).trim();
	return r ? r.startsWith("\"") && r.endsWith("\"") && r.length >= 2 ? [n, r.slice(1, -1).replaceAll(/\\(["\\])/g, "$1")] : [n, r] : null;
}, li = (e) => {
	let [t = "", n = ""] = e.split("/", 2), r = t.trim().toLowerCase(), i = n.trim().toLowerCase();
	if (!r || !i || !oi.test(r) || !oi.test(i)) throw Error(`Invalid MIME type: "${e}"`);
	return {
		essence: `${r}/${i}`,
		type: r,
		subtype: i
	};
}, ui = (e = "text/plain") => {
	let [t = "", ...n] = e.split(";"), r;
	try {
		r = li(t);
	} catch {
		r = li("text/plain");
	}
	let { essence: i, type: a, subtype: o } = r, s = /* @__PURE__ */ new Map();
	return n.forEach((e) => {
		let t = ci(e);
		if (!t) return;
		let [n, r] = t;
		s.set(n, r);
	}), {
		essence: i,
		type: a,
		subtype: o,
		parameters: s,
		toString: () => {
			let e = Array.from(s.entries()).map(([e, t]) => `${e}=${oi.test(t) ? t : si(t)}`);
			return e.length ? `${i}; ${e.join("; ")}` : i;
		}
	};
}, Y = (e) => e.replace(/'/g, "'\\''"), di = (e) => {
	if (!e) return !1;
	let { subtype: t } = ui(e);
	return t === "json" || t.endsWith("+json");
}, fi = {
	target: "shell",
	client: "curl",
	title: "Curl",
	generate(e, t) {
		let n = {
			method: "GET",
			...e
		};
		n.method = n.method.toUpperCase();
		let r = ["curl"], i = n.queryString?.length ? "?" + n.queryString.map((e) => `${e.name}=${e.value}`).join("&") : "", a = `${n.url}${i}`, o = /[\s<>[\]{}|\\^%$]/.test(a);
		if (r[0] = `curl ${i || o ? `'${a}'` : a}`, n.method !== "GET" && r.push(`--request ${n.method}`), t?.auth?.username && t?.auth?.password) {
			let e = Y(`${t.auth.username}:${t.auth.password}`);
			r.push(`--user '${e}'`);
		}
		if (n.headers?.length) {
			n.headers.forEach((e) => {
				let t = Y(`${e.name}: ${e.value}`);
				r.push(`--header '${t}'`);
			});
			let e = n.headers.find((e) => e.name.toLowerCase() === "accept-encoding");
			e && /gzip|deflate/.test(e.value) && r.push("--compressed");
		}
		if (n.cookies?.length) {
			let e = Y(n.cookies.map((e) => `${encodeURIComponent(e.name)}=${encodeURIComponent(e.value)}`).join("; "));
			r.push(`--cookie '${e}'`);
		}
		if (n.postData) if (di(n.postData.mimeType)) {
			if (n.postData.text) try {
				let e = JSON.parse(n.postData.text), t = Y(JSON.stringify(e, null, 2));
				r.push(`--data '${t}'`);
			} catch {
				let e = Y(n.postData.text ?? "");
				r.push(`--data '${e}'`);
			}
		} else if (n.postData.mimeType === "application/octet-stream") {
			let e = Y(n.postData.text ?? "");
			r.push(`--data-binary '${e}'`);
		} else if (n.postData.mimeType === "application/x-www-form-urlencoded" && n.postData.params) n.postData.params.forEach((e) => {
			let t = Y(e.value ?? ""), n = Y(encodeURIComponent(e.name));
			r.push(`--data-urlencode '${n}=${t}'`);
		});
		else if (n.postData.mimeType === "multipart/form-data" && n.postData.params) n.postData.params.forEach((e) => {
			let t = Y(e.name), n = e.contentType ? `;type=${e.contentType}` : "";
			if (e.fileName !== void 0) {
				let i = Y(`${e.fileName}${n}`);
				r.push(`--form '${t}=@${i}'`);
			} else {
				let i = e.value ?? "", a = di(e.contentType), o = i;
				if (a && i) try {
					o = JSON.stringify(JSON.parse(i), null, 2);
				} catch {}
				let s = Y(`${o}${n}`);
				r.push(`--form '${t}=${s}'`);
			}
		});
		else try {
			let e = JSON.parse(n.postData.text ?? ""), t = Y(JSON.stringify(e, null, 2));
			r.push(`--data '${t}'`);
		} catch {
			let e = Y(n.postData.text ?? "");
			r.push(`--data '${e}'`);
		}
		return r.join(" \\\n  ");
	}
}, X = (e) => JSON.stringify(e), pi = (e) => {
	let t = 1;
	for (; e.includes(`"""${"#".repeat(t)}`);) t += 1;
	return "#".repeat(t);
}, mi = (e) => {
	try {
		return JSON.stringify(JSON.parse(e), null, 2);
	} catch {
		return e;
	}
}, hi = (e) => encodeURIComponent(e), gi = (e) => e.replace(/\\/g, "\\\\").replace(/"/g, "\\\""), _i = (e) => {
	let t = [
		"let boundary = UUID().uuidString",
		"var body = Data()",
		"",
		"func appendToBody(_ value: String) {",
		"  body.append(value.data(using: .utf8)!)",
		"}",
		""
	];
	return e.forEach((e) => {
		let n = gi(e.name), r = gi(e.fileName ?? ""), i = e.contentType ? gi(e.contentType) : void 0;
		t.push("appendToBody(\"--\\(boundary)\\r\\n\")"), e.fileName === void 0 ? (t.push(`appendToBody(${X(`Content-Disposition: form-data; name="${n}"\r\n`)})`), i && t.push(`appendToBody(${X(`Content-Type: ${i}\r\n`)})`), t.push("appendToBody(\"\\r\\n\")"), t.push(`appendToBody(${X(e.value ?? "")})`), t.push("appendToBody(\"\\r\\n\")")) : (t.push(`appendToBody(${X(`Content-Disposition: form-data; name="${n}"; filename="${r}"\r\n`)})`), i && t.push(`appendToBody(${X(`Content-Type: ${i}\r\n`)})`), t.push("appendToBody(\"\\r\\n\")"), t.push(`appendToBody(${X(`<# File data for ${e.fileName || "file"} #>\r\n`)})`)), t.push("");
	}), t.push("appendToBody(\"--\\(boundary)--\\r\\n\")"), t;
}, vi = {
	target: "swift",
	client: "nsurlsession",
	title: "NSURLSession",
	generate(e, t) {
		if (!e) return "";
		let n = cr(e.method), r = lr(ur(e.url ?? "", e.queryString)), i = dr(e.headers, e.cookies), a = [
			"import Foundation",
			"",
			`var request = URLRequest(url: URL(string: ${X(r)})!)`
		];
		if (a.push(`request.httpMethod = ${X(n)}`), i.forEach((e) => {
			a.push(`request.setValue(${X(e.value)}, forHTTPHeaderField: ${X(e.name)})`);
		}), t?.auth?.username && t?.auth?.password && (a.push(`let credentials = ${X(`${t.auth.username}:${t.auth.password}`)}`), a.push("let encodedCredentials = Data(credentials.utf8).base64EncodedString()"), a.push("request.setValue(\"Basic \\(encodedCredentials)\", forHTTPHeaderField: \"Authorization\")")), e.postData) {
			let { mimeType: t, text: n, params: r } = e.postData;
			if (t === "application/json" && n !== void 0) {
				let e = mi(n), t = pi(e);
				a.push(`let jsonBody = ${t}"""`), a.push(e), a.push(`"""${t}`), a.push("request.httpBody = jsonBody.data(using: .utf8)");
			} else if (t === "application/x-www-form-urlencoded" && r?.length) {
				let e = r.map((e) => `${hi(e.name)}=${hi(e.value ?? "")}`).join("&");
				a.push(`let formBody = ${X(e)}`), a.push("request.httpBody = formBody.data(using: .utf8)");
			} else t === "multipart/form-data" && r?.length ? (a.push(..._i(r)), a.push("request.setValue(\"multipart/form-data; boundary=\\(boundary)\", forHTTPHeaderField: \"Content-Type\")"), a.push("request.httpBody = body")) : t === "application/octet-stream" ? (a.push(`let binaryBody = Data(${X(n ?? "")}.utf8)`), a.push("request.httpBody = binaryBody")) : n !== void 0 && (a.push(`let rawBody = ${X(n)}`), a.push("request.httpBody = rawBody.data(using: .utf8)"));
		}
		return a.push(""), a.push("let (data, response) = try await URLSession.shared.data(for: request)"), a.push(""), a.push("guard let httpResponse = response as? HTTPURLResponse,"), a.push("      200..<300 ~= httpResponse.statusCode else {"), a.push("  throw URLError(.badServerResponse)"), a.push("}"), a.push(""), a.push("print(String(data: data, encoding: .utf8) ?? \"\")"), a.join("\n");
	}
}, yi = (e) => {
	let t = (e) => typeof e == "string" ? e : JSON.stringify(e);
	try {
		let n = e && JSON.parse(e);
		return typeof n != "object" || !n ? [] : Object.entries(n).flatMap(([e, n]) => (Array.isArray(n) ? n : [n]).map((n) => ({
			name: e,
			value: t(n)
		})));
	} catch {
		return [];
	}
}, bi = (e) => e ? Array.from(new URLSearchParams(e).entries()).map(([e, t]) => ({
	name: e,
	value: t
})) : [], Z = {
	headers: [],
	queryString: []
}, xi = (e) => e.charAt(0).toUpperCase() + e.slice(1), Si = (e) => {
	let t = e.security?.find((e) => e.schemes.length > 0);
	if (!t) return Z;
	let n = [], r = [];
	for (let { scheme: e } of t.schemes) switch (e.type) {
		case "apiKey": {
			if (!e.paramName) break;
			let t = {
				name: e.paramName,
				value: "<api-key>"
			};
			e.in === "header" ? n.push(t) : e.in === "query" && r.push(t);
			break;
		}
		case "http": {
			let t = e.scheme?.toLowerCase();
			t === "basic" ? n.push({
				name: "Authorization",
				value: "Basic <credentials>"
			}) : t === "bearer" || !e.scheme ? n.push({
				name: "Authorization",
				value: "Bearer <token>"
			}) : n.push({
				name: "Authorization",
				value: `${xi(e.scheme)} <token>`
			});
			break;
		}
		case "oauth2":
		case "openIdConnect":
			n.push({
				name: "Authorization",
				value: "Bearer <token>"
			});
			break;
	}
	return {
		headers: n,
		queryString: r
	};
}, Ci = ({ operation: e, selectedServer: t, exampleBody: n, resolvedAuth: r }) => {
	let i = n.text ? n.mimeType === "multipart/form-data" ? {
		mimeType: n.mimeType,
		params: yi(n.text)
	} : n.mimeType === "application/x-www-form-urlencoded" ? {
		mimeType: n.mimeType,
		params: bi(n.text)
	} : {
		mimeType: n.mimeType,
		text: n.text
	} : void 0, a = [...n.text ? [{
		name: "Content-Type",
		value: n.mimeType
	}] : [], ...e.parameters?.filter((e) => e.in === "header" && e.required === !0).map((e) => ({
		name: e.name,
		value: e.schema?.default ?? e.examples?.find((e) => e.value)?.value ?? (e.schema?.type === "string" ? "<string>" : e.schema?.type === "number" || e.schema?.type === "integer" ? "<number>" : e.schema?.type === "boolean" ? "<bool>" : "<value>")
	})) ?? []], o = e.parameters?.filter((e) => e.in === "query" && e.required === !0).map((e) => ({
		name: e.name,
		value: e.schema?.default ?? e.examples?.find((e) => e.value)?.value ?? (e.schema?.type === "string" ? "<string>" : e.schema?.type === "number" || e.schema?.type === "integer" ? "<number>" : e.schema?.type === "boolean" ? "<bool>" : "<value>")
	})) ?? [], s = r && (r.headers.length > 0 || r.queryString.length > 0) ? r : Si(e), c = new Set(s.headers.map((e) => e.name.toLowerCase())), l = new Set(s.queryString.map((e) => e.name));
	return {
		method: e.method.toUpperCase(),
		url: re(t, e.path.replaceAll("{", ":").replaceAll("}", "")),
		postData: i,
		headers: [...a.filter((e) => !c.has(e.name.toLowerCase())), ...s.headers],
		queryString: [...o.filter((e) => !l.has(e.name)), ...s.queryString]
	};
}, wi = {
	shell: fi,
	js: zr,
	python: Qr,
	java: Pr,
	go: Er,
	csharp: mr,
	kotlin: Vr,
	objc: Gr,
	php: Jr,
	ruby: ai,
	swift: vi
}, Ti = (e, t) => (wi[t] ?? fi).generate(e) ?? "", Ei = "https://zudoku.invalid/", Di = (e) => Array.from(e.headers.entries()).map(([e, t]) => ({
	name: e,
	value: t
})), Oi = ({ operation: e, schemeName: t, credentials: n }) => {
	let r = n[t];
	if (!r?.isAuthorized) return Z;
	let i = e.security;
	if (!i?.some((e) => e.schemes.some((e) => e.scheme.name === t))) return Z;
	let a = { [t]: r };
	try {
		let e = new Request(Ei);
		_e(e, i, a);
		let t = ye(i, a);
		return {
			headers: Di(e),
			queryString: t.map(([e, t]) => ({
				name: e,
				value: t
			}))
		};
	} catch (e) {
		return console.warn(`[Zudoku] Failed to apply security scheme "${t}" to snippet:`, e), Z;
	}
}, ki = async (e, t) => {
	try {
		let n = new Request(URL.canParse(t) ? t : Ei), r = await e.authorizeRequest(n), i = Array.from(new URL(r.url).searchParams.entries()).map(([e, t]) => ({
			name: e,
			value: t
		}));
		return {
			headers: Di(r),
			queryString: i
		};
	} catch (t) {
		return console.warn(`[Zudoku] Identity "${e.id}" failed to authorize snippet request:`, t), Z;
	}
}, Ai = ({ operation: e, identityId: t, identities: n, url: r }) => {
	let i = le((e) => e.credentials), a = t?.startsWith("__security:") ? t.slice(ge.length) : void 0, o = (0, F.useMemo)(() => a ? Oi({
		operation: e,
		schemeName: a,
		credentials: i
	}) : void 0, [
		e,
		a,
		i
	]), s = t && t !== "__none" && !a ? n?.find((e) => e.id === t) : void 0, { data: c, error: l } = Te({
		enabled: s !== void 0,
		retry: !1,
		queryKey: [
			"resolved-identity-auth",
			s?.id,
			r
		],
		queryFn: () => ki(s, r)
	});
	return l && console.warn("[Zudoku] Failed to resolve auth for snippet:", l), o ?? c ?? Z;
}, ji = ({ operation: e, url: t, securitySchemes: n, showLabel: r }) => {
	let { identities: i, selectedIdentity: a } = bt(), o = fe((e) => e.rememberedIdentity), s = fe((e) => e.setRememberedIdentity), c = le((e) => e.credentials), [l, u] = (0, F.useState)(!1), [d, f] = (0, F.useState)(), p = Ai({
		operation: e,
		identityId: o,
		identities: i,
		url: t
	}), m = p.headers.length > 0 || p.queryString.length > 0, h = se(o), g = h.type === "scheme" && !n.some((e) => e.name === h.name) ? h.name : void 0, _ = g ? { type: "none" } : h;
	if (n.length === 0 && i.length === 0) return null;
	let v = _.type === "scheme" ? _.name : a?.label ?? "Authentication";
	return /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [/* @__PURE__ */ (0, P.jsxs)(ft, {
		open: l,
		onOpenChange: u,
		children: [/* @__PURE__ */ (0, P.jsx)(lt, {
			asChild: !0,
			children: /* @__PURE__ */ (0, P.jsxs)(A, {
				variant: r ? "outline" : "ghost",
				size: r ? "xs" : "icon-xs",
				"aria-label": r ? void 0 : "Select authentication",
				className: j(r && "gap-1.5"),
				children: [m ? /* @__PURE__ */ (0, P.jsx)(pt, { className: "size-4 text-green-600" }) : /* @__PURE__ */ (0, P.jsx)(It, { className: "size-4 text-muted-foreground" }), r && /* @__PURE__ */ (0, P.jsx)("span", {
					className: "text-xs",
					children: v
				})]
			})
		}), /* @__PURE__ */ (0, P.jsxs)(dt, {
			align: "end",
			className: "p-0 w-76 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, P.jsx)("div", {
					className: "px-4 py-2.5 text-xs text-muted-foreground border-b bg-muted/40",
					children: "Selection syncs across endpoints that support it."
				}),
				g && /* @__PURE__ */ (0, P.jsxs)("div", {
					className: "px-4 py-2.5 text-xs text-muted-foreground border-b bg-amber-500/10",
					children: [
						"Selected ",
						/* @__PURE__ */ (0, P.jsx)("code", { children: g }),
						" isn't supported for this endpoint."
					]
				}),
				/* @__PURE__ */ (0, P.jsx)(de, {
					selection: _,
					identities: i,
					onSelectionChange: (e) => {
						s(pe(e)), e.type === "scheme" && !c[e.name]?.isAuthorized && (u(!1), f(e.name));
					},
					securitySchemes: n.length > 0 ? n : void 0,
					securityCredentials: c,
					onConfigureScheme: (e) => {
						u(!1), f(e);
					}
				})
			]
		})]
	}), d && /* @__PURE__ */ (0, P.jsx)(k, {
		securitySchemes: n.filter((e) => e.name === d),
		open: !!d,
		onOpenChange: (e) => {
			e || f(void 0);
		}
	})] });
}, Mi = (0, F.lazy)(() => import("./GraphiQL-C8wWA38Z.js")), Ni = () => {
	import("./GraphiQL-C8wWA38Z.js").catch(() => {}), import("./loadGraphiQLFromCdn-rItPIGYe.js").then((e) => e.n).then((e) => e.loadGraphiQLFromCdn()).catch(() => {});
}, Pi = ({ endpoint: e, operation: t, securitySchemes: n, defaultTabs: r }) => {
	let [i, a] = (0, F.useState)(!1);
	return /* @__PURE__ */ (0, P.jsxs)(oe, {
		onOpenChange: a,
		children: [/* @__PURE__ */ (0, P.jsx)(ae, {
			asChild: !0,
			children: /* @__PURE__ */ (0, P.jsxs)(A, {
				variant: "outline",
				size: "xs",
				className: "group gap-1",
				onMouseEnter: Ni,
				onFocus: Ni,
				children: [/* @__PURE__ */ (0, P.jsx)("span", {
					className: "text-xs text-muted-foreground",
					children: "Test"
				}), /* @__PURE__ */ (0, P.jsx)(Ce, {
					className: "fill-muted-foreground group-hover:fill-foreground transition",
					strokeWidth: 1.5
				})]
			})
		}), /* @__PURE__ */ (0, P.jsxs)(ie, {
			className: "max-w-7xl! w-full h-[80vh] overflow-hidden p-0 flex flex-col gap-0",
			"aria-describedby": void 0,
			showCloseButton: !0,
			children: [/* @__PURE__ */ (0, P.jsxs)("div", {
				className: "flex h-11 shrink-0 items-center justify-between gap-2 border-b ps-10 pe-3",
				children: [/* @__PURE__ */ (0, P.jsx)(D, {
					className: "text-sm font-medium",
					children: "GraphQL Playground"
				}), /* @__PURE__ */ (0, P.jsx)(ji, {
					operation: t,
					url: e,
					securitySchemes: n,
					showLabel: !0
				})]
			}), i && /* @__PURE__ */ (0, P.jsx)(F.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, P.jsx)("div", {
					className: "flex-1 min-h-0",
					children: /* @__PURE__ */ (0, P.jsx)(Mi, {
						endpoint: e,
						defaultTabs: r,
						security: t.security
					})
				})
			})]
		})]
	});
}, Fi = (e) => e.security ? Array.from(new Map(e.security.flatMap((e) => e.schemes.map((e) => [e.scheme.name, e.scheme]))).values()) : [], Ii = (e) => {
	if (typeof e == "string") return e.split("/").pop();
}, Li = ({ server: e, servers: t, operation: n, examples: r }) => {
	let i = n.parameters?.filter((e) => e.in === "header").sort((e, t) => Number(t.required ?? !1) - Number(e.required ?? !1)).map((e) => ({
		name: e.name,
		defaultValue: e.schema?.default ?? e.examples?.find((e) => e.value)?.value ?? "",
		defaultActive: e.required ?? !1,
		isRequired: e.required ?? !1,
		enum: e.schema?.type === "array" ? e.schema?.items?.enum : e.schema?.enum,
		type: e.schema?.type ?? "string"
	})), a = n.parameters?.filter((e) => e.in === "query").sort((e, t) => Number(t.required ?? !1) - Number(e.required ?? !1)).map((e) => ({
		name: e.name,
		defaultActive: e.required ?? !1,
		isRequired: e.required ?? !1,
		enum: e.schema?.type === "array" ? e.schema?.items?.enum : e.schema?.enum,
		type: e.schema?.type ?? "string",
		defaultValue: Array.isArray(e.schema?.default) ? JSON.stringify(e.schema.default) : e.schema?.default,
		style: e.style ?? void 0,
		explode: e.explode ?? void 0,
		allowReserved: e.allowReserved ?? void 0
	})), o = n.parameters?.filter((e) => e.in === "path").map((e) => ({
		name: e.name,
		defaultValue: e.schema?.default
	})), { options: s } = d(), c = s?.disableSecurity ? [] : Fi(n), l = Object.fromEntries(n.responses.map((e) => {
		let t = e.content?.find((e) => e.mediaType.includes("json"))?.schema, n = Ii(t?.__$ref) ?? t?.title;
		return [e.statusCode, n];
	}));
	return /* @__PURE__ */ (0, P.jsx)(be, {
		server: e,
		servers: t,
		method: n.method,
		url: n.path,
		headers: i,
		queryParams: a,
		pathParams: o,
		examples: r,
		security: s?.disableSecurity ? void 0 : n.security ?? void 0,
		securitySchemes: c,
		responseSchemas: l
	});
}, Ri = ({ content: e, description: t, onExampleChange: n, selectedContentIndex: r, selectedExampleIndex: i, isOnScreen: a, shouldLazyHighlight: c }) => {
	let l = e[r], u = l?.examples ?? [], d = u?.[i], f = ve(l?.mediaType, d?.value), p = me(l?.mediaType);
	return /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [/* @__PURE__ */ (0, P.jsxs)(Gn, {
		className: "p-0",
		children: [d?.externalValue ? /* @__PURE__ */ (0, P.jsx)("div", {
			className: "p-4",
			children: /* @__PURE__ */ (0, P.jsxs)("a", {
				href: d.externalValue,
				target: "_blank",
				rel: "noopener noreferrer",
				className: "text-xs text-primary hover:underline",
				children: ["View External Example", /* @__PURE__ */ (0, P.jsx)(s, { className: "size-3 inline-block ms-1 align-[-0.125em]" })]
			})
		}) : c && !a && f ? /* @__PURE__ */ (0, P.jsx)(Yn, { code: f }) : f ? /* @__PURE__ */ (0, P.jsx)(N, {
			embedded: !0,
			language: p,
			className: "[--scrollbar-color:gray] rounded-none max-h-[200px] text-xs overflow-auto",
			code: f
		}) : /* @__PURE__ */ (0, P.jsx)("div", {
			className: "grid place-items-center text-xs text-muted-foreground min-h-18",
			children: "No example specified for this content type"
		}), d?.description && /* @__PURE__ */ (0, P.jsx)("div", {
			className: "border-t text-xs px-3 py-1.5 text-muted-foreground",
			children: d.description
		})]
	}), /* @__PURE__ */ (0, P.jsxs)(Kn, {
		className: "text-xs",
		children: [t && /* @__PURE__ */ (0, P.jsx)("div", {
			className: "text-muted-foreground text-xs px-1 py-2",
			children: t
		}), (u.length !== 0 || e.length !== 0) && /* @__PURE__ */ (0, P.jsxs)("div", {
			className: "flex items-center gap-2 justify-between min-w-0",
			children: [/* @__PURE__ */ (0, P.jsx)("div", {
				className: "flex items-center gap-2 flex-wrap",
				children: e.length > 1 ? /* @__PURE__ */ (0, P.jsx)(I, {
					className: "text-xs h-fit py-1 truncate bg-background",
					value: r.toString(),
					onChange: (e) => n?.({
						contentTypeIndex: Number(e.target.value),
						exampleIndex: 0
					}),
					children: e.map((e, t) => /* @__PURE__ */ (0, P.jsx)(L, {
						value: t.toString(),
						children: e.mediaType
					}, e.mediaType))
				}) : /* @__PURE__ */ (0, P.jsx)(o, {
					className: "text-[11px] font-mono font-normal",
					variant: "outline",
					children: e[0]?.mediaType
				})
			}), u.length > 1 && /* @__PURE__ */ (0, P.jsx)(I, {
				className: "text-xs h-fit py-1 truncate bg-background",
				value: i.toString(),
				onChange: (e) => n?.({
					contentTypeIndex: r,
					exampleIndex: Number(e.target.value)
				}),
				children: u.map((e, t) => /* @__PURE__ */ (0, P.jsx)(L, {
					value: t.toString(),
					children: e.summary || e.name || e.description || `Example ${t + 1}`
				}, e.summary || e.name || e.description || `Example ${t + 1}`))
			})]
		})]
	})] });
}, zi = ({ content: e, onExampleChange: t, isOnScreen: n, shouldLazyHighlight: r, selectedContentIndex: i, selectedExampleIndex: a }) => e.length === 0 ? null : /* @__PURE__ */ (0, P.jsx)(Ne, {
	className: "group/collapsible",
	defaultOpen: !0,
	children: /* @__PURE__ */ (0, P.jsxs)(Un, { children: [/* @__PURE__ */ (0, P.jsx)(Wn, {
		className: "text-xs flex justify-between items-center",
		children: /* @__PURE__ */ (0, P.jsxs)("span", {
			className: "flex items-center gap-1 font-medium",
			children: [/* @__PURE__ */ (0, P.jsx)(je, {
				asChild: !0,
				children: /* @__PURE__ */ (0, P.jsxs)(A, {
					variant: "ghost",
					className: "size-fit px-1 py-1 -my-1",
					"aria-label": "Toggle request body examples",
					children: [/* @__PURE__ */ (0, P.jsx)(Se, { className: "size-[1em] group-data-[state=closed]/collapsible:hidden" }), /* @__PURE__ */ (0, P.jsx)(ce, { className: "size-[1em] group-data-[state=open]/collapsible:hidden" })]
				})
			}), "Example Request Body"]
		})
	}), /* @__PURE__ */ (0, P.jsx)(Oe, { children: /* @__PURE__ */ (0, P.jsx)(Ri, {
		selectedContentIndex: i,
		selectedExampleIndex: a,
		content: e,
		onExampleChange: t,
		isOnScreen: n,
		shouldLazyHighlight: r
	}) })] })
}), Bi = ({ responses: e, selectedResponse: t, isOnScreen: r, shouldLazyHighlight: i }) => {
	let [a, o] = (0, F.useState)(t ?? e[0]?.statusCode), [s, c] = (0, F.useState)(0), [l, u] = (0, F.useState)(0);
	(0, F.useEffect)(() => {
		t && o(t);
	}, [t]), (0, F.useEffect)(() => {
		a && (c(0), u(0));
	}, [a]);
	let d = e.find((e) => e.statusCode === a)?.content ?? [], f = d[s]?.isGenerated;
	return /* @__PURE__ */ (0, P.jsx)(Ne, {
		className: "group/collapsible",
		defaultOpen: !0,
		children: /* @__PURE__ */ (0, P.jsxs)(Un, { children: [/* @__PURE__ */ (0, P.jsxs)(Wn, {
			className: "text-xs flex justify-between items-center",
			children: [/* @__PURE__ */ (0, P.jsxs)("div", {
				className: "flex items-center gap-1 font-medium shrink-0",
				children: [
					/* @__PURE__ */ (0, P.jsx)(je, {
						asChild: !0,
						children: /* @__PURE__ */ (0, P.jsxs)(A, {
							variant: "ghost",
							className: "size-fit px-1 py-1 -my-1",
							"aria-label": "Toggle response examples",
							children: [/* @__PURE__ */ (0, P.jsx)(Se, { className: "size-[1em] group-data-[state=closed]/collapsible:hidden" }), /* @__PURE__ */ (0, P.jsx)(ce, { className: "size-[1em] group-data-[state=open]/collapsible:hidden" })]
						})
					}),
					"Example Responses",
					f && /* @__PURE__ */ (0, P.jsx)(De, { children: /* @__PURE__ */ (0, P.jsxs)(Pe, { children: [/* @__PURE__ */ (0, P.jsx)(Ae, {
						asChild: !0,
						children: /* @__PURE__ */ (0, P.jsx)(n, { size: 13 })
					}), /* @__PURE__ */ (0, P.jsx)(Ee, { children: "This example is auto-generated from the schema." })] }) })
				]
			}), /* @__PURE__ */ (0, P.jsx)("div", {
				className: "group-data-[state=closed]/collapsible:invisible",
				children: /* @__PURE__ */ (0, P.jsx)(I, {
					className: "text-xs h-fit py-1 -my-1 bg-background",
					value: a,
					onChange: (e) => o(e.target.value),
					children: e.map((e) => /* @__PURE__ */ (0, P.jsx)(L, {
						value: e.statusCode,
						children: e.statusCode
					}, e.statusCode))
				})
			})]
		}), /* @__PURE__ */ (0, P.jsx)(Oe, { children: /* @__PURE__ */ (0, P.jsx)(Ri, {
			selectedContentIndex: s,
			selectedExampleIndex: l,
			onExampleChange: (e) => {
				c(e.contentTypeIndex), u(e.exampleIndex);
			},
			content: d,
			isOnScreen: r,
			shouldLazyHighlight: i
		}) })] })
	});
}, Vi = (e) => e.type === "integer" || e.format === "int32" || e.format === "int64", Hi = (e) => {
	let t = typeof e.exclusiveMinimum == "number" ? e.exclusiveMinimum : typeof e.minimum == "number" ? e.minimum : void 0, n = typeof e.exclusiveMaximum == "number" ? e.exclusiveMaximum : typeof e.maximum == "number" ? e.maximum : void 0, r = Vi(e) ? 1 : .1, i = typeof e.exclusiveMinimum == "number" ? r : 0, a = typeof e.exclusiveMaximum == "number" ? r : 0;
	return t !== void 0 && t >= 0 ? t + i : n !== void 0 && n <= 0 ? n - a : 0;
}, Ui = (e, t) => {
	let n = t || "string", r = e.minLength ?? 0;
	return n.length >= r ? n : n.padEnd(r, "a");
}, Q = (e, t) => {
	if (!e || Qe(e)) return null;
	if (e.example !== void 0) return e.example;
	if (e.examples && typeof e.examples == "object" && "default" in e.examples) {
		let t = e.examples.default;
		if (t !== null) return typeof t == "object" && "value" in t ? t.value : t;
	}
	if (e.const !== void 0) return e.const;
	if (e.default !== void 0) return e.default;
	let n = Array.isArray(e.type) ? e.type.find((e) => e !== "null") ?? e.type[0] : e.type;
	if (e.examples && Array.isArray(e.examples) && e.examples.length > 0) return e.examples[0];
	if (n === "object" && e.properties) {
		let t = {};
		for (let [n, r] of Object.entries(e.properties)) typeof r == "object" && (t[n] = Q(r, n));
		return t;
	}
	if (n === "object" && !e.properties && e.additionalProperties && typeof e.additionalProperties == "object") return { key: Q(e.additionalProperties) };
	if (n === "array" && "items" in e) return Array.isArray(e.items) ? e.items.map((e) => Q(e)) : e.items ? [Q(e.items)] : [];
	if (n === "array") return [];
	if (e.format !== void 0) switch (e.format) {
		case "date-time": return "2024-08-25T15:00:00Z";
		case "date": return "2024-08-25";
		case "time": return "15:00:00";
		case "email": return "test@example.com";
		case "uri": return "https://www.example.com/path/to/resource";
		case "uri-reference": return "/path/to/resource";
		case "uuid": return "00000000-0000-0000-0000-000000000000";
		case "ipv4": return "192.168.1.1";
		case "ipv6": return "2001:0db8:85a3:0000:0000:8a2e:0370:7334";
		case "hostname": return "example.com";
		case "password": return "********";
		case "byte": return "U3dhZ2dlcg==";
		case "binary": return "<binary>";
		case "duration": return "P3D";
		case "int32":
		case "int64":
		case "float":
		case "double": return Hi(e);
	}
	if (e.enum) return e.enum[0];
	if (e.oneOf && e.oneOf.length > 0) return Q(e.oneOf.find((e) => e.type !== "null") ?? e.oneOf[0]);
	if (e.anyOf && e.anyOf.length > 0) return Q(e.anyOf.find((e) => e.type !== "null") ?? e.anyOf[0]);
	switch (n) {
		case "string": return Ui(e, t);
		case "number":
		case "integer": return Hi(e);
		case "boolean": return !0;
		case "null": return null;
		case "object": return {};
		default: return {};
	}
}, Wi = m([p(!0), _({
	endpoint: g(h()),
	schema: g(h())
})]), Gi = (e) => {
	let t = e.extensions?.["x-graphql"];
	if (t === void 0) return;
	let n = Wi.safeParse(t);
	if (n.success) return n.data === !0 ? {} : n.data;
}, $ = {
	green: "text-green-600",
	blue: "text-sky-600",
	yellow: "text-yellow-600",
	red: "text-red-600",
	purple: "text-purple-600",
	indigo: "text-indigo-600",
	gray: "text-gray-600"
}, Ki = {
	get: $.green,
	post: $.blue,
	put: $.yellow,
	delete: $.red,
	patch: $.purple,
	options: $.indigo,
	head: $.gray,
	trace: $.gray
}, qi = (e) => Ki[e.toLocaleLowerCase()] ?? $.gray;
f("\n  query getServerQuery($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      url\n      servers {\n        url\n      }\n    }\n  }\n");
var Ji = [
	{
		value: "shell",
		label: "cURL"
	},
	{
		value: "js",
		label: "JavaScript"
	},
	{
		value: "python",
		label: "Python"
	},
	{
		value: "java",
		label: "Java"
	},
	{
		value: "go",
		label: "Go"
	},
	{
		value: "csharp",
		label: "C#"
	},
	{
		value: "kotlin",
		label: "Kotlin"
	},
	{
		value: "objc",
		label: "Objective-C"
	},
	{
		value: "php",
		label: "PHP"
	},
	{
		value: "ruby",
		label: "Ruby"
	},
	{
		value: "swift",
		label: "Swift"
	}
], Yi = (e) => {
	if (typeof e != "object" || !e) return !1;
	let { lang: t, label: n, source: r } = e;
	return typeof t == "string" && typeof r == "string" && (n === void 0 || typeof n == "string");
}, Xi = (e) => {
	let t = e?.["x-code-samples"] ?? e?.["x-codeSamples"];
	if (!Array.isArray(t) || t.length === 0) return;
	let n = t.filter(Yi);
	return n.length > 0 ? n : void 0;
}, Zi = ({ operation: e, selectedResponse: t, globalSelectedServer: n, shouldLazyHighlight: r }) => {
	let { options: i } = d(), a = yt(), s = _t(), c = qi(e.method), [l, u] = ee(), [, f] = (0, F.useTransition)(), p = Xi(e.extensions), m = p ? p.map((e) => ({
		value: e.lang,
		label: e.label ?? e.lang
	})) : i?.supportedLanguages ?? Ji, h = l.get("lang") ?? i?.examplesLanguage ?? "shell", g = m.find((e) => e.value === h)?.value ?? m.at(0)?.value ?? "shell", _ = e.requestBody?.content, v = _ && i?.transformExamples ? i.transformExamples({
		auth: a,
		type: "request",
		operation: e,
		content: _,
		context: s
	}) : _, [y, b] = (0, F.useState)({
		contentTypeIndex: 0,
		exampleIndex: 0
	}), x = v?.at(y.contentTypeIndex), S = x?.examples?.at(y.exampleIndex), C = S ? S?.value ?? S : x?.schema ? Q(x?.schema) : void 0, w = /* @__PURE__ */ (0, P.jsx)(he, {
		path: e.path,
		renderParam: ({ name: t }) => /* @__PURE__ */ (0, P.jsx)(xe, {
			name: t,
			backgroundOpacity: "0",
			className: "py-px px-0.5",
			slug: `${e.slug}-${t}`,
			children: `{${t}}`
		})
	}), T = n || e.servers.at(0)?.url || "", te = re(T, e.path), ne = (0, F.useMemo)(() => i?.disableSecurity ? [] : Fi(e), [e, i?.disableSecurity]), E = vt(), D = Ai({
		operation: e,
		identityId: fe((e) => e.rememberedIdentity),
		identities: (0, F.useMemo)(() => E.data ?? [], [E.data]),
		url: te
	}), ie = D.headers.length > 0 || D.queryString.length > 0, ae = Gi(e), O = ae !== void 0, oe = (0, F.useMemo)(() => p && !ie ? p.find((e) => e.lang === g)?.source : i?.generateCodeSnippet?.({
		selectedLang: g,
		selectedServer: T,
		context: s,
		operation: e,
		example: C,
		auth: a,
		resolvedAuth: D
	}) || Ti(Ci({
		operation: e,
		selectedServer: T,
		exampleBody: O || !C ? { mimeType: x?.mediaType ?? "application/json" } : {
			mimeType: x?.mediaType ?? "application/json",
			text: ve(x?.mediaType, C) ?? ""
		},
		resolvedAuth: D
	}), g), [
		p,
		C,
		e,
		T,
		g,
		x,
		i,
		a,
		s,
		D,
		ie,
		O
	]), [se, k] = qn({ rootMargin: "200px 0px 200px 0px" }), ce = k && (e.extensions["x-explorer-enabled"] === !0 || e.extensions["x-zudoku-playground-enabled"] === !0 || e.extensions["x-explorer-enabled"] === void 0 && e.extensions["x-zudoku-playground-enabled"] === void 0 && !i?.disablePlayground), le = e.responses.some((e) => e.content?.some((e) => (e.examples?.length ?? 0) > 0)), ue = O && v ? v.map((e) => ({
		...e,
		mediaType: "application/graphql",
		examples: e.examples?.map((e) => {
			let t = e.value;
			return {
				...e,
				value: t && typeof t.query == "string" ? t.query : e.value
			};
		})
	})) : void 0, de = O ? v?.flatMap((e) => e.examples ?? []).flatMap((e) => {
		let t = e.value;
		return !t || typeof t.query != "string" ? [] : [{
			query: t.query,
			variables: t.variables === void 0 ? void 0 : JSON.stringify(t.variables, null, 2)
		}];
	}) : void 0;
	return /* @__PURE__ */ (0, P.jsxs)("aside", {
		ref: se,
		className: "flex flex-col sticky top-(--scroll-padding) gap-4",
		"data-pagefind-ignore": "all",
		children: [
			/* @__PURE__ */ (0, P.jsxs)(Un, { children: [
				/* @__PURE__ */ (0, P.jsx)(Wn, {
					className: "py-1.5",
					children: /* @__PURE__ */ (0, P.jsxs)("div", {
						className: "flex items-center flex-wrap gap-2 justify-between w-full",
						children: [/* @__PURE__ */ (0, P.jsxs)("span", {
							className: "font-mono wrap-break-word leading-6 space-x-1",
							children: [/* @__PURE__ */ (0, P.jsx)(o, {
								variant: "outline",
								className: j(c, "px-1.5 rounded-md border-none bg-current/7 dark:bg-current/15"),
								children: e.method.toUpperCase()
							}), w]
						}), ce && (O ? /* @__PURE__ */ (0, P.jsx)(Pi, {
							endpoint: ae?.endpoint ?? te,
							operation: e,
							securitySchemes: ne,
							defaultTabs: de && de.length > 0 ? de : void 0
						}) : /* @__PURE__ */ (0, P.jsx)(Li, {
							servers: e.servers.map((e) => e.url),
							operation: e,
							examples: _ ?? void 0
						}))]
					})
				}),
				/* @__PURE__ */ (0, P.jsx)(Gn, { children: r && !k ? /* @__PURE__ */ (0, P.jsx)(Yn, { code: oe ?? "" }) : /* @__PURE__ */ (0, P.jsx)(N, {
					embedded: !0,
					language: g,
					showLanguageIndicator: !1,
					className: "[--scrollbar-color:gray] rounded-none text-xs max-h-50",
					code: oe
				}) }),
				/* @__PURE__ */ (0, P.jsxs)(Kn, {
					className: "text-xs self-end flex justify-between items-center gap-2",
					children: [/* @__PURE__ */ (0, P.jsx)(I, {
						className: "text-xs h-fit py-1 max-w-32 truncate bg-background",
						value: g,
						onChange: (e) => {
							f(() => {
								u((t) => (t.set("lang", e.target.value), t));
							});
						},
						children: m.map((e) => /* @__PURE__ */ (0, P.jsx)(L, {
							value: e.value,
							children: e.label
						}, e.value))
					}), /* @__PURE__ */ (0, P.jsx)(ji, {
						operation: e,
						url: te,
						securitySchemes: ne
					})]
				})
			] }),
			v && S ? /* @__PURE__ */ (0, P.jsx)(zi, {
				content: ue ?? v,
				onExampleChange: (e) => {
					b(e);
				},
				selectedContentIndex: y.contentTypeIndex,
				selectedExampleIndex: y.exampleIndex,
				isOnScreen: k,
				shouldLazyHighlight: r
			}) : !O && v && C ? /* @__PURE__ */ (0, P.jsx)(Xn, {
				isOnScreen: k,
				shouldLazyHighlight: r,
				language: me(x?.mediaType),
				code: ve(x?.mediaType, C) ?? ""
			}) : null,
			(le || !O) && /* @__PURE__ */ (0, P.jsx)(Bi, {
				isOnScreen: k,
				shouldLazyHighlight: r,
				selectedResponse: t,
				responses: e.responses.map((t) => {
					let n = t.content && i?.transformExamples ? i.transformExamples({
						auth: a,
						type: "response",
						context: s,
						operation: e,
						content: t.content
					}) : t.content;
					return {
						...t,
						content: n?.map((e) => (e.examples?.length ?? 0) > 0 || O || !e.schema ? e : {
							...e,
							examples: [{
								name: "",
								value: Q(e.schema)
							}],
							isGenerated: !0
						})
					};
				})
			})
		]
	});
}, Qi = [
	"path",
	"query",
	"header",
	"cookie"
], $i = ({ operationFragment: e, globalSelectedServer: t, shouldLazyHighlight: n }) => {
	let a = Lt(ta, e), s = Object.groupBy(a.parameters ?? [], (e) => e.in), { options: c } = d(), l = t || a.servers.at(0)?.url, [u, f] = (0, F.useState)(a.responses.at(0)?.statusCode), p = a.extensions?.["x-mcp-server"] !== void 0, m = Gi(a) !== void 0, h = /* @__PURE__ */ (0, P.jsx)(i, {
		level: 2,
		id: a.slug,
		registerNavigationAnchor: !0,
		className: j("break-all", !m && "col-span-full"),
		children: a.summary
	}), g = !p && /* @__PURE__ */ (0, P.jsxs)("div", {
		className: j("flex flex-col gap-1.5", !m && "col-span-full"),
		children: [/* @__PURE__ */ (0, P.jsxs)("div", {
			className: "text-sm flex gap-2 font-mono",
			children: [/* @__PURE__ */ (0, P.jsx)("span", {
				className: qi(a.method),
				children: a.method.toUpperCase()
			}), /* @__PURE__ */ (0, P.jsxs)(ot, {
				className: "max-w-full truncate flex cursor-pointer",
				children: [l && /* @__PURE__ */ (0, P.jsx)("div", {
					className: "text-neutral-400 dark:text-neutral-500 truncate",
					children: l.replace(/\/$/, "")
				}), /* @__PURE__ */ (0, P.jsx)("div", {
					className: "text-neutral-900 dark:text-neutral-200",
					children: a.path
				})]
			})]
		}), !c?.disableSecurity && /* @__PURE__ */ (0, P.jsx)(Hn, { security: a.security })]
	}), _ = a.description && /* @__PURE__ */ (0, P.jsx)(M, {
		className: "max-w-full prose-img:max-w-prose",
		content: a.description
	});
	return /* @__PURE__ */ (0, P.jsxs)("div", { children: [a.deprecated && /* @__PURE__ */ (0, P.jsx)(o, {
		variant: "muted",
		className: "text-xs mb-4",
		children: "deprecated"
	}), /* @__PURE__ */ (0, P.jsxs)("div", {
		className: j("grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,3fr)] gap-x-8 gap-y-4 items-start", a.deprecated && "opacity-50 transition hover:opacity-100"),
		children: [m ? /* @__PURE__ */ (0, P.jsxs)("div", {
			className: "flex flex-col gap-4 min-w-0",
			children: [
				h,
				g,
				_
			]
		}) : /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [
			h,
			g,
			p ? /* @__PURE__ */ (0, P.jsx)("div", {
				className: "col-span-full",
				children: /* @__PURE__ */ (0, P.jsx)(cn, {
					serverUrl: l,
					operationPath: a.path,
					summary: a.summary ?? void 0,
					data: a.extensions?.["x-mcp-server"]
				})
			}) : /* @__PURE__ */ (0, P.jsxs)("div", {
				className: j("flex flex-col gap-4", c?.disableSidecar && "col-span-full"),
				children: [
					_,
					a.parameters && a.parameters.length > 0 && Qi.flatMap((e) => s[e]?.length ? /* @__PURE__ */ (0, P.jsx)(dn, {
						summary: a.summary ?? void 0,
						id: a.slug,
						parameters: s[e],
						group: e
					}, e) : []),
					Ut(a.requestBody?.content?.at(0)?.schema, () => /* @__PURE__ */ (0, P.jsx)(r, { className: "my-4" })),
					Ut(a.requestBody?.content?.at(0)?.schema, (e) => /* @__PURE__ */ (0, P.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [/* @__PURE__ */ (0, P.jsxs)(i, {
							level: 3,
							className: "capitalize flex items-center gap-2",
							id: `${a.slug}/request-body`,
							children: [
								a.summary && /* @__PURE__ */ (0, P.jsxs)(Ct, { children: [
									a.summary,
									" ›",
									" "
								] }),
								"Request Body",
								" ",
								a.requestBody?.required === !1 ? /* @__PURE__ */ (0, P.jsx)(o, {
									variant: "muted",
									children: "optional"
								}) : ""
							]
						}), /* @__PURE__ */ (0, P.jsx)(st, { schema: e })]
					})),
					/* @__PURE__ */ (0, P.jsx)(r, { className: "my-4" }),
					a.responses.length > 0 && /* @__PURE__ */ (0, P.jsxs)(P.Fragment, { children: [/* @__PURE__ */ (0, P.jsxs)(i, {
						level: 3,
						id: `${a.slug}/responses`,
						children: [a.summary && /* @__PURE__ */ (0, P.jsxs)(Ct, { children: [
							a.summary,
							" ›",
							" "
						] }), "Responses"]
					}), /* @__PURE__ */ (0, P.jsx)(Wt, {
						responses: a.responses,
						selectedResponse: u,
						onSelectResponse: f
					})] })
				]
			})
		] }), Ut(!c?.disableSidecar && !p, () => {
			let e = /* @__PURE__ */ (0, P.jsx)(Zi, {
				selectedResponse: u,
				operation: a,
				globalSelectedServer: t,
				shouldLazyHighlight: n
			});
			return m ? /* @__PURE__ */ (0, P.jsx)("div", {
				className: "min-w-0",
				children: e
			}) : e;
		})]
	}, a.operationId)] });
};
//#endregion
//#region src/lib/plugins/openapi/util/sanitizeMarkdownForMetatag.tsx
function ea(e, t = 160) {
	return e ? e.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/!\[.*?\]\(.*?\)/g, "").replace(/[_*`~]/g, "").replace(/^(?:>|\s*#+|-{3,}|\*{3,})/gm, "").replace(/[|>{}[\]]/g, "").replace(/\s+/g, " ").trim().substring(0, t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : "";
}
//#endregion
//#region src/lib/plugins/openapi/OperationList.tsx
var ta = f("\n  fragment OperationsFragment on OperationItem {\n    slug\n    summary\n    method\n    description\n    operationId\n    contentTypes\n    path\n    deprecated\n    extensions\n    servers {\n      url\n      description\n    }\n    parameters {\n      name\n      in\n      description\n      required\n      schema\n      style\n      explode\n      allowReserved\n      examples {\n        name\n        description\n        externalValue\n        value\n        summary\n      }\n    }\n    security {\n      schemes {\n        scopes\n        scheme {\n          name\n          type\n          description\n          in\n          paramName\n          scheme\n          bearerFormat\n          openIdConnectUrl\n          flows {\n            implicit {\n              authorizationUrl\n              scopes {\n                name\n                description\n              }\n            }\n            password {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            clientCredentials {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            authorizationCode {\n              authorizationUrl\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n          }\n        }\n      }\n    }\n    requestBody {\n      content {\n        mediaType\n        encoding {\n          name\n        }\n        examples {\n          name\n          description\n          externalValue\n          value\n          summary\n        }\n        schema\n      }\n      description\n      required\n    }\n    responses {\n      statusCode\n      links\n      description\n      content {\n        examples {\n          name\n          description\n          externalValue\n          value\n          summary\n        }\n        mediaType\n        encoding {\n          name\n        }\n        schema\n      }\n    }\n  }\n"), na = f("\n  query OperationsForTag(\n    $input: JSON!\n    $type: SchemaType!\n    $tag: String\n    $untagged: Boolean\n  ) {\n    schema(input: $input, type: $type) {\n      servers {\n        url\n      }\n      description\n      summary\n      title\n      url\n      version\n      tag(slug: $tag, untagged: $untagged) {\n        name\n        description\n        operations {\n          slug\n          ...OperationsFragment\n        }\n        extensions\n        next {\n          name\n          slug\n          extensions\n        }\n        prev {\n          name\n          slug\n          extensions\n        }\n      }\n    }\n  }\n"), ra = 30, ia = ({ tag: e, untagged: t }) => {
	let { input: n, type: r } = d(), { tag: i } = te(), o = ne(y(na, {
		input: n,
		type: r,
		tag: e ?? i,
		untagged: t
	})).data.schema, { selectedServer: s } = ue(o.servers), c = o.title, l = o.summary, u = o.description, { prev: f, next: p } = gt();
	if (Nt(), vt(), !o.tag) return e || i || t ? /* @__PURE__ */ (0, P.jsx)(T, {
		to: "..",
		replace: !0
	}) : /* @__PURE__ */ (0, P.jsxs)("div", {
		className: "flex flex-col h-full items-center justify-center text-center",
		"data-pagefind-ignore": "all",
		children: [/* @__PURE__ */ (0, P.jsx)("div", {
			className: "text-muted-foreground font-medium",
			children: "No operations found"
		}), /* @__PURE__ */ (0, P.jsx)("div", {
			className: "mt-2 text-sm text-muted-foreground",
			children: "This API doesn't have any operations defined yet."
		})]
	});
	let { operations: m, next: h, prev: g, description: _ } = o.tag, v = m.length > ra, b = _ ? ea(_) : l || (u ? ea(u) : void 0), x = {
		prev: g ? {
			to: `../${g.slug}`,
			label: g.extensions?.["x-displayName"] ?? g.name
		} : f ? {
			to: f.id,
			label: f.label
		} : void 0,
		next: h ? {
			to: `../${h.slug ?? "~endpoints"}`,
			label: h.extensions?.["x-displayName"] ?? h.name ?? "Other endpoints"
		} : p ? {
			to: p.id,
			label: p.label
		} : void 0
	}, S = t ? "Other endpoints" : o.tag.extensions?.["x-displayName"] ?? o.tag.name, C = [S, c].filter(Boolean).join(" - ");
	return /* @__PURE__ */ (0, P.jsxs)("div", {
		className: "pt-(--padding-content-top)",
		"data-pagefind-filter": "section:openapi",
		"data-pagefind-meta": "section:openapi",
		children: [
			/* @__PURE__ */ (0, P.jsx)(Ct, {
				name: "category",
				children: c
			}),
			/* @__PURE__ */ (0, P.jsxs)(a, { children: [C && /* @__PURE__ */ (0, P.jsx)("title", { children: C }), b && /* @__PURE__ */ (0, P.jsx)("meta", {
				name: "description",
				content: b
			})] }),
			/* @__PURE__ */ (0, P.jsxs)("div", {
				className: "mb-8",
				children: [/* @__PURE__ */ (0, P.jsx)(St, {
					title: c,
					heading: S,
					tag: e ?? i,
					children: /* @__PURE__ */ (0, P.jsx)(Ht, {})
				}), _ && /* @__PURE__ */ (0, P.jsx)(M, {
					className: "my-4 max-w-full prose-img:max-w-prose",
					content: _
				})]
			}),
			/* @__PURE__ */ (0, P.jsx)("hr", {}),
			/* @__PURE__ */ (0, P.jsxs)("div", {
				className: "px-6 mt-6 -mx-6 [content-visibility:auto]",
				children: [m.map((e) => /* @__PURE__ */ (0, P.jsxs)("div", { children: [/* @__PURE__ */ (0, P.jsx)($i, {
					operationFragment: e,
					globalSelectedServer: s,
					shouldLazyHighlight: v
				}), /* @__PURE__ */ (0, P.jsx)("hr", { className: "my-10" })] }, e.slug)), /* @__PURE__ */ (0, P.jsx)(Rt, {
					className: "mb-4",
					...x
				})]
			})
		]
	});
};
//#endregion
export { ia as OperationList };
