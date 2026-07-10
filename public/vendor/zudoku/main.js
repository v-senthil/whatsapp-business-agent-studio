import "./chunk-HEgqtunE.js";
import { Gt as e, Mt as t, Ut as n, Wt as r, t as i } from "./main-CQFzjeJU.js";
import { c as a } from "./joinUrl-51baNiN4.js";
import { t as o } from "./jsx-runtime-Bcg76ucg.js";
//#region src/app/standalone.tsx
var s = r(), c = o(), l = document.querySelector("div[data-api-url]");
if (!l) throw Error("No div found with attribute data-api-url");
var u = l.getAttribute("data-api-url");
if (!u) throw Error("No api url found");
var d = document.getElementsByTagName("title")[0]?.innerText, f = l.getAttribute("data-logo-url"), p = a(i({
	site: {
		logo: f ? { src: {
			light: f,
			dark: f
		} } : void 0,
		title: d
	},
	navigation: [{
		type: "link",
		label: "API Reference",
		to: "/"
	}],
	plugins: [t({
		type: "url",
		input: u,
		path: "/"
	})]
}), { basename: window.location.pathname });
(0, s.createRoot)(l).render(/* @__PURE__ */ (0, c.jsx)(n, {
	router: p,
	head: e()
}));
//#endregion
