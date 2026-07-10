import { r as e } from "./chunk-HEgqtunE.js";
import { Vt as t } from "./main-CQFzjeJU.js";
var n = {
	react: "sha384-ZNmUQ9QQgyl95nnD/FJTBQn2ZEPTbWtMuWCXTKWNuF6Si7nC+6bvSgk5LWu+ELHn",
	reactDom: "sha384-qtNxBzn9gBs3CmJItMuvIVyjW3VIU0/rzGhCm9MippVU1BpR/c4VgaFYDIg/FrY2",
	reactDomClient: "sha384-mTUBgxMUtjAv2EaEUKPAzT6HMcBqdBS++8DEEoHu+ZFG+8YlcIqDrk22ChJ8/Mj3",
	graphql: "sha384-eUWg26UKdPQB05LGm6vm//PmrgaaY3wXONfQPX/1QXSpo78YaUHZ6F7w5/v5DDim",
	toolkit: "sha384-g/QXS1WWddfNDQI+qvjLSeaJ0XLV7a8/Q+uY2+NVBfyiEmXu7F4zif760Ux5jhhq",
	graphiqlReact: "sha384-iZsbTy9B0VcX2BOTdqMuX0uJ9Hff5GbG2QeOt4OeMp0GHza76dwQaYQYNYkZkIVq",
	graphiql: "sha384-pumDMAiSNzyidT/jWu2dyWDEBh3wpnQD0GlhkL+ia5vkznkEZlU7yFbDMNc9/RgD",
	setupWorkers: "sha384-6kcfWxD7ew22yqReqaV9W/djDbFbZkCH9eohfEaQoXHSeeLt7sVoxgV9l50iBqjm",
	styles: "sha384-TFpQQKp325U5sd3PddH4cS0KOB3Gz/aqdEe12Mqkkq3wm2MGcDhRX5WhWf+o8akh"
}, r = /* @__PURE__ */ e({
	ESM_CDN: () => i,
	getCdnUrls: () => s,
	loadGraphiQLFromCdn: () => p
}), i = "https://esm.sh", a = {
	react: "19.2.5",
	graphiql: "5.2.3",
	graphiqlReact: "0.37.3",
	toolkit: "0.12.0",
	graphql: "16.14.0"
}, o = null, s = (e) => ({
	react: `${e}/react@${a.react}`,
	reactDom: `${e}/react-dom@${a.react}`,
	reactDomClient: `${e}/react-dom@${a.react}/client`,
	graphql: `${e}/graphql@${a.graphql}`,
	toolkit: `${e}/@graphiql/toolkit@${a.toolkit}?standalone&external=graphql`,
	graphiqlReact: `${e}/@graphiql/react@${a.graphiqlReact}?standalone&external=react,react-dom,graphql,@graphiql/toolkit,@emotion/is-prop-valid`,
	graphiql: `${e}/graphiql@${a.graphiql}?standalone&external=react,react-dom,@graphiql/react,graphql`,
	setupWorkers: `${e}/graphiql@${a.graphiql}/setup-workers/esm.sh`,
	styles: `${e}/graphiql@${a.graphiql}/dist/style.css`
}), c = n, l = (e) => {
	if (e !== "https://esm.sh") return {};
	let t = s(e);
	return Object.fromEntries(Object.keys(t).flatMap((e) => {
		let n = c[e];
		return e === "styles" || !n ? [] : [[t[e], n]];
	}));
}, u = (e) => {
	if (typeof document > "u" || document.querySelector("script[data-zudoku-graphiql-importmap]")) return;
	let t = s(e), n = {
		imports: {
			react: t.react,
			"react/": `${e}/react@${a.react}/`,
			"react-dom": t.reactDom,
			"react-dom/": `${e}/react-dom@${a.react}/`,
			graphql: t.graphql,
			"@graphiql/toolkit": t.toolkit,
			"@graphiql/react": t.graphiqlReact,
			graphiql: t.graphiql,
			"graphiql/": `${e}/graphiql@${a.graphiql}/`,
			"@emotion/is-prop-valid": "data:text/javascript,"
		},
		integrity: l(e)
	}, r = document.createElement("script");
	r.type = "importmap", r.dataset.zudokuGraphiqlImportmap = "true", r.textContent = JSON.stringify(n), document.head.appendChild(r);
}, d = (e) => {
	if (typeof document > "u" || document.querySelector("link[data-zudoku-graphiql-styles]")) return;
	let t = document.createElement("link");
	t.rel = "stylesheet", t.href = s(e).styles, e === "https://esm.sh" && c.styles && (t.integrity = c.styles, t.crossOrigin = "anonymous"), t.dataset.zudokuGraphiqlStyles = "true", document.head.appendChild(t);
}, f = (e, n) => new t("Could not load the GraphQL playground from the CDN.", {
	title: "Could not load the GraphQL playground",
	developerHint: `GraphiQL is loaded at runtime from ${e}. Ensure the network is reachable and your Content-Security-Policy allows ${e} (script-src, connect-src, and worker-src for the Monaco workers).`,
	cause: n
}), p = (e = i) => o || (typeof document > "u" ? Promise.reject(new t("The GraphQL playground can only load in a browser.", { title: "Could not load the GraphQL playground" })) : (o = (async () => {
	u(e), d(e);
	let t = s(e);
	await import(
		/* @vite-ignore */
		t.setupWorkers
);
	let [n, r, i, a] = await Promise.all([
		import(
			/* @vite-ignore */
			t.react
),
		import(
			/* @vite-ignore */
			t.reactDomClient
),
		import(
			/* @vite-ignore */
			t.graphiql
),
		import(
			/* @vite-ignore */
			t.toolkit
)
	]);
	if (typeof r.createRoot != "function" || typeof i.GraphiQL != "function" || typeof a.createGraphiQLFetcher != "function") throw f(e);
	return {
		React: n.default ?? n,
		createRoot: r.createRoot,
		GraphiQL: i.GraphiQL,
		createGraphiQLFetcher: a.createGraphiQLFetcher
	};
})().catch((n) => {
	throw o = null, n instanceof t ? n : f(e, n instanceof Error ? n : void 0);
}), o));
//#endregion
export { r as n, p as t };
