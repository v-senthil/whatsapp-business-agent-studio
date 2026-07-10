import { a as e, r as t, t as n } from "./chunk-HEgqtunE.js";
import { t as r } from "./react-DCUEsnwl.js";
import { Dt as i, kt as a } from "./main-CQFzjeJU.js";
import { t as o } from "./jsx-runtime-Bcg76ucg.js";
import { r as s } from "./ZudokuContext-BxG8utmj.js";
import { a as c, c as l, d as u, f as d, h as f, i as p, l as m, m as h, n as g, o as _, r as v, s as y, t as ee, u as b } from "./lib-CpsVp6_W.js";
import { a as te, c as x, l as ne, o as re, s as S, t as C, u as w } from "./shiki-B7Vw5ftG.js";
import { t as ie } from "./useHighlighter-Bh281Ptw.js";
//#region ../../node_modules/.pnpm/html-url-attributes@3.0.1/node_modules/html-url-attributes/lib/index.js
var ae = {
	action: ["form"],
	cite: [
		"blockquote",
		"del",
		"ins",
		"q"
	],
	data: ["object"],
	formAction: ["button", "input"],
	href: [
		"a",
		"area",
		"base",
		"link"
	],
	icon: ["menuitem"],
	itemId: null,
	manifest: ["html"],
	ping: ["a", "area"],
	poster: ["video"],
	src: [
		"audio",
		"embed",
		"iframe",
		"img",
		"input",
		"script",
		"source",
		"track",
		"video"
	]
}, oe = {};
function se(e, t) {
	let n = t || oe;
	return T(e, typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, typeof n.includeHtml == "boolean" ? n.includeHtml : !0);
}
function T(e, t, n) {
	if (le(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return ce(e.children, t, n);
	}
	return Array.isArray(e) ? ce(e, t, n) : "";
}
function ce(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = T(e[i], t, n);
	return r.join("");
}
function le(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region ../../node_modules/.pnpm/decode-named-character-reference@1.2.0_patch_hash=2298147f3cbdebede259acef9af62f260ca1b07a1211c3ad6441209c35ebd12b/node_modules/decode-named-character-reference/index.dom.js
var ue = typeof document < "u" && document.createElement("i");
function de(e) {
	let t = "&" + e + ";";
	ue.innerHTML = t;
	let n = ue.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-chunked@2.0.1/node_modules/micromark-util-chunked/index.js
function E(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function D(e, t) {
	return e.length > 0 ? (E(e, e.length, 0, t), e) : t;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-combine-extensions@2.0.1/node_modules/micromark-util-combine-extensions/index.js
var fe = {}.hasOwnProperty;
function pe(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) me(t, e[n]);
	return t;
}
function me(e, t) {
	let n;
	for (n in t) {
		let r = (fe.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			fe.call(r, a) || (r[a] = []);
			let e = i[a];
			he(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function he(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	E(e, 0, 0, r);
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-decode-numeric-character-reference@2.0.2/node_modules/micromark-util-decode-numeric-character-reference/index.js
function ge(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-normalize-identifier@2.0.1/node_modules/micromark-util-normalize-identifier/index.js
function _e(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-character@2.1.1/node_modules/micromark-util-character/index.js
var O = Te(/[A-Za-z]/), k = Te(/[\dA-Za-z]/), ve = Te(/[#-'*+\--9=?A-Z^-~]/);
function ye(e) {
	return e !== null && (e < 32 || e === 127);
}
var be = Te(/\d/), xe = Te(/[\dA-Fa-f]/), Se = Te(/[!-/:-@[-`{-~]/);
function A(e) {
	return e !== null && e < -2;
}
function j(e) {
	return e !== null && (e < 0 || e === 32);
}
function M(e) {
	return e === -2 || e === -1 || e === 32;
}
var Ce = Te(/\p{P}|\p{S}/u), we = Te(/\s/);
function Te(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-sanitize-uri@2.0.1/node_modules/micromark-util-sanitize-uri/index.js
function Ee(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && k(e.charCodeAt(n + 1)) && k(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o &&= (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, ""), i &&= (n += i, 0);
	}
	return t.join("") + e.slice(r);
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-factory-space@2.0.1/node_modules/micromark-factory-space/index.js
function N(e, t, n, r) {
	let i = r ? r - 1 : Infinity, a = 0;
	return o;
	function o(r) {
		return M(r) ? (e.enter(n), s(r)) : t(r);
	}
	function s(r) {
		return M(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/initialize/content.js
var De = { tokenize: Oe };
function Oe(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) {
			e.consume(n);
			return;
		}
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), N(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), a(t);
	}
	function a(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, o(t);
	}
	function o(t) {
		if (t === null) {
			e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
			return;
		}
		return A(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/initialize/document.js
var ke = { tokenize: je }, Ae = { tokenize: Me };
function je(e) {
	let t = this, n = [], r = 0, i, a, o;
	return s;
	function s(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, c, l)(i);
		}
		return l(i);
	}
	function c(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && v();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			_(r);
			let s = n;
			for (; s < t.events.length;) t.events[s][1].end = { ...o }, s++;
			return E(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(Ae, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(Ae, p, m)(n);
	}
	function p(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), f(e);
	}
	function m(n) {
		if (n === null) {
			i && v(), _(0), e.consume(n);
			return;
		}
		return i ||= t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: a
		}), h(n);
	}
	function h(n) {
		if (n === null) {
			g(e.exit("chunkFlow"), !0), _(0), e.consume(n);
			return;
		}
		return A(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
	}
	function g(e, n) {
		let s = t.sliceStream(e);
		if (n && s.push(null), e.previous = a, a && (a.next = e), a = e, i.defineSkip(e.start), i.write(s), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o)) return;
			let n = t.events.length, a = n, s, c;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (s) {
					c = t.events[a][1].end;
					break;
				}
				s = !0;
			}
			for (_(r), e = n; e < t.events.length;) t.events[e][1].end = { ...c }, e++;
			E(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
		}
	}
	function _(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function v() {
		i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function Me(e, t, n) {
	return N(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-classify-character@2.0.1/node_modules/micromark-util-classify-character/index.js
function Ne(e) {
	if (e === null || j(e) || we(e)) return 1;
	if (Ce(e)) return 2;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-resolve-all@2.0.1/node_modules/micromark-util-resolve-all/index.js
function Pe(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/attention.js
var Fe = {
	name: "attention",
	resolveAll: Ie,
	tokenize: Le
};
function Ie(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			Re(d, -c), Re(f, c), o = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: d,
				end: { ...e[r][1].end }
			}, s = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: f
			}, a = {
				type: c > 1 ? "strongText" : "emphasisText",
				start: { ...e[r][1].end },
				end: { ...e[n][1].start }
			}, i = {
				type: c > 1 ? "strong" : "emphasis",
				start: { ...o.start },
				end: { ...s.end }
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = D(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = D(l, [
				[
					"enter",
					i,
					t
				],
				[
					"enter",
					o,
					t
				],
				[
					"exit",
					o,
					t
				],
				[
					"enter",
					a,
					t
				]
			]), l = D(l, Pe(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = D(l, [
				[
					"exit",
					a,
					t
				],
				[
					"enter",
					s,
					t
				],
				[
					"exit",
					s,
					t
				],
				[
					"exit",
					i,
					t
				]
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = D(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, E(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function Le(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Ne(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = Ne(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function Re(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/autolink.js
var ze = {
	name: "autolink",
	tokenize: Be
};
function Be(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return O(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || k(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || k(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || ye(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : ve(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return k(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || k(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/blank-line.js
var Ve = {
	partial: !0,
	tokenize: He
};
function He(e, t, n) {
	return r;
	function r(t) {
		return M(t) ? N(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || A(e) ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/block-quote.js
var Ue = {
	continuation: { tokenize: Ge },
	exit: Ke,
	name: "blockQuote",
	tokenize: We
};
function We(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		if (t === 62) {
			let n = r.containerState;
			return n.open ||= (e.enter("blockQuote", { _container: !0 }), !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a;
		}
		return n(t);
	}
	function a(n) {
		return M(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function Ge(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return M(t) ? N(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(Ue, t, n)(r);
	}
}
function Ke(e) {
	e.exit("blockQuote");
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/character-escape.js
var qe = {
	name: "characterEscape",
	tokenize: Je
};
function Je(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return Se(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/character-reference.js
var Ye = {
	name: "characterReference",
	tokenize: Xe
};
function Xe(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = k, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = xe, u) : (e.enter("characterReferenceValue"), a = 7, o = be, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === k && !de(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/code-fenced.js
var Ze = {
	partial: !0,
	tokenize: et
}, Qe = {
	concrete: !0,
	name: "codeFenced",
	tokenize: $e
};
function $e(e, t, n) {
	let r = this, i = {
		partial: !0,
		tokenize: b
	}, a = 0, o = 0, s;
	return c;
	function c(e) {
		return l(e);
	}
	function l(t) {
		let n = r.events[r.events.length - 1];
		return a = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, s = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t);
	}
	function u(t) {
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), M(t) ? N(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || A(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(Ze, h, ee)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || A(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : M(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), N(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || A(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || A(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function h(t) {
		return e.attempt(i, ee, g)(t);
	}
	function g(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), _;
	}
	function _(t) {
		return a > 0 && M(t) ? N(e, v, "linePrefix", a + 1)(t) : v(t);
	}
	function v(t) {
		return t === null || A(t) ? e.check(Ze, h, ee)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || A(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
	}
	function ee(n) {
		return e.exit("codeFenced"), t(n);
	}
	function b(e, t, n) {
		let i = 0;
		return a;
		function a(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c;
		}
		function c(t) {
			return e.enter("codeFencedFence"), M(t) ? N(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), M(t) ? N(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || A(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function et(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/code-indented.js
var tt = {
	name: "codeIndented",
	tokenize: rt
}, nt = {
	partial: !0,
	tokenize: it
};
function rt(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), N(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e);
	}
	function o(t) {
		return t === null ? c(t) : A(t) ? e.attempt(nt, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || A(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function it(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : A(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : N(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : A(e) ? i(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/code-text.js
var at = {
	name: "codeText",
	previous: st,
	resolve: ot,
	tokenize: ct
};
function ot(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function st(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function ct(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : A(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || A(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-subtokenize@2.1.0/node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var lt = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? Infinity;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, Infinity);
		return n && ut(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), ut(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), ut(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			ut(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			ut(this.left, t.reverse());
		}
	}
};
function ut(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-subtokenize@2.1.0/node_modules/micromark-util-subtokenize/index.js
function dt(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new lt(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, ft(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return E(e, 0, Infinity, u.slice(0)), !l;
}
function ft(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
	for (; p;) {
		for (; e.get(++i)[1] !== p;);
		a.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), d && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
	}
	for (p = n; ++f < s.length;) s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1, g.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
	for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), f = g.length; f--;) {
		let t = s.slice(g[f], g[f + 1]), n = a.pop();
		c.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (c.reverse(), f = -1; ++f < c.length;) l[m + c[f][0]] = m + c[f][1], m += c[f][1] - c[f][0] - 1;
	return l;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/content.js
var pt = {
	resolve: ht,
	tokenize: gt
}, mt = {
	partial: !0,
	tokenize: _t
};
function ht(e) {
	return dt(e), e;
}
function gt(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : A(t) ? e.check(mt, o, a)(t) : (e.consume(t), i);
	}
	function a(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function o(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function _t(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), N(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || A(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-factory-destination@2.0.1/node_modules/micromark-factory-destination/index.js
function vt(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || ye(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || A(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || j(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || ye(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-factory-label@2.0.1/node_modules/micromark-factory-label/index.js
function yt(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : A(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || A(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c ||= !M(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-factory-title@2.0.1/node_modules/micromark-factory-title/index.js
function bt(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : A(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), N(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || A(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-factory-whitespace@2.0.1/node_modules/micromark-factory-whitespace/index.js
function xt(e, t) {
	let n;
	return r;
	function r(i) {
		return A(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : M(i) ? N(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/definition.js
var St = {
	name: "definition",
	tokenize: wt
}, Ct = {
	partial: !0,
	tokenize: Tt
};
function wt(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return yt.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = _e(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return j(t) ? xt(e, l)(t) : l(t);
	}
	function l(t) {
		return vt(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(Ct, d, d)(t);
	}
	function d(t) {
		return M(t) ? N(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || A(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function Tt(e, t, n) {
	return r;
	function r(t) {
		return j(t) ? xt(e, i)(t) : n(t);
	}
	function i(t) {
		return bt(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return M(t) ? N(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || A(e) ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var Et = {
	name: "hardBreakEscape",
	tokenize: Dt
};
function Dt(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return A(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/heading-atx.js
var Ot = {
	name: "headingAtx",
	resolve: kt,
	tokenize: At
};
function kt(e, t) {
	let n = e.length - 2, r = 3, i, a;
	return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
		type: "atxHeadingText",
		start: e[r][1].start,
		end: e[n][1].end
	}, a = {
		type: "chunkText",
		start: e[r][1].start,
		end: e[n][1].end,
		contentType: "text"
	}, E(e, r, n - r + 1, [
		[
			"enter",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"exit",
			a,
			t
		],
		[
			"exit",
			i,
			t
		]
	])), e;
}
function At(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || j(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || A(n) ? (e.exit("atxHeading"), t(n)) : M(n) ? N(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || j(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-html-tag-name@2.0.1/node_modules/micromark-util-html-tag-name/index.js
var jt = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), Mt = [
	"pre",
	"script",
	"style",
	"textarea"
], Nt = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: It,
	tokenize: Lt
}, Pt = {
	partial: !0,
	tokenize: zt
}, Ft = {
	partial: !0,
	tokenize: Rt
};
function It(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function Lt(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : ue) : O(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : O(a) ? (e.consume(a), i = 4, r.interrupt ? t : ue) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : ue) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : w : m) : n(i);
	}
	function h(t) {
		return O(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || j(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && Mt.includes(l) ? (i = 1, r.interrupt ? t(s) : w(s)) : jt.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : w(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || k(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : w) : n(i);
	}
	function v(t) {
		return M(t) ? (e.consume(t), v) : S(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), S) : t === 58 || t === 95 || O(t) ? (e.consume(t), ee) : M(t) ? (e.consume(t), y) : S(t);
	}
	function ee(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || k(t) ? (e.consume(t), ee) : b(t);
	}
	function b(t) {
		return t === 61 ? (e.consume(t), te) : M(t) ? (e.consume(t), b) : y(t);
	}
	function te(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, x) : M(t) ? (e.consume(t), te) : ne(t);
	}
	function x(t) {
		return t === c ? (e.consume(t), c = null, re) : t === null || A(t) ? n(t) : (e.consume(t), x);
	}
	function ne(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || j(t) ? b(t) : (e.consume(t), ne);
	}
	function re(e) {
		return e === 47 || e === 62 || M(e) ? y(e) : n(e);
	}
	function S(t) {
		return t === 62 ? (e.consume(t), C) : n(t);
	}
	function C(t) {
		return t === null || A(t) ? w(t) : M(t) ? (e.consume(t), C) : n(t);
	}
	function w(t) {
		return t === 45 && i === 2 ? (e.consume(t), se) : t === 60 && i === 1 ? (e.consume(t), T) : t === 62 && i === 4 ? (e.consume(t), de) : t === 63 && i === 3 ? (e.consume(t), ue) : t === 93 && i === 5 ? (e.consume(t), le) : A(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(Pt, E, ie)(t)) : t === null || A(t) ? (e.exit("htmlFlowData"), ie(t)) : (e.consume(t), w);
	}
	function ie(t) {
		return e.check(Ft, ae, E)(t);
	}
	function ae(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), oe;
	}
	function oe(t) {
		return t === null || A(t) ? ie(t) : (e.enter("htmlFlowData"), w(t));
	}
	function se(t) {
		return t === 45 ? (e.consume(t), ue) : w(t);
	}
	function T(t) {
		return t === 47 ? (e.consume(t), o = "", ce) : w(t);
	}
	function ce(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return Mt.includes(n) ? (e.consume(t), de) : w(t);
		}
		return O(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), ce) : w(t);
	}
	function le(t) {
		return t === 93 ? (e.consume(t), ue) : w(t);
	}
	function ue(t) {
		return t === 62 ? (e.consume(t), de) : t === 45 && i === 2 ? (e.consume(t), ue) : w(t);
	}
	function de(t) {
		return t === null || A(t) ? (e.exit("htmlFlowData"), E(t)) : (e.consume(t), de);
	}
	function E(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function Rt(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return A(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function zt(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(Ve, t, n);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/html-text.js
var Bt = {
	name: "htmlText",
	tokenize: Vt
};
function Vt(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), b) : t === 63 ? (e.consume(t), y) : O(t) ? (e.consume(t), ne) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : O(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : A(t) ? (o = d, T(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? se(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : A(t) ? (o = h, T(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? se(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? se(t) : A(t) ? (o = v, T(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), ee) : A(t) ? (o = y, T(t)) : (e.consume(t), y);
	}
	function ee(e) {
		return e === 62 ? se(e) : y(e);
	}
	function b(t) {
		return O(t) ? (e.consume(t), te) : n(t);
	}
	function te(t) {
		return t === 45 || k(t) ? (e.consume(t), te) : x(t);
	}
	function x(t) {
		return A(t) ? (o = x, T(t)) : M(t) ? (e.consume(t), x) : se(t);
	}
	function ne(t) {
		return t === 45 || k(t) ? (e.consume(t), ne) : t === 47 || t === 62 || j(t) ? re(t) : n(t);
	}
	function re(t) {
		return t === 47 ? (e.consume(t), se) : t === 58 || t === 95 || O(t) ? (e.consume(t), S) : A(t) ? (o = re, T(t)) : M(t) ? (e.consume(t), re) : se(t);
	}
	function S(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || k(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return t === 61 ? (e.consume(t), w) : A(t) ? (o = C, T(t)) : M(t) ? (e.consume(t), C) : re(t);
	}
	function w(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, ie) : A(t) ? (o = w, T(t)) : M(t) ? (e.consume(t), w) : (e.consume(t), ae);
	}
	function ie(t) {
		return t === i ? (e.consume(t), i = void 0, oe) : t === null ? n(t) : A(t) ? (o = ie, T(t)) : (e.consume(t), ie);
	}
	function ae(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || j(t) ? re(t) : (e.consume(t), ae);
	}
	function oe(e) {
		return e === 47 || e === 62 || j(e) ? re(e) : n(e);
	}
	function se(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function T(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), ce;
	}
	function ce(t) {
		return M(t) ? N(e, le, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : le(t);
	}
	function le(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/label-end.js
var Ht = {
	name: "labelEnd",
	resolveAll: Kt,
	resolveTo: qt,
	tokenize: Jt
}, Ut = { tokenize: Yt }, Wt = { tokenize: Xt }, Gt = { tokenize: Zt };
function Kt(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && E(e, 0, e.length, n), e;
}
function qt(e, t) {
	let n = e.length, r = 0, i, a, o, s;
	for (; n--;) if (i = e[n][1], a) {
		if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
		e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
	} else if (o) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
			r = 2;
			break;
		}
	} else i.type === "labelEnd" && (o = n);
	let c = {
		type: e[a][1].type === "labelLink" ? "link" : "image",
		start: { ...e[a][1].start },
		end: { ...e[e.length - 1][1].end }
	}, l = {
		type: "label",
		start: { ...e[a][1].start },
		end: { ...e[o][1].end }
	}, u = {
		type: "labelText",
		start: { ...e[a + r + 2][1].end },
		end: { ...e[o - 2][1].start }
	};
	return s = [[
		"enter",
		c,
		t
	], [
		"enter",
		l,
		t
	]], s = D(s, e.slice(a + 1, a + r + 3)), s = D(s, [[
		"enter",
		u,
		t
	]]), s = D(s, Pe(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = D(s, [
		[
			"exit",
			u,
			t
		],
		e[o - 2],
		e[o - 1],
		[
			"exit",
			l,
			t
		]
	]), s = D(s, e.slice(o + 1)), s = D(s, [[
		"exit",
		c,
		t
	]]), E(e, a, e.length, s), e;
}
function Jt(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(_e(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(Ut, u, o ? u : d)(t) : t === 91 ? e.attempt(Wt, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(Gt, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function Yt(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return j(t) ? xt(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : vt(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return j(t) ? xt(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? bt(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return j(t) ? xt(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function Xt(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return yt.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(_e(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function Zt(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/label-start-image.js
var Qt = {
	name: "labelStartImage",
	resolveAll: Ht.resolveAll,
	tokenize: $t
};
function $t(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a;
	}
	function a(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t);
	}
	function o(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/label-start-link.js
var en = {
	name: "labelStartLink",
	resolveAll: Ht.resolveAll,
	tokenize: tn
};
function tn(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a;
	}
	function a(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/line-ending.js
var nn = {
	name: "lineEnding",
	tokenize: rn
};
function rn(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), N(e, t, "linePrefix");
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/thematic-break.js
var an = {
	name: "thematicBreak",
	tokenize: on
};
function on(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || A(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), M(t) ? N(e, s, "whitespace")(t) : s(t));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/list.js
var P = {
	continuation: { tokenize: un },
	exit: fn,
	name: "list",
	tokenize: ln
}, sn = {
	partial: !0,
	tokenize: pn
}, cn = {
	partial: !0,
	tokenize: dn
};
function ln(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : be(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(an, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return be(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(Ve, r.interrupt ? n : u, e.attempt(sn, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return M(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function un(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(Ve, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, N(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !M(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(cn, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, N(e, e.attempt(P, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function dn(e, t, n) {
	let r = this;
	return N(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function fn(e) {
	e.exit(this.containerState.type);
}
function pn(e, t, n) {
	let r = this;
	return N(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !M(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-core-commonmark@2.0.3/node_modules/micromark-core-commonmark/lib/setext-underline.js
var mn = {
	name: "setextUnderline",
	resolveTo: hn,
	tokenize: gn
};
function hn(e, t) {
	let n = e.length, r, i, a;
	for (; n--;) if (e[n][0] === "enter") {
		if (e[n][1].type === "content") {
			r = n;
			break;
		}
		e[n][1].type === "paragraph" && (i = n);
	} else e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
	let o = {
		type: "setextHeading",
		start: { ...e[r][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, [
		"enter",
		o,
		t
	]), e.splice(a + 1, 0, [
		"exit",
		e[r][1],
		t
	]), e[r][1].end = { ...e[a][1].end }) : e[r][1] = o, e.push([
		"exit",
		o,
		t
	]), e;
}
function gn(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		let a = r.events.length, s;
		for (; a--;) if (r.events[a][1].type !== "lineEnding" && r.events[a][1].type !== "linePrefix" && r.events[a][1].type !== "content") {
			s = r.events[a][1].type === "paragraph";
			break;
		}
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, o(t)) : n(t);
	}
	function o(t) {
		return e.enter("setextHeadingLineSequence"), s(t);
	}
	function s(t) {
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), M(t) ? N(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || A(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/initialize/flow.js
var _n = { tokenize: vn };
function vn(e) {
	let t = this, n = e.attempt(Ve, r, e.attempt(this.parser.constructs.flowInitial, i, N(e, e.attempt(this.parser.constructs.flow, i, e.attempt(pt, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/initialize/text.js
var yn = { resolveAll: Cn() }, bn = Sn("string"), xn = Sn("text");
function Sn(e) {
	return {
		resolveAll: Cn(e === "text" ? wn : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return c(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) {
				t.consume(e);
				return;
			}
			return t.enter("data"), t.consume(e), s;
		}
		function s(e) {
			return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
		}
		function c(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function Cn(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function wn(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
		let r = e[n - 1][1], i = t.sliceStream(r), a = i.length, o = -1, s = 0, c;
		for (; a--;) {
			let e = i[a];
			if (typeof e == "string") {
				for (o = e.length; e.charCodeAt(o - 1) === 32;) s++, o--;
				if (o) break;
				o = -1;
			} else if (e === -2) c = !0, s++;
			else if (e !== -1) {
				a++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
			let i = {
				type: n === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: a ? o : r.start._bufferIndex + o,
					_index: r.start._index + a,
					line: r.end.line,
					column: r.end.column - s,
					offset: r.end.offset - s
				},
				end: { ...r.end }
			};
			r.end = { ...i.start }, r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [
				"enter",
				i,
				t
			], [
				"exit",
				i,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/constructs.js
var Tn = /* @__PURE__ */ t({
	attentionMarkers: () => Nn,
	contentInitial: () => Dn,
	disable: () => Pn,
	document: () => En,
	flow: () => kn,
	flowInitial: () => On,
	insideSpan: () => Mn,
	string: () => An,
	text: () => jn
}), En = {
	42: P,
	43: P,
	45: P,
	48: P,
	49: P,
	50: P,
	51: P,
	52: P,
	53: P,
	54: P,
	55: P,
	56: P,
	57: P,
	62: Ue
}, Dn = { 91: St }, On = {
	[-2]: tt,
	[-1]: tt,
	32: tt
}, kn = {
	35: Ot,
	42: an,
	45: [mn, an],
	60: Nt,
	61: mn,
	95: an,
	96: Qe,
	126: Qe
}, An = {
	38: Ye,
	92: qe
}, jn = {
	[-5]: nn,
	[-4]: nn,
	[-3]: nn,
	33: Qt,
	38: Ye,
	42: Fe,
	60: [ze, Bt],
	91: en,
	92: [Et, qe],
	93: Ht,
	95: Fe,
	96: at
}, Mn = { null: [Fe, yn] }, Nn = { null: [42, 95] }, Pn = { null: [] };
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/create-tokenizer.js
function Fn(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, a = [], o = [], s = [], c = {
		attempt: x(b),
		check: x(te),
		consume: v,
		enter: y,
		exit: ee,
		interrupt: x(te, { interrupt: !0 })
	}, l = {
		code: null,
		containerState: {},
		defineSkip: h,
		events: [],
		now: m,
		parser: e,
		previous: null,
		sliceSerialize: f,
		sliceStream: p,
		write: d
	}, u = t.tokenize.call(l, c);
	return t.resolveAll && a.push(t), l;
	function d(e) {
		return o = D(o, e), g(), o[o.length - 1] === null ? (ne(t, 0), l.events = Pe(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return Ln(p(e), t);
	}
	function p(e) {
		return In(o, e);
	}
	function m() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function h(e) {
		i[e.line] = e.column, S();
	}
	function g() {
		let e;
		for (; r._index < o.length;) {
			let t = o[r._index];
			if (typeof t == "string") for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) _(t.charCodeAt(r._bufferIndex));
			else _(t);
		}
	}
	function _(e) {
		u = u(e);
	}
	function v(e) {
		A(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, S()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
	}
	function y(e, t) {
		let n = t || {};
		return n.type = e, n.start = m(), l.events.push([
			"enter",
			n,
			l
		]), s.push(n), n;
	}
	function ee(e) {
		let t = s.pop();
		return t.end = m(), l.events.push([
			"exit",
			t,
			l
		]), t;
	}
	function b(e, t) {
		ne(e, t.from);
	}
	function te(e, t) {
		t.restore();
	}
	function x(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, s, u;
			return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : d(n);
			function d(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function f(e) {
				return a = e, o = 0, e.length === 0 ? i : p(e[o]);
			}
			function p(e) {
				return n;
				function n(n) {
					return u = re(), s = e, e.partial || (l.currentConstruct = e), e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n);
				}
			}
			function m(t) {
				return e(s, u), r;
			}
			function h(e) {
				return u.restore(), ++o < a.length ? p(a[o]) : i;
			}
		}
	}
	function ne(e, t) {
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && E(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
	}
	function re() {
		let e = m(), t = l.previous, n = l.currentConstruct, i = l.events.length, a = Array.from(s);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, l.previous = t, l.currentConstruct = n, l.events.length = i, s = a, S();
		}
	}
	function S() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function In(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function Ln(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/parse.js
function Rn(e) {
	let t = {
		constructs: pe([Tn, ...(e || {}).extensions || []]),
		content: n(De),
		defined: [],
		document: n(ke),
		flow: n(_n),
		lazy: {},
		string: n(bn),
		text: n(xn)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return Fn(t, e, n);
		}
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/postprocess.js
function zn(e) {
	for (; !dt(e););
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark@4.0.2/node_modules/micromark/lib/preprocess.js
var Bn = /[\0\t\n\r]/g;
function Vn() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && u++, void 0); u < i.length;) {
			if (Bn.lastIndex = u, c = Bn.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
				t = i.slice(u);
				break;
			}
			if (f === 10 && u === d && r) s.push(-3), r = void 0;
			else switch (r &&= (s.push(-5), void 0), u < d && (s.push(i.slice(u, d)), e += d - u), f) {
				case 0:
					s.push(65533), e++;
					break;
				case 9:
					for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l;) s.push(-1);
					break;
				case 10:
					s.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			u = d + 1;
		}
		return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-util-decode-string@2.0.1/node_modules/micromark-util-decode-string/index.js
var Hn = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function Un(e) {
	return e.replace(Hn, Wn);
}
function Wn(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return ge(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return de(n) || e;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-from-markdown@2.0.2/node_modules/mdast-util-from-markdown/lib/index.js
var Gn = {}.hasOwnProperty;
function Kn(e, t, n) {
	return typeof t != "string" && (n = t, t = void 0), qn(n)(zn(Rn(n).document().write(Vn()(e, t, !0))));
}
function qn(e) {
	let t = {
		transforms: [],
		canContainEols: [
			"emphasis",
			"fragment",
			"heading",
			"paragraph",
			"strong"
		],
		enter: {
			autolink: a(N),
			autolinkProtocol: S,
			autolinkEmail: S,
			atxHeading: a(Ce),
			blockQuote: a(xe),
			characterEscape: S,
			characterReference: S,
			codeFenced: a(Se),
			codeFencedFenceInfo: o,
			codeFencedFenceMeta: o,
			codeIndented: a(Se, o),
			codeText: a(A, o),
			codeTextData: S,
			data: S,
			codeFlowValue: S,
			definition: a(j),
			definitionDestinationString: o,
			definitionLabelString: o,
			definitionTitleString: o,
			emphasis: a(M),
			hardBreakEscape: a(we),
			hardBreakTrailing: a(we),
			htmlFlow: a(Te, o),
			htmlFlowData: S,
			htmlText: a(Te, o),
			htmlTextData: S,
			image: a(Ee),
			label: o,
			link: a(N),
			listItem: a(Oe),
			listItemValue: f,
			listOrdered: a(De, d),
			listUnordered: a(De),
			paragraph: a(ke),
			reference: me,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: a(Ce),
			strong: a(Ae),
			thematicBreak: a(Me)
		},
		exit: {
			atxHeading: c(),
			atxHeadingSequence: te,
			autolink: c(),
			autolinkEmail: be,
			autolinkProtocol: ye,
			blockQuote: c(),
			characterEscapeValue: C,
			characterReferenceMarkerHexadecimal: O,
			characterReferenceMarkerNumeric: O,
			characterReferenceValue: k,
			characterReference: ve,
			codeFenced: c(g),
			codeFencedFence: h,
			codeFencedFenceInfo: p,
			codeFencedFenceMeta: m,
			codeFlowValue: C,
			codeIndented: c(_),
			codeText: c(T),
			codeTextData: C,
			data: C,
			definition: c(),
			definitionDestinationString: b,
			definitionLabelString: y,
			definitionTitleString: ee,
			emphasis: c(),
			hardBreakEscape: c(ie),
			hardBreakTrailing: c(ie),
			htmlFlow: c(ae),
			htmlFlowData: C,
			htmlText: c(oe),
			htmlTextData: C,
			image: c(le),
			label: E,
			labelText: ue,
			lineEnding: w,
			link: c(ce),
			listItem: c(),
			listOrdered: c(),
			listUnordered: c(),
			paragraph: c(),
			referenceString: he,
			resourceDestinationString: D,
			resourceTitleString: fe,
			resource: pe,
			setextHeading: c(re),
			setextHeadingLineSequence: ne,
			setextHeadingText: x,
			strong: c(),
			thematicBreak: c()
		}
	};
	Yn(t, (e || {}).mdastExtensions || []);
	let n = {};
	return r;
	function r(e) {
		let r = {
			type: "root",
			children: []
		}, a = {
			stack: [r],
			tokenStack: [],
			config: t,
			enter: s,
			exit: l,
			buffer: o,
			resume: u,
			data: n
		}, c = [], d = -1;
		for (; ++d < e.length;) (e[d][1].type === "listOrdered" || e[d][1].type === "listUnordered") && (e[d][0] === "enter" ? c.push(d) : d = i(e, c.pop(), d));
		for (d = -1; ++d < e.length;) {
			let n = t[e[d][0]];
			Gn.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || Zn).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: Jn(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: Jn(e.length > 0 ? e[e.length - 2][1].end : {
				line: 1,
				column: 1,
				offset: 0
			})
		}, d = -1; ++d < t.transforms.length;) r = t.transforms[d](r) || r;
		return r;
	}
	function i(e, t, n) {
		let r = t - 1, i = -1, a = !1, o, s, c, l;
		for (; ++r <= n;) {
			let t = e[r];
			switch (t[1].type) {
				case "listUnordered":
				case "listOrdered":
				case "blockQuote":
					t[0] === "enter" ? i++ : i--, l = void 0;
					break;
				case "lineEndingBlank":
					t[0] === "enter" && (o && !l && !i && !c && (c = r), l = void 0);
					break;
				case "linePrefix":
				case "listItemValue":
				case "listItemMarker":
				case "listItemPrefix":
				case "listItemPrefixWhitespace": break;
				default: l = void 0;
			}
			if (!i && t[0] === "enter" && t[1].type === "listItemPrefix" || i === -1 && t[0] === "exit" && (t[1].type === "listUnordered" || t[1].type === "listOrdered")) {
				if (o) {
					let i = r;
					for (s = void 0; i--;) {
						let t = e[i];
						if (t[1].type === "lineEnding" || t[1].type === "lineEndingBlank") {
							if (t[0] === "exit") continue;
							s && (e[s][1].type = "lineEndingBlank", a = !0), t[1].type = "lineEnding", s = i;
						} else if (!(t[1].type === "linePrefix" || t[1].type === "blockQuotePrefix" || t[1].type === "blockQuotePrefixWhitespace" || t[1].type === "blockQuoteMarker" || t[1].type === "listItemIndent")) break;
					}
					c && (!s || c < s) && (o._spread = !0), o.end = Object.assign({}, s ? e[s][1].start : t[1].end), e.splice(s || r, 0, [
						"exit",
						o,
						t[2]
					]), r++, n++;
				}
				if (t[1].type === "listItemPrefix") {
					let i = {
						type: "listItem",
						_spread: !1,
						start: Object.assign({}, t[1].start),
						end: void 0
					};
					o = i, e.splice(r, 0, [
						"enter",
						i,
						t[2]
					]), r++, n++, c = void 0, l = !0;
				}
			}
		}
		return e[t][1]._spread = a, n;
	}
	function a(e, t) {
		return n;
		function n(n) {
			s.call(this, e(n), n), t && t.call(this, n);
		}
	}
	function o() {
		this.stack.push({
			type: "fragment",
			children: []
		});
	}
	function s(e, t, n) {
		this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
			start: Jn(t.start),
			end: void 0
		};
	}
	function c(e) {
		return t;
		function t(t) {
			e && e.call(this, t), l.call(this, t);
		}
	}
	function l(e, t) {
		let n = this.stack.pop(), r = this.tokenStack.pop();
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || Zn).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + v({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = Jn(e.end);
	}
	function u() {
		return se(this.stack.pop());
	}
	function d() {
		this.data.expectingFirstListItemValue = !0;
	}
	function f(e) {
		if (this.data.expectingFirstListItemValue) {
			let t = this.stack[this.stack.length - 2];
			t.start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0;
		}
	}
	function p() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.lang = e;
	}
	function m() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.meta = e;
	}
	function h() {
		this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
	}
	function g() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
	}
	function _() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/(\r?\n|\r)$/g, "");
	}
	function y(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = _e(this.sliceSerialize(e)).toLowerCase();
	}
	function ee() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function b() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function te(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth ||= this.sliceSerialize(e).length;
	}
	function x() {
		this.data.setextHeadingSlurpLineEnding = !0;
	}
	function ne(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
	}
	function re() {
		this.data.setextHeadingSlurpLineEnding = void 0;
	}
	function S(e) {
		let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
		(!n || n.type !== "text") && (n = je(), n.position = {
			start: Jn(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function C(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = Jn(e.end);
	}
	function w(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = Jn(e.end), this.data.atHardBreak = void 0;
			return;
		}
		!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (S.call(this, e), C.call(this, e));
	}
	function ie() {
		this.data.atHardBreak = !0;
	}
	function ae() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function oe() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function T() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function ce() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function le() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function ue(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = Un(t), n.identifier = _e(t).toLowerCase();
	}
	function E() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function D() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function fe() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function pe() {
		this.data.inReference = void 0;
	}
	function me() {
		this.data.referenceType = "collapsed";
	}
	function he(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = _e(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function O(e) {
		this.data.characterReferenceType = e.type;
	}
	function k(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = ge(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = de(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function ve(e) {
		let t = this.stack.pop();
		t.position.end = Jn(e.end);
	}
	function ye(e) {
		C.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = this.sliceSerialize(e);
	}
	function be(e) {
		C.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = "mailto:" + this.sliceSerialize(e);
	}
	function xe() {
		return {
			type: "blockquote",
			children: []
		};
	}
	function Se() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		};
	}
	function A() {
		return {
			type: "inlineCode",
			value: ""
		};
	}
	function j() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: ""
		};
	}
	function M() {
		return {
			type: "emphasis",
			children: []
		};
	}
	function Ce() {
		return {
			type: "heading",
			depth: 0,
			children: []
		};
	}
	function we() {
		return { type: "break" };
	}
	function Te() {
		return {
			type: "html",
			value: ""
		};
	}
	function Ee() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		};
	}
	function N() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		};
	}
	function De(e) {
		return {
			type: "list",
			ordered: e.type === "listOrdered",
			start: null,
			spread: e._spread,
			children: []
		};
	}
	function Oe(e) {
		return {
			type: "listItem",
			spread: e._spread,
			checked: null,
			children: []
		};
	}
	function ke() {
		return {
			type: "paragraph",
			children: []
		};
	}
	function Ae() {
		return {
			type: "strong",
			children: []
		};
	}
	function je() {
		return {
			type: "text",
			value: ""
		};
	}
	function Me() {
		return { type: "thematicBreak" };
	}
}
function Jn(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function Yn(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? Yn(e, r) : Xn(e, r);
	}
}
function Xn(e, t) {
	let n;
	for (n in t) if (Gn.call(t, n)) switch (n) {
		case "canContainEols": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "transforms": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "enter":
		case "exit": {
			let r = t[n];
			r && Object.assign(e[n], r);
			break;
		}
	}
}
function Zn(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + v({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + v({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + v({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
//#endregion
//#region ../../node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/lib/index.js
function Qn(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return Kn(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function $n(e, t) {
	let n = {
		type: "element",
		tagName: "blockquote",
		properties: {},
		children: e.wrap(e.all(t), !0)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/break.js
function er(e, t) {
	let n = {
		type: "element",
		tagName: "br",
		properties: {},
		children: []
	};
	return e.patch(t, n), [e.applyData(t, n), {
		type: "text",
		value: "\n"
	}];
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/code.js
function tr(e, t) {
	let n = t.value ? t.value + "\n" : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
	i.length > 0 && (r.className = ["language-" + i[0]]);
	let a = {
		type: "element",
		tagName: "code",
		properties: r,
		children: [{
			type: "text",
			value: n
		}]
	};
	return t.meta && (a.data = { meta: t.meta }), e.patch(t, a), a = e.applyData(t, a), a = {
		type: "element",
		tagName: "pre",
		properties: {},
		children: [a]
	}, e.patch(t, a), a;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/delete.js
function nr(e, t) {
	let n = {
		type: "element",
		tagName: "del",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function rr(e, t) {
	let n = {
		type: "element",
		tagName: "em",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function ir(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Ee(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
	s === void 0 ? (s = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, s += 1, e.footnoteCounts.set(r, s);
	let c = {
		type: "element",
		tagName: "a",
		properties: {
			href: "#" + n + "fn-" + i,
			id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
			dataFootnoteRef: !0,
			ariaDescribedBy: ["footnote-label"]
		},
		children: [{
			type: "text",
			value: String(o)
		}]
	};
	e.patch(t, c);
	let l = {
		type: "element",
		tagName: "sup",
		properties: {},
		children: [c]
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/heading.js
function ar(e, t) {
	let n = {
		type: "element",
		tagName: "h" + t.depth,
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/html.js
function or(e, t) {
	if (e.options.allowDangerousHtml) {
		let n = {
			type: "raw",
			value: t.value
		};
		return e.patch(t, n), e.applyData(t, n);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/revert.js
function sr(e, t) {
	let n = t.referenceType, r = "]";
	if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), a = i[0];
	a && a.type === "text" ? a.value = "[" + a.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && o.type === "text" ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function cr(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return sr(e, t);
	let i = {
		src: Ee(r.url || ""),
		alt: t.alt
	};
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "img",
		properties: i,
		children: []
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/image.js
function lr(e, t) {
	let n = { src: Ee(t.url) };
	t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "img",
		properties: n,
		children: []
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function ur(e, t) {
	let n = {
		type: "text",
		value: t.value.replace(/\r?\n|\r/g, " ")
	};
	e.patch(t, n);
	let r = {
		type: "element",
		tagName: "code",
		properties: {},
		children: [n]
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function dr(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return sr(e, t);
	let i = { href: Ee(r.url || "") };
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "a",
		properties: i,
		children: e.all(t)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/link.js
function fr(e, t) {
	let n = { href: Ee(t.url) };
	t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "a",
		properties: n,
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function pr(e, t, n) {
	let r = e.all(t), i = n ? mr(n) : hr(t), a = {}, o = [];
	if (typeof t.checked == "boolean") {
		let e = r[0], n;
		e && e.type === "element" && e.tagName === "p" ? n = e : (n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: []
		}, r.unshift(n)), n.children.length > 0 && n.children.unshift({
			type: "text",
			value: " "
		}), n.children.unshift({
			type: "element",
			tagName: "input",
			properties: {
				type: "checkbox",
				checked: t.checked,
				disabled: !0
			},
			children: []
		}), a.className = ["task-list-item"];
	}
	let s = -1;
	for (; ++s < r.length;) {
		let e = r[s];
		(i || s !== 0 || e.type !== "element" || e.tagName !== "p") && o.push({
			type: "text",
			value: "\n"
		}), e.type === "element" && e.tagName === "p" && !i ? o.push(...e.children) : o.push(e);
	}
	let c = r[r.length - 1];
	c && (i || c.type !== "element" || c.tagName !== "p") && o.push({
		type: "text",
		value: "\n"
	});
	let l = {
		type: "element",
		tagName: "li",
		properties: a,
		children: o
	};
	return e.patch(t, l), e.applyData(t, l);
}
function mr(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = hr(n[r]);
	}
	return t;
}
function hr(e) {
	return e.spread ?? e.children.length > 1;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/list.js
function gr(e, t) {
	let n = {}, r = e.all(t), i = -1;
	for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
		let e = r[i];
		if (e.type === "element" && e.tagName === "li" && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
			n.className = ["contains-task-list"];
			break;
		}
	}
	let a = {
		type: "element",
		tagName: t.ordered ? "ol" : "ul",
		properties: n,
		children: e.wrap(r, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function _r(e, t) {
	let n = {
		type: "element",
		tagName: "p",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/root.js
function vr(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/strong.js
function yr(e, t) {
	let n = {
		type: "element",
		tagName: "strong",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/table.js
function br(e, t) {
	let n = e.all(t), r = n.shift(), i = [];
	if (r) {
		let n = {
			type: "element",
			tagName: "thead",
			properties: {},
			children: e.wrap([r], !0)
		};
		e.patch(t.children[0], n), i.push(n);
	}
	if (n.length > 0) {
		let r = {
			type: "element",
			tagName: "tbody",
			properties: {},
			children: e.wrap(n, !0)
		}, a = c(t.children[1]), o = p(t.children[t.children.length - 1]);
		a && o && (r.position = {
			start: a,
			end: o
		}), i.push(r);
	}
	let a = {
		type: "element",
		tagName: "table",
		properties: {},
		children: e.wrap(i, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/table-row.js
function xr(e, t, n) {
	let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, o = a ? a.length : t.children.length, s = -1, c = [];
	for (; ++s < o;) {
		let n = t.children[s], r = {}, o = a ? a[s] : void 0;
		o && (r.align = o);
		let l = {
			type: "element",
			tagName: i,
			properties: r,
			children: []
		};
		n && (l.children = e.all(n), e.patch(n, l), l = e.applyData(n, l)), c.push(l);
	}
	let l = {
		type: "element",
		tagName: "tr",
		properties: {},
		children: e.wrap(c, !0)
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/table-cell.js
function Sr(e, t) {
	let n = {
		type: "element",
		tagName: "td",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/trim-lines@3.0.1/node_modules/trim-lines/index.js
var Cr = 9, wr = 32;
function Tr(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(Er(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(Er(t.slice(i), i > 0, !1)), a.join("");
}
function Er(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === Cr || t === wr;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === Cr || t === wr;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/text.js
function Dr(e, t) {
	let n = {
		type: "text",
		value: Tr(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function Or(e, t) {
	let n = {
		type: "element",
		tagName: "hr",
		properties: {},
		children: []
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/handlers/index.js
var kr = {
	blockquote: $n,
	break: er,
	code: tr,
	delete: nr,
	emphasis: rr,
	footnoteReference: ir,
	heading: ar,
	html: or,
	imageReference: cr,
	image: lr,
	inlineCode: ur,
	linkReference: dr,
	link: fr,
	listItem: pr,
	list: gr,
	paragraph: _r,
	root: vr,
	strong: yr,
	table: br,
	tableCell: Sr,
	tableRow: xr,
	text: Dr,
	thematicBreak: Or,
	toml: Ar,
	yaml: Ar,
	definition: Ar,
	footnoteDefinition: Ar
};
function Ar() {}
//#endregion
//#region ../../node_modules/.pnpm/@ungap+structured-clone@1.3.0/node_modules/@ungap/structured-clone/esm/deserialize.js
var jr = typeof self == "object" ? self : globalThis, Mr = (e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [a, o] = t[i];
		switch (a) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) e[r(t)] = r(n);
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(new jr[e](t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(new jr[a](o), i);
	};
	return r;
}, Nr = (e) => Mr(/* @__PURE__ */ new Map(), e)(0), Pr = "", { toString: Fr } = {}, { keys: Ir } = Object, Lr = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = Fr.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, Pr];
		case "Object": return [2, Pr];
		case "Date": return [3, Pr];
		case "RegExp": return [4, Pr];
		case "Map": return [5, Pr];
		case "Set": return [6, Pr];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, Rr = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), zr = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = Lr(r);
		switch (o) {
			case 0: {
				let t = r;
				switch (s) {
					case "bigint":
						o = 8, t = r.toString();
						break;
					case "function":
					case "symbol":
						if (e) throw TypeError("unable to serialize " + s);
						t = null;
						break;
					case "undefined": return i([-1], r);
				}
				return i([o, t], r);
			}
			case 1: {
				if (s) {
					let e = r;
					return s === "DataView" ? e = new Uint8Array(r.buffer) : s === "ArrayBuffer" && (e = new Uint8Array(r)), i([s, [...e]], r);
				}
				let e = [], t = i([o, e], r);
				for (let t of r) e.push(a(t));
				return t;
			}
			case 2: {
				if (s) switch (s) {
					case "BigInt": return i([s, r.toString()], r);
					case "Boolean":
					case "Number":
					case "String": return i([s, r.valueOf()], r);
				}
				if (t && "toJSON" in r) return a(r.toJSON());
				let n = [], c = i([o, n], r);
				for (let t of Ir(r)) (e || !Rr(Lr(r[t]))) && n.push([a(t), a(r[t])]);
				return c;
			}
			case 3: return i([o, r.toISOString()], r);
			case 4: {
				let { source: e, flags: t } = r;
				return i([o, {
					source: e,
					flags: t
				}], r);
			}
			case 5: {
				let t = [], n = i([o, t], r);
				for (let [n, i] of r) (e || !(Rr(Lr(n)) || Rr(Lr(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !Rr(Lr(n))) && t.push(a(n));
				return n;
			}
		}
		let { message: c } = r;
		return i([o, {
			name: s,
			message: c
		}], r);
	};
	return a;
}, Br = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return zr(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Vr = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? Nr(Br(e, t)) : structuredClone(e) : (e, t) => Nr(Br(e, t));
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/footer.js
function Hr(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function Ur(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Wr(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Hr, r = e.options.footnoteBackLabel || Ur, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = Ee(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
		for (; f !== void 0 && ++u <= f;) {
			d.length > 0 && d.push({
				type: "text",
				value: " "
			});
			let e = typeof n == "string" ? n : n(c, u);
			typeof e == "string" && (e = {
				type: "text",
				value: e
			}), d.push({
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + t + "fnref-" + l + (u > 1 ? "-" + u : ""),
					dataFootnoteBackref: "",
					ariaLabel: typeof r == "string" ? r : r(c, u),
					className: ["data-footnote-backref"]
				},
				children: Array.isArray(e) ? e : [e]
			});
		}
		let p = a[a.length - 1];
		if (p && p.type === "element" && p.tagName === "p") {
			let e = p.children[p.children.length - 1];
			e && e.type === "text" ? e.value += " " : p.children.push({
				type: "text",
				value: " "
			}), p.children.push(...d);
		} else a.push(...d);
		let m = {
			type: "element",
			tagName: "li",
			properties: { id: t + "fn-" + l },
			children: e.wrap(a, !0)
		};
		e.patch(i, m), s.push(m);
	}
	if (s.length !== 0) return {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: !0,
			className: ["footnotes"]
		},
		children: [
			{
				type: "element",
				tagName: a,
				properties: {
					...Vr(o),
					id: "footnote-label"
				},
				children: [{
					type: "text",
					value: i
				}]
			},
			{
				type: "text",
				value: "\n"
			},
			{
				type: "element",
				tagName: "ol",
				properties: {},
				children: e.wrap(s, !0)
			},
			{
				type: "text",
				value: "\n"
			}
		]
	};
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/state.js
var Gr = {}.hasOwnProperty, Kr = {};
function qr(e, t) {
	let n = t || Kr, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: Yr,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...kr,
			...n.handlers
		},
		one: o,
		options: n,
		patch: Jr,
		wrap: Zr
	};
	return x(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (Gr.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = Vr(n);
				return r.children = a.all(e), r;
			}
			return Vr(e);
		}
		return (a.options.unknownHandler || Xr)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = Qr(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = Qr(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function Jr(e, t) {
	e.position && (t.position = _(e));
}
function Yr(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, Vr(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function Xr(e, t) {
	let n = t.data || {}, r = "value" in t && !(Gr.call(n, "hProperties") || Gr.call(n, "hChildren")) ? {
		type: "text",
		value: t.value
	} : {
		type: "element",
		tagName: "div",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
function Zr(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function Qr(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-hast@13.2.1/node_modules/mdast-util-to-hast/lib/index.js
function $r(e, t) {
	let n = qr(e, t), r = n.one(e, void 0), i = Wr(n), a = Array.isArray(r) ? {
		type: "root",
		children: r
	} : r || {
		type: "root",
		children: []
	};
	return i && ("children" in a, a.children.push({
		type: "text",
		value: "\n"
	}, i)), a;
}
//#endregion
//#region ../../node_modules/.pnpm/remark-rehype@11.1.2/node_modules/remark-rehype/lib/index.js
function ei(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = $r(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return $r(n, {
			file: r,
			...e || t
		});
	};
}
//#endregion
//#region ../../node_modules/.pnpm/bail@2.0.2/node_modules/bail/index.js
function ti(e) {
	if (e) throw e;
}
//#endregion
//#region ../../node_modules/.pnpm/is-plain-obj@4.1.0/node_modules/is-plain-obj/index.js
var ni = /* @__PURE__ */ e((/* @__PURE__ */ n(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = function(e) {
		return typeof Array.isArray == "function" ? Array.isArray(e) : r.call(e) === "[object Array]";
	}, s = function(e) {
		if (!e || r.call(e) !== "[object Object]") return !1;
		var t = n.call(e, "constructor"), i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
		if (e.constructor && !t && !i) return !1;
		for (var a in e);
		return a === void 0 || n.call(e, a);
	}, c = function(e, t) {
		i && t.name === "__proto__" ? i(e, t.name, {
			enumerable: !0,
			configurable: !0,
			value: t.newValue,
			writable: !0
		}) : e[t.name] = t.newValue;
	}, l = function(e, t) {
		if (t === "__proto__") {
			if (!n.call(e, t)) return;
			if (a) return a(e, t).value;
		}
		return e[t];
	};
	t.exports = function e() {
		var t, n, r, i, a, u, d = arguments[0], f = 1, p = arguments.length, m = !1;
		for (typeof d == "boolean" && (m = d, d = arguments[1] || {}, f = 2), (d == null || typeof d != "object" && typeof d != "function") && (d = {}); f < p; ++f) if (t = arguments[f], t != null) for (n in t) r = l(d, n), i = l(t, n), d !== i && (m && i && (s(i) || (a = o(i))) ? (a ? (a = !1, u = r && o(r) ? r : []) : u = r && s(r) ? r : {}, c(d, {
			name: n,
			newValue: e(m, u, i)
		})) : i !== void 0 && c(d, {
			name: n,
			newValue: i
		}));
		return d;
	};
})))(), 1);
function ri(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
//#endregion
//#region ../../node_modules/.pnpm/trough@2.2.0/node_modules/trough/lib/index.js
function ii() {
	let e = [], t = {
		run: n,
		use: r
	};
	return t;
	function n(...t) {
		let n = -1, r = t.pop();
		if (typeof r != "function") throw TypeError("Expected function as last argument, not " + r);
		i(null, ...t);
		function i(a, ...o) {
			let s = e[++n], c = -1;
			if (a) {
				r(a);
				return;
			}
			for (; ++c < t.length;) (o[c] === null || o[c] === void 0) && (o[c] = t[c]);
			t = o, s ? ai(s, i)(...o) : r(null, ...o);
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function ai(e, t) {
	let n;
	return r;
	function r(...t) {
		let r = e.length > t.length, o;
		r && t.push(i);
		try {
			o = e.apply(this, t);
		} catch (e) {
			let t = e;
			if (r && n) throw t;
			return i(t);
		}
		r || (o && o.then && typeof o.then == "function" ? o.then(a, i) : o instanceof Error ? i(o) : a(o));
	}
	function i(e, ...r) {
		n || (n = !0, t(e, ...r));
	}
	function a(e) {
		i(null, e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/minpath.browser.js
var oi = {
	basename: si,
	dirname: ci,
	extname: li,
	join: ui,
	sep: "/"
};
function si(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	pi(e);
	let n = 0, r = -1, i = e.length, a;
	if (t === void 0 || t.length === 0 || t.length > e.length) {
		for (; i--;) if (e.codePointAt(i) === 47) {
			if (a) {
				n = i + 1;
				break;
			}
		} else r < 0 && (a = !0, r = i + 1);
		return r < 0 ? "" : e.slice(n, r);
	}
	if (t === e) return "";
	let o = -1, s = t.length - 1;
	for (; i--;) if (e.codePointAt(i) === 47) {
		if (a) {
			n = i + 1;
			break;
		}
	} else o < 0 && (a = !0, o = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = o));
	return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function ci(e) {
	if (pi(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r ||= !0;
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function li(e) {
	pi(e);
	let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
	for (; t--;) {
		let s = e.codePointAt(t);
		if (s === 47) {
			if (o) {
				r = t + 1;
				break;
			}
			continue;
		}
		n < 0 && (o = !0, n = t + 1), s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
	}
	return i < 0 || n < 0 || a === 0 || a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function ui(...e) {
	let t = -1, n;
	for (; ++t < e.length;) pi(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : di(n);
}
function di(e) {
	pi(e);
	let t = e.codePointAt(0) === 47, n = fi(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function fi(e, t) {
	let n = "", r = 0, i = -1, a = 0, o = -1, s, c;
	for (; ++o <= e.length;) {
		if (o < e.length) s = e.codePointAt(o);
		else if (s === 47) break;
		else s = 47;
		if (s === 47) {
			if (!(i === o - 1 || a === 1)) if (i !== o - 1 && a === 2) {
				if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
					if (n.length > 2) {
						if (c = n.lastIndexOf("/"), c !== n.length - 1) {
							c < 0 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
							continue;
						}
					} else if (n.length > 0) {
						n = "", r = 0, i = o, a = 0;
						continue;
					}
				}
				t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
			} else n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
			i = o, a = 0;
		} else s === 46 && a > -1 ? a++ : a = -1;
	}
	return n;
}
function pi(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
//#endregion
//#region ../../node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/minproc.browser.js
var mi = { cwd: hi };
function hi() {
	return "/";
}
//#endregion
//#region ../../node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/minurl.shared.js
function gi(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
//#endregion
//#region ../../node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/minurl.browser.js
function _i(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!gi(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return vi(e);
}
function vi(e) {
	if (e.hostname !== "") {
		let e = /* @__PURE__ */ TypeError("File URL host must be \"localhost\" or empty on darwin");
		throw e.code = "ERR_INVALID_FILE_URL_HOST", e;
	}
	let t = e.pathname, n = -1;
	for (; ++n < t.length;) if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
		let e = t.codePointAt(n + 2);
		if (e === 70 || e === 102) {
			let e = /* @__PURE__ */ TypeError("File URL path must not include encoded / characters");
			throw e.code = "ERR_INVALID_FILE_URL_PATH", e;
		}
	}
	return decodeURIComponent(t);
}
//#endregion
//#region ../../node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/index.js
var yi = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], bi = class {
	constructor(e) {
		let t;
		t = e ? gi(e) ? { path: e } : typeof e == "string" || wi(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : mi.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < yi.length;) {
			let e = yi[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) yi.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? oi.basename(this.path) : void 0;
	}
	set basename(e) {
		Si(e, "basename"), xi(e, "basename"), this.path = oi.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? oi.dirname(this.path) : void 0;
	}
	set dirname(e) {
		Ci(this.basename, "dirname"), this.path = oi.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? oi.extname(this.path) : void 0;
	}
	set extname(e) {
		if (xi(e, "extname"), Ci(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = oi.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		gi(e) && (e = _i(e)), Si(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? oi.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		Si(e, "stem"), xi(e, "stem"), this.path = oi.join(this.dirname || "", e + (this.extname || ""));
	}
	fail(e, t, n) {
		let r = this.message(e, t, n);
		throw r.fatal = !0, r;
	}
	info(e, t, n) {
		let r = this.message(e, t, n);
		return r.fatal = void 0, r;
	}
	message(e, t, n) {
		let r = new g(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function xi(e, t) {
	if (e && e.includes(oi.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + oi.sep + "`");
}
function Si(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function Ci(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function wi(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region ../../node_modules/.pnpm/unified@11.0.5/node_modules/unified/lib/callable-instance.js
var Ti = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), Ei = {}.hasOwnProperty, Di = new class e extends Ti {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = ii();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, ni.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (Ai("data", this.frozen), this.namespace[e] = t, this) : Ei.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (Ai("data", this.frozen), this.namespace = e, this) : this.namespace;
	}
	freeze() {
		if (this.frozen) return this;
		let e = this;
		for (; ++this.freezeIndex < this.attachers.length;) {
			let [t, ...n] = this.attachers[this.freezeIndex];
			if (n[0] === !1) continue;
			n[0] === !0 && (n[0] = void 0);
			let r = t.call(e, ...n);
			typeof r == "function" && this.transformers.use(r);
		}
		return this.frozen = !0, this.freezeIndex = Infinity, this;
	}
	parse(e) {
		this.freeze();
		let t = Ni(e), n = this.parser || this.Parser;
		return Oi("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), Oi("process", this.parser || this.Parser), ki("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = Ni(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				Fi(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), Oi("processSync", this.parser || this.Parser), ki("processSync", this.compiler || this.Compiler), this.process(e, r), Mi("processSync", "process", t), n;
		function r(e, r) {
			t = !0, ti(e), n = r;
		}
	}
	run(e, t, n) {
		ji(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = Ni(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), Mi("runSync", "run", n), r;
		function i(e, t) {
			ti(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = Ni(t), r = this.compiler || this.Compiler;
		return ki("stringify", r), ji(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (Ai("use", this.frozen), e != null) if (typeof e == "function") s(e, t);
		else if (typeof e == "object") Array.isArray(e) ? o(e) : a(e);
		else throw TypeError("Expected usable value, not `" + e + "`");
		return this;
		function i(e) {
			if (typeof e == "function") s(e, []);
			else if (typeof e == "object") if (Array.isArray(e)) {
				let [t, ...n] = e;
				s(t, n);
			} else a(e);
			else throw TypeError("Expected usable value, not `" + e + "`");
		}
		function a(e) {
			if (!("plugins" in e) && !("settings" in e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
			o(e.plugins), e.settings && (r.settings = (0, ni.default)(!0, r.settings, e.settings));
		}
		function o(e) {
			let t = -1;
			if (e != null) if (Array.isArray(e)) for (; ++t < e.length;) {
				let n = e[t];
				i(n);
			}
			else throw TypeError("Expected a list of plugins, not `" + e + "`");
		}
		function s(e, t) {
			let r = -1, i = -1;
			for (; ++r < n.length;) if (n[r][0] === e) {
				i = r;
				break;
			}
			if (i === -1) n.push([e, ...t]);
			else if (t.length > 0) {
				let [r, ...a] = t, o = n[i][1];
				ri(o) && ri(r) && (r = (0, ni.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function Oi(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function ki(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function Ai(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function ji(e) {
	if (!ri(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function Mi(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function Ni(e) {
	return Pi(e) ? e : new bi(e);
}
function Pi(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Fi(e) {
	return typeof e == "string" || Ii(e);
}
function Ii(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region ../../node_modules/.pnpm/react-markdown@10.1.0_@types+react@19.2.17_react@19.2.7/node_modules/react-markdown/lib/index.js
var Li = o(), Ri = /* @__PURE__ */ e(r(), 1), zi = [], Bi = { allowDangerousHtml: !0 }, Vi = /^(https?|ircs?|mailto|xmpp)$/i, Hi = [
	{
		from: "astPlugins",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowDangerousHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowNode",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowElement"
	},
	{
		from: "allowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowedElements"
	},
	{
		from: "className",
		id: "remove-classname"
	},
	{
		from: "disallowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "disallowedElements"
	},
	{
		from: "escapeHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "includeElementIndex",
		id: "#remove-includeelementindex"
	},
	{
		from: "includeNodeIndex",
		id: "change-includenodeindex-to-includeelementindex"
	},
	{
		from: "linkTarget",
		id: "remove-linktarget"
	},
	{
		from: "plugins",
		id: "change-plugins-to-remarkplugins",
		to: "remarkPlugins"
	},
	{
		from: "rawSourcePos",
		id: "#remove-rawsourcepos"
	},
	{
		from: "renderers",
		id: "change-renderers-to-components",
		to: "components"
	},
	{
		from: "source",
		id: "change-source-to-children",
		to: "children"
	},
	{
		from: "sourcePos",
		id: "#remove-sourcepos"
	},
	{
		from: "transformImageUri",
		id: "#add-urltransform",
		to: "urlTransform"
	},
	{
		from: "transformLinkUri",
		id: "#add-urltransform",
		to: "urlTransform"
	}
];
function Ui(e) {
	let t = Wi(e), n = Gi(e);
	return Ki(t.runSync(t.parse(n), n), e);
}
function Wi(e) {
	let t = e.rehypePlugins || zi, n = e.remarkPlugins || zi, r = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...Bi
	} : Bi;
	return Di().use(Qn).use(n).use(ei, r).use(t);
}
function Gi(e) {
	let t = e.children || "", n = new bi();
	return typeof t == "string" ? n.value = t : "" + t, n;
}
function Ki(e, t) {
	let n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, c = t.urlTransform || qi;
	for (let e of Hi) Object.hasOwn(t, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return x(e, l), ee(e, {
		Fragment: Li.Fragment,
		components: i,
		ignoreInvalidStyle: !0,
		jsx: Li.jsx,
		jsxs: Li.jsxs,
		passKeys: !0,
		passNode: !0
	});
	function l(e, t, i) {
		if (e.type === "raw" && i && typeof t == "number") return o ? i.children.splice(t, 1) : i.children[t] = {
			type: "text",
			value: e.value
		}, t;
		if (e.type === "element") {
			let t;
			for (t in ae) if (Object.hasOwn(ae, t) && Object.hasOwn(e.properties, t)) {
				let n = e.properties[t], r = ae[t];
				(r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ""), t, e));
			}
		}
		if (e.type === "element") {
			let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
			if (!o && r && typeof t == "number" && (o = !r(e, t, i)), o && i && typeof t == "number") return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t;
		}
	}
}
function qi(e) {
	let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
	return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || Vi.test(e.slice(0, t)) ? e : "";
}
//#endregion
//#region ../../node_modules/.pnpm/hast-util-parse-selector@4.0.0/node_modules/hast-util-parse-selector/lib/index.js
var Ji = /[#.]/g;
function Yi(e, t) {
	let n = e || "", r = {}, i = 0, a, o;
	for (; i < n.length;) {
		Ji.lastIndex = i;
		let e = Ji.exec(n), t = n.slice(i, e ? e.index : n.length);
		t && (a ? a === "#" ? r.id = t : Array.isArray(r.className) ? r.className.push(t) : r.className = [t] : o = t, i += t.length), e && (a = e[0], i++);
	}
	return {
		type: "element",
		tagName: o || t || "div",
		properties: r,
		children: []
	};
}
//#endregion
//#region ../../node_modules/.pnpm/hastscript@9.0.1/node_modules/hastscript/lib/create-h.js
function Xi(e, t, n) {
	let r = n ? na(n) : void 0;
	function i(n, i, ...a) {
		let o;
		if (n == null) {
			o = {
				type: "root",
				children: []
			};
			let e = i;
			a.unshift(e);
		} else {
			o = Yi(n, t);
			let s = o.tagName.toLowerCase(), c = r ? r.get(s) : void 0;
			if (o.tagName = c || s, Zi(i)) a.unshift(i);
			else for (let [t, n] of Object.entries(i)) Qi(e, o.properties, t, n);
		}
		for (let e of a) $i(o.children, e);
		return o.type === "element" && o.tagName === "template" && (o.content = {
			type: "root",
			children: o.children
		}, o.children = []), o;
	}
	return i;
}
function Zi(e) {
	if (typeof e != "object" || !e || Array.isArray(e)) return !0;
	if (typeof e.type != "string") return !1;
	let t = e, n = Object.keys(e);
	for (let e of n) {
		let n = t[e];
		if (n && typeof n == "object") {
			if (!Array.isArray(n)) return !0;
			let e = n;
			for (let t of e) if (typeof t != "number" && typeof t != "string") return !0;
		}
	}
	return !!("children" in e && Array.isArray(e.children));
}
function Qi(e, t, n, r) {
	let i = u(e, n), a;
	if (r != null) {
		if (typeof r == "number") {
			if (Number.isNaN(r)) return;
			a = r;
		} else a = typeof r == "boolean" ? r : typeof r == "string" ? i.spaceSeparated ? y(r) : i.commaSeparated ? h(r) : i.commaOrSpaceSeparated ? y(h(r).join(" ")) : ea(i, i.property, r) : Array.isArray(r) ? [...r] : i.property === "style" ? ta(r) : String(r);
		if (Array.isArray(a)) {
			let e = [];
			for (let t of a) e.push(ea(i, i.property, t));
			a = e;
		}
		i.property === "className" && Array.isArray(t.className) && (a = t.className.concat(a)), t[i.property] = a;
	}
}
function $i(e, t) {
	if (t != null) if (typeof t == "number" || typeof t == "string") e.push({
		type: "text",
		value: String(t)
	});
	else if (Array.isArray(t)) for (let n of t) $i(e, n);
	else if (typeof t == "object" && "type" in t) t.type === "root" ? $i(e, t.children) : e.push(t);
	else throw Error("Expected node, nodes, or string, got `" + t + "`");
}
function ea(e, t, n) {
	if (typeof n == "string") {
		if (e.number && n && !Number.isNaN(Number(n))) return Number(n);
		if ((e.boolean || e.overloadedBoolean) && (n === "" || d(n) === d(t))) return !0;
	}
	return n;
}
function ta(e) {
	let t = [];
	for (let [n, r] of Object.entries(e)) t.push([n, r].join(": "));
	return t.join("; ");
}
function na(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) t.set(n.toLowerCase(), n);
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/hastscript@9.0.1/node_modules/hastscript/lib/svg-case-sensitive-tag-names.js
var ra = /* @__PURE__ */ "altGlyph.altGlyphDef.altGlyphItem.animateColor.animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.glyphRef.linearGradient.radialGradient.solidColor.textArea.textPath".split("."), ia = Xi(m, "div"), aa = Xi(b, "g", ra), oa = class {
	constructor(e, t, n) {
		this.property = e, this.normal = t, n && (this.space = n);
	}
};
oa.prototype.property = {}, oa.prototype.normal = {}, oa.prototype.space = null;
//#endregion
//#region ../../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/util/merge.js
function sa(e, t) {
	let n = {}, r = {}, i = -1;
	for (; ++i < e.length;) Object.assign(n, e[i].property), Object.assign(r, e[i].normal);
	return new oa(n, r, t);
}
//#endregion
//#region ../../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/normalize.js
function ca(e) {
	return e.toLowerCase();
}
//#endregion
//#region ../../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/util/info.js
var la = class {
	constructor(e, t) {
		this.property = e, this.attribute = t;
	}
};
la.prototype.space = null, la.prototype.boolean = !1, la.prototype.booleanish = !1, la.prototype.overloadedBoolean = !1, la.prototype.number = !1, la.prototype.commaSeparated = !1, la.prototype.spaceSeparated = !1, la.prototype.commaOrSpaceSeparated = !1, la.prototype.mustUseProperty = !1, la.prototype.defined = !1;
//#endregion
//#region ../../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/util/types.js
var ua = /* @__PURE__ */ t({
	boolean: () => F,
	booleanish: () => I,
	commaOrSpaceSeparated: () => z,
	commaSeparated: () => pa,
	number: () => L,
	overloadedBoolean: () => fa,
	spaceSeparated: () => R
}), da = 0, F = ma(), I = ma(), fa = ma(), L = ma(), R = ma(), pa = ma(), z = ma();
function ma() {
	return 2 ** ++da;
}
//#endregion
//#region ../../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/util/defined-info.js
var ha = Object.keys(ua), ga = class extends la {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), _a(this, "space", r), typeof n == "number") for (; ++i < ha.length;) {
			let e = ha[i];
			_a(this, ha[i], (n & ua[e]) === ua[e]);
		}
	}
};
ga.prototype.defined = !0;
function _a(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region ../../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/util/create.js
var va = {}.hasOwnProperty;
function ya(e) {
	let t = {}, n = {}, r;
	for (r in e.properties) if (va.call(e.properties, r)) {
		let i = e.properties[r], a = new ga(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[ca(r)] = r, n[ca(a.attribute)] = r;
	}
	return new oa(t, n, e.space);
}
//#endregion
//#region ../../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/xlink.js
var ba = ya({
	space: "xlink",
	transform(e, t) {
		return "xlink:" + t.slice(5).toLowerCase();
	},
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	}
}), xa = ya({
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	},
	properties: {
		xmlLang: null,
		xmlBase: null,
		xmlSpace: null
	}
});
//#endregion
//#region ../../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/util/case-sensitive-transform.js
function Sa(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region ../../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/util/case-insensitive-transform.js
function Ca(e, t) {
	return Sa(e, t.toLowerCase());
}
//#endregion
//#region ../../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/lib/xmlns.js
var wa = ya({
	space: "xmlns",
	attributes: { xmlnsxlink: "xmlns:xlink" },
	transform: Ca,
	properties: {
		xmlns: null,
		xmlnsXLink: null
	}
}), Ta = ya({
	transform(e, t) {
		return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
	},
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: I,
		ariaAutoComplete: null,
		ariaBusy: I,
		ariaChecked: I,
		ariaColCount: L,
		ariaColIndex: L,
		ariaColSpan: L,
		ariaControls: R,
		ariaCurrent: null,
		ariaDescribedBy: R,
		ariaDetails: null,
		ariaDisabled: I,
		ariaDropEffect: R,
		ariaErrorMessage: null,
		ariaExpanded: I,
		ariaFlowTo: R,
		ariaGrabbed: I,
		ariaHasPopup: null,
		ariaHidden: I,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: R,
		ariaLevel: L,
		ariaLive: null,
		ariaModal: I,
		ariaMultiLine: I,
		ariaMultiSelectable: I,
		ariaOrientation: null,
		ariaOwns: R,
		ariaPlaceholder: null,
		ariaPosInSet: L,
		ariaPressed: I,
		ariaReadOnly: I,
		ariaRelevant: null,
		ariaRequired: I,
		ariaRoleDescription: R,
		ariaRowCount: L,
		ariaRowIndex: L,
		ariaRowSpan: L,
		ariaSelected: I,
		ariaSetSize: L,
		ariaSort: null,
		ariaValueMax: L,
		ariaValueMin: L,
		ariaValueNow: L,
		ariaValueText: null,
		role: null
	}
}), Ea = ya({
	space: "html",
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	transform: Ca,
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: pa,
		acceptCharset: R,
		accessKey: R,
		action: null,
		allow: null,
		allowFullScreen: F,
		allowPaymentRequest: F,
		allowUserMedia: F,
		alt: null,
		as: null,
		async: F,
		autoCapitalize: null,
		autoComplete: R,
		autoFocus: F,
		autoPlay: F,
		blocking: R,
		capture: null,
		charSet: null,
		checked: F,
		cite: null,
		className: R,
		cols: L,
		colSpan: null,
		content: null,
		contentEditable: I,
		controls: F,
		controlsList: R,
		coords: L | pa,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: F,
		defer: F,
		dir: null,
		dirName: null,
		disabled: F,
		download: fa,
		draggable: I,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: F,
		formTarget: null,
		headers: R,
		height: L,
		hidden: F,
		high: L,
		href: null,
		hrefLang: null,
		htmlFor: R,
		httpEquiv: R,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: F,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: F,
		itemId: null,
		itemProp: R,
		itemRef: R,
		itemScope: F,
		itemType: R,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: F,
		low: L,
		manifest: null,
		max: null,
		maxLength: L,
		media: null,
		method: null,
		min: null,
		minLength: L,
		multiple: F,
		muted: F,
		name: null,
		nonce: null,
		noModule: F,
		noValidate: F,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: F,
		optimum: L,
		pattern: null,
		ping: R,
		placeholder: null,
		playsInline: F,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: F,
		referrerPolicy: null,
		rel: R,
		required: F,
		reversed: F,
		rows: L,
		rowSpan: L,
		sandbox: R,
		scope: null,
		scoped: F,
		seamless: F,
		selected: F,
		shadowRootClonable: F,
		shadowRootDelegatesFocus: F,
		shadowRootMode: null,
		shape: null,
		size: L,
		sizes: null,
		slot: null,
		span: L,
		spellCheck: I,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: L,
		step: null,
		style: null,
		tabIndex: L,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: F,
		useMap: null,
		value: I,
		width: L,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: R,
		axis: null,
		background: null,
		bgColor: null,
		border: L,
		borderColor: null,
		bottomMargin: L,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: F,
		declare: F,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: L,
		leftMargin: L,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: L,
		marginWidth: L,
		noResize: F,
		noHref: F,
		noShade: F,
		noWrap: F,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: L,
		rules: null,
		scheme: null,
		scrolling: I,
		standby: null,
		summary: null,
		text: null,
		topMargin: L,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: L,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: F,
		disableRemotePlayback: F,
		prefix: null,
		property: null,
		results: L,
		security: null,
		unselectable: null
	}
}), Da = ya({
	space: "svg",
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	transform: Sa,
	properties: {
		about: z,
		accentHeight: L,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: L,
		amplitude: L,
		arabicForm: null,
		ascent: L,
		attributeName: null,
		attributeType: null,
		azimuth: L,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: L,
		by: null,
		calcMode: null,
		capHeight: L,
		className: R,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: L,
		diffuseConstant: L,
		direction: null,
		display: null,
		dur: null,
		divisor: L,
		dominantBaseline: null,
		download: F,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: L,
		enableBackground: null,
		end: null,
		event: null,
		exponent: L,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: L,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: pa,
		g2: pa,
		glyphName: pa,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: L,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: L,
		horizOriginX: L,
		horizOriginY: L,
		id: null,
		ideographic: L,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: L,
		k: L,
		k1: L,
		k2: L,
		k3: L,
		k4: L,
		kernelMatrix: z,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: L,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: L,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: L,
		overlineThickness: L,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: L,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: R,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: L,
		pointsAtY: L,
		pointsAtZ: L,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: z,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: z,
		rev: z,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: z,
		requiredFeatures: z,
		requiredFonts: z,
		requiredFormats: z,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: L,
		specularExponent: L,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: L,
		strikethroughThickness: L,
		string: null,
		stroke: null,
		strokeDashArray: z,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: L,
		strokeOpacity: L,
		strokeWidth: null,
		style: null,
		surfaceScale: L,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: z,
		tabIndex: L,
		tableValues: null,
		target: null,
		targetX: L,
		targetY: L,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: z,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: L,
		underlineThickness: L,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: L,
		values: null,
		vAlphabetic: L,
		vMathematical: L,
		vectorEffect: null,
		vHanging: L,
		vIdeographic: L,
		version: null,
		vertAdvY: L,
		vertOriginX: L,
		vertOriginY: L,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: L,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	}
}), Oa = /^data[-\w.:]+$/i, ka = /-[a-z]/g, Aa = /[A-Z]/g;
function ja(e, t) {
	let n = ca(t), r = t, i = la;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && Oa.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(ka, Na);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!ka.test(e)) {
				let n = e.replace(Aa, Ma);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = ga;
	}
	return new i(r, t);
}
function Ma(e) {
	return "-" + e.toLowerCase();
}
function Na(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region ../../node_modules/.pnpm/property-information@6.5.0/node_modules/property-information/index.js
var Pa = sa([
	xa,
	ba,
	wa,
	Ta,
	Ea
], "html"), Fa = sa([
	xa,
	ba,
	wa,
	Ta,
	Da
], "svg");
//#endregion
//#region ../../node_modules/.pnpm/vfile-location@5.0.3/node_modules/vfile-location/lib/index.js
function Ia(e) {
	let t = String(e), n = [];
	return {
		toOffset: i,
		toPoint: r
	};
	function r(e) {
		if (typeof e == "number" && e > -1 && e <= t.length) {
			let r = 0;
			for (;;) {
				let i = n[r];
				if (i === void 0) {
					let e = La(t, n[r - 1]);
					i = e === -1 ? t.length + 1 : e + 1, n[r] = i;
				}
				if (i > e) return {
					line: r + 1,
					column: e - (r > 0 ? n[r - 1] : 0) + 1,
					offset: e
				};
				r++;
			}
		}
	}
	function i(e) {
		if (e && typeof e.line == "number" && typeof e.column == "number" && !Number.isNaN(e.line) && !Number.isNaN(e.column)) {
			for (; n.length < e.line;) {
				let e = n[n.length - 1], r = La(t, e), i = r === -1 ? t.length + 1 : r + 1;
				if (e === i) break;
				n.push(i);
			}
			let r = (e.line > 1 ? n[e.line - 2] : 0) + e.column - 1;
			if (r < n[e.line - 1]) return r;
		}
	}
}
function La(e, t) {
	let n = e.indexOf("\r", t), r = e.indexOf("\n", t);
	return r === -1 ? n : n === -1 || n + 1 === r ? r : n < r ? n : r;
}
//#endregion
//#region ../../node_modules/.pnpm/web-namespaces@2.0.1/node_modules/web-namespaces/index.js
var Ra = {
	html: "http://www.w3.org/1999/xhtml",
	mathml: "http://www.w3.org/1998/Math/MathML",
	svg: "http://www.w3.org/2000/svg",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
}, za = {}.hasOwnProperty, Ba = Object.prototype;
function Va(e, t) {
	let n = t || {};
	return Ha({
		file: n.file || void 0,
		location: !1,
		schema: n.space === "svg" ? Fa : Pa,
		verbose: n.verbose || !1
	}, e);
}
function Ha(e, t) {
	let n;
	switch (t.nodeName) {
		case "#comment": {
			let r = t;
			return n = {
				type: "comment",
				value: r.data
			}, Ga(e, r, n), n;
		}
		case "#document":
		case "#document-fragment": {
			let r = t, i = "mode" in r ? r.mode === "quirks" || r.mode === "limited-quirks" : !1;
			if (n = {
				type: "root",
				children: Ua(e, t.childNodes),
				data: { quirksMode: i }
			}, e.file && e.location) {
				let t = String(e.file), r = Ia(t), i = r.toPoint(0), a = r.toPoint(t.length);
				n.position = {
					start: i,
					end: a
				};
			}
			return n;
		}
		case "#documentType": {
			let r = t;
			return n = { type: "doctype" }, Ga(e, r, n), n;
		}
		case "#text": {
			let r = t;
			return n = {
				type: "text",
				value: r.value
			}, Ga(e, r, n), n;
		}
		default: return n = Wa(e, t), n;
	}
}
function Ua(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) {
		let i = Ha(e, t[n]);
		r.push(i);
	}
	return r;
}
function Wa(e, t) {
	let n = e.schema;
	e.schema = t.namespaceURI === Ra.svg ? Fa : Pa;
	let r = -1, i = {};
	for (; ++r < t.attrs.length;) {
		let e = t.attrs[r], n = (e.prefix ? e.prefix + ":" : "") + e.name;
		za.call(Ba, n) || (i[n] = e.value);
	}
	let a = (e.schema.space === "svg" ? aa : ia)(t.tagName, i, Ua(e, t.childNodes));
	if (Ga(e, t, a), a.tagName === "template") {
		let n = t, r = n.sourceCodeLocation, i = r && r.startTag && qa(r.startTag), o = r && r.endTag && qa(r.endTag), s = Ha(e, n.content);
		i && o && e.file && (s.position = {
			start: i.end,
			end: o.start
		}), a.content = s;
	}
	return e.schema = n, a;
}
function Ga(e, t, n) {
	if ("sourceCodeLocation" in t && t.sourceCodeLocation && e.file) {
		let r = Ka(e, n, t.sourceCodeLocation);
		r && (e.location = !0, n.position = r);
	}
}
function Ka(e, t, n) {
	let r = qa(n);
	if (t.type === "element") {
		let i = t.children[t.children.length - 1];
		if (r && !n.endTag && i && i.position && i.position.end && (r.end = Object.assign({}, i.position.end)), e.verbose) {
			let r = {}, i;
			if (n.attrs) for (i in n.attrs) za.call(n.attrs, i) && (r[ja(e.schema, i).property] = qa(n.attrs[i]));
			n.startTag;
			let a = qa(n.startTag), o = n.endTag ? qa(n.endTag) : void 0, s = { opening: a };
			o && (s.closing = o), s.properties = r, t.data = { position: s };
		}
	}
	return r;
}
function qa(e) {
	let t = Ja({
		line: e.startLine,
		column: e.startCol,
		offset: e.startOffset
	}), n = Ja({
		line: e.endLine,
		column: e.endCol,
		offset: e.endOffset
	});
	return t || n ? {
		start: t,
		end: n
	} : void 0;
}
function Ja(e) {
	return e.line && e.column ? e : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/hast-util-to-parse5@8.0.0/node_modules/hast-util-to-parse5/lib/index.js
var Ya = {}, Xa = {}.hasOwnProperty, Za = S("type", { handlers: {
	root: $a,
	element: io,
	text: no,
	comment: ro,
	doctype: to
} });
function Qa(e, t) {
	let n = (t || Ya).space;
	return Za(e, n === "svg" ? Fa : Pa);
}
function $a(e, t) {
	let n = {
		nodeName: "#document",
		mode: (e.data || {}).quirksMode ? "quirks" : "no-quirks",
		childNodes: []
	};
	return n.childNodes = oo(e.children, n, t), so(e, n), n;
}
function eo(e, t) {
	let n = {
		nodeName: "#document-fragment",
		childNodes: []
	};
	return n.childNodes = oo(e.children, n, t), so(e, n), n;
}
function to(e) {
	let t = {
		nodeName: "#documentType",
		name: "html",
		publicId: "",
		systemId: "",
		parentNode: null
	};
	return so(e, t), t;
}
function no(e) {
	let t = {
		nodeName: "#text",
		value: e.value,
		parentNode: null
	};
	return so(e, t), t;
}
function ro(e) {
	let t = {
		nodeName: "#comment",
		data: e.value,
		parentNode: null
	};
	return so(e, t), t;
}
function io(e, t) {
	let n = t, r = n;
	e.type === "element" && e.tagName.toLowerCase() === "svg" && n.space === "html" && (r = Fa);
	let i = [], a;
	if (e.properties) {
		for (a in e.properties) if (a !== "children" && Xa.call(e.properties, a)) {
			let t = ao(r, a, e.properties[a]);
			t && i.push(t);
		}
	}
	let o = r.space, s = {
		nodeName: e.tagName,
		tagName: e.tagName,
		attrs: i,
		namespaceURI: Ra[o],
		childNodes: [],
		parentNode: null
	};
	return s.childNodes = oo(e.children, s, r), so(e, s), e.tagName === "template" && e.content && (s.content = eo(e.content, r)), s;
}
function ao(e, t, n) {
	let r = ja(e, t);
	if (n === !1 || n == null || typeof n == "number" && Number.isNaN(n) || !n && r.boolean) return;
	Array.isArray(n) && (n = r.commaSeparated ? f(n) : l(n));
	let i = {
		name: r.attribute,
		value: n === !0 ? "" : String(n)
	};
	if (r.space && r.space !== "html" && r.space !== "svg") {
		let e = i.name.indexOf(":");
		e < 0 ? i.prefix = "" : (i.name = i.name.slice(e + 1), i.prefix = r.attribute.slice(0, e)), i.namespace = Ra[r.space];
	}
	return i;
}
function oo(e, t, n) {
	let r = -1, i = [];
	if (e) for (; ++r < e.length;) {
		let a = Za(e[r], n);
		a.parentNode = t, i.push(a);
	}
	return i;
}
function so(e, t) {
	let n = e.position;
	n && n.start && n.end && (n.start.offset, n.end.offset, t.sourceCodeLocation = {
		startLine: n.start.line,
		startCol: n.start.column,
		startOffset: n.start.offset,
		endLine: n.end.line,
		endCol: n.end.column,
		endOffset: n.end.offset
	});
}
//#endregion
//#region ../../node_modules/.pnpm/parse5@7.2.1/node_modules/parse5/dist/common/unicode.js
var co = new Set([
	65534,
	65535,
	131070,
	131071,
	196606,
	196607,
	262142,
	262143,
	327678,
	327679,
	393214,
	393215,
	458750,
	458751,
	524286,
	524287,
	589822,
	589823,
	655358,
	655359,
	720894,
	720895,
	786430,
	786431,
	851966,
	851967,
	917502,
	917503,
	983038,
	983039,
	1048574,
	1048575,
	1114110,
	1114111
]), B;
(function(e) {
	e[e.EOF = -1] = "EOF", e[e.NULL = 0] = "NULL", e[e.TABULATION = 9] = "TABULATION", e[e.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", e[e.LINE_FEED = 10] = "LINE_FEED", e[e.FORM_FEED = 12] = "FORM_FEED", e[e.SPACE = 32] = "SPACE", e[e.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", e[e.QUOTATION_MARK = 34] = "QUOTATION_MARK", e[e.AMPERSAND = 38] = "AMPERSAND", e[e.APOSTROPHE = 39] = "APOSTROPHE", e[e.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", e[e.SOLIDUS = 47] = "SOLIDUS", e[e.DIGIT_0 = 48] = "DIGIT_0", e[e.DIGIT_9 = 57] = "DIGIT_9", e[e.SEMICOLON = 59] = "SEMICOLON", e[e.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", e[e.EQUALS_SIGN = 61] = "EQUALS_SIGN", e[e.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", e[e.QUESTION_MARK = 63] = "QUESTION_MARK", e[e.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", e[e.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", e[e.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", e[e.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", e[e.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", e[e.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z";
})(B ||= {});
var V = {
	DASH_DASH: "--",
	CDATA_START: "[CDATA[",
	DOCTYPE: "doctype",
	SCRIPT: "script",
	PUBLIC: "public",
	SYSTEM: "system"
};
function lo(e) {
	return e >= 55296 && e <= 57343;
}
function uo(e) {
	return e >= 56320 && e <= 57343;
}
function fo(e, t) {
	return (e - 55296) * 1024 + 9216 + t;
}
function po(e) {
	return e !== 32 && e !== 10 && e !== 13 && e !== 9 && e !== 12 && e >= 1 && e <= 31 || e >= 127 && e <= 159;
}
function mo(e) {
	return e >= 64976 && e <= 65007 || co.has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/parse5@7.2.1/node_modules/parse5/dist/common/error-codes.js
var H;
(function(e) {
	e.controlCharacterInInputStream = "control-character-in-input-stream", e.noncharacterInInputStream = "noncharacter-in-input-stream", e.surrogateInInputStream = "surrogate-in-input-stream", e.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", e.endTagWithAttributes = "end-tag-with-attributes", e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", e.unexpectedSolidusInTag = "unexpected-solidus-in-tag", e.unexpectedNullCharacter = "unexpected-null-character", e.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", e.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", e.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", e.missingEndTagName = "missing-end-tag-name", e.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", e.unknownNamedCharacterReference = "unknown-named-character-reference", e.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", e.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", e.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", e.eofBeforeTagName = "eof-before-tag-name", e.eofInTag = "eof-in-tag", e.missingAttributeValue = "missing-attribute-value", e.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", e.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", e.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", e.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", e.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", e.cdataInHtmlContent = "cdata-in-html-content", e.incorrectlyOpenedComment = "incorrectly-opened-comment", e.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", e.eofInDoctype = "eof-in-doctype", e.nestedComment = "nested-comment", e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", e.eofInComment = "eof-in-comment", e.incorrectlyClosedComment = "incorrectly-closed-comment", e.eofInCdata = "eof-in-cdata", e.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", e.nullCharacterReference = "null-character-reference", e.surrogateCharacterReference = "surrogate-character-reference", e.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", e.controlCharacterReference = "control-character-reference", e.noncharacterCharacterReference = "noncharacter-character-reference", e.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", e.missingDoctypeName = "missing-doctype-name", e.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", e.duplicateAttribute = "duplicate-attribute", e.nonConformingDoctype = "non-conforming-doctype", e.missingDoctype = "missing-doctype", e.misplacedDoctype = "misplaced-doctype", e.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", e.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", e.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", e.openElementsLeftAfterEof = "open-elements-left-after-eof", e.abandonedHeadElementChild = "abandoned-head-element-child", e.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", e.nestedNoscriptInHead = "nested-noscript-in-head", e.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
})(H ||= {});
//#endregion
//#region ../../node_modules/.pnpm/parse5@7.2.1/node_modules/parse5/dist/tokenizer/preprocessor.js
var ho = 65536, go = class {
	constructor(e) {
		this.handler = e, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = !1, this.lastChunkWritten = !1, this.endOfChunkHit = !1, this.bufferWaterline = ho, this.isEol = !1, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
	}
	get col() {
		return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
	}
	get offset() {
		return this.droppedBufferSize + this.pos;
	}
	getError(e, t) {
		let { line: n, col: r, offset: i } = this, a = r + t, o = i + t;
		return {
			code: e,
			startLine: n,
			endLine: n,
			startCol: a,
			endCol: a,
			startOffset: o,
			endOffset: o
		};
	}
	_err(e) {
		this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(e, 0)));
	}
	_addGap() {
		this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
	}
	_processSurrogate(e) {
		if (this.pos !== this.html.length - 1) {
			let t = this.html.charCodeAt(this.pos + 1);
			if (uo(t)) return this.pos++, this._addGap(), fo(e, t);
		} else if (!this.lastChunkWritten) return this.endOfChunkHit = !0, B.EOF;
		return this._err(H.surrogateInInputStream), e;
	}
	willDropParsedChunk() {
		return this.pos > this.bufferWaterline;
	}
	dropParsedChunk() {
		this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
	}
	write(e, t) {
		this.html.length > 0 ? this.html += e : this.html = e, this.endOfChunkHit = !1, this.lastChunkWritten = t;
	}
	insertHtmlAtCurrentPos(e) {
		this.html = this.html.substring(0, this.pos + 1) + e + this.html.substring(this.pos + 1), this.endOfChunkHit = !1;
	}
	startsWith(e, t) {
		if (this.pos + e.length > this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, !1;
		if (t) return this.html.startsWith(e, this.pos);
		for (let t = 0; t < e.length; t++) if ((this.html.charCodeAt(this.pos + t) | 32) !== e.charCodeAt(t)) return !1;
		return !0;
	}
	peek(e) {
		let t = this.pos + e;
		if (t >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, B.EOF;
		let n = this.html.charCodeAt(t);
		return n === B.CARRIAGE_RETURN ? B.LINE_FEED : n;
	}
	advance() {
		if (this.pos++, this.isEol && (this.isEol = !1, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, B.EOF;
		let e = this.html.charCodeAt(this.pos);
		return e === B.CARRIAGE_RETURN ? (this.isEol = !0, this.skipNextNewLine = !0, B.LINE_FEED) : e === B.LINE_FEED && (this.isEol = !0, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = !1, this._addGap(), this.advance()) : (this.skipNextNewLine = !1, lo(e) && (e = this._processSurrogate(e)), this.handler.onParseError === null || e > 31 && e < 127 || e === B.LINE_FEED || e === B.CARRIAGE_RETURN || e > 159 && e < 64976 || this._checkForProblematicCharacters(e), e);
	}
	_checkForProblematicCharacters(e) {
		po(e) ? this._err(H.controlCharacterInInputStream) : mo(e) && this._err(H.noncharacterInInputStream);
	}
	retreat(e) {
		for (this.pos -= e; this.pos < this.lastGapPos;) this.lastGapPos = this.gapStack.pop(), this.pos--;
		this.isEol = !1;
	}
}, U;
(function(e) {
	e[e.CHARACTER = 0] = "CHARACTER", e[e.NULL_CHARACTER = 1] = "NULL_CHARACTER", e[e.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", e[e.START_TAG = 3] = "START_TAG", e[e.END_TAG = 4] = "END_TAG", e[e.COMMENT = 5] = "COMMENT", e[e.DOCTYPE = 6] = "DOCTYPE", e[e.EOF = 7] = "EOF", e[e.HIBERNATION = 8] = "HIBERNATION";
})(U ||= {});
function _o(e, t) {
	for (let n = e.attrs.length - 1; n >= 0; n--) if (e.attrs[n].name === t) return e.attrs[n].value;
	return null;
}
//#endregion
//#region ../../node_modules/.pnpm/entities@4.5.0/node_modules/entities/lib/esm/generated/decode-data-html.js
var vo = new Uint16Array("ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻\"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xA0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌".split("").map((e) => e.charCodeAt(0))), yo = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))), bo = new Map([
	[0, 65533],
	[128, 8364],
	[130, 8218],
	[131, 402],
	[132, 8222],
	[133, 8230],
	[134, 8224],
	[135, 8225],
	[136, 710],
	[137, 8240],
	[138, 352],
	[139, 8249],
	[140, 338],
	[142, 381],
	[145, 8216],
	[146, 8217],
	[147, 8220],
	[148, 8221],
	[149, 8226],
	[150, 8211],
	[151, 8212],
	[152, 732],
	[153, 8482],
	[154, 353],
	[155, 8250],
	[156, 339],
	[158, 382],
	[159, 376]
]), xo = String.fromCodePoint ?? function(e) {
	let t = "";
	return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
};
function So(e) {
	return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : bo.get(e) ?? e;
}
//#endregion
//#region ../../node_modules/.pnpm/entities@4.5.0/node_modules/entities/lib/esm/decode.js
var W;
(function(e) {
	e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(W ||= {});
var Co = 32, wo;
(function(e) {
	e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(wo ||= {});
function To(e) {
	return e >= W.ZERO && e <= W.NINE;
}
function Eo(e) {
	return e >= W.UPPER_A && e <= W.UPPER_F || e >= W.LOWER_A && e <= W.LOWER_F;
}
function Do(e) {
	return e >= W.UPPER_A && e <= W.UPPER_Z || e >= W.LOWER_A && e <= W.LOWER_Z || To(e);
}
function Oo(e) {
	return e === W.EQUALS || Do(e);
}
var G;
(function(e) {
	e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(G ||= {});
var ko;
(function(e) {
	e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(ko ||= {});
var Ao = class {
	constructor(e, t, n) {
		this.decodeTree = e, this.emitCodePoint = t, this.errors = n, this.state = G.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = ko.Strict;
	}
	startEntity(e) {
		this.decodeMode = e, this.state = G.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
	}
	write(e, t) {
		switch (this.state) {
			case G.EntityStart: return e.charCodeAt(t) === W.NUM ? (this.state = G.NumericStart, this.consumed += 1, this.stateNumericStart(e, t + 1)) : (this.state = G.NamedEntity, this.stateNamedEntity(e, t));
			case G.NumericStart: return this.stateNumericStart(e, t);
			case G.NumericDecimal: return this.stateNumericDecimal(e, t);
			case G.NumericHex: return this.stateNumericHex(e, t);
			case G.NamedEntity: return this.stateNamedEntity(e, t);
		}
	}
	stateNumericStart(e, t) {
		return t >= e.length ? -1 : (e.charCodeAt(t) | Co) === W.LOWER_X ? (this.state = G.NumericHex, this.consumed += 1, this.stateNumericHex(e, t + 1)) : (this.state = G.NumericDecimal, this.stateNumericDecimal(e, t));
	}
	addToNumericResult(e, t, n, r) {
		if (t !== n) {
			let i = n - t;
			this.result = this.result * r ** +i + parseInt(e.substr(t, i), r), this.consumed += i;
		}
	}
	stateNumericHex(e, t) {
		let n = t;
		for (; t < e.length;) {
			let r = e.charCodeAt(t);
			if (To(r) || Eo(r)) t += 1;
			else return this.addToNumericResult(e, n, t, 16), this.emitNumericEntity(r, 3);
		}
		return this.addToNumericResult(e, n, t, 16), -1;
	}
	stateNumericDecimal(e, t) {
		let n = t;
		for (; t < e.length;) {
			let r = e.charCodeAt(t);
			if (To(r)) t += 1;
			else return this.addToNumericResult(e, n, t, 10), this.emitNumericEntity(r, 2);
		}
		return this.addToNumericResult(e, n, t, 10), -1;
	}
	emitNumericEntity(e, t) {
		var n;
		if (this.consumed <= t) return (n = this.errors) == null || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
		if (e === W.SEMI) this.consumed += 1;
		else if (this.decodeMode === ko.Strict) return 0;
		return this.emitCodePoint(So(this.result), this.consumed), this.errors && (e !== W.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
	}
	stateNamedEntity(e, t) {
		let { decodeTree: n } = this, r = n[this.treeIndex], i = (r & wo.VALUE_LENGTH) >> 14;
		for (; t < e.length; t++, this.excess++) {
			let a = e.charCodeAt(t);
			if (this.treeIndex = Mo(n, r, this.treeIndex + Math.max(1, i), a), this.treeIndex < 0) return this.result === 0 || this.decodeMode === ko.Attribute && (i === 0 || Oo(a)) ? 0 : this.emitNotTerminatedNamedEntity();
			if (r = n[this.treeIndex], i = (r & wo.VALUE_LENGTH) >> 14, i !== 0) {
				if (a === W.SEMI) return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
				this.decodeMode !== ko.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
			}
		}
		return -1;
	}
	emitNotTerminatedNamedEntity() {
		var e;
		let { result: t, decodeTree: n } = this, r = (n[t] & wo.VALUE_LENGTH) >> 14;
		return this.emitNamedEntityData(t, r, this.consumed), (e = this.errors) == null || e.missingSemicolonAfterCharacterReference(), this.consumed;
	}
	emitNamedEntityData(e, t, n) {
		let { decodeTree: r } = this;
		return this.emitCodePoint(t === 1 ? r[e] & ~wo.VALUE_LENGTH : r[e + 1], n), t === 3 && this.emitCodePoint(r[e + 2], n), n;
	}
	end() {
		var e;
		switch (this.state) {
			case G.NamedEntity: return this.result !== 0 && (this.decodeMode !== ko.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
			case G.NumericDecimal: return this.emitNumericEntity(0, 2);
			case G.NumericHex: return this.emitNumericEntity(0, 3);
			case G.NumericStart: return (e = this.errors) == null || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
			case G.EntityStart: return 0;
		}
	}
};
function jo(e) {
	let t = "", n = new Ao(e, (e) => t += xo(e));
	return function(e, r) {
		let i = 0, a = 0;
		for (; (a = e.indexOf("&", a)) >= 0;) {
			t += e.slice(i, a), n.startEntity(r);
			let o = n.write(e, a + 1);
			if (o < 0) {
				i = a + n.end();
				break;
			}
			i = a + o, a = o === 0 ? i + 1 : i;
		}
		let o = t + e.slice(i);
		return t = "", o;
	};
}
function Mo(e, t, n, r) {
	let i = (t & wo.BRANCH_LENGTH) >> 7, a = t & wo.JUMP_TABLE;
	if (i === 0) return a !== 0 && r === a ? n : -1;
	if (a) {
		let t = r - a;
		return t < 0 || t >= i ? -1 : e[n + t] - 1;
	}
	let o = n, s = o + i - 1;
	for (; o <= s;) {
		let t = o + s >>> 1, n = e[t];
		if (n < r) o = t + 1;
		else if (n > r) s = t - 1;
		else return e[t + i];
	}
	return -1;
}
jo(vo), jo(yo);
//#endregion
//#region ../../node_modules/.pnpm/parse5@7.2.1/node_modules/parse5/dist/common/html.js
var K;
(function(e) {
	e.HTML = "http://www.w3.org/1999/xhtml", e.MATHML = "http://www.w3.org/1998/Math/MathML", e.SVG = "http://www.w3.org/2000/svg", e.XLINK = "http://www.w3.org/1999/xlink", e.XML = "http://www.w3.org/XML/1998/namespace", e.XMLNS = "http://www.w3.org/2000/xmlns/";
})(K ||= {});
var No;
(function(e) {
	e.TYPE = "type", e.ACTION = "action", e.ENCODING = "encoding", e.PROMPT = "prompt", e.NAME = "name", e.COLOR = "color", e.FACE = "face", e.SIZE = "size";
})(No ||= {});
var Po;
(function(e) {
	e.NO_QUIRKS = "no-quirks", e.QUIRKS = "quirks", e.LIMITED_QUIRKS = "limited-quirks";
})(Po ||= {});
var q;
(function(e) {
	e.A = "a", e.ADDRESS = "address", e.ANNOTATION_XML = "annotation-xml", e.APPLET = "applet", e.AREA = "area", e.ARTICLE = "article", e.ASIDE = "aside", e.B = "b", e.BASE = "base", e.BASEFONT = "basefont", e.BGSOUND = "bgsound", e.BIG = "big", e.BLOCKQUOTE = "blockquote", e.BODY = "body", e.BR = "br", e.BUTTON = "button", e.CAPTION = "caption", e.CENTER = "center", e.CODE = "code", e.COL = "col", e.COLGROUP = "colgroup", e.DD = "dd", e.DESC = "desc", e.DETAILS = "details", e.DIALOG = "dialog", e.DIR = "dir", e.DIV = "div", e.DL = "dl", e.DT = "dt", e.EM = "em", e.EMBED = "embed", e.FIELDSET = "fieldset", e.FIGCAPTION = "figcaption", e.FIGURE = "figure", e.FONT = "font", e.FOOTER = "footer", e.FOREIGN_OBJECT = "foreignObject", e.FORM = "form", e.FRAME = "frame", e.FRAMESET = "frameset", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e.HEAD = "head", e.HEADER = "header", e.HGROUP = "hgroup", e.HR = "hr", e.HTML = "html", e.I = "i", e.IMG = "img", e.IMAGE = "image", e.INPUT = "input", e.IFRAME = "iframe", e.KEYGEN = "keygen", e.LABEL = "label", e.LI = "li", e.LINK = "link", e.LISTING = "listing", e.MAIN = "main", e.MALIGNMARK = "malignmark", e.MARQUEE = "marquee", e.MATH = "math", e.MENU = "menu", e.META = "meta", e.MGLYPH = "mglyph", e.MI = "mi", e.MO = "mo", e.MN = "mn", e.MS = "ms", e.MTEXT = "mtext", e.NAV = "nav", e.NOBR = "nobr", e.NOFRAMES = "noframes", e.NOEMBED = "noembed", e.NOSCRIPT = "noscript", e.OBJECT = "object", e.OL = "ol", e.OPTGROUP = "optgroup", e.OPTION = "option", e.P = "p", e.PARAM = "param", e.PLAINTEXT = "plaintext", e.PRE = "pre", e.RB = "rb", e.RP = "rp", e.RT = "rt", e.RTC = "rtc", e.RUBY = "ruby", e.S = "s", e.SCRIPT = "script", e.SEARCH = "search", e.SECTION = "section", e.SELECT = "select", e.SOURCE = "source", e.SMALL = "small", e.SPAN = "span", e.STRIKE = "strike", e.STRONG = "strong", e.STYLE = "style", e.SUB = "sub", e.SUMMARY = "summary", e.SUP = "sup", e.TABLE = "table", e.TBODY = "tbody", e.TEMPLATE = "template", e.TEXTAREA = "textarea", e.TFOOT = "tfoot", e.TD = "td", e.TH = "th", e.THEAD = "thead", e.TITLE = "title", e.TR = "tr", e.TRACK = "track", e.TT = "tt", e.U = "u", e.UL = "ul", e.SVG = "svg", e.VAR = "var", e.WBR = "wbr", e.XMP = "xmp";
})(q ||= {});
var J;
(function(e) {
	e[e.UNKNOWN = 0] = "UNKNOWN", e[e.A = 1] = "A", e[e.ADDRESS = 2] = "ADDRESS", e[e.ANNOTATION_XML = 3] = "ANNOTATION_XML", e[e.APPLET = 4] = "APPLET", e[e.AREA = 5] = "AREA", e[e.ARTICLE = 6] = "ARTICLE", e[e.ASIDE = 7] = "ASIDE", e[e.B = 8] = "B", e[e.BASE = 9] = "BASE", e[e.BASEFONT = 10] = "BASEFONT", e[e.BGSOUND = 11] = "BGSOUND", e[e.BIG = 12] = "BIG", e[e.BLOCKQUOTE = 13] = "BLOCKQUOTE", e[e.BODY = 14] = "BODY", e[e.BR = 15] = "BR", e[e.BUTTON = 16] = "BUTTON", e[e.CAPTION = 17] = "CAPTION", e[e.CENTER = 18] = "CENTER", e[e.CODE = 19] = "CODE", e[e.COL = 20] = "COL", e[e.COLGROUP = 21] = "COLGROUP", e[e.DD = 22] = "DD", e[e.DESC = 23] = "DESC", e[e.DETAILS = 24] = "DETAILS", e[e.DIALOG = 25] = "DIALOG", e[e.DIR = 26] = "DIR", e[e.DIV = 27] = "DIV", e[e.DL = 28] = "DL", e[e.DT = 29] = "DT", e[e.EM = 30] = "EM", e[e.EMBED = 31] = "EMBED", e[e.FIELDSET = 32] = "FIELDSET", e[e.FIGCAPTION = 33] = "FIGCAPTION", e[e.FIGURE = 34] = "FIGURE", e[e.FONT = 35] = "FONT", e[e.FOOTER = 36] = "FOOTER", e[e.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", e[e.FORM = 38] = "FORM", e[e.FRAME = 39] = "FRAME", e[e.FRAMESET = 40] = "FRAMESET", e[e.H1 = 41] = "H1", e[e.H2 = 42] = "H2", e[e.H3 = 43] = "H3", e[e.H4 = 44] = "H4", e[e.H5 = 45] = "H5", e[e.H6 = 46] = "H6", e[e.HEAD = 47] = "HEAD", e[e.HEADER = 48] = "HEADER", e[e.HGROUP = 49] = "HGROUP", e[e.HR = 50] = "HR", e[e.HTML = 51] = "HTML", e[e.I = 52] = "I", e[e.IMG = 53] = "IMG", e[e.IMAGE = 54] = "IMAGE", e[e.INPUT = 55] = "INPUT", e[e.IFRAME = 56] = "IFRAME", e[e.KEYGEN = 57] = "KEYGEN", e[e.LABEL = 58] = "LABEL", e[e.LI = 59] = "LI", e[e.LINK = 60] = "LINK", e[e.LISTING = 61] = "LISTING", e[e.MAIN = 62] = "MAIN", e[e.MALIGNMARK = 63] = "MALIGNMARK", e[e.MARQUEE = 64] = "MARQUEE", e[e.MATH = 65] = "MATH", e[e.MENU = 66] = "MENU", e[e.META = 67] = "META", e[e.MGLYPH = 68] = "MGLYPH", e[e.MI = 69] = "MI", e[e.MO = 70] = "MO", e[e.MN = 71] = "MN", e[e.MS = 72] = "MS", e[e.MTEXT = 73] = "MTEXT", e[e.NAV = 74] = "NAV", e[e.NOBR = 75] = "NOBR", e[e.NOFRAMES = 76] = "NOFRAMES", e[e.NOEMBED = 77] = "NOEMBED", e[e.NOSCRIPT = 78] = "NOSCRIPT", e[e.OBJECT = 79] = "OBJECT", e[e.OL = 80] = "OL", e[e.OPTGROUP = 81] = "OPTGROUP", e[e.OPTION = 82] = "OPTION", e[e.P = 83] = "P", e[e.PARAM = 84] = "PARAM", e[e.PLAINTEXT = 85] = "PLAINTEXT", e[e.PRE = 86] = "PRE", e[e.RB = 87] = "RB", e[e.RP = 88] = "RP", e[e.RT = 89] = "RT", e[e.RTC = 90] = "RTC", e[e.RUBY = 91] = "RUBY", e[e.S = 92] = "S", e[e.SCRIPT = 93] = "SCRIPT", e[e.SEARCH = 94] = "SEARCH", e[e.SECTION = 95] = "SECTION", e[e.SELECT = 96] = "SELECT", e[e.SOURCE = 97] = "SOURCE", e[e.SMALL = 98] = "SMALL", e[e.SPAN = 99] = "SPAN", e[e.STRIKE = 100] = "STRIKE", e[e.STRONG = 101] = "STRONG", e[e.STYLE = 102] = "STYLE", e[e.SUB = 103] = "SUB", e[e.SUMMARY = 104] = "SUMMARY", e[e.SUP = 105] = "SUP", e[e.TABLE = 106] = "TABLE", e[e.TBODY = 107] = "TBODY", e[e.TEMPLATE = 108] = "TEMPLATE", e[e.TEXTAREA = 109] = "TEXTAREA", e[e.TFOOT = 110] = "TFOOT", e[e.TD = 111] = "TD", e[e.TH = 112] = "TH", e[e.THEAD = 113] = "THEAD", e[e.TITLE = 114] = "TITLE", e[e.TR = 115] = "TR", e[e.TRACK = 116] = "TRACK", e[e.TT = 117] = "TT", e[e.U = 118] = "U", e[e.UL = 119] = "UL", e[e.SVG = 120] = "SVG", e[e.VAR = 121] = "VAR", e[e.WBR = 122] = "WBR", e[e.XMP = 123] = "XMP";
})(J ||= {});
var Fo = new Map([
	[q.A, J.A],
	[q.ADDRESS, J.ADDRESS],
	[q.ANNOTATION_XML, J.ANNOTATION_XML],
	[q.APPLET, J.APPLET],
	[q.AREA, J.AREA],
	[q.ARTICLE, J.ARTICLE],
	[q.ASIDE, J.ASIDE],
	[q.B, J.B],
	[q.BASE, J.BASE],
	[q.BASEFONT, J.BASEFONT],
	[q.BGSOUND, J.BGSOUND],
	[q.BIG, J.BIG],
	[q.BLOCKQUOTE, J.BLOCKQUOTE],
	[q.BODY, J.BODY],
	[q.BR, J.BR],
	[q.BUTTON, J.BUTTON],
	[q.CAPTION, J.CAPTION],
	[q.CENTER, J.CENTER],
	[q.CODE, J.CODE],
	[q.COL, J.COL],
	[q.COLGROUP, J.COLGROUP],
	[q.DD, J.DD],
	[q.DESC, J.DESC],
	[q.DETAILS, J.DETAILS],
	[q.DIALOG, J.DIALOG],
	[q.DIR, J.DIR],
	[q.DIV, J.DIV],
	[q.DL, J.DL],
	[q.DT, J.DT],
	[q.EM, J.EM],
	[q.EMBED, J.EMBED],
	[q.FIELDSET, J.FIELDSET],
	[q.FIGCAPTION, J.FIGCAPTION],
	[q.FIGURE, J.FIGURE],
	[q.FONT, J.FONT],
	[q.FOOTER, J.FOOTER],
	[q.FOREIGN_OBJECT, J.FOREIGN_OBJECT],
	[q.FORM, J.FORM],
	[q.FRAME, J.FRAME],
	[q.FRAMESET, J.FRAMESET],
	[q.H1, J.H1],
	[q.H2, J.H2],
	[q.H3, J.H3],
	[q.H4, J.H4],
	[q.H5, J.H5],
	[q.H6, J.H6],
	[q.HEAD, J.HEAD],
	[q.HEADER, J.HEADER],
	[q.HGROUP, J.HGROUP],
	[q.HR, J.HR],
	[q.HTML, J.HTML],
	[q.I, J.I],
	[q.IMG, J.IMG],
	[q.IMAGE, J.IMAGE],
	[q.INPUT, J.INPUT],
	[q.IFRAME, J.IFRAME],
	[q.KEYGEN, J.KEYGEN],
	[q.LABEL, J.LABEL],
	[q.LI, J.LI],
	[q.LINK, J.LINK],
	[q.LISTING, J.LISTING],
	[q.MAIN, J.MAIN],
	[q.MALIGNMARK, J.MALIGNMARK],
	[q.MARQUEE, J.MARQUEE],
	[q.MATH, J.MATH],
	[q.MENU, J.MENU],
	[q.META, J.META],
	[q.MGLYPH, J.MGLYPH],
	[q.MI, J.MI],
	[q.MO, J.MO],
	[q.MN, J.MN],
	[q.MS, J.MS],
	[q.MTEXT, J.MTEXT],
	[q.NAV, J.NAV],
	[q.NOBR, J.NOBR],
	[q.NOFRAMES, J.NOFRAMES],
	[q.NOEMBED, J.NOEMBED],
	[q.NOSCRIPT, J.NOSCRIPT],
	[q.OBJECT, J.OBJECT],
	[q.OL, J.OL],
	[q.OPTGROUP, J.OPTGROUP],
	[q.OPTION, J.OPTION],
	[q.P, J.P],
	[q.PARAM, J.PARAM],
	[q.PLAINTEXT, J.PLAINTEXT],
	[q.PRE, J.PRE],
	[q.RB, J.RB],
	[q.RP, J.RP],
	[q.RT, J.RT],
	[q.RTC, J.RTC],
	[q.RUBY, J.RUBY],
	[q.S, J.S],
	[q.SCRIPT, J.SCRIPT],
	[q.SEARCH, J.SEARCH],
	[q.SECTION, J.SECTION],
	[q.SELECT, J.SELECT],
	[q.SOURCE, J.SOURCE],
	[q.SMALL, J.SMALL],
	[q.SPAN, J.SPAN],
	[q.STRIKE, J.STRIKE],
	[q.STRONG, J.STRONG],
	[q.STYLE, J.STYLE],
	[q.SUB, J.SUB],
	[q.SUMMARY, J.SUMMARY],
	[q.SUP, J.SUP],
	[q.TABLE, J.TABLE],
	[q.TBODY, J.TBODY],
	[q.TEMPLATE, J.TEMPLATE],
	[q.TEXTAREA, J.TEXTAREA],
	[q.TFOOT, J.TFOOT],
	[q.TD, J.TD],
	[q.TH, J.TH],
	[q.THEAD, J.THEAD],
	[q.TITLE, J.TITLE],
	[q.TR, J.TR],
	[q.TRACK, J.TRACK],
	[q.TT, J.TT],
	[q.U, J.U],
	[q.UL, J.UL],
	[q.SVG, J.SVG],
	[q.VAR, J.VAR],
	[q.WBR, J.WBR],
	[q.XMP, J.XMP]
]);
function Io(e) {
	return Fo.get(e) ?? J.UNKNOWN;
}
var Y = J, Lo = {
	[K.HTML]: new Set([
		Y.ADDRESS,
		Y.APPLET,
		Y.AREA,
		Y.ARTICLE,
		Y.ASIDE,
		Y.BASE,
		Y.BASEFONT,
		Y.BGSOUND,
		Y.BLOCKQUOTE,
		Y.BODY,
		Y.BR,
		Y.BUTTON,
		Y.CAPTION,
		Y.CENTER,
		Y.COL,
		Y.COLGROUP,
		Y.DD,
		Y.DETAILS,
		Y.DIR,
		Y.DIV,
		Y.DL,
		Y.DT,
		Y.EMBED,
		Y.FIELDSET,
		Y.FIGCAPTION,
		Y.FIGURE,
		Y.FOOTER,
		Y.FORM,
		Y.FRAME,
		Y.FRAMESET,
		Y.H1,
		Y.H2,
		Y.H3,
		Y.H4,
		Y.H5,
		Y.H6,
		Y.HEAD,
		Y.HEADER,
		Y.HGROUP,
		Y.HR,
		Y.HTML,
		Y.IFRAME,
		Y.IMG,
		Y.INPUT,
		Y.LI,
		Y.LINK,
		Y.LISTING,
		Y.MAIN,
		Y.MARQUEE,
		Y.MENU,
		Y.META,
		Y.NAV,
		Y.NOEMBED,
		Y.NOFRAMES,
		Y.NOSCRIPT,
		Y.OBJECT,
		Y.OL,
		Y.P,
		Y.PARAM,
		Y.PLAINTEXT,
		Y.PRE,
		Y.SCRIPT,
		Y.SECTION,
		Y.SELECT,
		Y.SOURCE,
		Y.STYLE,
		Y.SUMMARY,
		Y.TABLE,
		Y.TBODY,
		Y.TD,
		Y.TEMPLATE,
		Y.TEXTAREA,
		Y.TFOOT,
		Y.TH,
		Y.THEAD,
		Y.TITLE,
		Y.TR,
		Y.TRACK,
		Y.UL,
		Y.WBR,
		Y.XMP
	]),
	[K.MATHML]: new Set([
		Y.MI,
		Y.MO,
		Y.MN,
		Y.MS,
		Y.MTEXT,
		Y.ANNOTATION_XML
	]),
	[K.SVG]: new Set([
		Y.TITLE,
		Y.FOREIGN_OBJECT,
		Y.DESC
	]),
	[K.XLINK]: /* @__PURE__ */ new Set(),
	[K.XML]: /* @__PURE__ */ new Set(),
	[K.XMLNS]: /* @__PURE__ */ new Set()
}, Ro = new Set([
	Y.H1,
	Y.H2,
	Y.H3,
	Y.H4,
	Y.H5,
	Y.H6
]);
new Set([
	q.STYLE,
	q.SCRIPT,
	q.XMP,
	q.IFRAME,
	q.NOEMBED,
	q.NOFRAMES,
	q.PLAINTEXT
]);
//#endregion
//#region ../../node_modules/.pnpm/parse5@7.2.1/node_modules/parse5/dist/tokenizer/index.js
var X;
(function(e) {
	e[e.DATA = 0] = "DATA", e[e.RCDATA = 1] = "RCDATA", e[e.RAWTEXT = 2] = "RAWTEXT", e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA", e[e.PLAINTEXT = 4] = "PLAINTEXT", e[e.TAG_OPEN = 5] = "TAG_OPEN", e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN", e[e.TAG_NAME = 7] = "TAG_NAME", e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e[e.COMMENT_START = 42] = "COMMENT_START", e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e[e.COMMENT = 44] = "COMMENT", e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e[e.COMMENT_END = 50] = "COMMENT_END", e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e[e.DOCTYPE = 52] = "DOCTYPE", e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e[e.CDATA_SECTION = 68] = "CDATA_SECTION", e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e[e.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
})(X ||= {});
var Z = {
	DATA: X.DATA,
	RCDATA: X.RCDATA,
	RAWTEXT: X.RAWTEXT,
	SCRIPT_DATA: X.SCRIPT_DATA,
	PLAINTEXT: X.PLAINTEXT,
	CDATA_SECTION: X.CDATA_SECTION
};
function zo(e) {
	return e >= B.DIGIT_0 && e <= B.DIGIT_9;
}
function Bo(e) {
	return e >= B.LATIN_CAPITAL_A && e <= B.LATIN_CAPITAL_Z;
}
function Vo(e) {
	return e >= B.LATIN_SMALL_A && e <= B.LATIN_SMALL_Z;
}
function Ho(e) {
	return Vo(e) || Bo(e);
}
function Uo(e) {
	return Ho(e) || zo(e);
}
function Wo(e) {
	return e + 32;
}
function Go(e) {
	return e === B.SPACE || e === B.LINE_FEED || e === B.TABULATION || e === B.FORM_FEED;
}
function Ko(e) {
	return Go(e) || e === B.SOLIDUS || e === B.GREATER_THAN_SIGN;
}
function qo(e) {
	return e === B.NULL ? H.nullCharacterReference : e > 1114111 ? H.characterReferenceOutsideUnicodeRange : lo(e) ? H.surrogateCharacterReference : mo(e) ? H.noncharacterCharacterReference : po(e) || e === B.CARRIAGE_RETURN ? H.controlCharacterReference : null;
}
var Jo = class {
	constructor(e, t) {
		this.options = e, this.handler = t, this.paused = !1, this.inLoop = !1, this.inForeignNode = !1, this.lastStartTagName = "", this.active = !1, this.state = X.DATA, this.returnState = X.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = {
			name: "",
			value: ""
		}, this.preprocessor = new go(t), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new Ao(vo, (e, t) => {
			this.preprocessor.pos = this.entityStartPos + t - 1, this._flushCodePointConsumedAsCharacterReference(e);
		}, t.onParseError ? {
			missingSemicolonAfterCharacterReference: () => {
				this._err(H.missingSemicolonAfterCharacterReference, 1);
			},
			absenceOfDigitsInNumericCharacterReference: (e) => {
				this._err(H.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + e);
			},
			validateNumericCharacterReference: (e) => {
				let t = qo(e);
				t && this._err(t, 1);
			}
		} : void 0);
	}
	_err(e, t = 0) {
		var n, r;
		(r = (n = this.handler).onParseError) == null || r.call(n, this.preprocessor.getError(e, t));
	}
	getCurrentLocation(e) {
		return this.options.sourceCodeLocationInfo ? {
			startLine: this.preprocessor.line,
			startCol: this.preprocessor.col - e,
			startOffset: this.preprocessor.offset - e,
			endLine: -1,
			endCol: -1,
			endOffset: -1
		} : null;
	}
	_runParsingLoop() {
		if (!this.inLoop) {
			for (this.inLoop = !0; this.active && !this.paused;) {
				this.consumedAfterSnapshot = 0;
				let e = this._consume();
				this._ensureHibernation() || this._callState(e);
			}
			this.inLoop = !1;
		}
	}
	pause() {
		this.paused = !0;
	}
	resume(e) {
		if (!this.paused) throw Error("Parser was already resumed");
		this.paused = !1, !this.inLoop && (this._runParsingLoop(), this.paused || e?.());
	}
	write(e, t, n) {
		this.active = !0, this.preprocessor.write(e, t), this._runParsingLoop(), this.paused || n?.();
	}
	insertHtmlAtCurrentPos(e) {
		this.active = !0, this.preprocessor.insertHtmlAtCurrentPos(e), this._runParsingLoop();
	}
	_ensureHibernation() {
		return this.preprocessor.endOfChunkHit ? (this.preprocessor.retreat(this.consumedAfterSnapshot), this.consumedAfterSnapshot = 0, this.active = !1, !0) : !1;
	}
	_consume() {
		return this.consumedAfterSnapshot++, this.preprocessor.advance();
	}
	_advanceBy(e) {
		this.consumedAfterSnapshot += e;
		for (let t = 0; t < e; t++) this.preprocessor.advance();
	}
	_consumeSequenceIfMatch(e, t) {
		return this.preprocessor.startsWith(e, t) ? (this._advanceBy(e.length - 1), !0) : !1;
	}
	_createStartTagToken() {
		this.currentToken = {
			type: U.START_TAG,
			tagName: "",
			tagID: J.UNKNOWN,
			selfClosing: !1,
			ackSelfClosing: !1,
			attrs: [],
			location: this.getCurrentLocation(1)
		};
	}
	_createEndTagToken() {
		this.currentToken = {
			type: U.END_TAG,
			tagName: "",
			tagID: J.UNKNOWN,
			selfClosing: !1,
			ackSelfClosing: !1,
			attrs: [],
			location: this.getCurrentLocation(2)
		};
	}
	_createCommentToken(e) {
		this.currentToken = {
			type: U.COMMENT,
			data: "",
			location: this.getCurrentLocation(e)
		};
	}
	_createDoctypeToken(e) {
		this.currentToken = {
			type: U.DOCTYPE,
			name: e,
			forceQuirks: !1,
			publicId: null,
			systemId: null,
			location: this.currentLocation
		};
	}
	_createCharacterToken(e, t) {
		this.currentCharacterToken = {
			type: e,
			chars: t,
			location: this.currentLocation
		};
	}
	_createAttr(e) {
		this.currentAttr = {
			name: e,
			value: ""
		}, this.currentLocation = this.getCurrentLocation(0);
	}
	_leaveAttrName() {
		var e;
		let t = this.currentToken;
		if (_o(t, this.currentAttr.name) === null) {
			if (t.attrs.push(this.currentAttr), t.location && this.currentLocation) {
				let n = (e = t.location).attrs ?? (e.attrs = Object.create(null));
				n[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
			}
		} else this._err(H.duplicateAttribute);
	}
	_leaveAttrValue() {
		this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
	}
	prepareToken(e) {
		this._emitCurrentCharacterToken(e.location), this.currentToken = null, e.location && (e.location.endLine = this.preprocessor.line, e.location.endCol = this.preprocessor.col + 1, e.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
	}
	emitCurrentTagToken() {
		let e = this.currentToken;
		this.prepareToken(e), e.tagID = Io(e.tagName), e.type === U.START_TAG ? (this.lastStartTagName = e.tagName, this.handler.onStartTag(e)) : (e.attrs.length > 0 && this._err(H.endTagWithAttributes), e.selfClosing && this._err(H.endTagWithTrailingSolidus), this.handler.onEndTag(e)), this.preprocessor.dropParsedChunk();
	}
	emitCurrentComment(e) {
		this.prepareToken(e), this.handler.onComment(e), this.preprocessor.dropParsedChunk();
	}
	emitCurrentDoctype(e) {
		this.prepareToken(e), this.handler.onDoctype(e), this.preprocessor.dropParsedChunk();
	}
	_emitCurrentCharacterToken(e) {
		if (this.currentCharacterToken) {
			switch (e && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = e.startLine, this.currentCharacterToken.location.endCol = e.startCol, this.currentCharacterToken.location.endOffset = e.startOffset), this.currentCharacterToken.type) {
				case U.CHARACTER:
					this.handler.onCharacter(this.currentCharacterToken);
					break;
				case U.NULL_CHARACTER:
					this.handler.onNullCharacter(this.currentCharacterToken);
					break;
				case U.WHITESPACE_CHARACTER:
					this.handler.onWhitespaceCharacter(this.currentCharacterToken);
					break;
			}
			this.currentCharacterToken = null;
		}
	}
	_emitEOFToken() {
		let e = this.getCurrentLocation(0);
		e && (e.endLine = e.startLine, e.endCol = e.startCol, e.endOffset = e.startOffset), this._emitCurrentCharacterToken(e), this.handler.onEof({
			type: U.EOF,
			location: e
		}), this.active = !1;
	}
	_appendCharToCurrentCharacterToken(e, t) {
		if (this.currentCharacterToken) if (this.currentCharacterToken.type === e) {
			this.currentCharacterToken.chars += t;
			return;
		} else this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
		this._createCharacterToken(e, t);
	}
	_emitCodePoint(e) {
		let t = Go(e) ? U.WHITESPACE_CHARACTER : e === B.NULL ? U.NULL_CHARACTER : U.CHARACTER;
		this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(e));
	}
	_emitChars(e) {
		this._appendCharToCurrentCharacterToken(U.CHARACTER, e);
	}
	_startCharacterReference() {
		this.returnState = this.state, this.state = X.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? ko.Attribute : ko.Legacy);
	}
	_isCharacterReferenceInAttribute() {
		return this.returnState === X.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === X.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === X.ATTRIBUTE_VALUE_UNQUOTED;
	}
	_flushCodePointConsumedAsCharacterReference(e) {
		this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(e) : this._emitCodePoint(e);
	}
	_callState(e) {
		switch (this.state) {
			case X.DATA:
				this._stateData(e);
				break;
			case X.RCDATA:
				this._stateRcdata(e);
				break;
			case X.RAWTEXT:
				this._stateRawtext(e);
				break;
			case X.SCRIPT_DATA:
				this._stateScriptData(e);
				break;
			case X.PLAINTEXT:
				this._statePlaintext(e);
				break;
			case X.TAG_OPEN:
				this._stateTagOpen(e);
				break;
			case X.END_TAG_OPEN:
				this._stateEndTagOpen(e);
				break;
			case X.TAG_NAME:
				this._stateTagName(e);
				break;
			case X.RCDATA_LESS_THAN_SIGN:
				this._stateRcdataLessThanSign(e);
				break;
			case X.RCDATA_END_TAG_OPEN:
				this._stateRcdataEndTagOpen(e);
				break;
			case X.RCDATA_END_TAG_NAME:
				this._stateRcdataEndTagName(e);
				break;
			case X.RAWTEXT_LESS_THAN_SIGN:
				this._stateRawtextLessThanSign(e);
				break;
			case X.RAWTEXT_END_TAG_OPEN:
				this._stateRawtextEndTagOpen(e);
				break;
			case X.RAWTEXT_END_TAG_NAME:
				this._stateRawtextEndTagName(e);
				break;
			case X.SCRIPT_DATA_LESS_THAN_SIGN:
				this._stateScriptDataLessThanSign(e);
				break;
			case X.SCRIPT_DATA_END_TAG_OPEN:
				this._stateScriptDataEndTagOpen(e);
				break;
			case X.SCRIPT_DATA_END_TAG_NAME:
				this._stateScriptDataEndTagName(e);
				break;
			case X.SCRIPT_DATA_ESCAPE_START:
				this._stateScriptDataEscapeStart(e);
				break;
			case X.SCRIPT_DATA_ESCAPE_START_DASH:
				this._stateScriptDataEscapeStartDash(e);
				break;
			case X.SCRIPT_DATA_ESCAPED:
				this._stateScriptDataEscaped(e);
				break;
			case X.SCRIPT_DATA_ESCAPED_DASH:
				this._stateScriptDataEscapedDash(e);
				break;
			case X.SCRIPT_DATA_ESCAPED_DASH_DASH:
				this._stateScriptDataEscapedDashDash(e);
				break;
			case X.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataEscapedLessThanSign(e);
				break;
			case X.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
				this._stateScriptDataEscapedEndTagOpen(e);
				break;
			case X.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
				this._stateScriptDataEscapedEndTagName(e);
				break;
			case X.SCRIPT_DATA_DOUBLE_ESCAPE_START:
				this._stateScriptDataDoubleEscapeStart(e);
				break;
			case X.SCRIPT_DATA_DOUBLE_ESCAPED:
				this._stateScriptDataDoubleEscaped(e);
				break;
			case X.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
				this._stateScriptDataDoubleEscapedDash(e);
				break;
			case X.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
				this._stateScriptDataDoubleEscapedDashDash(e);
				break;
			case X.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataDoubleEscapedLessThanSign(e);
				break;
			case X.SCRIPT_DATA_DOUBLE_ESCAPE_END:
				this._stateScriptDataDoubleEscapeEnd(e);
				break;
			case X.BEFORE_ATTRIBUTE_NAME:
				this._stateBeforeAttributeName(e);
				break;
			case X.ATTRIBUTE_NAME:
				this._stateAttributeName(e);
				break;
			case X.AFTER_ATTRIBUTE_NAME:
				this._stateAfterAttributeName(e);
				break;
			case X.BEFORE_ATTRIBUTE_VALUE:
				this._stateBeforeAttributeValue(e);
				break;
			case X.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
				this._stateAttributeValueDoubleQuoted(e);
				break;
			case X.ATTRIBUTE_VALUE_SINGLE_QUOTED:
				this._stateAttributeValueSingleQuoted(e);
				break;
			case X.ATTRIBUTE_VALUE_UNQUOTED:
				this._stateAttributeValueUnquoted(e);
				break;
			case X.AFTER_ATTRIBUTE_VALUE_QUOTED:
				this._stateAfterAttributeValueQuoted(e);
				break;
			case X.SELF_CLOSING_START_TAG:
				this._stateSelfClosingStartTag(e);
				break;
			case X.BOGUS_COMMENT:
				this._stateBogusComment(e);
				break;
			case X.MARKUP_DECLARATION_OPEN:
				this._stateMarkupDeclarationOpen(e);
				break;
			case X.COMMENT_START:
				this._stateCommentStart(e);
				break;
			case X.COMMENT_START_DASH:
				this._stateCommentStartDash(e);
				break;
			case X.COMMENT:
				this._stateComment(e);
				break;
			case X.COMMENT_LESS_THAN_SIGN:
				this._stateCommentLessThanSign(e);
				break;
			case X.COMMENT_LESS_THAN_SIGN_BANG:
				this._stateCommentLessThanSignBang(e);
				break;
			case X.COMMENT_LESS_THAN_SIGN_BANG_DASH:
				this._stateCommentLessThanSignBangDash(e);
				break;
			case X.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
				this._stateCommentLessThanSignBangDashDash(e);
				break;
			case X.COMMENT_END_DASH:
				this._stateCommentEndDash(e);
				break;
			case X.COMMENT_END:
				this._stateCommentEnd(e);
				break;
			case X.COMMENT_END_BANG:
				this._stateCommentEndBang(e);
				break;
			case X.DOCTYPE:
				this._stateDoctype(e);
				break;
			case X.BEFORE_DOCTYPE_NAME:
				this._stateBeforeDoctypeName(e);
				break;
			case X.DOCTYPE_NAME:
				this._stateDoctypeName(e);
				break;
			case X.AFTER_DOCTYPE_NAME:
				this._stateAfterDoctypeName(e);
				break;
			case X.AFTER_DOCTYPE_PUBLIC_KEYWORD:
				this._stateAfterDoctypePublicKeyword(e);
				break;
			case X.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateBeforeDoctypePublicIdentifier(e);
				break;
			case X.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypePublicIdentifierDoubleQuoted(e);
				break;
			case X.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypePublicIdentifierSingleQuoted(e);
				break;
			case X.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateAfterDoctypePublicIdentifier(e);
				break;
			case X.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
				this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
				break;
			case X.AFTER_DOCTYPE_SYSTEM_KEYWORD:
				this._stateAfterDoctypeSystemKeyword(e);
				break;
			case X.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateBeforeDoctypeSystemIdentifier(e);
				break;
			case X.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypeSystemIdentifierDoubleQuoted(e);
				break;
			case X.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypeSystemIdentifierSingleQuoted(e);
				break;
			case X.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateAfterDoctypeSystemIdentifier(e);
				break;
			case X.BOGUS_DOCTYPE:
				this._stateBogusDoctype(e);
				break;
			case X.CDATA_SECTION:
				this._stateCdataSection(e);
				break;
			case X.CDATA_SECTION_BRACKET:
				this._stateCdataSectionBracket(e);
				break;
			case X.CDATA_SECTION_END:
				this._stateCdataSectionEnd(e);
				break;
			case X.CHARACTER_REFERENCE:
				this._stateCharacterReference();
				break;
			case X.AMBIGUOUS_AMPERSAND:
				this._stateAmbiguousAmpersand(e);
				break;
			default: throw Error("Unknown state");
		}
	}
	_stateData(e) {
		switch (e) {
			case B.LESS_THAN_SIGN:
				this.state = X.TAG_OPEN;
				break;
			case B.AMPERSAND:
				this._startCharacterReference();
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), this._emitCodePoint(e);
				break;
			case B.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateRcdata(e) {
		switch (e) {
			case B.AMPERSAND:
				this._startCharacterReference();
				break;
			case B.LESS_THAN_SIGN:
				this.state = X.RCDATA_LESS_THAN_SIGN;
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), this._emitChars("�");
				break;
			case B.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateRawtext(e) {
		switch (e) {
			case B.LESS_THAN_SIGN:
				this.state = X.RAWTEXT_LESS_THAN_SIGN;
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), this._emitChars("�");
				break;
			case B.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptData(e) {
		switch (e) {
			case B.LESS_THAN_SIGN:
				this.state = X.SCRIPT_DATA_LESS_THAN_SIGN;
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), this._emitChars("�");
				break;
			case B.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_statePlaintext(e) {
		switch (e) {
			case B.NULL:
				this._err(H.unexpectedNullCharacter), this._emitChars("�");
				break;
			case B.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateTagOpen(e) {
		if (Ho(e)) this._createStartTagToken(), this.state = X.TAG_NAME, this._stateTagName(e);
		else switch (e) {
			case B.EXCLAMATION_MARK:
				this.state = X.MARKUP_DECLARATION_OPEN;
				break;
			case B.SOLIDUS:
				this.state = X.END_TAG_OPEN;
				break;
			case B.QUESTION_MARK:
				this._err(H.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = X.BOGUS_COMMENT, this._stateBogusComment(e);
				break;
			case B.EOF:
				this._err(H.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
				break;
			default: this._err(H.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = X.DATA, this._stateData(e);
		}
	}
	_stateEndTagOpen(e) {
		if (Ho(e)) this._createEndTagToken(), this.state = X.TAG_NAME, this._stateTagName(e);
		else switch (e) {
			case B.GREATER_THAN_SIGN:
				this._err(H.missingEndTagName), this.state = X.DATA;
				break;
			case B.EOF:
				this._err(H.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
				break;
			default: this._err(H.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = X.BOGUS_COMMENT, this._stateBogusComment(e);
		}
	}
	_stateTagName(e) {
		let t = this.currentToken;
		switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED:
				this.state = X.BEFORE_ATTRIBUTE_NAME;
				break;
			case B.SOLIDUS:
				this.state = X.SELF_CLOSING_START_TAG;
				break;
			case B.GREATER_THAN_SIGN:
				this.state = X.DATA, this.emitCurrentTagToken();
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), t.tagName += "�";
				break;
			case B.EOF:
				this._err(H.eofInTag), this._emitEOFToken();
				break;
			default: t.tagName += String.fromCodePoint(Bo(e) ? Wo(e) : e);
		}
	}
	_stateRcdataLessThanSign(e) {
		e === B.SOLIDUS ? this.state = X.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = X.RCDATA, this._stateRcdata(e));
	}
	_stateRcdataEndTagOpen(e) {
		Ho(e) ? (this.state = X.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(e)) : (this._emitChars("</"), this.state = X.RCDATA, this._stateRcdata(e));
	}
	handleSpecialEndTag(e) {
		if (!this.preprocessor.startsWith(this.lastStartTagName, !1)) return !this._ensureHibernation();
		this._createEndTagToken();
		let t = this.currentToken;
		switch (t.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED: return this._advanceBy(this.lastStartTagName.length), this.state = X.BEFORE_ATTRIBUTE_NAME, !1;
			case B.SOLIDUS: return this._advanceBy(this.lastStartTagName.length), this.state = X.SELF_CLOSING_START_TAG, !1;
			case B.GREATER_THAN_SIGN: return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = X.DATA, !1;
			default: return !this._ensureHibernation();
		}
	}
	_stateRcdataEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = X.RCDATA, this._stateRcdata(e));
	}
	_stateRawtextLessThanSign(e) {
		e === B.SOLIDUS ? this.state = X.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = X.RAWTEXT, this._stateRawtext(e));
	}
	_stateRawtextEndTagOpen(e) {
		Ho(e) ? (this.state = X.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(e)) : (this._emitChars("</"), this.state = X.RAWTEXT, this._stateRawtext(e));
	}
	_stateRawtextEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = X.RAWTEXT, this._stateRawtext(e));
	}
	_stateScriptDataLessThanSign(e) {
		switch (e) {
			case B.SOLIDUS:
				this.state = X.SCRIPT_DATA_END_TAG_OPEN;
				break;
			case B.EXCLAMATION_MARK:
				this.state = X.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
				break;
			default: this._emitChars("<"), this.state = X.SCRIPT_DATA, this._stateScriptData(e);
		}
	}
	_stateScriptDataEndTagOpen(e) {
		Ho(e) ? (this.state = X.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(e)) : (this._emitChars("</"), this.state = X.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = X.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscapeStart(e) {
		e === B.HYPHEN_MINUS ? (this.state = X.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = X.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscapeStartDash(e) {
		e === B.HYPHEN_MINUS ? (this.state = X.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = X.SCRIPT_DATA, this._stateScriptData(e));
	}
	_stateScriptDataEscaped(e) {
		switch (e) {
			case B.HYPHEN_MINUS:
				this.state = X.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
				break;
			case B.LESS_THAN_SIGN:
				this.state = X.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), this._emitChars("�");
				break;
			case B.EOF:
				this._err(H.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedDash(e) {
		switch (e) {
			case B.HYPHEN_MINUS:
				this.state = X.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
				break;
			case B.LESS_THAN_SIGN:
				this.state = X.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), this.state = X.SCRIPT_DATA_ESCAPED, this._emitChars("�");
				break;
			case B.EOF:
				this._err(H.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = X.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedDashDash(e) {
		switch (e) {
			case B.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case B.LESS_THAN_SIGN:
				this.state = X.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case B.GREATER_THAN_SIGN:
				this.state = X.SCRIPT_DATA, this._emitChars(">");
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), this.state = X.SCRIPT_DATA_ESCAPED, this._emitChars("�");
				break;
			case B.EOF:
				this._err(H.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = X.SCRIPT_DATA_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataEscapedLessThanSign(e) {
		e === B.SOLIDUS ? this.state = X.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : Ho(e) ? (this._emitChars("<"), this.state = X.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(e)) : (this._emitChars("<"), this.state = X.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataEscapedEndTagOpen(e) {
		Ho(e) ? (this.state = X.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(e)) : (this._emitChars("</"), this.state = X.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataEscapedEndTagName(e) {
		this.handleSpecialEndTag(e) && (this._emitChars("</"), this.state = X.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataDoubleEscapeStart(e) {
		if (this.preprocessor.startsWith(V.SCRIPT, !1) && Ko(this.preprocessor.peek(V.SCRIPT.length))) {
			this._emitCodePoint(e);
			for (let e = 0; e < V.SCRIPT.length; e++) this._emitCodePoint(this._consume());
			this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED;
		} else this._ensureHibernation() || (this.state = X.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(e));
	}
	_stateScriptDataDoubleEscaped(e) {
		switch (e) {
			case B.HYPHEN_MINUS:
				this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
				break;
			case B.LESS_THAN_SIGN:
				this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), this._emitChars("�");
				break;
			case B.EOF:
				this._err(H.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedDash(e) {
		switch (e) {
			case B.HYPHEN_MINUS:
				this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
				break;
			case B.LESS_THAN_SIGN:
				this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
				break;
			case B.EOF:
				this._err(H.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedDashDash(e) {
		switch (e) {
			case B.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case B.LESS_THAN_SIGN:
				this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
				break;
			case B.GREATER_THAN_SIGN:
				this.state = X.SCRIPT_DATA, this._emitChars(">");
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars("�");
				break;
			case B.EOF:
				this._err(H.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
				break;
			default: this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(e);
		}
	}
	_stateScriptDataDoubleEscapedLessThanSign(e) {
		e === B.SOLIDUS ? (this.state = X.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
	}
	_stateScriptDataDoubleEscapeEnd(e) {
		if (this.preprocessor.startsWith(V.SCRIPT, !1) && Ko(this.preprocessor.peek(V.SCRIPT.length))) {
			this._emitCodePoint(e);
			for (let e = 0; e < V.SCRIPT.length; e++) this._emitCodePoint(this._consume());
			this.state = X.SCRIPT_DATA_ESCAPED;
		} else this._ensureHibernation() || (this.state = X.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(e));
	}
	_stateBeforeAttributeName(e) {
		switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED: break;
			case B.SOLIDUS:
			case B.GREATER_THAN_SIGN:
			case B.EOF:
				this.state = X.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
				break;
			case B.EQUALS_SIGN:
				this._err(H.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = X.ATTRIBUTE_NAME;
				break;
			default: this._createAttr(""), this.state = X.ATTRIBUTE_NAME, this._stateAttributeName(e);
		}
	}
	_stateAttributeName(e) {
		switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED:
			case B.SOLIDUS:
			case B.GREATER_THAN_SIGN:
			case B.EOF:
				this._leaveAttrName(), this.state = X.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(e);
				break;
			case B.EQUALS_SIGN:
				this._leaveAttrName(), this.state = X.BEFORE_ATTRIBUTE_VALUE;
				break;
			case B.QUOTATION_MARK:
			case B.APOSTROPHE:
			case B.LESS_THAN_SIGN:
				this._err(H.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(e);
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), this.currentAttr.name += "�";
				break;
			default: this.currentAttr.name += String.fromCodePoint(Bo(e) ? Wo(e) : e);
		}
	}
	_stateAfterAttributeName(e) {
		switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED: break;
			case B.SOLIDUS:
				this.state = X.SELF_CLOSING_START_TAG;
				break;
			case B.EQUALS_SIGN:
				this.state = X.BEFORE_ATTRIBUTE_VALUE;
				break;
			case B.GREATER_THAN_SIGN:
				this.state = X.DATA, this.emitCurrentTagToken();
				break;
			case B.EOF:
				this._err(H.eofInTag), this._emitEOFToken();
				break;
			default: this._createAttr(""), this.state = X.ATTRIBUTE_NAME, this._stateAttributeName(e);
		}
	}
	_stateBeforeAttributeValue(e) {
		switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED: break;
			case B.QUOTATION_MARK:
				this.state = X.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
				break;
			case B.APOSTROPHE:
				this.state = X.ATTRIBUTE_VALUE_SINGLE_QUOTED;
				break;
			case B.GREATER_THAN_SIGN:
				this._err(H.missingAttributeValue), this.state = X.DATA, this.emitCurrentTagToken();
				break;
			default: this.state = X.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(e);
		}
	}
	_stateAttributeValueDoubleQuoted(e) {
		switch (e) {
			case B.QUOTATION_MARK:
				this.state = X.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case B.AMPERSAND:
				this._startCharacterReference();
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case B.EOF:
				this._err(H.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAttributeValueSingleQuoted(e) {
		switch (e) {
			case B.APOSTROPHE:
				this.state = X.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case B.AMPERSAND:
				this._startCharacterReference();
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case B.EOF:
				this._err(H.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAttributeValueUnquoted(e) {
		switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED:
				this._leaveAttrValue(), this.state = X.BEFORE_ATTRIBUTE_NAME;
				break;
			case B.AMPERSAND:
				this._startCharacterReference();
				break;
			case B.GREATER_THAN_SIGN:
				this._leaveAttrValue(), this.state = X.DATA, this.emitCurrentTagToken();
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), this.currentAttr.value += "�";
				break;
			case B.QUOTATION_MARK:
			case B.APOSTROPHE:
			case B.LESS_THAN_SIGN:
			case B.EQUALS_SIGN:
			case B.GRAVE_ACCENT:
				this._err(H.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(e);
				break;
			case B.EOF:
				this._err(H.eofInTag), this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(e);
		}
	}
	_stateAfterAttributeValueQuoted(e) {
		switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED:
				this._leaveAttrValue(), this.state = X.BEFORE_ATTRIBUTE_NAME;
				break;
			case B.SOLIDUS:
				this._leaveAttrValue(), this.state = X.SELF_CLOSING_START_TAG;
				break;
			case B.GREATER_THAN_SIGN:
				this._leaveAttrValue(), this.state = X.DATA, this.emitCurrentTagToken();
				break;
			case B.EOF:
				this._err(H.eofInTag), this._emitEOFToken();
				break;
			default: this._err(H.missingWhitespaceBetweenAttributes), this.state = X.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
		}
	}
	_stateSelfClosingStartTag(e) {
		switch (e) {
			case B.GREATER_THAN_SIGN: {
				let e = this.currentToken;
				e.selfClosing = !0, this.state = X.DATA, this.emitCurrentTagToken();
				break;
			}
			case B.EOF:
				this._err(H.eofInTag), this._emitEOFToken();
				break;
			default: this._err(H.unexpectedSolidusInTag), this.state = X.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(e);
		}
	}
	_stateBogusComment(e) {
		let t = this.currentToken;
		switch (e) {
			case B.GREATER_THAN_SIGN:
				this.state = X.DATA, this.emitCurrentComment(t);
				break;
			case B.EOF:
				this.emitCurrentComment(t), this._emitEOFToken();
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), t.data += "�";
				break;
			default: t.data += String.fromCodePoint(e);
		}
	}
	_stateMarkupDeclarationOpen(e) {
		this._consumeSequenceIfMatch(V.DASH_DASH, !0) ? (this._createCommentToken(V.DASH_DASH.length + 1), this.state = X.COMMENT_START) : this._consumeSequenceIfMatch(V.DOCTYPE, !1) ? (this.currentLocation = this.getCurrentLocation(V.DOCTYPE.length + 1), this.state = X.DOCTYPE) : this._consumeSequenceIfMatch(V.CDATA_START, !0) ? this.inForeignNode ? this.state = X.CDATA_SECTION : (this._err(H.cdataInHtmlContent), this._createCommentToken(V.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = X.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(H.incorrectlyOpenedComment), this._createCommentToken(2), this.state = X.BOGUS_COMMENT, this._stateBogusComment(e));
	}
	_stateCommentStart(e) {
		switch (e) {
			case B.HYPHEN_MINUS:
				this.state = X.COMMENT_START_DASH;
				break;
			case B.GREATER_THAN_SIGN: {
				this._err(H.abruptClosingOfEmptyComment), this.state = X.DATA;
				let e = this.currentToken;
				this.emitCurrentComment(e);
				break;
			}
			default: this.state = X.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentStartDash(e) {
		let t = this.currentToken;
		switch (e) {
			case B.HYPHEN_MINUS:
				this.state = X.COMMENT_END;
				break;
			case B.GREATER_THAN_SIGN:
				this._err(H.abruptClosingOfEmptyComment), this.state = X.DATA, this.emitCurrentComment(t);
				break;
			case B.EOF:
				this._err(H.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "-", this.state = X.COMMENT, this._stateComment(e);
		}
	}
	_stateComment(e) {
		let t = this.currentToken;
		switch (e) {
			case B.HYPHEN_MINUS:
				this.state = X.COMMENT_END_DASH;
				break;
			case B.LESS_THAN_SIGN:
				t.data += "<", this.state = X.COMMENT_LESS_THAN_SIGN;
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), t.data += "�";
				break;
			case B.EOF:
				this._err(H.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += String.fromCodePoint(e);
		}
	}
	_stateCommentLessThanSign(e) {
		let t = this.currentToken;
		switch (e) {
			case B.EXCLAMATION_MARK:
				t.data += "!", this.state = X.COMMENT_LESS_THAN_SIGN_BANG;
				break;
			case B.LESS_THAN_SIGN:
				t.data += "<";
				break;
			default: this.state = X.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentLessThanSignBang(e) {
		e === B.HYPHEN_MINUS ? this.state = X.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = X.COMMENT, this._stateComment(e));
	}
	_stateCommentLessThanSignBangDash(e) {
		e === B.HYPHEN_MINUS ? this.state = X.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = X.COMMENT_END_DASH, this._stateCommentEndDash(e));
	}
	_stateCommentLessThanSignBangDashDash(e) {
		e !== B.GREATER_THAN_SIGN && e !== B.EOF && this._err(H.nestedComment), this.state = X.COMMENT_END, this._stateCommentEnd(e);
	}
	_stateCommentEndDash(e) {
		let t = this.currentToken;
		switch (e) {
			case B.HYPHEN_MINUS:
				this.state = X.COMMENT_END;
				break;
			case B.EOF:
				this._err(H.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "-", this.state = X.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentEnd(e) {
		let t = this.currentToken;
		switch (e) {
			case B.GREATER_THAN_SIGN:
				this.state = X.DATA, this.emitCurrentComment(t);
				break;
			case B.EXCLAMATION_MARK:
				this.state = X.COMMENT_END_BANG;
				break;
			case B.HYPHEN_MINUS:
				t.data += "-";
				break;
			case B.EOF:
				this._err(H.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "--", this.state = X.COMMENT, this._stateComment(e);
		}
	}
	_stateCommentEndBang(e) {
		let t = this.currentToken;
		switch (e) {
			case B.HYPHEN_MINUS:
				t.data += "--!", this.state = X.COMMENT_END_DASH;
				break;
			case B.GREATER_THAN_SIGN:
				this._err(H.incorrectlyClosedComment), this.state = X.DATA, this.emitCurrentComment(t);
				break;
			case B.EOF:
				this._err(H.eofInComment), this.emitCurrentComment(t), this._emitEOFToken();
				break;
			default: t.data += "--!", this.state = X.COMMENT, this._stateComment(e);
		}
	}
	_stateDoctype(e) {
		switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED:
				this.state = X.BEFORE_DOCTYPE_NAME;
				break;
			case B.GREATER_THAN_SIGN:
				this.state = X.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
				break;
			case B.EOF: {
				this._err(H.eofInDoctype), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
				break;
			}
			default: this._err(H.missingWhitespaceBeforeDoctypeName), this.state = X.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(e);
		}
	}
	_stateBeforeDoctypeName(e) {
		if (Bo(e)) this._createDoctypeToken(String.fromCharCode(Wo(e))), this.state = X.DOCTYPE_NAME;
		else switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED: break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), this._createDoctypeToken("�"), this.state = X.DOCTYPE_NAME;
				break;
			case B.GREATER_THAN_SIGN: {
				this._err(H.missingDoctypeName), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this.state = X.DATA;
				break;
			}
			case B.EOF: {
				this._err(H.eofInDoctype), this._createDoctypeToken(null);
				let e = this.currentToken;
				e.forceQuirks = !0, this.emitCurrentDoctype(e), this._emitEOFToken();
				break;
			}
			default: this._createDoctypeToken(String.fromCodePoint(e)), this.state = X.DOCTYPE_NAME;
		}
	}
	_stateDoctypeName(e) {
		let t = this.currentToken;
		switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED:
				this.state = X.AFTER_DOCTYPE_NAME;
				break;
			case B.GREATER_THAN_SIGN:
				this.state = X.DATA, this.emitCurrentDoctype(t);
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), t.name += "�";
				break;
			case B.EOF:
				this._err(H.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.name += String.fromCodePoint(Bo(e) ? Wo(e) : e);
		}
	}
	_stateAfterDoctypeName(e) {
		let t = this.currentToken;
		switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED: break;
			case B.GREATER_THAN_SIGN:
				this.state = X.DATA, this.emitCurrentDoctype(t);
				break;
			case B.EOF:
				this._err(H.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._consumeSequenceIfMatch(V.PUBLIC, !1) ? this.state = X.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(V.SYSTEM, !1) ? this.state = X.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(H.invalidCharacterSequenceAfterDoctypeName), t.forceQuirks = !0, this.state = X.BOGUS_DOCTYPE, this._stateBogusDoctype(e));
		}
	}
	_stateAfterDoctypePublicKeyword(e) {
		let t = this.currentToken;
		switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED:
				this.state = X.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case B.QUOTATION_MARK:
				this._err(H.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = X.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case B.APOSTROPHE:
				this._err(H.missingWhitespaceAfterDoctypePublicKeyword), t.publicId = "", this.state = X.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case B.GREATER_THAN_SIGN:
				this._err(H.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = X.DATA, this.emitCurrentDoctype(t);
				break;
			case B.EOF:
				this._err(H.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(H.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = X.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBeforeDoctypePublicIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED: break;
			case B.QUOTATION_MARK:
				t.publicId = "", this.state = X.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case B.APOSTROPHE:
				t.publicId = "", this.state = X.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case B.GREATER_THAN_SIGN:
				this._err(H.missingDoctypePublicIdentifier), t.forceQuirks = !0, this.state = X.DATA, this.emitCurrentDoctype(t);
				break;
			case B.EOF:
				this._err(H.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(H.missingQuoteBeforeDoctypePublicIdentifier), t.forceQuirks = !0, this.state = X.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateDoctypePublicIdentifierDoubleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case B.QUOTATION_MARK:
				this.state = X.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), t.publicId += "�";
				break;
			case B.GREATER_THAN_SIGN:
				this._err(H.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = X.DATA;
				break;
			case B.EOF:
				this._err(H.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.publicId += String.fromCodePoint(e);
		}
	}
	_stateDoctypePublicIdentifierSingleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case B.APOSTROPHE:
				this.state = X.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), t.publicId += "�";
				break;
			case B.GREATER_THAN_SIGN:
				this._err(H.abruptDoctypePublicIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = X.DATA;
				break;
			case B.EOF:
				this._err(H.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.publicId += String.fromCodePoint(e);
		}
	}
	_stateAfterDoctypePublicIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED:
				this.state = X.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
				break;
			case B.GREATER_THAN_SIGN:
				this.state = X.DATA, this.emitCurrentDoctype(t);
				break;
			case B.QUOTATION_MARK:
				this._err(H.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = X.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case B.APOSTROPHE:
				this._err(H.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), t.systemId = "", this.state = X.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case B.EOF:
				this._err(H.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(H.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = X.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBetweenDoctypePublicAndSystemIdentifiers(e) {
		let t = this.currentToken;
		switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED: break;
			case B.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = X.DATA;
				break;
			case B.QUOTATION_MARK:
				t.systemId = "", this.state = X.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case B.APOSTROPHE:
				t.systemId = "", this.state = X.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case B.EOF:
				this._err(H.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(H.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = X.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateAfterDoctypeSystemKeyword(e) {
		let t = this.currentToken;
		switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED:
				this.state = X.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case B.QUOTATION_MARK:
				this._err(H.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = X.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case B.APOSTROPHE:
				this._err(H.missingWhitespaceAfterDoctypeSystemKeyword), t.systemId = "", this.state = X.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case B.GREATER_THAN_SIGN:
				this._err(H.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = X.DATA, this.emitCurrentDoctype(t);
				break;
			case B.EOF:
				this._err(H.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(H.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = X.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBeforeDoctypeSystemIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED: break;
			case B.QUOTATION_MARK:
				t.systemId = "", this.state = X.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case B.APOSTROPHE:
				t.systemId = "", this.state = X.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case B.GREATER_THAN_SIGN:
				this._err(H.missingDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = X.DATA, this.emitCurrentDoctype(t);
				break;
			case B.EOF:
				this._err(H.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(H.missingQuoteBeforeDoctypeSystemIdentifier), t.forceQuirks = !0, this.state = X.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateDoctypeSystemIdentifierDoubleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case B.QUOTATION_MARK:
				this.state = X.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), t.systemId += "�";
				break;
			case B.GREATER_THAN_SIGN:
				this._err(H.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = X.DATA;
				break;
			case B.EOF:
				this._err(H.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.systemId += String.fromCodePoint(e);
		}
	}
	_stateDoctypeSystemIdentifierSingleQuoted(e) {
		let t = this.currentToken;
		switch (e) {
			case B.APOSTROPHE:
				this.state = X.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter), t.systemId += "�";
				break;
			case B.GREATER_THAN_SIGN:
				this._err(H.abruptDoctypeSystemIdentifier), t.forceQuirks = !0, this.emitCurrentDoctype(t), this.state = X.DATA;
				break;
			case B.EOF:
				this._err(H.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: t.systemId += String.fromCodePoint(e);
		}
	}
	_stateAfterDoctypeSystemIdentifier(e) {
		let t = this.currentToken;
		switch (e) {
			case B.SPACE:
			case B.LINE_FEED:
			case B.TABULATION:
			case B.FORM_FEED: break;
			case B.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = X.DATA;
				break;
			case B.EOF:
				this._err(H.eofInDoctype), t.forceQuirks = !0, this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default: this._err(H.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = X.BOGUS_DOCTYPE, this._stateBogusDoctype(e);
		}
	}
	_stateBogusDoctype(e) {
		let t = this.currentToken;
		switch (e) {
			case B.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(t), this.state = X.DATA;
				break;
			case B.NULL:
				this._err(H.unexpectedNullCharacter);
				break;
			case B.EOF:
				this.emitCurrentDoctype(t), this._emitEOFToken();
				break;
			default:
		}
	}
	_stateCdataSection(e) {
		switch (e) {
			case B.RIGHT_SQUARE_BRACKET:
				this.state = X.CDATA_SECTION_BRACKET;
				break;
			case B.EOF:
				this._err(H.eofInCdata), this._emitEOFToken();
				break;
			default: this._emitCodePoint(e);
		}
	}
	_stateCdataSectionBracket(e) {
		e === B.RIGHT_SQUARE_BRACKET ? this.state = X.CDATA_SECTION_END : (this._emitChars("]"), this.state = X.CDATA_SECTION, this._stateCdataSection(e));
	}
	_stateCdataSectionEnd(e) {
		switch (e) {
			case B.GREATER_THAN_SIGN:
				this.state = X.DATA;
				break;
			case B.RIGHT_SQUARE_BRACKET:
				this._emitChars("]");
				break;
			default: this._emitChars("]]"), this.state = X.CDATA_SECTION, this._stateCdataSection(e);
		}
	}
	_stateCharacterReference() {
		let e = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
		if (e < 0) if (this.preprocessor.lastChunkWritten) e = this.entityDecoder.end();
		else {
			this.active = !1, this.preprocessor.pos = this.preprocessor.html.length - 1, this.consumedAfterSnapshot = 0, this.preprocessor.endOfChunkHit = !0;
			return;
		}
		e === 0 ? (this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference(B.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && Uo(this.preprocessor.peek(1)) ? X.AMBIGUOUS_AMPERSAND : this.returnState) : this.state = this.returnState;
	}
	_stateAmbiguousAmpersand(e) {
		Uo(e) ? this._flushCodePointConsumedAsCharacterReference(e) : (e === B.SEMICOLON && this._err(H.unknownNamedCharacterReference), this.state = this.returnState, this._callState(e));
	}
}, Yo = new Set([
	J.DD,
	J.DT,
	J.LI,
	J.OPTGROUP,
	J.OPTION,
	J.P,
	J.RB,
	J.RP,
	J.RT,
	J.RTC
]), Xo = new Set([
	...Yo,
	J.CAPTION,
	J.COLGROUP,
	J.TBODY,
	J.TD,
	J.TFOOT,
	J.TH,
	J.THEAD,
	J.TR
]), Zo = new Set([
	J.APPLET,
	J.CAPTION,
	J.HTML,
	J.MARQUEE,
	J.OBJECT,
	J.TABLE,
	J.TD,
	J.TEMPLATE,
	J.TH
]), Qo = new Set([
	...Zo,
	J.OL,
	J.UL
]), $o = new Set([...Zo, J.BUTTON]), es = new Set([
	J.ANNOTATION_XML,
	J.MI,
	J.MN,
	J.MO,
	J.MS,
	J.MTEXT
]), ts = new Set([
	J.DESC,
	J.FOREIGN_OBJECT,
	J.TITLE
]), ns = new Set([
	J.TR,
	J.TEMPLATE,
	J.HTML
]), rs = new Set([
	J.TBODY,
	J.TFOOT,
	J.THEAD,
	J.TEMPLATE,
	J.HTML
]), is = new Set([
	J.TABLE,
	J.TEMPLATE,
	J.HTML
]), as = new Set([J.TD, J.TH]), os = class {
	get currentTmplContentOrNode() {
		return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
	}
	constructor(e, t, n) {
		this.treeAdapter = t, this.handler = n, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = J.UNKNOWN, this.current = e;
	}
	_indexOf(e) {
		return this.items.lastIndexOf(e, this.stackTop);
	}
	_isInTemplate() {
		return this.currentTagId === J.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === K.HTML;
	}
	_updateCurrentElement() {
		this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
	}
	push(e, t) {
		this.stackTop++, this.items[this.stackTop] = e, this.current = e, this.tagIDs[this.stackTop] = t, this.currentTagId = t, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(e, t, !0);
	}
	pop() {
		let e = this.current;
		this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !0);
	}
	replace(e, t) {
		let n = this._indexOf(e);
		this.items[n] = t, n === this.stackTop && (this.current = t);
	}
	insertAfter(e, t, n) {
		let r = this._indexOf(e) + 1;
		this.items.splice(r, 0, t), this.tagIDs.splice(r, 0, n), this.stackTop++, r === this.stackTop && this._updateCurrentElement(), this.handler.onItemPush(this.current, this.currentTagId, r === this.stackTop);
	}
	popUntilTagNamePopped(e) {
		let t = this.stackTop + 1;
		do
			t = this.tagIDs.lastIndexOf(e, t - 1);
		while (t > 0 && this.treeAdapter.getNamespaceURI(this.items[t]) !== K.HTML);
		this.shortenToLength(t < 0 ? 0 : t);
	}
	shortenToLength(e) {
		for (; this.stackTop >= e;) {
			let t = this.current;
			this.tmplCount > 0 && this._isInTemplate() && --this.tmplCount, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, this.stackTop < e);
		}
	}
	popUntilElementPopped(e) {
		let t = this._indexOf(e);
		this.shortenToLength(t < 0 ? 0 : t);
	}
	popUntilPopped(e, t) {
		let n = this._indexOfTagNames(e, t);
		this.shortenToLength(n < 0 ? 0 : n);
	}
	popUntilNumberedHeaderPopped() {
		this.popUntilPopped(Ro, K.HTML);
	}
	popUntilTableCellPopped() {
		this.popUntilPopped(as, K.HTML);
	}
	popAllUpToHtmlElement() {
		this.tmplCount = 0, this.shortenToLength(1);
	}
	_indexOfTagNames(e, t) {
		for (let n = this.stackTop; n >= 0; n--) if (e.has(this.tagIDs[n]) && this.treeAdapter.getNamespaceURI(this.items[n]) === t) return n;
		return -1;
	}
	clearBackTo(e, t) {
		let n = this._indexOfTagNames(e, t);
		this.shortenToLength(n + 1);
	}
	clearBackToTableContext() {
		this.clearBackTo(is, K.HTML);
	}
	clearBackToTableBodyContext() {
		this.clearBackTo(rs, K.HTML);
	}
	clearBackToTableRowContext() {
		this.clearBackTo(ns, K.HTML);
	}
	remove(e) {
		let t = this._indexOf(e);
		t >= 0 && (t === this.stackTop ? this.pop() : (this.items.splice(t, 1), this.tagIDs.splice(t, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(e, !1)));
	}
	tryPeekProperlyNestedBodyElement() {
		return this.stackTop >= 1 && this.tagIDs[1] === J.BODY ? this.items[1] : null;
	}
	contains(e) {
		return this._indexOf(e) > -1;
	}
	getCommonAncestor(e) {
		let t = this._indexOf(e) - 1;
		return t >= 0 ? this.items[t] : null;
	}
	isRootHtmlElementCurrent() {
		return this.stackTop === 0 && this.tagIDs[0] === J.HTML;
	}
	hasInDynamicScope(e, t) {
		for (let n = this.stackTop; n >= 0; n--) {
			let r = this.tagIDs[n];
			switch (this.treeAdapter.getNamespaceURI(this.items[n])) {
				case K.HTML:
					if (r === e) return !0;
					if (t.has(r)) return !1;
					break;
				case K.SVG:
					if (ts.has(r)) return !1;
					break;
				case K.MATHML:
					if (es.has(r)) return !1;
					break;
			}
		}
		return !0;
	}
	hasInScope(e) {
		return this.hasInDynamicScope(e, Zo);
	}
	hasInListItemScope(e) {
		return this.hasInDynamicScope(e, Qo);
	}
	hasInButtonScope(e) {
		return this.hasInDynamicScope(e, $o);
	}
	hasNumberedHeaderInScope() {
		for (let e = this.stackTop; e >= 0; e--) {
			let t = this.tagIDs[e];
			switch (this.treeAdapter.getNamespaceURI(this.items[e])) {
				case K.HTML:
					if (Ro.has(t)) return !0;
					if (Zo.has(t)) return !1;
					break;
				case K.SVG:
					if (ts.has(t)) return !1;
					break;
				case K.MATHML:
					if (es.has(t)) return !1;
					break;
			}
		}
		return !0;
	}
	hasInTableScope(e) {
		for (let t = this.stackTop; t >= 0; t--) if (this.treeAdapter.getNamespaceURI(this.items[t]) === K.HTML) switch (this.tagIDs[t]) {
			case e: return !0;
			case J.TABLE:
			case J.HTML: return !1;
		}
		return !0;
	}
	hasTableBodyContextInTableScope() {
		for (let e = this.stackTop; e >= 0; e--) if (this.treeAdapter.getNamespaceURI(this.items[e]) === K.HTML) switch (this.tagIDs[e]) {
			case J.TBODY:
			case J.THEAD:
			case J.TFOOT: return !0;
			case J.TABLE:
			case J.HTML: return !1;
		}
		return !0;
	}
	hasInSelectScope(e) {
		for (let t = this.stackTop; t >= 0; t--) if (this.treeAdapter.getNamespaceURI(this.items[t]) === K.HTML) switch (this.tagIDs[t]) {
			case e: return !0;
			case J.OPTION:
			case J.OPTGROUP: break;
			default: return !1;
		}
		return !0;
	}
	generateImpliedEndTags() {
		for (; Yo.has(this.currentTagId);) this.pop();
	}
	generateImpliedEndTagsThoroughly() {
		for (; Xo.has(this.currentTagId);) this.pop();
	}
	generateImpliedEndTagsWithExclusion(e) {
		for (; this.currentTagId !== e && Xo.has(this.currentTagId);) this.pop();
	}
}, ss = 3, cs;
(function(e) {
	e[e.Marker = 0] = "Marker", e[e.Element = 1] = "Element";
})(cs ||= {});
var ls = { type: cs.Marker }, us = class {
	constructor(e) {
		this.treeAdapter = e, this.entries = [], this.bookmark = null;
	}
	_getNoahArkConditionCandidates(e, t) {
		let n = [], r = t.length, i = this.treeAdapter.getTagName(e), a = this.treeAdapter.getNamespaceURI(e);
		for (let e = 0; e < this.entries.length; e++) {
			let t = this.entries[e];
			if (t.type === cs.Marker) break;
			let { element: o } = t;
			if (this.treeAdapter.getTagName(o) === i && this.treeAdapter.getNamespaceURI(o) === a) {
				let t = this.treeAdapter.getAttrList(o);
				t.length === r && n.push({
					idx: e,
					attrs: t
				});
			}
		}
		return n;
	}
	_ensureNoahArkCondition(e) {
		if (this.entries.length < ss) return;
		let t = this.treeAdapter.getAttrList(e), n = this._getNoahArkConditionCandidates(e, t);
		if (n.length < ss) return;
		let r = new Map(t.map((e) => [e.name, e.value])), i = 0;
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			t.attrs.every((e) => r.get(e.name) === e.value) && (i += 1, i >= ss && this.entries.splice(t.idx, 1));
		}
	}
	insertMarker() {
		this.entries.unshift(ls);
	}
	pushElement(e, t) {
		this._ensureNoahArkCondition(e), this.entries.unshift({
			type: cs.Element,
			element: e,
			token: t
		});
	}
	insertElementAfterBookmark(e, t) {
		let n = this.entries.indexOf(this.bookmark);
		this.entries.splice(n, 0, {
			type: cs.Element,
			element: e,
			token: t
		});
	}
	removeEntry(e) {
		let t = this.entries.indexOf(e);
		t >= 0 && this.entries.splice(t, 1);
	}
	clearToLastMarker() {
		let e = this.entries.indexOf(ls);
		e >= 0 ? this.entries.splice(0, e + 1) : this.entries.length = 0;
	}
	getElementEntryInScopeWithTagName(e) {
		let t = this.entries.find((t) => t.type === cs.Marker || this.treeAdapter.getTagName(t.element) === e);
		return t && t.type === cs.Element ? t : null;
	}
	getElementEntry(e) {
		return this.entries.find((t) => t.type === cs.Element && t.element === e);
	}
}, ds = {
	createDocument() {
		return {
			nodeName: "#document",
			mode: Po.NO_QUIRKS,
			childNodes: []
		};
	},
	createDocumentFragment() {
		return {
			nodeName: "#document-fragment",
			childNodes: []
		};
	},
	createElement(e, t, n) {
		return {
			nodeName: e,
			tagName: e,
			attrs: n,
			namespaceURI: t,
			childNodes: [],
			parentNode: null
		};
	},
	createCommentNode(e) {
		return {
			nodeName: "#comment",
			data: e,
			parentNode: null
		};
	},
	createTextNode(e) {
		return {
			nodeName: "#text",
			value: e,
			parentNode: null
		};
	},
	appendChild(e, t) {
		e.childNodes.push(t), t.parentNode = e;
	},
	insertBefore(e, t, n) {
		let r = e.childNodes.indexOf(n);
		e.childNodes.splice(r, 0, t), t.parentNode = e;
	},
	setTemplateContent(e, t) {
		e.content = t;
	},
	getTemplateContent(e) {
		return e.content;
	},
	setDocumentType(e, t, n, r) {
		let i = e.childNodes.find((e) => e.nodeName === "#documentType");
		if (i) i.name = t, i.publicId = n, i.systemId = r;
		else {
			let i = {
				nodeName: "#documentType",
				name: t,
				publicId: n,
				systemId: r,
				parentNode: null
			};
			ds.appendChild(e, i);
		}
	},
	setDocumentMode(e, t) {
		e.mode = t;
	},
	getDocumentMode(e) {
		return e.mode;
	},
	detachNode(e) {
		if (e.parentNode) {
			let t = e.parentNode.childNodes.indexOf(e);
			e.parentNode.childNodes.splice(t, 1), e.parentNode = null;
		}
	},
	insertText(e, t) {
		if (e.childNodes.length > 0) {
			let n = e.childNodes[e.childNodes.length - 1];
			if (ds.isTextNode(n)) {
				n.value += t;
				return;
			}
		}
		ds.appendChild(e, ds.createTextNode(t));
	},
	insertTextBefore(e, t, n) {
		let r = e.childNodes[e.childNodes.indexOf(n) - 1];
		r && ds.isTextNode(r) ? r.value += t : ds.insertBefore(e, ds.createTextNode(t), n);
	},
	adoptAttributes(e, t) {
		let n = new Set(e.attrs.map((e) => e.name));
		for (let r = 0; r < t.length; r++) n.has(t[r].name) || e.attrs.push(t[r]);
	},
	getFirstChild(e) {
		return e.childNodes[0];
	},
	getChildNodes(e) {
		return e.childNodes;
	},
	getParentNode(e) {
		return e.parentNode;
	},
	getAttrList(e) {
		return e.attrs;
	},
	getTagName(e) {
		return e.tagName;
	},
	getNamespaceURI(e) {
		return e.namespaceURI;
	},
	getTextNodeContent(e) {
		return e.value;
	},
	getCommentNodeContent(e) {
		return e.data;
	},
	getDocumentTypeNodeName(e) {
		return e.name;
	},
	getDocumentTypeNodePublicId(e) {
		return e.publicId;
	},
	getDocumentTypeNodeSystemId(e) {
		return e.systemId;
	},
	isTextNode(e) {
		return e.nodeName === "#text";
	},
	isCommentNode(e) {
		return e.nodeName === "#comment";
	},
	isDocumentTypeNode(e) {
		return e.nodeName === "#documentType";
	},
	isElementNode(e) {
		return Object.prototype.hasOwnProperty.call(e, "tagName");
	},
	setNodeSourceCodeLocation(e, t) {
		e.sourceCodeLocation = t;
	},
	getNodeSourceCodeLocation(e) {
		return e.sourceCodeLocation;
	},
	updateNodeSourceCodeLocation(e, t) {
		e.sourceCodeLocation = {
			...e.sourceCodeLocation,
			...t
		};
	}
}, fs = "html", ps = "about:legacy-compat", ms = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", hs = /* @__PURE__ */ "+//silmaril//dtd html pro v0r11 19970101//,-//as//dtd html 3.0 aswedit + extensions//,-//advasoft ltd//dtd html 3.0 aswedit + extensions//,-//ietf//dtd html 2.0 level 1//,-//ietf//dtd html 2.0 level 2//,-//ietf//dtd html 2.0 strict level 1//,-//ietf//dtd html 2.0 strict level 2//,-//ietf//dtd html 2.0 strict//,-//ietf//dtd html 2.0//,-//ietf//dtd html 2.1e//,-//ietf//dtd html 3.0//,-//ietf//dtd html 3.2 final//,-//ietf//dtd html 3.2//,-//ietf//dtd html 3//,-//ietf//dtd html level 0//,-//ietf//dtd html level 1//,-//ietf//dtd html level 2//,-//ietf//dtd html level 3//,-//ietf//dtd html strict level 0//,-//ietf//dtd html strict level 1//,-//ietf//dtd html strict level 2//,-//ietf//dtd html strict level 3//,-//ietf//dtd html strict//,-//ietf//dtd html//,-//metrius//dtd metrius presentational//,-//microsoft//dtd internet explorer 2.0 html strict//,-//microsoft//dtd internet explorer 2.0 html//,-//microsoft//dtd internet explorer 2.0 tables//,-//microsoft//dtd internet explorer 3.0 html strict//,-//microsoft//dtd internet explorer 3.0 html//,-//microsoft//dtd internet explorer 3.0 tables//,-//netscape comm. corp.//dtd html//,-//netscape comm. corp.//dtd strict html//,-//o'reilly and associates//dtd html 2.0//,-//o'reilly and associates//dtd html extended 1.0//,-//o'reilly and associates//dtd html extended relaxed 1.0//,-//sq//dtd html 2.0 hotmetal + extensions//,-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//,-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//,-//spyglass//dtd html 2.0 extended//,-//sun microsystems corp.//dtd hotjava html//,-//sun microsystems corp.//dtd hotjava strict html//,-//w3c//dtd html 3 1995-03-24//,-//w3c//dtd html 3.2 draft//,-//w3c//dtd html 3.2 final//,-//w3c//dtd html 3.2//,-//w3c//dtd html 3.2s draft//,-//w3c//dtd html 4.0 frameset//,-//w3c//dtd html 4.0 transitional//,-//w3c//dtd html experimental 19960712//,-//w3c//dtd html experimental 970421//,-//w3c//dtd w3 html//,-//w3o//dtd w3 html 3.0//,-//webtechs//dtd mozilla html 2.0//,-//webtechs//dtd mozilla html//".split(","), gs = [
	...hs,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
], _s = new Set([
	"-//w3o//dtd w3 html strict 3.0//en//",
	"-/w3c/dtd html 4.0 transitional/en",
	"html"
]), vs = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"], ys = [
	...vs,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
];
function bs(e, t) {
	return t.some((t) => e.startsWith(t));
}
function xs(e) {
	return e.name === fs && e.publicId === null && (e.systemId === null || e.systemId === ps);
}
function Ss(e) {
	if (e.name !== fs) return Po.QUIRKS;
	let { systemId: t } = e;
	if (t && t.toLowerCase() === ms) return Po.QUIRKS;
	let { publicId: n } = e;
	if (n !== null) {
		if (n = n.toLowerCase(), _s.has(n)) return Po.QUIRKS;
		let e = t === null ? gs : hs;
		if (bs(n, e)) return Po.QUIRKS;
		if (e = t === null ? vs : ys, bs(n, e)) return Po.LIMITED_QUIRKS;
	}
	return Po.NO_QUIRKS;
}
//#endregion
//#region ../../node_modules/.pnpm/parse5@7.2.1/node_modules/parse5/dist/common/foreign-content.js
var Cs = {
	TEXT_HTML: "text/html",
	APPLICATION_XML: "application/xhtml+xml"
}, ws = "definitionurl", Ts = "definitionURL", Es = new Map((/* @__PURE__ */ "attributeName.attributeType.baseFrequency.baseProfile.calcMode.clipPathUnits.diffuseConstant.edgeMode.filterUnits.glyphRef.gradientTransform.gradientUnits.kernelMatrix.kernelUnitLength.keyPoints.keySplines.keyTimes.lengthAdjust.limitingConeAngle.markerHeight.markerUnits.markerWidth.maskContentUnits.maskUnits.numOctaves.pathLength.patternContentUnits.patternTransform.patternUnits.pointsAtX.pointsAtY.pointsAtZ.preserveAlpha.preserveAspectRatio.primitiveUnits.refX.refY.repeatCount.repeatDur.requiredExtensions.requiredFeatures.specularConstant.specularExponent.spreadMethod.startOffset.stdDeviation.stitchTiles.surfaceScale.systemLanguage.tableValues.targetX.targetY.textLength.viewBox.viewTarget.xChannelSelector.yChannelSelector.zoomAndPan".split(".")).map((e) => [e.toLowerCase(), e])), Ds = new Map([
	["xlink:actuate", {
		prefix: "xlink",
		name: "actuate",
		namespace: K.XLINK
	}],
	["xlink:arcrole", {
		prefix: "xlink",
		name: "arcrole",
		namespace: K.XLINK
	}],
	["xlink:href", {
		prefix: "xlink",
		name: "href",
		namespace: K.XLINK
	}],
	["xlink:role", {
		prefix: "xlink",
		name: "role",
		namespace: K.XLINK
	}],
	["xlink:show", {
		prefix: "xlink",
		name: "show",
		namespace: K.XLINK
	}],
	["xlink:title", {
		prefix: "xlink",
		name: "title",
		namespace: K.XLINK
	}],
	["xlink:type", {
		prefix: "xlink",
		name: "type",
		namespace: K.XLINK
	}],
	["xml:lang", {
		prefix: "xml",
		name: "lang",
		namespace: K.XML
	}],
	["xml:space", {
		prefix: "xml",
		name: "space",
		namespace: K.XML
	}],
	["xmlns", {
		prefix: "",
		name: "xmlns",
		namespace: K.XMLNS
	}],
	["xmlns:xlink", {
		prefix: "xmlns",
		name: "xlink",
		namespace: K.XMLNS
	}]
]), Os = new Map((/* @__PURE__ */ "altGlyph.altGlyphDef.altGlyphItem.animateColor.animateMotion.animateTransform.clipPath.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.foreignObject.glyphRef.linearGradient.radialGradient.textPath".split(".")).map((e) => [e.toLowerCase(), e])), ks = new Set([
	J.B,
	J.BIG,
	J.BLOCKQUOTE,
	J.BODY,
	J.BR,
	J.CENTER,
	J.CODE,
	J.DD,
	J.DIV,
	J.DL,
	J.DT,
	J.EM,
	J.EMBED,
	J.H1,
	J.H2,
	J.H3,
	J.H4,
	J.H5,
	J.H6,
	J.HEAD,
	J.HR,
	J.I,
	J.IMG,
	J.LI,
	J.LISTING,
	J.MENU,
	J.META,
	J.NOBR,
	J.OL,
	J.P,
	J.PRE,
	J.RUBY,
	J.S,
	J.SMALL,
	J.SPAN,
	J.STRONG,
	J.STRIKE,
	J.SUB,
	J.SUP,
	J.TABLE,
	J.TT,
	J.U,
	J.UL,
	J.VAR
]);
function As(e) {
	let t = e.tagID;
	return t === J.FONT && e.attrs.some(({ name: e }) => e === No.COLOR || e === No.SIZE || e === No.FACE) || ks.has(t);
}
function js(e) {
	for (let t = 0; t < e.attrs.length; t++) if (e.attrs[t].name === ws) {
		e.attrs[t].name = Ts;
		break;
	}
}
function Ms(e) {
	for (let t = 0; t < e.attrs.length; t++) {
		let n = Es.get(e.attrs[t].name);
		n != null && (e.attrs[t].name = n);
	}
}
function Ns(e) {
	for (let t = 0; t < e.attrs.length; t++) {
		let n = Ds.get(e.attrs[t].name);
		n && (e.attrs[t].prefix = n.prefix, e.attrs[t].name = n.name, e.attrs[t].namespace = n.namespace);
	}
}
function Ps(e) {
	let t = Os.get(e.tagName);
	t != null && (e.tagName = t, e.tagID = Io(e.tagName));
}
function Fs(e, t) {
	return t === K.MATHML && (e === J.MI || e === J.MO || e === J.MN || e === J.MS || e === J.MTEXT);
}
function Is(e, t, n) {
	if (t === K.MATHML && e === J.ANNOTATION_XML) {
		for (let e = 0; e < n.length; e++) if (n[e].name === No.ENCODING) {
			let t = n[e].value.toLowerCase();
			return t === Cs.TEXT_HTML || t === Cs.APPLICATION_XML;
		}
	}
	return t === K.SVG && (e === J.FOREIGN_OBJECT || e === J.DESC || e === J.TITLE);
}
function Ls(e, t, n, r) {
	return (!r || r === K.HTML) && Is(e, t, n) || (!r || r === K.MATHML) && Fs(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/parse5@7.2.1/node_modules/parse5/dist/parser/index.js
var Rs = "hidden", zs = 8, Bs = 3, Q;
(function(e) {
	e[e.INITIAL = 0] = "INITIAL", e[e.BEFORE_HTML = 1] = "BEFORE_HTML", e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD", e[e.IN_HEAD = 3] = "IN_HEAD", e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e[e.AFTER_HEAD = 5] = "AFTER_HEAD", e[e.IN_BODY = 6] = "IN_BODY", e[e.TEXT = 7] = "TEXT", e[e.IN_TABLE = 8] = "IN_TABLE", e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e[e.IN_CAPTION = 10] = "IN_CAPTION", e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e[e.IN_ROW = 13] = "IN_ROW", e[e.IN_CELL = 14] = "IN_CELL", e[e.IN_SELECT = 15] = "IN_SELECT", e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE", e[e.AFTER_BODY = 18] = "AFTER_BODY", e[e.IN_FRAMESET = 19] = "IN_FRAMESET", e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
})(Q ||= {});
var Vs = {
	startLine: -1,
	startCol: -1,
	startOffset: -1,
	endLine: -1,
	endCol: -1,
	endOffset: -1
}, Hs = new Set([
	J.TABLE,
	J.TBODY,
	J.TFOOT,
	J.THEAD,
	J.TR
]), Us = {
	scriptingEnabled: !0,
	sourceCodeLocationInfo: !1,
	treeAdapter: ds,
	onParseError: null
}, Ws = class {
	constructor(e, t, n = null, r = null) {
		this.fragmentContext = n, this.scriptHandler = r, this.currentToken = null, this.stopped = !1, this.insertionMode = Q.INITIAL, this.originalInsertionMode = Q.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = !1, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = !1, this.framesetOk = !0, this.skipNextNewLine = !1, this.fosterParentingEnabled = !1, this.options = {
			...Us,
			...e
		}, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = !0), this.document = t ?? this.treeAdapter.createDocument(), this.tokenizer = new Jo(this.options, this), this.activeFormattingElements = new us(this.treeAdapter), this.fragmentContextID = n ? Io(this.treeAdapter.getTagName(n)) : J.UNKNOWN, this._setContextModes(n ?? this.document, this.fragmentContextID), this.openElements = new os(this.document, this.treeAdapter, this);
	}
	static parse(e, t) {
		let n = new this(t);
		return n.tokenizer.write(e, !0), n.document;
	}
	static getFragmentParser(e, t) {
		let n = {
			...Us,
			...t
		};
		e ??= n.treeAdapter.createElement(q.TEMPLATE, K.HTML, []);
		let r = n.treeAdapter.createElement("documentmock", K.HTML, []), i = new this(n, r, e);
		return i.fragmentContextID === J.TEMPLATE && i.tmplInsertionModeStack.unshift(Q.IN_TEMPLATE), i._initTokenizerForFragmentParsing(), i._insertFakeRootElement(), i._resetInsertionMode(), i._findFormInFragmentContext(), i;
	}
	getFragment() {
		let e = this.treeAdapter.getFirstChild(this.document), t = this.treeAdapter.createDocumentFragment();
		return this._adoptNodes(e, t), t;
	}
	_err(e, t, n) {
		if (!this.onParseError) return;
		let r = e.location ?? Vs, i = {
			code: t,
			startLine: r.startLine,
			startCol: r.startCol,
			startOffset: r.startOffset,
			endLine: n ? r.startLine : r.endLine,
			endCol: n ? r.startCol : r.endCol,
			endOffset: n ? r.startOffset : r.endOffset
		};
		this.onParseError(i);
	}
	onItemPush(e, t, n) {
		var r, i;
		(i = (r = this.treeAdapter).onItemPush) == null || i.call(r, e), n && this.openElements.stackTop > 0 && this._setContextModes(e, t);
	}
	onItemPop(e, t) {
		var n, r;
		if (this.options.sourceCodeLocationInfo && this._setEndLocation(e, this.currentToken), (r = (n = this.treeAdapter).onItemPop) == null || r.call(n, e, this.openElements.current), t) {
			let e, t;
			this.openElements.stackTop === 0 && this.fragmentContext ? (e = this.fragmentContext, t = this.fragmentContextID) : {current: e, currentTagId: t} = this.openElements, this._setContextModes(e, t);
		}
	}
	_setContextModes(e, t) {
		let n = e === this.document || this.treeAdapter.getNamespaceURI(e) === K.HTML;
		this.currentNotInHTML = !n, this.tokenizer.inForeignNode = !n && !this._isIntegrationPoint(t, e);
	}
	_switchToTextParsing(e, t) {
		this._insertElement(e, K.HTML), this.tokenizer.state = t, this.originalInsertionMode = this.insertionMode, this.insertionMode = Q.TEXT;
	}
	switchToPlaintextParsing() {
		this.insertionMode = Q.TEXT, this.originalInsertionMode = Q.IN_BODY, this.tokenizer.state = Z.PLAINTEXT;
	}
	_getAdjustedCurrentElement() {
		return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
	}
	_findFormInFragmentContext() {
		let e = this.fragmentContext;
		for (; e;) {
			if (this.treeAdapter.getTagName(e) === q.FORM) {
				this.formElement = e;
				break;
			}
			e = this.treeAdapter.getParentNode(e);
		}
	}
	_initTokenizerForFragmentParsing() {
		if (!(!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== K.HTML)) switch (this.fragmentContextID) {
			case J.TITLE:
			case J.TEXTAREA:
				this.tokenizer.state = Z.RCDATA;
				break;
			case J.STYLE:
			case J.XMP:
			case J.IFRAME:
			case J.NOEMBED:
			case J.NOFRAMES:
			case J.NOSCRIPT:
				this.tokenizer.state = Z.RAWTEXT;
				break;
			case J.SCRIPT:
				this.tokenizer.state = Z.SCRIPT_DATA;
				break;
			case J.PLAINTEXT:
				this.tokenizer.state = Z.PLAINTEXT;
				break;
			default:
		}
	}
	_setDocumentType(e) {
		let t = e.name || "", n = e.publicId || "", r = e.systemId || "";
		if (this.treeAdapter.setDocumentType(this.document, t, n, r), e.location) {
			let t = this.treeAdapter.getChildNodes(this.document).find((e) => this.treeAdapter.isDocumentTypeNode(e));
			t && this.treeAdapter.setNodeSourceCodeLocation(t, e.location);
		}
	}
	_attachElementToTree(e, t) {
		if (this.options.sourceCodeLocationInfo) {
			let n = t && {
				...t,
				startTag: t
			};
			this.treeAdapter.setNodeSourceCodeLocation(e, n);
		}
		if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(e);
		else {
			let t = this.openElements.currentTmplContentOrNode;
			this.treeAdapter.appendChild(t, e);
		}
	}
	_appendElement(e, t) {
		let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
		this._attachElementToTree(n, e.location);
	}
	_insertElement(e, t) {
		let n = this.treeAdapter.createElement(e.tagName, t, e.attrs);
		this._attachElementToTree(n, e.location), this.openElements.push(n, e.tagID);
	}
	_insertFakeElement(e, t) {
		let n = this.treeAdapter.createElement(e, K.HTML, []);
		this._attachElementToTree(n, null), this.openElements.push(n, t);
	}
	_insertTemplate(e) {
		let t = this.treeAdapter.createElement(e.tagName, K.HTML, e.attrs), n = this.treeAdapter.createDocumentFragment();
		this.treeAdapter.setTemplateContent(t, n), this._attachElementToTree(t, e.location), this.openElements.push(t, e.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, null);
	}
	_insertFakeRootElement() {
		let e = this.treeAdapter.createElement(q.HTML, K.HTML, []);
		this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(e, null), this.treeAdapter.appendChild(this.openElements.current, e), this.openElements.push(e, J.HTML);
	}
	_appendCommentNode(e, t) {
		let n = this.treeAdapter.createCommentNode(e.data);
		this.treeAdapter.appendChild(t, n), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(n, e.location);
	}
	_insertCharacters(e) {
		let t, n;
		if (this._shouldFosterParentOnInsertion() ? ({parent: t, beforeElement: n} = this._findFosterParentingLocation(), n ? this.treeAdapter.insertTextBefore(t, e.chars, n) : this.treeAdapter.insertText(t, e.chars)) : (t = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(t, e.chars)), !e.location) return;
		let r = this.treeAdapter.getChildNodes(t), i = r[(n ? r.lastIndexOf(n) : r.length) - 1];
		if (this.treeAdapter.getNodeSourceCodeLocation(i)) {
			let { endLine: t, endCol: n, endOffset: r } = e.location;
			this.treeAdapter.updateNodeSourceCodeLocation(i, {
				endLine: t,
				endCol: n,
				endOffset: r
			});
		} else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(i, e.location);
	}
	_adoptNodes(e, t) {
		for (let n = this.treeAdapter.getFirstChild(e); n; n = this.treeAdapter.getFirstChild(e)) this.treeAdapter.detachNode(n), this.treeAdapter.appendChild(t, n);
	}
	_setEndLocation(e, t) {
		if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
			let n = t.location, r = this.treeAdapter.getTagName(e), i = t.type === U.END_TAG && r === t.tagName ? {
				endTag: { ...n },
				endLine: n.endLine,
				endCol: n.endCol,
				endOffset: n.endOffset
			} : {
				endLine: n.startLine,
				endCol: n.startCol,
				endOffset: n.startOffset
			};
			this.treeAdapter.updateNodeSourceCodeLocation(e, i);
		}
	}
	shouldProcessStartTagTokenInForeignContent(e) {
		if (!this.currentNotInHTML) return !1;
		let t, n;
		return this.openElements.stackTop === 0 && this.fragmentContext ? (t = this.fragmentContext, n = this.fragmentContextID) : {current: t, currentTagId: n} = this.openElements, e.tagID === J.SVG && this.treeAdapter.getTagName(t) === q.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(t) === K.MATHML ? !1 : this.tokenizer.inForeignNode || (e.tagID === J.MGLYPH || e.tagID === J.MALIGNMARK) && !this._isIntegrationPoint(n, t, K.HTML);
	}
	_processToken(e) {
		switch (e.type) {
			case U.CHARACTER:
				this.onCharacter(e);
				break;
			case U.NULL_CHARACTER:
				this.onNullCharacter(e);
				break;
			case U.COMMENT:
				this.onComment(e);
				break;
			case U.DOCTYPE:
				this.onDoctype(e);
				break;
			case U.START_TAG:
				this._processStartTag(e);
				break;
			case U.END_TAG:
				this.onEndTag(e);
				break;
			case U.EOF:
				this.onEof(e);
				break;
			case U.WHITESPACE_CHARACTER:
				this.onWhitespaceCharacter(e);
				break;
		}
	}
	_isIntegrationPoint(e, t, n) {
		return Ls(e, this.treeAdapter.getNamespaceURI(t), this.treeAdapter.getAttrList(t), n);
	}
	_reconstructActiveFormattingElements() {
		let e = this.activeFormattingElements.entries.length;
		if (e) {
			let t = this.activeFormattingElements.entries.findIndex((e) => e.type === cs.Marker || this.openElements.contains(e.element)), n = t < 0 ? e - 1 : t - 1;
			for (let e = n; e >= 0; e--) {
				let t = this.activeFormattingElements.entries[e];
				this._insertElement(t.token, this.treeAdapter.getNamespaceURI(t.element)), t.element = this.openElements.current;
			}
		}
	}
	_closeTableCell() {
		this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = Q.IN_ROW;
	}
	_closePElement() {
		this.openElements.generateImpliedEndTagsWithExclusion(J.P), this.openElements.popUntilTagNamePopped(J.P);
	}
	_resetInsertionMode() {
		for (let e = this.openElements.stackTop; e >= 0; e--) switch (e === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[e]) {
			case J.TR:
				this.insertionMode = Q.IN_ROW;
				return;
			case J.TBODY:
			case J.THEAD:
			case J.TFOOT:
				this.insertionMode = Q.IN_TABLE_BODY;
				return;
			case J.CAPTION:
				this.insertionMode = Q.IN_CAPTION;
				return;
			case J.COLGROUP:
				this.insertionMode = Q.IN_COLUMN_GROUP;
				return;
			case J.TABLE:
				this.insertionMode = Q.IN_TABLE;
				return;
			case J.BODY:
				this.insertionMode = Q.IN_BODY;
				return;
			case J.FRAMESET:
				this.insertionMode = Q.IN_FRAMESET;
				return;
			case J.SELECT:
				this._resetInsertionModeForSelect(e);
				return;
			case J.TEMPLATE:
				this.insertionMode = this.tmplInsertionModeStack[0];
				return;
			case J.HTML:
				this.insertionMode = this.headElement ? Q.AFTER_HEAD : Q.BEFORE_HEAD;
				return;
			case J.TD:
			case J.TH:
				if (e > 0) {
					this.insertionMode = Q.IN_CELL;
					return;
				}
				break;
			case J.HEAD:
				if (e > 0) {
					this.insertionMode = Q.IN_HEAD;
					return;
				}
				break;
		}
		this.insertionMode = Q.IN_BODY;
	}
	_resetInsertionModeForSelect(e) {
		if (e > 0) for (let t = e - 1; t > 0; t--) {
			let e = this.openElements.tagIDs[t];
			if (e === J.TEMPLATE) break;
			if (e === J.TABLE) {
				this.insertionMode = Q.IN_SELECT_IN_TABLE;
				return;
			}
		}
		this.insertionMode = Q.IN_SELECT;
	}
	_isElementCausesFosterParenting(e) {
		return Hs.has(e);
	}
	_shouldFosterParentOnInsertion() {
		return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId);
	}
	_findFosterParentingLocation() {
		for (let e = this.openElements.stackTop; e >= 0; e--) {
			let t = this.openElements.items[e];
			switch (this.openElements.tagIDs[e]) {
				case J.TEMPLATE:
					if (this.treeAdapter.getNamespaceURI(t) === K.HTML) return {
						parent: this.treeAdapter.getTemplateContent(t),
						beforeElement: null
					};
					break;
				case J.TABLE: {
					let n = this.treeAdapter.getParentNode(t);
					return n ? {
						parent: n,
						beforeElement: t
					} : {
						parent: this.openElements.items[e - 1],
						beforeElement: null
					};
				}
				default:
			}
		}
		return {
			parent: this.openElements.items[0],
			beforeElement: null
		};
	}
	_fosterParentElement(e) {
		let t = this._findFosterParentingLocation();
		t.beforeElement ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement) : this.treeAdapter.appendChild(t.parent, e);
	}
	_isSpecialElement(e, t) {
		return Lo[this.treeAdapter.getNamespaceURI(e)].has(t);
	}
	onCharacter(e) {
		if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
			su(this, e);
			return;
		}
		switch (this.insertionMode) {
			case Q.INITIAL:
				rc(this, e);
				break;
			case Q.BEFORE_HTML:
				oc(this, e);
				break;
			case Q.BEFORE_HEAD:
				lc(this, e);
				break;
			case Q.IN_HEAD:
				pc(this, e);
				break;
			case Q.IN_HEAD_NO_SCRIPT:
				gc(this, e);
				break;
			case Q.AFTER_HEAD:
				yc(this, e);
				break;
			case Q.IN_BODY:
			case Q.IN_CAPTION:
			case Q.IN_CELL:
			case Q.IN_TEMPLATE:
				Sc(this, e);
				break;
			case Q.TEXT:
			case Q.IN_SELECT:
			case Q.IN_SELECT_IN_TABLE:
				this._insertCharacters(e);
				break;
			case Q.IN_TABLE:
			case Q.IN_TABLE_BODY:
			case Q.IN_ROW:
				gl(this, e);
				break;
			case Q.IN_TABLE_TEXT:
				kl(this, e);
				break;
			case Q.IN_COLUMN_GROUP:
				Il(this, e);
				break;
			case Q.AFTER_BODY:
				Ql(this, e);
				break;
			case Q.AFTER_AFTER_BODY:
				iu(this, e);
				break;
			default:
		}
	}
	onNullCharacter(e) {
		if (this.skipNextNewLine = !1, this.tokenizer.inForeignNode) {
			ou(this, e);
			return;
		}
		switch (this.insertionMode) {
			case Q.INITIAL:
				rc(this, e);
				break;
			case Q.BEFORE_HTML:
				oc(this, e);
				break;
			case Q.BEFORE_HEAD:
				lc(this, e);
				break;
			case Q.IN_HEAD:
				pc(this, e);
				break;
			case Q.IN_HEAD_NO_SCRIPT:
				gc(this, e);
				break;
			case Q.AFTER_HEAD:
				yc(this, e);
				break;
			case Q.TEXT:
				this._insertCharacters(e);
				break;
			case Q.IN_TABLE:
			case Q.IN_TABLE_BODY:
			case Q.IN_ROW:
				gl(this, e);
				break;
			case Q.IN_COLUMN_GROUP:
				Il(this, e);
				break;
			case Q.AFTER_BODY:
				Ql(this, e);
				break;
			case Q.AFTER_AFTER_BODY:
				iu(this, e);
				break;
			default:
		}
	}
	onComment(e) {
		if (this.skipNextNewLine = !1, this.currentNotInHTML) {
			Qs(this, e);
			return;
		}
		switch (this.insertionMode) {
			case Q.INITIAL:
			case Q.BEFORE_HTML:
			case Q.BEFORE_HEAD:
			case Q.IN_HEAD:
			case Q.IN_HEAD_NO_SCRIPT:
			case Q.AFTER_HEAD:
			case Q.IN_BODY:
			case Q.IN_TABLE:
			case Q.IN_CAPTION:
			case Q.IN_COLUMN_GROUP:
			case Q.IN_TABLE_BODY:
			case Q.IN_ROW:
			case Q.IN_CELL:
			case Q.IN_SELECT:
			case Q.IN_SELECT_IN_TABLE:
			case Q.IN_TEMPLATE:
			case Q.IN_FRAMESET:
			case Q.AFTER_FRAMESET:
				Qs(this, e);
				break;
			case Q.IN_TABLE_TEXT:
				Al(this, e);
				break;
			case Q.AFTER_BODY:
				$s(this, e);
				break;
			case Q.AFTER_AFTER_BODY:
			case Q.AFTER_AFTER_FRAMESET:
				ec(this, e);
				break;
			default:
		}
	}
	onDoctype(e) {
		switch (this.skipNextNewLine = !1, this.insertionMode) {
			case Q.INITIAL:
				nc(this, e);
				break;
			case Q.BEFORE_HEAD:
			case Q.IN_HEAD:
			case Q.IN_HEAD_NO_SCRIPT:
			case Q.AFTER_HEAD:
				this._err(e, H.misplacedDoctype);
				break;
			case Q.IN_TABLE_TEXT:
				Al(this, e);
				break;
			default:
		}
	}
	onStartTag(e) {
		this.skipNextNewLine = !1, this.currentToken = e, this._processStartTag(e), e.selfClosing && !e.ackSelfClosing && this._err(e, H.nonVoidHtmlElementStartTagWithTrailingSolidus);
	}
	_processStartTag(e) {
		this.shouldProcessStartTagTokenInForeignContent(e) ? lu(this, e) : this._startTagOutsideForeignContent(e);
	}
	_startTagOutsideForeignContent(e) {
		switch (this.insertionMode) {
			case Q.INITIAL:
				rc(this, e);
				break;
			case Q.BEFORE_HTML:
				ic(this, e);
				break;
			case Q.BEFORE_HEAD:
				sc(this, e);
				break;
			case Q.IN_HEAD:
				uc(this, e);
				break;
			case Q.IN_HEAD_NO_SCRIPT:
				mc(this, e);
				break;
			case Q.AFTER_HEAD:
				_c(this, e);
				break;
			case Q.IN_BODY:
				$(this, e);
				break;
			case Q.IN_TABLE:
				Tl(this, e);
				break;
			case Q.IN_TABLE_TEXT:
				Al(this, e);
				break;
			case Q.IN_CAPTION:
				Ml(this, e);
				break;
			case Q.IN_COLUMN_GROUP:
				Pl(this, e);
				break;
			case Q.IN_TABLE_BODY:
				Ll(this, e);
				break;
			case Q.IN_ROW:
				zl(this, e);
				break;
			case Q.IN_CELL:
				Vl(this, e);
				break;
			case Q.IN_SELECT:
				Ul(this, e);
				break;
			case Q.IN_SELECT_IN_TABLE:
				Gl(this, e);
				break;
			case Q.IN_TEMPLATE:
				ql(this, e);
				break;
			case Q.AFTER_BODY:
				Xl(this, e);
				break;
			case Q.IN_FRAMESET:
				$l(this, e);
				break;
			case Q.AFTER_FRAMESET:
				tu(this, e);
				break;
			case Q.AFTER_AFTER_BODY:
				ru(this, e);
				break;
			case Q.AFTER_AFTER_FRAMESET:
				au(this, e);
				break;
			default:
		}
	}
	onEndTag(e) {
		this.skipNextNewLine = !1, this.currentToken = e, this.currentNotInHTML ? uu(this, e) : this._endTagOutsideForeignContent(e);
	}
	_endTagOutsideForeignContent(e) {
		switch (this.insertionMode) {
			case Q.INITIAL:
				rc(this, e);
				break;
			case Q.BEFORE_HTML:
				ac(this, e);
				break;
			case Q.BEFORE_HEAD:
				cc(this, e);
				break;
			case Q.IN_HEAD:
				dc(this, e);
				break;
			case Q.IN_HEAD_NO_SCRIPT:
				hc(this, e);
				break;
			case Q.AFTER_HEAD:
				vc(this, e);
				break;
			case Q.IN_BODY:
				fl(this, e);
				break;
			case Q.TEXT:
				ml(this, e);
				break;
			case Q.IN_TABLE:
				El(this, e);
				break;
			case Q.IN_TABLE_TEXT:
				Al(this, e);
				break;
			case Q.IN_CAPTION:
				Nl(this, e);
				break;
			case Q.IN_COLUMN_GROUP:
				Fl(this, e);
				break;
			case Q.IN_TABLE_BODY:
				Rl(this, e);
				break;
			case Q.IN_ROW:
				Bl(this, e);
				break;
			case Q.IN_CELL:
				Hl(this, e);
				break;
			case Q.IN_SELECT:
				Wl(this, e);
				break;
			case Q.IN_SELECT_IN_TABLE:
				Kl(this, e);
				break;
			case Q.IN_TEMPLATE:
				Jl(this, e);
				break;
			case Q.AFTER_BODY:
				Zl(this, e);
				break;
			case Q.IN_FRAMESET:
				eu(this, e);
				break;
			case Q.AFTER_FRAMESET:
				nu(this, e);
				break;
			case Q.AFTER_AFTER_BODY:
				iu(this, e);
				break;
			default:
		}
	}
	onEof(e) {
		switch (this.insertionMode) {
			case Q.INITIAL:
				rc(this, e);
				break;
			case Q.BEFORE_HTML:
				oc(this, e);
				break;
			case Q.BEFORE_HEAD:
				lc(this, e);
				break;
			case Q.IN_HEAD:
				pc(this, e);
				break;
			case Q.IN_HEAD_NO_SCRIPT:
				gc(this, e);
				break;
			case Q.AFTER_HEAD:
				yc(this, e);
				break;
			case Q.IN_BODY:
			case Q.IN_TABLE:
			case Q.IN_CAPTION:
			case Q.IN_COLUMN_GROUP:
			case Q.IN_TABLE_BODY:
			case Q.IN_ROW:
			case Q.IN_CELL:
			case Q.IN_SELECT:
			case Q.IN_SELECT_IN_TABLE:
				pl(this, e);
				break;
			case Q.TEXT:
				hl(this, e);
				break;
			case Q.IN_TABLE_TEXT:
				Al(this, e);
				break;
			case Q.IN_TEMPLATE:
				Yl(this, e);
				break;
			case Q.AFTER_BODY:
			case Q.IN_FRAMESET:
			case Q.AFTER_FRAMESET:
			case Q.AFTER_AFTER_BODY:
			case Q.AFTER_AFTER_FRAMESET:
				tc(this, e);
				break;
			default:
		}
	}
	onWhitespaceCharacter(e) {
		if (this.skipNextNewLine && (this.skipNextNewLine = !1, e.chars.charCodeAt(0) === B.LINE_FEED)) {
			if (e.chars.length === 1) return;
			e.chars = e.chars.substr(1);
		}
		if (this.tokenizer.inForeignNode) {
			this._insertCharacters(e);
			return;
		}
		switch (this.insertionMode) {
			case Q.IN_HEAD:
			case Q.IN_HEAD_NO_SCRIPT:
			case Q.AFTER_HEAD:
			case Q.TEXT:
			case Q.IN_COLUMN_GROUP:
			case Q.IN_SELECT:
			case Q.IN_SELECT_IN_TABLE:
			case Q.IN_FRAMESET:
			case Q.AFTER_FRAMESET:
				this._insertCharacters(e);
				break;
			case Q.IN_BODY:
			case Q.IN_CAPTION:
			case Q.IN_CELL:
			case Q.IN_TEMPLATE:
			case Q.AFTER_BODY:
			case Q.AFTER_AFTER_BODY:
			case Q.AFTER_AFTER_FRAMESET:
				xc(this, e);
				break;
			case Q.IN_TABLE:
			case Q.IN_TABLE_BODY:
			case Q.IN_ROW:
				gl(this, e);
				break;
			case Q.IN_TABLE_TEXT:
				Ol(this, e);
				break;
			default:
		}
	}
};
function Gs(e, t) {
	let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
	return n ? e.openElements.contains(n.element) ? e.openElements.hasInScope(t.tagID) || (n = null) : (e.activeFormattingElements.removeEntry(n), n = null) : dl(e, t), n;
}
function Ks(e, t) {
	let n = null, r = e.openElements.stackTop;
	for (; r >= 0; r--) {
		let i = e.openElements.items[r];
		if (i === t.element) break;
		e._isSpecialElement(i, e.openElements.tagIDs[r]) && (n = i);
	}
	return n || (e.openElements.shortenToLength(r < 0 ? 0 : r), e.activeFormattingElements.removeEntry(t)), n;
}
function qs(e, t, n) {
	let r = t, i = e.openElements.getCommonAncestor(t);
	for (let a = 0, o = i; o !== n; a++, o = i) {
		i = e.openElements.getCommonAncestor(o);
		let n = e.activeFormattingElements.getElementEntry(o), s = n && a >= Bs;
		!n || s ? (s && e.activeFormattingElements.removeEntry(n), e.openElements.remove(o)) : (o = Js(e, n), r === t && (e.activeFormattingElements.bookmark = n), e.treeAdapter.detachNode(r), e.treeAdapter.appendChild(o, r), r = o);
	}
	return r;
}
function Js(e, t) {
	let n = e.treeAdapter.getNamespaceURI(t.element), r = e.treeAdapter.createElement(t.token.tagName, n, t.token.attrs);
	return e.openElements.replace(t.element, r), t.element = r, r;
}
function Ys(e, t, n) {
	let r = Io(e.treeAdapter.getTagName(t));
	if (e._isElementCausesFosterParenting(r)) e._fosterParentElement(n);
	else {
		let i = e.treeAdapter.getNamespaceURI(t);
		r === J.TEMPLATE && i === K.HTML && (t = e.treeAdapter.getTemplateContent(t)), e.treeAdapter.appendChild(t, n);
	}
}
function Xs(e, t, n) {
	let r = e.treeAdapter.getNamespaceURI(n.element), { token: i } = n, a = e.treeAdapter.createElement(i.tagName, r, i.attrs);
	e._adoptNodes(t, a), e.treeAdapter.appendChild(t, a), e.activeFormattingElements.insertElementAfterBookmark(a, i), e.activeFormattingElements.removeEntry(n), e.openElements.remove(n.element), e.openElements.insertAfter(t, a, i.tagID);
}
function Zs(e, t) {
	for (let n = 0; n < zs; n++) {
		let n = Gs(e, t);
		if (!n) break;
		let r = Ks(e, n);
		if (!r) break;
		e.activeFormattingElements.bookmark = n;
		let i = qs(e, r, n.element), a = e.openElements.getCommonAncestor(n.element);
		e.treeAdapter.detachNode(i), a && Ys(e, a, i), Xs(e, r, n);
	}
}
function Qs(e, t) {
	e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
}
function $s(e, t) {
	e._appendCommentNode(t, e.openElements.items[0]);
}
function ec(e, t) {
	e._appendCommentNode(t, e.document);
}
function tc(e, t) {
	if (e.stopped = !0, t.location) {
		let n = e.fragmentContext ? 0 : 2;
		for (let r = e.openElements.stackTop; r >= n; r--) e._setEndLocation(e.openElements.items[r], t);
		if (!e.fragmentContext && e.openElements.stackTop >= 0) {
			let n = e.openElements.items[0], r = e.treeAdapter.getNodeSourceCodeLocation(n);
			if (r && !r.endTag && (e._setEndLocation(n, t), e.openElements.stackTop >= 1)) {
				let n = e.openElements.items[1], r = e.treeAdapter.getNodeSourceCodeLocation(n);
				r && !r.endTag && e._setEndLocation(n, t);
			}
		}
	}
}
function nc(e, t) {
	e._setDocumentType(t);
	let n = t.forceQuirks ? Po.QUIRKS : Ss(t);
	xs(t) || e._err(t, H.nonConformingDoctype), e.treeAdapter.setDocumentMode(e.document, n), e.insertionMode = Q.BEFORE_HTML;
}
function rc(e, t) {
	e._err(t, H.missingDoctype, !0), e.treeAdapter.setDocumentMode(e.document, Po.QUIRKS), e.insertionMode = Q.BEFORE_HTML, e._processToken(t);
}
function ic(e, t) {
	t.tagID === J.HTML ? (e._insertElement(t, K.HTML), e.insertionMode = Q.BEFORE_HEAD) : oc(e, t);
}
function ac(e, t) {
	let n = t.tagID;
	(n === J.HTML || n === J.HEAD || n === J.BODY || n === J.BR) && oc(e, t);
}
function oc(e, t) {
	e._insertFakeRootElement(), e.insertionMode = Q.BEFORE_HEAD, e._processToken(t);
}
function sc(e, t) {
	switch (t.tagID) {
		case J.HTML:
			$(e, t);
			break;
		case J.HEAD:
			e._insertElement(t, K.HTML), e.headElement = e.openElements.current, e.insertionMode = Q.IN_HEAD;
			break;
		default: lc(e, t);
	}
}
function cc(e, t) {
	let n = t.tagID;
	n === J.HEAD || n === J.BODY || n === J.HTML || n === J.BR ? lc(e, t) : e._err(t, H.endTagWithoutMatchingOpenElement);
}
function lc(e, t) {
	e._insertFakeElement(q.HEAD, J.HEAD), e.headElement = e.openElements.current, e.insertionMode = Q.IN_HEAD, e._processToken(t);
}
function uc(e, t) {
	switch (t.tagID) {
		case J.HTML:
			$(e, t);
			break;
		case J.BASE:
		case J.BASEFONT:
		case J.BGSOUND:
		case J.LINK:
		case J.META:
			e._appendElement(t, K.HTML), t.ackSelfClosing = !0;
			break;
		case J.TITLE:
			e._switchToTextParsing(t, Z.RCDATA);
			break;
		case J.NOSCRIPT:
			e.options.scriptingEnabled ? e._switchToTextParsing(t, Z.RAWTEXT) : (e._insertElement(t, K.HTML), e.insertionMode = Q.IN_HEAD_NO_SCRIPT);
			break;
		case J.NOFRAMES:
		case J.STYLE:
			e._switchToTextParsing(t, Z.RAWTEXT);
			break;
		case J.SCRIPT:
			e._switchToTextParsing(t, Z.SCRIPT_DATA);
			break;
		case J.TEMPLATE:
			e._insertTemplate(t), e.activeFormattingElements.insertMarker(), e.framesetOk = !1, e.insertionMode = Q.IN_TEMPLATE, e.tmplInsertionModeStack.unshift(Q.IN_TEMPLATE);
			break;
		case J.HEAD:
			e._err(t, H.misplacedStartTagForHeadElement);
			break;
		default: pc(e, t);
	}
}
function dc(e, t) {
	switch (t.tagID) {
		case J.HEAD:
			e.openElements.pop(), e.insertionMode = Q.AFTER_HEAD;
			break;
		case J.BODY:
		case J.BR:
		case J.HTML:
			pc(e, t);
			break;
		case J.TEMPLATE:
			fc(e, t);
			break;
		default: e._err(t, H.endTagWithoutMatchingOpenElement);
	}
}
function fc(e, t) {
	e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagId !== J.TEMPLATE && e._err(t, H.closingOfElementWithOpenChildElements), e.openElements.popUntilTagNamePopped(J.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode()) : e._err(t, H.endTagWithoutMatchingOpenElement);
}
function pc(e, t) {
	e.openElements.pop(), e.insertionMode = Q.AFTER_HEAD, e._processToken(t);
}
function mc(e, t) {
	switch (t.tagID) {
		case J.HTML:
			$(e, t);
			break;
		case J.BASEFONT:
		case J.BGSOUND:
		case J.HEAD:
		case J.LINK:
		case J.META:
		case J.NOFRAMES:
		case J.STYLE:
			uc(e, t);
			break;
		case J.NOSCRIPT:
			e._err(t, H.nestedNoscriptInHead);
			break;
		default: gc(e, t);
	}
}
function hc(e, t) {
	switch (t.tagID) {
		case J.NOSCRIPT:
			e.openElements.pop(), e.insertionMode = Q.IN_HEAD;
			break;
		case J.BR:
			gc(e, t);
			break;
		default: e._err(t, H.endTagWithoutMatchingOpenElement);
	}
}
function gc(e, t) {
	let n = t.type === U.EOF ? H.openElementsLeftAfterEof : H.disallowedContentInNoscriptInHead;
	e._err(t, n), e.openElements.pop(), e.insertionMode = Q.IN_HEAD, e._processToken(t);
}
function _c(e, t) {
	switch (t.tagID) {
		case J.HTML:
			$(e, t);
			break;
		case J.BODY:
			e._insertElement(t, K.HTML), e.framesetOk = !1, e.insertionMode = Q.IN_BODY;
			break;
		case J.FRAMESET:
			e._insertElement(t, K.HTML), e.insertionMode = Q.IN_FRAMESET;
			break;
		case J.BASE:
		case J.BASEFONT:
		case J.BGSOUND:
		case J.LINK:
		case J.META:
		case J.NOFRAMES:
		case J.SCRIPT:
		case J.STYLE:
		case J.TEMPLATE:
		case J.TITLE:
			e._err(t, H.abandonedHeadElementChild), e.openElements.push(e.headElement, J.HEAD), uc(e, t), e.openElements.remove(e.headElement);
			break;
		case J.HEAD:
			e._err(t, H.misplacedStartTagForHeadElement);
			break;
		default: yc(e, t);
	}
}
function vc(e, t) {
	switch (t.tagID) {
		case J.BODY:
		case J.HTML:
		case J.BR:
			yc(e, t);
			break;
		case J.TEMPLATE:
			fc(e, t);
			break;
		default: e._err(t, H.endTagWithoutMatchingOpenElement);
	}
}
function yc(e, t) {
	e._insertFakeElement(q.BODY, J.BODY), e.insertionMode = Q.IN_BODY, bc(e, t);
}
function bc(e, t) {
	switch (t.type) {
		case U.CHARACTER:
			Sc(e, t);
			break;
		case U.WHITESPACE_CHARACTER:
			xc(e, t);
			break;
		case U.COMMENT:
			Qs(e, t);
			break;
		case U.START_TAG:
			$(e, t);
			break;
		case U.END_TAG:
			fl(e, t);
			break;
		case U.EOF:
			pl(e, t);
			break;
		default:
	}
}
function xc(e, t) {
	e._reconstructActiveFormattingElements(), e._insertCharacters(t);
}
function Sc(e, t) {
	e._reconstructActiveFormattingElements(), e._insertCharacters(t), e.framesetOk = !1;
}
function Cc(e, t) {
	e.openElements.tmplCount === 0 && e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
}
function wc(e, t) {
	let n = e.openElements.tryPeekProperlyNestedBodyElement();
	n && e.openElements.tmplCount === 0 && (e.framesetOk = !1, e.treeAdapter.adoptAttributes(n, t.attrs));
}
function Tc(e, t) {
	let n = e.openElements.tryPeekProperlyNestedBodyElement();
	e.framesetOk && n && (e.treeAdapter.detachNode(n), e.openElements.popAllUpToHtmlElement(), e._insertElement(t, K.HTML), e.insertionMode = Q.IN_FRAMESET);
}
function Ec(e, t) {
	e.openElements.hasInButtonScope(J.P) && e._closePElement(), e._insertElement(t, K.HTML);
}
function Dc(e, t) {
	e.openElements.hasInButtonScope(J.P) && e._closePElement(), Ro.has(e.openElements.currentTagId) && e.openElements.pop(), e._insertElement(t, K.HTML);
}
function Oc(e, t) {
	e.openElements.hasInButtonScope(J.P) && e._closePElement(), e._insertElement(t, K.HTML), e.skipNextNewLine = !0, e.framesetOk = !1;
}
function kc(e, t) {
	let n = e.openElements.tmplCount > 0;
	(!e.formElement || n) && (e.openElements.hasInButtonScope(J.P) && e._closePElement(), e._insertElement(t, K.HTML), n || (e.formElement = e.openElements.current));
}
function Ac(e, t) {
	e.framesetOk = !1;
	let n = t.tagID;
	for (let t = e.openElements.stackTop; t >= 0; t--) {
		let r = e.openElements.tagIDs[t];
		if (n === J.LI && r === J.LI || (n === J.DD || n === J.DT) && (r === J.DD || r === J.DT)) {
			e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.popUntilTagNamePopped(r);
			break;
		}
		if (r !== J.ADDRESS && r !== J.DIV && r !== J.P && e._isSpecialElement(e.openElements.items[t], r)) break;
	}
	e.openElements.hasInButtonScope(J.P) && e._closePElement(), e._insertElement(t, K.HTML);
}
function jc(e, t) {
	e.openElements.hasInButtonScope(J.P) && e._closePElement(), e._insertElement(t, K.HTML), e.tokenizer.state = Z.PLAINTEXT;
}
function Mc(e, t) {
	e.openElements.hasInScope(J.BUTTON) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(J.BUTTON)), e._reconstructActiveFormattingElements(), e._insertElement(t, K.HTML), e.framesetOk = !1;
}
function Nc(e, t) {
	let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(q.A);
	n && (Zs(e, t), e.openElements.remove(n.element), e.activeFormattingElements.removeEntry(n)), e._reconstructActiveFormattingElements(), e._insertElement(t, K.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Pc(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, K.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Fc(e, t) {
	e._reconstructActiveFormattingElements(), e.openElements.hasInScope(J.NOBR) && (Zs(e, t), e._reconstructActiveFormattingElements()), e._insertElement(t, K.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
}
function Ic(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, K.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = !1;
}
function Lc(e, t) {
	e.treeAdapter.getDocumentMode(e.document) !== Po.QUIRKS && e.openElements.hasInButtonScope(J.P) && e._closePElement(), e._insertElement(t, K.HTML), e.framesetOk = !1, e.insertionMode = Q.IN_TABLE;
}
function Rc(e, t) {
	e._reconstructActiveFormattingElements(), e._appendElement(t, K.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function zc(e) {
	let t = _o(e, No.TYPE);
	return t != null && t.toLowerCase() === Rs;
}
function Bc(e, t) {
	e._reconstructActiveFormattingElements(), e._appendElement(t, K.HTML), zc(t) || (e.framesetOk = !1), t.ackSelfClosing = !0;
}
function Vc(e, t) {
	e._appendElement(t, K.HTML), t.ackSelfClosing = !0;
}
function Hc(e, t) {
	e.openElements.hasInButtonScope(J.P) && e._closePElement(), e._appendElement(t, K.HTML), e.framesetOk = !1, t.ackSelfClosing = !0;
}
function Uc(e, t) {
	t.tagName = q.IMG, t.tagID = J.IMG, Rc(e, t);
}
function Wc(e, t) {
	e._insertElement(t, K.HTML), e.skipNextNewLine = !0, e.tokenizer.state = Z.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = !1, e.insertionMode = Q.TEXT;
}
function Gc(e, t) {
	e.openElements.hasInButtonScope(J.P) && e._closePElement(), e._reconstructActiveFormattingElements(), e.framesetOk = !1, e._switchToTextParsing(t, Z.RAWTEXT);
}
function Kc(e, t) {
	e.framesetOk = !1, e._switchToTextParsing(t, Z.RAWTEXT);
}
function qc(e, t) {
	e._switchToTextParsing(t, Z.RAWTEXT);
}
function Jc(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, K.HTML), e.framesetOk = !1, e.insertionMode = e.insertionMode === Q.IN_TABLE || e.insertionMode === Q.IN_CAPTION || e.insertionMode === Q.IN_TABLE_BODY || e.insertionMode === Q.IN_ROW || e.insertionMode === Q.IN_CELL ? Q.IN_SELECT_IN_TABLE : Q.IN_SELECT;
}
function Yc(e, t) {
	e.openElements.currentTagId === J.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(t, K.HTML);
}
function Xc(e, t) {
	e.openElements.hasInScope(J.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(t, K.HTML);
}
function Zc(e, t) {
	e.openElements.hasInScope(J.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(J.RTC), e._insertElement(t, K.HTML);
}
function Qc(e, t) {
	e._reconstructActiveFormattingElements(), js(t), Ns(t), t.selfClosing ? e._appendElement(t, K.MATHML) : e._insertElement(t, K.MATHML), t.ackSelfClosing = !0;
}
function $c(e, t) {
	e._reconstructActiveFormattingElements(), Ms(t), Ns(t), t.selfClosing ? e._appendElement(t, K.SVG) : e._insertElement(t, K.SVG), t.ackSelfClosing = !0;
}
function el(e, t) {
	e._reconstructActiveFormattingElements(), e._insertElement(t, K.HTML);
}
function $(e, t) {
	switch (t.tagID) {
		case J.I:
		case J.S:
		case J.B:
		case J.U:
		case J.EM:
		case J.TT:
		case J.BIG:
		case J.CODE:
		case J.FONT:
		case J.SMALL:
		case J.STRIKE:
		case J.STRONG:
			Pc(e, t);
			break;
		case J.A:
			Nc(e, t);
			break;
		case J.H1:
		case J.H2:
		case J.H3:
		case J.H4:
		case J.H5:
		case J.H6:
			Dc(e, t);
			break;
		case J.P:
		case J.DL:
		case J.OL:
		case J.UL:
		case J.DIV:
		case J.DIR:
		case J.NAV:
		case J.MAIN:
		case J.MENU:
		case J.ASIDE:
		case J.CENTER:
		case J.FIGURE:
		case J.FOOTER:
		case J.HEADER:
		case J.HGROUP:
		case J.DIALOG:
		case J.DETAILS:
		case J.ADDRESS:
		case J.ARTICLE:
		case J.SEARCH:
		case J.SECTION:
		case J.SUMMARY:
		case J.FIELDSET:
		case J.BLOCKQUOTE:
		case J.FIGCAPTION:
			Ec(e, t);
			break;
		case J.LI:
		case J.DD:
		case J.DT:
			Ac(e, t);
			break;
		case J.BR:
		case J.IMG:
		case J.WBR:
		case J.AREA:
		case J.EMBED:
		case J.KEYGEN:
			Rc(e, t);
			break;
		case J.HR:
			Hc(e, t);
			break;
		case J.RB:
		case J.RTC:
			Xc(e, t);
			break;
		case J.RT:
		case J.RP:
			Zc(e, t);
			break;
		case J.PRE:
		case J.LISTING:
			Oc(e, t);
			break;
		case J.XMP:
			Gc(e, t);
			break;
		case J.SVG:
			$c(e, t);
			break;
		case J.HTML:
			Cc(e, t);
			break;
		case J.BASE:
		case J.LINK:
		case J.META:
		case J.STYLE:
		case J.TITLE:
		case J.SCRIPT:
		case J.BGSOUND:
		case J.BASEFONT:
		case J.TEMPLATE:
			uc(e, t);
			break;
		case J.BODY:
			wc(e, t);
			break;
		case J.FORM:
			kc(e, t);
			break;
		case J.NOBR:
			Fc(e, t);
			break;
		case J.MATH:
			Qc(e, t);
			break;
		case J.TABLE:
			Lc(e, t);
			break;
		case J.INPUT:
			Bc(e, t);
			break;
		case J.PARAM:
		case J.TRACK:
		case J.SOURCE:
			Vc(e, t);
			break;
		case J.IMAGE:
			Uc(e, t);
			break;
		case J.BUTTON:
			Mc(e, t);
			break;
		case J.APPLET:
		case J.OBJECT:
		case J.MARQUEE:
			Ic(e, t);
			break;
		case J.IFRAME:
			Kc(e, t);
			break;
		case J.SELECT:
			Jc(e, t);
			break;
		case J.OPTION:
		case J.OPTGROUP:
			Yc(e, t);
			break;
		case J.NOEMBED:
		case J.NOFRAMES:
			qc(e, t);
			break;
		case J.FRAMESET:
			Tc(e, t);
			break;
		case J.TEXTAREA:
			Wc(e, t);
			break;
		case J.NOSCRIPT:
			e.options.scriptingEnabled ? qc(e, t) : el(e, t);
			break;
		case J.PLAINTEXT:
			jc(e, t);
			break;
		case J.COL:
		case J.TH:
		case J.TD:
		case J.TR:
		case J.HEAD:
		case J.FRAME:
		case J.TBODY:
		case J.TFOOT:
		case J.THEAD:
		case J.CAPTION:
		case J.COLGROUP: break;
		default: el(e, t);
	}
}
function tl(e, t) {
	if (e.openElements.hasInScope(J.BODY) && (e.insertionMode = Q.AFTER_BODY, e.options.sourceCodeLocationInfo)) {
		let n = e.openElements.tryPeekProperlyNestedBodyElement();
		n && e._setEndLocation(n, t);
	}
}
function nl(e, t) {
	e.openElements.hasInScope(J.BODY) && (e.insertionMode = Q.AFTER_BODY, Zl(e, t));
}
function rl(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n));
}
function il(e) {
	let t = e.openElements.tmplCount > 0, { formElement: n } = e;
	t || (e.formElement = null), (n || t) && e.openElements.hasInScope(J.FORM) && (e.openElements.generateImpliedEndTags(), t ? e.openElements.popUntilTagNamePopped(J.FORM) : n && e.openElements.remove(n));
}
function al(e) {
	e.openElements.hasInButtonScope(J.P) || e._insertFakeElement(q.P, J.P), e._closePElement();
}
function ol(e) {
	e.openElements.hasInListItemScope(J.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(J.LI), e.openElements.popUntilTagNamePopped(J.LI));
}
function sl(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.popUntilTagNamePopped(n));
}
function cl(e) {
	e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped());
}
function ll(e, t) {
	let n = t.tagID;
	e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker());
}
function ul(e) {
	e._reconstructActiveFormattingElements(), e._insertFakeElement(q.BR, J.BR), e.openElements.pop(), e.framesetOk = !1;
}
function dl(e, t) {
	let n = t.tagName, r = t.tagID;
	for (let t = e.openElements.stackTop; t > 0; t--) {
		let i = e.openElements.items[t], a = e.openElements.tagIDs[t];
		if (r === a && (r !== J.UNKNOWN || e.treeAdapter.getTagName(i) === n)) {
			e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.stackTop >= t && e.openElements.shortenToLength(t);
			break;
		}
		if (e._isSpecialElement(i, a)) break;
	}
}
function fl(e, t) {
	switch (t.tagID) {
		case J.A:
		case J.B:
		case J.I:
		case J.S:
		case J.U:
		case J.EM:
		case J.TT:
		case J.BIG:
		case J.CODE:
		case J.FONT:
		case J.NOBR:
		case J.SMALL:
		case J.STRIKE:
		case J.STRONG:
			Zs(e, t);
			break;
		case J.P:
			al(e);
			break;
		case J.DL:
		case J.UL:
		case J.OL:
		case J.DIR:
		case J.DIV:
		case J.NAV:
		case J.PRE:
		case J.MAIN:
		case J.MENU:
		case J.ASIDE:
		case J.BUTTON:
		case J.CENTER:
		case J.FIGURE:
		case J.FOOTER:
		case J.HEADER:
		case J.HGROUP:
		case J.DIALOG:
		case J.ADDRESS:
		case J.ARTICLE:
		case J.DETAILS:
		case J.SEARCH:
		case J.SECTION:
		case J.SUMMARY:
		case J.LISTING:
		case J.FIELDSET:
		case J.BLOCKQUOTE:
		case J.FIGCAPTION:
			rl(e, t);
			break;
		case J.LI:
			ol(e);
			break;
		case J.DD:
		case J.DT:
			sl(e, t);
			break;
		case J.H1:
		case J.H2:
		case J.H3:
		case J.H4:
		case J.H5:
		case J.H6:
			cl(e);
			break;
		case J.BR:
			ul(e);
			break;
		case J.BODY:
			tl(e, t);
			break;
		case J.HTML:
			nl(e, t);
			break;
		case J.FORM:
			il(e);
			break;
		case J.APPLET:
		case J.OBJECT:
		case J.MARQUEE:
			ll(e, t);
			break;
		case J.TEMPLATE:
			fc(e, t);
			break;
		default: dl(e, t);
	}
}
function pl(e, t) {
	e.tmplInsertionModeStack.length > 0 ? Yl(e, t) : tc(e, t);
}
function ml(e, t) {
	var n;
	t.tagID === J.SCRIPT && ((n = e.scriptHandler) == null || n.call(e, e.openElements.current)), e.openElements.pop(), e.insertionMode = e.originalInsertionMode;
}
function hl(e, t) {
	e._err(t, H.eofInElementThatCanContainOnlyText), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e.onEof(t);
}
function gl(e, t) {
	if (Hs.has(e.openElements.currentTagId)) switch (e.pendingCharacterTokens.length = 0, e.hasNonWhitespacePendingCharacterToken = !1, e.originalInsertionMode = e.insertionMode, e.insertionMode = Q.IN_TABLE_TEXT, t.type) {
		case U.CHARACTER:
			kl(e, t);
			break;
		case U.WHITESPACE_CHARACTER:
			Ol(e, t);
			break;
	}
	else Dl(e, t);
}
function _l(e, t) {
	e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(t, K.HTML), e.insertionMode = Q.IN_CAPTION;
}
function vl(e, t) {
	e.openElements.clearBackToTableContext(), e._insertElement(t, K.HTML), e.insertionMode = Q.IN_COLUMN_GROUP;
}
function yl(e, t) {
	e.openElements.clearBackToTableContext(), e._insertFakeElement(q.COLGROUP, J.COLGROUP), e.insertionMode = Q.IN_COLUMN_GROUP, Pl(e, t);
}
function bl(e, t) {
	e.openElements.clearBackToTableContext(), e._insertElement(t, K.HTML), e.insertionMode = Q.IN_TABLE_BODY;
}
function xl(e, t) {
	e.openElements.clearBackToTableContext(), e._insertFakeElement(q.TBODY, J.TBODY), e.insertionMode = Q.IN_TABLE_BODY, Ll(e, t);
}
function Sl(e, t) {
	e.openElements.hasInTableScope(J.TABLE) && (e.openElements.popUntilTagNamePopped(J.TABLE), e._resetInsertionMode(), e._processStartTag(t));
}
function Cl(e, t) {
	zc(t) ? e._appendElement(t, K.HTML) : Dl(e, t), t.ackSelfClosing = !0;
}
function wl(e, t) {
	!e.formElement && e.openElements.tmplCount === 0 && (e._insertElement(t, K.HTML), e.formElement = e.openElements.current, e.openElements.pop());
}
function Tl(e, t) {
	switch (t.tagID) {
		case J.TD:
		case J.TH:
		case J.TR:
			xl(e, t);
			break;
		case J.STYLE:
		case J.SCRIPT:
		case J.TEMPLATE:
			uc(e, t);
			break;
		case J.COL:
			yl(e, t);
			break;
		case J.FORM:
			wl(e, t);
			break;
		case J.TABLE:
			Sl(e, t);
			break;
		case J.TBODY:
		case J.TFOOT:
		case J.THEAD:
			bl(e, t);
			break;
		case J.INPUT:
			Cl(e, t);
			break;
		case J.CAPTION:
			_l(e, t);
			break;
		case J.COLGROUP:
			vl(e, t);
			break;
		default: Dl(e, t);
	}
}
function El(e, t) {
	switch (t.tagID) {
		case J.TABLE:
			e.openElements.hasInTableScope(J.TABLE) && (e.openElements.popUntilTagNamePopped(J.TABLE), e._resetInsertionMode());
			break;
		case J.TEMPLATE:
			fc(e, t);
			break;
		case J.BODY:
		case J.CAPTION:
		case J.COL:
		case J.COLGROUP:
		case J.HTML:
		case J.TBODY:
		case J.TD:
		case J.TFOOT:
		case J.TH:
		case J.THEAD:
		case J.TR: break;
		default: Dl(e, t);
	}
}
function Dl(e, t) {
	let n = e.fosterParentingEnabled;
	e.fosterParentingEnabled = !0, bc(e, t), e.fosterParentingEnabled = n;
}
function Ol(e, t) {
	e.pendingCharacterTokens.push(t);
}
function kl(e, t) {
	e.pendingCharacterTokens.push(t), e.hasNonWhitespacePendingCharacterToken = !0;
}
function Al(e, t) {
	let n = 0;
	if (e.hasNonWhitespacePendingCharacterToken) for (; n < e.pendingCharacterTokens.length; n++) Dl(e, e.pendingCharacterTokens[n]);
	else for (; n < e.pendingCharacterTokens.length; n++) e._insertCharacters(e.pendingCharacterTokens[n]);
	e.insertionMode = e.originalInsertionMode, e._processToken(t);
}
var jl = new Set([
	J.CAPTION,
	J.COL,
	J.COLGROUP,
	J.TBODY,
	J.TD,
	J.TFOOT,
	J.TH,
	J.THEAD,
	J.TR
]);
function Ml(e, t) {
	let n = t.tagID;
	jl.has(n) ? e.openElements.hasInTableScope(J.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(J.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = Q.IN_TABLE, Tl(e, t)) : $(e, t);
}
function Nl(e, t) {
	let n = t.tagID;
	switch (n) {
		case J.CAPTION:
		case J.TABLE:
			e.openElements.hasInTableScope(J.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(J.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = Q.IN_TABLE, n === J.TABLE && El(e, t));
			break;
		case J.BODY:
		case J.COL:
		case J.COLGROUP:
		case J.HTML:
		case J.TBODY:
		case J.TD:
		case J.TFOOT:
		case J.TH:
		case J.THEAD:
		case J.TR: break;
		default: fl(e, t);
	}
}
function Pl(e, t) {
	switch (t.tagID) {
		case J.HTML:
			$(e, t);
			break;
		case J.COL:
			e._appendElement(t, K.HTML), t.ackSelfClosing = !0;
			break;
		case J.TEMPLATE:
			uc(e, t);
			break;
		default: Il(e, t);
	}
}
function Fl(e, t) {
	switch (t.tagID) {
		case J.COLGROUP:
			e.openElements.currentTagId === J.COLGROUP && (e.openElements.pop(), e.insertionMode = Q.IN_TABLE);
			break;
		case J.TEMPLATE:
			fc(e, t);
			break;
		case J.COL: break;
		default: Il(e, t);
	}
}
function Il(e, t) {
	e.openElements.currentTagId === J.COLGROUP && (e.openElements.pop(), e.insertionMode = Q.IN_TABLE, e._processToken(t));
}
function Ll(e, t) {
	switch (t.tagID) {
		case J.TR:
			e.openElements.clearBackToTableBodyContext(), e._insertElement(t, K.HTML), e.insertionMode = Q.IN_ROW;
			break;
		case J.TH:
		case J.TD:
			e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(q.TR, J.TR), e.insertionMode = Q.IN_ROW, zl(e, t);
			break;
		case J.CAPTION:
		case J.COL:
		case J.COLGROUP:
		case J.TBODY:
		case J.TFOOT:
		case J.THEAD:
			e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE, Tl(e, t));
			break;
		default: Tl(e, t);
	}
}
function Rl(e, t) {
	let n = t.tagID;
	switch (t.tagID) {
		case J.TBODY:
		case J.TFOOT:
		case J.THEAD:
			e.openElements.hasInTableScope(n) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE);
			break;
		case J.TABLE:
			e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE, El(e, t));
			break;
		case J.BODY:
		case J.CAPTION:
		case J.COL:
		case J.COLGROUP:
		case J.HTML:
		case J.TD:
		case J.TH:
		case J.TR: break;
		default: El(e, t);
	}
}
function zl(e, t) {
	switch (t.tagID) {
		case J.TH:
		case J.TD:
			e.openElements.clearBackToTableRowContext(), e._insertElement(t, K.HTML), e.insertionMode = Q.IN_CELL, e.activeFormattingElements.insertMarker();
			break;
		case J.CAPTION:
		case J.COL:
		case J.COLGROUP:
		case J.TBODY:
		case J.TFOOT:
		case J.THEAD:
		case J.TR:
			e.openElements.hasInTableScope(J.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE_BODY, Ll(e, t));
			break;
		default: Tl(e, t);
	}
}
function Bl(e, t) {
	switch (t.tagID) {
		case J.TR:
			e.openElements.hasInTableScope(J.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE_BODY);
			break;
		case J.TABLE:
			e.openElements.hasInTableScope(J.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE_BODY, Rl(e, t));
			break;
		case J.TBODY:
		case J.TFOOT:
		case J.THEAD:
			(e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(J.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = Q.IN_TABLE_BODY, Rl(e, t));
			break;
		case J.BODY:
		case J.CAPTION:
		case J.COL:
		case J.COLGROUP:
		case J.HTML:
		case J.TD:
		case J.TH: break;
		default: El(e, t);
	}
}
function Vl(e, t) {
	let n = t.tagID;
	jl.has(n) ? (e.openElements.hasInTableScope(J.TD) || e.openElements.hasInTableScope(J.TH)) && (e._closeTableCell(), zl(e, t)) : $(e, t);
}
function Hl(e, t) {
	let n = t.tagID;
	switch (n) {
		case J.TD:
		case J.TH:
			e.openElements.hasInTableScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = Q.IN_ROW);
			break;
		case J.TABLE:
		case J.TBODY:
		case J.TFOOT:
		case J.THEAD:
		case J.TR:
			e.openElements.hasInTableScope(n) && (e._closeTableCell(), Bl(e, t));
			break;
		case J.BODY:
		case J.CAPTION:
		case J.COL:
		case J.COLGROUP:
		case J.HTML: break;
		default: fl(e, t);
	}
}
function Ul(e, t) {
	switch (t.tagID) {
		case J.HTML:
			$(e, t);
			break;
		case J.OPTION:
			e.openElements.currentTagId === J.OPTION && e.openElements.pop(), e._insertElement(t, K.HTML);
			break;
		case J.OPTGROUP:
			e.openElements.currentTagId === J.OPTION && e.openElements.pop(), e.openElements.currentTagId === J.OPTGROUP && e.openElements.pop(), e._insertElement(t, K.HTML);
			break;
		case J.HR:
			e.openElements.currentTagId === J.OPTION && e.openElements.pop(), e.openElements.currentTagId === J.OPTGROUP && e.openElements.pop(), e._appendElement(t, K.HTML), t.ackSelfClosing = !0;
			break;
		case J.INPUT:
		case J.KEYGEN:
		case J.TEXTAREA:
		case J.SELECT:
			e.openElements.hasInSelectScope(J.SELECT) && (e.openElements.popUntilTagNamePopped(J.SELECT), e._resetInsertionMode(), t.tagID !== J.SELECT && e._processStartTag(t));
			break;
		case J.SCRIPT:
		case J.TEMPLATE:
			uc(e, t);
			break;
		default:
	}
}
function Wl(e, t) {
	switch (t.tagID) {
		case J.OPTGROUP:
			e.openElements.stackTop > 0 && e.openElements.currentTagId === J.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === J.OPTGROUP && e.openElements.pop(), e.openElements.currentTagId === J.OPTGROUP && e.openElements.pop();
			break;
		case J.OPTION:
			e.openElements.currentTagId === J.OPTION && e.openElements.pop();
			break;
		case J.SELECT:
			e.openElements.hasInSelectScope(J.SELECT) && (e.openElements.popUntilTagNamePopped(J.SELECT), e._resetInsertionMode());
			break;
		case J.TEMPLATE:
			fc(e, t);
			break;
		default:
	}
}
function Gl(e, t) {
	let n = t.tagID;
	n === J.CAPTION || n === J.TABLE || n === J.TBODY || n === J.TFOOT || n === J.THEAD || n === J.TR || n === J.TD || n === J.TH ? (e.openElements.popUntilTagNamePopped(J.SELECT), e._resetInsertionMode(), e._processStartTag(t)) : Ul(e, t);
}
function Kl(e, t) {
	let n = t.tagID;
	n === J.CAPTION || n === J.TABLE || n === J.TBODY || n === J.TFOOT || n === J.THEAD || n === J.TR || n === J.TD || n === J.TH ? e.openElements.hasInTableScope(n) && (e.openElements.popUntilTagNamePopped(J.SELECT), e._resetInsertionMode(), e.onEndTag(t)) : Wl(e, t);
}
function ql(e, t) {
	switch (t.tagID) {
		case J.BASE:
		case J.BASEFONT:
		case J.BGSOUND:
		case J.LINK:
		case J.META:
		case J.NOFRAMES:
		case J.SCRIPT:
		case J.STYLE:
		case J.TEMPLATE:
		case J.TITLE:
			uc(e, t);
			break;
		case J.CAPTION:
		case J.COLGROUP:
		case J.TBODY:
		case J.TFOOT:
		case J.THEAD:
			e.tmplInsertionModeStack[0] = Q.IN_TABLE, e.insertionMode = Q.IN_TABLE, Tl(e, t);
			break;
		case J.COL:
			e.tmplInsertionModeStack[0] = Q.IN_COLUMN_GROUP, e.insertionMode = Q.IN_COLUMN_GROUP, Pl(e, t);
			break;
		case J.TR:
			e.tmplInsertionModeStack[0] = Q.IN_TABLE_BODY, e.insertionMode = Q.IN_TABLE_BODY, Ll(e, t);
			break;
		case J.TD:
		case J.TH:
			e.tmplInsertionModeStack[0] = Q.IN_ROW, e.insertionMode = Q.IN_ROW, zl(e, t);
			break;
		default: e.tmplInsertionModeStack[0] = Q.IN_BODY, e.insertionMode = Q.IN_BODY, $(e, t);
	}
}
function Jl(e, t) {
	t.tagID === J.TEMPLATE && fc(e, t);
}
function Yl(e, t) {
	e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(J.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode(), e.onEof(t)) : tc(e, t);
}
function Xl(e, t) {
	t.tagID === J.HTML ? $(e, t) : Ql(e, t);
}
function Zl(e, t) {
	if (t.tagID === J.HTML) {
		if (e.fragmentContext || (e.insertionMode = Q.AFTER_AFTER_BODY), e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === J.HTML) {
			e._setEndLocation(e.openElements.items[0], t);
			let n = e.openElements.items[1];
			n && !e.treeAdapter.getNodeSourceCodeLocation(n)?.endTag && e._setEndLocation(n, t);
		}
	} else Ql(e, t);
}
function Ql(e, t) {
	e.insertionMode = Q.IN_BODY, bc(e, t);
}
function $l(e, t) {
	switch (t.tagID) {
		case J.HTML:
			$(e, t);
			break;
		case J.FRAMESET:
			e._insertElement(t, K.HTML);
			break;
		case J.FRAME:
			e._appendElement(t, K.HTML), t.ackSelfClosing = !0;
			break;
		case J.NOFRAMES:
			uc(e, t);
			break;
		default:
	}
}
function eu(e, t) {
	t.tagID === J.FRAMESET && !e.openElements.isRootHtmlElementCurrent() && (e.openElements.pop(), !e.fragmentContext && e.openElements.currentTagId !== J.FRAMESET && (e.insertionMode = Q.AFTER_FRAMESET));
}
function tu(e, t) {
	switch (t.tagID) {
		case J.HTML:
			$(e, t);
			break;
		case J.NOFRAMES:
			uc(e, t);
			break;
		default:
	}
}
function nu(e, t) {
	t.tagID === J.HTML && (e.insertionMode = Q.AFTER_AFTER_FRAMESET);
}
function ru(e, t) {
	t.tagID === J.HTML ? $(e, t) : iu(e, t);
}
function iu(e, t) {
	e.insertionMode = Q.IN_BODY, bc(e, t);
}
function au(e, t) {
	switch (t.tagID) {
		case J.HTML:
			$(e, t);
			break;
		case J.NOFRAMES:
			uc(e, t);
			break;
		default:
	}
}
function ou(e, t) {
	t.chars = "�", e._insertCharacters(t);
}
function su(e, t) {
	e._insertCharacters(t), e.framesetOk = !1;
}
function cu(e) {
	for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== K.HTML && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current);) e.openElements.pop();
}
function lu(e, t) {
	if (As(t)) cu(e), e._startTagOutsideForeignContent(t);
	else {
		let n = e._getAdjustedCurrentElement(), r = e.treeAdapter.getNamespaceURI(n);
		r === K.MATHML ? js(t) : r === K.SVG && (Ps(t), Ms(t)), Ns(t), t.selfClosing ? e._appendElement(t, r) : e._insertElement(t, r), t.ackSelfClosing = !0;
	}
}
function uu(e, t) {
	if (t.tagID === J.P || t.tagID === J.BR) {
		cu(e), e._endTagOutsideForeignContent(t);
		return;
	}
	for (let n = e.openElements.stackTop; n > 0; n--) {
		let r = e.openElements.items[n];
		if (e.treeAdapter.getNamespaceURI(r) === K.HTML) {
			e._endTagOutsideForeignContent(t);
			break;
		}
		let i = e.treeAdapter.getTagName(r);
		if (i.toLowerCase() === t.tagName) {
			t.tagName = i, e.openElements.shortenToLength(n);
			break;
		}
	}
}
new Set([
	q.AREA,
	q.BASE,
	q.BASEFONT,
	q.BGSOUND,
	q.BR,
	q.COL,
	q.EMBED,
	q.FRAME,
	q.HR,
	q.IMG,
	q.INPUT,
	q.KEYGEN,
	q.LINK,
	q.META,
	q.PARAM,
	q.SOURCE,
	q.TRACK,
	q.WBR
]);
//#endregion
//#region ../../node_modules/.pnpm/hast-util-raw@9.1.0/node_modules/hast-util-raw/lib/index.js
var du = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi, fu = new Set([
	"mdxFlowExpression",
	"mdxJsxFlowElement",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"mdxjsEsm"
]), pu = {
	sourceCodeLocationInfo: !0,
	scriptingEnabled: !1
};
function mu(e, t) {
	let n = Ou(e), r = S("type", {
		handlers: {
			root: gu,
			element: _u,
			text: vu,
			comment: xu,
			doctype: yu,
			raw: Su
		},
		unknown: Cu
	}), i = {
		parser: n ? new Ws(pu) : Ws.getFragmentParser(void 0, pu),
		handle(e) {
			r(e, i);
		},
		stitches: !1,
		options: t || {}
	};
	r(e, i), wu(i, c());
	let a = Va(n ? i.parser.document : i.parser.getFragment(), { file: i.options.file });
	return i.stitches && x(a, "comment", function(e, t, n) {
		let r = e;
		if (r.value.stitch && n && t !== void 0) {
			let e = n.children;
			return e[t] = r.value.stitch, t;
		}
	}), a.type === "root" && a.children.length === 1 && a.children[0].type === e.type ? a.children[0] : a;
}
function hu(e, t) {
	let n = -1;
	/* istanbul ignore else - invalid nodes, see rehypejs/rehype-raw#7. */
	if (e) for (; ++n < e.length;) t.handle(e[n]);
}
function gu(e, t) {
	hu(e.children, t);
}
function _u(e, t) {
	Eu(e, t), hu(e.children, t), Du(e, t);
}
function vu(e, t) {
	t.parser.tokenizer.state > 4 && (t.parser.tokenizer.state = 0);
	let n = {
		type: U.CHARACTER,
		chars: e.value,
		location: ku(e)
	};
	wu(t, c(e)), t.parser.currentToken = n, t.parser._processToken(t.parser.currentToken);
}
function yu(e, t) {
	let n = {
		type: U.DOCTYPE,
		name: "html",
		forceQuirks: !1,
		publicId: "",
		systemId: "",
		location: ku(e)
	};
	wu(t, c(e)), t.parser.currentToken = n, t.parser._processToken(t.parser.currentToken);
}
function bu(e, t) {
	t.stitches = !0;
	let n = Au(e);
	"children" in e && "children" in n && (n.children = mu({
		type: "root",
		children: e.children
	}, t.options).children), xu({
		type: "comment",
		value: { stitch: n }
	}, t);
}
function xu(e, t) {
	let n = e.value, r = {
		type: U.COMMENT,
		data: n,
		location: ku(e)
	};
	wu(t, c(e)), t.parser.currentToken = r, t.parser._processToken(t.parser.currentToken);
}
function Su(e, t) {
	/* c8 ignore next 12 -- removed in <https://github.com/inikulin/parse5/pull/897> */
	if (t.parser.tokenizer.preprocessor.html = "", t.parser.tokenizer.preprocessor.pos = -1, t.parser.tokenizer.preprocessor.lastGapPos = -2, t.parser.tokenizer.preprocessor.gapStack = [], t.parser.tokenizer.preprocessor.skipNextNewLine = !1, t.parser.tokenizer.preprocessor.lastChunkWritten = !1, t.parser.tokenizer.preprocessor.endOfChunkHit = !1, t.parser.tokenizer.preprocessor.isEol = !1, Tu(t, c(e)), t.parser.tokenizer.write(t.options.tagfilter ? e.value.replace(du, "&lt;$1$2") : e.value, !1), t.parser.tokenizer._runParsingLoop(), t.parser.tokenizer.state === 72 || t.parser.tokenizer.state === 78) {
		t.parser.tokenizer.preprocessor.lastChunkWritten = !0;
		let e = t.parser.tokenizer._consume();
		t.parser.tokenizer._callState(e);
	}
}
function Cu(e, t) {
	let n = e;
	if (t.options.passThrough && t.options.passThrough.includes(n.type)) bu(n, t);
	else {
		let e = "";
		throw fu.has(n.type) && (e = ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"), Error("Cannot compile `" + n.type + "` node" + e);
	}
}
function wu(e, t) {
	Tu(e, t);
	let n = e.parser.tokenizer.currentCharacterToken;
	n && n.location && (n.location.endLine = e.parser.tokenizer.preprocessor.line, n.location.endCol = e.parser.tokenizer.preprocessor.col + 1, n.location.endOffset = e.parser.tokenizer.preprocessor.offset + 1, e.parser.currentToken = n, e.parser._processToken(e.parser.currentToken)), e.parser.tokenizer.paused = !1, e.parser.tokenizer.inLoop = !1, e.parser.tokenizer.active = !1, e.parser.tokenizer.returnState = Z.DATA, e.parser.tokenizer.charRefCode = -1, e.parser.tokenizer.consumedAfterSnapshot = -1, e.parser.tokenizer.currentLocation = null, e.parser.tokenizer.currentCharacterToken = null, e.parser.tokenizer.currentToken = null, e.parser.tokenizer.currentAttr = {
		name: "",
		value: ""
	};
}
function Tu(e, t) {
	if (t && t.offset !== void 0) {
		let n = {
			startLine: t.line,
			startCol: t.column,
			startOffset: t.offset,
			endLine: -1,
			endCol: -1,
			endOffset: -1
		};
		e.parser.tokenizer.preprocessor.lineStartPos = -t.column + 1, e.parser.tokenizer.preprocessor.droppedBufferSize = t.offset, e.parser.tokenizer.preprocessor.line = t.line, e.parser.tokenizer.currentLocation = n;
	}
}
function Eu(e, t) {
	let n = e.tagName.toLowerCase();
	if (t.parser.tokenizer.state === Z.PLAINTEXT) return;
	wu(t, c(e));
	let r = t.parser.openElements.current, i = "namespaceURI" in r ? r.namespaceURI : Ra.html;
	i === Ra.html && n === "svg" && (i = Ra.svg);
	let a = Qa({
		...e,
		children: []
	}, { space: i === Ra.svg ? "svg" : "html" }), o = {
		type: U.START_TAG,
		tagName: n,
		tagID: Io(n),
		selfClosing: !1,
		ackSelfClosing: !1,
		/* c8 ignore next */
		attrs: "attrs" in a ? a.attrs : [],
		location: ku(e)
	};
	t.parser.currentToken = o, t.parser._processToken(t.parser.currentToken), t.parser.tokenizer.lastStartTagName = n;
}
function Du(e, t) {
	let n = e.tagName.toLowerCase();
	if (!t.parser.tokenizer.inForeignNode && re.includes(n) || t.parser.tokenizer.state === Z.PLAINTEXT) return;
	wu(t, p(e));
	let r = {
		type: U.END_TAG,
		tagName: n,
		tagID: Io(n),
		selfClosing: !1,
		ackSelfClosing: !1,
		attrs: [],
		location: ku(e)
	};
	t.parser.currentToken = r, t.parser._processToken(t.parser.currentToken), n === t.parser.tokenizer.lastStartTagName && (t.parser.tokenizer.state === Z.RCDATA || t.parser.tokenizer.state === Z.RAWTEXT || t.parser.tokenizer.state === Z.SCRIPT_DATA) && (t.parser.tokenizer.state = Z.DATA);
}
function Ou(e) {
	let t = e.type === "root" ? e.children[0] : e;
	return !!(t && (t.type === "doctype" || t.type === "element" && t.tagName.toLowerCase() === "html"));
}
function ku(e) {
	let t = c(e) || {
		line: void 0,
		column: void 0,
		offset: void 0
	}, n = p(e) || {
		line: void 0,
		column: void 0,
		offset: void 0
	};
	return {
		startLine: t.line,
		startCol: t.column,
		startOffset: t.offset,
		endLine: n.line,
		endCol: n.column,
		endOffset: n.offset
	};
}
function Au(e) {
	return "children" in e ? Vr({
		...e,
		children: []
	}) : Vr(e);
}
//#endregion
//#region ../../node_modules/.pnpm/rehype-raw@7.0.0/node_modules/rehype-raw/lib/index.js
function ju(e) {
	return function(t, n) {
		return mu(t, {
			...e,
			file: n
		});
	};
}
//#endregion
//#region ../../node_modules/.pnpm/escape-string-regexp@5.0.0/node_modules/escape-string-regexp/index.js
function Mu(e) {
	if (typeof e != "string") throw TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-find-and-replace@3.0.2/node_modules/mdast-util-find-and-replace/lib/index.js
function Nu(e, t, n) {
	let r = w((n || {}).ignore || []), i = Pu(t), a = -1;
	for (; ++a < i.length;) ne(e, "text", o);
	function o(e, t) {
		let n = -1, i;
		for (; ++n < t.length;) {
			let e = t[n], a = i ? i.children : void 0;
			if (r(e, a ? a.indexOf(e) : void 0, i)) return;
			i = e;
		}
		if (i) return s(e, t);
	}
	function s(e, t) {
		let n = t[t.length - 1], r = i[a][0], o = i[a][1], s = 0, c = n.children.indexOf(e), l = !1, u = [];
		r.lastIndex = 0;
		let d = r.exec(e.value);
		for (; d;) {
			let n = d.index, i = {
				index: d.index,
				input: d.input,
				stack: [...t, e]
			}, a = o(...d, i);
			if (typeof a == "string" && (a = a.length > 0 ? {
				type: "text",
				value: a
			} : void 0), a === !1 ? r.lastIndex = n + 1 : (s !== n && u.push({
				type: "text",
				value: e.value.slice(s, n)
			}), Array.isArray(a) ? u.push(...a) : a && u.push(a), s = n + d[0].length, l = !0), !r.global) break;
			d = r.exec(e.value);
		}
		return l ? (s < e.value.length && u.push({
			type: "text",
			value: e.value.slice(s)
		}), n.children.splice(c, 1, ...u)) : u = [e], c + u.length;
	}
}
function Pu(e) {
	let t = [];
	if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
	let n = !e[0] || Array.isArray(e[0]) ? e : [e], r = -1;
	for (; ++r < n.length;) {
		let e = n[r];
		t.push([Fu(e[0]), Iu(e[1])]);
	}
	return t;
}
function Fu(e) {
	return typeof e == "string" ? new RegExp(Mu(e), "g") : e;
}
function Iu(e) {
	return typeof e == "function" ? e : function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-gfm-autolink-literal@2.0.1/node_modules/mdast-util-gfm-autolink-literal/lib/index.js
var Lu = "phrasing", Ru = [
	"autolink",
	"link",
	"image",
	"label"
];
function zu() {
	return {
		transforms: [qu],
		enter: {
			literalAutolink: Vu,
			literalAutolinkEmail: Hu,
			literalAutolinkHttp: Hu,
			literalAutolinkWww: Hu
		},
		exit: {
			literalAutolink: Ku,
			literalAutolinkEmail: Gu,
			literalAutolinkHttp: Uu,
			literalAutolinkWww: Wu
		}
	};
}
function Bu() {
	return { unsafe: [
		{
			character: "@",
			before: "[+\\-.\\w]",
			after: "[\\-.\\w]",
			inConstruct: Lu,
			notInConstruct: Ru
		},
		{
			character: ".",
			before: "[Ww]",
			after: "[\\-.\\w]",
			inConstruct: Lu,
			notInConstruct: Ru
		},
		{
			character: ":",
			before: "[ps]",
			after: "\\/",
			inConstruct: Lu,
			notInConstruct: Ru
		}
	] };
}
function Vu(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function Hu(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function Uu(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function Wu(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function Gu(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function Ku(e) {
	this.exit(e);
}
function qu(e) {
	Nu(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, Ju], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, Yu]], { ignore: ["link", "linkReference"] });
}
function Ju(e, t, n, r, i) {
	let a = "";
	if (!Qu(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !Xu(n))) return !1;
	let o = Zu(n + r);
	if (!o[0]) return !1;
	let s = {
		type: "link",
		title: null,
		url: a + t + o[0],
		children: [{
			type: "text",
			value: t + o[0]
		}]
	};
	return o[1] ? [s, {
		type: "text",
		value: o[1]
	}] : s;
}
function Yu(e, t, n, r) {
	return !Qu(r, !0) || /[-\d_]$/.test(n) ? !1 : {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	};
}
function Xu(e) {
	let t = e.split(".");
	return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function Zu(e) {
	let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
	if (!t) return [e, void 0];
	e = e.slice(0, t.index);
	let n = t[0], r = n.indexOf(")"), i = te(e, "("), a = te(e, ")");
	for (; r !== -1 && i > a;) e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
	return [e, n];
}
function Qu(e, t) {
	let n = e.input.charCodeAt(e.index - 1);
	return (e.index === 0 || we(n) || Ce(n)) && (!t || n !== 47);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-gfm-footnote@2.1.0/node_modules/mdast-util-gfm-footnote/lib/index.js
cd.peek = sd;
function $u() {
	this.buffer();
}
function ed(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function td() {
	this.buffer();
}
function nd(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function rd(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = _e(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function id(e) {
	this.exit(e);
}
function ad(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = _e(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function od(e) {
	this.exit(e);
}
function sd() {
	return "[";
}
function cd(e, t, n, r) {
	let i = n.createTracker(r), a = i.move("[^"), o = n.enter("footnoteReference"), s = n.enter("reference");
	return a += i.move(n.safe(n.associationId(e), {
		after: "]",
		before: a
	})), s(), o(), a += i.move("]"), a;
}
function ld() {
	return {
		enter: {
			gfmFootnoteCallString: $u,
			gfmFootnoteCall: ed,
			gfmFootnoteDefinitionLabelString: td,
			gfmFootnoteDefinition: nd
		},
		exit: {
			gfmFootnoteCallString: rd,
			gfmFootnoteCall: id,
			gfmFootnoteDefinitionLabelString: ad,
			gfmFootnoteDefinition: od
		}
	};
}
function ud(e) {
	let t = !1;
	return e && e.firstLineBlank && (t = !0), {
		handlers: {
			footnoteDefinition: n,
			footnoteReference: cd
		},
		unsafe: [{
			character: "[",
			inConstruct: [
				"label",
				"phrasing",
				"reference"
			]
		}]
	};
	function n(e, n, r, i) {
		let a = r.createTracker(i), o = a.move("[^"), s = r.enter("footnoteDefinition"), c = r.enter("label");
		return o += a.move(r.safe(r.associationId(e), {
			before: o,
			after: "]"
		})), c(), o += a.move("]:"), e.children && e.children.length > 0 && (a.shift(4), o += a.move((t ? "\n" : " ") + r.indentLines(r.containerFlow(e, a.current()), t ? fd : dd))), s(), o;
	}
}
function dd(e, t, n) {
	return t === 0 ? e : fd(e, t, n);
}
function fd(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-gfm-strikethrough@2.0.0/node_modules/mdast-util-gfm-strikethrough/lib/index.js
var pd = [
	"autolink",
	"destinationLiteral",
	"destinationRaw",
	"reference",
	"titleQuote",
	"titleApostrophe"
];
vd.peek = yd;
function md() {
	return {
		canContainEols: ["delete"],
		enter: { strikethrough: gd },
		exit: { strikethrough: _d }
	};
}
function hd() {
	return {
		unsafe: [{
			character: "~",
			inConstruct: "phrasing",
			notInConstruct: pd
		}],
		handlers: { delete: vd }
	};
}
function gd(e) {
	this.enter({
		type: "delete",
		children: []
	}, e);
}
function _d(e) {
	this.exit(e);
}
function vd(e, t, n, r) {
	let i = n.createTracker(r), a = n.enter("strikethrough"), o = i.move("~~");
	return o += n.containerPhrasing(e, {
		...i.current(),
		before: o,
		after: "~"
	}), o += i.move("~~"), a(), o;
}
function yd() {
	return "~";
}
//#endregion
//#region ../../node_modules/.pnpm/markdown-table@3.0.4/node_modules/markdown-table/index.js
function bd(e) {
	return e.length;
}
function xd(e, t) {
	let n = t || {}, r = (n.align || []).concat(), i = n.stringLength || bd, a = [], o = [], s = [], c = [], l = 0, u = -1;
	for (; ++u < e.length;) {
		let t = [], r = [], a = -1;
		for (e[u].length > l && (l = e[u].length); ++a < e[u].length;) {
			let o = Sd(e[u][a]);
			if (n.alignDelimiters !== !1) {
				let e = i(o);
				r[a] = e, (c[a] === void 0 || e > c[a]) && (c[a] = e);
			}
			t.push(o);
		}
		o[u] = t, s[u] = r;
	}
	let d = -1;
	if (typeof r == "object" && "length" in r) for (; ++d < l;) a[d] = Cd(r[d]);
	else {
		let e = Cd(r);
		for (; ++d < l;) a[d] = e;
	}
	d = -1;
	let f = [], p = [];
	for (; ++d < l;) {
		let e = a[d], t = "", r = "";
		e === 99 ? (t = ":", r = ":") : e === 108 ? t = ":" : e === 114 && (r = ":");
		let i = n.alignDelimiters === !1 ? 1 : Math.max(1, c[d] - t.length - r.length), o = t + "-".repeat(i) + r;
		n.alignDelimiters !== !1 && (i = t.length + i + r.length, i > c[d] && (c[d] = i), p[d] = i), f[d] = o;
	}
	o.splice(1, 0, f), s.splice(1, 0, p), u = -1;
	let m = [];
	for (; ++u < o.length;) {
		let e = o[u], t = s[u];
		d = -1;
		let r = [];
		for (; ++d < l;) {
			let i = e[d] || "", o = "", s = "";
			if (n.alignDelimiters !== !1) {
				let e = c[d] - (t[d] || 0), n = a[d];
				n === 114 ? o = " ".repeat(e) : n === 99 ? e % 2 ? (o = " ".repeat(e / 2 + .5), s = " ".repeat(e / 2 - .5)) : (o = " ".repeat(e / 2), s = o) : s = " ".repeat(e);
			}
			n.delimiterStart !== !1 && !d && r.push("|"), n.padding !== !1 && !(n.alignDelimiters === !1 && i === "") && (n.delimiterStart !== !1 || d) && r.push(" "), n.alignDelimiters !== !1 && r.push(o), r.push(i), n.alignDelimiters !== !1 && r.push(s), n.padding !== !1 && r.push(" "), (n.delimiterEnd !== !1 || d !== l - 1) && r.push("|");
		}
		m.push(n.delimiterEnd === !1 ? r.join("").replace(/ +$/, "") : r.join(""));
	}
	return m.join("\n");
}
function Sd(e) {
	return e == null ? "" : String(e);
}
function Cd(e) {
	let t = typeof e == "string" ? e.codePointAt(0) : 0;
	return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
function wd(e, t, n, r) {
	let i = n.enter("blockquote"), a = n.createTracker(r);
	a.move("> "), a.shift(2);
	let o = n.indentLines(n.containerFlow(e, a.current()), Td);
	return i(), o;
}
function Td(e, t, n) {
	return ">" + (n ? "" : " ") + e;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function Ed(e, t) {
	return Dd(e, t.inConstruct, !0) && !Dd(e, t.notInConstruct, !1);
}
function Dd(e, t, n) {
	if (typeof t == "string" && (t = [t]), !t || t.length === 0) return n;
	let r = -1;
	for (; ++r < t.length;) if (e.includes(t[r])) return !0;
	return !1;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/break.js
function Od(e, t, n, r) {
	let i = -1;
	for (; ++i < n.unsafe.length;) if (n.unsafe[i].character === "\n" && Ed(n.stack, n.unsafe[i])) return /[ \t]/.test(r.before) ? "" : " ";
	return "\\\n";
}
//#endregion
//#region ../../node_modules/.pnpm/longest-streak@3.1.0/node_modules/longest-streak/index.js
function kd(e, t) {
	let n = String(e), r = n.indexOf(t), i = r, a = 0, o = 0;
	if (typeof t != "string") throw TypeError("Expected substring");
	for (; r !== -1;) r === i ? ++a > o && (o = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
	return o;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
function Ad(e, t) {
	return !!(t.options.fences === !1 && e.value && !e.lang && /[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-fence.js
function jd(e) {
	let t = e.options.fence || "`";
	if (t !== "`" && t !== "~") throw Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/code.js
function Md(e, t, n, r) {
	let i = jd(n), a = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
	if (Ad(e, n)) {
		let e = n.enter("codeIndented"), t = n.indentLines(a, Nd);
		return e(), t;
	}
	let s = n.createTracker(r), c = i.repeat(Math.max(kd(a, i) + 1, 3)), l = n.enter("codeFenced"), u = s.move(c);
	if (e.lang) {
		let t = n.enter(`codeFencedLang${o}`);
		u += s.move(n.safe(e.lang, {
			before: u,
			after: " ",
			encode: ["`"],
			...s.current()
		})), t();
	}
	if (e.lang && e.meta) {
		let t = n.enter(`codeFencedMeta${o}`);
		u += s.move(" "), u += s.move(n.safe(e.meta, {
			before: u,
			after: "\n",
			encode: ["`"],
			...s.current()
		})), t();
	}
	return u += s.move("\n"), a && (u += s.move(a + "\n")), u += s.move(c), l(), u;
}
function Nd(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-quote.js
function Pd(e) {
	let t = e.options.quote || "\"";
	if (t !== "\"" && t !== "'") throw Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/definition.js
function Fd(e, t, n, r) {
	let i = Pd(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("definition"), s = n.enter("label"), c = n.createTracker(r), l = c.move("[");
	return l += c.move(n.safe(n.associationId(e), {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]: "), s(), !e.url || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : "\n",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), o(), l;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
function Id(e) {
	let t = e.options.emphasis || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js
function Ld(e) {
	return "&#x" + e.toString(16).toUpperCase() + ";";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/encode-info.js
function Rd(e, t, n) {
	let r = Ne(e), i = Ne(t);
	return r === void 0 ? i === void 0 ? n === "_" ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !0
	} : r === 1 ? i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !1
	} : {
		inside: !1,
		outside: !1
	};
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/emphasis.js
zd.peek = Bd;
function zd(e, t, n, r) {
	let i = Id(n), a = n.enter("emphasis"), o = n.createTracker(r), s = o.move(i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = Rd(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = Ld(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = Rd(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + Ld(d));
	let p = o.move(i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function Bd(e, t, n) {
	return n.options.emphasis || "*";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
function Vd(e, t) {
	let n = !1;
	return x(e, function(e) {
		if ("value" in e && /\r?\n|\r/.test(e.value) || e.type === "break") return n = !0, !1;
	}), !!((!e.depth || e.depth < 3) && se(e) && (t.options.setext || n));
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/heading.js
function Hd(e, t, n, r) {
	let i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
	if (Vd(e, n)) {
		let t = n.enter("headingSetext"), r = n.enter("phrasing"), o = n.containerPhrasing(e, {
			...a.current(),
			before: "\n",
			after: "\n"
		});
		return r(), t(), o + "\n" + (i === 1 ? "=" : "-").repeat(o.length - (Math.max(o.lastIndexOf("\r"), o.lastIndexOf("\n")) + 1));
	}
	let o = "#".repeat(i), s = n.enter("headingAtx"), c = n.enter("phrasing");
	a.move(o + " ");
	let l = n.containerPhrasing(e, {
		before: "# ",
		after: "\n",
		...a.current()
	});
	return /^[\t ]/.test(l) && (l = Ld(l.charCodeAt(0)) + l.slice(1)), l = l ? o + " " + l : o, n.options.closeAtx && (l += " " + o), c(), s(), l;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/html.js
Ud.peek = Wd;
function Ud(e) {
	return e.value || "";
}
function Wd() {
	return "<";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/image.js
Gd.peek = Kd;
function Gd(e, t, n, r) {
	let i = Pd(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("image"), s = n.enter("label"), c = n.createTracker(r), l = c.move("![");
	return l += c.move(n.safe(e.alt, {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]("), s(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), l += c.move(")"), o(), l;
}
function Kd() {
	return "!";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
qd.peek = Jd;
function qd(e, t, n, r) {
	let i = e.referenceType, a = n.enter("imageReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("!["), l = n.safe(e.alt, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = [], o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function Jd() {
	return "!";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
Yd.peek = Xd;
function Yd(e, t, n) {
	let r = e.value || "", i = "`", a = -1;
	for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
	for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length;) {
		let e = n.unsafe[a], t = n.compilePattern(e), i;
		if (e.atBreak) for (; i = t.exec(r);) {
			let e = i.index;
			r.charCodeAt(e) === 10 && r.charCodeAt(e - 1) === 13 && e--, r = r.slice(0, e) + " " + r.slice(i.index + 1);
		}
	}
	return i + r + i;
}
function Xd() {
	return "`";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
function Zd(e, t) {
	let n = se(e);
	return !!(!t.options.resourceLink && e.url && !e.title && e.children && e.children.length === 1 && e.children[0].type === "text" && (n === e.url || "mailto:" + n === e.url) && /^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url));
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/link.js
Qd.peek = $d;
function Qd(e, t, n, r) {
	let i = Pd(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.createTracker(r), s, c;
	if (Zd(e, n)) {
		let t = n.stack;
		n.stack = [], s = n.enter("autolink");
		let r = o.move("<");
		return r += o.move(n.containerPhrasing(e, {
			before: r,
			after: ">",
			...o.current()
		})), r += o.move(">"), s(), n.stack = t, r;
	}
	s = n.enter("link"), c = n.enter("label");
	let l = o.move("[");
	return l += o.move(n.containerPhrasing(e, {
		before: l,
		after: "](",
		...o.current()
	})), l += o.move("]("), c(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (c = n.enter("destinationLiteral"), l += o.move("<"), l += o.move(n.safe(e.url, {
		before: l,
		after: ">",
		...o.current()
	})), l += o.move(">")) : (c = n.enter("destinationRaw"), l += o.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...o.current()
	}))), c(), e.title && (c = n.enter(`title${a}`), l += o.move(" " + i), l += o.move(n.safe(e.title, {
		before: l,
		after: i,
		...o.current()
	})), l += o.move(i), c()), l += o.move(")"), s(), l;
}
function $d(e, t, n) {
	return Zd(e, n) ? "<" : "[";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
ef.peek = tf;
function ef(e, t, n, r) {
	let i = e.referenceType, a = n.enter("linkReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("["), l = n.containerPhrasing(e, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = [], o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function tf() {
	return "[";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function nf(e) {
	let t = e.options.bullet || "*";
	if (t !== "*" && t !== "+" && t !== "-") throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
function rf(e) {
	let t = nf(e), n = e.options.bulletOther;
	if (!n) return t === "*" ? "-" : "*";
	if (n !== "*" && n !== "+" && n !== "-") throw Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
	if (n === t) throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
	return n;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
function af(e) {
	let t = e.options.bulletOrdered || ".";
	if (t !== "." && t !== ")") throw Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-rule.js
function of(e) {
	let t = e.options.rule || "*";
	if (t !== "*" && t !== "-" && t !== "_") throw Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/list.js
function sf(e, t, n, r) {
	let i = n.enter("list"), a = n.bulletCurrent, o = e.ordered ? af(n) : nf(n), s = e.ordered ? o === "." ? ")" : "." : rf(n), c = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
	if (!e.ordered) {
		let t = e.children ? e.children[0] : void 0;
		if ((o === "*" || o === "-") && t && (!t.children || !t.children[0]) && n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (c = !0), of(n) === o && t) {
			let t = -1;
			for (; ++t < e.children.length;) {
				let n = e.children[t];
				if (n && n.type === "listItem" && n.children && n.children[0] && n.children[0].type === "thematicBreak") {
					c = !0;
					break;
				}
			}
		}
	}
	c && (o = s), n.bulletCurrent = o;
	let l = n.containerFlow(e, r);
	return n.bulletLastUsed = o, n.bulletCurrent = a, i(), l;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function cf(e) {
	let t = e.options.listItemIndent || "one";
	if (t !== "tab" && t !== "one" && t !== "mixed") throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function lf(e, t, n, r) {
	let i = cf(n), a = n.bulletCurrent || nf(n);
	t && t.type === "list" && t.ordered && (a = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
	let o = a.length + 1;
	(i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
	let s = n.createTracker(r);
	s.move(a + " ".repeat(o - a.length)), s.shift(o);
	let c = n.enter("listItem"), l = n.indentLines(n.containerFlow(e, s.current()), u);
	return c(), l;
	function u(e, t, n) {
		return t ? (n ? "" : " ".repeat(o)) + e : (n ? a : a + " ".repeat(o - a.length)) + e;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
function uf(e, t, n, r) {
	let i = n.enter("paragraph"), a = n.enter("phrasing"), o = n.containerPhrasing(e, r);
	return a(), i(), o;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-phrasing@4.1.0/node_modules/mdast-util-phrasing/lib/index.js
var df = w([
	"break",
	"delete",
	"emphasis",
	"footnote",
	"footnoteReference",
	"image",
	"imageReference",
	"inlineCode",
	"inlineMath",
	"link",
	"linkReference",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"strong",
	"text",
	"textDirective"
]);
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/root.js
function ff(e, t, n, r) {
	return (e.children.some(function(e) {
		return df(e);
	}) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-strong.js
function pf(e) {
	let t = e.options.strong || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/strong.js
mf.peek = hf;
function mf(e, t, n, r) {
	let i = pf(n), a = n.enter("strong"), o = n.createTracker(r), s = o.move(i + i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = Rd(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = Ld(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = Rd(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + Ld(d));
	let p = o.move(i + i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function hf(e, t, n) {
	return n.options.strong || "*";
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/text.js
function gf(e, t, n, r) {
	return n.safe(e.value, r);
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
function _f(e) {
	let t = e.options.ruleRepetition || 3;
	if (t < 3) throw Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
function vf(e, t, n) {
	let r = (of(n) + (n.options.ruleSpaces ? " " : "")).repeat(_f(n));
	return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-to-markdown@2.1.2/node_modules/mdast-util-to-markdown/lib/handle/index.js
var yf = {
	blockquote: wd,
	break: Od,
	code: Md,
	definition: Fd,
	emphasis: zd,
	hardBreak: Od,
	heading: Hd,
	html: Ud,
	image: Gd,
	imageReference: qd,
	inlineCode: Yd,
	link: Qd,
	linkReference: ef,
	list: sf,
	listItem: lf,
	paragraph: uf,
	root: ff,
	strong: mf,
	text: gf,
	thematicBreak: vf
};
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-gfm-table@2.0.0/node_modules/mdast-util-gfm-table/lib/index.js
function bf() {
	return {
		enter: {
			table: xf,
			tableData: Tf,
			tableHeader: Tf,
			tableRow: Cf
		},
		exit: {
			codeText: Ef,
			table: Sf,
			tableData: wf,
			tableHeader: wf,
			tableRow: wf
		}
	};
}
function xf(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return e === "none" ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function Sf(e) {
	this.exit(e), this.data.inTable = void 0;
}
function Cf(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function wf(e) {
	this.exit(e);
}
function Tf(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function Ef(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, Df));
	let n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e);
}
function Df(e, t) {
	return t === "|" ? t : e;
}
function Of(e) {
	let t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, a = n ? " " : "|";
	return {
		unsafe: [
			{
				character: "\r",
				inConstruct: "tableCell"
			},
			{
				character: "\n",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: "|",
				after: "[	 :-]"
			},
			{
				character: "|",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: ":",
				after: "-"
			},
			{
				atBreak: !0,
				character: "-",
				after: "[:|-]"
			}
		],
		handlers: {
			inlineCode: f,
			table: o,
			tableCell: c,
			tableRow: s
		}
	};
	function o(e, t, n, r) {
		return l(u(e, n, r), e.align);
	}
	function s(e, t, n, r) {
		let i = l([d(e, n, r)]);
		return i.slice(0, i.indexOf("\n"));
	}
	function c(e, t, n, r) {
		let i = n.enter("tableCell"), o = n.enter("phrasing"), s = n.containerPhrasing(e, {
			...r,
			before: a,
			after: a
		});
		return o(), i(), s;
	}
	function l(e, t) {
		return xd(e, {
			align: t,
			alignDelimiters: r,
			padding: n,
			stringLength: i
		});
	}
	function u(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("table");
		for (; ++i < r.length;) a[i] = d(r[i], t, n);
		return o(), a;
	}
	function d(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("tableRow");
		for (; ++i < r.length;) a[i] = c(r[i], e, t, n);
		return o(), a;
	}
	function f(e, t, n) {
		let r = yf.inlineCode(e, t, n);
		return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-gfm-task-list-item@2.0.0/node_modules/mdast-util-gfm-task-list-item/lib/index.js
function kf() {
	return { exit: {
		taskListCheckValueChecked: jf,
		taskListCheckValueUnchecked: jf,
		paragraph: Mf
	} };
}
function Af() {
	return {
		unsafe: [{
			atBreak: !0,
			character: "-",
			after: "[:|-]"
		}],
		handlers: { listItem: Nf }
	};
}
function jf(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function Mf(e) {
	let t = this.stack[this.stack.length - 2];
	if (t && t.type === "listItem" && typeof t.checked == "boolean") {
		let e = this.stack[this.stack.length - 1];
		e.type;
		let n = e.children[0];
		if (n && n.type === "text") {
			let r = t.children, i = -1, a;
			for (; ++i < r.length;) {
				let e = r[i];
				if (e.type === "paragraph") {
					a = e;
					break;
				}
			}
			a === e && (n.value = n.value.slice(1), n.value.length === 0 ? e.children.shift() : e.position && n.position && typeof n.position.start.offset == "number" && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)));
		}
	}
	this.exit(e);
}
function Nf(e, t, n, r) {
	let i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", s = n.createTracker(r);
	a && s.move(o);
	let c = yf.listItem(e, t, n, {
		...r,
		...s.current()
	});
	return a && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, l)), c;
	function l(e) {
		return e + o;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/mdast-util-gfm@3.1.0/node_modules/mdast-util-gfm/lib/index.js
function Pf() {
	return [
		zu(),
		ld(),
		md(),
		bf(),
		kf()
	];
}
function Ff(e) {
	return { extensions: [
		Bu(),
		ud(e),
		hd(),
		Of(e),
		Af()
	] };
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-extension-gfm-autolink-literal@2.1.0/node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var If = {
	tokenize: Xf,
	partial: !0
}, Lf = {
	tokenize: Zf,
	partial: !0
}, Rf = {
	tokenize: Qf,
	partial: !0
}, zf = {
	tokenize: $f,
	partial: !0
}, Bf = {
	tokenize: ep,
	partial: !0
}, Vf = {
	name: "wwwAutolink",
	tokenize: Jf,
	previous: tp
}, Hf = {
	name: "protocolAutolink",
	tokenize: Yf,
	previous: np
}, Uf = {
	name: "emailAutolink",
	tokenize: qf,
	previous: rp
}, Wf = {};
function Gf() {
	return { text: Wf };
}
for (var Kf = 48; Kf < 123;) Wf[Kf] = Uf, Kf++, Kf === 58 ? Kf = 65 : Kf === 91 && (Kf = 97);
Wf[43] = Uf, Wf[45] = Uf, Wf[46] = Uf, Wf[95] = Uf, Wf[72] = [Uf, Hf], Wf[104] = [Uf, Hf], Wf[87] = [Uf, Vf], Wf[119] = [Uf, Vf];
function qf(e, t, n) {
	let r = this, i, a;
	return o;
	function o(t) {
		return !ip(t) || !rp.call(r, r.previous) || ap(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(t));
	}
	function s(t) {
		return ip(t) ? (e.consume(t), s) : t === 64 ? (e.consume(t), c) : n(t);
	}
	function c(t) {
		return t === 46 ? e.check(Bf, u, l)(t) : t === 45 || t === 95 || k(t) ? (a = !0, e.consume(t), c) : u(t);
	}
	function l(t) {
		return e.consume(t), i = !0, c;
	}
	function u(o) {
		return a && i && O(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
	}
}
function Jf(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t !== 87 && t !== 119 || !tp.call(r, r.previous) || ap(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(If, e.attempt(Lf, e.attempt(Rf, a), n), n)(t));
	}
	function a(n) {
		return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
	}
}
function Yf(e, t, n) {
	let r = this, i = "", a = !1;
	return o;
	function o(t) {
		return (t === 72 || t === 104) && np.call(r, r.previous) && !ap(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), s) : n(t);
	}
	function s(t) {
		if (O(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), s;
		if (t === 58) {
			let n = i.toLowerCase();
			if (n === "http" || n === "https") return e.consume(t), c;
		}
		return n(t);
	}
	function c(t) {
		return t === 47 ? (e.consume(t), a ? l : (a = !0, c)) : n(t);
	}
	function l(t) {
		return t === null || ye(t) || j(t) || we(t) || Ce(t) ? n(t) : e.attempt(Lf, e.attempt(Rf, u), n)(t);
	}
	function u(n) {
		return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
	}
}
function Xf(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return (t === 87 || t === 119) && r < 3 ? (r++, e.consume(t), i) : t === 46 && r === 3 ? (e.consume(t), a) : n(t);
	}
	function a(e) {
		return e === null ? n(e) : t(e);
	}
}
function Zf(e, t, n) {
	let r, i, a;
	return o;
	function o(t) {
		return t === 46 || t === 95 ? e.check(zf, c, s)(t) : t === null || j(t) || we(t) || t !== 45 && Ce(t) ? c(t) : (a = !0, e.consume(t), o);
	}
	function s(t) {
		return t === 95 ? r = !0 : (i = r, r = void 0), e.consume(t), o;
	}
	function c(e) {
		return i || r || !a ? n(e) : t(e);
	}
}
function Qf(e, t) {
	let n = 0, r = 0;
	return i;
	function i(o) {
		return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(zf, t, a)(o) : o === null || j(o) || we(o) ? t(o) : (e.consume(o), i);
	}
	function a(t) {
		return t === 41 && r++, e.consume(t), i;
	}
}
function $f(e, t, n) {
	return r;
	function r(o) {
		return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), a) : o === 93 ? (e.consume(o), i) : o === 60 || o === null || j(o) || we(o) ? t(o) : n(o);
	}
	function i(e) {
		return e === null || e === 40 || e === 91 || j(e) || we(e) ? t(e) : r(e);
	}
	function a(e) {
		return O(e) ? o(e) : n(e);
	}
	function o(t) {
		return t === 59 ? (e.consume(t), r) : O(t) ? (e.consume(t), o) : n(t);
	}
}
function ep(e, t, n) {
	return r;
	function r(t) {
		return e.consume(t), i;
	}
	function i(e) {
		return k(e) ? n(e) : t(e);
	}
}
function tp(e) {
	return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || j(e);
}
function np(e) {
	return !O(e);
}
function rp(e) {
	return !(e === 47 || ip(e));
}
function ip(e) {
	return e === 43 || e === 45 || e === 46 || e === 95 || k(e);
}
function ap(e) {
	let t = e.length, n = !1;
	for (; t--;) {
		let r = e[t][1];
		if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
			n = !0;
			break;
		}
		if (r._gfmAutolinkLiteralWalkedInto) {
			n = !1;
			break;
		}
	}
	return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-extension-gfm-footnote@2.1.0/node_modules/micromark-extension-gfm-footnote/lib/syntax.js
var op = {
	tokenize: mp,
	partial: !0
};
function sp() {
	return {
		document: { 91: {
			name: "gfmFootnoteDefinition",
			tokenize: dp,
			continuation: { tokenize: fp },
			exit: pp
		} },
		text: {
			91: {
				name: "gfmFootnoteCall",
				tokenize: up
			},
			93: {
				name: "gfmPotentialFootnoteCall",
				add: "after",
				tokenize: cp,
				resolveTo: lp
			}
		}
	};
}
function cp(e, t, n) {
	let r = this, i = r.events.length, a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), o;
	for (; i--;) {
		let e = r.events[i][1];
		if (e.type === "labelImage") {
			o = e;
			break;
		}
		if (e.type === "gfmFootnoteCall" || e.type === "labelLink" || e.type === "label" || e.type === "image" || e.type === "link") break;
	}
	return s;
	function s(i) {
		if (!o || !o._balanced) return n(i);
		let s = _e(r.sliceSerialize({
			start: o.end,
			end: r.now()
		}));
		return s.codePointAt(0) !== 94 || !a.includes(s.slice(1)) ? n(i) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(i), e.exit("gfmFootnoteCallLabelMarker"), t(i));
	}
}
function lp(e, t) {
	let n = e.length;
	for (; n--;) if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
		e[n][1];
		break;
	}
	e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
	let r = {
		type: "gfmFootnoteCall",
		start: Object.assign({}, e[n + 3][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	}, i = {
		type: "gfmFootnoteCallMarker",
		start: Object.assign({}, e[n + 3][1].end),
		end: Object.assign({}, e[n + 3][1].end)
	};
	i.end.column++, i.end.offset++, i.end._bufferIndex++;
	let a = {
		type: "gfmFootnoteCallString",
		start: Object.assign({}, i.end),
		end: Object.assign({}, e[e.length - 1][1].start)
	}, o = {
		type: "chunkString",
		contentType: "string",
		start: Object.assign({}, a.start),
		end: Object.assign({}, a.end)
	}, s = [
		e[n + 1],
		e[n + 2],
		[
			"enter",
			r,
			t
		],
		e[n + 3],
		e[n + 4],
		[
			"enter",
			i,
			t
		],
		[
			"exit",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"enter",
			o,
			t
		],
		[
			"exit",
			o,
			t
		],
		[
			"exit",
			a,
			t
		],
		e[e.length - 2],
		e[e.length - 1],
		[
			"exit",
			r,
			t
		]
	];
	return e.splice(n, e.length - n + 1, ...s), e;
}
function up(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a = 0, o;
	return s;
	function s(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), c;
	}
	function c(t) {
		return t === 94 ? (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", l) : n(t);
	}
	function l(s) {
		if (a > 999 || s === 93 && !o || s === null || s === 91 || j(s)) return n(s);
		if (s === 93) {
			e.exit("chunkString");
			let a = e.exit("gfmFootnoteCallString");
			return i.includes(_e(r.sliceSerialize(a))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(s);
		}
		return j(s) || (o = !0), a++, e.consume(s), s === 92 ? u : l;
	}
	function u(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), a++, l) : l(t);
	}
}
function dp(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a, o = 0, s;
	return c;
	function c(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), l;
	}
	function l(t) {
		return t === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", u) : n(t);
	}
	function u(t) {
		if (o > 999 || t === 93 && !s || t === null || t === 91 || j(t)) return n(t);
		if (t === 93) {
			e.exit("chunkString");
			let n = e.exit("gfmFootnoteDefinitionLabelString");
			return a = _e(r.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
		}
		return j(t) || (s = !0), o++, e.consume(t), t === 92 ? d : u;
	}
	function d(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), o++, u) : u(t);
	}
	function f(t) {
		return t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), i.includes(a) || i.push(a), N(e, p, "gfmFootnoteDefinitionWhitespace")) : n(t);
	}
	function p(e) {
		return t(e);
	}
}
function fp(e, t, n) {
	return e.check(Ve, t, e.attempt(op, t, n));
}
function pp(e) {
	e.exit("gfmFootnoteDefinition");
}
function mp(e, t, n) {
	let r = this;
	return N(e, i, "gfmFootnoteDefinitionIndent", 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "gfmFootnoteDefinitionIndent" && i[2].sliceSerialize(i[1], !0).length === 4 ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-extension-gfm-strikethrough@2.1.0/node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function hp(e) {
	let t = (e || {}).singleTilde, n = {
		name: "strikethrough",
		tokenize: i,
		resolveAll: r
	};
	return t ??= !0, {
		text: { 126: n },
		insideSpan: { null: [n] },
		attentionMarkers: { null: [126] }
	};
	function r(e, t) {
		let n = -1;
		for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "strikethroughSequenceTemporary" && e[n][1]._close) {
			let r = n;
			for (; r--;) if (e[r][0] === "exit" && e[r][1].type === "strikethroughSequenceTemporary" && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset === e[r][1].end.offset - e[r][1].start.offset) {
				e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
				let i = {
					type: "strikethrough",
					start: Object.assign({}, e[r][1].start),
					end: Object.assign({}, e[n][1].end)
				}, a = {
					type: "strikethroughText",
					start: Object.assign({}, e[r][1].end),
					end: Object.assign({}, e[n][1].start)
				}, o = [
					[
						"enter",
						i,
						t
					],
					[
						"enter",
						e[r][1],
						t
					],
					[
						"exit",
						e[r][1],
						t
					],
					[
						"enter",
						a,
						t
					]
				], s = t.parser.constructs.insideSpan.null;
				s && E(o, o.length, 0, Pe(s, e.slice(r + 1, n), t)), E(o, o.length, 0, [
					[
						"exit",
						a,
						t
					],
					[
						"enter",
						e[n][1],
						t
					],
					[
						"exit",
						e[n][1],
						t
					],
					[
						"exit",
						i,
						t
					]
				]), E(e, r - 1, n - r + 3, o), n = r + o.length - 2;
				break;
			}
		}
		for (n = -1; ++n < e.length;) e[n][1].type === "strikethroughSequenceTemporary" && (e[n][1].type = "data");
		return e;
	}
	function i(e, n, r) {
		let i = this.previous, a = this.events, o = 0;
		return s;
		function s(t) {
			return i === 126 && a[a.length - 1][1].type !== "characterEscape" ? r(t) : (e.enter("strikethroughSequenceTemporary"), c(t));
		}
		function c(a) {
			let s = Ne(i);
			if (a === 126) return o > 1 ? r(a) : (e.consume(a), o++, c);
			if (o < 2 && !t) return r(a);
			let l = e.exit("strikethroughSequenceTemporary"), u = Ne(a);
			return l._open = !u || u === 2 && !!s, l._close = !s || s === 2 && !!u, n(a);
		}
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-extension-gfm-table@2.1.1/node_modules/micromark-extension-gfm-table/lib/edit-map.js
var gp = class {
	constructor() {
		this.map = [];
	}
	add(e, t, n) {
		_p(this, e, t, n);
	}
	consume(e) {
		/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), this.map.length === 0) return;
		let t = this.map.length, n = [];
		for (; t > 0;) --t, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		n.push(e.slice()), e.length = 0;
		let r = n.pop();
		for (; r;) {
			for (let t of r) e.push(t);
			r = n.pop();
		}
		this.map.length = 0;
	}
};
function _p(e, t, n, r) {
	let i = 0;
	if (!(n === 0 && r.length === 0)) {
		for (; i < e.map.length;) {
			if (e.map[i][0] === t) {
				e.map[i][1] += n, e.map[i][2].push(...r);
				return;
			}
			i += 1;
		}
		e.map.push([
			t,
			n,
			r
		]);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-extension-gfm-table@2.1.1/node_modules/micromark-extension-gfm-table/lib/infer.js
function vp(e, t) {
	let n = !1, r = [];
	for (; t < e.length;) {
		let i = e[t];
		if (n) {
			if (i[0] === "enter") i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
			else if (i[1].type === "tableContent") {
				if (e[t - 1][1].type === "tableDelimiterMarker") {
					let e = r.length - 1;
					r[e] = r[e] === "left" ? "center" : "right";
				}
			} else if (i[1].type === "tableDelimiterRow") break;
		} else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
		t += 1;
	}
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-extension-gfm-table@2.1.1/node_modules/micromark-extension-gfm-table/lib/syntax.js
function yp() {
	return { flow: { null: {
		name: "table",
		tokenize: bp,
		resolveAll: xp
	} } };
}
function bp(e, t, n) {
	let r = this, i = 0, a = 0, o;
	return s;
	function s(e) {
		let t = r.events.length - 1;
		for (; t > -1;) {
			let e = r.events[t][1].type;
			if (e === "lineEnding" || e === "linePrefix") t--;
			else break;
		}
		let i = t > -1 ? r.events[t][1].type : null, a = i === "tableHead" || i === "tableRow" ? te : c;
		return a === te && r.parser.lazy[r.now().line] ? n(e) : a(e);
	}
	function c(t) {
		return e.enter("tableHead"), e.enter("tableRow"), l(t);
	}
	function l(e) {
		return e === 124 ? u(e) : (o = !0, a += 1, u(e));
	}
	function u(t) {
		return t === null ? n(t) : A(t) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p) : n(t) : M(t) ? N(e, u, "whitespace")(t) : (a += 1, o && (o = !1, i += 1), t === 124 ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), o = !0, u) : (e.enter("data"), d(t)));
	}
	function d(t) {
		return t === null || t === 124 || j(t) ? (e.exit("data"), u(t)) : (e.consume(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 92 || t === 124 ? (e.consume(t), d) : d(t);
	}
	function p(t) {
		return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(t) : (e.enter("tableDelimiterRow"), o = !1, M(t) ? N(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : m(t));
	}
	function m(t) {
		return t === 45 || t === 58 ? g(t) : t === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), h) : b(t);
	}
	function h(t) {
		return M(t) ? N(e, g, "whitespace")(t) : g(t);
	}
	function g(t) {
		return t === 58 ? (a += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), _) : t === 45 ? (a += 1, _(t)) : t === null || A(t) ? ee(t) : b(t);
	}
	function _(t) {
		return t === 45 ? (e.enter("tableDelimiterFiller"), v(t)) : b(t);
	}
	function v(t) {
		return t === 45 ? (e.consume(t), v) : t === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), y) : (e.exit("tableDelimiterFiller"), y(t));
	}
	function y(t) {
		return M(t) ? N(e, ee, "whitespace")(t) : ee(t);
	}
	function ee(n) {
		return n === 124 ? m(n) : n === null || A(n) ? !o || i !== a ? b(n) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(n)) : b(n);
	}
	function b(e) {
		return n(e);
	}
	function te(t) {
		return e.enter("tableRow"), x(t);
	}
	function x(n) {
		return n === 124 ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), x) : n === null || A(n) ? (e.exit("tableRow"), t(n)) : M(n) ? N(e, x, "whitespace")(n) : (e.enter("data"), ne(n));
	}
	function ne(t) {
		return t === null || t === 124 || j(t) ? (e.exit("data"), x(t)) : (e.consume(t), t === 92 ? re : ne);
	}
	function re(t) {
		return t === 92 || t === 124 ? (e.consume(t), ne) : ne(t);
	}
}
function xp(e, t) {
	let n = -1, r = !0, i = 0, a = [
		0,
		0,
		0,
		0
	], o = [
		0,
		0,
		0,
		0
	], s = !1, c = 0, l, u, d, f = new gp();
	for (; ++n < e.length;) {
		let p = e[n], m = p[1];
		p[0] === "enter" ? m.type === "tableHead" ? (s = !1, c !== 0 && (Cp(f, t, c, l, u), u = void 0, c = 0), l = {
			type: "table",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			l,
			t
		]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, d = void 0, a = [
			0,
			0,
			0,
			0
		], o = [
			0,
			n + 1,
			0,
			0
		], s && (s = !1, u = {
			type: "tableBody",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			u,
			t
		]])), i = m.type === "tableDelimiterRow" ? 2 : u ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (a[1] !== 0 && (o[0] = o[1], d = Sp(f, t, a, i, void 0, d), a = [
			0,
			0,
			0,
			0
		]), o[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1], d = Sp(f, t, a, i, void 0, d)), a = o, o = [
			a[1],
			n,
			0,
			0
		])) : m.type === "tableHead" ? (s = !0, c = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (c = n, a[1] === 0 ? o[1] !== 0 && (d = Sp(f, t, o, i, n, d)) : (o[0] = o[1], d = Sp(f, t, a, i, n, d)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (o[3] = n);
	}
	for (c !== 0 && Cp(f, t, c, l, u), f.consume(t.events), n = -1; ++n < t.events.length;) {
		let e = t.events[n];
		e[0] === "enter" && e[1].type === "table" && (e[1]._align = vp(t.events, n));
	}
	return e;
}
function Sp(e, t, n, r, i, a) {
	let o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData";
	n[0] !== 0 && (a.end = Object.assign({}, wp(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		a,
		t
	]]));
	let s = wp(t.events, n[1]);
	if (a = {
		type: o,
		start: Object.assign({}, s),
		end: Object.assign({}, s)
	}, e.add(n[1], 0, [[
		"enter",
		a,
		t
	]]), n[2] !== 0) {
		let i = wp(t.events, n[2]), a = wp(t.events, n[3]), o = {
			type: "tableContent",
			start: Object.assign({}, i),
			end: Object.assign({}, a)
		};
		if (e.add(n[2], 0, [[
			"enter",
			o,
			t
		]]), r !== 2) {
			let r = t.events[n[2]], i = t.events[n[3]];
			if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
				let t = n[2] + 1, r = n[3] - n[2] - 1;
				e.add(t, r, []);
			}
		}
		e.add(n[3] + 1, 0, [[
			"exit",
			o,
			t
		]]);
	}
	return i !== void 0 && (a.end = Object.assign({}, wp(t.events, i)), e.add(i, 0, [[
		"exit",
		a,
		t
	]]), a = void 0), a;
}
function Cp(e, t, n, r, i) {
	let a = [], o = wp(t.events, n);
	i && (i.end = Object.assign({}, o), a.push([
		"exit",
		i,
		t
	])), r.end = Object.assign({}, o), a.push([
		"exit",
		r,
		t
	]), e.add(n + 1, 0, a);
}
function wp(e, t) {
	let n = e[t], r = n[0] === "enter" ? "start" : "end";
	return n[1][r];
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-extension-gfm-task-list-item@2.1.0/node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
var Tp = {
	name: "tasklistCheck",
	tokenize: Dp
};
function Ep() {
	return { text: { 91: Tp } };
}
function Dp(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(t) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), a);
	}
	function a(t) {
		return j(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), o) : t === 88 || t === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), o) : n(t);
	}
	function o(t) {
		return t === 93 ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(t);
	}
	function s(r) {
		return A(r) ? t(r) : M(r) ? e.check({ tokenize: Op }, t, n)(r) : n(r);
	}
}
function Op(e, t, n) {
	return N(e, r, "whitespace");
	function r(e) {
		return e === null ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/micromark-extension-gfm@3.0.0/node_modules/micromark-extension-gfm/index.js
function kp(e) {
	return pe([
		Gf(),
		sp(),
		hp(e),
		yp(),
		Ep()
	]);
}
//#endregion
//#region ../../node_modules/.pnpm/remark-gfm@4.0.1/node_modules/remark-gfm/lib/index.js
var Ap = {};
function jp(e) {
	let t = this, n = e || Ap, r = t.data(), i = r.micromarkExtensions ||= [], a = r.fromMarkdownExtensions ||= [], o = r.toMarkdownExtensions ||= [];
	i.push(kp(n)), a.push(Pf()), o.push(Ff(n));
}
//#endregion
//#region src/lib/components/Markdown.tsx
var Mp = /* @__PURE__ */ t({ Markdown: () => Fp }), Np = [jp], Pp = (e) => () => (t) => {
	let n = new Map(e.filter((e) => e !== e.toLowerCase()).map((e) => [e.toLowerCase(), e]));
	x(t, "element", (e) => {
		let t = n.get(e.tagName);
		t && (e.tagName = t);
	});
}, Fp = (0, Ri.memo)(({ content: e, className: t, components: n }) => {
	let { syntaxHighlighting: r } = s().options, o = ie(), c = a(), l = (0, Ri.useMemo)(() => ({
		...c,
		...n
	}), [c, n]);
	return /* @__PURE__ */ (0, Li.jsx)(i, {
		className: t,
		children: /* @__PURE__ */ (0, Li.jsx)(Ui, {
			remarkPlugins: Np,
			rehypePlugins: (0, Ri.useMemo)(() => [
				ju,
				Pp(Object.keys(l)),
				...C(o, r?.themes)
			], [
				r?.themes,
				o,
				l
			]),
			components: l,
			children: e
		})
	});
});
Fp.displayName = "Markdown";
//#endregion
export { Mp as n, Fp as t };
