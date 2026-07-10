import { a as e } from "./chunk-HEgqtunE.js";
import { t } from "./react-DCUEsnwl.js";
import { r as n } from "./ZudokuContext-BxG8utmj.js";
//#region src/lib/hooks/useHighlighter.ts
var r = /* @__PURE__ */ e(t(), 1), i = () => {
	let { syntaxHighlighting: e } = n().options;
	if (!e) throw Error("Syntax highlighting not configured. Provide highlighterPromise in syntaxHighlighting options.");
	return (0, r.use)(e.highlighterPromise);
};
//#endregion
export { i as t };
