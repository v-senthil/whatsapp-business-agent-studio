import { l as e, n as t, s as n, t as r } from "./Badge-CRio92UV.js";
import { Ht as i, Lt as a, Nt as o, Rt as s, n as c, zt as l } from "./main-CQFzjeJU.js";
import { a as u, g as d, n as f, r as p } from "./joinUrl-51baNiN4.js";
import { t as m } from "./jsx-runtime-Bcg76ucg.js";
import { t as h } from "./createLucideIcon-CE5nuOQr.js";
import { a as g, c as _, i as v, n as y, r as b, s as x, t as S } from "./Card-chFzX4gv.js";
import { t as C } from "./Button-dzS4XgUY.js";
import { t as w } from "./cn-yMl495m5.js";
import { t as T } from "./Markdown-DNJarfnl.js";
import { c as E, i as D, l as O, n as k, r as A, s as j, t as M } from "./Item-zp4umt1t.js";
import { t as N } from "./slugify-DPAwprLU.js";
import { t as P } from "./useWarmupSchema-BZtZAwvd.js";
var F = h("globe", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
		key: "13o1zl"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}]
]), I = h("mail", [["path", {
	d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
	key: "132q7q"
}], ["rect", {
	x: "2",
	y: "4",
	width: "20",
	height: "16",
	rx: "2",
	key: "izxlao"
}]]), L = h("tag", [["path", {
	d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
	key: "vktsd0"
}], ["circle", {
	cx: "7.5",
	cy: "7.5",
	r: ".5",
	fill: "currentColor",
	key: "kqv944"
}]]), R = h("webhook", [
	["path", {
		d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",
		key: "q3hayz"
	}],
	["path", {
		d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",
		key: "1go1hn"
	}],
	["path", {
		d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",
		key: "qlwsc0"
	}]
]), z = m(), B = s("\n  query SchemaInfo($input: JSON!, $type: SchemaType!) {\n    schema(input: $input, type: $type) {\n      servers {\n        url\n        description\n      }\n      license {\n        name\n        url\n        identifier\n      }\n      termsOfService\n      externalDocs {\n        description\n        url\n      }\n      contact {\n        name\n        url\n        email\n      }\n      description\n      summary\n      title\n      url\n      version\n      tags {\n        name\n        description\n        extensions\n      }\n      components {\n        securitySchemes {\n          name\n          type\n          description\n          in\n          paramName\n          scheme\n          bearerFormat\n          openIdConnectUrl\n          flows {\n            implicit {\n              authorizationUrl\n              scopes {\n                name\n                description\n              }\n            }\n            password {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            clientCredentials {\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n            authorizationCode {\n              authorizationUrl\n              tokenUrl\n              scopes {\n                name\n                description\n              }\n            }\n          }\n        }\n      }\n      webhooks {\n        name\n        method\n        summary\n        description\n      }\n    }\n  }\n"), V = ({ href: e, icon: t, children: n }) => /* @__PURE__ */ (0, z.jsxs)("a", {
	href: e,
	className: "inline-flex items-center gap-2 opacity-65 hover:opacity-100 [&_svg]:shrink-0 [&_svg]:size-3.5",
	target: "_blank",
	rel: "noopener noreferrer",
	children: [t, /* @__PURE__ */ (0, z.jsx)("span", {
		className: "truncate grow-0",
		children: n
	})]
}), H = ({ schema: e }) => {
	let n = !!(e.license || e.termsOfService || e.externalDocs), r = !!(e.contact?.name || e.contact?.email || e.contact?.url), i = e.servers.length > 0;
	return /* @__PURE__ */ (0, z.jsxs)(y, {
		className: "flex flex-col gap-3 text-sm",
		children: [
			n && /* @__PURE__ */ (0, z.jsxs)("div", {
				className: "flex flex-col gap-1.5",
				children: [
					e.license && /* @__PURE__ */ (0, z.jsx)(V, {
						href: e.license.url ?? void 0,
						children: e.license.name
					}),
					e.termsOfService && /* @__PURE__ */ (0, z.jsx)(V, {
						href: e.termsOfService,
						children: "Terms of Service"
					}),
					e.externalDocs && /* @__PURE__ */ (0, z.jsx)(V, {
						href: e.externalDocs.url,
						children: e.externalDocs.description ?? "Documentation"
					})
				]
			}),
			n && (r || i) && /* @__PURE__ */ (0, z.jsx)(t, {}),
			r && /* @__PURE__ */ (0, z.jsxs)("div", {
				className: "flex flex-col gap-1.5",
				children: [
					/* @__PURE__ */ (0, z.jsx)("span", {
						className: "text-xs text-muted-foreground font-medium uppercase tracking-wide",
						children: "Contact"
					}),
					e.contact?.name && /* @__PURE__ */ (0, z.jsx)("span", { children: e.contact.name }),
					e.contact?.email && /* @__PURE__ */ (0, z.jsx)(V, {
						href: `mailto:${e.contact.email}`,
						icon: /* @__PURE__ */ (0, z.jsx)(I, {}),
						children: e.contact.email
					}),
					e.contact?.url && /* @__PURE__ */ (0, z.jsx)(V, {
						href: e.contact.url,
						icon: /* @__PURE__ */ (0, z.jsx)(F, {}),
						children: e.contact.url
					})
				]
			}),
			r && i && /* @__PURE__ */ (0, z.jsx)(t, {}),
			i && /* @__PURE__ */ (0, z.jsxs)("div", {
				className: "flex flex-col gap-1.5",
				children: [/* @__PURE__ */ (0, z.jsx)("span", {
					className: "text-xs text-muted-foreground font-medium uppercase tracking-wide",
					children: "Servers"
				}), e.servers.map((e) => /* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsx)("code", {
					className: "text-xs select-all break-all",
					children: e.url
				}), e.description && /* @__PURE__ */ (0, z.jsx)("p", {
					className: "text-muted-foreground text-xs",
					children: e.description
				})] }, e.url))]
			})
		]
	});
}, U = (e) => {
	switch (e) {
		case "apiKey": return /* @__PURE__ */ (0, z.jsx)(_, { size: 14 });
		case "http": return /* @__PURE__ */ (0, z.jsx)(i, { size: 14 });
		case "oauth2": return /* @__PURE__ */ (0, z.jsx)(x, { size: 14 });
		case "openIdConnect": return /* @__PURE__ */ (0, z.jsx)(x, { size: 14 });
		case "mutualTLS": return /* @__PURE__ */ (0, z.jsx)(i, { size: 14 });
	}
}, W = (e) => {
	switch (e.type) {
		case "apiKey": return `API Key in ${e.in ?? "header"} (${e.paramName ?? "key"})`;
		case "http": return e.scheme === "bearer" ? `Bearer token${e.bearerFormat ? ` (${e.bearerFormat})` : ""}` : `HTTP ${e.scheme ?? "authentication"}`;
		case "oauth2": return "OAuth 2.0 authorization";
		case "openIdConnect": return "OpenID Connect";
		case "mutualTLS": return "Mutual TLS authentication";
	}
}, G = ({ showInfoPage: t, redirectTo: s } = {}) => {
	let { input: m, type: h, options: _ } = a(), y = d(), { data: { schema: x } } = f(l(B, {
		input: m,
		type: h
	})), { title: F, description: I } = x, V = c((e) => e.isCollapsed);
	if (P(), !o(t, !!I) && s) return /* @__PURE__ */ (0, z.jsx)(u, {
		to: {
			pathname: s,
			search: y.search
		},
		replace: !0
	});
	let G = !!(x.contact?.name || x.contact?.email || x.contact?.url || x.servers.length > 0 || x.license || x.termsOfService || x.externalDocs), K = x.tags.flatMap(({ name: e, description: t, extensions: n }) => e ? {
		name: e,
		description: t,
		extensions: n
	} : []);
	return /* @__PURE__ */ (0, z.jsxs)("div", {
		className: "pt-(--padding-content-top)",
		"data-pagefind-filter": "section:openapi",
		"data-pagefind-meta": "section:openapi",
		children: [
			/* @__PURE__ */ (0, z.jsx)(O, {
				name: "category",
				children: F
			}),
			/* @__PURE__ */ (0, z.jsxs)(n, { children: [F && /* @__PURE__ */ (0, z.jsx)("title", { children: F }), I && /* @__PURE__ */ (0, z.jsx)("meta", {
				name: "description",
				content: I
			})] }),
			/* @__PURE__ */ (0, z.jsxs)("div", {
				className: "mb-8 flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, z.jsx)(E, { heading: F }), /* @__PURE__ */ (0, z.jsxs)("div", {
					className: "grid grid-cols-1 xl:grid-cols-[1fr_minmax(250px,380px)] gap-8",
					children: [
						G && /* @__PURE__ */ (0, z.jsx)("div", {
							className: "xl:hidden sticky top-(--top-nav-height) lg:top-(--scroll-padding) z-10 row-start-1 col-start-1 justify-self-end self-start",
							children: /* @__PURE__ */ (0, z.jsxs)(b, { children: [/* @__PURE__ */ (0, z.jsx)(g, {
								asChild: !0,
								children: /* @__PURE__ */ (0, z.jsx)(C, {
									variant: "outline",
									size: "icon",
									className: "shadow-sm rounded-full",
									children: /* @__PURE__ */ (0, z.jsx)(e, {})
								})
							}), /* @__PURE__ */ (0, z.jsx)(v, {
								align: "end",
								className: "xl:hidden w-full max-w-full md:max-w-sm",
								children: /* @__PURE__ */ (0, z.jsx)(H, { schema: x })
							})] })
						}),
						/* @__PURE__ */ (0, z.jsxs)("div", {
							className: "flex flex-col gap-6 row-start-1 col-start-1",
							children: [
								x.summary && /* @__PURE__ */ (0, z.jsx)("p", {
									className: "text-lg text-muted-foreground",
									children: x.summary
								}),
								x.description && /* @__PURE__ */ (0, z.jsx)(T, {
									className: w("prose-img:max-w-prose prose-sm max-w-full", V ? "lg:max-w-4xl" : "lg:max-w-2xl"),
									content: x.description
								}),
								K.length > 1 && /* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsxs)("div", {
									className: "flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground mb-4",
									children: [/* @__PURE__ */ (0, z.jsx)(L, { size: 14 }), "Tags"]
								}), /* @__PURE__ */ (0, z.jsx)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-4",
									children: K.map((e) => /* @__PURE__ */ (0, z.jsx)(M, {
										variant: "outline",
										asChild: !0,
										children: /* @__PURE__ */ (0, z.jsx)(p, {
											to: N(e.name),
											children: /* @__PURE__ */ (0, z.jsxs)(A, { children: [/* @__PURE__ */ (0, z.jsx)(j, { children: e.extensions?.["x-displayName"] ?? e.name }), e.description && /* @__PURE__ */ (0, z.jsx)(D, {
												asChild: !0,
												children: /* @__PURE__ */ (0, z.jsx)(T, {
													components: {
														p: ({ children: e }) => e,
														a: (e) => /* @__PURE__ */ (0, z.jsx)("span", { ...e })
													},
													content: e.description,
													className: "prose-sm text-pretty"
												})
											})] })
										})
									}, e.name))
								})] }),
								!_?.disableSecurity && (x.components?.securitySchemes?.length ?? 0) > 0 && /* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsxs)("div", {
									className: "flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground mb-4",
									children: [/* @__PURE__ */ (0, z.jsx)(i, { size: 14 }), "Security Schemes"]
								}), /* @__PURE__ */ (0, z.jsx)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-4",
									children: x.components?.securitySchemes?.map((e) => /* @__PURE__ */ (0, z.jsxs)(M, {
										variant: "outline",
										children: [/* @__PURE__ */ (0, z.jsxs)(A, { children: [/* @__PURE__ */ (0, z.jsxs)(j, {
											className: "flex items-center gap-2",
											children: [U(e.type), e.name]
										}), /* @__PURE__ */ (0, z.jsx)(D, {
											asChild: !0,
											children: /* @__PURE__ */ (0, z.jsx)(T, {
												content: e.description ?? W(e),
												className: "prose-sm text-pretty",
												components: {
													p: ({ children: e }) => e,
													a: (e) => /* @__PURE__ */ (0, z.jsx)("span", { ...e })
												}
											})
										})] }), /* @__PURE__ */ (0, z.jsx)(k, { children: /* @__PURE__ */ (0, z.jsx)(r, {
											variant: "muted",
											className: "text-[10px] font-mono",
											children: e.type
										}) })]
									}, e.name))
								})] }),
								x.webhooks.length > 0 && /* @__PURE__ */ (0, z.jsxs)("div", { children: [/* @__PURE__ */ (0, z.jsxs)("div", {
									className: "flex items-center gap-2 text-sm uppercase tracking-wide text-muted-foreground mb-4",
									children: [/* @__PURE__ */ (0, z.jsx)(R, { size: 14 }), "Webhooks"]
								}), /* @__PURE__ */ (0, z.jsx)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-4",
									children: x.webhooks.map((e) => /* @__PURE__ */ (0, z.jsxs)(M, {
										variant: "outline",
										children: [/* @__PURE__ */ (0, z.jsxs)(A, { children: [/* @__PURE__ */ (0, z.jsx)(j, { children: e.name }), (e.summary || e.description) && /* @__PURE__ */ (0, z.jsx)(D, { children: e.summary ?? e.description })] }), /* @__PURE__ */ (0, z.jsx)(k, { children: /* @__PURE__ */ (0, z.jsx)(r, {
											variant: "muted",
											className: "text-[10px] font-mono",
											children: e.method
										}) })]
									}, `${e.name}-${e.method}`))
								})] })
							]
						}),
						G && /* @__PURE__ */ (0, z.jsx)("div", {
							className: "hidden xl:block",
							children: /* @__PURE__ */ (0, z.jsx)(S, {
								className: "sticky top-(--scroll-padding)",
								children: /* @__PURE__ */ (0, z.jsx)(H, { schema: x })
							})
						})
					]
				})]
			})
		]
	});
};
//#endregion
export { G as SchemaInfo };
