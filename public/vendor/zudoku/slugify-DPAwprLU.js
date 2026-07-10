//#region src/lib/util/slugify.ts
var e = (e) => e.normalize("NFKD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/['\u2018\u2019\u201C\u201D]/g, "").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-+|-+$/g, ""), t = () => {
	let t = /* @__PURE__ */ new Map();
	return (n) => {
		let r = e(n), i = t.get(r) ?? 0;
		return t.set(r, i + 1), i === 0 ? r : `${r}-${i + 1}`;
	};
};
//#endregion
export { t as n, e as t };
