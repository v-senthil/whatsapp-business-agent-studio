import { _ as e, g as t, h as n, p as r } from "./src-CXddVwgO.js";
import { $ as i, C as a, E as o, I as s, L as c, N as l, P as u, Q as d, S as f, T as p, V as m, W as h, X as g, Z as _, _ as v, b as y, c as b, g as x, l as S, m as C, n as w, p as T, q as ee, r as te, t as ne, u as E } from "./chunk-CSCIHK7Q-CHXp-B5u.js";
import { G as re, a as ie, b as ae, f as D, g as O, h as oe, i as se, o as ce, v as le, y as ue } from "./chunk-5ZQYHXKU-Ckg5JQ60.js";
import { t as de } from "./chunk-WU5MYG2G-yvpvq9O9.js";
import { i as fe, o as pe } from "./chunk-O5CBEL6O-Cz2Xr9Qv.js";
import "./chunk-BSJP7CBP-D9ENIqdp.js";
import "./chunk-L5ZTLDWV-D-Agyo9x.js";
import "./chunk-NZK2D7GU-vzBS4EZW.js";
import "./chunk-3OPIFGDE-BwYSS-16.js";
import "./chunk-KSCS5N6A-DgtFG-sx.js";
import { n as me } from "./chunk-LZXEDZCA-D8lb5wsM.js";
import { n as he, t as ge } from "./chunk-XPW4576I-CNNdiTBE.js";
//#region ../../node_modules/.pnpm/es-toolkit@1.46.1/node_modules/es-toolkit/dist/compat/_internal/isPrototype.mjs
function _e(e) {
	let t = e?.constructor;
	return e === (typeof t == "function" ? t.prototype : Object.prototype);
}
//#endregion
//#region ../../node_modules/.pnpm/es-toolkit@1.46.1/node_modules/es-toolkit/dist/compat/predicate/isEmpty.mjs
function ve(e) {
	if (e == null) return !0;
	if (re(e)) return typeof e.splice != "function" && typeof e != "string" && !ae(e) && !le(e) && !ue(e) ? !1 : e.length === 0;
	if (typeof e == "object") {
		if (e instanceof Map || e instanceof Set) return e.size === 0;
		let t = Object.keys(e);
		return _e(e) ? t.filter((e) => e !== "constructor").length === 0 : t.length === 0;
	}
	return !0;
}
//#endregion
//#region ../../node_modules/.pnpm/stylis@4.4.0/node_modules/stylis/src/Enum.js
var k = "comm", ye = "rule", be = "decl", xe = "@import", Se = "@namespace", Ce = "@keyframes", we = "@layer", Te = Math.abs, A = String.fromCharCode;
function Ee(e) {
	return e.trim();
}
function De(e, t, n) {
	return e.replace(t, n);
}
function j(e, t) {
	return e.charCodeAt(t) | 0;
}
function M(e, t, n) {
	return e.slice(t, n);
}
function N(e) {
	return e.length;
}
function Oe(e) {
	return e.length;
}
function P(e, t) {
	return t.push(e), e;
}
//#endregion
//#region ../../node_modules/.pnpm/stylis@4.4.0/node_modules/stylis/src/Tokenizer.js
var F = 1, I = 1, ke = 0, L = 0, R = 0, z = "";
function Ae(e, t, n, r, i, a, o, s) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: i,
		children: a,
		line: F,
		column: I,
		length: o,
		return: "",
		siblings: s
	};
}
function je() {
	return R;
}
function Me() {
	return R = L > 0 ? j(z, --L) : 0, I--, R === 10 && (I = 1, F--), R;
}
function B() {
	return R = L < ke ? j(z, L++) : 0, I++, R === 10 && (I = 1, F++), R;
}
function V() {
	return j(z, L);
}
function H() {
	return L;
}
function U(e, t) {
	return M(z, e, t);
}
function W(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function Ne(e) {
	return F = I = 1, ke = N(z = e), L = 0, [];
}
function Pe(e) {
	return z = "", e;
}
function G(e) {
	return Ee(U(L - 1, Le(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Fe(e) {
	for (; (R = V()) && R < 33;) B();
	return W(e) > 2 || W(R) > 3 ? "" : " ";
}
function Ie(e, t) {
	for (; --t && B() && !(R < 48 || R > 102 || R > 57 && R < 65 || R > 70 && R < 97););
	return U(e, H() + (t < 6 && V() == 32 && B() == 32));
}
function Le(e) {
	for (; B();) switch (R) {
		case e: return L;
		case 34:
		case 39:
			e !== 34 && e !== 39 && Le(R);
			break;
		case 40:
			e === 41 && Le(e);
			break;
		case 92:
			B();
			break;
	}
	return L;
}
function Re(e, t) {
	for (; B() && e + R !== 57 && !(e + R === 84 && V() === 47););
	return "/*" + U(t, L - 1) + "*" + A(e === 47 ? e : B());
}
function ze(e) {
	for (; !W(V());) B();
	return U(e, L);
}
//#endregion
//#region ../../node_modules/.pnpm/stylis@4.4.0/node_modules/stylis/src/Parser.js
function Be(e) {
	return Pe(K("", null, null, null, [""], e = Ne(e), 0, [0], e));
}
function K(e, t, n, r, i, a, o, s, c) {
	for (var l = 0, u = 0, d = o, f = 0, p = 0, m = 0, h = 1, g = 1, _ = 1, v = 0, y = 0, b = "", x = i, S = a, C = r, w = b; g;) switch (m = y, y = B()) {
		case 40:
			m != 108 && j(w, d - 1) == 58 ? (v++, w += "(") : w += G(y);
			break;
		case 41:
			v--, w += ")";
			break;
		case 34:
		case 39:
		case 91:
			w += G(y);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			if (v > 0) {
				w += A(y);
				break;
			}
			w += Fe(m);
			break;
		case 92:
			w += Ie(H() - 1, 7);
			continue;
		case 47:
			switch (V()) {
				case 42:
				case 47:
					P(He(Re(B(), H()), t, n, c), c), (W(m || 1) == 5 || W(V() || 1) == 5) && N(w) && M(w, -1, void 0) !== " " && (w += " ");
					break;
				default: w += "/";
			}
			break;
		case 123 * h: s[l++] = N(w) * _;
		case 125 * h:
		case 59:
		case 0:
			if (v > 0 && y) {
				w += A(y);
				break;
			}
			switch (y) {
				case 0:
				case 125: g = 0;
				case 59 + u:
					_ == -1 && (w = De(w, /\f/g, "")), p > 0 && (N(w) - d || h === 0) && P(p > 32 ? Ue(w + ";", r, n, d - 1, c) : Ue(De(w, " ", "") + ";", r, n, d - 2, c), c);
					break;
				case 59: w += ";";
				default: if (P(C = Ve(w, t, n, l, u, i, s, b, x = [], S = [], d, a), a), y === 123) if (u === 0) K(w, t, C, C, x, a, d, s, S);
				else {
					switch (f) {
						case 99: if (j(w, 3) === 110) break;
						case 108: if (j(w, 2) === 97) break;
						default: u = 0;
						case 100:
						case 109:
						case 115:
					}
					u ? K(e, C, C, r && P(Ve(e, C, C, 0, 0, i, s, b, i, x = [], d, S), S), i, S, d, s, r ? x : S) : K(w, C, C, C, [""], S, 0, s, S);
				}
			}
			l = u = p = 0, h = _ = 1, b = w = "", d = o;
			break;
		case 58: d = 1 + N(w), p = m;
		default:
			if (h < 1) {
				if (y == 123) --h;
				else if (y == 125 && h++ == 0 && Me() == 125) continue;
			}
			switch (w += A(y), y * h) {
				case 38:
					_ = u > 0 ? 1 : (w += "\f", -1);
					break;
				case 44:
					if (v > 0) break;
					s[l++] = (N(w) - 1) * _, _ = 1;
					break;
				case 64:
					V() === 45 && (w += G(B())), f = V(), u = d = N(b = w += ze(H())), y++;
					break;
				case 45: m === 45 && N(w) == 2 && (h = 0);
			}
	}
	return a;
}
function Ve(e, t, n, r, i, a, o, s, c, l, u, d) {
	for (var f = i - 1, p = i === 0 ? a : [""], m = Oe(p), h = 0, g = 0, _ = 0; h < r; ++h) for (var v = 0, y = M(e, f + 1, f = Te(g = o[h])), b = e; v < m; ++v) (b = Ee(g > 0 ? p[v] + " " + y : De(y, /&\f/g, p[v]))) && (c[_++] = b);
	return Ae(e, t, n, i === 0 ? ye : s, c, l, u, d);
}
function He(e, t, n, r) {
	return Ae(e, t, n, k, A(je()), M(e, 2, -2), 0, r);
}
function Ue(e, t, n, r, i) {
	return Ae(e, t, n, be, M(e, 0, r), M(e, r + 1, -1), r, i);
}
//#endregion
//#region ../../node_modules/.pnpm/stylis@4.4.0/node_modules/stylis/src/Serializer.js
function q(e, t) {
	for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
	return n;
}
function We(e, t, n, r) {
	switch (e.type) {
		case we: if (e.children.length) break;
		case xe:
		case Se:
		case be: return e.return = e.return || e.value;
		case k: return "";
		case Ce: return e.return = e.value + "{" + q(e.children, r) + "}";
		case ye: if (!N(e.value = e.props.join(","))) return "";
	}
	return N(n = q(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
//#endregion
//#region ../../node_modules/.pnpm/stylis@4.4.0/node_modules/stylis/src/Middleware.js
function Ge(e) {
	var t = Oe(e);
	return function(n, r, i, a) {
		for (var o = "", s = 0; s < t; s++) o += e[s](n, r, i, a) || "";
		return o;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/mermaid@11.15.0/node_modules/mermaid/dist/mermaid.core.mjs
var Ke = "c4", qe = {
	id: Ke,
	detector: /* @__PURE__ */ n((e) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./c4Diagram-AAUBKEIU-CkT19HqS.js");
		return {
			id: Ke,
			diagram: e
		};
	}, "loader")
}, Je = "flowchart", Ye = {
	id: Je,
	detector: /* @__PURE__ */ n((e, t) => t?.flowchart?.defaultRenderer === "dagre-wrapper" || t?.flowchart?.defaultRenderer === "elk" ? !1 : /^\s*graph/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./flowDiagram-I6XJVG4X-DkzxblYv.js");
		return {
			id: Je,
			diagram: e
		};
	}, "loader")
}, Xe = "flowchart-v2", Ze = {
	id: Xe,
	detector: /* @__PURE__ */ n((e, t) => t?.flowchart?.defaultRenderer === "dagre-d3" ? !1 : (t?.flowchart?.defaultRenderer === "elk" && (t.layout = "elk"), /^\s*graph/.test(e) && t?.flowchart?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*flowchart/.test(e)), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./flowDiagram-I6XJVG4X-DkzxblYv.js");
		return {
			id: Xe,
			diagram: e
		};
	}, "loader")
}, Qe = "er", $e = {
	id: Qe,
	detector: /* @__PURE__ */ n((e) => /^\s*erDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./erDiagram-TEJ5UH35-CCX6dJ2m.js");
		return {
			id: Qe,
			diagram: e
		};
	}, "loader")
}, et = "gitGraph", tt = {
	id: et,
	detector: /* @__PURE__ */ n((e) => /^\s*gitGraph/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./gitGraphDiagram-PVQCEYII-KBCOCMLE.js");
		return {
			id: et,
			diagram: e
		};
	}, "loader")
}, nt = "gantt", rt = {
	id: nt,
	detector: /* @__PURE__ */ n((e) => /^\s*gantt/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./ganttDiagram-6RSMTGT7-B3EphWU8.js");
		return {
			id: nt,
			diagram: e
		};
	}, "loader")
}, it = "info", at = {
	id: it,
	detector: /* @__PURE__ */ n((e) => /^\s*info/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./infoDiagram-5YYISTIA-DuReFdkD.js");
		return {
			id: it,
			diagram: e
		};
	}, "loader")
}, ot = "pie", st = {
	id: ot,
	detector: /* @__PURE__ */ n((e) => /^\s*pie/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./pieDiagram-4H26LBE5-vKNHlbIX.js");
		return {
			id: ot,
			diagram: e
		};
	}, "loader")
}, ct = "quadrantChart", lt = {
	id: ct,
	detector: /* @__PURE__ */ n((e) => /^\s*quadrantChart/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./quadrantDiagram-W4KKPZXB-gdhAjpge.js");
		return {
			id: ct,
			diagram: e
		};
	}, "loader")
}, ut = "xychart", dt = {
	id: ut,
	detector: /* @__PURE__ */ n((e) => /^\s*xychart(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./xychartDiagram-2RQKCTM6-2QH7m7dn.js");
		return {
			id: ut,
			diagram: e
		};
	}, "loader")
}, ft = "requirement", pt = {
	id: ft,
	detector: /* @__PURE__ */ n((e) => /^\s*requirement(Diagram)?/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./requirementDiagram-4Y6WPE33-BdwaMb94.js");
		return {
			id: ft,
			diagram: e
		};
	}, "loader")
}, mt = "sequence", ht = {
	id: mt,
	detector: /* @__PURE__ */ n((e) => /^\s*sequenceDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./sequenceDiagram-3UESZ5HK-D08IaI_w.js");
		return {
			id: mt,
			diagram: e
		};
	}, "loader")
}, gt = "class", _t = {
	id: gt,
	detector: /* @__PURE__ */ n((e, t) => t?.class?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*classDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./classDiagram-4FO5ZUOK-DiPtpgvy.js");
		return {
			id: gt,
			diagram: e
		};
	}, "loader")
}, vt = "classDiagram", yt = {
	id: vt,
	detector: /* @__PURE__ */ n((e, t) => /^\s*classDiagram/.test(e) && t?.class?.defaultRenderer === "dagre-wrapper" ? !0 : /^\s*classDiagram-v2/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./classDiagram-v2-Q7XG4LA2-PKjMuzPj.js");
		return {
			id: vt,
			diagram: e
		};
	}, "loader")
}, bt = "state", xt = {
	id: bt,
	detector: /* @__PURE__ */ n((e, t) => t?.state?.defaultRenderer === "dagre-wrapper" ? !1 : /^\s*stateDiagram/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./stateDiagram-AJRCARHV-GsPxxitP.js");
		return {
			id: bt,
			diagram: e
		};
	}, "loader")
}, St = "stateDiagram", Ct = {
	id: St,
	detector: /* @__PURE__ */ n((e, t) => !!(/^\s*stateDiagram-v2/.test(e) || /^\s*stateDiagram/.test(e) && t?.state?.defaultRenderer === "dagre-wrapper"), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./stateDiagram-v2-BHNVJYJU-B5S6ub39.js");
		return {
			id: St,
			diagram: e
		};
	}, "loader")
}, wt = "journey", Tt = {
	id: wt,
	detector: /* @__PURE__ */ n((e) => /^\s*journey/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./journeyDiagram-JHISSGLW-CTqd2N_q.js");
		return {
			id: wt,
			diagram: e
		};
	}, "loader")
}, Et = { draw: /* @__PURE__ */ n((e, n, r) => {
	t.debug("rendering svg for syntax error\n");
	let i = de(n), a = i.append("g");
	i.attr("viewBox", "0 0 2412 512"), b(i, 100, 512, !0), a.append("path").attr("class", "error-icon").attr("d", "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"), a.append("path").attr("class", "error-icon").attr("d", "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"), a.append("path").attr("class", "error-icon").attr("d", "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"), a.append("path").attr("class", "error-icon").attr("d", "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"), a.append("path").attr("class", "error-icon").attr("d", "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"), a.append("path").attr("class", "error-icon").attr("d", "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"), a.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), a.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${r}`);
}, "draw") }, Dt = Et, Ot = {
	db: {},
	renderer: Et,
	parser: { parse: /* @__PURE__ */ n(() => {}, "parse") }
}, kt = "flowchart-elk", At = {
	id: kt,
	detector: /* @__PURE__ */ n((e, t = {}) => /^\s*flowchart-elk/.test(e) || /^\s*(flowchart|graph)/.test(e) && t?.flowchart?.defaultRenderer === "elk" ? (t.layout = "elk", !0) : !1, "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./flowDiagram-I6XJVG4X-DkzxblYv.js");
		return {
			id: kt,
			diagram: e
		};
	}, "loader")
}, jt = "timeline", Mt = {
	id: jt,
	detector: /* @__PURE__ */ n((e) => /^\s*timeline/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./timeline-definition-PNZ67QCA-CakV5HJR.js");
		return {
			id: jt,
			diagram: e
		};
	}, "loader")
}, Nt = "mindmap", Pt = {
	id: Nt,
	detector: /* @__PURE__ */ n((e) => /^\s*mindmap/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./mindmap-definition-RKZ34NQL-CxhDw1Da.js");
		return {
			id: Nt,
			diagram: e
		};
	}, "loader")
}, Ft = "kanban", It = {
	id: Ft,
	detector: /* @__PURE__ */ n((e) => /^\s*kanban/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./kanban-definition-UN3LZRKU-BwsfqAO0.js");
		return {
			id: Ft,
			diagram: e
		};
	}, "loader")
}, Lt = "sankey", Rt = {
	id: Lt,
	detector: /* @__PURE__ */ n((e) => /^\s*sankey(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./sankeyDiagram-5OEKKPKP-CC_jNy-N.js");
		return {
			id: Lt,
			diagram: e
		};
	}, "loader")
}, zt = "packet", Bt = {
	id: zt,
	detector: /* @__PURE__ */ n((e) => /^\s*packet(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./diagram-LMA3HP47-CNJMUTNN.js");
		return {
			id: zt,
			diagram: e
		};
	}, "loader")
}, Vt = "radar", Ht = {
	id: Vt,
	detector: /* @__PURE__ */ n((e) => /^\s*radar-beta/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./diagram-2AECGRRQ-mJtiXRu0.js");
		return {
			id: Vt,
			diagram: e
		};
	}, "loader")
}, Ut = "block", Wt = {
	id: Ut,
	detector: /* @__PURE__ */ n((e) => /^\s*block(-beta)?/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./blockDiagram-GPEHLZMM-OnV6jsQq.js");
		return {
			id: Ut,
			diagram: e
		};
	}, "loader")
}, Gt = "treeView", Kt = {
	id: Gt,
	detector: /* @__PURE__ */ n((e) => /^\s*treeView-beta/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./diagram-5GNKFQAL-TiHilYnb.js");
		return {
			id: Gt,
			diagram: e
		};
	}, "loader")
}, qt = "architecture", Jt = {
	id: qt,
	detector: /* @__PURE__ */ n((e) => /^\s*architecture/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./architectureDiagram-3BPJPVTR-DuRv5Xex.js");
		return {
			id: qt,
			diagram: e
		};
	}, "loader")
}, Yt = "eventmodeling", Xt = {
	id: Yt,
	detector: /* @__PURE__ */ n((e) => /^\s*eventmodeling/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./diagram-KO2AKTUF-DGF1qdTW.js");
		return {
			id: Yt,
			diagram: e
		};
	}, "loader")
}, Zt = "ishikawa", Qt = {
	id: Zt,
	detector: /* @__PURE__ */ n((e) => /^\s*ishikawa(-beta)?\b/i.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./ishikawaDiagram-YF4QCWOH-_qj9NreU.js");
		return {
			id: Zt,
			diagram: e
		};
	}, "loader")
}, $t = "venn", en = {
	id: $t,
	detector: /* @__PURE__ */ n((e) => /^\s*venn-beta/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./vennDiagram-CIIHVFJN-ra0JREKO.js");
		return {
			id: $t,
			diagram: e
		};
	}, "loader")
}, tn = "treemap", nn = {
	id: tn,
	detector: /* @__PURE__ */ n((e) => /^\s*treemap/.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./diagram-OG6HWLK6-DQJSKba-.js");
		return {
			id: tn,
			diagram: e
		};
	}, "loader")
}, rn = "wardley-beta", an = {
	id: rn,
	detector: /* @__PURE__ */ n((e) => /^\s*wardley-beta/i.test(e), "detector"),
	loader: /* @__PURE__ */ n(async () => {
		let { diagram: e } = await import("./wardleyDiagram-YWT4CUSO-CzHYEQQB.js");
		return {
			id: rn,
			diagram: e
		};
	}, "loader")
}, on = !1, J = /* @__PURE__ */ n(() => {
	on || (on = !0, l("error", Ot, (e) => e.toLowerCase().trim() === "error"), l("---", {
		db: { clear: /* @__PURE__ */ n(() => {}, "clear") },
		styles: {},
		renderer: { draw: /* @__PURE__ */ n(() => {}, "draw") },
		parser: { parse: /* @__PURE__ */ n(() => {
			throw Error("Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks");
		}, "parse") },
		init: /* @__PURE__ */ n(() => null, "init")
	}, (e) => e.toLowerCase().trimStart().startsWith("---")), u(At, Pt, Jt), u(qe, It, yt, _t, $e, rt, at, st, pt, ht, Ze, Ye, Mt, tt, Ct, xt, Tt, lt, Rt, Bt, dt, Wt, Xt, Kt, Ht, Qt, nn, en, an));
}, "addDiagrams"), sn = /* @__PURE__ */ n(async () => {
	t.debug("Loading registered diagrams");
	let e = (await Promise.allSettled(Object.entries(C).map(async ([e, { detector: n, loader: r }]) => {
		if (r) try {
			f(e);
		} catch {
			try {
				let { diagram: e, id: t } = await r();
				l(t, e, n);
			} catch (n) {
				throw t.error(`Failed to load external diagram with key ${e}. Removing from detectors.`), delete C[e], n;
			}
		}
	}))).filter((e) => e.status === "rejected");
	if (e.length > 0) {
		t.error(`Failed to load ${e.length} external diagrams`);
		for (let n of e) t.error(n);
		throw Error(`Failed to load ${e.length} external diagrams`);
	}
}, "loadRegisteredDiagrams"), cn = "graphics-document document";
function ln(e, t) {
	e.attr("role", cn), t !== "" && e.attr("aria-roledescription", t);
}
n(ln, "setA11yDiagramInfo");
function un(e, t, n, r) {
	if (e.insert !== void 0) {
		if (n) {
			let t = `chart-desc-${r}`;
			e.attr("aria-describedby", t), e.insert("desc", ":first-child").attr("id", t).text(n);
		}
		if (t) {
			let n = `chart-title-${r}`;
			e.attr("aria-labelledby", n), e.insert("title", ":first-child").attr("id", n).text(t);
		}
	}
}
n(un, "addSVGa11yTitleDescription");
var Y = class e {
	constructor(e, t, n, r, i) {
		this.type = e, this.text = t, this.db = n, this.parser = r, this.renderer = i;
	}
	static {
		n(this, "Diagram");
	}
	static async fromText(t, n = {}) {
		let r = y(), i = T(t, r);
		t = ce(t) + "\n";
		try {
			f(i);
		} catch {
			let e = a(i);
			if (!e) throw new ne(`Diagram ${i} not found.`);
			let { id: t, diagram: n } = await e();
			l(t, n);
		}
		let { db: o, parser: s, renderer: c, init: u } = f(i);
		return s.parser && (s.parser.yy = o), o.clear?.(), u?.(r), n.title && o.setDiagramTitle?.(n.title), await s.parse(t), new e(i, t, o, s, c);
	}
	async render(e, t) {
		await this.renderer.draw(this.text, e, t, this);
	}
	getParser() {
		return this.parser;
	}
	getType() {
		return this.type;
	}
}, dn = [], fn = /* @__PURE__ */ n(() => {
	dn.forEach((e) => {
		e();
	}), dn = [];
}, "attachFunctions"), pn = /* @__PURE__ */ n((e) => e.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart(), "cleanupComments");
function mn(e) {
	let t = e.match(v);
	if (!t) return {
		text: e,
		metadata: {}
	};
	let n = he(t[1], { schema: ge }) ?? {};
	n = typeof n == "object" && !Array.isArray(n) ? n : {};
	let r = {};
	return n.displayMode && (r.displayMode = n.displayMode.toString()), n.title && (r.title = n.title.toString()), n.config && (r.config = n.config), {
		text: e.slice(t[0].length),
		metadata: r
	};
}
n(mn, "extractFrontMatter");
var hn = /* @__PURE__ */ n((e) => e.replace(/\r\n?/g, "\n").replace(/<(\w+)([^>]*)>/g, (e, t, n) => "<" + t + n.replace(/="([^"]*)"/g, "='$1'") + ">"), "cleanupText"), gn = /* @__PURE__ */ n((e) => {
	let { text: t, metadata: n } = mn(e), { displayMode: r, title: i, config: a = {} } = n;
	return r && (a.gantt ||= {}, a.gantt.displayMode = r), {
		title: i,
		config: a,
		text: t
	};
}, "processFrontmatter"), _n = /* @__PURE__ */ n((e) => {
	let t = O.detectInit(e) ?? {}, n = O.detectDirective(e, "wrap");
	return Array.isArray(n) ? t.wrap = n.some(({ type: e }) => e === "wrap") : n?.type === "wrap" && (t.wrap = !0), {
		text: oe(e),
		directive: t
	};
}, "processDirectives");
function X(e) {
	let t = gn(hn(e)), n = _n(t.text), r = se(t.config, n.directive);
	return e = pn(n.text), {
		code: e,
		title: t.title,
		config: r
	};
}
n(X, "preprocessDiagram");
function vn(e) {
	let t = new TextEncoder().encode(e), n = Array.from(t, (e) => String.fromCodePoint(e)).join("");
	return btoa(n);
}
n(vn, "toBase64");
var yn = 5e4, bn = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa", xn = "sandbox", Sn = "loose", Cn = "http://www.w3.org/2000/svg", wn = "http://www.w3.org/1999/xlink", Tn = "http://www.w3.org/1999/xhtml", En = "100%", Dn = "100%", On = "border:0;margin:0;", kn = "margin:0", An = "allow-top-navigation-by-user-activation allow-popups", jn = "The \"iframe\" tag is not supported by your browser.", Mn = ["foreignobject"], Nn = ["dominant-baseline"];
function Pn(e) {
	let t = X(e);
	return s(), w(t.config ?? {}), t;
}
n(Pn, "processAndSetConfigs");
async function Fn(e, t) {
	J();
	try {
		let { code: t, config: n } = Pn(e);
		return {
			diagramType: (await qn(t)).type,
			config: n
		};
	} catch (e) {
		if (t?.suppressErrors) return !1;
		throw e;
	}
}
n(Fn, "parse");
var In = /* @__PURE__ */ n((e, t, n = []) => `.${e} ${t} ${c(`{ ${n.join(" !important; ")} !important; }`)}`, "cssImportantStyles"), Ln = /* @__PURE__ */ n((e, t = /* @__PURE__ */ new Map()) => {
	let n = new CSSStyleSheet();
	if (e.fontFamily !== void 0 && n.insertRule(`:root { --mermaid-font-family: ${e.fontFamily}}`, n.cssRules.length), e.altFontFamily !== void 0 && n.insertRule(`:root { --mermaid-alt-font-family: ${e.altFontFamily}}`, n.cssRules.length), t instanceof Map) {
		let r = p(e) ? ["> *", "span"] : [
			"rect",
			"polygon",
			"ellipse",
			"circle",
			"path"
		];
		t.forEach((e) => {
			ve(e.styles) || r.forEach((t) => {
				n.insertRule(In(e.id, t, e.styles), n.cssRules.length);
			}), ve(e.textStyles) || n.insertRule(In(e.id, "tspan", (e?.textStyles || []).map((e) => e.replace("color", "fill"))), n.cssRules.length);
		});
	}
	let r = "";
	if (e.themeCSS !== void 0) if (typeof n.replaceSync == "function") {
		let t = new CSSStyleSheet();
		t.replaceSync(e.themeCSS), r = S(t) + "\n";
	} else r += `${e.themeCSS}
`;
	return r + S(n);
}, "createCssStyles"), Rn = /* @__PURE__ */ n((e, r) => q(Be(`${e}{${r}}`), Ge([/* @__PURE__ */ n(function(n, r, i, a) {
	if (n.type === "rule" && Array.isArray(n.props)) {
		if (n.parent && n.parent.type === "@keyframes") return;
		n.props = n.props.map((t) => t.startsWith(e) ? t : `${e} ${t}`);
	} else n.type.startsWith("@") && ([
		"@media",
		"@supports",
		"@layer",
		"@scope",
		"@container",
		"@starting-style",
		"@keyframes"
	].includes(n.type) || (t.warn(`Removing unsupported at-rule ${n.type} from CSS`), n.type = k));
}, "addNamespace"), We])), "compileCSS"), zn = /* @__PURE__ */ n((e, t, n, r) => Rn(r, g(t, Ln(e, n), {
	...e.themeVariables,
	theme: e.theme,
	look: e.look
}, r)), "createUserStyles"), Bn = /* @__PURE__ */ n((e = "", t, n) => {
	let r = e;
	return !n && !t && (r = r.replace(/marker-end="url\([\d+./:=?A-Za-z-]*?#/g, "marker-end=\"url(#")), r = ie(r), r = r.replace(/<br>/g, "<br/>"), r;
}, "cleanUpSvgCode"), Vn = /* @__PURE__ */ n((e = "", t) => `<iframe style="width:${En};height:${t?.viewBox?.baseVal?.height ? t.viewBox.baseVal.height + "px" : Dn};${On}" src="data:text/html;charset=UTF-8;base64,${vn(`<body style="${kn}">${e}</body>`)}" sandbox="${An}">
  ${jn}
</iframe>`, "putIntoIFrame"), Hn = /* @__PURE__ */ n((e, t, n, r, i) => {
	let a = e.append("div");
	a.attr("id", n), r && a.attr("style", r);
	let o = a.append("svg").attr("id", t).attr("width", "100%").attr("xmlns", Cn);
	return i && o.attr("xmlns:xlink", i), o.append("g"), e;
}, "appendDivSvgG");
function Un(e, t) {
	return e.append("iframe").attr("id", t).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
n(Un, "sandboxedIframe");
var Wn = /* @__PURE__ */ n((e, t, n, r) => {
	e.getElementById(t)?.remove(), e.getElementById(n)?.remove(), e.getElementById(r)?.remove();
}, "removeExistingElements"), Gn = /* @__PURE__ */ n(async function(e, a, o) {
	J();
	let s = Pn(a);
	a = s.code;
	let c = y();
	t.debug(c), a.length > (c?.maxTextSize ?? yn) && (a = bn);
	let l = `#${e}`, u = "i" + e, d = "#" + u, f = "d" + e, p = "#" + f, m = /* @__PURE__ */ n(() => {
		let e = r(g ? d : p).node();
		e && "remove" in e && e.remove();
	}, "removeTempElements"), h = r(document.body), g = c.securityLevel === xn, _ = c.securityLevel === Sn, v = c.fontFamily;
	o === void 0 ? (Wn(document, e, f, u), g ? (h = r(Un(r(document.body), u).nodes()[0].contentDocument.body), h.node().style.margin = "0") : h = r("body"), Hn(h, e, f)) : (o && (o.innerHTML = ""), g ? (h = r(Un(r(o), u).nodes()[0].contentDocument.body), h.node().style.margin = "0") : h = r(o), Hn(h, e, f, `font-family: ${v}`, wn));
	let b, S;
	try {
		b = await Y.fromText(a, { title: s.title });
	} catch (e) {
		if (c.suppressErrorRendering) throw m(), e;
		b = await Y.fromText("error"), S = e;
	}
	let C = h.select(p).node(), w = b.type, T = C.firstChild, ee = T.firstChild, te = b.renderer.getClasses?.(a, b), ne = zn(c, w, te, l), E = document.createElement("style");
	E.innerHTML = ne, T.insertBefore(E, ee);
	try {
		await b.renderer.draw(a, e, "11.15.0", b);
	} catch (t) {
		throw c.suppressErrorRendering ? m() : Dt.draw(a, e, "11.15.0"), t;
	}
	let re = h.select(`${p} svg`), ie = b.db.getAccTitle?.(), ae = b.db.getAccDescription?.();
	Jn(w, re, ie, ae), h.select(`[id="${e}"]`).selectAll("foreignobject > *").attr("xmlns", Tn);
	let D = h.select(p).node().innerHTML;
	if (t.debug("config.arrowMarkerAbsolute", c.arrowMarkerAbsolute), D = Bn(D, g, x(c.arrowMarkerAbsolute)), g) {
		let e = h.select(p + " svg").node();
		D = Vn(D, e);
	} else _ || (D = i.sanitize(D, {
		ADD_TAGS: Mn,
		ADD_ATTR: Nn,
		HTML_INTEGRATION_POINTS: { foreignobject: !0 }
	}));
	if (fn(), S) throw S;
	return m(), {
		diagramType: w,
		svg: D,
		bindFunctions: b.db.bindFunctions
	};
}, "render");
function Kn(t = {}) {
	let n = te({}, t);
	n?.fontFamily && !n.themeVariables?.fontFamily && (n.themeVariables ||= {}, n.themeVariables.fontFamily = n.fontFamily), m(n), n?.theme && n.theme in _ ? n.themeVariables = _[n.theme].getThemeVariables(n.themeVariables) : n && (n.themeVariables = _.default.getThemeVariables(n.themeVariables)), e((typeof n == "object" ? ee(n) : o()).logLevel), J();
}
n(Kn, "initialize");
var qn = /* @__PURE__ */ n((e, t = {}) => {
	let { code: n } = X(e);
	return Y.fromText(n, t);
}, "getDiagramFromText");
function Jn(e, t, n, r) {
	ln(t, e), un(t, n, r, t.attr("id"));
}
n(Jn, "addA11yInfo");
var Z = Object.freeze({
	render: Gn,
	parse: Fn,
	getDiagramFromText: qn,
	initialize: Kn,
	getConfig: y,
	setConfig: h,
	getSiteConfig: o,
	updateSiteConfig: d,
	reset: /* @__PURE__ */ n(() => {
		s();
	}, "reset"),
	globalReset: /* @__PURE__ */ n(() => {
		s(E);
	}, "globalReset"),
	defaultConfig: E
});
e(y().logLevel), s(y());
var Yn = /* @__PURE__ */ n((e, n, r) => {
	t.warn(e), D(e) ? (r && r(e.str, e.hash), n.push({
		...e,
		message: e.str,
		error: e
	})) : (r && r(e), e instanceof Error && n.push({
		str: e.message,
		message: e.message,
		hash: e.name,
		error: e
	}));
}, "handleError"), Xn = /* @__PURE__ */ n(async function(e = { querySelector: ".mermaid" }) {
	try {
		await Zn(e);
	} catch (n) {
		if (D(n) && t.error(n.str), $.parseError && $.parseError(n), !e.suppressErrors) throw t.error("Use the suppressErrors option to suppress these errors"), n;
	}
}, "run"), Zn = /* @__PURE__ */ n(async function({ postRenderCallback: e, querySelector: n, nodes: r } = { querySelector: ".mermaid" }) {
	let i = Z.getConfig();
	t.debug(`${e ? "" : "No "}Callback function found`);
	let a;
	if (r) a = r;
	else if (n) a = document.querySelectorAll(n);
	else throw Error("Nodes and querySelector are both undefined");
	t.debug(`Found ${a.length} diagrams`), i?.startOnLoad !== void 0 && (t.debug("Start On Load: " + i?.startOnLoad), Z.updateSiteConfig({ startOnLoad: i?.startOnLoad }));
	let o = new O.InitIDGenerator(i.deterministicIds, i.deterministicIDSeed), s, c = [];
	for (let n of Array.from(a)) {
		if (t.info("Rendering diagram: " + n.id), n.getAttribute("data-processed")) continue;
		n.setAttribute("data-processed", "true");
		let r = `mermaid-${o.next()}`;
		s = n.innerHTML, s = pe(O.entityDecode(s)).trim().replace(/<br\s*\/?>/gi, "<br/>");
		let i = O.detectInit(s);
		i && t.debug("Detected early reinit: ", i);
		try {
			let { svg: t, bindFunctions: i } = await or(r, s, n);
			n.innerHTML = t, e && await e(r), i && i(n);
		} catch (e) {
			Yn(e, c, $.parseError);
		}
	}
	if (c.length > 0) throw c[0];
}, "runThrowsErrors"), Qn = /* @__PURE__ */ n(function(e) {
	Z.initialize(e);
}, "initialize"), $n = /* @__PURE__ */ n(async function(e, n, r) {
	t.warn("mermaid.init is deprecated. Please use run instead."), e && Qn(e);
	let i = {
		postRenderCallback: r,
		querySelector: ".mermaid"
	};
	typeof n == "string" ? i.querySelector = n : n && (n instanceof HTMLElement ? i.nodes = [n] : i.nodes = n), await Xn(i);
}, "init"), er = /* @__PURE__ */ n(async (e, { lazyLoad: t = !0 } = {}) => {
	J(), u(...e), t === !1 && await sn();
}, "registerExternalDiagrams"), tr = /* @__PURE__ */ n(function() {
	if ($.startOnLoad) {
		let { startOnLoad: e } = Z.getConfig();
		e && $.run().catch((e) => t.error("Mermaid failed to initialize", e));
	}
}, "contentLoaded");
typeof document < "u" && window.addEventListener("load", tr, !1);
var nr = /* @__PURE__ */ n(function(e) {
	$.parseError = e;
}, "setParseErrorHandler"), Q = [], rr = !1, ir = /* @__PURE__ */ n(async () => {
	if (!rr) {
		for (rr = !0; Q.length > 0;) {
			let e = Q.shift();
			if (e) try {
				await e();
			} catch (e) {
				t.error("Error executing queue", e);
			}
		}
		rr = !1;
	}
}, "executeQueue"), ar = /* @__PURE__ */ n(async (e, r) => new Promise((i, a) => {
	let o = /* @__PURE__ */ n(() => new Promise((n, o) => {
		Z.parse(e, r).then((e) => {
			n(e), i(e);
		}, (e) => {
			t.error("Error parsing", e), $.parseError?.(e), o(e), a(e);
		});
	}), "performCall");
	Q.push(o), ir().catch(a);
}), "parse"), or = /* @__PURE__ */ n((e, r, i) => new Promise((a, o) => {
	let s = /* @__PURE__ */ n(() => new Promise((n, s) => {
		Z.render(e, r, i).then((e) => {
			n(e), a(e);
		}, (e) => {
			t.error("Error parsing", e), $.parseError?.(e), s(e), o(e);
		});
	}), "performCall");
	Q.push(s), ir().catch(o);
}), "render"), $ = {
	startOnLoad: !0,
	mermaidAPI: Z,
	parse: ar,
	render: or,
	init: $n,
	run: Xn,
	registerExternalDiagrams: er,
	registerLayoutLoaders: me,
	initialize: Qn,
	parseError: void 0,
	contentLoaded: tr,
	setParseErrorHandler: nr,
	detectType: T,
	registerIconPacks: fe,
	getRegisteredDiagramsMetadata: /* @__PURE__ */ n(() => Object.keys(C).map((e) => ({ id: e })), "getRegisteredDiagramsMetadata")
}, sr = $;
//#endregion
export { sr as default };
