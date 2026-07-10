import { _ as e, a as t, c as n, d as r, f as i, g as a, h as o, i as s, l as c, m as ee, n as l, o as u, p as te, r as d, s as ne, t as f, u as re, v as p, y as m } from "./chunk-NNHCCRGN-PE4Czi2M.js";
//#region ../../node_modules/.pnpm/@mermaid-js+parser@1.1.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-4EGX6M5U.mjs
var h = class extends f {
	static {
		a(this, "ArchitectureTokenBuilder");
	}
	constructor() {
		super(["architecture"]);
	}
}, g = class extends l {
	static {
		a(this, "ArchitectureValueConverter");
	}
	runCustomConverter(e, t, n) {
		if (e.name === "ARCH_ICON") return t.replace(/[()]/g, "").trim();
		if (e.name === "ARCH_TEXT_ICON") return t.replace(/["()]/g, "");
		if (e.name === "ARCH_TITLE") {
			let e = t.replace(/^\[|]$/g, "").trim();
			return (e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'")) && (e = e.slice(1, -1), e = e.replace(/\\"/g, "\"").replace(/\\'/g, "'")), e.trim();
		}
	}
}, _ = { parser: {
	TokenBuilder: /* @__PURE__ */ a(() => new h(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ a(() => new g(), "ValueConverter")
} };
function v(n = t) {
	let r = m(p(n), c), i = m(e({ shared: r }), d, _);
	return r.ServiceRegistry.register(i), {
		shared: r,
		Architecture: i
	};
}
a(v, "createArchitectureServices");
//#endregion
//#region ../../node_modules/.pnpm/@mermaid-js+parser@1.1.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-N66VUXT2.mjs
var y = class extends f {
	static {
		a(this, "EventModelingTokenBuilder");
	}
	constructor() {
		super(["eventmodeling"]);
	}
}, b = /* @__PURE__ */ new Set(["cmd", "command"]), x = /* @__PURE__ */ new Set(["evt", "event"]), S = /* @__PURE__ */ new Set(["rmo", "readmodel"]), C = /* @__PURE__ */ new Set(["pcr", "processor"]), w = /* @__PURE__ */ new Set(["ui"]);
function T(e) {
	let t = e.validation.EventModelingValidator, n = e.validation.ValidationRegistry;
	if (n) {
		let e = {
			EmTimeFrame: t.checkSourceFrameTypes.bind(t),
			EmResetFrame: t.checkSourceFrameTypes.bind(t)
		};
		n.register(e, t);
	}
}
a(T, "registerValidationChecks");
var ie = class {
	static {
		a(this, "EventModelingValidator");
	}
	checkSourceFrameTypes(e, t) {
		e.sourceFrames.length !== 0 && (b.has(e.modelEntityType) ? this.validateSources(e, /* @__PURE__ */ new Set([...w, ...C]), "command", "ui or processor", t) : x.has(e.modelEntityType) ? this.validateSources(e, b, "event", "command", t) : S.has(e.modelEntityType) ? this.validateSources(e, x, "read model", "event", t) : C.has(e.modelEntityType) ? this.validateSources(e, S, "processor", "read model", t) : w.has(e.modelEntityType) && this.validateSources(e, S, "ui", "read model", t));
	}
	validateSources(e, t, n, r, i) {
		for (let a of e.sourceFrames) {
			let o = a.ref;
			o !== void 0 && !t.has(o.modelEntityType) && i("error", `A ${n} can only receive input from a ${r}, not from '${o.modelEntityType}'.`, {
				node: e,
				property: "sourceFrames"
			});
		}
	}
}, E = {
	parser: {
		TokenBuilder: /* @__PURE__ */ a(() => new y(), "TokenBuilder"),
		ValueConverter: /* @__PURE__ */ a(() => new s(), "ValueConverter")
	},
	validation: { EventModelingValidator: /* @__PURE__ */ a(() => new ie(), "EventModelingValidator") }
};
function D(n = t) {
	let r = m(p(n), c), i = m(e({ shared: r }), u, E);
	return r.ServiceRegistry.register(i), T(i), {
		shared: r,
		EventModel: i
	};
}
a(D, "createEventModelingServices");
//#endregion
//#region ../../node_modules/.pnpm/@mermaid-js+parser@1.1.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-UIBZB4QT.mjs
var O = class extends f {
	static {
		a(this, "GitGraphTokenBuilder");
	}
	constructor() {
		super(["gitGraph"]);
	}
}, k = { parser: {
	TokenBuilder: /* @__PURE__ */ a(() => new O(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ a(() => new s(), "ValueConverter")
} };
function A(n = t) {
	let r = m(p(n), c), i = m(e({ shared: r }), ne, k);
	return r.ServiceRegistry.register(i), {
		shared: r,
		GitGraph: i
	};
}
a(A, "createGitGraphServices");
//#endregion
//#region ../../node_modules/.pnpm/@mermaid-js+parser@1.1.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-5DO6E6H7.mjs
var j = class extends f {
	static {
		a(this, "InfoTokenBuilder");
	}
	constructor() {
		super(["info", "showInfo"]);
	}
}, M = { parser: {
	TokenBuilder: /* @__PURE__ */ a(() => new j(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ a(() => new s(), "ValueConverter")
} };
function N(r = t) {
	let i = m(p(r), c), a = m(e({ shared: i }), n, M);
	return i.ServiceRegistry.register(a), {
		shared: i,
		Info: a
	};
}
a(N, "createInfoServices");
//#endregion
//#region ../../node_modules/.pnpm/@mermaid-js+parser@1.1.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-MPE355IW.mjs
var ae = class extends f {
	static {
		a(this, "PacketTokenBuilder");
	}
	constructor() {
		super(["packet"]);
	}
}, P = { parser: {
	TokenBuilder: /* @__PURE__ */ a(() => new ae(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ a(() => new s(), "ValueConverter")
} };
function F(n = t) {
	let r = m(p(n), c), i = m(e({ shared: r }), re, P);
	return r.ServiceRegistry.register(i), {
		shared: r,
		Packet: i
	};
}
a(F, "createPacketServices");
//#endregion
//#region ../../node_modules/.pnpm/@mermaid-js+parser@1.1.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-MZUSXYTE.mjs
var oe = class extends f {
	static {
		a(this, "PieTokenBuilder");
	}
	constructor() {
		super(["pie", "showData"]);
	}
}, I = class extends l {
	static {
		a(this, "PieValueConverter");
	}
	runCustomConverter(e, t, n) {
		if (e.name === "PIE_SECTION_LABEL") return t.replace(/"/g, "").trim();
	}
}, L = { parser: {
	TokenBuilder: /* @__PURE__ */ a(() => new oe(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ a(() => new I(), "ValueConverter")
} };
function R(n = t) {
	let i = m(p(n), c), a = m(e({ shared: i }), r, L);
	return i.ServiceRegistry.register(a), {
		shared: i,
		Pie: a
	};
}
a(R, "createPieServices");
//#endregion
//#region ../../node_modules/.pnpm/@mermaid-js+parser@1.1.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-FHYWG6QK.mjs
var z = class extends f {
	static {
		a(this, "RadarTokenBuilder");
	}
	constructor() {
		super(["radar-beta"]);
	}
}, B = { parser: {
	TokenBuilder: /* @__PURE__ */ a(() => new z(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ a(() => new s(), "ValueConverter")
} };
function V(n = t) {
	let r = m(p(n), c), a = m(e({ shared: r }), i, B);
	return r.ServiceRegistry.register(a), {
		shared: r,
		Radar: a
	};
}
a(V, "createRadarServices");
//#endregion
//#region ../../node_modules/.pnpm/@mermaid-js+parser@1.1.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-WCWK7LTN.mjs
var H = class extends l {
	static {
		a(this, "TreeViewValueConverter");
	}
	runCustomConverter(e, t, n) {
		if (e.name === "INDENTATION") return t?.length || 0;
		if (e.name === "STRING2") return t.substring(1, t.length - 1);
	}
}, U = class extends f {
	static {
		a(this, "TreeViewTokenBuilder");
	}
	constructor() {
		super(["treeView-beta"]);
	}
}, W = { parser: {
	TokenBuilder: /* @__PURE__ */ a(() => new U(), "TokenBuilder"),
	ValueConverter: /* @__PURE__ */ a(() => new H(), "ValueConverter")
} };
function G(n = t) {
	let r = m(p(n), c), i = m(e({ shared: r }), te, W);
	return r.ServiceRegistry.register(i), {
		shared: r,
		TreeView: i
	};
}
a(G, "createTreeViewServices");
//#endregion
//#region ../../node_modules/.pnpm/@mermaid-js+parser@1.1.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-BR22UD5L.mjs
var K = class extends f {
	static {
		a(this, "TreemapTokenBuilder");
	}
	constructor() {
		super(["treemap"]);
	}
}, se = /classDef\s+([A-Z_a-z]\w+)(?:\s+([^\n\r;]*))?;?/, ce = class extends l {
	static {
		a(this, "TreemapValueConverter");
	}
	runCustomConverter(e, t, n) {
		if (e.name === "NUMBER2") return parseFloat(t.replace(/,/g, ""));
		if (e.name === "SEPARATOR" || e.name === "STRING2") return t.substring(1, t.length - 1);
		if (e.name === "INDENTATION") return t.length;
		if (e.name === "ClassDef") {
			if (typeof t != "string") return t;
			let e = se.exec(t);
			if (e) return {
				$type: "ClassDefStatement",
				className: e[1],
				styleText: e[2] || void 0
			};
		}
	}
};
function q(e) {
	let t = e.validation.TreemapValidator, n = e.validation.ValidationRegistry;
	if (n) {
		let e = { Treemap: t.checkSingleRoot.bind(t) };
		n.register(e, t);
	}
}
a(q, "registerValidationChecks");
var le = class {
	static {
		a(this, "TreemapValidator");
	}
	checkSingleRoot(e, t) {
		let n;
		for (let r of e.TreemapRows) r.item && (n === void 0 && r.indent === void 0 ? n = 0 : (r.indent === void 0 || n !== void 0 && n >= parseInt(r.indent, 10)) && t("error", "Multiple root nodes are not allowed in a treemap.", {
			node: r,
			property: "item"
		}));
	}
}, J = {
	parser: {
		TokenBuilder: /* @__PURE__ */ a(() => new K(), "TokenBuilder"),
		ValueConverter: /* @__PURE__ */ a(() => new ce(), "ValueConverter")
	},
	validation: { TreemapValidator: /* @__PURE__ */ a(() => new le(), "TreemapValidator") }
};
function Y(n = t) {
	let r = m(p(n), c), i = m(e({ shared: r }), ee, J);
	return r.ServiceRegistry.register(i), q(i), {
		shared: r,
		Treemap: i
	};
}
a(Y, "createTreemapServices");
//#endregion
//#region ../../node_modules/.pnpm/@mermaid-js+parser@1.1.1/node_modules/@mermaid-js/parser/dist/chunks/mermaid-parser.core/chunk-PUPMXCY4.mjs
var ue = class extends l {
	static {
		a(this, "WardleyValueConverter");
	}
	runCustomConverter(e, t, n) {
		switch (e.name.toUpperCase()) {
			case "LINK_LABEL": return t.substring(1).trim();
			default: return;
		}
	}
}, X = { parser: { ValueConverter: /* @__PURE__ */ a(() => new ue(), "ValueConverter") } };
function Z(n = t) {
	let r = m(p(n), c), i = m(e({ shared: r }), o, X);
	return r.ServiceRegistry.register(i), {
		shared: r,
		Wardley: i
	};
}
a(Z, "createWardleyServices");
//#endregion
//#region ../../node_modules/.pnpm/@mermaid-js+parser@1.1.1/node_modules/@mermaid-js/parser/dist/mermaid-parser.core.mjs
var Q = {}, de = {
	info: /* @__PURE__ */ a(async () => {
		let { createInfoServices: e } = await import("./info-J43DQDTF-Czy8KmPt.js");
		Q.info = e().Info.parser.LangiumParser;
	}, "info"),
	packet: /* @__PURE__ */ a(async () => {
		let { createPacketServices: e } = await import("./packet-YPE3B663-BVhJioZ-.js");
		Q.packet = e().Packet.parser.LangiumParser;
	}, "packet"),
	pie: /* @__PURE__ */ a(async () => {
		let { createPieServices: e } = await import("./pie-LRSECV5Y-D9WiYtWw.js");
		Q.pie = e().Pie.parser.LangiumParser;
	}, "pie"),
	treeView: /* @__PURE__ */ a(async () => {
		let { createTreeViewServices: e } = await import("./treeView-BLDUP644-V27ctYyu.js");
		Q.treeView = e().TreeView.parser.LangiumParser;
	}, "treeView"),
	architecture: /* @__PURE__ */ a(async () => {
		let { createArchitectureServices: e } = await import("./architecture-7EHR7CIX-DM2Ktb85.js");
		Q.architecture = e().Architecture.parser.LangiumParser;
	}, "architecture"),
	gitGraph: /* @__PURE__ */ a(async () => {
		let { createGitGraphServices: e } = await import("./gitGraph-WXDBUCRP-CCgBHXLW.js");
		Q.gitGraph = e().GitGraph.parser.LangiumParser;
	}, "gitGraph"),
	eventmodeling: /* @__PURE__ */ a(async () => {
		let { createEventModelingServices: e } = await import("./eventmodeling-FCH6USID-BqBmGhoM.js");
		Q.eventmodeling = e().EventModel.parser.LangiumParser;
	}, "eventmodeling"),
	radar: /* @__PURE__ */ a(async () => {
		let { createRadarServices: e } = await import("./radar-GUYGQ44K-AUpOzcGM.js");
		Q.radar = e().Radar.parser.LangiumParser;
	}, "radar"),
	treemap: /* @__PURE__ */ a(async () => {
		let { createTreemapServices: e } = await import("./treemap-LRROVOQU-BETNRvuS.js");
		Q.treemap = e().Treemap.parser.LangiumParser;
	}, "treemap"),
	wardley: /* @__PURE__ */ a(async () => {
		let { createWardleyServices: e } = await import("./wardley-L42UT6IY-BgoagvFH.js");
		Q.wardley = e().Wardley.parser.LangiumParser;
	}, "wardley")
};
async function $(e, t) {
	let n = de[e];
	if (!n) throw Error(`Unknown diagram type: ${e}`);
	Q[e] || await n();
	let r = Q[e].parse(t);
	if (r.lexerErrors.length > 0 || r.parserErrors.length > 0) throw new fe(r);
	return r.value;
}
a($, "parse");
var fe = class extends Error {
	constructor(e) {
		let t = e.lexerErrors.map((e) => `Lexer error on line ${e.line !== void 0 && !isNaN(e.line) ? e.line : "?"}, column ${e.column !== void 0 && !isNaN(e.column) ? e.column : "?"}: ${e.message}`).join("\n"), n = e.parserErrors.map((e) => `Parse error on line ${e.token.startLine !== void 0 && !isNaN(e.token.startLine) ? e.token.startLine : "?"}, column ${e.token.startColumn !== void 0 && !isNaN(e.token.startColumn) ? e.token.startColumn : "?"}: ${e.message}`).join("\n");
		super(`Parsing failed: ${t} ${n}`), this.result = e;
	}
	static {
		a(this, "MermaidParseError");
	}
};
//#endregion
export { A as _, Y as a, _ as b, B as c, R as d, P as f, k as g, N as h, J as i, V as l, M as m, X as n, W as o, F as p, Z as r, G as s, $ as t, L as u, E as v, v as x, D as y };
